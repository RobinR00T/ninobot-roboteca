# Ninobot: La Roboteca

Juego educativo para peques de 3 a 10 años en UN solo archivo HTML, 100% offline.
Una familia de 11 robots acompaña al peque por 18 aventuras × 12 modos de juego,
con Escuela de lectura, misión del día con pegatinas, libro de cuentos con finales
coleccionables, rincón de los padres y voz robótica en 5 idiomas.

- **Jugar:** abre `dist/ninobot-roboteca.html`. Guía por dispositivo (PC, Mac, iPad,
  iPhone, Android): [COMO-JUGAR.md](COMO-JUGAR.md).
- **Modificar o ampliar el juego con IA:** plantillas de encargo para agentes en
  [agentes/](agentes/) (aventuras nuevas, quiz, rutinas de cuidado, auditorías).
- **Compilar:** `./build.sh` monta el HTML final desde `src/` (sin dependencias,
  solo cat + python3 + node para verificar).

Empezado el 1-9-2026 como sucesor de los 4 Ninobots de abril de 2026 (espacio,
dinosaurios, cuerpo humano, LOTR), ahora unificados en una sola app con progreso
y colección. El historial completo de versiones está al final de este documento.

## Decisiones de diseño (cerradas con Daniel el 1-9-2026)

- **Concepto:** temas y compañeros combinables. 8 robots × 8 aventuras.
- **Formato:** un único HTML (`dist/ninobot-roboteca.html`). Doble clic y funciona.
  100% offline (sin Google Fonts, sin CDN, sin Three.js).
- **Progreso:** localStorage (medallas, estrellas, creaciones, ajustes). Nada sale del
  dispositivo. Borrable desde Ajustes.
- **Aventuras (8):** Espacio, Dinosaurios, Cuerpo humano, Tierra Media, Océano,
  Animales del mundo, Música, Mujeres increíbles.
- **Robots (8, originales con guiño):** Bip (R2D2), Doro (C3PO), Kan (K9), Plum (Dalek
  amable), Piqui (Twiki), Luna (HAL dulce), Datia (Data), Chispa (Bender). Cada uno con
  personalidad, frases y voz propias (pitch/rate). Nombres triviales de cambiar (están
  en `src/30-robots.js`).
- **Idiomas:** es / ca / en / cs / fr en todo + idioma fantástico extra por aventura
  (fase 4). Español con ¡¿ correctos; ca/en/cs/fr sin ellos; francés con espacio antes
  de ! y ?.
- **Edad:** 3-10, la edad configurada ajusta las mates (conteo → sumas → restas →
  multiplicaciones) y se guarda.
- **Género:** niña / niño / peque (neutro).
- **Desbloqueo:** todo abierto + medallas (medalla de aventura con 12 estrellas).
- **Mejoras heredadas de la lista de bugs de la spec:** historias que RAMIFICAN de
  verdad, título correcto, acentos correctos, {name} interpolado en canciones,
  control parental de tiempo con despedida amable, +10 min para adultos.

## Estructura

```
src/00-head.html        cabecera HTML
src/10-styles.css       CSS propio (sin frameworks)
src/20-core.js          estado, almacenamiento, voz (TTS con ranking de voces buenas
                        del sistema y selector en Ajustes), reconocimiento, medallas
src/25-ui-strings.js    textos de interfaz (5 idiomas)
src/30-robots.js        los 8 robots: SVG animado + personalidad (5 idiomas)
src/40-espacio-a.js     registro THEMES + Espacio: quiz, alfabeto, famosos, taller
src/41-espacio-b.js     Espacio: historias, canciones, traductor, mapa, charla
src/80-engine.js        pantallas y los 10 modos de juego
build.sh                concatena todo → dist/ninobot-roboteca.html (~270 KB)
```

Compilar: `./build.sh`. Sin dependencias (solo `cat`). Comprobar sintaxis:
`node --check` sobre el bloque script.

## Los 10 modos (genéricos, data-driven por aventura)

Charlar (motor de palabras clave), Historias (grafo de nodos con elecciones que
ramifican), Quiz (10 preguntas), Traductor (idiomas inventados), Explorar (mapa
arrastrable con fichas), Karaoke (letra sincronizada con TTS), Alfabeto (A-Z),
Mates (generador por edad), Taller (constructor con piezas), Famosos (+ tarjeta
del propio niño).

## Hoja de ruta

- **F1 (hecha, 1-9-2026):** motor + Roboteca + 8 robots + progreso + Espacio completo.
- **F2 (hecha, 1-9-2026):** Dinosaurios, Cuerpo humano y Tierra Media migradas al motor
  (`src/42-47`), con historias ramificadas, acentos correctos y mapas con fondo propio.
  Pasada la mini-auditoría de regex del catálogo de errores (¡¿, inglés en fr, cirílico).
- **F3 (hecha, 1-9-2026):** Océano, Animales del mundo, Música y Mujeres increíbles
  (`src/48-55`). Las 8 aventuras completas.
- **F4 (hecha, 1-9-2026):** selector de idioma fantástico por aventura (botón en la
  cabecera de la aventura: el robot saluda y adorna la charla en delfínico, rugidoso,
  élfico, tarareo...) + auditoría: estructural en la propia app (5 idiomas presentes en
  cada cadena, grafos de historias íntegros, diccionarios completos, alfabetos A-Z) y
  batería de regex del catálogo de errores. Todo en verde.
- **Posible F5 (no hecha, decisión de Daniel):** idioma fantástico como 6º idioma de
  INTERFAZ completo por aventura, al estilo del Sindarin original (multiplica todas las
  cadenas; recomendado solo si Nina lo pide tras probar).

## Reglas de estilo de los textos

Ver `docs-skill-original.md` (sección 11) y la spec original. Resumen: frases cortas,
tono cálido, sin miedo ni regañinas, {name} a menudo, un emoji por mensaje, valores
intercalados. PROHIBIDO el guion largo en cualquier texto.

## Retoques post-feedback de Daniel (1-9-2026, 19:00)

- **Voz:** blindada la carrera de carga de voces (espera hasta 3 s a que el sistema
  cargue la lista antes de hablar) y normalizados los códigos de idioma con guion bajo.
  Causa del bug "el español lo lee un inglés".
- **Mapas con escenografía** (`src/60-deco.js`): órbitas reales alrededor del Sol (la
  Luna orbita la Tierra) y mini-constelaciones; paisaje prehistórico con volcán, lago,
  cuevas y huellas; silueta del cuerpo humano con electro de fondo; Comarca→Mordor;
  fondo marino con corales y rayos de luz; 4 hábitats de animales; escenario con telón,
  focos y pentagrama; galería con columnas, banderines y pedestales.
- **Ninobot elegible** como robot acompañante (el primero de la Roboteca, con
  personalidad propia en 5 idiomas) y ahora es el robot por defecto.

## Retoques post-feedback 2 (1-9-2026, 19:20)

- **Voz por fin inteligible:** el bug real no era la selección de voz (elegía bien
  Mónica es-ES) sino el pitch: la base 1.15 × el factor del robot (hasta 1.5) daba
  pitch 1.73 y la voz sonaba deformada, "a inglés". Verificado instrumentando
  speechSynthesis.speak en vivo. Ahora: base ~1.02, factores por robot 0.85-1.3 y
  clamp duro de pitch [0.6, 1.45] y rate [0.65, 1.15].
- **Explorar a pantalla completa:** el mapa se escala para encajar entero a lo alto
  (transform scale + tamaño calculado), ocupa todo el ancho de la ventana y solo
  queda UN scroll, el horizontal. Los POI se reescalan a la inversa para seguir
  siendo grandes y pulsables.
- **El cuerpo humano es un cuerpo:** silueta completa tumbada (pelo, cara sonriente
  que se completa con los emojis de ojos y dientes, brazos con manos y dedos,
  piernas con pies), órganos recolocados anatómicamente.

## v1.6 (1-9-2026, 20:10): la voz en Chrome, resuelta de raíz

Huella del fallo: la voz leía "question mark" y pronunciaba "Sí" como "sai" aunque el
código asignaba Mónica es-ES (verificado por instrumentación en el Chrome real). Causa:
el puente de Chrome con el motor de voces locales de macOS ignora la voz asignada en
esa máquina y reproduce con la voz por defecto del sistema (inglesa, Mac en en_ES).
Solución: en Chrome se prioriza "Google español" (voz de red del propio Chrome, no pasa
por el motor de macOS), con reintento en voz local si la red falla; signos de apertura
(¡ ¿ « ») eliminados de la locución; migración que reinicia la voz fijada de versiones
previas; versión visible en hub/Ajustes.

## v1.7-v1.9 (1-9-2026, 20:20-21:50): voces por robot, interrupciones y mapas ilustrados

- **v1.7:** voz distinta por robot (en Chrome, alterna Google español ES/US; en el
  resto, las 3 mejores voces locales + tono propio). Política de interrupción: todo
  discurso nuevo corta al anterior (robots, quiz, fichas, historias).
- **v1.8:** mapa del Espacio ilustrado (`src/61-espacio-icons.js`): planetas SVG con
  tamaño/color/forma fieles (Júpiter con bandas y mancha roja, Saturno con anillos,
  Plutón con su corazón), constelaciones como patrones reales de estrellas unidas,
  galaxias en espiral.
- **v1.9:** Océano reorganizado POR PROFUNDIDAD (`src/62-oceano-icons.js`): plataforma
  de arena descendente, zonas de luz/penumbra/abismo y la fosa cortada al final;
  15 animales SVG a escala (ballena azul enorme, pez payaso mini, calamar gigante).
  Dinosaurios dibujados a escala (`src/63-dinos-icons.js`). Y arreglado el bug
  Plum→Piqui: al cancelar una voz de red, Chrome dispara onerror y el reintento
  recolaba el texto del robot anterior; ahora un token de generación (_gen) descarta
  para siempre cualquier resto de un discurso cancelado. Verificado en el Chrome real.

## v2.0 (1-9-2026, 22:00): personalización y los mapas que pidió Daniel

- **Piel y pelo del peque** elegibles en la configuración (5 tonos de piel, 6 colores
  de pelo, retrato en vivo `childPortrait()` en `src/30-robots.js`); el retrato
  sustituye al emoji en la tarjeta del peque en Famosos.
- **Espacio animado:** los planetas se deslizan por sus órbitas (vaivén suave,
  `startOrbits()` en el engine), la Luna da vueltas completas alrededor de la Tierra
  en movimiento (su órbita la sigue) y dos cometas con cola cruzan el cielo (SMIL).
- **Cuerpo humano VERTICAL** (`src/64-cuerpo-icons.js`): cuerpo de pie con esqueleto
  visible (columna, costillas, huesos de brazos y piernas), órganos dibujados
  anatómicos en su sitio y panel lateral de sistemas. Lienzo propio de 1400px.
- **Mujeres increíbles con caras** (`src/65-increibles-icons.js`): generador de
  retratos + rasgo distintivo (gafas de aviadora de Amelia, flores de Frida, pañuelo
  de Malala, moño de Curie...).
- **Música sonora** (`src/66-musica-icons.js`): instrumentos dibujados y, al tocarlos,
  suena una musiquilla Web Audio según la familia (arpegio de arpa, fanfarria,
  timbales, platillos, aplausos); dos fichas nuevas: el pentagrama (con escala
  do-re-mi-fa-sol sonando) y las figuras (redonda/blanca/negra/corchea con sus
  duraciones reales). Los mapas estrechos se centran en pantalla.

## v2.1 (1-9-2026, 22:12): Urano, 15 constelaciones y el cometa Halley

- Urano redibujado (el anillo vertical quedaba cortado por el viewBox).
- Añadidas las 7 constelaciones que faltaban del original (Escorpio, Cruz del Sur,
  Géminis, Lira, Delfín, Águila, Can Mayor): 15 en total, mapa ensanchado a 3000px
  (el deco del espacio usa e.width dinámico).
- El cometa decorativo es ahora EL COMETA HALLEY: POI clicable con ficha propia,
  viajando por su órbita elíptica alargada (dibujada punteada) alrededor del Sol,
  animado en startOrbits. Queda una estrella fugaz decorativa de fondo.

## v2.2 (1-9-2026, 22:38): historias A/B, caras de famosos, zodiaco y misterios

- **Historias siempre con dos opciones** (`80-engine.js`): las escenas que en los
  datos solo tienen un camino (59 nodos "Seguir") ganan en el motor una opción B
  con sabor propio ("Respirar hondo primero... ¡y adelante!" / "Mirar bien
  alrededor... ¡y seguir!") que el robot celebra ("¡Buena idea, {name}!") antes de
  continuar. Vale para cualquier historia futura.
- **Caras dibujadas en los 54 famosos** (`67-famous-faces.js`): retrato makeCara
  con rasgo distintivo por persona (casco de Gagarin, bigote de Hadfield, sombrero
  y barba de Gandalf, gorro rojo de Cousteau, peluca de Mozart, barba de Félix
  Rodríguez de la Fuente...). Mini-caras también en los chips de navegación. El
  generador cara() admite ahora barbas (full/long/must/goatee) y estilos bald/wig/wild.
- **Zodiaco completo en Explorar espacio**: categoría nueva "Zodiaco" con las 12
  constelaciones en orden de fechas (Leo, Tauro, Géminis y Escorpio se mudan allí;
  se añaden Aries, Cáncer, Virgo, Libra, Sagitario-tetera, Capricornio, Acuario y
  Piscis). Cada ficha dice sus fechas: "si tu cumpleaños es entre X e Y, ¡es la tuya!".
- **Misterios del universo**: categoría nueva al fondo del mapa con agujero negro
  (disco de acreción animado), cuásar (chorros pulsantes), púlsar (haces girando)
  y supernova (onda expansiva). Mapa a 4400px, brumas del deco recolocadas.
- **Alfabeto con dibujos representativos por idioma** (`68-abc-emojis.js`): la
  palabra de cada letra cambia según el idioma y ahora el dibujo también (101
  overrides); el emoji se ve ya en la cuadrícula de letras, no solo en la ficha.
- **Mates**: al acertar dice "¡Siiiiií!" y al fallar "Nooooo..." antes del ánimo.
- **Taller del cohete**: se construye TUMBADO (horizontal, como en el hangar) y al
  guardarlo despega en VERTICAL a pantalla completa con cuenta atrás 3-2-1,
  estrellas y confeti (flags horizontal/launch en el builder de espacio).
- **Mapas**: fuera el icono ✅ de las etiquetas; lo visitado se marca con tinte verde.

## v2.3 (1-9-2026, 22:58): sistema solar de verdad y el mar de los dinosaurios

- **Sistema solar completo** (`61-espacio-icons.js` + `startOrbits`): Sol en el
  centro (1050,560) y 9 órbitas ELÍPTICAS completas (vista inclinada), ninguna
  cortada. Los planetas dan la vuelta ENTERA con velocidad kepleriana
  (T proporcional a rx^1.5: Mercurio ~10 s, Neptuno ~2,4 min). Canvas a 5100px;
  constelaciones, zodiaco, galaxias y misterios corridos +700. Halley recolocado
  con el perihelio junto al Sol. Luna a 6 s/vuelta alrededor de la Tierra móvil.
- **Nebulosa sin arcoíris**: la N del alfabeto del espacio ya no es 🌈 (confundía);
  ahora es 🎆.
- **Despegue del taller**: al despegar ya no sale el icono 🚀 (es nuestro cohete el
  que vuela); aparece la Luna 🌕 como destino.
- **Dinosaurios: mar y voladores** (`63-dinos-icons.js` + deco): mapa a 3400px con
  zona nueva "El mar prehistórico" (mosasaurio, ictiosaurio, amonites nadando, con
  playa y olas), pterodáctilo y quetzalcoatlus volando, y un plesiosaurio en el
  lago (como Nessie, pero de verdad). `decoSvg()` acepta ancho variable.

## v2.4 (1-9-2026, 23:08): cuerpo anatómico, taller de médicos, submenús y mapamundi

- **Órganos proporcionales y en su sitio** (`64-cuerpo-icons.js`): cerebro dentro del
  cráneo, ojos/oreja/dientes en la cara, pulmones grandes centrados en el pecho con
  el corazón encima (tamaño puño) y las costillas al lado, estómago a su lado
  anatómico, riñones e intestino en la barriga, músculos en el brazo y fémur
  (redibujado en vertical) en el muslo. Nuevo `poikMax` por mapa: los iconos del
  cuerpo NO se inflan al escalar (proporción fiel en cualquier pantalla).
- **Taller del cuerpo: médico o enfermera** (`44-cuerpo-a.js`): el peque SE CONSTRUYE
  A SÍ MISMO de sanitario (usa su piel y pelo de Ajustes): uniforme (bata blanca /
  pijama / quirófano con mascarilla), color, gorro quirúrgico o espejo frontal, y
  fonendo, jeringuilla, termómetro o maletín. El motor acepta `icon` por opción.
- **Submenús de zonas FUNCIONALES en todos los mapas** (`mapCat` en el motor): tocar
  Cabeza/Pecho/Selva/Zodiaco... desplaza el mapa a la zona, RESALTA sus puntos
  (los demás se atenúan), marca el chip y lo dice en voz alta. Segundo toque: todo vuelve.
- **Mujeres increíbles: MAPAMUNDI** (`65-increibles-icons.js`): continentes dibujados
  (Américas, Groenlandia, Europa+UK, África+Madagascar, Asia+India+Japón, Australia+NZ,
  Antártida), ecuador, brújula y olas; categorías por continente y cada mujer en su
  país (Curie en Polonia, Frida en México, Malala en Pakistán, Junko en el Everest,
  Sylvia Earle en pleno océano...).
- **Espacio**: el Sol ahora ES mucho mayor que Júpiter (250 vs 84) y todos los
  planetas guardan proporción sin inflarse (poikMax 1.4); órbitas más separadas.
- **Dinosaurios**: Diplodocus (selva), Parasaurolophus trompetista (volcán),
  trilobites y megalodón (mar, con sus épocas explicadas).

## v2.4.1 (1-9-2026, 23:20): órbitas clavadas

- La etiqueta de los puntos del mapa ahora cuelga en absoluto bajo el icono: el
  dibujo queda centrado EXACTO en su coordenada (desviación 0,0000 de la elipse).
- Los astros que orbitan pierden el balanceo "floaty": siguen su raya.
- Sol contenido (icono 170, rayos cortos) y Mercurio alejado (rx 230): ya no
  parece estar encima del Sol. Cadena de órbitas reajustada (achatamiento 0,55).

## v2.4.2 (1-9-2026, 23:27): el mar ancho y el cielo de los voladores

- Mapa de dinosaurios ampliado a 4000px: el mar prehistórico ahora ocupa 1400px
  de ancho (2620-4000), con más olas y espacio para nadar.
- Categoría nueva "El cielo" (🪽): Pteranodón (que estaba en el lago), Pterodáctilo
  y Quetzalcoatlus vuelan juntos sobre el mar, entre nubes y con sol lejano.
- Marinos recolocados a lo ancho: trilobites, mosasaurio, ictiosaurio, megalodón
  y amonites, cada uno con su sitio.

## v2.5 (1-9-2026, 23:47): CUATRO AVENTURAS NUEVAS: 12 en total

- **Star Wars** (`70/71-starwars`): 8 famosos (Luke, Leia, Yoda, Obi-Wan, Rey, Han,
  Chewbacca, Grogu), mapa galaxia (Tatooine con dos soles, Hoth, Endor, Dagobah,
  Naboo, Coruscant, Halcón y TIE animados), taller de droides (R2/BB/C-3PO),
  idiomas Droide/Wookiee/Ewok/Jawa, 3 historias con 3 finales cada una.
- **Piratas** (`72/73-piratas`): galeón dibujado con mástiles y cofa, isla del
  tesoro con la X, kraken juguetón; Barbanegra, Anne Bonny, Mary Read, Drake,
  Ching Shih y Calico Jack; taller del barco pirata; idiomas Lorito/Marinero/
  Sirena/Kraken. Cañones de confeti y monedas de chocolate.
- **Egipto** (`74/75-egipto`): pirámides + esfinge + Nilo + templo (16 lugares),
  Tutankamón, Cleopatra, Ramsés II, Nefertiti, Hatshepsut y Howard Carter;
  taller de máscara de faraón; idiomas Jeroglífico (habla con dibujitos)/Gato
  del templo/Momia/Camello.
- **Amazonas** (`76/77-amazonas`): selva en capas + río + dosel (16 lugares con
  datos reales), Humboldt, Orellana, Merian, Chico Mendes, Marina Silva y Davi
  Kopenawa; taller de la canoa; idiomas Guacamayo/Mono aullador/Delfín de río/
  Rana. Mensaje de fondo: cuidar la naturaleza.
- Cada aventura: quiz 10, alfabeto A-Z, 3 canciones que riman POR idioma, 3
  historias ramificadas, traductor con 4 idiomas inventados, mapa con paisaje y
  charla temática. Todo en 5 idiomas, auditado (estructura, grafos, dicts,
  distancias del mapa, reglas de estilo). El bundle pasa de 1,0 a 2,0 MB.

## v2.6 (2-9-2026, 00:12): la noche de los dibujos, las caras y los sonidos

Encargo nocturno de Daniel: "mejora los dibujos y aplica todo lo aprendido a las
diferentes aventuras; sonidos reales a los instrumentos; sé más cauto y valida;
más animales en la prehistoria". Hecho con 7 subagentes en paralelo + trabajo directo:

- **El moái expulsado de Egipto** (quiz, alfabeto y mapa): la esfinge ahora es 🦁
  y está DIBUJADA como debe (cuerpo de león, nemes, kohl). Regla nueva en memoria:
  validar plausibilidad cultural antes de meter nada.
- **91 iconos SVG nuevos en 6 mapas** (motor: 99-engine.js renombrado para hacer
  sitio a 80-88): Star Wars 16 (Halcón con mandíbulas, TIE, Estrella de la Muerte,
  Jawa de ojos amarillos...), Piratas 16 (pirata niño en la cofa, sirena entera,
  kraken de ojos como platos, calavera con piruletas), Egipto 16 (esfinge, faraón
  y escriba con cuerpo y cara, momia con gorrito), Amazonas 16 (boto con joroba
  correcta, harpía, Victoria con muesca), Animales 15 (jaguar y guepardo por fin
  distintos), Tierra Media 12 (la Comarca, Moria con mithril, Gondor por niveles,
  Mordor suavizado con florecitas).
- **Caras de los 26 famosos nuevos** (`86-famous-faces-2.js`): Yoda y Grogu verdes
  con sus orejas, Chewbacca peludo, Leia con moños, Tutankamón y Hatshepsut con
  nemes y kohl (ella con su barba postiza real), Nefertiti con su corona, Ching
  Shih, Davi Kopenawa con pintura facial...
- **Sonido realista en Música** (`66-musica-icons.js` reescrito): síntesis
  Karplus-Strong para cuerda pulsada (guitarra, arpa, piano de dos cuerdas),
  arco con vibrato y ruido de crin (violín, chelo), flauta con soplo, metales con
  filtro que se abre (trompeta, tuba), caña con vibrato (saxo), láminas
  inarmónicas (xilófono), timbales con caída de tono, platillos de 6 parciales
  metálicos, aplausos de 40 ráfagas, y compresor de salida.
- **La edad de hielo en dinosaurios** (`88-dinos-extra.js`): mapa a 4700px, zona
  nueva con aurora boreal, glaciares e iceberg; mamut lanudo, tigre dientes de
  sable y rinoceronte lanudo (todos "DESPUÉS de los dinosaurios"), más
  arqueópterix (Jurásico), meganeura (ANTES, Carbonífero), dimetrodón (ANTES,
  no era un dinosaurio) y dunkleosteus (mares antiguos). Épocas explicadas.

## v2.7 (2-9-2026, 10:35): VOZ ROBÓTICA de verdad

- Motor eSpeak embebido al completo (`21-robovoice.js`, meSpeak v2 de masswerk.at,
  GPL, uso personal): sintetizador de formantes con el timbre robótico clásico,
  100% offline, sin worker (3 parches al front: hasWorker off, arranque con core
  en página, URLs relativas sin baseUrl) y con las 5 voces embebidas (es/ca/cs/
  fr/en) servidas por un XMLHttpRequest de mentirijilla.
- Pegamento (`23-robovoice-glue.js`): la cola de habla del juego decide por
  trozo: voz robótica si está activa y cargada, con el tono/velocidad propios de
  cada robot mapeados a eSpeak (pitch 0-99, palabras/minuto); interrupciones
  paran también a eSpeak; watchdog anti-mudez y fallback automático a la voz
  humana si algo falla.
- Ajustes: nueva opción "Tipo de voz: 🤖 Robótica / 🙂 Humana" (robótica por
  defecto). El selector de voz del sistema solo aparece en modo humano.
- Verificado en navegador: 5 voces cargadas, habla y termina limpio en es/cs/fr,
  toggle operativo. El bundle sube a 4,0 MB (sigue siendo un único HTML).

## v2.7.1 (2-9-2026, 13:10): sin solapes de voz y la máquina del tiempo viaja

- **Fix del solape de voces en Explorar** (todos los mapas): dos causas: (1) la voz
  robótica ahora la reproducimos nosotros por Web Audio (meSpeak entrega el WAV por
  rawdata en el callback y guardamos la fuente activa): un stop corta el sonido de
  raíz y no quedan arranques pendientes; generación _sgen descarta decodificaciones
  tardías. (2) el temporizador que retrasa la voz tras el jingle (música) se
  cancela al tocar otro punto (M.sayTimer). Verificado: Sol-Venus-Marte encadenados
  con 0 audios activos al entrar cada nuevo y exactamente 1 sonando.
- **La máquina del tiempo VIAJA al guardar** (taller de dinosaurios): overlay a
  pantalla completa con la máquina centrada, doble portal de colores girando,
  cuenta atrás 3-2-1 con voz ("¡rumbo a la prehistoria!"), giro acelerado hasta
  desaparecer, destello blanco y vuelta al taller. Flag builder.travel.
- Quitado el icono 🦖 que iba pegado a la máquina en el taller.

## v2.7.2 (2-9-2026, 13:05): las aves de Egipto

- El FLAMENCO en el Nilo (dibujado: rosa, cuello en S, una pata), con dato veraz:
  su silueta era un jeroglífico y servía para escribir la palabra "rojo".
- De propina y con rigor: el HALCÓN DE HORUS en el templo (el ave sagrada por
  excelencia junto al ibis), con su corona y el ojo que daba buena suerte.
  18 lugares en el mapa de Egipto.

## v2.8 (2-9-2026, 13:25): la llamada, el baile del droide y portabilidad

- **📞 Llamar a un robot** (portada): botón nuevo en el hub; eliges a cualquiera de
  los 9 robots (con su retrato) y entras en una pantalla de llamada (avatar
  bailando, estado, colgar) para charlar DE CUALQUIER COSA: chat genérico nuevo en
  35-call.js (14 temas + 6 comodines, 5 idiomas, con {robot} y {name}); teclado y
  micro. El robot saluda con su hello propio al descolgar.
- **Fix de matching en TODOS los chats**: las claves con espacio ("hi ") perdían el
  espacio al normalizar y "chiste" activaba el saludo por contener "hi". Nuevo
  normKey sin recorte aplicado a la llamada y al chat de las 12 aventuras.
- **El droide de Star Wars**: encuadre recortado (viewBox desde y=22) para que
  quede CENTRADO en el taller, y al guardar ¡BAILA!: pista de discoteca con focos
  de colores girando, baldosas parpadeantes, botes con giro, bips musicales
  (síntesis propia) y confeti (flag builder.dance + danceShow).
- **Portabilidad iPad/otros equipos**: verificado en viewport tablet (hub, llamada
  y voz robótica funcionando de punta a punta). El HTML es un único fichero sin
  red: Web Audio con fallback webkit, decodeAudioData por callback (Safari),
  micro degradado con aviso donde no existe, estado en localStorage con try/catch.

## v2.8.1 (2-9-2026, 13:50): la llamada entiende y sigue el contexto

- Vocabulario de la llamada: de 14 a 61 temas (piropos, insulto suave respondido
  con cariño, 6 emociones, hambre/sueño/pipí, humor caca-pedo, familia, mascotas,
  9 gustos, colores, 9 preguntas al robot, 7 aventuras, cumpleaños, ayuda, secreto).
- Motor conversacional con CONTEXTO: el robot recuerda su última pregunta
  (expects dia/gusta/mascota/aprender) e interpreta el "bien", "mal", "sí", "no"
  o el nombre de la mascota EN contexto; distingue preguntas (askFallback honesto,
  sin inventar datos) de afirmaciones; síes y noes sueltos con respuesta propia.
- Verificado con batería de 11 frases: piropos, tristeza, hola→bien encadenado,
  perro→nombre encadenado, humor, pregunta desconocida y chiste.

## v2.9 (2-9-2026, 14:15): la gran pasada de mejoras (2 revisores + 5 constructores)

Repaso encargado por Daniel ("mejoras de funcionalidades, gráficos, interacción").
Dos informes (UX 20 puntos, robustez 11 defectos confirmados) y aplicación masiva:

MEJORAS DE EXPERIENCIA
- 🏅 CELEBRACIÓN DE MEDALLA a pantalla completa al cruzar las 12 estrellas
  (medallón girando con brillo, fanfarria, confeti doble y locución). No existía.
- Celebración temática al guardar en los 9 talleres que no tenían (90-celebrations
  + celebrateShow): el submarino se sumerge, el barco navega, la máscara brilla,
  el animal salta, la guitarra y la espada se mecen, el médico late.
- Quiz: opciones BARAJADAS (la respuesta ya no está siempre en el mismo sitio) y
  LOCUTADAS (A, B, C...); las historias también locutan sus opciones: los
  pre-lectores pueden jugar solos. Stingers de acierto/fallo (síntesis).
- Chips de frases hechas en Charlar y Llamada (sin teclado); action "song" del
  chat funcional (botón "¡Vamos a cantarla!"); estrellas por charlar (3/6/10).
- Las aventuras arrancan por EXPLORAR; el botón del idioma fantástico late hasta
  el primer toque; aviso cariñoso a 5 minutos del final; 🔊 de repetir en
  alfabeto y famosos; "Dilo con tu voz" (renombrado); karaoke con acorde de arpa
  por línea y fanfarria final; pop al tocar lugares del mapa.
- Creaciones del taller VISITABLES: lupa en el taller y miniatura real clicable
  en la colección, con modal para verlas y borrarlas (miniSvg/buildView/buildDel).
- Tarjetas de aventura del hub con mini-escena SVG animada (91-theme-cards).
- La llamada con avatar animado (boca al hablar) y estado real (statusbox).
- Iconos semánticos en las opciones de los 7 talleres antiguos y mini-paths SVG
  en lugar de emojis dentro de los dibujos de 4 talleres.
- Mapa dinos 33/33 dibujado (nido con bebé, ámbar con mosquito, volcán, fósil...).
- Tierra Media de 12 a 16 lugares: Montaña Solitaria con Smaug roncando sobre
  monedas, Bree, el Abismo de Helm y Rhosgobel con Radagast (87-tierramedia-extra).

ROBUSTEZ (11 defectos confirmados, todos corregidos)
- El idioma fantástico persistía y dejaba MUDA la llamada (S.fx limpio en
  goHub/loadState/goBye + fantasyLang blindado).
- Bucles rAF acumulados en las órbitas del espacio (token orbitGen).
- Timers que pisaban otras pantallas: avance de mates, saludo de la llamada,
  burbujas diferidas del chat, locución de POI tras jingle (variables de módulo
  + guards de modo/pantalla). Cierres de las fiestas del taller con guard.
- Con sonido apagado, karaoke y llamada por voz se colgaban (onEnd asíncrono).
- "Borrar todo" apagaba la voz robótica y dejaba vivo el temporizador.
- Doble toque al micro corrompía el estado (abort limpio del reconocedor).

## v3.0 (2-9-2026, 14:40): optimización medida y verificación integral

- **Órbitas por `translate`** (compositor) en vez de left/top (layout): el revisor
  midió 0,37 → 0,10 ms/frame (el 73% menos) con el mapa del espacio abierto; en
  iPad el ahorro relativo es mayor. Fórmula delta validada (error 6,66e-16).
- **Comentarios fuera del dist** (strip-comments.py en build.sh): 55 KB menos por
  build; el código fuente en src/ queda intacto y legible. El build ahora
  verifica el bundle con node --check automáticamente.
- **Verificación integral**: 12/12 aventuras × 10 modos sin errores, quiz sano
  tras el barajado, builders con variantes, llamada de punta a punta, submenús,
  voces robóticas, medalla y celebraciones comprobadas en pantalla.
- Backlog documentado (medido, no aplicado por bajo ratio beneficio/riesgo):
  deduplicar las 24 palabras base del traductor entre los 12 temas (~21 KB),
  compactar objetos multilingües a arrays en build (~80 KB, riesgo medio), y
  migrar los ~156 SMIL del mapa espacial a CSS si el iPad real muestra tirones.
  También: guardar los "visitados" del mapa por id estable en vez de índice, y
  ampliar los bancos de quiz a 14-15 preguntas para rejugabilidad.

## v3.0.1 (2-9-2026, 15:45): anatomía fina del cuerpo humano

- Pecho reorganizado: costillas como media caja torácica envolvente al lado
  izquierdo (ya no "a un lado" suelto), pulmones centrados algo menores y el
  CORAZÓN delante, más grande y visible (ya no queda tapado).
- Órganos nuevos en la barriga, en su sitio anatómico: HÍGADO (grande, lado
  derecho del cuerpo = izquierda visual), VESÍCULA (bolsita verde bajo el
  hígado) y PÁNCREAS (alargado tras el estómago), con sus datos en 5 idiomas.
- El intestino se divide en GRUESO (el marco ancho con haustras, renombrado del
  POI existente) y DELGADO (la madeja fina de seis metros, POI nuevo dentro),
  cada uno con su ficha. El cuerpo pasa de 15 a 19 lugares.
- Star Wars: "aprendiza" corregido a "aprendiz" (petición de Daniel).

## v3.1 (2-9-2026, 16:05): el abismo del océano y el cuerpo desdoblado

- OCÉANO: 3 habitantes nuevos de las profundidades: el CACHALOTE (campeón de
  buceo, con chorro), el RAPE ABISAL (con su lamparita parpadeante de verdad) y
  el PEZ HACHA (plateado con luces en la tripa). Profundidad que se siente:
  gradiente hasta el negro abisal, MARCAS DE METROS (0, 200, 1.000, 4.000,
  11.000 m) en la zona honda y nieve marina cayendo animada. 18 lugares.
- CUERPO HUMANO desdoblado en DOS CUERPOS PARALELOS (idea de Daniel): el de los
  ÓRGANOS (carita, corazoncito flotando) y el de los HUESOS (esqueleto completo
  con cráneo dibujado, caja torácica centrada, columna de vértebras y fémur, y
  su huesito flotando). Categoría nueva "Los huesos" + 2 POIs nuevos (el cráneo
  y la columna, con sus datos). 21 lugares y mucho más legible. Canvas a 1500.

## v3.2 (2-9-2026, 16:35): SEIS aventuras nuevas (18 en total) y el modo LEER

Encargo de Daniel: Gaudí, Miró, Dalí, Picasso, Árboles, Frutas y hortalizas, y
una opción divertida para aprender a leer. 6 constructores en paralelo con rigor
cultural estricto + el modo Leer hecho en el motor.

- **✏️ MODO LEER** (11º modo, en todas las aventuras): rondas de 8 alternando
  "lee la palabra y toca su dibujo" (palabra grande con SÍLABAS COLOREADAS) y
  "¿dónde pone lo que ves?" (dibujo y palabras para elegir). Se adapta a la edad
  (2 opciones y ayuda de voz a los 3-5; hasta 4 opciones a los 8+), usa las
  palabras del tema de cada aventura, y premia con sonidos, confeti y estrellas.
- **🦎 Gaudí**: la salamandra-fuente, el banco de Jujol, las 86 columnas, las
  columnas-árbol y vidrieras de la Sagrada Família, las chimeneas guerreras, la
  maqueta de cadenitas; taller de casa modernista con trencadís; idiomas
  Trencadís/Dragón/Campanas/Gárgola.
- **✨ Miró**: Mont-roig, el lienzo en blanco contado bonito, Dona i Ocell, los
  murales de la UNESCO, el móvil del amigo Calder; taller "Pinta tu cuadro".
- **⏰ Dalí**: el museo de Figueres (huevos, panes, Cadillac lluvioso), el reloj
  blando del queso derretido, el elefante patilargo, la tramontana con carita,
  Portlligat; idioma "Sueño" con las sílabas al revés.
- **🕊️ Picasso**: períodos azul y rosa, el primer collage, la bici-toro, el
  Guernica contado con delicadeza, la paloma de la paz; retrato cubista con
  ojos bailones; idioma "Cubista" que descoloca sílabas.
- **🌳 Árboles**: el internet del bosque (micelio con lucecitas), secuoya,
  baobab, bambú, las 4 estaciones animadas; Wangari Maathai, Jadav Payeng,
  Suzanne Simard, Julia Butterfly Hill, Teofrasto; taller "Planta tu árbol".
- **🍎 Frutas y hortalizas**: el huerto (la zanahoria es raíz, el brócoli son
  flores, el tomate es fruta), la parada del arcoíris; Clara Peeters, Mendel,
  Carver, Vavílov, Borlaug; taller de brochetas de fruta.
- Cada una: quiz 10, alfabeto 26, 3 historias ramificadas, 3 canciones rimadas
  por idioma, 4 idiomas inventados, mapa DIBUJADO de nacimiento (15-16 POIs con
  SVG), tarjeta de portada animada y celebración de taller. Auditadas: 0
  problemas estructurales. Bundle: 4,45 MB. 18 aventuras × 11 modos.

## v3.3 (2-9-2026, 17:00): pulido gráfico con capturas reales + eficiencia

- Revisor gráfico con capturas pantalla a pantalla de los 6 mapas nuevos, el hub
  y 2 talleres: 15 hallazgos, TODOS aplicados: el Cadillac, las hormigas y el
  bigote de Dalí ya no flotan sobre el mar (a la arena), los olivos a las rocas,
  las vidrieras de Gaudí al cielo entre torres, el mirador apoyado en la colina,
  la maqueta y el zumo dentro del encuadre, la balanza sin taparse, el guisante
  al surco, la lechuga visible, el caballete de Miró sin pisarse con la masía,
  las estaciones de Árboles con nombres cortos y bandas sin costura, la red de
  raíces dentro del mapa, los nombres de la colección en blanco (contraste) y
  la cabecera con tamaño adaptativo para nombres largos de tema.
- Eficiencia: deduplicadas las 19 palabras comunes del traductor que las 18
  aventuras copiaban (24-shared-words.js, 329 sustituciones, 27 KB menos) con
  verificación de IGUALDAD EXACTA del contenido antes/después.

## v3.4 (2-9-2026, 17:56): caras para todos + Escuela de lectura en la portada

- **Caras dibujadas para los 30 famosos de las 6 aventuras nuevas**
  (98-famous-faces-3.js, regla de la casa: siempre caras, nunca iconos):
  Dalí con el bigote de las once y diez, Picasso calvo con la marinera de
  rayas, Miró con jersey rojo y pins, Prats con sombrero (era sombrerero),
  Calder con móvil de alambre, Güell con chistera, Gala con diadema dorada,
  Lorca con pajarita, Wangari con pañuelo africano, Payeng con turbante,
  Julia Butterfly con mariposa, Teofrasto con laurel griego, Mendel de monje
  con gafas y cruz, Carver con la flor en la solapa, Peeters con gola del
  XVII, Vavílov con espigas, Borlaug con trigo…
- **Escuela de lectura**: sale de las aventuras (era el 11º modo) y pasa a la
  PORTADA como sección propia, rediseñada con las prácticas reales de
  lectoescritura (método fonético-silábico progresivo): 5 lecciones cortas de
  6 rondas: 1) las vocales con palabra ancla (A de abeja, en 5 idiomas, con
  mayúscula y minúscula), 2) sílabas directas ma-pa-sa-la-ta con distractores
  pedagógicos (misma consonante/otra vocal y viceversa), 3) primeras palabras
  bisílabas que el robot lee despacito por sílabas coloreadas, 4) palabras del
  mundo (las 19 comunes, en ambos sentidos palabra↔dibujo), 5) frases pequeñas
  con hueco que se rellena al acertar. Todo locutado, botón 🔊 para repetir,
  2-3 opciones según edad, éxito temprano, progreso por lección (estrellas) y
  MEDALLA DE LECTURA al dominar las 5 (cuenta en el total de medallas y en la
  colección). Contenido en 36-leer.js validado idioma a idioma (checo con
  géneros correctos: ten pes / ta ryba / to kolo).
- Verificado en navegador: 0 errores de consola, 30/30 caras aplicadas,
  flujo completo de las 5 lecciones con estrellas y medalla, mini-caras en
  chips. Bundle: 4,44 MB (+21 KB).

## v3.5 (2-9-2026, 18:36): misión del día, trazar letras y modo app iPad

- **🎯 Misión del día** (37-mision.js): primera tarjeta de la portada, 3 retos
  pequeños al azar que cruzan aventuras (gana estrellas, descubre lugares,
  canta, lee, quiz, números, taller, llamada, abecedario), con progreso en
  vivo. Al cumplir los 3: confeti, aviso flotante (toast que no rompe la
  pantalla en curso) y una PEGATINA de premio que va al álbum de la colección.
  Sin rachas ni castigos: cada día misión nueva y ya está. Los eventos llegan
  de los flujos reales (award, poi solo si es lugar nuevo, letra solo si es
  nueva, karaoke al darle a cantar, mensajes de la llamada).
- **✍️ Lección 6, Escribir letras**: grafomotricidad de verdad en la Escuela
  de lectura: el peque repasa la letra con el dedo trazo a trazo (las 5
  vocales + m/p/s/l/t en palo), con punto de inicio pulsante, puntos de
  control que se encienden al pasar, tinta del color del robot, botón borrar
  y validación por cobertura (80% de los puntos del trazo). Al acabar la
  letra: "¡M de mamá!" y confeti. SVG con pointer events y touch-action:none
  (pensado para iPad). La medalla de lectura pide ahora las 6 lecciones.
- **📱 Modo app en iPad**: metas apple-mobile-web-app: al "añadir a pantalla
  de inicio" se abre a pantalla completa sin barra de Safari, con safe-area
  para el notch (viewport-fit=cover + env(safe-area-inset)).
- Probado entero en navegador: misión completada de punta a punta por flujos
  reales (canción + 3 mensajes + chat + quiz perfecto → pegatina 🎈 y toast),
  trazado validado con PointerEvents reales despachados (letra U completada
  por cobertura), renovación de misión al cambiar de día conservando el
  álbum, medalla de lectura al dominar las 6 lecciones, 18 temas × 10 modos +
  18 POIs + 6 lecciones + llamada: 0 fallos y 0 errores de consola, sin
  desbordes en tablet (768) ni móvil (375). Bug cazado en pruebas: el CSS del
  pad usaba .trazopad y el SVG solo llevaba id → guías invisibles; arreglado
  añadiendo la clase. Bundle: 4,46 MB.

## v3.6 (3-9-2026, 00:23): quiz que no se repiten, libro de cuentos y rincón de los padres

- **❓ Bancos de quiz ampliados de 10 a 15 preguntas** en los 18 temas (270 en
  total; 90 nuevas × 5 idiomas escritas por 6 subagentes en paralelo con
  plantilla estricta y auditadas una a una: formato, rayas, ¡¿ solo español,
  espacio francés, checo idiomático, answers variados, plausibilidad cultural).
  La partida sigue siendo de 10: al sortear sobre 15, cada partida es distinta.
  Contenido nuevo con rigor: Laika, Argentinosaurio, huellas dactilares, senet
  y la barca de Ra, Anne Bonny y Ching Shih, anaconda y nutria gigante, ents y
  las águilas, pez globo y bioluminiscencia, Mozart niño y Beethoven sordo,
  Rosa Parks y Hedy Lamarr, Tatooine y Coruscant, Gaudí de Reus hijo de
  calderero, el mosaico de Miró que se pisa en la Rambla, el Chupa Chups de
  Dalí, la cabeza de toro de Picasso, el alcornoque, la calabaza gigante.
- **📚 Libro de cuentos**: los finales de las historias ramificadas ahora se
  COLECCIONAN (94 finales en todo el juego). Al llegar a un final: se guarda,
  toast "¡Final nuevo para tu libro!" y contador "Finales encontrados: x de y"
  con botón de releer; la lista de historias muestra 📖 x/y por cuento; y en
  la colección hay una tarjeta Libro de cuentos con el total y un modal con lo
  leído y cuántos finales quedan por descubrir.
- **🧑‍🧒 Rincón de los padres** (38-padres.js): en Ajustes, tras una puerta
  para adultos (multiplicación). Resumen en el idioma activo: tiempo jugado
  hoy y total (el timer acumula cada 15 s, guardando 14 días), estrellas,
  medallas, misiones cumplidas, pegatinas, finales de cuento, las 6 lecciones
  de lectura con sus estrellas y "qué practicar juntos" (lecciones con menos
  de 2 estrellas y los 3 temas empezados más flojos).
- Verificación integral: 180 tema×modo + 18 POIs + 18 PARTIDAS DE QUIZ enteras
  sobre los bancos nuevos + 6 lecciones + llamada + libro (final guardado,
  contadores, modal) + puerta de padres (falla→cierra, acierta→panel) + tick
  de tiempo real de 15 s: 0 fallos, 0 errores de consola. Bundle: 4,60 MB.
- (00:47) Añadido al "Acerca de" (💜) el contacto para sugerencias, errores e
  ideas: daniel.solis@ninenka.com, como enlace mailto, rotulado en los 5 idiomas.

## v3.7 (3-9-2026, 01:05): modo CUIDAR, vida práctica Montessori en las 18 aventuras

- **🪴 Cuidar**, 12º modo de cada aventura, nacido de la pregunta de Daniel
  sobre qué cambiaría Montessori del juego: el área de VIDA PRÁCTICA que
  faltaba. Cada tema tiene una rutina de cuidado de 4 pasos EN ORDEN con la
  mecánica del método: solo responde el paso que toca (control del error, sin
  sonido de fallo: el robot recuerda suavemente "Primero toca..."), la
  recompensa es ver la escena transformarse (🥀→🌻, 🥚→🐣), el último paso
  siempre es recoger o guardar, tono calmado sin triunfalismo y repetición
  libre. Da estrellas care (1/2/3 por rutinas completadas) y un reto nuevo de
  misión ("Cuida algo en una aventura").
- Las 18 rutinas (motor genérico + datos en 39-care-0..6.js, conceptos fijados
  a mano y validados, textos por 6 subagentes en 5 idiomas): el invernadero
  espacial, el huevo de dinosaurio, cuidarte a ti (manos, dientes, agua,
  descanso), el jardín de la Comarca, la playa limpia de plásticos, el
  perrito, el violín que se guarda en su funda, plantar un árbol como Wangari
  Maathai, el droide lleno de arena, el barco y su loro, el gato del templo
  egipcio, el arbolito de la selva sin dejar rastro, el trencadís de Gaudí,
  el taller de Miró, el estudio de Dalí con su reloj blando, las palomas de
  Picasso, la semilla abrigada con hojas y el huerto (con los caracoles
  llevados fuera con cuidado, sin hacerles daño).
- Verificado: 18/18 rutinas cargadas con 4 pasos, control del error probado
  (tocar fuera de orden no avanza), rutina completa 🥀→🌻 con estrellas
  progresivas (1 y 2 al repetir), los 18 temas renderizan el modo, 0 errores
  de consola. Auditoría de estilo en los 7 ficheros care: 0 rayas, 0 "Nina",
  5 idiomas completos. Bundle: 4,66 MB.

## v3.8 (3-9-2026, 09:30): el robot se disfraza en cada aventura

- **🎭 Disfraces temáticos** (32-disfraces.js): sea cual sea el Ninobot
  elegido, en cada aventura va vestido para la ocasión con gorro + objeto
  superpuestos a su SVG: astronauta con casco de burbuja y cohete (espacio),
  paleontólogo con gorra y pico (dinos), doctor con casco sanitario y
  estetoscopio (cuerpo), mago con chistera y anillo (Tierra Media), buzo con
  escafandra y máscara (océano), safari fotográfico (animales), director de
  orquesta (música), científica con birrete y microscopio (increíbles),
  piloto estelar con auriculares y mando (Star Wars), pirata con el loro en
  el hombro y mapa (piratas), arqueólogo con salacot y pergamino (Egipto),
  explorador con hoja y brújula (Amazonas), arquitecto con la salamandra del
  Park Güell y escuadra (Gaudí), pintor con su estrella y pincel (Miró), el
  bigote de las once y diez dibujado en SVG y el reloj blando (Dalí), pintor
  con su paloma y paleta (Picasso), guardabosques con pajarito y plantón
  (árboles) y hortelano con fresa y cesta (frutas). El casco de burbuja y el
  bigote son SVG dibujados; el resto, emojis honestos posicionados.
- En la portada y la llamada el robot va sin disfraz (no hay tema activo).
- Verificado: los 18 temas muestran gorro e item correctos en el avatar, hub
  limpio, 0 errores de consola. Bundle: 4,64 MB.
- (09:35) La barra de modos de la aventura deja de ser carrusel con scroll:
  ahora es una rejilla que envuelve y muestra los 11 modos a la vez.
- (09:35) Cuidar: la escena cambia con CADA paso, no solo al final: el
  protagonista se endereza y gana color progresivamente (grayscale/rotate
  interpolados) y cada cuidado aplicado queda visible en la escena con su
  animación de entrada. El astronauta lleva ahora telescopio 🔭 (el cohete
  duplicaba el emoji del título del tema).
- (09:45) Anatomía recolocada en el cuerpo de órganos (aviso de Daniel: "los
  riñones parecen estar los dos a la derecha"): 9 posiciones corregidas sobre
  la geometría real de la silueta (torso x200-460, centro 330): riñones
  centrados flanqueando la columna (antes x423, fuera del costado), corazón
  entre los pulmones y con el ápex a la izquierda del cuerpo (antes bajo y muy
  desplazado), estómago pegado al centro en su lado, hígado algo más alto con
  la vesícula debajo, páncreas retrogástrico, intestinos a la pelvis. Barrido
  programático de los 18 mapas: 0 POIs fuera de lienzo y 0 solapes (el único
  es el intestino delgado dentro del marco del grueso, intencional).
- (09:55) Esqueleto completado a petición de Daniel: húmero (con el nervio del
  "hueso de la risa"), cúbito y radio (que se cruzan al girar la muñeca),
  pelvis, fémur (más fuerte que el hormigón) y tibia y peroné, cada uno con su
  SVG de lámina y su dato real en 5 idiomas; el POI genérico "Los huesos" pasa
  a la mano. 26 POIs en el cuerpo.
- (09:55) La voz dice los ordinales de reyes bien: "Ramsés II" se LEE "Ramsés
  segundo" (ca: segon, en: the Second, cs: druhý, fr: deux, que es lo correcto
  en francés), manteniendo la grafía "II" en pantalla. Normalizador en
  Speech.say, verificado en los 5 idiomas espiando la cola de voz.

## v3.9 (3-9-2026, 10:15): familia más grande, nombres bien dichos y gran auditoría

- **🤖 Dos robots nuevos**: Nenibot (la hermana pequeña que todo lo pregunta:
  rosa, coletas con lazos, pestañas, faldita, voz aguda, fav quiz) y Ninubot
  (el primo travieso de los inventos: verde azulado, gorra, pecas, estrella en
  la antena, destornillador en el bolsillo, fav taller). 11 robots.
- **🗣️ Nombres propios extranjeros bien pronunciados** (22-tts-names.js): la
  voz dice Chubaca, Obi-Guan, Tatuín, Jedy Lamar, Amelia Érjart, Marí Curí...
  con 32 nombres transcritos a la fonética de es/ca/cs (y fr donde hace falta),
  sin tocar la grafía en pantalla.
- **Auditoría integral (idioma + conceptos + UX)** con subagente auditor y
  barridos programáticos; 20 hallazgos, subsanados los 16 reales: la elisión
  catalana en la escuela de lectura ("A d'abella", no "A de abella": helper
  leerDeUnion), tres calcos de género en el checo de las rutinas de cuidar
  (la gata "jí", la semilla "ho", "Omeť"), "gent gran"→"per a adults" en la
  puerta de padres, frases con género fijo neutralizadas (cs/fr/ca), emojis
  honestos (paño 🧻→🧤/🧽, velas ⛵ y cabo 🪢, reciclar ♻️), el violín acaba
  guardado en su funda 🎻→🧳, el cangrejo con nombre, "soc" según la norma IEC
  vigente, vocales en/fr con sonido corto de verdad (insect, escargot),
  "Trazar letras" alineado en 5 idiomas y textos de estado con elipsis real.
  UX: avatar de la llamada fluido en pantallas estrechas. Regresión final:
  198 tema×modo + 6 lecciones + llamadas con los robots nuevos: 0 fallos.
- Documentación de usuario nueva: COMO-JUGAR.md (PC, Mac, iPad, iPhone,
  Android) y carpeta agentes/ con las plantillas de encargo para ampliar el
  juego con IA. Proyecto subido a GitHub.
- (12:20) Tres avisos de Daniel en caliente: (1) el checo sonaba con fonética
  española: causa raíz encontrada y arreglada: voiceKind no estaba en DEFAULTS
  y las partidas creadas antes de la v2.7 migraban SIN voz robótica, caían a
  voz humana y en Chrome de macOS el checo local sufre el bug del puente de
  voces (lee con la default española); ahora DEFAULTS trae voiceKind:"robot"
  y la migración repara cualquier partida vieja al recargar. (2) El micro que
  el Mac coge del iPhone (Continuity) y deja muerta la entrada: detectado el
  error audio-capture con mensaje propio micNoDevice en 5 idiomas ("a veces
  el ordenador usa el micrófono del teléfono..."). (3) Tono positivo: los
  robots ya no dicen que bailan "fatal" sino que bailan bailes robóticos
  divertidos a su manera, y el T-Rex bebé no se esconde "fatal": es su cola
  larguísima la que asoma.

## v4.0 (3-9-2026, 12:55): Policía, Bomberos y Cocina: 21 aventuras

- **Tres aventuras nuevas de oficios**, encargo de Daniel, escritas por 3
  subagentes en paralelo (~13-32 min cada una) con la plantilla completa y
  auditadas una a una:
  - **🚓 Policía** (78-a/b + 98a-extra): la policía que AYUDA (perdidos,
    tráfico, K9, detectives), sin armas ni malos. Mapa de la ciudad amable
    con 16 POIs, historias del peluche perdido / el patito que corta el
    tráfico / el misterio de las galletas (eran palomas y una fiesta),
    famosos reales con cara: Vidocq, Kate Warne, Marie Owens, Vollmer y
    Alice Stebbins Wells. Cuidar: el perro policía 🐕→🐕‍🦺. Disfraz: luz de
    sirena y chaleco.
  - **🚒 Bomberos** (79-a/b + 98b-extra): prevención y rescate sin miedo
    (112, salir agachado, dálmata Chispa, forestales, helicóptero de agua).
    16 POIs, historias del gatito / el globo del tejado / el simulacro,
    famosos: Molly Williams, Braidwood, Manby, Red Adair y Sabrina
    Cohen-Hatton. Cuidar: el camión y las botas listas. Disfraz: casco ⛑️
    y extintor.
  - **🍳 Cocina** (56-a/b + 98c-extra): el mercado, la levadura, el umami,
    la abuela. 16 POIs (horno con ventanita, libro de recetas, huerto de la
    ventana), historias de la sopa de la abuela / el pastel sorpresa / el
    mercado, famosos: Escoffier, Eugénie Brazier, Julia Child, Simone Ortega
    y Ferran Adrià. Cuidar: hoy cocinas tú (y se friega al final). Disfraz:
    gorro de chef DIBUJADO en SVG y sartén.
- Verificación integral: 21 temas × 11 modos + 21 POIs + 21 partidas de quiz
  enteras + rutina K9 + final de bomberos al libro de cuentos + 15 caras
  nuevas: 0 fallos, 0 errores de consola. Bundle: 5,2 MB.

## v4.1 (3-9-2026, 13:50): los nombres suenan a su idioma y tres mapas de verdad

- **🗣️ Pronunciación real de los nombres propios** (22-tts-names.js reescrito):
  el enfoque anterior (transcribir "Chewbacca" como "Chubaca") sonaba forzado.
  Ahora la frase se PARTE y cada nombre se dice con la VOZ DE SU IDIOMA,
  aprovechando que el motor lleva es/ca/en/cs/fr embebidos: "Hoy vamos con
  [inglés] Luke Skywalker, [francés] Marie Curie y [catalán] Joan Miró".
  133 nombres cubiertos: 90 ingleses (Star Wars, Tolkien, anglosajones), 15
  catalanes (Gaudí, Miró, Güell, Sagrada Família), 13 españoles (para cuando
  se juega en otro idioma), 12 franceses (Vidocq, Escoffier, Braque) y los
  rusos con la voz checa, la más cercana (Tereshkova, Gagarin, Vavílov).
  Las frases sin nombres extranjeros no se parten: coste cero en el 95% del
  juego. Funciona igual con voz robótica y con voz humana (hay voz de sistema
  en los cinco idiomas).
- **🎨 Mapas nuevos redibujados** (3 subagentes, ~20-25 min cada uno, con las
  coordenadas de los POIs fijadas y los mapas veteranos como referencia):
  - Policía: NO tenía decorado (fondo liso con iconos flotando). Ahora es una
    ciudad: comisaría con letrero, bandera y fuente, acera con bordillo,
    calzada de asfalto con línea discontinua (el paso de cebra cae sobre el
    asfalto), edificios, tiendas con toldo, helipuerto con su H parpadeante y
    parque con césped, estanque con ondas, patitos y pista K9.
  - Bomberos: parque con puertas de garaje (el camión dentro), la barra que
    baja desde el dormitorio por su hueco, trajes colgados, torre de prácticas
    que continúa el icono, ciudad con árbol frondoso cuya rama sostiene al
    gatito, y bosque con montañas, catorce pinos y lago con ondas.
  - Cocina: pared alicatada, encimera corrida, campana con luz cálida, ventana
    con jardín, armarios y tarros; rincón de la abuela con papel de flores,
    alacena, mecedora y lámpara; mercado con toldos de rayas, banderines,
    cajas de fruta y adoquines.
  Los tres con ids de gradiente prefijados (pol/bmb/coc), sin colisiones,
  ~40 KB de SVG cada uno y animaciones suaves. Verificados con capturas.
- Regresión: 231 tema×modo + 21 POIs + 6 lecciones: 0 fallos, consola limpia.
