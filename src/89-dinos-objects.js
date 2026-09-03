"use strict";
/* ============================================================
   Objetos del mapa de dinosaurios dibujados: el nido con su
   bebe, los helechos, el volcan, la huella, los peces antiguos,
   el gran fosil, el ambar y los cristales. Mismo patron que
   63-dinos-icons.js; solo rellena POIs que aun no tienen svg.
   ============================================================ */

(function () {
  const dd = (inner, vb) => `<svg viewBox="${vb || "0 0 100 100"}" width="100%" height="100%">${inner}</svg>`;

  /* Genera una fronda de helecho: nervio central curvado con
     hojitas a los lados, mas cortas hacia la punta. */
  const fronda = (bx, by, cx, cy, tx, ty, col, lw) => {
    let s = `<path d="M${bx} ${by} Q${cx} ${cy} ${tx} ${ty}" stroke="${col}" stroke-width="${lw}" fill="none" stroke-linecap="round"/>`;
    for (let i = 2; i <= 7; i++) {
      const t = i / 9;
      const x = (1 - t) * (1 - t) * bx + 2 * (1 - t) * t * cx + t * t * tx;
      const y = (1 - t) * (1 - t) * by + 2 * (1 - t) * t * cy + t * t * ty;
      const dx = 2 * (1 - t) * (cx - bx) + 2 * t * (tx - cx);
      const dy = 2 * (1 - t) * (cy - by) + 2 * t * (ty - cy);
      const m = Math.hypot(dx, dy) || 1;
      const nx = -dy / m, ny = dx / m;
      const len = 3.2 * lw * (1 - t) + 2;
      s += `<path d="M${x.toFixed(1)} ${y.toFixed(1)} L${(x + nx * len).toFixed(1)} ${(y + ny * len).toFixed(1)} M${x.toFixed(1)} ${y.toFixed(1)} L${(x - nx * len).toFixed(1)} ${(y - ny * len).toFixed(1)}" stroke="${col}" stroke-width="${(lw * 0.55).toFixed(1)}" stroke-linecap="round" fill="none"/>`;
    }
    return s;
  };

  const ICONS = {

    /* Nido con huevos: tres huevos moteados y una cascara rota
       con un bebe dino asomando la cabecita (la ficha estrella) */
    "🥚": { w: 72, h: 58, svg: dd(`
      <defs><linearGradient id="dobNido" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#a1887f"/><stop offset="100%" stop-color="#5d4037"/></linearGradient></defs>
      <ellipse cx="60" cy="58" rx="52" ry="16" fill="#4e342e"/>
      <ellipse cx="30" cy="46" rx="11" ry="14" fill="#fff6e3"/>
      <circle cx="27" cy="42" r="1.5" fill="#cbb089"/><circle cx="34" cy="49" r="1.3" fill="#cbb089"/><circle cx="30" cy="55" r="1.2" fill="#cbb089"/>
      <ellipse cx="53" cy="42" rx="11" ry="15" fill="#fdf1da"/>
      <circle cx="50" cy="37" r="1.4" fill="#cbb089"/><circle cx="57" cy="44" r="1.5" fill="#cbb089"/><circle cx="52" cy="50" r="1.2" fill="#cbb089"/>
      <ellipse cx="74" cy="47" rx="10" ry="13" fill="#fff6e3"/>
      <circle cx="71" cy="43" r="1.4" fill="#cbb089"/><circle cx="77" cy="50" r="1.2" fill="#cbb089"/>
      <path d="M90 47 Q86 31 98 27 Q112 25 114 37 Q114 44 108 46 L108 48 L90 48 Z" fill="#9ccc65"/>
      <path d="M92 29 L96 23 L100 29 L104 23 L108 29 Q104 33 98 32 Q94 32 92 29 Z" fill="#fff6e3"/>
      <circle cx="104" cy="36" r="2.4" fill="#2f4a15"/><circle cx="104.8" cy="35.2" r=".8" fill="#fff"/>
      <circle cx="111" cy="36" r=".9" fill="#2f4a15"/>
      <path d="M108 42 Q111 44 114 41" stroke="#2f4a15" stroke-width="1.4" fill="none" stroke-linecap="round"/>
      <path d="M84 50 L89 43 L94 50 L99 43 L104 50 L109 43 L114 50 L113 57 Q110 68 99 68 Q88 68 85 57 Z" fill="#fff6e3"/>
      <circle cx="93" cy="58" r="1.4" fill="#cbb089"/><circle cx="103" cy="60" r="1.3" fill="#cbb089"/>
      <path d="M8 58 Q60 44 112 58 Q114 82 60 92 Q6 82 8 58 Z" fill="url(#dobNido)"/>
      <path d="M14 64 Q40 76 74 78 M28 74 Q60 64 96 72 M46 86 Q70 82 102 66" stroke="#6d4c41" stroke-width="2.4" fill="none" opacity=".8"/>
      <path d="M20 70 Q52 82 88 76" stroke="#8d6e63" stroke-width="2" fill="none" opacity=".8"/>
      <ellipse cx="16" cy="58" rx="6" ry="2.6" fill="#7cb342" transform="rotate(-24 16 58)"/>`, "0 0 120 96") },

    /* Helechos gigantes: frondas en abanico a varias alturas
       y un brote enroscado en la punta central */
    "🍃": { w: 62, h: 64, svg: dd(`
      <defs><linearGradient id="dobTierra" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8d6e63"/><stop offset="100%" stop-color="#5d4037"/></linearGradient></defs>
      ${fronda(55, 106, 52, 56, 48, 12, "#4caf50", 4)}
      ${fronda(55, 106, 32, 72, 12, 34, "#43a047", 3.4)}
      ${fronda(55, 106, 78, 72, 98, 34, "#43a047", 3.4)}
      ${fronda(55, 106, 40, 88, 22, 66, "#81c784", 3)}
      ${fronda(55, 106, 70, 88, 88, 66, "#81c784", 3)}
      <path d="M48 12 q7 -7 12 -1 q4 6 -2 9 q-5 2 -7 -2 q-1 -4 3 -5" stroke="#66bb6a" stroke-width="2.6" fill="none" stroke-linecap="round"/>
      <ellipse cx="55" cy="104" rx="26" ry="7" fill="url(#dobTierra)"/>
      <circle cx="38" cy="103" r="2.4" fill="#4e342e"/><circle cx="72" cy="105" r="2" fill="#4e342e"/>`, "0 0 110 112") },

    /* El gran volcan: cono con lava bajando y nubes de humo */
    "🌋": { w: 110, h: 100, svg: dd(`
      <defs>
        <linearGradient id="dobVolcan" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#a1785f"/><stop offset="100%" stop-color="#5d4037"/></linearGradient>
        <linearGradient id="dobLava" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffee58"/><stop offset="100%" stop-color="#e64a19"/></linearGradient>
        <linearGradient id="dobHumo" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#eceff1"/><stop offset="100%" stop-color="#b0bec5"/></linearGradient>
      </defs>
      <circle cx="52" cy="16" r="11" fill="url(#dobHumo)" opacity=".9"/>
      <circle cx="68" cy="10" r="13" fill="url(#dobHumo)"/>
      <circle cx="83" cy="16" r="9" fill="url(#dobHumo)" opacity=".8"/>
      <circle cx="42" cy="21" r="2.5" fill="#ffb300"/><circle cx="88" cy="26" r="2" fill="#ff7043"/>
      <path d="M44 30 Q60 24 76 30 L108 96 Q60 108 12 96 Z" fill="url(#dobVolcan)"/>
      <path d="M56 50 L52 74 M66 46 L74 68" stroke="#4e342e" stroke-width="3" opacity=".35" stroke-linecap="round"/>
      <ellipse cx="60" cy="30" rx="17" ry="6" fill="#e64a19"/>
      <ellipse cx="60" cy="30" rx="11" ry="4" fill="#ffb300"/>
      <path d="M48 32 Q44 48 36 60 Q30 72 36 86 Q42 90 46 84 Q42 72 50 58 Q56 44 54 33 Z" fill="url(#dobLava)"/>
      <path d="M70 32 Q74 46 82 56 Q86 64 82 72 Q76 72 76 64 Q72 52 64 40 Q62 34 64 32 Z" fill="url(#dobLava)" opacity=".95"/>
      <ellipse cx="24" cy="97" rx="9" ry="5" fill="#4e342e"/><ellipse cx="98" cy="98" rx="8" ry="4.5" fill="#3e2723"/>`, "0 0 120 110") },

    /* Huella gigante: pisada tridactila hundida en el barro
       con un charquito de agua en el talon */
    "🐾": { w: 58, h: 53, svg: dd(`
      <defs>
        <linearGradient id="dobBarro" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8d6e63"/><stop offset="100%" stop-color="#5d4037"/></linearGradient>
        <linearGradient id="dobCharco" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#aed9f2"/><stop offset="100%" stop-color="#5b93bd"/></linearGradient>
      </defs>
      <path d="M50 6 Q82 8 92 34 Q100 58 82 76 Q60 90 34 82 Q8 72 8 46 Q10 18 50 6 Z" fill="url(#dobBarro)"/>
      <ellipse cx="50" cy="26" rx="8" ry="15" fill="#3e2a20"/>
      <ellipse cx="30" cy="36" rx="7" ry="13" fill="#3e2a20" transform="rotate(-28 30 36)"/>
      <ellipse cx="70" cy="36" rx="7" ry="13" fill="#3e2a20" transform="rotate(28 70 36)"/>
      <path d="M34 48 Q50 40 66 48 Q74 60 62 70 Q50 78 38 70 Q26 60 34 48 Z" fill="#3e2a20"/>
      <ellipse cx="50" cy="62" rx="11" ry="6" fill="url(#dobCharco)"/>
      <path d="M44 60 Q49 58 54 60" stroke="#eaf6ff" stroke-width="2" fill="none" stroke-linecap="round" opacity=".9"/>
      <circle cx="18" cy="24" r="2.5" fill="#5d4037"/><circle cx="84" cy="58" r="2" fill="#5d4037"/>`, "0 0 100 92") },

    /* Peces antiguos: dos pececillos acorazados con su placa
       osea en la cabeza, nadando en sentidos opuestos */
    "🐟": { w: 74, h: 48, svg: dd(`
      <defs>
        <linearGradient id="dobPez" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8fb3c9"/><stop offset="100%" stop-color="#486f8e"/></linearGradient>
        <linearGradient id="dobPez2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#b0c49a"/><stop offset="100%" stop-color="#6b8452"/></linearGradient>
      </defs>
      <path d="M14 26 L2 16 L6 26 L2 36 Z" fill="#3c5c77"/>
      <path d="M44 12 L50 2 L58 11 Z" fill="#3c5c77"/>
      <path d="M12 26 Q26 10 52 10 Q78 12 88 26 Q78 40 52 42 Q26 42 12 26 Z" fill="url(#dobPez)"/>
      <path d="M58 40 L52 48 L64 44 Z" fill="#3c5c77"/>
      <path d="M26 20 Q30 26 26 32 M36 18 Q40 26 36 34 M46 16 Q50 26 46 36" stroke="#3c5c77" stroke-width="1.8" fill="none" opacity=".6"/>
      <path d="M62 11 Q78 13 88 26 Q78 39 62 41 Q57 26 62 11 Z" fill="#35566e"/>
      <circle cx="76" cy="22" r="3.6" fill="#0e2230"/><circle cx="77.2" cy="20.8" r="1.2" fill="#fff"/>
      <path d="M86 30 Q83 32 80 31" stroke="#0e2230" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      <circle cx="96" cy="14" r="2.4" fill="#bcd8e8" opacity=".8"/><circle cx="102" cy="8" r="1.7" fill="#bcd8e8" opacity=".6"/>
      <path d="M112 60 L120 52 L117 60 L120 68 Z" fill="#516b3e"/>
      <path d="M84 49 L79 42 L73 49 Z" fill="#516b3e"/>
      <path d="M114 60 Q102 48 82 48 Q60 48 52 60 Q60 72 82 72 Q102 72 114 60 Z" fill="url(#dobPez2)"/>
      <path d="M92 53 Q89 60 92 67 M100 54 Q97 60 100 66" stroke="#516b3e" stroke-width="1.6" fill="none" opacity=".6"/>
      <path d="M66 49 Q56 52 52 60 Q56 68 66 71 Q70 60 66 49 Z" fill="#4a6338"/>
      <circle cx="61" cy="57" r="2.8" fill="#182310"/><circle cx="61.9" cy="56.1" r=".9" fill="#fff"/>
      <circle cx="44" cy="50" r="2" fill="#cfe0c2" opacity=".8"/><circle cx="39" cy="44" r="1.4" fill="#cfe0c2" opacity=".6"/>`, "0 0 120 78") },

    /* El gran fosil: esqueleto parcial de dino en una losa de
       piedra, con craneo, costillas, patita y cola */
    "🦴": { w: 80, h: 57, svg: dd(`
      <defs><linearGradient id="dobLosa" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#b8a998"/><stop offset="100%" stop-color="#7a6a58"/></linearGradient></defs>
      <path d="M14 24 Q12 10 28 10 L104 6 Q122 4 124 18 L126 68 Q128 84 110 86 L26 88 Q12 90 12 74 Z" fill="url(#dobLosa)"/>
      <path d="M18 66 L34 60 M108 22 L118 30 M96 78 L104 70" stroke="#5f5142" stroke-width="2" opacity=".5" stroke-linecap="round"/>
      <path d="M24 40 Q20 28 32 26 Q46 24 48 34 L46 40 L38 42 L36 48 L28 48 Q22 48 24 40 Z" fill="#f2e7cd"/>
      <circle cx="33" cy="33" r="3.2" fill="#6e5f4e"/><circle cx="45" cy="36" r="1.3" fill="#6e5f4e"/>
      <path d="M48 34 Q72 24 94 32 Q110 38 116 52" stroke="#f2e7cd" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M58 28 Q54 44 62 54 M70 26 Q66 44 74 54 M82 27 Q78 44 86 52 M94 31 Q92 44 100 50" stroke="#f2e7cd" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M116 52 Q120 62 112 72" stroke="#f2e7cd" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M66 60 L60 74 M60 74 L70 78" stroke="#f2e7cd" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <circle cx="66" cy="60" r="2.2" fill="#f2e7cd"/><circle cx="60" cy="74" r="2.2" fill="#f2e7cd"/>`, "0 0 130 92") },

    /* Ambar: gota dorada translucida con un mosquito dentro,
       burbujitas y un brillo en el borde */
    "🟠": { w: 46, h: 55, svg: dd(`
      <defs><linearGradient id="dobAmbar" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffd54f"/><stop offset="100%" stop-color="#ef6c00"/></linearGradient></defs>
      <path d="M42 6 Q64 32 70 56 Q74 82 42 92 Q10 82 14 56 Q20 32 42 6 Z" fill="url(#dobAmbar)" stroke="#c65d00" stroke-width="2" opacity=".95"/>
      <path d="M42 18 Q58 38 61 56 Q63 74 42 81 Q21 74 23 56 Q26 38 42 18 Z" fill="#ffe49c" opacity=".45"/>
      <ellipse cx="44" cy="50" rx="8" ry="3" fill="#fff" opacity=".5" transform="rotate(-18 44 50)"/>
      <ellipse cx="47" cy="53" rx="8" ry="2.6" fill="#fff" opacity=".35" transform="rotate(-6 47 53)"/>
      <ellipse cx="46" cy="60" rx="7" ry="3.4" fill="#4e342e" transform="rotate(24 46 60)"/>
      <circle cx="39" cy="55" r="3.4" fill="#3e2723"/>
      <circle cx="34.5" cy="52.5" r="2.2" fill="#3e2723"/><circle cx="34" cy="52" r=".7" fill="#fff" opacity=".8"/>
      <path d="M33 53 L29 55" stroke="#3e2723" stroke-width="1" stroke-linecap="round"/>
      <path d="M38 58 L33 63 M41 59 L38 65 M44 60 L42 66" stroke="#3e2723" stroke-width="1" fill="none" stroke-linecap="round"/>
      <path d="M28 30 Q23 42 24 52" stroke="#fff" stroke-width="4.5" fill="none" stroke-linecap="round" opacity=".65"/>
      <circle cx="32" cy="24" r="2" fill="#fff" opacity=".8"/>
      <circle cx="52" cy="44" r="1.6" fill="#fff" opacity=".4"/><circle cx="49" cy="70" r="1.3" fill="#fff" opacity=".35"/>`, "0 0 84 100") },

    /* Cristales brillantes: racimo morado sobre roca,
       con facetas claras y destellos de cuatro puntas */
    "💎": { w: 62, h: 56, svg: dd(`
      <defs>
        <linearGradient id="dobCristal" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ce93d8"/><stop offset="100%" stop-color="#7b1fa2"/></linearGradient>
        <linearGradient id="dobCristal2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#b39ddb"/><stop offset="100%" stop-color="#512da8"/></linearGradient>
        <linearGradient id="dobRoca" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#9e9389"/><stop offset="100%" stop-color="#5f564d"/></linearGradient>
      </defs>
      <path d="M28 36 L40 48 L37 78 L23 78 L18 50 Z" fill="url(#dobCristal2)"/>
      <path d="M84 32 L94 50 L89 78 L73 78 L71 46 Z" fill="url(#dobCristal2)"/>
      <path d="M55 8 L68 32 L64 78 L46 78 L42 32 Z" fill="url(#dobCristal)"/>
      <path d="M52 58 L61 66 L58 82 L47 82 L44 66 Z" fill="#e1bee7"/>
      <path d="M55 8 L53 78 M28 36 L27 78 M84 32 L82 78" stroke="#f3e5f5" stroke-width="2" opacity=".55" fill="none"/>
      <path d="M12 84 Q18 70 36 72 L76 72 Q94 70 100 84 Q102 92 88 94 L24 94 Q10 92 12 84 Z" fill="url(#dobRoca)"/>
      <path d="M20 18 L22 24 L28 26 L22 28 L20 34 L18 28 L12 26 L18 24 Z" fill="#fff" opacity=".9"/>
      <path d="M92 12 L93.5 16.5 L98 18 L93.5 19.5 L92 24 L90.5 19.5 L86 18 L90.5 16.5 Z" fill="#fff" opacity=".8"/>
      <circle cx="66" cy="22" r="1.6" fill="#fff" opacity=".8"/><circle cx="38" cy="56" r="1.4" fill="#fff" opacity=".6"/>`, "0 0 110 100") }
  };

  /* Solo rellena los POIs que siguen en emoji plano: los
     animales ya llegan dibujados de 63-dinos-icons.js */
  THEMES.dinos.content.explore.pois.forEach(p => {
    const ic = ICONS[p.emoji];
    if (ic && !p.svg) { p.svg = ic.svg; p.iw = ic.w; p.ih = ic.h; }
  });
})();
