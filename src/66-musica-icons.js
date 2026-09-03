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

/* gong: metal grave y largo. El bronce no suena en armónicos ordenados como
   una cuerda, sino en parciales "torcidos" (1, 1.47, 2.09...) que baten entre
   ellos: por eso vibra tanto rato. Cada parcial lleva su propia caída (los
   agudos se apagan antes), un compañero desafinado que produce el batido y,
   encima de todo, el golpe sordo de la maza. */
function _gong(ctx, t0, midi, dur, vol) {
  const f = _hz(midi), largo = Math.max(dur, 3);
  const parciales = [[1, 1, 1], [1.47, 0.62, 0.9], [2.09, 0.44, 0.72], [2.71, 0.3, 0.58],
    [3.46, 0.22, 0.46], [4.63, 0.15, 0.34], [6.11, 0.1, 0.26], [8.24, 0.06, 0.18]];
  parciales.forEach(function (p) {
    for (let d = 0; d < 2; d++) {
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = "sine";
      o.frequency.setValueAtTime(f * p[0] * (d ? 1.004 : 1), t0);
      const cola = Math.max(0.35, largo * p[2]);
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(vol * p[1] * (d ? 0.6 : 1), t0 + 0.012);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + cola);
      o.connect(g).connect(_out(ctx));
      o.start(t0); o.stop(t0 + cola + 0.05);
    }
  });
  /* el golpe de la maza: un ruido grave y corto, el "pum" del bronce */
  _noise(ctx, t0, 0.16, Math.min(900, f * 6), vol * 0.5, "lowpass");
  _noise(ctx, t0, 0.5, f * 12, vol * 0.14, "bandpass");
}

/* una nota con la voz del instrumento */
function _voice(ctx, t0, midi, dur, vol, instr) {
  if (instr === "gong") return _gong(ctx, t0, midi, Math.max(dur, 3), vol * 1.5);
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
    /* el gong resuena mucho después de la última nota: si no se cuenta su cola,
       el robot empieza a hablar encima del bronce */
    const cola = j.instr === "gong" ? 3.1 : 0;
    return Math.round((j.notes.length * gap + (j.sus ? nd : 0) + cola) * 1000) + 250;
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

  /* ---------- MATERIALES ----------
     Cada icono lleva sus propios degradados (los dibujos viajan sueltos:
     también se pintan solos en la ficha). Los ids llevan prefijo musI para
     no chocar con los del decorado (musT) ni con los de otros mapas. */
  const dMadera = `<defs><linearGradient id="musIMadera" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#e3a960"/><stop offset="52%" stop-color="#bd7c35"/><stop offset="100%" stop-color="#8a4c1f"/></linearGradient></defs>`;
  const dRoble = `<defs><linearGradient id="musIRoble" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#8a5730"/><stop offset="38%" stop-color="#b07a45"/><stop offset="100%" stop-color="#5d3a1d"/></linearGradient></defs>`;
  const dLaton = `<defs><linearGradient id="musILaton" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#ffeaa9"/><stop offset="42%" stop-color="#e9bf51"/><stop offset="100%" stop-color="#b8891f"/></linearGradient></defs>`;
  const dPlata = `<defs><linearGradient id="musIPlata" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#fbfdff"/><stop offset="46%" stop-color="#ccd6df"/><stop offset="100%" stop-color="#8e9aa5"/></linearGradient></defs>`;
  const dBronce = `<defs><radialGradient id="musIBronce" cx="36%" cy="30%" r="74%">
    <stop offset="0%" stop-color="#ffefbe"/><stop offset="50%" stop-color="#dfa93a"/><stop offset="100%" stop-color="#8b5c15"/></radialGradient></defs>`;
  const dCobre = `<defs><linearGradient id="musICobre" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#eaad5c"/><stop offset="52%" stop-color="#c07a2c"/><stop offset="100%" stop-color="#8b4f18"/></linearGradient></defs>`;
  const dCharol = `<defs><linearGradient id="musICharol" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#3f3f4d"/><stop offset="58%" stop-color="#22222c"/><stop offset="100%" stop-color="#101018"/></linearGradient></defs>`;

  /* las cuerdas del arpa: se calculan una vez, del clavijero al tablero.
     Van de larga a corta y, como en las arpas de verdad, las de DO son
     rojas y las de FA azules para no perderse entre las 47. */
  const cuerdasArpa = (function () {
    let g = "";
    for (let i = 0; i < 17; i++) {
      const t = 0.06 + i * 0.052, u = 1 - t;
      const nx = u * u * 84 + 2 * u * t * 158 + t * t * 206;
      const ny = u * u * 54 + 2 * u * t * 44 + t * t * 168;
      const sx = 104 + t * 92, sy = 300 - t * 130;
      const c = i % 7 === 0 ? "#ff8a80" : (i % 7 === 3 ? "#8ab4ff" : "#fff8e1");
      g += `<line x1="${nx.toFixed(1)}" y1="${ny.toFixed(1)}" x2="${sx.toFixed(1)}" y2="${sy.toFixed(1)}" stroke="${c}" stroke-width="2.2"/>`;
    }
    return g;
  })();

  /* el teclado del piano, con sus grupos de dos y de tres teclas negras */
  const teclasPiano = (function () {
    const x0 = 30, y = 168, ancho = 11.2, negras = [0, 1, 3, 4, 5];
    let g = "";
    for (let i = 0; i < 17; i++) g += `<line x1="${(x0 + i * ancho).toFixed(1)}" y1="${y}" x2="${(x0 + i * ancho).toFixed(1)}" y2="${y + 26}" stroke="#c9c4b8" stroke-width="1.4"/>`;
    for (let i = 0; i < 16; i++) {
      if (negras.indexOf(i % 7) < 0) continue;
      g += `<rect x="${(x0 + (i + 1) * ancho - 3.6).toFixed(1)}" y="${y}" width="7.2" height="16" rx="2" fill="#15151c"/>`;
    }
    return g;
  })();

  /* ---------- CADA INSTRUMENTO ----------
     Los tamaños siguen el tamaño de verdad: la flauta mide 67 cm, la
     trompeta 48, el violín 60, el saxofón 70, la guitarra 100, el
     violonchelo 120 y el arpa 180. Los pequeños llevan un suelo (nunca por
     debajo de 70 px) para que el dedo los pueda tocar, y los grandes se
     quedan en 150-170 px, como en los mapas de policía y bomberos.
     Cada viewBox guarda la misma proporción que su caja: así el dibujo
     llena la caja entera y el decorado sabe dónde ponerle su apoyo. */
  const DEF = {
    "El violín": {
      jingle: { type: "melody", instr: "bow", notes: [67, 71, 74, 71, 67], nd: 0.4, gap: 0.36, vol: 0.14, sus: true },
      w: 60, h: 92, svg: mm(`${dMadera}
        <path d="M12 172 L114 48" stroke="#4e342e" stroke-width="5.5" stroke-linecap="round"/>
        <path d="M17 174 L112 59" stroke="#f3e9d6" stroke-width="3.2" stroke-linecap="round"/>
        <path d="M6 160 l14 -16 l11 9 l-14 16 Z" fill="#2b1b16"/>
        <path d="M60 6 q15 1 15 13 q0 11 -11 11 q-9 0 -9 -8 q0 -6 6 -6 q5 0 5 5" fill="none" stroke="#7a5236" stroke-width="5" stroke-linecap="round"/>
        <path d="M51 18 h18 l3 28 h-24 Z" fill="#7a5236" stroke="#4e342e" stroke-width="2"/>
        <g fill="#33211a"><rect x="39" y="23" width="13" height="5" rx="2.5"/><rect x="39" y="35" width="13" height="5" rx="2.5"/>
          <rect x="68" y="27" width="13" height="5" rx="2.5"/><rect x="68" y="39" width="13" height="5" rx="2.5"/></g>
        <rect x="52" y="42" width="16" height="50" rx="3" fill="#7a5236"/>
        <path d="M53 46 h14 l4 62 h-22 Z" fill="#2a1c17"/>
        <path d="M60 86 C74 86 84 95 84.5 106 C85 116 75 120 76 126 C77 134 89 139 89 152 C89 170 76 182 60 182 C44 182 31 170 31 152 C31 139 43 134 44 126 C45 120 35 116 35.5 106 C36 95 46 86 60 86 Z" fill="url(#musIMadera)" stroke="#5d4037" stroke-width="3"/>
        <path d="M60 92 C71 92 79 99 79.5 108 C80 117 71 121 72 127 C73 134 83 139 83 152 C83 167 74 176 60 176 C46 176 37 167 37 152 C37 139 47 134 48 127 C49 121 40 117 40.5 108 C41 99 49 92 60 92 Z" fill="none" stroke="rgba(70,36,12,.45)" stroke-width="1.6"/>
        <g stroke="#3b241a" stroke-width="3.2" fill="none" stroke-linecap="round">
          <path d="M47 112 q-9 5 -8 14 q1 6 6 5 q-7 5 -6 13 q1 8 9 8"/>
          <path d="M73 112 q9 5 8 14 q-1 6 -6 5 q7 5 6 13 q-1 8 -9 8"/></g>
        <g fill="#3b241a"><circle cx="39" cy="111" r="2.6"/><circle cx="56" cy="153" r="2.6"/>
          <circle cx="81" cy="111" r="2.6"/><circle cx="64" cy="153" r="2.6"/></g>
        <ellipse cx="43" cy="168" rx="13" ry="8" fill="#241610" transform="rotate(-14 43 168)"/>
        <path d="M50 147 h20 l-3 -11 h-14 Z" fill="#e3c489" stroke="#a17a3e" stroke-width="1.4"/>
        <path d="M54 152 h12 l4 22 q-10 5 -20 0 Z" fill="#241610"/>
        <circle cx="60" cy="179" r="3.4" fill="#241610"/>
        ${[0, 1, 2, 3].map(i => `<line x1="${55.5 + i * 3}" y1="30" x2="${54 + i * 4}" y2="150" stroke="#efe6d6" stroke-width="1.5"/>`).join("")}`, "2 2 116 180") },

    "El violonchelo": {
      jingle: { type: "melody", instr: "bow", notes: [48, 52, 55, 52, 48], nd: 0.5, gap: 0.46, vol: 0.17, sus: true },
      w: 56, h: 142, svg: mm(`${dMadera}
        <path d="M78 8 q19 1 19 17 q0 14 -14 14 q-11 0 -11 -10 q0 -8 8 -8 q6 0 6 6" fill="none" stroke="#7a5236" stroke-width="6" stroke-linecap="round"/>
        <path d="M67 28 h22 l4 36 h-30 Z" fill="#7a5236" stroke="#4e342e" stroke-width="2.4"/>
        <g fill="#33211a"><rect x="52" y="35" width="16" height="6" rx="3"/><rect x="52" y="50" width="16" height="6" rx="3"/>
          <rect x="88" y="40" width="16" height="6" rx="3"/><rect x="88" y="55" width="16" height="6" rx="3"/></g>
        <rect x="68" y="60" width="20" height="62" rx="4" fill="#7a5236"/>
        <path d="M69 64 h18 l6 78 h-30 Z" fill="#2a1c17"/>
        <path d="M78 118 C96 118 110 130 110.5 146 C111 160 98 165 99 173 C100 184 116 191 116 210 C116 240 100 268 78 268 C56 268 40 240 40 210 C40 191 56 184 57 173 C58 165 45 160 45.5 146 C46 130 60 118 78 118 Z" fill="url(#musIMadera)" stroke="#5d4037" stroke-width="3.4"/>
        <path d="M78 126 C93 126 103 136 103.5 148 C104 159 93 164 94 172 C95 182 108 189 108 208 C108 234 95 260 78 260 C61 260 48 234 48 208 C48 189 61 182 62 172 C63 164 52 159 52.5 148 C53 136 63 126 78 126 Z" fill="none" stroke="rgba(70,36,12,.42)" stroke-width="1.8"/>
        <g stroke="#3b241a" stroke-width="4" fill="none" stroke-linecap="round">
          <path d="M62 155 q-12 8 -11 20 q1 8 8 7 q-10 7 -8 18 q1 11 12 11"/>
          <path d="M94 155 q12 8 11 20 q-1 8 -8 7 q10 7 8 18 q-1 11 -12 11"/></g>
        <g fill="#3b241a"><circle cx="51" cy="154" r="3.4"/><circle cx="74" cy="212" r="3.4"/>
          <circle cx="105" cy="154" r="3.4"/><circle cx="82" cy="212" r="3.4"/></g>
        <path d="M64 205 h28 l-4 -14 h-20 Z" fill="#e3c489" stroke="#a17a3e" stroke-width="1.6"/>
        <path d="M70 212 h16 l6 34 q-14 6 -28 0 Z" fill="#241610"/>
        <rect x="74" y="262" width="8" height="18" rx="4" fill="#9aa4af"/>
        <rect x="66" y="277" width="24" height="6" rx="3" fill="#5c6670"/>
        ${[0, 1, 2, 3].map(i => `<line x1="${72 + i * 4}" y1="44" x2="${70 + i * 5.4}" y2="207" stroke="#efe6d6" stroke-width="1.8"/>`).join("")}`, "22 4 110 280") },

    "El arpa": {
      jingle: { type: "melody", instr: "harp", notes: [60, 64, 67, 72, 76, 79], nd: 0.5, gap: 0.13, vol: 0.14 },
      w: 128, h: 170, svg: mm(`${dLaton}${dMadera}
        <path d="M92 318 L150 318 L214 178 L190 164 Z" fill="url(#musIMadera)" stroke="#7a4a1c" stroke-width="3"/>
        <path d="M104 300 L196 170" stroke="rgba(60,30,8,.5)" stroke-width="4"/>
        <path d="M80 52 Q158 44 206 168" stroke="url(#musILaton)" stroke-width="22" fill="none" stroke-linecap="round"/>
        <path d="M80 46 Q156 38 200 158" stroke="rgba(255,255,255,.35)" stroke-width="4" fill="none" stroke-linecap="round"/>
        ${cuerdasArpa}
        <path d="M60 312 L60 80 q0 -16 14 -22 l18 16 q-12 6 -12 16 L80 312 Z" fill="url(#musILaton)" stroke="#a8792a" stroke-width="3"/>
        <path d="M66 300 L66 88" stroke="rgba(255,255,255,.4)" stroke-width="4"/>
        <circle cx="82" cy="52" r="14" fill="url(#musILaton)" stroke="#a8792a" stroke-width="3"/>
        <circle cx="82" cy="52" r="6" fill="#8a5f14"/>
        <path d="M42 306 h190 q10 0 10 12 v6 q0 10 -12 10 H44 q-12 0 -12 -10 v-6 q0 -12 10 -12 Z" fill="url(#musIMadera)" stroke="#7a4a1c" stroke-width="3"/>
        <path d="M46 334 h30 l-6 6 h-24 Z M198 334 h30 l-2 6 h-30 Z" fill="#5d3a1d"/>
        ${[0, 1, 2, 3, 4, 5, 6].map(i => `<rect x="${74 + i * 22}" y="326" width="14" height="7" rx="3" fill="#c9a13c"/>`).join("")}`, "22 36 228 304") },

    "La guitarra": {
      jingle: { type: "melody", instr: "pluck", notes: [52, 57, 62, 66, 62, 57], nd: 0.4, gap: 0.16, vol: 0.15 },
      w: 52, h: 118, svg: mm(`${dMadera}
        <path d="M54 4 h24 q7 0 7 9 v24 h-38 v-24 q0 -9 7 -9 Z" fill="#6d4c41" stroke="#4e342e" stroke-width="2.4"/>
        <g fill="#d9cdbb"><rect x="40" y="10" width="12" height="5" rx="2.5"/><rect x="40" y="20" width="12" height="5" rx="2.5"/><rect x="40" y="30" width="12" height="5" rx="2.5"/>
          <rect x="80" y="10" width="12" height="5" rx="2.5"/><rect x="80" y="20" width="12" height="5" rx="2.5"/><rect x="80" y="30" width="12" height="5" rx="2.5"/></g>
        <rect x="54" y="36" width="24" height="6" rx="2" fill="#efe6d6"/>
        <rect x="55" y="40" width="22" height="88" fill="#2a1c17"/>
        ${[52, 64, 76, 88, 98, 108, 118].map(y => `<line x1="55" y1="${y}" x2="77" y2="${y}" stroke="#b9a894" stroke-width="2"/>`).join("")}
        <circle cx="66" cy="82" r="3" fill="#e8ded0"/><circle cx="66" cy="103" r="3" fill="#e8ded0"/>
        <path d="M66 124 C90 124 103 138 103 154 C103 166 91 172 91 180 C91 192 112 198 112 214 C112 226 92 234 66 234 C40 234 20 226 20 214 C20 198 41 192 41 180 C41 172 29 166 29 154 C29 138 42 124 66 124 Z" fill="url(#musIMadera)" stroke="#5d4037" stroke-width="3.4"/>
        <path d="M66 131 C86 131 96 143 96 156 C96 166 86 172 86 180 C86 190 105 196 105 213 C105 222 88 228 66 228 C44 228 27 222 27 213 C27 196 46 190 46 180 C46 172 36 166 36 156 C36 143 46 131 66 131 Z" fill="none" stroke="rgba(70,36,12,.4)" stroke-width="1.8"/>
        <circle cx="66" cy="172" r="26" fill="none" stroke="#e0c9a6" stroke-width="3"/>
        <circle cx="66" cy="172" r="22" fill="none" stroke="#8d6e63" stroke-width="4"/>
        <circle cx="66" cy="172" r="18" fill="#2a1a12"/>
        <path d="M44 206 h44 q5 0 5 5 v9 q0 5 -5 5 h-44 q-5 0 -5 -5 v-9 q0 -5 5 -5 Z" fill="#3e2723"/>
        ${[0, 1, 2, 3, 4, 5].map(i => `<circle cx="${50 + i * 6.4}" cy="211" r="2.2" fill="#efe6d6"/>`).join("")}
        ${[0, 1, 2, 3, 4, 5].map(i => `<line x1="${57.5 + i * 2.2}" y1="14" x2="${52 + i * 5.6}" y2="209" stroke="#f1e7d5" stroke-width="1.4"/>`).join("")}`, "15 1 103 234") },

    "La flauta": {
      jingle: { type: "melody", instr: "flute", notes: [79, 81, 83, 86, 83], nd: 0.26, gap: 0.22, vol: 0.2 },
      /* la caja va más alta que la tinta a propósito: el motor agranda solo
         los puntos cuyo lado menor baja de 46 px, y con 29 de alto la flauta
         se hinchaba a 152 px de largo, más que el chelo. Con 46 de alto el
         dibujo se queda en sus 96 px (el viewBox lo centra) y el decorado,
         que mide la tinta de verdad, le sigue poniendo la peana debajo. */
      w: 96, h: 46, svg: mm(`${dPlata}<g transform="rotate(-9 132 39)">
        <rect x="6" y="26" width="80" height="26" rx="13" fill="url(#musIPlata)" stroke="#8b95a0" stroke-width="2.6"/>
        <rect x="6" y="26" width="16" height="26" rx="8" fill="#c3ccd5" stroke="#8b95a0" stroke-width="2.6"/>
        <ellipse cx="52" cy="27" rx="15" ry="8" fill="#d5dde4" stroke="#8b95a0" stroke-width="2.2"/>
        <ellipse cx="52" cy="27" rx="7" ry="3.6" fill="#3a444e"/>
        <rect x="82" y="24" width="8" height="30" rx="3" fill="#aeb7c0" stroke="#8b95a0" stroke-width="2"/>
        <rect x="88" y="28" width="122" height="22" rx="11" fill="url(#musIPlata)" stroke="#8b95a0" stroke-width="2.6"/>
        <rect x="206" y="24" width="8" height="30" rx="3" fill="#aeb7c0" stroke="#8b95a0" stroke-width="2"/>
        <rect x="212" y="29" width="46" height="20" rx="10" fill="url(#musIPlata)" stroke="#8b95a0" stroke-width="2.6"/>
        <rect x="104" y="15" width="104" height="5" rx="2.5" fill="#9aa4af"/>
        ${[104, 126, 148, 172, 194].map(x => `<circle cx="${x}" cy="39" r="9" fill="#e7edf2" stroke="#8b95a0" stroke-width="3.2"/>`).join("")}
        ${[104, 126, 148, 172, 194].map(x => `<rect x="${x - 2}" y="20" width="4" height="10" fill="#9aa4af"/>`).join("")}
        <rect x="222" y="18" width="16" height="11" rx="5" fill="#c3ccd5" stroke="#8b95a0" stroke-width="2"/>
        <rect x="240" y="21" width="13" height="9" rx="4" fill="#c3ccd5" stroke="#8b95a0" stroke-width="2"/>
        <rect x="14" y="30" width="240" height="5" rx="2.5" fill="rgba(255,255,255,.6)"/></g>`, "2 -7 260 82") },

    "La trompeta": {
      jingle: { type: "melody", instr: "brass", notes: [60, 60, 67, 72], nd: 0.24, gap: 0.26, vol: 0.13 },
      w: 76, h: 46, svg: mm(`${dLaton}
        <path d="M52 78 v20 q0 14 16 14 h56 q16 0 16 -14 v-16" stroke="#d8ab3e" stroke-width="12" fill="none" stroke-linecap="round"/>
        <rect x="14" y="60" width="140" height="17" rx="8.5" fill="url(#musILaton)" stroke="#a8792a" stroke-width="2.6"/>
        <path d="M148 56 Q182 50 206 40 L206 100 Q182 90 148 84 Z" fill="url(#musILaton)" stroke="#a8792a" stroke-width="2.6"/>
        <ellipse cx="206" cy="70" rx="9" ry="30" fill="#f6d97a" stroke="#a8792a" stroke-width="2.6"/>
        <ellipse cx="206" cy="70" rx="4" ry="22" fill="rgba(120,80,16,.5)"/>
        ${[66, 94, 122].map(x => `<rect x="${x}" y="26" width="19" height="44" rx="7" fill="url(#musILaton)" stroke="#a8792a" stroke-width="2.4"/>
          <rect x="${x + 6}" y="14" width="7" height="14" rx="3" fill="#c9a13c"/>
          <circle cx="${x + 9.5}" cy="12" r="9" fill="#f4e2b4" stroke="#a8792a" stroke-width="2.4"/>`).join("")}
        <rect x="4" y="62" width="14" height="13" rx="6" fill="#e8d6a8" stroke="#a8792a" stroke-width="2.4"/>
        <rect x="18" y="63" width="10" height="11" rx="4" fill="#c9a13c"/>
        <rect x="30" y="62" width="120" height="5" rx="2.5" fill="rgba(255,255,255,.5)"/>
        <path d="M92 112 q6 10 0 18" stroke="#a8792a" stroke-width="4" fill="none" stroke-linecap="round"/>`, "1 0 216 130") },

    "El saxofón": {
      jingle: { type: "melody", instr: "reed", notes: [58, 61, 65, 61, 58, 65], nd: 0.3, gap: 0.24, vol: 0.11 },
      w: 50, h: 96, svg: mm(`${dLaton}
        <path d="M118 6 q18 8 12 26 l-10 22 -24 -12 10 -30 Z" fill="#2b2b33"/>
        <rect x="94" y="34" width="30" height="10" rx="5" fill="#c9a13c" transform="rotate(22 109 39)"/>
        <path d="M110 56 Q96 82 88 108 Q76 156 74 190 Q72 216 100 218 Q128 218 132 190 L138 156" stroke="url(#musILaton)" stroke-width="28" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M102 66 Q90 90 82 114 Q72 158 70 188" stroke="rgba(255,255,255,.4)" stroke-width="6" fill="none" stroke-linecap="round"/>
        <path d="M124 172 q14 -46 20 -68 q30 8 38 30 q-18 24 -34 66 Z" fill="url(#musILaton)" stroke="#a8792a" stroke-width="3"/>
        <ellipse cx="162" cy="106" rx="28" ry="13" fill="#f6d97a" stroke="#a8792a" stroke-width="3" transform="rotate(-24 162 106)"/>
        <ellipse cx="162" cy="106" rx="20" ry="7" fill="rgba(120,80,16,.4)" transform="rotate(-24 162 106)"/>
        <path d="M116 100 q-10 58 -8 100" stroke="#c9a13c" stroke-width="4" fill="none"/>
        ${[[88, 122], [83, 150], [80, 178], [84, 202]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="9.5" fill="#fff3d6" stroke="#a8792a" stroke-width="3"/>
          <line x1="${p[0] + 9}" y1="${p[1]}" x2="112" y2="${p[1] - 5}" stroke="#c9a13c" stroke-width="3"/>`).join("")}
        <circle cx="122" cy="208" r="8.5" fill="#fff3d6" stroke="#a8792a" stroke-width="3"/>
        <rect x="62" y="150" width="12" height="24" rx="5" fill="#3a3a44"/>`, "60 3 132 246") },

    "La tuba": {
      jingle: { type: "melody", instr: "brass", notes: [36, 43, 36, 43], nd: 0.34, gap: 0.38, vol: 0.2 },
      w: 114, h: 122, svg: mm(`${dLaton}
        <path d="M104 160 q-42 6 -42 32 q0 28 44 28 h74 q32 0 32 -26 q0 -24 -30 -28" stroke="url(#musILaton)" stroke-width="24" fill="none" stroke-linecap="round"/>
        <path d="M104 160 q-42 6 -42 32 q0 28 44 28 h74 q32 0 32 -26 q0 -24 -30 -28" stroke="rgba(255,255,255,.3)" stroke-width="6" fill="none" stroke-linecap="round"/>
        <path d="M98 164 L52 60 q-8 -16 10 -18 h124 q18 2 10 18 L142 164 Z" fill="url(#musILaton)" stroke="#a8792a" stroke-width="3.4"/>
        <path d="M108 156 L68 64" stroke="rgba(255,255,255,.4)" stroke-width="8"/>
        <ellipse cx="120" cy="44" rx="64" ry="17" fill="#f6d97a" stroke="#a8792a" stroke-width="3.4"/>
        <ellipse cx="120" cy="48" rx="52" ry="11" fill="rgba(120,80,16,.45)"/>
        <rect x="140" y="118" width="62" height="20" rx="10" fill="url(#musILaton)" stroke="#a8792a" stroke-width="2.6"/>
        ${[0, 1, 2].map(i => `<rect x="${148 + i * 22}" y="88" width="19" height="46" rx="8" fill="url(#musILaton)" stroke="#a8792a" stroke-width="2.6"/>
          <circle cx="${157.5 + i * 22}" cy="82" r="9" fill="#f4e2b4" stroke="#a8792a" stroke-width="2.6"/>`).join("")}
        <path d="M202 128 q16 -6 20 -20" stroke="#d8ab3e" stroke-width="12" fill="none" stroke-linecap="round"/>
        <ellipse cx="226" cy="106" rx="12" ry="9" fill="#e8d6a8" stroke="#a8792a" stroke-width="2.6"/>`, "42 23 196 209") },

    "Los timbales": {
      jingle: { type: "timpani" },
      w: 158, h: 139, svg: mm(`${dCobre}${dLaton}
        <path d="M144 86 q0 108 62 108 q62 0 62 -108 Z" fill="url(#musICobre)" stroke="#7c4416" stroke-width="3.4"/>
        <path d="M164 100 q6 74 30 84" stroke="rgba(255,255,255,.3)" stroke-width="9" fill="none"/>
        <ellipse cx="206" cy="86" rx="62" ry="21" fill="#f6ecd8" stroke="#b98a52" stroke-width="3"/>
        <ellipse cx="206" cy="86" rx="62" ry="21" fill="none" stroke="url(#musILaton)" stroke-width="7"/>
        ${[-56, -34, 0, 34, 56].map(d => `<rect x="${206 + d - 3}" y="92" width="7" height="20" rx="3.5" fill="#c9a13c"/>`).join("")}
        <path d="M176 190 l-16 22 M236 190 l16 22 M206 196 v18" stroke="#4a4a52" stroke-width="9" stroke-linecap="round"/>
        <path d="M186 208 h40 l8 8 h-56 Z" fill="#3a3a44"/>
        <path d="M28 96 q0 92 52 92 q52 0 52 -92 Z" fill="url(#musICobre)" stroke="#7c4416" stroke-width="3.4"/>
        <path d="M46 108 q6 62 26 70" stroke="rgba(255,255,255,.3)" stroke-width="8" fill="none"/>
        <ellipse cx="80" cy="96" rx="52" ry="18" fill="#f6ecd8" stroke="#b98a52" stroke-width="3"/>
        <ellipse cx="80" cy="96" rx="52" ry="18" fill="none" stroke="url(#musILaton)" stroke-width="6"/>
        ${[-46, -28, 0, 28, 46].map(d => `<rect x="${80 + d - 3}" y="101" width="6" height="18" rx="3" fill="#c9a13c"/>`).join("")}
        <path d="M54 184 l-14 20 M106 184 l14 20 M80 190 v16" stroke="#4a4a52" stroke-width="8" stroke-linecap="round"/>
        <path d="M62 200 h36 l8 8 h-52 Z" fill="#3a3a44"/>
        <g><line x1="126" y1="26" x2="164" y2="66" stroke="#a8703f" stroke-width="7" stroke-linecap="round"/>
          <circle cx="122" cy="22" r="13" fill="#efe2c6" stroke="#c9b795" stroke-width="2.4"/></g>
        <g><line x1="176" y1="22" x2="146" y2="60" stroke="#a8703f" stroke-width="7" stroke-linecap="round"/>
          <circle cx="180" cy="18" r="13" fill="#efe2c6" stroke="#c9b795" stroke-width="2.4"/></g>`, "26 3 244 215") },

    "El xilófono": {
      jingle: { type: "melody", instr: "xylo", notes: [72, 74, 76, 79, 81, 84], nd: 0.2, gap: 0.15, vol: 0.16 },
      w: 126, h: 100, svg: mm(`
        <path d="M14 128 h224 q8 0 8 8 v6 q0 8 -10 8 H16 q-10 0 -10 -8 v-6 q0 -8 8 -8 Z" fill="#8a5730"/>
        <rect x="16" y="46" width="220" height="12" rx="6" fill="#6f4526"/>
        ${[0, 1, 2, 3, 4, 5, 6, 7].map(i => `<rect x="${18 + i * 28}" y="${52 + i * 2}" width="23" height="${74 - i * 5}" rx="6" fill="${["#ef5350", "#ff7043", "#ffb300", "#ffd54f", "#9ccc65", "#42a5f5", "#5c6bc0", "#ab47bc"][i]}" stroke="rgba(0,0,0,.28)" stroke-width="2"/>
          <circle cx="${29.5 + i * 28}" cy="${60 + i * 2}" r="2.6" fill="rgba(255,255,255,.7)"/>
          <rect x="${24 + i * 28}" y="150" width="12" height="${34 - i * 3}" rx="6" fill="#aeb7c0" stroke="#7d8792" stroke-width="1.6"/>`).join("")}
        <path d="M22 150 v20 M230 150 v20" stroke="#6f4526" stroke-width="11" stroke-linecap="round"/>
        <g><line x1="70" y1="12" x2="104" y2="44" stroke="#a8703f" stroke-width="6" stroke-linecap="round"/>
          <circle cx="66" cy="9" r="10" fill="#efe2c6" stroke="#c9b795" stroke-width="2.2"/></g>
        <g><line x1="176" y1="10" x2="146" y2="42" stroke="#a8703f" stroke-width="6" stroke-linecap="round"/>
          <circle cx="180" cy="7" r="10" fill="#efe2c6" stroke="#c9b795" stroke-width="2.2"/></g>`, "4 -6 244 194") },

    "Los platillos": {
      jingle: { type: "cymbal" },
      w: 100, h: 64, svg: mm(`${dLaton}
        <path d="M10 116 Q96 78 182 116 Q96 106 10 116 Z" fill="url(#musILaton)" stroke="#a8792a" stroke-width="3"/>
        <path d="M46 110 Q96 92 146 110" fill="none" stroke="rgba(140,95,20,.45)" stroke-width="2.4"/>
        <ellipse cx="96" cy="98" rx="21" ry="11" fill="#f6d97a" stroke="#a8792a" stroke-width="2.6"/>
        <g transform="rotate(-13 96 76)">
          <path d="M12 78 Q96 40 180 78 Q96 68 12 78 Z" fill="url(#musILaton)" stroke="#a8792a" stroke-width="3"/>
          <path d="M48 72 Q96 54 144 72" fill="none" stroke="rgba(140,95,20,.45)" stroke-width="2.4"/>
          <ellipse cx="96" cy="60" rx="21" ry="11" fill="#f6d97a" stroke="#a8792a" stroke-width="2.6"/>
          <path d="M96 50 q-4 -12 4 -18" stroke="#8a5730" stroke-width="5" fill="none" stroke-linecap="round"/></g>
        <path d="M96 88 q6 -10 -2 -16" stroke="#8a5730" stroke-width="5" fill="none" stroke-linecap="round"/>
        <g stroke="#ffe082" stroke-width="4" stroke-linecap="round">
          <path d="M22 34 L14 20 M44 22 L40 6 M158 30 L170 18 M142 20 L148 6"/></g>`, "2 2 182 116") },

    /* EL GONG: disco de bronce colgado de su aro en un soporte de madera,
       con la maza de cabeza blanda apoyada al lado. Suena por vibración:
       el golpe pone a temblar el bronce y el temblor sigue un buen rato. */
    "El gong": {
      jingle: { type: "melody", instr: "gong", notes: [33, 40], nd: 1.2, gap: 1.15, vol: 0.14 },
      w: 145, h: 155, svg: mm(`${dBronce}${dRoble}
        <path d="M16 300 h74 q8 0 8 8 l4 12 h-96 l4 -12 q0 -8 6 -8 Z" fill="#5d3a1d"/>
        <path d="M206 300 h74 q6 0 6 8 l4 12 h-96 l4 -12 q0 -8 8 -8 Z" fill="#5d3a1d"/>
        <rect x="36" y="46" width="24" height="258" rx="10" fill="url(#musIRoble)"/>
        <rect x="236" y="46" width="24" height="258" rx="10" fill="url(#musIRoble)"/>
        <rect x="14" y="24" width="268" height="26" rx="12" fill="url(#musIRoble)"/>
        <rect x="14" y="28" width="268" height="7" rx="3.5" fill="rgba(255,255,255,.22)"/>
        <circle cx="26" cy="37" r="12" fill="#c9a13c"/><circle cx="270" cy="37" r="12" fill="#c9a13c"/>
        <path d="M110 44 L128 86 M186 44 L168 86" stroke="#e8c25c" stroke-width="6" stroke-linecap="round"/>
        <circle cx="148" cy="180" r="88" fill="url(#musIBronce)" stroke="#8a5f14" stroke-width="7"/>
        <circle cx="148" cy="180" r="80" fill="none" stroke="rgba(255,248,220,.34)" stroke-width="7"/>
        <circle cx="148" cy="180" r="64" fill="none" stroke="rgba(120,80,16,.4)" stroke-width="4"/>
        <circle cx="148" cy="180" r="46" fill="none" stroke="rgba(120,80,16,.34)" stroke-width="4"/>
        <circle cx="148" cy="180" r="27" fill="#f3cf72" stroke="#8a5f14" stroke-width="5"/>
        <circle cx="120" cy="150" r="17" fill="rgba(255,255,255,.32)"/>
        <circle cx="128" cy="94" r="8" fill="none" stroke="#8a5f14" stroke-width="4"/>
        <circle cx="168" cy="94" r="8" fill="none" stroke="#8a5f14" stroke-width="4"/>
        <g transform="rotate(9 254 220)">
          <rect x="248" y="152" width="13" height="146" rx="6" fill="#a8703f"/>
          <rect x="248" y="152" width="5" height="146" rx="2.5" fill="rgba(255,255,255,.25)"/>
          <ellipse cx="254" cy="144" rx="23" ry="21" fill="#efe2c6" stroke="#c9b795" stroke-width="3"/></g>`, "3 12 290 310") },

    "El podio de dirección": {
      jingle: { type: "chord", instr: "bow", notes: [60, 64, 67, 72], nd: 1.6 },
      w: 106, h: 118, svg: mm(`
        <path d="M34 198 h146 l12 34 h-170 Z" fill="#7b5230"/>
        <rect x="24" y="182" width="166" height="20" rx="8" fill="#8d6e63"/>
        <rect x="24" y="185" width="166" height="6" rx="3" fill="rgba(255,255,255,.3)"/>
        <rect x="98" y="98" width="18" height="88" rx="8" fill="#4b4655"/>
        <g transform="rotate(-7 106 84)">
          <path d="M44 60 h124 l-12 46 h-100 Z" fill="#3d3a48"/>
          <path d="M56 52 h100 l-10 44 h-80 Z" fill="#f4f1e8"/>
          ${[62, 70, 78, 86].map((y, i) => `<line x1="${64 + i}" y1="${y}" x2="${150 - i}" y2="${y}" stroke="#9aa0a6" stroke-width="2.2"/>`).join("")}
          <ellipse cx="88" cy="80" rx="7" ry="5" fill="#2b2b33" transform="rotate(-18 88 80)"/>
          <line x1="94" y1="78" x2="94" y2="58" stroke="#2b2b33" stroke-width="2.6"/>
          <ellipse cx="118" cy="72" rx="7" ry="5" fill="#2b2b33" transform="rotate(-18 118 72)"/>
          <line x1="124" y1="70" x2="124" y2="50" stroke="#2b2b33" stroke-width="2.6"/></g>
        <circle cx="150" cy="42" r="8" fill="#8d6e63"/>
        <line x1="152" y1="40" x2="198" y2="14" stroke="#eceff1" stroke-width="6" stroke-linecap="round"/>
        <path d="M22 46 q-12 -10 -4 -24 M190 60 q16 -8 18 -24" stroke="#ffd54f" stroke-width="4" fill="none" stroke-linecap="round"/>`, "13 11 196 221") },

    "El piano de cola": {
      jingle: { type: "melody", instr: "piano", notes: [60, 64, 67, 72, 67, 64, 60], nd: 0.34, gap: 0.2, vol: 0.10 },
      w: 168, h: 112, svg: mm(`${dCharol}
        <path d="M28 120 q-8 -74 60 -86 Q214 12 274 60 L206 122 Z" fill="#2c2c38" stroke="#000" stroke-width="3"/>
        <path d="M40 114 q-4 -60 56 -72 Q206 26 258 66" fill="none" stroke="rgba(255,255,255,.2)" stroke-width="6"/>
        <path d="M62 116 L214 62 M84 116 L232 70 M106 116 L246 80" stroke="rgba(206,182,138,.32)" stroke-width="2.6"/>
        <path d="M256 74 L300 34" stroke="#1c1c24" stroke-width="8" stroke-linecap="round"/>
        <path d="M24 118 L206 118 Q310 118 310 172 L310 196 q0 8 -8 8 H32 q-8 0 -8 -8 Z" fill="url(#musICharol)" stroke="#000" stroke-width="3"/>
        <path d="M32 126 L206 126" stroke="rgba(255,255,255,.16)" stroke-width="5"/>
        <rect x="26" y="164" width="196" height="32" rx="4" fill="#f7f5ef" stroke="#b9b4a8" stroke-width="2.4"/>
        <rect x="26" y="164" width="196" height="6" rx="2" fill="#d8d3c6"/>
        ${teclasPiano}
        <rect x="36" y="204" width="16" height="20" rx="3" fill="#1c1c24"/>
        <rect x="196" y="204" width="16" height="20" rx="3" fill="#1c1c24"/>
        <rect x="290" y="204" width="16" height="20" rx="3" fill="#1c1c24"/>
        <path d="M132 204 v10 h34 v-10" fill="none" stroke="#c9a13c" stroke-width="5"/>
        ${[136, 149, 162].map(x => `<rect x="${x}" y="212" width="8" height="10" rx="3" fill="#c9a13c"/>`).join("")}`, "18 25 300 200") },

    "El micrófono": {
      jingle: { type: "melody", w: "sine", notes: [64, 67, 71, 67], nd: 0.35, gap: 0.3, vol: 0.2, sus: true },
      w: 56, h: 100, svg: mm(`
        <circle cx="56" cy="46" r="35" fill="#6f7d88" stroke="#3f4c56" stroke-width="4"/>
        <g stroke="#3f4c56" stroke-width="2.6" opacity=".8">
          <path d="M27 33 h58 M22 46 h68 M27 59 h58"/>
          <path d="M44 15 v62 M56 12 v68 M68 15 v62"/></g>
        <path d="M34 38 q7 -19 23 -23" stroke="rgba(255,255,255,.5)" stroke-width="5" fill="none" stroke-linecap="round"/>
        <rect x="36" y="80" width="40" height="10" rx="5" fill="#93a1ad" stroke="#3f4c56" stroke-width="2.4"/>
        <path d="M40 90 h32 l-5 56 h-22 Z" fill="#5a6a76" stroke="#3f4c56" stroke-width="3"/>
        <rect x="51" y="104" width="10" height="18" rx="4" fill="#2f3941"/>
        <path d="M44 146 q12 10 24 0 l5 18 h-34 Z" fill="#3f4c56"/>
        <path d="M56 164 v20" stroke="#37474f" stroke-width="7" stroke-linecap="round"/>
        <path d="M12 30 q-9 17 0 34 M100 30 q9 17 0 34" stroke="#ffd54f" stroke-width="4.4" fill="none" stroke-linecap="round"/>`, "6 9 99 177") },

    /* las palmas van dibujadas, no con emojis: la fuente del sistema
       desentonaba al lado del vector y cambiaba de un aparato a otro */
    "El público": {
      jingle: { type: "applause" },
      w: 140, h: 58, svg: mm(`
        ${[[62, "#f6d5b8", "#5d4037", "#7a1e2c"], [140, "#c98e62", "#161616", "#25406b"], [218, "#f1c27d", "#e65100", "#2e6b46"]].map(p => `
          <path d="M${p[0] - 40} 176 q0 -46 40 -46 q40 0 40 46 Z" fill="${p[3]}"/>
          <circle cx="${p[0]}" cy="98" r="32" fill="${p[1]}"/>
          <path d="M${p[0] - 32} 90 q32 -50 64 0 q-32 -22 -64 0 Z" fill="${p[2]}"/>
          <circle cx="${p[0] - 10}" cy="98" r="4" fill="#2b2b33"/><circle cx="${p[0] + 10}" cy="98" r="4" fill="#2b2b33"/>
          <path d="M${p[0] - 10} 112 q10 8 20 0" stroke="#2b2b33" stroke-width="3.4" fill="none" stroke-linecap="round"/>
          <path d="M${p[0] - 36} 158 l-16 -20 M${p[0] + 36} 158 l16 -20" stroke="${p[1]}" stroke-width="11" stroke-linecap="round"/>
          <circle cx="${p[0] - 54}" cy="132" r="11" fill="${p[1]}"/><circle cx="${p[0] + 54}" cy="132" r="11" fill="${p[1]}"/>`).join("")}
        <g stroke="#ffd54f" stroke-width="4" stroke-linecap="round">
          <path d="M20 108 L6 96 M28 86 L20 70 M258 108 L272 96 M250 86 L258 70"/></g>`, "-4 60 288 119") }
  };

  ex.pois.forEach(p => {
    const d = DEF[p.name.es];
    if (d) { p.svg = d.svg; p.iw = d.w; p.ih = d.h; p.jingle = d.jingle; }
  });

  /* --- dos fichas nuevas: el pentagrama y las figuras --- */
  ex.pois.push({
    cat: "escenario", emoji: "🎼", x: 3170, y: 300, iw: 150, ih: 80,
    jingle: { type: "melody", instr: "piano", notes: [60, 62, 64, 65, 67], nd: 0.32, gap: 0.3, vol: 0.16 },
    svg: mm(`
      ${[0, 1, 2, 3, 4].map(i => `<line x1="12" y1="${44 + i * 22}" x2="288" y2="${44 + i * 22}" stroke="#fff" stroke-width="4"/>`).join("")}
      <path d="M44 148 q-20 -8 -16 -30 q4 -20 24 -18 q18 2 16 24 q-2 24 -24 48 M52 104 q-8 -48 4 -76 q14 18 8 46 q-4 20 -12 30" stroke="#ffd54f" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <ellipse cx="118" cy="110" rx="14" ry="10" fill="#fff" transform="rotate(-18 118 110)"/><line x1="130" y1="106" x2="130" y2="42" stroke="#fff" stroke-width="5"/>
      <ellipse cx="176" cy="88" rx="14" ry="10" fill="#fff" transform="rotate(-18 176 88)"/><line x1="188" y1="84" x2="188" y2="20" stroke="#fff" stroke-width="5"/>
      <ellipse cx="234" cy="66" rx="14" ry="10" fill="#fff" transform="rotate(-18 234 66)"/><line x1="246" y1="62" x2="246" y2="20" stroke="#fff" stroke-width="5"/>
      <path d="M188 20 h58 v12 h-58 Z" fill="#fff"/>`, "0 16 300 160"),
    name: { es: "El pentagrama", ca: "El pentagrama", en: "The staff", cs: "Notová osnova", fr: "La portée" },
    fact: { es: "El pentagrama son cinco líneas donde viven las notas: cuanto más arriba se escriben, más agudas suenan. ¡Escucha la escalera: do, re, mi, fa, sol!", ca: "El pentagrama són cinc línies on viuen les notes: com més amunt s'escriuen, més agudes sonen. Escolta l'escala: do, re, mi, fa, sol!", en: "The staff is five lines where the notes live: the higher they are written, the higher they sound. Listen to the ladder: do, re, mi, fa, sol!", cs: "Notová osnova je pět linek, kde bydlí noty: čím výš jsou napsané, tím výš zní. Poslechni si žebřík: do, re, mi, fa, sol!", fr: "La portée, ce sont cinq lignes où vivent les notes : plus elles sont écrites haut, plus elles sonnent aigu. Écoute l'escalier : do, ré, mi, fa, sol !" }
  });
  ex.pois.push({
    cat: "escenario", emoji: "♩", x: 3840, y: 620, iw: 150, ih: 70,
    jingle: { type: "figuras" },
    svg: mm(`
      <ellipse cx="40" cy="96" rx="24" ry="17" fill="none" stroke="#fff" stroke-width="7"/>
      <ellipse cx="112" cy="96" rx="21" ry="16" fill="none" stroke="#fff" stroke-width="7"/><line x1="131" y1="90" x2="131" y2="24" stroke="#fff" stroke-width="6"/>
      <ellipse cx="184" cy="96" rx="21" ry="16" fill="#fff"/><line x1="203" y1="90" x2="203" y2="24" stroke="#fff" stroke-width="6"/>
      <ellipse cx="252" cy="96" rx="21" ry="16" fill="#fff"/><line x1="271" y1="90" x2="271" y2="24" stroke="#fff" stroke-width="6"/>
      <path d="M271 24 q28 14 20 40 q-4 -20 -20 -26 Z" fill="#fff"/>
      ${/* cuánto dura cada figura, en bloques que se cuentan con el dedo:
            cuatro para la redonda, dos para la blanca, uno para la negra
            y medio para la corchea. Antes eran cifras escritas con <text>. */
        [[10, 14], [28, 14], [46, 14], [64, 14], [92, 14], [110, 14], [170, 14], [242, 7]]
          .map(b => `<rect x="${b[0]}" y="136" width="${b[1]}" height="16" rx="7" fill="#ffd54f"/>`).join("")}`, "0 18 300 140"),
    name: { es: "Las figuras", ca: "Les figures", en: "The note values", cs: "Hodnoty not", fr: "Les figures de notes" },
    fact: { es: "Las figuras dicen cuánto dura cada nota: la redonda cuenta cuatro tiempos, la blanca dos, la negra uno y la corchea medio. ¡Escúchalas sonar de la más larga a la más cortita!", ca: "Les figures diuen quant dura cada nota: la rodona compta quatre temps, la blanca dos, la negra un i la corxera mig. Escolta-les sonar de la més llarga a la més curteta!", en: "Note values tell you how long each note lasts: the whole note counts four beats, the half note two, the quarter note one and the eighth note half. Listen to them from longest to shortest!", cs: "Hodnoty not říkají, jak dlouho každá nota trvá: celá nota počítá čtyři doby, půlová dvě, čtvrťová jednu a osminová půl. Poslechni si je od nejdelší po nejkratší!", fr: "Les figures disent combien dure chaque note : la ronde compte quatre temps, la blanche deux, la noire un et la croche un demi. Écoute-les de la plus longue à la plus courte !" }
  });
})();
