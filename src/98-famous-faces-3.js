"use strict";
/* ============================================================
   Caras dibujadas para los famosos de las 6 aventuras de la
   tanda del arte y la naturaleza (Gaudí, Miró, Dalí, Picasso,
   Árboles, Frutas): siempre caras, nunca iconos.
   ============================================================ */

(function () {
  const F1 = "#f6d5b8", F2 = "#eec39a", F3 = "#c98e62", F4 = "#8d5a33";
  const gafitas = `<circle cx="42" cy="52" r="6.6" fill="none" stroke="#37474f" stroke-width="2.4"/><circle cx="58" cy="52" r="6.6" fill="none" stroke="#37474f" stroke-width="2.4"/><line x1="48.6" y1="52" x2="51.4" y2="52" stroke="#37474f" stroke-width="2.4"/>`;
  const cuello = c => `<rect x="33" y="83" width="34" height="10" rx="5" fill="${c}"/>`;
  const copa = `<rect x="30" y="24" width="40" height="6" rx="3" fill="#212121"/><rect x="37" y="2" width="26" height="24" rx="3" fill="#212121"/>`;

  const CFG = {
    /* --- Gaudí --- */
    "Antoni Gaudí": [F1, "#c9c2b8", "bald", cuello("#37474f"), "full"],
    "Eusebi Güell": [F1, "#8d8d8d", "short", copa + cuello("#263238"), "full"],
    "Josep Maria Jujol": [F1, "#3e2a20", "short", `<circle cx="30" cy="86" r="4" fill="#26a69a"/><circle cx="70" cy="86" r="4" fill="#ef6c00"/>` + cuello("#455a64"), "must"],
    "Lluís Domènech i Montaner": [F1, "#e8e2d6", "short", gafitas + cuello("#37474f"), "long"],
    "Josep Puig i Cadafalch": [F1, "#5a4632", "short", gafitas + cuello("#4e342e"), "must"],
    /* --- Miró --- */
    "Joan Miró": [F1, "#d8d0c0", "bald", `<path d="M40 44 Q45 41 50 44 M50 44 Q55 41 60 44" stroke="#5a4632" stroke-width="2" fill="none"/><rect x="33" y="83" width="34" height="10" rx="5" fill="#c62828"/><circle cx="64" cy="87" r="2.6" fill="#ffd54f"/><circle cx="40" cy="88" r="2.4" fill="#1a237e"/>`],
    "Pilar Juncosa": [F1, "#8d8d8d", "bun", `<circle cx="28" cy="60" r="2.6" fill="#ffd54f"/><circle cx="72" cy="60" r="2.6" fill="#ffd54f"/>` + cuello("#7986cb")],
    "Josep Lluís Sert": [F2, "#5a4632", "bald", gafitas + cuello("#37474f")],
    "Alexander Calder": [F1, "#e8e2d6", "wild", `<path d="M74 80 L84 72 M84 72 L90 78 M84 72 L88 66" stroke="#e53935" stroke-width="2.6" stroke-linecap="round"/><circle cx="90" cy="79" r="3" fill="#1a237e"/><circle cx="89" cy="64" r="2.6" fill="#ffd54f"/>`],
    "Joan Prats": [F1, "#3e2a20", "short", `<ellipse cx="50" cy="26" rx="27" ry="6" fill="#5d4037"/><path d="M34 26 Q36 12 50 12 Q64 12 66 26 Z" fill="#4e342e"/><path d="M34 25 L66 25" stroke="#8d6e63" stroke-width="2.4"/>` + cuello("#546e7a")],
    /* --- Dalí --- */
    "Salvador Dalí": [F1, "#161616", "short", `<path d="M38 60 Q30 56 26 48 M62 60 Q70 56 74 48" stroke="#161616" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="42" cy="50" r="3.4" fill="#2b1a10"/><circle cx="58" cy="50" r="3.4" fill="#2b1a10"/>` + cuello("#263238")],
    "Gala": [F1, "#5a3a22", "bob", `<path d="M32 30 Q50 24 68 30" stroke="#ffd54f" stroke-width="3" fill="none"/>` + cuello("#7b1fa2")],
    "Federico García Lorca": [F2, "#161616", "short", `<circle cx="63" cy="63" r="1.8" fill="#3e2a20"/><path d="M40 88 L50 92 L60 88" stroke="#37474f" stroke-width="3" fill="none"/>` + cuello("#eceff1")],
    "Luis Buñuel": [F2, "#3e2a20", "bald", `<circle cx="42" cy="52" r="4" fill="#2b1a10"/><circle cx="58" cy="52" r="4" fill="#2b1a10"/><path d="M34 44 L47 46 M53 46 L66 44" stroke="#3e2a20" stroke-width="3.4" stroke-linecap="round"/>` + cuello("#4e342e")],
    "Anna Maria Dalí": [F1, "#3e2a20", "bob", `<path d="M60 18 L72 12 L70 24 Z" fill="#e57373"/>` + cuello("#80cbc4")],
    /* --- Picasso --- */
    "Pablo Picasso": [F2, "#c9c2b8", "bald", `<circle cx="42" cy="51" r="3.8" fill="#161616"/><circle cx="58" cy="51" r="3.8" fill="#161616"/><rect x="32" y="82" width="36" height="12" rx="5" fill="#eceff1"/>${[85, 89].map(y => `<line x1="32" y1="${y}" x2="68" y2="${y}" stroke="#1a237e" stroke-width="2.6"/>`).join("")}`],
    "Georges Braque": [F1, "#5a4632", "waves", `<path d="M44 84 L50 92 L56 84 L56 96 L50 92 L44 96 Z" fill="#455a64"/>`, "must"],
    "Dora Maar": [F1, "#161616", "long", `<path d="M43 63 Q50 68 57 63" stroke="#b71c1c" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="28" cy="58" r="2.6" fill="#e53935"/>`],
    "Françoise Gilot": [F1, "#4a3526", "waves", `<path d="M35 45 Q42 41 48 45 M52 45 Q58 41 65 45" stroke="#3e2a20" stroke-width="2.4" fill="none"/>` + cuello("#2e7d32")],
    "Jacqueline Roque": [F2, "#161616", "bun", `<path d="M30 36 Q50 28 70 36" stroke="#c62828" stroke-width="4" fill="none"/>` + cuello("#c62828")],
    /* --- Árboles --- */
    "Wangari Maathai": [F4, "#e65100", "wrap", `<circle cx="30" cy="18" r="3" fill="#ffd54f"/><circle cx="50" cy="12" r="3" fill="#8bc34a"/><circle cx="70" cy="18" r="3" fill="#ffd54f"/>` + cuello("#e65100")],
    "Jadav Payeng": [F4, "#161616", "wrap", `<path d="M76 78 Q84 68 80 60 Q88 64 86 74" stroke="#66bb6a" stroke-width="3" fill="none" stroke-linecap="round"/>` + cuello("#8d6e63"), "must"],
    "Suzanne Simard": [F1, "#b5813f", "long", `<path d="M22 86 Q30 78 26 70 M28 88 Q36 82 34 74" stroke="#8bc34a" stroke-width="2.6" fill="none" stroke-linecap="round"/>` + cuello("#5d4037")],
    "Julia Butterfly Hill": [F1, "#4a3526", "long", `<circle cx="74" cy="24" r="1.8" fill="#161616"/><path d="M74 24 Q66 14 70 8 Q78 10 76 20 Z" fill="#ab47bc"/><path d="M74 24 Q82 14 78 8 Q71 10 72 20 Z" fill="#ce93d8"/>`],
    "Teofrasto": [F2, "#e8e2d6", "bald", `<path d="M28 42 Q18 36 20 26 M32 36 Q24 28 28 20" stroke="#66bb6a" stroke-width="3.4" fill="none" stroke-linecap="round"/><path d="M72 42 Q82 36 80 26 M68 36 Q76 28 72 20" stroke="#66bb6a" stroke-width="3.4" fill="none" stroke-linecap="round"/><rect x="33" y="83" width="34" height="10" rx="5" fill="#eceff1"/>`, "long"],
    /* --- Frutas y hortalizas --- */
    "Clara Peeters": [F1, "#5a3a22", "bun", `<circle cx="50" cy="88" r="11" fill="#fff"/><circle cx="50" cy="88" r="6.6" fill="#f6d5b8"/><path d="M38 84 Q50 78 62 84" stroke="#e0e0e0" stroke-width="3" fill="none"/>`],
    "Gregor Mendel": [F1, "#c9c2b8", "bald", gafitas + `<path d="M50 82 L50 94 M44 88 L56 88" stroke="#e8e2d6" stroke-width="3.4" stroke-linecap="round"/>` + cuello("#263238")],
    "George Washington Carver": [F4, "#161616", "short", `<circle cx="68" cy="86" r="4.4" fill="#f48fb1"/><circle cx="64" cy="90" r="3" fill="#f8bbd0"/><path d="M68 90 L68 95" stroke="#66bb6a" stroke-width="2.4"/>` + cuello("#37474f"), "must"],
    "Nikolái Vavílov": [F1, "#3e2a20", "short", `<path d="M40 88 L50 92 L60 88 L60 96 L50 92 L40 96 Z" fill="#37474f"/><circle cx="30" cy="86" r="3" fill="#d8b45a"/><circle cx="26" cy="90" r="2.4" fill="#8bc34a"/>`, "must"],
    "Norman Borlaug": [F1, "#e8e2d6", "short", `<path d="M74 82 q4 -12 0 -18 M78 84 q6 -10 4 -16 M70 82 q2 -12 -2 -16" stroke="#d8b45a" stroke-width="2.6" fill="none" stroke-linecap="round"/>` + cuello("#5d4037")]
  };

  ["gaudi", "miro", "dali", "picasso", "arboles", "frutas"].forEach(id => {
    const th = THEMES[id];
    if (!th || !th.content || !th.content.famous) return;
    th.content.famous.forEach(f => {
      const c = CFG[f.name.es];
      if (c) f.face = makeCara(c[0], c[1], c[2], c[3], c[4]).svg;
    });
  });
})();
