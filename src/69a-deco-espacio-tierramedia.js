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
      <linearGradient id="espXVia" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="${W}" y2="0">
        <stop offset="0%" stop-color="#b9c9ff" stop-opacity=".003"/>
        <stop offset="24%" stop-color="#c6d2ff" stop-opacity=".008"/>
        <stop offset="46%" stop-color="#dcd6ff" stop-opacity=".016"/>
        <stop offset="64%" stop-color="#cfe0ff" stop-opacity=".018"/>
        <stop offset="84%" stop-color="#c3b9ff" stop-opacity=".012"/>
        <stop offset="100%" stop-color="#a9b6f0" stop-opacity=".006"/>
      </linearGradient>
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

    /* ---------- la Vía Láctea: capas superpuestas de menor a mayor
       anchura, así el borde se deshilacha en vez de cortar en seco ---------- */
    const bandaVia = medio => {
      const N = 12, xa = -220, xb = W + 220;
      let arriba = "", abajo = "";
      for (let i = 0; i <= N; i++) {
        const x = xa + (xb - xa) * i / N, u = (x + 200) / (W + 400);
        const g = medio * (0.7 + 0.44 * Math.sin(u * 3.1 + 0.6));
        arriba += (i ? " L" : "M") + x.toFixed(0) + " " + (via(x) - g).toFixed(0);
        abajo = " L" + x.toFixed(0) + " " + (via(x) + g).toFixed(0) + abajo;
      }
      return `<path d="${arriba}${abajo} Z" fill="url(#espXVia)"/>`;
    };
    [228, 208, 188, 168, 148, 128, 108, 88, 68, 50, 32].forEach(m => { s += bandaVia(m); });

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
      [4560, 62, 4.6, "#e6d8ff"], [880, 918, 3.8, "#dbe8ff"], [620, 128, 4.2, "#ffffff"]];
    GRANDES.forEach(g => { if (libre(g[0], g[1], g[2] * 3.6)) s += chispa(g[0], g[1], g[2], g[3], .85); });

    /* ---------- cometas lejanos con su estela ---------- */
    const cometa = (x, y, ang, k, c) => `<g transform="translate(${x} ${y}) rotate(${ang}) scale(${k})">
      <path d="M6 -12 Q-110 -20 -300 -3 Q-110 5 6 12 Q16 0 6 -12 Z" fill="url(#espXCola)"/>
      <path d="M4 -6 Q-90 -10 -186 -1 Q-90 4 4 6 Z" fill="${c}" opacity=".2"/>
      <circle r="10" fill="${c}" opacity=".22"/><circle r="4.2" fill="#f6fcff"/></g>`;
    s += `<g opacity=".8"><animateTransform attributeName="transform" type="translate" values="0 0;34 -12;0 0" dur="34s" repeatCount="indefinite"/>${cometa(360, 172, 13, .68, "#9fd4ff")}</g>`;
    s += `<g opacity=".72"><animateTransform attributeName="transform" type="translate" values="0 0;-28 10;0 0" dur="46s" repeatCount="indefinite"/>${cometa(2260, 946, -8, .6, "#bfe6ff")}</g>`;
    s += `<g opacity=".6">${cometa(4240, 118, 18, .5, "#cfd9ff")}</g>`;

    /* ---------- horizonte lunar: gris tenue, abajo del todo ---------- */
    const suelo = `M-30 ${H} L-30 1054 Q300 1016 620 1046 Q980 1076 1340 1042 Q1700 1008 2060 1044 Q2460 1080 2860 1040 Q3260 1002 3660 1042 Q4060 1078 4460 1038 Q4800 1004 ${W + 30} 1048 L${W + 30} ${H} Z`;
    s += `<path d="${suelo}" fill="url(#espXLuna)"/>
      <path d="M-30 1054 Q300 1016 620 1046 Q980 1076 1340 1042 Q1700 1008 2060 1044 Q2460 1080 2860 1040 Q3260 1002 3660 1042 Q4060 1078 4460 1038 Q4800 1004 ${W + 30} 1048" fill="none" stroke="#c3cede" stroke-opacity=".22" stroke-width="3"/>`;
    let crat = "";
    for (let i = 0; i < 20; i++) {
      const x = 40 + R() * (W - 80), y = 1058 + R() * 34, r = 9 + R() * 26;
      crat += `<ellipse cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" rx="${r.toFixed(0)}" ry="${(r * 0.38).toFixed(0)}"/>`;
    }
    s += `<g fill="#1a2033" fill-opacity=".24">${crat}</g>`;
    /* una bruma clara justo encima del horizonte, como polvo levantado */
    s += `<rect x="0" y="938" width="${W}" height="116" fill="url(#espXBruma)"/>`;

    return s;
  }

  /* ============================================================
     TIERRA MEDIA: paisaje continuo de la Comarca a las tierras secas
     ============================================================ */
  function paisajeTierraMedia(e) {
    const W = e.width || 2600, H = 1100;
    const R = azar(19551029);

    /* cajas de reserva alrededor de cada lugar del mapa */
    const cajas = [];
    e.pois.forEach(p => {
      const w = (p.iw || 96) * 1.35 + 30, h = (p.ih || 96) * 1.35 + 54;
      cajas.push([p.x - w / 2, p.y - h / 2, w, h]);
    });
    const libre = (x, y, w, h) => !cajas.some(c => x < c[0] + c[2] && x + w > c[0] && y < c[1] + c[3] && y + h > c[1]);
    /* para lo muy translúcido (humo, destellos) basta con respetar el
       tamaño real del icono más un margen corto */
    const finas = e.pois.map(p => {
      const w = (p.iw || 96) * 1.05 + 16, h = (p.ih || 96) * 1.05 + 16;
      return [p.x - w / 2, p.y - h / 2, w, h];
    });
    const libreSuave = (x, y, w, h) => !finas.some(c => x < c[0] + c[2] && x + w > c[0] && y < c[1] + c[3] && y + h > c[1]);

    let s = "";

    /* ---------- degradados propios (prefijo tmdX) ---------- */
    s += `<defs>
      <linearGradient id="tmdXCielo" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#a8dcf6" stop-opacity=".55"/>
        <stop offset="46%" stop-color="#d8ecf6" stop-opacity=".34"/>
        <stop offset="100%" stop-color="#f0e8cf" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="tmdXLejos" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#9fb6c8"/><stop offset="100%" stop-color="#c4d3dd"/>
      </linearGradient>
      <linearGradient id="tmdXSierra" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#8798a8"/><stop offset="100%" stop-color="#5d6f7e"/>
      </linearGradient>
      <linearGradient id="tmdXPrado" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#a5d16a"/><stop offset="100%" stop-color="#6ba33e"/>
      </linearGradient>
      <linearGradient id="tmdXPradoB" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#8dc357"/><stop offset="100%" stop-color="#4f8a2f"/>
      </linearGradient>
      <linearGradient id="tmdXDorado" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#dfd07a"/><stop offset="100%" stop-color="#a8a049"/>
      </linearGradient>
      <linearGradient id="tmdXSeco" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#b08f6d"/><stop offset="100%" stop-color="#6f5540"/>
      </linearGradient>
      <linearGradient id="tmdXSecoB" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#8c705a"/><stop offset="100%" stop-color="#4e3d31"/>
      </linearGradient>
      <linearGradient id="tmdXRio" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#8fd6f2"/><stop offset="100%" stop-color="#2f8fc4"/>
      </linearGradient>
      <linearGradient id="tmdXPolvo" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#e0b784" stop-opacity="0"/>
        <stop offset="48%" stop-color="#e0b784" stop-opacity=".26"/>
        <stop offset="100%" stop-color="#e0b784" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="tmdXSierraSeca" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#b99873"/><stop offset="100%" stop-color="#8b6f55"/>
      </linearGradient>
    </defs>`;

    /* ---------- el cielo y el sol de la mañana ---------- */
    s += `<rect x="0" y="0" width="${W}" height="640" fill="url(#tmdXCielo)"/>`;
    s += `<g transform="translate(392 128)">
      <circle r="118" fill="#fff4c4" opacity=".22"><animate attributeName="r" values="118;132;118" dur="12s" repeatCount="indefinite"/></circle>
      <circle r="66" fill="#fff8dc" opacity=".55"/><circle r="44" fill="#fffdf0" opacity=".75"/></g>`;

    /* ---------- nubes lentas ---------- */
    const nube = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})">
      <ellipse cx="0" cy="0" rx="86" ry="30" fill="#fff" opacity=".82"/>
      <ellipse cx="-54" cy="11" rx="46" ry="21" fill="#fff" opacity=".78"/>
      <ellipse cx="48" cy="13" rx="52" ry="23" fill="#fff" opacity=".78"/>
      <ellipse cx="-8" cy="-23" rx="48" ry="27" fill="#fff" opacity=".86"/>
      <ellipse cx="30" cy="-14" rx="34" ry="19" fill="#fff" opacity=".7"/></g>`;
    [[560, 142, 1, 62, 48], [1160, 104, .74, 82, 62], [1790, 168, .9, 54, 40], [2300, 116, .66, 74, 56]].forEach(n => {
      s += `<g opacity=".72"><animateTransform attributeName="transform" type="translate" values="0 0;${n[3]} 0;0 0" dur="${n[4]}s" repeatCount="indefinite"/>${nube(n[0], n[1], n[2])}</g>`;
    });

    /* ---------- cordillera lejana en bruma, de punta a punta ---------- */
    s += `<path d="M-20 560 L120 430 L250 500 L390 396 L530 486 L680 372 L830 470 L980 388 L1130 476 L1280 384
      L1430 468 L1580 396 L1740 476 L1900 404 L2060 484 L2210 420 L2360 492 L2500 430 L${W + 20} 500 L${W + 20} 700 L-20 700 Z"
      fill="url(#tmdXLejos)" opacity=".42"/>`;

    /* ---------- montañas nevadas del centro, con sus crestas ---------- */
    const CIMAS = [[640, 352, 210], [1000, 396, 190], [1198, 372, 170], [1620, 348, 200], [1830, 424, 150]];
    CIMAS.forEach(m => {
      const x = m[0], y = m[1], a = m[2];
      s += `<path d="M${x - a} 830 L${x} ${y} L${x + a} 830 Z" fill="url(#tmdXSierra)"/>
        <path d="M${x - a * .34} ${y + a * .34} L${x} ${y} L${x + a * .34} ${y + a * .34} Q${x + a * .14} ${y + a * .2} ${x} ${y + a * .3} Q${x - a * .14} ${y + a * .2} ${x - a * .34} ${y + a * .34} Z" fill="#f2f6f8"/>
        <path d="M${x} ${y} L${x + a} 830 L${x + a * .3} 830 Z" fill="#4e5f6e" opacity=".45"/>`;
    });
    /* estribaciones más bajas para que la sierra no acabe de golpe */
    s += `<path d="M420 830 L520 566 L620 700 L720 604 L840 830 Z" fill="#6d7f8e" opacity=".8"/>
      <path d="M1300 830 L1392 604 L1470 706 L1548 620 L1660 830 Z" fill="#66788a" opacity=".78"/>`;

    /* ---------- el prado general del centro ---------- */
    s += `<path d="M700 812 Q980 758 1260 802 Q1520 842 1780 794 Q2000 754 2140 802 L2140 1100 L700 1100 Z" fill="url(#tmdXPradoB)"/>
      <path d="M700 812 Q980 758 1260 802 Q1520 842 1780 794 Q2000 754 2140 802 L2140 846 Q2000 798 1780 838 Q1520 886 1260 846 Q980 802 700 856 Z" fill="#8dc357" opacity=".55"/>`;

    /* ---------- colinas de la Comarca: crestas por encima de las de siempre ---------- */
    s += `<path d="M-20 648 Q150 502 340 566 Q520 618 700 552 Q820 508 900 570 L900 1100 L-20 1100 Z" fill="url(#tmdXPrado)"/>
      <path d="M-20 748 Q210 626 430 690 Q640 748 820 682 Q900 652 960 700 L960 1100 L-20 1100 Z" fill="url(#tmdXPradoB)" opacity=".9"/>`;
    /* el camino de tierra que sube por las colinas */
    s += `<path d="M-20 706 Q150 578 340 630 Q520 680 700 616 Q820 574 910 634" fill="none" stroke="#d9c8a0" stroke-width="26" stroke-linecap="round" opacity=".92"/>
      <path d="M-20 706 Q150 578 340 630 Q520 680 700 616 Q820 574 910 634" fill="none" stroke="#efe3c4" stroke-width="10" stroke-linecap="round" opacity=".7"/>`;

    /* ---------- cercas de madera junto al camino ---------- */
    const cerca = (x, y, n, k) => {
      let d = `<g transform="translate(${x} ${y}) scale(${k})">`;
      d += `<rect x="-4" y="-6" width="${n * 26 + 8}" height="6" rx="3" fill="#c8a878"/>
        <rect x="-4" y="10" width="${n * 26 + 8}" height="6" rx="3" fill="#b8986a"/>`;
      for (let i = 0; i <= n; i++) d += `<rect x="${i * 26 - 3}" y="-16" width="7" height="42" rx="3" fill="#a8875c"/>`;
      return d + "</g>";
    };
    [[96, 644, 4, 1], [506, 672, 3, .9], [1150, 862, 3, .85], [1748, 892, 3, .8]].forEach(c => {
      if (libre(c[0] - 8, c[1] - 20, c[2] * 26 * c[3] + 20, 50)) s += cerca(c[0], c[1], c[2], c[3]);
    });

    /* ---------- casitas de la Comarca, con su chimenea ---------- */
    const casita = (x, y, k, techo) => `<g transform="translate(${x} ${y}) scale(${k})">
      <ellipse cx="0" cy="42" rx="46" ry="9" fill="#3f6b26" opacity=".26"/>
      <rect x="-34" y="-8" width="68" height="50" rx="7" fill="#f0e2c2"/>
      <path d="M-44 -8 L0 -46 L44 -8 Z" fill="${techo}"/>
      <path d="M-44 -8 L44 -8 L44 -2 L-44 -2 Z" fill="#00000018"/>
      <rect x="18" y="-42" width="12" height="24" rx="3" fill="#9b7b56"/>
      <rect x="-12" y="8" width="24" height="34" rx="4" fill="#a5713f"/>
      <circle cx="6" cy="26" r="2.4" fill="#ffe082"/>
      <rect x="-28" y="4" width="14" height="14" rx="3" fill="#bfe3f2"/>
      <rect x="16" y="4" width="14" height="14" rx="3" fill="#bfe3f2"/></g>`;
    /* el humo sale de la chimenea de cada casa: si la casa no cabe,
       tampoco se dibuja su humo (nada de humo huérfano en el aire) */
    /* la columna se corta sola si arriba hay un lugar del mapa:
       ninguna bocanada se cuela por debajo de un icono */
    const humo = (x, y, dur) => {
      let d = "";
      [[0, 0, 9, ".8"], [-9, -24, 12, ".6"], [-21, -50, 15, ".42"], [-34, -80, 18, ".24"]].forEach(b => {
        const cx = x + b[0], cy = y + b[1], r = b[2];
        if (!libreSuave(cx - r, cy - r, r * 2, r * 2)) return;
        d += `<circle cx="${cx}" cy="${cy}" r="${r}" opacity="${b[3]}"/>`;
      });
      return d ? `<g fill="#f4f7f2" opacity=".6"><animateTransform attributeName="transform" type="translate" values="0 0;12 -16;0 0" dur="${dur}" repeatCount="indefinite"/>${d}</g>` : "";
    };
    const CASAS = [[34, 604, .85, "#c76b4a", "13s"], [552, 616, .9, "#b9603f", "16s"]];
    CASAS.forEach(c => {
      if (!libre(c[0] - 50 * c[2], c[1] - 52 * c[2], 100 * c[2], 100 * c[2])) return;
      s += casita(c[0], c[1], c[2], c[3]) + humo(c[0] + 24 * c[2], c[1] - 48 * c[2], c[4]);
    });

    /* ---------- el molino, girando despacio ---------- */
    s += `<g>
      <ellipse cx="680" cy="580" rx="34" ry="8" fill="#3f6b26" opacity=".24"/>
      <path d="M664 578 L672 490 L692 490 L700 578 Z" fill="#e6d9bb"/>
      <path d="M668 500 L696 500 L692 490 L672 490 Z" fill="#a8875c"/>
      <rect x="674" y="540" width="14" height="20" rx="3" fill="#a5713f"/>
      <g transform="translate(681 486)"><g><animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="30s" repeatCount="indefinite"/>
        <rect x="-3" y="-56" width="6" height="112" rx="3" fill="#8d6e63"/>
        <rect x="-56" y="-3" width="112" height="6" rx="3" fill="#8d6e63"/>
        <rect x="-2" y="-54" width="16" height="42" rx="3" fill="#f2ead2"/>
        <rect x="14" y="-2" width="42" height="16" rx="3" fill="#f2ead2"/>
        <rect x="-14" y="12" width="16" height="42" rx="3" fill="#f2ead2"/>
        <rect x="-56" y="-14" width="42" height="16" rx="3" fill="#f2ead2"/>
        <circle r="6" fill="#7a5b48"/></g></g></g>`;

    /* ---------- flores y matas por las colinas ---------- */
    const FLOR = ["#f8bbd0", "#fff59d", "#ce93d8", "#ffffff"];
    let jardin = "";
    for (let i = 0; i < 48; i++) {
      const x = 20 + R() * 880, y = 566 + R() * 200;
      if (!libre(x - 8, y - 8, 16, 16)) continue;
      const c = FLOR[(R() * FLOR.length) | 0];
      jardin += `<circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="${(2.6 + R() * 2).toFixed(1)}" fill="${c}"/>`;
    }
    s += `<g opacity=".85">${jardin}</g>`;
    let hierba = "";
    for (let i = 0; i < 46; i++) {
      const x = 20 + R() * 2000, y = 620 + R() * 320;
      if (!libre(x - 10, y - 20, 20, 24)) continue;
      hierba += `<path d="M${x.toFixed(0)} ${y.toFixed(0)} q-4 -12 -9 -17 M${(x + 6).toFixed(0)} ${y.toFixed(0)} q2 -14 6 -19"/>`;
    }
    s += `<g stroke="#4f8a2f" stroke-width="3" fill="none" stroke-linecap="round" opacity=".62">${hierba}</g>`;

    /* ---------- el río ancho con sus orillas y su puentecito ---------- */
    const cauce = "M890 596 Q856 700 918 834 Q982 962 876 1100";
    s += `<path d="${cauce}" fill="none" stroke="#c9b48c" stroke-width="86" stroke-linecap="round" opacity=".5"/>
      <path d="${cauce}" fill="none" stroke="url(#tmdXRio)" stroke-width="58" stroke-linecap="round" opacity=".9"/>
      <path d="${cauce}" fill="none" stroke="#bde9fb" stroke-width="18" stroke-linecap="round" opacity=".35"/>`;
    s += `<path d="M866 618 q22 -12 44 0 M876 906 q22 -12 44 0" stroke="#ffffff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".6">
        <animate attributeName="opacity" values=".75;.25;.75" dur="5.4s" repeatCount="indefinite"/></path>
      <path d="M884 712 q20 -11 40 0 M896 1012 q20 -11 40 0" stroke="#ffffff" stroke-width="4" fill="none" stroke-linecap="round" opacity=".45">
        <animate attributeName="opacity" values=".25;.7;.25" dur="6.8s" repeatCount="indefinite"/></path>`;
    /* el puente de piedra, con su arco y su barandilla */
    s += `<g>
      <path d="M818 792 L818 762 Q900 716 986 762 L986 792 Q900 748 818 792 Z" fill="#cfc6b4"/>
      <path d="M846 790 Q900 748 958 790 L958 812 Q900 776 846 812 Z" fill="#b3a794"/>
      <path d="M852 800 Q900 766 952 800 L952 826 Q900 794 852 826 Z" fill="#7a6f60" opacity=".65"/>
      <path d="M818 756 Q900 710 986 756" fill="none" stroke="#e6ddc9" stroke-width="7" stroke-linecap="round"/>
      <rect x="816" y="748" width="8" height="26" rx="4" fill="#cfc6b4"/><rect x="980" y="748" width="8" height="26" rx="4" fill="#cfc6b4"/>
      <rect x="884" y="722" width="7" height="22" rx="3" fill="#cfc6b4"/><rect x="916" y="722" width="7" height="22" rx="3" fill="#cfc6b4"/></g>`;

    /* ---------- el bosque alto de la zona élfica ---------- */
    const arbolAlto = (x, base, alto, r, c1, c2) => `<g>
      <ellipse cx="${x}" cy="${base + 4}" rx="${(r * .7).toFixed(0)}" ry="10" fill="#2f5a1c" opacity=".28"/>
      <path d="M${x - 9} ${base} Q${x - 5} ${base - alto * .6} ${x - 6} ${base - alto} L${x + 6} ${base - alto} Q${x + 5} ${base - alto * .6} ${x + 9} ${base} Z" fill="#8a6b4a"/>
      <path d="M${x - 8} ${base - alto * .48} q-22 -14 -34 -34 M${x + 8} ${base - alto * .62} q22 -12 36 -30" stroke="#8a6b4a" stroke-width="6" fill="none" stroke-linecap="round"/>
      <ellipse cx="${x}" cy="${base - alto - r * .3}" rx="${r}" ry="${(r * .82).toFixed(0)}" fill="${c1}"/>
      <ellipse cx="${x - r * .58}" cy="${base - alto + r * .28}" rx="${(r * .62).toFixed(0)}" ry="${(r * .5).toFixed(0)}" fill="${c1}"/>
      <ellipse cx="${x + r * .6}" cy="${base - alto + r * .22}" rx="${(r * .6).toFixed(0)}" ry="${(r * .48).toFixed(0)}" fill="${c1}"/>
      <ellipse cx="${x - r * .24}" cy="${base - alto - r * .62}" rx="${(r * .5).toFixed(0)}" ry="${(r * .42).toFixed(0)}" fill="${c2}"/>
      <ellipse cx="${x + r * .34}" cy="${base - alto - r * .38}" rx="${(r * .42).toFixed(0)}" ry="${(r * .34).toFixed(0)}" fill="${c2}"/></g>`;
    /* van a la derecha de las montañas de siempre: allí el lienzo está
       libre y las copas se ven de verdad por encima del bosque dorado */
    const BOSQUE = [[1372, 966, 236, 50, "#4c8b3f", "#7bbd52"], [1902, 1000, 272, 56, "#3f7d38", "#5da33f"],
      [990, 1045, 140, 52, "#4c8b3f", "#68ad4c"], [1120, 1052, 148, 56, "#42833a", "#63a44a"],
      [1255, 1040, 136, 50, "#4c8b3f", "#7bbd52"], [1386, 1048, 144, 52, "#3f7d38", "#5da33f"],
      [1868, 1040, 140, 54, "#4c8b3f", "#8cc95a"], [1994, 1054, 150, 52, "#42833a", "#68ad4c"]];
    BOSQUE.forEach(a => {
      const cy = a[1] - a[2] - a[3] * .3;
      if (!libre(a[0] - a[3] * 1.6, cy - a[3], a[3] * 3.2, a[3] * 2.4)) return;
      s += arbolAlto(a[0], a[1], a[2], a[3], a[4], a[5]);
    });
    /* algún destello dorado entre las copas, muy suave */
    [[1330, 700], [1064, 872], [1830, 866]].forEach(p => {
      if (libre(p[0] - 14, p[1] - 14, 28, 28)) s += `<circle cx="${p[0]}" cy="${p[1]}" r="9" fill="#ffe082" opacity=".45"/>`;
    });

    /* ---------- el suelo del bosque: la senda de tierra y su maleza ---------- */
    s += `<path d="M948 966 Q1190 918 1420 950 Q1660 984 1880 942 Q2040 912 2160 936" fill="none" stroke="#c6b189" stroke-width="34" stroke-linecap="round" opacity=".85"/>
      <path d="M948 966 Q1190 918 1420 950 Q1660 984 1880 942 Q2040 912 2160 936" fill="none" stroke="#e4d7b4" stroke-width="13" stroke-linecap="round" opacity=".6"/>`;
    const arbusto = (x, y, k, c1, c2) => `<g transform="translate(${x} ${y}) scale(${k})">
      <ellipse cx="0" cy="6" rx="40" ry="10" fill="#2f5a1c" opacity=".22"/>
      <ellipse cx="0" cy="0" rx="38" ry="24" fill="${c1}"/>
      <ellipse cx="-16" cy="-10" rx="22" ry="17" fill="${c2}"/><ellipse cx="15" cy="-12" rx="20" ry="15" fill="${c2}"/></g>`;
    [[1000, 906, .9, "#4e8a35", "#5da33f"], [1330, 890, 1, "#478230", "#63a44a"], [1700, 902, .85, "#4e8a35", "#5da33f"],
      [1980, 986, .95, "#478230", "#63a44a"], [1210, 1002, .8, "#4e8a35", "#69ad4c"], [1560, 1000, .9, "#478230", "#5da33f"]].forEach(b => {
      if (libre(b[0] - 42 * b[2], b[1] - 30 * b[2], 84 * b[2], 50 * b[2])) s += arbusto(b[0], b[1], b[2], b[3], b[4]);
    });
    const helecho = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})" stroke="#3f7d38" stroke-width="4" fill="none" stroke-linecap="round">
      <path d="M0 0 q-18 -14 -26 -32 M0 0 q-4 -22 0 -38 M0 0 q18 -14 26 -30 M0 0 q10 -20 8 -34"/></g>`;
    [[1090, 946, .9], [1268, 934, .8], [1490, 962, .95], [1780, 930, .85], [1930, 900, .8], [1150, 1030, .9], [1660, 1042, .85]].forEach(f => {
      if (libre(f[0] - 30 * f[2], f[1] - 42 * f[2], 60 * f[2], 46 * f[2])) s += helecho(f[0], f[1], f[2]);
    });

    /* ---------- coníferas en el borde del bosque ---------- */
    const conifera = (x, base, alto, c1, c2) => `<g>
      <ellipse cx="${x}" cy="${base + 3}" rx="${(alto * .2).toFixed(0)}" ry="7" fill="#2f5a1c" opacity=".24"/>
      <rect x="${x - 5}" y="${base - alto * .2}" width="10" height="${(alto * .22).toFixed(0)}" rx="4" fill="#7a5b48"/>
      <path d="M${x - alto * .3} ${base - alto * .16} L${x} ${base - alto * .62} L${x + alto * .3} ${base - alto * .16} Z" fill="${c1}"/>
      <path d="M${x - alto * .26} ${base - alto * .44} L${x} ${base - alto * .84} L${x + alto * .26} ${base - alto * .44} Z" fill="${c2}"/>
      <path d="M${x - alto * .2} ${base - alto * .68} L${x} ${base - alto} L${x + alto * .2} ${base - alto * .68} Z" fill="${c1}"/></g>`;
    [[636, 902, 168], [744, 930, 196], [1268, 962, 176], [1420, 946, 206]].forEach(c => {
      if (libre(c[0] - c[2] * .32, c[1] - c[2], c[2] * .64, c[2])) s += conifera(c[0], c[1], c[2], "#3d7a33", "#4d9440");
    });

    /* ---------- llanuras doradas de los reinos ---------- */
    s += `<path d="M1610 1060 Q1690 890 1880 856 Q2050 826 2170 862 L2260 878 L2260 1100 L1610 1100 Z" fill="url(#tmdXDorado)" opacity=".85"/>
      <path d="M1610 1060 Q1690 890 1880 856 Q2050 826 2170 862 L2260 878 L2260 916 L2170 900 Q2050 866 1880 896 Q1700 930 1636 1074 Z" fill="#eee0a0" opacity=".5"/>`;
    let espigas = "";
    for (let i = 0; i < 26; i++) {
      const x = 1710 + R() * 510, y = 872 + R() * 130;
      if (!libre(x - 8, y - 22, 16, 26)) continue;
      espigas += `<path d="M${x.toFixed(0)} ${y.toFixed(0)} v-18 q-6 -4 -7 -10 M${x.toFixed(0)} ${(y - 18).toFixed(0)} q6 -4 7 -10"/>`;
    }
    s += `<g stroke="#c9b955" stroke-width="3" fill="none" stroke-linecap="round" opacity=".7">${espigas}</g>`;
    /* un murete de piedra clara, como los de los reinos del sur */
    s += `<g opacity=".85"><rect x="1980" y="924" width="230" height="20" rx="8" fill="#ddd8cc"/>
      <rect x="1980" y="944" width="230" height="16" rx="6" fill="#c4bfb1"/>
      ${[0, 1, 2, 3, 4, 5].map(i => `<rect x="${1988 + i * 38}" y="898" width="20" height="28" rx="5" fill="#e4dfd2"/>`).join("")}</g>`;

    /* ---------- tierras secas del final: ocre y calma, sin nada que asuste ---------- */
    /* primero la cordillera seca del fondo: una silueta continua, con las
       cumbres cayendo entre los lugares para no taparle el sitio a ninguno */
    s += `<path d="M1830 780 L1968 508 L2062 572 L2122 646 L2196 660 L2288 476 L2382 546 L2452 604 L2536 566 L${W + 20} 612 L${W + 20} 900 L1830 900 Z"
      fill="url(#tmdXSierraSeca)" opacity=".82"/>
      <path d="M1968 508 L2010 584 L1926 584 Z" fill="#cdb193" opacity=".5"/>
      <path d="M2288 476 L2334 556 L2242 556 Z" fill="#cdb193" opacity=".45"/>`;
    /* y encima el suelo seco, en tres capas que entran en diagonal:
       así el verde se va apagando poco a poco y no corta de golpe */
    s += `<path d="M1560 1100 Q1830 890 2080 690 Q2240 706 2380 678 Q2480 660 ${W + 20} 692 L${W + 20} 1100 Z" fill="url(#tmdXSeco)" opacity=".32"/>
      <path d="M1760 1100 Q1960 872 2140 700 Q2260 716 2360 690 Q2460 668 ${W + 20} 700 L${W + 20} 1100 Z" fill="url(#tmdXSeco)" opacity=".6"/>
      <path d="M2010 1100 Q2140 878 2280 762 Q2400 784 ${W + 20} 754 L${W + 20} 1100 Z" fill="url(#tmdXSecoB)" opacity=".88"/>`;
    /* piedras sueltas y matorrales secos, redonditos y amables */
    const roca = (x, y, k, c) => `<g transform="translate(${x} ${y}) scale(${k})">
      <ellipse cx="0" cy="10" rx="30" ry="7" fill="#00000022"/>
      <path d="M-26 10 Q-22 -16 -2 -18 Q20 -20 26 4 L26 10 Z" fill="${c}"/>
      <path d="M-14 -2 Q-6 -12 6 -10" stroke="#ffffff" stroke-width="3" fill="none" opacity=".18" stroke-linecap="round"/></g>`;
    [[2090, 866, 1, "#7c6553"], [2300, 924, .8, "#6d584a"], [2470, 880, .9, "#7c6553"], [2560, 960, .7, "#6d584a"], [1990, 962, .85, "#75604f"]].forEach(r => {
      if (libre(r[0] - 32 * r[2], r[1] - 22 * r[2], 64 * r[2], 40 * r[2])) s += roca(r[0], r[1], r[2], r[3]);
    });
    const mata = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})" stroke="#8a7355" stroke-width="4" fill="none" stroke-linecap="round">
      <path d="M0 0 q-14 -12 -20 -26 M0 0 q-2 -20 2 -32 M0 0 q14 -12 22 -24 M0 0 q8 -18 6 -28"/></g>`;
    [[2150, 902, 1], [2380, 968, .85], [2530, 916, .9], [2260, 846, .75]].forEach(m => {
      if (libre(m[0] - 24 * m[2], m[1] - 36 * m[2], 48 * m[2], 40 * m[2])) s += mata(m[0], m[1], m[2]);
    });
    /* polvo en suspensión sobre las tierras secas */
    s += `<path d="M1846 728 Q1970 632 2140 600 Q2340 564 ${W + 20} 596 L${W + 20} 792 Q2340 760 2140 796 Q1970 828 1846 900 Z" fill="url(#tmdXPolvo)"/>`;
    let grietas = "";
    for (let i = 0; i < 18; i++) {
      const x = 1960 + R() * 620, y = 800 + R() * 200;
      grietas += `<path d="M${x.toFixed(0)} ${y.toFixed(0)} q22 6 40 -4 q16 -8 32 2"/>`;
    }
    s += `<g stroke="#3f3128" stroke-width="2.6" fill="none" opacity=".26" stroke-linecap="round">${grietas}</g>`;

    /* ---------- una franja de tierra al pie de todo, para cerrar el cuadro ---------- */
    s += `<path d="M-20 1006 Q560 976 1140 1004 Q1720 1032 ${W + 20} 998 L${W + 20} 1100 L-20 1100 Z" fill="#6b4b33" opacity=".55"/>`;

    return s;
  }

  /* ============================================================
     El envoltorio: se conserva la deco original y se le pone
     el escenario nuevo por detrás, todo en un solo <svg>.
     ============================================================ */
  function envolver(tema, escenario) {
    const t = THEMES[tema];
    if (!t || !t.content || !t.content.explore) return;
    const orig = t.content.explore.deco;
    t.content.explore.deco = function (e) {
      const previo = typeof orig === "function" ? (orig.call(this, e) || "") : (orig || "");
      const inner = previo.replace(/^[\s\S]*?<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "");
      return decoSvg(escenario(e) + inner, e.width);
    };
  }

  envolver("espacio", cieloEspacio);
  envolver("tierramedia", paisajeTierraMedia);
})();
