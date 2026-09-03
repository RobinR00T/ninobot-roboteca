# Plantilla: ampliar el banco de quiz de un tema

---

Trabajas en el juego infantil "Ninobot: La Roboteca" (~/Documents/ninobot/).
Amplia el banco de quiz de [TEMA] (`src/[NN]-[id]-a.js`) añadiendo [N] preguntas.

1. Localiza `quiz: [` con grep -n y LEE las preguntas existentes enteras para
   no repetir temas y copiar el formato EXACTO.
2. Añade las preguntas nuevas AL FINAL del array (antes del `],` de cierre):
   { emoji, q:{es,ca,en,cs,fr}, options:[mismo número que las existentes],
   answer: índice variado, explanation:{5 idiomas con dato real} }.
3. Mezcla dificultad: fáciles, medias y una curiosa. Edad 3-10.
4. node --check al acabar.
[+ REGLAS DURAS DEL README DE ESTA CARPETA]
NO ejecutes build.sh JAMÁS.
