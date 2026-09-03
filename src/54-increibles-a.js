"use strict";
/* ============================================================
   Contenido de MUJERES INCREÍBLES (parte A): quiz, alfabeto,
   famosas, mates y constructor (tu insignia de valiente).
   ============================================================ */

THEMES.increibles.ready = true;
THEMES.increibles.content = {

  statusPlace: { es: "Conectado desde el Salón de las Valientes", ca: "Connectat des del Saló de les Valentes", en: "Connected from the Hall of the Brave", cs: "Připojeno ze Síně odvážných", fr: "Connecté depuis la Salle des Courageuses" },
  welcome: { es: "¡Bienvenida al Salón de las Valientes, {name}! Aquí viven las historias de mujeres que hicieron cosas increíbles. Muchas empezaron siendo peques como tú.", ca: "Benvinguda al Saló de les Valentes, {name}! Aquí hi viuen les històries de dones que van fer coses increïbles. Moltes van començar sent menudes com tu.", en: "Welcome to the Hall of the Brave, {name}! Here live the stories of women who did amazing things. Many started out as little kids like you.", cs: "Vítej v Síni odvážných, {name}! Tady žijí příběhy žen, které dokázaly úžasné věci. Mnohé začínaly jako malé děti, jako ty.", fr: "Bienvenue dans la Salle des Courageuses, {name} ! Ici vivent les histoires de femmes qui ont fait des choses incroyables. Beaucoup ont commencé toutes petites, comme toi." },

  /* ---------- QUIZ ---------- */
  quiz: [
    { emoji: "⚗️",
      q: { es: "¿Quién fue la primera persona en ganar dos premios Nobel?", ca: "Qui va ser la primera persona a guanyar dos premis Nobel?", en: "Who was the first person to win two Nobel Prizes?", cs: "Kdo jako první člověk získal dvě Nobelovy ceny?", fr: "Qui a été la première personne à gagner deux prix Nobel ?" },
      options: [
        { es: "Marie Curie", ca: "Marie Curie", en: "Marie Curie", cs: "Marie Curie-Skłodowská", fr: "Marie Curie" },
        { es: "Un rey", ca: "Un rei", en: "A king", cs: "Král", fr: "Un roi" },
        { es: "Un futbolista", ca: "Un futbolista", en: "A footballer", cs: "Fotbalista", fr: "Un footballeur" },
        { es: "Nadie", ca: "Ningú", en: "Nobody", cs: "Nikdo", fr: "Personne" }],
      answer: 0,
      explanation: { es: "Marie Curie, la científica de los dos Nobel. De niña estudiaba a escondidas porque no la dejaban ir a la universidad.", ca: "Marie Curie, la científica dels dos Nobel. De petita estudiava d'amagat perquè no la deixaven anar a la universitat.", en: "Marie Curie, the scientist with two Nobels. As a girl she studied in secret because she was not allowed to go to university.", cs: "Marie Curie, vědkyně se dvěma Nobelovkami. Jako dívka studovala tajně, protože nesměla na univerzitu.", fr: "Marie Curie, la scientifique aux deux Nobel. Petite, elle étudiait en cachette parce qu'on ne la laissait pas aller à l'université." } },
    { emoji: "🚀",
      q: { es: "¿Quién fue la primera mujer en viajar al espacio?", ca: "Qui va ser la primera dona a viatjar a l'espai?", en: "Who was the first woman to travel to space?", cs: "Která žena letěla jako první do vesmíru?", fr: "Qui a été la première femme à voyager dans l'espace ?" },
      options: [
        { es: "Valentina Tereshkova", ca: "Valentina Tereshkova", en: "Valentina Tereshkova", cs: "Valentina Těreškovová", fr: "Valentina Terechkova" },
        { es: "Una princesa", ca: "Una princesa", en: "A princess", cs: "Princezna", fr: "Une princesse" },
        { es: "Mary Poppins", ca: "Mary Poppins", en: "Mary Poppins", cs: "Mary Poppins", fr: "Mary Poppins" },
        { es: "Ninguna", ca: "Cap", en: "None", cs: "Žádná", fr: "Aucune" }],
      answer: 0,
      explanation: { es: "Valentina Tereshkova, en 1963. Antes de astronauta era obrera textil y saltaba en paracaídas por afición.", ca: "Valentina Tereshkova, el 1963. Abans d'astronauta era obrera tèxtil i saltava en paracaigudes per afició.", en: "Valentina Tereshkova, in 1963. Before being an astronaut she was a textile worker who loved parachute jumping.", cs: "Valentina Těreškovová, v roce 1963. Než se stala kosmonautkou, pracovala v textilce a pro radost skákala padákem.", fr: "Valentina Terechkova, en 1963. Avant d'être astronaute, elle était ouvrière textile et sautait en parachute par passion." } },
    { emoji: "✈️",
      q: { es: "¿Qué hizo Amelia Earhart?", ca: "Què va fer Amelia Earhart?", en: "What did Amelia Earhart do?", cs: "Co dokázala Amelia Earhartová?", fr: "Qu'a fait Amelia Earhart ?" },
      options: [
        { es: "Cruzar el océano volando ella sola", ca: "Creuar l'oceà volant ella sola", en: "Fly across the ocean all by herself", cs: "Sama přeletěla oceán", fr: "Traverser l'océan en volant toute seule" },
        { es: "Inventar el chocolate", ca: "Inventar la xocolata", en: "Invent chocolate", cs: "Vynalezla čokoládu", fr: "Inventer le chocolat" },
        { es: "Pintar un museo", ca: "Pintar un museu", en: "Paint a museum", cs: "Vymalovala muzeum", fr: "Peindre un musée" },
        { es: "Nada", ca: "Res", en: "Nothing", cs: "Nic", fr: "Rien" }],
      answer: 0,
      explanation: { es: "Amelia cruzó el Atlántico pilotando sola su avión, cuando decían que eso no era cosa de chicas. Se equivocaban.", ca: "L'Amelia va creuar l'Atlàntic pilotant sola el seu avió, quan deien que això no era cosa de noies. S'equivocaven.", en: "Amelia flew across the Atlantic alone in her plane, when people said that was not for girls. They were wrong.", cs: "Amelia sama přeletěla Atlantik ve svém letadle, když se říkalo, že tohle není pro holky. Mýlili se.", fr: "Amelia a traversé l'Atlantique seule aux commandes de son avion, quand on disait que ce n'était pas pour les filles. Ils se trompaient." } },
    { emoji: "💻",
      q: { es: "¿Quién escribió el primer programa de ordenador de la historia?", ca: "Qui va escriure el primer programa d'ordinador de la història?", en: "Who wrote the first computer program in history?", cs: "Kdo napsal první počítačový program v dějinách?", fr: "Qui a écrit le premier programme informatique de l'histoire ?" },
      options: [
        { es: "Ada Lovelace, hace casi 200 años", ca: "Ada Lovelace, fa gairebé 200 anys", en: "Ada Lovelace, almost 200 years ago", cs: "Ada Lovelace, skoro před 200 lety", fr: "Ada Lovelace, il y a presque 200 ans" },
        { es: "Un robot", ca: "Un robot", en: "A robot", cs: "Robot", fr: "Un robot" },
        { es: "Un señor con bata", ca: "Un senyor amb bata", en: "A man in a lab coat", cs: "Pán v plášti", fr: "Un monsieur en blouse" },
        { es: "Yo", ca: "Jo", en: "Me", cs: "Já", fr: "Moi" }],
      answer: 0,
      explanation: { es: "Ada Lovelace imaginó los ordenadores antes de que existieran. Sin ella, ¡yo no estaría aquí hablando contigo!", ca: "Ada Lovelace va imaginar els ordinadors abans que existissin. Sense ella, jo no seria aquí parlant amb tu!", en: "Ada Lovelace imagined computers before they existed. Without her, I would not be here talking to you!", cs: "Ada Lovelace si představila počítače dřív, než existovaly. Bez ní bych tu s tebou nemluvil!", fr: "Ada Lovelace a imaginé les ordinateurs avant qu'ils existent. Sans elle, je ne serais pas là à te parler !" } },
    { emoji: "🐒",
      q: { es: "¿Qué descubrió Jane Goodall viviendo con los chimpancés?", ca: "Què va descobrir Jane Goodall vivint amb els ximpanzés?", en: "What did Jane Goodall discover living with chimpanzees?", cs: "Co objevila Jane Goodallová, když žila se šimpanzi?", fr: "Qu'a découvert Jane Goodall en vivant avec les chimpanzés ?" },
      options: [
        { es: "Que usan herramientas, como nosotros", ca: "Que fan servir eines, com nosaltres", en: "That they use tools, like us", cs: "Že používají nástroje jako my", fr: "Qu'ils utilisent des outils, comme nous" },
        { es: "Que hablan francés", ca: "Que parlen francès", en: "That they speak French", cs: "Že mluví francouzsky", fr: "Qu'ils parlent français" },
        { es: "Que juegan al fútbol", ca: "Que juguen a futbol", en: "That they play football", cs: "Že hrají fotbal", fr: "Qu'ils jouent au foot" },
        { es: "Que no existen", ca: "Que no existeixen", en: "That they do not exist", cs: "Že neexistují", fr: "Qu'ils n'existent pas" }],
      answer: 0,
      explanation: { es: "Jane vio a un chimpancé pescar hormigas con un palito. ¡Fue un descubrimiento que cambió la ciencia!", ca: "La Jane va veure un ximpanzé pescar formigues amb un bastonet. Va ser un descobriment que va canviar la ciència!", en: "Jane saw a chimpanzee fishing for ants with a little stick. A discovery that changed science!", cs: "Jane viděla šimpanze lovit mravence klacíkem. Objev, který změnil vědu!", fr: "Jane a vu un chimpanzé pêcher des fourmis avec un petit bâton. Une découverte qui a changé la science !" } },
    { emoji: "🎨",
      q: { es: "¿Quién fue Frida Kahlo?", ca: "Qui va ser Frida Kahlo?", en: "Who was Frida Kahlo?", cs: "Kdo byla Frida Kahlo?", fr: "Qui était Frida Kahlo ?" },
      options: [
        { es: "Una pintora mexicana famosísima", ca: "Una pintora mexicana famosíssima", en: "A super famous Mexican painter", cs: "Slavná mexická malířka", fr: "Une peintre mexicaine très célèbre" },
        { es: "Una astronauta", ca: "Una astronauta", en: "An astronaut", cs: "Astronautka", fr: "Une astronaute" },
        { es: "Una sirena", ca: "Una sirena", en: "A mermaid", cs: "Mořská panna", fr: "Une sirène" },
        { es: "Una futbolista", ca: "Una futbolista", en: "A footballer", cs: "Fotbalistka", fr: "Une footballeuse" }],
      answer: 0,
      explanation: { es: "Frida pintaba desde la cama cuando estaba malita, con colores brillantes y flores en el pelo. Convirtió sus días difíciles en arte.", ca: "La Frida pintava des del llit quan estava malalteta, amb colors brillants i flors als cabells. Va convertir els seus dies difícils en art.", en: "Frida painted from her bed when she was poorly, with bright colours and flowers in her hair. She turned her hard days into art.", cs: "Frida malovala z postele, když jí nebylo dobře, zářivými barvami a s květinami ve vlasech. Proměnila své těžké dny v umění.", fr: "Frida peignait depuis son lit quand elle était malade, avec des couleurs vives et des fleurs dans les cheveux. Elle a transformé ses jours difficiles en art." } },
    { emoji: "🧮",
      q: { es: "¿Qué hacía Katherine Johnson en la NASA?", ca: "Què feia Katherine Johnson a la NASA?", en: "What did Katherine Johnson do at NASA?", cs: "Co dělala Katherine Johnsonová v NASA?", fr: "Que faisait Katherine Johnson à la NASA ?" },
      options: [
        { es: "Calculaba el camino de los cohetes a la Luna", ca: "Calculava el camí dels coets a la Lluna", en: "She calculated the rockets' path to the Moon", cs: "Počítala dráhu raket na Měsíc", fr: "Elle calculait le chemin des fusées vers la Lune" },
        { es: "Hacía bocadillos", ca: "Feia entrepans", en: "She made sandwiches", cs: "Dělala svačiny", fr: "Elle faisait des sandwichs" },
        { es: "Regaba las plantas", ca: "Regava les plantes", en: "She watered the plants", cs: "Zalévala květiny", fr: "Elle arrosait les plantes" },
        { es: "Barría los cohetes", ca: "Escombrava els coets", en: "She swept the rockets", cs: "Zametala rakety", fr: "Elle balayait les fusées" }],
      answer: 0,
      explanation: { es: "Con lápiz y papel, calculaba mejor que las máquinas. Los astronautas decían: si lo ha comprobado Katherine, despegamos.", ca: "Amb llapis i paper, calculava millor que les màquines. Els astronautes deien: si ho ha comprovat la Katherine, ens enlairem.", en: "With pencil and paper, she calculated better than the machines. Astronauts said: if Katherine has checked it, we launch.", cs: "S tužkou a papírem počítala líp než stroje. Astronauti říkali: když to zkontrolovala Katherine, startujeme.", fr: "Avec un crayon et du papier, elle calculait mieux que les machines. Les astronautes disaient : si Katherine a vérifié, on décolle." } },
    { emoji: "📚",
      q: { es: "¿Por qué es famosa Malala?", ca: "Per què és famosa la Malala?", en: "Why is Malala famous?", cs: "Čím je slavná Malála?", fr: "Pourquoi Malala est-elle célèbre ?" },
      options: [
        { es: "Por defender que todas las niñas puedan ir al cole", ca: "Per defensar que totes les nenes puguin anar a l'escola", en: "For defending every girl's right to go to school", cs: "Bránila právo všech dívek chodit do školy", fr: "Pour avoir défendu le droit de toutes les filles d'aller à l'école" },
        { es: "Por correr muy rápido", ca: "Per córrer molt ràpid", en: "For running very fast", cs: "Rychle běhá", fr: "Pour courir très vite" },
        { es: "Por cantar ópera", ca: "Per cantar òpera", en: "For singing opera", cs: "Zpívá operu", fr: "Pour chanter l'opéra" },
        { es: "Por inventar los deberes", ca: "Per inventar els deures", en: "For inventing homework", cs: "Vynalezla úkoly", fr: "Pour avoir inventé les devoirs" }],
      answer: 0,
      explanation: { es: "Malala defendió el derecho de las niñas a estudiar y ganó el Nobel de la Paz siendo casi una niña. Un lápiz puede cambiar el mundo.", ca: "La Malala va defensar el dret de les nenes a estudiar i va guanyar el Nobel de la Pau sent gairebé una nena. Un llapis pot canviar el món.", en: "Malala stood up for girls' right to learn and won the Nobel Peace Prize while still almost a child. A pencil can change the world.", cs: "Malála bránila právo dívek učit se a získala Nobelovu cenu míru, když byla skoro ještě dítě. Tužka může změnit svět.", fr: "Malala a défendu le droit des filles d'étudier et a gagné le prix Nobel de la paix presque enfant. Un crayon peut changer le monde." } },
    { emoji: "🏔️",
      q: { es: "¿Quién fue la primera mujer en subir al Everest?", ca: "Qui va ser la primera dona a pujar a l'Everest?", en: "Who was the first woman to climb Everest?", cs: "Která žena vystoupila jako první na Everest?", fr: "Qui a été la première femme à gravir l'Everest ?" },
      options: [
        { es: "Junko Tabei", ca: "Junko Tabei", en: "Junko Tabei", cs: "Junko Tabeiová", fr: "Junko Tabei" },
        { es: "Una cabra montesa", ca: "Una cabra salvatge", en: "A mountain goat", cs: "Kamzice", fr: "Une chèvre de montagne" },
        { es: "Blancanieves", ca: "La Blancaneu", en: "Snow White", cs: "Sněhurka", fr: "Blanche-Neige" },
        { es: "Nadie todavía", ca: "Ningú encara", en: "Nobody yet", cs: "Zatím nikdo", fr: "Personne encore" }],
      answer: 0,
      explanation: { es: "Junko Tabei, de Japón, llegó a la cima del mundo en 1975. Medía metro y medio: la montaña más alta y la alpinista más bajita.", ca: "Junko Tabei, del Japó, va arribar al cim del món el 1975. Feia un metre i mig: la muntanya més alta i l'alpinista més baixeta.", en: "Junko Tabei, from Japan, reached the top of the world in 1975. She was five feet tall: the highest mountain and the shortest climber.", cs: "Junko Tabeiová z Japonska dosáhla vrcholu světa v roce 1975. Měřila metr a půl: nejvyšší hora a nejmenší horolezkyně.", fr: "Junko Tabei, du Japon, a atteint le sommet du monde en 1975. Elle mesurait un mètre cinquante : la plus haute montagne et la plus petite alpiniste." } },
    { emoji: "⭐",
      q: { es: "¿Qué tienen en común todas las mujeres increíbles?", ca: "Què tenen en comú totes les dones increïbles?", en: "What do all amazing women have in common?", cs: "Co mají všechny úžasné ženy společného?", fr: "Qu'ont en commun toutes les femmes incroyables ?" },
      options: [
        { es: "Que no se rindieron cuando les dijeron que no", ca: "Que no es van rendir quan els van dir que no", en: "They did not give up when told no", cs: "Nevzdaly se, když jim řekli ne", fr: "Elles n'ont pas abandonné quand on leur a dit non" },
        { es: "Que tenían capa", ca: "Que tenien capa", en: "They wore capes", cs: "Měly pláštěnku", fr: "Elles avaient une cape" },
        { es: "Que eran gigantes", ca: "Que eren gegants", en: "They were giants", cs: "Byly obryně", fr: "Elles étaient géantes" },
        { es: "Que no desayunaban", ca: "Que no esmorzaven", en: "They skipped breakfast", cs: "Nesnídaly", fr: "Elles ne prenaient pas de petit-déjeuner" }],
      answer: 0,
      explanation: { es: "A casi todas les dijeron 'eso no puedes hacerlo'. Y contestaron haciéndolo. Esa es la receta secreta, {name}.", ca: "A gairebé totes els van dir 'això no ho pots fer'. I van contestar fent-ho. Aquesta és la recepta secreta, {name}.", en: "Almost all of them were told 'you cannot do that'. And they answered by doing it. That is the secret recipe, {name}.", cs: "Skoro všem řekli 'to nemůžeš'. A ony odpověděly tím, že to udělaly. To je ten tajný recept, {name}.", fr: "On a dit à presque toutes « tu ne peux pas faire ça ». Et elles ont répondu en le faisant. C'est la recette secrète, {name}." } },
    { emoji: "🩺",
      q: { es: "¿Quién fue Florence Nightingale?", ca: "Qui va ser Florence Nightingale?", en: "Who was Florence Nightingale?", cs: "Kdo byla Florence Nightingalová?", fr: "Qui était Florence Nightingale ?" },
      options: [
        { es: "Una cantante de ópera", ca: "Una cantant d'òpera", en: "An opera singer", cs: "Operní zpěvačka", fr: "Une chanteuse d'opéra" },
        { es: "La enfermera que enseñó al mundo a cuidar enfermos", ca: "La infermera que va ensenyar al món a cuidar malalts", en: "The nurse who taught the world how to care for the sick", cs: "Zdravotní sestra, která naučila svět pečovat o nemocné", fr: "L'infirmière qui a appris au monde à soigner les malades" },
        { es: "Una pirata", ca: "Una pirata", en: "A pirate", cs: "Pirátka", fr: "Une pirate" },
        { es: "Un hada", ca: "Una fada", en: "A fairy", cs: "Víla", fr: "Une fée" }],
      answer: 1,
      explanation: { es: "La llamaban 'la dama de la lámpara' porque de noche recorría las camas de los enfermos con su lucecita. Inventó la enfermería moderna.", ca: "Li deien 'la dama del llum' perquè de nit recorria els llits dels malalts amb el seu llumet. Va inventar la infermeria moderna.", en: "They called her 'the lady with the lamp' because at night she walked past the patients' beds with her little light. She invented modern nursing.", cs: "Říkali jí 'dáma s lampou', protože v noci obcházela postele nemocných se svým světýlkem. Vymyslela moderní ošetřovatelství.", fr: "On l'appelait « la dame à la lampe » parce que la nuit, elle passait entre les lits des malades avec sa petite lumière. Elle a inventé les soins infirmiers modernes." } },
    { emoji: "🚌",
      q: { es: "¿Qué hizo Rosa Parks para cambiar la historia?", ca: "Què va fer Rosa Parks per canviar la història?", en: "What did Rosa Parks do to change history?", cs: "Co udělala Rosa Parksová, že změnila dějiny?", fr: "Qu'a fait Rosa Parks pour changer l'histoire ?" },
      options: [
        { es: "Ganar una carrera de coches", ca: "Guanyar una cursa de cotxes", en: "Win a car race", cs: "Vyhrála automobilový závod", fr: "Gagner une course de voitures" },
        { es: "Inventar el autobús", ca: "Inventar l'autobús", en: "Invent the bus", cs: "Vynalezla autobus", fr: "Inventer le bus" },
        { es: "Quedarse sentada en su asiento del autobús", ca: "Quedar-se asseguda al seu seient de l'autobús", en: "Stay seated in her bus seat", cs: "Zůstala sedět na svém místě v autobuse", fr: "Rester assise à sa place dans le bus" },
        { es: "Dormirse en el autobús", ca: "Adormir-se a l'autobús", en: "Fall asleep on the bus", cs: "Usnula v autobuse", fr: "S'endormir dans le bus" }],
      answer: 2,
      explanation: { es: "En 1955 le ordenaron ceder su asiento por el color de su piel y dijo que no. Su valentía tranquila ayudó a que las leyes fueran justas para todos.", ca: "El 1955 li van ordenar cedir el seient pel color de la seva pell i va dir que no. La seva valentia tranquil·la va ajudar a aconseguir lleis justes per a tothom.", en: "In 1955 she was ordered to give up her seat because of the colour of her skin, and she said no. Her quiet courage helped make the laws fair for everyone.", cs: "V roce 1955 jí přikázali uvolnit místo kvůli barvě její pleti a ona řekla ne. Její tichá odvaha pomohla prosadit spravedlivé zákony pro všechny.", fr: "En 1955, on lui a ordonné de céder sa place à cause de la couleur de sa peau, et elle a dit non. Son courage tranquille a aidé à rendre les lois justes pour tous." } },
    { emoji: "🔭",
      q: { es: "¿Qué descubrió Caroline Herschel mirando el cielo con su telescopio?", ca: "Què va descobrir Caroline Herschel mirant el cel amb el seu telescopi?", en: "What did Caroline Herschel discover looking at the sky with her telescope?", cs: "Co objevila Caroline Herschelová, když se dívala dalekohledem na oblohu?", fr: "Qu'a découvert Caroline Herschel en regardant le ciel avec son télescope ?" },
      options: [
        { es: "Cometas nuevos", ca: "Cometes nous", en: "New comets", cs: "Nové komety", fr: "De nouvelles comètes" },
        { es: "Un dragón dormido", ca: "Un drac adormit", en: "A sleeping dragon", cs: "Spícího draka", fr: "Un dragon endormi" },
        { es: "Una nube con forma de conejo", ca: "Un núvol amb forma de conill", en: "A rabbit-shaped cloud", cs: "Mrak ve tvaru králíka", fr: "Un nuage en forme de lapin" },
        { es: "Nada, se aburrió", ca: "Res, es va avorrir", en: "Nothing, she got bored", cs: "Nic, nudila se", fr: "Rien, elle s'est ennuyée" }],
      answer: 0,
      explanation: { es: "Caroline descubrió ocho cometas hace más de 200 años. Fue la primera mujer que encontró uno, ¡y le pagaron por ser astrónoma!", ca: "La Caroline va descobrir vuit cometes fa més de 200 anys. Va ser la primera dona que en va trobar un, i li van pagar per ser astrònoma!", en: "Caroline discovered eight comets more than 200 years ago. She was the first woman to find one, and she was paid to be an astronomer!", cs: "Caroline objevila před více než 200 lety osm komet. Byla první ženou, která nějakou našla, a za práci astronomky dostávala plat!", fr: "Caroline a découvert huit comètes il y a plus de 200 ans. Elle a été la première femme à en trouver une, et elle était payée pour être astronome !" } },
    { emoji: "🌊",
      q: { es: "¿Qué lugar explora la científica Sylvia Earle?", ca: "Quin lloc explora la científica Sylvia Earle?", en: "What place does scientist Sylvia Earle explore?", cs: "Jaké místo zkoumá vědkyně Sylvia Earlová?", fr: "Quel endroit explore la scientifique Sylvia Earle ?" },
      options: [
        { es: "El espacio", ca: "L'espai", en: "Space", cs: "Vesmír", fr: "L'espace" },
        { es: "Los volcanes", ca: "Els volcans", en: "Volcanoes", cs: "Sopky", fr: "Les volcans" },
        { es: "El desierto", ca: "El desert", en: "The desert", cs: "Poušť", fr: "Le désert" },
        { es: "El fondo del mar", ca: "El fons del mar", en: "The bottom of the sea", cs: "Mořské dno", fr: "Le fond de la mer" }],
      answer: 3,
      explanation: { es: "Sylvia ha pasado miles de horas buceando y caminó por el fondo del océano a más profundidad que nadie. La llaman 'Su Profundidad', ¡como a una reina del mar!", ca: "La Sylvia ha passat milers d'hores bussejant i va caminar pel fons de l'oceà a més profunditat que ningú. Li diuen 'Sa Profunditat', com una reina del mar!", en: "Sylvia has spent thousands of hours diving and walked on the ocean floor deeper than anyone. They call her 'Her Deepness', like a queen of the sea!", cs: "Sylvia strávila tisíce hodin potápěním a po mořském dně se prošla hlouběji než kdokoli jiný. Říkají jí 'Její Hlubokost', jako královně moře!", fr: "Sylvia a passé des milliers d'heures à plonger et a marché sur le fond de l'océan plus profond que personne. On l'appelle « Sa Profondeur », comme une reine de la mer !" } },
    { emoji: "📡",
      q: { es: "¿Qué famosa actriz de cine fue también una gran inventora?", ca: "Quina famosa actriu de cinema va ser també una gran inventora?", en: "Which famous film actress was also a great inventor?", cs: "Která slavná filmová herečka byla zároveň skvělá vynálezkyně?", fr: "Quelle célèbre actrice de cinéma était aussi une grande inventrice ?" },
      options: [
        { es: "Un personaje de dibujos", ca: "Un personatge de dibuixos", en: "A cartoon character", cs: "Postavička z pohádky", fr: "Un personnage de dessin animé" },
        { es: "Hedy Lamarr", ca: "Hedy Lamarr", en: "Hedy Lamarr", cs: "Hedy Lamarrová", fr: "Hedy Lamarr" },
        { es: "La Bella Durmiente", ca: "La Bella Dorment", en: "Sleeping Beauty", cs: "Šípková Růženka", fr: "La Belle au bois dormant" },
        { es: "Ninguna, es imposible", ca: "Cap, és impossible", en: "None, that is impossible", cs: "Žádná, to nejde", fr: "Aucune, c'est impossible" }],
      answer: 1,
      explanation: { es: "Hedy Lamarr brillaba en las películas y, al salir del rodaje, inventaba. Ideó un sistema de señales que hoy ayuda a que funcionen el wifi y el Bluetooth.", ca: "Hedy Lamarr brillava a les pel·lícules i, en sortir del rodatge, inventava. Va idear un sistema de senyals que avui ajuda que funcionin el wifi i el Bluetooth.", en: "Hedy Lamarr shone in films and, after filming, she invented things. She devised a signal system that today helps Wi-Fi and Bluetooth work.", cs: "Hedy Lamarrová zářila ve filmech a po natáčení vynalézala. Vymyslela systém signálů, který dnes pomáhá fungovat wifi i Bluetooth.", fr: "Hedy Lamarr brillait au cinéma et, après le tournage, elle inventait. Elle a imaginé un système de signaux qui aide aujourd'hui le wifi et le Bluetooth à fonctionner." } }
  ],

  /* ---------- ALFABETO: de la A a la Z de mujeres increíbles ---------- */
  alphabet: [
    { letter: "A", emoji: "💻", item: { es: "Ada Lovelace", ca: "Ada Lovelace", en: "Ada Lovelace", cs: "Ada Lovelace", fr: "Ada Lovelace" },
      fact: { es: "Escribió el primer programa de la historia, casi 200 años antes que yo naciera.", ca: "Va escriure el primer programa de la història, gairebé 200 anys abans que jo nasqués.", en: "She wrote the first program in history, almost 200 years before I was born.", cs: "Napsala první program v dějinách, skoro 200 let předtím, než jsem se narodil.", fr: "Elle a écrit le premier programme de l'histoire, presque 200 ans avant ma naissance." } },
    { letter: "B", emoji: "✈️", item: { es: "Bessie Coleman", ca: "Bessie Coleman", en: "Bessie Coleman", cs: "Bessie Colemanová", fr: "Bessie Coleman" },
      fact: { es: "No la dejaban estudiar para piloto en su país, así que aprendió francés y se fue a Francia a sacarse el título.", ca: "No la deixaven estudiar per a pilot al seu país, així que va aprendre francès i se'n va anar a França a treure's el títol.", en: "She was not allowed to train as a pilot in her country, so she learned French and went to France to get her licence.", cs: "V její zemi ji nenechali studovat na pilotku, tak se naučila francouzsky a licenci si udělala ve Francii.", fr: "On ne la laissait pas devenir pilote dans son pays, alors elle a appris le français et est allée passer son brevet en France." } },
    { letter: "C", emoji: "⚗️", item: { es: "Curie, Marie", ca: "Curie, Marie", en: "Curie, Marie", cs: "Curie, Marie", fr: "Curie, Marie" },
      fact: { es: "Dos premios Nobel y un montón de descubrimientos que hoy ayudan a curar.", ca: "Dos premis Nobel i un munt de descobriments que avui ajuden a curar.", en: "Two Nobel Prizes and a heap of discoveries that help heal people today.", cs: "Dvě Nobelovy ceny a spousta objevů, které dnes pomáhají léčit.", fr: "Deux prix Nobel et un tas de découvertes qui aident à soigner aujourd'hui." } },
    { letter: "D", emoji: "🦍", item: { es: "Dian Fossey", ca: "Dian Fossey", en: "Dian Fossey", cs: "Dian Fosseyová", fr: "Dian Fossey" },
      fact: { es: "Vivió en la niebla de la montaña para proteger a los gorilas.", ca: "Va viure a la boira de la muntanya per protegir els goril·les.", en: "She lived in the mountain mist to protect the gorillas.", cs: "Žila v horské mlze, aby chránila gorily.", fr: "Elle a vécu dans la brume des montagnes pour protéger les gorilles." } },
    { letter: "E", emoji: "➗", item: { es: "Emmy Noether", ca: "Emmy Noether", en: "Emmy Noether", cs: "Emmy Noetherová", fr: "Emmy Noether" },
      fact: { es: "Una maga de las matemáticas. Einstein decía que era una genia.", ca: "Una maga de les matemàtiques. Einstein deia que era una gènia.", en: "A wizard of mathematics. Einstein said she was a genius.", cs: "Kouzelnice matematiky. Einstein říkal, že je génius.", fr: "Une magicienne des mathématiques. Einstein disait qu'elle était un génie." } },
    { letter: "F", emoji: "🎨", item: { es: "Frida Kahlo", ca: "Frida Kahlo", en: "Frida Kahlo", cs: "Frida Kahlo", fr: "Frida Kahlo" },
      fact: { es: "Pintaba con colores brillantes hasta en sus días más difíciles.", ca: "Pintava amb colors brillants fins i tot en els seus dies més difícils.", en: "She painted in bright colours even on her hardest days.", cs: "Malovala zářivými barvami i ve svých nejtěžších dnech.", fr: "Elle peignait avec des couleurs vives même dans ses jours les plus durs." } },
    { letter: "G", emoji: "🖥️", item: { es: "Grace Hopper", ca: "Grace Hopper", en: "Grace Hopper", cs: "Grace Hopperová", fr: "Grace Hopper" },
      fact: { es: "Enseñó a los ordenadores a entender palabras. Y encontró el primer 'bug': ¡una polilla de verdad!", ca: "Va ensenyar els ordinadors a entendre paraules. I va trobar el primer 'bug': una papallona nocturna de debò!", en: "She taught computers to understand words. And found the first 'bug': a real moth!", cs: "Naučila počítače rozumět slovům. A našla první 'bug': opravdovou můru!", fr: "Elle a appris aux ordinateurs à comprendre les mots. Et elle a trouvé le premier « bug » : un vrai papillon de nuit !" } },
    { letter: "H", emoji: "📐", item: { es: "Hipatia", ca: "Hipàtia", en: "Hypatia", cs: "Hypatia", fr: "Hypatie" },
      fact: { es: "Hace 1.600 años enseñaba mates y astronomía en la gran biblioteca de Alejandría.", ca: "Fa 1.600 anys ensenyava mates i astronomia a la gran biblioteca d'Alexandria.", en: "1,600 years ago she taught maths and astronomy at the great library of Alexandria.", cs: "Před 1600 lety učila matematiku a astronomii ve velké alexandrijské knihovně.", fr: "Il y a 1 600 ans, elle enseignait les maths et l'astronomie à la grande bibliothèque d'Alexandrie." } },
    { letter: "I", emoji: "🧪", item: { es: "Irène Joliot-Curie", ca: "Irène Joliot-Curie", en: "Irène Joliot-Curie", cs: "Irène Joliot-Curie", fr: "Irène Joliot-Curie" },
      fact: { es: "La hija de Marie Curie... ¡y también ganó un Nobel! En esa casa los premios eran de familia.", ca: "La filla de Marie Curie... i també va guanyar un Nobel! En aquella casa els premis eren de família.", en: "Marie Curie's daughter... and she won a Nobel too! In that house, prizes ran in the family.", cs: "Dcera Marie Curie... a taky získala Nobelovku! V té rodině se ceny dědily.", fr: "La fille de Marie Curie... et elle aussi a gagné un Nobel ! Dans cette maison, les prix étaient de famille." } },
    { letter: "J", emoji: "🐒", item: { es: "Jane Goodall", ca: "Jane Goodall", en: "Jane Goodall", cs: "Jane Goodallová", fr: "Jane Goodall" },
      fact: { es: "De niña soñaba con vivir con animales en África. De mayor lo hizo, con los chimpancés.", ca: "De petita somiava viure amb animals a l'Àfrica. De gran ho va fer, amb els ximpanzés.", en: "As a girl she dreamed of living with animals in Africa. As a grown-up she did it, with the chimpanzees.", cs: "Jako dívka snila o životě se zvířaty v Africe. Jako dospělá to udělala, se šimpanzi.", fr: "Petite, elle rêvait de vivre avec les animaux en Afrique. Grande, elle l'a fait, avec les chimpanzés." } },
    { letter: "K", emoji: "🧮", item: { es: "Katherine Johnson", ca: "Katherine Johnson", en: "Katherine Johnson", cs: "Katherine Johnsonová", fr: "Katherine Johnson" },
      fact: { es: "Sus cuentas con lápiz llevaron a los astronautas a la Luna y de vuelta a casa.", ca: "Els seus comptes amb llapis van portar els astronautes a la Lluna i de tornada a casa.", en: "Her pencil calculations took astronauts to the Moon and safely back home.", cs: "Její výpočty tužkou dovedly astronauty na Měsíc a bezpečně zpátky domů.", fr: "Ses calculs au crayon ont emmené les astronautes sur la Lune et les ont ramenés à la maison." } },
    { letter: "L", emoji: "⚛️", item: { es: "Lise Meitner", ca: "Lise Meitner", en: "Lise Meitner", cs: "Lise Meitnerová", fr: "Lise Meitner" },
      fact: { es: "Descubrió cómo se parte un átomo. Un elemento de la tabla lleva su nombre: el meitnerio.", ca: "Va descobrir com es parteix un àtom. Un element de la taula porta el seu nom: el meitneri.", en: "She discovered how an atom splits. An element on the table is named after her: meitnerium.", cs: "Objevila, jak se štěpí atom. Prvek v tabulce nese její jméno: meitnerium.", fr: "Elle a découvert comment un atome se divise. Un élément du tableau porte son nom : le meitnérium." } },
    { letter: "M", emoji: "📚", item: { es: "Malala Yousafzai", ca: "Malala Yousafzai", en: "Malala Yousafzai", cs: "Malála Júsufzajová", fr: "Malala Yousafzai" },
      fact: { es: "Defendió que todas las niñas del mundo puedan ir al cole. Nobel de la Paz.", ca: "Va defensar que totes les nenes del món puguin anar a l'escola. Nobel de la Pau.", en: "She stood up for every girl's right to go to school. Nobel Peace Prize.", cs: "Bránila právo všech dívek světa chodit do školy. Nobelova cena míru.", fr: "Elle a défendu le droit de toutes les filles d'aller à l'école. Prix Nobel de la paix." } },
    { letter: "N", emoji: "🧬", item: { es: "Nettie Stevens", ca: "Nettie Stevens", en: "Nettie Stevens", cs: "Nettie Stevensová", fr: "Nettie Stevens" },
      fact: { es: "Mirando por el microscopio descubrió por qué nacemos niño o niña: los cromosomas X e Y.", ca: "Mirant pel microscopi va descobrir per què naixem nen o nena: els cromosomes X i Y.", en: "Looking through her microscope she discovered why we are born boy or girl: the X and Y chromosomes.", cs: "Pohledem do mikroskopu objevila, proč se rodíme jako kluk nebo holka: chromozomy X a Y.", fr: "En regardant dans son microscope, elle a découvert pourquoi on naît garçon ou fille : les chromosomes X et Y." } },
    { letter: "O", emoji: "👩‍🚀", item: { es: "Ochoa, Ellen", ca: "Ochoa, Ellen", en: "Ochoa, Ellen", cs: "Ochoa, Ellen", fr: "Ochoa, Ellen" },
      fact: { es: "La primera astronauta hispana... y además toca la flauta. ¡La tocó en el espacio!", ca: "La primera astronauta hispana... i a més toca la flauta. La va tocar a l'espai!", en: "The first Hispanic woman astronaut... and she plays the flute. She played it in space!", cs: "První hispánská astronautka... a navíc hraje na flétnu. Hrála na ni ve vesmíru!", fr: "La première astronaute hispanique... et en plus elle joue de la flûte. Elle en a joué dans l'espace !" } },
    { letter: "P", emoji: "🛰️", item: { es: "Peggy Whitson", ca: "Peggy Whitson", en: "Peggy Whitson", cs: "Peggy Whitsonová", fr: "Peggy Whitson" },
      fact: { es: "Ha vivido más días en el espacio que ningún otro astronauta de su país: ¡665!", ca: "Ha viscut més dies a l'espai que cap altre astronauta del seu país: 665!", en: "She has lived more days in space than any other astronaut from her country: 665!", cs: "Strávila ve vesmíru víc dní než kterýkoli jiný astronaut její země: 665!", fr: "Elle a vécu plus de jours dans l'espace que tout autre astronaute de son pays : 665 !" } },
    { letter: "Q", emoji: "⭐", item: { es: "¿Quién será la siguiente?", ca: "Qui serà la següent?", en: "Who will be next?", cs: "Kdo bude další?", fr: "Qui sera la prochaine ?" },
      fact: { es: "Esta letra está reservada. Quizá sea alguien que ahora mismo está jugando con un robot...", ca: "Aquesta lletra està reservada. Potser és algú que ara mateix està jugant amb un robot...", en: "This letter is reserved. Maybe for someone who is playing with a robot right now...", cs: "Tohle písmenko je rezervované. Možná pro někoho, kdo si právě teď hraje s robotem...", fr: "Cette lettre est réservée. Peut-être pour quelqu'un qui joue avec un robot en ce moment même..." } },
    { letter: "R", emoji: "🧬", item: { es: "Rosalind Franklin", ca: "Rosalind Franklin", en: "Rosalind Franklin", cs: "Rosalind Franklinová", fr: "Rosalind Franklin" },
      fact: { es: "Hizo la foto más importante de la historia: la número 51, donde se vio la forma del ADN.", ca: "Va fer la foto més important de la història: la número 51, on es va veure la forma de l'ADN.", en: "She took the most important photo in history: number 51, where the shape of DNA was seen.", cs: "Pořídila nejdůležitější fotku v dějinách: číslo 51, na které byl vidět tvar DNA.", fr: "Elle a pris la photo la plus importante de l'histoire : la numéro 51, où l'on a vu la forme de l'ADN." } },
    { letter: "S", emoji: "🐋", item: { es: "Sylvia Earle", ca: "Sylvia Earle", en: "Sylvia Earle", cs: "Sylvia Earleová", fr: "Sylvia Earle" },
      fact: { es: "'Su Profundidad': miles de horas bajo el mar defendiendo el océano.", ca: "'Sa Profunditat': milers d'hores sota el mar defensant l'oceà.", en: "'Her Deepness': thousands of hours under the sea defending the ocean.", cs: "'Její Hlubina': tisíce hodin pod mořem na obranu oceánu.", fr: "« Sa Profondeur » : des milliers d'heures sous la mer à défendre l'océan." } },
    { letter: "T", emoji: "🏔️", item: { es: "Tabei, Junko", ca: "Tabei, Junko", en: "Tabei, Junko", cs: "Tabei, Junko", fr: "Tabei, Junko" },
      fact: { es: "La primera mujer en la cima del Everest. Después subió la montaña más alta de cada continente.", ca: "La primera dona al cim de l'Everest. Després va pujar la muntanya més alta de cada continent.", en: "The first woman on top of Everest. Then she climbed the highest mountain on every continent.", cs: "První žena na vrcholu Everestu. Pak vylezla na nejvyšší horu každého kontinentu.", fr: "La première femme au sommet de l'Everest. Ensuite, elle a gravi la plus haute montagne de chaque continent." } },
    { letter: "U", emoji: "📖", item: { es: "Ursula K. Le Guin", ca: "Ursula K. Le Guin", en: "Ursula K. Le Guin", cs: "Ursula K. Le Guinová", fr: "Ursula K. Le Guin" },
      fact: { es: "Inventó mundos enteros con dragones y magos en sus libros. Escribir también es explorar.", ca: "Va inventar mons sencers amb dracs i mags als seus llibres. Escriure també és explorar.", en: "She invented whole worlds with dragons and wizards in her books. Writing is exploring too.", cs: "Ve svých knihách vymyslela celé světy s draky a čaroději. Psaní je taky objevování.", fr: "Elle a inventé des mondes entiers avec dragons et magiciens dans ses livres. Écrire, c'est aussi explorer." } },
    { letter: "V", emoji: "🚀", item: { es: "Valentina Tereshkova", ca: "Valentina Tereshkova", en: "Valentina Tereshkova", cs: "Valentina Těreškovová", fr: "Valentina Terechkova" },
      fact: { es: "La primera mujer en el espacio. Dio 48 vueltas a la Tierra ella sola.", ca: "La primera dona a l'espai. Va fer 48 voltes a la Terra ella sola.", en: "The first woman in space. She circled the Earth 48 times all by herself.", cs: "První žena ve vesmíru. Sama obletěla Zemi 48krát.", fr: "La première femme dans l'espace. Elle a fait 48 fois le tour de la Terre toute seule." } },
    { letter: "W", emoji: "🌳", item: { es: "Wangari Maathai", ca: "Wangari Maathai", en: "Wangari Maathai", cs: "Wangari Maathaiová", fr: "Wangari Maathai" },
      fact: { es: "Organizó la plantación de millones de árboles en África. Un bosque entero de Nobel de la Paz.", ca: "Va organitzar la plantació de milions d'arbres a l'Àfrica. Un bosc sencer de Nobel de la Pau.", en: "She organised the planting of millions of trees in Africa. A whole forest of Nobel Peace Prize.", cs: "Zorganizovala vysazení milionů stromů v Africe. Celý les Nobelovy ceny míru.", fr: "Elle a organisé la plantation de millions d'arbres en Afrique. Toute une forêt de prix Nobel de la paix." } },
    { letter: "X", emoji: "🎼", item: { es: "Xian Zhang", ca: "Xian Zhang", en: "Xian Zhang", cs: "Xian Zhang", fr: "Xian Zhang" },
      fact: { es: "Una de las grandes directoras de orquesta del mundo. Su batuta pone de acuerdo a cien músicos.", ca: "Una de les grans directores d'orquestra del món. La seva batuta posa d'acord cent músics.", en: "One of the great orchestra conductors of the world. Her baton gets a hundred musicians to agree.", cs: "Jedna z velkých dirigentek světa. Její taktovka sladí sto muzikantů.", fr: "L'une des grandes cheffes d'orchestre du monde. Sa baguette met d'accord cent musiciens." } },
    { letter: "Y", emoji: "🟡", item: { es: "Yayoi Kusama", ca: "Yayoi Kusama", en: "Yayoi Kusama", cs: "Yayoi Kusama", fr: "Yayoi Kusama" },
      fact: { es: "La artista de los lunares: llena habitaciones enteras de puntos y espejos infinitos.", ca: "L'artista dels pics: omple habitacions senceres de punts i miralls infinits.", en: "The polka-dot artist: she fills whole rooms with dots and endless mirrors.", cs: "Umělkyně puntíků: plní celé místnosti tečkami a nekonečnými zrcadly.", fr: "L'artiste à pois : elle remplit des pièces entières de points et de miroirs infinis." } },
    { letter: "Z", emoji: "🏛️", item: { es: "Zaha Hadid", ca: "Zaha Hadid", en: "Zaha Hadid", cs: "Zaha Hadid", fr: "Zaha Hadid" },
      fact: { es: "Diseñaba edificios con curvas imposibles, como olas de cemento. La reina de la arquitectura.", ca: "Dissenyava edificis amb corbes impossibles, com onades de ciment. La reina de l'arquitectura.", en: "She designed buildings with impossible curves, like concrete waves. The queen of architecture.", cs: "Navrhovala budovy s nemožnými křivkami, jako betonové vlny. Královna architektury.", fr: "Elle dessinait des bâtiments aux courbes impossibles, comme des vagues de béton. La reine de l'architecture." } }
  ],

  /* ---------- FAMOSAS ---------- */
  famous: [
    { emoji: "⚗️", year: "1903", color: "#00695c", name: { es: "Marie Curie", ca: "Marie Curie", en: "Marie Curie", cs: "Marie Curie-Skłodowská", fr: "Marie Curie" },
      achievement: { es: "Dos premios Nobel. De niña estudiaba a escondidas; de mayor cambió la ciencia.", ca: "Dos premis Nobel. De petita estudiava d'amagat; de gran va canviar la ciència.", en: "Two Nobel Prizes. As a girl she studied in secret; as a grown-up she changed science.", cs: "Dvě Nobelovy ceny. Jako dívka studovala tajně; jako dospělá změnila vědu.", fr: "Deux prix Nobel. Petite, elle étudiait en cachette ; grande, elle a changé la science." },
      quote: { es: "Ahora es el momento de entender más, para temer menos.", ca: "Ara és el moment d'entendre més, per témer menys.", en: "Now is the time to understand more, so that we may fear less.", cs: "Teď je čas víc rozumět, abychom se méně báli.", fr: "C'est le moment de comprendre davantage, afin de craindre moins." } },
    { emoji: "✈️", year: "1932", color: "#bf360c", name: { es: "Amelia Earhart", ca: "Amelia Earhart", en: "Amelia Earhart", cs: "Amelia Earhartová", fr: "Amelia Earhart" },
      achievement: { es: "Cruzó el Atlántico volando sola, con tormentas, hielo... y un termo de sopa.", ca: "Va creuar l'Atlàntic volant sola, amb tempestes, gel... i un termos de sopa.", en: "She flew across the Atlantic alone, through storms, ice... and with a thermos of soup.", cs: "Sama přeletěla Atlantik, skrz bouře, led... a s termoskou polévky.", fr: "Elle a traversé l'Atlantique seule en avion, avec des tempêtes, du givre... et un thermos de soupe." },
      quote: { es: "La manera más difícil de hacer algo es no empezar nunca.", ca: "La manera més difícil de fer una cosa és no començar mai.", en: "The hardest way to do something is to never begin.", cs: "Nejtěžší způsob, jak něco udělat, je nikdy nezačít.", fr: "La façon la plus difficile de faire quelque chose, c'est de ne jamais commencer." } },
    { emoji: "💻", year: "1843", color: "#5e35b1", name: { es: "Ada Lovelace", ca: "Ada Lovelace", en: "Ada Lovelace", cs: "Ada Lovelace", fr: "Ada Lovelace" },
      achievement: { es: "Escribió el primer programa de la historia para una máquina que aún no existía.", ca: "Va escriure el primer programa de la història per a una màquina que encara no existia.", en: "She wrote history's first program for a machine that did not exist yet.", cs: "Napsala první program v dějinách pro stroj, který ještě neexistoval.", fr: "Elle a écrit le premier programme de l'histoire pour une machine qui n'existait pas encore." },
      quote: { es: "La imaginación es la que descubre, antes que los ojos.", ca: "La imaginació és la que descobreix, abans que els ulls.", en: "Imagination discovers things before the eyes do.", cs: "Představivost objevuje dřív než oči.", fr: "L'imagination découvre avant les yeux." } },
    { emoji: "🎨", year: "1939", color: "#ad1457", name: { es: "Frida Kahlo", ca: "Frida Kahlo", en: "Frida Kahlo", cs: "Frida Kahlo", fr: "Frida Kahlo" },
      achievement: { es: "Convirtió sus días difíciles en cuadros llenos de color, flores y valentía.", ca: "Va convertir els seus dies difícils en quadres plens de color, flors i valentia.", en: "She turned her hard days into paintings full of colour, flowers and courage.", cs: "Proměnila své těžké dny v obrazy plné barev, květin a odvahy.", fr: "Elle a transformé ses jours difficiles en tableaux pleins de couleurs, de fleurs et de courage." },
      quote: { es: "Pies, ¿para qué os quiero, si tengo alas para volar?", ca: "Peus, per a què us vull, si tinc ales per volar?", en: "Feet, what do I need you for, when I have wings to fly?", cs: "Nohy, k čemu vás potřebuji, když mám křídla k létání?", fr: "Pieds, pourquoi vous vouloir, si j'ai des ailes pour voler ?" } },
    { emoji: "🧮", year: "1969", color: "#f57c00", name: { es: "Katherine Johnson", ca: "Katherine Johnson", en: "Katherine Johnson", cs: "Katherine Johnsonová", fr: "Katherine Johnson" },
      achievement: { es: "Calculó a mano el camino a la Luna. Los astronautas solo confiaban en sus números.", ca: "Va calcular a mà el camí a la Lluna. Els astronautes només confiaven en els seus números.", en: "She calculated the way to the Moon by hand. The astronauts only trusted her numbers.", cs: "Ručně spočítala cestu na Měsíc. Astronauti věřili jen jejím číslům.", fr: "Elle a calculé à la main le chemin vers la Lune. Les astronautes ne faisaient confiance qu'à ses chiffres." },
      quote: { es: "Me gustaba contar. Contaba todo: los pasos, los platos, las estrellas.", ca: "M'agradava comptar. Ho comptava tot: els passos, els plats, les estrelles.", en: "I liked to count. I counted everything: steps, dishes, stars.", cs: "Ráda jsem počítala. Počítala jsem všechno: kroky, talíře, hvězdy.", fr: "J'aimais compter. Je comptais tout : les pas, les assiettes, les étoiles." } },
    { emoji: "📚", year: "2014", color: "#2e7d32", name: { es: "Malala Yousafzai", ca: "Malala Yousafzai", en: "Malala Yousafzai", cs: "Malála Júsufzajová", fr: "Malala Yousafzai" },
      achievement: { es: "Defendió el derecho de todas las niñas a ir al cole. El Nobel de la Paz más joven de la historia.", ca: "Va defensar el dret de totes les nenes a anar a l'escola. El Nobel de la Pau més jove de la història.", en: "She stood up for every girl's right to go to school. The youngest Nobel Peace laureate in history.", cs: "Bránila právo všech dívek chodit do školy. Nejmladší nositelka Nobelovy ceny míru v dějinách.", fr: "Elle a défendu le droit de toutes les filles d'aller à l'école. La plus jeune prix Nobel de la paix de l'histoire." },
      quote: { es: "Un niño, un profesor, un libro y un lápiz pueden cambiar el mundo.", ca: "Un nen, un professor, un llibre i un llapis poden canviar el món.", en: "One child, one teacher, one book and one pen can change the world.", cs: "Jedno dítě, jeden učitel, jedna kniha a jedno pero mohou změnit svět.", fr: "Un enfant, un professeur, un livre et un stylo peuvent changer le monde." } }
  ],

  childDream: {
    girl: { es: "La próxima mujer increíble", ca: "La propera dona increïble", en: "The next amazing woman", cs: "Další úžasná žena", fr: "La prochaine femme incroyable" },
    boy: { es: "Explorador increíble y gran aliado", ca: "Explorador increïble i gran aliat", en: "Amazing explorer and great ally", cs: "Úžasný objevitel a velký spojenec", fr: "Explorateur incroyable et grand allié" },
    kid: { es: "La próxima persona increíble", ca: "La propera persona increïble", en: "The next amazing person", cs: "Další úžasný člověk", fr: "La prochaine personne incroyable" }
  },
  childQuote: { es: "Las historias increíbles empiezan con un primer paso pequeñito. El mío es hoy.", ca: "Les històries increïbles comencen amb un primer pas petitó. El meu és avui.", en: "Amazing stories start with one tiny first step. Mine is today.", cs: "Úžasné příběhy začínají malinkým prvním krokem. Ten můj je dnes.", fr: "Les histoires incroyables commencent par un tout petit premier pas. Le mien, c'est aujourd'hui." },

  /* ---------- MATES ---------- */
  mathEmojis: ["⭐", "🔬", "🚀", "🎨", "📚", "🏅"],

  /* ---------- CONSTRUCTOR: tu insignia de valiente ---------- */
  builder: {
    title: { es: "¡Diseña tu insignia de valiente!", ca: "Dissenya la teva insígnia de valenta!", en: "Design your bravery badge!", cs: "Navrhni si odznak odvahy!", fr: "Dessine ton insigne de courage !" },
    thing: { es: "insignia", ca: "insígnia", en: "badge", cs: "odznak", fr: "insigne" },
    parts: [
      { id: "body", label: { es: "Color de la insignia", ca: "Color de la insígnia", en: "Badge colour", cs: "Barva odznaku", fr: "Couleur de l'insigne" },
        options: [{ id: "gold", v: "#ffd54f" }, { id: "purple", v: "#ab47bc" }, { id: "teal", v: "#26a69a" }, { id: "pink", v: "#f06292" }] },
      { id: "nose", label: { es: "La forma", ca: "La forma", en: "The shape", cs: "Tvar", fr: "La forme" },
        options: [{ id: "round", v: "round", icon: "⚪" }, { id: "cone", v: "cone", icon: "🔺" }, { id: "star", v: "star", icon: "⭐" }] },
      { id: "window", label: { es: "El símbolo", ca: "El símbol", en: "The symbol", cs: "Symbol", fr: "Le symbole" },
        options: [{ id: "one", v: "one", icon: "🚀" }, { id: "two", v: "two", icon: "🔬📚" }, { id: "heart", v: "heart", icon: "💗" }] },
      { id: "flame", label: { es: "La cinta", ca: "La cinta", en: "The ribbon", cs: "Stužka", fr: "Le ruban" },
        options: [{ id: "orange", v: "#ff7043" }, { id: "blue", v: "#42a5f5" }, { id: "rainbow", v: "rainbow", icon: "🌈" }] }
    ],
    svg(sel) {
      const col = sel.body || "#ffd54f";
      const ribbon = sel.flame === "rainbow" ? "url(#insR)" : (sel.flame || "#ff7043");
      let shape = `<circle cx="50" cy="46" r="26" fill="${col}" stroke="#fff" stroke-width="3"/>`;
      if (sel.nose === "cone") shape = `<path d="M50 18 L76 64 L24 64 Z" fill="${col}" stroke="#fff" stroke-width="3" stroke-linejoin="round"/>`;
      if (sel.nose === "star") shape = `<path d="M50 16 L58 36 L80 38 L63 52 L69 74 L50 61 L31 74 L37 52 L20 38 L42 36 Z" fill="${col}" stroke="#fff" stroke-width="2.5" stroke-linejoin="round"/>`;
      let symbol = `<g fill="#fff"><path d="M50 32 Q56 39 56 50 L44 50 Q44 39 50 32 Z"/><path d="M44 47 L38 56 L44 53 Z"/><path d="M56 47 L62 56 L56 53 Z"/></g>
        <circle cx="50" cy="42" r="3" fill="${col}"/>
        <path d="M46 52 Q50 60 54 52 Z" fill="#ffd54f"/>`;
      if (sel.window === "two") symbol = `<g stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round"><path d="M36 36 L41 46"/><path d="M34 40 Q33 48 39 51"/><path d="M34 54 L46 54"/></g>
        <circle cx="35.2" cy="34.6" r="2.2" fill="#fff"/><circle cx="41.8" cy="47.6" r="2" fill="#fff"/>
        <path d="M52 42 Q56 40 60 42 L60 53 Q56 51 52 53 Z" fill="#fff"/><path d="M68 42 Q64 40 60 42 L60 53 Q64 51 68 53 Z" fill="#fff"/>
        <line x1="60" y1="42" x2="60" y2="53" stroke="${col}" stroke-width="1.2"/>`;
      if (sel.window === "heart") symbol = `<path d="M50 41 C45.5 35.5 38 42 44 49 L50 55.5 L56 49 C62 42 54.5 35.5 50 41 Z" fill="#f8bbd0" stroke="#fff" stroke-width="2"/>`;
      return `<svg viewBox="0 0 100 110" width="190" height="210">
        <defs><linearGradient id="insR" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ff5252"/><stop offset="34%" stop-color="#ffd740"/><stop offset="67%" stop-color="#69f0ae"/><stop offset="100%" stop-color="#40c4ff"/></linearGradient></defs>
        <path d="M38 60 L30 100 L42 92 Z" fill="${ribbon}"/>
        <path d="M62 60 L70 100 L58 92 Z" fill="${ribbon}"/>
        ${shape}
        ${symbol}
        <circle cx="30" cy="26" r="2" fill="#fff"><animate attributeName="opacity" values="1;.2;1" dur="1.8s" repeatCount="indefinite"/></circle>
        <circle cx="72" cy="30" r="2.4" fill="#fff"><animate attributeName="opacity" values=".2;1;.2" dur="2.2s" repeatCount="indefinite"/></circle>
        <circle cx="66" cy="14" r="1.8" fill="#fff"><animate attributeName="opacity" values="1;.3;1" dur="1.4s" repeatCount="indefinite"/></circle>
      </svg>`;
    }
  }
};
