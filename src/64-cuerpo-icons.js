"use strict";
/* ============================================================
   CUERPO HUMANO renovado: cuerpo DE PIE (vertical) con el
   esqueleto visible, y órganos dibujados en su sitio anatómico.
   El resto de fichas (músculos, huesos, sangre, piel, ADN) van
   en un panel lateral de "sistemas".

   El lienzo pasa a 2600 x 1100: las dos siluetas caben mucho más
   grandes y separadas, y los 26 dibujos dejan de pisarse. El mapa
   se recorre con scroll horizontal, como los demás.

   Cada icono lleva su viewBox AJUSTADO al dibujo (sin aire
   sobrante) y una caja con la misma proporción: así el dibujo
   llena la caja y se ve grande de verdad. El motor además nunca
   deja un dibujo por debajo de 30 px en pantalla.
   ============================================================ */

(function () {
  const bb = (inner, vb) => `<svg viewBox="${vb || "0 0 100 100"}" width="100%" height="100%">${inner}</svg>`;
  const ex = THEMES.cuerpo.content.explore;

  /* lienzo ancho: cada silueta tiene su franja y sobra sitio para los nombres */
  ex.width = 2600;
  ex.poikMax = 1.15; /* los órganos no se inflan: proporción fiel con el cuerpo */

  /* centros de las dos siluetas y del panel de sistemas */
  const CO = 560;    /* cuerpo de los ÓRGANOS */
  const CH = 1480;   /* cuerpo de los HUESOS */

  /* los chips llevan el scroll al borde izquierdo de cada zona */
  ex.cats.forEach((c, i) => { c.x = i < 3 ? 250 : 1900; });
  ex.cats.splice(3, 0, { id: "huesos", emoji: "🦴", x: 1170, name: { es: "Los huesos", ca: "Els ossos", en: "The bones", cs: "Kosti", fr: "Les os" } });

  /* posiciones anatómicas sobre el cuerpo vertical */
  const POS = {
    "🧠": [CO, 100], "👀": [CO, 208], "👂": [CO + 142, 215], "🦷": [CO, 282],
    "🫁": [CO - 25, 435], "❤️": [CO + 100, 455], "🦴rib": null,
    "🍲": [CO + 80, 562], "➰": [CO, 850], "🫘": [CO - 5, 742],
    "💪": [CO - 248, 468], "🦴": [CH - 248, 505], "🩸": [2110, 360], "🖐️": [2350, 368], "🧬": [2230, 550]
  };

  const ICONS = {
    "🧠": { w: 130, h: 105, svg: bb(`
      <defs><radialGradient id="cBr" cx="40%" cy="35%"><stop offset="0%" stop-color="#f8bbd0"/><stop offset="100%" stop-color="#e57ba0"/></radialGradient></defs>
      <path d="M22 62 Q8 54 12 40 Q6 28 20 22 Q24 10 40 12 Q50 4 60 12 Q76 10 80 24 Q92 30 86 42 Q92 54 78 62 Q70 72 54 68 Q36 74 22 62 Z" fill="url(#cBr)" stroke="#c2557d" stroke-width="2.4"/>
      <path d="M50 12 Q48 40 50 68 M28 26 Q40 34 34 48 M70 24 Q58 34 66 48 M20 44 Q32 44 30 56 M80 44 Q68 46 72 58" stroke="#c2557d" stroke-width="2.4" fill="none" stroke-linecap="round"/>`, "0 0 100 80") },

    "👀": { w: 100, h: 50, svg: bb(`
      <ellipse cx="26" cy="24" rx="22" ry="16" fill="#fff" stroke="#7a5a48" stroke-width="2"/>
      <ellipse cx="74" cy="24" rx="22" ry="16" fill="#fff" stroke="#7a5a48" stroke-width="2"/>
      <circle cx="28" cy="24" r="8" fill="#5a8bc4"/><circle cx="28" cy="24" r="3.6" fill="#161616"/><circle cx="30" cy="22" r="1.4" fill="#fff"/>
      <circle cx="76" cy="24" r="8" fill="#5a8bc4"/><circle cx="76" cy="24" r="3.6" fill="#161616"/><circle cx="78" cy="22" r="1.4" fill="#fff"/>`, "0 0 100 48") },

    /* la oreja llevaba su dibujo perdido en medio de un marco enorme:
       ahora el viewBox va ceñido y se ve el triple de grande */
    "👂": { w: 60, h: 84, svg: bb(`
      <path d="M30 34 Q26 8 52 8 Q78 10 74 40 Q70 62 54 74 Q40 84 34 72 Q30 64 40 60 Q52 56 52 44 Q52 32 42 34 Q34 36 34 44" fill="#f3c39e" stroke="#c98d64" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`, "22 4 60 84") },

    "🦷": { w: 90, h: 52, svg: bb(`
      <path d="M6 30 Q50 6 94 30 L94 44 Q50 24 6 44 Z" fill="#e8938c"/>
      ${[14, 30, 46, 62, 78].map(x => `<rect x="${x}" y="34" width="13" height="18" rx="5" fill="#fff" stroke="#cfd4da" stroke-width="1.4"/>`).join("")}`, "0 0 100 58") },

    "❤️": { w: 74, h: 77, svg: bb(`
      <defs><radialGradient id="cCo" cx="42%" cy="38%"><stop offset="0%" stop-color="#f36c6c"/><stop offset="100%" stop-color="#b71c1c"/></radialGradient></defs>
      <rect x="42" y="4" width="14" height="16" rx="6" fill="#7ba7d9"/>
      <rect x="58" y="8" width="12" height="14" rx="5" fill="#d97b7b" transform="rotate(24 64 15)"/>
      <path d="M50 26 Q30 10 18 26 Q8 42 22 62 Q34 80 50 90 Q70 76 80 58 Q90 40 78 26 Q66 14 50 26 Z" fill="url(#cCo)"/>
      <path d="M38 34 Q48 44 44 60" stroke="#7f1414" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M30 40 Q26 50 32 58" stroke="#e89a9a" stroke-width="2.4" fill="none" stroke-linecap="round"/>`, "6 2 88 92") },

    "🫁": { w: 92, h: 99, svg: bb(`
      <rect x="46" y="4" width="8" height="26" rx="4" fill="#e8c8b0"/>
      <path d="M46 24 Q36 26 34 34 M54 24 Q64 26 66 34" stroke="#e8c8b0" stroke-width="7" fill="none" stroke-linecap="round"/>
      <path d="M40 32 Q16 40 12 66 Q10 86 26 88 Q42 88 44 68 L44 38 Z" fill="#f0958f" stroke="#c9645e" stroke-width="2.4"/>
      <path d="M60 32 Q84 40 88 66 Q90 86 74 88 Q58 88 56 68 L56 38 Z" fill="#f0958f" stroke="#c9645e" stroke-width="2.4"/>
      <path d="M24 52 Q32 56 38 52 M62 52 Q68 56 76 52" stroke="#c9645e" stroke-width="2" fill="none"/>`, "10 2 82 88") },

    "🍲": { w: 62, h: 75, svg: bb(`
      <path d="M40 6 Q38 20 44 28 Q70 30 80 48 Q88 66 72 80 Q54 92 36 82 Q18 72 22 52 Q26 36 44 28" fill="none"/>
      <path d="M42 4 L54 8 Q48 20 52 28 Q78 32 84 54 Q88 74 68 84 Q46 92 30 78 Q16 64 26 46 Q32 36 44 30 Q40 18 42 4 Z" fill="#f2a08c" stroke="#c86a54" stroke-width="2.6"/>
      <path d="M36 52 Q48 44 62 52 M34 64 Q48 56 66 64" stroke="#c86a54" stroke-width="2.4" fill="none" stroke-linecap="round"/>`, "14 2 76 92") },

    "➰": { w: 92, h: 92, svg: bb(`
      <path d="M14 22 Q50 10 86 22 Q94 34 84 40 Q56 30 20 40 Q6 34 14 22 Z" fill="#e8a58c"/>
      <path d="M16 44 Q16 58 30 58 Q44 58 44 48 Q44 40 56 40 Q68 40 68 52 Q68 64 54 64 Q40 64 40 74 Q40 84 56 84 Q74 84 80 70" stroke="#d97f60" stroke-width="13" fill="none" stroke-linecap="round"/>
      <path d="M16 44 Q16 58 30 58 Q44 58 44 48 Q44 40 56 40 Q68 40 68 52 Q68 64 54 64 Q40 64 40 74 Q40 84 56 84 Q74 84 80 70" stroke="#f2b096" stroke-width="7" fill="none" stroke-linecap="round"/>`, "5 8 92 92") },

    "🫘": { w: 62, h: 60, svg: bb(`
      <path d="M34 12 Q12 16 12 40 Q12 64 32 66 Q44 66 44 54 Q34 50 34 40 Q34 28 44 26 Q44 14 34 12 Z" fill="#a34f52" stroke="#7c3336" stroke-width="2.4"/>
      <path d="M66 12 Q88 16 88 40 Q88 64 68 66 Q56 66 56 54 Q66 50 66 40 Q66 28 56 26 Q56 14 66 12 Z" fill="#a34f52" stroke="#7c3336" stroke-width="2.4"/>
      <rect x="46" y="66" width="3.4" height="20" rx="1.7" fill="#e0c060"/><rect x="52" y="66" width="3.4" height="20" rx="1.7" fill="#e0c060"/>`, "10 10 80 78") },

    "💪": { w: 84, h: 66, svg: bb(`
      <path d="M12 70 L44 70 Q44 48 30 42 Q40 22 62 22 L84 26 Q92 30 88 40 L64 38 Q56 40 58 48 Q80 52 84 68 Q86 82 70 84 L20 84 Q10 80 12 70 Z" fill="#e8956d" stroke="#b56542" stroke-width="2.6"/>
      <path d="M34 62 Q46 52 58 60" stroke="#b56542" stroke-width="3" fill="none" stroke-linecap="round"/>`, "8 20 86 68") },

    "🦴": { w: 56, h: 108, svg: bb(`
      <path d="M32 20 Q32 6 42 6 Q52 6 52 16 Q62 16 62 26 Q62 36 50 34 L46 66 Q58 68 56 78 Q54 88 44 86 Q44 96 34 94 Q24 92 28 82 Q18 80 20 70 Q22 62 34 64 L38 34 Q26 36 26 26 Q26 20 32 20 Z" fill="#f5efe4" stroke="#c9bfa8" stroke-width="2.4"/>`, "16 3 50 96") },

    "🩸": { w: 60, h: 87, svg: bb(`
      <path d="M50 6 Q78 44 78 62 Q78 88 50 88 Q22 88 22 62 Q22 44 50 6 Z" fill="#d63a3a" stroke="#9e1f1f" stroke-width="2.6"/>
      <circle cx="40" cy="62" r="7" fill="#f08585"/><circle cx="58" cy="70" r="5.4" fill="#f08585"/><circle cx="56" cy="52" r="4.6" fill="#fff" opacity=".85"/>`, "20 4 60 87") },

    "🖐️": { w: 84, h: 70, svg: bb(`
      <rect x="10" y="20" width="80" height="26" rx="8" fill="#f3c39e"/>
      <rect x="10" y="46" width="80" height="16" rx="6" fill="#e8938c"/>
      <rect x="10" y="62" width="80" height="14" rx="6" fill="#f0d060"/>
      <path d="M30 20 Q30 8 38 8 Q44 8 44 18 M58 20 Q58 10 66 10 Q72 10 72 18" stroke="#5d4037" stroke-width="3.4" fill="none" stroke-linecap="round"/>`, "8 4 84 78") },

    "🧬": { w: 58, h: 107, svg: bb(`
      <path d="M28 6 Q28 30 50 40 Q72 50 72 74 M72 6 Q72 30 50 40 Q28 50 28 74 M28 74 Q28 88 36 94 M72 74 Q72 88 64 94" stroke="#7e57c2" stroke-width="5" fill="none" stroke-linecap="round"/>
      ${[14, 26, 54, 66, 80].map(y => `<line x1="34" y1="${y}" x2="66" y2="${y}" stroke="#4dd0e1" stroke-width="4" stroke-linecap="round"/>`).join("")}`, "24 2 52 96") }
  };

  /* costillas: reutilizamos el icono de hueso girado con arcos propios */
  ICONS["🦴rib"] = null;

  ex.pois.forEach(p => {
    const key = p.emoji === "🦴" && p.cat === "pecho" ? "🦴rib" : p.emoji;
    const pos = POS[p.emoji === "🦴" && p.cat === "pecho" ? "🦴rib" : p.emoji];
    if (pos) { p.x = pos[0]; p.y = pos[1]; }
    const ic = ICONS[key];
    if (ic) { p.svg = ic.svg; p.iw = ic.w; p.ih = ic.h; }
  });
  /* las costillas del pecho: icono propio y posición */
  const rib = ex.pois.find(p => p.cat === "pecho" && p.emoji === "🦴");
  if (rib) {
    rib.cat = "huesos";
    rib.x = CH; rib.y = 470;
    rib.iw = 100; rib.ih = 116;
    rib.svg = bb(`
      <line x1="50" y1="2" x2="50" y2="98" stroke="#e8dfd0" stroke-width="6"/>
      ${[10, 24, 38, 52, 66].map(y => `<path d="M50 ${y} Q16 ${y + 3} 12 ${y + 14} Q11 ${y + 20} 20 ${y + 20} Q42 ${y + 16} 50 ${y + 9} M50 ${y} Q84 ${y + 3} 88 ${y + 14} Q89 ${y + 20} 80 ${y + 20} Q58 ${y + 16} 50 ${y + 9}" stroke="#e8dfd0" stroke-width="5" fill="none" stroke-linecap="round"/>`).join("")}`, "7 0 86 100");
  }

  /* --- anatomía fina: hígado, vesícula, páncreas y los DOS intestinos ---
     La vesícula cuelga del hígado (va pegada por debajo de él, como en el
     cuerpo de verdad) y el páncreas cruza por detrás del estómago, a la
     altura de los riñones. Con el lienzo ancho, cada uno tiene su sitio. */
  const gordo = ex.pois.find(p => p.emoji === "➰");
  if (gordo) {
    gordo.name = { es: "El intestino grueso", ca: "L'intestí gros", en: "The large intestine", cs: "Tlusté střevo", fr: "Le gros intestin" };
    gordo.fact = { es: "El intestino grueso es el tubo ancho del final: recoge lo que no se aprovecha y absorbe el agua. ¡Mide un metro y medio!", ca: "L'intestí gros és el tub ample del final: recull el que no s'aprofita i absorbeix l'aigua. Fa un metre i mig!", en: "The large intestine is the wide tube at the end: it collects what is not needed and absorbs the water. It is one and a half metres long!", cs: "Tlusté střevo je široká trubice na konci: sbírá, co tělo nepotřebuje, a vstřebává vodu. Měří metr a půl!", fr: "Le gros intestin est le gros tube de la fin : il ramasse ce qui ne sert plus et absorbe l'eau. Il mesure un mètre et demi !" };
    gordo.svg = bb(`
      <path d="M22 82 L22 34 Q22 16 40 16 L64 16 Q82 16 82 34 L82 78" fill="none" stroke="#c98a6b" stroke-width="15" stroke-linecap="round"/>
      <path d="M22 82 L22 34 Q22 16 40 16 L64 16 Q82 16 82 34 L82 78" fill="none" stroke="#e8ab8c" stroke-width="8" stroke-linecap="round"/>
      ${[[22, 66], [22, 48], [28, 22], [52, 14], [76, 22], [82, 44], [82, 62]].map(pt => `<line x1="${pt[0] - 7}" y1="${pt[1]}" x2="${pt[0] + 7}" y2="${pt[1]}" stroke="#a96a4e" stroke-width="3"/>`).join("")}
      <path d="M82 78 Q82 92 70 92" fill="none" stroke="#c98a6b" stroke-width="13" stroke-linecap="round"/>`, "6 6 92 92");
    gordo.iw = 92; gordo.ih = 92;
  }

  /* la ficha genérica de los huesos se dibuja sobre el cuerpo del esqueleto:
     su categoría es la de los huesos, no la del panel de sistemas */
  const huesosPoi = ex.pois.find(p => p.name && p.name.es === "Los huesos");
  if (huesosPoi) huesosPoi.cat = "huesos";

  const HUESOS_NUEVOS = [
    { emoji: "💀", cat: "huesos", x: CH, y: 152, iw: 92, ih: 103,
      svg: bb(`
        <defs><radialGradient id="cCra" cx="42%" cy="36%"><stop offset="0%" stop-color="#faf4e6"/><stop offset="100%" stop-color="#d8ccb4"/></radialGradient></defs>
        <path d="M50 6 Q86 6 88 44 Q88 62 76 70 L76 84 Q76 92 68 92 L32 92 Q24 92 24 84 L24 70 Q12 62 12 44 Q14 6 50 6 Z" fill="url(#cCra)" stroke="#b5a888" stroke-width="2.6"/>
        <ellipse cx="36" cy="46" rx="9" ry="11" fill="#6b6152"/>
        <ellipse cx="64" cy="46" rx="9" ry="11" fill="#6b6152"/>
        <path d="M50 58 L44 68 L56 68 Z" fill="#6b6152"/>
        <path d="M36 80 L36 90 M46 80 L46 92 M56 80 L56 92 M66 80 L66 90" stroke="#b5a888" stroke-width="3"/>`, "9 3 82 92"),
      name: { es: "El cráneo", ca: "El crani", en: "The skull", cs: "Lebka", fr: "Le crâne" },
      fact: { es: "El cráneo es el casco de hueso que protege tu cerebro. ¡Naciste con casco de serie!", ca: "El crani és el casc d'os que protegeix el teu cervell. Vas néixer amb casc de sèrie!", en: "The skull is the bone helmet that protects your brain. You were born with a built-in helmet!", cs: "Lebka je kostěná helma, která chrání tvůj mozek. Narodila ses s helmou v základní výbavě!", fr: "Le crâne est le casque en os qui protège ton cerveau. Tu es née avec un casque de série !" } },
    { emoji: "🪜", cat: "huesos", x: CH, y: 600, iw: 55, ih: 150,
      svg: bb(`
        <line x1="50" y1="4" x2="50" y2="96" stroke="#e8dfd0" stroke-width="8"/>
        ${[10, 24, 38, 52, 66, 80].map(y => `<rect x="34" y="${y}" width="32" height="9" rx="4.5" fill="#f5efe4" stroke="#c9bfa8" stroke-width="1.8"/>`).join("")}
        <circle cx="50" cy="96" r="6" fill="#f5efe4" stroke="#c9bfa8" stroke-width="2"/>`, "31 2 38 103"),
      name: { es: "La columna", ca: "La columna", en: "The spine", cs: "Páteř", fr: "La colonne" },
      fact: { es: "La columna es una torre de 33 huesitos llamados vértebras: te mantiene de pie, te deja doblarte y protege los nervios.", ca: "La columna és una torre de 33 ossets anomenats vèrtebres: et manté dret, et deixa doblegar-te i protegeix els nervis.", en: "The spine is a tower of 33 little bones called vertebrae: it keeps you upright, lets you bend and protects your nerves.", cs: "Páteř je věž z 33 kůstek zvaných obratle: drží tě zpříma, umožňuje ti ohýbat se a chrání nervy.", fr: "La colonne est une tour de 33 petits os appelés vertèbres : elle te tient debout, te laisse te plier et protège les nerfs." } },
    { emoji: "🦴", cat: "huesos", x: CH + 248, y: 445, iw: 56, ih: 140,
      svg: bb(`
        <path d="M50 8 Q38 2 34 10 Q30 18 40 22 L42 78 Q32 82 36 90 Q40 98 50 92 Q60 98 64 90 Q68 82 58 78 L60 22 Q70 18 66 10 Q62 2 50 8 Z" fill="#f5efe4" stroke="#c9bfa8" stroke-width="2.6"/>`, "30 0 40 100"),
      name: { es: "El húmero", ca: "L'húmer", en: "The humerus", cs: "Pažní kost", fr: "L'humérus" },
      fact: { es: "El húmero va del hombro al codo. Cuando te das un golpe en el codo y notas un cosquilleo eléctrico, el travieso es un nervio que pasa junto a él.", ca: "L'húmer va de l'espatlla al colze. Quan et dones un cop al colze i notes un pessigolleig elèctric, l'entremaliat és un nervi que hi passa a la vora.", en: "The humerus goes from your shoulder to your elbow. When you bump your elbow and feel an electric tickle, the prankster is a nerve running right next to it.", cs: "Pažní kost vede od ramene k lokti. Když se uhodíš do lokte a ucítíš elektrické brnění, ten šibal je nerv, který vede hned vedle ní.", fr: "L'humérus va de l'épaule au coude. Quand tu te cognes le coude et que ça picote comme l'électricité, le farceur est un nerf qui passe juste à côté." } },
    { emoji: "🦴", cat: "huesos", x: CH + 248, y: 615, iw: 58, ih: 96,
      svg: bb(`
        <path d="M36 8 Q28 6 28 14 L32 86 Q32 94 39 93 Q46 92 44 84 L42 16 Q42 10 36 8 Z" fill="#f5efe4" stroke="#c9bfa8" stroke-width="2.6"/>
        <path d="M64 8 Q72 6 72 14 L68 86 Q68 94 61 93 Q54 92 56 84 L58 16 Q58 10 64 8 Z" fill="#f5efe4" stroke="#c9bfa8" stroke-width="2.6"/>`, "21 2 58 96"),
      name: { es: "El cúbito y el radio", ca: "El cúbit i el radi", en: "The ulna and the radius", cs: "Loketní a vřetenní kost", fr: "Le cubitus et le radius" },
      fact: { es: "El antebrazo tiene dos huesos, el cúbito y el radio, que se cruzan como bailarines cada vez que giras la muñeca.", ca: "L'avantbraç té dos ossos, el cúbit i el radi, que es creuen com ballarins cada cop que gires el canell.", en: "Your forearm has two bones, the ulna and the radius, and they cross like dancers every time you turn your wrist.", cs: "Předloktí má dvě kosti, loketní a vřetenní, a ty se kříží jako tanečníci pokaždé, když otočíš zápěstím.", fr: "L'avant-bras a deux os, le cubitus et le radius, qui se croisent comme des danseurs chaque fois que tu tournes le poignet." } },
    { emoji: "🦴", cat: "huesos", x: CH, y: 830, iw: 88, ih: 91,
      svg: bb(`
        <path d="M50 12 Q88 8 90 34 Q90 52 70 60 L60 82 Q56 90 50 90 Q44 90 40 82 L30 60 Q10 52 10 34 Q12 8 50 12 Z" fill="#f5efe4" stroke="#c9bfa8" stroke-width="2.6"/>
        <circle cx="32" cy="38" r="9" fill="#d8ccb4"/><circle cx="68" cy="38" r="9" fill="#d8ccb4"/>`, "7 5 86 89"),
      name: { es: "La pelvis", ca: "La pelvis", en: "The pelvis", cs: "Pánev", fr: "Le bassin" },
      fact: { es: "La pelvis es un cuenco de hueso que une el tronco con las piernas y sujeta la barriga por abajo.", ca: "La pelvis és un bol d'os que uneix el tronc amb les cames i aguanta la panxa per sota.", en: "The pelvis is a bowl of bone that joins your body to your legs and holds your tummy from below.", cs: "Pánev je kostěná mísa, která spojuje trup s nohama a zespodu drží bříško.", fr: "Le bassin est un bol en os qui relie le tronc aux jambes et soutient le ventre par en dessous." } },
    { emoji: "🦴", cat: "huesos", x: CH - 105, y: 925, iw: 68, ih: 121,
      svg: bb(`
        <circle cx="30" cy="14" r="11" fill="#f5efe4" stroke="#c9bfa8" stroke-width="2.6"/>
        <path d="M38 20 Q50 12 54 20 L50 78 Q60 82 56 90 Q50 97 44 91 Q36 95 34 87 Q33 81 41 78 L42 26 Q38 24 38 20 Z" fill="#f5efe4" stroke="#c9bfa8" stroke-width="2.6"/>`, "15 0 56 100"),
      name: { es: "El fémur", ca: "El fèmur", en: "The femur", cs: "Stehenní kost", fr: "Le fémur" },
      fact: { es: "El fémur, en el muslo, es el hueso más largo y fuerte de tu cuerpo: aguanta más peso que el hormigón.", ca: "El fèmur, a la cuixa, és l'os més llarg i fort del teu cos: aguanta més pes que el formigó.", en: "The femur, in your thigh, is the longest and strongest bone in your body: it can take more weight than concrete.", cs: "Stehenní kost je nejdelší a nejsilnější kost tvého těla: unese víc váhy než beton.", fr: "Le fémur, dans la cuisse, est l'os le plus long et le plus fort de ton corps : il supporte plus de poids que le béton." } },
    { emoji: "🦴", cat: "huesos", x: CH + 105, y: 1004, iw: 66, ih: 111,
      svg: bb(`
        <path d="M34 6 Q24 4 24 14 L30 84 Q30 94 39 93 Q48 92 46 82 L42 16 Q42 8 34 6 Z" fill="#f5efe4" stroke="#c9bfa8" stroke-width="2.6"/>
        <path d="M66 10 Q74 8 74 16 L70 86 Q70 94 63 93 Q57 92 58 84 L60 18 Q60 12 66 10 Z" fill="#f5efe4" stroke="#c9bfa8" stroke-width="2.2"/>`, "21 3 56 94"),
      name: { es: "La tibia y el peroné", ca: "La tíbia i el peroné", en: "The tibia and the fibula", cs: "Holenní a lýtková kost", fr: "Le tibia et le péroné" },
      fact: { es: "La tibia es tu espinilla y el peroné es su compañero delgadito. Juntos te llevan andando a todas partes.", ca: "La tíbia és la teva canyella i el peroné és el seu company primet. Junts et porten caminant a tot arreu.", en: "The tibia is your shin and the fibula is its slim partner. Together they walk you everywhere.", cs: "Holenní kost je tvoje holeň a lýtková kost je její štíhlý parťák. Společně tě všude odnesou.", fr: "Le tibia est ton tibia sous le genou et le péroné est son copain tout fin. Ensemble, ils te portent partout." } }
  ];
  HUESOS_NUEVOS.forEach(o => {
    ex.pois.push({ cat: o.cat, emoji: o.emoji, x: o.x, y: o.y, svg: o.svg, iw: o.iw, ih: o.ih, name: o.name, fact: o.fact });
  });

  const NUEVOS = [
    { emoji: "🥔", cat: "barriga", x: CO - 115, y: 565, iw: 96, ih: 64,
      svg: bb(`
        <defs><radialGradient id="cHig" cx="38%" cy="34%"><stop offset="0%" stop-color="#b05a48"/><stop offset="100%" stop-color="#7a3328"/></radialGradient></defs>
        <path d="M6 34 Q8 14 34 10 Q72 6 90 20 Q98 28 92 40 Q80 58 52 60 Q22 62 10 48 Q4 42 6 34 Z" fill="url(#cHig)" stroke="#5d241c" stroke-width="2.4"/>
        <path d="M60 14 Q58 34 66 52" stroke="#5d241c" stroke-width="2.4" fill="none" opacity=".6"/>
        <path d="M16 30 Q30 24 44 28" stroke="#c97a66" stroke-width="3" fill="none" opacity=".7"/>`, "3 5 94 60"),
      name: { es: "El hígado", ca: "El fetge", en: "The liver", cs: "Játra", fr: "Le foie" },
      fact: { es: "El hígado es la gran fábrica del cuerpo: limpia la sangre y guarda energía. ¡Es el órgano más grande de tu barriga!", ca: "El fetge és la gran fàbrica del cos: neteja la sang i guarda energia. És l'òrgan més gran de la teva panxa!", en: "The liver is the body's great factory: it cleans the blood and stores energy. It is the biggest organ in your tummy!", cs: "Játra jsou velká továrna těla: čistí krev a ukládají energii. Jsou největší orgán v tvém bříšku!", fr: "Le foie est la grande usine du corps : il nettoie le sang et garde de l'énergie. C'est le plus grand organe de ton ventre !" } },
    { emoji: "🫒", cat: "barriga", x: CO - 105, y: 665, iw: 55, ih: 86,
      svg: bb(`
        <path d="M50 8 L50 26" stroke="#5b8a4a" stroke-width="6" stroke-linecap="round"/>
        <path d="M50 26 Q76 34 74 62 Q70 90 50 92 Q30 90 26 62 Q24 34 50 26 Z" fill="#7aa85c" stroke="#4e7038" stroke-width="3"/>
        <ellipse cx="42" cy="52" rx="7" ry="12" fill="#a3c785" opacity=".8"/>`, "21 4 58 91"),
      name: { es: "La vesícula", ca: "La vesícula", en: "The gallbladder", cs: "Žlučník", fr: "La vésicule" },
      fact: { es: "La vesícula es una bolsita verde que guarda la bilis, un jugo que ayuda a digerir las comidas con grasa.", ca: "La vesícula és una bosseta verda que guarda la bilis, un suc que ajuda a pair els menjars amb greix.", en: "The gallbladder is a little green bag that stores bile, a juice that helps digest fatty foods.", cs: "Žlučník je zelený váček, který uchovává žluč, šťávu pomáhající trávit tučná jídla.", fr: "La vésicule est un petit sac vert qui garde la bile, un jus qui aide à digérer les repas gras." } },
    { emoji: "🍌", cat: "barriga", x: CO + 40, y: 658, iw: 110, ih: 48,
      svg: bb(`
        <path d="M8 30 Q10 14 28 12 Q40 10 48 16 Q70 12 88 20 Q96 24 92 32 Q84 44 62 42 Q40 46 20 40 Q8 38 8 30 Z" fill="#e8c46b" stroke="#b8923e" stroke-width="2.6"/>
        <path d="M20 26 Q50 22 84 26" stroke="#b8923e" stroke-width="2.4" fill="none" opacity=".7"/>
        <circle cx="26" cy="28" r="3" fill="#d4a94e"/><circle cx="48" cy="30" r="3" fill="#d4a94e"/><circle cx="70" cy="29" r="3" fill="#d4a94e"/>`, "6 8 92 40"),
      name: { es: "El páncreas", ca: "El pàncrees", en: "The pancreas", cs: "Slinivka", fr: "Le pancréas" },
      fact: { es: "El páncreas fabrica jugos para deshacer la comida y una llave llamada insulina que regula el azúcar del cuerpo.", ca: "El pàncrees fabrica sucs per desfer el menjar i una clau anomenada insulina que regula el sucre del cos.", en: "The pancreas makes juices to break down food and a key called insulin that controls the body's sugar.", cs: "Slinivka vyrábí šťávy na trávení jídla a klíček jménem inzulin, který řídí cukr v těle.", fr: "Le pancréas fabrique des jus pour défaire la nourriture et une clé appelée insuline qui règle le sucre du corps." } },
    { emoji: "🌀", cat: "barriga", x: CO, y: 854, iw: 68, ih: 76,
      svg: bb(`
        <path d="M20 24 Q40 12 56 24 Q72 34 60 44 Q46 54 32 46 Q18 38 30 32 Q46 26 60 34 Q76 44 66 58 Q54 72 36 64 Q20 58 28 68 Q42 80 62 74 Q80 68 78 52" stroke="#e08a9a" stroke-width="11" fill="none" stroke-linecap="round"/>
        <path d="M20 24 Q40 12 56 24 Q72 34 60 44 Q46 54 32 46 Q18 38 30 32 Q46 26 60 34 Q76 44 66 58 Q54 72 36 64 Q20 58 28 68 Q42 80 62 74 Q80 68 78 52" stroke="#f2b0bd" stroke-width="5" fill="none" stroke-linecap="round"/>`, "13 5 74 82"),
      name: { es: "El intestino delgado", ca: "L'intestí prim", en: "The small intestine", cs: "Tenké střevo", fr: "L'intestin grêle" },
      fact: { es: "El intestino delgado es un tubo finito y larguísimo, ¡de unos seis metros!, enrollado como una madeja: ahí la comida buena pasa a la sangre.", ca: "L'intestí prim és un tub finet i llarguíssim, d'uns sis metres!, enrotllat com un cabdell: allà el menjar bo passa a la sang.", en: "The small intestine is a thin, super long tube, about six metres, coiled up like a ball of wool: that is where the good food passes into the blood.", cs: "Tenké střevo je tenounká, předlouhá trubice, asi šest metrů!, smotaná jako klubíčko: tam přechází dobré jídlo do krve.", fr: "L'intestin grêle est un tube tout fin et très long, environ six mètres, enroulé comme une pelote : c'est là que la bonne nourriture passe dans le sang." } }
  ];
  NUEVOS.forEach(o => {
    ex.pois.push({ cat: o.cat, emoji: o.emoji, x: o.x, y: o.y, svg: o.svg, iw: o.iw, ih: o.ih, name: o.name, fact: o.fact });
  });

  /* escenografía: DOS cuerpos paralelos: el de los ÓRGANOS (con carita)
     y el de los HUESOS (con el esqueleto completo). El panel de sistemas
     lo pinta la vitrina de la consulta (69e-deco-cuerpo-grande.js).
     Se guarda aparte para que la consulta pueda envolverlo sin repetirlo. */
  ex.decoCuerpos = function () {
    /* la consulta que hay detrás es de pared clara: con la piel al 30% la
       silueta se perdía, así que va más presente y con su propio contorno */
    const skin = "rgba(255,203,166,.62)";
    const bone = "rgba(255,255,255,.62)";
    const bordeSkin = "rgba(196,120,86,.55)";
    let s = "";

    /* silueta de niño, reutilizable: cx = centro. Cabeza grande, tronco
       ancho y piernas cortas, que es como es un cuerpo de niño pequeño
       (y así los órganos caben dentro sin amontonarse). */
    const silueta = (cx) => `<g fill="${skin}" stroke="${bordeSkin}" stroke-width="2.8" filter="url(#cgrBulto)">
        <circle cx="${cx}" cy="165" r="145"/>
        <circle cx="${cx - 148}" cy="195" r="30"/><circle cx="${cx + 148}" cy="195" r="30"/>
        <rect x="${cx - 54}" y="282" width="108" height="86" rx="30"/>
        <path d="M${cx - 196} 368 Q${cx} 326 ${cx + 196} 368 C${cx + 172} 560 ${cx + 216} 700 ${cx + 200} 840 Q${cx} 962 ${cx - 200} 840 C${cx - 216} 700 ${cx - 172} 560 ${cx - 196} 368 Z"/>
        <rect x="${cx - 284}" y="366" width="76" height="386" rx="38"/>
        <circle cx="${cx - 246}" cy="780" r="38"/>
        <rect x="${cx + 208}" y="366" width="76" height="386" rx="38"/>
        <circle cx="${cx + 246}" cy="780" r="38"/>
        <rect x="${cx - 166}" y="848" width="134" height="192" rx="62"/>
        <rect x="${cx + 32}" y="848" width="134" height="192" rx="62"/>
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

    /* CUERPO 2 (los huesos): con el esqueleto completo por dentro */
    s += `<ellipse cx="${CH}" cy="1066" rx="360" ry="36" fill="rgba(0,0,0,.16)"/>`;
    s += silueta(CH);
    s += `<g stroke="${bone}" fill="none" stroke-linecap="round">
      <circle cx="${CH}" cy="162" r="100" stroke-width="7"/>
      <line x1="${CH}" y1="290" x2="${CH}" y2="792" stroke-width="10"/>
      <line x1="${CH - 55}" y1="372" x2="${CH + 55}" y2="372" stroke-width="7"/>
      <line x1="${CH - 246}" y1="386" x2="${CH - 246}" y2="540" stroke-width="7"/><line x1="${CH - 246}" y1="556" x2="${CH - 246}" y2="742" stroke-width="7"/><circle cx="${CH - 246}" cy="548" r="7" stroke-width="4"/>
      <line x1="${CH + 246}" y1="386" x2="${CH + 246}" y2="540" stroke-width="7"/><line x1="${CH + 246}" y1="556" x2="${CH + 246}" y2="742" stroke-width="7"/><circle cx="${CH + 246}" cy="548" r="7" stroke-width="4"/>
      <line x1="${CH - 99}" y1="866" x2="${CH - 99}" y2="948" stroke-width="8"/><line x1="${CH - 99}" y1="964" x2="${CH - 99}" y2="1036" stroke-width="8"/><circle cx="${CH - 99}" cy="956" r="8" stroke-width="4"/>
      <line x1="${CH + 99}" y1="866" x2="${CH + 99}" y2="948" stroke-width="8"/><line x1="${CH + 99}" y1="964" x2="${CH + 99}" y2="1036" stroke-width="8"/><circle cx="${CH + 99}" cy="956" r="8" stroke-width="4"/>
    </g>`;
    /* su distintivo: un huesito flotando al lado de la cabeza */
    s += `<g transform="translate(${CH + 232} 96) scale(1.7)"><path d="M-16 4 Q-24 4 -24 -2 Q-24 -8 -18 -7 Q-18 -13 -12 -12 Q-6 -11 -8 -4 L8 -1 Q10 -8 16 -7 Q22 -6 21 0 Q27 1 26 7 Q25 13 18 11 Q12 10 14 3 L-2 0 Q-4 7 -10 6 Q-16 5 -16 4 Z" fill="rgba(245,239,228,.8)"/></g>`;

    return `<svg viewBox="0 0 ${ex.width} 1100" preserveAspectRatio="none"><defs><filter id="cgrBulto" x="-12%" y="-8%" width="126%" height="120%"><feDropShadow dx="0" dy="6" stdDeviation="9" flood-color="rgba(120,60,40,.35)"/></filter></defs>${s}</svg>`;
  };
  ex.deco = ex.decoCuerpos;

})();
