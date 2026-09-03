"use strict";
/* ============================================================
   Dinosaurios dibujados para el mapa: siluetas cariñosas con
   tamaño relativo fiel (el Braquiosaurio gigante, el
   Velocirráptor pequeñito...).
   ============================================================ */

(function () {
  const dd = (inner, vb) => `<svg viewBox="${vb || "0 0 100 100"}" width="100%" height="100%">${inner}</svg>`;

  const ICONS = {

    /* T-Rex: cabezón, dientes y bracitos mínimos */
    "🦖": { w: 105, h: 95, svg: dd(`
      <defs><linearGradient id="dRex" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#7cb342"/><stop offset="100%" stop-color="#33691e"/></linearGradient></defs>
      <path d="M96 20 Q120 20 122 36 Q122 48 108 50 L104 58 Q116 60 114 66 L96 64 Q84 78 68 82 L70 96 L60 96 L58 84 Q48 86 40 84 L42 96 L32 96 L30 82 Q12 74 8 56 Q4 36 20 30 Q20 44 32 50 Q48 58 64 52 Q74 42 78 30 Q84 20 96 20 Z" fill="url(#dRex)"/>
      <circle cx="100" cy="32" r="4" fill="#12240c"/><circle cx="101.4" cy="30.8" r="1.3" fill="#fff"/>
      <path d="M108 50 L104 44 M114 52 L110 46" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
      <path d="M86 58 Q92 60 94 66 M90 56 Q98 56 102 60" stroke="#33691e" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M30 66 Q44 72 60 70" stroke="#204a12" stroke-width="3" fill="none" opacity=".6"/>`, "0 0 126 100") },

    /* Braquiosaurio: el gigante del cuello infinito */
    "🦕": { w: 150, h: 165, svg: dd(`
      <defs><linearGradient id="dBra" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#90a4d4"/><stop offset="100%" stop-color="#4a5f96"/></linearGradient></defs>
      <path d="M24 12 Q40 4 46 16 Q50 26 44 32 Q52 60 56 96 Q80 100 96 112 Q112 126 108 142 L96 158 L86 158 L90 144 L76 148 L78 158 L66 158 L64 146 Q48 148 36 142 L38 158 L26 158 L24 142 Q10 132 12 114 Q14 100 28 94 Q34 60 30 34 Q20 28 24 12 Z" fill="url(#dBra)"/>
      <circle cx="34" cy="18" r="3.6" fill="#131c33"/><circle cx="35.2" cy="16.8" r="1.2" fill="#fff"/>
      <path d="M26 24 Q30 27 36 26" stroke="#131c33" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M108 140 Q126 138 138 128" stroke="#4a5f96" stroke-width="9" fill="none" stroke-linecap="round"/>
      <path d="M30 108 Q60 116 90 122" stroke="#33436e" stroke-width="3" fill="none" opacity=".6"/>`, "0 0 144 164") },

    /* Velocirráptor: pequeño, veloz y con plumitas */
    "🪶": { w: 46, h: 36, svg: dd(`
      <defs><linearGradient id="dVel" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffb74d"/><stop offset="100%" stop-color="#e65100"/></linearGradient></defs>
      <path d="M88 22 Q102 22 104 32 Q104 40 94 40 Q84 52 66 56 L68 70 L60 70 L58 58 L46 58 L48 70 L40 70 L38 56 Q18 52 8 40 Q22 44 36 42 Q56 40 68 32 Q76 24 88 22 Z" fill="url(#dVel)"/>
      <circle cx="94" cy="30" r="3" fill="#3d1600"/><circle cx="95" cy="29" r="1" fill="#fff"/>
      <path d="M10 38 Q2 34 0 28 M14 42 Q6 42 2 38" stroke="#e65100" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M60 26 L64 18 M68 26 L72 18 M76 24 L80 16" stroke="#bf4d00" stroke-width="2.6" stroke-linecap="round"/>`, "0 0 108 74") },

    /* Triceratops: escudo y tres cuernos */
    "🦏": { w: 92, h: 62, svg: dd(`
      <defs><linearGradient id="dTri" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#bcaaa4"/><stop offset="100%" stop-color="#6d4c41"/></linearGradient></defs>
      <path d="M96 26 Q118 28 122 44 Q122 56 110 58 L112 66 L104 64 Q96 74 82 76 L84 88 L74 88 L72 78 L44 78 L46 88 L36 88 L34 76 Q16 70 12 54 Q10 38 26 34 Q54 28 74 28 Q84 24 96 26 Z" fill="url(#dTri)"/>
      <path d="M92 28 Q86 12 92 4 Q100 12 100 26 Z" fill="#efe5dc"/>
      <path d="M104 30 Q102 18 108 12 Q114 20 112 32 Z" fill="#efe5dc"/>
      <path d="M114 44 L128 40 L118 50 Z" fill="#efe5dc"/>
      <path d="M74 28 Q70 10 84 6 Q94 4 96 14 Q88 12 84 18 Q80 24 82 28 Z" fill="#8d6e63"/>
      <circle cx="102" cy="40" r="3.6" fill="#241209"/><circle cx="103.2" cy="38.8" r="1.2" fill="#fff"/>`, "0 0 130 92") },

    /* Anquilosaurio: tanque con maza */
    "🛡️": { w: 84, h: 48, svg: dd(`
      <defs><linearGradient id="dAnk" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#a1887f"/><stop offset="100%" stop-color="#5d4037"/></linearGradient></defs>
      <path d="M86 34 Q104 34 108 44 Q108 52 98 52 Q90 62 74 66 L76 76 L66 76 L64 68 L38 68 L40 76 L30 76 L28 66 Q12 60 10 48 Q12 36 30 32 Q56 26 78 30 Z" fill="url(#dAnk)"/>
      <path d="M30 32 L36 22 L44 30 M48 28 L54 18 L62 28 M66 28 L72 20 L78 30" fill="#8d6e63" stroke="#4e342e" stroke-width="1.6"/>
      <path d="M12 46 Q2 44 0 38" stroke="#5d4037" stroke-width="5" fill="none" stroke-linecap="round"/>
      <circle cx="0" cy="36" r="7" fill="#4e342e"/>
      <circle cx="98" cy="42" r="3" fill="#221108"/><circle cx="99" cy="41" r="1" fill="#fff"/>`, "0 0 112 80") },

    /* Espinosaurio: la vela y el hocico de cocodrilo */
    "🐊": { w: 118, h: 84, svg: dd(`
      <defs><linearGradient id="dSpi" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#66a6a0"/><stop offset="100%" stop-color="#2e5f5a"/></linearGradient></defs>
      <path d="M34 34 Q40 8 56 4 Q72 8 78 34 Z" fill="#e07856"/>
      <path d="M38 34 Q44 16 56 12 Q68 16 74 34 Z" fill="#f2a184" opacity=".7"/>
      <path d="M88 38 Q112 36 124 44 L122 50 L104 50 L100 56 Q112 58 110 62 L94 60 Q84 72 66 76 L68 88 L58 88 L56 78 L40 78 L42 88 L32 88 L30 76 Q12 70 10 54 Q12 40 34 36 Q60 32 88 38 Z" fill="url(#dSpi)"/>
      <circle cx="102" cy="44" r="3.4" fill="#0e2422"/><circle cx="103.2" cy="42.8" r="1.1" fill="#fff"/>
      <path d="M108 50 L106 46 M114 50 L112 46" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>`, "0 0 128 92") },

    /* Pteranodón: alas de avioneta */
    "🪽": { w: 100, h: 62, svg: dd(`
      <defs><linearGradient id="dPte" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#d7a26b"/><stop offset="100%" stop-color="#9c6430"/></linearGradient></defs>
      <path d="M50 34 Q20 10 2 22 Q18 30 28 42 Q38 52 50 50 Z" fill="url(#dPte)"/>
      <path d="M56 34 Q86 10 104 22 Q88 30 78 42 Q68 52 56 50 Z" fill="url(#dPte)"/>
      <path d="M46 36 Q53 30 60 36 L58 56 Q53 62 48 56 Z" fill="#b5813f"/>
      <path d="M52 32 Q50 22 42 18 Q52 16 58 22 L66 16 Q64 26 58 30 Z" fill="#8a5626"/>
      <circle cx="55" cy="26" r="2.4" fill="#2b1608"/><circle cx="55.8" cy="25.2" r=".8" fill="#fff"/>`, "0 0 106 66") },

    /* Estegosaurio: placas y pinchos */
    "🔶": { w: 96, h: 66, svg: dd(`
      <defs><linearGradient id="dSte" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8fbf5a"/><stop offset="100%" stop-color="#4a7028"/></linearGradient></defs>
      <path d="M26 30 L34 14 L44 30 M46 24 L56 6 L66 24 M68 26 L78 10 L86 28" fill="#e07856" stroke="#b5502e" stroke-width="1.6"/>
      <path d="M92 40 Q106 42 108 50 Q108 56 100 56 Q92 66 76 70 L78 82 L68 82 L66 72 L42 72 L44 82 L34 82 L32 70 Q14 64 12 50 Q14 36 34 32 Q62 26 92 40 Z" fill="url(#dSte)"/>
      <path d="M12 52 Q4 54 2 60 M6 50 L0 46 M10 56 L2 58" stroke="#4a7028" stroke-width="4" fill="none" stroke-linecap="round"/>
      <circle cx="100" cy="48" r="3" fill="#17280b"/><circle cx="101" cy="47" r="1" fill="#fff"/>`, "0 0 112 86") }
  };

  THEMES.dinos.content.explore.pois.forEach(p => {
    const ic = ICONS[p.emoji];
    if (ic) { p.svg = ic.svg; p.iw = ic.w; p.ih = ic.h; }
  });

  /* ============================================================
     El mar prehistórico y los voladores: mapa ampliado con
     mosasaurio, ictiosaurio, amonites, pterodáctilo y
     quetzalcoatlus; y un plesiosaurio en el lago, como Nessie.
     ============================================================ */
  const ex = THEMES.dinos.content.explore;
  ex.width = 4000;
  ex.cats.push(
    { id: "mar", emoji: "🌊", x: 2650, name: { es: "El mar prehistórico", ca: "El mar prehistòric", en: "The prehistoric sea", cs: "Pravěké moře", fr: "La mer préhistorique" } },
    { id: "cielo", emoji: "🪽", x: 3000, name: { es: "El cielo", ca: "El cel", en: "The sky", cs: "Nebe", fr: "Le ciel" } }
  );
  /* el pteranodón vuela al cielo (estaba en el lago) */
  const pte = ex.pois.find(p2 => p2.emoji === "🪽");
  if (pte) { pte.cat = "cielo"; pte.x = 2700; pte.y = 230; }

  const NEW = [
    { emoji: "🦢", cat: "lago", x: 1880, y: 740, w: 92, h: 96, art: `
        <path d="M40 10 Q52 4 56 14 Q58 22 50 26 Q48 44 52 60 Q70 62 80 74 Q86 84 78 90 Q60 98 40 94 Q24 90 22 78 Q22 66 36 60 Q40 44 36 28 Q32 14 40 10 Z" fill="#4d8a6a"/>
        <path d="M30 92 L18 100 M50 96 L46 106 M72 90 L80 100" stroke="#3a6b51" stroke-width="6" stroke-linecap="round"/>
        <circle cx="47" cy="16" r="2.6" fill="#0e241a"/><circle cx="47.9" cy="15.2" r=".9" fill="#fff"/>
        <path d="M36 74 Q50 70 66 76" stroke="#3a6b51" stroke-width="3" fill="none" opacity=".7"/>`,
      vb: "0 0 100 110",
      name: { es: "Plesiosaurio", ca: "Plesiosaure", en: "Plesiosaurus", cs: "Plesiosaurus", fr: "Plésiosaure" },
      fact: { es: "Cuello larguísimo y cuatro aletas: el vecino misterioso del lago. ¡Como el monstruo del lago Ness, pero de verdad!", ca: "Coll llarguíssim i quatre aletes: el veí misteriós del llac. Com el monstre del llac Ness, però de debò!", en: "A super long neck and four flippers: the lake's mysterious neighbour. Like the Loch Ness monster, but real!", cs: "Předlouhý krk a čtyři ploutve: tajemný soused jezera. Jako lochnesská příšera, ale doopravdy!", fr: "Un cou très long et quatre nageoires : le voisin mystérieux du lac. Comme le monstre du Loch Ness, mais en vrai !" } },
    { emoji: "🦈", cat: "mar", x: 2940, y: 820, size: 2, w: 150, h: 62, art: `
        <path d="M6 34 Q10 22 24 20 L20 8 L38 16 Q70 8 100 16 Q126 22 138 34 Q126 44 100 50 Q70 56 38 50 Q24 52 16 60 L20 46 Q8 42 6 34 Z" fill="#3b6e8f"/>
        <path d="M52 18 L60 4 L70 16 Z" fill="#2c5570"/>
        <path d="M60 50 L66 62 L74 50 Z" fill="#2c5570"/>
        <path d="M120 28 L138 24 M120 40 L138 44" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
        <circle cx="122" cy="30" r="3.4" fill="#0b1c28"/><circle cx="123.2" cy="28.8" r="1.1" fill="#fff"/>
        <path d="M130 36 Q134 38 136 36 M124 38 Q128 40 130 38" stroke="#fff" stroke-width="2" fill="none"/>`,
      vb: "0 0 144 66",
      name: { es: "Mosasaurio", ca: "Mosasaure", en: "Mosasaurus", cs: "Mosasaurus", fr: "Mosasaure" },
      fact: { es: "El gigante del mar: un lagarto marino más largo que un autobús que se comía hasta tiburones.", ca: "El gegant del mar: un llangardaix marí més llarg que un autobús que es menjava fins i tot taurons.", en: "The giant of the sea: a marine lizard longer than a bus that even ate sharks.", cs: "Obr moří: mořský ještěr delší než autobus, který jedl i žraloky.", fr: "Le géant de la mer : un lézard marin plus long qu'un bus qui mangeait même des requins." } },
    { emoji: "🐬", cat: "mar", x: 3290, y: 760, w: 84, h: 44, art: `
        <path d="M8 26 Q20 10 44 8 Q72 6 88 18 L102 10 L98 24 L102 36 L88 28 Q72 40 44 40 Q20 38 8 26 Z" fill="#7aa7c7"/>
        <path d="M40 10 L46 0 L54 10 Z" fill="#5d8bb0"/>
        <path d="M6 26 L20 22 L20 30 Z" fill="#5d8bb0"/>
        <circle cx="22" cy="22" r="4.4" fill="#0d2233"/><circle cx="23.4" cy="20.6" r="1.4" fill="#fff"/>
        <path d="M8 26 L20 26" stroke="#41708f" stroke-width="2"/>`,
      vb: "0 0 106 44",
      name: { es: "Ictiosaurio", ca: "Ictiosaure", en: "Ichthyosaur", cs: "Ichtyosaurus", fr: "Ichtyosaure" },
      fact: { es: "Parecía un delfín, pero era un reptil de ojos gigantes. Respiraba aire y saltaba sobre las olas.", ca: "Semblava un dofí, però era un rèptil d'ulls gegants. Respirava aire i saltava sobre les onades.", en: "It looked like a dolphin, but it was a reptile with giant eyes. It breathed air and leapt over the waves.", cs: "Vypadal jako delfín, ale byl to plaz s obříma očima. Dýchal vzduch a skákal přes vlny.", fr: "Il ressemblait à un dauphin, mais c'était un reptile aux yeux géants. Il respirait de l'air et sautait sur les vagues." } },
    { emoji: "🐚", cat: "mar", x: 3860, y: 940, w: 46, h: 46, art: `
        <path d="M50 50 m-40 0 a40 40 0 1 1 80 0 a40 40 0 1 1 -80 0" fill="#c9a86c"/>
        <path d="M50 50 Q50 22 74 22 Q94 26 90 50 Q86 74 62 74 Q44 72 46 54 Q48 40 62 42 Q72 44 68 54" fill="none" stroke="#7a5b30" stroke-width="6" stroke-linecap="round"/>
        <path d="M14 40 L26 44 M12 58 L26 58 M20 74 L30 66" stroke="#7a5b30" stroke-width="3" stroke-linecap="round"/>`,
      vb: "0 0 100 100",
      name: { es: "El amonites", ca: "L'ammonit", en: "The ammonite", cs: "Amonit", fr: "L'ammonite" },
      fact: { es: "Caracolas en espiral que llenaban los mares de los dinosaurios. Mary Anning encontraba sus fósiles en la playa.", ca: "Cargols en espiral que omplien els mars dels dinosaures. La Mary Anning trobava els seus fòssils a la platja.", en: "Spiral shells that filled the dinosaur seas. Mary Anning used to find their fossils on the beach.", cs: "Spirálovité ulity, které plnily moře dinosaurů. Mary Anningová nacházela jejich fosilie na pláži.", fr: "Des coquilles en spirale qui remplissaient les mers des dinosaures. Mary Anning trouvait leurs fossiles sur la plage." } },
    { emoji: "🦇", cat: "cielo", x: 3120, y: 180, w: 66, h: 42, art: `
        <path d="M50 26 Q28 6 6 12 Q20 20 28 32 Q38 42 50 40 Z" fill="#a8674b"/>
        <path d="M54 26 Q76 6 98 12 Q84 20 76 32 Q66 42 54 40 Z" fill="#a8674b"/>
        <path d="M46 28 Q52 24 58 28 L56 44 Q52 48 48 44 Z" fill="#8a4f36"/>
        <path d="M52 26 Q48 18 40 16 L58 14 Q56 22 52 26 Z" fill="#6d3b26"/>
        <circle cx="52" cy="20" r="2" fill="#210e06"/>`,
      vb: "0 0 104 52",
      name: { es: "Pterodáctilo", ca: "Pterodàctil", en: "Pterodactyl", cs: "Pterodaktyl", fr: "Ptérodactyle" },
      fact: { es: "No era un dinosaurio: era un reptil volador pequeñito. ¡Fue el primer volador prehistórico que descubrieron los científicos!", ca: "No era un dinosaure: era un rèptil volador petitó. Va ser el primer volador prehistòric que van descobrir els científics!", en: "It was not a dinosaur: it was a tiny flying reptile. It was the first prehistoric flyer scientists ever discovered!", cs: "Nebyl to dinosaurus: byl to malinký létající plaz. Byl to první pravěký letec, kterého vědci objevili!", fr: "Ce n'était pas un dinosaure : c'était un tout petit reptile volant. Ce fut le premier voltigeur préhistorique découvert par les scientifiques !" } },
    { emoji: "🪁", cat: "cielo", x: 3560, y: 250, size: 2, w: 130, h: 66, art: `
        <path d="M56 34 Q30 8 2 14 Q22 24 34 40 Q46 54 58 50 Z" fill="#d9b38c"/>
        <path d="M64 34 Q90 8 118 14 Q98 24 86 40 Q74 54 62 50 Z" fill="#d9b38c"/>
        <path d="M54 36 Q60 30 66 36 L64 54 Q60 58 56 54 Z" fill="#bd9066"/>
        <path d="M60 32 Q58 18 48 12 L70 10 Q68 24 62 30 Z" fill="#9c6f42"/>
        <path d="M52 12 L56 4 L60 12 Z" fill="#7a5330"/>
        <circle cx="60" cy="16" r="2.2" fill="#2b1608"/>`,
      vb: "0 0 120 62",
      name: { es: "Quetzalcoatlus", ca: "Quetzalcoatlus", en: "Quetzalcoatlus", cs: "Quetzalcoatlus", fr: "Quetzalcoatlus" },
      fact: { es: "El animal volador más grande de todos los tiempos: alto como una jirafa y con alas como una avioneta.", ca: "L'animal volador més gran de tots els temps: alt com una girafa i amb ales com una avioneta.", en: "The biggest flying animal of all time: as tall as a giraffe, with wings like a small plane.", cs: "Největší létající zvíře všech dob: vysoké jako žirafa, s křídly jako letadélko.", fr: "Le plus grand animal volant de tous les temps : haut comme une girafe, avec des ailes comme un petit avion." } }
    ,
    { emoji: "🐉", cat: "selva", x: 760, y: 580, size: 2, w: 175, h: 88, art: `
        <path d="M8 22 Q16 12 24 18 Q28 24 24 30 Q40 44 60 58 Q84 70 108 72 Q134 72 150 62 Q162 54 170 58 L160 70 Q170 72 168 78 L150 74 Q136 84 112 84 L114 96 L104 96 L102 86 L84 84 L86 96 L76 96 L74 82 Q52 74 36 58 Q20 44 16 30 Q10 28 8 22 Z" fill="#8ea86e"/>
        <circle cx="17" cy="21" r="2.6" fill="#26350f"/><circle cx="17.9" cy="20.2" r=".9" fill="#fff"/>
        <path d="M40 60 Q60 70 84 74" stroke="#6d8551" stroke-width="3" fill="none" opacity=".6"/>`,
      vb: "0 0 176 100",
      name: { es: "Diplodocus", ca: "Diplodocus", en: "Diplodocus", cs: "Diplodocus", fr: "Diplodocus" },
      fact: { es: "Uno de los animales más largos que han pisado la Tierra: casi todo era cuello y cola. ¡Usaba la cola como un látigo!", ca: "Un dels animals més llargs que han trepitjat la Terra: gairebé tot era coll i cua. Feia servir la cua com un fuet!", en: "One of the longest animals ever to walk the Earth: almost all neck and tail. It used its tail like a whip!", cs: "Jedno z nejdelších zvířat, jaké kdy chodilo po Zemi: skoro samý krk a ocas. Ocas používal jako bič!", fr: "L'un des animaux les plus longs qui aient foulé la Terre : presque tout en cou et en queue. Il utilisait sa queue comme un fouet !" } },
    { emoji: "🎺", cat: "volcan", x: 1180, y: 320, w: 84, h: 74, art: `
        <path d="M78 20 Q94 10 102 18 Q106 24 98 30 L84 34 Q76 40 66 42 Q56 60 60 76 L70 76 L72 88 L60 88 L58 78 L44 80 L46 88 L36 88 L34 78 Q18 72 16 56 Q16 40 34 36 Q52 30 66 30 Q72 24 78 20 Z" fill="#c98a5a"/>
        <path d="M78 20 Q64 8 46 12 Q60 14 66 24" fill="#a96a3e"/>
        <circle cx="88" cy="24" r="3" fill="#33200f"/><circle cx="89" cy="23" r="1" fill="#fff"/>`,
      vb: "0 0 110 92",
      name: { es: "Parasaurolophus", ca: "Parasaurolophus", en: "Parasaurolophus", cs: "Parasaurolophus", fr: "Parasaurolophus" },
      fact: { es: "Su cresta hueca era como una trompeta: soplaba por ella y se oía a kilómetros. ¡El músico de los dinosaurios!", ca: "La seva cresta buida era com una trompeta: hi bufava i se sentia a quilòmetres. El músic dels dinosaures!", en: "Its hollow crest was like a trumpet: it blew through it and could be heard for miles. The musician of the dinosaurs!", cs: "Jeho dutý hřeben byl jako trubka: foukal do něj a bylo ho slyšet na kilometry. Muzikant mezi dinosaury!", fr: "Sa crête creuse était comme une trompette : il soufflait dedans et on l'entendait à des kilomètres. Le musicien des dinosaures !" } },
    { emoji: "🪲", cat: "mar", x: 2740, y: 970, w: 42, h: 36, art: `
        <ellipse cx="50" cy="50" rx="34" ry="42" fill="#6b5b73"/>
        <ellipse cx="50" cy="26" rx="26" ry="16" fill="#7d6b86"/>
        ${[40, 52, 64, 76].map(y => `<path d="M18 ${y} L82 ${y}" stroke="#4e4156" stroke-width="4"/>`).join("")}
        <line x1="50" y1="12" x2="50" y2="92" stroke="#4e4156" stroke-width="5"/>
        <circle cx="40" cy="24" r="3.4" fill="#20161f"/><circle cx="60" cy="24" r="3.4" fill="#20161f"/>
        <path d="M30 14 Q24 6 16 6 M70 14 Q76 6 84 6" stroke="#4e4156" stroke-width="3" fill="none" stroke-linecap="round"/>`,
      vb: "0 0 100 100",
      name: { es: "El trilobites", ca: "El trilobit", en: "The trilobite", cs: "Trilobit", fr: "Le trilobite" },
      fact: { es: "Un bichito acorazado que vivió en el mar MUCHO antes que los dinosaurios. Sus fósiles están por todo el mundo.", ca: "Un bitxet cuirassat que va viure al mar MOLT abans que els dinosaures. Els seus fòssils són per tot el món.", en: "A little armoured creature that lived in the sea LONG before the dinosaurs. Its fossils are found all over the world.", cs: "Obrněný tvoreček, který žil v moři DÁVNO před dinosaury. Jeho fosilie se nacházejí po celém světě.", fr: "Une petite bête cuirassée qui vivait dans la mer BIEN avant les dinosaures. On trouve ses fossiles partout dans le monde." } },
    { emoji: "🦷", cat: "mar", x: 3560, y: 890, size: 2, w: 185, h: 78, art: `
        <path d="M4 40 Q10 26 26 24 L20 8 L42 20 Q80 8 120 18 Q152 26 166 40 Q152 54 120 62 Q80 72 42 60 Q28 64 18 72 L24 56 Q8 52 4 40 Z" fill="#5e7d99"/>
        <path d="M70 16 L82 2 L94 14 Z" fill="#47607d"/>
        <path d="M140 30 L166 24 M140 50 L166 56" stroke="#e8eef4" stroke-width="4" stroke-linecap="round"/>
        <path d="M132 34 L138 42 L144 34 L150 42 L156 35" stroke="#fff" stroke-width="3" fill="none"/>
        <circle cx="140" cy="30" r="4" fill="#0e1c29"/><circle cx="141.4" cy="28.6" r="1.3" fill="#fff"/>
        <path d="M74 62 L80 74 L88 62 Z" fill="#47607d"/>`,
      vb: "0 0 172 80",
      name: { es: "El megalodón", ca: "El megalodó", en: "The megalodon", cs: "Megalodon", fr: "Le mégalodon" },
      fact: { es: "El tiburón más grande que ha existido: sus dientes eran como tu mano. Vivió DESPUÉS de los dinosaurios, en el mar de las ballenas.", ca: "El tauró més gran que ha existit: les seves dents eren com la teva mà. Va viure DESPRÉS dels dinosaures, al mar de les balenes.", en: "The biggest shark that ever lived: its teeth were as big as your hand. It lived AFTER the dinosaurs, in the sea of the whales.", cs: "Největší žralok, jaký kdy žil: zuby měl velké jako tvoje ruka. Žil AŽ PO dinosaurech, v moři velryb.", fr: "Le plus grand requin de tous les temps : ses dents étaient grandes comme ta main. Il a vécu APRÈS les dinosaures, dans la mer des baleines." } }
  ];
  NEW.forEach(o => {
    ex.pois.push({ cat: o.cat, emoji: o.emoji, x: o.x, y: o.y, size: o.size, svg: dd(o.art, o.vb), iw: o.w, ih: o.h, name: o.name, fact: o.fact });
  });
})();
