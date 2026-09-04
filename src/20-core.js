"use strict";
/* ============================================================
   Ninobot: La Roboteca. Núcleo: idiomas, estado, voz, ayudas.
   Sin red, sin API, sin nada fuera del dispositivo.
   ============================================================ */

const LANGS = {
  es: { flag: "🇪🇸", code: "es-ES", label: "Español" },
  ca: { flag: "🏰", code: "ca-ES", label: "Català" },
  en: { flag: "🇬🇧", code: "en-GB", label: "English" },
  cs: { flag: "🇨🇿", code: "cs-CZ", label: "Čeština" },
  fr: { flag: "🇫🇷", code: "fr-FR", label: "Français" }
};

const APP_VERSION = "4.10";
const STORE_KEY = "ninobot-roboteca-v1";

const DEFAULTS = {
  setupDone: false,
  child: { name: "", gender: "girl", age: 6, lang: "es", skin: 1, hair: 0 },
  settings: { minutes: 30, mic: false, sound: true, voiceKind: "robot", voiceByLang: {} },
  robot: "ninobot",
  fx: null,
  theme: null,
  screen: "setup",
  mode: "chat",
  progress: {},        // { espacio: { quiz: 3, story: 2, ... } }
  builds: [],          // creaciones del constructor { theme, name, parts }
  abcSeen: {}          // { espacio: ["A","B"] }
};

let S = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) {
      const saved = JSON.parse(raw);
      const merged = JSON.parse(JSON.stringify(DEFAULTS));
      Object.assign(merged, saved);
      merged.child = Object.assign({}, DEFAULTS.child, saved.child || {});
      merged.settings = Object.assign({}, DEFAULTS.settings, saved.settings || {});
      merged.screen = merged.setupDone ? "hub" : "setup";
      merged.theme = null;
      merged.fx = null;
      // migración v1.6: reiniciar la voz fijada (el ranking nuevo elige mejor)
      if ((merged._vv || 0) < 16) { merged.settings.voiceByLang = {}; merged._vv = 16; }
      return merged;
    }
  } catch (e) { /* almacenamiento no disponible: se juega sin guardar */ }
  return JSON.parse(JSON.stringify(DEFAULTS));
}

function save() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(S)); } catch (e) { /* sin guardado */ }
}

function resetAll() {
  try { localStorage.removeItem(STORE_KEY); } catch (e) {}
  S = JSON.parse(JSON.stringify(DEFAULTS));
  S.settings.voiceKind = "robot";
  if (timeTimer) { clearInterval(timeTimer); timeTimer = null; }
  sessionDeadline = null;
  timeWarned = false;
  render();
}

/* ---------- ayudas de texto ---------- */

const L = () => S.child.lang;

// tx({es:"…",ca:"…"}) devuelve la cadena en el idioma activo, con {name} interpolado.
function tx(obj, extra) {
  if (obj == null) return "";
  let s = (typeof obj === "string") ? obj : (obj[L()] != null ? obj[L()] : obj.es);
  if (s == null) s = "";
  if (s.indexOf("{name}") !== -1) s = s.replace(/\{name\}/g, S.child.name || tx(T.friend));
  if (extra) for (const k in extra) s = s.replace(new RegExp("\\{" + k + "\\}", "g"), extra[k]);
  return s;
}

// t("clave") sobre el diccionario de interfaz T.
function t(key, extra) { return tx(T[key], extra); }

// G(fem, masc, neutro): concordancia según el género elegido. El neutro cae en fem si no se da.
function G(fem, masc, neu) {
  const g = S.child.gender;
  if (g === "boy") return masc;
  if (g === "kid" && neu != null) return neu;
  return fem;
}

// gx({girl:{...langs}, boy:{...}, kid:{...}}) para bloques con género y por idioma.
function gx(obj) {
  const g = S.child.gender;
  const pick = obj[g] || obj.girl;
  return tx(pick);
}

function norm(s) {
  return (s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").trim();
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function esc(s) {
  return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

/* ---------- voz: Ninobot habla ---------- */

const Speech = {
  queue: [],
  speaking: false,
  enabled: () => S.settings.sound && ("speechSynthesis" in window),

  /* Voces preferidas por idioma: primero las de más calidad conocidas
     (macOS Enhanced/Premium, Siri, Google), luego cualquier voz del idioma. */
  PREFERRED: {
    es: ["mónica", "monica", "marisol", "paulina", "google español", "helena", "elvira"],
    ca: ["montse", "montserrat", "herena", "jordi", "google català"],
    en: ["google uk english female", "samantha", "serena", "kate", "sonia", "martha", "daniel"],
    cs: ["zuzana", "google čeština", "iveta"],
    fr: ["amélie", "amelie", "audrey", "marie", "google français", "thomas"]
  },

  /* En Chrome de verdad, el motor de voces locales de macOS a veces ignora la voz
     asignada y cae en la del sistema (inglesa, si el Mac va en inglés). Las voces
     "Google ..." de red del propio Chrome no pasan por ese motor: son la opción segura. */
  IS_CHROME: /Chrome\//.test(navigator.userAgent) && !/Edg\/|OPR\//.test(navigator.userAgent),

  voiceScore(v, lang2) {
    const name = (v.name || "").toLowerCase();
    const vlang = (v.lang || "").toLowerCase().replace("_", "-");
    let score = 0;
    if (vlang.slice(0, 2) === lang2) score += 10; else return -999;
    const pref = this.PREFERRED[lang2] || [];
    const idx = pref.findIndex(p => name.includes(p));
    if (idx >= 0) score += (pref.length - idx) * 10;
    if (/enhanced|premium|natural|neural/.test(name)) score += 25;
    if (/siri/.test(name)) score += 12;
    if (/google/.test(name)) score += this.IS_CHROME ? 120 : 8;
    if (v.localService) score += 3;
    if (/compact|eloquence|albert|bad news|bells|boing|bubbles|cellos|jester|organ|trinoids|whisper|wobble|zarvox|superstar|grandma|grandpa|shelley|rocko|sandy|flo|fred|junior|kathy|ralph/.test(name)) score -= 40;
    return score;
  },

  listVoices(lang2) {
    const all = ("speechSynthesis" in window) ? speechSynthesis.getVoices() : [];
    return all
      .map(v => ({ v, s: this.voiceScore(v, lang2) }))
      .filter(x => x.s > -500)
      .sort((a, b) => b.s - a.s)
      .map(x => x.v);
  },

  pickVoice(langCode, localOnly) {
    const lang2 = langCode.slice(0, 2).toLowerCase();
    let ranked = this.listVoices(lang2);
    if (localOnly) ranked = ranked.filter(v => v.localService);
    if (!ranked.length) return null;
    const wanted = (S.settings.voiceByLang || {})[lang2];
    if (wanted) {
      const hit = ranked.find(v => v.name === wanted);
      if (hit) return hit;
    }
    const exact = ranked.find(v => v.lang.toLowerCase().replace("_", "-") === langCode.toLowerCase());
    return exact || ranked[0];
  },

  _voiceWait: 0,

  /* Voz distinta por robot: se reparte un pequeño grupo de voces buenas entre la
     familia. En Chrome, solo voces de red de Google (el motor local puede fallar);
     en el resto, las 3 mejores voces locales, que además respetan el tono por robot. */
  voiceFor(langCode, localOnly) {
    const lang2 = langCode.slice(0, 2).toLowerCase();
    const wanted = (S.settings.voiceByLang || {})[lang2];
    if (wanted) return this.pickVoice(langCode, localOnly);
    let ranked = this.listVoices(lang2);
    if (localOnly) ranked = ranked.filter(v => v.localService);
    if (!ranked.length) return null;
    const goog = ranked.filter(v => /google/i.test(v.name) && !v.localService);
    const pool = (this.IS_CHROME && goog.length && !localOnly) ? goog : ranked.slice(0, 3);
    const ids = (typeof ROBOTS !== "undefined") ? Object.keys(ROBOTS) : [];
    const idx = Math.max(0, ids.indexOf(S.robot));
    return pool[idx % pool.length];
  },

  clean(text) {
    let s = String(text);
    s = s.replace(/\{name\}/g, S.child.name || "");
    // fuera emojis y símbolos que el sintetizador intentaría leer
    s = s.replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{2190}-\u{21FF}\u{2B00}-\u{2BFF}]/gu, " ");
    // los signos de apertura no aportan a la locución y algunas voces los leen en alto
    s = s.replace(/[¡¿"«»*_]/g, " ");
    // MAYÚSCULAS largas a Capitalizado para evitar deletreo
    s = s.replace(/\b[A-ZÁÉÍÓÚÜÑÀÈÒÇ]{4,}\b/g, w => w.charAt(0) + w.slice(1).toLowerCase());
    // risas largas, acortadas
    s = s.replace(/(ja|ha|hi|ji){3,}/gi, "$1$1");
    s = s.replace(/\s+/g, " ").trim();
    return s;
  },

  say(text, opts) {
    const o = opts || {};
    if (!this.enabled()) { if (o.onEnd) setTimeout(o.onEnd, 0); return; }
    // Lo nuevo interrumpe a lo viejo: nada de discursos en cola eterna.
    if (!o.queue) this.stop();
    const lang = o.lang || LANGS[L()].code;
    let clean = this.clean(text);
    if (!clean) { if (o.onEnd) setTimeout(o.onEnd, 0); return; }
    /* ordinales de reyes y faraones: "Ramsés II" se DICE "Ramsés segundo"
       (en francés los reyes van con cardinal: "Ramsès deux" es lo correcto) */
    const ORD2 = { es: " segundo", ca: " segon", en: " the Second", cs: " druhý", fr: " deux" }[lang.slice(0, 2)];
    if (ORD2) clean = clean.replace(/\s+II\b\.?/g, ORD2);
    const TUNE = {
      "es": { rate: 0.92, pitch: 1.02 }, "ca": { rate: 0.92, pitch: 1.02 },
      "en": { rate: 0.95, pitch: 1.05 }, "fr": { rate: 0.93, pitch: 1.02 },
      "cs": { rate: 0.9, pitch: 1.0 }
    };
    /* nombres propios: cada uno se dice con la voz de SU idioma, así que la
       frase se parte en trozos y cada trozo lleva su idioma y su entonación */
    const base2 = lang.slice(0, 2);
    const segs = (typeof ttsSplit === "function") ? ttsSplit(clean, base2) : [{ t: clean, l: base2 }];
    const antes = this.queue.length;
    segs.forEach(seg => {
      const lg = (LANGS[seg.l] && LANGS[seg.l].code) || lang;
      const tune = TUNE[seg.l] || TUNE.es;
      const maxChunk = lg.startsWith("cs") ? 50 : 60;
      const re = new RegExp(".{1," + maxChunk + "}(?:[.,!?;:]|\\s|$)", "g");
      const chunks = seg.t.match(re) || [seg.t];
      chunks.forEach(c => {
        const txt = c.trim();
        if (txt) this.queue.push({ text: txt, lang: lg, rate: tune.rate, pitch: tune.pitch, done: null, gen: this._gen });
      });
    });
    if (this.queue.length === antes) { if (o.onEnd) setTimeout(o.onEnd, 0); return; }
    if (o.onEnd) this.queue[this.queue.length - 1].done = o.onEnd;
    // Pequeña pausa tras un cancel: Chrome se atraganta si se habla justo después.
    clearTimeout(this._kick);
    this._kick = setTimeout(() => {
      try { speechSynthesis.resume(); } catch (e) {}
      this.next();
    }, o.queue ? 0 : 90);
  },

  next() {
    if (this.speaking || !this.queue.length) return;
    // Las voces del sistema cargan en diferido: si aún no están, esperamos
    // hasta 3 segundos antes de hablar, para no acabar con una voz de otro idioma.
    if (("speechSynthesis" in window) && !speechSynthesis.getVoices().length && this._voiceWait < 20) {
      this._voiceWait++;
      setTimeout(() => this.next(), 150);
      return;
    }
    const item = this.queue.shift();
    if (item.gen !== this._gen) return this.next();
    if (!item.text) { if (item.done) item.done(); return this.next(); }
    const u = new SpeechSynthesisUtterance(item.text);
    const vch = this.voiceFor(item.lang, item._localOnly);
    if (!vch && speechSynthesis.getVoices().length && !this._warnedNoVoice) {
      this._warnedNoVoice = true;
      if (typeof toast === "function") toast(t("noVoiceWarn"));
    }
    u.lang = vch ? vch.lang : item.lang;
    // Límites prudentes: por encima de ~1.45 de pitch la voz deja de entenderse.
    u.rate = Math.max(0.65, Math.min(1.15, item.rate));
    u.pitch = Math.max(0.6, Math.min(1.45, item.pitch));
    if (vch) u.voice = vch;
    this.speaking = true;
    setStatus("talking");
    const finish = () => {
      // un discurso cancelado (stop) nunca continúa ni se recola
      if (item.gen !== this._gen) return;
      this.speaking = false;
      if (item.done) item.done();
      if (!this.queue.length) setStatus("idle");
      this.next();
    };
    u.onend = finish;
    u.onerror = () => {
      if (item.gen !== this._gen) return;
      // si la voz de red falla (sin internet), reintentamos con una voz local
      if (!item._retry && vch && !vch.localService) {
        item._retry = true; item._localOnly = true;
        this.queue.unshift(item);
        this.speaking = false;
        this.next();
        return;
      }
      finish();
    };
    speechSynthesis.speak(u);
  },

  _gen: 0,

  stop() {
    this._gen++;
    this.queue = [];
    clearTimeout(this._kick);
    if ("speechSynthesis" in window) speechSynthesis.cancel();
    this.speaking = false;
    setStatus("idle");
  }
};

/* ---------- voz: el peque habla ---------- */

const Ears = {
  rec: null, active: false,
  supported: () => ("webkitSpeechRecognition" in window || "SpeechRecognition" in window),

  listen(onResult) {
    if (!S.settings.mic) { onResult(null, "micoff"); return; }
    if (!this.supported()) { onResult(null, "nosupport"); return; }
    if (this.rec) { try { this.rec.onresult = this.rec.onerror = this.rec.onend = null; this.rec.abort(); } catch (e) {} }
    this.active = false;
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    try {
      this.rec = new SR();
      this.rec.lang = LANGS[L()].code;
      this.rec.interimResults = false;
      this.rec.maxAlternatives = 1;
      this.active = true;
      setStatus("listening");
      this.rec.onresult = e => { this.active = false; setStatus("idle"); onResult(e.results[0][0].transcript, null); };
      this.rec.onerror = ev => {
        this.active = false; setStatus("idle");
        /* micro en otro aparato (típico: el Mac coge el iPhone por Continuity y
           al desconectarlo la entrada se queda muerta) o sin permiso */
        const e = ev && ev.error;
        onResult(null, e === "audio-capture" ? "nomic" : e === "not-allowed" ? "micoff" : "error");
      };
      this.rec.onend = () => { if (this.active) { this.active = false; setStatus("idle"); } };
      this.rec.start();
    } catch (e) { this.active = false; setStatus("idle"); onResult(null, "error"); }
  },

  stop() { if (this.rec) try { this.rec.abort(); } catch (e) {} this.active = false; }
};

/* ---------- estado de la cabecera ---------- */

let statusMode = "idle";
function setStatus(mode) {
  statusMode = mode;
  const el = document.getElementById("statusbox");
  if (!el) return;
  el.className = "status " + (mode === "talking" ? "talking" : mode === "listening" ? "listening" : "");
  const label = mode === "talking" ? t("statusTalking") : mode === "listening" ? t("statusListening") : statusIdleText();
  const span = el.querySelector("span.stxt");
  if (span) span.textContent = label;
  const av = document.getElementById("robot-avatar");
  if (av) av.classList.toggle("talking-svg", mode === "talking");
}

function statusIdleText() {
  if (S.theme && THEMES[S.theme] && THEMES[S.theme].content) {
    let s = tx(THEMES[S.theme].content.statusPlace);
    if (typeof fantasyLang === "function") {
      const fl = fantasyLang();
      if (fl) s += " · " + fl.emoji + " " + tx(fl.name);
    }
    return s;
  }
  return t("statusHome");
}

/* ---------- tiempo de juego ---------- */

let sessionDeadline = null;
let timeTimer = null;

let timeWarned = false;

function startSessionTimer() {
  if (timeTimer) clearInterval(timeTimer);
  sessionDeadline = Date.now() + S.settings.minutes * 60000;
  timeWarned = false;
  timeTimer = setInterval(() => {
    const left = sessionDeadline - Date.now();
    // tiempo jugado, para el rincón de los padres (solo se guardan 14 días)
    S.stats = S.stats || { ms: 0, dias: {} };
    S.stats.ms += 15000;
    if (typeof misionHoy === "function") {
      const hoy = misionHoy();
      S.stats.dias[hoy] = (S.stats.dias[hoy] || 0) + 15000;
      const dias = Object.keys(S.stats.dias).sort();
      while (dias.length > 14) delete S.stats.dias[dias.shift()];
    }
    save();
    // aviso cariñoso a falta de 5 minutos, para que el final no sea un apagón
    if (!timeWarned && left <= 5 * 60000 && left > 0) {
      timeWarned = true;
      if (typeof toast === "function") toast(t("timeSoon"));
      Speech.say(t("timeSoon"), { queue: true });
    }
    if (left <= 0) {
      clearInterval(timeTimer); timeTimer = null;
      goBye();
    }
  }, 15000);
}

function minutesLeft() {
  if (!sessionDeadline) return S.settings.minutes;
  return Math.max(0, Math.ceil((sessionDeadline - Date.now()) / 60000));
}

function goBye() {
  Speech.stop(); Ears.stop();
  S.theme = null; S.fx = null;
  S.screen = "bye";
  render();
  Speech.say(t("byeSpeech"));
}

/* ---------- progreso y medallas ---------- */

function award(theme, mode, stars) {
  if (!S.progress[theme]) S.progress[theme] = {};
  const prev = S.progress[theme][mode] || 0;
  if (typeof misionEv === "function") {
    if (mode === "quiz" || mode === "math" || mode === "build" || mode === "care") misionEv(mode);
    if (stars > prev) misionEv("star", stars - prev);
  }
  if (stars > prev) {
    const hadMedal = hasMedal(theme);
    S.progress[theme][mode] = stars;
    // el momento grande: si con esto se cruza la medalla, se celebra a lo grande
    if (!hadMedal && hasMedal(theme) && typeof medalShow === "function") medalShow(theme);
  }
  save();
  updateModeNavStars();
}

function themeStars(theme) {
  const p = S.progress[theme] || {};
  return Object.values(p).reduce((a, b) => a + b, 0);
}

function hasMedal(theme) { return themeStars(theme) >= 12; }

function totalMedals() { return Object.keys(THEMES).filter(hasMedal).length + (typeof leerMedal === "function" && leerMedal() ? 1 : 0); }

/* ---------- confeti ---------- */

function confetti(n) {
  const icons = ["🎉", "⭐", "✨", "🎊", "💫"];
  for (let i = 0; i < (n || 18); i++) {
    const d = document.createElement("div");
    d.className = "confetti";
    d.textContent = pick(icons);
    d.style.left = Math.random() * 100 + "vw";
    d.style.animationDuration = (2 + Math.random() * 2) + "s";
    d.style.animationDelay = (Math.random() * .6) + "s";
    document.body.appendChild(d);
    setTimeout(() => d.remove(), 4600);
  }
}
