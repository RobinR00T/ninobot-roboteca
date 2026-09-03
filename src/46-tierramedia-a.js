"use strict";
/* ============================================================
   Contenido de TIERRA MEDIA (parte A): quiz, alfabeto,
   personajes, mates y constructor (la forja).
   Versión amable: aventura y valentía, nada de terror.
   ============================================================ */

THEMES.tierramedia.ready = true;
THEMES.tierramedia.content = {

  statusPlace: { es: "Conectado desde Rivendel", ca: "Connectat des de Rivendel", en: "Connected from Rivendell", cs: "Připojeno z Roklinky", fr: "Connecté depuis Fondcombe" },
  welcome: { es: "¡Bienvenida a la Tierra Media, {name}! Los elfos han preparado el desayuno y los ponis ya están ensillados. ¡La aventura empieza!", ca: "Benvinguda a la Terra Mitjana, {name}! Els elfs han preparat l'esmorzar i els ponis ja estan ensellats. L'aventura comença!", en: "Welcome to Middle-earth, {name}! The elves have made breakfast and the ponies are saddled up. The adventure begins!", cs: "Vítej ve Středozemi, {name}! Elfové připravili snídani a poníci jsou osedlaní. Dobrodružství začíná!", fr: "Bienvenue en Terre du Milieu, {name} ! Les elfes ont préparé le petit-déjeuner et les poneys sont sellés. L'aventure commence !" },

  /* ---------- QUIZ ---------- */
  quiz: [
    { emoji: "🧙",
      q: { es: "¿Quién es el mago del sombrero gris y la barba larga?", ca: "Qui és el mag del barret gris i la barba llarga?", en: "Who is the wizard with the grey hat and the long beard?", cs: "Kdo je ten čaroděj s šedým kloboukem a dlouhým vousem?", fr: "Qui est le magicien au chapeau gris et à la longue barbe ?" },
      options: [
        { es: "Frodo", ca: "Frodo", en: "Frodo", cs: "Frodo", fr: "Frodon" },
        { es: "Gandalf", ca: "Gandalf", en: "Gandalf", cs: "Gandalf", fr: "Gandalf" },
        { es: "Gimli", ca: "Gimli", en: "Gimli", cs: "Gimli", fr: "Gimli" },
        { es: "Sam", ca: "Sam", en: "Sam", cs: "Sam", fr: "Sam" }],
      answer: 1,
      explanation: { es: "Gandalf, el mago amigo de los hobbits. Sus fuegos artificiales son los mejores de la Tierra Media.", ca: "Gandalf, el mag amic dels hòbbits. Els seus focs artificials són els millors de la Terra Mitjana.", en: "Gandalf, the wizard friend of the hobbits. His fireworks are the best in Middle-earth.", cs: "Gandalf, čaroděj a kamarád hobitů. Jeho ohňostroje jsou nejlepší ve Středozemi.", fr: "Gandalf, le magicien ami des hobbits. Ses feux d'artifice sont les meilleurs de la Terre du Milieu." } },
    { emoji: "🦶",
      q: { es: "¿Cómo son los hobbits?", ca: "Com són els hòbbits?", en: "What are hobbits like?", cs: "Jací jsou hobiti?", fr: "Comment sont les hobbits ?" },
      options: [
        { es: "Gigantes de piedra", ca: "Gegants de pedra", en: "Stone giants", cs: "Kamenní obři", fr: "Des géants de pierre" },
        { es: "Pequeños, con los pies peludos y muy comilones", ca: "Petits, amb els peus peluts i molt menjadors", en: "Small, with hairy feet and very fond of food", cs: "Malí, s chlupatýma nohama a rádi jedí", fr: "Petits, avec des pieds poilus et très gourmands" },
        { es: "Dragones pequeñitos", ca: "Dracs petitons", en: "Tiny dragons", cs: "Malincí draci", fr: "De tout petits dragons" },
        { es: "Peces parlantes", ca: "Peixos parladors", en: "Talking fish", cs: "Mluvící ryby", fr: "Des poissons parlants" }],
      answer: 1,
      explanation: { es: "Pequeños, alegres y valientes cuando hace falta. Y nunca dicen que no a una buena merienda.", ca: "Petits, alegres i valents quan cal. I mai no diuen que no a un bon berenar.", en: "Small, cheerful and brave when it matters. And they never say no to a good snack.", cs: "Malí, veselí a stateční, když je potřeba. A nikdy neodmítnou dobrou svačinu.", fr: "Petits, joyeux et courageux quand il le faut. Et ils ne disent jamais non à un bon goûter." } },
    { emoji: "🏡",
      q: { es: "¿Dónde viven los hobbits?", ca: "On viuen els hòbbits?", en: "Where do hobbits live?", cs: "Kde bydlí hobiti?", fr: "Où vivent les hobbits ?" },
      options: [
        { es: "En la Comarca", ca: "A la Comarca", en: "In the Shire", cs: "V Kraji", fr: "Dans la Comté" },
        { es: "En Mordor", ca: "A Mordor", en: "In Mordor", cs: "V Mordoru", fr: "En Mordor" },
        { es: "En la Luna", ca: "A la Lluna", en: "On the Moon", cs: "Na Měsíci", fr: "Sur la Lune" },
        { es: "En el fondo del mar", ca: "Al fons del mar", en: "At the bottom of the sea", cs: "Na dně moře", fr: "Au fond de la mer" }],
      answer: 0,
      explanation: { es: "En la Comarca, un lugar verde y tranquilo con casitas redondas excavadas en las colinas.", ca: "A la Comarca, un lloc verd i tranquil amb casetes rodones excavades als turons.", en: "In the Shire, a green and peaceful place with round little homes dug into the hills.", cs: "V Kraji, zeleném a klidném místě s kulatými domečky vyhloubenými do kopců.", fr: "Dans la Comté, un endroit vert et tranquille avec des petites maisons rondes creusées dans les collines." } },
    { emoji: "🤝",
      q: { es: "¿Quién es el mejor amigo de Frodo, el que nunca lo abandona?", ca: "Qui és el millor amic de Frodo, el que mai no l'abandona?", en: "Who is Frodo's best friend, the one who never leaves him?", cs: "Kdo je Frodův nejlepší kamarád, který ho nikdy neopustí?", fr: "Qui est le meilleur ami de Frodon, celui qui ne l'abandonne jamais ?" },
      options: [
        { es: "Sam", ca: "Sam", en: "Sam", cs: "Sam", fr: "Sam" },
        { es: "Un dragón", ca: "Un drac", en: "A dragon", cs: "Drak", fr: "Un dragon" },
        { es: "Un troll", ca: "Un trol", en: "A troll", cs: "Trol", fr: "Un troll" },
        { es: "Nadie", ca: "Ningú", en: "Nobody", cs: "Nikdo", fr: "Personne" }],
      answer: 0,
      explanation: { es: "Sam, el jardinero. Los amigos de verdad caminan contigo hasta el final del camino.", ca: "Sam, el jardiner. Els amics de debò caminen amb tu fins al final del camí.", en: "Sam, the gardener. True friends walk with you to the very end of the road.", cs: "Sam, zahradník. Opravdoví kamarádi jdou s tebou až na konec cesty.", fr: "Sam, le jardinier. Les vrais amis marchent avec toi jusqu'au bout du chemin." } },
    { emoji: "🏹",
      q: { es: "¿Qué usa el elfo Legolas?", ca: "Què fa servir l'elf Legolas?", en: "What does Legolas the elf use?", cs: "Co používá elf Legolas?", fr: "Qu'utilise l'elfe Legolas ?" },
      options: [
        { es: "Una sartén", ca: "Una paella", en: "A frying pan", cs: "Pánvičku", fr: "Une poêle" },
        { es: "Un arco y flechas", ca: "Un arc i fletxes", en: "A bow and arrows", cs: "Luk a šípy", fr: "Un arc et des flèches" },
        { es: "Un paraguas", ca: "Un paraigua", en: "An umbrella", cs: "Deštník", fr: "Un parapluie" },
        { es: "Un tenedor gigante", ca: "Una forquilla gegant", en: "A giant fork", cs: "Obří vidličku", fr: "Une fourchette géante" }],
      answer: 1,
      explanation: { es: "Un arco élfico. Los elfos ven lejísimos y nunca fallan. ¡Y caminan sobre la nieve sin hundirse!", ca: "Un arc èlfic. Els elfs hi veuen lluníssim i mai no fallen. I caminen sobre la neu sense enfonsar-se!", en: "An elven bow. Elves see incredibly far and never miss. And they walk on snow without sinking!", cs: "Elfský luk. Elfové vidí strašně daleko a nikdy neminou. A chodí po sněhu, aniž by se bořili!", fr: "Un arc elfique. Les elfes voient très loin et ne ratent jamais. Et ils marchent sur la neige sans s'enfoncer !" } },
    { emoji: "⛏️",
      q: { es: "¿Qué le encanta al enano Gimli?", ca: "Què li encanta al nan Gimli?", en: "What does Gimli the dwarf love?", cs: "Co miluje trpaslík Gimli?", fr: "Qu'est-ce que Gimli le nain adore ?" },
      options: [
        { es: "Las montañas y su hacha", ca: "Les muntanyes i la seva destral", en: "Mountains and his axe", cs: "Hory a svou sekeru", fr: "Les montagnes et sa hache" },
        { es: "Nadar en el mar", ca: "Nedar al mar", en: "Swimming in the sea", cs: "Plavání v moři", fr: "Nager dans la mer" },
        { es: "Volar en globo", ca: "Volar en globus", en: "Flying in a balloon", cs: "Létání balonem", fr: "Voler en montgolfière" },
        { es: "Dormir en los árboles", ca: "Dormir als arbres", en: "Sleeping in trees", cs: "Spaní na stromech", fr: "Dormir dans les arbres" }],
      answer: 0,
      explanation: { es: "Los enanos aman las montañas, las cuevas con cristales y las hachas bien afiladas. ¡Y presumir de barba!", ca: "Els nans estimen les muntanyes, les coves amb cristalls i les destrals ben esmolades. I presumir de barba!", en: "Dwarves love mountains, caves full of crystals and well-sharpened axes. And showing off their beards!", cs: "Trpaslíci milují hory, jeskyně plné krystalů a dobře nabroušené sekery. A chlubení se vousy!", fr: "Les nains aiment les montagnes, les grottes pleines de cristaux et les haches bien aiguisées. Et frimer avec leur barbe !" } },
    { emoji: "👑",
      q: { es: "¿Quién es la reina elfa del bosque dorado?", ca: "Qui és la reina elfa del bosc daurat?", en: "Who is the elf queen of the golden forest?", cs: "Kdo je elfí královna zlatého lesa?", fr: "Qui est la reine elfe de la forêt dorée ?" },
      options: [
        { es: "Éowyn", ca: "Éowyn", en: "Éowyn", cs: "Éowyn", fr: "Éowyn" },
        { es: "Galadriel", ca: "Galadriel", en: "Galadriel", cs: "Galadriel", fr: "Galadriel" },
        { es: "Una dragona", ca: "Una draga", en: "A dragon lady", cs: "Dračice", fr: "Une dragonne" },
        { es: "La Luna", ca: "La Lluna", en: "The Moon", cs: "Luna", fr: "La Lune" }],
      answer: 1,
      explanation: { es: "Galadriel, la señora de Lothlórien, el bosque de hojas doradas. Es sabia, brillante y muy antigua.", ca: "Galadriel, la senyora de Lothlórien, el bosc de fulles daurades. És sàvia, brillant i molt antiga.", en: "Galadriel, the lady of Lothlórien, the forest of golden leaves. She is wise, bright and very ancient.", cs: "Galadriel, paní Lothlórienu, lesa se zlatými listy. Je moudrá, zářivá a prastará.", fr: "Galadriel, la dame de la Lothlórien, la forêt aux feuilles dorées. Elle est sage, lumineuse et très ancienne." } },
    { emoji: "🍽️",
      q: { es: "¿Cuántas comidas hace un hobbit al día, si puede?", ca: "Quants àpats fa un hòbbit al dia, si pot?", en: "How many meals does a hobbit eat a day, if it can?", cs: "Kolik jídel denně sní hobit, když může?", fr: "Combien de repas fait un hobbit par jour, s'il peut ?" },
      options: [
        { es: "Una", ca: "Un", en: "One", cs: "Jedno", fr: "Un" },
        { es: "Dos", ca: "Dos", en: "Two", cs: "Dvě", fr: "Deux" },
        { es: "¡Siete!", ca: "Set!", en: "Seven!", cs: "Sedm!", fr: "Sept !" },
        { es: "Ninguna", ca: "Cap", en: "None", cs: "Žádné", fr: "Aucun" }],
      answer: 2,
      explanation: { es: "Desayuno, segundo desayuno, almuerzo, comida, merienda, cena y resopón. ¡Campeones de la mesa!", ca: "Esmorzar, segon esmorzar, vermut, dinar, berenar, sopar i ressopó. Campions de la taula!", en: "Breakfast, second breakfast, elevenses, lunch, tea, dinner and supper. Champions of the table!", cs: "Snídaně, druhá snídaně, přesnídávka, oběd, svačina, večeře a druhá večeře. Šampioni u stolu!", fr: "Petit-déjeuner, deuxième petit-déjeuner, encas, déjeuner, goûter, dîner et souper. Les champions de la table !" } },
    { emoji: "💍",
      q: { es: "¿Qué hay que hacer con el anillo mágico que causa problemas?", ca: "Què cal fer amb l'anell màgic que causa problemes?", en: "What must be done with the magic ring that causes trouble?", cs: "Co je třeba udělat s kouzelným prstenem, který dělá potíže?", fr: "Que faut-il faire de l'anneau magique qui cause des ennuis ?" },
      options: [
        { es: "Ponérselo todos los días", ca: "Posar-se'l cada dia", en: "Wear it every day", cs: "Nosit ho každý den", fr: "Le porter tous les jours" },
        { es: "Llevarlo a la montaña y deshacerse de él", ca: "Portar-lo a la muntanya i desfer-se'n", en: "Take it to the mountain and get rid of it", cs: "Odnést ho na horu a zbavit se ho", fr: "L'apporter à la montagne et s'en débarrasser" },
        { es: "Venderlo en el mercado", ca: "Vendre'l al mercat", en: "Sell it at the market", cs: "Prodat ho na trhu", fr: "Le vendre au marché" },
        { es: "Comérselo", ca: "Menjar-se'l", en: "Eat it", cs: "Sníst ho", fr: "Le manger" }],
      answer: 1,
      explanation: { es: "Aunque brille mucho, hay cosas que es mejor soltar. Frodo fue valiente y lo llevó hasta el final.", ca: "Encara que brilli molt, hi ha coses que és millor deixar anar. Frodo va ser valent i el va portar fins al final.", en: "Even if it shines brightly, some things are better let go. Frodo was brave and carried it to the very end.", cs: "I když se hodně třpytí, některých věcí je lepší se pustit. Frodo byl statečný a donesl ho až na konec.", fr: "Même s'il brille beaucoup, il y a des choses qu'il vaut mieux lâcher. Frodon a été courageux et l'a porté jusqu'au bout." } },
    { emoji: "🌄",
      q: { es: "¿Qué es lo más importante, según los héroes de la Tierra Media?", ca: "Què és el més important, segons els herois de la Terra Mitjana?", en: "What matters most, according to the heroes of Middle-earth?", cs: "Co je nejdůležitější podle hrdinů Středozemě?", fr: "Qu'est-ce qui compte le plus, selon les héros de la Terre du Milieu ?" },
      options: [
        { es: "Ser el más grande", ca: "Ser el més gran", en: "Being the biggest", cs: "Být největší", fr: "Être le plus grand" },
        { es: "Tener mucho oro", ca: "Tenir molt or", en: "Having lots of gold", cs: "Mít hodně zlata", fr: "Avoir beaucoup d'or" },
        { es: "La amistad y el valor, aunque seas pequeño", ca: "L'amistat i el valor, encara que siguis petit", en: "Friendship and courage, even if you are small", cs: "Přátelství a odvaha, i když jsi malý", fr: "L'amitié et le courage, même si tu es petit" },
        { es: "Correr muy rápido", ca: "Córrer molt ràpid", en: "Running very fast", cs: "Rychle běhat", fr: "Courir très vite" }],
      answer: 2,
      explanation: { es: "Los más pequeños salvaron la Tierra Media. Hasta los pasos pequeños pueden cambiar el mundo.", ca: "Els més petits van salvar la Terra Mitjana. Fins i tot els passos petits poden canviar el món.", en: "The smallest ones saved Middle-earth. Even little steps can change the world.", cs: "Ti nejmenší zachránili Středozem. I malé kroky mohou změnit svět.", fr: "Les plus petits ont sauvé la Terre du Milieu. Même les petits pas peuvent changer le monde." } },
    { emoji: "🐉",
      q: { es: "¿Sobre qué duerme el dragón Smaug dentro de la montaña?", ca: "Sobre què dorm el drac Smaug dins de la muntanya?", en: "What does Smaug the dragon sleep on inside the mountain?", cs: "Na čem spí drak Šmak uvnitř hory?", fr: "Sur quoi dort le dragon Smaug dans la montagne ?" },
      options: [
        { es: "Sobre una cama de plumas", ca: "Sobre un llit de plomes", en: "On a feather bed", cs: "Na péřové posteli", fr: "Sur un lit de plumes" },
        { es: "Sobre la nieve", ca: "Sobre la neu", en: "On the snow", cs: "Na sněhu", fr: "Sur la neige" },
        { es: "Sobre un montón enorme de oro y tesoros", ca: "Sobre un munt enorme d'or i tresors", en: "On a huge pile of gold and treasure", cs: "Na obrovské hromadě zlata a pokladů", fr: "Sur un énorme tas d'or et de trésors" },
        { es: "Sobre una alfombra de flores", ca: "Sobre una catifa de flors", en: "On a carpet of flowers", cs: "Na koberci z květin", fr: "Sur un tapis de fleurs" }],
      answer: 2,
      explanation: { es: "Smaug duerme sobre el tesoro de los enanos, y de tanto dormir ahí las monedas se le quedan pegadas a la barriga.", ca: "Smaug dorm sobre el tresor dels nans, i de tant dormir-hi les monedes se li queden enganxades a la panxa.", en: "Smaug sleeps on the dwarves' treasure, and from sleeping there so long the coins stick to his belly.", cs: "Šmak spí na pokladu trpaslíků a z toho dlouhého spaní se mu mince přilepily na břicho.", fr: "Smaug dort sur le trésor des nains, et à force d'y dormir les pièces restent collées à son ventre." } },
    { emoji: "❓",
      q: { es: "¿A qué juegan Bilbo y Gollum en la cueva oscura?", ca: "A què juguen en Bilbo i en Gollum a la cova fosca?", en: "What do Bilbo and Gollum play in the dark cave?", cs: "Co hrají Bilbo a Glum v temné jeskyni?", fr: "À quoi jouent Bilbon et Gollum dans la grotte sombre ?" },
      options: [
        { es: "A las adivinanzas", ca: "A les endevinalles", en: "Riddles", cs: "Hádanky", fr: "Aux devinettes" },
        { es: "Al escondite", ca: "A fet i amagar", en: "Hide and seek", cs: "Schovávanou", fr: "À cache-cache" },
        { es: "A las cartas", ca: "A les cartes", en: "Cards", cs: "Karty", fr: "Aux cartes" },
        { es: "Al fútbol", ca: "Al futbol", en: "Football", cs: "Fotbal", fr: "Au football" }],
      answer: 0,
      explanation: { es: "Juegan a las adivinanzas: quien acierta, gana. Bilbo ganó usando la cabeza, no la fuerza.", ca: "Juguen a les endevinalles: qui l'encerta, guanya. En Bilbo va guanyar fent servir el cap, no la força.", en: "They play a game of riddles: whoever guesses right wins. Bilbo won by using his head, not his strength.", cs: "Hrají hru na hádanky: kdo uhodne, vyhrává. Bilbo vyhrál hlavou, ne silou.", fr: "Ils jouent aux devinettes : celui qui devine gagne. Bilbon a gagné avec sa tête, pas avec ses muscles." } },
    { emoji: "🌳",
      q: { es: "¿Qué son los ents?", ca: "Què són els ents?", en: "What are the Ents?", cs: "Kdo jsou enti?", fr: "Que sont les Ents ?" },
      options: [
        { es: "Peces voladores", ca: "Peixos voladors", en: "Flying fish", cs: "Létající ryby", fr: "Des poissons volants" },
        { es: "Setas gigantes", ca: "Bolets gegants", en: "Giant mushrooms", cs: "Obří houby", fr: "Des champignons géants" },
        { es: "Casas de madera", ca: "Cases de fusta", en: "Wooden houses", cs: "Dřevěné domy", fr: "Des maisons en bois" },
        { es: "Árboles pastores que caminan y hablan", ca: "Arbres pastors que caminen i parlen", en: "Tree shepherds that walk and talk", cs: "Pastýři stromů, kteří chodí a mluví", fr: "Des bergers des arbres qui marchent et parlent" }],
      answer: 3,
      explanation: { es: "Los ents son los pastores de los árboles, altos como torres y muy pacientes: tardan horas en decir buenos días.", ca: "Els ents són els pastors dels arbres, alts com torres i molt pacients: triguen hores a dir bon dia.", en: "Ents are the shepherds of the trees, tall as towers and very patient: it takes them hours to say good morning.", cs: "Enti jsou pastýři stromů, vysocí jako věže a hrozně trpěliví: říct dobré ráno jim trvá hodiny.", fr: "Les Ents sont les bergers des arbres, hauts comme des tours et très patients : il leur faut des heures pour dire bonjour." } },
    { emoji: "🦅",
      q: { es: "¿Qué animales gigantes ayudan a Bilbo y a Gandalf desde el cielo?", ca: "Quins animals gegants ajuden en Bilbo i en Gandalf des del cel?", en: "Which giant animals help Bilbo and Gandalf from the sky?", cs: "Která obří zvířata pomáhají Bilbovi a Gandalfovi z nebe?", fr: "Quels animaux géants aident Bilbon et Gandalf depuis le ciel ?" },
      options: [
        { es: "Los conejos", ca: "Els conills", en: "Rabbits", cs: "Králíci", fr: "Les lapins" },
        { es: "Las águilas gigantes", ca: "Les àguiles gegants", en: "Giant eagles", cs: "Obří orli", fr: "Les aigles géants" },
        { es: "Las mariposas", ca: "Les papallones", en: "Butterflies", cs: "Motýli", fr: "Les papillons" },
        { es: "Los patos", ca: "Els ànecs", en: "Ducks", cs: "Kachny", fr: "Les canards" }],
      answer: 1,
      explanation: { es: "Las grandes águilas llegan volando y los rescatan cuando ya no pueden más. ¡Amigas de plumas enormes!", ca: "Les grans àguiles arriben volant i els rescaten quan ja no poden més. Amigues de plomes enormes!", en: "The great eagles fly in and rescue them when they need it most. Friends with enormous feathers!", cs: "Velcí orli pro ně přiletí a zachrání je, když už nemůžou dál. Kamarádi s obrovskými křídly!", fr: "Les grands aigles arrivent en volant et les secourent quand ils n'en peuvent plus. Des amis aux plumes énormes !" } },
    { emoji: "🎂",
      q: { es: "¿Cuántos años cumple Bilbo en su gran fiesta de cumpleaños?", ca: "Quants anys fa en Bilbo a la seva gran festa d'aniversari?", en: "How old is Bilbo at his big birthday party?", cs: "Kolik let slaví Bilbo na své velké narozeninové oslavě?", fr: "Quel âge fête Bilbon à sa grande fête d'anniversaire ?" },
      options: [
        { es: "11", ca: "11", en: "11", cs: "11", fr: "11" },
        { es: "50", ca: "50", en: "50", cs: "50", fr: "50" },
        { es: "111", ca: "111", en: "111", cs: "111", fr: "111" },
        { es: "1000", ca: "1000", en: "1000", cs: "1000", fr: "1000" }],
      answer: 2,
      explanation: { es: "¡111 años! Lo celebró con una fiesta enorme, tarta para todos y los fuegos artificiales de Gandalf.", ca: "111 anys! Ho va celebrar amb una festa enorme, pastís per a tothom i els focs artificials de Gandalf.", en: "111 years old! He celebrated with a huge party, cake for everyone and Gandalf's fireworks.", cs: "111 let! Oslavil to obrovskou hostinou, dortem pro všechny a Gandalfovým ohňostrojem.", fr: "111 ans ! Il a fêté ça avec une fête énorme, du gâteau pour tout le monde et les feux d'artifice de Gandalf." } }
  ],

  /* ---------- ALFABETO ---------- */
  alphabet: [
    { letter: "A", emoji: "🗡️", item: { es: "Aragorn", ca: "Aragorn", en: "Aragorn", cs: "Aragorn", fr: "Aragorn" },
      fact: { es: "Un explorador valiente que resultó ser rey. No hace falta corona para ser noble.", ca: "Un explorador valent que va resultar ser rei. No cal corona per ser noble.", en: "A brave ranger who turned out to be a king. You do not need a crown to be noble.", cs: "Statečný hraničář, ze kterého se vyklubal král. Ke vznešenosti nepotřebuješ korunu.", fr: "Un explorateur courageux qui s'est révélé roi. Pas besoin de couronne pour être noble." } },
    { letter: "B", emoji: "🎂", item: { es: "Bilbo", ca: "Bilbo", en: "Bilbo", cs: "Bilbo", fr: "Bilbon" },
      fact: { es: "El hobbit que salió de casa sin pañuelo y volvió con mil historias.", ca: "El hòbbit que va sortir de casa sense mocador i va tornar amb mil històries.", en: "The hobbit who left home without a handkerchief and came back with a thousand stories.", cs: "Hobit, který odešel z domova bez kapesníku a vrátil se s tisícem příběhů.", fr: "Le hobbit parti de chez lui sans mouchoir et revenu avec mille histoires." } },
    { letter: "C", emoji: "🏡", item: { es: "Comarca", ca: "Comarca", en: "Cloak", cs: "Cesta", fr: "Comté" },
      fact: { es: "El hogar verde de los hobbits, con casitas redondas en las colinas.", ca: "La llar verda dels hòbbits, amb casetes rodones als turons.", en: "An elven cloak makes you almost invisible among the trees.", cs: "Cesta tam a zase zpátky: tak vypadá každé dobré dobrodružství.", fr: "Le foyer vert des hobbits, avec des petites maisons rondes dans les collines." } },
    { letter: "D", emoji: "🐉", item: { es: "Dragón", ca: "Drac", en: "Dragon", cs: "Drak", fr: "Dragon" },
      fact: { es: "Los dragones duermen sobre montañas de oro. Y roncan fuego.", ca: "Els dracs dormen sobre muntanyes d'or. I ronquen foc.", en: "Dragons sleep on mountains of gold. And they snore fire.", cs: "Draci spí na horách zlata. A chrápou oheň.", fr: "Les dragons dorment sur des montagnes d'or. Et ils ronflent du feu." } },
    { letter: "E", emoji: "🧝", item: { es: "Elfo", ca: "Elf", en: "Elf", cs: "Elf", fr: "Elfe" },
      fact: { es: "Los elfos aman las estrellas, cantan precioso y no necesitan casi dormir.", ca: "Els elfs estimen les estrelles, canten preciós i gairebé no necessiten dormir.", en: "Elves love the stars, sing beautifully and hardly need to sleep.", cs: "Elfové milují hvězdy, krásně zpívají a skoro nepotřebují spát.", fr: "Les elfes aiment les étoiles, chantent merveilleusement et n'ont presque pas besoin de dormir." } },
    { letter: "F", emoji: "💍", item: { es: "Frodo", ca: "Frodo", en: "Frodo", cs: "Frodo", fr: "Frodon" },
      fact: { es: "El hobbit que llevó la carga más pesada siendo el más pequeño.", ca: "El hòbbit que va portar la càrrega més pesada sent el més petit.", en: "The hobbit who carried the heaviest load while being the smallest.", cs: "Hobit, který nesl nejtěžší břemeno, i když byl nejmenší.", fr: "Le hobbit qui a porté la charge la plus lourde en étant le plus petit." } },
    { letter: "G", emoji: "🧙", item: { es: "Gandalf", ca: "Gandalf", en: "Gandalf", cs: "Gandalf", fr: "Gandalf" },
      fact: { es: "Un mago nunca llega tarde: llega exactamente cuando se lo propone.", ca: "Un mag mai no arriba tard: arriba exactament quan s'ho proposa.", en: "A wizard is never late: he arrives precisely when he means to.", cs: "Čaroděj nikdy nechodí pozdě: přichází přesně tehdy, kdy chce.", fr: "Un magicien n'est jamais en retard : il arrive précisément quand il le veut." } },
    { letter: "H", emoji: "🦶", item: { es: "Hobbit", ca: "Hòbbit", en: "Hobbit", cs: "Hobit", fr: "Hobbit" },
      fact: { es: "Pequeños, de pies peludos y corazón enorme. Les encanta comer y reír.", ca: "Petits, de peus peluts i cor enorme. Els encanta menjar i riure.", en: "Small, hairy-footed and huge-hearted. They love eating and laughing.", cs: "Malí, s chlupatýma nohama a obrovským srdcem. Milují jídlo a smích.", fr: "Petits, aux pieds poilus et au cœur énorme. Ils adorent manger et rire." } },
    { letter: "I", emoji: "🗼", item: { es: "Isengard", ca: "Isengard", en: "Isengard", cs: "Isengard", fr: "Isengard" },
      fact: { es: "Una torre altísima rodeada de árboles... hasta que su mago dejó de cuidarlos. Los árboles se lo recordaron.", ca: "Una torre altíssima envoltada d'arbres... fins que el seu mag va deixar de cuidar-los. Els arbres li ho van recordar.", en: "A very tall tower surrounded by trees... until its wizard stopped caring for them. The trees reminded him.", cs: "Převysoká věž obklopená stromy... dokud se o ně její čaroděj přestal starat. Stromy mu to připomněly.", fr: "Une très haute tour entourée d'arbres... jusqu'à ce que son magicien cesse de s'en occuper. Les arbres le lui ont rappelé." } },
    { letter: "J", emoji: "🐎", item: { es: "Jinetes de Rohan", ca: "Joia", en: "Journey", cs: "Jeskyně", fr: "Jardin" },
      fact: { es: "Los jinetes de Rohan llegan al galope justo cuando más falta hacen.", ca: "Una joia pot ser bonica, però els amics valen més que totes les joies.", en: "Every great journey begins with a single small step out the door.", cs: "V jeskyních pod horami se třpytí krystaly jako hvězdy.", fr: "Sam est jardinier : il fait pousser des fleurs même après les tempêtes." } },
    { letter: "K", emoji: "🥾", item: { es: "Kilómetros", ca: "Kilòmetres", en: "King", cs: "Kůň", fr: "Kilomètres" },
      fact: { es: "Los hobbits caminaron miles de kilómetros paso a paso. Así se llega lejos.", ca: "Els hòbbits van caminar milers de kilòmetres pas a pas. Així s'arriba lluny.", en: "Aragorn the king healed people and kept his promises. That is what kings are for.", cs: "Koně z Rohanu jsou nejrychlejší a nejvěrnější ve Středozemi.", fr: "Les hobbits ont marché des milliers de kilomètres pas à pas. C'est comme ça qu'on va loin." } },
    { letter: "L", emoji: "🏹", item: { es: "Legolas", ca: "Legolas", en: "Legolas", cs: "Legolas", fr: "Legolas" },
      fact: { es: "El elfo arquero que camina sobre la nieve y cuenta orcos con su amigo Gimli.", ca: "L'elf arquer que camina sobre la neu i compta orcs amb el seu amic Gimli.", en: "The elf archer who walks on snow and plays counting games with his friend Gimli.", cs: "Elfí lučištník, který chodí po sněhu a hraje počítací hry se svým kamarádem Gimlim.", fr: "L'elfe archer qui marche sur la neige et fait des concours avec son ami Gimli." } },
    { letter: "M", emoji: "⛰️", item: { es: "Moria", ca: "Mòria", en: "Moria", cs: "Morie", fr: "Moria" },
      fact: { es: "Las minas gigantes de los enanos, con salones tan grandes como ciudades.", ca: "Les mines gegants dels nans, amb salons tan grans com ciutats.", en: "The giant mines of the dwarves, with halls as big as cities.", cs: "Obří doly trpaslíků se síněmi velkými jako města.", fr: "Les mines géantes des nains, avec des salles aussi grandes que des villes." } },
    { letter: "N", emoji: "🎵", item: { es: "Nana élfica", ca: "Nana èlfica", en: "Nap after lunch", cs: "Návrat krále", fr: "Nains" },
      fact: { es: "Las canciones de los elfos calman hasta a los ponis más nerviosos.", ca: "Les cançons dels elfs calmen fins i tot els ponis més nerviosos.", en: "Hobbits love a little nap after lunch. And after second lunch too.", cs: "Král se nakonec vrátil domů. Na dobré konce se vyplatí čekat.", fr: "Les nains creusent des royaumes sous les montagnes et adorent les cristaux." } },
    { letter: "O", emoji: "💪", item: { es: "Orcos", ca: "Orcs", en: "Orcs", cs: "Odvaha", fr: "Orques" },
      fact: { es: "Los gruñones de la Tierra Media. Se les vence con valentía, amigos y un buen plan.", ca: "Els rondinaires de la Terra Mitjana. Se'ls venç amb valentia, amics i un bon pla.", en: "The grumpy ones of Middle-earth. You beat them with courage, friends and a good plan.", cs: "Odvaha neznamená nebát se: znamená jít dál i se strachem.", fr: "Les grognons de la Terre du Milieu. On les bat avec du courage, des amis et un bon plan." } },
    { letter: "P", emoji: "🐴", item: { es: "Poni", ca: "Poni", en: "Pony", cs: "Poník", fr: "Poney" },
      fact: { es: "Bill el poni llevó las mochilas de todos sin quejarse ni una vez.", ca: "En Bill el poni va portar les motxilles de tothom sense queixar-se ni una vegada.", en: "Bill the pony carried everyone's bags without complaining even once.", cs: "Poník Bill nesl batohy všech a ani jednou si nepostěžoval.", fr: "Bill le poney a porté les sacs de tout le monde sans se plaindre une seule fois." } },
    { letter: "Q", emoji: "🧀", item: { es: "Queso de la Comarca", ca: "Queviures", en: "Quest", cs: "Quest (výprava)", fr: "Quête" },
      fact: { es: "En la Comarca hacen quesos tan buenos que los enanos cruzan montañas por ellos.", ca: "Els queviures d'un hòbbit: pa, formatge, pomes i alguna cosa més, per si de cas.", en: "A quest is a very important mission shared with friends.", cs: "Quest neboli výprava je moc důležitý úkol, který sdílíš s kamarády.", fr: "Une quête est une mission très importante qu'on partage avec ses amis." } },
    { letter: "R", emoji: "🏞️", item: { es: "Rivendel", ca: "Rivendel", en: "Rivendell", cs: "Roklinka", fr: "Rohan" },
      fact: { es: "La casa de los elfos entre cascadas. Quien llega cansado, allí descansa y sana.", ca: "La casa dels elfs entre cascades. Qui hi arriba cansat, allà descansa i es cura.", en: "The elves' home among waterfalls. Whoever arrives tired, rests and heals there.", cs: "Domov elfů mezi vodopády. Kdo tam dorazí unavený, odpočine si a uzdraví se.", fr: "Le royaume des cavaliers et de leurs chevaux, rapides comme le vent." } },
    { letter: "S", emoji: "🌻", item: { es: "Sam", ca: "Sam", en: "Sam", cs: "Sam", fr: "Sam" },
      fact: { es: "El jardinero que nunca soltó la mano de su amigo. Al final plantó flores por todas partes.", ca: "El jardiner que mai no va deixar anar la mà del seu amic. Al final va plantar flors a tot arreu.", en: "The gardener who never let go of his friend's hand. In the end he planted flowers everywhere.", cs: "Zahradník, který nikdy nepustil ruku svého kamaráda. Nakonec všude vysázel květiny.", fr: "Le jardinier qui n'a jamais lâché la main de son ami. À la fin, il a planté des fleurs partout." } },
    { letter: "T", emoji: "💰", item: { es: "Tesoro", ca: "Tresor", en: "Treasure", cs: "Trpaslík", fr: "Trésor" },
      fact: { es: "El mejor tesoro de la Tierra Media no es el oro: son los amigos del camino.", ca: "El millor tresor de la Terra Mitjana no és l'or: són els amics del camí.", en: "The best treasure in Middle-earth is not gold: it is the friends you make on the road.", cs: "Trpaslíci kopou pod horami a milují krystaly a dlouhé vousy.", fr: "Le meilleur trésor de la Terre du Milieu n'est pas l'or : ce sont les amis du chemin." } },
    { letter: "U", emoji: "🏠", item: { es: "Último Hogar", ca: "Últim Refugi", en: "Underhill", cs: "Údolí", fr: "Ultime refuge" },
      fact: { es: "Así llaman a la casa de Elrond en Rivendel: la última casa acogedora antes de la aventura.", ca: "Així anomenen la casa d'Elrond a Rivendel: l'última casa acollidora abans de l'aventura.", en: "Underhill was Frodo's secret name when travelling. Sometimes heroes need a disguise.", cs: "V údolí Roklinky si poutníci odpočinou před velkým dobrodružstvím.", fr: "C'est le nom de la maison d'Elrond à Fondcombe : la dernière maison accueillante avant l'aventure." } },
    { letter: "V", emoji: "🦁", item: { es: "Valentía", ca: "Valentia", en: "Valour", cs: "Vousy", fr: "Vaillance" },
      fact: { es: "Ser valiente no es no tener miedo: es dar el paso aunque lo tengas.", ca: "Ser valent no és no tenir por: és fer el pas encara que en tinguis.", en: "Being brave is not having no fear: it is taking the step even when you do.", cs: "Trpasličí vousy jsou pýchou rodiny. Čím delší, tím lepší!", fr: "Être courageux, ce n'est pas ne pas avoir peur : c'est avancer quand même." } },
    { letter: "W", emoji: "✨", item: { es: "Wow, magia", ca: "Wow, màgia", en: "Wizard", cs: "Wow, kouzla", fr: "Waouh, la magie" },
      fact: { es: "La magia más fuerte de la Tierra Media es sencilla: la amistad y la esperanza.", ca: "La màgia més forta de la Terra Mitjana és senzilla: l'amistat i l'esperança.", en: "Wizards know the strongest magic is simple: friendship and hope.", cs: "Nejsilnější kouzlo Středozemě je prosté: přátelství a naděje.", fr: "La magie la plus forte de la Terre du Milieu est simple : l'amitié et l'espoir." } },
    { letter: "X", emoji: "🗺️", item: { es: "La X del mapa", ca: "La X del mapa", en: "X marks the spot", cs: "X na mapě", fr: "X sur la carte" },
      fact: { es: "En los mapas antiguos, la X señala el tesoro... o la puerta secreta de una montaña.", ca: "Als mapes antics, la X assenyala el tresor... o la porta secreta d'una muntanya.", en: "On old maps, X marks the treasure... or the secret door into a mountain.", cs: "Na starých mapách X označuje poklad... nebo tajné dveře do hory.", fr: "Sur les vieilles cartes, le X indique le trésor... ou la porte secrète d'une montagne." } },
    { letter: "Y", emoji: "⛑️", item: { es: "Yelmo de Rohan", ca: "Yavanna", en: "Yellow flowers", cs: "Yavanna", fr: "Yeux d'aigle" },
      fact: { es: "Los yelmos de Rohan llevan crines de caballo, para galopar hasta con la cabeza.", ca: "Yavanna és la protectora de totes les plantes i els arbres del món.", en: "The Shire is full of yellow flowers. Sam knows the name of every single one.", cs: "Yavanna je ochránkyně všech rostlin a stromů světa.", fr: "Les aigles voient tout de très haut. Et ils arrivent toujours au bon moment." } },
    { letter: "Z", emoji: "🌳", item: { es: "Zancadas de ent", ca: "Zero por", en: "Zigzag paths", cs: "Zlato draka", fr: "Zigzag des sentiers" },
      fact: { es: "Los ents, los pastores de árboles, cruzan un bosque entero en pocas zancadas.", ca: "Zero por: amb els amics al costat, fins i tot la foscor fa menys por.", en: "Mountain paths zigzag up and up. Slow and steady wins the summit.", cs: "Dračí zlato se krásně třpytí, ale hřeje míň než jedno obětí.", fr: "Les sentiers de montagne zigzaguent. Doucement mais sûrement, on atteint le sommet." } }
  ],

  /* ---------- FAMOSOS: los héroes ---------- */
  famous: [
    { emoji: "🧙", year: "", color: "#78909c", name: { es: "Gandalf", ca: "Gandalf", en: "Gandalf", cs: "Gandalf", fr: "Gandalf" },
      achievement: { es: "El mago gris que guía a los héroes y hace los mejores fuegos artificiales.", ca: "El mag gris que guia els herois i fa els millors focs artificials.", en: "The grey wizard who guides the heroes and makes the best fireworks.", cs: "Šedý čaroděj, který vede hrdiny a dělá nejlepší ohňostroje.", fr: "Le magicien gris qui guide les héros et fait les meilleurs feux d'artifice." },
      quote: { es: "Lo único que debemos decidir es qué hacer con el tiempo que se nos da.", ca: "L'únic que hem de decidir és què fer amb el temps que se'ns dóna.", en: "All we have to decide is what to do with the time that is given to us.", cs: "Musíme se jen rozhodnout, co uděláme s časem, který nám byl dán.", fr: "Nous devons seulement décider quoi faire du temps qui nous est donné." } },
    { emoji: "👑", year: "", color: "#5d4037", name: { es: "Aragorn", ca: "Aragorn", en: "Aragorn", cs: "Aragorn", fr: "Aragorn" },
      achievement: { es: "Explorador, sanador y rey. Protege a los pequeños sin pedir nada a cambio.", ca: "Explorador, sanador i rei. Protegeix els petits sense demanar res a canvi.", en: "Ranger, healer and king. He protects the small without asking anything in return.", cs: "Hraničář, léčitel a král. Chrání malé a nic za to nechce.", fr: "Explorateur, guérisseur et roi. Il protège les petits sans rien demander en retour." },
      quote: { es: "No todos los que vagan están perdidos.", ca: "No tots els que vaguen estan perduts.", en: "Not all those who wander are lost.", cs: "Ne každý, kdo bloudí, je ztracený.", fr: "Tous ceux qui errent ne sont pas perdus." } },
    { emoji: "🏹", year: "", color: "#33691e", name: { es: "Legolas", ca: "Legolas", en: "Legolas", cs: "Legolas", fr: "Legolas" },
      achievement: { es: "El arquero elfo de ojos de águila. Camina sobre la nieve sin dejar huella.", ca: "L'arquer elf d'ulls d'àguila. Camina sobre la neu sense deixar petjada.", en: "The elf archer with eagle eyes. He walks on snow without leaving a footprint.", cs: "Elfí lučištník s orlíma očima. Chodí po sněhu a nezanechává stopy.", fr: "L'archer elfe aux yeux d'aigle. Il marche sur la neige sans laisser d'empreinte." },
      quote: { es: "Un ojo atento ve amigos donde otros solo ven extraños.", ca: "Un ull atent veu amics on d'altres només veuen estranys.", en: "A watchful eye sees friends where others only see strangers.", cs: "Pozorné oko vidí přátele tam, kde jiní vidí jen cizince.", fr: "Un œil attentif voit des amis là où d'autres ne voient que des inconnus." } },
    { emoji: "⛏️", year: "", color: "#bf360c", name: { es: "Gimli", ca: "Gimli", en: "Gimli", cs: "Gimli", fr: "Gimli" },
      achievement: { es: "El enano del hacha, leal y cabezota, que se hizo amigo de un elfo para siempre.", ca: "El nan de la destral, lleial i tossut, que es va fer amic d'un elf per sempre.", en: "The dwarf with the axe, loyal and stubborn, who became an elf's friend forever.", cs: "Trpaslík se sekerou, věrný a tvrdohlavý, který se navždy skamarádil s elfem.", fr: "Le nain à la hache, loyal et têtu, devenu l'ami d'un elfe pour toujours." },
      quote: { es: "Los amigos que parecen más distintos son los mejores de encontrar.", ca: "Els amics que semblen més diferents són els millors de trobar.", en: "The friends who seem most different are the best ones to find.", cs: "Kamarádi, kteří vypadají nejodlišněji, jsou ti nejlepší k nalezení.", fr: "Les amis qui semblent les plus différents sont les meilleurs à trouver." } },
    { emoji: "🌟", year: "", color: "#f9a825", name: { es: "Galadriel", ca: "Galadriel", en: "Galadriel", cs: "Galadriel", fr: "Galadriel" },
      achievement: { es: "La reina elfa del bosque dorado. Su luz guía a los viajeros en la oscuridad.", ca: "La reina elfa del bosc daurat. La seva llum guia els viatgers en la foscor.", en: "The elf queen of the golden forest. Her light guides travellers in the dark.", cs: "Elfí královna zlatého lesa. Její světlo vede poutníky tmou.", fr: "La reine elfe de la forêt dorée. Sa lumière guide les voyageurs dans le noir." },
      quote: { es: "Hasta la persona más pequeña puede cambiar el rumbo del futuro.", ca: "Fins i tot la persona més petita pot canviar el rumb del futur.", en: "Even the smallest person can change the course of the future.", cs: "I ten nejmenší člověk může změnit běh budoucnosti.", fr: "Même la plus petite personne peut changer le cours de l'avenir." } },
    { emoji: "💍", year: "", color: "#455a64", name: { es: "Frodo", ca: "Frodo", en: "Frodo", cs: "Frodo", fr: "Frodon" },
      achievement: { es: "El hobbit que llevó el anillo hasta el final, paso a paso, sin rendirse.", ca: "El hòbbit que va portar l'anell fins al final, pas a pas, sense rendir-se.", en: "The hobbit who carried the ring to the very end, step by step, without giving up.", cs: "Hobit, který donesl prsten až na konec, krok za krokem, bez vzdávání.", fr: "Le hobbit qui a porté l'anneau jusqu'au bout, pas à pas, sans abandonner." },
      quote: { es: "Los caminos largos empiezan en la puerta de casa.", ca: "Els camins llargs comencen a la porta de casa.", en: "Long roads begin at your own front door.", cs: "Dlouhé cesty začínají u dveří tvého domova.", fr: "Les longues routes commencent à la porte de ta maison." } },
    { emoji: "🌻", year: "", color: "#2e7d32", name: { es: "Sam", ca: "Sam", en: "Sam", cs: "Sam", fr: "Sam" },
      achievement: { es: "El jardinero fiel. No podía llevar la carga de su amigo, así que lo llevó a él.", ca: "El jardiner fidel. No podia portar la càrrega del seu amic, així que el va portar a ell.", en: "The loyal gardener. He could not carry his friend's burden, so he carried his friend.", cs: "Věrný zahradník. Nemohl nést břemeno svého kamaráda, tak nesl kamaráda.", fr: "Le jardinier fidèle. Il ne pouvait pas porter le fardeau de son ami, alors il a porté son ami." },
      quote: { es: "Siempre hay algo bueno en este mundo por lo que vale la pena luchar.", ca: "Sempre hi ha alguna cosa bona en aquest món per la qual val la pena lluitar.", en: "There is always some good in this world worth fighting for.", cs: "Na tomto světě je vždycky něco dobrého, za co stojí za to bojovat.", fr: "Il y a toujours quelque chose de bon en ce monde qui mérite qu'on se batte." } },
    { emoji: "🛡️", year: "", color: "#6a1b9a", name: { es: "Éowyn", ca: "Éowyn", en: "Éowyn", cs: "Éowyn", fr: "Éowyn" },
      achievement: { es: "La dama de Rohan que no aceptó quedarse quieta y se hizo heroína.", ca: "La dama de Rohan que no va acceptar quedar-se quieta i es va fer heroïna.", en: "The lady of Rohan who refused to stay behind and became a hero.", cs: "Paní z Rohanu, která odmítla zůstat stranou a stala se hrdinkou.", fr: "La dame du Rohan qui a refusé de rester en arrière et est devenue une héroïne." },
      quote: { es: "Nadie decide por ti quién puedes llegar a ser.", ca: "Ningú no decideix per tu qui pots arribar a ser.", en: "Nobody decides for you who you can become.", cs: "Nikdo za tebe nerozhodne, kým se můžeš stát.", fr: "Personne ne décide à ta place qui tu peux devenir." } }
  ],

  childDream: {
    girl: { es: "Heroína de la Tierra Media", ca: "Heroïna de la Terra Mitjana", en: "Hero of Middle-earth", cs: "Hrdinka Středozemě", fr: "Héroïne de la Terre du Milieu" },
    boy: { es: "Héroe de la Tierra Media", ca: "Heroi de la Terra Mitjana", en: "Hero of Middle-earth", cs: "Hrdina Středozemě", fr: "Héros de la Terre du Milieu" },
    kid: { es: "Peque héroe de la Tierra Media", ca: "Menut heroi de la Terra Mitjana", en: "Little hero of Middle-earth", cs: "Malé dítě, hrdina Středozemě", fr: "Petit héros de la Terre du Milieu" }
  },
  childQuote: { es: "Hasta los pasos pequeños pueden cambiar el mundo. ¡Y yo doy muchos!", ca: "Fins i tot els passos petits poden canviar el món. I jo en faig molts!", en: "Even little steps can change the world. And I take lots of them!", cs: "I malé kroky mohou změnit svět. A já jich dělám spoustu!", fr: "Même les petits pas peuvent changer le monde. Et j'en fais plein !" },

  /* ---------- MATES ---------- */
  mathEmojis: ["⚔️", "💍", "🏹", "🍄", "🐴", "🌳"],

  /* ---------- CONSTRUCTOR: la forja ---------- */
  builder: {
    title: { es: "¡Forja tu propia espada!", ca: "Forja la teva pròpia espasa!", en: "Forge your own sword!", cs: "Ukovej si vlastní meč!", fr: "Forge ta propre épée !" },
    thing: { es: "espada", ca: "espasa", en: "sword", cs: "meč", fr: "épée" },
    parts: [
      { id: "body", label: { es: "Metal de la hoja", ca: "Metall de la fulla", en: "Blade metal", cs: "Kov čepele", fr: "Métal de la lame" },
        options: [{ id: "silver", v: "#cfd8dc" }, { id: "gold", v: "#ffd54f" }, { id: "blue", v: "#81d4fa" }, { id: "green", v: "#a5d6a7" }] },
      { id: "nose", label: { es: "La empuñadura", ca: "L'empunyadura", en: "The hilt", cs: "Jílec", fr: "La poignée" },
        options: [{ id: "cone", v: "cone", icon: "🗡️" }, { id: "round", v: "round", icon: "⚪" }, { id: "star", v: "star", icon: "⭐" }] },
      { id: "window", label: { es: "La gema", ca: "La gemma", en: "The gem", cs: "Drahokam", fr: "La gemme" },
        options: [{ id: "one", v: "one", icon: "🔴" }, { id: "two", v: "two", icon: "🔴🔵" }, { id: "heart", v: "heart", icon: "💗" }] },
      { id: "flame", label: { es: "El brillo mágico", ca: "La brillantor màgica", en: "The magic glow", cs: "Kouzelná záře", fr: "L'éclat magique" },
        options: [{ id: "orange", v: "#ffb74d" }, { id: "blue", v: "#4fc3f7" }, { id: "rainbow", v: "rainbow", icon: "🌈" }] }
    ],
    svg(sel) {
      const metal = sel.body || "#cfd8dc";
      const glow = sel.flame === "rainbow" ? "url(#swR)" : (sel.flame || "#4fc3f7");
      let hilt = `<rect x="34" y="66" width="32" height="6" rx="3" fill="#8d6e63"/><rect x="46" y="72" width="8" height="22" rx="4" fill="#6d4c41"/>`;
      if (sel.nose === "round") hilt = `<rect x="32" y="66" width="36" height="6" rx="3" fill="#8d6e63"/><rect x="46" y="72" width="8" height="20" rx="4" fill="#6d4c41"/><circle cx="50" cy="96" r="5" fill="#8d6e63"/>`;
      if (sel.nose === "star") hilt = `<path d="M32 66 L68 66 L62 72 L38 72 Z" fill="#8d6e63"/><rect x="46" y="72" width="8" height="20" rx="4" fill="#6d4c41"/><text x="44" y="102" font-size="11">⭐</text>`;
      let gem = `<circle cx="50" cy="69" r="4" fill="#e53935"/>`;
      if (sel.window === "two") gem = `<circle cx="42" cy="69" r="3.4" fill="#e53935"/><circle cx="58" cy="69" r="3.4" fill="#1e88e5"/>`;
      if (sel.window === "heart") gem = `<path d="M50 66 C47 63 43 66 46 70 L50 74 L54 70 C57 66 53 63 50 66 Z" fill="#ec407a"/>`;
      return `<svg viewBox="0 0 100 110" width="190" height="210">
        <defs><linearGradient id="swR" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ff5252"/><stop offset="34%" stop-color="#ffd740"/><stop offset="67%" stop-color="#69f0ae"/><stop offset="100%" stop-color="#40c4ff"/></linearGradient>
        <linearGradient id="swM" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#fff"/><stop offset="50%" stop-color="${metal}"/><stop offset="100%" stop-color="#90a4ae"/></linearGradient></defs>
        <ellipse cx="50" cy="38" rx="16" ry="30" fill="${glow}" opacity=".35"><animate attributeName="opacity" values=".35;.15;.35" dur="2s" repeatCount="indefinite"/></ellipse>
        <path d="M50 6 L56 16 L56 62 L44 62 L44 16 Z" fill="url(#swM)" stroke="#eceff1" stroke-width="1"/>
        <line x1="50" y1="12" x2="50" y2="60" stroke="#eceff1" stroke-width="1.4"/>
        ${hilt}
        ${gem}
        <circle cx="34" cy="30" r="1.6" fill="#fff"><animate attributeName="opacity" values="1;.2;1" dur="1.8s" repeatCount="indefinite"/></circle>
        <circle cx="66" cy="44" r="1.6" fill="#fff"><animate attributeName="opacity" values=".2;1;.2" dur="2.2s" repeatCount="indefinite"/></circle>
      </svg>`;
    }
  }
};
