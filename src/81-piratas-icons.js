"use strict";
/* ============================================================
   PIRATAS: iconos dibujados para el mapa de exploración.
   Sustituyen a los emojis de los POIs y respetan su posición:
   la bandera ondea en el tope del mástil, la cofa queda sobre
   su plataforma, el timón en popa... Tamaños honestos: el
   kraken y el tiburón grandes; la botella y el loro pequeños.
   ============================================================ */

(function () {
  const pir = (inner, vb) => `<svg viewBox="${vb || "0 0 100 100"}" width="100%" height="100%">${inner}</svg>`;

  const ICONS = {

    /* Bandera pirata: Jolly Roger simpático con piruletas cruzadas
       (el dato del POI dice que la nuestra lleva piruleta) */
    "🏴‍☠️": { w: 150, h: 80, svg: pir(`
      <defs><linearGradient id="prBand" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#3d434e"/><stop offset="100%" stop-color="#15171d"/></linearGradient></defs>
      <rect x="70" y="8" width="6" height="70" rx="3" fill="#5d4037"/>
      <circle cx="73" cy="7" r="4.5" fill="#8d6e63"/>
      <path d="M76 18 L72 14 M76 58 L72 62" stroke="#8d6e63" stroke-width="2" stroke-linecap="round"/>
      <path d="M76 16 Q104 4 130 13 Q146 18 156 12 L150 60 Q128 70 104 60 Q90 55 76 62 Z" fill="url(#prBand)"/>
      <path d="M86 24 Q108 15 128 21 M84 52 Q104 58 124 52" stroke="rgba(255,255,255,.14)" stroke-width="3" fill="none" stroke-linecap="round"/>
      <circle cx="114" cy="31" r="10.5" fill="#f4f1e6"/>
      <rect x="107" y="38" width="14" height="7" rx="3.5" fill="#f4f1e6"/>
      <circle cx="110" cy="29" r="2.2" fill="#23262e"/><circle cx="110.8" cy="28.2" r=".8" fill="#fff"/>
      <circle cx="118" cy="29" r="2.2" fill="#23262e"/><circle cx="118.8" cy="28.2" r=".8" fill="#fff"/>
      <path d="M113 33 L115 33 L114 35 Z" fill="#23262e"/>
      <path d="M110 41 Q114 44 118 41" stroke="#23262e" stroke-width="1.4" fill="none" stroke-linecap="round"/>
      <circle cx="106" cy="34" r="2" fill="#f48fb1" opacity=".55"/><circle cx="122" cy="34" r="2" fill="#f48fb1" opacity=".55"/>
      <path d="M100 62 L128 48 M128 62 L100 48" stroke="#f4f1e6" stroke-width="3" stroke-linecap="round"/>
      <circle cx="128" cy="48" r="5.5" fill="#ff6d9d"/><path d="M128 48 m-3 0 a3 3 0 1 1 3 3" stroke="#fff" stroke-width="1.2" fill="none"/>
      <circle cx="100" cy="48" r="5.5" fill="#ffd54f"/><path d="M100 48 m-3 0 a3 3 0 1 1 3 3" stroke="#fff" stroke-width="1.2" fill="none"/>`, "0 0 160 84") },

    /* El vigía: la cofa de madera con un pirata niño asomado
       mirando por su catalejo de latón */
    "🔭": { w: 94, h: 104, svg: pir(`
      <defs><linearGradient id="prCofa" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#a1887f"/><stop offset="100%" stop-color="#5d4037"/></linearGradient></defs>
      <rect x="42" y="0" width="12" height="100" fill="#4e342e"/>
      <rect x="38" y="50" width="20" height="12" fill="#fff"/>
      <path d="M38 53 h20 M38 58 h20" stroke="#e53935" stroke-width="3"/>
      <circle cx="48" cy="38" r="13" fill="#ffd3a6"/>
      <path d="M35 34 Q36 22 48 21 Q60 22 61 34 Q54 28 48 28 Q42 28 35 34 Z" fill="#e53935"/>
      <path d="M60 30 L70 26 L66 34 Z" fill="#e53935"/>
      <circle cx="42" cy="26" r="1.2" fill="#fff"/><circle cx="50" cy="24" r="1.2" fill="#fff"/><circle cx="57" cy="28" r="1.2" fill="#fff"/>
      <circle cx="43" cy="38" r="2.4" fill="#4a2b17"/><circle cx="43.8" cy="37.2" r=".8" fill="#fff"/>
      <path d="M42 45 Q47 48 52 45" stroke="#4a2b17" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <circle cx="40" cy="43" r="2.2" fill="#f5a3a3" opacity=".6"/>
      <path d="M58 37 L74 31" stroke="#b98a3e" stroke-width="8" stroke-linecap="round"/>
      <path d="M74 31 L86 26" stroke="#a1762f" stroke-width="6" stroke-linecap="round"/>
      <circle cx="86" cy="26" r="3.4" fill="#7a5316"/><circle cx="87" cy="25" r="1.2" fill="#fff59d"/>
      <path d="M93 14 L94.5 18.5 L99 20 L94.5 21.5 L93 26 L91.5 21.5 L87 20 L91.5 18.5 Z" fill="#fff59d"/>
      <circle cx="62" cy="34" r="3.5" fill="#ffd3a6"/>
      <rect x="16" y="58" width="64" height="9" rx="4.5" fill="#6d4c41"/>
      <path d="M20 67 Q22 96 32 100 L64 100 Q74 96 76 67 Z" fill="url(#prCofa)"/>
      <path d="M32 67 L34 99 M48 67 L48 100 M62 67 L62 99" stroke="#4e342e" stroke-width="2" opacity=".5"/>
      <path d="M22 82 Q48 88 74 82" stroke="#4e342e" stroke-width="3" fill="none" opacity=".4"/>`, "0 0 96 106") },

    /* La vela mayor: hinchada por el viento y con su remiendo cosido */
    "⛵": { w: 86, h: 100, svg: pir(`
      <defs><linearGradient id="prVela" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#d3dce4"/></linearGradient></defs>
      <rect x="43" y="2" width="7" height="102" rx="3" fill="#6d4c41"/>
      <rect x="10" y="8" width="72" height="6" rx="3" fill="#5d4037"/>
      <path d="M14 18 Q46 10 78 18 Q88 56 78 92 Q46 102 14 92 Q4 56 14 18 Z" fill="url(#prVela)" stroke="#b8c4cd" stroke-width="1.5"/>
      <path d="M20 30 Q46 24 72 30 M20 80 Q46 88 72 80" stroke="rgba(96,125,139,.35)" stroke-width="3" fill="none"/>
      <g transform="rotate(8 58 62)">
        <rect x="46" y="52" width="24" height="20" rx="3" fill="#ef9a5a" stroke="#c96b2f" stroke-width="2" stroke-dasharray="4 3"/>
        <path d="M50 57 L66 57 M50 67 L66 67" stroke="#c96b2f" stroke-width="1.6" stroke-dasharray="3 3"/>
      </g>
      <path d="M14 92 Q10 100 4 104 M78 92 Q84 100 90 104" stroke="#8d6e63" stroke-width="2.5" fill="none" stroke-linecap="round"/>`, "0 0 92 108") },

    /* El loro: plumas rojas, ala azul y cola de tres colores */
    "🦜": { w: 48, h: 62, svg: pir(`
      <defs><linearGradient id="prLoro" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ff6b5e"/><stop offset="100%" stop-color="#c62828"/></linearGradient>
      <linearGradient id="prAla" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#64b5f6"/><stop offset="100%" stop-color="#1565c0"/></linearGradient></defs>
      <path d="M36 78 Q28 92 22 100" stroke="#ef5350" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M40 80 Q38 94 34 102" stroke="#ffca28" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M44 79 Q50 92 54 100" stroke="#42a5f5" stroke-width="4" fill="none" stroke-linecap="round"/>
      <rect x="12" y="82" width="56" height="6" rx="3" fill="#6d4c41"/>
      <path d="M40 24 Q57 28 57 52 Q57 74 40 84 Q25 76 24 52 Q24 30 40 24 Z" fill="url(#prLoro)"/>
      <ellipse cx="38" cy="60" rx="9" ry="14" fill="#ffab91" opacity=".8"/>
      <path d="M31 42 Q18 54 26 72 Q40 68 43 50 Q38 42 31 42 Z" fill="url(#prAla)"/>
      <path d="M28 58 Q34 64 40 60" stroke="#ffd54f" stroke-width="3" fill="none" stroke-linecap="round"/>
      <circle cx="40" cy="20" r="12.5" fill="#e53935"/>
      <path d="M36 9 Q38 2 44 1" stroke="#ffca28" stroke-width="3" fill="none" stroke-linecap="round"/>
      <circle cx="44" cy="18" r="6" fill="#fff"/>
      <circle cx="45" cy="18.5" r="2.6" fill="#260e0a"/><circle cx="45.9" cy="17.6" r=".9" fill="#fff"/>
      <path d="M50 14 Q62 16 59 24 Q56 29 49 25 Q47 19 50 14 Z" fill="#78909c"/>
      <path d="M50 25 Q55 29 58 27 L52 31 Z" fill="#546e7a"/>
      <path d="M34 82 Q34 86 30 87 M44 82 Q44 86 48 87" stroke="#ff8f00" stroke-width="3" fill="none" stroke-linecap="round"/>`, "0 0 80 104") },

    /* El timón: rueda de madera con ocho radios y cubo dorado */
    "☸️": { w: 80, h: 80, svg: pir(`
      <defs><radialGradient id="prTimon" cx="45%" cy="40%"><stop offset="0%" stop-color="#ffe082"/><stop offset="100%" stop-color="#c8912b"/></radialGradient></defs>
      <path d="M5 52 L99 52 M52 5 L52 99 M18.8 18.8 L85.2 85.2 M85.2 18.8 L18.8 85.2" stroke="#6d4c41" stroke-width="7" stroke-linecap="round"/>
      ${[[99, 52], [85.2, 85.2], [52, 99], [18.8, 85.2], [5, 52], [18.8, 18.8], [52, 5], [85.2, 18.8]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="5" fill="#8d6e63"/>`).join("")}
      <circle cx="52" cy="52" r="31" fill="none" stroke="#8d6e63" stroke-width="10"/>
      <circle cx="52" cy="52" r="35.5" fill="none" stroke="#5d4037" stroke-width="2.5"/>
      <circle cx="52" cy="52" r="26.5" fill="none" stroke="#5d4037" stroke-width="2.5"/>
      <circle cx="52" cy="52" r="11" fill="url(#prTimon)" stroke="#8a5a20" stroke-width="2"/>
      <circle cx="52" cy="52" r="3.5" fill="#6d4c41"/>
      <circle cx="48" cy="47" r="2" fill="#fff8e1" opacity=".8"/>`, "0 0 104 104") },

    /* El cañón: cureña de madera y disparo de confeti de colores */
    "🎉": { w: 112, h: 90, svg: pir(`
      <defs><linearGradient id="prCanon" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#5c6b78"/><stop offset="100%" stop-color="#26313a"/></linearGradient></defs>
      <g transform="rotate(-24 60 74)">
        <circle cx="28" cy="73" r="6" fill="#26313a"/>
        <rect x="30" y="60" width="76" height="26" rx="13" fill="url(#prCanon)"/>
        <rect x="60" y="58" width="6" height="30" rx="3" fill="#37474f" opacity=".8"/>
        <rect x="94" y="57" width="8" height="32" rx="4" fill="#37474f"/>
      </g>
      <rect x="32" y="76" width="54" height="16" rx="4" fill="#7a4a2b"/>
      <path d="M36 80 L82 80" stroke="#5d3a20" stroke-width="2" opacity=".6"/>
      <circle cx="46" cy="96" r="11" fill="#5d4037" stroke="#3e2723" stroke-width="2"/>
      <path d="M40 90 L52 102 M52 90 L40 102" stroke="#3e2723" stroke-width="2"/>
      <circle cx="46" cy="96" r="3" fill="#8d6e63"/>
      <circle cx="80" cy="98" r="8" fill="#5d4037" stroke="#3e2723" stroke-width="2"/>
      <circle cx="80" cy="98" r="2.4" fill="#8d6e63"/>
      <path d="M104 48 L112 38 M112 52 L122 46 M98 44 L102 34" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".8"/>
      <circle cx="118" cy="30" r="3" fill="#ff5252"/><circle cx="128" cy="42" r="3" fill="#ffca28"/>
      <circle cx="110" cy="22" r="3" fill="#66bb6a"/><circle cx="132" cy="28" r="3" fill="#42a5f5"/>
      <circle cx="122" cy="16" r="3" fill="#ab47bc"/>
      <rect x="104" y="14" width="4" height="8" rx="1" fill="#ff8a65" transform="rotate(25 106 18)"/>
      <rect x="130" y="10" width="4" height="8" rx="1" fill="#4dd0e1" transform="rotate(-20 132 14)"/>
      <path d="M100 30 Q104 22 98 16 Q92 10 98 4" stroke="#f06292" stroke-width="2.5" fill="none" stroke-linecap="round"/>`, "0 0 140 112") },

    /* La playa: castillo de arena con banderín, estrella de mar
       sonriente y concha */
    "🏖️": { w: 92, h: 64, svg: pir(`
      <defs><linearGradient id="prCast" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f7dc9a"/><stop offset="100%" stop-color="#d8ae55"/></linearGradient></defs>
      <ellipse cx="70" cy="82" rx="56" ry="10" fill="#eec97e"/>
      <rect x="34" y="48" width="18" height="32" fill="url(#prCast)" stroke="#c69c4a" stroke-width="1.5"/>
      <rect x="35" y="42" width="5" height="7" fill="url(#prCast)" stroke="#c69c4a" stroke-width="1.2"/>
      <rect x="44" y="42" width="5" height="7" fill="url(#prCast)" stroke="#c69c4a" stroke-width="1.2"/>
      <rect x="87" y="48" width="18" height="32" fill="url(#prCast)" stroke="#c69c4a" stroke-width="1.5"/>
      <rect x="88" y="42" width="5" height="7" fill="url(#prCast)" stroke="#c69c4a" stroke-width="1.2"/>
      <rect x="97" y="42" width="5" height="7" fill="url(#prCast)" stroke="#c69c4a" stroke-width="1.2"/>
      <rect x="55" y="30" width="30" height="50" fill="url(#prCast)" stroke="#c69c4a" stroke-width="1.5"/>
      <rect x="57" y="22" width="6" height="9" fill="url(#prCast)" stroke="#c69c4a" stroke-width="1.2"/>
      <rect x="67" y="22" width="6" height="9" fill="url(#prCast)" stroke="#c69c4a" stroke-width="1.2"/>
      <rect x="77" y="22" width="6" height="9" fill="url(#prCast)" stroke="#c69c4a" stroke-width="1.2"/>
      <path d="M70 22 L70 8" stroke="#8d6e63" stroke-width="2"/>
      <path d="M70 8 L82 12 L70 16 Z" fill="#ef5350"/>
      <path d="M64 80 v-12 a6 6 0 0 1 12 0 v12 Z" fill="#9c7434"/>
      <circle cx="70" cy="44" r="3" fill="#9c7434"/>
      <circle cx="43" cy="60" r="2.5" fill="#9c7434"/><circle cx="96" cy="60" r="2.5" fill="#9c7434"/>
      <path d="M20 62 L23.4 69.4 L31.4 70.2 L25.4 75.6 L27.2 83.4 L20 79.2 L12.8 83.4 L14.6 75.6 L8.6 70.2 L16.6 69.4 Z" fill="#ff8a65"/>
      <circle cx="17.6" cy="72.6" r="1" fill="#7a3520"/><circle cx="22.4" cy="72.6" r="1" fill="#7a3520"/>
      <path d="M17.6 75.4 Q20 77 22.4 75.4" stroke="#7a3520" stroke-width="1.2" fill="none" stroke-linecap="round"/>
      <path d="M112 82 Q112 70 120 66 Q128 70 128 82 Q120 87 112 82 Z" fill="#f8bbd0"/>
      <path d="M116 70 L116 82 M120 67 L120 84 M124 70 L124 82" stroke="#e091ad" stroke-width="1.5"/>`, "0 0 140 96") },

    /* La palmera: tronco curvado, cinco hojas y tres cocos */
    "🌴": { w: 94, h: 108, svg: pir(`
      <defs><linearGradient id="prPalma" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#a1887f"/><stop offset="100%" stop-color="#6d4c41"/></linearGradient></defs>
      <path d="M58 116 Q46 88 50 60 Q52 44 60 30" stroke="url(#prPalma)" stroke-width="12" fill="none" stroke-linecap="round"/>
      <path d="M50 96 q8 3 14 1 M48 76 q8 3 14 1 M50 56 q8 2 13 0" stroke="#5d4037" stroke-width="2.5" fill="none" opacity=".6"/>
      <path d="M60 28 Q36 8 12 16" stroke="#43a047" stroke-width="9" fill="none" stroke-linecap="round"/>
      <path d="M60 28 Q30 28 10 44" stroke="#2e7d32" stroke-width="9" fill="none" stroke-linecap="round"/>
      <path d="M60 28 Q66 2 92 6" stroke="#43a047" stroke-width="9" fill="none" stroke-linecap="round"/>
      <path d="M60 28 Q86 20 100 40" stroke="#2e7d32" stroke-width="9" fill="none" stroke-linecap="round"/>
      <path d="M60 28 Q58 8 42 2" stroke="#388e3c" stroke-width="8" fill="none" stroke-linecap="round"/>
      <circle cx="52" cy="36" r="6.5" fill="#6d4c41" stroke="#4e342e" stroke-width="1.5"/>
      <circle cx="66" cy="38" r="6.5" fill="#6d4c41" stroke="#4e342e" stroke-width="1.5"/>
      <circle cx="59" cy="45" r="6" fill="#6d4c41" stroke="#4e342e" stroke-width="1.5"/>
      <circle cx="50" cy="34" r="1.6" fill="#a1887f"/><circle cx="64" cy="36" r="1.6" fill="#a1887f"/>
      <path d="M46 116 Q52 108 58 114 M60 116 Q66 108 72 114" stroke="#66bb6a" stroke-width="3" fill="none" stroke-linecap="round"/>`, "0 0 104 120") },

    /* La cueva del tesoro: cofre entreabierto con brillo dorado,
       monedas y cristales de colores */
    "💎": { w: 90, h: 78, svg: pir(`
      <defs>
        <radialGradient id="prOro" cx="50%" cy="50%"><stop offset="0%" stop-color="#fff3b0" stop-opacity=".95"/><stop offset="60%" stop-color="#ffd54f" stop-opacity=".35"/><stop offset="100%" stop-color="#ffd54f" stop-opacity="0"/></radialGradient>
        <linearGradient id="prCofre" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#b5713a"/><stop offset="100%" stop-color="#74441f"/></linearGradient>
        <linearGradient id="prTapa" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#c8824a"/><stop offset="100%" stop-color="#8a5426"/></linearGradient>
      </defs>
      <circle cx="60" cy="42" r="40" fill="url(#prOro)"/>
      <g transform="rotate(-16 24 54)">
        <path d="M24 54 Q24 22 60 20 Q96 22 96 54 Z" fill="url(#prTapa)" stroke="#5f3a1a" stroke-width="2"/>
        <rect x="55" y="22" width="10" height="32" fill="#4e342e" opacity=".9"/>
        <path d="M24 54 L96 54" stroke="#5f3a1a" stroke-width="3"/>
      </g>
      <ellipse cx="60" cy="56" rx="34" ry="11" fill="#ffca28"/>
      <circle cx="46" cy="52" r="5" fill="#ffd54f" stroke="#c79100" stroke-width="1.5"/>
      <circle cx="60" cy="48" r="5" fill="#ffd54f" stroke="#c79100" stroke-width="1.5"/>
      <circle cx="73" cy="53" r="5" fill="#ffd54f" stroke="#c79100" stroke-width="1.5"/>
      <path d="M34 50 L39 42 L44 50 L39 56 Z" fill="#f06292"/>
      <path d="M80 48 L85 41 L90 48 L85 55 Z" fill="#4fc3f7"/>
      <path d="M60 26 L61.6 31 L66.6 32.6 L61.6 34.2 L60 39.2 L58.4 34.2 L53.4 32.6 L58.4 31 Z" fill="#fff9c4"/>
      <path d="M88 26 L89 29 L92 30 L89 31 L88 34 L87 31 L84 30 L87 29 Z" fill="#fff9c4"/>
      <path d="M30 30 L31 33 L34 34 L31 35 L30 38 L29 35 L26 34 L29 33 Z" fill="#fff9c4"/>
      <rect x="24" y="58" width="72" height="36" rx="7" fill="url(#prCofre)" stroke="#5f3a1a" stroke-width="2"/>
      <path d="M42 58 V94 M78 58 V94" stroke="#5f3a1a" stroke-width="2" opacity=".45"/>
      <rect x="54" y="58" width="12" height="36" fill="#4e342e"/>
      <circle cx="60" cy="72" r="5.5" fill="#ffd54f" stroke="#a8862a" stroke-width="1.5"/>
      <circle cx="60" cy="71" r="1.5" fill="#6d4c41"/><rect x="59.2" y="71" width="1.6" height="4" fill="#6d4c41"/>
      <circle cx="16" cy="92" r="5" fill="#ffd54f" stroke="#c79100" stroke-width="1.5"/>
      <circle cx="104" cy="90" r="5" fill="#ffd54f" stroke="#c79100" stroke-width="1.5"/>`, "0 0 120 104") },

    /* El mapa: pergamino con rollos, isla, ruta punteada,
       rosa de los vientos y la X */
    "🗺️": { w: 96, h: 70, svg: pir(`
      <defs><linearGradient id="prMapa" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f8ecc4"/><stop offset="100%" stop-color="#e3c68f"/></linearGradient></defs>
      <path d="M16 16 Q66 8 116 16 L112 82 Q66 90 20 82 Z" fill="url(#prMapa)" stroke="#c9a865" stroke-width="2"/>
      <rect x="6" y="12" width="11" height="74" rx="5.5" fill="#d9b978" stroke="#b3924e" stroke-width="1.5"/>
      <rect x="115" y="12" width="11" height="74" rx="5.5" fill="#d9b978" stroke="#b3924e" stroke-width="1.5"/>
      <path d="M26 62 Q30 52 40 52 Q52 52 54 62 Q46 68 34 68 Q28 66 26 62 Z" fill="#a5d6a7" stroke="#7cb342" stroke-width="1.5"/>
      <path d="M40 56 L40 50" stroke="#8d6e63" stroke-width="1.5"/>
      <path d="M40 50 Q36 46 32 47 M40 50 Q44 46 48 47" stroke="#43a047" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <path d="M50 60 Q68 38 84 50 Q96 58 100 36" stroke="#a1642c" stroke-width="3" fill="none" stroke-dasharray="1 7" stroke-linecap="round"/>
      <path d="M96 30 L106 40 M106 30 L96 40" stroke="#e0453a" stroke-width="5" stroke-linecap="round"/>
      <circle cx="104" cy="68" r="8" fill="#fdf6dd" stroke="#90a4d4" stroke-width="1.5"/>
      <path d="M104 61 L106 66 L111 68 L106 70 L104 75 L102 70 L97 68 L102 66 Z" fill="#5c6bc0"/>
      <path d="M28 30 q4 -3 8 0 t8 0 M70 74 q4 -3 8 0" stroke="#90a4d4" stroke-width="2" fill="none" opacity=".7"/>`, "0 0 132 96") },

    /* La X del tesoro: dos trazos rojos sobre el montoncito de arena */
    "❌": { w: 74, h: 62, svg: pir(`
      <ellipse cx="50" cy="64" rx="42" ry="13" fill="#edca7a"/>
      <ellipse cx="50" cy="61" rx="30" ry="8" fill="#f6dc9a"/>
      <circle cx="18" cy="68" r="3" fill="#d9b06a"/><circle cx="82" cy="66" r="2.5" fill="#d9b06a"/>
      <path d="M28 20 L72 56 M72 20 L28 56" stroke="#a8352b" stroke-width="17" stroke-linecap="round"/>
      <path d="M28 20 L72 56 M72 20 L28 56" stroke="#e0453a" stroke-width="11" stroke-linecap="round"/>
      <path d="M34 25 L44 33" stroke="#f0837a" stroke-width="3" stroke-linecap="round" opacity=".8"/>
      <path d="M78 12 L79.6 16.4 L84 18 L79.6 19.6 L78 24 L76.4 19.6 L72 18 L76.4 16.4 Z" fill="#fff9c4"/>
      <path d="M22 10 L23 13 L26 14 L23 15 L22 18 L21 15 L18 14 L21 13 Z" fill="#fff9c4"/>`, "0 0 100 84") },

    /* La botella con mensaje: cristal verdemar, corcho y pergamino
       enrollado dentro */
    "📜": { w: 54, h: 62, svg: pir(`
      <defs><linearGradient id="prBot" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#9fe0d6"/><stop offset="100%" stop-color="#46a099"/></linearGradient></defs>
      <g transform="rotate(-22 42 48)">
        <rect x="35" y="4" width="15" height="12" rx="3" fill="#b58a5a" stroke="#8a6234" stroke-width="1.5"/>
        <path d="M38 7 H47" stroke="#8a6234" stroke-width="1" opacity=".6"/>
        <rect x="36" y="14" width="13" height="16" fill="url(#prBot)" opacity=".9"/>
        <rect x="27" y="26" width="31" height="56" rx="14" fill="url(#prBot)" opacity=".88"/>
        <rect x="35" y="42" width="15" height="30" rx="7" fill="#f6e6b8" stroke="#cfa964" stroke-width="1.5"/>
        <path d="M35 54 H50" stroke="#e57373" stroke-width="2"/>
        <circle cx="42.5" cy="50" r="1.8" fill="#e57373"/>
        <path d="M31 32 Q29 48 32 66" stroke="rgba(255,255,255,.75)" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      </g>
      <path d="M12 84 q8 -6 16 0 t16 0 t16 0" stroke="rgba(255,255,255,.55)" stroke-width="3" fill="none" stroke-linecap="round"/>
      <circle cx="70" cy="30" r="3" fill="none" stroke="rgba(255,255,255,.5)" stroke-width="2"/>
      <circle cx="76" cy="20" r="2" fill="none" stroke="rgba(255,255,255,.5)" stroke-width="2"/>`, "0 0 84 96") },

    /* El delfín guía: saltando con gotitas de agua */
    "🐬": { w: 106, h: 68, svg: pir(`
      <defs><linearGradient id="prDelfin" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8fd0e8"/><stop offset="100%" stop-color="#3f88b5"/></linearGradient></defs>
      <g transform="rotate(-16 72 48)">
        <path d="M14 52 Q34 22 72 20 Q106 20 124 38 L118 44 Q102 60 70 62 Q36 64 14 52 Z" fill="url(#prDelfin)"/>
        <path d="M118 40 L136 26 L132 42 L138 54 L116 46 Z" fill="#3f88b5"/>
        <path d="M60 22 L70 6 L80 22 Z" fill="#3f88b5"/>
        <path d="M44 58 Q40 70 30 72 Q34 62 40 54 Z" fill="#3f88b5"/>
        <path d="M22 54 Q50 62 84 58 Q52 70 28 60 Z" fill="#dff2fa" opacity=".85"/>
        <circle cx="30" cy="38" r="3.8" fill="#123245"/><circle cx="31.4" cy="36.6" r="1.3" fill="#fff"/>
        <path d="M14 48 Q22 52 30 50" stroke="#123245" stroke-width="2" fill="none" stroke-linecap="round"/>
      </g>
      <circle cx="28" cy="84" r="3" fill="#9fd7ef"/><circle cx="44" cy="90" r="2.4" fill="#9fd7ef"/><circle cx="116" cy="82" r="2.6" fill="#9fd7ef"/>`, "0 0 150 96") },

    /* El tiburón: grandote y sonriente, con dientecillos redondeados */
    "🦈": { w: 146, h: 72, svg: pir(`
      <defs><linearGradient id="prTibu" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#a4bed3"/><stop offset="100%" stop-color="#5c7d99"/></linearGradient></defs>
      <path d="M8 46 Q34 16 86 14 Q130 16 154 38 L146 46 Q120 64 76 64 Q34 64 8 46 Z" fill="url(#prTibu)"/>
      <path d="M72 16 L84 0 L96 18 Z" fill="#5c7d99"/>
      <path d="M146 40 L168 20 L162 42 L170 58 L142 50 Z" fill="#5c7d99"/>
      <path d="M58 62 L66 78 L78 60 Z" fill="#5c7d99"/>
      <path d="M16 48 Q52 62 104 58 Q60 70 24 54 Z" fill="#e6eef5" opacity=".9"/>
      <path d="M104 30 q3 8 0 16 M112 30 q3 8 0 16 M120 31 q3 7 0 14" stroke="#46647d" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      <circle cx="34" cy="32" r="5" fill="#fff"/><circle cx="35.4" cy="33" r="2.6" fill="#10202e"/><circle cx="36.4" cy="31.8" r="1" fill="#fff"/>
      <path d="M12 44 Q26 52 44 50" stroke="#10202e" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      <path d="M22 48 L25 53 L28 48 M31 49.5 L34 54.5 L37 49.5" fill="#fff" stroke="#fff" stroke-width="1" stroke-linejoin="round"/>
      <circle cx="46" cy="42" r="3.5" fill="#f8bbd0" opacity=".5"/>`, "0 0 172 86") },

    /* El kraken: morado, juguetón, de ojos grandes como platos
       y tentáculos rizados con ventosas */
    "🐙": { w: 172, h: 150, svg: pir(`
      <defs><radialGradient id="prKraken" cx="45%" cy="35%"><stop offset="0%" stop-color="#c39be0"/><stop offset="100%" stop-color="#6a3aa0"/></radialGradient></defs>
      <path d="M28 64 Q28 8 80 8 Q132 8 132 64 L132 78 L28 78 Z" fill="url(#prKraken)"/>
      <circle cx="48" cy="26" r="4" fill="#dcc2ef" opacity=".55"/><circle cx="96" cy="20" r="3.4" fill="#dcc2ef" opacity=".55"/><circle cx="116" cy="40" r="3" fill="#dcc2ef" opacity=".55"/>
      <circle cx="60" cy="50" r="13.5" fill="#fff"/><circle cx="63" cy="52" r="6.4" fill="#2b1140"/><circle cx="65.5" cy="49.5" r="2.2" fill="#fff"/>
      <circle cx="102" cy="50" r="13.5" fill="#fff"/><circle cx="105" cy="52" r="6.4" fill="#2b1140"/><circle cx="107.5" cy="49.5" r="2.2" fill="#fff"/>
      <circle cx="42" cy="66" r="5" fill="#f5b0d0" opacity=".75"/><circle cx="120" cy="66" r="5" fill="#f5b0d0" opacity=".75"/>
      <path d="M68 68 Q81 77 94 68" stroke="#45156b" stroke-width="3.4" fill="none" stroke-linecap="round"/>
      <path d="M34 76 Q20 100 8 106" stroke="#7b3aa0" stroke-width="9" fill="none" stroke-linecap="round"/>
      <path d="M50 78 Q46 106 30 124" stroke="#7b3aa0" stroke-width="9" fill="none" stroke-linecap="round"/>
      <path d="M68 78 Q68 110 58 132" stroke="#7b3aa0" stroke-width="8.5" fill="none" stroke-linecap="round"/>
      <path d="M86 78 Q90 110 100 130" stroke="#7b3aa0" stroke-width="8.5" fill="none" stroke-linecap="round"/>
      <path d="M104 78 Q114 104 130 118" stroke="#7b3aa0" stroke-width="9" fill="none" stroke-linecap="round"/>
      <path d="M120 74 Q140 92 152 96" stroke="#7b3aa0" stroke-width="8" fill="none" stroke-linecap="round"/>
      ${[[8, 106], [30, 124], [58, 132], [100, 130], [130, 118], [152, 96]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="4.5" fill="#9b6cc4"/>`).join("")}
      <circle cx="46" cy="92" r="2" fill="#d9bdeb"/><circle cx="42" cy="104" r="2" fill="#d9bdeb"/><circle cx="36" cy="114" r="2" fill="#d9bdeb"/>
      <circle cx="112" cy="96" r="2" fill="#d9bdeb"/><circle cx="122" cy="108" r="2" fill="#d9bdeb"/>
      <circle cx="20" cy="40" r="5" fill="none" stroke="rgba(255,255,255,.5)" stroke-width="2"/>
      <circle cx="142" cy="52" r="3.5" fill="none" stroke="rgba(255,255,255,.5)" stroke-width="2"/>`, "0 0 160 142") },

    /* La sirena: dibujada entera, con melena cobriza, cara sonriente
       y cola escamada con aleta */
    "🧜‍♀️": { w: 84, h: 122, svg: pir(`
      <defs>
        <linearGradient id="prCola" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#59d6ac"/><stop offset="100%" stop-color="#00796b"/></linearGradient>
        <linearGradient id="prPelo" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ef8157"/><stop offset="100%" stop-color="#c14a28"/></linearGradient>
      </defs>
      <path d="M46 6 Q72 10 70 38 Q69 60 58 74 Q52 80 40 78 Q26 74 24 46 Q22 14 46 6 Z" fill="url(#prPelo)"/>
      <path d="M38 60 Q28 82 36 100 Q42 112 56 118 Q50 104 53 92 Q46 76 52 60 Z" fill="url(#prCola)"/>
      <path d="M36 74 q4 4 8 0 M42 74 q4 4 8 0 M34 86 q4 4 8 0 M41 86 q4 4 8 0 M38 98 q4 4 8 0" stroke="#00695c" stroke-width="1.8" fill="none" opacity=".5"/>
      <path d="M54 116 Q72 108 78 94 Q78 110 68 118 Q80 120 88 114 Q80 128 62 126 Q54 124 54 116 Z" fill="#26a69a"/>
      <path d="M39 40 L51 40 Q54 52 52 61 Q45 64 38 61 Q36 52 39 40 Z" fill="#ffd9b0"/>
      <path d="M38 60 Q45 64 52 60" stroke="#00897b" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M39 44 Q28 52 30 66" stroke="#ffd9b0" stroke-width="5" fill="none" stroke-linecap="round"/>
      <circle cx="30" cy="66" r="3" fill="#ffd9b0"/>
      <path d="M51 44 Q62 50 60 62" stroke="#ffd9b0" stroke-width="5" fill="none" stroke-linecap="round"/>
      <circle cx="60" cy="62" r="3" fill="#ffd9b0"/>
      <circle cx="41" cy="45" r="4.5" fill="#ba68c8"/><circle cx="49" cy="45" r="4.5" fill="#ba68c8"/>
      <path d="M41 41 V49 M49 41 V49" stroke="#93459c" stroke-width="1.2"/>
      <circle cx="45" cy="26" r="13" fill="#ffd9b0"/>
      <path d="M32 24 Q31 8 45 7 Q59 8 58 24 Q52 13 45 13 Q38 13 32 24 Z" fill="#ef8157"/>
      <path d="M32 24 Q30 36 34 44" stroke="#e8744f" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M58 24 Q60 36 56 44" stroke="#e8744f" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M56 7 L57.4 10.6 L61 11.2 L58.4 13.8 L59 17.4 L56 15.6 L53 17.4 L53.6 13.8 L51 11.2 L54.6 10.6 Z" fill="#ffca28"/>
      <circle cx="40.5" cy="25" r="2.4" fill="#4e2a1e"/><circle cx="41.3" cy="24.2" r=".8" fill="#fff"/>
      <circle cx="50" cy="25" r="2.4" fill="#4e2a1e"/><circle cx="50.8" cy="24.2" r=".8" fill="#fff"/>
      <path d="M38 20.5 q2.5 -2 5 0 M47.5 20.5 q2.5 -2 5 0" stroke="#c1633f" stroke-width="1.4" fill="none" stroke-linecap="round"/>
      <path d="M40.5 31 Q45 35 49.5 31" stroke="#b3543a" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <circle cx="37" cy="29.5" r="2.4" fill="#f8a5a5" opacity=".6"/><circle cx="53" cy="29.5" r="2.4" fill="#f8a5a5" opacity=".6"/>`, "0 0 92 132") }
  };

  /* Aplicar el icono dibujado a cada POI que aún use emoji */
  THEMES.piratas.content.explore.pois.forEach(p => {
    const ic = ICONS[p.emoji];
    if (ic && !p.svg) { p.svg = ic.svg; p.iw = ic.w; p.ih = ic.h; }
  });
})();
