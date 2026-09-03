"use strict";
/* ============================================================
   TIERRA MEDIA dibujada para el mapa: cada lugar es una
   miniatura con identidad (la puerta redonda de la Comarca,
   la puerta de piedra de Moria con brillo de mithril, la
   ciudad blanca de Gondor...) y las criaturas van con cuerpo
   y cara. Tamaños honestos: montañas y águila grandes, el
   anillo pequeño y brillante.
   ============================================================ */

(function () {
  const tm = (inner, vb) => `<svg viewBox="${vb || "0 0 100 100"}" width="100%" height="100%">${inner}</svg>`;

  const ICONS = {

    /* La Comarca: colina verde con puerta redonda amarilla,
       chimenea humeante, jardín con flores y valla blanca */
    "🏡": { w: 150, h: 110, svg: tm(`
      <defs><linearGradient id="tmComarca" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#aed581"/><stop offset="100%" stop-color="#558b2f"/></linearGradient></defs>
      <path d="M0 100 Q60 92 150 100 L150 110 L0 110 Z" fill="#66bb6a"/>
      <path d="M6 100 Q32 38 76 34 Q122 38 146 100 Z" fill="url(#tmComarca)"/>
      <rect x="98" y="34" width="11" height="20" rx="2" fill="#8d6e63"/>
      <circle cx="104" cy="26" r="4.4" fill="#eceff1" opacity=".85"/><circle cx="110" cy="17" r="3.4" fill="#eceff1" opacity=".65"/><circle cx="115" cy="10" r="2.6" fill="#eceff1" opacity=".45"/>
      <circle cx="62" cy="76" r="22" fill="#4e342e"/>
      <circle cx="62" cy="76" r="17.5" fill="#fdd835"/>
      <path d="M62 60 L62 92 M47 72 L77 72 M50 85 L74 85" stroke="#c8a415" stroke-width="2" opacity=".8"/>
      <circle cx="69" cy="76" r="2" fill="#4e342e"/>
      <circle cx="106" cy="74" r="8.4" fill="#5d4037"/><circle cx="106" cy="74" r="6.2" fill="#b3e5fc"/>
      <path d="M106 68 L106 80 M100 74 L112 74" stroke="#5d4037" stroke-width="1.6"/>
      <ellipse cx="62" cy="101" rx="17" ry="4.6" fill="#d7a86b" opacity=".85"/>
      <path d="M20 98 Q20 90 18 86 M32 99 Q32 91 34 87" stroke="#81c784" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      <circle cx="18" cy="84" r="3.6" fill="#f06292"/><circle cx="34" cy="85" r="3.6" fill="#ffb74d"/><circle cx="26" cy="92" r="3" fill="#ba68c8"/>
      <path d="M122 88 L122 100 M130 86 L130 100 M138 88 L138 100 M118 92 L142 92" stroke="#f5f5f5" stroke-width="3" stroke-linecap="round"/>`, "0 0 150 110") },

    /* La posada del Poni: taberna con vigas de madera, ventanas
       calentitas y el cartel colgante del poni saltarín */
    "🐴": { w: 88, h: 92, svg: tm(`
      <path d="M4 36 L48 8 L92 36 L86 40 L48 16 L10 40 Z" fill="#6d4c41"/>
      <rect x="64" y="12" width="9" height="15" rx="1.5" fill="#5d4037"/>
      <circle cx="69" cy="7" r="3.6" fill="#eceff1" opacity=".8"/><circle cx="74" cy="1" r="2.6" fill="#eceff1" opacity=".55"/>
      <rect x="12" y="36" width="72" height="60" rx="4" fill="#efe0c4"/>
      <path d="M12 56 L84 56 M26 36 L26 96 M70 36 L70 96" stroke="#6d4c41" stroke-width="3.6"/>
      <rect x="40" y="68" width="18" height="28" rx="8" fill="#5d4037"/>
      <circle cx="54" cy="83" r="1.6" fill="#ffd54f"/>
      <rect x="15" y="62" width="9" height="10" rx="2" fill="#ffd54f"/><rect x="73" y="62" width="9" height="10" rx="2" fill="#ffd54f"/>
      <rect x="15" y="40" width="9" height="10" rx="2" fill="#ffe082"/><rect x="73" y="40" width="9" height="10" rx="2" fill="#ffe082"/>
      <rect x="31" y="40" width="34" height="20" rx="3" fill="#fff8e1" stroke="#6d4c41" stroke-width="2"/>
      <path d="M37 56 Q37 49 43 48 L45 43 Q47 40 50 43 L56 44 Q60 46 59 51 L57 56 Z" fill="#8d6e63"/>
      <path d="M41 56 L41 52 M53 56 L53 52" stroke="#8d6e63" stroke-width="2.4" stroke-linecap="round"/>
      <circle cx="48" cy="44.6" r=".9" fill="#3e2723"/>
      <circle cx="33" cy="80" r="3" fill="#ffca28"/><path d="M33 83 L33 90" stroke="#6d4c41" stroke-width="2"/>`, "0 0 96 100") },

    /* El Bosque Viejo: árboles antiguos con ojos amables
       y sonrisa en el tronco */
    "🌳": { w: 112, h: 100, svg: tm(`
      <defs><radialGradient id="tmBosque" cx="45%" cy="35%"><stop offset="0%" stop-color="#81c784"/><stop offset="100%" stop-color="#2e7d32"/></radialGradient></defs>
      <path d="M0 94 Q56 88 112 94 L112 100 L0 100 Z" fill="#4a7028"/>
      <circle cx="93" cy="58" r="15" fill="url(#tmBosque)"/>
      <path d="M87 96 Q90 82 88 70 L98 70 Q96 82 100 96 Z" fill="#795548"/>
      <path d="M89 78 q2 -2.4 4 0 M95 78 q2 -2.4 4 0" stroke="#3e2723" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      <path d="M91 84 Q94 86 97 84" stroke="#3e2723" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      <circle cx="30" cy="46" r="17" fill="url(#tmBosque)"/><circle cx="72" cy="42" r="18" fill="url(#tmBosque)"/><circle cx="50" cy="32" r="24" fill="url(#tmBosque)"/>
      <path d="M42 96 Q46 74 44 56 L60 56 Q58 74 64 96 Z" fill="#6d4c41"/>
      <path d="M44 62 Q38 58 34 60 M60 62 Q66 58 70 60" stroke="#6d4c41" stroke-width="4" fill="none" stroke-linecap="round"/>
      <circle cx="48" cy="68" r="2.6" fill="#2e1a0f"/><circle cx="48.9" cy="67.1" r=".9" fill="#fff"/>
      <circle cx="57" cy="68" r="2.6" fill="#2e1a0f"/><circle cx="57.9" cy="67.1" r=".9" fill="#fff"/>
      <path d="M47 78 Q52.5 83 58 78" stroke="#2e1a0f" stroke-width="2" fill="none" stroke-linecap="round"/>
      <circle cx="44" cy="74" r="2" fill="#c98a5a" opacity=".55"/><circle cx="61" cy="74" r="2" fill="#c98a5a" opacity=".55"/>
      <circle cx="14" cy="86" r="4" fill="#8bc34a"/><circle cx="24" cy="90" r="3" fill="#aed581"/>`, "0 0 112 100") },

    /* Rivendel: pabellones élficos de tejados curvos sobre el
       acantilado, con cascadas y puente en arco */
    "🏞️": { w: 150, h: 120, svg: tm(`
      <defs><linearGradient id="tmRivRoca" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#90a4ae"/><stop offset="100%" stop-color="#546e7a"/></linearGradient></defs>
      <path d="M14 62 Q75 50 136 62 L128 118 L22 118 Z" fill="url(#tmRivRoca)"/>
      <path d="M46 62 Q43 90 48 116" stroke="#b3e5fc" stroke-width="9" fill="none" stroke-linecap="round"/>
      <path d="M104 62 Q107 88 102 116" stroke="#b3e5fc" stroke-width="8" fill="none" stroke-linecap="round"/>
      <circle cx="48" cy="115" r="5" fill="#e1f5fe" opacity=".9"/><circle cx="102" cy="114" r="4.4" fill="#e1f5fe" opacity=".9"/><circle cx="55" cy="117" r="3" fill="#e1f5fe" opacity=".7"/>
      <rect x="24" y="40" width="17" height="22" rx="3" fill="#f7f1e3"/>
      <path d="M19 42 Q32.5 26 46 42 Q32.5 35 19 42 Z" fill="#c9a15f"/>
      <path d="M30 62 L30 50 Q32.5 45 35 50 L35 62" fill="#7986cb"/>
      <rect x="56" y="32" width="40" height="30" rx="3" fill="#f7f1e3"/>
      <path d="M50 34 Q76 10 102 34 Q76 26 50 34 Z" fill="#c9a15f"/>
      <path d="M63 62 L63 46 Q67 40 71 46 L71 62 M81 62 L81 46 Q85 40 89 46 L89 62" fill="#7986cb"/>
      <rect x="108" y="42" width="16" height="20" rx="3" fill="#f7f1e3"/>
      <path d="M104 44 Q116 29 128 44 Q116 38 104 44 Z" fill="#c9a15f"/>
      <path d="M113 62 L113 51 Q116 46 119 51 L119 62" fill="#7986cb"/>
      <path d="M30 98 Q48 84 66 98" stroke="#d7ccc8" stroke-width="5" fill="none"/>
      <circle cx="134" cy="34" r="2" fill="#fff9c4"/><circle cx="12" cy="30" r="1.8" fill="#fff9c4"/>
      <path d="M132 70 Q136 66 140 68 M130 78 Q134 74 138 76" stroke="#a5d6a7" stroke-width="2.4" fill="none" stroke-linecap="round"/>`, "0 0 150 120") },

    /* Moria: la montaña con la puerta de piedra de arcos
       y el dibujo brillante de mithril, con su estrella */
    "⛰️": { w: 125, h: 115, svg: tm(`
      <defs><linearGradient id="tmMoria" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#78909c"/><stop offset="100%" stop-color="#37474f"/></linearGradient></defs>
      <path d="M6 112 L62 8 L119 112 Z" fill="url(#tmMoria)"/>
      <path d="M47 36 L62 8 L78 36 Q62 26 47 36 Z" fill="#eceff1"/>
      <path d="M40 112 L40 78 Q62 54 84 78 L84 112 Z" fill="#263238"/>
      <ellipse cx="62" cy="90" rx="26" ry="18" fill="rgba(179,229,252,.16)"/>
      <path d="M46 112 L46 80 Q62 62 78 80 L78 112" stroke="#b3e5fc" stroke-width="2.4" fill="none" opacity=".95"/>
      <path d="M52 112 L52 84 M72 112 L72 84" stroke="#b3e5fc" stroke-width="1.8" opacity=".85"/>
      <path d="M52 84 Q62 74 72 84" stroke="#b3e5fc" stroke-width="1.8" fill="none" opacity=".85"/>
      <path d="M62 66 L63.8 71.2 L69 73 L63.8 74.8 L62 80 L60.2 74.8 L55 73 L60.2 71.2 Z" fill="#e1f5fe"/>
      <circle cx="50" cy="76" r="1.3" fill="#e1f5fe"/><circle cx="74" cy="76" r="1.3" fill="#e1f5fe"/>
      <circle cx="27" cy="94" r="3" fill="#546e7a"/><circle cx="97" cy="98" r="3.6" fill="#546e7a"/>`, "0 0 125 115") },

    /* Las Águilas: águila gigante con alas abiertas,
       cara amable y pico dorado */
    "🦅": { w: 135, h: 85, svg: tm(`
      <defs><linearGradient id="tmAguila" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#c68c4d"/><stop offset="100%" stop-color="#7a4e22"/></linearGradient></defs>
      <path d="M64 42 Q42 8 4 16 Q18 28 30 44 Q44 58 64 54 Z" fill="url(#tmAguila)"/>
      <path d="M76 42 Q98 8 136 16 Q122 28 110 44 Q96 58 76 54 Z" fill="url(#tmAguila)"/>
      <path d="M20 22 Q30 32 38 44 M34 18 Q42 30 50 44" stroke="#8a5a2b" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      <path d="M120 22 Q110 32 102 44 M106 18 Q98 30 90 44" stroke="#8a5a2b" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      <path d="M62 40 Q70 33 78 40 L76 62 Q70 70 64 62 Z" fill="#a9743c"/>
      <path d="M64 62 L60 77 M70 65 L70 79 M76 62 L80 77" stroke="#8a5a2b" stroke-width="3" stroke-linecap="round"/>
      <circle cx="70" cy="31" r="9.4" fill="#d8a86a"/>
      <circle cx="73.5" cy="29" r="2.2" fill="#2b1608"/><circle cx="74.3" cy="28.2" r=".8" fill="#fff"/>
      <path d="M78 31 Q85 32 84.5 36 Q80 38 76.5 35.5 Z" fill="#f9a825"/>
      <path d="M66 25 Q70 22 74 24" stroke="#8a5a2b" stroke-width="1.8" fill="none" stroke-linecap="round"/>`, "0 0 140 88") },

    /* Lothlórien: los árboles dorados de troncos de plata,
       con destellos de luz de estrellas */
    "🌟": { w: 145, h: 115, svg: tm(`
      <defs><radialGradient id="tmLorien" cx="48%" cy="38%"><stop offset="0%" stop-color="#ffecb3"/><stop offset="100%" stop-color="#f9a825"/></radialGradient></defs>
      <ellipse cx="74" cy="52" rx="68" ry="42" fill="rgba(255,224,130,.16)"/>
      <path d="M26 112 Q29 88 27 72 L35 72 Q33 88 38 112 Z" fill="#cfd8dc"/>
      <circle cx="31" cy="58" r="19" fill="url(#tmLorien)"/>
      <path d="M112 112 Q115 86 113 70 L121 70 Q119 86 124 112 Z" fill="#cfd8dc"/>
      <circle cx="117" cy="56" r="21" fill="url(#tmLorien)"/>
      <path d="M66 112 Q70 80 68 56 L80 56 Q78 80 84 112 Z" fill="#eceff1"/>
      <path d="M68 66 Q60 62 56 64 M80 66 Q88 62 92 64" stroke="#cfd8dc" stroke-width="3.4" fill="none" stroke-linecap="round"/>
      <circle cx="74" cy="40" r="30" fill="url(#tmLorien)"/>
      <path d="M20 24 L22 30 L28 32 L22 34 L20 40 L18 34 L12 32 L18 30 Z" fill="#fffde7"/>
      <path d="M132 26 L133.6 30.4 L138 32 L133.6 33.6 L132 38 L130.4 33.6 L126 32 L130.4 30.4 Z" fill="#fffde7"/>
      <path d="M74 8 L75.6 12.4 L80 14 L75.6 15.6 L74 20 L72.4 15.6 L68 14 L72.4 12.4 Z" fill="#fffde7"/>
      <ellipse cx="52" cy="110" rx="5" ry="2" fill="#ffd54f" opacity=".8"/><ellipse cx="96" cy="112" rx="4.4" ry="1.8" fill="#ffca28" opacity=".8"/><ellipse cx="20" cy="111" rx="3.6" ry="1.6" fill="#ffe082" opacity=".8"/>`, "0 0 145 115") },

    /* Rohan: caballo galopando con crin y cola doradas,
       fiel y veloz */
    "🐎": { w: 100, h: 80, svg: tm(`
      <defs><linearGradient id="tmRohan" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#c99862"/><stop offset="100%" stop-color="#8a5a30"/></linearGradient></defs>
      <path d="M24 44 Q10 46 6 58 M26 48 Q14 54 12 64" stroke="#fdd835" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M22 46 Q22 30 42 28 L62 28 Q78 30 82 42 Q82 54 70 57 L74 76 L66 76 L62 58 L44 58 L42 76 L34 76 L34 57 Q22 55 22 46 Z" fill="url(#tmRohan)"/>
      <path d="M62 36 Q64 16 80 8 L90 12 Q93 17 87 20 L82 22 Q85 28 78 32 Q70 38 62 40 Z" fill="url(#tmRohan)"/>
      <path d="M82 8 L86 1 L89 10 Z" fill="#8a5a30"/>
      <path d="M66 30 Q70 16 80 10 M70 32 Q74 22 82 16" stroke="#fdd835" stroke-width="4" fill="none" stroke-linecap="round"/>
      <circle cx="83" cy="14" r="2.2" fill="#2b1608"/><circle cx="83.9" cy="13.2" r=".8" fill="#fff"/>
      <circle cx="89" cy="16" r="1.2" fill="#5d3a1a"/>
      <rect x="33" y="73" width="10" height="5" rx="2" fill="#4e342e"/><rect x="65" y="73" width="10" height="5" rx="2" fill="#4e342e"/>
      <path d="M40 50 Q52 54 64 50" stroke="#6d4526" stroke-width="2.4" fill="none" opacity=".6"/>`, "0 0 104 84") },

    /* Gondor: la ciudad blanca de pisos tallados en la roca,
       con la torre, el estandarte y el arbolito blanco */
    "🏰": { w: 120, h: 135, svg: tm(`
      <defs><linearGradient id="tmGondor" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#cfd8dc"/></linearGradient></defs>
      <path d="M14 133 L14 108 L106 108 L106 133 Z" fill="url(#tmGondor)"/>
      <rect x="24" y="86" width="72" height="24" rx="3" fill="#f5f5f5"/>
      <rect x="34" y="66" width="52" height="22" rx="3" fill="url(#tmGondor)"/>
      <rect x="42" y="48" width="36" height="20" rx="3" fill="#f5f5f5"/>
      <rect x="52" y="20" width="16" height="32" rx="3" fill="#ffffff"/>
      <path d="M60 6 L52 20 L68 20 Z" fill="#eceff1"/>
      <path d="M60 6 L60 1" stroke="#78909c" stroke-width="1.6"/>
      <path d="M60 1 L71 4 L60 7 Z" fill="#37474f"/><circle cx="65" cy="4" r="1.2" fill="#fff"/>
      <path d="M14 108 h7 v-4 h7 v4 h7 v-4 h7 v4 M64 108 h7 v-4 h7 v4 h7 v-4 h7 v4" stroke="#b0bec5" stroke-width="2" fill="none"/>
      <path d="M54 133 L54 119 Q60 112 66 119 L66 133 Z" fill="#546e7a"/>
      <path d="M36 108 L36 98 Q40 93 44 98 L44 108 Z" fill="#78909c"/>
      <path d="M72 88 L72 80 Q75 76 78 80 L78 88 Z" fill="#78909c"/>
      <circle cx="30" cy="120" r="2" fill="#ffe082"/><circle cx="88" cy="120" r="2" fill="#ffe082"/><circle cx="48" cy="76" r="1.8" fill="#ffe082"/><circle cx="60" cy="58" r="1.8" fill="#ffe082"/>
      <path d="M32 66 L32 56" stroke="#cfd8dc" stroke-width="2.6" stroke-linecap="round"/>
      <path d="M32 60 Q28 56 26 52 M32 60 Q36 55 38 52 M32 63 Q29 60 27 59" stroke="#e0e0e0" stroke-width="2" fill="none" stroke-linecap="round"/>
      <circle cx="26" cy="51" r="1.6" fill="#fff"/><circle cx="38" cy="51" r="1.6" fill="#fff"/><circle cx="27" cy="58" r="1.3" fill="#fff"/>`, "0 0 120 135") },

    /* Isengard: la torre negra de puntas, otra vez rodeada
       de jardines y árboles gracias a los ents */
    "🗼": { w: 72, h: 130, svg: tm(`
      <defs><linearGradient id="tmIsen" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#546e7a"/><stop offset="100%" stop-color="#263238"/></linearGradient></defs>
      <path d="M26 120 L30 34 L23 12 Q29 21 33 26 L38 6 L43 26 Q47 21 53 12 L46 34 L50 120 Z" fill="url(#tmIsen)"/>
      <path d="M38 32 L38 118" stroke="#1c262b" stroke-width="2"/>
      <rect x="35" y="42" width="6" height="8" rx="1.5" fill="#ffe082"/>
      <rect x="6" y="102" width="4" height="16" fill="#6d4c41"/><circle cx="8" cy="97" r="9" fill="#66bb6a"/>
      <rect x="64" y="104" width="4" height="14" fill="#6d4c41"/><circle cx="66" cy="99" r="8" fill="#4caf50"/>
      <circle cx="17" cy="118" r="9" fill="#81c784"/><circle cx="57" cy="118" r="10" fill="#66bb6a"/><circle cx="38" cy="122" r="11" fill="#81c784"/>
      <circle cx="14" cy="114" r="2" fill="#f48fb1"/><circle cx="22" cy="118" r="2" fill="#fff176"/><circle cx="55" cy="113" r="2" fill="#f48fb1"/><circle cx="61" cy="119" r="2" fill="#fff176"/><circle cx="36" cy="117" r="2" fill="#ce93d8"/>`, "0 0 76 132") },

    /* Mordor suavizado: montañas oscuras con resplandor
       naranja al fondo y florecitas creciendo, sin miedo */
    "🌋": { w: 160, h: 120, svg: tm(`
      <defs><linearGradient id="tmMordor" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#4f5b66"/><stop offset="100%" stop-color="#263238"/></linearGradient></defs>
      <ellipse cx="80" cy="58" rx="78" ry="46" fill="rgba(255,152,0,.13)"/>
      <ellipse cx="88" cy="34" rx="32" ry="14" fill="rgba(255,112,67,.35)"/>
      <path d="M2 116 L34 48 L58 84 L88 28 L118 82 L142 52 L158 116 Z" fill="url(#tmMordor)"/>
      <path d="M82 34 Q88 27 94 34 L92 42 Q88 38.5 84 42 Z" fill="#ff8a65"/>
      <path d="M28 60 L34 48 L40 60 Q34 55 28 60 Z" fill="#607d8b"/>
      <path d="M20 116 L64 72 L108 116 Z" fill="#455a64"/>
      <path d="M40 112 Q40 104 38 100 M74 114 Q74 106 76 102 M124 112 Q124 105 122 101" stroke="#81c784" stroke-width="2.2" fill="none" stroke-linecap="round"/>
      <circle cx="38" cy="98" r="3.2" fill="#f48fb1"/><circle cx="76" cy="100" r="3.2" fill="#fff176"/><circle cx="122" cy="99" r="3.2" fill="#ce93d8"/>
      <circle cx="146" cy="30" r="1.6" fill="#fff9c4" opacity=".9"/><circle cx="14" cy="26" r="1.4" fill="#fff9c4" opacity=".8"/>`, "0 0 160 120") },

    /* El Monte del Destino: el volcán con su lava calentita
       y el anillo pequeño y brillante, ya en buenas manos */
    "🔥": { w: 110, h: 118, svg: tm(`
      <defs><linearGradient id="tmDestino" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#5d4a42"/><stop offset="100%" stop-color="#332722"/></linearGradient></defs>
      <circle cx="56" cy="12" r="6" fill="#eceff1" opacity=".5"/><circle cx="64" cy="5" r="4.4" fill="#eceff1" opacity=".35"/>
      <path d="M12 112 L42 26 L70 26 L100 112 Z" fill="url(#tmDestino)"/>
      <ellipse cx="56" cy="26" rx="15" ry="5.6" fill="#ff7043"/>
      <ellipse cx="56" cy="25" rx="8" ry="3" fill="#ffab91"/>
      <path d="M50 28 Q48 48 52 66 M62 28 Q66 44 62 58" stroke="#ff7043" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M52 66 Q53 74 51 80 M62 58 Q63 64 61 69" stroke="#ff8a65" stroke-width="3.4" fill="none" stroke-linecap="round" opacity=".8"/>
      <circle cx="24" cy="106" r="4.4" fill="#4e342e"/><circle cx="92" cy="108" r="3.8" fill="#4e342e"/>
      <circle cx="84" cy="100" r="6.4" fill="none" stroke="#ffd54f" stroke-width="3.6"/>
      <path d="M84 93.6 A6.4 6.4 0 0 1 90.4 100" stroke="#fff59d" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M93 89 L96 86 M95 93 L99 92 M91 86 L92 82" stroke="#fff59d" stroke-width="2" stroke-linecap="round"/>`, "0 0 112 120") }
  };

  THEMES.tierramedia.content.explore.pois.forEach(p => {
    const ic = ICONS[p.emoji];
    if (ic && !p.svg) { p.svg = ic.svg; p.iw = ic.w; p.ih = ic.h; }
  });
})();
