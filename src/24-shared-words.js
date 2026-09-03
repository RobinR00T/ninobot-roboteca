"use strict";
/* Palabras comunes del traductor, compartidas por las 18 aventuras
   (deduplicadas: cada tema las referencia en vez de copiarlas). */
const W_COMMON = {
  adios: { k: "adios", emoji: "🖐️", name: { es: "adiós", ca: "adéu", en: "goodbye", cs: "sbohem", fr: "au revoir" } },
  agua: { k: "agua", emoji: "💧", name: { es: "agua", ca: "aigua", en: "water", cs: "voda", fr: "eau" } },
  amigo: { k: "amigo", emoji: "🤝", name: { es: "amigo", ca: "amic", en: "friend", cs: "kamarád", fr: "ami" } },
  amor: { k: "amor", emoji: "❤️", name: { es: "amor", ca: "amor", en: "love", cs: "láska", fr: "amour" } },
  bonito: { k: "bonito", emoji: "🌸", name: { es: "bonito", ca: "bonic", en: "pretty", cs: "krásný", fr: "joli" } },
  casa: { k: "casa", emoji: "🏠", name: { es: "casa", ca: "casa", en: "house", cs: "dům", fr: "maison" } },
  comida: { k: "comida", emoji: "🍎", name: { es: "comida", ca: "menjar", en: "food", cs: "jídlo", fr: "nourriture" } },
  dormir: { k: "dormir", emoji: "😴", name: { es: "dormir", ca: "dormir", en: "sleep", cs: "spát", fr: "dormir" } },
  gato: { k: "gato", emoji: "🐱", name: { es: "gato", ca: "gat", en: "cat", cs: "kočka", fr: "chat" } },
  gracias: { k: "gracias", emoji: "🙏", name: { es: "gracias", ca: "gràcies", en: "thank you", cs: "děkuji", fr: "merci" } },
  grande: { k: "grande", emoji: "🐘", name: { es: "grande", ca: "gran", en: "big", cs: "velký", fr: "grand" } },
  hola: { k: "hola", emoji: "👋", name: { es: "hola", ca: "hola", en: "hello", cs: "ahoj", fr: "bonjour" } },
  mama: { k: "mama", emoji: "👩", name: { es: "mamá", ca: "mama", en: "mom", cs: "máma", fr: "maman" } },
  no: { k: "no", emoji: "❌", name: { es: "no", ca: "no", en: "no", cs: "ne", fr: "non" } },
  papa: { k: "papa", emoji: "👨", name: { es: "papá", ca: "papa", en: "dad", cs: "táta", fr: "papa" } },
  pequeno: { k: "pequeno", emoji: "🐜", name: { es: "pequeño", ca: "petit", en: "small", cs: "malý", fr: "petit" } },
  perro: { k: "perro", emoji: "🐶", name: { es: "perro", ca: "gos", en: "dog", cs: "pes", fr: "chien" } },
  robot: { k: "robot", emoji: "🤖", name: { es: "robot", ca: "robot", en: "robot", cs: "robot", fr: "robot" } },
  si: { k: "si", emoji: "✅", name: { es: "sí", ca: "sí", en: "yes", cs: "ano", fr: "oui" } },
};
