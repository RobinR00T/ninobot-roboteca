"use strict";
/* ============================================================
   NOMBRES PROPIOS: se pronuncian EN SU IDIOMA ORIGINAL.
   No se transcriben a la fonética del idioma activo (sonaba
   fatal): la frase se parte y el nombre se dice con la voz de
   su idioma (el motor lleva es, ca, en, cs y fr embebidos).
   Así "Chewbacca" suena a inglés aunque se juegue en español,
   y "Gaudí" suena catalán aunque se juegue en checo.

   Formato: [grafía exacta, idioma de la voz, texto alternativo].
   El tercero solo se usa cuando conviene ayudar a esa voz
   (nombres rusos dichos con la voz checa, la más cercana).
   Las variantes largas van primero: se buscan en ese orden.
   ============================================================ */

const TTS_NAMES = [
  /* --- Star Wars y Tierra Media (referencia inglesa) --- */
  ["Obi-Wan Kenobi", "en"], ["Luke Skywalker", "en"], ["Leia Organa", "en"],
  ["Han Solo", "en"], ["Obi-Wan", "en"], ["Skywalker", "en"], ["Chewbacca", "en"],
  ["Tatooine", "en"], ["Coruscant", "en"], ["Dagobah", "en"], ["Naboo", "en"],
  ["Grogu", "en"], ["Wookiee", "en"], ["Ewok", "en"], ["Jawa", "en"], ["Porg", "en"],
  ["Bantha", "en"], ["Endor", "en"], ["Hoth", "en"],
  ["Smaug", "en"], ["Isengard", "en"], ["Rhosgobel", "en"], ["Bree", "en"],

  /* --- personas de habla inglesa --- */
  ["Alice Stebbins Wells", "en"], ["Roy Chapman Andrews", "en"], ["Ursula K. Le Guin", "en"],
  ["Sabrina Cohen-Hatton", "en"], ["George Washington Carver", "en"], ["Julia Butterfly Hill", "en"],
  ["George William Manby", "en"], ["David Attenborough", "en"], ["Elizabeth Blackwell", "en"],
  ["Maria Sibylla Merian", "en"], ["Alexander von Humboldt", "en"], ["Alexander Fleming", "en"],
  ["Katherine Johnson", "en"], ["Sue Hendrickson", "en"], ["James Braidwood", "en"],
  ["Amelia Earhart", "en"], ["Wangari Maathai", "en"], ["Malala Yousafzai", "en"],
  ["Louis Armstrong", "en"], ["Neil Armstrong", "en"], ["Ella Fitzgerald", "en"],
  ["Alexander Calder", "en"], ["Charles Darwin", "en"], ["Norman Borlaug", "en"],
  ["Suzanne Simard", "en"], ["Molly Williams", "en"], ["Gregor Mendel", "en"],
  ["Konrad Lorenz", "en"], ["Chris Hadfield", "en"], ["Jadav Payeng", "en"],
  ["Yayoi Kusama", "en"], ["Clara Peeters", "en"], ["August Vollmer", "en"],
  ["Eugenie Clark", "en"], ["Barnum Brown", "en"], ["Junko Tabei", "en"],
  ["Rachel Carson", "en"], ["Howard Carter", "en"], ["Hedy Lamarr", "en"],
  ["Edward Teach", "en"], ["Jane Goodall", "en"], ["Marie Owens", "en"],
  ["Richard Owen", "en"], ["Sylvia Earle", "en"], ["Mae Jemison", "en"],
  ["Dian Fossey", "en"], ["Mary Anning", "en"], ["Mary Leakey", "en"],
  ["Walt Disney", "en"], ["Kate Warne", "en"], ["Red Adair", "en"],
  ["Buzz Aldrin", "en"], ["Julia Child", "en"], ["Jack Horner", "en"],
  ["Calico Jack", "en"], ["Francis Drake", "en"], ["Ada Lovelace", "en"],
  ["Sally Ride", "en"], ["Anne Bonny", "en"], ["Mary Read", "en"],
  ["Ching Shih", "en"], ["Mae West", "en"], ["Beethoven", "en"], ["Mozart", "en"],
  ["Rosalind Franklin", "en"], ["Clara Schumann", "en"], ["Éowyn", "en"],

  /* --- personas de habla francesa --- */
  ["Eugène-François Vidocq", "fr"], ["Auguste Escoffier", "fr"], ["Jacques Cousteau", "fr"],
  ["Jacqueline Roque", "fr"], ["Françoise Gilot", "fr"], ["Eugénie Brazier", "fr"],
  ["Jacques Piccard", "fr"], ["Georges Braque", "fr"], ["Jeanne Baret", "fr"],
  ["Marie Curie", "fr"], ["Dora Maar", "fr"], ["Vidocq", "fr"],

  /* --- nombres rusos: la voz checa es la más cercana --- */
  ["Valentina Tereshkova", "cs", "Valentyna Tereškova"],
  ["Nikolái Vavílov", "cs", "Nikolaj Vavilov"],
  ["Yuri Gagarin", "cs", "Jurij Gagarin"],

  /* --- catalanes: suenan catalán en cualquier idioma --- */
  ["Lluís Domènech i Montaner", "ca"], ["Josep Puig i Cadafalch", "ca"],
  ["Josep Maria Jujol", "ca"], ["Josep Lluís Sert", "ca"], ["Sagrada Família", "ca"],
  ["Eusebi Güell", "ca"], ["Antoni Gaudí", "ca"], ["Pilar Juncosa", "ca"],
  ["Ferran Adrià", "ca"], ["Portlligat", "ca"], ["Park Güell", "ca"],
  ["Joan Prats", "ca"], ["Joan Miró", "ca"], ["Montjuïc", "ca"], ["Anna Maria Dalí", "ca"],

  /* --- españoles: suenan español en cualquier idioma --- */
  ["Santiago Ramón y Cajal", "es"], ["Félix Rodríguez de la Fuente", "es"],
  ["Federico García Lorca", "es"], ["Francisco de Orellana", "es"],
  ["Salvador Dalí", "es"], ["Pablo Picasso", "es"], ["Simone Ortega", "es"],
  ["Paco de Lucía", "es"], ["Davi Kopenawa", "es"], ["Marina Silva", "es"],
  ["Chico Mendes", "es"], ["Frida Kahlo", "es"], ["Luis Buñuel", "es"]
];

/* expresión que encuentra cualquiera de los nombres (los largos primero) */
const TTS_RE = (() => {
  const esc = s => s.replace(/[.*+?^${}()|[\]\\-]/g, "\\$&");
  const orden = TTS_NAMES.slice().sort((a, b) => b[0].length - a[0].length);
  return { re: new RegExp("(" + orden.map(n => esc(n[0])).join("|") + ")", "g"), orden };
})();

/* parte el texto en trozos {t: texto, l: idioma} para que cada nombre
   se pronuncie con su voz. Si no hay nombres, devuelve un solo trozo. */
function ttsSplit(texto, base) {
  if (!texto) return [];
  const partes = [];
  let ultimo = 0;
  TTS_RE.re.lastIndex = 0;
  let m;
  while ((m = TTS_RE.re.exec(texto)) !== null) {
    const ent = TTS_RE.orden.find(n => n[0] === m[1]);
    /* mismo idioma y sin ayuda de escritura: se queda como está */
    if (!ent || (ent[1] === base && !ent[2])) continue;
    if (m.index > ultimo) partes.push({ t: texto.slice(ultimo, m.index), l: base });
    partes.push({ t: ent[2] || ent[0], l: ent[1] });
    ultimo = m.index + m[1].length;
  }
  if (!partes.length) return [{ t: texto, l: base }];
  if (ultimo < texto.length) partes.push({ t: texto.slice(ultimo), l: base });

  /* los trozos que solo son puntuación se pegan al anterior: nada de
     fragmentos sueltos que el motor tenga que "decir" por separado */
  const limpio = [];
  partes.forEach(p => {
    const t = (p.t || "").trim();
    if (!t) return;
    if (!/[0-9a-záéíóúüñàèòïçčďěňřšťůž]/i.test(t) && limpio.length) { limpio[limpio.length - 1].t += t; return; }
    limpio.push({ t: t, l: p.l });
  });
  return limpio;
}
