"use strict";

/* ============================================================
   91-theme-cards.js
   Mini-escenas SVG para las 12 tarjetas de aventura de la portada.
   El motor las enchufa en cada tarjeta: aqui solo se definen los datos.
   Reglas: viewBox 0 0 120 70, sin texto ni emojis, sin fondo propio
   (la tarjeta ya pone su degradado detras), ids de gradiente con
   prefijo "tc" y unicos en todo el fichero.
   ============================================================ */

const THEME_CARDS = {

  /* Espacio: cohete despegando, planeta anillado y estrellas */
  espacio: `<svg viewBox="0 0 120 70" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
    <defs>
      <radialGradient id="tcPlaneta1" cx="35%" cy="35%" r="80%">
        <stop offset="0%" stop-color="#FFD180"/>
        <stop offset="100%" stop-color="#FF8A50"/>
      </radialGradient>
    </defs>
    <!-- estrellas (una parpadea) -->
    <circle cx="14" cy="12" r="1.6" fill="#FFF59D"/>
    <circle cx="70" cy="8" r="1.4" fill="#FFFFFF">
      <animate attributeName="opacity" values="1;0.2;1" dur="1.8s" repeatCount="indefinite"/>
    </circle>
    <circle cx="106" cy="42" r="1.5" fill="#FFF59D"/>
    <!-- planeta con anillo -->
    <circle cx="94" cy="18" r="9" fill="url(#tcPlaneta1)"/>
    <ellipse cx="94" cy="18" rx="16" ry="4.5" fill="none" stroke="#F48FB1" stroke-width="2.5" transform="rotate(-18 94 18)"/>
    <!-- cohete -->
    <path d="M38 52 L38 28 Q38 13 46 7 Q54 13 54 28 L54 52 Z" fill="#ECEFF1"/>
    <path d="M38 24 Q38 12 46 7 Q54 12 54 24 Q46 20 38 24 Z" fill="#EF5350"/>
    <path d="M38 46 L29 58 L38 53 Z" fill="#EF5350"/>
    <path d="M54 46 L63 58 L54 53 Z" fill="#EF5350"/>
    <circle cx="46" cy="32" r="4.5" fill="#81D4FA" stroke="#37474F" stroke-width="1.5"/>
    <!-- llama del despegue -->
    <path d="M41 53 Q46 67 51 53 Q46 58 41 53 Z" fill="#FFB300">
      <animate attributeName="opacity" values="1;0.4;1" dur="0.5s" repeatCount="indefinite"/>
    </path>
  </svg>`,

  /* Dinos: silueta de T-rex, volcan pequeno y helecho */
  dinos: `<svg viewBox="0 0 120 70" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
    <!-- volcan con lava y humo -->
    <path d="M84 58 L96 32 L108 58 Z" fill="#8D6E63"/>
    <path d="M92 41 L96 32 L100 41 L96 44 Z" fill="#FF7043"/>
    <circle cx="96" cy="26" r="4" fill="#B0BEC5" opacity="0.8">
      <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.5s" repeatCount="indefinite"/>
    </circle>
    <!-- helecho -->
    <path d="M70 58 Q73 49 71 40" stroke="#2E7D32" stroke-width="2" fill="none" stroke-linecap="round"/>
    <ellipse cx="66" cy="46" rx="6" ry="2.4" fill="#43A047" transform="rotate(-38 66 46)"/>
    <ellipse cx="77" cy="45" rx="6" ry="2.4" fill="#43A047" transform="rotate(35 77 45)"/>
    <ellipse cx="70" cy="39" rx="5" ry="2.2" fill="#66BB6A" transform="rotate(-12 70 39)"/>
    <!-- silueta de T-rex -->
    <path d="M14 58 L16 46 Q10 40 12 32 Q14 22 24 20 L24 14 Q24 9 30 9 Q37 9 37 14 L30 15 L34 17 Q35 21 30 22 L26 22 Q26 30 32 34 Q40 39 52 37 L48 46 L52 46 L50 58 L44 58 L45 50 Q36 50 30 47 L31 58 Z" fill="#66BB6A"/>
    <circle cx="29" cy="13" r="1.4" fill="#1B5E20"/>
  </svg>`,

  /* Cuerpo: corazon anatomico cute latiendo y pulso ECG */
  cuerpo: `<svg viewBox="0 0 120 70" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
    <defs>
      <radialGradient id="tcCorazon1" cx="40%" cy="35%" r="85%">
        <stop offset="0%" stop-color="#FF8A80"/>
        <stop offset="100%" stop-color="#E53935"/>
      </radialGradient>
    </defs>
    <!-- corazon centrado en el origen del grupo para que el latido escale en su sitio -->
    <g transform="translate(60,30)">
      <animateTransform attributeName="transform" type="scale" values="1;1.08;1" dur="0.9s" repeatCount="indefinite" additive="sum"/>
      <path d="M-2 -14 Q-2 -25 6 -25 L6 -20 Q3 -20 3 -14 Z" fill="#C62828"/>
      <rect x="-11" y="-23" width="6" height="10" rx="3" fill="#5C6BC0"/>
      <path d="M0 -12 Q-7 -20 -14 -14 Q-20 -8 -16 2 Q-12 12 0 17 Q10 12 14 3 Q18 -7 11 -14 Q4 -20 0 -12 Z" fill="url(#tcCorazon1)"/>
      <ellipse cx="-7" cy="-6" rx="4" ry="2.5" fill="#FFFFFF" opacity="0.5"/>
      <circle cx="-5" cy="1" r="1.6" fill="#4E342E"/>
      <circle cx="5" cy="1" r="1.6" fill="#4E342E"/>
      <path d="M-3 6 Q0 9 3 6" stroke="#4E342E" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    </g>
    <!-- linea de pulso -->
    <polyline points="8,60 34,60 40,52 46,66 52,60 112,60" fill="none" stroke="#69F0AE" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
  </svg>`,

  /* Tierra Media: colina verde con puerta redonda amarilla, montana y arbolito */
  tierramedia: `<svg viewBox="0 0 120 70" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
    <!-- montana nevada al fondo -->
    <path d="M78 56 L96 22 L114 56 Z" fill="#90A4AE"/>
    <path d="M90 34 L96 22 L102 34 L98 31 L96 35 L93 31 Z" fill="#FFFFFF"/>
    <!-- colina -->
    <path d="M2 70 Q6 34 42 32 Q80 32 86 70 Z" fill="#7CB342"/>
    <!-- puerta redonda -->
    <circle cx="44" cy="50" r="13" fill="#5D4037"/>
    <circle cx="44" cy="50" r="10.5" fill="#FDD835"/>
    <circle cx="48" cy="50" r="1.5" fill="#5D4037"/>
    <!-- arbolito -->
    <rect x="13.5" y="38" width="3" height="8" fill="#6D4C41"/>
    <circle cx="15" cy="34" r="6" fill="#388E3C"/>
    <!-- florecitas -->
    <circle cx="66" cy="52" r="1.6" fill="#F06292"/>
    <circle cx="26" cy="56" r="1.6" fill="#FFF176"/>
  </svg>`,

  /* Oceano: ballena con chorro, olas y burbujas */
  oceano: `<svg viewBox="0 0 120 70" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
    <!-- ballena -->
    <path d="M22 42 Q22 24 48 24 Q72 24 74 38 Q74 48 56 50 L28 50 Q22 48 22 42 Z" fill="#42A5F5"/>
    <path d="M72 40 Q80 34 84 26 Q86 36 80 42 Q86 42 90 48 Q80 50 72 44 Z" fill="#42A5F5"/>
    <circle cx="34" cy="36" r="2" fill="#263238"/>
    <path d="M28 44 Q34 47 40 44" stroke="#1565C0" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <!-- chorro -->
    <path d="M46 21 Q46 12 40 8 M46 21 Q46 12 52 8" stroke="#B3E5FC" stroke-width="2.5" fill="none" stroke-linecap="round">
      <animate attributeName="opacity" values="1;0.35;1" dur="1.6s" repeatCount="indefinite"/>
    </path>
    <!-- olas -->
    <path d="M2 58 Q12 52 22 58 Q32 64 42 58 Q52 52 62 58 Q72 64 82 58 Q92 52 102 58 Q110 63 118 58" stroke="#4FC3F7" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M14 66 Q26 61 38 66 Q50 71 62 66 Q74 61 86 66 Q96 70 106 66" stroke="#81D4FA" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <!-- burbujas -->
    <circle cx="96" cy="20" r="2.5" fill="none" stroke="#B3E5FC" stroke-width="1.5"/>
    <circle cx="104" cy="12" r="1.8" fill="none" stroke="#B3E5FC" stroke-width="1.5">
      <animate attributeName="opacity" values="1;0.3;1" dur="2.2s" repeatCount="indefinite"/>
    </circle>
  </svg>`,

  /* Animales: cabeza de leon con melena y jirafa asomando */
  animales: `<svg viewBox="0 0 120 70" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
    <!-- jirafa asomando por la derecha -->
    <rect x="88" y="24" width="9" height="46" rx="4" fill="#FFCA28" transform="rotate(8 92 46)"/>
    <ellipse cx="90" cy="20" rx="9" ry="7" fill="#FFCA28"/>
    <circle cx="86" cy="12" r="2" fill="#8D6E63"/>
    <circle cx="94" cy="11" r="2" fill="#8D6E63"/>
    <circle cx="87" cy="19" r="1.5" fill="#4E342E"/>
    <circle cx="94" cy="36" r="2.6" fill="#A1887F"/>
    <!-- leon -->
    <circle cx="40" cy="38" r="19" fill="#EF6C00"/>
    <circle cx="40" cy="38" r="12.5" fill="#FFB74D"/>
    <circle cx="32" cy="28" r="3.5" fill="#FFB74D"/>
    <circle cx="48" cy="28" r="3.5" fill="#FFB74D"/>
    <circle cx="35" cy="35" r="1.8" fill="#4E342E"/>
    <circle cx="45" cy="35" r="1.8" fill="#4E342E"/>
    <path d="M37 41 L43 41 L40 45 Z" fill="#6D4C41"/>
    <path d="M40 45 Q40 48 36 48 M40 45 Q40 48 44 48" stroke="#6D4C41" stroke-width="1.4" fill="none" stroke-linecap="round"/>
  </svg>`,

  /* Musica: guitarra, notas flotando y pentagrama corto */
  musica: `<svg viewBox="0 0 120 70" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
    <!-- pentagrama corto -->
    <line x1="62" y1="12" x2="114" y2="12" stroke="#9575CD" stroke-width="1.4"/>
    <line x1="62" y1="17" x2="114" y2="17" stroke="#9575CD" stroke-width="1.4"/>
    <line x1="62" y1="22" x2="114" y2="22" stroke="#9575CD" stroke-width="1.4"/>
    <line x1="62" y1="27" x2="114" y2="27" stroke="#9575CD" stroke-width="1.4"/>
    <line x1="62" y1="32" x2="114" y2="32" stroke="#9575CD" stroke-width="1.4"/>
    <!-- nota sobre el pentagrama -->
    <ellipse cx="78" cy="27" rx="4" ry="3" fill="#311B92"/>
    <line x1="82" y1="27" x2="82" y2="12" stroke="#311B92" stroke-width="2"/>
    <!-- nota flotando -->
    <g>
      <animate attributeName="opacity" values="1;0.35;1" dur="2s" repeatCount="indefinite"/>
      <ellipse cx="100" cy="20" rx="4" ry="3" fill="#4527A0"/>
      <line x1="104" y1="20" x2="104" y2="5" stroke="#4527A0" stroke-width="2"/>
    </g>
    <!-- guitarra -->
    <circle cx="22" cy="54" r="11" fill="#FF7043"/>
    <circle cx="30" cy="45" r="8" fill="#FF7043"/>
    <circle cx="25" cy="51" r="4" fill="#4E342E"/>
    <line x1="30" y1="46" x2="52" y2="22" stroke="#8D6E63" stroke-width="5" stroke-linecap="round"/>
    <rect x="50" y="14" width="7" height="10" rx="2" fill="#5D4037" transform="rotate(42 53 19)"/>
    <line x1="29" y1="45" x2="51" y2="21" stroke="#FFE082" stroke-width="1"/>
  </svg>`,

  /* Increibles: mapamundi mini, carita con coleta y estrella */
  increibles: `<svg viewBox="0 0 120 70" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
    <defs>
      <radialGradient id="tcGlobo1" cx="35%" cy="30%" r="85%">
        <stop offset="0%" stop-color="#81D4FA"/>
        <stop offset="100%" stop-color="#1E88E5"/>
      </radialGradient>
    </defs>
    <!-- globo terraqueo con dos continentes -->
    <circle cx="34" cy="37" r="21" fill="url(#tcGlobo1)"/>
    <path d="M22 26 Q28 20 35 24 Q40 27 36 32 Q30 36 25 33 Q20 30 22 26 Z" fill="#66BB6A"/>
    <path d="M34 42 Q42 38 47 44 Q49 50 42 53 Q35 54 32 49 Q30 45 34 42 Z" fill="#66BB6A"/>
    <!-- carita con coleta -->
    <circle cx="88" cy="32" r="13" fill="#FFCC80"/>
    <path d="M75 32 Q75 17 88 17 Q101 17 101 32 Q98 24 88 24 Q78 24 75 32 Z" fill="#5D4037"/>
    <ellipse cx="103" cy="20" rx="4.5" ry="7" fill="#5D4037" transform="rotate(30 103 20)"/>
    <circle cx="100" cy="25" r="2" fill="#EC407A"/>
    <circle cx="83" cy="32" r="1.7" fill="#4E342E"/>
    <circle cx="93" cy="32" r="1.7" fill="#4E342E"/>
    <path d="M83 38 Q88 42 93 38" stroke="#4E342E" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <!-- estrella -->
    <polygon points="105,52 106.8,56.4 111.5,56.8 108,59.9 109,64.5 105,62 101,64.5 102,59.9 98.5,56.8 103.2,56.4" fill="#FFD54F">
      <animate attributeName="opacity" values="1;0.4;1" dur="1.6s" repeatCount="indefinite"/>
    </polygon>
  </svg>`,

  /* Star Wars: sable verde encendido, estrella de la muerte y dos estrellas */
  starwars: `<svg viewBox="0 0 120 70" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
    <!-- estrella de la muerte -->
    <circle cx="98" cy="18" r="13" fill="#B0BEC5"/>
    <circle cx="93" cy="13" r="4" fill="#78909C"/>
    <line x1="85" y1="21" x2="111" y2="21" stroke="#78909C" stroke-width="1.6"/>
    <!-- estrellas -->
    <circle cx="14" cy="10" r="1.5" fill="#FFFFFF">
      <animate attributeName="opacity" values="1;0.2;1" dur="1.7s" repeatCount="indefinite"/>
    </circle>
    <circle cx="66" cy="8" r="1.3" fill="#FFF59D"/>
    <!-- sable laser inclinado con halo -->
    <g transform="rotate(-30 40 45)">
      <rect x="36" y="6" width="9" height="42" rx="4.5" fill="#69F0AE" opacity="0.35">
        <animate attributeName="opacity" values="0.35;0.6;0.35" dur="1.4s" repeatCount="indefinite"/>
      </rect>
      <rect x="38.5" y="8" width="4" height="38" rx="2" fill="#00E676"/>
      <rect x="37" y="46" width="7" height="16" rx="2" fill="#90A4AE"/>
      <rect x="37" y="50" width="7" height="3" fill="#37474F"/>
      <circle cx="40.5" cy="57" r="1.2" fill="#E53935"/>
    </g>
  </svg>`,

  /* Piratas: galeon con bandera, ola y moneda dorada */
  piratas: `<svg viewBox="0 0 120 70" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
    <defs>
      <radialGradient id="tcMoneda1" cx="35%" cy="30%" r="85%">
        <stop offset="0%" stop-color="#FFF59D"/>
        <stop offset="100%" stop-color="#FFB300"/>
      </radialGradient>
    </defs>
    <!-- casco del galeon -->
    <path d="M28 48 L92 48 L84 62 L38 62 Z" fill="#8D6E63"/>
    <path d="M28 48 L92 48 L90 52 L30 52 Z" fill="#6D4C41"/>
    <!-- mastil, velas y bandera -->
    <line x1="60" y1="10" x2="60" y2="48" stroke="#5D4037" stroke-width="3"/>
    <path d="M62 16 Q82 27 62 40 Z" fill="#ECEFF1"/>
    <path d="M58 20 Q44 28 58 38 Z" fill="#ECEFF1"/>
    <path d="M60 10 L74 13 L60 17 Z" fill="#263238"/>
    <!-- ola -->
    <path d="M6 62 Q18 56 30 62 Q42 68 54 62 Q66 56 78 62 Q90 68 102 62 Q108 59 114 62" stroke="#4FC3F7" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <!-- moneda dorada con destello -->
    <circle cx="18" cy="20" r="9" fill="url(#tcMoneda1)" stroke="#F57F17" stroke-width="1.5"/>
    <circle cx="18" cy="20" r="5.5" fill="none" stroke="#F57F17" stroke-width="1.5"/>
    <path d="M28 8 L29 11 L32 12 L29 13 L28 16 L27 13 L24 12 L27 11 Z" fill="#FFF9C4">
      <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/>
    </path>
  </svg>`,

  /* Egipto: piramides, sol grande y camello en silueta */
  egipto: `<svg viewBox="0 0 120 70" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
    <defs>
      <radialGradient id="tcSol1" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stop-color="#FFF176"/>
        <stop offset="100%" stop-color="#FFA000"/>
      </radialGradient>
    </defs>
    <!-- sol grande que respira -->
    <circle cx="22" cy="16" r="11" fill="url(#tcSol1)">
      <animate attributeName="r" values="11;12;11" dur="3s" repeatCount="indefinite"/>
    </circle>
    <!-- duna -->
    <path d="M0 70 Q30 52 60 58 Q92 64 120 54 L120 70 Z" fill="#FFE082"/>
    <!-- piramides con cara en sombra -->
    <path d="M42 56 L68 24 L94 56 Z" fill="#FFB300"/>
    <path d="M68 24 L94 56 L68 56 Z" fill="#F57F17"/>
    <path d="M88 56 L102 40 L116 56 Z" fill="#FFA726"/>
    <path d="M102 40 L116 56 L102 56 Z" fill="#EF6C00"/>
    <!-- camello en silueta -->
    <path d="M12 62 L12 52 Q11 48 14 46 L14 40 Q14 37 17 37 Q20 37 20 39.5 L18 40 L18 43 Q20 45 24 45 Q26 42 29 42 Q32 42 33 45 Q35 42 38 43 Q41 44 40 47 Q39 50 36 50 L36 62 L33 62 L33 53 L26 53 L26 62 L23 62 L23 52 Q18 52 16 49 L16 62 Z" fill="#6D4C41"/>
  </svg>`,

  /* Amazonas: guacamayo colorido, hojas grandes y rio serpenteando */
  amazonas: `<svg viewBox="0 0 120 70" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
    <!-- rio serpenteante -->
    <path d="M0 60 Q18 52 36 58 Q54 64 72 57 Q90 51 108 57 L120 55" stroke="#4FC3F7" stroke-width="6" fill="none" stroke-linecap="round"/>
    <!-- hojas grandes con nervio -->
    <ellipse cx="16" cy="18" rx="14" ry="7" fill="#2E7D32" transform="rotate(-32 16 18)"/>
    <line x1="5" y1="25" x2="27" y2="11" stroke="#A5D6A7" stroke-width="1.4"/>
    <ellipse cx="106" cy="14" rx="13" ry="6.5" fill="#388E3C" transform="rotate(28 106 14)"/>
    <line x1="95" y1="8" x2="117" y2="20" stroke="#A5D6A7" stroke-width="1.4"/>
    <!-- rama y guacamayo -->
    <line x1="42" y1="47" x2="74" y2="45" stroke="#6D4C41" stroke-width="3" stroke-linecap="round"/>
    <path d="M52 16 Q60 10 66 16 Q70 21 68 30 Q66 40 60 46 L56 46 Q50 36 50 24 Q50 19 52 16 Z" fill="#E53935"/>
    <path d="M58 24 Q68 24 66 34 Q64 42 57 44 Q60 34 58 24 Z" fill="#1E88E5"/>
    <path d="M58 24 Q64 24 64 30 Q62 28 58 27 Z" fill="#FDD835"/>
    <path d="M58 44 L64 62 L58 60 L54 46 Z" fill="#C62828"/>
    <path d="M52 18 Q46 19 47 24 Q50 26 53 24 Z" fill="#37474F"/>
    <circle cx="55" cy="19" r="2.2" fill="#FFFFFF"/>
    <circle cx="55" cy="19" r="1" fill="#263238"/>
  </svg>`
};
