"use strict";
/* ============================================================
   Caras dibujadas para los famosos de las 4 aventuras nuevas
   (Star Wars, Piratas, Egipto y Amazonas): retratos makeCara
   con rasgos distintivos fieles a cada personaje.
   ============================================================ */

(function () {
  const F1 = "#f6d5b8", F2 = "#eec39a", F3 = "#c98e62", F4 = "#8d5a33";
  const VERDE = "#9ccc8f", VERDITO = "#a8d8a0";
  const kohl = `<path d="M34 52 L26 50 M66 52 L74 50" stroke="#1a237e" stroke-width="3" stroke-linecap="round"/><path d="M35 47 Q42 44 48 48 M52 48 Q58 44 65 47" stroke="#1a237e" stroke-width="2.4" fill="none"/>`;
  const nemes = (c1, c2) => `<path d="M20 58 Q14 20 50 14 Q86 20 80 58 L74 44 Q70 30 50 30 Q30 30 26 44 Z" fill="${c1}"/>
    <path d="M20 58 Q18 76 26 86 L34 78 Q28 68 28 54 Z" fill="${c1}"/>
    <path d="M80 58 Q82 76 74 86 L66 78 Q72 68 72 54 Z" fill="${c1}"/>
    ${[22, 30, 38].map(y => `<path d="M${20 + y / 8} ${y + 26} Q50 ${y + 18} ${80 - y / 8} ${y + 26}" stroke="${c2}" stroke-width="3" fill="none"/>`).join("")}
    <path d="M46 16 Q50 8 54 16 L52 22 L48 22 Z" fill="#2e7d32"/>`;

  const CFG = {
    /* --- Star Wars --- */
    "Luke Skywalker": [F1, "#d8b45a", "short", `<rect x="33" y="83" width="34" height="10" rx="5" fill="#e8e2d6"/>`],
    "Leia Organa": [F1, "#3e2a20", "bun", `<circle cx="24" cy="52" r="11" fill="#3e2a20"/><circle cx="76" cy="52" r="11" fill="#3e2a20"/><circle cx="24" cy="52" r="6" fill="none" stroke="#2b1c12" stroke-width="2"/><circle cx="76" cy="52" r="6" fill="none" stroke="#2b1c12" stroke-width="2"/><rect x="34" y="83" width="32" height="10" rx="5" fill="#fff"/>`],
    "Yoda": [VERDE, "#e8e2d6", "bald", `<path d="M26 48 Q6 38 4 50 Q10 58 26 56 Z" fill="${VERDE}"/><path d="M74 48 Q94 38 96 50 Q90 58 74 56 Z" fill="${VERDE}"/><path d="M40 44 Q45 41 50 44 M50 44 Q55 41 60 44" stroke="#5a7a50" stroke-width="2" fill="none"/><rect x="34" y="84" width="32" height="9" rx="4" fill="#a1887f"/>`],
    "Obi-Wan Kenobi": [F1, "#8d6e63", "short", `<rect x="33" y="83" width="34" height="10" rx="5" fill="#d7ccc8"/>`, "full"],
    "Rey": [F1, "#4a3526", "bun", `<circle cx="50" cy="10" r="7" fill="#4a3526"/><circle cx="50" cy="24" r="8" fill="#4a3526"/><rect x="34" y="83" width="32" height="10" rx="5" fill="#eceff1"/>`],
    "Han Solo": [F2, "#3e2a20", "short", `<path d="M42 66 Q50 70 58 64" stroke="#5a3a28" stroke-width="2.4" fill="none" stroke-linecap="round"/><rect x="33" y="83" width="34" height="10" rx="5" fill="#37474f"/><path d="M33 83 L46 93" stroke="#8d6e63" stroke-width="4"/>`],
    "Chewbacca": [F3, "#5d4037", "wild", `<path d="M28 44 Q28 82 50 86 Q72 82 72 44 L66 56 Q60 66 50 66 Q40 66 34 56 Z" fill="#5d4037"/><path d="M30 78 L70 62" stroke="#a1887f" stroke-width="6"/><rect x="44" y="66" width="5" height="6" rx="2" fill="#c9c2b8"/><rect x="54" y="62" width="5" height="6" rx="2" fill="#c9c2b8"/>`],
    "Grogu": [VERDITO, "#e8e2d6", "bald", `<path d="M24 46 Q0 30 2 48 Q6 60 24 54 Z" fill="${VERDITO}"/><path d="M76 46 Q100 30 98 48 Q94 60 76 54 Z" fill="${VERDITO}"/><circle cx="42" cy="52" r="5" fill="#161616"/><circle cx="58" cy="52" r="5" fill="#161616"/><circle cx="43.6" cy="50.4" r="1.6" fill="#fff"/><circle cx="59.6" cy="50.4" r="1.6" fill="#fff"/><rect x="34" y="84" width="32" height="9" rx="4" fill="#d7ccc8"/>`],
    /* --- Piratas --- */
    "Barbanegra (Edward Teach)": [F2, "#161616", "short", `<path d="M22 34 Q24 12 50 12 Q76 12 78 34 L78 40 L22 40 Z" fill="#212121"/><path d="M22 38 L78 38" stroke="#424242" stroke-width="3"/>`, "long"],
    "Anne Bonny": [F1, "#c1440e", "waves", `<path d="M22 36 Q50 22 78 36 L76 28 Q50 14 24 28 Z" fill="#7b1fa2"/><circle cx="28" cy="60" r="3" fill="#ffd54f"/>`],
    "Mary Read": [F1, "#5a3a22", "short", `<path d="M20 32 Q22 12 50 12 Q78 12 80 32 L82 38 L18 38 Z" fill="#37474f"/><path d="M18 37 L82 37" stroke="#546e7a" stroke-width="3"/>`],
    "Francis Drake": [F1, "#8d5a33", "short", `<circle cx="50" cy="88" r="12" fill="#fff"/><circle cx="50" cy="88" r="7" fill="#f6d5b8"/><path d="M38 84 Q50 78 62 84" stroke="#e0e0e0" stroke-width="3" fill="none"/>`, "goatee"],
    "Ching Shih": [F2, "#161616", "bun", `<path d="M36 14 L64 14" stroke="#c62828" stroke-width="3"/><circle cx="38" cy="12" r="2.6" fill="#ffd54f"/><circle cx="62" cy="12" r="2.6" fill="#ffd54f"/><rect x="34" y="83" width="32" height="10" rx="5" fill="#b71c1c"/>`],
    "Calico Jack": [F2, "#3e2a20", "scarf", `<circle cx="26" cy="58" r="3.4" fill="#ffd54f"/><path d="M40 86 L46 92 M54 92 L60 86" stroke="#e53935" stroke-width="3" stroke-linecap="round"/>`, "goatee"],
    /* --- Egipto --- */
    "Tutankamón": [F3, "#1a237e", "bald", nemes("#f2c14e", "#1a237e") + kohl],
    "Cleopatra": [F2, "#161616", "bob", kohl + `<path d="M46 16 Q50 8 54 16 L52 22 L48 22 Z" fill="#2e7d32"/><path d="M28 30 L72 30" stroke="#ffd54f" stroke-width="3"/><rect x="33" y="83" width="34" height="10" rx="5" fill="#ffd54f"/>`],
    "Ramsés II": [F3, "#1a237e", "bald", `<path d="M30 40 Q28 8 50 6 Q72 8 70 40 L64 32 Q60 20 50 20 Q40 20 36 32 Z" fill="#1565c0"/><circle cx="50" cy="12" r="4" fill="#ffd54f"/>` + kohl, "goatee"],
    "Nefertiti": [F3, "#161616", "bald", `<path d="M32 44 Q28 6 54 4 Q76 8 72 44 L66 36 Q64 22 52 20 Q40 22 38 36 Z" fill="#1e6f9f"/><path d="M32 40 L72 40" stroke="#ffd54f" stroke-width="4"/><circle cx="52" cy="10" r="3" fill="#ffd54f"/>` + kohl],
    "Hatshepsut": [F3, "#1a237e", "bald", nemes("#e8c66b", "#8d5a33") + kohl + `<path d="M44 70 L56 70 L54 88 Q50 92 46 88 Z" fill="#3e2a20"/>`],
    "Howard Carter": [F1, "#5a4632", "short", `<ellipse cx="50" cy="26" rx="28" ry="7" fill="#c9b28a"/><path d="M33 26 Q35 10 50 10 Q65 10 67 26 Z" fill="#b59d74"/><path d="M33 24 L67 24" stroke="#8d744c" stroke-width="3"/><path d="M40 88 L50 92 L60 88 L60 96 L50 92 L40 96 Z" fill="#5d4037"/>`, "must"],
    /* --- Amazonas --- */
    "Alexander von Humboldt": [F1, "#c9c2b8", "waves", `<rect x="34" y="82" width="32" height="12" rx="4" fill="#eceff1"/><path d="M40 82 L50 88 L60 82" stroke="#b0bec5" stroke-width="2.4" fill="none"/>`],
    "Francisco de Orellana": [F2, "#3e2a20", "short", `<path d="M26 32 Q28 10 50 8 Q72 10 74 32 Q62 24 50 24 Q38 24 26 32 Z" fill="#78909c"/><path d="M22 32 Q50 20 78 32" stroke="#546e7a" stroke-width="4" fill="none"/>`, "full"],
    "Maria Sibylla Merian": [F1, "#8d6e63", "bun", `<circle cx="76" cy="74" r="1.8" fill="#161616"/><path d="M76 74 Q68 64 72 58 Q80 60 78 70 Z" fill="#42a5f5"/><path d="M76 74 Q84 64 80 58 Q73 60 74 70 Z" fill="#64b5f6"/><rect x="34" y="82" width="32" height="10" rx="4" fill="#fff"/>`],
    "Chico Mendes": [F3, "#161616", "curls", `<rect x="33" y="83" width="34" height="10" rx="5" fill="#8d6e63"/>`, "must"],
    "Marina Silva": [F3, "#161616", "bun", `<circle cx="42" cy="52" r="6.6" fill="none" stroke="#37474f" stroke-width="2.4"/><circle cx="58" cy="52" r="6.6" fill="none" stroke="#37474f" stroke-width="2.4"/><line x1="48.6" y1="52" x2="51.4" y2="52" stroke="#37474f" stroke-width="2.4"/>`],
    "Davi Kopenawa": [F3, "#161616", "bob", `<path d="M36 60 L64 60" stroke="#c62828" stroke-width="3" stroke-linecap="round"/><path d="M28 22 L24 10 M38 16 L36 6 M62 16 L64 6 M72 22 L76 10" stroke="#ffb300" stroke-width="3" stroke-linecap="round"/>`]
  };

  ["starwars", "piratas", "egipto", "amazonas"].forEach(id => {
    const th = THEMES[id];
    if (!th || !th.content || !th.content.famous) return;
    th.content.famous.forEach(f => {
      const c = CFG[f.name.es];
      if (c) f.face = makeCara(c[0], c[1], c[2], c[3], c[4]).svg;
    });
  });
})();
