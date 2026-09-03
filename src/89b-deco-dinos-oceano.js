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

      /* ---------- ISLAS ALTAS DEL HORIZONTE ----------
         entre la costa y el hielo el cielo se quedaba vacío: unas islas
         volcánicas más altas, con su penacho, le dan fondo a esa franja */
      [[2960, 498, 210, "rgba(122,138,150,.4)"], [3320, 556, 165, "rgba(134,148,158,.32)"],
      [3660, 470, 240, "rgba(116,134,148,.38)"], [3930, 566, 150, "rgba(140,154,164,.28)"]].forEach((is, i) => {
        /* conos volcánicos, no lomas: la silueta va recta hasta un cráter mellado */
        const m = is[2], cx = is[0], cy = is[1];
        s += `<path d="M${n(cx - m)} 700L${n(cx - m * 0.16)} ${n(cy)}q${n(m * 0.16)} -9 ${n(m * 0.32)} 0L${n(cx + m)} 700Z" fill="${is[3]}"/>
          <path d="M${n(cx + m * 0.05)} ${n(cy + 3)}L${n(cx + m)} 700L${n(cx + m * 0.3)} 700Z" fill="rgba(40,52,60,.14)"/>
          <path d="M${n(cx - m * 0.3)} ${n(cy + 46)}q${n(m * 0.3)} -22 ${n(m * 0.6)} 0" stroke="rgba(255,255,255,.18)" stroke-width="6" fill="none"/>`;
        if (i % 2 === 0) s += humo(cx, cy - 10, 0.55, 17 + i * 3, i * 4);
      });
      /* nubes altas y finas sobre el mar, para que la franja no quede muerta */
      [[2900, 96, .5, "#fff8ec", .5], [3380, 74, .42, "#fff9f0", .44], [3760, 116, .56, "#fdf7ee", .4]].forEach(c => {
        s += `<g opacity="${c[4]}">${nube(c[0], c[1], c[2], c[3])}</g>`;
      });

      /* ============================================================
         PRIMER PLANO: se pinta DELANTE del paisaje de siempre.
         El decorado antiguo tapa con un suelo liso y opaco todo lo de
         abajo, así que aquí se resuelven tres cosas que solo se ven
         por encima: el asiento de cada dinosaurio, la costura entre la
         tierra y el mar, y la que separaba el mar del hielo.
         ============================================================ */
      let f = "";
      f += `<defs>
        <linearGradient id="dnoFRoca" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#9e8464"/><stop offset="100%" stop-color="#5f4630"/></linearGradient>
        <linearGradient id="dnoFArena" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f0dcae"/><stop offset="60%" stop-color="#dcc088"/>
          <stop offset="100%" stop-color="#bda171"/></linearGradient>
        <linearGradient id="dnoFOrilla" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#8fe3e0" stop-opacity=".75"/><stop offset="100%" stop-color="#8fe3e0" stop-opacity="0"/></linearGradient>
        <linearGradient id="dnoFBanquisa" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#bcdcee"/></linearGradient>
        <linearGradient id="dnoFAguaFria" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#cfeaf6" stop-opacity="0"/><stop offset="100%" stop-color="#dff2fb" stop-opacity=".8"/></linearGradient>
        <linearGradient id="dnoFSuperficie" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#bfecff" stop-opacity=".46"/><stop offset="100%" stop-color="#bfecff" stop-opacity="0"/></linearGradient>
        <radialGradient id="dnoFHondo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#042c4a" stop-opacity=".34"/><stop offset="56%" stop-color="#042c4a" stop-opacity=".2"/>
          <stop offset="100%" stop-color="#042c4a" stop-opacity="0"/></radialGradient>
      </defs>`;

      /* una curva mansa que pasa por todos los puntos, con la pendiente
         horizontal en cada uno: así cada repisa queda plana */
      const suave = p => {
        let d = "M" + n(p[0][0]) + " " + n(p[0][1]);
        for (let i = 1; i < p.length; i++) {
          const a = p[i - 1], b = p[i], dx = (b[0] - a[0]) / 3;
          d += `C${n(a[0] + dx)} ${n(a[1])} ${n(b[0] - dx)} ${n(b[1])} ${n(b[0])} ${n(b[1])}`;
        }
        return d;
      };

      /* ---------- LOMAS DEL PRIMER PLANO ----------
         una loma redonda debajo de cada dinosaurio de tierra: se solapan
         entre ellas, así el borde de arriba ondula y no queda un serrucho */
      const lomaPts = (cx, cima, w) => {
        const h = 1046 - cima;
        return [[n(cx - w), 1046], [n(cx - w * 0.5), n(cima + h * 0.06)], [n(cx), n(cima)],
        [n(cx + w * 0.5), n(cima + h * 0.06)], [n(cx + w), 1046]];
      };
      /* cx, cima (justo bajo las patas del punto), ancho y tono */
      const LOMAS = [[200, 624, 215, 0], [340, 684, 160, 1], [404, 492, 225, 2],
      [552, 618, 185, 0], [682, 464, 235, 1], [764, 638, 215, 2], [980, 762, 200, 0],
      [1424, 676, 205, 1], [1620, 576, 165, 2], [2010, 644, 175, 0], [2250, 926, 205, 1],
      [2440, 892, 195, 2]];
      /* tonos muy parecidos: así las lomas se funden y no se ven las juntas */
      const TONOS_LOMA = ["#3f7c28", "#3a742a", "#356c28"];
      const crestas = [];
      LOMAS.forEach(l => {
        const p = lomaPts(l[0], l[1], l[2]);
        crestas.push(p);
        /* solo se ilumina la coronilla, no todo el borde: si no, la raya de
           una loma cruzaba por encima de la de al lado */
        f += `<path d="${trazo(p)}L${p[4][0]} 1100L${p[0][0]} 1100Z" fill="${TONOS_LOMA[l[3]]}"/>
          <path d="M${n(l[0] - l[2] * 0.42)} ${n(alturaEn(p, l[0] - l[2] * 0.42) + 7)}Q${n(l[0])} ${n(l[1] + 4)} ${n(l[0] + l[2] * 0.42)} ${n(alturaEn(p, l[0] + l[2] * 0.42) + 7)}" stroke="rgba(178,228,140,.3)" stroke-width="9" fill="none" stroke-linecap="round"/>`;
      });

      /* ---------- EL RISCO ESCALONADO ----------
         tres repisas de roca, una para cada punto: el Anquilosaurio abajo,
         el Parasaurolophus arriba del todo y el Triceratops a media altura */
      const risco = [[1012, 1046], [1046, 722], [1072, 636], [1142, 632],
      [1156, 452], [1168, 370], [1240, 366], [1254, 452], [1264, 522],
      [1336, 526], [1356, 730], [1386, 1046]];
      f += `<path d="${suave(risco)}L1386 1100L1012 1100Z" fill="url(#dnoFRoca)"/>`;
      /* la cara de sombra, para que la roca tenga volumen */
      f += `<path d="M1240 366L1254 452L1264 522L1336 526L1356 730L1386 1046L1386 1100L1300 1100Z" fill="rgba(58,40,26,.24)"/>`;
      /* estratos: la roca se lee mejor con sus capas */
      f += `<path d="M1026 812q166 -24 344 -6M1034 902q166 -22 340 -4M1168 524q72 -12 98 -4" stroke="rgba(255,238,206,.2)" stroke-width="7" fill="none" stroke-linecap="round"/>
        <path d="M1030 858q164 -22 342 -6M1180 450q58 -10 80 -4" stroke="rgba(64,44,28,.26)" stroke-width="6" fill="none" stroke-linecap="round"/>`;
      /* hierba en el filo de cada repisa y un pedregal al pie */
      f += `<path d="M1072 634q70 -6 70 -2q0 9 -70 11ZM1168 368q72 -4 72 0q0 9 -72 11ZM1264 524q72 -4 72 0q0 9 -72 11Z" fill="#3d7a2a"/>
        <path d="M1004 1046q26 -78 62 -104q40 -28 78 -6q34 20 44 110Z" fill="#7d6247"/>
        <path d="M1300 1046q22 -70 56 -94q38 -26 74 -4q32 20 40 98Z" fill="#71583f"/>`;
      f += cicada(1104, 630, .5, "#3d7a2a") + cicada(1310, 520, .46, "#42832d");

      /* ---------- matas y helechos por las lomas, lejos de los iconos ---------- */
      let mata = "";
      crestas.forEach((p, ci) => {
        for (let x = p[0][0] + 26, i = 0; x < p[4][0] - 20; x += 44, i++) {
          const y = n(alturaEn(p, x) + 12 + 8 * rnd(i + ci * 17 + 811));
          if (y > 1030 || !lib(x - 18, y - 42, 36, 48)) continue;
          mata += `M${n(x)} ${y}q-8 -26 -18 -36M${n(x + 7)} ${y}q1 -32 6 -42M${n(x + 16)} ${y}q9 -24 20 -32`;
        }
      });
      if (mata) f += `<path d="${mata}" stroke="#2c6420" stroke-width="5.4" fill="none" stroke-linecap="round"/>`;
      /* helechos y cicadáceas grandes rematando alguna loma */
      [[0, -0.62, .74], [2, -0.5, .66], [4, 0, .8], [4, 0.52, .6], [5, 0.5, .7],
      [6, -0.44, .66], [7, 0.46, .62], [9, 0.5, .6], [10, -0.4, .72], [11, 0.3, .6]].forEach((c, i) => {
        const p = crestas[c[0]], w = p[4][0] - p[2][0], x = n(p[2][0] + w * c[1]);
        const y = n(alturaEn(p, x) + 14);
        if (!lib(x - 62 * c[2], y - 134 * c[2], 124 * c[2], 140 * c[2])) return;
        f += i % 2 ? helecho(x, y, c[2], "#2f6b23") : cicada(x, y, c[2] * 1.05, "#357326");
      });

      /* ---------- LA TIERRA DE DELANTE ----------
         una franja de barro seco con sus capas, sus piedras y unas huellas:
         cierra el mapa por abajo y separa el primer plano del resto */
      const bordeTierra = [[-70, 1002], [280, 972], [640, 1008], [980, 976],
      [1340, 1010], [1700, 978], [2060, 1006], [2400, 984]];
      f += `<path d="${suave(bordeTierra)}L2400 1100L-70 1100Z" fill="#54381f"/>
        <path d="${suave(bordeTierra)}" stroke="rgba(226,196,148,.34)" stroke-width="7" fill="none"/>
        <path d="${suave(bordeTierra.map(p => [p[0], p[1] + 46]))}" stroke="rgba(120,86,54,.6)" stroke-width="9" fill="none"/>`;
      /* guijarros y raíces en el barro */
      let guijarros = "";
      for (let i = 0; i < 26; i++) {
        const x = n(-40 + rnd(i + 861) * 2420), y = n(1024 + rnd(i + 883) * 62);
        guijarros += `<ellipse cx="${x}" cy="${y}" rx="${q(6 + 8 * rnd(i + 907))}" ry="${q(4 + 5 * rnd(i + 929))}" fill="#6d4c2e" opacity=".8"/>`;
      }
      f += guijarros;
      f += `<path d="M180 1042q60 22 130 12M760 1064q70 -20 140 -8M1560 1046q80 20 150 6M2140 1070q70 -18 140 -6" stroke="rgba(140,102,64,.5)" stroke-width="6" fill="none" stroke-linecap="round"/>`;
      for (let i = 0; i < 8; i++) {
        f += huella(150 + i * 296, 1046 + (i % 2 ? 26 : 0), 0.86, i % 2 ? 14 : -10, .3);
      }

      /* ---------- EL ÁMBAR: la resina necesita su árbol ----------
         el punto quedaba colgado del cielo; ahora gotea de una rama */
      f += `<g>
        <path d="M2338 646q-10 -80 6 -132q4 -22 16 -34q10 12 12 34q6 52 -2 132Z" fill="#6b4d31"/>
        <path d="M2352 512q-26 -16 -46 -46q26 8 44 26M2360 500q22 -20 48 -30q-16 24 -40 42" stroke="#6b4d31" stroke-width="11" fill="none" stroke-linecap="round"/>
        <path d="M2300 462q22 -8 44 4M2384 456q22 4 34 18" stroke="#3f7d2f" stroke-width="13" fill="none" stroke-linecap="round"/>
        <path d="M2318 486q-4 16 4 24q8 6 12 -4q2 -12 -6 -22Z" fill="rgba(240,176,54,.85)"/>
        <path d="M2398 480q-4 14 3 22q8 5 11 -4q2 -10 -6 -20Z" fill="rgba(240,176,54,.7)"/>
        <path d="M2330 640q22 10 44 2" stroke="rgba(255,232,190,.4)" stroke-width="6" fill="none" stroke-linecap="round"/></g>`;

      /* ---------- LA CHARCA ----------
         el lago de siempre quedaba tapado por las lomas y los bichos de
         agua se quedaban sobre la hierba: aquí vuelve a haber agua */
      f += `<ellipse cx="1832" cy="812" rx="188" ry="82" fill="#b79a6c"/>
        <ellipse cx="1832" cy="816" rx="172" ry="70" fill="url(#dnoLago)"/>
        <ellipse cx="1832" cy="816" rx="172" ry="70" fill="none" stroke="rgba(255,248,225,.42)" stroke-width="6"/>
        <g stroke="rgba(255,255,255,.55)" stroke-width="5" fill="none" stroke-linecap="round">
          <path d="M1712 800q28 -12 56 0M1900 844q28 -12 56 0"><animate attributeName="opacity" values=".8;.3;.8" dur="5.6s" repeatCount="indefinite"/></path>
          <path d="M1780 848q26 -11 52 0M1868 788q26 -11 52 0"><animate attributeName="opacity" values=".3;.8;.3" dur="5.6s" repeatCount="indefinite"/></path></g>`;
      let canas = "";
      [[1676, 828], [1706, 848], [1962, 830], [1990, 852]].forEach(j => {
        canas += `M${j[0]} ${j[1]}q-5 -44 -14 -60M${j[0] + 8} ${j[1]}q2 -48 9 -66M${j[0] + 17} ${j[1]}q8 -40 17 -52`;
      });
      f += `<path d="${canas}" stroke="#3f7f2c" stroke-width="5" fill="none" stroke-linecap="round"/>`;

      /* ---------- LA COSTA: un cabo y su cala ----------
         antes el verde chocaba de canto con el azul y quedaba una raya
         vertical; ahora la tierra acaba en un cabo de roca y a su pie hay
         un banco de arena que el agua lame */
      const cabo = [[2340, 1046], [2412, 880], [2496, 748], [2588, 702],
      [2652, 764], [2700, 892], [2736, 1012], [2762, 1046]];
      /* el pie de la izquierda se abre en talud y muere dentro del barro: antes
         el cabo cerraba en vertical sobre x=2340 y la roca chocaba de canto
         contra la tierra de primer término */
      f += `<path d="${suave(cabo)}L2762 1100L2036 1100Q2152 1084 2242 1040Q2298 1012 2340 1046Z" fill="url(#dnoFRoca)"/>
        <path d="M2652 764L2700 892L2736 1012L2762 1046L2762 1100L2670 1100Z" fill="rgba(58,40,26,.26)"/>
        <path d="M2360 940q170 -34 336 8M2374 1000q176 -30 350 10" stroke="rgba(255,238,206,.18)" stroke-width="7" fill="none" stroke-linecap="round"/>`;
      /* la hierba corona el cabo en una banda que se afila en las dos puntas:
         cerrada como estaba dejaba un canto verde vertical en x=2340 */
      const cresta = cabo.map(p => [p[0], p[1] + 4]);
      const GRUESO = [0, 62, 96, 108, 98, 78, 40, 6];
      const falda = cabo.map((p, i) => [p[0], p[1] + 4 + GRUESO[i]]);
      f += `<path d="${suave(cresta)}L${suave(falda.slice().reverse()).slice(1)}Z" fill="#3d7a2a" opacity=".95"/>`;
      /* la costura roca-barro se cose por los dos lados: lenguas de barro que
         suben al talud y cantos de roca tumbados en la tierra */
      f += `<path d="M2196 1100q14 -46 58 -62q46 -14 66 18q22 32 4 44ZM2338 1100q10 -34 44 -44q40 -8 54 24q10 26 -6 20Z" fill="#54381f" opacity=".85"/>
        <path d="M2100 1074q30 -30 74 -34M2270 1092q26 -26 66 -30" stroke="rgba(120,86,54,.55)" stroke-width="7" fill="none" stroke-linecap="round"/>`;
      [[2124, 1062, 26], [2246, 1030, 22], [2038, 1084, 18]].forEach(r => {
        f += `<path d="M${r[0] - r[2]} ${r[1]}q${n(r[2] * 0.3)} ${n(-r[2] * 1.2)} ${n(r[2] * 1.1)} ${n(-r[2] * 1.05)}q${n(r[2] * 0.85)} 4 ${n(r[2] * 0.9)} ${n(r[2] * 1.05)}Z" fill="url(#dnoFRoca)"/>`;
      });
      f += `<path d="M2222 1034q-8 -28 -18 -38M2230 1032q1 -32 6 -42M2240 1034q9 -26 20 -34M2318 1006q-8 -26 -18 -36M2326 1004q1 -30 6 -40M2336 1006q9 -24 20 -32" stroke="#2c6420" stroke-width="5.4" fill="none" stroke-linecap="round"/>`;
      /* matojos asomando por el filo del cabo: sin ellos el borde de la hierba
         se recortaba como una raya contra la boca oscura de la cueva */
      f += `<path d="M2364 1002q-10 -26 -22 -34M2372 1000q0 -30 4 -40M2380 952q-11 -24 -24 -30M2388 950q-1 -30 3 -40M2398 900q-12 -22 -26 -28M2406 898q-2 -28 2 -38" stroke="#4a8331" stroke-width="5" fill="none" stroke-linecap="round" opacity=".92"/>`;
      f += cicada(2452, 812, .66, "#42832d") + helecho(2560, 728, .54, "#357326");
      /* el banco de arena de la cala, con su espuma */
      f += `<path d="M2620 1100q54 -108 190 -138q142 -28 250 26q84 42 140 112Z" fill="url(#dnoFArena)"/>
        <path d="M2660 1044q70 -74 186 -88q124 -14 214 44q56 34 96 100" stroke="rgba(255,252,232,.6)" stroke-width="7" fill="none" stroke-linecap="round"/>
        <path d="M2680 1058q76 -66 182 -78q118 -10 202 44" stroke="rgba(255,255,255,.75)" stroke-width="8" fill="none" stroke-linecap="round">
          <animate attributeName="opacity" values=".85;.35;.85" dur="6s" repeatCount="indefinite"/></path>
        <path d="M2712 1084q80 -58 178 -68q108 -8 186 40" stroke="rgba(255,255,255,.45)" stroke-width="6" fill="none" stroke-linecap="round">
          <animate attributeName="opacity" values=".35;.85;.35" dur="6s" repeatCount="indefinite"/></path>`;
      /* el agua somera de la cala, que se apaga mar adentro */
      f += `<path d="M2600 1100q40 -130 200 -168q168 -38 292 30q96 40 168 138L3320 1100Z" fill="url(#dnoFOrilla)" opacity=".4"/>`;
      /* piedras al pie del cabo y un rastro de huellas bajando a la orilla */
      [[2648, 1042, 28], [2800, 1078, 22], [2372, 1058, 34]].forEach(r => {
        f += `<path d="M${r[0] - r[2]} ${r[1]}q${n(r[2] * 0.3)} ${n(-r[2] * 1.2)} ${n(r[2] * 1.1)} ${n(-r[2] * 1.05)}q${n(r[2] * 0.85)} 4 ${n(r[2] * 0.9)} ${n(r[2] * 1.05)}Z" fill="url(#dnoFRoca)"/>`;
      });
      for (let i = 0; i < 4; i++) {
        f += huella(2860 + i * 68, 1010 + i * 16, 0.72, i % 2 ? 26 : 12, .2);
      }
      /* dos peñascos con espuma justo a la boca de la cala: dan vida al agua y
         de paso tapan el canto que el mar de siempre deja detrás del cabo */
      [[2618, 736, 36, 23], [2684, 716, 23, 15]].forEach(r => {
        f += `<ellipse cx="${r[0]}" cy="${r[1] + 4}" rx="${n(r[2] * 1.6)}" ry="${n(r[3] * 0.5)}" fill="rgba(214,244,255,.5)"/>
          <path d="M${r[0] - r[2]} ${r[1] + 4}q${n(r[2] * 0.32)} ${n(-r[3] * 2.3)} ${n(r[2] * 1.06)} ${n(-r[3] * 2.1)}q${n(r[2] * 0.8)} 5 ${n(r[2] * 0.94)} ${n(r[3] * 2.1)}Z" fill="url(#dnoFRoca)"/>
          <path d="M${n(r[0] - r[2] * 0.86)} ${r[1] + 6}q${n(r[2] * 0.9)} 11 ${n(r[2] * 1.8)} -1" stroke="rgba(255,255,255,.62)" stroke-width="5" fill="none" stroke-linecap="round"/>`;
      });

      /* ---------- EL MAR, QUE ERA UNA MANCHA LISA ----------
         una banda clara bajo el horizonte, olas largas y el fondo más
         oscuro: así el agua tiene planos y no parece un papel azul */
      /* la banda clara nace en punta pasado el cabo y se abre hacia el
         horizonte: antes arrancaba con canto recto en x=2620, encima de la
         roca del cabo, y dejaba una raya vertical de arriba abajo */
      f += `<path d="M2800 768Q3180 688 3560 678Q3800 672 4000 692L4000 838Q3800 822 3560 812Q3180 798 2800 768Z" fill="url(#dnoFSuperficie)"/>`;
      /* y la hondura del fondo ya no es un rectángulo con canto, sino dos
         manchas redondas que se apagan solas por los bordes */
      f += `<ellipse cx="3620" cy="1108" rx="560" ry="220" fill="url(#dnoFHondo)"/>
        <ellipse cx="3160" cy="1120" rx="320" ry="150" fill="url(#dnoFHondo)"/>`;
      let oleaje = "";
      for (let i = 0; i < 26; i++) {
        const x = n(2860 + rnd(i + 941) * 1080), y = n(806 + rnd(i + 967) * 280);
        /* nada de olas encima del banco de arena de la cala: allí no hay agua */
        if (y > 940 && x < 3260) continue;
        if (!eje(x - 60, y - 12, 120, 24)) continue;
        oleaje += `M${x} ${y}q${n(30 + 18 * rnd(i + 983))} -13 ${n(64 + 26 * rnd(i + 997))} 0`;
      }
      if (oleaje) f += `<path d="${oleaje}" stroke="rgba(214,244,255,.32)" stroke-width="5" fill="none" stroke-linecap="round"/>`;

      /* ---------- EL HIELO: la banquisa se come el mar poco a poco ----------
         antes el azul terminaba en seco; ahora salen placas sueltas que
         van juntándose hasta ser el campo de nieve */
      f += `<path d="M3560 806L4260 806L4260 1100L3660 1100q-20 -70 -60 -130q-44 -66 -40 -164Z" fill="url(#dnoFAguaFria)" opacity=".55"/>`;
      /* placas sueltas flotando, de menos a más según se acercan al hielo */
      [[3536, 792, 46, .5], [3634, 838, 62, .62], [3742, 800, 78, .72],
      [3818, 866, 96, .82], [3906, 812, 116, .9], [3980, 880, 140, .96]].forEach(p => {
        f += `<path d="M${n(p[0] - p[2])} ${p[1]}q${n(p[2] * 0.4)} -18 ${p[2]} -14q${n(p[2] * 0.7)} 4 ${p[2]} 14q${n(-p[2] * 0.5)} 20 ${n(-p[2])} 22q${n(-p[2] * 0.7)} -2 ${n(-p[2])} -22Z" fill="url(#dnoFBanquisa)" opacity="${p[3]}"/>
          <path d="M${n(p[0] - p[2] * 0.5)} ${n(p[1] + 12)}q${n(p[2] * 0.5)} 8 ${p[2]} -2" stroke="rgba(140,190,220,.5)" stroke-width="4" fill="none" stroke-linecap="round"/>`;
      });
      /* el frente del glaciar: la pared de hielo que se mete en el agua.
         Es lo que borra la raya vertical donde el azul se cortaba en seco */
      f += `<path d="M3894 902q-8 -104 46 -178q52 -70 150 -84q118 -14 190 62q56 60 60 168L4260 1100L3900 1100Z" fill="url(#dnoFBanquisa)"/>
        <path d="M4090 640q118 -14 190 62q56 60 60 168L4260 1100L4090 1100Z" fill="rgba(158,206,232,.42)"/>
        <path d="M3936 806q54 -34 122 -30M3960 890q66 -32 142 -26M4132 726q58 -6 100 22" stroke="rgba(150,200,228,.5)" stroke-width="6" fill="none" stroke-linecap="round"/>
        <path d="M3890 902q80 26 190 22q120 -4 182 -26" stroke="rgba(255,255,255,.8)" stroke-width="8" fill="none" stroke-linecap="round">
          <animate attributeName="opacity" values=".85;.4;.85" dur="7s" repeatCount="indefinite"/></path>`;
      /* la banquisa firme, ya pegada al campo de nieve */
      f += `<path d="M4040 906q120 -22 240 -8L4700 890L4700 1100L3960 1100q-16 -70 20 -122q30 -34 60 -72Z" fill="url(#dnoFBanquisa)"/>
        <path d="M4060 946q160 -26 320 -12M4120 1000q180 -20 360 -8" stroke="rgba(150,200,228,.45)" stroke-width="6" fill="none" stroke-linecap="round"/>`;

      /* ---------- LOS ANIMALES DEL HIELO TAMBIÉN QUIEREN SUELO ----------
         el mamut y el rinoceronte se quedaban en el aire sobre el glaciar */
      const duna = (cx, cima, w) => `<path d="M${n(cx - w)} 1100q${n(w * 0.12)} ${n(cima - 1100)} ${n(w * 0.9)} ${n(cima - 1096)}q${n(w * 0.5)} -6 ${n(w * 0.86)} ${n(1092 - cima)}q${n(w * 0.16)} ${n(1100 - cima)} ${n(w * 0.24)} ${n(cima - 1100 + 8)}Z" fill="url(#dnoFBanquisa)"/>`;
      f += duna(4176, 684, 196) + duna(4404, 830, 150) + duna(4548, 602, 206);
      f += `<path d="M4090 758q80 -46 172 -40M4360 880q56 -26 120 -22M4452 668q86 -50 190 -44" stroke="rgba(148,198,226,.5)" stroke-width="7" fill="none" stroke-linecap="round"/>`;
      /* un par de pinos nevados en las dunas, para dar escala */
      [[4066, 826, .46], [4300, 902, .4], [4676, 800, .5]].forEach(p => {
        if (lib(p[0] - 30, p[1] - 200, 60, 206)) f += pino(p[0], p[1], p[2]);
      });
      /* piedras asomando y pisadas en la nieve: el campo blanco estaba vacío */
      [[4262, 1006, 30], [4470, 1042, 24], [4620, 986, 34], [4092, 1044, 26]].forEach(r => {
        f += `<path d="M${r[0] - r[2]} ${r[1]}q${n(r[2] * 0.3)} ${n(-r[2] * 1.2)} ${n(r[2] * 1.1)} ${n(-r[2] * 1.05)}q${n(r[2] * 0.85)} 4 ${n(r[2] * 0.9)} ${n(r[2] * 1.05)}Z" fill="#8fa3ad"/>
          <path d="M${n(r[0] - r[2] * 0.8)} ${n(r[1] - r[2] * 0.5)}q${n(r[2] * 0.7)} ${n(-r[2] * 0.5)} ${n(r[2] * 1.5)} ${n(-r[2] * 0.1)}q${n(-r[2] * 0.6)} ${n(r[2] * 0.4)} ${n(-r[2] * 1.5)} ${n(r[2] * 0.1)}Z" fill="#eef8fd"/>`;
      });
      let pisadas = "";
      for (let i = 0; i < 9; i++) {
        const x = n(4120 + i * 62), y = n(1058 + (i % 2 ? 22 : 0));
        pisadas += `<ellipse cx="${x}" cy="${y}" rx="15" ry="11" fill="rgba(150,196,224,.4)"/>
          <ellipse cx="${n(x - 9)}" cy="${n(y - 15)}" rx="6" ry="5" fill="rgba(150,196,224,.34)"/>
          <ellipse cx="${n(x + 9)}" cy="${n(y - 15)}" rx="6" ry="5" fill="rgba(150,196,224,.34)"/>`;
      }
      f += pisadas;

      /* lo nuevo detrás, lo de siempre en medio y el primer plano delante */
      return decoSvg(s + interior(previo) + f, e.width);
    };
  })();

  /* ============================================================
     OCÉANO: el mar contado por profundidades (superficie, media y
     abismo) y, de izquierda a derecha, una travesía de 4200 px:
     costa y arrecife somero, praderas de algas, mar abierto,
     cañón submarino y abismo. Los tramos se solapan, así que el
     color y la fauna del fondo cambian poco a poco.
     El escenario se dibuja entero aquí: el que venía de antes
     estaba medido para 2600 de ancho y dejaba vacía media pantalla.
     ============================================================ */
  (function () {

    function marPorProfundidades(e) {
      const W = e.width || 4200, H = 1100;

      /* Los quince lugares base llegan recolocados por 62-oceano-icons.js con
         las coordenadas del mapa estrecho, y otros tres se añaden allí mismo.
         Aquí se les da a todos su sitio en el ancho nuevo, antes de reservar
         huecos. Las claves son el emoji de cada lugar, que no se repite. */
      const SITIOS = {
        "\u{1F41A}": [160, 560], "\u{1F422}": [390, 300], "\u{1F980}": [620, 620],
        "\u{1FAB8}": [860, 640], "\u{1F420}": [1090, 430], "\u{1F419}": [1320, 700], "\u{1F421}": [1550, 440],
        "\u{1F42C}": [1800, 250], "\u{1F40B}": [2060, 520], "\u{1F988}": [2320, 760], "\u{1FABC}": [2540, 430],
        "\u{1F433}": [2760, 270], "\u{1F991}": [2985, 560], "\u{1F30B}": [3205, 910],
        "\u{1FA93}": [3425, 560], "\u{1F526}": [3645, 860], "\u{1F3A3}": [3870, 580], "\u{1F573}️": [4072, 900]
      };
      (e.pois || []).forEach(p => { const c = SITIOS[p.emoji]; if (c) { p.x = c[0]; p.y = c[1]; } });

      /* ---------- huecos reservados alrededor de cada lugar ---------- */
      const finas = reservas(e, 1.5, true), anchas = reservas(e, 1.1, false);
      const lib = (x, y, w, h) => hueco(finas, x, y, w, h);
      const eje = (x, y, w, h) => hueco(anchas, x, y, w, h, 0);

      /* ---------- los cinco tramos de la travesía, con solape ---------- */
      const TRAMOS = {
        costa: [-20, 900], praderas: [820, 1620], abierto: [1560, 2620],
        canon: [2560, 3260], abismo: [3200, W + 20]
      };
      /* cuánto manda un tramo en esa x: 1 dentro, y de 1 a 0 en los bordes */
      const peso = (r, x) => {
        const b = 220;
        if (x <= r[0] - b || x >= r[1] + b) return 0;
        if (x < r[0]) return (x - r[0] + b) / b;
        if (x > r[1]) return (r[1] + b - x) / b;
        return 1;
      };

      /* ---------- el fondo del mar: baja despacio y se hunde en la fosa ---------- */
      const FONDO = [[-20, 560], [420, 618], [860, 720], [1300, 800], [1700, 848], [2100, 886],
      [2500, 908], [2740, 946], [2990, 1002], [3230, 1030], [3470, 1044], [3800, 1056], [W + 20, 1064]];
      const fondo = x => {
        for (let i = 1; i < FONDO.length; i++) {
          if (x <= FONDO[i][0]) {
            const a = FONDO[i - 1], b = FONDO[i];
            const t = (x - a[0]) / (b[0] - a[0]);
            return a[1] + (b[1] - a[1]) * (0.5 - Math.cos(Math.PI * t) / 2);
          }
        }
        return FONDO[FONDO.length - 1][1];
      };
      /* la arena del fondo lejano queda más alta: eso da sensación de hondura */
      const banco = x => fondo(x) - 120 - 26 * Math.sin(x / 420);

      let s = "";

      /* ---------- degradados propios (prefijo ocnX, no chocan con nadie) ---------- */
      s += `<defs>
        <linearGradient id="ocnXAgua" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#bfeaff" stop-opacity=".34"/>
          <stop offset="26%" stop-color="#5ec3ef" stop-opacity=".2"/>
          <stop offset="58%" stop-color="#0b5f92" stop-opacity=".22"/>
          <stop offset="82%" stop-color="#052a45" stop-opacity=".44"/>
          <stop offset="100%" stop-color="#01111f" stop-opacity=".66"/>
        </linearGradient>
        <radialGradient id="ocnXVeloTurquesa" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#7ff0e0" stop-opacity=".3"/><stop offset="100%" stop-color="#7ff0e0" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="ocnXVeloVerde" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#8fdca0" stop-opacity=".26"/><stop offset="100%" stop-color="#8fdca0" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="ocnXVeloAzul" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#3fa8e0" stop-opacity=".24"/><stop offset="100%" stop-color="#3fa8e0" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="ocnXVeloHondo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#0a2f52" stop-opacity=".4"/><stop offset="100%" stop-color="#0a2f52" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="ocnXVeloAbismo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#02080f" stop-opacity=".54"/><stop offset="100%" stop-color="#02080f" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="ocnXArena" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#f0dda6"/>
          <stop offset="18%" stop-color="#e4cf96"/>
          <stop offset="34%" stop-color="#c9bd85"/>
          <stop offset="48%" stop-color="#a8a780"/>
          <stop offset="62%" stop-color="#7d8a78"/>
          <stop offset="76%" stop-color="#4d5f63"/>
          <stop offset="88%" stop-color="#2b3c46"/>
          <stop offset="100%" stop-color="#16242e"/>
        </linearGradient>
        <linearGradient id="ocnXBanco" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#d9c48d" stop-opacity=".8"/>
          <stop offset="40%" stop-color="#9aa584" stop-opacity=".7"/>
          <stop offset="72%" stop-color="#42565f" stop-opacity=".6"/>
          <stop offset="100%" stop-color="#132029" stop-opacity=".6"/>
        </linearGradient>
        <linearGradient id="ocnXPared" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#31474f"/><stop offset="100%" stop-color="#0c1720"/>
        </linearGradient>
        <linearGradient id="ocnXRayo" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffffff" stop-opacity=".16"/>
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
        </linearGradient>
        <radialGradient id="ocnXBrillo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#c9fbff" stop-opacity=".75"/><stop offset="100%" stop-color="#c9fbff" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="ocnXAlga" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#7fc25a"/><stop offset="100%" stop-color="#1f5c34"/>
        </linearGradient>
        <linearGradient id="ocnXHumo" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stop-color="#d9c9bd" stop-opacity=".5"/>
          <stop offset="100%" stop-color="#d9c9bd" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="ocnXRegla" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1180" y2="0">
          <stop offset="0%" stop-color="#dff3ff" stop-opacity=".2"/>
          <stop offset="52%" stop-color="#dff3ff" stop-opacity=".12"/>
          <stop offset="100%" stop-color="#dff3ff" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="ocnXReglaAlta" gradientUnits="userSpaceOnUse" x1="0" y1="96" x2="0" y2="1064">
          <stop offset="0%" stop-color="#cfeaff" stop-opacity="0"/>
          <stop offset="14%" stop-color="#cfeaff" stop-opacity=".16"/>
          <stop offset="86%" stop-color="#cfeaff" stop-opacity=".16"/>
          <stop offset="100%" stop-color="#cfeaff" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="ocnXDunaCerca" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#b9a170"/><stop offset="34%" stop-color="#978c67"/>
          <stop offset="62%" stop-color="#54635e"/><stop offset="100%" stop-color="#0d1820"/>
        </linearGradient>
      </defs>`;

      /* ---------- el agua y los velos de color de cada tramo ---------- */
      s += `<rect x="0" y="0" width="${W}" height="${H}" fill="url(#ocnXAgua)"/>`;
      /* los velos se solapan: por eso el color va cambiando sin costuras */
      [["ocnXVeloTurquesa", 380, 420, 640, 400], ["ocnXVeloVerde", 1220, 560, 620, 400],
      ["ocnXVeloAzul", 2100, 480, 760, 440], ["ocnXVeloHondo", 2900, 700, 640, 420],
      ["ocnXVeloHondo", 3480, 520, 720, 400], ["ocnXVeloAbismo", 3800, 780, 700, 460],
      ["ocnXVeloAbismo", 4120, 560, 640, 440]].forEach(v => {
        s += `<ellipse cx="${v[1]}" cy="${v[2]}" rx="${v[3]}" ry="${v[4]}" fill="url(#${v[0]})"/>`;
      });
      /* y el agua se va apagando hacia el abismo con más velos redondos, que
         no dejan ningún canto: antes la mitad derecha era tan clara como la
         orilla y el fondo no parecía hondo */
      [[2600, 980, 900, 380], [3200, 900, 900, 420], [3800, 1000, 900, 420],
      [4200, 860, 800, 440]].forEach(v => {
        s += `<ellipse cx="${v[0]}" cy="${v[1]}" rx="${v[2]}" ry="${v[3]}" fill="url(#ocnXVeloHondo)"/>`;
      });

      /* ---------- las tres profundidades, marcadas sin una sola letra ----------
         una regla de muescas pegada al margen izquierdo y, saliendo de ella,
         dos rayas que se apagan solas. Antes cruzaban los 4200 de punta a
         punta y el mapa parecía una hoja de cuaderno rayada */
      [[340, 1180], [700, 860]].forEach(l => {
        s += `<line x1="0" y1="${l[0]}" x2="${l[1]}" y2="${l[0]}" stroke="url(#ocnXRegla)" stroke-width="2" stroke-dasharray="16 22"/>`;
      });
      let muescas = "";
      for (let y = 120; y <= 1040; y += 80) {
        const larga = (y - 120) % 240 === 0;
        muescas += `M22 ${y}h${larga ? 40 : 22}`;
      }
      s += `<path d="${muescas}" stroke="#cfeaff" stroke-opacity=".2" stroke-width="3" fill="none" stroke-linecap="round"/>
        <line x1="22" y1="106" x2="22" y2="1054" stroke="url(#ocnXReglaAlta)" stroke-width="2" stroke-dasharray="4 10"/>`;

      /* ---------- la superficie: olas que se mueven despacio ---------- */
      let ola = "M-20 44";
      for (let x = 100; x <= W + 20; x += 200) ola += `Q${n(x - 100)} ${20 + 26 * (x % 400 === 100 ? 0 : 1)} ${n(x)} 44`;
      s += `<g><animateTransform attributeName="transform" type="translate" values="0 0;36 6;0 0" dur="9s" repeatCount="indefinite"/>
        <path d="${ola}" stroke="#ffffff" stroke-opacity=".5" stroke-width="7" fill="none" stroke-linecap="round"/>
        <path d="${ola}" transform="translate(0 26)" stroke="#dff6ff" stroke-opacity=".3" stroke-width="4" fill="none"/></g>`;
      /* espuma menuda pegada a la superficie */
      for (let i = 0; i < 34; i++) {
        const x = n(40 + rnd(i + 3) * (W - 80));
        s += `<circle cx="${x}" cy="${n(60 + rnd(i + 51) * 26)}" r="${q(2 + rnd(i + 77) * 3)}" fill="#fff" opacity=".4"/>`;
      }

      /* ---------- rayos de luz: fuertes en la costa y apagándose al fondo ---------- */
      /* en el mar abierto la luz sigue entrando, pero se queda arriba: unos
         rayos cortos evitan que esa mitad del mapa parezca un muro de azul */
      [3180, 3560, 3920, 4150].forEach((x, i) => {
        const an = 120 + 60 * rnd(i + 1401);
        s += `<polygon points="${n(x)},34 ${n(x + an)},34 ${n(x + an * 0.5)},${n(320 + 60 * rnd(i + 1421))} ${n(x - an * 0.2)},${n(300 + 50 * rnd(i + 1441))}"
          fill="url(#ocnXRayo)" opacity=".34">
          <animate attributeName="opacity" values=".34;.14;.34" dur="${q(8 + i)}s" repeatCount="indefinite"/></polygon>`;
      });
      for (let i = 0; i < 11; i++) {
        const x = -60 + i * 300 + rnd(i + 9) * 120;
        const fuerza = Math.max(0, 1 - x / 3000);
        if (fuerza < 0.06) continue;
        const an = 130 + 120 * rnd(i + 21), largo = 420 + 460 * fuerza;
        s += `<polygon points="${n(x)},34 ${n(x + an)},34 ${n(x + an - an * .55)},${n(34 + largo)} ${n(x - an * .3)},${n(34 + largo)}"
          fill="url(#ocnXRayo)" opacity="${q(0.3 + 0.7 * fuerza)}">
          <animate attributeName="opacity" values="${q(0.3 + 0.7 * fuerza)};${q(0.12 + 0.4 * fuerza)};${q(0.3 + 0.7 * fuerza)}" dur="${q(7 + i % 5)}s" repeatCount="indefinite"/></polygon>`;
      }

      /* ---------- el banco de arena del fondo lejano ---------- */
      let lejano = "M-20 " + n(banco(-20));
      for (let x = 60; x <= W + 20; x += 80) lejano += "L" + n(x) + " " + n(banco(x));
      s += `<path d="${lejano}L${W + 20} 1100L-20 1100Z" fill="url(#ocnXBanco)"/>`;

      /* ---------- el cañón submarino: dos paredes que se abren ----------
         entra a la mitad del recorrido y su boca da paso al abismo */
      /* una sombra blanda marca la boca del cañón, sin ningún canto */
      s += `<ellipse cx="2900" cy="1058" rx="540" ry="230" fill="url(#ocnXVeloAbismo)"/>`;
      /* las dos paredes, en forma de cuña: los dos extremos de cada una mueren
         sobre la arena, así no queda ninguna raya recta cortando el fondo */
      s += `<path d="M2520 ${n(banco(2520))} Q2648 772 2704 908 Q2748 1024 2768 1100 L2648 1100 Q2632 992 2596 890 Q2564 806 2520 ${n(banco(2520))} Z" fill="url(#ocnXPared)" opacity=".8"/>
        <path d="M3340 ${n(banco(3340))} Q3268 812 3240 928 Q3220 1022 3212 1100 L3320 1100 Q3336 1000 3364 912 Q3392 828 3340 ${n(banco(3340))} Z" fill="url(#ocnXPared)" opacity=".58"/>`;
      /* un filo de luz en el canto de cada pared: sin él el cañón no se lee */
      s += `<path d="M2520 ${n(banco(2520))} Q2648 772 2704 908" stroke="#7fb6c8" stroke-opacity=".28" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M3340 ${n(banco(3340))} Q3268 812 3240 928" stroke="#6fa4b8" stroke-opacity=".18" stroke-width="4" fill="none" stroke-linecap="round"/>`;
      /* escalones de roca dentro del cañón, cada vez más oscuros */
      [[2650, 880, 150, 44], [2830, 960, 190, 48], [3040, 1010, 170, 42], [3230, 1044, 140, 38]].forEach((r, i) => {
        s += `<path d="M${n(r[0] - r[2])} ${n(r[1] + r[3])} L${n(r[0] - r[2] * .6)} ${r[1]} L${n(r[0] + r[2] * .6)} ${n(r[1] + 6)} L${n(r[0] + r[2])} ${n(r[1] + r[3])} Z"
          fill="#22343d" opacity="${q(0.7 - i * 0.09)}"/>`;
      });
      /* la fosa del final: el corte más hondo de todos */
      s += `<path d="M3900 ${n(banco(3900))} Q3980 1000 4040 1060 L4040 1100 L4220 1100 L4220 ${n(banco(4220))} Z" fill="#040d15" opacity=".8"/>
        <path d="M3960 1044 Q4080 1006 4200 1040 L4200 1100 L3960 1100 Z" fill="#01070c"/>`;

      /* ---------- la arena del primer plano, con el color de cada tramo ---------- */
      let arena = "M-20 " + n(fondo(-20));
      for (let x = 60; x <= W + 20; x += 60) arena += "L" + n(x) + " " + n(fondo(x));
      s += `<path d="${arena}L${W + 20} 1100L-20 1100Z" fill="url(#ocnXArena)"/>`;
      s += `<path d="${arena}" stroke="#ffffff" stroke-opacity=".14" stroke-width="5" fill="none"/>`;
      /* ondulaciones de la arena: siete filas que bajan hacia el primer plano.
         Antes solo había una hilera pegada al borde y todo el fondo de abajo
         quedaba como una plancha lisa de color */
      for (let fila = 0; fila < 7; fila++) {
        let claro = "", oscuro = "";
        for (let i = 0; i < 26; i++) {
          const x = n(10 + i * 122 + 70 * rnd(i + fila * 13 + 21));
          const y = n(fondo(x) + 28 + fila * 46 + 16 * rnd(i + fila * 13 + 41));
          if (y > 1082 || x > W - 30) continue;
          const largo = n(58 + fila * 14 + 44 * rnd(i + fila * 13 + 61));
          const d = `M${x} ${y}q${n(largo * 0.5)} ${n(-9 - fila)} ${largo} 0`;
          if (x < 2300) claro += d; else oscuro += d;
        }
        const gr = q(0.26 - fila * 0.022);
        if (claro) s += `<path d="${claro}" stroke="#fff6d8" stroke-opacity="${gr}" stroke-width="${q(3 + fila * 0.4)}" fill="none" stroke-linecap="round"/>`;
        if (oscuro) s += `<path d="${oscuro}" stroke="#cfe6ee" stroke-opacity="${q(gr * 0.55)}" stroke-width="${q(3 + fila * 0.4)}" fill="none" stroke-linecap="round"/>`;
      }
      /* conchas y erizos menudos repartidos por la arena clara */
      for (let i = 0; i < 22; i++) {
        const x = n(60 + rnd(i + 1301) * 2500), y = n(fondo(x) + 60 + rnd(i + 1321) * 400);
        if (y > 1078 || !lib(x - 16, y - 14, 32, 28)) continue;
        if (i % 3 === 0) {
          s += `<path d="M${x} ${y}q-16 -6 -16 -16q0 -12 16 -12q16 0 16 12q0 10 -16 16Z" fill="#f3e0c0" opacity=".8"/>
            <path d="M${x} ${y}l-6 -22M${x} ${y}l0 -24M${x} ${y}l6 -22" stroke="#d8bd94" stroke-width="2.4" fill="none" stroke-linecap="round"/>`;
        } else if (i % 3 === 1) {
          s += `<path d="M${n(x - 15)} ${y}q4 -20 15 -20q11 0 15 20Z" fill="#eddcbb" opacity=".76"/>`;
        } else {
          s += `<circle cx="${x}" cy="${y}" r="${q(6 + 3 * rnd(i + 1341))}" fill="#b9a684" opacity=".6"/>
            <path d="M${x} ${n(y - 12)}v-6M${x} ${n(y + 12)}v6M${n(x - 12)} ${y}h-6M${n(x + 12)} ${y}h6" stroke="#a08d6c" stroke-width="2.4" stroke-linecap="round"/>`;
        }
      }

      /* ---------- costa y arrecife somero: corales bajos y estrellas de mar ---------- */
      const coral = (x, y, k, tono, tono2) => `<g transform="translate(${n(x)} ${n(y)}) scale(${q(k)})">
        <path d="M0 0 q-4 -26 -20 -40 M0 0 q2 -30 0 -46 M0 0 q6 -24 22 -38" stroke="${tono}" stroke-width="11" fill="none" stroke-linecap="round"/>
        <circle cx="-20" cy="-42" r="8" fill="${tono2}"/><circle cx="0" cy="-48" r="9" fill="${tono}"/><circle cx="22" cy="-40" r="8" fill="${tono2}"/>
        <ellipse cx="0" cy="2" rx="26" ry="7" fill="${tono}" opacity=".5"/></g>`;
      const TONOS = [["#ef8fa8", "#ffd0dc"], ["#f2b45c", "#ffe0a8"], ["#a98fe0", "#dcccff"], ["#5ec8b6", "#b8f0e6"]];
      for (let i = 0; i < 26; i++) {
        const x = 60 + i * 46 + 20 * rnd(i + 31);
        const g = peso(TRAMOS.costa, x);
        if (g < 0.12 || rnd(i + 61) > 0.3 + 0.62 * g) continue;
        const y = fondo(x) + 6;
        const k = (0.5 + 0.6 * g) * (0.8 + 0.5 * rnd(i + 91));
        if (!lib(x - 34 * k, y - 58 * k, 68 * k, 62 * k)) continue;
        const t = TONOS[i % TONOS.length];
        s += coral(x, y, k, t[0], t[1]);
      }
      /* estrellas de mar tumbadas en la arena clara */
      for (let i = 0; i < 7; i++) {
        const x = 90 + i * 118 + 30 * rnd(i + 13), y = fondo(x) + 26;
        if (!lib(x - 22, y - 22, 44, 44)) continue;
        let br = "";
        for (let b = 0; b < 5; b++) {
          const a = (b / 5) * Math.PI * 2 - Math.PI / 2;
          br += `M0 0 L${q(Math.cos(a) * 20)} ${q(Math.sin(a) * 20)}`;
        }
        s += `<g transform="translate(${n(x)} ${n(y)}) rotate(${n(rnd(i + 41) * 70)})">
          <path d="${br}" stroke="#f2a15c" stroke-width="11" stroke-linecap="round" fill="none"/>
          <circle r="6" fill="#ffc98a"/></g>`;
      }
      /* piedrecitas repartidas por la arena de todo el recorrido */
      for (let i = 0; i < 46; i++) {
        const x = 40 + rnd(i + 101) * (W - 80), y = fondo(x) + 14 + 40 * rnd(i + 131);
        s += `<ellipse cx="${n(x)}" cy="${n(y)}" rx="${q(5 + 7 * rnd(i + 151))}" ry="${q(3 + 4 * rnd(i + 171))}"
          fill="#7f8a86" opacity="${q(0.22 + 0.3 * Math.max(0, 1 - x / 3200))}"/>`;
      }

      /* ---------- praderas de algas: hojas que crecen y luego se van ---------- */
      const alga = (x, y, alto, k, dur) => `<g transform="translate(${n(x)} ${n(y)})">
        <path d="M0 0 q${n(-18 * k)} ${n(-alto * .34)} ${n(-4 * k)} ${n(-alto * .62)} q${n(14 * k)} ${n(-alto * .3)} ${n(2 * k)} ${n(-alto)}"
          stroke="url(#ocnXAlga)" stroke-width="${q(9 * k)}" fill="none" stroke-linecap="round">
          <animateTransform attributeName="transform" type="rotate" values="-3 0 0;3 0 0;-3 0 0" dur="${dur}s" repeatCount="indefinite"/></path></g>`;
      for (let i = 0; i < 86; i++) {
        const x = 700 + i * 12 + 10 * rnd(i + 201);
        const g = peso(TRAMOS.praderas, x);
        if (g < 0.1 || rnd(i + 231) > 0.24 + 0.66 * g) continue;
        const y = fondo(x) + 8;
        const alto = (110 + 210 * g) * (0.7 + 0.6 * rnd(i + 251));
        const k = 0.6 + 0.5 * g;
        if (!eje(x - 24 * k, y - alto, 48 * k, alto)) continue;
        s += alga(x, y, alto, k, q(5 + 4 * rnd(i + 271)));
      }
      /* la pradera se despide poco a poco: cada vez menos algas y más bajas,
         hasta que el mar abierto se queda solo */
      for (let i = 0; i < 24; i++) {
        const x = 1620 + i * 30 + 18 * rnd(i + 301);
        const merma = Math.max(0, 1 - (x - 1620) / 700);
        if (rnd(i + 331) > 0.14 + 0.6 * merma) continue;
        const y = fondo(x) + 6, alto = (54 + 128 * merma) * (0.7 + 0.5 * rnd(i + 351));
        if (!eje(x - 18, y - alto, 36, alto)) continue;
        s += alga(x, y, alto, q(0.34 + 0.34 * merma), q(6 + 3 * rnd(i + 371)));
      }
      /* una última mata de algas con su piedra, para que la del final no se
         quede como un palo suelto en mitad de la arena */
      [[2062, .42], [2098, .34], [2132, .3]].forEach((a, i) => {
        s += alga(a[0], fondo(a[0]) + 6, 120 + 40 * i, a[1], q(6 + i));
      });
      s += `<ellipse cx="2108" cy="${n(fondo(2108) + 12)}" rx="46" ry="15" fill="#6f7c74" opacity=".5"/>`;
      /* y una roca donde el pulpo pueda posarse */
      s += `<path d="M1250 ${n(fondo(1250) + 22)}q22 -66 82 -62q58 4 78 62q-14 14 -80 16q-66 -2 -80 -16Z" fill="#7c8b83" opacity=".8"/>
        <path d="M1274 ${n(fondo(1250) - 12)}q56 -18 116 -2" stroke="rgba(255,250,224,.24)" stroke-width="6" fill="none" stroke-linecap="round"/>`;

      /* ---------- fauna de fondo: bancos de pececillos, sin dar miedo ----------
         muchos y menudos en la costa, sueltos en el mar abierto y ninguno en
         el abismo, donde en su lugar hay nieve marina y luces */
      const pez = (x, y, k, tono, op) => `<g transform="translate(${n(x)} ${n(y)}) scale(${q(k)})" opacity="${op}">
        <path d="M-13 0 q7 -8 15 -8 q10 0 14 8 q-4 8 -14 8 q-8 0 -15 -8 Z" fill="${tono}"/>
        <path d="M-13 0 L-22 -7 L-20 0 L-22 7 Z" fill="${tono}"/>
        <circle cx="9" cy="-2" r="1.8" fill="#0d2430"/></g>`;
      const BANCOS = [[300, 250, 12, .9], [640, 430, 10, .85], [1080, 620, 9, .8],
      [1500, 300, 8, .75], [1980, 620, 7, .6], [2280, 330, 6, .55], [2660, 640, 5, .45]];
      BANCOS.forEach((b, bi) => {
        const cx = b[0], cy = b[1];
        const fuerza = Math.max(0, 1 - cx / 3100);
        if (fuerza < 0.05) return;
        let grupo = "";
        for (let i = 0; i < b[2]; i++) {
          const x = cx + (rnd(i + bi * 17 + 401) - 0.5) * 190, y = cy + (rnd(i + bi * 17 + 431) - 0.5) * 120;
          if (!lib(x - 24, y - 12, 48, 24)) continue;
          const tono = bi % 3 === 0 ? "#ffd166" : (bi % 3 === 1 ? "#7fd8f2" : "#f5a3b4");
          grupo += pez(x, y, q(b[3] * (0.7 + 0.6 * rnd(i + bi * 17 + 461))), tono, q(0.4 + 0.5 * fuerza));
        }
        if (!grupo) return;
        s += `<g><animateTransform attributeName="transform" type="translate" values="0 0;${n(26 + 20 * rnd(bi + 491))} ${n(-10 - 8 * rnd(bi + 521))};0 0" dur="${q(12 + bi * 2)}s" repeatCount="indefinite"/>${grupo}</g>`;
      });

      /* ---------- burbujas: suben desde el fondo por todo el recorrido ---------- */
      for (let i = 0; i < 26; i++) {
        const x = 120 + rnd(i + 551) * (W - 240), y0 = fondo(x) - 20 - rnd(i + 581) * 160;
        if (!lib(x - 12, y0 - 12, 24, 24)) continue;
        const r = q(4 + 6 * rnd(i + 611)), sube = n(120 + 180 * rnd(i + 641));
        s += `<circle cx="${n(x)}" cy="${n(y0)}" r="${r}" fill="none" stroke="#dff6ff" stroke-opacity=".38" stroke-width="2">
          <animate attributeName="cy" values="${n(y0)};${n(y0 - sube)}" dur="${q(7 + 5 * rnd(i + 671))}s" repeatCount="indefinite"/>
          <animate attributeName="stroke-opacity" values=".38;0" dur="${q(7 + 5 * rnd(i + 671))}s" repeatCount="indefinite"/></circle>`;
      }

      /* ---------- la corriente del mar abierto ----------
         unos hilos de agua muy tenues cruzando el azul: dan movimiento a la
         mitad honda, que se quedaba como un muro liso */
      let corriente = "";
      for (let i = 0; i < 9; i++) {
        const x = n(2500 + i * 190), y = n(300 + rnd(i + 1461) * 380);
        if (!eje(x - 130, y - 30, 260, 60)) continue;
        corriente += `M${x} ${y}q${n(70 + 30 * rnd(i + 1481))} ${n(-26 - 16 * rnd(i + 1501))} ${n(150 + 50 * rnd(i + 1521))} ${n(-6 - 8 * rnd(i + 1541))}`;
      }
      if (corriente) s += `<path d="${corriente}" stroke="rgba(190,230,255,.16)" stroke-width="7" fill="none" stroke-linecap="round">
        <animate attributeName="stroke-opacity" values=".5;.9;.5" dur="12s" repeatCount="indefinite"/></path>`;

      /* ---------- nieve marina: motitas que caen, cada vez más al fondo ---------- */
      [[0, 13], [2.4, 15], [4.8, 17]].forEach((t, ti) => {
        let motas = "";
        for (let i = 0; i < 26; i++) {
          const x = 1700 + rnd(i + ti * 23 + 701) * (W - 1760), y = 380 + rnd(i + ti * 23 + 731) * 640;
          const densidad = Math.min(1, Math.max(0, (x - 1700) / 1400));
          if (rnd(i + ti * 23 + 761) > 0.25 + 0.7 * densidad) continue;
          motas += `<circle cx="${n(x)}" cy="${n(y)}" r="${q(1.6 + 1.6 * rnd(i + ti * 23 + 791))}"/>`;
        }
        if (!motas) return;
        s += `<g fill="#e4f4ff" fill-opacity=".5"><animateTransform attributeName="transform" type="translate" values="0 -80;14 230" dur="${t[1]}s" begin="${t[0]}s" repeatCount="indefinite"/>
          <animate attributeName="fill-opacity" values="0;.5;.4;0" dur="${t[1]}s" begin="${t[0]}s" repeatCount="indefinite"/>${motas}</g>`;
      });

      /* ---------- el relieve del abismo: crestas lejanas y bloques de roca ----------
         sin esto la mitad honda del mapa se quedaba en un negro plano */
      /* la cuña nace con grosor cero sobre la arena y va ganando altura, y
         vuelve pegada a ella: así no queda ningún canto recto cortando el
         fondo iluminado, que es lo que delataba el borde antes */
      let crestaAbismo = "M2860 " + n(fondo(2860));
      for (let x = 2940; x <= W + 20; x += 110) {
        const entra = Math.min(1, Math.max(0, (x - 2860) / 560));
        crestaAbismo += "L" + n(x) + " " + n(fondo(x) - entra * (66 + 62 * rnd(x + 1201)));
      }
      for (let x = W + 20; x >= 2860; x -= 110) crestaAbismo += "L" + n(x) + " " + n(fondo(x));
      s += `<path d="${crestaAbismo}Z" fill="#0e1d26" opacity=".66"/>`;
      const bloque = (x, y, k) => `<g transform="translate(${n(x)} ${n(y)}) scale(${q(k)})">
        <path d="M-40 20 L-26 -16 L-4 -28 L22 -14 L40 18 Z" fill="#22343d"/>
        <path d="M-26 -16 L-4 -28 L0 -8 L-16 2 Z" fill="#354a53" opacity=".8"/></g>`;
      for (let i = 0; i < 20; i++) {
        const x = 3060 + rnd(i + 901) * (W - 3120), y = fondo(x) + 8 - 34 * rnd(i + 931);
        const k = q(0.55 + 0.95 * rnd(i + 961));
        if (!lib(x - 46 * k, y - 36 * k, 92 * k, 46 * k)) continue;
        s += bloque(x, y, k);
      }
      /* montículos blandos del fondo, con su corona de luz muy tenue */
      [[3520, .9], [3760, .7], [4010, 1]].forEach((m, i) => {
        const x = m[0], y = fondo(x) + 6, k = m[1];
        s += `<ellipse cx="${n(x)}" cy="${n(y)}" rx="${n(96 * k)}" ry="${n(30 * k)}" fill="#1b2c35" opacity=".8"/>
          <ellipse cx="${n(x)}" cy="${n(y - 12 * k)}" rx="${n(58 * k)}" ry="${n(18 * k)}" fill="#263a43" opacity=".7"/>
          <ellipse cx="${n(x)}" cy="${n(y - 16 * k)}" rx="${n(70 * k)}" ry="${n(22 * k)}" fill="url(#ocnXBrillo)" opacity=".16">
            <animate attributeName="opacity" values=".16;.05;.16" dur="${9 + i}s" repeatCount="indefinite"/></ellipse>`;
      });

      /* ---------- el mundo del abismo: chimeneas calientes y luces amables ---------- */
      /* el montículo de roca sobre el que se apoyan las chimeneas del mapa */
      s += `<path d="M3080 ${n(fondo(3080))} Q3150 946 3205 934 Q3262 946 3330 ${n(fondo(3330))} Z" fill="#2c3e46" opacity=".9"/>
        <path d="M3140 962 Q3186 940 3205 936 Q3228 942 3272 964 Z" fill="#41565e" opacity=".7"/>`;
      /* penachos de agua calentita que salen de las chimeneas, en tono cálido */
      [[3160, 946, 1], [3252, 958, .8]].forEach((c, i) => {
        s += `<path d="M${c[0]} ${c[1]} q${n(-14 * c[2])} -70 ${n(4 * c[2])} -140 q${n(16 * c[2])} -66 ${n(2 * c[2])} -132"
          stroke="url(#ocnXHumo)" stroke-width="${q(26 * c[2])}" fill="none" stroke-linecap="round" opacity=".7">
          <animate attributeName="opacity" values=".7;.32;.7" dur="${6 + i * 2}s" repeatCount="indefinite"/></path>`;
      });
      /* luces bioluminiscentes: dos grupos que se turnan, nunca a la vez */
      [[".85;.2;.85", 4.8, 0], [".2;.85;.2", 6, 40]].forEach(d => {
        let halos = "", nucleos = "";
        for (let i = 0; i < 11; i++) {
          const x = n(2700 + rnd(i + d[2] + 811) * 1420), y = n(660 + rnd(i + d[2] + 841) * 380);
          if (!lib(x - 24, y - 24, 48, 48)) continue;
          halos += `<circle cx="${x}" cy="${y}" r="${n(13 + 11 * rnd(i + d[2] + 871))}"/>`;
          nucleos += `<circle cx="${x}" cy="${y}" r="3"/>`;
        }
        if (!nucleos) return;
        s += `<g><animate attributeName="opacity" values="${d[0]}" dur="${d[1]}s" repeatCount="indefinite"/>
          <g fill="url(#ocnXBrillo)">${halos}</g><g fill="#d9fbff">${nucleos}</g></g>`;
      });
      /* algún destello suelto en la pared de la fosa, para que no esté muerta */
      s += `<g fill="url(#ocnXBrillo)" opacity=".55"><animate attributeName="opacity" values=".55;.14;.55" dur="8s" repeatCount="indefinite"/>
        <circle cx="4056" cy="1032" r="18"/><circle cx="3986" cy="988" r="12"/><circle cx="3336" cy="1008" r="14"/></g>`;

      /* ---------- LA DUNA DE DELANTE ----------
         el borde de abajo del todo: una loma de arena muy cercana, con sus
         piedras y unas hojas oscuras. Da el tercer plano y quita la sensación
         de plancha lisa que tenía el fondo. Se retira antes de la fosa,
         que tiene que seguir siendo el sitio más hondo del mapa */
      const dunaCerca = [[-20, 1046], [420, 1016], [900, 1052], [1380, 1024],
      [1860, 1058], [2340, 1030], [2820, 1062], [3200, 1092], [3460, 1104]];
      let bordeDuna = "M-20 " + dunaCerca[0][1];
      for (let i = 1; i + 1 < dunaCerca.length; i += 2) {
        bordeDuna += `Q${dunaCerca[i][0]} ${dunaCerca[i][1]} ${dunaCerca[i + 1][0]} ${dunaCerca[i + 1][1]}`;
      }
      s += `<path d="${bordeDuna}L3460 1100L-20 1100Z" fill="url(#ocnXDunaCerca)"/>
        <path d="${bordeDuna}" stroke="rgba(255,248,214,.2)" stroke-width="6" fill="none"/>`;
      /* piedras y hojas en primer término, en silueta */
      [[240, 1054, 40], [1020, 1072, 30], [1720, 1080, 46], [2560, 1084, 34]].forEach((r, i) => {
        s += `<path d="M${n(r[0] - r[2])} ${r[1] + 22}q${n(r[2] * 0.24)} ${n(-r[2] * 1.3)} ${n(r[2] * 1.05)} ${n(-r[2] * 1.2)}q${n(r[2] * 0.8)} 6 ${n(r[2] * 0.95)} ${n(r[2] * 1.2)}Z" fill="${i % 2 ? "#5c6a63" : "#6c7a6f"}" opacity=".9"/>`;
      });
      let hojasCerca = "";
      [[120, .8], [620, .66], [1240, .72], [1980, .6], [2420, .54]].forEach(h => {
        const y = 1104;
        hojasCerca += `M${h[0]} ${y}q${n(-32 * h[1])} ${n(-90 * h[1])} ${n(-8 * h[1])} ${n(-170 * h[1])}M${n(h[0] + 26 * h[1])} ${y}q${n(-14 * h[1])} ${n(-80 * h[1])} ${n(10 * h[1])} ${n(-146 * h[1])}`;
      });
      s += `<path d="${hojasCerca}" stroke="#2f4a3a" stroke-width="16" fill="none" stroke-linecap="round" opacity=".75"/>`;

      return s;
    }

    /* El escenario se dibuja entero aquí y sale en un solo <svg>: lo que
       venía de antes estaba medido para 2600 de ancho y se descarta. */
    THEMES.oceano.content.explore.deco = function (e) {
      return decoSvg(marPorProfundidades(e), e.width);
    };
  })();

})();
