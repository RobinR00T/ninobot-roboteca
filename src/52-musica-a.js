"use strict";
/* ============================================================
   Contenido de MÚSICA (parte A): quiz, alfabeto, famosos,
   mates y constructor (tu guitarra).
   ============================================================ */

THEMES.musica.ready = true;
THEMES.musica.content = {

  statusPlace: { es: "Conectado desde el Gran Auditorio Arcoíris", ca: "Connectat des del Gran Auditori Arc de Sant Martí", en: "Connected from the Rainbow Concert Hall", cs: "Připojeno z Duhové koncertní síně", fr: "Connecté depuis le Grand Auditorium Arc-en-ciel" },
  welcome: { es: "¡Chsss, {name}, que se apagan las luces! La orquesta afina, la batuta se levanta... ¡y la música empieza contigo!", ca: "Xxxt, {name}, que s'apaguen els llums! L'orquestra afina, la batuta s'aixeca... i la música comença amb tu!", en: "Shhh, {name}, the lights are going down! The orchestra is tuning, the baton is rising... and the music starts with you!", cs: "Pšš, {name}, zhasínají světla! Orchestr ladí, taktovka se zvedá... a hudba začíná s tebou!", fr: "Chut, {name}, les lumières s'éteignent ! L'orchestre s'accorde, la baguette se lève... et la musique commence avec toi !" },

  /* ---------- QUIZ ---------- */
  quiz: [
    { emoji: "🎻",
      q: { es: "¿Cuántas cuerdas tiene un violín?", ca: "Quantes cordes té un violí?", en: "How many strings does a violin have?", cs: "Kolik strun má housle?", fr: "Combien de cordes a un violon ?" },
      options: [
        { es: "4", ca: "4", en: "4", cs: "4", fr: "4" },
        { es: "10", ca: "10", en: "10", cs: "10", fr: "10" },
        { es: "100", ca: "100", en: "100", cs: "100", fr: "100" },
        { es: "1", ca: "1", en: "1", cs: "1", fr: "1" }],
      answer: 0,
      explanation: { es: "Cuatro cuerdas y un arco. El arco las acaricia y las hace cantar.", ca: "Quatre cordes i un arc. L'arc les acarona i les fa cantar.", en: "Four strings and a bow. The bow strokes them and makes them sing.", cs: "Čtyři struny a smyčec. Smyčec je hladí a rozezpívá je.", fr: "Quatre cordes et un archet. L'archet les caresse et les fait chanter." } },
    { emoji: "🥁",
      q: { es: "¿A qué familia pertenece el tambor?", ca: "A quina família pertany el tambor?", en: "Which family does the drum belong to?", cs: "Do jaké rodiny patří buben?", fr: "À quelle famille appartient le tambour ?" },
      options: [
        { es: "Cuerda", ca: "Corda", en: "Strings", cs: "Strunné", fr: "Cordes" },
        { es: "Viento", ca: "Vent", en: "Wind", cs: "Dechové", fr: "Vents" },
        { es: "Percusión", ca: "Percussió", en: "Percussion", cs: "Bicí", fr: "Percussions" },
        { es: "Familia numerosa", ca: "Família nombrosa", en: "A big family", cs: "Početná rodina", fr: "Famille nombreuse" }],
      answer: 2,
      explanation: { es: "Percusión: los instrumentos que suenan al golpearlos. ¡Tu mesa también puede serlo, pero pregunta antes!", ca: "Percussió: els instruments que sonen en colpejar-los. La teva taula també pot ser-ho, però pregunta abans!", en: "Percussion: instruments that sound when you hit them. Your table can be one too, but ask first!", cs: "Bicí: nástroje, které zní, když do nich bouchneš. Tvůj stůl může být taky, ale nejdřív se zeptej!", fr: "Percussions : les instruments qui sonnent quand on les frappe. Ta table peut en être une aussi, mais demande d'abord !" } },
    { emoji: "🎹",
      q: { es: "¿Cuántas teclas tiene un piano grande?", ca: "Quantes tecles té un piano gran?", en: "How many keys does a grand piano have?", cs: "Kolik kláves má velký klavír?", fr: "Combien de touches a un grand piano ?" },
      options: [
        { es: "10", ca: "10", en: "10", cs: "10", fr: "10" },
        { es: "88", ca: "88", en: "88", cs: "88", fr: "88" },
        { es: "1000", ca: "1000", en: "1000", cs: "1000", fr: "1000" },
        { es: "3", ca: "3", en: "3", cs: "3", fr: "3" }],
      answer: 1,
      explanation: { es: "88 teclas: 52 blancas y 36 negras. ¡Y dentro esconde cuerdas, como un arpa tumbada!", ca: "88 tecles: 52 blanques i 36 negres. I a dins amaga cordes, com una arpa estirada!", en: "88 keys: 52 white and 36 black. And inside it hides strings, like a lying-down harp!", cs: "88 kláves: 52 bílých a 36 černých. A uvnitř schovává struny, jako ležící harfa!", fr: "88 touches : 52 blanches et 36 noires. Et dedans, il cache des cordes, comme une harpe couchée !" } },
    { emoji: "🎺",
      q: { es: "¿Cómo suena la trompeta?", ca: "Com sona la trompeta?", en: "How do you play the trumpet?", cs: "Jak se hraje na trubku?", fr: "Comment joue-t-on de la trompette ?" },
      options: [
        { es: "Soplando", ca: "Bufant", en: "By blowing", cs: "Foukáním", fr: "En soufflant" },
        { es: "Frotándola", ca: "Fregant-la", en: "By rubbing it", cs: "Třením", fr: "En la frottant" },
        { es: "Con un mando", ca: "Amb un comandament", en: "With a remote", cs: "Ovladačem", fr: "Avec une télécommande" },
        { es: "Cantándole", ca: "Cantant-li", en: "By singing to it", cs: "Zpíváním", fr: "En lui chantant" }],
      answer: 0,
      explanation: { es: "Soplando con los labios apretados, como una pedorreta educada. ¡Prrr se convierte en música!", ca: "Bufant amb els llavis serrats, com una espetegada educada. Prrr es converteix en música!", en: "By blowing with tight lips, like a polite raspberry. Prrr turns into music!", cs: "Foukáním se sevřenými rty, jako slušné prskání. Prrr se promění v hudbu!", fr: "En soufflant avec les lèvres serrées, comme un prout poli. Prrr devient de la musique !" } },
    { emoji: "🪄",
      q: { es: "¿Quién dirige la orquesta?", ca: "Qui dirigeix l'orquestra?", en: "Who leads the orchestra?", cs: "Kdo řídí orchestr?", fr: "Qui dirige l'orchestre ?" },
      options: [
        { es: "El que llega primero", ca: "El que arriba primer", en: "Whoever arrives first", cs: "Kdo přijde první", fr: "Celui qui arrive en premier" },
        { es: "La directora o el director, con su batuta", ca: "La directora o el director, amb la seva batuta", en: "The conductor, with the baton", cs: "Dirigentka nebo dirigent s taktovkou", fr: "La cheffe ou le chef d'orchestre, avec sa baguette" },
        { es: "Un robot", ca: "Un robot", en: "A robot", cs: "Robot", fr: "Un robot" },
        { es: "Nadie", ca: "Ningú", en: "Nobody", cs: "Nikdo", fr: "Personne" }],
      answer: 1,
      explanation: { es: "Con la batuta marca el ritmo y con las manos pide fuerte o suave. ¡Es quien pone de acuerdo a cien músicos!", ca: "Amb la batuta marca el ritme i amb les mans demana fort o fluix. És qui posa d'acord cent músics!", en: "The baton marks the beat and the hands ask for loud or soft. One person getting a hundred musicians to agree!", cs: "Taktovkou udává rytmus a rukama říká nahlas nebo potichu. Dokáže sladit sto muzikantů!", fr: "Avec la baguette, on marque le rythme et avec les mains, on demande fort ou doux. C'est la personne qui met d'accord cent musiciens !" } },
    { emoji: "🎵",
      q: { es: "¿Cuántas notas musicales hay?", ca: "Quantes notes musicals hi ha?", en: "How many musical notes are there?", cs: "Kolik je hudebních not?", fr: "Combien y a-t-il de notes de musique ?" },
      options: [
        { es: "7: do, re, mi, fa, sol, la, si", ca: "7: do, re, mi, fa, sol, la, si", en: "7: do, re, mi, fa, sol, la, ti", cs: "7: do, re, mi, fa, sol, la, si", fr: "7 : do, ré, mi, fa, sol, la, si" },
        { es: "2", ca: "2", en: "2", cs: "2", fr: "2" },
        { es: "1000", ca: "1000", en: "1000", cs: "1000", fr: "1000" },
        { es: "50", ca: "50", en: "50", cs: "50", fr: "50" }],
      answer: 0,
      explanation: { es: "Siete notas que se repiten subiendo y bajando, como una escalera mágica. ¡Con siete escalones se hace toda la música!", ca: "Set notes que es repeteixen pujant i baixant, com una escala màgica. Amb set esglaons es fa tota la música!", en: "Seven notes repeating up and down, like a magic staircase. All music is made with seven steps!", cs: "Sedm not, které se opakují nahoru a dolů jako kouzelné schodiště. Ze sedmi schodů se dělá všechna hudba!", fr: "Sept notes qui se répètent en montant et en descendant, comme un escalier magique. Avec sept marches, on fait toute la musique !" } },
    { emoji: "🎸",
      q: { es: "¿Cuántas cuerdas tiene una guitarra?", ca: "Quantes cordes té una guitarra?", en: "How many strings does a guitar have?", cs: "Kolik strun má kytara?", fr: "Combien de cordes a une guitare ?" },
      options: [
        { es: "6", ca: "6", en: "6", cs: "6", fr: "6" },
        { es: "2", ca: "2", en: "2", cs: "2", fr: "2" },
        { es: "60", ca: "60", en: "60", cs: "60", fr: "60" },
        { es: "88", ca: "88", en: "88", cs: "88", fr: "88" }],
      answer: 0,
      explanation: { es: "Seis cuerdas. La guitarra española suena en todo el mundo, del flamenco al rock.", ca: "Sis cordes. La guitarra espanyola sona a tot el món, del flamenc al rock.", en: "Six strings. The Spanish guitar is heard all over the world, from flamenco to rock.", cs: "Šest strun. Španělská kytara zní po celém světě, od flamenca po rock.", fr: "Six cordes. La guitare espagnole résonne dans le monde entier, du flamenco au rock." } },
    { emoji: "🐢",
      q: { es: "¿Qué significa tocar 'lento' en música?", ca: "Què vol dir tocar 'lent' en música?", en: "What does playing 'slow' mean in music?", cs: "Co znamená hrát 'pomalu' v hudbě?", fr: "Que veut dire jouer « lent » en musique ?" },
      options: [
        { es: "Tocar como una tortuga tranquila", ca: "Tocar com una tortuga tranquil·la", en: "Playing like a calm tortoise", cs: "Hrát jako klidná želva", fr: "Jouer comme une tortue tranquille" },
        { es: "Tocar bajito", ca: "Tocar fluixet", en: "Playing quietly", cs: "Hrát potichu", fr: "Jouer doucement" },
        { es: "No tocar", ca: "No tocar", en: "Not playing", cs: "Nehrát", fr: "Ne pas jouer" },
        { es: "Tocar dormido", ca: "Tocar adormit", en: "Playing asleep", cs: "Hrát ve spánku", fr: "Jouer en dormant" }],
      answer: 0,
      explanation: { es: "El tempo es la velocidad de la música: lento como tortuga o rápido como guepardo. ¡Las canciones también corren o pasean!", ca: "El tempo és la velocitat de la música: lent com una tortuga o ràpid com un guepard. Les cançons també corren o passegen!", en: "Tempo is the speed of music: slow like a tortoise or fast like a cheetah. Songs run or stroll too!", cs: "Tempo je rychlost hudby: pomalu jako želva, nebo rychle jako gepard. Písničky taky běhají nebo se procházejí!", fr: "Le tempo est la vitesse de la musique : lent comme une tortue ou rapide comme un guépard. Les chansons courent ou se promènent aussi !" } },
    { emoji: "🎤",
      q: { es: "¿Cuál es el instrumento que llevas siempre contigo?", ca: "Quin és l'instrument que portes sempre amb tu?", en: "Which instrument do you always carry with you?", cs: "Který nástroj nosíš pořád s sebou?", fr: "Quel instrument portes-tu toujours avec toi ?" },
      options: [
        { es: "El piano", ca: "El piano", en: "The piano", cs: "Klavír", fr: "Le piano" },
        { es: "Tu voz", ca: "La teva veu", en: "Your voice", cs: "Svůj hlas", fr: "Ta voix" },
        { es: "El arpa", ca: "L'arpa", en: "The harp", cs: "Harfu", fr: "La harpe" },
        { es: "La tuba", ca: "La tuba", en: "The tuba", cs: "Tubu", fr: "Le tuba" }],
      answer: 1,
      explanation: { es: "¡Tu voz! Canta, susurra, ríe y cuenta cuentos. Es el instrumento más antiguo del mundo.", ca: "La teva veu! Canta, xiuxiueja, riu i explica contes. És l'instrument més antic del món.", en: "Your voice! It sings, whispers, laughs and tells stories. The oldest instrument in the world.", cs: "Svůj hlas! Zpívá, šeptá, směje se a vypráví příběhy. Nejstarší nástroj na světě.", fr: "Ta voix ! Elle chante, chuchote, rit et raconte des histoires. C'est l'instrument le plus ancien du monde." } },
    { emoji: "👏",
      q: { es: "¿Qué se hace al final de un concierto que te ha encantado?", ca: "Què es fa al final d'un concert que t'ha encantat?", en: "What do you do at the end of a concert you loved?", cs: "Co uděláš na konci koncertu, který se ti moc líbil?", fr: "Que fait-on à la fin d'un concert qu'on a adoré ?" },
      options: [
        { es: "Aplaudir muy fuerte", ca: "Aplaudir molt fort", en: "Clap really loud", cs: "Hlasitě tleskat", fr: "Applaudir très fort" },
        { es: "Irse corriendo", ca: "Marxar corrents", en: "Run away", cs: "Utéct", fr: "Partir en courant" },
        { es: "Ponerse a dormir", ca: "Posar-se a dormir", en: "Go to sleep", cs: "Jít spát", fr: "S'endormir" },
        { es: "Pedir la merienda", ca: "Demanar el berenar", en: "Ask for a snack", cs: "Chtít svačinu", fr: "Demander le goûter" }],
      answer: 0,
      explanation: { es: "¡Aplaudir es decir gracias con las manos! Y si fue increíble, se grita 'bravo'. Los músicos lo oyen y les brilla el corazón.", ca: "Aplaudir és dir gràcies amb les mans! I si va ser increïble, es crida 'bravo'. Els músics ho senten i els brilla el cor.", en: "Clapping is saying thank you with your hands! And if it was amazing, you shout 'bravo'. The musicians hear it and their hearts glow.", cs: "Tleskání znamená děkovat rukama! A když to bylo úžasné, křičí se 'bravo'. Muzikanti to slyší a srdce jim září.", fr: "Applaudir, c'est dire merci avec les mains ! Et si c'était incroyable, on crie « bravo ». Les musiciens l'entendent et leur cœur brille." } },
    { emoji: "🧒",
      q: { es: "¿Quién empezó a componer música cuando todavía era un niño pequeño?", ca: "Qui va començar a compondre música quan encara era un nen petit?", en: "Who started composing music while still a little child?", cs: "Kdo začal skládat hudbu už jako malé dítě?", fr: "Qui a commencé à composer de la musique quand il était encore tout petit ?" },
      options: [
        { es: "Un abuelo", ca: "Un avi", en: "A grandpa", cs: "Dědeček", fr: "Un grand-père" },
        { es: "Un robot", ca: "Un robot", en: "A robot", cs: "Robot", fr: "Un robot" },
        { es: "Mozart", ca: "Mozart", en: "Mozart", cs: "Mozart", fr: "Mozart" },
        { es: "Un gato con botas", ca: "Un gat amb botes", en: "A cat in boots", cs: "Kocour v botách", fr: "Un chat botté" }],
      answer: 2,
      explanation: { es: "Wolfgang Amadeus Mozart componía piezas a los cinco años. ¡De niño viajó tocando para reyes y reinas de toda Europa!", ca: "Wolfgang Amadeus Mozart componia peces als cinc anys. De petit va viatjar tocant per a reis i reines de tota Europa!", en: "Wolfgang Amadeus Mozart was composing little pieces at five. As a child he travelled around playing for kings and queens all over Europe!", cs: "Wolfgang Amadeus Mozart skládal skladbičky už v pěti letech. Jako dítě cestoval a hrál králům a královnám po celé Evropě!", fr: "Wolfgang Amadeus Mozart composait des morceaux à cinq ans. Enfant, il a voyagé en jouant pour des rois et des reines de toute l'Europe !" } },
    { emoji: "🔺",
      q: { es: "¿Cómo se llama el instrumento de metal con forma de triángulo?", ca: "Com es diu l'instrument de metall amb forma de triangle?", en: "What is the metal instrument shaped like a triangle called?", cs: "Jak se jmenuje kovový nástroj ve tvaru trojúhelníku?", fr: "Comment s'appelle l'instrument en métal en forme de triangle ?" },
      options: [
        { es: "El triángulo", ca: "El triangle", en: "The triangle", cs: "Triangl", fr: "Le triangle" },
        { es: "El cuadrado", ca: "El quadrat", en: "The square", cs: "Čtverec", fr: "Le carré" },
        { es: "El círculo", ca: "El cercle", en: "The circle", cs: "Kruh", fr: "Le cercle" },
        { es: "La estrella", ca: "L'estrella", en: "The star", cs: "Hvězda", fr: "L'étoile" }],
      answer: 0,
      explanation: { es: "El triángulo se toca con una varilla y hace ¡tilín! Es pequeñito, pero su brillo se oye por encima de toda la orquesta.", ca: "El triangle es toca amb una vareta i fa tilín! És petitó, però la seva brillantor se sent per sobre de tota l'orquestra.", en: "You play the triangle with a little metal stick: ting! It is tiny, but its sparkle can be heard over the whole orchestra.", cs: "Na triangl se hraje kovovou tyčinkou: cink! Je maličký, ale jeho zvonivý hlásek je slyšet přes celý orchestr.", fr: "On joue du triangle avec une petite baguette : ting ! Il est tout petit, mais son éclat s'entend par-dessus tout l'orchestre." } },
    { emoji: "🎷",
      q: { es: "¿Qué instrumento dorado y curvado es el rey del jazz?", ca: "Quin instrument daurat i corbat és el rei del jazz?", en: "Which golden, curvy instrument is the king of jazz?", cs: "Který zlatý zahnutý nástroj je králem jazzu?", fr: "Quel instrument doré et courbé est le roi du jazz ?" },
      options: [
        { es: "El tambor", ca: "El tambor", en: "The drum", cs: "Buben", fr: "Le tambour" },
        { es: "El saxofón", ca: "El saxòfon", en: "The saxophone", cs: "Saxofon", fr: "Le saxophone" },
        { es: "La campana", ca: "La campana", en: "The bell", cs: "Zvon", fr: "La cloche" },
        { es: "El violín", ca: "El violí", en: "The violin", cs: "Housle", fr: "Le violon" }],
      answer: 1,
      explanation: { es: "Lo inventó un señor llamado Adolphe Sax hace casi 200 años. Por eso se llama saxofón: ¡el apellido del inventor está escondido en el nombre!", ca: "El va inventar un senyor anomenat Adolphe Sax fa gairebé 200 anys. Per això es diu saxòfon: el cognom de l'inventor està amagat al nom!", en: "It was invented by a man called Adolphe Sax almost 200 years ago. That is why it is called saxophone: the inventor's name is hiding inside!", cs: "Vynalezl ho pán jménem Adolphe Sax skoro před 200 lety. Proto se jmenuje saxofon: jméno vynálezce se schovává uvnitř!", fr: "Il a été inventé par un monsieur appelé Adolphe Sax il y a presque 200 ans. C'est pour ça qu'il s'appelle saxophone : le nom de l'inventeur se cache dedans !" } },
    { emoji: "🎼",
      q: { es: "¿Dónde se escriben las notas musicales?", ca: "On s'escriuen les notes musicals?", en: "Where are musical notes written down?", cs: "Kam se zapisují hudební noty?", fr: "Où écrit-on les notes de musique ?" },
      options: [
        { es: "En un mapa del tesoro", ca: "En un mapa del tresor", en: "On a treasure map", cs: "Do mapy pokladu", fr: "Sur une carte au trésor" },
        { es: "En la arena de la playa", ca: "A la sorra de la platja", en: "In the beach sand", cs: "Do písku na pláži", fr: "Dans le sable de la plage" },
        { es: "En una servilleta", ca: "En un tovalló", en: "On a napkin", cs: "Na ubrousek", fr: "Sur une serviette" },
        { es: "En un pentagrama de cinco líneas", ca: "En un pentagrama de cinc línies", en: "On a staff with five lines", cs: "Do notové osnovy s pěti linkami", fr: "Sur une portée de cinq lignes" }],
      answer: 3,
      explanation: { es: "El pentagrama tiene cinco líneas, y las notas se sientan en ellas como pajaritos en los cables. ¡Así los músicos leen la música como tú lees un cuento!", ca: "El pentagrama té cinc línies, i les notes s'hi asseuen com ocellets als cables. Així els músics llegeixen la música com tu llegeixes un conte!", en: "The staff has five lines, and the notes sit on them like little birds on wires. That is how musicians read music, just like you read a story!", cs: "Notová osnova má pět linek a noty na nich sedí jako ptáčci na drátech. Muzikanti tak čtou hudbu, jako ty čteš pohádku!", fr: "La portée a cinq lignes, et les notes s'y posent comme des petits oiseaux sur des fils. C'est ainsi que les musiciens lisent la musique, comme toi tu lis une histoire !" } },
    { emoji: "👂",
      q: { es: "¿Qué famoso compositor siguió creando música cuando ya casi no podía oír?", ca: "Quin compositor famós va continuar creant música quan ja gairebé no hi sentia?", en: "Which famous composer kept creating music when he could hardly hear anymore?", cs: "Který slavný skladatel tvořil hudbu dál, i když už skoro neslyšel?", fr: "Quel célèbre compositeur a continué à créer de la musique alors qu'il n'entendait presque plus ?" },
      options: [
        { es: "Un pirata musical", ca: "Un pirata musical", en: "A musical pirate", cs: "Hudební pirát", fr: "Un pirate musical" },
        { es: "Beethoven", ca: "Beethoven", en: "Beethoven", cs: "Beethoven", fr: "Beethoven" },
        { es: "Un fantasma", ca: "Un fantasma", en: "A ghost", cs: "Duch", fr: "Un fantôme" },
        { es: "Nadie puede hacer eso", ca: "Ningú no pot fer això", en: "Nobody can do that", cs: "To nikdo nedokáže", fr: "Personne ne peut faire ça" }],
      answer: 1,
      explanation: { es: "Ludwig van Beethoven sentía la música por dentro y escribió su famosa Novena sinfonía cuando ya estaba sordo. ¡La imaginaba enterita en su cabeza!", ca: "Ludwig van Beethoven sentia la música per dins i va escriure la seva famosa Novena simfonia quan ja era sord. Se la imaginava sencera al cap!", en: "Ludwig van Beethoven felt the music inside and wrote his famous Ninth Symphony when he was already deaf. He imagined it all in his head!", cs: "Ludwig van Beethoven cítil hudbu uvnitř a svou slavnou Devátou symfonii napsal, už když byl hluchý. Celou si ji představil v hlavě!", fr: "Ludwig van Beethoven sentait la musique en lui et a écrit sa célèbre Neuvième symphonie alors qu'il était déjà sourd. Il l'imaginait entière dans sa tête !" } }
  ],

  /* ---------- ALFABETO ---------- */
  alphabet: [
    { letter: "A", emoji: "🪗", item: { es: "Acordeón", ca: "Acordió", en: "Accordion", cs: "Akordeon", fr: "Accordéon" },
      fact: { es: "El acordeón respira: se estira y se encoge para cantar.", ca: "L'acordió respira: s'estira i s'encongeix per cantar.", en: "The accordion breathes: it stretches and squeezes to sing.", cs: "Akordeon dýchá: natahuje se a smršťuje, aby zpíval.", fr: "L'accordéon respire : il s'étire et se resserre pour chanter." } },
    { letter: "B", emoji: "🥁", item: { es: "Batería", ca: "Bateria", en: "Banjo", cs: "Buben", fr: "Batterie" },
      fact: { es: "La batería es el corazón del grupo: marca el ritmo de todos.", ca: "La bateria és el cor del grup: marca el ritme de tothom.", en: "The banjo has a round belly and plays happy, jumpy tunes.", cs: "Buben je srdce kapely: udává rytmus všem.", fr: "La batterie est le cœur du groupe : elle donne le rythme à tous." } },
    { letter: "C", emoji: "🎶", item: { es: "Castañuelas", ca: "Castanyoles", en: "Cello", cs: "Cello", fr: "Castagnettes" },
      fact: { es: "Las castañuelas repican en las manos: clac-clac-clac, ¡pura fiesta!", ca: "Les castanyoles repiquen a les mans: clac-clac-clac, pura festa!", en: "The cello sounds deep and warm, like a giant violin taking a seat.", cs: "Cello zní hluboce a hřejivě, jako obří housle, které se posadily.", fr: "Les castagnettes claquent dans les mains : clac-clac-clac, la fête !" } },
    { letter: "D", emoji: "🎵", item: { es: "Do", ca: "Do", en: "Do", cs: "Do", fr: "Do" },
      fact: { es: "Do es la primera nota de la escalera musical: do, re, mi...", ca: "Do és la primera nota de l'escala musical: do, re, mi...", en: "Do is the first step of the musical ladder: do, re, mi...", cs: "Do je první schod hudebního žebříku: do, re, mi...", fr: "Do est la première marche de l'escalier musical : do, ré, mi..." } },
    { letter: "E", emoji: "🔊", item: { es: "Eco", ca: "Eco", en: "Echo", cs: "Echo", fr: "Écho" },
      fact: { es: "El eco es tu voz rebotando y volviendo a ti. ¡Hola... hola... hola!", ca: "L'eco és la teva veu rebotant i tornant a tu. Hola... hola... hola!", en: "An echo is your voice bouncing back to you. Hello... hello... hello!", cs: "Echo je tvůj hlas, který se odrazí a vrátí. Ahoj... ahoj... ahoj!", fr: "L'écho, c'est ta voix qui rebondit et revient. Bonjour... bonjour... bonjour !" } },
    { letter: "F", emoji: "🪈", item: { es: "Flauta", ca: "Flauta", en: "Flute", cs: "Flétna", fr: "Flûte" },
      fact: { es: "La flauta es de los instrumentos más antiguos: las primeras eran de hueso.", ca: "La flauta és dels instruments més antics: les primeres eren d'os.", en: "The flute is one of the oldest instruments: the first ones were made of bone.", cs: "Flétna je jeden z nejstarších nástrojů: ty první byly z kosti.", fr: "La flûte est l'un des plus anciens instruments : les premières étaient en os." } },
    { letter: "G", emoji: "🎸", item: { es: "Guitarra", ca: "Guitarra", en: "Guitar", cs: "Gong", fr: "Guitare" },
      fact: { es: "Seis cuerdas y mil estilos: flamenco, rock, nanas para dormir...", ca: "Sis cordes i mil estils: flamenc, rock, cançons de bressol...", en: "Six strings and a thousand styles: flamenco, rock, lullabies...", cs: "Gong zní jako bronzový hrom: BOOOONG!", fr: "Six cordes et mille styles : flamenco, rock, berceuses..." } },
    { letter: "H", emoji: "🎼", item: { es: "Himno", ca: "Himne", en: "Harp", cs: "Harfa", fr: "Harpe" },
      fact: { es: "Un himno es una canción que canta mucha gente junta, con el corazón.", ca: "Un himne és una cançó que canta molta gent junta, amb el cor.", en: "The harp has 47 strings and sounds like a waterfall of stars.", cs: "Harfa má 47 strun a zní jako vodopád hvězd.", fr: "La harpe a 47 cordes et sonne comme une cascade d'étoiles." } },
    { letter: "I", emoji: "🎺", item: { es: "Instrumento", ca: "Instrument", en: "Instrument", cs: "Interpret", fr: "Instrument" },
      fact: { es: "Un instrumento es cualquier cosa que hace música... ¡hasta una cuchara!", ca: "Un instrument és qualsevol cosa que fa música... fins i tot una cullera!", en: "An instrument is anything that makes music... even a spoon!", cs: "Interpret je ten, kdo hudbu hraje nebo zpívá: dnes jsi to ty!", fr: "Un instrument, c'est tout ce qui fait de la musique... même une cuillère !" } },
    { letter: "J", emoji: "🎷", item: { es: "Jazz", ca: "Jazz", en: "Jazz", cs: "Jazz", fr: "Jazz" },
      fact: { es: "En el jazz los músicos inventan la música mientras la tocan. ¡Como jugar!", ca: "En el jazz els músics inventen la música mentre la toquen. Com jugar!", en: "In jazz, musicians make up the music while playing it. Like playing a game!", cs: "V jazzu si muzikanti hudbu vymýšlejí, zatímco ji hrají. Jako hra!", fr: "Dans le jazz, les musiciens inventent la musique en la jouant. Comme un jeu !" } },
    { letter: "K", emoji: "🎵", item: { es: "Kazoo", ca: "Kazoo", en: "Kazoo", cs: "Kazoo", fr: "Kazoo" },
      fact: { es: "El kazoo suena como una abeja cantante. Se toca tarareando dentro. ¡Mmmmm!", ca: "El kazoo sona com una abella cantant. Es toca taral·lejant a dins. Mmmmm!", en: "The kazoo sounds like a singing bee. You play it by humming into it. Mmmmm!", cs: "Kazoo zní jako zpívající včela. Hraje se broukáním dovnitř. Mmmmm!", fr: "Le kazoo sonne comme une abeille chanteuse. On y joue en fredonnant dedans. Mmmmm !" } },
    { letter: "L", emoji: "🎵", item: { es: "La", ca: "La", en: "La", cs: "La", fr: "La" },
      fact: { es: "La nota La es la jefa de afinar: toda la orquesta se ajusta a ella.", ca: "La nota La és la cap d'afinar: tota l'orquestra s'hi ajusta.", en: "The note La is the tuning boss: the whole orchestra adjusts to it.", cs: "Nota La je šéfka ladění: celý orchestr se ladí podle ní.", fr: "La note La est la cheffe de l'accordage : tout l'orchestre s'ajuste sur elle." } },
    { letter: "M", emoji: "🪇", item: { es: "Maracas", ca: "Maraques", en: "Maracas", cs: "Melodie", fr: "Maracas" },
      fact: { es: "Las maracas llevan semillas dentro: ¡chiki-chiki-chiki!", ca: "Les maraques porten llavors a dins: xiqui-xiqui-xiqui!", en: "Maracas have seeds inside: shiki-shiki-shiki!", cs: "Melodie je cestička z not, kterou si zapamatuješ a broukáš celý den.", fr: "Les maracas ont des graines dedans : chiki-chiki-chiki !" } },
    { letter: "N", emoji: "🎵", item: { es: "Nota", ca: "Nota", en: "Note", cs: "Nota", fr: "Note" },
      fact: { es: "Cada nota es un ladrillito de música. Juntas construyen canciones enteras.", ca: "Cada nota és un maonet de música. Juntes construeixen cançons senceres.", en: "Every note is a little brick of music. Together they build whole songs.", cs: "Každá nota je cihlička hudby. Dohromady staví celé písničky.", fr: "Chaque note est une petite brique de musique. Ensemble, elles construisent des chansons entières." } },
    { letter: "O", emoji: "🎻", item: { es: "Orquesta", ca: "Orquestra", en: "Orchestra", cs: "Orchestr", fr: "Orchestre" },
      fact: { es: "Hasta cien músicos tocando como uno solo. ¡El trabajo en equipo más bonito del mundo!", ca: "Fins a cent músics tocant com un de sol. El treball en equip més bonic del món!", en: "Up to a hundred musicians playing as one. The most beautiful teamwork in the world!", cs: "Až sto muzikantů hraje jako jeden. Nejkrásnější týmová práce na světě!", fr: "Jusqu'à cent musiciens qui jouent comme un seul. Le plus beau travail d'équipe du monde !" } },
    { letter: "P", emoji: "🎹", item: { es: "Piano", ca: "Piano", en: "Piano", cs: "Piano", fr: "Piano" },
      fact: { es: "Su nombre entero es pianoforte: puede sonar suave (piano) y fuerte (forte).", ca: "El seu nom sencer és pianoforte: pot sonar suau (piano) i fort (forte).", en: "Its full name is pianoforte: it can play soft (piano) and loud (forte).", cs: "Celým jménem pianoforte: umí hrát potichu (piano) i nahlas (forte).", fr: "Son nom complet est pianoforte : il peut jouer doux (piano) et fort (forte)." } },
    { letter: "Q", emoji: "🎶", item: { es: "Quinteto", ca: "Quintet", en: "Quartet", cs: "Quodlibet", fr: "Quatuor" },
      fact: { es: "Un quinteto son cinco músicos tocando juntos, como una pandilla musical.", ca: "Un quintet són cinc músics tocant junts, com una colla musical.", en: "A quartet is four musicians playing together, like a musical gang.", cs: "Quodlibet je směs písniček zahraných dohromady, jako hudební guláš.", fr: "Un quatuor, c'est quatre musiciens qui jouent ensemble, comme une bande musicale." } },
    { letter: "R", emoji: "🥁", item: { es: "Ritmo", ca: "Ritme", en: "Rhythm", cs: "Rytmus", fr: "Rythme" },
      fact: { es: "El ritmo es el latido de la música. Tu corazón lleva uno todo el día.", ca: "El ritme és el batec de la música. El teu cor en porta un tot el dia.", en: "Rhythm is the heartbeat of music. Your heart keeps one all day long.", cs: "Rytmus je tep hudby. Tvoje srdce ho drží celý den.", fr: "Le rythme est le battement de cœur de la musique. Ton cœur en garde un toute la journée." } },
    { letter: "S", emoji: "🎷", item: { es: "Saxofón", ca: "Saxofon", en: "Saxophone", cs: "Saxofon", fr: "Saxophone" },
      fact: { es: "Dorado y curvado como una S. Es la voz elegante del jazz.", ca: "Daurat i corbat com una S. És la veu elegant del jazz.", en: "Golden and curved like an S. The elegant voice of jazz.", cs: "Zlatý a zahnutý jako S. Elegantní hlas jazzu.", fr: "Doré et courbé comme un S. C'est la voix élégante du jazz." } },
    { letter: "T", emoji: "🥁", item: { es: "Tambor", ca: "Tambor", en: "Trumpet", cs: "Trubka", fr: "Tambour" },
      fact: { es: "El tambor es el instrumento más antiguo después de la voz. ¡Pom, pom!", ca: "El tambor és l'instrument més antic després de la veu. Pom, pom!", en: "The trumpet shines and wakes everyone up: ta-ta-ta-taaa!", cs: "Trubka se leskne a všechny probudí: ta-ta-ta-tááá!", fr: "Le tambour est l'instrument le plus ancien après la voix. Poum, poum !" } },
    { letter: "U", emoji: "🎸", item: { es: "Ukelele", ca: "Ukelele", en: "Ukulele", cs: "Ukulele", fr: "Ukulélé" },
      fact: { es: "La guitarra pequeñita de Hawái. Su nombre significa 'pulga saltarina'.", ca: "La guitarra petitona de Hawaii. El seu nom vol dir 'puça saltadora'.", en: "The tiny guitar from Hawaii. Its name means 'jumping flea'.", cs: "Malinká kytara z Havaje. Její jméno znamená 'skákající blecha'.", fr: "La toute petite guitare d'Hawaï. Son nom veut dire « puce sauteuse »." } },
    { letter: "V", emoji: "🎻", item: { es: "Violín", ca: "Violí", en: "Violin", cs: "Valčík", fr: "Violon" },
      fact: { es: "El violín canta con voz aguda y dulce. Se apoya en el hombro, como un amigo.", ca: "El violí canta amb veu aguda i dolça. Es recolza a l'espatlla, com un amic.", en: "The violin sings with a high, sweet voice. It rests on your shoulder, like a friend.", cs: "Valčík se tančí na tři doby: raz, dva, tři, raz, dva, tři.", fr: "Le violon chante d'une voix aiguë et douce. Il s'appuie sur l'épaule, comme un ami." } },
    { letter: "W", emoji: "🎶", item: { es: "Wow, ¡bravo!", ca: "Wow, bravo!", en: "Whistle", cs: "Wow, bravo!", fr: "Waouh, bravo !" },
      fact: { es: "Cuando un concierto emociona, el público grita ¡bravo! Es un regalo para los músicos.", ca: "Quan un concert emociona, el públic crida bravo! És un regal per als músics.", en: "Whistling is pocket music: your lips become a tiny flute.", cs: "Když koncert dojme, publikum křičí bravo! Je to dárek pro muzikanty.", fr: "Quand un concert émeut, le public crie bravo ! C'est un cadeau pour les musiciens." } },
    { letter: "X", emoji: "🎼", item: { es: "Xilófono", ca: "Xilòfon", en: "Xylophone", cs: "Xylofon", fr: "Xylophone" },
      fact: { es: "Láminas de madera que suenan como gotas de agua de colores.", ca: "Làmines de fusta que sonen com gotes d'aigua de colors.", en: "Wooden bars that sound like colourful water drops.", cs: "Dřevěné destičky, které zní jako barevné kapky vody.", fr: "Des lames de bois qui sonnent comme des gouttes d'eau colorées." } },
    { letter: "Y", emoji: "🥁", item: { es: "Yembé", ca: "Yembé", en: "Yodel", cs: "Yodel", fr: "Yodel" },
      fact: { es: "El yembé es un tambor africano que se toca con las manos y reúne a todo el pueblo.", ca: "El yembé és un tambor africà que es toca amb les mans i reuneix tot el poble.", en: "Yodelling is mountain singing that jumps from low to high: yo-de-lay-hee-hoo!", cs: "Yodel je horský zpěv, který skáče z hluboka do výšky: jo-dl-ej-í-ú!", fr: "Le yodel est un chant des montagnes qui saute du grave à l'aigu : yodel-ay-hi-hou !" } },
    { letter: "Z", emoji: "🎶", item: { es: "Zambomba", ca: "Zim-zam de platerets", en: "Zither", cs: "Zvonkohra", fr: "Zim-boum des cymbales" },
      fact: { es: "La zambomba suena frotando un palo: ¡brum, brum! Suena en Navidad.", ca: "Els platerets fan zim-zam: dos plats daurats que xoquen i brillen.", en: "The zither is a box of strings that sounds like a music jewel.", cs: "Zvonkohra zní jako hvězdičky, které se rozhodly zpívat.", fr: "Les cymbales font zim-boum : deux assiettes dorées qui se cognent et brillent." } }
  ],

  /* ---------- FAMOSOS ---------- */
  famous: [
    { emoji: "🎹", year: "1762", color: "#5e35b1", name: { es: "Mozart", ca: "Mozart", en: "Mozart", cs: "Mozart", fr: "Mozart" },
      achievement: { es: "A los 5 años ya componía música. De niño dio conciertos por toda Europa.", ca: "Als 5 anys ja componia música. De petit va fer concerts per tota Europa.", en: "At 5 he was already composing music. As a child he gave concerts all over Europe.", cs: "V 5 letech už skládal hudbu. Jako dítě koncertoval po celé Evropě.", fr: "À 5 ans, il composait déjà de la musique. Enfant, il a donné des concerts dans toute l'Europe." },
      quote: { es: "La música está en el silencio entre las notas.", ca: "La música és en el silenci entre les notes.", en: "The music is in the silence between the notes.", cs: "Hudba je v tichu mezi notami.", fr: "La musique est dans le silence entre les notes." } },
    { emoji: "🎼", year: "1824", color: "#455a64", name: { es: "Beethoven", ca: "Beethoven", en: "Beethoven", cs: "Beethoven", fr: "Beethoven" },
      achievement: { es: "Se quedó sordo... y siguió componiendo obras gigantes que oía dentro de su cabeza.", ca: "Es va quedar sord... i va seguir component obres gegants que sentia dins del seu cap.", en: "He went deaf... and kept composing giant works he could hear inside his head.", cs: "Ohluchl... a dál skládal obrovská díla, která slyšel ve své hlavě.", fr: "Il est devenu sourd... et a continué à composer des œuvres géantes qu'il entendait dans sa tête." },
      quote: { es: "La música puede cambiar el mundo.", ca: "La música pot canviar el món.", en: "Music can change the world.", cs: "Hudba může změnit svět.", fr: "La musique peut changer le monde." } },
    { emoji: "🎹", year: "1840", color: "#ad1457", name: { es: "Clara Schumann", ca: "Clara Schumann", en: "Clara Schumann", cs: "Clara Schumannová", fr: "Clara Schumann" },
      achievement: { es: "Una de las mejores pianistas de su siglo. Dio conciertos durante 60 años.", ca: "Una de les millors pianistes del seu segle. Va fer concerts durant 60 anys.", en: "One of the greatest pianists of her century. She gave concerts for 60 years.", cs: "Jedna z nejlepších klavíristek svého století. Koncertovala 60 let.", fr: "L'une des meilleures pianistes de son siècle. Elle a donné des concerts pendant 60 ans." },
      quote: { es: "Practicar es plantar; el concierto es la flor.", ca: "Practicar és plantar; el concert és la flor.", en: "Practising is planting; the concert is the flower.", cs: "Cvičení je sázení; koncert je květina.", fr: "S'entraîner, c'est planter ; le concert est la fleur." } },
    { emoji: "🎤", year: "1958", color: "#f9a825", name: { es: "Ella Fitzgerald", ca: "Ella Fitzgerald", en: "Ella Fitzgerald", cs: "Ella Fitzgeraldová", fr: "Ella Fitzgerald" },
      achievement: { es: "La Primera Dama de la Canción. Su voz saltaba como un instrumento más.", ca: "La Primera Dama de la Cançó. La seva veu saltava com un instrument més.", en: "The First Lady of Song. Her voice leapt around like another instrument.", cs: "První dáma písně. Její hlas skákal jako další nástroj.", fr: "La Première Dame de la chanson. Sa voix bondissait comme un instrument de plus." },
      quote: { es: "No importa de dónde vienes, sino adónde vas cantando.", ca: "No importa d'on véns, sinó on vas cantant.", en: "It does not matter where you come from, but where you are going singing.", cs: "Nezáleží na tom, odkud jdeš, ale kam jdeš se zpěvem.", fr: "Peu importe d'où tu viens, ce qui compte c'est où tu vas en chantant." } },
    { emoji: "🎺", year: "1930", color: "#bf360c", name: { es: "Louis Armstrong", ca: "Louis Armstrong", en: "Louis Armstrong", cs: "Louis Armstrong", fr: "Louis Armstrong" },
      achievement: { es: "Su trompeta y su voz rasposa enseñaron al mundo a sonreír con el jazz.", ca: "La seva trompeta i la seva veu rasposa van ensenyar al món a somriure amb el jazz.", en: "His trumpet and gravelly voice taught the world to smile with jazz.", cs: "Jeho trubka a chraplavý hlas naučily svět usmívat se s jazzem.", fr: "Sa trompette et sa voix éraillée ont appris au monde à sourire avec le jazz." },
      quote: { es: "Qué mundo tan maravilloso.", ca: "Quin món tan meravellós.", en: "What a wonderful world.", cs: "Jak nádherný svět.", fr: "Quel monde merveilleux." } },
    { emoji: "🎸", year: "1975", color: "#2e7d32", name: { es: "Paco de Lucía", ca: "Paco de Lucía", en: "Paco de Lucía", cs: "Paco de Lucía", fr: "Paco de Lucía" },
      achievement: { es: "El mago español de la guitarra flamenca: sus dedos volaban sobre las cuerdas.", ca: "El mag espanyol de la guitarra flamenca: els seus dits volaven sobre les cordes.", en: "The Spanish wizard of flamenco guitar: his fingers flew over the strings.", cs: "Španělský kouzelník flamenkové kytary: jeho prsty létaly po strunách.", fr: "Le magicien espagnol de la guitare flamenca : ses doigts volaient sur les cordes." },
      quote: { es: "Toca cada nota como si fuera la primera vez.", ca: "Toca cada nota com si fos la primera vegada.", en: "Play every note as if it were the first time.", cs: "Hraj každou notu, jako by to bylo poprvé.", fr: "Joue chaque note comme si c'était la première fois." } }
  ],

  childDream: {
    girl: { es: "Directora de orquesta", ca: "Directora d'orquestra", en: "Orchestra conductor", cs: "Dirigentka orchestru", fr: "Cheffe d'orchestre" },
    boy: { es: "Director de orquesta", ca: "Director d'orquestra", en: "Orchestra conductor", cs: "Dirigent orchestru", fr: "Chef d'orchestre" },
    kid: { es: "Peque que dirige la orquesta", ca: "Menut que dirigeix l'orquestra", en: "Kid who conducts the orchestra", cs: "Dítě, které řídí orchestr", fr: "Enfant qui dirige l'orchestre" }
  },
  childQuote: { es: "Cuando sea mayor dirigiré una orquesta de cien músicos. ¡Ya estoy practicando con la cuchara!", ca: "Quan sigui gran dirigiré una orquestra de cent músics. Ja estic practicant amb la cullera!", en: "When I grow up I will conduct an orchestra of a hundred musicians. I am already practising with a spoon!", cs: "Až vyrostu, budu dirigovat orchestr sta muzikantů. Už trénuju se lžičkou!", fr: "Quand je serai grand, je dirigerai un orchestre de cent musiciens. Je m'entraîne déjà avec la cuillère !" },

  /* ---------- MATES ---------- */
  mathEmojis: ["🎵", "🥁", "🎻", "🎺", "🎹", "🎶"],

  /* ---------- CONSTRUCTOR: tu guitarra ---------- */
  builder: {
    title: { es: "¡Construye tu guitarra!", ca: "Construeix la teva guitarra!", en: "Build your own guitar!", cs: "Postav si kytaru!", fr: "Construis ta guitare !" },
    thing: { es: "guitarra", ca: "guitarra", en: "guitar", cs: "kytara", fr: "guitare" },
    parts: [
      { id: "body", label: { es: "Color del cuerpo", ca: "Color del cos", en: "Body colour", cs: "Barva těla", fr: "Couleur du corps" },
        options: [{ id: "wood", v: "#bf8f5f" }, { id: "red", v: "#ef5350" }, { id: "blue", v: "#42a5f5" }, { id: "purple", v: "#ab47bc" }] },
      { id: "nose", label: { es: "La forma", ca: "La forma", en: "The shape", cs: "Tvar", fr: "La forme" },
        options: [{ id: "round", v: "round", icon: "🎸" }, { id: "cone", v: "cone", icon: "🔺" }, { id: "star", v: "star", icon: "⭐" }] },
      { id: "window", label: { es: "Las cuerdas", ca: "Les cordes", en: "The strings", cs: "Struny", fr: "Les cordes" },
        options: [{ id: "one", v: "one", icon: "4️⃣" }, { id: "two", v: "two", icon: "2️⃣" }, { id: "heart", v: "heart", icon: "💗" }] },
      { id: "flame", label: { es: "Las pegatinas", ca: "Els adhesius", en: "The stickers", cs: "Samolepky", fr: "Les autocollants" },
        options: [{ id: "orange", v: "#ffd54f" }, { id: "blue", v: "#80deea" }, { id: "rainbow", v: "rainbow", icon: "🌈" }] }
    ],
    svg(sel) {
      const body = sel.body || "#bf8f5f";
      const stick = sel.flame === "rainbow" ? "url(#guiR)" : (sel.flame || "#ffd54f");
      let shape = `<circle cx="50" cy="72" r="24" fill="${body}" stroke="#5d4037" stroke-width="2"/><circle cx="50" cy="58" r="16" fill="${body}" stroke="#5d4037" stroke-width="2"/>`;
      if (sel.nose === "cone") shape = `<path d="M30 88 L50 40 L70 88 Q50 100 30 88 Z" fill="${body}" stroke="#5d4037" stroke-width="2"/>`;
      if (sel.nose === "star") shape = `<circle cx="50" cy="70" r="24" fill="${body}" stroke="#5d4037" stroke-width="2"/><path d="M30 56 L38 44 L50 52 L62 44 L70 56" fill="${body}" stroke="#5d4037" stroke-width="2"/>`;
      const strings = sel.window === "two" ? 2 : sel.window === "heart" ? 3 : 4;
      let strLines = "";
      for (let i = 0; i < strings; i++) strLines += `<line x1="${46 + i * (8 / Math.max(1, strings - 1))}" y1="10" x2="${46 + i * (8 / Math.max(1, strings - 1))}" y2="82" stroke="#eceff1" stroke-width="1.2"/>`;
      return `<svg viewBox="0 0 100 110" width="190" height="210">
        <defs><linearGradient id="guiR" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#ff5252"/><stop offset="34%" stop-color="#ffd740"/><stop offset="67%" stop-color="#69f0ae"/><stop offset="100%" stop-color="#40c4ff"/></linearGradient></defs>
        <rect x="44" y="6" width="12" height="10" rx="3" fill="#5d4037"/>
        <rect x="46" y="14" width="8" height="46" fill="#8d6e63"/>
        ${shape}
        <circle cx="50" cy="72" r="7" fill="#3e2723"/>
        ${strLines}
        ${sel.window === "heart" ? `<text x="60" y="88" font-size="10">💗</text>` : ""}
        <circle cx="34" cy="80" r="4" fill="${stick}"/>
        <circle cx="66" cy="64" r="3.4" fill="${stick}"/>
        <text x="28" y="60" font-size="9">🎵<animateTransform attributeName="transform" type="translate" values="0 0;0 -5;0 0" dur="1.6s" repeatCount="indefinite"/></text>
        <text x="66" y="46" font-size="9">🎶<animateTransform attributeName="transform" type="translate" values="0 0;0 -6;0 0" dur="2s" repeatCount="indefinite"/></text>
      </svg>`;
    }
  }
};
