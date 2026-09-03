"use strict";
/* ============================================================
   Contenido de ANIMALES DEL MUNDO (parte A): quiz, alfabeto,
   famosos, mates y constructor (tu animal fantástico).
   ============================================================ */

THEMES.animales.ready = true;
THEMES.animales.content = {

  statusPlace: { es: "Conectado desde la Sabana Arcoíris", ca: "Connectat des de la Sabana Arc de Sant Martí", en: "Connected from the Rainbow Savannah", cs: "Připojeno z Duhové savany", fr: "Connecté depuis la Savane Arc-en-ciel" },
  welcome: { es: "¡Coge los prismáticos, {name}! Hoy damos la vuelta al mundo visitando animales. Primera parada: ¡shhh, que están cerca!", ca: "Agafa els prismàtics, {name}! Avui fem la volta al món visitant animals. Primera parada: xxxt, que són a prop!", en: "Grab your binoculars, {name}! Today we travel the world visiting animals. First stop: shhh, they are close!", cs: "Vezmi si dalekohled, {name}! Dnes objedeme svět a navštívíme zvířata. První zastávka: pššš, jsou blízko!", fr: "Prends tes jumelles, {name} ! Aujourd'hui, on fait le tour du monde des animaux. Premier arrêt : chut, ils sont tout près !" },

  /* ---------- QUIZ ---------- */
  quiz: [
    { emoji: "🐆",
      q: { es: "¿Cuál es el animal terrestre más rápido?", ca: "Quin és l'animal terrestre més ràpid?", en: "What is the fastest land animal?", cs: "Které suchozemské zvíře je nejrychlejší?", fr: "Quel est l'animal terrestre le plus rapide ?" },
      options: [
        { es: "La tortuga", ca: "La tortuga", en: "The tortoise", cs: "Želva", fr: "La tortue" },
        { es: "El guepardo", ca: "El guepard", en: "The cheetah", cs: "Gepard", fr: "Le guépard" },
        { es: "El elefante", ca: "L'elefant", en: "The elephant", cs: "Slon", fr: "L'éléphant" },
        { es: "El caracol", ca: "El cargol", en: "The snail", cs: "Šnek", fr: "L'escargot" }],
      answer: 1,
      explanation: { es: "El guepardo corre como un coche por la autopista... pero solo un ratito: luego necesita una siesta.", ca: "El guepard corre com un cotxe per l'autopista... però només una estoneta: després necessita una migdiada.", en: "The cheetah runs as fast as a car on the motorway... but only for a bit: then it needs a nap.", cs: "Gepard běží rychle jako auto na dálnici... ale jen chvilku: pak potřebuje šlofíka.", fr: "Le guépard court aussi vite qu'une voiture sur l'autoroute... mais un instant seulement : après, il lui faut une sieste." } },
    { emoji: "🐘",
      q: { es: "¿Para qué usa el elefante su trompa?", ca: "Per a què fa servir l'elefant la seva trompa?", en: "What does the elephant use its trunk for?", cs: "K čemu slon používá chobot?", fr: "À quoi sert la trompe de l'éléphant ?" },
      options: [
        { es: "Solo para oler", ca: "Només per olorar", en: "Only for smelling", cs: "Jen k čichání", fr: "Seulement pour sentir" },
        { es: "Para beber, ducharse, abrazar y saludar", ca: "Per beure, dutxar-se, abraçar i saludar", en: "For drinking, showering, hugging and waving", cs: "K pití, sprchování, objímání a zdravení", fr: "Pour boire, se doucher, faire des câlins et saluer" },
        { es: "Para volar", ca: "Per volar", en: "For flying", cs: "K létání", fr: "Pour voler" },
        { es: "De paraguas", ca: "De paraigua", en: "As an umbrella", cs: "Jako deštník", fr: "Comme parapluie" }],
      answer: 1,
      explanation: { es: "¡La trompa es mano, ducha, pajita y bocina, todo en uno! Y con ella abrazan a sus bebés.", ca: "La trompa és mà, dutxa, palleta i botzina, tot en un! I amb ella abracen els seus nadons.", en: "The trunk is a hand, a shower, a straw and a horn, all in one! And they hug their babies with it.", cs: "Chobot je ruka, sprcha, brčko i houkačka v jednom! A objímají jím svá mláďata.", fr: "La trompe est une main, une douche, une paille et un klaxon, tout en un ! Et ils câlinent leurs bébés avec." } },
    { emoji: "🦒",
      q: { es: "¿De qué color es la lengua de la jirafa?", ca: "De quin color és la llengua de la girafa?", en: "What colour is the giraffe's tongue?", cs: "Jakou barvu má žirafí jazyk?", fr: "De quelle couleur est la langue de la girafe ?" },
      options: [
        { es: "Rosa", ca: "Rosa", en: "Pink", cs: "Růžovou", fr: "Rose" },
        { es: "Azul oscuro", ca: "Blau fosc", en: "Dark blue", cs: "Tmavě modrou", fr: "Bleu foncé" },
        { es: "Verde", ca: "Verd", en: "Green", cs: "Zelenou", fr: "Verte" },
        { es: "De rayas", ca: "De ratlles", en: "Stripy", cs: "Pruhovanou", fr: "À rayures" }],
      answer: 1,
      explanation: { es: "¡Azul oscuro! Así no se le quema con el sol mientras come hojas todo el día.", ca: "Blau fosc! Així no se li crema amb el sol mentre menja fulles tot el dia.", en: "Dark blue! That way it does not get sunburnt while eating leaves all day long.", cs: "Tmavě modrou! Aby se jí nespálil na slunci, když celý den okusuje listy.", fr: "Bleu foncé ! Comme ça, elle ne prend pas de coup de soleil en mangeant des feuilles toute la journée." } },
    { emoji: "🐧",
      q: { es: "¿Qué NO saben hacer los pingüinos?", ca: "Què NO saben fer els pingüins?", en: "What can penguins NOT do?", cs: "Co tučňáci NEUMÍ?", fr: "Que ne savent PAS faire les manchots ?" },
      options: [
        { es: "Nadar", ca: "Nedar", en: "Swim", cs: "Plavat", fr: "Nager" },
        { es: "Volar", ca: "Volar", en: "Fly", cs: "Létat", fr: "Voler" },
        { es: "Caminar", ca: "Caminar", en: "Walk", cs: "Chodit", fr: "Marcher" },
        { es: "Deslizarse en la barriga", ca: "Lliscar amb la panxa", en: "Slide on their belly", cs: "Klouzat po břiše", fr: "Glisser sur le ventre" }],
      answer: 1,
      explanation: { es: "No vuelan por el aire... ¡pero vuelan bajo el agua! Nadan rapidísimo y en tierra van en trineo de barriga.", ca: "No volen per l'aire... però volen sota l'aigua! Neden rapidíssim i a terra van en trineu de panxa.", en: "They cannot fly in the air... but they fly underwater! They swim super fast and sled on their bellies on land.", cs: "Nelétají vzduchem... ale létají pod vodou! Plavou rychlostí blesku a po souši jezdí na břiše jako na saních.", fr: "Ils ne volent pas dans les airs... mais ils volent sous l'eau ! Ils nagent très vite et font de la luge sur le ventre." } },
    { emoji: "🐫",
      q: { es: "¿Qué guarda el camello en sus jorobas?", ca: "Què guarda el camell a les seves gepes?", en: "What does the camel keep in its humps?", cs: "Co má velbloud v hrbech?", fr: "Que garde le chameau dans ses bosses ?" },
      options: [
        { es: "Agua", ca: "Aigua", en: "Water", cs: "Vodu", fr: "De l'eau" },
        { es: "Grasa (su despensa)", ca: "Greix (el seu rebost)", en: "Fat (its pantry)", cs: "Tuk (svou spižírnu)", fr: "De la graisse (son garde-manger)" },
        { es: "Arena", ca: "Sorra", en: "Sand", cs: "Písek", fr: "Du sable" },
        { es: "Juguetes", ca: "Joguines", en: "Toys", cs: "Hračky", fr: "Des jouets" }],
      answer: 1,
      explanation: { es: "¡Sorpresa! No es agua: es grasa, su comida de reserva para cruzar el desierto sin merendar.", ca: "Sorpresa! No és aigua: és greix, el seu menjar de reserva per creuar el desert sense berenar.", en: "Surprise! It is not water: it is fat, its packed lunch for crossing the desert without snack stops.", cs: "Překvapení! Není to voda, ale tuk: zásoba jídla na cestu pouští bez svačinek.", fr: "Surprise ! Ce n'est pas de l'eau : c'est de la graisse, son pique-nique pour traverser le désert sans goûter." } },
    { emoji: "🐨",
      q: { es: "¿Cuántas horas duerme un koala al día?", ca: "Quantes hores dorm un coala al dia?", en: "How many hours a day does a koala sleep?", cs: "Kolik hodin denně spí koala?", fr: "Combien d'heures par jour dort un koala ?" },
      options: [
        { es: "2", ca: "2", en: "2", cs: "2", fr: "2" },
        { es: "8", ca: "8", en: "8", cs: "8", fr: "8" },
        { es: "¡Hasta 20!", ca: "Fins a 20!", en: "Up to 20!", cs: "Až 20!", fr: "Jusqu'à 20 !" },
        { es: "No duerme", ca: "No dorm", en: "It never sleeps", cs: "Nespí", fr: "Il ne dort jamais" }],
      answer: 2,
      explanation: { es: "El campeón mundial de la siesta. Sus hojas dan poca energía, así que ahorra durmiendo abrazado a su árbol.", ca: "El campió mundial de la migdiada. Les seves fulles donen poca energia, així que estalvia dormint abraçat al seu arbre.", en: "The world champion of naps. Its leaves give little energy, so it saves it by sleeping hugging its tree.", cs: "Mistr světa ve spaní. Jeho listy dávají málo energie, tak šetří spánkem v objetí svého stromu.", fr: "Le champion du monde de la sieste. Ses feuilles donnent peu d'énergie, alors il économise en dormant accroché à son arbre." } },
    { emoji: "🐝",
      q: { es: "¿Qué fabrican las abejas?", ca: "Què fabriquen les abelles?", en: "What do bees make?", cs: "Co vyrábějí včely?", fr: "Que fabriquent les abeilles ?" },
      options: [
        { es: "Miel", ca: "Mel", en: "Honey", cs: "Med", fr: "Du miel" },
        { es: "Chocolate", ca: "Xocolata", en: "Chocolate", cs: "Čokoládu", fr: "Du chocolat" },
        { es: "Limonada", ca: "Llimonada", en: "Lemonade", cs: "Limonádu", fr: "De la limonade" },
        { es: "Queso", ca: "Formatge", en: "Cheese", cs: "Sýr", fr: "Du fromage" }],
      answer: 0,
      explanation: { es: "Miel dulce a partir del néctar de las flores. Y de paso ayudan a las plantas a tener frutos. ¡Gracias, abejas!", ca: "Mel dolça a partir del nèctar de les flors. I de passada ajuden les plantes a tenir fruits. Gràcies, abelles!", en: "Sweet honey from flower nectar. And they help plants make fruit along the way. Thank you, bees!", cs: "Sladký med z květinového nektaru. A při tom pomáhají rostlinám mít plody. Díky, včely!", fr: "Du miel sucré à partir du nectar des fleurs. Et en passant, elles aident les plantes à donner des fruits. Merci, les abeilles !" } },
    { emoji: "🦎",
      q: { es: "¿Qué sabe hacer el camaleón?", ca: "Què sap fer el camaleó?", en: "What can the chameleon do?", cs: "Co umí chameleon?", fr: "Que sait faire le caméléon ?" },
      options: [
        { es: "Cambiar de color", ca: "Canviar de color", en: "Change colour", cs: "Měnit barvu", fr: "Changer de couleur" },
        { es: "Cantar ópera", ca: "Cantar òpera", en: "Sing opera", cs: "Zpívat operu", fr: "Chanter l'opéra" },
        { es: "Montar en bici", ca: "Anar amb bici", en: "Ride a bike", cs: "Jezdit na kole", fr: "Faire du vélo" },
        { es: "Hacer tortillas", ca: "Fer truites", en: "Make omelettes", cs: "Dělat omelety", fr: "Faire des omelettes" }],
      answer: 0,
      explanation: { es: "Cambia de color según su humor y su temperatura. Y sus ojos miran cada uno a un lado. ¡Vaya crack!", ca: "Canvia de color segons el seu humor i la seva temperatura. I els seus ulls miren cadascun a un costat. Quin crac!", en: "It changes colour with its mood and temperature. And each eye looks a different way. What a champ!", cs: "Mění barvu podle nálady a teploty. A každé oko se mu dívá jinam. To je borec!", fr: "Il change de couleur selon son humeur et sa température. Et chaque œil regarde d'un côté différent. Quel champion !" } },
    { emoji: "🦇",
      q: { es: "¿Cómo encuentra su camino el murciélago de noche?", ca: "Com troba el seu camí el ratpenat de nit?", en: "How does the bat find its way at night?", cs: "Jak netopýr v noci hledá cestu?", fr: "Comment la chauve-souris trouve-t-elle son chemin la nuit ?" },
      options: [
        { es: "Con una linterna", ca: "Amb una llanterna", en: "With a torch", cs: "Baterkou", fr: "Avec une lampe" },
        { es: "Con el eco de sus grititos", ca: "Amb l'eco dels seus xisclets", en: "With the echo of its little squeaks", cs: "Ozvěnou svých pískání", fr: "Avec l'écho de ses petits cris" },
        { es: "Preguntando a los búhos", ca: "Preguntant als mussols", en: "Asking the owls", cs: "Ptá se sov", fr: "En demandant aux hiboux" },
        { es: "Con un mapa", ca: "Amb un mapa", en: "With a map", cs: "Mapou", fr: "Avec une carte" }],
      answer: 1,
      explanation: { es: "Grita bajito, escucha el eco que rebota y así 've' con los oídos. ¡Como un radar de peluche!", ca: "Crida fluixet, escolta l'eco que rebota i així 'hi veu' amb les orelles. Com un radar de peluix!", en: "It squeaks, listens to the echo bouncing back and 'sees' with its ears. Like a fluffy radar!", cs: "Pískne, poslouchá odraženou ozvěnu a tak 'vidí' ušima. Jako plyšový radar!", fr: "Elle crie doucement, écoute l'écho qui rebondit et « voit » avec ses oreilles. Comme un radar en peluche !" } },
    { emoji: "🐜",
      q: { es: "¿Cuánto peso puede levantar una hormiga?", ca: "Quant de pes pot aixecar una formiga?", en: "How much weight can an ant lift?", cs: "Kolik toho mravenec uzvedne?", fr: "Quel poids une fourmi peut-elle soulever ?" },
      options: [
        { es: "Nada, es muy pequeña", ca: "Res, és molt petita", en: "Nothing, it is too small", cs: "Nic, je moc malý", fr: "Rien, elle est trop petite" },
        { es: "Muchas veces su propio peso", ca: "Moltes vegades el seu propi pes", en: "Many times its own weight", cs: "Mnohonásobek své váhy", fr: "Plusieurs fois son propre poids" },
        { es: "Solo una miga", ca: "Només una molla", en: "Just one crumb", cs: "Jen drobeček", fr: "Juste une miette" },
        { es: "Un coche", ca: "Un cotxe", en: "A car", cs: "Auto", fr: "Une voiture" }],
      answer: 1,
      explanation: { es: "Es superforzuda: sería como si tú levantaras un coche. Y trabajan en equipo, que es su mayor truco.", ca: "És superforçuda: seria com si tu aixequessis un cotxe. I treballen en equip, que és el seu millor truc.", en: "It is super strong: like you lifting a car. And they work as a team, which is their best trick.", cs: "Je supersilný: jako kdybys ty zvedla auto. A pracují v týmu, což je jejich největší trik.", fr: "Elle est super costaude : comme si tu soulevais une voiture. Et elles travaillent en équipe, c'est leur meilleur truc." } },
    { emoji: "🦓",
      q: { es: "¿Cómo son las rayas de las cebras?", ca: "Com són les ratlles de les zebres?", en: "What are zebra stripes like?", cs: "Jaké jsou pruhy zeber?", fr: "Comment sont les rayures des zèbres ?" },
      options: [
        { es: "Todas las cebras las tienen iguales", ca: "Totes les zebres les tenen iguals", en: "All zebras have the same ones", cs: "Všechny zebry je mají stejné", fr: "Tous les zèbres ont les mêmes" },
        { es: "Cada cebra tiene un dibujo diferente", ca: "Cada zebra té un dibuix diferent", en: "Each zebra has a different pattern", cs: "Každá zebra má jiný vzor", fr: "Chaque zèbre a un dessin différent" },
        { es: "Son de color rosa", ca: "Són de color rosa", en: "They are pink", cs: "Jsou růžové", fr: "Elles sont roses" },
        { es: "Se borran con la lluvia", ca: "S'esborren amb la pluja", en: "They wash off in the rain", cs: "Smyje je déšť", fr: "Elles s'effacent sous la pluie" }],
      answer: 1,
      explanation: { es: "Cada cebra tiene sus rayas únicas, como tu huella dactilar. Así las crías reconocen a su mamá en la manada.", ca: "Cada zebra té les seves ratlles úniques, com la teva empremta digital. Així les cries reconeixen la seva mama al ramat.", en: "Each zebra has its own unique stripes, like your fingerprint. That is how foals recognise their mum in the herd.", cs: "Každá zebra má svoje jedinečné pruhy, jako ty otisk prstu. Mláďata tak ve stádě poznají svou mámu.", fr: "Chaque zèbre a ses rayures uniques, comme ton empreinte digitale. C'est comme ça que les petits reconnaissent leur maman dans le troupeau." } },
    { emoji: "🦘",
      q: { es: "¿Dónde lleva la mamá canguro a su bebé?", ca: "On porta la mama cangur el seu nadó?", en: "Where does the kangaroo mum carry her baby?", cs: "Kde nosí klokaní máma své mládě?", fr: "Où la maman kangourou porte-t-elle son bébé ?" },
      options: [
        { es: "En una mochila", ca: "En una motxilla", en: "In a backpack", cs: "V batohu", fr: "Dans un sac à dos" },
        { es: "En la espalda del papá", ca: "A l'esquena del papa", en: "On the dad's back", cs: "Na zádech táty", fr: "Sur le dos du papa" },
        { es: "En su bolsa de la barriga", ca: "A la bossa de la panxa", en: "In the pouch on her tummy", cs: "V kapse na bříšku", fr: "Dans la poche de son ventre" },
        { es: "En un carrito", ca: "En un cotxet", en: "In a pram", cs: "V kočárku", fr: "Dans une poussette" }],
      answer: 2,
      explanation: { es: "El bebé canguro nace pequeñito como una gominola y crece calentito en la bolsa de mamá, asomando la cabeza para mirar el mundo.", ca: "El nadó cangur neix petitó com una llaminadura i creix calentó a la bossa de la mama, traient el cap per mirar el món.", en: "A baby kangaroo is born as tiny as a jellybean and grows warm inside mum's pouch, peeking out to watch the world.", cs: "Klokaní miminko se narodí malinké jako bonbonek a roste v teple maminčiny kapsy, odkud vykukuje na svět.", fr: "Le bébé kangourou naît tout petit comme un bonbon et grandit bien au chaud dans la poche de sa maman, en sortant la tête pour regarder le monde." } },
    { emoji: "🦜",
      q: { es: "¿Qué sabe hacer el loro?", ca: "Què sap fer el lloro?", en: "What can a parrot do?", cs: "Co umí papoušek?", fr: "Que sait faire le perroquet ?" },
      options: [
        { es: "Respirar bajo el agua", ca: "Respirar sota l'aigua", en: "Breathe underwater", cs: "Dýchat pod vodou", fr: "Respirer sous l'eau" },
        { es: "Conducir un coche", ca: "Conduir un cotxe", en: "Drive a car", cs: "Řídit auto", fr: "Conduire une voiture" },
        { es: "Repetir palabras que oye", ca: "Repetir paraules que sent", en: "Repeat words it hears", cs: "Opakovat slova, která slyší", fr: "Répéter les mots qu'il entend" },
        { es: "Tejer bufandas", ca: "Teixir bufandes", en: "Knit scarves", cs: "Plést šály", fr: "Tricoter des écharpes" }],
      answer: 2,
      explanation: { es: "Tiene un oído finísimo y le encanta imitar sonidos: voces, timbres y hasta risas. En la selva, imitar a su bandada es su forma de decir que son familia.", ca: "Té una oïda finíssima i li encanta imitar sons: veus, timbres i fins i tot rialles. A la selva, imitar la seva bandada és la seva manera de dir que són família.", en: "It has very sharp hearing and loves copying sounds: voices, doorbells and even laughter. In the jungle, copying its flock is its way of saying they are family.", cs: "Má výborný sluch a moc rád napodobuje zvuky: hlasy, zvonky i smích. V pralese napodobováním svého hejna říká: jsme rodina.", fr: "Il a l'oreille très fine et adore imiter les sons : les voix, les sonnettes et même les rires. Dans la jungle, imiter sa bande est sa façon de dire qu'ils sont une famille." } },
    { emoji: "🦥",
      q: { es: "¿Qué hace el perezoso casi todo el día?", ca: "Què fa el peresós gairebé tot el dia?", en: "What does the sloth do almost all day?", cs: "Co dělá lenochod skoro celý den?", fr: "Que fait le paresseux presque toute la journée ?" },
      options: [
        { es: "Moverse muy despacio colgado de los árboles", ca: "Moure's molt a poc a poc penjat dels arbres", en: "Move very slowly hanging from the trees", cs: "Viset na stromech a pohybovat se pomaloučku", fr: "Se déplacer très lentement accroché aux arbres" },
        { es: "Bailar sin parar", ca: "Ballar sense parar", en: "Dance non-stop", cs: "Tancovat bez přestání", fr: "Danser sans arrêt" },
        { es: "Correr como el rayo", ca: "Córrer com un llamp", en: "Run like lightning", cs: "Běhat jako blesk", fr: "Courir comme l'éclair" },
        { es: "Cavar túneles", ca: "Cavar túnels", en: "Dig tunnels", cs: "Kopat tunely", fr: "Creuser des tunnels" }],
      answer: 0,
      explanation: { es: "Va tan despacito que hasta le crecen algas verdes en el pelo. ¡Y le vienen genial: así se esconde entre las hojas!", ca: "Va tan a poc a poc que fins i tot li creixen algues verdes al pèl. I li van genial: així s'amaga entre les fulles!", en: "It moves so slowly that green algae grow in its fur. And that is great: it helps it hide among the leaves!", cs: "Pohybuje se tak pomalu, že mu v srsti rostou zelené řasy. A to se mu hodí: mezi listy je pak krásně schovaný!", fr: "Il va si lentement que des algues vertes poussent dans ses poils. Et ça l'arrange : il se cache mieux dans les feuilles !" } },
    { emoji: "🐦",
      q: { es: "¿Cuál es el pájaro más pequeño del mundo?", ca: "Quin és l'ocell més petit del món?", en: "What is the smallest bird in the world?", cs: "Který pták je nejmenší na světě?", fr: "Quel est le plus petit oiseau du monde ?" },
      options: [
        { es: "El águila", ca: "L'àguila", en: "The eagle", cs: "Orel", fr: "L'aigle" },
        { es: "El pingüino", ca: "El pingüí", en: "The penguin", cs: "Tučňák", fr: "Le manchot" },
        { es: "La gallina", ca: "La gallina", en: "The hen", cs: "Slepice", fr: "La poule" },
        { es: "El colibrí", ca: "El colibrí", en: "The hummingbird", cs: "Kolibřík", fr: "Le colibri" }],
      answer: 3,
      explanation: { es: "El colibrí abeja pesa menos que una moneda. Puede quedarse quieto en el aire y hasta volar hacia atrás, como un helicóptero diminuto.", ca: "El colibrí abella pesa menys que una moneda. Pot quedar-se quiet a l'aire i fins i tot volar cap enrere, com un helicòpter diminut.", en: "The bee hummingbird weighs less than a coin. It can hover in the air and even fly backwards, like a tiny helicopter.", cs: "Nejmenší druh kolibříka váží méně než mince. Umí se vznášet na místě a dokonce létat pozpátku, jako malinký vrtulník.", fr: "Le colibri abeille pèse moins qu'une pièce de monnaie. Il peut rester immobile dans les airs et même voler en arrière, comme un hélicoptère minuscule." } }
  ],

  /* ---------- ALFABETO ---------- */
  alphabet: [
    { letter: "A", emoji: "🦅", item: { es: "Águila", ca: "Àguila", en: "Ant", cs: "Antilopa", fr: "Aigle" },
      fact: { es: "El águila ve un ratón desde un kilómetro de altura.", ca: "L'àguila veu un ratolí des d'un quilòmetre d'altura.", en: "An ant can lift many times its own weight. Tiny champion!", cs: "Antilopa skáče dál než auto na délku.", fr: "L'aigle voit une souris à un kilomètre de hauteur." } },
    { letter: "B", emoji: "🐻", item: { es: "Búho", ca: "Bisó", en: "Bear", cs: "Bobr", fr: "Bison" },
      fact: { es: "El búho gira la cabeza casi entera para mirar atrás.", ca: "El bisó és el gegant peludo de les praderies.", en: "Bears sleep almost all winter long. What a nap!", cs: "Bobr staví hráze jako opravdový inženýr.", fr: "Le bison est le géant tout poilu des prairies." } },
    { letter: "C", emoji: "🐫", item: { es: "Camello", ca: "Camell", en: "Cheetah", cs: "Cvrček", fr: "Chameau" },
      fact: { es: "El camello guarda grasa en las jorobas, como una despensa de viaje.", ca: "El camell guarda greix a les gepes, com un rebost de viatge.", en: "The cheetah is the fastest sprinter on Earth... then it naps.", cs: "Cvrček zpívá třením křídel o sebe. Letní muzikant!", fr: "Le chameau garde de la graisse dans ses bosses, comme un garde-manger de voyage." } },
    { letter: "D", emoji: "🦎", item: { es: "Dragón de Komodo", ca: "Dragó de Komodo", en: "Deer", cs: "Datel", fr: "Dromadaire" },
      fact: { es: "El lagarto más grande del mundo: ¡un dragón de verdad sin fuego!", ca: "El llangardaix més gran del món: un drac de debò sense foc!", en: "A deer grows new antlers every single year.", cs: "Datel buší do stromu, jako by hrál na bubínek.", fr: "Le dromadaire n'a qu'une bosse : c'est son garde-manger du désert." } },
    { letter: "E", emoji: "🐘", item: { es: "Elefante", ca: "Elefant", en: "Elephant", cs: "Emu", fr: "Éléphant" },
      fact: { es: "Los elefantes se abrazan con la trompa y nunca olvidan a sus amigos.", ca: "Els elefants s'abracen amb la trompa i mai no obliden els seus amics.", en: "Elephants hug with their trunks and never forget their friends.", cs: "Emu je obří pták, který neumí létat, ale běhá jako vítr.", fr: "Les éléphants se font des câlins avec la trompe et n'oublient jamais leurs amis." } },
    { letter: "F", emoji: "🦩", item: { es: "Flamenco", ca: "Flamenc", en: "Fox", cs: "Fenek", fr: "Flamant" },
      fact: { es: "El flamenco es rosa por las gambitas que come. ¡Eres lo que comes!", ca: "El flamenc és rosa per les gambetes que menja. Ets el que menges!", en: "The fox's fluffy tail helps it steer when it runs.", cs: "Fenek má obrovské uši, kterými se ochlazuje v poušti.", fr: "Le flamant est rose à cause des petites crevettes qu'il mange. Tu es ce que tu manges !" } },
    { letter: "G", emoji: "🦍", item: { es: "Gorila", ca: "Goril·la", en: "Giraffe", cs: "Gepard", fr: "Girafe" },
      fact: { es: "El gorila es un gigante pacífico que come plantas y cuida mucho a su familia.", ca: "El goril·la és un gegant pacífic que menja plantes i cuida molt la seva família.", en: "The giraffe's neck is tall as a house, and its tongue is dark blue.", cs: "Gepard je nejrychlejší sprinter na Zemi... a pak si dá šlofíka.", fr: "Le cou de la girafe est haut comme une maison, et sa langue est bleu foncé." } },
    { letter: "H", emoji: "🦛", item: { es: "Hipopótamo", ca: "Hipopòtam", en: "Hedgehog", cs: "Hroch", fr: "Hippopotame" },
      fact: { es: "El hipopótamo parece tranquilo, pero corre más que tú. Mejor saludarlo de lejos.", ca: "L'hipopòtam sembla tranquil, però corre més que tu. Millor saludar-lo de lluny.", en: "The hedgehog rolls into a spiky ball when it gets scared.", cs: "Hroch vypadá klidně, ale běhá rychleji než ty. Radši ho zdrav z dálky.", fr: "L'hippopotame a l'air tranquille, mais il court plus vite que toi. Mieux vaut le saluer de loin." } },
    { letter: "I", emoji: "🦎", item: { es: "Iguana", ca: "Iguana", en: "Iguana", cs: "Ibis", fr: "Iguane" },
      fact: { es: "La iguana toma el sol para calentarse: ¡es su forma de desayunar energía!", ca: "La iguana pren el sol per escalfar-se: és la seva manera d'esmorzar energia!", en: "The iguana sunbathes to warm up: that is how it has energy for breakfast!", cs: "Ibis je pták s dlouhým zahnutým zobákem, posvátný už ve starém Egyptě.", fr: "L'iguane prend le soleil pour se réchauffer : c'est sa façon de prendre son petit-déjeuner d'énergie !" } },
    { letter: "J", emoji: "🦒", item: { es: "Jirafa", ca: "Jaguar", en: "Jaguar", cs: "Ježek", fr: "Jaguar" },
      fact: { es: "La jirafa duerme muy poquito y casi siempre de pie.", ca: "El jaguar neda genial: és el gat gran que no té por de l'aigua.", en: "The jaguar is a great swimmer: the big cat that loves water.", cs: "Ježek se při nebezpečí sbalí do pichlavého klubíčka.", fr: "Le jaguar nage très bien : c'est le grand chat qui n'a pas peur de l'eau." } },
    { letter: "K", emoji: "🐨", item: { es: "Koala", ca: "Koala", en: "Koala", cs: "Koala", fr: "Koala" },
      fact: { es: "El koala duerme hasta 20 horas al día abrazado a su árbol.", ca: "El coala dorm fins a 20 hores al dia abraçat al seu arbre.", en: "The koala sleeps up to 20 hours a day hugging its tree.", cs: "Koala spí až 20 hodin denně v objetí svého stromu.", fr: "Le koala dort jusqu'à 20 heures par jour accroché à son arbre." } },
    { letter: "L", emoji: "🦁", item: { es: "León", ca: "Lleó", en: "Lion", cs: "Lev", fr: "Lion" },
      fact: { es: "En la familia del león, las leonas son las mejores cazadoras del equipo.", ca: "A la família del lleó, les lleones són les millors caçadores de l'equip.", en: "In the lion family, the lionesses are the best hunters of the team.", cs: "Ve lví rodině jsou lvice nejlepší lovkyně týmu.", fr: "Dans la famille du lion, les lionnes sont les meilleures chasseuses de l'équipe." } },
    { letter: "M", emoji: "🐒", item: { es: "Mono", ca: "Mico", en: "Monkey", cs: "Medvěd", fr: "Manchot" },
      fact: { es: "Los monos se peinan unos a otros para decirse: somos amigos.", ca: "Els micos es pentinen els uns als altres per dir-se: som amics.", en: "Monkeys groom each other to say: we are friends.", cs: "Medvěd prospí skoro celou zimu. To je šlofík!", fr: "Le manchot ne vole pas dans les airs... mais il vole sous l'eau !" } },
    { letter: "N", emoji: "🦦", item: { es: "Nutria", ca: "Nyu", en: "Nightingale", cs: "Nosorožec", fr: "Nandou" },
      fact: { es: "Las nutrias duermen de la mano para no separarse flotando.", ca: "El nyu viatja en ramats enormes que creuen rius i planes.", en: "The nightingale sings its best songs at night.", cs: "Nosorožec má roh z keratinu, jako tvoje nehty.", fr: "Le nandou est un grand oiseau coureur d'Amérique du Sud." } },
    { letter: "O", emoji: "🐻", item: { es: "Oso", ca: "Ós", en: "Owl", cs: "Orel", fr: "Ours" },
      fact: { es: "El oso duerme casi todo el invierno. ¡La siesta más larga del bosque!", ca: "L'ós dorm gairebé tot l'hivern. La migdiada més llarga del bosc!", en: "The owl turns its head almost all the way round to look behind.", cs: "Orel vidí myšku z kilometrové výšky.", fr: "L'ours dort presque tout l'hiver. La plus longue sieste de la forêt !" } },
    { letter: "P", emoji: "🐧", item: { es: "Pingüino", ca: "Pingüí", en: "Penguin", cs: "Pštros", fr: "Pingouin" },
      fact: { es: "El papá pingüino emperador cuida el huevo sobre sus patas durante semanas heladas.", ca: "El papa pingüí emperador cuida l'ou sobre les seves potes durant setmanes gelades.", en: "The emperor penguin dad keeps the egg warm on his feet for freezing weeks.", cs: "Pštros neumí létat, ale běží rychleji než kůň.", fr: "Le papa manchot empereur garde l'œuf au chaud sur ses pattes pendant des semaines glacées." } },
    { letter: "Q", emoji: "🦜", item: { es: "Quetzal", ca: "Quetzal", en: "Quetzal", cs: "Quetzal", fr: "Quetzal" },
      fact: { es: "El quetzal tiene plumas verdes brillantes y era el pájaro sagrado de los mayas.", ca: "El quetzal té plomes verdes brillants i era l'ocell sagrat dels maies.", en: "The quetzal has shiny green feathers and was the sacred bird of the Maya.", cs: "Quetzal má zářivě zelené peří a byl posvátným ptákem Mayů.", fr: "Le quetzal a des plumes vertes brillantes et était l'oiseau sacré des Mayas." } },
    { letter: "R", emoji: "🦏", item: { es: "Rinoceronte", ca: "Rinoceront", en: "Rabbit", cs: "Rys", fr: "Renard" },
      fact: { es: "El cuerno del rinoceronte está hecho de lo mismo que tus uñas.", ca: "La banya del rinoceront està feta del mateix que les teves ungles.", en: "A rabbit's teeth never stop growing, so it nibbles all day.", cs: "Rys má na uších štětičky a vidí skvěle i za šera.", fr: "La queue touffue du renard l'aide à tourner quand il court." } },
    { letter: "S", emoji: "🐍", item: { es: "Serpiente", ca: "Serp", en: "Squirrel", cs: "Slon", fr: "Singe" },
      fact: { es: "La serpiente huele con la lengua: por eso la saca tanto.", ca: "La serp olora amb la llengua: per això la treu tant.", en: "Squirrels hide nuts everywhere... and forget half of them. New trees grow!", cs: "Slon se objímá chobotem a nikdy nezapomíná na své kamarády.", fr: "Les singes se coiffent les uns les autres pour se dire : on est amis." } },
    { letter: "T", emoji: "🐯", item: { es: "Tigre", ca: "Tigre", en: "Tiger", cs: "Tygr", fr: "Tigre" },
      fact: { es: "Cada tigre tiene sus propias rayas, como tu huella dactilar.", ca: "Cada tigre té les seves pròpies ratlles, com la teva empremta dactilar.", en: "Every tiger has its own stripes, like your fingerprint.", cs: "Každý tygr má své vlastní pruhy, jako tvůj otisk prstu.", fr: "Chaque tigre a ses propres rayures, comme ton empreinte digitale." } },
    { letter: "U", emoji: "🐦", item: { es: "Urraca", ca: "Ualabi", en: "Umbrella bird", cs: "Užovka", fr: "Urubu" },
      fact: { es: "La urraca es lista y curiosa: le encanta todo lo que brilla.", ca: "L'ualabi és com un cangur petitó que salta pels boscos d'Austràlia.", en: "The umbrella bird wears a feather umbrella on its head. Stylish!", cs: "Užovka je neškodný had, který výborně plave.", fr: "L'urubu plane des heures sans battre des ailes." } },
    { letter: "V", emoji: "🦙", item: { es: "Vicuña", ca: "Vicunya", en: "Vulture", cs: "Vlk", fr: "Vigogne" },
      fact: { es: "La vicuña vive en las montañas más altas y tiene la lana más suave del mundo.", ca: "La vicunya viu a les muntanyes més altes i té la llana més suau del món.", en: "Vultures are nature's cleaning crew: very important workers!", cs: "Vlci žijí ve smečce a starají se jeden o druhého.", fr: "La vigogne vit dans les plus hautes montagnes et a la laine la plus douce du monde." } },
    { letter: "W", emoji: "🐻", item: { es: "Wombat", ca: "Wombat", en: "Wombat", cs: "Wombat", fr: "Wombat" },
      fact: { es: "El wombat hace las cacas cuadradas. Sí, en serio. ¡Cuadradas!", ca: "El wombat fa les caques quadrades. Sí, de debò. Quadrades!", en: "The wombat does cube-shaped poos. Yes, really. Cubes!", cs: "Wombat dělá hranaté bobky. Ano, vážně. Hranaté!", fr: "Le wombat fait des crottes carrées. Oui, vraiment. Carrées !" } },
    { letter: "X", emoji: "🐿️", item: { es: "Xerus", ca: "Xerus", en: "Xerus", cs: "Xerus", fr: "Xérus" },
      fact: { es: "El xerus es una ardilla africana que usa su cola de sombrilla.", ca: "El xerus és un esquirol africà que fa servir la seva cua de para-sol.", en: "The xerus is an African squirrel that uses its tail as a parasol.", cs: "Xerus je africká veverka, která používá ocas jako slunečník.", fr: "Le xérus est un écureuil africain qui utilise sa queue comme parasol." } },
    { letter: "Y", emoji: "🐂", item: { es: "Yak", ca: "Yak", en: "Yak", cs: "Yak", fr: "Yak" },
      fact: { es: "El yak vive feliz en las montañas heladas gracias a su abrigo gigante.", ca: "El iac viu feliç a les muntanyes gelades gràcies al seu abric gegant.", en: "The yak lives happily in freezing mountains thanks to its giant coat.", cs: "Jak žije šťastně v ledových horách díky svému obřímu kožichu.", fr: "Le yak vit heureux dans les montagnes glacées grâce à son manteau géant." } },
    { letter: "Z", emoji: "🦓", item: { es: "Zorro", ca: "Zebra", en: "Zebra", cs: "Zebra", fr: "Zèbre" },
      fact: { es: "La cola del zorro le sirve de bufanda cuando duerme.", ca: "Cada zebra té les seves ratlles úniques, com una empremta.", en: "Every zebra has its own unique stripes, like a fingerprint.", cs: "Každá zebra má jedinečné pruhy, jako otisk prstu.", fr: "Chaque zèbre a ses rayures uniques, comme une empreinte." } }
  ],

  /* ---------- FAMOSOS ---------- */
  famous: [
    { emoji: "🐒", year: "1960", color: "#33691e", name: { es: "Jane Goodall", ca: "Jane Goodall", en: "Jane Goodall", cs: "Jane Goodallová", fr: "Jane Goodall" },
      achievement: { es: "Vivió con los chimpancés y descubrió que usan herramientas, como nosotros.", ca: "Va viure amb els ximpanzés i va descobrir que fan servir eines, com nosaltres.", en: "She lived with chimpanzees and discovered they use tools, like us.", cs: "Žila se šimpanzi a objevila, že používají nástroje, jako my.", fr: "Elle a vécu avec les chimpanzés et a découvert qu'ils utilisent des outils, comme nous." },
      quote: { es: "Cada uno de nosotros cambia el mundo cada día.", ca: "Cadascun de nosaltres canvia el món cada dia.", en: "Every one of us changes the world every day.", cs: "Každý z nás mění svět každý den.", fr: "Chacun de nous change le monde chaque jour." } },
    { emoji: "🎙️", year: "1954", color: "#01579b", name: { es: "David Attenborough", ca: "David Attenborough", en: "David Attenborough", cs: "David Attenborough", fr: "David Attenborough" },
      achievement: { es: "Lleva toda la vida enseñando los animales del mundo con su voz mágica.", ca: "Porta tota la vida ensenyant els animals del món amb la seva veu màgica.", en: "He has spent his whole life showing the world's animals with his magical voice.", cs: "Celý život ukazuje zvířata světa svým kouzelným hlasem.", fr: "Il a passé sa vie à montrer les animaux du monde avec sa voix magique." },
      quote: { es: "Nadie protege lo que no conoce.", ca: "Ningú no protegeix el que no coneix.", en: "No one protects what they do not know.", cs: "Nikdo nechrání to, co nezná.", fr: "Personne ne protège ce qu'il ne connaît pas." } },
    { emoji: "🦉", year: "1974", color: "#5d4037", name: { es: "Félix Rodríguez de la Fuente", ca: "Félix Rodríguez de la Fuente", en: "Félix Rodríguez de la Fuente", cs: "Félix Rodríguez de la Fuente", fr: "Félix Rodríguez de la Fuente" },
      achievement: { es: "El amigo español de los lobos: enseñó a todo un país a querer a la naturaleza.", ca: "L'amic espanyol dels llops: va ensenyar a tot un país a estimar la natura.", en: "The Spanish friend of the wolves: he taught a whole country to love nature.", cs: "Španělský přítel vlků: naučil celou zemi milovat přírodu.", fr: "L'ami espagnol des loups : il a appris à tout un pays à aimer la nature." },
      quote: { es: "El lobo no es el malo del cuento.", ca: "El llop no és el dolent del conte.", en: "The wolf is not the villain of the story.", cs: "Vlk není ten zlý z pohádky.", fr: "Le loup n'est pas le méchant de l'histoire." } },
    { emoji: "🦍", year: "1967", color: "#455a64", name: { es: "Dian Fossey", ca: "Dian Fossey", en: "Dian Fossey", cs: "Dian Fosseyová", fr: "Dian Fossey" },
      achievement: { es: "Vivió en la montaña con los gorilas y los protegió con todas sus fuerzas.", ca: "Va viure a la muntanya amb els goril·les i els va protegir amb totes les seves forces.", en: "She lived in the mountains with the gorillas and protected them with all her might.", cs: "Žila v horách s gorilami a chránila je ze všech sil.", fr: "Elle a vécu dans la montagne avec les gorilles et les a protégés de toutes ses forces." },
      quote: { es: "Cuando entiendes lo que ves, quieres cuidarlo.", ca: "Quan entens el que veus, ho vols cuidar.", en: "When you understand what you see, you want to care for it.", cs: "Když pochopíš, co vidíš, chceš to chránit.", fr: "Quand tu comprends ce que tu vois, tu veux en prendre soin." } },
    { emoji: "🐢", year: "1835", color: "#2e7d32", name: { es: "Charles Darwin", ca: "Charles Darwin", en: "Charles Darwin", cs: "Charles Darwin", fr: "Charles Darwin" },
      achievement: { es: "Viajó en barco por el mundo mirando animales y entendió cómo cambian poco a poco.", ca: "Va viatjar en vaixell pel món mirant animals i va entendre com canvien a poc a poc.", en: "He sailed around the world watching animals and understood how they change little by little.", cs: "Plavil se kolem světa, pozoroval zvířata a pochopil, jak se pomalu mění.", fr: "Il a voyagé en bateau autour du monde en observant les animaux et a compris comment ils changent peu à peu." },
      quote: { es: "Mirar despacio es la mejor lupa.", ca: "Mirar a poc a poc és la millor lupa.", en: "Looking slowly is the best magnifying glass.", cs: "Pomalé pozorování je nejlepší lupa.", fr: "Regarder lentement est la meilleure loupe." } },
    { emoji: "🪿", year: "1935", color: "#ef6c00", name: { es: "Konrad Lorenz", ca: "Konrad Lorenz", en: "Konrad Lorenz", cs: "Konrad Lorenz", fr: "Konrad Lorenz" },
      achievement: { es: "Unos gansitos recién nacidos lo siguieron como a su mamá... ¡y así estudió cómo aprenden los animales!", ca: "Uns oquetes acabats de néixer el van seguir com la seva mama... i així va estudiar com aprenen els animals!", en: "Newborn goslings followed him like their mum... and that is how he studied animal learning!", cs: "Čerstvě vylíhlá housátka ho následovala jako mámu... a tak studoval, jak se zvířata učí!", fr: "Des oisons tout juste nés l'ont suivi comme leur maman... et c'est ainsi qu'il a étudié comment apprennent les animaux !" },
      quote: { es: "Quien camina con gansos aprende a mirar el mundo dos veces.", ca: "Qui camina amb oques aprèn a mirar el món dues vegades.", en: "Whoever walks with geese learns to look at the world twice.", cs: "Kdo chodí s husami, naučí se dívat na svět dvakrát.", fr: "Qui marche avec les oies apprend à regarder le monde deux fois." } }
  ],

  childDream: {
    girl: { es: "Guardiana de los animales del mundo", ca: "Guardiana dels animals del món", en: "Guardian of the world's animals", cs: "Ochránkyně zvířat světa", fr: "Gardienne des animaux du monde" },
    boy: { es: "Guardián de los animales del mundo", ca: "Guardià dels animals del món", en: "Guardian of the world's animals", cs: "Ochránce zvířat světa", fr: "Gardien des animaux du monde" },
    kid: { es: "Peque que cuida los animales del mundo", ca: "Menut que cuida els animals del món", en: "Kid who cares for the world's animals", cs: "Dítě, které chrání zvířata světa", fr: "Enfant qui protège les animaux du monde" }
  },
  childQuote: { es: "Cuando sea mayor daré la vuelta al mundo cuidando animales. ¡Empiezo por los de mi barrio!", ca: "Quan sigui gran faré la volta al món cuidant animals. Començo pels del meu barri!", en: "When I grow up I will travel the world caring for animals. Starting with the ones in my neighbourhood!", cs: "Až vyrostu, objedu svět a budu chránit zvířata. Začnu těmi od nás ze čtvrti!", fr: "Quand je serai grand, je ferai le tour du monde pour protéger les animaux. Je commence par ceux de mon quartier !" },

  /* ---------- MATES ---------- */
  mathEmojis: ["🦁", "🐘", "🦒", "🐒", "🐧", "🦓"],

  /* ---------- CONSTRUCTOR: tu animal fantástico ---------- */
  builder: {
    title: { es: "¡Inventa tu animal fantástico!", ca: "Inventa el teu animal fantàstic!", en: "Invent your own fantastic animal!", cs: "Vymysli si fantastické zvíře!", fr: "Invente ton animal fantastique !" },
    thing: { es: "animal", ca: "animal", en: "animal", cs: "zvíře", fr: "animal" },
    parts: [
      { id: "body", label: { es: "Color del pelaje", ca: "Color del pelatge", en: "Fur colour", cs: "Barva srsti", fr: "Couleur du pelage" },
        options: [{ id: "orange", v: "#ff9800" }, { id: "blue", v: "#42a5f5" }, { id: "green", v: "#66bb6a" }, { id: "pink", v: "#f06292" }] },
      { id: "nose", label: { es: "Las orejas", ca: "Les orelles", en: "The ears", cs: "Uši", fr: "Les oreilles" },
        options: [{ id: "round", v: "round", icon: "🐻" }, { id: "cone", v: "cone", icon: "🦊" }, { id: "star", v: "star", icon: "⭐" }] },
      { id: "window", label: { es: "La cola", ca: "La cua", en: "The tail", cs: "Ocásek", fr: "La queue" },
        options: [{ id: "one", v: "one", icon: "➰" }, { id: "two", v: "two", icon: "➿" }, { id: "heart", v: "heart", icon: "💗" }] },
      { id: "flame", label: { es: "El detalle mágico", ca: "El detall màgic", en: "The magic touch", cs: "Kouzelný detail", fr: "La touche magique" },
        options: [{ id: "orange", v: "#ffd54f" }, { id: "blue", v: "#80deea" }, { id: "rainbow", v: "rainbow", icon: "🌈" }] }
    ],
    svg(sel) {
      const fur = sel.body || "#ff9800";
      const magic = sel.flame === "rainbow" ? "url(#aniR)" : (sel.flame || "#ffd54f");
      let ears = `<circle cx="34" cy="26" r="9" fill="${fur}"/><circle cx="66" cy="26" r="9" fill="${fur}"/>`;
      if (sel.nose === "cone") ears = `<path d="M28 34 L34 12 L44 28 Z" fill="${fur}"/><path d="M72 34 L66 12 L56 28 Z" fill="${fur}"/>`;
      if (sel.nose === "star") ears = `<circle cx="34" cy="24" r="8" fill="${fur}"/><circle cx="66" cy="24" r="8" fill="${fur}"/><text x="28" y="14" font-size="10">⭐</text><text x="62" y="14" font-size="10">⭐</text>`;
      let tail = `<path d="M76 74 Q94 66 90 50" stroke="${fur}" stroke-width="7" fill="none" stroke-linecap="round"/>`;
      if (sel.window === "two") tail = `<path d="M76 74 Q94 68 92 54" stroke="${fur}" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M76 78 Q96 78 94 64" stroke="${fur}" stroke-width="6" fill="none" stroke-linecap="round"/>`;
      if (sel.window === "heart") tail = `<path d="M76 74 Q92 66 90 52" stroke="${fur}" stroke-width="6" fill="none" stroke-linecap="round"/><text x="84" y="50" font-size="12">💗</text>`;
      return `<svg viewBox="0 0 100 110" width="190" height="210">
        <defs><linearGradient id="aniR" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#ff5252"/><stop offset="34%" stop-color="#ffd740"/><stop offset="67%" stop-color="#69f0ae"/><stop offset="100%" stop-color="#40c4ff"/></linearGradient></defs>
        ${ears}
        <circle cx="50" cy="42" r="21" fill="${fur}"/>
        <circle cx="43" cy="38" r="4" fill="#fff"/><circle cx="43" cy="38" r="2" fill="#3e2723"/>
        <circle cx="57" cy="38" r="4" fill="#fff"/><circle cx="57" cy="38" r="2" fill="#3e2723"/>
        <ellipse cx="50" cy="47" rx="4" ry="3" fill="#3e2723"/>
        <path d="M45 53 Q50 58 55 53" stroke="#3e2723" stroke-width="2" fill="none" stroke-linecap="round"/>
        <ellipse cx="50" cy="76" rx="18" ry="15" fill="${fur}"/>
        <ellipse cx="50" cy="79" rx="10" ry="8" fill="${magic}" opacity=".85"/>
        ${tail}
        <rect x="38" y="88" width="8" height="12" rx="4" fill="${fur}"/><rect x="54" y="88" width="8" height="12" rx="4" fill="${fur}"/>
        <circle cx="30" cy="60" r="3" fill="${magic}"><animate attributeName="opacity" values="1;.3;1" dur="1.6s" repeatCount="indefinite"/></circle>
        <circle cx="70" cy="58" r="2.6" fill="${magic}"><animate attributeName="opacity" values=".3;1;.3" dur="2s" repeatCount="indefinite"/></circle>
      </svg>`;
    }
  }
};
