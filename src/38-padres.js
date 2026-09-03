"use strict";
/* ============================================================
   RINCÓN DE LOS PADRES: panel discreto desde Ajustes con una
   puerta para adultos (una multiplicación) y un resumen de
   cómo va el peque: tiempo, estrellas, lectura y qué practicar.
   Solo lee el estado; no cambia nada del juego.
   ============================================================ */

let parentsSol = 0;

function parentsAsk() {
  const a = 3 + Math.floor(Math.random() * 7), b = 3 + Math.floor(Math.random() * 7);
  parentsSol = a * b;
  openModal(`
    <h2>🧑‍🧒 ${t("pTitle")}</h2>
    <p class="muted">${t("pGate")}</p>
    <p style="font-size:1.6rem;font-weight:800">${a} × ${b} = ?</p>
    <input id="pgate-in" type="number" inputmode="numeric" style="font-size:1.4rem;width:110px;text-align:center;border-radius:12px;border:none;padding:8px" />
    <div style="margin-top:10px">
      <button class="btn good" onclick="NB.parentsGo()">${t("pGateGo")}</button>
      <button class="btn soft" onclick="NB.closeModal()">${t("close")}</button>
    </div>`);
  const inp = document.getElementById("pgate-in");
  if (inp) { inp.focus(); inp.onkeydown = e => { if (e.key === "Enter") parentsGo(); }; }
}

function parentsGo() {
  const inp = document.getElementById("pgate-in");
  if (!inp || parseInt(inp.value, 10) !== parentsSol) { closeModal(); return; }
  parentsShow();
}

function fmtMin(ms) { return Math.round((ms || 0) / 60000) + " " + t("pMin"); }

function parentsShow() {
  const st = S.stats || { ms: 0, dias: {} };
  const hoy = (typeof misionHoy === "function") ? misionHoy() : "";
  const fila = (ic, lbl, val) => `<div class="misionrow"><span style="font-size:1.2rem">${ic}</span><span class="mtx">${lbl}</span><span class="mprog">${val}</span></div>`;

  const estrellas = Object.keys(THEMES).reduce((a, th) => a + themeStars(th), 0) + (typeof leerTotal === "function" ? leerTotal() : 0);
  const libro = (typeof bookTotals === "function") ? bookTotals() : { f: 0, tot: 0 };

  /* lectura: estrellas por lección y qué flojea */
  const lecFlojas = LEER_LECC.filter(x => leerStars(x.n) < 2);
  const leerLinea = LEER_LECC.map(x => `${x.ic}${"⭐".repeat(leerStars(x.n)) || "·"}`).join("  ");

  /* temas empezados con pocas estrellas: los candidatos a repasar juntos */
  const flojos = Object.keys(THEMES)
    .map(th => ({ th, s: themeStars(th) }))
    .filter(x => x.s > 0 && x.s < 12)
    .sort((a, b) => a.s - b.s)
    .slice(0, 3);

  const practicar = [
    ...lecFlojas.map(x => `📖 ${t(x.nm)}`),
    ...flojos.map(x => `${THEMES[x.th].emoji} ${tx(THEMES[x.th].name)} (${x.s} ⭐)`)
  ];

  openModal(`
    <h2>🧑‍🧒 ${t("pTitle")}</h2>
    ${fila("⏱️", t("pToday"), fmtMin(st.dias[hoy]))}
    ${fila("🗓️", t("pTotal"), fmtMin(st.ms))}
    ${fila("⭐", t("pStars"), estrellas)}
    ${fila("🏅", t("pMedals"), totalMedals())}
    ${fila("🎯", t("pMis"), (st.mis || 0))}
    ${fila("🎁", t("pStickers"), (S.stickers || []).length)}
    ${fila("📚", t("pEnds"), libro.f + "/" + libro.tot)}
    <div class="misionrow"><span style="font-size:1.2rem">📖</span><span class="mtx">${t("pLeer")}</span><span class="mprog">${leerLinea}</span></div>
    <h2 style="margin-top:10px;font-size:1.05rem">💡 ${t("pPractice")}</h2>
    ${practicar.length ? practicar.map(p => `<div class="misionrow"><span class="mtx">${p}</span></div>`).join("") : `<p class="muted">${t("pPracticeNone")}</p>`}
    <button class="btn soft" onclick="NB.closeModal()">${t("close")}</button>`);
}
