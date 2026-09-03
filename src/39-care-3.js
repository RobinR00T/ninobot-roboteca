"use strict";
/* ============================================================
   MODO CUIDAR (fichero 3): tres rutinas más de vida práctica.
   Registra CARE.increibles, CARE.starwars y CARE.piratas.
   La constante CARE ya existe (definida en 39-care-0.js).
   ============================================================ */

/* homenaje real: Wangari Maathai y el Cinturón Verde de Kenia */
CARE.increibles = {
  before: "🌱", after: "🌳", deco: "🌍 ☀️ 🐦",
  title: { es: "Planta un árbol como Wangari", ca: "Planta un arbre com la Wangari", en: "Plant a tree like Wangari", cs: "Zasaď strom jako Wangari", fr: "Plante un arbre comme Wangari" },
  intro: { es: "Wangari Maathai plantó millones de árboles con las mujeres de Kenia. Hoy te toca a ti plantar el tuyo, {name}.", ca: "La Wangari Maathai va plantar milions d'arbres amb les dones de Kenya. Avui et toca a tu plantar el teu, {name}.", en: "Wangari Maathai planted millions of trees with the women of Kenya. Today it is your turn to plant yours, {name}.", cs: "Wangari Maathai vysadila s ženami v Keni miliony stromů. Dnes zasadíš svůj stromek ty, {name}.", fr: "Wangari Maathai a planté des millions d'arbres avec les femmes du Kenya. Aujourd'hui, c'est à toi de planter le tien, {name}." },
  steps: [
    { e: "🕳️", t: { es: "Haz un hoyo", ca: "Fes un clot", en: "Dig a hole", cs: "Vykopej jamku", fr: "Creuse un trou" } },
    { e: "🌱", t: { es: "Coloca el plantón con cuidado", ca: "Posa-hi el plançó amb cura", en: "Place the seedling gently", cs: "Opatrně vlož sazenici", fr: "Pose doucement le plant" } },
    { e: "💧", t: { es: "Riégalo con agua", ca: "Rega'l amb aigua", en: "Water your tree", cs: "Zalij ho vodou", fr: "Arrose-le bien" } },
    { e: "🪧", t: { es: "Ponle su cartelito", ca: "Posa-li el cartellet", en: "Add its name sign", cs: "Přidej cedulku se jménem", fr: "Mets sa petite pancarte" } }
  ],
  done: { es: "Tu árbol crecerá poco a poco, como los millones que plantó Wangari. Cuidar la Tierra empieza por un arbolito.", ca: "El teu arbre creixerà a poc a poc, com els milions que va plantar la Wangari. Cuidar la Terra comença per un arbret.", en: "Your tree will grow little by little, like the millions Wangari planted. Caring for the Earth begins with one little tree.", cs: "Tvůj strom poroste pomalu, jako miliony stromů, které zasadila Wangari. Péče o Zemi začíná jedním stromkem.", fr: "Ton arbre grandira petit à petit, comme les millions d'arbres plantés par Wangari. Prendre soin de la Terre commence par un petit arbre." }
};

CARE.starwars = {
  before: "🤖", after: "🤖", deco: "⭐ 🛸 🌌",
  title: { es: "El droide astromecánico", ca: "El droide astromecànic", en: "The astromech droid", cs: "Astromechanický droid", fr: "Le droïde astromécanique" },
  intro: { es: "El droide ha cruzado el desierto y está lleno de arena. Necesita tus cuidados, {name}.", ca: "El droide ha travessat el desert i està ple de sorra. Necessita les teves cures, {name}.", en: "The droid has crossed the desert and is covered in sand. It needs your care, {name}.", cs: "Droid přešel poušť a je celý od písku. Potřebuje tvou péči, {name}.", fr: "Le droïde a traversé le désert et il est plein de sable. Il a besoin de tes soins, {name}." },
  steps: [
    { e: "🧹", t: { es: "Quítale la arena", ca: "Treu-li la sorra", en: "Brush off the sand", cs: "Omeť z něj písek", fr: "Enlève le sable" } },
    { e: "🛢️", t: { es: "Engrasa sus ruedas", ca: "Greixa-li les rodes", en: "Oil its wheels", cs: "Namaž mu kolečka", fr: "Graisse ses roues" } },
    { e: "🔋", t: { es: "Cárgale la batería", ca: "Carrega-li la bateria", en: "Charge its battery", cs: "Nabij mu baterii", fr: "Recharge sa batterie" } },
    { e: "🏠", t: { es: "Apárcalo en su rincón", ca: "Aparca'l al seu racó", en: "Park it in its corner", cs: "Zaparkuj ho do koutku", fr: "Gare-le dans son coin" } }
  ],
  done: { es: "El droide pita contento y reluciente. Un droide bien cuidado siempre te acompaña.", ca: "El droide xiula content i lluent. Un droide ben cuidat sempre t'acompanya.", en: "The droid beeps happily, all shiny again. A well-cared-for droid always stays by your side.", cs: "Droid spokojeně pípá a celý se leskne. Droid, o kterého se dobře staráš, tě vždycky doprovodí.", fr: "Le droïde bipe, tout content et tout brillant. Un droïde bien soigné t'accompagne toujours." }
};

CARE.piratas = {
  before: "⛵", after: "⛵", deco: "🌊 ⚓ 🗺️",
  title: { es: "El barco pirata", ca: "El vaixell pirata", en: "The pirate ship", cs: "Pirátská loď", fr: "Le bateau pirate" },
  intro: { es: "El barco ha vuelto de una larga travesía. La cubierta está sucia y el loro tiene hambre, {name}.", ca: "El vaixell ha tornat d'una llarga travessia. La coberta està bruta i el lloro té gana, {name}.", en: "The ship is back from a long voyage. The deck is dirty and the parrot is hungry, {name}.", cs: "Loď se vrátila z dlouhé plavby. Paluba je špinavá a papoušek má hlad, {name}.", fr: "Le bateau revient d'un long voyage. Le pont est sale et le perroquet a faim, {name}." },
  steps: [
    { e: "🧽", t: { es: "Friega la cubierta", ca: "Frega la coberta", en: "Scrub the deck", cs: "Vydrhni palubu", fr: "Frotte le pont" } },
    { e: "⛵", t: { es: "Dobla las velas", ca: "Plega les veles", en: "Fold the sails", cs: "Slož plachty", fr: "Plie les voiles" } },
    { e: "🪢", t: { es: "Enrolla el cabo", ca: "Enrotlla la corda", en: "Coil the rope", cs: "Smotej lano", fr: "Enroule le cordage" } },
    { e: "🦜", t: { es: "Dale de comer al loro", ca: "Dona menjar al lloro", en: "Feed the parrot", cs: "Nakrm papouška", fr: "Donne à manger au perroquet" } }
  ],
  done: { es: "El barco queda listo para la próxima aventura. Un buen pirata cuida su barco y su loro.", ca: "El vaixell queda a punt per a la pròxima aventura. Un bon pirata cuida el seu vaixell i el seu lloro.", en: "The ship is ready for the next adventure. A good pirate takes care of the ship and the parrot.", cs: "Loď je připravená na další dobrodružství. Správný pirát se stará o svou loď i o svého papouška.", fr: "Le bateau est prêt pour la prochaine aventure. Un bon pirate prend soin de son bateau et de son perroquet." }
};
