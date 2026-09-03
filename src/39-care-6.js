"use strict";
/* ============================================================
   MODO CUIDAR (vida práctica Montessori): rutinas del fichero 6.
   Temas: arboles (planta tu árbol) y frutas (el huerto).
   ============================================================ */

/* planta tu árbol: de la semilla al árbol */
CARE.arboles = {
  before: "🌰", after: "🌳", deco: "☀️ 🐦 🍂",
  title: { es: "Planta tu árbol", ca: "Planta el teu arbre", en: "Plant your tree", cs: "Zasaď svůj strom", fr: "Plante ton arbre" },
  intro: { es: "Esta semilla quiere ser un árbol grande. Necesita tu ayuda para empezar, {name}.", ca: "Aquesta llavor vol ser un arbre gran. Necessita la teva ajuda per començar, {name}.", en: "This seed wants to become a big tree. It needs your help to get started, {name}.", cs: "Tohle semínko chce být velký strom. Potřebuje tvou pomoc, aby mohlo začít, {name}.", fr: "Cette graine veut devenir un grand arbre. Elle a besoin de ton aide pour commencer, {name}." },
  steps: [
    { e: "🕳️", t: { es: "Cava un hoyo pequeño", ca: "Cava un clot petit", en: "Dig a small hole", cs: "Vykopej malou jamku", fr: "Creuse un petit trou" } },
    { e: "🌰", t: { es: "Pon la semilla y tápala", ca: "Posa la llavor i tapa-la", en: "Plant and cover the seed", cs: "Vlož semínko a zasyp ho", fr: "Pose la graine et couvre-la" } },
    { e: "💧", t: { es: "Riégala despacio", ca: "Rega-la a poc a poc", en: "Water it slowly", cs: "Pomalu ho zalij", fr: "Arrose-la doucement" } },
    { e: "🍂", t: { es: "Abrígala con hojitas", ca: "Abriga-la amb fulletes", en: "Tuck leaves around it", cs: "Přikryj ho lístky", fr: "Couvre-la de petites feuilles" } }
  ],
  done: { es: "Bajo la tierra, la semilla ya trabaja. Los árboles crecen despacio y valen la espera.", ca: "Sota la terra, la llavor ja treballa. Els arbres creixen a poc a poc i val la pena esperar-los.", en: "Under the soil, the seed is already at work. Trees grow slowly, and they are worth the wait.", cs: "Pod zemí už semínko pracuje. Stromy rostou pomalu a čekání za to stojí.", fr: "Sous la terre, la graine travaille déjà. Les arbres poussent lentement et méritent qu'on les attende." }
};

/* el huerto: cuidarlo cada día para que dé fruta */
CARE.frutas = {
  before: "🌱", after: "🍅", deco: "🐝 ☀️ 🧺",
  title: { es: "El huerto", ca: "L'hort", en: "The vegetable garden", cs: "Zahrádka", fr: "Le potager" },
  intro: { es: "El huerto necesita cuidados cada mañana. Hoy te toca a ti, {name}.", ca: "L'hort necessita cures cada matí. Avui et toca a tu, {name}.", en: "The garden needs looking after every morning. Today it is your turn, {name}.", cs: "Zahrádka potřebuje každé ráno péči. Dnes je řada na tobě, {name}.", fr: "Le potager a besoin de soins chaque matin. Aujourd'hui, c'est ton tour, {name}." },
  steps: [
    { e: "🐌", t: { es: "Saca los caracoles con cuidado", ca: "Treu els cargols amb cura", en: "Gently move the snails away", cs: "Opatrně odnes šneky pryč", fr: "Déplace doucement les escargots" } },
    { e: "💧", t: { es: "Riega las plantas", ca: "Rega les plantes", en: "Water the plants", cs: "Zalij rostliny", fr: "Arrose les plantes" } },
    { e: "🌾", t: { es: "Quita las hierbas silvestres", ca: "Arrenca les herbes silvestres", en: "Pull out the stray weeds", cs: "Vytrhej plevel ze záhonu", fr: "Enlève les herbes folles" } },
    { e: "🧺", t: { es: "Recoge la fruta madura", ca: "Cull la fruita madura", en: "Pick the ripe fruit", cs: "Natrhej zralé ovoce", fr: "Cueille les fruits mûrs" } }
  ],
  done: { es: "El huerto queda cuidado y la cesta está llena. La huerta da fruta a quien la cuida cada día.", ca: "L'hort queda ben cuidat i el cistell és ple. L'hort dona fruita a qui el cuida cada dia.", en: "The garden is cared for and the basket is full. A garden gives fruit to those who tend it every day.", cs: "Zahrádka je krásně upravená a košík je plný. Zahrádka dává ovoce tomu, kdo se o ni každý den stará.", fr: "Le potager est soigné et le panier est plein. Le potager donne des fruits à qui en prend soin chaque jour." }
};
