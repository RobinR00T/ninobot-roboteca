"use strict";
/* ============================================================
   Contenido de PIRATAS (parte A): registro de la aventura,
   quiz, alfabeto, famosos, mates y constructor.
   Piratas buenos: cañones de confeti y tesoros de caramelos.
   ============================================================ */

THEMES.piratas = { emoji: "🏴‍☠️", ready: true, grad: "linear-gradient(150deg,#01579b,#5d4037)", name: { es: "Piratas", ca: "Pirates", en: "Pirates", cs: "Piráti", fr: "Pirates" } };

THEMES.piratas.content = {

  statusPlace: { es: "Conectado desde el Mar de los Caramelos", ca: "Connectat des del Mar dels Caramels", en: "Connected from the Candy Sea", cs: "Připojeno z Bonbonového moře", fr: "Connecté depuis la Mer des Bonbons" },
  welcome: { es: "¡Todos a bordo, {name}! Iza las velas... ¡zarpamos en busca del tesoro!", ca: "Tothom a bord, {name}! Hissa les veles... salpem a buscar el tresor!", en: "All aboard, {name}! Hoist the sails... we set off to find the treasure!", cs: "Všichni na palubu, {name}! Napni plachty... vyplouváme za pokladem!", fr: "Tous à bord, {name} ! Hisse les voiles... on part chercher le trésor !" },

  /* ---------- QUIZ: 10 preguntas ---------- */
  quiz: [
    { emoji: "🧰",
      q: { es: "¿Qué guarda un pirata en su cofre del tesoro?", ca: "Què guarda un pirata al seu cofre del tresor?", en: "What does a pirate keep in the treasure chest?", cs: "Co schovává pirát ve své truhle s pokladem?", fr: "Que garde un pirate dans son coffre au trésor ?" },
      options: [
        { es: "Calcetines", ca: "Mitjons", en: "Socks", cs: "Ponožky", fr: "Des chaussettes" },
        { es: "Monedas y caramelos", ca: "Monedes i caramels", en: "Coins and sweets", cs: "Mince a bonbony", fr: "Des pièces et des bonbons" },
        { es: "Deberes", ca: "Deures", en: "Homework", cs: "Domácí úkoly", fr: "Des devoirs" },
        { es: "Sopa fría", ca: "Sopa freda", en: "Cold soup", cs: "Studenou polévku", fr: "De la soupe froide" }],
      answer: 1,
      explanation: { es: "Los cofres piratas guardan monedas de chocolate, caramelos y cosas que brillan.", ca: "Els cofres pirates guarden monedes de xocolata, caramels i coses que brillen.", en: "Pirate chests keep chocolate coins, sweets and shiny things.", cs: "V pirátských truhlách jsou čokoládové mince, bonbony a třpytivé věci.", fr: "Les coffres de pirates gardent des pièces en chocolat, des bonbons et des choses qui brillent." } },
    { emoji: "🦜",
      q: { es: "¿Qué animal habla en el hombro del pirata?", ca: "Quin animal parla a l'espatlla del pirata?", en: "Which animal talks on the pirate's shoulder?", cs: "Které zvíře mluví pirátovi na rameni?", fr: "Quel animal parle sur l'épaule du pirate ?" },
      options: [
        { es: "Un pez", ca: "Un peix", en: "A fish", cs: "Ryba", fr: "Un poisson" },
        { es: "Un loro", ca: "Un lloro", en: "A parrot", cs: "Papoušek", fr: "Un perroquet" },
        { es: "Una vaca", ca: "Una vaca", en: "A cow", cs: "Kráva", fr: "Une vache" },
        { es: "Un pingüino", ca: "Un pingüí", en: "A penguin", cs: "Tučňák", fr: "Un pingouin" }],
      answer: 1,
      explanation: { es: "El loro repite lo que oye. ¡Por eso sabe todos los secretos del barco!", ca: "El lloro repeteix el que sent. Per això sap tots els secrets del vaixell!", en: "The parrot repeats what it hears. That is why it knows all the ship's secrets!", cs: "Papoušek opakuje, co slyší. Proto zná všechna tajemství lodi!", fr: "Le perroquet répète ce qu'il entend. C'est pour ça qu'il connaît tous les secrets du bateau !" } },
    { emoji: "🏴‍☠️",
      q: { es: "¿Cómo se llama la bandera de los piratas?", ca: "Com es diu la bandera dels pirates?", en: "What is the pirate flag called?", cs: "Jak se jmenuje pirátská vlajka?", fr: "Comment s'appelle le drapeau des pirates ?" },
      options: [
        { es: "La servilleta", ca: "El tovalló", en: "The napkin", cs: "Ubrousek", fr: "La serviette" },
        { es: "La Jolly Roger", ca: "La Jolly Roger", en: "The Jolly Roger", cs: "Jolly Roger", fr: "Le Jolly Roger" },
        { es: "La mantita", ca: "La manteta", en: "The blankie", cs: "Dečka", fr: "Le doudou" },
        { es: "La cometa", ca: "L'estel", en: "The kite", cs: "Papírový drak", fr: "Le cerf-volant" }],
      answer: 1,
      explanation: { es: "La bandera pirata se llama Jolly Roger. Cada capitán dibujaba la suya.", ca: "La bandera pirata es diu Jolly Roger. Cada capità dibuixava la seva.", en: "The pirate flag is called the Jolly Roger. Every captain drew their own.", cs: "Pirátská vlajka se jmenuje Jolly Roger. Každý kapitán si kreslil svou vlastní.", fr: "Le drapeau pirate s'appelle le Jolly Roger. Chaque capitaine dessinait le sien." } },
    { emoji: "🗺️",
      q: { es: "¿Qué usa un pirata para encontrar el tesoro?", ca: "Què fa servir un pirata per trobar el tresor?", en: "What does a pirate use to find the treasure?", cs: "Co používá pirát, aby našel poklad?", fr: "Qu'utilise un pirate pour trouver le trésor ?" },
      options: [
        { es: "Una almohada", ca: "Un coixí", en: "A pillow", cs: "Polštář", fr: "Un oreiller" },
        { es: "Un mapa", ca: "Un mapa", en: "A map", cs: "Mapu", fr: "Une carte" },
        { es: "Una cuchara", ca: "Una cullera", en: "A spoon", cs: "Lžíci", fr: "Une cuillère" },
        { es: "Un paraguas", ca: "Un paraigua", en: "An umbrella", cs: "Deštník", fr: "Un parapluie" }],
      answer: 1,
      explanation: { es: "El mapa del tesoro enseña el camino paso a paso hasta la X.", ca: "El mapa del tresor ensenya el camí pas a pas fins a la X.", en: "The treasure map shows the way, step by step, all the way to the X.", cs: "Mapa pokladu ukazuje cestu krok za krokem až k X.", fr: "La carte au trésor montre le chemin pas à pas jusqu'au X." } },
    { emoji: "❌",
      q: { es: "¿Qué señal marca el tesoro en el mapa?", ca: "Quin senyal marca el tresor al mapa?", en: "Which sign marks the treasure on the map?", cs: "Jaká značka označuje poklad na mapě?", fr: "Quel signe marque le trésor sur la carte ?" },
      options: [
        { es: "Una O", ca: "Una O", en: "An O", cs: "Písmeno O", fr: "Un O" },
        { es: "Un corazón", ca: "Un cor", en: "A heart", cs: "Srdíčko", fr: "Un cœur" },
        { es: "Una X", ca: "Una X", en: "An X", cs: "Písmeno X", fr: "Un X" },
        { es: "Una nube", ca: "Un núvol", en: "A cloud", cs: "Mráček", fr: "Un nuage" }],
      answer: 2,
      explanation: { es: "¡La X marca el lugar! Donde está la X, toca cavar.", ca: "La X marca el lloc! On hi ha la X, toca cavar.", en: "X marks the spot! Where the X is, you dig.", cs: "X označuje místo! Tam, kde je X, se kope.", fr: "Le X marque l'endroit ! Là où est le X, on creuse." } },
    { emoji: "☸️",
      q: { es: "¿Cómo se llama el volante del barco?", ca: "Com es diu el volant del vaixell?", en: "What is the ship's steering wheel called?", cs: "Jak se jmenuje volant lodi?", fr: "Comment s'appelle le volant du bateau ?" },
      options: [
        { es: "El timón", ca: "El timó", en: "The helm", cs: "Kormidlo", fr: "Le gouvernail" },
        { es: "El molinillo", ca: "El molinet", en: "The windmill", cs: "Větrník", fr: "Le moulinet" },
        { es: "La ruedecita", ca: "La rodeta", en: "The little wheel", cs: "Kolečko", fr: "La petite roue" },
        { es: "El pedal", ca: "El pedal", en: "The pedal", cs: "Pedál", fr: "La pédale" }],
      answer: 0,
      explanation: { es: "Con el timón el capitán gira el barco a un lado y al otro.", ca: "Amb el timó el capità gira el vaixell cap a un costat i cap a l'altre.", en: "With the helm the captain turns the ship this way and that way.", cs: "Kormidlem otáčí kapitán loď na jednu i na druhou stranu.", fr: "Avec le gouvernail, le capitaine tourne le bateau d'un côté et de l'autre." } },
    { emoji: "🔭",
      q: { es: "¿Quién grita '¡tierra a la vista!' desde lo alto del mástil?", ca: "Qui crida 'terra a la vista!' des de dalt del pal?", en: "Who shouts 'land ahoy!' from the top of the mast?", cs: "Kdo volá 'země na obzoru!' z vrcholku stěžně?", fr: "Qui crie « terre en vue ! » du haut du mât ?" },
      options: [
        { es: "El cocinero", ca: "El cuiner", en: "The cook", cs: "Kuchař", fr: "Le cuisinier" },
        { es: "El vigía", ca: "El vigia", en: "The lookout", cs: "Hlídka", fr: "La vigie" },
        { es: "El kraken", ca: "El kraken", en: "The kraken", cs: "Kraken", fr: "Le kraken" },
        { es: "El cocodrilo", ca: "El cocodril", en: "The crocodile", cs: "Krokodýl", fr: "Le crocodile" }],
      answer: 1,
      explanation: { es: "El vigía mira desde la cofa, la cesta de lo alto del mástil.", ca: "El vigia mira des de la cofa, la cistella de dalt del pal.", en: "The lookout watches from the crow's nest, the basket at the top of the mast.", cs: "Hlídka se dívá z koše na vrcholku stěžně, říká se mu vraní hnízdo.", fr: "La vigie regarde depuis la hune, le panier tout en haut du mât." } },
    { emoji: "👋",
      q: { es: "¿Cómo saluda un pirata contento?", ca: "Com saluda un pirata content?", en: "How does a happy pirate say hello?", cs: "Jak zdraví veselý pirát?", fr: "Comment salue un pirate content ?" },
      options: [
        { es: "¡Ahoy!", ca: "Ahoy!", en: "Ahoy!", cs: "Ahoy!", fr: "Ohé !" },
        { es: "¡Achís!", ca: "Atxim!", en: "Achoo!", cs: "Hepčík!", fr: "Atchoum !" },
        { es: "¡Miau!", ca: "Miau!", en: "Meow!", cs: "Mňau!", fr: "Miaou !" },
        { es: "Shhh", ca: "Xxxt", en: "Shhh", cs: "Pššš", fr: "Chuut" }],
      answer: 0,
      explanation: { es: "¡Ahoy! Y cuando algo les encanta, gritan: ¡arrr!", ca: "Ahoy! I quan alguna cosa els encanta, criden: arrr!", en: "Ahoy! And when they love something, they shout: arrr!", cs: "Ahoy! Zní to skoro jako naše ahoj. A když se jim něco moc líbí, křičí: arrr!", fr: "Ohé ! Et quand ils adorent quelque chose, ils crient : arrr !" } },
    { emoji: "🔎",
      q: { es: "¿Con qué mira el pirata las cosas que están lejos?", ca: "Amb què mira el pirata les coses que són lluny?", en: "What does a pirate use to see faraway things?", cs: "Čím se pirát dívá na věci, které jsou daleko?", fr: "Avec quoi le pirate regarde-t-il les choses lointaines ?" },
      options: [
        { es: "Con un catalejo", ca: "Amb una ullera de llarga vista", en: "With a spyglass", cs: "Dalekohledem", fr: "Avec une longue-vue" },
        { es: "Con una lupa", ca: "Amb una lupa", en: "With a magnifying glass", cs: "Lupou", fr: "Avec une loupe" },
        { es: "Con un microscopio", ca: "Amb un microscopi", en: "With a microscope", cs: "Mikroskopem", fr: "Avec un microscope" },
        { es: "Con gafas de bucear", ca: "Amb ulleres de bussejar", en: "With diving goggles", cs: "Potápěčskými brýlemi", fr: "Avec des lunettes de plongée" }],
      answer: 0,
      explanation: { es: "El catalejo acerca lo que está lejos, como un tubo mágico de lentes.", ca: "La ullera de llarga vista acosta el que és lluny, com un tub màgic de lents.", en: "The spyglass brings faraway things closer, like a magic tube of lenses.", cs: "Dalekohled přiblíží, co je daleko, jako kouzelná trubka plná čoček.", fr: "La longue-vue rapproche ce qui est loin, comme un tube magique plein de lentilles." } },
    { emoji: "⚓",
      q: { es: "¿Qué suelta el barco al agua para quedarse quieto?", ca: "Què deixa anar el vaixell a l'aigua per quedar-se quiet?", en: "What does the ship drop into the water to stay still?", cs: "Co spustí loď do vody, aby zůstala na místě?", fr: "Que jette le bateau dans l'eau pour rester tranquille ?" },
      options: [
        { es: "Un globo", ca: "Un globus", en: "A balloon", cs: "Balonek", fr: "Un ballon" },
        { es: "Una escalera", ca: "Una escala", en: "A ladder", cs: "Žebřík", fr: "Une échelle" },
        { es: "El ancla", ca: "L'àncora", en: "The anchor", cs: "Kotvu", fr: "L'ancre" },
        { es: "Un sombrero", ca: "Un barret", en: "A hat", cs: "Klobouk", fr: "Un chapeau" }],
      answer: 2,
      explanation: { es: "El ancla se agarra al fondo del mar y el barco se queda quietecito.", ca: "L'àncora s'agafa al fons del mar i el vaixell es queda quietet.", en: "The anchor grips the bottom of the sea and the ship stays nice and still.", cs: "Kotva se zachytí na dně moře a loď zůstane pěkně na místě.", fr: "L'ancre s'accroche au fond de la mer et le bateau reste bien tranquille." } },
    { emoji: "😴",
      q: { es: "¿Dónde duerme un pirata en el barco?", ca: "On dorm un pirata al vaixell?", en: "Where does a pirate sleep on the ship?", cs: "Kde spí pirát na lodi?", fr: "Où dort un pirate sur le bateau ?" },
      options: [
        { es: "En un castillo", ca: "En un castell", en: "In a castle", cs: "Na hradě", fr: "Dans un château" },
        { es: "En la bañera", ca: "A la banyera", en: "In the bathtub", cs: "Ve vaně", fr: "Dans la baignoire" },
        { es: "Encima del mástil", ca: "A dalt de tot del pal", en: "On top of the mast", cs: "Na vrcholku stěžně", fr: "En haut du mât" },
        { es: "En una hamaca colgante", ca: "En una hamaca penjada", en: "In a hanging hammock", cs: "V zavěšené houpací síti", fr: "Dans un hamac suspendu" }],
      answer: 3,
      explanation: { es: "Los marineros dormían en hamacas colgadas: el balanceo del barco los mecía como una cuna.", ca: "Els mariners dormien en hamaques penjades: el balanceig del vaixell els bressolava com un bressol.", en: "Sailors slept in hanging hammocks: the rocking of the ship rocked them like a cradle.", cs: "Námořníci spali v zavěšených houpacích sítích: houpání lodi je kolébalo jako v kolébce.", fr: "Les marins dormaient dans des hamacs suspendus : le balancement du bateau les berçait comme un berceau." } },
    { emoji: "👁️",
      q: { es: "¿Dónde lleva el pirata su parche negro?", ca: "On porta el pirata el seu pegat negre?", en: "Where does a pirate wear the black patch?", cs: "Kde nosí pirát svou černou pásku?", fr: "Où le pirate porte-t-il son bandeau noir ?" },
      options: [
        { es: "En un ojo", ca: "En un ull", en: "On one eye", cs: "Přes oko", fr: "Sur un œil" },
        { es: "En la rodilla", ca: "Al genoll", en: "On the knee", cs: "Na koleni", fr: "Sur le genou" },
        { es: "En la nariz", ca: "Al nas", en: "On the nose", cs: "Na nose", fr: "Sur le nez" },
        { es: "En el zapato", ca: "A la sabata", en: "On the shoe", cs: "Na botě", fr: "Sur la chaussure" }],
      answer: 0,
      explanation: { es: "El parche tapaba un ojo herido en alguna aventura, y se convirtió en la señal pirata más famosa.", ca: "El pegat tapava un ull ferit en alguna aventura, i es va convertir en el senyal pirata més famós.", en: "The patch covered an eye hurt in some adventure, and it became the most famous pirate look.", cs: "Páska zakrývala oko poraněné při nějakém dobrodružství a stala se nejslavnějším pirátským znamením.", fr: "Le bandeau cachait un œil blessé pendant une aventure, et c'est devenu le signe pirate le plus célèbre." } },
    { emoji: "🧭",
      q: { es: "¿Qué aparato señala siempre el norte para no perderse en el mar?", ca: "Quin aparell assenyala sempre el nord per no perdre's al mar?", en: "Which tool always points north so you never get lost at sea?", cs: "Který přístroj vždycky ukazuje na sever, aby ses na moři neztratil?", fr: "Quel objet montre toujours le nord pour ne pas se perdre en mer ?" },
      options: [
        { es: "Un reloj de cuco", ca: "Un rellotge de cucut", en: "A cuckoo clock", cs: "Kukačkové hodiny", fr: "Une horloge à coucou" },
        { es: "Una linterna", ca: "Una llanterna", en: "A flashlight", cs: "Baterka", fr: "Une lampe de poche" },
        { es: "Una brújula", ca: "Una brúixola", en: "A compass", cs: "Kompas", fr: "Une boussole" },
        { es: "Un silbato", ca: "Un xiulet", en: "A whistle", cs: "Píšťalka", fr: "Un sifflet" }],
      answer: 2,
      explanation: { es: "La aguja de la brújula es un imán pequeñito que siempre apunta al norte, llueva o haga sol.", ca: "L'agulla de la brúixola és un imant petitó que sempre apunta al nord, plogui o faci sol.", en: "The compass needle is a tiny magnet that always points north, rain or shine.", cs: "Střelka kompasu je malý magnet, který vždycky ukazuje na sever, ať prší nebo svítí slunce.", fr: "L'aiguille de la boussole est un petit aimant qui montre toujours le nord, qu'il pleuve ou qu'il fasse soleil." } },
    { emoji: "🍋",
      q: { es: "¿Qué fruta comían los marineros para estar sanos en los viajes largos?", ca: "Quina fruita menjaven els mariners per estar sans als viatges llargs?", en: "Which fruit did sailors eat to stay healthy on long voyages?", cs: "Jaké ovoce jedli námořníci, aby byli na dlouhých plavbách zdraví?", fr: "Quel fruit mangeaient les marins pour rester en forme pendant les longs voyages ?" },
      options: [
        { es: "Palomitas", ca: "Crispetes", en: "Popcorn", cs: "Popcorn", fr: "Du pop-corn" },
        { es: "Naranjas y limones", ca: "Taronges i llimones", en: "Oranges and lemons", cs: "Pomeranče a citrony", fr: "Des oranges et des citrons" },
        { es: "Chicles", ca: "Xiclets", en: "Chewing gum", cs: "Žvýkačky", fr: "Des chewing-gums" },
        { es: "Patatas fritas", ca: "Patates fregides", en: "Chips", cs: "Hranolky", fr: "Des frites" }],
      answer: 1,
      explanation: { es: "Las naranjas y los limones tienen vitamina C: con ella los marineros aguantaban fuertes los viajes larguísimos.", ca: "Les taronges i les llimones tenen vitamina C: amb ella els mariners aguantaven forts els viatges llarguíssims.", en: "Oranges and lemons are full of vitamin C: it kept sailors strong on very long voyages.", cs: "Pomeranče a citrony mají hodně vitaminu C: díky němu byli námořníci na dlouhých plavbách silní a zdraví.", fr: "Les oranges et les citrons sont pleins de vitamine C : elle gardait les marins forts pendant les très longs voyages." } },
    { emoji: "👩",
      q: { es: "¿Existieron de verdad las mujeres piratas?", ca: "Van existir de veritat les dones pirates?", en: "Were there real women pirates?", cs: "Existovaly doopravdy pirátky?", fr: "Les femmes pirates ont-elles vraiment existé ?" },
      options: [
        { es: "Sí, y algunas fueron capitanas famosas", ca: "Sí, i algunes van ser capitanes famoses", en: "Yes, and some were famous captains", cs: "Ano, a některé byly slavné kapitánky", fr: "Oui, et certaines étaient des capitaines célèbres" },
        { es: "No, jamás", ca: "No, mai", en: "No, never", cs: "Ne, nikdy", fr: "Non, jamais" },
        { es: "Solo en las películas", ca: "Només a les pel·lícules", en: "Only in the movies", cs: "Jen ve filmech", fr: "Seulement dans les films" },
        { es: "Solo los domingos", ca: "Només els diumenges", en: "Only on Sundays", cs: "Jen v neděli", fr: "Seulement le dimanche" }],
      answer: 0,
      explanation: { es: "Sí: Anne Bonny y Mary Read navegaron de verdad, y la capitana Ching Shih llegó a mandar cientos de barcos.", ca: "Sí: Anne Bonny i Mary Read van navegar de veritat, i la capitana Ching Shih va arribar a manar centenars de vaixells.", en: "Yes: Anne Bonny and Mary Read really sailed, and Captain Ching Shih commanded hundreds of ships.", cs: "Ano: Anne Bonny a Mary Read opravdu pluly po mořích a kapitánka Ching Shih velela stovkám lodí.", fr: "Oui : Anne Bonny et Mary Read ont vraiment navigué, et la capitaine Ching Shih commandait des centaines de bateaux." } }
  ],

  /* ---------- ALFABETO: 26 letras ---------- */
  alphabet: [
    { letter: "A", emoji: "🤸", item: { es: "Abordaje", ca: "Abordatge", en: "Aboard!", cs: "Abordáž", fr: "Abordage" },
      fact: { es: "En un abordaje de piratas buenos se salta al otro barco... ¡a repartir abrazos y caramelos!", ca: "En un abordatge de pirates bons se salta a l'altre vaixell... a repartir abraçades i caramels!", en: "All aboard! Friendly pirates jump onto the other ship... to share hugs and sweets!", cs: "Při abordáži hodných pirátů se skáče na druhou loď... rozdávat objetí a bonbony!", fr: "Dans un abordage de gentils pirates, on saute sur l'autre bateau... pour distribuer des câlins et des bonbons !" } },
    { letter: "B", emoji: "🧭", item: { es: "Brújula", ca: "Brúixola", en: "Bearings", cs: "Buzola", fr: "Boussole" },
      fact: { es: "La brújula siempre señala el norte. Así el barco nunca se pierde.", ca: "La brúixola sempre assenyala el nord. Així el vaixell no es perd mai.", en: "Sailors check their bearings with a compass, so the ship never gets lost.", cs: "Buzola vždycky ukazuje na sever. Loď se tak nikdy neztratí.", fr: "La boussole montre toujours le nord. Comme ça, le bateau ne se perd jamais." } },
    { letter: "C", emoji: "🧰", item: { es: "Cofre", ca: "Cofre", en: "Chest", cs: "Cesta za pokladem", fr: "Coffre" },
      fact: { es: "El cofre del tesoro se cierra con llave y suena clinc clinc al moverlo.", ca: "El cofre del tresor es tanca amb clau i sona clinc clinc quan es mou.", en: "The treasure chest locks with a key and goes clink clink when you shake it.", cs: "Cesta za pokladem začíná mapou a končí truhlou plnou čokoládových mincí.", fr: "Le coffre au trésor se ferme à clé et fait cling cling quand on le bouge." } },
    { letter: "D", emoji: "🪙", item: { es: "Doblones", ca: "Doblons", en: "Doubloons", cs: "Dublony", fr: "Doublons" },
      fact: { es: "Los doblones eran monedas de oro. Los nuestros son de chocolate, ¡mucho más ricos!", ca: "Els doblons eren monedes d'or. Els nostres són de xocolata, molt més bons!", en: "Doubloons were golden coins. Ours are chocolate ones, way yummier!", cs: "Dublony byly zlaté mince. Ty naše jsou čokoládové, a mnohem lepší!", fr: "Les doublons étaient des pièces d'or. Les nôtres sont en chocolat, bien plus délicieux !" } },
    { letter: "E", emoji: "🚪", item: { es: "Escotilla", ca: "Escotilla", en: "Escape hatch", cs: "Expedice", fr: "Écoutille" },
      fact: { es: "La escotilla es la puertecita del suelo del barco para bajar a la bodega.", ca: "L'escotilla és la porteta del terra del vaixell per baixar a la bodega.", en: "An escape hatch is the little door in the deck that leads down into the ship.", cs: "Pirátská expedice začíná tak, že všichni proklouznou poklopem do podpalubí.", fr: "L'écoutille est la petite porte du pont pour descendre dans la cale." } },
    { letter: "F", emoji: "🗼", item: { es: "Faro", ca: "Far", en: "Foghorn", cs: "Flotila", fr: "Fanal" },
      fact: { es: "El faro ilumina la noche para que los barcos encuentren el camino a casa.", ca: "El far il·lumina la nit perquè els vaixells trobin el camí de casa.", en: "The foghorn sings BOOO in the fog so ships can find their way.", cs: "Flotila je skupina lodí, které plují spolu jako kamarádky.", fr: "Le fanal est la lanterne du bateau qui brille dans la nuit." } },
    { letter: "G", emoji: "🪝", item: { es: "Garfio", ca: "Garfi", en: "Grappling hook", cs: "Galeona", fr: "Galion" },
      fact: { es: "El garfio sirve para agarrar cuerdas y colgar la hamaca de dormir.", ca: "El garfi serveix per agafar cordes i penjar l'hamaca de dormir.", en: "A grappling hook grabs onto ropes and holds up the sleeping hammock.", cs: "Galeona byla obrovská loď s mnoha plachtami, jako plovoucí hrad.", fr: "Le galion était un immense bateau à voiles, comme un château flottant." } },
    { letter: "H", emoji: "🌀", item: { es: "Huracán", ca: "Huracà", en: "Hurricane", cs: "Hurikán", fr: "Houle" },
      fact: { es: "Cuando viene un huracán, los barcos se quedan en el puerto tomando chocolate caliente.", ca: "Quan ve un huracà, els vaixells es queden al port prenent xocolata calenta.", en: "When a hurricane comes, ships stay in the harbour drinking hot chocolate.", cs: "Když se blíží hurikán, lodě zůstanou v přístavu a pijí horkou čokoládu.", fr: "La houle, ce sont les grandes vagues qui bercent doucement le bateau." } },
    { letter: "I", emoji: "🏝️", item: { es: "Isla", ca: "Illa", en: "Island", cs: "Indický oceán", fr: "Île" },
      fact: { es: "Una isla es un trocito de tierra rodeado de mar por todas partes.", ca: "Una illa és un trosset de terra envoltat de mar per tot arreu.", en: "An island is a little piece of land with sea all around it.", cs: "Přes Indický oceán pluly lodě plné koření, pokladů a příběhů.", fr: "Une île est un petit bout de terre entouré de mer de tous les côtés." } },
    { letter: "J", emoji: "🏴‍☠️", item: { es: "Jolly Roger", ca: "Jolly Roger", en: "Jolly Roger", cs: "Jolly Roger", fr: "Jolly Roger" },
      fact: { es: "Así se llama la bandera pirata. Cada capitán dibujaba la suya diferente.", ca: "Així es diu la bandera pirata. Cada capità dibuixava la seva diferent.", en: "That is the name of the pirate flag. Every captain drew their own design.", cs: "Tak se jmenuje pirátská vlajka. Každý kapitán si kreslil svou vlastní.", fr: "C'est le nom du drapeau pirate. Chaque capitaine dessinait le sien." } },
    { letter: "K", emoji: "🐙", item: { es: "Kraken", ca: "Kraken", en: "Kraken", cs: "Kraken", fr: "Kraken" },
      fact: { es: "El kraken es el calamar gigante de las leyendas. El nuestro es amistoso y da abrazos de ocho brazos.", ca: "El kraken és el calamar gegant de les llegendes. El nostre és amistós i fa abraçades de vuit braços.", en: "The kraken is the giant squid from the legends. Ours is friendly and gives eight-arm hugs.", cs: "Kraken je obří chobotnice z legend. Ten náš je přátelský a objímá osmi chapadly najednou.", fr: "Le kraken est le calamar géant des légendes. Le nôtre est gentil et fait des câlins à huit bras." } },
    { letter: "L", emoji: "🦜", item: { es: "Loro", ca: "Lloro", en: "Lookout", cs: "Lanoví", fr: "Longue-vue" },
      fact: { es: "Los loros pueden aprender muchísimas palabras y algunos viven más de 60 años.", ca: "Els lloros poden aprendre moltíssimes paraules i alguns viuen més de 60 anys.", en: "The lookout watches from up high, often with a chatty parrot on the shoulder!", cs: "Lanoví jsou všechna lana lodi. Papoušek se v nich hrozně rád houpe.", fr: "Avec la longue-vue on voit l'île au trésor de très loin. Même le perroquet veut regarder dedans !" } },
    { letter: "M", emoji: "🗺️", item: { es: "Mapa", ca: "Mapa", en: "Map", cs: "Mapa", fr: "Mappemonde" },
      fact: { es: "En los mapas antiguos, los pintores dibujaban monstruos en los mares que no conocían.", ca: "Als mapes antics, els pintors dibuixaven monstres als mars que no coneixien.", en: "On old maps, painters drew monsters in the seas they did not know yet.", cs: "Na starých mapách kreslili malíři nestvůry do moří, která ještě neznali.", fr: "La mappemonde est une carte du monde entier. Sur les vieilles cartes, on dessinait des monstres dans les mers inconnues." } },
    { letter: "N", emoji: "🪢", item: { es: "Nudo marinero", ca: "Nus mariner", en: "Navigator", cs: "Námořník", fr: "Nœud marin" },
      fact: { es: "Los marineros saben hacer nudos que aguantan muchísimo y se deshacen con un tirón.", ca: "Els mariners saben fer nusos que aguanten moltíssim i es desfan amb una estirada.", en: "The navigator plans the route and ties knots that hold tight but untie with one pull.", cs: "Námořník umí uvázat uzly, které pevně drží a rozvážou se jedním tahem.", fr: "Les marins savent faire des nœuds très solides qui se défont d'un seul coup." } },
    { letter: "O", emoji: "🌊", item: { es: "Océano", ca: "Oceà", en: "Ocean", cs: "Oceán", fr: "Océan" },
      fact: { es: "Los océanos cubren casi todo el planeta. ¡Por eso la Tierra se ve azul desde el espacio!", ca: "Els oceans cobreixen gairebé tot el planeta. Per això la Terra es veu blava des de l'espai!", en: "Oceans cover most of the planet. That is why Earth looks blue from space!", cs: "Oceány pokrývají skoro celou planetu. Proto je Země z vesmíru modrá!", fr: "Les océans couvrent presque toute la planète. C'est pour ça que la Terre paraît bleue depuis l'espace !" } },
    { letter: "P", emoji: "⚓", item: { es: "Puerto", ca: "Port", en: "Port", cs: "Přístav", fr: "Port" },
      fact: { es: "El puerto es la casa de los barcos: allí descansan, se arreglan y cargan comida.", ca: "El port és la casa dels vaixells: allà descansen, s'arreglen i carreguen menjar.", en: "The port is the ships' home: they rest there, get fixed and load up food.", cs: "Přístav je domov lodí: odpočívají tam, opravují se a nakládají jídlo.", fr: "Le port est la maison des bateaux : ils s'y reposent, se réparent et chargent à manger." } },
    { letter: "Q", emoji: "🚢", item: { es: "Quilla", ca: "Quilla", en: "Quest", cs: "Kýl (Q)", fr: "Quille" },
      fact: { es: "La quilla es la columna del barco: va por debajo y lo mantiene derechito.", ca: "La quilla és la columna del vaixell: va per sota i el manté ben dret.", en: "A quest is a big adventure: pirates set off on quests to find hidden treasure.", cs: "Kýl je páteř lodi: vede po spodku a drží ji pěkně rovně.", fr: "La quille est la colonne du bateau : elle passe dessous et le tient bien droit." } },
    { letter: "R", emoji: "🚣", item: { es: "Remo", ca: "Rem", en: "Rowing", cs: "Regata", fr: "Rame" },
      fact: { es: "Cuando no hay viento, se rema. Remando todos juntos, el barco vuela.", ca: "Quan no hi ha vent, es rema. Remant tots junts, el vaixell vola.", en: "When there is no wind, you row. Rowing all together makes the boat fly.", cs: "Regata je závod lodí. Když všichni veslují společně, loď letí jako vítr.", fr: "Quand il n'y a pas de vent, on rame. En ramant tous ensemble, le bateau vole." } },
    { letter: "S", emoji: "🧜‍♀️", item: { es: "Sirena", ca: "Sirena", en: "Siren", cs: "Siréna", fr: "Sirène" },
      fact: { es: "Los marineros contaban que las sirenas cantaban en las rocas. A veces eran manatíes dormilones.", ca: "Els mariners explicaven que les sirenes cantaven a les roques. De vegades eren manatís dormilegues.", en: "Sailors told tales of sirens singing on the rocks. Sometimes they were just sleepy manatees.", cs: "Námořníci vyprávěli, že sirény zpívají na skalách. Někdy to byli jen ospalí kapustňáci.", fr: "Les marins racontaient que les sirènes chantaient sur les rochers. Parfois, c'étaient des lamantins endormis." } },
    { letter: "T", emoji: "💰", item: { es: "Tesoro", ca: "Tresor", en: "Treasure", cs: "Truhla", fr: "Trésor" },
      fact: { es: "El mejor tesoro no siempre brilla: a veces es un amigo, una historia o una merienda.", ca: "El millor tresor no sempre brilla: de vegades és un amic, una història o un berenar.", en: "The best treasure does not always sparkle: sometimes it is a friend, a story or a snack.", cs: "Truhla s pokladem nemusí být plná zlata: někdy je v ní kamarád, příběh nebo svačina.", fr: "Le meilleur trésor ne brille pas toujours : parfois c'est un ami, une histoire ou un goûter." } },
    { letter: "U", emoji: "🌅", item: { es: "Ultramar", ca: "Ultramar", en: "Unknown islands", cs: "Útes", fr: "Ultramarin" },
      fact: { es: "Ultramar son las tierras que están al otro lado del mar, donde empieza la aventura.", ca: "Ultramar són les terres que són a l'altra banda del mar, on comença l'aventura.", en: "Pirates sail toward the horizon looking for unknown islands full of surprises.", cs: "Útes je skála v moři. Hlídka volá: pozor, útes! A kormidelník opatrně zatočí.", fr: "L'ultramarin est le bleu profond de la mer, la couleur préférée des marins." } },
    { letter: "V", emoji: "⛵", item: { es: "Vela", ca: "Vela", en: "Voyage", cs: "Vlna", fr: "Voile" },
      fact: { es: "La vela es como una cometa gigante: el viento la empuja y el barco avanza.", ca: "La vela és com un estel gegant: el vent l'empeny i el vaixell avança.", en: "A voyage is a long trip by sea, with the wind pushing the sails like giant kites.", cs: "Vlny houpají loď nahoru a dolů. Malé lechtají, velké houpají jako houpačka.", fr: "La voile est comme un cerf-volant géant : le vent la pousse et le bateau avance." } },
    { letter: "W", emoji: "🧭", item: { es: "W de la brújula (Oeste)", ca: "W de la brúixola (Oest)", en: "West on the compass", cs: "West (západ) na kompasu", fr: "W de la boussole (Ouest)" },
      fact: { es: "En muchas brújulas, la W significa West: el Oeste, por donde se esconde el sol.", ca: "En moltes brúixoles, la W vol dir West: l'Oest, per on s'amaga el sol.", en: "On the compass, W means West: the side where the sun goes to sleep.", cs: "Na kompasu znamená W West: západ, tam, kde se slunce ukládá ke spánku.", fr: "Sur beaucoup de boussoles, le W veut dire West : l'Ouest, là où le soleil se cache." } },
    { letter: "X", emoji: "❌", item: { es: "X del tesoro", ca: "X del tresor", en: "X marks the spot", cs: "X na mapě", fr: "X du trésor" },
      fact: { es: "En los mapas piratas, la X marca el lugar exacto donde hay que cavar.", ca: "Als mapes pirates, la X marca el lloc exacte on cal cavar.", en: "On pirate maps, the X marks the exact spot where you have to dig.", cs: "Na pirátských mapách označuje X přesné místo, kde se má kopat.", fr: "Sur les cartes de pirates, le X marque l'endroit exact où il faut creuser." } },
    { letter: "Y", emoji: "🎶", item: { es: "Yo-ho-ho", ca: "Yo-ho-ho", en: "Yo-ho-ho", cs: "Yo-ho-ho", fr: "Yo-ho-ho" },
      fact: { es: "Yo-ho-ho es el estribillo de las canciones piratas. Se canta remando o fregando la cubierta.", ca: "Yo-ho-ho és la tornada de les cançons pirates. Es canta remant o fregant la coberta.", en: "Yo-ho-ho is the chorus of pirate songs. You sing it while rowing or scrubbing the deck.", cs: "Yo-ho-ho je refrén pirátských písniček. Zpívá se při veslování nebo drhnutí paluby.", fr: "Yo-ho-ho est le refrain des chansons de pirates. On le chante en ramant ou en frottant le pont." } },
    { letter: "Z", emoji: "💨", item: { es: "Zarpar", ca: "Ziga-zaga", en: "Zigzag sailing", cs: "Zvednout kotvy", fr: "Zéphyr" },
      fact: { es: "Zarpar es levar el ancla y salir a navegar. ¡Que empiece la aventura!", ca: "Àncora amunt! El vaixell surt fent ziga-zaga entre les onades.", en: "Sailing in zigzag lets the ship move forward even when the wind blows from the front.", cs: "Zvednout kotvy znamená vytáhnout kotvu a vyplout. Ať začne dobrodružství!", fr: "Le zéphyr est un petit vent tout doux qui pousse gentiment le bateau." } }
  ],

  /* ---------- FAMOSOS: aventureros del mar ---------- */
  famous: [
    { emoji: "🧔", year: "1717", color: "#37474f", name: { es: "Barbanegra (Edward Teach)", ca: "Barbanegra (Edward Teach)", en: "Blackbeard (Edward Teach)", cs: "Černovous (Edward Teach)", fr: "Barbe-Noire (Edward Teach)" },
      achievement: { es: "El aventurero del mar más famoso. Su barba era tan larga que se hacía trenzas en ella.", ca: "L'aventurer del mar més famós. La seva barba era tan llarga que s'hi feia trenes.", en: "The most famous sea adventurer. His beard was so long that he braided it.", cs: "Nejslavnější mořský dobrodruh. Vousy měl tak dlouhé, že si z nich pletl copánky.", fr: "L'aventurier des mers le plus célèbre. Sa barbe était si longue qu'il y faisait des tresses." },
      quote: { es: "¡Mi barba guarda un mapa secreto... y unas migas de galleta!", ca: "La meva barba guarda un mapa secret... i unes molles de galeta!", en: "My beard hides a secret map... and a few biscuit crumbs!", cs: "V mých vousech je schovaná tajná mapa... a pár drobků od sušenek!", fr: "Ma barbe cache une carte secrète... et quelques miettes de biscuit !" } },
    { emoji: "👩‍🦰", year: "1720", color: "#c62828", name: { es: "Anne Bonny", ca: "Anne Bonny", en: "Anne Bonny", cs: "Anne Bonnyová", fr: "Anne Bonny" },
      achievement: { es: "Una de las aventureras del mar más valientes del Caribe. Nada le daba miedo.", ca: "Una de les aventureres del mar més valentes del Carib. Res no li feia por.", en: "One of the bravest sea adventurers of the Caribbean. Nothing scared her.", cs: "Jedna z nejodvážnějších mořských dobrodružek Karibiku. Ničeho se nebála.", fr: "L'une des aventurières des mers les plus courageuses des Caraïbes. Rien ne lui faisait peur." },
      quote: { es: "¿Miedo al mar? ¡El mar me pide permiso a mí!", ca: "Por del mar? El mar em demana permís a mi!", en: "Scared of the sea? The sea asks ME for permission!", cs: "Bát se moře? Moře se ptá o dovolení mě!", fr: "Peur de la mer ? C'est la mer qui me demande la permission !" } },
    { emoji: "🎭", year: "1720", color: "#6a1b9a", name: { es: "Mary Read", ca: "Mary Read", en: "Mary Read", cs: "Mary Readová", fr: "Mary Read" },
      achievement: { es: "Se vistió de marinero para poder navegar, cuando no dejaban subir a las chicas a los barcos.", ca: "Es va vestir de mariner per poder navegar, quan no deixaven pujar les noies als vaixells.", en: "She dressed as a sailor so she could go to sea, back when girls were not allowed on ships.", cs: "Oblékla se za námořníka, aby mohla na moře, v dobách, kdy dívky na lodě nesměly.", fr: "Elle s'est habillée en marin pour pouvoir naviguer, à l'époque où les filles n'avaient pas le droit de monter sur les bateaux." },
      quote: { es: "En el mar no importa quién eres, sino cómo remas.", ca: "Al mar no importa qui ets, sinó com remes.", en: "At sea it does not matter who you are, but how you row.", cs: "Na moři nezáleží na tom, kdo jsi, ale jak vesluješ.", fr: "En mer, peu importe qui tu es : ce qui compte, c'est comment tu rames." } },
    { emoji: "🌍", year: "1580", color: "#00838f", name: { es: "Francis Drake", ca: "Francis Drake", en: "Francis Drake", cs: "Francis Drake", fr: "Francis Drake" },
      achievement: { es: "Dio la vuelta al mundo entero en barco, de los primeros de la historia.", ca: "Va fer la volta al món sencer en vaixell, dels primers de la història.", en: "He sailed all the way around the world, one of the first in history.", cs: "Obeplul celý svět, jako jeden z prvních v dějinách.", fr: "Il a fait le tour du monde entier en bateau, l'un des premiers de l'histoire." },
      quote: { es: "El mundo es redondo. ¡Lo comprobé con mi propio barco!", ca: "El món és rodó. Ho vaig comprovar amb el meu propi vaixell!", en: "The world is round. I checked it with my own ship!", cs: "Svět je kulatý. Ověřil jsem si to vlastní lodí!", fr: "Le monde est rond. Je l'ai vérifié avec mon propre bateau !" } },
    { emoji: "👑", year: "1807", color: "#ad1457", name: { es: "Ching Shih", ca: "Ching Shih", en: "Ching Shih", cs: "Ching Shih", fr: "Ching Shih" },
      achievement: { es: "La pirata más poderosa de la historia: mandaba sobre cientos de barcos en los mares de China.", ca: "La pirata més poderosa de la història: manava sobre centenars de vaixells als mars de la Xina.", en: "The most powerful pirate in history: she commanded hundreds of ships on the seas of China.", cs: "Nejmocnější pirátka v dějinách: velela stovkám lodí na mořích Číny.", fr: "La pirate la plus puissante de l'histoire : elle commandait des centaines de bateaux sur les mers de Chine." },
      quote: { es: "Un buen capitán cuida primero de su tripulación.", ca: "Un bon capità té cura primer de la seva tripulació.", en: "A good captain takes care of the crew first.", cs: "Dobrý kapitán se nejdřív stará o svou posádku.", fr: "Un bon capitaine prend d'abord soin de son équipage." } },
    { emoji: "🏴‍☠️", year: "1719", color: "#f57c00", name: { es: "Calico Jack", ca: "Calico Jack", en: "Calico Jack", cs: "Calico Jack", fr: "Calico Jack" },
      achievement: { es: "Diseñó la bandera pirata más famosa y le encantaba vestir con telas de mil colores.", ca: "Va dissenyar la bandera pirata més famosa i li encantava vestir amb teles de mil colors.", en: "He designed the most famous pirate flag and loved wearing clothes of a thousand colours.", cs: "Navrhl nejslavnější pirátskou vlajku a hrozně rád nosil látky tisíce barev.", fr: "Il a dessiné le drapeau pirate le plus célèbre et adorait porter des tissus de mille couleurs." },
      quote: { es: "¡Un pañuelo de colores alegra cualquier tormenta!", ca: "Un mocador de colors alegra qualsevol tempesta!", en: "A colourful scarf cheers up any storm!", cs: "Barevný šátek rozveselí každou bouřku!", fr: "Un foulard coloré égaye n'importe quelle tempête !" } }
  ],

  childDream: {
    girl: { es: "Capitana de los siete mares", ca: "Capitana dels set mars", en: "Captain of the seven seas", cs: "Kapitánka sedmi moří", fr: "Capitaine des sept mers" },
    boy: { es: "Capitán de los siete mares", ca: "Capità dels set mars", en: "Captain of the seven seas", cs: "Kapitán sedmi moří", fr: "Capitaine des sept mers" },
    kid: { es: "Peque pirata de los siete mares", ca: "Petit pirata dels set mars", en: "Little pirate of the seven seas", cs: "Malý pirát sedmi moří", fr: "Petit pirate des sept mers" }
  },
  childQuote: { es: "Cuando sea mayor tendré un barco con velas doradas. ¡Y os llevaré a todos a buscar tesoros!", ca: "Quan sigui gran tindré un vaixell amb veles daurades. I us portaré a tots a buscar tresors!", en: "When I grow up I will have a ship with golden sails. And I will take you all treasure hunting!", cs: "Až vyrostu, budu mít loď se zlatými plachtami. A vezmu vás všechny hledat poklady!", fr: "Quand je serai grand, j'aurai un bateau aux voiles dorées. Et je vous emmènerai tous chercher des trésors !" },

  /* ---------- MATES ---------- */
  mathEmojis: ["🪙", "💎", "🦜", "⚓", "🗺️", "🏴‍☠️"],

  /* ---------- CONSTRUCTOR: el barco pirata ---------- */
  builder: {
    title: { es: "¡Construye tu barco pirata!", ca: "Construeix el teu vaixell pirata!", en: "Build your pirate ship!", cs: "Postav si pirátskou loď!", fr: "Construis ton bateau pirate !" },
    thing: { es: "barco pirata", ca: "vaixell pirata", en: "pirate ship", cs: "pirátská loď", fr: "bateau pirate" },
    parts: [
      { id: "casco", label: { es: "El casco", ca: "El buc", en: "The hull", cs: "Trup", fr: "La coque" },
        options: [{ id: "roble", v: "#8d6e63" }, { id: "caoba", v: "#6d4c41" }, { id: "rojo", v: "#c62828" }, { id: "azul", v: "#1565c0" }] },
      { id: "vela", label: { es: "La vela", ca: "La vela", en: "The sail", cs: "Plachta", fr: "La voile" },
        options: [{ id: "blanca", v: "blanca", icon: "⬜" }, { id: "rayas", v: "rayas", icon: "🟥" }, { id: "negra", v: "negra", icon: "⬛" }] },
      { id: "bandera", label: { es: "La bandera", ca: "La bandera", en: "The flag", cs: "Vlajka", fr: "Le drapeau" },
        options: [{ id: "calavera", v: "calavera", icon: "🏴‍☠️" }, { id: "loro", v: "loro", icon: "🦜" }, { id: "corazon", v: "corazon", icon: "❤️" }] },
      { id: "mascaron", label: { es: "El mascarón de proa", ca: "El mascaró de proa", en: "The figurehead", cs: "Figura na přídi", fr: "La figure de proue" },
        options: [{ id: "sirena", v: "sirena", icon: "🧜‍♀️" }, { id: "dragon", v: "dragon", icon: "🐉" }, { id: "delfin", v: "delfin", icon: "🐬" }] }
    ],
    svg(sel) {
      const hull = sel.casco || "#8d6e63";
      // la vela: blanca, de rayas o negra
      let sail = "";
      const sailPath = "M67 18 Q32 30 38 58 L67 62 Z";
      if (sel.vela === "rayas") {
        sail = `<path d="${sailPath}" fill="#fff" stroke="#cfd8dc" stroke-width="1.4"/>
          <path d="M67 26 Q46 32 42 42 L67 44 Z" fill="#e53935"/>
          <path d="M67 50 Q44 50 40 54 L67 58 Z" fill="#e53935"/>`;
      } else if (sel.vela === "negra") {
        sail = `<path d="${sailPath}" fill="#37474f" stroke="#eceff1" stroke-width="1.6"/>
          <circle cx="52" cy="40" r="5" fill="#eceff1"/>`;
      } else {
        sail = `<path d="${sailPath}" fill="#fff" stroke="#cfd8dc" stroke-width="1.4"/>
          <path d="M67 24 Q46 32 42 52" fill="none" stroke="#eceff1" stroke-width="1.6"/>`;
      }
      // la bandera de lo alto del mástil: calavera simpática, loro o corazón dibujados
      let flagSym = `<circle cx="78.5" cy="8.8" r="3.2" fill="#fff"/>
        <circle cx="77.3" cy="8.2" r=".8" fill="#263238"/><circle cx="79.7" cy="8.2" r=".8" fill="#263238"/>
        <path d="M77.4 10.5 Q78.5 11.5 79.6 10.5" stroke="#263238" stroke-width=".8" fill="none" stroke-linecap="round"/>`;
      if (sel.bandera === "loro") flagSym = `<ellipse cx="78.6" cy="9.8" rx="1.9" ry="2.3" fill="#66bb6a"/>
        <path d="M78 11.8 L77 13.4 L79.2 12.4 Z" fill="#42a5f5"/>
        <circle cx="79.5" cy="7.3" r="1.6" fill="#ef5350"/>
        <path d="M81 7 Q82.6 7.5 81.2 8.4 Z" fill="#ffca28"/>
        <circle cx="79.9" cy="7" r=".4" fill="#263238"/>`;
      if (sel.bandera === "corazon") flagSym = `<path d="M78.8 7.6 C77.6 6.1 75.4 7.7 77 9.5 L78.8 11.3 L80.6 9.5 C82.2 7.7 80 6.1 78.8 7.6 Z" fill="#ef5350"/>`;
      const flag = `<path d="M71 4 L96 9 L71 15 Z" fill="#263238" stroke="#fff" stroke-width="1"/>${flagSym}`;
      // el mascarón de proa: siluetas sencillas (cola de sirena, cabecita de dragón, delfín)
      let masc = `<path d="M109 73 Q116 70 115.5 62 L118.5 55.5 Q116 57.5 114.8 58.2 Q114 55.8 111.5 54.8 L113.5 60.5 Q112.5 67 109 73 Z" fill="#26a69a" stroke="#fff" stroke-width="1"/>
        <path d="M111.5 66 q2.2 -1.2 3.4 .2 M111 69.5 q2 -1.2 3.2 0" stroke="rgba(255,255,255,.55)" stroke-width="1" fill="none"/>`;
      if (sel.mascaron === "dragon") masc = `<path d="M111 56.5 L109.5 51.5 L114 55.2 Z" fill="#66bb6a"/>
        <path d="M108 72 L108 62 Q108 56.5 114 56 L118 57 L122 59.5 L117.5 61 L120.5 64 L115 63.5 Q116 66 113.5 67 L113 72 Z" fill="#66bb6a" stroke="#fff" stroke-width="1"/>
        <circle cx="114.5" cy="59.5" r="1" fill="#263238"/>`;
      if (sel.mascaron === "delfin") masc = `<path d="M113.5 57.8 L112.5 53 L116.5 56.6 Z" fill="#4fc3f7"/>
        <path d="M107 71 Q107 60 116 57.5 Q120.5 56.8 122 59.5 Q118.5 59.8 116.5 61.5 Q118.5 66 114.5 70 Q112 66.5 107 71 Z" fill="#4fc3f7" stroke="#fff" stroke-width="1"/>
        <circle cx="118.7" cy="59.3" r=".8" fill="#263238"/>`;
      return `<svg viewBox="0 0 140 120" width="215" height="184">
        <g>
          <animateTransform attributeName="transform" type="translate" values="0 0; 0 2.5; 0 0" dur="3s" repeatCount="indefinite"/>
          <rect x="68" y="8" width="3.5" height="66" rx="1.5" fill="#4e342e"/>
          ${sail}
          ${flag}
          <path d="M24 72 L116 72 L104 94 Q70 102 36 94 Z" fill="${hull}" stroke="#fff" stroke-width="1.5"/>
          <rect x="24" y="66" width="92" height="7" rx="3" fill="${hull}" stroke="#fff" stroke-width="1.2"/>
          <circle cx="50" cy="83" r="3.4" fill="#ffe082" stroke="#fff" stroke-width="1.2"/>
          <circle cx="70" cy="84" r="3.4" fill="#ffe082" stroke="#fff" stroke-width="1.2"/>
          <circle cx="90" cy="83" r="3.4" fill="#ffe082" stroke="#fff" stroke-width="1.2"/>
          ${masc}
        </g>
        <path d="M0 98 Q12 91 24 98 T48 98 T72 98 T96 98 T120 98 T144 98 L140 120 L0 120 Z" fill="#29b6f6" opacity=".9"/>
        <path d="M0 106 Q14 100 28 106 T56 106 T84 106 T112 106 T140 106 L140 120 L0 120 Z" fill="#0288d1"/>
        <path d="M10 98 q8 -4 16 0 M60 99 q8 -4 16 0 M104 98 q8 -4 16 0" stroke="rgba(255,255,255,.7)" stroke-width="2" fill="none" stroke-linecap="round"/>
      </svg>`;
    }
  }
};
