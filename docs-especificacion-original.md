# Ninobot — especificación completa y prompts para recrearlo

**Qué es esto:** documento de traspaso para poder rehacer (o continuar) los proyectos Ninobot desde cero en otro ordenador, sin depender de las conversaciones originales.

**Origen de la información:** reconstruido por ingeniería inversa de los 4 archivos HTML compilados que están en tu iCloud Drive, y verificado después contra el código real. No existen registros locales de las sesiones de Claude donde se crearon (esas conversaciones viven en la nube y no son exportables desde aquí), así que todo lo de abajo sale de los propios archivos.

**Fecha del análisis:** 20 de agosto de 2026

---

## 1. Inventario de archivos

Los 4 archivos "buenos" están en `iCloud Drive/` (raíz), con copias idénticas en `Descargas/`:

| Archivo | Tema | Tamaño | Fecha | MD5 |
|---|---|---|---|---|
| `ninobot.html` | Espacio (original) | 1.095.068 B | 30 abr 2026 | `049012f6c33972a824cd1e7cc2adddd5` |
| `ninobot-dinosaurios.html` | Dinosaurios | 1.101.582 B | 30 abr 2026 | `611ddc530f86b294108649c3efd834d2` |
| `ninobot-cuerpohumano.html` | Cuerpo humano | 1.081.175 B | 30 abr 2026 | `5e3caac68a867cec0a5f6c0f1b6f5104` |
| `ninobot-lotr.html` | El Señor de los Anillos | 1.105.578 B | 30 abr 2026 | `9a2d9af65341579870bd001597906d4f` |

Versiones antiguas que siguen en el disco (no hace falta llevárselas, pero conviene saber que existen):

- `iCloud Drive/Docu viajes/ninobot.html` — versión espacio del 27 mar 2026 (`8353f591…`)
- `Escritorio/WhatsApp Chat - Mireia Stratego/00026051-ninobot.html` — la más antigua, 27 mar 19:32 (`07a2873d…`)
- `Escritorio/WhatsApp Chat - Mireia Stratego/00026113-ninobot-lotr.html` — idéntica a la LOTR final (28 mar)

---

## 2. Qué es Ninobot

Una **app web infantil de un solo archivo HTML**: un robot compañero llamado Ninobot que habla en voz alta, se dirige al niño/a por su nombre, y ofrece 9 modos de juego educativos sobre un tema. Se abre haciendo doble clic en el HTML y funciona igual en móvil, tablet y ordenador.

Todo el contenido (textos, preguntas, historias, canciones) está escrito dentro del propio archivo en **5 idiomas: español, catalán, inglés, checo y francés** — y en la versión de El Señor de los Anillos, en **6**: incluye Sindarin (élfico) completo, con 406 cadenas propias.

### Principios de diseño que hay que conservar

1. **Un único archivo `.html` autocontenido.** Sin `node_modules`, sin assets externos. Se comparte por WhatsApp y funciona.
2. **Sin llamadas a API, sin backend, sin login, sin `localStorage`.** Nada del niño sale del dispositivo. Es una app para una niña, y la privacidad es parte del diseño.
3. **Tono cálido y sin miedo.** Ninobot nunca regaña, nunca pierde; los errores se responden con "Casi!" y la respuesta correcta explicada.
4. **Personalización real:** el nombre del niño/a aparece interpolado (`{name}`) dentro de los diálogos, no solo en la pantalla de bienvenida.
5. **Control parental suave:** límite de tiempo de juego configurable, y al agotarse Ninobot se despide con un mensaje amable en vez de bloquear la pantalla.

⚠️ **Salvedad al punto 1:** los archivos actuales **no son 100 % offline**. El `<style>` inline empieza con `@import "https://fonts.googleapis.com/css2?family=Nunito…"`, así que en cada carga piden la tipografía a Google. Si quieres offline de verdad, incrusta la fuente en base64 o usa una del sistema.

---

## 3. Arquitectura técnica real (idéntica en las 4 versiones)

- **React** (SPA, un solo `<div id="root">`) compilado con **Vite** en modo *single-file*: el resultado es un `.html` de ~1,1 MB con un `<script type="module">` y un `<style>` inline.
- **Tailwind CSS** para todo el estilado (compilado e inline, ~911 variables `--tw-`).
- **Animaciones:** CSS puro (17 `@keyframes`, transiciones de Tailwind) más **SVG animado con SMIL** (`<animate>`) para los personajes y elementos decorativos. **No hay Framer Motion** ni ninguna librería de animación.
- **Three.js (r183)**: empaquetado, pero usado **solo para un fondo decorativo** a pantalla completa (2.500 partículas + 4 nubes de color en un `div fixed inset-0`). **No** es el motor del modo explorar.
- **Web Speech API**: `speechSynthesis` para que Ninobot hable, y `webkitSpeechRecognition` para que el niño le hable (con aviso amable si el micro está desactivado).
- Sin estado persistente: ni `localStorage` ni `sessionStorage`. Cada sesión empieza limpia.

### Pantalla de configuración inicial ("Configuración de Ninobot!")

- **Tu nombre:** campo de texto (`Escribe tu nombre...`)
- **Eres:** Niño / Niña (cambia las concordancias de género en los textos)
- **Idioma:** es / ca / en / cs / fr (+ Sindarin en la versión LOTR)
- **Edad:** en años (ajusta la dificultad de quiz y mates)
- **Tiempo de juego:** en minutos
- **Micrófono:** activado / desactivado
- Botón **"Empezar!"**

> Nota de estilo: la app **no usa signos de apertura** `¡` ni `¿`. Es "Empezar!", "Sabías que…?", "SÍÍÍÍ! Muy bien! 🌟". Si lo rehaces, decide si mantenerlo así o escribirlo correctamente.

### Los 9 modos de juego (comunes a las 4 versiones)

| Modo | Qué hace |
|---|---|
| **Charlar** | Chat guionizado con Ninobot, sin IA externa. Reconoce palabras clave (canción, música…) y responde. Entrada por texto o voz. |
| **Historias** | Historias por escenas con 2 opciones (🅰️/🅱️) en cada una. **Ojo: la elección hoy no ramifica** — se lee en voz alta y la historia siempre avanza a la escena siguiente. |
| **Quiz** | 5 preguntas de opción múltiple con explicación tras cada respuesta. |
| **Traductor** | Traduce palabras a "idiomas inventados" del tema. |
| **Viaje / Explorar** | Mapa grande navegable arrastrando o con scroll (`overflow-auto` + `cursor-grab`), hecho con **DOM y SVG posicionados en absoluto**, no en 3D. Botones de categoría que hacen `scrollTo` suave. Cada elemento es clicable y abre una ficha con dato curioso leído en voz alta. |
| **Karaoke** | Canciones originales con la letra en pantalla. |
| **Alfabeto** | De la A a la Z (26 letras completas), una palabra del tema por letra con su explicación. |
| **Mates** | Operaciones sencillas ilustradas con objetos del tema. |
| **Constructor** | Minijuego creativo distinto en cada versión (Cohete / Fósil / Cuerpo / Forja). |

Barra de navegación: esos 9 + **Famosos**, **Ajustes** y **Acerca de**.

En la cabecera hay una etiqueta de estado que alterna entre `Conectado desde…`, `Hablando…` y `Escuchando…`.

---

## 4. Las 4 versiones, una a una

> Los 4 archivos comparten el mismo `<title>Ninobot - Tu amigo del espacio</title>` — en las tres variantes es un residuo que no se actualizó. Conviene corregirlo.

### 4.1 `ninobot.html` — Espacio (la original)

- **Saludo real:** "Hola {name}! Soy Ninobot, tu amigo robot del espacio…" · **estado:** "Conectado desde la Galaxia Arcoíris"
- **Canción favorita de Ninobot** (sale al hablar de música en Charlar): "Bip Bop entre las Estrellas"
- **Constructor:** **Cohete** — "Construye tu propio cohete! Elige las piezas y ponle nombre."
- **Mapa explorable**, 3 categorías:
  - ☀️ **Sistema Solar** — Mercurio, Venus, Tierra, Marte, Júpiter, Saturno, Urano, Neptuno, Plutón, Luna y el Sol
  - ⭐ **Constelaciones** (16) — Osa Mayor, Osa Menor, Orión, Casiopea, Escorpio, Leo, Cisne, Cruz del Sur, Géminis, Pegaso, Lira, Delfín, Águila, Tauro, Can Mayor, Andrómeda
  - 🌌 **Galaxias y nebulosas** (6) — Andrómeda, del Sombrero, Remolino, del Triángulo, Nebulosa del Cangrejo, Nebulosa de Orión
- **Famosos:** Yuri Gagarin, Neil Armstrong, Buzz Aldrin, Valentina Tereshkova, Mae Jemison, Sally Ride, Chris Hadfield, Samantha Cristoforetti
- **Historias:** "El cristal de las estrellas", "La fiesta de los planetas", "El mapa del tesoro cósmico"
- **Karaoke:** "Brilla estrellita", "Cohete de {name}" (el nombre va interpolado en el título), "Los planetas amigos"
- **Traductor:** Klingon, Vulcano, Wookiee y **Marciano**
- **Tono de los datos:** "Sabías que Mercurio no tiene luna?", "En la Luna puedes saltar 6 veces más alto que en la Tierra. Boing boing!"

### 4.2 `ninobot-dinosaurios.html` — Dinosaurios

- **Estado:** "Conectado desde la Era Arcoíris" · canción: "Bip Bop entre los Dinosaurios"
- **Constructor:** **Fósil / Máquina del tiempo** — "Construye tu propia máquina del tiempo!"
- **Mapa**, 5 zonas: 🌿 Selva · 🌋 Volcán · 💧 Lago · 🏜️ Llanuras · 🪨 Cuevas
- **Dinosaurios (8):** T-Rex, Triceratops, Estegosaurio, Velocirráptor, Braquiosaurio, Pteranodón, Anquilosaurio, **Espinosauro** (así, sin la "i")
- **Familias (5):** Terópodos, Ceratópsidos, Saurópodos, Tireóforos, Pterosaurios
- **Eras (3):** Triásico, Jurásico, Cretácico
- **Famosos (8):** Mary Anning, Richard Owen, Roy Chapman Andrews, Mary Leakey, Jack Horner, Sue Hendrickson, José Bonaparte, Barnum Brown
- **Frase que resume el tono:** "Los fósiles son historias que la tierra quiere contarte!"

### 4.3 `ninobot-cuerpohumano.html` — Cuerpo humano

- **Estado:** "Conectado desde el Corazon" · canción: "Bip Bop entre los organios" *(sic — errata en el archivo)*
- **Constructor:** **Cuerpo** — "Construye tu propio cuerpo! Elige las partes y ponle nombre."
- **Mapa**, 5 zonas: 🧠 Cabeza · ❤️ Pecho · 🫃 Abdomen · 💪 Extremidades · 🩸 Circulatorio
- **Órganos y elementos (10):** cerebro, corazón, pulmones, estómago, huesos, músculos, piel, sangre + ADN y células
- **Sistemas (6):** nervioso, circulatorio, respiratorio, digestivo, musculoesquelético, inmunitario
- **Famosos (6):** Hipócrates, Andreas Vesalio, Santiago Ramón y Cajal, Marie Curie, Alexander Fleming, Elizabeth Blackwell
- ⚠️ **Bug conocido — acentos perdidos.** Esta versión perdió la acentuación en varios idiomas, no solo en español: 25 % de las cadenas checas y 44 % de las francesas van sin diacríticos ("Configuracion", "Corazon", "anos", "se feliz", "tvuj roboticky doktor kamarad", "Touche une lettre pour decouvrir"). En las otras tres versiones el problema es marginal. Si la rehaces, revisa es / ca / cs / fr.

### 4.4 `ninobot-lotr.html` — El Señor de los Anillos

- **Estado:** "Conectado desde Rivendel" · despedida: "Ninobot se va cabalgando! Hasta pronto!"
- **6 idiomas**, con **Sindarin élfico** completo y seleccionable (🧝): "Mae govannen, {name}! Nin Ninobot, mellon nín edhel o Ennor…"
- **Constructor:** **Forja** (⚔️, sustituye al icono de cohete) — "Forja tu propia espada! Elige las piezas y ponle nombre."
- **Mapa — la Tierra Media (8 lugares):** La Comarca, Rivendel, Moria, Rohan, Gondor, Mordor, Lothlórien, Isengard
- **Personajes (8), cada uno con su frase:** Gandalf, Aragorn, Legolas, Gimli, Galadriel, Frodo, Sam, Éowyn — "Seremos valientes juntos! La amistad nos hace fuertes!"
- **Historias con acertijos:** "El Anillo Perdido", "La Fiesta de los Hobbits", "Las Minas de Moria" — "Quién soy? Tengo ciudades, pero sin casas. Bosques, pero sin árboles…"
- **Alfabeto élfico** y **traductor de idiomas de la Tierra Media**
- **Cierre de la aventura:** "La luz siempre vence a la oscuridad, {name}. Nunca olvides eso. El coraje, la amistad y la esperanza son más fuertes que cualquier miedo." / "Hasta los pasos pequeños pueden cambiar el mundo."

---

## 5. Cómo recrearlos en otro ordenador

### Opción A (la más rápida): copiar los HTML

Los 4 archivos ya son la app completa. Cópialos por USB, AirDrop o iCloud y ábrelos con doble clic. No hay nada que instalar. Úsalo como base y pídele a Claude los cambios que quieras sobre el archivo.

### Opción B: regenerarlos con Claude

Usa los prompts de abajo. El primero construye la base; los otros tres derivan de ella. Están escritos con las **mejoras ya incorporadas** (offline de verdad, historias que sí ramifican, acentos correctos), así que la app resultante será mejor que la original, no idéntica.

---

## 6. Prompts listos para pegar

### 6.1 Prompt maestro — Ninobot Espacio (la base)

```
Crea una app web infantil en un ÚNICO archivo HTML autocontenido llamado ninobot.html.

CONCEPTO
Ninobot es un robot amigo que acompaña a un niño o niña de 5-8 años a explorar el
espacio. Habla en voz alta, se dirige al niño por su nombre y le propone juegos.

RESTRICCIONES TÉCNICAS (innegociables)
- Un solo archivo .html, todo inline (CSS y JS). Sin CDN, sin @import de fuentes
  externas, sin assets externos, sin node_modules. Se abre con doble clic y
  funciona SIN INTERNET. Si usas una tipografía, incrústala en base64 o usa una
  del sistema.
- Sin llamadas a API, sin backend, sin login, sin localStorage ni
  sessionStorage. Nada sale del dispositivo.
- React + Tailwind compilados dentro del archivo. Animaciones con CSS
  (@keyframes y transiciones) y SVG animado con SMIL. Gráficos vectoriales SVG
  dibujados a mano, sin imágenes externas.
- Web Speech API: speechSynthesis para que Ninobot hable; reconocimiento de voz
  opcional con webkitSpeechRecognition, con mensaje amable si el micrófono está
  desactivado.
- Responsive: tiene que funcionar bien en móvil, tablet y ordenador.
- Opcional: un fondo decorativo de partículas. Si lo haces con canvas propio
  pesa mucho menos que empaquetando Three.js entero.

MULTIIDIOMA
Todos los textos en 5 idiomas: español (es), catalán (ca), inglés (en),
checo (cs) y francés (fr). Estructura cada cadena como
{es:`...`, ca:`...`, en:`...`, cs:`...`, fr:`...`}.
IMPORTANTE: acentuación y diacríticos correctos en TODOS los idiomas
(español, catalán, checo con háčky y čárky, francés con acentos y cedillas).

PANTALLA DE CONFIGURACIÓN INICIAL
Nombre, Niño/Niña (afecta a las concordancias de género), idioma, edad en años,
tiempo de juego en minutos y activar/desactivar micrófono. Botón "¡Empezar!".
Al agotarse el tiempo, Ninobot se despide con cariño: "Ninobot se ha ido a
explorar el espacio. ¡Volverá pronto con nuevas aventuras! Recuerda: estudia,
juega, ayuda en casa y sé feliz."

9 MODOS DE JUEGO
1. Charlar — chat guionizado (sin IA externa) sobre el espacio o lo que quiera.
   Reconoce palabras clave; si le hablan de música responde con su canción
   favorita, "Bip Bop entre las Estrellas", y canta un trozo.
2. Historias — historias por escenas donde el niño elige entre 2 o 3 opciones.
   LAS ELECCIONES DEBEN RAMIFICAR DE VERDAD: cada opción lleva a una escena
   distinta, no solo a un comentario. Incluye: "El cristal de las estrellas",
   "La fiesta de los planetas", "El mapa del tesoro cósmico".
3. Quiz — 5 preguntas de opción múltiple con explicación tras cada respuesta.
   Acierto: "¡SÍÍÍÍ! ¡Muy bien! 🌟". Fallo: "¡Casi! La respuesta era…" + porqué.
4. Traductor — traduce palabras a idiomas inventados: klingon, vulcano,
   wookiee y marciano.
5. Viaje — mapa grande explorable arrastrando o con scroll, con botones de
   categoría que hacen scroll suave. 3 categorías:
   · Sistema Solar: Mercurio, Venus, Tierra, Marte, Júpiter, Saturno, Urano,
     Neptuno, Plutón, la Luna y el Sol.
   · Constelaciones: Osa Mayor, Osa Menor, Orión, Casiopea, Escorpio, Leo,
     Cisne, Cruz del Sur, Géminis, Pegaso, Lira, Delfín, Águila, Tauro,
     Can Mayor, Andrómeda.
   · Galaxias y nebulosas: Andrómeda, del Sombrero, Remolino, del Triángulo,
     Nebulosa del Cangrejo, Nebulosa de Orión.
   Cada elemento es clicable y muestra un dato curioso leído en voz alta.
6. Karaoke — canciones originales con letra en pantalla: "Brilla estrellita",
   "El cohete de {name}" (con el nombre real interpolado), "Los planetas amigos".
7. Alfabeto — las 26 letras, una palabra espacial por letra con explicación
   corta (Asteroide, Big Bang, Cometa, … Zona habitable).
8. Mates — operaciones sencillas ilustradas con cohetes y estrellas, ajustadas
   a la edad configurada.
9. Cohete — "¡Construye tu propio cohete! Elige las piezas y ponle nombre."

EXTRAS
- "Famosos": astronautas reales con una frase inspiradora cada uno — Yuri
  Gagarin, Neil Armstrong, Buzz Aldrin, Valentina Tereshkova, Mae Jemison,
  Sally Ride, Chris Hadfield, Samantha Cristoforetti.
- Cabecera con estado: "Conectado desde la Galaxia Arcoíris" / "Hablando…" /
  "Escuchando…".
- Pantallas de Ajustes y "Acerca de".

TONO
Cálido, alegre, nunca condescendiente y nunca da miedo. Ninobot no regaña ni
"pierde". El nombre del niño aparece interpolado dentro de los diálogos, no
solo en la bienvenida. Datos curiosos con gancho, del estilo: "En la Luna
puedes saltar 6 veces más alto que en la Tierra. ¡Boing boing!"

Escribe el archivo completo y entrégamelo como ninobot.html.
```

### 6.2 Variante — Dinosaurios

```
Parte de ninobot.html (la versión del espacio, adjunta) y crea
ninobot-dinosaurios.html: la misma app, misma arquitectura, mismos 9 modos y
mismos 5 idiomas, pero con el tema cambiado a dinosaurios. Actualiza también
el <title> de la página.

- Estado de cabecera: "Conectado desde la Era Arcoíris". Canción favorita:
  "Bip Bop entre los Dinosaurios".
- Mapa con 5 zonas: 🌿 Selva, 🌋 Volcán, 💧 Lago, 🏜️ Llanuras, 🪨 Cuevas
- Dinosaurios: T-Rex, Triceratops, Estegosaurio, Velocirráptor, Braquiosaurio,
  Pteranodón, Anquilosaurio, Espinosaurio
- Familias: Terópodos, Ceratópsidos, Saurópodos, Tireóforos, Pterosaurios
- Eras: Triásico, Jurásico, Cretácico
- Famosos: Mary Anning, Richard Owen, Roy Chapman Andrews, Mary Leakey,
  Jack Horner, Sue Hendrickson, José Bonaparte, Barnum Brown
- Constructor: máquina del tiempo ("¡Construye tu propia máquina del tiempo!")
- Karaoke jurásico, alfabeto dinosaurio, mates con dinosaurios y fósiles,
  traductor a idiomas de dinosaurios inventados
- Quiz: 5 preguntas sobre dinosaurios, fósiles y la era Jurásica
```

### 6.3 Variante — Cuerpo humano

```
Igual que el anterior, pero ninobot-cuerpohumano.html sobre el cuerpo humano.
Actualiza también el <title>.

- Estado de cabecera: "Conectado desde el Corazón". Canción favorita:
  "Bip Bop entre los órganos".
- Mapa con 5 zonas: 🧠 Cabeza, ❤️ Pecho, 🫃 Abdomen, 💪 Extremidades,
  🩸 Circulatorio
- Órganos: cerebro, corazón, pulmones, estómago, huesos, músculos, piel,
  sangre, ADN, células
- Sistemas: nervioso, circulatorio, respiratorio, digestivo,
  musculoesquelético, inmunitario
- Famosos: Hipócrates, Andreas Vesalio, Santiago Ramón y Cajal, Marie Curie,
  Alexander Fleming, Elizabeth Blackwell
- Constructor: "¡Construye tu propio cuerpo! Elige las partes y ponle nombre."
- CRÍTICO: acentuación correcta en todos los idiomas. La versión anterior de
  esta variante perdió los acentos en español, catalán, checo y francés
  ("Configuracion", "Corazon", "anos", "tvuj roboticky", "decouvrir").
  Revísalo idioma por idioma antes de entregar.
```

### 6.4 Variante — El Señor de los Anillos

```
Igual que los anteriores, pero ninobot-lotr.html sobre la Tierra Media,
en clave amable y apta para una niña pequeña (aventura y valentía, nada de
terror). Actualiza también el <title>.

- Estado de cabecera: "Conectado desde Rivendel". Despedida: "¡Ninobot se va
  cabalgando! ¡Hasta pronto!"
- SEIS idiomas en esta versión: los 5 habituales más Sindarin élfico (🧝)
  completo y seleccionable en la configuración.
- Mapa: La Comarca, Rivendel, Moria, Rohan, Gondor, Mordor, Lothlórien,
  Isengard
- Personajes con frase propia: Gandalf, Aragorn, Legolas, Gimli, Galadriel,
  Frodo, Sam, Éowyn
- Historias interactivas con acertijos: "El Anillo Perdido", "La Fiesta de los
  Hobbits", "Las Minas de Moria"
- Alfabeto élfico, traductor de idiomas de la Tierra Media, mates con espadas
  y anillos
- Constructor: forja (icono ⚔️) — "¡Forja tu propia espada! Elige las piezas y
  ponle nombre."
- Cierre de la aventura: "La luz siempre vence a la oscuridad, {name}. Nunca
  olvides eso. El coraje, la amistad y la esperanza son más fuertes que
  cualquier miedo."
```

---

## 7. Ideas pendientes / mejoras si retomas el proyecto

**Bugs a corregir:**

- Acentos perdidos en la versión de cuerpo humano (es, ca, cs, fr).
- El `<title>` de las tres variantes sigue diciendo "Tu amigo del espacio".
- "Bip Bop entre los organios" → "los órganos".
- El `@import` de Google Fonts rompe el funcionamiento offline.
- Las historias no ramifican: la elección del niño se lee en voz alta pero no cambia nada. Es la mejora con más impacto de todas.
- "Cohete de {name}": el nombre del título se interpola con `{name}`.

**Ideas nuevas:**

- Un selector de tema único: un solo archivo con las 4 aventuras dentro.
- Guardar progreso entre sesiones (habría que romper la regla de "sin almacenamiento" — decidir si compensa).
- Nuevos temas con la misma plantilla: océano, Antigua Roma, instrumentos musicales, animales del mundo.
- Aligerar el archivo: Three.js ocupa buena parte del MB y solo dibuja el fondo.

---

*Documento generado el 20/08/2026 a partir del análisis de los archivos originales, y verificado línea a línea contra el código de los 4 HTML.*
