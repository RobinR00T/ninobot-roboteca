"use strict";
/* ============================================================
   AMAZONAS dibujado: los animales y plantas del mapa dejan de
   ser emojis y pasan a ser dibujos cariñosos con tamaño
   relativo honesto (la ceiba y la harpía grandes, el colibrí
   y la hormiga diminutos, el jaguar mediano-grande).
   ============================================================ */

(function () {
  const am = (inner, vb) => `<svg viewBox="${vb || "0 0 100 100"}" width="100%" height="100%">${inner}</svg>`;

  const ICONS = {

    /* Jaguar: dorado con rosetas, el felino silencioso */
    "🐆": { w: 112, h: 74, svg: am(`
      <defs><linearGradient id="amJag" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f2c14e"/><stop offset="100%" stop-color="#c8862c"/></linearGradient></defs>
      <path d="M26 40 Q8 34 6 18" stroke="#c8862c" stroke-width="7" fill="none" stroke-linecap="round"/>
      <circle cx="6" cy="16" r="4.4" fill="#5d3a12"/>
      <path d="M24 48 Q26 28 58 24 Q88 20 102 32 L102 60 Q98 66 90 68 L92 82 L82 82 L80 70 L52 70 L54 82 L44 82 L42 68 Q28 62 24 48 Z" fill="url(#amJag)"/>
      <path d="M40 64 Q62 70 88 64" stroke="#f7e3b2" stroke-width="4" fill="none" opacity=".7"/>
      <g fill="none" stroke="#5d3a12" stroke-width="2.2">
        <circle cx="44" cy="42" r="5.5"/><circle cx="66" cy="34" r="5"/><circle cx="84" cy="46" r="5.5"/><circle cx="58" cy="56" r="4.6"/>
      </g>
      <circle cx="44" cy="42" r="1.7" fill="#8a5a1e"/><circle cx="66" cy="34" r="1.6" fill="#8a5a1e"/><circle cx="84" cy="46" r="1.7" fill="#8a5a1e"/><circle cx="58" cy="56" r="1.5" fill="#8a5a1e"/>
      <circle cx="99" cy="18" r="6.5" fill="#c8862c"/><circle cx="125" cy="18" r="6.5" fill="#c8862c"/>
      <circle cx="99" cy="18" r="3" fill="#8a5a1e"/><circle cx="125" cy="18" r="3" fill="#8a5a1e"/>
      <circle cx="112" cy="34" r="21" fill="url(#amJag)"/>
      <circle cx="106" cy="20" r="1.6" fill="#5d3a12"/><circle cx="118" cy="20" r="1.6" fill="#5d3a12"/><circle cx="130" cy="34" r="1.6" fill="#5d3a12"/><circle cx="95" cy="34" r="1.6" fill="#5d3a12"/>
      <ellipse cx="112" cy="43" rx="10" ry="7.5" fill="#fbeccb"/>
      <path d="M109 40 L115 40 L112 44 Z" fill="#4a2c10"/>
      <path d="M112 44 Q112 48 108 49 M112 44 Q112 48 116 49" stroke="#4a2c10" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <circle cx="104" cy="31" r="3.4" fill="#2b1a06"/><circle cx="105.2" cy="29.8" r="1.2" fill="#fff"/>
      <circle cx="120" cy="31" r="3.4" fill="#2b1a06"/><circle cx="121.2" cy="29.8" r="1.2" fill="#fff"/>`, "0 0 150 100") },

    /* Perezoso: colgado de su rama, con antifaz y sonrisa lenta */
    "🦥": { w: 80, h: 84, svg: am(`
      <defs><linearGradient id="amPer" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#c9ab80"/><stop offset="100%" stop-color="#8f6f4a"/></linearGradient></defs>
      <path d="M4 15 Q55 8 106 14" stroke="#6d4c41" stroke-width="9" fill="none" stroke-linecap="round"/>
      <ellipse cx="96" cy="6" rx="9" ry="5" fill="#66bb6a" transform="rotate(-16 96 6)"/>
      <ellipse cx="106" cy="9" rx="8" ry="4.4" fill="#43a047" transform="rotate(12 106 9)"/>
      <path d="M36 16 Q34 38 44 54 M74 15 Q78 38 66 54" stroke="#8f6f4a" stroke-width="11" fill="none" stroke-linecap="round"/>
      <path d="M32 15 L27 6 M36 14 L34 5 M40 14 L40 5" stroke="#5c4630" stroke-width="2.6" stroke-linecap="round"/>
      <path d="M70 14 L70 5 M74 14 L76 5 M78 15 L83 7" stroke="#5c4630" stroke-width="2.6" stroke-linecap="round"/>
      <ellipse cx="55" cy="76" rx="30" ry="32" fill="url(#amPer)"/>
      <path d="M40 100 Q46 107 55 105 M70 100 Q64 107 57 105" stroke="#75593a" stroke-width="7" fill="none" stroke-linecap="round"/>
      <circle cx="55" cy="66" r="19" fill="#e8d3ae"/>
      <path d="M46 62 Q40 59 34 62" stroke="#6e5436" stroke-width="6" stroke-linecap="round" fill="none"/>
      <path d="M64 62 Q70 59 76 62" stroke="#6e5436" stroke-width="6" stroke-linecap="round" fill="none"/>
      <circle cx="47" cy="62" r="3.2" fill="#2b1e10"/><circle cx="48.2" cy="60.8" r="1.1" fill="#fff"/>
      <circle cx="63" cy="62" r="3.2" fill="#2b1e10"/><circle cx="64.2" cy="60.8" r="1.1" fill="#fff"/>
      <ellipse cx="55" cy="70" rx="4" ry="3" fill="#4a3520"/>
      <path d="M46 76 Q55 83 64 76" stroke="#4a3520" stroke-width="2.4" fill="none" stroke-linecap="round"/>`, "0 0 110 112") },

    /* Mono aullador: rojizo, con barba y la cola prensil enroscada */
    "🐒": { w: 74, h: 82, svg: am(`
      <defs><linearGradient id="amMono" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#c96a33"/><stop offset="100%" stop-color="#7a3413"/></linearGradient></defs>
      <path d="M74 84 Q98 76 96 48 Q94 28 78 26 Q68 26 70 36 Q72 44 80 42" stroke="#a34e1f" stroke-width="8" fill="none" stroke-linecap="round"/>
      <path d="M34 62 Q34 42 55 40 Q76 42 76 62 Q78 84 68 94 L42 94 Q32 84 34 62 Z" fill="url(#amMono)"/>
      <path d="M40 93 Q36 101 27 103 M70 93 Q74 101 83 103" stroke="#7a3413" stroke-width="8" fill="none" stroke-linecap="round"/>
      <path d="M37 58 Q24 66 22 80 M73 58 Q86 66 88 80" stroke="#a34e1f" stroke-width="8" fill="none" stroke-linecap="round"/>
      <path d="M44 66 Q55 74 66 66 Q64 82 55 82 Q46 82 44 66 Z" fill="#e0b184" opacity=".55"/>
      <circle cx="55" cy="27" r="20" fill="url(#amMono)"/>
      <ellipse cx="55" cy="31" rx="13.5" ry="12" fill="#3d1d0a"/>
      <ellipse cx="55" cy="30" rx="11" ry="9.5" fill="#c98a5f"/>
      <circle cx="50" cy="27" r="2.8" fill="#1d0c02"/><circle cx="51" cy="26" r="1" fill="#fff"/>
      <circle cx="60" cy="27" r="2.8" fill="#1d0c02"/><circle cx="61" cy="26" r="1" fill="#fff"/>
      <ellipse cx="55" cy="35" rx="3.8" ry="4.6" fill="#57210c"/>
      <path d="M44 41 Q55 51 66 41" stroke="#7a3413" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M76 18 q7 3 8 10 M82 10 q10 4 11 14" stroke="rgba(255,255,255,.55)" stroke-width="2.2" fill="none" stroke-linecap="round"/>`, "0 0 105 115") },

    /* Ceiba gigante: la copa de una ceiba de verdad es un paraguas mucho más
       ancho que el tronco y casi plano por arriba, con las ramas horizontales.
       Antes la copa medía poco más que el fuste y el árbol leía como una seta. */
    "🌳": { w: 266, h: 188, svg: am(`
      <defs><linearGradient id="amCei" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#9daa88"/><stop offset="100%" stop-color="#67714f"/></linearGradient></defs>
      <g stroke="#7d8a68" stroke-width="8" fill="none" stroke-linecap="round">
        <path d="M138 88 Q100 80 36 70"/><path d="M152 88 Q192 80 254 70"/>
        <path d="M141 86 Q130 66 112 48"/><path d="M149 86 Q162 66 180 46"/></g>
      <ellipse cx="145" cy="60" rx="137" ry="22" fill="#2e7d32"/>
      <ellipse cx="78" cy="74" rx="34" ry="12" fill="#2e7d32"/>
      <ellipse cx="212" cy="76" rx="30" ry="11" fill="#2e7d32"/>
      <ellipse cx="16" cy="58" rx="18" ry="8" fill="#2e7d32"/><ellipse cx="274" cy="58" rx="16" ry="7" fill="#2e7d32"/>
      <ellipse cx="70" cy="54" rx="56" ry="18" fill="#388e3c"/>
      <ellipse cx="220" cy="54" rx="56" ry="18" fill="#388e3c"/>
      <ellipse cx="145" cy="44" rx="100" ry="21" fill="#43a047"/>
      <ellipse cx="95" cy="38" rx="48" ry="16" fill="#4caf50"/>
      <ellipse cx="195" cy="38" rx="48" ry="16" fill="#4caf50"/>
      <ellipse cx="145" cy="31" rx="56" ry="15" fill="#5cb860"/>
      <ellipse cx="52" cy="46" rx="26" ry="10" fill="#66bb6a" opacity=".8"/>
      <ellipse cx="240" cy="46" rx="24" ry="9" fill="#66bb6a" opacity=".8"/>
      <ellipse cx="124" cy="24" rx="16" ry="7" fill="#66bb6a" opacity=".75"/>
      <path d="M135 74 Q132 130 127 200 L163 200 Q158 130 155 74 Z" fill="url(#amCei)"/>
      <path d="M141 84 Q138 130 133 194 M150 84 Q153 130 157 194" stroke="rgba(0,0,0,.14)" stroke-width="3" fill="none"/>
      <path d="M145 88 Q145 140 145 196" stroke="rgba(255,255,255,.16)" stroke-width="4" fill="none"/>
      <ellipse cx="131" cy="118" rx="7" ry="4" fill="#66bb6a" transform="rotate(-18 131 118)"/>
      <ellipse cx="160" cy="150" rx="6" ry="3.4" fill="#4c9a3f" transform="rotate(14 160 150)"/>`, "0 0 290 200") },

    /* Orquídea rosa: cinco pétalos y su labelo con garganta amarilla */
    "🌸": { w: 44, h: 56, svg: am(`
      <defs><radialGradient id="amOrq" cx="50%" cy="45%"><stop offset="0%" stop-color="#fce4ec"/><stop offset="100%" stop-color="#ec5f9c"/></radialGradient></defs>
      <path d="M46 108 Q40 80 44 58" stroke="#558b2f" stroke-width="4" fill="none"/>
      <path d="M46 108 Q26 100 20 82 Q40 84 48 98 Z" fill="#66bb6a"/>
      <path d="M48 106 Q66 98 72 82 Q52 84 46 98 Z" fill="#558b2f"/>
      <path d="M44 58 Q56 70 62 70" stroke="#558b2f" stroke-width="2.6" fill="none"/>
      <ellipse cx="64" cy="66" rx="5" ry="7" fill="#f48fb1"/>
      <g fill="url(#amOrq)">
        <ellipse cx="44" cy="28" rx="8" ry="14"/>
        <ellipse cx="29" cy="40" rx="12" ry="8" transform="rotate(-25 29 40)"/>
        <ellipse cx="59" cy="40" rx="12" ry="8" transform="rotate(25 59 40)"/>
        <ellipse cx="33" cy="53" rx="9" ry="7" transform="rotate(35 33 53)"/>
        <ellipse cx="55" cy="53" rx="9" ry="7" transform="rotate(-35 55 53)"/>
      </g>
      <path d="M44 44 Q35 50 38 59 Q44 67 50 59 Q53 50 44 44 Z" fill="#d81b60"/>
      <circle cx="44" cy="46" r="3.4" fill="#ffd54f"/>
      <circle cx="41" cy="55" r="1.2" fill="#fff" opacity=".85"/><circle cx="47" cy="55" r="1.2" fill="#fff" opacity=".85"/>`, "0 0 90 115") },

    /* Hormiga cortadora: diminuta, con su hojita en alto como una vela */
    "🐜": { w: 34, h: 22, svg: am(`
      <defs><linearGradient id="amHor" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#b3573a"/><stop offset="100%" stop-color="#6d2c16"/></linearGradient></defs>
      <path d="M52 34 Q46 8 70 4 Q96 2 94 24 Q92 40 68 40 Q56 40 52 34 Z" fill="#7cb342"/>
      <path d="M58 32 Q62 16 84 12" stroke="#558b2f" stroke-width="2.4" fill="none"/>
      <path d="M60 42 L56 36" stroke="#6d2c16" stroke-width="2.2" stroke-linecap="round"/>
      <ellipse cx="24" cy="56" rx="14" ry="10" fill="url(#amHor)"/>
      <ellipse cx="46" cy="54" rx="10" ry="8" fill="url(#amHor)"/>
      <circle cx="65" cy="52" r="9" fill="url(#amHor)"/>
      <path d="M20 64 L14 74 M30 65 L30 75 M42 61 L40 73 M52 60 L56 72 M61 60 L66 72" stroke="#6d2c16" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M70 46 Q75 40 73 33 M63 44 Q62 37 56 34" stroke="#6d2c16" stroke-width="2" fill="none" stroke-linecap="round"/>
      <circle cx="68" cy="50" r="2.4" fill="#210b02"/><circle cx="68.9" cy="49.2" r=".8" fill="#fff"/>
      <path d="M64 57 Q68 60 72 57" stroke="#210b02" stroke-width="1.6" fill="none" stroke-linecap="round"/>`, "0 0 110 80") },

    /* Delfín rosado, el boto: hocico largo y aleta baja de río */
    "🐬": { w: 100, h: 54, svg: am(`
      <defs><linearGradient id="amBoto" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f7b7c9"/><stop offset="100%" stop-color="#df7f9e"/></linearGradient></defs>
      <path d="M22 38 L6 26 L10 40 L4 54 L24 44 Z" fill="#df7f9e"/>
      <path d="M20 40 Q36 18 66 16 Q94 14 108 26 L132 30 Q136 32 132 35 L108 36 Q94 52 64 52 Q34 52 20 40 Z" fill="url(#amBoto)"/>
      <path d="M58 17 Q70 8 84 17 Q70 13 58 17 Z" fill="#e295af"/>
      <path d="M62 46 Q58 60 44 64 Q52 50 56 44 Z" fill="#d06e8e"/>
      <path d="M34 46 Q64 52 96 42 Q68 56 40 50 Z" fill="#fbd7e1" opacity=".9"/>
      <circle cx="96" cy="27" r="3.2" fill="#5c1f33"/><circle cx="97.2" cy="25.8" r="1.1" fill="#fff"/>
      <path d="M106 33 Q120 37 132 33" stroke="#b3536f" stroke-width="2" fill="none" stroke-linecap="round"/>
      <circle cx="90" cy="36" r="4" fill="#f48caa" opacity=".7"/>
      <path d="M84 8 q-2 -6 -8 -8 M84 8 q4 -6 10 -6" stroke="#bfe4ff" stroke-width="2.4" fill="none" stroke-linecap="round" opacity=".9"/>`, "0 0 140 68") },

    /* Piraña sonriente: cuerpo de disco, barriga roja y dientecillos simpáticos */
    "🐟": { w: 46, h: 40, svg: am(`
      <defs><linearGradient id="amPira" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8fa8bd"/><stop offset="100%" stop-color="#546e8a"/></linearGradient></defs>
      <path d="M46 16 L54 4 L62 16 Z" fill="#46607a"/>
      <path d="M16 46 Q22 18 52 14 Q84 16 92 44 Q86 72 52 76 Q22 72 16 46 Z" fill="url(#amPira)"/>
      <path d="M20 54 Q40 72 72 66 Q48 80 28 68 Q21 61 20 54 Z" fill="#e05545"/>
      <path d="M90 44 L104 32 L100 46 L104 60 L90 50 Z" fill="#546e8a"/>
      <path d="M52 52 Q60 58 58 66 Q50 60 48 54 Z" fill="#46607a"/>
      <circle cx="34" cy="36" r="7" fill="#fff"/><circle cx="32.5" cy="37" r="3.6" fill="#16222e"/><circle cx="31.4" cy="35.6" r="1.2" fill="#fff"/>
      <path d="M20 49 Q32 58 48 55" stroke="#33212b" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      <path d="M26 52 L28 57 L30 52.6 Z M34 54.6 L36 59.6 L38 55 Z M42 55 L44 59.6 L46 54.6 Z" fill="#fff"/>`, "0 0 106 88") },

    /* Anaconda tímida: enroscada, con manchas ovaladas y mejillas */
    "🐍": { w: 88, h: 66, svg: am(`
      <defs><linearGradient id="amAna" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#93a862"/><stop offset="100%" stop-color="#55702f"/></linearGradient></defs>
      <path d="M100 70 Q112 66 113 55" stroke="#55702f" stroke-width="7" fill="none" stroke-linecap="round"/>
      <path d="M14 74 Q14 58 34 56 L84 56 Q102 58 102 72 Q102 86 82 88 L32 88 Q14 86 14 74 Z" fill="url(#amAna)"/>
      <ellipse cx="34" cy="78" rx="4.2" ry="2.9" fill="#3c5220"/><ellipse cx="58" cy="80" rx="4.4" ry="3" fill="#3c5220"/><ellipse cx="82" cy="76" rx="4.2" ry="2.9" fill="#3c5220"/>
      <path d="M24 56 Q24 42 44 40 L72 40 Q90 42 90 54 Q90 66 72 68 L42 68 Q24 66 24 56 Z" fill="url(#amAna)"/>
      <path d="M28 62 Q57 68 88 60" stroke="rgba(0,0,0,.15)" stroke-width="2.4" fill="none"/>
      <ellipse cx="36" cy="52" rx="4" ry="2.8" fill="#3c5220"/><ellipse cx="78" cy="52" rx="4" ry="2.8" fill="#3c5220"/><ellipse cx="57" cy="61" rx="4" ry="2.8" fill="#3c5220"/>
      <path d="M38 40 Q38 23 57 23 Q76 23 76 38 Q76 49 57 49 Q38 49 38 40 Z" fill="url(#amAna)"/>
      <circle cx="50" cy="34" r="4.6" fill="#fff"/><circle cx="51.6" cy="35" r="2.2" fill="#1c260d"/>
      <circle cx="64" cy="34" r="4.6" fill="#fff"/><circle cx="65.6" cy="35" r="2.2" fill="#1c260d"/>
      <circle cx="45" cy="42" r="2.8" fill="#e8a2a2" opacity=".75"/><circle cx="69" cy="42" r="2.8" fill="#e8a2a2" opacity=".75"/>
      <path d="M53 43 Q57 45.5 61 43" stroke="#2c3a12" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <path d="M57 47 L57 52 M57 52 L54 55 M57 52 L60 55" stroke="#c2564b" stroke-width="1.6" fill="none" stroke-linecap="round"/>`, "0 0 118 95") },

    /* Nenúfar gigante Victoria: bandeja con borde levantado, muesca y flor */
    "🪷": { w: 104, h: 62, svg: am(`
      <defs><radialGradient id="amVic" cx="50%" cy="45%"><stop offset="0%" stop-color="#81c784"/><stop offset="100%" stop-color="#3f8f43"/></radialGradient></defs>
      <ellipse cx="62" cy="48" rx="54" ry="23" fill="#2e6b31"/>
      <ellipse cx="62" cy="51" rx="47" ry="17" fill="url(#amVic)"/>
      <path d="M62 51 L108 44 L109 54 Z" fill="#1f4a22"/>
      <path d="M62 51 L25 44 M62 51 L34 60 M62 51 L62 66 M62 51 L88 61 M62 51 L94 42" stroke="#2e6b31" stroke-width="2" opacity=".7"/>
      <path d="M14 42 Q34 28 62 27" stroke="#a5d6a7" stroke-width="3.4" fill="none" opacity=".85" stroke-linecap="round"/>
      <ellipse cx="24" cy="26" rx="5" ry="10" fill="#f8bbd0" transform="rotate(-18 24 26)"/>
      <ellipse cx="34" cy="22" rx="5" ry="11" fill="#fce4ec"/>
      <ellipse cx="44" cy="26" rx="5" ry="10" fill="#f8bbd0" transform="rotate(18 44 26)"/>
      <ellipse cx="29" cy="28" rx="4" ry="8" fill="#fff" transform="rotate(-9 29 28)"/>
      <ellipse cx="39" cy="28" rx="4" ry="8" fill="#fff" transform="rotate(9 39 28)"/>
      <circle cx="34" cy="33" r="4" fill="#f6a5c0"/>
      <path d="M6 70 q10 -5 20 0 M100 72 q10 -5 20 0" stroke="rgba(255,255,255,.5)" stroke-width="2.4" fill="none" stroke-linecap="round"/>`, "0 0 130 80") },

    /* Caimán: bajito en el agua, crestitas y ojos saltones */
    "🐊": { w: 118, h: 50, svg: am(`
      <defs><linearGradient id="amCai" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#84a65b"/><stop offset="100%" stop-color="#42612b"/></linearGradient></defs>
      <path d="M26 44 Q6 40 2 26 Q16 33 30 33 Z" fill="#42612b"/>
      <path d="M40 30 L46 22 L52 30 M58 29 L64 21 L70 29 M76 29 L82 22 L88 30" fill="#5a7a3c" stroke="#33491f" stroke-width="1.4"/>
      <path d="M22 44 Q30 30 70 28 Q100 27 118 32 L146 36 Q154 38 152 44 Q148 50 134 50 L116 50 Q96 58 62 56 L64 66 L54 66 L52 56 L38 56 L40 66 L30 66 L28 52 Q20 50 22 44 Z" fill="url(#amCai)"/>
      <circle cx="112" cy="27" r="9" fill="#84a65b"/>
      <circle cx="112" cy="25" r="6" fill="#fff"/><circle cx="113.5" cy="26" r="3" fill="#182410"/><circle cx="114.5" cy="24.8" r="1" fill="#fff"/>
      <circle cx="146" cy="35" r="1.8" fill="#2c4218"/>
      <path d="M118 45 Q134 50 150 44" stroke="#26391a" stroke-width="2.2" fill="none" stroke-linecap="round"/>
      <path d="M126 47 L128 51 L131 47 Z" fill="#fff"/>
      <path d="M36 53 Q70 60 104 52" stroke="#c6d9a3" stroke-width="4" fill="none" opacity=".65"/>`, "0 0 160 72") },

    /* Guacamayo rojo: cara blanca, ala en capas roja-amarilla-azul y cola larga */
    "🦜": { w: 62, h: 86, svg: am(`
      <defs><linearGradient id="amGua" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ef5350"/><stop offset="100%" stop-color="#b71c1c"/></linearGradient></defs>
      <path d="M46 74 Q40 100 30 122 L40 124 Q50 100 54 78 Z" fill="#1e63b0"/>
      <path d="M52 76 Q50 100 44 120 L52 122 Q58 100 60 80 Z" fill="#c62828"/>
      <path d="M34 40 Q30 24 46 18 Q64 14 70 30 Q76 46 70 64 Q64 78 50 78 Q36 76 34 58 Z" fill="url(#amGua)"/>
      <path d="M52 36 Q76 44 70 76 Q60 88 50 80 Q60 60 52 36 Z" fill="#1e63b0"/>
      <path d="M50 34 Q68 42 64 66 Q56 74 48 68 Q56 52 50 34 Z" fill="#f9a825"/>
      <path d="M48 32 Q60 40 58 56 Q50 60 46 54 Q50 42 48 32 Z" fill="#d63a37"/>
      <circle cx="42" cy="24" r="16" fill="url(#amGua)"/>
      <path d="M30 22 Q28 30 36 34 Q44 36 46 28 Q46 18 38 16 Q30 16 30 22 Z" fill="#f5efe6"/>
      <path d="M32 20 L37 21 M31 25 L36 26" stroke="#d63a37" stroke-width="1.2" stroke-linecap="round"/>
      <path d="M29 21 Q15 23 17 31 Q23 39 33 33 Q27 29 29 21 Z" fill="#e8e0d2"/>
      <path d="M27 34 Q23 40 29 42 Q35 42 35 36 Z" fill="#3b2d24"/>
      <circle cx="39" cy="23" r="3" fill="#1c0d08"/><circle cx="40" cy="22" r="1" fill="#fff"/>
      <path d="M28 86 L80 90" stroke="#6d4c41" stroke-width="6" stroke-linecap="round"/>
      <path d="M46 78 L44 87 M54 79 L54 88" stroke="#5a4a3a" stroke-width="3" stroke-linecap="round"/>`, "0 0 95 130") },

    /* Tucán: picazo naranja casi hueco, pecho blanco y cola con rojo */
    "🐦": { w: 82, h: 64, svg: am(`
      <defs><linearGradient id="amTuc" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#37474f"/><stop offset="100%" stop-color="#12181c"/></linearGradient></defs>
      <path d="M96 76 Q110 84 116 96 L100 94 Q92 88 90 80 Z" fill="#12181c"/>
      <path d="M98 82 Q104 88 108 94 L100 93 Q96 88 94 84 Z" fill="#c62828"/>
      <path d="M64 24 Q92 18 104 38 Q112 58 98 74 Q84 86 70 80 Q56 72 56 52 Q56 32 64 24 Z" fill="url(#amTuc)"/>
      <path d="M58 40 Q52 58 62 72 Q72 80 80 74 Q70 60 70 42 Q64 36 58 40 Z" fill="#f6f1e6"/>
      <circle cx="68" cy="30" r="16" fill="url(#amTuc)"/>
      <path d="M56 26 Q58 40 70 42 Q60 46 54 38 Q52 30 56 26 Z" fill="#f6f1e6"/>
      <path d="M56 26 Q30 22 10 32 Q6 36 10 41 Q30 50 56 42 Q60 34 56 26 Z" fill="#f57f17"/>
      <path d="M54 27 Q38 25 22 29 L55 31 Z" fill="#ffb300"/>
      <path d="M14 31 Q8 36 12 41 Q17 44 23 43 Q15 38 14 31 Z" fill="#4e342e"/>
      <path d="M13 37 L52 37" stroke="#c25e00" stroke-width="1.8"/>
      <circle cx="66" cy="28" r="5.6" fill="#8ecae6"/>
      <circle cx="66" cy="28" r="3" fill="#12181c"/><circle cx="67" cy="27" r="1" fill="#fff"/>
      <path d="M56 92 L120 88" stroke="#6d4c41" stroke-width="6" stroke-linecap="round"/>
      <path d="M74 82 L72 90 M82 82 L84 90" stroke="#5a7a8a" stroke-width="3" stroke-linecap="round"/>`, "0 0 135 105") },

    /* Colibrí: pequeñísimo, con las alas borrosas de tan rápidas */
    "🪶": { w: 32, h: 26, svg: am(`
      <defs><linearGradient id="amColi" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#5fd39a"/><stop offset="100%" stop-color="#1e8f63"/></linearGradient></defs>
      <path d="M44 30 Q30 8 12 6 Q26 26 40 34 Z" fill="#7fd8ae" opacity=".38"/>
      <path d="M46 30 Q40 4 24 0 Q36 20 44 32 Z" fill="#7fd8ae" opacity=".55"/>
      <path d="M48 30 Q52 4 66 2 Q58 22 50 32 Z" fill="#7fd8ae" opacity=".38"/>
      <path d="M12 16 q-6 -4 -8 -10 M68 12 q6 -5 8 -11" stroke="rgba(255,255,255,.55)" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M36 46 Q24 54 15 66 L28 62 Q36 56 38 50 Z" fill="#1e8f63"/>
      <path d="M34 40 Q40 28 52 30 Q64 32 62 44 Q60 54 48 54 Q38 52 34 44 Z" fill="url(#amColi)"/>
      <circle cx="60" cy="36" r="8" fill="url(#amColi)"/>
      <path d="M66 34 L90 30" stroke="#37251a" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M56 42 Q60 46 64 42 Q62 38 58 38 Z" fill="#e05576"/>
      <circle cx="61" cy="34" r="2" fill="#132018"/><circle cx="61.7" cy="33.3" r=".7" fill="#fff"/>`, "0 0 95 75") },

    /* Mariposa morpho: azul espejo con borde oscuro y destellos */
    "🦋": { w: 56, h: 46, svg: am(`
      <defs><radialGradient id="amMor" cx="50%" cy="40%"><stop offset="0%" stop-color="#9fe0ff"/><stop offset="100%" stop-color="#2f6fd6"/></radialGradient></defs>
      <path d="M50 46 Q26 10 8 14 Q2 34 20 48 Q34 56 50 50 Z" fill="url(#amMor)" stroke="#173a6b" stroke-width="3"/>
      <path d="M54 46 Q78 10 96 14 Q102 34 84 48 Q70 56 54 50 Z" fill="url(#amMor)" stroke="#173a6b" stroke-width="3"/>
      <path d="M50 52 Q34 58 28 72 Q34 84 48 76 Q54 68 52 54 Z" fill="url(#amMor)" stroke="#173a6b" stroke-width="3"/>
      <path d="M54 52 Q70 58 76 72 Q70 84 56 76 Q50 68 52 54 Z" fill="url(#amMor)" stroke="#173a6b" stroke-width="3"/>
      <circle cx="26" cy="30" r="3" fill="#fff" opacity=".85"/><circle cx="78" cy="30" r="3" fill="#fff" opacity=".85"/>
      <circle cx="38" cy="42" r="2" fill="#d8f2ff" opacity=".8"/><circle cx="66" cy="42" r="2" fill="#d8f2ff" opacity=".8"/>
      <circle cx="38" cy="68" r="1.8" fill="#d8f2ff" opacity=".7"/><circle cx="66" cy="68" r="1.8" fill="#d8f2ff" opacity=".7"/>
      <ellipse cx="52" cy="54" rx="4.5" ry="16" fill="#2b2b38"/>
      <circle cx="52" cy="36" r="5" fill="#2b2b38"/>
      <path d="M49 32 Q44 22 38 20 M55 32 Q60 22 66 20" stroke="#2b2b38" stroke-width="2" fill="none" stroke-linecap="round"/>
      <circle cx="50" cy="35" r="1.2" fill="#fff"/><circle cx="54" cy="35" r="1.2" fill="#fff"/>`, "0 0 105 90") },

    /* Águila harpía: grande, con su cresta doble como una corona */
    "🦅": { w: 94, h: 108, svg: am(`
      <defs><linearGradient id="amHarp" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8fa0ad"/><stop offset="100%" stop-color="#4c5d6b"/></linearGradient></defs>
      <path d="M46 18 Q43 5 36 1 Q49 3 53 13 Z" fill="#4c5d6b"/>
      <path d="M62 18 Q65 5 72 1 Q59 3 55 13 Z" fill="#4c5d6b"/>
      <path d="M30 50 Q14 70 18 102 Q26 98 32 86 Q34 66 32 52 Z" fill="url(#amHarp)"/>
      <path d="M78 50 Q94 70 90 102 Q82 98 76 86 Q74 66 76 52 Z" fill="url(#amHarp)"/>
      <path d="M32 52 Q26 84 34 108 Q44 120 54 120 Q66 120 74 108 Q82 84 76 52 Q54 66 32 52 Z" fill="#eef2f4"/>
      <path d="M40 76 L52 78 M58 78 L70 76 M42 90 L54 92 M60 92 L72 90 M46 104 L64 104" stroke="#9fb0ba" stroke-width="2" stroke-linecap="round"/>
      <path d="M32 44 Q54 58 76 44 L78 55 Q54 68 30 55 Z" fill="#3b4750"/>
      <circle cx="54" cy="28" r="18" fill="#b9c4cc"/>
      <circle cx="45" cy="26" r="4.5" fill="#2b2016"/><circle cx="46.6" cy="24.6" r="1.5" fill="#fff"/>
      <circle cx="63" cy="26" r="4.5" fill="#2b2016"/><circle cx="64.6" cy="24.6" r="1.5" fill="#fff"/>
      <path d="M50 35 Q54 34 58 35 Q57 44 54 45 Q51 44 50 35 Z" fill="#2e3338"/>
      <path d="M14 124 L100 120" stroke="#6d4c41" stroke-width="8" stroke-linecap="round"/>
      <path d="M44 116 L42 124 M50 116 L50 124 M60 116 L60 123 M66 116 L68 123" stroke="#e0a92e" stroke-width="4" stroke-linecap="round"/>`, "0 0 115 135") }
  };

  /* Se aplican a los POIs del mapa, sin pisar dibujos ya definidos */
  THEMES.amazonas.content.explore.pois.forEach(p => {
    const ic = ICONS[p.emoji];
    if (ic && !p.svg) { p.svg = ic.svg; p.iw = ic.w; p.ih = ic.h; }
  });
})();
