"use strict";
/* ============================================================
   Registro de aventuras + contenido del ESPACIO (parte A):
   quiz, alfabeto, famosos, mates y constructor.
   ============================================================ */

const THEMES = {
  espacio: {
    emoji: "🚀", ready: true,
    grad: "linear-gradient(150deg,#283593,#7b1fa2)",
    name: { es: "Espacio", ca: "Espai", en: "Space", cs: "Vesmír", fr: "Espace" }
  },
  dinos: {
    emoji: "🦖", ready: false,
    grad: "linear-gradient(150deg,#2e7d32,#8d6e63)",
    name: { es: "Dinosaurios", ca: "Dinosaures", en: "Dinosaurs", cs: "Dinosauři", fr: "Dinosaures" }
  },
  cuerpo: {
    emoji: "❤️", ready: false,
    grad: "linear-gradient(150deg,#c62828,#ef6c00)",
    name: { es: "Cuerpo humano", ca: "Cos humà", en: "Human body", cs: "Lidské tělo", fr: "Corps humain" }
  },
  tierramedia: {
    emoji: "🧙", ready: false,
    grad: "linear-gradient(150deg,#33691e,#4e342e)",
    name: { es: "Tierra Media", ca: "Terra Mitjana", en: "Middle-earth", cs: "Středozem", fr: "Terre du Milieu" }
  },
  oceano: {
    emoji: "🐋", ready: false,
    grad: "linear-gradient(150deg,#01579b,#00838f)",
    name: { es: "Océano", ca: "Oceà", en: "Ocean", cs: "Oceán", fr: "Océan" }
  },
  animales: {
    emoji: "🦁", ready: false,
    grad: "linear-gradient(150deg,#ef6c00,#33691e)",
    name: { es: "Animales del mundo", ca: "Animals del món", en: "World animals", cs: "Zvířata světa", fr: "Animaux du monde" }
  },
  musica: {
    emoji: "🎻", ready: false,
    grad: "linear-gradient(150deg,#6a1b9a,#d81b60)",
    name: { es: "Música", ca: "Música", en: "Music", cs: "Hudba", fr: "Musique" }
  },
  increibles: {
    emoji: "🔭", ready: false,
    grad: "linear-gradient(150deg,#ad1457,#4527a0)",
    name: { es: "Mujeres increíbles", ca: "Dones increïbles", en: "Amazing women", cs: "Úžasné ženy", fr: "Femmes incroyables" }
  }
};

THEMES.espacio.content = {

  statusPlace: { es: "Conectado desde la Galaxia Arcoíris", ca: "Connectat des de la Galàxia Arc de Sant Martí", en: "Connected from the Rainbow Galaxy", cs: "Připojeno z Duhové galaxie", fr: "Connecté depuis la Galaxie Arc-en-ciel" },
  welcome: { es: "¡Rumbo a las estrellas, {name}! Tres, dos, uno... ¡despegamos!", ca: "Rumb a les estrelles, {name}! Tres, dos, un... enlairem!", en: "Off to the stars, {name}! Three, two, one... lift-off!", cs: "Vzhůru ke hvězdám, {name}! Tři, dva, jedna... start!", fr: "En route vers les étoiles, {name} ! Trois, deux, un... décollage !" },

  /* ---------- QUIZ: 10 preguntas ---------- */
  quiz: [
    { emoji: "🪐",
      q: { es: "¿Cuál es el planeta más grande?", ca: "Quin és el planeta més gran?", en: "Which is the biggest planet?", cs: "Která planeta je největší?", fr: "Quelle est la plus grande planète ?" },
      options: [
        { es: "Marte", ca: "Mart", en: "Mars", cs: "Mars", fr: "Mars" },
        { es: "Júpiter", ca: "Júpiter", en: "Jupiter", cs: "Jupiter", fr: "Jupiter" },
        { es: "Saturno", ca: "Saturn", en: "Saturn", cs: "Saturn", fr: "Saturne" },
        { es: "Venus", ca: "Venus", en: "Venus", cs: "Venuše", fr: "Vénus" }],
      answer: 1,
      explanation: { es: "¡Júpiter es enorme! Dentro cabrían más de mil Tierras.", ca: "Júpiter és enorme! A dins hi cabrien més de mil Terres.", en: "Jupiter is huge! More than a thousand Earths would fit inside.", cs: "Jupiter je obrovský! Vešlo by se do něj víc než tisíc Zemí.", fr: "Jupiter est énorme ! Plus de mille Terres tiendraient dedans." } },
    { emoji: "💍",
      q: { es: "¿Qué planeta tiene unos anillos famosos?", ca: "Quin planeta té uns anells famosos?", en: "Which planet has famous rings?", cs: "Která planeta má slavné prstence?", fr: "Quelle planète a des anneaux célèbres ?" },
      options: [
        { es: "Mercurio", ca: "Mercuri", en: "Mercury", cs: "Merkur", fr: "Mercure" },
        { es: "La Tierra", ca: "La Terra", en: "Earth", cs: "Země", fr: "La Terre" },
        { es: "Saturno", ca: "Saturn", en: "Saturn", cs: "Saturn", fr: "Saturne" },
        { es: "Marte", ca: "Mart", en: "Mars", cs: "Mars", fr: "Mars" }],
      answer: 2,
      explanation: { es: "Los anillos de Saturno están hechos de trocitos de hielo y roca que brillan al sol.", ca: "Els anells de Saturn estan fets de trossets de gel i roca que brillen al sol.", en: "Saturn's rings are made of little pieces of ice and rock that sparkle in the sunlight.", cs: "Prstence Saturnu jsou z kousků ledu a kamení, které se třpytí na slunci.", fr: "Les anneaux de Saturne sont faits de petits morceaux de glace et de roche qui brillent au soleil." } },
    { emoji: "☀️",
      q: { es: "¿Cómo se llama nuestra estrella?", ca: "Com es diu la nostra estrella?", en: "What is our star called?", cs: "Jak se jmenuje naše hvězda?", fr: "Comment s'appelle notre étoile ?" },
      options: [
        { es: "La Luna", ca: "La Lluna", en: "The Moon", cs: "Měsíc", fr: "La Lune" },
        { es: "El Sol", ca: "El Sol", en: "The Sun", cs: "Slunce", fr: "Le Soleil" },
        { es: "Júpiter", ca: "Júpiter", en: "Jupiter", cs: "Jupiter", fr: "Jupiter" },
        { es: "Una nube", ca: "Un núvol", en: "A cloud", cs: "Mrak", fr: "Un nuage" }],
      answer: 1,
      explanation: { es: "El Sol es una estrella. Parece gigante porque es la que tenemos más cerca.", ca: "El Sol és una estrella. Sembla gegant perquè és la que tenim més a prop.", en: "The Sun is a star. It looks giant because it is the closest one to us.", cs: "Slunce je hvězda. Vypadá obrovské, protože je k nám nejblíž.", fr: "Le Soleil est une étoile. Il paraît géant parce que c'est la plus proche de nous." } },
    { emoji: "🔴",
      q: { es: "¿De qué color se ve Marte?", ca: "De quin color es veu Mart?", en: "What colour does Mars look?", cs: "Jakou barvu má Mars?", fr: "De quelle couleur paraît Mars ?" },
      options: [
        { es: "Azul", ca: "Blau", en: "Blue", cs: "Modrou", fr: "Bleu" },
        { es: "Verde", ca: "Verd", en: "Green", cs: "Zelenou", fr: "Vert" },
        { es: "Rojo", ca: "Vermell", en: "Red", cs: "Červenou", fr: "Rouge" },
        { es: "Amarillo", ca: "Groc", en: "Yellow", cs: "Žlutou", fr: "Jaune" }],
      answer: 2,
      explanation: { es: "Marte es rojizo porque su arena tiene mucho hierro oxidado, ¡como el metal viejo!", ca: "Mart és vermellós perquè la seva sorra té molt ferro rovellat, com el metall vell!", en: "Mars looks red because its sand is full of rusty iron, like old metal!", cs: "Mars je načervenalý, protože jeho písek obsahuje hodně zrezivělého železa, jako staré kovy!", fr: "Mars est rouge parce que son sable contient beaucoup de fer rouillé, comme le vieux métal !" } },
    { emoji: "🌙",
      q: { es: "¿Qué gira alrededor de la Tierra?", ca: "Què gira al voltant de la Terra?", en: "What goes around the Earth?", cs: "Co obíhá kolem Země?", fr: "Qu'est-ce qui tourne autour de la Terre ?" },
      options: [
        { es: "El Sol", ca: "El Sol", en: "The Sun", cs: "Slunce", fr: "Le Soleil" },
        { es: "La Luna", ca: "La Lluna", en: "The Moon", cs: "Měsíc", fr: "La Lune" },
        { es: "Saturno", ca: "Saturn", en: "Saturn", cs: "Saturn", fr: "Saturne" },
        { es: "Un dragón", ca: "Un drac", en: "A dragon", cs: "Drak", fr: "Un dragon" }],
      answer: 1,
      explanation: { es: "La Luna da una vuelta a la Tierra cada 27 días. ¡Es nuestra compañera de viaje!", ca: "La Lluna fa una volta a la Terra cada 27 dies. És la nostra companya de viatge!", en: "The Moon goes around the Earth every 27 days. She is our travel buddy!", cs: "Měsíc oběhne Zemi každých 27 dní. Je to náš parťák na cestách!", fr: "La Lune fait le tour de la Terre tous les 27 jours. C'est notre compagne de voyage !" } },
    { emoji: "🔢",
      q: { es: "¿Cuántos planetas hay en el Sistema Solar?", ca: "Quants planetes hi ha al Sistema Solar?", en: "How many planets are there in the Solar System?", cs: "Kolik planet je ve sluneční soustavě?", fr: "Combien de planètes y a-t-il dans le Système solaire ?" },
      options: [
        { es: "5", ca: "5", en: "5", cs: "5", fr: "5" },
        { es: "8", ca: "8", en: "8", cs: "8", fr: "8" },
        { es: "12", ca: "12", en: "12", cs: "12", fr: "12" },
        { es: "100", ca: "100", en: "100", cs: "100", fr: "100" }],
      answer: 1,
      explanation: { es: "Son 8: Mercurio, Venus, Tierra, Marte, Júpiter, Saturno, Urano y Neptuno. Plutón es un planeta enano.", ca: "Són 8: Mercuri, Venus, Terra, Mart, Júpiter, Saturn, Urà i Neptú. Plutó és un planeta nan.", en: "There are 8: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune. Pluto is a dwarf planet.", cs: "Je jich 8: Merkur, Venuše, Země, Mars, Jupiter, Saturn, Uran a Neptun. Pluto je trpasličí planeta.", fr: "Il y en a 8 : Mercure, Vénus, la Terre, Mars, Jupiter, Saturne, Uranus et Neptune. Pluton est une planète naine." } },
    { emoji: "👩‍🚀",
      q: { es: "¿Qué necesita un astronauta para respirar en el espacio?", ca: "Què necessita un astronauta per respirar a l'espai?", en: "What does an astronaut need to breathe in space?", cs: "Co potřebuje astronaut, aby mohl ve vesmíru dýchat?", fr: "De quoi un astronaute a-t-il besoin pour respirer dans l'espace ?" },
      options: [
        { es: "Un paraguas", ca: "Un paraigua", en: "An umbrella", cs: "Deštník", fr: "Un parapluie" },
        { es: "Un traje espacial", ca: "Un vestit espacial", en: "A space suit", cs: "Skafandr", fr: "Une combinaison spatiale" },
        { es: "Una bufanda", ca: "Una bufanda", en: "A scarf", cs: "Šálu", fr: "Une écharpe" },
        { es: "Nada", ca: "Res", en: "Nothing", cs: "Nic", fr: "Rien" }],
      answer: 1,
      explanation: { es: "En el espacio no hay aire, así que el traje lleva su propio aire para respirar.", ca: "A l'espai no hi ha aire, així que el vestit porta el seu propi aire per respirar.", en: "There is no air in space, so the suit carries its own air to breathe.", cs: "Ve vesmíru není vzduch, a tak má skafandr svůj vlastní vzduch na dýchání.", fr: "Il n'y a pas d'air dans l'espace, alors la combinaison emporte son propre air pour respirer." } },
    { emoji: "🥇",
      q: { es: "¿Cuál es el planeta más cercano al Sol?", ca: "Quin és el planeta més proper al Sol?", en: "Which planet is closest to the Sun?", cs: "Která planeta je nejblíž Slunci?", fr: "Quelle planète est la plus proche du Soleil ?" },
      options: [
        { es: "Mercurio", ca: "Mercuri", en: "Mercury", cs: "Merkur", fr: "Mercure" },
        { es: "La Tierra", ca: "La Terra", en: "Earth", cs: "Země", fr: "La Terre" },
        { es: "Neptuno", ca: "Neptú", en: "Neptune", cs: "Neptun", fr: "Neptune" },
        { es: "Saturno", ca: "Saturn", en: "Saturn", cs: "Saturn", fr: "Saturne" }],
      answer: 0,
      explanation: { es: "Mercurio es el primero de la fila. Por el día hace muchísimo calor y por la noche muchísimo frío.", ca: "Mercuri és el primer de la fila. De dia hi fa moltíssima calor i de nit moltíssim fred.", en: "Mercury is first in line. It gets super hot in the day and super cold at night.", cs: "Merkur je první v řadě. Ve dne je tam obrovské horko a v noci obrovská zima.", fr: "Mercure est le premier de la file. Il y fait très chaud le jour et très froid la nuit." } },
    { emoji: "☄️",
      q: { es: "¿Qué es una estrella fugaz?", ca: "Què és un estel fugaç?", en: "What is a shooting star?", cs: "Co je padající hvězda?", fr: "Qu'est-ce qu'une étoile filante ?" },
      options: [
        { es: "Una estrella que se cae", ca: "Una estrella que cau", en: "A star falling down", cs: "Hvězda, která spadla", fr: "Une étoile qui tombe" },
        { es: "Una piedrecita que se quema en el cielo", ca: "Una pedreta que es crema al cel", en: "A little rock burning up in the sky", cs: "Kamínek, který shoří na obloze", fr: "Un petit caillou qui brûle dans le ciel" },
        { es: "Un avión", ca: "Un avió", en: "An airplane", cs: "Letadlo", fr: "Un avion" },
        { es: "Un pájaro brillante", ca: "Un ocell brillant", en: "A shiny bird", cs: "Zářivý pták", fr: "Un oiseau brillant" }],
      answer: 1,
      explanation: { es: "Es una piedrecita del espacio que se quema al entrar en el cielo de la Tierra. ¡Pide un deseo!", ca: "És una pedreta de l'espai que es crema en entrar al cel de la Terra. Demana un desig!", en: "It is a little space rock that burns up when it enters Earth's sky. Make a wish!", cs: "Je to kamínek z vesmíru, který shoří, když vletí do nebe nad Zemí. Něco si přej!", fr: "C'est un petit caillou de l'espace qui brûle en entrant dans le ciel de la Terre. Fais un vœu !" } },
    { emoji: "🌍",
      q: { es: "¿En qué planeta vivimos?", ca: "A quin planeta vivim?", en: "Which planet do we live on?", cs: "Na které planetě žijeme?", fr: "Sur quelle planète vivons-nous ?" },
      options: [
        { es: "Marte", ca: "Mart", en: "Mars", cs: "Mars", fr: "Mars" },
        { es: "Venus", ca: "Venus", en: "Venus", cs: "Venuše", fr: "Vénus" },
        { es: "La Tierra", ca: "La Terra", en: "Earth", cs: "Země", fr: "La Terre" },
        { es: "Plutón", ca: "Plutó", en: "Pluto", cs: "Pluto", fr: "Pluton" }],
      answer: 2,
      explanation: { es: "Vivimos en la Tierra, el planeta azul. Es el único que conocemos con mares, bosques y niños.", ca: "Vivim a la Terra, el planeta blau. És l'únic que coneixem amb mars, boscos i nens.", en: "We live on Earth, the blue planet. It is the only one we know with seas, forests and kids.", cs: "Žijeme na Zemi, modré planetě. Je to jediná planeta, kterou známe, s moři, lesy a dětmi.", fr: "Nous vivons sur la Terre, la planète bleue. C'est la seule que nous connaissons avec des mers, des forêts et des enfants." } },
    { emoji: "🚀",
      q: { es: "¿En qué vehículo viajan los astronautas al espacio?", ca: "Amb quin vehicle viatgen els astronautes a l'espai?", en: "Which vehicle do astronauts travel to space in?", cs: "Čím cestují astronauti do vesmíru?", fr: "Avec quel véhicule les astronautes vont-ils dans l'espace ?" },
      options: [
        { es: "Un barco", ca: "Un vaixell", en: "A boat", cs: "Lodí", fr: "Un bateau" },
        { es: "Una bicicleta", ca: "Una bicicleta", en: "A bicycle", cs: "Na kole", fr: "Un vélo" },
        { es: "Un tren", ca: "Un tren", en: "A train", cs: "Vlakem", fr: "Un train" },
        { es: "Un cohete", ca: "Un coet", en: "A rocket", cs: "Raketou", fr: "Une fusée" }],
      answer: 3,
      explanation: { es: "El cohete sube rapidísimo: en menos de diez minutos ya está en el espacio.", ca: "El coet puja rapidíssim: en menys de deu minuts ja és a l'espai.", en: "A rocket climbs super fast: in less than ten minutes it is already in space.", cs: "Raketa stoupá ohromně rychle: za necelých deset minut už je ve vesmíru.", fr: "La fusée monte très vite : en moins de dix minutes, elle est déjà dans l'espace." } },
    { emoji: "⭐",
      q: { es: "¿Cuándo podemos ver las estrellas en el cielo?", ca: "Quan podem veure les estrelles al cel?", en: "When can we see the stars in the sky?", cs: "Kdy můžeme na obloze vidět hvězdy?", fr: "Quand pouvons-nous voir les étoiles dans le ciel ?" },
      options: [
        { es: "Por la noche", ca: "A la nit", en: "At night", cs: "V noci", fr: "La nuit" },
        { es: "Solo en verano", ca: "Només a l'estiu", en: "Only in summer", cs: "Jen v létě", fr: "Seulement en été" },
        { es: "Al mediodía", ca: "Al migdia", en: "At midday", cs: "V poledne", fr: "À midi" },
        { es: "Nunca", ca: "Mai", en: "Never", cs: "Nikdy", fr: "Jamais" }],
      answer: 0,
      explanation: { es: "Las estrellas están ahí siempre, pero de día la luz del Sol las esconde.", ca: "Les estrelles hi són sempre, però de dia la llum del Sol les amaga.", en: "The stars are always there, but in the daytime the Sun's light hides them.", cs: "Hvězdy tam jsou pořád, ale ve dne je schová sluneční světlo.", fr: "Les étoiles sont toujours là, mais le jour la lumière du Soleil les cache." } },
    { emoji: "🔥",
      q: { es: "¿Cuál es el planeta más caliente?", ca: "Quin és el planeta més calent?", en: "Which is the hottest planet?", cs: "Která planeta je nejteplejší?", fr: "Quelle est la planète la plus chaude ?" },
      options: [
        { es: "Mercurio", ca: "Mercuri", en: "Mercury", cs: "Merkur", fr: "Mercure" },
        { es: "Neptuno", ca: "Neptú", en: "Neptune", cs: "Neptun", fr: "Neptune" },
        { es: "Venus", ca: "Venus", en: "Venus", cs: "Venuše", fr: "Vénus" },
        { es: "La Tierra", ca: "La Terra", en: "Earth", cs: "Země", fr: "La Terre" }],
      answer: 2,
      explanation: { es: "¡Sorpresa! Es Venus: sus nubes espesas guardan el calor como una manta gigante.", ca: "Sorpresa! És Venus: els seus núvols espessos guarden la calor com una manta gegant.", en: "Surprise! It is Venus: its thick clouds trap the heat like a giant blanket.", cs: "Překvapení! Je to Venuše: její husté mraky drží teplo jako obří peřina.", fr: "Surprise ! C'est Vénus : ses nuages épais gardent la chaleur comme une couverture géante." } },
    { emoji: "🌌",
      q: { es: "¿Cómo se llama nuestra galaxia?", ca: "Com es diu la nostra galàxia?", en: "What is our galaxy called?", cs: "Jak se jmenuje naše galaxie?", fr: "Comment s'appelle notre galaxie ?" },
      options: [
        { es: "Andrómeda", ca: "Andròmeda", en: "Andromeda", cs: "Andromeda", fr: "Andromède" },
        { es: "La Vía Láctea", ca: "La Via Làctia", en: "The Milky Way", cs: "Mléčná dráha", fr: "La Voie lactée" },
        { es: "La Nube Dormilona", ca: "El Núvol Dormilega", en: "The Sleepy Cloud", cs: "Ospalý mráček", fr: "Le Nuage endormi" },
        { es: "Saturno", ca: "Saturn", en: "Saturn", cs: "Saturn", fr: "Saturne" }],
      answer: 1,
      explanation: { es: "Vivimos en la Vía Láctea, una familia gigante con miles de millones de estrellas.", ca: "Vivim a la Via Làctia, una família gegant amb milers de milions d'estrelles.", en: "We live in the Milky Way, a giant family of billions of stars.", cs: "Žijeme v Mléčné dráze, obří rodině s miliardami hvězd.", fr: "Nous vivons dans la Voie lactée, une famille géante de milliards d'étoiles." } },
    { emoji: "🐕",
      q: { es: "¿Qué animal viajó al espacio antes que las personas?", ca: "Quin animal va viatjar a l'espai abans que les persones?", en: "Which animal travelled to space before people?", cs: "Které zvíře letělo do vesmíru dřív než lidé?", fr: "Quel animal a voyagé dans l'espace avant les humains ?" },
      options: [
        { es: "La perrita Laika", ca: "La gosseta Laika", en: "Laika the dog", cs: "Fenka Lajka", fr: "La chienne Laïka" },
        { es: "Un elefante", ca: "Un elefant", en: "An elephant", cs: "Slon", fr: "Un éléphant" },
        { es: "Un pingüino", ca: "Un pingüí", en: "A penguin", cs: "Tučňák", fr: "Un pingouin" },
        { es: "Una jirafa", ca: "Una girafa", en: "A giraffe", cs: "Žirafa", fr: "Une girafe" }],
      answer: 0,
      explanation: { es: "La perrita Laika voló en 1957, cuatro años antes que el primer astronauta.", ca: "La gosseta Laika va volar el 1957, quatre anys abans que el primer astronauta.", en: "Laika the little dog flew in 1957, four years before the first astronaut.", cs: "Fenka Lajka letěla v roce 1957, čtyři roky před prvním kosmonautem.", fr: "La petite chienne Laïka a volé en 1957, quatre ans avant le premier astronaute." } }
  ],

  /* ---------- ALFABETO: 26 letras ---------- */
  alphabet: [
    { letter: "A", emoji: "☄️", item: { es: "Asteroide", ca: "Asteroide", en: "Asteroid", cs: "Asteroid", fr: "Astéroïde" },
      fact: { es: "Los asteroides son rocas que viajan por el espacio.", ca: "Els asteroides són roques que viatgen per l'espai.", en: "Asteroids are rocks that travel through space.", cs: "Asteroidy jsou kameny, které cestují vesmírem.", fr: "Les astéroïdes sont des roches qui voyagent dans l'espace." } },
    { letter: "B", emoji: "💥", item: { es: "Big Bang", ca: "Big Bang", en: "Big Bang", cs: "Big Bang", fr: "Big Bang" },
      fact: { es: "Así se llama la gran explosión con la que empezó el universo.", ca: "Així es diu la gran explosió amb què va començar l'univers.", en: "That is the name of the great explosion that started the universe.", cs: "Tak se jmenuje velký třesk, kterým vesmír začal.", fr: "C'est le nom de la grande explosion qui a fait naître l'univers." } },
    { letter: "C", emoji: "🌠", item: { es: "Cometa", ca: "Cometa", en: "Comet", cs: "Cesta vesmírem", fr: "Comète" },
      fact: { es: "Un cometa es una bola de hielo con una cola brillante.", ca: "Un cometa és una bola de gel amb una cua brillant.", en: "A comet is a ball of ice with a shiny tail.", cs: "Cesta vesmírem je dlouhá: i světlo potřebuje roky, aby doletělo k hvězdám.", fr: "Une comète est une boule de glace avec une queue brillante." } },
    { letter: "D", emoji: "🚀", item: { es: "Despegue", ca: "Distància", en: "Docking", cs: "Dalekohled", fr: "Décollage" },
      fact: { es: "El despegue es el momento en que el cohete sale volando. ¡Tres, dos, uno!", ca: "A l'espai les distàncies són enormes: la llum del Sol triga 8 minuts a arribar.", en: "Docking is when two spaceships join together in space.", cs: "Dalekohledem můžeš vidět krátery na Měsíci.", fr: "Le décollage, c'est le moment où la fusée s'envole. Trois, deux, un !" } },
    { letter: "E", emoji: "⭐", item: { es: "Estrella", ca: "Estrella", en: "Earth", cs: "Exoplaneta", fr: "Étoile" },
      fact: { es: "Las estrellas son bolas gigantes de fuego que brillan de noche.", ca: "Les estrelles són boles gegants de foc que brillen de nit.", en: "Earth is our home planet, the blue one.", cs: "Exoplaneta je planeta, která obíhá kolem cizí hvězdy.", fr: "Les étoiles sont des boules de feu géantes qui brillent la nuit." } },
    { letter: "F", emoji: "🌠", item: { es: "Fugaz (estrella)", ca: "Fugaç (estel)", en: "Full Moon", cs: "Fáze Měsíce", fr: "Fusée" },
      fact: { es: "Una estrella fugaz es una piedrecita que se quema en el cielo.", ca: "Un estel fugaç és una pedreta que es crema al cel.", en: "A Full Moon is when the Moon looks like a complete bright circle.", cs: "Měsíc mění tvar: jednou je celý, jindy jen proužek. To jsou fáze.", fr: "Une fusée est le véhicule qui nous emmène dans l'espace." } },
    { letter: "G", emoji: "🌌", item: { es: "Galaxia", ca: "Galàxia", en: "Galaxy", cs: "Galaxie", fr: "Galaxie" },
      fact: { es: "Una galaxia es una familia enorme de estrellas. La nuestra es la Vía Láctea.", ca: "Una galàxia és una família enorme d'estrelles. La nostra és la Via Làctia.", en: "A galaxy is a huge family of stars. Ours is the Milky Way.", cs: "Galaxie je obrovská rodina hvězd. Ta naše se jmenuje Mléčná dráha.", fr: "Une galaxie est une immense famille d'étoiles. La nôtre est la Voie lactée." } },
    { letter: "H", emoji: "🔭", item: { es: "Hubble", ca: "Hubble", en: "Hubble", cs: "Hvězda", fr: "Hubble" },
      fact: { es: "Hubble es un telescopio que vuela por el espacio haciendo fotos preciosas.", ca: "El Hubble és un telescopi que vola per l'espai fent fotos precioses.", en: "Hubble is a telescope that flies through space taking beautiful pictures.", cs: "Hvězdy jsou obří ohnivé koule, které v noci svítí na obloze.", fr: "Hubble est un télescope qui vole dans l'espace et prend de superbes photos." } },
    { letter: "I", emoji: "🎈", item: { es: "Ingravidez", ca: "Ingravidesa", en: "International Space Station", cs: "ISS", fr: "Impesanteur" },
      fact: { es: "En ingravidez todo flota: los astronautas, los lápices ¡y hasta las gotas de agua!", ca: "En ingravidesa tot flota: els astronautes, els llapis i fins i tot les gotes d'aigua!", en: "The ISS is a house in space where astronauts live and float!", cs: "ISS je vesmírný dům, kde astronauti bydlí a vznášejí se!", fr: "En impesanteur, tout flotte : les astronautes, les crayons et même les gouttes d'eau !" } },
    { letter: "J", emoji: "🪐", item: { es: "Júpiter", ca: "Júpiter", en: "Jupiter", cs: "Jupiter", fr: "Jupiter" },
      fact: { es: "Júpiter es el planeta más grande y tiene una tormenta gigante de color rojo.", ca: "Júpiter és el planeta més gran i té una tempesta gegant de color vermell.", en: "Jupiter is the biggest planet and has a giant red storm.", cs: "Jupiter je největší planeta a má obří červenou bouři.", fr: "Jupiter est la plus grande planète et elle a une tempête géante toute rouge." } },
    { letter: "K", emoji: "📏", item: { es: "Kilómetros", ca: "Kepler", en: "Kilometres", cs: "Kometa", fr: "Kilomètres" },
      fact: { es: "El espacio se mide en muchísimos kilómetros: la Luna está a 384.400.", ca: "Kepler va ser un savi que va descobrir com ballen els planetes al voltant del Sol.", en: "Space is measured in lots of kilometres: the Moon is 384,400 away.", cs: "Kometa je ledová koule se zářivým ocasem.", fr: "L'espace se mesure en très nombreux kilomètres : la Lune est à 384 400." } },
    { letter: "L", emoji: "🌙", item: { es: "Luna", ca: "Lluna", en: "Lunar rover", cs: "Lidé na Měsíci", fr: "Lune" },
      fact: { es: "En la Luna puedes saltar seis veces más alto que en la Tierra. ¡Boing boing!", ca: "A la Lluna pots saltar sis vegades més alt que a la Terra. Boing boing!", en: "A lunar rover is a moon car that astronauts drove on the Moon!", cs: "Na Měsíci zatím stanulo dvanáct lidí. A skákali šestkrát výš než na Zemi!", fr: "Sur la Lune, tu peux sauter six fois plus haut que sur la Terre. Boing boing !" } },
    { letter: "M", emoji: "🔴", item: { es: "Marte", ca: "Mart", en: "Mars", cs: "Mars", fr: "Mars" },
      fact: { es: "Marte es el planeta rojo. Allí ya pasean robots que mandan fotos a la Tierra.", ca: "Mart és el planeta vermell. Allà ja hi passegen robots que envien fotos a la Terra.", en: "Mars is the red planet. Robots already drive around there sending photos to Earth.", cs: "Mars je červená planeta. Jezdí po něm roboti a posílají na Zemi fotky.", fr: "Mars est la planète rouge. Des robots s'y promènent déjà et envoient des photos sur Terre." } },
    { letter: "N", emoji: "🎆", item: { es: "Nebulosa", ca: "Nebulosa", en: "Nebula", cs: "Nebe", fr: "Nébuleuse" },
      fact: { es: "Una nebulosa es una nube de colores donde nacen las estrellas.", ca: "Una nebulosa és un núvol de colors on neixen les estrelles.", en: "A nebula is a colourful cloud where stars are born.", cs: "Noční nebe je plné hvězd: zkus je někdy spočítat!", fr: "Une nébuleuse est un nuage coloré où naissent les étoiles." } },
    { letter: "O", emoji: "🔄", item: { es: "Órbita", ca: "Òrbita", en: "Orbit", cs: "Oběžná dráha", fr: "Orbite" },
      fact: { es: "La órbita es el camino redondo que sigue un planeta alrededor del Sol.", ca: "L'òrbita és el camí rodó que segueix un planeta al voltant del Sol.", en: "An orbit is the round path a planet follows around the Sun.", cs: "Oběžná dráha je kulatá cesta, po které planeta krouží kolem Slunce.", fr: "L'orbite est le chemin tout rond qu'une planète suit autour du Soleil." } },
    { letter: "P", emoji: "🪐", item: { es: "Planeta", ca: "Planeta", en: "Planet", cs: "Planeta", fr: "Planète" },
      fact: { es: "Un planeta es una bola gigante que gira alrededor de una estrella.", ca: "Un planeta és una bola gegant que gira al voltant d'una estrella.", en: "A planet is a giant ball that goes around a star.", cs: "Planeta je obří koule, která krouží kolem hvězdy.", fr: "Une planète est une boule géante qui tourne autour d'une étoile." } },
    { letter: "Q", emoji: "✨", item: { es: "Quásar", ca: "Quàsar", en: "Quasar", cs: "Kvasar (Q)", fr: "Quasar" },
      fact: { es: "Un quásar es una luz lejanísima, de las más brillantes del universo.", ca: "Un quàsar és una llum llunyaníssima, de les més brillants de l'univers.", en: "A quasar is a faraway light, one of the brightest in the universe.", cs: "Kvasar je vzdálené světlo, jedno z nejjasnějších ve vesmíru.", fr: "Un quasar est une lumière très lointaine, parmi les plus brillantes de l'univers." } },
    { letter: "R", emoji: "🤖", item: { es: "Robot", ca: "Robot", en: "Robot", cs: "Robot", fr: "Robot" },
      fact: { es: "¡Como yo! Los robots exploramos los sitios adonde aún no llegan las personas.", ca: "Com jo! Els robots explorem els llocs on encara no arriben les persones.", en: "Like me! Robots explore the places people cannot reach yet.", cs: "Jako já! Roboti zkoumají místa, kam se lidé zatím nedostanou.", fr: "Comme moi ! Les robots explorent les endroits où les gens ne vont pas encore." } },
    { letter: "S", emoji: "☀️", item: { es: "Sol", ca: "Sol", en: "Sun", cs: "Slunce", fr: "Soleil" },
      fact: { es: "El Sol nos da luz y calor. ¡Sin él no habría plantas ni veranos!", ca: "El Sol ens dóna llum i calor. Sense ell no hi hauria plantes ni estius!", en: "The Sun gives us light and warmth. Without it there would be no plants or summers!", cs: "Slunce nám dává světlo a teplo. Bez něj by nebyly rostliny ani léto!", fr: "Le Soleil nous donne lumière et chaleur. Sans lui, pas de plantes ni d'étés !" } },
    { letter: "T", emoji: "🔭", item: { es: "Telescopio", ca: "Telescopi", en: "Telescope", cs: "Teleskop", fr: "Télescope" },
      fact: { es: "Con un telescopio puedes ver los cráteres de la Luna desde tu ventana.", ca: "Amb un telescopi pots veure els cràters de la Lluna des de la teva finestra.", en: "With a telescope you can see the Moon's craters from your window.", cs: "Teleskopem uvidíš krátery na Měsíci přímo ze svého okna.", fr: "Avec un télescope, tu peux voir les cratères de la Lune depuis ta fenêtre." } },
    { letter: "U", emoji: "🌌", item: { es: "Universo", ca: "Univers", en: "Universe", cs: "Univerzum", fr: "Univers" },
      fact: { es: "El universo es todo lo que existe: estrellas, planetas, tú y yo.", ca: "L'univers és tot el que existeix: estrelles, planetes, tu i jo.", en: "The universe is everything that exists: stars, planets, you and me.", cs: "Univerzum, tedy vesmír, je všechno, co existuje: hvězdy, planety, ty i já.", fr: "L'univers, c'est tout ce qui existe : les étoiles, les planètes, toi et moi." } },
    { letter: "V", emoji: "🌌", item: { es: "Vía Láctea", ca: "Via Làctia", en: "Venus", cs: "Vesmír", fr: "Voie lactée" },
      fact: { es: "La Vía Láctea es nuestra galaxia. De noche se ve como un camino de leche.", ca: "La Via Làctia és la nostra galàxia. De nit es veu com un camí de llet.", en: "Venus shines so bright that people call it the morning star.", cs: "Vesmír je obrovský: nikdo ještě nenašel, kde končí.", fr: "La Voie lactée est notre galaxie. La nuit, on dirait un chemin de lait." } },
    { letter: "W", emoji: "📡", item: { es: "Wow (señal)", ca: "Wow (senyal)", en: "Wow signal", cs: "Wow (signál)", fr: "Wow (signal)" },
      fact: { es: "En 1977 una antena oyó una señal tan rara del espacio que el científico escribió: ¡Wow!", ca: "El 1977 una antena va sentir un senyal tan estrany de l'espai que el científic va escriure: Wow!", en: "In 1977 an antenna heard such a strange signal from space that the scientist wrote: Wow!", cs: "V roce 1977 zachytila anténa z vesmíru tak zvláštní signál, že vědec napsal: Wow!", fr: "En 1977, une antenne a entendu un signal si étrange venu de l'espace que le savant a écrit : Wow !" } },
    { letter: "X", emoji: "🩻", item: { es: "Rayos X", ca: "Raigs X", en: "X-rays", cs: "Rentgenové paprsky (X)", fr: "Rayons X" },
      fact: { es: "Algunos telescopios ven el cielo con rayos X y descubren cosas invisibles.", ca: "Alguns telescopis veuen el cel amb raigs X i descobreixen coses invisibles.", en: "Some telescopes look at the sky with X-rays and discover invisible things.", cs: "Některé teleskopy se dívají na nebe rentgenovými paprsky a vidí neviditelné věci.", fr: "Certains télescopes regardent le ciel avec des rayons X et découvrent des choses invisibles." } },
    { letter: "Y", emoji: "👨‍🚀", item: { es: "Yuri", ca: "Yuri", en: "Yuri", cs: "Yuri", fr: "Youri" },
      fact: { es: "Yuri Gagarin fue la primera persona que viajó al espacio, en 1961.", ca: "Yuri Gagarin va ser la primera persona que va viatjar a l'espai, el 1961.", en: "Yuri Gagarin was the first person to travel to space, in 1961.", cs: "Jurij Gagarin byl první člověk, který letěl do vesmíru, v roce 1961.", fr: "Youri Gagarine a été la première personne à voyager dans l'espace, en 1961." } },
    { letter: "Z", emoji: "🏡", item: { es: "Zona habitable", ca: "Zona habitable", en: "Zero gravity", cs: "Země", fr: "Zone habitable" },
      fact: { es: "Es el sitio perfecto cerca de una estrella: ni muy caliente ni muy frío para vivir.", ca: "És el lloc perfecte a prop d'una estrella: ni massa calent ni massa fred per viure-hi.", en: "In zero gravity everything floats: astronauts, pencils, even water drops!", cs: "Země je naše modrá planeta, jediný známý domov s moři a dětmi.", fr: "C'est l'endroit parfait près d'une étoile : ni trop chaud ni trop froid pour y vivre." } }
  ],

  /* ---------- FAMOSOS ---------- */
  famous: [
    { emoji: "👨‍🚀", year: "1961", color: "#4169E1", name: { es: "Yuri Gagarin", ca: "Yuri Gagarin", en: "Yuri Gagarin", cs: "Jurij Gagarin", fr: "Youri Gagarine" },
      achievement: { es: "La primera persona que viajó al espacio.", ca: "La primera persona que va viatjar a l'espai.", en: "The first person to travel to space.", cs: "První člověk, který letěl do vesmíru.", fr: "La première personne à voyager dans l'espace." },
      quote: { es: "¡La Tierra es azul!", ca: "La Terra és blava!", en: "The Earth is blue!", cs: "Země je modrá!", fr: "La Terre est bleue !" } },
    { emoji: "👩‍🚀", year: "1963", color: "#9c27b0", name: { es: "Valentina Tereshkova", ca: "Valentina Tereshkova", en: "Valentina Tereshkova", cs: "Valentina Těreškovová", fr: "Valentina Terechkova" },
      achievement: { es: "La primera mujer en volar al espacio.", ca: "La primera dona a volar a l'espai.", en: "The first woman to fly to space.", cs: "První žena, která letěla do vesmíru.", fr: "La première femme à voler dans l'espace." },
      quote: { es: "¡Eh, cielo! ¡Quítate el sombrero, que allá voy!", ca: "Ei, cel! Treu-te el barret, que hi vaig!", en: "Hey, sky! Take off your hat, here I come!", cs: "Hej, nebe! Smekni klobouk, už letím!", fr: "Hé, le ciel ! Enlève ton chapeau, j'arrive !" } },
    { emoji: "🌙", year: "1969", color: "#607d8b", name: { es: "Neil Armstrong", ca: "Neil Armstrong", en: "Neil Armstrong", cs: "Neil Armstrong", fr: "Neil Armstrong" },
      achievement: { es: "La primera persona que pisó la Luna.", ca: "La primera persona que va trepitjar la Lluna.", en: "The first person to walk on the Moon.", cs: "První člověk, který se prošel po Měsíci.", fr: "La première personne à marcher sur la Lune." },
      quote: { es: "Un pequeño paso para una persona, un gran salto para la humanidad.", ca: "Un petit pas per a una persona, un gran salt per a la humanitat.", en: "One small step for a person, one giant leap for humankind.", cs: "Malý krok pro člověka, obrovský skok pro lidstvo.", fr: "Un petit pas pour une personne, un bond de géant pour l'humanité." } },
    { emoji: "🚀", year: "1969", color: "#00838f", name: { es: "Buzz Aldrin", ca: "Buzz Aldrin", en: "Buzz Aldrin", cs: "Buzz Aldrin", fr: "Buzz Aldrin" },
      achievement: { es: "Caminó por la Luna junto a Armstrong.", ca: "Va caminar per la Lluna al costat d'Armstrong.", en: "Walked on the Moon next to Armstrong.", cs: "Prošel se po Měsíci vedle Armstronga.", fr: "Il a marché sur la Lune aux côtés d'Armstrong." },
      quote: { es: "Magnífica desolación... ¡y magnífica aventura!", ca: "Magnífica desolació... i magnífica aventura!", en: "Magnificent desolation... and a magnificent adventure!", cs: "Nádherná pustina... a nádherné dobrodružství!", fr: "Magnifique désolation... et magnifique aventure !" } },
    { emoji: "👩🏾‍🚀", year: "1992", color: "#e91e63", name: { es: "Mae Jemison", ca: "Mae Jemison", en: "Mae Jemison", cs: "Mae Jemisonová", fr: "Mae Jemison" },
      achievement: { es: "Médica, bailarina y la primera mujer afroamericana en el espacio.", ca: "Metgessa, ballarina i la primera dona afroamericana a l'espai.", en: "Doctor, dancer and the first African American woman in space.", cs: "Lékařka, tanečnice a první afroamerická žena ve vesmíru.", fr: "Médecin, danseuse et première femme afro-américaine dans l'espace." },
      quote: { es: "No dejes que nadie te quite tu imaginación.", ca: "No deixis que ningú et prengui la teva imaginació.", en: "Never let anyone take away your imagination.", cs: "Nikdy si od nikoho nenech vzít svou fantazii.", fr: "Ne laisse jamais personne te prendre ton imagination." } },
    { emoji: "🛰️", year: "1983", color: "#f57c00", name: { es: "Sally Ride", ca: "Sally Ride", en: "Sally Ride", cs: "Sally Rideová", fr: "Sally Ride" },
      achievement: { es: "La primera astronauta estadounidense.", ca: "La primera astronauta nord-americana.", en: "The first American woman astronaut.", cs: "První americká astronautka.", fr: "La première astronaute américaine." },
      quote: { es: "Las estrellas no se ríen de tus sueños.", ca: "Les estrelles no es riuen dels teus somnis.", en: "The stars never laugh at your dreams.", cs: "Hvězdy se tvým snům nikdy nesmějí.", fr: "Les étoiles ne se moquent jamais de tes rêves." } },
    { emoji: "🎸", year: "2013", color: "#43a047", name: { es: "Chris Hadfield", ca: "Chris Hadfield", en: "Chris Hadfield", cs: "Chris Hadfield", fr: "Chris Hadfield" },
      achievement: { es: "Cantó con su guitarra flotando en la estación espacial.", ca: "Va cantar amb la seva guitarra flotant a l'estació espacial.", en: "Sang with his guitar while floating on the space station.", cs: "Zpíval s kytarou, zatímco se vznášel na vesmírné stanici.", fr: "Il a chanté avec sa guitare en flottant dans la station spatiale." },
      quote: { es: "En el espacio hasta las canciones flotan.", ca: "A l'espai fins i tot les cançons floten.", en: "In space, even songs float.", cs: "Ve vesmíru se vznášejí i písničky.", fr: "Dans l'espace, même les chansons flottent." } },
    { emoji: "🇮🇹", year: "2014", color: "#5e35b1", name: { es: "Samantha Cristoforetti", ca: "Samantha Cristoforetti", en: "Samantha Cristoforetti", cs: "Samantha Cristoforettiová", fr: "Samantha Cristoforetti" },
      achievement: { es: "Astronauta italiana. ¡Hizo el primer café espacial!", ca: "Astronauta italiana. Va fer el primer cafè espacial!", en: "Italian astronaut. She made the first space coffee!", cs: "Italská astronautka. Uvařila první vesmírnou kávu!", fr: "Astronaute italienne. Elle a fait le premier café de l'espace !" },
      quote: { es: "Sé valiente, estudia y mira las estrellas.", ca: "Sigues valenta, estudia i mira les estrelles.", en: "Be brave, study, and look up at the stars.", cs: "Buď statečná, uč se a dívej se na hvězdy.", fr: "Sois courageuse, étudie et regarde les étoiles." } }
  ],

  childDream: {
    girl: { es: "Exploradora de mundos nuevos", ca: "Exploradora de mons nous", en: "Explorer of new worlds", cs: "Objevitelka nových světů", fr: "Exploratrice de nouveaux mondes" },
    boy: { es: "Explorador de mundos nuevos", ca: "Explorador de mons nous", en: "Explorer of new worlds", cs: "Objevitel nových světů", fr: "Explorateur de nouveaux mondes" },
    kid: { es: "Peque explorador de mundos nuevos", ca: "Explorador de mons nous", en: "Explorer of new worlds", cs: "Průzkumník nových světů", fr: "Explore les nouveaux mondes" }
  },
  childQuote: { es: "Cuando sea mayor visitaré las estrellas. ¡Y os mandaré fotos!", ca: "Quan sigui gran visitaré les estrelles. I us enviaré fotos!", en: "When I grow up I will visit the stars. And I will send you photos!", cs: "Až vyrostu, poletím ke hvězdám. A pošlu vám fotky!", fr: "Quand je serai grand, j'irai voir les étoiles. Et je vous enverrai des photos !" },

  /* ---------- MATES ---------- */
  mathEmojis: ["🚀", "⭐", "🪐", "👩‍🚀", "☄️", "🛸"],

  /* ---------- CONSTRUCTOR: el cohete ---------- */
  builder: {
    horizontal: true, launch: true,
    title: { es: "¡Construye tu propio cohete!", ca: "Construeix el teu propi coet!", en: "Build your own rocket!", cs: "Postav si vlastní raketu!", fr: "Construis ta propre fusée !" },
    thing: { es: "cohete", ca: "coet", en: "rocket", cs: "raketa", fr: "fusée" },
    parts: [
      { id: "body", label: { es: "Color del cohete", ca: "Color del coet", en: "Rocket colour", cs: "Barva rakety", fr: "Couleur de la fusée" },
        options: [{ id: "red", v: "#ef5350" }, { id: "blue", v: "#42a5f5" }, { id: "purple", v: "#ab47bc" }, { id: "green", v: "#66bb6a" }] },
      { id: "nose", label: { es: "El morro", ca: "El morro", en: "The nose", cs: "Špička", fr: "Le nez" },
        options: [{ id: "cone", v: "cone", icon: "🔺" }, { id: "round", v: "round", icon: "⚪" }, { id: "star", v: "star", icon: "⭐" }] },
      { id: "window", label: { es: "La ventana", ca: "La finestra", en: "The window", cs: "Okénko", fr: "La fenêtre" },
        options: [{ id: "one", v: "one", icon: "🔵" }, { id: "two", v: "two", icon: "🔵🔵" }, { id: "heart", v: "heart", icon: "💗" }] },
      { id: "flame", label: { es: "La llama", ca: "La flama", en: "The flame", cs: "Plamen", fr: "La flamme" },
        options: [{ id: "orange", v: "#ff9800" }, { id: "blue", v: "#29b6f6" }, { id: "rainbow", v: "rainbow", icon: "🌈" }] }
    ],
    svg(sel) {
      const body = sel.body || "#ef5350";
      const flame = sel.flame === "rainbow" ? "url(#flameR)" : (sel.flame || "#ff9800");
      let nose = "";
      if (sel.nose === "round") nose = `<path d="M35 34 Q50 8 65 34 Z" fill="${body}" stroke="#fff" stroke-width="1.5"/>`;
      else if (sel.nose === "star") nose = `<path d="M35 34 L50 12 L65 34 Z" fill="${body}" stroke="#fff" stroke-width="1.5"/><text x="44" y="26" font-size="12">⭐</text>`;
      else nose = `<path d="M35 34 L50 10 L65 34 Z" fill="${body}" stroke="#fff" stroke-width="1.5"/>`;
      let win = `<circle cx="50" cy="48" r="8" fill="#b3e5fc" stroke="#fff" stroke-width="2"/>`;
      if (sel.window === "two") win = `<circle cx="50" cy="44" r="6" fill="#b3e5fc" stroke="#fff" stroke-width="2"/><circle cx="50" cy="60" r="6" fill="#b3e5fc" stroke="#fff" stroke-width="2"/>`;
      if (sel.window === "heart") win = `<path d="M50 42 C44 36 36 42 42 50 L50 58 L58 50 C64 42 56 36 50 42 Z" fill="#f8bbd0" stroke="#fff" stroke-width="2"/>`;
      return `<svg viewBox="0 0 100 110" width="190" height="210">
        <defs><linearGradient id="flameR" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ff5252"/><stop offset="34%" stop-color="#ffd740"/><stop offset="67%" stop-color="#69f0ae"/><stop offset="100%" stop-color="#40c4ff"/></linearGradient></defs>
        ${nose}
        <rect x="35" y="34" width="30" height="44" rx="6" fill="${body}" stroke="#fff" stroke-width="1.5"/>
        ${win}
        <path d="M35 60 L22 82 L35 76 Z" fill="${body}" stroke="#fff" stroke-width="1.5"/>
        <path d="M65 60 L78 82 L65 76 Z" fill="${body}" stroke="#fff" stroke-width="1.5"/>
        <rect x="40" y="78" width="20" height="7" rx="3" fill="#78909c"/>
        <path d="M42 85 Q50 108 58 85 Z" fill="${flame}"><animate attributeName="opacity" values="1;.6;1" dur=".5s" repeatCount="indefinite"/></path>
      </svg>`;
    }
  }
};
