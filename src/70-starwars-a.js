"use strict";
/* ============================================================
   Contenido de STAR WARS (parte A): registro del tema,
   quiz, alfabeto, famosos, mates y constructor de droides.
   ============================================================ */

THEMES.starwars = {
  emoji: "⚔️", ready: true,
  grad: "linear-gradient(150deg,#0d1b2e,#274690)",
  name: { es: "Star Wars", ca: "Star Wars", en: "Star Wars", cs: "Star Wars", fr: "Star Wars" }
};

THEMES.starwars.content = {

  statusPlace: { es: "Conectado desde una galaxia muy, muy lejana", ca: "Connectat des d'una galàxia molt, molt llunyana", en: "Connected from a galaxy far, far away", cs: "Připojeno z předaleké galaxie", fr: "Connecté depuis une galaxie lointaine, très lointaine" },
  welcome: { es: "¡Que la Fuerza te acompañe, {name}! Rumbo a una galaxia muy, muy lejana... ¡zum!", ca: "Que la Força t'acompanyi, {name}! Rumb a una galàxia molt, molt llunyana... zum!", en: "May the Force be with you, {name}! Off to a galaxy far, far away... zoom!", cs: "Ať tě provází Síla, {name}! Míříme do předaleké galaxie... zum!", fr: "Que la Force soit avec toi, {name} ! En route vers une galaxie lointaine, très lointaine... zoum !" },

  /* ---------- QUIZ: 10 preguntas ---------- */
  quiz: [
    { emoji: "💚",
      q: { es: "¿Quién es el maestro Jedi pequeñito y verde?", ca: "Qui és el mestre Jedi petitó i verd?", en: "Who is the tiny green Jedi master?", cs: "Kdo je ten malinký zelený mistr Jedi?", fr: "Qui est le tout petit maître Jedi vert ?" },
      options: [
        { es: "Yoda", ca: "Yoda", en: "Yoda", cs: "Yoda", fr: "Yoda" },
        { es: "Han Solo", ca: "Han Solo", en: "Han Solo", cs: "Han Solo", fr: "Han Solo" },
        { es: "Chewbacca", ca: "Chewbacca", en: "Chewbacca", cs: "Chewbacca", fr: "Chewbacca" },
        { es: "Leia", ca: "Leia", en: "Leia", cs: "Leia", fr: "Leia" }],
      answer: 0,
      explanation: { es: "Yoda es poco más alto que tú, ¡pero es el maestro más sabio de la galaxia! Y tiene 900 años.", ca: "Yoda és poc més alt que tu, però és el mestre més savi de la galàxia! I té 900 anys.", en: "Yoda is barely taller than you, but he is the wisest master in the galaxy! And he is 900 years old.", cs: "Yoda je jen o kousek větší než ty, ale je to nejmoudřejší mistr v galaxii! A je mu 900 let.", fr: "Yoda est à peine plus grand que toi, mais c'est le maître le plus sage de la galaxie ! Et il a 900 ans." } },
    { emoji: "🐻",
      q: { es: "¿De qué color es Chewbacca?", ca: "De quin color és Chewbacca?", en: "What colour is Chewbacca?", cs: "Jakou barvu má Chewbacca?", fr: "De quelle couleur est Chewbacca ?" },
      options: [
        { es: "Azul", ca: "Blau", en: "Blue", cs: "Modrou", fr: "Bleu" },
        { es: "Rosa", ca: "Rosa", en: "Pink", cs: "Růžovou", fr: "Rose" },
        { es: "Marrón", ca: "Marró", en: "Brown", cs: "Hnědou", fr: "Marron" },
        { es: "Verde", ca: "Verd", en: "Green", cs: "Zelenou", fr: "Vert" }],
      answer: 2,
      explanation: { es: "Chewbacca es un wookiee de pelo marrón. ¡Su abrazo es el más calentito de la galaxia!", ca: "Chewbacca és un wookiee de pèl marró. La seva abraçada és la més calentona de la galàxia!", en: "Chewbacca is a Wookiee with brown fur. His hug is the warmest in the galaxy!", cs: "Chewbacca je wookiee s hnědým kožichem. Jeho objetí je nejhřejivější v celé galaxii!", fr: "Chewbacca est un Wookiee au poil marron. Son câlin est le plus chaud de la galaxie !" } },
    { emoji: "🛸",
      q: { es: "¿Cómo se llama la nave de Han Solo y Chewbacca?", ca: "Com es diu la nau de Han Solo i Chewbacca?", en: "What is Han Solo and Chewbacca's ship called?", cs: "Jak se jmenuje loď Hana Sola a Chewbaccy?", fr: "Comment s'appelle le vaisseau de Han Solo et Chewbacca ?" },
      options: [
        { es: "La Tortuga Veloz", ca: "La Tortuga Ràpida", en: "The Speedy Turtle", cs: "Rychlá želva", fr: "La Tortue Rapide" },
        { es: "El Halcón Milenario", ca: "El Falcó Mil·lenari", en: "The Millennium Falcon", cs: "Millennium Falcon", fr: "Le Faucon Millenium" },
        { es: "La Estrella Fugaz", ca: "L'Estel Fugaç", en: "The Shooting Star", cs: "Padající hvězda", fr: "L'Étoile Filante" },
        { es: "El Cohete Rojo", ca: "El Coet Vermell", en: "The Red Rocket", cs: "Červená raketa", fr: "La Fusée Rouge" }],
      answer: 1,
      explanation: { es: "El Halcón Milenario parece un trasto viejo, ¡pero es la nave más rápida de la galaxia!", ca: "El Falcó Mil·lenari sembla un trasto vell, però és la nau més ràpida de la galàxia!", en: "The Millennium Falcon looks like a piece of junk, but it is the fastest ship in the galaxy!", cs: "Millennium Falcon vypadá jako stará kraksna, ale je to nejrychlejší loď v galaxii!", fr: "Le Faucon Millenium ressemble à un vieux tas de ferraille, mais c'est le vaisseau le plus rapide de la galaxie !" } },
    { emoji: "✨",
      q: { es: "¿Qué se dicen los amigos Jedi para desearse suerte?", ca: "Què es diuen els amics Jedi per desitjar-se sort?", en: "What do Jedi friends say to wish each other luck?", cs: "Co si přátelé Jedi říkají pro štěstí?", fr: "Que se disent les amis Jedi pour se souhaiter bonne chance ?" },
      options: [
        { es: "¡Buenas noches!", ca: "Bona nit!", en: "Good night!", cs: "Dobrou noc!", fr: "Bonne nuit !" },
        { es: "¡Que la Fuerza te acompañe!", ca: "Que la Força t'acompanyi!", en: "May the Force be with you!", cs: "Ať tě provází Síla!", fr: "Que la Force soit avec toi !" },
        { es: "¡Feliz cumpleaños!", ca: "Per molts anys!", en: "Happy birthday!", cs: "Všechno nejlepší!", fr: "Joyeux anniversaire !" },
        { es: "¡Hasta luego, cocodrilo!", ca: "Fins després, cocodril!", en: "See you later, alligator!", cs: "Zatím ahoj, krokodýle!", fr: "À plus tard, crocodile !" }],
      answer: 1,
      explanation: { es: "Que la Fuerza te acompañe es la manera Jedi de decir: te deseo lo mejor, amigo.", ca: "Que la Força t'acompanyi és la manera Jedi de dir: et desitjo el millor, amic.", en: "May the Force be with you is the Jedi way of saying: I wish you the very best, friend.", cs: "Ať tě provází Síla je rytířský způsob, jak říct: přeju ti to nejlepší, kamaráde.", fr: "Que la Force soit avec toi, c'est la façon Jedi de dire : je te souhaite le meilleur, mon ami." } },
    { emoji: "⚪",
      q: { es: "¿Qué droide es redondo y rueda como una pelota?", ca: "Quin droide és rodó i roda com una pilota?", en: "Which droid is round and rolls like a ball?", cs: "Který droid je kulatý a koulí se jako míč?", fr: "Quel droïde est rond et roule comme un ballon ?" },
      options: [
        { es: "C-3PO", ca: "C-3PO", en: "C-3PO", cs: "C-3PO", fr: "C-3PO" },
        { es: "R2-D2", ca: "R2-D2", en: "R2-D2", cs: "R2-D2", fr: "R2-D2" },
        { es: "BB-8", ca: "BB-8", en: "BB-8", cs: "BB-8", fr: "BB-8" },
        { es: "Un tostador", ca: "Una torradora", en: "A toaster", cs: "Toustovač", fr: "Un grille-pain" }],
      answer: 2,
      explanation: { es: "BB-8 tiene el cuerpo como una pelota y rueda rapidísimo por la arena.", ca: "BB-8 té el cos com una pilota i roda rapidíssim per la sorra.", en: "BB-8 has a body like a ball and rolls super fast across the sand.", cs: "BB-8 má tělo jako míč a po písku se koulí opravdu rychle.", fr: "BB-8 a un corps comme un ballon et roule très vite sur le sable." } },
    { emoji: "⚔️",
      q: { es: "¿De qué está hecho un sable Jedi?", ca: "De què està fet un sabre Jedi?", en: "What is a Jedi saber made of?", cs: "Z čeho je meč rytířů Jedi?", fr: "En quoi est fait un sabre Jedi ?" },
      options: [
        { es: "De chocolate", ca: "De xocolata", en: "Of chocolate", cs: "Z čokolády", fr: "En chocolat" },
        { es: "De madera", ca: "De fusta", en: "Of wood", cs: "Ze dřeva", fr: "En bois" },
        { es: "De agua", ca: "D'aigua", en: "Of water", cs: "Z vody", fr: "En eau" },
        { es: "De luz", ca: "De llum", en: "Of light", cs: "Ze světla", fr: "En lumière" }],
      answer: 3,
      explanation: { es: "Es un sable de luz: brilla, hace zum-zum y cada Jedi construye el suyo.", ca: "És un sabre de llum: brilla, fa zum-zum i cada Jedi construeix el seu.", en: "It is a lightsaber: it glows, goes zoom-zoom, and every Jedi builds their own.", cs: "Je to světelný meč: září, dělá zum-zum a každý Jedi si staví svůj vlastní.", fr: "C'est un sabre laser : il brille, fait zoum-zoum, et chaque Jedi construit le sien." } },
    { emoji: "🤖",
      q: { es: "¿Cómo habla R2-D2?", ca: "Com parla R2-D2?", en: "How does R2-D2 talk?", cs: "Jak mluví R2-D2?", fr: "Comment parle R2-D2 ?" },
      options: [
        { es: "Con bips y bops", ca: "Amb bips i bops", en: "With beeps and bops", cs: "Pípáním: píp a bop", fr: "Avec des bips et des bops" },
        { es: "En francés", ca: "En francès", en: "In French", cs: "Francouzsky", fr: "En français" },
        { es: "Rugiendo", ca: "Rugint", en: "Roaring", cs: "Vrčením", fr: "En rugissant" },
        { es: "Cantando ópera", ca: "Cantant òpera", en: "Singing opera", cs: "Zpívá operu", fr: "En chantant l'opéra" }],
      answer: 0,
      explanation: { es: "R2-D2 habla en idioma droide: bip, bop, biiip. ¡Y sus amigos lo entienden todo!", ca: "R2-D2 parla en idioma droide: bip, bop, biiip. I els seus amics ho entenen tot!", en: "R2-D2 speaks droid language: beep, bop, beeep. And his friends understand everything!", cs: "R2-D2 mluví droidí řečí: píp, bop, bíííp. A kamarádi mu rozumějí úplně všechno!", fr: "R2-D2 parle la langue des droïdes : bip, bop, biiip. Et ses amis comprennent tout !" } },
    { emoji: "👑",
      q: { es: "¿Quién es la princesa valiente de la rebelión?", ca: "Qui és la princesa valenta de la rebel·lió?", en: "Who is the brave princess of the rebellion?", cs: "Kdo je ta statečná princezna rebelů?", fr: "Qui est la princesse courageuse de la rébellion ?" },
      options: [
        { es: "Rey", ca: "Rey", en: "Rey", cs: "Rey", fr: "Rey" },
        { es: "Leia", ca: "Leia", en: "Leia", cs: "Leia", fr: "Leia" },
        { es: "Padmé", ca: "Padmé", en: "Padmé", cs: "Padmé", fr: "Padmé" },
        { es: "La Cenicienta", ca: "La Ventafocs", en: "Cinderella", cs: "Popelka", fr: "Cendrillon" }],
      answer: 1,
      explanation: { es: "La princesa Leia es lista y valiente, y lleva dos moños como caracolas.", ca: "La princesa Leia és llesta i valenta, i porta dos monyos com cargols de mar.", en: "Princess Leia is clever and brave, and wears two buns like seashells.", cs: "Princezna Leia je chytrá a statečná a nosí dva drdoly jako ulity.", fr: "La princesse Leia est maligne et courageuse, et porte deux chignons comme des coquillages." } },
    { emoji: "🌲",
      q: { es: "¿Dónde viven los ewoks?", ca: "On viuen els ewoks?", en: "Where do the Ewoks live?", cs: "Kde bydlí ewokové?", fr: "Où vivent les Ewoks ?" },
      options: [
        { es: "En el desierto", ca: "Al desert", en: "In the desert", cs: "V poušti", fr: "Dans le désert" },
        { es: "En la nieve", ca: "A la neu", en: "In the snow", cs: "Ve sněhu", fr: "Dans la neige" },
        { es: "En los árboles del bosque", ca: "Als arbres del bosc", en: "In the forest trees", cs: "V korunách stromů", fr: "Dans les arbres de la forêt" },
        { es: "En el mar", ca: "Al mar", en: "In the sea", cs: "V moři", fr: "Dans la mer" }],
      answer: 2,
      explanation: { es: "Los ewoks viven en casitas en los árboles de Endor, unidas con puentes de cuerda.", ca: "Els ewoks viuen en casetes als arbres d'Endor, unides amb ponts de corda.", en: "The Ewoks live in little tree houses on Endor, joined by rope bridges.", cs: "Ewokové bydlí v domečcích na stromech na Endoru, spojených lanovými mosty.", fr: "Les Ewoks vivent dans des petites maisons dans les arbres d'Endor, reliées par des ponts de corde." } },
    { emoji: "❄️",
      q: { es: "¿Qué planeta está cubierto de nieve y hielo?", ca: "Quin planeta està cobert de neu i gel?", en: "Which planet is covered in snow and ice?", cs: "Která planeta je celá pokrytá sněhem a ledem?", fr: "Quelle planète est couverte de neige et de glace ?" },
      options: [
        { es: "Tatooine", ca: "Tatooine", en: "Tatooine", cs: "Tatooine", fr: "Tatooine" },
        { es: "Hoth", ca: "Hoth", en: "Hoth", cs: "Hoth", fr: "Hoth" },
        { es: "Endor", ca: "Endor", en: "Endor", cs: "Endor", fr: "Endor" },
        { es: "Naboo", ca: "Naboo", en: "Naboo", cs: "Naboo", fr: "Naboo" }],
      answer: 1,
      explanation: { es: "Hoth es tan frío que hasta las naves duermen tapadas con mantas.", ca: "Hoth és tan fred que fins i tot les naus dormen tapades amb mantes.", en: "Hoth is so cold that even the ships sleep under blankets.", cs: "Na Hothu je taková zima, že i lodě spí přikryté dekami.", fr: "Hoth est si froide que même les vaisseaux dorment sous des couvertures." } },
    { emoji: "🏜️",
      q: { es: "¿Qué planeta del desierto tiene dos soles en el cielo?", ca: "Quin planeta del desert té dos sols al cel?", en: "Which desert planet has two suns in the sky?", cs: "Která pouštní planeta má na obloze dvě slunce?", fr: "Quelle planète du désert a deux soleils dans le ciel ?" },
      options: [
        { es: "Naboo", ca: "Naboo", en: "Naboo", cs: "Naboo", fr: "Naboo" },
        { es: "Endor", ca: "Endor", en: "Endor", cs: "Endor", fr: "Endor" },
        { es: "Tatooine", ca: "Tatooine", en: "Tatooine", cs: "Tatooine", fr: "Tatooine" },
        { es: "Kashyyyk", ca: "Kashyyyk", en: "Kashyyyk", cs: "Kashyyyk", fr: "Kashyyyk" }],
      answer: 2,
      explanation: { es: "En Tatooine los atardeceres son dobles: ¡dos soles que se esconden a la vez! Allí crecieron Anakin y Luke.", ca: "A Tatooine els capvespres són dobles: dos sols que s'amaguen alhora! Allà van créixer Anakin i Luke.", en: "On Tatooine sunsets are double: two suns setting at the same time! Anakin and Luke both grew up there.", cs: "Na Tatooine jsou západy slunce dvojité: dvě slunce zapadají najednou! Vyrostli tam Anakin i Luke.", fr: "Sur Tatooine, les couchers de soleil sont doubles : deux soleils qui se cachent en même temps ! Anakin et Luke y ont grandi." } },
    { emoji: "🗣️",
      q: { es: "¿Qué sabe hacer el droide dorado C-3PO?", ca: "Què sap fer el droide daurat C-3PO?", en: "What can the golden droid C-3PO do?", cs: "Co umí zlatý droid C-3PO?", fr: "Que sait faire le droïde doré C-3PO ?" },
      options: [
        { es: "Hablar millones de idiomas", ca: "Parlar milions d'idiomes", en: "Speak millions of languages", cs: "Mluvit miliony jazyků", fr: "Parler des millions de langues" },
        { es: "Hacer tortillas", ca: "Fer truites", en: "Make omelettes", cs: "Smažit omelety", fr: "Faire des omelettes" },
        { es: "Volar como un pájaro", ca: "Volar com un ocell", en: "Fly like a bird", cs: "Létat jako pták", fr: "Voler comme un oiseau" },
        { es: "Convertirse en coche", ca: "Convertir-se en cotxe", en: "Turn into a car", cs: "Proměnit se v auto", fr: "Se transformer en voiture" }],
      answer: 0,
      explanation: { es: "C-3PO conoce más de seis millones de formas de comunicación. Es educadísimo y traduce hasta los bips de R2-D2.", ca: "C-3PO coneix més de sis milions de formes de comunicació. És educadíssim i tradueix fins i tot els bips de R2-D2.", en: "C-3PO knows more than six million forms of communication. He is super polite and even translates R2-D2's beeps.", cs: "C-3PO zná přes šest milionů způsobů komunikace. Je nesmírně zdvořilý a překládá i pípání R2-D2.", fr: "C-3PO connaît plus de six millions de formes de communication. Il est très poli et traduit même les bips de R2-D2." } },
    { emoji: "👶",
      q: { es: "¿Quién cuida de Grogu, el pequeñín de orejas verdes?", ca: "Qui cuida de Grogu, el menut d'orelles verdes?", en: "Who takes care of Grogu, the little one with green ears?", cs: "Kdo se stará o Grogua, toho drobečka se zelenýma ušima?", fr: "Qui prend soin de Grogu, le petit aux oreilles vertes ?" },
      options: [
        { es: "Un dragón", ca: "Un drac", en: "A dragon", cs: "Drak", fr: "Un dragon" },
        { es: "El Mandaloriano", ca: "El Mandalorià", en: "The Mandalorian", cs: "Mandalorian", fr: "Le Mandalorien" },
        { es: "Un pulpo espacial", ca: "Un pop espacial", en: "A space octopus", cs: "Vesmírná chobotnice", fr: "Une pieuvre de l'espace" },
        { es: "Nadie, vive solo", ca: "Ningú, viu sol", en: "Nobody, he lives alone", cs: "Nikdo, žije sám", fr: "Personne, il vit seul" }],
      answer: 1,
      explanation: { es: "El Mandaloriano lo protege como un papá y viajan juntos por la galaxia. Grogu tiene 50 años, ¡pero aún es un bebé!", ca: "El Mandalorià el protegeix com un papa i viatgen junts per la galàxia. Grogu té 50 anys, però encara és un nadó!", en: "The Mandalorian protects him like a dad and they travel the galaxy together. Grogu is 50 years old, but he is still a baby!", cs: "Mandalorian ho chrání jako táta a cestují spolu galaxií. Groguovi je 50 let, ale pořád je to miminko!", fr: "Le Mandalorien le protège comme un papa et ils voyagent ensemble dans la galaxie. Grogu a 50 ans, mais c'est encore un bébé !" } },
    { emoji: "🧘",
      q: { es: "¿Qué usan los Jedi para mover cosas sin tocarlas?", ca: "Què fan servir els Jedi per moure coses sense tocar-les?", en: "What do Jedi use to move things without touching them?", cs: "Čím rytíři Jedi hýbou věcmi, aniž by se jich dotkli?", fr: "Qu'utilisent les Jedi pour déplacer des objets sans les toucher ?" },
      options: [
        { es: "Un imán gigante", ca: "Un imant gegant", en: "A giant magnet", cs: "Obřím magnetem", fr: "Un aimant géant" },
        { es: "Cuerdas invisibles", ca: "Cordes invisibles", en: "Invisible strings", cs: "Neviditelnými provázky", fr: "Des ficelles invisibles" },
        { es: "Un ventilador", ca: "Un ventilador", en: "A fan", cs: "Větrákem", fr: "Un ventilateur" },
        { es: "La Fuerza", ca: "La Força", en: "The Force", cs: "Sílou", fr: "La Force" }],
      answer: 3,
      explanation: { es: "Con la Fuerza y mucha concentración: el maestro Yoda llegó a levantar una nave entera de un pantano. Lo importante no es el tamaño, ¡es creer!", ca: "Amb la Força i molta concentració: el mestre Yoda va arribar a aixecar una nau sencera d'un pantà. L'important no és la mida, és creure-hi!", en: "With the Force and lots of focus: Master Yoda once lifted a whole ship out of a swamp. Size does not matter, believing does!", cs: "Silou a velkým soustředěním: mistr Yoda dokázal zvednout z bažiny celou loď. Na velikosti nezáleží, důležité je věřit!", fr: "Avec la Force et beaucoup de concentration : maître Yoda a soulevé tout un vaisseau hors d'un marais. La taille ne compte pas, il faut y croire !" } },
    { emoji: "🏙️",
      q: { es: "¿Qué planeta está cubierto entero por una ciudad gigante?", ca: "Quin planeta està cobert del tot per una ciutat gegant?", en: "Which planet is completely covered by one giant city?", cs: "Která planeta je celá pokrytá jedním obrovským městem?", fr: "Quelle planète est entièrement couverte par une ville géante ?" },
      options: [
        { es: "Coruscant", ca: "Coruscant", en: "Coruscant", cs: "Coruscant", fr: "Coruscant" },
        { es: "Hoth", ca: "Hoth", en: "Hoth", cs: "Hoth", fr: "Hoth" },
        { es: "Endor", ca: "Endor", en: "Endor", cs: "Endor", fr: "Endor" },
        { es: "Tatooine", ca: "Tatooine", en: "Tatooine", cs: "Tatooine", fr: "Tatooine" }],
      answer: 0,
      explanation: { es: "Coruscant es una ciudad que cubre el planeta entero, con edificios altísimos y naves volando como coches. ¡Allí estaba el gran templo de los Jedi!", ca: "Coruscant és una ciutat que cobreix el planeta sencer, amb edificis altíssims i naus volant com cotxes. Allà hi havia el gran temple dels Jedi!", en: "Coruscant is a city covering the whole planet, with super tall buildings and ships flying around like cars. The great Jedi temple was there!", cs: "Coruscant je město pokrývající celou planetu, s převysokými budovami a loděmi létajícími jako auta. Stál tam velký chrám rytířů Jedi!", fr: "Coruscant est une ville qui couvre la planète entière, avec des immeubles très hauts et des vaisseaux qui volent comme des voitures. Le grand temple des Jedi était là !" } }
  ],

  /* ---------- ALFABETO: 26 letras ---------- */
  alphabet: [
    { letter: "A", emoji: "👦", item: { es: "Anakin", ca: "Anakin", en: "Anakin", cs: "Anakin", fr: "Anakin" },
      fact: { es: "Anakin ya pilotaba naves de carreras cuando era un niño pequeño.", ca: "Anakin ja pilotava naus de carreres quan era un nen petit.", en: "Anakin was already flying racing ships when he was a little boy.", cs: "Anakin řídil závodní kluzáky, už když byl malý kluk.", fr: "Anakin pilotait déjà des vaisseaux de course quand il était petit garçon." } },
    { letter: "B", emoji: "⚪", item: { es: "BB-8", ca: "BB-8", en: "BB-8", cs: "BB-8", fr: "BB-8" },
      fact: { es: "BB-8 es un droide con cuerpo de pelota que rueda por la arena.", ca: "BB-8 és un droide amb cos de pilota que roda per la sorra.", en: "BB-8 is a droid with a ball for a body that rolls across the sand.", cs: "BB-8 je droid s tělem jako míč, který se koulí po písku.", fr: "BB-8 est un droïde au corps de ballon qui roule sur le sable." } },
    { letter: "C", emoji: "🐻", item: { es: "Chewbacca", ca: "Chewbacca", en: "Chewbacca", cs: "Chewbacca", fr: "Chewbacca" },
      fact: { es: "Chewbacca es un wookiee gigante y peludo que da los mejores abrazos.", ca: "Chewbacca és un wookiee gegant i pelut que fa les millors abraçades.", en: "Chewbacca is a giant furry Wookiee who gives the best hugs.", cs: "Chewbacca je obrovský chlupatý wookiee, který umí nejlépe objímat.", fr: "Chewbacca est un Wookiee géant et poilu qui fait les meilleurs câlins." } },
    { letter: "D", emoji: "🤖", item: { es: "Droide", ca: "Droide", en: "Droid", cs: "Droid", fr: "Droïde" },
      fact: { es: "Los droides son robots ayudantes: unos hablan y otros hacen bip bop.", ca: "Els droides són robots ajudants: uns parlen i altres fan bip bop.", en: "Droids are helper robots: some of them talk and some go beep bop.", cs: "Droidi jsou roboti pomocníci: někteří mluví a jiní dělají píp bop.", fr: "Les droïdes sont des robots assistants : certains parlent et d'autres font bip bop." } },
    { letter: "E", emoji: "🧸", item: { es: "Ewok", ca: "Ewok", en: "Ewok", cs: "Ewok", fr: "Ewok" },
      fact: { es: "Los ewoks parecen ositos de peluche y viven en los árboles.", ca: "Els ewoks semblen ossets de peluix i viuen als arbres.", en: "Ewoks look like teddy bears and live up in the trees.", cs: "Ewokové vypadají jako plyšoví medvídci a bydlí na stromech.", fr: "Les Ewoks ressemblent à des oursons en peluche et vivent dans les arbres." } },
    { letter: "F", emoji: "🦸", item: { es: "Finn", ca: "Finn", en: "Finn", cs: "Finn", fr: "Finn" },
      fact: { es: "Finn decidió ser bueno y se convirtió en héroe. ¡Siempre puedes elegir!", ca: "Finn va decidir ser bo i es va convertir en heroi. Sempre pots triar!", en: "Finn decided to be good and became a hero. You can always choose!", cs: "Finn se rozhodl být hodný a stal se hrdinou. Vždycky si můžeš vybrat!", fr: "Finn a décidé d'être bon et il est devenu un héros. Tu peux toujours choisir !" } },
    { letter: "G", emoji: "👶", item: { es: "Grogu", ca: "Grogu", en: "Grogu", cs: "Grogu", fr: "Grogu" },
      fact: { es: "Grogu tiene 50 años, ¡pero todavía es un bebé de la especie de Yoda!", ca: "Grogu té 50 anys, però encara és un nadó de l'espècie de Yoda!", en: "Grogu is 50 years old, but he is still a baby of Yoda's kind!", cs: "Groguovi je 50 let, ale pořád je to miminko stejného druhu jako Yoda!", fr: "Grogu a 50 ans, mais c'est encore un bébé de l'espèce de Yoda !" } },
    { letter: "H", emoji: "😎", item: { es: "Han Solo", ca: "Han Solo", en: "Han Solo", cs: "Han Solo", fr: "Han Solo" },
      fact: { es: "Han Solo pilota el Halcón Milenario, la nave más rápida de la galaxia.", ca: "Han Solo pilota el Falcó Mil·lenari, la nau més ràpida de la galàxia.", en: "Han Solo flies the Millennium Falcon, the fastest ship in the galaxy.", cs: "Han Solo pilotuje Millennium Falcon, nejrychlejší loď v galaxii.", fr: "Han Solo pilote le Faucon Millenium, le vaisseau le plus rapide de la galaxie." } },
    { letter: "I", emoji: "🦾", item: { es: "IG-11", ca: "IG-11", en: "IG-11", cs: "IG-11", fr: "IG-11" },
      fact: { es: "IG-11 era un droide muy serio que acabó siendo la niñera de Grogu.", ca: "IG-11 era un droide molt seriós que va acabar sent el mainader de Grogu.", en: "IG-11 was a very serious droid who ended up being Grogu's nanny.", cs: "IG-11 byl velmi vážný droid, ze kterého se stala chůva malého Grogua.", fr: "IG-11 était un droïde très sérieux qui a fini nounou de Grogu." } },
    { letter: "J", emoji: "🧘", item: { es: "Jedi", ca: "Jedi", en: "Jedi", cs: "Jedi", fr: "Jedi" },
      fact: { es: "Los Jedi entrenan cada día para ser tranquilos, valientes y amables.", ca: "Els Jedi entrenen cada dia per ser tranquils, valents i amables.", en: "Jedi train every day to be calm, brave and kind.", cs: "Rytíři Jedi každý den trénují klid, odvahu a laskavost.", fr: "Les Jedi s'entraînent chaque jour à être calmes, courageux et gentils." } },
    { letter: "K", emoji: "🌳", item: { es: "Kashyyyk", ca: "Kashyyyk", en: "Kashyyyk", cs: "Kashyyyk", fr: "Kashyyyk" },
      fact: { es: "Kashyyyk es el planeta de los wookiees, con árboles altos como montañas.", ca: "Kashyyyk és el planeta dels wookiees, amb arbres alts com muntanyes.", en: "Kashyyyk is the Wookiee planet, with trees as tall as mountains.", cs: "Kashyyyk je planeta wookieeů se stromy vysokými jako hory.", fr: "Kashyyyk est la planète des Wookiees, avec des arbres hauts comme des montagnes." } },
    { letter: "L", emoji: "🌅", item: { es: "Luke", ca: "Luke", en: "Luke", cs: "Luke", fr: "Luke" },
      fact: { es: "Luke era un niño de granja que miraba dos soles y soñaba con volar.", ca: "Luke era un nen de granja que mirava dos sols i somiava a volar.", en: "Luke was a farm boy who watched two suns and dreamed of flying.", cs: "Luke byl kluk z farmy, který se díval na dvě slunce a snil o létání.", fr: "Luke était un garçon de ferme qui regardait deux soleils et rêvait de voler." } },
    { letter: "M", emoji: "🪖", item: { es: "Mandaloriano", ca: "Mandalorià", en: "Mandalorian", cs: "Mandalorian", fr: "Mandalorien" },
      fact: { es: "El Mandaloriano lleva armadura brillante y cuida de Grogu como un papá.", ca: "El Mandalorià porta armadura brillant i cuida de Grogu com un papa.", en: "The Mandalorian wears shiny armour and looks after Grogu like a dad.", cs: "Mandalorian nosí lesklé brnění a stará se o Grogua jako táta.", fr: "Le Mandalorien porte une armure brillante et s'occupe de Grogu comme un papa." } },
    { letter: "N", emoji: "🏞️", item: { es: "Naboo", ca: "Naboo", en: "Naboo", cs: "Naboo", fr: "Naboo" },
      fact: { es: "Naboo tiene cascadas gigantes y una ciudad debajo del agua.", ca: "Naboo té cascades gegants i una ciutat sota l'aigua.", en: "Naboo has giant waterfalls and a city under the water.", cs: "Na Naboo jsou obří vodopády a jedno město pod vodou.", fr: "Naboo a des cascades géantes et une ville sous l'eau." } },
    { letter: "O", emoji: "🧔", item: { es: "Obi-Wan", ca: "Obi-Wan", en: "Obi-Wan", cs: "Obi-Wan", fr: "Obi-Wan" },
      fact: { es: "Obi-Wan es un caballero Jedi sabio, maestro de Anakin y de Luke.", ca: "Obi-Wan és un cavaller Jedi savi, mestre d'Anakin i de Luke.", en: "Obi-Wan is a wise Jedi knight, teacher of Anakin and Luke.", cs: "Obi-Wan je moudrý rytíř Jedi, učitel Anakina i Luka.", fr: "Obi-Wan est un chevalier Jedi sage, maître d'Anakin et de Luke." } },
    { letter: "P", emoji: "🐧", item: { es: "Porg", ca: "Porg", en: "Porg", cs: "Porg", fr: "Porg" },
      fact: { es: "Los porgs son pajaritos redondos de ojos enormes. ¡Hacen nidos en las naves!", ca: "Els porgs són ocellets rodons d'ulls enormes. Fan nius a les naus!", en: "Porgs are round little birds with huge eyes. They build nests inside ships!", cs: "Porgové jsou kulatí ptáčci s obrovskýma očima. Staví si hnízda i v lodích!", fr: "Les porgs sont des petits oiseaux ronds aux yeux énormes. Ils font des nids dans les vaisseaux !" } },
    { letter: "Q", emoji: "🧙", item: { es: "Qui-Gon", ca: "Qui-Gon", en: "Qui-Gon", cs: "Qui-Gon", fr: "Qui-Gon" },
      fact: { es: "Qui-Gon fue el maestro de Obi-Wan: tranquilo, sabio y un poquito rebelde.", ca: "Qui-Gon va ser el mestre d'Obi-Wan: tranquil, savi i una miqueta rebel.", en: "Qui-Gon was Obi-Wan's teacher: calm, wise and a tiny bit rebellious.", cs: "Qui-Gon byl učitel Obi-Wana: klidný, moudrý a trochu rošťák.", fr: "Qui-Gon était le maître d'Obi-Wan : calme, sage et un petit peu rebelle." } },
    { letter: "R", emoji: "🔵", item: { es: "R2-D2", ca: "R2-D2", en: "R2-D2", cs: "R2-D2", fr: "R2-D2" },
      fact: { es: "R2-D2 es un droide pequeño y valiente que siempre salva a sus amigos.", ca: "R2-D2 és un droide petit i valent que sempre salva els seus amics.", en: "R2-D2 is a small, brave droid who always saves his friends.", cs: "R2-D2 je malý statečný droid, který vždycky zachrání své přátele.", fr: "R2-D2 est un petit droïde courageux qui sauve toujours ses amis." } },
    { letter: "S", emoji: "⚔️", item: { es: "Sable de luz", ca: "Sabre de llum", en: "Saber", cs: "Světelný meč", fr: "Sabre laser" },
      fact: { es: "El sable de luz hace zum-zum y cada color es especial.", ca: "El sabre de llum fa zum-zum i cada color és especial.", en: "The lightsaber goes zoom-zoom and every colour is special.", cs: "Světelný meč dělá zum-zum a každá barva je něčím výjimečná.", fr: "Le sabre laser fait zoum-zoum et chaque couleur est spéciale." } },
    { letter: "T", emoji: "🏜️", item: { es: "Tatooine", ca: "Tatooine", en: "Tatooine", cs: "Tatooine", fr: "Tatooine" },
      fact: { es: "Tatooine es un desierto con dos soles: ¡tu sombra tiene una gemela!", ca: "Tatooine és un desert amb dos sols: la teva ombra té una bessona!", en: "Tatooine is a desert with two suns: your shadow has a twin!", cs: "Tatooine je poušť se dvěma slunci: tvůj stín tam má dvojče!", fr: "Tatooine est un désert avec deux soleils : ton ombre a une jumelle !" } },
    { letter: "U", emoji: "📣", item: { es: "Utinni", ca: "Utinni", en: "Utinni", cs: "Utinni", fr: "Utinni" },
      fact: { es: "¡Utinni! es lo que gritan los jawas cuando encuentran un tesoro.", ca: "Utinni! és el que criden els jawes quan troben un tresor.", en: "Utinni! is what the Jawas shout when they find a treasure.", cs: "Utinni! křičí Jawové, když najdou poklad.", fr: "Utinni ! c'est ce que crient les Jawas quand ils trouvent un trésor." } },
    { letter: "V", emoji: "🖤", item: { es: "Darth Vader", ca: "Darth Vader", en: "Darth Vader", cs: "Darth Vader", fr: "Dark Vador" },
      fact: { es: "Vader lleva un casco negro y respira fuerte... pero al final el cariño gana.", ca: "Vader porta un casc negre i respira fort... però al final l'estima guanya.", en: "Vader wears a black helmet and breathes loudly... but in the end, love wins.", cs: "Vader nosí černou helmu a hlasitě dýchá... ale nakonec vyhraje láska.", fr: "Vador porte un casque noir et respire fort... mais à la fin, l'amour gagne." } },
    { letter: "W", emoji: "🐾", item: { es: "Wookiee", ca: "Wookiee", en: "Wookiee", cs: "Wookiee", fr: "Wookiee" },
      fact: { es: "Los wookiees son gigantes peludos de gran corazón. ¡Grrrau significa hola!", ca: "Els wookiees són gegants peluts de gran cor. Grrrau vol dir hola!", en: "Wookiees are furry giants with big hearts. Grrrau means hello!", cs: "Wookieeové jsou chlupatí obři s velkým srdcem. Grrrau znamená ahoj!", fr: "Les Wookiees sont des géants poilus au grand cœur. Grrrau veut dire bonjour !" } },
    { letter: "X", emoji: "✈️", item: { es: "Ala-X", ca: "Ala-X", en: "X-wing", cs: "X-wing", fr: "X-wing" },
      fact: { es: "El Ala-X abre sus alas en forma de X cuando vuela a toda velocidad.", ca: "L'Ala-X obre les ales en forma de X quan vola a tota velocitat.", en: "The X-wing opens its wings into an X shape when it flies at full speed.", cs: "X-wing roztáhne křídla do tvaru X, když letí plnou rychlostí.", fr: "Le X-wing ouvre ses ailes en forme de X quand il vole à toute vitesse." } },
    { letter: "Y", emoji: "💚", item: { es: "Yoda", ca: "Yoda", en: "Yoda", cs: "Yoda", fr: "Yoda" },
      fact: { es: "Yoda tiene 900 años y habla al revés: mucho que aprender tú tienes.", ca: "Yoda té 900 anys i parla al revés: molt per aprendre tu tens.", en: "Yoda is 900 years old and talks backwards: much to learn you have.", cs: "Yodovi je 900 let a mluví pozpátku: hodně se učit ještě musíš.", fr: "Yoda a 900 ans et parle à l'envers : beaucoup à apprendre tu as." } },
    { letter: "Z", emoji: "⚡", item: { es: "Zum-zum", ca: "Zum-zum", en: "Zoom-zoom", cs: "Zum-zum", fr: "Zoum-zoum" },
      fact: { es: "Zum-zum es el sonido del sable de luz al moverse. ¡Pruébalo con el brazo!", ca: "Zum-zum és el so del sabre de llum en moure's. Prova-ho amb el braç!", en: "Zoom-zoom is the sound a lightsaber makes when it moves. Try it with your arm!", cs: "Zum-zum dělá světelný meč, když se s ním mává. Zkus to rukou!", fr: "Zoum-zoum, c'est le son du sabre laser quand il bouge. Essaie avec ton bras !" } }
  ],

  /* ---------- FAMOSOS ---------- */
  famous: [
    { emoji: "🌅", year: "1977", color: "#42a5f5", name: { es: "Luke Skywalker", ca: "Luke Skywalker", en: "Luke Skywalker", cs: "Luke Skywalker", fr: "Luke Skywalker" },
      achievement: { es: "De niño de granja a caballero Jedi: salvó la galaxia.", ca: "De nen de granja a cavaller Jedi: va salvar la galàxia.", en: "From farm boy to Jedi knight: he saved the galaxy.", cs: "Z kluka z farmy se stal rytíř Jedi a zachránil galaxii.", fr: "De garçon de ferme à chevalier Jedi : il a sauvé la galaxie." },
      quote: { es: "Yo era un niño de granja que soñaba con las estrellas.", ca: "Jo era un nen de granja que somiava amb les estrelles.", en: "I was a farm kid who dreamed of the stars.", cs: "Byl jsem kluk z farmy, který snil o hvězdách.", fr: "J'étais un enfant de la ferme qui rêvait des étoiles." } },
    { emoji: "👑", year: "1977", color: "#ec407a", name: { es: "Leia Organa", ca: "Leia Organa", en: "Leia Organa", cs: "Leia Organa", fr: "Leia Organa" },
      achievement: { es: "Princesa y jefa valiente de la rebelión.", ca: "Princesa i cap valenta de la rebel·lió.", en: "Princess and brave leader of the rebellion.", cs: "Princezna a statečná vůdkyně rebelů.", fr: "Princesse et cheffe courageuse de la rébellion." },
      quote: { es: "La esperanza no se rinde nunca.", ca: "L'esperança no es rendeix mai.", en: "Hope never gives up.", cs: "Naděje se nikdy nevzdává.", fr: "L'espoir ne renonce jamais." } },
    { emoji: "💚", year: "1980", color: "#66bb6a", name: { es: "Yoda", ca: "Yoda", en: "Yoda", cs: "Yoda", fr: "Yoda" },
      achievement: { es: "Maestro Jedi de 900 años: pequeño por fuera, gigante por dentro.", ca: "Mestre Jedi de 900 anys: petit per fora, gegant per dins.", en: "A 900-year-old Jedi master: small outside, giant inside.", cs: "Mistr Jedi starý 900 let: malý zvenku, obr uvnitř.", fr: "Maître Jedi de 900 ans : petit dehors, géant dedans." },
      quote: { es: "Hazlo o no lo hagas, pero no lo intentes.", ca: "Fes-ho o no ho facis, però no ho intentis.", en: "Do or do not, there is no try.", cs: "Udělej to, nebo to nedělej. Žádné zkusím neexistuje.", fr: "Fais-le ou ne le fais pas, il n'y a pas d'essai." } },
    { emoji: "🧔", year: "1977", color: "#8d6e63", name: { es: "Obi-Wan Kenobi", ca: "Obi-Wan Kenobi", en: "Obi-Wan Kenobi", cs: "Obi-Wan Kenobi", fr: "Obi-Wan Kenobi" },
      achievement: { es: "Caballero Jedi sabio, maestro de Anakin y de Luke.", ca: "Cavaller Jedi savi, mestre d'Anakin i de Luke.", en: "Wise Jedi knight, teacher of Anakin and Luke.", cs: "Moudrý rytíř Jedi, učitel Anakina i Luka.", fr: "Chevalier Jedi sage, maître d'Anakin et de Luke." },
      quote: { es: "Que la Fuerza te acompañe.", ca: "Que la Força t'acompanyi.", en: "May the Force be with you.", cs: "Ať tě provází Síla.", fr: "Que la Force soit avec toi." } },
    { emoji: "⚡", year: "2015", color: "#ffb300", name: { es: "Rey", ca: "Rey", en: "Rey", cs: "Rey", fr: "Rey" },
      achievement: { es: "Recogía chatarra en el desierto y se convirtió en Jedi.", ca: "Recollia ferralla al desert i es va convertir en Jedi.", en: "She collected scrap in the desert and became a Jedi.", cs: "Sbírala v poušti staré železo a stala se rytířkou Jedi.", fr: "Elle ramassait de la ferraille dans le désert et elle est devenue Jedi." },
      quote: { es: "Puedo aprender cualquier cosa si lo intento.", ca: "Puc aprendre qualsevol cosa si ho intento.", en: "I can learn anything if I try.", cs: "Dokážu se naučit cokoli, když to zkusím.", fr: "Je peux tout apprendre si j'essaie." } },
    { emoji: "😎", year: "1977", color: "#f57c00", name: { es: "Han Solo", ca: "Han Solo", en: "Han Solo", cs: "Han Solo", fr: "Han Solo" },
      achievement: { es: "Piloto del Halcón Milenario, la nave más rápida de la galaxia.", ca: "Pilot del Falcó Mil·lenari, la nau més ràpida de la galàxia.", en: "Pilot of the Millennium Falcon, the fastest ship in the galaxy.", cs: "Pilot Millennium Falconu, nejrychlejší lodi v galaxii.", fr: "Pilote du Faucon Millenium, le vaisseau le plus rapide de la galaxie." },
      quote: { es: "Mi nave parece vieja... ¡pero vuela como ninguna!", ca: "La meva nau sembla vella... però vola com cap altra!", en: "My ship looks old... but she flies like no other!", cs: "Moje loď vypadá staře... ale létá jako žádná jiná!", fr: "Mon vaisseau a l'air vieux... mais il vole comme aucun autre !" } },
    { emoji: "🐻", year: "1977", color: "#6d4c41", name: { es: "Chewbacca", ca: "Chewbacca", en: "Chewbacca", cs: "Chewbacca", fr: "Chewbacca" },
      achievement: { es: "Copiloto wookiee: fuerte, peludo y el mejor amigo del mundo.", ca: "Copilot wookiee: fort, pelut i el millor amic del món.", en: "Wookiee co-pilot: strong, furry and the best friend in the world.", cs: "Wookiee kopilot: silný, chlupatý a nejlepší kamarád na světě.", fr: "Copilote Wookiee : fort, poilu et le meilleur ami du monde." },
      quote: { es: "¡Grrrau! (significa: te quiero, amigo).", ca: "Grrrau! (vol dir: t'estimo, amic).", en: "Grrrau! (it means: I love you, friend).", cs: "Grrrau! (to znamená: mám tě rád, kamaráde).", fr: "Grrrau ! (ça veut dire : je t'aime, mon ami)." } },
    { emoji: "👶", year: "2019", color: "#9ccc65", name: { es: "Grogu", ca: "Grogu", en: "Grogu", cs: "Grogu", fr: "Grogu" },
      achievement: { es: "Un bebé de 50 años con mucha Fuerza... ¡y mucha hambre!", ca: "Un nadó de 50 anys amb molta Força... i molta gana!", en: "A 50-year-old baby with lots of Force... and a big appetite!", cs: "Padesátileté miminko s velkou Sílou... a pořádným hladem!", fr: "Un bébé de 50 ans avec beaucoup de Force... et très faim !" },
      quote: { es: "(Todavía no habla, pero sus ojitos lo dicen todo.)", ca: "(Encara no parla, però els seus ullets ho diuen tot.)", en: "(He does not talk yet, but his little eyes say it all.)", cs: "(Ještě nemluví, ale jeho velká očka řeknou všechno.)", fr: "(Il ne parle pas encore, mais ses petits yeux disent tout.)" } }
  ],

  childDream: {
    girl: { es: "Piloto de Ala-X y aprendiz de Jedi", ca: "Pilot d'Ala-X i aprenenta de Jedi", en: "X-wing pilot and Jedi in training", cs: "Pilotka X-wingu a malá rytířka Jedi", fr: "Pilote de X-wing et apprentie Jedi" },
    boy: { es: "Piloto de Ala-X y aprendiz de Jedi", ca: "Pilot d'Ala-X i aprenent de Jedi", en: "X-wing pilot and Jedi in training", cs: "Pilot X-wingu a malý rytíř Jedi", fr: "Pilote de X-wing et apprenti Jedi" },
    kid: { es: "Peque piloto de Ala-X y Jedi", ca: "Pilot d'Ala-X i Jedi", en: "X-wing pilot and Jedi", cs: "Pilot X-wingu a Jedi", fr: "Pilote de X-wing et Jedi" }
  },
  childQuote: { es: "Cuando sea mayor pilotaré el Halcón Milenario. ¡Y Chewbacca me enseñará a rugir!", ca: "Quan sigui gran pilotaré el Falcó Mil·lenari. I Chewbacca m'ensenyarà a rugir!", en: "When I grow up I will fly the Millennium Falcon. And Chewbacca will teach me how to roar!", cs: "Až vyrostu, budu pilotovat Millennium Falcon. A Chewbacca mě naučí vrčet!", fr: "Quand je serai grand, je piloterai le Faucon Millenium. Et Chewbacca m'apprendra à rugir !" },

  /* ---------- MATES ---------- */
  mathEmojis: ["⚔️", "🤖", "👽", "🚀", "⭐", "🛸"],

  /* ---------- CONSTRUCTOR: el droide ---------- */
  builder: {
    dance: true,
    title: { es: "¡Construye tu droide!", ca: "Construeix el teu droide!", en: "Build your droid!", cs: "Postav si svého droida!", fr: "Construis ton droïde !" },
    thing: { es: "droide", ca: "droide", en: "droid", cs: "droid", fr: "droïde" },
    parts: [
      { id: "cuerpo", label: { es: "El cuerpo", ca: "El cos", en: "The body", cs: "Tělo", fr: "Le corps" },
        options: [{ id: "r2", v: "r2", icon: "🤖" }, { id: "bb", v: "bb", icon: "⚪" }, { id: "c3", v: "c3", icon: "🦾" }] },
      { id: "color", label: { es: "El color", ca: "El color", en: "The colour", cs: "Barva", fr: "La couleur" },
        options: [{ id: "white", v: "#eceff1" }, { id: "blue", v: "#42a5f5" }, { id: "orange", v: "#ffb74d" }, { id: "green", v: "#81c784" }] },
      { id: "cabeza", label: { es: "La cabeza", ca: "El cap", en: "The head", cs: "Hlava", fr: "La tête" },
        options: [{ id: "cupula", v: "cupula", icon: "🛸" }, { id: "antena", v: "antena", icon: "📡" }, { id: "visor", v: "visor", icon: "👓" }] },
      { id: "accesorio", label: { es: "El accesorio", ca: "L'accessori", en: "The accessory", cs: "Doplněk", fr: "L'accessoire" },
        options: [{ id: "brazo", v: "brazo", icon: "🦾" }, { id: "holo", v: "holo", icon: "📽️" }, { id: "ruedas", v: "ruedas", icon: "🛞" }] }
    ],
    svg(sel) {
      const c = sel.color || "#eceff1";
      let body = "";
      if (sel.cuerpo === "bb") {
        body = `<circle cx="60" cy="102" r="32" fill="${c}" stroke="#fff" stroke-width="2"/>
          <circle cx="60" cy="102" r="13" fill="none" stroke="rgba(255,255,255,.85)" stroke-width="3"/>
          <circle cx="60" cy="102" r="4" fill="rgba(0,0,0,.15)"/>`;
      } else if (sel.cuerpo === "c3") {
        body = `<rect x="44" y="66" width="32" height="46" rx="10" fill="${c}" stroke="#fff" stroke-width="2"/>
          <circle cx="60" cy="84" r="4" fill="rgba(0,0,0,.2)"/>
          <rect x="32" y="70" width="9" height="32" rx="4.5" fill="${c}" stroke="#fff" stroke-width="1.5"/>
          <rect x="79" y="70" width="9" height="32" rx="4.5" fill="${c}" stroke="#fff" stroke-width="1.5"/>
          <rect x="47" y="112" width="10" height="26" rx="4" fill="${c}" stroke="#fff" stroke-width="1.5"/>
          <rect x="63" y="112" width="10" height="26" rx="4" fill="${c}" stroke="#fff" stroke-width="1.5"/>`;
      } else {
        body = `<rect x="40" y="66" width="40" height="52" rx="10" fill="${c}" stroke="#fff" stroke-width="2"/>
          <rect x="48" y="76" width="10" height="8" rx="2" fill="rgba(0,0,0,.18)"/>
          <rect x="62" y="76" width="10" height="8" rx="2" fill="rgba(0,0,0,.18)"/>
          <rect x="48" y="92" width="24" height="6" rx="3" fill="rgba(0,0,0,.12)"/>
          <rect x="26" y="72" width="11" height="52" rx="5" fill="${c}" stroke="#fff" stroke-width="1.5"/>
          <rect x="83" y="72" width="11" height="52" rx="5" fill="${c}" stroke="#fff" stroke-width="1.5"/>
          <rect x="24" y="122" width="15" height="9" rx="3" fill="#90a4ae"/>
          <rect x="81" y="122" width="15" height="9" rx="3" fill="#90a4ae"/>`;
      }
      const dome = `<path d="M42 66 A18 18 0 0 1 78 66 Z" fill="#cfd8dc" stroke="#fff" stroke-width="2"/>
        <circle cx="60" cy="56" r="5" fill="#263238"/>
        <circle cx="60" cy="56" r="2.2" fill="#ff5252"><animate attributeName="opacity" values="1;.3;1" dur="1.6s" repeatCount="indefinite"/></circle>`;
      let head = dome;
      if (sel.cabeza === "antena") head = dome + `<line x1="74" y1="52" x2="84" y2="32" stroke="#b0bec5" stroke-width="3" stroke-linecap="round"/><circle cx="85" cy="30" r="4.5" fill="#ff5252"/>`;
      else if (sel.cabeza === "visor") head = `<rect x="42" y="46" width="36" height="20" rx="9" fill="#37474f" stroke="#fff" stroke-width="2"/>
        <rect x="48" y="52" width="24" height="8" rx="4" fill="#4fc3f7"><animate attributeName="opacity" values="1;.5;1" dur="1.4s" repeatCount="indefinite"/></rect>`;
      let extra = "";
      if (sel.accesorio === "brazo") extra = `<path d="M94 86 Q110 80 112 62" stroke="#90a4ae" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="112" cy="59" r="6" fill="#78909c" stroke="#fff" stroke-width="1.5"/>`;
      else if (sel.accesorio === "holo") extra = `<path d="M82 84 L112 50 L112 80 Z" fill="rgba(79,195,247,.30)"/><circle cx="107" cy="58" r="7" fill="rgba(79,195,247,.85)"><animate attributeName="opacity" values=".9;.4;.9" dur="1.2s" repeatCount="indefinite"/></circle>`;
      else if (sel.accesorio === "ruedas") extra = `<circle cx="44" cy="139" r="8" fill="#37474f" stroke="#fff" stroke-width="2"/><circle cx="76" cy="139" r="8" fill="#37474f" stroke="#fff" stroke-width="2"/>`;
      return `<svg viewBox="0 22 120 128" width="190" height="202">
        <ellipse cx="60" cy="144" rx="34" ry="5" fill="rgba(0,0,0,.25)"/>
        ${body}
        ${head}
        ${extra}
      </svg>`;
    }
  }
};
