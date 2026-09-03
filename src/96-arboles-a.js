"use strict";
/* ============================================================
   Contenido de ÁRBOLES (parte A):
   quiz, alfabeto, famosos, mates y constructor.
   ============================================================ */

THEMES.arboles = {
  emoji: "🌳", ready: true,
  grad: "linear-gradient(150deg,#2e7d32,#8d6e63)",
  name: { es: "Árboles", ca: "Arbres", en: "Trees", cs: "Stromy", fr: "Arbres" }
};

THEMES.arboles.content = {

  statusPlace: { es: "Conectado desde la copa de un roble gigante", ca: "Connectat des de la capçada d'un roure gegant", en: "Connected from the top of a giant oak", cs: "Připojeno z koruny obrovského dubu", fr: "Connecté depuis la cime d'un chêne géant" },
  welcome: { es: "¡Al bosque, {name}! Shhh... ¿oyes las hojas? Los árboles ya susurran tu nombre.", ca: "Cap al bosc, {name}! Xxxt... sents les fulles? Els arbres ja xiuxiuegen el teu nom.", en: "Into the forest, {name}! Shhh... can you hear the leaves? The trees are already whispering your name.", cs: "Hurá do lesa, {name}! Pššš... slyšíš listí? Stromy už šeptají tvoje jméno.", fr: "En route vers la forêt, {name} ! Chut... tu entends les feuilles ? Les arbres murmurent déjà ton nom." },

  /* ---------- QUIZ: 10 preguntas (todo verdad) ---------- */
  quiz: [
    { emoji: "🪵",
      q: { es: "¿Cómo sabemos cuántos años tiene un árbol?", ca: "Com sabem quants anys té un arbre?", en: "How do we know how old a tree is?", cs: "Jak poznáme, kolik je stromu let?", fr: "Comment sait-on l'âge d'un arbre ?" },
      options: [
        { es: "Midiendo su altura", ca: "Mesurant la seva alçada", en: "By measuring its height", cs: "Změříme jeho výšku", fr: "En mesurant sa hauteur" },
        { es: "Contando los anillos del tronco", ca: "Comptant els anells del tronc", en: "By counting the rings in its trunk", cs: "Spočítáme letokruhy v kmeni", fr: "En comptant les anneaux du tronc" },
        { es: "Contando sus hojas", ca: "Comptant les seves fulles", en: "By counting its leaves", cs: "Spočítáme jeho listy", fr: "En comptant ses feuilles" },
        { es: "Preguntándoselo", ca: "Preguntant-li-ho", en: "By asking it", cs: "Zeptáme se ho", fr: "En lui demandant" }],
      answer: 1,
      explanation: { es: "Cada año el tronco dibuja un anillo nuevo. Los anillos anchos cuentan años con mucha lluvia.", ca: "Cada any el tronc dibuixa un anell nou. Els anells amples expliquen anys amb molta pluja.", en: "Every year the trunk draws a new ring. Wide rings tell of years with lots of rain.", cs: "Kmen každý rok nakreslí nový kruh. Široké kruhy vyprávějí o letech s hodně deštěm.", fr: "Chaque année, le tronc dessine un nouvel anneau. Les anneaux larges racontent les années de pluie." } },
    { emoji: "🗼",
      q: { es: "¿Cuál es el ser vivo más alto del mundo?", ca: "Quin és l'ésser viu més alt del món?", en: "What is the tallest living thing in the world?", cs: "Co je nejvyšší živý tvor na světě?", fr: "Quel est l'être vivant le plus haut du monde ?" },
      options: [
        { es: "La jirafa", ca: "La girafa", en: "The giraffe", cs: "Žirafa", fr: "La girafe" },
        { es: "La ballena azul", ca: "La balena blava", en: "The blue whale", cs: "Plejtvák obrovský", fr: "La baleine bleue" },
        { es: "La secuoya roja", ca: "La sequoia roja", en: "The redwood sequoia", cs: "Sekvoje", fr: "Le séquoia" },
        { es: "El elefante", ca: "L'elefant", en: "The elephant", cs: "Slon", fr: "L'éléphant" }],
      answer: 2,
      explanation: { es: "La secuoya mide más de 100 metros, como un edificio de 30 pisos. La ballena es la más grande, ¡pero no la más alta!", ca: "La sequoia fa més de 100 metres, com un edifici de 30 pisos. La balena és la més gran, però no la més alta!", en: "The sequoia grows over 100 metres tall, like a 30-floor building. The whale is the biggest, but not the tallest!", cs: "Sekvoje měří přes 100 metrů, jako dům se 30 patry. Plejtvák je největší, ale ne nejvyšší!", fr: "Le séquoia mesure plus de 100 mètres, comme un immeuble de 30 étages. La baleine est la plus grande, mais pas la plus haute !" } },
    { emoji: "🍂",
      q: { es: "¿Por qué las hojas se vuelven naranjas en otoño?", ca: "Per què les fulles es tornen taronges a la tardor?", en: "Why do leaves turn orange in autumn?", cs: "Proč listí na podzim oranžoví?", fr: "Pourquoi les feuilles deviennent-elles orange en automne ?" },
      options: [
        { es: "Porque alguien las pinta", ca: "Perquè algú les pinta", en: "Because someone paints them", cs: "Protože je někdo natírá", fr: "Parce que quelqu'un les peint" },
        { es: "Porque el verde se esconde y aparecen los otros colores", ca: "Perquè el verd s'amaga i apareixen els altres colors", en: "Because the green hides and the other colours appear", cs: "Protože se zelená schová a ukážou se ostatní barvy", fr: "Parce que le vert se cache et les autres couleurs apparaissent" },
        { es: "Porque están sucias", ca: "Perquè estan brutes", en: "Because they are dirty", cs: "Protože jsou špinavé", fr: "Parce qu'elles sont sales" },
        { es: "Porque les da vergüenza", ca: "Perquè els fa vergonya", en: "Because they are shy", cs: "Protože se stydí", fr: "Parce qu'elles sont timides" }],
      answer: 1,
      explanation: { es: "El naranja y el amarillo estaban ahí todo el año, escondidos debajo del verde. En otoño el verde se retira y por fin se ven.", ca: "El taronja i el groc hi eren tot l'any, amagats sota el verd. A la tardor el verd es retira i per fi es veuen.", en: "The orange and yellow were there all year, hiding under the green. In autumn the green fades away and at last they show.", cs: "Oranžová a žlutá tam byly celý rok, schované pod zelenou. Na podzim zelená zmizí a konečně jsou vidět.", fr: "L'orange et le jaune étaient là toute l'année, cachés sous le vert. En automne, le vert s'en va et on les voit enfin." } },
    { emoji: "☀️",
      q: { es: "¿Qué comen las hojas para fabricar el alimento del árbol?", ca: "Què mengen les fulles per fabricar l'aliment de l'arbre?", en: "What do leaves eat to make the tree's food?", cs: "Co jedí listy, aby vyrobily stromu jídlo?", fr: "Que mangent les feuilles pour fabriquer la nourriture de l'arbre ?" },
      options: [
        { es: "Piedrecitas", ca: "Pedretes", en: "Little stones", cs: "Kamínky", fr: "Des petits cailloux" },
        { es: "Caramelos", ca: "Caramels", en: "Sweets", cs: "Bonbony", fr: "Des bonbons" },
        { es: "Luz del sol", ca: "Llum del sol", en: "Sunlight", cs: "Sluneční světlo", fr: "La lumière du soleil" },
        { es: "Espaguetis", ca: "Espaguetis", en: "Spaghetti", cs: "Špagety", fr: "Des spaghettis" }],
      answer: 2,
      explanation: { es: "Se llama fotosíntesis: con luz, agua y aire fabrican su comida. Y de regalo sueltan el aire limpio que respiramos.", ca: "Es diu fotosíntesi: amb llum, aigua i aire fabriquen el seu menjar. I de regal deixen anar l'aire net que respirem.", en: "It is called photosynthesis: with light, water and air they make their food. And as a gift they release the clean air we breathe.", cs: "Říká se tomu fotosyntéza: ze světla, vody a vzduchu si vyrobí jídlo. A jako dárek vypustí čistý vzduch, který dýcháme.", fr: "Ça s'appelle la photosynthèse : avec la lumière, l'eau et l'air, elles fabriquent leur nourriture. Et en cadeau, elles libèrent l'air pur qu'on respire." } },
    { emoji: "💧",
      q: { es: "¿Qué árbol guarda agua en su tronco barrigudo?", ca: "Quin arbre guarda aigua al seu tronc panxut?", en: "Which tree stores water in its big round trunk?", cs: "Který strom si schovává vodu v břichatém kmeni?", fr: "Quel arbre garde de l'eau dans son tronc ventru ?" },
      options: [
        { es: "El baobab", ca: "El baobab", en: "The baobab", cs: "Baobab", fr: "Le baobab" },
        { es: "El pino", ca: "El pi", en: "The pine", cs: "Borovice", fr: "Le pin" },
        { es: "El abedul", ca: "El bedoll", en: "The birch", cs: "Bříza", fr: "Le bouleau" },
        { es: "El manzano", ca: "La pomera", en: "The apple tree", cs: "Jabloň", fr: "Le pommier" }],
      answer: 0,
      explanation: { es: "El baobab guarda miles de litros en la barriga para cuando pasa mucho tiempo sin llover.", ca: "El baobab guarda milers de litres a la panxa per quan passa molt de temps sense ploure.", en: "The baobab keeps thousands of litres in its belly for the times when it does not rain for ages.", cs: "Baobab si v břiše schovává tisíce litrů na časy, kdy dlouho neprší.", fr: "Le baobab garde des milliers de litres dans son ventre pour les longues périodes sans pluie." } },
    { emoji: "🍄",
      q: { es: "¿Cómo se mandan mensajes los árboles?", ca: "Com s'envien missatges els arbres?", en: "How do trees send messages to each other?", cs: "Jak si stromy posílají zprávy?", fr: "Comment les arbres s'envoient-ils des messages ?" },
      options: [
        { es: "Por teléfono", ca: "Per telèfon", en: "By phone", cs: "Telefonem", fr: "Par téléphone" },
        { es: "Con cartas", ca: "Amb cartes", en: "With letters", cs: "Dopisy", fr: "Avec des lettres" },
        { es: "Gritando muy fuerte", ca: "Cridant molt fort", en: "By shouting very loudly", cs: "Hlasitým křikem", fr: "En criant très fort" },
        { es: "Por una red de hongos bajo tierra", ca: "Per una xarxa de fongs sota terra", en: "Through a network of fungi underground", cs: "Podzemní sítí hub", fr: "Par un réseau de champignons sous terre" }],
      answer: 3,
      explanation: { es: "Los hilos de los hongos conectan las raíces de los árboles: es el internet del bosque.", ca: "Els fils dels fongs connecten les arrels dels arbres: és l'internet del bosc.", en: "The threads of the fungi connect the roots of the trees: it is the internet of the forest.", cs: "Vlákna hub propojují kořeny stromů: je to lesní internet.", fr: "Les fils des champignons relient les racines des arbres : c'est l'internet de la forêt." } },
    { emoji: "🫒",
      q: { es: "¿Qué árbol puede vivir miles de años?", ca: "Quin arbre pot viure milers d'anys?", en: "Which tree can live for thousands of years?", cs: "Který strom může žít tisíce let?", fr: "Quel arbre peut vivre des milliers d'années ?" },
      options: [
        { es: "El girasol", ca: "El gira-sol", en: "The sunflower", cs: "Slunečnice", fr: "Le tournesol" },
        { es: "El olivo", ca: "L'olivera", en: "The olive tree", cs: "Olivovník", fr: "L'olivier" },
        { es: "El árbol de Navidad", ca: "L'arbre de Nadal", en: "The Christmas tree", cs: "Vánoční stromek", fr: "Le sapin de Noël" },
        { es: "El bambú", ca: "El bambú", en: "The bamboo", cs: "Bambus", fr: "Le bambou" }],
      answer: 1,
      explanation: { es: "Hay olivos más viejos que los castillos que todavía dan aceitunas cada año.", ca: "Hi ha oliveres més velles que els castells que encara donen olives cada any.", en: "Some olive trees are older than castles and still give olives every year.", cs: "Některé olivovníky jsou starší než hrady a pořád každý rok dávají olivy.", fr: "Certains oliviers sont plus vieux que les châteaux et donnent encore des olives chaque année." } },
    { emoji: "🌰",
      q: { es: "¿Cuál es la semilla del roble?", ca: "Quina és la llavor del roure?", en: "What is the oak's seed?", cs: "Co je semínko dubu?", fr: "Quelle est la graine du chêne ?" },
      options: [
        { es: "La bellota", ca: "La gla", en: "The acorn", cs: "Žalud", fr: "Le gland" },
        { es: "La piña", ca: "La pinya", en: "The pine cone", cs: "Šiška", fr: "La pomme de pin" },
        { es: "La castaña", ca: "La castanya", en: "The chestnut", cs: "Kaštan", fr: "La châtaigne" },
        { es: "La manzana", ca: "La poma", en: "The apple", cs: "Jablko", fr: "La pomme" }],
      answer: 0,
      explanation: { es: "Las ardillas entierran bellotas para el invierno... y de las que olvidan nacen robles nuevos.", ca: "Els esquirols enterren glans per a l'hivern... i de les que obliden neixen roures nous.", en: "Squirrels bury acorns for the winter... and new oaks grow from the ones they forget.", cs: "Veverky si zahrabávají žaludy na zimu... a z těch zapomenutých vyrostou nové duby.", fr: "Les écureuils enterrent des glands pour l'hiver... et de ceux qu'ils oublient naissent de nouveaux chênes." } },
    { emoji: "🎋",
      q: { es: "¿Qué planta gigante puede crecer casi un metro en un día?", ca: "Quina planta gegant pot créixer gairebé un metre en un dia?", en: "Which giant plant can grow almost a metre in one day?", cs: "Která obří rostlina vyroste skoro o metr za jediný den?", fr: "Quelle plante géante peut grandir de presque un mètre en un jour ?" },
      options: [
        { es: "El roble", ca: "El roure", en: "The oak", cs: "Dub", fr: "Le chêne" },
        { es: "El olivo", ca: "L'olivera", en: "The olive tree", cs: "Olivovník", fr: "L'olivier" },
        { es: "El bambú", ca: "El bambú", en: "The bamboo", cs: "Bambus", fr: "Le bambou" },
        { es: "El cactus", ca: "El cactus", en: "The cactus", cs: "Kaktus", fr: "Le cactus" }],
      answer: 2,
      explanation: { es: "El bambú es el campeón de crecer rápido. Y en realidad no es un árbol: ¡es una hierba gigante!", ca: "El bambú és el campió de créixer ràpid. I en realitat no és un arbre: és una herba gegant!", en: "Bamboo is the champion of fast growing. And it is not really a tree: it is a giant grass!", cs: "Bambus je šampion v rychlém růstu. A ve skutečnosti to není strom: je to obří tráva!", fr: "Le bambou est le champion de la vitesse. Et en vrai, ce n'est pas un arbre : c'est une herbe géante !" } },
    { emoji: "🌬️",
      q: { es: "¿Qué nos regalan los árboles para respirar?", ca: "Què ens regalen els arbres per respirar?", en: "What do trees give us to breathe?", cs: "Co nám stromy darují k dýchání?", fr: "Que nous offrent les arbres pour respirer ?" },
      options: [
        { es: "Humo", ca: "Fum", en: "Smoke", cs: "Kouř", fr: "De la fumée" },
        { es: "Agua con gas", ca: "Aigua amb gas", en: "Sparkling water", cs: "Perlivou vodu", fr: "De l'eau gazeuse" },
        { es: "Purpurina", ca: "Purpurina", en: "Glitter", cs: "Třpytky", fr: "Des paillettes" },
        { es: "Oxígeno", ca: "Oxigen", en: "Oxygen", cs: "Kyslík", fr: "De l'oxygène" }],
      answer: 3,
      explanation: { es: "Sus hojas fabrican oxígeno: el aire limpio que respiran los niños, los gatos y los robots curiosos.", ca: "Les seves fulles fabriquen oxigen: l'aire net que respiren els nens, els gats i els robots curiosos.", en: "Their leaves make oxygen: the clean air that children, cats and curious robots breathe.", cs: "Jejich listy vyrábějí kyslík: čistý vzduch, který dýchají děti, kočky i zvědaví roboti.", fr: "Leurs feuilles fabriquent l'oxygène : l'air pur que respirent les enfants, les chats et les robots curieux." } },
    { emoji: "🌲",
      q: { es: "¿Qué árbol se queda verde todo el invierno?", ca: "Quin arbre es queda verd tot l'hivern?", en: "Which tree stays green all winter long?", cs: "Který strom zůstává zelený celou zimu?", fr: "Quel arbre reste vert tout l'hiver ?" },
      options: [
        { es: "El manzano", ca: "La pomera", en: "The apple tree", cs: "Jabloň", fr: "Le pommier" },
        { es: "El pino", ca: "El pi", en: "The pine", cs: "Borovice", fr: "Le pin" },
        { es: "El castaño", ca: "El castanyer", en: "The chestnut tree", cs: "Kaštanovník", fr: "Le châtaignier" },
        { es: "La higuera", ca: "La figuera", en: "The fig tree", cs: "Fíkovník", fr: "Le figuier" }],
      answer: 1,
      explanation: { es: "Sus hojas son agujas finas con un abrigo de cera: aguantan el frío y no se caen en otoño.", ca: "Les seves fulles són agulles fines amb un abric de cera: aguanten el fred i no cauen a la tardor.", en: "Its leaves are thin needles with a waxy coat: they stand the cold and do not fall in autumn.", cs: "Jeho listy jsou tenké jehličky s voskovým kabátkem: vydrží mráz a na podzim neopadají.", fr: "Ses feuilles sont de fines aiguilles avec un manteau de cire : elles résistent au froid et ne tombent pas en automne." } },
    { emoji: "🌸",
      q: { es: "¿En qué estación se llenan de flores los árboles?", ca: "En quina estació s'omplen de flors els arbres?", en: "In which season do trees fill up with blossoms?", cs: "Ve kterém ročním období se stromy obalí květy?", fr: "À quelle saison les arbres se couvrent-ils de fleurs ?" },
      options: [
        { es: "En invierno", ca: "A l'hivern", en: "In winter", cs: "V zimě", fr: "En hiver" },
        { es: "En verano", ca: "A l'estiu", en: "In summer", cs: "V létě", fr: "En été" },
        { es: "En primavera", ca: "A la primavera", en: "In spring", cs: "Na jaře", fr: "Au printemps" },
        { es: "En otoño", ca: "A la tardor", en: "In autumn", cs: "Na podzim", fr: "En automne" }],
      answer: 2,
      explanation: { es: "En primavera los almendros y los cerezos se visten de flores. De cada flor puede nacer luego un fruto.", ca: "A la primavera els ametllers i els cirerers es vesteixen de flors. De cada flor pot néixer després un fruit.", en: "In spring the almond and cherry trees dress up in blossoms. Later, each flower can become a fruit.", cs: "Na jaře se mandloně a třešně obléknou do květů. Z každého květu pak může vyrůst plod.", fr: "Au printemps, les amandiers et les cerisiers s'habillent de fleurs. De chaque fleur peut ensuite naître un fruit." } },
    { emoji: "🌱",
      q: { es: "¿Qué es lo primero que le sale a una semilla de árbol cuando germina?", ca: "Què és el primer que li surt a una llavor d'arbre quan germina?", en: "What is the first thing that grows out of a tree seed when it sprouts?", cs: "Co semínku stromu vyroste jako první, když vyklíčí?", fr: "Quelle est la première chose qui sort d'une graine d'arbre quand elle germe ?" },
      options: [
        { es: "Una raíz", ca: "Una arrel", en: "A root", cs: "Kořínek", fr: "Une racine" },
        { es: "Una flor", ca: "Una flor", en: "A flower", cs: "Kytička", fr: "Une fleur" },
        { es: "Una manzana", ca: "Una poma", en: "An apple", cs: "Jablíčko", fr: "Une pomme" },
        { es: "Una rama con nido", ca: "Una branca amb niu", en: "A branch with a nest", cs: "Větev s hnízdem", fr: "Une branche avec un nid" }],
      answer: 0,
      explanation: { es: "Primero baja una raicilla a beber agua y agarrarse a la tierra. Después sube el tallito buscando la luz.", ca: "Primer baixa una arreleta a beure aigua i agafar-se a la terra. Després puja la tigeta buscant la llum.", en: "First a little root goes down to drink water and hold on to the soil. Then the little stem climbs up looking for light.", cs: "Nejdřív dolů vyroste kořínek, aby pil vodu a držel se v hlíně. Pak nahoru vyleze stonek a hledá světlo.", fr: "D'abord une petite racine descend boire de l'eau et s'accrocher à la terre. Ensuite, la petite tige monte chercher la lumière." } },
    { emoji: "🍾",
      q: { es: "¿De qué árbol sale el corcho que tapa las botellas?", ca: "De quin arbre surt el suro que tapa les ampolles?", en: "Which tree gives us the cork that plugs bottles?", cs: "Ze kterého stromu je korek, který zavírá lahve?", fr: "De quel arbre vient le liège qui bouche les bouteilles ?" },
      options: [
        { es: "Del limonero", ca: "Del llimoner", en: "The lemon tree", cs: "Z citroníku", fr: "Du citronnier" },
        { es: "De la palmera", ca: "De la palmera", en: "The palm tree", cs: "Z palmy", fr: "Du palmier" },
        { es: "Del abeto", ca: "De l'avet", en: "The fir tree", cs: "Z jedle", fr: "Du sapin" },
        { es: "Del alcornoque", ca: "De l'alzina surera", en: "The cork oak", cs: "Z korkového dubu", fr: "Du chêne-liège" }],
      answer: 3,
      explanation: { es: "El alcornoque tiene una corteza gruesa y blandita: se le quita con cuidado, se hacen tapones y le vuelve a crecer.", ca: "L'alzina surera té una escorça gruixuda i toveta: se li treu amb compte, se'n fan taps i li torna a créixer.", en: "The cork oak has a thick, soft bark: it is peeled off gently, made into corks, and it grows back again.", cs: "Korkový dub má tlustou měkkou kůru: opatrně se sloupne, vyrobí se z ní zátky a stromu zase doroste.", fr: "Le chêne-liège a une écorce épaisse et douce : on l'enlève avec soin, on en fait des bouchons, et elle repousse." } },
    { emoji: "🌎",
      q: { es: "¿Cómo se llama el bosque más grande del mundo?", ca: "Com es diu el bosc més gran del món?", en: "What is the name of the biggest forest in the world?", cs: "Jak se jmenuje největší les na světě?", fr: "Comment s'appelle la plus grande forêt du monde ?" },
      options: [
        { es: "La selva del Amazonas", ca: "La selva de l'Amazones", en: "The Amazon rainforest", cs: "Amazonský prales", fr: "La forêt d'Amazonie" },
        { es: "El bosque de chocolate", ca: "El bosc de xocolata", en: "The chocolate forest", cs: "Čokoládový les", fr: "La forêt en chocolat" },
        { es: "El parque de mi barrio", ca: "El parc del meu barri", en: "The park round the corner", cs: "Park za rohem", fr: "Le parc du quartier" },
        { es: "El bosque de los tres pinos", ca: "El bosc dels tres pins", en: "The three pine wood", cs: "Les tří borovic", fr: "Le bois des trois pins" }],
      answer: 0,
      explanation: { es: "La selva del Amazonas, en Sudamérica, es tan grande que sus árboles fabrican nubes de lluvia. Allí viven millones de animales.", ca: "La selva de l'Amazones, a Sud-amèrica, és tan gran que els seus arbres fabriquen núvols de pluja. Hi viuen milions d'animals.", en: "The Amazon rainforest in South America is so big that its trees make rain clouds. Millions of animals live there.", cs: "Amazonský prales v Jižní Americe je tak velký, že jeho stromy vyrábějí dešťové mraky. Žijí v něm miliony zvířat.", fr: "La forêt d'Amazonie, en Amérique du Sud, est si grande que ses arbres fabriquent des nuages de pluie. Des millions d'animaux y vivent." } }
  ],

  /* ---------- ALFABETO: 26 letras ---------- */
  alphabet: [
    { letter: "A", emoji: "🌳", item: { es: "Árbol", ca: "Arbre", en: "Acorn", cs: "Alej", fr: "Arbre" },
      fact: { es: "Un árbol es un ser vivo gigante: puede vivir mucho más que las personas.", ca: "Un arbre és un ésser viu gegant: pot viure molt més que les persones.", en: "An acorn is the oak's seed. Inside it, a whole giant tree is sleeping.", cs: "Alej je řada stromů podél cesty. Krásně stíní a zpívají v ní ptáci.", fr: "Un arbre est un être vivant géant : il peut vivre bien plus longtemps que les gens." } },
    { letter: "B", emoji: "🌴", item: { es: "Baobab", ca: "Baobab", en: "Baobab", cs: "Baobab", fr: "Baobab" },
      fact: { es: "El baobab guarda miles de litros de agua en su tronco barrigudo.", ca: "El baobab guarda milers de litres d'aigua al seu tronc panxut.", en: "The baobab stores thousands of litres of water in its big round trunk.", cs: "Baobab si ve svém břichatém kmeni schovává tisíce litrů vody.", fr: "Le baobab garde des milliers de litres d'eau dans son tronc ventru." } },
    { letter: "C", emoji: "🌸", item: { es: "Cerezo", ca: "Cirerer", en: "Cherry tree", cs: "Cedr", fr: "Cerisier" },
      fact: { es: "En primavera el cerezo se llena de flores rosas: parece una nube.", ca: "A la primavera el cirerer s'omple de flors roses: sembla un núvol.", en: "In spring the cherry tree fills up with pink flowers, like a cloud.", cs: "Cedr je mohutný strom z hor. Roste pomalu a žije stovky let.", fr: "Au printemps, le cerisier se couvre de fleurs roses : on dirait un nuage." } },
    { letter: "D", emoji: "🐲", item: { es: "Drago", ca: "Drago", en: "Dragon tree", cs: "Dřevo", fr: "Dragonnier" },
      fact: { es: "El drago de Canarias tiene la savia roja: la llaman sangre de dragón.", ca: "El drago de Canàries té la saba vermella: en diuen sang de drac.", en: "The dragon tree has red sap. People call it dragon's blood.", cs: "Dřevo je poklad ze stromů: staví se z něj domy, lodě i houpačky.", fr: "Le dragonnier a une sève rouge : on l'appelle le sang de dragon." } },
    { letter: "E", emoji: "🐨", item: { es: "Eucalipto", ca: "Eucaliptus", en: "Eucalyptus", cs: "Eukalyptus", fr: "Eucalyptus" },
      fact: { es: "Las hojas del eucalipto son la comida favorita de los koalas.", ca: "Les fulles de l'eucaliptus són el menjar preferit dels coales.", en: "Eucalyptus leaves are the koala's favourite food.", cs: "Listy eukalyptu jsou nejoblíbenější jídlo koaly.", fr: "Les feuilles de l'eucalyptus sont le plat préféré des koalas." } },
    { letter: "F", emoji: "☀️", item: { es: "Fotosíntesis", ca: "Fotosíntesi", en: "Forest", cs: "Fotosyntéza", fr: "Forêt" },
      fact: { es: "Con la fotosíntesis, las hojas comen luz del sol y regalan aire limpio.", ca: "Amb la fotosíntesi, les fulles mengen llum del sol i regalen aire net.", en: "A forest is a family of trees. Together they make their own cool, damp air.", cs: "Při fotosyntéze listy jedí sluneční světlo a rozdávají čistý vzduch.", fr: "La forêt est une famille d'arbres. Ensemble, ils fabriquent leur propre air frais." } },
    { letter: "G", emoji: "💛", item: { es: "Ginkgo", ca: "Ginkgo", en: "Ginkgo", cs: "Ginkgo", fr: "Ginkgo" },
      fact: { es: "El ginkgo es un fósil viviente: ya existía en tiempos de los dinosaurios.", ca: "El ginkgo és un fòssil vivent: ja existia en temps dels dinosaures.", en: "The ginkgo is a living fossil: it already existed in dinosaur times.", cs: "Ginkgo je živoucí fosilie: rostlo už v dobách dinosaurů.", fr: "Le ginkgo est un fossile vivant : il existait déjà au temps des dinosaures." } },
    { letter: "H", emoji: "🍃", item: { es: "Hoja", ca: "Heura", en: "Holly", cs: "Houby", fr: "Hêtre" },
      fact: { es: "Las hojas son las placas solares del árbol: atrapan la luz para fabricar comida.", ca: "L'heura s'enfila pels troncs agafant-se amb unes arrels petites com dits.", en: "Holly keeps its shiny green leaves even in winter, with little red berries.", cs: "Houby pod zemí propojují kořeny stromů: posílají si po nich zprávy i jídlo.", fr: "Le hêtre a une écorce lisse et grise. Ses feuilles font un toit très épais." } },
    { letter: "I", emoji: "💬", item: { es: "Internet del bosque", ca: "Internet del bosc", en: "Internet of the forest", cs: "Internet lesa", fr: "Internet de la forêt" },
      fact: { es: "¡El internet del bosque existe! Los árboles se mandan mensajes por las raíces.", ca: "L'internet del bosc existeix! Els arbres s'envien missatges per les arrels.", en: "The internet of the forest is real! Trees send messages through their roots.", cs: "Lesní internet opravdu existuje! Stromy si posílají zprávy kořeny.", fr: "L'internet de la forêt existe ! Les arbres s'envoient des messages par les racines." } },
    { letter: "J", emoji: "🏡", item: { es: "Jardín", ca: "Jardí", en: "Jungle", cs: "Jabloň", fr: "Jardin" },
      fact: { es: "Un árbol en el jardín da sombra, fruta y un sitio para trepar.", ca: "Un arbre al jardí dóna ombra, fruita i un lloc per enfilar-s'hi.", en: "The jungle is a forest so thick that the treetops touch, like a green roof.", cs: "Jabloň nám dává jablka. Na jaře kvete bíle a růžově.", fr: "Un arbre au jardin donne de l'ombre, des fruits et un coin pour grimper." } },
    { letter: "K", emoji: "🥝", item: { es: "Kiwi", ca: "Kiwi", en: "Kapok", cs: "Kůra", fr: "Kapokier" },
      fact: { es: "El kiwi no crece en un árbol: crece en una liana leñosa que trepa.", ca: "El kiwi no creix en un arbre: creix en una liana llenyosa que s'enfila.", en: "The kapok is a jungle giant: hundreds of animals can live in one tree.", cs: "Kůra je kabát stromu: chrání ho před zimou, sluncem i broučky.", fr: "Le kapokier est un géant de la jungle : des centaines d'animaux y habitent." } },
    { letter: "L", emoji: "🐒", item: { es: "Liana", ca: "Liana", en: "Leaf", cs: "Les", fr: "Liane" },
      fact: { es: "Las lianas son cuerdas vivas: los monos las usan como columpios.", ca: "Les lianes són cordes vives: els micos les fan servir com a gronxadors.", en: "A leaf is the tree's solar panel: it catches sunlight to make food.", cs: "Les je domov tisíců zvířat. A po dešti krásně voní!", fr: "Les lianes sont des cordes vivantes : les singes s'en servent de balançoires." } },
    { letter: "M", emoji: "🦀", item: { es: "Manglar", ca: "Manglar", en: "Mangrove", cs: "Mangrovy", fr: "Mangrove" },
      fact: { es: "Los manglares crecen en el mar con raíces zancudas. Son la guardería de los peces.", ca: "Els manglars creixen al mar amb arrels com xanques. Són el bressol dels peixets.", en: "Mangroves grow in the sea on stilt roots. Baby fish hide among them.", cs: "Mangrovy rostou v moři na kořenech jako na chůdách. Schovávají se v nich rybky.", fr: "Les mangroves poussent dans la mer sur des racines en échasses. Les petits poissons s'y cachent." } },
    { letter: "N", emoji: "🪹", item: { es: "Nido", ca: "Niu", en: "Nest", cs: "Nektar", fr: "Nid" },
      fact: { es: "Muchos pájaros hacen su nido en las ramas: el árbol es su casa.", ca: "Molts ocells fan el seu niu a les branques: l'arbre és casa seva.", en: "Many birds build their nests on the branches: the tree is their home.", cs: "Nektar z květů stromů je sladká odměna pro včely a čmeláky.", fr: "Beaucoup d'oiseaux font leur nid dans les branches : l'arbre est leur maison." } },
    { letter: "O", emoji: "🫒", item: { es: "Olivo", ca: "Olivera", en: "Olive tree", cs: "Olivovník", fr: "Olivier" },
      fact: { es: "Hay olivos con más de dos mil años que todavía dan aceitunas.", ca: "Hi ha oliveres amb més de dos mil anys que encara donen olives.", en: "Some olive trees are more than two thousand years old and still give olives.", cs: "Některé olivovníky jsou přes dva tisíce let staré a pořád dávají olivy.", fr: "Certains oliviers ont plus de deux mille ans et donnent encore des olives." } },
    { letter: "P", emoji: "🌲", item: { es: "Pino", ca: "Pi", en: "Pine", cs: "Pařez", fr: "Pin" },
      fact: { es: "Las piñas del pino se abren cuando hace calorcito y se cierran con la lluvia.", ca: "Les pinyes del pi s'obren quan fa caloreta i es tanquen amb la pluja.", en: "Pine cones open in warm dry weather and close when it rains.", cs: "Na pařezu spočítáš letokruhy: každý kruh je jeden rok života stromu.", fr: "Les pommes de pin s'ouvrent quand il fait chaud et se ferment sous la pluie." } },
    { letter: "Q", emoji: "📖", item: { es: "Quercus", ca: "Quercus", en: "Quercus", cs: "Quercus", fr: "Quercus" },
      fact: { es: "Quercus es el nombre científico del roble: los árboles tienen nombre en latín.", ca: "Quercus és el nom científic del roure: els arbres tenen nom en llatí.", en: "Quercus is the oak's scientific name: every tree has a Latin name too.", cs: "Quercus je vědecké jméno dubu: každý strom má i jméno v latině.", fr: "Quercus est le nom scientifique du chêne : chaque arbre a un nom en latin." } },
    { letter: "R", emoji: "🌱", item: { es: "Raíces", ca: "Roure", en: "Roots", cs: "Réva", fr: "Racines" },
      fact: { es: "Las raíces sujetan el árbol y beben agua. ¡Y charlan con sus vecinas!", ca: "El roure és el rei del bosc: al seu voltant hi viuen centenars d'animalons.", en: "Roots hold the tree up and drink water. And they chat with their neighbours!", cs: "Réva je popínavá dřevina: šplhá vzhůru a dává nám sladké hrozny.", fr: "Les racines tiennent l'arbre debout et boivent l'eau. Et elles bavardent avec les voisines !" } },
    { letter: "S", emoji: "🗼", item: { es: "Secuoya", ca: "Sequoia", en: "Sequoia", cs: "Sekvoje", fr: "Séquoia" },
      fact: { es: "La secuoya es el ser vivo más alto del mundo: ¡más de 100 metros!", ca: "La sequoia és l'ésser viu més alt del món: més de 100 metres!", en: "The sequoia is the tallest living thing in the world: over 100 metres!", cs: "Sekvoje je nejvyšší živý tvor na světě: měří přes 100 metrů!", fr: "Le séquoia est l'être vivant le plus haut du monde : plus de 100 mètres !" } },
    { letter: "T", emoji: "🪵", item: { es: "Tronco", ca: "Tronc", en: "Trunk", cs: "Topol", fr: "Tronc" },
      fact: { es: "El tronco lleva el agua de las raíces a las hojas, como un ascensor.", ca: "El tronc porta l'aigua de les arrels a les fulles, com un ascensor.", en: "The trunk carries water from the roots to the leaves, like a lift.", cs: "Topol roste rychle a vysoko. Když odkvete, sněží z něj bílé chmýří.", fr: "Le tronc porte l'eau des racines jusqu'aux feuilles, comme un ascenseur." } },
    { letter: "U", emoji: "🐦", item: { es: "Urraca", ca: "Ullastre", en: "Understorey", cs: "Uhlí", fr: "Usine à oxygène" },
      fact: { es: "La urraca esconde tesoros en los árboles, como una pirata con alas.", ca: "L'ullastre és l'olivera salvatge: creix tota sola vora el mar.", en: "The understorey is the shady floor of the forest, full of ferns and mushrooms.", cs: "Uhlí vzniklo z pravěkých lesů, které spaly miliony let pod zemí.", fr: "L'arbre est une usine à oxygène : ses feuilles fabriquent l'air qu'on respire." } },
    { letter: "V", emoji: "💚", item: { es: "Verde", ca: "Verd", en: "Veins", cs: "Větev", fr: "Vert" },
      fact: { es: "El verde de las hojas es la clorofila: el polvillo mágico que atrapa la luz.", ca: "El verd de les fulles és la clorofil·la: atrapa la llum per fer l'aliment.", en: "The veins of a leaf are tiny pipes that carry water, like little roads.", cs: "Větev je paže stromu: nese listy, květy, ptáky i houpačky.", fr: "Le vert des feuilles, c'est la chlorophylle : elle attrape la lumière du soleil." } },
    { letter: "W", emoji: "🌍", item: { es: "Wangari", ca: "Wangari", en: "Wangari", cs: "Wangari", fr: "Wangari" },
      fact: { es: "Wangari Maathai plantó millones de árboles en África con miles de mujeres.", ca: "Wangari Maathai va plantar milions d'arbres a l'Àfrica amb milers de dones.", en: "Wangari Maathai planted millions of trees in Africa with thousands of women.", cs: "Wangari Maathaiová vysadila v Africe miliony stromů s tisíci žen.", fr: "Wangari Maathai a planté des millions d'arbres en Afrique avec des milliers de femmes." } },
    { letter: "X", emoji: "🚿", item: { es: "Xilema", ca: "Xilema", en: "Xylem", cs: "Xylém", fr: "Xylème" },
      fact: { es: "El xilema son las tuberías del árbol: por ahí sube el agua hasta arriba del todo.", ca: "El xilema són les canonades de l'arbre: per allà puja l'aigua fins a dalt de tot.", en: "The xylem is the tree's plumbing: water climbs through it all the way to the top.", cs: "Xylém je potrubí stromu: voda jím stoupá až do koruny.", fr: "Le xylème, c'est la tuyauterie de l'arbre : l'eau y monte jusqu'en haut." } },
    { letter: "Y", emoji: "🐣", item: { es: "Yema", ca: "Yuzu", en: "Yew", cs: "Yuzu", fr: "Yeuse" },
      fact: { es: "La yema es un botoncito donde duerme una hoja nueva todo el invierno.", ca: "El yuzu és un arbret del Japó que fa una fruita com una llimona arrugada.", en: "Yew trees can live thousands of years. Some are older than castles.", cs: "Yuzu je japonský stromek: jeho plody voní jako citron.", fr: "L'yeuse, c'est le chêne vert : il garde ses feuilles toute l'année." } },
    { letter: "Z", emoji: "🫐", item: { es: "Zarza", ca: "Zelkova", en: "Zelkova", cs: "Zima", fr: "Zelkova" },
      fact: { es: "La zarza es enredada y pinchuda, pero nos regala moras dulces.", ca: "La zelkova és una cosina de l'om que ve del Japó: decora carrers i places.", en: "The zelkova is a Japanese cousin of the elm, often planted along streets.", cs: "Zima je čas odpočinku: strom spí a pupeny čekají na jaro.", fr: "Le zelkova est un cousin japonais de l'orme : il décore les rues et les places." } }
  ],

  /* ---------- FAMOSOS ---------- */
  famous: [
    { emoji: "🌍", year: "1977", color: "#2e7d32", name: { es: "Wangari Maathai", ca: "Wangari Maathai", en: "Wangari Maathai", cs: "Wangari Maathaiová", fr: "Wangari Maathai" },
      achievement: { es: "Plantó millones de árboles en Kenia con miles de mujeres. Ganó el Premio Nobel de la Paz.", ca: "Va plantar milions d'arbres a Kenya amb milers de dones. Va guanyar el Premi Nobel de la Pau.", en: "She planted millions of trees in Kenya with thousands of women. She won the Nobel Peace Prize.", cs: "S tisíci žen vysadila v Keni miliony stromů. Získala Nobelovu cenu za mír.", fr: "Elle a planté des millions d'arbres au Kenya avec des milliers de femmes. Elle a gagné le prix Nobel de la paix." },
      quote: { es: "Yo hago mi parte, como el colibrí: gotita a gotita.", ca: "Jo faig la meva part, com el colibrí: goteta a goteta.", en: "I do my part, like the hummingbird: one little drop at a time.", cs: "Dělám svůj díl, jako kolibřík: kapku po kapce.", fr: "Je fais ma part, comme le colibri : goutte après goutte." } },
    { emoji: "🌱", year: "1979", color: "#00695c", name: { es: "Jadav Payeng", ca: "Jadav Payeng", en: "Jadav Payeng", cs: "Jadav Payeng", fr: "Jadav Payeng" },
      achievement: { es: "Plantó un árbol cada día en una isla de la India durante 40 años: él solito hizo crecer un bosque entero.", ca: "Va plantar un arbre cada dia en una illa de l'Índia durant 40 anys: ell solet va fer créixer un bosc sencer.", en: "He planted a tree every day on an island in India for 40 years: all by himself he grew a whole forest.", cs: "Čtyřicet let sázel každý den strom na ostrově v Indii: úplně sám nechal vyrůst celý les.", fr: "Il a planté un arbre chaque jour sur une île en Inde pendant 40 ans : tout seul, il a fait pousser une forêt entière." },
      quote: { es: "Empecé con una semilla. El bosque hizo el resto.", ca: "Vaig començar amb una llavor. El bosc va fer la resta.", en: "I started with one seed. The forest did the rest.", cs: "Začal jsem jedním semínkem. Zbytek udělal les.", fr: "J'ai commencé avec une graine. La forêt a fait le reste." } },
    { emoji: "🍄", year: "1997", color: "#7b1fa2", name: { es: "Suzanne Simard", ca: "Suzanne Simard", en: "Suzanne Simard", cs: "Suzanne Simardová", fr: "Suzanne Simard" },
      achievement: { es: "Descubrió que los árboles se hablan y comparten comida por las raíces, gracias a los hongos.", ca: "Va descobrir que els arbres es parlen i comparteixen menjar per les arrels, gràcies als fongs.", en: "She discovered that trees talk and share food through their roots, thanks to fungi.", cs: "Objevila, že si stromy povídají a dělí se o jídlo kořeny, díky houbám.", fr: "Elle a découvert que les arbres se parlent et partagent leur nourriture par les racines, grâce aux champignons." },
      quote: { es: "El bosque no es una competición: es una gran familia.", ca: "El bosc no és una competició: és una gran família.", en: "The forest is not a competition: it is one big family.", cs: "Les není závod: je to jedna velká rodina.", fr: "La forêt n'est pas une compétition : c'est une grande famille." } },
    { emoji: "🦋", year: "1999", color: "#ef6c00", name: { es: "Julia Butterfly Hill", ca: "Julia Butterfly Hill", en: "Julia Butterfly Hill", cs: "Julia Butterfly Hillová", fr: "Julia Butterfly Hill" },
      achievement: { es: "Vivió dos años en lo alto de una secuoya llamada Luna para que no la cortaran. ¡Y la salvó!", ca: "Va viure dos anys a dalt d'una sequoia anomenada Luna perquè no la tallessin. I la va salvar!", en: "She lived for two years at the top of a redwood called Luna so it would not be cut down. And she saved it!", cs: "Dva roky žila v koruně sekvoje jménem Luna, aby ji nikdo nepokácel. A zachránila ji!", fr: "Elle a vécu deux ans en haut d'un séquoia appelé Luna pour qu'on ne le coupe pas. Et elle l'a sauvé !" },
      quote: { es: "Desde la copa de un árbol el mundo se ve más bonito.", ca: "Des de la capçada d'un arbre el món es veu més bonic.", en: "From the top of a tree the world looks more beautiful.", cs: "Z koruny stromu vypadá svět krásněji.", fr: "Du haut d'un arbre, le monde est plus beau." } },
    { emoji: "📜", year: "hace ~2300 años", color: "#5d4037", name: { es: "Teofrasto", ca: "Teofrast", en: "Theophrastus", cs: "Theofrastos", fr: "Théophraste" },
      achievement: { es: "Un sabio de la antigua Grecia que escribió los primeros grandes libros sobre plantas: el abuelo de la botánica.", ca: "Un savi de l'antiga Grècia que va escriure els primers grans llibres sobre plantes: l'avi de la botànica.", en: "A wise man from ancient Greece who wrote the first great books about plants: the grandfather of botany.", cs: "Mudrc ze starého Řecka, který napsal první velké knihy o rostlinách: dědeček botaniky.", fr: "Un sage de la Grèce antique qui a écrit les premiers grands livres sur les plantes : le grand-père de la botanique." },
      quote: { es: "Quien mira bien una planta, descubre un mundo.", ca: "Qui mira bé una planta, descobreix un món.", en: "Look closely at a plant and you discover a world.", cs: "Kdo se pozorně dívá na rostlinu, objeví celý svět.", fr: "Qui regarde bien une plante découvre un monde." } }
  ],

  childDream: {
    girl: { es: "Guardiana de los bosques", ca: "Guardiana dels boscos", en: "Guardian of the forests", cs: "Strážkyně lesů", fr: "Gardienne des forêts" },
    boy: { es: "Guardián de los bosques", ca: "Guardià dels boscos", en: "Guardian of the forests", cs: "Strážce lesů", fr: "Gardien des forêts" },
    kid: { es: "Peque guardián de los bosques", ca: "Guardià dels boscos", en: "Guardian of the forests", cs: "Malý strážce lesů", fr: "Gardien des forêts" }
  },
  childQuote: { es: "Cuando sea mayor plantaré un bosque entero. ¡Y os invitaré a merendar a su sombra!", ca: "Quan sigui gran plantaré un bosc sencer. I us convidaré a berenar a la seva ombra!", en: "When I grow up I will plant a whole forest. And you are all invited to snack in its shade!", cs: "Až vyrostu, zasadím celý les. A pozvu vás na svačinu do jeho stínu!", fr: "Quand je serai grand, je planterai une forêt entière. Et je vous inviterai à goûter à son ombre !" },

  /* ---------- MATES ---------- */
  mathEmojis: ["🌳", "🍂", "🌰", "🐿️", "🍎", "🌱"],

  /* ---------- CONSTRUCTOR: ¡planta tu árbol! ---------- */
  builder: {
    title: { es: "¡Planta tu propio árbol!", ca: "Planta el teu propi arbre!", en: "Plant your own tree!", cs: "Zasaď si vlastní strom!", fr: "Plante ton propre arbre !" },
    thing: { es: "árbol", ca: "arbre", en: "tree", cs: "strom", fr: "arbre" },
    parts: [
      { id: "copa", label: { es: "La copa", ca: "La capçada", en: "The crown", cs: "Koruna", fr: "Le feuillage" },
        options: [{ id: "redonda", v: "redonda", icon: "🟢" }, { id: "pino", v: "pino", icon: "🔺" }, { id: "llorona", v: "llorona", icon: "💧" }] },
      { id: "hojas", label: { es: "Color de las hojas", ca: "Color de les fulles", en: "Leaf colour", cs: "Barva listí", fr: "Couleur des feuilles" },
        options: [{ id: "verde", v: "#66bb6a" }, { id: "verdeoscuro", v: "#2e7d32" }, { id: "otono", v: "#ef6c00" }, { id: "cerezo", v: "#f48fb1" }] },
      { id: "fruto", label: { es: "El fruto", ca: "El fruit", en: "The fruit", cs: "Plody", fr: "Le fruit" },
        options: [{ id: "manzana", v: "manzana", icon: "🍎" }, { id: "naranja", v: "naranja", icon: "🍊" }, { id: "flor", v: "flor", icon: "🌸" }, { id: "pina", v: "pina", icon: "🌰" }] },
      { id: "habitante", label: { es: "El habitante", ca: "L'habitant", en: "The resident", cs: "Obyvatel", fr: "L'habitant" },
        options: [{ id: "nido", v: "nido", icon: "🪹" }, { id: "ardilla", v: "ardilla", icon: "🐿️" }, { id: "buho", v: "buho", icon: "🦉" }, { id: "columpio", v: "columpio", icon: "🪢" }] }
    ],
    svg(sel) {
      const leaf = sel.hojas || "#66bb6a";
      const copa = sel.copa || "redonda";
      let crown = "", spots = [], trunkTop = 48;
      if (copa === "pino") {
        trunkTop = 58;
        crown = `<path d="M50 4 L31 36 L44 36 L24 62 L76 62 L56 36 L69 36 Z" fill="${leaf}" stroke="rgba(0,0,0,.12)" stroke-width="1.5"/>`;
        spots = [[50, 24], [41, 48], [59, 50], [50, 57]];
      } else if (copa === "llorona") {
        crown = `<path d="M24 40 Q26 12 50 10 Q74 12 76 40 Q77 50 68 52 L32 52 Q23 50 24 40 Z" fill="${leaf}"/>
          <path d="M28 50 Q24 58 27 68 M38 52 Q35 62 38 74 M62 52 Q65 62 62 74 M72 50 Q76 58 73 68" stroke="${leaf}" stroke-width="5" fill="none" stroke-linecap="round"/>`;
        spots = [[38, 30], [62, 28], [50, 42], [31, 60], [69, 60]];
      } else {
        crown = `<circle cx="32" cy="40" r="15" fill="${leaf}"/><circle cx="68" cy="40" r="15" fill="${leaf}"/>
          <circle cx="50" cy="25" r="18" fill="${leaf}"/><circle cx="50" cy="42" r="18" fill="${leaf}"/>
          <circle cx="42" cy="22" r="6" fill="rgba(255,255,255,.18)"/>`;
        spots = [[40, 28], [61, 30], [30, 44], [70, 46], [50, 48]];
      }
      const FR = {
        manzana: p => `<circle cx="${p[0]}" cy="${p[1]}" r="3.4" fill="#e53935"/><path d="M${p[0]} ${p[1] - 3} q1 -2.5 3 -3" stroke="#5d4037" stroke-width="1.2" fill="none"/>`,
        naranja: p => `<circle cx="${p[0]}" cy="${p[1]}" r="3.4" fill="#fb8c00"/><circle cx="${p[0] - 1.1}" cy="${p[1] - 1.1}" r=".9" fill="#ffe0b2"/>`,
        flor: p => `<circle cx="${p[0] - 2.2}" cy="${p[1]}" r="1.8" fill="#f8bbd0"/><circle cx="${p[0] + 2.2}" cy="${p[1]}" r="1.8" fill="#f8bbd0"/><circle cx="${p[0]}" cy="${p[1] - 2.2}" r="1.8" fill="#f8bbd0"/><circle cx="${p[0]}" cy="${p[1] + 2.2}" r="1.8" fill="#f8bbd0"/><circle cx="${p[0]}" cy="${p[1]}" r="1.4" fill="#fdd835"/>`,
        pina: p => `<ellipse cx="${p[0]}" cy="${p[1]}" rx="2.6" ry="3.8" fill="#8d6e63"/><path d="M${p[0] - 2} ${p[1] - 1.4} h4 M${p[0] - 2} ${p[1] + 1} h4" stroke="#5d4037" stroke-width=".9"/>`
      };
      const fruit = spots.map(FR[sel.fruto || "manzana"]).join("");
      const HAB = {
        nido: `<path d="M46 64 Q34 61 25 63" stroke="#6d4c41" stroke-width="3" fill="none" stroke-linecap="round"/>
          <path d="M17 63 Q24 72 31 63 Z" fill="#8d6e63"/><path d="M17 63 Q24 66 31 63" stroke="#5d4037" stroke-width="1.4" fill="none"/>
          <circle cx="21.5" cy="61.5" r="2.1" fill="#fffde7"/><circle cx="26.5" cy="61.5" r="2.1" fill="#fffde7"/>`,
        ardilla: `<path d="M64 80 Q73 78 71 67 Q70 60 63 63" stroke="#ff9800" stroke-width="4.5" fill="none" stroke-linecap="round"/>
          <ellipse cx="59" cy="78" rx="4.6" ry="5.6" fill="#ef6c00"/><circle cx="59" cy="69.5" r="3.5" fill="#ef6c00"/>
          <path d="M57 66.6 l-1.4 -3 2.6 1 Z" fill="#ef6c00"/><circle cx="57.8" cy="69" r="1" fill="#3e2723"/>`,
        buho: `<ellipse cx="50" cy="74" rx="7.4" ry="8.4" fill="#3e2723"/><ellipse cx="50" cy="76" rx="5" ry="6" fill="#a1887f"/>
          <circle cx="47.6" cy="73.5" r="2" fill="#fff"/><circle cx="52.4" cy="73.5" r="2" fill="#fff"/>
          <circle cx="47.6" cy="73.5" r=".9" fill="#212121"/><circle cx="52.4" cy="73.5" r=".9" fill="#212121"/>
          <path d="M49 76.6 L50 78 L51 76.6 Z" fill="#ff9800"/>`,
        columpio: `<path d="M54 62 Q68 58 82 62" stroke="#6d4c41" stroke-width="3" fill="none" stroke-linecap="round"/>
          <line x1="68" y1="61" x2="68" y2="86" stroke="#8d6e63" stroke-width="1.6"/><line x1="79" y1="62" x2="79" y2="86" stroke="#8d6e63" stroke-width="1.6"/>
          <rect x="64" y="86" width="19" height="3.6" rx="1.6" fill="#ff8a65"/>`
      };
      return `<svg viewBox="0 0 100 110" width="190" height="210">
        <ellipse cx="50" cy="97" rx="32" ry="7" fill="#7cb342"/>
        <path d="M45.5 ${trunkTop} L44 94 L56 94 L54.5 ${trunkTop} Z" fill="#8d6e63" stroke="#6d4c41" stroke-width="1"/>
        <path d="M44 94 Q39 98 33 98 M56 94 Q61 98 67 98" stroke="#8d6e63" stroke-width="3.4" fill="none" stroke-linecap="round"/>
        ${crown}
        ${fruit}
        ${HAB[sel.habitante || "nido"]}
      </svg>`;
    }
  }
};
