"use strict";
/* ============================================================
   Iconos dibujados para el mapa de STAR WARS: planetas con
   identidad propia, naves fieles a sus siluetas de siempre y
   criaturas con cuerpo y cara (nada de emojis).
   Tamaño relativo honesto: la Estrella de la Muerte y el
   Halcon mandan; el porg es el pequeñin del mapa.
   ============================================================ */

(function () {
  const sw = (inner, vb) => `<svg viewBox="${vb || "0 0 100 100"}" width="100%" height="100%">${inner}</svg>`;

  const ICONS = {

    /* Tatooine: esfera de arena con dunas y calor de dos soles */
    "🏜️": { w: 82, h: 82, svg: sw(`
      <defs>
        <radialGradient id="swTat" cx="38%" cy="32%"><stop offset="0%" stop-color="#f6dda6"/><stop offset="100%" stop-color="#c3874a"/></radialGradient>
        <clipPath id="swTatClip"><circle cx="50" cy="50" r="44"/></clipPath>
      </defs>
      <circle cx="50" cy="50" r="44" fill="url(#swTat)"/>
      <g clip-path="url(#swTatClip)">
        <path d="M0 60 Q26 48 50 60 Q76 72 100 58 L100 100 L0 100 Z" fill="#d9a45c" opacity=".9"/>
        <path d="M0 78 Q30 68 58 78 Q82 86 100 76 L100 100 L0 100 Z" fill="#b5763a" opacity=".9"/>
        <path d="M14 36 Q32 28 50 35" stroke="#f1cd8e" stroke-width="5" fill="none" stroke-linecap="round" opacity=".8"/>
        <path d="M56 24 Q70 19 82 25" stroke="#eec384" stroke-width="4" fill="none" stroke-linecap="round" opacity=".6"/>
      </g>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#9c6230" stroke-width="2" opacity=".45"/>`, "0 0 100 100") },

    /* Hoth: bola de nieve y hielo, blanca y azulada */
    "❄️": { w: 74, h: 74, svg: sw(`
      <defs>
        <radialGradient id="swHoth" cx="38%" cy="32%"><stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#9cc4e6"/></radialGradient>
        <clipPath id="swHothClip"><circle cx="50" cy="50" r="44"/></clipPath>
      </defs>
      <circle cx="50" cy="50" r="44" fill="url(#swHoth)"/>
      <g clip-path="url(#swHothClip)">
        <path d="M0 26 Q24 14 52 20 Q80 26 100 18 L100 0 L0 0 Z" fill="#eaf5fd"/>
        <path d="M0 84 Q30 74 60 82 Q84 88 100 80 L100 100 L0 100 Z" fill="#e2f0fb"/>
        <path d="M16 52 Q34 44 54 50 M46 66 Q64 60 82 66" stroke="#bcd9f0" stroke-width="5" fill="none" stroke-linecap="round" opacity=".85"/>
        <path d="M60 34 L70 30 L66 40 Z" fill="#cfe6f7"/>
      </g>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#8ab4d9" stroke-width="2" opacity=".5"/>`, "0 0 100 100") },

    /* Endor: la luna boscosa, verde con nubecitas */
    "🌲": { w: 76, h: 76, svg: sw(`
      <defs>
        <radialGradient id="swEnd" cx="38%" cy="32%"><stop offset="0%" stop-color="#9ccc65"/><stop offset="100%" stop-color="#2e6b2e"/></radialGradient>
        <clipPath id="swEndClip"><circle cx="50" cy="50" r="44"/></clipPath>
      </defs>
      <circle cx="50" cy="50" r="44" fill="url(#swEnd)"/>
      <g clip-path="url(#swEndClip)">
        <path d="M4 40 Q20 30 38 36 Q52 42 62 34 Q76 26 96 34 L96 52 Q74 46 60 52 Q44 58 30 52 Q16 46 4 52 Z" fill="#1f5220" opacity=".75"/>
        <path d="M10 72 Q30 62 52 70 Q74 78 92 70 L92 86 Q70 92 48 84 Q26 78 10 84 Z" fill="#1f5220" opacity=".6"/>
        <path d="M22 22 Q36 16 50 21" stroke="#e8f5e9" stroke-width="5" fill="none" stroke-linecap="round" opacity=".7"/>
        <path d="M54 60 Q68 55 80 60" stroke="#e8f5e9" stroke-width="4" fill="none" stroke-linecap="round" opacity=".5"/>
      </g>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#1c4a1c" stroke-width="2" opacity=".5"/>`, "0 0 100 100") },

    /* Dagobah: pantano verdoso envuelto en niebla */
    "🐸": { w: 70, h: 70, svg: sw(`
      <defs>
        <radialGradient id="swDag" cx="40%" cy="35%"><stop offset="0%" stop-color="#a8bf6f"/><stop offset="100%" stop-color="#44582b"/></radialGradient>
        <clipPath id="swDagClip"><circle cx="50" cy="50" r="44"/></clipPath>
      </defs>
      <circle cx="50" cy="50" r="44" fill="url(#swDag)"/>
      <g clip-path="url(#swDagClip)">
        <path d="M6 58 Q26 50 46 57 Q68 64 94 56 L94 72 Q66 78 44 71 Q24 66 6 72 Z" fill="#37481f" opacity=".8"/>
        <ellipse cx="34" cy="34" rx="14" ry="7" fill="#5d7539" opacity=".9"/>
        <ellipse cx="70" cy="42" rx="10" ry="5" fill="#5d7539" opacity=".8"/>
        <path d="M2 46 Q30 40 58 46 Q80 50 100 44" stroke="#d7dfc6" stroke-width="7" fill="none" stroke-linecap="round" opacity=".55"/>
        <path d="M0 66 Q28 60 54 66 Q80 71 100 65" stroke="#e3e9d6" stroke-width="6" fill="none" stroke-linecap="round" opacity=".45"/>
      </g>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#33421e" stroke-width="2" opacity=".5"/>`, "0 0 100 100") },

    /* Naboo: verde y azul, con lagos y cascadas */
    "🏞️": { w: 78, h: 78, svg: sw(`
      <defs>
        <radialGradient id="swNab" cx="38%" cy="32%"><stop offset="0%" stop-color="#8fd3a8"/><stop offset="100%" stop-color="#2f7d5c"/></radialGradient>
        <clipPath id="swNabClip"><circle cx="50" cy="50" r="44"/></clipPath>
      </defs>
      <circle cx="50" cy="50" r="44" fill="url(#swNab)"/>
      <g clip-path="url(#swNabClip)">
        <path d="M8 34 Q26 24 46 30 Q60 34 72 28 Q84 24 96 30 L96 48 Q78 42 64 48 Q48 54 32 48 Q18 44 8 50 Z" fill="#3f9ec9" opacity=".85"/>
        <ellipse cx="34" cy="70" rx="18" ry="9" fill="#57b2d8" opacity=".9"/>
        <ellipse cx="74" cy="64" rx="11" ry="6" fill="#57b2d8" opacity=".8"/>
        <path d="M20 20 Q34 14 48 19" stroke="#e0f2f1" stroke-width="5" fill="none" stroke-linecap="round" opacity=".7"/>
        <path d="M58 84 Q72 79 84 84" stroke="#e0f2f1" stroke-width="4" fill="none" stroke-linecap="round" opacity=".5"/>
      </g>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#256349" stroke-width="2" opacity=".5"/>`, "0 0 100 100") },

    /* Coruscant: el planeta ciudad, con reticula y luces encendidas */
    "🏙️": { w: 80, h: 80, svg: sw(`
      <defs>
        <radialGradient id="swCor" cx="38%" cy="32%"><stop offset="0%" stop-color="#b0bec5"/><stop offset="100%" stop-color="#4a5a68"/></radialGradient>
        <clipPath id="swCorClip"><circle cx="50" cy="50" r="44"/></clipPath>
      </defs>
      <circle cx="50" cy="50" r="44" fill="url(#swCor)"/>
      <g clip-path="url(#swCorClip)">
        <path d="M6 30 L94 30 M6 48 L94 48 M6 66 L94 66 M8 84 L92 84" stroke="#37444f" stroke-width="2.6" opacity=".8"/>
        <path d="M26 6 L26 94 M50 6 L50 94 M74 6 L74 94" stroke="#37444f" stroke-width="2.6" opacity=".8"/>
        <path d="M58 52 L94 52 L94 66 L58 66 Z" fill="#26313a" opacity=".55"/>
        <circle cx="34" cy="39" r="2.2" fill="#ffe082"/><circle cx="62" cy="39" r="2.2" fill="#ffe082"/>
        <circle cx="42" cy="57" r="2.2" fill="#ffd54f"/><circle cx="70" cy="58" r="2" fill="#ffd54f"/>
        <circle cx="30" cy="75" r="2" fill="#ffe082"/><circle cx="58" cy="75" r="2.2" fill="#ffca28"/>
        <circle cx="80" cy="76" r="1.8" fill="#ffe082"/><circle cx="46" cy="22" r="2" fill="#ffe082"/>
      </g>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#31404c" stroke-width="2" opacity=".55"/>`, "0 0 100 100") },

    /* Halcon Milenario: el disco con mandibulas y cabina lateral */
    "🛸": { w: 142, h: 106, svg: sw(`
      <defs><radialGradient id="swFal" cx="42%" cy="38%"><stop offset="0%" stop-color="#cfd8dc"/><stop offset="100%" stop-color="#78909c"/></radialGradient></defs>
      <path d="M18 32 Q10 56 18 80" stroke="#81d4fa" stroke-width="7" fill="none" stroke-linecap="round" opacity=".9"/>
      <circle cx="62" cy="56" r="46" fill="url(#swFal)"/>
      <path d="M98 28 L146 20 L148 38 L104 44 Z" fill="#90a4ae" stroke="#546e7a" stroke-width="2"/>
      <path d="M104 68 L148 74 L146 92 L98 84 Z" fill="#90a4ae" stroke="#546e7a" stroke-width="2"/>
      <path d="M104 44 Q112 56 104 68" fill="none" stroke="#546e7a" stroke-width="2.4"/>
      <path d="M92 82 Q108 92 118 104" stroke="#78909c" stroke-width="11" fill="none" stroke-linecap="round"/>
      <circle cx="121" cy="105" r="9" fill="#90a4ae" stroke="#546e7a" stroke-width="2"/>
      <circle cx="123" cy="104" r="4.4" fill="#263238"/><circle cx="124.4" cy="102.6" r="1.4" fill="#b3e5fc"/>
      <circle cx="62" cy="56" r="12" fill="none" stroke="#546e7a" stroke-width="2.6"/>
      <circle cx="62" cy="56" r="4" fill="#546e7a"/>
      <path d="M30 30 Q60 16 92 28 M28 84 Q60 96 90 84" stroke="#546e7a" stroke-width="2" fill="none" opacity=".7"/>
      <circle cx="44" cy="30" r="7" fill="#b0bec5" stroke="#546e7a" stroke-width="2"/>
      <circle cx="44" cy="30" r="2.6" fill="#546e7a"/>
      <path d="M40 56 L52 48 M40 62 L54 66" stroke="#607d8b" stroke-width="2.4" stroke-linecap="round" opacity=".8"/>`, "0 0 152 116") },

    /* Ala-X: alas abiertas en X, franjas rojas y motores encendidos */
    "✈️": { w: 96, h: 74, svg: sw(`
      <defs><linearGradient id="swWing" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#90a4ae"/><stop offset="100%" stop-color="#eceff1"/></linearGradient></defs>
      <path d="M46 40 L6 10 L22 6 L58 34 Z" fill="#cfd8dc" stroke="#78909c" stroke-width="2"/>
      <path d="M46 56 L6 86 L22 90 L58 62 Z" fill="#b0bec5" stroke="#78909c" stroke-width="2"/>
      <path d="M12 8 L20 14 M12 88 L20 82" stroke="#c62828" stroke-width="5" stroke-linecap="round"/>
      <circle cx="14" cy="12" r="5" fill="#ef9a9a"/><circle cx="14" cy="84" r="5" fill="#ef9a9a"/>
      <path d="M30 34 L36 40 M30 62 L36 56" stroke="#78909c" stroke-width="7" stroke-linecap="round"/>
      <circle cx="27" cy="32" r="4.6" fill="#ffab91"/><circle cx="27" cy="64" r="4.6" fill="#ffab91"/>
      <path d="M34 40 L96 42 Q126 44 132 48 Q126 52 96 54 L34 56 Q26 48 34 40 Z" fill="url(#swWing)" stroke="#78909c" stroke-width="2"/>
      <path d="M70 43 L94 44 L94 52 L70 53 Z" fill="#c62828" opacity=".85"/>
      <path d="M46 42 Q54 34 62 42 L62 46 L46 46 Z" fill="#4fc3f7" stroke="#546e7a" stroke-width="1.8"/>
      <circle cx="40" cy="41" r="4.6" fill="#64b5f6" stroke="#37474f" stroke-width="1.6"/>`, "0 0 136 96") },

    /* Caza TIE: bola central con ventana y dos paneles hexagonales */
    "🛩️": { w: 84, h: 70, svg: sw(`
      <defs><radialGradient id="swTie" cx="42%" cy="38%"><stop offset="0%" stop-color="#90a4ae"/><stop offset="100%" stop-color="#455a64"/></radialGradient></defs>
      <path d="M20 4 L34 14 L34 86 L20 96 L6 86 L6 14 Z" fill="#37474f" stroke="#263238" stroke-width="2.4"/>
      <path d="M20 8 L20 92 M8 50 L32 50" stroke="#546e7a" stroke-width="2.2" opacity=".9"/>
      <path d="M100 4 L114 14 L114 86 L100 96 L86 86 L86 14 Z" fill="#37474f" stroke="#263238" stroke-width="2.4"/>
      <path d="M100 8 L100 92 M88 50 L112 50" stroke="#546e7a" stroke-width="2.2" opacity=".9"/>
      <rect x="34" y="45" width="14" height="10" rx="3" fill="#546e7a"/>
      <rect x="72" y="45" width="14" height="10" rx="3" fill="#546e7a"/>
      <circle cx="60" cy="50" r="19" fill="url(#swTie)"/>
      <circle cx="60" cy="50" r="9" fill="#263238" stroke="#78909c" stroke-width="2"/>
      <path d="M60 42 L60 58 M52 50 L68 50 M54.5 44.5 L65.5 55.5 M65.5 44.5 L54.5 55.5" stroke="#78909c" stroke-width="1.4"/>
      <circle cx="56.6" cy="46.6" r="1.6" fill="#b3e5fc"/>`, "0 0 120 100") },

    /* Estrella de la Muerte: eso NO es una luna */
    "🌑": { w: 128, h: 128, svg: sw(`
      <defs>
        <radialGradient id="swDs" cx="40%" cy="34%"><stop offset="0%" stop-color="#cfd8dc"/><stop offset="100%" stop-color="#546e7a"/></radialGradient>
        <clipPath id="swDsClip"><circle cx="50" cy="50" r="46"/></clipPath>
      </defs>
      <circle cx="50" cy="50" r="46" fill="url(#swDs)"/>
      <g clip-path="url(#swDsClip)">
        <path d="M4 58 L96 58" stroke="#37474f" stroke-width="4"/>
        <path d="M4 52 L96 52" stroke="#78909c" stroke-width="1.6" opacity=".8"/>
        <path d="M10 24 L44 24 M56 16 L84 16 M8 74 L34 74 M46 82 L88 82 M22 90 L60 90" stroke="#455a64" stroke-width="1.8" opacity=".7"/>
        <circle cx="24" cy="38" r="1.6" fill="#b0bec5"/><circle cx="70" cy="30" r="1.6" fill="#b0bec5"/>
        <circle cx="60" cy="70" r="1.6" fill="#90a4ae"/><circle cx="30" cy="66" r="1.4" fill="#90a4ae"/>
        <circle cx="80" cy="66" r="1.4" fill="#b0bec5"/>
      </g>
      <circle cx="33" cy="31" r="13.5" fill="#455a64"/>
      <circle cx="33" cy="31" r="13.5" fill="none" stroke="#90a4ae" stroke-width="2"/>
      <circle cx="33" cy="31" r="8" fill="#37474f"/>
      <circle cx="33" cy="31" r="2.6" fill="#a7ffeb"/>
      <circle cx="50" cy="50" r="46" fill="none" stroke="#37474f" stroke-width="2" opacity=".6"/>`, "0 0 100 100") },

    /* Sable de luz: empuñadura de metal y hoja verde que hace zum-zum */
    "⚔️": { w: 34, h: 92, svg: sw(`
      <defs>
        <linearGradient id="swSab" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#eceff1"/><stop offset="100%" stop-color="#90a4ae"/></linearGradient>
        <linearGradient id="swSabHoja" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#b9f6ca"/><stop offset="50%" stop-color="#ffffff"/><stop offset="100%" stop-color="#b9f6ca"/></linearGradient>
      </defs>
      <rect x="8" y="4" width="24" height="70" rx="12" fill="#69f0ae" opacity=".35"/>
      <rect x="13" y="8" width="14" height="64" rx="7" fill="url(#swSabHoja)"/>
      <rect x="15.5" y="12" width="9" height="56" rx="4.5" fill="#e8f5e9" opacity=".9"/>
      <rect x="11" y="72" width="18" height="6" rx="2" fill="#546e7a"/>
      <rect x="12" y="78" width="16" height="34" rx="4" fill="url(#swSab)" stroke="#546e7a" stroke-width="1.6"/>
      <path d="M12 86 L28 86 M12 92 L28 92 M12 98 L28 98" stroke="#455a64" stroke-width="2.4"/>
      <circle cx="9" cy="90" r="2.8" fill="#ef5350"/>
      <rect x="14" y="106" width="12" height="6" rx="2" fill="#37474f"/>`, "0 0 40 116") },

    /* Ewok: osito valiente con capucha de cuero y lancita */
    "🧸": { w: 56, h: 66, svg: sw(`
      <defs><radialGradient id="swEwk" cx="45%" cy="35%"><stop offset="0%" stop-color="#8d6e63"/><stop offset="100%" stop-color="#5d4037"/></radialGradient></defs>
      <path d="M74 22 L74 96" stroke="#a1887f" stroke-width="4" stroke-linecap="round"/>
      <path d="M74 22 L69 8 L79 8 Z" fill="#78909c"/>
      <ellipse cx="42" cy="72" rx="24" ry="26" fill="url(#swEwk)"/>
      <path d="M24 92 L20 100 M60 92 L64 100" stroke="#4e342e" stroke-width="7" stroke-linecap="round"/>
      <path d="M62 62 Q72 58 74 50" stroke="#5d4037" stroke-width="7" stroke-linecap="round" fill="none"/>
      <path d="M22 62 Q12 60 10 68" stroke="#5d4037" stroke-width="7" stroke-linecap="round" fill="none"/>
      <circle cx="42" cy="34" r="21" fill="#6d4c41"/>
      <path d="M42 8 Q64 10 66 30 Q66 40 58 44 L58 34 Q54 20 42 18 Q30 20 26 34 L26 44 Q18 40 18 30 Q20 10 42 8 Z" fill="#c07b3f" stroke="#8d5524" stroke-width="2"/>
      <path d="M30 14 L34 20 M50 12 L48 19" stroke="#8d5524" stroke-width="1.8" stroke-linecap="round"/>
      <ellipse cx="42" cy="37" rx="13" ry="11" fill="#a1887f"/>
      <circle cx="37" cy="34" r="3" fill="#261812"/><circle cx="38" cy="33" r="1" fill="#fff"/>
      <circle cx="47" cy="34" r="3" fill="#261812"/><circle cx="48" cy="33" r="1" fill="#fff"/>
      <ellipse cx="42" cy="41" rx="3.4" ry="2.6" fill="#3e2723"/>
      <path d="M38 45 Q42 48 46 45" stroke="#3e2723" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <path d="M34 64 Q42 60 50 64" stroke="#4e342e" stroke-width="2" fill="none" opacity=".7"/>`, "0 0 88 104") },

    /* Porg: pajarito cabezon de ojazos, redondito perfecto */
    "🐧": { w: 38, h: 42, svg: sw(`
      <defs><radialGradient id="swPorg" cx="45%" cy="35%"><stop offset="0%" stop-color="#b98a5a"/><stop offset="100%" stop-color="#8a5f38"/></radialGradient></defs>
      <ellipse cx="38" cy="42" rx="30" ry="34" fill="url(#swPorg)"/>
      <path d="M38 14 Q60 16 66 40 Q68 62 56 72 Q48 60 48 44 Q46 22 38 14 Z" fill="#7a5230" opacity=".7"/>
      <ellipse cx="34" cy="46" rx="22" ry="26" fill="#f3e5d0"/>
      <circle cx="26" cy="36" r="9.5" fill="#fff"/><circle cx="27.5" cy="37.5" r="5.4" fill="#3e2b1a"/><circle cx="29.5" cy="35.5" r="2" fill="#fff"/>
      <circle cx="46" cy="36" r="9.5" fill="#fff"/><circle cx="47.5" cy="37.5" r="5.4" fill="#3e2b1a"/><circle cx="49.5" cy="35.5" r="2" fill="#fff"/>
      <path d="M32 48 L36 51 L40 48 L36 46 Z" fill="#c98a4b"/>
      <path d="M10 48 Q2 54 6 64 Q12 60 14 54 Z" fill="#7a5230"/>
      <path d="M58 66 L66 74 M62 62 L70 68" stroke="#7a5230" stroke-width="3" stroke-linecap="round"/>
      <path d="M28 74 L26 80 M42 74 L44 80" stroke="#c98a4b" stroke-width="3" stroke-linecap="round"/>`, "0 0 76 84") },

    /* Bantha: montaña de lana con cuernos en espiral */
    "🐂": { w: 96, h: 82, svg: sw(`
      <defs><linearGradient id="swBan" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#a1887f"/><stop offset="100%" stop-color="#6b4a3b"/></linearGradient></defs>
      <path d="M14 88 Q6 60 16 40 Q26 20 52 16 Q80 12 96 26 Q110 38 112 58 Q114 76 106 88 L98 88 L96 96 L86 96 L84 88 L44 88 L42 96 L32 96 L30 88 Z" fill="url(#swBan)"/>
      <path d="M16 44 Q24 40 22 32 M24 66 Q32 62 30 54 M40 24 Q48 22 48 14 M66 18 Q74 18 76 10 M96 32 Q104 32 106 24 M104 56 Q112 54 112 46" stroke="#8d6e63" stroke-width="4" fill="none" stroke-linecap="round" opacity=".8"/>
      <ellipse cx="94" cy="46" rx="20" ry="18" fill="#8d6e63"/>
      <path d="M104 30 q12 -14 24 -6 q10 8 0 16 q-8 6 -14 0 q-4 -5 2 -9" stroke="#e8d9c4" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M84 28 q-2 -16 -18 -16 q-12 2 -10 12 q2 8 10 6 q6 -2 4 -8" stroke="#dccbb2" stroke-width="4.4" fill="none" stroke-linecap="round"/>
      <circle cx="97" cy="44" r="3.2" fill="#2b1a12"/><circle cx="98.2" cy="42.8" r="1.1" fill="#fff"/>
      <path d="M88 58 Q96 62 104 58" stroke="#4e342e" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      <path d="M86 64 L86 74 M94 66 L94 76 M102 64 L102 72" stroke="#6b4a3b" stroke-width="3.4" stroke-linecap="round"/>
      <path d="M28 80 Q52 74 80 80" stroke="#5d4037" stroke-width="3" fill="none" opacity=".6"/>`, "0 0 128 100") },

    /* Jawa: tunica marron con capucha y ojazos amarillos en la oscuridad */
    "🧙": { w: 46, h: 62, svg: sw(`
      <defs><linearGradient id="swJawa" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8d5a2b"/><stop offset="100%" stop-color="#5b3517"/></linearGradient></defs>
      <path d="M38 6 Q62 6 66 30 L72 92 L4 92 L10 30 Q14 6 38 6 Z" fill="url(#swJawa)"/>
      <path d="M38 6 Q20 8 16 26 Q24 34 38 34 Q52 34 60 26 Q56 8 38 6 Z" fill="#6d4520"/>
      <ellipse cx="38" cy="24" rx="15" ry="12" fill="#140b04"/>
      <circle cx="31" cy="23" r="4.6" fill="#ffca28"/><circle cx="31" cy="23" r="2" fill="#fff59d"/>
      <circle cx="45" cy="23" r="4.6" fill="#ffca28"/><circle cx="45" cy="23" r="2" fill="#fff59d"/>
      <path d="M12 56 L64 56 L64 64 L12 64 Z" fill="#3e2410"/>
      <path d="M20 56 L48 88" stroke="#2e1a0b" stroke-width="6" stroke-linecap="round"/>
      <circle cx="30" cy="67" r="2.4" fill="#c9a86c"/><circle cx="38" cy="76" r="2.4" fill="#c9a86c"/>
      <path d="M10 44 Q4 52 6 62 M66 44 Q72 52 70 62" stroke="#5b3517" stroke-width="7" fill="none" stroke-linecap="round"/>`, "0 0 76 100") },

    /* Wookiee: gigante peludo con bandolera y cara de dar abrazos */
    "🐻": { w: 58, h: 100, svg: sw(`
      <defs><linearGradient id="swWook" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8d6748"/><stop offset="100%" stop-color="#54371f"/></linearGradient></defs>
      <path d="M36 6 Q60 6 62 30 L64 74 Q66 104 58 116 L48 116 L46 104 L28 104 L26 116 L16 116 Q8 104 10 74 L12 30 Q14 6 36 6 Z" fill="url(#swWook)"/>
      <path d="M10 44 Q2 52 4 64 M62 44 Q70 52 68 64" stroke="#6b4a2b" stroke-width="9" fill="none" stroke-linecap="round"/>
      <path d="M16 38 Q22 44 18 52 M52 34 Q58 40 56 48 M24 62 Q30 68 26 76 M46 60 Q52 66 48 74 M32 84 Q38 90 34 98" stroke="#6b4a2b" stroke-width="3.4" fill="none" stroke-linecap="round" opacity=".85"/>
      <path d="M58 34 L14 92 L26 96 L64 44 Z" fill="#9e9e9e" stroke="#616161" stroke-width="1.6"/>
      <rect x="47" y="43" width="7" height="9" rx="1.6" fill="#eceff1" transform="rotate(37 50 47)"/>
      <rect x="37" y="56" width="7" height="9" rx="1.6" fill="#eceff1" transform="rotate(37 40 60)"/>
      <rect x="27" y="69" width="7" height="9" rx="1.6" fill="#eceff1" transform="rotate(37 30 73)"/>
      <ellipse cx="36" cy="24" rx="14" ry="12" fill="#a1887f"/>
      <path d="M22 16 Q36 8 50 16" stroke="#54371f" stroke-width="6" fill="none" stroke-linecap="round"/>
      <circle cx="30" cy="22" r="3" fill="#1f120a"/><circle cx="31" cy="21" r="1" fill="#fff"/>
      <circle cx="42" cy="22" r="3" fill="#1f120a"/><circle cx="43" cy="21" r="1" fill="#fff"/>
      <ellipse cx="36" cy="29" rx="3.6" ry="2.6" fill="#332012"/>
      <path d="M31 33 Q36 36 41 33" stroke="#332012" stroke-width="1.8" fill="none" stroke-linecap="round"/>`, "0 0 72 120") }
  };

  /* aplicar cada icono a su POI (sin pisar ninguno ya dibujado) */
  THEMES.starwars.content.explore.pois.forEach(p => {
    const ic = ICONS[p.emoji];
    if (ic && !p.svg) { p.svg = ic.svg; p.iw = ic.w; p.ih = ic.h; }
  });
})();
