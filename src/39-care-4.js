"use strict";
/* MODO CUIDAR, fichero 39-care-4: Egipto, Amazonas y Gaudí.
   La constante CARE está declarada en 39-care-0.js. */

/* el gato del templo: en el antiguo Egipto los gatos eran animales muy queridos y protegidos */
CARE.egipto = {
  before: "🐈", after: "😻", deco: "🏛️ ☀️ 🌴",
  title: { es: "El gato del templo", ca: "El gat del temple", en: "The temple cat", cs: "Chrámová kočka", fr: "Le chat du temple" },
  intro: { es: "El gato del templo espera sus cuidados de hoy. En el antiguo Egipto los gatos eran animales muy queridos y protegidos, {name}.", ca: "El gat del temple espera les cures d'avui. A l'antic Egipte els gats eren animals molt estimats i protegits, {name}.", en: "The temple cat is waiting for its daily care. In ancient Egypt, cats were much loved and protected animals, {name}.", cs: "Chrámová kočka čeká na svou každodenní péči. Ve starém Egyptě byly kočky velmi milovaná a chráněná zvířata, {name}.", fr: "Le chat du temple attend ses soins du jour. Dans l'Égypte ancienne, les chats étaient des animaux très aimés et protégés, {name}." },
  steps: [
    { e: "🪮", t: { es: "Cepilla su pelo suave", ca: "Raspalla el seu pèl suau", en: "Brush its soft fur", cs: "Vykartáčuj jí jemnou srst", fr: "Brosse son poil doux" } },
    { e: "💧", t: { es: "Ponle agua fresquita", ca: "Posa-li aigua fresqueta", en: "Give it fresh water", cs: "Nalij jí čerstvou vodu", fr: "Donne-lui de l'eau fraîche" } },
    { e: "🛏️", t: { es: "Prepárale su cojín", ca: "Prepara-li el coixí", en: "Get its cushion ready", cs: "Připrav jí polštářek", fr: "Prépare son coussin" } },
    { e: "🤲", t: { es: "Despídete con una caricia", ca: "Acomiada't amb una carícia", en: "Say goodbye with a stroke", cs: "Rozluč se pohlazením", fr: "Caresse-le pour dire au revoir" } }
  ],
  done: { es: "El gato ronronea tranquilo en su cojín. En Egipto, cuidar a los gatos era un honor.", ca: "El gat ronca tranquil al seu coixí. A Egipte, tenir cura dels gats era un honor.", en: "The cat purrs quietly on its cushion. In Egypt, caring for cats was an honor.", cs: "Kočka spokojeně přede na svém polštářku. V Egyptě byla péče o kočky velká čest.", fr: "Le chat ronronne tranquille sur son coussin. En Égypte, prendre soin des chats était un honneur." }
};

/* el arbolito de la selva: cuidar sin dejar rastro */
CARE.amazonas = {
  before: "🌱", after: "🌴", deco: "🦜 🦋 💚",
  title: { es: "El arbolito de la selva", ca: "L'arbret de la selva", en: "The little jungle tree", cs: "Stromek z pralesa", fr: "Le petit arbre de la jungle" },
  intro: { es: "Un arbolito de la selva casi no recibe luz y necesita ayuda para crecer, {name}.", ca: "Un arbret de la selva gairebé no rep llum i necessita ajuda per créixer, {name}.", en: "A little tree in the jungle gets almost no light and needs help to grow, {name}.", cs: "Malý stromek v pralese skoro nemá světlo a potřebuje pomoc, aby mohl růst, {name}.", fr: "Un petit arbre de la jungle ne reçoit presque pas de lumière et a besoin d'aide pour grandir, {name}." },
  steps: [
    { e: "🍃", t: { es: "Aparta las hojas", ca: "Aparta les fulles", en: "Move the leaves aside", cs: "Odhrň velké listy", fr: "Écarte les feuilles" } },
    { e: "💧", t: { es: "Riégalo con agua de lluvia", ca: "Rega'l amb aigua de pluja", en: "Water it with rainwater", cs: "Zalij ho dešťovou vodou", fr: "Arrose-le d'eau de pluie" } },
    { e: "🪵", t: { es: "Ponle un palito de apoyo", ca: "Posa-li un bastonet de suport", en: "Prop it with a stick", cs: "Podepři ho klacíkem", fr: "Mets-lui un petit tuteur" } },
    { e: "🎒", t: { es: "Recoge todas tus cosas", ca: "Recull les teves coses", en: "Pack up your things", cs: "Sbal si své věci", fr: "Ramasse toutes tes affaires" } }
  ],
  done: { es: "El arbolito respira y crece poco a poco. En la selva se cuida sin dejar huella.", ca: "L'arbret respira i creix a poc a poc. A la selva es cuida sense deixar petjada.", en: "The little tree breathes and grows, little by little. In the jungle, you care without leaving a trace.", cs: "Stromek dýchá a pomalu roste. V pralese pečujeme tak, abychom nezanechali stopy.", fr: "Le petit arbre respire et grandit peu à peu. Dans la jungle, on prend soin sans laisser de trace." }
};

/* el mosaico de trencadís: la técnica de Gaudí con trocitos de cerámica */
CARE.gaudi = {
  before: "🧩", after: "✨", deco: "🦎 🏞️ 🔷",
  title: { es: "El mosaico de trencadís", ca: "El mosaic de trencadís", en: "The trencadís mosaic", cs: "Mozaika trencadís", fr: "La mosaïque en trencadís" },
  intro: { es: "Al mosaico de trencadís le falta una tesela y está un poco desordenado. Gaudí lo hacía con trocitos de cerámica, {name}.", ca: "Al mosaic de trencadís li falta una tessel·la i està una mica desordenat. Gaudí el feia amb trossets de ceràmica, {name}.", en: "The trencadís mosaic is missing a piece and looks a little untidy. Gaudí made it with small bits of ceramic, {name}.", cs: "Mozaice trencadís chybí jeden dílek a je trochu neuspořádaná. Gaudí ji skládal z kousků keramiky, {name}.", fr: "Il manque un morceau à la mosaïque en trencadís et elle est un peu en désordre. Gaudí la faisait avec des petits bouts de céramique, {name}." },
  steps: [
    { e: "🎨", t: { es: "Ordena las teselas por colores", ca: "Ordena les tessel·les per colors", en: "Sort the tiles by color", cs: "Roztřiď dílky podle barev", fr: "Trie les morceaux par couleurs" } },
    { e: "🧽", t: { es: "Pasa el paño al mosaico", ca: "Passa el drap pel mosaic", en: "Wipe the mosaic clean", cs: "Otři mozaiku hadříkem", fr: "Essuie bien la mosaïque" } },
    { e: "🔷", t: { es: "Coloca la tesela que faltaba", ca: "Col·loca la tessel·la que faltava", en: "Place the missing tile", cs: "Vlož chybějící dílek", fr: "Pose le morceau qui manquait" } },
    { e: "📦", t: { es: "Guarda la caja de teselas", ca: "Desa la caixa de tessel·les", en: "Put the tile box away", cs: "Ukliď krabici s dílky", fr: "Range la boîte de morceaux" } }
  ],
  done: { es: "El mosaico brilla al sol como en el Park Güell. Cada trocito tiene su lugar.", ca: "El mosaic brilla al sol com al Park Güell. Cada trosset té el seu lloc.", en: "The mosaic shines in the sun, just like in Park Güell. Every little piece has its place.", cs: "Mozaika se leskne na slunci jako v parku Güell. Každý dílek má své místo.", fr: "La mosaïque brille au soleil comme au Park Güell. Chaque petit morceau a sa place." }
};
