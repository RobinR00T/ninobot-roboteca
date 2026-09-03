"use strict";
/* ============================================================
   Extras de COCINA: tarjeta de portada, celebración del taller,
   rutina de cuidar (vida práctica) y caras de los 5 famosos.
   Todo con guardas por si algún bloque aún no existe.
   ============================================================ */

/* ---------- TARJETA DE PORTADA: la olla al fuego y el gorro ---------- */
if (typeof THEME_CARDS !== "undefined") {
  THEME_CARDS.cocina = `<svg viewBox="0 0 120 70" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
    <defs>
      <linearGradient id="tcOllaCoc" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#FB8C00"/>
        <stop offset="100%" stop-color="#E65100"/>
      </linearGradient>
    </defs>
    <!-- vapor que sube de la olla -->
    <path d="M38 26 Q36 18 42 14 M50 24 Q50 12 57 10 M64 26 Q66 16 72 14" stroke="#ECEFF1" stroke-width="3.4" fill="none" stroke-linecap="round" opacity="0.85">
      <animate attributeName="opacity" values="0.85;0.25;0.85" dur="2.2s" repeatCount="indefinite"/>
    </path>
    <!-- la olla con sus asas -->
    <ellipse cx="52" cy="32" rx="24" ry="4.6" fill="#BF360C"/>
    <path d="M28 33 L76 33 Q77 52 68 58 Q52 64 36 58 Q27 52 28 33 Z" fill="url(#tcOllaCoc)"/>
    <path d="M28 38 L21 35 Q17 39 21 43 L28 43 Z" fill="#E65100"/>
    <path d="M76 38 L83 35 Q87 39 83 43 L76 43 Z" fill="#E65100"/>
    <path d="M33 38 Q52 42 71 38" stroke="#FFCC80" stroke-width="2.4" fill="none" opacity="0.8"/>
    <circle cx="52" cy="27" r="3.4" fill="#FFB74D"/>
    <!-- el fueguecito de debajo -->
    <path d="M44 62 Q47 66 50 62 M52 63 Q55 67 58 63" stroke="#FFB300" stroke-width="3" fill="none" stroke-linecap="round">
      <animate attributeName="opacity" values="1;0.4;1" dur="0.7s" repeatCount="indefinite"/>
    </path>
    <!-- el gorro de chef, apoyado al lado -->
    <path d="M92 44 Q88 34 96 31 Q97 24 104 26 Q111 24 112 31 Q120 34 116 44 L114 50 L94 50 Z" fill="#FAFAFA"/>
    <rect x="93" y="49" width="22" height="6" rx="3" fill="#ECEFF1"/>
    <!-- la cuchara de madera -->
    <ellipse cx="14" cy="47" rx="6" ry="8" fill="#D8A15C"/>
    <rect x="12" y="53" width="4" height="14" rx="2" fill="#BF8D5A"/>
    <!-- chispitas -->
    <circle cx="90" cy="14" r="1.6" fill="#FFF59D">
      <animate attributeName="opacity" values="1;0.2;1" dur="1.8s" repeatCount="indefinite"/>
    </circle>
    <circle cx="16" cy="16" r="1.4" fill="#FFF59D"/>
  </svg>`;
}

/* ---------- CELEBRACIÓN DEL TALLER: la fiesta de la tarta ---------- */
if (typeof CELEBRATIONS !== "undefined") {
  CELEBRATIONS.cocina = {
    bg: "radial-gradient(circle at 50% 25%, #fff8e1 0%, #ffe0b2 45%, #ffb74d 100%)",
    extra: "<svg viewBox='0 0 1000 700' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 60 L120 110 L240 60 L360 110 L480 60 L600 110 L720 60 L840 110 L1000 60' fill='none' stroke='#ef9a9a' stroke-width='7' opacity='0.5' stroke-linejoin='round'/><path d='M60 62 L92 108 L124 62 Z' fill='#ef5350' opacity='0.55'/><path d='M300 62 L332 108 L364 62 Z' fill='#ffd54f' opacity='0.55'/><path d='M540 62 L572 108 L604 62 Z' fill='#66bb6a' opacity='0.55'/><path d='M780 62 L812 108 L844 62 Z' fill='#4fc3f7' opacity='0.55'/><circle cx='130' cy='230' r='14' fill='#ef9a9a' opacity='0.5'/><circle cx='870' cy='200' r='12' fill='#ce93d8' opacity='0.5'/><circle cx='920' cy='330' r='9' fill='#fff176' opacity='0.6'/><circle cx='80' cy='380' r='10' fill='#80deea' opacity='0.5'/><rect x='180' y='300' width='16' height='7' rx='3.5' fill='#ef5350' opacity='0.55' transform='rotate(24 188 303)'/><rect x='760' y='420' width='16' height='7' rx='3.5' fill='#66bb6a' opacity='0.55' transform='rotate(-30 768 423)'/><rect x='420' y='180' width='16' height='7' rx='3.5' fill='#ab47bc' opacity='0.5' transform='rotate(12 428 183)'/><rect x='610' y='300' width='16' height='7' rx='3.5' fill='#ffb300' opacity='0.55' transform='rotate(-18 618 303)'/><path d='M480 640 Q500 610 520 640 M440 660 Q500 600 560 660' stroke='#ffffff' stroke-width='6' fill='none' opacity='0.4' stroke-linecap='round'/><ellipse cx='500' cy='672' rx='210' ry='16' fill='#ffffff' opacity='0.35'/><path d='M0 640 Q250 610 500 640 T1000 640 L1000 700 L0 700 Z' fill='#ffcc80' opacity='0.75'/></svg>",
    move: "jump",
    say: {
      es: "¡{name}, tu tarta ha quedado preciosa! ¡Que empiece la fiesta de cumpleaños!",
      ca: "{name}, el teu pastís ha quedat preciós! Que comenci la festa d'aniversari!",
      en: "{name}, your cake looks amazing! Let the birthday party begin!",
      cs: "{name}, tvůj dort se ti moc povedl! Ať začne narozeninová oslava!",
      fr: "{name}, ton gâteau est magnifique ! Que la fête d'anniversaire commence !"
    },
    jingle: { type: "melody", instr: "xylo", notes: [64, 67, 72, 76], nd: 0.2, gap: 0.15, vol: 0.14 }
  };
}

/* ---------- MODO CUIDAR: hoy cocinas tú (vida práctica) ---------- */
if (typeof CARE !== "undefined") {
  CARE.cocina = {
    before: "🥣", after: "🍲", deco: "🧼 🥕 ✨",
    title: { es: "Hoy cocinas tú", ca: "Avui cuines tu", en: "Today you cook", cs: "Dnes vaříš ty", fr: "Aujourd'hui, tu cuisines" },
    intro: { es: "La olla espera tranquila en el fuego pequeñito. Cocinar en calma empieza siempre por el mismo sitio, {name}.", ca: "L'olla espera tranquil·la al foc petitó. Cuinar amb calma comença sempre pel mateix lloc, {name}.", en: "The pot waits calmly on the low heat. Calm cooking always starts in the same place, {name}.", cs: "Hrnec klidně čeká na mírném ohni. Klidné vaření začíná vždycky na stejném místě, {name}.", fr: "La marmite attend tranquillement sur le petit feu. Cuisiner calmement commence toujours au même endroit, {name}." },
    steps: [
      { e: "🧼", t: { es: "Lávate las manos", ca: "Renta't les mans", en: "Wash your hands", cs: "Umyj si ruce", fr: "Lave-toi les mains" } },
      { e: "🥕", t: { es: "Lava las verduras", ca: "Renta les verdures", en: "Wash the vegetables", cs: "Umyj zeleninu", fr: "Lave les légumes" } },
      { e: "🥄", t: { es: "Remueve la olla despacito", ca: "Remena l'olla a poc a poc", en: "Stir the pot slowly", cs: "Pomalu zamíchej hrnec", fr: "Remue la marmite doucement" } },
      { e: "🧽", t: { es: "Friega y guarda los cacharros", ca: "Frega i desa els estris", en: "Wash and put away the dishes", cs: "Umyj a ukliď nádobí", fr: "Lave et range les ustensiles" } }
    ],
    done: { es: "La sopa huele de maravilla y la cocina queda limpia y en calma. Mañana volverá a esperarte.", ca: "La sopa fa una olor meravellosa i la cuina queda neta i en calma. Demà tornarà a esperar-te.", en: "The soup smells wonderful and the kitchen is clean and calm. Tomorrow it will be waiting for you again.", cs: "Polévka báječně voní a kuchyně je čistá a klidná. Zítra tu na tebe bude čekat znovu.", fr: "La soupe sent merveilleusement bon et la cuisine reste propre et calme. Demain, elle t'attendra encore." }
  };
}

/* ---------- CARAS de los 5 famosos de la cocina ---------- */
if (typeof makeCara !== "undefined") {
  (function () {
    const F1 = "#f6d5b8", F2 = "#eec39a";
    const gafitas = `<circle cx="42" cy="52" r="6.6" fill="none" stroke="#37474f" stroke-width="2.4"/><circle cx="58" cy="52" r="6.6" fill="none" stroke="#37474f" stroke-width="2.4"/><line x1="48.6" y1="52" x2="51.4" y2="52" stroke="#37474f" stroke-width="2.4"/>`;
    const cuello = c => `<rect x="33" y="83" width="34" height="10" rx="5" fill="${c}"/>`;
    /* el gorro de chef: un path blanco que corona la cabeza */
    const gorro = `<path d="M32 31 L68 31 L66 18 Q75 17 73 8 Q67 0 57 4 Q50 -3 43 4 Q33 0 27 8 Q25 17 34 18 Z" fill="#fdfdfd"/><rect x="33" y="29" width="34" height="7" rx="3.5" fill="#eceff1"/>`;

    const CFG = {
      /* Escoffier: pelo y bigote blancos de época, cuello formal con medalla y su gorro */
      "Auguste Escoffier": [F1, "#e8e2d6", "short", gorro + cuello("#263238") + `<circle cx="50" cy="90" r="3.2" fill="#ffd54f"/>`, "must"],
      /* Brazier: moño, delantal blanco de la Mère y una estrellita */
      "Eugénie Brazier": [F1, "#c9c2b8", "bun", `<path d="M38 83 Q50 77 62 83" stroke="#fafafa" stroke-width="3" fill="none"/><path d="M36 84 L64 84 L61 96 L39 96 Z" fill="#fafafa"/><path d="M74 24 L75.4 27.8 L79.4 29.2 L75.4 30.6 L74 34.4 L72.6 30.6 L68.6 29.2 L72.6 27.8 Z" fill="#ffd54f"/>`],
      /* Julia Child: alta y sonriente, ondas castañas y su collar de perlas */
      "Julia Child": [F1, "#8d6242", "waves", cuello("#1565c0") + `<circle cx="38" cy="85" r="2.6" fill="#fff"/><circle cx="45" cy="88" r="2.6" fill="#fff"/><circle cx="52" cy="89" r="2.6" fill="#fff"/><circle cx="59" cy="87" r="2.6" fill="#fff"/><path d="M42 63 Q50 70 58 63" stroke="#5a3a28" stroke-width="2.6" fill="none" stroke-linecap="round"/>`],
      /* Simone Ortega: gafitas, moño gris y su libro de recetas */
      "Simone Ortega": [F1, "#c9c2b8", "bun", gafitas + cuello("#00695c") + `<rect x="66" y="84" width="14" height="10" rx="2" fill="#fff8e1"/><line x1="73" y1="84" x2="73" y2="94" stroke="#bcaaa4" stroke-width="1.6"/>`],
      /* Adrià: entradas, cejas expresivas, camiseta negra y la chispa creativa */
      "Ferran Adrià": [F2, "#3e2a20", "bald", cuello("#212121") + `<path d="M35 44 Q41 39 47 43 M53 43 Q59 39 65 44" stroke="#3e2a20" stroke-width="2.6" fill="none" stroke-linecap="round"/><path d="M77 24 L78.6 28.4 L83 30 L78.6 31.6 L77 36 L75.4 31.6 L71 30 L75.4 28.4 Z" fill="#ffb300"/>`]
    };

    const th = THEMES.cocina;
    if (th && th.content && th.content.famous) {
      th.content.famous.forEach(f => {
        const c = CFG[f.name.es];
        if (c) f.face = makeCara(c[0], c[1], c[2], c[3], c[4]).svg;
      });
    }
  })();
}
