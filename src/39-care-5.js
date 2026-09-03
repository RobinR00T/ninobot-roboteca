"use strict";
/* ============================================================
   MODO CUIDAR (vida práctica Montessori): rutinas de los
   pintores. Fichero 39-care-5: Miró, Dalí y Picasso.
   La constante CARE ya existe (39-care-0.js).
   ============================================================ */

/* el taller de pintura de Miró */
CARE.miro = {
  before: "🎨", after: "🖼️", deco: "🔴 🟡 🔵 ⭐",
  title: { es: "El taller de pintura", ca: "El taller de pintura", en: "The painting workshop", cs: "Malířská dílna", fr: "L'atelier de peinture" },
  intro: { es: "Hemos acabado de pintar y el taller está hecho un lío. Los pinceles y las pinturas te necesitan, {name}.", ca: "Hem acabat de pintar i el taller està fet un embolic. Els pinzells i les pintures et necessiten, {name}.", en: "The painting is finished and the workshop is a mess. The brushes and paints need you, {name}.", cs: "Obraz je hotový a dílna je vzhůru nohama. Štětce a barvy tě potřebují, {name}.", fr: "La peinture est terminée et l'atelier est tout en désordre. Les pinceaux et les couleurs ont besoin de toi, {name}." },
  steps: [
    { e: "🥼", t: { es: "Ponte el delantal", ca: "Posa't el davantal", en: "Put on your apron", cs: "Obleč si zástěru", fr: "Mets ton tablier" } },
    { e: "🖌️", t: { es: "Lava los pinceles", ca: "Renta els pinzells", en: "Wash the brushes", cs: "Umyj štětce", fr: "Lave les pinceaux" } },
    { e: "🫙", t: { es: "Tapa bien los botes", ca: "Tapa bé els pots", en: "Close the paint jars", cs: "Zavři kelímky s barvou", fr: "Ferme les pots de peinture" } },
    { e: "🖼️", t: { es: "Cuelga el cuadro a secar", ca: "Penja el quadre a assecar", en: "Hang the painting to dry", cs: "Pověs obraz, ať schne", fr: "Accroche le tableau à sécher" } }
  ],
  done: { es: "El taller queda ordenado y el cuadro se seca despacito. Miró cuidaba sus colores como tesoros.", ca: "El taller queda endreçat i el quadre s'asseca a poc a poc. Miró cuidava els seus colors com tresors.", en: "The workshop is tidy and the painting is drying slowly. Miró cared for his colors like treasures.", cs: "Dílna je uklizená a obraz pomalu schne. Miró opatroval své barvy jako poklady.", fr: "L'atelier est rangé et le tableau sèche doucement. Miró prenait soin de ses couleurs comme de trésors." }
};

/* el estudio de los sueños de Dalí */
CARE.dali = {
  before: "🖼️", after: "✨", deco: "⏰ 🥚 🦋",
  title: { es: "El estudio de los sueños", ca: "L'estudi dels somnis", en: "The studio of dreams", cs: "Ateliér snů", fr: "L'atelier des rêves" },
  intro: { es: "El estudio de Dalí está a oscuras y todo anda fuera de su sitio. Hay que prepararlo para pintar sueños, {name}.", ca: "L'estudi de Dalí està a les fosques i tot és fora de lloc. Cal preparar-lo per pintar somnis, {name}.", en: "Dalí's studio is dark and everything is out of place. It needs to be ready for painting dreams, {name}.", cs: "Dalího ateliér je potmě a všechno je rozházené. Je třeba ho připravit na malování snů, {name}.", fr: "L'atelier de Dalí est dans le noir et tout est en désordre. Il faut le préparer pour peindre des rêves, {name}." },
  steps: [
    { e: "🪟", t: { es: "Abre la ventana", ca: "Obre la finestra", en: "Open the window", cs: "Otevři okno", fr: "Ouvre la fenêtre" } },
    { e: "🖌️", t: { es: "Ordena los pinceles por tamaño", ca: "Ordena els pinzells per mida", en: "Sort the brushes by size", cs: "Seřaď štětce podle velikosti", fr: "Range les pinceaux par taille" } },
    { e: "🎨", t: { es: "Sube el lienzo al caballete", ca: "Posa la tela al cavallet", en: "Set up the canvas", cs: "Postav plátno na stojan", fr: "Installe la toile" } },
    { e: "⏰", t: { es: "Dale cuerda al reloj blando", ca: "Dona corda al rellotge tou", en: "Wind up the melting clock", cs: "Natáhni měkké hodiny", fr: "Remonte la montre molle" } }
  ],
  done: { es: "El estudio está listo para soñar despierto. Hasta los relojes blandos marcan la hora de recoger.", ca: "L'estudi està a punt per somiar despert. Fins i tot els rellotges tous marquen l'hora de recollir.", en: "The studio is ready for daydreaming. Even the melting clocks show it is time to tidy up.", cs: "Ateliér je připravený na snění s otevřenýma očima. I měkké hodiny ukazují, že je čas uklidit.", fr: "L'atelier est prêt pour rêver éveillé. Même les montres molles indiquent l'heure de ranger." }
};

/* las palomas de Picasso */
CARE.picasso = {
  before: "🕊️", after: "🕊️", deco: "🌿 ☀️ 🏠",
  title: { es: "Las palomas de Picasso", ca: "Els coloms de Picasso", en: "Picasso's doves", cs: "Picassovy holubice", fr: "Les colombes de Picasso" },
  intro: { es: "Las palomas esperan en el palomar y tienen hambre. El padre de Picasso las pintaba, {name}.", ca: "Els coloms esperen al colomar i tenen gana. El pare de Picasso els pintava, {name}.", en: "The doves are waiting in the dovecote and they are hungry. Picasso's father used to paint them, {name}.", cs: "Holubice čekají v holubníku a mají hlad. Picassův tatínek je maloval, {name}.", fr: "Les colombes attendent dans le pigeonnier et elles ont faim. Le père de Picasso les peignait, {name}." },
  steps: [
    { e: "💧", t: { es: "Ponles agua limpia", ca: "Posa'ls aigua neta", en: "Give them clean water", cs: "Dej jim čistou vodu", fr: "Donne-leur de l'eau propre" } },
    { e: "🍞", t: { es: "Échales miguitas de pan", ca: "Dona'ls molles de pa", en: "Scatter some bread crumbs", cs: "Nasyp jim drobky chleba", fr: "Donne-leur des miettes de pain" } },
    { e: "🧹", t: { es: "Limpia el palomar", ca: "Neteja el colomar", en: "Clean the dovecote", cs: "Vyčisti holubník", fr: "Nettoie le pigeonnier" } },
    { e: "🪟", t: { es: "Ábreles la ventana", ca: "Obre'ls la finestra", en: "Open the window for them", cs: "Otevři jim okno", fr: "Ouvre-leur la fenêtre" } }
  ],
  done: { es: "Las palomas vuelan tranquilas y vuelven a casa. Picasso las dibujaba desde niño.", ca: "Els coloms volen tranquils i tornen a casa. Picasso els dibuixava des de petit.", en: "The doves fly peacefully and come back home. Picasso drew them from the time he was a boy.", cs: "Holubice klidně létají a vracejí se domů. Picasso je kreslil od dětství.", fr: "Les colombes volent tranquillement et reviennent à la maison. Picasso les dessinait depuis tout petit." }
};
