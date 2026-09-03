"use strict";
/* ============================================================
   MODO CUIDAR (vida práctica Montessori): cada aventura tiene
   una rutina de cuidado de 4 pasos EN ORDEN. Solo responde el
   paso que toca (control del error), la recompensa es ver la
   escena transformarse, y el último paso siempre es recoger.
   Los temas se registran aquí como CARE.<tema> (ficheros 39-care-N).
   ============================================================ */

const CARE = {};

/* plantilla de referencia: el invernadero de la estación espacial */
CARE.espacio = {
  before: "🥀", after: "🌻", deco: "🛰️ 🌍 ✨",
  title: { es: "El invernadero espacial", ca: "L'hivernacle espacial", en: "The space greenhouse", cs: "Vesmírný skleník", fr: "La serre spatiale" },
  intro: { es: "La plantita de la estación está mustia. Las plantas del espacio también necesitan cuidados, {name}.", ca: "La planteta de l'estació està pansida. Les plantes de l'espai també necessiten cures, {name}.", en: "The station's little plant is drooping. Space plants need care too, {name}.", cs: "Rostlinka na stanici je zvadlá. I vesmírné rostliny potřebují péči, {name}.", fr: "La petite plante de la station est toute fanée. Les plantes de l'espace ont aussi besoin de soins, {name}." },
  steps: [
    { e: "💧", t: { es: "Riega la planta", ca: "Rega la planta", en: "Water the plant", cs: "Zalij rostlinu", fr: "Arrose la plante" } },
    { e: "☀️", t: { es: "Acércala a la luz", ca: "Acosta-la a la llum", en: "Move it to the light", cs: "Dej ji ke světlu", fr: "Mets-la à la lumière" } },
    { e: "🫧", t: { es: "Revisa el aire", ca: "Revisa l'aire", en: "Check the air", cs: "Zkontroluj vzduch", fr: "Vérifie l'air" } },
    { e: "🪣", t: { es: "Guarda la regadera", ca: "Desa la regadora", en: "Put the watering can away", cs: "Ukliď konvičku", fr: "Range l'arrosoir" } }
  ],
  done: { es: "La planta está contenta y erguida. Mañana volverá a necesitarte.", ca: "La planta està contenta i dreta. Demà tornarà a necessitar-te.", en: "The plant is happy and standing tall. Tomorrow it will need you again.", cs: "Rostlina je spokojená a vzpřímená. Zítra tě bude potřebovat znovu.", fr: "La plante est contente et bien droite. Demain elle aura encore besoin de toi." }
};
