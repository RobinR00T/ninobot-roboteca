"use strict";
/* ============================================================
   Alfabeto: dibujo representativo POR IDIOMA.
   La palabra de cada letra cambia según el idioma; aquí se
   asigna a cada letra el emoji que representa la palabra en
   cada idioma (a.em). Si un idioma no aparece, se usa a.emoji.
   ============================================================ */

(function () {
  const FIX = {
    espacio: {
      A: { es: "🪨", ca: "🪨", en: "🪨", cs: "🪨", fr: "🪨" },
      C: { es: "☄️", ca: "☄️", en: "☄️", cs: "🚀", fr: "☄️" },
      D: { es: "🚀", ca: "📏", en: "🛰️", cs: "🔭", fr: "🚀" },
      E: { en: "🌍", cs: "🪐" },
      F: { en: "🌕", cs: "🌗", fr: "🚀" },
      H: { cs: "⭐" },
      I: { en: "🛰️", cs: "🛰️" },
      J: { es: "🟠", ca: "🟠", en: "🟠", cs: "🟠", fr: "🟠" },
      K: { ca: "🛰️", cs: "☄️" },
      L: { en: "🚙", cs: "👨‍🚀" },
      N: { cs: "🌌" },
      V: { en: "🌕" },
      Z: { en: "🎈", cs: "🌍" }
    },
    dinos: {
      C: { es: "💀", ca: "💀", en: "🪝", cs: "🦏", fr: "💀" },
      E: { en: "🥚", cs: "⏳", fr: "🐾" },
      H: { cs: "🪹" },
      L: { cs: "🦕" },
      M: { es: "🐊", ca: "🐊", en: "🐊", cs: "🐊", fr: "🐊" },
      N: { es: "🪹", ca: "🪹", en: "🪹", cs: "🛡️", fr: "🪹" },
      Q: { es: "🦅", ca: "🦅", en: "🦅", cs: "🦅", fr: "🦅" }
    },
    cuerpo: {
      B: { en: "🦴", cs: "🍽️" },
      C: { en: "🦠", cs: "🩸" },
      D: { en: "🍽️", cs: "💨" },
      E: { en: "👂", cs: "⚡", fr: "🍲" },
      G: { en: "🦠", cs: "🧬" },
      H: { ca: "💧", en: "❤️", cs: "👤" },
      J: { en: "🤸", cs: "🥩" },
      K: { en: "🫘", cs: "🦴" },
      L: { en: "🫁", cs: "💀" },
      M: { cs: "🧠" },
      O: { ca: "👂", en: "🫀", fr: "👂" },
      P: { en: "💓" },
      Q: { en: "🦵", cs: "🦵", fr: "🦵" },
      R: { en: "🦴", cs: "🖐️" },
      S: { en: "🩹", cs: "❤️", fr: "💀" },
      T: { en: "🦷", cs: "💓" },
      U: { en: "😮", cs: "👂", fr: "🚽" },
      V: { cs: "💇" },
      Y: { ca: "🧘", en: "🥱", cs: "🧘", fr: "👀" },
      Z: { es: "🙌", cs: "🦷" }
    },
    tierramedia: {
      C: { en: "🧥", cs: "🥾" },
      J: { ca: "💎", en: "🥾", cs: "🕳️", fr: "🌷" },
      K: { en: "👑", cs: "🐴" },
      N: { en: "😴", cs: "👑", fr: "⛏️" },
      O: { es: "👹", ca: "👹", en: "👹", cs: "🦁", fr: "👹" },
      Q: { ca: "🧺", en: "🗺️", cs: "🗺️", fr: "🗺️" },
      R: { fr: "🐎" },
      T: { cs: "⛏️" },
      U: { en: "⛰️", cs: "🏞️" },
      V: { cs: "🧔" },
      W: { en: "🧙" },
      Y: { ca: "🌳", en: "🌼", cs: "🌳", fr: "🦅" },
      Z: { ca: "🦁", en: "🥾", cs: "💰", fr: "🥾" }
    },
    oceano: {
      B: { cs: "🫧" },
      C: { cs: "🐬" },
      E: { en: "🐟", cs: "⚡" },
      F: { en: "🐟", cs: "🏔️", fr: "🐚" },
      G: { en: "🐟", cs: "🌊", fr: "🐦" },
      H: { en: "🦀", cs: "⭐" },
      I: { cs: "🐙" },
      J: { es: "🪸", ca: "🪸", en: "🪼", cs: "🥚", fr: "🪸" },
      L: { cs: "🐚" },
      M: { en: "🐟", cs: "🪼" },
      O: { cs: "🌊" },
      P: { en: "🐡", cs: "🦪" },
      Q: { ca: "⛵", en: "❓", cs: "❓", fr: "⛵" },
      R: { en: "🪸", cs: "🐟" },
      S: { en: "🐴", cs: "🦑" },
      T: { es: "🦈", ca: "🦈", en: "🐢", cs: "🦭", fr: "🐢" },
      U: { en: "🦔", cs: "🐟" },
      V: { es: "🐚", ca: "⛵", en: "🌋", cs: "🐋", fr: "🌊" },
      W: { en: "🐋" }
    },
    animales: {
      A: { en: "🐜", cs: "🦌" },
      B: { es: "🦉", ca: "🦬", en: "🐻", cs: "🦫", fr: "🦬" },
      C: { en: "🐆", cs: "🦗" },
      D: { en: "🦌", cs: "🐦", fr: "🐪" },
      E: { cs: "🐦" },
      F: { en: "🦊", cs: "🦊" },
      G: { en: "🦒", cs: "🐆", fr: "🦒" },
      H: { en: "🦔" },
      I: { cs: "🐦" },
      J: { ca: "🐆", en: "🐆", cs: "🦔", fr: "🐆" },
      M: { cs: "🐻", fr: "🐧" },
      N: { ca: "🐃", en: "🐦", cs: "🦏", fr: "🐦" },
      O: { en: "🦉", cs: "🦅" },
      P: { cs: "🐦" },
      R: { en: "🐰", cs: "🐱", fr: "🦊" },
      S: { en: "🐿️", cs: "🐘", fr: "🐒" },
      U: { ca: "🦘", en: "☂️", cs: "🐍", fr: "🦅" },
      V: { en: "🦅", cs: "🐺" },
      Z: { es: "🦊" }
    },
    musica: {
      B: { en: "🪕" },
      C: { es: "👏", ca: "👏", en: "🎻", cs: "🎻", fr: "👏" },
      G: { cs: "🔔" },
      I: { cs: "🎤" },
      M: { cs: "🎵" },
      T: { en: "🎺", cs: "🎺" },
      V: { cs: "💃" },
      W: { es: "👏", ca: "👏", en: "😗", cs: "👏", fr: "👏" },
      Y: { en: "🏔️", cs: "🏔️", fr: "🏔️" },
      Z: { es: "🥁", ca: "🥁", en: "🪕", cs: "🔔", fr: "🥁" }
    }
  };

  Object.keys(FIX).forEach(id => {
    const th = THEMES[id];
    if (!th || !th.content || !th.content.alphabet) return;
    th.content.alphabet.forEach(a => {
      const m = FIX[id][a.letter];
      if (m) a.em = m;
    });
  });
})();
