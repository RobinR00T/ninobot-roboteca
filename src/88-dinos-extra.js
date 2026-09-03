"use strict";
/* ============================================================
   Ampliación del mapa de dinosaurios: más animales prehistóricos
   y una zona nueva de la Edad de Hielo al final del mapa.
   Cada animal deja clara su época: antes de los dinosaurios,
   con los dinosaurios, o después (en la edad de hielo).
   ============================================================ */

(function () {
  const dd = (inner, vb) => `<svg viewBox="${vb || "0 0 100 100"}" width="100%" height="100%">${inner}</svg>`;

  const ex = THEMES.dinos.content.explore;

  /* el mapa crece hacia la derecha: llega la edad de hielo */
  ex.width = 4700;
  ex.cats.push(
    { id: "hielo", emoji: "❄️", x: 4100, name: { es: "La edad de hielo", ca: "L'edat de gel", en: "The Ice Age", cs: "Doba ledová", fr: "L'âge de glace" } }
  );

  /* ---------- paisaje de hielo (x 4000-4700), sin tocar 60-deco.js ---------- */
  const oldDeco = ex.deco;
  ex.deco = function () {
    const prev = oldDeco.apply(this, arguments);
    const inner = prev.replace(/^<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "");
    let s = inner;
    /* aurora suave en el cielo */
    s += `<path d="M4020 200 Q4130 90 4260 160 Q4400 230 4530 130 Q4620 70 4700 120 L4700 40 Q4600 10 4480 60 Q4340 120 4200 70 Q4090 30 4020 90 Z" fill="rgba(105,240,174,.16)"/>
          <path d="M4060 260 Q4200 160 4360 220 Q4520 280 4680 190 L4690 148 Q4520 210 4380 160 Q4230 110 4080 200 Z" fill="rgba(179,136,255,.14)"/>`;
    /* glaciares azulados al fondo */
    s += `<path d="M4000 830 L4120 520 L4240 830 Z" fill="#b8dcec" opacity=".9"/>
          <path d="M4070 610 L4120 520 L4172 615 Q4120 590 4070 610 Z" fill="#f4fbff"/>
          <path d="M4180 840 L4330 460 L4480 840 Z" fill="#cfeaf6"/>
          <path d="M4288 565 L4330 460 L4374 568 Q4330 542 4288 565 Z" fill="#ffffff"/>
          <path d="M4420 840 L4560 540 L4700 810 L4700 840 Z" fill="#a9d4e8"/>
          <path d="M4520 626 L4560 540 L4602 628 Q4560 604 4520 626 Z" fill="#eef8fd"/>`;
    /* iceberg en el borde del mar */
    s += `<path d="M3870 700 L3905 590 L3935 640 L3962 566 L3998 700 Z" fill="#f2fbff"/>
          <path d="M3935 640 L3962 566 L3998 700 L3950 700 Z" fill="#d8eef8"/>
          <path d="M3872 702 L3996 702 L3974 782 L3896 776 Z" fill="rgba(214,241,250,.35)"/>`;
    /* suelo de nieve con lomas y grietas de hielo */
    s += `<path d="M3980 852 Q4150 800 4350 852 Q4550 902 4700 846 L4700 1100 L3980 1100 Z" fill="#e9f6fc"/>
          <path d="M3980 962 Q4200 930 4420 962 Q4580 982 4700 956 L4700 1100 L3980 1100 Z" fill="#d3e9f4"/>
          <path d="M4100 1002 L4180 1012 M4300 1032 L4390 1026 M4480 1012 L4560 1022" stroke="rgba(120,170,200,.5)" stroke-width="4" stroke-linecap="round"/>`;
    /* copos de nieve */
    [[4090, 180], [4210, 340], [4330, 150], [4460, 300], [4580, 210], [4640, 420], [4160, 470], [4360, 520], [4520, 560], [4260, 650], [4600, 650], [4080, 600]].forEach(p => {
      s += `<path d="M${p[0] - 9} ${p[1]} L${p[0] + 9} ${p[1]} M${p[0]} ${p[1] - 9} L${p[0]} ${p[1] + 9} M${p[0] - 6} ${p[1] - 6} L${p[0] + 6} ${p[1] + 6} M${p[0] - 6} ${p[1] + 6} L${p[0] + 6} ${p[1] - 6}" stroke="rgba(255,255,255,.8)" stroke-width="3" stroke-linecap="round"/>`;
    });
    return `<svg viewBox="0 0 4700 1100" preserveAspectRatio="none">${s}</svg>`;
  };

  /* ---------- los animales nuevos, cada uno con su época ---------- */
  const NEW = [

    /* Mamut lanudo: edad de hielo, después de los dinosaurios */
    { emoji: "🦣", cat: "hielo", x: 4180, y: 620, size: 2, w: 126, h: 96, art: `
        <defs><linearGradient id="eMam" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#b08968"/><stop offset="100%" stop-color="#6b4226"/></linearGradient></defs>
        <path d="M28 46 Q30 22 60 14 Q88 8 104 20 Q120 16 128 30 Q132 42 124 50 Q130 62 126 78 Q122 90 112 88 Q116 74 112 62 Q106 70 104 82 L106 96 L94 96 L92 82 L74 84 L76 96 L64 96 L62 82 L48 82 L50 96 L38 96 L36 78 Q24 64 28 46 Z" fill="url(#eMam)"/>
        <path d="M108 58 Q126 70 138 62 Q144 56 140 46" stroke="#f3ead6" stroke-width="7" fill="none" stroke-linecap="round"/>
        <path d="M104 64 Q116 74 128 72" stroke="#e2d3b4" stroke-width="5" fill="none" stroke-linecap="round"/>
        <circle cx="112" cy="32" r="3.6" fill="#2b1a0b"/><circle cx="113.2" cy="30.8" r="1.2" fill="#fff"/>
        <path d="M44 76 L42 86 M60 78 L58 88 M78 78 L76 88" stroke="#54331a" stroke-width="3" stroke-linecap="round"/>
        <path d="M36 40 Q60 30 96 34" stroke="#8a5f3c" stroke-width="3" fill="none" opacity=".6"/>`,
      vb: "0 0 148 104",
      name: { es: "Mamut lanudo", ca: "Mamut llanut", en: "Woolly mammoth", cs: "Mamut srstnatý", fr: "Mammouth laineux" },
      fact: { es: "Vivió DESPUÉS de los dinosaurios, en la edad de hielo, junto a los primeros humanos. Su abrigo de pelo y sus colmillos curvos lo protegían del frío y de la nieve.", ca: "Va viure DESPRÉS dels dinosaures, a l'edat de gel, amb els primers humans. El seu abric de pèl i els ullals corbats el protegien del fred i de la neu.", en: "It lived AFTER the dinosaurs, in the Ice Age, alongside the first humans. Its furry coat and huge curved tusks kept it safe from the cold and the snow.", cs: "Žil AŽ PO dinosaurech, v době ledové, spolu s prvními lidmi. Chlupatý kožich a zahnuté kly ho chránily před mrazem a sněhem.", fr: "Il a vécu APRÈS les dinosaures, à l'âge de glace, avec les premiers humains. Son manteau de poils et ses défenses courbées le protégeaient du froid et de la neige." } },

    /* Tigre dientes de sable (Smilodon): edad de hielo */
    { emoji: "🐅", cat: "hielo", x: 4400, y: 790, w: 98, h: 60, art: `
        <defs><linearGradient id="eSmi" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e6b05f"/><stop offset="100%" stop-color="#9c6224"/></linearGradient></defs>
        <path d="M14 40 Q10 26 26 22 Q46 16 66 18 Q84 16 94 22 Q96 12 104 10 L106 18 Q114 16 118 24 Q120 34 110 38 Q108 46 100 48 Q92 60 76 62 L78 72 L68 72 L66 62 L44 62 L46 72 L36 72 L34 60 Q18 56 14 40 Z" fill="url(#eSmi)"/>
        <path d="M14 38 Q4 34 2 24" stroke="#9c6224" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M102 44 Q101 54 98 60 M110 42 Q110 52 108 58" stroke="#fff" stroke-width="3.4" fill="none" stroke-linecap="round"/>
        <circle cx="104" cy="26" r="3" fill="#331d05"/><circle cx="105" cy="25" r="1" fill="#fff"/>
        <path d="M96 34 Q102 38 108 36" stroke="#6b3f12" stroke-width="2.4" fill="none" stroke-linecap="round"/>
        <path d="M34 30 L32 22 M48 28 L46 20 M62 28 L60 20" stroke="#b47c33" stroke-width="2.6" stroke-linecap="round"/>`,
      vb: "0 0 122 74",
      name: { es: "Tigre dientes de sable", ca: "Tigre de dents de sabre", en: "Sabre-toothed tiger", cs: "Šavlozubý tygr", fr: "Tigre à dents de sabre" },
      fact: { es: "Sus colmillos eran como cuchillos largos. Vivió en la edad de hielo, DESPUÉS de los dinosaurios: nunca llegó a conocerlos.", ca: "Els seus ullals eren com ganivets llargs. Va viure a l'edat de gel, DESPRÉS dels dinosaures: mai no els va conèixer.", en: "Its fangs were like long knives. It lived in the Ice Age, AFTER the dinosaurs: it never met them.", cs: "Jeho tesáky byly jako dlouhé nože. Žil v době ledové, AŽ PO dinosaurech: nikdy se s nimi nepotkal.", fr: "Ses crocs étaient comme de longs couteaux. Il a vécu à l'âge de glace, APRÈS les dinosaures : il ne les a jamais rencontrés." } },

    /* Rinoceronte lanudo: edad de hielo */
    { emoji: "🦬", cat: "hielo", x: 4540, y: 560, w: 100, h: 64, art: `
        <defs><linearGradient id="eRin" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#9d7b64"/><stop offset="100%" stop-color="#4e342e"/></linearGradient></defs>
        <path d="M92 32 Q112 32 120 44 Q124 56 112 58 Q104 70 86 72 L88 84 L78 84 L76 74 L46 74 L48 84 L38 84 L36 72 Q16 66 14 50 Q14 36 36 32 Q62 26 92 32 Z" fill="url(#eRin)"/>
        <path d="M118 42 Q130 32 134 16 Q122 24 112 34 Z" fill="#efe5d8"/>
        <path d="M102 32 L107 20 L112 32 Z" fill="#efe5d8"/>
        <circle cx="104" cy="44" r="3.2" fill="#241209"/><circle cx="105.2" cy="42.8" r="1.1" fill="#fff"/>
        <path d="M34 36 L32 26 M50 34 L48 24 M66 34 L64 24 M82 34 L80 24" stroke="#6a4a38" stroke-width="3" stroke-linecap="round"/>
        <path d="M40 70 L38 78 M58 72 L56 80" stroke="#3b2620" stroke-width="3" stroke-linecap="round"/>`,
      vb: "0 0 138 88",
      name: { es: "Rinoceronte lanudo", ca: "Rinoceront llanut", en: "Woolly rhinoceros", cs: "Nosorožec srstnatý", fr: "Rhinocéros laineux" },
      fact: { es: "Un rinoceronte con abrigo de lana y un cuerno enorme. Vivió en la edad de hielo, mucho DESPUÉS de los dinosaurios.", ca: "Un rinoceront amb abric de llana i una banya enorme. Va viure a l'edat de gel, molt DESPRÉS dels dinosaures.", en: "A rhinoceros with a woolly coat and a huge horn. It lived in the Ice Age, long AFTER the dinosaurs.", cs: "Nosorožec s vlněným kožichem a obrovským rohem. Žil v době ledové, dlouho PO dinosaurech.", fr: "Un rhinocéros avec un manteau de laine et une corne énorme. Il a vécu à l'âge de glace, bien APRÈS les dinosaures." } },

    /* Archaeopteryx: Jurásico, con los dinosaurios */
    { emoji: "🐦", cat: "cielo", x: 2920, y: 360, w: 48, h: 34, art: `
        <defs><linearGradient id="eArq" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#5ec6ba"/><stop offset="100%" stop-color="#00796b"/></linearGradient></defs>
        <path d="M44 32 Q28 12 6 16 Q16 24 24 34 Q34 44 44 42 Z" fill="url(#eArq)"/>
        <path d="M56 32 Q72 12 94 16 Q84 24 76 34 Q66 44 56 42 Z" fill="url(#eArq)"/>
        <path d="M22 30 L17 25 M78 30 L83 25" stroke="#ffd54f" stroke-width="2.4" stroke-linecap="round"/>
        <path d="M44 34 Q50 28 56 34 L54 50 Q50 54 46 50 Z" fill="#e07856"/>
        <path d="M50 30 Q48 20 40 18 L56 14 Q56 24 52 28 Z" fill="#c65b3c"/>
        <path d="M47 50 Q42 60 34 64 M50 51 Q49 61 44 66 M52 50 Q56 60 54 66" stroke="#00796b" stroke-width="3" fill="none" stroke-linecap="round"/>
        <circle cx="50" cy="21" r="2.2" fill="#26120a"/><circle cx="50.8" cy="20.2" r=".8" fill="#fff"/>`,
      vb: "0 0 100 70",
      name: { es: "Arqueópterix", ca: "Arqueòpterix", en: "Archaeopteryx", cs: "Archaeopteryx", fr: "Archéoptéryx" },
      fact: { es: "El primer pájaro conocido: mitad dinosaurio, mitad ave. Vivió en el Jurásico, con los dinosaurios, y tenía plumas, dientes y garras en las alas.", ca: "El primer ocell conegut: meitat dinosaure, meitat ocell. Va viure al Juràssic, amb els dinosaures, i tenia plomes, dents i urpes a les ales.", en: "The first bird we know of: half dinosaur, half bird. It lived in the Jurassic, with the dinosaurs, and had feathers, teeth and little claws on its wings.", cs: "První známý pták: napůl dinosaurus, napůl ptáček. Žil v juře, spolu s dinosaury, a měl peří, zuby a drápky na křídlech.", fr: "Le premier oiseau connu : moitié dinosaure, moitié oiseau. Il vivait au Jurassique, avec les dinosaures, et il avait des plumes, des dents et des griffes sur les ailes." } },

    /* Meganeura: antes de los dinosaurios */
    { emoji: "🦟", cat: "cielo", x: 3340, y: 340, w: 62, h: 32, art: `
        <ellipse cx="42" cy="18" rx="27" ry="7.5" fill="rgba(186,232,242,.75)" transform="rotate(-14 42 18)"/>
        <ellipse cx="84" cy="16" rx="24" ry="7" fill="rgba(186,232,242,.75)" transform="rotate(16 84 16)"/>
        <ellipse cx="44" cy="30" rx="24" ry="6.5" fill="rgba(150,214,230,.6)" transform="rotate(-4 44 30)"/>
        <ellipse cx="82" cy="30" rx="21" ry="6" fill="rgba(150,214,230,.6)" transform="rotate(6 82 30)"/>
        <path d="M22 16 L60 21 M28 12 L62 19 M68 12 L100 18 M70 30 L98 32" stroke="rgba(255,255,255,.55)" stroke-width="1.6"/>
        <rect x="6" y="35" width="56" height="7" rx="3.5" fill="#6aa84f"/>
        <path d="M14 35 L14 42 M24 35 L24 42 M34 35 L34 42 M44 35 L44 42 M54 35 L54 42" stroke="#4c7a36" stroke-width="2"/>
        <circle cx="68" cy="38" r="8" fill="#7cb35c"/>
        <circle cx="79" cy="37" r="6.5" fill="#8fbf6e"/>
        <circle cx="82" cy="34" r="3" fill="#26350f"/><circle cx="83" cy="33" r="1" fill="#fff"/>`,
      vb: "0 0 112 58",
      name: { es: "Meganeura", ca: "Meganeura", en: "Meganeura", cs: "Meganeura", fr: "Meganeura" },
      fact: { es: "¡Una libélula gigante con alas de 70 centímetros! Vivió ANTES que los dinosaurios, cuando los insectos eran enormes.", ca: "Una libèl·lula gegant amb ales de 70 centímetres! Va viure ABANS que els dinosaures, quan els insectes eren enormes.", en: "A giant dragonfly with wings 70 centimetres wide. It lived BEFORE the dinosaurs, when insects were enormous.", cs: "Obří vážka s rozpětím křídel 70 centimetrů. Žila PŘED dinosaury, v době, kdy byl hmyz obrovský.", fr: "Une libellule géante avec des ailes de 70 centimètres ! Elle a vécu AVANT les dinosaures, quand les insectes étaient énormes." } },

    /* Dimetrodon: antes de los dinosaurios, y no era uno de ellos */
    { emoji: "🦎", cat: "volcan", x: 980, y: 720, w: 92, h: 62, art: `
        <defs><linearGradient id="eDim" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#aec45c"/><stop offset="100%" stop-color="#5d7a23"/></linearGradient></defs>
        <path d="M32 48 Q36 10 66 6 Q96 10 100 48 Z" fill="#ef8a3c"/>
        <path d="M42 44 Q44 24 52 16 M58 42 Q60 18 66 10 M74 42 Q76 20 82 16 M88 44 Q88 30 92 24" stroke="#c65f16" stroke-width="2.6" fill="none" stroke-linecap="round"/>
        <path d="M98 50 Q114 48 122 56 L120 62 L104 62 Q98 66 96 64 Q86 76 70 78 L72 86 L62 86 L60 78 L44 78 L46 86 L36 86 L34 76 Q18 72 14 60 Q16 48 34 46 Q64 42 98 50 Z" fill="url(#eDim)"/>
        <path d="M14 58 Q4 60 2 68" stroke="#5d7a23" stroke-width="5" fill="none" stroke-linecap="round"/>
        <circle cx="108" cy="54" r="3" fill="#1e2a08"/><circle cx="109" cy="53" r="1" fill="#fff"/>
        <path d="M112 60 Q116 62 120 60" stroke="#3f5416" stroke-width="2.2" fill="none" stroke-linecap="round"/>`,
      vb: "0 0 130 88",
      name: { es: "Dimetrodón", ca: "Dimetrodon", en: "Dimetrodon", cs: "Dimetrodon", fr: "Dimétrodon" },
      fact: { es: "Parece un dinosaurio, ¡pero no lo era! Vivió ANTES que los dinosaurios y su gran vela le ayudaba a calentarse al sol.", ca: "Sembla un dinosaure, però no ho era! Va viure ABANS que els dinosaures i la seva gran vela l'ajudava a escalfar-se al sol.", en: "It looks like a dinosaur, but it was not one! It lived BEFORE the dinosaurs and its big sail helped it warm up in the sun.", cs: "Vypadá jako dinosaurus, ale žádný dinosaurus to nebyl! Žil PŘED dinosaury a velkou plachtou na hřbetě se ohříval na slunci.", fr: "On dirait un dinosaure, mais non ! Il a vécu AVANT les dinosaures et sa grande voile l'aidait à se chauffer au soleil." } },

    /* Dunkleosteus: mucho antes de los dinosaurios, en los mares antiguos.
       Nada pasado el banco de arena de la cala: donde estaba antes (x 3090)
       quedaba medio varado en la playa, con la etiqueta sobre la arena */
    { emoji: "🐡", cat: "mar", x: 3252, y: 956, w: 118, h: 56, art: `
        <defs><linearGradient id="eDun" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#607d8b"/><stop offset="100%" stop-color="#263238"/></linearGradient></defs>
        <path d="M10 38 Q16 24 34 22 Q66 12 98 20 Q130 26 146 38 Q130 50 98 56 Q66 62 34 54 Q16 52 10 38 Z" fill="url(#eDun)"/>
        <path d="M10 36 Q2 26 0 16 L16 28 Z M10 40 Q2 50 0 60 L16 48 Z" fill="#37474f"/>
        <path d="M58 20 L66 8 L76 18 Z" fill="#37474f"/>
        <path d="M96 18 Q130 26 146 38 Q130 50 96 58 Q106 38 96 18 Z" fill="#a7bcc7"/>
        <path d="M104 24 Q112 38 104 52 M118 26 Q124 38 118 50" stroke="#7e97a3" stroke-width="2.6" fill="none"/>
        <path d="M128 32 L138 36 L128 40 L133 36 Z" fill="#fff"/>
        <path d="M126 34 L132 39 L139 33 L146 38" stroke="#eceff1" stroke-width="2.6" fill="none" stroke-linecap="round"/>
        <circle cx="122" cy="30" r="3.8" fill="#0d1b22"/><circle cx="123.3" cy="28.7" r="1.2" fill="#fff"/>`,
      vb: "0 0 154 74",
      name: { es: "Dunkleosteus", ca: "Dunkleosteus", en: "Dunkleosteus", cs: "Dunkleosteus", fr: "Dunkleosteus" },
      fact: { es: "Un pez gigante con casco de placas de hueso. Vivió en los mares antiguos, MUCHO antes que los dinosaurios, y mordía con placas afiladas en vez de dientes.", ca: "Un peix gegant amb casc de plaques d'os. Va viure als mars antics, MOLT abans que els dinosaures, i mossegava amb plaques esmolades en comptes de dents.", en: "A giant fish with a helmet of bony plates. It lived in the ancient seas, LONG before the dinosaurs, and it bit with sharp plates instead of teeth.", cs: "Obří ryba s helmou z kostěných plátů. Žila v pravěkých mořích DÁVNO před dinosaury a místo zubů měla ostré kostěné čepele.", fr: "Un poisson géant avec un casque de plaques d'os. Il a vécu dans les mers anciennes, BIEN avant les dinosaures, et il mordait avec des plaques tranchantes au lieu de dents." } }
  ];

  NEW.forEach(o => {
    ex.pois.push({ cat: o.cat, emoji: o.emoji, x: o.x, y: o.y, size: o.size, svg: dd(o.art, o.vb), iw: o.w, ih: o.h, name: o.name, fact: o.fact });
  });
})();
