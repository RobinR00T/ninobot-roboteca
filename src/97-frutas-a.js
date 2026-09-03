"use strict";
/* ============================================================
   Contenido de FRUTAS Y HORTALIZAS (parte A):
   registro del tema, quiz, alfabeto, famosos, mates y
   constructor de brochetas. El huerto y el mercado.
   ============================================================ */

THEMES.frutas = { emoji: "🍎", ready: true, grad: "linear-gradient(150deg,#ef6c00,#7cb342)", name: { es: "Frutas y hortalizas", ca: "Fruites i hortalisses", en: "Fruits and veggies", cs: "Ovoce a zelenina", fr: "Fruits et légumes" } };

THEMES.frutas.content = {

  statusPlace: { es: "Conectado desde el huerto del arcoíris", ca: "Connectat des de l'hort de l'arc de Sant Martí", en: "Connected from the rainbow garden", cs: "Připojeno z duhové zahrádky", fr: "Connecté depuis le potager arc-en-ciel" },
  welcome: { es: "¡Al huerto, {name}! Coge la cesta, que hoy toca cosecha. ¡Ñam, crunch, ñam!", ca: "Cap a l'hort, {name}! Agafa el cistell, que avui toca collita. Nyam, crunch, nyam!", en: "Off to the garden, {name}! Grab your basket, today we harvest. Yum, crunch, yum!", cs: "Hurá na zahrádku, {name}! Vezmi košík, dnes se sklízí. Mňam, křup, mňam!", fr: "Au potager, {name} ! Prends ton panier, aujourd'hui c'est la récolte. Miam, crounch, miam !" },

  /* ---------- QUIZ: 10 preguntas ---------- */
  quiz: [
    { emoji: "🍓",
      q: { es: "¿Dónde lleva las semillas la fresa?", ca: "On porta les llavors la maduixa?", en: "Where does the strawberry keep its seeds?", cs: "Kde nosí jahoda svá semínka?", fr: "Où la fraise porte-t-elle ses graines ?" },
      options: [
        { es: "Dentro", ca: "A dins", en: "Inside", cs: "Uvnitř", fr: "Dedans" },
        { es: "Por fuera", ca: "Per fora", en: "On the outside", cs: "Na povrchu", fr: "À l'extérieur" },
        { es: "No tiene", ca: "No en té", en: "It has none", cs: "Žádná nemá", fr: "Elle n'en a pas" },
        { es: "En la raíz", ca: "A l'arrel", en: "In the root", cs: "V kořeni", fr: "Dans la racine" }],
      answer: 1,
      explanation: { es: "La fresa lleva unas 200 semillitas por fuera de la piel. ¡Cuéntalas si puedes!", ca: "La maduixa porta unes 200 llavoretes per fora de la pell. Compta-les si pots!", en: "The strawberry wears about 200 tiny seeds on the outside of its skin. Count them if you can!", cs: "Jahoda nosí asi 200 semínek na povrchu slupky. Zkus je spočítat!", fr: "La fraise porte environ 200 petites graines à l'extérieur de sa peau. Compte-les si tu peux !" } },
    { emoji: "🥕",
      q: { es: "¿Qué parte de la planta es la zanahoria?", ca: "Quina part de la planta és la pastanaga?", en: "Which part of the plant is the carrot?", cs: "Která část rostliny je mrkev?", fr: "Quelle partie de la plante est la carotte ?" },
      options: [
        { es: "La flor", ca: "La flor", en: "The flower", cs: "Květ", fr: "La fleur" },
        { es: "La hoja", ca: "La fulla", en: "The leaf", cs: "List", fr: "La feuille" },
        { es: "La raíz", ca: "L'arrel", en: "The root", cs: "Kořen", fr: "La racine" },
        { es: "La semilla", ca: "La llavor", en: "The seed", cs: "Semínko", fr: "La graine" }],
      answer: 2,
      explanation: { es: "La zanahoria es una raíz: crece bajo tierra guardando comida para su planta.", ca: "La pastanaga és una arrel: creix sota terra guardant menjar per a la seva planta.", en: "The carrot is a root: it grows underground storing food for its plant.", cs: "Mrkev je kořen: roste pod zemí a schovává jídlo pro svou rostlinu.", fr: "La carotte est une racine : elle pousse sous terre en gardant de la nourriture pour sa plante." } },
    { emoji: "🥦",
      q: { es: "¿Qué es el brócoli en realidad?", ca: "Què és el bròquil en realitat?", en: "What is broccoli, really?", cs: "Co je brokolice doopravdy?", fr: "Qu'est-ce que le brocoli, en vrai ?" },
      options: [
        { es: "Raíces", ca: "Arrels", en: "Roots", cs: "Kořeny", fr: "Des racines" },
        { es: "Flores sin abrir", ca: "Flors sense obrir", en: "Unopened flowers", cs: "Nerozvité květy", fr: "Des fleurs pas ouvertes" },
        { es: "Piedras verdes", ca: "Pedres verdes", en: "Green stones", cs: "Zelené kamínky", fr: "Des pierres vertes" },
        { es: "Semillas", ca: "Llavors", en: "Seeds", cs: "Semínka", fr: "Des graines" }],
      answer: 1,
      explanation: { es: "El brócoli es un ramo de florecitas cerradas. Si lo dejas crecer, ¡se abren flores amarillas!", ca: "El bròquil és un ram de floretes tancades. Si el deixes créixer, s'obren flors grogues!", en: "Broccoli is a bouquet of tiny closed flowers. If you let it grow, yellow flowers open up!", cs: "Brokolice je kytice maličkých zavřených květů. Když ji necháš růst, rozvinou se žluté kytičky!", fr: "Le brocoli est un bouquet de petites fleurs fermées. Si tu le laisses pousser, des fleurs jaunes s'ouvrent !" } },
    { emoji: "🍅",
      q: { es: "Para los científicos de las plantas, ¿qué es el tomate?", ca: "Per als científics de les plantes, què és el tomàquet?", en: "For plant scientists, what is the tomato?", cs: "Co je rajče podle vědců, kteří zkoumají rostliny?", fr: "Pour les scientifiques des plantes, qu'est-ce que la tomate ?" },
      options: [
        { es: "Una fruta", ca: "Una fruita", en: "A fruit", cs: "Ovoce", fr: "Un fruit" },
        { es: "Una raíz", ca: "Una arrel", en: "A root", cs: "Kořen", fr: "Une racine" },
        { es: "Una hoja", ca: "Una fulla", en: "A leaf", cs: "List", fr: "Une feuille" },
        { es: "Una flor", ca: "Una flor", en: "A flower", cs: "Květina", fr: "Une fleur" }],
      answer: 0,
      explanation: { es: "El tomate nace de una flor y lleva las semillas dentro: es una fruta. En la cocina juega en el equipo de las verduras.", ca: "El tomàquet neix d'una flor i porta les llavors a dins: és una fruita. A la cuina juga a l'equip de les verdures.", en: "The tomato grows from a flower and carries its seeds inside: it is a fruit. In the kitchen it plays on the veggie team.", cs: "Rajče vyroste z květu a semínka nosí uvnitř: je to ovoce. V kuchyni ale hraje za tým zeleniny.", fr: "La tomate naît d'une fleur et porte ses graines dedans : c'est un fruit. À la cuisine, elle joue dans l'équipe des légumes." } },
    { emoji: "🍌",
      q: { es: "¿Hacia dónde crecen los plátanos en su racimo?", ca: "Cap a on creixen els plàtans al seu ramell?", en: "Which way do bananas grow in their bunch?", cs: "Kterým směrem rostou banány v trsu?", fr: "Dans quel sens poussent les bananes dans leur régime ?" },
      options: [
        { es: "Hacia abajo", ca: "Cap avall", en: "Downwards", cs: "Dolů", fr: "Vers le bas" },
        { es: "Hacia el cielo", ca: "Cap al cel", en: "Up to the sky", cs: "Vzhůru k nebi", fr: "Vers le ciel" },
        { es: "Hacia dentro", ca: "Cap a dins", en: "Inwards", cs: "Dovnitř", fr: "Vers l'intérieur" },
        { es: "De lado", ca: "De costat", en: "Sideways", cs: "Do strany", fr: "Sur le côté" }],
      answer: 1,
      explanation: { es: "Los plátanos crecen mirando al cielo, buscando la luz. Cada grupito se llama mano, y cada plátano, ¡dedo!", ca: "Els plàtans creixen mirant al cel, buscant la llum. Cada grupet es diu mà, i cada plàtan, dit!", en: "Bananas grow pointing up at the sky, looking for light. Each little group is called a hand, and each banana a finger!", cs: "Banány rostou vzhůru k nebi, za světlem. Každé skupince se říká ruka a každému banánu prst!", fr: "Les bananes poussent en regardant le ciel, à la recherche de la lumière. Chaque petit groupe s'appelle une main, et chaque banane un doigt !" } },
    { emoji: "🌈",
      q: { es: "Comer frutas y verduras de todos los colores es como...", ca: "Menjar fruites i verdures de tots els colors és com...", en: "Eating fruits and veggies of every colour is like...", cs: "Jíst ovoce a zeleninu všech barev je jako...", fr: "Manger des fruits et légumes de toutes les couleurs, c'est comme..." },
      options: [
        { es: "Comer un arcoíris", ca: "Menjar un arc de Sant Martí", en: "Eating a rainbow", cs: "Sníst duhu", fr: "Manger un arc-en-ciel" },
        { es: "Comer nubes", ca: "Menjar núvols", en: "Eating clouds", cs: "Jíst mraky", fr: "Manger des nuages" },
        { es: "Comer arena", ca: "Menjar sorra", en: "Eating sand", cs: "Jíst písek", fr: "Manger du sable" },
        { es: "No comer nada", ca: "No menjar res", en: "Eating nothing", cs: "Nejíst nic", fr: "Ne rien manger" }],
      answer: 0,
      explanation: { es: "¡Comer un arcoíris! Cada color ayuda a una parte distinta del cuerpo: ojos, piel, corazón...", ca: "Menjar un arc de Sant Martí! Cada color ajuda una part diferent del cos: ulls, pell, cor...", en: "Eating a rainbow! Each colour helps a different part of your body: eyes, skin, heart...", cs: "Sníst duhu! Každá barva pomáhá jiné části těla: očím, kůži, srdíčku...", fr: "Manger un arc-en-ciel ! Chaque couleur aide une partie différente du corps : les yeux, la peau, le cœur..." } },
    { emoji: "🍉",
      q: { es: "¿Cuánta agua tiene una sandía?", ca: "Quanta aigua té una síndria?", en: "How much water is inside a watermelon?", cs: "Kolik vody je v melounu?", fr: "Combien d'eau y a-t-il dans une pastèque ?" },
      options: [
        { es: "Casi nada", ca: "Gairebé gens", en: "Almost none", cs: "Skoro žádná", fr: "Presque pas" },
        { es: "La mitad", ca: "La meitat", en: "Half", cs: "Polovina", fr: "La moitié" },
        { es: "9 de cada 10 gotas", ca: "9 de cada 10 gotes", en: "9 out of 10 drops", cs: "9 z 10 kapek", fr: "9 gouttes sur 10" },
        { es: "Está vacía", ca: "És buida", en: "It is empty", cs: "Je prázdný", fr: "Elle est vide" }],
      answer: 2,
      explanation: { es: "La sandía es agua en un 92 por ciento. ¡Por eso refresca tanto en verano!", ca: "La síndria és aigua en un 92 per cent. Per això refresca tant a l'estiu!", en: "A watermelon is 92 percent water. That is why it is so refreshing in summer!", cs: "Meloun je z 92 procent voda. Proto v létě tak krásně osvěží!", fr: "La pastèque, c'est 92 pour cent d'eau. Voilà pourquoi elle rafraîchit autant en été !" } },
    { emoji: "🌱",
      q: { es: "¿Qué necesita una semilla para despertarse y germinar?", ca: "Què necessita una llavor per despertar-se i germinar?", en: "What does a seed need to wake up and sprout?", cs: "Co potřebuje semínko, aby se probudilo a vyklíčilo?", fr: "De quoi une graine a-t-elle besoin pour se réveiller et germer ?" },
      options: [
        { es: "Agua y calorcito", ca: "Aigua i caloreta", en: "Water and warmth", cs: "Vodu a teplíčko", fr: "De l'eau et de la chaleur" },
        { es: "Chocolate", ca: "Xocolata", en: "Chocolate", cs: "Čokoládu", fr: "Du chocolat" },
        { es: "Hielo", ca: "Gel", en: "Ice", cs: "Led", fr: "De la glace" },
        { es: "Juguetes", ca: "Joguines", en: "Toys", cs: "Hračky", fr: "Des jouets" }],
      answer: 0,
      explanation: { es: "Con agua, calorcito y tierra blandita, la semilla se despierta. Luego pide luz para crecer alto.", ca: "Amb aigua, caloreta i terra toveta, la llavor es desperta. Després demana llum per créixer alt.", en: "With water, warmth and soft soil, the seed wakes up. Then it asks for light to grow tall.", cs: "S vodou, teplíčkem a měkkou hlínou se semínko probudí. Pak si řekne o světlo, aby vyrostlo.", fr: "Avec de l'eau, de la chaleur et une terre bien douce, la graine se réveille. Ensuite, elle demande de la lumière pour grandir." } },
    { emoji: "🍍",
      q: { es: "¿Qué fruta lleva una corona de hojas?", ca: "Quina fruita porta una corona de fulles?", en: "Which fruit wears a crown of leaves?", cs: "Které ovoce nosí korunu z listů?", fr: "Quel fruit porte une couronne de feuilles ?" },
      options: [
        { es: "La manzana", ca: "La poma", en: "The apple", cs: "Jablko", fr: "La pomme" },
        { es: "La piña", ca: "La pinya", en: "The pineapple", cs: "Ananas", fr: "L'ananas" },
        { es: "La uva", ca: "El raïm", en: "The grape", cs: "Hroznové víno", fr: "Le raisin" },
        { es: "La cereza", ca: "La cirera", en: "The cherry", cs: "Třešeň", fr: "La cerise" }],
      answer: 1,
      explanation: { es: "La piña es la reina del frutero: lleva su corona de hojas puesta. Tarda casi dos años en crecer.", ca: "La pinya és la reina del fruiter: porta la seva corona de fulles posada. Triga gairebé dos anys a créixer.", en: "The pineapple is the queen of the fruit bowl: it always wears its leafy crown. It takes almost two years to grow.", cs: "Ananas je královna mísy s ovocem: pořád nosí svou listovou korunu. Roste skoro dva roky.", fr: "L'ananas est la reine de la corbeille : il porte toujours sa couronne de feuilles. Il met presque deux ans à pousser." } },
    { emoji: "🧅",
      q: { es: "¿Qué hortaliza te hace llorar cuando se corta?", ca: "Quina hortalissa et fa plorar quan es talla?", en: "Which vegetable makes you cry when you cut it?", cs: "Která zelenina tě rozpláče, když se krájí?", fr: "Quel légume te fait pleurer quand on le coupe ?" },
      options: [
        { es: "La lechuga", ca: "L'enciam", en: "The lettuce", cs: "Salát", fr: "La laitue" },
        { es: "La cebolla", ca: "La ceba", en: "The onion", cs: "Cibule", fr: "L'oignon" },
        { es: "El pepino", ca: "El cogombre", en: "The cucumber", cs: "Okurka", fr: "Le concombre" },
        { es: "La patata", ca: "La patata", en: "The potato", cs: "Brambora", fr: "La pomme de terre" }],
      answer: 1,
      explanation: { es: "La cebolla suelta una nubecita invisible que pica en los ojos. ¡No es tristeza, es ciencia!", ca: "La ceba deixa anar un nuvolet invisible que pica als ulls. No és tristesa, és ciència!", en: "The onion lets out an invisible little cloud that stings your eyes. It is not sadness, it is science!", cs: "Cibule vypustí neviditelný obláček, který štípe do očí. Není to smutek, je to věda!", fr: "L'oignon libère un petit nuage invisible qui pique les yeux. Ce n'est pas de la tristesse, c'est de la science !" } },
    { emoji: "🍊",
      q: { es: "¿Qué vitamina famosa nos regala la naranja?", ca: "Quina vitamina famosa ens regala la taronja?", en: "Which famous vitamin does the orange give us?", cs: "Kterým slavným vitaminem nás obdaruje pomeranč?", fr: "Quelle vitamine célèbre nous offre l'orange ?" },
      options: [
        { es: "La vitamina A", ca: "La vitamina A", en: "Vitamin A", cs: "Vitaminem A", fr: "La vitamine A" },
        { es: "La vitamina Z", ca: "La vitamina Z", en: "Vitamin Z", cs: "Vitaminem Z", fr: "La vitamine Z" },
        { es: "La vitamina del sueño", ca: "La vitamina de la son", en: "The sleepy vitamin", cs: "Vitaminem na spaní", fr: "La vitamine du sommeil" },
        { es: "La vitamina C", ca: "La vitamina C", en: "Vitamin C", cs: "Vitaminem C", fr: "La vitamine C" }],
      answer: 3,
      explanation: { es: "La vitamina C ayuda a tus defensas a estar fuertes. También la tienen el kiwi, la fresa y el pimiento, ¡que tiene aún más que la naranja!", ca: "La vitamina C ajuda les teves defenses a estar fortes. També la tenen el kiwi, la maduixa i el pebrot, que en té encara més que la taronja!", en: "Vitamin C helps your defences stay strong. Kiwis, strawberries and peppers have it too, and the pepper has even more than the orange!", cs: "Vitamin C pomáhá tvé obranyschopnosti, aby byla silná. Má ho i kiwi, jahoda a paprika, která ho má dokonce víc než pomeranč!", fr: "La vitamine C aide tes défenses à rester fortes. Le kiwi, la fraise et le poivron en ont aussi, et le poivron en a même plus que l'orange !" } },
    { emoji: "🥔",
      q: { es: "¿Dónde crecen las patatas?", ca: "On creixen les patates?", en: "Where do potatoes grow?", cs: "Kde rostou brambory?", fr: "Où poussent les pommes de terre ?" },
      options: [
        { es: "Bajo tierra", ca: "Sota terra", en: "Underground", cs: "Pod zemí", fr: "Sous la terre" },
        { es: "En las ramas de un árbol", ca: "A les branques d'un arbre", en: "On the branches of a tree", cs: "Na větvích stromu", fr: "Sur les branches d'un arbre" },
        { es: "En el fondo del mar", ca: "Al fons del mar", en: "At the bottom of the sea", cs: "Na dně moře", fr: "Au fond de la mer" },
        { es: "En las nubes", ca: "Als núvols", en: "In the clouds", cs: "V oblacích", fr: "Dans les nuages" }],
      answer: 0,
      explanation: { es: "La patata crece escondida bajo tierra, pero no es una raíz: es un tallo gordito que guarda comida, un tubérculo.", ca: "La patata creix amagada sota terra, però no és una arrel: és una tija grassoneta que guarda menjar, un tubercle.", en: "The potato grows hidden underground, but it is not a root: it is a chubby stem that stores food, called a tuber.", cs: "Brambora roste schovaná pod zemí, ale není to kořen: je to baculatý stonek, který si ukládá jídlo, říká se mu hlíza.", fr: "La pomme de terre grandit cachée sous la terre, mais ce n'est pas une racine : c'est une tige dodue qui garde de la nourriture, un tubercule." } },
    { emoji: "🍇",
      q: { es: "¿Qué pasa si dejas secar una uva al sol muchos días?", ca: "Què passa si deixes assecar un gra de raïm al sol molts dies?", en: "What happens if you leave a grape to dry in the sun for many days?", cs: "Co se stane, když necháš kuličku hroznového vína mnoho dní sušit na slunci?", fr: "Que se passe-t-il si on laisse un grain de raisin sécher au soleil pendant des jours ?" },
      options: [
        { es: "Se vuelve gigante", ca: "Es torna gegant", en: "It grows giant", cs: "Vyroste do obřích rozměrů", fr: "Il devient géant" },
        { es: "Se vuelve azul", ca: "Es torna blau", en: "It turns blue", cs: "Zmodrá", fr: "Il devient bleu" },
        { es: "Se convierte en una pasa", ca: "Es converteix en una pansa", en: "It becomes a raisin", cs: "Promění se v rozinku", fr: "Il devient un raisin sec" },
        { es: "Sale volando", ca: "Surt volant", en: "It flies away", cs: "Uletí", fr: "Il s'envole" }],
      answer: 2,
      explanation: { es: "Al perder su agua queda pequeñita, arrugada y muy dulce: así se hacen las pasas. Con las ciruelas pasa lo mismo.", ca: "En perdre la seva aigua queda petitona, arrugada i molt dolça: així es fan les panses. Amb les prunes passa el mateix.", en: "As it loses its water it turns small, wrinkly and very sweet: that is how raisins are made. The same happens with plums.", cs: "Když ztratí vodu, je maličká, svraštělá a moc sladká: tak vznikají rozinky. Stejně se suší i švestky.", fr: "En perdant son eau, il devient tout petit, ridé et très sucré : c'est ainsi qu'on fait les raisins secs. Pareil pour les prunes." } },
    { emoji: "🐝",
      q: { es: "¿Quién ayuda a las flores de la huerta a convertirse en frutas?", ca: "Qui ajuda les flors de l'hort a convertir-se en fruites?", en: "Who helps the flowers of the vegetable garden turn into fruit?", cs: "Kdo pomáhá květům na zahrádce, aby se z nich stalo ovoce?", fr: "Qui aide les fleurs du potager à devenir des fruits ?" },
      options: [
        { es: "Los peces", ca: "Els peixos", en: "The fish", cs: "Ryby", fr: "Les poissons" },
        { es: "Las abejas", ca: "Les abelles", en: "The bees", cs: "Včely", fr: "Les abeilles" },
        { es: "Las piedras", ca: "Les pedres", en: "The stones", cs: "Kameny", fr: "Les pierres" },
        { es: "Los robots aspiradora", ca: "Els robots aspiradora", en: "Robot vacuums", cs: "Robotické vysavače", fr: "Les robots aspirateurs" }],
      answer: 1,
      explanation: { es: "Las abejas llevan el polen de flor en flor mientras buscan néctar. Sin ellas no habría manzanas, calabazas ni fresas.", ca: "Les abelles porten el pol·len de flor en flor mentre busquen nèctar. Sense elles no hi hauria pomes, carbasses ni maduixes.", en: "Bees carry pollen from flower to flower while they look for nectar. Without them there would be no apples, pumpkins or strawberries.", cs: "Včely přenášejí pyl z květu na květ, když hledají nektar. Bez nich by nebyla jablka, dýně ani jahody.", fr: "Les abeilles portent le pollen de fleur en fleur en cherchant du nectar. Sans elles, pas de pommes, de citrouilles ni de fraises." } },
    { emoji: "🎃",
      q: { es: "¿Qué hortaliza puede crecer tanto que pese más que un coche pequeño?", ca: "Quina hortalissa pot créixer tant que pesi més que un cotxe petit?", en: "Which vegetable can grow so big that it weighs more than a small car?", cs: "Která zelenina může vyrůst tak, že váží víc než malé auto?", fr: "Quel légume peut devenir si gros qu'il pèse plus qu'une petite voiture ?" },
      options: [
        { es: "La calabaza", ca: "La carbassa", en: "The pumpkin", cs: "Dýně", fr: "La citrouille" },
        { es: "El guisante", ca: "El pèsol", en: "The pea", cs: "Hrášek", fr: "Le petit pois" },
        { es: "El rábano", ca: "El rave", en: "The radish", cs: "Ředkvička", fr: "Le radis" },
        { es: "El ajo", ca: "L'all", en: "The garlic", cs: "Česnek", fr: "L'ail" }],
      answer: 0,
      explanation: { es: "Las calabazas gigantes de los concursos pasan de los 1000 kilos. Beben muchísima agua y crecen a ojos vista.", ca: "Les carbasses gegants dels concursos passen dels 1000 quilos. Beuen moltíssima aigua i creixen a ulls veients.", en: "Giant pumpkins at competitions weigh over 1000 kilos. They drink lots and lots of water and grow before your eyes.", cs: "Obří soutěžní dýně váží přes 1000 kilo. Pijí spoustu vody a rostou přímo před očima.", fr: "Les citrouilles géantes des concours dépassent les 1000 kilos. Elles boivent énormément d'eau et grandissent à vue d'œil." } }
  ],

  /* ---------- ALFABETO: 26 letras ---------- */
  alphabet: [
    { letter: "A", emoji: "🥑", item: { es: "Aguacate", ca: "Alvocat", en: "Avocado", cs: "Avokádo", fr: "Avocat" },
      fact: { es: "El aguacate es una fruta con un hueso gigante. No madura en el árbol: madura en el frutero.", ca: "L'alvocat és una fruita amb un pinyol gegant. No madura a l'arbre: madura al fruiter.", en: "The avocado is a fruit with a giant stone. It does not ripen on the tree: it ripens in the fruit bowl.", cs: "Avokádo je ovoce s obří peckou. Nedozrává na stromě: dozrává až v míse s ovocem.", fr: "L'avocat est un fruit avec un noyau géant. Il ne mûrit pas sur l'arbre : il mûrit dans la corbeille." } },
    { letter: "B", emoji: "🥦", item: { es: "Brócoli", ca: "Bròquil", en: "Broccoli", cs: "Brokolice", fr: "Brocoli" },
      fact: { es: "El brócoli es un ramo de flores sin abrir. ¡Te comes un ramillete!", ca: "El bròquil és un ram de flors sense obrir. Et menges un ramet!", en: "Broccoli is a bouquet of unopened flowers. You are eating a little bunch!", cs: "Brokolice je kytice nerozvitých květů. Jíš vlastně malou kytičku!", fr: "Le brocoli est un bouquet de fleurs pas encore ouvertes. Tu manges un petit bouquet !" } },
    { letter: "C", emoji: "🍒", item: { es: "Cereza", ca: "Cirera", en: "Cherry", cs: "Cibule", fr: "Cerise" },
      fact: { es: "Las cerezas crecen de dos en dos, como pendientes de verano.", ca: "Les cireres creixen de dues en dues, com arracades d'estiu.", en: "Cherries grow two by two, like summer earrings.", cs: "Cibule po nakrájení pustí obláček, který štípe do očí. Neplačeš doopravdy!", fr: "Les cerises poussent deux par deux, comme des boucles d'oreilles d'été." } },
    { letter: "D", emoji: "🌴", item: { es: "Dátil", ca: "Dàtil", en: "Date", cs: "Dýně", fr: "Datte" },
      fact: { es: "El dátil es la fruta de las palmeras: dulce como un caramelo del desierto.", ca: "El dàtil és la fruita de les palmeres: dolç com un caramel del desert.", en: "The date is the fruit of palm trees: sweet like a desert candy.", cs: "Obří soutěžní dýně váží víc než malé auto. To je ale zelenina!", fr: "La datte est le fruit des palmiers : douce comme un bonbon du désert." } },
    { letter: "E", emoji: "🥬", item: { es: "Espinaca", ca: "Espinacs", en: "Eggplant", cs: "Estragon", fr: "Épinard" },
      fact: { es: "Las espinacas guardan hierro en sus hojas verdes. ¡Como yo, que soy de metal!", ca: "Els espinacs guarden ferro a les seves fulles verdes. Com jo, que soc de metall!", en: "The eggplant is a fruit with a spongy inside. In Britain they call it aubergine.", cs: "Estragon je voňavá bylinka: pár lístků promění celou polévku.", fr: "Les épinards gardent du fer dans leurs feuilles vertes. Comme moi, qui suis en métal !" } },
    { letter: "F", emoji: "🍓", item: { es: "Fresa", ca: "Figa", en: "Fig", cs: "Fík", fr: "Fraise" },
      fact: { es: "La fresa lleva unas 200 semillitas por fuera. ¡Es la fruta al revés!", ca: "La figa amaga les seves flors a dins: per això mai no veus florir la figuera.", en: "The fig hides its flowers inside: that is why you never see a fig tree bloom.", cs: "Fík schovává své květy uvnitř: proto fíkovník nikdy nevidíš kvést.", fr: "La fraise porte environ 200 petites graines à l'extérieur. C'est le fruit à l'envers !" } },
    { letter: "G", emoji: "🫛", item: { es: "Guisante", ca: "Gerd", en: "Grape", cs: "Granátové jablko", fr: "Grenade" },
      fact: { es: "Los guisantes son semillas redonditas que viven en un estuche verde: la vaina.", ca: "El gerd és com un barretet vermell fet de boletes plenes de suc.", en: "Grapes grow in bunches. Dried in the sun, they become raisins!", cs: "Granátové jablko ukrývá stovky šťavnatých semínek jako malé rubíny.", fr: "La grenade cache des centaines de graines juteuses comme des petits rubis." } },
    { letter: "H", emoji: "🌿", item: { es: "Huerto", ca: "Hort", en: "Honeydew melon", cs: "Hruška", fr: "Haricot vert" },
      fact: { es: "Un huerto es un trocito de tierra donde crecen tus meriendas. Se riega y se cuida cada día.", ca: "Un hort és un trosset de terra on creixen els teus berenars. Es rega i es cuida cada dia.", en: "The honeydew melon is green and sweet inside, like a sip of cool water.", cs: "Hruška je nahoře štíhlá a dole kulatá. Sladká a šťavnatá jako med.", fr: "Le haricot vert grimpe comme un alpiniste : sa tige s'enroule en cherchant le soleil." } },
    { letter: "I", emoji: "🥬", item: { es: "Iceberg (lechuga)", ca: "Iceberg (enciam)", en: "Iceberg lettuce", cs: "Iceberg (salát)", fr: "Igname" },
      fact: { es: "La lechuga iceberg es crujiente y casi toda de agua, fresquita como su nombre.", ca: "L'enciam iceberg és cruixent i gairebé tot d'aigua, fresquet com el seu nom.", en: "Iceberg lettuce is crunchy and almost all water, as cool as its name.", cs: "Salát iceberg je křupavý a skoro celý z vody, svěží jako jeho jméno.", fr: "L'igname est une racine géante qui se mange comme la pomme de terre." } },
    { letter: "J", emoji: "🫘", item: { es: "Judía verde", ca: "Julivert", en: "Jackfruit", cs: "Jahoda", fr: "Jardin" },
      fact: { es: "La judía verde se come con vaina y todo. Crece trepando, como una escaladora.", ca: "El julivert és l'herbeta que corona els plats. Un ramet fa màgia a la cuina!", en: "The jackfruit is the biggest tree fruit in the world: one can weigh as much as a kid!", cs: "Jahoda nosí svá semínka na povrchu. Je jich asi dvě stě!", fr: "Dans un jardin potager poussent tes goûters. Il faut l'arroser et lui parler gentiment !" } },
    { letter: "K", emoji: "🥝", item: { es: "Kiwi", ca: "Kiwi", en: "Kiwi", cs: "Kiwi", fr: "Kiwi" },
      fact: { es: "El kiwi es peludito por fuera y verde brillante por dentro. Se llama como un pájaro de Nueva Zelanda.", ca: "El kiwi és peludet per fora i verd brillant per dins. Es diu com un ocell de Nova Zelanda.", en: "The kiwi is fuzzy outside and bright green inside. It is named after a bird from New Zealand.", cs: "Kiwi je zvenku chlupaté a uvnitř zářivě zelené. Jmenuje se po ptáčkovi z Nového Zélandu.", fr: "Le kiwi est tout poilu dehors et vert brillant dedans. Il porte le nom d'un oiseau de Nouvelle-Zélande." } },
    { letter: "L", emoji: "🍋", item: { es: "Limón", ca: "Llimona", en: "Lemon", cs: "Lilek", fr: "Laitue" },
      fact: { es: "El limonero es generoso: puede dar flores y limones casi todo el año.", ca: "El llimoner és generós: pot donar flors i llimones gairebé tot l'any.", en: "The lemon tree is generous: it can give flowers and lemons almost all year round.", cs: "Lilek je fialový a lesklý jako balonek. Uvnitř je měkký jako houbička.", fr: "La laitue est croquante et presque toute en eau. Une salade bien fraîche !" } },
    { letter: "M", emoji: "🍎", item: { es: "Manzana", ca: "Maduixa", en: "Melon", cs: "Mrkev", fr: "Melon" },
      fact: { es: "La manzana flota en el agua porque tiene aire dentro. ¡Haz la prueba en la bañera!", ca: "La maduixa porta les seves llavoretes per fora, unes 200. La fruita al revés!", en: "The melon is a giant berry full of sweet juice. In summer it tastes like a party.", cs: "Mrkev bývala kdysi fialová i bílá. Ta oranžová zvítězila před 400 lety.", fr: "Le melon est une baie géante pleine de jus sucré. En été, il a un goût de fête." } },
    { letter: "N", emoji: "🍊", item: { es: "Naranja", ca: "Nap", en: "Nectarine", cs: "Nektarinka", fr: "Noix" },
      fact: { es: "La naranja guarda gajos bajo la piel, como una tienda de campaña con habitaciones.", ca: "El nap és una arrel blanca i lila que creix amagada sota terra.", en: "The nectarine is a peach without its fuzzy coat: smooth and shiny.", cs: "Nektarinka je broskev bez chlupatého kabátku: hladká a lesklá.", fr: "La noix ressemble à un petit cerveau dans une coquille. Elle donne plein d'énergie !" } },
    { letter: "O", emoji: "🫒", item: { es: "Oliva", ca: "Oliva", en: "Orange", cs: "Okurka", fr: "Oignon" },
      fact: { es: "De las olivas sale el aceite dorado. Un olivo puede vivir mil años.", ca: "De les olives surt l'oli daurat. Una olivera pot viure mil anys.", en: "The orange keeps its segments under the skin, like a tent with little rooms.", cs: "Okurka je skoro celá z vody. Křupne a osvěží jako doušek pramene.", fr: "L'oignon libère un petit nuage qui pique les yeux. Ce n'est pas de la tristesse, c'est de la science !" } },
    { letter: "P", emoji: "🍌", item: { es: "Plátano", ca: "Pèsol", en: "Pineapple", cs: "Paprika", fr: "Poire" },
      fact: { es: "Los plátanos crecen en racimos que miran al cielo, buscando la luz.", ca: "Els pèsols són llavors rodonetes que viuen en un estoig verd: la tavella.", en: "The pineapple wears a crown of leaves and takes almost two years to grow.", cs: "Paprika umí být zelená, žlutá i červená: dozrává a mění barvu jako semafor.", fr: "La poire est douce et fondante. Il en existe de plus de mille sortes !" } },
    { letter: "Q", emoji: "🌾", item: { es: "Quinoa", ca: "Quinoa", en: "Quince", cs: "Quinoa", fr: "Quetsche" },
      fact: { es: "La quinoa son semillas diminutas de los Andes. Los incas ya la comían hace muchísimo.", ca: "La quinoa són llavors diminutes dels Andes. Els inques ja en menjaven fa moltíssim.", en: "The quince is too hard to eat raw, but cooked it becomes a sweet pink jelly.", cs: "Quinoa jsou droboučká semínka z hor v Andách. Jedli je už dávní Inkové.", fr: "La quetsche est une petite prune violette. Elle rend les tartes délicieuses !" } },
    { letter: "R", emoji: "🍇", item: { es: "Rábano", ca: "Raïm", en: "Radish", cs: "Rajče", fr: "Radis" },
      fact: { es: "El rábano es rojo por fuera y blanco por dentro, y crece rapidísimo: en un mes está listo.", ca: "El raïm creix en ramells. Assecat al sol es converteix en panses!", en: "The radish is red outside and white inside, and grows super fast: ready in a month.", cs: "Rajče vyrostlo z květu a nosí semínka uvnitř: pro vědce je to ovoce!", fr: "Le radis est rouge dehors et blanc dedans, et il pousse très vite : prêt en un mois." } },
    { letter: "S", emoji: "🍉", item: { es: "Sandía", ca: "Síndria", en: "Strawberry", cs: "Semínko", fr: "Salade" },
      fact: { es: "En la sandía, 9 de cada 10 gotas son agua. ¡La fruta piscina!", ca: "A la síndria, 9 de cada 10 gotes són aigua. La fruita piscina!", en: "The strawberry wears its seeds on the outside, about 200 of them!", cs: "Každé semínko je spící rostlinka, která čeká na vodu a teplíčko.", fr: "La salade est croquante et pleine d'eau. Une feuille bien fraîche pour l'été !" } },
    { letter: "T", emoji: "🍅", item: { es: "Tomate", ca: "Tomàquet", en: "Tomato", cs: "Třešeň", fr: "Tomate" },
      fact: { es: "El tomate nace de una flor y lleva semillas dentro: para la ciencia, ¡es una fruta!", ca: "El tomàquet neix d'una flor i porta llavors a dins: per a la ciència, és una fruita!", en: "The tomato grows from a flower and has seeds inside: for science, it is a fruit!", cs: "Třešně rostou po dvou, jako letní náušnice na stromě.", fr: "La tomate naît d'une fleur et porte ses graines dedans : pour la science, c'est un fruit !" } },
    { letter: "U", emoji: "🍇", item: { es: "Uva", ca: "Ulls de la patata", en: "Ugli", cs: "Úroda", fr: "Ugli" },
      fact: { es: "Las uvas dormidas al sol se convierten en pasas, dulces y arrugaditas.", ca: "Les patates tenen ulls: els puntets d'on surten els brots nous.", en: "The ugli is a real fruit from Jamaica. Funny name, wrinkly skin, sweet heart!", cs: "Úroda je všechno, co zahrádka na podzim daruje: plný košík barev.", fr: "L'ugli est un vrai fruit de Jamaïque. Nom rigolo, peau fripée, cœur tout doux !" } },
    { letter: "V", emoji: "🌸", item: { es: "Vainilla", ca: "Vainilla", en: "Vanilla", cs: "Vanilka", fr: "Vanille" },
      fact: { es: "La vainilla viene de una orquídea: su vaina perfuma los pasteles del mundo entero.", ca: "La vainilla ve d'una orquídia: la seva beina perfuma els pastissos del món sencer.", en: "Vanilla comes from an orchid: its pod perfumes cakes all over the world.", cs: "Vanilka pochází z orchideje: její lusk voní v dortech po celém světě.", fr: "La vanille vient d'une orchidée : sa gousse parfume les gâteaux du monde entier." } },
    { letter: "W", emoji: "🌶️", item: { es: "Wasabi", ca: "Wasabi", en: "Wasabi", cs: "Wasabi", fr: "Wasabi" },
      fact: { es: "El wasabi es una raíz japonesa verde que pica... ¡en la nariz!", ca: "El wasabi és una arrel japonesa verda que pica... al nas!", en: "Wasabi is a green Japanese root that is spicy... in your nose!", cs: "Wasabi je zelený japonský kořen, který pálí... až v nose!", fr: "Le wasabi est une racine japonaise verte qui pique... dans le nez !" } },
    { letter: "X", emoji: "🍅", item: { es: "Xitomatl", ca: "Xirimoia", en: "Xigua", cs: "Xitomatl", fr: "Xitomatl" },
      fact: { es: "La palabra tomate viene del náhuatl xitomatl. ¡El tomate nació en México!", ca: "La xirimoia té la polpa blanca i dolça, com un gelat que creix als arbres.", en: "Xigua is another name for the watermelon: it is how you say it in China.", cs: "Slovo tomate pochází z nahuatlského xitomatl. Rajče se narodilo v Mexiku!", fr: "Le mot tomate vient du nahuatl xitomatl. La tomate est née au Mexique !" } },
    { letter: "Y", emoji: "🍠", item: { es: "Yuca", ca: "Yuzu", en: "Yam", cs: "Yuzu", fr: "Yuzu" },
      fact: { es: "La yuca es una raíz de América que se come cocida, como las patatas.", ca: "El yuzu és una llimona japonesa perfumada. Al Japó fins i tot fan banys de yuzu a l'hivern!", en: "The yam is a giant root: some grow as long as a kid is tall!", cs: "Yuzu je voňavý japonský citron. V Japonsku si s ním v zimě dávají i koupel!", fr: "Le yuzu est un citron japonais parfumé. Au Japon, on prend même des bains de yuzu en hiver !" } },
    { letter: "Z", emoji: "🥕", item: { es: "Zanahoria", ca: "Zum-zum (les abelles)", en: "Zucchini", cs: "Zelí", fr: "Zeste" },
      fact: { es: "Antes había zanahorias moradas y blancas. Las naranjas se hicieron famosas hace 400 años.", ca: "Zum-zum fan les abelles a l'hort: sense elles no hi hauria fruita, perquè pol·linitzen les flors.", en: "The zucchini is a summer squash: if you let it grow, it turns into a giant!", cs: "Hlávka zelí je jako zelená kniha: list za listem až do středu.", fr: "Le zeste est la peau parfumée du citron ou de l'orange. Il réveille les gâteaux !" } }
  ],

  /* ---------- FAMOSOS ---------- */
  famous: [
    { emoji: "🎨", year: "1611", color: "#8e4585", name: { es: "Clara Peeters", ca: "Clara Peeters", en: "Clara Peeters", cs: "Clara Peetersová", fr: "Clara Peeters" },
      achievement: { es: "Pintora de hace 400 años: pintaba mesas llenas de frutas y quesos tan de verdad que dan ganas de comérselas.", ca: "Pintora de fa 400 anys: pintava taules plenes de fruites i formatges tan de debò que fan ganes de menjar-se'ls.", en: "A painter from 400 years ago: she painted tables full of fruit and cheese so real you want to eat them.", cs: "Malířka před 400 lety: malovala stoly plné ovoce a sýrů tak opravdově, že se ti sbíhají sliny.", fr: "Peintre d'il y a 400 ans : elle peignait des tables pleines de fruits et de fromages si vrais qu'on veut les manger." },
      quote: { es: "Mira despacio: en un cuadro de frutas siempre hay secretos escondidos.", ca: "Mira a poc a poc: en un quadre de fruites sempre hi ha secrets amagats.", en: "Look slowly: a fruit painting always hides little secrets.", cs: "Dívej se pomalu: v obraze s ovocem se vždycky skrývají tajemství.", fr: "Regarde doucement : un tableau de fruits cache toujours des secrets." } },
    { emoji: "🫛", year: "1866", color: "#5e35b1", name: { es: "Gregor Mendel", ca: "Gregor Mendel", en: "Gregor Mendel", cs: "Gregor Mendel", fr: "Gregor Mendel" },
      achievement: { es: "El monje de los guisantes: plantó miles en su jardín y descubrió por qué los hijos se parecen a los padres.", ca: "El monjo dels pèsols: en va plantar milers al seu jardí i va descobrir per què els fills s'assemblen als pares.", en: "The monk of the peas: he planted thousands in his garden and discovered why children look like their parents.", cs: "Mnich s hráškem: zasadil ho v zahradě tisíce a objevil, proč se děti podobají rodičům.", fr: "Le moine des petits pois : il en a planté des milliers dans son jardin et a découvert pourquoi les enfants ressemblent à leurs parents." },
      quote: { es: "Los guisantes me contaron un secreto de la vida.", ca: "Els pèsols em van explicar un secret de la vida.", en: "The peas told me a secret of life.", cs: "Hrášek mi prozradil tajemství života.", fr: "Les petits pois m'ont confié un secret de la vie." } },
    { emoji: "🥜", year: "1921", color: "#2e7d32", name: { es: "George Washington Carver", ca: "George Washington Carver", en: "George Washington Carver", cs: "George Washington Carver", fr: "George Washington Carver" },
      achievement: { es: "El mago del cacahuete: inventó cientos de cosas hechas con cacahuetes y enseñó a dejar descansar la tierra.", ca: "El mag del cacauet: va inventar centenars de coses fetes amb cacauets i va ensenyar a deixar descansar la terra.", en: "The peanut wizard: he invented hundreds of things made from peanuts and taught farmers to let the soil rest.", cs: "Kouzelník s burákem: vymyslel stovky věcí z arašídů a naučil farmáře nechávat půdu odpočívat.", fr: "Le magicien de la cacahuète : il a inventé des centaines de choses avec des cacahuètes et a appris aux fermiers à laisser la terre se reposer." },
      quote: { es: "Si quieres que una planta te cuente sus secretos, quiérela mucho.", ca: "Si vols que una planta t'expliqui els seus secrets, estima-la molt.", en: "If you want a plant to tell you its secrets, love it a lot.", cs: "Chceš-li, aby ti rostlina prozradila svá tajemství, měj ji hodně rád.", fr: "Si tu veux qu'une plante te confie ses secrets, aime-la très fort." } },
    { emoji: "🎒", year: "1926", color: "#7b5e3b", name: { es: "Nikolái Vavílov", ca: "Nikolai Vavílov", en: "Nikolai Vavilov", cs: "Nikolaj Vavilov", fr: "Nikolaï Vavilov" },
      achievement: { es: "El guardián de las semillas: viajó por el mundo entero recogiéndolas y las guardó para que ninguna planta se perdiera jamás.", ca: "El guardià de les llavors: va viatjar pel món sencer recollint-les i les va guardar perquè cap planta no es perdés mai.", en: "The guardian of seeds: he travelled the whole world collecting them and kept them safe so no plant would ever be lost.", cs: "Strážce semínek: procestoval celý svět, sbíral je a schoval, aby se žádná rostlina nikdy neztratila.", fr: "Le gardien des graines : il a voyagé dans le monde entier pour les récolter et les a gardées pour qu'aucune plante ne se perde jamais." },
      quote: { es: "Cada semilla guarda un tesoro para los niños del futuro.", ca: "Cada llavor guarda un tresor per als nens del futur.", en: "Every seed keeps a treasure for the children of the future.", cs: "Každé semínko schovává poklad pro děti budoucnosti.", fr: "Chaque graine garde un trésor pour les enfants du futur." } },
    { emoji: "🌾", year: "1970", color: "#c0912b", name: { es: "Norman Borlaug", ca: "Norman Borlaug", en: "Norman Borlaug", cs: "Norman Borlaug", fr: "Norman Borlaug" },
      achievement: { es: "El científico que enseñó a los campos a dar más trigo, para que muchísima gente dejara de pasar hambre.", ca: "El científic que va ensenyar els camps a donar més blat, perquè moltíssima gent deixés de passar gana.", en: "The scientist who taught the fields to grow more wheat, so many many people stopped going hungry.", cs: "Vědec, který naučil pole dávat víc pšenice, aby spousta lidí přestala mít hlad.", fr: "Le scientifique qui a appris aux champs à donner plus de blé, pour que beaucoup de gens n'aient plus faim." },
      quote: { es: "El pan de mañana se siembra hoy.", ca: "El pa de demà se sembra avui.", en: "Tomorrow's bread is planted today.", cs: "Zítřejší chleba se seje už dnes.", fr: "Le pain de demain se sème aujourd'hui." } }
  ],

  childDream: {
    girl: { es: "Jardinera del huerto arcoíris", ca: "Jardinera de l'hort arc de Sant Martí", en: "Rainbow garden gardener", cs: "Zahradnice duhové zahrádky", fr: "Jardinière du potager arc-en-ciel" },
    boy: { es: "Jardinero del huerto arcoíris", ca: "Jardiner de l'hort arc de Sant Martí", en: "Rainbow garden gardener", cs: "Zahradník duhové zahrádky", fr: "Jardinier du potager arc-en-ciel" },
    kid: { es: "Peque del huerto arcoíris", ca: "Jardiner de l'hort arc de Sant Martí", en: "Rainbow garden gardener", cs: "Zahradníček duhové zahrádky", fr: "Jardine le potager arc-en-ciel" }
  },
  childQuote: { es: "Cuando sea mayor tendré un huerto y comeré un arcoíris cada día. ¡Y os invitaré a merendar!", ca: "Quan sigui gran tindré un hort i menjaré un arc de Sant Martí cada dia. I us convidaré a berenar!", en: "When I grow up I will have a garden and eat a rainbow every day. And you are all invited for a snack!", cs: "Až vyrostu, budu mít zahrádku a každý den sním duhu. A pozvu vás na svačinku!", fr: "Quand je serai grand, j'aurai un potager et je mangerai un arc-en-ciel chaque jour. Et je vous inviterai au goûter !" },

  /* ---------- MATES ---------- */
  mathEmojis: ["🍎", "🥕", "🍓", "🍌", "🍉", "🥦"],

  /* ---------- CONSTRUCTOR: la brocheta de fruta ---------- */
  builder: {
    title: { es: "¡Monta tu brocheta de fruta!", ca: "Munta la teva broqueta de fruita!", en: "Build your fruit skewer!", cs: "Sestav si ovocný špíz!", fr: "Monte ta brochette de fruits !" },
    thing: { es: "brocheta", ca: "broqueta", en: "skewer", cs: "špíz", fr: "brochette" },
    parts: [
      { id: "fruta1", label: { es: "Fruta de arriba", ca: "Fruita de dalt", en: "Top fruit", cs: "Ovoce nahoře", fr: "Fruit du haut" },
        options: [{ id: "fresa", v: "fresa", icon: "🍓" }, { id: "platano", v: "platano", icon: "🍌" }, { id: "uva", v: "uva", icon: "🍇" }] },
      { id: "fruta2", label: { es: "Fruta del medio", ca: "Fruita del mig", en: "Middle fruit", cs: "Ovoce uprostřed", fr: "Fruit du milieu" },
        options: [{ id: "manzana", v: "manzana", icon: "🍎" }, { id: "naranja", v: "naranja", icon: "🍊" }, { id: "kiwi", v: "kiwi", icon: "🥝" }] },
      { id: "fruta3", label: { es: "Fruta de abajo", ca: "Fruita de baix", en: "Bottom fruit", cs: "Ovoce dole", fr: "Fruit du bas" },
        options: [{ id: "sandia", v: "sandia", icon: "🍉" }, { id: "pina", v: "pina", icon: "🍍" }, { id: "mora", v: "mora", icon: "🫐" }] },
      { id: "extra", label: { es: "El toque final", ca: "El toc final", en: "The final touch", cs: "Ozdoba navrch", fr: "La touche finale" },
        options: [{ id: "choco", v: "choco", icon: "🍫" }, { id: "coco", v: "coco", icon: "🥥" }, { id: "menta", v: "menta", icon: "🌿" }] }
    ],
    svg(sel) {
      /* cada fruta se dibuja pinchada en el palo, con su carita */
      const F1 = {
        fresa: `<path d="M50 24 Q64 24 64 36 Q64 50 50 56 Q36 50 36 36 Q36 24 50 24 Z" fill="#e53935" stroke="#fff" stroke-width="1.6"/>
          <path d="M42 24 L50 18 L58 24 L52 27 L48 27 Z" fill="#66bb6a"/>
          ${[[43, 34], [50, 38], [57, 34], [46, 46], [54, 46]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="1.2" fill="#ffe082"/>`).join("")}`,
        platano: `<circle cx="50" cy="40" r="14" fill="#ffe57f" stroke="#fff" stroke-width="1.6"/>
          <circle cx="50" cy="40" r="8" fill="#fff8e1"/>
          ${[0, 60, 120, 180, 240, 300].map(a => `<circle cx="${(50 + 4.6 * Math.cos(a * Math.PI / 180)).toFixed(1)}" cy="${(40 + 4.6 * Math.sin(a * Math.PI / 180)).toFixed(1)}" r="1" fill="#8d6e63"/>`).join("")}`,
        uva: `<circle cx="43" cy="33" r="8" fill="#8e24aa" stroke="#fff" stroke-width="1.4"/>
          <circle cx="57" cy="33" r="8" fill="#ab47bc" stroke="#fff" stroke-width="1.4"/>
          <circle cx="50" cy="45" r="9" fill="#7b1fa2" stroke="#fff" stroke-width="1.4"/>
          <circle cx="47" cy="42" r="2.4" fill="rgba(255,255,255,.5)"/>`
      };
      const F2 = {
        manzana: `<path d="M50 72 Q35 72 35 87 Q35 100 50 102 Q65 100 65 87 Q65 72 50 72 Z" fill="#ef5350" stroke="#fff" stroke-width="1.6"/>
          <path d="M50 74 Q49 68 53 65" stroke="#6d4c41" stroke-width="2.4" fill="none" stroke-linecap="round"/>
          <ellipse cx="56" cy="69" rx="4.4" ry="2.6" fill="#66bb6a" transform="rotate(-24 56 69)"/>
          <ellipse cx="44" cy="82" rx="3.4" ry="5" fill="rgba(255,255,255,.35)"/>`,
        naranja: `<circle cx="50" cy="87" r="15" fill="#fb8c00" stroke="#fff" stroke-width="1.6"/>
          ${[0, 45, 90, 135, 180, 225, 270, 315].map(a => `<line x1="50" y1="87" x2="${(50 + 12 * Math.cos(a * Math.PI / 180)).toFixed(1)}" y2="${(87 + 12 * Math.sin(a * Math.PI / 180)).toFixed(1)}" stroke="#ffcc80" stroke-width="1.6"/>`).join("")}
          <circle cx="50" cy="87" r="3" fill="#ffe0b2"/>`,
        kiwi: `<circle cx="50" cy="87" r="15" fill="#8d6e63" stroke="#fff" stroke-width="1.6"/>
          <circle cx="50" cy="87" r="12" fill="#9ccc65"/>
          <circle cx="50" cy="87" r="4" fill="#f0f4c3"/>
          ${[20, 70, 110, 160, 200, 250, 290, 340].map(a => `<circle cx="${(50 + 7.6 * Math.cos(a * Math.PI / 180)).toFixed(1)}" cy="${(87 + 7.6 * Math.sin(a * Math.PI / 180)).toFixed(1)}" r="1" fill="#33691e"/>`).join("")}`
      };
      const F3 = {
        sandia: `<path d="M33 118 A17 17 0 0 1 67 118 Z" fill="#66bb6a" stroke="#fff" stroke-width="1.6"/>
          <path d="M36.5 118 A13.5 13.5 0 0 1 63.5 118 Z" fill="#ef5350"/>
          <path d="M33 118 L67 118" stroke="#fff" stroke-width="1.6"/>
          <circle cx="45" cy="111" r="1.4" fill="#37474f"/><circle cx="55" cy="111" r="1.4" fill="#37474f"/><circle cx="50" cy="106" r="1.4" fill="#37474f"/>`,
        pina: `<rect x="38" y="105" width="24" height="24" rx="6" fill="#fdd835" stroke="#fff" stroke-width="1.6"/>
          <path d="M38 111 L62 123 M38 123 L62 111 M50 105 L50 129" stroke="#f9a825" stroke-width="1.6"/>
          <path d="M46 105 L50 98 L54 105" fill="#66bb6a"/>`,
        mora: `${[[44, 110], [56, 110], [38, 119], [50, 119], [62, 119], [44, 128], [56, 128]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="6" fill="#5e35b1" stroke="#fff" stroke-width="1.2"/>`).join("")}
          <circle cx="47" cy="115" r="2" fill="rgba(255,255,255,.45)"/>`
      };
      const EX = {
        choco: `<path d="M34 30 Q42 38 50 32 Q58 26 66 34 M32 76 Q42 84 52 78 Q60 73 68 80 M34 112 Q44 120 54 114 Q60 110 66 116" stroke="#5d4037" stroke-width="3" fill="none" stroke-linecap="round" opacity=".9"/>`,
        coco: `${[[40, 28], [62, 34], [37, 80], [60, 74], [42, 108], [63, 118], [52, 60]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="1.7" fill="#fffde7" stroke="#e0e0e0" stroke-width=".5"/>`).join("")}`,
        menta: `<ellipse cx="41" cy="14" rx="7" ry="4" fill="#43a047" transform="rotate(-28 41 14)"/>
          <ellipse cx="59" cy="14" rx="7" ry="4" fill="#66bb6a" transform="rotate(28 59 14)"/>
          <path d="M46 17 Q50 12 54 17" stroke="#2e7d32" stroke-width="1.6" fill="none"/>`
      };
      const f1 = F1[sel.fruta1] || F1.fresa;
      const f2 = F2[sel.fruta2] || F2.manzana;
      const f3 = F3[sel.fruta3] || F3.sandia;
      const ex = EX[sel.extra] || EX.choco;
      return `<svg viewBox="0 0 100 150" width="170" height="255">
        <ellipse cx="50" cy="141" rx="34" ry="7" fill="#ffe0b2" opacity=".8"/>
        <ellipse cx="50" cy="139" rx="28" ry="5" fill="#fff3e0"/>
        <rect x="48" y="16" width="4" height="122" rx="2" fill="#a1887f"/>
        <circle cx="50" cy="15" r="4" fill="#8d6e63"/>
        ${f3}${f2}${f1}${ex}
        <g opacity=".9"><circle cx="20" cy="34" r="1.6" fill="#ffd54f"><animate attributeName="opacity" values="1;.2;1" dur="1.6s" repeatCount="indefinite"/></circle>
        <circle cx="80" cy="58" r="1.4" fill="#ff8a65"><animate attributeName="opacity" values=".3;1;.3" dur="2s" repeatCount="indefinite"/></circle>
        <circle cx="78" cy="20" r="1.4" fill="#aed581"><animate attributeName="opacity" values="1;.3;1" dur="2.4s" repeatCount="indefinite"/></circle></g>
      </svg>`;
    }
  }
};
