"use strict";
/* ============================================================
   EGIPTO dibujado para el mapa: iconos SVG cariñosos que
   sustituyen a los emojis. Todo es iconografia del antiguo
   Egipto: piramides, esfinge con nemes, obelisco, faraon,
   escriba, momia dormilona... Tamanos relativos honestos
   (la Gran Piramide enorme, el escarabajo pequenito).
   ============================================================ */

(function () {
  const eg = (inner, vb) => `<svg viewBox="${vb || "0 0 100 100"}" width="100%" height="100%">${inner}</svg>`;

  const ICONS = {

    /* La Gran Piramide: bloques de piedra, cara al sol y cara en sombra */
    "🔺": { w: 150, h: 112, svg: eg(`
      <path d="M6 96 L70 6 L134 96 Z" fill="#b07f36"/>
      <path d="M70 6 L134 96 L70 96 Z" fill="#ecc06a"/>
      <path d="M70 6 L83 24 L57 24 Z" fill="#ffd54f"/>
      <path d="M70 6 L83 24 L70 24 Z" fill="#f6b73c"/>
      <path d="M49 36 L91 36 M34 56 L106 56 M20 76 L120 76" stroke="rgba(90,60,20,.4)" stroke-width="2.5"/>
      <path d="M58 36 L58 56 M74 36 L74 56 M88 36 L88 56 M44 56 L44 76 M62 56 L62 76 M80 56 L80 76 M98 56 L98 76 M30 76 L30 96 M52 76 L52 96 M70 76 L70 96 M88 76 L88 96 M110 76 L110 96" stroke="rgba(90,60,20,.3)" stroke-width="2"/>
      <path d="M78 96 L78 84 Q84 78 90 84 L90 96 Z" fill="#7a5220"/>`, "0 0 140 100") },

    /* La esfinge: cuerpo de leon tumbado, cabeza humana con nemes y kohl */
    "🦁": { w: 140, h: 88, svg: eg(`
      <defs><linearGradient id="egEsf" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e8bc6a"/><stop offset="100%" stop-color="#c08a3c"/></linearGradient></defs>
      <path d="M148 84 Q158 78 154 66" stroke="#c08a3c" stroke-width="7" fill="none" stroke-linecap="round"/>
      <path d="M40 96 Q36 66 62 58 Q94 50 122 56 Q148 62 148 82 L148 96 Z" fill="url(#egEsf)"/>
      <path d="M114 96 Q110 66 132 64 Q148 68 148 84 L148 96 Z" fill="#c8924c" opacity=".5"/>
      <path d="M28 58 Q24 80 32 96 L60 96 Q64 76 58 56 Z" fill="url(#egEsf)"/>
      <rect x="10" y="72" width="46" height="11" rx="5.5" fill="#d9a55f"/>
      <rect x="6" y="84" width="52" height="12" rx="6" fill="url(#egEsf)"/>
      <path d="M20 86 L20 95 M32 86 L32 95" stroke="rgba(120,80,30,.5)" stroke-width="2"/>
      <path d="M20 54 Q14 20 44 14 Q74 20 68 54 L60 62 Q44 68 28 62 Z" fill="#f2c14e"/>
      <path d="M25 32 Q23 44 27 56 M32 22 Q30 40 32 60 M56 22 Q58 40 56 60 M63 32 Q65 44 61 56" stroke="#3b5bb5" stroke-width="4" fill="none"/>
      <ellipse cx="44" cy="32" rx="12" ry="13" fill="#e8b04b"/>
      <rect x="32" y="16" width="24" height="6" rx="3" fill="#3b5bb5"/>
      <circle cx="44" cy="14" r="3" fill="#ffd54f"/>
      <circle cx="39" cy="30" r="2.4" fill="#3e2412"/><circle cx="49" cy="30" r="2.4" fill="#3e2412"/>
      <path d="M35 27 Q39 25 43 27 M45 27 Q49 25 53 27" stroke="#26150a" stroke-width="1.6" fill="none"/>
      <path d="M35 30 L31 29 M53 30 L57 29" stroke="#26150a" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M40 37 Q44 40 48 37" stroke="#7a4a1d" stroke-width="2" fill="none" stroke-linecap="round"/>`, "0 0 160 100") },

    /* La camara del tesoro: puerta de piedra con brillo dorado dentro */
    "💎": { w: 72, h: 80, svg: eg(`
      <defs><radialGradient id="egBrillo" cx="50%" cy="60%"><stop offset="0%" stop-color="#ffe082"/><stop offset="100%" stop-color="rgba(255,224,130,0)"/></radialGradient></defs>
      <rect x="4" y="10" width="82" height="86" rx="6" fill="#cfa055"/>
      <path d="M4 40 L26 40 M64 40 L86 40 M4 68 L28 68 M62 68 L86 68 M15 40 L15 68 M74 40 L74 68" stroke="rgba(90,60,20,.3)" stroke-width="2.5"/>
      <rect x="8" y="10" width="74" height="14" rx="4" fill="#b58139"/>
      <circle cx="45" cy="17" r="4" fill="#ffd54f"/>
      <path d="M41 17 Q32 12 24 17 M49 17 Q58 12 66 17" stroke="#ffd54f" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      <path d="M26 96 L30 34 L60 34 L64 96 Z" fill="#3a2510"/>
      <ellipse cx="45" cy="76" rx="16" ry="22" fill="url(#egBrillo)"/>
      <path d="M32 96 Q38 84 45 84 Q52 84 58 96 Z" fill="#ffd54f"/>
      <circle cx="38" cy="90" r="3.4" fill="#ffca28"/><circle cx="50" cy="89" r="3.4" fill="#ffca28"/><circle cx="44" cy="93" r="3.4" fill="#ffb300"/>
      <path d="M42 58 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 Z" fill="#fff59d"/>
      <path d="M52 46 l1.4 3.4 3.4 1.4 -3.4 1.4 -1.4 3.4 -1.4 -3.4 -3.4 -1.4 3.4 -1.4 Z" fill="#ffe082"/>`, "0 0 90 100") },

    /* El obelisco: aguja de piedra con punta dorada y jeroglificos */
    "🗼": { w: 48, h: 110, svg: eg(`
      <rect x="13" y="92" width="24" height="8" fill="#c8924c"/>
      <rect x="8" y="98" width="34" height="10" rx="2" fill="#b58139"/>
      <path d="M18 92 L21 22 L29 22 L32 92 Z" fill="#e0b25e"/>
      <path d="M27 22 L29 22 L32 92 L27 92 Z" fill="rgba(140,95,40,.35)"/>
      <path d="M21 22 L25 8 L29 22 Z" fill="#ffd54f"/>
      <circle cx="24" cy="33" r="3" fill="none" stroke="#7a5220" stroke-width="1.8"/>
      <path d="M24 36 L24 44 M20.5 39.5 L27.5 39.5" stroke="#7a5220" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M20 53 Q24 49 28 53 Q24 57 20 53 Z" fill="none" stroke="#7a5220" stroke-width="1.8"/>
      <circle cx="24" cy="53" r="1.2" fill="#7a5220"/>
      <path d="M20 64 L23 61 L26 64 L29 61" stroke="#7a5220" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <circle cx="23" cy="76" r="2.6" fill="none" stroke="#7a5220" stroke-width="1.6"/>
      <path d="M26 77 L29.5 79 M23 79 L23 85" stroke="#7a5220" stroke-width="1.6" stroke-linecap="round"/>`, "0 0 50 112") },

    /* El camello: dos jorobas y manta de montar con flecos dorados */
    "🐫": { w: 96, h: 86, svg: eg(`
      <defs><linearGradient id="egCam" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#dfae66"/><stop offset="100%" stop-color="#b07f36"/></linearGradient></defs>
      <path d="M32 60 Q20 54 18 36 Q16 24 26 21 Q34 22 34 32 Q36 48 42 56 Z" fill="url(#egCam)"/>
      <path d="M27 21 Q14 18 9 25 Q10 31 19 31 Q27 31 28 26 Z" fill="url(#egCam)"/>
      <path d="M30 19 L34 12 L35 21 Z" fill="#b07f36"/>
      <circle cx="21" cy="25" r="2.4" fill="#33200f"/><circle cx="21.8" cy="24.2" r=".8" fill="#fff"/>
      <path d="M11 28 Q14 30 18 29" stroke="#7a5220" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <path d="M26 64 Q26 46 36 40 Q40 26 50 34 Q56 40 60 40 Q66 26 76 34 Q88 40 90 56 Q92 68 82 74 L84 94 L76 94 L74 76 L62 78 L62 94 L54 94 L54 78 L44 78 L42 94 L34 94 L34 74 Q26 72 26 64 Z" fill="url(#egCam)"/>
      <path d="M90 56 Q100 60 98 72" stroke="#b07f36" stroke-width="4" fill="none" stroke-linecap="round"/>
      <circle cx="98" cy="74" r="3.4" fill="#8a5c26"/>
      <path d="M48 36 Q56 30 64 36 L66 54 Q56 60 46 54 Z" fill="#c62839"/>
      <path d="M52 36 L51 55 M56 34 L56 57 M60 36 L61 55" stroke="#ffd54f" stroke-width="2"/>
      <path d="M46 52 Q56 58 66 52" stroke="#ffd54f" stroke-width="2.6" fill="none"/>
      <circle cx="47" cy="56" r="2" fill="#ffd54f"/><circle cx="65" cy="56" r="2" fill="#ffd54f"/>`, "0 0 110 100") },

    /* La barca de papiro: casco de manojos atados y vela clara */
    "🛶": { w: 100, h: 84, svg: eg(`
      <path d="M36 18 L16 60 M72 18 L94 58" stroke="#a1887f" stroke-width="1.6"/>
      <path d="M54 60 L54 18" stroke="#8d6e63" stroke-width="3.5"/>
      <path d="M36 18 L72 18 M40 46 L68 46" stroke="#8d6e63" stroke-width="3" stroke-linecap="round"/>
      <path d="M38 20 L70 20 L67 44 L41 44 Z" fill="#f6e7c1"/>
      <path d="M44 20 L45 44 M54 20 L54 44 M64 20 L63 44" stroke="#e0b25e" stroke-width="2"/>
      <path d="M4 42 Q8 66 34 70 L76 70 Q100 66 106 42 Q98 52 84 56 Q56 62 28 56 Q12 52 4 42 Z" fill="#c9a15c"/>
      <path d="M10 50 Q56 64 100 50" stroke="#8a5c26" stroke-width="2" fill="none" opacity=".7"/>
      <path d="M22 56 L20 68 M40 59 L40 70 M58 60 L58 70 M76 59 L76 70 M90 55 L92 66" stroke="#8a5c26" stroke-width="2.4"/>
      <path d="M14 80 q10 -6 20 0 M50 84 q10 -6 20 0 M82 80 q10 -6 20 0" stroke="rgba(41,182,246,.8)" stroke-width="3" fill="none" stroke-linecap="round"/>`, "0 0 110 92") },

    /* El cocodrilo sonriente: crestas en el lomo y dientes de leche */
    "🐊": { w: 112, h: 46, svg: eg(`
      <defs><linearGradient id="egCoc" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#6aa84f"/><stop offset="100%" stop-color="#38761d"/></linearGradient></defs>
      <path d="M2 26 Q14 14 32 13 Q60 8 86 14 Q92 6 99 11 Q103 15 100 19 Q112 17 122 23 Q129 27 122 32 Q112 38 98 36 Q92 42 84 40 Q58 46 28 41 Q12 39 2 26 Z" fill="url(#egCoc)"/>
      <path d="M30 14 L35 6 L42 13 M48 12 L54 4 L60 11 M66 11 L72 4 L78 11" fill="#4e8236" stroke="#38661f" stroke-width="1.5"/>
      <circle cx="96" cy="13" r="2.8" fill="#12290b"/><circle cx="97" cy="12" r=".9" fill="#fff"/>
      <circle cx="121" cy="24" r="1.6" fill="#1d4212"/>
      <path d="M98 30 Q110 35 121 30" stroke="#1d4212" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      <path d="M103 31 L105 35 L107 30 Z M110 32 L112 36 L114 31 Z" fill="#fff"/>
      <path d="M32 41 L28 51 M46 43 L46 53 M66 43 L66 53 M82 40 L86 50" stroke="#38761d" stroke-width="5" stroke-linecap="round"/>
      <path d="M28 38 Q58 42 84 38" stroke="#2c5217" stroke-width="2" fill="none" opacity=".5"/>`, "0 0 130 55") },

    /* El hipopotamo: rechoncho, con hocico enorme y diente asomando */
    "🦛": { w: 90, h: 64, svg: eg(`
      <defs><linearGradient id="egHip" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#9b8aa6"/><stop offset="100%" stop-color="#6f5d80"/></linearGradient></defs>
      <path d="M24 40 Q16 42 14 48" stroke="#6f5d80" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M24 34 Q28 16 52 14 Q74 12 82 24 Q102 24 108 38 Q110 50 100 56 Q94 60 86 60 L86 70 L76 70 L76 60 L46 60 L46 70 L36 70 L36 58 Q22 52 22 42 Q22 37 24 34 Z" fill="url(#egHip)"/>
      <circle cx="60" cy="12" r="4" fill="#6f5d80"/><circle cx="60" cy="12" r="2" fill="#d1a3b5"/>
      <circle cx="72" cy="14" r="4" fill="#6f5d80"/><circle cx="72" cy="14" r="2" fill="#d1a3b5"/>
      <circle cx="78" cy="24" r="3" fill="#2b2038"/><circle cx="79" cy="23" r="1" fill="#fff"/>
      <circle cx="94" cy="31" r="2.2" fill="#3d2f4a"/><circle cx="102" cy="35" r="2.2" fill="#3d2f4a"/>
      <path d="M90 48 Q97 53 104 47" stroke="#3d2f4a" stroke-width="2.2" fill="none" stroke-linecap="round"/>
      <rect x="95" y="49" width="4" height="5" rx="1.5" fill="#fff"/>
      <path d="M40 56 Q64 60 84 56" stroke="#57466b" stroke-width="2.4" opacity=".6" fill="none"/>`, "0 0 112 76") },

    /* Los papiros: matas verdes con las flores en abanico */
    "🌿": { w: 68, h: 74, svg: eg(`
      <path d="M45 90 Q34 60 26 34 M45 90 Q45 55 42 24 M45 90 Q56 58 62 30 M45 90 Q64 68 76 52" stroke="#2e7d32" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M26 34 l-13 -7 M26 34 l-5 -14 M26 34 l7 -12 M26 34 l-14 3" stroke="#66bb6a" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M42 24 l-12 -9 M42 24 l-1 -15 M42 24 l11 -10 M42 24 l13 -2" stroke="#66bb6a" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M62 30 l-9 -12 M62 30 l4 -14 M62 30 l13 -7 M62 30 l14 2" stroke="#66bb6a" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M76 52 l-4 -14 M76 52 l9 -11 M76 52 l13 -3" stroke="#66bb6a" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M30 90 q6 -10 12 0 M44 90 q6 -10 12 0" stroke="#388e3c" stroke-width="3" fill="none" stroke-linecap="round"/>`, "0 0 90 95") },

    /* El ibis blanco: pico negro curvado hacia abajo y plumas traseras oscuras */
    "🐦": { w: 60, h: 64, svg: eg(`
      <path d="M42 70 L42 88 M54 70 L54 88" stroke="#33323a" stroke-width="3"/>
      <path d="M42 88 L36 92 M42 88 L48 92 M54 88 L48 92 M54 88 L60 92" stroke="#33323a" stroke-width="2.4" stroke-linecap="round"/>
      <ellipse cx="48" cy="56" rx="26" ry="18" fill="#f6f2e8"/>
      <path d="M68 46 Q80 40 86 32 Q84 50 70 56 Z" fill="#33323a"/>
      <path d="M36 50 Q50 44 64 52" stroke="#d9d2c2" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M28 50 Q20 34 24 18 Q26 12 32 12 Q38 13 36 21 Q33 34 40 46 Z" fill="#f6f2e8"/>
      <path d="M28 12 Q12 14 6 28 Q15 19 30 17 Z" fill="#33323a"/>
      <circle cx="31" cy="15" r="1.8" fill="#1d1c22"/>`, "0 0 95 100") },

    /* Los jeroglificos: losa con ojo de Horus, ankh y pajaro tallados */
    "📜": { w: 78, h: 64, svg: eg(`
      <rect x="6" y="8" width="88" height="66" rx="7" fill="#d9b06a"/>
      <rect x="12" y="14" width="76" height="54" rx="4" fill="#e6c281"/>
      <path d="M78 74 L84 62" stroke="#b58139" stroke-width="2"/>
      <path d="M15 27 Q26 20 37 27" stroke="#8a5c26" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      <path d="M16 33 Q26 25 36 33 Q26 41 16 33 Z" fill="none" stroke="#8a5c26" stroke-width="2.4"/>
      <circle cx="26" cy="33" r="2.8" fill="#8a5c26"/>
      <path d="M24 40 L24 48 M32 39 Q36 46 30 50" stroke="#8a5c26" stroke-width="2.2" fill="none" stroke-linecap="round"/>
      <circle cx="52" cy="28" r="5.4" fill="none" stroke="#8a5c26" stroke-width="2.6"/>
      <path d="M52 33 L52 52 M44 40 L60 40" stroke="#8a5c26" stroke-width="2.6" stroke-linecap="round"/>
      <path d="M70 30 L66 32 M70 33 Q70 26 76 27 Q82 28 82 34 Q82 39 76 39 L71 39 Z" fill="none" stroke="#8a5c26" stroke-width="2.2" stroke-linejoin="round"/>
      <path d="M82 34 L88 40 M74 39 L74 48 M78 39 L78 48" stroke="#8a5c26" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M20 60 L26 55 L32 60 L38 55 L44 60" stroke="#8a5c26" stroke-width="2.2" fill="none" stroke-linecap="round"/>`, "0 0 100 82") },

    /* El faraon: nemes rayado oro y azul, kohl, collar y ankh en la mano */
    "👑": { w: 74, h: 108, svg: eg(`
      <defs><linearGradient id="egOro" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffd54f"/><stop offset="100%" stop-color="#e0a32e"/></linearGradient></defs>
      <path d="M30 62 L50 62 L54 84 L26 84 Z" fill="#e0a877"/>
      <path d="M28 66 Q17 74 16 90" stroke="#e0a877" stroke-width="7" fill="none" stroke-linecap="round"/>
      <path d="M52 66 Q63 74 63 88" stroke="#e0a877" stroke-width="7" fill="none" stroke-linecap="round"/>
      <circle cx="16" cy="91" r="3.5" fill="#e0a877"/><circle cx="63" cy="89" r="3.5" fill="#e0a877"/>
      <circle cx="63" cy="96" r="4" fill="none" stroke="#ffd54f" stroke-width="2.4"/>
      <path d="M63 100 L63 110 M57 104 L69 104" stroke="#ffd54f" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M26 84 L54 84 L58 102 Q40 110 22 102 Z" fill="#f6f2e8"/>
      <path d="M31 88 L29 100 M49 88 L51 100" stroke="#d9d2c2" stroke-width="1.6"/>
      <rect x="26" y="82" width="28" height="5" rx="2.5" fill="#ffd54f"/>
      <path d="M34 104 L34 114 M46 104 L46 114" stroke="#e0a877" stroke-width="6" stroke-linecap="round"/>
      <path d="M29 116 L39 116 M41 116 L51 116" stroke="#8a5c26" stroke-width="3.4" stroke-linecap="round"/>
      <path d="M18 40 Q14 12 40 8 Q66 12 62 40 Q64 52 56 58 L52 64 L28 64 L24 58 Q16 52 18 40 Z" fill="url(#egOro)"/>
      <path d="M22 28 Q20 42 24 54 M30 16 Q28 36 30 58 M50 16 Q52 36 50 58 M58 28 Q60 42 56 54" stroke="#3b5bb5" stroke-width="4" fill="none"/>
      <path d="M24 56 L21 78 Q26 83 31 79 L31 60 Z" fill="url(#egOro)"/>
      <path d="M56 56 L59 78 Q54 83 49 79 L49 60 Z" fill="url(#egOro)"/>
      <path d="M23 64 L30 64 M22 70 L30 70 M50 64 L57 64 M50 70 L58 70" stroke="#3b5bb5" stroke-width="2.4"/>
      <path d="M31 62 Q40 70 49 62 L50 70 Q40 78 30 70 Z" fill="url(#egOro)"/>
      <path d="M32 64 Q40 71 48 64" stroke="#c62839" stroke-width="2.2" fill="none"/>
      <path d="M31 68 Q40 76 49 68" stroke="#3b5bb5" stroke-width="2.2" fill="none"/>
      <ellipse cx="40" cy="38" rx="12" ry="13" fill="#e0a877"/>
      <path d="M28 24 Q40 19 52 24" stroke="#3b5bb5" stroke-width="5" fill="none"/>
      <circle cx="40" cy="12" r="3" fill="#ffb300"/><circle cx="40" cy="9" r="1.6" fill="#ffb300"/>
      <circle cx="35" cy="36" r="2.4" fill="#26150a"/><circle cx="45" cy="36" r="2.4" fill="#26150a"/>
      <path d="M31 33 Q35 31 39 33 M41 33 Q45 31 49 33" stroke="#26150a" stroke-width="1.6" fill="none"/>
      <path d="M31 36 L27 35 M49 36 L53 35" stroke="#26150a" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M36 44 Q40 47 44 44" stroke="#8a4a2b" stroke-width="2" fill="none" stroke-linecap="round"/>
      <rect x="37" y="50" width="6" height="11" rx="3" fill="#3b5bb5"/>
      <path d="M37 54 L43 54 M37 57.5 L43 57.5" stroke="#ffd54f" stroke-width="1.4"/>`, "0 0 80 120") },

    /* El escriba: sentado con las piernas cruzadas, papiro y calamo */
    "✍️": { w: 78, h: 70, svg: eg(`
      <path d="M18 76 Q28 60 50 60 Q72 60 82 76 Q84 84 76 86 L24 86 Q16 84 18 76 Z" fill="#f6f2e8"/>
      <ellipse cx="30" cy="84" rx="6" ry="3.4" fill="#c98a5a"/><ellipse cx="70" cy="84" rx="6" ry="3.4" fill="#c98a5a"/>
      <path d="M40 32 Q50 28 60 32 L64 62 L36 62 Z" fill="#c98a5a"/>
      <path d="M38 40 Q30 46 30 56" stroke="#c98a5a" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M62 40 Q72 44 70 54" stroke="#c98a5a" stroke-width="6" fill="none" stroke-linecap="round"/>
      <rect x="26" y="56" width="48" height="12" rx="3" fill="#f2e3ba"/>
      <circle cx="26" cy="62" r="6" fill="#e6cf96"/><circle cx="74" cy="62" r="6" fill="#e6cf96"/>
      <path d="M36 59 L36 65 M42 59 L42 65 M48 59 L48 65 M54 62 L62 62" stroke="#8a5c26" stroke-width="1.8" stroke-linecap="round"/>
      <circle cx="70" cy="55" r="3.4" fill="#c98a5a"/>
      <path d="M70 55 L78 44" stroke="#8a5c26" stroke-width="2.4" stroke-linecap="round"/>
      <circle cx="78" cy="44" r="1.4" fill="#26150a"/>
      <circle cx="50" cy="22" r="11" fill="#c98a5a"/>
      <path d="M36 20 Q36 6 50 6 Q64 6 64 20 L64 31 L57 31 L57 17 Q50 12 43 17 L43 31 L36 31 Z" fill="#2b1a10"/>
      <circle cx="46" cy="22" r="2.2" fill="#26150a"/><circle cx="54" cy="22" r="2.2" fill="#26150a"/>
      <path d="M43 19 Q46 17.6 49 19 M51 19 Q54 17.6 57 19" stroke="#26150a" stroke-width="1.4" fill="none"/>
      <path d="M46 28 Q50 31 54 28" stroke="#7a4a1d" stroke-width="2" fill="none" stroke-linecap="round"/>`, "0 0 100 90") },

    /* El gato sagrado: negro, sentado erguido, con collar dorado */
    "🐈": { w: 42, h: 58, svg: eg(`
      <defs><linearGradient id="egGat" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#3a3a44"/><stop offset="100%" stop-color="#17171d"/></linearGradient></defs>
      <path d="M48 90 Q60 92 60 80" stroke="#2b2b33" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M22 92 Q14 74 18 54 Q22 38 35 36 Q48 38 52 54 Q56 74 48 92 Z" fill="url(#egGat)"/>
      <path d="M28 90 L28 66 M42 90 L42 66" stroke="#101016" stroke-width="6" stroke-linecap="round"/>
      <ellipse cx="28" cy="92" rx="6" ry="4" fill="#2b2b33"/><ellipse cx="42" cy="92" rx="6" ry="4" fill="#2b2b33"/>
      <path d="M23 16 L20 2 L32 10 Z M47 16 L50 2 L38 10 Z" fill="#2b2b33"/>
      <path d="M24 12 L23 6 L29 10 Z M46 12 L47 6 L41 10 Z" fill="#c99c3c"/>
      <circle cx="35" cy="26" r="15" fill="#2b2b33"/>
      <ellipse cx="29" cy="25" rx="3" ry="4" fill="#ffc94d"/><ellipse cx="41" cy="25" rx="3" ry="4" fill="#ffc94d"/>
      <path d="M29 22 L29 28 M41 22 L41 28" stroke="#17171d" stroke-width="1.6"/>
      <path d="M33 31 L37 31 L35 34 Z" fill="#c98a5a"/>
      <path d="M22 30 L12 28 M22 33 L13 34 M48 30 L58 28 M48 33 L57 34" stroke="#8f8f99" stroke-width="1.2"/>
      <circle cx="21" cy="18" r="2.4" fill="none" stroke="#ffd54f" stroke-width="1.6"/>
      <path d="M25 40 Q35 46 45 40 L45 45 Q35 51 25 45 Z" fill="#ffd54f"/>
      <circle cx="35" cy="49" r="3" fill="#ffb300"/>`, "0 0 70 100") },

    /* El escarabajo: cuerpo lapislazuli, alas desplegadas y disco solar */
    "🪲": { w: 54, h: 40, svg: eg(`
      <defs>
        <linearGradient id="egAla" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#5a8fd4"/><stop offset="100%" stop-color="#2c5aa8"/></linearGradient>
        <linearGradient id="egLap" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#4a7bd0"/><stop offset="100%" stop-color="#1e3f8a"/></linearGradient>
      </defs>
      <path d="M56 50 Q30 18 6 28 Q8 50 30 58 Q46 63 56 58 Z" fill="url(#egAla)"/>
      <path d="M74 50 Q100 18 124 28 Q122 50 100 58 Q84 63 74 58 Z" fill="url(#egAla)"/>
      <path d="M50 52 Q32 34 14 34 M52 56 Q36 46 20 48" stroke="#ffd54f" stroke-width="2.4" fill="none" opacity=".9"/>
      <path d="M80 52 Q98 34 116 34 M78 56 Q94 46 110 48" stroke="#ffd54f" stroke-width="2.4" fill="none" opacity=".9"/>
      <circle cx="65" cy="18" r="9" fill="#ffd54f"/><circle cx="65" cy="18" r="9" fill="none" stroke="#e8a020" stroke-width="2"/>
      <path d="M56 38 Q50 28 58 22 M74 38 Q80 28 72 22" stroke="#1e3f8a" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M54 62 Q44 70 40 78 M76 62 Q86 70 90 78" stroke="#1e3f8a" stroke-width="3" fill="none" stroke-linecap="round"/>
      <ellipse cx="65" cy="55" rx="14" ry="19" fill="url(#egLap)"/>
      <path d="M65 40 L65 74" stroke="#ffd54f" stroke-width="2"/>
      <path d="M53 46 Q65 34 77 46 Q71 50 65 50 Q59 50 53 46 Z" fill="#2c5aa8"/>
      <path d="M58 36 Q65 28 72 36 Q68 40 65 40 Q62 40 58 36 Z" fill="#1e3f8a"/>`, "0 0 130 95") },

    /* La momia dormilona: vendas suaves, un ojito asomando y gorrito */
    "😴": { w: 66, h: 92, svg: eg(`
      <defs><linearGradient id="egMom" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f4ecd8"/><stop offset="100%" stop-color="#d9cba8"/></linearGradient></defs>
      <path d="M8 26 L18 26 L8 38 L18 38" stroke="#7986cb" stroke-width="3" fill="none" stroke-linejoin="round" stroke-linecap="round"/>
      <path d="M4 12 L11 12 L4 20 L11 20" stroke="#9fa8da" stroke-width="2.4" fill="none" stroke-linejoin="round" stroke-linecap="round"/>
      <circle cx="40" cy="20" r="16" fill="#efe5cc"/>
      <path d="M26 12 Q40 8 54 13 M27 28 Q40 25 53 28 M28 10 Q44 20 54 26" stroke="#cbbb92" stroke-width="3" fill="none" opacity=".9"/>
      <path d="M28 16 L52 16 L52 25 L28 25 Z" fill="#7c6c4c"/>
      <circle cx="38" cy="20.5" r="3.6" fill="#fff"/><circle cx="38.6" cy="21.4" r="1.8" fill="#26150a"/>
      <path d="M34 18.4 Q38 16.4 42 18.4" stroke="#26150a" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <circle cx="47" cy="22" r="2.4" fill="#e8a598" opacity=".7"/>
      <path d="M25 13 Q26 1 40 1 Q54 1 55 13 Q48 8 40 8 Q32 8 25 13 Z" fill="#5c6bc0"/>
      <path d="M53 5 Q66 3 67 15" stroke="#5c6bc0" stroke-width="7" fill="none" stroke-linecap="round"/>
      <circle cx="68" cy="17" r="4.4" fill="#c5cae9"/>
      <path d="M24 13 Q40 6 56 13" stroke="#7986cb" stroke-width="4" fill="none"/>
      <path d="M24 106 Q18 80 21 56 Q23 36 40 34 Q57 36 59 56 Q62 80 56 106 Z" fill="url(#egMom)"/>
      <path d="M22 46 Q40 40 58 46 M21 60 Q40 66 59 60 M22 76 Q40 70 58 76 M24 92 Q40 98 56 92" stroke="#cbbb92" stroke-width="3.8" fill="none"/>
      <path d="M24 42 Q44 58 58 72 M56 44 Q38 62 24 78" stroke="#d9cba8" stroke-width="3" fill="none" opacity=".9"/>
      <path d="M58 64 Q70 70 68 84 Q67 92 60 92" stroke="#e6dcc0" stroke-width="4.6" fill="none" stroke-linecap="round"/>
      <path d="M60 92 L56 96 M60 92 L62 97" stroke="#e6dcc0" stroke-width="2.4" stroke-linecap="round"/>`, "0 0 80 112") }
  };

  /* se aplican a los POIs de Egipto sin pisar iconos ya definidos */
  THEMES.egipto.content.explore.pois.forEach(p => {
    const ic = ICONS[p.emoji];
    if (ic && !p.svg) { p.svg = ic.svg; p.iw = ic.w; p.ih = ic.h; }
  });

  /* --- dos aves más, con rigor: el flamenco del Nilo (su silueta era un
     jeroglífico) y el halcón sagrado del dios Horus --- */
  const ex2 = THEMES.egipto.content.explore;
  ex2.pois.push(
    { cat: "nilo", emoji: "🦩", x: 1240, y: 370, iw: 52, ih: 80,
      svg: eg(`
        <path d="M40 92 L40 66 M52 74 Q58 78 56 84" stroke="#e05a7a" stroke-width="4" fill="none" stroke-linecap="round"/>
        <ellipse cx="48" cy="52" rx="22" ry="16" fill="#f48caa"/>
        <path d="M30 50 Q18 44 20 30 Q22 16 34 14" stroke="#f48caa" stroke-width="9" fill="none" stroke-linecap="round"/>
        <circle cx="37" cy="13" r="7.4" fill="#f48caa"/>
        <path d="M31 15 Q22 17 20 23 Q26 25 32 21 Z" fill="#37282e"/>
        <circle cx="38" cy="11" r="1.8" fill="#241318"/><circle cx="38.7" cy="10.3" r=".6" fill="#fff"/>
        <path d="M42 44 Q54 40 62 48" stroke="#e05a7a" stroke-width="3" fill="none" opacity=".7"/>`, "0 0 80 100"),
      name: { es: "El flamenco", ca: "El flamenc", en: "The flamingo", cs: "Plameňák", fr: "Le flamant rose" },
      fact: { es: "Bandadas de flamencos rosas pescaban en el Nilo. Su silueta era un jeroglífico: ¡con ella se escribía la palabra rojo!", ca: "Estols de flamencs roses pescaven al Nil. La seva silueta era un jeroglífic: amb ella s'escrivia la paraula vermell!", en: "Flocks of pink flamingos fished in the Nile. Their shape was a hieroglyph: it was used to write the word red!", cs: "Hejna růžových plameňáků lovila v Nilu. Jejich silueta byla hieroglyf: psalo se s ní slovo červená!", fr: "Des groupes de flamants roses pêchaient dans le Nil. Leur silhouette était un hiéroglyphe : elle servait à écrire le mot rouge !" } },
    { cat: "templo", emoji: "🦅", x: 2150, y: 190, iw: 56, ih: 82,
      svg: eg(`
        <path d="M42 12 L50 2 L58 12 Z" fill="#fff"/><path d="M44 14 Q50 4 56 14 L56 22 L44 22 Z" fill="#c62828"/>
        <ellipse cx="50" cy="52" rx="19" ry="26" fill="#8d9aa8"/>
        <path d="M33 42 Q28 62 36 76 Q42 68 40 50 Z" fill="#6b7885"/>
        <path d="M67 42 Q72 62 64 76 Q58 68 60 50 Z" fill="#6b7885"/>
        <circle cx="50" cy="26" r="12" fill="#a8b4c0"/>
        <path d="M46 24 Q50 21 54 24 L54 27 Q50 30 46 27 Z" fill="#3a2f22"/>
        <circle cx="46" cy="23" r="2.2" fill="#241a10"/><circle cx="46.8" cy="22.2" r=".7" fill="#fff"/>
        <path d="M42 26 Q45 29 48 27 M48 27 L46 31" stroke="#37474f" stroke-width="1.6" fill="none"/>
        <path d="M42 78 L44 90 M50 80 L50 92 M58 78 L56 90" stroke="#c9a227" stroke-width="3.4" stroke-linecap="round"/>
        <path d="M38 46 Q50 42 62 46 M40 56 Q50 52 60 56" stroke="#77848f" stroke-width="2" fill="none"/>`, "0 0 100 100"),
      name: { es: "El halcón de Horus", ca: "El falcó d'Horus", en: "The falcon of Horus", cs: "Sokol boha Hora", fr: "Le faucon d'Horus" },
      fact: { es: "El halcón era el ave sagrada del dios Horus, el protector de Egipto. Los faraones se retrataban con él y su ojo daba buena suerte.", ca: "El falcó era l'au sagrada del déu Horus, el protector d'Egipte. Els faraons es retrataven amb ell i el seu ull donava bona sort.", en: "The falcon was the sacred bird of the god Horus, protector of Egypt. Pharaohs were portrayed with it, and its eye brought good luck.", cs: "Sokol byl posvátný pták boha Hora, ochránce Egypta. Faraoni se s ním nechávali zobrazovat a jeho oko nosilo štěstí.", fr: "Le faucon était l'oiseau sacré du dieu Horus, protecteur de l'Égypte. Les pharaons se faisaient représenter avec lui et son œil portait bonheur." } }
  );
})();
