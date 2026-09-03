"use strict";
/* ============================================================
   Iconos dibujados para el mapa del ESPACIO: planetas fieles
   en tamaño relativo, forma y color; constelaciones como
   patrones reales de estrellas; galaxias en espiral.
   Sustituyen a los emojis en los POI de esta aventura.
   ============================================================ */

(function () {
  const sky = (inner, vb) => `<svg viewBox="${vb || "0 0 100 100"}" width="100%" height="100%">${inner}</svg>`;

  /* --- planetas --- */
  const ICONS = {

    "☀️": { w: 170, h: 170, svg: sky(`
      <defs><radialGradient id="pSol" cx="50%" cy="45%"><stop offset="0%" stop-color="#fff9c4"/><stop offset="55%" stop-color="#ffd740"/><stop offset="100%" stop-color="#ff8f00"/></radialGradient></defs>
      <g><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="60s" repeatCount="indefinite"/>
      ${Array.from({ length: 12 }, (_, i) => `<line x1="50" y1="8" x2="50" y2="15" stroke="#ffca28" stroke-width="4" stroke-linecap="round" transform="rotate(${i * 30} 50 50)"/>`).join("")}</g>
      <circle cx="50" cy="50" r="33" fill="url(#pSol)"/>
      <circle cx="40" cy="42" r="4" fill="#ffb300" opacity=".7"/><circle cx="58" cy="58" r="5" fill="#ffb300" opacity=".6"/><circle cx="60" cy="40" r="3" fill="#ffe082" opacity=".8"/>`) },

    "🪨": { w: 24, h: 24, svg: sky(`
      <defs><radialGradient id="pMer" cx="38%" cy="34%"><stop offset="0%" stop-color="#bcaaa4"/><stop offset="100%" stop-color="#6d5a52"/></radialGradient></defs>
      <circle cx="50" cy="50" r="46" fill="url(#pMer)"/>
      <circle cx="34" cy="38" r="9" fill="#5d4a42" opacity=".8"/><circle cx="64" cy="60" r="12" fill="#5d4a42" opacity=".7"/><circle cx="56" cy="30" r="6" fill="#8d7a70" opacity=".8"/><circle cx="36" cy="68" r="7" fill="#8d7a70" opacity=".7"/>`) },

    "🌕": { w: 38, h: 38, svg: sky(`
      <defs><radialGradient id="pVen" cx="40%" cy="35%"><stop offset="0%" stop-color="#fff3d6"/><stop offset="100%" stop-color="#d9a441"/></radialGradient></defs>
      <circle cx="50" cy="50" r="46" fill="url(#pVen)"/>
      <path d="M10 42 Q35 34 60 42 T96 40" stroke="#e8c27a" stroke-width="7" fill="none" opacity=".8"/>
      <path d="M8 62 Q40 54 70 63 T94 60" stroke="#c98f3c" stroke-width="6" fill="none" opacity=".6"/>
      <path d="M18 26 Q45 20 78 27" stroke="#f5deb0" stroke-width="6" fill="none" opacity=".8"/>`) },

    "🌍": { w: 40, h: 40, svg: sky(`
      <defs><radialGradient id="pTie" cx="38%" cy="34%"><stop offset="0%" stop-color="#64b5f6"/><stop offset="100%" stop-color="#0d47a1"/></radialGradient></defs>
      <circle cx="50" cy="50" r="47" fill="url(#pTie)"/>
      <path d="M28 30 Q38 22 50 28 Q56 34 48 40 Q36 44 30 38 Z" fill="#66bb6a"/>
      <path d="M58 48 Q74 44 80 54 Q78 66 64 68 Q54 62 58 48 Z" fill="#66bb6a"/>
      <path d="M34 62 Q44 58 46 68 Q40 76 32 72 Z" fill="#81c784"/>
      <circle cx="50" cy="50" r="47" fill="none" stroke="#b3e5fc" stroke-width="3" opacity=".55"/>
      <ellipse cx="42" cy="24" rx="14" ry="4" fill="#fff" opacity=".7"/><ellipse cx="66" cy="36" rx="10" ry="3.4" fill="#fff" opacity=".6"/>`) },

    "🌙": { w: 18, h: 18, svg: sky(`
      <defs><radialGradient id="pLun" cx="40%" cy="35%"><stop offset="0%" stop-color="#eceff1"/><stop offset="100%" stop-color="#90a4ae"/></radialGradient></defs>
      <circle cx="50" cy="50" r="46" fill="url(#pLun)"/>
      <circle cx="36" cy="40" r="10" fill="#78909c" opacity=".7"/><circle cx="62" cy="58" r="8" fill="#78909c" opacity=".6"/><circle cx="52" cy="26" r="5" fill="#b0bec5"/><circle cx="30" cy="66" r="6" fill="#b0bec5" opacity=".8"/>`) },

    "🔴": { w: 30, h: 30, svg: sky(`
      <defs><radialGradient id="pMar" cx="38%" cy="34%"><stop offset="0%" stop-color="#ff8a65"/><stop offset="100%" stop-color="#bf360c"/></radialGradient></defs>
      <circle cx="50" cy="50" r="46" fill="url(#pMar)"/>
      <path d="M26 46 Q40 40 52 47 Q64 53 78 47" stroke="#8d2f0b" stroke-width="8" fill="none" opacity=".55"/>
      <circle cx="64" cy="66" r="8" fill="#8d2f0b" opacity=".6"/>
      <ellipse cx="50" cy="9" rx="16" ry="6" fill="#fff" opacity=".9"/>`) },

    "🟠": { w: 84, h: 84, svg: sky(`
      <defs><radialGradient id="pJup" cx="38%" cy="34%"><stop offset="0%" stop-color="#ffcc80"/><stop offset="100%" stop-color="#bf7a30"/></radialGradient>
      <clipPath id="pJupC"><circle cx="50" cy="50" r="47"/></clipPath></defs>
      <circle cx="50" cy="50" r="47" fill="url(#pJup)"/>
      <g clip-path="url(#pJupC)">
        <path d="M0 26 Q30 21 60 26 T100 25" stroke="#a3612a" stroke-width="7" fill="none" opacity=".8"/>
        <path d="M0 42 Q34 36 66 42 T100 41" stroke="#e8b26e" stroke-width="9" fill="none"/>
        <path d="M0 58 Q30 52 62 58 T100 57" stroke="#8d5321" stroke-width="8" fill="none" opacity=".8"/>
        <path d="M0 74 Q36 69 68 74 T100 73" stroke="#d99a4e" stroke-width="7" fill="none" opacity=".9"/>
        <ellipse cx="66" cy="62" rx="12" ry="8" fill="#d84315"/><ellipse cx="66" cy="62" rx="7" ry="4.4" fill="#ff7043"/>
      </g>`) },

    "🪐": { w: 118, h: 84, svg: sky(`
      <defs><radialGradient id="pSat" cx="38%" cy="34%"><stop offset="0%" stop-color="#ffe0b2"/><stop offset="100%" stop-color="#c19049"/></radialGradient>
      <clipPath id="pSatC"><circle cx="70" cy="50" r="34"/></clipPath></defs>
      <ellipse cx="70" cy="50" rx="66" ry="18" fill="none" stroke="#d7b98c" stroke-width="7" transform="rotate(-16 70 50)" opacity=".95"/>
      <ellipse cx="70" cy="50" rx="52" ry="13" fill="none" stroke="#a8875a" stroke-width="4" transform="rotate(-16 70 50)" opacity=".8"/>
      <circle cx="70" cy="50" r="34" fill="url(#pSat)"/>
      <g clip-path="url(#pSatC)">
        <path d="M36 38 Q70 32 104 38" stroke="#dbb277" stroke-width="6" fill="none"/>
        <path d="M36 56 Q70 50 104 56" stroke="#a8794a" stroke-width="6" fill="none" opacity=".8"/>
        <path d="M36 68 Q70 64 104 68" stroke="#dbb277" stroke-width="5" fill="none" opacity=".8"/>
      </g>
      <path d="M36 55 A 66 18 -16 0 0 104 44" fill="none" stroke="#e8cda1" stroke-width="7" transform="rotate(0)" opacity="0"/>`, "0 0 140 100") },

    "🔵": { w: 46, h: 46, svg: sky(`
      <defs><radialGradient id="pUra" cx="38%" cy="34%"><stop offset="0%" stop-color="#b2ebf2"/><stop offset="100%" stop-color="#26a69a"/></radialGradient></defs>
      <ellipse cx="50" cy="50" rx="12" ry="45" fill="none" stroke="#9adbd4" stroke-width="4.5" opacity=".9" transform="rotate(12 50 50)"/>
      <circle cx="50" cy="50" r="30" fill="url(#pUra)"/>
      <path d="M26 42 Q50 37 74 42" stroke="#e0f7fa" stroke-width="4.4" fill="none" opacity=".55"/>
      <path d="M27 58 Q50 63 73 58" stroke="#1d8076" stroke-width="4" fill="none" opacity=".45"/>
      <ellipse cx="50" cy="50" rx="12" ry="45" fill="none" stroke="rgba(255,255,255,.35)" stroke-width="1.4" transform="rotate(12 50 50)"/>`) },

    "☄️": { w: 66, h: 36, svg: sky(`
      <defs><radialGradient id="pCom" cx="35%" cy="40%"><stop offset="0%" stop-color="#ffffff"/><stop offset="60%" stop-color="#cfeaff"/><stop offset="100%" stop-color="#7fb8e6"/></radialGradient></defs>
      <path d="M30 46 L98 12 L44 40 L102 30 L46 48 L100 52 L42 54 Z" fill="rgba(170,220,255,.55)"/>
      <circle cx="26" cy="48" r="17" fill="url(#pCom)"/>
      <circle cx="20" cy="44" r="4" fill="#fff"/><circle cx="30" cy="54" r="2.6" fill="#a8d4f2"/>`, "0 0 110 66") },

    "💙": { w: 44, h: 44, svg: sky(`
      <defs><radialGradient id="pNep" cx="38%" cy="34%"><stop offset="0%" stop-color="#5c9ce6"/><stop offset="100%" stop-color="#1a3a8f"/></radialGradient></defs>
      <circle cx="50" cy="50" r="45" fill="url(#pNep)"/>
      <path d="M14 44 Q40 38 64 45 T94 43" stroke="#3f6fc4" stroke-width="8" fill="none" opacity=".8"/>
      <ellipse cx="40" cy="62" rx="11" ry="6" fill="#16307a" opacity=".9"/>
      <path d="M24 30 Q50 25 80 31" stroke="#a8c6f0" stroke-width="4" fill="none" opacity=".6"/>`) },

    "❄️": { w: 18, h: 18, svg: sky(`
      <defs><radialGradient id="pPlu" cx="40%" cy="35%"><stop offset="0%" stop-color="#e8d5c4"/><stop offset="100%" stop-color="#a1887f"/></radialGradient></defs>
      <circle cx="50" cy="50" r="46" fill="url(#pPlu)"/>
      <path d="M50 42 C42 32 26 40 34 54 L50 70 L66 54 C74 40 58 32 50 42 Z" fill="#f5efe9" opacity=".95"/>`) },

    /* --- constelaciones: patrones reales de estrellas --- */

    "🐻": consty([[8, 38], [26, 32], [44, 36], [58, 42], [86, 38], [90, 62], [62, 66]], [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 3]]),
    "🐻‍❄️": consty([[90, 16], [76, 30], [62, 42], [50, 56], [30, 60], [24, 78], [44, 80]], [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 3]], 0),
    "🏹": consty([[30, 16], [70, 14], [42, 46], [50, 51], [58, 56], [26, 86], [74, 84], [52, 66], [53, 74]], [[0, 2], [1, 4], [2, 3], [3, 4], [2, 5], [4, 6]], null, { 0: "#ff8a65", 6: "#90caf9" }),
    "👑": consty([[8, 62], [30, 34], [50, 58], [72, 30], [92, 52]], [[0, 1], [1, 2], [2, 3], [3, 4]]),
    "🦁": consty([[74, 20], [60, 14], [48, 20], [44, 32], [52, 44], [66, 48], [24, 72], [14, 58]], [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]], 5),
    "🦢": consty([[50, 10], [50, 36], [50, 62], [50, 86], [16, 48], [84, 32]], [[0, 1], [1, 2], [2, 3], [4, 1], [1, 5]], 0),
    "🐴": consty([[24, 28], [74, 24], [80, 70], [30, 74], [12, 88], [88, 12]], [[0, 1], [1, 2], [2, 3], [3, 0], [3, 4], [1, 5]]),
    "🐂": consty([[28, 28], [42, 44], [50, 54], [60, 44], [74, 24], [86, 14], [14, 16]], [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [0, 6]], null, { 2: "#ff7043" }),

    /* --- galaxias y nebulosas --- */

    "🌌": { w: 120, h: 120, svg: sky(`
      <defs><radialGradient id="gVia" cx="50%" cy="50%"><stop offset="0%" stop-color="#fff8e1"/><stop offset="35%" stop-color="#b39ddb"/><stop offset="100%" stop-color="rgba(80,60,160,0)"/></radialGradient></defs>
      <g><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="90s" repeatCount="indefinite"/>
      <circle cx="50" cy="50" r="46" fill="url(#gVia)" opacity=".5"/>
      <path d="M50 50 Q78 40 84 16" stroke="#d1c4e9" stroke-width="9" fill="none" stroke-linecap="round" opacity=".85"/>
      <path d="M50 50 Q22 60 16 84" stroke="#d1c4e9" stroke-width="9" fill="none" stroke-linecap="round" opacity=".85"/>
      <path d="M50 50 Q66 70 88 72" stroke="#b39ddb" stroke-width="7" fill="none" stroke-linecap="round" opacity=".7"/>
      <path d="M50 50 Q34 30 12 28" stroke="#b39ddb" stroke-width="7" fill="none" stroke-linecap="round" opacity=".7"/>
      <circle cx="50" cy="50" r="10" fill="#fff8e1"/></g>
      <circle cx="72" cy="30" r="2" fill="#fff"/><circle cx="30" cy="72" r="2" fill="#fff"/><circle cx="80" cy="62" r="1.6" fill="#fff"/>`) },

    "✨": { w: 100, h: 70, svg: sky(`
      <defs><radialGradient id="gAnd" cx="50%" cy="50%"><stop offset="0%" stop-color="#fff3e0"/><stop offset="40%" stop-color="#ce93d8"/><stop offset="100%" stop-color="rgba(120,80,180,0)"/></radialGradient></defs>
      <ellipse cx="50" cy="35" rx="48" ry="20" fill="url(#gAnd)" transform="rotate(-18 50 35)"/>
      <ellipse cx="50" cy="35" rx="30" ry="11" fill="#e1bee7" opacity=".6" transform="rotate(-18 50 35)"/>
      <circle cx="50" cy="35" r="6" fill="#fff8e1"/>`, "0 0 100 70") },

    "🎩": { w: 110, h: 66, svg: sky(`
      <defs><radialGradient id="gSom" cx="50%" cy="42%"><stop offset="0%" stop-color="#ffecb3"/><stop offset="100%" stop-color="rgba(150,110,60,0)"/></radialGradient></defs>
      <ellipse cx="50" cy="30" rx="48" ry="16" fill="url(#gSom)"/>
      <ellipse cx="50" cy="24" rx="20" ry="12" fill="#ffe0b2" opacity=".9"/>
      <ellipse cx="50" cy="33" rx="48" ry="5" fill="#4e342e" opacity=".85"/>`, "0 0 100 60") },

    "🌈": { w: 110, h: 110, svg: sky(`
      <defs><radialGradient id="gOri1" cx="45%" cy="45%"><stop offset="0%" stop-color="#f8bbd0"/><stop offset="100%" stop-color="rgba(240,98,146,0)"/></radialGradient>
      <radialGradient id="gOri2" cx="60%" cy="60%"><stop offset="0%" stop-color="#80deea"/><stop offset="100%" stop-color="rgba(0,188,212,0)"/></radialGradient></defs>
      <circle cx="44" cy="44" r="38" fill="url(#gOri1)" opacity=".95"/>
      <circle cx="60" cy="58" r="34" fill="url(#gOri2)" opacity=".9"/>
      <circle cx="46" cy="48" r="2.6" fill="#fff"/><circle cx="56" cy="42" r="2" fill="#fff"/><circle cx="52" cy="58" r="2.2" fill="#fff"/><circle cx="64" cy="52" r="1.8" fill="#fff"/>`) },

    "🦀": { w: 96, h: 84, svg: sky(`
      <defs><radialGradient id="gCan" cx="50%" cy="50%"><stop offset="0%" stop-color="#ffe0b2"/><stop offset="60%" stop-color="#ff8a65"/><stop offset="100%" stop-color="rgba(230,100,60,0)"/></radialGradient></defs>
      <ellipse cx="50" cy="46" rx="40" ry="32" fill="url(#gCan)" opacity=".9"/>
      <path d="M22 30 Q50 46 80 26 M18 50 Q50 56 84 48 M26 66 Q52 62 78 68" stroke="#4dd0e1" stroke-width="2.4" fill="none" opacity=".8"/>
      <path d="M34 22 Q46 44 30 66 M66 20 Q58 44 70 66" stroke="#ffab91" stroke-width="2.4" fill="none" opacity=".9"/>
      <circle cx="50" cy="46" r="3" fill="#fff"/>`, "0 0 100 88") }
  };

  /* generador de constelaciones: puntos, líneas y una estrella destacada */
  function consty(pts, links, brightIdx, colors) {
    const lines = links.map(l => {
      const a = pts[l[0]], b = pts[l[1]];
      return `<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="rgba(255,255,255,.55)" stroke-width="1.8"/>`;
    }).join("");
    const stars = pts.map((p, i) => {
      const c = (colors && colors[i]) || "#fff";
      const r = i === brightIdx ? 5 : 3;
      const glow = i === brightIdx ? `<circle cx="${p[0]}" cy="${p[1]}" r="9" fill="${c}" opacity=".25"/>` : "";
      return glow + `<circle cx="${p[0]}" cy="${p[1]}" r="${r}" fill="${c}"><animate attributeName="opacity" values="1;.55;1" dur="${(2 + i * 0.4).toFixed(1)}s" repeatCount="indefinite"/></circle>`;
    }).join("");
    return { w: 92, h: 92, svg: sky(lines + stars) };
  }

  /* --- mapa más ancho: sistema solar completo + constelaciones + zodiaco + galaxias + misterios --- */
  const ex = THEMES.espacio.content.explore;
  ex.width = 5100;

  /* Sistema solar de verdad: Sol en el centro y órbitas elípticas COMPLETAS
     (vista inclinada). Los planetas dan la vuelta entera; el motor les pone
     velocidad kepleriana (T proporcional a rx^1.5). */
  const SUN = { x: 1050, y: 560 };
  const ORB = {
    "🪨": { rx: 230, ry: 127, a0: 5.5 },
    "🌕": { rx: 320, ry: 176, a0: 2.4 },
    "🌍": { rx: 410, ry: 226, a0: 3.6 },
    "🔴": { rx: 500, ry: 275, a0: 0.7 },
    "🟠": { rx: 610, ry: 336, a0: 4.4 },
    "🪐": { rx: 720, ry: 396, a0: 1.6 },
    "🔵": { rx: 820, ry: 451, a0: 5.1 },
    "💙": { rx: 905, ry: 498, a0: 2.9 },
    "❄️": { rx: 970, ry: 534, a0: 0.2 }
  };
  ex.poikMax = 1.4; /* los planetas no se inflan: mantienen su tamaño relativo */
  ex.sun = SUN;
  ex.orbits = ORB;
  let earthXY = null;
  ex.pois.forEach(p => {
    if (p.cat !== "solar") return;
    if (p.emoji === "☀️") { p.x = SUN.x; p.y = SUN.y; return; }
    const o = ORB[p.emoji];
    if (o) {
      p.x = Math.round(SUN.x + o.rx * Math.cos(o.a0));
      p.y = Math.round(SUN.y + o.ry * Math.sin(o.a0));
      if (p.emoji === "🌍") earthXY = { x: p.x, y: p.y };
    }
  });
  const moonP = ex.pois.find(p => p.emoji === "🌙");
  if (moonP && earthXY) { moonP.x = earthXY.x + 65; moonP.y = earthXY.y; }
  ex.cats.find(c => c.id === "galaxias").x = 3480;
  const gi = ex.cats.findIndex(c => c.id === "galaxias");
  ex.cats.splice(gi, 0, { id: "zodiaco", emoji: "♈", x: 2440, name: { es: "Zodiaco", ca: "Zodíac", en: "Zodiac", cs: "Zvěrokruh", fr: "Zodiaque" } });
  ex.cats.push({ id: "exoticos", emoji: "⚫", x: 3960, name: { es: "Misterios del universo", ca: "Misteris de l'univers", en: "Mysteries of the universe", cs: "Záhady vesmíru", fr: "Mystères de l'univers" } });

  /* recolocar: galaxias al fondo; Leo y Tauro se mudan a la rueda del zodiaco */
  const MOVE = {
    "🌌": [3560, 400], "✨": [3700, 270], "🎩": [3840, 470], "🌈": [3660, 650], "🦀": [3860, 790],
    "🦁": [2850, 520], "🐂": [2600, 520]
  };
  ex.pois.forEach(p => {
    const m = MOVE[p.emoji];
    if (m) { p.x = m[0]; p.y = m[1]; }
    if (p.emoji === "🦁" || p.emoji === "🐂") p.cat = "zodiaco";
  });

  /* --- 7 constelaciones nuevas (el original tenía 16) --- */
  const NEWC = [
    { emoji: "🦂", x: 3100, y: 520, cat: "zodiaco",
      pat: consty([[20, 20], [30, 34], [38, 48], [44, 62], [54, 72], [68, 76], [80, 68], [84, 56]], [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]], 2, { 2: "#ff7043" }),
      name: { es: "Escorpio", ca: "Escorpió", en: "Scorpius", cs: "Štír", fr: "Scorpion" },
      fact: { es: "Tiene forma de anzuelo y una estrella roja gigante que se llama Antares: el corazón del escorpión.", ca: "Té forma d'ham i una estrella vermella gegant que es diu Antares: el cor de l'escorpió.", en: "It is shaped like a fishhook and has a giant red star called Antares: the scorpion's heart.", cs: "Má tvar háčku a obří červenou hvězdu jménem Antares: srdce štíra.", fr: "Il a la forme d'un hameçon et une étoile rouge géante appelée Antarès : le cœur du scorpion." } },
    { emoji: "➕", x: 2140, y: 300,
      pat: consty([[50, 14], [50, 80], [24, 52], [78, 44]], [[0, 1], [2, 3]], 0),
      name: { es: "Cruz del Sur", ca: "Creu del Sud", en: "Southern Cross", cs: "Jižní kříž", fr: "Croix du Sud" },
      fact: { es: "Solo se ve desde la mitad sur del mundo. Los marineros la usaban de brújula para encontrar el sur.", ca: "Només es veu des de la meitat sud del món. Els mariners la feien servir de brúixola per trobar el sud.", en: "You can only see it from the southern half of the world. Sailors used it as a compass to find south.", cs: "Je vidět jen z jižní poloviny světa. Námořníci ji používali jako kompas k nalezení jihu.", fr: "On ne la voit que depuis la moitié sud du monde. Les marins s'en servaient de boussole pour trouver le sud." } },
    { emoji: "👯", x: 2470, y: 780, cat: "zodiaco",
      pat: consty([[30, 18], [30, 48], [28, 78], [64, 14], [66, 44], [68, 74]], [[0, 1], [1, 2], [3, 4], [4, 5], [0, 3]], 3, { 0: "#e3f2fd", 3: "#ffe082" }),
      name: { es: "Géminis", ca: "Bessons", en: "Gemini", cs: "Blíženci", fr: "Gémeaux" },
      fact: { es: "Son dos hermanos gemelos cogidos de la mano: sus cabezas son las estrellas Cástor y Pólux.", ca: "Són dos germans bessons agafats de la mà: els seus caps són les estrelles Càstor i Pòl·lux.", en: "They are twin brothers holding hands: their heads are the stars Castor and Pollux.", cs: "Jsou to bratři dvojčata držící se za ruce: jejich hlavy jsou hvězdy Castor a Pollux.", fr: "Ce sont deux frères jumeaux qui se tiennent la main : leurs têtes sont les étoiles Castor et Pollux." } },
    { emoji: "🎵", x: 2110, y: 190,
      pat: consty([[50, 14], [38, 36], [62, 36], [42, 60], [58, 58]], [[0, 1], [0, 2], [1, 2], [1, 3], [2, 4], [3, 4]], 0),
      name: { es: "Lira", ca: "Lira", en: "Lyra", cs: "Lyra", fr: "Lyre" },
      fact: { es: "Es el arpa pequeñita del cielo. Su estrella Vega es de las más brillantes de la noche de verano.", ca: "És l'arpa petitona del cel. La seva estrella Vega és de les més brillants de la nit d'estiu.", en: "It is the sky's little harp. Its star Vega is one of the brightest of the summer night.", cs: "Je to malá harfa oblohy. Její hvězda Vega je jednou z nejjasnějších letní noci.", fr: "C'est la petite harpe du ciel. Son étoile Véga est l'une des plus brillantes des nuits d'été." } },
    { emoji: "🐬", x: 2300, y: 240,
      pat: consty([[40, 34], [54, 26], [66, 36], [52, 46], [30, 66]], [[0, 1], [1, 2], [2, 3], [3, 0], [3, 4]]),
      name: { es: "El Delfín", ca: "El Dofí", en: "The Dolphin", cs: "Delfín", fr: "Le Dauphin" },
      fact: { es: "Una cometa diminuta de cuatro estrellas con su colita: parece un delfín saltando entre las olas del cielo.", ca: "Un estel diminut de quatre estrelles amb la seva cueta: sembla un dofí saltant entre les onades del cel.", en: "A tiny kite of four stars with a little tail: it looks like a dolphin jumping through the sky's waves.", cs: "Drobný čtyřhvězdičkový drak s ocáskem: vypadá jako delfín skákající vlnami nebe.", fr: "Un tout petit cerf-volant de quatre étoiles avec sa petite queue : on dirait un dauphin qui saute dans les vagues du ciel." } },
    { emoji: "🦅", x: 2360, y: 430,
      pat: consty([[50, 18], [34, 44], [50, 50], [66, 44], [42, 78], [58, 76]], [[0, 2], [1, 2], [3, 2], [2, 4], [2, 5]], 2),
      name: { es: "El Águila", ca: "L'Àguila", en: "The Eagle", cs: "Orel", fr: "L'Aigle" },
      fact: { es: "Vuela por la Vía Láctea con las alas abiertas. Su estrella más brillante se llama Altair.", ca: "Vola per la Via Làctia amb les ales obertes. La seva estrella més brillant es diu Altair.", en: "It flies along the Milky Way with open wings. Its brightest star is called Altair.", cs: "Letí podél Mléčné dráhy s roztaženými křídly. Jeho nejjasnější hvězda se jmenuje Altair.", fr: "Il vole le long de la Voie lactée, les ailes ouvertes. Son étoile la plus brillante s'appelle Altaïr." } },
    { emoji: "🐕", x: 2310, y: 710,
      pat: consty([[60, 16], [48, 30], [56, 44], [44, 58], [58, 66], [36, 80], [70, 82]], [[0, 1], [1, 2], [2, 3], [3, 4], [3, 5], [4, 6]], 0),
      name: { es: "Can Mayor", ca: "Ca Major", en: "Canis Major", cs: "Velký pes", fr: "Grand Chien" },
      fact: { es: "El perro grande del cielo. En su hocico brilla Sirio, la estrella más brillante de toda la noche.", ca: "El gos gran del cel. Al seu musell hi brilla Sírius, l'estrella més brillant de tota la nit.", en: "The sky's big dog. On its nose shines Sirius, the brightest star of the whole night.", cs: "Velký pes oblohy. Na jeho čumáku září Sirius, nejjasnější hvězda celé noci.", fr: "Le grand chien du ciel. Sur son museau brille Sirius, l'étoile la plus brillante de toute la nuit." } }
  ];

  /* --- el zodiaco completo: las 8 que faltaban, en orden de fechas --- */
  const ZODC = [
    { emoji: "🐏", x: 2470, y: 250, cat: "zodiaco",
      pat: consty([[14, 62], [40, 46], [66, 34], [82, 24]], [[0, 1], [1, 2], [2, 3]], 2),
      name: { es: "Aries", ca: "Àries", en: "Aries", cs: "Beran", fr: "Bélier" },
      fact: { es: "Un carnero valiente de cuernos enroscados. Su estrella más brillante se llama Hamal.", ca: "Un marrà valent de banyes cargolades. La seva estrella més brillant es diu Hamal.", en: "A brave ram with curled horns. Its brightest star is called Hamal.", cs: "Statečný beran se zatočenými rohy. Jeho nejjasnější hvězda se jmenuje Hamal.", fr: "Un bélier courageux aux cornes enroulées. Son étoile la plus brillante s'appelle Hamal." } },
    { emoji: "♋", x: 2720, y: 250, cat: "zodiaco",
      pat: consty([[48, 16], [46, 42], [36, 68], [64, 58], [50, 88]], [[0, 1], [1, 2], [1, 3], [2, 4]], null, { 1: "#fff8e1" }),
      name: { es: "Cáncer", ca: "Cranc", en: "Cancer", cs: "Rak", fr: "Cancer" },
      fact: { es: "Un cangrejo tímido de estrellas suavecitas. En su centro vive un enjambre de estrellas bebé: el Pesebre.", ca: "Un cranc tímid d'estrelles suaus. Al seu centre hi viu un eixam d'estrelles bebè: el Pessebre.", en: "A shy crab of soft stars. In its middle lives a swarm of baby stars: the Beehive.", cs: "Plachý rak z jemných hvězd. Uprostřed něj žije roj hvězdných miminek: Jesličky.", fr: "Un crabe timide aux étoiles douces. En son centre vit un essaim de bébés étoiles : la Crèche." } },
    { emoji: "🌾", x: 2720, y: 780, cat: "zodiaco",
      pat: consty([[16, 28], [34, 40], [52, 34], [70, 24], [46, 58], [58, 76], [28, 70]], [[0, 1], [1, 2], [2, 3], [1, 6], [2, 4], [4, 5]], 5, { 5: "#90caf9" }),
      name: { es: "Virgo", ca: "Verge", en: "Virgo", cs: "Panna", fr: "Vierge" },
      fact: { es: "Una princesa que lleva una espiga de trigo. Su estrella azul brillante se llama Spica, que significa espiga.", ca: "Una princesa que porta una espiga de blat. La seva estrella blava brillant es diu Spica, que vol dir espiga.", en: "A princess holding an ear of wheat. Her bright blue star is called Spica, which means ear of wheat.", cs: "Princezna, která drží klas pšenice. Její jasná modrá hvězda se jmenuje Spica, což znamená klas.", fr: "Une princesse qui tient un épi de blé. Son étoile bleue brillante s'appelle Spica, ce qui veut dire épi." } },
    { emoji: "⚖️", x: 2970, y: 250, cat: "zodiaco",
      pat: consty([[32, 24], [64, 16], [76, 46], [44, 54], [38, 80], [70, 78]], [[0, 1], [1, 2], [0, 3], [2, 3], [3, 4], [2, 5]], 1),
      name: { es: "Libra", ca: "Balança", en: "Libra", cs: "Váhy", fr: "Balance" },
      fact: { es: "La balanza del cielo: es la única constelación del zodiaco que es un objeto y no un animal o una persona.", ca: "La balança del cel: és l'única constel·lació del zodíac que és un objecte i no un animal o una persona.", en: "The sky's scales: it is the only zodiac constellation that is an object and not an animal or a person.", cs: "Váhy oblohy: je to jediné souhvězdí zvěrokruhu, které je věc, a ne zvíře nebo člověk.", fr: "La balance du ciel : c'est la seule constellation du zodiaque qui est un objet et non un animal ou une personne." } },
    { emoji: "♐", x: 2970, y: 780, cat: "zodiaco",
      pat: consty([[22, 52], [36, 40], [52, 36], [66, 44], [74, 60], [58, 68], [38, 66], [80, 28]], [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 0], [3, 7]], 2),
      name: { es: "Sagitario", ca: "Sagitari", en: "Sagittarius", cs: "Střelec", fr: "Sagittaire" },
      fact: { es: "Es un arquero centauro... ¡pero sus estrellas dibujan una tetera! Apunta justo al centro de nuestra galaxia.", ca: "És un arquer centaure... però les seves estrelles dibuixen una tetera! Apunta just al centre de la nostra galàxia.", en: "It is a centaur archer... but its stars draw a teapot! It points right at the centre of our galaxy.", cs: "Je to lučištník kentaur... ale jeho hvězdy kreslí konvici na čaj! Míří přesně do středu naší galaxie.", fr: "C'est un archer centaure... mais ses étoiles dessinent une théière ! Elle pointe droit vers le centre de notre galaxie." } },
    { emoji: "🐐", x: 3220, y: 250, cat: "zodiaco",
      pat: consty([[12, 36], [36, 60], [54, 70], [78, 52], [88, 30], [54, 26]], [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0]], 4),
      name: { es: "Capricornio", ca: "Capricorn", en: "Capricorn", cs: "Kozoroh", fr: "Capricorne" },
      fact: { es: "Una cabra con cola de pez que dibuja un triángulo sonriente en el cielo de otoño.", ca: "Una cabra amb cua de peix que dibuixa un triangle somrient al cel de tardor.", en: "A goat with a fish tail that draws a smiling triangle in the autumn sky.", cs: "Koza s rybím ocasem, která na podzimní obloze kreslí usměvavý trojúhelník.", fr: "Une chèvre à queue de poisson qui dessine un triangle souriant dans le ciel d'automne." } },
    { emoji: "🏺", x: 3220, y: 780, cat: "zodiaco",
      pat: consty([[18, 28], [32, 40], [28, 58], [44, 50], [58, 62], [54, 80], [72, 42], [84, 22]], [[0, 1], [1, 3], [3, 2], [3, 4], [4, 5], [4, 6], [6, 7]], 0),
      name: { es: "Acuario", ca: "Aquari", en: "Aquarius", cs: "Vodnář", fr: "Verseau" },
      fact: { es: "El aguador del cielo: derrama un río de estrellitas que baja en zigzag.", ca: "L'aiguader del cel: vessa un riu d'estrelletes que baixa en zig-zag.", en: "The sky's water bearer: it pours a little river of stars that zigzags down.", cs: "Nosič vody na obloze: vylévá říčku hvězdiček, která teče klikatě dolů.", fr: "Le porteur d'eau du ciel : il verse une petite rivière d'étoiles qui descend en zigzag." } },
    { emoji: "🐟", x: 3350, y: 520, cat: "zodiaco",
      pat: consty([[14, 24], [24, 42], [36, 58], [50, 70], [68, 76], [84, 64], [78, 48], [20, 14]], [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [0, 7]], null),
      name: { es: "Piscis", ca: "Peixos", en: "Pisces", cs: "Ryby", fr: "Poissons" },
      fact: { es: "Dos peces atados por una cuerda de estrellas, cada uno nadando hacia un lado.", ca: "Dos peixos lligats per una corda d'estrelles, cadascun nedant cap a un costat.", en: "Two fish tied together by a string of stars, each swimming a different way.", cs: "Dvě ryby svázané šňůrou hvězd, každá plave na jinou stranu.", fr: "Deux poissons attachés par une corde d'étoiles, chacun nageant d'un côté." } }
  ];
  NEWC.push(...ZODC);
  NEWC.forEach(c => {
    ex.pois.push({ cat: c.cat || "constel", emoji: c.emoji, x: c.x, y: c.y, svg: c.pat.svg, iw: c.pat.w, ih: c.pat.h, name: c.name, fact: c.fact });
  });

  /* fechas del horóscopo: se añaden al dato de las 12 constelaciones del zodiaco */
  const ZDATES = {
    "🐏": { es: "entre el 21 de marzo y el 19 de abril", ca: "entre el 21 de març i el 19 d'abril", en: "between March 21 and April 19", cs: "mezi 21. březnem a 19. dubnem", fr: "entre le 21 mars et le 19 avril" },
    "🐂": { es: "entre el 20 de abril y el 20 de mayo", ca: "entre el 20 d'abril i el 20 de maig", en: "between April 20 and May 20", cs: "mezi 20. dubnem a 20. květnem", fr: "entre le 20 avril et le 20 mai" },
    "👯": { es: "entre el 21 de mayo y el 20 de junio", ca: "entre el 21 de maig i el 20 de juny", en: "between May 21 and June 20", cs: "mezi 21. květnem a 20. červnem", fr: "entre le 21 mai et le 20 juin" },
    "♋": { es: "entre el 21 de junio y el 22 de julio", ca: "entre el 21 de juny i el 22 de juliol", en: "between June 21 and July 22", cs: "mezi 21. červnem a 22. červencem", fr: "entre le 21 juin et le 22 juillet" },
    "🦁": { es: "entre el 23 de julio y el 22 de agosto", ca: "entre el 23 de juliol i el 22 d'agost", en: "between July 23 and August 22", cs: "mezi 23. červencem a 22. srpnem", fr: "entre le 23 juillet et le 22 août" },
    "🌾": { es: "entre el 23 de agosto y el 22 de septiembre", ca: "entre el 23 d'agost i el 22 de setembre", en: "between August 23 and September 22", cs: "mezi 23. srpnem a 22. zářím", fr: "entre le 23 août et le 22 septembre" },
    "⚖️": { es: "entre el 23 de septiembre y el 22 de octubre", ca: "entre el 23 de setembre i el 22 d'octubre", en: "between September 23 and October 22", cs: "mezi 23. zářím a 22. říjnem", fr: "entre le 23 septembre et le 22 octobre" },
    "🦂": { es: "entre el 23 de octubre y el 21 de noviembre", ca: "entre el 23 d'octubre i el 21 de novembre", en: "between October 23 and November 21", cs: "mezi 23. říjnem a 21. listopadem", fr: "entre le 23 octobre et le 21 novembre" },
    "♐": { es: "entre el 22 de noviembre y el 21 de diciembre", ca: "entre el 22 de novembre i el 21 de desembre", en: "between November 22 and December 21", cs: "mezi 22. listopadem a 21. prosincem", fr: "entre le 22 novembre et le 21 décembre" },
    "🐐": { es: "entre el 22 de diciembre y el 19 de enero", ca: "entre el 22 de desembre i el 19 de gener", en: "between December 22 and January 19", cs: "mezi 22. prosincem a 19. lednem", fr: "entre le 22 décembre et le 19 janvier" },
    "🏺": { es: "entre el 20 de enero y el 18 de febrero", ca: "entre el 20 de gener i el 18 de febrer", en: "between January 20 and February 18", cs: "mezi 20. lednem a 18. únorem", fr: "entre le 20 janvier et le 18 février" },
    "🐟": { es: "entre el 19 de febrero y el 20 de marzo", ca: "entre el 19 de febrer i el 20 de març", en: "between February 19 and March 20", cs: "mezi 19. únorem a 20. březnem", fr: "entre le 19 février et le 20 mars" }
  };
  const ZWRAP = {
    es: d => ` Es una constelación del zodiaco: si tu cumpleaños es ${d}, ¡es la tuya!`,
    ca: d => ` És una constel·lació del zodíac: si el teu aniversari és ${d}, és la teva!`,
    en: d => ` It is a zodiac constellation: if your birthday is ${d}, it is yours!`,
    cs: d => ` Je to souhvězdí zvěrokruhu: pokud máš narozeniny ${d}, je tvoje!`,
    fr: d => ` C'est une constellation du zodiaque : si ton anniversaire est ${d}, c'est la tienne !`
  };
  ex.pois.forEach(p => {
    const zd = ZDATES[p.emoji];
    if (!zd) return;
    ["es", "ca", "en", "cs", "fr"].forEach(l => { p.fact[l] += ZWRAP[l](zd[l]); });
  });

  /* --- misterios del universo: agujero negro, cuásar, púlsar y supernova --- */
  const EXO = [
    { emoji: "⚫", x: 4080, y: 480,
      w: 130, h: 96, art: `
        <defs><linearGradient id="xBH" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#ff6d00"/><stop offset="50%" stop-color="#ffd740"/><stop offset="100%" stop-color="#ff6d00"/></linearGradient></defs>
        <ellipse cx="50" cy="52" rx="46" ry="13" fill="none" stroke="url(#xBH)" stroke-width="6" stroke-dasharray="11 7"><animate attributeName="stroke-dashoffset" from="0" to="-36" dur="1.4s" repeatCount="indefinite"/></ellipse>
        <path d="M16 46 A 36 30 0 0 1 84 46" fill="none" stroke="#ffab40" stroke-width="4" opacity=".9"/>
        <circle cx="50" cy="50" r="19" fill="#000"/>
        <circle cx="50" cy="50" r="21" fill="none" stroke="#ffe082" stroke-width="2.2"/>`,
      name: { es: "El agujero negro", ca: "El forat negre", en: "The black hole", cs: "Černá díra", fr: "Le trou noir" },
      fact: { es: "Un agujero negro se traga todo lo que se acerca demasiado: ¡ni la luz puede escapar! Por eso se ve negro. El anillo brillante es todo lo que gira a su alrededor.", ca: "Un forat negre s'empassa tot el que s'hi acosta massa: ni la llum en pot escapar! Per això es veu negre. L'anell brillant és tot el que gira al seu voltant.", en: "A black hole swallows everything that gets too close: not even light can escape! That is why it looks black. The bright ring is everything spinning around it.", cs: "Černá díra spolkne všechno, co se přiblíží moc blízko: neunikne ani světlo! Proto vypadá černě. Zářivý prstenec je všechno, co kolem ní krouží.", fr: "Un trou noir avale tout ce qui s'approche trop : même la lumière ne peut pas s'échapper ! C'est pour ça qu'il paraît noir. L'anneau brillant, c'est tout ce qui tourne autour." } },
    { emoji: "💡", x: 4180, y: 220,
      w: 96, h: 120, art: `
        <defs><radialGradient id="xQC" cx="50%" cy="50%"><stop offset="0%" stop-color="#ffffff"/><stop offset="45%" stop-color="#82b1ff"/><stop offset="100%" stop-color="rgba(60,90,220,0)"/></radialGradient></defs>
        <path d="M46 4 L54 4 L52 38 L48 38 Z" fill="#b388ff"><animate attributeName="opacity" values="1;.45;1" dur="1.1s" repeatCount="indefinite"/></path>
        <path d="M46 96 L54 96 L52 62 L48 62 Z" fill="#b388ff"><animate attributeName="opacity" values=".45;1;.45" dur="1.1s" repeatCount="indefinite"/></path>
        <ellipse cx="50" cy="50" rx="30" ry="9" fill="none" stroke="#7986cb" stroke-width="4" opacity=".85"/>
        <circle cx="50" cy="50" r="17" fill="url(#xQC)"/>
        <circle cx="50" cy="50" r="6" fill="#fff"/>`,
      name: { es: "El cuásar", ca: "El quàsar", en: "The quasar", cs: "Kvasar", fr: "Le quasar" },
      fact: { es: "Un cuásar es el faro más brillante del universo: brilla más que mil galaxias juntas, y lo enciende un agujero negro gigante que está comiendo.", ca: "Un quàsar és el far més brillant de l'univers: brilla més que mil galàxies juntes, i l'encén un forat negre gegant que està menjant.", en: "A quasar is the brightest lighthouse in the universe: it shines more than a thousand galaxies together, powered by a giant black hole that is eating.", cs: "Kvasar je nejjasnější maják vesmíru: září víc než tisíc galaxií dohromady a rozsvěcuje ho obří černá díra, která právě jí.", fr: "Un quasar est le phare le plus brillant de l'univers : il brille plus que mille galaxies réunies, allumé par un trou noir géant en train de manger." } },
    { emoji: "🚨", x: 4040, y: 760,
      w: 100, h: 100, art: `
        <g><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="2.2s" repeatCount="indefinite"/>
        <path d="M50 50 L10 34 L10 66 Z" fill="rgba(130,220,255,.4)"/>
        <path d="M50 50 L90 34 L90 66 Z" fill="rgba(130,220,255,.4)"/></g>
        <circle cx="50" cy="50" r="8" fill="#e1f5fe"/>
        <circle cx="50" cy="50" r="12" fill="none" stroke="#4fc3f7" stroke-width="2" opacity=".8"/>`,
      name: { es: "El púlsar", ca: "El púlsar", en: "The pulsar", cs: "Pulsar", fr: "Le pulsar" },
      fact: { es: "Un púlsar es una estrella diminuta y pesadísima que gira a toda velocidad lanzando haces de luz, como un faro del espacio. ¡Algunos giran cientos de veces por segundo!", ca: "Un púlsar és una estrella diminuta i pesadíssima que gira a tota velocitat llançant feixos de llum, com un far de l'espai. Alguns giren centenars de vegades per segon!", en: "A pulsar is a tiny, super heavy star that spins at full speed shooting beams of light, like a space lighthouse. Some spin hundreds of times per second!", cs: "Pulsar je maličká, hrozně těžká hvězda, která se točí plnou rychlostí a vysílá paprsky světla jako vesmírný maják. Některé se otočí stokrát za sekundu!", fr: "Un pulsar est une étoile minuscule et très lourde qui tourne à toute vitesse en lançant des faisceaux de lumière, comme un phare de l'espace. Certains tournent des centaines de fois par seconde !" } },
    { emoji: "💥", x: 4280, y: 650,
      w: 110, h: 110, art: `
        ${Array.from({ length: 10 }, (_, i) => `<line x1="50" y1="50" x2="50" y2="12" stroke="#ffcc80" stroke-width="3.4" stroke-linecap="round" transform="rotate(${i * 36} 50 50)" opacity=".9"/>`).join("")}
        <circle cx="50" cy="50" r="12" fill="none" stroke="#ffab40" stroke-width="5"><animate attributeName="r" values="12;44" dur="2.4s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0" dur="2.4s" repeatCount="indefinite"/></circle>
        <circle cx="50" cy="50" r="11" fill="#fff3e0"/><circle cx="50" cy="50" r="6" fill="#ffd740"/>`,
      name: { es: "La supernova", ca: "La supernova", en: "The supernova", cs: "Supernova", fr: "La supernova" },
      fact: { es: "Una supernova es la explosión gigante de una estrella al final de su vida. De su polvo nacen estrellas y planetas nuevos: ¡todos estamos hechos de polvo de estrellas!", ca: "Una supernova és l'explosió gegant d'una estrella al final de la seva vida. De la seva pols neixen estrelles i planetes nous: tots estem fets de pols d'estrelles!", en: "A supernova is the giant explosion of a star at the end of its life. From its dust, new stars and planets are born: we are all made of stardust!", cs: "Supernova je obří výbuch hvězdy na konci jejího života. Z jejího prachu se rodí nové hvězdy a planety: všichni jsme z hvězdného prachu!", fr: "Une supernova est l'explosion géante d'une étoile à la fin de sa vie. De sa poussière naissent de nouvelles étoiles et planètes : nous sommes tous faits de poussière d'étoiles !" } }
  ];
  EXO.forEach(o => {
    ex.pois.push({ cat: "exoticos", emoji: o.emoji, x: o.x, y: o.y, svg: sky(o.art), iw: o.w, ih: o.h, name: o.name, fact: o.fact });
  });

  /* --- el cometa Halley: clicable y viajando por su órbita alargada --- */
  ex.pois.push({
    cat: "solar", emoji: "☄️", x: 2430, y: 560,
    svg: ICONS["☄️"].svg, iw: ICONS["☄️"].w, ih: ICONS["☄️"].h,
    halley: { cx: 1730, cy: 560, rx: 700, ry: 130, T: 60 },
    name: { es: "El cometa Halley", ca: "El cometa Halley", en: "Halley's Comet", cs: "Halleyova kometa", fr: "La comète de Halley" },
    fact: { es: "Los cometas son bolas de hielo y polvo con una cola que siempre apunta lejos del Sol. El Halley da una vuelta enorme y nos visita cada 76 años. ¡Apúntatelo!", ca: "Els cometes són boles de gel i pols amb una cua que sempre apunta lluny del Sol. El Halley fa una volta enorme i ens visita cada 76 anys. Apunta-t'ho!", en: "Comets are balls of ice and dust with a tail that always points away from the Sun. Halley makes a huge loop and visits us every 76 years. Save the date!", cs: "Komety jsou koule ledu a prachu s ocasem, který vždy míří od Slunce. Halleyova kometa dělá obrovský okruh a navštěvuje nás každých 76 let. Poznamenej si to!", fr: "Les comètes sont des boules de glace et de poussière avec une queue qui pointe toujours loin du Soleil. Halley fait une boucle énorme et nous rend visite tous les 76 ans. Note-le !" }
  });

  /* aplicar los iconos a los POI del espacio */
  ex.pois.forEach(p => {
    const ic = ICONS[p.emoji];
    if (ic && !p.svg) { p.svg = ic.svg; p.iw = ic.w; p.ih = ic.h; }
  });

  /* canvas ampliado: todo lo que no es sistema solar se corre a la derecha
     para dejar sitio a las órbitas completas */
  ex.pois.forEach(p => { if (p.cat !== "solar") p.x += 700; });
  ex.cats.forEach(c => { if (c.id !== "solar") c.x += 700; });
})();
