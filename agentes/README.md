# Plantillas de agentes para ampliar Ninobot

Estas plantillas son los encargos ("prompts") que se usan con Claude Code (u otro
asistente de IA con acceso a los ficheros) para ampliar el juego sin romperlo.
Cada plantilla lleva dentro las reglas duras del proyecto. Cómo usarlas:

1. Abre Claude Code en la carpeta del proyecto.
2. Copia la plantilla, rellena los huecos [ASÍ] y pégala como encargo.
3. El agente NUNCA ejecuta `build.sh` (lo compila la persona al final, cuando
   todos los agentes han terminado, para no servir un fichero a medias).
4. Después de cualquier ampliación: `./build.sh` y probar en el navegador.

## Las reglas duras (van en toda plantilla)

- PROHIBIDO el guion largo (—) y la raya (–) en cualquier idioma y lugar.
- ¡ y ¿ de apertura SOLO en español. Francés con espacio antes de ! y ?.
- Checo natural e idiomático, con todos los diacríticos.
- 5 idiomas siempre: es, ca, en, cs, fr. Mismo significado en los cinco.
- Nunca la palabra "Nina": el juego usa {name}.
- Validación cultural e histórica ESTRICTA: el emoji debe representar de verdad
  lo que dice (jamás un moái 🗿 para una esfinge), las épocas correctas (el
  mamut no es de la era de los dinosaurios), los datos verificados. Ante la
  duda, elegir otro dato más seguro.
- Los famosos SIEMPRE llevan cara dibujada (makeCara), nunca emoji.
- Las features transversales van a la portada, no escondidas como modo.
- node --check del fichero tocado antes de dar por terminado.

## Plantillas

- `plantilla-aventura-nueva.md`: una aventura completa (la pieza grande).
- `plantilla-quiz-ampliar.md`: añadir preguntas al banco de un tema.
- `plantilla-care.md`: la rutina del modo Cuidar de un tema.
- `plantilla-auditoria.md`: auditoría de contenido (idioma + conceptos).
