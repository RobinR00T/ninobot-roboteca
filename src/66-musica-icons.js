"use strict";
/* ============================================================
   MÚSICA renovada: instrumentos dibujados, y al tocar cada uno
   suena una musiquilla sintetizada según su familia (Web Audio).
   Además: dos fichas nuevas, el PENTAGRAMA y las FIGURAS.
   ============================================================ */

/* --- mini sintetizador --- */
let _actx = null;
function _ctx() {
  if (!_actx) { try { _actx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return null; } }
  if (_actx && _actx.state === "suspended") { try { _actx.resume(); } catch (e) {} }
  return _actx;
}
const _hz = m => 440 * Math.pow(2, (m - 69) / 12);

/* salida común con compresor: evita saturar cuando suenan varias voces */
let _comp = null;
function _out(ctx) {
  if (!_comp) {
    _comp = ctx.createDynamicsCompressor();
    _comp.threshold.value = -14; _comp.ratio.value = 6;
    _comp.connect(ctx.destination);
  }
  return _comp;
}

function _tone(ctx, t0, midi, dur, wave, vol, glideTo) {
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.type = wave; o.frequency.setValueAtTime(_hz(midi), t0);
  if (glideTo) o.frequency.exponentialRampToValueAtTime(_hz(glideTo), t0 + dur);
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(vol, t0 + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  o.connect(g).connect(_out(ctx));
  o.start(t0); o.stop(t0 + dur + 0.05);
}

function _noise(ctx, t0, dur, freq, vol, type) {
  const n = ctx.createBufferSource(), buf = ctx.createBuffer(1, Math.max(1, ctx.sampleRate * dur), ctx.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  n.buffer = buf;
  const f = ctx.createBiquadFilter(); f.type = type || "highpass"; f.frequency.value = freq;
  const g = ctx.createGain();
  g.gain.setValueAtTime(vol, t0);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  n.connect(f).connect(g).connect(_out(ctx));
  n.start(t0); n.stop(t0 + dur);
}

/* --- voces realistas por familia --- */

/* cuerda pulsada (guitarra, arpa, ukelele, piano de juguete): Karplus-Strong,
   el sonido de la cuerda de verdad: ruido breve que la cuerda va afinando */
function _pluck(ctx, t0, midi, dur, vol, damp, detune) {
  const f = _hz(midi) * (detune || 1);
  const sr = ctx.sampleRate, N = Math.max(2, Math.round(sr / f));
  const len = Math.max(N + 2, Math.floor(sr * dur));
  const buf = ctx.createBuffer(1, len, sr), d = buf.getChannelData(0);
  for (let i = 0; i < N; i++) d[i] = Math.random() * 2 - 1;
  const k = damp || 0.995;
  for (let i = N; i < len; i++) d[i] = k * 0.5 * (d[i - N] + d[i - N + 1]);
  const s = ctx.createBufferSource(); s.buffer = buf;
  const g = ctx.createGain();
  g.gain.setValueAtTime(vol, t0);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  s.connect(g).connect(_out(ctx));
  s.start(t0); s.stop(t0 + dur);
}

/* piano: dos cuerdas Karplus levemente desafinadas + golpecito del macillo */
function _piano(ctx, t0, midi, dur, vol) {
  _pluck(ctx, t0, midi, dur, vol, 0.998, 1);
  _pluck(ctx, t0, midi, dur, vol * 0.5, 0.997, 1.003);
  _noise(ctx, t0, 0.02, 2200, vol * 0.25, "bandpass");
}

/* cuerda frotada (violín, chelo): sierra filtrada, ataque de arco y vibrato */
function _bow(ctx, t0, midi, dur, vol) {
  const f = _hz(midi);
  const o = ctx.createOscillator(); o.type = "sawtooth"; o.frequency.setValueAtTime(f, t0);
  const lfo = ctx.createOscillator(); lfo.frequency.value = 5.5;
  const lg = ctx.createGain(); lg.gain.setValueAtTime(0, t0);
  lg.gain.linearRampToValueAtTime(f * 0.008, t0 + Math.min(0.35, dur * 0.5));
  lfo.connect(lg).connect(o.frequency);
  const fl = ctx.createBiquadFilter(); fl.type = "lowpass"; fl.frequency.value = Math.min(6000, f * 4.5); fl.Q.value = 1.2;
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(vol, t0 + 0.12);
  g.gain.setValueAtTime(vol, t0 + Math.max(0.13, dur - 0.15));
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  o.connect(fl).connect(g).connect(_out(ctx));
  _noise(ctx, t0, Math.min(0.2, dur), f * 2, vol * 0.06, "bandpass");
  o.start(t0); o.stop(t0 + dur + 0.05); lfo.start(t0); lfo.stop(t0 + dur + 0.05);
}

/* flauta: seno con soplo de aire y vibrato dulce */
function _flute(ctx, t0, midi, dur, vol) {
  const f = _hz(midi);
  const o = ctx.createOscillator(); o.type = "sine"; o.frequency.setValueAtTime(f, t0);
  const o2 = ctx.createOscillator(); o2.type = "sine"; o2.frequency.setValueAtTime(f * 2, t0);
  const lfo = ctx.createOscillator(); lfo.frequency.value = 5;
  const lg = ctx.createGain(); lg.gain.setValueAtTime(0, t0);
  lg.gain.linearRampToValueAtTime(f * 0.006, t0 + 0.25);
  lfo.connect(lg).connect(o.frequency);
  const g = ctx.createGain(), g2 = ctx.createGain();
  g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(vol, t0 + 0.06);
  g.gain.setValueAtTime(vol, t0 + Math.max(0.07, dur - 0.1)); g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  g2.gain.setValueAtTime(vol * 0.12, t0); g2.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  o.connect(g).connect(_out(ctx)); o2.connect(g2).connect(_out(ctx));
  _noise(ctx, t0, Math.min(0.3, dur), f * 2.2, vol * 0.1, "bandpass");
  o.start(t0); o.stop(t0 + dur + 0.05); o2.start(t0); o2.stop(t0 + dur + 0.05); lfo.start(t0); lfo.stop(t0 + dur);
}

/* metal (trompeta, tuba): sierra con el filtro abriéndose, el "waa" del metal */
function _brass(ctx, t0, midi, dur, vol) {
  const f = _hz(midi);
  const o = ctx.createOscillator(); o.type = "sawtooth"; o.frequency.setValueAtTime(f, t0);
  const fl = ctx.createBiquadFilter(); fl.type = "lowpass"; fl.Q.value = 2.5;
  fl.frequency.setValueAtTime(f * 1.2, t0);
  fl.frequency.exponentialRampToValueAtTime(Math.min(7000, f * 6), t0 + 0.09);
  fl.frequency.exponentialRampToValueAtTime(f * 3, t0 + Math.max(0.2, dur * 0.7));
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(vol, t0 + 0.04);
  g.gain.setValueAtTime(vol, t0 + Math.max(0.05, dur - 0.12));
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  o.connect(fl).connect(g).connect(_out(ctx));
  o.start(t0); o.stop(t0 + dur + 0.05);
}

/* caña (saxofón): sierra + cuadrada con filtro medio y vibrato jazzero */
function _reed(ctx, t0, midi, dur, vol) {
  const f = _hz(midi);
  const o = ctx.createOscillator(); o.type = "sawtooth"; o.frequency.setValueAtTime(f, t0);
  const o2 = ctx.createOscillator(); o2.type = "square"; o2.frequency.setValueAtTime(f, t0); o2.detune.value = 6;
  const lfo = ctx.createOscillator(); lfo.frequency.value = 5.2;
  const lg = ctx.createGain(); lg.gain.setValueAtTime(0, t0);
  lg.gain.linearRampToValueAtTime(f * 0.009, t0 + 0.3);
  lfo.connect(lg).connect(o.frequency);
  const fl = ctx.createBiquadFilter(); fl.type = "lowpass"; fl.frequency.value = Math.min(4500, f * 5); fl.Q.value = 3;
  const g = ctx.createGain(), g2 = ctx.createGain();
  g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(vol, t0 + 0.07);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  g2.gain.setValueAtTime(vol * 0.3, t0); g2.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  o.connect(fl); o2.connect(g2).connect(fl); fl.connect(g).connect(_out(ctx));
  o.start(t0); o.stop(t0 + dur + 0.05); o2.start(t0); o2.stop(t0 + dur + 0.05); lfo.start(t0); lfo.stop(t0 + dur);
}

/* láminas (xilófono): golpe brillante con un parcial desafinado, decay corto */
function _xylo(ctx, t0, midi, dur, vol) {
  const f = _hz(midi);
  [[1, vol], [3.93, vol * 0.35], [9.5, vol * 0.12]].forEach(pair => {
    const o = ctx.createOscillator(); o.type = "sine"; o.frequency.setValueAtTime(f * pair[0], t0);
    const g = ctx.createGain();
    g.gain.setValueAtTime(pair[1], t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + Math.min(dur, 0.5));
    o.connect(g).connect(_out(ctx));
    o.start(t0); o.stop(t0 + Math.min(dur, 0.5) + 0.05);
  });
}

/* platillo metálico: seis parciales inarmónicos filtrados, como el metal real */
function _cym(ctx, t0, dur, vol) {
  const hp = ctx.createBiquadFilter(); hp.type = "highpass"; hp.frequency.value = 6200;
  const g = ctx.createGain();
  g.gain.setValueAtTime(vol, t0);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  hp.connect(g).connect(_out(ctx));
  [2637, 3229, 4058, 5303, 6667, 8100].forEach(fr => {
    const o = ctx.createOscillator(); o.type = "square"; o.frequency.value = fr;
    o.connect(hp); o.start(t0); o.stop(t0 + dur);
  });
  _noise(ctx, t0, dur * 0.6, 7500, vol * 0.5, "highpass");
}

/* una nota con la voz del instrumento */
function _voice(ctx, t0, midi, dur, vol, instr) {
  if (instr === "pluck") return _pluck(ctx, t0, midi, Math.max(dur, 1.1), vol * 2.2, 0.996);
  if (instr === "harp") return _pluck(ctx, t0, midi, Math.max(dur, 1.6), vol * 2.2, 0.998);
  if (instr === "piano") return _piano(ctx, t0, midi, Math.max(dur, 1.2), vol * 2);
  if (instr === "bow") return _bow(ctx, t0, midi, dur, vol);
  if (instr === "flute") return _flute(ctx, t0, midi, dur, vol);
  if (instr === "brass") return _brass(ctx, t0, midi, dur, vol);
  if (instr === "reed") return _reed(ctx, t0, midi, dur, vol);
  if (instr === "xylo") return _xylo(ctx, t0, midi, dur, vol * 1.6);
  return _tone(ctx, t0, midi, dur, "triangle", vol);
}

/* Devuelve la duración en ms para poder hablar después */
function playJingle(j) {
  const ctx = _ctx(); if (!ctx) return 0;
  const t0 = ctx.currentTime + 0.06;
  if (j.type === "melody") {
    const nd = j.nd || 0.3, gap = j.gap != null ? j.gap : nd * 0.9;
    j.notes.forEach((m, i) => {
      if (j.instr) _voice(ctx, t0 + i * gap, m, j.sus ? nd * 1.8 : nd, j.vol || 0.18, j.instr);
      else _tone(ctx, t0 + i * gap, m, j.sus ? nd * 1.8 : nd, j.w || "triangle", j.vol || 0.18, j.glide ? m + 12 : 0);
    });
    return Math.round((j.notes.length * gap + (j.sus ? nd : 0)) * 1000) + 250;
  }
  if (j.type === "chord") {
    j.notes.forEach(m => {
      if (j.instr) _voice(ctx, t0, m, j.nd || 1.4, 0.1, j.instr);
      else _tone(ctx, t0, m, j.nd || 1.4, j.w || "triangle", 0.12);
    });
    return Math.round((j.nd || 1.4) * 1000) + 250;
  }
  if (j.type === "timpani") {
    [0, 0.32, 0.64, 0.8, 0.96].forEach((d, i) => {
      const o = ctx.createOscillator(); o.type = "sine";
      const fq = i % 2 ? 116 : 98;
      o.frequency.setValueAtTime(fq, t0 + d);
      o.frequency.exponentialRampToValueAtTime(fq * 0.72, t0 + d + 0.28);
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.55, t0 + d);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + d + 0.5);
      o.connect(g).connect(_out(ctx));
      o.start(t0 + d); o.stop(t0 + d + 0.55);
      _noise(ctx, t0 + d, 0.06, 260, 0.18, "lowpass");
    });
    return 1700;
  }
  if (j.type === "cymbal") {
    _cym(ctx, t0, 1.6, 0.22);
    return 1700;
  }
  if (j.type === "applause") {
    for (let i = 0; i < 40; i++) _noise(ctx, t0 + Math.random() * 1.7, 0.03 + Math.random() * 0.03, 1400 + Math.random() * 2400, 0.1, "bandpass");
    return 1900;
  }
  if (j.type === "figuras") {
    /* redonda (4 tiempos), blanca (2), negra (1), corchea (1/2) */
    const beat = 0.42; let t = t0;
    [4, 2, 1, 0.5].forEach(b => { _voice(ctx, t, 69, b * beat * 0.95, 0.2, "piano"); t += b * beat + 0.15; });
    return Math.round((t - t0) * 1000) + 200;
  }
  return 0;
}

/* --- iconos + sonidos por instrumento (clave: nombre en español) --- */
(function () {
  const mm = (inner, vb) => `<svg viewBox="${vb || "0 0 100 100"}" width="100%" height="100%">${inner}</svg>`;
  const ex = THEMES.musica.content.explore;

  const wood = `<defs><linearGradient id="mWood" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#c98e4e"/><stop offset="100%" stop-color="#8a5a28"/></linearGradient></defs>`;
  const brass = `<defs><linearGradient id="mBrass" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffe082"/><stop offset="100%" stop-color="#c9992e"/></linearGradient></defs>`;

  const DEF = {
    "El violín": {
      jingle: { type: "melody", instr: "bow", notes: [67, 71, 74, 71, 67], nd: 0.4, gap: 0.36, vol: 0.14, sus: true },
      w: 46, h: 82, svg: mm(`${wood}
        <rect x="46" y="4" width="8" height="34" rx="3" fill="#4e342e"/>
        <path d="M50 36 Q26 38 28 56 Q30 66 40 66 Q32 74 34 86 Q38 100 50 100 Q62 100 66 86 Q68 74 60 66 Q70 66 72 56 Q74 38 50 36 Z" fill="url(#mWood)" stroke="#5d4037" stroke-width="2"/>
        <path d="M42 60 Q40 68 44 76 M58 60 Q60 68 56 76" stroke="#3e2723" stroke-width="2.4" fill="none"/>
        ${[46, 49, 52, 55].map(x => `<line x1="${x}" y1="8" x2="${x}" y2="94" stroke="#e8ded0" stroke-width="1"/>`).join("")}
        <line x1="14" y1="18" x2="80" y2="90" stroke="#8d6e63" stroke-width="3"/>`, "0 0 100 104") },
    "El violonchelo": {
      jingle: { type: "melody", instr: "bow", notes: [48, 52, 55, 52, 48], nd: 0.5, gap: 0.46, vol: 0.17, sus: true },
      w: 62, h: 110, svg: mm(`${wood}
        <rect x="46" y="2" width="8" height="30" rx="3" fill="#4e342e"/>
        <path d="M50 30 Q22 32 24 54 Q26 66 38 66 Q28 76 30 90 Q34 106 50 106 Q66 106 70 90 Q72 76 62 66 Q74 66 76 54 Q78 32 50 30 Z" fill="url(#mWood)" stroke="#5d4037" stroke-width="2"/>
        <path d="M42 58 Q40 68 44 78 M58 58 Q60 68 56 78" stroke="#3e2723" stroke-width="2.6" fill="none"/>
        ${[46, 49, 52, 55].map(x => `<line x1="${x}" y1="6" x2="${x}" y2="100" stroke="#e8ded0" stroke-width="1"/>`).join("")}
        <line x1="50" y1="106" x2="50" y2="118" stroke="#37474f" stroke-width="3"/>`, "0 0 100 120") },
    "El arpa": {
      jingle: { type: "melody", instr: "harp", notes: [60, 64, 67, 72, 76, 79], nd: 0.5, gap: 0.13, vol: 0.14 },
      w: 74, h: 88, svg: mm(`${brass}
        <path d="M20 90 Q12 40 34 14 Q44 4 54 10 L50 20 Q42 16 36 24 Q22 44 30 88 Z" fill="url(#mBrass)" stroke="#a8792a" stroke-width="2"/>
        <path d="M50 14 Q84 20 84 58 Q84 80 72 92 L64 86 Q74 76 74 58 Q74 28 46 22 Z" fill="url(#mBrass)" stroke="#a8792a" stroke-width="2"/>
        <path d="M22 92 L76 92 L72 100 L26 100 Z" fill="#c9992e"/>
        ${[0, 1, 2, 3, 4, 5].map(i => `<line x1="${34 + i * 7}" y1="${26 + i * 2}" x2="${30 + i * 7}" y2="90" stroke="#fff8e1" stroke-width="1.4"/>`).join("")}`, "0 0 100 104") },
    "La guitarra": {
      jingle: { type: "melody", instr: "pluck", notes: [52, 57, 62, 66, 62, 57], nd: 0.4, gap: 0.16, vol: 0.15 },
      w: 50, h: 92, svg: mm(`${wood}
        <rect x="45" y="2" width="10" height="12" rx="3" fill="#4e342e"/>
        <rect x="46" y="12" width="8" height="36" fill="#6d4c41"/>
        <circle cx="50" cy="66" r="26" fill="url(#mWood)" stroke="#5d4037" stroke-width="2"/>
        <circle cx="50" cy="56" r="17" fill="url(#mWood)" stroke="#5d4037" stroke-width="2"/>
        <circle cx="50" cy="62" r="8" fill="#3e2723"/>
        ${[46, 48.7, 51.4, 54].map(x => `<line x1="${x}" y1="6" x2="${x}" y2="84" stroke="#e8ded0" stroke-width=".9"/>`).join("")}`, "0 0 100 96") },
    "La flauta": {
      jingle: { type: "melody", instr: "flute", notes: [79, 81, 83, 86, 83], nd: 0.26, gap: 0.22, vol: 0.2 },
      w: 92, h: 22, svg: mm(`
        <rect x="4" y="40" width="92" height="16" rx="8" fill="#d7dde4" stroke="#9aa4af" stroke-width="2"/>
        <circle cx="14" cy="48" r="4" fill="#7d8792"/>
        ${[36, 50, 62, 74, 85].map(x => `<circle cx="${x}" cy="48" r="3.4" fill="#aeb7c0" stroke="#7d8792" stroke-width="1.4"/>`).join("")}`, "0 0 100 96") },
    "La trompeta": {
      jingle: { type: "melody", instr: "brass", notes: [60, 60, 67, 72], nd: 0.24, gap: 0.26, vol: 0.13 },
      w: 84, h: 44, svg: mm(`${brass}
        <rect x="6" y="42" width="56" height="12" rx="6" fill="url(#mBrass)" stroke="#a8792a" stroke-width="2"/>
        <path d="M60 40 Q86 34 94 20 L94 76 Q86 62 60 56 Z" fill="url(#mBrass)" stroke="#a8792a" stroke-width="2"/>
        ${[26, 36, 46].map(x => `<rect x="${x}" y="30" width="5" height="14" rx="2" fill="#a8792a"/>`).join("")}
        <circle cx="8" cy="48" r="5" fill="#c9992e"/>`, "0 0 100 96") },
    "El saxofón": {
      jingle: { type: "melody", instr: "reed", notes: [58, 61, 65, 61, 58, 65], nd: 0.3, gap: 0.24, vol: 0.11 },
      w: 54, h: 84, svg: mm(`${brass}
        <path d="M62 6 L70 10 L58 34 Q52 50 54 66 Q56 84 42 88 Q26 90 22 76 Q20 66 30 64 Q26 74 36 78 Q46 80 46 66 Q44 48 50 32 Z" fill="url(#mBrass)" stroke="#a8792a" stroke-width="2.4"/>
        ${[[54, 40], [52, 50], [51, 60]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="3.4" fill="#fff3d6" stroke="#a8792a" stroke-width="1.4"/>`).join("")}
        <rect x="58" y="2" width="12" height="7" rx="3" fill="#37474f" transform="rotate(24 64 6)"/>`, "0 0 100 96") },
    "La tuba": {
      jingle: { type: "melody", instr: "brass", notes: [36, 43, 36, 43], nd: 0.34, gap: 0.38, vol: 0.2 },
      w: 78, h: 78, svg: mm(`${brass}
        <circle cx="38" cy="54" r="30" fill="none" stroke="url(#mBrass)" stroke-width="10"/>
        <path d="M64 34 Q84 20 92 6 L96 50 Q84 40 66 46 Z" fill="url(#mBrass)" stroke="#a8792a" stroke-width="2"/>
        ${[30, 40, 50].map(x => `<rect x="${x}" y="20" width="5" height="12" rx="2" fill="#a8792a"/>`).join("")}`, "0 0 100 96") },
    "Los timbales": {
      jingle: { type: "timpani" },
      w: 92, h: 60, svg: mm(`
        <path d="M6 40 L46 40 Q44 74 26 74 Q8 74 6 40 Z" fill="#b56a2f" stroke="#7c4416" stroke-width="2.4"/>
        <ellipse cx="26" cy="40" rx="20" ry="7" fill="#f3e2c8" stroke="#7c4416" stroke-width="2"/>
        <path d="M54 34 L96 34 Q94 74 74 74 Q56 74 54 34 Z" fill="#b56a2f" stroke="#7c4416" stroke-width="2.4"/>
        <ellipse cx="75" cy="34" rx="21" ry="7.4" fill="#f3e2c8" stroke="#7c4416" stroke-width="2"/>
        <line x1="18" y1="18" x2="34" y2="34" stroke="#8d6e63" stroke-width="3"/><circle cx="16" cy="16" r="5" fill="#efe0cc"/>
        <line x1="86" y1="12" x2="72" y2="28" stroke="#8d6e63" stroke-width="3"/><circle cx="88" cy="10" r="5" fill="#efe0cc"/>`, "0 0 100 84") },
    "El xilófono": {
      jingle: { type: "melody", instr: "xylo", notes: [72, 74, 76, 79, 81, 84], nd: 0.2, gap: 0.15, vol: 0.16 },
      w: 84, h: 54, svg: mm(`
        ${["#ef5350", "#ff9800", "#ffd54f", "#8bc34a", "#42a5f5", "#ab47bc"].map((c, i) => `<rect x="${10 + i * 14}" y="${26 + i * 3}" width="11" height="${52 - i * 6}" rx="4" fill="${c}" stroke="rgba(0,0,0,.25)" stroke-width="1.4"/>`).join("")}
        <line x1="22" y1="10" x2="34" y2="24" stroke="#8d6e63" stroke-width="2.6"/><circle cx="20" cy="8" r="4.4" fill="#efe0cc"/>
        <line x1="72" y1="8" x2="60" y2="22" stroke="#8d6e63" stroke-width="2.6"/><circle cx="74" cy="6" r="4.4" fill="#efe0cc"/>`, "0 0 100 88") },
    "Los platillos": {
      jingle: { type: "cymbal" },
      w: 66, h: 60, svg: mm(`${brass}
        <ellipse cx="38" cy="42" rx="30" ry="10" fill="url(#mBrass)" stroke="#a8792a" stroke-width="2" transform="rotate(-14 38 42)"/>
        <ellipse cx="60" cy="60" rx="30" ry="10" fill="url(#mBrass)" stroke="#a8792a" stroke-width="2" transform="rotate(12 60 60)"/>
        <circle cx="38" cy="40" r="4" fill="#a8792a"/><circle cx="60" cy="60" r="4" fill="#a8792a"/>
        <path d="M18 22 L24 14 M30 16 L32 8 M44 16 L48 8" stroke="#ffe082" stroke-width="2.6" stroke-linecap="round"/>`, "0 0 100 88") },
    "El podio de dirección": {
      jingle: { type: "chord", instr: "bow", notes: [60, 64, 67, 72], nd: 1.6 },
      w: 66, h: 74, svg: mm(`
        <rect x="26" y="66" width="48" height="12" rx="4" fill="#8d6e63"/>
        <rect x="34" y="52" width="32" height="16" rx="3" fill="#6d4c41"/>
        <rect x="46" y="18" width="7" height="36" rx="3" fill="#4e342e"/>
        <rect x="36" y="14" width="27" height="7" rx="3" fill="#4e342e"/>
        <line x1="60" y1="10" x2="88" y2="0" stroke="#eceff1" stroke-width="3.4" stroke-linecap="round"/>
        <path d="M18 30 Q10 22 16 14 M82 34 Q92 30 94 22" stroke="#ffd54f" stroke-width="2.6" fill="none" stroke-linecap="round"/>`, "0 0 100 82") },
    "El piano de cola": {
      jingle: { type: "melody", instr: "piano", notes: [60, 64, 67, 72, 67, 64, 60], nd: 0.34, gap: 0.2, vol: 0.15 },
      w: 104, h: 66, svg: mm(`
        <path d="M10 40 L70 40 Q96 40 96 62 L96 72 L10 72 Z" fill="#1c1c24" stroke="#000" stroke-width="2"/>
        <path d="M14 40 Q10 16 34 12 Q66 8 84 22 L70 40 Z" fill="#2c2c38" stroke="#000" stroke-width="2"/>
        <line x1="80" y1="26" x2="94" y2="12" stroke="#1c1c24" stroke-width="4"/>
        <rect x="10" y="60" width="86" height="9" fill="#f5f5f5"/>
        ${[20, 30, 40, 50, 60, 70, 80].map(x => `<rect x="${x}" y="60" width="4.4" height="6" fill="#1c1c24"/>`).join("")}
        <line x1="18" y1="72" x2="18" y2="88" stroke="#1c1c24" stroke-width="4"/><line x1="88" y1="72" x2="88" y2="88" stroke="#1c1c24" stroke-width="4"/>`, "0 0 108 92") },
    "El micrófono": {
      jingle: { type: "melody", w: "sine", notes: [64, 67, 71, 67], nd: 0.35, gap: 0.3, vol: 0.2, sus: true },
      w: 40, h: 74, svg: mm(`
        <circle cx="50" cy="22" r="17" fill="#78909c" stroke="#455a64" stroke-width="2.4"/>
        <path d="M38 14 L62 14 M36 22 L64 22 M38 30 L62 30" stroke="#455a64" stroke-width="1.8"/>
        <rect x="45" y="38" width="10" height="30" rx="4" fill="#546e7a"/>
        <line x1="50" y1="68" x2="50" y2="86" stroke="#37474f" stroke-width="4"/>
        <line x1="36" y1="90" x2="64" y2="90" stroke="#37474f" stroke-width="5" stroke-linecap="round"/>
        <path d="M22 18 Q16 22 16 30 M78 18 Q84 22 84 30" stroke="#ffd54f" stroke-width="2.6" fill="none" stroke-linecap="round"/>`, "0 0 100 96") },
    /* las palmas van dibujadas, no con emojis: la fuente del sistema
       desentonaba al lado del vector y cambiaba de un aparato a otro */
    "El público": {
      jingle: { type: "applause" },
      w: 84, h: 52, svg: mm(`
        ${[[24, "#f6d5b8", "#5d4037"], [50, "#c98e62", "#161616"], [76, "#f1c27d", "#e65100"]].map(p => `
          <circle cx="${p[0]}" cy="46" r="13" fill="${p[1]}"/>
          <path d="M${p[0] - 13} 42 Q${p[0]} 28 ${p[0] + 13} 42" fill="${p[2]}"/>
          <circle cx="${p[0] - 4}" cy="46" r="1.6" fill="#222"/><circle cx="${p[0] + 4}" cy="46" r="1.6" fill="#222"/>
          <path d="M${p[0] - 4} 52 Q${p[0]} 55 ${p[0] + 4} 52" stroke="#222" stroke-width="1.4" fill="none"/>
          <path d="M${p[0] - 16} 68 L${p[0] - 8} 60 M${p[0] + 16} 68 L${p[0] + 8} 60" stroke="${p[1]}" stroke-width="5" stroke-linecap="round"/>`).join("")}
        ${[[15, 1], [85, -1]].map(m => `<g transform="translate(${m[0]} 16) scale(${m[1]} 1)">
          <path d="M-2 13 q-8 -3 -9 -11 q-1 -7 4 -9 q1 -6 6 -5 q3 -4 6 0 q4 3 2 9 q-1 8 -4 12 Z" fill="#f1c27d" stroke="#c98e62" stroke-width="1.6" stroke-linejoin="round"/>
          <path d="M-7 -4 q4 -2 7 1 M-8 1 q4 -2 8 1" stroke="#c98e62" stroke-width="1.3" fill="none" stroke-linecap="round"/>
          <path d="M4 -10 l5 -5 M6 -3 l7 -2" stroke="#ffd54f" stroke-width="2" stroke-linecap="round"/></g>`).join("")}`, "0 0 100 78") }
  };

  ex.pois.forEach(p => {
    const d = DEF[p.name.es];
    if (d) { p.svg = d.svg; p.iw = d.w; p.ih = d.h; p.jingle = d.jingle; }
  });

  /* --- dos fichas nuevas: el pentagrama y las figuras --- */
  ex.pois.push({
    cat: "escenario", emoji: "🎼", x: 2090, y: 280, iw: 104, ih: 64,
    jingle: { type: "melody", instr: "piano", notes: [60, 62, 64, 65, 67], nd: 0.32, gap: 0.3, vol: 0.16 },
    svg: mm(`
      ${[0, 1, 2, 3, 4].map(i => `<line x1="4" y1="${22 + i * 11}" x2="96" y2="${22 + i * 11}" stroke="#fff" stroke-width="2.2"/>`).join("")}
      <path d="M22 74 Q12 70 14 60 Q16 52 24 52 Q32 52 32 62 Q32 74 22 82 M24 52 Q20 30 26 14 Q32 22 30 38 Q28 48 24 52" stroke="#ffd54f" stroke-width="3" fill="none" stroke-linecap="round"/>
      <ellipse cx="54" cy="66" rx="6" ry="4.4" fill="#fff" transform="rotate(-18 54 66)"/><line x1="59.4" y1="64" x2="59.4" y2="36" stroke="#fff" stroke-width="2.4"/>
      <ellipse cx="78" cy="44" rx="6" ry="4.4" fill="#fff" transform="rotate(-18 78 44)"/><line x1="83.4" y1="42" x2="83.4" y2="14" stroke="#fff" stroke-width="2.4"/>`, "0 0 100 88"),
    name: { es: "El pentagrama", ca: "El pentagrama", en: "The staff", cs: "Notová osnova", fr: "La portée" },
    fact: { es: "El pentagrama son cinco líneas donde viven las notas: cuanto más arriba se escriben, más agudas suenan. ¡Escucha la escalera: do, re, mi, fa, sol!", ca: "El pentagrama són cinc línies on viuen les notes: com més amunt s'escriuen, més agudes sonen. Escolta l'escala: do, re, mi, fa, sol!", en: "The staff is five lines where the notes live: the higher they are written, the higher they sound. Listen to the ladder: do, re, mi, fa, sol!", cs: "Notová osnova je pět linek, kde bydlí noty: čím výš jsou napsané, tím výš zní. Poslechni si žebřík: do, re, mi, fa, sol!", fr: "La portée, ce sont cinq lignes où vivent les notes : plus elles sont écrites haut, plus elles sonnent aigu. Écoute l'escalier : do, ré, mi, fa, sol !" }
  });
  ex.pois.push({
    cat: "escenario", emoji: "♩", x: 2310, y: 770, iw: 104, ih: 60,
    jingle: { type: "figuras" },
    svg: mm(`
      <ellipse cx="14" cy="60" rx="9" ry="6.6" fill="none" stroke="#fff" stroke-width="2.6"/>
      <ellipse cx="40" cy="60" rx="8" ry="6" fill="none" stroke="#fff" stroke-width="2.6"/><line x1="47.4" y1="58" x2="47.4" y2="26" stroke="#fff" stroke-width="2.4"/>
      <ellipse cx="66" cy="60" rx="8" ry="6" fill="#fff"/><line x1="73.4" y1="58" x2="73.4" y2="26" stroke="#fff" stroke-width="2.4"/>
      <ellipse cx="90" cy="60" rx="8" ry="6" fill="#fff"/><line x1="97.4" y1="58" x2="97.4" y2="26" stroke="#fff" stroke-width="2.4"/><path d="M97.4 26 Q108 32 104 44" stroke="#fff" stroke-width="2.4" fill="none"/>
      ${/* cuánto dura cada figura, en bloques que se cuentan con el dedo:
            cuatro para la redonda, dos para la blanca, uno para la negra
            y medio para la corchea. Antes eran cifras escritas con <text>. */
        [[1.9, 5], [8.3, 5], [14.7, 5], [21.1, 5], [34.3, 5], [40.7, 5], [63.5, 5], [88.8, 2.4]]
          .map(b => `<rect x="${b[0]}" y="78" width="${b[1]}" height="7" rx="3.4" fill="#ffd54f"/>`).join("")}`, "0 0 112 92"),
    name: { es: "Las figuras", ca: "Les figures", en: "The note values", cs: "Hodnoty not", fr: "Les figures de notes" },
    fact: { es: "Las figuras dicen cuánto dura cada nota: la redonda cuenta cuatro tiempos, la blanca dos, la negra uno y la corchea medio. ¡Escúchalas sonar de la más larga a la más cortita!", ca: "Les figures diuen quant dura cada nota: la rodona compta quatre temps, la blanca dos, la negra un i la corxera mig. Escolta-les sonar de la més llarga a la més curteta!", en: "Note values tell you how long each note lasts: the whole note counts four beats, the half note two, the quarter note one and the eighth note half. Listen to them from longest to shortest!", cs: "Hodnoty not říkají, jak dlouho každá nota trvá: celá nota počítá čtyři doby, půlová dvě, čtvrťová jednu a osminová půl. Poslechni si je od nejdelší po nejkratší!", fr: "Les figures disent combien dure chaque note : la ronde compte quatre temps, la blanche deux, la noire un et la croche un demi. Écoute-les de la plus longue à la plus courte !" }
  });
})();
