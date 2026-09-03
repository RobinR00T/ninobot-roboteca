"use strict";
/* ============================================================
   MODO CUIDAR, fichero 1: dinos, cuerpo (autocuidado) y
   tierramedia. Rutinas de 4 pasos en orden; el último paso
   siempre es recoger o cerrar la rutina. Registra CARE.<tema>
   (la constante CARE vive en 39-care-0.js).
   ============================================================ */

/* el huevo de dinosaurio */
CARE.dinos = {
  before: "🥚", after: "🐣", deco: "🌿 🦕 🌋",
  title: { es: "El huevo de dinosaurio", ca: "L'ou de dinosaure", en: "The dinosaur egg", cs: "Dinosauří vejce", fr: "L'œuf de dinosaure" },
  intro: { es: "Un huevo de dinosaurio espera en el valle. Dentro hay un bebé que necesita tu ayuda para nacer, {name}.", ca: "Un ou de dinosaure espera a la vall. A dins hi ha un nadó que necessita la teva ajuda per néixer, {name}.", en: "A dinosaur egg is waiting in the valley. Inside there is a baby that needs your help to hatch, {name}.", cs: "V údolí čeká dinosauří vejce. Uvnitř je mládě, které potřebuje tvou pomoc, {name}.", fr: "Un œuf de dinosaure attend dans la vallée. Dedans, un bébé a besoin de ton aide pour naître, {name}." },
  steps: [
    { e: "🍃", t: { es: "Haz un nido de hojas", ca: "Fes un niu de fulles", en: "Make a leafy nest", cs: "Postav hnízdo z listí", fr: "Fais un nid de feuilles" } },
    { e: "☀️", t: { es: "Dale calorcito", ca: "Dona-li escalforeta", en: "Keep it warm", cs: "Zahřej vajíčko", fr: "Garde-le au chaud" } },
    { e: "🤲", t: { es: "Gira el huevo con cuidado", ca: "Gira l'ou amb compte", en: "Turn the egg gently", cs: "Opatrně otoč vajíčko", fr: "Tourne l'œuf doucement" } },
    { e: "🤫", t: { es: "Espera en silencio", ca: "Espera en silenci", en: "Wait in silence", cs: "Tiše počkej", fr: "Attends en silence" } }
  ],
  done: { es: "El bebé dinosaurio asoma la cabecita. Tu paciencia y tu silencio lo ayudaron a nacer.", ca: "El nadó dinosaure treu el capet. La teva paciència i el teu silenci l'han ajudat a néixer.", en: "The baby dinosaur peeks out. Your patience and your silence helped it hatch.", cs: "Malý dinosaurus vykukuje ven. Tvá trpělivost a ticho mu pomohly na svět.", fr: "Le bébé dinosaure pointe le bout de son nez. Ta patience et ton silence l'ont aidé à naître." }
};

/* cuídate a ti: autocuidado de cada día */
CARE.cuerpo = {
  before: "🥱", after: "😊", deco: "🛁 🌙 🫧",
  title: { es: "Cuídate a ti", ca: "Avui et cuides tu", en: "Take care of yourself", cs: "Postarej se o sebe", fr: "Prends soin de toi" },
  intro: { es: "Hoy la aventura eres tú. Tu cuerpo también necesita cuidados cada día, {name}.", ca: "Avui l'aventura ets tu. El teu cos també necessita cures cada dia, {name}.", en: "Today the adventure is you. Your body needs care every day too, {name}.", cs: "Dnes jsi dobrodružstvím ty. I tvoje tělo potřebuje každý den péči, {name}.", fr: "Aujourd'hui, l'aventure, c'est toi. Ton corps a aussi besoin de soins chaque jour, {name}." },
  steps: [
    { e: "🧼", t: { es: "Lávate las manos", ca: "Renta't les mans", en: "Wash your hands", cs: "Umyj si ruce", fr: "Lave-toi les mains" } },
    { e: "🪥", t: { es: "Cepíllate los dientes", ca: "Raspalla't les dents", en: "Brush your teeth", cs: "Vyčisti si zuby", fr: "Brosse-toi les dents" } },
    { e: "💧", t: { es: "Bebe un vaso de agua", ca: "Beu un got d'aigua", en: "Drink a glass of water", cs: "Vypij sklenici vody", fr: "Bois un verre d'eau" } },
    { e: "😴", t: { es: "A descansar", ca: "A descansar", en: "Time to rest", cs: "Teď si odpočiň", fr: "Va te reposer" } }
  ],
  done: { es: "Tu cuerpo te lo agradece. Cuidarse cada día también es una aventura.", ca: "El teu cos t'ho agraeix. Cuidar-se cada dia també és una aventura.", en: "Your body thanks you. Taking care of yourself every day is an adventure too.", cs: "Tvoje tělo ti děkuje. Starat se o sebe každý den je také dobrodružství.", fr: "Ton corps te dit merci. Prendre soin de soi chaque jour, c'est aussi une aventure." }
};

/* el jardín de la Comarca */
CARE.tierramedia = {
  before: "🥀", after: "🌷", deco: "🏡 🌳 🍄",
  title: { es: "El jardín de la Comarca", ca: "El jardí de la Comarca", en: "The Shire garden", cs: "Zahrada v Kraji", fr: "Le jardin de la Comté" },
  intro: { es: "El jardín de los hobbits está un poco descuidado. Con calma y buenas manos volverá a florecer, {name}.", ca: "El jardí dels hòbbits està una mica deixat. Amb calma i bones mans tornarà a florir, {name}.", en: "The hobbits' garden looks a little untidy. With calm and gentle hands it will bloom again, {name}.", cs: "Zahrada hobitů je trochu zanedbaná. S klidem a šikovnýma rukama zase rozkvete, {name}.", fr: "Le jardin des hobbits est un peu négligé. Avec du calme et de bonnes mains, il va refleurir, {name}." },
  steps: [
    { e: "🌾", t: { es: "Quita las malas hierbas", ca: "Treu les males herbes", en: "Pull out the weeds", cs: "Vytrhej plevel", fr: "Enlève les mauvaises herbes" } },
    { e: "💧", t: { es: "Riega las flores", ca: "Rega les flors", en: "Water the flowers", cs: "Zalij květiny", fr: "Arrose les fleurs" } },
    { e: "🌱", t: { es: "Planta una semilla nueva", ca: "Planta una llavor nova", en: "Plant a new seed", cs: "Zasaď nové semínko", fr: "Plante une nouvelle graine" } },
    { e: "🧺", t: { es: "Guarda las herramientas", ca: "Desa les eines", en: "Put the tools away", cs: "Ukliď nářadí", fr: "Range les outils" } }
  ],
  done: { es: "El jardín de los hobbits luce tranquilo y bonito. A Bilbo le encantaría.", ca: "El jardí dels hòbbits es veu tranquil i bonic. A en Bilbo li encantaria.", en: "The hobbits' garden looks calm and lovely. Bilbo would love it.", cs: "Zahrada hobitů je klidná a krásná. Bilbovi by se moc líbila.", fr: "Le jardin des hobbits est calme et joli. Bilbo l'adorerait." }
};
