"use strict";
/* ============================================================
   Contenido de GAUDÍ (parte A):
   quiz, alfabeto, famosos, mates y constructor.
   El modernismo de Barcelona contado a los peques: trencadís,
   dragones de tejado, columnas-árbol y la salamandra del parque.
   ============================================================ */

THEMES.gaudi = {
  emoji: "🦎", ready: true,
  grad: "linear-gradient(150deg,#00695c,#4db6ac)",
  name: { es: "Gaudí", ca: "Gaudí", en: "Gaudí", cs: "Gaudí", fr: "Gaudí" }
};

THEMES.gaudi.content = {

  statusPlace: { es: "Conectado desde el banco ondulado del Park Güell", ca: "Connectat des del banc ondulat del Park Güell", en: "Connected from the wavy bench of Park Güell", cs: "Připojeno z vlnité lavičky v parku Güell", fr: "Connecté depuis le banc ondulé du Park Güell" },
  welcome: { es: "¡Hola, {name}! Hoy paseamos por la Barcelona de Gaudí: casas con tejado de dragón, un parque de cuento y torres que tocan el cielo. ¡Y ni una sola línea recta!", ca: "Hola, {name}! Avui passegem per la Barcelona de Gaudí: cases amb teulada de drac, un parc de conte i torres que toquen el cel. I ni una sola línia recta!", en: "Hi, {name}! Today we stroll through Gaudí's Barcelona: houses with dragon roofs, a fairy-tale park and towers that touch the sky. And not one straight line!", cs: "Ahoj, {name}! Dnes se projdeme Gaudího Barcelonou: domy se střechou jako drak, pohádkový park a věže, které sahají až k nebi. A ani jedna rovná čára!", fr: "Salut, {name} ! Aujourd'hui, on se promène dans la Barcelone de Gaudí : des maisons au toit de dragon, un parc de conte de fées et des tours qui touchent le ciel. Et pas une seule ligne droite !" },

  /* ---------- QUIZ: 10 preguntas ---------- */
  quiz: [
    { emoji: "🔷",
      q: { es: "¿Qué es el trencadís?", ca: "Què és el trencadís?", en: "What is trencadís?", cs: "Co je trencadís?", fr: "Qu'est-ce que le trencadís ?" },
      options: [
        { es: "Un dulce", ca: "Un dolç", en: "A sweet", cs: "Sladkost", fr: "Une friandise" },
        { es: "Un mosaico de trocitos de cerámica rota", ca: "Un mosaic de trossets de ceràmica trencada", en: "A mosaic of little broken tile pieces", cs: "Mozaika z kousků rozbitých kachliček", fr: "Une mosaïque de petits morceaux de céramique cassée" },
        { es: "Un baile", ca: "Un ball", en: "A dance", cs: "Tanec", fr: "Une danse" },
        { es: "Un pájaro", ca: "Un ocell", en: "A bird", cs: "Pták", fr: "Un oiseau" }],
      answer: 1,
      explanation: { es: "Gaudí y sus ayudantes rompían azulejos, ¡crac!, y con los trocitos decoraban bancos, tejados y salamandras.", ca: "Gaudí i els seus ajudants trencaven rajoles, crac!, i amb els trossets decoraven bancs, teulades i salamandres.", en: "Gaudí and his helpers broke tiles, crack!, and used the little pieces to decorate benches, roofs and salamanders.", cs: "Gaudí a jeho pomocníci rozbíjeli kachličky, křach!, a kousky pak zdobili lavičky, střechy i salamandry.", fr: "Gaudí et ses aides cassaient des carreaux, crac !, et avec les morceaux ils décoraient bancs, toits et salamandres." } },
    { emoji: "🦎",
      q: { es: "¿Qué animal de colores te recibe en la escalera del Park Güell?", ca: "Quin animal de colors et rep a l'escala del Park Güell?", en: "Which colourful animal greets you on the Park Güell staircase?", cs: "Jaké barevné zvíře tě vítá na schodech v parku Güell?", fr: "Quel animal coloré t'accueille sur l'escalier du Park Güell ?" },
      options: [
        { es: "Un león", ca: "Un lleó", en: "A lion", cs: "Lev", fr: "Un lion" },
        { es: "Un caballo", ca: "Un cavall", en: "A horse", cs: "Kůň", fr: "Un cheval" },
        { es: "Una salamandra", ca: "Una salamandra", en: "A salamander", cs: "Salamandr", fr: "Une salamandre" },
        { es: "Un pingüino", ca: "Un pingüí", en: "A penguin", cs: "Tučňák", fr: "Un pingouin" }],
      answer: 2,
      explanation: { es: "La salamandra de trencadís es además una fuente: ¡el agua le sale por la boca! Todo el mundo quiere hacerse una foto con ella.", ca: "La salamandra de trencadís és a més una font: l'aigua li surt per la boca! Tothom vol fer-s'hi una foto.", en: "The trencadís salamander is also a fountain: water comes out of its mouth! Everyone wants a photo with it.", cs: "Salamandr z trencadísu je zároveň fontána: z pusy mu teče voda! Každý se s ním chce vyfotit.", fr: "La salamandre en trencadís est aussi une fontaine : l'eau sort par sa bouche ! Tout le monde veut une photo avec elle." } },
    { emoji: "🌿",
      q: { es: "¿Dónde buscaba Gaudí sus ideas?", ca: "On buscava Gaudí les seves idees?", en: "Where did Gaudí look for his ideas?", cs: "Kde hledal Gaudí své nápady?", fr: "Où Gaudí cherchait-il ses idées ?" },
      options: [
        { es: "En la naturaleza", ca: "A la natura", en: "In nature", cs: "V přírodě", fr: "Dans la nature" },
        { es: "En la tele", ca: "A la tele", en: "On TV", cs: "V televizi", fr: "À la télé" },
        { es: "En la Luna", ca: "A la Lluna", en: "On the Moon", cs: "Na Měsíci", fr: "Sur la Lune" },
        { es: "En un libro de recetas", ca: "En un llibre de receptes", en: "In a recipe book", cs: "V kuchařce", fr: "Dans un livre de recettes" }],
      answer: 0,
      explanation: { es: "Miraba árboles, olas, huesos y caracolas. La naturaleza era su gran libro de trucos.", ca: "Mirava arbres, onades, ossos i cargols de mar. La natura era el seu gran llibre de trucs.", en: "He studied trees, waves, bones and seashells. Nature was his great book of tricks.", cs: "Pozoroval stromy, vlny, kosti a mušle. Příroda byla jeho velká kniha triků.", fr: "Il observait les arbres, les vagues, les os et les coquillages. La nature était son grand livre d'astuces." } },
    { emoji: "🏰",
      q: { es: "¿Cómo se llama el templo de Gaudí que aún se está construyendo?", ca: "Com es diu el temple de Gaudí que encara s'està construint?", en: "What is Gaudí's temple that is still being built called?", cs: "Jak se jmenuje Gaudího chrám, který se pořád ještě staví?", fr: "Comment s'appelle le temple de Gaudí encore en construction ?" },
      options: [
        { es: "La Pedrera", ca: "La Pedrera", en: "La Pedrera", cs: "La Pedrera", fr: "La Pedrera" },
        { es: "La Sagrada Família", ca: "La Sagrada Família", en: "The Sagrada Família", cs: "Sagrada Família", fr: "La Sagrada Família" },
        { es: "El Park Güell", ca: "El Park Güell", en: "Park Güell", cs: "Park Güell", fr: "Le Park Güell" },
        { es: "La Casa Batlló", ca: "La Casa Batlló", en: "Casa Batlló", cs: "Casa Batlló", fr: "La Casa Batlló" }],
      answer: 1,
      explanation: { es: "Se empezó en 1882 y todavía hay grúas trabajando. ¡Los abuelos de tus abuelos ya la vieron en obras!", ca: "Es va començar el 1882 i encara hi ha grues treballant. Els avis dels teus avis ja la van veure en obres!", en: "It was started in 1882 and cranes are still working on it. Your grandparents' grandparents already saw it being built!", cs: "Začala se stavět v roce 1882 a jeřáby na ní pracují dodnes. Už prababičky tvých prababiček ji viděly ve stavbě!", fr: "Elle a été commencée en 1882 et les grues y travaillent encore. Les grands-parents de tes grands-parents l'ont déjà vue en chantier !" } },
    { emoji: "🐉",
      q: { es: "El tejado de la Casa Batlló parece...", ca: "La teulada de la Casa Batlló sembla...", en: "The roof of Casa Batlló looks like...", cs: "Střecha domu Casa Batlló vypadá jako...", fr: "Le toit de la Casa Batlló ressemble à..." },
      options: [
        { es: "Un plato de sopa", ca: "Un plat de sopa", en: "A bowl of soup", cs: "Talíř polévky", fr: "Une assiette de soupe" },
        { es: "Una alfombra", ca: "Una catifa", en: "A carpet", cs: "Koberec", fr: "Un tapis" },
        { es: "Un sombrero", ca: "Un barret", en: "A hat", cs: "Klobouk", fr: "Un chapeau" },
        { es: "El lomo de un dragón", ca: "El llom d'un drac", en: "The back of a dragon", cs: "Hřbet draka", fr: "Le dos d'un dragon" }],
      answer: 3,
      explanation: { es: "Tiene escamas de colores como un dragón dormido. Y dicen que la torre con la cruz es la lanza del caballero.", ca: "Té escates de colors com un drac adormit. I diuen que la torre amb la creu és la llança del cavaller.", en: "It has colourful scales like a sleeping dragon. And people say the tower with the cross is the knight's lance.", cs: "Má barevné šupiny jako spící drak. A říká se, že věžička s křížem je rytířovo kopí.", fr: "Il a des écailles colorées comme un dragon endormi. Et on dit que la tour avec la croix est la lance du chevalier." } },
    { emoji: "🏙️",
      q: { es: "¿En qué ciudad están casi todas las obras de Gaudí?", ca: "A quina ciutat hi ha gairebé totes les obres de Gaudí?", en: "In which city are almost all of Gaudí's works?", cs: "Ve kterém městě je skoro všechno, co Gaudí postavil?", fr: "Dans quelle ville se trouvent presque toutes les œuvres de Gaudí ?" },
      options: [
        { es: "Barcelona", ca: "Barcelona", en: "Barcelona", cs: "Barcelona", fr: "Barcelone" },
        { es: "París", ca: "París", en: "Paris", cs: "Paříž", fr: "Paris" },
        { es: "Praga", ca: "Praga", en: "Prague", cs: "Praha", fr: "Prague" },
        { es: "Madrid", ca: "Madrid", en: "Madrid", cs: "Madrid", fr: "Madrid" }],
      answer: 0,
      explanation: { es: "Barcelona es la ciudad de Gaudí. Siete de sus obras son Patrimonio de la Humanidad: tesoros de todo el mundo.", ca: "Barcelona és la ciutat de Gaudí. Set de les seves obres són Patrimoni de la Humanitat: tresors de tot el món.", en: "Barcelona is Gaudí's city. Seven of his works are World Heritage: treasures for the whole world.", cs: "Barcelona je Gaudího město. Sedm jeho staveb patří ke světovému dědictví: jsou to poklady celého světa.", fr: "Barcelone est la ville de Gaudí. Sept de ses œuvres sont au patrimoine mondial : des trésors pour le monde entier." } },
    { emoji: "⛓️",
      q: { es: "¿Con qué calculaba Gaudí la forma de sus arcos?", ca: "Amb què calculava Gaudí la forma dels seus arcs?", en: "What did Gaudí use to work out the shape of his arches?", cs: "Pomocí čeho Gaudí počítal tvar svých oblouků?", fr: "Avec quoi Gaudí calculait-il la forme de ses arcs ?" },
      options: [
        { es: "Con espaguetis", ca: "Amb espaguetis", en: "With spaghetti", cs: "Špagetami", fr: "Avec des spaghettis" },
        { es: "Con cadenitas colgantes", ca: "Amb cadenetes penjades", en: "With little hanging chains", cs: "Zavěšenými řetízky", fr: "Avec des petites chaînes suspendues" },
        { es: "Con globos", ca: "Amb globus", en: "With balloons", cs: "Balonky", fr: "Avec des ballons" },
        { es: "Con dados", ca: "Amb daus", en: "With dice", cs: "Kostkami", fr: "Avec des dés" }],
      answer: 1,
      explanation: { es: "Colgaba cadenitas boca abajo y luego miraba la forma al revés: así nacían sus arcos perfectos.", ca: "Penjava cadenetes cap per avall i després mirava la forma a l'inrevés: així naixien els seus arcs perfectes.", en: "He hung little chains upside down and then looked at the shape the other way up: that is how his perfect arches were born.", cs: "Zavěšoval řetízky a pak se na jejich tvar díval vzhůru nohama: tak vznikaly jeho dokonalé oblouky.", fr: "Il suspendait des petites chaînes et regardait ensuite la forme à l'envers : c'est ainsi que naissaient ses arcs parfaits." } },
    { emoji: "🤝",
      q: { es: "¿Quién era Eusebi Güell?", ca: "Qui era Eusebi Güell?", en: "Who was Eusebi Güell?", cs: "Kdo byl Eusebi Güell?", fr: "Qui était Eusebi Güell ?" },
      options: [
        { es: "Su perro", ca: "El seu gos", en: "His dog", cs: "Jeho pes", fr: "Son chien" },
        { es: "Su amigo mecenas, que le encargaba obras", ca: "El seu amic mecenes, que li encarregava obres", en: "His patron friend, who ordered works from him", cs: "Jeho přítel a mecenáš, který si u něj objednával stavby", fr: "Son ami mécène, qui lui commandait des œuvres" },
        { es: "Un dragón", ca: "Un drac", en: "A dragon", cs: "Drak", fr: "Un dragon" },
        { es: "Su profesor de mates", ca: "El seu professor de mates", en: "His maths teacher", cs: "Jeho učitel matematiky", fr: "Son professeur de maths" }],
      answer: 1,
      explanation: { es: "Güell era un amigo rico que creía muchísimo en Gaudí. Por eso hay un Park Güell y un Palau Güell.", ca: "Güell era un amic ric que creia moltíssim en Gaudí. Per això hi ha un Park Güell i un Palau Güell.", en: "Güell was a rich friend who believed in Gaudí completely. That is why there is a Park Güell and a Palau Güell.", cs: "Güell byl bohatý přítel, který Gaudímu nesmírně věřil. Proto existuje park Güell i palác Güell.", fr: "Güell était un ami riche qui croyait énormément en Gaudí. C'est pour ça qu'il existe un Park Güell et un Palau Güell." } },
    { emoji: "🌳",
      q: { es: "¿A qué se parecen las columnas de dentro de la Sagrada Família?", ca: "A què s'assemblen les columnes de dins de la Sagrada Família?", en: "What do the columns inside the Sagrada Família look like?", cs: "Čemu se podobají sloupy uvnitř Sagrady Famílie?", fr: "À quoi ressemblent les colonnes à l'intérieur de la Sagrada Família ?" },
      options: [
        { es: "A árboles", ca: "A arbres", en: "Trees", cs: "Stromům", fr: "À des arbres" },
        { es: "A espaguetis", ca: "A espaguetis", en: "Spaghetti", cs: "Špagetám", fr: "À des spaghettis" },
        { es: "A farolas", ca: "A fanals", en: "Lampposts", cs: "Lampám", fr: "À des lampadaires" },
        { es: "A robots", ca: "A robots", en: "Robots", cs: "Robotům", fr: "À des robots" }],
      answer: 0,
      explanation: { es: "Se abren en ramas, como árboles gigantes. Gaudí quería que dentro te sintieras en un bosque.", ca: "S'obren en branques, com arbres gegants. Gaudí volia que a dins et sentissis en un bosc.", en: "They open into branches, like giant trees. Gaudí wanted you to feel like you were in a forest inside.", cs: "Větví se jako obrovské stromy. Gaudí chtěl, aby ses uvnitř cítil jako v lese.", fr: "Elles s'ouvrent en branches, comme des arbres géants. Gaudí voulait qu'à l'intérieur on se sente dans une forêt." } },
    { emoji: "🏠",
      q: { es: "La Pedrera casi no tiene...", ca: "La Pedrera gairebé no té...", en: "La Pedrera has almost no...", cs: "La Pedrera skoro nemá...", fr: "La Pedrera n'a presque pas de..." },
      options: [
        { es: "Ventanas", ca: "Finestres", en: "Windows", cs: "Okna", fr: "Fenêtres" },
        { es: "Chimeneas", ca: "Xemeneies", en: "Chimneys", cs: "Komíny", fr: "Cheminées" },
        { es: "Líneas rectas", ca: "Línies rectes", en: "Straight lines", cs: "Rovné čáry", fr: "Lignes droites" },
        { es: "Puertas", ca: "Portes", en: "Doors", cs: "Dveře", fr: "Portes" }],
      answer: 2,
      explanation: { es: "Todo es ondulado, como olas de piedra. A Gaudí le gustaban mucho más las curvas que las rectas.", ca: "Tot és ondulat, com onades de pedra. A Gaudí li agradaven molt més les corbes que les rectes.", en: "Everything is wavy, like waves of stone. Gaudí liked curves much more than straight lines.", cs: "Všechno je zvlněné jako kamenné vlny. Gaudí měl křivky mnohem radši než rovné čáry.", fr: "Tout est ondulé, comme des vagues de pierre. Gaudí aimait bien plus les courbes que les lignes droites." } },
    { emoji: "👶",
      q: { es: "¿En qué ciudad nació Gaudí?", ca: "A quina ciutat va néixer Gaudí?", en: "In which city was Gaudí born?", cs: "Ve kterém městě se Gaudí narodil?", fr: "Dans quelle ville est né Gaudí ?" },
      options: [
        { es: "Barcelona", ca: "Barcelona", en: "Barcelona", cs: "Barcelona", fr: "Barcelone" },
        { es: "Sevilla", ca: "Sevilla", en: "Seville", cs: "Sevilla", fr: "Séville" },
        { es: "Reus", ca: "Reus", en: "Reus", cs: "Reus", fr: "Reus" },
        { es: "París", ca: "París", en: "Paris", cs: "Paříž", fr: "Paris" }],
      answer: 2,
      explanation: { es: "Nació en Reus en 1852, cerca de Tarragona. De niño ya se pasaba horas mirando plantas, caracoles y montañas.", ca: "Va néixer a Reus el 1852, a prop de Tarragona. De petit ja es passava hores mirant plantes, cargols i muntanyes.", en: "He was born in Reus in 1852, near Tarragona. As a child he already spent hours looking at plants, snails and mountains.", cs: "Narodil se v Reusu roku 1852, nedaleko Tarragony. Už jako kluk trávil hodiny pozorováním rostlin, šneků a hor.", fr: "Il est né à Reus en 1852, près de Tarragone. Enfant, il passait déjà des heures à observer les plantes, les escargots et les montagnes." } },
    { emoji: "🪨",
      q: { es: "La Pedrera es un mote. ¿Cuál es el nombre de verdad del edificio?", ca: "La Pedrera és un malnom. Quin és el nom de veritat de l'edifici?", en: "La Pedrera is a nickname. What is the building's real name?", cs: "La Pedrera je jen přezdívka. Jak se ta budova jmenuje doopravdy?", fr: "La Pedrera est un surnom. Quel est le vrai nom du bâtiment ?" },
      options: [
        { es: "Casa Milà", ca: "Casa Milà", en: "Casa Milà", cs: "Casa Milà", fr: "La Casa Milà" },
        { es: "Casa de las Nubes", ca: "Casa dels Núvols", en: "House of Clouds", cs: "Dům mraků", fr: "La Maison des Nuages" },
        { es: "Casa del León", ca: "Casa del Lleó", en: "Lion House", cs: "Lví dům", fr: "La Maison du Lion" },
        { es: "Casa Redonda", ca: "Casa Rodona", en: "Round House", cs: "Kulatý dům", fr: "La Maison Ronde" }],
      answer: 0,
      explanation: { es: "Se llama Casa Milà, por la familia que la encargó. Como parece una cantera de piedra ondulada, la gente la bautizó La Pedrera.", ca: "Es diu Casa Milà, per la família que la va encarregar. Com que sembla una pedrera de pedra ondulada, la gent la va batejar La Pedrera.", en: "Its name is Casa Milà, after the family who ordered it. Because it looks like a wavy stone quarry, people nicknamed it La Pedrera.", cs: "Jmenuje se Casa Milà podle rodiny, která si ji objednala. Protože vypadá jako zvlněný kamenolom, lidé jí začali říkat La Pedrera.", fr: "Elle s'appelle Casa Milà, du nom de la famille qui l'a commandée. Comme elle ressemble à une carrière de pierre ondulée, les gens l'ont surnommée La Pedrera." } },
    { emoji: "🗺️",
      q: { es: "¿Cuál de estas obras de Gaudí NO está en Barcelona?", ca: "Quina d'aquestes obres de Gaudí NO és a Barcelona?", en: "Which of these works by Gaudí is NOT in Barcelona?", cs: "Která z těchto Gaudího staveb NENÍ v Barceloně?", fr: "Laquelle de ces œuvres de Gaudí n'est PAS à Barcelone ?" },
      options: [
        { es: "El Palau Güell", ca: "El Palau Güell", en: "Palau Güell", cs: "Palau Güell", fr: "Le Palau Güell" },
        { es: "La Casa Batlló", ca: "La Casa Batlló", en: "Casa Batlló", cs: "Casa Batlló", fr: "La Casa Batlló" },
        { es: "La Pedrera", ca: "La Pedrera", en: "La Pedrera", cs: "La Pedrera", fr: "La Pedrera" },
        { es: "El Capricho", ca: "El Capricho", en: "El Capricho", cs: "El Capricho", fr: "El Capricho" }],
      answer: 3,
      explanation: { es: "El Capricho está en Comillas, un pueblo de Cantabria junto al mar. Es una casa de cuento decorada con azulejos de girasoles.", ca: "El Capricho és a Comillas, un poble de Cantàbria vora el mar. És una casa de conte decorada amb rajoles de gira-sols.", en: "El Capricho is in Comillas, a seaside village in Cantabria. It is a storybook house decorated with sunflower tiles.", cs: "El Capricho stojí v Comillas, přímořské vesničce v Kantábrii. Je to dům jako z pohádky, zdobený kachličkami se slunečnicemi.", fr: "El Capricho se trouve à Comillas, un village de Cantabrie au bord de la mer. C'est une maison de conte décorée de carreaux aux tournesols." } },
    { emoji: "🔨",
      q: { es: "¿Qué hacía el padre de Gaudí en su taller?", ca: "Què feia el pare de Gaudí al seu taller?", en: "What did Gaudí's father make in his workshop?", cs: "Co vyráběl Gaudího tatínek ve své dílně?", fr: "Que fabriquait le père de Gaudí dans son atelier ?" },
      options: [
        { es: "Zapatos", ca: "Sabates", en: "Shoes", cs: "Boty", fr: "Des chaussures" },
        { es: "Ollas y calderos de cobre", ca: "Olles i calders de coure", en: "Copper pots and cauldrons", cs: "Měděné hrnce a kotle", fr: "Des marmites et des chaudrons en cuivre" },
        { es: "Pan", ca: "Pa", en: "Bread", cs: "Chleba", fr: "Du pain" },
        { es: "Relojes", ca: "Rellotges", en: "Clocks", cs: "Hodiny", fr: "Des horloges" }],
      answer: 1,
      explanation: { es: "Era calderero: golpeaba láminas planas de cobre hasta hacerlas redondas. Gaudí decía que allí aprendió a ver las formas en el espacio.", ca: "Era calderer: picava làmines planes de coure fins a fer-les rodones. Gaudí deia que allà va aprendre a veure les formes a l'espai.", en: "He was a coppersmith: he hammered flat sheets of copper until they became round. Gaudí said that is where he learned to see shapes in space.", cs: "Byl kotlář: tloukl do plochých měděných plátů, dokud nebyly kulaté. Gaudí říkal, že právě tam se naučil vidět tvary v prostoru.", fr: "Il était chaudronnier : il martelait des plaques de cuivre plates jusqu'à les rendre rondes. Gaudí disait que c'est là qu'il a appris à voir les formes dans l'espace." } },
    { emoji: "🌃",
      q: { es: "¿Qué brilla de noche en lo alto de una torre de la Sagrada Família?", ca: "Què brilla de nit al capdamunt d'una torre de la Sagrada Família?", en: "What shines at night at the top of one of the Sagrada Família towers?", cs: "Co v noci září na vrcholu jedné z věží Sagrady Famílie?", fr: "Que voit-on briller la nuit au sommet d'une tour de la Sagrada Família ?" },
      options: [
        { es: "Una campana", ca: "Una campana", en: "A bell", cs: "Zvon", fr: "Une cloche" },
        { es: "Un faro", ca: "Un far", en: "A lighthouse", cs: "Maják", fr: "Un phare" },
        { es: "Una estrella gigante", ca: "Una estrella gegant", en: "A giant star", cs: "Obří hvězda", fr: "Une étoile géante" },
        { es: "Un semáforo", ca: "Un semàfor", en: "A traffic light", cs: "Semafor", fr: "Un feu de circulation" }],
      answer: 2,
      explanation: { es: "La torre de la Virgen María termina en una estrella de doce puntas que se encendió por primera vez en 2021. ¡Se ve desde media Barcelona!", ca: "La torre de la Mare de Déu acaba en una estrella de dotze puntes que es va encendre per primera vegada el 2021. Es veu des de mitja Barcelona!", en: "The tower of the Virgin Mary ends in a twelve-pointed star that was lit for the first time in 2021. You can see it from half of Barcelona!", cs: "Věž Panny Marie končí dvanácticípou hvězdou, která se poprvé rozsvítila v roce 2021. Je vidět přes půlku Barcelony!", fr: "La tour de la Vierge Marie se termine par une étoile à douze branches, allumée pour la première fois en 2021. On la voit depuis la moitié de Barcelone !" } }
  ],

  /* ---------- ALFABETO: 26 letras ---------- */
  alphabet: [
    { letter: "A", emoji: "📐", item: { es: "Arquitecto", ca: "Arquitecte", en: "Architect", cs: "Architekt", fr: "Architecte" },
      fact: { es: "Gaudí era arquitecto: dibujaba y dirigía casas, parques y templos.", ca: "Gaudí era arquitecte: dibuixava i dirigia cases, parcs i temples.", en: "Gaudí was an architect: he designed and directed houses, parks and temples.", cs: "Gaudí byl architekt: navrhoval a řídil stavbu domů, parků i chrámů.", fr: "Gaudí était architecte : il dessinait et dirigeait des maisons, des parcs et des temples." } },
    { letter: "B", emoji: "🏙️", item: { es: "Barcelona", ca: "Barcelona", en: "Barcelona", cs: "Barcelona", fr: "Barcelone" },
      fact: { es: "La ciudad de Gaudí. Casi todas sus obras están allí, junto al mar.", ca: "La ciutat de Gaudí. Gairebé totes les seves obres hi són, a tocar del mar.", en: "Gaudí's city. Almost all his works are there, next to the sea.", cs: "Gaudího město. Skoro všechny jeho stavby jsou tam, hned u moře.", fr: "La ville de Gaudí. Presque toutes ses œuvres y sont, au bord de la mer." } },
    { letter: "C", emoji: "🏛️", item: { es: "Columna", ca: "Columna", en: "Column", cs: "Cihla", fr: "Colonne" },
      fact: { es: "En la Sagrada Família las columnas se abren como ramas de árbol.", ca: "A la Sagrada Família les columnes s'obren com branques d'arbre.", en: "In the Sagrada Família the columns open up like tree branches.", cs: "Gaudí uměl kouzlit i s obyčejnými cihlami: stavěl z nich vlnité zdi a oblouky.", fr: "Dans la Sagrada Família, les colonnes s'ouvrent comme des branches d'arbre." } },
    { letter: "D", emoji: "🐉", item: { es: "Dragón", ca: "Drac", en: "Dragon", cs: "Drak", fr: "Dragon" },
      fact: { es: "El tejado de la Casa Batlló parece el lomo de un dragón de escamas.", ca: "La teulada de la Casa Batlló sembla el llom d'un drac d'escates.", en: "The roof of Casa Batlló looks like the scaly back of a dragon.", cs: "Střecha domu Casa Batlló vypadá jako šupinatý hřbet draka.", fr: "Le toit de la Casa Batlló ressemble au dos écailleux d'un dragon." } },
    { letter: "E", emoji: "🤝", item: { es: "Eusebi Güell", ca: "Eusebi Güell", en: "Eusebi Güell", cs: "Eusebi Güell", fr: "Eusebi Güell" },
      fact: { es: "El amigo mecenas de Gaudí. Por eso muchas obras se llaman Güell.", ca: "L'amic mecenes de Gaudí. Per això moltes obres es diuen Güell.", en: "Gaudí's patron friend. That is why many works are called Güell.", cs: "Gaudího přítel a mecenáš. Proto se mnoho staveb jmenuje Güell.", fr: "L'ami mécène de Gaudí. C'est pour ça que beaucoup d'œuvres s'appellent Güell." } },
    { letter: "F", emoji: "⛲", item: { es: "Farola", ca: "Fanal", en: "Fountain", cs: "Fontána", fr: "Fontaine" },
      fact: { es: "Las primeras farolas de Gaudí todavía alumbran la plaza Reial.", ca: "Els primers fanals de Gaudí encara il·luminen la plaça Reial.", en: "The Park Güell salamander is really a fountain: water pours from its mouth.", cs: "Salamandr v parku Güell je vlastně fontána: z pusy mu teče voda.", fr: "La salamandre du Park Güell est en vrai une fontaine : l'eau sort par sa bouche." } },
    { letter: "G", emoji: "🧔", item: { es: "Gaudí", ca: "Gaudí", en: "Gaudí", cs: "Gaudí", fr: "Gaudí" },
      fact: { es: "Antoni Gaudí nació en 1852 y se convirtió en el arquitecto más famoso de Barcelona.", ca: "Antoni Gaudí va néixer el 1852 i es va convertir en l'arquitecte més famós de Barcelona.", en: "Antoni Gaudí was born in 1852 and became Barcelona's most famous architect.", cs: "Antoni Gaudí se narodil roku 1852 a stal se nejslavnějším architektem Barcelony.", fr: "Antoni Gaudí est né en 1852 et il est devenu l'architecte le plus célèbre de Barcelone." } },
    { letter: "H", emoji: "🏦", item: { es: "Hipóstila (sala)", ca: "Hipòstila (sala)", en: "Hypostyle Hall", cs: "Hypostyl (sál)", fr: "Hypostyle (salle)" },
      fact: { es: "Una sala del Park Güell con 86 columnas. Iba a ser el mercado del barrio.", ca: "Una sala del Park Güell amb 86 columnes. Havia de ser el mercat del barri.", en: "A hall in Park Güell with 86 columns. It was going to be the neighbourhood market.", cs: "Sál v parku Güell s 86 sloupy. Měl to být trh pro celou čtvrť.", fr: "Une salle du Park Güell avec 86 colonnes. Elle devait être le marché du quartier." } },
    { letter: "I", emoji: "✨", item: { es: "Imaginación", ca: "Imaginació", en: "Imagination", cs: "Inspirace", fr: "Imagination" },
      fact: { es: "Gaudí imaginaba casas que nadie había soñado: con olas, escamas y colores.", ca: "Gaudí imaginava cases que ningú no havia somiat: amb onades, escates i colors.", en: "Gaudí imagined houses nobody had dreamed of: with waves, scales and colours.", cs: "Gaudí bral inspiraci z přírody: z vln, šupin a barev vymýšlel domy, jaké nikdo neznal.", fr: "Gaudí imaginait des maisons que personne n'avait rêvées : avec des vagues, des écailles et des couleurs." } },
    { letter: "J", emoji: "🎨", item: { es: "Jujol", ca: "Jujol", en: "Jujol", cs: "Jujol", fr: "Jujol" },
      fact: { es: "Josep Maria Jujol era el ayudante mago del color: suyo es el trencadís del banco ondulado.", ca: "Josep Maria Jujol era l'ajudant mag del color: seu és el trencadís del banc ondulat.", en: "Josep Maria Jujol was the wizard helper of colour: the wavy bench's trencadís is his.", cs: "Josep Maria Jujol byl kouzelník barev: mozaika na vlnité lavičce je jeho dílo.", fr: "Josep Maria Jujol était l'assistant magicien de la couleur : le trencadís du banc ondulé est de lui." } },
    { letter: "K", emoji: "🧩", item: { es: "Kilos de mosaico", ca: "Kilos de trencadís", en: "Kaleidoscope", cs: "Keramika", fr: "Kaléidoscope" },
      fact: { es: "Para el trencadís se usaron kilos y kilos de azulejos rotos de mil colores.", ca: "Per al trencadís es van fer servir kilos i kilos de rajoles trencades de mil colors.", en: "The mosaics sparkle with a thousand colours, like looking through a kaleidoscope.", cs: "Na mozaiky se spotřebovaly kila a kila keramických střepů tisíce barev.", fr: "Les mosaïques brillent de mille couleurs, comme dans un kaléidoscope." } },
    { letter: "L", emoji: "🦎", item: { es: "Lagarto", ca: "Llangardaix", en: "Lizard", cs: "Lucerna", fr: "Lézard" },
      fact: { es: "Al lagarto de trencadís del Park Güell muchos lo llaman el dragón del parque.", ca: "Al llangardaix de trencadís del Park Güell molts li diuen el drac del parc.", en: "Many people call the trencadís lizard of Park Güell the park's dragon.", cs: "Gaudího lucerny dodnes svítí na náměstí Plaça Reial v Barceloně.", fr: "Beaucoup appellent le lézard en trencadís du Park Güell le dragon du parc." } },
    { letter: "M", emoji: "🌸", item: { es: "Modernismo", ca: "Modernisme", en: "Modernisme", cs: "Modernismus", fr: "Modernisme" },
      fact: { es: "El estilo de la época de Gaudí: flores, olas y colores por todas partes.", ca: "L'estil de l'època de Gaudí: flors, onades i colors pertot arreu.", en: "The style of Gaudí's time: flowers, waves and colours everywhere.", cs: "Styl Gaudího doby: květiny, vlny a barvy úplně všude.", fr: "Le style de l'époque de Gaudí : des fleurs, des vagues et des couleurs partout." } },
    { letter: "N", emoji: "🌿", item: { es: "Naturaleza", ca: "Natura", en: "Nature", cs: "Návrh", fr: "Nature" },
      fact: { es: "Gaudí estudiaba las plantas y los animales para copiar sus trucos.", ca: "Gaudí estudiava les plantes i els animals per copiar-ne els trucs.", en: "Gaudí studied plants and animals to copy their tricks.", cs: "Gaudí raději stavěl modely svých návrhů, než aby jen kreslil plány.", fr: "Gaudí étudiait les plantes et les animaux pour copier leurs astuces." } },
    { letter: "O", emoji: "🌱", item: { es: "Origen", ca: "Origen", en: "Origin", cs: "Originalita", fr: "Origine" },
      fact: { es: "Su frase favorita: la originalidad es volver al origen, o sea, a la naturaleza.", ca: "La seva frase preferida: l'originalitat és tornar a l'origen, és a dir, a la natura.", en: "His favourite saying: originality is returning to the origin, that is, to nature.", cs: "Jeho oblíbená věta: originalita znamená vrátit se k počátku, tedy k přírodě.", fr: "Sa phrase préférée : l'originalité, c'est revenir à l'origine, c'est-à-dire à la nature." } },
    { letter: "P", emoji: "🌳", item: { es: "Park Güell", ca: "Park Güell", en: "Park Güell", cs: "Park Güell", fr: "Park Güell" },
      fact: { es: "Un parque como de cuento, con banco ondulado y salamandra de colores.", ca: "Un parc com de conte, amb banc ondulat i salamandra de colors.", en: "A fairy-tale park, with a wavy bench and a colourful salamander.", cs: "Park jako z pohádky, s vlnitou lavičkou a barevným salamandrem.", fr: "Un parc de conte de fées, avec un banc ondulé et une salamandre colorée." } },
    { letter: "Q", emoji: "👼", item: { es: "Querubines", ca: "Querubins", en: "Quarry", cs: "Kamenolom (Q)", fr: "Quartier" },
      fact: { es: "En la fachada del Nacimiento hay angelitos de piedra tocando trompetas.", ca: "A la façana del Naixement hi ha angelets de pedra tocant trompetes.", en: "La Pedrera means the quarry: the house looks like a wavy rock.", cs: "La Pedrera znamená kamenolom: dům vypadá jako zvlněná skála.", fr: "La Casa Batlló et La Pedrera sont dans le quartier de l'Eixample, à Barcelone." } },
    { letter: "R", emoji: "🧱", item: { es: "Rompecabezas", ca: "Rajola", en: "Rooftop", cs: "Rozeta", fr: "Rêve" },
      fact: { es: "El trencadís se monta como un rompecabezas de trocitos de colores.", ca: "La Casa Vicens és plena de rajoles amb flors pintades.", en: "Gaudí's rooftops are full of surprises: warriors, scales and crosses.", cs: "Barevná kulatá okna Sagrady Famílie se jmenují rozety.", fr: "Les maisons de Gaudí semblent sorties d'un rêve, avec des vagues et des couleurs." } },
    { letter: "S", emoji: "🏰", item: { es: "Sagrada Família", ca: "Sagrada Família", en: "Sagrada Família", cs: "Sagrada Família", fr: "Sagrada Família" },
      fact: { es: "Se empezó en 1882 y aún se construye. Cuando esté acabada tendrá 18 torres.", ca: "Es va començar el 1882 i encara es construeix. Quan estigui acabada tindrà 18 torres.", en: "It was started in 1882 and is still being built. When finished it will have 18 towers.", cs: "Začala se stavět roku 1882 a staví se dodnes. Až bude hotová, bude mít 18 věží.", fr: "Commencée en 1882, elle est encore en construction. Une fois finie, elle aura 18 tours." } },
    { letter: "T", emoji: "🔷", item: { es: "Trencadís", ca: "Trencadís", en: "Trencadís", cs: "Trencadís", fr: "Trencadís" },
      fact: { es: "Mosaico hecho con trocitos de cerámica rota. ¡Lo roto también puede brillar!", ca: "Mosaic fet amb trossets de ceràmica trencada. El que es trenca també pot brillar!", en: "A mosaic made of little broken tile pieces. Broken things can shine too!", cs: "Mozaika z kousků rozbité keramiky. I rozbité věci umí zářit!", fr: "Une mosaïque faite de petits morceaux de céramique cassée. Ce qui est cassé peut briller aussi !" } },
    { letter: "U", emoji: "🌍", item: { es: "UNESCO", ca: "UNESCO", en: "UNESCO", cs: "UNESCO", fr: "UNESCO" },
      fact: { es: "Siete obras de Gaudí son Patrimonio de la Humanidad: tesoros del mundo entero.", ca: "Set obres de Gaudí són Patrimoni de la Humanitat: tresors de tot el món.", en: "Seven of Gaudí's works are World Heritage: treasures for the whole world.", cs: "Sedm Gaudího staveb patří ke světovému dědictví UNESCO: jsou to poklady celého světa.", fr: "Sept œuvres de Gaudí sont au patrimoine mondial : des trésors pour le monde entier." } },
    { letter: "V", emoji: "🌼", item: { es: "Vicens (Casa)", ca: "Vicens (Casa)", en: "Vicens (Casa)", cs: "Vicens (Casa)", fr: "Vicens (Casa)" },
      fact: { es: "La primera gran casa de Gaudí, cubierta de azulejos con flores.", ca: "La primera gran casa de Gaudí, coberta de rajoles amb flors.", en: "Gaudí's first big house, covered in flower tiles.", cs: "První velký Gaudího dům, pokrytý kachličkami s květinami.", fr: "La première grande maison de Gaudí, couverte de carreaux à fleurs." } },
    { letter: "W", emoji: "🌊", item: { es: "Wow", ca: "Wow", en: "Wave", cs: "Wow", fr: "Waouh" },
      fact: { es: "Es lo que dice todo el mundo al mirar hacia arriba en la Sagrada Família.", ca: "És el que diu tothom en mirar cap amunt a la Sagrada Família.", en: "La Pedrera looks like waves of stone rolling down the street.", cs: "To řekne každý, kdo se v Sagradě Famílii podívá nahoru.", fr: "C'est ce que dit tout le monde en levant les yeux dans la Sagrada Família." } },
    { letter: "X", emoji: "🎓", item: { es: "eXamen final", ca: "Xemeneia", en: "eXtraordinary", cs: "eXperiment", fr: "eXposition" },
      fact: { es: "Al darle el título, el director dijo que se lo daban a un loco o a un genio. ¡Fue un genio!", ca: "Les xemeneies de la Pedrera semblen guerrers amb casc.", en: "People call his buildings extraordinary because almost nothing in them is straight.", cs: "Gaudí pořád experimentoval: zkoušel nové tvary, modely a materiály.", fr: "En 1878, Güell découvre le travail de Gaudí grâce à une vitrine exposée à Paris." } },
    { letter: "Y", emoji: "🌲", item: { es: "Y (columnas en Y)", ca: "Y (columnes en Y)", en: "Y-shaped columns", cs: "Ypsilonové sloupy", fr: "Y (colonnes en Y)" },
      fact: { es: "Las columnas de la Sagrada Família se separan en ramas con forma de Y.", ca: "Les columnes de la Sagrada Família se separen en branques amb forma de Y.", en: "The Sagrada Família columns split into branches shaped like the letter Y.", cs: "Sloupy Sagrady Famílie se větví do tvaru písmene ypsilon.", fr: "Les colonnes de la Sagrada Família se séparent en branches en forme de Y." } },
    { letter: "Z", emoji: "🐢", item: { es: "Zoo de piedra", ca: "Zoo de pedra", en: "Zoo of stone", cs: "Zvířata", fr: "Zoo de pierre" },
      fact: { es: "La fachada del Nacimiento está llena de animales de piedra: tortugas, camaleones y palomas.", ca: "La façana del Naixement és plena d'animals de pedra: tortugues, camaleons i coloms.", en: "The Nativity façade is full of stone animals: tortoises, chameleons and doves.", cs: "Průčelí Narození je plné kamenných zvířat: želv, chameleonů a holubic.", fr: "La façade de la Nativité est pleine d'animaux de pierre : des tortues, des caméléons et des colombes." } }
  ],

  /* ---------- FAMOSOS ---------- */
  famous: [
    { emoji: "🧔", year: "1883", color: "#00897b", name: { es: "Antoni Gaudí", ca: "Antoni Gaudí", en: "Antoni Gaudí", cs: "Antoni Gaudí", fr: "Antoni Gaudí" },
      achievement: { es: "El arquitecto que copiaba las formas de la naturaleza.", ca: "L'arquitecte que copiava les formes de la natura.", en: "The architect who copied the shapes of nature.", cs: "Architekt, který napodoboval tvary přírody.", fr: "L'architecte qui copiait les formes de la nature." },
      quote: { es: "La originalidad es volver al origen: ¡mirad los árboles!", ca: "L'originalitat és tornar a l'origen: mireu els arbres!", en: "Originality is returning to the origin: look at the trees!", cs: "Originalita znamená vrátit se k počátku: dívejte se na stromy!", fr: "L'originalité, c'est revenir à l'origine : regardez les arbres !" } },
    { emoji: "🎩", year: "1878", color: "#6d4c41", name: { es: "Eusebi Güell", ca: "Eusebi Güell", en: "Eusebi Güell", cs: "Eusebi Güell", fr: "Eusebi Güell" },
      achievement: { es: "El amigo mecenas que creía en Gaudí y le encargaba sus sueños.", ca: "L'amic mecenes que creia en Gaudí i li encarregava els seus somnis.", en: "The patron friend who believed in Gaudí and ordered his dreams.", cs: "Přítel a mecenáš, který Gaudímu věřil a objednával si u něj své sny.", fr: "L'ami mécène qui croyait en Gaudí et lui commandait ses rêves." },
      quote: { es: "Tú imagina, amigo Gaudí, que del resto me encargo yo.", ca: "Tu imagina, amic Gaudí, que de la resta me n'encarrego jo.", en: "You do the imagining, my friend Gaudí, and I will take care of the rest.", cs: "Ty vymýšlej, příteli Gaudí, o zbytek se postarám já.", fr: "Toi, imagine, ami Gaudí, moi je m'occupe du reste." } },
    { emoji: "🎨", year: "1914", color: "#f57c00", name: { es: "Josep Maria Jujol", ca: "Josep Maria Jujol", en: "Josep Maria Jujol", cs: "Josep Maria Jujol", fr: "Josep Maria Jujol" },
      achievement: { es: "El mago del trencadís: decoró el banco ondulado del Park Güell.", ca: "El mag del trencadís: va decorar el banc ondulat del Park Güell.", en: "The wizard of trencadís: he decorated the wavy bench of Park Güell.", cs: "Kouzelník trencadísu: vyzdobil vlnitou lavičku v parku Güell.", fr: "Le magicien du trencadís : il a décoré le banc ondulé du Park Güell." },
      quote: { es: "Ningún trocito roto es basura: todos guardan un color.", ca: "Cap trosset trencat no és brossa: tots guarden un color.", en: "No broken piece is rubbish: each one keeps a colour inside.", cs: "Žádný střípek není odpad: v každém se schovává barva.", fr: "Aucun petit morceau cassé n'est un déchet : chacun garde une couleur." } },
    { emoji: "🎻", year: "1908", color: "#c62828", name: { es: "Lluís Domènech i Montaner", ca: "Lluís Domènech i Montaner", en: "Lluís Domènech i Montaner", cs: "Lluís Domènech i Montaner", fr: "Lluís Domènech i Montaner" },
      achievement: { es: "Otro gran modernista: construyó el Palau de la Música, un teatro lleno de flores y luz.", ca: "Un altre gran modernista: va construir el Palau de la Música, un teatre ple de flors i llum.", en: "Another great Modernista: he built the Palau de la Música, a concert hall full of flowers and light.", cs: "Další velký modernista: postavil Palau de la Música, koncertní síň plnou květin a světla.", fr: "Un autre grand moderniste : il a construit le Palau de la Música, une salle pleine de fleurs et de lumière." },
      quote: { es: "Yo construí un palacio para que viva la música.", ca: "Jo vaig construir un palau perquè hi visqui la música.", en: "I built a palace for music to live in.", cs: "Postavil jsem palác, aby v něm bydlela hudba.", fr: "J'ai construit un palais pour que la musique y habite." } },
    { emoji: "🏯", year: "1900", color: "#5e35b1", name: { es: "Josep Puig i Cadafalch", ca: "Josep Puig i Cadafalch", en: "Josep Puig i Cadafalch", cs: "Josep Puig i Cadafalch", fr: "Josep Puig i Cadafalch" },
      achievement: { es: "Otro gran modernista: hizo la Casa Amatller y la Casa de les Punxes, con torres de castillo.", ca: "Un altre gran modernista: va fer la Casa Amatller i la Casa de les Punxes, amb torres de castell.", en: "Another great Modernista: he made Casa Amatller and Casa de les Punxes, with castle towers.", cs: "Další velký modernista: postavil Casa Amatller a Casa de les Punxes s věžemi jako hrad.", fr: "Un autre grand moderniste : il a fait la Casa Amatller et la Casa de les Punxes, avec des tours de château." },
      quote: { es: "Mi Casa Amatller parece de chocolate... ¡y está al lado de la del dragón!", ca: "La meva Casa Amatller sembla de xocolata... i és al costat de la del drac!", en: "My Casa Amatller looks like chocolate... and it stands right next to the dragon's house!", cs: "Moje Casa Amatller vypadá jako z čokolády... a stojí hned vedle dračího domu!", fr: "Ma Casa Amatller a l'air en chocolat... et elle est juste à côté de la maison du dragon !" } }
  ],

  childDream: {
    girl: { es: "Arquitecta de casas de cuento", ca: "Arquitecta de cases de conte", en: "Architect of fairy-tale houses", cs: "Architektka pohádkových domů", fr: "Architecte de maisons de conte" },
    boy: { es: "Arquitecto de casas de cuento", ca: "Arquitecte de cases de conte", en: "Architect of fairy-tale houses", cs: "Architekt pohádkových domů", fr: "Architecte de maisons de conte" },
    kid: { es: "Peque arquitecto de casas de cuento", ca: "Arquitecte de cases de conte", en: "Architect of fairy-tale houses", cs: "Architekt pohádkových domů", fr: "Architecte de maisons de conte" }
  },
  childQuote: { es: "Cuando sea mayor construiré una casa con tejado de dragón. ¡Y ni una pared recta!", ca: "Quan sigui gran construiré una casa amb teulada de drac. I ni una paret recta!", en: "When I grow up I will build a house with a dragon roof. And not one straight wall!", cs: "Až vyrostu, postavím dům se střechou jako drak. A ani jedna zeď nebude rovná!", fr: "Quand je serai grand, je construirai une maison avec un toit de dragon. Et pas un seul mur droit !" },

  /* ---------- MATES ---------- */
  mathEmojis: ["🦎", "🏠", "➕", "🌸", "🔷", "🌈"],

  /* ---------- CONSTRUCTOR: la casa modernista ---------- */
  builder: {
    title: { es: "¡Construye tu casa modernista!", ca: "Construeix la teva casa modernista!", en: "Build your Modernista house!", cs: "Postav si svůj modernistický dům!", fr: "Construis ta maison moderniste !" },
    thing: { es: "casa", ca: "casa", en: "house", cs: "dům", fr: "maison" },
    parts: [
      { id: "tejado", label: { es: "El tejado", ca: "La teulada", en: "The roof", cs: "Střecha", fr: "Le toit" },
        options: [{ id: "dragon", v: "dragon", icon: "🐉" }, { id: "ondas", v: "ondas", icon: "🌊" }, { id: "torre", v: "torre", icon: "🗼" }] },
      { id: "color", label: { es: "Color del trencadís", ca: "Color del trencadís", en: "Trencadís colour", cs: "Barva mozaiky", fr: "Couleur du trencadís" },
        options: [{ id: "rojo", v: "#ef5350" }, { id: "turquesa", v: "#26c6da" }, { id: "amarillo", v: "#ffca28" }, { id: "lila", v: "#ab47bc" }] },
      { id: "balcones", label: { es: "Los balcones", ca: "Els balcons", en: "The balconies", cs: "Balkony", fr: "Les balcons" },
        options: [{ id: "antifaz", v: "antifaz", icon: "🎭" }, { id: "hueso", v: "hueso", icon: "🦴" }, { id: "flor", v: "flor", icon: "🌸" }] },
      { id: "remate", label: { es: "El remate", ca: "El coronament", en: "The topper", cs: "Ozdoba nahoře", fr: "Le sommet" },
        options: [{ id: "cruz", v: "cruz", icon: "➕" }, { id: "salamandra", v: "salamandra", icon: "🦎" }, { id: "chimenea", v: "chimenea", icon: "♜" }] }
    ],
    svg(sel) {
      const c = sel.color || "#26c6da";
      // trocitos de trencadís repartidos por la fachada
      const bits = [[34, 62, -12], [46, 60, 20], [60, 63, -25], [74, 61, 10], [84, 63, -8],
        [33, 126, 14], [45, 128, -18], [60, 127, 8], [75, 128, -14], [85, 126, 18]]
        .map(b => `<rect x="${b[0]}" y="${b[1]}" width="6" height="5" rx="1" fill="${c}" transform="rotate(${b[2]} ${b[0] + 3} ${b[1] + 2})" opacity=".9"/>`).join("");
      // tejado según la elección
      let tejado = "";
      if (sel.tejado === "ondas") {
        tejado = `<path d="M24 56 Q32 40 42 46 Q52 52 58 40 Q66 28 76 40 Q84 50 96 56 Z" fill="#e0cfa5" stroke="#fff" stroke-width="1.5"/>
          <path d="M30 52 Q44 42 58 48 Q74 54 90 50" fill="none" stroke="rgba(255,255,255,.6)" stroke-width="2"/>
          <path d="M34 56 Q48 48 62 52 Q76 56 88 54" fill="none" stroke="rgba(140,110,70,.45)" stroke-width="2"/>`;
      } else if (sel.tejado === "torre") {
        tejado = `<path d="M28 56 L60 32 L92 56 Z" fill="#e0cfa5" stroke="#fff" stroke-width="1.5"/>
          <rect x="84" y="26" width="16" height="30" rx="4" fill="#f2e3c4" stroke="#fff" stroke-width="1.2"/>
          <path d="M82 28 L92 8 L102 28 Z" fill="${c}" stroke="#fff" stroke-width="1.2"/>
          <circle cx="88" cy="20" r="1.6" fill="#fff" opacity=".85"/><circle cx="94" cy="16" r="1.4" fill="#fff" opacity=".7"/>
          <circle cx="92" cy="38" r="3.4" fill="#9fd8ef" stroke="#fff" stroke-width="1.2"/>`;
      } else {
        // lomo de dragón con escamas, como la Casa Batlló
        tejado = `<defs><linearGradient id="gaEsc" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#66bb6a"/><stop offset="100%" stop-color="#00695c"/></linearGradient></defs>
          <path d="M24 56 Q36 26 60 24 Q84 26 96 56 Z" fill="url(#gaEsc)" stroke="#fff" stroke-width="1.5"/>
          <path d="M36 30 L40 22 L46 28 M52 25 L58 16 L64 25 M70 27 L76 20 L81 29" fill="${c}" stroke="#fff" stroke-width="1"/>
          <path d="M32 48 Q38 42 44 48 M44 44 Q50 38 56 44 M58 42 Q64 36 70 42 M70 45 Q76 39 82 45 M40 54 Q46 48 52 54 M56 52 Q62 46 68 52 M70 54 Q76 48 82 54" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="2"/>`;
      }
      // balcones según la elección (dos ventanas con balcón)
      const win = (x) => `<rect x="${x}" y="76" width="18" height="20" rx="8" fill="#9fd8ef" stroke="#fff" stroke-width="1.4"/>`;
      let balcon = "";
      if (sel.balcones === "hueso") {
        balcon = [38, 66].map(x => `${win(x)}
          <path d="M${x - 2} 96 Q${x - 5} 90 ${x - 2} 84 M${x - 2} 96 Q${x + 1} 90 ${x - 2} 84" stroke="#f2e3c4" stroke-width="3" fill="none" stroke-linecap="round"/>
          <path d="M${x + 20} 96 Q${x + 17} 90 ${x + 20} 84 M${x + 20} 96 Q${x + 23} 90 ${x + 20} 84" stroke="#f2e3c4" stroke-width="3" fill="none" stroke-linecap="round"/>
          <rect x="${x - 4}" y="94" width="26" height="4" rx="2" fill="#e0cfa5"/>`).join("");
      } else if (sel.balcones === "flor") {
        balcon = [38, 66].map(x => `${win(x)}
          ${[0, 60, 120, 180, 240, 300].map(a => `<ellipse cx="${x + 9}" cy="86" rx="4" ry="9" fill="${c}" opacity=".45" transform="rotate(${a} ${x + 9} 86)"/>`).join("")}
          <rect x="${x - 3}" y="94" width="24" height="4" rx="2" fill="#e0cfa5"/>`).join("");
      } else {
        // antifaz, como los balcones de la Casa Batlló
        balcon = [38, 66].map(x => `${win(x)}
          <path d="M${x - 3} 92 Q${x + 9} 84 ${x + 21} 92 Q${x + 21} 100 ${x + 9} 100 Q${x - 3} 100 ${x - 3} 92 Z" fill="#f2e3c4" stroke="#fff" stroke-width="1.2"/>
          <ellipse cx="${x + 4}" cy="93" rx="2.6" ry="2" fill="#7a5230"/><ellipse cx="${x + 14}" cy="93" rx="2.6" ry="2" fill="#7a5230"/>`).join("");
      }
      // remate en lo alto
      let remate = "";
      if (sel.remate === "salamandra") {
        remate = `<g transform="translate(60 14)">
          <path d="M-14 4 Q-6 -4 4 0 Q12 3 16 0 Q14 6 6 6 Q-2 8 -8 6 Q-16 10 -18 6 Q-16 4 -14 4 Z" fill="${c}" stroke="#fff" stroke-width="1"/>
          <circle cx="12" cy="1" r="1.2" fill="#263238"/>
          <circle cx="-2" cy="3" r="1.4" fill="#fff" opacity=".8"/><circle cx="4" cy="2" r="1.2" fill="#fff" opacity=".8"/>
        </g><rect x="58" y="18" width="4" height="8" fill="#e0cfa5"/>`;
      } else if (sel.remate === "chimenea") {
        remate = `<rect x="54" y="12" width="12" height="14" rx="4" fill="#e0cfa5" stroke="#fff" stroke-width="1.2"/>
          <path d="M52 12 Q60 0 68 12 Z" fill="#c9b585" stroke="#fff" stroke-width="1.2"/>
          <path d="M56 15 L64 15" stroke="#7a5230" stroke-width="2" stroke-linecap="round"/>`;
      } else {
        // la cruz de cuatro brazos de Gaudí
        remate = `<g stroke="${c}" stroke-width="3" stroke-linecap="round" fill="none">
          <line x1="60" y1="2" x2="60" y2="22"/>
          <line x1="52" y1="10" x2="68" y2="10"/>
          <line x1="55" y1="6" x2="65" y2="14"/>
          <line x1="65" y1="6" x2="55" y2="14"/>
        </g><circle cx="60" cy="10" r="2.4" fill="#fff"/><rect x="58" y="22" width="4" height="6" fill="#e0cfa5"/>`;
      }
      return `<svg viewBox="0 0 120 150" width="176" height="220">
        ${remate}
        ${tejado}
        <rect x="28" y="56" width="64" height="78" rx="7" fill="#f7ead2" stroke="#fff" stroke-width="1.5"/>
        ${bits}
        ${balcon}
        <path d="M50 134 L50 112 Q60 96 70 112 L70 134 Z" fill="#7a5230" stroke="#fff" stroke-width="1.4"/>
        <circle cx="66" cy="122" r="1.8" fill="#ffd54f"/>
        <rect x="20" y="134" width="80" height="8" rx="4" fill="#c9b585"/>
        <path d="M24 142 Q60 148 96 142" stroke="#a8926b" stroke-width="3" fill="none" stroke-linecap="round"/>
      </svg>`;
    }
  }
};
