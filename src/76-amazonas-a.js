"use strict";
/* ============================================================
   Contenido del AMAZONAS (parte A):
   quiz, alfabeto, famosos, mates y constructor.
   ============================================================ */

THEMES.amazonas = {
  emoji: "🦜", ready: true,
  grad: "linear-gradient(150deg,#1b5e20,#00695c)",
  name: { es: "Amazonas", ca: "Amazones", en: "The Amazon", cs: "Amazonie", fr: "Amazonie" }
};

THEMES.amazonas.content = {

  statusPlace: { es: "Conectado desde el corazón de la selva", ca: "Connectat des del cor de la selva", en: "Connected from the heart of the jungle", cs: "Připojeno ze srdce pralesa", fr: "Connecté depuis le cœur de la jungle" },
  welcome: { es: "¡A la canoa, {name}! El gran río nos espera. ¿Oyes a los guacamayos? ¡Kra, kra!", ca: "A la canoa, {name}! El gran riu ens espera. Sents els guacamais? Kra, kra!", en: "Hop in the canoe, {name}! The great river is waiting. Can you hear the macaws? Kra, kra!", cs: "Nastup do kánoe, {name}! Velká řeka na nás čeká. Slyšíš papoušky? Kra, kra!", fr: "Monte dans le canoë, {name} ! Le grand fleuve nous attend. Tu entends les aras ? Kra, kra !" },

  /* ---------- QUIZ: 10 preguntas ---------- */
  quiz: [
    { emoji: "🐆",
      q: { es: "¿Qué gato grande vive en la selva amazónica?", ca: "Quin gat gran viu a la selva amazònica?", en: "Which big cat lives in the Amazon jungle?", cs: "Která velká kočka žije v amazonském pralese?", fr: "Quel grand félin vit dans la jungle amazonienne ?" },
      options: [
        { es: "El león", ca: "El lleó", en: "The lion", cs: "Lev", fr: "Le lion" },
        { es: "El jaguar", ca: "El jaguar", en: "The jaguar", cs: "Jaguár", fr: "Le jaguar" },
        { es: "El tigre", ca: "El tigre", en: "The tiger", cs: "Tygr", fr: "Le tigre" },
        { es: "El lince", ca: "El linx", en: "The lynx", cs: "Rys", fr: "Le lynx" }],
      answer: 1,
      explanation: { es: "El jaguar es el felino más grande de América. Y no le da miedo el agua: ¡nada genial!", ca: "El jaguar és el felí més gran d'Amèrica. I no li fa por l'aigua: neda de meravella!", en: "The jaguar is the biggest cat in the Americas. And it is not afraid of water: it swims great!", cs: "Jaguár je největší kočkovitá šelma Ameriky. A vody se nebojí: výborně plave!", fr: "Le jaguar est le plus grand félin d'Amérique. Et il n'a pas peur de l'eau : il nage très bien !" } },
    { emoji: "🐬",
      q: { es: "¿De qué color es el delfín del Amazonas?", ca: "De quin color és el dofí de l'Amazones?", en: "What colour is the Amazon dolphin?", cs: "Jakou barvu má amazonský delfín?", fr: "De quelle couleur est le dauphin de l'Amazone ?" },
      options: [
        { es: "Azul", ca: "Blau", en: "Blue", cs: "Modrou", fr: "Bleu" },
        { es: "Verde", ca: "Verd", en: "Green", cs: "Zelenou", fr: "Vert" },
        { es: "Rosa", ca: "Rosa", en: "Pink", cs: "Růžovou", fr: "Rose" },
        { es: "Amarillo", ca: "Groc", en: "Yellow", cs: "Žlutou", fr: "Jaune" }],
      answer: 2,
      explanation: { es: "El delfín rosado se llama boto. Cuanto más mayor se hace, más rosa se pone.", ca: "El dofí rosat es diu boto. Com més gran es fa, més rosa es torna.", en: "The pink dolphin is called the boto. The older it gets, the pinker it turns.", cs: "Růžovému delfínovi se říká boto. Čím je starší, tím víc růžoví.", fr: "Le dauphin rose s'appelle le boto. Plus il grandit, plus il devient rose." } },
    { emoji: "🐦",
      q: { es: "¿Qué pájaro tiene un pico gigante de colores?", ca: "Quin ocell té un bec gegant de colors?", en: "Which bird has a giant colourful beak?", cs: "Který pták má obrovský barevný zobák?", fr: "Quel oiseau a un bec géant tout en couleurs ?" },
      options: [
        { es: "El gorrión", ca: "El pardal", en: "The sparrow", cs: "Vrabec", fr: "Le moineau" },
        { es: "El tucán", ca: "El tucà", en: "The toucan", cs: "Tukan", fr: "Le toucan" },
        { es: "La paloma", ca: "El colom", en: "The pigeon", cs: "Holub", fr: "Le pigeon" },
        { es: "El pato", ca: "L'ànec", en: "The duck", cs: "Kachna", fr: "Le canard" }],
      answer: 1,
      explanation: { es: "El pico del tucán es enorme pero ligerísimo: por dentro es casi hueco.", ca: "El bec del tucà és enorme però lleugeríssim: per dins és gairebé buit.", en: "The toucan's beak is huge but super light: it is almost hollow inside.", cs: "Tukanův zobák je obrovský, ale lehoučký: uvnitř je skoro dutý.", fr: "Le bec du toucan est énorme mais très léger : il est presque creux à l'intérieur." } },
    { emoji: "🌊",
      q: { es: "¿Qué es el Amazonas?", ca: "Què és l'Amazones?", en: "What is the Amazon?", cs: "Co je Amazonka?", fr: "Qu'est-ce que l'Amazone ?" },
      options: [
        { es: "Una montaña", ca: "Una muntanya", en: "A mountain", cs: "Hora", fr: "Une montagne" },
        { es: "Un río gigante", ca: "Un riu gegant", en: "A giant river", cs: "Obrovská řeka", fr: "Un fleuve géant" },
        { es: "Un desierto", ca: "Un desert", en: "A desert", cs: "Poušť", fr: "Un désert" },
        { es: "Una ciudad", ca: "Una ciutat", en: "A city", cs: "Město", fr: "Une ville" }],
      answer: 1,
      explanation: { es: "Es el río más caudaloso del mundo: lleva la quinta parte del agua dulce de todos los ríos.", ca: "És el riu més cabalós del món: porta la cinquena part de l'aigua dolça de tots els rius.", en: "It is the mightiest river in the world: it carries a fifth of all the river water on Earth.", cs: "Je to nejvodnatější řeka světa: nese pětinu sladké vody všech řek na Zemi.", fr: "C'est le fleuve le plus puissant du monde : il porte un cinquième de l'eau douce de tous les fleuves." } },
    { emoji: "🦥",
      q: { es: "¿Qué animal se mueve muy muy despacio?", ca: "Quin animal es mou molt a poc a poc?", en: "Which animal moves very, very slowly?", cs: "Které zvíře se pohybuje hodně pomalu?", fr: "Quel animal bouge très très lentement ?" },
      options: [
        { es: "El colibrí", ca: "El colibrí", en: "The hummingbird", cs: "Kolibřík", fr: "Le colibri" },
        { es: "El jaguar", ca: "El jaguar", en: "The jaguar", cs: "Jaguár", fr: "Le jaguar" },
        { es: "El perezoso", ca: "El peresós", en: "The sloth", cs: "Lenochod", fr: "Le paresseux" },
        { es: "La piraña", ca: "La piranya", en: "The piranha", cs: "Piraňa", fr: "Le piranha" }],
      answer: 2,
      explanation: { es: "El perezoso vive con muchísima calma: baja de su árbol una vez por semana.", ca: "El peresós viu amb moltíssima calma: baixa del seu arbre un cop per setmana.", en: "The sloth takes life very easy: it comes down from its tree once a week.", cs: "Lenochod žije v naprostém klidu: ze svého stromu slézá jednou za týden.", fr: "Le paresseux vit tout en douceur : il descend de son arbre une fois par semaine." } },
    { emoji: "📣",
      q: { es: "¿Qué mono se oye desde lejísimos?", ca: "Quin mico se sent des de lluníssim?", en: "Which monkey can you hear from far, far away?", cs: "Kterou opici uslyšíš z velké dálky?", fr: "Quel singe entend-on de très très loin ?" },
      options: [
        { es: "El mono aullador", ca: "El mico udolador", en: "The howler monkey", cs: "Vřešťana", fr: "Le singe hurleur" },
        { es: "El mono calladito", ca: "El mico calladet", en: "The quiet monkey", cs: "Tichou opičku", fr: "Le singe silencieux" },
        { es: "El uakarí", ca: "L'uacari", en: "The uakari", cs: "Uakariho", fr: "L'ouakari" },
        { es: "El tití", ca: "El tití", en: "The marmoset", cs: "Kosmana", fr: "Le ouistiti" }],
      answer: 0,
      explanation: { es: "El aullido del mono aullador se oye a cinco kilómetros. ¡Menudo altavoz!", ca: "L'udol del mico udolador se sent a cinc quilòmetres. Quin altaveu!", en: "The howler monkey's call can be heard five kilometres away. What a loudspeaker!", cs: "Volání vřešťana je slyšet na pět kilometrů. To je ale tlampač!", fr: "Le cri du singe hurleur s'entend à cinq kilomètres. Quel haut-parleur !" } },
    { emoji: "🌳",
      q: { es: "¿Cómo se llama el techo verde de la selva?", ca: "Com es diu el sostre verd de la selva?", en: "What is the green roof of the jungle called?", cs: "Jak se říká zelené střeše pralesa?", fr: "Comment s'appelle le toit vert de la jungle ?" },
      options: [
        { es: "El tejado", ca: "La teulada", en: "The rooftop", cs: "Střecha domu", fr: "Le toit de tuiles" },
        { es: "El dosel", ca: "El dosser", en: "The canopy", cs: "Koruny stromů", fr: "La canopée" },
        { es: "La alfombra", ca: "La catifa", en: "The carpet", cs: "Koberec", fr: "Le tapis" },
        { es: "La cueva", ca: "La cova", en: "The cave", cs: "Jeskyně", fr: "La grotte" }],
      answer: 1,
      explanation: { es: "El dosel es donde se tocan las copas de los árboles. Allí viven guacamayos, monos y mariposas.", ca: "El dosser és on es toquen les capçades dels arbres. Allà hi viuen guacamais, micos i papallones.", en: "The canopy is where the treetops touch. Macaws, monkeys and butterflies live up there.", cs: "Koruny stromů se nahoře dotýkají a tvoří střechu. Bydlí tam papoušci, opice a motýli.", fr: "La canopée, c'est là où les cimes des arbres se touchent. Les aras, les singes et les papillons y vivent." } },
    { emoji: "🦋",
      q: { es: "¿De qué color brillan las alas de la mariposa morfo?", ca: "De quin color brillen les ales de la papallona morfo?", en: "What colour do the morpho butterfly's wings shine?", cs: "Jakou barvou září křídla motýla morfa?", fr: "De quelle couleur brillent les ailes du papillon morpho ?" },
      options: [
        { es: "Rosa", ca: "Rosa", en: "Pink", cs: "Růžovou", fr: "Rose" },
        { es: "Azul", ca: "Blau", en: "Blue", cs: "Modrou", fr: "Bleu" },
        { es: "Negro", ca: "Negre", en: "Black", cs: "Černou", fr: "Noir" },
        { es: "Blanco", ca: "Blanc", en: "White", cs: "Bílou", fr: "Blanc" }],
      answer: 1,
      explanation: { es: "Sus alas no llevan pintura: tienen escamas que reflejan la luz y brillan azules.", ca: "Les seves ales no porten pintura: tenen escates que reflecteixen la llum i brillen blaves.", en: "Its wings have no paint: they have tiny scales that reflect the light and shine blue.", cs: "Jeho křídla nemají žádnou barvu: mají šupinky, které odrážejí světlo a září modře.", fr: "Ses ailes n'ont pas de peinture : elles ont des écailles qui reflètent la lumière et brillent en bleu." } },
    { emoji: "🪷",
      q: { es: "¿Qué puede aguantar la hoja del nenúfar gigante Victoria?", ca: "Què pot aguantar la fulla del nenúfar gegant Victòria?", en: "What can the leaf of the giant Victoria water lily hold?", cs: "Co unese list obřího leknínu viktorie?", fr: "Que peut porter la feuille du nénuphar géant Victoria ?" },
      options: [
        { es: "Un coche", ca: "Un cotxe", en: "A car", cs: "Auto", fr: "Une voiture" },
        { es: "Un elefante", ca: "Un elefant", en: "An elephant", cs: "Slona", fr: "Un éléphant" },
        { es: "Un niño pequeño", ca: "Un nen petit", en: "A small child", cs: "Malé dítě", fr: "Un petit enfant" },
        { es: "Una casa", ca: "Una casa", en: "A house", cs: "Dům", fr: "Une maison" }],
      answer: 2,
      explanation: { es: "Sus hojas miden hasta tres metros y aguantan el peso de un niño pequeño, como barquitas.", ca: "Les seves fulles fan fins a tres metres i aguanten el pes d'un nen petit, com barquetes.", en: "Its leaves grow up to three metres and can hold a small child, like little boats.", cs: "Jeho listy měří až tři metry a unesou malé dítě, jako malé loďky.", fr: "Ses feuilles mesurent jusqu'à trois mètres et portent un petit enfant, comme des petits bateaux." } },
    { emoji: "🌧️",
      q: { es: "¿Por qué la selva está siempre tan verde?", ca: "Per què la selva està sempre tan verda?", en: "Why is the jungle always so green?", cs: "Proč je prales pořád tak zelený?", fr: "Pourquoi la jungle est-elle toujours aussi verte ?" },
      options: [
        { es: "Porque llueve casi cada día", ca: "Perquè plou gairebé cada dia", en: "Because it rains almost every day", cs: "Protože tam skoro každý den prší", fr: "Parce qu'il pleut presque tous les jours" },
        { es: "Porque la pintan", ca: "Perquè la pinten", en: "Because someone paints it", cs: "Protože ho někdo natírá", fr: "Parce qu'on la peint" },
        { es: "Porque hace frío", ca: "Perquè fa fred", en: "Because it is cold", cs: "Protože je tam zima", fr: "Parce qu'il fait froid" },
        { es: "Porque es de plástico", ca: "Perquè és de plàstic", en: "Because it is made of plastic", cs: "Protože je z plastu", fr: "Parce qu'elle est en plastique" }],
      answer: 0,
      explanation: { es: "En la selva tropical llueve muchísimo, y con agua y calorcito las plantas crecen felices.", ca: "A la selva tropical plou moltíssim, i amb aigua i caloreta les plantes creixen felices.", en: "In the rainforest it rains a lot, and with water and warmth the plants grow up happy.", cs: "V tropickém pralese hodně prší, a s vodou a teplíčkem rostliny šťastně rostou.", fr: "Dans la forêt tropicale, il pleut énormément, et avec de l'eau et de la chaleur, les plantes poussent toutes contentes." } },
    { emoji: "🐍",
      q: { es: "¿Qué serpiente gigante nada por los ríos del Amazonas?", ca: "Quina serp gegant neda pels rius de l'Amazones?", en: "Which giant snake swims in the rivers of the Amazon?", cs: "Který obrovský had plave v řekách Amazonie?", fr: "Quel serpent géant nage dans les rivières d'Amazonie ?" },
      options: [
        { es: "La cobra", ca: "La cobra", en: "The cobra", cs: "Kobra", fr: "Le cobra" },
        { es: "La lombriz", ca: "El cuc de terra", en: "The earthworm", cs: "Žížala", fr: "Le ver de terre" },
        { es: "La víbora", ca: "L'escurçó", en: "The viper", cs: "Zmije", fr: "La vipère" },
        { es: "La anaconda", ca: "L'anaconda", en: "The anaconda", cs: "Anakonda", fr: "L'anaconda" }],
      answer: 3,
      explanation: { es: "La anaconda verde es una de las serpientes más grandes del mundo y se pasa casi todo el día en el agua.", ca: "L'anaconda verda és una de les serps més grans del món i es passa gairebé tot el dia a l'aigua.", en: "The green anaconda is one of the biggest snakes in the world and spends almost all day in the water.", cs: "Anakonda velká je jeden z největších hadů světa a skoro celý den tráví ve vodě.", fr: "L'anaconda vert est l'un des plus grands serpents du monde et passe presque toute la journée dans l'eau." } },
    { emoji: "🦜",
      q: { es: "¿Qué pájaro de colores vuela en pareja por la selva?", ca: "Quin ocell de colors vola en parella per la selva?", en: "Which colourful bird flies through the jungle with its partner?", cs: "Který barevný pták létá pralesem ve dvojici?", fr: "Quel oiseau tout en couleurs vole en couple dans la jungle ?" },
      options: [
        { es: "El guacamayo", ca: "El guacamai", en: "The macaw", cs: "Ara", fr: "L'ara" },
        { es: "La gallina", ca: "La gallina", en: "The hen", cs: "Slepice", fr: "La poule" },
        { es: "El pingüino", ca: "El pingüí", en: "The penguin", cs: "Tučňák", fr: "Le pingouin" },
        { es: "El avestruz", ca: "L'estruç", en: "The ostrich", cs: "Pštros", fr: "L'autruche" }],
      answer: 0,
      explanation: { es: "Los guacamayos eligen una pareja para toda la vida y vuelan juntos a buscar frutas cada mañana.", ca: "Els guacamais trien una parella per a tota la vida i volen junts a buscar fruita cada matí.", en: "Macaws choose a partner for life and fly off together every morning to find fruit.", cs: "Papoušci ara si vybírají partnera na celý život a každé ráno spolu létají za ovocem.", fr: "Les aras choisissent un partenaire pour la vie et s'envolent ensemble chaque matin chercher des fruits." } },
    { emoji: "🐟",
      q: { es: "¿Qué pez del Amazonas tiene los dientes muy afilados?", ca: "Quin peix de l'Amazones té les dents molt esmolades?", en: "Which Amazon fish has very sharp teeth?", cs: "Která ryba z Amazonky má hodně ostré zuby?", fr: "Quel poisson de l'Amazone a des dents très pointues ?" },
      options: [
        { es: "La sardina", ca: "La sardina", en: "The sardine", cs: "Sardinka", fr: "La sardine" },
        { es: "El pez payaso", ca: "El peix pallasso", en: "The clownfish", cs: "Klaun očkatý", fr: "Le poisson-clown" },
        { es: "La piraña", ca: "La piranya", en: "The piranha", cs: "Piraňa", fr: "Le piranha" },
        { es: "El caballito de mar", ca: "El cavallet de mar", en: "The seahorse", cs: "Mořský koník", fr: "L'hippocampe" }],
      answer: 2,
      explanation: { es: "Las pirañas tienen dientes como sierras, pero muchas también comen frutas y semillas que caen al río.", ca: "Les piranyes tenen dents com serres, però moltes també mengen fruites i llavors que cauen al riu.", en: "Piranhas have teeth like little saws, but many also eat fruits and seeds that fall into the river.", cs: "Piraně mají zuby jako pilky, ale mnohé jedí i ovoce a semínka, která spadnou do řeky.", fr: "Les piranhas ont des dents comme des petites scies, mais beaucoup mangent aussi des fruits et des graines qui tombent dans le fleuve." } },
    { emoji: "🦦",
      q: { es: "¿Qué animal juguetón del río es tan largo como un sofá?", ca: "Quin animal juganer del riu és tan llarg com un sofà?", en: "Which playful river animal is as long as a sofa?", cs: "Které hravé říční zvíře je dlouhé jako pohovka?", fr: "Quel animal joueur de la rivière est aussi long qu'un canapé ?" },
      options: [
        { es: "El caracol", ca: "El cargol", en: "The snail", cs: "Šnek", fr: "L'escargot" },
        { es: "La nutria gigante", ca: "La llúdria gegant", en: "The giant otter", cs: "Vydra obrovská", fr: "La loutre géante" },
        { es: "La tortuga", ca: "La tortuga", en: "The turtle", cs: "Želva", fr: "La tortue" },
        { es: "El flamenco", ca: "El flamenc", en: "The flamingo", cs: "Plameňák", fr: "Le flamant rose" }],
      answer: 1,
      explanation: { es: "La nutria gigante mide casi dos metros y vive en familia: pescan juntas y juegan en el agua todo el día.", ca: "La llúdria gegant fa gairebé dos metres i viu en família: pesquen juntes i juguen a l'aigua tot el dia.", en: "The giant otter is almost two metres long and lives with its family: they fish together and play in the water all day.", cs: "Vydra obrovská měří skoro dva metry a žije v rodině: loví ryby společně a celý den dovádí ve vodě.", fr: "La loutre géante mesure presque deux mètres et vit en famille : elles pêchent ensemble et jouent dans l'eau toute la journée." } },
    { emoji: "🐸",
      q: { es: "¿Por qué las ranitas venenosas de la selva son de colores tan brillantes?", ca: "Per què les granotetes verinoses de la selva són de colors tan brillants?", en: "Why are the jungle's poison frogs so brightly coloured?", cs: "Proč mají jedovaté žabky z pralesa tak zářivé barvy?", fr: "Pourquoi les petites grenouilles venimeuses de la jungle ont-elles des couleurs si brillantes ?" },
      options: [
        { es: "Porque se pintan cada mañana", ca: "Perquè es pinten cada matí", en: "Because they paint themselves every morning", cs: "Protože se každé ráno malují", fr: "Parce qu'elles se peignent chaque matin" },
        { es: "Para esconderse entre las flores", ca: "Per amagar-se entre les flors", en: "To hide among the flowers", cs: "Aby se schovaly mezi květinami", fr: "Pour se cacher parmi les fleurs" },
        { es: "Porque tienen frío", ca: "Perquè tenen fred", en: "Because they are cold", cs: "Protože je jim zima", fr: "Parce qu'elles ont froid" },
        { es: "Para avisar de que no se las puede comer", ca: "Per avisar que no se les pot menjar", en: "To warn everyone not to eat them", cs: "Aby všem řekly, že se nesmí jíst", fr: "Pour prévenir qu'il ne faut pas les manger" }],
      answer: 3,
      explanation: { es: "Sus colores brillantes dicen a todos: cuidado, no me comas. Así los demás animales las dejan tranquilas.", ca: "Els seus colors brillants diuen a tothom: compte, no em mengis. Així els altres animals les deixen tranquil·les.", en: "Their bright colours tell everyone: careful, do not eat me. So the other animals leave them alone.", cs: "Jejich zářivé barvy všem říkají: pozor, nejez mě. Ostatní zvířata je proto nechají na pokoji.", fr: "Leurs couleurs brillantes disent à tous : attention, ne me mange pas. Alors les autres animaux les laissent tranquilles." } }
  ],

  /* ---------- ALFABETO: 26 letras ---------- */
  alphabet: [
    { letter: "A", emoji: "🐍", item: { es: "Anaconda", ca: "Anaconda", en: "Anaconda", cs: "Anakonda", fr: "Anaconda" },
      fact: { es: "La anaconda es una de las serpientes más grandes del mundo, ¡y nada de maravilla!", ca: "L'anaconda és una de les serps més grans del món, i neda de meravella!", en: "The anaconda is one of the biggest snakes in the world, and a wonderful swimmer!", cs: "Anakonda je jeden z největších hadů na světě a výborně plave!", fr: "L'anaconda est l'un des plus grands serpents du monde, et il nage à merveille !" } },
    { letter: "B", emoji: "🌳", item: { es: "Bosque", ca: "Bosc", en: "Boa", cs: "Bromélie", fr: "Boa" },
      fact: { es: "El bosque del Amazonas es tan grande que dentro cabrían muchos países enteros.", ca: "El bosc de l'Amazones és tan gran que hi cabrien molts països sencers.", en: "The boa sleeps coiled up on a branch, like a big green bracelet.", cs: "Bromélie je rostlina s jezírkem uvnitř: koupou se v něm malé žabky.", fr: "Le boa dort enroulé sur une branche, comme un grand bracelet vert." } },
    { letter: "C", emoji: "🐊", item: { es: "Caimán", ca: "Caiman", en: "Caiman", cs: "Cesta po řece", fr: "Caïman" },
      fact: { es: "El caimán toma el sol muy quieto para calentarse: parece una estatua.", ca: "El caiman pren el sol molt quiet per escalfar-se: sembla una estàtua.", en: "The caiman lies very still in the sun to warm up: it looks like a statue.", cs: "Cesta po řece je v pralese nejrychlejší: řeka je tam jako silnice.", fr: "Le caïman prend le soleil sans bouger pour se réchauffer : on dirait une statue." } },
    { letter: "D", emoji: "🐬", item: { es: "Delfín rosado", ca: "Dofí rosat", en: "Dolphin", cs: "Delfínovec", fr: "Dauphin rose" },
      fact: { es: "El delfín rosado vive en el río. Cuanto más mayor se hace, más rosa se pone.", ca: "El dofí rosat viu al riu. Com més gran es fa, més rosa es torna.", en: "The pink dolphin lives in the river. The older it gets, the pinker it turns.", cs: "Delfínovec amazonský žije v řece a je růžový: čím je starší, tím víc růžoví.", fr: "Le dauphin rose vit dans le fleuve. Plus il grandit, plus il devient rose." } },
    { letter: "E", emoji: "🪲", item: { es: "Escarabajo", ca: "Escarabat", en: "Electric eel", cs: "Expedice", fr: "Expédition" },
      fact: { es: "En la selva viven escarabajos de colores que brillan como joyas.", ca: "A la selva hi viuen escarabats de colors que brillen com joies.", en: "The electric eel makes its own electricity: a fish with a built-in flashlight!", cs: "Expedice je výprava za objevy: vezmi si lupu a hurá do pralesa!", fr: "Une expédition est un grand voyage de découverte : prends ta loupe et en route !" } },
    { letter: "F", emoji: "🌺", item: { es: "Flor", ca: "Flor", en: "Frog", cs: "Fíkovník", fr: "Fleur" },
      fact: { es: "En el Amazonas hay flores que se abren solo por la noche, como la del nenúfar gigante.", ca: "A l'Amazones hi ha flors que s'obren només de nit, com la del nenúfar gegant.", en: "Tiny tree frogs love the rain: some are as small as your fingernail.", cs: "Fíkovník v pralese objímá jiné stromy a šplhá po nich vzhůru za sluncem.", fr: "En Amazonie, certaines fleurs ne s'ouvrent que la nuit, comme celle du nénuphar géant." } },
    { letter: "G", emoji: "🦜", item: { es: "Guacamayo", ca: "Guacamai", en: "Giant otter", cs: "Gigantická vydra", fr: "Grenouille" },
      fact: { es: "Los guacamayos eligen una pareja y vuelan juntos toda la vida.", ca: "Els guacamais trien una parella i volen junts tota la vida.", en: "The giant otter is as long as a sofa and loves playing in the river.", cs: "Gigantická vydra je dlouhá jako pohovka a moc ráda dovádí v řece.", fr: "Les grenouilles de la jungle chantent en chœur quand la pluie arrive." } },
    { letter: "H", emoji: "🦅", item: { es: "Harpía", ca: "Harpia", en: "Harpy eagle", cs: "Harpyje", fr: "Harpie" },
      fact: { es: "El águila harpía tiene garras enormes y una cresta de plumas como una corona.", ca: "L'àguila harpia té urpes enormes i una cresta de plomes com una corona.", en: "The harpy eagle has huge claws and a crest of feathers like a crown.", cs: "Harpyje má obrovské drápy a chocholku z peří jako korunu.", fr: "La harpie a des serres énormes et une crête de plumes comme une couronne." } },
    { letter: "I", emoji: "🦎", item: { es: "Iguana", ca: "Iguana", en: "Iguana", cs: "Ibis rudý", fr: "Iguane" },
      fact: { es: "La iguana toma el sol en las ramas y, si hace falta, ¡salta al agua desde lo alto!", ca: "La iguana pren el sol a les branques i, si cal, salta a l'aigua des de dalt!", en: "The iguana sunbathes on the branches and, if it must, jumps into the water from up high!", cs: "Ibis rudý je celý červený: tu barvu mu dávají červení krabi, které jí.", fr: "L'iguane prend le soleil sur les branches et, s'il le faut, saute dans l'eau de tout là-haut !" } },
    { letter: "J", emoji: "🐆", item: { es: "Jaguar", ca: "Jaguar", en: "Jaguar", cs: "Jaguár", fr: "Jaguar" },
      fact: { es: "El jaguar es el felino más grande de América y le encanta nadar.", ca: "El jaguar és el felí més gran d'Amèrica i li encanta nedar.", en: "The jaguar is the biggest cat in the Americas and it loves to swim.", cs: "Jaguár je největší kočkovitá šelma Ameriky a moc rád plave.", fr: "Le jaguar est le plus grand félin d'Amérique et il adore nager." } },
    { letter: "K", emoji: "🌴", item: { es: "Kapok (la ceiba)", ca: "Kapok (la ceiba)", en: "Kapok tree", cs: "Kapok", fr: "Kapokier" },
      fact: { es: "El kapok o ceiba es el gigante de la selva: puede ser tan alto como veinte casas.", ca: "El kapok o ceiba és el gegant de la selva: pot ser tan alt com vint cases.", en: "The kapok tree is the giant of the jungle: it can grow as tall as twenty houses.", cs: "Kapok je obr pralesa: může být vysoký jako dvacet domů.", fr: "Le kapokier est le géant de la jungle : il peut être aussi haut que vingt maisons." } },
    { letter: "L", emoji: "🌿", item: { es: "Liana", ca: "Liana", en: "Liana", cs: "Liána", fr: "Liane" },
      fact: { es: "Las lianas son cuerdas vivas: los monos las usan como columpios.", ca: "Les lianes són cordes vives: els micos les fan servir com a gronxadors.", en: "Lianas are living ropes: the monkeys use them as swings.", cs: "Liány jsou živá lana: opice je používají jako houpačky.", fr: "Les lianes sont des cordes vivantes : les singes s'en servent comme balançoires." } },
    { letter: "M", emoji: "🦋", item: { es: "Mariposa morfo", ca: "Morfo (papallona)", en: "Morpho butterfly", cs: "Motýl morfo", fr: "Morpho bleu" },
      fact: { es: "La mariposa morfo brilla azul porque sus alas reflejan la luz, como espejitos.", ca: "La papallona morfo brilla blava perquè les seves ales reflecteixen la llum, com mirallets.", en: "The morpho butterfly shines blue because its wings reflect the light, like tiny mirrors.", cs: "Motýl morfo září modře, protože jeho křídla odrážejí světlo jako zrcátka.", fr: "Le morpho brille en bleu parce que ses ailes reflètent la lumière, comme des petits miroirs." } },
    { letter: "N", emoji: "🪷", item: { es: "Nenúfar", ca: "Nenúfar", en: "Night in the jungle", cs: "Noc v pralese", fr: "Nénuphar" },
      fact: { es: "Los nenúfares son flores que flotan: debajo de sus hojas duermen los pececitos.", ca: "Els nenúfars són flors que floten: sota les seves fulles hi dormen els peixets.", en: "At night the jungle becomes a concert: frogs, crickets and owls all sing together.", cs: "V noci se prales změní v koncert: zpívají žáby, cvrčci i sovy.", fr: "Les nénuphars sont des fleurs qui flottent : sous leurs feuilles dorment les petits poissons." } },
    { letter: "O", emoji: "🌸", item: { es: "Orquídea", ca: "Orquídia", en: "Orchid", cs: "Orchidej", fr: "Orchidée" },
      fact: { es: "Muchas orquídeas viven subidas a los árboles, sin tocar nunca el suelo.", ca: "Moltes orquídies viuen enfilades als arbres, sense tocar mai el terra.", en: "Many orchids live up in the trees, never touching the ground.", cs: "Mnoho orchidejí žije vysoko na stromech a nikdy se nedotkne země.", fr: "Beaucoup d'orchidées vivent perchées sur les arbres, sans jamais toucher le sol." } },
    { letter: "P", emoji: "🦥", item: { es: "Perezoso", ca: "Peresós", en: "Piranha", cs: "Prales", fr: "Paresseux" },
      fact: { es: "El perezoso baja de su árbol solo una vez por semana. ¡Todo con calma!", ca: "El peresós baixa del seu arbre només un cop per setmana. Tot amb calma!", en: "Most piranhas also eat fruits and seeds, and they always swim with their friends.", cs: "Prales je les, kde prší skoro každý den: proto je tak krásně zelený.", fr: "Le paresseux descend de son arbre une fois par semaine. Tout en douceur !" } },
    { letter: "Q", emoji: "🤫", item: { es: "Quietud de la selva", ca: "Quietud de la selva", en: "Quiet of the jungle", cs: "Klid pralesa (Q)", fr: "Quiétude de la jungle" },
      fact: { es: "Cuando el jaguar pasea, la selva se queda en quietud: todos escuchan sus pasos suaves.", ca: "Quan el jaguar passeja, la selva es queda en quietud: tothom escolta les seves passes suaus.", en: "When the jaguar walks by, the jungle goes quiet: everyone listens to his soft steps.", cs: "Když se prochází jaguár, v pralese nastane klid: všichni poslouchají jeho tiché kroky.", fr: "Quand le jaguar se promène, la jungle devient toute calme : chacun écoute ses pas légers." } },
    { letter: "R", emoji: "🌊", item: { es: "Río", ca: "Riu", en: "River", cs: "Ryba", fr: "Rivière" },
      fact: { es: "El río Amazonas lleva la quinta parte del agua dulce de todos los ríos del mundo.", ca: "El riu Amazones porta la cinquena part de l'aigua dolça de tots els rius del món.", en: "The Amazon river carries a fifth of all the fresh river water in the world.", cs: "V Amazonce žije přes tisíc druhů ryb: víc než kdekoli jinde na světě.", fr: "Le fleuve Amazone porte un cinquième de l'eau douce de toutes les rivières du monde." } },
    { letter: "S", emoji: "🍃", item: { es: "Selva", ca: "Selva", en: "Sloth", cs: "Strom", fr: "Singe" },
      fact: { es: "La selva amazónica es tan grande que fabrica su propia lluvia.", ca: "La selva amazònica és tan gran que fabrica la seva pròpia pluja.", en: "The sloth is so calm that tiny green algae grow on its fur.", cs: "Stromy v pralese rostou tak hustě, že si nahoře podávají větve jako ruce.", fr: "Les singes hurleurs s'entendent à cinq kilomètres : quel concert !" } },
    { letter: "T", emoji: "🐦", item: { es: "Tucán", ca: "Tucà", en: "Toucan", cs: "Tukan", fr: "Toucan" },
      fact: { es: "El pico del tucán parece pesadísimo, pero es ligero por dentro, casi hueco.", ca: "El bec del tucà sembla pesadíssim, però és lleuger per dins, gairebé buit.", en: "The toucan's beak looks super heavy, but it is light inside, almost hollow.", cs: "Tukanův zobák vypadá strašně těžký, ale uvnitř je lehoučký, skoro dutý.", fr: "Le bec du toucan a l'air très lourd, mais il est léger à l'intérieur, presque creux." } },
    { letter: "U", emoji: "🐒", item: { es: "Uakarí", ca: "Uacari", en: "Uakari", cs: "Uakari", fr: "Urubu" },
      fact: { es: "El uakarí es un mono de cara roja: cuanto más roja la tiene, más sano está.", ca: "L'uacari és un mico de cara vermella: com més vermella la té, més sa està.", en: "The uakari is a monkey with a red face: the redder it is, the healthier it feels.", cs: "Uakari je opička s červeným obličejem: čím červenější, tím je zdravější.", fr: "L'urubu plane très haut sans battre des ailes : il se laisse porter par le vent." } },
    { letter: "V", emoji: "👑", item: { es: "Victoria amazónica", ca: "Victòria amazònica", en: "Victoria water lily", cs: "Viktorie královská", fr: "Victoria (nénuphar géant)" },
      fact: { es: "La hoja de la Victoria aguanta el peso de un niño pequeño, como una barquita verde.", ca: "La fulla de la Victòria aguanta el pes d'un nen petit, com una barqueta verda.", en: "The Victoria's leaf can hold a small child, like a little green boat.", cs: "List viktorie unese malé dítě, jako zelená loďka.", fr: "La feuille du Victoria porte un petit enfant, comme un petit bateau vert." } },
    { letter: "W", emoji: "🚶", item: { es: "Walking palm (palmera que camina)", ca: "Walking palm (palmera que camina)", en: "Walking palm", cs: "Walking palm (chodící palma)", fr: "Walking palm (palmier qui marche)" },
      fact: { es: "Dicen que esta palmera mueve sus raíces poquito a poco buscando la luz. ¡Camina despacísimo!", ca: "Diuen que aquesta palmera mou les seves arrels a poc a poc buscant la llum. Camina a poc a poc!", en: "They say this palm moves its roots little by little, looking for the light. It walks super slowly!", cs: "Říká se, že tahle palma pomaloučku přesouvá kořeny za světlem. Chodí strašně pomalu!", fr: "On dit que ce palmier déplace ses racines petit à petit pour chercher la lumière. Il marche tout doucement !" } },
    { letter: "X", emoji: "💧", item: { es: "Río Xingú", ca: "Riu Xingú", en: "Xingu River", cs: "Řeka Xingu", fr: "Rivière Xingu" },
      fact: { es: "El Xingú es un río hermano del Amazonas, de aguas claritas y peces de mil colores.", ca: "El Xingú és un riu germà de l'Amazones, d'aigües claretes i peixos de mil colors.", en: "The Xingu is a sister river of the Amazon, with clear water and fish of a thousand colours.", cs: "Xingu je sesterská řeka Amazonky, s čistou vodou a rybami tisíce barev.", fr: "Le Xingu est une rivière sœur de l'Amazone, aux eaux claires et aux poissons de mille couleurs." } },
    { letter: "Y", emoji: "🛖", item: { es: "Yanomami", ca: "Yanomami", en: "Yanomami", cs: "Yanomamové", fr: "Yanomami" },
      fact: { es: "El pueblo yanomami vive en la selva desde hace muchísimo tiempo y sabe cuidarla mejor que nadie.", ca: "El poble yanomami viu a la selva des de fa moltíssim temps i sap cuidar-la millor que ningú.", en: "The Yanomami people have lived in the jungle for a very long time and care for it better than anyone.", cs: "Yanomamové žijí v pralese odpradávna a umějí se o něj starat lépe než kdokoli jiný.", fr: "Le peuple yanomami vit dans la jungle depuis très longtemps et sait en prendre soin mieux que personne." } },
    { letter: "Z", emoji: "😴", item: { es: "Zzz (la siesta del perezoso)", ca: "Zzz (la migdiada del peresós)", en: "Zzz (the sloth's nap)", cs: "Zzz (šlofík lenochoda)", fr: "Zzz (la sieste du paresseux)" },
      fact: { es: "El perezoso duerme muchas horas abrazado a su rama favorita. ¡Que descanses tú también!", ca: "El peresós dorm moltes hores abraçat a la seva branca preferida. Que descansis tu també!", en: "The sloth sleeps for hours hugging its favourite branch. Sweet dreams to you too!", cs: "Lenochod spí dlouhé hodiny v objetí své oblíbené větve. Hezky si odpočiň i ty!", fr: "Le paresseux dort des heures en serrant sa branche préférée. Repose-toi bien, toi aussi !" } }
  ],

  /* ---------- FAMOSOS ---------- */
  famous: [
    { emoji: "🧭", year: "1799", color: "#1565c0", name: { es: "Alexander von Humboldt", ca: "Alexander von Humboldt", en: "Alexander von Humboldt", cs: "Alexander von Humboldt", fr: "Alexander von Humboldt" },
      achievement: { es: "Explorador científico: contó y dibujó plantas, ríos y estrellas de América.", ca: "Explorador científic: va comptar i dibuixar plantes, rius i estrelles d'Amèrica.", en: "Scientist explorer: he counted and drew the plants, rivers and stars of the Americas.", cs: "Vědec a cestovatel: počítal a kreslil rostliny, řeky a hvězdy Ameriky.", fr: "Explorateur scientifique : il a compté et dessiné les plantes, les fleuves et les étoiles d'Amérique." },
      quote: { es: "En la naturaleza todo está unido con hilos invisibles.", ca: "A la natura tot està unit amb fils invisibles.", en: "In nature, everything is joined by invisible threads.", cs: "V přírodě je všechno spojeno neviditelnými nitkami.", fr: "Dans la nature, tout est relié par des fils invisibles." } },
    { emoji: "🛶", year: "1542", color: "#00838f", name: { es: "Francisco de Orellana", ca: "Francisco de Orellana", en: "Francisco de Orellana", cs: "Francisco de Orellana", fr: "Francisco de Orellana" },
      achievement: { es: "El primero en recorrer el río Amazonas de punta a punta.", ca: "El primer a recórrer el riu Amazones de punta a punta.", en: "The first to travel the Amazon river from end to end.", cs: "První, kdo proplul Amazonku od začátku až do konce.", fr: "Le premier à parcourir le fleuve Amazone d'un bout à l'autre." },
      quote: { es: "Un río tan grande hay que verlo para creerlo.", ca: "Un riu tan gran s'ha de veure per creure-ho.", en: "A river this big must be seen to be believed.", cs: "Tak velkou řeku musíš vidět, abys tomu uvěřil.", fr: "Un fleuve aussi grand, il faut le voir pour le croire." } },
    { emoji: "🎨", year: "1699", color: "#d81b60", name: { es: "Maria Sibylla Merian", ca: "Maria Sibylla Merian", en: "Maria Sibylla Merian", cs: "Maria Sibylla Merianová", fr: "Maria Sibylla Merian" },
      achievement: { es: "Pintora de insectos y plantas de la selva, cuando casi nadie los miraba.", ca: "Pintora d'insectes i plantes de la selva, quan gairebé ningú no els mirava.", en: "Painter of jungle insects and plants, back when almost nobody looked at them.", cs: "Malířka pralesního hmyzu a rostlin v době, kdy se na ně skoro nikdo nedíval.", fr: "Peintre des insectes et des plantes de la jungle, quand presque personne ne les regardait." },
      quote: { es: "Si miras despacito, hasta una oruga es una maravilla.", ca: "Si mires a poc a poc, fins i tot una eruga és una meravella.", en: "If you look slowly, even a caterpillar is a wonder.", cs: "Když se díváš pomalu, i housenka je zázrak.", fr: "Si tu regardes doucement, même une chenille est une merveille." } },
    { emoji: "🌱", year: "1988", color: "#2e7d32", name: { es: "Chico Mendes", ca: "Chico Mendes", en: "Chico Mendes", cs: "Chico Mendes", fr: "Chico Mendes" },
      achievement: { es: "Defensor de la selva y de la gente que vive de ella sin dañarla.", ca: "Defensor de la selva i de la gent que en viu sense fer-li mal.", en: "Defender of the jungle and of the people who live from it without harming it.", cs: "Ochránce pralesa a lidí, kteří z něj žijí, aniž by mu ubližovali.", fr: "Défenseur de la jungle et des gens qui en vivent sans lui faire de mal." },
      quote: { es: "Cuidar un árbol es cuidar a todos los que viven en él.", ca: "Cuidar un arbre és cuidar tots els que hi viuen.", en: "Caring for a tree means caring for everyone who lives in it.", cs: "Starat se o strom znamená starat se o všechny, kdo v něm bydlí.", fr: "Prendre soin d'un arbre, c'est prendre soin de tous ceux qui y vivent." } },
    { emoji: "🌎", year: "2003", color: "#7cb342", name: { es: "Marina Silva", ca: "Marina Silva", en: "Marina Silva", cs: "Marina Silvová", fr: "Marina Silva" },
      achievement: { es: "Protectora de la Amazonia: trabaja para que siga verde y llena de vida.", ca: "Protectora de l'Amazònia: treballa perquè segueixi verda i plena de vida.", en: "Protector of the Amazon: she works to keep it green and full of life.", cs: "Ochránkyně Amazonie: pracuje na tom, aby zůstala zelená a plná života.", fr: "Protectrice de l'Amazonie : elle travaille pour qu'elle reste verte et pleine de vie." },
      quote: { es: "La selva nos regala aire: regalémosle nosotros cariño.", ca: "La selva ens regala aire: regalem-li nosaltres estima.", en: "The jungle gives us air: let us give it love in return.", cs: "Prales nám dává vzduch: dejme mu za to naši lásku.", fr: "La jungle nous offre de l'air : offrons-lui notre tendresse." } },
    { emoji: "🪶", year: "1992", color: "#ef6c00", name: { es: "Davi Kopenawa", ca: "Davi Kopenawa", en: "Davi Kopenawa", cs: "Davi Kopenawa", fr: "Davi Kopenawa" },
      achievement: { es: "Sabio del pueblo yanomami: enseña al mundo a escuchar a la selva.", ca: "Savi del poble yanomami: ensenya al món a escoltar la selva.", en: "Wise man of the Yanomami people: he teaches the world to listen to the jungle.", cs: "Mudrc lidu Yanomamů: učí svět naslouchat pralesu.", fr: "Sage du peuple yanomami : il apprend au monde à écouter la jungle." },
      quote: { es: "La selva no es nuestra: nosotros somos de la selva.", ca: "La selva no és nostra: nosaltres som de la selva.", en: "The jungle does not belong to us: we belong to the jungle.", cs: "Prales nepatří nám: my patříme pralesu.", fr: "La jungle ne nous appartient pas : c'est nous qui appartenons à la jungle." } }
  ],

  childDream: {
    girl: { es: "Exploradora de la selva", ca: "Exploradora de la selva", en: "Jungle explorer", cs: "Objevitelka pralesa", fr: "Exploratrice de la jungle" },
    boy: { es: "Explorador de la selva", ca: "Explorador de la selva", en: "Jungle explorer", cs: "Objevitel pralesa", fr: "Explorateur de la jungle" },
    kid: { es: "Peque de la selva", ca: "Explorador de la selva", en: "Jungle explorer", cs: "Průzkumník pralesa", fr: "Explore la jungle" }
  },
  childQuote: { es: "Cuando sea mayor navegaré por el Amazonas y saludaré a los delfines rosados. ¡Y plantaré árboles!", ca: "Quan sigui gran navegaré per l'Amazones i saludaré els dofins rosats. I plantaré arbres!", en: "When I grow up I will sail down the Amazon and wave at the pink dolphins. And I will plant trees!", cs: "Až vyrostu, popluju po Amazonce a pozdravím růžové delfíny. A budu sázet stromy!", fr: "Quand je serai grand, je naviguerai sur l'Amazone et je saluerai les dauphins roses. Et je planterai des arbres !" },

  /* ---------- MATES ---------- */
  mathEmojis: ["🦜", "🐆", "🦋", "🌺", "🐒", "🐸"],

  /* ---------- CONSTRUCTOR: la canoa del río ---------- */
  builder: {
    title: { es: "¡Construye tu canoa del río!", ca: "Construeix la teva canoa del riu!", en: "Build your river canoe!", cs: "Postav si říční kánoi!", fr: "Construis ton canoë de la rivière !" },
    thing: { es: "canoa", ca: "canoa", en: "canoe", cs: "kánoe", fr: "canoë" },
    parts: [
      { id: "body", label: { es: "Color de la canoa", ca: "Color de la canoa", en: "Canoe colour", cs: "Barva kánoe", fr: "Couleur du canoë" },
        options: [{ id: "clara", v: "#a1887f" }, { id: "caoba", v: "#8d6e63" }, { id: "nogal", v: "#6d4c41" }, { id: "miel", v: "#c49a6c" }] },
      { id: "proa", label: { es: "La proa con forma de animal", ca: "La proa amb forma d'animal", en: "The animal prow", cs: "Zvířecí příď", fr: "La proue en forme d'animal" },
        options: [{ id: "jaguar", v: "jaguar", icon: "🐆" }, { id: "guacamayo", v: "guacamayo", icon: "🦜" }, { id: "delfin", v: "delfin", icon: "🐬" }] },
      { id: "remo", label: { es: "El remo", ca: "El rem", en: "The paddle", cs: "Pádlo", fr: "La pagaie" },
        options: [{ id: "corto", v: "corto", icon: "🥄" }, { id: "largo", v: "largo", icon: "🏏" }, { id: "doble", v: "doble", icon: "⏸️" }] },
      { id: "estandarte", label: { es: "El estandarte", ca: "L'estendard", en: "The banner", cs: "Vlajka", fr: "L'étendard" },
        options: [{ id: "flor", v: "flor", icon: "🌺" }, { id: "pluma", v: "pluma", icon: "🪶" }, { id: "mariposa", v: "mariposa", icon: "🦋" }] }
    ],
    svg(sel) {
      const body = sel.body || "#a1887f";
      // la proa animal: siluetas sencillas (jaguar, guacamayo, delfín)
      let proaSym = `<g fill="#ffb300" stroke="#fff" stroke-width="1"><path d="M108.5 24.5 L107 18.5 L111.5 21.5 Z"/><path d="M119.5 24.5 L121 18.5 L116.5 21.5 Z"/><circle cx="114" cy="27" r="6"/></g>
          <circle cx="111.6" cy="26" r="1" fill="#3e2723"/><circle cx="116.4" cy="26" r="1" fill="#3e2723"/>
          <ellipse cx="114" cy="29.2" rx="1.4" ry="1" fill="#3e2723"/>
          <circle cx="110.5" cy="30" r=".8" fill="#6d4c41"/><circle cx="117.5" cy="30" r=".8" fill="#6d4c41"/><circle cx="114" cy="22.6" r=".8" fill="#6d4c41"/>`;
      if (sel.proa === "guacamayo") proaSym = `<path d="M112.5 32.8 L110.5 38 L114.8 34.2 Z" fill="#66bb6a"/>
          <ellipse cx="113.5" cy="28.5" rx="3.6" ry="4.8" fill="#42a5f5" stroke="#fff" stroke-width="1"/>
          <circle cx="115" cy="21.8" r="3.1" fill="#ef5350" stroke="#fff" stroke-width="1"/>
          <path d="M117.8 20.8 Q120.8 22 118.2 24.2 Z" fill="#ffca28"/>
          <circle cx="116" cy="21.2" r=".6" fill="#263238"/>`;
      if (sel.proa === "delfin") proaSym = `<path d="M113 20.8 L112 16 L116 19.6 Z" fill="#4fc3f7"/>
          <path d="M106.5 33.5 Q106.5 22.5 116 20.5 Q120.5 19.8 122 22.5 Q118.5 22.8 116.5 24.8 Q118.5 29.5 114 33 Q111.5 29.5 106.5 33.5 Z" fill="#4fc3f7" stroke="#fff" stroke-width="1"/>
          <circle cx="118.8" cy="22.3" r=".8" fill="#263238"/>`;
      // el estandarte: mini-siluetas (flor, pluma, mariposa)
      let bandSym = `<g fill="#ec407a"><circle cx="33" cy="23.2" r="2.5"/><circle cx="37.4" cy="26.4" r="2.5"/><circle cx="35.7" cy="31.4" r="2.5"/><circle cx="30.3" cy="31.4" r="2.5"/><circle cx="28.6" cy="26.4" r="2.5"/></g><circle cx="33" cy="27.6" r="2.3" fill="#ffd54f"/>`;
      if (sel.estandarte === "pluma") bandSym = `<path d="M28.5 33.5 Q28 23.5 36.5 20.5 Q37.5 28 31.5 33 Z" fill="#4fc3f7"/>
          <path d="M30 32.5 Q33 27.5 36 21.5" stroke="rgba(255,255,255,.7)" stroke-width="1" fill="none"/>`;
      if (sel.estandarte === "mariposa") bandSym = `<g fill="#ab47bc"><ellipse cx="30.2" cy="24.8" rx="2.9" ry="3.5" transform="rotate(-25 30.2 24.8)"/><ellipse cx="35.8" cy="24.8" rx="2.9" ry="3.5" transform="rotate(25 35.8 24.8)"/><ellipse cx="30.9" cy="30.6" rx="2.1" ry="2.6" transform="rotate(25 30.9 30.6)"/><ellipse cx="35.1" cy="30.6" rx="2.1" ry="2.6" transform="rotate(-25 35.1 30.6)"/></g><rect x="32.3" y="22.8" width="1.4" height="9.4" rx=".7" fill="#4e342e"/>`;
      let remo = `<g stroke="#5d4037" stroke-width="4" stroke-linecap="round"><line x1="66" y1="44" x2="82" y2="72"/></g><ellipse cx="85" cy="76" rx="7" ry="10" fill="#8d6e63" transform="rotate(30 85 76)"/>`;
      if (sel.remo === "largo") remo = `<g stroke="#5d4037" stroke-width="4" stroke-linecap="round"><line x1="58" y1="30" x2="86" y2="80"/></g><ellipse cx="89" cy="84" rx="7" ry="11" fill="#8d6e63" transform="rotate(30 89 84)"/>`;
      if (sel.remo === "doble") remo = `<g stroke="#5d4037" stroke-width="4" stroke-linecap="round"><line x1="48" y1="70" x2="94" y2="42"/></g><ellipse cx="45" cy="72" rx="6" ry="10" fill="#8d6e63" transform="rotate(60 45 72)"/><ellipse cx="97" cy="40" rx="6" ry="10" fill="#8d6e63" transform="rotate(60 97 40)"/>`;
      return `<svg viewBox="0 0 140 120" width="230" height="197">
        <ellipse cx="70" cy="100" rx="66" ry="16" fill="#7da453" opacity=".55"/>
        <g>
          <animateTransform attributeName="transform" type="rotate" values="-2 70 82;2 70 82;-2 70 82" dur="3.4s" repeatCount="indefinite"/>
          <line x1="38" y1="62" x2="38" y2="34" stroke="#5d4037" stroke-width="3.5" stroke-linecap="round"/>
          ${bandSym}
          ${remo}
          <path d="M18 66 Q70 92 122 66 L112 54 Q70 70 28 54 Z" fill="${body}" stroke="#fff" stroke-width="2"/>
          <path d="M112 54 Q123 46 118 34" stroke="${body}" stroke-width="6" fill="none" stroke-linecap="round"/>
          <path d="M28 62 Q70 76 112 62" stroke="rgba(0,0,0,.18)" stroke-width="3" fill="none"/>
          ${proaSym}
        </g>
        <path d="M8 96 Q22 90 36 96 Q50 102 64 96 Q78 90 92 96 Q106 102 120 96 Q128 92 134 96" stroke="#558b2f" stroke-width="4" fill="none" stroke-linecap="round">
          <animate attributeName="opacity" values="1;.5;1" dur="2.4s" repeatCount="indefinite"/>
        </path>
        <path d="M20 106 Q36 100 52 106 Q68 112 84 106 Q100 100 116 106" stroke="rgba(255,255,255,.5)" stroke-width="3" fill="none" stroke-linecap="round"/>
        <circle cx="20" cy="88" r="3" fill="#aed581"><animate attributeName="opacity" values="1;.3;1" dur="1.8s" repeatCount="indefinite"/></circle>
      </svg>`;
    }
  }
};
