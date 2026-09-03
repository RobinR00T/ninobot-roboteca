"use strict";
/* ============================================================
   Contenido de DINOSAURIOS (parte A): quiz, alfabeto,
   famosos, mates y constructor (la máquina del tiempo).
   ============================================================ */

THEMES.dinos.ready = true;
THEMES.dinos.content = {

  statusPlace: { es: "Conectado desde la Era Arcoíris", ca: "Connectat des de l'Era Arc de Sant Martí", en: "Connected from the Rainbow Era", cs: "Připojeno z Duhového pravěku", fr: "Connecté depuis l'Ère Arc-en-ciel" },
  welcome: { es: "¡Encendemos la máquina del tiempo, {name}! Destino: la era de los dinosaurios. ¡Agárrate!", ca: "Encenem la màquina del temps, {name}! Destinació: l'era dels dinosaures. Agafa't fort!", en: "Starting the time machine, {name}! Destination: the age of the dinosaurs. Hold on tight!", cs: "Zapínáme stroj času, {name}! Cíl: éra dinosaurů. Pořádně se drž!", fr: "On allume la machine à voyager dans le temps, {name} ! Destination : l'ère des dinosaures. Accroche-toi !" },

  /* ---------- QUIZ ---------- */
  quiz: [
    { emoji: "🦖",
      q: { es: "¿Qué dinosaurio tenía dientes enormes y brazos pequeñitos?", ca: "Quin dinosaure tenia dents enormes i braços petitons?", en: "Which dinosaur had huge teeth and tiny arms?", cs: "Který dinosaurus měl obrovské zuby a maličké ruce?", fr: "Quel dinosaure avait des dents énormes et de tout petits bras ?" },
      options: [
        { es: "El T-Rex", ca: "El T-Rex", en: "T-Rex", cs: "T-Rex", fr: "Le T-Rex" },
        { es: "El Triceratops", ca: "El Triceratops", en: "Triceratops", cs: "Triceratops", fr: "Le Tricératops" },
        { es: "El Braquiosaurio", ca: "El Braquiosaure", en: "Brachiosaurus", cs: "Brachiosaurus", fr: "Le Brachiosaure" },
        { es: "El Estegosaurio", ca: "L'Estegosaure", en: "Stegosaurus", cs: "Stegosaurus", fr: "Le Stégosaure" }],
      answer: 0,
      explanation: { es: "¡El T-Rex! Sus dientes eran tan grandes como plátanos, pero sus bracitos no llegaban ni a su boca.", ca: "El T-Rex! Les seves dents eren tan grans com plàtans, però els seus bracets no li arribaven ni a la boca.", en: "The T-Rex! Its teeth were as big as bananas, but its little arms could not even reach its mouth.", cs: "T-Rex! Zuby měl velké jako banány, ale ručičkama si nedosáhl ani na pusu.", fr: "Le T-Rex ! Ses dents étaient grandes comme des bananes, mais ses petits bras n'atteignaient même pas sa bouche." } },
    { emoji: "🌿",
      q: { es: "¿Qué comía el Braquiosaurio?", ca: "Què menjava el Braquiosaure?", en: "What did the Brachiosaurus eat?", cs: "Co jedl Brachiosaurus?", fr: "Que mangeait le Brachiosaure ?" },
      options: [
        { es: "Carne", ca: "Carn", en: "Meat", cs: "Maso", fr: "De la viande" },
        { es: "Plantas", ca: "Plantes", en: "Plants", cs: "Rostliny", fr: "Des plantes" },
        { es: "Peces", ca: "Peixos", en: "Fish", cs: "Ryby", fr: "Des poissons" },
        { es: "Galletas", ca: "Galetes", en: "Cookies", cs: "Sušenky", fr: "Des biscuits" }],
      answer: 1,
      explanation: { es: "Comía hojas de los árboles más altos gracias a su cuello larguísimo. ¡Como una grúa con hambre!", ca: "Menjava fulles dels arbres més alts gràcies al seu coll llarguíssim. Com una grua amb gana!", en: "It ate leaves from the tallest trees thanks to its super long neck. Like a hungry crane!", cs: "Díky svému předlouhému krku jedl listy z nejvyšších stromů. Jako hladový jeřáb!", fr: "Il mangeait les feuilles des arbres les plus hauts grâce à son très long cou. Comme une grue affamée !" } },
    { emoji: "🛡️",
      q: { es: "¿Cuántos cuernos tenía el Triceratops?", ca: "Quantes banyes tenia el Triceratops?", en: "How many horns did the Triceratops have?", cs: "Kolik rohů měl Triceratops?", fr: "Combien de cornes avait le Tricératops ?" },
      options: [
        { es: "1", ca: "1", en: "1", cs: "1", fr: "1" },
        { es: "2", ca: "2", en: "2", cs: "2", fr: "2" },
        { es: "3", ca: "3", en: "3", cs: "3", fr: "3" },
        { es: "10", ca: "10", en: "10", cs: "10", fr: "10" }],
      answer: 2,
      explanation: { es: "Tres: dos grandes sobre los ojos y uno pequeño en la nariz. Su nombre significa 'cara con tres cuernos'.", ca: "Tres: dues de grans sobre els ulls i una de petita al nas. El seu nom vol dir 'cara amb tres banyes'.", en: "Three: two big ones above its eyes and a small one on its nose. Its name means 'three-horned face'.", cs: "Tři: dva velké nad očima a jeden malý na nose. Jeho jméno znamená 'tvář se třemi rohy'.", fr: "Trois : deux grandes au-dessus des yeux et une petite sur le nez. Son nom veut dire « visage à trois cornes »." } },
    { emoji: "🦴",
      q: { es: "¿Qué es un fósil?", ca: "Què és un fòssil?", en: "What is a fossil?", cs: "Co je fosilie?", fr: "Qu'est-ce qu'un fossile ?" },
      options: [
        { es: "Un juguete antiguo", ca: "Una joguina antiga", en: "An old toy", cs: "Stará hračka", fr: "Un vieux jouet" },
        { es: "Restos de seres muy antiguos guardados en la piedra", ca: "Restes d'éssers molt antics guardades a la pedra", en: "Remains of very old creatures kept in stone", cs: "Pozůstatky pradávných tvorů uchované v kameni", fr: "Des restes d'êtres très anciens gardés dans la pierre" },
        { es: "Una roca de volcán", ca: "Una roca de volcà", en: "A volcano rock", cs: "Sopečný kámen", fr: "Une roche de volcan" },
        { es: "Un caramelo duro", ca: "Un caramel dur", en: "A hard candy", cs: "Tvrdý bonbon", fr: "Un bonbon dur" }],
      answer: 1,
      explanation: { es: "La tierra guardó huesos y huellas durante millones de años. Los fósiles son historias que la tierra quiere contarte.", ca: "La terra va guardar ossos i petjades durant milions d'anys. Els fòssils són històries que la terra et vol explicar.", en: "The earth kept bones and footprints for millions of years. Fossils are stories the earth wants to tell you.", cs: "Země uchovala kosti a stopy miliony let. Fosilie jsou příběhy, které ti země chce vyprávět.", fr: "La terre a gardé des os et des empreintes pendant des millions d'années. Les fossiles sont des histoires que la terre veut te raconter." } },
    { emoji: "🪽",
      q: { es: "¿Cuál de estos volaba?", ca: "Quin d'aquests volava?", en: "Which of these could fly?", cs: "Který z nich uměl létat?", fr: "Lequel d'entre eux volait ?" },
      options: [
        { es: "El Velocirráptor", ca: "El Velociraptor", en: "Velociraptor", cs: "Velociraptor", fr: "Le Vélociraptor" },
        { es: "El Pteranodón", ca: "El Pteranodont", en: "Pteranodon", cs: "Pteranodon", fr: "Le Ptéranodon" },
        { es: "El Anquilosaurio", ca: "L'Anquilosaure", en: "Ankylosaurus", cs: "Ankylosaurus", fr: "L'Ankylosaure" },
        { es: "El T-Rex", ca: "El T-Rex", en: "T-Rex", cs: "T-Rex", fr: "Le T-Rex" }],
      answer: 1,
      explanation: { es: "El Pteranodón planeaba con alas más grandes que un coche. En realidad no era un dinosaurio: ¡era un reptil volador!", ca: "El Pteranodont planava amb ales més grans que un cotxe. En realitat no era un dinosaure: era un rèptil volador!", en: "The Pteranodon glided with wings bigger than a car. It was not really a dinosaur: it was a flying reptile!", cs: "Pteranodon plachtil na křídlech větších než auto. Ve skutečnosti to nebyl dinosaurus, ale létající ještěr!", fr: "Le Ptéranodon planait avec des ailes plus grandes qu'une voiture. Ce n'était pas vraiment un dinosaure : c'était un reptile volant !" } },
    { emoji: "🔶",
      q: { es: "¿Qué tenía el Estegosaurio en el lomo?", ca: "Què tenia l'Estegosaure a l'esquena?", en: "What did the Stegosaurus have on its back?", cs: "Co měl Stegosaurus na hřbetě?", fr: "Qu'avait le Stégosaure sur le dos ?" },
      options: [
        { es: "Plumas de colores", ca: "Plomes de colors", en: "Colourful feathers", cs: "Barevná pírka", fr: "Des plumes colorées" },
        { es: "Placas grandes", ca: "Plaques grans", en: "Big plates", cs: "Velké desky", fr: "De grandes plaques" },
        { es: "Alas", ca: "Ales", en: "Wings", cs: "Křídla", fr: "Des ailes" },
        { es: "Una mochila", ca: "Una motxilla", en: "A backpack", cs: "Batoh", fr: "Un sac à dos" }],
      answer: 1,
      explanation: { es: "Placas grandes en fila, como un tejado. Y en la cola, ¡cuatro pinchos para defenderse!", ca: "Plaques grans en filera, com una teulada. I a la cua, quatre punxes per defensar-se!", en: "Big plates in a row, like a roof. And on its tail, four spikes to defend itself!", cs: "Velké desky v řadě jako střecha. A na ocase čtyři bodce na obranu!", fr: "De grandes plaques alignées, comme un toit. Et sur la queue, quatre piquants pour se défendre !" } },
    { emoji: "🥚",
      q: { es: "¿Cómo nacían los dinosaurios?", ca: "Com naixien els dinosaures?", en: "How were dinosaurs born?", cs: "Jak se dinosauři rodili?", fr: "Comment naissaient les dinosaures ?" },
      options: [
        { es: "De huevos", ca: "D'ous", en: "From eggs", cs: "Z vajec", fr: "D'œufs" },
        { es: "De flores", ca: "De flors", en: "From flowers", cs: "Z květin", fr: "De fleurs" },
        { es: "Del mar", ca: "Del mar", en: "From the sea", cs: "Z moře", fr: "De la mer" },
        { es: "De la lluvia", ca: "De la pluja", en: "From the rain", cs: "Z deště", fr: "De la pluie" }],
      answer: 0,
      explanation: { es: "De huevos, como los pájaros. Algunos eran tan grandes como un balón de fútbol.", ca: "D'ous, com els ocells. Alguns eren tan grans com una pilota de futbol.", en: "From eggs, like birds. Some were as big as a football.", cs: "Z vajec, jako ptáci. Některá byla velká jako fotbalový míč.", fr: "D'œufs, comme les oiseaux. Certains étaient aussi gros qu'un ballon de foot." } },
    { emoji: "💨",
      q: { es: "¿Cómo era el Velocirráptor?", ca: "Com era el Velociraptor?", en: "What was the Velociraptor like?", cs: "Jaký byl Velociraptor?", fr: "Comment était le Vélociraptor ?" },
      options: [
        { es: "Muy lento", ca: "Molt lent", en: "Very slow", cs: "Hodně pomalý", fr: "Très lent" },
        { es: "Muy rápido y muy listo", ca: "Molt ràpid i molt llest", en: "Very fast and very clever", cs: "Hodně rychlý a chytrý", fr: "Très rapide et très malin" },
        { es: "Muy dormilón", ca: "Molt dormilega", en: "Very sleepy", cs: "Hodně ospalý", fr: "Très dormeur" },
        { es: "Un pez", ca: "Un peix", en: "A fish", cs: "Ryba", fr: "Un poisson" }],
      answer: 1,
      explanation: { es: "Su nombre significa 'ladrón veloz'. Era pequeño, rapidísimo y cazaba en equipo. ¡Y tenía plumas!", ca: "El seu nom vol dir 'lladre veloç'. Era petit, rapidíssim i caçava en equip. I tenia plomes!", en: "Its name means 'speedy thief'. It was small, super fast and hunted in a team. And it had feathers!", cs: "Jeho jméno znamená 'rychlý zloděj'. Byl malý, hrozně rychlý a lovil v týmu. A měl peří!", fr: "Son nom veut dire « voleur rapide ». Il était petit, très rapide et chassait en équipe. Et il avait des plumes !" } },
    { emoji: "📅",
      q: { es: "¿En qué era vivió el T-Rex?", ca: "En quina era va viure el T-Rex?", en: "In which period did the T-Rex live?", cs: "Ve kterém období žil T-Rex?", fr: "À quelle époque vivait le T-Rex ?" },
      options: [
        { es: "Triásico", ca: "Triàsic", en: "Triassic", cs: "Trias", fr: "Trias" },
        { es: "Jurásico", ca: "Juràssic", en: "Jurassic", cs: "Jura", fr: "Jurassique" },
        { es: "Cretácico", ca: "Cretaci", en: "Cretaceous", cs: "Křída", fr: "Crétacé" },
        { es: "Ayer", ca: "Ahir", en: "Yesterday", cs: "Včera", fr: "Hier" }],
      answer: 2,
      explanation: { es: "En el Cretácico, la última era de los dinosaurios. El Estegosaurio ya era antiquísimo para el T-Rex.", ca: "Al Cretaci, l'última era dels dinosaures. L'Estegosaure ja era antiquíssim per al T-Rex.", en: "In the Cretaceous, the last age of the dinosaurs. To the T-Rex, the Stegosaurus was already ancient history.", cs: "V křídě, posledním období dinosaurů. Stegosaurus byl pro T-Rexe už dávná minulost.", fr: "Au Crétacé, la dernière ère des dinosaures. Pour le T-Rex, le Stégosaure était déjà de l'histoire ancienne." } },
    { emoji: "⛏️",
      q: { es: "¿Cómo se llama quien estudia los dinosaurios?", ca: "Com es diu qui estudia els dinosaures?", en: "What do you call someone who studies dinosaurs?", cs: "Jak se říká člověku, který zkoumá dinosaury?", fr: "Comment s'appelle la personne qui étudie les dinosaures ?" },
      options: [
        { es: "Astronauta", ca: "Astronauta", en: "Astronaut", cs: "Astronaut", fr: "Astronaute" },
        { es: "Paleontóloga o paleontólogo", ca: "Paleontòloga o paleontòleg", en: "Palaeontologist", cs: "Paleontolog", fr: "Paléontologue" },
        { es: "Bombera", ca: "Bombera", en: "Firefighter", cs: "Hasič", fr: "Pompier" },
        { es: "Cocinero", ca: "Cuiner", en: "Cook", cs: "Kuchař", fr: "Cuisinier" }],
      answer: 1,
      explanation: { es: "Los paleontólogos buscan fósiles con pinceles y mucha paciencia, como detectives del pasado.", ca: "Els paleontòlegs busquen fòssils amb pinzells i molta paciència, com detectius del passat.", en: "Palaeontologists look for fossils with brushes and lots of patience, like detectives of the past.", cs: "Paleontologové hledají fosilie se štětečky a velkou trpělivostí, jako detektivové minulosti.", fr: "Les paléontologues cherchent des fossiles avec des pinceaux et beaucoup de patience, comme des détectives du passé." } },
    { emoji: "🐦",
      q: { es: "¿Qué animales de hoy son parientes de los dinosaurios?", ca: "Quins animals d'avui són parents dels dinosaures?", en: "Which animals today are relatives of the dinosaurs?", cs: "Která dnešní zvířata jsou příbuzná s dinosaury?", fr: "Quels animaux d'aujourd'hui sont les cousins des dinosaures ?" },
      options: [
        { es: "Los pájaros", ca: "Els ocells", en: "Birds", cs: "Ptáci", fr: "Les oiseaux" },
        { es: "Los peces", ca: "Els peixos", en: "Fish", cs: "Ryby", fr: "Les poissons" },
        { es: "Los gatos", ca: "Els gats", en: "Cats", cs: "Kočky", fr: "Les chats" },
        { es: "Las hormigas", ca: "Les formigues", en: "Ants", cs: "Mravenci", fr: "Les fourmis" }],
      answer: 0,
      explanation: { es: "Los pájaros descienden de dinosaurios con plumas. ¡Un gorrión es un dinosaurio pequeñito de hoy!", ca: "Els ocells descendeixen de dinosaures amb plomes. Un pardal és un dinosaure petitó d'avui!", en: "Birds come from feathered dinosaurs. A sparrow is a tiny dinosaur of today!", cs: "Ptáci pocházejí z opeřených dinosaurů. Vrabec je vlastně maličký dnešní dinosaurus!", fr: "Les oiseaux descendent des dinosaures à plumes. Un moineau est un tout petit dinosaure d'aujourd'hui !" } },
    { emoji: "☄️",
      q: { es: "¿Por qué desaparecieron los dinosaurios?", ca: "Per què van desaparèixer els dinosaures?", en: "Why did the dinosaurs disappear?", cs: "Proč dinosauři vyhynuli?", fr: "Pourquoi les dinosaures ont-ils disparu ?" },
      options: [
        { es: "Se fueron de vacaciones", ca: "Van marxar de vacances", en: "They went on holiday", cs: "Odjeli na prázdniny", fr: "Ils sont partis en vacances" },
        { es: "Se escondieron muy bien", ca: "Es van amagar molt bé", en: "They hid really well", cs: "Moc dobře se schovali", fr: "Ils se sont très bien cachés" },
        { es: "Cayó un meteorito enorme", ca: "Va caure un meteorit enorme", en: "A huge meteorite fell", cs: "Spadl obrovský meteorit", fr: "Une énorme météorite est tombée" },
        { es: "Se hicieron invisibles", ca: "Es van fer invisibles", en: "They turned invisible", cs: "Stali se neviditelnými", fr: "Ils sont devenus invisibles" }],
      answer: 2,
      explanation: { es: "Hace 66 millones de años cayó un meteorito gigante y cambió el clima de toda la Tierra. Solo sobrevivieron algunos animales, como los pájaros.", ca: "Fa 66 milions d'anys va caure un meteorit gegant i va canviar el clima de tota la Terra. Només van sobreviure alguns animals, com els ocells.", en: "66 million years ago a giant meteorite fell and changed the climate of the whole Earth. Only some animals survived, like the birds.", cs: "Před 66 miliony let spadl obří meteorit a změnil podnebí celé Země. Přežila jen některá zvířata, třeba ptáci.", fr: "Il y a 66 millions d'années, une météorite géante est tombée et a changé le climat de toute la Terre. Seuls quelques animaux ont survécu, comme les oiseaux." } },
    { emoji: "🦣",
      q: { es: "¿El mamut vivió en la época de los dinosaurios?", ca: "El mamut va viure a l'època dels dinosaures?", en: "Did the mammoth live in the time of the dinosaurs?", cs: "Žil mamut v době dinosaurů?", fr: "Le mammouth vivait-il à l'époque des dinosaures ?" },
      options: [
        { es: "Sí, eran vecinos", ca: "Sí, eren veïns", en: "Yes, they were neighbours", cs: "Ano, byli sousedé", fr: "Oui, ils étaient voisins" },
        { es: "No, vivió muchos millones de años después", ca: "No, va viure molts milions d'anys després", en: "No, it lived many millions of years later", cs: "Ne, žil o mnoho milionů let později", fr: "Non, il a vécu des millions d'années plus tard" },
        { es: "Sí, era la mascota del T-Rex", ca: "Sí, era la mascota del T-Rex", en: "Yes, it was the T-Rex's pet", cs: "Ano, byl to mazlíček T-Rexe", fr: "Oui, c'était l'animal du T-Rex" },
        { es: "El mamut no existió", ca: "El mamut no va existir", en: "The mammoth never existed", cs: "Mamut nikdy neexistoval", fr: "Le mammouth n'a jamais existé" }],
      answer: 1,
      explanation: { es: "El mamut no es de la era de los dinosaurios: vivió mucho después, en la Edad de Hielo, y conoció a los primeros humanos.", ca: "El mamut no és de l'era dels dinosaures: va viure molt després, a l'Edat de Gel, i va conèixer els primers humans.", en: "The mammoth is not from the age of dinosaurs: it lived much later, in the Ice Age, and met the first humans.", cs: "Mamut nepatří do éry dinosaurů: žil mnohem později, v době ledové, a potkal první lidi.", fr: "Le mammouth n'est pas de l'ère des dinosaures : il a vécu bien plus tard, à l'âge de glace, et a rencontré les premiers humains." } },
    { emoji: "🦕",
      q: { es: "¿Cuál de estos fue uno de los animales más grandes que han caminado por la Tierra?", ca: "Quin d'aquests va ser un dels animals més grans que han caminat per la Terra?", en: "Which of these was one of the biggest animals ever to walk the Earth?", cs: "Které z těchto zvířat patřilo k největším, jaká kdy chodila po Zemi?", fr: "Lequel de ces animaux a été l'un des plus grands à avoir marché sur Terre ?" },
      options: [
        { es: "La gallina", ca: "La gallina", en: "The hen", cs: "Slepice", fr: "La poule" },
        { es: "El gato", ca: "El gat", en: "The cat", cs: "Kočka", fr: "Le chat" },
        { es: "El caballo", ca: "El cavall", en: "The horse", cs: "Kůň", fr: "Le cheval" },
        { es: "El Argentinosaurio", ca: "L'Argentinosaure", en: "Argentinosaurus", cs: "Argentinosaurus", fr: "L'Argentinosaure" }],
      answer: 3,
      explanation: { es: "El Argentinosaurio medía como tres autobuses en fila y pesaba como diez elefantes. ¡El suelo temblaba a cada paso!", ca: "L'Argentinosaure feia com tres autobusos en filera i pesava com deu elefants. El terra tremolava a cada pas!", en: "Argentinosaurus was as long as three buses in a row and as heavy as ten elephants. The ground shook with every step!", cs: "Argentinosaurus byl dlouhý jako tři autobusy za sebou a vážil jako deset slonů. Země se třásla při každém jeho kroku!", fr: "L'Argentinosaure était long comme trois bus à la file et lourd comme dix éléphants. Le sol tremblait à chaque pas !" } },
    { emoji: "🌊",
      q: { es: "¿Quién nadaba por los mares cuando vivían los dinosaurios?", ca: "Qui nedava pels mars quan vivien els dinosaures?", en: "Who swam in the seas when the dinosaurs were alive?", cs: "Kdo plaval v mořích v době dinosaurů?", fr: "Qui nageait dans les mers quand vivaient les dinosaures ?" },
      options: [
        { es: "El plesiosaurio", ca: "El plesiosaure", en: "The plesiosaur", cs: "Plesiosaurus", fr: "Le plésiosaure" },
        { es: "El T-Rex", ca: "El T-Rex", en: "T-Rex", cs: "T-Rex", fr: "Le T-Rex" },
        { es: "El mamut", ca: "El mamut", en: "The mammoth", cs: "Mamut", fr: "Le mammouth" },
        { es: "Una sirena", ca: "Una sirena", en: "A mermaid", cs: "Mořská panna", fr: "Une sirène" }],
      answer: 0,
      explanation: { es: "El plesiosaurio nadaba con cuatro aletas y un cuello larguísimo. No era un dinosaurio: era un reptil marino.", ca: "El plesiosaure nedava amb quatre aletes i un coll llarguíssim. No era un dinosaure: era un rèptil marí.", en: "The plesiosaur swam with four flippers and a very long neck. It was not a dinosaur: it was a sea reptile.", cs: "Plesiosaurus plaval pomocí čtyř ploutví a měl předlouhý krk. Nebyl to dinosaurus, ale mořský ještěr.", fr: "Le plésiosaure nageait avec quatre nageoires et un très long cou. Ce n'était pas un dinosaure : c'était un reptile marin." } }
  ],

  /* ---------- ALFABETO ---------- */
  alphabet: [
    { letter: "A", emoji: "🛡️", item: { es: "Anquilosaurio", ca: "Anquilosaure", en: "Ankylosaurus", cs: "Ankylosaurus", fr: "Ankylosaure" },
      fact: { es: "Iba blindado como un tanque y tenía un mazo en la cola.", ca: "Anava blindat com un tanc i tenia una maça a la cua.", en: "It was armoured like a tank and had a club on its tail.", cs: "Byl obrněný jako tank a na ocase měl kyj.", fr: "Il était blindé comme un char et avait une massue au bout de la queue." } },
    { letter: "B", emoji: "🦕", item: { es: "Braquiosaurio", ca: "Braquiosaure", en: "Brachiosaurus", cs: "Brachiosaurus", fr: "Brachiosaure" },
      fact: { es: "Su cuello era tan alto como una casa de cuatro pisos.", ca: "El seu coll era tan alt com una casa de quatre pisos.", en: "Its neck was as tall as a four-storey house.", cs: "Jeho krk byl vysoký jako čtyřpatrový dům.", fr: "Son cou était aussi haut qu'une maison de quatre étages." } },
    { letter: "C", emoji: "🦴", item: { es: "Cráneo", ca: "Crani", en: "Claw", cs: "Ceratops", fr: "Crâne" },
      fact: { es: "El cráneo del Triceratops era tan grande como una persona.", ca: "El crani del Triceratops era tan gran com una persona.", en: "A raptor's claw was curved like a hook for climbing and hunting.", cs: "Ceratopsové byli dinosauři s rohy a velkým límcem.", fr: "Le crâne du Tricératops était aussi grand qu'une personne." } },
    { letter: "D", emoji: "🦖", item: { es: "Dinosaurio", ca: "Dinosaure", en: "Dinosaur", cs: "Dinosaurus", fr: "Dinosaure" },
      fact: { es: "La palabra dinosaurio significa 'lagarto terriblemente grande'.", ca: "La paraula dinosaure vol dir 'llangardaix terriblement gran'.", en: "The word dinosaur means 'terribly big lizard'.", cs: "Slovo dinosaurus znamená 'strašně velký ještěr'.", fr: "Le mot dinosaure veut dire « lézard terriblement grand »." } },
    { letter: "E", emoji: "🔶", item: { es: "Estegosaurio", ca: "Estegosaure", en: "Egg", cs: "Éra", fr: "Empreinte" },
      fact: { es: "El Estegosaurio tenía el cerebro del tamaño de una nuez.", ca: "L'Estegosaure tenia el cervell de la mida d'una nou.", en: "Some dinosaur eggs were as big as footballs.", cs: "Dinosauři žili ve třech érách: trias, jura a křída.", fr: "Une empreinte de dinosaure peut être plus grande que toi !" } },
    { letter: "F", emoji: "🪨", item: { es: "Fósil", ca: "Fòssil", en: "Fossil", cs: "Fosilie", fr: "Fossile" },
      fact: { es: "Un fósil es un tesoro del pasado guardado en la piedra.", ca: "Un fòssil és un tresor del passat guardat a la pedra.", en: "A fossil is a treasure from the past kept in stone.", cs: "Fosilie je poklad z minulosti uchovaný v kameni.", fr: "Un fossile est un trésor du passé gardé dans la pierre." } },
    { letter: "G", emoji: "🐦", item: { es: "Gallimimus", ca: "Gallimimus", en: "Gallimimus", cs: "Gallimimus", fr: "Gallimimus" },
      fact: { es: "Corría como un avestruz gigante: ¡era de los más rápidos!", ca: "Corria com un estruç gegant: era dels més ràpids!", en: "It ran like a giant ostrich: one of the fastest of all!", cs: "Běhal jako obří pštros: patřil k nejrychlejším!", fr: "Il courait comme une autruche géante : l'un des plus rapides !" } },
    { letter: "H", emoji: "🌿", item: { es: "Herbívoro", ca: "Herbívor", en: "Herbivore", cs: "Hnízdo", fr: "Herbivore" },
      fact: { es: "Los herbívoros comían plantas todo el día. ¡Toneladas de ensalada!", ca: "Els herbívors menjaven plantes tot el dia. Tones d'amanida!", en: "Herbivores ate plants all day long. Tons of salad!", cs: "Dinosauři si stavěli hnízda a hlídali svá vajíčka.", fr: "Les herbivores mangeaient des plantes toute la journée. Des tonnes de salade !" } },
    { letter: "I", emoji: "👍", item: { es: "Iguanodón", ca: "Iguanodont", en: "Iguanodon", cs: "Iguanodon", fr: "Iguanodon" },
      fact: { es: "Tenía un pincho en el pulgar, como un abrecartas.", ca: "Tenia una punxa al polze, com un obrecartes.", en: "It had a spike on its thumb, like a letter opener.", cs: "Na palci měl bodec, jako otvírák na dopisy.", fr: "Il avait un piquant sur le pouce, comme un ouvre-lettres." } },
    { letter: "J", emoji: "🌋", item: { es: "Jurásico", ca: "Juràssic", en: "Jurassic", cs: "Jura", fr: "Jurassique" },
      fact: { es: "En el Jurásico vivieron los gigantes de cuello largo.", ca: "Al Juràssic hi van viure els gegants de coll llarg.", en: "The long-necked giants lived in the Jurassic.", cs: "V juře žili obři s dlouhými krky.", fr: "Les géants au long cou vivaient au Jurassique." } },
    { letter: "K", emoji: "🌵", item: { es: "Kentrosaurio", ca: "Kentrosaure", en: "Kentrosaurus", cs: "Kentrosaurus", fr: "Kentrosaure" },
      fact: { es: "Primo del Estegosaurio, con pinchos hasta en los hombros.", ca: "Cosí de l'Estegosaure, amb punxes fins i tot a les espatlles.", en: "A cousin of the Stegosaurus, with spikes even on its shoulders.", cs: "Bratranec stegosaura, s bodci dokonce i na ramenou.", fr: "Un cousin du Stégosaure, avec des piquants jusque sur les épaules." } },
    { letter: "L", emoji: "🦎", item: { es: "Lagarto", ca: "Llangardaix", en: "Lizard", cs: "Lambeosaurus", fr: "Lézard" },
      fact: { es: "Los lagartos de hoy son parientes lejanos de los dinos.", ca: "Els llangardaixos d'avui són parents llunyans dels dinos.", en: "Today's lizards are distant relatives of the dinos.", cs: "Lambeosaurus měl na hlavě hřeben jako troubu na troubení.", fr: "Les lézards d'aujourd'hui sont des cousins lointains des dinos." } },
    { letter: "M", emoji: "🌊", item: { es: "Mosasaurio", ca: "Mosasaure", en: "Mosasaurus", cs: "Mosasaurus", fr: "Mosasaure" },
      fact: { es: "Un reptil gigante que nadaba en el mar como una ballena con dientes.", ca: "Un rèptil gegant que nedava al mar com una balena amb dents.", en: "A giant reptile that swam in the sea like a whale with teeth.", cs: "Obří ještěr, který plaval v moři jako velryba se zuby.", fr: "Un reptile géant qui nageait dans la mer comme une baleine à dents." } },
    { letter: "N", emoji: "🥚", item: { es: "Nido", ca: "Niu", en: "Nest", cs: "Nodosaurus", fr: "Nid" },
      fact: { es: "Muchos dinosaurios cuidaban sus nidos como los pájaros.", ca: "Molts dinosaures cuidaven els seus nius com els ocells.", en: "Many dinosaurs looked after their nests like birds do.", cs: "Nodosaurus měl krunýř posetý hrbolky jako dlažební kostky.", fr: "Beaucoup de dinosaures s'occupaient de leur nid comme les oiseaux." } },
    { letter: "O", emoji: "🍳", item: { es: "Oviraptor", ca: "Oviraptor", en: "Oviraptor", cs: "Oviraptor", fr: "Oviraptor" },
      fact: { es: "Le llamaron 'ladrón de huevos', ¡pero en realidad cuidaba los suyos!", ca: "Li van dir 'lladre d'ous', però en realitat cuidava els seus!", en: "It was called 'egg thief', but it was actually protecting its own!", cs: "Říkali mu 'zloděj vajec', ale on svoje vajíčka ve skutečnosti chránil!", fr: "On l'a appelé « voleur d'œufs », mais en réalité il protégeait les siens !" } },
    { letter: "P", emoji: "🪽", item: { es: "Pteranodón", ca: "Pteranodont", en: "Pteranodon", cs: "Pteranodon", fr: "Ptéranodon" },
      fact: { es: "Planeaba sobre el mar y pescaba como un pelícano gigante.", ca: "Planava sobre el mar i pescava com un pelicà gegant.", en: "It glided over the sea and fished like a giant pelican.", cs: "Plachtil nad mořem a lovil ryby jako obří pelikán.", fr: "Il planait au-dessus de la mer et pêchait comme un pélican géant." } },
    { letter: "Q", emoji: "🛩️", item: { es: "Quetzalcoatlus", ca: "Quetzalcoatlus", en: "Quetzalcoatlus", cs: "Quetzalcoatlus", fr: "Quetzalcoatlus" },
      fact: { es: "El animal volador más grande de la historia: ¡como una avioneta!", ca: "L'animal volador més gran de la història: com una avioneta!", en: "The biggest flying animal ever: the size of a small plane!", cs: "Největší létající zvíře všech dob: velké jako letadélko!", fr: "Le plus grand animal volant de l'histoire : comme un petit avion !" } },
    { letter: "R", emoji: "🏃", item: { es: "Raptor", ca: "Raptor", en: "Raptor", cs: "Raptor", fr: "Raptor" },
      fact: { es: "Los raptores cazaban en equipo, como los lobos.", ca: "Els raptors caçaven en equip, com els llops.", en: "Raptors hunted in teams, like wolves.", cs: "Raptoři lovili v týmu, jako vlci.", fr: "Les raptors chassaient en équipe, comme les loups." } },
    { letter: "S", emoji: "🦕", item: { es: "Saurópodo", ca: "Sauròpode", en: "Sauropod", cs: "Sauropod", fr: "Sauropode" },
      fact: { es: "Los saurópodos eran los animales más grandes que han pisado la Tierra.", ca: "Els sauròpodes eren els animals més grans que han trepitjat la Terra.", en: "Sauropods were the biggest animals ever to walk the Earth.", cs: "Sauropodi byli největší zvířata, jaká kdy chodila po Zemi.", fr: "Les sauropodes étaient les plus grands animaux à avoir marché sur Terre." } },
    { letter: "T", emoji: "🦖", item: { es: "T-Rex", ca: "T-Rex", en: "T-Rex", cs: "T-Rex", fr: "T-Rex" },
      fact: { es: "El rey de los dinosaurios. Su mordisco era el más fuerte de todos.", ca: "El rei dels dinosaures. La seva mossegada era la més forta de totes.", en: "The king of the dinosaurs. Its bite was the strongest of all.", cs: "Král dinosaurů. Jeho kousnutí bylo nejsilnější ze všech.", fr: "Le roi des dinosaures. Sa morsure était la plus forte de toutes." } },
    { letter: "U", emoji: "🪶", item: { es: "Utahraptor", ca: "Utahraptor", en: "Utahraptor", cs: "Utahraptor", fr: "Utahraptor" },
      fact: { es: "El raptor más grande: como un oso con plumas y garras.", ca: "El raptor més gran: com un ós amb plomes i urpes.", en: "The biggest raptor: like a bear with feathers and claws.", cs: "Největší raptor: jako medvěd s peřím a drápy.", fr: "Le plus grand raptor : comme un ours à plumes et à griffes." } },
    { letter: "V", emoji: "🌋", item: { es: "Volcán", ca: "Volcà", en: "Volcano", cs: "Vulkán", fr: "Volcan" },
      fact: { es: "En la era de los dinos había muchos volcanes despiertos.", ca: "A l'era dels dinos hi havia molts volcans desperts.", en: "In the dino age there were lots of wide-awake volcanoes.", cs: "V době dinosaurů bylo hodně probuzených sopek.", fr: "À l'époque des dinos, il y avait beaucoup de volcans réveillés." } },
    { letter: "W", emoji: "🐣", item: { es: "Wannanosaurus", ca: "Wannanosaurus", en: "Wannanosaurus", cs: "Wannanosaurus", fr: "Wannanosaurus" },
      fact: { es: "Uno de los dinos más pequeños: ¡cabría en tu mochila!", ca: "Un dels dinos més petits: cabria a la teva motxilla!", en: "One of the smallest dinos: it would fit in your backpack!", cs: "Jeden z nejmenších dinosaurů: vešel by se ti do batohu!", fr: "L'un des plus petits dinos : il tiendrait dans ton sac à dos !" } },
    { letter: "X", emoji: "🩻", item: { es: "Rayos X", ca: "Raigs X", en: "X-rays", cs: "Rentgen (X)", fr: "Rayons X" },
      fact: { es: "Con rayos X, los científicos miran dentro de los fósiles sin romperlos.", ca: "Amb raigs X, els científics miren dins dels fòssils sense trencar-los.", en: "With X-rays, scientists look inside fossils without breaking them.", cs: "Rentgenem vědci nahlížejí dovnitř fosilií, aniž by je rozbili.", fr: "Avec les rayons X, les scientifiques regardent dans les fossiles sans les casser." } },
    { letter: "Y", emoji: "🐉", item: { es: "Yangchuanosaurus", ca: "Yangchuanosaurus", en: "Yangchuanosaurus", cs: "Yangchuanosaurus", fr: "Yangchuanosaurus" },
      fact: { es: "Un gran cazador de China con un nombre casi imposible de decir.", ca: "Un gran caçador de la Xina amb un nom gairebé impossible de dir.", en: "A great hunter from China with an almost impossible name to say.", cs: "Velký lovec z Číny se jménem, které skoro nejde vyslovit.", fr: "Un grand chasseur de Chine au nom presque impossible à dire." } },
    { letter: "Z", emoji: "🤏", item: { es: "Zuniceratops", ca: "Zuniceratops", en: "Zuniceratops", cs: "Zuniceratops", fr: "Zuniceratops" },
      fact: { es: "Un ceratops pequeñito con dos cuernos, abuelo del Triceratops.", ca: "Un ceratops petitó amb dues banyes, avi del Triceratops.", en: "A tiny ceratops with two horns, a grandpa of the Triceratops.", cs: "Malinký ceratops se dvěma rohy, dědeček triceratopse.", fr: "Un tout petit cératops à deux cornes, un grand-père du Tricératops." } }
  ],

  /* ---------- FAMOSOS ---------- */
  famous: [
    { emoji: "🐚", year: "1811", color: "#8d6e63", name: { es: "Mary Anning", ca: "Mary Anning", en: "Mary Anning", cs: "Mary Anningová", fr: "Mary Anning" },
      achievement: { es: "De niña encontró fósiles marinos gigantes en la playa.", ca: "De petita va trobar fòssils marins gegants a la platja.", en: "As a girl she found giant sea fossils on the beach.", cs: "Už jako holčička našla na pláži obří mořské fosilie.", fr: "Petite fille, elle a trouvé des fossiles marins géants sur la plage." },
      quote: { es: "La playa esconde tesoros para quien mira despacio.", ca: "La platja amaga tresors per a qui mira a poc a poc.", en: "The beach hides treasures for those who look slowly.", cs: "Pláž skrývá poklady pro ty, kdo se dívají pomalu.", fr: "La plage cache des trésors pour qui regarde lentement." } },
    { emoji: "📖", year: "1842", color: "#5d4037", name: { es: "Richard Owen", ca: "Richard Owen", en: "Richard Owen", cs: "Richard Owen", fr: "Richard Owen" },
      achievement: { es: "Inventó la palabra 'dinosaurio'.", ca: "Va inventar la paraula 'dinosaure'.", en: "He invented the word 'dinosaur'.", cs: "Vymyslel slovo 'dinosaurus'.", fr: "Il a inventé le mot « dinosaure »." },
      quote: { es: "A las cosas asombrosas hay que ponerles nombre.", ca: "A les coses sorprenents cal posar-los nom.", en: "Amazing things deserve a name.", cs: "Úžasné věci si zaslouží jméno.", fr: "Les choses étonnantes méritent un nom." } },
    { emoji: "🏜️", year: "1922", color: "#ef6c00", name: { es: "Roy Chapman Andrews", ca: "Roy Chapman Andrews", en: "Roy Chapman Andrews", cs: "Roy Chapman Andrews", fr: "Roy Chapman Andrews" },
      achievement: { es: "Encontró los primeros nidos de huevos de dinosaurio en el desierto.", ca: "Va trobar els primers nius d'ous de dinosaure al desert.", en: "He found the first nests of dinosaur eggs in the desert.", cs: "Našel v poušti první hnízda dinosauřích vajec.", fr: "Il a trouvé les premiers nids d'œufs de dinosaures dans le désert." },
      quote: { es: "La aventura empieza donde acaba el camino.", ca: "L'aventura comença on s'acaba el camí.", en: "Adventure begins where the road ends.", cs: "Dobrodružství začíná tam, kde končí cesta.", fr: "L'aventure commence là où finit le chemin." } },
    { emoji: "🦶", year: "1978", color: "#33691e", name: { es: "Mary Leakey", ca: "Mary Leakey", en: "Mary Leakey", cs: "Mary Leakeyová", fr: "Mary Leakey" },
      achievement: { es: "Descubrió huellas antiquísimas que contaban cómo caminábamos.", ca: "Va descobrir petjades antiquíssimes que explicaven com caminàvem.", en: "She discovered ancient footprints that told how we used to walk.", cs: "Objevila prastaré stopy, které vyprávěly, jak jsme chodili.", fr: "Elle a découvert des empreintes très anciennes qui racontaient comment nous marchions." },
      quote: { es: "Las huellas cuentan historias sin palabras.", ca: "Les petjades expliquen històries sense paraules.", en: "Footprints tell stories without words.", cs: "Stopy vyprávějí příběhy beze slov.", fr: "Les empreintes racontent des histoires sans paroles." } },
    { emoji: "🥚", year: "1979", color: "#00838f", name: { es: "Jack Horner", ca: "Jack Horner", en: "Jack Horner", cs: "Jack Horner", fr: "Jack Horner" },
      achievement: { es: "Demostró que los dinosaurios cuidaban a sus bebés.", ca: "Va demostrar que els dinosaures cuidaven els seus nadons.", en: "He showed that dinosaurs took care of their babies.", cs: "Dokázal, že se dinosauři starali o svá mláďata.", fr: "Il a montré que les dinosaures s'occupaient de leurs bébés." },
      quote: { es: "Hasta el T-Rex fue un bebé alguna vez.", ca: "Fins i tot el T-Rex va ser un nadó alguna vegada.", en: "Even the T-Rex was a baby once.", cs: "I T-Rex byl jednou mimino.", fr: "Même le T-Rex a été un bébé un jour." } },
    { emoji: "🦖", year: "1990", color: "#c62828", name: { es: "Sue Hendrickson", ca: "Sue Hendrickson", en: "Sue Hendrickson", cs: "Sue Hendricksonová", fr: "Sue Hendrickson" },
      achievement: { es: "Encontró el T-Rex más completo del mundo. Lo llamaron Sue, como ella.", ca: "Va trobar el T-Rex més complet del món. Li van dir Sue, com ella.", en: "She found the most complete T-Rex in the world. They named it Sue, after her.", cs: "Našla nejúplnějšího T-Rexe na světě. Pojmenovali ho Sue, po ní.", fr: "Elle a trouvé le T-Rex le plus complet du monde. On l'a appelé Sue, comme elle." },
      quote: { es: "Nunca dejes de mirar el suelo: ahí duermen los gigantes.", ca: "No deixis mai de mirar el terra: allà hi dormen els gegants.", en: "Never stop looking at the ground: giants sleep there.", cs: "Nikdy se nepřestávej dívat na zem: spí tam obři.", fr: "Ne cesse jamais de regarder le sol : les géants y dorment." } },
    { emoji: "🇦🇷", year: "1958", color: "#5e35b1", name: { es: "José Bonaparte", ca: "José Bonaparte", en: "José Bonaparte", cs: "José Bonaparte", fr: "José Bonaparte" },
      achievement: { es: "Descubrió los dinosaurios gigantes de Sudamérica.", ca: "Va descobrir els dinosaures gegants de Sud-amèrica.", en: "He discovered the giant dinosaurs of South America.", cs: "Objevil obří dinosaury Jižní Ameriky.", fr: "Il a découvert les dinosaures géants d'Amérique du Sud." },
      quote: { es: "Cada país guarda sus propios gigantes dormidos.", ca: "Cada país guarda els seus propis gegants adormits.", en: "Every country keeps its own sleeping giants.", cs: "Každá země ukrývá své vlastní spící obry.", fr: "Chaque pays garde ses propres géants endormis." } },
    { emoji: "🎩", year: "1902", color: "#455a64", name: { es: "Barnum Brown", ca: "Barnum Brown", en: "Barnum Brown", cs: "Barnum Brown", fr: "Barnum Brown" },
      achievement: { es: "Encontró el primer esqueleto de T-Rex de la historia.", ca: "Va trobar el primer esquelet de T-Rex de la història.", en: "He found the first T-Rex skeleton in history.", cs: "Našel první kostru T-Rexe v historii.", fr: "Il a trouvé le premier squelette de T-Rex de l'histoire." },
      quote: { es: "Buscad donde nadie ha mirado todavía.", ca: "Busqueu on ningú no ha mirat encara.", en: "Search where nobody has looked yet.", cs: "Hledejte tam, kam se ještě nikdo nepodíval.", fr: "Cherchez là où personne n'a encore regardé." } }
  ],

  childDream: {
    girl: { es: "Paleontóloga descubridora de gigantes", ca: "Paleontòloga descobridora de gegants", en: "Palaeontologist who discovers giants", cs: "Paleontoložka objevující obry", fr: "Paléontologue découvreuse de géants" },
    boy: { es: "Paleontólogo descubridor de gigantes", ca: "Paleontòleg descobridor de gegants", en: "Palaeontologist who discovers giants", cs: "Paleontolog objevující obry", fr: "Paléontologue découvreur de géants" },
    kid: { es: "Peque que descubre gigantes dormidos", ca: "Menut que descobreix gegants adormits", en: "Kid who discovers sleeping giants", cs: "Dítě, které objevuje spící obry", fr: "Enfant qui découvre des géants endormis" }
  },
  childQuote: { es: "Cuando sea mayor encontraré un dinosaurio nuevo. ¡Y le pondré nombre!", ca: "Quan sigui gran trobaré un dinosaure nou. I li posaré nom!", en: "When I grow up I will find a brand new dinosaur. And I will name it!", cs: "Až vyrostu, najdu úplně nového dinosaura. A dám mu jméno!", fr: "Quand je serai grand, je trouverai un tout nouveau dinosaure. Et je lui donnerai un nom !" },

  /* ---------- MATES ---------- */
  mathEmojis: ["🦖", "🦕", "🥚", "🦴", "🌋", "🐾"],

  /* ---------- CONSTRUCTOR: la máquina del tiempo ---------- */
  builder: {
    travel: true,
    title: { es: "¡Construye tu máquina del tiempo!", ca: "Construeix la teva màquina del temps!", en: "Build your own time machine!", cs: "Postav si stroj času!", fr: "Construis ta machine à voyager dans le temps !" },
    thing: { es: "máquina", ca: "màquina", en: "machine", cs: "stroj", fr: "machine" },
    parts: [
      { id: "body", label: { es: "Color de la cabina", ca: "Color de la cabina", en: "Cabin colour", cs: "Barva kabiny", fr: "Couleur de la cabine" },
        options: [{ id: "bronze", v: "#a1887f" }, { id: "green", v: "#66bb6a" }, { id: "blue", v: "#42a5f5" }, { id: "purple", v: "#ab47bc" }] },
      { id: "nose", label: { es: "La cúpula", ca: "La cúpula", en: "The dome", cs: "Kopule", fr: "Le dôme" },
        options: [{ id: "round", v: "round", icon: "⚪" }, { id: "cone", v: "cone", icon: "🔺" }, { id: "star", v: "star", icon: "⭐" }] },
      { id: "window", label: { es: "El reloj del tiempo", ca: "El rellotge del temps", en: "The time clock", cs: "Hodiny času", fr: "L'horloge du temps" },
        options: [{ id: "one", v: "one", icon: "🕐" }, { id: "two", v: "two", icon: "🕐🕑" }, { id: "heart", v: "heart", icon: "💗" }] },
      { id: "flame", label: { es: "El rayo temporal", ca: "El llamp temporal", en: "The time beam", cs: "Časový paprsek", fr: "Le rayon temporel" },
        options: [{ id: "orange", v: "#ff9800" }, { id: "blue", v: "#29b6f6" }, { id: "rainbow", v: "rainbow", icon: "🌈" }] }
    ],
    svg(sel) {
      const body = sel.body || "#a1887f";
      const beam = sel.flame === "rainbow" ? "url(#tmR)" : (sel.flame || "#ff9800");
      let dome = `<path d="M30 42 Q50 16 70 42 Z" fill="${body}" stroke="#fff" stroke-width="1.5" opacity=".9"/>`;
      if (sel.nose === "cone") dome = `<path d="M32 42 L50 14 L68 42 Z" fill="${body}" stroke="#fff" stroke-width="1.5"/>`;
      if (sel.nose === "star") dome = `<path d="M30 42 Q50 18 70 42 Z" fill="${body}" stroke="#fff" stroke-width="1.5"/><text x="44" y="34" font-size="12">⭐</text>`;
      let clock = `<circle cx="50" cy="58" r="10" fill="#fff8e1" stroke="#5d4037" stroke-width="2"/><line x1="50" y1="58" x2="50" y2="51" stroke="#5d4037" stroke-width="2"/><line x1="50" y1="58" x2="56" y2="58" stroke="#5d4037" stroke-width="2"/>`;
      if (sel.window === "two") clock = `<circle cx="43" cy="58" r="6" fill="#fff8e1" stroke="#5d4037" stroke-width="2"/><circle cx="58" cy="58" r="6" fill="#fff8e1" stroke="#5d4037" stroke-width="2"/><line x1="43" y1="58" x2="43" y2="54" stroke="#5d4037" stroke-width="1.6"/><line x1="58" y1="58" x2="62" y2="58" stroke="#5d4037" stroke-width="1.6"/>`;
      if (sel.window === "heart") clock = `<path d="M50 52 C44 46 36 52 42 60 L50 68 L58 60 C64 52 56 46 50 52 Z" fill="#f8bbd0" stroke="#5d4037" stroke-width="2"/>`;
      return `<svg viewBox="0 0 100 110" width="190" height="210">
        <defs><linearGradient id="tmR" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#ff5252"/><stop offset="34%" stop-color="#ffd740"/><stop offset="67%" stop-color="#69f0ae"/><stop offset="100%" stop-color="#40c4ff"/></linearGradient></defs>
        <ellipse cx="50" cy="94" rx="34" ry="7" fill="${beam}" opacity=".8"><animate attributeName="rx" values="34;28;34" dur="1s" repeatCount="indefinite"/></ellipse>
        ${dome}
        <rect x="30" y="42" width="40" height="36" rx="8" fill="${body}" stroke="#fff" stroke-width="1.5"/>
        ${clock}
        <circle cx="36" cy="46" r="2.4" fill="#ffd740"><animate attributeName="opacity" values="1;.3;1" dur=".8s" repeatCount="indefinite"/></circle>
        <circle cx="64" cy="46" r="2.4" fill="#69f0ae"><animate attributeName="opacity" values=".3;1;.3" dur=".8s" repeatCount="indefinite"/></circle>
        <rect x="26" y="70" width="8" height="16" rx="3" fill="#5d4037"/>
        <rect x="66" y="70" width="8" height="16" rx="3" fill="#5d4037"/>
      </svg>`;
    }
  }
};
