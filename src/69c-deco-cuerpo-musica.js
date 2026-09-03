"use strict";
/* ============================================================
   Escenografía nueva para dos mapas de Explorar:
   CUERPO HUMANO (una consulta de pediatra, cálida)
   y MÚSICA (un gran teatro con su telón y su orquesta).

   CUERPO HUMANO sigue envuelto: lo nuevo se pinta DETRÁS y la deco
   de siempre queda DELANTE, así las dos siluetas siguen mandando.
   MÚSICA se dibuja entera aquí, para un lienzo ancho de 4200 px con
   scroll horizontal: la deco antigua estaba hecha para 2600 px y se
   descarta. En los dos casos devolvemos UN SOLO <svg>.
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

  /* DÓNDE ACABA DE VERDAD EL DIBUJO DE UN PUNTO.
     El icono se pinta dentro de una caja iw x ih que casi nunca llena: el
     viewBox se encaja con "meet" y deja aire arriba y abajo (hasta 36 px en
     el violín o el micrófono). Si la peana se coloca con la caja, el
     instrumento queda flotando. Medimos la tinta en una copia escondida y
     devolvemos, para cada punto, en qué fracción de su caja empieza y acaba
     el dibujo. Si no se pudiera medir nos quedamos con la caja entera. */
  const tintas = (pois) => {
    const m = new Map();
    let cajon = null;
    try {
      cajon = document.createElement("div");
      cajon.setAttribute("style", "position:absolute;left:-4000px;top:0;width:0;height:0;overflow:hidden;visibility:hidden");
      /* se montan todas de golpe y se miden después: una sola pasada de
         maquetación en vez de una por punto */
      const huecos = [];
      (pois || []).forEach((p) => {
        if (!p.svg) return;
        const hueco = document.createElement("span");
        hueco.setAttribute("style", "position:absolute;left:0;top:" + (huecos.length * 400) + "px;display:block;width:" + (p.iw || 80) + "px;height:" + (p.ih || 80) + "px");
        hueco.innerHTML = p.svg;
        cajon.appendChild(hueco);
        huecos.push([p, hueco]);
      });
      document.body.appendChild(cajon);
      huecos.forEach((par) => {
        const marco = par[1].getBoundingClientRect();
        let pie = -1e9, tapa = 1e9;
        par[1].querySelectorAll("path,rect,circle,ellipse,line,polygon,polyline").forEach((el) => {
          const r = el.getBoundingClientRect();
          if (!r.width && !r.height) return;
          if (r.bottom > pie) pie = r.bottom;
          if (r.top < tapa) tapa = r.top;
        });
        if (pie > -1e8 && marco.height > 0) {
          m.set(par[0], { pie: (pie - marco.top) / marco.height, tapa: (tapa - marco.top) / marco.height });
        }
      });
    } catch (err) { /* sin DOM no se mide: se usa la caja entera */ }
    if (cajon && cajon.parentNode) cajon.parentNode.removeChild(cajon);
    return m;
  };

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

      /* ---------- EL METRO DE PARED, entre las dos siluetas ----------
         baja hasta el rodapié: un metro de pared empieza en el suelo */
      s += `<rect x="548" y="286" width="46" height="730" rx="10" fill="#f7ecdc" stroke="#e0c7a8" stroke-width="4"/>
        <rect x="548" y="286" width="14" height="730" fill="rgba(255,255,255,.55)"/>`;
      for (let y = 300, i = 0; y <= 1004; y += 38, i++) {
        const largo = i % 4 === 0 ? 30 : 16;
        s += `<line x1="562" y1="${y}" x2="${562 + largo}" y2="${y}" stroke="${i % 4 === 0 ? "#c98a5e" : "#dcb894"}" stroke-width="${i % 4 === 0 ? 4 : 3}"/>`;
      }
      /* tres tramos de color, para que crezca con alegría */
      [["#8fc9d8", 300, 500], ["#f7c765", 500, 720], ["#ef9aa8", 720, 1004]].forEach(t => {
        s += `<rect x="549" y="${t[1]}" width="7" height="${t[2] - t[1]}" rx="3" fill="${t[0]}" opacity=".85"/>`;
      });
      /* la flechita que marca la altura */
      s += `<g><path d="M604 500 l-20 -14 v28 Z" fill="#ef7a8c"/>
        <rect x="602" y="488" width="34" height="24" rx="8" fill="#ef7a8c"/>
        <rect x="608" y="496" width="22" height="4" rx="2" fill="rgba(255,255,255,.85)"/>
        <animateTransform attributeName="transform" type="translate" values="0 0;0 -14;0 0" dur="7s" repeatCount="indefinite"/></g>`;

      /* ---------- LA BÁSCULA de columna ---------- */
      const BY = 762;   /* la esfera, a la altura de la barriga del niño */
      s += `<g>
        <ellipse cx="1072" cy="1032" rx="70" ry="12" fill="rgba(120,72,38,.18)"/>
        <rect x="1014" y="982" width="116" height="34" rx="12" fill="url(#cpoMetal)"/>
        <rect x="1022" y="988" width="100" height="12" rx="6" fill="#f2f5f6"/>
        <rect x="1063" y="${BY + 30}" width="16" height="${986 - BY - 30}" rx="8" fill="#c3ced4"/>
        <circle cx="1071" cy="${BY}" r="46" fill="#f4f7f8" stroke="#b3c0c7" stroke-width="7"/>
        <circle cx="1071" cy="${BY}" r="33" fill="#fffdf8"/>
        ${[0, 1, 2, 3, 4, 5, 6, 7].map(i => {
          const a = (-90 + i * 34) * Math.PI / 180;
          return `<line x1="${n(1071 + 24 * Math.cos(a))}" y1="${n(BY + 24 * Math.sin(a))}" x2="${n(1071 + 32 * Math.cos(a))}" y2="${n(BY + 32 * Math.sin(a))}" stroke="#9fb0b8" stroke-width="3"/>`;
        }).join("")}
        <g><line x1="1071" y1="${BY}" x2="1071" y2="${BY - 26}" stroke="#ef5350" stroke-width="4" stroke-linecap="round">
          <animateTransform attributeName="transform" type="rotate" values="-16 1071 ${BY};14 1071 ${BY};-16 1071 ${BY}" dur="8s" repeatCount="indefinite"/></line></g>
        <circle cx="1071" cy="${BY}" r="5" fill="#78909c"/></g>`;

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
        <circle cx="28" cy="706" r="4.5" fill="rgba(255,255,255,.7)"><animate attributeName="cy" values="706;688;706" dur="6.4s" repeatCount="indefinite"/></circle>`;
      /* la cesta del hueco de abajo, para que el mueble no acabe en vacío */
      s += `<path d="M20 950 h104 l-10 62 q-2 8 -12 8 h-60 q-10 0 -12 -8 Z" fill="#d9a441"/>
        <rect x="14" y="942" width="116" height="14" rx="6" fill="#c68f34"/>
        <path d="M36 958 v56 M58 958 v58 M80 958 v58 M102 958 v56" stroke="rgba(255,255,255,.32)" stroke-width="4"/>
        <circle cx="46" cy="944" r="13" fill="#8fc9d8"/><circle cx="74" cy="941" r="12" fill="#ef9aa8"/><circle cx="101" cy="945" r="11" fill="#a8d6a0"/></g>`;

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

      /* ---------- LA VITRINA DE LOS SISTEMAS ----------
         La sangre, la piel y el ADN se quedaban colgados en una pared
         vacía: ahora cada uno descansa en su balda, dentro del mueble
         de la consulta. */
      const VX0 = 1136, VX1 = 1474, VY0 = 234, VY1 = 678, VAN = VX1 - VX0;
      s += `<g><rect x="${VX0}" y="${VY0}" width="${VAN}" height="${VY1 - VY0}" rx="16" fill="url(#cpoMadera)"/>
        <rect x="${VX0 + 13}" y="${VY0 + 13}" width="${VAN - 26}" height="${VY1 - VY0 - 26}" rx="10" fill="#f7e6d0"/>
        <rect x="${VX0 + 13}" y="${VY0 + 13}" width="${VAN - 26}" height="${VY1 - VY0 - 26}" rx="10" fill="url(#cpoLuz)" opacity=".45"/>
        <rect x="${VX0 - 10}" y="${VY0 - 14}" width="${VAN + 20}" height="20" rx="9" fill="#b3763f"/>
        <rect x="${VX0 - 10}" y="${VY0 - 10}" width="${VAN + 20}" height="5" rx="2" fill="rgba(255,255,255,.45)"/>`;
      /* tres baldas: dos justo debajo de cada punto y una intermedia que
         llena la franja que antes se quedaba en beige liso */
      [362, 474, 612].forEach(y => {
        s += `<rect x="${VX0 + 13}" y="${y}" width="${VAN - 26}" height="15" rx="6" fill="#b3763f"/>
          <rect x="${VX0 + 13}" y="${y + 2}" width="${VAN - 26}" height="4" rx="2" fill="rgba(255,255,255,.5)"/>`;
      });
      /* lo que descansa en la balda de en medio */
      s += libro(1152, 474, 16, 58, "#7fb56b") + libro(1170, 474, 13, 46, "#e0705f")
        + libro(1185, 474, 17, 62, "#5fa8c4");
      s += frasco(1218, 474, 26, 44, "#f5c96a", "#c98a5e") + frasco(1250, 474, 20, 34, "#9ed6e6", "#c98a5e");
      /* una caja de tiritas y un ovillo de algodón, cosas de consulta */
      s += `<g><rect x="1372" y="428" width="72" height="46" rx="8" fill="#f2a0b0"/>
        <rect x="1372" y="428" width="72" height="11" rx="5" fill="#e0819a"/>
        <rect x="1400" y="444" width="16" height="6" rx="3" fill="#fffaf2"/>
        <rect x="1405" y="439" width="6" height="16" rx="3" fill="#fffaf2"/>
        <circle cx="1330" cy="462" r="15" fill="#fffaf2"/><circle cx="1348" cy="466" r="11" fill="#f7efe2"/>
        <circle cx="1326" cy="457" r="5" fill="rgba(255,255,255,.9)"/></g>`;
      /* compañía en las baldas: frascos, libros y una lupa */
      s += frasco(1244, 362, 26, 46, "#9ed6e6", "#c98a5e") + frasco(1414, 362, 22, 38, "#f2a0b0", "#c98a5e")
        + frasco(1442, 362, 18, 30, "#a7d8a0", "#c98a5e");
      s += libro(1152, 612, 15, 54, "#5fa8c4") + libro(1169, 612, 13, 44, "#e0705f") + libro(1184, 612, 17, 60, "#f0b64c");
      s += `<g><circle cx="1400" cy="576" r="26" fill="rgba(255,255,255,.55)" stroke="#c98a5e" stroke-width="5"/>
        <circle cx="1393" cy="569" r="9" fill="rgba(255,255,255,.6)"/>
        <rect x="1414" y="592" width="12" height="24" rx="6" fill="#b3763f" transform="rotate(-38 1420 604)"/></g>`;
      s += `<circle cx="1251" cy="330" r="4" fill="rgba(255,255,255,.75)"><animate attributeName="cy" values="330;316;330" dur="5.6s" repeatCount="indefinite"/></circle></g>`;

      /* ---------- EL CARTEL DEL ARCOÍRIS, en la franja de pared libre ---------- */
      s += `<g><rect x="1014" y="330" width="112" height="164" rx="10" fill="#c9955f"/>
        <rect x="1022" y="338" width="96" height="148" rx="6" fill="#fffaf2"/>
        ${[["#ef9aa8", 44], ["#f7c765", 33], ["#a8d6a0", 22], ["#8fc9d8", 11]].map(a =>
          `<path d="M${1070 - a[1]} 462 a${a[1]} ${a[1]} 0 0 1 ${a[1] * 2} 0" fill="none" stroke="${a[0]}" stroke-width="10"/>`).join("")}
        <circle cx="1042" cy="368" r="14" fill="#f7c765"/>
        <path d="M1080 372 q16 -12 30 0 q-14 8 -30 0 Z" fill="#dbeaf4"/>
        <rect x="1026" y="462" width="88" height="8" rx="4" fill="#a8d6a0"/></g>`;

      /* ---------- EL FONENDO colgado de su percha, debajo del cartel ----------
         la franja de pared entre el cartel y la cenefa se quedaba vacía */
      s += `<g><rect x="1063" y="504" width="14" height="12" rx="5" fill="#c9955f"/>
        <circle cx="1070" cy="506" r="7" fill="#b3763f"/>
        <path d="M1055 522 q-20 38 -9 62 q7 16 22 18" stroke="#5b8fa8" stroke-width="9" fill="none" stroke-linecap="round"/>
        <path d="M1085 522 q20 38 9 62 q-7 16 -22 18" stroke="#5b8fa8" stroke-width="9" fill="none" stroke-linecap="round"/>
        <circle cx="1055" cy="520" r="6" fill="#78909c"/><circle cx="1085" cy="520" r="6" fill="#78909c"/>
        <circle cx="1070" cy="592" r="17" fill="url(#cpoMetal)" stroke="#9fb0b8" stroke-width="4"/>
        <circle cx="1070" cy="592" r="9" fill="#f2f5f6"/></g>`;

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
     MÚSICA: un teatro ENTERO recorrido de sección en sección.

     El lienzo es ancho (4200 px) para que se pase a pie: primero la
     sala de CUERDA, luego la de VIENTO, después la de PERCUSIÓN y al
     final el ESCENARIO grande con su público.

     Lo que hace de transición entre sección y sección está dibujado:
     un arco de proscenio con sus columnas, un telón intermedio
     recogido con cordón y borla, la bambalina de arriba con flecos y
     un cambio de suelo con junta metálica. Antes del escenario hay,
     además, unas gradas que suben.

     La deco antigua estaba calculada para 2600 px y se descarta: todo
     el teatro se dibuja aquí. Siempre devolvemos UN SOLO <svg>.
     ============================================================ */
  (function () {

    /* Los dos puntos que añade 66-musica-icons.js (el pentagrama y las
       figuras) venían colocados para el lienzo antiguo de 2600 px.
       Aquí se llevan a su sitio del escenario nuevo. */
    const sitios = { "El pentagrama": [3170, 300], "Las figuras": [3860, 620] };
    ((THEMES.musica.content.explore.pois) || []).forEach(function (p) {
      const q = p.name && sitios[p.name.es];
      if (q) { p.x = q[0]; p.y = q[1]; }
    });

    THEMES.musica.content.explore.deco = function (e) {
      const W = e.width || 4200;
      const libre = libreCon(cajas(e, 1.5, 18));
      const TABLAS = 706;      /* la línea del suelo del teatro */
      const ALTO = 1100;
      let s = "";

      /* Fronteras de las cuatro secciones y de los tres pasos que
         las separan, en proporción al ancho. */
      const F = function (r) { return Math.round(W * r); };
      const P1 = F(.257), P1b = F(.281),   /* cuerda  -> paso 1 -> viento */
        P2 = F(.495), P2b = F(.519),       /* viento  -> paso 2 -> percusión */
        P3 = F(.664), P3b = F(.690);       /* percusión -> paso 3 -> escenario */
      const mez = function (a, b, t) { return a + (b - a) * t; };

      /* ---------- DEGRADADOS PROPIOS (prefijo musT, únicos) ---------- */
      s += `<defs>
        <linearGradient id="musTCuerda" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#2a0f2e"/><stop offset="58%" stop-color="#3d1436"/><stop offset="100%" stop-color="#24102a"/></linearGradient>
        <linearGradient id="musTViento" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1b1247"/><stop offset="58%" stop-color="#2a1c5e"/><stop offset="100%" stop-color="#181041"/></linearGradient>
        <linearGradient id="musTPercu" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#33122a"/><stop offset="58%" stop-color="#4a1730"/><stop offset="100%" stop-color="#2a0f24"/></linearGradient>
        <linearGradient id="musTEscena" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#240b2c"/><stop offset="56%" stop-color="#341040"/><stop offset="100%" stop-color="#1d0a26"/></linearGradient>
        <linearGradient id="musTTelon" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#8e1220"/><stop offset="45%" stop-color="#b3161f"/><stop offset="100%" stop-color="#6d0d18"/></linearGradient>
        <linearGradient id="musTTelonLat" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#7d0f1c"/><stop offset="46%" stop-color="#c01a24"/><stop offset="100%" stop-color="#7d0f1c"/></linearGradient>
        <linearGradient id="musTOro" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffe9a8"/><stop offset="50%" stop-color="#e8b74a"/><stop offset="100%" stop-color="#b58622"/></linearGradient>
        <linearGradient id="musTColumna" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#5b3f6b"/><stop offset="38%" stop-color="#8f6ba0"/><stop offset="100%" stop-color="#4a3158"/></linearGradient>
        <linearGradient id="musTTablaA" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#a8703f"/><stop offset="60%" stop-color="#8a5730"/><stop offset="100%" stop-color="#6d4c41"/></linearGradient>
        <linearGradient id="musTTablaB" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#8e6b46"/><stop offset="60%" stop-color="#6f5033"/><stop offset="100%" stop-color="#57402e"/></linearGradient>
        <linearGradient id="musTTablaC" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#4a3a48"/><stop offset="60%" stop-color="#3a2c3a"/><stop offset="100%" stop-color="#2a2030"/></linearGradient>
        <linearGradient id="musTTablaD" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#b98a52"/><stop offset="46%" stop-color="#9a6a3c"/><stop offset="100%" stop-color="#6f4a2c"/></linearGradient>
        <linearGradient id="musTBrillo" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="rgba(255,240,200,.26)"/><stop offset="100%" stop-color="rgba(255,240,200,0)"/></linearGradient>
        <radialGradient id="musTFoco" cx="50%" cy="0%" r="90%">
          <stop offset="0%" stop-color="rgba(255,245,200,.34)"/><stop offset="100%" stop-color="rgba(255,245,200,0)"/></radialGradient>
        <radialGradient id="musTFocoAzul" cx="50%" cy="0%" r="90%">
          <stop offset="0%" stop-color="rgba(180,225,255,.30)"/><stop offset="100%" stop-color="rgba(180,225,255,0)"/></radialGradient>
        <radialGradient id="musTFocoRosa" cx="50%" cy="0%" r="90%">
          <stop offset="0%" stop-color="rgba(255,190,220,.28)"/><stop offset="100%" stop-color="rgba(255,190,220,0)"/></radialGradient>
        <radialGradient id="musTVela" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="rgba(255,233,168,.55)"/><stop offset="100%" stop-color="rgba(255,233,168,0)"/></radialGradient>
        <linearGradient id="musTJunta" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="rgba(18,8,26,0)"/><stop offset="50%" stop-color="rgba(18,8,26,.5)"/><stop offset="100%" stop-color="rgba(18,8,26,0)"/></linearGradient>
        <linearGradient id="musTPeana" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#4a2f1d"/><stop offset="34%" stop-color="#7b5230"/><stop offset="100%" stop-color="#3a2417"/></linearGradient>
        <linearGradient id="musTAlfombra" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#8d2233"/><stop offset="100%" stop-color="#5d1322"/></linearGradient>
        <linearGradient id="musTSombraBaja" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="rgba(16,6,22,0)"/><stop offset="100%" stop-color="rgba(16,6,22,.42)"/></linearGradient>
        <linearGradient id="musTPizarra" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#2c3a34"/><stop offset="100%" stop-color="#1c2723"/></linearGradient>
      </defs>`;

      /* ---------- EL FONDO DE CADA SECCIÓN ---------- */
      const salas = [[0, P1b, "url(#musTCuerda)"], [P1, P2b, "url(#musTViento)"],
        [P2, P3b, "url(#musTPercu)"], [P3, W, "url(#musTEscena)"]];
      salas.forEach(function (z) {
        s += `<rect x="${z[0]}" y="0" width="${z[1] - z[0]}" height="${TABLAS + 8}" fill="${z[2]}"/>`;
      });
      /* las juntas de fondo se difuminan con un velo que se apaga por los dos
         lados: así el cambio de sala no deja una raya vertical dura */
      [[P1, P1b], [P2, P2b], [P3, P3b]].forEach(function (j) {
        s += `<rect x="${j[0] - 150}" y="0" width="${j[1] - j[0] + 300}" height="${TABLAS + 8}" fill="url(#musTJunta)"/>`;
      });

      /* ---------- PIEZAS QUE SOSTIENEN A LOS INSTRUMENTOS ----------
         Cada punto tiene que apoyarse en algo: hornacina en la pared,
         peana de museo, tarima o soporte. Calculamos por dónde acaba
         el dibujo de cada punto para que la peana le quede justo debajo. */
      const KSOP = 1.5;                  /* cuánto crecen los iconos: el mismo tope que pone el motor */
      const TINTA = tintas(e.pois);      /* dónde acaba el dibujo dentro de su caja */
      const punto = function (nombre) { return (e.pois || []).find(function (p) { return p.name && p.name.es === nombre; }); };
      const bajo = function (p) {
        const t = TINTA.get(p), alto = (p.ih || 80) * KSOP;
        return Math.round(p.y + alto * ((t ? t.pie : 1) - 0.5));
      };

      /* la hornacina: un hueco claro en la pared para que el instrumento resalte */
      const hornacina = function (cx, ancho, y0, y1) {
        const x0 = Math.round(cx - ancho / 2);
        return `<g><rect x="${x0}" y="${y0}" width="${ancho}" height="${y1 - y0}" rx="18" fill="rgba(255,255,255,.07)"/>
          <path d="M${x0 + 8} ${y0 + 54} q${ancho / 2 - 8} -66 ${ancho - 16} 0" fill="rgba(255,255,255,.05)"/>
          <rect x="${x0}" y="${y0}" width="${ancho}" height="${y1 - y0}" rx="18" fill="none" stroke="rgba(232,183,74,.34)" stroke-width="4"/>
          <rect x="${x0 + 15}" y="${y0 + 15}" width="${ancho - 30}" height="${y1 - y0 - 30}" rx="12" fill="none" stroke="rgba(232,183,74,.16)" stroke-width="3"/></g>`;
      };
      /* la peana: columna esbelta de madera con su basa, su fuste y su
         tapa dorada, como las de un museo de instrumentos */
      const peana = function (cx, ancho, arriba) {
        const a = ancho * 0.52;                       /* el fuste, más fino que la tapa */
        const x0 = n(cx - a / 2), xt = n(cx - ancho / 2);
        return `<g><ellipse cx="${cx}" cy="${TABLAS + 6}" rx="${n(ancho * 0.72)}" ry="12" fill="rgba(10,4,16,.34)"/>
          <rect x="${x0}" y="${arriba + 20}" width="${n(a)}" height="${TABLAS - arriba - 46}" fill="url(#musTPeana)"/>
          <rect x="${n(x0 + a * 0.16)}" y="${arriba + 20}" width="${n(a * 0.14)}" height="${TABLAS - arriba - 46}" fill="rgba(255,255,255,.12)"/>
          <rect x="${n(cx - ancho * 0.42)}" y="${TABLAS - 30}" width="${n(ancho * 0.84)}" height="16" rx="6" fill="#5b3a24"/>
          <rect x="${n(cx - ancho * 0.5)}" y="${TABLAS - 16}" width="${ancho}" height="16" rx="6" fill="#7b5230"/>
          <rect x="${n(cx - ancho * 0.5)}" y="${TABLAS - 14}" width="${ancho}" height="4" rx="2" fill="rgba(255,255,255,.24)"/>
          <rect x="${n(xt + ancho * 0.08)}" y="${arriba + 14}" width="${n(ancho * 0.84)}" height="10" rx="4" fill="#5b3a24"/>
          <rect x="${xt}" y="${arriba + 2}" width="${ancho}" height="14" rx="6" fill="url(#musTOro)"/>
          <rect x="${n(xt + 6)}" y="${arriba + 5}" width="${n(ancho - 12)}" height="4" rx="2" fill="rgba(255,255,255,.45)"/></g>`;
      };
      /* dónde se planta cada soporte: las sillas y los atriles se apartan
         para no quedarse medio escondidos detrás de una peana */
      const basas = [];
      const apunta = function (nombre, semi) {
        const p = punto(nombre);
        if (p) basas.push([p.x, semi]);
      };
      [["El violín", 48], ["El arpa", 63], ["La flauta", 60], ["La trompeta", 57], ["El saxofón", 48],
        ["La tuba", 82], ["El xilófono", 91], ["Los timbales", 128], ["Los platillos", 62],
        ["El violonchelo", 66], ["La guitarra", 54], ["El micrófono", 56], ["El podio de dirección", 92],
        ["El piano de cola", 168], ["Las figuras", 136]].forEach(function (q) { apunta(q[0], q[1]); });
      const libreSuelo = function (x, semi) {
        return !basas.some(function (b) { return Math.abs(b[0] - x) < b[1] + semi; });
      };

      /* la tarima baja: para lo que va casi tocando el suelo */
      const tarimaBaja = function (cx, ancho, arriba) {
        const x0 = Math.round(cx - ancho / 2), h = TABLAS - arriba;
        return `<g><ellipse cx="${cx}" cy="${TABLAS + 8}" rx="${ancho * 0.62}" ry="12" fill="rgba(10,4,16,.32)"/>
          <rect x="${x0}" y="${arriba + 10}" width="${ancho}" height="${h - 10}" rx="6" fill="#5b3a24"/>
          <rect x="${x0 - 8}" y="${arriba}" width="${ancho + 16}" height="14" rx="6" fill="#7b5230"/>
          <rect x="${x0 - 8}" y="${arriba + 2}" width="${ancho + 16}" height="4" rx="2" fill="rgba(255,255,255,.28)"/></g>`;
      };

      /* ================= SECCIÓN DE CUERDA (0 a P1) =================
         Zócalo de madera, una hornacina detrás de cada instrumento
         de exposición y apliques encendidos entre medias. */
      s += `<rect x="0" y="${TABLAS - 168}" width="${P1b}" height="168" fill="rgba(120,72,38,.35)"/>
        <rect x="0" y="${TABLAS - 172}" width="${P1b}" height="10" rx="4" fill="#8a5730"/>`;
      /* el entrepaño de la pared: tablillas verticales suaves, para que
         entre hornacina y hornacina la pared no se quede lisa */
      for (let x = 40; x < P1 - 20; x += 116) {
        s += `<path d="M${x} 200 v330" stroke="rgba(255,255,255,.05)" stroke-width="9"/>
          <path d="M${x + 9} 200 v330" stroke="rgba(0,0,0,.10)" stroke-width="5"/>`;
      }
      /* hornacinas de los instrumentos que se exponen en la pared */
      [["El violín", 220], ["El arpa", 250]].forEach(function (h) {
        const p = punto(h[0]);
        if (p) s += hornacina(p.x, h[1], 196, bajo(p) + 26);
      });
      /* apliques de pared con su lucecita, entre hornacina y hornacina */
      [120, 380, 620, 880].forEach(function (x, i) {
        s += `<g><circle cx="${x}" cy="300" r="46" fill="url(#musTVela)"><animate attributeName="opacity" values=".9;.6;.9" dur="${5 + i}s" repeatCount="indefinite"/></circle>
          <path d="M${x - 16} 292 q16 -22 32 0 q-16 10 -32 0 Z" fill="url(#musTOro)"/>
          <rect x="${x - 4}" y="292" width="8" height="34" rx="4" fill="#b58622"/></g>`;
      });

      /* ================= SECCIÓN DE VIENTO (P1b a P2) =================
         Pentagrama grande en la pared, hornacinas y pilastras acanaladas.
         Las pilastras van en los huecos entre instrumento e instrumento,
         así la pared nunca se queda pelada. */
      for (let i = 0; i < 5; i++) {
        s += `<line x1="${P1b + 40}" y1="${270 + i * 26}" x2="${P2 - 40}" y2="${270 + i * 26}" stroke="rgba(255,255,255,.16)" stroke-width="3"/>`;
      }
      [["La flauta", 230], ["La trompeta", 220], ["El saxofón", 200]].forEach(function (h) {
        const p = punto(h[0]);
        if (p) s += hornacina(p.x, h[1], 196, bajo(p) + 26);
      });
      [1365, 1615, 1865].forEach(function (x) {
        s += `<rect x="${x - 26}" y="190" width="52" height="${TABLAS - 190}" rx="8" fill="url(#musTColumna)" opacity=".55"/>
          <rect x="${x - 12}" y="200" width="6" height="${TABLAS - 216}" fill="rgba(255,255,255,.12)"/>
          <rect x="${x + 4}" y="200" width="6" height="${TABLAS - 216}" fill="rgba(0,0,0,.18)"/>
          <rect x="${x - 34}" y="176" width="68" height="20" rx="8" fill="url(#musTOro)" opacity=".7"/>`;
      });

      /* ================= SECCIÓN DE PERCUSIÓN (P2b a P3) =================
         Paneles de listones que rebotan el sonido y un gong colgado. */
      for (let x = P2b + 40; x < P3 - 30; x += 34) {
        const alto = 250 + ((x * 7) % 90);
        s += `<rect x="${x}" y="${TABLAS - alto}" width="14" height="${alto}" rx="6" fill="rgba(255,255,255,.06)"/>
          <rect x="${x}" y="${TABLAS - alto}" width="4" height="${alto}" fill="rgba(255,255,255,.10)"/>`;
      }
      const gongX = Math.round(mez(P2b, P3, .5));
      if (libre(gongX - 104, 200, 208, 300)) {
        s += `<g>
          <rect x="${gongX - 112}" y="${TABLAS - 40}" width="34" height="40" rx="8" fill="#4a2f1d"/>
          <rect x="${gongX + 78}" y="${TABLAS - 40}" width="34" height="40" rx="8" fill="#4a2f1d"/>
          <rect x="${gongX - 100}" y="228" width="12" height="${TABLAS - 268}" rx="6" fill="#5b3a24"/>
          <rect x="${gongX + 88}" y="228" width="12" height="${TABLAS - 268}" rx="6" fill="#5b3a24"/>
          <rect x="${gongX - 108}" y="216" width="216" height="16" rx="8" fill="#6f4526"/>
          <path d="M${gongX - 62} 232 v34 M${gongX + 62} 232 v34" stroke="#e8c25c" stroke-width="5"/>
          <g><animateTransform attributeName="transform" type="rotate" values="-1.4 ${gongX} 232;1.4 ${gongX} 232;-1.4 ${gongX} 232" dur="9s" repeatCount="indefinite"/>
            <circle cx="${gongX}" cy="352" r="88" fill="url(#musTOro)" opacity=".92"/>
            <circle cx="${gongX}" cy="352" r="88" fill="none" stroke="#8a5f14" stroke-width="6"/>
            <circle cx="${gongX}" cy="352" r="62" fill="none" stroke="rgba(120,80,16,.5)" stroke-width="4"/>
            <circle cx="${gongX}" cy="352" r="32" fill="none" stroke="rgba(120,80,16,.45)" stroke-width="4"/>
            <circle cx="${gongX - 26}" cy="326" r="17" fill="rgba(255,255,255,.28)"/></g></g>`;
      }

      /* ================= EL ESCENARIO (P3b a W) =================
         Telón principal abierto, fondo con pentagrama ondulado,
         palcos con público y candilejas al borde de las tablas. */
      s += `<rect x="${P3b}" y="150" width="${W - P3b}" height="${TABLAS - 150}" fill="rgba(20,8,26,.5)"/>`;
      /* el pentagrama del fondo, ondulado */
      for (let i = 0; i < 5; i++) {
        let d = `M${P3b + 60} ${300 + i * 26}`;
        for (let x = P3b + 60; x < W - 90; x += 300) d += ` q75 -30 150 0 q75 30 150 0`;
        s += `<path d="${d}" fill="none" stroke="rgba(255,255,255,.13)" stroke-width="3"/>`;
      }
      /* el telón principal, recogido a los dos lados */
      const telon = function (x0, x1, izq) {
        let g = `<path d="M${x0} 120 H${x1} V${TABLAS} H${x0} Z" fill="url(#musTTelonLat)"/>`;
        for (let i = 0; i < 4; i++) {
          const x = x0 + 30 + i * ((x1 - x0 - 60) / 3);
          g += `<path d="M${n(x)} 120 q${izq ? 18 : -18} ${(TABLAS - 120) / 2} 0 ${TABLAS - 120}" stroke="rgba(0,0,0,.26)" stroke-width="22" fill="none"/>
            <path d="M${n(x + 22)} 120 q${izq ? -14 : 14} ${(TABLAS - 120) / 2} 0 ${TABLAS - 120}" stroke="rgba(255,190,180,.14)" stroke-width="12" fill="none"/>`;
        }
        const bx = izq ? x1 : x0;
        g += `<path d="M${bx} 120 q${izq ? -26 : 26} 170 0 320 q${izq ? 26 : -26} 150 0 ${TABLAS - 440}" stroke="rgba(0,0,0,.3)" stroke-width="12" fill="none"/>`;
        const cx = izq ? x1 - 34 : x0 + 34;
        g += `<path d="M${izq ? x0 : x1} 400 q${izq ? 100 : -100} 40 ${izq ? 190 : -190} 6" stroke="url(#musTOro)" stroke-width="11" fill="none"/>
          <circle cx="${cx}" cy="424" r="14" fill="url(#musTOro)"/>
          <path d="M${cx - 16} 436 q16 -10 32 0 l-7 40 q-9 10 -18 0 Z" fill="url(#musTOro)"/>
          ${[-10, -3, 4, 11].map(function (d) { return `<line x1="${cx + d}" y1="472" x2="${n(cx + d * 1.6)}" y2="504" stroke="#e8c25c" stroke-width="4"/>`; }).join("")}`;
        return g;
      };
      s += telon(P3b, P3b + 230, true) + telon(W - 190, W, false);
      /* los palcos del escenario, con su público asomado */
      const palco = function (x0) {
        let g = `<path d="M${x0 - 12} 190 q113 -28 250 0 l0 54 q-125 -26 -250 0 Z" fill="url(#musTTelon)"/>
          <path d="M${x0 - 12} 238 q125 -26 250 0" stroke="url(#musTOro)" stroke-width="7" fill="none"/>`;
        [[44, 316, "#f3c39e"], [112, 308, "#c98e62"], [180, 318, "#f6d5b8"]].forEach(function (p) {
          g += `<circle cx="${x0 + p[0]}" cy="${p[1]}" r="20" fill="${p[2]}"/>
            <path d="M${x0 + p[0] - 20} ${p[1] - 6} q20 -24 40 0 q-20 -10 -40 0 Z" fill="rgba(60,26,44,.85)"/>
            <path d="M${x0 + p[0] - 34} ${p[1] + 46} q34 -32 68 0 Z" fill="rgba(60,26,44,.8)"/>`;
        });
        g += `<path d="M${x0 - 8} 344 h246 v54 q0 22 -32 22 h-182 q-32 0 -32 -22 Z" fill="#5c1730"/>
          <path d="M${x0 - 8} 352 h246" stroke="url(#musTOro)" stroke-width="6"/>
          <path d="M${x0 - 2} 410 q124 20 234 0" stroke="url(#musTOro)" stroke-width="5" fill="none"/>`;
        for (let i = 0; i < 4; i++) {
          const cx = x0 + 28 + i * 62;
          g += `<circle cx="${cx}" cy="378" r="11" fill="none" stroke="url(#musTOro)" stroke-width="4"/>
            <circle cx="${cx}" cy="378" r="3.4" fill="#e8c25c"/>`;
        }
        g += `<circle cx="${x0 + 244}" cy="302" r="13" fill="#ffe9a8"/>
          <circle cx="${x0 + 244}" cy="302" r="26" fill="rgba(255,233,168,.2)"/>
          <path d="M${x0 + 244} 276 v-18" stroke="#b58622" stroke-width="4"/>`;
        return g;
      };
      /* uno a cada lado de la boca del escenario, como en un teatro de verdad */
      [P3b + 16, W - 268].forEach(function (x0) {
        if (!libre(x0 - 14, 176, 220, 200)) return;
        s += `<g transform="translate(${x0} 26) scale(.8)">${palco(0)}</g>`;
      });

      /* ---------- EL SUELO: una tarima distinta por sección,
                    con la junta metálica marcando el cambio ---------- */
      /* Cada suelo se corta EN DIAGONAL, siguiendo la junta de los tablones:
         así el cambio de madera de una sala a otra no deja una raya vertical,
         sino la misma línea que ya tienen todas las tablas. */
      const SESGO = 70;   /* lo que se desplaza un tablón del fondo al frente */
      const suelos = [[-SESGO, P1b, "url(#musTTablaA)", 300], [P1, P2b, "url(#musTTablaB)", 260],
        [P2, P3b, "url(#musTTablaC)", 220], [P3, W + SESGO, "url(#musTTablaD)", 340]];
      suelos.forEach(function (z) {
        s += `<path d="M${z[0]} ${TABLAS} H${z[1]} L${z[1] - SESGO} ${ALTO} H${z[0] - SESGO} Z" fill="${z[2]}"/>
          <path d="M${z[0]} ${TABLAS} H${z[1]} v7 H${z[0]} Z" fill="rgba(255,214,170,.32)"/>`;
        for (let x = z[0] + 40; x < z[1]; x += z[3]) {
          s += `<line x1="${x}" y1="${TABLAS}" x2="${x - 70}" y2="${ALTO}" stroke="rgba(20,10,6,.3)" stroke-width="4"/>`;
        }
        for (let x = z[0] + 60, i = 0; x < z[1] - 60; x += 240, i++) {
          const y = TABLAS + 26 + (i % 3) * 22;
          s += `<path d="M${x} ${y} q34 ${i % 2 ? 7 : -7} 68 0" stroke="rgba(20,10,6,.18)" stroke-width="3" fill="none"/>`;
        }
      });
      /* el brillo del suelo del escenario, que es el más pulido */
      s += `<rect x="${P3}" y="${TABLAS}" width="${W - P3}" height="${ALTO - TABLAS}" fill="url(#musTBrillo)"/>`;
      /* la junta metálica va justo encima del corte, y en paralelo a los
         tablones: remata el cambio de madera en vez de cruzarlo */
      [P1, P2, P3].forEach(function (x0) {
        s += `<path d="M${x0} ${TABLAS} h26 L${x0 + 26 - SESGO} ${ALTO} H${x0 - SESGO} Z" fill="rgba(210,220,228,.2)"/>
          <path d="M${x0} ${TABLAS} L${x0 - SESGO} ${ALTO}" stroke="rgba(240,248,255,.42)" stroke-width="5"/>
          <path d="M${x0 + 26} ${TABLAS} L${x0 + 26 - SESGO} ${ALTO}" stroke="rgba(240,248,255,.24)" stroke-width="4"/>`;
      });

      /* ---------- EL PRIMER PLANO: alfombras y bultos en el suelo,
                    para que delante del todo también haya algo ---------- */
      const alfombra = function (x0, x1, y0, alto) {
        return `<g><path d="M${x0} ${y0} H${x1} L${x1 - 26} ${y0 + alto} H${x0 - 26} Z" fill="url(#musTAlfombra)" opacity=".85"/>
          <path d="M${x0 + 18} ${y0 + 14} H${x1 - 18} L${x1 - 40} ${y0 + alto - 14} H${x0 - 8} Z" fill="none" stroke="rgba(255,214,140,.35)" stroke-width="4"/>
          <path d="M${x0 + 40} ${y0 + 30} H${x1 - 40} L${x1 - 58} ${y0 + alto - 30} H${x0 + 14} Z" fill="none" stroke="rgba(255,214,140,.18)" stroke-width="3"/></g>`;
      };
      s += alfombra(120, 960, 902, 112) + alfombra(1268, 2010, 892, 108)
        + alfombra(2118, 2470, 856, 104) + alfombra(3250, 3660, 884, 104);
      /* el suelo de percusión era la baldosa más lisa del teatro: se le
         añaden dos baquetas cruzadas y una pandereta dejadas en la alfombra */
      s += `<g><ellipse cx="2230" cy="928" rx="94" ry="15" fill="rgba(10,4,16,.28)"/>
        <g transform="translate(2230 900) rotate(-15)"><rect x="-88" y="-5" width="152" height="10" rx="5" fill="#c39a63"/>
          <rect x="-88" y="-5" width="152" height="3" rx="1.5" fill="rgba(255,255,255,.22)"/>
          <circle cx="72" cy="0" r="15" fill="#efe2c6"/></g>
        <g transform="translate(2230 900) rotate(12)"><rect x="-88" y="-5" width="152" height="10" rx="5" fill="#a8703f"/>
          <circle cx="72" cy="0" r="15" fill="#e0cfae"/></g></g>`;
      s += `<g><ellipse cx="2420" cy="900" rx="46" ry="15" fill="rgba(10,4,16,.3)"/>
        <ellipse cx="2420" cy="892" rx="44" ry="15" fill="#8a5730"/>
        <ellipse cx="2420" cy="886" rx="44" ry="15" fill="#b98a52"/>
        <ellipse cx="2420" cy="886" rx="31" ry="10" fill="#f2e2c8"/>
        ${[-34, -12, 12, 34].map(function (d) { return `<ellipse cx="${2420 + d}" cy="${d % 24 ? 876 : 896}" rx="7" ry="4" fill="url(#musTOro)"/>`; }).join("")}</g>`;
      /* el cable del micro, que se pierde por delante entre los bultos */
      s += `<path d="M3630 706 q-58 96 -186 132 q-160 44 -224 156" stroke="rgba(12,6,20,.5)" stroke-width="8" fill="none" stroke-linecap="round"/>
        <path d="M3630 706 q-58 96 -186 132 q-160 44 -224 156" stroke="rgba(126,116,136,.32)" stroke-width="3" fill="none" stroke-linecap="round"/>`;
      /* estuches de instrumento cerrados, tumbados en el suelo */
      const estuche = function (cx, cy, ancho, giro) {
        const a = n(ancho), h = n(ancho * 0.38);
        return `<g transform="translate(${cx} ${cy}) rotate(${giro})">
          <ellipse cx="0" cy="${n(h / 2 + 6)}" rx="${n(a * 0.54)}" ry="${n(h * 0.24)}" fill="rgba(10,4,16,.3)"/>
          <rect x="${n(-a / 2)}" y="${n(-h / 2)}" width="${a}" height="${h}" rx="${n(h / 2)}" fill="#4a2f1d"/>
          <rect x="${n(-a / 2 + 8)}" y="${n(-h / 2 + 5)}" width="${n(a - 16)}" height="${n(h * 0.3)}" rx="${n(h * 0.15)}" fill="rgba(255,255,255,.08)"/>
          <rect x="${n(-a / 2 + 4)}" y="-3" width="${n(a - 8)}" height="6" rx="3" fill="#c9a13c" opacity=".55"/>
          <rect x="${n(-a * 0.1)}" y="${n(-h / 2 - 5)}" width="${n(a * 0.2)}" height="8" rx="4" fill="#c9a13c"/>
          <rect x="${n(-a * 0.32)}" y="-4" width="10" height="8" rx="3" fill="#e8c25c"/>
          <rect x="${n(a * 0.24)}" y="-4" width="10" height="8" rx="3" fill="#e8c25c"/></g>`;
      };
      s += estuche(700, 962, 196, -3) + estuche(1880, 948, 176, 4) + estuche(2320, 986, 156, -5)
        + estuche(3120, 1004, 186, 3);
      /* la banqueta del piano y el cable del micro, que cruzan el primer plano */
      s += `<g><ellipse cx="3392" cy="836" rx="104" ry="18" fill="rgba(10,4,16,.28)"/>
        <rect x="3306" y="770" width="172" height="26" rx="11" fill="#7a1e2c"/>
        <rect x="3312" y="774" width="160" height="9" rx="4" fill="rgba(255,255,255,.16)"/>
        <path d="M3322 796 l-10 44 M3462 796 l10 44 M3348 796 l-6 42 M3436 796 l6 42" stroke="#4a2f1d" stroke-width="9" stroke-linecap="round"/></g>
`;

      /* ---------- LOS PASOS DE UNA SECCIÓN A OTRA:
                    arco de proscenio, telón intermedio y borlas ---------- */
      const arco = function (x0, x1, conGradas) {
        const cx = Math.round((x0 + x1) / 2), ancho = 54;
        const xa = x0 - ancho / 2 - 14, xb = x1 + ancho / 2 + 14;
        let g = "";
        /* el hueco oscuro del paso: por él se ve el fondo de la sala siguiente */
        g += `<rect x="${x0}" y="214" width="${x1 - x0}" height="${TABLAS - 214}" fill="rgba(10,4,16,.45)"/>`;
        /* las dos columnas, con su capitel dorado y su basa */
        [x0 - ancho / 2, x1 - ancho / 2].forEach(function (bx) {
          g += `<rect x="${bx}" y="286" width="${ancho}" height="${TABLAS - 286}" rx="10" fill="url(#musTColumna)"/>
            <rect x="${bx + 12}" y="300" width="7" height="${TABLAS - 326}" fill="rgba(255,255,255,.16)"/>
            <rect x="${bx + 30}" y="300" width="7" height="${TABLAS - 326}" fill="rgba(0,0,0,.22)"/>
            <rect x="${bx - 12}" y="${TABLAS - 44}" width="${ancho + 24}" height="44" rx="10" fill="#4a3158"/>
            <rect x="${bx - 14}" y="266" width="${ancho + 28}" height="26" rx="10" fill="url(#musTOro)"/>
            <rect x="${bx - 8}" y="272" width="${ancho + 16}" height="7" rx="3" fill="rgba(255,255,255,.5)"/>`;
        });
        /* el dintel curvo que une las dos columnas, por debajo de la bambalina */
        g += `<path d="M${xa} 292 Q${cx} 226 ${xb} 292 L${xb} 330 Q${cx} 264 ${xa} 330 Z" fill="url(#musTTelon)"/>
          <path d="M${xa} 292 Q${cx} 226 ${xb} 292" stroke="url(#musTOro)" stroke-width="8" fill="none"/>
          <path d="M${xa} 330 Q${cx} 264 ${xb} 330" stroke="url(#musTOro)" stroke-width="5" fill="none"/>`;
        /* el telón intermedio: cae del dintel y se recoge a los dos lados */
        /* La caída era tan estrecha que el alzapaños quedaba colgado en el
           vano oscuro, sin tela debajo. Se ensancha la tela y el cordón, el
           nudo y la borla se apoyan encima de ella. */
        [[x0, 1], [x1, -1]].forEach(function (p) {
          const lado = p[1], cb = p[0] + 15 * lado;
          g += `<path d="M${p[0]} 308 q${50 * lado} 118 ${16 * lado} 240 q${-16 * lado} 90 ${18 * lado} ${TABLAS - 552} L${p[0] + 66 * lado} ${TABLAS - 4} L${p[0]} ${TABLAS - 4} Z" fill="url(#musTTelon)" opacity=".92"/>
            <path d="M${p[0] + 20 * lado} 322 q${14 * lado} 140 0 ${TABLAS - 352}" stroke="rgba(0,0,0,.26)" stroke-width="12" fill="none"/>
            <path d="M${p[0]} 468 q${20 * lado} 2 ${28 * lado} 16" stroke="url(#musTOro)" stroke-width="7" fill="none" stroke-linecap="round"/>
            <circle cx="${cb}" cy="490" r="9" fill="url(#musTOro)"/>
            <path d="M${cb - 9} 498 q9 -6 18 0 l-4 28 q-5 6 -10 0 Z" fill="url(#musTOro)"/>
            ${[-4, 0, 4].map(function (d) { return `<line x1="${cb + d}" y1="526" x2="${n(cb + d * 1.4)}" y2="540" stroke="#e8c25c" stroke-width="3"/>`; }).join("")}`;
        });
        /* un escalón de verdad: canto de madera arriba y frente de madera
           oscura, con los lados en paralelo a los tablones. El frente iba
           antes con un velo translúcido que sobre el suelo oscuro de la sala
           de percusión no se veía: solo quedaban tres rayas pálidas. */
        const peldano = function (cxp, semi, y, alto, tono) {
          const d = n(SESGO * alto / (ALTO - TABLAS));
          return `<path d="M${cxp - semi} ${y} H${cxp + semi} L${n(cxp + semi - d)} ${y + alto} H${n(cxp - semi - d)} Z" fill="${tono}"/>
            <path d="M${n(cxp - semi - d)} ${y + alto} H${n(cxp + semi - d)}" stroke="rgba(10,4,16,.45)" stroke-width="4"/>
            <rect x="${cxp - semi}" y="${y - 12}" width="${semi * 2}" height="13" rx="5" fill="#7b5230"/>
            <rect x="${cxp - semi}" y="${y - 12}" width="${semi * 2}" height="4" rx="2" fill="rgba(255,233,168,.5)"/>`;
        };
        /* antes del escenario, las gradas que suben de verdad. Se estrechan:
           el peldaño de abajo medía 776 px y se metía media sala adentro. */
        if (conGradas) {
          const tonos = ["#432a1a", "#4e3120", "#593826"];
          for (let i = 0; i < 3; i++) {
            g += peldano(cx, 132 + i * 76, TABLAS + 104 + i * 58, 48, tonos[i]);
          }
        }
        return g;
      };
      s += arco(P1, P1b, false) + arco(P2, P2b, false) + arco(P3, P3b, true);

      /* ---------- LA BAMBALINA DE ARRIBA, de punta a punta ---------- */
      const vanos = 12, paso = W / vanos;
      let festón = `M0 150`;
      for (let i = 0; i < vanos; i++) festón += ` q${paso / 2} 58 ${paso} 0`;
      s += `<path d="M0 0 H${W} V150 ${festón.replace("M0 150", "")} Z" fill="url(#musTTelon)"/>`;
      for (let x = 26; x < W; x += 148) {
        s += `<path d="M${x} 0 q13 78 0 152" stroke="rgba(0,0,0,.22)" stroke-width="18" fill="none"/>`;
      }
      s += `<path d="${festón}" fill="none" stroke="url(#musTOro)" stroke-width="9"/>`;
      for (let i = 1; i < vanos; i++) {
        const x = Math.round(i * paso), y = i % 2 ? 176 : 152;
        s += `<g><path d="M${x} ${y} v18" stroke="#d9a93c" stroke-width="5"/>
          <path d="M${x - 15} ${y + 18} q15 -8 30 0 l-6 30 q-9 8 -18 0 Z" fill="url(#musTOro)"/>
          ${[-9, -3, 3, 9].map(function (d) { return `<line x1="${x + d}" y1="${y + 44}" x2="${n(x + d * 1.5)}" y2="${y + 62}" stroke="#e8c25c" stroke-width="3"/>`; }).join("")}</g>`;
      }

      /* ---------- LOS FOCOS COLGADOS, con su haz por sección ---------- */
      s += `<rect x="90" y="26" width="${W - 180}" height="20" rx="8" fill="#2b2b33"/>
        <rect x="90" y="30" width="${W - 180}" height="5" rx="2" fill="rgba(255,255,255,.16)"/>`;
      const tintes = ["url(#musTFoco)", "url(#musTFocoAzul)", "url(#musTFoco)", "url(#musTFocoRosa)"];
      for (let x = 200, i = 0; x < W - 140; x += 300, i++) {
        s += `<path d="M${x} 46 v14" stroke="#2b2b33" stroke-width="7"/>
          <polygon points="${x - 26},96 ${x + 26},96 ${x + 176},${TABLAS} ${x - 176},${TABLAS}" fill="${tintes[i % 4]}"${i % 3 === 0 ? `><animate attributeName="opacity" values=".85;1;.85" dur="${7 + (i % 5)}s" repeatCount="indefinite"/></polygon>` : "/>"}
          <path d="M${x - 22} 58 h44 l10 40 h-64 Z" fill="#3a3a44"/>
          <rect x="${x - 26}" y="94" width="52" height="10" rx="5" fill="#22222a"/>
          <ellipse cx="${x}" cy="98" rx="19" ry="6" fill="#ffe9a8" opacity=".9"/>`;
      }

      /* ---------- LAS NOTAS que flotan despacio por todo el teatro ---------- */
      const nota = function (tipo, c) {
        let g = `<ellipse cx="0" cy="0" rx="14" ry="10" transform="rotate(-20)" fill="${tipo === "blanca" ? "none" : c}" stroke="${c}" stroke-width="${tipo === "blanca" ? 4 : 0}"/>`;
        g += `<path d="M13 -4 V-62" stroke="${c}" stroke-width="4.5" stroke-linecap="round"/>`;
        if (tipo === "corchea") g += `<path d="M13 -62 q26 10 20 36 q-2 -18 -20 -22 Z" fill="${c}"/>`;
        if (tipo === "doble") g += `<path d="M13 -62 q26 10 20 34 q-2 -16 -20 -20 Z" fill="${c}"/><path d="M13 -44 q26 10 20 34 q-2 -16 -20 -20 Z" fill="${c}"/>`;
        return g;
      };
      const tipos = ["corchea", "negra", "doble", "blanca"];
      /* los pasos de una sala a otra son escenografía, no pared: una nota
         encima del dintel dorado se leía como un palillo cruzando el arco.
         Si le toca ahí, la nota se corre a la sala de al lado. */
      const pasos = [[P1, P1b], [P2, P2b], [P3, P3b]];
      const enPaso = function (x) { return pasos.some(function (a) { return x > a[0] - 96 && x < a[1] + 96; }); };
      for (let i = 0; i < 13; i++) {
        let x = Math.round(W * (0.045 + i * 0.075));
        const y = 232 + ((i * 53) % 84);
        if (enPaso(x)) x -= 168;
        if (enPaso(x)) continue;
        if (!libre(x - 26, y - 74, 56, 96)) continue;
        s += `<g transform="translate(${x} ${y}) scale(${(0.82 + (i % 4) * 0.06).toFixed(2)})" opacity=".72">
          <g><animateTransform attributeName="transform" type="translate" values="0 0;0 -22;0 0" dur="${9 + (i % 5) * 1.7}s" repeatCount="indefinite"/>
          ${nota(tipos[i % 4], i % 3 === 0 ? "#ffe6a0" : "#ffffff")}</g></g>`;
      }

      /* ---------- LAS SILLAS Y LOS ATRILES de cada sección ---------- */
      const silla = function (x, y) {
        return `<g><path d="M${x - 26} ${y} q26 -12 52 0 l4 44 q-30 10 -60 0 Z" fill="#7a1e2c"/>
          <path d="M${x - 26} ${y} q26 -12 52 0" fill="none" stroke="rgba(255,255,255,.18)" stroke-width="4"/>
          <rect x="${x - 32}" y="${y + 46}" width="64" height="14" rx="6" fill="#8d2a38"/>
          <path d="M${x - 26} ${y + 60} l-8 36 M${x + 26} ${y + 60} l8 36 M${x - 20} ${y + 60} l-2 34 M${x + 20} ${y + 60} l2 34" stroke="#4a2f1d" stroke-width="6" stroke-linecap="round"/></g>`;
      };
      const atril = function (x, y) {
        return `<g><path d="M${x - 46} ${y} h92 l-6 40 h-80 Z" fill="#3d3a48" transform="rotate(-8 ${x} ${y + 20})"/>
          <path d="M${x - 40} ${y + 6} h80" stroke="rgba(255,255,255,.25)" stroke-width="4" transform="rotate(-8 ${x} ${y + 20})"/>
          <rect x="${x - 5}" y="${y + 34}" width="10" height="86" rx="5" fill="#4b4655"/>
          <path d="M${x} ${y + 120} l-32 20 M${x} ${y + 120} l32 20 M${x} ${y + 120} v22" stroke="#4b4655" stroke-width="7" stroke-linecap="round"/></g>`;
      };
      /* Cuando una silla o un atril caen justo donde hay una peana, se
         corren un poco a un lado en vez de desaparecer: así la orquesta
         sigue completa y no quedan calvas en el suelo. */
      const tomados = [];
      const aparta = function (x, semi, x0, x1) {
        const saltos = [0, 74, -74, 128, -128, 176, -176];
        for (let i = 0; i < saltos.length; i++) {
          const c = x + saltos[i];
          const chocan = tomados.some(function (t) { return Math.abs(t[0] - c) < t[1] + semi; });
          if (c > x0 && c < x1 && !chocan && libreSuelo(c, semi)) { tomados.push([c, semi]); return c; }
        }
        return null;
      };
      /* sillas repartidas por las tres salas, cada una con su atril al lado */
      [[60, P1 - 60, 210], [P1b + 60, P2 - 60, 230], [P2b + 60, P3 - 60, 250]].forEach(function (z) {
        for (let x = z[0]; x < z[1]; x += z[2]) {
          const c = aparta(x, 26, z[0] - 40, z[1] + 40);
          if (c === null) continue;
          const y = TABLAS - 66 + ((c * 7) % 26);
          if (libre(c - 36, y - 6, 72, 110)) s += silla(c, y);
          const a = aparta(c + 98, 24, z[0] - 40, z[1] + 40);
          const ay = TABLAS - 108 + ((c * 11) % 22);
          if (a !== null && libre(a - 52, ay - 14, 104, 170)) s += atril(a, ay);
        }
      });
      /* algún atril suelto en el escenario, esperando a su músico */
      for (let x = P3b + 480; x < W - 260; x += 320) {
        const c = aparta(x, 28, P3b + 440, W - 220);
        if (c === null) continue;
        const y = TABLAS - 108 + ((c * 11) % 22);
        if (libre(c - 52, y - 14, 104, 170)) s += atril(c, y);
      }

      /* ---------- CADA PUNTO, APOYADO EN ALGO ----------
         Peanas de exposición, tarimas y soportes debajo de lo que antes
         se quedaba flotando en el aire. */
      [["El violín", 80], ["El arpa", 110], ["La flauta", 104], ["La trompeta", 98], ["El saxofón", 80]].forEach(function (q) {
        const p = punto(q[0]);
        if (p) s += peana(p.x, q[1], bajo(p) - 4);
      });
      [["La tuba", 140], ["El xilófono", 158]].forEach(function (q) {
        const p = punto(q[0]);
        if (p) s += tarimaBaja(p.x, q[1], bajo(p) - 4);
      });
      /* el chelo y la guitarra tampoco llegaban al suelo: se quedaban medio
         centenar de píxeles en el aire con la sombra muy por debajo. Ahora
         descansan en su tarima baja, como la tuba y el xilófono. */
      [["El violonchelo", 124], ["La guitarra", 100]].forEach(function (q) {
        const p = punto(q[0]);
        if (p) s += tarimaBaja(p.x, q[1], bajo(p) - 4);
      });
      /* la tarima de percusión, en dos alturas, debajo de los timbales */
      const tim = punto("Los timbales");
      if (tim) {
        const y0 = bajo(tim) - 4, y1 = y0 + 104, d = n(SESGO * (TABLAS - y1) / (ALTO - TABLAS));
        s += `<g><path d="M${tim.x - 108} ${y1} H${tim.x + 108} L${n(tim.x + 108 - d)} ${TABLAS} H${n(tim.x - 108 - d)} Z" fill="#4a2f1d"/>
          <path d="M${tim.x - 70} ${y1} l${n(-d)} ${TABLAS - y1} M${tim.x + 10} ${y1} l${n(-d)} ${TABLAS - y1}" stroke="rgba(20,10,6,.35)" stroke-width="4"/>
          <rect x="${tim.x - 116}" y="${y1 - 14}" width="232" height="16" rx="6" fill="#7b5230"/>
          <rect x="${tim.x - 116}" y="${y1 - 12}" width="232" height="4" rx="2" fill="rgba(255,255,255,.28)"/>
          <rect x="${tim.x - 84}" y="${y0 + 14}" width="168" height="${y1 - y0 - 14}" fill="url(#musTPeana)"/>
          <rect x="${tim.x - 94}" y="${y0}" width="188" height="16" rx="6" fill="#7b5230"/>
          <rect x="${tim.x - 94}" y="${y0 + 2}" width="188" height="5" rx="2" fill="rgba(255,255,255,.3)"/></g>`;
      }
      /* el soporte de los platillos: pie de tres patas, como el de verdad */
      const pla = punto("Los platillos");
      if (pla) {
        const y0 = bajo(pla) - 2;
        s += `<g><ellipse cx="${pla.x}" cy="${TABLAS + 6}" rx="58" ry="12" fill="rgba(10,4,16,.3)"/>
          <rect x="${pla.x - 5}" y="${y0}" width="10" height="${TABLAS - y0 - 18}" rx="5" fill="#5c6670"/>
          <path d="M${pla.x} ${TABLAS - 20} l-44 26 M${pla.x} ${TABLAS - 20} l44 26 M${pla.x} ${TABLAS - 20} v26" stroke="#5c6670" stroke-width="9" stroke-linecap="round"/>
          <rect x="${pla.x - 15}" y="${y0 - 9}" width="30" height="13" rx="6" fill="#c9a13c"/></g>`;
      }
      /* el pie del micrófono, que baja hasta las tablas */
      const mic = punto("El micrófono");
      if (mic) {
        const y0 = bajo(mic) - 2;
        s += `<g><ellipse cx="${mic.x}" cy="${TABLAS + 4}" rx="52" ry="12" fill="rgba(10,4,16,.32)"/>
          <rect x="${mic.x - 5}" y="${y0}" width="10" height="${TABLAS - y0 - 10}" rx="5" fill="#4b4655"/>
          <ellipse cx="${mic.x}" cy="${TABLAS - 8}" rx="46" ry="13" fill="#3d3a48"/>
          <ellipse cx="${mic.x}" cy="${TABLAS - 12}" rx="46" ry="13" fill="#5a5566"/></g>`;
      }
      /* el podio de la directora: una caja con su tapa y su escalón */
      const pod = punto("El podio de dirección");
      if (pod) {
        const y0 = bajo(pod) - 4, d = n(SESGO * (TABLAS - y0) / (ALTO - TABLAS));
        s += `<g><path d="M${pod.x - 80} ${y0 + 16} H${pod.x + 80} L${n(pod.x + 80 - d)} ${TABLAS} H${n(pod.x - 80 - d)} Z" fill="url(#musTPeana)"/>
          <rect x="${pod.x - 90}" y="${y0}" width="180" height="18" rx="7" fill="#7b5230"/>
          <rect x="${pod.x - 90}" y="${y0 + 3}" width="180" height="5" rx="2" fill="rgba(255,255,255,.32)"/>
          <path d="M${pod.x - 128} ${TABLAS - 40} H${pod.x - 74} v40 H${pod.x - 136} Z" fill="#5b3a24"/>
          <path d="M${pod.x - 128} ${TABLAS - 40} H${pod.x - 74}" stroke="rgba(255,233,168,.4)" stroke-width="4"/></g>`;
      }
      /* el pentagrama de la pared, dentro de su marco colgado */
      const pen = punto("El pentagrama");
      if (pen) {
        s += `<g><path d="M${pen.x - 92} 232 V150 M${pen.x + 92} 232 V150" stroke="#b58622" stroke-width="5"/>
          <rect x="${pen.x - 132}" y="228" width="264" height="152" rx="14" fill="rgba(12,5,22,.5)"/>
          <rect x="${pen.x - 132}" y="228" width="264" height="152" rx="14" fill="none" stroke="url(#musTOro)" stroke-width="8"/>
          <rect x="${pen.x - 119}" y="241" width="238" height="126" rx="9" fill="none" stroke="rgba(232,183,74,.28)" stroke-width="3"/></g>`;
      }
      /* la alfombra redonda donde se planta el piano */
      const pia = punto("El piano de cola");
      if (pia) {
        const y0 = bajo(pia) + 10;
        s += `<g><ellipse cx="${pia.x}" cy="${y0}" rx="164" ry="38" fill="url(#musTAlfombra)" opacity=".85"/>
          <ellipse cx="${pia.x}" cy="${y0}" rx="130" ry="27" fill="none" stroke="rgba(255,214,140,.32)" stroke-width="4"/>
          <ellipse cx="${pia.x}" cy="${y0 - 4}" rx="96" ry="18" fill="rgba(10,4,16,.22)"/></g>`;
      }
      /* la pizarra de las figuras, en su caballete */
      const fig = punto("Las figuras");
      if (fig) {
        s += `<g><rect x="${fig.x - 6}" y="${fig.y + 66}" width="12" height="72" fill="#5b3a24"/>
          <path d="M${fig.x} ${fig.y + 134} l-46 28 M${fig.x} ${fig.y + 134} l46 28" stroke="#5b3a24" stroke-width="10" stroke-linecap="round"/>
          <rect x="${fig.x - 128}" y="${fig.y - 82}" width="256" height="156" rx="12" fill="url(#musTPizarra)"/>
          <rect x="${fig.x - 128}" y="${fig.y - 82}" width="256" height="156" rx="12" fill="none" stroke="#7b5230" stroke-width="11"/>
          <rect x="${fig.x - 132}" y="${fig.y + 62}" width="264" height="14" rx="6" fill="#7b5230"/></g>`;
      }

      /* ---------- LAS BUTACAS DEL FINAL: el teatro acaba en el público ---------- */
      for (let f = 0; f < 3; f++) {
        const y = TABLAS + 66 + f * 96, alto = 46 + f * 8;
        for (let x = W - 520 + (f % 2) * 42; x < W - 20; x += 104) {
          if (!libre(x - 44, y - 16, 88, alto + 26)) continue;
          s += `<g><path d="M${x - 40} ${y} q40 -22 80 0 l3 ${alto} q-43 14 -86 0 Z" fill="#7a1e2c"/>
            <path d="M${x - 40} ${y} q40 -22 80 0" fill="none" stroke="rgba(255,255,255,.16)" stroke-width="4"/>
            <path d="M${x - 44} ${y + alto} h88" stroke="#5a1420" stroke-width="8" stroke-linecap="round"/></g>`;
        }
      }

      /* una sombra suave en el borde de abajo: separa el primer plano
         del resto y remata el suelo sin cortarlo */
      s += `<rect x="0" y="958" width="${W}" height="${ALTO - 958}" fill="url(#musTSombraBaja)"/>`;

      /* ---------- LAS CANDILEJAS del borde de las tablas ---------- */
      for (let x = P3b + 40; x < W - 30; x += 116) {
        s += `<g><ellipse cx="${x}" cy="${ALTO - 26}" rx="30" ry="12" fill="rgba(255,233,168,.16)"/>
          <path d="M${x - 16} ${ALTO - 12} q16 -30 32 0 Z" fill="#c9a13c"/>
          <circle cx="${x}" cy="${ALTO - 22}" r="8" fill="#ffe9a8"><animate attributeName="opacity" values=".95;.65;.95" dur="${4 + (x % 5)}s" repeatCount="indefinite"/></circle></g>`;
      }

      return decoSvg(compacta(s), W);
    };
  })();

})();
