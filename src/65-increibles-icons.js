"use strict";
/* ============================================================
   MUJERES INCREÍBLES: retratos dibujados (caras, no iconos)
   para el mapa de exploración. Generador de caras + un rasgo
   distintivo por persona.
   ============================================================ */

(function () {
  /* generador de retrato: piel, pelo, peinado, detalle propio y barba opcional */
  function cara(skin, hairC, style, extra, beard) {
    let hairBack = "", hairFront = "", det = extra || "";
    let beardSvg = "";
    if (beard === "full") beardSvg = `<path d="M30 56 Q30 78 50 80 Q70 78 70 56 L66 60 Q60 70 50 70 Q40 70 34 60 Z" fill="${hairC}"/>`;
    if (beard === "long") beardSvg = `<path d="M30 56 Q28 88 50 94 Q72 88 70 56 L64 62 Q58 72 50 72 Q42 72 36 62 Z" fill="${hairC}"/>`;
    if (beard === "must") beardSvg = `<path d="M36 62 Q43 57 50 62 Q57 57 64 62 Q57 67 50 64 Q43 67 36 62 Z" fill="${hairC}"/>`;
    if (beard === "goatee") beardSvg = `<path d="M42 68 Q50 66 58 68 Q56 78 50 79 Q44 78 42 68 Z" fill="${hairC}"/><path d="M38 61 Q44 57 50 61 Q56 57 62 61 Q56 65 50 62 Q44 65 38 61 Z" fill="${hairC}"/>`;
    if (style === "bun") {
      hairBack = `<circle cx="50" cy="16" r="13" fill="${hairC}"/>`;
      hairFront = `<path d="M24 50 Q22 24 50 22 Q78 24 76 50 L70 42 Q66 32 50 32 Q34 32 30 42 Z" fill="${hairC}"/>`;
    } else if (style === "bob") {
      hairBack = `<path d="M22 46 Q20 74 30 80 L40 74 L36 52 Z" fill="${hairC}"/><path d="M78 46 Q80 74 70 80 L60 74 L64 52 Z" fill="${hairC}"/>`;
      hairFront = `<path d="M22 50 Q20 22 50 20 Q80 22 78 50 L72 40 Q68 30 50 30 Q32 30 28 40 Z" fill="${hairC}"/>`;
    } else if (style === "long") {
      hairBack = `<path d="M22 44 Q16 86 28 92 L42 86 L36 52 Z" fill="${hairC}"/><path d="M78 44 Q84 86 72 92 L58 86 L64 52 Z" fill="${hairC}"/>`;
      hairFront = `<path d="M22 50 Q20 22 50 20 Q80 22 78 50 L72 40 Q68 30 50 30 Q32 30 28 40 Z" fill="${hairC}"/>`;
    } else if (style === "waves") {
      hairBack = `<path d="M24 46 Q18 70 26 78 Q34 72 34 58 Z M76 46 Q82 70 74 78 Q66 72 66 58 Z" fill="${hairC}"/>`;
      hairFront = `<path d="M22 50 Q18 20 50 20 Q82 20 78 50 Q74 36 64 38 Q58 28 46 34 Q36 28 30 42 Z" fill="${hairC}"/>`;
    } else if (style === "scarf") {
      hairFront = `<path d="M20 54 Q18 20 50 18 Q82 20 80 54 L72 44 Q70 32 50 30 Q30 32 28 44 Z" fill="${hairC}"/>
        <path d="M22 52 Q28 76 44 84 L38 92 Q20 80 18 58 Z" fill="${hairC}"/>
        <path d="M78 52 Q72 76 56 84 L62 92 Q80 80 82 58 Z" fill="${hairC}"/>`;
    } else if (style === "wrap") {
      hairFront = `<path d="M22 46 Q20 12 50 10 Q80 12 78 46 L70 38 Q68 24 50 24 Q32 24 30 38 Z" fill="${hairC}"/>
        <path d="M30 20 Q50 4 72 18 L66 26 Q52 16 36 26 Z" fill="${hairC}" opacity=".8"/>`;
    } else if (style === "curls") {
      hairBack = `<circle cx="26" cy="52" r="10" fill="${hairC}"/><circle cx="74" cy="52" r="10" fill="${hairC}"/>`;
      hairFront = `<circle cx="30" cy="32" r="12" fill="${hairC}"/><circle cx="44" cy="24" r="13" fill="${hairC}"/><circle cx="60" cy="24" r="13" fill="${hairC}"/><circle cx="72" cy="32" r="12" fill="${hairC}"/>`;
    } else if (style === "bald") {
      hairFront = `<path d="M28 42 Q30 34 36 32 M64 32 Q70 34 72 42" stroke="${hairC}" stroke-width="4" fill="none" stroke-linecap="round"/>`;
    } else if (style === "wig") {
      hairBack = `<circle cx="24" cy="46" r="10" fill="${hairC}"/><circle cx="24" cy="60" r="9" fill="${hairC}"/><circle cx="76" cy="46" r="10" fill="${hairC}"/><circle cx="76" cy="60" r="9" fill="${hairC}"/>`;
      hairFront = `<path d="M22 48 Q20 18 50 18 Q80 18 78 48 L72 38 Q66 28 50 28 Q34 28 28 38 Z" fill="${hairC}"/><path d="M40 90 Q50 96 60 90 L58 82 L42 82 Z" fill="${hairC}"/>`;
    } else if (style === "wild") {
      hairFront = `<path d="M20 50 Q14 26 30 22 Q34 10 48 16 Q58 6 66 16 Q82 14 80 30 Q90 38 78 50 L70 40 Q64 30 50 31 Q36 30 28 42 Z" fill="${hairC}"/>`;
    } else { /* short */
      hairFront = `<path d="M24 46 Q24 22 50 22 Q76 22 76 46 L70 38 Q62 30 50 31 Q38 30 30 42 Z" fill="${hairC}"/>`;
    }
    return { w: 78, h: 78, svg: `<svg viewBox="0 0 100 100" width="100%" height="100%">
      <circle cx="50" cy="50" r="47" fill="rgba(255,255,255,.14)" stroke="rgba(255,215,64,.7)" stroke-width="2.5"/>
      ${hairBack}
      <circle cx="50" cy="52" r="24" fill="${skin}"/>
      <circle cx="26" cy="54" r="4.4" fill="${skin}"/><circle cx="74" cy="54" r="4.4" fill="${skin}"/>
      ${hairFront}
      <circle cx="42" cy="52" r="2.6" fill="#2b1a10"/><circle cx="58" cy="52" r="2.6" fill="#2b1a10"/>
      <circle cx="42.9" cy="51.1" r=".9" fill="#fff"/><circle cx="58.9" cy="51.1" r=".9" fill="#fff"/>
      <circle cx="37" cy="59" r="3.2" fill="rgba(255,110,140,.4)"/><circle cx="63" cy="59" r="3.2" fill="rgba(255,110,140,.4)"/>
      <path d="M44 63 Q50 68 56 63" stroke="#5a3a28" stroke-width="2" fill="none" stroke-linecap="round"/>
      ${beardSvg}
      ${det}
    </svg>` };
  }
  window.makeCara = cara;

  const P1 = "#f6d5b8", P2 = "#eec39a", P3 = "#c98e62", P4 = "#8d5a33";

  const FACES = {
    /* ciencia */
    "⚗️": cara(P1, "#8d8d8d", "bun", `<circle cx="50" cy="16" r="4" fill="#b0bec5"/><path d="M30 74 L38 82 M70 74 L62 82" stroke="#78909c" stroke-width="3" stroke-linecap="round"/><circle cx="34" cy="86" r="5" fill="#80deea" opacity=".9"/>`),
    "💻": cara(P1, "#3e2a20", "curls", `<path d="M34 44 Q42 40 48 45 M52 45 Q58 40 66 44" stroke="#3e2a20" stroke-width="2" fill="none"/><path d="M28 20 L34 12 M50 16 L50 8 M72 20 L66 12" stroke="#ffd54f" stroke-width="2.4" stroke-linecap="round"/>`),
    "🧬": cara(P1, "#4a3526", "waves", `<path d="M78 70 Q84 76 82 84 M84 66 Q92 72 90 82" stroke="#7e57c2" stroke-width="3" fill="none" stroke-linecap="round"/><line x1="80" y1="74" x2="87" y2="72" stroke="#4dd0e1" stroke-width="2.4"/>`),
    "📐": cara(P3, "#2e1f14", "bun", `<path d="M32 26 Q50 16 68 26" stroke="#8bc34a" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="32" cy="26" r="3" fill="#8bc34a"/><circle cx="68" cy="26" r="3" fill="#8bc34a"/>`),
    /* cielo y espacio */
    "✈️": cara(P1, "#6d4c30", "short", `<path d="M26 38 Q50 26 74 38 L74 30 Q50 16 26 30 Z" fill="#8d6e63"/><circle cx="38" cy="36" r="7" fill="none" stroke="#ffd54f" stroke-width="3"/><circle cx="62" cy="36" r="7" fill="none" stroke="#ffd54f" stroke-width="3"/><line x1="45" y1="36" x2="55" y2="36" stroke="#ffd54f" stroke-width="3"/>`),
    "🚀": cara(P1, "#5a3a22", "short", `<circle cx="50" cy="52" r="33" fill="none" stroke="#b3e5fc" stroke-width="4"/><path d="M24 42 Q50 30 76 42" stroke="#b3e5fc" stroke-width="2.4" fill="none" opacity=".7"/>`),
    "🧮": cara(P4, "#1d130c", "curls", `<circle cx="42" cy="52" r="6.4" fill="none" stroke="#37474f" stroke-width="2.6"/><circle cx="58" cy="52" r="6.4" fill="none" stroke="#37474f" stroke-width="2.6"/><line x1="48" y1="52" x2="52" y2="52" stroke="#37474f" stroke-width="2.6"/>`),
    "👩‍🚀": cara(P4, "#120c08", "curls", `<circle cx="50" cy="52" r="33" fill="none" stroke="#b3e5fc" stroke-width="4"/><rect x="40" y="80" width="20" height="8" rx="4" fill="#90a4ae"/>`),
    /* arte y palabras */
    "🎨": cara(P2, "#1a1210", "bun", `<circle cx="34" cy="24" r="6" fill="#e91e63"/><circle cx="48" cy="19" r="6" fill="#ffd54f"/><circle cx="63" cy="23" r="6" fill="#ff7043"/><path d="M40 47 Q50 43 60 47" stroke="#1a1210" stroke-width="2.6" fill="none"/>`),
    "📖": cara(P1, "#c9c2b8", "bob", `<circle cx="42" cy="52" r="6.4" fill="none" stroke="#5d4037" stroke-width="2.4"/><circle cx="58" cy="52" r="6.4" fill="none" stroke="#5d4037" stroke-width="2.4"/><line x1="48" y1="52" x2="52" y2="52" stroke="#5d4037" stroke-width="2.4"/>`),
    "🟡": cara(P2, "#e53935", "bob", `<circle cx="28" cy="26" r="3" fill="#fff"/><circle cx="42" cy="21" r="3" fill="#fff"/><circle cx="58" cy="21" r="3" fill="#fff"/><circle cx="71" cy="26" r="3" fill="#fff"/><circle cx="24" cy="38" r="3" fill="#fff"/><circle cx="76" cy="38" r="3" fill="#fff"/>`),
    "📚": cara(P3, "#b04a68", "scarf", `<path d="M28 40 Q50 34 72 40" stroke="#8d2f4f" stroke-width="3" fill="none" opacity=".7"/>`),
    /* naturaleza y cimas */
    "🐒": cara(P1, "#bfae94", "long", `<path d="M26 30 Q50 20 74 30" stroke="#8d6e63" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="78" cy="72" r="7" fill="#8d6e63"/><path d="M78 72 Q84 64 82 58" stroke="#8d6e63" stroke-width="2.6" fill="none"/>`),
    "🐋": cara(P1, "#d8cfc0", "short", `<path d="M26 34 Q50 22 74 34 L74 28 Q50 14 26 28 Z" fill="#26a69a"/><circle cx="50" cy="24" r="4" fill="#b2ebf2"/>`),
    "🏔️": cara(P2, "#1a1210", "short", `<path d="M24 36 Q50 20 76 36 L76 28 Q50 12 24 28 Z" fill="#ef5350"/><circle cx="50" cy="20" r="4.4" fill="#fff"/>`),
    "🌳": cara(P4, "#e65100", "wrap", `<circle cx="30" cy="18" r="3" fill="#ffd54f"/><circle cx="50" cy="12" r="3" fill="#8bc34a"/><circle cx="70" cy="18" r="3" fill="#ffd54f"/>`)
  };

  THEMES.increibles.content.explore.pois.forEach(p => {
    const f = FACES[p.emoji];
    if (f) { p.svg = f.svg; p.iw = (p.size || 1) > 1 ? 92 : f.w; p.ih = (p.size || 1) > 1 ? 92 : f.h; }
  });

  /* ============================================================
     El mapa es ahora un MAPAMUNDI: continentes dibujados y cada
     mujer increíble colocada en su país.
     ============================================================ */
  const ex = THEMES.increibles.content.explore;
  ex.bgCss = "linear-gradient(180deg,#63c4f5 0%,#38a8e8 45%,#1e88cf 100%)";
  ex.poikMax = 1.5; /* las caras no se inflan tanto: que no se tapen entre países */
  ex.cats = [
    { id: "america", emoji: "🌎", x: 200, name: { es: "América", ca: "Amèrica", en: "The Americas", cs: "Amerika", fr: "Amérique" } },
    { id: "oceanos", emoji: "🌊", x: 720, name: { es: "Los océanos", ca: "Els oceans", en: "The oceans", cs: "Oceány", fr: "Les océans" } },
    { id: "europa", emoji: "🏰", x: 1000, name: { es: "Europa", ca: "Europa", en: "Europe", cs: "Evropa", fr: "Europe" } },
    { id: "africa", emoji: "🦁", x: 1180, name: { es: "África", ca: "Àfrica", en: "Africa", cs: "Afrika", fr: "Afrique" } },
    { id: "asia", emoji: "🗻", x: 1700, name: { es: "Asia", ca: "Àsia", en: "Asia", cs: "Asie", fr: "Asie" } }
  ];
  /* país de cada una: [x, y, continente] */
  const WHERE = {
    "✈️": [395, 235, "america"],    /* Amelia Earhart: EE. UU. (Kansas) */
    "🧮": [548, 320, "america"],    /* Katherine Johnson: EE. UU. (este) */
    "👩‍🚀": [425, 405, "america"],  /* Mae Jemison: EE. UU. */
    "📖": [232, 290, "america"],    /* Ursula K. Le Guin: EE. UU. (oeste) */
    "🎨": [385, 540, "america"],    /* Frida Kahlo: México */
    "🐋": [810, 620, "oceanos"],    /* Sylvia Earle: el océano */
    "💻": [1060, 200, "europa"],    /* Ada Lovelace: Reino Unido */
    "🧬": [1138, 318, "europa"],    /* Rosalind Franklin: Reino Unido */
    "⚗️": [1318, 242, "europa"],    /* Marie Curie: Polonia */
    "🚀": [1550, 185, "europa"],    /* Valentina Tereshkova: Rusia */
    "📐": [1335, 458, "africa"],    /* Hipatia: Egipto */
    "🌳": [1438, 648, "africa"],    /* Wangari Maathai: Kenia */
    "🐒": [1312, 768, "africa"],    /* Jane Goodall: Tanzania */
    "📚": [1650, 425, "asia"],      /* Malala Yousafzai: Pakistán */
    "🏔️": [1805, 395, "asia"],     /* Junko Tabei: el Everest */
    "🟡": [2170, 350, "asia"]       /* Yayoi Kusama: Japón */
  };
  ex.pois.forEach(p => {
    const w = WHERE[p.emoji];
    if (w) { p.x = w[0]; p.y = w[1]; p.cat = w[2]; }
  });

  ex.deco = function () {
    const borde = 'stroke="rgba(255,255,255,.55)" stroke-width="5" stroke-linejoin="round"';
    let s = "";
    // olas del océano
    s += [[150, 700], [700, 180], [900, 880], [1700, 900], [2350, 560], [2050, 200], [950, 520]].map(o =>
      `<path d="M${o[0]} ${o[1]} q28 -12 56 0 q28 12 56 0" stroke="rgba(255,255,255,.4)" stroke-width="5" fill="none" stroke-linecap="round"/>`).join("");
    // América del Norte + Groenlandia
    s += `<path d="M180 180 Q320 100 520 150 Q640 190 620 300 Q600 380 520 420 Q470 470 420 520 Q380 560 350 500 Q240 470 195 380 Q140 260 180 180 Z" fill="#7cc47f" ${borde}/>
          <path d="M840 125 Q920 90 960 140 Q950 210 880 235 Q815 205 840 125 Z" fill="#e3f4f7" ${borde}/>`;
    // América del Sur
    s += `<path d="M430 570 Q520 525 585 575 Q645 645 605 765 Q565 885 505 940 Q460 900 450 800 Q420 685 430 570 Z" fill="#8fce70" ${borde}/>`;
    // Europa + isla del Reino Unido
    s += `<path d="M1040 305 Q1030 225 1105 195 Q1185 155 1285 185 Q1360 205 1358 262 Q1338 330 1258 340 Q1150 360 1040 305 Z" fill="#a8d576" ${borde}/>
          <ellipse cx="1076" cy="212" rx="34" ry="46" fill="#a8d576" ${borde} transform="rotate(18 1076 212)"/>`;
    // África + Madagascar
    s += `<path d="M1155 425 Q1255 380 1360 420 Q1450 462 1432 572 Q1420 685 1362 782 Q1322 882 1272 878 Q1212 838 1192 722 Q1132 562 1155 425 Z" fill="#f2b25e" ${borde}/>
          <ellipse cx="1478" cy="792" rx="26" ry="56" fill="#f2b25e" ${borde} transform="rotate(20 1478 792)"/>`;
    // Asia + India + islas de Japón
    s += `<path d="M1362 262 Q1400 140 1600 122 Q1900 92 2100 172 Q2200 222 2148 322 Q2098 382 2000 382 Q1948 462 1868 462 Q1798 522 1720 482 Q1638 522 1598 462 Q1478 432 1420 382 Q1368 332 1362 262 Z" fill="#9ccc74" ${borde}/>
          <path d="M1640 470 Q1702 468 1712 542 Q1692 622 1660 642 Q1618 562 1640 470 Z" fill="#9ccc74" ${borde}/>
          <ellipse cx="2158" cy="322" rx="20" ry="40" fill="#9ccc74" ${borde} transform="rotate(24 2158 322)"/>
          <ellipse cx="2185" cy="392" rx="17" ry="32" fill="#9ccc74" ${borde} transform="rotate(30 2185 392)"/>`;
    // Australia + Nueva Zelanda
    s += `<path d="M2000 762 Q2080 700 2200 730 Q2300 762 2280 850 Q2222 922 2100 902 Q2000 862 2000 762 Z" fill="#f5c46b" ${borde}/>
          <ellipse cx="2382" cy="905" rx="16" ry="34" fill="#f5c46b" ${borde} transform="rotate(18 2382 905)"/>`;
    // Antártida
    s += `<path d="M0 1030 Q650 990 1300 1028 Q1950 1062 2600 1026 L2600 1100 L0 1100 Z" fill="rgba(240,250,252,.85)"/>`;
    // el Everest (para Junko Tabei) y una palmera en África
    s += `<path d="M1770 430 L1808 358 L1846 430 Z" fill="#e8edf2"/><path d="M1794 392 L1808 358 L1822 392 L1814 384 L1808 394 L1801 384 Z" fill="#fff"/>`;
    // ecuador punteado y brújula
    s += `<line x1="0" y1="585" x2="2600" y2="585" stroke="rgba(255,255,255,.25)" stroke-width="3" stroke-dasharray="4 22"/>`;
    s += `<g transform="translate(2455 150)"><circle r="52" fill="rgba(255,255,255,.14)" stroke="rgba(255,255,255,.5)" stroke-width="4"/><path d="M0 -34 L10 0 L0 34 L-10 0 Z" fill="#ef5350"/><path d="M0 -34 L10 0 L-10 0 Z" fill="#fff"/><text x="0" y="-58" text-anchor="middle" font-size="30" fill="rgba(255,255,255,.8)" font-weight="bold">N</text></g>`;
    return decoSvg(s);
  };
})();
