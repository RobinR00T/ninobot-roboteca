"use strict";
/* ============================================================
   Ampliación del mapa de TIERRA MEDIA: cuatro lugares nuevos
   para que el mapa esté a la altura de los demás temas.
   La Montaña Solitaria con Smaug dormido (ronca, no asusta),
   la aldea de Bree con su puerta y farolillos, el Abismo de
   Helm en herradura contra la montaña, y Rhosgobel, la casa
   de Radagast con sus animalillos.
   El mapa mide 4200 px de ancho y se recorre con scroll: cada
   uno de los cuatro va en el hueco que le toca de la ruta, con
   más de 200 px de aire respecto a los lugares vecinos. Estas
   coordenadas son las buenas: el escenario de 69a las lee para
   reservar su sitio y para dibujarles debajo un apoyo.
   ============================================================ */

(function () {
  const tx = (inner, vb) => `<svg viewBox="${vb || "0 0 100 100"}" width="100%" height="100%">${inner}</svg>`;

  const ex = THEMES.tierramedia.content.explore;

  const NEW = [

    /* La Montaña Solitaria: pico gris con la puerta enana
       escondida y Smaug dormido sobre sus monedas, roncando */
    { emoji: "🐉", cat: "montanas", x: 2020, y: 430, size: 2, w: 132, h: 118, vb: "0 0 148 130", art: `
        <defs>
          <linearGradient id="tmxErebor" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8fa3ad"/><stop offset="100%" stop-color="#40525c"/></linearGradient>
          <linearGradient id="tmxSmaug" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ef5350"/><stop offset="100%" stop-color="#b71c1c"/></linearGradient>
        </defs>
        <path d="M4 126 L62 6 L120 126 Z" fill="url(#tmxErebor)"/>
        <path d="M48 36 L62 6 L77 36 Q62 26 48 36 Z" fill="#eceff1"/>
        <path d="M28 126 L28 100 Q40 86 52 100 L52 126 Z" fill="#263238"/>
        <path d="M32 126 L32 102 Q40 92 48 102 L48 126" stroke="#a5d6a7" stroke-width="2" fill="none" opacity=".9"/>
        <circle cx="40" cy="108" r="1.8" fill="#a5d6a7"/>
        <circle cx="36" cy="98" r="1.2" fill="#a5d6a7"/><circle cx="44" cy="98" r="1.2" fill="#a5d6a7"/>
        <ellipse cx="103" cy="121" rx="33" ry="8" fill="#f9a825"/>
        <circle cx="84" cy="117" r="4" fill="#ffd54f"/><circle cx="96" cy="120" r="4" fill="#fdd835"/><circle cx="112" cy="118" r="4" fill="#ffd54f"/><circle cx="122" cy="121" r="3.4" fill="#fdd835"/><circle cx="104" cy="114" r="3.6" fill="#ffe082"/>
        <path d="M128 106 L129.4 109.6 L133 111 L129.4 112.4 L128 116 L126.6 112.4 L123 111 L126.6 109.6 Z" fill="#fff9c4"/>
        <path d="M76 116 Q66 114 66 106 Q66 98 76 98" stroke="url(#tmxSmaug)" stroke-width="7" fill="none" stroke-linecap="round"/>
        <ellipse cx="98" cy="103" rx="22" ry="11" fill="url(#tmxSmaug)"/>
        <path d="M80 106 Q98 112 116 105" stroke="#ff8a65" stroke-width="3" fill="none" opacity=".7"/>
        <path d="M90 95 Q96 83 106 85 Q102 93 98 97 Z" fill="#c62828"/>
        <path d="M82 96 L85 90 L88 95 Z" fill="#c62828"/>
        <circle cx="120" cy="106" r="9" fill="url(#tmxSmaug)"/>
        <path d="M114 100 L112 94 M122 98 L123 92" stroke="#ffab91" stroke-width="2.4" stroke-linecap="round"/>
        <path d="M125 104 Q132 105 131 110 Q126 112 123 109 Z" fill="#ef5350"/>
        <path d="M115.5 103 q3 2.4 6 0" stroke="#4a0d0d" stroke-width="1.6" fill="none" stroke-linecap="round"/>
        <path d="M124 112 Q127 113.5 130 112" stroke="#4a0d0d" stroke-width="1.4" fill="none" stroke-linecap="round"/>
        <circle cx="133" cy="99" r="1.6" fill="#eceff1" opacity=".8"/><circle cx="136" cy="94" r="1.2" fill="#eceff1" opacity=".6"/>
        <path d="M118 84 h5 l-5 5 h5" stroke="#eceff1" stroke-width="1.8" fill="none" stroke-linejoin="round" stroke-linecap="round"/>
        <path d="M126 72 h7 l-7 7 h7" stroke="#eceff1" stroke-width="2.2" fill="none" stroke-linejoin="round" stroke-linecap="round"/>
        <path d="M134 57 h9 l-9 9 h9" stroke="#ffffff" stroke-width="2.6" fill="none" stroke-linejoin="round" stroke-linecap="round"/>`,
      name: { es: "La Montaña Solitaria", ca: "La Muntanya Solitària", en: "The Lonely Mountain", cs: "Osamělá hora", fr: "La Montagne Solitaire" },
      fact: { es: "El reino de los enanos bajo la montaña. Dentro, el dragón Smaug duerme enroscado sobre sus monedas doradas y ronca zZz. Shhh, camina de puntillas.", ca: "El regne dels nans sota la muntanya. A dins, el drac Smaug dorm enroscat sobre les seves monedes daurades i ronca zZz. Xxxt, camina de puntetes.", en: "The kingdom of the dwarves under the mountain. Inside, the dragon Smaug sleeps curled up on his golden coins, snoring zZz. Shhh, walk on tiptoe.", cs: "Království trpaslíků pod horou. Uvnitř spí drak Šmak stočený na zlatých mincích a chrápe zZz. Pšt, choď po špičkách.", fr: "Le royaume des nains sous la montagne. À l'intérieur, le dragon Smaug dort enroulé sur ses pièces d'or et ronfle zZz. Chut, marche sur la pointe des pieds." } },

    /* Bree: aldea de casitas con tejados, la gran puerta del
       muro con su ventanilla y farolillos calentitos */
    { emoji: "🏘️", cat: "comarca", x: 490, y: 790, w: 118, h: 92, vb: "0 0 130 100", art: `
        <defs><linearGradient id="tmxBree" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8d6e63"/><stop offset="100%" stop-color="#5d4037"/></linearGradient></defs>
        <path d="M0 78 Q65 58 130 78 L130 100 L0 100 Z" fill="#7a9b4e"/>
        <rect x="18" y="42" width="26" height="30" rx="2" fill="#efe0c4"/>
        <path d="M14 44 L31 26 L48 44 Z" fill="#a1552f"/>
        <rect x="26" y="50" width="9" height="10" rx="2" fill="#ffd54f"/>
        <rect x="38" y="28" width="6" height="12" rx="1.5" fill="#5d4037"/>
        <circle cx="41" cy="22" r="3" fill="#eceff1" opacity=".7"/><circle cx="45" cy="16" r="2.2" fill="#eceff1" opacity=".5"/>
        <rect x="52" y="34" width="30" height="38" rx="2" fill="#e8d5b5"/>
        <path d="M48 36 L67 16 L86 36 Z" fill="#8d5524"/>
        <rect x="58" y="42" width="9" height="10" rx="2" fill="#ffe082"/><rect x="70" y="42" width="9" height="10" rx="2" fill="#ffd54f"/>
        <path d="M52 58 L82 58" stroke="#6d4c41" stroke-width="2"/>
        <rect x="90" y="46" width="24" height="26" rx="2" fill="#efe0c4"/>
        <path d="M86 48 L102 32 L118 48 Z" fill="#a1552f"/>
        <rect x="97" y="53" width="9" height="9" rx="2" fill="#ffe082"/>
        <rect x="2" y="70" width="126" height="22" rx="3" fill="url(#tmxBree)"/>
        <path d="M2 81 L126 81 M22 70 L22 81 M46 81 L46 92 M100 70 L100 81 M112 81 L112 92" stroke="#4e342e" stroke-width="1.8" opacity=".6"/>
        <path d="M54 92 L54 72 Q65 60 76 72 L76 92 Z" fill="#4e342e"/>
        <path d="M60 66 L60 92 M65 63.5 L65 92 M70 66 L70 92" stroke="#3e2723" stroke-width="1.6"/>
        <path d="M56 78 L74 78 M56 86 L74 86" stroke="#455a64" stroke-width="2"/>
        <rect x="61" y="69" width="8" height="5" rx="2" fill="#ffd54f"/>
        <path d="M54 100 Q65 94 76 100 Z" fill="#d7a86b"/>
        <path d="M46 92 L46 66" stroke="#3e2723" stroke-width="3"/>
        <circle cx="46" cy="61" r="7" fill="rgba(255,213,79,.35)"/>
        <rect x="42.5" y="56" width="7" height="9" rx="2" fill="#ffca28"/>
        <path d="M84 92 L84 66" stroke="#3e2723" stroke-width="3"/>
        <circle cx="84" cy="61" r="7" fill="rgba(255,213,79,.35)"/>
        <rect x="80.5" y="56" width="7" height="9" rx="2" fill="#ffca28"/>`,
      name: { es: "Bree", ca: "Bree", en: "Bree", cs: "Hůrka", fr: "Bree" },
      fact: { es: "La aldea donde se cruzan todos los caminos. Hombres y hobbits viven juntos, hay una gran puerta en el muro y farolillos que se encienden al anochecer.", ca: "El poble on es creuen tots els camins. Homes i hòbbits hi viuen junts, hi ha una gran porta a la muralla i fanalets que s'encenen al capvespre.", en: "The village where all the roads meet. Men and hobbits live together, there is a big gate in the wall and little lanterns that light up at dusk.", cs: "Vesnice, kde se potkávají všechny cesty. Lidé a hobiti tu žijí spolu, ve zdi je velká brána a za soumraku se rozsvěcují lucerničky.", fr: "Le village où tous les chemins se croisent. Hommes et hobbits y vivent ensemble, il y a une grande porte dans le mur et des lanternes qui s'allument le soir." } },

    /* El Abismo de Helm: la fortaleza blanca en herradura
       abrazada a la montaña, con su muro, la torre del cuerno
       y el arroyo que sale por debajo */
    { emoji: "🛡️", cat: "reinos", x: 2550, y: 700, w: 136, h: 100, vb: "0 0 150 112", art: `
        <defs>
          <linearGradient id="tmxHelmRoca" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#90a4ae"/><stop offset="100%" stop-color="#4b636e"/></linearGradient>
          <linearGradient id="tmxHelm" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#cfd8dc"/></linearGradient>
        </defs>
        <path d="M0 108 L34 30 L66 74 L102 18 L136 76 L150 52 L150 108 Z" fill="url(#tmxHelmRoca)"/>
        <path d="M94 34 L102 18 L111 35 Q102 28 94 34 Z" fill="#eceff1"/>
        <path d="M0 104 Q75 98 150 104 L150 112 L0 112 Z" fill="#6b8f4e"/>
        <rect x="64" y="34" width="22" height="34" rx="3" fill="url(#tmxHelm)"/>
        <path d="M64 34 h5 v-5 h6 v5 h6 v-5 h5 v5" stroke="#b0bec5" stroke-width="2" fill="none"/>
        <path d="M72 60 L72 50 Q75 45 78 50 L78 60 Z" fill="#78909c"/>
        <path d="M86 42 Q97 40 102 32" stroke="#ffe082" stroke-width="4" fill="none" stroke-linecap="round"/>
        <path d="M75 29 L75 20" stroke="#78909c" stroke-width="1.8"/>
        <path d="M75 20 L86 23 L75 26 Z" fill="#66bb6a"/><circle cx="80" cy="23" r="1.2" fill="#fff"/>
        <path d="M75 68 Q75 88 72 108" stroke="#b3e5fc" stroke-width="4" fill="none" stroke-linecap="round" opacity=".9"/>
        <path d="M14 108 L14 84 Q40 58 75 58 Q110 58 136 84 L136 108 L124 108 L124 88 Q104 70 75 70 Q46 70 26 88 L26 108 Z" fill="url(#tmxHelm)"/>
        <path d="M14 84 Q40 58 75 58 Q110 58 136 84" stroke="#b0bec5" stroke-width="2.4" fill="none"/>
        <path d="M22 78 L17 74 M36 68 L33 62 M52 62 L50 56 M75 58 L75 51 M98 62 L100 56 M114 68 L117 62 M128 78 L133 74" stroke="#eceff1" stroke-width="4" stroke-linecap="round"/>
        <path d="M15 108 L15 96 Q20 90 25 96 L25 108 Z" fill="#546e7a"/>
        <path d="M30 92 h14 M106 92 h14" stroke="#b0bec5" stroke-width="1.6" opacity=".7"/>
        <circle cx="40" cy="80" r="2" fill="#ffe082"/><circle cx="110" cy="80" r="2" fill="#ffe082"/><circle cx="130" cy="96" r="2" fill="#ffe082"/>`,
      name: { es: "El Abismo de Helm", ca: "La Gorja de Helm", en: "Helm's Deep", cs: "Helmův žleb", fr: "Le Gouffre de Helm" },
      fact: { es: "La fortaleza de Rohan, abrazada a la montaña como una herradura. Cuando llega una tormenta, todo el reino se refugia tras su gran muro, calentito y a salvo.", ca: "La fortalesa de Rohan, abraçada a la muntanya com una ferradura. Quan arriba una tempesta, tot el regne es refugia rere la seva gran muralla, ben segur.", en: "The fortress of Rohan, hugging the mountain like a horseshoe. When a storm comes, the whole kingdom shelters behind its great wall, safe and sound.", cs: "Pevnost Rohanu, přitisknutá k hoře jako podkova. Když přijde bouřka, celé království se schová za její velkou zeď, v bezpečí a v teple.", fr: "La forteresse du Rohan, blottie contre la montagne comme un fer à cheval. Quand un orage arrive, tout le royaume s'abrite derrière son grand mur, bien au chaud." } },

    /* Rhosgobel: la casita torcida de Radagast junto a un gran
       árbol, con erizo, pájaro, conejo, setas y su sombrero */
    { emoji: "🦔", cat: "montanas", x: 1240, y: 640, w: 106, h: 92, vb: "0 0 120 104", art: `
        <defs><radialGradient id="tmxRhos" cx="45%" cy="35%"><stop offset="0%" stop-color="#9ccc65"/><stop offset="100%" stop-color="#33691e"/></radialGradient></defs>
        <path d="M0 96 Q60 88 120 96 L120 104 L0 104 Z" fill="#4a7028"/>
        <path d="M78 96 Q82 66 78 44 L94 44 Q92 66 98 96 Z" fill="#6d4c41"/>
        <circle cx="86" cy="34" r="24" fill="url(#tmxRhos)"/><circle cx="64" cy="46" r="15" fill="url(#tmxRhos)"/><circle cx="106" cy="48" r="13" fill="url(#tmxRhos)"/>
        <path d="M50 46 L50 30 L58 30 L58 50 Z" fill="#795548"/>
        <circle cx="54" cy="24" r="3" fill="#eceff1" opacity=".7"/><circle cx="58" cy="18" r="2.2" fill="#eceff1" opacity=".5"/>
        <path d="M18 92 L20 58 L58 54 L60 92 Z" fill="#d7b98e"/>
        <path d="M10 62 L39 34 L66 58 Z" fill="#8d6e63"/>
        <path d="M24 50 Q30 42 39 40 Q46 44 52 50 Q40 46 24 50 Z" fill="#7cb342"/>
        <path d="M32 92 L32 74 Q39 66 46 74 L46 92 Z" fill="#5d4037"/>
        <circle cx="43" cy="82" r="1.4" fill="#ffd54f"/>
        <circle cx="26" cy="66" r="6" fill="#ffe082" stroke="#5d4037" stroke-width="2"/>
        <path d="M26 60 L26 72 M20 66 L32 66" stroke="#5d4037" stroke-width="1.4"/>
        <path d="M48 70 L54 58 L60 70 Q54 67 48 70 Z" fill="#6d4c41"/>
        <circle cx="57" cy="64" r="1.4" fill="#8bc34a"/>
        <circle cx="58" cy="50" r="4.2" fill="#4fc3f7"/><circle cx="61.5" cy="48" r="2.6" fill="#81d4fa"/>
        <path d="M64 48 L67 49 L64 50.4 Z" fill="#f9a825"/><circle cx="62.2" cy="47.2" r=".8" fill="#263238"/>
        <path d="M56 94 Q57 84 63 82 Q70 80 74 86 Q76 92 74 94 Z" fill="#795548"/>
        <path d="M58 86 L55 82 M62 83 L60 78 M67 82 L66 77 M71 84 L73 79" stroke="#5d4037" stroke-width="2" stroke-linecap="round"/>
        <path d="M74 88 Q79 88 80 92 Q77 95 74 94 Z" fill="#bcaaa4"/>
        <circle cx="80" cy="91.6" r="1.3" fill="#3e2723"/><circle cx="76.5" cy="90" r="1.1" fill="#3e2723"/>
        <path d="M12 84 Q11 76 14 72 M18 84 Q18 76 21 73" stroke="#eceff1" stroke-width="3.5" stroke-linecap="round"/>
        <circle cx="16" cy="87" r="5.5" fill="#f5f5f5"/>
        <circle cx="17.8" cy="86" r="1" fill="#37474f"/><circle cx="20.6" cy="87.5" r=".9" fill="#f48fb1"/>
        <path d="M8 96 L8 92" stroke="#efe0c4" stroke-width="2.4"/>
        <path d="M4 92 Q8 86 12 92 Z" fill="#e53935"/><circle cx="7" cy="90" r=".8" fill="#fff"/><circle cx="10" cy="90.5" r=".8" fill="#fff"/>
        <path d="M104 96 L104 93" stroke="#efe0c4" stroke-width="2"/>
        <path d="M101 93 Q104 88 107 93 Z" fill="#ff8a65"/>`,
      name: { es: "Rhosgobel", ca: "Rhosgobel", en: "Rhosgobel", cs: "Rhosgobel", fr: "Rhosgobel" },
      fact: { es: "La casita de Radagast, el mago amigo de los animales. Erizos, pájaros y conejos entran y salen como si fuera su casa... porque también lo es.", ca: "La caseta de Radagast, el mag amic dels animals. Eriçons, ocells i conills hi entren i surten com si fos casa seva... perquè també ho és.", en: "The little house of Radagast, the wizard who is friends with the animals. Hedgehogs, birds and rabbits come and go as if it were their home... because it is.", cs: "Domeček Radagasta, čaroděje, který se kamarádí se zvířátky. Ježci, ptáčci a králíci sem chodí, jako by to byl jejich domov... protože taky je.", fr: "La petite maison de Radagast, le magicien ami des animaux. Hérissons, oiseaux et lapins y entrent et sortent comme chez eux... parce que c'est aussi chez eux." } }
  ];

  NEW.forEach(o => {
    ex.pois.push({ cat: o.cat, emoji: o.emoji, x: o.x, y: o.y, size: o.size, svg: tx(o.art, o.vb), iw: o.w, ih: o.h, name: o.name, fact: o.fact });
  });
})();
