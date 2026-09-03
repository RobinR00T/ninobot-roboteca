"use strict";
/* ============================================================
   Extras de POLICÍA: tarjeta de portada animada, celebración
   del taller, rutina de cuidado del perro policía y las caras
   dibujadas de los 5 famosos. Todo con guardas por si el
   fichero se carga suelto.
   ============================================================ */

/* ---------- TARJETA DE PORTADA: patrulla, semáforo y cebra ---------- */
if (typeof THEME_CARDS !== "undefined") {
  THEME_CARDS.policia = `<svg viewBox="0 0 120 70" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
    <!-- brillos -->
    <circle cx="14" cy="10" r="1.6" fill="#FFF59D"/>
    <circle cx="86" cy="7" r="1.4" fill="#FFFFFF">
      <animate attributeName="opacity" values="1;0.25;1" dur="1.9s" repeatCount="indefinite"/>
    </circle>
    <!-- semaforo -->
    <rect x="97" y="14" width="14" height="30" rx="5" fill="#37474F"/>
    <circle cx="104" cy="21" r="3.6" fill="#EF5350"/>
    <circle cx="104" cy="29" r="3.6" fill="#FFCA28" opacity="0.35"/>
    <circle cx="104" cy="37" r="3.6" fill="#66BB6A">
      <animate attributeName="opacity" values="1;0.25;1" dur="1.8s" repeatCount="indefinite"/>
    </circle>
    <rect x="102" y="44" width="4" height="16" fill="#546E7A"/>
    <!-- carretera con paso de cebra -->
    <rect x="0" y="58" width="120" height="12" fill="#546E7A"/>
    <rect x="8" y="60" width="9" height="8" rx="1.5" fill="#ECEFF1"/>
    <rect x="26" y="60" width="9" height="8" rx="1.5" fill="#ECEFF1"/>
    <rect x="44" y="60" width="9" height="8" rx="1.5" fill="#ECEFF1"/>
    <rect x="62" y="60" width="9" height="8" rx="1.5" fill="#ECEFF1"/>
    <rect x="80" y="60" width="9" height="8" rx="1.5" fill="#ECEFF1"/>
    <rect x="98" y="60" width="9" height="8" rx="1.5" fill="#ECEFF1"/>
    <!-- coche patrulla -->
    <path d="M28 40 L34 27 L60 27 L67 40 Z" fill="#42A5F5"/>
    <path d="M37 38 L40 30 L55 30 L59 38 Z" fill="#B3E5FC"/>
    <rect x="15" y="38" width="62" height="17" rx="6" fill="#42A5F5"/>
    <rect x="15" y="44" width="62" height="5" fill="#FFFFFF" opacity="0.9"/>
    <rect x="20" y="44" width="6" height="5" fill="#FFD54F"/>
    <rect x="34" y="44" width="6" height="5" fill="#FFD54F"/>
    <rect x="48" y="44" width="6" height="5" fill="#FFD54F"/>
    <rect x="62" y="44" width="6" height="5" fill="#FFD54F"/>
    <circle cx="73" cy="42" r="1.8" fill="#FFF9C4"/>
    <!-- luces del techo -->
    <rect x="39" y="21" width="16" height="6" rx="2" fill="#546E7A"/>
    <rect x="40" y="22" width="7" height="4" rx="1.5" fill="#64B5F6">
      <animate attributeName="opacity" values="1;0.2;1" dur="0.8s" repeatCount="indefinite"/>
    </rect>
    <rect x="48" y="22" width="6" height="4" rx="1.5" fill="#EF5350">
      <animate attributeName="opacity" values="0.2;1;0.2" dur="0.8s" repeatCount="indefinite"/>
    </rect>
    <!-- ruedas -->
    <circle cx="28" cy="56" r="6" fill="#263238"/>
    <circle cx="28" cy="56" r="2.4" fill="#90A4AE"/>
    <circle cx="63" cy="56" r="6" fill="#263238"/>
    <circle cx="63" cy="56" r="2.4" fill="#90A4AE"/>
  </svg>`;
}

/* ---------- CELEBRACIÓN DEL TALLER: la ciudad aplaude ---------- */
if (typeof CELEBRATIONS !== "undefined") {
  CELEBRATIONS.policia = {
    bg: "linear-gradient(180deg, #aee3f7 0%, #7ec2ea 45%, #9fd3a8 100%)",
    extra: "<svg viewBox='0 0 1000 700' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'><circle cx='840' cy='110' r='62' fill='#fff3b0' opacity='0.9'/><ellipse cx='180' cy='100' rx='85' ry='24' fill='#ffffff' opacity='0.55'/><ellipse cx='460' cy='150' rx='65' ry='19' fill='#ffffff' opacity='0.45'/><ellipse cx='680' cy='80' rx='58' ry='17' fill='#ffffff' opacity='0.4'/><rect x='60' y='330' width='120' height='210' rx='12' fill='#7fa7c9' opacity='0.75'/><rect x='210' y='280' width='100' height='260' rx='12' fill='#94b8d6' opacity='0.7'/><rect x='340' y='360' width='130' height='180' rx='12' fill='#7fa7c9' opacity='0.7'/><rect x='560' y='300' width='110' height='240' rx='12' fill='#94b8d6' opacity='0.7'/><rect x='700' y='350' width='140' height='190' rx='12' fill='#7fa7c9' opacity='0.72'/><rect x='870' y='310' width='90' height='230' rx='12' fill='#94b8d6' opacity='0.68'/><g fill='#fff6c9' opacity='0.85'><rect x='80' y='355' width='22' height='22' rx='4'/><rect x='125' y='355' width='22' height='22' rx='4'/><rect x='80' y='400' width='22' height='22' rx='4'/><rect x='235' y='310' width='20' height='20' rx='4'/><rect x='270' y='310' width='20' height='20' rx='4'/><rect x='235' y='355' width='20' height='20' rx='4'/><rect x='370' y='390' width='22' height='22' rx='4'/><rect x='415' y='390' width='22' height='22' rx='4'/><rect x='585' y='330' width='20' height='20' rx='4'/><rect x='620' y='330' width='20' height='20' rx='4'/><rect x='585' y='375' width='20' height='20' rx='4'/><rect x='730' y='380' width='22' height='22' rx='4'/><rect x='775' y='380' width='22' height='22' rx='4'/><rect x='890' y='340' width='20' height='20' rx='4'/><rect x='925' y='340' width='20' height='20' rx='4'/></g><rect x='0' y='560' width='1000' height='140' fill='#5c7a94' opacity='0.9'/><g fill='#ffffff' opacity='0.9'><rect x='90' y='590' width='60' height='80' rx='8'/><rect x='230' y='590' width='60' height='80' rx='8'/><rect x='370' y='590' width='60' height='80' rx='8'/><rect x='510' y='590' width='60' height='80' rx='8'/><rect x='650' y='590' width='60' height='80' rx='8'/><rect x='790' y='590' width='60' height='80' rx='8'/></g><circle cx='150' cy='230' r='9' fill='#42a5f5' opacity='0.7'/><circle cx='520' cy='210' r='8' fill='#ef5350' opacity='0.6'/><circle cx='760' cy='250' r='9' fill='#ffd54f' opacity='0.7'/><circle cx='330' cy='190' r='7' fill='#66bb6a' opacity='0.6'/><circle cx='930' cy='210' r='7' fill='#42a5f5' opacity='0.6'/><path d='M600 170 L605 182 L617 183 L608 191 L611 203 L600 196 L589 203 L592 191 L583 183 L595 182 Z' fill='#fff1b8' opacity='0.8'/><path d='M260 120 L264 130 L274 131 L266 138 L269 148 L260 142 L251 148 L254 138 L246 131 L256 130 Z' fill='#fff1b8' opacity='0.7'/></svg>",
    move: "rock",
    say: {
      es: "¡Nino-nino! Tu coche patrulla ya está listo para ayudar a toda la ciudad, {name}.",
      ca: "Nino-nino! El teu cotxe patrulla ja està a punt per ajudar tota la ciutat, {name}.",
      en: "Nee-naw! Your patrol car is ready to help the whole town, {name}!",
      cs: "Nino-nino! Tvoje hlídkové auto je připravené pomáhat celému městu, {name}!",
      fr: "Pin-pon ! Ta voiture de patrouille est prête à aider toute la ville, {name} !"
    },
    jingle: { type: "melody", instr: "brass", notes: [69, 64, 69, 64, 72], nd: 0.26, gap: 0.2, vol: 0.12 }
  };
}

/* ---------- MODO CUIDAR: el perro policía Rocky ---------- */
if (typeof CARE !== "undefined") {
  CARE.policia = {
    before: "🐕", after: "🐕‍🦺", deco: "🦴 🎾 ⭐",
    title: { es: "El perro policía", ca: "El gos policia", en: "The police dog", cs: "Policejní pes", fr: "Le chien policier" },
    intro: { es: "Rocky ha terminado su ronda por el parque y espera tranquilo en la comisaría. Ahora te toca cuidarlo a ti, {name}.", ca: "En Rocky ha acabat la seva ronda pel parc i espera tranquil a la comissaria. Ara et toca cuidar-lo a tu, {name}.", en: "Rocky has finished his round in the park and is waiting calmly at the station. Now it is your turn to look after him, {name}.", cs: "Rocky dokončil obchůzku parkem a klidně čeká na stanici. Teď je řada na tobě, aby ses o něj postaral, {name}.", fr: "Rocky a fini sa ronde dans le parc et attend tranquillement au commissariat. Maintenant, c'est à toi de prendre soin de lui, {name}." },
    steps: [
      { e: "🪮", t: { es: "Cepíllale el pelo despacito", ca: "Raspalla-li el pèl a poc a poc", en: "Brush his fur slowly", cs: "Pomalu mu vykartáčuj srst", fr: "Brosse son poil tout doucement" } },
      { e: "💧", t: { es: "Ponle agua fresquita", ca: "Posa-li aigua fresqueta", en: "Give him fresh water", cs: "Nalij mu čerstvou vodu", fr: "Donne-lui de l'eau fraîche" } },
      { e: "🦺", t: { es: "Ponle el chaleco de trabajo con cuidado", ca: "Posa-li l'armilla de feina amb compte", en: "Put his work vest on gently", cs: "Opatrně mu obleč pracovní vestu", fr: "Mets-lui son gilet de travail avec soin" } },
      { e: "🧺", t: { es: "Prepárale su cesta para descansar", ca: "Prepara-li el cistell per descansar", en: "Get his basket ready to rest", cs: "Připrav mu pelíšek na odpočinek", fr: "Prépare son panier pour se reposer" } }
    ],
    done: { es: "Rocky se acurruca en su cesta, contento y tranquilo. Un perro bien cuidado ayuda mejor mañana.", ca: "En Rocky s'arrauleix al seu cistell, content i tranquil. Un gos ben cuidat ajuda millor demà.", en: "Rocky curls up in his basket, happy and calm. A well-cared-for dog helps even better tomorrow.", cs: "Rocky se stočí do pelíšku, spokojený a klidný. Pes, o kterého je dobře postaráno, zítra pomáhá ještě líp.", fr: "Rocky se blottit dans son panier, content et tranquille. Un chien bien soigné aide encore mieux demain." }
  };
}

/* ---------- CARAS de los famosos (siempre caras, nunca iconos) ---------- */
(function () {
  if (typeof makeCara === "undefined") return;
  const F1 = "#f6d5b8";
  const cuello = c => `<rect x="33" y="83" width="34" height="10" rx="5" fill="${c}"/>`;
  /* patillas a lo 1800 para Vidocq */
  const patillas = c => `<path d="M28 48 Q27 62 33 69 L37 64 Q32 58 33 49 Z" fill="${c}"/><path d="M72 48 Q73 62 67 69 L63 64 Q68 58 67 49 Z" fill="${c}"/>`;
  /* placa estrella pequeña en el pecho */
  const placa = `<path d="M40 84 L41.4 87.4 L45 87.8 L42.4 90 L43.2 93.6 L40 91.6 L36.8 93.6 L37.6 90 L35 87.8 L38.6 87.4 Z" fill="#ffd54f"/>`;
  /* sombrero eduardiano de ala ancha para Wells */
  const sombreroEd = `<ellipse cx="50" cy="26" rx="30" ry="7" fill="#455a64"/><path d="M28 26 Q30 8 50 8 Q70 8 72 26 Z" fill="#546e7a"/><path d="M30 21 Q50 15 70 21" stroke="#90a4ae" stroke-width="3" fill="none"/>`;

  const CFG = {
    "Eugène-François Vidocq": [F1, "#3e2a20", "wild", patillas("#3e2a20") + cuello("#263238") + `<path d="M44 82 Q50 88 56 82 L54 92 Q50 95 46 92 Z" fill="#eceff1"/>`],
    "Kate Warne": [F1, "#5a3a22", "bun", cuello("#4e342e") + `<path d="M36 83 Q50 91 64 83 L64 89 Q50 97 36 89 Z" fill="#eceff1"/><circle cx="50" cy="87" r="2.6" fill="#ab47bc"/>`],
    "Marie Owens": [F1, "#3e2a20", "bun", cuello("#37474f") + placa],
    "August Vollmer": [F1, "#c9c2b8", "short", cuello("#37474f") + `<path d="M44 83 L50 90 L56 83 Z" fill="#eceff1"/><path d="M50 84 L47.6 88 L50 95 L52.4 88 Z" fill="#7b1fa2"/>`],
    "Alice Stebbins Wells": [F1, "#4a3526", "bun", sombreroEd + cuello("#37474f") + placa]
  };

  const th = THEMES.policia;
  if (!th || !th.content || !th.content.famous) return;
  th.content.famous.forEach(f => {
    const c = CFG[f.name.es];
    if (c) f.face = makeCara(c[0], c[1], c[2], c[3], c[4]).svg;
  });
})();
