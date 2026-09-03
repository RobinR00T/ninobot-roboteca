"use strict";
/* ============================================================
   Motor de la app: pantallas, modos de juego y navegación.
   ============================================================ */

/* Textos que necesita el motor (añadidos aquí para no tocar el diccionario base) */
Object.assign(T, {
  mathCount: { es: "¿Cuántos hay?", ca: "Quants n'hi ha?", en: "How many are there?", cs: "Kolik jich je?", fr: "Combien y en a-t-il ?" },
  plus: { es: "más", ca: "més", en: "plus", cs: "plus", fr: "plus" },
  minus: { es: "menos", ca: "menys", en: "minus", cs: "minus", fr: "moins" },
  times: { es: "por", ca: "per", en: "times", cs: "krát", fr: "fois" },
  inLang: { es: "En {lang} se dice...", ca: "En {lang} es diu...", en: "In {lang} you say...", cs: "V jazyce {lang} se řekne...", fr: "En {lang}, on dit..." },
  playSong: { es: "Elige una canción", ca: "Tria una cançó", en: "Pick a song", cs: "Vyber si písničku", fr: "Choisis une chanson" }
});

let M = {}; // estado efímero del modo activo

const APP = document.getElementById("app");
let poiSayTimer = null;
let callTimer = null;
let orbitGen = 0;

function render() {
  Speech.stop(); Ears.stop();
  if (S.screen === "setup") return renderSetup();
  if (S.screen === "bye") return renderBye();
  if (S.screen === "adventure") return renderAdventure();
  if (S.screen === "call") return renderCall();
  if (S.screen === "leer") return renderLeer();
  return renderHub();
}

/* ============ FONDO DE ESTRELLAS ============ */
function buildStars() {
  const holder = document.getElementById("stars");
  let html = "";
  for (let i = 0; i < 90; i++) {
    const s = (Math.random() * 2.2 + 0.6).toFixed(1);
    html += `<div class="star" style="left:${(Math.random() * 100).toFixed(1)}%;top:${(Math.random() * 100).toFixed(1)}%;width:${s}px;height:${s}px;animation-delay:${(Math.random() * 3).toFixed(1)}s"></div>`;
  }
  html += `<div class="shoot" style="top:18%;left:80%"></div><div class="shoot" style="top:55%;left:90%;animation-delay:3.5s"></div>`;
  holder.innerHTML = html;
}

/* ============ CONFIGURACIÓN ============ */
function renderSetup() {
  const c = S.child, st = S.settings;
  APP.innerHTML = `
  <div class="center" style="margin:14px 0">${NINOBOT_SVG(110, "bounce")}</div>
  <h1>${t("setupTitle")}</h1>
  <div class="spacer"></div>
  <div class="card solid setup-grid">
    <div><label>${t("yourName")}</label>
      <input type="text" id="su-name" maxlength="20" placeholder="${esc(t("namePh"))}" value="${esc(c.name)}"></div>
    <div><label>${t("youAre")}</label>
      <div class="choice-row" id="su-gender">
        <button class="chip ${c.gender === "girl" ? "on" : ""}" data-v="girl">👧 ${t("girl")}</button>
        <button class="chip ${c.gender === "boy" ? "on" : ""}" data-v="boy">👦 ${t("boy")}</button>
        <button class="chip ${c.gender === "kid" ? "on" : ""}" data-v="kid">🧒 ${t("kid")}</button>
      </div></div>
    <div class="center" id="su-portrait">${childPortrait(96)}</div>
    <div><label>${t("skinLabel")}</label>
      <div class="choice-row" id="su-skin">
        ${SKIN_TONES.map((col, i) => `<button class="chip swatch ${(c.skin != null ? c.skin : 1) === i ? "on" : ""}" data-v="${i}" style="background:${col}">&nbsp;</button>`).join("")}
      </div></div>
    <div><label>${t("hairLabel")}</label>
      <div class="choice-row" id="su-hair">
        ${HAIR_COLORS.map((col, i) => `<button class="chip swatch ${(c.hair != null ? c.hair : 0) === i ? "on" : ""}" data-v="${i}" style="background:${col}">&nbsp;</button>`).join("")}
      </div></div>
    <div><label>${t("language")}</label>
      <div class="choice-row" id="su-lang">
        ${Object.keys(LANGS).map(l => `<button class="chip ${c.lang === l ? "on" : ""}" data-v="${l}">${LANGS[l].flag} ${LANGS[l].label}</button>`).join("")}
      </div></div>
    <div><label>${t("age")} (3-10)</label>
      <div class="choice-row" id="su-age">
        ${[3, 4, 5, 6, 7, 8, 9, 10].map(a => `<button class="chip ${c.age === a ? "on" : ""}" data-v="${a}">${a}</button>`).join("")}
      </div></div>
    <div><label>${t("playTime")}</label>
      <div class="choice-row" id="su-min">
        ${[15, 30, 45, 60].map(m => `<button class="chip ${st.minutes === m ? "on" : ""}" data-v="${m}">${m}</button>`).join("")}
      </div></div>
    <div><label>${t("micLabel")}</label>
      <div class="choice-row" id="su-mic">
        <button class="chip ${st.mic ? "on" : ""}" data-v="1">🎤 ${t("on")}</button>
        <button class="chip ${!st.mic ? "on" : ""}" data-v="0">🔇 ${t("off")}</button>
      </div></div>
    <button class="btn big good" onclick="NB.finishSetup()">🚀 ${t("startBtn")}</button>
    <p class="muted center">🔒 ${t("privacyNote")}</p>
  </div>`;
  ["su-gender", "su-lang", "su-age", "su-min", "su-mic", "su-skin", "su-hair"].forEach(id => {
    document.getElementById(id).addEventListener("click", e => {
      const b = e.target.closest(".chip"); if (!b) return;
      [...e.currentTarget.children].forEach(x => x.classList.remove("on"));
      b.classList.add("on");
      if (id === "su-lang") {
        S.child.name = (document.getElementById("su-name").value || "").trim().slice(0, 20);
        S.child.lang = b.dataset.v;
        renderSetup();
        return;
      }
      // vista previa en vivo del retrato
      if (id === "su-gender") S.child.gender = b.dataset.v;
      if (id === "su-skin") S.child.skin = parseInt(b.dataset.v, 10);
      if (id === "su-hair") S.child.hair = parseInt(b.dataset.v, 10);
      const port = document.getElementById("su-portrait");
      if (port) port.innerHTML = childPortrait(96);
    });
  });
}

function readChip(id) { const b = document.querySelector("#" + id + " .chip.on"); return b ? b.dataset.v : null; }

function finishSetup() {
  S.child.name = (document.getElementById("su-name").value || "").trim().slice(0, 20);
  S.child.gender = readChip("su-gender") || "girl";
  S.child.lang = readChip("su-lang") || "es";
  S.child.age = parseInt(readChip("su-age") || "6", 10);
  S.child.skin = parseInt(readChip("su-skin") || "1", 10);
  S.child.hair = parseInt(readChip("su-hair") || "0", 10);
  S.settings.minutes = parseInt(readChip("su-min") || "30", 10);
  S.settings.mic = readChip("su-mic") === "1";
  S.setupDone = true;
  S.screen = "hub";
  save();
  startSessionTimer();
  render();
  Speech.say(t("hubHello"));
}

/* ============ ROBOTECA (HUB) ============ */
function renderHub() {
  const medals = totalMedals();
  const stars = Object.keys(THEMES).reduce((a, th) => a + themeStars(th), 0);
  APP.innerHTML = `
  <div class="topbar">
    <div class="avatar" id="robot-avatar">${NINOBOT_SVG(58)}</div>
    <div class="who">
      <div class="rname">Ninobot</div>
      <div class="status" id="statusbox"><div class="dot"></div><span class="stxt">${t("statusHome")}</span></div>
    </div>
    <button class="btn soft" onclick="NB.openSettings()">⚙️</button>
    <button class="btn soft" onclick="NB.openAbout()">💜</button>
  </div>
  <h1>🤖 ${t("hubTitle")}</h1>
  <p class="center muted">🏅 ${t("medals")}: ${medals} · ⭐ ${t("stars")}: ${stars} · v${APP_VERSION}</p>
  <div class="spacer"></div>
  ${misionCard()}
  <div class="card">
    <h2>${t("chooseRobot")}</h2>
    <div class="robogrid">
      ${Object.keys(ROBOTS).map(id => {
        const r = ROBOTS[id];
        return `<button class="robocard ${S.robot === id ? "on" : ""}" onclick="NB.pickRobot('${id}')">
          <span class="fav">${S.robot === id ? "💛" : ""}</span>
          ${r.svg(84, "wiggle")}
          <div class="rname" style="color:${r.color}">${r.name}</div>
          <div class="rrole">${tx(r.role)}</div>
        </button>`;
      }).join("")}
    </div>
    <div class="center" style="margin-top:10px">
      <button class="btn big warm" onclick="NB.openCall()">📞 ${t("callBtn")}</button>
      ${S.settings.mic ? `<button class="btn warm" onclick="NB.voiceCall()">🎤 ${t("callRobot")}</button>` : ""}
    </div>
  </div>
  <div class="card">
    <h2>📖 ${t("leerTitle")} ${leerMedal() ? "🏅" : ""}</h2>
    <p class="muted">${t("leerSub")}${leerTotal() ? ` · ${leerTotal()} ⭐` : ""}</p>
    <div class="center"><button class="btn big good" onclick="NB.leerOpen()">📖 ${t("leerGo")}</button></div>
  </div>
  <div class="card">
    <h2>${t("chooseAdventure")}</h2>
    <div class="advgrid">
      ${Object.keys(THEMES).map(id => {
        const th = THEMES[id];
        const medal = hasMedal(id) ? "🏅" : "";
        const starsTh = themeStars(id);
        return `<button class="advcard ${th.ready ? "" : "locked"}" style="background:${th.grad}" onclick="NB.pickTheme('${id}')">
          <span class="medal">${medal}</span>
          ${typeof THEME_CARDS !== "undefined" && THEME_CARDS[id] ? `<span class="ascene">${THEME_CARDS[id]}</span>` : `<span class="aemoji">${th.emoji}</span>`}
          <div class="aname">${tx(th.name)}</div>
          ${th.ready ? `<div class="muted">${"⭐".repeat(Math.min(3, Math.floor(starsTh / 10))) || "&nbsp;"}</div>` : `<span class="soon">🔜 ${t("soon")}</span>`}
        </button>`;
      }).join("")}
    </div>
  </div>
  ${renderCollectionCard()}`;
}

function renderCollectionCard() {
  const withMedal = Object.keys(THEMES).filter(hasMedal);
  const builds = S.builds || [];
  const libro = bookTotals();
  if (!withMedal.length && !builds.length && !leerMedal() && !(S.stickers && S.stickers.length) && !libro.f) return `<div class="card"><h2>🎒 ${t("collection")}</h2><p class="muted">${t("noMedals")}</p></div>`;
  return `<div class="card"><h2>🎒 ${t("collection")}</h2>
    <div class="medalgrid">
      ${libro.f ? `<button class="medalcard" onclick="NB.bookOpen()"><div style="font-size:2rem">📚</div><b>${t("bookTitle")}</b><div class="msub">📖 ${libro.f}/${libro.tot}</div></button>` : ""}
      ${leerMedal() ? `<div class="medalcard"><div style="font-size:2rem">📖</div><b>${t("leerTitle")}</b><div class="msub">🏅 ${leerTotal()} ⭐</div></div>` : ""}
      ${withMedal.map(id => `<div class="medalcard"><div style="font-size:2rem">🏅</div><b>${tx(THEMES[id].name)}</b><div class="msub">${themeStars(id)} ⭐</div></div>`).join("")}
      ${S.builds.map((b, gi) => `<button class="medalcard" onclick="NB.buildView(${gi})"><div style="width:58px;height:58px;margin:0 auto">${THEMES[b.theme] && THEMES[b.theme].content ? miniSvg(THEMES[b.theme].content.builder.svg(b.parts)) : "🔧"}</div><b>${esc(b.name)}</b><div class="msub">${t("buildYours")}</div></button>`).join("")}
    </div>
    ${S.stickers && S.stickers.length ? `<h2 style="margin-top:12px">🎁 ${t("mAlbum")}</h2><p class="stickers">${S.stickers.join(" ")}</p>` : ""}</div>`;
}

function pickRobot(id) {
  S.robot = id; save();
  renderHub();
  Speech.say(tx(ROBOTS[id].hello));
}

function pickTheme(id) {
  const th = THEMES[id];
  if (!th.ready) {
    Speech.say(t("soon"));
    return;
  }
  S.theme = id; S.screen = "adventure"; S.mode = "explore"; S.fx = null; M = {};
  save(); render();
  Speech.say(tx(th.content.welcome));
}

/* ============ LLAMADA A UN ROBOT (charla libre desde la portada) ============ */
function openCall() {
  openModal(`
    <h2>📞 ${t("callPick")}</h2>
    <div class="optgrid" style="grid-template-columns:1fr 1fr 1fr">
      ${Object.keys(ROBOTS).map(id => `<button class="opt center" onclick="NB.callRobot('${id}')" style="text-align:center">
        <div style="width:64px;height:64px;margin:0 auto">${ROBOTS[id].svg(64)}</div>
        <div style="font-weight:800;color:${ROBOTS[id].color}">${ROBOTS[id].name}</div>
      </button>`).join("")}
    </div>
    <button class="btn soft" onclick="NB.closeModal()">${t("close")}</button>`);
}

function callRobot(id) {
  S.robot = id; save();
  closeModal();
  M.log = [];
  M.fbIdx = null;
  M.expect = null;
  M.qIdx = null;
  S.screen = "call";
  render();
}

function renderCall() {
  const r = robot();
  APP.innerHTML = `
    <div class="topbar">
      <button class="btn soft" onclick="NB.hangUp()">📵 ${t("hangUp")}</button>
      <div class="center" style="flex:1">
        <div style="font-weight:800">${t("callWith")} <span style="color:${r.color}">${r.name}</span></div>
        <div class="status" id="statusbox"><span class="stxt">📶 ${t("callRing")}</span></div>
      </div>
      <div class="avatar" id="robot-avatar" style="width:92px;height:92px;max-width:24vw">${r.svg(92, "wiggle")}</div>
    </div>
    <div class="card solid" style="margin-top:10px">
      <div class="chatlog" id="chatlog" style="min-height:34vh"></div>
      <div class="choice-row" style="margin:8px 0">
        ${[1, 2, 3, 4].map(i => `<button class="chip" onclick="NB.chipSay(${i})">💬 ${t("chip" + i)}</button>`).join("")}
      </div>
      <div class="chatrow">
        <input type="text" id="chatin" placeholder="${esc(t("chatPh"))}" onkeydown="if(event.key==='Enter')NB.callSend()">
        <button class="btn" onclick="NB.callSend()">📨</button>
        <button class="btn warm" onclick="NB.callMic()">🎤</button>
      </div>
    </div>`;
  clearTimeout(callTimer);
  callTimer = setTimeout(() => {
    if (S.screen !== "call") return;
    botBubble(tx(r.hello));
  }, 900);
}

/* como norm() pero SIN recortar: las claves tipo "hi " necesitan su espacio
   para no colarse dentro de otras palabras ("chiste" contiene "hi") */
function normKey(s) {
  return String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

/* clasificadores de la charla: sí/no cortitos y arranques de pregunta */
const CALL_POS = ["si", "yes", "oui", "ano", "jo", "vale", "ok", "bien", "be", "good", "well", "fine", "dobre", "super", "genial", "great", "mucho", "molt", "moc", "beaucoup", "claro", "sure", "bueno", "guay"];
const CALL_NEG = ["no", "non", "ne", "nope", "mal", "bad", "spatne", "malament", "regular", "fatal", "nada", "res", "rien", "nic", "bof"];
const CALL_Q = ["que", "como", "cuando", "donde", "quien", "cual", "por", "com", "quan", "on", "qui", "quin", "perque", "what", "how", "why", "when", "where", "who", "which", "do", "does", "can", "are", "is", "proc", "jak", "kdy", "kde", "kdo", "co", "pourquoi", "comment", "quand", "ou", "quoi", "est"];

function callReply(input) {
  const n = " " + norm(input) + " ";
  const rname = robot().name;
  const fix = s => s.replace(/\{robot\}/g, rname);
  const words = norm(input).split(/\s+/).filter(Boolean);
  const isShort = words.length <= 3;
  const hasPos = words.some(w => CALL_POS.includes(w));
  const hasNeg = words.some(w => CALL_NEG.includes(w));

  /* 1) el robot acaba de preguntar algo: la respuesta corta se entiende EN CONTEXTO */
  if (M.expect && CALL_CHAT.expects && CALL_CHAT.expects[M.expect]) {
    const exp = CALL_CHAT.expects[M.expect];
    M.expect = null;
    if (isShort && hasNeg && exp.neg) return fix(tx(pick(exp.neg)));
    if (isShort && hasPos && exp.pos) return fix(tx(pick(exp.pos)));
    if (exp.other && !CALL_CHAT.keywords.some(k => k.keys.some(key => n.includes(normKey(key))))) {
      return fix(tx(pick(exp.other)));
    }
  }

  /* 2) temas que conocemos */
  for (const k of CALL_CHAT.keywords) {
    if (k.keys.some(key => n.includes(normKey(key)))) {
      if (k.expect) M.expect = k.expect;
      return fix(tx(pick(k.replies)));
    }
  }

  /* 3) es una pregunta que no dominamos: se admite con honestidad */
  const asks = input.includes("?") || (words.length && CALL_Q.includes(words[0]));
  if (asks && CALL_CHAT.askFallback && CALL_CHAT.askFallback.length) {
    M.qIdx = ((M.qIdx == null ? -1 : M.qIdx) + 1) % CALL_CHAT.askFallback.length;
    return fix(tx(CALL_CHAT.askFallback[M.qIdx]));
  }

  /* 4) un sí o un no sueltos, sin pregunta pendiente */
  if (isShort && hasPos) return fix(t("callAckPos"));
  if (isShort && hasNeg) return fix(t("callAckNeg"));

  /* 5) comodín */
  M.fbIdx = ((M.fbIdx == null ? -1 : M.fbIdx) + 1) % CALL_CHAT.fallback.length;
  return fix(tx(CALL_CHAT.fallback[M.fbIdx]));
}

function callSend() {
  const inp = document.getElementById("chatin");
  const v = (inp.value || "").trim();
  if (!v) return;
  inp.value = "";
  addBubble("me", v);
  misionEv("call");
  setTimeout(() => botBubble(callReply(v)), 350);
}

function callMic() {
  Ears.listen((text, err) => {
    if (err === "micoff") return botBubble(t("micOffMsg"));
    if (err === "nomic") return botBubble(t("micNoDevice"));
    if (err || !text) return botBubble(t("micErrMsg"));
    addBubble("me", text);
    misionEv("call");
    setTimeout(() => botBubble(callReply(text)), 350);
  });
}

function chipSay(i) {
  const inp = document.getElementById("chatin");
  if (!inp) return;
  inp.value = t("chip" + i);
  if (S.screen === "call") callSend(); else chatSend();
}

function hangUp() { clearTimeout(callTimer); M.log = []; M.expect = null; M.qIdx = null; goHub(); }

function voiceCall() {
  Speech.say(t("sayRobotName"), { onEnd: () => {
    Ears.listen((text, err) => {
      if (err || !text) { Speech.say(err === "micoff" ? t("micOffMsg") : err === "nomic" ? t("micNoDevice") : t("notHeard")); return; }
      const n = norm(text);
      for (const id in ROBOTS) if (n.includes(norm(ROBOTS[id].name))) { pickRobot(id); return; }
      for (const id in THEMES) {
        const names = Object.values(THEMES[id].name).map(norm);
        if (names.some(x => n.includes(x))) { pickTheme(id); return; }
      }
      Speech.say(t("notHeard"));
    });
  }});
}

/* ============ AVENTURA ============ */
const MODES = [
  { id: "chat", icon: "💬", label: "mChat" },
  { id: "story", icon: "📖", label: "mStory" },
  { id: "quiz", icon: "❓", label: "mQuiz" },
  { id: "translator", icon: "👽", label: "mTranslator" },
  { id: "explore", icon: "🗺️", label: "mExplore" },
  { id: "karaoke", icon: "🎤", label: "mKaraoke" },
  { id: "abc", icon: "🔤", label: "mAbc" },
  { id: "math", icon: "🔢", label: "mMath" },
  { id: "build", icon: "🔧", label: "mBuild" },
  { id: "care", icon: "🪴", label: "mCare" },
  { id: "famous", icon: "🌟", label: "mFamous" }
];

function fantasyLangs() { return THEMES[S.theme].content.translator.langs; }
function fantasyLang() { return (S.fx && S.theme && THEMES[S.theme] && THEMES[S.theme].content) ? fantasyLangs().find(l => l.id === S.fx) : null; }

function cycleFantasy() {
  S.fxSeen = true;
  const langs = fantasyLangs();
  const idx = S.fx ? langs.findIndex(l => l.id === S.fx) : -1;
  const nxt = idx + 1 < langs.length ? langs[idx + 1] : null;
  S.fx = nxt ? nxt.id : null;
  save();
  renderAdventure();
  Speech.stop();
  if (nxt) Speech.say(tx(nxt.greeting));
}

function fxDecorate(text) {
  const fl = fantasyLang();
  if (!fl) return text;
  const hello = fl.dict.hola || "";
  return hello.charAt(0).toUpperCase() + hello.slice(1) + "! " + text;
}

function renderAdventure() {
  const r = robot(), th = THEMES[S.theme];
  const fl = fantasyLang();
  APP.innerHTML = `
  <div class="topbar">
    <button class="btn soft" onclick="NB.goHub()">⬅️ ${t("backHub")}</button>
    <div class="avatar" id="robot-avatar">${robotDisfraz(58)}</div>
    <div class="who">
      <div class="rname" style="color:${r.color}${(r.name + tx(th.name)).length > 18 ? ";font-size:.95rem" : ""}">${r.name} · ${th.emoji} ${tx(th.name)}</div>
      <div class="status" id="statusbox"><div class="dot"></div><span class="stxt">${tx(th.content.statusPlace)}${fl ? " · " + fl.emoji + " " + esc(tx(fl.name)) : ""}</span></div>
    </div>
    <button class="btn soft ${S.fxSeen ? "" : "pulse"}" onclick="NB.cycleFantasy()" title="${esc(t("transPick"))}">${fl ? fl.emoji : "🗨️"}</button>
  </div>
  <div class="modenav" id="modenav">
    ${MODES.map(m => `<button class="modebtn ${S.mode === m.id ? "on" : ""}" onclick="NB.setMode('${m.id}')">
      <span class="ico">${m.icon}${robot().fav === m.id ? "💛" : ""}</span>${t(m.label)}
      <span class="stars">${"⭐".repeat((S.progress[S.theme] || {})[m.id] || 0)}</span>
    </button>`).join("")}
  </div>
  <div id="modebox"></div>`;
  renderMode();
}

function updateModeNavStars() {
  const nav = document.getElementById("modenav");
  if (!nav) return;
  [...nav.children].forEach((b, i) => {
    const st = b.querySelector(".stars");
    if (st) st.textContent = "⭐".repeat((S.progress[S.theme] || {})[MODES[i].id] || 0);
  });
}

function goHub() { S.screen = "hub"; S.theme = null; S.fx = null; save(); render(); }

function setMode(id) {
  Speech.stop(); Ears.stop();
  S.mode = id; M = {}; save();
  document.querySelectorAll("#modenav .modebtn").forEach((b, i) => b.classList.toggle("on", MODES[i].id === id));
  renderMode();
}

function box() { return document.getElementById("modebox"); }

function renderMode() {
  const c = THEMES[S.theme].content;
  switch (S.mode) {
    case "chat": return uiChat(c);
    case "story": return uiStoryList(c);
    case "quiz": return uiQuizIntro(c);
    case "translator": return uiTranslator(c);
    case "explore": return uiExplore(c);
    case "karaoke": return uiKaraokeList(c);
    case "abc": return uiAbc(c);
    case "math": return uiMathIntro(c);
    case "build": return uiBuild(c);
    case "care": return uiCare();
    case "famous": return uiFamous(c);
  }
}

/* ============ CHARLAR ============ */
function uiChat(c) {
  M.log = M.log || [];
  box().innerHTML = `<div class="card solid">
    <div class="chatlog" id="chatlog"></div>
    <div class="choice-row" style="margin:8px 0">
      ${[1, 2, 3, 4].map(i => `<button class="chip" onclick="NB.chipSay(${i})">💬 ${t("chip" + i)}</button>`).join("")}
    </div>
    <div class="chatrow">
      <input type="text" id="chatin" placeholder="${esc(t("chatPh"))}" onkeydown="if(event.key==='Enter')NB.chatSend()">
      <button class="btn" onclick="NB.chatSend()">📨</button>
      <button class="btn warm" onclick="NB.chatMic()">🎤</button>
    </div></div>`;
  if (!M.log.length) botBubble(tx(robot().hello));
  else M.log.forEach(m => addBubble(m.who, m.text, false));
}

function addBubble(who, text, remember) {
  if (!M.log) return;
  if (remember !== false) M.log.push({ who, text });
  const log = document.getElementById("chatlog");
  if (!log) return;
  const d = document.createElement("div");
  d.className = "bubble " + (who === "me" ? "me" : "bot");
  d.textContent = text;
  log.appendChild(d);
  log.scrollTop = log.scrollHeight;
}

function botBubble(text, action) {
  const d = fxDecorate(text);
  addBubble("bot", d);
  /* si la respuesta invita a algo (cantar), un boton lo lleva alli */
  if (action === "song" && S.screen === "adventure") {
    const log = document.getElementById("chatlog");
    if (log) {
      const b = document.createElement("button");
      b.className = "chip";
      b.style.alignSelf = "flex-start";
      b.textContent = t("goSing");
      b.onclick = () => setMode("karaoke");
      log.appendChild(b);
      log.scrollTop = log.scrollHeight;
    }
  }
  Speech.say(d);
}

function chatSend() {
  const inp = document.getElementById("chatin");
  const v = (inp.value || "").trim();
  if (!v) return;
  inp.value = "";
  addBubble("me", v);
  chatStars();
  const r = chatReply(v);
  setTimeout(() => botBubble(r.text, r.action), 350);
}

/* charlar tambien premia: 3, 6 y 10 mensajes del peque */
function chatStars() {
  if (S.screen !== "adventure" || !S.theme) return;
  const mine = (M.log || []).filter(m => m.who === "me").length;
  if (mine >= 10) award(S.theme, "chat", 3);
  else if (mine >= 6) award(S.theme, "chat", 2);
  else if (mine >= 3) award(S.theme, "chat", 1);
}

function chatMic() {
  Ears.listen((text, err) => {
    if (err === "micoff") return botBubble(t("micOffMsg"));
    if (err === "nomic") return botBubble(t("micNoDevice"));
    if (err || !text) return botBubble(t("micErrMsg"));
    addBubble("me", text);
    chatStars();
    const r = chatReply(text);
    setTimeout(() => botBubble(r.text, r.action), 350);
  });
}

function chatReply(input) {
  const c = THEMES[S.theme].content;
  const n = " " + norm(input) + " ";
  for (const k of c.chat.keywords) {
    if (k.keys.some(key => n.includes(normKey(key)))) return { text: tx(pick(k.replies)), action: k.action };
  }
  M.fbIdx = ((M.fbIdx == null ? -1 : M.fbIdx) + 1) % c.chat.fallback.length;
  return { text: tx(c.chat.fallback[M.fbIdx]) };
}

/* ============ HISTORIAS ============ */
function uiStoryList(c) {
  box().innerHTML = `<div class="card"><h2>📖 ${t("storyPick")}</h2>
    <div class="optgrid">
      ${c.stories.map((s, i) => {
        const found = ((S.ends || {})[S.theme + "/" + s.id] || []).length;
        return `<button class="opt" onclick="NB.storyStart(${i})">${s.emoji} ${tx(s.title)} <span class="muted" style="font-size:.85rem">📖 ${found}/${storyEndsTotal(s)}</span></button>`;
      }).join("")}
    </div></div>`;
}

function storyStart(i) {
  const s = THEMES[S.theme].content.stories[i];
  M.story = s; M.storyIdx = i; M.node = s.start;
  storyNode();
}

/* --- libro de cuentos: finales coleccionables --- */
function storyEndsTotal(s) { return Object.keys(s.nodes).filter(k => s.nodes[k].end).length; }

function bookTotals() {
  let f = 0, tot = 0;
  Object.keys(THEMES).forEach(th => {
    const c = THEMES[th].content;
    if (!c || !c.stories) return;
    c.stories.forEach(s => {
      tot += storyEndsTotal(s);
      f += (((S.ends || {})[th + "/" + s.id]) || []).filter(k => s.nodes[k] && s.nodes[k].end).length;
    });
  });
  return { f, tot };
}

function bookOpen() {
  const filas = [];
  Object.keys(THEMES).forEach(th => {
    const c = THEMES[th].content;
    if (!c || !c.stories) return;
    c.stories.forEach(s => {
      const found = (((S.ends || {})[th + "/" + s.id]) || []).length;
      if (found) filas.push(`<div class="misionrow"><span style="font-size:1.3rem">${s.emoji}</span><span class="mtx">${tx(s.title)}</span><span class="mprog">📖 ${found}/${storyEndsTotal(s)}</span></div>`);
    });
  });
  const tt = bookTotals();
  openModal(`<h2>📚 ${t("bookTitle")}</h2>
    ${filas.join("") || `<p class="muted">${t("bookEmpty")}</p>`}
    <p class="center muted" style="margin-top:8px">${t("bookLeft", { n: tt.tot - tt.f })}</p>
    <button class="btn soft" onclick="NB.closeModal()">${t("close")}</button>`);
}

/* toda escena con un solo camino gana una opción B con sabor propio */
function storyChoices(node) {
  if (node.end || !node.choices || node.choices.length !== 1) return node.choices;
  const alt = (M.node.length + (M.story.id || "").length) % 2 ? "storyAltB1" : "storyAltB2";
  return [node.choices[0], { t: T[alt], go: node.choices[0].go, alt: true }];
}

function storyNode() {
  const s = M.story, node = s.nodes[M.node];
  let txt = tx(node.text);
  if (M.altFlourish) { txt = tx(T.storyAltSay) + " " + txt; M.altFlourish = false; }
  const chs = storyChoices(node);
  /* final alcanzado: se guarda en el libro de cuentos ANTES de pintar el contador */
  let endsInfo = "";
  if (node.end) {
    S.ends = S.ends || {};
    const k = S.theme + "/" + s.id;
    const lista = S.ends[k] = S.ends[k] || [];
    if (!lista.includes(M.node)) {
      lista.push(M.node);
      save();
      if (typeof toast === "function") toast("📖 " + t("endNew"));
    }
    endsInfo = `<div class="center muted" style="margin:4px 0">📖 ${t("endsFound", { n: lista.length, total: storyEndsTotal(s) })}</div>`;
  }
  box().innerHTML = `<div class="card solid">
    <h2>${s.emoji} ${tx(s.title)}</h2>
    <p style="font-size:1.1rem;line-height:1.5">${esc(txt)}</p>
    <div class="optgrid">
      ${node.end
        ? `<div class="center" style="font-size:1.6rem;margin:8px">🌟 ${t("theEnd")} 🌟</div>
           ${endsInfo}
           <button class="opt" onclick="NB.storyStart(${M.storyIdx})">🔁 ${t("readAgain")}</button>
           <button class="opt" onclick="NB.setMode('story')">📚 ${t("anotherStory")}</button>`
        : chs.map((ch, idx) => `<button class="opt" onclick="NB.storyGo(${idx})">${idx === 0 ? "🅰️" : idx === 1 ? "🅱️" : "🆎"} ${tx(ch.t)}</button>`).join("")
      }
    </div></div>`;
  Speech.say(txt);
  if (!node.end && chs && chs.length > 1) {
    Speech.say(chs.map((ch, i) => (i === 0 ? "A" : "B") + ". " + tx(ch.t)).join(". "), { queue: true });
  }
  if (node.end) {
    const st = (S.progress[S.theme] || {}).story || 0;
    award(S.theme, "story", Math.min(3, st + 1));
    confetti();
  }
}

function storyGo(idx) {
  const node = M.story.nodes[M.node];
  const ch = storyChoices(node)[idx];
  if (ch.alt) M.altFlourish = true;
  M.node = ch.go;
  storyNode();
}

/* sonidos cortitos de feedback (acierto, fallo, toque) */
function sfx(kind) {
  if (typeof playJingle !== "function") return;
  try {
    if (kind === "good") playJingle({ type: "melody", notes: [72, 76, 79], nd: 0.12, gap: 0.1, w: "triangle", vol: 0.14 });
    else if (kind === "bad") playJingle({ type: "melody", notes: [67, 63], nd: 0.2, gap: 0.18, w: "sine", vol: 0.12 });
    else if (kind === "pop") playJingle({ type: "melody", notes: [88], nd: 0.07, gap: 0.07, w: "triangle", vol: 0.1 });
  } catch (e) {}
}

/* ============ CUIDAR (vida práctica Montessori) ============ */
function uiCare() {
  const ca = CARE[S.theme];
  if (!ca) { box().innerHTML = `<div class="card center"><p class="muted">${t("soon")}</p></div>`; return; }
  if (M.cs === undefined) { M.cs = 0; Speech.say(tx(ca.intro)); }
  const hecho = M.cs >= ca.steps.length;
  /* la escena mejora con CADA paso: el protagonista se endereza y gana color,
     y cada cuidado aplicado se queda visible alrededor */
  const prog = M.cs / ca.steps.length;
  const estiloSer = hecho ? "" : `filter:grayscale(${Math.round((1 - prog) * 70)}%) brightness(${(0.72 + prog * 0.28).toFixed(2)});transform:rotate(${Math.round((1 - prog) * 14)}deg) scale(${(0.82 + prog * 0.18).toFixed(2)})`;
  box().innerHTML = `<div class="card solid center">
    <h2>🪴 ${tx(ca.title)}</h2>
    <div class="carescene ${hecho ? "carehecho" : ""}">
      <span class="caredeco">${ca.deco}</span>
      <div class="careser" style="${estiloSer}">${hecho ? ca.after : ca.before}</div>
      <span id="careapls">${ca.steps.slice(0, M.cs).map(p => `<span class="careapl">${p.e}</span>`).join("")}</span>
    </div>
    <p class="muted" style="max-width:440px;margin:6px auto">${hecho ? tx(ca.done) : tx(ca.intro)}</p>
    <div class="careline">
      ${ca.steps.map((p, i) => `<button class="carestep ${i < M.cs ? "ok" : (i === M.cs && !hecho ? "now" : "")}" onclick="NB.careDo(${i})">
        <span style="font-size:1.7rem">${i < M.cs ? "✅" : p.e}</span>
        <div style="font-size:.8rem;font-weight:700;margin-top:2px">${tx(p.t)}</div>
      </button>`).join("")}
    </div>
    ${hecho ? `<button class="btn big" onclick="NB.careAgain()">🔁 ${t("again")}</button>` : ""}
  </div>`;
}

function careDo(i) {
  const ca = CARE[S.theme];
  if (!ca || M.cs === undefined || M.cs >= ca.steps.length) return;
  if (i !== M.cs) {
    /* control del error a la Montessori: solo responde el paso que toca,
       sin sonido de fallo, solo un recordatorio suave del siguiente paso */
    Speech.stop();
    Speech.say(t("careFirst") + " " + tx(ca.steps[M.cs].t));
    return;
  }
  M.cs++;
  sfx("pop");
  Speech.stop();
  const fin = M.cs >= ca.steps.length;
  uiCare();
  if (fin) {
    award(S.theme, "care", Math.min(3, ((S.progress[S.theme] || {}).care || 0) + 1));
    confetti(10);
    Speech.say(tx(ca.done));
  } else {
    Speech.say(tx(ca.steps[M.cs].t));
  }
}

function careAgain() { M.cs = 0; uiCare(); Speech.say(tx(CARE[S.theme].intro)); }

/* ============ QUIZ ============ */
function uiQuizIntro(c) {
  box().innerHTML = `<div class="card center">
    <h2>❓ ${t("mQuiz")}</h2>
    <div style="font-size:3rem">🧠✨</div>
    <button class="btn big good" onclick="NB.quizStart()">${t("quizGo")}</button>
  </div>`;
}

function quizStart() {
  M.qs = shuffle(THEMES[S.theme].content.quiz).slice(0, 10).map(q => {
    const orden = shuffle(q.options.map((_, i) => i));
    return Object.assign({}, q, { options: orden.map(i => q.options[i]), answer: orden.indexOf(q.answer) });
  });
  M.qi = 0; M.hits = 0;
  quizQ();
}

function quizQ() {
  const q = M.qs[M.qi];
  box().innerHTML = `<div class="card solid">
    <div class="progressbar"><div style="width:${(M.qi / M.qs.length * 100).toFixed(0)}%"></div></div>
    <div class="center" style="font-size:2.6rem">${q.emoji}</div>
    <h2 class="center">${esc(tx(q.q))}</h2>
    <div class="optgrid" id="quizopts">
      ${q.options.map((o, i) => `<button class="opt" onclick="NB.quizPick(${i})">${esc(tx(o))}</button>`).join("")}
    </div></div>`;
  Speech.say(tx(q.q));
  Speech.say(q.options.map((o, i) => String.fromCharCode(65 + i) + ". " + tx(o)).join(". "), { queue: true });
}

function quizPick(i) {
  const q = M.qs[M.qi];
  const opts = document.querySelectorAll("#quizopts .opt");
  opts.forEach(b => b.onclick = null);
  opts[q.answer].classList.add("right");
  const good = i === q.answer;
  if (good) { M.hits++; confetti(10); sfx("good"); Speech.say(t("quizRight") + " " + tx(pick(robot().cheer))); }
  else { opts[i].classList.add("wrong"); sfx("bad"); Speech.say(tx(robot().oops) + " " + t("quizWrong") + " " + tx(q.options[q.answer]) + ". " + tx(q.explanation)); }
  const div = document.createElement("div");
  div.className = "center"; div.style.marginTop = "12px";
  div.innerHTML = `<p style="margin-bottom:10px">${good ? "🌟" : "💡"} ${esc(tx(q.explanation))}</p>
    <button class="btn good" onclick="NB.quizNext()">${M.qi + 1 < M.qs.length ? t("next") : t("continueBtn")} ➡️</button>`;
  box().firstElementChild.appendChild(div);
}

function quizNext() {
  M.qi++;
  if (M.qi < M.qs.length) return quizQ();
  const stars = Math.max(1, Math.round(M.hits * 3 / M.qs.length));
  award(S.theme, "quiz", stars);
  if (stars >= 2) confetti(26);
  box().innerHTML = `<div class="card center">
    <h2>🎉 ${t("quizDone")}</h2>
    <div style="font-size:2.4rem">${"⭐".repeat(stars)}</div>
    <p style="font-size:1.2rem">${t("quizScore", { n: M.hits, total: M.qs.length })}</p>
    <button class="btn big" onclick="NB.quizStart()">🔁 ${t("again")}</button>
  </div>`;
  Speech.say(t("quizScore", { n: M.hits, total: M.qs.length }));
}

/* ============ TRADUCTOR ============ */
function uiTranslator(c) {
  M.tlang = M.tlang || c.translator.langs[0].id;
  M.theard = M.theard || 0;
  const langs = c.translator.langs;
  const cur = langs.find(l => l.id === M.tlang);
  box().innerHTML = `<div class="card">
    <h2>👽 ${t("transPick")}</h2>
    <div class="choice-row">
      ${langs.map(l => `<button class="chip ${l.id === M.tlang ? "on" : ""}" onclick="NB.transLang('${l.id}')">${l.emoji} ${tx(l.name)}</button>`).join("")}
    </div>
    <p class="muted" style="margin-top:8px">${tx(cur.greeting)}</p>
    <p><b>${t("transTap")}</b></p>
    <div class="robogrid">
      ${c.translator.words.map(w => `<button class="robocard" onclick="NB.transSay('${w.k}')">
        <div style="font-size:1.8rem">${w.emoji}</div>
        <div class="rname">${esc(tx(w.name))}</div>
        <div class="rrole" style="color:#ffd740">${esc(cur.dict[w.k] || "?")}</div>
      </button>`).join("")}
    </div></div>`;
}

function transLang(id) { M.tlang = id; renderMode(); const c = THEMES[S.theme].content; const cur = c.translator.langs.find(l => l.id === id); Speech.say(tx(cur.greeting)); }

function transSay(k) {
  const c = THEMES[S.theme].content;
  const cur = c.translator.langs.find(l => l.id === M.tlang);
  const w = c.translator.words.find(w => w.k === k);
  Speech.say(tx(w.name) + ". " + t("inLang", { lang: tx(cur.name) }) + " " + (cur.dict[k] || ""));
  M.theard++;
  if (M.theard === 5) award(S.theme, "translator", 1);
  if (M.theard === 10) award(S.theme, "translator", 2);
  if (M.theard === 16) { award(S.theme, "translator", 3); confetti(); }
}

/* ============ EXPLORAR ============ */
function uiExplore(c) {
  const e = c.explore;
  M.visited = M.visited || new Set((S.progress[S.theme + "_seen"] || []));
  let starDots = "";
  if (e.stars !== false) {
    for (let i = 0; i < 160; i++) starDots += `<div class="star" style="left:${(Math.random() * 100).toFixed(1)}%;top:${(Math.random() * 100).toFixed(1)}%;width:2px;height:2px;animation-delay:${(Math.random() * 3).toFixed(1)}s"></div>`;
  }
  const bgCss = e.bgCss || `radial-gradient(ellipse 60% 40% at 20% 30%, rgba(124,77,255,.25), transparent),
        radial-gradient(ellipse 50% 45% at 65% 65%, rgba(0,188,212,.18), transparent),
        radial-gradient(ellipse 45% 40% at 88% 25%, rgba(255,64,129,.16), transparent),
        linear-gradient(180deg,#0b0530,#1b1250)`;
  const deco = (typeof e.deco === "function") ? e.deco(e) : (e.deco || "");
  M.catSel = null;
  box().innerHTML = `
    <div class="mapcats">
      ${e.cats.map((cat, ci) => `<button class="chip" id="mapcat${ci}" onclick="NB.mapCat(${ci})">${cat.emoji} ${tx(cat.name)}</button>`).join("")}
    </div>
    <div class="mapwrap mapfull"><div class="mapscroll" id="mapscroll">
      <div class="mapsize" id="mapsize">
      <div class="mapcanvas" id="mapcanvas" style="width:${e.width}px;height:${e.height}px;background:${bgCss}">
        <div class="mapdeco">${deco}</div>
        ${starDots}
        ${e.pois.map((p, i) => `<button class="poi" style="left:${p.x}px;top:${p.y}px" onclick="NB.poi(${i})">
          ${p.svg
            ? `<span class="picon" style="width:${p.iw}px;height:${p.ih}px">${p.svg}</span>`
            : `<span class="pemoji" style="font-size:${(p.size || 1) * 2.2}rem">${p.emoji}</span>`}
          <span class="plabel ${M.visited.has(i) ? "seenlbl" : ""}">${esc(tx(p.name))}</span>
        </button>`).join("")}
      </div>
      </div>
    </div></div>
    <p class="muted center" style="margin-top:6px">🧭 ${t("exploreHint")}</p>`;
  // El mapa se encaja entero a lo alto: solo queda un scroll, el horizontal.
  const sc = document.getElementById("mapscroll");
  const k = Math.min(1.3, Math.max(0.28, sc.clientHeight / e.height));
  M.mapK = k;
  const size = document.getElementById("mapsize");
  size.style.width = (e.width * k) + "px";
  size.style.height = (e.height * k) + "px";
  if (e.width * k < sc.clientWidth) size.style.margin = "0 auto";
  const cv = document.getElementById("mapcanvas");
  cv.style.transform = "scale(" + k + ")";
  cv.style.setProperty("--poik", Math.min(e.poikMax || 2.1, Math.max(1, 0.95 / k)).toFixed(2));
  let drag = null;
  sc.addEventListener("pointerdown", ev => { drag = { x: ev.clientX, l: sc.scrollLeft }; sc.classList.add("dragging"); });
  sc.addEventListener("pointermove", ev => { if (!drag) return; sc.scrollLeft = drag.l - (ev.clientX - drag.x); });
  ["pointerup", "pointerleave"].forEach(evn => sc.addEventListener(evn, () => { drag = null; sc.classList.remove("dragging"); }));
  if (S.theme === "espacio") startOrbits(e);
  acomodaEtiquetas();
}

/* Las etiquetas se apartan solas cuando dos caen encima: la de arriba se sube
   sobre su dibujo y, si aún se tocan, se separan a los lados. Así ningún
   nombre tapa a otro por muy junto que esté el mapa. */
function acomodaEtiquetas() {
  const cv = document.getElementById("mapcanvas");
  if (!cv) return;
  const labs = [...cv.querySelectorAll(".poi .plabel")];
  if (labs.length < 2) return;
  labs.forEach(l => { l.classList.remove("lblup"); l.style.marginLeft = ""; });
  const leer = () => labs.map(l => { const r = l.getBoundingClientRect(); return { x: r.left, y: r.top, w: r.width, h: r.height }; });
  const choca = (a, b) => Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x) > 2 &&
                          Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y) > 2;

  let r = leer();
  const arriba = new Set();
  for (let a = 0; a < labs.length; a++) {
    for (let b = a + 1; b < labs.length; b++) {
      if (arriba.has(a) || arriba.has(b) || !choca(r[a], r[b])) continue;
      /* sube la del punto que esté más alto: se aleja de la otra */
      arriba.add(r[a].y <= r[b].y ? a : b);
    }
  }
  arriba.forEach(i => labs[i].classList.add("lblup"));
  if (!arriba.size) return;

  r = leer();
  const movidas = new Set();
  for (let a = 0; a < labs.length; a++) {
    for (let b = a + 1; b < labs.length; b++) {
      if (movidas.has(a) || movidas.has(b) || !choca(r[a], r[b])) continue;
      const izq = r[a].x <= r[b].x ? a : b, der = izq === a ? b : a;
      const empuje = Math.ceil((Math.min(r[izq].x + r[izq].w, r[der].x + r[der].w) - Math.max(r[izq].x, r[der].x)) / 2) + 6;
      labs[izq].style.marginLeft = (-empuje) + "px";
      labs[der].style.marginLeft = empuje + "px";
      movidas.add(izq); movidas.add(der);
    }
  }
}

/* Los planetas dan la VUELTA COMPLETA a su órbita elíptica con velocidad
   kepleriana (T proporcional a rx^1.5: Mercurio rápido, Neptuno lento)
   y la Luna da vueltas completas alrededor de la Tierra en movimiento. */
function startOrbits(e) {
  const gen = ++orbitGen;
  const btns = [...document.querySelectorAll("#mapcanvas .poi")];
  const sunI = e.pois.findIndex(p => p.emoji === "☀️");
  const earthI = e.pois.findIndex(p => p.emoji === "🌍");
  const moonI = e.pois.findIndex(p => p.emoji === "🌙");
  if (sunI < 0 || earthI < 0 || moonI < 0) return;
  const sunP = e.pois[sunI];
  const orbs = e.orbits || {};
  const items = [];
  e.pois.forEach((p, i) => {
    if (p.cat !== "solar" || i === sunI || i === moonI || p.halley) return;
    const o = orbs[p.emoji];
    if (o) {
      items.push({ el: btns[i], i, bx: p.x, by: p.y, rx: o.rx, ry: o.ry, a: o.a0 || 0, w: 2 * Math.PI / (10 * Math.pow(o.rx / 150, 1.5)) });
    } else {
      const dx = p.x - sunP.x, dy = p.y - sunP.y, r = Math.hypot(dx, dy);
      items.push({ el: btns[i], i, bx: p.x, by: p.y, rx: r, ry: r, a: Math.atan2(dy, dx), w: 2 * Math.PI / (10 * Math.pow(Math.max(r, 1) / 150, 1.5)) });
    }
    if (btns[i]) btns[i].classList.add("orbiting");
  });
  if (btns[moonI]) btns[moonI].classList.add("orbiting");
  const halB = e.pois.findIndex(p => p.halley);
  if (halB >= 0 && btns[halB]) btns[halB].classList.add("orbiting");
  const ep = e.pois[earthI], mp = e.pois[moonI];
  const moon = { el: btns[moonI], r: Math.hypot(mp.x - ep.x, mp.y - ep.y) || 65, a: Math.atan2(mp.y - ep.y, mp.x - ep.x) };
  const lunaOrb = document.getElementById("orbitLuna");
  const halI = e.pois.findIndex(p => p.halley);
  const hal = halI >= 0 ? { el: btns[halI], h: e.pois[halI].halley, a: 0.3, bx: e.pois[halI].x, by: e.pois[halI].y } : null;
  let earthPos = { x: ep.x, y: ep.y };
  let last = performance.now();
  const step = now => {
    if (gen !== orbitGen || S.mode !== "explore" || S.theme !== "espacio" || !document.getElementById("mapcanvas")) return;
    const dt = Math.min(0.1, (now - last) / 1000); last = now;
    items.forEach(it => {
      it.a += it.w * dt;
      const x = sunP.x + it.rx * Math.cos(it.a), y = sunP.y + it.ry * Math.sin(it.a);
      /* translate va por el compositor: no recalcula el layout de todo el mapa */
      it.el.style.translate = (x - it.bx) + "px " + (y - it.by) + "px";
      if (it.i === earthI) earthPos = { x, y };
    });
    moon.a += (2 * Math.PI / 6) * dt;
    moon.el.style.translate = (earthPos.x + moon.r * Math.cos(moon.a) - mp.x) + "px " + (earthPos.y + moon.r * Math.sin(moon.a) - mp.y) + "px";
    if (lunaOrb) { lunaOrb.setAttribute("cx", earthPos.x); lunaOrb.setAttribute("cy", earthPos.y); }
    if (hal) {
      hal.a += (2 * Math.PI / hal.h.T) * dt;
      hal.el.style.translate = (hal.h.cx + hal.h.rx * Math.cos(hal.a) - hal.bx) + "px " + (hal.h.cy + hal.h.ry * Math.sin(hal.a) - hal.by) + "px";
    }
    requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function mapGoto(x) {
  const sc = document.getElementById("mapscroll");
  sc.scrollTo({ left: Math.max(0, x * (M.mapK || 1) - 60), behavior: "smooth" });
}

/* submenú de zonas: desplaza el mapa a la zona Y resalta sus puntos
   (sin re-renderizar, para no romper las órbitas animadas) */
function mapCat(ci) {
  const e = THEMES[S.theme].content.explore;
  const cat = e.cats[ci];
  M.catSel = M.catSel === ci ? null : ci;
  e.cats.forEach((c2, j) => {
    const ch = document.getElementById("mapcat" + j);
    if (ch) ch.classList.toggle("on", M.catSel === j);
  });
  const btns = document.querySelectorAll("#mapcanvas .poi");
  e.pois.forEach((p, i) => {
    if (btns[i]) btns[i].classList.toggle("dim", M.catSel != null && p.cat !== cat.id);
  });
  mapGoto(cat.x);
  Speech.say(tx(cat.name));
}

function poi(i) {
  const c = THEMES[S.theme].content;
  const p = c.explore.pois[i];
  if (!M.visited.has(i)) misionEv("poi");
  M.visited.add(i);
  S.progress[S.theme + "_seen"] = [...M.visited]; save();
  const n = M.visited.size, total = c.explore.pois.length;
  if (n >= Math.ceil(total / 3)) award(S.theme, "explore", 1);
  if (n >= Math.ceil(total * 2 / 3)) award(S.theme, "explore", 2);
  if (n >= total) { award(S.theme, "explore", 3); confetti(); }
  openModal(`
    ${p.svg ? `<div style="width:${Math.min(150, p.iw * 1.4)}px;height:${Math.min(150, p.ih * 1.4)}px;margin:0 auto">${p.svg}</div>` : `<div class="bigemoji">${p.emoji}</div>`}
    <h2>${esc(tx(p.name))}</h2>
    <p style="font-size:1.05rem;line-height:1.5">${esc(tx(p.fact))}</p>
    <button class="btn" onclick="NB.speakAgain(${i})">🔊 ${t("listen")}</button>
    <button class="btn soft" onclick="NB.closeModal()">${t("close")}</button>`);
  const jd = (p.jingle && typeof playJingle === "function") ? playJingle(p.jingle) : 0;
  if (!p.jingle) sfx("pop");
  clearTimeout(poiSayTimer);
  poiSayTimer = setTimeout(() => { if (S.mode === "explore") Speech.say(tx(p.name) + ". " + tx(p.fact)); }, jd);
  const lbl = document.querySelectorAll(".poi .plabel")[i];
  if (lbl) lbl.classList.add("seenlbl");
}

function speakAgain(i) {
  const p = THEMES[S.theme].content.explore.pois[i];
  Speech.stop();
  const jd = (p.jingle && typeof playJingle === "function") ? playJingle(p.jingle) : 0;
  if (!p.jingle) sfx("pop");
  clearTimeout(poiSayTimer);
  poiSayTimer = setTimeout(() => { if (S.mode === "explore") Speech.say(tx(p.name) + ". " + tx(p.fact)); }, jd);
}

/* ============ KARAOKE ============ */
function uiKaraokeList(c) {
  box().innerHTML = `<div class="card"><h2>🎤 ${t("playSong")}</h2>
    <div class="optgrid">
      ${c.songs.map((s, i) => `<button class="opt" onclick="NB.songOpen(${i})">${s.emoji} ${esc(tx(s.title))}</button>`).join("")}
    </div></div>`;
}

function songOpen(i) {
  const s = THEMES[S.theme].content.songs[i];
  M.song = s; M.line = -1; M.singing = false;
  box().innerHTML = `<div class="card solid">
    <h2>${s.emoji} ${esc(tx(s.title))}</h2>
    <div class="center">
      <button class="btn big good" id="singbtn" onclick="NB.songPlay()">▶️ ${t("karaokeGo")}</button>
      <button class="btn soft" onclick="NB.setMode('karaoke')">⬅️ ${t("back")}</button>
    </div>
    <div class="lyrics">
      ${s.lines.map((l, idx) => `<div class="lyric" id="ly${idx}">${esc(tx(l))}</div>`).join("")}
    </div></div>`;
}

function songPlay() {
  if (M.singing) { Speech.stop(); M.singing = false; document.getElementById("singbtn").innerHTML = "▶️ " + t("karaokeGo"); return; }
  M.singing = true; M.line = -1;
  document.getElementById("singbtn").innerHTML = "⏸️ " + t("karaokeStop");
  misionEv("song");
  songNextLine();
}

function songNextLine() {
  if (!M.singing || S.mode !== "karaoke") return;
  M.line++;
  document.querySelectorAll(".lyric").forEach((el, i) => el.classList.toggle("now", i === M.line));
  if (M.line >= M.song.lines.length) {
    M.singing = false;
    const btn = document.getElementById("singbtn");
    if (btn) btn.innerHTML = "▶️ " + t("karaokeGo");
    const st = (S.progress[S.theme] || {}).karaoke || 0;
    award(S.theme, "karaoke", Math.min(3, st + 1));
    if (typeof playJingle === "function") try { playJingle({ type: "melody", instr: "brass", notes: [60, 64, 67, 72], nd: 0.22, gap: 0.2, vol: 0.12 }); } catch (e) {}
    confetti();
    return;
  }
  const el = document.getElementById("ly" + M.line);
  if (el) el.scrollIntoView({ block: "nearest", behavior: "smooth" });
  if (typeof playJingle === "function") try { playJingle({ type: "chord", instr: "harp", notes: [60, 64, 67], nd: 0.9 }); } catch (e) {}
  Speech.say(tx(M.song.lines[M.line]), { onEnd: () => setTimeout(songNextLine, 150) });
}

/* ============ ALFABETO ============ */
/* dibujo representativo de la palabra en el idioma activo */
function aem(a) { return (a.em && a.em[S.child.lang]) || a.emoji; }

function uiAbc(c) {
  const seen = new Set(S.abcSeen[S.theme] || []);
  box().innerHTML = `<div class="card">
    <h2>🔤 ${t("mAbc")}</h2>
    <p class="muted">${t("abcHint")}</p>
    <div class="abcgrid">
      ${c.alphabet.map((a, i) => `<button class="abc ${seen.has(a.letter) ? "seen" : ""}" onclick="NB.abc(${i})">${a.letter}<span class="abcem">${aem(a)}</span></button>`).join("")}
    </div></div>`;
}

function abc(i) {
  const c = THEMES[S.theme].content;
  const a = c.alphabet[i];
  if (!S.abcSeen[S.theme]) S.abcSeen[S.theme] = [];
  if (!S.abcSeen[S.theme].includes(a.letter)) { S.abcSeen[S.theme].push(a.letter); misionEv("abc"); }
  const n = S.abcSeen[S.theme].length;
  if (n >= 9) award(S.theme, "abc", 1);
  if (n >= 18) award(S.theme, "abc", 2);
  if (n >= 26) { award(S.theme, "abc", 3); confetti(); }
  save();
  openModal(`
    <div style="font-size:3rem;font-weight:800">${a.letter}</div>
    <div class="bigemoji">${aem(a)}</div>
    <h2>${esc(tx(a.item))}</h2>
    <p style="font-size:1.05rem;line-height:1.5">${esc(tx(a.fact))}</p>
    <button class="btn" onclick="NB.abcSay(${i})">🔊 ${t("listen")}</button>
    <button class="btn soft" onclick="NB.closeModal()">${t("close")}</button>`);
  Speech.say(a.letter + ". " + tx(a.item) + ". " + tx(a.fact));
  uiAbc(c);
}

/* ============ APRENDER A LEER ============ */
/* silabeo aproximado para colorear: grupos consonantes+vocal */
function silabas(w) {
  const partes = w.match(/[^aeiouáéíóúüàèòïAEIOU]*[aeiouáéíóúüàèòïAEIOU]+(?:[ns](?=[^aeiouáéíóúüàèòï]|$))?/g);
  return (partes && partes.join("") === w) ? partes : [w];
}

function palabraColoreada(w) {
  return silabas(w).map((p, i) => `<span style="color:${i % 2 ? "#4fc3f7" : "#ffd740"}">${esc(p)}</span>`).join("");
}

/* --- Escuela de lectura: vive en la portada, con 6 lecciones
   progresivas (vocales → sílabas → primeras palabras → palabras
   del mundo → frases). Ejercicios cortos y todo locutado. --- */
const LEER_N = 6;
const LEER_LECC = [
  { n: 1, ic: "🔤", nm: "leerL1" },
  { n: 2, ic: "🔡", nm: "leerL2" },
  { n: 3, ic: "🐣", nm: "leerL3" },
  { n: 4, ic: "🌍", nm: "leerL4" },
  { n: 5, ic: "📖", nm: "leerL5" },
  { n: 6, ic: "✍️", nm: "leerL6" }
];

/* "A de abeja" con la gramática de cada idioma: el catalán apostrofa ante
   vocal o h ("A d'abella", "O d'ós"), el resto usa su conector normal */
function leerDeUnion(w) {
  if (S.child.lang === "ca" && /^[aeiouhàèéíïòóúü]/i.test(w)) return "d'" + w;
  return t("leerDe") + " " + w;
}

function leerStars(l) { return (S.leerP && S.leerP[l]) || 0; }
function leerTotal() { return LEER_LECC.reduce((a, x) => a + leerStars(x.n), 0); }
function leerMedal() { return LEER_LECC.every(x => leerStars(x.n) >= 2); }
function lbox() { return document.getElementById("leerbox"); }

function leerOpen() {
  Speech.stop();
  S.screen = "leer"; M = {};
  save(); render();
  Speech.say(t("leerSub"));
}

function renderLeer() {
  const r = robot();
  const next = LEER_LECC.find(x => leerStars(x.n) < 2);
  APP.innerHTML = `
  <div class="topbar">
    <button class="btn soft" onclick="NB.goHub()">⬅️ ${t("back")}</button>
    <div class="avatar">${r.svg(58, "wiggle")}</div>
    <div class="who"><div class="rname" style="color:${r.color}">${r.name}</div>
      <div class="status"><div class="dot"></div><span class="stxt">${t("leerSub")}</span></div></div>
  </div>
  <h1>📖 ${t("leerTitle")} ${leerMedal() ? "🏅" : ""}</h1>
  <div id="leerbox">
    <div class="card">
      ${LEER_LECC.map(x => `<button class="opt" style="display:flex;align-items:center;gap:12px;width:100%;margin:6px 0;text-align:left" onclick="NB.leerLesson(${x.n})">
        <span style="font-size:2rem">${x.ic}</span>
        <span style="flex:1"><b>${x.n}. ${t(x.nm)}</b>${next && next.n === x.n ? `<br><span class="soon">👉 ${t("leerNext")}</span>` : ""}</span>
        <span style="font-size:1.05rem">${"⭐".repeat(leerStars(x.n)) || "·"}</span>
      </button>`).join("")}
    </div>
  </div>`;
}

function leerLesson(n) {
  Speech.stop();
  if (S.screen !== "leer") { S.screen = "leer"; render(); }
  const lang = S.child.lang, easy = S.child.age <= 5;
  M.ll = n; M.li = 0; M.lhits = 0;
  if (n === 1) {
    const V = LEER_VOCALES[lang] || LEER_VOCALES.es;
    const ronda = shuffle([...V, ...shuffle(V).slice(0, LEER_N - V.length)]);
    M.lit = ronda.map(v => {
      const otras = shuffle(V.filter(x => x.l !== v.l)).slice(0, easy ? 1 : 2);
      return { v, opts: shuffle([v, ...otras]) };
    });
  } else if (n === 2) {
    const VO = ["a", "e", "i", "o", "u"];
    const todas = [];
    LEER_CONS.forEach(c => VO.forEach(v => todas.push(c + v)));
    M.lit = shuffle(todas).slice(0, LEER_N).map(s => {
      const d1 = s[0] + shuffle(VO.filter(x => x !== s[1]))[0];
      const d2 = shuffle(LEER_CONS.filter(x => x !== s[0]))[0] + s[1];
      return { s, opts: shuffle(easy ? [s, d1] : [s, d1, d2]) };
    });
  } else if (n === 3) {
    const P = LEER_PALABRAS[lang] || LEER_PALABRAS.es;
    M.lit = shuffle(P).slice(0, LEER_N).map(w => {
      const otra = shuffle(P.filter(x => x.w !== w.w))[0];
      return { w, opts: shuffle([w, otra]) };
    });
  } else if (n === 4) {
    const WS = Object.values(W_COMMON);
    const nO = easy ? 2 : (S.child.age <= 7 ? 3 : 4);
    M.lit = shuffle(WS).slice(0, LEER_N).map((w, idx) => {
      const otras = shuffle(WS.filter(x => x.k !== w.k)).slice(0, nO - 1);
      return { w, opts: shuffle([w, ...otras]), modo: idx % 2 };
    });
  } else if (n === 5) {
    const F = LEER_FRASES[lang] || LEER_FRASES.es;
    M.lit = shuffle(F).slice(0, LEER_N).map(f => ({ f, opts: shuffle([f.w, f.x]) }));
  } else {
    M.lit = shuffle(Object.keys(LEER_TRAZOS)).slice(0, LEER_N).map(l => ({ l }));
  }
  leerQ();
}

function leerQ() {
  const r = M.lit[M.li];
  const barra = `<div class="progressbar"><div style="width:${(M.li / LEER_N * 100).toFixed(0)}%"></div></div>`;
  const oyeBtn = `<button class="btn" onclick="NB.leerHear()">🔊 ${t("listen")}</button>`;
  if (M.ll === 6) return trazoRender(barra);
  if (M.ll === 1) {
    M.lok = r.opts.findIndex(o => o.l === r.v.l);
    lbox().innerHTML = `<div class="card solid center">${barra}
      <p class="muted">${t("leerTapL")}</p>${oyeBtn}
      <div class="optgrid" id="leeropts" style="grid-template-columns:repeat(${r.opts.length},1fr)">
        ${r.opts.map((o, i) => `<button class="opt center" style="text-align:center;font-size:3rem;font-weight:900;color:#ffd740" onclick="NB.leerPick(${i})">${o.l}<div class="muted" style="font-size:1.5rem;font-weight:700">${o.l.toLowerCase()}</div></button>`).join("")}
      </div></div>`;
  } else if (M.ll === 2) {
    M.lok = r.opts.indexOf(r.s);
    lbox().innerHTML = `<div class="card solid center">${barra}
      <p class="muted">${t("leerTapS")}</p>${oyeBtn}
      <div class="optgrid" id="leeropts" style="grid-template-columns:repeat(${r.opts.length},1fr)">
        ${r.opts.map((o, i) => `<button class="opt center" style="text-align:center;font-size:2.6rem;font-weight:900" onclick="NB.leerPick(${i})">${palabraColoreada(o)}</button>`).join("")}
      </div></div>`;
  } else if (M.ll === 3) {
    M.lok = r.opts.findIndex(o => o.w === r.w.w);
    lbox().innerHTML = `<div class="card solid center">${barra}
      <p class="muted">${t("leerSlow")}</p>
      <div style="font-size:3rem;font-weight:900;letter-spacing:3px;margin:8px 0">${palabraColoreada(r.w.w)}</div>${oyeBtn}
      <div class="optgrid" id="leeropts" style="grid-template-columns:1fr 1fr">
        ${r.opts.map((o, i) => `<button class="opt center" style="text-align:center;font-size:3rem" onclick="NB.leerPick(${i})">${o.e}</button>`).join("")}
      </div></div>`;
  } else if (M.ll === 4) {
    M.lok = r.opts.findIndex(o => o.k === r.w.k);
    if (r.modo === 0) {
      lbox().innerHTML = `<div class="card solid center">${barra}
        <p class="muted">${t("readTap")}</p>
        <div style="font-size:2.6rem;font-weight:900;letter-spacing:2px;margin:8px 0">${palabraColoreada(tx(r.w.name))}</div>${oyeBtn}
        <div class="optgrid" id="leeropts" style="grid-template-columns:repeat(${r.opts.length},1fr)">
          ${r.opts.map((o, i) => `<button class="opt center" style="text-align:center;font-size:2.6rem" onclick="NB.leerPick(${i})">${o.emoji}</button>`).join("")}
        </div></div>`;
    } else {
      lbox().innerHTML = `<div class="card solid center">${barra}
        <p class="muted">${t("readFind")}</p>
        <div style="font-size:4rem;margin:8px 0">${r.w.emoji}</div>
        <div class="optgrid" id="leeropts" style="grid-template-columns:1fr">
          ${r.opts.map((o, i) => `<button class="opt center" style="text-align:center;font-size:1.5rem;font-weight:800" onclick="NB.leerPick(${i})">${esc(tx(o.name))}</button>`).join("")}
        </div></div>`;
    }
  } else {
    M.lok = r.opts.indexOf(r.f.w);
    lbox().innerHTML = `<div class="card solid center">${barra}
      <p class="muted">${t("leerGap")}</p>
      <div style="font-size:1.7rem;font-weight:800;margin:12px 0;line-height:1.7">${esc(r.f.a)}<span id="leergap" style="border-bottom:3px dashed #ffd740;padding:0 16px">&nbsp;</span>${esc(r.f.b)} ${r.f.e}</div>
      <div class="optgrid" id="leeropts" style="grid-template-columns:1fr 1fr">
        ${r.opts.map((o, i) => `<button class="opt center" style="text-align:center;font-size:1.7rem;font-weight:900" onclick="NB.leerPick(${i})">${palabraColoreada(o)}</button>`).join("")}
      </div></div>`;
  }
  if (M.ll !== 4 || r.modo === 0) leerHear();
}

function leerHear() {
  const r = M.lit[M.li];
  Speech.stop();
  if (M.ll === 1) Speech.say(r.v.l + ". " + r.v.l + " " + leerDeUnion(r.v.w));
  else if (M.ll === 2) Speech.say(r.s + ", " + r.s);
  else if (M.ll === 3) Speech.say(silabas(r.w.w).join(", ") + ". " + r.w.w);
  else if (M.ll === 4) Speech.say(tx(r.w.name));
  else if (M.ll === 5) Speech.say(r.f.a + " ... " + r.f.b);
  else { const [w] = trazoAncla(r.l); Speech.say(r.l + ". " + r.l + " " + leerDeUnion(w)); }
}

/* --- lección 6: trazado de letras con el dedo --- */
function trazoAncla(letra) {
  const lang = S.child.lang;
  const v = (LEER_VOCALES[lang] || LEER_VOCALES.es).find(x => x.l === letra);
  if (v) return [v.w, v.e];
  const c = (LEER_LETRA_ANCLA[lang] || LEER_LETRA_ANCLA.es)[letra];
  return c || [letra, "✏️"];
}

function trazoRender(barra) {
  const letra = M.lit[M.li].l;
  const trazos = LEER_TRAZOS[letra];
  const [, em] = trazoAncla(letra);
  M.tz = { stroke: 0, pts: [], hit: new Set(), down: false, busy: false };
  lbox().innerHTML = `<div class="card solid center">${barra}
    <p class="muted">${t("leerTapT")}</p>
    <div style="font-size:1.5rem;font-weight:900;margin:2px 0">${letra} <span class="muted" style="font-weight:700">${letra.toLowerCase()}</span> ${em}</div>
    <svg id="trazopad" class="trazopad" viewBox="0 0 100 120">
      ${trazos.map(d => `<path class="guia" d="${d}"/>`).join("")}
      <g id="trz-done"></g>
      <path id="trz-act" class="activa" d="${trazos[0]}"/>
      <g id="trz-dots"></g>
      <circle id="trz-ini" class="pini" r="7" fill="#ffd740"/>
      <path id="trz-ink" class="tinta" stroke="${robot().color}" d=""/>
    </svg>
    <div style="margin-top:8px">
      <button class="btn" onclick="NB.leerHear()">🔊 ${t("listen")}</button>
      <button class="btn soft" onclick="NB.trazoClear()">🧽 ${t("leerErase")}</button>
    </div></div>`;
  const svg = document.getElementById("trazopad");
  svg.addEventListener("pointerdown", e => {
    if (!M.tz || M.tz.busy) return;
    e.preventDefault();
    svg.setPointerCapture(e.pointerId);
    M.tz.down = true;
    const [x, y] = trazoXY(e);
    trazoInk("M", x, y); trazoMark(x, y);
  });
  svg.addEventListener("pointermove", e => {
    if (!M.tz || !M.tz.down || M.tz.busy) return;
    e.preventDefault();
    const [x, y] = trazoXY(e);
    trazoInk("L", x, y); trazoMark(x, y);
  });
  const alza = () => { if (M.tz) M.tz.down = false; };
  svg.addEventListener("pointerup", alza);
  svg.addEventListener("pointercancel", alza);
  trazoArma();
  leerHear();
}

/* prepara el trazo activo: muestrea puntos de control y coloca la señal de inicio */
function trazoArma() {
  const act = document.getElementById("trz-act");
  const L = act.getTotalLength(), n = 18;
  M.tz.pts = []; M.tz.hit = new Set();
  let html = "";
  for (let i = 0; i <= n; i++) {
    const p = act.getPointAtLength(L * i / n);
    M.tz.pts.push([p.x, p.y]);
    html += `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="2.6" fill="rgba(255,255,255,.35)" data-i="${i}"/>`;
  }
  document.getElementById("trz-dots").innerHTML = html;
  const ini = document.getElementById("trz-ini");
  ini.setAttribute("cx", M.tz.pts[0][0]); ini.setAttribute("cy", M.tz.pts[0][1]);
}

function trazoXY(e) {
  const svg = document.getElementById("trazopad");
  const pt = svg.createSVGPoint();
  pt.x = e.clientX; pt.y = e.clientY;
  const q = pt.matrixTransform(svg.getScreenCTM().inverse());
  return [q.x, q.y];
}

function trazoInk(cmd, x, y) {
  const ink = document.getElementById("trz-ink");
  ink.setAttribute("d", ink.getAttribute("d") + ` ${cmd} ${x.toFixed(1)} ${y.toFixed(1)}`);
}

function trazoMark(x, y) {
  const dots = document.getElementById("trz-dots");
  M.tz.pts.forEach((p, i) => {
    if (M.tz.hit.has(i)) return;
    if ((p[0] - x) ** 2 + (p[1] - y) ** 2 < 15 * 15) {
      M.tz.hit.add(i);
      const d = dots.querySelector(`[data-i="${i}"]`);
      if (d) d.setAttribute("fill", "#ffd740");
    }
  });
  if (M.tz.hit.size >= Math.ceil(M.tz.pts.length * 0.8)) trazoHecho();
}

function trazoHecho() {
  if (M.tz.busy) return;
  M.tz.busy = true; M.tz.down = false;
  const letra = M.lit[M.li].l;
  const trazos = LEER_TRAZOS[letra];
  const act = document.getElementById("trz-act");
  document.getElementById("trz-done").innerHTML += `<path class="hecha" d="${act.getAttribute("d")}"/>`;
  document.getElementById("trz-ink").setAttribute("d", "");
  M.tz.stroke++;
  if (M.tz.stroke < trazos.length) {
    sfx("pop");
    act.setAttribute("d", trazos[M.tz.stroke]);
    trazoArma();
    M.tz.busy = false;
    return;
  }
  /* letra completada */
  act.setAttribute("d", "");
  document.getElementById("trz-dots").innerHTML = "";
  document.getElementById("trz-ini").setAttribute("r", "0");
  M.lhits++;
  confetti(10); sfx("good");
  const [w] = trazoAncla(letra);
  Speech.say(letra + " " + leerDeUnion(w) + "! " + t("quizRight"));
  setTimeout(() => {
    if (S.screen !== "leer" || M.ll !== 6) return;
    M.li++;
    if (M.li < LEER_N) return leerQ();
    leerEnd();
  }, 1500);
}

function trazoClear() {
  if (!M.tz || M.tz.busy) return;
  document.getElementById("trz-ink").setAttribute("d", "");
  M.tz.hit = new Set();
  document.querySelectorAll("#trz-dots circle").forEach(d => d.setAttribute("fill", "rgba(255,255,255,.35)"));
}

function leerPick(i) {
  const r = M.lit[M.li];
  const good = i === M.lok;
  document.querySelectorAll("#leeropts .opt").forEach((b, j) => {
    b.onclick = null;
    if (j === M.lok) b.classList.add("right");
    else if (j === i) b.classList.add("wrong");
  });
  Speech.stop();
  if (good) {
    M.lhits++; confetti(8); sfx("good");
    if (M.ll === 1) Speech.say(r.v.l + " " + leerDeUnion(r.v.w) + "! " + t("quizRight"));
    else if (M.ll === 2) Speech.say(r.s + "! " + t("quizRight"));
    else if (M.ll === 3) Speech.say(r.w.w + "! " + t("quizRight"));
    else if (M.ll === 4) Speech.say(tx(r.w.name) + "! " + t("quizRight"));
    else {
      const g = document.getElementById("leergap");
      if (g) { g.innerHTML = palabraColoreada(r.f.w); g.style.borderBottom = "none"; }
      Speech.say(r.f.a + r.f.w + r.f.b + "! " + t("quizRight"));
    }
  } else {
    sfx("bad");
    const bien = M.ll === 1 ? r.v.l : M.ll === 2 ? r.s : M.ll === 3 ? r.w.w : M.ll === 4 ? tx(r.w.name) : r.f.w;
    Speech.say(t("mathNo") + " " + t("readWas") + " " + bien);
  }
  setTimeout(() => {
    if (S.screen !== "leer") return;
    M.li++;
    if (M.li < LEER_N) return leerQ();
    leerEnd();
  }, good ? 1200 : 2500);
}

function leerEnd() {
  const stars = Math.max(1, Math.round(M.lhits * 3 / LEER_N));
  const habia = leerMedal();
  S.leerP = S.leerP || {};
  S.leerP[M.ll] = Math.max(S.leerP[M.ll] || 0, stars);
  save();
  const nueva = !habia && leerMedal();
  if (nueva) confetti(40); else if (stars >= 2) confetti(24);
  lbox().innerHTML = `<div class="card center">
    <h2>🎉 ${t("quizDone")}</h2>
    <div style="font-size:2.4rem">${"⭐".repeat(stars)}</div>
    <p style="font-size:1.2rem">${t("quizScore", { n: M.lhits, total: LEER_N })}</p>
    ${nueva ? `<div style="font-size:3.4rem">🏅</div><p style="font-weight:800">${t("leerMedalMsg")}</p>` : ""}
    <button class="btn big" onclick="NB.leerLesson(${M.ll})">🔁 ${t("again")}</button>
    ${M.ll < LEER_LECC.length ? `<button class="btn big good" onclick="NB.leerLesson(${M.ll + 1})">➡️ ${t("leerNextL")}</button>` : ""}
    <button class="btn soft" onclick="NB.leerOpen()">📖 ${t("leerTitle")}</button>
  </div>`;
  Speech.say(nueva ? t("leerMedalMsg") : t("quizScore", { n: M.lhits, total: LEER_N }));
  misionEv("leer");
}

/* ============ MATES ============ */
function abcSay(i) {
  const a = THEMES[S.theme].content.alphabet[i];
  Speech.stop();
  Speech.say(a.letter + ". " + tx(a.item) + ". " + tx(a.fact));
}

function uiMathIntro(c) {
  box().innerHTML = `<div class="card center">
    <h2>🔢 ${t("mMath")}</h2>
    <div style="font-size:3rem">${c.mathEmojis.slice(0, 3).join("")}</div>
    <button class="btn big good" onclick="NB.mathStart()">${t("quizGo")}</button>
  </div>`;
}

function rnd(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); }

function mathGen() {
  const age = S.child.age;
  const em = pick(THEMES[S.theme].content.mathEmojis);
  if (age <= 4) {
    const n = rnd(1, 5);
    return { kind: "count", em, n, text: em.repeat(n), speak: t("mathCount"), answer: n, opts: mathOpts(n, 1, 6) };
  }
  if (age <= 6) {
    const a = rnd(1, 5), b = rnd(1, 5);
    return { kind: "expr", em, text: `${a} + ${b} = ?`, speak: `${a} ${t("plus")} ${b}`, answer: a + b, opts: mathOpts(a + b, 2, 10) };
  }
  if (age <= 8) {
    if (Math.random() < 0.5) { const a = rnd(5, 15), b = rnd(1, 5); return { kind: "expr", em, text: `${a} + ${b} = ?`, speak: `${a} ${t("plus")} ${b}`, answer: a + b, opts: mathOpts(a + b, 6, 20) }; }
    const a = rnd(6, 20), b = rnd(1, 5);
    return { kind: "expr", em, text: `${a} - ${b} = ?`, speak: `${a} ${t("minus")} ${b}`, answer: a - b, opts: mathOpts(a - b, 1, 20) };
  }
  const r = Math.random();
  if (r < 0.4) { const a = rnd(2, 9), b = rnd(2, 9); return { kind: "expr", em, text: `${a} × ${b} = ?`, speak: `${a} ${t("times")} ${b}`, answer: a * b, opts: mathOpts(a * b, 4, 81) }; }
  if (r < 0.7) { const a = rnd(20, 80), b = rnd(10, 19); return { kind: "expr", em, text: `${a} + ${b} = ?`, speak: `${a} ${t("plus")} ${b}`, answer: a + b, opts: mathOpts(a + b, 30, 99) }; }
  const a = rnd(30, 99), b = rnd(10, 29);
  return { kind: "expr", em, text: `${a} - ${b} = ?`, speak: `${a} ${t("minus")} ${b}`, answer: a - b, opts: mathOpts(a - b, 1, 89) };
}

function mathOpts(ans, min, max) {
  const set = new Set([ans]);
  while (set.size < 4) {
    let v = ans + rnd(-3, 3);
    if (v === ans || v < min || v > max) v = rnd(min, max);
    set.add(v);
  }
  return shuffle([...set]);
}

function mathStart() { M.mi = 0; M.mhits = 0; mathQ(); }

function mathQ() {
  const ex = mathGen(); M.ex = ex;
  box().innerHTML = `<div class="card solid center">
    <div class="progressbar"><div style="width:${(M.mi * 10)}%"></div></div>
    ${ex.kind === "count"
      ? `<h2>${t("mathCount")}</h2><div style="font-size:2.6rem;letter-spacing:6px;line-height:1.4">${ex.text}</div>`
      : `<div style="font-size:1.8rem">${ex.em}</div><div style="font-size:2.6rem;font-weight:800">${ex.text}</div>`}
    <div class="optgrid" id="mathopts" style="grid-template-columns:1fr 1fr">
      ${ex.opts.map(o => `<button class="opt center" onclick="NB.mathPick(${o})" style="text-align:center;font-size:1.4rem">${o}</button>`).join("")}
    </div></div>`;
  Speech.say(ex.speak);
}

function mathPick(v) {
  const ex = M.ex;
  const good = v === ex.answer;
  document.querySelectorAll("#mathopts .opt").forEach(b => {
    const bv = parseInt(b.textContent, 10);
    b.onclick = null;
    if (bv === ex.answer) b.classList.add("right");
    else if (bv === v) b.classList.add("wrong");
  });
  if (good) { M.mhits++; confetti(8); sfx("good"); Speech.say(t("mathYes") + " " + t("quizRight")); }
  else { sfx("bad"); Speech.say(t("mathNo") + " " + tx(robot().oops) + " " + t("quizWrong") + " " + ex.answer); }
  setTimeout(() => {
    if (S.mode !== "math" || S.screen !== "adventure") return;
    M.mi++;
    if (M.mi < 10) return mathQ();
    const stars = Math.max(1, Math.round(M.mhits * 3 / 10));
    award(S.theme, "math", stars);
    if (stars >= 2) confetti(24);
    box().innerHTML = `<div class="card center">
      <h2>🎉 ${t("quizDone")}</h2>
      <div style="font-size:2.4rem">${"⭐".repeat(stars)}</div>
      <p style="font-size:1.2rem">${t("quizScore", { n: M.mhits, total: 10 })}</p>
      <button class="btn big" onclick="NB.mathStart()">🔁 ${t("again")}</button></div>`;
    Speech.say(t("quizScore", { n: M.mhits, total: 10 }));
  }, good ? 900 : 2600);
}

/* ============ TALLER (CONSTRUCTOR) ============ */
function uiBuild(c) {
  const b = c.builder;
  M.sel = M.sel || {};
  b.parts.forEach(p => { if (!M.sel[p.id]) M.sel[p.id] = p.options[0].v; });
  const myBuilds = (S.builds || []).filter(x => x.theme === S.theme);
  box().innerHTML = `<div class="card solid">
    <h2>🔧 ${tx(b.title)}</h2>
    <div class="buildpreview" id="buildprev">${b.horizontal ? `<div class="hbuild">${b.svg(M.sel)}</div>` : b.svg(M.sel)}</div>
    ${b.parts.map(p => `<div class="partsrow">
      <div class="plabel">${tx(p.label)}</div>
      <div class="partopts">
        ${p.options.map(o => {
          const isColor = /^#/.test(o.v);
          const OPTICONS = { cone: "🔺", round: "🌛", star: "⭐", one: "🔵", two: "🔵🔵", heart: "💗", rainbow: "🌈" };
          return `<button class="chip ${M.sel[p.id] === o.v ? "on" : ""}" onclick="NB.buildSet('${p.id}','${o.v}')"
            ${isColor ? `style="background:${o.v};min-width:46px"` : ""}>${isColor ? "&nbsp;" : o.icon || OPTICONS[o.id] || o.id}</button>`;
        }).join("")}
      </div></div>`).join("")}
    <div class="chatrow">
      <input type="text" id="buildname" maxlength="18" placeholder="${esc(t("buildName"))}">
      <button class="btn good" onclick="NB.buildSave()">💾 ${t("buildSave")}</button>
    </div>
    ${myBuilds.length ? `<h2 style="margin-top:14px">🎒 ${t("buildYours")}</h2>
      <div class="choice-row">${S.builds.map((x, gi) => x.theme === S.theme ? `<button class="chip" onclick="NB.buildView(${gi})">🔎 ${esc(x.name)}</button>` : "").join("")}</div>` : ""}
  </div>`;
}

function buildSet(pid, v) {
  M.sel[pid] = v;
  uiBuild(THEMES[S.theme].content);
}

/* miniatura de un SVG con medidas fijas: se adapta al contenedor */
function miniSvg(svgStr) {
  return svgStr.replace(/width="\d+" height="\d+"/, 'width="100%" height="100%"');
}

function buildView(gi) {
  const b = S.builds[gi];
  if (!b || !THEMES[b.theme] || !THEMES[b.theme].content) return;
  const bl = THEMES[b.theme].content.builder;
  openModal(`
    <h2>${esc(b.name)}</h2>
    <div style="width:190px;height:200px;margin:0 auto">${miniSvg(bl.svg(b.parts))}</div>
    <p class="muted">${tx(THEMES[b.theme].name)}</p>
    <button class="btn soft" onclick="NB.buildDel(${gi})">🗑️ ${t("eraseOne")}</button>
    <button class="btn" onclick="NB.closeModal()">${t("close")}</button>`);
}

function buildDel(gi) {
  S.builds.splice(gi, 1);
  save();
  closeModal();
  if (S.screen === "adventure" && S.mode === "build") uiBuild(THEMES[S.theme].content);
  else if (S.screen === "hub") renderHub();
}

function buildSave() {
  const name = (document.getElementById("buildname").value || "").trim().slice(0, 18) || (S.child.name ? S.child.name + "-1" : "★");
  S.builds.push({ theme: S.theme, name, parts: Object.assign({}, M.sel) });
  const mine = S.builds.filter(x => x.theme === S.theme).length;
  award(S.theme, "build", Math.min(3, mine));
  save();
  const b = THEMES[S.theme].content.builder;
  if (b.launch) {
    launchShow(b.svg(M.sel));
    return;
  }
  if (b.travel) {
    travelShow(b.svg(M.sel));
    return;
  }
  if (b.dance) {
    danceShow(b.svg(M.sel));
    return;
  }
  celebrateShow(b.svg(M.sel));
}

/* despegue a pantalla completa: cuenta atrás y el cohete guardado sube en vertical */
/* EL MOMENTO GRANDE: medalla conseguida, a pantalla completa */
function medalShow(theme) {
  const d = document.createElement("div");
  d.className = "medalpad";
  d.innerHTML = `
    <div class="dlight l1"></div>
    <div class="mbig">🏅</div>
    <div class="mname">${tx(THEMES[theme].name)}</div>`;
  document.body.appendChild(d);
  confetti(40);
  if (typeof playJingle === "function") try { playJingle({ type: "melody", instr: "brass", notes: [60, 64, 67, 72, 76], nd: 0.24, gap: 0.22, vol: 0.14 }); } catch (e) {}
  Speech.say(t("medalMsg").replace(/\{theme\}/g, tx(THEMES[theme].name)));
  setTimeout(() => confetti(30), 1500);
  setTimeout(() => d.remove(), 5200);
}

/* celebracion generica del taller: fondo tematico + la creacion animada */
function celebrateShow(svg) {
  const c = (typeof CELEBRATIONS !== "undefined") ? CELEBRATIONS[S.theme] : null;
  if (!c) {
    confetti();
    Speech.say(t("buildSaved") + " " + tx(pick(robot().cheer)));
    uiBuild(THEMES[S.theme].content);
    return;
  }
  const d = document.createElement("div");
  d.className = "celebpad";
  d.style.background = c.bg;
  d.innerHTML = `
    <div class="cextra">${c.extra || ""}</div>
    <div class="cmachine mv-${c.move}">${svg}</div>`;
  document.body.appendChild(d);
  Speech.say(tx(c.say));
  if (c.jingle && typeof playJingle === "function") try { playJingle(c.jingle); } catch (e) {}
  setTimeout(() => confetti(20), 1000);
  setTimeout(() => {
    d.remove();
    if (S.screen !== "adventure" || S.mode !== "build") return;
    Speech.say(t("buildSaved") + " " + tx(pick(robot().cheer)), { queue: true });
    uiBuild(THEMES[S.theme].content);
  }, 4600);
}

/* fiesta del droide: pista de baile, focos de colores y el droide botando
   al ritmo de sus propios bips */
function danceShow(svg) {
  const d = document.createElement("div");
  d.className = "dancepad";
  d.innerHTML = `
    <div class="dlight l1"></div>
    <div class="dlight l2"></div>
    <div class="dmachine dance">${svg}</div>
    <div class="dfloor">${Array.from({ length: 8 }, (_, i) => `<span style="animation-delay:${(i * 0.22).toFixed(2)}s"></span>`).join("")}</div>`;
  document.body.appendChild(d);
  Speech.say(t("danceGo"));
  const beep = () => { try { playJingle({ type: "melody", w: "square", notes: [76, 83, 79, 88, 76, 84, 90, 86], nd: 0.16, gap: 0.19, vol: 0.1 }); } catch (e) {} };
  setTimeout(beep, 900);
  setTimeout(beep, 2600);
  setTimeout(() => confetti(18), 1200);
  setTimeout(() => confetti(18), 3000);
  setTimeout(() => {
    d.remove();
    if (S.screen !== "adventure" || S.mode !== "build") return;
    Speech.say(t("buildSaved") + " " + tx(pick(robot().cheer)));
    uiBuild(THEMES[S.theme].content);
  }, 4800);
}

/* viaje en el tiempo a pantalla completa: la máquina centrada, el portal
   girando detrás, cuenta atrás y desaparición con destello hacia el pasado */
function travelShow(svg) {
  const d = document.createElement("div");
  d.className = "timepad";
  d.innerHTML = `
    <div class="tportal"></div>
    <div class="tportal t2"></div>
    <div class="lcount" id="tcount">3</div>
    <div class="tmachine" id="tmachine">${svg}</div>
    <div class="tflash" id="tflash"></div>`;
  document.body.appendChild(d);
  Speech.say(t("travelGo"));
  const cnt = d.querySelector("#tcount");
  setTimeout(() => { cnt.textContent = "2"; }, 700);
  setTimeout(() => { cnt.textContent = "1"; }, 1400);
  setTimeout(() => {
    cnt.textContent = "🦕";
    d.querySelector("#tmachine").classList.add("warp");
    confetti(20);
  }, 2100);
  setTimeout(() => { d.querySelector("#tflash").classList.add("boom"); }, 4100);
  setTimeout(() => {
    d.remove();
    if (S.screen !== "adventure" || S.mode !== "build") return;
    Speech.say(t("buildSaved") + " " + tx(pick(robot().cheer)));
    uiBuild(THEMES[S.theme].content);
  }, 5100);
}

function launchShow(svg) {
  const d = document.createElement("div");
  d.className = "launchpad";
  d.innerHTML = `
    <div class="lstars">${Array.from({ length: 26 }, () =>
      `<span style="left:${(Math.random() * 100).toFixed(1)}%;top:${(Math.random() * 100).toFixed(1)}%;animation-delay:${(Math.random() * 2).toFixed(1)}s">✦</span>`).join("")}</div>
    <div class="lcount" id="lcount">3</div>
    <div class="lrocket" id="lrocket">${svg}</div>
    <div class="lground"></div>`;
  document.body.appendChild(d);
  Speech.say(t("launchGo"));
  const cnt = d.querySelector("#lcount");
  setTimeout(() => { cnt.textContent = "2"; }, 700);
  setTimeout(() => { cnt.textContent = "1"; }, 1400);
  setTimeout(() => {
    cnt.textContent = "🌕";
    d.querySelector("#lrocket").classList.add("fly");
    confetti(20);
  }, 2100);
  setTimeout(() => {
    d.remove();
    if (S.screen !== "adventure" || S.mode !== "build") return;
    Speech.say(t("buildSaved") + " " + tx(pick(robot().cheer)));
    uiBuild(THEMES[S.theme].content);
  }, 5300);
}

/* ============ FAMOSOS ============ */
function uiFamous(c) {
  M.fi = M.fi == null ? 0 : M.fi;
  M.fseen = M.fseen || new Set();
  const total = c.famous.length + 1;
  const isChild = M.fi === c.famous.length;
  const f = isChild ? null : c.famous[M.fi];
  M.fseen.add(M.fi);
  if (M.fseen.size >= total) award(S.theme, "famous", 3);
  else if (M.fseen.size >= Math.ceil(total / 2)) award(S.theme, "famous", 2);
  else award(S.theme, "famous", 1);
  box().innerHTML = `<div class="card">
    <div class="famenav">
      ${c.famous.map((p, i) => `<button class="chip ${M.fi === i ? "on" : ""}" onclick="NB.famous(${i})">${p.face ? `<span class="minicara">${p.face}</span>` : p.emoji}</button>`).join("")}
      <button class="chip ${isChild ? "on" : ""}" onclick="NB.famous(${c.famous.length})">⭐</button>
    </div>
    ${isChild
      ? `<div class="famecard child">
          <div style="display:flex;justify-content:center;align-items:center;gap:6px">${childPortrait(92)}<span style="font-size:1.6rem">${THEMES[S.theme].emoji}</span></div>
          <div class="fname">${esc(S.child.name || tx(T.friend))} ⭐</div>
          <div class="fyear">${t("famousChildTitle")}</div>
          <p style="margin-top:8px;font-weight:700">${esc(gx(c.childDream))}</p>
          <p class="fquote">"${esc(tx(c.childQuote))}"</p>
        </div>`
      : `<div class="famecard" style="border-color:${f.color};background:linear-gradient(160deg,${f.color}33,transparent)">
          ${f.face ? `<div style="width:104px;height:104px;margin:0 auto">${f.face}</div>` : `<div style="font-size:3rem">${f.emoji}</div>`}
          <div class="fname">${esc(tx(f.name))}</div>
          <div class="fyear">${f.year}</div>
          <p style="margin-top:8px">${esc(tx(f.achievement))}</p>
          <p class="fquote">"${esc(tx(f.quote))}"</p>
          <button class="btn" onclick="NB.famousSay()">🔊 ${t("listen")}</button>
        </div>`}
  </div>`;
  if (isChild) Speech.say((S.child.name || tx(T.friend)) + ". " + gx(c.childDream) + ". " + tx(c.childQuote));
  else Speech.say(tx(f.name) + ". " + tx(f.achievement) + ". " + tx(f.quote));
}

function famous(i) { M.fi = i; uiFamous(THEMES[S.theme].content); }

function famousSay() {
  const c = THEMES[S.theme].content;
  Speech.stop();
  if (M.fi === c.famous.length) Speech.say((S.child.name || tx(T.friend)) + ". " + gx(c.childDream) + ". " + tx(c.childQuote));
  else { const f = c.famous[M.fi]; Speech.say(tx(f.name) + ". " + tx(f.achievement) + ". " + tx(f.quote)); }
}

/* ============ MODAL / AJUSTES / ACERCA DE ============ */
function toast(msg) {
  const d = document.createElement("div");
  d.className = "toast";
  d.textContent = msg;
  document.body.appendChild(d);
  setTimeout(() => d.remove(), 6000);
}

function openModal(inner) {
  closeModal();
  const d = document.createElement("div");
  d.className = "modal-back"; d.id = "modalback";
  d.innerHTML = `<div class="modal">${inner}</div>`;
  d.addEventListener("click", e => { if (e.target === d) closeModal(); });
  document.body.appendChild(d);
}

function closeModal() {
  const d = document.getElementById("modalback");
  if (d) d.remove();
}

function openSettings() {
  openModal(`
    <h2>⚙️ ${t("settings")}</h2>
    <p class="muted">${t("timeLeft", { n: minutesLeft() })}</p>
    <div class="optgrid">
      <button class="opt" onclick="NB.addTime()">⏰ ${t("addTime")}</button>
      <button class="opt" onclick="NB.toggleMic()">${S.settings.mic ? "🎤 " + t("micLabel") + ": " + t("on") : "🔇 " + t("micLabel") + ": " + t("off")}</button>
      <button class="opt" onclick="NB.toggleSound()">${S.settings.sound ? "🔊 " + t("soundLabel") + ": " + t("on") : "🔈 " + t("soundLabel") + ": " + t("off")}</button>
      ${S.settings.sound ? `<button class="opt" onclick="NB.toggleVoiceKind()">${S.settings.voiceKind === "robot" ? "🤖 " + t("voiceKindLabel") + ": " + t("voiceRobot") : "🙂 " + t("voiceKindLabel") + ": " + t("voiceHuman")}</button>` : ""}
      ${S.settings.sound && S.settings.voiceKind !== "robot" ? `<button class="opt" onclick="NB.cycleVoice()">🗣️ ${t("soundLabel")}: ${esc(currentVoiceName())} · ${Speech.listVoices(L()).length} ${LANGS[L()].label}</button>` : ""}
      <button class="opt" onclick="NB.editProfile()">✏️ ${t("editProfile")}</button>
      <button class="opt" onclick="NB.parentsAsk()">🧑‍🧒 ${t("pTitle")}</button>
      <button class="opt" onclick="NB.askErase()">🗑️ ${t("eraseAll")}</button>
    </div>
    <p class="muted" style="margin-top:8px">Ninobot v${APP_VERSION}</p>
    <button class="btn soft" onclick="NB.closeModal()">${t("close")}</button>`);
}

function currentVoiceName() {
  const v = Speech.pickVoice(LANGS[L()].code);
  return v ? v.name.replace(/\s*\(.*\)$/, "") : "?";
}

function cycleVoice() {
  const lang2 = L();
  const ranked = Speech.listVoices(lang2);
  if (!ranked.length) return;
  const cur = Speech.pickVoice(LANGS[lang2].code);
  const idx = ranked.findIndex(v => cur && v.name === cur.name);
  const nxt = ranked[(idx + 1) % ranked.length];
  if (!S.settings.voiceByLang) S.settings.voiceByLang = {};
  S.settings.voiceByLang[lang2] = nxt.name;
  save();
  openSettings();
  Speech.stop();
  Speech.say(t("hubHello"));
}

function addTime() { sessionDeadline = (sessionDeadline || Date.now()) + 10 * 60000; openSettings(); }
function toggleMic() { S.settings.mic = !S.settings.mic; save(); openSettings(); if (S.screen === "hub") renderHub(); }
function toggleSound() { S.settings.sound = !S.settings.sound; if (!S.settings.sound) Speech.stop(); save(); openSettings(); }
function toggleVoiceKind() {
  S.settings.voiceKind = S.settings.voiceKind === "robot" ? "human" : "robot";
  save(); openSettings();
  Speech.stop();
  Speech.say(t("hubHello"));
}
function editProfile() { closeModal(); S.screen = "setup"; render(); }

function askErase() {
  openModal(`
    <h2>🗑️ ${t("eraseAll")}</h2>
    <p>${t("eraseConfirm")}</p>
    <div class="choice-row" style="justify-content:center;margin-top:10px">
      <button class="btn warm" onclick="NB.doErase()">${t("yes")}</button>
      <button class="btn soft" onclick="NB.closeModal()">${t("no")}</button>
    </div>`);
}

function doErase() { closeModal(); resetAll(); }

function openAbout() {
  openModal(`
    <div>${NINOBOT_SVG(90, "bounce")}</div>
    <h2>${t("aboutTitle")}</h2>
    <p style="line-height:1.5">${t("aboutText")}</p>
    <p class="muted" style="margin-top:6px">${t("aboutContact")}<br><a href="mailto:daniel.solis@ninenka.com" style="color:#4fc3f7;font-weight:700">daniel.solis@ninenka.com</a></p>
    <p class="muted">v${APP_VERSION} · 2026</p>
    <button class="btn soft" onclick="NB.closeModal()">${t("close")}</button>`);
}

/* ============ DESPEDIDA ============ */
function renderBye() {
  APP.innerHTML = `<div class="bye-wrap">
    <div>${NINOBOT_SVG(130, "bounce")}</div>
    <h1>👋 ${t("byeTitle")}</h1>
    <div class="card solid" style="max-width:460px;margin:14px auto">
      <p style="font-size:1.1rem;line-height:1.5">${t("byeSpeech")}</p>
    </div>
    <button class="btn soft" onclick="NB.byeBack()">${t("byeBack")}</button>
  </div>`;
}

function byeBack() { startSessionTimer(); S.screen = "hub"; render(); }

/* ============ API pública para los onclick ============ */
window.NB = {
  finishSetup, pickRobot, pickTheme, voiceCall, goHub, setMode,
  openCall, callRobot, callSend, callMic, hangUp, chipSay, buildView, buildDel, abcSay, famousSay,
  chatSend, chatMic, storyStart, storyGo, quizStart, quizPick, quizNext, cycleFantasy,
  transLang, transSay, mapGoto, mapCat, poi, speakAgain, songOpen, songPlay, leerOpen, leerLesson, leerPick, leerHear, trazoClear, bookOpen, parentsAsk, parentsGo, careDo, careAgain,
  abc, mathStart, mathPick, buildSet, buildSave, famous,
  openSettings, openAbout, closeModal, addTime, toggleMic, toggleSound, toggleVoiceKind,
  cycleVoice, editProfile, askErase, doErase, byeBack
};

/* ============ ARRANQUE ============ */
buildStars();
if (S.setupDone) startSessionTimer();
if ("speechSynthesis" in window) {
  speechSynthesis.getVoices();
  speechSynthesis.onvoiceschanged = () => { speechSynthesis.getVoices(); Speech._voiceWait = 0; };
  // Cebador: el primer toque del usuario desbloquea el motor de voz con la voz
  // correcta ya elegida (imprescindible en iPhone/iPad, inofensivo en el resto).
  let primed = false;
  document.addEventListener("pointerdown", () => {
    if (primed || !Speech.enabled()) return;
    primed = true;
    try {
      const u = new SpeechSynthesisUtterance(" ");
      u.volume = 0;
      const v = Speech.pickVoice(LANGS[L()].code);
      if (v) { u.voice = v; u.lang = v.lang; } else { u.lang = LANGS[L()].code; }
      speechSynthesis.speak(u);
    } catch (e) { /* nada */ }
  }, { capture: true });
}
render();
