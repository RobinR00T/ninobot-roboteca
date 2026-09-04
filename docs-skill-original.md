# NINOBOT SKILL — Guía completa para crear apps educativas infantiles temáticas

---

## 1. Qué es Ninobot

Ninobot es una app educativa interactiva para niños de 3-8 años. Un robot simpático con personalidad cálida y divertida acompaña al niño a través de 10 modos de juego: chat, historias interactivas, quiz, traductor de idiomas ficticios, exploración con mapa canvas, karaoke, alfabeto temático, matemáticas, constructor de objetos y galería de personajes famosos.

Cada variante tiene una temática diferente pero comparte la misma arquitectura monolítica (un único archivo .tsx de ~5000-5500 líneas que se compila a un HTML autocontenido).

### Variantes existentes

| Variante | Archivo | Tema | Idiomas | Constructor | Personajes famosos |
|----------|---------|------|---------|-------------|-------------------|
| Espacio | `App.tsx` | Planetas, galaxias, astronautas | es/ca/en/cs/fr | Cohete | Astronautas reales (Gagarin, Jemison...) |
| Dinosaurios | `AppDino.tsx` | Prehistoria, fósiles, eras | es/ca/en/cs/fr | Máquina del tiempo | Paleontólogos reales (Mary Anning...) |
| LOTR | `AppLOTR.tsx` | Tierra Media, elfos, héroes | es/ca/en/cs/fr/**ev** | Espada (forja) | Héroes ficticios (Gandalf, Aragorn...) |

---

## 2. Preguntas OBLIGATORIAS antes de crear un nuevo Ninobot

Antes de escribir una sola línea de código, pregunta SIEMPRE al usuario lo siguiente:

### Identidad y temática
1. **¿Cuál es la temática exacta?** (ej: piratas, superhéroes, animales marinos, Harry Potter, mitología griega...)
2. **¿Qué personaje es Ninobot en esta temática?** Define su rol: un robot pirata, un robot superhéroe, un elfo robot... Esto afecta a TODOS los textos del chat, greetings, y personalidad.
3. **¿Nombre del niño/a protagonista por defecto?** (las 3 apps actuales usan un nombre de ejemplo, pero se personaliza en setup)

### Las 8 localizaciones (CRÍTICO)
4. **¿Cuáles son las 8 localizaciones del mapa de exploración?** Necesitamos exactamente 8. Ejemplos:
   - Espacio: Mercurio, Venus, Tierra, Marte, Júpiter, Saturno, Urano, Neptuno
   - Dinosaurios: T-Rex, Triceratops, Brachiosaurus, Stegosaurus, Pteranodon, Velociraptor, Ankylosaurus, Spinosaurus
   - LOTR: La Comarca, Rivendel, Moria, Rohan, Gondor, Mordor, Lothlórien, Isengard
   - Para cada una necesitaremos: nombre en 5 idiomas, SVG ilustración, datos curiosos, greeting temático

### Contenido educativo
5. **¿5 idiomas ficticios para el Traductor?** Con ~40 palabras de vocabulario cada uno. Ej: Klingon/Vulcano/Wookiee/Ewokese/Huttese (Espacio), Sindarin/Khuzdul/Hobbit/Éntico/Orco (LOTR)
6. **¿Personajes famosos?** 5-6 personajes reales o ficticios del tema + el niño protagonista al final. Necesitamos: nombre, año, logro, cita célebre, emoji, color de tarjeta.
7. **¿Qué construye el niño en el Constructor?** Un objeto temático con 4-5 partes configurables (colores, formas, materiales) y un SVG de preview.

### Personalización
8. **¿Qué quiere ser el niño protagonista de mayor?** (astronauta → policía astronauta, paleontóloga, exploradora de la Tierra Media...). Esto se muestra en la sección de Famosos.
9. **¿Idioma temático extra?** Base siempre es es/ca/en/cs/fr. ¿Añadir uno? (como `ev` Sindarin en LOTR). Si sí, necesita: flag emoji, label, speech code fallback, y traducciones para TODOS los textos UI.
10. **¿Actividades del cole específicas?** (natación, artes marciales, ballet, fútbol...) Se usan en las preguntas del chat sobre el colegio.
11. **¿3-4 canciones para Karaoke?** Con 8+ líneas cada una, temáticas, en los 5 idiomas.

---

## 3. Arquitectura técnica

### Stack
- **React 18 + TypeScript + Vite** — monolito de un solo archivo .tsx
- **CSS**: Tailwind (clases inline en JSX) + `<style>` tags para keyframes CSS
- **Three.js**: Importado pero usado mínimamente (background particles)
- **SpeechSynthesis API**: Text-to-speech nativo del navegador
- **SpeechRecognition API**: Reconocimiento de voz (webkit)
- **Canvas API**: Mapa interactivo del modo exploración

### Pipeline de build
```bash
# 1. Cambiar import en main.tsx al archivo deseado
sed -i "s|import App from './App.*\.tsx'|import App from './AppNuevo.tsx'|" src/main.tsx

# 2. Compilar TypeScript + Vite
npm run build    # ejecuta: tsc -b && vite build

# 3. Inlinar todo en un solo HTML autocontenido
npx html-inline -i dist/index.html -o ninobot-nuevo.html -b dist/

# 4. Restaurar import original
sed -i "s|import App from './AppNuevo.tsx'|import App from './App.tsx'|" src/main.tsx
```

### Estructura del proyecto
```
ninobot-app/
├── src/
│   ├── main.tsx          ← Entry point (cambiar import para cada build)
│   ├── App.tsx           ← Espacio (~5000 líneas)
│   ├── AppDino.tsx       ← Dinosaurios (~5000 líneas)
│   ├── AppLOTR.tsx       ← LOTR (~5500 líneas)
│   └── index.css         ← Tailwind base + animaciones CSS personalizadas
├── dist/                 ← Output de build (no commitear)
├── package.json          ← ⚠️ "type": "module" — scripts auxiliares deben ser .cjs
├── vite.config.ts
└── NINOBOT-SKILL.md      ← Este archivo
```

**IMPORTANTE**: `package.json` tiene `"type": "module"`. Los scripts Node auxiliares que usen `require()` deben tener extensión `.cjs`, no `.js`.

---

## 4. Anatomía del archivo .tsx (~5000-5500 líneas)

El archivo sigue esta estructura exacta. Cada sección va en este orden:

```
┌─────────────────────────────────────────────────┐
│ LÍNEAS 1-15: Imports + SpeechRecognition types  │
├─────────────────────────────────────────────────┤
│ LÍNEAS 16-19: Type declarations                 │
│   type Mode = 'chat' | 'story' | ... | 'famous' │
│   type Emotion = 'happy' | 'thinking' | ...      │
│   type Lang = 'es' | 'ca' | 'en' | 'cs' | 'fr'  │
│   interface Message { from, text, emoji, ...Idx } │
├─────────────────────────────────────────────────┤
│ LÍNEAS 22-28: LANGS config                      │
│   Record<Lang, { flag, code, label }>           │
├─────────────────────────────────────────────────┤
│ LÍNEAS 30-150: T — Traducciones UI              │
│   Record<string, Record<Lang, string>>          │
│   ~40 claves: greeting, chat, stories, quiz...  │
├─────────────────────────────────────────────────┤
│ LÍNEAS ~150-175: LOCATION_NAMES                 │
│   8 localizaciones con nombre por idioma        │
├─────────────────────────────────────────────────┤
│ LÍNEAS ~178-340: LocationSVG component          │
│   switch(index) { case 0..7: return <svg>... }  │
├─────────────────────────────────────────────────┤
│ LÍNEAS ~340-430: CONSTELLATIONS + GALAXIES data │
├─────────────────────────────────────────────────┤
│ LÍNEAS ~430+: function App() {                  │
│   ├── ~50 useState declarations                 │
│   ├── SpeechSynthesis (speak, cancelSpeech)     │
│   ├── SpeechRecognition setup                   │
│   ├── Timer/session logic                       │
│   ├── STORIES array                             │
│   ├── FAMOUS_CHARACTERS array                   │
│   ├── ChildPortrait component                   │
│   ├── QUIZ_QUESTIONS array                      │
│   ├── GALACTIC_LANGUAGES vocabulary             │
│   ├── KARAOKE_SONGS array                       │
│   ├── ALPHABET data (26 entries)                │
│   ├── Chat keyword engine                       │
│   │   ├── NINOBOT_LOCATIONS                     │
│   │   ├── VALUES_MESSAGES                       │
│   │   ├── SCHOOL_QUESTIONS                      │
│   │   ├── FUN_FACTS                             │
│   │   └── Keyword matching (planetKeywords...)  │
│   ├── changeMode function                       │
│   ├── Canvas travel map (useEffect + ctx)       │
│   └── JSX return:                               │
│       ├── Setup screen (name, gender, age, lang)│
│       ├── Header (Ninobot avatar + status)      │
│       ├── Mode buttons (10 botones)             │
│       └── Content areas (10 modos renderizados) │
└─────────────────────────────────────────────────┘
```

---

## 5. Templates de código — Estructuras de datos

### 5.1 Type Lang (con idioma extra opcional)
```typescript
// Sin idioma extra (Espacio, Dino):
type Lang = 'es' | 'ca' | 'en' | 'cs' | 'fr'

// Con idioma extra (LOTR tiene Élfico):
type Lang = 'es' | 'ca' | 'en' | 'cs' | 'fr' | 'ev'
```

### 5.2 LANGS config
```typescript
const LANGS: Record<Lang, { flag: string; code: string; label: string }> = {
  es: { flag: '🇪🇸', code: 'es-ES', label: 'Español' },
  ca: { flag: 'CA', code: 'ca-ES', label: 'Català' },
  en: { flag: '🇬🇧', code: 'en-GB', label: 'English' },
  cs: { flag: '🇨🇿', code: 'cs-CZ', label: 'Čeština' },
  fr: { flag: '🇫🇷', code: 'fr-FR', label: 'Français' },
  // Idioma extra (si aplica):
  ev: { flag: '🧝', code: 'en-GB', label: 'Sindarin' },  // ← fallback a en-GB para speech
}
```

### 5.3 LOCATION_NAMES (8 localizaciones)
```typescript
const LOCATION_NAMES: Record<Lang, string>[] = [
  { es: 'La Comarca', ca: 'La Comarca', en: 'The Shire', cs: 'Kraj', fr: 'La Comté', ev: 'I Drann' },
  { es: 'Rivendel', ca: 'Rivendel', en: 'Rivendell', cs: 'Roklinka', fr: 'Fondcombe', ev: 'Imladris' },
  // ... hasta 8 total
]
```

### 5.4 LocationSVG component (switch-case con 8 ilustraciones)
```typescript
function PlanetSVG({ index, size = 140, interactive = false, onClick, lang = 'es' as Lang }:
  { index: number; size?: number; interactive?: boolean; onClick?: () => void; lang?: Lang }) {
  const [hovered, setHovered] = useState(false)
  const scale = hovered && interactive ? 1.12 : 1
  const glow = hovered && interactive ? 15 : 0

  const common = {
    width: size, height: size,
    viewBox: '0 0 100 100',
    className: `transition-transform duration-300 ${interactive ? 'cursor-pointer' : ''}`,
    style: { transform: `scale(${scale})`, filter: glow ? `drop-shadow(0 0 ${glow}px rgba(100,200,255,0.6))` : undefined },
    onMouseEnter: interactive ? () => setHovered(true) : undefined,
    onMouseLeave: interactive ? () => setHovered(false) : undefined,
    onClick: interactive ? onClick : undefined,
  }

  switch (index) {
    case 0: // Localización 1
      return (
        <svg {...common}>
          <defs>
            <radialGradient id="loc0" cx="40%" cy="35%">
              <stop offset="0%" stopColor="#aaa" />
              <stop offset="100%" stopColor="#555" />
            </radialGradient>
          </defs>
          {/* SVG paths temáticos aquí */}
        </svg>
      )
    case 1: // Localización 2
      // ...
    // case 2..7
    default: return <svg {...common}><circle cx="50" cy="50" r="30" fill="#666" /></svg>
  }
}
```

**⚠️ CRÍTICO: Los SVGs DEBEN ser temáticos, NO genéricos.** Cada temática necesita ilustraciones propias:
- Espacio: Planetas con cráteres, anillos, atmósferas (gradients radiales)
- Dinosaurios: Dinosaurios con escamas, texturas, ojos con brillo, garras
- LOTR: Paisajes (colinas verdes, cascadas, montañas, lava, torres)
- Usar `<defs>` con `<radialGradient>`, `<linearGradient>` para profundidad
- Sombras con `opacity`, reflejos con `stopColor` blanco parcial
- Detalles: ojos con brillo (`circle` blanco pequeño), texturas con patrones

### 5.5 CONSTELLATIONS (equivalente temático)
```typescript
const CONSTELLATIONS = [
  {
    name: { es: 'Osa Mayor', ca: 'Ossa Major', en: 'Big Dipper', cs: 'Velký vůz', fr: 'Grande Ourse' },
    stars: [[30,40],[50,35],[75,38],[92,48],[86,65],[100,74],[114,80]],  // coordenadas x,y en canvas
    color: '#60a5fa',
    emoji: '🐻',
    desc: { es: 'Parece un cazo gigante en el cielo!', /* 5 idiomas */ },
    extra: { es: 'Se puede ver desde casi cualquier lugar del mundo.', /* 5 idiomas */ }
  },
  // ... 5-8 constelaciones/equivalentes
]
```

### 5.6 STORIES (historias interactivas con choices)
```typescript
const STORIES: {
  title: Record<Lang, string>;
  emoji: string;
  parts: { text: Record<Lang, string>; choices?: [Record<Lang, string>, Record<Lang, string>] }[]
}[] = [
  {
    title: { es: 'El cristal de las estrellas', ca: '...', en: 'The Star Crystal', cs: '...', fr: '...' },
    emoji: '💎',
    parts: [
      {
        text: { es: '{name}! He recibido un mensaje...', /* 5 idiomas, usar {name} para nombre */ },
        choices: [
          { es: 'Sí, vamos!', ca: 'Sí, anem!', en: 'Yes, let\'s go!', cs: 'Ano, pojďme!', fr: 'Oui, allons-y !' },
          { es: 'Dónde está?', ca: 'On és?', en: 'Where is it?', cs: 'Kde je?', fr: 'Où est-il ?' }
        ]
      },
      // 4-6 partes con choices ramificantes
      { text: { es: 'Fin! El cristal brilla de nuevo!', /* último part sin choices */ } }
    ]
  },
  // 3 historias total
]
```

### 5.7 QUIZ_QUESTIONS
```typescript
const QUIZ_QUESTIONS: {
  q: Record<Lang, string>;
  options: Record<Lang, string>[];      // EXACTAMENTE 4 opciones
  answer: number;                        // índice 0-3 de la opción correcta
  emoji: string;
  explanation: Record<Lang, string>;     // explicación educativa de la respuesta
  planetIdx: number;                     // índice 0-7 del SVG de localización a mostrar
}[] = [
  {
    q: { es: 'Cuál es el planeta más grande?', /* 5 idiomas */ },
    options: [
      { es: 'Marte', ca: 'Mart', en: 'Mars', cs: 'Mars', fr: 'Mars' },
      { es: 'Júpiter', ca: 'Júpiter', en: 'Jupiter', cs: 'Jupiter', fr: 'Jupiter' },  // ← answer: 1
      { es: 'Saturno', ca: 'Saturn', en: 'Saturn', cs: 'Saturn', fr: 'Saturne' },
      { es: 'Venus', ca: 'Venus', en: 'Venus', cs: 'Venuše', fr: 'Vénus' },
    ],
    answer: 1,
    emoji: '🪐',
    explanation: { es: 'Júpiter es enorme! Caben más de 1000 Tierras dentro.', /* 5 idiomas */ },
    planetIdx: 3
  },
  // 10 preguntas total
]
```

**⚠️ VERIFICAR**: Que `answer` apunte a la opción correcta en TODOS los idiomas. Las opciones no cambian de orden entre idiomas, pero al traducir se puede romper la correspondencia.

### 5.8 GALACTIC_LANGUAGES (Traductor)
```typescript
const GALACTIC_LANGUAGES: Record<string, {
  name: string;
  emoji: string;
  greeting: Record<Lang, string>;
  words: Record<string, string>;    // español → idioma ficticio (~40 palabras)
}> = {
  klingon: {
    name: 'Klingon', emoji: '⚔️',
    greeting: { es: 'nuqneH! (Hola en Klingon!)', /* 5 idiomas */ },
    words: {
      hola: 'nuqneH', amigo: 'jup', estrella: 'Hov', planeta: 'yuQ',
      espacio: 'logh', robot: 'qogh', luna: 'maS', sol: 'jul',
      nave: 'Duj', guerra: 'noH', paz: 'roj', agua: 'bIQ',
      fuego: 'qul', bonito: "'IH", grande: 'tIn', amor: 'bang',
      niña: "be'Hom", niño: 'loDHom', mamá: 'SoS', papá: 'vav',
      casa: 'juH', comida: 'Soj', perro: 'Ha\'DIbaH', gato: 'vIghro\'',
      // ~40 palabras total, sin duplicados
    }
  },
  // 5 idiomas ficticios total
}
```

**⚠️ VERIFICAR**: No puede haber claves duplicadas en `words` (TypeScript error TS1117). Si dos idiomas ficticios usan la misma palabra base española, uno de ellos la perderá silenciosamente.

### 5.9 KARAOKE_SONGS
```typescript
const KARAOKE_SONGS: {
  title: Record<Lang, string>;
  emoji: string;
  lines: Record<Lang, string>[];    // 8+ líneas por canción
}[] = [
  {
    title: { es: 'Brilla estrellita', ca: 'Brilla estrelleta', en: 'Twinkle Star', cs: 'Hvězdičko malá', fr: 'Brille petite étoile' },
    emoji: '⭐',
    lines: [
      { es: 'Brilla, brilla, estrellita,', ca: 'Brilla, brilla, estrelleta,', en: 'Twinkle, twinkle, little star,', cs: 'Hvězdičko malá, jak jsi krásná,', fr: 'Brille, brille, petite étoile,' },
      // 8+ líneas
    ]
  },
  // 3-4 canciones total
]
```

### 5.10 ALPHABET (26 entradas A-Z)
```typescript
const SPACE_ALPHABET: {
  letter: string;
  item: Record<Lang, string>;
  emoji: string;
  fact: Record<Lang, string>;
}[] = [
  { letter: 'A', item: { es: 'Asteroide', ca: 'Asteroide', en: 'Asteroid', cs: 'Asteroid', fr: 'Astéroïde' }, emoji: '☄️',
    fact: { es: 'Los asteroides son rocas del espacio.', ca: 'Els asteroides són roques de l\'espai.', en: 'Asteroids are space rocks.', cs: 'Asteroidy jsou vesmírné kameny.', fr: 'Les astéroïdes sont des roches de l\'espace.' } },
  // A-Z, 26 entradas con item+emoji+fact temáticos
]
```

### 5.11 FAMOUS_CHARACTERS + ChildPortrait
```typescript
const FAMOUS_ASTRONAUTS: {
  name: Record<Lang, string>;
  emoji: string;
  year: string;
  achievement: Record<Lang, string>;
  quote: Record<Lang, string>;
  color: string;    // color CSS de la tarjeta (ej: '#4169E1')
}[] = [
  {
    name: { es: 'Yuri Gagarin', ca: 'Yuri Gagarin', en: 'Yuri Gagarin', cs: 'Jurij Gagarin', fr: 'Youri Gagarine' },
    emoji: '🚀', year: '1961', color: '#4169E1',
    achievement: { es: 'El primer humano en viajar al espacio!', /* 5 idiomas */ },
    quote: { es: 'La Tierra es azul!', /* 5 idiomas */ },
  },
  // 5-6 personajes + el niño protagonista al final
]
```

**Niño protagonista en Famosos — Reglas:**
- **Sin año (2026)** ni en la tarjeta ni en el chat message
- El botón muestra `nombre + ⭐` (NO el año)
- `childAchievement`: texto en 5 idiomas, variante niño/niña (ej: "policía astronauta" / "police astronaut")
- `childQuote`: cita motivacional en 5 idiomas
- Tarjeta con borde dorado y fondo gradient especial
- ChildPortrait SVG adaptivo al género con decoraciones temáticas

### 5.12 ChildPortrait component
```typescript
function ChildPortrait({ gender, emoji, size = 80 }: { gender: 'boy' | 'girl'; emoji: string; size?: number }) {
  const skinMap: Record<string, string> = {
    '👧🏻': '#FFE0BD', '👧🏼': '#F1C27D', '👧🏽': '#C68642', '👧🏾': '#8D5524', '👧🏿': '#5C3310',
    '👦🏻': '#FFE0BD', '👦🏼': '#F1C27D', '👦🏽': '#C68642', '👦🏾': '#8D5524', '👦🏿': '#5C3310',
  }
  const skin = skinMap[emoji] || '#FFE0BD'
  const isLight = ['👧🏻','👧🏼','👦🏻','👦🏼'].includes(emoji)
  const hairColor = gender === 'girl' ? '#4A2800' : '#3B2300'
  const cheekColor = isLight ? '#FFB6C1' : '#FF8888'

  return (
    <svg viewBox="0 0 100 100" width={size} height={size} style={{ display: 'block' }}>
      {/* Borde animado giratorio */}
      <circle cx="50" cy="50" r="48" fill="none" stroke="#FFD700" strokeWidth="2" strokeDasharray="6 4" opacity="0.5">
        <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="20s" repeatCount="indefinite"/>
      </circle>
      {/* Cara */}
      <circle cx="50" cy="52" r="28" fill={skin}/>
      {/* Pelo según gender */}
      {gender === 'girl' ? (
        <path d="M 22 42 Q 20 25 30 18 Q 40 12 50 12 Q 60 12 70 18 Q 80 25 78 42 L 80 70..." fill={hairColor}/>
      ) : (
        <path d="M 25 42 Q 23 28 32 20 Q 42 14 50 14 Q 58 14 68 20 Q 77 28 75 42 Z" fill={hairColor}/>
      )}
      {/* Decoración temática */}
      {/* Espacio: casco astronauta, estrellas */}
      {/* Dino: sombrero explorador, emojis dinosaurio */}
      {/* LOTR: orejas de elfo, diadema con gema, flores (niña) */}
    </svg>
  )
}
```

### 5.13 Chat keyword engine (estructura)
```typescript
// El chat procesa mensajes del usuario con keyword matching:

// 1. planetKeywords — detecta nombres de localizaciones
const planetKeywords = [
  [['mercurio', 'mercury', 'merkur'], 0],
  [['venus', 'venuše'], 1],
  // ... 8 localizaciones con sinónimos multilingües
]

// 2. NINOBOT_LOCATIONS — dónde dice estar Ninobot
const NINOBOT_LOCATIONS: Record<Lang, { place: string; doing: string; emoji: string }[]> = {
  es: [
    { place: 'los anillos de Saturno', doing: 'patinando sobre el hielo cósmico', emoji: '🪐' },
    // 8-10 ubicaciones divertidas por idioma
  ],
  // ca, en, cs, fr...
}

// 3. VALUES_MESSAGES — mensajes educativos sobre valores (compartir, ordenar, ser amable...)
const VALUES_MESSAGES: Record<Lang, string[]> = {
  es: [
    '{name}, los robots más fuertes son los que son amables! La amabilidad es un superpoder.',
    // 10-15 mensajes por idioma, usar {name} como placeholder
  ],
  // ca, en, cs, fr...
}

// 4. SCHOOL_QUESTIONS — preguntas sobre el colegio
const SCHOOL_QUESTIONS: Record<Lang, string[]> = {
  es: [
    'Qué tal en el cole hoy? Has aprendido algo nuevo? Cuéntame!',
    'Has jugado con tus amigos en el cole? Tener amigos es lo mejor!',
    // 6-8 preguntas por idioma
  ],
  // ca, en, cs, fr...
}

// 5. FUN_FACTS — datos curiosos temáticos que Ninobot comparte
// 6. Weather/time-based responses
// 7. Emotion keywords (triste, contento, enfadado → respuestas empáticas)
```

### 5.14 SpeechSynthesis — Chunk-based queue
```typescript
// Divide textos largos en chunks de ~60 chars (50 para checo) en límites de frase
const maxChunk = lang.startsWith('cs') ? 50 : 60
const chunks = clean.match(new RegExp(`.{1,${maxChunk}}[.,!?;\\s]|.+$`, 'g')) || [clean]

// Per-language voice tuning:
// es/ca: rate 0.72, pitch 0.55 (pausado, cálido, bonachón)
// en:    rate 0.78, pitch 0.60 (slightly faster, clearer)
// fr:    rate 0.75, pitch 0.58
// cs:    rate 0.70, pitch 0.55 (más lento para pronunciación clara)
// ev:    fallback a en-GB voice
```

**Pre-procesamiento del texto antes de speech:**
- Convertir ALL-CAPS a Title Case (evita deletreo letra por letra)
- Colapsar caracteres repetidos: `jajajaja` → `jaja`
- Eliminar emojis que el speech engine intentaría "leer"

### 5.15 Canvas travel map
```typescript
// Dimensiones del canvas virtual (scrolleable):
const canvasW = 3400, canvasH = 1400

// El canvas se divide en 3 zonas con botones de navegación rápida:
// [Constelaciones] [Sistema Solar / Mapa central] [Galaxias / Zonas lejanas]

// Dibujar con ctx:
// - Usar gradients (createLinearGradient, createRadialGradient) NO colores planos
// - Terrenos con texturas: montañas, ríos, bosques, volcanes según tema
// - Marcadores de localización clickeables
// - Caminos/rutas entre localizaciones (ctx.setLineDash para caminos punteados)
// - Partículas de fondo (estrellas, hojas, burbujas según tema)
```

---

## 6. Los 10 modos — Comparativa

| # | Modo | Key | Espacio | Dinosaurios | LOTR | Qué hace |
|---|------|-----|---------|-------------|------|----------|
| 1 | Chat | `chat` | Chat espacial | Chat jurásico | Chat élfico | Conversación libre con keyword matching |
| 2 | Historias | `story` | Cuentos estelares | Cuentos prehistóricos | Cuentos de la Tierra Media | 3 historias interactivas con choices ramificantes |
| 3 | Quiz | `quiz` | Planetas/estrellas | Dinosaurios/fósiles | LOTR lore | 10 preguntas, 4 opciones, explicación educativa |
| 4 | Traductor | `translator` | 5 idiomas galácticos | 5 idiomas prehistóricos | 5 idiomas de la Tierra Media | Vocabulario de ~40 palabras por idioma ficticio |
| 5 | Explorar | `diary` | Mapa del universo | Mapa prehistórico | Mapa de la Tierra Media | Canvas scrolleable con localizaciones clickeables |
| 6 | Karaoke | `karaoke` | Canciones espaciales | Canciones jurásicas | Canciones élficas | 3-4 canciones con líneas sincronizadas + speech |
| 7 | Alfabeto | `alphabet` | A-Z espacial | A-Z dinosaurio | A-Z Tengwar | 26 letras con item, emoji y dato curioso |
| 8 | Mates | `math` | Cohetes y estrellas | Dinosaurios y fósiles | Espadas y anillos | Sumas/restas adaptadas por edad (3-8) |
| 9 | Constructor | `rocket`/`forge` | Construir cohete | Máquina del tiempo | Forjar espada | 4-5 piezas configurables + SVG preview |
| 10 | Famosos | `famous` | Astronautas reales | Paleontólogos reales | Héroes ficticios | 5-6 tarjetas + niño protagonista al final |

**Nota sobre el Mode type**: El nombre del modo en `type Mode` varía según la app:
- Espacio/Dino: `'rocket'` (cohete / máquina del tiempo)
- LOTR: `'forge'` (forja de espada)
- La interfaz Message también varía: `planetIdx` / `dinosaurIdx` / `locationIdx`

---

## 7. Errores frecuentes — Catálogo completo

### ERROR 1: Apostrofes en francés y catalán rompen strings TS
**Severidad**: 🔴 CRÍTICA (rompe compilación)
```typescript
// ❌ ROMPE — la apóstrofe cierra el string:
fr: 'L'espace est grand'
ca: 'L'espai és gran'

// ✅ CORRECTO — escapar con backslash:
fr: 'L\'espace est grand'
ca: 'L\'espai és gran'
```
**Afecta**: francés (`l'`, `d'`, `qu'`, `j'`, `n'`, `s'`, `c'`) y catalán (`l'`, `d'`, `n'`, `s'`)

### ERROR 2: Signos ¡ y ¿ en idiomas que NO los usan
**Severidad**: 🔴 CRÍTICA (error visible al usuario)
```typescript
// ❌ MAL — solo el español usa ¡¿:
ca: '¡Hola! ¿Com estàs?'
cs: '¡Ahoj! ¿Jak se máš?'
en: '¡Hello! ¿How are you?'
fr: '¡Salut! ¿Comment ça va?'

// ✅ CORRECTO:
ca: 'Hola! Com estàs?'
cs: 'Ahoj! Jak se máš?'
en: 'Hello! How are you?'
fr: 'Salut ! Comment ça va ?'    // ← nota: espacio antes de ! y ? en francés
```
**Solución automática**: Usar un script `.cjs` para limpiar ¡¿ de campos ca:/cs:/en:/fr: después de cada edición masiva:
```javascript
// clean-punctuation.cjs
const fs = require('fs');
let code = fs.readFileSync('src/AppNuevo.tsx', 'utf8');
// Eliminar ¡¿ de campos ca: y cs: (NO de es:)
code = code.replace(/(ca:\s*')[^']*'/g, (m) => m.replace(/[¡¿]/g, ''));
code = code.replace(/(cs:\s*')[^']*'/g, (m) => m.replace(/[¡¿]/g, ''));
fs.writeFileSync('src/AppNuevo.tsx', code);
```

### ERROR 3: Textos copiados sin traducir
**Severidad**: 🟡 ALTA (texto incorrecto visible)
Al copiar una app base o usar scripts de bulk-add:
- Campos `ev:` con texto en inglés plano en vez del idioma ficticio
- Campos `fr:` con texto en inglés (especialmente en quiz options y constellation names)
- Campos `ca:` con palabras en español: `algo` → `quelcom`, `los` → `els`, `familias` → `famílies`

**Verificación**: Buscar con regex patrones sospechosos:
```bash
grep -n "ev: '" src/AppNuevo.tsx | grep -i "the \|you \|can \|from \|one of"
grep -n "fr: '" src/AppNuevo.tsx | grep -i "the \|you \|can "
grep -n "ca: '" src/AppNuevo.tsx | grep -i " algo\| los \| las \| una \| tiene"
```

### ERROR 4: Referencias temáticas cruzadas (al copiar de otra variante)
**Severidad**: 🟡 ALTA (rompe inmersión temática)
Cuando se crea una nueva variante copiando otra, quedan decenas de referencias de la temática anterior. Buscar y reemplazar TODOS estos patrones:

| Qué buscar (Espacio) | Qué reemplazar (ejemplo LOTR) |
|----------------------|-------------------------------|
| nave, cohete, rocket | caballo, espada, montura |
| planeta, planet | reino, kingdom, land |
| galaxia, galaxy | Tierra Media, Middle-earth |
| astronauta, astronaut | explorador, explorer |
| estrellas, stars | estrellas (ok) o runas, runes |
| espacio, space | aventura, quest, journey |
| `transLang = 'klingon'` | `transLang = 'sindarin'` |
| `PlanetSVG` (contenido) | SVGs temáticos nuevos |
| `SPACE_ALPHABET` | Renombrar la constante |
| `planetIdx` en Message | `locationIdx` o `dinosaurIdx` |

**⚠️ TAMBIÉN**: Variables de estado, comentarios (`// Karaoke Espacial` → `// Karaoke Élfico`), fun facts, chat responses ("mi nave tiene aire acondicionado galáctico" → adaptar).

### ERROR 5: Quiz — opciones del idioma extra mal copiadas
**Severidad**: 🟡 ALTA
Al añadir un idioma extra (como `ev`) con scripts de bulk-add, las 4 opciones de quiz se copian del inglés. Verificar que:
- El texto `ev:` de cada opción sea correcto (nombre en el idioma ficticio, no en inglés)
- El índice `answer` siga apuntando a la respuesta correcta (las opciones no cambian de orden)
- La `explanation` en `ev:` sea coherente

### ERROR 6: Constellation/Galaxy `name.ev` contiene descripción en vez de nombre
**Severidad**: 🟡 ALTA
Los scripts de bulk-add copian a veces el texto de `extra` al campo `name.ev`, resultando en:
```typescript
// ❌ MAL:
name: { ..., ev: 'You can see it from almost anywhere in the world. Sailors used it...' }

// ✅ BIEN:
name: { ..., ev: 'Menelvagor' }
```
**Verificación**: Cualquier campo `name` con más de 3 palabras probablemente está mal.

### ERROR 7: Género gramatical en francés
**Severidad**: 🟠 MEDIA
```typescript
// ❌ MAL:
fr: 'une volcan'       // volcan es masculino → "un volcan"
fr: 'volcanique'       // si es plural → "volcaniques"
fr: 'ta propre fusée'  // ← correcto, fusée es femenino

// ✅ Verificar concordancia de género y número en TODOS los adjetivos franceses
```

### ERROR 8: Errores ortográficos recurrentes
**Severidad**: 🟠 MEDIA
Errores que se han encontrado y deben evitarse:
| Idioma | Error | Corrección |
|--------|-------|------------|
| Español | volcáns | volcanes |
| Español | tu propio máquina | tu propia máquina |
| Inglés | familys | families |
| Francés | mondex | mondes |
| Francés | explorere | explorateur |
| Francés | superpouvoi r | superpouvoir |
| Francés | volcanique (plural) | volcaniques |
| Checo | космосе (cirílico!) | vesmíru |
| Catalán | tolia | tocava |
| Catalán | los Penguins | als Penguins |

### ERROR 9: Duplicación de arrays
**Severidad**: 🟠 MEDIA (TS no da error, pero comportamiento incorrecto)
Al editar arrays grandes como `VALUES_MESSAGES`, comprobar que no se duplica el contenido:
```typescript
// ❌ MAL — 15 mensajes originales + 15 duplicados = 30:
es: ['msg1', 'msg2', ..., 'msg15', 'msg1', 'msg2', ..., 'msg15']
```
Verificar con: `grep -c "msg_pattern" src/AppNuevo.tsx`

### ERROR 10: `Record<Lang, string>` vs tipos complejos
**Severidad**: 🟠 MEDIA
Los scripts de bulk-add SOLO manejan `Record<Lang, string>` simples. Hay que añadir manualmente el nuevo idioma a:
- `Record<Lang, string[]>` (arrays de strings por idioma, como VALUES_MESSAGES)
- `Record<Lang, () => string>` (funciones por idioma)
- `Record<Lang, { ... }[]>` (arrays de objetos por idioma, como NINOBOT_LOCATIONS)
- Objetos anidados complejos (STORIES.parts[].choices)

### ERROR 11: package.json `"type": "module"` rompe scripts .js
**Severidad**: 🟠 MEDIA (rompe el script, no la app)
```bash
# ❌ Error: "require is not defined in ES module scope"
node fix-script.js

# ✅ Solución: usar extensión .cjs
node fix-script.cjs
```

### ERROR 12: SVGs genéricos en vez de temáticos
**Severidad**: 🟡 ALTA (visualmente obvio)
Al copiar de otra variante, los SVGs del componente PlanetSVG siguen mostrando planetas circulares genéricos en vez de ilustraciones temáticas. **Reemplazar los 8 cases completos** con SVGs nuevos.

### ERROR 13: Mapa canvas genérico
**Severidad**: 🟡 ALTA
El canvas del modo exploración debe tener:
- ✅ Gradients de terreno (NO colores planos como `ctx.fillStyle = '#333'`)
- ✅ Montañas, ríos, bosques dibujados con ctx paths
- ✅ Marcadores de localización clickeables y distintivos
- ✅ Caminos/rutas entre localizaciones
- ❌ NO reutilizar el canvas de otra temática

### ERROR 14: `transLang` default apunta a idioma de otra temática
**Severidad**: 🔴 CRASH
```typescript
// ❌ Causa crash si 'klingon' no existe en GALACTIC_LANGUAGES de LOTR:
const [transLang, setTransLang] = useState('klingon')

// ✅ Usar el primer idioma ficticio del tema actual:
const [transLang, setTransLang] = useState('sindarin')
```

### ERROR 15: Clave duplicada en objeto TypeScript
**Severidad**: 🔴 CRASH (TS1117)
```typescript
// ❌ Error TS1117: Duplicate property 'guerra':
words: {
  guerra: 'Grish-gap',
  // ... muchas líneas ...
  guerra: 'Bash-smash',   // ← TS error!
}
```
Ocurre al añadir vocabulario con scripts. Verificar con `tsc` antes de build.

---

## 8. Checklist completa para crear un nuevo Ninobot temático

### Fase 1: Preparación (antes de tocar código)
- [ ] Hacer TODAS las preguntas de la Sección 2 al usuario
- [ ] Documentar las 8 localizaciones con nombres en 5 idiomas
- [ ] Tener listos los 5-6 personajes famosos con datos completos
- [ ] Definir los 5 idiomas ficticios con ~40 palabras cada uno
- [ ] Diseñar el objeto del Constructor (4-5 piezas)
- [ ] Definir qué quiere ser el niño de mayor
- [ ] Decidir si hay idioma extra (si sí, preparar flag, label, speech fallback)

### Fase 2: Setup del archivo
- [ ] Copiar una app base (recomendado: `AppDino.tsx` como plantilla más limpia)
- [ ] Renombrar: `cp src/AppDino.tsx src/AppNuevo.tsx`
- [ ] Actualizar `type Mode`: si el constructor es diferente de 'rocket', cambiar el literal
- [ ] Actualizar `type Lang`: añadir idioma extra si aplica
- [ ] Actualizar `interface Message`: renombrar `dinosaurIdx` → `nuevoIdx`
- [ ] Actualizar `LANGS` config con idioma extra si aplica
- [ ] Actualizar TODAS las claves de `T` (traducciones UI) con nombres temáticos

### Fase 3: Contenido — Datos
- [ ] Reescribir `LOCATION_NAMES` (8 localizaciones en 5+ idiomas)
- [ ] Reescribir `CONSTELLATIONS` data (o equivalente temático)
- [ ] Reescribir `GALAXIES` data (o equivalente temático)
- [ ] Reescribir `STORIES` (3 historias interactivas con choices, 5+ idiomas)
- [ ] Reescribir `QUIZ_QUESTIONS` (10 preguntas, 4 opciones, 5+ idiomas)
- [ ] Reescribir `GALACTIC_LANGUAGES` (5 idiomas ficticios, ~40 palabras)
- [ ] Reescribir `KARAOKE_SONGS` (3-4 canciones, 8+ líneas, 5+ idiomas)
- [ ] Reescribir `ALPHABET` (26 entradas A-Z temáticas, 5+ idiomas)
- [ ] Reescribir `FAMOUS_CHARACTERS` (5-6 personajes + niño protagonista)
- [ ] Reescribir `NINOBOT_LOCATIONS` (8-10 ubicaciones divertidas por idioma)
- [ ] Reescribir `VALUES_MESSAGES` (10-15 mensajes por idioma)
- [ ] Reescribir `SCHOOL_QUESTIONS` (6-8 preguntas por idioma)
- [ ] Reescribir `FUN_FACTS` temáticos

### Fase 4: Contenido — Componentes visuales
- [ ] Reescribir PlanetSVG/DinoSVG: **8 SVGs temáticos nuevos** con gradients, texturas, detalles
- [ ] Reescribir ChildPortrait: decoraciones temáticas (casco/sombrero/orejas...)
- [ ] Reescribir Constructor: nuevo SVG preview con 4-5 piezas configurables
- [ ] Reescribir Canvas map: terrenos, caminos, marcadores temáticos con gradients

### Fase 5: Chat engine
- [ ] Actualizar `planetKeywords` con nombres de las 8 nuevas localizaciones (sinónimos multilingües)
- [ ] Actualizar TODAS las respuestas del chat: eliminar TODAS las referencias a la temática anterior
- [ ] Actualizar greetings, time-based messages, weather responses
- [ ] Actualizar emotion keywords y respuestas empáticas
- [ ] Verificar que `transLang` default apunta al primer idioma ficticio del nuevo tema

### Fase 6: Traducciones — Verificación
- [ ] Verificar: NO ¡¿ en campos `ca:`, `cs:`, `en:`, `fr:` (ejecutar script .cjs)
- [ ] Verificar: NO textos en inglés en campos `fr:`
- [ ] Verificar: NO textos en español en campos `ca:` (algo→quelcom, los→els, tiene→té)
- [ ] Verificar: Apostrofes correctamente escapadas en `fr:` y `ca:`
- [ ] Verificar: Género gramatical correcto en francés
- [ ] Verificar: NO caracteres cirílicos en campos `cs:` (usar caracteres checos)
- [ ] Si hay idioma extra: verificar que TODOS los Record<Lang, string> lo incluyen
- [ ] Si hay idioma extra: verificar Record<Lang, string[]> y tipos complejos manualmente

### Fase 7: Auditoría (ejecutar 3 pases)
- [ ] **Pase 1**: Errores de idioma, traducciones faltantes, referencias cruzadas, claves duplicadas
- [ ] **Pase 2**: Verificar fixes del pase 1, buscar ¡¿ residuales, errores de gramática, ortografía
- [ ] **Pase 3**: Verificación final, compilar (`tsc`), test visual de cada modo, comprobar speech
- [ ] Después de cada pase: `npm run build` para verificar 0 errores TypeScript

### Fase 8: Build final
- [ ] `sed` para cambiar import en `main.tsx` al nuevo archivo
- [ ] `npm run build` — verificar 0 errores TS
- [ ] `npx html-inline -i dist/index.html -o ninobot-nuevo.html -b dist/`
- [ ] Restaurar import original en `main.tsx`
- [ ] Verificar tamaño del HTML (~1MB es normal, >2MB revisar)
- [ ] Abrir el HTML en navegador y probar los 10 modos manualmente
- [ ] Probar speech synthesis en al menos 3 idiomas
- [ ] Probar setup screen con nombre/género/edad diferentes

---

## 9. Tabla de fixes históricos aplicados

| App | Qué se arregló | Detalle del fix |
|-----|----------------|-----------------|
| Espacio | Mae Jemison `ca:` quote | Estaba en inglés → traducido al catalán correctamente |
| Espacio | Chris Hadfield `cs:` quote | Tenía caracteres cirílicos (космосе) → checo correcto (vesmíru) |
| Espacio | Quiz `fr:` colores | Blue/Green/Yellow → Bleu/Vert/Jaune |
| Espacio | Story `fr:` choice | "Cotton Candy Nebula" → "Nébuleuse Barbe à Papa" |
| Espacio | School `ca:` questions | ¡¿ eliminados, "los Penguins"→"als Penguins", "tolia"→"tocava" |
| Espacio | Child famous | "astronauta" → "policía astronauta" en 5 idiomas, (2026) eliminado |
| Dino | `ca:` "algo" | → "quelcom" (catalanismo incorrecto) |
| Dino | `es:` "volcáns" | → "volcanes" (plural incorrecto) |
| Dino | `en:` "familys" | → "families" (plural inglés incorrecto) |
| Dino | `fr:` "une volcan" | → "un volcan" (género incorrecto) |
| Dino | `es:` "tu propio" | → "tu propia" (concordancia con "máquina") |
| Dino | `fr:` "superpouvoi r" | → "superpouvoir" (espacio erróneo) |
| Dino | `fr:` "explorere" | → "explorateur" (typo) |
| Dino | `fr:` "volcanique" | → "volcaniques" (falta plural) |
| Dino | `fr:` "mondex" | → "mondes" (typo) |
| Dino | VALUES_MESSAGES `fr:` | Array duplicado (30 entries) → eliminado duplicado (15) |
| Dino | DinoSVG x8 | 8 dinosaurios mejorados con gradients, escamas, ojos, sombras |
| Dino | Child famous | (2026) eliminado de tarjeta y chat |
| LOTR | Elvish `ev:` lang | Añadido como 6º idioma a 446+ entries Record<Lang, string> |
| LOTR | 25+ space refs | nave/planeta/galaxia/astronauta → equivalentes LOTR |
| LOTR | Quiz `ev:` options | 10 preguntas con opciones corregidas (tenían inglés) |
| LOTR | Vocabulary | "planeta/espacio/nave" → "reino/búsqueda/aventurero" |
| LOTR | Fun facts | Datos sobre planetas → datos de la Tierra Media |
| LOTR | `transLang` default | `'klingon'` → `'sindarin'` (causaba crash) |
| LOTR | PlanetSVG x8 | 8 planetas → 8 localizaciones LOTR ilustradas (Comarca, Mordor...) |
| LOTR | Map canvas | Mejorado con terrenos, ríos, bosques, montañas, Mount Doom |
| LOTR | Constellation `ev:` names | Texto largo (descripción) → nombres Sindarin (Menelvagor...) |
| LOTR | Galaxy `ev:`/`fr:` names | Texto en inglés → Sindarin/francés correcto |
| LOTR | `guerra` duplicada | TS1117: clave duplicada en vocabulario Orco → eliminada |
| LOTR | 4 constellation lines | Sintaxis rota por agente → reparación manual de fragments |
| LOTR | Child famous | (2026) eliminado de tarjeta y chat |
| 3 apps | ¡¿ cleanup masivo | 1733 marcas ¡¿ eliminadas de campos ca:/cs: con script .cjs |

---

## 10. Notas de rendimiento y compatibilidad

- **Tamaño HTML**: ~1MB por app es normal. Si supera 2MB, revisar SVGs (simplificar paths)
- **SpeechSynthesis**: No todos los navegadores soportan todos los idiomas. Catalán (`ca-ES`) funciona en Chrome/Edge pero puede fallar en Safari. El idioma ficticio siempre usa fallback a `en-GB`.
- **Canvas**: El mapa es 3400x1400 virtual, renderizado en un viewport de ~460px alto. Los clicks se mapean con offset del scroll. En móvil, el drag funciona con touch events.
- **Three.js**: Solo se usa para partículas de background. Si el tema no necesita partículas 3D, se puede eliminar el import para reducir bundle.
- **Inline HTML**: El `html-inline` empaqueta TODO (JS, CSS, assets) en un solo archivo. No hay dependencias externas en runtime.

---

## 11. Reglas de estilo para textos infantiles

- **Tono**: Siempre positivo, entusiasta, simple. Ninobot es un amigo, no un profesor.
- **Longitud**: Frases cortas (máx 15-20 palabras). Los niños de 3-5 años necesitan frases aún más cortas.
- **Vocabulario**: Palabras simples. "grande" mejor que "enorme", "bonito" mejor que "hermoso".
- **Emojis**: Usar generosamente para refuerzo visual. Cada mensaje debería tener al menos 1 emoji.
- **{name}**: Usar el placeholder del nombre del niño frecuentemente para personalización.
- **Valores educativos**: Intercalar mensajes sobre compartir, ser amable, ordenar, respetar...
- **Sin contenido negativo**: Nada de miedo, violencia, o temas adultos. Incluso en LOTR, Mordor se describe como "un lugar oscuro pero que los héroes van a salvar", no como algo aterrador.
- **Francés**: Espacio antes de `!`, `?`, `:`, `;` (regla tipográfica francesa)
