"use strict";
/* ============================================================
   Contenido de EGIPTO (parte A): registro de la aventura,
   quiz, alfabeto, famosos, mates y constructor.
   ============================================================ */

THEMES.egipto = {
  emoji: "🐫", ready: true,
  grad: "linear-gradient(150deg,#b8860b,#e6a817)",
  name: { es: "Egipto", ca: "Egipte", en: "Egypt", cs: "Egypt", fr: "Égypte" }
};

THEMES.egipto.content = {

  statusPlace: { es: "Conectado desde lo alto de la Gran Pirámide", ca: "Connectat des de dalt de la Gran Piràmide", en: "Connected from the top of the Great Pyramid", cs: "Připojeno z vrcholu Velké pyramidy", fr: "Connecté depuis le sommet de la Grande Pyramide" },
  welcome: { es: "¡Rumbo al antiguo Egipto, {name}! Súbete al camello... ¡en marcha hacia las pirámides!", ca: "Rumb a l'antic Egipte, {name}! Puja al camell... en marxa cap a les piràmides!", en: "Off to ancient Egypt, {name}! Hop on the camel... on we go to the pyramids!", cs: "Vzhůru do starého Egypta, {name}! Naskoč na velblouda... a hurá k pyramidám!", fr: "En route pour l'Égypte ancienne, {name} ! Monte sur le chameau... direction les pyramides !" },

  /* ---------- QUIZ: 10 preguntas ---------- */
  quiz: [
    { emoji: "🔺",
      q: { es: "¿Qué forma tiene una pirámide?", ca: "Quina forma té una piràmide?", en: "What shape is a pyramid?", cs: "Jaký tvar má pyramida?", fr: "Quelle forme a une pyramide ?" },
      options: [
        { es: "Redonda", ca: "Rodona", en: "Round", cs: "Kulatý", fr: "Ronde" },
        { es: "De triángulo", ca: "De triangle", en: "Like a triangle", cs: "Jako trojúhelník", fr: "De triangle" },
        { es: "De corazón", ca: "De cor", en: "Like a heart", cs: "Jako srdíčko", fr: "De cœur" },
        { es: "De estrella", ca: "D'estrella", en: "Like a star", cs: "Jako hvězda", fr: "D'étoile" }],
      answer: 1,
      explanation: { es: "Sus lados son triángulos gigantes que se juntan en una punta que toca el cielo.", ca: "Els seus costats són triangles gegants que s'ajunten en una punta que toca el cel.", en: "Its sides are giant triangles that meet at a tip touching the sky.", cs: "Její stěny jsou obří trojúhelníky, které se nahoře spojují ve špičce sahající k nebi.", fr: "Ses côtés sont des triangles géants qui se rejoignent en une pointe qui touche le ciel." } },
    { emoji: "🐈",
      q: { es: "¿Qué animal era sagrado en el antiguo Egipto?", ca: "Quin animal era sagrat a l'antic Egipte?", en: "Which animal was sacred in ancient Egypt?", cs: "Které zvíře bylo ve starém Egyptě posvátné?", fr: "Quel animal était sacré dans l'Égypte ancienne ?" },
      options: [
        { es: "El gato", ca: "El gat", en: "The cat", cs: "Kočka", fr: "Le chat" },
        { es: "El pingüino", ca: "El pingüí", en: "The penguin", cs: "Tučňák", fr: "Le pingouin" },
        { es: "El oso", ca: "L'ós", en: "The bear", cs: "Medvěd", fr: "L'ours" },
        { es: "El canguro", ca: "El cangur", en: "The kangaroo", cs: "Klokan", fr: "Le kangourou" }],
      answer: 0,
      explanation: { es: "Los gatos eran tan queridos que las familias los cuidaban como a reyes chiquititos.", ca: "Els gats eren tan estimats que les famílies els cuidaven com a reis petitons.", en: "Cats were so loved that families looked after them like tiny kings.", cs: "Kočky byly tak milované, že se o ně rodiny staraly jako o malé krále.", fr: "Les chats étaient si aimés que les familles les soignaient comme de tout petits rois." } },
    { emoji: "🌊",
      q: { es: "¿Cómo se llama el gran río de Egipto?", ca: "Com es diu el gran riu d'Egipte?", en: "What is the great river of Egypt called?", cs: "Jak se jmenuje velká egyptská řeka?", fr: "Comment s'appelle le grand fleuve d'Égypte ?" },
      options: [
        { es: "El Amazonas", ca: "L'Amazones", en: "The Amazon", cs: "Amazonka", fr: "L'Amazone" },
        { es: "El Nilo", ca: "El Nil", en: "The Nile", cs: "Nil", fr: "Le Nil" },
        { es: "El Ebro", ca: "L'Ebre", en: "The Ebro", cs: "Vltava", fr: "La Seine" },
        { es: "El río de chocolate", ca: "El riu de xocolata", en: "The chocolate river", cs: "Čokoládová řeka", fr: "La rivière de chocolat" }],
      answer: 1,
      explanation: { es: "El Nilo es uno de los ríos más largos del mundo. Sin él, Egipto sería todo desierto.", ca: "El Nil és un dels rius més llargs del món. Sense ell, Egipte seria tot desert.", en: "The Nile is one of the longest rivers in the world. Without it, Egypt would be all desert.", cs: "Nil je jedna z nejdelších řek světa. Bez něj by byl Egypt samá poušť.", fr: "Le Nil est l'un des fleuves les plus longs du monde. Sans lui, l'Égypte serait tout désert." } },
    { emoji: "📜",
      q: { es: "¿Qué es un jeroglífico?", ca: "Què és un jeroglífic?", en: "What is a hieroglyph?", cs: "Co je hieroglyf?", fr: "Qu'est-ce qu'un hiéroglyphe ?" },
      options: [
        { es: "Un dibujo que sirve para escribir", ca: "Un dibuix que serveix per escriure", en: "A drawing used for writing", cs: "Obrázek, kterým se píše", fr: "Un dessin qui sert à écrire" },
        { es: "Un pastel egipcio", ca: "Un pastís egipci", en: "An Egyptian cake", cs: "Egyptský dort", fr: "Un gâteau égyptien" },
        { es: "Un baile antiguo", ca: "Un ball antic", en: "An old dance", cs: "Starodávný tanec", fr: "Une danse ancienne" },
        { es: "Un tipo de camello", ca: "Un tipus de camell", en: "A kind of camel", cs: "Druh velblouda", fr: "Une sorte de chameau" }],
      answer: 0,
      explanation: { es: "Los egipcios escribían con dibujitos: pájaros, ojos, olas... ¡Son dibujos que hablan!", ca: "Els egipcis escrivien amb dibuixets: ocells, ulls, ones... Són dibuixos que parlen!", en: "The Egyptians wrote with little drawings: birds, eyes, waves... They are drawings that talk!", cs: "Egypťané psali obrázky: ptáčky, oči, vlnky... Jsou to obrázky, které mluví!", fr: "Les Égyptiens écrivaient avec des petits dessins : oiseaux, yeux, vagues... Ce sont des dessins qui parlent !" } },
    { emoji: "👑",
      q: { es: "¿Cómo se llamaba el rey del antiguo Egipto?", ca: "Com es deia el rei de l'antic Egipte?", en: "What was the king of ancient Egypt called?", cs: "Jak se říkalo králi starého Egypta?", fr: "Comment s'appelait le roi de l'Égypte ancienne ?" },
      options: [
        { es: "El capitán", ca: "El capità", en: "The captain", cs: "Kapitán", fr: "Le capitaine" },
        { es: "El faraón", ca: "El faraó", en: "The pharaoh", cs: "Faraon", fr: "Le pharaon" },
        { es: "El caballero", ca: "El cavaller", en: "The knight", cs: "Rytíř", fr: "Le chevalier" },
        { es: "El pirata", ca: "El pirata", en: "The pirate", cs: "Pirát", fr: "Le pirate" }],
      answer: 1,
      explanation: { es: "El faraón mandaba en todo Egipto y llevaba coronas preciosas. ¡También hubo faraonas!", ca: "El faraó manava a tot Egipte i portava corones precioses. També hi va haver faraones!", en: "The pharaoh ruled all of Egypt and wore beautiful crowns. There were women pharaohs too!", cs: "Faraon vládl celému Egyptu a nosil nádherné koruny. A vládly i ženy!", fr: "Le pharaon commandait toute l'Égypte et portait de superbes couronnes. Il y a eu aussi des femmes pharaons !" } },
    { emoji: "🏜️",
      q: { es: "¿Qué hay alrededor de las pirámides?", ca: "Què hi ha al voltant de les piràmides?", en: "What is all around the pyramids?", cs: "Co je všude kolem pyramid?", fr: "Qu'y a-t-il tout autour des pyramides ?" },
      options: [
        { es: "Un bosque", ca: "Un bosc", en: "A forest", cs: "Les", fr: "Une forêt" },
        { es: "Nieve", ca: "Neu", en: "Snow", cs: "Sníh", fr: "De la neige" },
        { es: "Arena del desierto", ca: "Sorra del desert", en: "Desert sand", cs: "Pouštní písek", fr: "Du sable du désert" },
        { es: "El mar", ca: "El mar", en: "The sea", cs: "Moře", fr: "La mer" }],
      answer: 2,
      explanation: { es: "Las pirámides están en el desierto, rodeadas de arena dorada y dunas gigantes.", ca: "Les piràmides són al desert, envoltades de sorra daurada i dunes gegants.", en: "The pyramids stand in the desert, surrounded by golden sand and giant dunes.", cs: "Pyramidy stojí v poušti, obklopené zlatým pískem a obřími dunami.", fr: "Les pyramides sont dans le désert, entourées de sable doré et de dunes géantes." } },
    { emoji: "🐫",
      q: { es: "¿Qué animal cruza el desierto casi sin beber?", ca: "Quin animal creua el desert gairebé sense beure?", en: "Which animal crosses the desert almost without drinking?", cs: "Které zvíře přejde poušť skoro bez pití?", fr: "Quel animal traverse le désert presque sans boire ?" },
      options: [
        { es: "El camello", ca: "El camell", en: "The camel", cs: "Velbloud", fr: "Le chameau" },
        { es: "El pez", ca: "El peix", en: "The fish", cs: "Ryba", fr: "Le poisson" },
        { es: "La rana", ca: "La granota", en: "The frog", cs: "Žába", fr: "La grenouille" },
        { es: "El delfín", ca: "El dofí", en: "The dolphin", cs: "Delfín", fr: "Le dauphin" }],
      answer: 0,
      explanation: { es: "El camello aguanta días sin beber. Sus jorobas guardan reservas, ¡como una mochila de energía!", ca: "El camell aguanta dies sense beure. Els seus geps guarden reserves, com una motxilla d'energia!", en: "A camel can go for days without drinking. Its humps store reserves, like an energy backpack!", cs: "Velbloud vydrží celé dny bez pití. V hrbech má zásoby, jako batoh plný energie!", fr: "Le chameau tient des jours sans boire. Ses bosses gardent des réserves, comme un sac à dos d'énergie !" } },
    { emoji: "😴",
      q: { es: "¿Qué es una momia?", ca: "Què és una mòmia?", en: "What is a mummy?", cs: "Co je mumie?", fr: "Qu'est-ce qu'une momie ?" },
      options: [
        { es: "Un pastel de arena", ca: "Un pastís de sorra", en: "A sand cake", cs: "Dort z písku", fr: "Un gâteau de sable" },
        { es: "Un faraón envuelto en vendas, dormidito", ca: "Un faraó embolicat amb benes, dormidet", en: "A pharaoh wrapped in bandages, fast asleep", cs: "Faraon zabalený do obvazů, sladce spící", fr: "Un pharaon enveloppé de bandelettes, tout endormi" },
        { es: "Un tipo de palmera", ca: "Un tipus de palmera", en: "A kind of palm tree", cs: "Druh palmy", fr: "Une sorte de palmier" },
        { es: "Una nube del desierto", ca: "Un núvol del desert", en: "A desert cloud", cs: "Pouštní mrak", fr: "Un nuage du désert" }],
      answer: 1,
      explanation: { es: "Los egipcios envolvían a sus faraones con vendas suaves para que durmieran calentitos miles de años.", ca: "Els egipcis embolicaven els seus faraons amb benes suaus perquè dormissin calentons milers d'anys.", en: "The Egyptians wrapped their pharaohs in soft bandages so they could sleep cosily for thousands of years.", cs: "Egypťané balili své faraony do měkkých obvazů, aby jim bylo teploučko a spali tisíce let.", fr: "Les Égyptiens enveloppaient leurs pharaons de bandelettes douces pour qu'ils dorment bien au chaud pendant des milliers d'années." } },
    { emoji: "🚣",
      q: { es: "¿Con qué planta hacían barcas y papel los egipcios?", ca: "Amb quina planta feien barques i paper els egipcis?", en: "Which plant did the Egyptians use for boats and paper?", cs: "Z jaké rostliny dělali Egypťané loďky a papír?", fr: "Avec quelle plante les Égyptiens faisaient-ils des barques et du papier ?" },
      options: [
        { es: "El papiro", ca: "El papir", en: "Papyrus", cs: "Papyrus", fr: "Le papyrus" },
        { es: "El cactus", ca: "El cactus", en: "The cactus", cs: "Kaktus", fr: "Le cactus" },
        { es: "La zanahoria", ca: "La pastanaga", en: "The carrot", cs: "Mrkev", fr: "La carotte" },
        { es: "El girasol", ca: "El gira-sol", en: "The sunflower", cs: "Slunečnice", fr: "Le tournesol" }],
      answer: 0,
      explanation: { es: "El papiro crece junto al Nilo. Con él hacían barcas, papel y hasta sandalias.", ca: "El papir creix vora el Nil. Amb ell feien barques, paper i fins i tot sandàlies.", en: "Papyrus grows beside the Nile. They made boats, paper and even sandals with it.", cs: "Papyrus roste u Nilu. Vyráběli z něj loďky, papír a dokonce i sandály.", fr: "Le papyrus pousse au bord du Nil. Ils en faisaient des barques, du papier et même des sandales." } },
    { emoji: "🦁",
      q: { es: "¿Qué es la esfinge?", ca: "Què és l'esfinx?", en: "What is the sphinx?", cs: "Co je sfinga?", fr: "Qu'est-ce que le sphinx ?" },
      options: [
        { es: "Una estatua con cuerpo de león y cabeza de persona", ca: "Una estàtua amb cos de lleó i cap de persona", en: "A statue with a lion's body and a person's head", cs: "Socha s tělem lva a hlavou člověka", fr: "Une statue au corps de lion et à tête de personne" },
        { es: "Una fruta del desierto", ca: "Una fruita del desert", en: "A desert fruit", cs: "Pouštní ovoce", fr: "Un fruit du désert" },
        { es: "Una canción egipcia", ca: "Una cançó egípcia", en: "An Egyptian song", cs: "Egyptská písnička", fr: "Une chanson égyptienne" },
        { es: "Un barco del Nilo", ca: "Un vaixell del Nil", en: "A Nile boat", cs: "Loď na Nilu", fr: "Un bateau du Nil" }],
      answer: 0,
      explanation: { es: "La esfinge es gigante y lleva miles de años vigilando las pirámides sin pestañear.", ca: "L'esfinx és gegant i porta milers d'anys vigilant les piràmides sense parpellejar.", en: "The sphinx is gigantic and has been guarding the pyramids for thousands of years without blinking.", cs: "Sfinga je obrovská a už tisíce let hlídá pyramidy, aniž by mrkla.", fr: "Le sphinx est géant et garde les pyramides depuis des milliers d'années sans cligner des yeux." } },
    { emoji: "🧱",
      q: { es: "¿De qué están hechas las pirámides?", ca: "De què estan fetes les piràmides?", en: "What are the pyramids made of?", cs: "Z čeho jsou postavené pyramidy?", fr: "En quoi sont faites les pyramides ?" },
      options: [
        { es: "De chocolate", ca: "De xocolata", en: "Of chocolate", cs: "Z čokolády", fr: "En chocolat" },
        { es: "De cartón", ca: "De cartró", en: "Of cardboard", cs: "Z kartonu", fr: "En carton" },
        { es: "De grandes bloques de piedra", ca: "De grans blocs de pedra", en: "Of big stone blocks", cs: "Z velkých kamenných bloků", fr: "En gros blocs de pierre" },
        { es: "De hielo", ca: "De gel", en: "Of ice", cs: "Z ledu", fr: "En glace" }],
      answer: 2,
      explanation: { es: "La Gran Pirámide tiene más de dos millones de bloques de piedra. ¡Cada uno pesa como un elefante!", ca: "La Gran Piràmide té més de dos milions de blocs de pedra. Cada un pesa com un elefant!", en: "The Great Pyramid has more than two million stone blocks. Each one weighs as much as an elephant!", cs: "Velká pyramida má přes dva miliony kamenných bloků. Každý váží jako slon!", fr: "La Grande Pyramide a plus de deux millions de blocs de pierre. Chacun pèse comme un éléphant !" } },
    { emoji: "💎",
      q: { es: "¿Qué escondían las pirámides en su interior?", ca: "Què amagaven les piràmides a dins?", en: "What did the pyramids hide inside?", cs: "Co skrývaly pyramidy uvnitř?", fr: "Que cachaient les pyramides à l'intérieur ?" },
      options: [
        { es: "Un supermercado", ca: "Un supermercat", en: "A supermarket", cs: "Supermarket", fr: "Un supermarché" },
        { es: "Una piscina", ca: "Una piscina", en: "A swimming pool", cs: "Bazén", fr: "Une piscine" },
        { es: "Un garaje", ca: "Un garatge", en: "A garage", cs: "Garáž", fr: "Un garage" },
        { es: "La tumba del faraón y sus tesoros", ca: "La tomba del faraó i els seus tresors", en: "The pharaoh's tomb and treasures", cs: "Faraonovu hrobku a poklady", fr: "La tombe du pharaon et ses trésors" }],
      answer: 3,
      explanation: { es: "Las pirámides eran casas para siempre: dentro dormía el faraón rodeado de sus tesoros más bonitos.", ca: "Les piràmides eren cases per sempre: a dins hi dormia el faraó envoltat dels seus tresors més bonics.", en: "Pyramids were forever homes: inside slept the pharaoh, surrounded by his most beautiful treasures.", cs: "Pyramidy byly domy navždy: uvnitř spal faraon obklopený svými nejkrásnějšími poklady.", fr: "Les pyramides étaient des maisons pour toujours : à l'intérieur dormait le pharaon, entouré de ses plus beaux trésors." } },
    { emoji: "☀️",
      q: { es: "¿Qué dios egipcio viajaba con el sol por el cielo?", ca: "Quin déu egipci viatjava amb el sol pel cel?", en: "Which Egyptian god travelled across the sky with the sun?", cs: "Který egyptský bůh cestoval se sluncem po obloze?", fr: "Quel dieu égyptien voyageait avec le soleil dans le ciel ?" },
      options: [
        { es: "Ra", ca: "Ra", en: "Ra", cs: "Ra", fr: "Rê" },
        { es: "Anubis", ca: "Anubis", en: "Anubis", cs: "Anubis", fr: "Anubis" },
        { es: "Horus", ca: "Horus", en: "Horus", cs: "Hór", fr: "Horus" },
        { es: "Sobek", ca: "Sobek", en: "Sobek", cs: "Sobek", fr: "Sobek" }],
      answer: 0,
      explanation: { es: "Los egipcios creían que Ra cruzaba el cielo cada día en una barca dorada, del amanecer al atardecer.", ca: "Els egipcis creien que Ra creuava el cel cada dia amb una barca daurada, de l'alba al capvespre.", en: "The Egyptians believed Ra crossed the sky every day in a golden boat, from sunrise to sunset.", cs: "Egypťané věřili, že Ra pluje po obloze každý den ve zlaté bárce, od svítání do soumraku.", fr: "Les Égyptiens croyaient que Rê traversait le ciel chaque jour dans une barque dorée, du lever au coucher du soleil." } },
    { emoji: "🪨",
      q: { es: "¿Cómo movían los egipcios los bloques gigantes de piedra?", ca: "Com movien els egipcis els blocs gegants de pedra?", en: "How did the Egyptians move the giant stone blocks?", cs: "Jak Egypťané přesouvali obří kamenné bloky?", fr: "Comment les Égyptiens déplaçaient-ils les blocs de pierre géants ?" },
      options: [
        { es: "Con camiones", ca: "Amb camions", en: "With trucks", cs: "Náklaďáky", fr: "Avec des camions" },
        { es: "Arrastrándolos sobre trineos de madera", ca: "Arrossegant-los sobre trineus de fusta", en: "Dragging them on wooden sledges", cs: "Táhli je na dřevěných saních", fr: "En les tirant sur des traîneaux en bois" },
        { es: "Volando en globo", ca: "Volant amb globus", en: "Flying them on balloons", cs: "Létali s balonem", fr: "En volant en ballon" },
        { es: "Lanzándolos muy fuerte", ca: "Llançant-los molt fort", en: "Throwing them really hard", cs: "Házeli je hodně daleko", fr: "En les lançant très fort" }],
      answer: 1,
      explanation: { es: "Muchas personas tiraban juntas de trineos de madera y mojaban la arena para que resbalara mejor.", ca: "Moltes persones estiraven juntes trineus de fusta i mullaven la sorra perquè rellisqués millor.", en: "Many people pulled wooden sledges together and wet the sand so they would slide better.", cs: "Spousta lidí táhla dřevěné saně společně a písek polévali vodou, aby saně lépe klouzaly.", fr: "Beaucoup de personnes tiraient ensemble des traîneaux en bois et mouillaient le sable pour mieux glisser." } },
    { emoji: "🎲",
      q: { es: "¿A qué juego de mesa jugaban los niños y los faraones en Egipto?", ca: "A quin joc de taula jugaven els nens i els faraons a Egipte?", en: "Which board game did children and pharaohs play in Egypt?", cs: "Jakou deskovou hru hráli v Egyptě děti i faraoni?", fr: "À quel jeu de plateau jouaient les enfants et les pharaons en Égypte ?" },
      options: [
        { es: "El ajedrez", ca: "Els escacs", en: "Chess", cs: "Šachy", fr: "Aux échecs" },
        { es: "El parchís", ca: "El parxís", en: "Ludo", cs: "Člověče, nezlob se", fr: "Aux petits chevaux" },
        { es: "El senet", ca: "El senet", en: "Senet", cs: "Senet", fr: "Au senet" },
        { es: "El dominó", ca: "El dòmino", en: "Dominoes", cs: "Domino", fr: "Aux dominos" }],
      answer: 2,
      explanation: { es: "El senet tiene más de 4000 años y en la tumba de Tutankamón encontraron varios tableros para jugar.", ca: "El senet té més de 4000 anys i a la tomba de Tutankamon hi van trobar taulers per jugar.", en: "Senet is over 4,000 years old, and boards for playing were found in Tutankhamun's tomb.", cs: "Senet je starý přes 4000 let a v Tutanchamonově hrobce se našly hrací desky.", fr: "Le senet a plus de 4 000 ans et on a trouvé des plateaux de jeu dans la tombe de Toutânkhamon." } }
  ],

  /* ---------- ALFABETO: 26 letras ---------- */
  alphabet: [
    { letter: "A", emoji: "🐕", item: { es: "Anubis", ca: "Anubis", en: "Anubis", cs: "Anubis", fr: "Anubis" },
      fact: { es: "Anubis es el perrito guardián de Egipto: cuida los sueños de las momias.", ca: "Anubis és el gosset guardià d'Egipte: cuida els somnis de les mòmies.", en: "Anubis is the guardian doggy of Egypt: he watches over the mummies' dreams.", cs: "Anubis je hlídací pejsek Egypta: hlídá sny mumií.", fr: "Anubis est le petit chien gardien de l'Égypte : il veille sur les rêves des momies." } },
    { letter: "B", emoji: "⛵", item: { es: "Barca", ca: "Barca", en: "Boat", cs: "Bárka", fr: "Barque" },
      fact: { es: "Los egipcios viajaban por el Nilo en barcas hechas de papiro.", ca: "Els egipcis viatjaven pel Nil amb barques fetes de papir.", en: "The Egyptians travelled along the Nile in boats made of papyrus.", cs: "Egypťané pluli po Nilu na bárkách z papyru.", fr: "Les Égyptiens voyageaient sur le Nil dans des barques en papyrus." } },
    { letter: "C", emoji: "👸", item: { es: "Cleopatra", ca: "Cleòpatra", en: "Cleopatra", cs: "Kleopatra (C)", fr: "Cléopâtre" },
      fact: { es: "Cleopatra fue una reina famosísima que hablaba un montón de idiomas.", ca: "Cleòpatra va ser una reina famosíssima que parlava un munt d'idiomes.", en: "Cleopatra was a super famous queen who spoke lots of languages.", cs: "Kleopatra byla přeslavná královna, která mluvila spoustou jazyků.", fr: "Cléopâtre était une reine très célèbre qui parlait plein de langues." } },
    { letter: "D", emoji: "🏜️", item: { es: "Desierto", ca: "Desert", en: "Desert", cs: "Duny", fr: "Désert" },
      fact: { es: "El desierto de Egipto es un mar de arena dorada con dunas gigantes.", ca: "El desert d'Egipte és un mar de sorra daurada amb dunes gegants.", en: "The Egyptian desert is a sea of golden sand with giant dunes.", cs: "Duny jsou písečné kopce, které vítr pomalu přesouvá po poušti.", fr: "Le désert d'Égypte est une mer de sable doré avec des dunes géantes." } },
    { letter: "E", emoji: "🦁", em: { en: "🔺", cs: "🔺", fr: "🔺" }, item: { es: "Esfinge", ca: "Esfinx", en: "Egypt", cs: "Egypt", fr: "Égypte" },
      fact: { es: "La esfinge tiene cuerpo de león y lleva milenios vigilando las pirámides.", ca: "L'esfinx té cos de lleó i porta mil·lennis vigilant les piràmides.", en: "Egypt is the land of the Nile, where the pyramids have stood for millennia.", cs: "Egypt je země u Nilu, kde už tisíce let stojí pyramidy.", fr: "L'Égypte est le pays du Nil, où les pyramides veillent depuis des millénaires." } },
    { letter: "F", emoji: "👑", item: { es: "Faraón", ca: "Faraó", en: "Pharaoh (F)", cs: "Faraon", fr: "Pharaon (F)" },
      fact: { es: "El faraón era el rey de Egipto. Algunas faraonas también mandaron un montón.", ca: "El faraó era el rei d'Egipte. Algunes faraones també van manar un munt.", en: "The pharaoh was the king of Egypt. Some women pharaohs ruled too!", cs: "Faraon byl král Egypta. A vládly také faraonky!", fr: "Le pharaon était le roi d'Égypte. Des femmes pharaons ont aussi régné !" } },
    { letter: "G", emoji: "🐈", item: { es: "Gato", ca: "Gat", en: "Giza", cs: "Gíza", fr: "Gizeh" },
      fact: { es: "Los gatos eran sagrados en Egipto: los cuidaban como a pequeños reyes.", ca: "Els gats eren sagrats a Egipte: els cuidaven com a petits reis.", en: "Giza is the place where the three great pyramids and the sphinx stand.", cs: "Gíza je místo, kde stojí tři velké pyramidy a sfinga.", fr: "Gizeh est l'endroit où se dressent les trois grandes pyramides et le sphinx." } },
    { letter: "H", emoji: "👁️", item: { es: "Horus", ca: "Horus", en: "Horus", cs: "Hór", fr: "Horus" },
      fact: { es: "Horus es el dios halcón. Su ojo era un amuleto que protegía a los niños.", ca: "Horus és el déu falcó. El seu ull era un amulet que protegia els nens.", en: "Horus is the falcon god. His eye was an amulet that protected children.", cs: "Hór je bůh se sokolí hlavou. Jeho oko byl amulet, který chránil děti.", fr: "Horus est le dieu faucon. Son œil était une amulette qui protégeait les enfants." } },
    { letter: "I", emoji: "🐦", item: { es: "Ibis", ca: "Ibis", en: "Ibis", cs: "Ibis", fr: "Ibis" },
      fact: { es: "El ibis es un pájaro elegante de pico curvado que pasea por la orilla del Nilo.", ca: "L'ibis és un ocell elegant de bec corbat que passeja per la vora del Nil.", en: "The ibis is an elegant bird with a curved beak that struts along the Nile.", cs: "Ibis je elegantní pták se zahnutým zobákem, který se prochází po břehu Nilu.", fr: "L'ibis est un oiseau élégant au bec courbé qui se promène au bord du Nil." } },
    { letter: "J", emoji: "📜", item: { es: "Jeroglífico", ca: "Jeroglífic", en: "Jackal", cs: "Jehla Kleopatry", fr: "Jeux du pharaon" },
      fact: { es: "Los jeroglíficos son dibujos que hablan: así escribían los egipcios.", ca: "Els jeroglífics són dibuixos que parlen: així escrivien els egipcis.", en: "The jackal is Anubis's animal: a desert doggy with big pointy ears.", cs: "Jehla Kleopatry je vysoký kamenný sloup, kterému se říká obelisk.", fr: "Les enfants d'Égypte jouaient au senet, un jeu de plateau très ancien." } },
    { letter: "K", emoji: "🧱", item: { es: "Keops", ca: "Kheops", en: "Khufu", cs: "Kočka", fr: "Khéops" },
      fact: { es: "Keops fue el faraón de la Gran Pirámide, la más grande de todas.", ca: "Kheops va ser el faraó de la Gran Piràmide, la més gran de totes.", en: "Khufu was the pharaoh of the Great Pyramid, the biggest one of all.", cs: "Kočky byly v Egyptě posvátné: hlídaly obilí a všichni je hýčkali.", fr: "Khéops était le pharaon de la Grande Pyramide, la plus grande de toutes." } },
    { letter: "L", emoji: "🌸", item: { es: "Loto", ca: "Lotus", en: "Lotus", cs: "Lotos", fr: "Lotus" },
      fact: { es: "La flor de loto crece en el Nilo y se abre cada mañana con el sol.", ca: "La flor de lotus creix al Nil i s'obre cada matí amb el sol.", en: "The lotus flower grows in the Nile and opens every morning with the sun.", cs: "Lotos roste v Nilu a každé ráno se otevírá se sluncem.", fr: "La fleur de lotus pousse dans le Nil et s'ouvre chaque matin avec le soleil." } },
    { letter: "M", emoji: "😴", item: { es: "Momia", ca: "Mòmia", en: "Mummy", cs: "Mumie", fr: "Momie" },
      fact: { es: "Las momias son dormilonas: llevan miles de años durmiendo la siesta envueltas en vendas suaves.", ca: "Les mòmies són dormilegues: porten milers d'anys fent la migdiada embolicades amb benes suaus.", en: "Mummies are sleepyheads: they have been napping for thousands of years wrapped in soft bandages.", cs: "Mumie jsou spáči: už tisíce let podřimují zabalené v měkkých obvazech.", fr: "Les momies sont de grosses dormeuses : elles font la sieste depuis des milliers d'années, enveloppées de bandelettes douces." } },
    { letter: "N", emoji: "🌊", item: { es: "Nilo", ca: "Nil", en: "Nile", cs: "Nil", fr: "Nil" },
      fact: { es: "El Nilo regaba los campos y daba de comer a todo Egipto. ¡Es larguísimo!", ca: "El Nil regava els camps i donava menjar a tot Egipte. És llarguíssim!", en: "The Nile watered the fields and fed all of Egypt. It is super long!", cs: "Nil zavlažoval pole a živil celý Egypt. Je hrozně dlouhý!", fr: "Le Nil arrosait les champs et nourrissait toute l'Égypte. Il est très très long !" } },
    { letter: "O", emoji: "🌴", item: { es: "Oasis", ca: "Oasi", en: "Oasis", cs: "Oáza", fr: "Oasis" },
      fact: { es: "Un oasis es una islita verde en el desierto, con palmeras y agua fresquita.", ca: "Un oasi és una illeta verda al desert, amb palmeres i aigua fresqueta.", en: "An oasis is a little green island in the desert, with palm trees and cool water.", cs: "Oáza je zelený ostrůvek v poušti s palmami a chladivou vodou.", fr: "Une oasis est une petite île verte dans le désert, avec des palmiers et de l'eau bien fraîche." } },
    { letter: "P", emoji: "🔺", item: { es: "Pirámide", ca: "Piràmide", en: "Pyramid", cs: "Pyramida", fr: "Pyramide" },
      fact: { es: "La Gran Pirámide tiene 4500 años y fue el edificio más alto del mundo durante muchísimo tiempo.", ca: "La Gran Piràmide té 4500 anys i va ser l'edifici més alt del món durant moltíssim temps.", en: "The Great Pyramid is 4,500 years old and was the tallest building in the world for ages.", cs: "Velká pyramida je stará 4500 let a dlouho byla nejvyšší stavbou světa.", fr: "La Grande Pyramide a 4 500 ans et a longtemps été le plus haut bâtiment du monde." } },
    { letter: "Q", emoji: "🔺", item: { es: "Quéops (Q)", ca: "Quèops (Q)", en: "Queen (Q)", cs: "Quéops (Q)", fr: "Quéops (Q)" },
      fact: { es: "Quéops es otra manera de escribir Keops. ¡Su pirámide tiene más de dos millones de bloques!", ca: "Quèops és una altra manera d'escriure Kheops. La seva piràmide té més de dos milions de blocs!", en: "Egypt had mighty queens: Cleopatra and Hatshepsut ruled like kings!", cs: "Quéops je jiný způsob, jak psát jméno faraona Cheopse, pána Velké pyramidy.", fr: "Quéops est une autre façon d'écrire Khéops. Sa pyramide a plus de deux millions de blocs !" } },
    { letter: "R", emoji: "💪", item: { es: "Ramsés", ca: "Ramsès", en: "Ramses", cs: "Ramesse", fr: "Ramsès" },
      fact: { es: "Ramsés II fue faraón durante 66 años y llenó Egipto de templos y estatuas gigantes.", ca: "Ramsès II va ser faraó durant 66 anys i va omplir Egipte de temples i estàtues gegants.", en: "Ramses II was pharaoh for 66 years and filled Egypt with temples and giant statues.", cs: "Ramesse II. byl faraonem 66 let a zaplnil Egypt chrámy a obřími sochami.", fr: "Ramsès II a été pharaon pendant 66 ans et a rempli l'Égypte de temples et de statues géantes." } },
    { letter: "S", emoji: "🛏️", item: { es: "Sarcófago", ca: "Sarcòfag", en: "Sarcophagus", cs: "Sarkofág", fr: "Sarcophage" },
      fact: { es: "El sarcófago es la camita dorada con tapa donde la momia duerme tan a gusto.", ca: "El sarcòfag és el llitet daurat amb tapa on la mòmia dorm tan a gust.", en: "The sarcophagus is the golden little bed with a lid where the mummy sleeps so cosily.", cs: "Sarkofág je zlatá postýlka s víkem, ve které mumie sladce spinká.", fr: "Le sarcophage est le petit lit doré avec couvercle où la momie dort si bien." } },
    { letter: "T", emoji: "👦", item: { es: "Tutankamón", ca: "Tutankamon", en: "Tutankhamun", cs: "Tutanchamon", fr: "Toutânkhamon" },
      fact: { es: "Tutankamón fue faraón con solo 9 años. ¡Un niño gobernando todo Egipto!", ca: "Tutankamon va ser faraó amb només 9 anys. Un nen governant tot Egipte!", en: "Tutankhamun became pharaoh at only 9 years old. A kid ruling all of Egypt!", cs: "Tutanchamon se stal faraonem už v 9 letech. Dítě vládlo celému Egyptu!", fr: "Toutânkhamon est devenu pharaon à seulement 9 ans. Un enfant qui gouvernait toute l'Égypte !" } },
    { letter: "U", emoji: "🐍", item: { es: "Ureo", ca: "Ureu", en: "Uraeus", cs: "Ureus", fr: "Uraeus" },
      fact: { es: "El ureo es la serpiente dorada que el faraón llevaba en la frente para protegerse.", ca: "L'ureu és la serp daurada que el faraó portava al front per protegir-se.", en: "The uraeus is the golden snake the pharaoh wore on his forehead for protection.", cs: "Ureus je zlatý had, kterého nosil faraon na čele pro ochranu.", fr: "L'uraeus est le serpent doré que le pharaon portait sur le front pour se protéger." } },
    { letter: "V", emoji: "⛰️", item: { es: "Valle de los Reyes", ca: "Vall dels Reis", en: "Valley of the Kings", cs: "Velbloud", fr: "Vallée des Rois" },
      fact: { es: "En el Valle de los Reyes los faraones dormían escondidos. ¡Allí encontraron a Tutankamón!", ca: "A la Vall dels Reis els faraons dormien amagats. Allà van trobar Tutankamon!", en: "In the Valley of the Kings the pharaohs slept in hidden tombs. Tutankhamun was found there!", cs: "Velbloud je loď pouště: nosí lidi i náklad přes písek a skoro nemusí pít.", fr: "Dans la Vallée des Rois, les pharaons dormaient bien cachés. C'est là qu'on a trouvé Toutânkhamon !" } },
    { letter: "W", emoji: "😲", item: { es: "Wow (¡una pirámide!)", ca: "Wow (una piràmide!)", en: "Wow (a pyramid!)", cs: "Wow (pyramida!)", fr: "Waouh (une pyramide !)" },
      fact: { es: "Wow es lo que dice todo el mundo al ver la Gran Pirámide por primera vez.", ca: "Wow és el que diu tothom en veure la Gran Piràmide per primera vegada.", en: "Wow is what everyone says when they see the Great Pyramid for the first time.", cs: "Wow říká každý, kdo poprvé uvidí Velkou pyramidu.", fr: "Waouh, c'est ce que dit tout le monde en voyant la Grande Pyramide pour la première fois." } },
    { letter: "X", emoji: "🩻", item: { es: "Rayos X", ca: "Raigs X", en: "X-rays", cs: "Rentgenové paprsky (X)", fr: "Rayons X" },
      fact: { es: "Los arqueólogos miran dentro de las momias con rayos X, sin despertarlas.", ca: "Els arqueòlegs miren dins de les mòmies amb raigs X, sense despertar-les.", en: "Archaeologists look inside mummies with X-rays, without waking them up.", cs: "Archeologové nahlížejí do mumií rentgenem, aniž by je probudili.", fr: "Les archéologues regardent à l'intérieur des momies avec des rayons X, sans les réveiller." } },
    { letter: "Y", emoji: "🎉", item: { es: "¡Yupi!", ca: "Yupi!", en: "Yippee!", cs: "Jupí (Y)", fr: "Youpi !" },
      fact: { es: "¡Yupi! es lo que gritas cuando tu barca cruza el Nilo sin mojarte ni un dedo.", ca: "Yupi! és el que crides quan la teva barca creua el Nil sense mullar-te ni un dit.", en: "Yippee! is what you shout when your boat crosses the Nile without getting a single toe wet.", cs: "Jupí! křičíš, když tvoje loďka přepluje Nil a ty jsi celá suchá.", fr: "Youpi ! c'est ce que tu cries quand ta barque traverse le Nil sans mouiller un seul doigt." } },
    { letter: "Z", emoji: "💤", item: { es: "Zzz de la momia", ca: "Zzz de la mòmia", en: "Zzz of the mummy", cs: "Zzz mumie", fr: "Zzz de la momie" },
      fact: { es: "Zzz... es el sonido de la momia durmiendo su siesta de tres mil años. ¡Shhh!", ca: "Zzz... és el so de la mòmia dormint la seva migdiada de tres mil anys. Xxt!", en: "Zzz... is the sound of the mummy taking her three-thousand-year nap. Shhh!", cs: "Zzz... tak zní mumie, když spí svůj tři tisíce let dlouhý šlofík. Pšš!", fr: "Zzz... c'est le bruit de la momie qui fait sa sieste de trois mille ans. Chut !" } }
  ],

  /* ---------- FAMOSOS ---------- */
  famous: [
    { emoji: "👦", year: "hace ~3300 años", color: "#d4a017", name: { es: "Tutankamón", ca: "Tutankamon", en: "Tutankhamun", cs: "Tutanchamon", fr: "Toutânkhamon" },
      achievement: { es: "El faraón niño: gobernó Egipto con solo 9 años. Su máscara de oro es famosísima.", ca: "El faraó nen: va governar Egipte amb només 9 anys. La seva màscara d'or és famosíssima.", en: "The boy pharaoh: he ruled Egypt at only 9 years old. His golden mask is super famous.", cs: "Malý faraon: vládl Egyptu už v 9 letech. Jeho zlatá maska je přeslavná.", fr: "Le pharaon enfant : il a gouverné l'Égypte à seulement 9 ans. Son masque d'or est très célèbre." },
      quote: { es: "Aunque seas peque, puedes hacer cosas muy grandes.", ca: "Encara que siguis menut, pots fer coses molt grans.", en: "Even if you are little, you can do very big things.", cs: "I když jsi malá, dokážeš veliké věci.", fr: "Même si tu es petit, tu peux faire de très grandes choses." } },
    { emoji: "👸", year: "hace ~2000 años", color: "#8e24aa", name: { es: "Cleopatra", ca: "Cleòpatra", en: "Cleopatra", cs: "Kleopatra", fr: "Cléopâtre" },
      achievement: { es: "La última reina de Egipto. Superinteligente: hablaba un montón de idiomas.", ca: "L'última reina d'Egipte. Superintel·ligent: parlava un munt d'idiomes.", en: "The last queen of Egypt. Super smart: she spoke lots of languages.", cs: "Poslední egyptská královna. Chytrá jako liška: mluvila spoustou jazyků.", fr: "La dernière reine d'Égypte. Super intelligente : elle parlait plein de langues." },
      quote: { es: "Aprender idiomas abre todas las puertas.", ca: "Aprendre idiomes obre totes les portes.", en: "Learning languages opens every door.", cs: "Učit se jazyky otevírá všechny dveře.", fr: "Apprendre des langues ouvre toutes les portes." } },
    { emoji: "🏛️", year: "hace ~3200 años", color: "#c62828", name: { es: "Ramsés II", ca: "Ramsès II", en: "Ramses II", cs: "Ramesse II.", fr: "Ramsès II" },
      achievement: { es: "Fue faraón durante 66 años y llenó Egipto de templos y estatuas gigantes.", ca: "Va ser faraó durant 66 anys i va omplir Egipte de temples i estàtues gegants.", en: "He was pharaoh for 66 years and filled Egypt with temples and giant statues.", cs: "Byl faraonem 66 let a zaplnil Egypt chrámy a obřími sochami.", fr: "Il a été pharaon pendant 66 ans et a rempli l'Égypte de temples et de statues géantes." },
      quote: { es: "Si sueñas en grande, construye en grande.", ca: "Si somies en gran, construeix en gran.", en: "If you dream big, build big.", cs: "Když sníš ve velkém, stav ve velkém.", fr: "Si tu rêves en grand, construis en grand." } },
    { emoji: "🌺", year: "hace ~3350 años", color: "#00838f", name: { es: "Nefertiti", ca: "Nefertiti", en: "Nefertiti", cs: "Nefertiti", fr: "Néfertiti" },
      achievement: { es: "Reina de Egipto. Su retrato es una de las esculturas más famosas del mundo.", ca: "Reina d'Egipte. El seu retrat és una de les escultures més famoses del món.", en: "Queen of Egypt. Her portrait is one of the most famous sculptures in the world.", cs: "Egyptská královna. Její portrét je jedna z nejslavnějších soch světa.", fr: "Reine d'Égypte. Son portrait est l'une des sculptures les plus célèbres du monde." },
      quote: { es: "La sonrisa es la mejor corona.", ca: "El somriure és la millor corona.", en: "A smile is the best crown.", cs: "Úsměv je ta nejlepší koruna.", fr: "Le sourire est la plus belle des couronnes." } },
    { emoji: "⛵", year: "hace ~3500 años", color: "#ef6c00", name: { es: "Hatshepsut", ca: "Hatshepsut", en: "Hatshepsut", cs: "Hatšepsut", fr: "Hatchepsout" },
      achievement: { es: "La mujer faraón: gobernó Egipto y mandó barcos a explorar tierras lejanas.", ca: "La dona faraó: va governar Egipte i va enviar vaixells a explorar terres llunyanes.", en: "The woman pharaoh: she ruled Egypt and sent ships to explore faraway lands.", cs: "Žena faraon: vládla Egyptu a vyslala lodě objevovat daleké země.", fr: "La femme pharaon : elle a gouverné l'Égypte et envoyé des bateaux explorer des terres lointaines." },
      quote: { es: "¿Que una niña no puede ser faraón? ¡Mírame!", ca: "Que una nena no pot ser faraó? Mira'm!", en: "A girl cannot be pharaoh? Watch me!", cs: "Že holka nemůže být faraon? Jen se dívej!", fr: "Une fille ne peut pas être pharaon ? Regarde-moi !" } },
    { emoji: "🔦", year: "1922", color: "#5d4037", name: { es: "Howard Carter", ca: "Howard Carter", en: "Howard Carter", cs: "Howard Carter", fr: "Howard Carter" },
      achievement: { es: "El arqueólogo que encontró el tesoro de Tutankamón en 1922, tras años buscando.", ca: "L'arqueòleg que va trobar el tresor de Tutankamon el 1922, després d'anys buscant.", en: "The archaeologist who found Tutankhamun's treasure in 1922, after years of searching.", cs: "Archeolog, který v roce 1922 po letech hledání našel Tutanchamonův poklad.", fr: "L'archéologue qui a trouvé le trésor de Toutânkhamon en 1922, après des années de recherches." },
      quote: { es: "¡Veo cosas maravillosas!", ca: "Veig coses meravelloses!", en: "I see wonderful things!", cs: "Vidím nádherné věci!", fr: "Je vois des choses merveilleuses !" } }
  ],

  childDream: {
    girl: { es: "Faraona del Nilo", ca: "Faraona del Nil", en: "Pharaoh queen of the Nile", cs: "Vládkyně Nilu", fr: "Pharaonne du Nil" },
    boy: { es: "Faraón del Nilo", ca: "Faraó del Nil", en: "Pharaoh of the Nile", cs: "Vládce Nilu", fr: "Pharaon du Nil" },
    kid: { es: "Peque del Nilo", ca: "Menut del Nil", en: "Little explorer of the Nile", cs: "Malý objevitel Nilu", fr: "Petit explorateur du Nil" }
  },
  childQuote: { es: "Cuando sea mayor descubriré una pirámide escondida. ¡Y os invitaré a merendar dentro!", ca: "Quan sigui gran descobriré una piràmide amagada. I us convidaré a berenar a dins!", en: "When I grow up I will discover a hidden pyramid. And I will invite you all for a snack inside!", cs: "Až vyrostu, objevím schovanou pyramidu. A pozvu vás dovnitř na svačinku!", fr: "Quand je serai grand, je découvrirai une pyramide cachée. Et je vous inviterai à goûter dedans !" },

  /* ---------- MATES ---------- */
  mathEmojis: ["🔺", "🐫", "🏺", "🪲", "🐈", "☀️"],

  /* ---------- CONSTRUCTOR: la máscara de faraón ---------- */
  builder: {
    title: { es: "¡Crea tu máscara de faraón!", ca: "Crea la teva màscara de faraó!", en: "Create your pharaoh mask!", cs: "Vytvoř si masku faraona!", fr: "Crée ton masque de pharaon !" },
    thing: { es: "máscara", ca: "màscara", en: "mask", cs: "maska", fr: "masque" },
    parts: [
      { id: "color", label: { es: "Color de la máscara", ca: "Color de la màscara", en: "Mask colour", cs: "Barva masky", fr: "Couleur du masque" },
        options: [{ id: "oro", v: "#d4af37" }, { id: "lapislazuli", v: "#26619c" }, { id: "turquesa", v: "#30d5c8" }, { id: "rojo", v: "#c0392b" }] },
      { id: "tocado", label: { es: "El tocado", ca: "El tocat", en: "The headdress", cs: "Pokrývka hlavy", fr: "La coiffe" },
        options: [{ id: "nemes", v: "nemes", icon: "👑" }, { id: "doble", v: "doble", icon: "💠" }, { id: "serpiente", v: "serpiente", icon: "🐍" }] },
      { id: "barba", label: { es: "La barba postiza", ca: "La barba postissa", en: "The false beard", cs: "Umělý vous", fr: "La barbe postiche" },
        options: [{ id: "recta", v: "recta", icon: "📏" }, { id: "trenzada", v: "trenzada", icon: "🌀" }, { id: "sinbarba", v: "sinbarba", icon: "🙂" }] },
      { id: "amuleto", label: { es: "El amuleto", ca: "L'amulet", en: "The amulet", cs: "Amulet", fr: "L'amulette" },
        options: [{ id: "horus", v: "horus", icon: "👁️" }, { id: "escarabajo", v: "escarabajo", icon: "🪲" }, { id: "ankh", v: "ankh", icon: "☥" }] }
    ],
    svg(sel) {
      const c = sel.color || "#d4af37";
      // tocado según la elección
      let tocado = "";
      if (sel.tocado === "doble") {
        tocado = `<path d="M42 46 Q42 20 60 16 Q78 20 78 46 Z" fill="#eceff1" stroke="#fff" stroke-width="1.5"/>
          <path d="M60 16 Q64 4 58 2 Q52 4 56 10 Z" fill="#eceff1"/>
          <path d="M36 50 Q36 34 46 30 L46 50 Z" fill="#c0392b" stroke="#fff" stroke-width="1.2"/>
          <path d="M84 50 Q84 34 74 30 L74 50 Z" fill="#c0392b" stroke="#fff" stroke-width="1.2"/>`;
      } else if (sel.tocado === "serpiente") {
        tocado = `<path d="M34 44 Q34 30 60 30 Q86 30 86 44 L86 50 L34 50 Z" fill="${c}" stroke="#fff" stroke-width="1.5"/>
          <path d="M60 34 Q56 28 60 24 Q64 20 60 16" fill="none" stroke="#2e7d32" stroke-width="3.5" stroke-linecap="round"/>
          <circle cx="60" cy="15" r="3.4" fill="#2e7d32"/><circle cx="59" cy="14" r=".9" fill="#fff"/>
          <circle cx="47" cy="42" r="2.4" fill="#fff" opacity=".8"/><circle cx="73" cy="42" r="2.4" fill="#fff" opacity=".8"/>`;
      } else {
        // nemes rayado, como el de Tutankamón
        tocado = `<path d="M60 8 Q104 16 98 78 Q96 104 80 110 L80 62 Q80 40 60 40 Q40 40 40 62 L40 110 Q24 104 22 78 Q16 16 60 8 Z" fill="${c}" stroke="#fff" stroke-width="1.5"/>
          <path d="M26 52 Q60 40 94 52 M24 66 Q60 54 96 66 M23 80 Q60 68 97 80 M25 94 Q42 88 40 92 M95 94 Q78 88 80 92" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="3"/>
          <path d="M60 34 Q57 28 60 23" fill="none" stroke="#2e7d32" stroke-width="3" stroke-linecap="round"/>
          <circle cx="60" cy="21" r="2.8" fill="#2e7d32"/>`;
      }
      // barba postiza
      let barba = "";
      if (sel.barba === "recta") {
        barba = `<rect x="54" y="106" width="12" height="22" rx="4" fill="${c}" stroke="#fff" stroke-width="1.2"/>`;
      } else if (sel.barba === "trenzada") {
        barba = `<rect x="54" y="106" width="12" height="22" rx="4" fill="${c}" stroke="#fff" stroke-width="1.2"/>
          <path d="M54 111 H66 M54 116 H66 M54 121 H66" stroke="rgba(255,255,255,.6)" stroke-width="2"/>
          <path d="M56 128 Q60 134 64 128" fill="${c}" stroke="#fff" stroke-width="1.2"/>`;
      }
      // amuleto del collar: ojo de Horus, escarabajo o ankh en paths dorados
      let amuleto = `<g stroke="#ffd54f" stroke-width="1.5" fill="none" stroke-linecap="round">
        <path d="M53.5 136 Q60 131.5 66.5 136 Q60 139.5 53.5 136 Z"/>
        <path d="M54 133.5 Q60 129.5 66 133.5"/>
        <path d="M56.5 138.5 Q56 141.5 53.5 141.5"/>
        <path d="M62.5 138.7 L63.5 142"/>
      </g><circle cx="60" cy="135.7" r="1.7" fill="#ffd54f"/>`;
      if (sel.amuleto === "escarabajo") amuleto = `<ellipse cx="60" cy="138" rx="3.6" ry="4.6" fill="#ffd54f"/>
        <circle cx="60" cy="132.3" r="1.9" fill="#ffd54f"/>
        <line x1="60" y1="133.8" x2="60" y2="142.2" stroke="rgba(0,0,0,.3)" stroke-width="1"/>
        <path d="M56.6 135.5 L53.5 133.5 M56.4 138.5 L53 138.5 M57 141 L54.5 143 M63.4 135.5 L66.5 133.5 M63.6 138.5 L67 138.5 M63 141 L65.5 143" stroke="#ffd54f" stroke-width="1.2" stroke-linecap="round"/>`;
      if (sel.amuleto === "ankh") amuleto = `<g stroke="#ffd54f" stroke-width="1.8" fill="none" stroke-linecap="round">
        <ellipse cx="60" cy="133.6" rx="2.5" ry="3.1"/>
        <line x1="60" y1="136.7" x2="60" y2="143.2"/>
        <line x1="55.8" y1="137.8" x2="64.2" y2="137.8"/>
      </g>`;
      return `<svg viewBox="0 0 120 150" width="176" height="220">
        ${tocado}
        <ellipse cx="60" cy="78" rx="26" ry="32" fill="#f5c95c" stroke="#fff" stroke-width="1.5"/>
        <path d="M40 70 Q47 66 54 70 M66 70 Q73 66 80 70" fill="none" stroke="#3e2723" stroke-width="3" stroke-linecap="round"/>
        <ellipse cx="47" cy="77" rx="5" ry="3.6" fill="#fff"/><circle cx="47" cy="77" r="2" fill="#3e2723"/>
        <ellipse cx="73" cy="77" rx="5" ry="3.6" fill="#fff"/><circle cx="73" cy="77" r="2" fill="#3e2723"/>
        <path d="M52 79 L42 82 M68 79 L78 82" stroke="#3e2723" stroke-width="2" stroke-linecap="round"/>
        <path d="M58 88 Q60 91 62 88" fill="none" stroke="#c98a3b" stroke-width="2" stroke-linecap="round"/>
        <path d="M50 97 Q60 104 70 97" fill="none" stroke="#a8562f" stroke-width="2.6" stroke-linecap="round"/>
        ${barba}
        <path d="M38 106 Q60 122 82 106 L82 128 Q60 140 38 128 Z" fill="${c}" stroke="#fff" stroke-width="1.5" opacity=".92"/>
        <path d="M40 112 Q60 126 80 112 M42 119 Q60 132 78 119" fill="none" stroke="rgba(255,255,255,.5)" stroke-width="2"/>
        <circle cx="60" cy="137" r="8.5" fill="rgba(255,255,255,.18)" stroke="#fff" stroke-width="1.2"/>
        ${amuleto}
      </svg>`;
    }
  }
};
