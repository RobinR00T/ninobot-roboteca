"use strict";
/* ============================================================
   DISFRACES: en cada aventura, el robot acompañante (sea cual
   sea) va vestido para la ocasión: doctor en el cuerpo humano,
   arqueólogo en Egipto, explorador en el Amazonas...
   Cada disfraz es un gorro (hat) y un objeto (item) superpuestos
   al SVG del robot; "bubble" es el casco transparente de
   astronauta o buzo y "mustache" el bigote de Dalí, dibujados.
   ============================================================ */

const DISFRAZ = {
  espacio: { hat: "bubble", item: "🔭" },              /* astronauta con telescopio */
  dinos: { hat: "🧢", item: "⛏️" },                    /* paleontólogo */
  cuerpo: { hat: "⛑️", item: "🩺" },                   /* doctor o enfermera */
  tierramedia: { hat: "🎩", item: "💍" },              /* mago con el anillo */
  oceano: { hat: "bubble", item: "🤿" },               /* buzo */
  animales: { hat: "👒", item: "📷" },                 /* safari fotográfico */
  musica: { hat: "🎩", item: "🎼" },                   /* director de orquesta */
  increibles: { hat: "🎓", item: "🔬" },               /* científica */
  starwars: { hat: "🎧", item: "🕹️" },                 /* piloto estelar */
  piratas: { hat: "🦜", item: "🗺️" },                  /* pirata con su loro */
  egipto: { hat: "👒", item: "📜" },                   /* arqueólogo */
  amazonas: { hat: "🍃", item: "🧭" },                 /* explorador de la selva */
  gaudi: { hat: "🦎", item: "📐" },                    /* arquitecto con la salamandra */
  miro: { hat: "⭐", item: "🖌️" },                     /* pintor con su estrella */
  dali: { hat: "mustache", item: "⏰" },               /* el bigote y el reloj blando */
  picasso: { hat: "🕊️", item: "🎨" },                  /* pintor con su paloma */
  arboles: { hat: "🐦", item: "🌱" },                  /* guardabosques */
  frutas: { hat: "🍓", item: "🧺" },                   /* hortelano */
  policia: { hat: "🚨", item: "🦺" },                  /* agente con su luz y chaleco */
  bomberos: { hat: "⛑️", item: "🧯" },                 /* bombero con casco y extintor */
  cocina: { hat: "chefhat", item: "🍳" }               /* chef con gorro dibujado y sartén */
};

/* el robot activo con el disfraz del tema actual (si lo hay) */
function robotDisfraz(size, anim) {
  const r = robot();
  const base = r.svg(size, anim);
  const d = S.theme ? DISFRAZ[S.theme] : null;
  if (!d) return base;
  const s = size;
  let extra = "";
  if (d.hat === "bubble") {
    extra += `<span style="position:absolute;left:50%;top:${(-s * 0.04).toFixed(0)}px;transform:translateX(-50%);width:${(s * 0.6).toFixed(0)}px;height:${(s * 0.6).toFixed(0)}px;border-radius:50%;border:${Math.max(2, s * 0.05).toFixed(0)}px solid rgba(180,220,255,.85);background:rgba(160,200,255,.14);pointer-events:none"></span>`;
  } else if (d.hat === "chefhat") {
    extra += `<svg viewBox="0 0 60 40" style="position:absolute;left:50%;top:${(-s * 0.2).toFixed(0)}px;transform:translateX(-50%);width:${(s * 0.5).toFixed(0)}px;pointer-events:none"><path d="M14 26 Q4 24 6 15 Q8 7 16 9 Q19 2 30 2 Q41 2 44 9 Q52 7 54 15 Q56 24 46 26 Z" fill="#fdfdfd" stroke="#cfd8dc" stroke-width="1.6"/><rect x="14" y="26" width="32" height="8" rx="3" fill="#eceff1" stroke="#cfd8dc" stroke-width="1.4"/></svg>`;
  } else if (d.hat === "mustache") {
    extra += `<svg viewBox="0 0 40 14" style="position:absolute;left:50%;top:${(s * 0.42).toFixed(0)}px;transform:translateX(-50%);width:${(s * 0.55).toFixed(0)}px;pointer-events:none"><path d="M20 9 Q13 11 8 7 Q4 3 2 6 M20 9 Q27 11 32 7 Q36 3 38 6" stroke="#161616" stroke-width="2.6" fill="none" stroke-linecap="round"/></svg>`;
  } else if (d.hat) {
    extra += `<span style="position:absolute;left:50%;top:${(-s * 0.22).toFixed(0)}px;transform:translateX(-50%) rotate(-8deg);font-size:${(s * 0.4).toFixed(0)}px;line-height:1;pointer-events:none">${d.hat}</span>`;
  }
  if (d.item) {
    extra += `<span style="position:absolute;right:${(-s * 0.14).toFixed(0)}px;bottom:${(-s * 0.02).toFixed(0)}px;font-size:${(s * 0.38).toFixed(0)}px;line-height:1;pointer-events:none">${d.item}</span>`;
  }
  return `<span style="position:relative;display:inline-block;width:${s}px;height:${s}px">${base}${extra}</span>`;
}
