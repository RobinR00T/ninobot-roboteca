"use strict";
/* ============================================================
   Escenografía ampliada de dos mapas de Explorar:
   ANIMALES DEL MUNDO y MUJERES INCREÍBLES.

   No se toca la deco original de ninguno de los dos: se envuelve.
   Lo nuevo se dibuja DETRÁS y lo de siempre queda DELANTE, y
   siempre se devuelve UN SOLO <svg> (el que arma decoSvg).

   Los ids de degradados y patrones llevan prefijo propio
   (anmX... y incX...) para no chocar con ningún otro mapa.
   ============================================================ */

(function () {

  /* ------------------------------------------------------------------
     UTILIDADES COMPARTIDAS
     ------------------------------------------------------------------ */

  /* Estrella de n puntas: sirve para la rosa de los vientos
     y para las estrellas de latón de las esquinas del atlas. */
  function estrella(cx, cy, n, re, ri, fill, giro) {
    let d = "";
    const paso = Math.PI / n, base = (giro || 0) * Math.PI / 180 - Math.PI / 2;
    for (let i = 0; i < n * 2; i++) {
      const a = base + i * paso, r = i % 2 ? ri : re;
      d += (i ? "L" : "M") + (cx + r * Math.cos(a)).toFixed(1) + " " + (cy + r * Math.sin(a)).toFixed(1) + " ";
    }
    return `<path d="${d}Z" fill="${fill}"/>`;
  }

  /* Cajas de los puntos de interés: el paisaje les deja aire alrededor
     para que nada quede dibujado justo debajo de un icono. */
  function cajasPoi(pois, radio, radioGrande, alturaEtiqueta) {
    return (pois || []).map(function (p) {
      const r = (p.size || 1) > 1 ? radioGrande : radio;
      return [p.x - r, p.y - r, r * 2, r * 2 + alturaEtiqueta];
    });
  }

  /* Comprueba que un rectángulo no pise ninguna caja de icono */
  function hazLibre(cajas, margen) {
    const m = margen || 12;
    return function (x, y, w, h) {
      return !cajas.some(function (c) {
        return x < c[0] + c[2] + m && x + w > c[0] - m && y < c[1] + c[3] + m && y + h > c[1] - m;
      });
    };
  }

  /* ==================================================================
     ANIMALES DEL MUNDO
     Un recorrido de cuatro climas encadenados de izquierda a derecha:
     selva, sabana, montañas y polos, y desierto. El cielo cambia de
     color por franjas y el suelo es una sola línea continua, así que
     las transiciones se funden sin cortes.
     ================================================================== */

  function escenaAnimales(e) {
    const W = (e && e.width) || 2600;
    const cajas = cajasPoi((e && e.pois) || [], 96, 132, 44);
    const libre = hazLibre(cajas, 14);
    let s = "";

    /* ---------- DEGRADADOS Y PATRONES PROPIOS ---------- */
    s += `<defs>
      <linearGradient id="anmXCieloAlto" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#a9dcf2"/><stop offset="46%" stop-color="#d6eef6"/><stop offset="100%" stop-color="#f6efdc"/>
      </linearGradient>
      <linearGradient id="anmXClima" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#1f6d47" stop-opacity=".50"/>
        <stop offset="16%" stop-color="#3f8f57" stop-opacity=".40"/>
        <stop offset="27%" stop-color="#a8b95c" stop-opacity=".30"/>
        <stop offset="38%" stop-color="#e8c268" stop-opacity=".40"/>
        <stop offset="50%" stop-color="#efc871" stop-opacity=".42"/>
        <stop offset="58%" stop-color="#b8d8e8" stop-opacity=".34"/>
        <stop offset="70%" stop-color="#a6cfe6" stop-opacity=".40"/>
        <stop offset="79%" stop-color="#cddbe4" stop-opacity=".26"/>
        <stop offset="88%" stop-color="#f0c179" stop-opacity=".36"/>
        <stop offset="100%" stop-color="#e39c4e" stop-opacity=".50"/>
      </linearGradient>
      <linearGradient id="anmXSuelo" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#256b35"/><stop offset="18%" stop-color="#2f7a38"/>
        <stop offset="26%" stop-color="#6f9440"/><stop offset="33%" stop-color="#b9ad55"/>
        <stop offset="47%" stop-color="#cfb862"/><stop offset="55%" stop-color="#c7cd8e"/>
        <stop offset="60%" stop-color="#dfeef5"/><stop offset="72%" stop-color="#eaf5f9"/>
        <stop offset="79%" stop-color="#cfd4cf"/><stop offset="85%" stop-color="#e0c68d"/>
        <stop offset="100%" stop-color="#dda85c"/>
      </linearGradient>
      <radialGradient id="anmXSol" cx="46%" cy="42%" r="58%">
        <stop offset="0%" stop-color="#fffdf0"/><stop offset="62%" stop-color="#ffe082"/><stop offset="100%" stop-color="#ffb74d"/>
      </radialGradient>
      <radialGradient id="anmXNiebla" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity=".55"/><stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="anmXAurora" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#7ef0c2" stop-opacity="0"/><stop offset="42%" stop-color="#6fe4b6" stop-opacity=".38"/>
        <stop offset="72%" stop-color="#a78bd6" stop-opacity=".24"/><stop offset="100%" stop-color="#a78bd6" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="anmXAguaFria" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#9fd4ea"/><stop offset="100%" stop-color="#3f89b5"/>
      </linearGradient>
      <linearGradient id="anmXHielo" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#bde3f2"/>
      </linearGradient>
      <linearGradient id="anmXRoca" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#9aa7b3"/><stop offset="100%" stop-color="#5d6b78"/>
      </linearGradient>
      <linearGradient id="anmXDunaA" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#f2d193"/><stop offset="100%" stop-color="#dda85c"/>
      </linearGradient>
      <linearGradient id="anmXDunaB" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#e6b66d"/><stop offset="100%" stop-color="#c98c40"/>
      </linearGradient>
      <linearGradient id="anmXCalor" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0"/><stop offset="50%" stop-color="#fff3d6" stop-opacity=".40"/><stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
      </linearGradient>
    </defs>`;

    /* ---------- CIELO: base vertical y tinte de clima por franjas ---------- */
    s += `<rect x="0" y="0" width="${W}" height="880" fill="url(#anmXCieloAlto)"/>
      <rect x="0" y="0" width="${W}" height="880" fill="url(#anmXClima)"/>`;

    /* El sol grande de la sabana, con su halo que respira despacio */
    s += `<g transform="translate(1180 152)">
      <circle r="188" fill="rgba(255,224,130,.16)"><animate attributeName="r" values="188;206;188" dur="11s" repeatCount="indefinite"/></circle>
      <circle r="132" fill="rgba(255,236,170,.24)"/>
      <circle r="96" fill="url(#anmXSol)"/>
      <circle cx="-30" cy="-30" r="22" fill="rgba(255,255,255,.5)"/></g>`;

    /* Nubes lentas: espesas sobre la sabana, deshilachadas en el polo */
    const nube = function (x, y, k, col) {
      return `<g transform="translate(${x} ${y}) scale(${k})" fill="${col}">
        <ellipse cx="0" cy="0" rx="92" ry="32"/><ellipse cx="-58" cy="11" rx="48" ry="22"/>
        <ellipse cx="52" cy="13" rx="54" ry="24"/><ellipse cx="-8" cy="-24" rx="50" ry="28"/></g>`;
    };
    [[300, 132, .82, "#ffffff", .55, 58, 46], [820, 108, 1, "#ffffff", .78, 74, 52],
     [1420, 178, .74, "#fffdf4", .66, 62, 40], [1760, 118, .9, "#f4fbff", .70, 88, 58],
     [2260, 146, .62, "#fff6e8", .48, 50, 36]].forEach(function (n) {
      s += `<g opacity="${n[4]}"><animateTransform attributeName="transform" type="translate" values="0 0;${n[5]} 0;0 0" dur="${n[6]}s" repeatCount="indefinite"/>${nube(n[0], n[1], n[2], n[3])}</g>`;
    });
    /* Cirros finos sobre las montañas y el polo */
    [[1560, 250, 210], [1900, 214, 170], [2080, 286, 140]].forEach(function (c) {
      s += `<path d="M${c[0]} ${c[1]} q${c[2] / 2} -18 ${c[2]} 0" stroke="rgba(255,255,255,.5)" stroke-width="9" fill="none" stroke-linecap="round"/>
        <path d="M${c[0] + 30} ${c[1] + 22} q${c[2] / 2.6} -14 ${c[2] * 0.7} 0" stroke="rgba(255,255,255,.34)" stroke-width="6" fill="none" stroke-linecap="round"/>`;
    });

    /* Pájaros lejanos: siluetas quietas y uno que cruza el mapa entero */
    [[700, 206], [1080, 238], [1500, 190], [2010, 244], [2300, 210], [560, 268]].forEach(function (p) {
      s += `<path d="M${p[0]} ${p[1]} q-12 -11 -25 -6 M${p[0]} ${p[1]} q12 -11 25 -6" stroke="rgba(70,95,115,.42)" stroke-width="3.4" fill="none" stroke-linecap="round"/>`;
    });
    s += `<g><path d="M0 0 q-14 -12 -29 -6 M0 0 q14 -12 29 -6" stroke="rgba(60,85,105,.55)" stroke-width="4" fill="none" stroke-linecap="round">
      <animate attributeName="d" values="M0 0 q-14 -12 -29 -6 M0 0 q14 -12 29 -6;M0 0 q-14 6 -29 12 M0 0 q14 6 29 12;M0 0 q-14 -12 -29 -6 M0 0 q14 -12 29 -6" dur="1.9s" repeatCount="indefinite"/></path>
      <animateMotion dur="54s" repeatCount="indefinite" path="M 140 176 Q 900 108 1560 172 Q 2140 226 2540 158"/></g>`;

    /* ---------- SUELO CONTINUO: una sola línea que recorre los cuatro climas ---------- */
    s += `<path d="M0 792 Q180 766 360 786 Q560 806 720 788 Q900 762 1080 772 Q1260 782 1450 776
      Q1620 770 1790 784 Q1940 796 2080 802 Q2260 812 2420 796 Q2520 786 ${W} 800 L${W} 1100 L0 1100 Z" fill="url(#anmXSuelo)"/>
      <path d="M0 792 Q180 766 360 786 Q560 806 720 788 Q900 762 1080 772 Q1260 782 1450 776
      Q1620 770 1790 784 Q1940 796 2080 802 Q2260 812 2420 796 Q2520 786 ${W} 800" stroke="rgba(255,255,255,.32)" stroke-width="5" fill="none"/>`;

    /* ================= SELVA (0 a 720): capas de vegetación, lianas y niebla ================= */
    /* Telón de fondo: la masa de árboles lejanos, muy suave */
    s += `<path d="M-20 700 Q60 604 150 656 Q214 566 300 626 Q380 552 462 620 Q540 556 620 622 Q690 578 760 646 L760 810 L-20 810 Z" fill="#2a6b3c" opacity=".38"/>
      <path d="M-20 742 Q80 668 178 716 Q262 646 350 706 Q438 650 520 712 Q604 660 700 724 Q740 748 780 742 L780 830 L-20 830 Z" fill="#2c7440" opacity=".55"/>`;
    /* Los troncos altos: solo donde no hay icono encima */
    [[86, 596, 1.05], [262, 640, .9], [452, 622, 1], [636, 662, .86], [178, 690, .7], [560, 700, .74]].forEach(function (t) {
      if (!libre(t[0] - 22, t[1] - 96, 44, 210)) return;
      s += `<g transform="translate(${t[0]} ${t[1]}) scale(${t[2]})">
        <path d="M-13 0 L-19 176 L19 176 L13 0 Z" fill="#5b4230"/>
        <path d="M-19 176 q-22 8 -30 22 L30 198 q-12 -16 -30 -22 Z" fill="#4a3527"/>
        <path d="M-4 0 L-4 176" stroke="rgba(255,255,255,.10)" stroke-width="5"/></g>`;
    });
    /* Copas y matas de la selva, en tres tonos y por debajo de los iconos */
    [[86, 604, 1.1, "#2f7d3f", "#43a047"], [262, 648, .95, "#2b6f38", "#3f9740"],
     [452, 630, 1.02, "#33823f", "#4aa84a"], [636, 668, .9, "#2c7238", "#419a42"],
     [178, 698, .74, "#2a6c36", "#3d9440"], [560, 706, .78, "#2f7a3c", "#46a145"]].forEach(function (c) {
      if (!libre(c[0] - 96, c[1] - 92, 192, 130)) return;
      s += `<g transform="translate(${c[0]} ${c[1]}) scale(${c[2]})">
        <ellipse cx="-56" cy="-6" rx="58" ry="40" fill="${c[3]}"/><ellipse cx="58" cy="-10" rx="60" ry="42" fill="${c[3]}"/>
        <ellipse cx="0" cy="-44" rx="72" ry="48" fill="${c[4]}"/>
        <ellipse cx="-26" cy="-64" rx="38" ry="26" fill="${c[4]}" opacity=".8"/>
        <ellipse cx="34" cy="-58" rx="32" ry="22" fill="#5cb85c" opacity=".55"/></g>`;
    });
    /* Lianas que caen del borde de arriba, meciéndose muy despacio */
    s += `<g><animateTransform attributeName="transform" type="skewX" values="0;1.4;0;-1.4;0" dur="13s" repeatCount="indefinite"/>`;
    [[28, 420], [96, 316], [332, 262], [674, 398], [712, 292]].forEach(function (l) {
      if (!libre(l[0] - 16, 0, 32, l[1])) return;
      s += `<path d="M${l[0]} 0 q${l[0] % 2 ? 26 : -26} ${l[1] * 0.5} ${l[0] % 2 ? 8 : -8} ${l[1]}" stroke="#2f7d3f" stroke-width="7" fill="none" stroke-linecap="round"/>`;
      for (let i = 1; i < 5; i++) {
        const hy = (l[1] * i / 5).toFixed(0);
        s += `<ellipse cx="${l[0] + (l[0] % 2 ? 12 : -12)}" cy="${hy}" rx="13" ry="7" fill="#46a145" opacity=".85" transform="rotate(${l[0] % 2 ? 22 : -22} ${l[0]} ${hy})"/>`;
      }
    });
    s += `</g>`;
    /* Helechos y hojas grandes al pie de la selva */
    [[40, 800], [148, 812], [246, 802], [352, 814], [470, 804], [596, 816], [690, 800]].forEach(function (h) {
      if (!libre(h[0] - 52, h[1] - 70, 104, 78)) return;
      s += `<g transform="translate(${h[0]} ${h[1]})">`;
      [-58, -30, 0, 30, 58].forEach(function (a) {
        s += `<path d="M0 0 q${a * 0.7} -34 ${a * 1.1} -62" stroke="#2f8040" stroke-width="9" fill="none" stroke-linecap="round"/>`;
      });
      s += `<ellipse cx="0" cy="4" rx="26" ry="10" fill="#245f31" opacity=".7"/></g>`;
    });
    /* Niebla baja entre los árboles */
    s += `<ellipse cx="200" cy="700" rx="250" ry="52" fill="url(#anmXNiebla)"><animate attributeName="opacity" values=".75;.35;.75" dur="14s" repeatCount="indefinite"/></ellipse>
      <ellipse cx="560" cy="742" rx="230" ry="46" fill="url(#anmXNiebla)"><animate attributeName="opacity" values=".35;.8;.35" dur="17s" repeatCount="indefinite"/></ellipse>
      <ellipse cx="380" cy="642" rx="200" ry="38" fill="url(#anmXNiebla)" opacity=".5"/>`;

    /* ================= TRANSICIÓN SELVA A SABANA (700 a 800) ================= */
    s += `<path d="M690 790 Q740 726 800 774 Q846 736 890 782 L890 830 L690 830 Z" fill="#4f8b3d" opacity=".55"/>`;
    [[726, 786, .6], [788, 792, .52]].forEach(function (a) {
      if (!libre(a[0] - 70, a[1] - 90, 140, 96)) return;
      s += `<g transform="translate(${a[0]} ${a[1]}) scale(${a[2]})">
        <path d="M0 0 L10 -84 L34 -104" stroke="#6d4c33" stroke-width="16" fill="none" stroke-linecap="round"/>
        <ellipse cx="34" cy="-110" rx="104" ry="30" fill="#5f9a44"/><ellipse cx="10" cy="-124" rx="60" ry="20" fill="#6faa4c"/></g>`;
    });

    /* ================= SABANA (720 a 1450): acacias, hierba alta y colinas ================= */
    /* Colinas planas del horizonte */
    s += `<path d="M720 762 Q820 700 940 724 Q1030 742 1120 712 Q1240 674 1360 716 Q1420 736 1470 726 L1470 810 L720 810 Z" fill="#c9a95a" opacity=".45"/>
      <path d="M760 786 Q900 736 1020 766 Q1160 800 1300 758 Q1400 730 1470 754 L1470 830 L760 830 Z" fill="#c2a94f" opacity=".55"/>`;
    /* Acacias de copa plana, a distintas distancias */
    [[770, 800, .92, "#5f9a44", "#75b055"], [962, 792, .78, "#588f40", "#6ea850"],
     [1272, 784, 1, "#5c9642", "#72ad52"], [1420, 796, .84, "#54893d", "#6aa44e"],
     [1128, 806, .58, "#5f9a44", "#78b258"]].forEach(function (a) {
      if (!libre(a[0] - 118, a[1] - 152, 236, 158)) return;
      s += `<g transform="translate(${a[0]} ${a[1]}) scale(${a[2]})">
        <path d="M0 0 L8 -70 L-24 -110 M8 -70 L44 -108" stroke="#6d4c33" stroke-width="15" fill="none" stroke-linecap="round"/>
        <ellipse cx="8" cy="-118" rx="122" ry="32" fill="${a[3]}"/>
        <ellipse cx="-34" cy="-134" rx="62" ry="24" fill="${a[4]}"/>
        <ellipse cx="58" cy="-130" rx="54" ry="21" fill="${a[4]}"/>
        <ellipse cx="8" cy="-104" rx="96" ry="16" fill="rgba(60,90,40,.3)"/></g>`;
    });
    /* Hierba alta dorada, en tres grupos que se mecen a distinto compás */
    [[.9, 11], [1.1, 14], [.75, 9]].forEach(function (g, gi) {
      s += `<g><animateTransform attributeName="transform" type="skewX" values="0;${(2.4 * g[0]).toFixed(1)};0;${(-2.4 * g[0]).toFixed(1)};0" dur="${g[1]}s" repeatCount="indefinite"/>`;
      for (let x = 726 + gi * 22; x < 1470; x += 64) {
        const base = 800 + ((x * 7) % 22), alto = 52 + ((x * 13) % 40);
        if (!libre(x - 22, base - alto, 44, alto)) continue;
        s += `<path d="M${x} ${base} q-10 ${-alto * 0.6} -20 ${-alto} M${x + 6} ${base} q2 ${-alto * 0.7} 0 ${-alto - 10} M${x + 14} ${base} q10 ${-alto * 0.6} 22 ${-alto + 6}"
          stroke="${gi === 1 ? "#d8bb62" : "#c7a94f"}" stroke-width="5" fill="none" stroke-linecap="round" opacity=".9"/>`;
      }
      s += `</g>`;
    });
    /* Termiteros y matorrales secos */
    [[900, 806, 1], [1338, 812, .8], [1064, 800, .68]].forEach(function (t) {
      if (!libre(t[0] - 34, t[1] - 76, 68, 82)) return;
      s += `<g transform="translate(${t[0]} ${t[1]}) scale(${t[2]})">
        <path d="M-30 0 Q-22 -52 -6 -74 Q6 -86 14 -56 Q22 -30 30 0 Z" fill="#a9793f"/>
        <path d="M-8 0 Q-2 -44 6 -62" stroke="rgba(255,255,255,.25)" stroke-width="6" fill="none"/></g>`;
    });
    [[832, 814], [1180, 818], [1396, 810]].forEach(function (m) {
      if (!libre(m[0] - 34, m[1] - 40, 68, 46)) return;
      s += `<g transform="translate(${m[0]} ${m[1]})">
        <path d="M0 0 q-16 -20 -30 -26 M0 0 q-4 -26 -2 -38 M0 0 q16 -20 30 -28" stroke="#8d7135" stroke-width="6" fill="none" stroke-linecap="round"/>
        <ellipse cx="0" cy="0" rx="30" ry="9" fill="rgba(120,95,40,.28)"/></g>`;
    });
    /* Un charco de agua reflejando el cielo */
    s += `<ellipse cx="1210" cy="828" rx="118" ry="24" fill="#8fc7d8" opacity=".7"/>
      <ellipse cx="1210" cy="826" rx="96" ry="16" fill="#c2e4ee" opacity=".55"/>`;

    /* ================= TRANSICIÓN SABANA A POLO (1420 a 1520) ================= */
    s += `<path d="M1420 796 Q1470 756 1520 790 Q1560 764 1600 792 L1600 830 L1420 830 Z" fill="#b7c9a8" opacity=".6"/>`;

    /* ================= MONTAÑAS Y POLOS (1450 a 2080) ================= */
    /* Aurora tenue en lo alto, tres velos que van y vienen */
    [[1470, 92, 0.9, "18s", ".18;.5;.18"], [1660, 74, 1.1, "23s", ".42;.14;.42"], [1900, 108, .95, "20s", ".16;.44;.16"]].forEach(function (v) {
      s += `<path d="M${v[0]} 0 q${60 * v[2]} 90 ${10 * v[2]} 176 q${-56 * v[2]} 84 ${18 * v[2]} 168 L${v[0] + 148 * v[2]} 344 q${-58 * v[2]} -84 ${-4 * v[2]} -168 q${52 * v[2]} -86 ${-20 * v[2]} -176 Z"
        fill="url(#anmXAurora)" transform="translate(0 ${v[1] - 92})"><animate attributeName="opacity" values="${v[4]}" dur="${v[3]}" repeatCount="indefinite"/></path>`;
    });
    /* Cordillera del fondo, con nieve en las cumbres */
    s += `<path d="M1660 782 L1748 606 L1806 682 L1876 520 L1956 664 L2016 578 L2080 700 L2080 810 L1660 810 Z" fill="url(#anmXRoca)" opacity=".55"/>
      <path d="M1704 786 L1800 588 L1868 690 L1946 506 L2032 668 L2080 612 L2080 812 L1704 812 Z" fill="url(#anmXRoca)"/>
      <path d="M1770 634 L1800 588 L1832 636 Q1812 622 1798 634 Q1786 644 1770 634 Z" fill="#f4fafd"/>
      <path d="M1912 556 L1946 506 L1984 560 Q1960 544 1944 558 Q1928 570 1912 556 Z" fill="#f4fafd"/>
      <path d="M2054 646 L2080 612 L2080 660 Q2068 646 2054 646 Z" fill="#f4fafd"/>`;
    /* Pinos en la ladera, en los huecos donde de verdad se ven */
    [[1706, 796, .86], [1758, 806, .7], [1802, 794, .8], [1840, 808, .64], [1668, 808, .7], [2062, 812, .58]].forEach(function (p) {
      if (!libre(p[0] - 44 * p[2], p[1] - 136 * p[2], 88 * p[2], 142 * p[2])) return;
      s += `<g transform="translate(${p[0]} ${p[1]}) scale(${p[2]})">
        <rect x="-7" y="-22" width="14" height="26" rx="4" fill="#5d4433"/>
        <path d="M0 -132 L34 -74 L-34 -74 Z" fill="#2f6b46"/>
        <path d="M0 -108 L42 -40 L-42 -40 Z" fill="#357a4f"/>
        <path d="M0 -78 L48 -16 L-48 -16 Z" fill="#2f6b46"/>
        <path d="M0 -78 L48 -16 L-48 -16 Z" fill="rgba(255,255,255,.22)" opacity=".7"/></g>`;
    });
    /* El mar frío con su brillo, delante del hielo */
    s += `<path d="M1450 806 Q1560 786 1660 802 Q1740 814 1800 804 L1800 880 L1450 880 Z" fill="url(#anmXAguaFria)"/>`;
    s += `<g><animate attributeName="opacity" values=".8;.35;.8" dur="6.5s" repeatCount="indefinite"/>
      <path d="M1478 830 q22 -11 44 0 M1566 844 q22 -11 44 0 M1668 828 q22 -11 44 0 M1520 858 q22 -11 44 0"
        stroke="rgba(255,255,255,.7)" stroke-width="4" fill="none" stroke-linecap="round"/></g>`;
    /* Placas de hielo e icebergs del fondo, detrás de los del mapa original */
    s += `<path d="M1450 792 Q1520 770 1590 786 Q1660 800 1712 788 L1712 826 Q1620 842 1520 826 Q1478 818 1450 826 Z" fill="url(#anmXHielo)"/>
      <path d="M1486 788 L1534 700 L1584 788 Z" fill="#d6eef8"/>
      <path d="M1508 744 L1534 700 L1560 746 Q1544 736 1532 746 Q1520 754 1508 744 Z" fill="#ffffff"/>
      <path d="M1608 796 L1652 726 L1700 796 Z" fill="#c9e6f4"/>
      <path d="M1750 800 L1782 748 L1816 800 Z" fill="#dceff8" opacity=".9"/>`;
    /* Copos que bajan sin prisa sobre el hielo */
    s += `<g opacity=".8"><animateTransform attributeName="transform" type="translate" values="0 -18;0 26;0 -18" dur="16s" repeatCount="indefinite"/>`;
    for (let i = 0; i < 22; i++) {
      const cx = 1462 + ((i * 137) % 600), cy = 150 + ((i * 211) % 460);
      if (!libre(cx - 8, cy - 8, 16, 16)) continue;
      s += `<circle cx="${cx}" cy="${cy}" r="${2.4 + (i % 3)}" fill="rgba(255,255,255,.85)"/>`;
    }
    s += `</g>`;
    /* Rocas oscuras asomando del hielo */
    [[1618, 812], [1782, 818]].forEach(function (r) {
      if (!libre(r[0] - 32, r[1] - 34, 64, 40)) return;
      s += `<path d="M${r[0] - 30} ${r[1]} q10 -30 30 -32 q22 2 30 32 Z" fill="#77828c" opacity=".85"/>`;
    });

    /* ================= TRANSICIÓN POLO A DESIERTO (2040 a 2140) ================= */
    s += `<path d="M2040 802 Q2090 774 2140 800 Q2180 782 2220 804 L2220 840 L2040 840 Z" fill="#d9cfa6" opacity=".6"/>`;

    /* ================= DESIERTO (2080 a 2600): dunas, mesetas y calor ================= */
    /* Mesetas de roca al fondo, apoyadas en la cresta de las dunas */
    [[2116, 796, 132, 86], [2400, 806, 96, 74]].forEach(function (m) {
      if (!libre(m[0], m[1] - m[3], m[2], m[3] + 8)) return;
      s += `<path d="M${m[0]} ${m[1]} L${m[0] + 8} ${m[1] - m[3] + 10} L${m[0] + m[2] - 10} ${m[1] - m[3]} L${m[0] + m[2]} ${m[1]} Z" fill="#c58a55" opacity=".78"/>
        <path d="M${m[0] + 8} ${m[1] - m[3] + 10} L${m[0] + m[2] - 10} ${m[1] - m[3]}" stroke="#e2ac72" stroke-width="7"/>
        <path d="M${m[0] + 24} ${m[1]} L${m[0] + 30} ${m[1] - m[3] + 24}" stroke="rgba(120,70,35,.3)" stroke-width="6"/>`;
    });
    /* Un arco de piedra, gastado por el viento */
    if (libre(2248, 690, 116, 132)) {
      s += `<path d="M2256 814 L2256 726 Q2256 684 2306 682 Q2356 684 2356 730 L2356 814 L2326 814 L2326 736 Q2326 716 2306 716 Q2284 716 2284 738 L2284 814 Z" fill="#cf9159" opacity=".82"/>
        <path d="M2262 726 Q2262 692 2306 690 Q2350 692 2350 732" stroke="#e6b077" stroke-width="6" fill="none"/>
        <path d="M2266 814 L2270 760" stroke="rgba(120,70,35,.28)" stroke-width="6"/>`;
    }
    /* Tres capas de dunas, cada una un poco más clara */
    s += `<path d="M2080 812 Q2180 760 2290 800 Q2400 838 2500 792 Q2560 766 ${W} 794 L${W} 900 L2080 900 Z" fill="url(#anmXDunaA)" opacity=".9"/>
      <path d="M2080 848 Q2200 796 2320 838 Q2440 878 ${W} 830 L${W} 940 L2080 940 Z" fill="url(#anmXDunaB)" opacity=".92"/>
      <path d="M2080 812 Q2180 760 2290 800 Q2400 838 2500 792 Q2560 766 ${W} 794" stroke="rgba(255,255,255,.4)" stroke-width="5" fill="none"/>
      <path d="M2080 848 Q2200 796 2320 838 Q2440 878 ${W} 830" stroke="rgba(255,255,255,.28)" stroke-width="4" fill="none"/>`;
    /* Las marcas del viento sobre la arena */
    for (let i = 0; i < 9; i++) {
      const x = 2100 + i * 56, y = 862 + ((i * 29) % 24);
      s += `<path d="M${x} ${y} q30 -9 60 0" stroke="rgba(255,255,255,.24)" stroke-width="4" fill="none" stroke-linecap="round"/>`;
    }
    /* Arbustos secos y piedras */
    [[2168, 830, .9], [2338, 848, .78], [2470, 826, .84], [2560, 842, .7]].forEach(function (b) {
      if (!libre(b[0] - 34, b[1] - 50, 68, 56)) return;
      s += `<g transform="translate(${b[0]} ${b[1]}) scale(${b[2]})">
        <path d="M0 0 q-20 -18 -32 -26 M0 0 q-6 -28 -4 -44 M0 0 q18 -20 34 -30 M0 0 q8 -22 22 -30" stroke="#9c7c46" stroke-width="6" fill="none" stroke-linecap="round"/>
        <ellipse cx="0" cy="2" rx="30" ry="8" fill="rgba(150,110,55,.28)"/></g>`;
    });
    [[2252, 856], [2406, 866], [2536, 858]].forEach(function (r) {
      if (!libre(r[0] - 26, r[1] - 24, 52, 30)) return;
      s += `<path d="M${r[0] - 24} ${r[1]} q8 -22 24 -24 q18 2 24 24 Z" fill="#b98a53"/>
        <path d="M${r[0] - 10} ${r[1] - 14} q8 -8 16 -6" stroke="rgba(255,255,255,.3)" stroke-width="4" fill="none"/>`;
    });
    /* El aire que tiembla de calor, justo sobre la arena */
    s += `<rect x="2090" y="778" width="${Math.max(0, W - 2090)}" height="34" fill="url(#anmXCalor)">
      <animate attributeName="opacity" values=".55;.9;.55" dur="5.4s" repeatCount="indefinite"/></rect>
      <rect x="2130" y="822" width="${Math.max(0, W - 2130)}" height="26" fill="url(#anmXCalor)">
      <animate attributeName="opacity" values=".85;.4;.85" dur="6.8s" repeatCount="indefinite"/></rect>`;

    return s;
  }

  /* ==================================================================
     MUJERES INCREÍBLES
     El mapamundi merece marco de atlas antiguo: océano con textura de
     olas, rosa de los vientos dibujada, meridianos y paralelos muy
     tenues, cenefa en los bordes, barquitos, criaturas marinas
     simpáticas y estrellas de latón en las esquinas.
     Todo va por DEBAJO de los continentes y nunca los tapa.
     ================================================================== */

  function escenaIncreibles(e) {
    const W = (e && e.width) || 2600;
    const H = 1100;
    const cajas = cajasPoi((e && e.pois) || [], 92, 122, 44);
    const libre = hazLibre(cajas, 14);
    let s = "";

    /* ---------- DEGRADADOS Y PATRONES PROPIOS ---------- */
    s += `<defs>
      <linearGradient id="incXOceano" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#5fbceb"/><stop offset="34%" stop-color="#3f9fd8"/>
        <stop offset="72%" stop-color="#2b83c0"/><stop offset="100%" stop-color="#1d6ba3"/>
      </linearGradient>
      <radialGradient id="incXLuz" cx="50%" cy="34%" r="62%">
        <stop offset="0%" stop-color="#bfe8fa" stop-opacity=".45"/><stop offset="100%" stop-color="#bfe8fa" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="incXPergamino" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#f4e3bd"/><stop offset="52%" stop-color="#e4cd9c"/><stop offset="100%" stop-color="#cdb27b"/>
      </linearGradient>
      <radialGradient id="incXLaton" cx="38%" cy="34%" r="66%">
        <stop offset="0%" stop-color="#fff3cd"/><stop offset="54%" stop-color="#e8c169"/><stop offset="100%" stop-color="#a9822f"/>
      </radialGradient>
      <linearGradient id="incXRosa" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#fdf3d8"/><stop offset="100%" stop-color="#d9bd7f"/>
      </linearGradient>
      <linearGradient id="incXVela" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#fffaf0"/><stop offset="100%" stop-color="#e8dcc2"/>
      </linearGradient>
      <pattern id="incXOlitas" x="0" y="0" width="118" height="76" patternUnits="userSpaceOnUse">
        <path d="M14 30 q16 -12 32 0 q16 12 32 0" stroke="rgba(255,255,255,.22)" stroke-width="4" fill="none" stroke-linecap="round"/>
        <path d="M62 62 q16 -12 32 0 q16 12 32 0" stroke="rgba(255,255,255,.14)" stroke-width="4" fill="none" stroke-linecap="round"/>
      </pattern>
      <pattern id="incXProfundo" x="0" y="0" width="46" height="46" patternUnits="userSpaceOnUse">
        <circle cx="10" cy="12" r="2.2" fill="rgba(255,255,255,.10)"/>
        <circle cx="32" cy="34" r="1.8" fill="rgba(255,255,255,.08)"/>
      </pattern>
    </defs>`;

    /* ---------- EL OCÉANO: base, textura de olas y un poco de luz ---------- */
    s += `<rect x="0" y="0" width="${W}" height="${H}" fill="url(#incXOceano)"/>
      <rect x="0" y="0" width="${W}" height="${H}" fill="url(#incXProfundo)"/>
      <rect x="0" y="0" width="${W}" height="${H}" fill="url(#incXOlitas)"/>
      <ellipse cx="${W / 2}" cy="380" rx="${W * 0.46}" ry="360" fill="url(#incXLuz)">
        <animate attributeName="opacity" values=".85;.55;.85" dur="15s" repeatCount="indefinite"/></ellipse>`;

    /* ---------- MERIDIANOS Y PARALELOS, muy tenues ---------- */
    const tinta = "rgba(255,255,255,.16)";
    for (let y = 110; y < H - 60; y += 118) {
      s += `<line x1="34" y1="${y}" x2="${W - 34}" y2="${y}" stroke="${tinta}" stroke-width="2" stroke-dasharray="3 16"/>`;
    }
    /* Los meridianos van ligeramente curvados: así el plano parece un globo abierto */
    for (let x = 130; x < W - 60; x += 176) {
      const desvio = ((x - W / 2) / (W / 2)) * 54;
      s += `<path d="M${x} 40 Q${(x + desvio).toFixed(0)} ${H / 2} ${x} ${H - 40}" stroke="${tinta}" stroke-width="2" fill="none" stroke-dasharray="3 16"/>`;
    }
    /* Trópicos y ecuador, un pelín más marcados */
    [[368, ".22"], [585, ".30"], [802, ".22"]].forEach(function (l) {
      s += `<line x1="34" y1="${l[0]}" x2="${W - 34}" y2="${l[0]}" stroke="rgba(255,255,255,${l[1]})" stroke-width="3" stroke-dasharray="9 15"/>`;
    });

    /* ---------- LA ROSA DE LOS VIENTOS, en pleno Atlántico ---------- */
    const rx = 782, ry = 352, R = 116;
    /* Las líneas de rumbo salen de ella y se pierden bajo los continentes */
    let rumbos = "";
    for (let i = 0; i < 16; i++) {
      const a = i * Math.PI / 8;
      rumbos += `<line x1="${(rx + Math.cos(a) * R).toFixed(1)}" y1="${(ry + Math.sin(a) * R).toFixed(1)}"
        x2="${(rx + Math.cos(a) * 1400).toFixed(1)}" y2="${(ry + Math.sin(a) * 1400).toFixed(1)}"
        stroke="rgba(255,247,220,${i % 4 === 0 ? ".20" : ".11"})" stroke-width="${i % 4 === 0 ? 3 : 2}"/>`;
    }
    s += `<g>${rumbos}</g>`;
    s += `<g transform="translate(${rx} ${ry})">
      <circle r="${R + 14}" fill="rgba(12,60,96,.22)"/>
      <circle r="${R}" fill="none" stroke="rgba(253,243,216,.55)" stroke-width="4"/>
      <circle r="${R - 16}" fill="none" stroke="rgba(253,243,216,.32)" stroke-width="2"/>
      <circle r="${R - 52}" fill="none" stroke="rgba(253,243,216,.28)" stroke-width="2"/>`;
    /* Las marcas de grados del borde */
    for (let i = 0; i < 32; i++) {
      const a = i * Math.PI / 16, largo = i % 4 === 0 ? 15 : 8;
      s += `<line x1="${(Math.cos(a) * (R - largo)).toFixed(1)}" y1="${(Math.sin(a) * (R - largo)).toFixed(1)}"
        x2="${(Math.cos(a) * R).toFixed(1)}" y2="${(Math.sin(a) * R).toFixed(1)}" stroke="rgba(253,243,216,.5)" stroke-width="${i % 4 === 0 ? 4 : 2}"/>`;
    }
    /* La estrella de ocho puntas, con la aguja del norte en rojo, meciéndose apenas */
    s += `<g><animateTransform attributeName="transform" type="rotate" values="0;1.6;0;-1.6;0" dur="19s" repeatCount="indefinite"/>
      ${estrella(0, 0, 8, R - 30, 20, "rgba(253,243,216,.34)", 22.5)}
      ${estrella(0, 0, 4, R - 22, 24, "url(#incXRosa)", 45)}
      ${estrella(0, 0, 4, R - 10, 26, "url(#incXRosa)", 0)}
      <path d="M0 ${-(R - 10)} L21 0 L0 12 L-21 0 Z" fill="#f6f1e2"/>
      <path d="M0 ${-(R - 10)} L21 0 L0 0 Z" fill="#c9553f"/>
      <path d="M0 ${R - 10} L21 0 L0 0 Z" fill="#8a6a3a" opacity=".7"/>
      <circle r="13" fill="#e8c169"/><circle r="6" fill="#8a6a3a"/></g></g>`;

    /* ---------- BARQUITOS DE ATLAS: casco, velas y estela ---------- */
    const barco = function (x, y, k, giro, dur, banda) {
      return `<g transform="translate(${x} ${y}) scale(${k})">
        <g><animateTransform attributeName="transform" type="rotate" values="-2.6;2.6;-2.6" dur="${dur}s" repeatCount="indefinite"/>
        <path d="M-60 0 q-8 -14 4 -18 L58 -18 q12 4 4 18 Q10 22 -60 0 Z" fill="#8a5a33"/>
        <path d="M-52 -8 L54 -8" stroke="#b98a56" stroke-width="5"/>
        <rect x="-4" y="-118" width="8" height="102" rx="4" fill="#6f4526"/>
        <path d="M2 -112 Q64 -84 44 -26 L2 -26 Z" fill="url(#incXVela)"/>
        <path d="M-2 -104 Q-56 -78 -40 -30 L-2 -30 Z" fill="url(#incXVela)" opacity=".92"/>
        <path d="M4 -118 L46 -108 L4 -100 Z" fill="${banda}"/>
        <path d="M-46 4 q46 16 100 -2" stroke="rgba(255,255,255,.35)" stroke-width="4" fill="none" stroke-linecap="round"/></g>
        <path d="M-88 14 q40 12 82 4 M-70 30 q46 12 96 0" stroke="rgba(255,255,255,.32)" stroke-width="4" fill="none" stroke-linecap="round"
          transform="rotate(${giro})"/></g>`;
    };
    s += barco(148, 632, .82, -3, 6.4, "#c9553f");
    s += barco(946, 812, .7, 2, 7.6, "#3f7fa8");
    s += barco(1900, 892, .78, -2, 6.9, "#c9553f");
    s += barco(2438, 604, .66, 3, 8.4, "#4a8f5f");

    /* ---------- CRIATURAS MARINAS DE ATLAS ANTIGUO, todas simpáticas ---------- */
    /* La serpiente de mar: tres lomos, ojo grande y sonrisa */
    s += `<g transform="translate(700 872)">
      <g><animateTransform attributeName="transform" type="translate" values="0 0;0 -9;0 0" dur="7.2s" repeatCount="indefinite"/>
      <path d="M-150 24 q34 -54 68 0 q34 -54 68 0 q34 -54 68 0" stroke="#3f8f7c" stroke-width="26" fill="none" stroke-linecap="round"/>
      <path d="M-150 24 q34 -54 68 0 q34 -54 68 0 q34 -54 68 0" stroke="rgba(255,255,255,.22)" stroke-width="9" fill="none" stroke-linecap="round"/>
      <path d="M-186 6 q-16 -30 6 -46 q30 -18 46 8 q10 20 -6 34 Z" fill="#3f8f7c"/>
      <circle cx="-176" cy="-16" r="8.5" fill="#fdf6e6"/><circle cx="-174" cy="-15" r="4.2" fill="#22443c"/>
      <path d="M-190 2 q12 10 24 2" stroke="#22443c" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M-160 -40 q8 -16 20 -18 q-4 14 -8 20" fill="#7fd4b2"/>
      <path d="M60 12 q28 -22 46 -8 q-12 20 -34 22 Z" fill="#7fd4b2"/></g></g>`;
    /* La ballenita que resopla */
    s += `<g transform="translate(252 806)">
      <g><animateTransform attributeName="transform" type="translate" values="0 0;12 -7;0 0" dur="9.5s" repeatCount="indefinite"/>
      <path d="M-88 6 q22 -46 84 -42 q64 4 82 40 q-30 34 -84 34 q-56 0 -82 -32 Z" fill="#4f7fae"/>
      <path d="M-66 18 q42 20 96 4 q-18 20 -50 20 q-32 0 -46 -24 Z" fill="#a9cfe6"/>
      <path d="M74 6 q28 -24 46 -12 q-8 22 -28 30 Z" fill="#4f7fae"/>
      <circle cx="24" cy="-16" r="8" fill="#fdf6e6"/><circle cx="26" cy="-15" r="4" fill="#1f3d55"/>
      <path d="M6 4 q22 12 42 0" stroke="#1f3d55" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M14 -40 q-8 -30 4 -46 M14 -40 q10 -28 26 -40" stroke="rgba(255,255,255,.6)" stroke-width="6" fill="none" stroke-linecap="round">
        <animate attributeName="opacity" values=".85;.25;.85" dur="4.6s" repeatCount="indefinite"/></path></g></g>`;
    /* El pulpo risueño de las profundidades */
    s += `<g transform="translate(1620 828)">
      <g><animateTransform attributeName="transform" type="translate" values="0 0;0 10;0 0" dur="8.2s" repeatCount="indefinite"/>
      <path d="M-52 4 q0 -58 52 -58 q52 0 52 58 q-24 16 -52 16 q-28 0 -52 -16 Z" fill="#b0628f"/>
      <path d="M-46 10 q-16 34 -40 44 M-22 18 q-12 40 -30 56 M2 22 q0 42 -4 60 M26 18 q12 40 30 54 M48 10 q18 32 42 40"
        stroke="#b0628f" stroke-width="12" fill="none" stroke-linecap="round"/>
      <circle cx="-38" cy="66" r="6" fill="#c884ab"/><circle cx="-8" cy="82" r="6" fill="#c884ab"/>
      <circle cx="30" cy="80" r="6" fill="#c884ab"/><circle cx="62" cy="62" r="6" fill="#c884ab"/>
      <circle cx="-18" cy="-22" r="10" fill="#fdf6e6"/><circle cx="22" cy="-22" r="10" fill="#fdf6e6"/>
      <circle cx="-16" cy="-21" r="5" fill="#4a2338"/><circle cx="24" cy="-21" r="5" fill="#4a2338"/>
      <path d="M-14 -2 q16 14 32 0" stroke="#4a2338" stroke-width="4.5" fill="none" stroke-linecap="round"/>
      <circle cx="-34" cy="-6" r="7" fill="rgba(255,180,200,.5)"/><circle cx="38" cy="-6" r="7" fill="rgba(255,180,200,.5)"/></g></g>`;
    /* Un pez volador contento en el Pacífico */
    s += `<g transform="translate(2402 214)">
      <g><animateTransform attributeName="transform" type="translate" values="0 0;-14 -8;0 0" dur="6.8s" repeatCount="indefinite"/>
      <path d="M-44 0 q22 -26 56 -22 q34 4 44 22 q-18 20 -46 20 q-32 0 -54 -20 Z" fill="#4fb3c9"/>
      <path d="M-44 0 q-22 -18 -34 -20 q6 20 2 38 q16 -6 32 -18 Z" fill="#7fd4e2"/>
      <path d="M6 -22 q6 -26 26 -32 q0 18 -6 32 Z" fill="#7fd4e2"/>
      <circle cx="34" cy="-4" r="6.5" fill="#fdf6e6"/><circle cx="36" cy="-3" r="3.2" fill="#134a55"/>
      <path d="M22 8 q14 8 26 0" stroke="#134a55" stroke-width="3.5" fill="none" stroke-linecap="round"/></g></g>`;
    /* Un caballito de mar tranquilo cerca de Australia */
    s += `<g transform="translate(1770 700) scale(.9)">
      <path d="M0 0 q-22 -12 -22 -40 q0 -32 24 -34 q22 -2 26 18 q2 14 -12 18 q-10 2 -10 -6"
        stroke="#e2a24a" stroke-width="15" fill="none" stroke-linecap="round"/>
      <path d="M0 0 q-14 16 -2 30 q10 12 20 2" stroke="#e2a24a" stroke-width="12" fill="none" stroke-linecap="round"/>
      <circle cx="10" cy="-58" r="5" fill="#fdf6e6"/><circle cx="11" cy="-57" r="2.4" fill="#5b3c12"/>
      <path d="M-16 -50 q-12 6 -10 20 q8 -4 12 -12" fill="#f2c47e"/></g>`;

    /* Una tortuga marina que pasea sin prisa por el Pacífico */
    s += `<g transform="translate(2470 782) scale(.92)">
      <g><animateTransform attributeName="transform" type="translate" values="0 0;-10 6;0 0" dur="11s" repeatCount="indefinite"/>
      <path d="M-58 6 q-16 -18 -2 -28 q14 -8 24 4 M58 6 q16 -18 2 -28 q-14 -8 -24 4" fill="#5f9a6d"/>
      <path d="M-42 30 q-14 16 -4 26 q12 6 20 -8 M42 30 q14 16 4 26 q-12 6 -20 -8" fill="#5f9a6d"/>
      <ellipse cx="0" cy="6" rx="56" ry="42" fill="#4c8259"/>
      <ellipse cx="0" cy="6" rx="42" ry="30" fill="#6aa87a"/>
      <path d="M-30 6 h60 M0 -22 v56 M-22 -12 L22 24 M22 -12 L-22 24" stroke="#3d6b48" stroke-width="4" opacity=".7"/>
      <circle cx="0" cy="-48" r="17" fill="#5f9a6d"/>
      <circle cx="-7" cy="-52" r="4.4" fill="#fdf6e6"/><circle cx="7" cy="-52" r="4.4" fill="#fdf6e6"/>
      <circle cx="-6" cy="-51" r="2.2" fill="#25412e"/><circle cx="8" cy="-51" r="2.2" fill="#25412e"/>
      <path d="M-8 -42 q8 6 16 0" stroke="#25412e" stroke-width="3" fill="none" stroke-linecap="round"/></g></g>`;
    /* Un delfín saltando en el sur, contento */
    s += `<g transform="translate(1140 936) scale(.86)">
      <g><animateTransform attributeName="transform" type="translate" values="0 0;0 -14;0 0" dur="5.8s" repeatCount="indefinite"/>
      <path d="M-70 24 q10 -60 62 -66 q46 -6 74 22 q-8 24 -44 34 q-52 14 -92 10 Z" fill="#5f93bd"/>
      <path d="M-52 30 q40 12 84 -2 q-14 16 -46 18 q-28 0 -38 -16 Z" fill="#c6dff0"/>
      <path d="M-70 24 q-26 -14 -40 -4 q12 20 34 24 Z" fill="#5f93bd"/>
      <path d="M6 -30 q4 -22 20 -30 q0 18 -6 30 Z" fill="#4e82ac"/>
      <circle cx="46" cy="-14" r="6" fill="#fdf6e6"/><circle cx="47" cy="-13" r="3" fill="#173a54"/>
      <path d="M40 0 q14 8 24 -2" stroke="#173a54" stroke-width="3.5" fill="none" stroke-linecap="round"/></g>
      <path d="M-96 54 q52 16 116 2" stroke="rgba(255,255,255,.34)" stroke-width="5" fill="none" stroke-linecap="round"/></g>`;

    /* ---------- ARCHIPIÉLAGOS DE ADORNO: islitas con su orilla clara ---------- */
    [[690, 148, .9], [1050, 636, 1], [1548, 906, .86], [2318, 552, .95], [176, 372, .8]].forEach(function (a) {
      if (!libre(a[0] - 70, a[1] - 40, 140, 80)) return;
      s += `<g transform="translate(${a[0]} ${a[1]}) scale(${a[2]})">
        <ellipse cx="0" cy="0" rx="62" ry="30" fill="rgba(255,255,255,.14)"/>
        <ellipse cx="-22" cy="-4" rx="20" ry="11" fill="#c9b98a"/><ellipse cx="-22" cy="-6" rx="14" ry="7" fill="#8fc27a"/>
        <ellipse cx="16" cy="6" rx="15" ry="9" fill="#c9b98a"/><ellipse cx="16" cy="4" rx="10" ry="5" fill="#8fc27a"/>
        <ellipse cx="40" cy="-8" rx="9" ry="5.5" fill="#c9b98a"/></g>`;
    });

    /* ---------- CORRIENTES MARINAS: arcos de puntos con su punta de flecha ---------- */
    [[2286, 210, "q120 120 44 300", 2330, 500, 12],
     [860, 660, "q140 90 60 250", 908, 900, 8],
     [1600, 726, "q160 60 246 24", 1836, 744, -74]].forEach(function (c) {
      s += `<path d="M${c[0]} ${c[1]} ${c[2]}" stroke="rgba(255,247,220,.28)" stroke-width="4" fill="none" stroke-dasharray="14 16" stroke-linecap="round"/>
        <path d="M${c[3]} ${c[4]} l-16 -14 l24 -2 l-4 -22" stroke="rgba(255,247,220,.34)" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round" transform="rotate(${c[5]} ${c[3]} ${c[4]})"/>`;
    });

    /* ---------- ZONAS PROFUNDAS: manchas suaves que dan relieve al mar ---------- */
    [[300, 640, 150, 76], [1000, 500, 120, 62], [1720, 860, 170, 70], [2440, 400, 130, 66], [640, 960, 140, 54]].forEach(function (p) {
      if (!libre(p[0] - p[2], p[1] - p[3], p[2] * 2, p[3] * 2)) return;
      s += `<ellipse cx="${p[0]}" cy="${p[1]}" rx="${p[2]}" ry="${p[3]}" fill="rgba(12,60,96,.14)"/>
        <ellipse cx="${p[0]}" cy="${p[1]}" rx="${p[2] * 0.6}" ry="${p[3] * 0.6}" fill="rgba(12,60,96,.12)"/>`;
    });

    /* ---------- LA ESCALA DEL MAPA: la reglita de bloques alternos ---------- */
    s += `<g transform="translate(96 946)">
      <rect x="-8" y="-16" width="216" height="34" rx="7" fill="rgba(244,227,189,.28)"/>
      <rect x="0" y="-7" width="200" height="16" fill="none" stroke="rgba(253,243,216,.7)" stroke-width="3"/>`;
    for (let i = 0; i < 4; i++) {
      if (i % 2 === 0) s += `<rect x="${i * 50}" y="-7" width="50" height="16" fill="rgba(253,243,216,.7)"/>`;
    }
    s += `<path d="M0 -14 v-8 M100 -14 v-8 M200 -14 v-8" stroke="rgba(253,243,216,.6)" stroke-width="3" stroke-linecap="round"/></g>`;

    /* ---------- OLITAS SUELTAS, solo donde no molestan ---------- */
    const olas = [[120, 240], [220, 420], [92, 830], [330, 940], [640, 200], [700, 460], [880, 200],
      [960, 520], [740, 700], [1020, 700], [980, 940], [1180, 880], [1560, 700], [1720, 940],
      [1880, 620], [2040, 480], [2260, 640], [2440, 800], [2520, 380], [2300, 200], [1460, 940],
      [420, 700], [1240, 940], [2160, 900]];
    olas.forEach(function (o) {
      if (!libre(o[0] - 60, o[1] - 20, 120, 40)) return;
      s += `<path d="M${o[0]} ${o[1]} q22 -13 44 0 q22 13 44 0" stroke="rgba(255,255,255,.34)" stroke-width="5" fill="none" stroke-linecap="round"/>`;
    });
    /* Tres grupos de olas que suben y bajan de intensidad */
    [[".7;.3;.7", "8.5s", [[180, 560], [520, 880], [1040, 300]]],
     [".3;.7;.3", "10.5s", [[1380, 900], [1980, 760], [2360, 460]]],
     [".55;.2;.55", "12.5s", [[860, 380], [1740, 560], [2540, 700]]]].forEach(function (g) {
      let cuerpo = "";
      g[2].forEach(function (o) {
        if (!libre(o[0] - 60, o[1] - 20, 120, 40)) return;
        cuerpo += `<path d="M${o[0]} ${o[1]} q24 -14 48 0 q24 14 48 0" stroke="rgba(255,255,255,.5)" stroke-width="5" fill="none" stroke-linecap="round"/>`;
      });
      if (cuerpo) s += `<g><animate attributeName="opacity" values="${g[0]}" dur="${g[1]}" repeatCount="indefinite"/>${cuerpo}</g>`;
    });

    /* ---------- LA CENEFA DEL MARCO: banda de pergamino y greca ---------- */
    const banda = 34, dentro = 12;
    s += `<path d="M0 0 H${W} V${H} H0 Z M${banda} ${banda} V${H - banda} H${W - banda} V${banda} Z" fill="url(#incXPergamino)" fill-rule="evenodd"/>
      <rect x="4" y="4" width="${W - 8}" height="${H - 8}" fill="none" stroke="#8a6a3a" stroke-width="4"/>
      <rect x="${banda - 5}" y="${banda - 5}" width="${W - 2 * banda + 10}" height="${H - 2 * banda + 10}" fill="none" stroke="#8a6a3a" stroke-width="4"/>
      <rect x="${banda + dentro}" y="${banda + dentro}" width="${W - 2 * (banda + dentro)}" height="${H - 2 * (banda + dentro)}" fill="none" stroke="rgba(138,106,58,.45)" stroke-width="2"/>`;
    /* La greca: bloques alternos, como el neatline de los mapas antiguos */
    let greca = "";
    for (let x = 12; x < W - 12; x += 44) {
      const w = Math.min(22, W - 12 - x);
      greca += `<rect x="${x}" y="12" width="${w}" height="${banda - 20}" fill="#8a6a3a" opacity=".82"/>`;
      greca += `<rect x="${x + 22}" y="${H - banda + 8}" width="${Math.max(0, Math.min(22, W - 12 - x - 22))}" height="${banda - 20}" fill="#8a6a3a" opacity=".82"/>`;
    }
    for (let y = 12; y < H - 12; y += 44) {
      const h = Math.min(22, H - 12 - y);
      greca += `<rect x="12" y="${y + 22}" width="${banda - 20}" height="${Math.max(0, Math.min(22, H - 12 - y - 22))}" fill="#8a6a3a" opacity=".82"/>`;
      greca += `<rect x="${W - banda + 8}" y="${y}" width="${banda - 20}" height="${h}" fill="#8a6a3a" opacity=".82"/>`;
    }
    s += greca;
    /* Un cordón de cuentas por dentro de la cenefa */
    for (let x = banda + 26; x < W - banda; x += 52) s += `<circle cx="${x}" cy="${banda + dentro + 9}" r="3.6" fill="rgba(138,106,58,.5)"/><circle cx="${x}" cy="${H - banda - dentro - 9}" r="3.6" fill="rgba(138,106,58,.5)"/>`;
    for (let y = banda + 60; y < H - banda - 40; y += 52) s += `<circle cx="${banda + dentro + 9}" cy="${y}" r="3.6" fill="rgba(138,106,58,.5)"/><circle cx="${W - banda - dentro - 9}" cy="${y}" r="3.6" fill="rgba(138,106,58,.5)"/>`;

    /* Las marcas de grados del borde interior, como en los mapas de verdad */
    let marcas = "";
    for (let x = banda + dentro; x < W - banda - dentro; x += 26) {
      const largo = ((x - banda - dentro) % 130 === 0) ? 13 : 7;
      marcas += `<line x1="${x}" y1="${banda + dentro}" x2="${x}" y2="${banda + dentro + largo}" stroke="rgba(138,106,58,.55)" stroke-width="2.4"/>`;
      marcas += `<line x1="${x}" y1="${H - banda - dentro}" x2="${x}" y2="${H - banda - dentro - largo}" stroke="rgba(138,106,58,.55)" stroke-width="2.4"/>`;
    }
    for (let y = banda + dentro; y < H - banda - dentro; y += 26) {
      const largo = ((y - banda - dentro) % 130 === 0) ? 13 : 7;
      marcas += `<line x1="${banda + dentro}" y1="${y}" x2="${banda + dentro + largo}" y2="${y}" stroke="rgba(138,106,58,.55)" stroke-width="2.4"/>`;
      marcas += `<line x1="${W - banda - dentro}" y1="${y}" x2="${W - banda - dentro - largo}" y2="${y}" stroke="rgba(138,106,58,.55)" stroke-width="2.4"/>`;
    }
    s += marcas;

    /* ---------- LAS ESTRELLAS DE LATÓN DE LAS CUATRO ESQUINAS ---------- */
    [[banda + 44, banda + 44], [W - banda - 44, banda + 44], [banda + 44, H - banda - 44], [W - banda - 44, H - banda - 44]].forEach(function (c) {
      s += `<g transform="translate(${c[0]} ${c[1]})">
        <circle r="42" fill="rgba(138,106,58,.22)"/>
        <circle r="34" fill="none" stroke="rgba(232,193,105,.6)" stroke-width="3"/>
        ${estrella(0, 0, 8, 34, 12, "url(#incXLaton)", 22.5)}
        ${estrella(0, 0, 4, 30, 9, "#fff3cd", 0)}
        <circle r="7" fill="#a9822f"/><circle r="3" fill="#fff3cd"/></g>`;
    });
    /* Volutas sencillas en las esquinas, como las de los atlas */
    [[banda + 96, banda + 40, 1, 1], [W - banda - 96, banda + 40, -1, 1],
     [banda + 96, H - banda - 40, 1, -1], [W - banda - 96, H - banda - 40, -1, -1]].forEach(function (v) {
      s += `<path d="M0 0 q${34 * v[2]} ${-16 * v[3]} ${58 * v[2]} 0 q${20 * v[2]} ${14 * v[3]} ${44 * v[2]} 2"
        stroke="rgba(232,193,105,.5)" stroke-width="4" fill="none" stroke-linecap="round" transform="translate(${v[0]} ${v[1]})"/>`;
    });

    return s;
  }

  /* ==================================================================
     ENVOLTURA: lo nuevo detrás, lo de siempre delante, un solo <svg>
     ================================================================== */

  (function () {
    const orig = THEMES.animales.content.explore.deco;
    THEMES.animales.content.explore.deco = function (e) {
      const previo = orig ? orig.call(this, e) : "";
      const inner = previo.replace(/^[\s\S]*?<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "");
      return decoSvg(escenaAnimales(e) + inner, (e && e.width) || 2600);
    };
  })();

  (function () {
    const orig = THEMES.increibles.content.explore.deco;
    THEMES.increibles.content.explore.deco = function (e) {
      const previo = orig ? orig.call(this, e) : "";
      const inner = previo.replace(/^[\s\S]*?<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "");
      return decoSvg(escenaIncreibles(e) + inner, (e && e.width) || 2600);
    };
  })();

})();
