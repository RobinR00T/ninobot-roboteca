"use strict";
/* ============================================================
   Contenido de DALÍ (parte A):
   quiz, alfabeto, famosos, mates y constructor.
   El pintor de los sueños: Figueres, Portlligat y el Empordà.
   ============================================================ */

THEMES.dali = {
  emoji: "⏰", ready: true,
  grad: "linear-gradient(150deg,#e8a020,#3b6ea5)",
  name: { es: "Dalí", ca: "Dalí", en: "Dalí", cs: "Dalí", fr: "Dalí" }
};

THEMES.dali.content = {

  statusPlace: { es: "Conectado desde el Empordà, tierra de sueños", ca: "Connectat des de l'Empordà, terra de somnis", en: "Connected from the Empordà, land of dreams", cs: "Připojeno z kraje Empordà, země snů", fr: "Connecté depuis l'Empordà, terre de rêves" },
  welcome: { es: "¡Al taller de los sueños, {name}! Los relojes ya se derriten de ganas de verte.", ca: "Al taller dels somnis, {name}! Els rellotges ja es fonen de ganes de veure't.", en: "Welcome to the dream workshop, {name}! The clocks are already melting with joy to see you.", cs: "Vítej v dílně snů, {name}! Hodiny se už radostí roztékají, že tě vidí.", fr: "Bienvenue à l'atelier des rêves, {name} ! Les montres fondent déjà de joie de te voir." },

  /* ---------- QUIZ: 10 preguntas ---------- */
  quiz: [
    { emoji: "⏰",
      q: { es: "¿Cómo son los relojes que pintaba Dalí?", ca: "Com són els rellotges que pintava Dalí?", en: "What do the clocks Dalí painted look like?", cs: "Jaké jsou hodiny, které Dalí maloval?", fr: "Comment sont les montres que peignait Dalí ?" },
      options: [
        { es: "Duros como piedras", ca: "Durs com pedres", en: "Hard as rocks", cs: "Tvrdé jako kámen", fr: "Dures comme des pierres" },
        { es: "Blandos, como derretidos", ca: "Tous, com si es fonguessin", en: "Soft, as if melting", cs: "Měkké, jako by se roztékaly", fr: "Molles, comme fondues" },
        { es: "Cuadrados", ca: "Quadrats", en: "Square", cs: "Hranaté", fr: "Carrées" },
        { es: "Invisibles", ca: "Invisibles", en: "Invisible", cs: "Neviditelné", fr: "Invisibles" }],
      answer: 1,
      explanation: { es: "En su cuadro más famoso los relojes se derriten como queso al sol. ¡La idea se le ocurrió después de cenar!", ca: "Al seu quadre més famós els rellotges es fonen com formatge al sol. La idea se li va acudir després de sopar!", en: "In his most famous painting the clocks melt like cheese in the sun. He got the idea after dinner!", cs: "Na jeho nejslavnějším obraze se hodiny roztékají jako sýr na slunci. Napadlo ho to po večeři!", fr: "Dans son tableau le plus célèbre, les montres fondent comme du fromage au soleil. L'idée lui est venue après le dîner !" } },
    { emoji: "🐘",
      q: { es: "¿Qué animal de patas larguísimas pintaba Dalí?", ca: "Quin animal de potes llarguíssimes pintava Dalí?", en: "Which animal with super long legs did Dalí paint?", cs: "Které zvíře s předlouhýma nohama Dalí maloval?", fr: "Quel animal aux pattes très longues peignait Dalí ?" },
      options: [
        { es: "El pingüino", ca: "El pingüí", en: "The penguin", cs: "Tučňáka", fr: "Le pingouin" },
        { es: "El elefante", ca: "L'elefant", en: "The elephant", cs: "Slona", fr: "L'éléphant" },
        { es: "El hipopótamo", ca: "L'hipopòtam", en: "The hippo", cs: "Hrocha", fr: "L'hippopotame" },
        { es: "El conejo", ca: "El conill", en: "The rabbit", cs: "Králíka", fr: "Le lapin" }],
      answer: 1,
      explanation: { es: "Sus elefantes caminan sobre patas finas y altísimas, como zancos. ¡Parecen ir de puntillas por el cielo!", ca: "Els seus elefants caminen sobre potes fines i altíssimes, com xanques. Semblen anar de puntetes pel cel!", en: "His elephants walk on thin, super tall legs, like stilts. They seem to tiptoe across the sky!", cs: "Jeho sloni chodí na tenkých, vysokánských nohách jako na chůdách. Vypadá to, že jdou po špičkách po nebi!", fr: "Ses éléphants marchent sur des pattes fines et très hautes, comme des échasses. On dirait qu'ils traversent le ciel sur la pointe des pieds !" } },
    { emoji: "🏛️",
      q: { es: "¿En qué pueblo está el museo de Dalí?", ca: "A quin poble hi ha el museu de Dalí?", en: "In which town is the Dalí museum?", cs: "Ve kterém městě je Dalího muzeum?", fr: "Dans quelle ville se trouve le musée de Dalí ?" },
      options: [
        { es: "En París", ca: "A París", en: "In Paris", cs: "V Paříži", fr: "À Paris" },
        { es: "En Figueres", ca: "A Figueres", en: "In Figueres", cs: "Ve Figueres", fr: "À Figueres" },
        { es: "En Nueva York", ca: "A Nova York", en: "In New York", cs: "V New Yorku", fr: "À New York" },
        { es: "En la Luna", ca: "A la Lluna", en: "On the Moon", cs: "Na Měsíci", fr: "Sur la Lune" }],
      answer: 1,
      explanation: { es: "En Figueres, donde nació en 1904. Él mismo convirtió un teatro antiguo en el museo de sus sueños.", ca: "A Figueres, on va néixer el 1904. Ell mateix va convertir un teatre antic en el museu dels seus somnis.", en: "In Figueres, where he was born in 1904. He himself turned an old theatre into the museum of his dreams.", cs: "Ve Figueres, kde se v roce 1904 narodil. Staré divadlo tam sám proměnil v muzeum svých snů.", fr: "À Figueres, où il est né en 1904. Il a lui-même transformé un vieux théâtre en musée de ses rêves." } },
    { emoji: "😄",
      q: { es: "¿Cómo era el bigote de Dalí?", ca: "Com era el bigoti de Dalí?", en: "What was Dalí's moustache like?", cs: "Jaký byl Dalího knír?", fr: "Comment était la moustache de Dalí ?" },
      options: [
        { es: "Caído y triste", ca: "Caigut i trist", en: "Droopy and sad", cs: "Svěšený a smutný", fr: "Tombante et triste" },
        { es: "Con las puntas hacia arriba", ca: "Amb les puntes cap amunt", en: "With the tips pointing up", cs: "Se špičkami nahoru", fr: "Avec les pointes vers le haut" },
        { es: "De color verde", ca: "De color verd", en: "Green", cs: "Zelený", fr: "De couleur verte" },
        { es: "No tenía bigote", ca: "No tenia bigoti", en: "He had no moustache", cs: "Žádný neměl", fr: "Il n'avait pas de moustache" }],
      answer: 1,
      explanation: { es: "Las puntas apuntaban al cielo como las agujas de un reloj a las once y diez. Decía que era su antena de ideas.", ca: "Les puntes apuntaven al cel com les agulles d'un rellotge a les onze i deu. Deia que era la seva antena d'idees.", en: "The tips pointed at the sky like clock hands at ten past eleven. He said it was his antenna for catching ideas.", cs: "Špičky mířily k nebi jako hodinové ručičky v jedenáct deset. Říkal, že je to jeho anténa na nápady.", fr: "Les pointes visaient le ciel comme les aiguilles d'une montre à onze heures dix. Il disait que c'était son antenne à idées." } },
    { emoji: "🥚",
      q: { es: "¿Qué hay en el tejado de su museo?", ca: "Què hi ha a la teulada del seu museu?", en: "What is on the roof of his museum?", cs: "Co je na střeše jeho muzea?", fr: "Qu'y a-t-il sur le toit de son musée ?" },
      options: [
        { es: "Chimeneas", ca: "Xemeneies", en: "Chimneys", cs: "Komíny", fr: "Des cheminées" },
        { es: "Huevos gigantes", ca: "Ous gegants", en: "Giant eggs", cs: "Obří vejce", fr: "Des œufs géants" },
        { es: "Toboganes", ca: "Tobogans", en: "Slides", cs: "Skluzavky", fr: "Des toboggans" },
        { es: "Nidos de cigüeña", ca: "Nius de cigonya", en: "Stork nests", cs: "Čapí hnízda", fr: "Des nids de cigogne" }],
      answer: 1,
      explanation: { es: "Una corona de huevos gigantes. Para Dalí el huevo era mágico: dentro cabe una vida entera.", ca: "Una corona d'ous gegants. Per a Dalí l'ou era màgic: a dins hi cap una vida sencera.", en: "A crown of giant eggs. For Dalí the egg was magical: a whole life fits inside.", cs: "Koruna z obřích vajec. Pro Dalího bylo vejce kouzelné: vejde se do něj celý život.", fr: "Une couronne d'œufs géants. Pour Dalí, l'œuf était magique : une vie entière tient dedans." } },
    { emoji: "🌹",
      q: { es: "¿Cómo se llamaba su musa, la que le ayudaba en todo?", ca: "Com es deia la seva musa, la que l'ajudava en tot?", en: "What was the name of his muse, who helped him with everything?", cs: "Jak se jmenovala jeho múza, která mu se vším pomáhala?", fr: "Comment s'appelait sa muse, celle qui l'aidait en tout ?" },
      options: [
        { es: "Gala", ca: "Gala", en: "Gala", cs: "Gala", fr: "Gala" },
        { es: "Luna", ca: "Lluna", en: "Luna", cs: "Luna", fr: "Luna" },
        { es: "Rosa", ca: "Rosa", en: "Rosa", cs: "Rosa", fr: "Rosa" },
        { es: "Perla", ca: "Perla", en: "Pearl", cs: "Perla", fr: "Perla" }],
      answer: 0,
      explanation: { es: "Gala organizaba el taller, los pinceles y los viajes. Dalí decía que sin ella se perdía hasta en su propia casa.", ca: "La Gala organitzava el taller, els pinzells i els viatges. Dalí deia que sense ella es perdia fins i tot a casa seva.", en: "Gala organized the workshop, the brushes and the trips. Dalí said that without her he got lost even in his own house.", cs: "Gala se starala o ateliér, štětce i cesty. Dalí říkal, že bez ní se ztratí i ve vlastním domě.", fr: "Gala organisait l'atelier, les pinceaux et les voyages. Dalí disait que sans elle, il se perdait même dans sa propre maison." } },
    { emoji: "⛵",
      q: { es: "¿Dónde estaba su casa blanca junto al mar?", ca: "On era la seva casa blanca vora el mar?", en: "Where was his white house by the sea?", cs: "Kde stál jeho bílý dům u moře?", fr: "Où était sa maison blanche au bord de la mer ?" },
      options: [
        { es: "En una montaña", ca: "En una muntanya", en: "On a mountain", cs: "Na hoře", fr: "Sur une montagne" },
        { es: "En Portlligat", ca: "A Portlligat", en: "In Portlligat", cs: "V Portlligatu", fr: "À Portlligat" },
        { es: "En el desierto", ca: "Al desert", en: "In the desert", cs: "V poušti", fr: "Dans le désert" },
        { es: "En un castillo", ca: "En un castell", en: "In a castle", cs: "Na hradě", fr: "Dans un château" }],
      answer: 1,
      explanation: { es: "En Portlligat, al lado de Cadaqués. Empezó siendo una casita de pescadores y creció como un laberinto.", ca: "A Portlligat, al costat de Cadaqués. Va començar sent una caseta de pescadors i va créixer com un laberint.", en: "In Portlligat, next to Cadaqués. It started as a little fishermen's hut and grew like a labyrinth.", cs: "V Portlligatu, hned vedle Cadaqués. Začal jako rybářská chatka a rostl jako bludiště.", fr: "À Portlligat, à côté de Cadaqués. Elle a commencé comme une cabane de pêcheurs et a grandi comme un labyrinthe." } },
    { emoji: "🌬️",
      q: { es: "¿Cómo se llama el viento fuerte del Empordà?", ca: "Com es diu el vent fort de l'Empordà?", en: "What is the strong wind of the Empordà called?", cs: "Jak se jmenuje silný vítr z kraje Empordà?", fr: "Comment s'appelle le vent fort de l'Empordà ?" },
      options: [
        { es: "El huracán", ca: "L'huracà", en: "The hurricane", cs: "Hurikán", fr: "L'ouragan" },
        { es: "La brisa", ca: "La brisa", en: "The breeze", cs: "Vánek", fr: "La brise" },
        { es: "La tramontana", ca: "La tramuntana", en: "The tramuntana", cs: "Tramontána", fr: "La tramontane" },
        { es: "El tornado", ca: "El tornado", en: "The tornado", cs: "Tornádo", fr: "La tornade" }],
      answer: 2,
      explanation: { es: "La tramontana sopla del norte, despeina los olivos y deja el cielo limpísimo. Dicen que trae ideas locas.", ca: "La tramuntana bufa del nord, despentina les oliveres i deixa el cel netíssim. Diuen que porta idees boges.", en: "The tramuntana blows from the north, ruffles the olive trees and leaves the sky super clean. They say it brings wild ideas.", cs: "Tramontána fouká ze severu, cuchá olivovníky a nechává nebe úplně čisté. Prý přináší bláznivé nápady.", fr: "La tramontane souffle du nord, décoiffe les oliviers et laisse le ciel tout propre. On dit qu'elle apporte des idées folles." } },
    { emoji: "🍞",
      q: { es: "¿Qué decora las paredes de su museo por fuera?", ca: "Què decora les parets del seu museu per fora?", en: "What decorates the outside walls of his museum?", cs: "Co zdobí venkovní zdi jeho muzea?", fr: "Que trouve-t-on sur les murs extérieurs de son musée ?" },
      options: [
        { es: "Panes", ca: "Pans", en: "Bread loaves", cs: "Chleby", fr: "Des pains" },
        { es: "Caramelos", ca: "Caramels", en: "Sweets", cs: "Bonbony", fr: "Des bonbons" },
        { es: "Estrellas", ca: "Estrelles", en: "Stars", cs: "Hvězdy", fr: "Des étoiles" },
        { es: "Conchas", ca: "Petxines", en: "Seashells", cs: "Mušle", fr: "Des coquillages" }],
      answer: 0,
      explanation: { es: "La fachada está sembrada de panecillos dorados. A Dalí el pan le parecía tan importante que lo convirtió en decoración.", ca: "La façana està sembrada de panets daurats. A Dalí el pa li semblava tan important que el va convertir en decoració.", en: "The facade is covered in golden little loaves. Dalí thought bread was so important that he turned it into decoration.", cs: "Fasáda je posetá zlatavými bochánky. Chléb připadal Dalímu tak důležitý, že z něj udělal ozdobu.", fr: "La façade est semée de petits pains dorés. Dalí trouvait le pain si important qu'il en a fait une décoration." } },
    { emoji: "🚗",
      q: { es: "¿Qué pasa dentro del coche del museo?", ca: "Què passa dins del cotxe del museu?", en: "What happens inside the car in the museum?", cs: "Co se děje uvnitř auta v muzeu?", fr: "Que se passe-t-il dans la voiture du musée ?" },
      options: [
        { es: "Suena música", ca: "Hi sona música", en: "Music plays", cs: "Hraje hudba", fr: "On entend de la musique" },
        { es: "Llueve por dentro", ca: "Hi plou per dins", en: "It rains inside", cs: "Uvnitř prší", fr: "Il pleut à l'intérieur" },
        { es: "Hay una piscina", ca: "Hi ha una piscina", en: "There is a pool", cs: "Je tam bazén", fr: "Il y a une piscine" },
        { es: "Nieva", ca: "Hi neva", en: "It snows", cs: "Sněží", fr: "Il neige" }],
      answer: 1,
      explanation: { es: "Es el Cadillac lluvioso: aprietas un botón y llueve dentro del coche. ¡El único coche donde el paraguas se lleva dentro!", ca: "És el Cadillac plujós: prems un botó i plou dins del cotxe. L'únic cotxe on el paraigua es porta a dins!", en: "It is the rainy Cadillac: you press a button and it rains inside the car. The only car where you keep the umbrella inside!", cs: "Je to deštivý cadillac: zmáčkneš knoflík a uvnitř auta prší. Jediné auto, kde se deštník nosí uvnitř!", fr: "C'est la Cadillac pluvieuse : on appuie sur un bouton et il pleut dans la voiture. La seule voiture où le parapluie se porte dedans !" } },
    { emoji: "💭",
      q: { es: "El arte de pintar sueños y cosas imposibles, como hacía Dalí, se llama...", ca: "L'art de pintar somnis i coses impossibles, com feia Dalí, es diu...", en: "The art of painting dreams and impossible things, like Dalí did, is called...", cs: "Umění malovat sny a nemožné věci, jako to dělal Dalí, se jmenuje...", fr: "L'art de peindre les rêves et les choses impossibles, comme le faisait Dalí, s'appelle..." },
      options: [
        { es: "Cubismo", ca: "Cubisme", en: "Cubism", cs: "Kubismus", fr: "Le cubisme" },
        { es: "Impresionismo", ca: "Impressionisme", en: "Impressionism", cs: "Impresionismus", fr: "L'impressionnisme" },
        { es: "Surrealismo", ca: "Surrealisme", en: "Surrealism", cs: "Surrealismus", fr: "Le surréalisme" },
        { es: "Puntillismo", ca: "Puntillisme", en: "Pointillism", cs: "Pointilismus", fr: "Le pointillisme" }],
      answer: 2,
      explanation: { es: "Surrealismo quiere decir más allá de lo real. Dalí pintaba lo que vemos en sueños, con tanto detalle que parece de verdad.", ca: "Surrealisme vol dir més enllà del que és real. Dalí pintava el que veiem en somnis, amb tant de detall que sembla de veritat.", en: "Surrealism means beyond what is real. Dalí painted what we see in dreams, with so much detail that it looks real.", cs: "Surrealismus znamená nad skutečností. Dalí maloval to, co vídáme ve snech, tak podrobně, že to vypadá jako doopravdy.", fr: "Surréalisme veut dire au-delà du réel. Dalí peignait ce qu'on voit en rêve, avec tant de détails que ça semble vrai." } },
    { emoji: "🐜",
      q: { es: "¿Qué bichitos diminutos aparecen en muchos cuadros de Dalí?", ca: "Quines bestioles diminutes apareixen en molts quadres de Dalí?", en: "Which tiny little creatures appear in many of Dalí's paintings?", cs: "Jaká drobná zvířátka se objevují v mnoha Dalího obrazech?", fr: "Quelles petites bêtes minuscules apparaissent dans beaucoup de tableaux de Dalí ?" },
      options: [
        { es: "Las hormigas", ca: "Les formigues", en: "Ants", cs: "Mravenci", fr: "Les fourmis" },
        { es: "Las mariquitas", ca: "Les marietes", en: "Ladybirds", cs: "Berušky", fr: "Les coccinelles" },
        { es: "Los caracoles", ca: "Els cargols", en: "Snails", cs: "Šneci", fr: "Les escargots" },
        { es: "Las abejas", ca: "Les abelles", en: "Bees", cs: "Včely", fr: "Les abeilles" }],
      answer: 0,
      explanation: { es: "De pequeño le impresionaron mucho las hormigas y de mayor las pintó en muchísimos cuadros: hasta encima de un reloj blando.", ca: "De petit les formigues el van impressionar molt i de gran les va pintar en moltíssims quadres: fins i tot sobre un rellotge tou.", en: "As a child he was very struck by ants, and as a grown-up he painted them in lots of paintings: even on top of a melting clock.", cs: "Jako malého ho mravenci ohromili a jako dospělý je namaloval do spousty obrazů: dokonce i na měkké hodiny.", fr: "Enfant, les fourmis l'ont beaucoup impressionné et, adulte, il en a peint dans énormément de tableaux : même sur une montre molle." } },
    { emoji: "🎬",
      q: { es: "¿Con qué famoso creador de dibujos animados preparó Dalí una película?", ca: "Amb quin famós creador de dibuixos animats va preparar Dalí una pel·lícula?", en: "With which famous cartoon creator did Dalí work on a film?", cs: "Se kterým slavným tvůrcem kreslených filmů Dalí chystal film?", fr: "Avec quel célèbre créateur de dessins animés Dalí a-t-il préparé un film ?" },
      options: [
        { es: "Con un domador de leones", ca: "Amb un domador de lleons", en: "With a lion tamer", cs: "S krotitelem lvů", fr: "Avec un dompteur de lions" },
        { es: "Con una astronauta", ca: "Amb una astronauta", en: "With an astronaut", cs: "S astronautkou", fr: "Avec une astronaute" },
        { es: "Con un capitán pirata", ca: "Amb un capità pirata", en: "With a pirate captain", cs: "S pirátským kapitánem", fr: "Avec un capitaine pirate" },
        { es: "Con Walt Disney", ca: "Amb Walt Disney", en: "With Walt Disney", cs: "S Waltem Disneym", fr: "Avec Walt Disney" }],
      answer: 3,
      explanation: { es: "Juntos idearon el corto Destino, con relojes y paisajes de sueño. Se empezó en 1946 y se terminó muchos años después.", ca: "Junts van idear el curt Destino, amb rellotges i paisatges de somni. Es va començar el 1946 i es va acabar molts anys després.", en: "Together they dreamed up the short film Destino, full of clocks and dream landscapes. It was started in 1946 and finished many years later.", cs: "Společně vymysleli krátký film Destino, plný hodin a snových krajin. Začal vznikat v roce 1946 a dokončili ho o mnoho let později.", fr: "Ensemble, ils ont imaginé le court métrage Destino, plein d'horloges et de paysages de rêve. Commencé en 1946, il a été terminé bien des années plus tard." } },
    { emoji: "🍭",
      q: { es: "¿Qué dulce lleva un dibujo inventado por Dalí?", ca: "Quin dolç porta un dibuix inventat per Dalí?", en: "Which sweet treat carries a design invented by Dalí?", cs: "Která sladkost nese obrázek, který vymyslel Dalí?", fr: "Quelle friandise porte un dessin inventé par Dalí ?" },
      options: [
        { es: "El turrón", ca: "El torró", en: "Turrón nougat", cs: "Turrón (španělský nugát)", fr: "Le touron" },
        { es: "El caramelo con palo Chupa Chups", ca: "El caramel de pal Chupa Chups", en: "The Chupa Chups lollipop", cs: "Lízátko Chupa Chups", fr: "La sucette Chupa Chups" },
        { es: "Las palomitas", ca: "Les crispetes", en: "Popcorn", cs: "Popcorn", fr: "Le pop-corn" },
        { es: "El helado de fresa", ca: "El gelat de maduixa", en: "Strawberry ice cream", cs: "Jahodová zmrzlina", fr: "La glace à la fraise" }],
      answer: 1,
      explanation: { es: "En 1969 Dalí dibujó la flor del logotipo de Chupa Chups y propuso ponerla arriba, para verla entera sobre el caramelo.", ca: "El 1969 Dalí va dibuixar la flor del logotip de Chupa Chups i va proposar posar-la a dalt, per veure-la sencera sobre el caramel.", en: "In 1969 Dalí drew the flower of the Chupa Chups logo and suggested putting it on top, so you could see the whole design on the sweet.", cs: "V roce 1969 Dalí nakreslil kytičku pro logo Chupa Chups a navrhl dát ji nahoru, aby byla na lízátku vidět celá.", fr: "En 1969, Dalí a dessiné la fleur du logo Chupa Chups et a proposé de la mettre sur le dessus, pour la voir en entier sur le bonbon." } },
    { emoji: "🛋️",
      q: { es: "En una sala de su museo hay un sofá rojo con forma de labios. Visto desde el sitio justo, con los demás muebles forma...", ca: "En una sala del seu museu hi ha un sofà vermell amb forma de llavis. Vist des del lloc just, amb els altres mobles forma...", en: "In one room of his museum there is a red sofa shaped like lips. Seen from just the right spot, together with the other furniture it forms...", cs: "V jednom sále jeho muzea je červená pohovka ve tvaru rtů. Při pohledu ze správného místa tvoří s ostatním nábytkem...", fr: "Dans une salle de son musée, il y a un canapé rouge en forme de lèvres. Vu du bon endroit, avec les autres meubles il forme..." },
      options: [
        { es: "Un tren", ca: "Un tren", en: "A train", cs: "Vlak", fr: "Un train" },
        { es: "Un mapa del tesoro", ca: "Un mapa del tresor", en: "A treasure map", cs: "Mapu pokladu", fr: "Une carte au trésor" },
        { es: "La cara de una actriz", ca: "La cara d'una actriu", en: "The face of an actress", cs: "Tvář herečky", fr: "Le visage d'une actrice" },
        { es: "Un plato de espaguetis", ca: "Un plat d'espaguetis", en: "A plate of spaghetti", cs: "Talíř špaget", fr: "Une assiette de spaghettis" }],
      answer: 2,
      explanation: { es: "Es la sala Mae West: el sofá son los labios, la chimenea la nariz y dos cuadros los ojos. ¡Una habitación que se convierte en cara!", ca: "És la sala Mae West: el sofà són els llavis, la llar de foc el nas i dos quadres els ulls. Una habitació que es converteix en cara!", en: "It is the Mae West room: the sofa is the lips, the fireplace is the nose and two paintings are the eyes. A room that turns into a face!", cs: "Je to sál Mae West: pohovka jsou rty, krb je nos a dva obrazy jsou oči. Pokoj, který se promění v obličej!", fr: "C'est la salle Mae West : le canapé fait les lèvres, la cheminée le nez et deux tableaux les yeux. Une pièce qui se transforme en visage !" } }
  ],

  /* ---------- ALFABETO: 26 letras ---------- */
  alphabet: [
    { letter: "A", emoji: "🪟", item: { es: "Anna Maria", ca: "Anna Maria", en: "Anna Maria", cs: "Anna Maria", fr: "Anna Maria" },
      fact: { es: "Anna Maria era su hermana. Posaba para él junto a la ventana, mirando el mar de Cadaqués.", ca: "L'Anna Maria era la seva germana. Posava per a ell vora la finestra, mirant el mar de Cadaqués.", en: "Anna Maria was his sister. She posed for him by the window, looking at the sea of Cadaqués.", cs: "Anna Maria byla jeho sestra. Stávala mu modelem u okna a dívala se na moře u Cadaqués.", fr: "Anna Maria était sa sœur. Elle posait pour lui près de la fenêtre, en regardant la mer de Cadaqués." } },
    { letter: "B", emoji: "〰️", em: { en: "🍞", cs: "🍞", fr: "⛵" }, item: { es: "Bigote", ca: "Bigoti", en: "Bread", cs: "Bochník", fr: "Barque" },
      fact: { es: "Su bigote apuntaba al cielo. Decía que era una antena para cazar ideas al vuelo.", ca: "El seu bigoti apuntava al cel. Deia que era una antena per caçar idees al vol.", en: "Dalí loved bread so much that he covered his museum's walls with golden loaves.", cs: "Dalí měl chléb tak rád, že zlatavými bochánky ozdobil zdi svého muzea.", fr: "Devant sa maison de Portlligat, les barques dormaient sur la plage, face à la mer." } },
    { letter: "C", emoji: "🏖️", item: { es: "Cadaqués", ca: "Cadaqués", en: "Cadaqués", cs: "Cadaqués", fr: "Cadaqués" },
      fact: { es: "El pueblo blanco junto al mar donde Dalí veraneaba de pequeño. Allí aprendió a mirar despacio.", ca: "El poble blanc vora el mar on Dalí estiuejava de petit. Allà va aprendre a mirar a poc a poc.", en: "The white village by the sea where Dalí spent his summers as a child. There he learned to look slowly.", cs: "Bílá vesnička u moře, kde Dalí jako malý trávil léto. Tam se naučil dívat se pomalu.", fr: "Le village blanc au bord de la mer où Dalí passait ses étés, enfant. C'est là qu'il a appris à regarder lentement." } },
    { letter: "D", emoji: "🎨", item: { es: "Dalí", ca: "Dalí", en: "Dalí", cs: "Dalí", fr: "Dalí" },
      fact: { es: "Salvador Dalí nació en Figueres en 1904. Decía que cada mañana se alegraba muchísimo de ser Dalí.", ca: "Salvador Dalí va néixer a Figueres el 1904. Deia que cada matí s'alegrava moltíssim de ser Dalí.", en: "Salvador Dalí was born in Figueres in 1904. He said that every morning he was overjoyed to be Dalí.", cs: "Salvador Dalí se narodil ve Figueres v roce 1904. Říkal, že se každé ráno ohromně raduje, že je Dalí.", fr: "Salvador Dalí est né à Figueres en 1904. Il disait que chaque matin, il était ravi d'être Dalí." } },
    { letter: "E", emoji: "🐘", em: { cs: "🌄" }, item: { es: "Elefante", ca: "Elefant", en: "Elephant", cs: "Empordà", fr: "Éléphant" },
      fact: { es: "Los elefantes de Dalí tienen patas finas y altísimas, como zancos. Van de puntillas por el cielo.", ca: "Els elefants de Dalí tenen potes fines i altíssimes, com xanques. Van de puntetes pel cel.", en: "Dalí's elephants have thin, super tall legs, like stilts. They tiptoe across the sky.", cs: "Empordà je kraj, kde se Dalí narodil: zlatá pole, olivovníky a moře na obzoru.", fr: "Les éléphants de Dalí ont des pattes fines et très hautes, comme des échasses. Ils traversent le ciel sur la pointe des pieds." } },
    { letter: "F", emoji: "🏛️", item: { es: "Figueres", ca: "Figueres", en: "Figueres", cs: "Figueres", fr: "Figueres" },
      fact: { es: "La ciudad donde nació Dalí. Allí está su museo, coronado de huevos gigantes.", ca: "La ciutat on va néixer Dalí. Allà hi ha el seu museu, coronat d'ous gegants.", en: "The town where Dalí was born. His museum is there, crowned with giant eggs.", cs: "Město, kde se Dalí narodil. Stojí tam jeho muzeum s korunou z obřích vajec.", fr: "La ville où Dalí est né. Son musée s'y trouve, couronné d'œufs géants." } },
    { letter: "G", emoji: "🌹", item: { es: "Gala", ca: "Gala", en: "Gala", cs: "Gala", fr: "Gala" },
      fact: { es: "Gala era su musa y organizadora. Algunos cuadros los firmaban juntos: Gala-Dalí.", ca: "La Gala era la seva musa i organitzadora. Alguns quadres els signaven junts: Gala-Dalí.", en: "Gala was his muse and organizer. Some paintings they signed together: Gala-Dalí.", cs: "Gala byla jeho múza a organizátorka. Některé obrazy podepisovali spolu: Gala-Dalí.", fr: "Gala était sa muse et son organisatrice. Certains tableaux, ils les signaient ensemble : Gala-Dalí." } },
    { letter: "H", emoji: "🐜", em: { ca: "🌅", en: "🌅", cs: "⏰", fr: "🌅" }, item: { es: "Hormiga", ca: "Horitzó", en: "Horizon", cs: "Hodiny", fr: "Horizon" },
      fact: { es: "En muchos cuadros de Dalí desfilan hormigas en fila, siempre ocupadísimas.", ca: "A l'horitzó de Portlligat el cel i el mar es toquen. Dalí el pintava una vegada i una altra.", en: "On the horizon of Portlligat the sky and the sea touch. Dalí painted it again and again.", cs: "Hodiny na Dalího obrazech jsou měkké a roztékají se jako sýr na sluníčku.", fr: "À l'horizon de Portlligat, le ciel et la mer se touchent. Dalí le peignait encore et encore." } },
    { letter: "I", emoji: "💡", item: { es: "Imaginación", ca: "Imaginació", en: "Imagination", cs: "Inspirace", fr: "Imagination" },
      fact: { es: "Su imaginación no descansaba ni durmiendo: por eso pintaba lo que soñaba.", ca: "La seva imaginació no descansava ni dormint: per això pintava el que somiava.", en: "His imagination never rested, not even while sleeping: that is why he painted his dreams.", cs: "Inspirace za ním chodila i ve spánku: proto maloval to, co se mu zdálo.", fr: "Son imagination ne se reposait jamais, même en dormant : c'est pour ça qu'il peignait ses rêves." } },
    { letter: "J", emoji: "💎", em: { cs: "✨", fr: "🫒" }, item: { es: "Joyas", ca: "Joies", en: "Jewels", cs: "Jiskra", fr: "Jardin" },
      fact: { es: "Dalí también diseñaba joyas de cuento: hizo un corazón de rubíes que late de verdad.", ca: "Dalí també dissenyava joies de conte: va fer un cor de robins que batega de debò.", en: "Dalí also designed fairy-tale jewels: he made a ruby heart that really beats.", cs: "Každý Dalího obraz začal malou jiskrou: nápadem, který přiletěl jako motýl.", fr: "Dans le jardin de Portlligat poussent des oliviers aux feuilles d'argent, face à la mer." } },
    { letter: "K", emoji: "🍞", em: { ca: "🎬", en: "🍳", cs: "😄" }, item: { es: "Kilos de pan", ca: "Keaton", en: "Kitchen", cs: "Knír", fr: "Kilos de pain" },
      fact: { es: "¡Kilos y kilos de pan! La fachada de su museo está llena de panecillos dorados.", ca: "Buster Keaton era el còmic preferit de Dalí i els seus amics: feia riure sense riure mai.", en: "At six, Dalí wanted to be a cook and live in the kitchen. His ambition kept growing and growing!", cs: "Dalího knír mířil špičkami k nebi jako hodinové ručičky v jedenáct deset.", fr: "Des kilos et des kilos de pain ! La façade de son musée est couverte de petits pains dorés." } },
    { letter: "L", emoji: "✒️", item: { es: "Lorca", ca: "Lorca", en: "Lorca", cs: "Lorca", fr: "Lorca" },
      fact: { es: "Federico García Lorca era su amigo poeta. Se escribían cartas llenas de dibujos.", ca: "Federico García Lorca era el seu amic poeta. S'escrivien cartes plenes de dibuixos.", en: "Federico García Lorca was his poet friend. They wrote each other letters full of drawings.", cs: "Federico García Lorca byl jeho přítel básník. Psali si dopisy plné obrázků.", fr: "Federico García Lorca était son ami poète. Ils s'écrivaient des lettres pleines de dessins." } },
    { letter: "M", emoji: "🏛️", item: { es: "Museo", ca: "Museu", en: "Museum", cs: "Muzeum", fr: "Musée" },
      fact: { es: "Dalí convirtió un teatro viejo en el museo más soñado: dentro hay hasta un sofá con forma de labios.", ca: "Dalí va convertir un teatre vell en el museu més somiat: a dins hi ha fins i tot un sofà amb forma de llavis.", en: "Dalí turned an old theatre into the dreamiest museum: inside there is even a sofa shaped like lips.", cs: "Dalí proměnil staré divadlo v nejsnovější muzeum: uvnitř je dokonce pohovka ve tvaru rtů.", fr: "Dalí a transformé un vieux théâtre en musée de rêve : dedans, il y a même un canapé en forme de lèvres." } },
    { letter: "N", emoji: "☁️", em: { en: "😴", cs: "💡" }, item: { es: "Nubes", ca: "Núvols", en: "Nap", cs: "Nápady", fr: "Nuages" },
      fact: { es: "Las nubes del Empordà salen alargadas en sus cuadros, estiradas como chicle por la tramontana.", ca: "Els núvols de l'Empordà surten allargats als seus quadres, estirats com xiclet per la tramuntana.", en: "Dalí took one-second naps holding a key. When it fell, cling!, he woke up with a fresh dream.", cs: "Nápady měl Dalí všude: v sýru, ve větru, ve vejcích i ve svém kníru.", fr: "Les nuages de l'Empordà sont tout allongés dans ses tableaux, étirés comme du chewing-gum par la tramontane." } },
    { letter: "O", emoji: "🫒", item: { es: "Olivos", ca: "Oliveres", en: "Olive trees", cs: "Olivovníky", fr: "Oliviers" },
      fact: { es: "Delante de su casa crecen olivos de hojas plateadas. Con la tramontana bailan todos a la vez.", ca: "Davant de casa seva creixen oliveres de fulles platejades. Amb la tramuntana ballen totes alhora.", en: "Olive trees with silvery leaves grow in front of his house. When the tramuntana blows, they all dance together.", cs: "Před jeho domem rostou olivovníky se stříbrnými listy. Když fouká tramontána, tančí všechny najednou.", fr: "Devant sa maison poussent des oliviers aux feuilles argentées. Avec la tramontane, ils dansent tous ensemble." } },
    { letter: "P", emoji: "🏠", item: { es: "Portlligat", ca: "Portlligat", en: "Portlligat", cs: "Portlligat", fr: "Portlligat" },
      fact: { es: "Su casa blanca junto al mar. Empezó siendo una cabaña y creció como un laberinto durante cuarenta años.", ca: "La seva casa blanca vora el mar. Va començar sent una cabana i va créixer com un laberint durant quaranta anys.", en: "His white house by the sea. It started as a hut and grew like a labyrinth for forty years.", cs: "Jeho bílý dům u moře. Začal jako chatka a čtyřicet let rostl jako bludiště.", fr: "Sa maison blanche au bord de la mer. Elle a commencé comme une cabane et a grandi comme un labyrinthe pendant quarante ans." } },
    { letter: "Q", emoji: "🧀", em: { ca: "🖼️", en: "❓", cs: "❓", fr: "❓" }, item: { es: "Queso", ca: "Quadre", en: "Question", cs: "Kvíz (Q)", fr: "Question" },
      fact: { es: "Los relojes blandos se le ocurrieron mirando un queso que se derretía después de cenar.", ca: "Cada quadre seu és com una endevinalla: hi ha imatges amagades dins d'altres imatges.", en: "Dalí always asked questions: what if clocks were soft? Great paintings start with a question.", cs: "Jeho obrazy jsou jako kvízy: schovávají v sobě tajné obrázky. Zkus je najít!", fr: "Dalí posait toujours des questions : et si les montres étaient molles ? Les grands tableaux commencent par une question." } },
    { letter: "R", emoji: "⏰", em: { en: "🌹", cs: "🌹", fr: "💭" }, item: { es: "Reloj blando", ca: "Rellotge tou", en: "Rose", cs: "Růže", fr: "Rêve" },
      fact: { es: "Su invento más famoso: relojes que se derriten y descansan en las ramas, blanditos.", ca: "El seu invent més famós: rellotges que es fonen i descansen a les branques, tous tous.", en: "Dalí painted a giant rose floating in the sky, with no balloon and no string.", cs: "Dalí namaloval obří růži, která se vznáší na nebi bez balonku a bez provázku.", fr: "Dalí peignait ses rêves : c'est pour ça que ses tableaux ressemblent à des songes éveillés." } },
    { letter: "S", emoji: "💭", em: { en: "⏰", cs: "🐘", fr: "😴" }, item: { es: "Sueños", ca: "Somnis", en: "Soft clocks", cs: "Slon", fr: "Sieste" },
      fact: { es: "Dalí pintaba sus sueños. Por eso en sus cuadros pasan cosas que solo pasan durmiendo.", ca: "Dalí pintava els seus somnis. Per això als seus quadres passen coses que només passen dormint.", en: "His most famous invention: clocks that melt and rest on branches, all soft.", cs: "Dalího sloni mají předlouhé tenké nohy jako chůdy a chodí po špičkách po nebi.", fr: "Dalí faisait des siestes d'une seconde, une clé à la main. Quand elle tombait, cling !, il se réveillait avec un rêve tout neuf." } },
    { letter: "T", emoji: "🌬️", item: { es: "Tramontana", ca: "Tramuntana", en: "Tramuntana", cs: "Tramontána", fr: "Tramontane" },
      fact: { es: "El viento del norte del Empordà. Sopla fuerte, despeina los olivos y deja el cielo limpísimo.", ca: "El vent del nord de l'Empordà. Bufa fort, despentina les oliveres i deixa el cel netíssim.", en: "The north wind of the Empordà. It blows hard, ruffles the olive trees and leaves the sky spotless.", cs: "Severní vítr z kraje Empordà. Fouká silně, cuchá olivovníky a nechává nebe křišťálově čisté.", fr: "Le vent du nord de l'Empordà. Il souffle fort, décoiffe les oliviers et laisse le ciel tout propre." } },
    { letter: "U", emoji: "🌌", em: { ca: "👁️", en: "😄", cs: "🧑‍🎨" }, item: { es: "Universo Dalí", ca: "Ulls", en: "Upturned moustache", cs: "Umělec", fr: "Univers" },
      fact: { es: "En el universo Dalí los relojes se derriten, los elefantes van de puntillas y las rosas flotan.", ca: "Dalí pintava ulls gegants: fins i tot va inventar un cel ple d'ulls per a una pel·lícula de somnis.", en: "His moustache turned UP to the sky, like clock hands at ten past eleven.", cs: "Umělec je ten, kdo ukazuje ostatním své sny. Dalí byl umělcem každou minutu dne.", fr: "Dans l'univers de Dalí, les montres fondent, les éléphants marchent sur la pointe des pieds et les roses flottent." } },
    { letter: "V", emoji: "👨‍🎨", item: { es: "Velázquez", ca: "Velázquez", en: "Velázquez", cs: "Velázquez", fr: "Velázquez" },
      fact: { es: "Un pintor antiguo que Dalí admiraba muchísimo. ¡Hasta le copió el bigote!", ca: "Un pintor antic que Dalí admirava moltíssim. Fins i tot li va copiar el bigoti!", en: "An old master Dalí admired enormously. He even copied his moustache!", cs: "Starý mistr, kterého Dalí nesmírně obdivoval. Dokonce od něj okoukal knír!", fr: "Un peintre ancien que Dalí admirait énormément. Il lui a même copié la moustache !" } },
    { letter: "W", emoji: "🤩", item: { es: "¡Wow!", ca: "Wow!", en: "Wow!", cs: "Wow!", fr: "Waouh !" },
      fact: { es: "Es lo que dice todo el mundo al entrar en su museo. Dalí lo diseñó para que abrieras los ojos así de grandes.", ca: "És el que diu tothom en entrar al seu museu. Dalí el va dissenyar perquè obrissis els ulls així de grossos.", en: "That is what everyone says when they walk into his museum. Dalí designed it to make your eyes open THIS wide.", cs: "To říká každý, kdo vejde do jeho muzea. Dalí ho navrhl tak, abys otevřel oči TAKHLE doširoka.", fr: "C'est ce que dit tout le monde en entrant dans son musée. Dalí l'a conçu pour que tu ouvres des yeux grands comme ça." } },
    { letter: "X", emoji: "🧪", em: { ca: "🍫" }, item: { es: "eXperimentos (X)", ca: "Xocolata", en: "eXperiments (X)", cs: "eXperimenty (X)", fr: "eXpériences (X)" },
      fact: { es: "Le encantaba experimentar: hizo fotos saltando por los aires y hasta salió en un anuncio de chocolate.", ca: "Dalí va sortir en un anunci de xocolata i deia, amb els ulls ben oberts, que n'estava boig!", en: "He loved experimenting: he took photos jumping in the air and even starred in a chocolate ad.", cs: "Rád experimentoval: fotil se ve výskoku a dokonce hrál v reklamě na čokoládu.", fr: "Il adorait faire des expériences : des photos en plein saut et même une publicité pour du chocolat." } },
    { letter: "Y", emoji: "🥚", em: { ca: "🗽", en: "💛", cs: "🗽", fr: "👁️" }, item: { es: "Yema de huevo", ca: "York (Nova York)", en: "Yellow", cs: "York (New York)", fr: "Yeux" },
      fact: { es: "Los huevos del tejado del museo son gigantes. ¡Imagínate la yema que tendrían dentro!", ca: "El famós quadre dels rellotges tous viu en un museu de Nova York. Hi va viatjar amb molta cura!", en: "Dalí painted the golden yellow light of the Empordà: at sunset everything looks like honey.", cs: "Slavný obraz s měkkými hodinami dnes bydlí v muzeu v New Yorku. Cestoval tam nadmíru opatrně!", fr: "Dalí peignait des yeux géants : il a même inventé un ciel plein d'yeux pour un film de rêves." } },
    { letter: "Z", emoji: "😴", item: { es: "Zzz...", ca: "Zzz...", en: "Zzz...", cs: "Zzz...", fr: "Zzz..." },
      fact: { es: "Dalí dormía siestas de un segundo con una llave en la mano. Al caerse, ¡clic!, despertaba con un sueño recién pescado.", ca: "Dalí feia migdiades d'un segon amb una clau a la mà. Quan queia, clic!, es despertava amb un somni acabat de pescar.", en: "Dalí took one-second naps holding a key. When it dropped, click!, he woke up with a freshly caught dream.", cs: "Dalí spal vteřinové šlofíky s klíčem v ruce. Když klíč spadl, cink!, probudil se s čerstvě uloveným snem.", fr: "Dalí faisait des siestes d'une seconde, une clé à la main. Quand elle tombait, clic !, il se réveillait avec un rêve tout frais." } }
  ],

  /* ---------- FAMOSOS ---------- */
  famous: [
    { emoji: "🎨", year: "1904", color: "#e8a020", name: { es: "Salvador Dalí", ca: "Salvador Dalí", en: "Salvador Dalí", cs: "Salvador Dalí", fr: "Salvador Dalí" },
      achievement: { es: "El pintor de los sueños. Nació en Figueres y pintó relojes blandos y elefantes patilargos.", ca: "El pintor dels somnis. Va néixer a Figueres i va pintar rellotges tous i elefants de potes llargues.", en: "The painter of dreams. He was born in Figueres and painted melting clocks and long-legged elephants.", cs: "Malíř snů. Narodil se ve Figueres a maloval měkké hodiny a slony na dlouhých nohách.", fr: "Le peintre des rêves. Il est né à Figueres et a peint des montres molles et des éléphants aux longues pattes." },
      quote: { es: "Yo no tomo drogas: yo soy el sueño.", ca: "Jo no prenc drogues: jo soc el somni.", en: "I do not take drugs: I am the dream.", cs: "Neberu drogy: já jsem sen.", fr: "Je ne prends pas de drogues : je suis le rêve." } },
    { emoji: "🌹", year: "1929", color: "#9c27b0", name: { es: "Gala", ca: "Gala", en: "Gala", cs: "Gala", fr: "Gala" },
      achievement: { es: "Su musa y organizadora: cuidaba del taller y de los viajes para que Dalí pudiera soñar tranquilo.", ca: "La seva musa i organitzadora: tenia cura del taller i dels viatges perquè Dalí pogués somiar tranquil.", en: "His muse and organizer: she looked after the workshop and the trips so Dalí could dream in peace.", cs: "Jeho múza a organizátorka: starala se o ateliér i o cesty, aby Dalí mohl v klidu snít.", fr: "Sa muse et son organisatrice : elle s'occupait de l'atelier et des voyages pour que Dalí puisse rêver tranquille." },
      quote: { es: "Los sueños también necesitan a alguien que los ordene.", ca: "Els somnis també necessiten algú que els endreci.", en: "Dreams also need someone to keep them tidy.", cs: "I sny potřebují někoho, kdo v nich udělá pořádek.", fr: "Les rêves aussi ont besoin de quelqu'un pour les ranger." } },
    { emoji: "✒️", year: "1923", color: "#43a047", name: { es: "Federico García Lorca", ca: "Federico García Lorca", en: "Federico García Lorca", cs: "Federico García Lorca", fr: "Federico García Lorca" },
      achievement: { es: "El amigo poeta. Se conocieron de estudiantes y se admiraban muchísimo el uno al otro.", ca: "L'amic poeta. Es van conèixer d'estudiants i s'admiraven moltíssim l'un a l'altre.", en: "The poet friend. They met as students and admired each other enormously.", cs: "Přítel básník. Poznali se jako studenti a nesmírně se navzájem obdivovali.", fr: "L'ami poète. Ils se sont connus étudiants et s'admiraient énormément l'un l'autre." },
      quote: { es: "Verde que te quiero verde.", ca: "Verd que t'estimo verd.", en: "Green, how I love you green.", cs: "Zelená, jak tě mám rád, zelená.", fr: "Vert, que je t'aime vert." } },
    { emoji: "🎬", year: "1929", color: "#f57c00", name: { es: "Luis Buñuel", ca: "Luis Buñuel", en: "Luis Buñuel", cs: "Luis Buñuel", fr: "Luis Buñuel" },
      achievement: { es: "El amigo del cine: juntos inventaban películas que parecían sueños proyectados en la pared.", ca: "L'amic del cinema: junts inventaven pel·lícules que semblaven somnis projectats a la paret.", en: "The film friend: together they invented movies that looked like dreams projected on the wall.", cs: "Přítel od filmu: společně vymýšleli filmy, které vypadaly jako sny promítnuté na zeď.", fr: "L'ami du cinéma : ensemble, ils inventaient des films qui ressemblaient à des rêves projetés sur le mur." },
      quote: { es: "El cine sirve para contar los sueños.", ca: "El cinema serveix per explicar els somnis.", en: "Movies are for telling dreams.", cs: "Film je na to, abychom si vyprávěli sny.", fr: "Le cinéma sert à raconter les rêves." } },
    { emoji: "🪟", year: "1925", color: "#00838f", name: { es: "Anna Maria Dalí", ca: "Anna Maria Dalí", en: "Anna Maria Dalí", cs: "Anna Maria Dalí", fr: "Anna Maria Dalí" },
      achievement: { es: "Su hermana. Posaba junto a la ventana mirando el mar de Cadaqués, quieta como un cuadro.", ca: "La seva germana. Posava vora la finestra mirant el mar de Cadaqués, quieta com un quadre.", en: "His sister. She posed by the window looking at the sea of Cadaqués, as still as a painting.", cs: "Jeho sestra. Stávala u okna, dívala se na moře u Cadaqués a byla tichá jako obraz.", fr: "Sa sœur. Elle posait près de la fenêtre en regardant la mer de Cadaqués, immobile comme un tableau." },
      quote: { es: "Desde nuestra ventana se veía todo el mar.", ca: "Des de la nostra finestra es veia tot el mar.", en: "From our window you could see the whole sea.", cs: "Z našeho okna bylo vidět celé moře.", fr: "De notre fenêtre, on voyait toute la mer." } }
  ],

  childDream: {
    girl: { es: "Pintora de sueños", ca: "Pintora de somnis", en: "Painter of dreams", cs: "Malířka snů", fr: "Peintre de rêves" },
    boy: { es: "Pintor de sueños", ca: "Pintor de somnis", en: "Painter of dreams", cs: "Malíř snů", fr: "Peintre de rêves" },
    kid: { es: "Peque que pinta sueños", ca: "Pinta somnis", en: "Painter of dreams", cs: "Malování snů", fr: "Peint les rêves" }
  },
  childQuote: { es: "Cuando sea mayor pintaré mis sueños. ¡Y los colgaré en el cielo del Empordà!", ca: "Quan sigui gran pintaré els meus somnis. I els penjaré al cel de l'Empordà!", en: "When I grow up I will paint my dreams. And I will hang them in the Empordà sky!", cs: "Až vyrostu, namaluji své sny. A pověsím je na oblohu nad krajem Empordà!", fr: "Quand je serai grand, je peindrai mes rêves. Et je les accrocherai dans le ciel de l'Empordà !" },

  /* ---------- MATES ---------- */
  mathEmojis: ["⏰", "🥚", "🐘", "🌹", "🐜", "💭"],

  /* ---------- CONSTRUCTOR: el cuadro de los sueños ---------- */
  builder: {
    title: { es: "¡Monta tu cuadro de los sueños!", ca: "Munta el teu quadre dels somnis!", en: "Build your dream painting!", cs: "Slož si svůj obraz snů!", fr: "Compose ton tableau des rêves !" },
    thing: { es: "cuadro", ca: "quadre", en: "painting", cs: "obraz", fr: "tableau" },
    parts: [
      { id: "fondo", label: { es: "Fondo del sueño", ca: "Fons del somni", en: "Dream background", cs: "Pozadí snu", fr: "Fond du rêve" },
        options: [{ id: "dorado", v: "#f2b544" }, { id: "rosa", v: "#f48fb1" }, { id: "azul", v: "#64b5f6" }, { id: "violeta", v: "#9575cd" }] },
      { id: "blando", label: { es: "Objeto blando", ca: "Objecte tou", en: "Soft object", cs: "Měkký předmět", fr: "Objet mou" },
        options: [{ id: "reloj", v: "reloj", icon: "⏰" }, { id: "queso", v: "queso", icon: "🧀" }, { id: "luna", v: "luna", icon: "🌙" }] },
      { id: "animal", label: { es: "Animal soñado", ca: "Animal somiat", en: "Dream animal", cs: "Vysněné zvíře", fr: "Animal rêvé" },
        options: [{ id: "elefante", v: "elefante", icon: "🐘" }, { id: "mariposa", v: "mariposa", icon: "🦋" }, { id: "caracol", v: "caracol", icon: "🐌" }] },
      { id: "toque", label: { es: "Toque final", ca: "Toc final", en: "Final touch", cs: "Poslední tečka", fr: "Touche finale" },
        options: [{ id: "bigote", v: "bigote", icon: "〰️" }, { id: "huevo", v: "huevo", icon: "🥚" }, { id: "rosa", v: "rosa", icon: "🌹" }] }
    ],
    svg(sel) {
      const fondo = sel.fondo || "#f2b544";
      /* el objeto blando cuelga de la rama seca, como en el cuadro */
      let blando = "";
      if (sel.blando === "queso") {
        blando = `<path d="M22 56 Q22 44 36 44 Q50 44 50 54 Q50 62 42 64 L42 74 Q42 80 36 79 Q31 78 33 70 Q25 68 22 62 Z" fill="#ffca28" stroke="#f9a825" stroke-width="1.5"/>
          <circle cx="31" cy="52" r="2.6" fill="#f9a825"/><circle cx="41" cy="56" r="2" fill="#f9a825"/><circle cx="36" cy="62" r="1.6" fill="#f9a825"/>`;
      } else if (sel.blando === "luna") {
        blando = `<path d="M24 44 Q18 56 26 66 Q32 73 42 70 Q34 68 32 58 Q30 48 38 42 Q30 40 24 44 Z" fill="#fff59d" stroke="#fbc02d" stroke-width="1.5"/>
          <circle cx="30" cy="74" r="2.6" fill="#fff59d"><animate attributeName="cy" values="74;80;74" dur="2s" repeatCount="indefinite"/></circle>`;
      } else {
        blando = `<path d="M20 50 Q20 40 34 40 Q48 40 48 50 Q48 58 41 61 L41 72 Q41 78 35 77 Q30 76 32 68 Q23 66 20 58 Z" fill="#fffde7" stroke="#bcaaa4" stroke-width="1.5"/>
          <path d="M34 43 L34 46 M45 50 L42 50 M34 57 L34 54 M23 50 L26 50" stroke="#8d6e63" stroke-width="1.6" stroke-linecap="round"/>
          <path d="M34 50 L29 46 M34 50 L38 46" stroke="#5d4037" stroke-width="1.8" stroke-linecap="round"/>
          <circle cx="35" cy="76" r="2.2" fill="#fffde7"><animate attributeName="opacity" values="1;.3;1" dur="1.6s" repeatCount="indefinite"/></circle>`;
      }
      /* el animal del sueño pasea por la playa */
      let animal = "";
      if (sel.animal === "mariposa") {
        animal = `<path d="M74 92 L102 92 L98 99 L78 99 Z" fill="#8d6e63" stroke="#5d4037" stroke-width="1"/>
          <line x1="88" y1="92" x2="88" y2="66" stroke="#5d4037" stroke-width="1.8"/>
          <path d="M88 70 Q74 58 72 72 Q72 82 88 84 Z" fill="#f48fb1" stroke="#ec407a" stroke-width="1.2"/>
          <path d="M88 70 Q102 58 104 72 Q104 82 88 84 Z" fill="#ffb74d" stroke="#fb8c00" stroke-width="1.2"/>`;
      } else if (sel.animal === "caracol") {
        animal = `<path d="M72 100 Q86 96 98 100 Q90 104 72 103 Z" fill="#a1887f"/>
          <circle cx="90" cy="90" r="10" fill="#ffb74d" stroke="#f57c00" stroke-width="1.5"/>
          <path d="M90 90 Q90 84 96 85 Q99 88 95 91 Q92 92 91 89" fill="none" stroke="#f57c00" stroke-width="1.6"/>
          <path d="M76 98 Q72 92 74 88 M79 98 Q78 91 81 88" stroke="#a1887f" stroke-width="2" fill="none" stroke-linecap="round"/>
          <circle cx="74" cy="87" r="1.3" fill="#4e342e"/><circle cx="81" cy="87" r="1.3" fill="#4e342e"/>`;
      } else {
        animal = `<ellipse cx="88" cy="62" rx="12" ry="8" fill="#90a4ae" stroke="#607d8b" stroke-width="1.2"/>
          <path d="M97 60 Q104 62 103 70 Q102 74 99 73" fill="none" stroke="#90a4ae" stroke-width="3.4" stroke-linecap="round"/>
          <path d="M80 57 Q75 52 78 48 Q83 50 84 55 Z" fill="#78909c"/>
          <circle cx="93" cy="59" r="1.4" fill="#37474f"/>
          <path d="M80 68 L77 102 M86 69 L85 102 M91 69 L92 102 M96 66 L100 102" stroke="#90a4ae" stroke-width="2" stroke-linecap="round"/>
          <ellipse cx="77" cy="103" rx="2.4" ry="1.4" fill="#607d8b"/><ellipse cx="85" cy="103" rx="2.4" ry="1.4" fill="#607d8b"/>
          <ellipse cx="92" cy="103" rx="2.4" ry="1.4" fill="#607d8b"/><ellipse cx="100" cy="103" rx="2.4" ry="1.4" fill="#607d8b"/>`;
      }
      /* el toque final flota en el cielo */
      let toque = "";
      if (sel.toque === "huevo") {
        toque = `<ellipse cx="86" cy="24" rx="9" ry="12" fill="#fffde7" stroke="#e0d6c2" stroke-width="1.4"/>
          <ellipse cx="83" cy="19" rx="2.6" ry="3.6" fill="#fff" opacity=".8"/>`;
      } else if (sel.toque === "rosa") {
        toque = `<circle cx="86" cy="24" r="9" fill="#e53935"/>
          <path d="M86 24 Q86 18 92 19 Q95 23 90 26 Q87 27 86 24 Q82 26 82 22" fill="none" stroke="#b71c1c" stroke-width="1.6"/>
          <path d="M79 30 Q75 33 72 32 M93 30 Q97 33 100 32" stroke="#43a047" stroke-width="2" fill="none" stroke-linecap="round"/>`;
      } else {
        toque = `<path d="M86 26 Q79 24 75 26 Q70 28 68 24 Q71 20 76 22 M86 26 Q93 24 97 26 Q102 28 104 24 Q101 20 96 22" fill="none" stroke="#4e342e" stroke-width="3" stroke-linecap="round">
          <animateTransform attributeName="transform" type="rotate" values="-3 86 26;3 86 26;-3 86 26" dur="2.4s" repeatCount="indefinite"/></path>`;
      }
      return `<svg viewBox="0 0 120 130" width="190" height="206">
        <defs><linearGradient id="daFons" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${fondo}"/><stop offset="100%" stop-color="#fff3d6"/>
        </linearGradient></defs>
        <rect x="4" y="4" width="112" height="122" rx="8" fill="url(#daFons)"/>
        <rect x="4" y="82" width="112" height="14" fill="#3b6ea5" opacity=".85"/>
        <path d="M14 88 q7 -3 14 0 M52 90 q7 -3 14 0 M90 87 q7 -3 14 0" stroke="rgba(255,255,255,.6)" stroke-width="1.6" fill="none" stroke-linecap="round"/>
        <path d="M4 96 L116 96 L116 126 Q60 120 4 126 Z" fill="#e8c98a"/>
        <path d="M14 112 Q14 84 22 66 Q26 56 34 52 M22 70 Q28 66 35 66" fill="none" stroke="#6d4c41" stroke-width="3.4" stroke-linecap="round"/>
        ${blando}
        ${animal}
        ${toque}
        <rect x="4" y="4" width="112" height="122" rx="8" fill="none" stroke="#8d6e63" stroke-width="4"/>
      </svg>`;
    }
  }
};
