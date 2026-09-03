"use strict";

// ============================================================
// 90-celebrations.js: datos de celebración del taller
// Fiesta al guardar la creación en las 9 aventuras que solo
// tenían confeti. El motor genérico (overlay, animaciones y
// playJingle) vive aparte; aquí SOLO datos y frases.
//   bg    : fondo CSS del overlay a pantalla completa
//   extra : SVG decorativo de fondo (viewBox 0 0 1000 700,
//           preserveAspectRatio="none", se pinta detrás)
//   move  : clase de animación de la creación
//           (bob | sink | jump | shine | rock | heal)
//   say   : frase del robot en es/ca/en/cs/fr ({name} opcional)
//   jingle: opcional, para el sintetizador global playJingle
// ============================================================

const CELEBRATIONS = {

  // ---- Cuerpo humano: "¡Hazte médico o enfermera!" ----
  cuerpo: {
    bg: "radial-gradient(circle at 50% 30%, #ffe9ec 0%, #ffc7d1 45%, #f79cae 100%)",
    extra: "<svg viewBox='0 0 1000 700' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 380 L240 380 L280 320 L320 440 L360 380 L620 380 L660 325 L700 435 L740 380 L1000 380' fill='none' stroke='#ffffff' stroke-width='6' stroke-linecap='round' stroke-linejoin='round' opacity='0.35'/><path d='M180 150 C160 128 128 150 150 176 L180 204 L210 176 C232 150 200 128 180 150 Z' fill='#ffffff' opacity='0.3'/><path d='M840 190 C824 172 798 190 816 211 L840 233 L864 211 C882 190 856 172 840 190 Z' fill='#ffffff' opacity='0.25'/><path d='M520 90 C508 76 488 90 502 106 L520 122 L538 106 C552 90 532 76 520 90 Z' fill='#ffffff' opacity='0.22'/><path d='M120 520 h26 v-26 h26 v26 h26 v26 h-26 v26 h-26 v-26 h-26 z' fill='#ffffff' opacity='0.2'/><path d='M860 500 h22 v-22 h22 v22 h22 v22 h-22 v22 h-22 v-22 h-22 z' fill='#ffffff' opacity='0.18'/><path d='M300 600 h18 v-18 h18 v18 h18 v18 h-18 v18 h-18 v-18 h-18 z' fill='#ffffff' opacity='0.16'/><path d='M680 610 h18 v-18 h18 v18 h18 v18 h-18 v18 h-18 v-18 h-18 z' fill='#ffffff' opacity='0.16'/><circle cx='90' cy='120' r='10' fill='#ffffff' opacity='0.2'/><circle cx='930' cy='90' r='8' fill='#ffffff' opacity='0.18'/><circle cx='950' cy='620' r='12' fill='#ffffff' opacity='0.15'/><circle cx='60' cy='640' r='9' fill='#ffffff' opacity='0.15'/></svg>",
    move: "heal",
    say: {
      es: "¡{name}, ya puedes curar a todo el mundo!",
      ca: "{name}, ja pots curar tothom!",
      en: "{name}, now you can heal everyone!",
      cs: "{name}, teď můžeš uzdravit úplně všechny!",
      fr: "{name}, tu peux soigner tout le monde maintenant !"
    },
    jingle: { type: "melody", instr: "harp", notes: [60, 64, 67, 72], nd: 0.25, gap: 0.18, vol: 0.12 }
  },

  // ---- Tierra Media: "¡Forja tu propia espada!" ----
  tierramedia: {
    bg: "linear-gradient(180deg, #a8d8f0 0%, #cdeaa9 55%, #7fbf6a 100%)",
    extra: "<svg viewBox='0 0 1000 700' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'><circle cx='830' cy='120' r='70' fill='#fff3b0' opacity='0.8'/><ellipse cx='180' cy='95' rx='90' ry='26' fill='#ffffff' opacity='0.55'/><ellipse cx='420' cy='150' rx='70' ry='20' fill='#ffffff' opacity='0.45'/><ellipse cx='640' cy='80' rx='60' ry='18' fill='#ffffff' opacity='0.4'/><path d='M0 430 Q250 300 520 430 T1000 420 L1000 700 L0 700 Z' fill='#8ecf7a' opacity='0.9'/><path d='M0 520 Q300 420 620 520 T1000 500 L1000 700 L0 700 Z' fill='#6fb75d' opacity='0.9'/><path d='M0 620 Q400 540 1000 610 L1000 700 L0 700 Z' fill='#579a48' opacity='0.95'/><circle cx='300' cy='520' r='58' fill='#8a5a33'/><circle cx='300' cy='520' r='46' fill='#f2c94c'/><circle cx='318' cy='520' r='6' fill='#6b4423'/><ellipse cx='700' cy='470' rx='40' ry='50' fill='#4c8b3f' opacity='0.9'/><rect x='694' y='500' width='12' height='36' fill='#7a4e2a' opacity='0.9'/><ellipse cx='120' cy='420' rx='34' ry='42' fill='#4c8b3f' opacity='0.85'/><rect x='115' y='445' width='10' height='30' fill='#7a4e2a' opacity='0.85'/><path d='M540 585 q20 -14 40 0' stroke='#e8f5d0' stroke-width='5' fill='none' opacity='0.5'/></svg>",
    move: "rock",
    say: {
      es: "¡Tu espada brilla lista para la aventura, {name}!",
      ca: "La teva espasa brilla a punt per a l'aventura, {name}!",
      en: "Your sword shines ready for adventure, {name}!",
      cs: "Tvůj meč se leskne a dobrodružství volá, {name}!",
      fr: "Ton épée brille, prête pour l'aventure, {name} !"
    },
    jingle: { type: "melody", instr: "bow", notes: [62, 66, 69, 74], nd: 0.3, gap: 0.22, vol: 0.13 }
  },

  // ---- Océano: "¡Construye tu submarino!" ----
  oceano: {
    bg: "linear-gradient(180deg, #0a3d62 0%, #145a8a 45%, #0b2e4f 100%)",
    extra: "<svg viewBox='0 0 1000 700' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 120 Q125 80 250 120 T500 120 T750 120 T1000 120 L1000 0 L0 0 Z' fill='#7ec8e3' opacity='0.25'/><path d='M0 200 Q166 160 333 200 T666 200 T1000 200' fill='none' stroke='#9fd8ef' stroke-width='8' opacity='0.3'/><path d='M0 320 Q200 285 400 320 T800 320 T1200 320' fill='none' stroke='#8fd0e8' stroke-width='7' opacity='0.22'/><path d='M0 460 Q250 425 500 460 T1000 460' fill='none' stroke='#7fc4de' stroke-width='6' opacity='0.18'/><circle cx='150' cy='560' r='14' fill='none' stroke='#cdeef7' stroke-width='3' opacity='0.5'/><circle cx='185' cy='500' r='9' fill='none' stroke='#cdeef7' stroke-width='3' opacity='0.45'/><circle cx='160' cy='440' r='6' fill='none' stroke='#cdeef7' stroke-width='2' opacity='0.4'/><circle cx='840' cy='600' r='16' fill='none' stroke='#cdeef7' stroke-width='3' opacity='0.5'/><circle cx='870' cy='530' r='10' fill='none' stroke='#cdeef7' stroke-width='3' opacity='0.45'/><circle cx='845' cy='465' r='7' fill='none' stroke='#cdeef7' stroke-width='2' opacity='0.4'/><circle cx='520' cy='640' r='11' fill='none' stroke='#cdeef7' stroke-width='3' opacity='0.4'/><circle cx='555' cy='585' r='7' fill='none' stroke='#cdeef7' stroke-width='2' opacity='0.35'/><path d='M0 660 Q250 630 500 660 T1000 660 L1000 700 L0 700 Z' fill='#0e4a75' opacity='0.6'/></svg>",
    move: "sink",
    say: {
      es: "¡Tu submarino se sumerge en el gran océano, {name}!",
      ca: "El teu submarí s'endinsa al gran oceà, {name}!",
      en: "Your submarine is diving into the deep ocean, {name}!",
      cs: "Tvoje ponorka se noří do hlubokého oceánu, {name}!",
      fr: "Ton sous-marin plonge dans le grand océan, {name} !"
    },
    jingle: { type: "melody", instr: "flute", notes: [48, 52, 55, 50], nd: 0.4, gap: 0.3, vol: 0.14 }
  },

  // ---- Animales: "¡Inventa tu animal fantástico!" ----
  animales: {
    bg: "linear-gradient(180deg, #ffe3a3 0%, #ffc46b 50%, #e89b4e 100%)",
    extra: "<svg viewBox='0 0 1000 700' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'><circle cx='840' cy='120' r='64' fill='#fff0b3' opacity='0.85'/><path d='M0 500 Q300 440 600 500 T1000 480 L1000 700 L0 700 Z' fill='#e8b05e' opacity='0.8'/><path d='M0 600 Q400 550 1000 600 L1000 700 L0 700 Z' fill='#c98a3f' opacity='0.85'/><rect x='150' y='380' width='14' height='90' fill='#8a5a33'/><path d='M60 380 Q157 300 260 380 Q157 355 60 380 Z' fill='#5e8f3e' opacity='0.9'/><rect x='700' y='420' width='10' height='60' fill='#8a5a33' opacity='0.9'/><path d='M640 420 Q705 365 775 420 Q705 402 640 420 Z' fill='#5e8f3e' opacity='0.85'/><ellipse cx='330' cy='590' rx='16' ry='12' fill='#8a5a33' opacity='0.5'/><circle cx='316' cy='572' r='5' fill='#8a5a33' opacity='0.5'/><circle cx='328' cy='568' r='5' fill='#8a5a33' opacity='0.5'/><circle cx='341' cy='570' r='5' fill='#8a5a33' opacity='0.5'/><ellipse cx='430' cy='630' rx='16' ry='12' fill='#8a5a33' opacity='0.45'/><circle cx='416' cy='612' r='5' fill='#8a5a33' opacity='0.45'/><circle cx='428' cy='608' r='5' fill='#8a5a33' opacity='0.45'/><circle cx='441' cy='610' r='5' fill='#8a5a33' opacity='0.45'/><ellipse cx='540' cy='595' rx='16' ry='12' fill='#8a5a33' opacity='0.4'/><circle cx='526' cy='577' r='5' fill='#8a5a33' opacity='0.4'/><circle cx='538' cy='573' r='5' fill='#8a5a33' opacity='0.4'/><circle cx='551' cy='575' r='5' fill='#8a5a33' opacity='0.4'/></svg>",
    move: "jump",
    say: {
      es: "¡Tu animal fantástico salta de alegría, {name}!",
      ca: "El teu animal fantàstic salta d'alegria, {name}!",
      en: "Your fantastic animal is jumping for joy, {name}!",
      cs: "Tvoje fantastické zvíře skáče radostí, {name}!",
      fr: "Ton animal fantastique saute de joie, {name} !"
    },
    jingle: { type: "melody", instr: "xylo", notes: [67, 72, 76, 79], nd: 0.18, gap: 0.14, vol: 0.15 }
  },

  // ---- Música: "¡Construye tu guitarra!" ----
  musica: {
    bg: "radial-gradient(ellipse at 50% 0%, #5a4a7a 0%, #2b2140 45%, #171026 100%)",
    extra: "<svg viewBox='0 0 1000 700' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'><polygon points='300,0 120,700 480,700' fill='#fff6c9' opacity='0.14'/><polygon points='700,0 520,700 880,700' fill='#fff6c9' opacity='0.14'/><polygon points='500,0 380,700 620,700' fill='#ffffff' opacity='0.1'/><circle cx='170' cy='210' r='16' fill='#f2d16b' opacity='0.7'/><rect x='184' y='140' width='6' height='72' fill='#f2d16b' opacity='0.7'/><circle cx='840' cy='260' r='14' fill='#e8b4e0' opacity='0.65'/><rect x='852' y='196' width='6' height='66' fill='#e8b4e0' opacity='0.65'/><circle cx='250' cy='520' r='13' fill='#9ad0f0' opacity='0.6'/><rect x='261' y='458' width='5' height='64' fill='#9ad0f0' opacity='0.6'/><circle cx='760' cy='540' r='15' fill='#f2d16b' opacity='0.55'/><rect x='773' y='474' width='6' height='68' fill='#f2d16b' opacity='0.55'/><circle cx='80' cy='400' r='4' fill='#ffffff' opacity='0.5'/><circle cx='930' cy='420' r='5' fill='#ffffff' opacity='0.5'/><circle cx='500' cy='120' r='4' fill='#ffffff' opacity='0.45'/><circle cx='420' cy='640' r='4' fill='#ffffff' opacity='0.4'/><circle cx='610' cy='90' r='3' fill='#ffffff' opacity='0.4'/></svg>",
    move: "rock",
    say: {
      es: "¡Que suene la música, {name}! Tu guitarra ya toca.",
      ca: "Que soni la música, {name}! La teva guitarra ja toca.",
      en: "Let the music play, {name}! Your guitar is rocking.",
      cs: "Ať hraje hudba, {name}! Tvoje kytara už zní.",
      fr: "Que la musique joue, {name} ! Ta guitare est prête."
    },
    jingle: { type: "melody", instr: "pluck", notes: [64, 67, 71, 76], nd: 0.3, gap: 0.22, vol: 0.15 }
  },

  // ---- Increíbles: "¡Diseña tu insignia de valiente!" ----
  increibles: {
    bg: "linear-gradient(180deg, #1b2a6b 0%, #2f3fa0 55%, #151d4d 100%)",
    extra: "<svg viewBox='0 0 1000 700' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'><path d='M180 90 L190 122 L222 132 L190 142 L180 174 L170 142 L138 132 L170 122 Z' fill='#ffd76b' opacity='0.85'/><path d='M820 130 L829 158 L857 167 L829 176 L820 204 L811 176 L783 167 L811 158 Z' fill='#ffd76b' opacity='0.8'/><path d='M500 60 L507 82 L529 89 L507 96 L500 118 L493 96 L471 89 L493 82 Z' fill='#fff1b8' opacity='0.8'/><path d='M120 420 L127 442 L149 449 L127 456 L120 478 L113 456 L91 449 L113 442 Z' fill='#fff1b8' opacity='0.6'/><path d='M900 460 L907 482 L929 489 L907 496 L900 518 L893 496 L871 489 L893 482 Z' fill='#ffd76b' opacity='0.6'/><circle cx='260' cy='300' r='7' fill='#ffcf4d' opacity='0.75'/><circle cx='720' cy='330' r='6' fill='#ffcf4d' opacity='0.7'/><circle cx='390' cy='170' r='5' fill='#ffe08a' opacity='0.7'/><circle cx='630' cy='140' r='5' fill='#ffe08a' opacity='0.65'/><circle cx='320' cy='560' r='6' fill='#ffcf4d' opacity='0.55'/><circle cx='680' cy='590' r='7' fill='#ffcf4d' opacity='0.55'/><circle cx='80' cy='230' r='4' fill='#ffffff' opacity='0.6'/><circle cx='940' cy='260' r='4' fill='#ffffff' opacity='0.6'/><rect x='450' y='620' width='12' height='6' fill='#ffd76b' opacity='0.5' transform='rotate(20 456 623)'/><rect x='550' y='640' width='12' height='6' fill='#ffd76b' opacity='0.5' transform='rotate(-15 556 643)'/><rect x='150' y='600' width='12' height='6' fill='#ffe08a' opacity='0.5' transform='rotate(30 156 603)'/><rect x='860' y='620' width='12' height='6' fill='#ffe08a' opacity='0.5' transform='rotate(-25 866 623)'/></svg>",
    move: "shine",
    say: {
      es: "¡Tu insignia de valiente brilla como una estrella, {name}!",
      ca: "La teva insígnia de valenta brilla com una estrella, {name}!",
      en: "Your bravery badge shines like a star, {name}!",
      cs: "Tvůj odznak odvahy září jako hvězda, {name}!",
      fr: "Ton insigne de courage brille comme une étoile, {name} !"
    },
    jingle: { type: "chord", instr: "brass", notes: [60, 64, 67, 72] }
  },

  // ---- Piratas: "¡Construye tu barco pirata!" ----
  piratas: {
    bg: "linear-gradient(180deg, #ffd89b 0%, #f2a65a 35%, #2e6f95 60%, #1b4965 100%)",
    extra: "<svg viewBox='0 0 1000 700' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'><circle cx='500' cy='210' r='75' fill='#ffe9a8' opacity='0.85'/><ellipse cx='200' cy='140' rx='80' ry='20' fill='#ffffff' opacity='0.4'/><ellipse cx='790' cy='110' rx='70' ry='18' fill='#ffffff' opacity='0.35'/><path d='M0 430 Q125 400 250 430 T500 430 T750 430 T1000 430 L1000 700 L0 700 Z' fill='#2a7ba6' opacity='0.7'/><path d='M0 520 Q166 488 333 520 T666 520 T1000 520 L1000 700 L0 700 Z' fill='#1f6690' opacity='0.75'/><path d='M0 620 Q250 590 500 620 T1000 620 L1000 700 L0 700 Z' fill='#154f73' opacity='0.85'/><path d='M80 455 q30 -18 60 0' stroke='#dff3fa' stroke-width='5' fill='none' opacity='0.5'/><path d='M420 545 q30 -18 60 0' stroke='#dff3fa' stroke-width='5' fill='none' opacity='0.45'/><path d='M760 470 q30 -18 60 0' stroke='#dff3fa' stroke-width='5' fill='none' opacity='0.5'/><circle cx='170' cy='500' r='8' fill='none' stroke='#dff3fa' stroke-width='3' opacity='0.5'/><circle cx='620' cy='585' r='9' fill='none' stroke='#dff3fa' stroke-width='3' opacity='0.45'/><circle cx='880' cy='560' r='7' fill='none' stroke='#dff3fa' stroke-width='2' opacity='0.45'/><circle cx='330' cy='640' r='8' fill='none' stroke='#dff3fa' stroke-width='2' opacity='0.4'/></svg>",
    move: "bob",
    say: {
      es: "¡Tu barco ya surca los mares, {name}! ¡Al abordaje!",
      ca: "El teu vaixell ja solca els mars, {name}! A l'abordatge!",
      en: "Your ship is sailing the seas, {name}! All aboard!",
      cs: "Tvoje loď už brázdí moře, {name}! Vzhůru na palubu!",
      fr: "Ton bateau vogue sur les mers, {name} ! À l'abordage !"
    },
    jingle: { type: "melody", instr: "brass", notes: [60, 60, 64, 67, 64, 67], nd: 0.22, gap: 0.16, vol: 0.14 }
  },

  // ---- Egipto: "¡Crea tu máscara de faraón!" ----
  egipto: {
    bg: "linear-gradient(180deg, #ffdf8e 0%, #ffb45e 45%, #e07b39 75%, #b85c2e 100%)",
    extra: "<svg viewBox='0 0 1000 700' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'><circle cx='500' cy='180' r='85' fill='#fff0b8' opacity='0.9'/><polygon points='260,480 460,480 360,260' fill='#d9973f' opacity='0.95'/><polygon points='360,260 460,480 400,480' fill='#b26f2c' opacity='0.9'/><polygon points='560,500 780,500 670,300' fill='#e0a34f' opacity='0.95'/><polygon points='670,300 780,500 715,500' fill='#b8772f' opacity='0.9'/><polygon points='120,510 260,510 190,390' fill='#cf8f3d' opacity='0.9'/><path d='M0 520 Q250 470 520 520 T1000 505 L1000 700 L0 700 Z' fill='#e8b05e' opacity='0.9'/><path d='M0 610 Q300 560 640 615 T1000 600 L1000 700 L0 700 Z' fill='#c98a3f' opacity='0.9'/><path d='M150 585 q25 -10 50 0' stroke='#a86a2a' stroke-width='4' fill='none' opacity='0.5'/><path d='M700 640 q25 -10 50 0' stroke='#a86a2a' stroke-width='4' fill='none' opacity='0.5'/><path d='M430 655 q25 -10 50 0' stroke='#a86a2a' stroke-width='4' fill='none' opacity='0.45'/><ellipse cx='880' cy='250' rx='40' ry='10' fill='#ffffff' opacity='0.3'/><ellipse cx='110' cy='210' rx='45' ry='11' fill='#ffffff' opacity='0.3'/></svg>",
    move: "shine",
    say: {
      es: "¡Tu máscara de faraón brilla como el oro del Nilo, {name}!",
      ca: "La teva màscara de faraó brilla com l'or del Nil, {name}!",
      en: "Your pharaoh mask shines like the gold of the Nile, {name}!",
      cs: "Tvoje maska faraona září jako zlato Nilu, {name}!",
      fr: "Ton masque de pharaon brille comme l'or du Nil, {name} !"
    },
    jingle: { type: "melody", instr: "reed", notes: [64, 65, 68, 65, 64], nd: 0.28, gap: 0.2, vol: 0.13 }
  },

  // ---- Amazonas: "¡Construye tu canoa del río!" ----
  amazonas: {
    bg: "linear-gradient(180deg, #9fd8a4 0%, #4e9a5f 55%, #2e6b40 100%)",
    extra: "<svg viewBox='0 0 1000 700' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'><path d='M120 0 C100 150 160 250 130 420' stroke='#2f6b3c' stroke-width='10' fill='none' opacity='0.7'/><path d='M320 0 C340 120 290 220 320 340' stroke='#356f42' stroke-width='8' fill='none' opacity='0.6'/><path d='M700 0 C680 140 740 260 705 400' stroke='#2f6b3c' stroke-width='10' fill='none' opacity='0.7'/><path d='M900 0 C920 110 880 200 905 320' stroke='#356f42' stroke-width='8' fill='none' opacity='0.6'/><ellipse cx='130' cy='430' rx='55' ry='24' fill='#3f8a4e' opacity='0.85' transform='rotate(-30 130 430)'/><ellipse cx='320' cy='350' rx='45' ry='20' fill='#57a866' opacity='0.8' transform='rotate(25 320 350)'/><ellipse cx='705' cy='410' rx='55' ry='24' fill='#3f8a4e' opacity='0.85' transform='rotate(20 705 410)'/><ellipse cx='905' cy='330' rx='45' ry='20' fill='#57a866' opacity='0.8' transform='rotate(-25 905 330)'/><ellipse cx='60' cy='120' rx='60' ry='26' fill='#2f6b3c' opacity='0.6' transform='rotate(15 60 120)'/><ellipse cx='950' cy='90' rx='60' ry='26' fill='#2f6b3c' opacity='0.6' transform='rotate(-15 950 90)'/><ellipse cx='500' cy='40' rx='80' ry='30' fill='#356f42' opacity='0.5'/><circle cx='230' cy='250' r='10' fill='#e2596b' opacity='0.8'/><circle cx='820' cy='210' r='9' fill='#e2596b' opacity='0.75'/><circle cx='545' cy='150' r='8' fill='#f0a840' opacity='0.75'/><path d='M0 640 Q300 600 620 645 T1000 630 L1000 700 L0 700 Z' fill='#245c33' opacity='0.9'/></svg>",
    move: "bob",
    say: {
      es: "¡Tu canoa ya navega por el gran río, {name}!",
      ca: "La teva canoa ja navega pel gran riu, {name}!",
      en: "Your canoe is paddling down the great river, {name}!",
      cs: "Tvoje kánoe už pluje po velké řece, {name}!",
      fr: "Ton canoë navigue sur le grand fleuve, {name} !"
    },
    jingle: { type: "melody", instr: "flute", notes: [62, 65, 67, 70, 67], nd: 0.28, gap: 0.2, vol: 0.13 }
  }

};
