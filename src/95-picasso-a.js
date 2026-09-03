"use strict";
/* ============================================================
   Contenido de PICASSO (parte A): registro de la aventura,
   quiz, alfabeto, famosos, mates y constructor.
   Todo con datos reales contados para niños.
   ============================================================ */

THEMES.picasso = {
  emoji: "🕊️", ready: true,
  grad: "linear-gradient(150deg,#1565c0,#ef9a9a)",
  name: { es: "Picasso", ca: "Picasso", en: "Picasso", cs: "Picasso", fr: "Picasso" }
};

THEMES.picasso.content = {

  statusPlace: { es: "Conectado desde el taller de los mil colores", ca: "Connectat des del taller dels mil colors", en: "Connected from the workshop of a thousand colours", cs: "Připojeno z ateliéru tisíce barev", fr: "Connecté depuis l'atelier aux mille couleurs" },
  welcome: { es: "¡Rumbo al taller de Picasso, {name}! Coge un pincel... ¡vamos a pintar el mundo de colores!", ca: "Rumb al taller de Picasso, {name}! Agafa un pinzell... anem a pintar el món de colors!", en: "Off to Picasso's workshop, {name}! Grab a paintbrush... let's paint the world in colours!", cs: "Vzhůru do Picassova ateliéru, {name}! Vezmi si štětec... jdeme vymalovat svět barvami!", fr: "En route vers l'atelier de Picasso, {name} ! Prends un pinceau... on va peindre le monde en couleurs !" },

  /* ---------- QUIZ: 10 preguntas ---------- */
  quiz: [
    { emoji: "🔵",
      q: { es: "¿De qué color lo pintaba todo Picasso cuando estaba triste?", ca: "De quin color ho pintava tot Picasso quan estava trist?", en: "What colour did Picasso paint everything when he was sad?", cs: "Jakou barvou maloval Picasso všechno, když byl smutný?", fr: "De quelle couleur Picasso peignait-il tout quand il était triste ?" },
      options: [
        { es: "Rojo", ca: "Vermell", en: "Red", cs: "Červenou", fr: "Rouge" },
        { es: "Azul", ca: "Blau", en: "Blue", cs: "Modrou", fr: "Bleu" },
        { es: "Verde", ca: "Verd", en: "Green", cs: "Zelenou", fr: "Vert" },
        { es: "Naranja", ca: "Taronja", en: "Orange", cs: "Oranžovou", fr: "Orange" }],
      answer: 1,
      explanation: { es: "Fue su período azul: pintaba el mar, la guitarra y hasta a la gente de color azul.", ca: "Va ser el seu període blau: pintava el mar, la guitarra i fins i tot la gent de color blau.", en: "That was his blue period: he painted the sea, the guitar and even people in blue.", cs: "To bylo jeho modré období: moře, kytaru i lidi maloval modrou barvou.", fr: "C'était sa période bleue : il peignait la mer, la guitare et même les gens en bleu." } },
    { emoji: "🕊️",
      q: { es: "¿Qué pájaro dibujó Picasso como símbolo de la paz?", ca: "Quin ocell va dibuixar Picasso com a símbol de la pau?", en: "Which bird did Picasso draw as a symbol of peace?", cs: "Kterého ptáka nakreslil Picasso jako symbol míru?", fr: "Quel oiseau Picasso a-t-il dessiné comme symbole de la paix ?" },
      options: [
        { es: "El loro", ca: "El lloro", en: "The parrot", cs: "Papouška", fr: "Le perroquet" },
        { es: "La paloma", ca: "La coloma", en: "The dove", cs: "Holubici", fr: "La colombe" },
        { es: "El pingüino", ca: "El pingüí", en: "The penguin", cs: "Tučňáka", fr: "Le pingouin" },
        { es: "El flamenco", ca: "El flamenc", en: "The flamingo", cs: "Plameňáka", fr: "Le flamant rose" }],
      answer: 1,
      explanation: { es: "Su paloma blanca dio la vuelta al mundo pidiendo paz. ¡Hasta llamó Paloma a su hija!", ca: "La seva coloma blanca va fer la volta al món demanant pau. Fins i tot va posar Paloma a la seva filla!", en: "His white dove travelled around the world asking for peace. He even named his daughter Paloma, which means dove!", cs: "Jeho bílá holubice obletěla celý svět s prosbou o mír. Svou dceru dokonce pojmenoval Paloma, tedy holubice!", fr: "Sa colombe blanche a fait le tour du monde pour demander la paix. Il a même appelé sa fille Paloma, colombe !" } },
    { emoji: "🔷",
      q: { es: "¿Qué inventó Picasso junto a su amigo Braque?", ca: "Què va inventar Picasso amb el seu amic Braque?", en: "What did Picasso invent together with his friend Braque?", cs: "Co vymyslel Picasso se svým kamarádem Braquem?", fr: "Qu'est-ce que Picasso a inventé avec son ami Braque ?" },
      options: [
        { es: "El cubismo", ca: "El cubisme", en: "Cubism", cs: "Kubismus", fr: "Le cubisme" },
        { es: "La bicicleta", ca: "La bicicleta", en: "The bicycle", cs: "Jízdní kolo", fr: "La bicyclette" },
        { es: "El chocolate", ca: "La xocolata", en: "Chocolate", cs: "Čokoládu", fr: "Le chocolat" },
        { es: "El submarino", ca: "El submarí", en: "The submarine", cs: "Ponorku", fr: "Le sous-marin" }],
      answer: 0,
      explanation: { es: "El cubismo: pintar las cosas como hechas de trocitos, mirándolas desde muchos lados a la vez.", ca: "El cubisme: pintar les coses com fetes de trossets, mirant-les des de molts costats alhora.", en: "Cubism: painting things as if made of little pieces, seen from many sides at once.", cs: "Kubismus: malovat věci jako z kousíčků a dívat se na ně z mnoha stran najednou.", fr: "Le cubisme : peindre les choses comme faites de petits morceaux, vues de plusieurs côtés à la fois." } },
    { emoji: "🌅",
      q: { es: "¿En qué ciudad nació Picasso?", ca: "A quina ciutat va néixer Picasso?", en: "In which city was Picasso born?", cs: "Ve kterém městě se Picasso narodil?", fr: "Dans quelle ville Picasso est-il né ?" },
      options: [
        { es: "París", ca: "París", en: "Paris", cs: "V Paříži", fr: "Paris" },
        { es: "Barcelona", ca: "Barcelona", en: "Barcelona", cs: "V Barceloně", fr: "Barcelone" },
        { es: "Málaga", ca: "Màlaga", en: "Málaga", cs: "V Málaze", fr: "Malaga" },
        { es: "Roma", ca: "Roma", en: "Rome", cs: "V Římě", fr: "Rome" }],
      answer: 2,
      explanation: { es: "Nació en Málaga en 1881, junto al mar. Después vivió en Barcelona y en Francia.", ca: "Va néixer a Màlaga el 1881, vora el mar. Després va viure a Barcelona i a França.", en: "He was born in Málaga in 1881, by the sea. Later he lived in Barcelona and in France.", cs: "Narodil se v Málaze u moře v roce 1881. Později žil v Barceloně a ve Francii.", fr: "Il est né à Malaga en 1881, au bord de la mer. Ensuite il a vécu à Barcelone et en France." } },
    { emoji: "👀",
      q: { es: "En sus retratos cubistas, ¿dónde pueden estar los dos ojos?", ca: "Als seus retrats cubistes, on poden ser els dos ulls?", en: "In his cubist portraits, where can the two eyes be?", cs: "Kde mohou být na jeho kubistických portrétech obě oči?", fr: "Dans ses portraits cubistes, où peuvent être les deux yeux ?" },
      options: [
        { es: "En el mismo lado de la cara", ca: "Al mateix costat de la cara", en: "On the same side of the face", cs: "Na stejné straně obličeje", fr: "Du même côté du visage" },
        { es: "En los pies", ca: "Als peus", en: "On the feet", cs: "Na nohou", fr: "Sur les pieds" },
        { es: "Siempre cerrados", ca: "Sempre tancats", en: "Always closed", cs: "Vždycky zavřené", fr: "Toujours fermés" },
        { es: "En la espalda", ca: "A l'esquena", en: "On the back", cs: "Na zádech", fr: "Dans le dos" }],
      answer: 0,
      explanation: { es: "Pintaba la cara de frente y de perfil a la vez. ¡Por eso los ojos parecen bailar!", ca: "Pintava la cara de front i de perfil alhora. Per això els ulls semblen ballar!", en: "He painted the face from the front and from the side at the same time. That is why the eyes seem to dance!", cs: "Maloval obličej zepředu i z profilu zároveň. Proto to vypadá, že oči tancují!", fr: "Il peignait le visage de face et de profil en même temps. C'est pour ça que les yeux semblent danser !" } },
    { emoji: "🖼️",
      q: { es: "¿De qué colores pintó el Guernica, su mural gigante?", ca: "De quins colors va pintar el Guernica, el seu mural gegant?", en: "What colours did he use for Guernica, his giant mural?", cs: "Jakými barvami namaloval Guernicu, svůj obří obraz?", fr: "De quelles couleurs a-t-il peint Guernica, sa toile géante ?" },
      options: [
        { es: "De mil colores", ca: "De mil colors", en: "A thousand colours", cs: "Tisíci barvami", fr: "De mille couleurs" },
        { es: "Blanco, negro y gris", ca: "Blanc, negre i gris", en: "White, black and grey", cs: "Bílou, černou a šedou", fr: "Blanc, noir et gris" },
        { es: "Todo dorado", ca: "Tot daurat", en: "All golden", cs: "Celý zlatě", fr: "Tout doré" },
        { es: "Rosa y azul", ca: "Rosa i blau", en: "Pink and blue", cs: "Růžovou a modrou", fr: "Rose et bleu" }],
      answer: 1,
      explanation: { es: "Es un cuadro gigante en blanco y negro que pide que nunca, nunca haya guerras.", ca: "És un quadre gegant en blanc i negre que demana que mai, mai hi hagi guerres.", en: "It is a giant black and white painting that asks for there to be no wars, ever.", cs: "Je to obří černobílý obraz, který prosí, aby už nikdy nebyly války.", fr: "C'est un tableau géant en noir et blanc qui demande qu'il n'y ait jamais, jamais de guerres." } },
    { emoji: "🌸",
      q: { es: "Después del período azul, ¿de qué color se llenaron sus cuadros?", ca: "Després del període blau, de quin color es van omplir els seus quadres?", en: "After the blue period, what colour filled his paintings?", cs: "Jakou barvou se po modrém období naplnily jeho obrazy?", fr: "Après la période bleue, de quelle couleur ses tableaux se sont-ils remplis ?" },
      options: [
        { es: "Rosa", ca: "Rosa", en: "Pink", cs: "Růžovou", fr: "Rose" },
        { es: "Marrón", ca: "Marró", en: "Brown", cs: "Hnědou", fr: "Marron" },
        { es: "Negro", ca: "Negre", en: "Black", cs: "Černou", fr: "Noir" },
        { es: "Plateado", ca: "Platejat", en: "Silver", cs: "Stříbrnou", fr: "Argenté" }],
      answer: 0,
      explanation: { es: "Llegó el período rosa: pintó el circo, los saltimbanquis y los arlequines.", ca: "Va arribar el període rosa: va pintar el circ, els saltimbanquis i els arlequins.", en: "The rose period arrived: he painted the circus, the acrobats and the harlequins.", cs: "Přišlo růžové období: maloval cirkus, akrobaty a harlekýny.", fr: "La période rose est arrivée : il a peint le cirque, les saltimbanques et les arlequins." } },
    { emoji: "🏺",
      q: { es: "¿Qué hacía Picasso en el pueblo de Vallauris?", ca: "Què feia Picasso al poble de Vallauris?", en: "What did Picasso make in the village of Vallauris?", cs: "Co vyráběl Picasso ve vesničce Vallauris?", fr: "Que faisait Picasso dans le village de Vallauris ?" },
      options: [
        { es: "Cerámica: platos y jarrones", ca: "Ceràmica: plats i gerros", en: "Pottery: plates and vases", cs: "Keramiku: talíře a vázy", fr: "De la céramique : assiettes et vases" },
        { es: "Barcos", ca: "Vaixells", en: "Boats", cs: "Lodě", fr: "Des bateaux" },
        { es: "Zapatos", ca: "Sabates", en: "Shoes", cs: "Boty", fr: "Des chaussures" },
        { es: "Castillos de arena", ca: "Castells de sorra", en: "Sandcastles", cs: "Hrady z písku", fr: "Des châteaux de sable" }],
      answer: 0,
      explanation: { es: "Hacía platos, jarrones y palomas de barro, pintados con caras, soles y animales.", ca: "Feia plats, gerros i colomes de fang, pintats amb cares, sols i animals.", en: "He made clay plates, vases and doves, painted with faces, suns and animals.", cs: "Vyráběl hliněné talíře, vázy a holubice, pomalované obličeji, sluníčky a zvířaty.", fr: "Il faisait des assiettes, des vases et des colombes en argile, peints avec des visages, des soleils et des animaux." } },
    { emoji: "🐂",
      q: { es: "¿Qué animal dibujaba Picasso sin casi levantar el lápiz?", ca: "Quin animal dibuixava Picasso gairebé sense aixecar el llapis?", en: "Which animal did Picasso draw almost without lifting his pencil?", cs: "Které zvíře kreslil Picasso skoro jedním tahem tužky?", fr: "Quel animal Picasso dessinait-il presque sans lever le crayon ?" },
      options: [
        { es: "El toro", ca: "El toro", en: "The bull", cs: "Býka", fr: "Le taureau" },
        { es: "El dragón", ca: "El drac", en: "The dragon", cs: "Draka", fr: "Le dragon" },
        { es: "El tiburón", ca: "El tauró", en: "The shark", cs: "Žraloka", fr: "Le requin" },
        { es: "El unicornio", ca: "L'unicorn", en: "The unicorn", cs: "Jednorožce", fr: "La licorne" }],
      answer: 0,
      explanation: { es: "Dibujó el toro una y otra vez, cada vez con menos líneas, hasta dejar solo lo importante.", ca: "Va dibuixar el toro un cop i un altre, cada vegada amb menys línies, fins a deixar només l'important.", en: "He drew the bull again and again, each time with fewer lines, until only the important part was left.", cs: "Kreslil býka znovu a znovu, pokaždé s méně čarami, až zbylo jen to nejdůležitější.", fr: "Il a dessiné le taureau encore et encore, avec de moins en moins de traits, pour ne garder que l'important." } },
    { emoji: "📰",
      q: { es: "¿Qué pegó Picasso en un cuadro para inventar el collage?", ca: "Què va enganxar Picasso en un quadre per inventar el collage?", en: "What did Picasso glue onto a painting to invent collage?", cs: "Co nalepil Picasso na obraz, když vymýšlel koláž?", fr: "Qu'est-ce que Picasso a collé sur un tableau pour inventer le collage ?" },
      options: [
        { es: "Un trozo de periódico", ca: "Un tros de diari", en: "A piece of newspaper", cs: "Kousek novin", fr: "Un morceau de journal" },
        { es: "Una pizza", ca: "Una pizza", en: "A pizza", cs: "Pizzu", fr: "Une pizza" },
        { es: "Un zapato", ca: "Una sabata", en: "A shoe", cs: "Botu", fr: "Une chaussure" },
        { es: "Un teléfono", ca: "Un telèfon", en: "A telephone", cs: "Telefon", fr: "Un téléphone" }],
      answer: 0,
      explanation: { es: "Con Braque pegaba trocitos de periódico y de papel en los cuadros. ¡Así nació el collage!", ca: "Amb en Braque enganxava trossets de diari i de paper als quadres. Així va néixer el collage!", en: "With Braque he glued little pieces of newspaper and paper onto paintings. That is how collage was born!", cs: "S Braquem lepili na obrazy kousky novin a papíru. Tak se zrodila koláž!", fr: "Avec Braque, il collait des petits morceaux de journal et de papier sur les tableaux. Le collage était né !" } },
    { emoji: "✏️",
      q: { es: "¿Qué le gustaba hacer a Picasso desde muy pequeño?", ca: "Què li agradava fer a Picasso des de ben petit?", en: "What did Picasso love doing from a very young age?", cs: "Co Picasso rád dělal už odmalička?", fr: "Qu'est-ce que Picasso aimait faire depuis tout petit ?" },
      options: [
        { es: "Dormir la siesta", ca: "Fer la migdiada", en: "Taking naps", cs: "Spát po obědě", fr: "Faire la sieste" },
        { es: "Cocinar pasteles", ca: "Cuinar pastissos", en: "Baking cakes", cs: "Péct dorty", fr: "Faire des gâteaux" },
        { es: "Dibujar", ca: "Dibuixar", en: "Drawing", cs: "Kreslit", fr: "Dessiner" },
        { es: "Jugar al fútbol", ca: "Jugar a futbol", en: "Playing football", cs: "Hrát fotbal", fr: "Jouer au football" }],
      answer: 2,
      explanation: { es: "Dibujaba casi antes de hablar: dicen que su primera palabra fue piz, de lápiz.", ca: "Dibuixava gairebé abans de parlar: diuen que la seva primera paraula va ser piz, que volia dir llapis.", en: "He drew almost before he could talk: they say his first word was piz, short for lápiz, pencil in Spanish.", cs: "Kreslil dřív, než pořádně mluvil: prý jeho první slovo bylo piz, zkráceně lápiz, tedy tužka.", fr: "Il dessinait presque avant de parler : on dit que son premier mot fut piz, pour lápiz, crayon en espagnol." } },
    { emoji: "👨‍🎨",
      q: { es: "¿Cuál era el trabajo del papá de Picasso?", ca: "Quina era la feina del pare de Picasso?", en: "What was the job of Picasso's dad?", cs: "Čím byl Picassův tatínek?", fr: "Quel était le métier du papa de Picasso ?" },
      options: [
        { es: "Bombero", ca: "Bomber", en: "Firefighter", cs: "Hasič", fr: "Pompier" },
        { es: "Pintor y profesor de dibujo", ca: "Pintor i professor de dibuix", en: "Painter and drawing teacher", cs: "Malíř a učitel kreslení", fr: "Peintre et professeur de dessin" },
        { es: "Astronauta", ca: "Astronauta", en: "Astronaut", cs: "Astronaut", fr: "Astronaute" },
        { es: "Panadero", ca: "Forner", en: "Baker", cs: "Pekař", fr: "Boulanger" }],
      answer: 1,
      explanation: { es: "Su padre pintaba palomas y le enseñó a usar los pinceles cuando era muy pequeño.", ca: "El seu pare pintava colomes i li va ensenyar a fer servir els pinzells quan era molt petit.", en: "His father painted pigeons and taught him to use brushes when he was very little.", cs: "Jeho tatínek maloval holuby a už v útlém věku ho naučil držet štětec.", fr: "Son père peignait des pigeons et lui a appris à tenir les pinceaux quand il était tout petit." } },
    { emoji: "🚲",
      q: { es: "¿Con qué hizo Picasso su famosa escultura de una cabeza de toro?", ca: "Amb què va fer Picasso la seva famosa escultura d'un cap de toro?", en: "What did Picasso use to make his famous sculpture of a bull's head?", cs: "Z čeho vytvořil Picasso svou slavnou sochu býčí hlavy?", fr: "Avec quoi Picasso a-t-il fait sa célèbre sculpture de tête de taureau ?" },
      options: [
        { es: "Con chocolate", ca: "Amb xocolata", en: "With chocolate", cs: "Z čokolády", fr: "Avec du chocolat" },
        { es: "Con plumas", ca: "Amb plomes", en: "With feathers", cs: "Z peří", fr: "Avec des plumes" },
        { es: "Con arena de la playa", ca: "Amb sorra de la platja", en: "With beach sand", cs: "Z písku z pláže", fr: "Avec du sable de la plage" },
        { es: "Con un sillín y un manillar de bicicleta", ca: "Amb un seient i un manillar de bicicleta", en: "With a bicycle seat and handlebars", cs: "Ze sedla a řídítek jízdního kola", fr: "Avec une selle et un guidon de vélo" }],
      answer: 3,
      explanation: { es: "Juntó un sillín viejo y un manillar, y apareció un toro. Sabía ver arte en las cosas de cada día.", ca: "Va ajuntar un seient vell i un manillar, i va aparèixer un toro. Sabia veure art en les coses de cada dia.", en: "He joined an old bicycle seat and handlebars, and a bull appeared. He could see art in everyday things.", cs: "Spojil staré sedlo s řídítky a najednou tu byl býk. Uměl vidět umění v obyčejných věcech.", fr: "Il a assemblé une vieille selle et un guidon, et un taureau est apparu. Il voyait de l'art dans les objets de tous les jours." } },
    { emoji: "👸",
      q: { es: "Picasso pintó muchas veces, a su manera, un cuadro antiguo de Velázquez con una princesita. ¿Cuál?", ca: "Picasso va pintar moltes vegades, a la seva manera, un quadre antic de Velázquez amb una princeseta. Quin?", en: "Picasso painted his own versions of an old painting by Velázquez with a little princess. Which one?", cs: "Picasso mnohokrát po svém namaloval starý obraz od Velázqueze s malou princeznou. Který?", fr: "Picasso a repeint à sa façon un vieux tableau de Velázquez avec une petite princesse. Lequel ?" },
      options: [
        { es: "La Mona Lisa", ca: "La Mona Lisa", en: "The Mona Lisa", cs: "Monu Lisu", fr: "La Joconde" },
        { es: "El jardín mágico", ca: "El jardí màgic", en: "The Magic Garden", cs: "Kouzelnou zahradu", fr: "Le jardin magique" },
        { es: "Las Meninas", ca: "Las Meninas", en: "Las Meninas", cs: "Las Meninas", fr: "Les Ménines" },
        { es: "El dragón dormido", ca: "El drac adormit", en: "The Sleeping Dragon", cs: "Spícího draka", fr: "Le dragon endormi" }],
      answer: 2,
      explanation: { es: "Pintó toda una serie de 58 cuadros jugando con Las Meninas. Hoy se pueden ver en el museo Picasso de Barcelona.", ca: "Va pintar tota una sèrie de 58 quadres jugant amb Las Meninas. Avui es poden veure al museu Picasso de Barcelona.", en: "He painted a whole series of 58 pictures playing with Las Meninas. Today you can see them at the Picasso Museum in Barcelona.", cs: "Namaloval celou sérii 58 obrazů, ve kterých si hrál s Las Meninas. Dnes jsou k vidění v Picassově muzeu v Barceloně.", fr: "Il a peint toute une série de 58 tableaux en jouant avec Les Ménines. On peut les voir au musée Picasso de Barcelone." } },
    { emoji: "📜",
      q: { es: "¿Cómo era el nombre completo de Picasso?", ca: "Com era el nom complet de Picasso?", en: "What was Picasso's full name like?", cs: "Jaké bylo Picassovo celé jméno?", fr: "Comment était le nom complet de Picasso ?" },
      options: [
        { es: "Solo Pablo", ca: "Només Pablo", en: "Just Pablo", cs: "Jenom Pablo", fr: "Juste Pablo" },
        { es: "Larguísimo: ¡un montón de nombres!", ca: "Llarguíssim: un munt de noms!", en: "Super long: lots and lots of names!", cs: "Hrozně dlouhé: spousta jmen!", fr: "Très très long : plein de prénoms !" },
        { es: "Pablo Pintor", ca: "Pablo Pintor", en: "Pablo Painter", cs: "Pablo Malíř", fr: "Pablo Peintre" },
        { es: "Pablo de los Colores", ca: "Pablo dels Colors", en: "Pablo of the Colours", cs: "Pablo Barevný", fr: "Pablo des Couleurs" }],
      answer: 1,
      explanation: { es: "Le pusieron nombres de santos y de familiares: Pablo Diego José Francisco de Paula... ¡y todavía seguía!", ca: "Li van posar noms de sants i de familiars: Pablo Diego José Francisco de Paula... i encara continuava!", en: "He was given the names of saints and relatives: Pablo Diego José Francisco de Paula... and it kept on going!", cs: "Dostal jména po svatých a příbuzných: Pablo Diego José Francisco de Paula... a to zdaleka nebylo všechno!", fr: "On lui a donné des prénoms de saints et de proches : Pablo Diego José Francisco de Paula... et ce n'était pas fini !" } }
  ],

  /* ---------- ALFABETO: 26 letras ---------- */
  alphabet: [
    { letter: "A", emoji: "🎨", item: { es: "Azul", ca: "Amistat", en: "Art", cs: "Ateliér", fr: "Atelier" },
      fact: { es: "Cuando Picasso estaba triste lo pintaba todo azul. Fue su período azul.", ca: "L'amistat amb en Braque va canviar la pintura: junts van inventar el cubisme.", en: "Picasso made art out of everything: paint, paper, clay and even old junk.", cs: "Jeho ateliér byl plný obrazů, soch a barev od podlahy až ke stropu.", fr: "Son atelier débordait de tableaux, de pinceaux et de couleurs." } },
    { letter: "B", emoji: "🤝", item: { es: "Braque", ca: "Braque", en: "Braque", cs: "Braque", fr: "Braque" },
      fact: { es: "Georges Braque fue su gran compañero: juntos inventaron el cubismo.", ca: "Georges Braque va ser el seu gran company: junts van inventar el cubisme.", en: "Georges Braque was his great partner: together they invented Cubism.", cs: "Georges Braque byl jeho velký parťák: společně vymysleli kubismus.", fr: "Georges Braque était son grand compagnon : ensemble ils ont inventé le cubisme." } },
    { letter: "C", emoji: "🔷", item: { es: "Cubismo", ca: "Cubisme", en: "Cubism", cs: "Cirkus", fr: "Cubisme" },
      fact: { es: "Pintar las cosas como hechas de trocitos, mirándolas desde muchos lados a la vez.", ca: "Pintar les coses com fetes de trossets, mirant-les des de molts costats alhora.", en: "Painting things as if made of little pieces, seen from many sides at once.", cs: "Picasso rád maloval cirkus: akrobaty, koníky i harlekýny v růžových barvách.", fr: "Peindre les choses comme faites de petits morceaux, vues de plusieurs côtés à la fois." } },
    { letter: "D", emoji: "✏️", item: { es: "Dibujo", ca: "Dibuix", en: "Drawing", cs: "Dílo", fr: "Dessin" },
      fact: { es: "Dicen que su primera palabra fue 'piz', de lápiz. ¡Quería dibujar antes que hablar!", ca: "Diuen que la seva primera paraula va ser 'piz', de llapis. Volia dibuixar abans que parlar!", en: "They say his first word was 'piz', short for pencil in Spanish. He wanted to draw before he could talk!", cs: "Picasso vytvořil desítky tisíc děl: obrazy, sochy, keramiku i kresby.", fr: "On dit que son premier mot fut 'piz', pour crayon en espagnol. Il voulait dessiner avant de parler !" } },
    { letter: "E", emoji: "🐐", item: { es: "Esmeralda", ca: "Esmeralda", en: "Esmeralda", cs: "Esmeralda", fr: "Esmeralda" },
      fact: { es: "Esmeralda era la cabra que vivía en su casa. ¡También hizo una cabra de escultura!", ca: "L'Esmeralda era la cabra que vivia a casa seva. També va fer una cabra d'escultura!", en: "Esmeralda was the goat that lived at his house. He even made a goat sculpture!", cs: "Esmeralda byla koza, která bydlela u něj doma. Kozu si dokonce i vytvořil jako sochu!", fr: "Esmeralda était la chèvre qui vivait chez lui. Il a même fait une chèvre en sculpture !" } },
    { letter: "F", emoji: "💐", item: { es: "Flores", ca: "Flors", en: "Flowers", cs: "Fotografie", fr: "Fleurs" },
      fact: { es: "Pintó un ramo de flores entre dos manos: un regalo de paz para todo el mundo.", ca: "Va pintar un ram de flors entre dues mans: un regal de pau per a tothom.", en: "He painted a bunch of flowers held by two hands: a gift of peace for everyone.", cs: "Fotografka Dora Maar vyfotila krok za krokem, jak vznikal obří obraz Guernica.", fr: "Il a peint un bouquet de fleurs entre deux mains : un cadeau de paix pour tout le monde." } },
    { letter: "G", emoji: "🖼️", item: { es: "Guernica", ca: "Guernica", en: "Guernica", cs: "Guernica", fr: "Guernica" },
      fact: { es: "Su mural gigante en blanco y negro. Pide que nunca, nunca haya guerras.", ca: "El seu mural gegant en blanc i negre. Demana que mai, mai hi hagi guerres.", en: "His giant black and white mural. It asks for there to be no wars, ever.", cs: "Jeho obří černobílý obraz. Prosí, aby už nikdy nebyly války.", fr: "Sa toile géante en noir et blanc. Elle demande qu'il n'y ait jamais, jamais de guerres." } },
    { letter: "H", emoji: "🏡", item: { es: "Horta", ca: "Horta", en: "Horta", cs: "Horta", fr: "Horta" },
      fact: { es: "Un pueblo pequeñito donde vivió de joven. Decía: 'Todo lo que sé lo aprendí en Horta'.", ca: "Un poble petitó on va viure de jove. Deia: 'Tot el que sé ho vaig aprendre a Horta'.", en: "A tiny village where he lived as a young man. He said: 'Everything I know I learned in Horta'.", cs: "Malinká vesnice, kde žil jako mladík. Říkal: 'Všechno, co umím, jsem se naučil v Hortě'.", fr: "Un tout petit village où il a vécu jeune. Il disait : 'Tout ce que je sais, je l'ai appris à Horta'." } },
    { letter: "I", emoji: "💭", item: { es: "Imaginación", ca: "Imaginació", en: "Imagination", cs: "Inspirace", fr: "Imagination" },
      fact: { es: "Con imaginación, un sillín y un manillar de bici se convierten en cabeza de toro.", ca: "Amb imaginació, un selló i un manillar de bici es converteixen en cap de toro.", en: "With imagination, a bicycle seat and handlebars turn into a bull's head.", cs: "Inspiraci našel všude: v novinách, v hlíně i ve starém kole.", fr: "Avec de l'imagination, une selle et un guidon de vélo deviennent une tête de taureau." } },
    { letter: "J", emoji: "👩", item: { es: "Jacqueline", ca: "Jacqueline", en: "Jacqueline", cs: "Jacqueline", fr: "Jacqueline" },
      fact: { es: "La conoció en el taller de cerámica y la pintó cientos de veces.", ca: "La va conèixer al taller de ceràmica i la va pintar centenars de vegades.", en: "He met her at the pottery workshop and painted her hundreds of times.", cs: "Poznal ji v keramické dílně a namaloval ji stokrát a ještě víckrát.", fr: "Il l'a rencontrée à l'atelier de céramique et l'a peinte des centaines de fois." } },
    { letter: "K", emoji: "🧩", item: { es: "Kahnweiler", ca: "Kahnweiler", en: "Kahnweiler", cs: "Kahnweiler", fr: "Kahnweiler" },
      fact: { es: "Su amigo vendedor de cuadros. Su retrato cubista parece un rompecabezas.", ca: "El seu amic venedor de quadres. El seu retrat cubista sembla un trencaclosques.", en: "His friend who sold paintings. His cubist portrait looks like a jigsaw puzzle.", cs: "Jeho kamarád, který prodával obrazy. Jeho kubistický portrét vypadá jako skládačka.", fr: "Son ami qui vendait des tableaux. Son portrait cubiste ressemble à un puzzle." } },
    { letter: "L", emoji: "🐕", item: { es: "Lump", ca: "Lump", en: "Lump", cs: "Lump", fr: "Lump" },
      fact: { es: "El perro salchicha que se coló en su casa... ¡y en sus cuadros!", ca: "El gos salsitxa que es va colar a casa seva... i als seus quadres!", en: "The sausage dog that sneaked into his house... and into his paintings!", cs: "Jezevčík, který se mu vloudil do domu... a taky do obrazů!", fr: "Le chien saucisse qui s'est faufilé dans sa maison... et dans ses tableaux !" } },
    { letter: "M", emoji: "🌅", item: { es: "Málaga", ca: "Màlaga", en: "Málaga", cs: "Málaga", fr: "Malaga" },
      fact: { es: "La ciudad junto al mar donde nació en 1881.", ca: "La ciutat vora el mar on va néixer el 1881.", en: "The city by the sea where he was born in 1881.", cs: "Město u moře, kde se v roce 1881 narodil.", fr: "La ville au bord de la mer où il est né en 1881." } },
    { letter: "N", emoji: "📜", item: { es: "Nombre", ca: "Nom", en: "Name", cs: "Nápad", fr: "Nom" },
      fact: { es: "Su nombre completo tenía más de diez palabras. ¡Casi no cabía en la libreta!", ca: "El seu nom complet tenia més de deu paraules. Gairebé no cabia a la llibreta!", en: "His full name had more than ten words. It barely fit in a notebook!", cs: "Hlavu měl pořád plnou nápadů: co viděl, to chtěl hned namalovat.", fr: "Son nom complet avait plus de dix mots. Il tenait à peine dans un cahier !" } },
    { letter: "O", emoji: "👀", item: { es: "Ojos", ca: "Ocell", en: "One line", cs: "Oči", fr: "Oiseau" },
      fact: { es: "En sus retratos los dos ojos pueden ir en el mismo lado: cara entera y de perfil a la vez.", ca: "El seu ocell preferit era la coloma: el seu pare ja en pintava.", en: "He could draw a dog, a camel or a penguin with one single line.", cs: "Na jeho portrétech mohou být obě oči na stejné straně: tvář zepředu i z profilu najednou.", fr: "Son oiseau préféré était la colombe : son papa en peignait déjà." } },
    { letter: "P", emoji: "🕊️", item: { es: "Paloma", ca: "Paloma", en: "Paloma", cs: "Paloma", fr: "Paloma" },
      fact: { es: "Su paloma blanca es símbolo de paz. Y su hija se llama Paloma, como el ave.", ca: "La seva coloma blanca és símbol de pau. I la seva filla es diu Paloma, com l'ocell.", en: "His white dove is a symbol of peace. And his daughter is called Paloma, dove in Spanish.", cs: "Jeho bílá holubice je symbolem míru. A jeho dcera se jmenuje Paloma, tedy holubice.", fr: "Sa colombe blanche est un symbole de paix. Et sa fille s'appelle Paloma, colombe en espagnol." } },
    { letter: "Q", emoji: "🐴", item: { es: "Quijote", ca: "Quixot", en: "Quixote", cs: "Quijote", fr: "Quichotte" },
      fact: { es: "Dibujó a Don Quijote y a Sancho con unas pocas líneas de tinta.", ca: "Va dibuixar Don Quixot i Sanxo amb unes poques línies de tinta.", en: "He drew Don Quixote and Sancho with just a few ink lines.", cs: "Dona Quijota a Sancha nakreslil jen několika čarami tuší.", fr: "Il a dessiné Don Quichotte et Sancho avec quelques traits d'encre." } },
    { letter: "R", emoji: "🌸", item: { es: "Rosa", ca: "Rosa", en: "Rose period", cs: "Růžová", fr: "Rose" },
      fact: { es: "Después del azul llegó el rosa: circos, saltimbanquis y arlequines.", ca: "Després del blau va arribar el rosa: circs, saltimbanquis i arlequins.", en: "After blue came rose: circuses, acrobats and harlequins.", cs: "Po modré přišla růžová: cirkusy, akrobati a harlekýni.", fr: "Après le bleu est venu le rose : cirques, saltimbanques et arlequins." } },
    { letter: "S", emoji: "🤹", item: { es: "Saltimbanquis", ca: "Saltimbanquis", en: "Sculpture", cs: "Sova", fr: "Saltimbanques" },
      fact: { es: "Los acróbatas del circo que pintó en su período rosa.", ca: "Els acròbates del circ que va pintar al seu període rosa.", en: "He turned old junk into sculptures: even a toy car became a monkey's face.", cs: "Doma měl malou sovu. Sovy pak maloval na talíře a džbány.", fr: "Les acrobates du cirque qu'il a peints pendant sa période rose." } },
    { letter: "T", emoji: "🐂", item: { es: "Toro", ca: "Toro", en: "The Bull", cs: "Tužka", fr: "Taureau" },
      fact: { es: "Dibujó el toro una y otra vez, con menos líneas cada vez, hasta dejar lo esencial.", ca: "Va dibuixar el toro un cop i un altre, amb menys línies cada vegada, fins a deixar l'essencial.", en: "He drew the bull again and again, with fewer lines each time, keeping only what matters.", cs: "Tužkou uměl nakreslit býka i holubici skoro jedním tahem.", fr: "Il a dessiné le taureau encore et encore, avec moins de traits à chaque fois, pour garder l'essentiel." } },
    { letter: "U", emoji: "🦉", item: { es: "Ubú", ca: "Ubú", en: "Ubu", cs: "Ubu", fr: "Ubu" },
      fact: { es: "Un pequeño búho herido que curó y se quedó a vivir con él.", ca: "Un petit mussol ferit que va curar i es va quedar a viure amb ell.", en: "A little injured owl that he healed and that stayed to live with him.", cs: "Malá poraněná sova, kterou vyléčil a která u něj zůstala bydlet.", fr: "Un petit hibou blessé qu'il a soigné et qui est resté vivre avec lui." } },
    { letter: "V", emoji: "🏺", item: { es: "Vallauris", ca: "Vallauris", en: "Vallauris", cs: "Vallauris", fr: "Vallauris" },
      fact: { es: "El pueblo de los alfareros donde hizo platos, jarrones y palomas de barro.", ca: "El poble dels terrissaires on va fer plats, gerros i colomes de fang.", en: "The potters' village where he made clay plates, vases and doves.", cs: "Vesnice hrnčířů, kde vyráběl hliněné talíře, vázy a holubice.", fr: "Le village des potiers où il a fait des assiettes, des vases et des colombes en argile." } },
    { letter: "W", emoji: "🌴", item: { es: "Wifredo", ca: "Wifredo", en: "Wifredo", cs: "Wifredo", fr: "Wifredo" },
      fact: { es: "Wifredo Lam, su amigo pintor de Cuba. Picasso le ayudó a enseñar sus cuadros al mundo.", ca: "Wifredo Lam, el seu amic pintor de Cuba. Picasso el va ajudar a ensenyar els seus quadres al món.", en: "Wifredo Lam, his painter friend from Cuba. Picasso helped him show his paintings to the world.", cs: "Wifredo Lam, jeho kamarád malíř z Kuby. Picasso mu pomohl ukázat obrazy světu.", fr: "Wifredo Lam, son ami peintre de Cuba. Picasso l'a aidé à montrer ses tableaux au monde." } },
    { letter: "X", emoji: "🩻", item: { es: "Rayos X", ca: "Raigs X", en: "X-rays", cs: "Rentgen (X)", fr: "Rayons X" },
      fact: { es: "Con rayos X se descubrió otro cuadro escondido debajo de uno azul: reutilizaba los lienzos.", ca: "Amb raigs X es va descobrir un altre quadre amagat sota un de blau: reutilitzava les teles.", en: "X-rays revealed another painting hidden under a blue one: he reused his canvases.", cs: "Rentgen odhalil pod jedním modrým obrazem další schovaný obraz: plátna používal znovu.", fr: "Les rayons X ont révélé un autre tableau caché sous un tableau bleu : il réutilisait ses toiles." } },
    { letter: "Y", emoji: "🖋️", item: { es: "Yo Picasso", ca: "Yo Picasso", en: "Yo Picasso", cs: "Yo Picasso", fr: "Yo Picasso" },
      fact: { es: "De joven firmó un autorretrato 'Yo Picasso'. ¡Creía mucho en sí mismo!", ca: "De jove va signar un autoretrat 'Yo Picasso'. Creia molt en ell mateix!", en: "As a young man he signed a self-portrait 'Yo Picasso', I Picasso. He really believed in himself!", cs: "Jako mladík podepsal autoportrét 'Yo Picasso', tedy Já, Picasso. Hodně si věřil!", fr: "Jeune, il a signé un autoportrait 'Yo Picasso', Moi Picasso. Il croyait beaucoup en lui !" } },
    { letter: "Z", emoji: "🐧", item: { es: "Zoo de una línea", ca: "Zoo d'una línia", en: "Zoo of lines", cs: "Zvířata", fr: "Zoo d'un trait" },
      fact: { es: "Perro, camello, pingüino... dibujó un zoo entero sin levantar el lápiz del papel.", ca: "Gos, camell, pingüí... va dibuixar un zoo sencer sense aixecar el llapis del paper.", en: "Dog, camel, penguin... he drew a whole zoo without lifting the pencil from the paper.", cs: "Pes, velbloud, tučňák... nakreslil celou zoo, aniž zvedl tužku z papíru.", fr: "Chien, chameau, pingouin... il a dessiné tout un zoo sans lever le crayon du papier." } }
  ],

  /* ---------- FAMOSOS ---------- */
  famous: [
    { emoji: "🎨", year: "1881", color: "#1565c0", name: { es: "Pablo Picasso", ca: "Pablo Picasso", en: "Pablo Picasso", cs: "Pablo Picasso", fr: "Pablo Picasso" },
      achievement: { es: "Nació en Málaga y pintó durante casi cien años: cuadros, esculturas y cerámica.", ca: "Va néixer a Màlaga i va pintar durant gairebé cent anys: quadres, escultures i ceràmica.", en: "Born in Málaga, he made art for almost a hundred years: paintings, sculptures and pottery.", cs: "Narodil se v Málaze a tvořil skoro sto let: obrazy, sochy i keramiku.", fr: "Né à Malaga, il a créé pendant presque cent ans : tableaux, sculptures et céramique." },
      quote: { es: "A los doce años pintaba como un maestro y tardé toda la vida en aprender a pintar como un niño.", ca: "Als dotze anys pintava com un mestre i vaig trigar tota la vida a aprendre a pintar com un nen.", en: "At twelve I painted like a master, and it took me a lifetime to learn to paint like a child.", cs: "Ve dvanácti jsem maloval jako mistr a celý život mi trvalo naučit se malovat jako dítě.", fr: "À douze ans je peignais comme un maître, et il m'a fallu toute une vie pour apprendre à peindre comme un enfant." } },
    { emoji: "🔷", year: "1908", color: "#8d6e63", name: { es: "Georges Braque", ca: "Georges Braque", en: "Georges Braque", cs: "Georges Braque", fr: "Georges Braque" },
      achievement: { es: "El compañero con quien inventó el cubismo, cuadro a cuadro.", ca: "El company amb qui va inventar el cubisme, quadre a quadre.", en: "The partner with whom he invented Cubism, painting by painting.", cs: "Parťák, se kterým vymyslel kubismus, obraz po obrazu.", fr: "Le compagnon avec qui il a inventé le cubisme, tableau après tableau." },
      quote: { es: "Éramos como dos montañeros atados a la misma cuerda.", ca: "Érem com dos muntanyencs lligats a la mateixa corda.", en: "We were like two mountain climbers roped together.", cs: "Byli jsme jako dva horolezci na jednom laně.", fr: "Nous étions comme deux alpinistes encordés." } },
    { emoji: "📷", year: "1937", color: "#546e7a", name: { es: "Dora Maar", ca: "Dora Maar", en: "Dora Maar", cs: "Dora Maar", fr: "Dora Maar" },
      achievement: { es: "Fotógrafa y pintora: retrató paso a paso cómo nacía el Guernica.", ca: "Fotògrafa i pintora: va retratar pas a pas com naixia el Guernica.", en: "Photographer and painter: she photographed, step by step, how Guernica was born.", cs: "Fotografka a malířka: krok za krokem vyfotila, jak vznikala Guernica.", fr: "Photographe et peintre : elle a photographié, étape par étape, la naissance de Guernica." },
      quote: { es: "Una fotografía guarda un momento para siempre.", ca: "Una fotografia guarda un moment per sempre.", en: "A photograph keeps a moment forever.", cs: "Fotografie uchová okamžik navždy.", fr: "Une photographie garde un moment pour toujours." } },
    { emoji: "🖌️", year: "1946", color: "#43a047", name: { es: "Françoise Gilot", ca: "Françoise Gilot", en: "Françoise Gilot", cs: "Françoise Gilot", fr: "Françoise Gilot" },
      achievement: { es: "Pintora con camino propio y mamá de Claude y de Paloma.", ca: "Pintora amb camí propi i mare d'en Claude i de la Paloma.", en: "A painter with her own path, and mum of Claude and Paloma.", cs: "Malířka s vlastní cestou a maminka Clauda a Palomy.", fr: "Peintre avec son propre chemin, et maman de Claude et de Paloma." },
      quote: { es: "Pinto porque tengo cosas que contar.", ca: "Pinto perquè tinc coses per explicar.", en: "I paint because I have things to say.", cs: "Maluji, protože mám co vyprávět.", fr: "Je peins parce que j'ai des choses à dire." } },
    { emoji: "🏺", year: "1961", color: "#d81b60", name: { es: "Jacqueline Roque", ca: "Jacqueline Roque", en: "Jacqueline Roque", cs: "Jacqueline Roque", fr: "Jacqueline Roque" },
      achievement: { es: "Se conocieron en el taller de cerámica de Vallauris. Picasso la pintó más de cuatrocientas veces.", ca: "Es van conèixer al taller de ceràmica de Vallauris. Picasso la va pintar més de quatre-centes vegades.", en: "They met at the pottery workshop in Vallauris. Picasso painted her more than four hundred times.", cs: "Poznali se v keramické dílně ve Vallauris. Picasso ji namaloval víc než čtyřistakrát.", fr: "Ils se sont rencontrés à l'atelier de céramique de Vallauris. Picasso l'a peinte plus de quatre cents fois." },
      quote: { es: "En nuestra casa hasta los platos tenían caras sonrientes.", ca: "A casa nostra fins i tot els plats tenien cares somrients.", en: "In our house even the plates had smiling faces.", cs: "U nás doma měly usměvavé obličeje i talíře.", fr: "Chez nous, même les assiettes avaient des visages souriants." } }
  ],

  childDream: {
    girl: { es: "Pintora de mundos de colores", ca: "Pintora de mons de colors", en: "Painter of colourful worlds", cs: "Malířka barevných světů", fr: "Peintre de mondes en couleurs" },
    boy: { es: "Pintor de mundos de colores", ca: "Pintor de mons de colors", en: "Painter of colourful worlds", cs: "Malíř barevných světů", fr: "Peintre de mondes en couleurs" },
    kid: { es: "Pinta mundos de colores", ca: "Pinta mons de colors", en: "Paints colourful worlds", cs: "Maluje barevné světy", fr: "Peint des mondes en couleurs" }
  },
  childQuote: { es: "Cuando sea mayor pintaré el cielo entero. ¡Y os regalaré un cuadro a cada uno!", ca: "Quan sigui gran pintaré el cel sencer. I us regalaré un quadre a cadascú!", en: "When I grow up I will paint the whole sky. And I will give each of you a painting!", cs: "Až vyrostu, vymaluji celé nebe. A každému z vás daruji obraz!", fr: "Quand je serai grand, je peindrai le ciel tout entier. Et je vous offrirai un tableau à chacun !" },

  /* ---------- MATES ---------- */
  mathEmojis: ["🕊️", "🎨", "🔷", "🌸", "🎭", "🖌️"],

  /* ---------- CONSTRUCTOR: el retrato cubista ---------- */
  builder: {
    title: { es: "¡Crea tu retrato cubista!", ca: "Crea el teu retrat cubista!", en: "Create your cubist portrait!", cs: "Vytvoř si kubistický portrét!", fr: "Crée ton portrait cubiste !" },
    thing: { es: "retrato", ca: "retrat", en: "portrait", cs: "portrét", fr: "portrait" },
    parts: [
      { id: "periodo", label: { es: "Color del período", ca: "Color del període", en: "Period colour", cs: "Barva období", fr: "Couleur de la période" },
        options: [{ id: "azul", v: "#1e88e5" }, { id: "rosa", v: "#f06292" }, { id: "amarillo", v: "#fdd835" }, { id: "verde", v: "#66bb6a" }] },
      { id: "cara", label: { es: "La forma de la cara", ca: "La forma de la cara", en: "The face shape", cs: "Tvar obličeje", fr: "La forme du visage" },
        options: [{ id: "redonda", v: "redonda", icon: "⚪" }, { id: "cuadrada", v: "cuadrada", icon: "⬜" }, { id: "doscaras", v: "doscaras", icon: "🎭" }] },
      { id: "ojos", label: { es: "Los ojos", ca: "Els ulls", en: "The eyes", cs: "Oči", fr: "Les yeux" },
        options: [{ id: "mismolado", v: "mismolado", icon: "👀" }, { id: "arribabajo", v: "arribabajo", icon: "🙃" }, { id: "colores", v: "colores", icon: "🌈" }] },
      { id: "toque", label: { es: "El toque final", ca: "El toc final", en: "The final touch", cs: "Poslední dotek", fr: "La touche finale" },
        options: [{ id: "sombrero", v: "sombrero", icon: "🎩" }, { id: "flor", v: "flor", icon: "🌸" }, { id: "paloma", v: "paloma", icon: "🕊️" }] }
    ],
    svg(sel) {
      const c = sel.periodo || "#1e88e5";
      // la cara según la forma elegida
      let cara = "";
      if (sel.cara === "cuadrada") {
        cara = `<rect x="34" y="52" width="52" height="58" rx="9" fill="#ffe9c7" stroke="#fff" stroke-width="2"/>
          <path d="M60 52 L60 110" stroke="rgba(0,0,0,.14)" stroke-width="2"/>`;
      } else if (sel.cara === "doscaras") {
        cara = `<path d="M60 50 Q34 50 34 80 Q34 110 60 110 Z" fill="#ffe9c7" stroke="#fff" stroke-width="2"/>
          <path d="M60 50 Q86 50 86 80 Q86 110 60 110 Z" fill="${c}" opacity=".55" stroke="#fff" stroke-width="2"/>
          <path d="M60 50 L60 110" stroke="#fff" stroke-width="2"/>`;
      } else {
        cara = `<ellipse cx="60" cy="80" rx="27" ry="31" fill="#ffe9c7" stroke="#fff" stroke-width="2"/>
          <path d="M60 49 Q64 80 60 111" stroke="rgba(0,0,0,.12)" stroke-width="2" fill="none"/>`;
      }
      // los ojos bailones
      let ojos = "";
      if (sel.ojos === "arribabajo") {
        ojos = `<ellipse cx="47" cy="64" rx="7" ry="4.6" fill="#fff" stroke="#37474f" stroke-width="1.6"/><circle cx="47" cy="64" r="2.4" fill="#37474f"/>
          <circle cx="74" cy="92" r="5.4" fill="#fff" stroke="#37474f" stroke-width="1.6"/><circle cx="74" cy="92" r="2.4" fill="#37474f"/>`;
      } else if (sel.ojos === "colores") {
        ojos = `<ellipse cx="46" cy="72" rx="7" ry="4.8" fill="#fff" stroke="#37474f" stroke-width="1.6"/><circle cx="46" cy="72" r="2.8" fill="#1e88e5"/>
          <circle cx="74" cy="72" r="5.6" fill="#fff" stroke="#37474f" stroke-width="1.6"/><circle cx="74" cy="72" r="2.8" fill="#e53935"/>
          <path d="M68 63 Q74 59 80 63" stroke="#fdd835" stroke-width="2" fill="none" stroke-linecap="round"/>`;
      } else {
        ojos = `<ellipse cx="44" cy="66" rx="7" ry="4.6" fill="#fff" stroke="#37474f" stroke-width="1.6"/><circle cx="44" cy="66" r="2.4" fill="#37474f"/>
          <circle cx="52" cy="78" r="5.2" fill="#fff" stroke="#37474f" stroke-width="1.6"/><circle cx="52" cy="78" r="2.4" fill="#37474f"/>`;
      }
      // el toque final
      let toque = "";
      if (sel.toque === "sombrero") {
        toque = `<rect x="40" y="34" width="40" height="8" rx="3" fill="#37474f"/>
          <rect x="48" y="14" width="24" height="22" rx="4" fill="#37474f"/>
          <rect x="48" y="30" width="24" height="5" fill="${c}"/>`;
      } else if (sel.toque === "flor") {
        toque = `<g transform="translate(83 46)">
          <circle cx="0" cy="-7" r="4.6" fill="#f48fb1"/><circle cx="6.6" cy="-2" r="4.6" fill="#f48fb1"/><circle cx="4" cy="5.6" r="4.6" fill="#f48fb1"/>
          <circle cx="-4" cy="5.6" r="4.6" fill="#f48fb1"/><circle cx="-6.6" cy="-2" r="4.6" fill="#f48fb1"/>
          <circle cx="0" cy="0" r="3.6" fill="#fdd835"/></g>`;
      } else if (sel.toque === "paloma") {
        toque = `<g transform="translate(60 34)">
          <path d="M-2 0 Q-14 -8 -22 -4 Q-14 0 -8 4 Q-2 7 2 5 Z" fill="#fff" stroke="#b0bec5" stroke-width="1"/>
          <path d="M2 0 Q10 -10 18 -8 Q12 -2 8 3 Z" fill="#fff" stroke="#b0bec5" stroke-width="1"/>
          <circle cx="3" cy="-1" r="3.4" fill="#fff" stroke="#b0bec5" stroke-width="1"/>
          <path d="M6 -1.6 L10 -0.6 L6 0.6 Z" fill="#fb8c00"/><circle cx="3.2" cy="-1.8" r=".8" fill="#37474f"/></g>`;
      }
      return `<svg viewBox="0 0 120 150" width="176" height="220">
        <rect x="6" y="6" width="108" height="138" rx="6" fill="#a1887f" stroke="#8d6e63" stroke-width="3"/>
        <rect x="14" y="14" width="92" height="122" rx="3" fill="${c}" opacity=".8"/>
        <path d="M14 14 L44 14 L14 52 Z" fill="rgba(255,255,255,.22)"/>
        <path d="M106 136 L106 100 L72 136 Z" fill="rgba(0,0,0,.12)"/>
        ${cara}
        ${ojos}
        <path d="M60 78 L52 92 L61 92" fill="none" stroke="#37474f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M50 100 Q60 107 72 99" fill="none" stroke="#d84315" stroke-width="2.6" stroke-linecap="round"/>
        <circle cx="40" cy="90" r="3" fill="#f8bbd0" opacity=".85"/><circle cx="80" cy="86" r="3" fill="#f8bbd0" opacity=".85"/>
        ${toque}
        <path d="M92 128 q4 -6 8 0 q-4 2 -8 0" fill="#37474f" opacity=".55"/>
      </svg>`;
    }
  }
};
