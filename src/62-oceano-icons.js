"use strict";
/* ============================================================
   OCÉANO renovado: el mapa se organiza por PROFUNDIDAD
   (orilla → arrecife → mar abierto → abismo → fosa) y los
   animales son dibujos con tamaño relativo fiel.
   ============================================================ */

(function () {
  const sea = (inner, vb) => `<svg viewBox="${vb || "0 0 100 100"}" width="100%" height="100%">${inner}</svg>`;
  const ex = THEMES.oceano.content.explore;

  /* fondo con franjas de profundidad */
  ex.bgCss = "linear-gradient(180deg,#9fe0fa 0%,#3fb2e8 14%,#0f85c9 30%,#065a97 48%,#023157 64%,#011627 80%,#000407 100%)";

  /* posiciones nuevas: la profundidad manda (y = hondura real) y el mapa
     mide 4200 de ancho, así que los lugares se reparten por todo el
     recorrido: orilla, arrecife, praderas, mar abierto, cañón y abismo */
  const POS = {
    "🐚": [160, 560], "🐢": [390, 300], "🦀": [620, 620],
    "🪸": [860, 640], "🐠": [1090, 430], "🐙": [1320, 700], "🐡": [1550, 440],
    "🐬": [1800, 250], "🐋": [2060, 520], "🦈": [2320, 760], "🪼": [2540, 430],
    "🦑": [2985, 560], "🌋": [3205, 910], "🔦": [3645, 860], "🕳️": [4072, 900]
  };

  /* iconos dibujados, con tamaños relativos honestos */
  const ICONS = {

    "🐋": { w: 215, h: 95, svg: sea(`
      <defs><linearGradient id="oBal" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#5d8fc4"/><stop offset="100%" stop-color="#2b4f7e"/></linearGradient></defs>
      <path d="M10 46 Q52 12 120 14 Q182 16 208 40 L196 48 Q198 60 186 66 Q120 82 56 72 Q22 66 10 46 Z" fill="url(#oBal)"/>
      <path d="M196 42 L218 24 L212 44 L220 60 L198 50 Z" fill="#2b4f7e"/>
      <path d="M16 52 Q60 66 120 70 Q100 76 60 72 Q28 66 16 52 Z" fill="#cfe3f5" opacity=".8"/>
      <path d="M24 50 Q60 60 110 63 M28 56 Q62 66 100 68" stroke="#9fc2e2" stroke-width="2.4" fill="none" opacity=".7"/>
      <circle cx="38" cy="36" r="4" fill="#0d1f33"/><circle cx="39.5" cy="34.5" r="1.4" fill="#fff"/>
      <path d="M30 12 Q28 2 22 0 M30 12 Q32 2 38 0 M30 12 Q30 4 30 -2" stroke="#bfe4ff" stroke-width="3" fill="none" stroke-linecap="round" opacity=".9"/>
      <path d="M96 60 Q104 70 118 70" stroke="#22406b" stroke-width="4" fill="none" stroke-linecap="round"/>`, "0 0 224 96") },

    "🐬": { w: 78, h: 48, svg: sea(`
      <defs><linearGradient id="oDel" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#9fb8cc"/><stop offset="100%" stop-color="#5c7f9d"/></linearGradient></defs>
      <path d="M8 44 Q28 16 62 14 Q94 14 112 30 L104 36 Q92 52 64 54 Q30 56 8 44 Z" fill="url(#oDel)"/>
      <path d="M104 32 L118 20 L114 34 L120 46 L102 38 Z" fill="#5c7f9d"/>
      <path d="M52 16 L60 2 L68 16 Z" fill="#5c7f9d"/>
      <path d="M8 44 Q2 40 0 34 L14 38 Z" fill="#5c7f9d"/>
      <path d="M16 46 Q40 52 70 50 Q40 58 20 52 Z" fill="#dbe9f4" opacity=".85"/>
      <circle cx="22" cy="34" r="3.4" fill="#12263a"/><circle cx="23.4" cy="32.8" r="1.2" fill="#fff"/>
      <path d="M6 40 Q10 42 14 41" stroke="#12263a" stroke-width="2" fill="none" stroke-linecap="round"/>`, "0 0 122 58") },

    "🦈": { w: 100, h: 54, svg: sea(`
      <defs><linearGradient id="oTib" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#90a8b8"/><stop offset="100%" stop-color="#54718a"/></linearGradient></defs>
      <path d="M6 40 Q30 16 70 16 Q104 18 122 32 L112 40 Q92 54 60 54 Q26 54 6 40 Z" fill="url(#oTib)"/>
      <path d="M56 18 L66 0 L76 18 Z" fill="#54718a"/>
      <path d="M112 34 L132 18 L128 36 L134 50 L110 42 Z" fill="#54718a"/>
      <path d="M40 52 L48 62 L56 52 Z" fill="#54718a"/>
      <path d="M12 42 Q40 52 80 50 Q46 58 18 48 Z" fill="#d7e4ee" opacity=".85"/>
      <circle cx="24" cy="30" r="3.6" fill="#0e2233"/><circle cx="25.4" cy="28.6" r="1.2" fill="#fff"/>
      <path d="M8 38 Q14 42 22 41" stroke="#0e2233" stroke-width="2.2" fill="none" stroke-linecap="round"/>
      <path d="M64 30 L68 40 M74 29 L78 39 M84 29 L88 38" stroke="#3c586f" stroke-width="2.4" stroke-linecap="round"/>`, "0 0 136 64") },

    "🐢": { w: 66, h: 48, svg: sea(`
      <defs><radialGradient id="oTor" cx="45%" cy="40%"><stop offset="0%" stop-color="#8bc34a"/><stop offset="100%" stop-color="#33691e"/></radialGradient></defs>
      <ellipse cx="52" cy="44" rx="34" ry="24" fill="url(#oTor)"/>
      <path d="M40 30 L52 24 L64 30 L66 44 L58 56 L46 56 L38 44 Z" fill="#558b2f" stroke="#33691e" stroke-width="2"/>
      <circle cx="92" cy="40" r="11" fill="#7cb342"/><circle cx="95" cy="37" r="2.4" fill="#1b3311"/><circle cx="95.8" cy="36.2" r=".9" fill="#fff"/>
      <path d="M24 30 Q10 22 6 28 Q14 36 26 38 Z" fill="#7cb342"/>
      <path d="M26 56 Q12 62 10 68 Q20 70 32 62 Z" fill="#7cb342"/>
      <path d="M74 58 Q78 68 86 68 Q86 60 80 54 Z" fill="#7cb342"/>`, "0 0 106 74") },

    "🪼": { w: 46, h: 62, svg: sea(`
      <defs><radialGradient id="oMed" cx="50%" cy="40%"><stop offset="0%" stop-color="#f8bbd0"/><stop offset="100%" stop-color="#ce6a9d"/></radialGradient></defs>
      <path d="M10 44 Q10 10 40 10 Q70 10 70 44 Q56 52 40 52 Q24 52 10 44 Z" fill="url(#oMed)" opacity=".92"/>
      <path d="M18 52 Q14 70 20 88 M32 54 Q30 74 34 94 M48 54 Q50 74 46 92 M62 52 Q66 70 60 86" stroke="#f3a0c4" stroke-width="3.4" fill="none" stroke-linecap="round" opacity=".85"/>
      <circle cx="30" cy="32" r="2.6" fill="#7c2b56"/><circle cx="50" cy="32" r="2.6" fill="#7c2b56"/>
      <path d="M34 40 Q40 44 46 40" stroke="#7c2b56" stroke-width="2" fill="none" stroke-linecap="round"/>`, "0 0 80 100") },

    "🐠": { w: 32, h: 26, svg: sea(`
      <path d="M14 40 Q30 14 56 14 Q82 18 88 40 Q82 62 56 66 Q30 66 14 40 Z" fill="#ff7d2a"/>
      <path d="M30 18 Q36 40 30 62 L40 62 Q46 40 40 18 Z" fill="#fff" stroke="#222" stroke-width="1.6"/>
      <path d="M58 16 Q64 40 58 64 L68 63 Q74 40 68 17 Z" fill="#fff" stroke="#222" stroke-width="1.6"/>
      <path d="M86 34 L100 22 L98 40 L100 56 L86 46 Z" fill="#ff9d4d" stroke="#222" stroke-width="1.4"/>
      <circle cx="26" cy="36" r="3.4" fill="#161616"/><circle cx="27.2" cy="34.8" r="1.1" fill="#fff"/>`, "0 0 102 80") },

    "🐡": { w: 44, h: 42, svg: sea(`
      <defs><radialGradient id="oGlo" cx="45%" cy="40%"><stop offset="0%" stop-color="#ffe082"/><stop offset="100%" stop-color="#d99a2b"/></radialGradient></defs>
      ${Array.from({ length: 10 }, (_, i) => `<line x1="50" y1="50" x2="${50 + 46 * Math.cos(i * 0.628)}" y2="${50 + 46 * Math.sin(i * 0.628)}" stroke="#b97f1c" stroke-width="3.4" stroke-linecap="round"/>`).join("")}
      <circle cx="50" cy="50" r="34" fill="url(#oGlo)"/>
      <circle cx="40" cy="44" r="5.4" fill="#fff"/><circle cx="41.6" cy="45" r="2.8" fill="#161616"/>
      <circle cx="62" cy="44" r="5.4" fill="#fff"/><circle cx="63.6" cy="45" r="2.8" fill="#161616"/>
      <path d="M44 62 Q51 66 58 62" stroke="#7a5210" stroke-width="2.4" fill="none" stroke-linecap="round"/>`, "0 0 100 100") },

    "🐙": { w: 62, h: 68, svg: sea(`
      <defs><radialGradient id="oPul" cx="45%" cy="35%"><stop offset="0%" stop-color="#c98adf"/><stop offset="100%" stop-color="#7b3aa0"/></radialGradient></defs>
      <path d="M20 44 Q20 8 50 8 Q80 8 80 44 L80 56 L20 56 Z" fill="url(#oPul)"/>
      <path d="M22 56 Q14 72 6 76 M34 58 Q32 76 24 86 M46 58 Q46 78 42 90 M58 58 Q60 78 66 88 M70 56 Q78 72 92 78" stroke="#7b3aa0" stroke-width="7" fill="none" stroke-linecap="round"/>
      <circle cx="38" cy="36" r="7" fill="#fff"/><circle cx="40" cy="37.4" r="3.4" fill="#2b1140"/>
      <circle cx="62" cy="36" r="7" fill="#fff"/><circle cx="64" cy="37.4" r="3.4" fill="#2b1140"/>
      <path d="M42 50 Q50 55 58 50" stroke="#4b1e66" stroke-width="2.6" fill="none" stroke-linecap="round"/>
      <circle cx="28" cy="48" r="2" fill="#e5c4f2"/><circle cx="72" cy="48" r="2" fill="#e5c4f2"/>`, "0 0 100 94") },

    "🦀": { w: 36, h: 26, svg: sea(`
      <ellipse cx="50" cy="52" rx="26" ry="18" fill="#e65545"/>
      <path d="M28 44 Q12 36 10 24 Q22 26 26 20 Q30 32 34 38 Z" fill="#e65545"/>
      <path d="M72 44 Q88 36 90 24 Q78 26 74 20 Q70 32 66 38 Z" fill="#e65545"/>
      <path d="M30 62 L20 72 M38 66 L32 78 M62 66 L68 78 M70 62 L80 72" stroke="#c23d2e" stroke-width="4" stroke-linecap="round"/>
      <line x1="42" y1="36" x2="40" y2="26" stroke="#c23d2e" stroke-width="3"/><line x1="58" y1="36" x2="60" y2="26" stroke="#c23d2e" stroke-width="3"/>
      <circle cx="40" cy="24" r="4" fill="#2b0f0a"/><circle cx="60" cy="24" r="4" fill="#2b0f0a"/>
      <path d="M42 54 Q50 60 58 54" stroke="#8d2a1e" stroke-width="2.4" fill="none" stroke-linecap="round"/>`, "0 0 100 84") },

    "🔦": { w: 36, h: 34, svg: sea(`
      <circle cx="30" cy="26" r="16" fill="rgba(255,241,118,.28)"/>
      <circle cx="30" cy="26" r="6" fill="#fff59d"/>
      <path d="M30 32 Q38 36 42 46" stroke="#3d4f63" stroke-width="3.4" fill="none"/>
      <path d="M28 74 Q42 44 70 44 Q94 46 96 62 Q92 80 66 82 Q40 82 28 74 Z" fill="#31435a"/>
      <path d="M94 58 L106 50 L104 62 L106 74 L92 68 Z" fill="#31435a"/>
      <circle cx="48" cy="58" r="6.4" fill="#e8f3ff"/><circle cx="50" cy="59" r="3" fill="#0a1622"/>
      <path d="M36 70 L42 76 M46 71 L51 77 M56 72 L60 78" stroke="#dfe9f2" stroke-width="2.4" stroke-linecap="round"/>`, "0 0 108 90") },

    "🦑": { w: 92, h: 128, svg: sea(`
      <defs><linearGradient id="oCal" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e0705f"/><stop offset="100%" stop-color="#9c3b30"/></linearGradient></defs>
      <path d="M40 4 L56 4 Q66 30 62 56 L34 56 Q30 30 40 4 Z" fill="url(#oCal)"/>
      <path d="M40 8 Q22 16 20 30 Q32 28 38 20 Z" fill="#c05a4b"/>
      <path d="M56 8 Q74 16 76 30 Q64 28 58 20 Z" fill="#c05a4b"/>
      <circle cx="42" cy="64" r="9" fill="#f3e8d8"/><circle cx="44" cy="65.6" r="4.6" fill="#1c1c26"/>
      <path d="M34 72 Q28 96 22 108 M42 74 Q40 100 34 116 M50 74 Q52 100 48 118 M58 72 Q62 96 68 110" stroke="#9c3b30" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M36 70 Q18 108 10 134 M60 70 Q80 108 88 136" stroke="#c05a4b" stroke-width="4" fill="none" stroke-linecap="round"/>
      <circle cx="10" cy="136" r="4" fill="#c05a4b"/><circle cx="88" cy="138" r="4" fill="#c05a4b"/>`, "0 0 96 144") },

    "🪸": { w: 92, h: 66, svg: sea(`
      <path d="M22 92 Q18 62 8 52 M22 92 Q24 58 18 40 M22 92 Q32 62 40 52" stroke="#ff7d5c" stroke-width="7" fill="none" stroke-linecap="round"/>
      <path d="M52 94 Q50 66 42 58 M52 94 Q54 60 62 48 M52 94 Q60 70 70 64" stroke="#e64a8f" stroke-width="7" fill="none" stroke-linecap="round"/>
      <circle cx="82" cy="80" r="13" fill="#26c6da"/><circle cx="82" cy="80" r="7" fill="#7ee3ef"/>
      <circle cx="34" cy="88" r="9" fill="#ffca28"/>
      <circle cx="10" cy="46" r="2.6" fill="#ffe0b2"/><circle cx="64" cy="44" r="2.6" fill="#ffe0b2"/>`, "0 0 100 100") },

    "🐚": { w: 52, h: 36, svg: sea(`
      <path d="M10 56 Q10 40 24 34 Q50 24 76 34 Q90 40 90 56 Q70 70 50 70 Q30 70 10 56 Z" fill="#6b829b"/>
      <ellipse cx="50" cy="52" rx="30" ry="14" fill="#37c1e0"/>
      <path d="M40 50 L46 42 L52 50 L60 46 L58 55 L64 60 L54 60 L50 68 L46 60 L36 59 L44 54 Z" fill="#ff8a5c"/>
      <circle cx="66" cy="48" r="3" fill="#ffd54f"/><circle cx="34" cy="47" r="2.4" fill="#f8bbd0"/>`, "0 0 100 76") },

    "🌋": { w: 62, h: 76, svg: sea(`
      <path d="M28 96 L38 40 L48 40 L58 96 Z" fill="#3a3f52"/>
      <path d="M60 96 L66 56 L74 56 L82 96 Z" fill="#2c3040"/>
      <circle cx="43" cy="32" r="7" fill="rgba(220,230,240,.5)"/><circle cx="46" cy="20" r="5.4" fill="rgba(220,230,240,.4)"/><circle cx="49" cy="10" r="4" fill="rgba(220,230,240,.3)"/>
      <circle cx="70" cy="48" r="5" fill="rgba(220,230,240,.45)"/><circle cx="73" cy="38" r="3.6" fill="rgba(220,230,240,.35)"/>
      <ellipse cx="55" cy="97" rx="34" ry="6" fill="#20232f"/>
      <circle cx="36" cy="92" r="5" fill="#cfd8dc"/><path d="M32 90 L28 86 M40 90 L44 86" stroke="#cfd8dc" stroke-width="2.4" stroke-linecap="round"/>`, "0 0 100 104") },

    "🕳️": { w: 96, h: 104, svg: sea(`
      <path d="M4 8 L38 8 L46 40 L52 78 L56 108 L44 108 L36 70 L26 36 Z" fill="#05070d"/>
      <path d="M96 8 L62 8 L58 44 L56 78 L56 108 L66 104 L70 64 L80 34 Z" fill="#080b14"/>
      <path d="M38 8 L62 8 M42 30 L60 30 M46 54 L58 54 M50 80 L56 80" stroke="rgba(120,160,200,.25)" stroke-width="2.4"/>
      <circle cx="52" cy="96" r="2.4" fill="#7ee3ef"><animate attributeName="opacity" values="1;.2;1" dur="2.4s" repeatCount="indefinite"/></circle>
      <circle cx="58" cy="88" r="1.8" fill="#f8bbd0"><animate attributeName="opacity" values=".3;1;.3" dur="3s" repeatCount="indefinite"/></circle>`, "0 0 100 112") }
  };

  ex.pois.forEach(p => {
    const ic = ICONS[p.emoji];
    const pos = POS[p.emoji];
    if (pos) { p.x = pos[0]; p.y = pos[1]; }
    if (ic) { p.svg = ic.svg; p.iw = ic.w; p.ih = ic.h; }
  });

  /* La escenografía del mapa ya no se dibuja aquí: la pinta entera
     89b-deco-dinos-oceano.js, medida para los 4200 de ancho. La que había
     estaba hecha para 2600 y dejaba vacía media pantalla. */

  /* --- las profundidades de verdad: cachalote, rape abisal y pez hacha --- */
  const ob = (inner, vb) => `<svg viewBox="${vb || "0 0 100 100"}" width="100%" height="100%">${inner}</svg>`;
  ex.pois.push(
    { cat: "profundo", emoji: "🐳", x: 2760, y: 270, size: 2, iw: 150, ih: 64,
      svg: ob(`
        <defs><linearGradient id="oCach" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#5e6f7d"/><stop offset="100%" stop-color="#39454f"/></linearGradient></defs>
        <path d="M4 34 Q4 12 34 10 L96 12 Q124 14 134 26 Q140 32 134 38 Q124 48 96 50 L34 52 Q4 50 4 34 Z" fill="url(#oCach)"/>
        <path d="M134 30 L148 18 L144 32 L148 44 L134 36 Z" fill="#4a5862"/>
        <path d="M4 34 Q0 26 6 20" stroke="#39454f" stroke-width="4" fill="none"/>
        <circle cx="26" cy="26" r="3.4" fill="#0d1418"/><circle cx="27.2" cy="24.8" r="1.1" fill="#fff"/>
        <path d="M8 40 Q20 44 34 44" stroke="#2b353d" stroke-width="2.4" fill="none" opacity=".7"/>
        <path d="M14 12 q2 -8 0 -14 M18 13 q4 -7 2 -13" stroke="#9fc4d8" stroke-width="2.4" fill="none" stroke-linecap="round" opacity=".8"/>`, "0 0 152 56"),
      name: { es: "El cachalote", ca: "El catxalot", en: "The sperm whale", cs: "Vorvaň", fr: "Le cachalot" },
      fact: { es: "El cachalote es el campeón de buceo: aguanta más de una hora sin respirar y baja dos kilómetros a buscar calamares gigantes.", ca: "El catxalot és el campió de busseig: aguanta més d'una hora sense respirar i baixa dos quilòmetres a buscar calamars gegants.", en: "The sperm whale is the diving champion: it can hold its breath for over an hour and dive two kilometres to hunt giant squid.", cs: "Vorvaň je šampion v potápění: vydrží přes hodinu nedýchat a ponoří se dva kilometry za obřími olihněmi.", fr: "Le cachalot est le champion de plongée : il retient son souffle plus d'une heure et descend à deux kilomètres chercher des calmars géants." } },
    { cat: "profundo", emoji: "🎣", x: 3870, y: 580, iw: 74, ih: 60,
      svg: ob(`
        <path d="M30 46 Q28 26 44 22 Q40 12 48 8 Q54 12 52 20" stroke="#4a3d52" stroke-width="4" fill="none" stroke-linecap="round"/>
        <circle cx="54" cy="20" r="6" fill="#fff3a0"><animate attributeName="opacity" values="1;.4;1" dur="1.3s" repeatCount="indefinite"/></circle>
        <circle cx="54" cy="20" r="11" fill="rgba(255,240,150,.25)"><animate attributeName="r" values="11;15;11" dur="1.3s" repeatCount="indefinite"/></circle>
        <path d="M14 52 Q20 30 48 30 Q80 32 84 52 Q80 74 48 74 Q20 72 14 52 Z" fill="#5b4a63" stroke="#3a2e40" stroke-width="2.4"/>
        <path d="M20 48 L34 42 M20 56 L34 60" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
        <path d="M22 50 Q30 52 34 50 L34 54 Q30 54 22 52 Z" fill="#fff"/>
        <circle cx="38" cy="46" r="4.6" fill="#f7e98a"/><circle cx="39.4" cy="44.6" r="1.4" fill="#241a28"/>
        <path d="M84 52 L96 42 L94 54 L96 64 L84 56 Z" fill="#4a3d52"/>`, "0 0 100 84"),
      name: { es: "El rape abisal", ca: "El rap abissal", en: "The anglerfish", cs: "Mořský ďas", fr: "La baudroie des abysses" },
      fact: { es: "En la oscuridad total, el rape abisal lleva su propia lamparita: una lucecita en la cabeza que atrae a los pececillos curiosos.", ca: "En la foscor total, el rap abissal porta la seva pròpia llumeta: un llumet al cap que atrau els peixets curiosos.", en: "In total darkness, the anglerfish carries its own little lamp: a tiny light on its head that attracts curious little fish.", cs: "V úplné tmě nosí mořský ďas vlastní lampičku: světýlko na hlavě, které láká zvědavé rybky.", fr: "Dans le noir total, la baudroie porte sa propre petite lampe : une lumière sur la tête qui attire les petits poissons curieux." } },
    { cat: "profundo", emoji: "🪓", x: 3425, y: 560, iw: 44, ih: 42,
      svg: ob(`
        <path d="M20 40 Q30 18 52 18 Q76 20 82 38 Q80 58 54 62 Q28 60 20 40 Z" fill="#c8d4dc" stroke="#8fa2ad" stroke-width="2"/>
        <path d="M82 38 L94 30 L92 40 L94 50 L82 44 Z" fill="#a9b8c2"/>
        <circle cx="34" cy="34" r="6" fill="#22303a"/><circle cx="36" cy="32" r="2" fill="#fff"/>
        ${[36, 46, 56, 66].map(x => `<circle cx="${x}" cy="56" r="2.4" fill="#eaf6ff"><animate attributeName="opacity" values="1;.3;1" dur="${(1 + x / 60).toFixed(1)}s" repeatCount="indefinite"/></circle>`).join("")}`, "0 0 100 76"),
      name: { es: "El pez hacha", ca: "El peix destral", en: "The hatchetfish", cs: "Sekernatka", fr: "Le poisson-hachette" },
      fact: { es: "El pez hacha es plateado como un espejo y lleva lucecitas en la tripa para camuflarse en la penumbra del mar profundo.", ca: "El peix destral és platejat com un mirall i porta llumetes a la panxa per camuflar-se en la penombra del mar profund.", en: "The hatchetfish is silvery like a mirror and has little lights on its belly to hide in the deep sea twilight.", cs: "Sekernatka je stříbrná jako zrcadlo a na bříšku má světýlka, aby se schovala v šeru hlubokého moře.", fr: "Le poisson-hachette est argenté comme un miroir et porte des petites lumières sous le ventre pour se cacher dans la pénombre des profondeurs." } }
  );

  /* Aquí había un segundo envoltorio de la escenografía (marcas de metros
     rotuladas, una raya vertical y nieve marina) medido para el mapa viejo de
     2600 de ancho. Ya no se pintaba, porque 89b-deco-dinos-oceano.js sustituye
     la deco entera, pero seguía en el fuente con cinco rótulos escritos. Se
     retira: las profundidades se marcan ahora sin una sola letra. */
})();
