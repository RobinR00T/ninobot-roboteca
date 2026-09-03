# Plantilla: aventura nueva completa

Encargo para UN agente. Una aventura son DOS ficheros de contenido + registro
en los extras. Plantilla de referencia: la aventura del espacio
(`src/40-espacio-a.js` y `src/41-espacio-b.js`): LÉELA ENTERA antes de escribir
y copia su estructura EXACTA.

---

Trabajas en el juego infantil "Ninobot: La Roboteca" (~/Documents/ninobot/).
Crea la aventura [TEMA] con id `[ID]` (minúsculas, sin acentos).

FICHEROS A CREAR (estructura exacta de 40/41-espacio):
1. `src/[NN]-[id]-a.js`: THEMES.[id] con name/emoji/grad/ready/statusPlace,
   welcome, quiz (15 preguntas, 4 opciones, answer variado, explicación con
   dato real), alphabet (26 letras con palabra E ITEM POR IDIOMA + fact).
2. `src/[NN]-[id]-b.js`: stories (3 historias RAMIFICADAS con varios finales),
   songs (3 canciones rimadas POR IDIOMA), translator (langs inventados + words
   con W_COMMON referenciado + 10 propias), explore (mapa DIBUJADO: 15-16 POIs
   con SVG inline, cats, width), math, builder (taller con piezas y svg).

ADEMÁS (con guardas `if (typeof X !== "undefined")`):
- THEME_CARDS.[id]: mini-escena animada de la tarjeta de portada.
- CELEBRATIONS.[id]: la fiesta del taller (bg, extra svg 1000x700, move, say, jingle).
- CARE.[id]: rutina de cuidado de 4 pasos (ver plantilla-care.md).
- Caras de los 5 famosos con makeCara en un fichero 9X-famous-faces (patrón de
  `src/98-famous-faces-3.js`). SIEMPRE caras, nunca emoji.

CHECKLIST DE TERMINADO: contenido a+b, iconos del mapa, THEME_CARDS,
CELEBRATIONS, CARE, caras de los famosos, node --check de cada fichero.
[+ AQUÍ LAS REGLAS DURAS DEL README DE ESTA CARPETA]
NO ejecutes build.sh JAMÁS.
