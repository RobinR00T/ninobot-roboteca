"use strict";
/* ============================================================
   MODO CUIDAR (vida práctica Montessori): tercer bloque de temas.
   Rutinas de 4 pasos EN ORDEN sobre la constante CARE (39-care-0).
   Nota: en el paso del arco del violín se usa 🎻 (el emoji del
   violín ya muestra su arco); 🏹 es un arco de flechas y confunde.
   ============================================================ */

/* la playa limpia: el mar también se cuida desde la orilla */
CARE.oceano = {
  before: "🥤", after: "🏖️", deco: "🌊 🐚 ⛱️",
  title: { es: "La playa limpia", ca: "La platja neta", en: "The clean beach", cs: "Čistá pláž", fr: "La plage propre" },
  intro: { es: "Alguien ha dejado basura en la arena. Los animales del mar necesitan una playa limpia, {name}.", ca: "Algú ha deixat brossa a la sorra. Els animals del mar necessiten una platja neta, {name}.", en: "Someone left litter on the sand. The sea animals need a clean beach, {name}.", cs: "Někdo nechal na písku odpadky. Mořská zvířata potřebují čistou pláž, {name}.", fr: "Quelqu'un a laissé des déchets sur le sable. Les animaux de la mer ont besoin d'une plage propre, {name}." },
  steps: [
    { e: "♻️", t: { es: "Recoge los plásticos", ca: "Recull els plàstics", en: "Pick up the plastics", cs: "Posbírej plasty", fr: "Ramasse les plastiques" } },
    { e: "🦀", t: { es: "Devuelve el cangrejo a su roca", ca: "Torna el cranc a la seva roca", en: "Take it to its rock", cs: "Vrať krabíka na skálu", fr: "Ramène le crabe sur son rocher" } },
    { e: "🖐️", t: { es: "Alisa la arena", ca: "Allisa la sorra", en: "Smooth the sand", cs: "Uhlaď písek", fr: "Lisse le sable" } },
    { e: "🗑️", t: { es: "Tira la basura al cubo", ca: "Llença la brossa al cubell", en: "Throw the trash in the bin", cs: "Vyhoď odpadky do koše", fr: "Jette tout à la poubelle" } }
  ],
  done: { es: "La playa queda limpia para los animales del mar. El mar también se cuida desde la orilla.", ca: "La platja queda neta per als animals del mar. El mar també es cuida des de la vora.", en: "The beach is clean again for the sea animals. You can care for the ocean from the shore.", cs: "Pláž je zase čistá pro mořská zvířata. O moře můžeš pečovat i ze břehu.", fr: "La plage est de nouveau propre pour les animaux de la mer. On prend aussi soin de la mer depuis le rivage." }
};

/* el perrito: los animales necesitan cuidados todos los días */
CARE.animales = {
  before: "🐕", after: "🐶", deco: "🦴 🏠 🌳",
  title: { es: "El perrito", ca: "El gosset", en: "The little dog", cs: "Pejsek", fr: "Le petit chien" },
  intro: { es: "El perrito te espera junto a su casita. Hoy necesita tus cuidados, {name}.", ca: "El gosset t'espera al costat de la seva caseta. Avui necessita les teves cures, {name}.", en: "The little dog is waiting by his house. He needs your care today, {name}.", cs: "Pejsek čeká u své boudy. Dnes potřebuje tvou péči, {name}.", fr: "Le petit chien t'attend près de sa niche. Il a besoin de tes soins aujourd'hui, {name}." },
  steps: [
    { e: "🪮", t: { es: "Cepíllalo despacito", ca: "Raspalla'l a poc a poc", en: "Brush him gently", cs: "Pomalu ho vykartáčuj", fr: "Brosse-le tout doucement" } },
    { e: "💧", t: { es: "Ponle agua fresca", ca: "Posa-li aigua fresca", en: "Give him fresh water", cs: "Dej mu čerstvou vodu", fr: "Donne-lui de l'eau fraîche" } },
    { e: "🥣", t: { es: "Dale su comida", ca: "Dona-li el seu menjar", en: "Give him his food", cs: "Dej mu jídlo do misky", fr: "Donne-lui son repas" } },
    { e: "🚶", t: { es: "Sal a pasear con él", ca: "Surt a passejar amb ell", en: "Take him for a walk", cs: "Vezmi ho na procházku", fr: "Emmène-le en promenade" } }
  ],
  done: { es: "El perrito está feliz y tranquilo. Los animales necesitan cuidados todos los días.", ca: "El gosset està feliç i tranquil. Els animals necessiten cures cada dia.", en: "The little dog is happy and calm. Animals need care every day.", cs: "Pejsek je šťastný a klidný. Zvířata potřebují péči každý den.", fr: "Le petit chien est heureux et tranquille. Les animaux ont besoin de soins tous les jours." }
};

/* el violín: un instrumento bien cuidado suena mejor mañana */
CARE.musica = {
  before: "🎻", after: "🧳", deco: "🎼 🎵 ✨",
  title: { es: "El violín", ca: "El violí", en: "The violin", cs: "Housle", fr: "Le violon" },
  intro: { es: "El concierto ha terminado y el violín ha trabajado mucho. Ahora le toca descansar, {name}.", ca: "El concert ha acabat i el violí ha treballat molt. Ara li toca descansar, {name}.", en: "The concert is over and the violin has worked hard. Now it needs to rest, {name}.", cs: "Koncert skončil a housle hodně hrály. Teď si potřebují odpočinout, {name}.", fr: "Le concert est fini et le violon a beaucoup travaillé. Maintenant il doit se reposer, {name}." },
  steps: [
    { e: "🎻", t: { es: "Afloja el arco", ca: "Afluixa l'arc", en: "Loosen the bow", cs: "Povol smyčec", fr: "Détends l'archet" } },
    { e: "🧤", t: { es: "Límpialo con el paño suave", ca: "Neteja'l amb el drap suau", en: "Wipe it with the cloth", cs: "Otři je měkkým hadříkem", fr: "Essuie-le avec le chiffon doux" } },
    { e: "🧳", t: { es: "Guárdalo en su funda", ca: "Desa'l a la seva funda", en: "Put it in its case", cs: "Ulož je do pouzdra", fr: "Range-le dans son étui" } },
    { e: "📚", t: { es: "Ordena las partituras", ca: "Endreça les partitures", en: "Tidy the sheet music", cs: "Srovnej noty", fr: "Range les partitions" } }
  ],
  done: { es: "El violín descansa en su funda. Un instrumento bien cuidado suena mejor mañana.", ca: "El violí descansa a la seva funda. Un instrument ben cuidat sona millor demà.", en: "The violin is resting in its case. A well-cared-for instrument sounds better tomorrow.", cs: "Housle odpočívají ve svém pouzdře. Nástroj, o který se dobře pečuje, zní zítra lépe.", fr: "Le violon se repose dans son étui. Un instrument bien soigné sonne mieux demain." }
};
