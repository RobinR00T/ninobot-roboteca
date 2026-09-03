"use strict";
/* ============================================================
   Escenografía nueva para dos mapas de Explorar:
   CUERPO HUMANO (una consulta de pediatra, cálida)
   y MÚSICA (un gran teatro con su telón y su orquesta).

   No tocamos la deco original de estos temas: la envolvemos.
   Lo nuevo se pinta DETRÁS y lo de siempre queda DELANTE,
   así las dos siluetas del cuerpo y el escenario de música
   siguen mandando. Siempre devolvemos UN SOLO <svg>.
   ============================================================ */

(function () {

  /* ---------- utilidades comunes ---------- */

  /* nos quedamos con el interior del svg original para recomponer uno solo */
  const dentro = (svg) => String(svg || "")
    .replace(/^[\s\S]*?<svg[^>]*>/, "")
    .replace(/<\/svg>\s*$/, "");

  /* cajas de los puntos de interés: para no plantar nada justo debajo.
     k = cuánto crecen los iconos en pantalla; m = aire alrededor;
     los 30 de más por abajo son la etiqueta con el nombre. */
  const cajas = (e, k, m) => (e.pois || []).map(p => {
    const w = (p.iw || 80) * k, h = (p.ih || 80) * k;
    return [p.x - w / 2 - m, p.y - h / 2 - m, w + 2 * m, h + 2 * m + 30];
  });
  const libreCon = (cs) => (x, y, w, h) =>
    !cs.some(c => x < c[0] + c[2] && x + w > c[0] && y < c[1] + c[3] && y + h > c[1]);

  /* números cortos: el svg pesa menos y se lee mejor */
  const n = (v) => (Math.round(v * 10) / 10);

  /* el sangrado de las plantillas no pinta nada: fuera del svg final */
  const compacta = (t) => t.replace(/\n\s*/g, " ");

  /* ============================================================
     CUERPO HUMANO: la consulta del pediatra.
     Lienzo 1500 x 1100. Pared con cenefa, panel de rayos X
     detrás del esqueleto, tarimas, báscula, metro de pared,
     estanterías con frascos y libros, planta y suelo.
     ============================================================ */
  (function () {
    const orig = THEMES.cuerpo.content.explore.deco;

    THEMES.cuerpo.content.explore.deco = function (e) {
      const W = e.width || 1500;
      const libre = libreCon(cajas(e, 1.15, 14));
      const SUELO = 1026;      /* donde empieza el suelo */
      const RIEL = 700;        /* la moldura que parte la pared */
      let s = "";

      /* ---------- degradados propios (prefijo cpo) ---------- */
      s += `<defs>
        <linearGradient id="cpoPared" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fff8f0"/><stop offset="58%" stop-color="#ffefe0"/><stop offset="100%" stop-color="#fbe6d2"/></linearGradient>
        <radialGradient id="cpoLuz" cx="42%" cy="12%" r="78%">
          <stop offset="0%" stop-color="rgba(255,255,255,.8)"/><stop offset="100%" stop-color="rgba(255,255,255,0)"/></radialGradient>
        <linearGradient id="cpoZocalo" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fcdfc6"/><stop offset="100%" stop-color="#f2c9a8"/></linearGradient>
        <linearGradient id="cpoSuelo" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#eecda8"/><stop offset="100%" stop-color="#d8a97c"/></linearGradient>
        <linearGradient id="cpoMadera" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#cf9463"/><stop offset="50%" stop-color="#bb7f4f"/><stop offset="100%" stop-color="#a56a3c"/></linearGradient>
        <linearGradient id="cpoRx" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#2e5d7e"/><stop offset="52%" stop-color="#17405e"/><stop offset="100%" stop-color="#0e2c44"/></linearGradient>
        <radialGradient id="cpoRxLuz" cx="50%" cy="44%" r="64%">
          <stop offset="0%" stop-color="rgba(186,232,255,.5)"/><stop offset="100%" stop-color="rgba(186,232,255,0)"/></radialGradient>
        <radialGradient id="cpoArco" cx="50%" cy="30%" r="74%">
          <stop offset="0%" stop-color="rgba(255,222,200,.9)"/><stop offset="100%" stop-color="rgba(255,198,172,.35)"/></radialGradient>
        <linearGradient id="cpoVidrio" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="rgba(255,255,255,.8)"/><stop offset="45%" stop-color="rgba(255,255,255,.32)"/><stop offset="100%" stop-color="rgba(255,255,255,.6)"/></linearGradient>
        <linearGradient id="cpoMetal" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#eef2f4"/><stop offset="50%" stop-color="#cfd8dc"/><stop offset="100%" stop-color="#adbac1"/></linearGradient>
        <linearGradient id="cpoColcha" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffd9e0"/><stop offset="100%" stop-color="#f5adbc"/></linearGradient>
        <clipPath id="cpoRecorteRx"><rect x="630" y="106" width="362" height="888" rx="18"/></clipPath>
      </defs>`;

      /* ---------- LA PARED ---------- */
      s += `<rect x="0" y="0" width="${W}" height="${SUELO}" fill="url(#cpoPared)"/>
        <rect x="0" y="0" width="${W}" height="${RIEL}" fill="url(#cpoLuz)" opacity=".55"/>
        <rect x="0" y="${RIEL + 16}" width="${W}" height="${SUELO - RIEL - 16}" fill="url(#cpoZocalo)"/>
        <rect x="0" y="${RIEL}" width="${W}" height="16" rx="6" fill="#eec4a2"/>
        <rect x="0" y="${RIEL + 3}" width="${W}" height="4" fill="rgba(255,255,255,.65)"/>`;

      /* un arco pintado en la pared, detrás del cuerpo de los órganos */
      s += `<path d="M118 ${SUELO} L118 396 Q118 176 330 176 Q542 176 542 396 L542 ${SUELO} Z" fill="url(#cpoArco)"/>
        <path d="M118 ${SUELO} L118 396 Q118 176 330 176 Q542 176 542 396 L542 ${SUELO}" fill="none" stroke="rgba(255,255,255,.7)" stroke-width="7"/>`;
      /* rayitos suaves dentro del arco, como un solecito de guardería */
      for (let i = 0; i < 7; i++) {
        const a = (-90 + (i - 3) * 19) * Math.PI / 180;
        s += `<path d="M${n(330 + 96 * Math.cos(a))} ${n(400 + 96 * Math.sin(a))} L${n(330 + 178 * Math.cos(a))} ${n(400 + 178 * Math.sin(a))}" stroke="rgba(255,255,255,.4)" stroke-width="9" stroke-linecap="round"/>`;
      }

      /* ---------- LA CENEFA de la pared, justo encima de la moldura ---------- */
      s += `<rect x="0" y="618" width="${W}" height="66" fill="rgba(255,255,255,.5)"/>
        <rect x="0" y="618" width="${W}" height="5" fill="#f3bf9c"/>
        <rect x="0" y="679" width="${W}" height="5" fill="#f3bf9c"/>`;
      for (let x = 30, i = 0; x < W - 10; x += 84, i++) {
        if (!libre(x - 16, 632, 32, 38)) continue;
        const c = ["#ef9aa8", "#8fc9d8", "#f7c765", "#a8d6a0"][i % 4];
        if (i % 4 === 0) {
          s += `<path d="M${x} ${657} l-13 -13 a9 9 0 0 1 13 -12 a9 9 0 0 1 13 12 Z" fill="${c}"/>`;
        } else if (i % 4 === 1) {
          s += `<path d="M${x - 5} 636 h10 v10 h10 v10 h-10 v10 h-10 v-10 h-10 v-10 h10 Z" fill="${c}"/>`;
        } else if (i % 4 === 2) {
          s += `<circle cx="${x}" cy="651" r="10" fill="none" stroke="${c}" stroke-width="5"/>`;
        } else {
          s += `<path d="M${x} 636 q12 14 12 22 a12 12 0 0 1 -24 0 q0 -8 12 -22 Z" fill="${c}"/>`;
        }
      }

      /* ---------- EL PANEL DE RAYOS X, detrás del esqueleto ---------- */
      s += `<rect x="686" y="72" width="250" height="14" rx="7" fill="#b9c6cd"/>
        <rect x="700" y="84" width="10" height="30" rx="5" fill="#c6d1d7"/>
        <rect x="912" y="84" width="10" height="30" rx="5" fill="#c6d1d7"/>
        <rect x="616" y="92" width="390" height="916" rx="26" fill="url(#cpoMetal)"/>
        <rect x="624" y="100" width="374" height="900" rx="22" fill="#8ea3b0"/>
        <rect x="630" y="106" width="362" height="888" rx="18" fill="url(#cpoRx)"/>
        <rect x="630" y="106" width="362" height="888" rx="18" fill="url(#cpoRxLuz)"/>`;
      /* la cuadrícula tenue de la placa */
      for (let y = 158; y < 990; y += 104) s += `<line x1="634" y1="${y}" x2="988" y2="${y}" stroke="rgba(255,255,255,.07)" stroke-width="2"/>`;
      for (let x = 690; x < 990; x += 104) s += `<line x1="${x}" y1="110" x2="${x}" y2="990" stroke="rgba(255,255,255,.07)" stroke-width="2"/>`;
      /* el brillo que recorre la placa despacio */
      s += `<g clip-path="url(#cpoRecorteRx)"><rect x="600" y="106" width="110" height="888" fill="rgba(200,240,255,.1)">
        <animateTransform attributeName="transform" type="translate" values="0 0;400 0;0 0" dur="14s" repeatCount="indefinite"/></rect></g>`;
      /* pinzas de las cuatro esquinas y el pilotito de encendido */
      [[664, 132], [956, 132], [664, 966], [956, 966]].forEach(p => {
        s += `<g><rect x="${p[0] - 17}" y="${p[1] - 9}" width="34" height="18" rx="8" fill="#dfe6ea"/>
          <rect x="${p[0] - 11}" y="${p[1] - 4}" width="22" height="8" rx="4" fill="#aab8c0"/></g>`;
      });
      s += `<circle cx="1000" cy="106" r="9" fill="#9be08a"><animate attributeName="opacity" values="1;.35;1" dur="3.4s" repeatCount="indefinite"/></circle>`;

      /* ---------- LA GRÁFICA DE LATIDO, cruzando el fondo ---------- */
      let ecg = "M0 782";
      for (let x = 0; x < W; x += 188) ecg += ` H${x + 92} l14 -7 l9 30 l13 -66 l13 86 l11 -43 l14 0`;
      ecg += ` H${W}`;
      s += `<path d="${ecg}" fill="none" stroke="rgba(240,130,140,.42)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="${ecg}" fill="none" stroke="rgba(255,255,255,.72)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="150 3000">
        <animate attributeName="stroke-dashoffset" values="0;-3150" dur="26s" repeatCount="indefinite"/></path>`;

      /* ---------- EL SUELO ---------- */
      s += `<rect x="0" y="${SUELO}" width="${W}" height="${1100 - SUELO}" fill="url(#cpoSuelo)"/>
        <rect x="0" y="1004" width="${W}" height="24" rx="6" fill="#e9bd97"/>
        <rect x="0" y="1006" width="${W}" height="5" fill="rgba(255,255,255,.6)"/>`;
      for (let x = 40; x < W + 90; x += 146) s += `<line x1="${x}" y1="${SUELO}" x2="${x - 34}" y2="1100" stroke="rgba(150,96,54,.22)" stroke-width="3"/>`;
      s += `<line x1="0" y1="1060" x2="${W}" y2="1060" stroke="rgba(150,96,54,.18)" stroke-width="3"/>`;

      /* ---------- LAS TARIMAS, una debajo de cada silueta ---------- */
      const tarima = (x0, x1, c1, c2) => `<g>
        <ellipse cx="${(x0 + x1) / 2}" cy="1094" rx="${(x1 - x0) / 2 + 14}" ry="12" fill="rgba(120,72,38,.22)"/>
        <rect x="${x0}" y="1062" width="${x1 - x0}" height="34" rx="10" fill="url(#cpoMadera)"/>
        <rect x="${x0 - 8}" y="1042" width="${x1 - x0 + 16}" height="24" rx="12" fill="${c1}"/>
        <rect x="${x0 - 8}" y="1044" width="${x1 - x0 + 16}" height="7" rx="3.5" fill="${c2}"/>
        ${[0, 1, 2, 3, 4, 5].map(i => `<line x1="${x0 + 30 + i * (x1 - x0 - 60) / 5}" y1="1066" x2="${x0 + 30 + i * (x1 - x0 - 60) / 5}" y2="1092" stroke="rgba(120,72,38,.35)" stroke-width="3"/>`).join("")}</g>`;
      s += tarima(140, 522, "url(#cpoColcha)", "rgba(255,255,255,.6)");
      s += tarima(628, 996, "#bfe2ef", "rgba(255,255,255,.6)");

      /* ---------- EL METRO DE PARED, entre las dos siluetas ---------- */
      s += `<rect x="548" y="286" width="46" height="660" rx="10" fill="#f7ecdc" stroke="#e0c7a8" stroke-width="4"/>
        <rect x="548" y="286" width="14" height="660" fill="rgba(255,255,255,.55)"/>`;
      for (let y = 300, i = 0; y <= 936; y += 38, i++) {
        const largo = i % 4 === 0 ? 30 : 16;
        s += `<line x1="562" y1="${y}" x2="${562 + largo}" y2="${y}" stroke="${i % 4 === 0 ? "#c98a5e" : "#dcb894"}" stroke-width="${i % 4 === 0 ? 4 : 3}"/>`;
      }
      /* tres tramos de color, para que crezca con alegría */
      [["#8fc9d8", 300, 500], ["#f7c765", 500, 720], ["#ef9aa8", 720, 936]].forEach(t => {
        s += `<rect x="549" y="${t[1]}" width="7" height="${t[2] - t[1]}" rx="3" fill="${t[0]}" opacity=".85"/>`;
      });
      /* la flechita que marca la altura */
      s += `<g><path d="M604 500 l-20 -14 v28 Z" fill="#ef7a8c"/>
        <rect x="602" y="488" width="34" height="24" rx="8" fill="#ef7a8c"/>
        <rect x="608" y="496" width="22" height="4" rx="2" fill="rgba(255,255,255,.85)"/>
        <animateTransform attributeName="transform" type="translate" values="0 0;0 -14;0 0" dur="7s" repeatCount="indefinite"/></g>`;

      /* ---------- LA BÁSCULA de columna ---------- */
      s += `<g>
        <ellipse cx="1072" cy="1032" rx="70" ry="12" fill="rgba(120,72,38,.18)"/>
        <rect x="1014" y="982" width="116" height="34" rx="12" fill="url(#cpoMetal)"/>
        <rect x="1022" y="988" width="100" height="12" rx="6" fill="#f2f5f6"/>
        <rect x="1063" y="874" width="16" height="112" rx="8" fill="#c3ced4"/>
        <circle cx="1071" cy="846" r="42" fill="#f4f7f8" stroke="#b3c0c7" stroke-width="7"/>
        <circle cx="1071" cy="846" r="30" fill="#fffdf8"/>
        ${[0, 1, 2, 3, 4, 5, 6, 7].map(i => {
          const a = (-90 + i * 34) * Math.PI / 180;
          return `<line x1="${n(1071 + 22 * Math.cos(a))}" y1="${n(846 + 22 * Math.sin(a))}" x2="${n(1071 + 29 * Math.cos(a))}" y2="${n(846 + 29 * Math.sin(a))}" stroke="#9fb0b8" stroke-width="3"/>`;
        }).join("")}
        <g><line x1="1071" y1="846" x2="1071" y2="822" stroke="#ef5350" stroke-width="4" stroke-linecap="round">
          <animateTransform attributeName="transform" type="rotate" values="-16 1071 846;14 1071 846;-16 1071 846" dur="8s" repeatCount="indefinite"/></line></g>
        <circle cx="1071" cy="846" r="5" fill="#78909c"/></g>`;

      /* ---------- LA ESTANTERÍA ALTA de la izquierda ---------- */
      const frasco = (x, base, w, h, c, tapa) => `<g>
        <rect x="${x}" y="${base - h}" width="${w}" height="${h}" rx="${Math.min(9, w / 3)}" fill="rgba(255,255,255,.55)" stroke="#d8c6b2" stroke-width="2"/>
        <rect x="${x + 2}" y="${base - h * 0.62}" width="${w - 4}" height="${h * 0.62 - 3}" rx="${Math.min(7, w / 3)}" fill="${c}" opacity=".8"/>
        <rect x="${x}" y="${base - h}" width="${w}" height="${h}" rx="${Math.min(9, w / 3)}" fill="url(#cpoVidrio)" opacity=".45"/>
        <rect x="${x - 3}" y="${base - h - 9}" width="${w + 6}" height="11" rx="5" fill="${tapa}"/></g>`;
      const libro = (x, base, w, h, c) => `<g>
        <rect x="${x}" y="${base - h}" width="${w}" height="${h}" rx="3" fill="${c}"/>
        <rect x="${x + w - 5}" y="${base - h}" width="5" height="${h}" rx="2" fill="rgba(255,255,255,.35)"/>
        <rect x="${x + 3}" y="${base - h + 8}" width="${w - 11}" height="4" rx="2" fill="rgba(255,255,255,.55)"/></g>`;

      s += `<g><rect x="4" y="524" width="136" height="504" rx="12" fill="url(#cpoMadera)"/>
        <rect x="12" y="532" width="120" height="488" rx="8" fill="#e8cfae"/>`;
      [620, 724, 828, 932].forEach((y, i) => {
        s += `<rect x="8" y="${y}" width="128" height="12" rx="5" fill="#b3763f"/>`;
        const base = y;
        if (i % 2 === 0) {
          s += libro(18, base, 15, 62, "#e0705f") + libro(35, base, 13, 54, "#5fa8c4") + libro(50, base, 16, 68, "#f0b64c") + libro(68, base, 12, 50, "#7fb56b");
          s += frasco(90, base, 24, 40, "#f2a0b0", "#c98a5e") + frasco(116, base, 16, 30, "#9ed6e6", "#c98a5e");
        } else {
          s += frasco(18, base, 26, 46, "#a7d8a0", "#b3763f") + frasco(48, base, 20, 36, "#f5c96a", "#b3763f");
          s += libro(74, base, 14, 58, "#8f7bc4") + libro(90, base, 17, 46, "#e08a5f") + libro(109, base, 13, 64, "#5fa8c4");
        }
      });
      /* burbujitas dentro de dos frascos */
      s += `<circle cx="101" cy="600" r="4" fill="rgba(255,255,255,.75)"><animate attributeName="cy" values="600;584;600" dur="5s" repeatCount="indefinite"/></circle>
        <circle cx="28" cy="706" r="4.5" fill="rgba(255,255,255,.7)"><animate attributeName="cy" values="706;688;706" dur="6.4s" repeatCount="indefinite"/></circle></g>`;

      /* ---------- LA BALDA de la derecha, con más frascos y libros ---------- */
      s += `<g>`;
      [846, 964].forEach((y, i) => {
        s += `<rect x="1130" y="${y}" width="256" height="14" rx="6" fill="url(#cpoMadera)"/>
          <path d="M1146 ${y + 14} l16 26 M1370 ${y + 14} l-16 26" stroke="#a56a3c" stroke-width="7" stroke-linecap="round"/>`;
        if (i === 0) {
          s += frasco(1146, y, 28, 52, "#f2a0b0", "#c98a5e") + frasco(1180, y, 22, 40, "#9ed6e6", "#c98a5e") + frasco(1208, y, 18, 32, "#a7d8a0", "#c98a5e");
          s += libro(1240, y, 16, 60, "#e0705f") + libro(1258, y, 13, 48, "#5fa8c4") + libro(1273, y, 18, 66, "#f0b64c") + libro(1293, y, 14, 52, "#8f7bc4");
          s += `<path d="M1330 ${y} q-18 -10 -14 -30 q18 4 20 30 Z" fill="#7fb56b"/><path d="M1330 ${y} q18 -14 34 -10 q-10 18 -34 10 Z" fill="#9ccb84"/>`;
        } else {
          s += libro(1142, y, 15, 56, "#7fb56b") + libro(1159, y, 12, 44, "#e08a5f") + libro(1173, y, 17, 62, "#5fa8c4");
          s += frasco(1204, y, 30, 44, "#f5c96a", "#b3763f") + frasco(1240, y, 24, 34, "#f2a0b0", "#b3763f");
          s += `<g><rect x="1284" y="${y - 40}" width="76" height="40" rx="8" fill="#fdf6ea" stroke="#e0c7a8" stroke-width="3"/>
            <path d="M1296 ${y - 12} q14 -20 26 -6 q10 -14 24 0" stroke="#8fc9d8" stroke-width="5" fill="none" stroke-linecap="round"/>
            <circle cx="1300" cy="${y - 26}" r="6" fill="#f7c765"/></g>`;
        }
      });
      s += `</g>`;

      /* ---------- LA PLANTA de la esquina ---------- */
      s += `<g>
        <ellipse cx="1442" cy="1024" rx="66" ry="14" fill="rgba(120,72,38,.2)"/>
        <path d="M1396 934 h92 l-12 90 q-2 12 -16 12 h-36 q-14 0 -16 -12 Z" fill="#d4795c"/>
        <rect x="1390" y="922" width="104" height="20" rx="9" fill="#e08a6a"/>
        <rect x="1390" y="926" width="104" height="6" fill="rgba(255,255,255,.4)"/>
        <g><animateTransform attributeName="transform" type="rotate" values="-1.6 1442 930;1.6 1442 930;-1.6 1442 930" dur="9s" repeatCount="indefinite"/>
          <path d="M1442 926 q-6 -70 -46 -110" stroke="#4e8a45" stroke-width="8" fill="none" stroke-linecap="round"/>
          <path d="M1442 926 q4 -84 34 -128" stroke="#4e8a45" stroke-width="8" fill="none" stroke-linecap="round"/>
          <path d="M1442 926 q-2 -50 12 -84" stroke="#4e8a45" stroke-width="7" fill="none" stroke-linecap="round"/>
          <path d="M1396 816 q-42 -14 -36 -52 q40 2 48 42 Z" fill="#5da33f"/>
          <path d="M1400 826 q-46 12 -60 -18 q34 -20 62 6 Z" fill="#6fb84c"/>
          <path d="M1476 798 q34 -30 20 -66 q-38 16 -34 58 Z" fill="#5da33f"/>
          <path d="M1480 810 q46 -6 52 -40 q-40 -10 -58 26 Z" fill="#6fb84c"/>
          <path d="M1454 842 q-8 -46 22 -66 q14 40 -12 68 Z" fill="#7cc457"/>
          <path d="M1442 860 q-34 -22 -26 -56 q32 14 32 54 Z" fill="#6fb84c"/></g>
        <circle cx="1408" cy="962" r="9" fill="rgba(255,255,255,.35)"/></g>`;

      /* ---------- DOS CUADRITOS en las paredes vacías ---------- */
      const cuadro = (x, y, dibujo) => `<g>
        <rect x="${x}" y="${y}" width="128" height="104" rx="10" fill="#c9955f"/>
        <rect x="${x + 8}" y="${y + 8}" width="112" height="88" rx="6" fill="#fffaf2"/>
        ${dibujo}</g>`;
      s += cuadro(16, 168, `<circle cx="${16 + 44}" cy="${168 + 40}" r="17" fill="#f7c765"/>
        <path d="M${16 + 14} ${168 + 84} q26 -34 54 -8 q16 14 44 8 Z" fill="#a8d6a0"/>
        <path d="M${16 + 74} ${168 + 30} q14 -10 26 0 q10 -8 14 6 q-24 6 -40 -6 Z" fill="#dbeaf4"/>`);
      s += cuadro(1178, 46, `<path d="M${1178 + 64} ${46 + 74} v-30" stroke="#7fb56b" stroke-width="6" stroke-linecap="round"/>
        ${[0, 72, 144, 216].map(a => `<ellipse cx="${n(1178 + 64 + 17 * Math.cos(a * Math.PI / 180))}" cy="${n(46 + 40 + 17 * Math.sin(a * Math.PI / 180))}" rx="11" ry="9" fill="#ef9aa8"/>`).join("")}
        <circle cx="${1178 + 64}" cy="${46 + 40}" r="9" fill="#f7c765"/>`);

      /* ---------- DETALLES SUELTOS: un taburete y una pelota ---------- */
      s += `<g><ellipse cx="1206" cy="1044" rx="52" ry="12" fill="rgba(120,72,38,.18)"/>
        <ellipse cx="1206" cy="988" rx="46" ry="16" fill="#8fc9d8"/>
        <rect x="1160" y="988" width="92" height="16" rx="8" fill="#79b6c6"/>
        <rect x="1198" y="1000" width="16" height="40" rx="7" fill="#b0bec5"/>
        <path d="M1176 1042 h60" stroke="#b0bec5" stroke-width="9" stroke-linecap="round"/>
        <path d="M1206 1040 l-28 -12 M1206 1040 l28 -12" stroke="#b0bec5" stroke-width="8" stroke-linecap="round"/></g>`;
      s += `<g><circle cx="1330" cy="1058" r="30" fill="#f7c765"/>
        <path d="M1300 1058 a30 30 0 0 0 60 0 Z" fill="#ef9aa8"/>
        <circle cx="1330" cy="1058" r="30" fill="none" stroke="rgba(255,255,255,.6)" stroke-width="5"/>
        <circle cx="1320" cy="1046" r="7" fill="rgba(255,255,255,.55)"/></g>`;

      /* la deco original manda: se pinta encima de todo esto */
      return decoSvg(compacta(s) + dentro(orig ? orig.call(this, e) : ""), W);
    };
  })();

  /* ============================================================
     MÚSICA: el gran teatro.
     Telón con pliegues y borlas, focos con haces suaves,
     pentagrama ondulado con notas, palcos con público,
     tarima de madera al fondo, atriles, sillas y piano de cola.
     El suelo y los telones laterales originales se pintan
     encima, así que todo lo nuestro vive por encima de y=752.
     ============================================================ */
  (function () {
    const orig = THEMES.musica.content.explore.deco;

    THEMES.musica.content.explore.deco = function (e) {
      const W = e.width || 2600;
      const libre = libreCon(cajas(e, 1.25, 18));
      const TABLAS = 692;   /* la línea del fondo del escenario */
      let s = "";

      /* ---------- degradados propios (prefijo mus) ---------- */
      s += `<defs>
        <linearGradient id="musSala" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#2a0f2e"/><stop offset="60%" stop-color="#3b1330"/><stop offset="100%" stop-color="#24102a"/></linearGradient>
        <linearGradient id="musTelon" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#8e1220"/><stop offset="45%" stop-color="#b3161f"/><stop offset="100%" stop-color="#6d0d18"/></linearGradient>
        <linearGradient id="musTelonLat" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#7d0f1c"/><stop offset="46%" stop-color="#c01a24"/><stop offset="100%" stop-color="#7d0f1c"/></linearGradient>
        <linearGradient id="musOro" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffe9a8"/><stop offset="50%" stop-color="#e8b74a"/><stop offset="100%" stop-color="#b58622"/></linearGradient>
        <linearGradient id="musTabla" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#a8703f"/><stop offset="60%" stop-color="#8a5730"/><stop offset="100%" stop-color="#6d4c41"/></linearGradient>
        <radialGradient id="musFoco" cx="50%" cy="0%" r="90%">
          <stop offset="0%" stop-color="rgba(255,245,200,.34)"/><stop offset="100%" stop-color="rgba(255,245,200,0)"/></radialGradient>
        <radialGradient id="musFocoAzul" cx="50%" cy="0%" r="90%">
          <stop offset="0%" stop-color="rgba(180,225,255,.28)"/><stop offset="100%" stop-color="rgba(180,225,255,0)"/></radialGradient>
        <radialGradient id="musFocoRosa" cx="50%" cy="0%" r="90%">
          <stop offset="0%" stop-color="rgba(255,190,220,.26)"/><stop offset="100%" stop-color="rgba(255,190,220,0)"/></radialGradient>
      </defs>`;

      /* ---------- LA SALA y el telón del fondo ---------- */
      s += `<rect x="0" y="0" width="${W}" height="${TABLAS + 8}" fill="url(#musSala)"/>
        <rect x="96" y="120" width="${W - 192}" height="${TABLAS - 118}" fill="url(#musTelon)"/>`;
      /* los pliegues del telón, uno tras otro */
      const alto = TABLAS - 120, medio = alto / 2;
      for (let x = 96, i = 0; x < W - 96; x += 132, i++) {
        s += `<path d="M${x} 120 q11 ${medio} 0 ${alto}" stroke="rgba(0,0,0,.28)" stroke-width="20" fill="none"/>`;
        if (i % 2 === 0) s += `<path d="M${x + 44} 120 q-9 ${medio} 0 ${alto}" stroke="rgba(255,190,180,.13)" stroke-width="14" fill="none"/>`;
      }
      /* el bajo del telón, con su vuelo */
      let vuelo = `M96 ${TABLAS - 30}`;
      for (let x = 96; x < W - 96; x += 184) vuelo += ` q46 26 92 0 q46 -26 92 0`;
      s += `<path d="${vuelo} L${W - 96} ${TABLAS} L96 ${TABLAS} Z" fill="rgba(0,0,0,.22)"/>`;

      /* ---------- LA BAMBALINA de arriba, con flecos y borlas ---------- */
      s += `<path d="M0 0 H${W} V150 q-${W / 8} 56 -${W / 4} 0 q-${W / 8} 56 -${W / 4} 0 q-${W / 8} 56 -${W / 4} 0 q-${W / 8} 56 -${W / 4} 0 Z" fill="url(#musTelon)"/>`;
      for (let x = 30; x < W; x += 158) {
        s += `<path d="M${x} 0 q13 78 0 152" stroke="rgba(0,0,0,.22)" stroke-width="18" fill="none"/>`;
      }
      /* el cordón dorado que remata la bambalina */
      s += `<path d="M0 148 q${W / 8} 58 ${W / 4} 0 q${W / 8} 58 ${W / 4} 0 q${W / 8} 58 ${W / 4} 0 q${W / 8} 58 ${W / 4} 0" fill="none" stroke="url(#musOro)" stroke-width="9"/>`;
      for (let i = 1; i < 6; i++) {
        const x = i * (W / 6), y = i % 2 ? 176 : 150;
        s += `<g><path d="M${x} ${y} v18" stroke="#d9a93c" stroke-width="5"/>
          <path d="M${x - 15} ${y + 18} q15 -8 30 0 l-6 30 q-9 8 -18 0 Z" fill="url(#musOro)"/>
          ${[-9, -3, 3, 9].map(d => `<line x1="${x + d}" y1="${y + 44}" x2="${x + d * 1.5}" y2="${y + 62}" stroke="#e8c25c" stroke-width="3"/>`).join("")}</g>`;
      }

      /* ---------- LOS TELONES LATERALES, recogidos con borla ---------- */
      const lateral = (izq) => {
        const x0 = izq ? 0 : W - 320, x1 = izq ? 320 : W;
        let g = `<path d="M${x0} 0 H${x1} V${TABLAS} H${x0} Z" fill="url(#musTelonLat)"/>`;
        for (let i = 0; i < 4; i++) {
          const x = x0 + 34 + i * 76;
          g += `<path d="M${x} 0 q${izq ? 18 : -18} ${TABLAS / 2} 0 ${TABLAS}" stroke="rgba(0,0,0,.26)" stroke-width="22" fill="none"/>
            <path d="M${x + 26} 0 q${izq ? -14 : 14} ${TABLAS / 2} 0 ${TABLAS}" stroke="rgba(255,190,180,.14)" stroke-width="12" fill="none"/>`;
        }
        /* el borde interior con su ondita */
        const bx = izq ? 320 : W - 320;
        g += `<path d="M${bx} 0 q${izq ? -26 : 26} 180 0 340 q${izq ? 26 : -26} 180 0 ${TABLAS - 340}" stroke="rgba(0,0,0,.3)" stroke-width="12" fill="none"/>`;
        /* el cordón que lo recoge y su borla */
        const cx = izq ? 288 : W - 288;
        g += `<path d="M${izq ? x0 : x1} 356 q${izq ? 168 : -168} 44 ${izq ? 288 : -288} 8" stroke="url(#musOro)" stroke-width="11" fill="none"/>
          <circle cx="${cx}" cy="380" r="14" fill="url(#musOro)"/>
          <path d="M${cx - 16} 392 q16 -10 32 0 l-7 40 q-9 10 -18 0 Z" fill="url(#musOro)"/>
          ${[-10, -3, 4, 11].map(d => `<line x1="${cx + d}" y1="428" x2="${cx + d * 1.6}" y2="460" stroke="#e8c25c" stroke-width="4"/>`).join("")}`;
        return g;
      };
      s += lateral(true) + lateral(false);

      /* ---------- LOS FOCOS colgados, con sus haces ---------- */
      s += `<rect x="150" y="26" width="${W - 300}" height="20" rx="8" fill="#2b2b33"/>
        <rect x="150" y="30" width="${W - 300}" height="5" rx="2" fill="rgba(255,255,255,.16)"/>`;
      for (let x = 240; x < W - 160; x += 348) s += `<path d="M${x} 46 v14" stroke="#2b2b33" stroke-width="7"/>`;
      const tintes = ["url(#musFoco)", "url(#musFocoAzul)", "url(#musFoco)", "url(#musFocoRosa)"];
      for (let x = 240, i = 0; x < W - 160; x += 348, i++) {
        const t = tintes[i % 4];
        s += `<polygon points="${x - 26},96 ${x + 26},96 ${x + 168},${TABLAS} ${x - 168},${TABLAS}" fill="${t}"${i % 3 === 0 ? `><animate attributeName="opacity" values=".85;1;.85" dur="${7 + i}s" repeatCount="indefinite"/></polygon>` : "/>"}
          <path d="M${x - 22} 58 h44 l10 40 h-64 Z" fill="#3a3a44"/>
          <rect x="${x - 26}" y="94" width="52" height="10" rx="5" fill="#22222a"/>
          <ellipse cx="${x}" cy="98" rx="19" ry="6" fill="#ffe9a8" opacity=".9"/>`;
      }

      /* ---------- EL PENTAGRAMA DE FONDO, ondulado ---------- */
      const onda = (y) => {
        let d = `M170 ${y}`;
        for (let x = 170; x < W - 150; x += 340) d += ` q85 -34 170 0 q85 34 170 0`;
        return d;
      };
      for (let i = 0; i < 5; i++) s += `<path d="${onda(268 + i * 26)}" fill="none" stroke="rgba(255,255,255,.12)" stroke-width="3"/>`;

      /* ---------- LAS NOTAS que flotan despacio ---------- */
      const nota = (tipo, c) => {
        let g = `<ellipse cx="0" cy="0" rx="14" ry="10" transform="rotate(-20)" fill="${tipo === "blanca" ? "none" : c}" stroke="${c}" stroke-width="${tipo === "blanca" ? 4 : 0}"/>`;
        g += `<path d="M13 -4 V-62" stroke="${c}" stroke-width="4.5" stroke-linecap="round"/>`;
        if (tipo === "corchea") g += `<path d="M13 -62 q26 10 20 36 q-2 -18 -20 -22 Z" fill="${c}"/>`;
        if (tipo === "doble") g += `<path d="M13 -62 q26 10 20 34 q-2 -16 -20 -20 Z" fill="${c}"/><path d="M13 -44 q26 10 20 34 q-2 -16 -20 -20 Z" fill="${c}"/>`;
        return g;
      };
      const notas = [[300, 232, "corchea", .9], [560, 300, "negra", 1], [820, 214, "doble", .85], [1080, 288, "blanca", 1],
        [1340, 226, "corchea", .95], [1900, 220, "corchea", 1]];
      notas.forEach((p, i) => {
        if (!libre(p[0] - 26, p[1] - 74, 56, 96)) return;
        s += `<g transform="translate(${p[0]} ${p[1]}) scale(${p[3]})" opacity=".72">
          <g><animateTransform attributeName="transform" type="translate" values="0 0;0 -22;0 0" dur="${9 + (i % 5) * 1.7}s" repeatCount="indefinite"/>
          ${nota(p[2], i % 3 === 0 ? "#ffe6a0" : "#ffffff")}</g></g>`;
      });

      /* ---------- LOS PALCOS, con su público asomado ---------- */
      const palco = (x0) => {
        let g = `<path d="M${x0 - 12} 70 q113 -28 250 0 l0 54 q-125 -26 -250 0 Z" fill="url(#musTelon)"/>
          <path d="M${x0 - 12} 118 q125 -26 250 0" stroke="url(#musOro)" stroke-width="7" fill="none"/>`;
        /* el público, asomado por encima de la barandilla */
        [[44, 196, "#f3c39e"], [112, 188, "#c98e62"], [180, 198, "#f6d5b8"]].forEach(p => {
          g += `<circle cx="${x0 + p[0]}" cy="${p[1]}" r="20" fill="${p[2]}"/>
            <path d="M${x0 + p[0] - 20} ${p[1] - 6} q20 -24 40 0 q-20 -10 -40 0 Z" fill="rgba(60,26,44,.85)"/>
            <path d="M${x0 + p[0] - 34} ${p[1] + 46} q34 -32 68 0 Z" fill="rgba(60,26,44,.8)"/>`;
        });
        /* la barandilla del palco */
        g += `<path d="M${x0 - 8} 224 h246 v54 q0 22 -32 22 h-182 q-32 0 -32 -22 Z" fill="#5c1730"/>
          <path d="M${x0 - 8} 232 h246" stroke="url(#musOro)" stroke-width="6"/>
          <path d="M${x0 - 2} 290 q124 20 234 0" stroke="url(#musOro)" stroke-width="5" fill="none"/>`;
        for (let i = 0; i < 4; i++) {
          const cx = x0 + 28 + i * 62;
          g += `<circle cx="${cx}" cy="258" r="11" fill="none" stroke="url(#musOro)" stroke-width="4"/>
            <circle cx="${cx}" cy="258" r="3.4" fill="#e8c25c"/>`;
        }
        /* el farolillo de al lado */
        g += `<circle cx="${x0 + 244}" cy="182" r="13" fill="#ffe9a8"/>
          <circle cx="${x0 + 244}" cy="182" r="26" fill="rgba(255,233,168,.2)"/>
          <path d="M${x0 + 244} 156 v-18" stroke="#b58622" stroke-width="4"/>`;
        return g;
      };
      s += palco(190) + palco(W - 400);

      /* ---------- LA TARIMA DEL FONDO, con sus vetas ---------- */
      s += `<rect x="96" y="${TABLAS}" width="${W - 192}" height="${772 - TABLAS}" fill="url(#musTabla)"/>
        <rect x="96" y="${TABLAS}" width="${W - 192}" height="7" fill="rgba(255,214,170,.35)"/>`;
      for (let x = 130; x < W - 96; x += 300) {
        s += `<line x1="${x}" y1="${TABLAS}" x2="${x - 8}" y2="772" stroke="rgba(60,32,16,.35)" stroke-width="3"/>`;
      }
      for (let x = 120, i = 0; x < W - 120; x += 260, i++) {
        const y = TABLAS + 18 + (i % 3) * 16;
        s += `<path d="M${x} ${y} q34 ${i % 2 ? 7 : -7} 68 0" stroke="rgba(60,32,16,.22)" stroke-width="3" fill="none"/>`;
      }

      /* ---------- EL PIANO DE COLA del fondo ---------- */
      s += `<g>
        <ellipse cx="1872" cy="754" rx="236" ry="16" fill="rgba(0,0,0,.32)"/>
        <path d="M1676 664 Q1862 616 2050 610 L2064 636 Q1878 644 1702 688 Z" fill="#5d4c68"/>
        <path d="M1676 664 Q1862 616 2050 610 L2050 622 Q1864 630 1684 674 Z" fill="#2a2533"/>
        <path d="M2012 624 L1996 664" stroke="#6b6377" stroke-width="6" stroke-linecap="round"/>
        <path d="M1664 668 H2016 q62 0 62 32 v14 q0 18 -34 18 H1694 q-30 0 -30 -24 Z" fill="#221e2b"/>
        <path d="M1678 680 H2008 q46 0 52 24" fill="none" stroke="rgba(255,255,255,.18)" stroke-width="5"/>
        <path d="M1664 716 H2078" stroke="rgba(0,0,0,.35)" stroke-width="5"/>
        <rect x="1678" y="686" width="158" height="20" rx="4" fill="#f6f1e6"/>
        ${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => `<rect x="${1686 + i * 16}" y="686" width="6" height="12" rx="2" fill="#20202a"/>`).join("")}
        <path d="M1694 732 h16 l-3 20 h-10 Z M1878 732 h16 l-3 20 h-10 Z M2044 732 h16 l-3 20 h-10 Z" fill="#2b2733"/>
        <rect x="1534" y="708" width="112" height="16" rx="7" fill="#5b3a24"/>
        <rect x="1538" y="710" width="104" height="5" rx="2" fill="rgba(255,255,255,.18)"/>
        <rect x="1542" y="724" width="12" height="28" rx="5" fill="#4a2f1d"/>
        <rect x="1628" y="724" width="12" height="28" rx="5" fill="#4a2f1d"/></g>`;

      /* ---------- LAS SILLAS de la orquesta ---------- */
      const silla = (x) => `<g>
        <path d="M${x - 26} 654 q26 -12 52 0 l4 44 q-30 10 -60 0 Z" fill="#7a1e2c"/>
        <path d="M${x - 26} 654 q26 -12 52 0" fill="none" stroke="rgba(255,255,255,.18)" stroke-width="4"/>
        <rect x="${x - 32}" y="700" width="64" height="14" rx="6" fill="#8d2a38"/>
        <path d="M${x - 26} 714 l-8 36 M${x + 26} 714 l8 36 M${x - 20} 714 l-2 34 M${x + 20} 714 l2 34" stroke="#4a2f1d" stroke-width="6" stroke-linecap="round"/></g>`;
      [280, 560, 800, 1140, 2170].forEach(x => {
        if (libre(x - 36, 648, 72, 106)) s += silla(x);
      });

      /* ---------- LOS ATRILES ---------- */
      const atril = (x) => `<g>
        <path d="M${x - 46} 616 h92 l-6 40 h-80 Z" fill="#3d3a48" transform="rotate(-8 ${x} 636)"/>
        <path d="M${x - 40} 622 h80" stroke="rgba(255,255,255,.25)" stroke-width="4" transform="rotate(-8 ${x} 636)"/>
        <rect x="${x - 5}" y="650" width="10" height="86" rx="5" fill="#4b4655"/>
        <path d="M${x} 736 l-32 20 M${x} 736 l32 20 M${x} 736 v22" stroke="#4b4655" stroke-width="7" stroke-linecap="round"/></g>`;
      [220, 520, 880, 1060, 1210, 1490, 2110].forEach(x => {
        if (libre(x - 52, 600, 104, 160)) s += atril(x);
      });

      /* la deco original manda: telones, focos y suelo se pintan encima */
      return decoSvg(compacta(s) + dentro(orig ? orig.call(this, e) : ""), W);
    };
  })();

})();
