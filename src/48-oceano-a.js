"use strict";
/* ============================================================
   Contenido de OCÉANO (parte A): quiz, alfabeto, famosos,
   mates y constructor (el submarino).
   ============================================================ */

THEMES.oceano.ready = true;
THEMES.oceano.content = {

  statusPlace: { es: "Conectado desde el Arrecife Arcoíris", ca: "Connectat des de l'Escull Arc de Sant Martí", en: "Connected from the Rainbow Reef", cs: "Připojeno z Duhového útesu", fr: "Connecté depuis le Récif Arc-en-ciel" },
  welcome: { es: "¡Ponte las gafas de buceo, {name}! Bajamos al fondo del mar. Glu, glu, glu...", ca: "Posa't les ulleres de busseig, {name}! Baixem al fons del mar. Glu, glu, glu...", en: "Put on your diving goggles, {name}! We are going down to the bottom of the sea. Glug, glug, glug...", cs: "Nasaď si potápěčské brýle, {name}! Klesáme na dno moře. Glo, glo, glo...", fr: "Mets tes lunettes de plongée, {name} ! On descend au fond de la mer. Glou, glou, glou..." },

  /* ---------- QUIZ ---------- */
  quiz: [
    { emoji: "🐋",
      q: { es: "¿Cuál es el animal más grande que ha existido jamás?", ca: "Quin és l'animal més gran que ha existit mai?", en: "What is the biggest animal that has ever existed?", cs: "Které zvíře je největší, jaké kdy existovalo?", fr: "Quel est le plus grand animal ayant jamais existé ?" },
      options: [
        { es: "El T-Rex", ca: "El T-Rex", en: "The T-Rex", cs: "T-Rex", fr: "Le T-Rex" },
        { es: "La ballena azul", ca: "La balena blava", en: "The blue whale", cs: "Plejtvák obrovský", fr: "La baleine bleue" },
        { es: "El elefante", ca: "L'elefant", en: "The elephant", cs: "Slon", fr: "L'éléphant" },
        { es: "El tiburón", ca: "El tauró", en: "The shark", cs: "Žralok", fr: "Le requin" }],
      answer: 1,
      explanation: { es: "¡La ballena azul! Más grande que cualquier dinosaurio. Su corazón es como un coche pequeño.", ca: "La balena blava! Més gran que qualsevol dinosaure. El seu cor és com un cotxe petit.", en: "The blue whale! Bigger than any dinosaur. Its heart is the size of a small car.", cs: "Plejtvák obrovský! Větší než jakýkoli dinosaurus. Jeho srdce je velké jako malé auto.", fr: "La baleine bleue ! Plus grande que n'importe quel dinosaure. Son cœur est grand comme une petite voiture." } },
    { emoji: "🐙",
      q: { es: "¿Cuántos brazos tiene un pulpo?", ca: "Quants braços té un pop?", en: "How many arms does an octopus have?", cs: "Kolik ramen má chobotnice?", fr: "Combien de bras a une pieuvre ?" },
      options: [
        { es: "2", ca: "2", en: "2", cs: "2", fr: "2" },
        { es: "4", ca: "4", en: "4", cs: "4", fr: "4" },
        { es: "8", ca: "8", en: "8", cs: "8", fr: "8" },
        { es: "100", ca: "100", en: "100", cs: "100", fr: "100" }],
      answer: 2,
      explanation: { es: "Ocho brazos... ¡y tres corazones! Y puede cambiar de color como un semáforo mágico.", ca: "Vuit braços... i tres cors! I pot canviar de color com un semàfor màgic.", en: "Eight arms... and three hearts! And it can change colour like a magic traffic light.", cs: "Osm ramen... a tři srdce! A umí měnit barvu jako kouzelný semafor.", fr: "Huit bras... et trois cœurs ! Et elle peut changer de couleur comme un feu magique." } },
    { emoji: "🐟",
      q: { es: "¿Con qué respiran los peces bajo el agua?", ca: "Amb què respiren els peixos sota l'aigua?", en: "What do fish breathe with underwater?", cs: "Čím ryby dýchají pod vodou?", fr: "Avec quoi les poissons respirent-ils sous l'eau ?" },
      options: [
        { es: "Con pulmones", ca: "Amb pulmons", en: "With lungs", cs: "Plícemi", fr: "Avec des poumons" },
        { es: "Con branquias", ca: "Amb brànquies", en: "With gills", cs: "Žábrami", fr: "Avec des branchies" },
        { es: "Con una pajita", ca: "Amb una palleta", en: "With a straw", cs: "Brčkem", fr: "Avec une paille" },
        { es: "No respiran", ca: "No respiren", en: "They do not breathe", cs: "Nedýchají", fr: "Ils ne respirent pas" }],
      answer: 1,
      explanation: { es: "Las branquias sacan el aire que está escondido dentro del agua. ¡Un truco genial!", ca: "Les brànquies treuen l'aire que està amagat dins de l'aigua. Un truc genial!", en: "Gills take the air that is hidden inside the water. A brilliant trick!", cs: "Žábry získávají vzduch, který je schovaný ve vodě. Skvělý trik!", fr: "Les branchies récupèrent l'air caché dans l'eau. Une astuce géniale !" } },
    { emoji: "🐬",
      q: { es: "¿Cómo duermen los delfines?", ca: "Com dormen els dofins?", en: "How do dolphins sleep?", cs: "Jak spí delfíni?", fr: "Comment dorment les dauphins ?" },
      options: [
        { es: "Con medio cerebro despierto", ca: "Amb mig cervell despert", en: "With half their brain awake", cs: "S polovinou mozku vzhůru", fr: "Avec la moitié du cerveau éveillée" },
        { es: "En una cama de algas", ca: "En un llit d'algues", en: "In a seaweed bed", cs: "V postýlce z řas", fr: "Dans un lit d'algues" },
        { es: "No duermen nunca", ca: "No dormen mai", en: "They never sleep", cs: "Nikdy nespí", fr: "Ils ne dorment jamais" },
        { es: "Fuera del agua", ca: "Fora de l'aigua", en: "Out of the water", cs: "Mimo vodu", fr: "Hors de l'eau" }],
      answer: 0,
      explanation: { es: "Duermen con un ojo abierto y medio cerebro de guardia, para acordarse de subir a respirar.", ca: "Dormen amb un ull obert i mig cervell de guàrdia, per recordar-se de pujar a respirar.", en: "They sleep with one eye open and half their brain on guard, to remember to come up and breathe.", cs: "Spí s jedním okem otevřeným a polovinou mozku na hlídce, aby se nezapomněli nadechnout.", fr: "Ils dorment avec un œil ouvert et la moitié du cerveau de garde, pour penser à remonter respirer." } },
    { emoji: "🌊",
      q: { es: "¿Quién lleva a los bebés en la familia de los caballitos de mar?", ca: "Qui porta els nadons a la família dels cavallets de mar?", en: "Who carries the babies in the seahorse family?", cs: "Kdo nosí mláďata v rodině mořských koníků?", fr: "Qui porte les bébés dans la famille des hippocampes ?" },
      options: [
        { es: "La mamá", ca: "La mama", en: "The mum", cs: "Máma", fr: "La maman" },
        { es: "El papá", ca: "El papa", en: "The dad", cs: "Táta", fr: "Le papa" },
        { es: "La abuela", ca: "L'àvia", en: "The granny", cs: "Babička", fr: "La mamie" },
        { es: "Un delfín niñero", ca: "Un dofí mainader", en: "A babysitter dolphin", cs: "Delfíní chůva", fr: "Un dauphin nounou" }],
      answer: 1,
      explanation: { es: "¡El papá caballito lleva los huevos en su bolsita hasta que nacen! Es el rey de los papás.", ca: "El papa cavallet porta els ous a la seva bosseta fins que neixen! És el rei dels papes.", en: "The seahorse dad carries the eggs in his little pouch until they hatch! The king of dads.", cs: "Táta koník nosí vajíčka ve své kapsičce, dokud se nevylíhnou! Král všech tátů.", fr: "Le papa hippocampe porte les œufs dans sa petite poche jusqu'à leur naissance ! Le roi des papas." } },
    { emoji: "🪼",
      q: { es: "¿Qué NO tienen las medusas?", ca: "Què NO tenen les meduses?", en: "What do jellyfish NOT have?", cs: "Co medúzy NEMAJÍ?", fr: "Qu'est-ce que les méduses n'ont PAS ?" },
      options: [
        { es: "Cerebro ni huesos", ca: "Cervell ni ossos", en: "A brain or bones", cs: "Mozek ani kosti", fr: "Ni cerveau ni os" },
        { es: "Agua", ca: "Aigua", en: "Water", cs: "Vodu", fr: "D'eau" },
        { es: "Forma de paraguas", ca: "Forma de paraigua", en: "An umbrella shape", cs: "Tvar deštníku", fr: "De forme de parapluie" },
        { es: "Tentáculos", ca: "Tentacles", en: "Tentacles", cs: "Chapadla", fr: "De tentacules" }],
      answer: 0,
      explanation: { es: "Ni cerebro, ni huesos, ni corazón. Son casi todo agua... ¡y llevan millones de años bailando en el mar!", ca: "Ni cervell, ni ossos, ni cor. Són gairebé tot aigua... i porten milions d'anys ballant al mar!", en: "No brain, no bones, no heart. They are almost all water... and they have been dancing in the sea for millions of years!", cs: "Ani mozek, ani kosti, ani srdce. Jsou skoro celé z vody... a tancují v moři už miliony let!", fr: "Ni cerveau, ni os, ni cœur. Elles sont presque toutes en eau... et elles dansent dans la mer depuis des millions d'années !" } },
    { emoji: "🐢",
      q: { es: "¿Adónde vuelven las tortugas marinas a poner sus huevos?", ca: "On tornen les tortugues marines a pondre els seus ous?", en: "Where do sea turtles go back to lay their eggs?", cs: "Kam se mořské želvy vracejí klást vajíčka?", fr: "Où les tortues marines retournent-elles pondre leurs œufs ?" },
      options: [
        { es: "A cualquier playa", ca: "A qualsevol platja", en: "To any beach", cs: "Na jakoukoli pláž", fr: "Sur n'importe quelle plage" },
        { es: "A la playa donde nacieron", ca: "A la platja on van néixer", en: "To the beach where they were born", cs: "Na pláž, kde se narodily", fr: "Sur la plage où elles sont nées" },
        { es: "A la piscina", ca: "A la piscina", en: "To the swimming pool", cs: "Do bazénu", fr: "À la piscine" },
        { es: "Al fondo del mar", ca: "Al fons del mar", en: "To the bottom of the sea", cs: "Na dno moře", fr: "Au fond de la mer" }],
      answer: 1,
      explanation: { es: "Cruzan océanos enteros para volver a su playa de nacimiento. ¡Tienen un GPS en el corazón!", ca: "Creuen oceans sencers per tornar a la seva platja de naixement. Tenen un GPS al cor!", en: "They cross whole oceans to return to the beach where they were born. A GPS in their heart!", cs: "Přeplavou celé oceány, aby se vrátily na svou rodnou pláž. Mají GPS v srdíčku!", fr: "Elles traversent des océans entiers pour revenir à leur plage de naissance. Un GPS dans le cœur !" } },
    { emoji: "🌍",
      q: { es: "¿Cuánta parte de la Tierra está cubierta de mar?", ca: "Quanta part de la Terra està coberta de mar?", en: "How much of the Earth is covered by sea?", cs: "Kolik Země pokrývá moře?", fr: "Quelle partie de la Terre est couverte par la mer ?" },
      options: [
        { es: "Un poquito", ca: "Una miqueta", en: "A tiny bit", cs: "Malinký kousek", fr: "Un tout petit peu" },
        { es: "La mitad", ca: "La meitat", en: "Half", cs: "Polovinu", fr: "La moitié" },
        { es: "Más de dos tercios", ca: "Més de dos terços", en: "More than two thirds", cs: "Víc než dvě třetiny", fr: "Plus des deux tiers" },
        { es: "Nada", ca: "Res", en: "None", cs: "Nic", fr: "Rien" }],
      answer: 2,
      explanation: { es: "Por eso desde el espacio la Tierra se ve azul. ¡Vivimos en el planeta del agua!", ca: "Per això des de l'espai la Terra es veu blava. Vivim al planeta de l'aigua!", en: "That is why Earth looks blue from space. We live on the water planet!", cs: "Proto Země z vesmíru vypadá modrá. Žijeme na vodní planetě!", fr: "C'est pour ça que la Terre paraît bleue depuis l'espace. Nous vivons sur la planète de l'eau !" } },
    { emoji: "🪸",
      q: { es: "¿Qué es el coral?", ca: "Què és el corall?", en: "What is coral?", cs: "Co je korál?", fr: "Qu'est-ce que le corail ?" },
      options: [
        { es: "Una piedra de colores", ca: "Una pedra de colors", en: "A colourful stone", cs: "Barevný kámen", fr: "Une pierre colorée" },
        { es: "Una planta", ca: "Una planta", en: "A plant", cs: "Rostlina", fr: "Une plante" },
        { es: "Un animal pequeñito", ca: "Un animal petitó", en: "A tiny animal", cs: "Malinké zvířátko", fr: "Un tout petit animal" },
        { es: "Un juguete", ca: "Una joguina", en: "A toy", cs: "Hračka", fr: "Un jouet" }],
      answer: 2,
      explanation: { es: "¡Es un animal! Millones de corales juntos construyen arrecifes: las ciudades más coloridas del mar.", ca: "És un animal! Milions de coralls junts construeixen esculls: les ciutats més acolorides del mar.", en: "It is an animal! Millions of corals together build reefs: the most colourful cities in the sea.", cs: "Je to zvíře! Miliony korálů společně staví útesy: nejbarevnější města v moři.", fr: "C'est un animal ! Des millions de coraux construisent ensemble des récifs : les villes les plus colorées de la mer." } },
    { emoji: "💨",
      q: { es: "¿Quién hace las olas del mar?", ca: "Qui fa les onades del mar?", en: "Who makes the waves in the sea?", cs: "Kdo dělá vlny na moři?", fr: "Qui fait les vagues de la mer ?" },
      options: [
        { es: "El viento", ca: "El vent", en: "The wind", cs: "Vítr", fr: "Le vent" },
        { es: "Los peces al nadar", ca: "Els peixos en nedar", en: "Fish swimming", cs: "Plavající ryby", fr: "Les poissons qui nagent" },
        { es: "Los barcos", ca: "Els vaixells", en: "Boats", cs: "Lodě", fr: "Les bateaux" },
        { es: "Una ballena estornudando", ca: "Una balena esternudant", en: "A whale sneezing", cs: "Kýchající velryba", fr: "Une baleine qui éternue" }],
      answer: 0,
      explanation: { es: "El viento empuja el agua y nacen las olas. ¡Cuanto más sopla, más grandes vienen!", ca: "El vent empeny l'aigua i neixen les onades. Com més bufa, més grans vénen!", en: "The wind pushes the water and waves are born. The harder it blows, the bigger they get!", cs: "Vítr tlačí vodu a tak vznikají vlny. Čím víc fouká, tím jsou větší!", fr: "Le vent pousse l'eau et les vagues naissent. Plus il souffle, plus elles sont grandes !" } },
    { emoji: "🐠",
      q: { es: "¿Dónde vive el pez payaso?", ca: "On viu el peix pallasso?", en: "Where does the clownfish live?", cs: "Kde bydlí rybka klaun?", fr: "Où vit le poisson-clown ?" },
      options: [
        { es: "Entre los brazos de una anémona", ca: "Entre els braços d'una anemone", en: "In the arms of an anemone", cs: "V náručí sasanky", fr: "Dans les bras d'une anémone" },
        { es: "En un castillo de arena", ca: "En un castell de sorra", en: "In a sandcastle", cs: "V hradu z písku", fr: "Dans un château de sable" },
        { es: "En un nido en un árbol", ca: "En un niu en un arbre", en: "In a nest in a tree", cs: "V hnízdě na stromě", fr: "Dans un nid dans un arbre" },
        { es: "En una nevera", ca: "En una nevera", en: "In a fridge", cs: "V lednici", fr: "Dans un frigo" }],
      answer: 0,
      explanation: { es: "La anémona pica a los demás peces, pero al pez payaso no: entre sus brazos tiene la casita más segura del arrecife.", ca: "L'anemone pica els altres peixos, però el peix pallasso no: entre els seus braços té la caseta més segura de l'escull.", en: "The anemone stings other fish, but not the clownfish: its arms are the safest little home in the reef.", cs: "Sasanka ostatní ryby požahá, ale rybku klauna ne: v jejím náručí má nejbezpečnější domeček na útesu.", fr: "L'anémone pique les autres poissons, mais pas le poisson-clown : ses bras sont la petite maison la plus sûre du récif." } },
    { emoji: "🦀",
      q: { es: "¿Cómo camina el cangrejo?", ca: "Com camina el cranc?", en: "How does a crab walk?", cs: "Jak chodí krab?", fr: "Comment marche le crabe ?" },
      options: [
        { es: "Siempre hacia atrás", ca: "Sempre cap enrere", en: "Always backwards", cs: "Vždycky pozpátku", fr: "Toujours en arrière" },
        { es: "De lado", ca: "De costat", en: "Sideways", cs: "Bokem", fr: "De côté" },
        { es: "A saltos gigantes", ca: "A salts gegants", en: "In giant hops", cs: "Obřími skoky", fr: "En sauts géants" },
        { es: "Rodando como una pelota", ca: "Rodolant com una pilota", en: "Rolling like a ball", cs: "Kutálí se jako míč", fr: "En roulant comme un ballon" }],
      answer: 1,
      explanation: { es: "Sus patas se doblan hacia los lados, así que de lado corre rapidísimo por la playa. ¡Su paso torcido es su superpoder!", ca: "Les seves potes es dobleguen cap als costats, així que de costat corre rapidíssim per la platja. El seu pas tort és el seu superpoder!", en: "Its legs bend sideways, so it runs super fast along the beach that way. Its sideways walk is its superpower!", cs: "Nohy se mu ohýbají do stran, takže bokem běhá po pláži strašně rychle. Jeho křivá chůze je jeho superschopnost!", fr: "Ses pattes se plient sur les côtés, alors il court très vite de côté sur la plage. Sa marche de travers est son superpouvoir !" } },
    { emoji: "🐡",
      q: { es: "¿Qué hace el pez globo cuando se asusta?", ca: "Què fa el peix globus quan s'espanta?", en: "What does the pufferfish do when it gets scared?", cs: "Co udělá čtverzubec, když se lekne?", fr: "Que fait le poisson-ballon quand il a peur ?" },
      options: [
        { es: "Se esconde en la arena", ca: "S'amaga a la sorra", en: "It hides in the sand", cs: "Schová se do písku", fr: "Il se cache dans le sable" },
        { es: "Sale del agua volando", ca: "Surt de l'aigua volant", en: "It flies out of the water", cs: "Vyletí z vody", fr: "Il s'envole hors de l'eau" },
        { es: "Se hincha como una pelota con pinchos", ca: "S'infla com una pilota amb punxes", en: "It puffs up like a spiky ball", cs: "Nafoukne se jako ostnatý míč", fr: "Il se gonfle comme un ballon à piquants" },
        { es: "Pide ayuda a un delfín", ca: "Demana ajuda a un dofí", en: "It asks a dolphin for help", cs: "Poprosí o pomoc delfína", fr: "Il demande de l'aide à un dauphin" }],
      answer: 2,
      explanation: { es: "Traga agua a toda velocidad y se pone redondo y lleno de pinchos: así nadie se atreve a comérselo.", ca: "Empassa aigua a tota velocitat i es posa rodó i ple de punxes: així ningú no s'atreveix a menjar-se'l.", en: "It gulps water at top speed and turns round and spiky: that way nobody dares to eat it.", cs: "Bleskově do sebe nasaje vodu a je z něj kulatý ostnatý balonek: nikdo se ho pak neodváží sníst.", fr: "Il avale de l'eau à toute vitesse et devient tout rond et plein de piquants : comme ça, personne n'ose le manger." } },
    { emoji: "✨",
      q: { es: "En el fondo del mar, donde no llega la luz del sol, ¿qué hacen muchos animales?", ca: "Al fons del mar, on no arriba la llum del sol, què fan molts animals?", en: "Deep down in the sea, where sunlight cannot reach, what do many animals do?", cs: "Co dělá spousta zvířat hluboko v moři, kam slunce nedosvítí?", fr: "Tout au fond de la mer, là où le soleil n'arrive pas, que font beaucoup d'animaux ?" },
      options: [
        { es: "Fabrican su propia luz", ca: "Fabriquen la seva pròpia llum", en: "They make their own light", cs: "Vyrábějí si vlastní světlo", fr: "Ils fabriquent leur propre lumière" },
        { es: "Encienden velas", ca: "Encenen espelmes", en: "They light candles", cs: "Zapalují svíčky", fr: "Ils allument des bougies" },
        { es: "Duermen todo el año", ca: "Dormen tot l'any", en: "They sleep all year", cs: "Spí celý rok", fr: "Ils dorment toute l'année" },
        { es: "Se vuelven invisibles", ca: "Es tornen invisibles", en: "They turn invisible", cs: "Stanou se neviditelnými", fr: "Ils deviennent invisibles" }],
      answer: 0,
      explanation: { es: "Se llama bioluminiscencia: sus cuerpos brillan como estrellitas vivas, y así se saludan y se encuentran en la oscuridad.", ca: "Es diu bioluminescència: els seus cossos brillen com estrelletes vives, i així se saluden i es troben a la foscor.", en: "It is called bioluminescence: their bodies glow like living little stars, so they can greet and find each other in the dark.", cs: "Říká se tomu bioluminiscence: jejich těla svítí jako živé hvězdičky, a tak se ve tmě zdraví a nacházejí.", fr: "Ça s'appelle la bioluminescence : leur corps brille comme de petites étoiles vivantes, pour se saluer et se retrouver dans le noir." } },
    { emoji: "🦦",
      q: { es: "¿Qué usa la nutria marina para abrir las conchas?", ca: "Què fa servir la llúdria marina per obrir les petxines?", en: "What does the sea otter use to open shells?", cs: "Čím mořská vydra otevírá mušle?", fr: "Qu'utilise la loutre de mer pour ouvrir les coquillages ?" },
      options: [
        { es: "Un tenedor", ca: "Una forquilla", en: "A fork", cs: "Vidličku", fr: "Une fourchette" },
        { es: "Un abrelatas", ca: "Un obrellaunes", en: "A tin opener", cs: "Otvírák na konzervy", fr: "Un ouvre-boîte" },
        { es: "Los dientes de un tiburón", ca: "Les dents d'un tauró", en: "A shark's teeth", cs: "Zuby žraloka", fr: "Les dents d'un requin" },
        { es: "Una piedra, sobre su barriga", ca: "Una pedra, sobre la panxa", en: "A stone, on its tummy", cs: "Kámen na bříšku", fr: "Une pierre, sur son ventre" }],
      answer: 3,
      explanation: { es: "Flota panza arriba, se pone una piedra en la barriga y golpea la concha hasta abrirla. ¡Es de los pocos animales que usan herramientas!", ca: "Flota panxa enlaire, es posa una pedra a la panxa i pica la petxina fins a obrir-la. És dels pocs animals que fan servir eines!", en: "It floats on its back, puts a stone on its tummy and taps the shell until it opens. One of the few animals that use tools!", cs: "Plave na zádech, na bříško si položí kámen a ťuká mušlí, dokud se neotevře. Je jedním z mála zvířat, která používají nástroje!", fr: "Elle flotte sur le dos, pose une pierre sur son ventre et tape le coquillage jusqu'à l'ouvrir. Un des rares animaux à utiliser des outils !" } }
  ],

  /* ---------- ALFABETO ---------- */
  alphabet: [
    { letter: "A", emoji: "🌸", item: { es: "Anémona", ca: "Anemone", en: "Anemone", cs: "Atlantik", fr: "Anémone" },
      fact: { es: "Parece una flor, pero es un animal. El pez payaso vive entre sus brazos.", ca: "Sembla una flor, però és un animal. El peix pallasso viu entre els seus braços.", en: "It looks like a flower, but it is an animal. The clownfish lives in its arms.", cs: "Atlantik je druhý největší oceán světa.", fr: "On dirait une fleur, mais c'est un animal. Le poisson-clown vit dans ses bras." } },
    { letter: "B", emoji: "🐋", item: { es: "Ballena", ca: "Balena", en: "Blue whale", cs: "Bublinky", fr: "Baleine" },
      fact: { es: "Las ballenas cantan canciones que viajan cientos de kilómetros bajo el agua.", ca: "Les balenes canten cançons que viatgen centenars de quilòmetres sota l'aigua.", en: "Blue whales sing songs that travel hundreds of kilometres underwater.", cs: "Bublinky stoupají vzhůru: tak poznáš, kudy je nahoru!", fr: "Les baleines chantent des chansons qui voyagent des centaines de kilomètres sous l'eau." } },
    { letter: "C", emoji: "🪸", item: { es: "Coral", ca: "Corall", en: "Coral", cs: "Cvakání delfínů", fr: "Corail" },
      fact: { es: "Los arrecifes de coral son las ciudades más coloridas del mar.", ca: "Els esculls de corall són les ciutats més acolorides del mar.", en: "Coral reefs are the most colourful cities in the sea.", cs: "Delfíni spolu mluví cvakáním a pískáním.", fr: "Les récifs de corail sont les villes les plus colorées de la mer." } },
    { letter: "D", emoji: "🐬", item: { es: "Delfín", ca: "Dofí", en: "Dolphin", cs: "Delfín", fr: "Dauphin" },
      fact: { es: "Los delfines se llaman entre ellos con silbidos: ¡cada uno tiene su nombre!", ca: "Els dofins es criden entre ells amb xiulets: cadascun té el seu nom!", en: "Dolphins call each other with whistles: each one has its own name!", cs: "Delfíni na sebe volají pískáním: každý má své vlastní jméno!", fr: "Les dauphins s'appellent avec des sifflements : chacun a son propre nom !" } },
    { letter: "E", emoji: "⭐", item: { es: "Estrella de mar", ca: "Estrella de mar", en: "Eel", cs: "Elektrický úhoř", fr: "Étoile de mer" },
      fact: { es: "Si pierde un brazo, le crece otro nuevo. ¡Magia de verdad!", ca: "Si perd un braç, li creix un altre de nou. Màgia de debò!", en: "Eels look like ribbons and swim by waving their whole body.", cs: "Elektrický úhoř umí vyrobit vlastní elektřinu. Nabitá ryba!", fr: "Si elle perd un bras, un nouveau repousse. De la vraie magie !" } },
    { letter: "F", emoji: "🦭", item: { es: "Foca", ca: "Foca", en: "Fish", cs: "Fjord", fr: "Fond marin" },
      fact: { es: "Las focas nadan como campeonas y duermen la siesta en las rocas.", ca: "Les foques neden com campiones i fan la migdiada a les roques.", en: "There are more kinds of fish than of any other animal with a backbone.", cs: "Fjord je mořské údolí mezi horami, vyrobené ledovcem.", fr: "Le fond marin cache des montagnes plus hautes que celles de la terre." } },
    { letter: "G", emoji: "🦐", item: { es: "Gamba", ca: "Gamba", en: "Gills", cs: "Golfský proud", fr: "Goéland" },
      fact: { es: "Algunas gambas hacen tanto ruido con su pinza que suenan como palomitas.", ca: "Algunes gambes fan tant soroll amb la seva pinça que sonen com crispetes.", en: "Gills are the trick fish use to breathe underwater.", cs: "Golfský proud je teplá řeka, která teče uvnitř oceánu.", fr: "Le goéland est le roi des plages : il voit un pique-nique à des kilomètres." } },
    { letter: "H", emoji: "🐴", item: { es: "Hipocampo", ca: "Hipocamp", en: "Hermit crab", cs: "Hvězdice", fr: "Hippocampe" },
      fact: { es: "El hipocampo es el caballito de mar. Nada de pie, ¡y el papá lleva a los bebés!", ca: "L'hipocamp és el cavallet de mar. Neda dret, i el papa porta els nadons!", en: "The hermit crab moves house when it grows: it finds a bigger shell!", cs: "Hvězdici doroste nová noha, když o ni přijde. Opravdové kouzlo!", fr: "L'hippocampe nage debout, et c'est le papa qui porte les bébés !" } },
    { letter: "I", emoji: "🧊", item: { es: "Iceberg", ca: "Iceberg", en: "Iceberg", cs: "Inkoust chobotnice", fr: "Iceberg" },
      fact: { es: "De un iceberg solo se ve la puntita: casi todo está escondido bajo el agua.", ca: "D'un iceberg només se'n veu la punteta: gairebé tot està amagat sota l'aigua.", en: "You only see the tip of an iceberg: almost all of it hides underwater.", cs: "Chobotnice vypustí inkoustový mrak a zmizí jako kouzelník.", fr: "On ne voit que la pointe d'un iceberg : presque tout se cache sous l'eau." } },
    { letter: "J", emoji: "🪼", item: { es: "Jardines de coral", ca: "Jardins de corall", en: "Jellyfish", cs: "Jikry", fr: "Jardin de corail" },
      fact: { es: "Los jardines de coral dan casa a una de cada cuatro criaturas del mar.", ca: "Els jardins de corall donen casa a una de cada quatre criatures del mar.", en: "Jellyfish have been dancing in the sea since before the dinosaurs.", cs: "Jikry jsou rybí vajíčka. Z každého se může narodit rybka.", fr: "Les jardins de corail abritent une créature marine sur quatre." } },
    { letter: "K", emoji: "🦐", item: { es: "Krill", ca: "Krill", en: "Krill", cs: "Krill", fr: "Krill" },
      fact: { es: "Bichitos diminutos que alimentan a las ballenas gigantes. ¡Los pequeños mandan!", ca: "Bitxets diminuts que alimenten les balenes gegants. Els petits manen!", en: "Tiny creatures that feed the giant whales. The little ones rule!", cs: "Drobouncí tvorečkové, kterými se živí obří velryby. Malí vládnou!", fr: "De minuscules bestioles qui nourrissent les baleines géantes. Les petits commandent !" } },
    { letter: "L", emoji: "🦞", item: { es: "Langosta", ca: "Llagosta", en: "Lobster", cs: "Lastura", fr: "Langouste" },
      fact: { es: "Las langostas caminan en fila india por el fondo del mar, como excursionistas.", ca: "Les llagostes caminen en fila índia pel fons del mar, com excursionistes.", en: "Lobsters walk in single file along the sea floor, like hikers.", cs: "Přilož lasturu k uchu: uslyšíš šumění jako z moře.", fr: "Les langoustes marchent en file indienne au fond de la mer, comme des randonneurs." } },
    { letter: "M", emoji: "🪼", item: { es: "Medusa", ca: "Medusa", en: "Manta ray", cs: "Medúza", fr: "Méduse" },
      fact: { es: "Las medusas bailan en el agua desde antes de los dinosaurios.", ca: "Les meduses ballen a l'aigua des d'abans dels dinosaures.", en: "Manta rays fly underwater like giant gentle kites.", cs: "Medúzy tancují v moři už od dob před dinosaury.", fr: "Les méduses dansent dans l'eau depuis avant les dinosaures." } },
    { letter: "N", emoji: "🦄", item: { es: "Narval", ca: "Narval", en: "Narwhal", cs: "Narval", fr: "Narval" },
      fact: { es: "El unicornio del mar: su cuerno es en realidad un diente larguísimo.", ca: "L'unicorn del mar: la seva banya és en realitat una dent llarguíssima.", en: "The unicorn of the sea: its horn is actually a very long tooth.", cs: "Jednorožec moří: jeho roh je ve skutečnosti předlouhý zub.", fr: "La licorne de la mer : sa corne est en réalité une très longue dent." } },
    { letter: "O", emoji: "🐋", item: { es: "Orca", ca: "Orca", en: "Orca", cs: "Oceán", fr: "Orque" },
      fact: { es: "Las orcas viven con sus abuelas, que les enseñan los mejores sitios para pescar.", ca: "Les orques viuen amb les seves àvies, que els ensenyen els millors llocs per pescar.", en: "Orcas live with their grannies, who teach them the best fishing spots.", cs: "Oceány pokrývají víc než dvě třetiny naší planety.", fr: "Les orques vivent avec leurs mamies, qui leur montrent les meilleurs coins de pêche." } },
    { letter: "P", emoji: "🐙", item: { es: "Pulpo", ca: "Pop", en: "Pufferfish", cs: "Perla", fr: "Pieuvre" },
      fact: { es: "Ocho brazos, tres corazones y campeón del escondite: cambia de color y desaparece.", ca: "Vuit braços, tres cors i campió de fet i amagar: canvia de color i desapareix.", en: "The pufferfish blows up like a spiky balloon when it gets scared.", cs: "Perla se rodí uvnitř mušle, z jednoho zrnka písku.", fr: "Huit bras, trois cœurs et champion de cache-cache : elle change de couleur et disparaît." } },
    { letter: "Q", emoji: "🦐", item: { es: "Quisquilla", ca: "Quilla", en: "Questions of the deep", cs: "Q: otázky hlubin", fr: "Quille" },
      fact: { es: "La quisquilla es una gambita transparente que limpia el fondo del mar.", ca: "La quilla és la panxa del vaixell: el manté recte sobre les onades.", en: "The deep sea hides more questions than answers. Explorers wanted!", cs: "Hlubiny skrývají víc otázek než odpovědí. Hledají se objevitelé!", fr: "La quille est le ventre du bateau : elle le tient droit sur les vagues." } },
    { letter: "R", emoji: "🐟", item: { es: "Raya", ca: "Rajada", en: "Reef", cs: "Rejnok", fr: "Requin" },
      fact: { es: "La raya nada como una alfombra voladora del fondo del mar.", ca: "La rajada neda com una catifa voladora del fons del mar.", en: "A reef is an underwater city built by tiny coral animals.", cs: "Rejnok plave jako létající koberec mořského dna.", fr: "Les requins existaient déjà avant les dinosaures. Et la plupart sont timides !" } },
    { letter: "S", emoji: "🤿", item: { es: "Submarino", ca: "Submarí", en: "Seahorse", cs: "Sépie", fr: "Sous-marin" },
      fact: { es: "Los submarinos bajan adonde no llega la luz, con focos como ojos de búho.", ca: "Els submarins baixen on no arriba la llum, amb focus com ulls de mussol.", en: "Seahorses hold hands with their tails so the current does not sweep them away.", cs: "Sépie mění barvu i vzor kůže jako kouzelná obrazovka.", fr: "Les sous-marins descendent là où la lumière n'arrive pas, avec des phares comme des yeux de hibou." } },
    { letter: "T", emoji: "🐢", item: { es: "Tiburón", ca: "Tauró", en: "Turtle", cs: "Tuleň", fr: "Tortue" },
      fact: { es: "Los tiburones ya nadaban antes de los dinosaurios. ¡Y casi todos son tímidos!", ca: "Els taurons ja nedaven abans dels dinosaures. I gairebé tots són tímids!", en: "Sea turtles cross whole oceans to return to the beach where they were born.", cs: "Tuleň plave jako šampion a šlofíka si dává na skalách.", fr: "Les tortues marines traversent des océans entiers pour revenir à leur plage natale." } },
    { letter: "U", emoji: "🥬", item: { es: "Ulva (lechuga de mar)", ca: "Ulva (enciam de mar)", en: "Urchin", cs: "Úhoř", fr: "Ulva (laitue de mer)" },
      fact: { es: "La ulva es una alga que parece lechuga. ¡Los peces se la comen en ensalada!", ca: "L'ulva és una alga que sembla enciam. Els peixos se la mengen en amanida!", en: "The sea urchin is a little ball of spikes that walks on tiny feet.", cs: "Úhoř vypadá jako stužka a plave vlněním celého těla.", fr: "L'ulve est une algue qui ressemble à de la laitue. Les poissons la mangent en salade !" } },
    { letter: "V", emoji: "🌊", item: { es: "Vieira", ca: "Vaixell", en: "Volcano under the sea", cs: "Velryba", fr: "Vague" },
      fact: { es: "La vieira nada dando palmadas con su concha: ¡plas, plas, plas!", ca: "Els vaixells floten encara que pesin moltíssim: l'aigua els aguanta.", en: "There are volcanoes under the sea! Some make brand-new islands.", cs: "Velryby zpívají písně, které se nesou stovky kilometrů pod vodou.", fr: "Les vagues naissent du vent qui pousse l'eau. Plus il souffle, plus elles grandissent !" } },
    { letter: "W", emoji: "🌊", item: { es: "Wow, ¡qué profundo!", ca: "Wow, quin fons!", en: "Whale", cs: "Wow, ta hloubka!", fr: "Waouh, quelle profondeur !" },
      fact: { es: "El sitio más hondo del mar baja 11 kilómetros. ¡El Everest cabría entero y sobraría agua!", ca: "El lloc més fondo del mar baixa 11 quilòmetres. L'Everest hi cabria sencer i sobraria aigua!", en: "Whales are not fish: they breathe air, like you, and come up for it.", cs: "Nejhlubší místo moře klesá 11 kilometrů. Everest by se tam vešel celý!", fr: "L'endroit le plus profond de la mer descend à 11 kilomètres. L'Everest y tiendrait en entier !" } },
    { letter: "X", emoji: "🩻", item: { es: "Pez de rayos X", ca: "Peix de raigs X", en: "X-ray fish", cs: "Rentgenová rybka", fr: "Poisson rayons X" },
      fact: { es: "Hay un pez tan transparente que se le ven los huesos. ¡Se llama pez de rayos X!", ca: "Hi ha un peix tan transparent que se li veuen els ossos. Es diu peix de raigs X!", en: "There is a fish so see-through you can spot its bones. It is called the X-ray fish!", cs: "Existuje rybka tak průhledná, že jí vidíš kosti. Říká se jí rentgenová!", fr: "Il existe un poisson si transparent qu'on voit ses os. On l'appelle le poisson rayons X !" } },
    { letter: "Y", emoji: "🦀", item: { es: "Yeti (cangrejo)", ca: "Yeti (cranc)", en: "Yeti crab", cs: "Yeti krab", fr: "Yéti (crabe)" },
      fact: { es: "El cangrejo yeti tiene pinzas peludas y vive junto a chimeneas calientes del fondo del mar.", ca: "El cranc yeti té pinces peludes i viu al costat de xemeneies calentes del fons del mar.", en: "The yeti crab has furry claws and lives next to hot chimneys on the sea floor.", cs: "Yeti krab má chlupatá klepeta a bydlí u horkých komínů na dně moře.", fr: "Le crabe yéti a des pinces poilues et vit près des cheminées chaudes du fond de la mer." } },
    { letter: "Z", emoji: "🔬", item: { es: "Zooplancton", ca: "Zooplàncton", en: "Zooplankton", cs: "Zooplankton", fr: "Zooplancton" },
      fact: { es: "Animalitos tan pequeños que no se ven, pero alimentan a todo el océano.", ca: "Animalets tan petits que no es veuen, però alimenten tot l'oceà.", en: "Creatures so tiny you cannot see them, but they feed the whole ocean.", cs: "Zvířátka tak malá, že je nevidíš, ale krmí celý oceán.", fr: "Des bestioles si petites qu'on ne les voit pas, mais elles nourrissent tout l'océan." } }
  ],

  /* ---------- FAMOSOS ---------- */
  famous: [
    { emoji: "🤿", year: "1943", color: "#01579b", name: { es: "Jacques Cousteau", ca: "Jacques Cousteau", en: "Jacques Cousteau", cs: "Jacques Cousteau", fr: "Jacques Cousteau" },
      achievement: { es: "Inventó el equipo de buceo moderno y enseñó el mar al mundo entero.", ca: "Va inventar l'equip de busseig modern i va ensenyar el mar al món sencer.", en: "He invented modern diving gear and showed the sea to the whole world.", cs: "Vynalezl moderní potápěčskou výstroj a ukázal moře celému světu.", fr: "Il a inventé la plongée moderne et a montré la mer au monde entier." },
      quote: { es: "La gente protege lo que ama.", ca: "La gent protegeix el que estima.", en: "People protect what they love.", cs: "Lidé chrání to, co milují.", fr: "On protège ce que l'on aime." } },
    { emoji: "🐋", year: "1970", color: "#00838f", name: { es: "Sylvia Earle", ca: "Sylvia Earle", en: "Sylvia Earle", cs: "Sylvia Earleová", fr: "Sylvia Earle" },
      achievement: { es: "Ha pasado miles de horas bajo el mar. La llaman 'Su Profundidad'.", ca: "Ha passat milers d'hores sota el mar. L'anomenen 'Sa Profunditat'.", en: "She has spent thousands of hours under the sea. They call her 'Her Deepness'.", cs: "Strávila pod mořem tisíce hodin. Říkají jí 'Její Hlubina'.", fr: "Elle a passé des milliers d'heures sous la mer. On l'appelle « Sa Profondeur »." },
      quote: { es: "Sin azul no hay verde: el mar cuida de todos nosotros.", ca: "Sense blau no hi ha verd: el mar té cura de tots nosaltres.", en: "No blue, no green: the sea takes care of us all.", cs: "Bez modré není zelená: moře se stará o nás všechny.", fr: "Sans bleu, pas de vert : la mer prend soin de nous tous." } },
    { emoji: "🦈", year: "1955", color: "#455a64", name: { es: "Eugenie Clark", ca: "Eugenie Clark", en: "Eugenie Clark", cs: "Eugenie Clarková", fr: "Eugenie Clark" },
      achievement: { es: "'La Dama de los Tiburones': demostró que son listos y casi siempre tímidos.", ca: "'La Dama dels Taurons': va demostrar que són llestos i gairebé sempre tímids.", en: "'The Shark Lady': she proved sharks are smart and almost always shy.", cs: "'Žraločí dáma': dokázala, že žraloci jsou chytří a skoro vždycky plaší.", fr: "« La Dame aux requins » : elle a prouvé qu'ils sont malins et presque toujours timides." },
      quote: { es: "No temas a lo que aún no conoces: estúdialo.", ca: "No tinguis por del que encara no coneixes: estudia-ho.", en: "Do not fear what you do not know yet: study it.", cs: "Neboj se toho, co ještě neznáš: prozkoumej to.", fr: "N'aie pas peur de ce que tu ne connais pas encore : étudie-le." } },
    { emoji: "🕳️", year: "1960", color: "#4527a0", name: { es: "Jacques Piccard", ca: "Jacques Piccard", en: "Jacques Piccard", cs: "Jacques Piccard", fr: "Jacques Piccard" },
      achievement: { es: "Bajó al punto más profundo del océano en un submarino especial.", ca: "Va baixar al punt més profund de l'oceà en un submarí especial.", en: "He went down to the deepest point of the ocean in a special submarine.", cs: "Sestoupil na nejhlubší místo oceánu ve zvláštní ponorce.", fr: "Il est descendu au point le plus profond de l'océan dans un sous-marin spécial." },
      quote: { es: "Hasta en el fondo más oscuro encontramos vida saludando.", ca: "Fins i tot al fons més fosc vam trobar vida saludant.", en: "Even at the darkest bottom we found life waving hello.", cs: "I na nejtemnějším dně jsme našli život, který nám mával.", fr: "Même au fond le plus sombre, nous avons trouvé la vie qui nous saluait." } },
    { emoji: "🌿", year: "1766", color: "#2e7d32", name: { es: "Jeanne Baret", ca: "Jeanne Baret", en: "Jeanne Baret", cs: "Jeanne Baretová", fr: "Jeanne Barret" },
      achievement: { es: "La primera mujer que dio la vuelta al mundo en barco, estudiando plantas.", ca: "La primera dona que va fer la volta al món en vaixell, estudiant plantes.", en: "The first woman to sail all the way around the world, studying plants.", cs: "První žena, která obeplula celý svět a studovala rostliny.", fr: "La première femme à avoir fait le tour du monde en bateau, en étudiant les plantes." },
      quote: { es: "El mundo es de quien se atreve a subir al barco.", ca: "El món és de qui s'atreveix a pujar al vaixell.", en: "The world belongs to those who dare to board the ship.", cs: "Svět patří těm, kdo se odváží nastoupit na loď.", fr: "Le monde appartient à ceux qui osent monter à bord." } },
    { emoji: "📖", year: "1951", color: "#ad1457", name: { es: "Rachel Carson", ca: "Rachel Carson", en: "Rachel Carson", cs: "Rachel Carsonová", fr: "Rachel Carson" },
      achievement: { es: "Escribió libros preciosos sobre el mar y enseñó al mundo a cuidarlo.", ca: "Va escriure llibres preciosos sobre el mar i va ensenyar al món a cuidar-lo.", en: "She wrote beautiful books about the sea and taught the world to care for it.", cs: "Napsala nádherné knihy o moři a naučila svět o něj pečovat.", fr: "Elle a écrit de magnifiques livres sur la mer et a appris au monde à en prendre soin." },
      quote: { es: "Quien mira el mar con asombro nunca se aburre.", ca: "Qui mira el mar amb meravella mai no s'avorreix.", en: "Whoever looks at the sea with wonder is never bored.", cs: "Kdo se na moře dívá s úžasem, nikdy se nenudí.", fr: "Qui regarde la mer avec émerveillement ne s'ennuie jamais." } }
  ],

  childDream: {
    girl: { es: "Exploradora de los océanos", ca: "Exploradora dels oceans", en: "Ocean explorer", cs: "Objevitelka oceánů", fr: "Exploratrice des océans" },
    boy: { es: "Explorador de los océanos", ca: "Explorador dels oceans", en: "Ocean explorer", cs: "Objevitel oceánů", fr: "Explorateur des océans" },
    kid: { es: "Peque que explora los océanos", ca: "Menut que explora els oceans", en: "Kid who explores the oceans", cs: "Dítě, které objevuje oceány", fr: "Enfant qui explore les océans" }
  },
  childQuote: { es: "Cuando sea mayor bucearé con las ballenas. ¡Y les aprenderé sus canciones!", ca: "Quan sigui gran bussejaré amb les balenes. I n'aprendré les cançons!", en: "When I grow up I will dive with the whales. And I will learn their songs!", cs: "Až vyrostu, budu se potápět s velrybami. A naučím se jejich písničky!", fr: "Quand je serai grand, je plongerai avec les baleines. Et j'apprendrai leurs chansons !" },

  /* ---------- MATES ---------- */
  mathEmojis: ["🐟", "🐬", "🐚", "🦀", "🐙", "🫧"],

  /* ---------- CONSTRUCTOR: el submarino ---------- */
  builder: {
    title: { es: "¡Construye tu submarino!", ca: "Construeix el teu submarí!", en: "Build your own submarine!", cs: "Postav si ponorku!", fr: "Construis ton sous-marin !" },
    thing: { es: "submarino", ca: "submarí", en: "submarine", cs: "ponorka", fr: "sous-marin" },
    parts: [
      { id: "body", label: { es: "Color del casco", ca: "Color del casc", en: "Hull colour", cs: "Barva trupu", fr: "Couleur de la coque" },
        options: [{ id: "yellow", v: "#fbc02d" }, { id: "red", v: "#ef5350" }, { id: "teal", v: "#26a69a" }, { id: "purple", v: "#ab47bc" }] },
      { id: "nose", label: { es: "El periscopio", ca: "El periscopi", en: "The periscope", cs: "Periskop", fr: "Le périscope" },
        options: [{ id: "cone", v: "cone", icon: "🔭" }, { id: "round", v: "round", icon: "🔎" }, { id: "star", v: "star", icon: "⭐" }] },
      { id: "window", label: { es: "Las ventanillas", ca: "Les finestretes", en: "The portholes", cs: "Okénka", fr: "Les hublots" },
        options: [{ id: "one", v: "one", icon: "🔵" }, { id: "two", v: "two", icon: "🔵🔵" }, { id: "heart", v: "heart", icon: "💗" }] },
      { id: "flame", label: { es: "Las burbujas", ca: "Les bombolles", en: "The bubbles", cs: "Bublinky", fr: "Les bulles" },
        options: [{ id: "orange", v: "#b3e5fc" }, { id: "blue", v: "#80deea" }, { id: "rainbow", v: "rainbow", icon: "🌈" }] }
    ],
    svg(sel) {
      const body = sel.body || "#fbc02d";
      const bub = sel.flame === "rainbow" ? "url(#subR)" : (sel.flame || "#b3e5fc");
      let peri = `<rect x="47" y="14" width="5" height="16" fill="#78909c"/><rect x="47" y="10" width="14" height="6" rx="3" fill="#78909c"/>`;
      if (sel.nose === "round") peri = `<rect x="47" y="16" width="5" height="14" fill="#78909c"/><circle cx="50" cy="12" r="6" fill="#78909c"/><circle cx="52" cy="10" r="2" fill="#b3e5fc"/>`;
      if (sel.nose === "star") peri = `<rect x="47" y="16" width="5" height="14" fill="#78909c"/><text x="43" y="16" font-size="12">⭐</text>`;
      let win = `<circle cx="50" cy="52" r="9" fill="#b3e5fc" stroke="#fff" stroke-width="2.5"/>`;
      if (sel.window === "two") win = `<circle cx="38" cy="52" r="7" fill="#b3e5fc" stroke="#fff" stroke-width="2.5"/><circle cx="60" cy="52" r="7" fill="#b3e5fc" stroke="#fff" stroke-width="2.5"/>`;
      if (sel.window === "heart") win = `<path d="M50 46 C44 40 36 46 42 54 L50 62 L58 54 C64 46 56 40 50 46 Z" fill="#f8bbd0" stroke="#fff" stroke-width="2"/>`;
      return `<svg viewBox="0 0 100 110" width="190" height="210">
        <defs><linearGradient id="subR" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ff5252"/><stop offset="34%" stop-color="#ffd740"/><stop offset="67%" stop-color="#69f0ae"/><stop offset="100%" stop-color="#40c4ff"/></linearGradient></defs>
        ${peri}
        <ellipse cx="50" cy="52" rx="32" ry="20" fill="${body}" stroke="#fff" stroke-width="2"/>
        ${win}
        <path d="M80 46 L92 38 L92 66 L80 58 Z" fill="${body}" stroke="#fff" stroke-width="1.5"/>
        <circle cx="20" cy="52" r="4" fill="#ffd740"><animate attributeName="opacity" values="1;.4;1" dur="1.4s" repeatCount="indefinite"/></circle>
        <circle cx="14" cy="78" r="4" fill="${bub}"><animate attributeName="cy" values="78;66" dur="2s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0" dur="2s" repeatCount="indefinite"/></circle>
        <circle cx="26" cy="84" r="3" fill="${bub}"><animate attributeName="cy" values="84;70" dur="2.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0" dur="2.6s" repeatCount="indefinite"/></circle>
        <circle cx="72" cy="82" r="3.4" fill="${bub}"><animate attributeName="cy" values="82;68" dur="2.2s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0" dur="2.2s" repeatCount="indefinite"/></circle>
        <path d="M6 96 Q18 90 30 96 Q42 102 54 96 Q66 90 78 96 Q90 102 96 96" stroke="#4fc3f7" stroke-width="3" fill="none" stroke-linecap="round"/>
      </svg>`;
    }
  }
};
