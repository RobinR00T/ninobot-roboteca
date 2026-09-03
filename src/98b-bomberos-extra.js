"use strict";
/* ============================================================
   98b-bomberos-extra.js: extras del tema BOMBEROS.
   Tarjeta de portada, celebración del taller, rutina de
   cuidado del camión y caras dibujadas de los 5 famosos.
   Todo con guardas por si el motor carga en otro orden.
   ============================================================ */

/* ---------- TARJETA DE PORTADA: el camión y el gatito ---------- */
if (typeof THEME_CARDS !== "undefined") {
  THEME_CARDS.bomberos = `<svg viewBox="0 0 120 70" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
    <defs>
      <linearGradient id="tcBombCamion" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#EF5350"/>
        <stop offset="100%" stop-color="#C62828"/>
      </linearGradient>
    </defs>
    <!-- sol -->
    <circle cx="14" cy="12" r="7" fill="#FFF176"/>
    <!-- arbolito con gatito -->
    <rect x="99" y="40" width="5" height="18" rx="2" fill="#6D4C41"/>
    <circle cx="101" cy="30" r="13" fill="#43A047"/>
    <circle cx="92" cy="36" r="8" fill="#388E3C"/>
    <circle cx="110" cy="35" r="8" fill="#388E3C"/>
    <circle cx="101" cy="26" r="4.6" fill="#FFB74D"/>
    <path d="M97.6 23.6 L99 20.6 L100.4 23.2 Z" fill="#FFB74D"/>
    <path d="M104.4 23.6 L103 20.6 L101.6 23.2 Z" fill="#FFB74D"/>
    <circle cx="99.6" cy="25.6" r=".8" fill="#4E2600"/>
    <circle cx="102.4" cy="25.6" r=".8" fill="#4E2600"/>
    <!-- camion -->
    <rect x="10" y="30" width="52" height="22" rx="4" fill="url(#tcBombCamion)"/>
    <rect x="62" y="35" width="20" height="17" rx="3" fill="url(#tcBombCamion)"/>
    <rect x="66" y="38" width="11" height="8" rx="2" fill="#B3E5FC"/>
    <path d="M10 45 L82 45" stroke="#FFD54F" stroke-width="2.6"/>
    <rect x="14" y="34" width="10" height="7" rx="2" fill="#FFE082"/>
    <rect x="30" y="34" width="10" height="7" rx="2" fill="#FFE082"/>
    <!-- escalera -->
    <rect x="16" y="25" width="42" height="4" rx="2" fill="#ECEFF1"/>
    <line x1="24" y1="25" x2="24" y2="29" stroke="#90A4AE" stroke-width="1.6"/>
    <line x1="34" y1="25" x2="34" y2="29" stroke="#90A4AE" stroke-width="1.6"/>
    <line x1="44" y1="25" x2="44" y2="29" stroke="#90A4AE" stroke-width="1.6"/>
    <!-- luz que parpadea -->
    <rect x="63" y="30" width="7" height="5" rx="2" fill="#42A5F5">
      <animate attributeName="opacity" values="1;0.2;1" dur="0.8s" repeatCount="indefinite"/>
    </rect>
    <!-- ruedas -->
    <circle cx="24" cy="55" r="7" fill="#263238"/><circle cx="24" cy="55" r="2.8" fill="#90A4AE"/>
    <circle cx="52" cy="55" r="7" fill="#263238"/><circle cx="52" cy="55" r="2.8" fill="#90A4AE"/>
    <circle cx="72" cy="55" r="6" fill="#263238"/><circle cx="72" cy="55" r="2.4" fill="#90A4AE"/>
    <!-- chorrito de agua hacia el arbol -->
    <path d="M82 40 Q92 30 98 38" stroke="#4FC3F7" stroke-width="2.6" fill="none" stroke-linecap="round">
      <animate attributeName="opacity" values="0.9;0.35;0.9" dur="1.1s" repeatCount="indefinite"/>
    </path>
    <circle cx="96" cy="41" r="1.6" fill="#81D4FA">
      <animate attributeName="cy" values="41;46;41" dur="1.3s" repeatCount="indefinite"/>
    </circle>
  </svg>`;
}

/* ---------- CELEBRACIÓN DEL TALLER: fiesta en el parque ---------- */
if (typeof CELEBRATIONS !== "undefined") {
  CELEBRATIONS.bomberos = {
    bg: "linear-gradient(180deg, #90caf9 0%, #b3e5fc 42%, #ffcdd2 72%, #ef9a9a 100%)",
    extra: "<svg viewBox='0 0 1000 700' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'><circle cx='140' cy='110' r='58' fill='#fff59d' opacity='0.9'/><ellipse cx='420' cy='90' rx='80' ry='22' fill='#ffffff' opacity='0.5'/><ellipse cx='760' cy='130' rx='70' ry='20' fill='#ffffff' opacity='0.45'/><path d='M120 700 L120 420 L500 300 L880 420 L880 700 Z' fill='#ef9a9a' opacity='0.55'/><path d='M100 430 L500 290 L900 430' fill='none' stroke='#c62828' stroke-width='16' stroke-linecap='round' opacity='0.6'/><rect x='300' y='470' width='170' height='230' rx='10' fill='#eceff1' opacity='0.8'/><rect x='530' y='470' width='170' height='230' rx='10' fill='#eceff1' opacity='0.8'/><path d='M310 510 h150 M310 550 h150 M310 590 h150 M540 510 h150 M540 550 h150 M540 590 h150' stroke='#b0bec5' stroke-width='8' opacity='0.8'/><circle cx='500' cy='380' r='30' fill='#ffffff' opacity='0.85'/><path d='M500 362 q14 12 0 30 q-14 -18 0 -30' fill='#ffd54f' opacity='0.95'/><path d='M60 640 Q200 540 340 640' fill='none' stroke='#4fc3f7' stroke-width='10' stroke-linecap='round' opacity='0.6'/><path d='M660 640 Q800 540 940 640' fill='none' stroke='#4fc3f7' stroke-width='10' stroke-linecap='round' opacity='0.6'/><circle cx='200' cy='560' r='7' fill='#81d4fa' opacity='0.8'/><circle cx='800' cy='560' r='7' fill='#81d4fa' opacity='0.8'/><circle cx='260' cy='600' r='5' fill='#81d4fa' opacity='0.7'/><circle cx='740' cy='600' r='5' fill='#81d4fa' opacity='0.7'/><path d='M80 200 L120 200 L100 232 Z' fill='#ef5350' opacity='0.75'/><path d='M160 170 L200 170 L180 202 Z' fill='#ffd54f' opacity='0.75'/><path d='M820 190 L860 190 L840 222 Z' fill='#ef5350' opacity='0.75'/><path d='M890 230 L930 230 L910 262 Z' fill='#42a5f5' opacity='0.75'/><line x1='60' y1='185' x2='950' y2='215' stroke='#ffffff' stroke-width='5' opacity='0.5'/><circle cx='320' cy='250' r='6' fill='#42a5f5' opacity='0.7'/><circle cx='680' cy='240' r='6' fill='#ffd54f' opacity='0.7'/><circle cx='940' cy='620' r='10' fill='#ffffff' opacity='0.35'/><circle cx='70' cy='620' r='9' fill='#ffffff' opacity='0.35'/></svg>",
    move: "rock",
    say: {
      es: "¡{name}, tu camión brilla y el parque entero hace nino-nino de alegría!",
      ca: "{name}, el teu camió brilla i el parc sencer fa nino-nino d'alegria!",
      en: "{name}, your truck is shining and the whole station goes nee-naw with joy!",
      cs: "{name}, tvoje auto září a celá stanice radostí houká hú-há!",
      fr: "{name}, ton camion brille et toute la caserne fait pin-pon de joie !"
    },
    jingle: { type: "melody", instr: "brass", notes: [64, 69, 64, 69, 72], nd: 0.24, gap: 0.18, vol: 0.13 }
  };
}

/* ---------- MODO CUIDAR: el camión y el equipo ---------- */
if (typeof CARE !== "undefined") {
  CARE.bomberos = {
    before: "🚒", after: "🚒", deco: "🪜 🧯 🐕",
    title: { es: "El camión reluciente", ca: "El camió lluent", en: "The shiny fire truck", cs: "Nablýskané hasičské auto", fr: "Le camion tout brillant" },
    intro: { es: "La guardia de hoy ha terminado y el camión vuelve cansado. Un equipo bien cuidado ayuda mejor mañana, {name}.", ca: "La guàrdia d'avui ha acabat i el camió torna cansat. Un equip ben cuidat ajuda millor demà, {name}.", en: "Today's shift is over and the truck comes back tired. Well-cared-for gear helps better tomorrow, {name}.", cs: "Dnešní služba skončila a auto se vrací unavené. Opečovávaná výbava zítra pomáhá líp, {name}.", fr: "La garde d'aujourd'hui est finie et le camion rentre fatigué. Un équipement bien soigné aide mieux demain, {name}." },
    steps: [
      { e: "🌀", t: { es: "Enrolla la manguera", ca: "Enrotlla la mànega", en: "Roll up the hose", cs: "Smotej hadici", fr: "Enroule le tuyau" } },
      { e: "⛑️", t: { es: "Revisa el casco", ca: "Revisa el casc", en: "Check the helmet", cs: "Zkontroluj helmu", fr: "Vérifie le casque" } },
      { e: "💧", t: { es: "Llena el depósito de agua", ca: "Omple el dipòsit d'aigua", en: "Fill the water tank", cs: "Doplň nádrž na vodu", fr: "Remplis le réservoir d'eau" } },
      { e: "🥾", t: { es: "Deja las botas junto al camión", ca: "Deixa les botes al costat del camió", en: "Leave the boots by the truck", cs: "Nachystej boty k autu", fr: "Pose les bottes près du camion" } }
    ],
    done: { es: "El camión queda reluciente y el equipo preparado. Todo en su sitio, todo tranquilo: mañana estará listo para ayudar.", ca: "El camió queda lluent i l'equip preparat. Tot al seu lloc, tot tranquil: demà estarà a punt per ajudar.", en: "The truck is left shiny and the gear all set. Everything in its place, everything calm: tomorrow it will be ready to help.", cs: "Auto se leskne a výbava je nachystaná. Všechno na svém místě, všude klid: zítra bude připravené pomáhat.", fr: "Le camion reste tout brillant et l'équipement est prêt. Tout à sa place, tout est calme : demain, il sera prêt à aider." }
  };
}

/* ---------- CARAS de los 5 famosos (siempre caras, nunca iconos) ---------- */
if (typeof THEMES !== "undefined" && typeof makeCara !== "undefined" && THEMES.bomberos && THEMES.bomberos.content && THEMES.bomberos.content.famous) {
  (function () {
    const F1 = "#f6d5b8", F4 = "#8d5a33";
    const cuello = c => `<rect x="33" y="83" width="34" height="10" rx="5" fill="${c}"/>`;
    /* casco de bombero: ala ancha y copa, en el color que toque */
    const casco = (ala, copa, extra) => `<ellipse cx="50" cy="27" rx="28" ry="7" fill="${ala}"/><path d="M33 27 Q35 10 50 10 Q65 10 67 27 Z" fill="${copa}"/>${extra || ""}`;

    const CFG = {
      /* Molly Williams: pañuelo de época y copos de nieve de su rescate famoso */
      "Molly Williams": [F4, "#161616", "wrap", `<circle cx="24" cy="20" r="2.2" fill="#fff"/><circle cx="76" cy="26" r="1.8" fill="#fff"/><circle cx="68" cy="12" r="1.6" fill="#fff"/>` + cuello("#c62828")],
      /* James Braidwood: patillas escocesas y casaca oscura con botones */
      "James Braidwood": [F1, "#3e2a20", "short", `<path d="M30 44 Q28 56 33 64 Q37 60 36 46 Z" fill="#3e2a20"/><path d="M70 44 Q72 56 67 64 Q63 60 64 46 Z" fill="#3e2a20"/>` + cuello("#263238") + `<circle cx="44" cy="88" r="1.6" fill="#ffd54f"/><circle cx="56" cy="88" r="1.6" fill="#ffd54f"/>`],
      /* George William Manby: cuello alto blanco de la regencia y pajarita antigua */
      "George William Manby": [F1, "#e8e2d6", "short", cuello("#37474f") + `<path d="M40 80 L46 88 L42 93 Z" fill="#eceff1"/><path d="M60 80 L54 88 L58 93 Z" fill="#eceff1"/><path d="M44 84 L50 90 L56 84 Z" fill="#fff"/>`],
      /* Red Adair: su casco rojo de apagafuegos */
      "Red Adair": [F1, "#b53a2e", "short", casco("#c62828", "#e53935", `<circle cx="50" cy="19" r="3" fill="#ffd54f"/>`) + cuello("#e65100")],
      /* Sabrina Cohen-Hatton: casco blanco de jefa moderno */
      "Sabrina Cohen-Hatton": [F1, "#161616", "bob", casco("#e0e0e0", "#fafafa", `<rect x="46" y="14" width="8" height="5" rx="2" fill="#fbc02d"/>`) + cuello("#37474f")]
    };

    THEMES.bomberos.content.famous.forEach(f => {
      const c = CFG[f.name.es];
      if (c) f.face = makeCara(c[0], c[1], c[2], c[3], c[4]).svg;
    });
  })();
}
