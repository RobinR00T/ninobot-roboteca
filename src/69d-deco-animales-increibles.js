"use strict";
/* ============================================================
   Escenografía de dos mapas de Explorar:
   ANIMALES DEL MUNDO y MUJERES INCREÍBLES.

   ANIMALES DEL MUNDO se dibuja entero aquí, para un lienzo ancho de
   4200 px con scroll horizontal (la deco antigua estaba calculada para
   2600 px y se descarta). El paisaje tiene tres planos: la sierra del
   fondo, la cresta de en medio, por la que se pasea el mapa y donde se
   posa casi todo el mundo, y el llano de delante. Entre hábitat y
   hábitat hay franjas de mezcla dibujadas: la hierba que se seca, la
   nieve que va cubriendo la roca y la arena que entra en cuña sobre el
   hielo, así que nunca hay una línea vertical dura.

   MUJERES INCREÍBLES es un mapamundi y va en tres capas: el océano de
   atlas antiguo detrás, los continentes en medio (los dibuja
   65-increibles-icons.js y no se tocan) y el marco de pergamino
   delante, para que la Antártida no se coma la cenefa.

   En los dos casos se devuelve UN SOLO <svg> (el que arma decoSvg) y
   los ids de degradados y patrones llevan prefijo propio (anmX... y
   incX...) para no chocar con ningún otro mapa.
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
     Un recorrido ANCHO por cuatro hábitats encadenados, pensado para
     que el mapa no quepa de una sola vez y haya que pasear a lo largo:
     selva, sabana, montañas y polo, y desierto.

     Entre hábitat y hábitat hay una FRANJA DE MEZCLA dibujada: la
     hierba se va llenando de acacias antes de la sabana, la hierba
     seca se convierte en pedregal y la roca se cubre de nieve antes
     del polo, y la nieve se deshace en charcos sobre la arena antes
     del desierto. El cielo y el suelo llevan un degradado horizontal
     con las paradas justo en esas franjas, así que el color cambia
     poco a poco y nunca de golpe.
     ================================================================== */

  function escenaAnimales(e) {
    const W = (e && e.width) || 4200;
    const H = 1100;
    const pois = (e && e.pois) || [];
    const cajas = cajasPoi(pois, 96, 132, 44);
    const libre = hazLibre(cajas, 14);
    /* hueco más justo para lo que queda muy por detrás (árboles del fondo,
       matas, pinos): si se reservara tanto como delante, el paisaje se
       llenaría de calvas alrededor de cada punto */
    const libreFino = hazLibre(cajasPoi(pois, 62, 84, 40), 6);
    let s = "";

    /* Fronteras de los siete tramos, en proporción al ancho:
       selva, mezcla, sabana, mezcla, montañas y polo, mezcla, desierto. */
    const F = function (r) { return Math.round(W * r); };
    const A1 = F(.281), A2 = F(.333), B1 = F(.581), B2 = F(.624), C1 = F(.829), C2 = F(.871);
    const pct = function (x) { return (x / W * 100).toFixed(1) + "%"; };
    const mez = function (a, b, t) { return a + (b - a) * t; };
    const n2 = function (v) { return Math.round(v * 10) / 10; };

    /* ---------- EL APOYO DE CADA PUNTO ----------
       Ningún punto de interés puede quedar en el aire: aquí se calcula la
       altura de la superficie donde se posa, que es el borde de abajo de
       su DIBUJO. No vale un número fijo: los iconos miden entre 24 px (el
       lagarto) y 143 px (la jirafa) de alto, y el motor los centra en el
       punto, así que la caja del icono acaba en p.y + ih/2. La tinta se
       queda todavía un poco más arriba (entre un 2 % y un 14 % de la caja,
       según el dibujo), y ese sobrante va medido en el navegador, animal a
       animal, en el último parámetro. Si falta, se usa la media: el 43 %
       de la caja. Si el punto se moviera, su apoyo se mueve con él. */
    const fichas = {};
    pois.forEach(function (p) { fichas[p.cat + "|" + p.emoji] = p; });
    const apoyo = function (clave, xx, yy, tinta) {
      const p = fichas[clave];
      const caja = (p && p.ih) ? p.ih : (((p && (p.size || 1) > 1) ? 108 : 88));
      return [p ? p.x : xx, (p ? p.y : yy) + (tinta || caja * 0.43)];
    };
    const aMono = apoyo("selva|\u{1F412}", 230, 430, 28.8),
      aTucan = apoyo("selva|\u{1F99C}", 520, 300, 16.6),
      aJaguar = apoyo("selva|\u{1F406}", 790, 560, 22.3),
      aRana = apoyo("selva|\u{1F438}", 1060, 400, 12.6),
      aLeon = apoyo("sabana|\u{1F981}", 1420, 520, 30.6),
      aElefante = apoyo("sabana|\u{1F418}", 1730, 380, 41.6),
      aJirafa = apoyo("sabana|\u{1F992}", 2020, 560, 64.2),
      aGuepardo = apoyo("sabana|\u{1F406}", 2300, 400, 19.1),
      aPingu = apoyo("polo|\u{1F427}", 2580, 600, 27.5),
      aOso = apoyo("polo|\u{1F43B}‍❄️", 2870, 430, 30.4),
      aAguila = apoyo("polo|\u{1F985}", 3150, 280, 18.8),
      aCabra = apoyo("polo|\u{1F410}", 3410, 520, 29.7),
      aCamello = apoyo("desierto|\u{1F42B}", 3630, 430, 32.1),
      aFenec = apoyo("desierto|\u{1F98A}", 3860, 620, 21),
      aLagarto = apoyo("desierto|\u{1F98E}", 4085, 460, 9);

    /* Perfil suave que pasa exactamente por una lista de puntos.
       Con esto la línea del terreno cose los apoyos sin escalones. */
    const perfil = function (lista) {
      const L = lista.slice().sort(function (a, b) { return a[0] - b[0]; });
      return function (x) {
        if (x <= L[0][0]) return L[0][1];
        for (let i = 1; i < L.length; i++) {
          if (x <= L[i][0]) {
            const a = L[i - 1], b = L[i], t = (x - a[0]) / (b[0] - a[0]);
            return a[1] + (b[1] - a[1]) * (0.5 - Math.cos(Math.PI * t) / 2);
          }
        }
        return L[L.length - 1][1];
      };
    };

    /* Tres planos de profundidad: la sierra del fondo, la cresta de en medio
       (donde se posan casi todos los animales) y el llano de delante. */
    const lejos = perfil([[-60, 712], [420, 646], [880, 680], [1280, 610], [1700, 540], [2160, 574],
      [2500, 486], [2760, 330], [3010, 238], [3180, 200], [3350, 268], [3580, 352], [3840, 442],
      [4080, 472], [W + 60, 502]]);
    const cresta = perfil([[-60, 900], [220, 884], [560, 876], [900, 886], [1150, 858],
      aElefante, aJirafa, [2170, 700], [2430, 790],
      aPingu, aOso, aAguila, aCabra, aCamello, aFenec, aLagarto, [W + 60, 552]]);
    const suelo = function (x) { return 916 + 9 * Math.sin(x / 240) + 5 * Math.sin(x / 85); };

    /* El mismo perfil, bajado unos píxeles: sirve para pintar justo debajo */
    const bajado = function (f, dy) { return function (x) { return f(x) + dy; }; };
    /* Convierte un perfil en una línea de puntos */
    const linea = function (f, x0, x1, paso) {
      let d = "M" + n2(x0) + " " + n2(f(x0));
      for (let x = x0 + paso; x < x1; x += paso) d += " L" + n2(x) + " " + n2(f(x));
      return d + " L" + n2(x1) + " " + n2(f(x1));
    };
    /* Franja que sigue un perfil y se cierra por debajo con borde ondulado:
       así un material se funde con el siguiente sin línea recta. */
    const banda = function (f, x0, x1, hondo, amp, frec, paso) {
      const p = paso || 24;
      let d = linea(f, x0, x1, p);
      for (let x = x1; x >= x0; x -= p) d += " L" + n2(x) + " " + n2(f(x) + hondo + amp * Math.sin(x / frec));
      return d + " Z";
    };

    /* ---------- DEGRADADOS PROPIOS (prefijo anmX, únicos en todo src) ---------- */
    s += `<defs>
      <linearGradient id="anmXCieloAlto" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#8fd0ee"/><stop offset="46%" stop-color="#cfeaf6"/><stop offset="100%" stop-color="#f4eedd"/>
      </linearGradient>
      <linearGradient id="anmXClima" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="${W}" y2="0">
        <stop offset="0%" stop-color="#1f6d47" stop-opacity=".50"/>
        <stop offset="${pct(A1)}" stop-color="#5c9a4e" stop-opacity=".36"/>
        <stop offset="${pct(A2)}" stop-color="#dcbc63" stop-opacity=".36"/>
        <stop offset="${pct((A2 + B1) / 2)}" stop-color="#efc871" stop-opacity=".42"/>
        <stop offset="${pct(B1)}" stop-color="#d6cf95" stop-opacity=".32"/>
        <stop offset="${pct(B2)}" stop-color="#b6d7e8" stop-opacity=".34"/>
        <stop offset="${pct((B2 + C1) / 2)}" stop-color="#a3cee6" stop-opacity=".42"/>
        <stop offset="${pct(C1)}" stop-color="#cddbe4" stop-opacity=".28"/>
        <stop offset="${pct(C2)}" stop-color="#efd39a" stop-opacity=".34"/>
        <stop offset="100%" stop-color="#e39c4e" stop-opacity=".50"/>
      </linearGradient>
      <linearGradient id="anmXLejano" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="${W}" y2="0">
        <stop offset="0%" stop-color="#5f9a6d"/>
        <stop offset="${pct(A1)}" stop-color="#79a86f"/>
        <stop offset="${pct(A2)}" stop-color="#a9b581"/>
        <stop offset="${pct(B1)}" stop-color="#c6c398"/>
        <stop offset="${pct(B2)}" stop-color="#bdc9d6"/>
        <stop offset="${pct(C1)}" stop-color="#d9e6ee"/>
        <stop offset="${pct(C2)}" stop-color="#dfbf95"/>
        <stop offset="100%" stop-color="#d6a877"/>
      </linearGradient>
      <linearGradient id="anmXCresta" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="${W}" y2="0">
        <stop offset="0%" stop-color="#2f7038"/>
        <stop offset="${pct(A1)}" stop-color="#4a8339"/>
        <stop offset="${pct(A2)}" stop-color="#87973f"/>
        <stop offset="${pct((A2 + B1) / 2)}" stop-color="#ab9c4d"/>
        <stop offset="${pct(B1)}" stop-color="#b6ab63"/>
        <stop offset="${pct(B2)}" stop-color="#c2cbc4"/>
        <stop offset="${pct((B2 + C1) / 2)}" stop-color="#cfdde6"/>
        <stop offset="${pct(C1)}" stop-color="#dfe9ef"/>
        <stop offset="${pct(C2)}" stop-color="#d8b075"/>
        <stop offset="100%" stop-color="#cf9a56"/>
      </linearGradient>
      <linearGradient id="anmXLlano" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="${W}" y2="0">
        <stop offset="0%" stop-color="#25602e"/>
        <stop offset="${pct(A2)}" stop-color="#7b8a3a"/>
        <stop offset="${pct(B1)}" stop-color="#bda65c"/>
        <stop offset="${pct(B2)}" stop-color="#cbd6cf"/>
        <stop offset="${pct(C1)}" stop-color="#e6f1f6"/>
        <stop offset="${pct(C2)}" stop-color="#e0b877"/>
        <stop offset="100%" stop-color="#d9a257"/>
      </linearGradient>
      <linearGradient id="anmXPrimero" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="${W}" y2="0">
        <stop offset="0%" stop-color="#14401c"/>
        <stop offset="${pct(A2)}" stop-color="#4f5c26"/>
        <stop offset="${pct(B1)}" stop-color="#87762f"/>
        <stop offset="${pct(B2)}" stop-color="#93a8b4"/>
        <stop offset="${pct(C1)}" stop-color="#c3dae6"/>
        <stop offset="${pct(C2)}" stop-color="#b57e3c"/>
        <stop offset="100%" stop-color="#a06730"/>
      </linearGradient>
      <linearGradient id="anmXHondo" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#0d2410" stop-opacity="0"/><stop offset="100%" stop-color="#0d2410" stop-opacity=".34"/>
      </linearGradient>
      <linearGradient id="anmXNieveMezcla" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="${W}" y2="0">
        <stop offset="${pct(B2 - 340)}" stop-color="#f7fdff" stop-opacity="0"/>
        <stop offset="${pct(B2 + 40)}" stop-color="#f7fdff" stop-opacity=".9"/>
        <stop offset="${pct(C1)}" stop-color="#ffffff" stop-opacity=".96"/>
        <stop offset="${pct(C2 + 130)}" stop-color="#ffffff" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="anmXArenaMezcla" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="${W}" y2="0">
        <stop offset="${pct(C1 - 210)}" stop-color="#eec489" stop-opacity="0"/>
        <stop offset="${pct(C2)}" stop-color="#eec489" stop-opacity=".85"/>
        <stop offset="100%" stop-color="#e8b76e" stop-opacity=".9"/>
      </linearGradient>
      <linearGradient id="anmXHierbaMezcla" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="${W}" y2="0">
        <stop offset="${pct(A1 - 220)}" stop-color="#6ea24a" stop-opacity="0"/>
        <stop offset="${pct(A2 + 60)}" stop-color="#9db14f" stop-opacity=".7"/>
        <stop offset="${pct(B1)}" stop-color="#c9b45f" stop-opacity=".7"/>
        <stop offset="${pct(B2 + 60)}" stop-color="#c9b45f" stop-opacity="0"/>
      </linearGradient>
      <radialGradient id="anmXSol" cx="46%" cy="42%" r="58%">
        <stop offset="0%" stop-color="#fffdf0"/><stop offset="62%" stop-color="#ffe082"/><stop offset="100%" stop-color="#ffb74d"/>
      </radialGradient>
      <radialGradient id="anmXNiebla" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity=".55"/><stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="anmXBruma" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0"/><stop offset="54%" stop-color="#ffffff" stop-opacity=".5"/>
        <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="anmXAurora" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#7ef0c2" stop-opacity="0"/><stop offset="42%" stop-color="#6fe4b6" stop-opacity=".34"/>
        <stop offset="72%" stop-color="#a78bd6" stop-opacity=".22"/><stop offset="100%" stop-color="#a78bd6" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="anmXAguaFria" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#9fd4ea"/><stop offset="100%" stop-color="#3f89b5"/>
      </linearGradient>
      <linearGradient id="anmXHielo" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#bde3f2"/>
      </linearGradient>
      <linearGradient id="anmXPenon" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#7c8b98" stop-opacity=".62"/><stop offset="62%" stop-color="#8c99a5" stop-opacity=".34"/>
        <stop offset="100%" stop-color="#9aa7b3" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="anmXRoca" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#9aa7b3"/><stop offset="100%" stop-color="#5d6b78"/>
      </linearGradient>
      <linearGradient id="anmXTronco" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#6b5140"/><stop offset="42%" stop-color="#4e3a2c"/><stop offset="100%" stop-color="#33251c"/>
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
      <linearGradient id="anmXCharco" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#d8f0f8"/><stop offset="100%" stop-color="#8dbfd6"/>
      </linearGradient>
    </defs>`;

    /* ---------- EL CIELO: base vertical y tinte de clima a lo largo ---------- */
    s += `<rect x="0" y="0" width="${W}" height="${H}" fill="url(#anmXCieloAlto)"/>
      <rect x="0" y="0" width="${W}" height="${H}" fill="url(#anmXClima)"/>`;

    /* El sol grande, plantado sobre la sabana */
    const solX = Math.round(mez(A2, B1, .34));
    s += `<g transform="translate(${solX} 150)">
      <circle r="190" fill="rgba(255,224,130,.16)"><animate attributeName="r" values="190;208;190" dur="12s" repeatCount="indefinite"/></circle>
      <circle r="132" fill="rgba(255,236,170,.24)"/>
      <circle r="96" fill="url(#anmXSol)"/>
      <circle cx="-30" cy="-30" r="21" fill="rgba(255,255,255,.5)"/></g>`;

    /* Nubes lentas: espesas sobre la selva y la sabana, finas en el polo */
    const nube = function (x, y, k, col) {
      return `<g transform="translate(${x} ${y}) scale(${k})" fill="${col}">
        <ellipse cx="0" cy="0" rx="92" ry="32"/><ellipse cx="-58" cy="11" rx="48" ry="22"/>
        <ellipse cx="52" cy="13" rx="54" ry="24"/><ellipse cx="-8" cy="-24" rx="50" ry="28"/></g>`;
    };
    for (let i = 0; i < 9; i++) {
      const x = Math.round(W * (0.04 + i * 0.112)), y = 84 + ((i * 47) % 96);
      const k = 0.62 + ((i * 13) % 5) * 0.09, op = (0.44 + ((i * 7) % 4) * 0.11).toFixed(2);
      const col = x < A2 ? "#ffffff" : (x < B2 ? "#fffdf4" : (x < C2 ? "#f4fbff" : "#fff6e8"));
      s += `<g opacity="${op}"><animateTransform attributeName="transform" type="translate" values="0 0;${44 + (i % 4) * 14} 0;0 0" dur="${40 + (i % 5) * 7}s" repeatCount="indefinite"/>${nube(x, y, k.toFixed(2), col)}</g>`;
    }
    /* Cirros finos sobre las montañas */
    for (let i = 0; i < 5; i++) {
      const x = Math.round(mez(B2 - 120, C1, i / 4)), y = 150 + ((i * 53) % 80), largo = 150 + (i % 3) * 60;
      s += `<path d="M${x} ${y} q${largo / 2} -18 ${largo} 0" stroke="rgba(255,255,255,.5)" stroke-width="9" fill="none" stroke-linecap="round"/>
        <path d="M${x + 30} ${y + 22} q${largo / 2.6} -14 ${n2(largo * 0.7)} 0" stroke="rgba(255,255,255,.34)" stroke-width="6" fill="none" stroke-linecap="round"/>`;
    }

    /* La aurora del norte, tres velos muy tenues sobre el polo */
    [[.16, 86, 0.9, "18s", ".16;.44;.16"], [.46, 70, 1.1, "23s", ".38;.12;.38"], [.76, 102, .95, "20s", ".14;.4;.14"]].forEach(function (v) {
      const x0 = Math.round(mez(B2, C1, v[0]));
      s += `<path d="M${x0} 0 q${n2(60 * v[2])} 90 ${n2(10 * v[2])} 176 q${n2(-56 * v[2])} 84 ${n2(18 * v[2])} 168 L${n2(x0 + 148 * v[2])} 344 q${n2(-58 * v[2])} -84 ${n2(-4 * v[2])} -168 q${n2(52 * v[2])} -86 ${n2(-20 * v[2])} -176 Z"
        fill="url(#anmXAurora)" transform="translate(0 ${v[1] - 92})"><animate attributeName="opacity" values="${v[4]}" dur="${v[3]}" repeatCount="indefinite"/></path>`;
    });

    /* Pájaros lejanos y uno que cruza el mapa entero de punta a punta */
    for (let i = 0; i < 8; i++) {
      const x = Math.round(W * (0.07 + i * 0.116)), y = 210 + ((i * 61) % 80);
      s += `<path d="M${x} ${y} q-12 -11 -25 -6 M${x} ${y} q12 -11 25 -6" stroke="rgba(70,95,115,.42)" stroke-width="3.4" fill="none" stroke-linecap="round"/>`;
    }
    s += `<g><path d="M0 0 q-14 -12 -29 -6 M0 0 q14 -12 29 -6" stroke="rgba(60,85,105,.55)" stroke-width="4" fill="none" stroke-linecap="round">
      <animate attributeName="d" values="M0 0 q-14 -12 -29 -6 M0 0 q14 -12 29 -6;M0 0 q-14 6 -29 12 M0 0 q14 6 29 12;M0 0 q-14 -12 -29 -6 M0 0 q14 -12 29 -6" dur="1.9s" repeatCount="indefinite"/></path>
      <animateMotion dur="82s" repeatCount="indefinite" path="M ${Math.round(W * .03)} 168 Q ${Math.round(W * .26)} 100 ${Math.round(W * .5)} 162 Q ${Math.round(W * .74)} 220 ${Math.round(W * .97)} 142"/></g>`;

    /* ================================================================
       PLANO DE FONDO: la sierra lejana, la misma línea de punta a punta.
       Cambia de material despacio (cerros de selva, mesetas doradas,
       cumbres nevadas y mesas del desierto) sin ningún corte recto.
       ================================================================ */
    const dLejos = linea(lejos, -60, W + 60, 26);
    s += `<path d="${dLejos} L${W + 60} ${H} L-60 ${H} Z" fill="url(#anmXLejano)" opacity=".62"/>`;
    /* nieve en las cumbres del fondo, con el borde de abajo ondulado */
    s += `<path d="${banda(lejos, B2 - 280, C2 + 60, 96, 22, 190, 26)}" fill="url(#anmXNieveMezcla)" opacity=".8"/>`;
    /* copas apretadas en los cerros del fondo de la selva */
    for (let i = 0; i < 26; i++) {
      const x = Math.round(mez(-40, A2 + 180, i / 25)), y = n2(lejos(x) + 10 + ((i * 29) % 26));
      s += `<ellipse cx="${x}" cy="${y}" rx="${44 + (i % 3) * 12}" ry="${24 + (i % 2) * 8}" fill="#4d8f60" opacity=".38"/>`;
    }
    /* la bruma que separa el fondo del plano de en medio */
    s += `<rect x="0" y="386" width="${W}" height="420" fill="url(#anmXBruma)" opacity=".5"/>`;

    /* ================================================================
       PLANO DE EN MEDIO: la cresta por la que se pasea el mapa. Pasa
       exactamente por debajo de casi todos los puntos de interés.
       ================================================================ */
    const dCresta = linea(cresta, -60, W + 60, 22);
    s += `<path d="${dCresta} L${W + 60} ${H} L-60 ${H} Z" fill="url(#anmXCresta)"/>
      <path d="${dCresta} L${W + 60} ${H} L-60 ${H} Z" fill="url(#anmXHondo)"/>`;
    /* mantos que se funden unos con otros: hierba, nieve y arena */
    s += `<path d="${banda(cresta, A1 - 240, B2 + 80, 54, 11, 150, 24)}" fill="url(#anmXHierbaMezcla)"/>`;
    s += `<path d="${banda(cresta, B2 - 360, C2 + 150, 70, 15, 165, 22)}" fill="url(#anmXNieveMezcla)"/>`;
    s += `<path d="${banda(cresta, C1 - 230, W + 60, 62, 13, 180, 24)}" fill="url(#anmXArenaMezcla)"/>`;
    s += `<path d="${dCresta}" stroke="rgba(255,255,255,.34)" stroke-width="5" fill="none"/>`;

    /* Texturas de la cresta: vetas de roca en el frío, rayas de viento en la
       arena y matas de hierba en la sabana. Cada una solo en su tramo. */
    for (let i = 0; i < 16; i++) {
      const x = Math.round(mez(B2 - 120, C1 + 90, i / 15)), y = n2(cresta(x) + 60 + ((i * 37) % 90));
      s += `<path d="M${x} ${y} q46 -14 96 -4" stroke="rgba(70,90,108,.22)" stroke-width="6" fill="none" stroke-linecap="round"/>`;
    }
    for (let i = 0; i < 22; i++) {
      const x = Math.round(mez(C1 - 60, W - 40, i / 21)), y = n2(cresta(x) + 46 + ((i * 53) % 130));
      s += `<path d="M${x} ${y} q34 -11 70 -2" stroke="rgba(255,255,255,.26)" stroke-width="5" fill="none" stroke-linecap="round"/>`;
    }
    [[.9, 12], [1.1, 15]].forEach(function (g, gi) {
      let cuerpo = "";
      for (let x = A2 - 60 + gi * 46; x < B1 + 60; x += 92) {
        const base = n2(cresta(x) + 26 + ((x * 7) % 40)), alto = 34 + ((x * 13) % 26);
        if (!libre(x - 22, base - alto, 44, alto)) continue;
        cuerpo += `<path d="M${x} ${base} q-8 ${-alto * 0.6} -16 ${-alto} M${x + 6} ${base} q2 ${-alto * 0.7} 0 ${-alto - 8} M${x + 13} ${base} q8 ${-alto * 0.6} 18 ${-alto + 5}"
          stroke="${gi === 1 ? "#d8bb62" : "#c2a54c"}" stroke-width="4.5" fill="none" stroke-linecap="round" opacity=".85"/>`;
      }
      if (cuerpo) s += `<g><animateTransform attributeName="transform" type="skewX" values="0;${(2.2 * g[0]).toFixed(1)};0;${(-2.2 * g[0]).toFixed(1)};0" dur="${g[1]}s" repeatCount="indefinite"/>${cuerpo}</g>`;
    });

    /* Matas y piedras dentro de la ladera de la sabana: la loma no puede ser
       una mancha lisa de color. */
    for (let i = 0; i < 30; i++) {
      const x = Math.round(mez(A1 - 160, B2 - 40, i / 29)), y = n2(cresta(x) + 84 + ((i * 61) % 250));
      if (y > suelo(x) - 34 || !libreFino(x - 40, y - 34, 80, 44)) continue;
      s += `<path d="M${x} ${y} q-10 -18 -20 -30 M${x + 7} ${y} q1 -20 0 -34 M${x + 15} ${y} q10 -18 22 -28"
        stroke="rgba(112,132,54,.6)" stroke-width="6" fill="none" stroke-linecap="round"/>`;
    }
    for (let i = 0; i < 7; i++) {
      const x = Math.round(mez(A1, B1, i / 6) + 90), y = n2(cresta(x) + 150 + ((i * 47) % 190));
      if (y > suelo(x) - 40 || !libreFino(x - 40, y - 30, 80, 40)) continue;
      const r = 18 + (i % 3) * 9;
      s += `<path d="M${x - r} ${y} q${n2(r * .35)} ${-r * 1.05} ${r} ${-r * 1.1} q${n2(r * .7)} ${n2(r * .05)} ${r} ${r * 1.1} Z" fill="rgba(132,112,54,.55)"/>
        <path d="M${n2(x - r * .3)} ${n2(y - r * .5)} q${n2(r * .5)} ${n2(-r * .3)} ${n2(r * .9)} ${n2(-r * .1)}" stroke="rgba(255,255,255,.2)" stroke-width="4" fill="none"/>`;
    }
    /* la vereda que baja de la loma hasta el llano */
    s += `<path d="M${aElefante[0] + 60} ${n2(cresta(aElefante[0] + 60) + 40)} Q${aElefante[0] + 210} ${n2(cresta(aElefante[0] + 210) + 150)} ${aJirafa[0] + 60} ${n2(cresta(aJirafa[0] + 60) + 120)}
      Q${aJirafa[0] + 260} ${n2(suelo(aJirafa[0] + 260) - 90)} ${aJirafa[0] + 420} ${n2(suelo(aJirafa[0] + 420) - 6)}"
      stroke="rgba(255,246,214,.22)" stroke-width="13" fill="none" stroke-linecap="round"/>`;
    /* paredes de roca asomando bajo la nieve de la montaña */
    for (let i = 0; i < 6; i++) {
      const x = Math.round(mez(B2 + 40, C1 - 30, i / 5)), y0 = n2(cresta(x));
      const w = 58 + (i % 3) * 30, h = 140 + (i % 4) * 80;
      if (!libre(x - w, y0, w * 2, h)) continue;
      s += `<path d="M${x - w} ${n2(y0 + h)} L${n2(x - w * .34)} ${n2(y0 + 44)} L${x} ${n2(y0 + 28)} L${n2(x + w * .46)} ${n2(y0 + 56)} L${x + w} ${n2(y0 + h + 24)} Z"
        fill="url(#anmXRoca)" opacity=".24"/>`;
    }

    /* La ladera que baja de la cumbre del águila hacia el collado de la cabra
       era la mancha más lisa del mapa. Aquí bajan sus espolones de roca (la
       arista al sol y la cara en sombra), con neveros colgados entre ellos y
       algún risco asomando: la montaña deja de ser una plancha gris. */
    (function () {
      const ini = aOso[0] + 110, fin = aCabra[0] + 120;
      /* estratos: tramos de roca que siguen la caída de la ladera, cortados a
         trozos para que no crucen el monte de lado a lado ni pisen los puntos */
      for (let i = 0; i < 7; i++) {
        const d = 64 + i * 58, amp = 9 + (i % 3) * 7, fase = i * 1.27;
        const f = function (xx) { return cresta(xx) + d + amp * Math.sin(xx / 96 + fase); };
        for (let px = ini + (i % 3) * 46; px < fin; px += 138) {
          const largo = 84 + ((i * 37 + px) % 70);
          if (!libreFino(px, f(px) - 18, largo, 36)) continue;
          s += `<path d="${linea(f, px, px + largo, 26)}" stroke="${i % 2 ? "rgba(255,255,255,.24)" : "rgba(72,92,112,.17)"}"
            stroke-width="${6 + (i % 3) * 3}" fill="none" stroke-linecap="round"/>`;
        }
      }
      /* neveros: rayas de nieve tumbadas sobre los estratos, con las puntas
         redondeadas, nunca manchas sueltas ni cantos rectos */
      [[.14, 96, 46, 40], [.4, 210, 58, 52], [.63, 152, 40, 34], [.86, 292, 52, 44]].forEach(function (v) {
        const px = Math.round(mez(ini, fin, v[0])), w = v[2], grueso = v[3];
        const f = function (xx) { return cresta(xx) + v[1] + 7 * Math.sin(xx / 70); };
        if (!libreFino(px - w, f(px) - grueso, w * 2, grueso * 2)) return;
        s += `<path d="${linea(f, px - w, px + w, 24)}" stroke="#eef7fc" stroke-width="${grueso}" fill="none"
          stroke-linecap="round" opacity=".38"/>
          <path d="${linea(bajado(f, -grueso * .2), px - w * .6, px + w * .66, 24)}" stroke="#ffffff" stroke-width="${n2(grueso * .34)}"
          fill="none" stroke-linecap="round" opacity=".3"/>`;
      });
      /* dos riscos asomando entre la nieve, tumbados como la propia ladera */
      [[.28, 244, 62], [.7, 196, 48]].forEach(function (v) {
        const px = Math.round(mez(ini, fin, v[0])), cy = n2(cresta(px) + v[1]), w = v[2];
        if (!libreFino(px - w, cy - w * .8, w * 2, w * 1.6)) return;
        s += `<path d="M${n2(px - w)} ${n2(cy + w * .3)} Q${n2(px - w * .74)} ${n2(cy - w * .3)} ${n2(px - w * .34)} ${n2(cy - w * .5)}
          Q${n2(px - w * .06)} ${n2(cy - w * .6)} ${n2(px + w * .18)} ${n2(cy - w * .26)}
          Q${n2(px + w * .5)} ${n2(cy - w * .5)} ${n2(px + w)} ${n2(cy + w * .38)}
          Q${px} ${n2(cy + w * .58)} ${n2(px - w)} ${n2(cy + w * .3)} Z" fill="#77879a" opacity=".3"/>
          <path d="M${n2(px - w * .34)} ${n2(cy - w * .5)} Q${n2(px - w * .06)} ${n2(cy - w * .6)} ${n2(px + w * .18)} ${n2(cy - w * .26)}"
          stroke="rgba(255,255,255,.5)" stroke-width="5" fill="none" stroke-linecap="round"/>`;
      });
    })();

    /* ================================================================
       LOS APOYOS, uno por punto de interés. Cada animal se posa sobre
       una piedra, una repisa, una cresta de duna o una rama.
       ================================================================ */
    /* Repisa apoyada en la ladera: la cara de arriba queda a la altura exacta
       del punto y por debajo la pieza se recorta contra el terreno. Donde la
       ladera ya sube más alta, la repisa se adelgaza y desaparece: así no
       queda ningún canto suelto en el aire. */
    const repisa = function (x, y, izq, der, grosor, cA, cB, veta) {
      /* el grueso se va afilando hacia los dos extremos (de ahí el 1 - t*t):
         donde la ladera sube por detrás, la pieza acaba en punta y se mete en
         el monte, en vez de dejar un canto recto y una esquina en ángulo recto
         colgados sobre la pendiente */
      const pie = function (xx) {
        const t = Math.min(1, xx < x ? (x - xx) / izq : (xx - x) / der);
        return n2(Math.max(cresta(xx) + 6, y + grosor * (1 - t * t)));
      };
      /* sombra de asiento: solo donde la pieza vuela por delante del monte
         (si la siguiera por la ladera abajo dejaría una raya larga y fría) */
      let sombra = "";
      for (let xx = x - izq; xx <= x + der; xx += 18) {
        const t = Math.min(1, xx < x ? (x - xx) / izq : (xx - x) / der);
        if (y + grosor * (1 - t * t) < cresta(xx) + 4) { if (sombra) break; else continue; }
        sombra += (sombra ? " L" : "M") + n2(xx) + " " + n2(pie(xx) + 7);
      }
      let d = `M${n2(x - izq)} ${pie(x - izq)} Q${n2(x - izq * .74)} ${n2(y + 10)} ${n2(x - izq * .42)} ${n2(y + 4)}
        L${n2(x + der * .44)} ${y} Q${n2(x + der * .76)} ${n2(y + 6)} ${n2(x + der)} ${pie(x + der)}`;
      for (let xx = x + der; xx >= x - izq; xx -= 18) d += ` L${n2(xx)} ${pie(xx)}`;
      let g = `${sombra ? `<path d="${sombra}" stroke="rgba(52,74,92,.18)" stroke-width="13" fill="none" stroke-linecap="round"/>` : ""}
        <path d="${d} Z" fill="${cA}"/>
        <path d="M${n2(x - izq * .42)} ${n2(y + 4)} L${n2(x + der * .44)} ${y}" stroke="${cB}" stroke-width="9" stroke-linecap="round" fill="none"/>`;
      if (veta) {
        g += `<path d="M${n2(x - izq * .8)} ${n2(y + grosor + 34)} q${n2(izq * .5)} -12 ${n2((izq + der) * .7)} -6"
          stroke="${veta}" stroke-width="6" fill="none" stroke-linecap="round"/>`;
      }
      return g;
    };

    /* cresta de duna: un barrido de arena que sigue la propia cresta, con la
       arista viva arriba y los extremos redondeados para que no haya cantos */
    const crestaDuna = function (x, w) {
      const lomo = linea(bajado(cresta, 30), x - w * 1.9, x + w * 1.9, 20);
      const alto = linea(bajado(cresta, 5), x - w * 1.3, x + w * 1.3, 20);
      let g = `<path d="${lomo}" stroke="rgba(255,242,208,.32)" stroke-width="46" stroke-linecap="round" fill="none"/>
        <path d="${alto}" stroke="rgba(255,255,255,.5)" stroke-width="6" stroke-linecap="round" fill="none"/>`;
      [70, 118].forEach(function (d, i) {
        g += `<path d="${linea(bajado(cresta, d), x - w * (1.4 - i * .35), x + w * (1.2 - i * .3), 22)}"
          stroke="rgba(255,255,255,.24)" stroke-width="5" stroke-linecap="round" fill="none"/>`;
      });
      return g;
    };
    /* manto de hierba: sigue la cresta por debajo del punto y saca briznas a
       los lados, para que el animal quede plantado en la hierba y no en un plato */
    const replanoHierba = function (x, w, col, claro) {
      const lomo = linea(bajado(cresta, 22), x - w * 1.4, x + w * 1.4, 18);
      let g = `<path d="${lomo}" stroke="${col}" stroke-width="46" stroke-linecap="round" fill="none"/>
        <path d="${linea(bajado(cresta, 6), x - w * 1.1, x + w * 1.1, 18)}" stroke="${claro}" stroke-width="9" stroke-linecap="round" fill="none"/>`;
      [-1, 1].forEach(function (lado) {
        const bx = x + lado * Math.round(w * .92), by = n2(cresta(bx) + 10);
        g += `<path d="M${bx} ${by} q-8 -20 -16 -34 M${bx + 6} ${by} q1 -22 0 -38 M${bx + 13} ${by} q9 -20 19 -32"
          stroke="${col}" stroke-width="5.5" fill="none" stroke-linecap="round"/>`;
      });
      return g;
    };

    /* SABANA: el peñasco de los leones, que asoma de la ladera */
    s += `<g>${replanoHierba(aLeon[0], 96, "#9aa848", "rgba(255,255,255,.22)")}
      ${repisa(aLeon[0], aLeon[1], 158, 116, 16, "#9c8455", "#c3a874", "rgba(90,70,40,.22)")}</g>`;
    /* SABANA: el replano de hierba donde pasea la familia de elefantes */
    s += `<g>${replanoHierba(aElefante[0], 150, "#93a447", "rgba(255,255,255,.26)")}</g>`;
    /* SABANA: la loma de la jirafa, con su acacia al lado */
    s += `<g>${replanoHierba(aJirafa[0], 110, "#9da84a", "rgba(255,255,255,.24)")}
      <g transform="translate(${aJirafa[0] + 172} ${n2(cresta(aJirafa[0] + 172) + 10)}) scale(.72)">
        <path d="M0 0 L8 -70 L-24 -110 M8 -70 L44 -108" stroke="#6d4c33" stroke-width="15" fill="none" stroke-linecap="round"/>
        <ellipse cx="8" cy="-118" rx="112" ry="30" fill="#5c9642"/>
        <ellipse cx="-30" cy="-134" rx="58" ry="22" fill="#72ad52"/>
        <ellipse cx="56" cy="-130" rx="50" ry="20" fill="#72ad52"/></g></g>`;
    /* SABANA: la atalaya del guepardo. Es un kopje: el montón de bloques de
       granito que la erosión deja en medio de la llanura africana y al que se
       suben de verdad los felinos para vigilar. Los bloques van redondeados,
       cada uno con su eje y su giro, y las juntas quedan en sombra con hierba
       seca metida en las grietas: así se leen como piedras amontonadas y no
       como rebanadas cortadas a tijera. */
    (function () {
      const x = aGuepardo[0], y = aGuepardo[1], base = n2(cresta(x) + 34);
      const m = function (t) { return n2(mez(y, base, t)); };
      /* un bloque: contorno irregular, sombra propia por debajo (que cae sobre
         la piedra de abajo y hace de junta) y una veta clara arriba */
      const bloque = function (cx, cy, rx, ry, giro, cA, cB) {
        const p = `M${n2(cx - rx)} ${n2(cy + ry * .18)}
          Q${n2(cx - rx * .98)} ${n2(cy - ry * .68)} ${n2(cx - rx * .46)} ${n2(cy - ry * .96)}
          Q${n2(cx + rx * .1)} ${n2(cy - ry * 1.12)} ${n2(cx + rx * .62)} ${n2(cy - ry * .74)}
          Q${n2(cx + rx)} ${n2(cy - ry * .38)} ${n2(cx + rx * .94)} ${n2(cy + ry * .3)}
          Q${n2(cx + rx * .66)} ${n2(cy + ry * .98)} ${n2(cx - rx * .04)} ${n2(cy + ry)}
          Q${n2(cx - rx * .7)} ${n2(cy + ry * .96)} ${n2(cx - rx)} ${n2(cy + ry * .18)} Z`;
        return `<g transform="rotate(${giro} ${cx} ${cy})">
          <path d="${p}" fill="rgba(74,52,22,.3)" transform="translate(0 12)"/>
          <path d="${p}" fill="${cA}"/>
          <path d="M${n2(cx - rx * .62)} ${n2(cy - ry * .38)} Q${n2(cx - rx * .14)} ${n2(cy - ry * .9)} ${n2(cx + rx * .46)} ${n2(cy - ry * .58)}"
            stroke="${cB}" stroke-width="8" fill="none" stroke-linecap="round" opacity=".6"/>
          <path d="M${n2(cx - rx * .48)} ${n2(cy + ry * .44)} q${n2(rx * .38)} ${n2(-ry * .14)} ${n2(rx * .84)} ${n2(-ry * .04)}"
            stroke="rgba(92,64,30,.2)" stroke-width="7" fill="none" stroke-linecap="round"/></g>`;
      };
      /* hierba seca de las grietas */
      const mata = function (hx, hy, alto, col) {
        return `<path d="M${hx} ${hy} q-8 ${-alto * .6} -17 ${-alto} M${hx + 6} ${hy} q1 ${-alto * .7} 0 ${-alto - 7} M${hx + 12} ${hy} q9 ${-alto * .6} 19 ${-alto + 4}"
          stroke="${col}" stroke-width="5" fill="none" stroke-linecap="round"/>`;
      };
      s += `<g><path d="M${x - 196} ${n2(base + 10)} q76 -32 186 -28 q108 -4 182 28 Z" fill="#93793f" opacity=".9"/>
        ${bloque(x + 118, m(.79), 78, 40, 7, "#8f7444", "#b89c66")}
        ${bloque(x - 12, m(.88), 152, 60, -3, "#9c7f4c", "#c6a870")}
        ${bloque(x - 62, m(.63), 112, 62, 6, "#a68750", "#d0b177")}
        ${bloque(x + 44, m(.36), 96, 48, -7, "#b3945a", "#dcbe8c")}
        ${bloque(x - 6, n2(y + 45), 74, 44, 0, "#bb9a62", "#e6cb98")}
        ${mata(x - 150, m(.72), 30, "#a89043")}${mata(x + 128, m(.66), 26, "#a89043")}
        ${mata(x - 58, m(.44), 24, "#b59a4c")}${mata(x + 106, m(.31), 22, "#b59a4c")}
        <ellipse cx="${x - 168}" cy="${n2(base + 4)}" rx="34" ry="13" fill="#a9885a" opacity=".85"/>
        <ellipse cx="${x + 128}" cy="${n2(base + 8)}" rx="26" ry="11" fill="#a9885a" opacity=".8"/>
        <path d="M${x + 152} ${n2(base + 6)} Q${x + 166} ${n2(base - 56)} ${x + 184} ${n2(base - 86)} Q${x + 202} ${n2(base - 50)} ${x + 214} ${n2(base + 6)} Z" fill="#a9793f"/>
        <g transform="translate(${x - 210} ${n2(base + 16)}) scale(.5)">
          <path d="M0 0 L8 -70 L-24 -110 M8 -70 L44 -108" stroke="#6d4c33" stroke-width="15" fill="none" stroke-linecap="round"/>
          <ellipse cx="8" cy="-118" rx="112" ry="30" fill="#588f40"/>
          <ellipse cx="-30" cy="-134" rx="56" ry="22" fill="#6ea850"/></g></g>`;
    })();
    /* POLO: la repisa de hielo de los pingüinos y el témpano del oso */
    s += repisa(aPingu[0], aPingu[1], 132, 112, 30, "url(#anmXHielo)", "#ffffff", "rgba(120,180,215,.45)");
    s += repisa(aOso[0], aOso[1], 138, 118, 30, "url(#anmXHielo)", "#ffffff", "rgba(120,180,215,.45)");
    /* POLO: la cumbre del águila, roca con caperuza de nieve */
    (function () {
      const x = aAguila[0], y = aAguila[1];
      s += `<path d="M${x - 128} ${y + 214} L${x - 34} ${y + 10} L${x + 4} ${y - 2} L${x + 46} ${y + 14} L${x + 136} ${y + 218} Z" fill="url(#anmXPenon)"/>
        <path d="M${x - 46} ${y + 18} L${x + 4} ${y - 2} L${x + 58} ${y + 22} Q${x + 30} ${y + 42} ${x - 6} ${y + 40} Q${x - 30} ${y + 38} ${x - 46} ${y + 18} Z" fill="#f7fdff"/>
        <path d="M${x - 72} ${y + 74} q40 -20 88 -12" stroke="rgba(255,255,255,.55)" stroke-width="8" fill="none" stroke-linecap="round"/>
        <path d="M${x - 92} ${y + 116} q52 -22 116 -12" stroke="rgba(255,255,255,.4)" stroke-width="7" fill="none" stroke-linecap="round"/>`;
    })();
    /* POLO: la repisa de la cabra, salida de la pared del collado */
    s += repisa(aCabra[0], aCabra[1], 128, 118, 34, "#c2ccd4", "#f4fafd", "rgba(255,255,255,.4)");
    s += `<path d="M${aCabra[0] - 64} ${n2(aCabra[1] + 6)} q30 -12 66 -8 q34 4 60 10 q-40 10 -126 -2 Z" fill="#f7fdff" opacity=".9"/>`;
    /* DESIERTO: las crestas de duna del camello y del fénec, y la losa del lagarto */
    s += crestaDuna(aCamello[0], 150);
    s += crestaDuna(aFenec[0], 122);
    s += repisa(aLagarto[0], aLagarto[1], 118, 104, 42, "#c79a63", "#e8bd85", "rgba(120,80,40,.22)");

    /* ================================================================
       EL LLANO DE DELANTE: la tierra por la que se pasea, de punta a
       punta, con el material cambiando poco a poco como arriba.
       ================================================================ */
    const dSuelo = linea(suelo, -60, W + 60, 30);
    s += `<path d="${dSuelo} L${W + 60} ${H} L-60 ${H} Z" fill="url(#anmXLlano)"/>
      <path d="${dSuelo}" stroke="rgba(255,255,255,.30)" stroke-width="5" fill="none"/>`;

    /* ---------------- SELVA: los árboles gigantes y sus ramas ---------------- */
    /* rama que sale del tronco y termina en un tramo horizontal: ahí se posa
       el animal, con el borde de arriba justo en su altura de apoyo */
    const ramaPercha = function (xt, yTronco, px, py, hojas) {
      const lado = px > xt ? 1 : -1;
      const ini = px - lado * 108, fin = px + lado * 104, ejeY = n2(py + 11);
      let g = `<path d="M${xt} ${yTronco} Q${n2(mez(xt, ini, .6))} ${n2(mez(yTronco, ejeY, .3))} ${ini} ${ejeY} L${fin} ${ejeY}"
        stroke="#5b4230" stroke-width="22" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M${n2(ini)} ${n2(ejeY - 5)} L${n2(fin)} ${n2(ejeY - 5)}" stroke="rgba(255,255,255,.13)" stroke-width="6" stroke-linecap="round"/>`;
      if (hojas !== false) {
        const hx = fin + lado * 26;
        g += `<ellipse cx="${n2(hx)}" cy="${n2(ejeY - 16)}" rx="46" ry="26" fill="#3f9740" transform="rotate(${-12 * lado} ${n2(hx)} ${n2(ejeY - 16)})"/>
          <ellipse cx="${n2(hx + lado * 18)}" cy="${n2(ejeY + 16)}" rx="38" ry="21" fill="#2f7d3f" transform="rotate(${14 * lado} ${n2(hx + lado * 18)} ${n2(ejeY + 16)})"/>
          <ellipse cx="${n2(hx - lado * 20)}" cy="${n2(ejeY + 34)}" rx="26" ry="15" fill="#46a145" opacity=".9"/>`;
      }
      return g;
    };
    const arbolGigante = function (xt, cima, w, cA, cB) {
      const base = n2(suelo(xt) + 16);
      return `<path d="M${n2(xt - w - 40)} ${n2(base + 20)} q26 -22 40 -20 L${n2(xt + w)} ${base} q16 -2 40 20 Z" fill="#3f2d21"/>
        <path d="M${n2(xt - w)} ${base} L${n2(xt - w * .42)} ${cima} L${n2(xt + w * .42)} ${cima} L${n2(xt + w)} ${base} Z" fill="url(#anmXTronco)"/>
        <path d="M${n2(xt - w * .22)} ${base} L${n2(xt - w * .1)} ${cima}" stroke="rgba(255,255,255,.10)" stroke-width="6"/>
        <ellipse cx="${n2(xt - 62)}" cy="${n2(cima - 4)}" rx="64" ry="42" fill="${cA}"/>
        <ellipse cx="${n2(xt + 66)}" cy="${n2(cima - 10)}" rx="66" ry="44" fill="${cA}"/>
        <ellipse cx="${xt}" cy="${n2(cima - 44)}" rx="82" ry="52" fill="${cB}"/>
        <ellipse cx="${n2(xt - 34)}" cy="${n2(cima - 70)}" rx="42" ry="28" fill="${cB}" opacity=".85"/>
        <ellipse cx="${n2(xt + 40)}" cy="${n2(cima - 64)}" rx="36" ry="24" fill="#5cb85c" opacity=".55"/>`;
    };
    /* árboles del fondo de la selva, más apagados */
    [[170, 372, 20], [598, 420, 18], [812, 350, 22], [1102, 404, 17], [356, 452, 16], [1006, 470, 15]].forEach(function (t) {
      const base = n2(suelo(t[0]) + 12);
      s += `<g opacity=".72"><path d="M${t[0] - t[2]} ${base} L${n2(t[0] - t[2] * .4)} ${t[1]} L${n2(t[0] + t[2] * .4)} ${t[1]} L${t[0] + t[2]} ${base} Z" fill="#3c2c21"/>
        <ellipse cx="${t[0] - 44}" cy="${t[1]}" rx="50" ry="32" fill="#2b6f38"/>
        <ellipse cx="${t[0] + 46}" cy="${n2(t[1] - 6)}" rx="52" ry="34" fill="#2b6f38"/>
        <ellipse cx="${t[0]}" cy="${n2(t[1] - 34)}" rx="64" ry="40" fill="#357c3c"/></g>`;
    });
    /* los cuatro gigantes: cada uno sostiene a un habitante de la selva */
    s += arbolGigante(392, 236, 30, "#2f7d3f", "#43a047");
    s += ramaPercha(392, 402, aMono[0], aMono[1]);
    s += arbolGigante(660, 182, 32, "#2b6f38", "#3f9740");
    s += ramaPercha(660, 296, aTucan[0], aTucan[1]);
    s += arbolGigante(930, 286, 28, "#2f7d3f", "#43a047");
    s += ramaPercha(930, 520, aJaguar[0], aJaguar[1]);
    s += arbolGigante(1164, 252, 26, "#2b6f38", "#3f9740");
    /* la rana se posa en una hoja grande de bromelia */
    (function () {
      const px = aRana[0], py = aRana[1];
      s += ramaPercha(1164, 372, px, py, false);
      s += `<path d="M${px + 116} ${n2(py + 14)} Q${px + 20} ${n2(py - 16)} ${px - 118} ${n2(py + 6)}
        Q${px - 40} ${n2(py + 44)} ${px + 116} ${n2(py + 14)} Z" fill="#46a145"/>
        <path d="M${px + 112} ${n2(py + 16)} Q${px - 10} ${n2(py + 16)} ${px - 112} ${n2(py + 10)}" stroke="#2f7d3f" stroke-width="5" fill="none"/>`;
    })();
    /* el techo de la selva: se va abriendo hasta desaparecer en la sabana */
    (function () {
      const fin = A2 + 260;
      let techo = "M-60 0 L" + fin + " 0";
      for (let x = fin; x >= -60; x -= 90) {
        const t = Math.max(0, Math.min(1, (x + 60) / (fin + 60)));
        const alto = 208 * (1 - t) * (1 - t * .35) + 14 * Math.sin(x / 70);
        techo += " L" + n2(x) + " " + n2(Math.max(0, alto));
      }
      s += `<path d="${techo} Z" fill="#1f5c2c" opacity=".92"/>`;
      for (let i = 0; i < 14; i++) {
        const x = Math.round(mez(-20, fin - 40, i / 13));
        const t = Math.max(0, Math.min(1, (x + 60) / (fin + 60)));
        const r = 34 + 26 * (1 - t);
        s += `<ellipse cx="${x}" cy="${n2(190 * (1 - t) * (1 - t * .35))}" rx="${n2(r * 1.5)}" ry="${n2(r)}" fill="#2a6b34" opacity=".9"/>`;
      }
    })();
    /* lianas que cuelgan del techo y se mecen muy despacio */
    s += `<g><animateTransform attributeName="transform" type="skewX" values="0;1.3;0;-1.3;0" dur="14s" repeatCount="indefinite"/>`;
    for (let i = 0; i < 9; i++) {
      const x = Math.round(mez(40, A2 + 120, i / 8)), largo = 190 + ((i * 97) % 230);
      const arriba = Math.max(10, 150 * (1 - x / (A2 + 320)));
      if (!libre(x - 18, arriba, 36, largo)) continue;
      const lado = i % 2 ? 1 : -1;
      s += `<path d="M${x} ${n2(arriba)} q${26 * lado} ${n2(largo * 0.5)} ${8 * lado} ${largo}" stroke="#2f7d3f" stroke-width="7" fill="none" stroke-linecap="round"/>`;
      for (let j = 1; j < 4; j++) {
        const hy = n2(arriba + largo * j / 4);
        s += `<ellipse cx="${x + 12 * lado}" cy="${hy}" rx="13" ry="7" fill="#46a145" opacity=".85" transform="rotate(${22 * lado} ${x} ${hy})"/>`;
      }
    }
    s += `</g>`;
    /* helechos del suelo de la selva */
    for (let i = 0; i < 12; i++) {
      const x = Math.round(mez(30, A1 + 140, i / 11)), y = n2(suelo(x) + 30 + ((i * 23) % 26));
      if (!libre(x - 54, y - 72, 108, 80)) continue;
      s += `<g transform="translate(${x} ${y})">`;
      [-58, -30, 0, 30, 58].forEach(function (a) {
        s += `<path d="M0 0 q${n2(a * 0.7)} -34 ${n2(a * 1.1)} -62" stroke="#2f8040" stroke-width="9" fill="none" stroke-linecap="round"/>`;
      });
      s += `<ellipse cx="0" cy="4" rx="26" ry="10" fill="#245f31" opacity=".7"/></g>`;
    }
    /* sotobosque: palmitos y arbustos a media altura, para que entre las
       ramas y el suelo no quede una franja vacía */
    for (let i = 0; i < 18; i++) {
      const x = Math.round(mez(40, A1 + 260, i / 17)) + ((i * 37) % 44);
      const y = n2(mez(suelo(x) - 16, suelo(x) - 230, ((i * 7) % 5) / 4));
      if (!libreFino(x - 62, y - 76, 124, 86)) continue;
      const k = (0.58 + ((i * 13) % 4) * 0.15).toFixed(2);
      const cl = i % 2 ? "#2c7a3c" : "#35893f";
      s += `<g transform="translate(${x} ${y}) scale(${k})" opacity=".92">
        <path d="M0 0 q-50 -12 -74 -50 q46 0 74 30 Z" fill="${cl}"/>
        <path d="M0 0 q-30 -34 -30 -78 q30 26 34 66 Z" fill="${cl}"/>
        <path d="M0 0 q10 -40 46 -66 q-10 44 -34 66 Z" fill="${cl}"/>
        <path d="M0 0 q40 -20 78 -22 q-30 30 -66 32 Z" fill="${cl}"/>
        <ellipse cx="0" cy="4" rx="26" ry="9" fill="rgba(20,60,26,.45)"/></g>`;
    }
    /* bromelias agarradas a los troncos, a media altura */
    [[392, 560], [660, 512], [930, 726], [1164, 640], [170, 596], [812, 604]].forEach(function (b) {
      if (!libreFino(b[0] - 54, b[1] - 40, 108, 56)) return;
      s += `<g transform="translate(${b[0]} ${b[1]})">
        <path d="M0 0 q-42 -6 -58 -30 q40 -4 58 16 Z" fill="#3f9740"/>
        <path d="M0 0 q42 -6 58 -30 q-40 -4 -58 16 Z" fill="#3f9740"/>
        <path d="M0 0 q-16 -30 -6 -56 q22 26 14 54 Z" fill="#46a145"/>
        <ellipse cx="0" cy="2" rx="14" ry="8" fill="#2f7d3f"/></g>`;
    });
    /* un charco de agua de lluvia en el suelo de la selva */
    (function () {
      const x = Math.round(A1 * .58), y = n2(suelo(x) + 62);
      s += `<ellipse cx="${x}" cy="${y}" rx="146" ry="26" fill="#3f7c5e" opacity=".55"/>
        <ellipse cx="${x}" cy="${n2(y - 4)}" rx="112" ry="16" fill="#8fc7b0" opacity=".4"/>
        <path d="M${x - 60} ${n2(y - 2)} q24 -8 48 0" stroke="rgba(255,255,255,.4)" stroke-width="4" fill="none" stroke-linecap="round"/>`;
    })();
    /* niebla baja entre los troncos */
    for (let i = 0; i < 3; i++) {
      const x = Math.round(A1 * (0.18 + i * 0.32)), y = 796 + ((i * 41) % 70);
      s += `<ellipse cx="${x}" cy="${y}" rx="${230 + (i % 3) * 40}" ry="${40 + (i % 2) * 14}" fill="url(#anmXNiebla)">
        <animate attributeName="opacity" values="${i % 2 ? ".35;.75;.35" : ".72;.34;.72"}" dur="${14 + i * 3}s" repeatCount="indefinite"/></ellipse>`;
    }

    /* ---------------- SABANA: acacias, termiteros y la charca ---------------- */
    [[1245, .6], [1600, .5], [1880, .46], [2160, .56]].forEach(function (a) {
      const x = a[0], base = n2(cresta(x) + 30), k = a[1];
      if (!libreFino(x - 130 * k, base - 170 * k, 260 * k, 182 * k)) return;
      s += `<g transform="translate(${x} ${base}) scale(${k})">
        <path d="M0 0 L8 -70 L-24 -110 M8 -70 L44 -108" stroke="#6d4c33" stroke-width="15" fill="none" stroke-linecap="round"/>
        <ellipse cx="8" cy="-118" rx="122" ry="32" fill="#588f40"/>
        <ellipse cx="-34" cy="-134" rx="62" ry="24" fill="#6ea850"/>
        <ellipse cx="58" cy="-130" rx="54" ry="21" fill="#6ea850"/>
        <ellipse cx="8" cy="-104" rx="96" ry="16" fill="rgba(60,90,40,.3)"/></g>`;
    });
    for (let i = 0; i < 5; i++) {
      const x = Math.round(mez(A2 + 60, B1 - 40, i / 4)), base = n2(suelo(x) + 34 + ((i * 13) % 22));
      const k = (0.66 + ((i * 13) % 4) * 0.12).toFixed(2);
      if (!libre(x - 40, base - 82, 80, 90)) continue;
      s += `<g transform="translate(${x} ${base}) scale(${k})">
        <path d="M-30 0 Q-22 -52 -6 -74 Q6 -86 14 -56 Q22 -30 30 0 Z" fill="#a9793f"/>
        <path d="M-8 0 Q-2 -44 6 -62" stroke="rgba(255,255,255,.25)" stroke-width="6" fill="none"/></g>`;
    }
    /* la charca, con el cielo reflejado y las huellas que llegan hasta ella */
    (function () {
      const cx = Math.round(mez(A2, B1, .74)), cy = n2(suelo(cx) + 60);
      s += `<ellipse cx="${cx}" cy="${cy}" rx="168" ry="34" fill="#8fc7d8" opacity=".75"/>
        <ellipse cx="${cx}" cy="${n2(cy - 3)}" rx="136" ry="22" fill="#c2e4ee" opacity=".55"/>
        <path d="M${cx - 78} ${n2(cy - 4)} q28 -9 56 0 M${cx + 14} ${n2(cy + 10)} q28 -9 56 0" stroke="rgba(255,255,255,.55)" stroke-width="4" fill="none" stroke-linecap="round"/>`;
      for (let i = 0; i < 5; i++) {
        const hx = cx - 250 + i * 44, hy = n2(cy + 34 + (i % 2) * 14);
        s += `<ellipse cx="${hx}" cy="${hy}" rx="13" ry="9" fill="rgba(120,90,40,.24)"/>`;
      }
    })();
    /* matorrales secos repartidos por el llano de la sabana */
    for (let i = 0; i < 7; i++) {
      const x = Math.round(mez(A1 + 120, B2 - 60, i / 6)), base = n2(suelo(x) + 46 + ((i * 37) % 26));
      if (!libre(x - 36, base - 44, 72, 50)) continue;
      s += `<g transform="translate(${x} ${base})">
        <path d="M0 0 q-16 -20 -30 -26 M0 0 q-4 -26 -2 -38 M0 0 q16 -20 30 -28" stroke="#8d7135" stroke-width="6" fill="none" stroke-linecap="round"/>
        <ellipse cx="0" cy="0" rx="30" ry="9" fill="rgba(120,95,40,.28)"/></g>`;
    }

    /* ---------------- MONTAÑAS Y POLO: pinos, mar frío y témpanos ---------------- */
    /* el bosque de pinos trepa por la ladera y se acaba antes de la cumbre */
    for (let i = 0; i < 11; i++) {
      const t = i / 10, x = Math.round(mez(B1 - 40, mez(B2, C1, .42), t)), base = n2(cresta(x) + 40 + ((i * 43) % 40));
      const k = mez(0.82, 0.46, t).toFixed(2);
      if (!libreFino(x - 52, base - 150, 104, 158)) continue;
      s += `<g transform="translate(${x} ${base}) scale(${k})">
        <rect x="-7" y="-26" width="14" height="30" rx="4" fill="#5d4433"/>
        <path d="M0 -136 L34 -78 L-34 -78 Z" fill="#2f6b46"/>
        <path d="M0 -112 L42 -44 L-42 -44 Z" fill="#357a4f"/>
        <path d="M0 -82 L48 -20 L-48 -20 Z" fill="#2f6b46"/>
        <path d="M0 -82 L48 -20 L-48 -20 Z" fill="rgba(255,255,255,${(0.18 + t * 0.34).toFixed(2)})" opacity=".8"/></g>`;
    }
    /* piedras con caperuza de nieve: la nieve va a más según se avanza */
    for (let i = 0; i < 12; i++) {
      const t = i / 11, x = Math.round(mez(B1 - 60, B2 + 160, t)), base = n2(suelo(x) + 26 + ((i * 37) % 30));
      const r = Math.round(mez(12, 28, t));
      if (!libreFino(x - r - 8, base - r - 8, r * 2 + 16, r * 2 + 24)) continue;
      s += `<path d="M${x - r} ${base} q${n2(r * 0.35)} ${-r * 1.05} ${r} ${-r * 1.1} q${n2(r * 0.7)} ${r * 0.05} ${r} ${r * 1.1} Z" fill="#8e9aa4" opacity="${(0.62 + t * 0.3).toFixed(2)}"/>`;
      if (t > 0.2) s += `<path d="M${n2(x - r * 0.78)} ${n2(base - r * 0.72)} q${n2(r * 0.4)} ${-r * 0.5} ${n2(r * 0.8)} ${-r * 0.5} q${n2(r * 0.5)} 0 ${n2(r * 0.78)} ${n2(r * 0.5)} q${-r * 0.8} ${n2(r * 0.22)} ${n2(-r * 1.58)} 0 Z" fill="#f4fafd" opacity="${(0.35 + t * 0.6).toFixed(2)}"/>`;
    }
    /* el mar frío del llano, con las orillas de nieve fundiéndose a los lados */
    (function () {
      const mA = Math.round(mez(B2, C1, .06)), mB = Math.round(mez(B2, C1, .96));
      const yA = n2(suelo(mA) + 26), yB = n2(suelo(mB) + 26);
      s += `<path d="M${mA} ${yA} Q${n2(mez(mA, mB, .18))} ${n2(yA + 24)} ${n2(mez(mA, mB, .42))} ${n2(yA + 12)}
        Q${n2(mez(mA, mB, .7))} ${n2(yA + 2)} ${mB} ${yB} L${n2(mB - 210)} ${H} L${n2(mA + 190)} ${H} Z" fill="url(#anmXAguaFria)" opacity=".92"/>`;
      let brillos = "";
      for (let i = 0; i < 8; i++) {
        const x = Math.round(mez(mA + 60, mB - 90, i / 7)), y = n2(suelo(x) + 62 + ((i * 29) % 54));
        brillos += `<path d="M${x} ${y} q24 -11 48 0" stroke="rgba(255,255,255,.7)" stroke-width="4" fill="none" stroke-linecap="round"/>`;
      }
      s += `<g><animate attributeName="opacity" values=".8;.35;.8" dur="7s" repeatCount="indefinite"/>${brillos}</g>`;
      /* témpanos flotando */
      [[.2, 84], [.46, 66], [.74, 92]].forEach(function (b, i) {
        const x = Math.round(mez(mA, mB, b[0])), base = n2(suelo(x) + 52);
        s += `<path d="M${x - 52} ${base} L${x} ${n2(base - b[1])} L${x + 54} ${base} Z" fill="${i % 2 ? "#c9e6f4" : "#d6eef8"}"/>
          <path d="M${n2(x - 24)} ${n2(base - b[1] * 0.5)} L${x} ${n2(base - b[1])} L${n2(x + 26)} ${n2(base - b[1] * 0.52)} Q${x} ${n2(base - b[1] * 0.6)} ${n2(x - 24)} ${n2(base - b[1] * 0.5)} Z" fill="#ffffff"/>
          <ellipse cx="${x}" cy="${n2(base + 6)}" rx="76" ry="12" fill="rgba(255,255,255,.5)"/>`;
      });
    })();
    /* copos que bajan sin prisa por todo el tramo frío */
    let copos = "";
    for (let i = 0; i < 30; i++) {
      const cx = Math.round(mez(B2 - 90, C1 + 90, (i * 0.0313 * 7) % 1)), cy = 150 + ((i * 211) % 560);
      if (!libre(cx - 8, cy - 8, 16, 16)) continue;
      copos += `<circle cx="${cx}" cy="${cy}" r="${2.4 + (i % 3)}" fill="rgba(255,255,255,.85)"/>`;
    }
    s += `<g opacity=".78"><animateTransform attributeName="transform" type="translate" values="0 -18;0 26;0 -18" dur="17s" repeatCount="indefinite"/>${copos}</g>`;
    /* charcos de deshielo justo donde la nieve se rinde ante la arena */
    [[.3, 92], [.6, 66]].forEach(function (c) {
      const x = Math.round(mez(C1, C2, c[0])), base = n2(suelo(x) + 44);
      s += `<ellipse cx="${x}" cy="${base}" rx="${c[1]}" ry="${Math.round(c[1] * 0.24)}" fill="url(#anmXCharco)" opacity=".8"/>
        <path d="M${n2(x - c[1] * 0.5)} ${n2(base - 4)} q${n2(c[1] * 0.25)} -8 ${n2(c[1] * 0.5)} 0" stroke="rgba(255,255,255,.6)" stroke-width="4" fill="none" stroke-linecap="round"/>`;
    });

    /* ---------------- DESIERTO: dunas del llano, arco y arbustos ---------------- */
    (function () {
      /* las dunas nacen mucho antes del desierto y suben despacio: así la
         nieve del polo se convierte en arena sin ninguna línea recta */
      const ini = C1 - 420;
      const dunaA = function (x) { return suelo(x) - Math.max(0, Math.min(1, (x - ini) / 620)) * (92 + 26 * Math.sin(x / 190)); };
      const dunaB = function (x) { return suelo(x) + 44 - Math.max(0, Math.min(1, (x - ini - 180) / 620)) * (66 + 20 * Math.sin(x / 150 + 1)); };
      const dA = linea(dunaA, ini, W + 60, 30), dB = linea(dunaB, ini + 120, W + 60, 30);
      /* la arena entra en cuña, nunca con un canto vertical sobre el hielo */
      s += `<path d="${dA} L${W + 60} ${H} L${n2(ini + 560)} ${H} Z" fill="url(#anmXDunaA)" opacity=".92"/>
        <path d="${dA}" stroke="rgba(255,255,255,.4)" stroke-width="5" fill="none"/>
        <path d="${dB} L${W + 60} ${H} L${n2(ini + 760)} ${H} Z" fill="url(#anmXDunaB)" opacity=".94"/>
        <path d="${dB}" stroke="rgba(255,255,255,.28)" stroke-width="4" fill="none"/>`;
      /* manchas de arena sueltas por delante de la cuña: el paso de la nieve
         a la arena se ve venir poco a poco */
      for (let i = 0; i < 6; i++) {
        const x = Math.round(mez(ini - 120, ini + 620, i / 5)), y = n2(suelo(x) + 44 + ((i * 53) % 90));
        s += `<ellipse cx="${x}" cy="${y}" rx="${76 - i * 6}" ry="${17 - i}" fill="#e5bd85" opacity="${(0.3 + i * 0.1).toFixed(2)}"/>`;
      }
      for (let i = 0; i < 13; i++) {
        const x = Math.round(mez(C2 - 200, W - 60, i / 12)), y = n2(dunaB(x) + 34 + ((i * 29) % 30));
        s += `<path d="M${x} ${y} q32 -10 64 0" stroke="rgba(255,255,255,.26)" stroke-width="4" fill="none" stroke-linecap="round"/>`;
      }
    })();
    /* un arco de piedra gastado por el viento, en un hueco libre */
    (function () {
      const x = Math.round(mez(C2, W, .16)), y = n2(cresta(x) + 148);
      if (!libre(x - 12, y - 150, 130, 160)) return;
      s += `<path d="M${x} ${y} L${x} ${y - 88} Q${x} ${y - 130} ${x + 50} ${y - 132} Q${x + 100} ${y - 130} ${x + 100} ${y - 84} L${x + 100} ${y} L${x + 70} ${y} L${x + 70} ${y - 78} Q${x + 70} ${y - 98} ${x + 50} ${y - 98} Q${x + 28} ${y - 98} ${x + 28} ${y - 76} L${x + 28} ${y} Z" fill="#cf9159" opacity=".85"/>
        <path d="M${x + 6} ${y - 88} Q${x + 6} ${y - 122} ${x + 50} ${y - 124} Q${x + 94} ${y - 122} ${x + 94} ${y - 82}" stroke="#e6b077" stroke-width="6" fill="none"/>`;
    })();
    /* arbustos secos y piedras del desierto */
    for (let i = 0; i < 7; i++) {
      const x = Math.round(mez(C2 - 160, W - 50, i / 6)), base = n2(suelo(x) + 40 + ((i * 37) % 26));
      const k = (0.7 + ((i * 11) % 3) * 0.1).toFixed(2);
      if (!libre(x - 40, base - 54, 80, 60)) continue;
      s += `<g transform="translate(${x} ${base}) scale(${k})">
        <path d="M0 0 q-20 -18 -32 -26 M0 0 q-6 -28 -4 -44 M0 0 q18 -20 34 -30 M0 0 q8 -22 22 -30" stroke="#9c7c46" stroke-width="6" fill="none" stroke-linecap="round"/>
        <ellipse cx="0" cy="2" rx="30" ry="8" fill="rgba(150,110,55,.28)"/></g>`;
    }
    /* el aire que tiembla de calor, justo encima de la arena */
    s += `<rect x="${C2 - 120}" y="${n2(suelo(C2) - 26)}" width="${Math.max(0, W - C2 + 120)}" height="30" fill="url(#anmXCalor)">
      <animate attributeName="opacity" values=".5;.85;.5" dur="5.6s" repeatCount="indefinite"/></rect>
      <rect x="${C2 + 40}" y="${n2(suelo(C2) + 30)}" width="${Math.max(0, W - C2 - 40)}" height="24" fill="url(#anmXCalor)">
      <animate attributeName="opacity" values=".8;.4;.8" dur="7.2s" repeatCount="indefinite"/></rect>`;

    /* ================================================================
       PRIMER PLANO: la orilla de abajo, en sombra, con siluetas grandes
       que cambian de material igual que el resto del mapa.
       ================================================================ */
    (function () {
      const borde = function (x) { return 1024 + 16 * Math.sin(x / 210) + 9 * Math.sin(x / 78); };
      const dB = linea(borde, -60, W + 60, 34);
      s += `<path d="${dB} L${W + 60} ${H} L-60 ${H} Z" fill="url(#anmXPrimero)" opacity=".95"/>`;
      /* hojas gigantes de selva a la izquierda */
      for (let i = 0; i < 7; i++) {
        const x = Math.round(mez(20, A2 + 120, i / 6)), y = n2(borde(x) - 6);
        s += `<path d="M${x} ${y + 40} Q${x - 96} ${y - 6} ${x - 12} ${y - 62} Q${x + 74} ${y - 12} ${x} ${y + 40} Z" fill="#123a19" opacity=".9"/>
          <path d="M${x} ${y + 34} Q${x - 12} ${y - 16} ${x - 12} ${y - 56}" stroke="#1d5426" stroke-width="4" fill="none"/>`;
      }
      /* hierba alta de la sabana en medio */
      let hierbas = "";
      for (let x = A1 + 60; x < B2 + 60; x += 74) {
        const y = n2(borde(x) + 6), alto = 54 + ((x * 13) % 34);
        hierbas += `<path d="M${x} ${y} q-11 ${-alto * 0.6} -22 ${-alto} M${x + 7} ${y} q2 ${-alto * 0.7} 0 ${-alto - 10} M${x + 15} ${y} q11 ${-alto * 0.6} 24 ${-alto + 6}"
          stroke="#6f6528" stroke-width="6" fill="none" stroke-linecap="round"/>`;
      }
      s += `<g><animateTransform attributeName="transform" type="skewX" values="0;1.8;0;-1.8;0" dur="13s" repeatCount="indefinite"/>${hierbas}</g>`;
      /* bloques de hielo en el tramo frío */
      for (let i = 0; i < 6; i++) {
        const x = Math.round(mez(B2 - 60, C1 + 120, i / 5)), y = n2(borde(x) + 4);
        s += `<path d="M${x - 70} ${y + 34} L${x - 52} ${y - 34} L${x + 30} ${y - 46} L${x + 62} ${y + 20} Z" fill="#dfeff7" opacity=".95"/>
          <path d="M${x - 52} ${y - 34} L${x + 30} ${y - 46}" stroke="#ffffff" stroke-width="7" stroke-linecap="round"/>`;
      }
      /* ondas de arena a la derecha */
      for (let i = 0; i < 9; i++) {
        const x = Math.round(mez(C1, W - 20, i / 8)), y = n2(borde(x) + 30 + ((i * 31) % 32));
        s += `<path d="M${x - 70} ${y} q70 -22 148 -6" stroke="rgba(255,236,190,.34)" stroke-width="7" fill="none" stroke-linecap="round"/>`;
      }
    })();

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

  /* números cortos: el svg pesa menos */
  function n2Inc(v) { return Math.round(v * 10) / 10; }

  function escenaIncreibles(e) {
    const W = (e && e.width) || 2600;
    const H = 1100;
    const pois = (e && e.pois) || [];
    const cajas = cajasPoi(pois, 92, 122, 44);
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
    s += barco(860, 938, .7, 2, 7.6, "#3f7fa8");
    s += barco(1900, 892, .78, -2, 6.9, "#c9553f");
    s += barco(2438, 604, .66, 3, 8.4, "#4a8f5f");

    /* ---------- CRIATURAS MARINAS DE ATLAS ANTIGUO, todas simpáticas ---------- */
    /* La serpiente de mar: tres lomos, ojo grande y sonrisa */
    s += `<g transform="translate(2318 656)">
      <g><animateTransform attributeName="transform" type="translate" values="0 0;0 -9;0 0" dur="7.2s" repeatCount="indefinite"/>
      <path d="M-150 24 q34 -54 68 0 q34 -54 68 0 q34 -54 68 0" stroke="#3d93a0" stroke-width="26" fill="none" stroke-linecap="round"/>
      <path d="M-150 24 q34 -54 68 0 q34 -54 68 0 q34 -54 68 0" stroke="rgba(255,255,255,.22)" stroke-width="9" fill="none" stroke-linecap="round"/>
      <path d="M-186 6 q-16 -30 6 -46 q30 -18 46 8 q10 20 -6 34 Z" fill="#3d93a0"/>
      <circle cx="-176" cy="-16" r="8.5" fill="#fdf6e6"/><circle cx="-174" cy="-15" r="4.2" fill="#22443c"/>
      <path d="M-190 2 q12 10 24 2" stroke="#22443c" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M-160 -40 q8 -16 20 -18 q-4 14 -8 20" fill="#8fd8e2"/>
      <path d="M60 12 q28 -22 46 -8 q-12 20 -34 22 Z" fill="#8fd8e2"/></g></g>`;
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

    /* ---------- EL MONTE SUBMARINO ----------
       De todas ellas, solo la exploradora del océano está en mar abierto: se
       apoya en la cima de un monte submarino, con sus corales. */
    (function () {
      const p = pois.filter(function (q) { return q.emoji === "\u{1F40B}"; })[0];
      const x = p ? p.x : 810, y = (p ? p.y : 620) + 44;
      s += `<path d="M${x - 158} ${y + 128} Q${x - 106} ${y + 32} ${x - 54} ${y + 8}
        L${x + 50} ${y} Q${x + 108} ${y + 28} ${x + 162} ${y + 132} Z" fill="#3f93bd" opacity=".8"/>
        <path d="M${x - 58} ${y + 8} L${x + 54} ${y}" stroke="#8fd2e8" stroke-width="9" stroke-linecap="round"/>
        <path d="M${x - 132} ${y + 96} q66 -22 150 -16 q78 6 138 26" stroke="rgba(143,210,232,.34)" stroke-width="7" fill="none" stroke-linecap="round"/>`;
      [[-96, 22, "#e2857f"], [-58, 12, "#f0b06a"], [78, 16, "#e2857f"], [110, 26, "#8fd4b4"]].forEach(function (c) {
        const cx = x + c[0], cy = n2Inc(y + 10 + Math.abs(c[0]) * .16);
        s += `<path d="M${cx} ${cy} q-4 -${c[1]} -14 -${c[1] + 8} M${cx} ${cy} q0 -${c[1] + 10} 4 -${c[1] + 16} M${cx} ${cy} q6 -${c[1]} 16 -${c[1] + 6}"
          stroke="${c[2]}" stroke-width="5" fill="none" stroke-linecap="round" opacity=".85"/>`;
      });
    })();

    /* ---------- ARCHIPIÉLAGOS DE ADORNO: islitas con su orilla clara ---------- */
    [[690, 148, .9], [1050, 636, 1], [1548, 906, .86], [176, 372, .8],
     [132, 664, .78], [716, 968, .84], [2452, 486, .8]].forEach(function (a) {
      if (!libre(a[0] - 70, a[1] - 40, 140, 80)) return;
      s += `<g transform="translate(${a[0]} ${a[1]}) scale(${a[2]})">
        <ellipse cx="0" cy="0" rx="62" ry="30" fill="rgba(255,255,255,.14)"/>
        <ellipse cx="-22" cy="-4" rx="20" ry="11" fill="#c9b98a"/><ellipse cx="-22" cy="-6" rx="14" ry="7" fill="#8fc27a"/>
        <ellipse cx="16" cy="6" rx="15" ry="9" fill="#c9b98a"/><ellipse cx="16" cy="4" rx="10" ry="5" fill="#8fc27a"/>
        <ellipse cx="40" cy="-8" rx="9" ry="5.5" fill="#c9b98a"/></g>`;
    });

    /* ---------- BANCOS DE PECES: tres pececillos siguiéndose ---------- */
    [[642, 726, 1], [2088, 566, -1], [1452, 976, 1], [386, 214, -1]].forEach(function (b) {
      if (!libre(b[0] - 80, b[1] - 34, 160, 68)) return;
      let g = "";
      for (let i = 0; i < 3; i++) {
        const px = b[0] + b[2] * i * 46, py = b[1] + (i % 2 ? 16 : 0);
        g += `<path d="M${px} ${py} q${b[2] * 16} -12 ${b[2] * 34} 0 q${-b[2] * 16} 12 ${-b[2] * 34} 0 Z" fill="rgba(255,247,220,.5)"/>
          <path d="M${px} ${py} l${-b[2] * 12} -8 l0 16 Z" fill="rgba(255,247,220,.42)"/>`;
      }
      s += `<g>${g}</g>`;
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

    return s;
  }

  /* El marco de atlas va aparte para poder dibujarlo POR DELANTE de los
     continentes: si quedara detrás, la Antártida se comería la cenefa. */
  function marcoIncreibles(W, H) {
    let s = "";
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
    /* El paisaje de animales se dibuja entero aquí: la deco antigua estaba
       calculada para 2600 px de ancho y ya no encaja en el lienzo nuevo,
       así que se descarta en lugar de pintarse encima. */
    THEMES.animales.content.explore.deco = function (e) {
      return decoSvg(escenaAnimales(e), (e && e.width) || 4200);
    };
  })();

  (function () {
    const orig = THEMES.increibles.content.explore.deco;
    THEMES.increibles.content.explore.deco = function (e) {
      const previo = orig ? orig.call(this, e) : "";
      const inner = previo.replace(/^[\s\S]*?<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "");
      const W = (e && e.width) || 2600;
      return decoSvg(escenaIncreibles(e) + inner + marcoIncreibles(W, 1100), W);
    };
  })();

})();
