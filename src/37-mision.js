"use strict";
/* ============================================================
   MISIÓN DEL DÍA: 3 retos pequeños que cruzan aventuras, con
   una pegatina de premio. Sin rachas ni castigos: si un día no
   se juega, al día siguiente simplemente hay misión nueva.
   Los eventos llegan por misionEv() desde el motor.
   ============================================================ */

const RETOS_DEF = [
  { id: "star", ev: "star", n: 4, ic: "⭐", tk: "mChStar" },
  { id: "poi", ev: "poi", n: 5, ic: "🗺️", tk: "mChPoi" },
  { id: "song", ev: "song", n: 1, ic: "🎤", tk: "mChSong" },
  { id: "leer", ev: "leer", n: 1, ic: "📖", tk: "mChLeer" },
  { id: "quiz", ev: "quiz", n: 1, ic: "❓", tk: "mChQuiz" },
  { id: "math", ev: "math", n: 1, ic: "🔢", tk: "mChMath" },
  { id: "build", ev: "build", n: 1, ic: "🔧", tk: "mChBuild" },
  { id: "call", ev: "call", n: 3, ic: "📞", tk: "mChCall" },
  { id: "abc", ev: "abc", n: 4, ic: "🔤", tk: "mChAbc" },
  { id: "care", ev: "care", n: 1, ic: "🪴", tk: "mChCare" }
];

const STICKERS = ["🦄", "🐙", "🚀", "🌈", "🦕", "🎸", "🐬", "🦋", "🍩", "⚽", "🎨", "🐸", "🐝", "🌻", "🍉", "🤖", "🪐", "🐧", "🦁", "🍦", "🎈", "🐢", "🌟", "🧁"];

function misionHoy() {
  const d = new Date();
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}

/* crea (o renueva) la misión si es un día nuevo */
function misionCheck() {
  const hoy = misionHoy();
  if (!S.mision || S.mision.d !== hoy) {
    S.mision = {
      d: hoy,
      retos: shuffle(RETOS_DEF.slice()).slice(0, 3).map(r => ({ id: r.id, n: r.n, p: 0 })),
      done: false,
      st: null
    };
    save();
  }
  return S.mision;
}

/* un evento de juego: ev = star | poi | song | leer | quiz | math | build | call | abc | care */
function misionEv(ev, k) {
  if (!S || !S.setupDone || !S.mision) return;
  if (S.mision.d !== misionHoy()) misionCheck();
  if (S.mision.done) return;
  let cambio = false;
  S.mision.retos.forEach(r => {
    const def = RETOS_DEF.find(x => x.id === r.id);
    if (def && def.ev === ev && r.p < r.n) { r.p = Math.min(r.n, r.p + (k || 1)); cambio = true; }
  });
  if (!cambio) return;
  if (S.mision.retos.every(r => r.p >= r.n)) {
    S.mision.done = true;
    S.stats = S.stats || { ms: 0, dias: {} };
    S.stats.mis = (S.stats.mis || 0) + 1;
    S.stickers = S.stickers || [];
    const libres = STICKERS.filter(s => !S.stickers.includes(s));
    S.mision.st = shuffle(libres.length ? libres : STICKERS.slice())[0];
    S.stickers.push(S.mision.st);
    save();
    confetti(30);
    if (typeof sfx === "function") sfx("good");
    toast("🎯 " + t("mDone") + " 🎁 " + S.mision.st);
    Speech.say(t("mDoneMsg"), { queue: true });
    if (S.screen === "hub" && typeof renderHub === "function") renderHub();
  } else {
    save();
    if (S.screen === "hub" && typeof renderHub === "function") renderHub();
  }
}

/* la tarjeta de la portada */
function misionCard() {
  const mi = misionCheck();
  return `<div class="card">
    <h2>🎯 ${t("mTitle")} ${mi.done ? "✅" : ""}</h2>
    ${mi.retos.map(r => {
      const def = RETOS_DEF.find(x => x.id === r.id);
      const hecho = r.p >= r.n;
      return `<div class="misionrow ${hecho ? "done" : ""}">
        <span style="font-size:1.4rem">${def.ic}</span>
        <span class="mtx">${t(def.tk, { n: r.n })}</span>
        <span class="mprog">${hecho ? "✅" : r.p + "/" + r.n}</span>
      </div>`;
    }).join("")}
    ${mi.done ? `<p class="center" style="margin:6px 0 0">🎁 ${t("mSticker")}: <span style="font-size:1.7rem">${mi.st}</span></p>` : ""}
  </div>`;
}

/* aviso flotante que no rompe la pantalla en curso */
function toast(txt) {
  const viejo = document.querySelector(".toast");
  if (viejo) viejo.remove();
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = txt;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 4300);
}
