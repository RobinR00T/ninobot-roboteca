"use strict";
/* ============================================================
   Pegamento de la VOZ ROBÓTICA: conecta el motor eSpeak embebido
   (21-robovoice.js) con el sistema de habla del juego (Speech).
   Ajustes: tipo de voz "robot" (eSpeak, por defecto) o "human"
   (las voces del sistema de siempre). Si una voz robótica aún no
   está cargada, se cae con elegancia a la voz humana.
   ============================================================ */

/* tipo de voz por defecto: robótica (migración suave del estado guardado) */
if (!S.settings.voiceKind) S.settings.voiceKind = "robot";

const RoboVoice = {
  ready: {},
  VOICE_ID: { es: "es", ca: "ca", cs: "cs", fr: "fr", en: "en/en" },

  boot() {
    if (!window.meSpeak) return;
    ["es", "ca", "cs", "fr", "en/en"].forEach(v => {
      try {
        meSpeak.loadVoice(v, ok => { if (ok) RoboVoice.ready[v.slice(0, 2)] = true; });
      } catch (e) { /* sin voz robótica para este idioma */ }
    });
  },

  _cur: null,
  _sgen: 0,

  /* pitch del juego (0.6-1.45) a pitch eSpeak (0-99); rate (0.65-1.15) a palabras/min.
     El WAV lo genera eSpeak pero lo reproducimos NOSOTROS (Web Audio): así un stop
     corta el sonido de raíz y no quedan arranques pendientes que se solapen. */
  say(text, lang2, pitch, rate, onend, onfail) {
    try {
      const p = Math.round(Math.max(8, Math.min(96, ((pitch || 1) - 0.6) / 0.85 * 65 + 20)));
      const sp = Math.round(Math.max(100, Math.min(190, (rate || 0.9) * 148)));
      const ctx = (typeof _ctx === "function") ? _ctx() : null;
      if (!ctx) { if (onfail) onfail(); return; }
      const sg = ++this._sgen;
      const self = this;
      /* con rawdata, meSpeak entrega el WAV por el callback (tercer argumento) */
      const id = meSpeak.speak(text, {
        voice: this.VOICE_ID[lang2] || "es",
        pitch: p, speed: sp, wordgap: 2, amplitude: 95,
        rawdata: "arraybuffer"
      }, (ok, jobId, stream) => {
        if (sg !== self._sgen) return; /* ya nos interrumpieron */
        if (!ok || !stream) { if (onfail) onfail(); return; }
        ctx.decodeAudioData(stream, buf => {
          if (sg !== self._sgen) return;
          const src = ctx.createBufferSource();
          src.buffer = buf;
          src.connect((typeof _out === "function") ? _out(ctx) : ctx.destination);
          src.onended = () => { if (self._cur === src) self._cur = null; onend(); };
          self._cur = src;
          src.start();
        }, () => { if (sg === self._sgen && onfail) onfail(); });
      });
      if (!id && onfail) { onfail(); return; }
    } catch (e) { if (onfail) onfail(); }
  },

  stop() {
    this._sgen++;
    if (this._cur) {
      try { this._cur.onended = null; this._cur.stop(); } catch (e) {}
      this._cur = null;
    }
    try { if (window.meSpeak && meSpeak.stop) meSpeak.stop(); } catch (e) {}
  }
};

/* el habla nueva decide por trozo: robot si toca y su voz está lista */
const _humanNext = Speech.next.bind(Speech);
Speech.next = function () {
  if (this.speaking || !this.queue.length) return;
  const peek = this.queue[0];
  const lang2 = (peek.lang || "es").slice(0, 2).toLowerCase();
  const useRobot = (S.settings.voiceKind === "robot") && window.meSpeak && RoboVoice.ready[lang2] && !peek._noRobot;
  if (!useRobot) return _humanNext();
  const item = this.queue.shift();
  if (item.gen !== this._gen) return this.next();
  if (!item.text) { if (item.done) item.done(); return this.next(); }
  this.speaking = true;
  setStatus("talking");
  const self = this;
  let ended = false;
  const finish = () => {
    if (ended || item.gen !== self._gen) return;
    ended = true;
    clearTimeout(watchdog);
    self.speaking = false;
    if (item.done) item.done();
    if (!self.queue.length) setStatus("idle");
    self.next();
  };
  /* si el audio se atasca (p. ej. aún sin desbloquear), no dejamos mudo al robot */
  const watchdog = setTimeout(finish, 1500 + item.text.length * 95);
  RoboVoice.say(item.text, lang2, item.pitch, item.rate, finish, () => {
    if (ended || item.gen !== self._gen) return;
    ended = true;
    clearTimeout(watchdog);
    self.speaking = false;
    item._noRobot = true;
    self.queue.unshift(item);
    _humanNext();
  });
};

/* parar lo robótico cuando el juego interrumpe el habla */
const _origStop = Speech.stop.bind(Speech);
Speech.stop = function () { RoboVoice.stop(); _origStop(); };

/* el audio se desbloquea con el primer toque (política de autoplay) */
document.addEventListener("pointerdown", function () {
  try { if (window.meSpeak && meSpeak.unlockAudio) meSpeak.unlockAudio({}); } catch (e) {}
}, true);

RoboVoice.boot();
window.RoboVoice = RoboVoice;
