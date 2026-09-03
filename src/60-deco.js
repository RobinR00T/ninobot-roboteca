"use strict";
/* ============================================================
   Escenografía de los mapas de exploración: cada aventura
   dibuja su paisaje debajo de los puntos de interés.
   El SVG usa el mismo sistema de coordenadas que los POI
   (viewBox 0 0 ancho alto), así todo queda bien colocado.
   ============================================================ */

function decoSvg(inner, w) {
  return `<svg viewBox="0 0 ${w || 2600} 1100" preserveAspectRatio="none">${inner}</svg>`;
}

/* ---------- ESPACIO: órbitas de verdad alrededor del Sol ---------- */
THEMES.espacio.content.explore.deco = function (e) {
  const pois = e.pois;
  const sun = pois.find(p => p.emoji === "☀️");
  const earth = pois.find(p => p.emoji === "🌍");
  const moon = pois.find(p => p.emoji === "🌙");
  let s = "";
  // resplandor del Sol
  s += `<circle cx="${sun.x}" cy="${sun.y}" r="150" fill="rgba(255,214,64,.10)"/>
        <circle cx="${sun.x}" cy="${sun.y}" r="90" fill="rgba(255,214,64,.16)"/>`;
  // órbitas elípticas completas alrededor del Sol (una por planeta)
  if (e.orbits) {
    Object.keys(e.orbits).forEach(k => {
      const o = e.orbits[k];
      s += `<ellipse cx="${sun.x}" cy="${sun.y}" rx="${o.rx}" ry="${o.ry}" fill="none" stroke="rgba(255,255,255,.20)" stroke-width="2" stroke-dasharray="7 9"/>`;
    });
  } else {
    pois.filter(p => p.cat === "solar" && p !== sun && p !== moon && !p.halley).forEach(p => {
      const r = Math.hypot(p.x - sun.x, p.y - sun.y);
      s += `<circle cx="${sun.x}" cy="${sun.y}" r="${r.toFixed(0)}" fill="none" stroke="rgba(255,255,255,.20)" stroke-width="2" stroke-dasharray="7 9"/>`;
    });
  }
  // la órbita alargada del cometa Halley
  const hal = pois.find(p => p.halley);
  if (hal) {
    const h = hal.halley;
    s += `<ellipse cx="${h.cx}" cy="${h.cy}" rx="${h.rx}" ry="${h.ry}" fill="none" stroke="rgba(160,215,255,.28)" stroke-width="2" stroke-dasharray="4 10"/>`;
  }
  // la Luna orbita la Tierra, no el Sol (el círculo sigue a la Tierra en movimiento)
  if (earth && moon) {
    const r = Math.hypot(moon.x - earth.x, moon.y - earth.y);
    s += `<circle id="orbitLuna" cx="${earth.x}" cy="${earth.y}" r="${r.toFixed(0)}" fill="none" stroke="rgba(255,255,255,.28)" stroke-width="1.5" stroke-dasharray="3 6"/>`;
  }
  // una estrella fugaz decorativa de fondo
  s += `<g opacity=".85">
      <path d="M0 0 L-60 -6 M0 0 L-54 5" stroke="rgba(190,230,255,.6)" stroke-width="2.4" stroke-linecap="round"/>
      <circle r="4.4" fill="#e3f4ff"/>
      <animateMotion dur="38s" repeatCount="indefinite" rotate="auto" path="M -150 820 Q 1200 640 2400 720 Q 3300 760 3900 400"/>
    </g>`;
  // bruma de la zona de galaxias
  s += `<ellipse cx="4390" cy="520" rx="330" ry="430" fill="rgba(180,140,255,.10)"/>
        <ellipse cx="4310" cy="480" rx="180" ry="260" fill="rgba(120,200,255,.07)" transform="rotate(25 4310 480)"/>`;
  // bruma oscura de los misterios del universo
  s += `<ellipse cx="4860" cy="500" rx="300" ry="440" fill="rgba(40,20,80,.35)"/>
        <ellipse cx="4900" cy="480" rx="170" ry="280" fill="rgba(255,120,60,.05)"/>`;
  return `<svg viewBox="0 0 ${e.width} 1100" preserveAspectRatio="none">${s}</svg>`;
};

/* ---------- DINOSAURIOS: paisaje prehistórico ---------- */
THEMES.dinos.content.explore.deco = function () {
  let s = "";
  // sol
  s += `<circle cx="170" cy="120" r="72" fill="rgba(255,238,88,.85)"/><circle cx="170" cy="120" r="110" fill="rgba(255,238,88,.18)"/>`;
  // colinas lejanas
  s += `<path d="M0 660 Q300 520 620 640 Q900 720 1200 620 Q1500 540 1800 660 Q2100 740 2400 640 L2600 680 L2600 1100 L0 1100 Z" fill="#33691e" opacity=".55"/>`;
  // volcán con lava y humo
  s += `<path d="M800 830 L985 360 L1030 360 L1210 830 Z" fill="#4e342e"/>
        <path d="M960 375 Q1007 345 1055 375 L1030 430 Q1007 415 985 430 Z" fill="#ff7043"/>
        <path d="M985 430 Q1000 560 960 700 L1005 700 Q1035 560 1030 430 Z" fill="#ff8a65" opacity=".8"/>
        <circle cx="1000" cy="300" r="34" fill="rgba(120,110,105,.5)"/><circle cx="1050" cy="255" r="26" fill="rgba(120,110,105,.4)"/><circle cx="1090" cy="215" r="18" fill="rgba(120,110,105,.3)"/>`;
  // colinas cercanas y suelo
  s += `<path d="M0 780 Q260 680 520 770 Q800 860 1100 780 Q1400 710 1700 800 Q2000 880 2300 790 L2600 820 L2600 1100 L0 1100 Z" fill="#558b2f"/>
        <rect x="0" y="920" width="2600" height="180" fill="#4e342e"/>
        <path d="M0 920 Q400 895 800 920 Q1300 945 1800 915 Q2200 895 2600 920 L2600 960 L0 960 Z" fill="#6d4c41"/>`;
  // lago
  s += `<ellipse cx="1790" cy="790" rx="300" ry="85" fill="#4fc3f7" opacity=".85"/>
        <ellipse cx="1720" cy="775" rx="120" ry="26" fill="rgba(255,255,255,.35)"/>`;
  // cuevas: gran roca con boca oscura
  s += `<path d="M2120 900 Q2140 620 2350 600 Q2560 620 2580 900 Z" fill="#3e2723"/>
        <ellipse cx="2350" cy="880" rx="110" ry="90" fill="#1b0f0c"/>
        <circle cx="2210" cy="700" r="10" fill="#8d6e63"/><circle cx="2480" cy="680" r="14" fill="#8d6e63"/>`;
  // helechos y palmeras
  const fern = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})" stroke="#2e7d32" stroke-width="10" fill="none" stroke-linecap="round">
      <path d="M0 0 Q-45 -60 -95 -75"/><path d="M0 0 Q0 -80 -15 -125"/><path d="M0 0 Q45 -60 95 -75"/><path d="M0 0 Q28 -75 60 -110"/><path d="M0 0 Q-28 -75 -60 -110"/></g>`;
  s += fern(300, 900, 1.1) + fern(620, 930, 0.8) + fern(1420, 910, 1) + fern(2050, 930, 0.7);
  // huellas
  [[1230, 990], [1300, 1015], [1370, 990], [1440, 1015]].forEach(p => {
    s += `<ellipse cx="${p[0]}" cy="${p[1]}" rx="16" ry="10" fill="rgba(0,0,0,.28)"/>`;
  });
  // el mar prehistórico: ancho, hasta el final del mapa
  s += `<path d="M2540 1100 L2600 700 L2665 706 L2655 1100 Z" fill="#d7bd8a"/>
        <path d="M2620 690 Q3300 655 4000 690 L4000 1100 L2620 1100 Z" fill="#0288d1" opacity=".9"/>
        <path d="M2620 690 Q3300 655 4000 690 L4000 734 Q3300 700 2620 734 Z" fill="#4fc3f7" opacity=".75"/>
        <path d="M2700 800 q30 -14 60 0 M2920 870 q30 -14 60 0 M3160 790 q30 -14 60 0 M3300 950 q30 -14 60 0 M2760 1000 q30 -14 60 0 M3520 820 q30 -14 60 0 M3700 950 q30 -14 60 0 M3850 780 q30 -14 60 0 M3540 1020 q30 -14 60 0" stroke="rgba(255,255,255,.45)" stroke-width="5" fill="none" stroke-linecap="round"/>`;
  // el cielo de los voladores: nubes suaves y sol lejano
  s += `<g fill="rgba(255,255,255,.55)">
        <ellipse cx="2820" cy="120" rx="80" ry="26"/><ellipse cx="2890" cy="105" rx="55" ry="20"/>
        <ellipse cx="3350" cy="90" rx="90" ry="28"/><ellipse cx="3430" cy="110" rx="60" ry="20"/>
        <ellipse cx="3800" cy="160" rx="75" ry="24"/><ellipse cx="3865" cy="145" rx="48" ry="17"/>
        </g>
        <circle cx="3940" cy="70" r="40" fill="rgba(255,238,88,.5)"/>`;
  return decoSvg(s, 4000);
};

/* ---------- CUERPO HUMANO: un cuerpo de verdad, tumbado ---------- */
THEMES.cuerpo.content.explore.deco = function () {
  const skin = "rgba(255,232,214,.34)";
  let s = "";
  // sombra bajo el cuerpo
  s += `<ellipse cx="1350" cy="945" rx="1150" ry="55" fill="rgba(0,0,0,.14)"/>`;
  // pelo
  s += `<g fill="rgba(140,80,60,.5)">
        <circle cx="255" cy="315" r="100"/><circle cx="390" cy="258" r="105"/><circle cx="530" cy="300" r="92"/>
        <circle cx="195" cy="420" r="80"/><circle cx="165" cy="540" r="60"/></g>`;
  // el cuerpo: una sola silueta (cabeza, cuello, tronco, barriga, brazos y piernas)
  s += `<g fill="${skin}">
        <circle cx="430" cy="520" r="265"/>
        <circle cx="168" cy="560" r="46"/>
        <rect x="650" y="430" width="180" height="180" rx="60"/>
        <rect x="780" y="295" width="650" height="510" rx="140"/>
        <ellipse cx="1690" cy="550" rx="330" ry="275"/>
        <rect x="1880" y="400" width="240" height="300" rx="70"/>
        <rect x="850" y="208" width="600" height="100" rx="50"/>
        <circle cx="1492" cy="258" r="58"/><circle cx="1548" cy="238" r="17"/><circle cx="1556" cy="262" r="17"/><circle cx="1548" cy="286" r="17"/>
        <rect x="850" y="792" width="600" height="100" rx="50"/>
        <circle cx="1492" cy="842" r="58"/><circle cx="1548" cy="822" r="17"/><circle cx="1556" cy="846" r="17"/><circle cx="1548" cy="870" r="17"/>
        <rect x="2010" y="370" width="480" height="130" rx="65"/>
        <rect x="2440" y="318" width="105" height="182" rx="45"/>
        <rect x="2010" y="600" width="480" height="130" rx="65"/>
        <rect x="2440" y="600" width="105" height="182" rx="45"/>
      </g>`;
  // carita amable (los emojis de ojos y dientes completan la cara)
  s += `<path d="M345 655 Q430 712 515 655" stroke="rgba(255,255,255,.75)" stroke-width="9" fill="none" stroke-linecap="round"/>
        <circle cx="295" cy="612" r="26" fill="rgba(255,110,140,.4)"/><circle cx="565" cy="612" r="26" fill="rgba(255,110,140,.4)"/>`;
  // ombligo y brillo del corazón
  s += `<circle cx="1690" cy="618" r="13" fill="none" stroke="rgba(255,255,255,.65)" stroke-width="5"/>
        <circle cx="855" cy="448" r="82" fill="rgba(255,70,70,.22)"/>`;
  // línea de electro por abajo
  s += `<path d="M0 1015 L790 1015 L830 1015 L862 950 L900 1070 L932 1015 L2600 1015" stroke="rgba(255,255,255,.4)" stroke-width="5" fill="none"/>`;
  return decoSvg(s);
};

/* ---------- TIERRA MEDIA: de la Comarca a Mordor ---------- */
THEMES.tierramedia.content.explore.deco = function () {
  let s = "";
  // colinas de la Comarca con puertas redondas
  s += `<path d="M0 720 Q200 580 420 690 Q620 780 760 700 L760 1100 L0 1100 Z" fill="#7cb342" opacity=".8"/>
        <path d="M0 840 Q260 740 520 830 Q660 870 760 840 L760 1100 L0 1100 Z" fill="#558b2f"/>`;
  [[190, 700], [420, 745], [600, 790]].forEach((p, i) => {
    s += `<circle cx="${p[0]}" cy="${p[1]}" r="${44 - i * 6}" fill="#f9a825"/><circle cx="${p[0]}" cy="${p[1]}" r="${34 - i * 5}" fill="#6d4c41"/><circle cx="${p[0] + 10}" cy="${p[1]}" r="4" fill="#ffd54f"/>`;
  });
  // río desde Rivendel
  s += `<path d="M900 520 Q860 700 920 830 Q980 960 880 1100" stroke="#4fc3f7" stroke-width="26" fill="none" opacity=".7" stroke-linecap="round"/>`;
  // montañas nevadas
  s += `<path d="M800 830 L980 420 L1120 830 Z" fill="#78909c"/><path d="M945 500 L980 420 L1015 500 Q980 480 945 500 Z" fill="#eceff1"/>
        <path d="M1040 830 L1220 480 L1380 830 Z" fill="#607d8b"/><path d="M1185 545 L1220 480 L1258 550 Q1220 528 1185 545 Z" fill="#eceff1"/>`;
  // bosque dorado de Lothlórien
  [[1470, 700], [1560, 660], [1650, 710]].forEach(p => {
    s += `<rect x="${p[0] - 8}" y="${p[1]}" width="16" height="90" fill="#8d6e63"/><circle cx="${p[0]}" cy="${p[1] - 30}" r="62" fill="#ffd54f" opacity=".75"/>`;
  });
  // ciudad blanca de Gondor
  s += `<g fill="#eceff1" opacity=".9">
        <rect x="1860" y="620" width="200" height="210" rx="12"/><rect x="1895" y="520" width="60" height="140" rx="8"/>
        <rect x="1975" y="480" width="44" height="180" rx="8"/><path d="M1997 420 L1975 480 L2019 480 Z"/>
        <rect x="1930" y="700" width="60" height="130" rx="8" fill="#b0bec5"/></g>`;
  // Mordor: cresta oscura y monte con lava
  s += `<path d="M2080 830 L2170 560 L2260 700 L2340 500 L2430 720 L2530 470 L2600 690 L2600 1100 L2080 1100 Z" fill="#263238"/>
        <path d="M2440 700 L2510 470 L2575 700 Z" fill="#37474f"/>
        <path d="M2492 492 Q2510 478 2528 492 L2518 520 Q2510 512 2502 520 Z" fill="#ff5722"/>
        <ellipse cx="2510" cy="470" rx="90" ry="40" fill="rgba(255,87,34,.18)"/>`;
  // suelo general
  s += `<rect x="0" y="1010" width="2600" height="90" fill="#3e2723" opacity=".8"/>`;
  return decoSvg(s);
};

/* ---------- OCÉANO: del rayo de sol al fondo de arena ---------- */
THEMES.oceano.content.explore.deco = function () {
  let s = "";
  // superficie y rayos de luz
  s += `<path d="M0 45 Q160 20 330 45 Q500 70 660 45 Q830 20 1000 45 Q1170 70 1330 45 Q1500 20 1660 45 Q1830 70 2000 45 Q2170 20 2330 45 Q2470 65 2600 45" stroke="rgba(255,255,255,.5)" stroke-width="6" fill="none"/>`;
  [[300, 260], [1150, 340], [1950, 300]].forEach(p => {
    s += `<polygon points="${p[0]},50 ${p[0] + p[1]},50 ${p[0] + p[1] - 130},1100 ${p[0] - 130},1100" fill="rgba(255,255,255,.06)"/>`;
  });
  // fondo de arena con montículos
  s += `<path d="M0 950 Q300 900 600 945 Q950 995 1300 940 Q1650 895 2000 950 Q2300 995 2600 935 L2600 1100 L0 1100 Z" fill="#e0c17e" opacity=".95"/>`;
  // arrecife de coral (zona 800-1400)
  const coral = (x, y, c) => `<g transform="translate(${x} ${y})" stroke="${c}" stroke-width="16" fill="none" stroke-linecap="round">
      <path d="M0 0 Q-25 -60 -55 -85"/><path d="M0 0 Q0 -75 8 -115"/><path d="M0 0 Q30 -55 62 -78"/></g>`;
  s += coral(860, 930, "#ff7043") + coral(1010, 950, "#ec407a") + coral(1180, 935, "#ffca28") + coral(1330, 950, "#ab47bc");
  s += `<circle cx="930" cy="915" r="42" fill="#26c6da" opacity=".8"/><circle cx="1105" cy="930" r="34" fill="#ffa726" opacity=".8"/><circle cx="1255" cy="920" r="38" fill="#ec407a" opacity=".7"/>`;
  // algas
  const alga = (x, k) => `<path d="M${x} 1000 Q${x - 28} 900 ${x} 810 Q${x + 30} 730 ${x - 8} 640" stroke="#2e7d32" stroke-width="${14 * k}" fill="none" stroke-linecap="round" opacity=".85"/>`;
  s += alga(320, 1) + alga(380, 0.7) + alga(1530, 0.9) + alga(2060, 1) + alga(2110, 0.6);
  // rocas de las profundidades
  s += `<ellipse cx="2350" cy="990" rx="220" ry="80" fill="#263238"/><ellipse cx="2540" cy="1010" rx="160" ry="70" fill="#37474f"/>`;
  // burbujas
  [[1620, 700], [1640, 600], [1660, 500], [2320, 760], [2340, 660]].forEach(p => {
    s += `<circle cx="${p[0]}" cy="${p[1]}" r="9" fill="none" stroke="rgba(255,255,255,.4)" stroke-width="2"/>`;
  });
  return decoSvg(s);
};

/* ---------- ANIMALES: cuatro paisajes en uno ---------- */
THEMES.animales.content.explore.deco = function () {
  let s = "";
  // suelo continuo
  s += `<rect x="0" y="880" width="2600" height="220" fill="#8d6e63"/>`;
  // SELVA: árboles frondosos y lianas
  s += `<rect x="0" y="820" width="740" height="90" fill="#33691e"/>`;
  [[120, 640], [330, 590], [560, 650]].forEach(p => {
    s += `<rect x="${p[0] - 14}" y="${p[1]}" width="28" height="${880 - p[1]}" fill="#5d4037"/>
          <circle cx="${p[0] - 55}" cy="${p[1] - 30}" r="75" fill="#2e7d32"/>
          <circle cx="${p[0] + 50}" cy="${p[1] - 45}" r="85" fill="#388e3c"/>
          <circle cx="${p[0]}" cy="${p[1] - 95}" r="80" fill="#43a047"/>`;
  });
  s += `<path d="M40 0 Q80 250 40 480" stroke="#2e7d32" stroke-width="10" fill="none"/><path d="M690 0 Q650 200 700 400" stroke="#2e7d32" stroke-width="9" fill="none"/>`;
  // SABANA: hierba dorada y acacias
  s += `<rect x="740" y="840" width="710" height="70" fill="#dce775" opacity=".9"/>`;
  [[880, 610], [1290, 640]].forEach(p => {
    s += `<path d="M${p[0]} 880 L${p[0] + 14} ${p[1] + 60} L${p[0] + 34} ${p[1] + 30}" stroke="#5d4037" stroke-width="16" fill="none" stroke-linecap="round"/>
          <ellipse cx="${p[0] + 30}" cy="${p[1]}" rx="130" ry="40" fill="#689f38"/>`;
  });
  s += `<circle cx="1180" cy="140" r="64" fill="rgba(255,238,88,.9)"/>`;
  // POLOS: hielo e icebergs
  s += `<rect x="1450" y="830" width="630" height="80" fill="#e1f5fe" opacity=".95"/>
        <path d="M1530 830 L1610 640 L1700 830 Z" fill="#b3e5fc"/><path d="M1655 830 L1700 730 L1760 830 Z" fill="#e1f5fe"/>
        <path d="M1850 830 L1950 600 L2050 830 Z" fill="#b3e5fc"/><path d="M1915 700 L1950 600 L1985 705 Q1950 685 1915 700 Z" fill="#fff"/>`;
  [[1500, 300], [1650, 220], [1800, 340], [1980, 260]].forEach(p => {
    s += `<circle cx="${p[0]}" cy="${p[1]}" r="5" fill="rgba(255,255,255,.8)"/>`;
  });
  // DESIERTO: dunas y oasis
  s += `<path d="M2080 910 Q2230 800 2380 895 Q2500 960 2600 890 L2600 1100 L2080 1100 Z" fill="#f9a825"/>
        <path d="M2080 960 Q2260 880 2450 950 L2600 940 L2600 1100 L2080 1100 Z" fill="#f57f17" opacity=".85"/>
        <ellipse cx="2500" cy="1000" rx="70" ry="20" fill="#4fc3f7"/>
        <path d="M2470 1000 Q2455 930 2430 905 M2470 1000 Q2490 930 2515 910 M2470 1000 Q2470 920 2470 890" stroke="#2e7d32" stroke-width="8" fill="none" stroke-linecap="round"/>`;
  return decoSvg(s);
};

/* ---------- MÚSICA: el escenario del gran auditorio ---------- */
THEMES.musica.content.explore.deco = function (e) {
  let s = "";
  // suelo de madera con tablones
  s += `<rect x="0" y="760" width="2600" height="340" fill="#6d4c41"/>`;
  for (let x = 0; x <= 2600; x += 130) s += `<line x1="${x}" y1="760" x2="${x - 60}" y2="1100" stroke="rgba(0,0,0,.18)" stroke-width="4"/>`;
  s += `<rect x="0" y="752" width="2600" height="14" fill="#8d6e63"/>`;
  // telones a los lados
  s += `<path d="M0 0 L150 0 Q100 300 150 700 Q160 760 120 780 L0 780 Z" fill="#b71c1c"/>
        <path d="M60 0 Q40 350 75 760" stroke="rgba(0,0,0,.25)" stroke-width="16" fill="none"/>
        <path d="M2600 0 L2450 0 Q2500 300 2450 700 Q2440 760 2480 780 L2600 780 Z" fill="#b71c1c"/>
        <path d="M2540 0 Q2560 350 2525 760" stroke="rgba(0,0,0,.25)" stroke-width="16" fill="none"/>`;
  // focos apuntando a cada zona
  (e.cats || []).forEach((cat, i) => {
    const cx = cat.x + 250;
    s += `<polygon points="${cx - 40},0 ${cx + 40},0 ${cx + 230},780 ${cx - 230},780" fill="rgba(255,241,118,.07)"/>
          <circle cx="${cx}" cy="16" r="16" fill="#ffd54f" opacity=".85"/>`;
  });
  // pentagrama con notas
  for (let i = 0; i < 5; i++) s += `<line x1="200" y1="${150 + i * 22}" x2="2400" y2="${150 + i * 22}" stroke="rgba(255,255,255,.3)" stroke-width="3"/>`;
  [[420, 172], [830, 216], [1250, 150], [1690, 194], [2100, 172]].forEach(p => {
    s += `<ellipse cx="${p[0]}" cy="${p[1]}" rx="14" ry="10" fill="rgba(255,255,255,.65)" transform="rotate(-18 ${p[0]} ${p[1]})"/><line x1="${p[0] + 12}" y1="${p[1] - 4}" x2="${p[0] + 12}" y2="${p[1] - 58}" stroke="rgba(255,255,255,.65)" stroke-width="4"/>`;
  });
  return decoSvg(s);
};

/* ---------- MUJERES INCREÍBLES: la galería de las valientes ---------- */
THEMES.increibles.content.explore.deco = function (e) {
  let s = "";
  // suelo de galería con reflejo
  s += `<rect x="0" y="820" width="2600" height="280" fill="#311b92"/>
        <rect x="0" y="820" width="2600" height="10" fill="rgba(255,255,255,.25)"/>`;
  // columnas
  [60, 720, 1420, 2080, 2540].forEach(x => {
    s += `<rect x="${x - 26}" y="120" width="52" height="700" rx="10" fill="rgba(255,255,255,.16)"/>
          <rect x="${x - 40}" y="96" width="80" height="26" rx="8" fill="rgba(255,255,255,.22)"/>
          <rect x="${x - 40}" y="818" width="80" height="26" rx="8" fill="rgba(255,255,255,.22)"/>`;
  });
  // banderines de fiesta
  let flags = "";
  for (let x = 0; x <= 2600; x += 90) {
    const colors = ["#ffd54f", "#f06292", "#4fc3f7", "#69f0ae"];
    flags += `<polygon points="${x},46 ${x + 45},46 ${x + 22},96" fill="${colors[(x / 90) % 4 | 0]}" opacity=".85"/>`;
  }
  s += `<path d="M0 46 Q650 76 1300 46 Q1950 16 2600 46" stroke="rgba(255,255,255,.4)" stroke-width="4" fill="none"/>` + flags;
  // pedestal con placa bajo cada valiente
  (e.pois || []).forEach(p => {
    s += `<circle cx="${p.x}" cy="${p.y}" r="86" fill="rgba(255,215,64,.07)"/>
          <rect x="${p.x - 55}" y="${p.y + 62}" width="110" height="16" rx="6" fill="rgba(255,255,255,.25)"/>
          <rect x="${p.x - 34}" y="${p.y + 78}" width="68" height="30" rx="6" fill="rgba(255,255,255,.16)"/>`;
  });
  return decoSvg(s);
};
