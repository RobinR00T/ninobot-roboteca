"use strict";
/* ============================================================
   Escenario ampliado para dos mapas de exploración: ESPACIO y
   TIERRA MEDIA. No se toca la deco original: se envuelve.
   Lo nuevo va DETRÁS (es el fondo) y lo de siempre queda
   DELANTE, así las órbitas de los planetas y los lugares
   dibujados a mano siguen mandando.
   Todo sale en un solo <svg>: del original se extrae el
   interior y se pega dentro del nuevo lienzo.
   ============================================================ */

(function () {

  /* Azar con semilla: el mismo mapa en cada partida, sin sorpresas */
  function azar(semilla) {
    let x = semilla >>> 0;
    return function () {
      x = (x * 1664525 + 1013904223) >>> 0;
      return x / 4294967296;
    };
  }

  /* ============================================================
     ESPACIO: cielo profundo, Vía Láctea, nebulosas y horizonte lunar
     ============================================================ */
  function cieloEspacio(e) {
    const W = e.width || 5100, H = 1100;
    const R = azar(20260903);
    const sol = e.sun || { x: 1050, y: 560 };

    /* Cajas de reserva: nada decorativo justo debajo de un icono.
       Los planetas no reservan sitio porque giran por sus órbitas:
       si lo hicieran dejarían agujeros viajando por el campo de
       estrellas. En su lugar se reserva el corazón del Sol. */
    const cajas = [];
    e.pois.forEach(p => {
      if (p.cat === "solar") return;
      const w = (p.iw || 78) * 1.45 + 36, h = (p.ih || 78) * 1.45 + 62;
      cajas.push([p.x - w / 2, p.y - h / 2, w, h]);
    });
    cajas.push([sol.x - 210, sol.y - 210, 420, 420]);
    const libre = (x, y, r) => !cajas.some(c => x + r > c[0] && x - r < c[0] + c[2] && y + r > c[1] && y - r < c[1] + c[3]);

    /* La Vía Láctea cruza en diagonal: esta función da su centro en cada x,
       con una curvatura muy leve para que no parezca una regla */
    const via = x => {
      const u = (x + 200) / (W + 400);
      return 900 - 812 * u + 70 * Math.sin(u * Math.PI);
    };

    let s = "";

    /* ---------- degradados propios (prefijo espX, no chocan con nadie) ---------- */
    s += `<defs>
      <linearGradient id="espXFondo" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#050418" stop-opacity=".62"/>
        <stop offset="42%" stop-color="#0a0730" stop-opacity=".34"/>
        <stop offset="78%" stop-color="#070526" stop-opacity=".42"/>
        <stop offset="100%" stop-color="#030210" stop-opacity=".7"/>
      </linearGradient>
      <radialGradient id="espXViaA" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#c6d2ff" stop-opacity=".055"/>
        <stop offset="52%" stop-color="#b9c9ff" stop-opacity=".028"/>
        <stop offset="100%" stop-color="#a9b6f0" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="espXViaB" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#efe6ff" stop-opacity=".07"/>
        <stop offset="46%" stop-color="#d6ccff" stop-opacity=".032"/>
        <stop offset="100%" stop-color="#b3a8e6" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="espXViaC" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#05031a" stop-opacity=".34"/>
        <stop offset="58%" stop-color="#07051f" stop-opacity=".16"/>
        <stop offset="100%" stop-color="#07051f" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="espXCumulo" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#fff3d6" stop-opacity=".22"/>
        <stop offset="46%" stop-color="#ffe0a8" stop-opacity=".08"/>
        <stop offset="100%" stop-color="#ffd08a" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="espXBrumaGal" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#b48cff" stop-opacity=".17"/>
        <stop offset="54%" stop-color="#9a7ae8" stop-opacity=".09"/>
        <stop offset="100%" stop-color="#6a54b0" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="espXHaloSol" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffe082" stop-opacity=".3"/>
        <stop offset="42%" stop-color="#ffd24a" stop-opacity=".14"/>
        <stop offset="100%" stop-color="#ffb300" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="espXHaloSolB" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#fff3c4" stop-opacity=".34"/>
        <stop offset="52%" stop-color="#ffd76b" stop-opacity=".2"/>
        <stop offset="100%" stop-color="#ffc233" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="espXBrumaFria" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#78c8ff" stop-opacity=".12"/>
        <stop offset="55%" stop-color="#5aa8e0" stop-opacity=".06"/>
        <stop offset="100%" stop-color="#3a7ab0" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="espXBrumaCalida" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ff8a4a" stop-opacity=".1"/>
        <stop offset="55%" stop-color="#d06a34" stop-opacity=".05"/>
        <stop offset="100%" stop-color="#8a4520" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="espXBrumaMist" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#281450" stop-opacity=".5"/>
        <stop offset="56%" stop-color="#221046" stop-opacity=".26"/>
        <stop offset="100%" stop-color="#1a0c38" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="espXNebA" cx="50%" cy="48%" r="52%">
        <stop offset="0%" stop-color="#7c5cff" stop-opacity=".30"/>
        <stop offset="55%" stop-color="#4a3aa8" stop-opacity=".13"/>
        <stop offset="100%" stop-color="#1b1440" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="espXNebB" cx="46%" cy="52%" r="54%">
        <stop offset="0%" stop-color="#2fb6d8" stop-opacity=".24"/>
        <stop offset="58%" stop-color="#1f6f96" stop-opacity=".10"/>
        <stop offset="100%" stop-color="#0a2038" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="espXNebC" cx="52%" cy="46%" r="52%">
        <stop offset="0%" stop-color="#e46aa8" stop-opacity=".20"/>
        <stop offset="56%" stop-color="#8a3d78" stop-opacity=".09"/>
        <stop offset="100%" stop-color="#2a1030" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="espXNebD" cx="48%" cy="50%" r="54%">
        <stop offset="0%" stop-color="#3f8fd8" stop-opacity=".18"/>
        <stop offset="60%" stop-color="#25507f" stop-opacity=".08"/>
        <stop offset="100%" stop-color="#0b1730" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="espXNebE" cx="50%" cy="50%" r="54%">
        <stop offset="0%" stop-color="#d8a24a" stop-opacity=".14"/>
        <stop offset="58%" stop-color="#7b5320" stop-opacity=".06"/>
        <stop offset="100%" stop-color="#241705" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="espXCola" gradientUnits="objectBoundingBox" x1="1" y1="0" x2="0" y2="0">
        <stop offset="0%" stop-color="#dff2ff" stop-opacity=".55"/>
        <stop offset="45%" stop-color="#9fd4ff" stop-opacity=".20"/>
        <stop offset="100%" stop-color="#6fb4ff" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="espXLuna" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#8e9bb2" stop-opacity=".40"/>
        <stop offset="34%" stop-color="#5d6880" stop-opacity=".46"/>
        <stop offset="100%" stop-color="#232a3e" stop-opacity=".62"/>
      </linearGradient>
      <linearGradient id="espXBruma" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#b9d4ff" stop-opacity="0"/>
        <stop offset="100%" stop-color="#b9d4ff" stop-opacity=".18"/>
      </linearGradient>
    </defs>`;

    /* ---------- el fondo: un negro azulado que da profundidad ---------- */
    s += `<rect x="0" y="0" width="${W}" height="${H}" fill="url(#espXFondo)"/>`;

    /* ---------- la Vía Láctea: manchas blandas encadenadas a lo largo de la
       banda. Antes eran once capas apiladas y se veía el escalón de cada
       una, con un rayado diagonal muy feo; así el brillo sube y baja sin
       una sola línea de corte ---------- */
    const giroVia = (Math.atan2(via(W) - via(0), W) * 180 / Math.PI).toFixed(1);
    let via1 = "", via2 = "", via3 = "";
    for (let x = -320; x <= W + 320; x += 148) {
      const u = (x + 200) / (W + 400);
      const g = 0.74 + 0.4 * Math.sin(u * 3.1 + 0.6);
      const y = via(x), cx = x.toFixed(0), cy = y.toFixed(0);
      via1 += `<ellipse cx="${cx}" cy="${cy}" rx="${(238 * g).toFixed(0)}" ry="${(176 * g).toFixed(0)}" transform="rotate(${giroVia} ${cx} ${cy})" fill="url(#espXViaA)"/>`;
      const d2 = (R() - 0.5) * 74;
      via2 += `<ellipse cx="${cx}" cy="${(y + d2).toFixed(0)}" rx="${(126 * g).toFixed(0)}" ry="${(74 * g).toFixed(0)}" transform="rotate(${giroVia} ${cx} ${(y + d2).toFixed(0)})" fill="url(#espXViaB)"/>`;
      /* alguna grieta oscura, como las que parten la banda de verdad */
      if (R() > 0.62) {
        const d3 = (R() - 0.5) * 150;
        via3 += `<ellipse cx="${(x + 40).toFixed(0)}" cy="${(y + d3).toFixed(0)}" rx="${(96 * g).toFixed(0)}" ry="${(30 * g).toFixed(0)}" transform="rotate(${giroVia} ${(x + 40).toFixed(0)} ${(y + d3).toFixed(0)})" fill="url(#espXViaC)"/>`;
      }
    }
    s += via1 + via2 + via3;

    /* ---------- nebulosas: color muy suave, nunca sobre los planetas ---------- */
    const nebulosa = (id, cx, cy, rx, ry, rot, op, dur) => `<g opacity="${op}">` +
      (dur ? `<animate attributeName="opacity" values="${op};${(op * 1.45).toFixed(2)};${op}" dur="${dur}" repeatCount="indefinite"/>` : "") +
      `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="url(#${id})" transform="rotate(${rot} ${cx} ${cy})"/></g>`;
    s += nebulosa("espXNebD", 560, 190, 420, 210, -12, .8, "");
    s += nebulosa("espXNebA", 2140, 296, 470, 300, 18, .85, "21s");
    s += nebulosa("espXNebB", 2760, 966, 560, 230, -8, .8, "26s");
    s += nebulosa("espXNebE", 3460, 990, 470, 190, 6, .75, "");
    s += nebulosa("espXNebC", 4520, 180, 400, 230, -16, .8, "24s");
    /* dos halos anchos justo bajo las brumas de siempre: así el borde
       recto de aquellas ovaladas se funde con el fondo */
    s += nebulosa("espXNebA", 4390, 520, 560, 650, 0, .55, "");
    s += nebulosa("espXNebD", 4870, 500, 500, 630, 0, .5, "");
    /* dos manchas más para la zona entre el último planeta y las
       constelaciones, que se quedaba desierta al ensanchar el mapa */
    s += nebulosa("espXNebB", 1760, 848, 380, 190, -6, .55, "29s");
    s += nebulosa("espXNebE", 2180, 300, 300, 180, 10, .5, "");

    /* ---------- los dos cinturones del Sistema Solar ----------
       El de asteroides va entre Marte y Júpiter; el de Kuiper, más allá
       de Neptuno, que es donde vive Plutón. Además de ser verdad, llenan
       el tramo que quedaba vacío entre el Sol y las constelaciones. */
    const cinturon = (rx, ry, grosor, n, sem, color, rmin, rmax, opmin) => {
      const rr = azar(sem);
      let g = "";
      for (let i = 0; i < n; i++) {
        const a = rr() * Math.PI * 2, d = (rr() - 0.5) * 2;
        const k = 1 + d * grosor;
        const x = sol.x + rx * k * Math.cos(a), y = sol.y + ry * k * Math.sin(a);
        if (x < -10 || x > W + 10 || y < 8 || y > H - 8) continue;
        const r = rmin + rr() * (rmax - rmin);
        if (!libre(x, y, r + 6)) continue;
        g += `<circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="${r.toFixed(1)}" fill-opacity="${(opmin + rr() * 0.35).toFixed(2)}"/>`;
      }
      return `<g fill="${color}">${g}</g>`;
    };
    s += cinturon(552, 304, 0.085, 150, 40718281, "#c9c0ad", 0.9, 2.4, .28);
    s += cinturon(1076, 592, 0.075, 190, 27182818, "#a9c8ea", 0.8, 2.2, .22);

    /* un cúmulo de estrellas viejas, muy tenue, para la franja de en medio */
    const cumulo = (cx, cy, rad, n, sem) => {
      const rr = azar(sem);
      let g = "";
      for (let i = 0; i < n; i++) {
        const a = rr() * Math.PI * 2, d = Math.pow(rr(), 0.55) * rad;
        const x = cx + d * Math.cos(a), y = cy + d * Math.sin(a) * 0.86;
        if (!libre(x, y, 5)) continue;
        g += `<circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="${(0.6 + rr() * 1.2).toFixed(1)}" fill-opacity="${(0.3 + rr() * 0.6).toFixed(2)}"/>`;
      }
      return `<g><ellipse cx="${cx}" cy="${cy}" rx="${rad * 1.6}" ry="${(rad * 1.4).toFixed(0)}" fill="url(#espXCumulo)"/><g fill="#fff6e2">${g}</g></g>`;
    };
    s += cumulo(2170, 838, 74, 90, 16180339);
    s += cumulo(1560, 214, 58, 62, 14142135);

    /* ---------- polvo estelar: motas finísimas a lo largo de la banda ---------- */
    let polvo = "";
    for (let i = 0; i < 108; i++) {
      const x = R() * (W + 40) - 20;
      const y = Math.max(6, Math.min(H - 6, via(x) + (R() - 0.5) * 400));
      if (!libre(x, y, 3)) continue;
      polvo += `<circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="${(0.5 + R() * 0.5).toFixed(1)}" fill-opacity="${(0.15 + R() * 0.3).toFixed(1)}"/>`;
    }
    s += `<g fill="#cfd9ff" opacity=".9"><animate attributeName="opacity" values=".62;1;.62" dur="17s" repeatCount="indefinite"/>${polvo}</g>`;

    /* ---------- campo de estrellas: seis capas con parpadeo lento ---------- */
    const CAPAS = [
      { n: 80, r0: 0.7, r1: 1.2, c: "#e8f0ff", banda: .30, dur: "13s", val: ".52;1;.52" },
      { n: 70, r0: 0.9, r1: 1.5, c: "#ffffff", banda: .38, dur: "9.5s", val: ".6;1;.6" },
      { n: 58, r0: 1.1, r1: 1.8, c: "#cfe0ff", banda: .26, dur: "16s", val: ".48;1;.48" },
      { n: 46, r0: 1.3, r1: 2.1, c: "#ffe7c2", banda: .22, dur: "11s", val: ".55;1;.55" },
      { n: 34, r0: 1.6, r1: 2.5, c: "#d6c6ff", banda: .34, dur: "19s", val: ".45;.95;.45" },
      { n: 26, r0: 2.0, r1: 3.0, c: "#bfeaff", banda: .18, dur: "7.5s", val: ".64;1;.64" }
    ];
    CAPAS.forEach(cp => {
      let g = "";
      for (let i = 0; i < cp.n; i++) {
        let x = 0, y = 0, ok = false;
        for (let t = 0; t < 9 && !ok; t++) {
          x = R() * (W + 40) - 20;
          y = R() < cp.banda ? via(x) + (R() - 0.5) * 280 : R() * H;
          y = Math.max(8, Math.min(H - 8, y));
          ok = libre(x, y, cp.r1 + 8);
        }
        if (!ok) continue;
        g += `<circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="${(cp.r0 + R() * (cp.r1 - cp.r0)).toFixed(1)}" fill-opacity="${(0.35 + R() * 0.6).toFixed(1)}"/>`;
      }
      s += `<g fill="${cp.c}"><animate attributeName="opacity" values="${cp.val}" dur="${cp.dur}" repeatCount="indefinite"/>${g}</g>`;
    });

    /* ---------- estrellas grandes de cuatro puntas, con su halo ---------- */
    const chispa = (x, y, r, c, op) => `<g opacity="${op}">
      <circle cx="${x}" cy="${y}" r="${(r * 2.6).toFixed(1)}" fill="${c}" opacity=".14"/>
      <path d="M${x} ${(y - r * 3.4).toFixed(1)} Q${(x + r * .55).toFixed(1)} ${(y - r * .55).toFixed(1)} ${(x + r * 3.4).toFixed(1)} ${y} Q${(x + r * .55).toFixed(1)} ${(y + r * .55).toFixed(1)} ${x} ${(y + r * 3.4).toFixed(1)} Q${(x - r * .55).toFixed(1)} ${(y + r * .55).toFixed(1)} ${(x - r * 3.4).toFixed(1)} ${y} Q${(x - r * .55).toFixed(1)} ${(y - r * .55).toFixed(1)} ${x} ${(y - r * 3.4).toFixed(1)} Z" fill="${c}"/></g>`;
    const GRANDES = [[1770, 158, 4.4, "#dbe8ff"], [1930, 236, 4.8, "#ffe9c4"],
      [2660, 128, 4, "#cfe6ff"], [3080, 962, 4.6, "#ffffff"], [3560, 128, 4.2, "#e6d8ff"],
      [4020, 942, 4.4, "#ffe9c4"], [4830, 940, 4, "#ffffff"], [1620, 940, 4.2, "#cfe6ff"],
      [4560, 62, 4.6, "#e6d8ff"], [880, 918, 3.8, "#dbe8ff"], [620, 128, 4.2, "#ffffff"],
      [1690, 92, 4.2, "#dbe8ff"], [2120, 138, 3.8, "#ffe9c4"], [2440, 932, 4.2, "#cfe6ff"]];
    GRANDES.forEach(g => { if (libre(g[0], g[1], g[2] * 3.6)) s += chispa(g[0], g[1], g[2], g[3], .85); });

    /* ---------- cometas lejanos con su estela ---------- */
    const cometa = (x, y, ang, k, c) => `<g transform="translate(${x} ${y}) rotate(${ang}) scale(${k})">
      <path d="M6 -12 Q-110 -20 -300 -3 Q-110 5 6 12 Q16 0 6 -12 Z" fill="url(#espXCola)"/>
      <path d="M4 -6 Q-90 -10 -186 -1 Q-90 4 4 6 Z" fill="${c}" opacity=".2"/>
      <circle r="10" fill="${c}" opacity=".22"/><circle r="4.2" fill="#f6fcff"/></g>`;
    s += `<g opacity=".8"><animateTransform attributeName="transform" type="translate" values="0 0;34 -12;0 0" dur="34s" repeatCount="indefinite"/>${cometa(360, 172, 13, .68, "#9fd4ff")}</g>`;
    s += `<g opacity=".72"><animateTransform attributeName="transform" type="translate" values="0 0;-28 10;0 0" dur="46s" repeatCount="indefinite"/>${cometa(2260, 946, -8, .6, "#bfe6ff")}</g>`;
    s += `<g opacity=".6">${cometa(4240, 118, 18, .5, "#cfd9ff")}</g>`;

    /* ---------- horizonte lunar: dos crestas, una detrás de otra, para que
       el borde de abajo tenga fondo y primer plano y no una sola raya ---------- */
    /* una bruma clara pegada al suelo, como polvo levantado: va antes que
       las crestas para que estas se recorten sobre ella */
    s += `<rect x="0" y="930" width="${W}" height="170" fill="url(#espXBruma)"/>`;
    const lomaLejos = `M-30 1030 Q380 992 760 1022 Q1140 1052 1520 1016 Q1900 984 2280 1018 Q2700 1050 3120 1014 Q3520 982 3920 1018 Q4340 1050 4720 1012 Q4940 992 ${W + 30} 1022`;
    s += `<path d="${lomaLejos} L${W + 30} ${H} L-30 ${H} Z" fill="#404a63" fill-opacity=".38"/>
      <path d="${lomaLejos}" fill="none" stroke="#b6c3d6" stroke-opacity=".16" stroke-width="2.4"/>`;
    const cresLuna = "M-30 1054 Q300 1016 620 1046 Q980 1076 1340 1042 Q1700 1008 2060 1044 Q2460 1080 2860 1040 Q3260 1002 3660 1042 Q4060 1078 4460 1038 Q4800 1004 " + (W + 30) + " 1048";
    s += `<path d="${cresLuna} L${W + 30} ${H} L-30 ${H} Z" fill="url(#espXLuna)"/>
      <path d="${cresLuna}" fill="none" stroke="#c3cede" stroke-opacity=".22" stroke-width="3"/>`;
    let crat = "";
    for (let i = 0; i < 20; i++) {
      const x = 40 + R() * (W - 80), y = 1058 + R() * 34, r = 9 + R() * 26;
      crat += `<ellipse cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" rx="${r.toFixed(0)}" ry="${(r * 0.38).toFixed(0)}"/>`;
    }
    s += `<g fill="#1a2033" fill-opacity=".24">${crat}</g>`;
    /* piedras sueltas en el filo: dan tamaño al horizonte */
    let cantos = "";
    for (let i = 0; i < 26; i++) {
      const x = 30 + R() * (W - 60), r = 7 + R() * 16;
      const y = 1046 + R() * 26;
      cantos += `<path d="M${(x - r).toFixed(0)} ${y.toFixed(0)} Q${(x - r * .92).toFixed(0)} ${(y - r * .68).toFixed(0)} ${(x - r * .3).toFixed(0)} ${(y - r * .86).toFixed(0)} Q${(x + r * .42).toFixed(0)} ${(y - r * 1.02).toFixed(0)} ${(x + r * .82).toFixed(0)} ${(y - r * .46).toFixed(0)} Q${(x + r).toFixed(0)} ${(y - r * .18).toFixed(0)} ${(x + r).toFixed(0)} ${y.toFixed(0)} Z"/>`;
    }
    s += `<g fill="#6a7592" fill-opacity=".5">${cantos}</g>`;

    return s;
  }


  /* ============================================================
     TIERRA MEDIA: un recorrido continuo de 4200 px, de la Comarca
     a las tierras secas, con ocho etapas y transiciones dibujadas.
     El escenario se pinta entero aquí: el que traía 60-deco.js
     estaba medido para 2600 de ancho y ya no encajaba.
     ============================================================ */
  function paisajeTierraMedia(e) {
    const W = e.width || 4200, H = 1100;
    const nn = v => Math.round(v);
    const dd = v => Math.round(v * 10) / 10;

    /* ---------- cajas de reserva: nada decorativo debajo de un lugar ---------- */
    const cajas = [], finas = [];
    (e.pois || []).forEach(p => {
      const w = (p.iw || 96) * 1.35 + 30, h = (p.ih || 96) * 1.35 + 58;
      cajas.push([p.x - w / 2, p.y - h / 2, w, h]);
      const wf = (p.iw || 96) * 1.05 + 16, hf = (p.ih || 96) * 1.05 + 16;
      finas.push([p.x - wf / 2, p.y - hf / 2, wf, hf]);
    });
    const dentro = (l, x, y, w, h) => l.some(c => x < c[0] + c[2] && x + w > c[0] && y < c[1] + c[3] && y + h > c[1]);
    const libre = (x, y, w, h) => !dentro(cajas, x, y, w, h);
    const libreSuave = (x, y, w, h) => !dentro(finas, x, y, w, h);

    /* ---------- las ocho etapas, con solape para que una entre en la otra ---------- */
    const ETAPAS = {
      comarca: [-20, 900], camino: [760, 1120], rio: [1040, 1360], bosque: [1290, 1950],
      montana: [1860, 2560], paso: [2450, 2820], llanura: [2740, 3500], seco: [3400, W + 20]
    };
    /* cuánto manda una etapa en esa x: 1 en su tramo, y de 1 a 0 en el borde.
       Con esto la densidad de matas, hierba o polvo sube y baja poco a poco */
    const peso = (r, x) => {
      const b = 170;
      if (x <= r[0] - b || x >= r[1] + b) return 0;
      if (x < r[0]) return (x - r[0] + b) / b;
      if (x > r[1]) return (r[1] + b - x) / b;
      return 1;
    };

    /* ---------- el suelo del primer plano, con su curva suave ---------- */
    const SUELO = [[-20, 964], [420, 948], [900, 958], [1180, 986], [1420, 1002], [1760, 986],
    [2080, 962], [2420, 946], [2700, 954], [3080, 968], [3480, 978], [3860, 986], [W + 20, 992]];
    const suelo = x => {
      for (let i = 1; i < SUELO.length; i++) {
        if (x <= SUELO[i][0]) {
          const a = SUELO[i - 1], b = SUELO[i];
          const t = (x - a[0]) / (b[0] - a[0]);
          return a[1] + (b[1] - a[1]) * (0.5 - Math.cos(Math.PI * t) / 2);
        }
      }
      return SUELO[SUELO.length - 1][1];
    };

    /* perfil general de la sierra del fondo: llana en la Comarca, muy alta
       en las montañas, media en las llanuras y de mesetas al final */
    const campana = (x, c, a) => Math.exp(-Math.pow((x - c) / a, 2));
    const relieve = x => 604 - 148 * campana(x, 520, 600) - 274 * campana(x, 2280, 780)
      - 46 * campana(x, 3060, 520) - 104 * campana(x, 3880, 460);

    /* Todo el relieve del fondo (sierras, mesetas, paredes del paso) baja
       hasta aquí. Antes se cortaba en seco a 900 y entre esa raya y el
       suelo asomaba el fondo oscuro del lienzo: una franja marrón muerta
       de punta a punta del mapa. */
    const BASE = 944;

    /* La falda: el pie de monte continuo que enlaza el fondo con el primer
       plano. Va siempre por encima del suelo y por debajo de BASE, así no
       queda ni un hueco ni una línea recta entre los dos planos. */
    const falda = x => Math.min(suelo(x) - 46, 886)
      - 44 * (0.5 + 0.5 * Math.sin(x / 372 + 0.7)) - 26 * Math.sin(x / 149 + 2.3)
      - 34 * campana(x, 2350, 720) - 22 * campana(x, 620, 460);

    /* Curva suave de 0 a 1: sirve para que cada manto nazca y muera en el
       suelo en vez de acabar en un tajo vertical */
    const suave = u => u <= 0 ? 0 : (u >= 1 ? 1 : u * u * (3 - 2 * u));

    /* Un manto de color: sale del suelo, engorda a lo largo de su etapa y
       vuelve a morir en el suelo. Con esto ninguna zona empieza ni acaba
       con un corte recto. `rizo` le quita el aire de arco perfecto. */
    const manto = (x0, x1, alto, relleno, op, rizo, topeIzq, topeDer) => {
      const N = 34;
      let arriba = "", abajo = "";
      for (let i = 0; i <= N; i++) {
        const t = i / N, x = x0 + (x1 - x0) * t;
        const f = Math.min(topeIzq ? 1 : suave(t / 0.24), topeDer ? 1 : suave((1 - t) / 0.24));
        const on = 1 + 0.17 * Math.sin(t * rizo * 2.2 + 1.2) + 0.08 * Math.sin(t * rizo * 5.1);
        arriba += (i ? "L" : "M") + nn(x) + " " + nn(suelo(x) - alto * f * on);
        abajo = "L" + nn(x) + " " + nn(suelo(x) + 34) + abajo;
      }
      return `<path d="${arriba}${abajo}Z" fill="${relleno}" opacity="${op}"/>`;
    };

    let s = "";

    /* ---------- degradados propios (prefijo tmdX, no chocan con nadie) ---------- */
    s += `<defs>
      <linearGradient id="tmdXCielo" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#a8dcf6" stop-opacity=".5"/>
        <stop offset="48%" stop-color="#d8ecf6" stop-opacity=".3"/>
        <stop offset="100%" stop-color="#f0e8cf" stop-opacity="0"/>
      </linearGradient>
      <radialGradient id="tmdXVeloVerde" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#bfe08a" stop-opacity=".3"/><stop offset="100%" stop-color="#bfe08a" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="tmdXVeloFrio" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#e8f3fb" stop-opacity=".42"/><stop offset="100%" stop-color="#e8f3fb" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="tmdXVeloOro" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#f6dc8c" stop-opacity=".38"/><stop offset="100%" stop-color="#f6dc8c" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="tmdXVeloOcre" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#e0b784" stop-opacity=".4"/><stop offset="100%" stop-color="#e0b784" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="tmdXLejos" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#9fb6c8"/><stop offset="100%" stop-color="#c4d3dd"/>
      </linearGradient>
      <linearGradient id="tmdXSierra" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#8798a8"/><stop offset="100%" stop-color="#5d6f7e"/>
      </linearGradient>
      <linearGradient id="tmdXSierraSeca" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#b99873"/><stop offset="100%" stop-color="#8b6f55"/>
      </linearGradient>
      <linearGradient id="tmdXPrado" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#a5d16a"/><stop offset="100%" stop-color="#6ba33e"/>
      </linearGradient>
      <linearGradient id="tmdXPradoB" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#8dc357"/><stop offset="100%" stop-color="#4f8a2f"/>
      </linearGradient>
      <linearGradient id="tmdXBosque" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#3f7a34"/><stop offset="100%" stop-color="#1f4c22"/>
      </linearGradient>
      <linearGradient id="tmdXDorado" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#e6d484"/><stop offset="100%" stop-color="#b09f4c"/>
      </linearGradient>
      <linearGradient id="tmdXSeco" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#b08f6d"/><stop offset="100%" stop-color="#6f5540"/>
      </linearGradient>
      <linearGradient id="tmdXRio" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#8fd6f2"/><stop offset="100%" stop-color="#2f8fc4"/>
      </linearGradient>
      <linearGradient id="tmdXPolvo" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#e0b784" stop-opacity="0"/>
        <stop offset="48%" stop-color="#e0b784" stop-opacity=".17"/>
        <stop offset="100%" stop-color="#e0b784" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="tmdXFalda" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#6d9440"/>
        <stop offset="22%" stop-color="#628a3c"/>
        <stop offset="32%" stop-color="#43682e"/>
        <stop offset="44%" stop-color="#3f5c40"/>
        <stop offset="54%" stop-color="#65727b"/>
        <stop offset="64%" stop-color="#727c83"/>
        <stop offset="74%" stop-color="#9c8850"/>
        <stop offset="84%" stop-color="#93794f"/>
        <stop offset="92%" stop-color="#7d6146"/>
        <stop offset="100%" stop-color="#5f4936"/>
      </linearGradient>
      <linearGradient id="tmdXLoma" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#9ac25e"/><stop offset="100%" stop-color="#5d8c37"/>
      </linearGradient>
      <linearGradient id="tmdXOroLoma" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#e8cf7e"/><stop offset="100%" stop-color="#a68f46"/>
      </linearGradient>
      <linearGradient id="tmdXGondor" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#9fadb8"/><stop offset="100%" stop-color="#5e6f7c"/>
      </linearGradient>
      <linearGradient id="tmdXBasalto" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#7d7286"/><stop offset="100%" stop-color="#544b62"/>
      </linearGradient>
      <linearGradient id="tmdXRepisa" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#a4aeb4"/><stop offset="100%" stop-color="#5f6d74"/>
      </linearGradient>
      <linearGradient id="tmdXMoria" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#7e8d99"/><stop offset="46%" stop-color="#5d6e7c"/><stop offset="100%" stop-color="#3f4e5b"/>
      </linearGradient>
      <linearGradient id="tmdXVado" gradientUnits="userSpaceOnUse" x1="990" y1="690" x2="1270" y2="1100">
        <stop offset="0%" stop-color="#8fd6f2"/><stop offset="100%" stop-color="#2f8fc4"/>
      </linearGradient>
      <linearGradient id="tmdXTierra" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#6f9e3c"/>
        <stop offset="20%" stop-color="#68953a"/>
        <stop offset="28%" stop-color="#6c9048"/>
        <stop offset="38%" stop-color="#3f6b2c"/>
        <stop offset="46%" stop-color="#4e6e42"/>
        <stop offset="55%" stop-color="#8b98a0"/>
        <stop offset="63%" stop-color="#95a0a6"/>
        <stop offset="72%" stop-color="#c4ae62"/>
        <stop offset="81%" stop-color="#bda05c"/>
        <stop offset="89%" stop-color="#a3805c"/>
        <stop offset="100%" stop-color="#7d5f45"/>
      </linearGradient>
    </defs>`;

    /* ---------- cielo, sol y los velos de color de cada etapa ---------- */
    s += `<rect x="0" y="0" width="${W}" height="700" fill="url(#tmdXCielo)"/>`;
    s += `<g transform="translate(430 132)">
      <circle r="120" fill="#fff4c4" opacity=".22"><animate attributeName="r" values="120;134;120" dur="12s" repeatCount="indefinite"/></circle>
      <circle r="68" fill="#fff8dc" opacity=".55"/><circle r="44" fill="#fffdf0" opacity=".75"/></g>`;
    /* los velos se solapan entre sí: por eso el color cambia sin costuras */
    [["tmdXVeloVerde", 1620, 520, 640, 400], ["tmdXVeloFrio", 2320, 430, 700, 420],
    ["tmdXVeloOro", 3120, 520, 660, 400], ["tmdXVeloOcre", 3880, 560, 620, 420]].forEach(v => {
      s += `<ellipse cx="${v[1]}" cy="${v[2]}" rx="${v[3]}" ry="${v[4]}" fill="url(#${v[0]})"/>`;
    });

    /* ---------- cirros altos: pinceladas finísimas para que el cielo
       no sea un degradado liso de punta a punta ---------- */
    const rCi = azar(20260214);
    let cirros = "";
    for (let x = -60; x < W + 60; x += 118) {
      const y = 54 + rCi() * 250, an = 130 + rCi() * 190, al = 5 + rCi() * 9;
      cirros += `<path d="M${nn(x)} ${nn(y)} q${nn(an * .3)} -${nn(al)} ${nn(an * .58)} 0 q${nn(an * .24)} ${nn(al)} ${nn(an * .42)} -${nn(al * .5)}" stroke="#ffffff" stroke-width="${dd(3 + rCi() * 4)}" fill="none" stroke-linecap="round" opacity="${dd(0.1 + rCi() * 0.16)}"/>`;
    }
    s += `<g>${cirros}</g>`;

    /* ---------- nubes lentas, repartidas por todo el ancho ---------- */
    const nube = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})">
      <ellipse cx="0" cy="0" rx="86" ry="30" fill="#fff" opacity=".82"/>
      <ellipse cx="-54" cy="11" rx="46" ry="21" fill="#fff" opacity=".78"/>
      <ellipse cx="48" cy="13" rx="52" ry="23" fill="#fff" opacity=".78"/>
      <ellipse cx="-8" cy="-23" rx="48" ry="27" fill="#fff" opacity=".86"/>
      <ellipse cx="30" cy="-14" rx="34" ry="19" fill="#fff" opacity=".7"/></g>`;
    [[150, 208, .84, 58, 56], [600, 140, 1, 64, 48], [880, 96, .62, 70, 52],
    [1240, 106, .76, 84, 62], [1560, 214, .58, 46, 54], [1880, 164, .9, 56, 40],
    [2180, 96, .64, 72, 58], [2500, 112, .68, 76, 56], [2840, 206, .54, 44, 50],
    [3060, 150, .86, 68, 52], [3350, 92, .7, 80, 60], [3620, 118, .72, 88, 66],
    [3940, 96, .6, 58, 46], [4060, 172, .8, 52, 44]].forEach(c => {
      s += `<g opacity=".72"><animateTransform attributeName="transform" type="translate" values="0 0;${c[3]} 0;0 0" dur="${c[4]}s" repeatCount="indefinite"/>${nube(c[0], c[1], c[2])}</g>`;
    });

    /* ---------- bandadas de pájaros: el cielo estaba vacío de par en par ---------- */
    const bandada = (x, y, k, n, sem) => {
      const rr = azar(sem);
      let d = "";
      for (let i = 0; i < n; i++) {
        const px = nn((rr() - 0.5) * 150), py = nn((rr() - 0.5) * 58), pk = dd(0.7 + 0.5 * rr());
        d += `<path d="M${px - nn(10 * pk)} ${py} q${nn(5 * pk)} -${nn(6 * pk)} ${nn(10 * pk)} 0 q${nn(5 * pk)} -${nn(6 * pk)} ${nn(10 * pk)} 0" fill="none" stroke="#5b6f7d" stroke-width="${dd(2.2 * pk)}" stroke-linecap="round" opacity=".62"/>`;
      }
      return `<g transform="translate(${x} ${y}) scale(${dd(k)})">
        <animateTransform attributeName="transform" type="translate" values="0 0;${nn(26 * k)} -8;0 0" dur="${18 + n}s" additive="sum" repeatCount="indefinite"/>${d}</g>`;
    };
    s += bandada(880, 246, 1, 6, 20261101);
    s += bandada(1560, 330, .82, 5, 20261102);
    s += bandada(3260, 214, .9, 6, 20261103);
    s += bandada(3960, 300, .74, 4, 20261104);

    /* ---------- sierra lejana en bruma, de punta a punta del mapa ----------
       redondeada en la Comarca, dentada en las montañas y baja al final */
    const rA = azar(19551029);
    let cresta = "";
    for (let x = -20; x <= W + 20; x += 128) {
      const dureza = 0.22 + 0.78 * campana(x, 2300, 920);
      const y = relieve(x) - (22 + 104 * dureza) * (0.34 + 0.66 * rA());
      cresta += (cresta ? "L" : "M") + nn(x) + " " + nn(y);
    }
    s += `<path d="${cresta}L${W + 20} ${BASE}L-20 ${BASE}Z" fill="url(#tmdXLejos)" opacity=".4"/>`;
    /* una segunda sierra, más cerca y algo más oscura: entre el cielo y el
       pie de monte hacía falta un plano intermedio que se leyera */
    const rA2 = azar(19730711);
    let cresta2 = "";
    const cima2 = [];
    for (let x = -20; x <= W + 20; x += 104) {
      const dureza = 0.2 + 0.8 * campana(x, 2360, 900);
      const y = relieve(x) + 128 - (16 + 78 * dureza) * (0.4 + 0.6 * rA2());
      cresta2 += (cresta2 ? "L" : "M") + nn(x) + " " + nn(y);
      cima2.push([x, y]);
    }
    s += `<path d="${cresta2}L${W + 20} ${BASE}L-20 ${BASE}Z" fill="url(#tmdXSierra)" opacity=".32"/>`;

    /* Bosquecillos y peñas diminutos sobre las lomas del fondo: sin ellos
       cada loma es una mancha lisa gigante y no hay con qué medir la
       distancia. Van muy desvaídos, que están lejos. */
    const lejania = (pts, sem, esc, op) => {
      const rr = azar(sem);
      let d = "";
      pts.forEach(p => {
        const x = p[0], y = p[1] + 5;
        if (x < 0 || x > W || rr() > 0.6) return;
        const k = esc * (0.7 + 0.5 * rr());
        const pena = Math.max(peso(ETAPAS.montana, x), peso(ETAPAS.paso, x));
        if (pena > 0.5) {
          d += `<path d="M${nn(x - 26 * k)} ${nn(y)} L${nn(x - 8 * k)} ${nn(y - 24 * k)} L${nn(x + 12 * k)} ${nn(y - 14 * k)} L${nn(x + 26 * k)} ${nn(y)} Z" fill="#7b8790"/>`;
          return;
        }
        const arena = peso(ETAPAS.seco, x), oro = peso(ETAPAS.llanura, x);
        const tono = arena > 0.5 ? "#8a7355" : (oro > 0.5 ? "#93813f" : "#40662f");
        d += `<g fill="${tono}">
          <ellipse cx="${nn(x - 20 * k)}" cy="${nn(y - 6 * k)}" rx="${dd(17 * k)}" ry="${dd(13 * k)}"/>
          <ellipse cx="${nn(x)}" cy="${nn(y - 14 * k)}" rx="${dd(21 * k)}" ry="${dd(17 * k)}"/>
          <ellipse cx="${nn(x + 22 * k)}" cy="${nn(y - 5 * k)}" rx="${dd(16 * k)}" ry="${dd(12 * k)}"/></g>`;
      });
      return `<g opacity="${op}">${d}</g>`;
    };
    s += lejania(cima2, 20040229, 0.62, ".2");
    /* y una tercera línea de lomas, ya verdosa, para que entre el cielo y
       el pie de monte no quede una franja lisa sin nada que mirar */
    const rA3 = azar(20030817);
    let cresta3 = "";
    const cima3 = [];
    for (let x = -20; x <= W + 20; x += 92) {
      const y = relieve(x) + 244 - (14 + 54 * campana(x, 2400, 1000)) * (0.4 + 0.6 * rA3());
      cresta3 += (cresta3 ? "L" : "M") + nn(x) + " " + nn(y);
      cima3.push([x, y]);
    }
    s += `<path d="${cresta3}L${W + 20} ${BASE}L-20 ${BASE}Z" fill="#6f8f5c" opacity=".28"/>`;
    s += lejania(cima3, 20261212, 0.86, ".26");

    /* ---------- las montañas nevadas del centro, la etapa más alta ---------- */
    const CIMAS = [[1930, 486, 190], [2110, 372, 240], [2310, 322, 262], [2510, 402, 226], [2690, 512, 180]];
    CIMAS.forEach(m => {
      const x = m[0], y = m[1], a = m[2];
      s += `<path d="M${nn(x - a)} ${BASE} L${x} ${y} L${nn(x + a)} ${BASE} Z" fill="url(#tmdXSierra)"/>
        <path d="M${nn(x - a * .34)} ${nn(y + a * .34)} L${x} ${y} L${nn(x + a * .34)} ${nn(y + a * .34)} Q${nn(x + a * .14)} ${nn(y + a * .2)} ${x} ${nn(y + a * .3)} Q${nn(x - a * .14)} ${nn(y + a * .2)} ${nn(x - a * .34)} ${nn(y + a * .34)} Z" fill="#f2f6f8"/>
        <path d="M${x} ${y} L${nn(x + a)} ${BASE} L${nn(x + a * .3)} ${BASE} Z" fill="#4e5f6e" opacity=".45"/>`;
    });
    /* las dos paredes del paso de montaña, con nieve en lo alto */
    s += `<path d="M2500 ${BASE} L2612 470 L2700 640 L2742 ${BASE} Z" fill="#6f7d86" opacity=".9"/>
      <path d="M2820 ${BASE} L2904 512 L2984 668 L3016 ${BASE} Z" fill="#77848c" opacity=".85"/>
      <path d="M2612 470 L2656 556 L2700 640 L2612 620 Z" fill="#eef5f8" opacity=".85"/>
      <path d="M2904 512 L2944 590 L2984 668 L2904 650 Z" fill="#eef5f8" opacity=".7"/>`;
    /* estribaciones: la sierra no empieza ni acaba de golpe */
    s += `<path d="M2740 ${BASE} L2856 630 L2940 738 L3020 664 L3120 ${BASE} Z" fill="#7d8b94" opacity=".6"/>
      <path d="M3040 ${BASE} L3140 726 L3210 800 L3270 742 L3360 ${BASE} Z" fill="#8e9790" opacity=".45"/>`;

    /* ---------- los asientos de los lugares que quedaban en el aire ----------
       Cada uno es una loma o un monte dibujado detrás del punto, de modo que
       el icono apoya en algo en vez de flotar sobre la bruma. */
    /* el hombro de roca de Moria, con su boca en la ladera. Va con tono
       propio, más oscuro que la sierra del fondo: al ir del mismo gris no se
       distinguía uno de otra y la puerta parecía colgada de la bruma */
    s += `<path d="M1660 ${BASE} L1730 720 L1762 666 L1806 700 L1856 604 L1912 688 L1972 632 L2100 ${BASE} Z" fill="url(#tmdXMoria)" opacity=".96"/>
      <path d="M1856 604 L1886 646 L1912 688 L1856 674 Z" fill="#eef5f8" opacity=".7"/>
      <path d="M1660 ${BASE} L1730 720 L1762 666 L1790 690 L1782 ${BASE} Z" fill="#33404c" opacity=".3"/>
      <path d="M1712 760 q52 -14 104 -4 M1698 806 q78 -18 150 -6 M1690 856 q96 -20 186 -8" stroke="#2f3c47" stroke-width="4" fill="none" opacity=".22" stroke-linecap="round"/>`;
    /* filo de luz en las aristas y sombra al pie de la puerta: así la roca se
       lee como roca y la puerta se apoya en ella */
    s += `<path d="M1690 812 L1730 720 L1762 666 L1806 700 L1856 604 L1912 688 L1972 632" stroke="#c3ced6" stroke-width="4" fill="none" opacity=".3" stroke-linejoin="round"/>
      <ellipse cx="1764" cy="700" rx="44" ry="8" fill="#2f3c47" opacity=".24"/>`;
    /* cuatro cantos al pie del rellano, del tamaño de un enano */
    [[1700, 752, 13], [1734, 762, 9], [1836, 756, 11], [1868, 768, 8]].forEach(p => {
      s += `<path d="M${p[0] - p[2]} ${p[1]} Q${nn(p[0] - p[2] * .8)} ${nn(p[1] - p[2] * .9)} ${p[0]} ${nn(p[1] - p[2])} Q${nn(p[0] + p[2] * .85)} ${nn(p[1] - p[2] * .8)} ${p[0] + p[2]} ${p[1]} Z" fill="#7c8b98" opacity=".8"/>`;
    });
    /* la cresta sobre la que se sienta la Montaña Solitaria */
    s += `<path d="M1892 ${BASE} L1962 512 L2004 468 L2052 496 L2098 452 L2166 ${BASE} Z" fill="#7f8d99" opacity=".85"/>
      <path d="M2098 452 L2124 500 L2148 546 L2098 528 Z" fill="#eef5f8" opacity=".6"/>`;
    /* la colina dorada de Lothlórien, con sus copas de oro */
    s += `<path d="M2620 ${BASE} Q2700 620 2812 528 Q2920 604 3010 ${BASE} Z" fill="url(#tmdXOroLoma)" opacity=".92"/>`;
    [[2704, 646, 30], [2758, 612, 24], [2884, 616, 27], [2934, 656, 22], [2818, 600, 20]].forEach(c => {
      s += `<g><ellipse cx="${c[0]}" cy="${c[1]}" rx="${c[2]}" ry="${dd(c[2] * 0.8)}" fill="#e8c862"/>
        <ellipse cx="${c[0] - Math.round(c[2] * .4)}" cy="${c[1] + 8}" rx="${dd(c[2] * .6)}" ry="${dd(c[2] * .5)}" fill="#d4b04e"/>
        <rect x="${c[0] - 3}" y="${c[1] + Math.round(c[2] * .6)}" width="6" height="${Math.round(c[2] * .9)}" rx="3" fill="#cbb890"/></g>`;
    });
    /* mesetas de cima plana del final: base ancha, faldón de cascajo y
       estratos. Van ANTES que Gondor y que el cordal de Mordor, que están
       más cerca: si se pintaban después, su borde de arriba cruzaba las dos
       laderas con una raya horizontal de lado a lado. La cima ondula unos
       pocos píxeles para que no se lea como tirada a regla */
    [[3470, 716, 230, .86], [3720, 676, 268, 1], [4010, 728, 196, .78]].forEach(m => {
      const x = m[0], y = m[1], a = m[2], op = m[3];
      const x0 = nn(x - a), x1 = nn(x + a);
      const t0 = nn(x - a * .58), t1 = nn(x + a * .58);
      const c0 = nn(x - a * .44), c1 = nn(x + a * .44);
      const an = c1 - c0;
      /* la cornisa: de c0 a c1 con dos ondas muy suaves */
      const cima = (dy) => `Q${nn(c0 + an * .24)} ${nn(y + dy - 7)} ${nn(c0 + an * .46)} ${nn(y + dy - 1)}` +
        ` Q${nn(c0 + an * .7)} ${nn(y + dy + 5)} ${c1} ${nn(y + dy - 2)}`;
      s += `<path d="M${x0} ${BASE} L${t0} ${y + 74} L${c0} ${y + 4} ${cima(0)} L${t1} ${y + 68} L${x1} ${BASE} Z" fill="url(#tmdXSierraSeca)" opacity="${dd(0.8 * op)}"/>
        <path d="M${c0} ${y + 4} ${cima(0)} L${nn(c1 + 9)} ${y + 15} L${nn(c0 - 9)} ${y + 17} Z" fill="#cdb08c" opacity="${dd(0.6 * op)}"/>
        <path d="M${nn(c0 - 5)} ${y + 26} q${nn(an * .3)} 5 ${nn(an * .6)} 0 q${nn(an * .2)} -4 ${nn(an * .4)} 2 M${nn(c0 - 12)} ${y + 48} q${nn(an * .34)} -6 ${nn(an * .66)} 1 q${nn(an * .2)} 5 ${nn(an * .4)} 0 M${nn(c0 - 22)} ${y + 76} q${nn(an * .36)} 6 ${nn(an * .7)} -1 q${nn(an * .22)} -5 ${nn(an * .44)} 3 M${nn(t0 + 4)} ${y + 106} q${nn(an * .3)} -5 ${nn(an * .58)} 1" stroke="#8b6f55" stroke-width="3" fill="none" opacity="${dd(0.36 * op)}"/>
        <path d="M${nn(x - a * .2)} ${y + 18} L${nn(x - a * .24)} ${y + 96} M${nn(x + a * .12)} ${y + 22} L${nn(x + a * .16)} ${y + 88}" stroke="#8b6f55" stroke-width="2.4" opacity="${dd(0.26 * op)}"/>
        <path d="M${c1} ${nn(y - 2)} L${t1} ${y + 68} L${x1} ${BASE} L${nn(x1 - a * .3)} ${BASE} Z" fill="#6f5540" opacity="${dd(0.2 * op)}"/>`;
    });

    /* el monte tallado de Gondor: la ciudad blanca se recorta encima */
    s += `<path d="M3120 ${BASE} Q3226 646 3306 494 L3352 520 Q3442 662 3548 ${BASE} Z" fill="url(#tmdXGondor)" opacity=".9"/>
      <path d="M3306 494 L3330 508 L3352 520 L3308 522 Z" fill="#eef5f8" opacity=".7"/>
      <path d="M3252 800 L3384 786 M3268 742 L3378 730 M3288 688 L3368 678" stroke="#c6d0d8" stroke-width="5" stroke-linecap="round" fill="none" opacity=".38"/>`;
    /* el cordal oscuro de Mordor, con flores nuevas a sus pies */
    s += `<path d="M3630 ${BASE} L3742 606 L3800 520 L3846 476 L3900 528 L3968 620 L4070 ${BASE} Z" fill="url(#tmdXBasalto)" opacity=".8"/>
      <path d="M3846 476 L3874 502 L3900 528 L3848 518 Z" fill="#a79bb0" opacity=".5"/>
      <path d="M3700 790 Q3800 748 3910 792 Q3990 826 4040 ${BASE} L3690 ${BASE} Z" fill="#7b8f5c" opacity=".45"/>`;
    [[3712, 812, "#f48fb1"], [3762, 828, "#ffd54f"], [3936, 820, "#ce93d8"], [3990, 836, "#a5d6a7"]].forEach(f => {
      s += `<g><path d="M${f[0]} ${f[1]} q-2 -14 1 -22" stroke="#6d8f4e" stroke-width="3" fill="none" stroke-linecap="round"/>
        <circle cx="${f[0] + 1}" cy="${f[1] - 26}" r="6" fill="${f[2]}"/><circle cx="${f[0] + 1}" cy="${f[1] - 26}" r="2.2" fill="#fff9c4"/></g>`;
    });
    /* ---------- la falda: el pie de monte que cose el fondo con el suelo ---------- */
    let faldaD = "M-20 " + nn(falda(-20));
    for (let x = 40; x <= W + 20; x += 56) faldaD += "L" + nn(x) + " " + nn(falda(x));
    s += `<path d="${faldaD}L${W + 20} 1100L-20 1100Z" fill="url(#tmdXFalda)" opacity=".92"/>`;
    /* un filo de luz en su borde, para despegarla de la sierra */
    s += `<path d="${faldaD}" stroke="#ffffff" stroke-width="4" fill="none" opacity=".09"/>`;

    /* ---------- colinas verdes de la Comarca: dos mantos que nacen y mueren
       en el suelo, así el verde no acaba en una pared vertical ---------- */
    s += manto(-60, 1320, 432, "url(#tmdXPrado)", 1, 3.1, true, false);
    s += manto(-60, 1470, 318, "url(#tmdXPradoB)", .92, 4.3, true, false);
    /* el suelo del bosque, más oscuro, entre el río y la roca */
    s += manto(1180, 2180, 132, "#3f6b2c", .55, 3.6, false, false);

    /* ---------- el camino de tierra, de las colinas al puente ----------
       Se queda en la orilla alta: la bajada hasta la cabecera del puente se
       pinta más adelante, cuando ya está la loma del Bosque Viejo, porque si
       no la loma se la comería */
    const CAMINO = "M-20 714 Q160 586 350 638 Q530 688 710 624 Q860 578 980 660 Q1046 700 1078 766";
    s += `<path d="${CAMINO}" fill="none" stroke="#d9c8a0" stroke-width="28" stroke-linecap="round" opacity=".92"/>
      <path d="${CAMINO}" fill="none" stroke="#efe3c4" stroke-width="11" stroke-linecap="round" opacity=".7"/>`;

    /* ---------- cercas de madera junto al camino, cada vez más juntas ---------- */
    const cerca = (x, y, c, k) => {
      let d = `<g transform="translate(${x} ${y}) scale(${dd(k)})">`;
      d += `<rect x="-4" y="-6" width="${c * 26 + 8}" height="6" rx="3" fill="#c8a878"/>
        <rect x="-4" y="10" width="${c * 26 + 8}" height="6" rx="3" fill="#b8986a"/>`;
      for (let i = 0; i <= c; i++) d += `<rect x="${i * 26 - 3}" y="-16" width="7" height="42" rx="3" fill="#a8875c"/>`;
      return d + "</g>";
    };
    [[96, 652, 4, 1], [520, 680, 3, .92], [790, 636, 3, .86], [1000, 706, 2, .8], [1140, 862, 3, .84]].forEach(c => {
      if (libre(c[0] - 8, c[1] - 22, c[2] * 26 * c[3] + 22, 52)) s += cerca(c[0], c[1], c[2], c[3]);
    });

    /* ---------- casitas redondas de la Comarca, con su humo ---------- */
    const casita = (x, y, k, techo) => `<g transform="translate(${x} ${y}) scale(${dd(k)})">
      <ellipse cx="0" cy="42" rx="46" ry="9" fill="#3f6b26" opacity=".26"/>
      <rect x="-34" y="-8" width="68" height="50" rx="7" fill="#f0e2c2"/>
      <path d="M-44 -8 L0 -46 L44 -8 Z" fill="${techo}"/>
      <path d="M-44 -8 L44 -8 L44 -2 L-44 -2 Z" fill="#00000018"/>
      <rect x="18" y="-42" width="12" height="24" rx="3" fill="#9b7b56"/>
      <rect x="-12" y="8" width="24" height="34" rx="4" fill="#a5713f"/>
      <circle cx="6" cy="26" r="2.4" fill="#ffe082"/>
      <rect x="-28" y="4" width="14" height="14" rx="3" fill="#bfe3f2"/>
      <rect x="16" y="4" width="14" height="14" rx="3" fill="#bfe3f2"/></g>`;
    /* el humo se corta solo si arriba hay un lugar del mapa */
    const humo = (x, y, dur) => {
      let d = "";
      [[0, 0, 9, ".8"], [-9, -24, 12, ".6"], [-21, -50, 15, ".42"], [-34, -80, 18, ".24"]].forEach(b => {
        const cx = x + b[0], cy = y + b[1], r = b[2];
        if (!libreSuave(cx - r, cy - r, r * 2, r * 2)) return;
        d += `<circle cx="${nn(cx)}" cy="${nn(cy)}" r="${r}" fill="#fff" opacity="${b[3]}">
          <animate attributeName="cy" values="${nn(cy)};${nn(cy - 26)}" dur="${dur}s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="${b[3]};0" dur="${dur}s" repeatCount="indefinite"/></circle>`;
      });
      return d;
    };
    [[130, 620, .78, "#8d6e63"], [330, 590, .7, "#6d8f4e"], [620, 604, .82, "#a1674a"],
    [840, 648, .66, "#7b8f4a"]].forEach(c => {
      if (!libre(c[0] - 48 * c[2], c[1] - 50 * c[2], 96 * c[2], 100 * c[2])) return;
      s += casita(c[0], c[1], c[2], c[3]);
      s += humo(c[0] + 24 * c[2], c[1] - 48 * c[2], 7 + (c[0] % 5));
    });
    /* huertos: hileras de matas ordenadas, cosa de hobbits */
    const rB = azar(20260903);
    for (let i = 0; i < 26; i++) {
      const x = 60 + (i % 13) * 66, y = 700 + Math.floor(i / 13) * 34 + 14 * rB();
      if (!libre(x - 10, y - 10, 20, 20)) continue;
      s += `<circle cx="${nn(x)}" cy="${nn(y)}" r="${dd(7 + 4 * rB())}" fill="#5f9c3a" opacity=".8"/>`;
    }

    /* ---------- el ramal que baja a Bree y su plaza de tierra pisada:
       la aldea estaba en medio del prado, sin nada donde apoyarse ---------- */
    const RAMAL = "M466 662 Q444 716 462 764 Q476 800 490 826";
    s += `<path d="${RAMAL}" fill="none" stroke="#d9c8a0" stroke-width="20" stroke-linecap="round" opacity=".9"/>
      <path d="${RAMAL}" fill="none" stroke="#efe3c4" stroke-width="8" stroke-linecap="round" opacity=".65"/>
      <ellipse cx="492" cy="842" rx="122" ry="30" fill="#cdb68d" opacity=".85"/>
      <ellipse cx="492" cy="838" rx="98" ry="21" fill="#e0cca4" opacity=".6"/>`;
    [[392, 858], [598, 856], [428, 872], [560, 874]].forEach(m => {
      s += `<path d="M${m[0]} ${m[1]} q-4 -13 -9 -19 M${m[0]} ${m[1]} q1 -15 3 -21 M${m[0]} ${m[1]} q7 -12 11 -17" stroke="#6aa53c" stroke-width="3" fill="none" opacity=".65" stroke-linecap="round"/>`;
    });

    /* ---------- la arboleda del Bosque Viejo: el punto se sostenía en
       hierba lisa; ahora se sienta en una loma con sus árboles ---------- */
    s += `<path d="M872 990 Q930 852 992 820 Q1058 846 1092 990 Z" fill="#3f7332"/>
      <path d="M992 820 Q1044 842 1076 930 Q1024 872 972 838 Z" fill="#4f8a3c" opacity=".6"/>`;
    [[892, 812, 30, "#2f6b2b"], [922, 838, 24, "#3a7a33"], [1064, 820, 28, "#2f6b2b"], [1094, 848, 21, "#3a7a33"]].forEach(a => {
      s += `<g><rect x="${a[0] - 5}" y="${a[1]}" width="10" height="${Math.round(a[2] * 1.3)}" rx="5" fill="#5d4433"/>
        <circle cx="${a[0]}" cy="${a[1] - 6}" r="${a[2]}" fill="${a[3]}"/>
        <circle cx="${a[0] - Math.round(a[2] * .55)}" cy="${a[1] + 4}" r="${dd(a[2] * .6)}" fill="${a[3]}" opacity=".85"/>
        <circle cx="${a[0] + Math.round(a[2] * .5)}" cy="${a[1] + 2}" r="${dd(a[2] * .55)}" fill="${a[3]}" opacity=".8"/></g>`;
    });

    /* ---------- la bajada al puente: el camino rodea el Bosque Viejo por su
       ladera y llega hasta la cabecera del puente. Antes se quedaba a medias
       y el puente arrancaba de la nada en la orilla izquierda ---------- */
    const BAJADA = "M1078 766 Q1096 818 1050 852 Q1020 874 984 884";
    s += `<path d="${BAJADA}" fill="none" stroke="#cdbb92" stroke-width="30" stroke-linecap="round" opacity=".9"/>
      <path d="${BAJADA}" fill="none" stroke="#e6d9b8" stroke-width="12" stroke-linecap="round" opacity=".68"/>`;
    /* tierra pisada en la boca del puente y cuatro chinas sueltas */
    s += `<ellipse cx="1002" cy="890" rx="46" ry="15" fill="#cdb68d" opacity=".7"/>`;
    [[1064, 806, 6], [1036, 846, 5], [1008, 868, 4], [1074, 838, 4]].forEach(g => {
      s += `<ellipse cx="${g[0]}" cy="${g[1]}" rx="${g[2]}" ry="${dd(g[2] * .68)}" fill="#a99a86" opacity=".65"/>`;
    });

    /* ---------- el río y su puente: el paso de una etapa a la siguiente.
       El cauce va 60 px a la izquierda de lo que estaba: así los primeros
       árboles del bosque dejan de crecer dentro del agua y la casa de
       Rhosgobel tiene orilla donde apoyarse ---------- */
    s += `<path d="M1116 690 Q1090 800 1052 900 Q1014 1000 990 1100 L1270 1100 Q1256 1000 1240 902 Q1218 796 1176 690 Z" fill="url(#tmdXRio)" opacity=".95"/>`;
    /* brillos de la corriente, que se mueven despacio */
    [[1092, 780, 46, 6.5], [1062, 872, 62, 8], [1032, 964, 78, 7], [1146, 826, 40, 9]].forEach(b => {
      s += `<ellipse cx="${b[0]}" cy="${b[1]}" rx="${b[2]}" ry="7" fill="#fff" opacity=".34">
        <animate attributeName="opacity" values=".34;.08;.34" dur="${b[3]}s" repeatCount="indefinite"/></ellipse>`;
    });
    /* orillas de guijarros a los dos lados */
    for (let i = 0; i < 22; i++) {
      const lado = i % 2 ? 1 : -1, t = rB();
      const y = 720 + t * 340;
      const x = (lado < 0 ? 1116 - (y - 690) * 0.2 - 18 - 30 * rB() : 1176 + (y - 690) * 0.18 + 16 + 30 * rB());
      s += `<ellipse cx="${nn(x)}" cy="${nn(y)}" rx="${dd(6 + 6 * rB())}" ry="${dd(4 + 3 * rB())}" fill="#a99a86" opacity=".7"/>`;
    }
    /* la loma de la otra orilla: es donde se sienta Rhosgobel. El pie baja
       por debajo del suelo del primer plano (que aquí ronda los 990): si se
       queda en 960 asoma su base recta y el río sale con un escalón cuadrado */
    s += `<path d="M1180 1020 Q1194 760 1226 678 L1290 672 Q1340 712 1364 836 L1382 1020 Z" fill="url(#tmdXLoma)"/>
      <path d="M1226 678 L1290 672 Q1332 706 1352 800 Q1290 742 1226 678 Z" fill="#8ab453" opacity=".55"/>`;
    [[1318, 742, 22], [1352, 786, 17]].forEach(c => {
      s += `<g><rect x="${c[0] - 4}" y="${c[1]}" width="8" height="${Math.round(c[2] * 1.1)}" rx="4" fill="#6d4c41"/>
        <circle cx="${c[0]}" cy="${c[1] - 4}" r="${c[2]}" fill="#4d8a35"/>
        <circle cx="${c[0] - Math.round(c[2] * .5)}" cy="${c[1] + 4}" r="${dd(c[2] * .62)}" fill="#59a03d"/></g>`;
    });
    /* el puente de piedra: dos ojos y su barandilla */
    s += `<g>
      <path d="M972 877 L1316 855 L1316 909 L972 931 Z" fill="#a8a29a"/>
      <path d="M972 877 L1316 855 L1316 869 L972 891 Z" fill="#c8c2b8"/>
      <path d="M1040 931 Q1080 883 1120 925 L1120 935 L1040 939 Z" fill="#5b6a72" opacity=".8"/>
      <path d="M1146 928 Q1186 880 1226 920 L1226 930 L1146 934 Z" fill="#5b6a72" opacity=".8"/>
      <path d="M968 867 L1320 845" stroke="#b8b2a8" stroke-width="9" stroke-linecap="round"/>
      <path d="M978 843 L978 871 M1062 838 L1062 866 M1146 833 L1146 861 M1230 827 L1230 855 M1312 822 L1312 850" stroke="#b8b2a8" stroke-width="7" stroke-linecap="round"/>
      <path d="M970 933 Q1144 913 1318 895" stroke="#8f8981" stroke-width="6" fill="none" opacity=".7"/></g>`;
    /* el camino sale del puente y se mete en el bosque */
    s += `<path d="M1316 860 Q1424 844 1540 862" fill="none" stroke="#d9c8a0" stroke-width="22" stroke-linecap="round" opacity=".7"/>`;

    /* ---------- el bosque de árboles altos, que crece y decrece ---------- */
    const rC = azar(31071954);
    /* la altura del árbol depende de lo dentro del bosque que esté:
       pequeños al salir del río, altísimos en el centro, bajos al llegar
       a la roca. Así el bosque entra y sale sin cortes */
    const arbol = (x, y, k, oscuro) => {
      const h = 118 * k, w = 42 * k;
      return `<g transform="translate(${nn(x)} ${nn(y)})">
        <rect x="${dd(-w * .12)}" y="${dd(-h * .3)}" width="${dd(w * .24)}" height="${dd(h * .32)}" rx="${dd(w * .1)}" fill="#5d4433"/>
        <path d="M0 ${dd(-h)} L${dd(w * .62)} ${dd(-h * .52)} L${dd(-w * .62)} ${dd(-h * .52)} Z" fill="${oscuro ? "#2c5a28" : "url(#tmdXBosque)"}"/>
        <path d="M0 ${dd(-h * .82)} L${dd(w * .8)} ${dd(-h * .28)} L${dd(-w * .8)} ${dd(-h * .28)} Z" fill="${oscuro ? "#24501f" : "url(#tmdXBosque)"}"/>
        <path d="M0 ${dd(-h * .58)} L${dd(w)} ${dd(-h * .02)} L${dd(-w)} ${dd(-h * .02)} Z" fill="${oscuro ? "#1f4a1c" : "url(#tmdXBosque)"}"/></g>`;
    };
    /* fila de atrás, más pequeña y oscura: da fondo al bosque. Arranca
       pasado el puente: antes los primeros árboles crecían encima de él */
    for (let x = 1402; x < 2000; x += 46) {
      const g = peso(ETAPAS.bosque, x);
      if (g < 0.06) continue;
      const k = (0.5 + 0.72 * g) * (0.86 + 0.28 * rC());
      const y = suelo(x) - 128 + 18 * rC();
      if (!libre(x - 44 * k, y - 124 * k, 88 * k, 126 * k)) continue;
      s += arbol(x, y, k, true);
    }
    /* fila de delante, la de los árboles de verdad */
    for (let x = 1404; x < 1990; x += 62) {
      const g = peso(ETAPAS.bosque, x);
      if (g < 0.08) continue;
      const k = (0.62 + 1.02 * g) * (0.88 + 0.24 * rC());
      const y = suelo(x) - 46 + 22 * rC();
      if (!libre(x - 48 * k, y - 126 * k, 96 * k, 130 * k)) continue;
      s += arbol(x, y, k, false);
    }
    /* matas que hacen de bisagra entre la orilla y el bosque */
    const mata = (x, y, k, color) => `<g transform="translate(${nn(x)} ${nn(y)}) scale(${dd(k)})">
      <ellipse cx="0" cy="0" rx="26" ry="17" fill="${color}"/>
      <ellipse cx="-16" cy="6" rx="16" ry="11" fill="${color}" opacity=".85"/>
      <ellipse cx="17" cy="7" rx="14" ry="10" fill="${color}" opacity=".8"/></g>`;
    for (let x = 1332; x < 1520; x += 44) {
      const y = suelo(x) - 20 - 16 * rC();
      if (libre(x - 30, y - 22, 60, 40)) s += mata(x, y, 0.72 + 0.4 * rC(), "#4d8a35");
    }
    /* y otras que despiden el bosque camino de la roca */
    for (let x = 1900; x < 2110; x += 48) {
      const y = suelo(x) - 18 - 14 * rC();
      if (libre(x - 30, y - 22, 60, 40)) s += mata(x, y, 0.62 + 0.32 * rC(), "#4a7a3c");
    }

    /* ---------- la cornisa de Rivendel: un rellano de roca entre dos
       peñas, para que la casa de los elfos no cuelgue del aire ---------- */
    s += `<path d="M1330 1010 Q1352 874 1396 844 Q1430 874 1440 904 L1560 904 Q1572 874 1606 844 Q1650 876 1670 1010 Z" fill="url(#tmdXRepisa)"/>
      <path d="M1440 904 L1560 904 L1560 918 L1440 918 Z" fill="#8d9aa1"/>
      <path d="M1396 844 Q1416 868 1426 896 Q1402 878 1378 866 Z" fill="#c0c9ce" opacity=".7"/>
      <path d="M1606 844 Q1622 870 1632 900 Q1612 880 1588 868 Z" fill="#c0c9ce" opacity=".6"/>
      <ellipse cx="1500" cy="928" rx="76" ry="15" fill="#8fd6f2" opacity=".7"/>
      <ellipse cx="1478" cy="925" rx="34" ry="6" fill="#ffffff" opacity=".45">
        <animate attributeName="opacity" values=".45;.14;.45" dur="7s" repeatCount="indefinite"/></ellipse>`;

    /* ---------- rocas de la subida: la montaña empieza antes de la cumbre ---------- */
    const roca = (x, y, k, claro) => `<g transform="translate(${nn(x)} ${nn(y)}) scale(${dd(k)})">
      <path d="M-34 18 L-22 -14 L-2 -24 L20 -12 L34 16 Z" fill="${claro ? "#98a3ab" : "#7b8790"}"/>
      <path d="M-22 -14 L-2 -24 L2 -6 L-14 2 Z" fill="#b3bcc2" opacity=".7"/></g>`;
    const rD = azar(11091999);
    for (let x = 1840; x < 2820; x += 56) {
      const g = Math.max(peso(ETAPAS.montana, x), peso(ETAPAS.paso, x));
      if (g < 0.12) continue;
      const y = suelo(x) - 16 - 40 * rD();
      const k = (0.5 + 0.9 * g) * (0.7 + 0.6 * rD());
      if (libre(x - 38 * k, y - 30 * k, 76 * k, 52 * k)) s += roca(x, y, k, rD() > 0.55);
    }
    /* nieve pegada al suelo, solo en el tramo frío, y se deshace hacia los lados */
    for (let x = 1980; x < 2760; x += 42) {
      const g = campana(x, 2360, 340);
      if (g < 0.2) continue;
      const y = suelo(x) - 8 - 10 * rD();
      s += `<ellipse cx="${nn(x)}" cy="${nn(y)}" rx="${dd(16 + 22 * g)}" ry="${dd(5 + 5 * g)}" fill="#eef5f8" opacity="${dd(0.28 + 0.5 * g)}"/>`;
    }

    /* ---------- llanuras doradas: un manto que nace y muere en el suelo,
       nunca en una pared vertical, con hierba alta que mueve el viento ---------- */
    s += manto(2500, 3920, 196, "url(#tmdXDorado)", .85, 3.4, false, false);
    s += manto(2560, 3860, 152, "#efe0a0", .42, 4.6, false, false);
    /* la loma de Rohan: el jinete se sostenía en el aire sobre la llanura */
    s += `<path d="M2892 1010 Q2984 806 3072 770 Q3172 792 3256 1010 Z" fill="url(#tmdXOroLoma)" opacity=".95"/>
      <path d="M3072 770 Q3150 794 3216 916 Q3148 836 3068 792 Z" fill="#f0d98c" opacity=".5"/>`;
    [[2960, 862], [3006, 846], [3140, 848], [3186, 866]].forEach(v => {
      s += `<g><rect x="${v[0] - 3}" y="${v[1] - 26}" width="6" height="32" rx="3" fill="#a8875c"/>
        <rect x="${v[0] + 33}" y="${v[1] - 26}" width="6" height="32" rx="3" fill="#a8875c"/>
        <rect x="${v[0] - 4}" y="${v[1] - 20}" width="48" height="5" rx="2.5" fill="#c8a878"/>
        <rect x="${v[0] - 4}" y="${v[1] - 8}" width="48" height="5" rx="2.5" fill="#b8986a"/></g>`;
    });
    /* líneas de viento sobre la llanura */
    [[2860, 878, 300], [3080, 848, 360], [3320, 884, 280], [3480, 856, 240]].forEach((v, i) => {
      s += `<path d="M${v[0]} ${v[1]} q${nn(v[2] * .3)} -16 ${nn(v[2] * .55)} 4 q${nn(v[2] * .25)} 18 ${nn(v[2] * .45)} -6" stroke="#fff3c4" stroke-width="4" fill="none" opacity=".3" stroke-linecap="round">
        <animate attributeName="opacity" values=".3;.08;.3" dur="${7 + i}s" repeatCount="indefinite"/></path>`;
    });
    /* espigas: aparecen poco a poco al salir del paso y se van al llegar al secarral */
    const rE = azar(26071917);
    const espiga = (x, y, k, tono) => `<g transform="translate(${nn(x)} ${nn(y)}) scale(${dd(k)})" stroke="${tono}" stroke-width="4" fill="none" stroke-linecap="round">
      <path d="M0 0 q-3 -20 1 -38"/><path d="M0 -22 q-9 -7 -13 -17"/><path d="M0 -28 q9 -7 14 -16"/>
      <path d="M1 -38 q-6 -8 -5 -16 q7 5 9 15" fill="${tono}" stroke="none"/></g>`;
    for (let x = 2740; x < 3620; x += 30) {
      const g = peso(ETAPAS.llanura, x);
      if (g < 0.1) continue;
      for (let f = 0; f < 2; f++) {
        const xx = x + 14 * rE(), y = suelo(xx) - 4 - 34 * rE();
        if (rE() > 0.32 + 0.62 * g) continue;
        const k = (0.7 + 0.6 * g) * (0.8 + 0.4 * rE());
        if (libre(xx - 18 * k, y - 46 * k, 36 * k, 50 * k)) s += espiga(xx, y, k, rE() > 0.5 ? "#d8c169" : "#c2a94f");
      }
    }
    /* algún arbolillo suelto de la llanura, para que no sea un desierto verde */
    [[2900, 0, .9], [3150, 0, 1], [3400, 0, .8]].forEach(a => {
      const x = a[0], y = suelo(x) - 26, k = a[2];
      if (!libre(x - 46 * k, y - 92 * k, 92 * k, 96 * k)) return;
      s += `<g transform="translate(${x} ${nn(y)}) scale(${dd(k)})">
        <rect x="-6" y="-42" width="12" height="44" rx="5" fill="#8d6e4f"/>
        <ellipse cx="0" cy="-58" rx="42" ry="30" fill="#8aa855"/>
        <ellipse cx="-22" cy="-46" rx="24" ry="18" fill="#7d9c4c"/>
        <ellipse cx="24" cy="-48" rx="22" ry="17" fill="#94b25e"/></g>`;
    });

    /* ---------- el paso de montaña: el sendero que cruza entre las dos
       paredes (las paredes van con el resto del relieve, detrás). Va
       después de la llanura para que se vea entero, del suelo a la cumbre,
       y no aparezca cortado a media ladera ---------- */
    const SENDA = "M2686 996 Q2742 918 2776 852 Q2806 792 2790 730 Q2776 678 2812 636";
    s += `<path d="${SENDA}" fill="none" stroke="#cbbf9f" stroke-width="20" stroke-linecap="round" opacity=".85"/>
      <path d="${SENDA}" fill="none" stroke="#e6dcbd" stroke-width="8" stroke-linecap="round" opacity=".6"/>`;
    /* hitos de piedra apilada para no perderse en el paso */
    [[2732, 918, .9], [2800, 812, .8], [2806, 706, .74]].forEach(h => {
      const x = h[0], y = h[1], k = h[2];
      if (!libre(x - 20 * k, y - 44 * k, 40 * k, 48 * k)) return;
      s += `<g transform="translate(${x} ${y}) scale(${dd(k)})">
        <ellipse cx="0" cy="2" rx="19" ry="6" fill="#5d6a72" opacity=".4"/>
        <ellipse cx="0" cy="-4" rx="16" ry="7" fill="#98a3ab"/>
        <ellipse cx="1" cy="-16" rx="12" ry="6" fill="#a8b2b9"/>
        <ellipse cx="-1" cy="-26" rx="9" ry="5" fill="#b6bfc5"/></g>`;
    });

    /* ---------- tierras secas: el manto ocre entra poco a poco por debajo
       del oro de la llanura, sin la pared vertical de antes ---------- */
    s += manto(3200, W + 40, 158, "url(#tmdXSeco)", .78, 3.8, false, true);
    /* matojos secos, cada vez más frecuentes hacia la derecha */
    const rF = azar(19980206);
    const matojo = (x, y, k) => `<g transform="translate(${nn(x)} ${nn(y)}) scale(${dd(k)})" stroke="#8a7355" stroke-width="4" fill="none" stroke-linecap="round">
      <path d="M0 0 q-14 -12 -20 -26 M0 0 q-2 -20 2 -32 M0 0 q14 -12 22 -24 M0 0 q8 -18 6 -28"/></g>`;
    for (let x = 3380; x < W + 10; x += 52) {
      const g = peso(ETAPAS.seco, x);
      if (rF() > 0.24 + 0.6 * g) continue;
      const y = suelo(x) - 6 - 24 * rF();
      const k = 0.6 + 0.6 * rF();
      if (libre(x - 26 * k, y - 38 * k, 52 * k, 42 * k)) s += matojo(x, y, k);
    }
    /* grietas del suelo reseco */
    let grietas = "";
    for (let i = 0; i < 30; i++) {
      const x = 3460 + rF() * (W - 3480), y = 900 + rF() * 180;
      grietas += `M${nn(x)} ${nn(y)} q22 6 40 -4 q16 -8 32 2`;
    }
    s += `<path d="${grietas}" stroke="#3f3128" stroke-width="2.6" fill="none" opacity=".24" stroke-linecap="round"/>`;
    /* polvo en suspensión: la bruma cálida del final del camino. Nace en
       punta por la izquierda para que no se vea dónde empieza */
    s += `<path d="M3260 846 Q3470 706 3740 668 Q3960 640 ${W + 20} 664 L${W + 20} 848 Q3960 816 3740 846 Q3470 880 3260 846 Z" fill="url(#tmdXPolvo)"/>`;

    /* ---------- matorral repartido por la falda: sin él, el pie de monte
       es un plano liso enorme. El color lo marca la etapa, así el verde se
       va secando de izquierda a derecha. El vado del río se salta ---------- */
    const rH = azar(20260118);
    for (let x = 30; x < W; x += 58) {
      if (rH() > 0.6) continue;
      if (x > 940 && x < 1320) continue;
      const arena = peso(ETAPAS.seco, x);
      if (arena > 0.45) continue; /* al secarral ya le ponen matojos más abajo */
      const y = falda(x) + 14 + 96 * rH(), k = 0.44 + 0.5 * rH();
      if (!libre(x - 30 * k, y - 34 * k, 60 * k, 40 * k)) continue;
      const verde = peso(ETAPAS.comarca, x) + peso(ETAPAS.camino, x) + peso(ETAPAS.bosque, x);
      const pena = Math.max(peso(ETAPAS.montana, x), peso(ETAPAS.paso, x));
      if (pena > 0.55) {
        s += `<g transform="translate(${nn(x)} ${nn(y)}) scale(${dd(k)})" opacity=".5">
          <path d="M-26 12 L-14 -12 L4 -18 L20 -8 L28 12 Z" fill="#5d6a72"/></g>`;
        continue;
      }
      if (verde > 0.3) {
        s += `<g transform="translate(${nn(x)} ${nn(y)}) scale(${dd(k)})" opacity=".55">
          <rect x="-4" y="-6" width="8" height="26" rx="4" fill="#5d4433"/>
          <ellipse cx="0" cy="-16" rx="26" ry="20" fill="#3d6b2a"/>
          <ellipse cx="-14" cy="-8" rx="15" ry="12" fill="#457a30"/>
          <ellipse cx="15" cy="-9" rx="13" ry="11" fill="#356024"/></g>`;
        continue;
      }
      s += `<g transform="translate(${nn(x)} ${nn(y)}) scale(${dd(k)})" opacity=".45">
        <ellipse cx="0" cy="0" rx="24" ry="13" fill="#8f8a52"/>
        <ellipse cx="-15" cy="4" rx="14" ry="9" fill="#7d7a4c"/></g>`;
    }

    /* ---------- el suelo del primer plano, con el color de cada etapa ---------- */
    let borde = "M-20 " + nn(suelo(-20));
    for (let x = 40; x <= W + 20; x += 60) borde += "L" + nn(x) + " " + nn(suelo(x));
    s += `<path d="${borde}L${W + 20} 1100L-20 1100Z" fill="url(#tmdXTierra)" opacity=".9"/>`;
    /* el filo claro de arriba, a trozos: de punta a punta se leía como una
       raya tirada a regla por todo el ancho del mapa */
    const rJ = azar(20260421);
    let filo = "", corta = true, xf = -20;
    while (xf < W + 20) {
      const largo = corta ? 90 + 210 * rJ() : 40 + 110 * rJ();
      const x2 = Math.min(W + 20, xf + largo);
      if (corta) {
        filo += "M" + nn(xf) + " " + nn(suelo(xf));
        for (let x = xf + 30; x < x2; x += 30) filo += "L" + nn(x) + " " + nn(suelo(x));
        filo += "L" + nn(x2) + " " + nn(suelo(x2));
      }
      corta = !corta; xf = x2;
    }
    s += `<path d="${filo}" stroke="#ffffff" stroke-width="5" fill="none" opacity=".16" stroke-linecap="round"/>`;

    /* lengüetas: la tierra sube por encima del filo y la hierba baja por
       debajo, así el paso de un plano al otro no es una línea limpia */
    const rK = azar(20260518);
    for (let x = 20; x < W; x += 74) {
      const y = suelo(x), an = 26 + 54 * rK(), al = 8 + 16 * rK();
      const verde = peso(ETAPAS.comarca, x) + peso(ETAPAS.camino, x) + peso(ETAPAS.bosque, x);
      const oro = peso(ETAPAS.llanura, x), arena = peso(ETAPAS.seco, x);
      const suelto = arena > 0.5 ? "#9d7f5c" : (oro > 0.5 ? "#c1a95e" : (verde > 0.35 ? "#6f9e3c" : "#8b968c"));
      const alto = arena > 0.5 ? "#c2a071" : (oro > 0.5 ? "#dcc478" : (verde > 0.35 ? "#87b74e" : "#a3ada0"));
      if (rK() > 0.5) {
        s += `<path d="M${nn(x - an / 2)} ${nn(y + 4)} Q${nn(x)} ${nn(y - al)} ${nn(x + an / 2)} ${nn(y + 5)} Z" fill="${suelto}" opacity=".55"/>`;
      } else {
        s += `<path d="M${nn(x - an / 2)} ${nn(y - 3)} Q${nn(x)} ${nn(y + al)} ${nn(x + an / 2)} ${nn(y - 2)} Z" fill="${alto}" opacity=".5"/>`;
      }
    }

    /* ---------- el vado: el río cruza el primer plano y llega al borde del
       lienzo. Antes moría contra el filo del suelo con un corte recto ---------- */
    /* las dos orillas son la continuación exacta de las curvas del cauce de
       arriba (de ahí las fórmulas), y el relleno usa el mismo degradado en
       coordenadas del lienzo: así el empalme no se ve */
    const vIzq = y => 1052 - 76 * ((y - 900) / 200) + 14 * Math.pow((y - 900) / 200, 2);
    const vDer = y => 1240 + 32 * ((y - 902) / 198) - 2 * Math.pow((y - 902) / 198, 2);
    let agua = "M" + nn(vIzq(936)) + " 936";
    for (let y = 956; y <= 1100; y += 18) agua += "L" + nn(vIzq(y)) + " " + nn(y);
    agua += "L" + nn(vIzq(1100)) + " 1100L" + nn(vDer(1100)) + " 1100";
    for (let y = 1082; y >= 936; y -= 18) agua += "L" + nn(vDer(y)) + " " + nn(y);
    s += `<path d="${agua}Z" fill="url(#tmdXVado)" opacity=".95"/>`;
    /* arena mojada en las dos orillas, para que el agua no acabe en un canto */
    [[1030, 990, 26], [1006, 1058, 22], [1252, 1020, 24], [1264, 1082, 20]].forEach(l => {
      s += `<ellipse cx="${l[0]}" cy="${l[1]}" rx="${dd(l[2] * .5)}" ry="${l[2]}" fill="#c3b391" opacity=".4"/>`;
    });
    /* orillas de guijarros y espuma, para que el agua no acabe en un canto */
    const rL = azar(20260930);
    for (let i = 0; i < 26; i++) {
      const y = 950 + rL() * 148, lado = i % 2 ? 1 : -1;
      const x = lado < 0 ? vIzq(y) - 4 - 22 * rL() : vDer(y) + 3 + 22 * rL();
      s += `<ellipse cx="${nn(x)}" cy="${nn(y)}" rx="${dd(5 + 7 * rL())}" ry="${dd(3 + 4 * rL())}" fill="#a99a86" opacity=".72"/>`;
    }
    [[1120, 1000, 52, 7.5], [1170, 1064, 44, 9], [1090, 1042, 34, 6.5]].forEach(b => {
      s += `<ellipse cx="${b[0]}" cy="${b[1]}" rx="${b[2]}" ry="7" fill="#ffffff" opacity=".3">
        <animate attributeName="opacity" values=".3;.08;.3" dur="${b[3]}s" repeatCount="indefinite"/></ellipse>`;
    });
    /* dos piedras grandes dentro del agua, que rompen la corriente */
    [[1078, 1006, 17], [1214, 1058, 14]].forEach(p => {
      s += `<g><ellipse cx="${p[0]}" cy="${nn(p[1] + p[2] * .5)}" rx="${nn(p[2] * 1.2)}" ry="${dd(p[2] * .42)}" fill="#ffffff" opacity=".22"/>
        <path d="M${p[0] - p[2]} ${p[1] + 6} Q${nn(p[0] - p[2] * .8)} ${nn(p[1] - p[2] * .8)} ${p[0]} ${nn(p[1] - p[2])} Q${nn(p[0] + p[2] * .9)} ${nn(p[1] - p[2] * .7)} ${p[0] + p[2]} ${p[1] + 6} Z" fill="#8d8375"/>
        <path d="M${nn(p[0] - p[2] * .5)} ${nn(p[1] - p[2] * .4)} Q${p[0]} ${nn(p[1] - p[2] * .95)} ${nn(p[0] + p[2] * .45)} ${nn(p[1] - p[2] * .45)} Q${p[0]} ${nn(p[1] - p[2] * .5)} ${nn(p[0] - p[2] * .5)} ${nn(p[1] - p[2] * .4)} Z" fill="#b5aa99" opacity=".8"/></g>`;
    });

    /* el cauce se salta al sembrar el primer plano: ni hierba ni piedras
       dentro del agua */
    const enAgua = (x, y) => y > 928 && x > vIzq(Math.max(y, 936)) - 8 && x < vDer(Math.max(y, 936)) + 8;

    /* mechones de hierba o de arena en el borde, del color que toque */
    const rG = azar(20261231);
    for (let x = 10; x < W; x += 34) {
      const y = suelo(x) + 4 + 8 * rG();
      if (enAgua(x, y)) continue;
      const verde = peso(ETAPAS.comarca, x) + peso(ETAPAS.camino, x) + peso(ETAPAS.bosque, x);
      const oro = peso(ETAPAS.llanura, x), arena = peso(ETAPAS.seco, x);
      const tono = arena > 0.5 ? "#9b7f5f" : (oro > 0.5 ? "#c9b262" : (verde > 0.35 ? "#6aa53c" : "#8f9a8a"));
      const alt = 12 + 12 * rG();
      s += `<path d="M${nn(x)} ${nn(y)} q-4 -${nn(alt * .7)} -8 -${nn(alt)} M${nn(x)} ${nn(y)} q1 -${nn(alt * .8)} 3 -${nn(alt * 1.1)} M${nn(x)} ${nn(y)} q6 -${nn(alt * .6)} 10 -${nn(alt * .9)}" stroke="${tono}" stroke-width="3" fill="none" opacity=".6" stroke-linecap="round"/>`;
    }
    /* y la franja de abajo, la que llega al borde del lienzo: hierba, chinas,
       piedras planas, ramitas y hojarasca. Era una banda de color liso de
       4200 px de largo, sobre todo de la mitad a la derecha */
    const rI = azar(20260707);
    for (let x = 12; x < W; x += 25) {
      const arriba = suelo(x) + 18;
      const y = arriba + (1096 - arriba) * (0.15 + 0.85 * rI());
      if (enAgua(x, y)) continue;
      const verde = peso(ETAPAS.comarca, x) + peso(ETAPAS.camino, x) + peso(ETAPAS.bosque, x);
      const oro = peso(ETAPAS.llanura, x), arena = peso(ETAPAS.seco, x);
      const tono = arena > 0.5 ? "#8b7053" : (oro > 0.5 ? "#bda85c" : (verde > 0.35 ? "#5d9834" : "#7f8a7c"));
      const cerca = (y - arriba) / Math.max(40, 1096 - arriba); /* 0 arriba, 1 al pie */
      const k = 0.7 + 0.9 * cerca;
      const d = rI();
      if (d > 0.78) { /* piedra plana con su luz */
        const r = (7 + 9 * rI()) * k;
        s += `<g opacity=".55"><ellipse cx="${nn(x)}" cy="${nn(y)}" rx="${dd(r)}" ry="${dd(r * .58)}" fill="#6b6154"/>
          <ellipse cx="${nn(x - r * .18)}" cy="${nn(y - r * .18)}" rx="${dd(r * .72)}" ry="${dd(r * .38)}" fill="#a89c8a"/></g>`;
      } else if (d > 0.62) { /* ramita o hojarasca */
        const l = (14 + 16 * rI()) * k;
        s += `<path d="M${nn(x - l / 2)} ${nn(y)} q${nn(l * .3)} -6 ${nn(l)} 1 M${nn(x - l * .1)} ${nn(y - 1)} q${nn(l * .2)} -7 ${nn(l * .34)} -9" stroke="${arena > 0.5 ? "#6f5a44" : "#5a4a33"}" stroke-width="${dd(2.4 * k)}" fill="none" opacity=".42" stroke-linecap="round"/>`;
      } else if (d > 0.5) { /* china suelta */
        s += `<ellipse cx="${nn(x)}" cy="${nn(y)}" rx="${dd((4 + 5 * rI()) * k)}" ry="${dd((2.6 + 3 * rI()) * k)}" fill="${tono}" opacity=".34"/>`;
      } else { /* mata de hierba o de esparto */
        const alt = (10 + 13 * rI()) * k;
        s += `<path d="M${nn(x)} ${nn(y)} q-4 -${nn(alt * .7)} -8 -${nn(alt)} M${nn(x)} ${nn(y)} q1 -${nn(alt * .8)} 3 -${nn(alt * 1.05)} M${nn(x)} ${nn(y)} q6 -${nn(alt * .6)} 10 -${nn(alt * .85)}" stroke="${tono}" stroke-width="${dd(2.6 * k)}" fill="none" opacity=".45" stroke-linecap="round"/>`;
      }
    }
    /* algún matojo grande al pie del lienzo: da el último plano de todos */
    const rM = azar(20261010);
    for (let x = 60; x < W; x += 168) {
      const y = 1046 + 40 * rM();
      if (enAgua(x, y)) continue;
      const verde = peso(ETAPAS.comarca, x) + peso(ETAPAS.camino, x) + peso(ETAPAS.bosque, x);
      const oro = peso(ETAPAS.llanura, x), arena = peso(ETAPAS.seco, x);
      const k = 1 + 0.5 * rM();
      if (arena > 0.5) {
        s += `<g transform="translate(${nn(x)} ${nn(y)}) scale(${dd(k)})" stroke="#7d6547" stroke-width="4" fill="none" stroke-linecap="round" opacity=".5">
          <path d="M0 0 q-16 -14 -22 -30 M0 0 q-2 -22 2 -36 M0 0 q16 -14 24 -28 M0 0 q9 -20 7 -32"/></g>`;
      } else if (oro > 0.5) {
        s += `<g transform="translate(${nn(x)} ${nn(y)}) scale(${dd(k)})" stroke="#c2a94f" stroke-width="4" fill="none" stroke-linecap="round" opacity=".5">
          <path d="M0 0 q-6 -22 -2 -40 M0 0 q6 -20 14 -34 M0 0 q-16 -16 -20 -30"/></g>`;
      } else if (verde > 0.35) {
        s += `<g transform="translate(${nn(x)} ${nn(y)}) scale(${dd(k)})" opacity=".45">
          <ellipse cx="0" cy="-6" rx="22" ry="15" fill="#4a7d2c"/>
          <ellipse cx="-13" cy="1" rx="13" ry="9" fill="#548a32"/>
          <ellipse cx="14" cy="0" rx="11" ry="8" fill="#3f6b24"/></g>`;
      } else {
        /* al pie de la montaña la hierba va apagada, del color de la piedra */
        s += `<g transform="translate(${nn(x)} ${nn(y)}) scale(${dd(k)})" opacity=".4">
          <ellipse cx="0" cy="-5" rx="20" ry="13" fill="#6f7a6c"/>
          <ellipse cx="-12" cy="1" rx="12" ry="8" fill="#7d887a"/>
          <ellipse cx="13" cy="0" rx="10" ry="7" fill="#616b5f"/></g>`;
      }
    }

    return s;
  }

  /* ============================================================
     Los envoltorios.
     ESPACIO conserva su deco de siempre por delante: sus órbitas
     y sus planetas siguen mandando.
     TIERRA MEDIA se dibuja entera aquí: el escenario que traía
     60-deco.js estaba medido para 2600 de ancho y en un mapa de
     4200 quedaba amontonado en el tercio izquierdo.
     En los dos casos sale un solo <svg>.
     ============================================================ */
  /* Las brumas y el resplandor del Sol que traía la deco de siempre son
     manchas de color plano: al ensanchar el mapa se ven como óvalos y
     aros recortados con tijera en mitad del cielo. Aquí se les cambia el
     relleno por un degradado que se apaga hacia fuera. Si algún día
     cambian, la sustitución no encuentra nada y no rompe nada. */
  const BRUMAS = [
    ["rgba(180,140,255,.10)", "url(#espXBrumaGal)"],
    ["rgba(120,200,255,.07)", "url(#espXBrumaFria)"],
    ["rgba(40,20,80,.35)", "url(#espXBrumaMist)"],
    ["rgba(255,120,60,.05)", "url(#espXBrumaCalida)"],
    ["rgba(255,214,64,.10)", "url(#espXHaloSol)"],
    ["rgba(255,214,64,.16)", "url(#espXHaloSolB)"]
  ];
  function suavizaBrumas(txt) {
    BRUMAS.forEach(b => { txt = txt.split('fill="' + b[0] + '"').join('fill="' + b[1] + '"'); });
    return txt;
  }

  function envolver(tema, escenario) {
    const t = THEMES[tema];
    if (!t || !t.content || !t.content.explore) return;
    const orig = t.content.explore.deco;
    t.content.explore.deco = function (e) {
      const previo = typeof orig === "function" ? (orig.call(this, e) || "") : (orig || "");
      const inner = previo.replace(/^[\s\S]*?<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "");
      return decoSvg(escenario(e) + suavizaBrumas(inner), e.width);
    };
  }

  function envolverEntero(tema, escenario) {
    const t = THEMES[tema];
    if (!t || !t.content || !t.content.explore) return;
    t.content.explore.deco = function (e) { return decoSvg(escenario(e), e.width); };
  }

  envolver("espacio", cieloEspacio);
  envolverEntero("tierramedia", paisajeTierraMedia);
})();

/* Dos parejas de constelaciones se tocaban al agrandarse los iconos en pantalla
   (Osa Mayor con Osa Menor, y Cruz del Sur con Lira), y el cometa Halley se
   montaba sobre Orión. Se separan aquí, que es lo último que toca el mapa.
   Medido después en el navegador con los iconos al máximo (poik 1,4): quedaban
   dos parejas tocándose, el cometa contra Casiopea y Andrómeda contra la Vía
   Láctea, y se apartan también. */
(function () {
  const ex = THEMES.espacio && THEMES.espacio.content && THEMES.espacio.content.explore;
  if (!ex) return;
  const mover = (nombre, x, y) => {
    const p = ex.pois.find(p => p.name && p.name.es === nombre);
    if (p) { p.x = x; p.y = y; }
  };
  mover("Osa Menor", 2440, 210);
  mover("Lira", 2690, 165);
  mover("El cometa Halley", 2500, 524);
  mover("Andrómeda", 4400, 238);
})();
