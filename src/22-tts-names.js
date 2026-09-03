"use strict";
/* ============================================================
   PRONUNCIACIÓN DE NOMBRES PROPIOS EXTRANJEROS: la voz los
   dice bien aunque el idioma activo los leería fatal (por
   ejemplo "Chewbacca" leído a la española). Solo afecta a la
   LOCUCIÓN: en pantalla el nombre se escribe siempre correcto.
   Formato: [grafía exacta, { idioma: transcripción fonética }].
   Los pares largos van ANTES que las palabras sueltas.
   Si un idioma no tiene entrada, se deja tal cual.
   ============================================================ */

const TTS_NAMES = [
  ["Hedy Lamarr", { es: "Jedy Lamar", ca: "Hedi Lamar", cs: "Hedy Lamar" }],
  ["Walt Disney", { es: "Gualt Dísnei", ca: "Ualt Dísnei" }],
  ["Mae West", { es: "Mei Güest", ca: "Mei Uest", cs: "Mej Vest" }],
  ["Han Solo", { es: "Jan Solo" }],
  ["Butterfly Hill", { es: "Báterflai Jil", ca: "Bàterflai Hil", cs: "Batrflaj Hil" }],
  ["Chewbacca", { es: "Chubaca", ca: "Txubaca", cs: "Čubaka", fr: "Choubaka" }],
  ["Tatooine", { es: "Tatuín", ca: "Tatuín", fr: "Tatouine" }],
  ["Coruscant", { es: "Coruscán", ca: "Coruscán" }],
  ["Obi-Wan", { es: "Obi-Guan", ca: "Obi-Uan", fr: "Obi-Ouane" }],
  ["Skywalker", { es: "Escaiwóker", ca: "Escaiuòquer", cs: "Skajvokr" }],
  ["Vader", { es: "Véider", ca: "Vèider", cs: "Vejdr" }],
  ["Curie", { es: "Curí", ca: "Curí", cs: "Kyrí" }],
  ["Lovelace", { es: "Lávleis", ca: "Làvleis", cs: "Lavlejs" }],
  ["Earhart", { es: "Érjart", ca: "Èrhart", cs: "Érhart" }],
  ["Goodall", { es: "Gudol", ca: "Gudol", fr: "Goudol" }],
  ["Nightingale", { es: "Naitingueil", ca: "Naitinguèil", cs: "Najtyngejl", fr: "Naïtinguel" }],
  ["Herschel", { es: "Jérchel", ca: "Hèrxel" }],
  ["Earle", { es: "Erl", ca: "Erl", cs: "Érl" }],
  ["Tereshkova", { es: "Tereskova", ca: "Terescova", cs: "Tereškova" }],
  ["Lamarr", { es: "Lamar", ca: "Lamar", cs: "Lamar" }],
  ["Maathai", { es: "Matái", ca: "Matai", cs: "Mátaj", fr: "Mataï" }],
  ["Beethoven", { es: "Betóven", ca: "Betoven" }],
  ["Mozart", { es: "Mósart", ca: "Mósart" }],
  ["Braque", { es: "Brac", ca: "Brac", cs: "Brak" }],
  ["Françoise", { es: "Fransuás", cs: "Fransuáz" }],
  ["Gilot", { es: "Yiló", ca: "Jiló", cs: "Žiló" }],
  ["Jacqueline", { es: "Yaclín", ca: "Jaclín", cs: "Žaklín" }],
  ["Roque", { es: "Roc", ca: "Roc", cs: "Rok" }],
  ["Simard", { es: "Simar", ca: "Simar" }],
  ["Peeters", { es: "Peters", ca: "Peters" }],
  ["Borlaug", { es: "Bórlog", ca: "Bórlog" }],
  ["Tolkien", { es: "Tolkin", ca: "Tolquin" }]
];
