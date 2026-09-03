"use strict";
/* ============================================================
   Contenido de MIRÓ (parte A): el pintor de las estrellas.
   Registro del tema, quiz, alfabeto, famosos, mates y
   constructor. Solo datos reales de Joan Miró (1893-1983).
   ============================================================ */

THEMES.miro = {
  emoji: "✨", ready: true,
  grad: "linear-gradient(150deg,#1a237e,#e53935)",
  name: { es: "Miró", ca: "Miró", en: "Miró", cs: "Miró", fr: "Miró" }
};

THEMES.miro.content = {

  statusPlace: { es: "Conectado desde el taller de las estrellas", ca: "Connectat des del taller de les estrelles", en: "Connected from the workshop of the stars", cs: "Připojeno z ateliéru hvězd", fr: "Connecté depuis l'atelier des étoiles" },
  welcome: { es: "¡Al taller de Miró, {name}! Coge un pincel: hoy pintamos estrellas, lunas y pájaros.", ca: "Cap al taller de Miró, {name}! Agafa un pinzell: avui pintem estrelles, llunes i ocells.", en: "Into Miró's workshop, {name}! Grab a brush: today we paint stars, moons and birds.", cs: "Hurá do Miróova ateliéru, {name}! Vezmi si štětec: dnes malujeme hvězdy, měsíce a ptáky.", fr: "Direction l'atelier de Miró, {name} ! Prends un pinceau : aujourd'hui on peint des étoiles, des lunes et des oiseaux." },

  /* ---------- QUIZ: 10 preguntas ---------- */
  quiz: [
    { emoji: "🎨",
      q: { es: "¿Dónde nació Joan Miró?", ca: "On va néixer Joan Miró?", en: "Where was Joan Miró born?", cs: "Kde se narodil Joan Miró?", fr: "Où est né Joan Miró ?" },
      options: [
        { es: "En París", ca: "A París", en: "In Paris", cs: "V Paříži", fr: "À Paris" },
        { es: "En Barcelona", ca: "A Barcelona", en: "In Barcelona", cs: "V Barceloně", fr: "À Barcelone" },
        { es: "En Roma", ca: "A Roma", en: "In Rome", cs: "V Římě", fr: "À Rome" },
        { es: "En Londres", ca: "A Londres", en: "In London", cs: "V Londýně", fr: "À Londres" }],
      answer: 1,
      explanation: { es: "Nació en Barcelona en 1893, en una callecita del centro. ¡De pequeño ya dibujaba sin parar!", ca: "Va néixer a Barcelona el 1893, en un carreró del centre. De petit ja dibuixava sense parar!", en: "He was born in Barcelona in 1893, in a little street downtown. As a kid he already drew non-stop!", cs: "Narodil se v Barceloně v roce 1893, v uličce v centru. Už jako malý pořád kreslil!", fr: "Il est né à Barcelone en 1893, dans une petite rue du centre. Tout petit, il dessinait déjà sans arrêt !" } },
    { emoji: "⭐",
      q: { es: "¿Qué dibujaba casi siempre en el cielo de sus cuadros?", ca: "Què dibuixava gairebé sempre al cel dels seus quadres?", en: "What did he almost always draw in the sky of his paintings?", cs: "Co skoro vždycky kreslil na nebi svých obrazů?", fr: "Que dessinait-il presque toujours dans le ciel de ses tableaux ?" },
      options: [
        { es: "Aviones", ca: "Avions", en: "Airplanes", cs: "Letadla", fr: "Des avions" },
        { es: "Nubes de tormenta", ca: "Núvols de tempesta", en: "Storm clouds", cs: "Bouřkové mraky", fr: "Des nuages d'orage" },
        { es: "Estrellas", ca: "Estrelles", en: "Stars", cs: "Hvězdy", fr: "Des étoiles" },
        { es: "Cometas de papel", ca: "Estels de paper", en: "Paper kites", cs: "Papírové draky", fr: "Des cerfs-volants" }],
      answer: 2,
      explanation: { es: "¡Estrellas! Por eso lo llaman el pintor de las estrellas. Sus estrellas parecen bailarinas de líneas.", ca: "Estrelles! Per això en diuen el pintor de les estrelles. Les seves estrelles semblen ballarines de línies.", en: "Stars! That is why he is called the painter of the stars. His stars look like little line dancers.", cs: "Hvězdy! Proto se mu říká malíř hvězd. Jeho hvězdy vypadají jako tanečnice z čar.", fr: "Des étoiles ! C'est pour ça qu'on l'appelle le peintre des étoiles. Ses étoiles ressemblent à des danseuses de lignes." } },
    { emoji: "🔴",
      q: { es: "¿Cuáles eran sus colores favoritos?", ca: "Quins eren els seus colors preferits?", en: "Which were his favourite colours?", cs: "Které barvy měl nejraději?", fr: "Quelles étaient ses couleurs préférées ?" },
      options: [
        { es: "Marrón y gris", ca: "Marró i gris", en: "Brown and grey", cs: "Hnědou a šedou", fr: "Marron et gris" },
        { es: "Rojo, azul y amarillo", ca: "Vermell, blau i groc", en: "Red, blue and yellow", cs: "Červenou, modrou a žlutou", fr: "Rouge, bleu et jaune" },
        { es: "Solo blanco", ca: "Només blanc", en: "Only white", cs: "Jen bílou", fr: "Seulement blanc" },
        { es: "Rosa y morado", ca: "Rosa i lila", en: "Pink and purple", cs: "Růžovou a fialovou", fr: "Rose et violet" }],
      answer: 1,
      explanation: { es: "Rojo, azul y amarillo, con verde y una línea negra bien gruesa. ¡Pocos colores y mucha alegría!", ca: "Vermell, blau i groc, amb verd i una línia negra ben gruixuda. Pocs colors i molta alegria!", en: "Red, blue and yellow, with green and a nice thick black line. Few colours and lots of joy!", cs: "Červenou, modrou a žlutou, k tomu zelenou a pěkně tlustou černou čáru. Málo barev a spousta radosti!", fr: "Rouge, bleu et jaune, avec du vert et une grosse ligne noire. Peu de couleurs et beaucoup de joie !" } },
    { emoji: "🐦",
      q: { es: "¿Qué animal aparece una y otra vez en sus cuadros?", ca: "Quin animal apareix una vegada i una altra als seus quadres?", en: "Which animal appears again and again in his paintings?", cs: "Které zvíře se v jeho obrazech objevuje pořád dokola?", fr: "Quel animal revient encore et encore dans ses tableaux ?" },
      options: [
        { es: "El elefante", ca: "L'elefant", en: "The elephant", cs: "Slon", fr: "L'éléphant" },
        { es: "El pájaro", ca: "L'ocell", en: "The bird", cs: "Pták", fr: "L'oiseau" },
        { es: "El pez espada", ca: "El peix espasa", en: "The swordfish", cs: "Mečoun", fr: "L'espadon" },
        { es: "El dragón", ca: "El drac", en: "The dragon", cs: "Drak", fr: "Le dragon" }],
      answer: 1,
      explanation: { es: "El pájaro. Junto a la estrella, la luna y la mujer, era una de las palabras favoritas de su idioma de dibujos.", ca: "L'ocell. Amb l'estrella, la lluna i la dona, era una de les paraules preferides del seu idioma de dibuixos.", en: "The bird. Together with the star, the moon and the woman, it was a favourite word in his language of drawings.", cs: "Pták. Spolu s hvězdou, měsícem a ženou to bylo jedno z oblíbených slov jeho kresleného jazyka.", fr: "L'oiseau. Avec l'étoile, la lune et la femme, c'était un des mots préférés de son langage de dessins." } },
    { emoji: "🏡",
      q: { es: "¿Cómo se llama el pueblo de su masía querida?", ca: "Com es diu el poble de la seva masia estimada?", en: "What is the name of the village of his beloved farmhouse?", cs: "Jak se jmenuje vesnice s jeho milovaným statkem?", fr: "Comment s'appelle le village de sa ferme adorée ?" },
      options: [
        { es: "Mont-roig", ca: "Mont-roig", en: "Mont-roig", cs: "Mont-roig", fr: "Mont-roig" },
        { es: "Venecia", ca: "Venècia", en: "Venice", cs: "Benátky", fr: "Venise" },
        { es: "Sevilla", ca: "Sevilla", en: "Seville", cs: "Sevilla", fr: "Séville" },
        { es: "Nueva York", ca: "Nova York", en: "New York", cs: "New York", fr: "New York" }],
      answer: 0,
      explanation: { es: "Mont-roig del Camp, entre el campo y el mar. Allí aprendió a mirar despacio las cosas pequeñas.", ca: "Mont-roig del Camp, entre el camp i el mar. Allà va aprendre a mirar a poc a poc les coses petites.", en: "Mont-roig del Camp, between the fields and the sea. There he learned to look slowly at little things.", cs: "Mont-roig del Camp, mezi poli a mořem. Tam se naučil pomalu si prohlížet maličkosti.", fr: "Mont-roig del Camp, entre la campagne et la mer. Là-bas, il a appris à regarder lentement les petites choses." } },
    { emoji: "🏝️",
      q: { es: "¿En qué isla tuvo su taller grande y luminoso?", ca: "A quina illa va tenir el seu taller gran i lluminós?", en: "On which island did he have his big, bright workshop?", cs: "Na kterém ostrově měl svůj velký světlý ateliér?", fr: "Sur quelle île avait-il son grand atelier lumineux ?" },
      options: [
        { es: "En Menorca", ca: "A Menorca", en: "On Menorca", cs: "Na Menorce", fr: "À Minorque" },
        { es: "En Mallorca", ca: "A Mallorca", en: "On Mallorca", cs: "Na Mallorce", fr: "À Majorque" },
        { es: "En Tenerife", ca: "A Tenerife", en: "On Tenerife", cs: "Na Tenerife", fr: "À Ténérife" },
        { es: "En una isla pirata", ca: "En una illa pirata", en: "On a pirate island", cs: "Na pirátském ostrově", fr: "Sur une île pirate" }],
      answer: 1,
      explanation: { es: "En Palma de Mallorca. Se lo construyó su amigo el arquitecto Sert, con ventanas enormes llenas de luz.", ca: "A Palma de Mallorca. L'hi va construir el seu amic l'arquitecte Sert, amb finestres enormes plenes de llum.", en: "In Palma de Mallorca. His friend the architect Sert built it for him, with huge windows full of light.", cs: "V Palmě na Mallorce. Postavil mu ho jeho přítel architekt Sert, s obrovskými okny plnými světla.", fr: "À Palma de Majorque. Son ami l'architecte Sert le lui a construit, avec d'immenses fenêtres pleines de lumière." } },
    { emoji: "🖌️",
      q: { es: "¿Qué hacía Miró delante de un lienzo en blanco?", ca: "Què feia Miró davant d'una tela en blanc?", en: "What did Miró do in front of a blank canvas?", cs: "Co dělal Miró před prázdným plátnem?", fr: "Que faisait Miró devant une toile blanche ?" },
      options: [
        { es: "Lo guardaba en el armario", ca: "La desava a l'armari", en: "He put it away in the wardrobe", cs: "Schoval ho do skříně", fr: "Il la rangeait dans l'armoire" },
        { es: "Lo miraba mucho rato y empezaba con una manchita", ca: "La mirava molta estona i començava amb una taqueta", en: "He looked at it for a long time and started with a little stain", cs: "Dlouho se na něj díval a začal malou skvrnkou", fr: "Il la regardait longtemps et commençait par une petite tache" },
        { es: "Lo pintaba todo de negro", ca: "La pintava tota de negre", en: "He painted it all black", cs: "Celé ho natřel načerno", fr: "Il la peignait toute en noir" },
        { es: "Llamaba a otro pintor", ca: "Trucava a un altre pintor", en: "He called another painter", cs: "Zavolal jiného malíře", fr: "Il appelait un autre peintre" }],
      answer: 1,
      explanation: { es: "El blanco impone un poquito, ¡hasta a los grandes pintores! Miró esperaba, y de una manchita nacía una estrella o un pájaro.", ca: "El blanc imposa una miqueta, fins i tot als grans pintors! Miró esperava, i d'una taqueta naixia una estrella o un ocell.", en: "A blank canvas feels a bit scary, even for great painters! Miró waited, and from a little stain a star or a bird was born.", cs: "Prázdné plátno nahání trochu strach i velkým malířům! Miró počkal a z malé skvrnky se narodila hvězda nebo pták.", fr: "Le blanc impressionne un peu, même les grands peintres ! Miró attendait, et d'une petite tache naissait une étoile ou un oiseau." } },
    { emoji: "🏺",
      q: { es: "¿Con qué material hizo murales gigantes con su amigo Artigas?", ca: "Amb quin material va fer murals gegants amb el seu amic Artigas?", en: "What material did he use for giant murals with his friend Artigas?", cs: "Z jakého materiálu dělal s přítelem Artigasem obří nástěnné obrazy?", fr: "Avec quelle matière a-t-il fait des murs géants avec son ami Artigas ?" },
      options: [
        { es: "Con chocolate", ca: "Amb xocolata", en: "With chocolate", cs: "Z čokolády", fr: "Avec du chocolat" },
        { es: "Con cerámica", ca: "Amb ceràmica", en: "With ceramics", cs: "Z keramiky", fr: "Avec de la céramique" },
        { es: "Con plastilina", ca: "Amb plastilina", en: "With play dough", cs: "Z plastelíny", fr: "Avec de la pâte à modeler" },
        { es: "Con nieve", ca: "Amb neu", en: "With snow", cs: "Ze sněhu", fr: "Avec de la neige" }],
      answer: 1,
      explanation: { es: "Con cerámica cocida en un horno de leña. Juntos hicieron el mural del Sol y el de la Luna para la UNESCO, en París.", ca: "Amb ceràmica cuita en un forn de llenya. Junts van fer el mural del Sol i el de la Lluna per a la UNESCO, a París.", en: "With ceramics baked in a wood-fired kiln. Together they made the Wall of the Sun and the Wall of the Moon for UNESCO, in Paris.", cs: "Z keramiky vypálené v peci na dřevo. Společně vytvořili Zeď Slunce a Zeď Měsíce pro UNESCO v Paříži.", fr: "Avec de la céramique cuite dans un four à bois. Ensemble, ils ont fait le mur du Soleil et le mur de la Lune pour l'UNESCO, à Paris." } },
    { emoji: "🗼",
      q: { es: "¿Cómo se llama su escultura gigante de Barcelona?", ca: "Com es diu la seva escultura gegant de Barcelona?", en: "What is his giant sculpture in Barcelona called?", cs: "Jak se jmenuje jeho obří socha v Barceloně?", fr: "Comment s'appelle sa sculpture géante de Barcelone ?" },
      options: [
        { es: "Mujer y Pájaro", ca: "Dona i Ocell", en: "Woman and Bird", cs: "Žena a pták", fr: "Femme et Oiseau" },
        { es: "El gato azul", ca: "El gat blau", en: "The blue cat", cs: "Modrá kočka", fr: "Le chat bleu" },
        { es: "La torre del reloj", ca: "La torre del rellotge", en: "The clock tower", cs: "Hodinová věž", fr: "La tour de l'horloge" },
        { es: "El robot dorado", ca: "El robot daurat", en: "The golden robot", cs: "Zlatý robot", fr: "Le robot doré" }],
      answer: 0,
      explanation: { es: "Mujer y Pájaro: una torre altísima cubierta de trocitos de cerámica de colores, el famoso trencadís.", ca: "Dona i Ocell: una torre altíssima coberta de trossets de ceràmica de colors, el famós trencadís.", en: "Woman and Bird: a super tall tower covered in little pieces of coloured ceramic, the famous trencadís.", cs: "Žena a pták: převysoká věž pokrytá kousky barevné keramiky, slavným trencadís.", fr: "Femme et Oiseau : une tour très haute couverte de petits morceaux de céramique colorée, le fameux trencadís." } },
    { emoji: "🌙",
      q: { es: "¿Cómo llaman a Joan Miró?", ca: "Com anomenen Joan Miró?", en: "What do people call Joan Miró?", cs: "Jak se Joanu Miróovi říká?", fr: "Comment appelle-t-on Joan Miró ?" },
      options: [
        { es: "El pintor de las estrellas", ca: "El pintor de les estrelles", en: "The painter of the stars", cs: "Malíř hvězd", fr: "Le peintre des étoiles" },
        { es: "El escultor del hielo", ca: "L'escultor del gel", en: "The ice sculptor", cs: "Sochař ledu", fr: "Le sculpteur de glace" },
        { es: "El fotógrafo del mar", ca: "El fotògraf del mar", en: "The sea photographer", cs: "Fotograf moře", fr: "Le photographe de la mer" },
        { es: "El músico del viento", ca: "El músic del vent", en: "The wind musician", cs: "Muzikant větru", fr: "Le musicien du vent" }],
      answer: 0,
      explanation: { es: "Pintó tantas estrellas, lunas y pájaros que se ganó ese nombre. Su serie más famosa se llama Las Constelaciones.", ca: "Va pintar tantes estrelles, llunes i ocells que es va guanyar aquest nom. La seva sèrie més famosa es diu Les Constel·lacions.", en: "He painted so many stars, moons and birds that he earned that name. His most famous series is called The Constellations.", cs: "Namaloval tolik hvězd, měsíců a ptáků, že si to jméno vysloužil. Jeho nejslavnější série se jmenuje Konstelace.", fr: "Il a peint tant d'étoiles, de lunes et d'oiseaux qu'il a gagné ce nom. Sa série la plus célèbre s'appelle les Constellations." } },
    { emoji: "🏛️",
      q: { es: "¿En qué montaña de Barcelona está la Fundació Joan Miró?", ca: "A quina muntanya de Barcelona hi ha la Fundació Joan Miró?", en: "On which hill in Barcelona is the Fundació Joan Miró?", cs: "Na kterém barcelonském kopci stojí Fundació Joan Miró?", fr: "Sur quelle colline de Barcelone se trouve la Fundació Joan Miró ?" },
      options: [
        { es: "El Everest", ca: "L'Everest", en: "Everest", cs: "Everest", fr: "L'Everest" },
        { es: "El Tibidabo", ca: "El Tibidabo", en: "Tibidabo", cs: "Tibidabo", fr: "Le Tibidabo" },
        { es: "Montjuïc", ca: "Montjuïc", en: "Montjuïc", cs: "Montjuïc", fr: "Montjuïc" },
        { es: "Montserrat", ca: "Montserrat", en: "Montserrat", cs: "Montserrat", fr: "Montserrat" }],
      answer: 2,
      explanation: { es: "Está en Montjuïc, con vistas al mar. El propio Miró la creó en 1975 para compartir su arte con todo el mundo.", ca: "És a Montjuïc, amb vistes al mar. El mateix Miró la va crear el 1975 per compartir el seu art amb tothom.", en: "It is on Montjuïc, overlooking the sea. Miró himself created it in 1975 to share his art with everyone.", cs: "Stojí na Montjuïcu s výhledem na moře. Sám Miró ji založil v roce 1975, aby se o své umění podělil se všemi.", fr: "Elle est sur Montjuïc, avec vue sur la mer. Miró lui-même l'a créée en 1975 pour partager son art avec tout le monde." } },
    { emoji: "👣",
      q: { es: "En medio de la Rambla de Barcelona hay un mosaico de Miró. ¿Qué hace la gente con él?", ca: "Al mig de la Rambla de Barcelona hi ha un mosaic de Miró. Què hi fa la gent?", en: "In the middle of Barcelona's Rambla there is a Miró mosaic. What do people do with it?", cs: "Uprostřed barcelonské třídy La Rambla je Miróova mozaika. Co s ní lidé dělají?", fr: "Au milieu de la Rambla de Barcelone, il y a une mosaïque de Miró. Que font les gens avec elle ?" },
      options: [
        { es: "Caminar por encima", ca: "Caminar-hi per sobre", en: "Walk right over it", cs: "Chodí po ní", fr: "Ils marchent dessus" },
        { es: "Comérselo", ca: "Menjar-se'l", en: "Eat it", cs: "Snědí ji", fr: "Ils la mangent" },
        { es: "Colgarlo de la pared", ca: "Penjar-lo a la paret", en: "Hang it on the wall", cs: "Věší ji na zeď", fr: "Ils l'accrochent au mur" },
        { es: "Regarlo con agua", ca: "Regar-lo amb aigua", en: "Water it", cs: "Zalévají ji vodou", fr: "Ils l'arrosent" }],
      answer: 0,
      explanation: { es: "Es un mosaico en el suelo, en el Pla de l'Os. Miró lo hizo para que todo el que pasea por la Rambla camine sobre su arte.", ca: "És un mosaic a terra, al Pla de l'Os. Miró el va fer perquè tothom qui passeja per la Rambla camini sobre el seu art.", en: "It is a mosaic on the ground, at the Pla de l'Os. Miró made it so that everyone strolling along the Rambla walks over his art.", cs: "Je to mozaika přímo na zemi, na místě zvaném Pla de l'Os. Miró ji vytvořil, aby každý kolemjdoucí šlapal po jeho umění.", fr: "C'est une mosaïque au sol, au Pla de l'Os. Miró l'a faite pour que chaque promeneur de la Rambla marche sur son art." } },
    { emoji: "🧾",
      q: { es: "Antes de ser pintor, ¿en qué trabajó Miró de joven?", ca: "Abans de ser pintor, en què va treballar Miró de jove?", en: "Before becoming a painter, what did young Miró work as?", cs: "Čím pracoval mladý Miró, než se stal malířem?", fr: "Avant d'être peintre, quel travail faisait le jeune Miró ?" },
      options: [
        { es: "De bombero", ca: "De bomber", en: "As a firefighter", cs: "Jako hasič", fr: "Pompier" },
        { es: "De cocinero", ca: "De cuiner", en: "As a cook", cs: "Jako kuchař", fr: "Cuisinier" },
        { es: "De piloto", ca: "De pilot", en: "As a pilot", cs: "Jako pilot", fr: "Pilote" },
        { es: "De oficinista", ca: "D'oficinista", en: "As an office clerk", cs: "Jako úředník v kanceláři", fr: "Employé de bureau" }],
      answer: 3,
      explanation: { es: "Trabajó de oficinista apuntando números y se puso muy triste y enfermo. Se recuperó en la masía de Mont-roig y decidió dedicarse solo a pintar.", ca: "Va treballar d'oficinista apuntant números i es va posar molt trist i malalt. Es va recuperar a la masia de Mont-roig i va decidir dedicar-se només a pintar.", en: "He worked as a clerk writing down numbers and became very sad and ill. He got better at the Mont-roig farmhouse and decided to devote himself only to painting.", cs: "Pracoval jako úředník a zapisoval čísla, ale byl z toho smutný a onemocněl. Uzdravil se na statku v Mont-roigu a rozhodl se věnovat jen malování.", fr: "Il a travaillé comme employé de bureau à noter des chiffres, et il est devenu très triste et malade. Il a guéri à la ferme de Mont-roig et a décidé de se consacrer seulement à la peinture." } },
    { emoji: "✈️",
      q: { es: "¿Qué dibujó Miró para invitar a los turistas de todo el mundo a visitar España?", ca: "Què va dibuixar Miró per convidar els turistes de tot el món a visitar Espanya?", en: "What did Miró draw to invite tourists from all over the world to visit Spain?", cs: "Co Miró nakreslil, aby pozval turisty z celého světa do Španělska?", fr: "Qu'a dessiné Miró pour inviter les touristes du monde entier à visiter l'Espagne ?" },
      options: [
        { es: "Un tren de vapor", ca: "Un tren de vapor", en: "A steam train", cs: "Parní vlak", fr: "Un train à vapeur" },
        { es: "Un sol grande y alegre", ca: "Un sol gran i alegre", en: "A big, happy sun", cs: "Velké veselé slunce", fr: "Un grand soleil joyeux" },
        { es: "Una paella gigante", ca: "Una paella gegant", en: "A giant paella", cs: "Obří paellu", fr: "Une paella géante" },
        { es: "Un castillo de arena", ca: "Un castell de sorra", en: "A sandcastle", cs: "Hrad z písku", fr: "Un château de sable" }],
      answer: 1,
      explanation: { es: "Es el famoso Sol de Miró, rojo y amarillo con una estrella. Desde 1983 aparece en los carteles que anuncian España.", ca: "És el famós Sol de Miró, vermell i groc amb una estrella. Des del 1983 apareix als cartells que anuncien Espanya.", en: "It is the famous Miró Sun, red and yellow with a star. Since 1983 it has appeared on the posters that advertise Spain.", cs: "Je to slavné Miróovo slunce, červené a žluté s hvězdou. Od roku 1983 se objevuje na plakátech, které zvou do Španělska.", fr: "C'est le fameux Soleil de Miró, rouge et jaune avec une étoile. Depuis 1983, il apparaît sur les affiches qui annoncent l'Espagne." } },
    { emoji: "🎂",
      q: { es: "¿Cuántos años llegó a cumplir Miró?", ca: "Quants anys va arribar a fer Miró?", en: "How old did Miró live to be?", cs: "Kolika let se Miró dožil?", fr: "Jusqu'à quel âge a vécu Miró ?" },
      options: [
        { es: "18 años", ca: "18 anys", en: "18 years old", cs: "18 let", fr: "18 ans" },
        { es: "50 años", ca: "50 anys", en: "50 years old", cs: "50 let", fr: "50 ans" },
        { es: "90 años", ca: "90 anys", en: "90 years old", cs: "90 let", fr: "90 ans" },
        { es: "200 años", ca: "200 anys", en: "200 years old", cs: "200 let", fr: "200 ans" }],
      answer: 2,
      explanation: { es: "Vivió 90 años y pintó hasta el final en su taller de Mallorca. Decía que trabajaba como un jardinero: con paciencia, cada día.", ca: "Va viure 90 anys i va pintar fins al final al seu taller de Mallorca. Deia que treballava com un jardiner: amb paciència, cada dia.", en: "He lived to 90 and painted to the very end in his Mallorca workshop. He said he worked like a gardener: patiently, every day.", cs: "Dožil se 90 let a maloval až do konce ve svém ateliéru na Mallorce. Říkal, že pracuje jako zahradník: trpělivě, každý den.", fr: "Il a vécu 90 ans et a peint jusqu'au bout dans son atelier de Majorque. Il disait qu'il travaillait comme un jardinier : avec patience, chaque jour." } }
  ],

  /* ---------- ALFABETO: 26 letras ---------- */
  alphabet: [
    { letter: "A", emoji: "🎨", item: { es: "Arte", ca: "Art", en: "Art", cs: "Ateliér", fr: "Art" },
      fact: { es: "Miró hacía arte con todo: pintura, cerámica, esculturas y hasta tapices gigantes.", ca: "Miró feia art amb tot: pintura, ceràmica, escultures i fins i tot tapissos gegants.", en: "Miró made art with everything: paint, ceramics, sculptures and even giant tapestries.", cs: "Ateliér je malířova dílna. Ten Miróův v Palmě byl plný světla, plakátů a kamínků z pláže.", fr: "Miró faisait de l'art avec tout : peinture, céramique, sculptures et même des tapisseries géantes." } },
    { letter: "B", emoji: "🏙️", item: { es: "Barcelona", ca: "Barcelona", en: "Barcelona", cs: "Barcelona", fr: "Barcelone" },
      fact: { es: "La ciudad donde nació en 1893. Hoy tiene su museo en la montaña de Montjuïc.", ca: "La ciutat on va néixer el 1893. Avui hi té el seu museu a la muntanya de Montjuïc.", en: "The city where he was born in 1893. Today it has his museum on Montjuïc hill.", cs: "Město, kde se v roce 1893 narodil. Dnes tam má na kopci Montjuïc své muzeum.", fr: "La ville où il est né en 1893. Aujourd'hui, elle a son musée sur la colline de Montjuïc." } },
    { letter: "C", emoji: "✨", item: { es: "Constelaciones", ca: "Constel·lacions", en: "Constellations", cs: "Cesta do Paříže", fr: "Constellations" },
      fact: { es: "Su serie más famosa: cuadros pequeñitos llenos de estrellas, lunas y pájaros enlazados.", ca: "La seva sèrie més famosa: quadres petitons plens d'estrelles, llunes i ocells enllaçats.", en: "His most famous series: small paintings full of stars, moons and birds joined by lines.", cs: "Mladý Miró se vydal na cestu do Paříže, města světel, kde poznal básníky a další malíře.", fr: "Sa série la plus célèbre : de petits tableaux pleins d'étoiles, de lunes et d'oiseaux reliés entre eux." } },
    { letter: "D", emoji: "✏️", item: { es: "Dibujo", ca: "Dibuix", en: "Drawing", cs: "Dílna", fr: "Dessin" },
      fact: { es: "Miró dibujaba en libretas pequeñas todo lo que se le ocurría, para no perder ninguna idea.", ca: "Miró dibuixava en llibretes petites tot el que se li acudia, per no perdre cap idea.", en: "Miró drew everything he imagined in little notebooks, so he would not lose a single idea.", cs: "V dílně přítele Artigase se Miró naučil točit a pálit keramiku jako opravdový hrnčíř.", fr: "Miró dessinait dans des petits carnets tout ce qui lui passait par la tête, pour ne perdre aucune idée." } },
    { letter: "E", emoji: "⭐", item: { es: "Estrella", ca: "Estrella", en: "Estrella, the star", cs: "Emoce", fr: "Étoile" },
      fact: { es: "La estrella de Miró es tan sencilla que puedes dibujarla tú: unas líneas cruzadas que bailan.", ca: "L'estrella de Miró és tan senzilla que la pots dibuixar tu: unes línies creuades que ballen.", en: "Estrella means star in Spanish. Miró's star is so simple you can draw it yourself: crossed dancing lines.", cs: "Miró chtěl, aby jeho barvy mluvily rovnou k srdci, jako hudba nebo básnička.", fr: "L'étoile de Miró est si simple que tu peux la dessiner : quelques lignes croisées qui dansent." } },
    { letter: "F", emoji: "🏛️", item: { es: "Fundación", ca: "Fundació", en: "Foundation", cs: "Fantazie", fr: "Fondation" },
      fact: { es: "La Fundació Joan Miró de Barcelona: un edificio blanco donde regaló muchas obras para que todos las vieran.", ca: "La Fundació Joan Miró de Barcelona: un edifici blanc on va regalar moltes obres perquè tothom les veiés.", en: "The Fundació Joan Miró in Barcelona: a white building where he gave away many works for everyone to see.", cs: "Fantazie byla Miróova superschopnost: z obyčejného kamínku dokázal udělat postavičku.", fr: "La Fondation Joan Miró de Barcelone : un bâtiment blanc où il a offert beaucoup d'œuvres pour que tout le monde les voie." } },
    { letter: "G", emoji: "🖼️", item: { es: "Grabado", ca: "Gravat", en: "Gouache", cs: "Grafika", fr: "Gravure" },
      fact: { es: "Hizo miles de grabados: dibujos que se imprimen, para que más gente pudiera tener arte en casa.", ca: "Va fer milers de gravats: dibuixos que s'imprimeixen, perquè més gent pogués tenir art a casa.", en: "Gouache is a paint like thick watercolour: Miró painted his Constellations with it.", cs: "Vytvořil tisíce grafik: obrázků, které se tisknou, aby si umění mohlo domů odnést víc lidí.", fr: "Il a fait des milliers de gravures : des dessins qui s'impriment, pour que plus de gens aient de l'art chez eux." } },
    { letter: "H", emoji: "🌾", item: { es: "Huerto", ca: "Hort", en: "Harlequin", cs: "Hvězda", fr: "Hirondelle" },
      fact: { es: "El huerto de su masía sale en el cuadro La Masía, que tardó nueve meses en pintar.", ca: "L'hort de la seva masia surt al quadre La Masia, que va trigar nou mesos a pintar.", en: "The Harlequin's Carnival is a famous Miró painting where funny little creatures throw a party.", cs: "Hvězda na jeho nebi nikdy nechybí: je to jeho nejoblíbenější znak.", fr: "L'Hirondelle Amour est un tableau de Miró où une hirondelle traverse le ciel en dansant." } },
    { letter: "I", emoji: "💭", item: { es: "Imaginación", ca: "Imaginació", en: "Imagination", cs: "Inspirace", fr: "Imagination" },
      fact: { es: "Miraba una piedra o una raíz y su imaginación la convertía en un personaje de cuento.", ca: "Mirava una pedra o una arrel i la seva imaginació la convertia en un personatge de conte.", en: "He would look at a stone or a root and his imagination turned it into a storybook character.", cs: "Inspiraci nacházel v maličkostech: v kamínku, kořínku nebo mušličce z pláže.", fr: "Il regardait une pierre ou une racine et son imagination en faisait un personnage de conte." } },
    { letter: "J", emoji: "👦", item: { es: "Joan", ca: "Joan", en: "Joan", cs: "Joan", fr: "Joan" },
      fact: { es: "Su nombre. Y su apellido, Miró, parece el verbo mirar: ¡justo lo que mejor sabía hacer!", ca: "El seu nom. I el seu cognom, Miró, sembla el verb mirar: just el que millor sabia fer!", en: "His first name. And his surname, Miró, sounds like the Spanish word for looked: exactly what he did best!", cs: "Jeho křestní jméno. A příjmení Miró zní španělsky jako podíval se: přesně to uměl nejlíp!", fr: "Son prénom. Et son nom, Miró, ressemble au verbe regarder en espagnol : juste ce qu'il savait faire de mieux !" } },
    { letter: "K", emoji: "🚂", item: { es: "Kilómetros", ca: "Kilòmetres", en: "Kilometres", cs: "Keramika", fr: "Kilomètres" },
      fact: { es: "De Barcelona a París hay mil kilómetros: Miró hizo ese viaje en tren muchas veces para pintar y aprender.", ca: "De Barcelona a París hi ha mil kilòmetres: Miró va fer aquell viatge en tren moltes vegades per pintar i aprendre.", en: "Barcelona is a thousand kilometres from Paris: Miró took that train ride many times to paint and learn.", cs: "S přítelem Artigasem pálil keramiku v peci na dřevo a stavěl z ní celé barevné zdi.", fr: "De Barcelone à Paris, il y a mille kilomètres : Miró a fait ce voyage en train très souvent pour peindre et apprendre." } },
    { letter: "L", emoji: "🌙", item: { es: "Luna", ca: "Lluna", en: "Ladder", cs: "Luna", fr: "Lune" },
      fact: { es: "En los cielos de Miró casi siempre hay una luna, redonda o en barquita, acompañando a las estrellas.", ca: "Als cels de Miró gairebé sempre hi ha una lluna, rodona o en barqueta, acompanyant les estrelles.", en: "The escape ladder appears in many Miró works: it climbs from the ground up to the sky of dreams.", cs: "Na Miróově nebi skoro vždycky svítí luna, kulatá nebo jako lodička, spolu s hvězdami.", fr: "Dans les ciels de Miró, il y a presque toujours une lune, ronde ou en petit bateau, avec les étoiles." } },
    { letter: "M", emoji: "🏡", item: { es: "Mont-roig", ca: "Mont-roig", en: "Mont-roig", cs: "Mont-roig", fr: "Mont-roig" },
      fact: { es: "El pueblo de su masía. Miró decía que toda su fuerza venía de Mont-roig, de su campo y sus algarrobos.", ca: "El poble de la seva masia. Miró deia que tota la seva força venia de Mont-roig, del seu camp i els seus garrofers.", en: "The village of his farmhouse. Miró said all his strength came from Mont-roig, its fields and its carob trees.", cs: "Vesnice s jeho statkem. Miró říkal, že všechna jeho síla pochází z Mont-roig, z tamních polí a stromů.", fr: "Le village de sa ferme. Miró disait que toute sa force venait de Mont-roig, de ses champs et de ses caroubiers." } },
    { letter: "N", emoji: "⚫", item: { es: "Negro", ca: "Negre", en: "Night", cs: "Noc", fr: "Noir" },
      fact: { es: "Su línea negra y gruesa dibuja las formas, como si las abrazara para que no se escapen.", ca: "La seva línia negra i gruixuda dibuixa les formes, com si les abracés perquè no s'escapin.", en: "Miró loved the night: he painted its sky full of stars in his Constellations.", cs: "Miró měl rád noc: hvězdné nebe maloval ve svých Konstelacích znovu a znovu.", fr: "Sa ligne noire et épaisse dessine les formes, comme si elle les serrait pour qu'elles ne s'échappent pas." } },
    { letter: "O", emoji: "👁️", item: { es: "Ojo", ca: "Ocell", en: "Ochre", cs: "Oko", fr: "Oiseau" },
      fact: { es: "En sus cuadros hay ojos grandes y curiosos que te miran, como si el cuadro también quisiera verte a ti.", ca: "L'ocell és a gairebé tots els seus quadres, volant entre la terra i les estrelles.", en: "Ochre is the earthy colour of his first farm paintings, the colour of Mont-roig soil.", cs: "V jeho obrazech jsou velké zvědavé oči, které se na tebe dívají, jako by tě obraz chtěl taky vidět.", fr: "L'oiseau est dans presque tous ses tableaux, volant entre la terre et les étoiles." } },
    { letter: "P", emoji: "🐦", item: { es: "Pájaro", ca: "Pinzell", en: "Palette", cs: "Pták", fr: "Pinceau" },
      fact: { es: "El pájaro de Miró vuela entre la tierra y las estrellas, como un mensajero de los sueños.", ca: "Miró tenia pinzells de totes les mides: de finets per a les línies i de gruixuts per a les taques.", en: "His palette was simple: red, yellow, blue, green and black. Few colours, endless games.", cs: "Miróův pták létá mezi zemí a hvězdami jako posel snů.", fr: "Miró avait des pinceaux de toutes les tailles : des fins pour les lignes et des gros pour les taches." } },
    { letter: "Q", emoji: "🤫", item: { es: "Quietud", ca: "Quietud", en: "Quiet", cs: "Kvaš (Q)", fr: "Quiétude" },
      fact: { es: "Miró era muy callado. Hablaba poquito... ¡y lo decía todo con sus colores!", ca: "Miró era molt callat. Parlava poquet... i ho deia tot amb els seus colors!", en: "Miró was a very quiet man. He spoke little... and said everything with his colours!", cs: "Kvaš je barva podobná husté vodovce: právě kvašem Miró maloval své Konstelace.", fr: "Miró était très silencieux. Il parlait peu... et disait tout avec ses couleurs !" } },
    { letter: "R", emoji: "🔴", item: { es: "Rojo", ca: "Roig", en: "Red", cs: "Rudé slunce", fr: "Rouge" },
      fact: { es: "El rojo de sus soles y sus manchas alegres. Un puntito rojo puede encender un cuadro entero.", ca: "Mont-roig vol dir muntanya roja: el poble de Miró porta el seu color preferit al nom.", en: "The red of his suns and happy blobs. One little red dot can light up a whole painting.", cs: "Rudé slunce září v mnoha jeho obrazech jako veselé červené kolo.", fr: "Le rouge de ses soleils et de ses taches joyeuses. Un petit point rouge peut allumer tout un tableau." } },
    { letter: "S", emoji: "☀️", item: { es: "Sol", ca: "Sol", en: "Sun", cs: "Slunce", fr: "Soleil" },
      fact: { es: "El sol rojo de Miró calienta muchos de sus cuadros. Hasta hizo una pared entera para el Sol en París.", ca: "El sol vermell de Miró escalfa molts dels seus quadres. Fins i tot va fer una paret sencera per al Sol a París.", en: "Miró's red sun warms many of his paintings. He even made a whole wall for the Sun in Paris.", cs: "Miróovo červené slunce hřeje v mnoha jeho obrazech. V Paříži mu dokonce postavil celou zeď.", fr: "Le soleil rouge de Miró réchauffe beaucoup de ses tableaux. Il a même fait un mur entier pour le Soleil à Paris." } },
    { letter: "T", emoji: "🏺", item: { es: "Taller", ca: "Taller", en: "Tapestry", cs: "Tečka", fr: "Toile" },
      fact: { es: "En su taller de Palma guardaba cuadros, cerámicas y tesoros encontrados: piedras, conchas y raíces.", ca: "Al seu taller de Palma hi guardava quadres, ceràmiques i tresors trobats: pedres, petxines i arrels.", en: "Miró also made giant tapestries: paintings woven with wool, big as a wall.", cs: "Černé tečky tančí po jeho obrazech jako noty veselé písničky.", fr: "Devant une toile blanche, Miró attendait longtemps... jusqu'à ce qu'une petite tache lui montre le chemin." } },
    { letter: "U", emoji: "🌌", item: { es: "Universo", ca: "Univers", en: "Universe", cs: "Umění", fr: "Univers" },
      fact: { es: "Miró se inventó su propio universo: estrella, luna, pájaro y mujer, dibujados a su manera.", ca: "Miró es va inventar el seu propi univers: estrella, lluna, ocell i dona, dibuixats a la seva manera.", en: "Miró invented his own universe: star, moon, bird and woman, drawn his very own way.", cs: "Umění pro Miróa byla hra i práce: maloval, sochal, tiskl a tkal celý život.", fr: "Miró a inventé son propre univers : étoile, lune, oiseau et femme, dessinés à sa façon." } },
    { letter: "V", emoji: "🟢", item: { es: "Verde", ca: "Verd", en: "Vocabulary", cs: "Výstava", fr: "Vert" },
      fact: { es: "El verde completa su caja de colores: rojo, azul, amarillo, verde y la línea negra.", ca: "El verd completa la seva capsa de colors: vermell, blau, groc, verd i la línia negra.", en: "Star, moon, bird, woman: people call these drawings Miró's picture vocabulary.", cs: "Svou první výstavu měl v roce 1918 v Barceloně. Od té doby nikdy nepřestal tvořit.", fr: "Le vert complète sa boîte de couleurs : rouge, bleu, jaune, vert et la ligne noire." } },
    { letter: "W", emoji: "🧱", item: { es: "Wall of the Sun (el muro del Sol)", ca: "Wall of the Sun (el mur del Sol)", en: "Wall of the Sun", cs: "Wall of the Sun (Zeď Slunce)", fr: "Wall of the Sun (le mur du Soleil)" },
      fact: { es: "Así llaman en inglés al mural del Sol que hizo con Artigas para la UNESCO en París, junto al de la Luna.", ca: "Així en diuen en anglès del mural del Sol que va fer amb Artigas per a la UNESCO a París, al costat del de la Lluna.", en: "The ceramic mural Miró made with Artigas for UNESCO in Paris, right next to the Wall of the Moon.", cs: "Tak se anglicky říká keramické Zdi Slunce, kterou s Artigasem vytvořil pro UNESCO v Paříži, hned vedle Zdi Měsíce.", fr: "C'est le nom anglais du mur du Soleil qu'il a fait avec Artigas pour l'UNESCO à Paris, à côté du mur de la Lune." } },
    { letter: "X", emoji: "🪵", item: { es: "Xilografía", ca: "Xilografia", en: "Xylography", cs: "Xylografie", fr: "Xylographie" },
      fact: { es: "Un dibujo tallado en madera que luego se imprime. Miró también hizo grabados así para ilustrar libros.", ca: "Un dibuix tallat en fusta que després s'imprimeix. Miró també va fer gravats així per il·lustrar llibres.", en: "A picture carved in wood and then printed. Miró made prints like this to illustrate books.", cs: "Obrázek vyřezaný do dřeva, který se pak tiskne. I takové tisky Miró dělal pro ilustrace knih.", fr: "Un dessin gravé dans le bois puis imprimé. Miró a aussi fait des gravures comme ça pour illustrer des livres." } },
    { letter: "Y", emoji: "🟡", item: { es: "Yellow (¡amarillo!)", ca: "Yellow (el groc!)", en: "Yellow", cs: "Yellow (žlutá)", fr: "Yellow (le jaune !)" },
      fact: { es: "Yellow es amarillo en inglés: el color más alegre de Miró, el de sus soles y estrellas.", ca: "Yellow és groc en anglès: el color més alegre de Miró, el dels seus sols i estrelles.", en: "Yellow was Miró's happiest colour, the colour of his suns and stars.", cs: "Yellow znamená anglicky žlutá: Miróova nejveselejší barva, barva jeho sluncí a hvězd.", fr: "Yellow veut dire jaune en anglais : la couleur la plus joyeuse de Miró, celle de ses soleils et de ses étoiles." } },
    { letter: "Z", emoji: "⚡", item: { es: "Zigzag", ca: "Ziga-zaga", en: "Zigzag", cs: "Zvědavost", fr: "Zigzag" },
      fact: { es: "Las líneas de Miró bailan: a veces van en curva suave y a veces en zigzag saltarín.", ca: "Les línies de Miró ballen: de vegades van en corba suau i de vegades en ziga-zaga saltironant.", en: "Miró's lines dance: sometimes in a soft curve and sometimes in a jumpy zigzag.", cs: "Zvědavost ho nikdy neopustila: na procházkách sbíral kamínky a kořínky pro své sochy.", fr: "Les lignes de Miró dansent : parfois en courbe douce et parfois en zigzag sautillant." } }
  ],

  /* ---------- FAMOSOS ---------- */
  famous: [
    { emoji: "🎨", year: "1893", color: "#e53935", name: { es: "Joan Miró", ca: "Joan Miró", en: "Joan Miró", cs: "Joan Miró", fr: "Joan Miró" },
      achievement: { es: "El pintor de las estrellas: nació en Barcelona y pintó su propio universo de estrellas, lunas y pájaros.", ca: "El pintor de les estrelles: va néixer a Barcelona i va pintar el seu propi univers d'estrelles, llunes i ocells.", en: "The painter of the stars: born in Barcelona, he painted his own universe of stars, moons and birds.", cs: "Malíř hvězd: narodil se v Barceloně a namaloval svůj vlastní vesmír hvězd, měsíců a ptáků.", fr: "Le peintre des étoiles : né à Barcelone, il a peint son propre univers d'étoiles, de lunes et d'oiseaux." },
      quote: { es: "Yo pinto como quien camina por la calle y recoge cosas.", ca: "Jo pinto com qui camina pel carrer i recull coses.", en: "I paint like someone walking down the street, picking things up.", cs: "Maluji jako někdo, kdo jde po ulici a sbírá věci.", fr: "Je peins comme quelqu'un qui marche dans la rue et ramasse des choses." } },
    { emoji: "💛", year: "1929", color: "#fbc02d", name: { es: "Pilar Juncosa", ca: "Pilar Juncosa", en: "Pilar Juncosa", cs: "Pilar Juncosa", fr: "Pilar Juncosa" },
      achievement: { es: "Su compañera de toda la vida, de Mallorca. Cuidó de que Joan pudiera pintar tranquilo y luego creó talleres para artistas jóvenes.", ca: "La seva companya de tota la vida, de Mallorca. Va cuidar que en Joan pogués pintar tranquil i després va crear tallers per a artistes joves.", en: "His lifelong companion, from Mallorca. She made sure Joan could paint in peace and later created workshops for young artists.", cs: "Jeho celoživotní společnice z Mallorky. Starala se, aby Joan mohl v klidu malovat, a později založila dílny pro mladé umělce.", fr: "Sa compagne de toute une vie, de Majorque. Elle veillait à ce que Joan puisse peindre tranquille et a ensuite créé des ateliers pour les jeunes artistes." },
      quote: { es: "Lo más importante era que Joan pudiera trabajar en paz.", ca: "El més important era que en Joan pogués treballar en pau.", en: "The most important thing was that Joan could work in peace.", cs: "Nejdůležitější bylo, aby Joan mohl v klidu pracovat.", fr: "Le plus important, c'était que Joan puisse travailler en paix." } },
    { emoji: "🏛️", year: "1956", color: "#1e88e5", name: { es: "Josep Lluís Sert", ca: "Josep Lluís Sert", en: "Josep Lluís Sert", cs: "Josep Lluís Sert", fr: "Josep Lluís Sert" },
      achievement: { es: "El arquitecto amigo: le construyó el gran taller lleno de luz en Palma y el edificio blanco de la Fundació en Barcelona.", ca: "L'arquitecte amic: li va construir el gran taller ple de llum a Palma i l'edifici blanc de la Fundació a Barcelona.", en: "The architect friend: he built Miró's big light-filled workshop in Palma and the white Fundació building in Barcelona.", cs: "Přítel architekt: postavil mu velký prosvětlený ateliér v Palmě i bílou budovu nadace v Barceloně.", fr: "L'architecte ami : il lui a construit le grand atelier plein de lumière à Palma et le bâtiment blanc de la Fondation à Barcelone." },
      quote: { es: "Para un pintor de estrellas hay que construir con luz.", ca: "Per a un pintor d'estrelles cal construir amb llum.", en: "For a painter of stars, you must build with light.", cs: "Pro malíře hvězd se musí stavět ze světla.", fr: "Pour un peintre d'étoiles, il faut construire avec de la lumière." } },
    { emoji: "🎐", year: "1937", color: "#8e24aa", name: { es: "Alexander Calder", ca: "Alexander Calder", en: "Alexander Calder", cs: "Alexander Calder", fr: "Alexander Calder" },
      achievement: { es: "Su amigo americano, el inventor de los móviles: esculturas que bailan con el aire. Expusieron juntos y se intercambiaban obras de regalo.", ca: "El seu amic americà, l'inventor dels mòbils: escultures que ballen amb l'aire. Van exposar junts i s'intercanviaven obres de regal.", en: "His American friend, the inventor of mobiles: sculptures that dance with the air. They exhibited together and swapped artworks as gifts.", cs: "Jeho americký přítel, vynálezce mobilů: soch, které tančí ve vzduchu. Vystavovali spolu a svá díla si darovali navzájem.", fr: "Son ami américain, l'inventeur des mobiles : des sculptures qui dansent avec l'air. Ils ont exposé ensemble et s'offraient des œuvres." },
      quote: { es: "Mis esculturas bailan con el viento, como los cuadros de mi amigo Joan.", ca: "Les meves escultures ballen amb el vent, com els quadres del meu amic Joan.", en: "My sculptures dance with the wind, like the paintings of my friend Joan.", cs: "Moje sochy tančí s větrem, jako obrazy mého přítele Joana.", fr: "Mes sculptures dansent avec le vent, comme les tableaux de mon ami Joan." } },
    { emoji: "🎩", year: "1932", color: "#43a047", name: { es: "Joan Prats", ca: "Joan Prats", en: "Joan Prats", cs: "Joan Prats", fr: "Joan Prats" },
      achievement: { es: "El sombrerero de Barcelona, amigo desde jóvenes: creyó en Miró antes que casi nadie, guardó sus obras y ayudó a crear la Fundació.", ca: "El barretaire de Barcelona, amic des de joves: va creure en Miró abans que gairebé ningú, va guardar les seves obres i va ajudar a crear la Fundació.", en: "The hatmaker of Barcelona, his friend since they were young: he believed in Miró before almost anyone, kept his works and helped create the Fundació.", cs: "Barcelonský kloboučník, přítel od mládí: věřil v Miróa dřív než skoro kdokoli jiný, opatroval jeho díla a pomohl založit nadaci.", fr: "Le chapelier de Barcelone, ami de jeunesse : il a cru en Miró avant presque tout le monde, a gardé ses œuvres et a aidé à créer la Fondation." },
      quote: { es: "Los sombreros se me daban bien, pero mi mejor oficio fue ser amigo de Joan.", ca: "Els barrets se'm donaven bé, però el meu millor ofici va ser ser amic d'en Joan.", en: "I was good at hats, but my best job was being Joan's friend.", cs: "Klobouky mi šly, ale nejlepší řemeslo bylo být Joanovým přítelem.", fr: "Les chapeaux, je savais faire, mais mon plus beau métier a été d'être l'ami de Joan." } }
  ],

  childDream: {
    girl: { es: "Pintora de estrellas y pájaros", ca: "Pintora d'estrelles i ocells", en: "Painter of stars and birds", cs: "Malířka hvězd a ptáků", fr: "Peintre d'étoiles et d'oiseaux" },
    boy: { es: "Pintor de estrellas y pájaros", ca: "Pintor d'estrelles i ocells", en: "Painter of stars and birds", cs: "Malíř hvězd a ptáků", fr: "Peintre d'étoiles et d'oiseaux" },
    kid: { es: "Peque pintor de estrellas", ca: "Pintor d'estrelles i ocells", en: "Painter of stars and birds", cs: "Malíř hvězd a ptáků", fr: "Peint les étoiles et les oiseaux" }
  },
  childQuote: { es: "Cuando sea mayor pintaré un cielo tan bonito que las estrellas querrán vivir en él.", ca: "Quan sigui gran pintaré un cel tan bonic que les estrelles hi voldran viure.", en: "When I grow up I will paint a sky so pretty that the stars will want to live in it.", cs: "Až vyrostu, namaluju tak krásné nebe, že v něm hvězdy budou chtít bydlet.", fr: "Quand je serai grand, je peindrai un ciel si joli que les étoiles voudront y habiter." },

  /* ---------- MATES ---------- */
  mathEmojis: ["⭐", "🌙", "🐦", "🔴", "🔵", "🟡"],

  /* ---------- CONSTRUCTOR: pinta tu cuadro ---------- */
  builder: {
    title: { es: "¡Pinta tu cuadro de Miró!", ca: "Pinta el teu quadre de Miró!", en: "Paint your Miró picture!", cs: "Namaluj si svůj obraz jako Miró!", fr: "Peins ton tableau de Miró !" },
    thing: { es: "cuadro", ca: "quadre", en: "painting", cs: "obraz", fr: "tableau" },
    parts: [
      { id: "fondo", label: { es: "El fondo del lienzo", ca: "El fons de la tela", en: "The canvas background", cs: "Pozadí plátna", fr: "Le fond de la toile" },
        options: [{ id: "crema", v: "#fdf6e3" }, { id: "cielo", v: "#dbeefb" }, { id: "rosa", v: "#fbe4ea" }, { id: "menta", v: "#e2f2e4" }] },
      { id: "forma", label: { es: "La forma grande", ca: "La forma gran", en: "The big shape", cs: "Velký tvar", fr: "La grande forme" },
        options: [{ id: "estrella", v: "estrella", icon: "⭐" }, { id: "luna", v: "luna", icon: "🌙" }, { id: "sol", v: "sol", icon: "☀️" }] },
      { id: "personaje", label: { es: "El personaje", ca: "El personatge", en: "The character", cs: "Postavička", fr: "Le personnage" },
        options: [{ id: "pajaro", v: "pajaro", icon: "🐦" }, { id: "mujer", v: "mujer", icon: "💃" }, { id: "ojo", v: "ojo", icon: "👁️" }] },
      { id: "linea", label: { es: "La línea mágica", ca: "La línia màgica", en: "The magic line", cs: "Kouzelná čára", fr: "La ligne magique" },
        options: [{ id: "curva", v: "curva", icon: "〰️" }, { id: "zigzag", v: "zigzag", icon: "⚡" }, { id: "espiral", v: "espiral", icon: "🌀" }] }
    ],
    svg(sel) {
      const fondo = sel.fondo || "#fdf6e3";
      /* la forma grande, arriba: estrella mironiana, luna o sol rojo */
      let forma = `<g stroke="#212121" stroke-width="3.4" stroke-linecap="round">
          <line x1="70" y1="20" x2="70" y2="52"/><line x1="54" y1="36" x2="86" y2="36"/>
          <line x1="59" y1="25" x2="81" y2="47"/><line x1="81" y1="25" x2="59" y2="47"/></g>
        <circle cx="70" cy="36" r="4.4" fill="#e53935"/>`;
      if (sel.forma === "luna") forma = `<path d="M80 18 A19 19 0 1 0 80 54 A15 15 0 1 1 80 18 Z" fill="#fdd835" stroke="#212121" stroke-width="2.6"/>
        <circle cx="87" cy="26" r="2" fill="#212121"/>`;
      if (sel.forma === "sol") forma = `<circle cx="70" cy="36" r="15" fill="#e53935" stroke="#212121" stroke-width="2.6"/>
        <g stroke="#212121" stroke-width="2.4" stroke-linecap="round">
          <line x1="70" y1="14" x2="70" y2="19"/><line x1="70" y1="53" x2="70" y2="58"/>
          <line x1="48" y1="36" x2="53" y2="36"/><line x1="87" y1="36" x2="92" y2="36"/>
          <line x1="55" y1="21" x2="58" y2="24"/><line x1="85" y1="48" x2="82" y2="45"/>
          <line x1="85" y1="24" x2="82" y2="27"/><line x1="55" y1="51" x2="58" y2="48"/></g>`;
      /* el personaje, abajo a la izquierda: pájaro, mujer u ojo mironianos */
      let pers = `<path d="M26 88 Q38 70 54 82 Q46 85 43 92 Q35 100 26 88 Z" fill="#212121"/>
        <circle cx="55" cy="79" r="5.5" fill="#e53935"/>
        <circle cx="56.6" cy="77.8" r="1.5" fill="#fdd835"/>
        <path d="M60 79 L66 77 L60 81 Z" fill="#fdd835"/>
        <path d="M33 84 Q40 78 47 84" stroke="#1e88e5" stroke-width="3" fill="none" stroke-linecap="round"/>`;
      if (sel.personaje === "mujer") pers = `<circle cx="40" cy="68" r="5" fill="#212121"/>
        <path d="M40 73 Q28 96 40 99 Q52 96 40 73 Z" fill="#1e88e5"/>
        <path d="M31 80 Q22 74 20 66 M49 80 Q58 74 60 66" stroke="#212121" stroke-width="2.6" fill="none" stroke-linecap="round"/>
        <circle cx="20" cy="64" r="2.6" fill="#e53935"/><circle cx="60" cy="64" r="2.6" fill="#fdd835"/>
        <circle cx="40" cy="88" r="3" fill="#e53935"/>`;
      if (sel.personaje === "ojo") pers = `<path d="M24 86 Q40 72 56 86 Q40 100 24 86 Z" fill="#fff" stroke="#212121" stroke-width="2.6"/>
        <circle cx="40" cy="86" r="5.5" fill="#1e88e5"/><circle cx="40" cy="86" r="2.2" fill="#212121"/>
        <g stroke="#212121" stroke-width="2" stroke-linecap="round">
          <line x1="34" y1="74" x2="32" y2="69"/><line x1="40" y1="72" x2="40" y2="67"/><line x1="46" y1="74" x2="48" y2="69"/></g>`;
      /* la línea mágica cruza el cuadro */
      let linea = `<path d="M22 62 Q45 48 70 62 Q95 76 118 58" stroke="#212121" stroke-width="3" fill="none" stroke-linecap="round"/>`;
      if (sel.linea === "zigzag") linea = `<path d="M22 64 L38 52 L54 66 L70 52 L86 66 L102 52 L118 62" stroke="#212121" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
      if (sel.linea === "espiral") linea = `<path d="M100 78 q12 -14 2 -21 q-10 -7 -17 2 q-6 8 2 14 q7 5 12 -2" stroke="#212121" stroke-width="3" fill="none" stroke-linecap="round"/>`;
      return `<svg viewBox="0 0 140 120" width="230" height="197">
        <rect x="4" y="2" width="132" height="116" rx="5" fill="#8d6e63"/>
        <rect x="7" y="5" width="126" height="110" rx="3" fill="#a1887f"/>
        <rect x="12" y="10" width="116" height="100" fill="${fondo}"/>
        ${linea}
        ${forma}
        ${pers}
        <circle cx="112" cy="90" r="4" fill="#43a047"/>
        <circle cx="121" cy="78" r="2.6" fill="#1e88e5"/>
        <circle cx="24" cy="26" r="2.6" fill="#fdd835"/>
        <path d="M108 103 q5 -3 10 0" stroke="#e53935" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      </svg>`;
    }
  }
};
