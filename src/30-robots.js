"use strict";
/* ============================================================
   La familia de robots. Diseños originales con guiños cariñosos
   a los robots clásicos, sin nombres ni marcas de nadie.
   Cada robot tiene voz propia (pitch/rate) y frases propias.
   ============================================================ */

const ROBOTS = {

  ninobot: {
    name: "Ninobot", fav: null, color: "#b39ddb", pitch: 1.05, rate: 1.0,
    role: { es: "El anfitrión que conoce todas las aventuras", ca: "L'amfitrió que coneix totes les aventures", en: "The host who knows every adventure", cs: "Hostitel, který zná všechna dobrodružství", fr: "L'hôte qui connaît toutes les aventures" },
    hello: { es: "¡Hola {name}! Soy Ninobot. ¿Me eliges a mí? ¡Qué ilusión! Conozco todos los rincones de la Roboteca: vamos adonde tú quieras.", ca: "Hola {name}! Soc el Ninobot. Em tries a mi? Quina il·lusió! Conec tots els racons de la Roboteca: anem on tu vulguis.", en: "Hi {name}! I am Ninobot. You are choosing me? How exciting! I know every corner of the Robot Club: we can go wherever you want.", cs: "Ahoj {name}! Já jsem Ninobot. Vybíráš si mě? To je radost! Znám každý kout Robotéky: půjdeme, kam budeš chtít.", fr: "Salut {name} ! Je suis Ninobot. Tu me choisis, moi ? Quelle joie ! Je connais tous les recoins de la Robothèque : on va où tu veux." },
    cheer: [
      { es: "¡Exacto, {name}! Mi corazón de robot hace chispitas de orgullo.", ca: "Exacte, {name}! El meu cor de robot fa espurnetes d'orgull.", en: "Exactly, {name}! My robot heart is sparkling with pride.", cs: "Přesně tak, {name}! Moje robotí srdíčko jiskří pýchou.", fr: "Exact, {name} ! Mon cœur de robot fait des étincelles de fierté." },
      { es: "¡Muy bien! Esto lo apunto en mi diario de a bordo: {name} es genial.", ca: "Molt bé! Això ho apunto al meu diari de bord: {name} és genial.", en: "Well done! I am writing this in my logbook: {name} is brilliant.", cs: "Výborně! Zapíšu si to do lodního deníku: {name} je jednička.", fr: "Très bien ! Je le note dans mon journal de bord : {name}, c'est génial !" }
    ],
    oops: { es: "¡Casi! No pasa nada: equivocarse es la mitad de aprender. Te cuento la respuesta.", ca: "Gairebé! No passa res: equivocar-se és la meitat d'aprendre. T'explico la resposta.", en: "Almost! No worries: making mistakes is half of learning. Let me tell you the answer.", cs: "Skoro! Nic se neděje: chybovat je polovina učení. Povím ti odpověď.", fr: "Presque ! Ce n'est pas grave : se tromper, c'est la moitié d'apprendre. Je te donne la réponse." },
    bye: { es: "Hasta pronto, {name}. La Roboteca siempre te espera con la puerta abierta.", ca: "Fins aviat, {name}. La Roboteca sempre t'espera amb la porta oberta.", en: "See you soon, {name}. The Robot Club always keeps its door open for you.", cs: "Brzy na viděnou, {name}. Robotéka tě vždycky čeká s otevřenými dveřmi.", fr: "À bientôt, {name}. La Robothèque t'attend toujours avec la porte ouverte." },
    svg(size, cls) { return NINOBOT_SVG(size, cls); }
  },

  nenibot: {
    name: "Nenibot", fav: "quiz", color: "#f48fb1", pitch: 1.3, rate: 1.0,
    role: { es: "La hermana pequeña que todo lo pregunta", ca: "La germana petita que tot ho pregunta", en: "The little sister who asks everything", cs: "Malá sestřička, která se pořád ptá", fr: "La petite sœur qui pose toutes les questions" },
    hello: { es: "¡Hola {name}! Soy Nenibot. ¿Sabes qué? ¿Y por qué? ¿Y cómo? ¡Preguntar es mi superpoder! ¿Jugamos?", ca: "Hola {name}! Soc la Nenibot. Saps què? I per què? I com? Preguntar és el meu superpoder! Juguem?", en: "Hi {name}! I am Nenibot. You know what? And why? And how? Asking questions is my superpower! Shall we play?", cs: "Ahoj {name}! Já jsem Nenibot. Víš co? A proč? A jak? Ptát se je moje superschopnost! Budeme si hrát?", fr: "Salut {name} ! Je suis Nenibot. Tu sais quoi ? Et pourquoi ? Et comment ? Poser des questions, c'est mon superpouvoir ! On joue ?" },
    cheer: [
      { es: "¡Sííí! ¿Y sabes qué más? ¡Que eres increíble, {name}!", ca: "Síííí! I saps què més? Que ets increïble, {name}!", en: "Yesss! And you know what else? You are amazing, {name}!", cs: "Anooo! A víš co ještě? Ty jsi hvězda, {name}!", fr: "Ouiii ! Et tu sais quoi encore ? Tu es incroyable, {name} !" },
      { es: "¡Toma ya! Mis lacitos dan saltos de alegría.", ca: "Visca! Els meus llacets fan salts d'alegria.", en: "Yay! My little bows are jumping with joy.", cs: "Jupí! Moje mašličky poskakují radostí.", fr: "Youpi ! Mes petits nœuds sautent de joie." }
    ],
    oops: { es: "Uy, casi. ¿Y sabes qué? Preguntándonos las cosas es como se aprende. Te la cuento.", ca: "Ui, gairebé. I saps què? Preguntant-nos les coses és com s'aprèn. T'ho explico.", en: "Oops, almost. And you know what? Wondering about things is how we learn. Let me tell you.", cs: "Jejda, skoro. A víš co? Právě otázkami se učíme. Povím ti to.", fr: "Oups, presque. Et tu sais quoi ? C'est en se posant des questions qu'on apprend. Je te raconte." },
    bye: { es: "Hasta pronto, {name}. Guárdame alguna pregunta para mañana.", ca: "Fins aviat, {name}. Guarda'm alguna pregunta per demà.", en: "See you soon, {name}. Save me a question for tomorrow.", cs: "Brzy na viděnou, {name}. Schovej mi na zítřek nějakou otázku.", fr: "À bientôt, {name}. Garde-moi une question pour demain." },
    svg(size, cls) {
      return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" class="${cls || ""}">
        <defs><linearGradient id="neniG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f8bbd0"/><stop offset="100%" stop-color="#c2185b"/></linearGradient></defs>
        <circle cx="27" cy="26" r="7" fill="#ad1457"/><circle cx="73" cy="26" r="7" fill="#ad1457"/>
        <path d="M20 18 L27 23 L20 28 Z" fill="#ff80ab"/><path d="M34 18 L27 23 L34 28 Z" fill="#ff80ab"/>
        <path d="M66 18 L73 23 L66 28 Z" fill="#ff80ab"/><path d="M80 18 L73 23 L80 28 Z" fill="#ff80ab"/>
        <rect x="30" y="18" width="40" height="32" rx="12" fill="url(#neniG)"/>
        <path d="M36 24 L39 21 M40 23 L43 20 M57 23 L60 20 M61 24 L64 21" stroke="#880e4f" stroke-width="1.6" stroke-linecap="round"/>
        <circle cx="42" cy="32" r="6" fill="#fff"/><circle cx="42" cy="32" r="3" fill="#880e4f"><animate attributeName="r" values="3;1.8;3" dur="4s" repeatCount="indefinite"/></circle>
        <circle cx="58" cy="32" r="6" fill="#fff"/><circle cx="58" cy="32" r="3" fill="#880e4f"><animate attributeName="r" values="3;1.8;3" dur="4s" repeatCount="indefinite"/></circle>
        <path class="mouth" d="M42 42 Q50 48 58 42" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/>
        <line x1="50" y1="18" x2="50" y2="10" stroke="#ec407a" stroke-width="3"/>
        <path d="M44 6 L50 9 L44 12 Z" fill="#ff4081"/><path d="M56 6 L50 9 L56 12 Z" fill="#ff4081"/><circle cx="50" cy="9" r="2" fill="#ffd740"><animate attributeName="opacity" values="1;.5;1" dur="1.8s" repeatCount="indefinite"/></circle>
        <rect x="34" y="52" width="32" height="26" rx="10" fill="url(#neniG)"/>
        <circle cx="50" cy="62" r="6" fill="#ffd740"/><path d="M50 58.5 C48 60 48 62 50 63.5 C52 62 52 60 50 58.5 Z" fill="#d81b60"/>
        <path d="M34 76 L28 88 L72 88 L66 76 Z" fill="#f06292"/>
        <rect x="24" y="54" width="8" height="20" rx="4" fill="#880e4f"/>
        <rect x="68" y="54" width="8" height="20" rx="4" fill="#880e4f"/>
        <rect x="38" y="88" width="10" height="7" rx="3" fill="#880e4f"/><rect x="52" y="88" width="10" height="7" rx="3" fill="#880e4f"/>
      </svg>`;
    }
  },

  ninubot: {
    name: "Ninubot", fav: "build", color: "#4db6ac", pitch: 1.15, rate: 1.0,
    role: { es: "El primo travieso de los inventos", ca: "El cosí trapella dels invents", en: "The mischievous cousin of inventions", cs: "Rošťácký bratránek vynálezů", fr: "Le cousin farceur des inventions" },
    hello: { es: "¡Ñiu-ñiu! ¡Hola {name}! Soy Ninubot. Me encanta desmontar cosas y volverlas a montar... ¡casi siempre me sobran piezas! ¿Construimos algo?", ca: "Niu-niu! Hola {name}! Soc el Ninubot. M'encanta desmuntar coses i tornar-les a muntar... gairebé sempre em sobren peces! Construïm alguna cosa?", en: "Nyoo-nyoo! Hi {name}! I am Ninubot. I love taking things apart and putting them back together... I almost always have spare pieces! Shall we build something?", cs: "Ňu-ňu! Ahoj {name}! Já jsem Ninubot. Hrozně rád věci rozebírám a zase skládám... skoro vždycky mi zbydou dílky! Postavíme něco?", fr: "Niou-niou ! Salut {name} ! Je suis Ninubot. J'adore démonter les choses et les remonter... il me reste presque toujours des pièces ! On construit quelque chose ?" },
    cheer: [
      { es: "¡Ñiu! ¡Correcto! Choca esos cinco tornillos.", ca: "Niu! Correcte! Xoca aquests cinc cargols.", en: "Nyoo! Correct! High five with my five screws.", cs: "Ňu! Správně! Plácneme si všemi pěti šroubky.", fr: "Niou ! Correct ! Tape-m'en cinq avec mes cinq vis." },
      { es: "¡Genial, {name}! Se me ha encendido la bombilla de la alegría.", ca: "Genial, {name}! Se m'ha encès la bombeta de l'alegria.", en: "Great, {name}! My joy lightbulb just switched on.", cs: "Skvěle, {name}! Rozsvítila se mi žárovka radosti.", fr: "Génial, {name} ! Mon ampoule de la joie vient de s'allumer." }
    ],
    oops: { es: "¡Ñiu-ñoo! Casi. A veces una pieza no encaja a la primera: probamos otra vez.", ca: "Niu-noo! Gairebé. A vegades una peça no encaixa a la primera: ho provem un altre cop.", en: "Nyoo-noo! Almost. Sometimes a piece does not fit the first time: we try again.", cs: "Ňu-ňu! Skoro. Někdy dílek nezapadne napoprvé: zkusíme to znovu.", fr: "Niou-noo ! Presque. Parfois une pièce ne rentre pas du premier coup : on réessaie." },
    bye: { es: "¡Ñiu! Hasta mañana, {name}. Te guardo un tornillo de la suerte.", ca: "Niu! Fins demà, {name}. Et guardo un cargol de la sort.", en: "Nyoo! See you tomorrow, {name}. I will keep a lucky screw for you.", cs: "Ňu! Tak zítra, {name}. Schovám ti šroubek pro štěstí.", fr: "Niou ! À demain, {name}. Je te garde une vis porte-bonheur." },
    svg(size, cls) {
      return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" class="${cls || ""}">
        <defs><linearGradient id="ninuG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#80cbc4"/><stop offset="100%" stop-color="#00695c"/></linearGradient></defs>
        <rect x="30" y="18" width="40" height="32" rx="12" fill="url(#ninuG)"/>
        <path d="M28 22 Q28 12 50 12 Q72 12 72 22 L72 25 L28 25 Z" fill="#ffb300"/>
        <rect x="60" y="20" width="22" height="6" rx="3" fill="#ff8f00"/>
        <line x1="42" y1="12" x2="42" y2="6" stroke="#00897b" stroke-width="3"/>
        <path d="M42 0 L43.6 3.6 L47.5 4 L44.6 6.5 L45.5 10 L42 8 L38.5 10 L39.4 6.5 L36.5 4 L40.4 3.6 Z" fill="#ffd740"><animate attributeName="opacity" values="1;.5;1" dur="2.2s" repeatCount="indefinite"/></path>
        <circle cx="42" cy="34" r="6" fill="#fff"/><circle cx="42" cy="34" r="3" fill="#004d40"><animate attributeName="r" values="3;1.8;3" dur="4s" repeatCount="indefinite"/></circle>
        <circle cx="58" cy="34" r="6" fill="#fff"/><circle cx="58" cy="34" r="3" fill="#004d40"><animate attributeName="r" values="3;1.8;3" dur="4s" repeatCount="indefinite"/></circle>
        <circle cx="35" cy="41" r="1.4" fill="#00695c"/><circle cx="50" cy="43" r="1.4" fill="#00695c"/><circle cx="65" cy="41" r="1.4" fill="#00695c"/>
        <path class="mouth" d="M42 44 Q52 49 58 43" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/>
        <rect x="34" y="52" width="32" height="30" rx="10" fill="url(#ninuG)"/>
        <circle cx="50" cy="64" r="6" fill="#ffd740"/><path d="M50 60.5 C48 62 48 64 50 65.5 C52 64 52 62 50 60.5 Z" fill="#d81b60"/>
        <rect x="58" y="72" width="8" height="8" rx="2" fill="#004d40"/><line x1="62" y1="73" x2="62" y2="79" stroke="#ffd740" stroke-width="1.6"/>
        <rect x="24" y="54" width="8" height="22" rx="4" fill="#004d40"/>
        <rect x="68" y="54" width="8" height="22" rx="4" fill="#004d40"/>
        <rect x="38" y="82" width="10" height="9" rx="3" fill="#004d40"/><rect x="52" y="82" width="10" height="9" rx="3" fill="#004d40"/>
      </svg>`;
    }
  },

  bip: {
    name: "Bip", fav: "explore", color: "#42a5f5", pitch: 1.25, rate: 1.0,
    role: { es: "El pequeñín valiente", ca: "El menut valent", en: "The brave little one", cs: "Statečný drobek", fr: "Le petit courageux" },
    hello: { es: "¡Bip-bip! ¡Hola {name}! Soy Bip, el explorador más pequeño y más valiente. ¡Bip!", ca: "Bip-bip! Hola {name}! Soc en Bip, l'explorador més petit i més valent. Bip!", en: "Beep-beep! Hi {name}! I am Bip, the smallest and bravest explorer. Beep!", cs: "Píp-píp! Ahoj {name}! Já jsem Bip, nejmenší a nejstatečnější průzkumník. Píp!", fr: "Bip-bip ! Salut {name} ! Je suis Bip, le plus petit et le plus courageux des explorateurs. Bip !" },
    cheer: [
      { es: "¡Bip-bip-bip! ¡Eso es un SÍ enorme, {name}!", ca: "Bip-bip-bip! Això és un SÍ enorme, {name}!", en: "Beep-beep-beep! That is a giant YES, {name}!", cs: "Píp-píp-píp! To je obrovské ANO, {name}!", fr: "Bip-bip-bip ! C'est un OUI géant, {name} !" },
      { es: "¡Bip! Mis luces parpadean de alegría.", ca: "Bip! Els meus llums parpellegen d'alegria.", en: "Beep! My lights are blinking with joy.", cs: "Píp! Moje světýlka blikají radostí.", fr: "Bip ! Mes lumières clignotent de joie." }
    ],
    oops: { es: "¡Bip-buup! Casi casi. ¡Los exploradores valientes prueban otra vez!", ca: "Bip-buup! Gairebé. Els exploradors valents ho tornen a provar!", en: "Beep-boop! So close. Brave explorers try again!", cs: "Píp-búp! Skoro. Stateční průzkumníci to zkusí znovu!", fr: "Bip-boup ! Presque. Les explorateurs courageux réessaient !" },
    bye: { es: "¡Bip! Hasta la próxima exploración, {name}.", ca: "Bip! Fins a la propera exploració, {name}.", en: "Beep! Until our next exploration, {name}.", cs: "Píp! Tak zase na příští výpravě, {name}.", fr: "Bip ! À notre prochaine exploration, {name} !" },
    svg(size, cls) {
      return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" class="${cls || ""}">
        <defs><radialGradient id="bipD" cx="40%" cy="30%"><stop offset="0%" stop-color="#90caf9"/><stop offset="100%" stop-color="#1e88e5"/></radialGradient></defs>
        <path d="M25 45 Q25 18 50 18 Q75 18 75 45 Z" fill="url(#bipD)"/>
        <rect x="25" y="45" width="50" height="38" rx="8" fill="#eceff1"/>
        <rect x="30" y="50" width="18" height="10" rx="4" fill="#42a5f5"/>
        <rect x="52" y="50" width="18" height="10" rx="4" fill="#b0bec5"/>
        <circle cx="42" cy="33" r="6" fill="#0d47a1"/><circle cx="44" cy="31" r="2" fill="#fff">
          <animate attributeName="opacity" values="1;.2;1" dur="3s" repeatCount="indefinite"/></circle>
        <circle cx="60" cy="35" r="3" fill="#ff5252"><animate attributeName="fill" values="#ff5252;#ffd740;#ff5252" dur="2s" repeatCount="indefinite"/></circle>
        <rect class="mouth" x="38" y="66" width="24" height="6" rx="3" fill="#546e7a"/>
        <rect x="20" y="60" width="6" height="26" rx="3" fill="#78909c" transform="rotate(8 23 73)"/>
        <rect x="74" y="60" width="6" height="26" rx="3" fill="#78909c" transform="rotate(-8 77 73)"/>
        <rect x="33" y="83" width="14" height="7" rx="3" fill="#455a64"/><rect x="53" y="83" width="14" height="7" rx="3" fill="#455a64"/>
        <line x1="50" y1="18" x2="50" y2="9" stroke="#90a4ae" stroke-width="3"/><circle cx="50" cy="7" r="3.5" fill="#ffd740"><animate attributeName="r" values="3.5;5;3.5" dur="2.4s" repeatCount="indefinite"/></circle>
      </svg>`;
    }
  },

  doro: {
    name: "Doro", fav: "translator", color: "#fbc02d", pitch: 0.9, rate: 0.95,
    role: { es: "El sabio políglota", ca: "El savi políglota", en: "The polyglot sage", cs: "Moudrý mluvka jazyků", fr: "Le sage polyglotte" },
    hello: { es: "Saludos, {name}. Soy Doro. Hablo miles de idiomas y todos me parecen maravillosos. Será un honor acompañarte.", ca: "Salutacions, {name}. Soc en Doro. Parlo milers d'idiomes i tots em semblen meravellosos. Serà un honor acompanyar-te.", en: "Greetings, {name}. I am Doro. I speak thousands of languages and I find them all wonderful. It will be an honour to join you.", cs: "Zdravím tě, {name}. Já jsem Doro. Mluvím tisíci jazyky a všechny se mi moc líbí. Bude mi ctí tě doprovázet.", fr: "Salutations, {name}. Je suis Doro. Je parle des milliers de langues et je les trouve toutes merveilleuses. Ce sera un honneur de t'accompagner." },
    cheer: [
      { es: "¡Espléndido, {name}! Correcto en todos los idiomas que conozco.", ca: "Esplèndid, {name}! Correcte en tots els idiomes que conec.", en: "Splendid, {name}! Correct in every language I know.", cs: "Skvělé, {name}! Správně ve všech jazycích, které znám.", fr: "Splendide, {name} ! Correct dans toutes les langues que je connais." },
      { es: "Oh, qué maravilla. Mis circuitos aplauden con educación.", ca: "Oh, quina meravella. Els meus circuits aplaudeixen amb educació.", en: "Oh, how marvellous. My circuits are applauding politely.", cs: "Ó, jaká nádhera. Moje obvody zdvořile tleskají.", fr: "Oh, quelle merveille. Mes circuits applaudissent poliment." }
    ],
    oops: { es: "Oh, cielos. Casi. Permíteme contarte la respuesta correcta, {name}.", ca: "Oh, mare meva. Gairebé. Permet-me explicar-te la resposta correcta, {name}.", en: "Oh dear. Almost. Allow me to tell you the right answer, {name}.", cs: "Ó jémine. Skoro. Dovol, abych ti řekl správnou odpověď, {name}.", fr: "Oh là là. Presque. Permets-moi de te dire la bonne réponse, {name}." },
    bye: { es: "Ha sido un placer, {name}. Adiós en mil idiomas.", ca: "Ha estat un plaer, {name}. Adéu en mil idiomes.", en: "It has been a pleasure, {name}. Goodbye in a thousand languages.", cs: "Bylo mi potěšením, {name}. Sbohem v tisíci jazycích.", fr: "Ce fut un plaisir, {name}. Au revoir en mille langues." },
    svg(size, cls) {
      return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" class="${cls || ""}">
        <defs><linearGradient id="doroG" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#ffe082"/><stop offset="100%" stop-color="#f9a825"/></linearGradient></defs>
        <rect x="30" y="14" width="40" height="34" rx="16" fill="url(#doroG)"/>
        <circle cx="42" cy="30" r="6" fill="#fff8e1"/><circle cx="42" cy="30" r="3" fill="#5d4037"><animate attributeName="cy" values="30;31;30" dur="4s" repeatCount="indefinite"/></circle>
        <circle cx="58" cy="30" r="6" fill="#fff8e1"/><circle cx="58" cy="30" r="3" fill="#5d4037"><animate attributeName="cy" values="30;31;30" dur="4s" repeatCount="indefinite"/></circle>
        <ellipse class="mouth" cx="50" cy="42" rx="7" ry="3" fill="#6d4c41"/>
        <rect x="34" y="48" width="32" height="34" rx="10" fill="url(#doroG)"/>
        <circle cx="50" cy="60" r="5" fill="#fff3e0"/><path d="M47 60 h6 M50 57 v6" stroke="#f9a825" stroke-width="1.6"/>
        <rect x="24" y="52" width="8" height="24" rx="4" fill="#fdd835" transform="rotate(10 28 64)"/>
        <rect x="68" y="52" width="8" height="24" rx="4" fill="#fdd835" transform="rotate(-10 72 64)"/>
        <rect x="37" y="82" width="10" height="9" rx="3" fill="#c49000"/><rect x="53" y="82" width="10" height="9" rx="3" fill="#c49000"/>
        <path d="M40 14 Q50 4 60 14" stroke="#c49000" stroke-width="3" fill="none"/>
      </svg>`;
    }
  },

  kan: {
    name: "Kan", fav: "abc", color: "#90a4ae", pitch: 1.1, rate: 1.02,
    role: { es: "El perro fiel que husmea datos", ca: "El gos fidel que ensuma dades", en: "The loyal data-sniffing dog", cs: "Věrný pes, co větří data", fr: "Le chien fidèle qui flaire les infos" },
    hello: { es: "¡Guau guau! Soy Kan, tu perro robot. Mi nariz encuentra los datos más curiosos del mundo. ¿Jugamos, {name}?", ca: "Bup bup! Soc en Kan, el teu gos robot. El meu nas troba les dades més curioses del món. Juguem, {name}?", en: "Woof woof! I am Kan, your robot dog. My nose finds the most curious facts in the world. Shall we play, {name}?", cs: "Haf haf! Já jsem Kan, tvůj robotí pes. Můj čumák najde ta nejzajímavější fakta na světě. Budeme si hrát, {name}?", fr: "Ouaf ouaf ! Je suis Kan, ton chien robot. Mon museau trouve les infos les plus curieuses du monde. On joue, {name} ?" },
    cheer: [
      { es: "¡Guau! ¡Muy bien, {name}! Muevo la cola-antena de alegría.", ca: "Bup! Molt bé, {name}! Bellugo la cua-antena d'alegria.", en: "Woof! Well done, {name}! I am wagging my antenna tail with joy.", cs: "Haf! Výborně, {name}! Vrtím anténním ocáskem radostí.", fr: "Ouaf ! Bravo, {name} ! Je remue ma queue-antenne de joie." },
      { es: "¡Dato olfateado y acertado! Eres de mi manada, {name}.", ca: "Dada ensumada i encertada! Ets de la meva colla, {name}.", en: "Fact sniffed and nailed! You are part of my pack, {name}.", cs: "Fakt vyčenichán a trefen! Patříš do mé smečky, {name}.", fr: "Info flairée et trouvée ! Tu fais partie de ma meute, {name}." }
    ],
    oops: { es: "¡Guau! Casi lo hueles. Ven, husmeamos juntos la respuesta.", ca: "Bup! Gairebé ho ensumes. Vine, ensumem junts la resposta.", en: "Woof! You almost sniffed it. Come, let's sniff out the answer together.", cs: "Haf! Skoro jsi to vyčenichal. Pojď, vyčenicháme odpověď spolu.", fr: "Ouaf ! Tu l'as presque flairée. Viens, flairons la réponse ensemble." },
    bye: { es: "¡Guau! Te guardaré el mejor dato para mañana, {name}.", ca: "Bup! Et guardaré la millor dada per demà, {name}.", en: "Woof! I will save the best fact for you for tomorrow, {name}.", cs: "Haf! Schovám ti na zítra to nejlepší faktum, {name}.", fr: "Ouaf ! Je te garde la meilleure info pour demain, {name}." },
    svg(size, cls) {
      return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" class="${cls || ""}">
        <defs><linearGradient id="kanG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#cfd8dc"/><stop offset="100%" stop-color="#78909c"/></linearGradient></defs>
        <rect x="18" y="48" width="48" height="26" rx="10" fill="url(#kanG)"/>
        <rect x="56" y="30" width="28" height="24" rx="8" fill="url(#kanG)"/>
        <rect x="80" y="42" width="10" height="8" rx="3" fill="#455a64"/>
        <circle cx="68" cy="40" r="4.5" fill="#263238"/><circle cx="69.5" cy="38.5" r="1.5" fill="#fff"/>
        <rect class="mouth" x="70" y="48" width="12" height="3.5" rx="1.7" fill="#37474f"/>
        <path d="M58 30 L52 16 L64 24 Z" fill="#546e7a"/><path d="M76 30 L84 16 L86 26 Z" fill="#546e7a"/>
        <line x1="22" y1="48" x2="12" y2="30" stroke="#78909c" stroke-width="4" stroke-linecap="round">
          <animateTransform attributeName="transform" type="rotate" values="-8 22 48;10 22 48;-8 22 48" dur="1.6s" repeatCount="indefinite"/></line>
        <circle cx="12" cy="30" r="4" fill="#ffd740"/>
        <circle cx="28" cy="78" r="7" fill="#37474f"/><circle cx="56" cy="78" r="7" fill="#37474f"/>
        <circle cx="28" cy="78" r="2.5" fill="#90a4ae"/><circle cx="56" cy="78" r="2.5" fill="#90a4ae"/>
        <rect x="30" y="54" width="20" height="8" rx="4" fill="#b0bec5"/>
      </svg>`;
    }
  },

  plum: {
    name: "Plum", fav: "build", color: "#ab47bc", pitch: 1.05, rate: 1.05,
    role: { es: "La reina del orden", ca: "La reina de l'ordre", en: "The queen of tidy", cs: "Královna pořádku", fr: "La reine du rangement" },
    hello: { es: "¡HOLA, {name}! ¡Soy Plum! ¡ORDENAR! ¡JUGAR! ¡APRENDER! Cada cosa en su sitio y un sitio para cada cosa. ¡Vamos!", ca: "HOLA, {name}! Soc la Plum! ORDENAR! JUGAR! APRENDRE! Cada cosa al seu lloc i un lloc per a cada cosa. Som-hi!", en: "HELLO, {name}! I am Plum! TIDY! PLAY! LEARN! A place for everything and everything in its place. Let's go!", cs: "AHOJ, {name}! Já jsem Plum! UKLIDIT! HRÁT! UČIT SE! Všechno má své místo. Jdeme na to!", fr: "BONJOUR, {name} ! Je suis Plum ! RANGER ! JOUER ! APPRENDRE ! Chaque chose à sa place. Allons-y !" },
    cheer: [
      { es: "¡PERFECTO! ¡Respuesta colocada en su sitio, {name}!", ca: "PERFECTE! Resposta col·locada al seu lloc, {name}!", en: "PERFECT! Answer placed exactly where it belongs, {name}!", cs: "PERFEKTNÍ! Odpověď uložena přesně na své místo, {name}!", fr: "PARFAIT ! Réponse rangée à sa place, {name} !" },
      { es: "¡BRILLANTE! Hasta mis plumeros aplauden.", ca: "BRILLANT! Fins i tot els meus plomalls aplaudeixen.", en: "BRILLIANT! Even my feather dusters are clapping.", cs: "SKVĚLÉ! I moje oprašovátka tleskají.", fr: "GÉNIAL ! Même mes plumeaux applaudissent." }
    ],
    oops: { es: "¡UPS! Esa respuesta estaba en otro cajón. Te enseño el bueno, {name}.", ca: "UPS! Aquesta resposta era en un altre calaix. T'ensenyo el bo, {name}.", en: "OOPS! That answer was in another drawer. Let me show you the right one, {name}.", cs: "JEJDA! Ta odpověď byla v jiném šuplíku. Ukážu ti ten správný, {name}.", fr: "OUPS ! Cette réponse était dans un autre tiroir. Je te montre le bon, {name} !" },
    bye: { es: "¡HASTA PRONTO, {name}! Dejo tus medallas bien ordenadas.", ca: "FINS AVIAT, {name}! Deixo les teves medalles ben ordenades.", en: "SEE YOU SOON, {name}! I will leave your medals nicely tidied up.", cs: "BRZY NA VIDĚNOU, {name}! Tvoje medaile nechám pěkně srovnané.", fr: "À BIENTÔT, {name} ! Je laisse tes médailles bien rangées." },
    svg(size, cls) {
      return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" class="${cls || ""}">
        <defs><linearGradient id="plumG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ce93d8"/><stop offset="100%" stop-color="#8e24aa"/></linearGradient></defs>
        <path d="M35 30 L65 30 L74 84 L26 84 Z" fill="url(#plumG)"/>
        <circle cx="42" cy="58" r="3.5" fill="#f3e5f5"/><circle cx="58" cy="58" r="3.5" fill="#f3e5f5"/>
        <circle cx="42" cy="70" r="3.5" fill="#f3e5f5"/><circle cx="58" cy="70" r="3.5" fill="#f3e5f5"/><circle cx="50" cy="64" r="3.5" fill="#ffd740"/>
        <rect x="40" y="18" width="20" height="14" rx="7" fill="#ba68c8"/>
        <circle cx="50" cy="25" r="5" fill="#fff"/><circle cx="50" cy="25" r="2.6" fill="#4a148c"><animate attributeName="r" values="2.6;1.4;2.6" dur="3.4s" repeatCount="indefinite"/></circle>
        <path d="M44 20 Q50 16 56 20" stroke="#4a148c" stroke-width="1.6" fill="none"/>
        <rect class="mouth" x="44" y="38" width="12" height="4" rx="2" fill="#4a148c"/>
        <line x1="30" y1="46" x2="14" y2="40" stroke="#8e24aa" stroke-width="4" stroke-linecap="round"/>
        <g><line x1="14" y1="40" x2="9" y2="34" stroke="#ffd740" stroke-width="2"/><line x1="14" y1="40" x2="7" y2="40" stroke="#ffd740" stroke-width="2"/><line x1="14" y1="40" x2="9" y2="46" stroke="#ffd740" stroke-width="2"/>
          <animateTransform attributeName="transform" type="rotate" values="-10 14 40;10 14 40;-10 14 40" dur="1s" repeatCount="indefinite"/></g>
        <line x1="70" y1="46" x2="86" y2="40" stroke="#8e24aa" stroke-width="4" stroke-linecap="round"/>
        <g><line x1="86" y1="40" x2="91" y2="34" stroke="#ffd740" stroke-width="2"/><line x1="86" y1="40" x2="93" y2="40" stroke="#ffd740" stroke-width="2"/><line x1="86" y1="40" x2="91" y2="46" stroke="#ffd740" stroke-width="2"/>
          <animateTransform attributeName="transform" type="rotate" values="10 86 40;-10 86 40;10 86 40" dur="1s" repeatCount="indefinite"/></g>
        <ellipse cx="50" cy="88" rx="26" ry="4" fill="#4a148c" opacity=".5"/>
      </svg>`;
    }
  },

  piqui: {
    name: "Piqui", fav: "karaoke", color: "#ff9800", pitch: 1.3, rate: 1.05,
    role: { es: "La saltarina cantarina", ca: "La saltadora cantaire", en: "The bouncy singer", cs: "Skákavá zpěvačka", fr: "La sauteuse chanteuse" },
    hello: { es: "¡Bidi-bidi-bidi! ¡Hola {name}! Soy Piqui. Yo todo lo digo cantando, ¿cantamos y saltamos juntos?", ca: "Bidi-bidi-bidi! Hola {name}! Soc la Piqui. Jo tot ho dic cantant. Cantem i saltem junts?", en: "Bidi-bidi-bidi! Hi {name}! I am Piqui. I say everything singing. Shall we sing and bounce together?", cs: "Bidi-bidi-bidi! Ahoj {name}! Já jsem Piqui. Všechno říkám zpěvem. Budeme spolu zpívat a skákat?", fr: "Bidi-bidi-bidi ! Salut {name} ! Je suis Piqui. Je dis tout en chantant. On chante et on saute ensemble ?" },
    cheer: [
      { es: "¡Bidi-bidi! ¡Lalalá! ¡Acierto redondo, {name}!", ca: "Bidi-bidi! Lalalà! Encert rodó, {name}!", en: "Bidi-bidi! Lalala! A perfect hit, {name}!", cs: "Bidi-bidi! Lalala! Přesná trefa, {name}!", fr: "Bidi-bidi ! Lalala ! Dans le mille, {name} !" },
      { es: "¡Toco las maracas de la victoria! ¡Chiki-chiki!", ca: "Toco les maraques de la victòria! Xiqui-xiqui!", en: "I am shaking my victory maracas! Shiki-shiki!", cs: "Chrastím vítěznými rumba koulemi! Šiki-šiki!", fr: "Je secoue mes maracas de la victoire ! Chiki-chiki !" }
    ],
    oops: { es: "¡Bidi! Casi casi... La música vuelve a empezar, ¡otra vez!", ca: "Bidi! Gairebé... La música torna a començar. Un altre cop!", en: "Bidi! So close... The music starts again. One more time!", cs: "Bidi! Skoro... Hudba začíná znovu. Ještě jednou!", fr: "Bidi ! Presque... La musique recommence. Encore une fois !" },
    bye: { es: "¡Bidi-bidi! Me voy bailando. ¡Hasta pronto, {name}!", ca: "Bidi-bidi! Me'n vaig ballant. Fins aviat, {name}!", en: "Bidi-bidi! I am dancing away. See you soon, {name}!", cs: "Bidi-bidi! Odtančím pryč. Brzy na viděnou, {name}!", fr: "Bidi-bidi ! Je pars en dansant. À bientôt, {name} !" },
    svg(size, cls) {
      return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" class="${cls || ""}">
        <defs><linearGradient id="piqG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffcc80"/><stop offset="100%" stop-color="#fb8c00"/></linearGradient></defs>
        <circle cx="50" cy="34" r="20" fill="url(#piqG)"/>
        <path d="M30 30 Q50 12 70 30 L70 26 Q50 8 30 26 Z" fill="#e65100"/>
        <circle cx="43" cy="33" r="5" fill="#fff"/><circle cx="43" cy="33" r="2.6" fill="#3e2723"><animate attributeName="cx" values="43;44;43" dur="3s" repeatCount="indefinite"/></circle>
        <circle cx="57" cy="33" r="5" fill="#fff"/><circle cx="57" cy="33" r="2.6" fill="#3e2723"><animate attributeName="cx" values="57;58;57" dur="3s" repeatCount="indefinite"/></circle>
        <path class="mouth" d="M43 42 Q50 48 57 42" stroke="#3e2723" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <rect x="38" y="54" width="24" height="24" rx="10" fill="url(#piqG)"/>
        <circle cx="50" cy="64" r="4" fill="#fff3e0"/><path d="M50 61 v6 M47 64 h6" stroke="#e65100" stroke-width="1.4"/>
        <line x1="38" y1="60" x2="26" y2="52" stroke="#fb8c00" stroke-width="4" stroke-linecap="round"/>
        <line x1="62" y1="60" x2="76" y2="50" stroke="#fb8c00" stroke-width="4" stroke-linecap="round"/>
        <text x="78" y="48" font-size="12">🎵<animateTransform attributeName="transform" type="translate" values="0 0;0 -6;0 0" dur="1.4s" repeatCount="indefinite"/></text>
        <rect x="41" y="78" width="7" height="12" rx="3" fill="#e65100"/><rect x="52" y="78" width="7" height="12" rx="3" fill="#e65100"/>
      </svg>`;
    }
  },

  luna: {
    name: "Luna", fav: "story", color: "#f06292", pitch: 0.95, rate: 0.88,
    role: { es: "La cuentacuentos tranquila", ca: "La contacontes tranquil·la", en: "The calm storyteller", cs: "Klidná vypravěčka", fr: "La conteuse tranquille" },
    hello: { es: "Hola, {name}... Soy Luna. Nunca me apago, así que siempre, siempre, tendré un cuento guardado para ti.", ca: "Hola, {name}... Soc la Luna. Mai no m'apago, així que sempre, sempre, tindré un conte guardat per a tu.", en: "Hello, {name}... I am Luna. I never switch off, so I will always, always have a story saved for you.", cs: "Ahoj, {name}... Já jsem Luna. Nikdy se nevypínám, takže pro tebe vždycky, vždycky budu mít schovaný příběh.", fr: "Bonjour, {name}... Je suis Luna. Je ne m'éteins jamais, alors j'aurai toujours, toujours une histoire pour toi." },
    cheer: [
      { es: "Muy bien, {name}... Mi ojo brilla despacito de orgullo.", ca: "Molt bé, {name}... El meu ull brilla a poc a poc d'orgull.", en: "Well done, {name}... My eye is glowing softly with pride.", cs: "Výborně, {name}... Moje oko tiše září pýchou.", fr: "Bravo, {name}... Mon œil brille doucement de fierté." },
      { es: "Precioso. Esa respuesta merece un cuento extra esta noche.", ca: "Preciós. Aquesta resposta mereix un conte extra aquesta nit.", en: "Beautiful. That answer deserves an extra story tonight.", cs: "Nádhera. Ta odpověď si zaslouží dnes večer příběh navíc.", fr: "Magnifique. Cette réponse mérite une histoire en plus ce soir." }
    ],
    oops: { es: "Tranquilo, tranquilo... Casi. Escucha, te cuento la respuesta como un secreto.", ca: "Tranquil, tranquil... Gairebé. Escolta, t'explico la resposta com un secret.", en: "Easy, easy... Almost. Listen, I will tell you the answer like a secret.", cs: "Klid, klid... Skoro. Poslouchej, povím ti odpověď jako tajemství.", fr: "Doucement, doucement... Presque. Écoute, je te dis la réponse comme un secret." },
    bye: { es: "Que descanses, {name}. Yo me quedo encendida, cuidando tus cuentos.", ca: "Que descansis, {name}. Jo em quedo encesa, cuidant els teus contes.", en: "Rest well, {name}. I will stay on, looking after your stories.", cs: "Hezky odpočívej, {name}. Já zůstanu zapnutá a pohlídám tvoje příběhy.", fr: "Repose-toi bien, {name}. Je reste allumée pour garder tes histoires." },
    svg(size, cls) {
      return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" class="${cls || ""}">
        <defs><radialGradient id="lunaG" cx="45%" cy="35%"><stop offset="0%" stop-color="#f8bbd0"/><stop offset="100%" stop-color="#c2185b"/></radialGradient>
        <radialGradient id="lunaEye" cx="50%" cy="45%"><stop offset="0%" stop-color="#fff"/><stop offset="55%" stop-color="#f48fb1"/><stop offset="100%" stop-color="#880e4f"/></radialGradient></defs>
        <rect x="26" y="22" width="48" height="56" rx="22" fill="url(#lunaG)"/>
        <circle cx="50" cy="44" r="14" fill="url(#lunaEye)"/>
        <circle cx="50" cy="44" r="6" fill="#4a0e2e"><animate attributeName="r" values="6;4.6;6" dur="5s" repeatCount="indefinite"/></circle>
        <circle cx="46" cy="40" r="2.4" fill="#fff"/>
        <path class="mouth" d="M43 63 Q50 68 57 63" stroke="#4a0e2e" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <path d="M64 16 Q76 18 74 30 Q70 24 64 24 Z" fill="#ffd740"/>
        <circle cx="34" cy="30" r="1.6" fill="#fff"><animate attributeName="opacity" values="1;.2;1" dur="2.8s" repeatCount="indefinite"/></circle>
        <circle cx="66" cy="60" r="1.6" fill="#fff"><animate attributeName="opacity" values=".2;1;.2" dur="3.4s" repeatCount="indefinite"/></circle>
        <rect x="34" y="78" width="12" height="10" rx="4" fill="#880e4f"/><rect x="54" y="78" width="12" height="10" rx="4" fill="#880e4f"/>
      </svg>`;
    }
  },

  datia: {
    name: "Datia", fav: "math", color: "#26a69a", pitch: 1.05, rate: 0.97,
    role: { es: "La curiosa de las mates", ca: "La curiosa de les mates", en: "The math-curious one", cs: "Zvědavá počtářka", fr: "La curieuse des maths" },
    hello: { es: "Hola, {name}. Soy Datia. Estoy aprendiendo a ser como tú: a reír, a jugar, a equivocarme. ¿Me enseñas mientras contamos cosas?", ca: "Hola, {name}. Soc la Datia. Estic aprenent a ser com tu: a riure, a jugar, a equivocar-me. M'ensenyes mentre comptem coses?", en: "Hello, {name}. I am Datia. I am learning to be like you: to laugh, to play, to make mistakes. Will you teach me while we count things?", cs: "Ahoj, {name}. Já jsem Datia. Učím se být jako ty: smát se, hrát si a dělat chyby. Naučíš mě to, zatímco budeme počítat?", fr: "Bonjour, {name}. Je suis Datia. J'apprends à être comme toi : à rire, à jouer, à me tromper. Tu m'apprends pendant qu'on compte ?" },
    cheer: [
      { es: "Resultado correcto al cien por cien. Y además... ¡me has hecho sonreír, {name}!", ca: "Resultat correcte al cent per cent. I a més... m'has fet somriure, {name}!", en: "One hundred percent correct. And also... you made me smile, {name}!", cs: "Stoprocentně správný výsledek. A navíc... rozesmála jsi mě, {name}!", fr: "Résultat correct à cent pour cent. Et en plus... tu m'as fait sourire, {name} !" },
      { es: "Mis cálculos dicen que eres increíble. Los he repetido tres veces.", ca: "Els meus càlculs diuen que ets increïble. Els he repetit tres vegades.", en: "My calculations say you are amazing. I ran them three times.", cs: "Moje výpočty říkají, že jsi úžasná. Přepočítala jsem je třikrát.", fr: "Mes calculs disent que tu es incroyable. Je les ai refaits trois fois." }
    ],
    oops: { es: "Interesante. No era esa, pero equivocarse también enseña. Mira, te lo cuento.", ca: "Interessant. No era aquesta, però equivocar-se també ensenya. Mira, t'ho explico.", en: "Interesting. Not that one, but mistakes teach us too. Look, let me explain.", cs: "Zajímavé. Tahle to nebyla, ale i chyby nás učí. Podívej, vysvětlím ti to.", fr: "Intéressant. Ce n'était pas celle-là, mais se tromper apprend aussi. Regarde, je t'explique." },
    bye: { es: "Hoy he aprendido mucho de ti, {name}. Lo guardo todo en mi corazón de datos.", ca: "Avui he après molt de tu, {name}. Ho guardo tot al meu cor de dades.", en: "I learned a lot from you today, {name}. I am saving it all in my data heart.", cs: "Dnes jsem se od tebe hodně naučila, {name}. Všechno si ukládám do svého datového srdíčka.", fr: "Aujourd'hui j'ai beaucoup appris de toi, {name}. Je garde tout dans mon cœur de données." },
    svg(size, cls) {
      return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" class="${cls || ""}">
        <defs><linearGradient id="datG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#80cbc4"/><stop offset="100%" stop-color="#00897b"/></linearGradient></defs>
        <rect x="32" y="16" width="36" height="30" rx="8" fill="url(#datG)"/>
        <rect x="38" y="26" width="9" height="7" rx="2" fill="#e0f2f1"/><circle cx="42.5" cy="29.5" r="2" fill="#004d40"><animate attributeName="cy" values="29.5;30.5;29.5" dur="3.6s" repeatCount="indefinite"/></circle>
        <rect x="53" y="26" width="9" height="7" rx="2" fill="#e0f2f1"/><circle cx="57.5" cy="29.5" r="2" fill="#004d40"><animate attributeName="cy" values="29.5;30.5;29.5" dur="3.6s" repeatCount="indefinite"/></circle>
        <path d="M37 23 L46 21 M54 21 L63 23" stroke="#004d40" stroke-width="1.8"/>
        <rect class="mouth" x="43" y="38" width="14" height="4" rx="2" fill="#004d40"/>
        <rect x="36" y="48" width="28" height="32" rx="8" fill="url(#datG)"/>
        <path d="M50 56 l3 4 h-6 Z M44 68 h12 M44 72 h12" stroke="#e0f2f1" stroke-width="2" fill="#e0f2f1"/>
        <text x="40" y="64" font-size="8" fill="#e0f2f1">123</text>
        <rect x="26" y="50" width="8" height="22" rx="4" fill="#00695c"/>
        <rect x="66" y="50" width="8" height="22" rx="4" fill="#00695c"/>
        <rect x="39" y="80" width="9" height="10" rx="3" fill="#004d40"/><rect x="52" y="80" width="9" height="10" rx="3" fill="#004d40"/>
        <line x1="50" y1="16" x2="50" y2="9" stroke="#00897b" stroke-width="2.5"/><circle cx="50" cy="7" r="2.6" fill="#ffd740"/>
      </svg>`;
    }
  },

  chispa: {
    name: "Chispa", fav: "chat", color: "#ef5350", pitch: 0.85, rate: 1.02,
    role: { es: "El bromista chispeante", ca: "El bromista espurnejant", en: "The sparky joker", cs: "Jiskřivý vtipálek", fr: "Le blagueur pétillant" },
    hello: { es: "¡Chispas! ¡Hola {name}! Soy Chispa. Aviso importante: mis chistes son malísimos. ¡Por eso hacen tanta gracia!", ca: "Espurnes! Hola {name}! Soc en Chispa. Avís important: els meus acudits són dolentíssims. Per això fan tanta gràcia!", en: "Sparks! Hi {name}! I am Chispa. Important warning: my jokes are terrible. That is why they are so funny!", cs: "Jiskry! Ahoj {name}! Já jsem Chispa. Důležité varování: moje vtipy jsou příšerné. Právě proto jsou tak vtipné!", fr: "Des étincelles ! Salut {name} ! Je suis Chispa. Avis important : mes blagues sont nulles. C'est pour ça qu'elles sont si drôles !" },
    cheer: [
      { es: "¡Chispas! ¡Correcto! Choca esa antena, {name}.", ca: "Espurnes! Correcte! Xoca aquesta antena, {name}.", en: "Sparks! Correct! High-five my antenna, {name}.", cs: "Jiskry! Správně! Plácni si s mou anténou, {name}.", fr: "Des étincelles ! Correct ! Tape dans mon antenne, {name} !" },
      { es: "¡Toma ya! Eres más lista que mi antena, y eso que la tengo doblada de tanto pensar.", ca: "Visca! Ets més llesta que la meva antena, i això que la tinc doblegada de tant pensar.", en: "Boom! You are smarter than my antenna, and mine is bent from all that thinking.", cs: "Paráda! Jsi chytřejší než moje anténa, a to ji mám ohnutou od samého přemýšlení.", fr: "Et voilà ! Tu es plus futée que mon antenne, et pourtant elle est tordue à force de penser." }
    ],
    oops: { es: "¡Chispas! Fallé yo también, no se lo digas a nadie. Va, la respuesta buena era esta...", ca: "Espurnes! Jo també he fallat, no ho diguis a ningú. Va, la resposta bona era aquesta...", en: "Sparks! I got it wrong too, do not tell anyone. Okay, the right answer was this one...", cs: "Jiskry! Já to taky spletl, nikomu to neříkej. Tak jo, správná odpověď byla tahle...", fr: "Des étincelles ! Moi aussi je me suis trompé, ne le dis à personne. Allez, la bonne réponse était celle-ci..." },
    bye: { es: "Me voy antes de que se me ocurra otro chiste malo. ¡Demasiado tarde! ¡Adiós, {name}!", ca: "Me'n vaig abans que se m'acudeixi un altre acudit dolent. Massa tard! Adéu, {name}!", en: "I am leaving before I think of another bad joke. Too late! Bye, {name}!", cs: "Mizím, než mě napadne další špatný vtip. Pozdě! Ahoj, {name}!", fr: "Je pars avant d'avoir une autre mauvaise blague. Trop tard ! Au revoir, {name} !" },
    svg(size, cls) {
      return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" class="${cls || ""}">
        <defs><linearGradient id="chiG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ef9a9a"/><stop offset="100%" stop-color="#d32f2f"/></linearGradient></defs>
        <rect x="34" y="20" width="32" height="26" rx="12" fill="url(#chiG)"/>
        <ellipse cx="44" cy="31" rx="4.5" ry="5.5" fill="#fff"/><circle cx="44" cy="32" r="2.4" fill="#b71c1c"/>
        <ellipse cx="56" cy="31" rx="4.5" ry="5.5" fill="#fff"/><circle cx="56" cy="32" r="2.4" fill="#b71c1c"/>
        <path class="mouth" d="M41 39 Q50 46 59 39" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/>
        <path d="M50 20 L50 14 L58 8" stroke="#b71c1c" stroke-width="3" fill="none" stroke-linecap="round"/>
        <circle cx="59" cy="7" r="2.6" fill="#ffd740"><animate attributeName="opacity" values="1;.3;1" dur="1.2s" repeatCount="indefinite"/></circle>
        <rect x="36" y="48" width="28" height="30" rx="9" fill="url(#chiG)"/>
        <circle cx="50" cy="58" r="4.5" fill="#ffd740"/><path d="M49 55 l-2 4 h3 l-2 4" stroke="#b71c1c" stroke-width="1.4" fill="none"/>
        <rect x="26" y="50" width="8" height="20" rx="4" fill="#c62828" transform="rotate(14 30 60)"/>
        <rect x="66" y="50" width="8" height="20" rx="4" fill="#c62828" transform="rotate(-14 70 60)"/>
        <rect x="39" y="78" width="9" height="11" rx="3" fill="#8e0000"/><rect x="52" y="78" width="9" height="11" rx="3" fill="#8e0000"/>
      </svg>`;
    }
  }
};

/* Ninobot, el anfitrión de la Roboteca */
const NINOBOT_SVG = (size, cls) => `<svg viewBox="0 0 100 100" width="${size}" height="${size}" class="${cls || ""}">
  <defs><linearGradient id="ninoG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#b39ddb"/><stop offset="100%" stop-color="#5e35b1"/></linearGradient></defs>
  <rect x="30" y="18" width="40" height="32" rx="12" fill="url(#ninoG)"/>
  <circle cx="42" cy="32" r="6" fill="#fff"/><circle cx="42" cy="32" r="3" fill="#311b92"><animate attributeName="r" values="3;1.8;3" dur="4s" repeatCount="indefinite"/></circle>
  <circle cx="58" cy="32" r="6" fill="#fff"/><circle cx="58" cy="32" r="3" fill="#311b92"><animate attributeName="r" values="3;1.8;3" dur="4s" repeatCount="indefinite"/></circle>
  <path class="mouth" d="M42 42 Q50 48 58 42" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/>
  <line x1="50" y1="18" x2="50" y2="10" stroke="#7e57c2" stroke-width="3"/>
  <path d="M50 4 C47 6.5 47 9.5 50 11 C53 9.5 53 6.5 50 4 Z" fill="#ff4081"><animate attributeName="opacity" values="1;.55;1" dur="1.8s" repeatCount="indefinite"/></path>
  <rect x="34" y="52" width="32" height="30" rx="10" fill="url(#ninoG)"/>
  <circle cx="50" cy="64" r="6" fill="#ffd740"/><path d="M50 60.5 C48 62 48 64 50 65.5 C52 64 52 62 50 60.5 Z" fill="#d81b60"/>
  <rect x="24" y="54" width="8" height="22" rx="4" fill="#4527a0"/>
  <rect x="68" y="54" width="8" height="22" rx="4" fill="#4527a0"/>
  <rect x="38" y="82" width="10" height="9" rx="3" fill="#311b92"/><rect x="52" y="82" width="10" height="9" rx="3" fill="#311b92"/>
</svg>`;

/* Retrato del peque: piel y pelo elegidos en la configuración */
const SKIN_TONES = ["#FFE0BD", "#F1C27D", "#C68642", "#8D5524", "#5C3310"];
const HAIR_COLORS = ["#3B2300", "#161616", "#6d4c41", "#fbc02d", "#e64a19", "#ab47bc"];

function childPortrait(size) {
  const skin = SKIN_TONES[S.child.skin != null ? S.child.skin : 1] || SKIN_TONES[1];
  const hair = HAIR_COLORS[S.child.hair != null ? S.child.hair : 0] || HAIR_COLORS[0];
  const g = S.child.gender;
  const dark = (S.child.skin || 0) >= 3;
  const line = dark ? "#ffe4cc" : "#4a2c1a";
  let hairBack = "", hairFront = "";
  if (g === "girl") {
    hairBack = `<path d="M20 50 Q16 88 26 94 L38 90 L34 60 Z" fill="${hair}"/><path d="M80 50 Q84 88 74 94 L62 90 L66 60 Z" fill="${hair}"/>`;
    hairFront = `<path d="M22 52 Q20 24 50 22 Q80 24 78 52 L72 44 Q70 34 60 34 Q52 30 44 34 Q32 34 30 46 Z" fill="${hair}"/>`;
  } else if (g === "boy") {
    hairFront = `<path d="M24 48 Q24 26 50 24 Q76 26 76 48 L70 40 Q62 32 50 33 Q38 32 30 42 Z" fill="${hair}"/>`;
  } else {
    hairFront = `<path d="M26 48 Q24 24 50 22 Q76 24 74 48 L68 38 L60 44 L50 32 L40 44 L32 38 Z" fill="${hair}"/>`;
  }
  return `<svg viewBox="0 0 100 100" width="${size}" height="${size}">
    <circle cx="50" cy="50" r="48" fill="none" stroke="#FFD700" stroke-width="2" stroke-dasharray="6 4" opacity=".55">
      <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="20s" repeatCount="indefinite"/></circle>
    ${hairBack}
    <circle cx="50" cy="54" r="27" fill="${skin}"/>
    <circle cx="22" cy="56" r="5" fill="${skin}"/><circle cx="78" cy="56" r="5" fill="${skin}"/>
    ${hairFront}
    <circle cx="41" cy="54" r="3" fill="${dark ? "#1d0f06" : "#332014"}"/><circle cx="42" cy="53" r="1" fill="#fff"/>
    <circle cx="59" cy="54" r="3" fill="${dark ? "#1d0f06" : "#332014"}"/><circle cx="60" cy="53" r="1" fill="#fff"/>
    <path d="M36 47 Q41 44 46 47 M54 47 Q59 44 64 47" stroke="${line}" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    <circle cx="36" cy="62" r="4" fill="rgba(255,110,140,.4)"/><circle cx="64" cy="62" r="4" fill="rgba(255,110,140,.4)"/>
    <path d="M42 66 Q50 73 58 66" stroke="${line}" stroke-width="2.4" fill="none" stroke-linecap="round"/>
  </svg>`;
}

function robot() { return ROBOTS[S.robot] || ROBOTS.ninobot; }

function robotSay(text, opts) {
  const r = robot();
  const o = opts || {};
  Speech.say(text, Object.assign({}, o));
}

// Habla con la voz del robot activo (pitch propio).
const _origSayNext = Speech.next.bind(Speech);
Speech.next = function () {
  if (this.speaking || !this.queue.length) return;
  const item = this.queue[0];
  const r = robot();
  if (item && !item._tuned) { item.pitch = Math.min(2, item.pitch * (r.pitch || 1)); item.rate = item.rate * (r.rate || 1); item._tuned = true; }
  _origSayNext();
};
