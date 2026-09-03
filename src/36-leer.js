"use strict";
/* ============================================================
   ESCUELA DE LECTURA: contenido de las lecciones (5 idiomas).
   Método fonético-silábico progresivo, el que usan los colegios
   con ortografías transparentes: primero el sonido de las
   vocales, luego sílabas directas (ma-pa-sa-la-ta), luego
   palabras bisílabas leídas despacio, y al final frases cortas.
   ============================================================ */

/* Lección 1: las vocales, cada una con su palabra ancla (A de abeja) */
const LEER_VOCALES = {
  es: [
    { l: "A", w: "abeja", e: "🐝" },
    { l: "E", w: "elefante", e: "🐘" },
    { l: "I", w: "isla", e: "🏝️" },
    { l: "O", w: "oso", e: "🐻" },
    { l: "U", w: "uva", e: "🍇" }
  ],
  ca: [
    { l: "A", w: "abella", e: "🐝" },
    { l: "E", w: "elefant", e: "🐘" },
    { l: "I", w: "illa", e: "🏝️" },
    { l: "O", w: "ós", e: "🐻" },
    { l: "U", w: "unicorn", e: "🦄" }
  ],
  en: [
    { l: "A", w: "apple", e: "🍎" },
    { l: "E", w: "elephant", e: "🐘" },
    { l: "I", w: "insect", e: "🐛" },
    { l: "O", w: "octopus", e: "🐙" },
    { l: "U", w: "umbrella", e: "☂️" }
  ],
  cs: [
    { l: "A", w: "ananas", e: "🍍" },
    { l: "E", w: "elf", e: "🧝" },
    { l: "I", w: "inkoust", e: "🖋️" },
    { l: "O", w: "oko", e: "👁️" },
    { l: "U", w: "ucho", e: "👂" }
  ],
  fr: [
    { l: "A", w: "avion", e: "✈️" },
    { l: "E", w: "escargot", e: "🐌" },
    { l: "I", w: "île", e: "🏝️" },
    { l: "O", w: "orange", e: "🍊" },
    { l: "U", w: "univers", e: "🌌" }
  ]
};

/* Lección 2: consonantes para formar sílabas directas (CV).
   El orden m-p-s-l-t es el clásico de los métodos de lectura. */
const LEER_CONS = ["m", "p", "s", "l", "t"];

/* Lección 3: primeras palabras, cortas y transparentes, con dibujo */
const LEER_PALABRAS = {
  es: [
    { w: "mamá", e: "👩" }, { w: "papá", e: "👨" }, { w: "luna", e: "🌙" },
    { w: "sopa", e: "🍜" }, { w: "pato", e: "🦆" }, { w: "mano", e: "✋" },
    { w: "pera", e: "🍐" }, { w: "casa", e: "🏠" }, { w: "boca", e: "👄" },
    { w: "gato", e: "🐱" }
  ],
  ca: [
    { w: "mama", e: "👩" }, { w: "papa", e: "👨" }, { w: "lluna", e: "🌙" },
    { w: "sopa", e: "🍜" }, { w: "poma", e: "🍎" }, { w: "pera", e: "🍐" },
    { w: "casa", e: "🏠" }, { w: "boca", e: "👄" }, { w: "gata", e: "🐱" },
    { w: "cuca", e: "🐛" }
  ],
  en: [
    { w: "mom", e: "👩" }, { w: "dad", e: "👨" }, { w: "moon", e: "🌙" },
    { w: "sun", e: "☀️" }, { w: "cat", e: "🐱" }, { w: "dog", e: "🐶" },
    { w: "hand", e: "✋" }, { w: "ball", e: "⚽" }, { w: "bed", e: "🛏️" },
    { w: "cake", e: "🎂" }
  ],
  cs: [
    { w: "máma", e: "👩" }, { w: "táta", e: "👨" }, { w: "kolo", e: "🚲" },
    { w: "pes", e: "🐶" }, { w: "oko", e: "👁️" }, { w: "ucho", e: "👂" },
    { w: "ryba", e: "🐟" }, { w: "bota", e: "👢" }, { w: "sova", e: "🦉" },
    { w: "dům", e: "🏠" }
  ],
  fr: [
    { w: "maman", e: "👩" }, { w: "papa", e: "👨" }, { w: "lune", e: "🌙" },
    { w: "chat", e: "🐱" }, { w: "main", e: "✋" }, { w: "pomme", e: "🍎" },
    { w: "ballon", e: "⚽" }, { w: "lit", e: "🛏️" }, { w: "bébé", e: "👶" },
    { w: "vache", e: "🐄" }
  ]
};

/* Lección 6: trazado de letras con el dedo (grafomotricidad).
   Las 5 vocales + las 5 consonantes de las sílabas, en mayúscula
   de palo. Cada letra es una lista de trazos en el orden en que
   se enseñan a escribir; viewBox 0 0 100 120. */
const LEER_TRAZOS = {
  A: ["M50 12 L20 106", "M50 12 L80 106", "M31 72 L69 72"],
  E: ["M32 12 L32 106", "M32 12 L76 12", "M32 58 L70 58", "M32 106 L76 106"],
  I: ["M50 12 L50 106"],
  O: ["M50 12 C24 12 17 38 17 59 C17 80 24 106 50 106 C76 106 83 80 83 59 C83 38 76 12 50 12"],
  U: ["M25 12 L25 76 C25 99 39 106 50 106 C61 106 75 99 75 76 L75 12"],
  M: ["M22 106 L22 12", "M22 12 L50 72", "M50 72 L78 12", "M78 12 L78 106"],
  P: ["M30 106 L30 12", "M30 12 C64 12 74 22 74 38 C74 54 64 62 30 62"],
  S: ["M74 24 C62 10 30 10 28 30 C26 48 72 54 74 78 C76 100 38 110 24 90"],
  L: ["M32 12 L32 106", "M32 106 L76 106"],
  T: ["M20 12 L80 12", "M50 12 L50 106"]
};

/* palabra ancla de las consonantes trazables, por idioma
   (las vocales ya la tienen en LEER_VOCALES) */
const LEER_LETRA_ANCLA = {
  es: { M: ["mamá", "👩"], P: ["papá", "👨"], S: ["sopa", "🍜"], L: ["luna", "🌙"], T: ["tomate", "🍅"] },
  ca: { M: ["mama", "👩"], P: ["papa", "👨"], S: ["sopa", "🍜"], L: ["lluna", "🌙"], T: ["tomàquet", "🍅"] },
  en: { M: ["moon", "🌙"], P: ["pig", "🐷"], S: ["sun", "☀️"], L: ["lion", "🦁"], T: ["tiger", "🐯"] },
  cs: { M: ["máma", "👩"], P: ["pes", "🐶"], S: ["sova", "🦉"], L: ["lev", "🦁"], T: ["táta", "👨"] },
  fr: { M: ["maman", "👩"], P: ["papa", "👨"], S: ["soleil", "☀️"], L: ["lune", "🌙"], T: ["tigre", "🐯"] }
};

/* Lección 5: frases pequeñas con hueco. frase = a + palabra + b */
const LEER_FRASES = {
  es: [
    { a: "La ", w: "luna", b: " sale de noche", x: "sopa", e: "🌙" },
    { a: "El ", w: "gato", b: " dice miau", x: "pato", e: "🐱" },
    { a: "La ", w: "sopa", b: " está caliente", x: "luna", e: "🍜" },
    { a: "Yo vivo en una ", w: "casa", b: "", x: "pera", e: "🏠" },
    { a: "El ", w: "pato", b: " nada en el agua", x: "gato", e: "🦆" },
    { a: "Como con la ", w: "boca", b: "", x: "mano", e: "👄" }
  ],
  ca: [
    { a: "La ", w: "lluna", b: " surt de nit", x: "sopa", e: "🌙" },
    { a: "La ", w: "gata", b: " fa miau", x: "cuca", e: "🐱" },
    { a: "La ", w: "sopa", b: " és calenta", x: "poma", e: "🍜" },
    { a: "Jo visc en una ", w: "casa", b: "", x: "pera", e: "🏠" },
    { a: "La ", w: "poma", b: " és vermella", x: "lluna", e: "🍎" },
    { a: "Menjo amb la ", w: "boca", b: "", x: "pera", e: "👄" }
  ],
  en: [
    { a: "The ", w: "moon", b: " shines at night", x: "sun", e: "🌙" },
    { a: "The ", w: "cat", b: " says meow", x: "dog", e: "🐱" },
    { a: "The ", w: "dog", b: " says woof", x: "cat", e: "🐶" },
    { a: "I sleep in my ", w: "bed", b: "", x: "ball", e: "🛏️" },
    { a: "The ", w: "sun", b: " shines by day", x: "moon", e: "☀️" },
    { a: "I eat ", w: "cake", b: " at my party", x: "bed", e: "🎂" }
  ],
  cs: [
    { a: "Ten ", w: "pes", b: " dělá haf", x: "sova", e: "🐶" },
    { a: "Ta ", w: "ryba", b: " plave ve vodě", x: "bota", e: "🐟" },
    { a: "Ta ", w: "sova", b: " houká v noci", x: "ryba", e: "🦉" },
    { a: "To ", w: "kolo", b: " jede rychle", x: "oko", e: "🚲" },
    { a: "Moje ", w: "máma", b: " mě má ráda", x: "bota", e: "👩" },
    { a: "Ta ", w: "bota", b: " je moje", x: "sova", e: "👢" }
  ],
  fr: [
    { a: "La ", w: "lune", b: " brille la nuit", x: "pomme", e: "🌙" },
    { a: "Le ", w: "chat", b: " fait miaou", x: "lit", e: "🐱" },
    { a: "La ", w: "pomme", b: " est rouge", x: "lune", e: "🍎" },
    { a: "Je dors dans mon ", w: "lit", b: "", x: "ballon", e: "🛏️" },
    { a: "Je joue au ", w: "ballon", b: "", x: "chat", e: "⚽" },
    { a: "Un bisou de ", w: "maman", b: "", x: "ballon", e: "😘" }
  ]
};
