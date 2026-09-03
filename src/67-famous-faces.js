"use strict";
/* ============================================================
   Caras dibujadas para TODOS los famosos de las 8 aventuras
   (modo Famosos): retratos con makeCara + rasgos distintivos.
   Clave: el nombre en español de cada persona.
   ============================================================ */

(function () {
  const F1 = "#f6d5b8", F2 = "#eec39a", F3 = "#c98e62", F4 = "#8d5a33";
  const casco = `<circle cx="50" cy="50" r="37" fill="none" stroke="#eceff1" stroke-width="5"/><rect x="32" y="84" width="36" height="9" rx="4" fill="#b0bec5"/>`;
  const gafas = `<circle cx="42" cy="52" r="7" fill="none" stroke="#37474f" stroke-width="2.4"/><circle cx="58" cy="52" r="7" fill="none" stroke="#37474f" stroke-width="2.4"/><line x1="49" y1="52" x2="51" y2="52" stroke="#37474f" stroke-width="2.4"/>`;
  const cuello = c => `<rect x="33" y="83" width="34" height="10" rx="5" fill="${c}"/>`;
  const orejasElfo = skin => `<path d="M24 50 L10 40 L26 44 Z" fill="${skin}"/><path d="M76 50 L90 40 L74 44 Z" fill="${skin}"/>`;

  const CFG = {
    /* --- espacio --- */
    "Yuri Gagarin": [F1, "#4a3526", "short", casco + cuello("#e65100")],
    "Valentina Tereshkova": [F1, "#6d4c30", "waves", casco + cuello("#c62828")],
    "Neil Armstrong": [F1, "#8d6e63", "short", casco + cuello("#1565c0")],
    "Buzz Aldrin": [F1, "#5d4037", "short", casco + cuello("#1565c0")],
    "Mae Jemison": [F4, "#161616", "curls", cuello("#e65100")],
    "Sally Ride": [F1, "#5a3a22", "waves", cuello("#4fc3f7")],
    "Chris Hadfield": [F1, "#8d8d8d", "short", cuello("#455a64"), "must"],
    "Samantha Cristoforetti": [F1, "#3e2a20", "bob", casco + cuello("#2e7d32")],
    /* --- dinosaurios --- */
    "Mary Anning": [F1, "#3e2a20", "scarf", `<circle cx="80" cy="78" r="9" fill="none" stroke="#8d6e63" stroke-width="3"/><circle cx="80" cy="78" r="4" fill="none" stroke="#8d6e63" stroke-width="2"/>`],
    "Richard Owen": [F1, "#c9c2b8", "bald", `<path d="M35 45 L46 48 M54 48 L65 45" stroke="#5a4632" stroke-width="3" stroke-linecap="round"/>`, "full"],
    "Roy Chapman Andrews": [F1, "#6d4c30", "short", `<ellipse cx="50" cy="30" rx="30" ry="7" fill="#a1887f"/><path d="M32 30 Q34 13 50 13 Q66 13 68 30 Z" fill="#8d6e63"/>`],
    "Mary Leakey": [F1, "#8d8d8d", "short", ""],
    "Jack Horner": [F1, "#b0a89c", "short", `<ellipse cx="50" cy="28" rx="28" ry="6" fill="#8d6e63"/><path d="M34 28 Q36 13 50 13 Q64 13 66 28 Z" fill="#6d4c41"/>`, "goatee"],
    "Sue Hendrickson": [F1, "#d8b45a", "bob", gafas],
    "José Bonaparte": [F2, "#8d8d8d", "bald", gafas, "must"],
    "Barnum Brown": [F1, "#3e2a20", "short", `<ellipse cx="50" cy="28" rx="26" ry="6" fill="#37474f"/><path d="M35 28 Q37 11 50 11 Q63 11 65 28 Z" fill="#37474f"/>`, "must"],
    /* --- cuerpo humano --- */
    "Hipócrates": [F2, "#e8e2d6", "bald", `<path d="M28 42 Q18 36 20 26 M32 36 Q24 28 28 20" stroke="#66bb6a" stroke-width="3.4" fill="none" stroke-linecap="round"/><path d="M72 42 Q82 36 80 26 M68 36 Q76 28 72 20" stroke="#66bb6a" stroke-width="3.4" fill="none" stroke-linecap="round"/>`, "long"],
    "Andreas Vesalio": [F1, "#4a3526", "short", `<ellipse cx="50" cy="25" rx="27" ry="8" fill="#5d4037"/>`, "full"],
    "Santiago Ramón y Cajal": [F2, "#3e2a20", "bald", `<path d="M35 45 L46 48 M54 48 L65 45" stroke="#3e2a20" stroke-width="3.4" stroke-linecap="round"/>`, "full"],
    "Marie Curie": [F1, "#8d8d8d", "bun", `<circle cx="34" cy="86" r="5" fill="#80deea" opacity=".9"/><path d="M30 76 L36 82 M70 76 L64 82" stroke="#78909c" stroke-width="3" stroke-linecap="round"/>`],
    "Alexander Fleming": [F1, "#c9c2b8", "bald", gafas + `<path d="M40 88 L50 92 L60 88 L60 97 L50 92 L40 97 Z" fill="#37474f"/>`],
    "Elizabeth Blackwell": [F1, "#4a3526", "bun", `<rect x="34" y="82" width="32" height="10" rx="4" fill="#eceff1"/>`],
    /* --- tierra media --- */
    "Gandalf": [F1, "#d8d8d8", "long", `<path d="M50 0 L74 30 L26 30 Z" fill="#78909c"/><rect x="16" y="28" width="68" height="8" rx="4" fill="#78909c"/>`, "long"],
    "Aragorn": [F2, "#3e2a20", "long", "", "goatee"],
    "Legolas": [F1, "#e8d8a0", "long", orejasElfo(F1)],
    "Gimli": [F1, "#c1440e", "wild", `<path d="M28 32 Q30 13 50 13 Q70 13 72 32 Z" fill="#8d99a6" stroke="#5f6b78" stroke-width="2"/><rect x="46" y="13" width="8" height="19" fill="#5f6b78"/>`, "long"],
    "Galadriel": [F1, "#f2e6b8", "long", orejasElfo(F1) + `<path d="M32 38 Q50 30 68 38" stroke="#ffd54f" stroke-width="2.6" fill="none"/><circle cx="50" cy="33" r="3" fill="#ffd54f"/>`],
    "Frodo": [F1, "#4a3526", "curls", `<circle cx="50" cy="87" r="4.4" fill="#8bc34a"/><path d="M48 84 Q50 80 52 84" stroke="#33691e" stroke-width="2" fill="none"/>`],
    "Sam": [F2, "#b5813f", "curls", `<path d="M80 82 Q86 70 82 62" stroke="#66bb6a" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="82" cy="60" r="3.4" fill="#ffd54f"/>`],
    "Éowyn": [F1, "#e8d090", "waves", `<path d="M34 37 Q50 30 66 37" stroke="#cfd8dc" stroke-width="2.6" fill="none"/>`],
    /* --- océano --- */
    "Jacques Cousteau": [F1, "#c9c2b8", "bald", `<path d="M26 40 Q26 16 50 15 Q74 16 74 40 L74 45 L26 45 Z" fill="#d32f2f"/>`],
    "Sylvia Earle": [F1, "#d8cfc0", "short", `<rect x="33" y="24" width="34" height="13" rx="6" fill="none" stroke="#26a69a" stroke-width="3.4"/>`],
    "Eugenie Clark": [F2, "#2e1f14", "waves", `<path d="M74 82 L88 76 L82 88 Z" fill="#78909c"/>`],
    "Jacques Piccard": [F1, "#8d8d8d", "bald", `<rect x="33" y="82" width="34" height="12" rx="5" fill="#37474f"/>`, "must"],
    "Jeanne Baret": [F1, "#4a3526", "scarf", `<path d="M80 84 Q86 72 82 64" stroke="#66bb6a" stroke-width="3" fill="none" stroke-linecap="round"/>`],
    "Rachel Carson": [F1, "#5a4632", "waves", `<circle cx="46" cy="87" r="2.6" fill="#fff"/><circle cx="54" cy="87" r="2.6" fill="#fff"/>`],
    /* --- animales --- */
    "Jane Goodall": [F1, "#d8d0c0", "long", `<circle cx="82" cy="78" r="8" fill="#6d4c41"/><circle cx="79" cy="76" r="1.4" fill="#000"/><circle cx="85" cy="76" r="1.4" fill="#000"/><path d="M79 81 Q82 83 85 81" stroke="#000" stroke-width="1.2" fill="none"/>`],
    "David Attenborough": [F1, "#e8e2d6", "bald", cuello("#4fc3f7")],
    "Félix Rodríguez de la Fuente": [F1, "#2b1c12", "short", cuello("#8d6e63"), "full"],
    "Dian Fossey": [F1, "#161616", "long", ""],
    "Charles Darwin": [F1, "#e8e2d6", "bald", `<path d="M34 44 L46 47 M54 47 L66 44" stroke="#c9c2b8" stroke-width="3.4" stroke-linecap="round"/>`, "long"],
    "Konrad Lorenz": [F1, "#e8e2d6", "wild", `<ellipse cx="82" cy="84" rx="8" ry="6" fill="#ffe082"/><circle cx="88" cy="77" r="4.4" fill="#ffe082"/><path d="M92 77 l5 2 -5 2 z" fill="#ff9800"/><circle cx="87" cy="76" r="1" fill="#000"/>`, "full"],
    /* --- música --- */
    "Mozart": [F1, "#eceff1", "wig", cuello("#c62828")],
    "Beethoven": [F1, "#8d8d8d", "wild", `<path d="M35 45 L46 48 M54 48 L65 45" stroke="#5a5a5a" stroke-width="3.4" stroke-linecap="round"/>` + cuello("#b71c1c")],
    "Clara Schumann": [F1, "#3e2a20", "bun", `<circle cx="28" cy="60" r="2.6" fill="#ffd54f"/><circle cx="72" cy="60" r="2.6" fill="#ffd54f"/>`],
    "Ella Fitzgerald": [F4, "#161616", "bun", `<circle cx="27" cy="58" r="3" fill="#fff"/><circle cx="73" cy="58" r="3" fill="#fff"/><path d="M43 63 Q50 70 57 63" stroke="#c2185b" stroke-width="3" fill="none" stroke-linecap="round"/>`],
    "Louis Armstrong": [F4, "#161616", "short", `<rect x="36" y="84" width="28" height="8" rx="4" fill="#fff"/><path d="M72 86 h12 l7 -5 v14 l-7 -5 h-12 z" fill="#ffd54f"/>`],
    "Paco de Lucía": [F2, "#161616", "long", cuello("#263238")]
  };

  Object.keys(THEMES).forEach(id => {
    const th = THEMES[id];
    if (!th.ready || !th.content) return;
    th.content.famous.forEach(f => {
      const c = CFG[f.name.es];
      if (c) f.face = makeCara(c[0], c[1], c[2], c[3], c[4]).svg;
    });
  });

  /* las increíbles reutilizan sus retratos del mapa */
  const MAPKEY = { "Marie Curie": "⚗️", "Amelia Earhart": "✈️", "Ada Lovelace": "💻", "Frida Kahlo": "🎨", "Katherine Johnson": "🧮", "Malala Yousafzai": "📚" };
  THEMES.increibles.content.famous.forEach(f => {
    const k = MAPKEY[f.name.es];
    const src = k && THEMES.increibles.content.explore.pois.find(p => p.emoji === k);
    if (src && src.svg) f.face = src.svg;
  });
})();
