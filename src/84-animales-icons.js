"use strict";
/* ============================================================
   Animales del mundo dibujados para el mapa: siluetas cariñosas
   con tamaño relativo fiel (el elefante y la jirafa enormes,
   la ranita y el lagarto pequeñitos).
   Nota: el emoji 🐆 aparece dos veces en el mapa (jaguar en la
   selva y guepardo en la sabana), así que el guepardo se aplica
   por zona con un mapa aparte.
   ============================================================ */

(function () {
  const an = (inner, vb) => `<svg viewBox="${vb || "0 0 100 100"}" width="100%" height="100%">${inner}</svg>`;

  const ICONS = {

    /* Mono: cola en espiral, carita clara y barriga blandita */
    "🐒": { w: 52, h: 60, svg: an(`
      <defs><linearGradient id="anMono" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#a1785c"/><stop offset="100%" stop-color="#6d4c33"/></linearGradient></defs>
      <path d="M58 78 Q84 74 84 54 Q84 40 72 42 Q64 44 68 52" stroke="#6d4c33" stroke-width="7" fill="none" stroke-linecap="round"/>
      <path d="M28 62 Q16 72 14 86 M60 62 Q72 72 74 86" stroke="#6d4c33" stroke-width="7" fill="none" stroke-linecap="round"/>
      <ellipse cx="44" cy="72" rx="19" ry="24" fill="url(#anMono)"/>
      <ellipse cx="44" cy="76" rx="11" ry="15" fill="#d9b895"/>
      <path d="M36 92 Q32 100 26 102 M52 92 Q56 100 62 102" stroke="#6d4c33" stroke-width="7" fill="none" stroke-linecap="round"/>
      <circle cx="22" cy="26" r="9" fill="#8d6748"/><circle cx="66" cy="26" r="9" fill="#8d6748"/>
      <circle cx="22" cy="26" r="4.5" fill="#d9b895"/><circle cx="66" cy="26" r="4.5" fill="#d9b895"/>
      <circle cx="44" cy="28" r="20" fill="url(#anMono)"/>
      <ellipse cx="37" cy="29" rx="8" ry="9" fill="#e8cba6"/><ellipse cx="51" cy="29" rx="8" ry="9" fill="#e8cba6"/>
      <ellipse cx="44" cy="37" rx="12" ry="9" fill="#e8cba6"/>
      <circle cx="38" cy="28" r="3" fill="#2b1a0e"/><circle cx="39" cy="27" r="1" fill="#fff"/>
      <circle cx="50" cy="28" r="3" fill="#2b1a0e"/><circle cx="51" cy="27" r="1" fill="#fff"/>
      <circle cx="42" cy="35" r="1.2" fill="#2b1a0e"/><circle cx="46" cy="35" r="1.2" fill="#2b1a0e"/>
      <path d="M40 40 Q44 43 48 40" stroke="#2b1a0e" stroke-width="1.8" fill="none" stroke-linecap="round"/>`, "0 0 90 104") },

    /* Tucán: cuerpo negro, pecho amarillo y pico gigante naranja */
    "🦜": { w: 46, h: 38, svg: an(`
      <defs><linearGradient id="anTucan" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#ff9e2c"/><stop offset="100%" stop-color="#e64a19"/></linearGradient></defs>
      <path d="M4 86 L70 80" stroke="#6d4c41" stroke-width="7" stroke-linecap="round"/>
      <path d="M26 70 Q14 82 6 86 Q18 88 30 80 Z" fill="#37474f"/>
      <path d="M40 20 Q22 24 18 44 Q14 64 28 76 Q40 84 50 78 Q58 70 58 52 Q58 32 52 24 Q46 19 40 20 Z" fill="#263238"/>
      <ellipse cx="50" cy="52" rx="9" ry="22" fill="#ffd54f"/>
      <path d="M48 28 Q78 22 100 32 Q106 36 100 42 Q76 50 50 42 Q46 34 48 28 Z" fill="url(#anTucan)"/>
      <path d="M94 30 Q102 33 100 40 Q96 42 90 40 Q94 36 94 30 Z" fill="#bf360c"/>
      <path d="M50 40 Q74 46 96 40" stroke="#bf360c" stroke-width="2" fill="none"/>
      <circle cx="40" cy="32" r="6" fill="#4fc3f7"/><circle cx="40" cy="32" r="3" fill="#101418"/><circle cx="41.1" cy="30.9" r="1" fill="#fff"/>
      <path d="M36 78 L34 86 M46 79 L46 86" stroke="#78909c" stroke-width="3" stroke-linecap="round"/>`, "0 0 112 92") },

    /* Jaguar: dorado con rosetas (anillos rotos), gato robusto */
    "🐆": { w: 88, h: 53, svg: an(`
      <defs><linearGradient id="anJaguar" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f2b04a"/><stop offset="100%" stop-color="#c07a1f"/></linearGradient></defs>
      <path d="M16 40 Q4 38 4 26" stroke="#c07a1f" stroke-width="6" fill="none" stroke-linecap="round"/>
      <circle cx="101" cy="15" r="5.5" fill="#c07a1f"/><circle cx="117" cy="15" r="5.5" fill="#c07a1f"/>
      <circle cx="101" cy="15" r="2.4" fill="#8a5a1d"/><circle cx="117" cy="15" r="2.4" fill="#8a5a1d"/>
      <path d="M104 16 Q120 16 124 28 Q126 38 118 42 Q116 48 108 50 Q98 58 84 60 L86 72 L76 72 L74 62 L46 62 L48 72 L38 72 L36 60 Q18 56 14 42 Q12 28 30 24 Q60 18 88 20 Q94 16 104 16 Z" fill="url(#anJaguar)"/>
      <circle cx="36" cy="38" r="5" fill="none" stroke="#5d3a10" stroke-width="2.2" stroke-dasharray="4 3"/><circle cx="36" cy="38" r="1.4" fill="#5d3a10"/>
      <circle cx="56" cy="32" r="5" fill="none" stroke="#5d3a10" stroke-width="2.2" stroke-dasharray="4 3"/><circle cx="56" cy="32" r="1.4" fill="#5d3a10"/>
      <circle cx="74" cy="36" r="5" fill="none" stroke="#5d3a10" stroke-width="2.2" stroke-dasharray="4 3"/><circle cx="74" cy="36" r="1.4" fill="#5d3a10"/>
      <circle cx="48" cy="50" r="4" fill="none" stroke="#5d3a10" stroke-width="2" stroke-dasharray="3 3"/>
      <circle cx="66" cy="48" r="4" fill="none" stroke="#5d3a10" stroke-width="2" stroke-dasharray="3 3"/>
      <circle cx="110" cy="27" r="3.2" fill="#3a2408"/><circle cx="111.2" cy="25.8" r="1.1" fill="#fff"/>
      <ellipse cx="118" cy="34" rx="7" ry="5" fill="#f7e3c3"/><circle cx="122" cy="32" r="1.8" fill="#5d3a10"/>
      <path d="M118 37 Q121 39 124 37" stroke="#5d3a10" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <path d="M46 60 Q64 64 82 58" stroke="#f7e3c3" stroke-width="3.6" fill="none" stroke-linecap="round"/>`, "0 0 130 78") },

    /* Rana de colores: naranja brillante con motas y patas azules */
    "🐸": { w: 34, h: 29, svg: an(`
      <defs><radialGradient id="anRana" cx="45%" cy="35%"><stop offset="0%" stop-color="#ff7043"/><stop offset="100%" stop-color="#d84315"/></radialGradient></defs>
      <path d="M30 66 Q22 74 14 75 M38 68 Q36 76 28 79" stroke="#3949ab" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M64 68 Q68 76 78 77" stroke="#3949ab" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M22 56 Q20 30 46 26 Q74 24 80 48 Q82 62 70 68 L30 68 Q22 64 22 56 Z" fill="url(#anRana)"/>
      <circle cx="48" cy="44" r="4" fill="#4527a0"/><circle cx="64" cy="40" r="3" fill="#4527a0"/><circle cx="38" cy="52" r="3" fill="#4527a0"/><circle cx="56" cy="56" r="2.4" fill="#4527a0"/>
      <circle cx="34" cy="26" r="9" fill="#d84315"/><circle cx="34" cy="26" r="5.4" fill="#fff"/><circle cx="35.4" cy="26.6" r="2.6" fill="#1a1a1a"/><circle cx="36.2" cy="25.8" r=".9" fill="#fff"/>
      <circle cx="58" cy="24" r="9" fill="#d84315"/><circle cx="58" cy="24" r="5.4" fill="#fff"/><circle cx="59.4" cy="24.6" r="2.6" fill="#1a1a1a"/><circle cx="60.2" cy="23.8" r=".9" fill="#fff"/>
      <path d="M64 56 Q72 58 78 54" stroke="#7f2000" stroke-width="2.4" fill="none" stroke-linecap="round"/>`, "0 0 100 84") },

    /* León: melena espesa en degradado y hocico sonriente */
    "🦁": { w: 98, h: 74, svg: an(`
      <defs>
        <radialGradient id="anLeonMelena" cx="50%" cy="45%"><stop offset="0%" stop-color="#b3541e"/><stop offset="100%" stop-color="#7a3410"/></radialGradient>
        <linearGradient id="anLeon" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f0b25c"/><stop offset="100%" stop-color="#c98a3a"/></linearGradient>
      </defs>
      <path d="M108 64 Q122 60 124 46" stroke="#c98a3a" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="125" cy="44" r="4" fill="#7a3410"/>
      <path d="M42 58 Q60 46 86 50 Q106 54 110 70 L112 88 L102 88 L100 78 L64 80 L66 88 L56 88 L54 78 Q42 72 42 58 Z" fill="url(#anLeon)"/>
      <circle cx="40" cy="42" r="31" fill="url(#anLeonMelena)"/>
      <path d="M18 26 Q14 38 18 50 M62 26 Q66 38 62 50" stroke="#5f2609" stroke-width="3" fill="none" opacity=".5" stroke-linecap="round"/>
      <circle cx="22" cy="20" r="6" fill="#c98a3a"/><circle cx="22" cy="20" r="3" fill="#8a5a2b"/>
      <circle cx="58" cy="20" r="6" fill="#c98a3a"/><circle cx="58" cy="20" r="3" fill="#8a5a2b"/>
      <circle cx="40" cy="44" r="19" fill="url(#anLeon)"/>
      <circle cx="33" cy="40" r="3.2" fill="#3a2005"/><circle cx="34.2" cy="38.8" r="1.1" fill="#fff"/>
      <circle cx="47" cy="40" r="3.2" fill="#3a2005"/><circle cx="48.2" cy="38.8" r="1.1" fill="#fff"/>
      <ellipse cx="40" cy="52" rx="9.5" ry="7" fill="#f7dcae"/>
      <path d="M36.5 48.5 L43.5 48.5 L40 52 Z" fill="#3a2005"/>
      <path d="M40 52 L40 55 M40 55 Q36 58 32 56 M40 55 Q44 58 48 56" stroke="#3a2005" stroke-width="1.8" fill="none" stroke-linecap="round"/>`, "0 0 128 96") },

    /* Elefante: el grandullón gris azulado con orejón y trompa */
    "🐘": { w: 142, h: 106, svg: an(`
      <defs><linearGradient id="anElefante" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#9fb4c8"/><stop offset="100%" stop-color="#5f7a93"/></linearGradient></defs>
      <path d="M138 60 Q148 66 146 78" stroke="#5f7a93" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="146" cy="80" r="3" fill="#42586c"/>
      <path d="M44 28 Q76 14 108 22 Q136 30 140 56 Q142 72 132 80 L134 100 L120 100 L118 86 L100 88 L102 100 L88 100 L86 88 L64 88 L66 100 L52 100 L50 84 Q36 76 34 56 Q34 38 44 28 Z" fill="url(#anElefante)"/>
      <path d="M20 38 Q22 22 42 20 Q60 20 62 38 Q64 54 48 60 Q30 64 22 52 Q18 46 20 38 Z" fill="url(#anElefante)"/>
      <path d="M26 54 Q12 62 12 78 Q12 92 24 96 Q30 95 30 92" stroke="#6b869f" stroke-width="10" fill="none" stroke-linecap="round"/>
      <path d="M30 64 Q24 72 28 80" stroke="#f5efe0" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M54 30 Q80 24 86 46 Q88 66 66 72 Q48 74 46 56 Q46 40 54 30 Z" fill="#7d94ab"/>
      <path d="M58 36 Q76 32 80 48 Q80 62 64 66" stroke="#6b869f" stroke-width="2.6" fill="none" opacity=".7"/>
      <circle cx="34" cy="40" r="3.6" fill="#16222e"/><circle cx="35.3" cy="38.7" r="1.2" fill="#fff"/>`, "0 0 150 112") },

    /* Jirafa: altísima, con manchas, osiconos y sonrisa dulce */
    "🦒": { w: 88, h: 143, svg: an(`
      <defs><linearGradient id="anJirafa" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f6c95c"/><stop offset="100%" stop-color="#d99b32"/></linearGradient></defs>
      <path d="M84 102 Q94 108 92 122" stroke="#d99b32" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="92" cy="124" r="3.5" fill="#8a5a1d"/>
      <path d="M36 30 Q34 60 32 92 L52 92 Q48 60 50 30 Z" fill="url(#anJirafa)"/>
      <path d="M50 32 Q52 62 54 88" stroke="#8a5a1d" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M22 100 Q28 86 50 86 Q78 86 86 100 Q90 110 84 116 L88 148 L78 148 L75 118 L41 118 L43 148 L33 148 L30 116 Q20 110 22 100 Z" fill="url(#anJirafa)"/>
      <circle cx="42" cy="48" r="4.5" fill="#b5691f" opacity=".85"/><circle cx="44" cy="66" r="5" fill="#b5691f" opacity=".85"/><circle cx="40" cy="80" r="4" fill="#b5691f" opacity=".85"/>
      <circle cx="36" cy="98" r="6" fill="#b5691f" opacity=".85"/><circle cx="56" cy="94" r="6.5" fill="#b5691f" opacity=".85"/><circle cx="72" cy="102" r="6" fill="#b5691f" opacity=".85"/><circle cx="48" cy="110" r="5" fill="#b5691f" opacity=".85"/>
      <circle cx="36" cy="128" r="3.5" fill="#b5691f" opacity=".7"/><circle cx="80" cy="130" r="3.5" fill="#b5691f" opacity=".7"/>
      <path d="M36 8 L37 16 M46 8 L47 16" stroke="#8a5a1d" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="36" cy="7" r="3.4" fill="#8a5a1d"/><circle cx="46" cy="7" r="3.4" fill="#8a5a1d"/>
      <path d="M28 18 Q16 12 14 18 Q20 24 28 22 Z" fill="#d99b32"/><path d="M54 18 Q66 12 68 18 Q62 24 54 22 Z" fill="#d99b32"/>
      <path d="M26 24 Q28 12 41 12 Q54 12 55 24 Q56 34 42 36 Q28 36 26 24 Z" fill="url(#anJirafa)"/>
      <ellipse cx="41" cy="30" rx="10" ry="6" fill="#e8d5ad"/>
      <circle cx="35" cy="22" r="3" fill="#3a2408"/><circle cx="36.1" cy="20.9" r="1" fill="#fff"/>
      <circle cx="47" cy="22" r="3" fill="#3a2408"/><circle cx="48.1" cy="20.9" r="1" fill="#fff"/>
      <circle cx="37" cy="30" r="1.2" fill="#8a5a1d"/><circle cx="45" cy="30" r="1.2" fill="#8a5a1d"/>
      <path d="M37 33 Q41 35 45 33" stroke="#8a5a1d" stroke-width="1.8" fill="none" stroke-linecap="round"/>`, "0 0 96 156") },

    /* Pingüino: frac negro, barriga blanca y pies naranjas */
    "🐧": { w: 44, h: 60, svg: an(`
      <defs><linearGradient id="anPinguino" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#455a72"/><stop offset="100%" stop-color="#1c2a3a"/></linearGradient></defs>
      <path d="M26 88 Q22 94 16 94 M46 88 Q50 94 56 94" stroke="#ff9e2c" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M36 8 Q58 8 60 40 Q62 72 50 84 Q43 90 36 90 Q29 90 22 84 Q10 72 12 40 Q14 8 36 8 Z" fill="url(#anPinguino)"/>
      <path d="M12 40 Q4 52 8 64 Q14 60 16 50 Z" fill="#1c2a3a"/>
      <path d="M60 40 Q68 52 64 64 Q58 60 56 50 Z" fill="#1c2a3a"/>
      <path d="M36 24 Q50 26 50 48 Q50 72 42 82 Q36 86 30 82 Q22 72 22 48 Q22 26 36 24 Z" fill="#f4f8fb"/>
      <circle cx="28" cy="19" r="3" fill="#0c141d" stroke="#f4f8fb" stroke-width="1.2"/><circle cx="29" cy="18" r="1" fill="#fff"/>
      <circle cx="44" cy="19" r="3" fill="#0c141d" stroke="#f4f8fb" stroke-width="1.2"/><circle cx="45" cy="18" r="1" fill="#fff"/>
      <path d="M30 26 L42 26 L36 34 Z" fill="#ff9e2c"/>`, "0 0 72 98") },

    /* Oso polar: blanco azulado, grandote y de andar tranquilo */
    "🐻‍❄️": { w: 112, h: 71, svg: an(`
      <defs><linearGradient id="anOso" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#cfdde8"/></linearGradient></defs>
      <path d="M30 36 Q50 20 82 22 Q112 24 120 42 Q126 56 116 64 L118 78 L106 78 L104 66 L88 68 L90 78 L78 78 L76 66 L52 68 L54 78 L42 78 L40 64 Q28 56 30 36 Z" fill="url(#anOso)"/>
      <circle cx="30" cy="23" r="5.5" fill="#e4edf4"/><circle cx="30" cy="23" r="2.5" fill="#b8ccdc"/>
      <path d="M8 42 Q6 28 22 24 Q36 22 40 34 Q42 44 34 50 Q22 56 13 50 Q7 47 8 42 Z" fill="url(#anOso)"/>
      <circle cx="9" cy="39" r="2.8" fill="#22303c"/>
      <circle cx="22" cy="35" r="2.8" fill="#22303c"/><circle cx="23" cy="34" r="1" fill="#fff"/>
      <path d="M11 44 Q15 48 21 46" stroke="#22303c" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <path d="M52 66 Q76 72 104 64" stroke="#b8ccdc" stroke-width="4" fill="none" opacity=".8" stroke-linecap="round"/>`, "0 0 132 84") },

    /* Águila: alas abiertas con plumas recortadas y pico ganchudo */
    "🦅": { w: 80, h: 47, svg: an(`
      <defs><linearGradient id="anAguila" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8a5a2b"/><stop offset="100%" stop-color="#5b3a18"/></linearGradient></defs>
      <path d="M58 36 Q34 8 4 12 Q12 20 22 24 L16 28 Q26 36 38 38 L34 42 Q46 46 58 46 Z" fill="url(#anAguila)"/>
      <path d="M78 36 Q102 8 132 12 Q124 20 114 24 L120 28 Q110 36 98 38 L102 42 Q90 46 78 46 Z" fill="url(#anAguila)"/>
      <path d="M62 52 L56 70 L64 64 L68 72 L72 64 L80 70 L74 52 Z" fill="#8a5a2b"/>
      <path d="M60 30 Q68 24 76 30 L74 54 Q68 60 62 54 Z" fill="#6d4520"/>
      <circle cx="68" cy="22" r="9" fill="#e9dfc8"/>
      <path d="M60 19 Q52 21 54 26 Q59 28 62 25 Z" fill="#f2b134"/>
      <circle cx="64" cy="21" r="2.3" fill="#2b1a08"/><circle cx="64.8" cy="20.2" r=".8" fill="#fff"/>`, "0 0 136 80") },

    /* Cabra montesa: cuernos hacia atrás, barbita y su roca */
    "🐐": { w: 62, h: 62, svg: an(`
      <defs><linearGradient id="anCabra" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#cdbba4"/><stop offset="100%" stop-color="#96806a"/></linearGradient></defs>
      <path d="M14 78 Q22 66 40 68 L70 66 Q84 70 84 82 L80 94 L16 94 Z" fill="#78909c"/>
      <path d="M20 76 Q40 68 70 70" stroke="#cfd8dc" stroke-width="3" fill="none" opacity=".8" stroke-linecap="round"/>
      <path d="M30 20 Q14 14 10 2" stroke="#6b5744" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M38 18 Q26 8 26 0" stroke="#6b5744" stroke-width="4.5" fill="none" stroke-linecap="round"/>
      <path d="M22 12 L26 16 M15 6 L19 10" stroke="#4a3b2c" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M36 34 Q56 26 70 34 Q80 42 76 54 L80 70 L72 70 L70 58 L48 60 L52 70 L44 70 L40 58 Q30 48 36 34 Z" fill="url(#anCabra)"/>
      <path d="M22 24 Q28 14 40 18 Q48 22 44 32 Q40 40 30 40 Q20 36 22 24 Z" fill="url(#anCabra)"/>
      <path d="M28 40 L26 48" stroke="#96806a" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M44 20 Q52 16 54 21 Q49 26 43 24 Z" fill="#96806a"/>
      <circle cx="30" cy="26" r="2.6" fill="#2b1f12"/><circle cx="31" cy="25" r=".9" fill="#fff"/>
      <circle cx="22" cy="31" r="1.4" fill="#2b1f12"/>
      <path d="M20 34 Q24 36 28 35" stroke="#2b1f12" stroke-width="1.6" fill="none" stroke-linecap="round"/>`, "0 0 96 96") },

    /* Camello: dos jorobas y pestañas larguísimas contra la arena */
    "🐫": { w: 108, h: 90, svg: an(`
      <defs><linearGradient id="anCamello" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e0b36a"/><stop offset="100%" stop-color="#b07d36"/></linearGradient></defs>
      <path d="M118 58 Q128 62 126 74" stroke="#b07d36" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="126" cy="76" r="3.4" fill="#7a5218"/>
      <path d="M14 28 Q22 34 28 48 Q32 60 34 72 L52 72 Q44 52 40 38 Q36 28 30 26 Z" fill="url(#anCamello)"/>
      <path d="M34 66 Q36 50 48 46 Q52 32 64 32 Q76 32 80 46 Q84 32 96 32 Q108 32 112 48 Q120 52 118 64 L122 96 L112 96 L110 80 L94 82 L96 96 L86 96 L84 82 L58 82 L60 96 L50 96 L48 80 Q36 78 34 66 Z" fill="url(#anCamello)"/>
      <path d="M58 80 Q80 84 108 78" stroke="#ecd3a3" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <ellipse cx="22" cy="20" rx="13" ry="10" fill="url(#anCamello)"/>
      <ellipse cx="11" cy="24" rx="7" ry="6" fill="#c89448"/>
      <path d="M32 12 Q38 8 38 14 Q35 18 31 16 Z" fill="#b07d36"/>
      <path d="M18 14 L15 9 M23 13 L22 8" stroke="#4a3008" stroke-width="1.8" stroke-linecap="round"/>
      <circle cx="20" cy="18" r="2.6" fill="#2e1c08"/><circle cx="21" cy="17" r=".9" fill="#fff"/>
      <path d="M5 26 Q10 30 16 28" stroke="#7a5218" stroke-width="2" fill="none" stroke-linecap="round"/>`, "0 0 134 112") },

    /* Fénec: orejones gigantes, ojazos y cola con puntita oscura */
    "🦊": { w: 42, h: 44, svg: an(`
      <defs><linearGradient id="anFenec" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f2d9ae"/><stop offset="100%" stop-color="#d8a967"/></linearGradient></defs>
      <path d="M56 78 Q70 78 72 66" stroke="#d8a967" stroke-width="8" fill="none" stroke-linecap="round"/><circle cx="72" cy="64" r="5" fill="#8a5a2b"/>
      <path d="M32 42 Q18 26 14 4 Q30 12 40 34 Z" fill="url(#anFenec)"/>
      <path d="M31 38 Q22 26 19 10 Q29 18 35 33 Z" fill="#f0b39a"/>
      <path d="M52 42 Q66 26 70 4 Q54 12 44 34 Z" fill="url(#anFenec)"/>
      <path d="M53 38 Q62 26 65 10 Q55 18 49 33 Z" fill="#f0b39a"/>
      <path d="M30 60 Q22 74 26 84 L58 84 Q62 74 54 60 Q48 66 42 66 Q36 66 30 60 Z" fill="url(#anFenec)"/>
      <ellipse cx="42" cy="76" rx="9" ry="8" fill="#faeed7"/>
      <path d="M26 44 Q30 32 42 32 Q54 32 58 44 Q60 54 52 58 Q46 62 42 62 Q38 62 32 58 Q24 54 26 44 Z" fill="url(#anFenec)"/>
      <circle cx="36" cy="46" r="3.4" fill="#33240f"/><circle cx="37.2" cy="44.8" r="1.2" fill="#fff"/>
      <circle cx="48" cy="46" r="3.4" fill="#33240f"/><circle cx="49.2" cy="44.8" r="1.2" fill="#fff"/>
      <path d="M40 52 L44 52 L42 55 Z" fill="#33240f"/>
      <path d="M42 55 Q42 58 38 58 M42 55 Q42 58 46 58" stroke="#33240f" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      <ellipse cx="34" cy="83" rx="5" ry="3" fill="#faeed7"/><ellipse cx="50" cy="83" rx="5" ry="3" fill="#faeed7"/>`, "0 0 84 88") },

    /* Lagarto: verde, cola rizada y una patita en alto (¡el baile del calor!) */
    "🦎": { w: 44, h: 24, svg: an(`
      <defs><linearGradient id="anLagarto" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#a5c94f"/><stop offset="100%" stop-color="#5f8f2a"/></linearGradient></defs>
      <path d="M64 34 Q92 30 102 38 Q112 46 104 52 Q96 56 94 50" stroke="#5f8f2a" stroke-width="7" fill="none" stroke-linecap="round"/>
      <path d="M38 28 Q36 18 28 16" stroke="#4a7020" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M30 40 Q24 46 18 46 M44 42 Q46 50 42 56 M58 40 Q62 46 60 54" stroke="#4a7020" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M18 30 Q16 20 28 18 Q38 16 42 24 Q56 22 66 28 Q72 32 68 38 Q58 44 44 42 Q28 44 20 38 Q16 34 18 30 Z" fill="url(#anLagarto)"/>
      <circle cx="40" cy="32" r="2" fill="#ffd54f"/><circle cx="52" cy="30" r="2" fill="#ffd54f"/><circle cx="60" cy="34" r="1.8" fill="#ffd54f"/>
      <circle cx="24" cy="24" r="2.8" fill="#1f3008"/><circle cx="25" cy="23" r="1" fill="#fff"/>
      <path d="M16 28 Q20 31 26 30" stroke="#2f4a12" stroke-width="1.8" fill="none" stroke-linecap="round"/>`, "0 0 116 64") }
  };

  /* Guepardo: esbelto, motas sólidas y lágrimas negras bajo el ojo.
     Va aparte porque comparte emoji 🐆 con el jaguar de la selva. */
  const GUEPARDO = { w: 90, h: 49, svg: an(`
    <defs><linearGradient id="anGuepardo" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f3cf7e"/><stop offset="100%" stop-color="#cf9a3f"/></linearGradient></defs>
    <path d="M16 34 Q2 36 4 50" stroke="#cf9a3f" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="4" cy="52" r="3" fill="#4a3008"/>
    <circle cx="100" cy="14" r="4" fill="#a87a28"/><circle cx="114" cy="14" r="4" fill="#a87a28"/>
    <path d="M102 14 Q116 14 120 26 Q122 34 114 38 Q112 42 104 44 Q94 50 82 52 L84 64 L76 64 L74 54 L46 54 L48 64 L38 64 L36 52 Q18 48 14 36 Q12 24 28 20 Q58 14 86 16 Q92 14 102 14 Z" fill="url(#anGuepardo)"/>
    <circle cx="34" cy="30" r="2" fill="#4a3008"/><circle cx="46" cy="26" r="2" fill="#4a3008"/><circle cx="60" cy="26" r="2" fill="#4a3008"/><circle cx="72" cy="28" r="2" fill="#4a3008"/>
    <circle cx="82" cy="32" r="2" fill="#4a3008"/><circle cx="40" cy="42" r="2" fill="#4a3008"/><circle cx="54" cy="42" r="2" fill="#4a3008"/><circle cx="68" cy="40" r="2" fill="#4a3008"/>
    <circle cx="80" cy="42" r="2" fill="#4a3008"/><circle cx="90" cy="30" r="2" fill="#4a3008"/><circle cx="26" cy="36" r="2" fill="#4a3008"/>
    <circle cx="108" cy="24" r="3" fill="#3a2408"/><circle cx="109.1" cy="22.9" r="1" fill="#fff"/>
    <path d="M107 28 Q105 34 101 37" stroke="#3a2408" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    <ellipse cx="116" cy="31" rx="6" ry="4.4" fill="#f7e8c2"/><circle cx="120" cy="29" r="1.7" fill="#3a2408"/>
    <path d="M116 34 Q119 36 122 34" stroke="#3a2408" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <path d="M46 52 Q64 56 80 50" stroke="#f7e8c2" stroke-width="3.6" fill="none" stroke-linecap="round"/>`, "0 0 132 72") };

  /* Excepciones por zona (el emoji repetido se resuelve por cat) */
  const POR_ZONA = { "sabana|🐆": GUEPARDO };

  THEMES.animales.content.explore.pois.forEach(p => {
    const ic = POR_ZONA[p.cat + "|" + p.emoji] || ICONS[p.emoji];
    if (ic && !p.svg) { p.svg = ic.svg; p.iw = ic.w; p.ih = ic.h; }
  });
})();
