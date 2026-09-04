"use strict";
/* ============================================================
   CUERPO HUMANO: los dos niños de pie del mapa de Explorar, con
   los órganos y los huesos dibujados A ESCALA y en su sitio.

   La silueta manda. Medida sobre el propio dibujo de más abajo:
     cabeza  círculo r=145 en (cx,165)  ->  de y=20 a y=310
     cuello  de 282 a 368, 108 de ancho
     tronco  de 368 (hombros, cx±196) a 827 (centro de la cadera);
             la línea de la cadera (los lados) está en y=760
     brazos  cx±246, de 366 a 706 (codo hacia 532, muñeca 660)
     piernas cx±99, de 778 a 1040 (rodilla hacia 895) y pies a 1074
   Proporciones de niño de verdad: las piernas son largas (la
   cadera va ARRIBA) para que el fémur sea el hueso más largo,
   como en su ficha: fémur > húmero > tibia > cúbito y radio.
     húmero ~146, cúbito y radio ~121 (0,83), fémur ~179 (1,22 del
     húmero), tibia y peroné ~141 (0,79 del fémur).

   Se ve al niño DE FRENTE: su derecha es nuestra izquierda. Por
   eso el hígado cae a la izquierda de la pantalla y el estómago
   a la derecha. La cabeza del páncreas también va a la izquierda
   de pantalla (lado derecho del niño), metida en la C del duodeno.

   El ORDEN de la lista de puntos es el orden de pintado, y aquí
   hace tres trabajos a la vez:
     1. los solapes que deben verse (corazón sobre los pulmones,
        vesícula colgando del hígado, delgado dentro del grueso,
        riñones y páncreas por delante del paquete intestinal y
        la vejiga en la pelvis, por delante de todo);
     2. que ningún nombre quede debajo de otro dibujo;
     3. que cada punto conserve sitio libre donde tocarlo.
   Por eso cada ficha lleva su capa y al final se ordena por ella.

   Etiquetas: los puntos apretados llevan lblDx/lblDy para anclar
   su nombre junto a su anatomía. El acomodador del motor borra el
   margin-left inline (y con él el lblDx), así que ese desplazo se
   reaplica aquí vía "left" (que el acomodador respeta) y se le
   vuelve a pedir que recoloque: ver colocaEtiquetasCuerpo().

   El lienzo sigue en 2600 x 1100 y se recorre con scroll.
   ============================================================ */

(function () {
  const bb = (inner, vb) => `<svg viewBox="${vb}" width="100%" height="100%">${inner}</svg>`;
  const ex = THEMES.cuerpo.content.explore;

  ex.width = 2600;
  /* los dibujos salen a su tamaño exacto: lo que se calcula aquí es lo que
     se ve, sin el inflado del motor, que rompería la proporción anatómica */
  ex.poikMax = 1;
  /* mapa anatómico: sin el suelo de 30 px (inflar un órgano sí y otro no
     rompe las proporciones) y con un mínimo de escala del mapa entero para
     que nada quede diminuto; si no cabe a lo alto, se recorre en vertical */
  ex.sinSuelo = true;
  ex.tintaClick = true;
  ex.kMin = 0.5;
  ex.vista0 = 0.1;

  /* centros de las dos siluetas */
  const CO = 560;    /* cuerpo de los ÓRGANOS */
  const CH = 1480;   /* cuerpo de los HUESOS */

  /* los chips llevan el scroll al borde izquierdo de cada zona */
  ex.cats.forEach((c, i) => { c.x = i < 3 ? 250 : 1900; });
  if (!ex.cats.some(c => c.id === "huesos")) {
    ex.cats.splice(3, 0, { id: "huesos", emoji: "🦴", x: 1170, name: { es: "Los huesos", ca: "Els ossos", en: "The bones", cs: "Kosti", fr: "Les os" } });
  }

  /* paleta del hueso, la misma en todas las piezas del esqueleto */
  const HUE = "#f5efe4", HUEB = "#c9bfa8", HUES = "#e4dac4";
  /* los huecos del cráneo (órbitas, nariz) van en un tono claro y amable */
  const HUECO = "#b9ab8e";
  const espejo = (an, s) => `<g transform="translate(${an} 0) scale(-1 1)">${s}</g>`;

  /* ============================================================
     ÓRGANOS
     ============================================================ */

  /* EL CEREBRO: dos hemisferios vistos de frente, con circunvoluciones,
     la cisura en medio y el tronco encefálico asomando por abajo */
  const svgCerebro = bb(`
    <defs><linearGradient id="cuaCerebroG" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f9c4d3"/><stop offset="100%" stop-color="#df7ea1"/></linearGradient></defs>
    <path d="M100 100 L124 100 L124 118 C126 128 118 132 112 130 C106 132 98 128 100 118 Z" fill="#d1849c" stroke="#b04a72" stroke-width="3"/>
    <path d="M112 10 Q86 2 62 16 Q34 24 26 40 Q6 52 13 70 Q6 90 26 99 Q38 122 63 118 Q86 130 112 124 Z" fill="url(#cuaCerebroG)" stroke="#c2557d" stroke-width="3.2"/>
    <path d="M112 10 Q138 2 162 16 Q190 24 198 40 Q218 52 211 70 Q218 90 198 99 Q186 122 161 118 Q138 130 112 124 Z" fill="url(#cuaCerebroG)" stroke="#c2557d" stroke-width="3.2"/>
    <g stroke="#c2557d" stroke-width="3" fill="none" stroke-linecap="round" opacity=".78">
      <path d="M40 44 Q58 38 62 52 Q66 68 48 72 Q32 78 44 92"/>
      <path d="M74 26 Q64 46 80 56 Q96 66 82 80 Q70 94 86 106"/>
      <path d="M22 62 Q34 60 36 72"/>
      <path d="M184 44 Q166 38 162 52 Q158 68 176 72 Q192 78 180 92"/>
      <path d="M150 26 Q160 46 144 56 Q128 66 142 80 Q154 94 138 106"/>
      <path d="M202 62 Q190 60 188 72"/>
      <path d="M112 12 L112 124" stroke-width="3.4"/>
    </g>`, "0 0 224 132");

  /* LOS OJOS: dos almendras con párpado, iris, pupila y brillo */
  const ojo = (cx) => `
    <path d="M${cx - 32} 32 Q${cx} 6 ${cx + 32} 32 Q${cx} 58 ${cx - 32} 32 Z" fill="#fff" stroke="#8a6a52" stroke-width="2.6"/>
    <circle cx="${cx}" cy="32" r="14" fill="#7b4a26"/>
    <circle cx="${cx}" cy="32" r="6.4" fill="#1d140d"/>
    <circle cx="${cx - 5}" cy="26" r="3.6" fill="#fff" opacity=".92"/>
    <path d="M${cx - 32} 32 Q${cx} 6 ${cx + 32} 32" fill="none" stroke="#6b4a34" stroke-width="4.4" stroke-linecap="round"/>
    <path d="M${cx - 22} 18 l-5 -7 M${cx} 9 l0 -7 M${cx + 22} 18 l5 -7" stroke="#6b4a34" stroke-width="3" stroke-linecap="round"/>`;
  const svgOjos = bb(`
    ${ojo(40)}${ojo(110)}
    <path d="M72 32 l6 -5 l0 10 Z" fill="#f0a8a8"/><path d="M78 32 l-6 -5 l0 10 Z" fill="#f0a8a8"/>`, "0 0 150 64");

  /* EL OÍDO: la oreja izquierda del niño vista de frente, con el hueco
     de la concha mirando hacia la cara (a la izquierda en pantalla) */
  const svgOido = bb(`
    <path d="M23 3 C36 3 43 14 42 28 C41 44 33 56 24 60 C17 63 11 59 12 52 C13 45 20 42 21 34 C22 26 17 22 12 24 C7 26 5 32 6 38 C2 30 5 13 12 8 C15 5 19 3 23 3 Z" fill="#f6c9a6" stroke="#c98d64" stroke-width="3"/>
    <path d="M22 20 C28 24 28 34 23 42 C20 47 15 49 13 46 C11 42 15 38 16 32 C17 26 17 21 22 20 Z" fill="#e2ab83"/>
    <path d="M27 12 C34 16 36 24 34 32" fill="none" stroke="#c98d64" stroke-width="2.6" stroke-linecap="round"/>`, "0 0 46 64");

  /* LOS DIENTES: boca abierta con las dos arcadas y las encías. Cada
     arcada sigue su curva, como en una sonrisa de verdad. */
  const dienteFila = (base, h, arr) => arr.map(x => {
    const dy = Math.round(5 * (1 - Math.pow((x - 52) / 50, 2)));
    return `<rect x="${x}" y="${base + dy}" width="12" height="${h}" rx="4" fill="#fffdf7" stroke="#dcd6c8" stroke-width="1.4"/>`;
  }).join("");
  const svgDientes = bb(`
    <path d="M6 12 Q58 -5 110 12 L110 42 Q58 60 6 42 Z" fill="#7d2f2f"/>
    <path d="M3 11 Q58 -7 113 11 L113 22 Q58 5 3 22 Z" fill="#e8908c"/>
    ${dienteFila(15, 15, [10, 24, 38, 52, 66, 80, 94])}
    <path d="M3 45 Q58 63 113 45 L113 34 Q58 51 3 34 Z" fill="#e0817d"/>
    ${dienteFila(29, 12, [17, 31, 45, 59, 73, 87])}`, "0 0 116 56");

  /* LOS PULMONES: llenan el pecho entero. El derecho del niño (izquierda
     en pantalla) tiene tres lóbulos y el izquierdo dos, con la escotadura
     donde se acomoda el corazón. Arriba, tráquea y bronquios. */
  const svgPulmones = bb(`
    <defs><linearGradient id="cuaPulmonG" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f8ada4"/><stop offset="100%" stop-color="#dc7b74"/></linearGradient></defs>
    <path d="M150 2 L150 36" stroke="#e3c7ae" stroke-width="20" stroke-linecap="round"/>
    <path d="M150 34 L119 60 M150 34 L181 60" stroke="#e3c7ae" stroke-width="14" stroke-linecap="round"/>
    <path d="M141 9 h18 M141 18 h18 M141 27 h18" stroke="#cbab8f" stroke-width="3.4"/>
    <path d="M126 30 C102 26 72 42 52 66 C28 94 22 128 30 152 C36 168 60 175 86 170 C112 165 128 149 131 126 C135 100 133 57 126 30 Z" fill="url(#cuaPulmonG)" stroke="#c4635c" stroke-width="3.4"/>
    <path d="M174 30 C198 26 228 42 248 66 C272 94 278 128 270 152 C264 168 240 175 216 170 C198 166 188 154 191 140 C196 124 214 122 215 106 C216 90 198 84 194 70 C190 54 172 47 174 30 Z" fill="url(#cuaPulmonG)" stroke="#c4635c" stroke-width="3.4"/>
    <g stroke="#b8574f" stroke-width="3" fill="none" opacity=".7" stroke-linecap="round">
      <path d="M50 68 C74 96 100 124 122 150"/>
      <path d="M72 94 C94 92 116 91 130 91"/>
      <path d="M250 68 C230 96 210 122 196 146"/>
      <path d="M119 62 C124 74 126 84 127 98"/>
      <path d="M181 62 C178 70 176 78 176 88"/>
    </g>`, "0 -9 300 200");

  /* EL CORAZÓN: grande de verdad (en un niño ocupa casi la mitad del
     ancho del tórax), anidado sobre los pulmones, con la punta hacia
     abajo y hacia la izquierda del niño (derecha en pantalla). Arriba
     salen la aorta, la arteria pulmonar y la vena cava. */
  const svgCorazon = bb(`
    <defs><linearGradient id="cuaCorazonG" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#e2564e"/><stop offset="100%" stop-color="#a5211f"/></linearGradient></defs>
    <path d="M34 28 L34 9" stroke="#5b86c9" stroke-width="13" stroke-linecap="round"/>
    <path d="M48 30 C45 17 55 10 64 14" fill="none" stroke="#6d9ad8" stroke-width="11" stroke-linecap="round"/>
    <path d="M58 30 C56 12 78 7 86 20 C90 29 88 38 86 47" fill="none" stroke="#c0392b" stroke-width="12" stroke-linecap="round"/>
    <path d="M26 44 C22 24 42 16 58 26 C72 14 94 22 92 44 C96 70 84 98 70 119 C50 109 30 74 26 44 Z" fill="url(#cuaCorazonG)" stroke="#7f1414" stroke-width="3"/>
    <path d="M26 44 C22 24 42 16 58 26 C72 14 94 22 92 44 C74 54 44 54 26 44 Z" fill="#8e2c33" opacity=".75"/>
    <g stroke="#f2a49e" fill="none" stroke-linecap="round" opacity=".85">
      <path d="M56 48 C62 70 64 94 68 114" stroke-width="4"/>
      <path d="M28 48 C46 58 72 56 90 46" stroke-width="3.4"/>
      <path d="M40 72 C48 78 56 80 62 78" stroke-width="3"/>
    </g>`, "20 0 76 124");

  /* EL HÍGADO: la víscera más grande, como dos manos juntas. Cuelga del
     diafragma en el lado derecho del niño y su lóbulo izquierdo cruza la
     línea media. En el borde de abajo lleva la muesca de la vesícula. */
  const svgHigado = bb(`
    <defs><linearGradient id="cuaHigadoG" x1="0.2" y1="0" x2="0.8" y2="1">
      <stop offset="0%" stop-color="#b06054"/><stop offset="100%" stop-color="#7a352c"/></linearGradient></defs>
    <path d="M12 56 C8 26 34 8 70 5 C118 1 168 8 206 20 C226 26 234 36 228 46 C216 58 190 63 160 63 C124 65 96 90 66 98 C36 106 16 84 12 56 Z" fill="url(#cuaHigadoG)" stroke="#54201a" stroke-width="3.4"/>
    <path d="M162 12 C158 28 157 46 159 62" fill="none" stroke="#54201a" stroke-width="4" opacity=".65"/>
    <path d="M30 32 C52 18 86 14 118 18" fill="none" stroke="#d6958a" stroke-width="6" opacity=".4" stroke-linecap="round"/>
    <path d="M52 92 C62 84 74 84 82 90" fill="none" stroke="#3f1712" stroke-width="2.6" opacity=".35"/>
    <path d="M186 26 C202 30 214 34 222 39" fill="none" stroke="#3f1712" stroke-width="2.6" opacity=".3"/>`, "0 0 234 122");

  /* LA VESÍCULA: del tamaño de una nuez, pegada bajo el hígado y
     solapando de verdad su borde inferior */
  const svgVesicula = bb(`
    <defs><linearGradient id="cuaVesicG" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#a9d07b"/><stop offset="100%" stop-color="#5c8436"/></linearGradient></defs>
    <path d="M27 8 C31 3 39 3 41 9" fill="none" stroke="#5f8a3f" stroke-width="5" stroke-linecap="round"/>
    <path d="M25 10 C31 18 45 26 45 42 C45 56 36 62 25 62 C14 62 5 56 5 42 C5 26 19 18 25 10 Z" fill="url(#cuaVesicG)" stroke="#40602a" stroke-width="3"/>
    <ellipse cx="17" cy="41" rx="6" ry="11" fill="#c8e2a8" opacity=".5"/>`, "0 0 50 64");

  /* EL PÁNCREAS: como en la lámina, se ve ENTERO por debajo del
     estómago (no detrás): alargado en diagonal, con la cabeza GRUESA
     abajo a la izquierda de pantalla (hacia la C del duodeno, lado
     derecho del niño) y la cola AFINANDO arriba hacia el bazo. Se
     pinta por delante del paquete intestinal y enhebrado entre los
     dos riñones, sin tapar ninguna judía. */
  const svgPancreas = bb(`
    <defs><linearGradient id="cuaPancreasG" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0%" stop-color="#dcaa5e"/><stop offset="100%" stop-color="#f4d99f"/></linearGradient></defs>
    <path d="M46 66 C64 50 86 32 101 16 C104 13 108 10 110 9 C113 8 114 13 111 16 C96 32 76 52 58 72 C54 76 48 72 46 66 Z" fill="url(#cuaPancreasG)" stroke="#a8802f" stroke-width="3" stroke-linejoin="round"/>
    <path d="M38 36 C53 38 62 52 58 66 C64 69 65 77 59 81 C51 87 38 90 28 86 C15 81 8 68 12 55 C15 43 26 34 38 36 Z" fill="url(#cuaPancreasG)" stroke="#a8802f" stroke-width="3"/>
    <path d="M50 64 C70 48 88 32 104 16" fill="none" stroke="#b98f36" stroke-width="3" opacity=".7"/>
    <g fill="#c9993f" opacity=".45">
      <circle cx="28" cy="62" r="4.6"/><circle cx="42" cy="74" r="4"/><circle cx="40" cy="50" r="3.8"/>
      <circle cx="66" cy="52" r="3.4"/><circle cx="82" cy="38" r="3"/><circle cx="96" cy="26" r="2.6"/>
    </g>`, "0 0 112 92");

  /* LOS RIÑONES: par VISIBLE flanqueando la línea media, como en la
     lámina: cada judía entera con el hilio hacia dentro, los vasos
     cruzando hacia el centro y los uréteres bajando hacia la vejiga.
     Se pintan DELANTE del paquete intestinal: solo su polo inferior
     queda con el colon pasando por detrás. */
  const rinon = `
    <path d="M30 3 C13 6 3 25 4 44 C5 66 17 74 36 74 C49 74 57 66 49 60 C38 50 36 33 47 24 C55 17 44 2 30 3 Z" fill="url(#cuaRinonG)" stroke="#5e2427" stroke-width="3.2"/>
    <path d="M12 22 C8 34 9 48 16 58" fill="none" stroke="#d38b8d" stroke-width="4" opacity=".45"/>
    <path d="M50 34 C70 33 92 30 111 28" fill="none" stroke="#c0392b" stroke-width="5" stroke-linecap="round"/>
    <path d="M50 45 C72 47 94 44 111 40" fill="none" stroke="#5b86c9" stroke-width="5" stroke-linecap="round"/>
    <path d="M51 54 C68 62 84 70 96 77" fill="none" stroke="#e0c060" stroke-width="6" stroke-linecap="round"/>`;
  const svgRinones = bb(`
    <defs><linearGradient id="cuaRinonG" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#bb6165"/><stop offset="100%" stop-color="#7c3336"/></linearGradient></defs>
    ${rinon}${espejo(224, rinon)}`, "0 0 224 82");

  /* EL ESTÓMAGO: bolsa en jota, arriba a la izquierda del niño y en
     contacto con el hígado. Entra el esófago por arriba y sale el
     duodeno abajo, hacia la línea media. */
  const svgEstomago = bb(`
    <defs><linearGradient id="cuaEstomagoG" x1="0.2" y1="0" x2="0.8" y2="1">
      <stop offset="0%" stop-color="#f6b49f"/><stop offset="100%" stop-color="#dd8067"/></linearGradient></defs>
    <path d="M24 2 L24 22" stroke="#e3b4a0" stroke-width="13" stroke-linecap="round"/>
    <path d="M20 4 C48 -2 92 14 106 46 C120 78 108 116 78 126 C52 134 26 118 20 96 C16 80 26 68 40 62 C52 56 46 40 34 34 C24 28 16 16 20 4 Z" fill="url(#cuaEstomagoG)" stroke="#bb6448" stroke-width="3.4"/>
    <path d="M22 100 C18 110 14 118 10 126" fill="none" stroke="#dd8067" stroke-width="14" stroke-linecap="round"/>
    <path d="M22 100 C18 110 14 118 10 126" fill="none" stroke="#f0a68c" stroke-width="6" stroke-linecap="round"/>
    <g stroke="#bb6448" stroke-width="3" fill="none" opacity=".5" stroke-linecap="round">
      <path d="M34 74 C50 66 70 68 84 78"/>
      <path d="M30 92 C48 82 74 84 90 96"/>
      <path d="M34 110 C52 100 76 104 92 112"/>
    </g>`, "0 -5 130 148");

  /* EL INTESTINO GRUESO: el marco del abdomen bajo, ahora compacto y
     hundido en la cadera, como en la lámina: el colon transverso cruza
     por DETRÁS de los polos inferiores de los riñones (nunca por encima
     de ellos), los lados bajan cortos, el ciego lleva su apéndice hacia
     dentro y la sigma acaba en el recto, en el centro de la pelvis.
     El ciego va GRANDE a propósito (es la parte más ancha del colon de
     verdad): es la esquina que nada tapa y donde el dedo siempre acierta. */
  const marcoColon = "M32 72 C32 58 32 44 34 38 C36 29 44 26 56 26 L254 26 C268 26 280 32 280 44 C280 56 278 64 272 70 C264 78 248 82 234 86 C220 90 208 96 206 104";
  const svgGrueso = bb(`
    <ellipse cx="32" cy="82" rx="21" ry="17" fill="#c07a58"/>
    <path d="${marcoColon}" fill="none" stroke="#c07a58" stroke-width="26" stroke-linecap="round"/>
    <path d="M40 94 C44 102 52 106 60 104" fill="none" stroke="#c07a58" stroke-width="9" stroke-linecap="round"/>
    <path d="M206 102 C204 110 204 116 208 122" fill="none" stroke="#c07a58" stroke-width="9" stroke-linecap="round"/>
    <ellipse cx="32" cy="82" rx="13" ry="11" fill="#eba97f"/>
    <path d="${marcoColon}" fill="none" stroke="#eba97f" stroke-width="16" stroke-linecap="round"/>
    <path d="M40 94 C44 102 52 106 60 104" fill="none" stroke="#eba97f" stroke-width="4" stroke-linecap="round"/>
    <path d="M206 102 C204 110 204 116 208 122" fill="none" stroke="#eba97f" stroke-width="4" stroke-linecap="round"/>
    <g stroke="#a5613f" stroke-width="4" opacity=".75" stroke-linecap="round">
      <path d="M20 44 h24 M20 58 h24"/>
      <path d="M90 15 v22 M130 15 v22 M170 15 v22 M210 15 v22"/>
      <path d="M268 50 h24"/>
      <path d="M248 78 l4 15 M224 88 l2 15"/>
    </g>`, "0 0 310 132");

  /* EL INTESTINO DELGADO: el tubo fino y larguísimo, enrollado en tres
     pisos de asas que llenan la ventana que deja el marco del grueso */
  const asas = "M24 10 C64 2 132 3 168 10 C186 15 138 20 88 19 C40 18 24 28 50 33 C92 39 160 32 186 37 C204 42 156 48 106 46 C60 44 30 48 42 56 C58 65 138 60 172 65";
  const svgDelgado = bb(`
    <path d="${asas}" fill="none" stroke="#d4788a" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="${asas}" fill="none" stroke="#f4b3bf" stroke-width="8.5" stroke-linecap="round" stroke-linejoin="round"/>
    <g stroke="#b95a70" stroke-width="3" opacity=".5" stroke-linecap="round">
      <path d="M58 5 v10 M102 5 v10 M146 7 v10 M104 15 v10 M56 16 v10 M52 28 v10 M98 33 v10 M148 32 v10 M172 37 v9 M124 41 v9 M74 41 v9 M62 52 v9 M108 56 v9 M150 54 v9"/>
    </g>`, "0 0 230 78");

  /* LA VEJIGA: la bolsita elástica de la pelvis, debajo del paquete
     intestinal, donde se guarda el pipí que bajan los uréteres de los
     riñones. Amarilla anaranjada y bien legible, del tamaño de la
     vesícula o un poco mayor. */
  const svgVejiga = bb(`
    <defs><linearGradient id="cuaVejigaG" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f6c445"/><stop offset="100%" stop-color="#e08a2d"/></linearGradient></defs>
    <path d="M16 4 C14 12 18 20 27 25" fill="none" stroke="#e0c060" stroke-width="5" stroke-linecap="round"/>
    <path d="M56 4 C58 12 54 20 45 25" fill="none" stroke="#e0c060" stroke-width="5" stroke-linecap="round"/>
    <path d="M36 18 C52 18 63 27 63 38 C63 50 51 56 36 56 C21 56 9 50 9 38 C9 27 20 18 36 18 Z" fill="url(#cuaVejigaG)" stroke="#a8641f" stroke-width="3"/>
    <path d="M15 40 C23 45 30 46 36 46 C44 46 53 44 57 39" fill="none" stroke="#c47a24" stroke-width="2.4" opacity=".55"/>
    <ellipse cx="26" cy="33" rx="7" ry="9" fill="#f8dc9a" opacity=".55"/>`, "0 0 72 60");

  /* LOS MÚSCULOS, LA SANGRE, LA PIEL Y EL ADN: fichas de sistemas, no
     piezas a escala. Se conservan como estaban, ajustadas de tamaño. */
  const svgMusculos = bb(`
    <path d="M12 70 L44 70 Q44 48 30 42 Q40 22 62 22 L84 26 Q92 30 88 40 L64 38 Q56 40 58 48 Q80 52 84 68 Q86 82 70 84 L20 84 Q10 80 12 70 Z" fill="#e8956d" stroke="#b56542" stroke-width="2.6"/>
    <path d="M34 62 Q46 52 58 60" stroke="#b56542" stroke-width="3" fill="none" stroke-linecap="round"/>`, "8 20 86 68");
  const svgSangre = bb(`
    <path d="M50 6 Q78 44 78 62 Q78 88 50 88 Q22 88 22 62 Q22 44 50 6 Z" fill="#d63a3a" stroke="#9e1f1f" stroke-width="2.6"/>
    <circle cx="40" cy="62" r="7" fill="#f08585"/><circle cx="58" cy="70" r="5.4" fill="#f08585"/><circle cx="56" cy="52" r="4.6" fill="#fff" opacity=".85"/>`, "20 4 60 87");
  const svgPiel = bb(`
    <rect x="10" y="20" width="80" height="26" rx="8" fill="#f3c39e"/>
    <rect x="10" y="46" width="80" height="16" rx="6" fill="#e8938c"/>
    <rect x="10" y="62" width="80" height="14" rx="6" fill="#f0d060"/>
    <path d="M30 20 Q30 8 38 8 Q44 8 44 18 M58 20 Q58 10 66 10 Q72 10 72 18" stroke="#5d4037" stroke-width="3.4" fill="none" stroke-linecap="round"/>`, "8 4 84 78");
  const svgAdn = bb(`
    <path d="M28 6 Q28 30 50 40 Q72 50 72 74 M72 6 Q72 30 50 40 Q28 50 28 74 M28 74 Q28 88 36 94 M72 74 Q72 88 64 94" stroke="#7e57c2" stroke-width="5" fill="none" stroke-linecap="round"/>
    ${[14, 26, 54, 66, 80].map(y => `<line x1="34" y1="${y}" x2="66" y2="${y}" stroke="#4dd0e1" stroke-width="4" stroke-linecap="round"/>`).join("")}`, "24 2 52 96");
  const svgHuesoFicha = bb(`
    <path d="M32 20 Q32 6 42 6 Q52 6 52 16 Q62 16 62 26 Q62 36 50 34 L46 66 Q58 68 56 78 Q54 88 44 86 Q44 96 34 94 Q24 92 28 82 Q18 80 20 70 Q22 62 34 64 L38 34 Q26 36 26 26 Q26 20 32 20 Z" fill="${HUE}" stroke="${HUEB}" stroke-width="2.4"/>`, "16 3 50 96");

  /* ============================================================
     HUESOS
     ============================================================ */

  /* EL CRÁNEO: casco de hueso que LLENA la cabeza (queda solo un anillo
     fino de piel), con órbitas pequeñas y claras, cada una con su
     puntito de brillo para que parezcan ojitos y no agujeros. */
  const dienteCra = (y, h, xs) => xs.map(x => `<rect x="${x}" y="${y}" width="11" height="${h}" rx="3.4" fill="#fffdf6" stroke="#d8ceb6" stroke-width="1.4"/>`).join("");
  const orbita = (cx) => `
    <ellipse cx="${cx}" cy="94" rx="20" ry="16" fill="${HUECO}"/>
    <circle cx="${cx + 6}" cy="89" r="4.6" fill="#fdf8ec" opacity=".85"/>`;
  const svgCraneo = bb(`
    <defs><linearGradient id="cuaCraneoG" x1="0.3" y1="0" x2="0.7" y2="1">
      <stop offset="0%" stop-color="#fdf8ec"/><stop offset="100%" stop-color="#ddd0b6"/></linearGradient></defs>
    <path d="M34 150 C34 158 38 190 44 200 C54 218 76 228 100 228 C124 228 146 218 156 200 C162 190 166 158 166 150 L152 162 C150 182 144 194 134 202 C126 209 114 212 100 212 C86 212 74 209 66 202 C56 194 50 182 48 162 Z" fill="url(#cuaCraneoG)" stroke="#b5a888" stroke-width="3"/>
    <path d="M100 6 C42 6 6 46 8 98 C9 122 19 143 34 154 L38 176 C42 186 57 192 72 192 L128 192 C143 192 158 186 162 176 L166 154 C181 143 191 122 192 98 C194 46 158 6 100 6 Z" fill="url(#cuaCraneoG)" stroke="#b5a888" stroke-width="3.4"/>
    ${orbita(62)}${orbita(138)}
    <path d="M100 122 L94 137 C97 140 103 140 106 137 Z" fill="${HUECO}"/>
    <g fill="none" stroke="#c9bda0" stroke-width="4.4" stroke-linecap="round">
      <path d="M26 116 C38 128 50 133 62 135"/>
      <path d="M174 116 C162 128 150 133 138 135"/>
      <path d="M100 8 L100 40"/><path d="M50 34 C70 44 130 44 150 34"/>
    </g>
    ${dienteCra(164, 16, [64, 77, 90, 103, 116, 129])}
    ${dienteCra(194, 13, [66, 79, 92, 105, 118, 131])}`, "0 0 200 236");

  /* LA COLUMNA: de la base del cráneo al sacro. Vértebras que crecen
     hacia abajo (7 cervicales, 12 dorsales, 5 lumbares), sacro y cóccix,
     ya con el cóccix entero dentro de la caja. El sacro se dibuja aquí
     y encaja en el hueco de la pelvis. */
  const svgColumna = (() => {
    const filas = [];
    for (let i = 0; i < 7; i++) filas.push({ h: 12, w: 24 + i * 1.1, p: 0 });
    for (let i = 0; i < 12; i++) filas.push({ h: 14, w: 30 + i * 0.9, p: 1 });
    for (let i = 0; i < 5; i++) filas.push({ h: 18.5, w: 40 + i * 1.3, p: 1 });
    let y = 4, s = "";
    filas.forEach(f => {
      const x = 33 - f.w / 2;
      if (f.p) {
        s += `<rect x="${(x - 9).toFixed(1)}" y="${(y + f.h * 0.26).toFixed(1)}" width="11" height="${(f.h * 0.46).toFixed(1)}" rx="3" fill="${HUES}" stroke="${HUEB}" stroke-width="1.6"/>`;
        s += `<rect x="${(x + f.w - 2).toFixed(1)}" y="${(y + f.h * 0.26).toFixed(1)}" width="11" height="${(f.h * 0.46).toFixed(1)}" rx="3" fill="${HUES}" stroke="${HUEB}" stroke-width="1.6"/>`;
      }
      s += `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${f.w.toFixed(1)}" height="${f.h}" rx="${(f.h * 0.34).toFixed(1)}" fill="${HUE}" stroke="${HUEB}" stroke-width="2"/>`;
      y += f.h + 2.4;
    });
    s += `<path d="M11 ${y.toFixed(1)} L55 ${y.toFixed(1)} L47 ${(y + 36).toFixed(1)} Q33 ${(y + 48).toFixed(1)} 19 ${(y + 36).toFixed(1)} Z" fill="${HUE}" stroke="${HUEB}" stroke-width="2.2"/>`;
    s += `<g fill="${HUEB}" opacity=".8"><circle cx="22" cy="${(y + 9).toFixed(1)}" r="3.2"/><circle cx="44" cy="${(y + 9).toFixed(1)}" r="3.2"/><circle cx="24" cy="${(y + 21).toFixed(1)}" r="3"/><circle cx="42" cy="${(y + 21).toFixed(1)}" r="3"/></g>`;
    s += `<path d="M27 ${(y + 46).toFixed(1)} q6 10 12 0 q0 9 -6 11 q-6 -2 -6 -11 Z" fill="${HUE}" stroke="${HUEB}" stroke-width="2"/>`;
    return bb(s, "0 0 66 472");
  })();

  /* LAS COSTILLAS: la caja entera, más compacta (en un niño la caja
     torácica acaba cerca de la cintura, no hay cuello de jirafa entre
     ella y la pelvis). Esternón y clavículas delante, diez pares de
     costillas con su cartílago y dos flotantes al final. */
  const svgCostillas = (() => {
    const cx = 161;
    /* cada costilla nace junto a la columna, se abre hacia el lado y vuelve
       hacia delante; las siete primeras llegan al esternón por su cartílago
       y las tres siguientes se quedan formando el borde de abajo */
    const dato = (i) => {
      const y0 = 22 + i * 12.5;                                /* nacimiento atrás */
      const wm = 60 + i * 9.5;                                 /* lo que se abre */
      const xe = i < 7 ? 16 + i * 2.5 : 40 + (i - 7) * 20;     /* dónde acaba delante */
      const ye = i < 7 ? 32 + i * 14 : 132 + (i - 7) * 20;
      const yl = y0 + (ye - y0) * 0.55;                        /* el punto más ancho */
      return { y0, wm, yl, xe, ye };
    };
    const n1 = (v) => (Math.round(v * 10) / 10);
    let s = `<g fill="none" stroke="${HUE}" stroke-linecap="round">`;
    for (let i = 0; i < 10; i++) {
      const d = dato(i), gr = 9 - i * 0.2;
      const lado = (sg) => `M${cx + sg * 15} ${d.y0} C${n1(cx + sg * d.wm * 0.55)} ${n1(d.y0 - 3)}, ${n1(cx + sg * d.wm)} ${n1(d.yl - 12)}, ${n1(cx + sg * d.wm)} ${n1(d.yl)} C${n1(cx + sg * d.wm)} ${n1(d.yl + 12)}, ${n1(cx + sg * d.wm * 0.72)} ${n1(d.ye + 7)}, ${n1(cx + sg * d.xe)} ${n1(d.ye)}`;
      s += `<path d="${lado(-1)}" stroke-width="${n1(gr)}"/><path d="${lado(1)}" stroke-width="${n1(gr)}"/>`;
    }
    /* las dos flotantes: cortas y sin llegar a ninguna parte */
    [0, 1].forEach(j => {
      const y0 = 150 + j * 14, wm = 112 - j * 16;
      const lado = (sg) => `M${cx + sg * 15} ${y0} C${n1(cx + sg * wm * 0.6)} ${y0 - 4}, ${cx + sg * wm} ${y0 + 14}, ${n1(cx + sg * (wm - 8))} ${y0 + 32}`;
      s += `<path d="${lado(-1)}" stroke-width="6.6"/><path d="${lado(1)}" stroke-width="6.6"/>`;
    });
    /* los cartílagos que atan las siete primeras al esternón */
    s += `</g><g fill="none" stroke="#e7e0cd" stroke-linecap="round" stroke-width="7">`;
    for (let i = 0; i < 7; i++) {
      const d = dato(i);
      s += `<path d="M${cx - d.xe} ${n1(d.ye)} C${n1(cx - d.xe + 6)} ${n1(d.ye - 5)}, ${cx - 18} ${n1(d.ye - 6)}, ${cx - 13} ${n1(d.ye - 12)}"/>`;
      s += `<path d="M${cx + d.xe} ${n1(d.ye)} C${n1(cx + d.xe - 6)} ${n1(d.ye - 5)}, ${cx + 18} ${n1(d.ye - 6)}, ${cx + 13} ${n1(d.ye - 12)}"/>`;
    }
    /* clavículas y esternón */
    s += `</g><g fill="none" stroke="${HUE}" stroke-width="11" stroke-linecap="round">
      <path d="M138 24 C112 12 78 6 48 11"/><path d="M184 24 C210 12 244 6 274 11"/></g>`;
    s += `<path d="M143 16 h36 a6 6 0 0 1 6 7 l-9 18 v62 c0 12 -6 22 -15 28 c-9 -6 -15 -16 -15 -28 v-62 l-9 -18 a6 6 0 0 1 6 -7 Z" fill="${HUE}" stroke="${HUEB}" stroke-width="3"/>`;
    s += `<path d="M147 42 h28 M150 100 h22" stroke="${HUEB}" stroke-width="2.6" opacity=".7" fill="none"/>`;
    return bb(s, "0 0 322 206");
  })();

  /* LA PELVIS: el cuenco ancho de la cadera. Las dos palas del ilion, el
     pubis por abajo y, en cada lado, la cavidad redonda donde encaja la
     cabeza del fémur. En medio queda el hueco por el que asoma el sacro
     de la columna, para no dibujarlo dos veces. */
  const medioHueso = `
    <path d="M128 14 C92 4 44 8 24 30 C8 48 12 74 30 88 C40 96 48 106 54 118 C60 132 76 140 92 136 C108 132 118 120 122 106 L130 84 C112 78 104 62 106 46 C107 32 118 20 128 14 Z" fill="${HUE}" stroke="${HUEB}" stroke-width="3.2"/>
    <ellipse cx="94" cy="124" rx="17" ry="13" fill="rgba(120,80,60,.32)" transform="rotate(-14 94 124)"/>
    <circle cx="62" cy="96" r="22" fill="${HUES}" stroke="${HUEB}" stroke-width="3"/>
    <circle cx="62" cy="96" r="12" fill="rgba(120,80,60,.28)"/>
    <path d="M40 30 C64 20 96 18 120 24" fill="none" stroke="${HUEB}" stroke-width="2.6" opacity=".7"/>`;
  const svgPelvis = bb(`
    ${medioHueso}${espejo(300, medioHueso)}
    <path d="M112 116 C126 126 140 134 146 142 L154 142 C160 134 174 126 188 116" fill="none" stroke="${HUE}" stroke-width="15" stroke-linecap="round"/>
    <path d="M148 139 L152 139" stroke="${HUEB}" stroke-width="4"/>`, "0 0 300 154");

  /* EL FÉMUR: el hueso más largo del cuerpo, y aquí por fin lo es. Va
     del hueco de la cadera a la rodilla, con la cabeza redonda mirando
     hacia dentro, el trocánter hacia fuera y los dos cóndilos abajo.
     Diáfisis gruesa, de hueso que aguanta más peso que el hormigón. */
  const svgFemur = bb(`
    <path d="M50 4 C64 3 73 13 71 26 C69 37 58 43 48 39 L44 48 C40 35 30 31 22 35 C14 39 15 52 24 56 C29 72 31 94 30 114 C29 132 28 146 29 156 C22 160 16 166 17 173 C18 179 25 181 31 178 C34 177 36 174 37 171 C39 174 43 178 47 177 C53 176 57 170 56 164 C55 158 50 154 46 151 C45 134 45 114 46 96 C47 78 48 62 50 50 Z" fill="${HUE}" stroke="${HUEB}" stroke-width="3.2"/>
    <path d="M35 60 C38 84 39 116 38 146" fill="none" stroke="${HUEB}" stroke-width="2.4" opacity=".5"/>
    <ellipse cx="61" cy="17" rx="9" ry="7" fill="${HUES}" opacity=".8"/>
    <path d="M31 176 L33 168 M45 175 L43 167" stroke="${HUEB}" stroke-width="2.4" opacity=".7"/>`, "0 0 78 182");

  /* LA TIBIA Y EL PERONÉ: de la rodilla al tobillo. La tibia, gruesa y
     por dentro, con su meseta arriba y el maléolo abajo; el peroné,
     fino y por fuera, con la cabeza más baja. */
  const svgTibia = bb(`
    <path d="M10 6 C5 6 3 13 5 20 L14 46 C16 68 16 90 15 106 C14 120 17 130 25 131 C33 132 37 125 36 114 C34 92 35 64 37 42 L41 16 C42 8 38 4 31 4 Z" fill="${HUE}" stroke="${HUEB}" stroke-width="3"/>
    <ellipse cx="24" cy="136" rx="8" ry="6.5" fill="${HUE}" stroke="${HUEB}" stroke-width="2.6"/>
    <path d="M52 20 C46 20 44 26 45 32 L48 52 C50 74 50 96 49 110 C48 120 51 127 56 127 C61 127 63 120 62 110 C60 92 60 68 59 48 L59 30 C59 23 57 20 52 20 Z" fill="${HUE}" stroke="${HUEB}" stroke-width="2.6"/>
    <ellipse cx="57" cy="132" rx="5.5" ry="5" fill="${HUE}" stroke="${HUEB}" stroke-width="2.2"/>
    <path d="M24 30 C26 56 27 82 26 102" fill="none" stroke="${HUEB}" stroke-width="2.2" opacity=".5"/>`, "0 0 66 146");

  /* EL HÚMERO: del hombro al codo, ya con diáfisis de hueso de verdad
     (no de bastoncillo). La cabeza redonda mira hacia dentro y abajo
     se ensancha para formar el codo. */
  const svgHumero = bb(`
    <path d="M29 4 C14 3 4 11 4 21 C4 31 13 38 21 35 L27 44 C27 60 27 80 27 96 C27 108 27 116 27 122 C19 126 13 132 14 139 C15 146 22 149 28 147 C31 146 33 144 34 141 C36 144 39 147 43 146 C49 145 52 139 51 133 C50 127 45 123 40 120 C39.5 104 39.5 90 39.5 74 C39.5 62 39.5 52 40 44 L41 36 C41 26 38 12 29 4 Z" fill="${HUE}" stroke="${HUEB}" stroke-width="3.2"/>
    <path d="M31 48 C33 72 33 100 32 122" fill="none" stroke="${HUEB}" stroke-width="2.4" opacity=".5"/>
    <ellipse cx="17" cy="19" rx="8" ry="7" fill="${HUES}" opacity=".8"/>
    <ellipse cx="33" cy="138" rx="8" ry="6" fill="${HUES}"/>`, "0 0 64 150");

  /* EL CÚBITO Y EL RADIO: del codo a la muñeca, más cortos que el
     húmero (como en el brazo de verdad). El cúbito es grueso arriba
     (el pico del codo) y fino abajo; el radio, al revés. */
  const svgCubito = bb(`
    <path d="M14 3 C6 4 3 11 5 19 L9 32 C11 52 12 74 13 92 C13 102 13 110 14 116 C15 121 23 121 24 115 C25 104 24 90 23 74 C22 52 21 32 20 20 C20 10 19 4 14 3 Z" fill="${HUE}" stroke="${HUEB}" stroke-width="3"/>
    <path d="M8 11 C15 8 21 13 22 21 C23 29 17 33 10 31" fill="${HUES}" stroke="${HUEB}" stroke-width="2.4"/>
    <path d="M45 18 C38 18 35 24 36 32 L38 52 C39 72 40 92 41 106 C37 111 36 117 40 121 C44 124 50 123 52 118 C54 113 52 107 48 104 C47 88 47 68 47 50 L48 32 C49 24 50 18 45 18 Z" fill="${HUE}" stroke="${HUEB}" stroke-width="2.8"/>
    <ellipse cx="44" cy="23" rx="8" ry="5.5" fill="${HUES}" stroke="${HUEB}" stroke-width="2.2"/>`, "0 0 60 124");

  /* ============================================================
     COLOCACIÓN: caja, sitio, capa de pintado y desplazamiento de
     etiqueta de cada ficha. Las capas bajas se pintan primero.
     lx/ly = lblDx/lblDy: anclan el nombre junto a su anatomía.
     ============================================================ */
  const PLAN = {
    /* ---- cabeza: nada se solapa, van al final ---- */
    "El cerebro": { x: CO, y: 114, w: 224, h: 132, z: 70, svg: svgCerebro },
    "Los ojos": { x: CO, y: 214, w: 150, h: 64, z: 70, svg: svgOjos },
    "El oído": { x: CO + 147, y: 195, w: 52, h: 72, z: 70, svg: svgOido },
    "Los dientes": { x: CO, y: 266, w: 116, h: 56, z: 70, svg: svgDientes },
    /* ---- pecho: el corazón, grande, se anida sobre los pulmones;
       su nombre y el de los pulmones se anclan a su altura ---- */
    "Los pulmones": { x: CO, y: 457, w: 300, h: 200, z: 10, svg: svgPulmones, lx: -95, ly: -57 },
    "El corazón": { x: CO + 26, y: 470, w: 126, h: 209, z: 24, svg: svgCorazon, lx: 170, ly: -98 },
    /* ---- barriga, con la composición de la lámina: hígado y estómago
       arriba, la vesícula colgando del hígado, los riñones como par
       visible flanqueando la línea media (delante del colon, que solo
       les pasa por detrás de los polos inferiores), el páncreas entero
       en diagonal bajo el estómago y por delante del paquete
       intestinal, y la vejiga en la pelvis, bajo los intestinos ---- */
    "El hígado": { x: CO - 66, y: 595, w: 234, h: 122, z: 20, svg: svgHigado, lx: -54, ly: -101 },
    "El estómago": { x: CO + 90, y: 598, w: 130, h: 148, z: 34, svg: svgEstomago, lx: 15, ly: -81 },
    "El intestino grueso": { x: CO, y: 764, w: 310, h: 132, z: 40, svg: svgGrueso, lx: -160 },
    "El intestino delgado": { x: CO, y: 776, w: 230, h: 78, z: 46, svg: svgDelgado, lx: 92, ly: 52 },
    "Los riñones": { x: CO, y: 692, w: 224, h: 82, z: 48, svg: svgRinones, lx: 235, ly: -36 },
    "La vesícula": { x: CO - 128, y: 650, w: 50, h: 64, z: 50, svg: svgVesicula, lx: -125, ly: -35 },
    "El páncreas": { x: CO - 52, y: 684, w: 112, h: 92, z: 52, svg: svgPancreas, lx: -238, ly: -8 },
    "La vejiga": { x: CO, y: 796, w: 72, h: 60, z: 56, svg: svgVejiga },
    /* ---- huesos: pelvis primero y el fémur ENCIMA (la cabeza redonda
       queda anidada en la cavidad, como en las láminas de esqueleto, y
       así el dedo encuentra el fémur entero); luego columna y costillas ---- */
    "La pelvis": { x: CH, y: 703, w: 300, h: 154, z: 12, svg: svgPelvis },
    "El fémur": { x: CH - 99, y: 798, w: 78, h: 182, z: 16, svg: svgFemur },
    "La columna": { x: CH, y: 536, w: 66, h: 472, z: 22, svg: svgColumna, ly: 36 },
    "Las costillas": { x: CH, y: 495, w: 322, h: 206, z: 26, svg: svgCostillas, lx: 105 },
    "El cráneo": { x: CH, y: 165, w: 244, h: 288, z: 70, svg: svgCraneo, lx: 95, ly: -45 },
    "La tibia y el peroné": { x: CH + 99, y: 967, w: 66, h: 146, z: 70, svg: svgTibia },
    "El húmero": { x: CH + 246, y: 455, w: 64, h: 150, z: 70, svg: svgHumero, ly: -75 },
    "El cúbito y el radio": { x: CH + 246, y: 601, w: 60, h: 124, z: 70, svg: svgCubito },
    /* ---- fichas de sistemas ---- */
    "Los huesos": { x: 1240, y: 236, w: 72, h: 138, z: 70, svg: svgHuesoFicha },
    "Los músculos": { x: CO - 248, y: 468, w: 76, h: 60, z: 70, svg: svgMusculos },
    "La sangre": { x: 2110, y: 360, w: 72, h: 104, z: 70, svg: svgSangre },
    "La piel": { x: 2350, y: 368, w: 100, h: 84, z: 70, svg: svgPiel },
    "El ADN": { x: 2230, y: 550, w: 70, h: 129, z: 70, svg: svgAdn }
  };

  /* fichas que no vienen del contenido base y hay que crear */
  const NUEVOS = [
    {
      emoji: "💀", cat: "huesos",
      name: { es: "El cráneo", ca: "El crani", en: "The skull", cs: "Lebka", fr: "Le crâne" },
      fact: { es: "El cráneo es el casco de hueso que protege tu cerebro. ¡Naciste con casco de serie!", ca: "El crani és el casc d'os que protegeix el teu cervell. Vas néixer amb casc de sèrie!", en: "The skull is the bone helmet that protects your brain. You were born with a built-in helmet!", cs: "Lebka je kostěná helma, která chrání tvůj mozek. Narodila ses s helmou v základní výbavě!", fr: "Le crâne est le casque en os qui protège ton cerveau. Tu es née avec un casque de série !" }
    },
    {
      emoji: "🪜", cat: "huesos",
      name: { es: "La columna", ca: "La columna", en: "The spine", cs: "Páteř", fr: "La colonne" },
      fact: { es: "La columna es una torre de 33 huesitos llamados vértebras: va de la cabeza al sacro, te mantiene de pie, te deja doblarte y protege los nervios.", ca: "La columna és una torre de 33 ossets anomenats vèrtebres: va del cap al sacre, et manté dret, et deixa doblegar-te i protegeix els nervis.", en: "The spine is a tower of 33 little bones called vertebrae: it runs from your head to your sacrum, keeps you upright, lets you bend and protects your nerves.", cs: "Páteř je věž z 33 kůstek zvaných obratle: vede od hlavy ke kosti křížové, drží tě zpříma, umožňuje ti ohýbat se a chrání nervy.", fr: "La colonne est une tour de 33 petits os appelés vertèbres : elle va de la tête au sacrum, te tient debout, te laisse te plier et protège les nerfs." }
    },
    {
      emoji: "🦴", cat: "huesos",
      name: { es: "El húmero", ca: "L'húmer", en: "The humerus", cs: "Pažní kost", fr: "L'humérus" },
      fact: { es: "El húmero va del hombro al codo. Cuando te das un golpe en el codo y notas un cosquilleo eléctrico, el travieso es un nervio que pasa junto a él.", ca: "L'húmer va de l'espatlla al colze. Quan et dones un cop al colze i notes un pessigolleig elèctric, l'entremaliat és un nervi que hi passa a la vora.", en: "The humerus goes from your shoulder to your elbow. When you bump your elbow and feel an electric tickle, the prankster is a nerve running right next to it.", cs: "Pažní kost vede od ramene k lokti. Když se uhodíš do lokte a ucítíš elektrické brnění, ten šibal je nerv, který vede hned vedle ní.", fr: "L'humérus va de l'épaule au coude. Quand tu te cognes le coude et que ça picote comme l'électricité, le farceur est un nerf qui passe juste à côté." }
    },
    {
      emoji: "🦴", cat: "huesos",
      name: { es: "El cúbito y el radio", ca: "El cúbit i el radi", en: "The ulna and the radius", cs: "Loketní a vřetenní kost", fr: "Le cubitus et le radius" },
      fact: { es: "El antebrazo tiene dos huesos, el cúbito y el radio, que se cruzan como bailarines cada vez que giras la muñeca.", ca: "L'avantbraç té dos ossos, el cúbit i el radi, que es creuen com ballarins cada cop que gires el canell.", en: "Your forearm has two bones, the ulna and the radius, and they cross like dancers every time you turn your wrist.", cs: "Předloktí má dvě kosti, loketní a vřetenní, a ty se kříží jako tanečníci pokaždé, když otočíš zápěstím.", fr: "L'avant-bras a deux os, le cubitus et le radius, qui se croisent comme des danseurs chaque fois que tu tournes le poignet." }
    },
    {
      emoji: "🦴", cat: "huesos",
      name: { es: "La pelvis", ca: "La pelvis", en: "The pelvis", cs: "Pánev", fr: "Le bassin" },
      fact: { es: "La pelvis es un cuenco de hueso que une el tronco con las piernas y sujeta la barriga por abajo. En sus dos huecos redondos encaja la cabeza del fémur.", ca: "La pelvis és un bol d'os que uneix el tronc amb les cames i aguanta la panxa per sota. Als seus dos forats rodons encaixa el cap del fèmur.", en: "The pelvis is a bowl of bone that joins your body to your legs and holds your tummy from below. The head of the femur fits into its two round sockets.", cs: "Pánev je kostěná mísa, která spojuje trup s nohama a zespodu drží bříško. Do jejích dvou kulatých jamek zapadá hlavice stehenní kosti.", fr: "Le bassin est un bol en os qui relie le tronc aux jambes et soutient le ventre par en dessous. La tête du fémur s'emboîte dans ses deux cavités rondes." }
    },
    {
      emoji: "🦴", cat: "huesos",
      name: { es: "El fémur", ca: "El fèmur", en: "The femur", cs: "Stehenní kost", fr: "Le fémur" },
      fact: { es: "El fémur, en el muslo, es el hueso más largo y fuerte de tu cuerpo: va de la cadera a la rodilla y aguanta más peso que el hormigón.", ca: "El fèmur, a la cuixa, és l'os més llarg i fort del teu cos: va del maluc al genoll i aguanta més pes que el formigó.", en: "The femur, in your thigh, is the longest and strongest bone in your body: it runs from the hip to the knee and can take more weight than concrete.", cs: "Stehenní kost je nejdelší a nejsilnější kost tvého těla: vede od kyčle ke koleni a unese víc váhy než beton.", fr: "Le fémur, dans la cuisse, est l'os le plus long et le plus fort de ton corps : il va de la hanche au genou et supporte plus de poids que le béton." }
    },
    {
      emoji: "🦴", cat: "huesos",
      name: { es: "La tibia y el peroné", ca: "La tíbia i el peroné", en: "The tibia and the fibula", cs: "Holenní a lýtková kost", fr: "Le tibia et le péroné" },
      fact: { es: "La tibia es tu espinilla y el peroné es su compañero delgadito. Van de la rodilla al tobillo y juntos te llevan andando a todas partes.", ca: "La tíbia és la teva canyella i el peroné és el seu company primet. Van del genoll al turmell i junts et porten caminant a tot arreu.", en: "The tibia is your shin and the fibula is its slim partner. They run from the knee to the ankle and together they walk you everywhere.", cs: "Holenní kost je tvoje holeň a lýtková kost je její štíhlý parťák. Vedou od kolena ke kotníku a společně tě všude odnesou.", fr: "Le tibia est ton tibia sous le genou et le péroné est son copain tout fin. Ils vont du genou à la cheville et ensemble ils te portent partout." }
    },
    {
      emoji: "🥔", cat: "barriga",
      name: { es: "El hígado", ca: "El fetge", en: "The liver", cs: "Játra", fr: "Le foie" },
      fact: { es: "El hígado es la gran fábrica del cuerpo: limpia la sangre y guarda energía. ¡Es el órgano más grande de tu barriga, como dos manos juntas!", ca: "El fetge és la gran fàbrica del cos: neteja la sang i guarda energia. És l'òrgan més gran de la teva panxa, com dues mans juntes!", en: "The liver is the body's great factory: it cleans the blood and stores energy. It is the biggest organ in your tummy, as big as two hands together!", cs: "Játra jsou velká továrna těla: čistí krev a ukládají energii. Jsou největší orgán v tvém bříšku, velký jako dvě ruce vedle sebe!", fr: "Le foie est la grande usine du corps : il nettoie le sang et garde de l'énergie. C'est le plus grand organe de ton ventre, comme deux mains l'une à côté de l'autre !" }
    },
    {
      emoji: "🫒", cat: "barriga",
      name: { es: "La vesícula", ca: "La vesícula", en: "The gallbladder", cs: "Žlučník", fr: "La vésicule" },
      fact: { es: "La vesícula es una bolsita verde del tamaño de una nuez, pegada debajo del hígado. Guarda la bilis, un jugo que ayuda a digerir las comidas con grasa.", ca: "La vesícula és una bosseta verda de la mida d'una nou, enganxada sota el fetge. Guarda la bilis, un suc que ajuda a pair els menjars amb greix.", en: "The gallbladder is a little green bag the size of a walnut, tucked under the liver. It stores bile, a juice that helps digest fatty foods.", cs: "Žlučník je zelený váček velký jako ořech, přilepený pod játry. Uchovává žluč, šťávu, která pomáhá trávit tučná jídla.", fr: "La vésicule est un petit sac vert de la taille d'une noix, collé sous le foie. Elle garde la bile, un jus qui aide à digérer les repas gras." }
    },
    {
      emoji: "🍌", cat: "barriga",
      name: { es: "El páncreas", ca: "El pàncrees", en: "The pancreas", cs: "Slinivka", fr: "Le pancréas" },
      fact: { es: "El páncreas cruza por detrás del estómago. Fabrica jugos para deshacer la comida y una llave llamada insulina que regula el azúcar del cuerpo.", ca: "El pàncrees creua per darrere de l'estómac. Fabrica sucs per desfer el menjar i una clau anomenada insulina que regula el sucre del cos.", en: "The pancreas crosses behind the stomach. It makes juices to break down food and a key called insulin that controls the body's sugar.", cs: "Slinivka leží za žaludkem. Vyrábí šťávy na trávení jídla a klíček jménem inzulin, který řídí cukr v těle.", fr: "Le pancréas passe derrière l'estomac. Il fabrique des jus pour défaire la nourriture et une clé appelée insuline qui règle le sucre du corps." }
    },
    {
      emoji: "🌀", cat: "barriga",
      name: { es: "El intestino delgado", ca: "L'intestí prim", en: "The small intestine", cs: "Tenké střevo", fr: "L'intestin grêle" },
      fact: { es: "El intestino delgado es un tubo finito y larguísimo, ¡de unos seis metros!, enrollado como una madeja dentro del grueso: ahí la comida buena pasa a la sangre.", ca: "L'intestí prim és un tub finet i llarguíssim, d'uns sis metres!, enrotllat com un cabdell dins del gros: allà el menjar bo passa a la sang.", en: "The small intestine is a thin, super long tube, about six metres, coiled like a ball of wool inside the large one: that is where the good food passes into the blood.", cs: "Tenké střevo je tenounká, předlouhá trubice, asi šest metrů!, smotaná jako klubíčko uvnitř tlustého: tam přechází dobré jídlo do krve.", fr: "L'intestin grêle est un tube tout fin et très long, environ six mètres, enroulé comme une pelote à l'intérieur du gros : c'est là que la bonne nourriture passe dans le sang." }
    },
    {
      emoji: "💧", cat: "barriga",
      name: { es: "La vejiga", ca: "La bufeta", en: "The bladder", cs: "Močový měchýř", fr: "La vessie" },
      fact: { es: "La vejiga es una bolsita elástica que guarda el pipí que fabrican los riñones. Cuando se llena, te avisa: ¡hora de ir al baño!", ca: "La bufeta és una bosseta elàstica que guarda el pipí que fabriquen els ronyons. Quan s'omple, t'avisa: hora d'anar al lavabo!", en: "The bladder is a stretchy little bag that stores the pee your kidneys make. When it fills up, it lets you know: time to go to the toilet!", cs: "Močový měchýř je pružný váček, kde se schovává čůrání, které vyrobí ledviny. Když se naplní, dá ti vědět: je čas jít na záchod!", fr: "La vessie est un petit sac élastique qui garde le pipi fabriqué par les reins. Quand elle est pleine, elle te prévient : c'est l'heure d'aller aux toilettes !" }
    }
  ];

  /* ---------- se aplica el plan ---------- */
  const busca = (nom) => ex.pois.find(p => p.name && p.name.es === nom);

  /* las costillas venían en la categoría del pecho: son hueso */
  const rib = busca("Las costillas");
  if (rib) rib.cat = "huesos";
  const fichaHuesos = busca("Los huesos");
  if (fichaHuesos) fichaHuesos.cat = "huesos";

  /* el intestino de siempre pasa a ser el grueso, con su nombre y su dato */
  const gordo = busca("El intestino");
  if (gordo) {
    gordo.name = { es: "El intestino grueso", ca: "L'intestí gros", en: "The large intestine", cs: "Tlusté střevo", fr: "Le gros intestin" };
    gordo.fact = { es: "El intestino grueso es el tubo ancho del final: rodea a su hermano delgado, recoge lo que no se aprovecha y absorbe el agua. ¡Mide un metro y medio!", ca: "L'intestí gros és el tub ample del final: envolta el seu germà prim, recull el que no s'aprofita i absorbeix l'aigua. Fa un metre i mig!", en: "The large intestine is the wide tube at the end: it frames its thin brother, collects what is not needed and absorbs the water. It is one and a half metres long!", cs: "Tlusté střevo je široká trubice na konci: obklopuje svého tenkého bratra, sbírá, co tělo nepotřebuje, a vstřebává vodu. Měří metr a půl!", fr: "Le gros intestin est le gros tube de la fin : il encadre son frère grêle, ramasse ce qui ne sert plus et absorbe l'eau. Il mesure un mètre et demi !" };
  }

  /* dato nuevo para los pulmones y para los riñones: ahora se ven a escala */
  const pul = busca("Los pulmones");
  if (pul) pul.fact = { es: "Dos esponjas rosas que llenan el pecho entero y se hinchan de aire unas veinte mil veces al día. ¡Y tú sin enterarte!", ca: "Dues esponges roses que omplen el pit sencer i s'inflen d'aire unes vint mil vegades al dia. I tu sense adonar-te'n!", en: "Two pink sponges that fill your whole chest and puff up with air about twenty thousand times a day. Without you even noticing!", cs: "Dvě růžové houby, které vyplní celý hrudník a nafouknou se vzduchem asi dvacettisíckrát denně. A ty o tom ani nevíš!", fr: "Deux éponges roses qui remplissent toute la poitrine et se gonflent d'air environ vingt mille fois par jour. Sans que tu t'en aperçoives !" };
  const rin = busca("Los riñones");
  if (rin) rin.fact = { es: "Dos lavadoras con forma de judía, una a cada lado de la columna, que limpian toda tu sangre muchas veces al día.", ca: "Dues rentadores amb forma de mongeta, una a cada costat de la columna, que netegen tota la teva sang moltes vegades al dia.", en: "Two bean-shaped washing machines, one on each side of your spine, that clean all your blood many times a day.", cs: "Dvě pračky ve tvaru fazole, jedna po každé straně páteře, které mnohokrát denně vyperou všechnu tvou krev.", fr: "Deux machines à laver en forme de haricot, une de chaque côté de la colonne, qui nettoient tout ton sang plusieurs fois par jour." };

  /* alta de las fichas que faltaban */
  NUEVOS.forEach(o => { if (!busca(o.name.es)) ex.pois.push({ cat: o.cat, emoji: o.emoji, x: 0, y: 0, name: o.name, fact: o.fact }); });

  /* caja, sitio, capa y desplazamiento de etiqueta de cada punto */
  ex.pois.forEach(p => {
    const d = p.name && PLAN[p.name.es];
    if (!d) { p._capa = 70; return; }
    p.x = d.x; p.y = d.y; p.iw = d.w; p.ih = d.h; p._capa = d.z;
    if (d.lx) p.lblDx = d.lx;
    if (d.ly) p.lblDy = d.ly;
    if (d.svg) p.svg = d.svg;
  });

  /* el orden de la lista es el orden de pintado: primero lo que va detrás */
  ex.pois.sort((a, b) => (a._capa || 70) - (b._capa || 70));

  /* ============================================================
     ETIQUETAS: el acomodador del motor borra el margin-left inline
     y con él se pierde el lblDx. Aquí se reaplica ese desplazo vía
     "left" (que el acomodador NO toca), se limpian las clases que
     hubiera dejado un primer pase a ciegas y se le pide que vuelva
     a acomodar, ya midiendo los nombres en su sitio de verdad.
     Solo actúa en el mapa del cuerpo.
     ============================================================ */
  const SITIOS_LBL = ["lblup", "lblright", "lblleft", "lblupright", "lblupleft", "lbldown2"];
  const colocaEtiquetasCuerpo = () => {
    if (typeof S === "undefined" || S.theme !== "cuerpo") return;
    const cv = document.getElementById("mapcanvas");
    if (!cv) return;
    const nodos = [...cv.querySelectorAll(".poi")];
    if (nodos.length !== ex.pois.length) return;
    nodos.forEach((el, i) => {
      const l = el.querySelector(".plabel");
      if (!l) return;
      SITIOS_LBL.forEach(c => l.classList.remove(c));
      l.style.marginLeft = "";
      const dx = ex.pois[i].lblDx || 0;
      if (dx) l.style.left = `calc(50% + ${dx}px)`;
    });
    if (typeof acomodaEtiquetas === "function") acomodaEtiquetas();
  };

  /* ============================================================
     LAS DOS SILUETAS
     ============================================================ */
  ex.decoCuerpos = function () {
    /* la consulta que hay detrás es de pared clara: con la piel al 30% la
       silueta se perdía, así que va más presente y con su propio contorno */
    const skin = "rgba(255,203,166,.62)";
    const bone = "rgba(255,255,255,.6)";
    const bordeSkin = "rgba(196,120,86,.55)";
    let s = "";

    /* silueta de niño, reutilizable: cx = centro. Cabeza grande y, ahora
       sí, piernas largas y cadera alta, como un cuerpo de niño de verdad:
       así el fémur del muslo es el hueso más largo y los órganos caben
       dentro a su tamaño. La oreja es un bulto generoso para que el
       dibujo del oído quede entero sobre la piel. */
    const silueta = (cx) => `<g fill="${skin}" stroke="${bordeSkin}" stroke-width="2.8" filter="url(#cgrBulto)">
        <circle cx="${cx}" cy="165" r="145"/>
        <circle cx="${cx - 147}" cy="197" r="36"/><circle cx="${cx + 147}" cy="197" r="36"/>
        <rect x="${cx - 54}" y="282" width="108" height="86" rx="30"/>
        <path d="M${cx - 196} 368 Q${cx} 326 ${cx + 196} 368 C${cx + 176} 540 ${cx + 206} 650 ${cx + 196} 760 C${cx + 150} 850 ${cx - 150} 850 ${cx - 196} 760 C${cx - 206} 650 ${cx - 176} 540 ${cx - 196} 368 Z"/>
        <rect x="${cx - 284}" y="366" width="76" height="340" rx="38"/>
        <circle cx="${cx - 246}" cy="735" r="38"/>
        <rect x="${cx + 208}" y="366" width="76" height="340" rx="38"/>
        <circle cx="${cx + 246}" cy="735" r="38"/>
        <rect x="${cx - 166}" y="778" width="134" height="262" rx="62"/>
        <rect x="${cx + 32}" y="778" width="134" height="262" rx="62"/>
        <rect x="${cx - 182}" y="1026" width="132" height="48" rx="23"/>
        <rect x="${cx + 50}" y="1026" width="132" height="48" rx="23"/>
      </g>`;

    /* CUERPO 1 (los órganos): con pelo y carita */
    s += `<ellipse cx="${CO}" cy="1066" rx="360" ry="36" fill="rgba(0,0,0,.16)"/>`;
    s += silueta(CO);
    /* el pelo: una media luna pegada a la cabeza y un mechón de remolino */
    s += `<g fill="rgba(140,80,60,.5)">
      <path d="M${CO - 146} 182 Q${CO - 152} 90 ${CO - 88} 42 Q${CO - 40} 16 ${CO} 16 Q${CO + 40} 16 ${CO + 88} 42 Q${CO + 152} 90 ${CO + 146} 182 Q${CO + 130} 120 ${CO + 90} 92 Q${CO + 46} 62 ${CO} 60 Q${CO - 46} 62 ${CO - 90} 92 Q${CO - 130} 120 ${CO - 146} 182 Z"/>
      <path d="M${CO - 14} 26 q14 -28 40 -18 q-20 8 -22 24 Z"/></g>`;
    s += `<circle cx="${CO - 96}" cy="240" r="20" fill="rgba(255,110,140,.35)"/><circle cx="${CO + 96}" cy="240" r="20" fill="rgba(255,110,140,.35)"/>`;
    /* su distintivo: un corazoncito latiendo al lado de la cabeza */
    s += `<path d="M${CO + 232} 84 C${CO + 222} 72 ${CO + 202} 82 ${CO + 212} 96 L${CO + 232} 114 L${CO + 252} 96 C${CO + 262} 82 ${CO + 242} 72 ${CO + 232} 84 Z" fill="rgba(255,90,110,.75)"><animate attributeName="opacity" values=".75;.4;.75" dur="1.6s" repeatCount="indefinite"/></path>`;

    /* CUERPO 2 (los huesos): el esqueleto de verdad son las fichas, así que
       aquí solo queda de esquema lo que no tiene ficha propia: el brazo
       izquierdo entero (codo en 532, muñeca en 660), el muslo derecho
       (hasta la rodilla, en 890) y la pantorrilla izquierda. Así ninguna
       extremidad se ve vacía y nada se pisa con los dibujos. */
    s += `<ellipse cx="${CH}" cy="1066" rx="360" ry="36" fill="rgba(0,0,0,.16)"/>`;
    s += silueta(CH);
    s += `<g stroke="${bone}" fill="none" stroke-linecap="round">
      <line x1="${CH - 246}" y1="386" x2="${CH - 246}" y2="522" stroke-width="9"/>
      <circle cx="${CH - 246}" cy="532" r="8" stroke-width="4"/>
      <line x1="${CH - 257}" y1="544" x2="${CH - 257}" y2="650" stroke-width="7"/>
      <line x1="${CH - 235}" y1="546" x2="${CH - 235}" y2="648" stroke-width="6"/>
      <line x1="${CH + 99}" y1="764" x2="${CH + 99}" y2="886" stroke-width="9"/>
      <line x1="${CH - 106}" y1="906" x2="${CH - 106}" y2="1034" stroke-width="8"/>
      <line x1="${CH - 90}" y1="910" x2="${CH - 90}" y2="1030" stroke-width="6"/>
    </g>`;
    /* su distintivo: un huesito flotando al lado de la cabeza */
    s += `<g transform="translate(${CH + 232} 96) scale(1.7)"><path d="M-16 4 Q-24 4 -24 -2 Q-24 -8 -18 -7 Q-18 -13 -12 -12 Q-6 -11 -8 -4 L8 -1 Q10 -8 16 -7 Q22 -6 21 0 Q27 1 26 7 Q25 13 18 11 Q12 10 14 3 L-2 0 Q-4 7 -10 6 Q-16 5 -16 4 Z" fill="rgba(245,239,228,.8)"/></g>`;

    /* tras pintar el mapa, se anclan los nombres desplazados (ver arriba) */
    setTimeout(colocaEtiquetasCuerpo, 0);

    return `<svg viewBox="0 0 ${ex.width} 1100" preserveAspectRatio="none"><defs><filter id="cgrBulto" x="-12%" y="-8%" width="126%" height="120%"><feDropShadow dx="0" dy="6" stdDeviation="9" flood-color="rgba(120,60,40,.35)"/></filter></defs>${s}</svg>`;
  };
  ex.deco = ex.decoCuerpos;

})();
