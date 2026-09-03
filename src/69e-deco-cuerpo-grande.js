"use strict";
/* ============================================================
   CUERPO HUMANO: la consulta del pediatra para el lienzo ANCHO.

   El mapa del cuerpo pasó de 1500 a 2600 px de ancho y las dos
   siluetas crecieron y se separaron, así que la consulta antigua
   (calculada para 1500 px) ya no encaja: se descarta entera y se
   dibuja aquí una nueva a la medida. De la deco anterior solo se
   conservan las DOS SILUETAS, que las pinta 64-cuerpo-icons.js.

   Todo va en UN SOLO <svg>: pared con cenefa y moldura, arco
   pintado detrás del cuerpo de los órganos, panel de rayos X
   detrás del esqueleto, metro de pared, báscula, estantería,
   vitrina de los sistemas, planta, suelo y tarimas.
   ============================================================ */

(function () {

  const ex = THEMES.cuerpo.content.explore;
  const orig = ex.deco;
  /* las siluetas se piden aparte: así la consulta nueva queda detrás
     de ellas sin arrastrar la consulta vieja */
  const siluetas = ex.decoCuerpos || orig;

  /* nos quedamos con el interior de un svg para recomponer uno solo */
  const dentro = (svg) => String(svg || "")
    .replace(/^[\s\S]*?<svg[^>]*>/, "")
    .replace(/<\/svg>\s*$/, "");

  /* el sangrado de las plantillas no pinta nada: fuera del svg final */
  const compacta = (t) => t.replace(/\n\s*/g, " ");
  const n = (v) => (Math.round(v * 10) / 10);

  /* cajas de los puntos de interés: para no plantar nada justo debajo.
     k = cuánto crecen los iconos en pantalla; m = aire alrededor;
     los 34 de más por abajo son la etiqueta con el nombre. */
  const cajas = (e, k, m) => (e.pois || []).map(p => {
    const w = (p.iw || 80) * k, h = (p.ih || 80) * k;
    return [p.x - w / 2 - m, p.y - h / 2 - m, w + 2 * m, h + 2 * m + 34];
  });
  const libreCon = (cs) => (x, y, w, h) =>
    !cs.some(c => x < c[0] + c[2] && x + w > c[0] && y < c[1] + c[3] && y + h > c[1]);

  ex.deco = function (e) {
    const W = e.width || 2600;
    const libre = libreCon(cajas(e, 1.15, 16));
    const SUELO = 1012;      /* donde empieza el suelo */
    const RIEL = 700;        /* la moldura que parte la pared */
    /* los centros de las dos siluetas se leen de los propios puntos:
       si un día se mueven, la consulta se mueve con ellas */
    const busca = (nom, alt) => { const p = (e.pois || []).find(q => q.name && q.name.es === nom); return p ? p.x : alt; };
    const CO = busca("El cerebro", 560);   /* cuerpo de los órganos */
    const CH = busca("El cráneo", 1480);   /* cuerpo de los huesos */
    let s = "";

    /* ---------- degradados propios (prefijo cgr) ---------- */
    s += `<defs>
      <linearGradient id="cgrPared" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#fff8f0"/><stop offset="58%" stop-color="#ffefe0"/><stop offset="100%" stop-color="#fbe6d2"/></linearGradient>
      <radialGradient id="cgrLuz" cx="42%" cy="12%" r="78%">
        <stop offset="0%" stop-color="rgba(255,255,255,.8)"/><stop offset="100%" stop-color="rgba(255,255,255,0)"/></radialGradient>
      <linearGradient id="cgrZocalo" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#fcdfc6"/><stop offset="100%" stop-color="#f2c9a8"/></linearGradient>
      <linearGradient id="cgrSuelo" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#eecda8"/><stop offset="100%" stop-color="#d8a97c"/></linearGradient>
      <linearGradient id="cgrMadera" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#cf9463"/><stop offset="50%" stop-color="#bb7f4f"/><stop offset="100%" stop-color="#a56a3c"/></linearGradient>
      <linearGradient id="cgrRx" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#2e5d7e"/><stop offset="52%" stop-color="#17405e"/><stop offset="100%" stop-color="#0e2c44"/></linearGradient>
      <radialGradient id="cgrRxLuz" cx="50%" cy="44%" r="64%">
        <stop offset="0%" stop-color="rgba(186,232,255,.5)"/><stop offset="100%" stop-color="rgba(186,232,255,0)"/></radialGradient>
      <radialGradient id="cgrArco" cx="50%" cy="26%" r="76%">
        <stop offset="0%" stop-color="rgba(255,222,200,.9)"/><stop offset="100%" stop-color="rgba(255,198,172,.35)"/></radialGradient>
      <linearGradient id="cgrVidrio" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="rgba(255,255,255,.8)"/><stop offset="45%" stop-color="rgba(255,255,255,.32)"/><stop offset="100%" stop-color="rgba(255,255,255,.6)"/></linearGradient>
      <linearGradient id="cgrMetal" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#eef2f4"/><stop offset="50%" stop-color="#cfd8dc"/><stop offset="100%" stop-color="#adbac1"/></linearGradient>
      <linearGradient id="cgrColcha" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#ffd9e0"/><stop offset="100%" stop-color="#f5adbc"/></linearGradient>
      <clipPath id="cgrRecorteRx"><rect x="${CH - 314}" y="82" width="628" height="914" rx="20"/></clipPath>
    </defs>`;

    /* ---------- LA PARED ---------- */
    s += `<rect x="0" y="0" width="${W}" height="${SUELO}" fill="url(#cgrPared)"/>
      <rect x="0" y="0" width="${W}" height="${RIEL}" fill="url(#cgrLuz)" opacity=".55"/>
      <rect x="0" y="${RIEL + 16}" width="${W}" height="${SUELO - RIEL - 16}" fill="url(#cgrZocalo)"/>
      <rect x="0" y="${RIEL}" width="${W}" height="16" rx="6" fill="#eec4a2"/>
      <rect x="0" y="${RIEL + 3}" width="${W}" height="4" fill="rgba(255,255,255,.65)"/>`;

    /* un arco pintado en la pared, detrás del cuerpo de los órganos */
    s += `<path d="M${CO - 330} ${SUELO} L${CO - 330} 320 Q${CO - 330} 16 ${CO} 16 Q${CO + 330} 16 ${CO + 330} 320 L${CO + 330} ${SUELO} Z" fill="url(#cgrArco)"/>
      <path d="M${CO - 330} ${SUELO} L${CO - 330} 320 Q${CO - 330} 16 ${CO} 16 Q${CO + 330} 16 ${CO + 330} 320 L${CO + 330} ${SUELO}" fill="none" stroke="rgba(255,255,255,.7)" stroke-width="8"/>`;

    /* ---------- LA CENEFA de la pared, justo encima de la moldura ---------- */
    s += `<rect x="0" y="614" width="${W}" height="70" fill="rgba(255,255,255,.5)"/>
      <rect x="0" y="614" width="${W}" height="5" fill="#f3bf9c"/>
      <rect x="0" y="679" width="${W}" height="5" fill="#f3bf9c"/>`;
    for (let x = 34, i = 0; x < W - 10; x += 92, i++) {
      if (!libre(x - 18, 628, 36, 42)) continue;
      const c = ["#ef9aa8", "#8fc9d8", "#f7c765", "#a8d6a0"][i % 4];
      if (i % 4 === 0) {
        s += `<path d="M${x} ${657} l-14 -14 a10 10 0 0 1 14 -13 a10 10 0 0 1 14 13 Z" fill="${c}"/>`;
      } else if (i % 4 === 1) {
        s += `<path d="M${x - 5} 633 h10 v11 h11 v10 h-11 v11 h-10 v-11 h-11 v-10 h11 Z" fill="${c}"/>`;
      } else if (i % 4 === 2) {
        s += `<circle cx="${x}" cy="650" r="11" fill="none" stroke="${c}" stroke-width="5"/>`;
      } else {
        s += `<path d="M${x} 633 q13 15 13 24 a13 13 0 0 1 -26 0 q0 -9 13 -24 Z" fill="${c}"/>`;
      }
    }

    /* ---------- EL PANEL DE RAYOS X, detrás del esqueleto ---------- */
    s += `<rect x="${CH - 190}" y="42" width="380" height="16" rx="8" fill="#b9c6cd"/>
      <rect x="${CH - 170}" y="56" width="12" height="34" rx="6" fill="#c6d1d7"/>
      <rect x="${CH + 158}" y="56" width="12" height="34" rx="6" fill="#c6d1d7"/>
      <rect x="${CH - 350}" y="62" width="700" height="954" rx="30" fill="url(#cgrMetal)"/>
      <rect x="${CH - 340}" y="72" width="680" height="934" rx="26" fill="#8ea3b0"/>
      <rect x="${CH - 314}" y="82" width="628" height="914" rx="20" fill="url(#cgrRx)"/>
      <rect x="${CH - 314}" y="82" width="628" height="914" rx="20" fill="url(#cgrRxLuz)"/>`;
    /* la cuadrícula tenue de la placa */
    for (let y = 156; y < 990; y += 108) s += `<line x1="${CH - 310}" y1="${y}" x2="${CH + 310}" y2="${y}" stroke="rgba(255,255,255,.07)" stroke-width="2"/>`;
    for (let x = CH - 240; x < CH + 300; x += 108) s += `<line x1="${x}" y1="86" x2="${x}" y2="992" stroke="rgba(255,255,255,.07)" stroke-width="2"/>`;
    /* el brillo que recorre la placa despacio */
    s += `<g clip-path="url(#cgrRecorteRx)"><rect x="${CH - 340}" y="82" width="130" height="914" fill="rgba(200,240,255,.1)">
      <animateTransform attributeName="transform" type="translate" values="0 0;700 0;0 0" dur="16s" repeatCount="indefinite"/></rect></g>`;
    /* pinzas de las cuatro esquinas y el pilotito de encendido */
    [[CH - 268, 118], [CH + 268, 118], [CH - 268, 962], [CH + 268, 962]].forEach(p => {
      s += `<g><rect x="${p[0] - 19}" y="${p[1] - 10}" width="38" height="20" rx="9" fill="#dfe6ea"/>
        <rect x="${p[0] - 12}" y="${p[1] - 4}" width="24" height="9" rx="4" fill="#aab8c0"/></g>`;
    });
    s += `<circle cx="${CH + 336}" cy="88" r="10" fill="#9be08a"><animate attributeName="opacity" values="1;.35;1" dur="3.4s" repeatCount="indefinite"/></circle>`;

    /* ---------- LA GRÁFICA DE LATIDO, cruzando el fondo ---------- */
    let ecg = "M0 786";
    for (let x = 0; x < W; x += 196) ecg += ` H${x + 96} l15 -8 l10 32 l14 -70 l14 92 l12 -46 l15 0`;
    ecg += ` H${W}`;
    s += `<path d="${ecg}" fill="none" stroke="rgba(240,130,140,.42)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="${ecg}" fill="none" stroke="rgba(255,255,255,.72)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="160 4600">
      <animate attributeName="stroke-dashoffset" values="0;-4760" dur="30s" repeatCount="indefinite"/></path>`;

    /* ---------- EL SUELO ---------- */
    s += `<rect x="0" y="${SUELO}" width="${W}" height="${1100 - SUELO}" fill="url(#cgrSuelo)"/>
      <rect x="0" y="${SUELO - 8}" width="${W}" height="24" rx="6" fill="#e9bd97"/>
      <rect x="0" y="${SUELO - 6}" width="${W}" height="5" fill="rgba(255,255,255,.6)"/>`;
    for (let x = 40; x < W + 100; x += 152) s += `<line x1="${x}" y1="${SUELO}" x2="${x - 36}" y2="1100" stroke="rgba(150,96,54,.22)" stroke-width="3"/>`;
    s += `<line x1="0" y1="1064" x2="${W}" y2="1064" stroke="rgba(150,96,54,.18)" stroke-width="3"/>`;

    /* ---------- LAS TARIMAS, una debajo de cada silueta ---------- */
    const tarima = (x0, x1, c1, c2) => `<g>
      <ellipse cx="${(x0 + x1) / 2}" cy="1094" rx="${(x1 - x0) / 2 + 16}" ry="13" fill="rgba(120,72,38,.22)"/>
      <rect x="${x0}" y="1078" width="${x1 - x0}" height="22" rx="9" fill="url(#cgrMadera)"/>
      <rect x="${x0 - 10}" y="1058" width="${x1 - x0 + 20}" height="24" rx="12" fill="${c1}"/>
      <rect x="${x0 - 10}" y="1060" width="${x1 - x0 + 20}" height="7" rx="3.5" fill="${c2}"/>
      ${[0, 1, 2, 3, 4, 5, 6].map(i => `<line x1="${x0 + 34 + i * (x1 - x0 - 68) / 6}" y1="1082" x2="${x0 + 34 + i * (x1 - x0 - 68) / 6}" y2="1098" stroke="rgba(120,72,38,.35)" stroke-width="3"/>`).join("")}</g>`;
    s += tarima(CO - 330, CO + 330, "url(#cgrColcha)", "rgba(255,255,255,.6)");
    s += tarima(CH - 330, CH + 330, "#bfe2ef", "rgba(255,255,255,.6)");

    /* ---------- EL METRO DE PARED, entre las dos siluetas ----------
       baja hasta el rodapié: un metro de pared empieza en el suelo */
    const MX = 944;
    s += `<rect x="${MX}" y="286" width="52" height="${SUELO - 286}" rx="12" fill="#f7ecdc" stroke="#e0c7a8" stroke-width="4"/>
      <rect x="${MX}" y="286" width="16" height="${SUELO - 286}" fill="rgba(255,255,255,.55)"/>`;
    for (let y = 300, i = 0; y <= SUELO - 8; y += 40, i++) {
      const largo = i % 4 === 0 ? 34 : 18;
      s += `<line x1="${MX + 16}" y1="${y}" x2="${MX + 16 + largo}" y2="${y}" stroke="${i % 4 === 0 ? "#c98a5e" : "#dcb894"}" stroke-width="${i % 4 === 0 ? 4 : 3}"/>`;
    }
    [["#8fc9d8", 300, 520], ["#f7c765", 520, 760], ["#ef9aa8", 760, SUELO - 8]].forEach(t => {
      s += `<rect x="${MX + 1}" y="${t[1]}" width="8" height="${t[2] - t[1]}" rx="4" fill="${t[0]}" opacity=".85"/>`;
    });
    /* la flechita que marca la altura */
    s += `<g><path d="M${MX + 62} 520 l-22 -15 v30 Z" fill="#ef7a8c"/>
      <rect x="${MX + 60}" y="507" width="38" height="26" rx="9" fill="#ef7a8c"/>
      <rect x="${MX + 67}" y="516" width="24" height="5" rx="2.5" fill="rgba(255,255,255,.85)"/>
      <animateTransform attributeName="transform" type="translate" values="0 0;0 -16;0 0" dur="7s" repeatCount="indefinite"/></g>`;

    /* ---------- EL CARTEL DEL ARCOÍRIS y EL FONENDO, en la franja libre ---------- */
    s += `<g><rect x="1016" y="300" width="112" height="176" rx="11" fill="#c9955f"/>
      <rect x="1025" y="309" width="94" height="158" rx="7" fill="#fffaf2"/>
      ${[["#ef9aa8", 46], ["#f7c765", 35], ["#a8d6a0", 24], ["#8fc9d8", 13]].map(a =>
      `<path d="M${1072 - a[1]} 442 a${a[1]} ${a[1]} 0 0 1 ${a[1] * 2} 0" fill="none" stroke="${a[0]}" stroke-width="10"/>`).join("")}
      <circle cx="1048" cy="342" r="15" fill="#f7c765"/>
      <path d="M1084 346 q17 -13 32 0 q-15 9 -32 0 Z" fill="#dbeaf4"/>
      <rect x="1030" y="442" width="84" height="9" rx="4" fill="#a8d6a0"/></g>`;
    s += `<g><rect x="1065" y="500" width="15" height="13" rx="5" fill="#c9955f"/>
      <circle cx="1072" cy="502" r="8" fill="#b3763f"/>
      <path d="M1056 520 q-22 42 -10 68 q8 18 24 20" stroke="#5b8fa8" stroke-width="10" fill="none" stroke-linecap="round"/>
      <path d="M1088 520 q22 42 10 68 q-8 18 -24 20" stroke="#5b8fa8" stroke-width="10" fill="none" stroke-linecap="round"/>
      <circle cx="1056" cy="518" r="7" fill="#78909c"/><circle cx="1088" cy="518" r="7" fill="#78909c"/>
      <circle cx="1072" cy="600" r="19" fill="url(#cgrMetal)" stroke="#9fb0b8" stroke-width="4"/>
      <circle cx="1072" cy="600" r="10" fill="#f2f5f6"/></g>`;

    /* ---------- LA BÁSCULA de columna ---------- */
    const BX = 1902, BY = 770;   /* la esfera, a la altura de la barriga */
    s += `<g>
      <ellipse cx="${BX}" cy="1016" rx="76" ry="13" fill="rgba(120,72,38,.18)"/>
      <rect x="${BX - 62}" y="964" width="124" height="38" rx="13" fill="url(#cgrMetal)"/>
      <rect x="${BX - 54}" y="971" width="108" height="13" rx="6" fill="#f2f5f6"/>
      <rect x="${BX - 9}" y="${BY + 32}" width="18" height="${968 - BY - 32}" rx="9" fill="#c3ced4"/>
      <circle cx="${BX}" cy="${BY}" r="50" fill="#f4f7f8" stroke="#b3c0c7" stroke-width="8"/>
      <circle cx="${BX}" cy="${BY}" r="36" fill="#fffdf8"/>
      ${[0, 1, 2, 3, 4, 5, 6, 7].map(i => {
      const a = (-90 + i * 34) * Math.PI / 180;
      return `<line x1="${n(BX + 26 * Math.cos(a))}" y1="${n(BY + 26 * Math.sin(a))}" x2="${n(BX + 35 * Math.cos(a))}" y2="${n(BY + 35 * Math.sin(a))}" stroke="#9fb0b8" stroke-width="3"/>`;
    }).join("")}
      <g><line x1="${BX}" y1="${BY}" x2="${BX}" y2="${BY - 29}" stroke="#ef5350" stroke-width="4" stroke-linecap="round">
        <animateTransform attributeName="transform" type="rotate" values="-16 ${BX} ${BY};14 ${BX} ${BY};-16 ${BX} ${BY}" dur="8s" repeatCount="indefinite"/></line></g>
      <circle cx="${BX}" cy="${BY}" r="6" fill="#78909c"/></g>`;

    /* ---------- FRASCOS Y LIBROS, que se usan en los muebles ---------- */
    const frasco = (x, base, w, h, c, tapa) => `<g>
      <rect x="${x}" y="${base - h}" width="${w}" height="${h}" rx="${Math.min(9, w / 3)}" fill="rgba(255,255,255,.55)" stroke="#d8c6b2" stroke-width="2"/>
      <rect x="${x + 2}" y="${base - h * 0.62}" width="${w - 4}" height="${h * 0.62 - 3}" rx="${Math.min(7, w / 3)}" fill="${c}" opacity=".8"/>
      <rect x="${x}" y="${base - h}" width="${w}" height="${h}" rx="${Math.min(9, w / 3)}" fill="url(#cgrVidrio)" opacity=".45"/>
      <rect x="${x - 3}" y="${base - h - 10}" width="${w + 6}" height="12" rx="5" fill="${tapa}"/></g>`;
    const libro = (x, base, w, h, c) => `<g>
      <rect x="${x}" y="${base - h}" width="${w}" height="${h}" rx="3" fill="${c}"/>
      <rect x="${x + w - 5}" y="${base - h}" width="5" height="${h}" rx="2" fill="rgba(255,255,255,.35)"/>
      <rect x="${x + 3}" y="${base - h + 9}" width="${w - 11}" height="4" rx="2" fill="rgba(255,255,255,.55)"/></g>`;

    /* ---------- LA ESTANTERÍA ALTA de la izquierda ---------- */
    s += `<g><rect x="4" y="470" width="180" height="${SUELO - 470}" rx="14" fill="url(#cgrMadera)"/>
      <rect x="14" y="480" width="160" height="${SUELO - 490}" rx="9" fill="#e8cfae"/>`;
    [592, 704, 816, 928].forEach((y, i) => {
      s += `<rect x="10" y="${y}" width="168" height="13" rx="6" fill="#b3763f"/>`;
      if (i % 2 === 0) {
        s += libro(24, y, 17, 68, "#e0705f") + libro(43, y, 15, 58, "#5fa8c4") + libro(60, y, 18, 74, "#f0b64c") + libro(80, y, 14, 54, "#7fb56b");
        s += frasco(108, y, 27, 44, "#f2a0b0", "#c98a5e") + frasco(142, y, 19, 33, "#9ed6e6", "#c98a5e");
      } else {
        s += frasco(24, y, 29, 50, "#a7d8a0", "#b3763f") + frasco(60, y, 22, 39, "#f5c96a", "#b3763f");
        s += libro(92, y, 16, 64, "#8f7bc4") + libro(110, y, 19, 50, "#e08a5f") + libro(131, y, 15, 70, "#5fa8c4");
      }
    });
    /* burbujitas dentro de dos frascos */
    s += `<circle cx="120" cy="570" r="4.5" fill="rgba(255,255,255,.75)"><animate attributeName="cy" values="570;552;570" dur="5s" repeatCount="indefinite"/></circle>
      <circle cx="36" cy="686" r="5" fill="rgba(255,255,255,.7)"><animate attributeName="cy" values="686;666;686" dur="6.4s" repeatCount="indefinite"/></circle>`;
    /* la cesta del hueco de abajo, para que el mueble no acabe en vacío */
    s += `<path d="M26 946 h136 l-13 66 q-2 8 -14 8 h-82 q-12 0 -14 -8 Z" fill="#d9a441"/>
      <rect x="18" y="936" width="152" height="16" rx="7" fill="#c68f34"/>
      <path d="M50 952 v62 M78 952 v62 M106 952 v62 M134 952 v62" stroke="rgba(255,255,255,.32)" stroke-width="4"/>
      <circle cx="56" cy="938" r="15" fill="#8fc9d8"/><circle cx="92" cy="934" r="14" fill="#ef9aa8"/><circle cx="126" cy="939" r="13" fill="#a8d6a0"/></g>`;

    /* ---------- LA VITRINA DE LOS SISTEMAS ----------
       la sangre, la piel y el ADN descansan cada uno en su balda */
    const VX0 = 2012, VX1 = 2494, VY0 = 232, VY1 = 700, VAN = VX1 - VX0;
    s += `<g><rect x="${VX0}" y="${VY0}" width="${VAN}" height="${VY1 - VY0}" rx="18" fill="url(#cgrMadera)"/>
      <rect x="${VX0 + 15}" y="${VY0 + 15}" width="${VAN - 30}" height="${VY1 - VY0 - 30}" rx="11" fill="#f7e6d0"/>
      <rect x="${VX0 + 15}" y="${VY0 + 15}" width="${VAN - 30}" height="${VY1 - VY0 - 30}" rx="11" fill="url(#cgrLuz)" opacity=".45"/>
      <rect x="${VX0 - 12}" y="${VY0 - 16}" width="${VAN + 24}" height="22" rx="10" fill="#b3763f"/>
      <rect x="${VX0 - 12}" y="${VY0 - 12}" width="${VAN + 24}" height="6" rx="3" fill="rgba(255,255,255,.45)"/>`;
    [418, 618].forEach(y => {
      s += `<rect x="${VX0 + 15}" y="${y}" width="${VAN - 30}" height="16" rx="6" fill="#b3763f"/>
        <rect x="${VX0 + 15}" y="${y + 2}" width="${VAN - 30}" height="4" rx="2" fill="rgba(255,255,255,.5)"/>`;
    });
    /* lo que descansa en las baldas, siempre en los huecos que dejan los puntos */
    s += frasco(2158, 418, 28, 48, "#f5c96a", "#c98a5e") + frasco(2194, 418, 22, 36, "#9ed6e6", "#c98a5e");
    s += libro(2232, 418, 17, 62, "#7fb56b") + libro(2251, 418, 14, 48, "#e0705f");
    s += `<g><rect x="2410" y="372" width="74" height="46" rx="8" fill="#f2a0b0"/>
      <rect x="2410" y="372" width="74" height="11" rx="5" fill="#e0819a"/>
      <rect x="2438" y="389" width="17" height="6" rx="3" fill="#fffaf2"/>
      <rect x="2443" y="384" width="6" height="17" rx="3" fill="#fffaf2"/></g>`;
    s += libro(2032, 618, 16, 56, "#5fa8c4") + libro(2050, 618, 14, 46, "#e0705f") + libro(2066, 618, 18, 62, "#f0b64c");
    s += frasco(2100, 618, 27, 46, "#a7d8a0", "#c98a5e");
    s += `<g><circle cx="2350" cy="580" r="28" fill="rgba(255,255,255,.55)" stroke="#c98a5e" stroke-width="5"/>
      <circle cx="2342" cy="572" r="10" fill="rgba(255,255,255,.6)"/>
      <rect x="2366" y="598" width="13" height="26" rx="6" fill="#b3763f" transform="rotate(-38 2372 611)"/></g>`;
    s += `<circle cx="2422" cy="596" r="16" fill="#fffaf2"/><circle cx="2444" cy="602" r="12" fill="#f7efe2"/>
      <circle cx="2417" cy="590" r="5" fill="rgba(255,255,255,.9)"/>`;
    s += `<circle cx="2172" cy="384" r="4" fill="rgba(255,255,255,.75)"><animate attributeName="cy" values="384;368;384" dur="5.6s" repeatCount="indefinite"/></circle></g>`;

    /* ---------- LA BALDA BAJA de la derecha ---------- */
    s += `<g>`;
    [846, 962].forEach((y, i) => {
      s += `<rect x="${VX0 + 20}" y="${y}" width="${VAN - 40}" height="15" rx="6" fill="url(#cgrMadera)"/>
        <path d="M${VX0 + 40} ${y + 15} l17 28 M${VX1 - 40} ${y + 15} l-17 28" stroke="#a56a3c" stroke-width="7" stroke-linecap="round"/>`;
      if (i === 0) {
        s += frasco(VX0 + 40, y, 29, 54, "#f2a0b0", "#c98a5e") + frasco(VX0 + 78, y, 23, 42, "#9ed6e6", "#c98a5e") + frasco(VX0 + 110, y, 19, 33, "#a7d8a0", "#c98a5e");
        s += libro(VX0 + 150, y, 17, 62, "#e0705f") + libro(VX0 + 169, y, 14, 50, "#5fa8c4") + libro(VX0 + 185, y, 19, 68, "#f0b64c") + libro(VX0 + 206, y, 15, 54, "#8f7bc4");
        s += `<path d="M${VX0 + 270} ${y} q-19 -11 -15 -32 q19 4 21 32 Z" fill="#7fb56b"/><path d="M${VX0 + 270} ${y} q19 -15 36 -11 q-11 19 -36 11 Z" fill="#9ccb84"/>`;
      } else {
        s += libro(VX0 + 40, y, 16, 58, "#7fb56b") + libro(VX0 + 58, y, 13, 46, "#e08a5f") + libro(VX0 + 73, y, 18, 64, "#5fa8c4");
        s += frasco(VX0 + 110, y, 31, 46, "#f5c96a", "#b3763f") + frasco(VX0 + 150, y, 25, 36, "#f2a0b0", "#b3763f");
        s += `<g><rect x="${VX0 + 210}" y="${y - 44}" width="82" height="44" rx="9" fill="#fdf6ea" stroke="#e0c7a8" stroke-width="3"/>
          <path d="M${VX0 + 224} ${y - 13} q15 -21 28 -7 q11 -15 26 0" stroke="#8fc9d8" stroke-width="5" fill="none" stroke-linecap="round"/>
          <circle cx="${VX0 + 228}" cy="${y - 29}" r="7" fill="#f7c765"/></g>`;
      }
    });
    s += `</g>`;

    /* ---------- LA PLANTA de la esquina ---------- */
    s += `<g>
      <ellipse cx="2530" cy="1006" rx="72" ry="15" fill="rgba(120,72,38,.2)"/>
      <path d="M2480 908 h100 l-13 98 q-2 13 -17 13 h-40 q-15 0 -17 -13 Z" fill="#d4795c"/>
      <rect x="2474" y="895" width="112" height="22" rx="10" fill="#e08a6a"/>
      <rect x="2474" y="899" width="112" height="7" fill="rgba(255,255,255,.4)"/>
      <g><animateTransform attributeName="transform" type="rotate" values="-1.6 2530 902;1.6 2530 902;-1.6 2530 902" dur="9s" repeatCount="indefinite"/>
        <path d="M2530 898 q-7 -76 -50 -120" stroke="#4e8a45" stroke-width="9" fill="none" stroke-linecap="round"/>
        <path d="M2530 898 q5 -92 37 -140" stroke="#4e8a45" stroke-width="9" fill="none" stroke-linecap="round"/>
        <path d="M2530 898 q-2 -54 13 -92" stroke="#4e8a45" stroke-width="8" fill="none" stroke-linecap="round"/>
        <path d="M2480 778 q-46 -15 -39 -57 q44 2 52 46 Z" fill="#5da33f"/>
        <path d="M2484 789 q-50 13 -65 -20 q37 -22 68 7 Z" fill="#6fb84c"/>
        <path d="M2567 758 q37 -33 22 -72 q-42 17 -37 63 Z" fill="#5da33f"/>
        <path d="M2571 771 q50 -7 57 -44 q-44 -11 -63 28 Z" fill="#6fb84c"/>
        <path d="M2543 806 q-9 -50 24 -72 q15 44 -13 74 Z" fill="#7cc457"/>
        <path d="M2530 825 q-37 -24 -28 -61 q35 15 35 59 Z" fill="#6fb84c"/></g>
      <circle cx="2494" cy="938" r="10" fill="rgba(255,255,255,.35)"/></g>`;

    /* ---------- CUADROS Y RELOJ en las paredes que quedan libres ---------- */
    const cuadro = (x, y, dibujo) => `<g>
      <rect x="${x}" y="${y}" width="140" height="114" rx="11" fill="#c9955f"/>
      <rect x="${x + 9}" y="${y + 9}" width="122" height="96" rx="7" fill="#fffaf2"/>
      ${dibujo}</g>`;
    s += cuadro(30, 250, `<circle cx="${30 + 48}" cy="${250 + 44}" r="19" fill="#f7c765"/>
      <path d="M${30 + 16} ${250 + 92} q28 -37 59 -9 q17 15 48 9 Z" fill="#a8d6a0"/>
      <path d="M${30 + 80} ${250 + 33} q15 -11 28 0 q11 -9 15 7 q-26 7 -43 -7 Z" fill="#dbeaf4"/>`);
    s += cuadro(1836, 220, `<path d="M${1836 + 70} ${220 + 82} v-33" stroke="#7fb56b" stroke-width="6" stroke-linecap="round"/>
      ${[0, 72, 144, 216].map(a => `<ellipse cx="${n(1836 + 70 + 19 * Math.cos(a * Math.PI / 180))}" cy="${n(220 + 44 + 19 * Math.sin(a * Math.PI / 180))}" rx="12" ry="10" fill="#ef9aa8"/>`).join("")}
      <circle cx="${1836 + 70}" cy="${220 + 44}" r="10" fill="#f7c765"/>`);
    /* el reloj de pared, encima de la estantería */
    s += `<g><circle cx="94" cy="150" r="62" fill="#fdf6ea" stroke="#c9955f" stroke-width="9"/>
      <circle cx="94" cy="150" r="48" fill="#fffdf8"/>
      ${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(i => {
      const a = (i * 30 - 90) * Math.PI / 180;
      return `<line x1="${n(94 + 38 * Math.cos(a))}" y1="${n(150 + 38 * Math.sin(a))}" x2="${n(94 + 45 * Math.cos(a))}" y2="${n(150 + 45 * Math.sin(a))}" stroke="#c9955f" stroke-width="${i % 3 === 0 ? 5 : 3}"/>`;
    }).join("")}
      <line x1="94" y1="150" x2="94" y2="118" stroke="#5b8fa8" stroke-width="6" stroke-linecap="round"/>
      <line x1="94" y1="150" x2="120" y2="150" stroke="#ef7a8c" stroke-width="5" stroke-linecap="round">
        <animateTransform attributeName="transform" type="rotate" values="0 94 150;360 94 150" dur="60s" repeatCount="indefinite"/></line>
      <circle cx="94" cy="150" r="6" fill="#78909c"/></g>`;

    /* ---------- LA GUIRNALDA de banderines, en el alto de la derecha ---------- */
    s += `<path d="M1830 96 Q2210 148 2586 92" fill="none" stroke="#c9955f" stroke-width="5"/>`;
    for (let i = 0; i < 9; i++) {
      const t = i / 8, x = 1830 + t * 756;
      const y = 96 + 52 * (4 * t * (1 - t)) - 4;
      const c = ["#ef9aa8", "#8fc9d8", "#f7c765", "#a8d6a0"][i % 4];
      s += `<path d="M${n(x - 21)} ${n(y)} L${n(x + 21)} ${n(y)} L${n(x)} ${n(y + 46)} Z" fill="${c}"/>`;
    }

    /* ---------- DETALLES SUELTOS: un taburete y una pelota ---------- */
    s += `<g><ellipse cx="1740" cy="1052" rx="56" ry="13" fill="rgba(120,72,38,.18)"/>
      <ellipse cx="1740" cy="994" rx="50" ry="17" fill="#8fc9d8"/>
      <rect x="1690" y="994" width="100" height="17" rx="8" fill="#79b6c6"/>
      <rect x="1731" y="1008" width="18" height="42" rx="8" fill="#b0bec5"/>
      <path d="M1708 1052 h64" stroke="#b0bec5" stroke-width="9" stroke-linecap="round"/>
      <path d="M1740 1050 l-30 -13 M1740 1050 l30 -13" stroke="#b0bec5" stroke-width="8" stroke-linecap="round"/></g>`;
    s += `<g><circle cx="2010" cy="1058" r="33" fill="#f7c765"/>
      <path d="M1977 1058 a33 33 0 0 0 66 0 Z" fill="#ef9aa8"/>
      <circle cx="2010" cy="1058" r="33" fill="none" stroke="rgba(255,255,255,.6)" stroke-width="5"/>
      <circle cx="1999" cy="1045" r="8" fill="rgba(255,255,255,.55)"/></g>`;

    /* las siluetas mandan: se pintan encima de toda la consulta */
    return decoSvg(compacta(s) + dentro(siluetas.call(this, e)), W);
  };
})();
