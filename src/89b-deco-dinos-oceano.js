"use strict";
/* ============================================================
   Escenografía ampliada de dos mapas: DINOSAURIOS y OCÉANO.
   Envuelve la deco que ya existe (60-deco.js, 88-dinos-extra.js
   y 62-oceano-icons.js) sin tocarla: lo nuevo se pinta DETRÁS,
   como fondo, y el decorado de siempre queda DELANTE.
   Los ids de degradados van prefijados (dno..., ocn...) para no
   chocar con los de ningún otro mapa.
   ============================================================ */

(function () {

  /* ---------- utilidades compartidas ---------- */

  /* coordenadas enteras y escalas con dos decimales: el SVG pesa mucho menos */
  const n = v => Math.round(v);
  const q = v => Math.round(v * 100) / 100;

  /* azar reproducible: el paisaje sale siempre igual */
  const rnd = i => { const v = Math.sin(i * 12.9898 + 4.1) * 43758.5453; return v - Math.floor(v); };

  /* una curva suave a partir de [punto, control, punto, control, punto...] */
  const trazo = p => {
    let d = "M" + p[0][0] + " " + p[0][1];
    for (let i = 1; i + 1 < p.length; i += 2) d += "Q" + p[i][0] + " " + p[i][1] + " " + p[i + 1][0] + " " + p[i + 1][1];
    return d;
  };

  /* la altura de esa misma curva en una x concreta */
  const alturaEn = (p, x) => {
    for (let i = 1; i + 1 < p.length; i += 2) {
      const x0 = p[i - 1][0], x1 = p[i + 1][0];
      if (x < x0 || x > x1) continue;
      let a = 0, b = 1;
      for (let k = 0; k < 22; k++) {
        const t = (a + b) / 2, u = 1 - t;
        if (u * u * x0 + 2 * u * t * p[i][0] + t * t * x1 < x) a = t; else b = t;
      }
      const t = (a + b) / 2, u = 1 - t;
      return u * u * p[i - 1][1] + 2 * u * t * p[i][1] + t * t * p[i + 1][1];
    }
    return x <= p[0][0] ? p[0][1] : p[p.length - 1][1];
  };

  /* cajas de reserva alrededor de cada punto de interés.
     k abre o cierra el margen; etiqueta añade el sitio del rótulo de debajo */
  const reservas = (e, k, etiqueta) => (e.pois || []).map(p => {
    const z = p.size || 1;
    const w = (p.iw || 46 * z) * k, h = (p.ih || 46 * z) * k;
    return [p.x - w / 2, p.y - h / 2, w, h + (etiqueta ? 44 : 0)];
  });

  /* ¿queda hueco aquí, lejos de los iconos? */
  const hueco = (cajas, x, y, w, h, m) => {
    const g = m === undefined ? 16 : m;
    return !cajas.some(c => x < c[0] + c[2] + g && x + w > c[0] - g && y < c[1] + c[3] + g && y + h > c[1] - g);
  };

  /* le quita a una deco ya montada su <svg> exterior */
  const interior = s => String(s || "").replace(/^[\s\S]*?<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "");

  /* una cordillera dentada, con o sin nieve en las cumbres */
  const cordillera = (x0, x1, base, alto, color, paso, semilla, nieve) => {
    let d = "M" + x0 + " " + base, capas = "";
    for (let x = x0, i = 0; x < x1; x += paso, i++) {
      const pico = n(base - alto * (0.52 + 0.48 * rnd(i + semilla)));
      const valle = n(base - alto * 0.2 * rnd(i + semilla + 31));
      d += "L" + n(x + paso / 2) + " " + pico + "L" + n(x + paso) + " " + valle;
      if (nieve) {
        const c = n(x + paso / 2), g = n(alto * 0.13 + 8);
        capas += `M${c} ${pico}L${n(c + g)} ${n(pico + g * 1.5)}q${n(-g * 0.5)} ${n(-g * 0.4)} ${n(-g * 0.9)} ${n(g * 0.15)}q${n(-g * 0.45)} ${n(g * 0.35)} ${n(-g * 1.1)} ${n(-g * 0.15)}Z`;
      }
    }
    return `<path d="${d}L${x1} ${base + 90}L${x0} ${base + 90}Z" fill="${color}"/>` +
      (capas ? `<path d="${capas}" fill="#fff" opacity=".92"/>` : "");
  };


  /* ============================================================
     DINOSAURIOS: un paisaje prehistórico continuo que termina
     en la edad de hielo, con la transición de clima suavizada.
     ============================================================ */
  (function () {
    const orig = THEMES.dinos.content.explore.deco;
    THEMES.dinos.content.explore.deco = function (e) {
      const previo = orig ? orig.call(this, e) : "";
      /* dos niveles de reserva: los detalles pequeños se apartan mucho de los
         iconos; la vegetación de fondo solo evita cruzarles por encima */
      const finas = reservas(e, 1.5, true), anchas = reservas(e, 1.05, false);
      const lib = (x, y, w, h) => hueco(finas, x, y, w, h);
      const eje = (x, y, w, h) => hueco(anchas, x, y, w, h, 0);
      const medio = (x, y, w, h) => hueco(anchas, x, y, w, h, 24);
      let s = "";

      /* ---------- degradados propios ---------- */
      s += `<defs>
        <linearGradient id="dnoCielo" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffeed0"/><stop offset="34%" stop-color="#ffd8ab"/>
          <stop offset="66%" stop-color="#ffc596"/><stop offset="100%" stop-color="#f7dcae"/></linearGradient>
        <linearGradient id="dnoFrio" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#d6ecf8" stop-opacity="0"/><stop offset="66%" stop-color="#d6ecf8" stop-opacity="0"/>
          <stop offset="79%" stop-color="#d2eaf7" stop-opacity=".5"/><stop offset="90%" stop-color="#bfe0f2" stop-opacity=".84"/>
          <stop offset="100%" stop-color="#aed6ee" stop-opacity=".95"/></linearGradient>
        <linearGradient id="dnoSelva" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#82b355"/><stop offset="100%" stop-color="#3d6a24"/></linearGradient>
        <linearGradient id="dnoBarro" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ac8859"/><stop offset="100%" stop-color="#6b4a31"/></linearGradient>
        <radialGradient id="dnoLago" cx="50%" cy="32%" r="68%">
          <stop offset="0%" stop-color="#c6ecfa"/><stop offset="100%" stop-color="#55a8d4"/></radialGradient>
        <linearGradient id="dnoMar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#5cb9e2"/><stop offset="100%" stop-color="#1b6c9c"/></linearGradient>
        <linearGradient id="dnoRoca" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#a89179"/><stop offset="100%" stop-color="#6b5544"/></linearGradient>
        <linearGradient id="dnoNieve" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fff"/><stop offset="100%" stop-color="#cee5f2"/></linearGradient>
        <radialGradient id="dnoHumo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#e9e2d9" stop-opacity=".7"/><stop offset="100%" stop-color="#e9e2d9" stop-opacity="0"/></radialGradient>
      </defs>`;

      /* ---------- CIELO: cálido a la izquierda, frío en la edad de hielo ---------- */
      s += `<rect width="4700" height="1100" fill="url(#dnoCielo)"/>`;
      /* el resplandor del sol que ya existe, sin repetir el disco */
      s += `<circle cx="170" cy="120" r="300" fill="rgba(255,224,130,.2)"/>
        <circle cx="170" cy="120" r="190" fill="rgba(255,236,170,.26)"/>
        <circle cx="3940" cy="70" r="180" fill="rgba(255,244,196,.2)"/>`;
      /* la luz baja del sol, en rayos muy suaves */
      let rayos = "";
      for (let i = 0; i < 5; i++) {
        const a = (-34 + i * 17) * Math.PI / 180, b = (-27 + i * 17) * Math.PI / 180;
        rayos += `M170 120L${n(170 + 900 * Math.cos(a))} ${n(160 + 900 * Math.sin(a))}L${n(170 + 900 * Math.cos(b))} ${n(160 + 900 * Math.sin(b))}Z`;
      }
      s += `<path d="${rayos}" fill="rgba(255,238,180,.12)"/>`;
      /* el frío entra por la derecha, poco a poco */
      s += `<rect width="4700" height="1100" fill="url(#dnoFrio)"/>
        <ellipse cx="4360" cy="150" rx="330" ry="170" fill="rgba(255,255,255,.3)"/>`;

      /* nubes: gordas y cálidas en la selva, finas y pálidas en el hielo */
      const nube = (x, y, k, c) => `<g transform="translate(${x} ${y}) scale(${k})" fill="${c}">
        <ellipse rx="96" ry="33"/><ellipse cx="-62" cy="12" rx="50" ry="23"/><ellipse cx="56" cy="14" rx="56" ry="25"/>
        <ellipse cx="-10" cy="-25" rx="52" ry="29"/><ellipse cx="34" cy="-16" rx="38" ry="22"/></g>`;
      [[420, 176, .95, "#fffaf0", .9, 62, 46], [1180, 132, .7, "#fff6e6", .82, 78, 58],
      [1860, 200, 1.05, "#fffbf2", .78, 54, 40], [2480, 148, .78, "#fff7e8", .7, 88, 64]].forEach(c => {
        s += `<g opacity="${c[4]}"><animateTransform attributeName="transform" type="translate" values="0 0;${c[5]} 0;0 0" dur="${c[6]}s" repeatCount="indefinite"/>${nube(c[0], c[1], c[2], c[3])}</g>`;
      });
      [[4080, 176, .62, "#fff", .72], [4470, 122, .8, "#f4fbff", .66], [4280, 300, .5, "#eef8ff", .5]].forEach(c => {
        s += `<g opacity="${c[4]}">${nube(c[0], c[1], c[2], c[3])}</g>`;
      });

      /* ---------- FONDO LEJANO: cordilleras y volcanes humeantes ---------- */
      s += cordillera(-40, 2760, 690, 250, "rgba(146,150,120,.42)", 200, 3, false);
      s += cordillera(-40, 2760, 720, 175, "rgba(104,124,86,.55)", 150, 11, false);

      /* volcanes de fondo: humo suave, nada de lava */
      const volcan = (cx, cima, ancho, tono, sombra) => {
        const base = 800, m = ancho / 2;
        return `<path d="M${n(cx - m)} ${base}L${cx - 26} ${cima}q26 -13 52 0L${n(cx + m)} ${base}Z" fill="${tono}"/>
          <path d="M${cx + 8} ${cima + 4}L${n(cx + m)} ${base}L${n(cx + m * 0.34)} ${base}Z" fill="${sombra}"/>
          <path d="M${cx - 26} ${cima}q26 -13 52 0q-14 14 -26 14q-13 0 -26 -14Z" fill="rgba(60,44,36,.55)"/>`;
      };
      const humo = (cx, cy, k, dur, retardo) => `<g opacity=".62">
        <animateTransform attributeName="transform" type="translate" values="0 0;${n(22 * k)} ${n(-120 * k)};${n(46 * k)} ${n(-230 * k)}" dur="${dur}s" begin="${retardo}s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0;.62;.5;0" dur="${dur}s" begin="${retardo}s" repeatCount="indefinite"/>
        <g fill="url(#dnoHumo)"><circle cx="${cx}" cy="${cy}" r="${n(40 * k)}"/>
        <circle cx="${n(cx + 26 * k)}" cy="${n(cy - 40 * k)}" r="${n(30 * k)}"/>
        <circle cx="${n(cx - 20 * k)}" cy="${n(cy - 66 * k)}" r="${n(24 * k)}"/></g></g>`;
      s += volcan(620, 428, 520, "#7b6a5c", "rgba(45,35,28,.28)") + humo(620, 400, 1, 15, 0);
      s += volcan(1520, 392, 620, "#6f5f52", "rgba(45,35,28,.3)") + humo(1520, 360, 1.18, 18, 3);
      s += volcan(2470, 470, 480, "#84715f", "rgba(45,35,28,.26)") + humo(2470, 444, .85, 13, 6);

      /* ---------- LA SELVA: coníferas primitivas y helechos gigantes ---------- */
      const suelo = [[-40, 668], [260, 588], [520, 656], [800, 702], [1100, 664],
      [1400, 606], [1700, 686], [2000, 762], [2300, 676], [2480, 690], [2660, 706]];

      /* araucaria: tronco recto y pisos de copa, como las coníferas de entonces */
      const conifera = (x, base, k, c1, c2) => {
        let a = "", b = "";
        for (let i = 0; i < 5; i++) {
          const y = -246 + i * 46, w = 44 + i * 21;
          const d = `M0 ${y - 44}L${w} ${y + 12}q${n(-w * 0.42)} 14 ${-w} 4L${-w} ${y + 12}q${n(w * 0.42)} 14 ${w} -4Z`;
          if (i % 2) b += d; else a += d;
        }
        return `<g transform="translate(${n(x)} ${n(base)}) scale(${q(k)})">
          <rect x="-13" y="-230" width="26" height="238" rx="10" fill="#6d5138"/>
          <path d="${a}" fill="${c1}"/><path d="${b}" fill="${c2}"/></g>`;
      };
      /* helecho gigante: frondas curvas abriéndose desde un tronco corto */
      const helecho = (x, base, k, c) => {
        let d = "";
        for (let i = 0; i < 7; i++) {
          const a = (-160 + i * 22.5) * Math.PI / 180, r = 108 + 16 * rnd(i + x / 97);
          const px = n(r * Math.cos(a)), py = n(-104 + r * Math.sin(a) * 0.72);
          d += `M0 -104Q${n(px * 0.5)} ${n(py - 30)} ${px} ${py}`;
        }
        return `<g transform="translate(${n(x)} ${n(base)}) scale(${q(k)})">
          <path d="M-9 6q4 -74 9 -104q6 30 10 104Z" fill="#7a5c3c"/>
          <path d="${d}" stroke="${c}" stroke-width="13" fill="none" stroke-linecap="round"/></g>`;
      };
      /* cicadácea baja: una roseta de hojas duras */
      const cicada = (x, base, k, c) => {
        let d = "";
        for (let i = 0; i < 9; i++) {
          const a = (-172 + i * 18.5) * Math.PI / 180;
          d += `M0 0L${n(64 * Math.cos(a))} ${n(56 * Math.sin(a))}`;
        }
        return `<g transform="translate(${n(x)} ${n(base)}) scale(${q(k)})">
          <ellipse cy="4" rx="20" ry="10" fill="#6b5138"/>
          <path d="${d}" stroke="${c}" stroke-width="9" stroke-linecap="round"/></g>`;
      };

      /* la masa de selva del fondo, en dos tonos, sin cruzar por encima de los iconos */
      let lejos = "", cerca = "";
      for (let x = 30, i = 0; x < 2620; x += 84, i++) {
        const base = alturaEn(suelo, x) - 6, r = rnd(i + 61);
        if (r < 0.52 && eje(x - 20, base - 260, 40, 268)) lejos += conifera(x, base + 14, 0.62 + 0.16 * rnd(i + 5), "#4f7f37", "#5f9040");
        else if (r < 0.86 && eje(x - 20, base - 130, 40, 138)) lejos += helecho(x, base + 10, 0.66 + 0.18 * rnd(i + 17), "#548b3a");
      }
      for (let x = 70, i = 0; x < 2620; x += 122, i++) {
        const base = alturaEn(suelo, x) + 34, r = rnd(i + 129);
        if (r < 0.46 && eje(x - 24, base - 320, 48, 328)) cerca += conifera(x, base, 0.86 + 0.2 * rnd(i + 9), "#3f7030", "#4d8437");
        else if (r < 0.88 && eje(x - 24, base - 170, 48, 178)) cerca += helecho(x, base, 0.9 + 0.22 * rnd(i + 23), "#3f7d2f");
      }
      s += `<g opacity=".78">${lejos}</g>`;

      /* ---------- EL SUELO: barro, hierba y estratos ---------- */
      s += `<path d="${trazo(suelo)}L2660 1100L-40 1100Z" fill="url(#dnoSelva)"/>`;
      /* la franja de barro húmedo donde quedan las huellas */
      const barro = suelo.map(p => [p[0], p[1] + 62]);
      s += `<path d="${trazo(barro)}L2660 1100L-40 1100Z" fill="url(#dnoBarro)"/>
        <path d="${trazo(barro)}" stroke="rgba(255,232,190,.28)" stroke-width="7" fill="none"/>`;
      /* matas de hierba en el borde verde, todas en un solo trazo */
      let hierba = "";
      for (let x = 20, i = 0; x < 2640; x += 66, i++) {
        const y = n(alturaEn(suelo, x) + 8 + 14 * rnd(i + 71));
        if (!eje(x - 14, y - 26, 28, 30)) continue;
        hierba += `M${x} ${y}q-6 -20 -14 -28M${x + 6} ${y}q1 -24 5 -32M${x + 13} ${y}q7 -18 15 -24`;
      }
      if (hierba) s += `<path d="${hierba}" stroke="#4a8331" stroke-width="4.6" fill="none" stroke-linecap="round" opacity=".85"/>`;

      /* la selva cercana va delante del suelo */
      s += cerca;
      [[190, 1], [900, .85], [1660, 1.05], [2260, .9], [640, .7]].forEach(c => {
        const base = alturaEn(barro, c[0]) + 26;
        if (eje(c[0] - 70, base - 70, 140, 76)) s += cicada(c[0], base, c[1], "#4f8a34");
      });

      /* huellas grandes de tres dedos, en dos rastros que cruzan el barro */
      const huella = (x, y, k, gir, op) => `<g transform="translate(${n(x)} ${n(y)}) rotate(${gir}) scale(${q(k)})">
        <path d="M0 2q-21 -7 -23 -25q-2 -19 23 -22q25 3 23 22q-2 18 -23 25ZM-22 -44q-10 -18 2 -26q12 -7 15 11q3 12 -4 17ZM0 -53q-9 -20 2 -29q12 -6 14 13q1 14 -5 18ZM22 -44q10 -18 -2 -26q-12 -7 -15 11q-3 12 4 17Z" fill="rgba(56,36,20,${op})"/>
        <path d="M-18 4q18 8 36 0" stroke="rgba(226,196,148,.5)" stroke-width="4" fill="none" stroke-linecap="round"/></g>`;
      for (let i = 0; i < 7; i++) {
        const x = 240 + i * 172, y = alturaEn(barro, x) + 40 + (i % 2 ? 26 : 0);
        if (medio(x - 30, y - 56, 60, 66)) s += huella(x, y, 0.92, i % 2 ? 12 : -8, .3);
      }
      for (let i = 0; i < 5; i++) {
        const x = 1640 + i * 196, y = alturaEn(barro, x) + 64 + (i % 2 ? -22 : 0);
        if (medio(x - 36, y - 62, 72, 72)) s += huella(x, y, 1.14, i % 2 ? -14 : 10, .26);
      }

      /* rocas con estratos, repartidas por el barro */
      const roca = (x, y, w, h, tono) => `<g>
        <path d="M${n(x - w)} ${n(y)}q${n(w * 0.16)} ${n(-h * 1.05)} ${n(w * 0.72)} ${n(-h * 1.02)}q${n(w * 0.66)} 2 ${n(w * 0.86)} ${n(h * 0.7)}q${n(w * 0.2)} ${n(h * 0.3)} ${n(w * 0.42)} ${n(h * 0.32)}Z" fill="${tono}"/>
        <path d="M${n(x - w * 0.78)} ${n(y - h * 0.34)}q${n(w * 0.6)} ${n(-h * 0.12)} ${n(w * 1.2)} ${n(h * 0.05)}" stroke="rgba(255,240,214,.26)" stroke-width="6" fill="none"/>
        <path d="M${n(x - w * 0.6)} ${n(y - h * 0.62)}q${n(w * 0.5)} ${n(-h * 0.1)} ${n(w * 0.98)} ${n(h * 0.03)}" stroke="rgba(70,50,34,.3)" stroke-width="5" fill="none"/></g>`;
      [[430, 60, 46], [1230, 76, 58], [1900, 54, 40], [2420, 88, 66], [760, 44, 32], [2080, 64, 48]].forEach((r, i) => {
        const y = alturaEn(barro, r[0]) + 74;
        if (eje(r[0] - r[1], y - r[2] * 1.1, r[1] * 2, r[2] * 1.3)) s += roca(r[0], y, r[1], r[2], i % 2 ? "url(#dnoRoca)" : "#8b7460");
      });

      /* ---------- EL LAGO: una lámina ancha con su orilla y sus reflejos ---------- */
      s += `<ellipse cx="1800" cy="768" rx="392" ry="104" fill="#b79a6c" opacity=".9"/>
        <ellipse cx="1800" cy="772" rx="356" ry="88" fill="url(#dnoLago)"/>
        <ellipse cx="1800" cy="772" rx="356" ry="88" fill="none" stroke="rgba(255,248,225,.4)" stroke-width="7"/>`;
      /* los reflejos de las coníferas, alargados y quietos */
      [[1610, 46], [1712, 34], [1900, 40], [2010, 30]].forEach(r => {
        s += `<path d="M${r[0]} 730q-${n(r[1] * 0.3)} 34 0 68q${n(r[1] * 0.3)} 30 0 60" stroke="rgba(52,96,44,.22)" stroke-width="${r[1]}" fill="none" stroke-linecap="round"/>`;
      });
      s += `<g stroke="rgba(255,255,255,.55)" stroke-width="5" fill="none" stroke-linecap="round">
        <path d="M1616 760q30 -13 60 0M1900 800q30 -13 60 0M1760 736q26 -12 52 0"><animate attributeName="opacity" values=".8;.28;.8" dur="5.4s" repeatCount="indefinite"/></path>
        <path d="M1700 812q28 -12 56 0M2000 752q26 -12 52 0M1560 792q24 -11 48 0"><animate attributeName="opacity" values=".3;.8;.3" dur="5.4s" repeatCount="indefinite"/></path></g>`;
      /* juncos en la orilla, todos en un trazo */
      let juncos = "";
      [[1470, 780], [1508, 792], [2118, 782], [2154, 796], [1560, 828], [2060, 830]].forEach(j => {
        juncos += `M${j[0]} ${j[1]}q-5 -42 -14 -58M${j[0] + 8} ${j[1]}q2 -46 9 -64M${j[0] + 17} ${j[1]}q8 -38 17 -50`;
      });
      s += `<path d="${juncos}" stroke="#4d8a3b" stroke-width="5" fill="none" stroke-linecap="round"/>`;

      /* ---------- EL MAR PREHISTÓRICO: horizonte, islas y espuma ---------- */
      s += `<rect x="2600" y="694" width="1420" height="406" fill="url(#dnoMar)"/>
        <path d="M2600 694Q3300 662 4020 694L4020 726Q3300 694 2600 726Z" fill="rgba(214,242,255,.55)"/>`;
      /* islas volcánicas lejanas, asomando por encima del horizonte */
      [[2790, 612, 190], [3140, 640, 150], [3520, 596, 230], [3810, 636, 160]].forEach((is, i) => {
        s += `<path d="M${n(is[0] - is[2])} 700q${n(is[2] * 0.42)} ${n(is[1] - 700)} ${is[2]} ${n(is[1] - 700)}q${n(is[2] * 0.58)} 0 ${is[2]} ${n(700 - is[1])}Z" fill="rgba(88,104,96,${0.3 + 0.08 * i})"/>
          <path d="M${n(is[0] - is[2] * 0.3)} ${is[1] + 18}q${n(is[2] * 0.3)} -22 ${n(is[2] * 0.6)} 0" stroke="rgba(255,255,255,.24)" stroke-width="6" fill="none"/>`;
      });
      /* la espuma de las olas, dispersa por todo el mar */
      let olas = "";
      for (let i = 0; i < 32; i++) {
        const x = n(2660 + rnd(i + 201) * 1300), y = n(748 + rnd(i + 307) * 330);
        if (!eje(x - 30, y - 12, 60, 24)) continue;
        olas += `M${x} ${y}q${n(16 + 10 * rnd(i + 41))} -12 ${n(34 + 16 * rnd(i + 53))} 0`;
      }
      if (olas) s += `<path d="${olas}" stroke="rgba(255,255,255,.42)" stroke-width="5" fill="none" stroke-linecap="round"/>`;

      /* ---------- LA EDAD DE HIELO: nieve, hielo azulado y pinos ---------- */
      s += cordillera(3820, 4740, 780, 500, "rgba(163,196,214,.85)", 230, 77, true);
      s += cordillera(3900, 4740, 830, 300, "rgba(196,222,236,.9)", 165, 91, true);
      /* el cabo nevado que hace de bisagra entre el mar y el hielo */
      s += `<path d="M3640 720Q3760 548 3900 566Q4030 582 4090 720Z" fill="url(#dnoNieve)"/>
        <path d="M3700 700Q3800 596 3888 592Q3830 640 3796 700Z" fill="rgba(150,196,222,.4)"/>`;
      /* pinos nevados: en el cabo y, más pequeños, en la loma del fondo */
      const pino = (x, base, k) => {
        let a = "", b = "", capa = "";
        for (let i = 0; i < 4; i++) {
          const y = -34 - i * 40, w = 62 - i * 12;
          const d = `M0 ${y - 62}L${w} ${y}q${n(-w * 0.4)} 13 ${-w} 5L${-w} ${y}q${n(w * 0.4)} 13 ${w} -5Z`;
          if (i % 2) b += d; else a += d;
          capa += `M0 ${y - 62}L${n(w * 0.55)} ${y - 24}q${n(-w * 0.3)} 9 ${n(-w * 0.9)} 3Z`;
        }
        return `<g transform="translate(${n(x)} ${n(base)}) scale(${q(k)})">
          <rect x="-8" y="-30" width="16" height="36" rx="6" fill="#5d4a38"/>
          <path d="${a}" fill="#376b4e"/><path d="${b}" fill="#2f5f46"/>
          <path d="${capa}" fill="rgba(255,255,255,.8)"/></g>`;
      };
      [[3706, 690, .58], [3790, 664, .72], [3878, 646, .66], [3960, 690, .5]].forEach(p => {
        if (eje(p[0] - 30, p[1] - 220, 60, 226)) s += pino(p[0], p[1], p[2]);
      });
      /* la loma nevada del fondo, con su bosquecillo, se asoma entre los glaciares */
      const loma = [[3900, 742], [4120, 668], [4310, 716], [4500, 662], [4740, 706]];
      s += `<path d="${trazo(loma)}L4740 1100L3900 1100Z" fill="rgba(226,241,249,.95)"/>`;
      /* a esa distancia los pinos son solo su silueta: todos en un trazo */
      let bosque = "";
      for (let x = 3940, i = 0; x < 4720; x += 62, i++) {
        const y = n(alturaEn(loma, x) + 6), k = 0.5 + 0.35 * rnd(i + 143), h = n(96 * k), w = n(26 * k);
        if (!eje(x - w, y - h, w * 2, h + 6)) continue;
        bosque += `M${x} ${y - h}l${w} ${n(h * 0.55)}l${n(-w * 0.5)} 0l${n(w * 0.9)} ${n(h * 0.45)}l${n(-w * 2.8)} 0l${n(w * 0.9)} ${n(-h * 0.45)}l${n(-w * 0.5)} 0Z`;
      }
      if (bosque) s += `<path d="${bosque}" fill="#38684d" opacity=".88"/>`;
      /* la llanura de nieve, con sus lomas suaves y algún bloque de hielo */
      s += `<path d="${trazo([[3880, 866], [4180, 826], [4400, 872], [4600, 842], [4740, 866]])}L4740 1100L3880 1100Z" fill="url(#dnoNieve)"/>`;
      [[4060, 900, 54], [4620, 926, 44], [4300, 946, 62]].forEach(h => {
        s += `<path d="M${h[0] - h[2]} ${h[1]}q${n(h[2] * 0.5)} ${n(-h[2] * 1.1)} ${h[2]} ${n(-h[2] * 0.9)}q${n(h[2] * 0.6)} 6 ${h[2]} ${n(h[2] * 0.9)}Z" fill="#bcdfef" opacity=".9"/>
          <path d="M${n(h[0] - h[2] * 0.4)} ${n(h[1] - h[2] * 0.5)}q${n(h[2] * 0.4)} -14 ${n(h[2] * 0.8)} -2" stroke="rgba(255,255,255,.9)" stroke-width="7" fill="none" stroke-linecap="round"/>`;
      });

      /* nieve cayendo despacio, en dos tandas */
      [[0, 22], [4.5, 27]].forEach((t, g) => {
        let copos = "";
        for (let i = 0; i < 12; i++) copos += `<circle cx="${n(3900 + rnd(i + g * 40 + 401) * 800)}" cy="${n(120 + rnd(i + g * 40 + 503) * 560)}" r="${q(2.6 + 2.4 * rnd(i + g * 40 + 607))}"/>`;
        s += `<g fill="#fff"><animateTransform attributeName="transform" type="translate" values="0 -60;18 300" dur="${t[1]}s" begin="${t[0]}s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0;.8;.7;0" dur="${t[1]}s" begin="${t[0]}s" repeatCount="indefinite"/>${copos}</g>`;
      });

      /* ---------- LIBÉLULAS GIGANTES, lejanas y tranquilas ---------- */
      const libelula = (k, tono) => `<g transform="scale(${k})">
        <ellipse rx="26" ry="4.4" fill="${tono}"/><ellipse cx="24" cy="-1" rx="8" ry="6" fill="${tono}"/>
        <g fill="rgba(210,240,255,.6)">
          <ellipse cx="8" cy="-11" rx="21" ry="6.6" transform="rotate(-16 8 -11)"/>
          <ellipse cx="8" cy="11" rx="21" ry="6.6" transform="rotate(16 8 11)"/>
          <ellipse cx="-12" cy="-9" rx="17" ry="5.4" transform="rotate(-12 -12 -9)"/>
          <ellipse cx="-12" cy="9" rx="17" ry="5.4" transform="rotate(12 -12 9)"/>
          <animate attributeName="opacity" values=".62;.28;.62" dur="0.5s" repeatCount="indefinite"/></g></g>`;
      [["M260 214Q900 148 1520 206Q2050 254 2470 190", 46, 1, "#5b8f6a"],
      ["M2420 176Q1800 236 1200 178Q700 128 220 182", 58, .82, "#7a8f4e"],
      ["M340 268Q1100 320 1760 252Q2260 200 2560 246", 66, .68, "#5f8798"]].forEach(d => {
        s += `<g><animateMotion dur="${d[1]}s" repeatCount="indefinite" rotate="auto" path="${d[0]}"/>${libelula(d[2], d[3])}</g>`;
      });

      /* lo nuevo detrás, lo de siempre delante */
      return decoSvg(s + interior(previo), e.width);
    };
  })();


  /* ============================================================
     OCÉANO: el mar contado por profundidades, de la superficie
     iluminada al abismo con nieve marina.
     ============================================================ */
  (function () {
    const orig = THEMES.oceano.content.explore.deco;
    THEMES.oceano.content.explore.deco = function (e) {
      const previo = orig ? orig.call(this, e) : "";
      const finas = reservas(e, 1.5, true), anchas = reservas(e, 1.05, false);
      const lib = (x, y, w, h) => hueco(finas, x, y, w, h);
      const eje = (x, y, w, h) => hueco(anchas, x, y, w, h, 0);
      let s = "";

      /* la plataforma de arena que ya dibuja el mapa: sirve de guía */
      const plataforma = [[0, 480], [220, 470], [420, 520], [700, 610], [1000, 700],
      [1400, 810], [1800, 900], [2100, 960], [2320, 1000]];
      const fondo = x => alturaEn(plataforma, Math.max(0, Math.min(2320, x)));
      /* la arena del fondo lejano queda un poco más alta: eso da profundidad */
      const banco = plataforma.map(p => [p[0], p[1] - 128]).concat([[2460, 884], [2600, 902]]);

      /* ---------- degradados propios ---------- */
      s += `<defs>
        <linearGradient id="ocnAgua" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#bdefff" stop-opacity=".5"/><stop offset="16%" stop-color="#6cc8ef" stop-opacity=".32"/>
          <stop offset="40%" stop-color="#1877b4" stop-opacity=".28"/><stop offset="66%" stop-color="#083c68" stop-opacity=".42"/>
          <stop offset="86%" stop-color="#021b33" stop-opacity=".66"/><stop offset="100%" stop-color="#000a14" stop-opacity=".8"/></linearGradient>
        <linearGradient id="ocnRayo" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fff" stop-opacity=".3"/><stop offset="55%" stop-color="#dff4ff" stop-opacity=".09"/>
          <stop offset="100%" stop-color="#dff4ff" stop-opacity="0"/></linearGradient>
        <linearGradient id="ocnArena" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#e8d09a"/><stop offset="100%" stop-color="#a98a5c"/></linearGradient>
        <linearGradient id="ocnRoca" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#4e6675"/><stop offset="100%" stop-color="#1d2c38"/></linearGradient>
        <linearGradient id="ocnAbismo" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#00121f" stop-opacity="0"/><stop offset="100%" stop-color="#00060d" stop-opacity=".82"/></linearGradient>
        <radialGradient id="ocnBrillo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#9ff6ff" stop-opacity=".85"/><stop offset="100%" stop-color="#9ff6ff" stop-opacity="0"/></radialGradient>
      </defs>`;

      /* ---------- LA COLUMNA DE AGUA, por profundidades ---------- */
      s += `<rect width="2600" height="1100" fill="url(#ocnAgua)"/>`;

      /* ---------- LA SUPERFICIE: olas y luz entrando ---------- */
      s += `<path d="M0 0H2600V96Q2340 62 2080 96Q1820 130 1560 96Q1300 62 1040 96Q780 130 520 96Q260 62 0 96Z" fill="rgba(198,240,255,.4)"/>`;
      [[0, .5, 26, 9], [14, .3, -22, 12]].forEach(o => {
        let d = `M-40 ${58 + o[0]}`;
        for (let x = -40, i = 0; x < 2640; x += 200, i++) d += `Q${x + 100} ${(i % 2 ? 82 : 34) + o[0]} ${x + 200} ${58 + o[0]}`;
        s += `<g opacity="${o[1]}"><animateTransform attributeName="transform" type="translate" values="0 0;${o[2]} 0;0 0" dur="${o[3]}s" repeatCount="indefinite"/>
          <path d="${d}" stroke="rgba(255,255,255,.7)" stroke-width="5" fill="none" stroke-linecap="round"/></g>`;
      });
      /* la espuma de la cresta, en trocitos */
      let espuma = "";
      for (let i = 0; i < 26; i++) espuma += `M${n(30 + rnd(i + 11) * 2540)} ${n(40 + rnd(i + 29) * 34)}q13 -9 27 0`;
      s += `<path d="${espuma}" stroke="rgba(255,255,255,.5)" stroke-width="4" fill="none" stroke-linecap="round"/>`;
      /* los rayos de sol, anchos y abiertos hacia el fondo */
      [[120, 210, 780], [560, 250, 900], [1120, 200, 860], [1660, 280, 940], [2160, 190, 820]].forEach(r => {
        s += `<polygon points="${r[0]},44 ${r[0] + r[1]},44 ${r[0] + r[1] + 130},${r[2]} ${r[0] + 82},${r[2]}" fill="url(#ocnRayo)"/>`;
      });
      s += `<g opacity=".5"><animate attributeName="opacity" values=".5;.16;.5" dur="7s" repeatCount="indefinite"/>
        <polygon points="330,44 470,44 620,760 460,760" fill="url(#ocnRayo)"/>
        <polygon points="1400,44 1520,44 1680,800 1540,800" fill="url(#ocnRayo)"/></g>`;
      /* cáusticas: la luz temblando justo bajo la superficie */
      let caust = "";
      for (let i = 0; i < 24; i++) {
        caust += `M${n(20 + rnd(i + 91) * 2560)} ${n(120 + rnd(i + 137) * 190)}q${n(22 + 14 * rnd(i + 7))} ${n(-14 - 8 * rnd(i + 3))} ${n(46 + 22 * rnd(i + 19))} 0`;
      }
      s += `<g><animate attributeName="opacity" values=".9;.4;.9" dur="6.4s" repeatCount="indefinite"/>
        <path d="${caust}" stroke="rgba(224,248,255,.3)" stroke-width="4" fill="none" stroke-linecap="round"/></g>`;

      /* ---------- ZONA MEDIA: bancos de peces lejanos y burbujas ---------- */
      /* un banco entero cabe en un solo trazo */
      const banco2 = (cx, cy, ancho, alto, num, k, dir, c, semilla) => {
        let d = "";
        for (let i = 0; i < num; i++) {
          const x = n(cx + (rnd(i + semilla) - 0.5) * ancho), y = n(cy + (rnd(i + semilla + 50) - 0.5) * alto);
          const z = k * (0.8 + 0.4 * rnd(i + semilla + 90));
          const w = n(21 * z) * dir, t = n(7 * z) * dir, h = n(6 * z), v = n(5 * z);
          d += `M${x} ${y}q${n(w / 2)} ${-h} ${w} 0q${n(-w / 2)} ${h} ${-w} 0ZM${x} ${y}l${-t} ${-v}l0 ${v * 2}Z`;
        }
        return `<path d="${d}" fill="${c}"/>`;
      };
      [[690, 240, 300, 120, 17, 1.05, 1, "rgba(226,246,255,.5)", 211, 34, 21],
      [1250, 300, 340, 140, 20, .9, -1, "rgba(206,236,252,.45)", 307, -40, 26],
      [2030, 650, 260, 120, 14, .8, 1, "rgba(180,220,244,.38)", 419, 30, 19]].forEach(b => {
        /* solo se mira el centro del banco: son peces lejanos y difuminados */
        if (!eje(b[0] - b[2] / 4, b[1] - b[3] / 4, b[2] / 2, b[3] / 2)) return;
        s += `<g><animateTransform attributeName="transform" type="translate" values="0 0;${b[9]} ${n(b[9] / 3)};0 0" dur="${b[10]}s" repeatCount="indefinite"/>${banco2(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7], b[8])}</g>`;
      });

      /* columnas de burbujas subiendo del fondo */
      [[300, 520, 15, 0], [1240, 760, 18, 2.5], [2180, 900, 21, 5]].forEach(col => {
        let aro = "", luz = "";
        for (let i = 0; i < 7; i++) {
          const r = q(4 + 5 * rnd(i + col[0])), cx = n(col[0] + (rnd(i + 13) - 0.5) * 36), cy = col[1] - i * 62;
          aro += `<circle cx="${cx}" cy="${cy}" r="${r}"/>`;
          luz += `<circle cx="${q(cx - r * 0.3)}" cy="${q(cy - r * 0.3)}" r="${q(r * 0.28)}"/>`;
        }
        s += `<g><animateTransform attributeName="transform" type="translate" values="0 40;0 -420" dur="${col[2]}s" begin="${col[3]}s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0;.9;.75;0" dur="${col[2]}s" begin="${col[3]}s" repeatCount="indefinite"/>
          <g fill="none" stroke="rgba(255,255,255,.5)" stroke-width="2.2">${aro}</g>
          <g fill="rgba(255,255,255,.55)">${luz}</g></g>`;
      });

      /* ---------- EL FONDO LEJANO: banco de arena con ondulaciones ---------- */
      s += `<path d="${trazo(banco)}L2600 1100L0 1100Z" fill="url(#ocnArena)" opacity=".9"/>
        <path d="${trazo(banco)}" stroke="rgba(255,246,214,.5)" stroke-width="6" fill="none"/>`;
      /* las ondulaciones de la arena, en la franja que se ve por encima */
      let ondas = "";
      for (let x = 40, i = 0; x < 2560; x += 58, i++) {
        const y0 = alturaEn(banco, x) + 18 + 22 * rnd(i + 151);
        if (y0 > fondo(x) - 10) continue;
        ondas += `M${x} ${n(y0)}q${n(20 + 8 * rnd(i + 3))} ${n(-9 - 4 * rnd(i + 5))} ${n(44 + 10 * rnd(i + 9))} 0`;
      }
      if (ondas) s += `<path d="${ondas}" stroke="rgba(120,92,52,.24)" stroke-width="4" fill="none" stroke-linecap="round"/>`;
      /* guijarros sueltos sobre la franja de arena que se ve */
      let cantos = "";
      for (let x = 70, i = 0; x < 2540; x += 47, i++) {
        const y = alturaEn(banco, x) + 30 + 40 * rnd(i + 233);
        if (y > fondo(x) - 12 || !eje(x - 14, y - 10, 28, 20)) continue;
        cantos += `<ellipse cx="${x}" cy="${n(y)}" rx="${n(6 + 7 * rnd(i + 17))}" ry="${n(4 + 4 * rnd(i + 29))}"/>`;
      }
      if (cantos) s += `<g fill="rgba(122,96,58,.3)">${cantos}</g>`;
      /* praderas de hierba marina en la parte somera, quietas y bajitas */
      let pradera = "";
      for (let x = 90, i = 0; x < 1700; x += 39, i++) {
        const y = fondo(x) + 14;
        if (!eje(x - 20, y - 86, 40, 90)) continue;
        pradera += `M${x} ${n(y)}q-9 -42 -20 -60M${x + 8} ${n(y)}q3 -48 12 -68M${x + 17} ${n(y)}q12 -40 24 -52`;
      }
      if (pradera) s += `<path d="${pradera}" stroke="#2e7d52" stroke-width="5" fill="none" stroke-linecap="round" opacity=".7"/>`;

      /* rocas del fondo, asomando por encima de la arena cercana */
      const roca = (x, base, w, h) => `<g>
        <path d="M${n(x - w)} ${n(base)}q${n(w * 0.1)} ${n(-h * 0.9)} ${n(w * 0.66)} ${-h}q${n(w * 0.7)} ${n(h * 0.06)} ${n(w * 0.9)} ${n(h * 0.72)}q${n(w * 0.18)} ${n(h * 0.24)} ${n(w * 0.44)} ${n(h * 0.28)}Z" fill="url(#ocnRoca)"/>
        <path d="M${n(x - w * 0.72)} ${n(base - h * 0.42)}q${n(w * 0.52)} ${n(-h * 0.14)} ${n(w * 1.06)} ${n(h * 0.04)}" stroke="rgba(158,192,208,.3)" stroke-width="6" fill="none"/>
        <path d="M${n(x - w * 0.5)} ${n(base - h * 0.68)}q${n(w * 0.4)} ${n(-h * 0.1)} ${n(w * 0.8)} ${n(h * 0.03)}" stroke="rgba(10,20,28,.4)" stroke-width="5" fill="none"/></g>`;
      [[180, 96, 78], [640, 78, 62], [1700, 100, 84], [1900, 90, 74], [2050, 110, 90], [2280, 150, 126]].forEach(r => {
        const base = fondo(r[0]) + 34;
        if (eje(r[0] - r[1], base - r[2] * 1.15, r[1] * 2, r[2] * 1.3)) s += roca(r[0], base, r[1], r[2]);
      });

      /* ---------- EL ARRECIFE: corales, anémonas y esponjas ---------- */
      /* coral de abanico: ramas gruesas y ramitas finas, dos trazos */
      const abanico = (x, base, k, c) => {
        let g1 = "", g2 = "";
        for (let i = 0; i < 5; i++) {
          const a = (-152 + i * 26) * Math.PI / 180, r = 118 + 22 * rnd(i + x / 53);
          const px = n(r * Math.cos(a)), py = n(r * Math.sin(a));
          g1 += `M0 0Q${n(px * 0.34)} ${n(py * 0.72)} ${px} ${py}`;
          g2 += `M${n(px * 0.58)} ${n(py * 0.62)}q${n(px * 0.16)} ${n(py * 0.3)} ${n(px * 0.42)} ${n(py * 0.24)}`;
        }
        return `<g transform="translate(${x} ${n(base)}) scale(${q(k)})" stroke="${c}" fill="none" stroke-linecap="round">
          <path d="${g1}" stroke-width="15"/><path d="${g2}" stroke-width="9"/></g>`;
      };
      /* coral cerebro: media esfera con surcos */
      const cerebro = (x, base, rx, c1, c2) => {
        let d = "";
        for (let i = 0; i < 4; i++) {
          const y = n(base - rx * 0.56 + i * rx * 0.3);
          d += `M${n(x - rx * 0.82)} ${y}q${n(rx * 0.4)} ${n(-rx * 0.2)} ${n(rx * 0.82)} 0q${n(rx * 0.42)} ${n(rx * 0.2)} ${n(rx * 0.82)} 0`;
        }
        return `<ellipse cx="${x}" cy="${n(base)}" rx="${rx}" ry="${n(rx * 0.78)}" fill="${c1}"/>
          <path d="${d}" stroke="${c2}" stroke-width="6" fill="none" stroke-linecap="round"/>`;
      };
      /* esponjas de tubo */
      const tubos = (x, base, k, c, c2) => {
        let d = "", bocas = "";
        [[-30, 96, 20], [0, 132, 23], [28, 104, 18], [54, 74, 15]].forEach(t => {
          d += `M${t[0] - t[2]} 0L${n(t[0] - t[2] * 0.8)} ${-t[1]}q${n(t[2] * 0.8)} -12 ${n(t[2] * 1.6)} 0L${t[0] + t[2]} 0Z`;
          bocas += `<ellipse cx="${t[0]}" cy="${-t[1]}" rx="${n(t[2] * 0.8)}" ry="${n(t[2] * 0.34)}"/>`;
        });
        return `<g transform="translate(${x} ${n(base)}) scale(${q(k)})"><path d="${d}" fill="${c}"/><g fill="${c2}">${bocas}</g></g>`;
      };
      /* anémona: tentáculos que se mecen despacio */
      const anemona = (x, base, k, c, punta, dur) => {
        let d = "", puntas = "";
        for (let i = 0; i < 11; i++) {
          const a = (-168 + i * 15.6) * Math.PI / 180, r = 62 + 16 * rnd(i + x / 31);
          const px = n(r * Math.cos(a)), py = n(r * Math.sin(a) * 0.95);
          d += `M0 -4Q${n(px * 0.4)} ${n(py * 0.9)} ${px} ${py}`;
          puntas += `<circle cx="${px}" cy="${py}" r="4.6"/>`;
        }
        return `<g transform="translate(${x} ${n(base)}) scale(${q(k)})"><ellipse rx="34" ry="14" fill="#b0745e"/>
          <g><animateTransform attributeName="transform" type="skewX" values="0;7;0;-7;0" dur="${dur}s" repeatCount="indefinite"/>
          <path d="${d}" stroke="${c}" stroke-width="8" fill="none" stroke-linecap="round"/>
          <g fill="${punta}">${puntas}</g></g></g>`;
      };
      /* coral de mesa */
      const mesa = (x, base, k, c) => `<g transform="translate(${x} ${n(base)}) scale(${q(k)})">
        <path d="M-14 0L-9 -54L9 -54L14 0Z" fill="#a06a4a"/>
        <ellipse cy="-58" rx="86" ry="20" fill="${c}"/><ellipse cy="-64" rx="86" ry="18" fill="rgba(255,255,255,.2)"/></g>`;

      [[620, 1.3, "#ef6c4a"], [950, 1.1, "#e75f92"], [1420, 1.2, "#c77fdc"], [1550, 1, "#f08a5d"]].forEach(a => {
        const base = fondo(a[0]) + 26;
        if (eje(a[0] - 60, base - 150, 120, 156)) s += abanico(a[0], base, a[1], a[2]);
      });
      [[700, 74, "#f2a03f", "#c2661f"], [1080, 58, "#6fc9b6", "#2f8b78"], [1360, 80, "#e8788f", "#b23f5c"], [560, 52, "#8fbe5c", "#527c2c"], [1500, 66, "#f2a03f", "#c2661f"]].forEach(c => {
        const base = fondo(c[0]) + 20;
        if (eje(c[0] - c[1], base - c[1], c[1] * 2, c[1] * 1.6)) s += cerebro(c[0], base, c[1], c[2], c[3]);
      });
      [[760, 1.15, "#e0674f", "#7d2a1c"], [1480, .95, "#c884e0", "#6a3480"]].forEach(t => {
        const base = fondo(t[0]) + 24;
        if (eje(t[0] - 50, base - 150, 100, 156)) s += tubos(t[0], base, t[1], t[2], t[3]);
      });
      [[660, 1.3, "#ffb27a", "#ff7043", 6.2], [1040, 1.05, "#a8dff0", "#4fb3d9", 7.4], [1400, 1.15, "#f5a3c8", "#e0609c", 5.6]].forEach(a => {
        const base = fondo(a[0]) + 22;
        if (eje(a[0] - 60, base - 80, 120, 86)) s += anemona(a[0], base, a[1], a[2], a[3], a[4]);
      });
      [[990, 1.15, "#f0946d"], [1530, .95, "#8ccfa0"]].forEach(m => {
        const base = fondo(m[0]) + 18;
        if (eje(m[0] - 70, base - 90, 140, 96)) s += mesa(m[0], base, m[1], m[2]);
      });

      /* ---------- ALGAS QUE ONDULAN, en la zona somera ---------- */
      [[[170, 250, 330], 6.6, "#2f7d43"], [[470, 560, 620], 8.2, "#39894b"],
      [[860, 940, 1010], 7.2, "#2c7a4c"], [[1300, 1380, 1470], 9, "#367f45"]].forEach(grupo => {
        let d = "";
        grupo[0].forEach((x, i) => {
          const base = fondo(x) + 26;
          if (!eje(x - 24, base - 300, 48, 306)) return;
          const alto = 190 + 90 * rnd(i + x / 17), ancho = 34 + 14 * rnd(i + 5);
          d += `M${x} ${n(base)}Q${n(x - ancho)} ${n(base - alto * 0.42)} ${x} ${n(base - alto * 0.72)}Q${n(x + ancho)} ${n(base - alto)} ${n(x - ancho * 0.4)} ${n(base - alto * 1.24)}`;
        });
        if (d) s += `<g><animateTransform attributeName="transform" type="skewX" values="0;4.5;0;-4.5;0" dur="${grupo[1]}s" repeatCount="indefinite"/>
          <path d="${d}" stroke="${grupo[2]}" stroke-width="13" fill="none" stroke-linecap="round" opacity=".88"/></g>`;
      });

      /* ---------- EL ABISMO: oscuridad, nieve marina y destellos ---------- */
      s += `<rect y="700" width="2600" height="400" fill="url(#ocnAbismo)"/>`;
      /* la nieve marina cayendo, muy despacio, en dos tandas */
      [[0, 30], [7, 36]].forEach((t, g) => {
        let motas = "";
        for (let i = 0; i < 30; i++) {
          motas += `<circle cx="${n(20 + rnd(i + g * 60 + 701) * 2560)}" cy="${n(560 + rnd(i + g * 60 + 811) * 520)}" r="${q(1.6 + 2 * rnd(i + g * 60 + 907))}"/>`;
        }
        s += `<g fill="rgba(228,244,255,.55)"><animateTransform attributeName="transform" type="translate" values="0 -70;12 240" dur="${t[1]}s" begin="${t[0]}s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0;.75;.6;0" dur="${t[1]}s" begin="${t[0]}s" repeatCount="indefinite"/>${motas}</g>`;
      });
      /* destellos bioluminiscentes, dos grupos que se turnan */
      [[".85;.2;.85", 4.6, 0], [".2;.85;.2", 5.8, 30]].forEach(d => {
        let halos = "", nucleos = "";
        for (let i = 0; i < 9; i++) {
          const x = n(1500 + rnd(i + d[2] + 1009) * 1060), y = n(700 + rnd(i + d[2] + 1103) * 370);
          if (!lib(x - 22, y - 22, 44, 44)) continue;
          halos += `<circle cx="${x}" cy="${y}" r="${n(14 + 10 * rnd(i + d[2] + 7))}"/>`;
          nucleos += `<circle cx="${x}" cy="${y}" r="3"/>`;
        }
        s += `<g><animate attributeName="opacity" values="${d[0]}" dur="${d[1]}s" repeatCount="indefinite"/>
          <g fill="url(#ocnBrillo)">${halos}</g><g fill="#d9fbff">${nucleos}</g></g>`;
      });
      /* algún destello suelto en la pared de la fosa */
      s += `<g fill="url(#ocnBrillo)" opacity=".6"><animate attributeName="opacity" values=".6;.15;.6" dur="8s" repeatCount="indefinite"/>
        <circle cx="2404" cy="1044" r="18"/><circle cx="2352" cy="986" r="12"/></g>`;

      /* lo nuevo detrás, lo de siempre delante */
      return decoSvg(s + interior(previo), e.width);
    };
  })();

})();
