"use strict";
/* ============================================================
   Textos de interfaz en 5 idiomas.
   Reglas: solo el español lleva ¡ y ¿. El francés lleva espacio
   antes de ! ? : ;. Diacríticos correctos en todos los idiomas.
   ============================================================ */

const T = {
  friend: { es: "peque", ca: "petit", en: "buddy", cs: "kamaráde", fr: "petit ami" },

  /* --- configuración --- */
  setupTitle: { es: "¡Configuración de Ninobot!", ca: "Configuració del Ninobot!", en: "Ninobot Setup!", cs: "Nastavení Ninobota!", fr: "Réglages de Ninobot !" },
  yourName: { es: "¿Cómo te llamas?", ca: "Com et dius?", en: "What is your name?", cs: "Jak se jmenuješ?", fr: "Comment tu t'appelles ?" },
  namePh: { es: "Escribe tu nombre...", ca: "Escriu el teu nom...", en: "Type your name...", cs: "Napiš své jméno...", fr: "Écris ton prénom..." },
  youAre: { es: "Eres...", ca: "Ets...", en: "You are...", cs: "Jsi...", fr: "Tu es..." },
  girl: { es: "Niña", ca: "Nena", en: "Girl", cs: "Holka", fr: "Fille" },
  boy: { es: "Niño", ca: "Nen", en: "Boy", cs: "Kluk", fr: "Garçon" },
  kid: { es: "Peque", ca: "Menut", en: "Kid", cs: "Dítě", fr: "Enfant" },
  language: { es: "Idioma", ca: "Idioma", en: "Language", cs: "Jazyk", fr: "Langue" },
  skinLabel: { es: "Color de piel", ca: "Color de pell", en: "Skin colour", cs: "Barva pleti", fr: "Couleur de peau" },
  hairLabel: { es: "Color de pelo", ca: "Color de cabells", en: "Hair colour", cs: "Barva vlasů", fr: "Couleur de cheveux" },
  age: { es: "Edad", ca: "Edat", en: "Age", cs: "Věk", fr: "Âge" },
  years: { es: "años", ca: "anys", en: "years old", cs: "let", fr: "ans" },
  playTime: { es: "Tiempo de juego (minutos)", ca: "Temps de joc (minuts)", en: "Play time (minutes)", cs: "Čas na hraní (minuty)", fr: "Temps de jeu (minutes)" },
  micLabel: { es: "Micrófono", ca: "Micròfon", en: "Microphone", cs: "Mikrofon", fr: "Micro" },
  on: { es: "Activado", ca: "Activat", en: "On", cs: "Zapnuto", fr: "Activé" },
  off: { es: "Desactivado", ca: "Desactivat", en: "Off", cs: "Vypnuto", fr: "Désactivé" },
  soundLabel: { es: "Voz de Ninobot", ca: "Veu del Ninobot", en: "Ninobot voice", cs: "Hlas Ninobota", fr: "Voix de Ninobot" },
  startBtn: { es: "¡Empezar!", ca: "Comencem!", en: "Let's go!", cs: "Začínáme!", fr: "C'est parti !" },
  privacyNote: { es: "Todo se queda en este dispositivo. Sin internet, sin cuentas.", ca: "Tot es queda en aquest dispositiu. Sense internet, sense comptes.", en: "Everything stays on this device. No internet, no accounts.", cs: "Všechno zůstává v tomto zařízení. Bez internetu, bez účtů.", fr: "Tout reste sur cet appareil. Sans internet, sans comptes." },

  /* --- roboteca (hub) --- */
  hubTitle: { es: "La Roboteca", ca: "La Roboteca", en: "The Robot Club", cs: "Robotéka", fr: "La Robothèque" },
  hubHello: { es: "¡Hola {name}! Soy Ninobot. ¡Te doy la bienvenida a la Roboteca! Elige un robot amigo y una aventura.", ca: "Hola {name}! Soc el Ninobot. Et donem la benvinguda a la Roboteca! Tria un robot amic i una aventura.", en: "Hi {name}! I am Ninobot. Welcome to the Robot Club! Pick a robot friend and an adventure.", cs: "Ahoj {name}! Já jsem Ninobot. Vítej v Robotéce! Vyber si robota a dobrodružství.", fr: "Salut {name} ! Je suis Ninobot. Bienvenue à la Robothèque ! Choisis un robot ami et une aventure." },
  chooseRobot: { es: "Elige a tu robot acompañante", ca: "Tria el teu robot acompanyant", en: "Choose your robot friend", cs: "Vyber si svého robota", fr: "Choisis ton robot ami" },
  chooseAdventure: { es: "¿A qué aventura vamos?", ca: "A quina aventura anem?", en: "Which adventure shall we go on?", cs: "Kam se vydáme?", fr: "On part pour quelle aventure ?" },
  soon: { es: "¡De viaje! Vuelve pronto", ca: "De viatge! Torna aviat", en: "On a trip! Back soon", cs: "Na cestách! Brzy se vrátí", fr: "En voyage ! De retour bientôt" },
  collection: { es: "Mi colección", ca: "La meva col·lecció", en: "My collection", cs: "Moje sbírka", fr: "Ma collection" },
  medals: { es: "Medallas", ca: "Medalles", en: "Medals", cs: "Medaile", fr: "Médailles" },
  stars: { es: "Estrellas", ca: "Estrelles", en: "Stars", cs: "Hvězdičky", fr: "Étoiles" },
  settings: { es: "Ajustes", ca: "Ajustos", en: "Settings", cs: "Nastavení", fr: "Réglages" },
  about: { es: "Acerca de", ca: "Sobre l'app", en: "About", cs: "O aplikaci", fr: "À propos" },
  callRobot: { es: "Dilo con tu voz", ca: "Digues-ho amb la teva veu", en: "Say it with your voice", cs: "Řekni to hlasem", fr: "Dis-le avec ta voix" },
  sayRobotName: { es: "Di el nombre de un robot o de una aventura", ca: "Digues el nom d'un robot o d'una aventura", en: "Say the name of a robot or an adventure", cs: "Řekni jméno robota nebo dobrodružství", fr: "Dis le nom d'un robot ou d'une aventure" },
  notHeard: { es: "No te he entendido bien. ¡Probamos otra vez!", ca: "No t'he entès bé. Ho tornem a provar!", en: "I did not quite catch that. Let's try again!", cs: "Nerozuměl jsem ti dobře. Zkusíme to znovu!", fr: "Je n'ai pas bien compris. On réessaie !" },

  /* --- modos --- */
  mChat: { es: "Charlar", ca: "Xerrar", en: "Chat", cs: "Povídání", fr: "Discuter" },
  mStory: { es: "Historias", ca: "Contes", en: "Stories", cs: "Příběhy", fr: "Histoires" },
  mQuiz: { es: "Quiz", ca: "Quiz", en: "Quiz", cs: "Kvíz", fr: "Quiz" },
  mTranslator: { es: "Traductor", ca: "Traductor", en: "Translator", cs: "Překladač", fr: "Traducteur" },
  mExplore: { es: "Explorar", ca: "Explorar", en: "Explore", cs: "Objevuj", fr: "Explorer" },
  mKaraoke: { es: "Karaoke", ca: "Karaoke", en: "Karaoke", cs: "Karaoke", fr: "Karaoké" },
  mAbc: { es: "Alfabeto", ca: "Alfabet", en: "Alphabet", cs: "Abeceda", fr: "Alphabet" },
  mRead: { es: "Leer", ca: "Llegir", en: "Read", cs: "Čtení", fr: "Lire" },
  readHint: { es: "Lee palabras y encuentra su dibujo. ¡Cada vez lo harás mejor!", ca: "Llegeix paraules i troba el seu dibuix. Cada cop ho faràs millor!", en: "Read words and find their picture. You will get better every time!", cs: "Čti slova a hledej jejich obrázek. Půjde ti to čím dál líp!", fr: "Lis des mots et trouve leur dessin. Tu vas t'améliorer à chaque fois !" },
  readTap: { es: "Lee la palabra y toca su dibujo", ca: "Llegeix la paraula i toca el seu dibuix", en: "Read the word and tap its picture", cs: "Přečti slovo a ťukni na jeho obrázek", fr: "Lis le mot et touche son dessin" },
  readFind: { es: "¿Dónde pone lo que ves en el dibujo?", ca: "On posa el que veus al dibuix?", en: "Which word says what you see?", cs: "Kde je napsáno to, co vidíš na obrázku?", fr: "Où est écrit ce que tu vois sur le dessin ?" },
  readWas: { es: "La palabra era", ca: "La paraula era", en: "The word was", cs: "To slovo bylo", fr: "Le mot était" },
  mMath: { es: "Mates", ca: "Mates", en: "Math", cs: "Počítání", fr: "Maths" },
  mBuild: { es: "Taller", ca: "Taller", en: "Workshop", cs: "Dílna", fr: "Atelier" },
  mFamous: { es: "Famosos", ca: "Famosos", en: "Heroes", cs: "Slavní", fr: "Célèbres" },
  backHub: { es: "Roboteca", ca: "Roboteca", en: "Robot Club", cs: "Robotéka", fr: "Robothèque" },
  statusHome: { es: "En la Roboteca", ca: "A la Roboteca", en: "At the Robot Club", cs: "V Robotéce", fr: "À la Robothèque" },
  statusTalking: { es: "Hablando...", ca: "Parlant...", en: "Talking...", cs: "Mluvím...", fr: "Je parle..." },
  statusListening: { es: "Escuchando...", ca: "Escoltant...", en: "Listening...", cs: "Poslouchám...", fr: "J'écoute..." },

  /* --- chat --- */
  chatPh: { es: "Escribe aquí...", ca: "Escriu aquí...", en: "Type here...", cs: "Napiš něco...", fr: "Écris ici..." },
  send: { es: "Enviar", ca: "Envia", en: "Send", cs: "Poslat", fr: "Envoyer" },
  micBtn: { es: "Hablar", ca: "Parlar", en: "Speak", cs: "Mluvit", fr: "Parler" },
  micOffMsg: { es: "El micrófono está desactivado. ¡Pídele a un adulto que lo active en Ajustes!", ca: "El micròfon està desactivat. Demana a un adult que l'activi als Ajustos!", en: "The microphone is off. Ask a grown-up to turn it on in Settings!", cs: "Mikrofon je vypnutý. Popros dospělého, ať ho zapne v Nastavení!", fr: "Le micro est désactivé. Demande à un adulte de l'activer dans les Réglages !" },
  micNoDevice: { es: "No encuentro el micrófono. A veces el ordenador usa el del teléfono: que un adulto elija el micrófono en los ajustes de sonido.", ca: "No trobo el micròfon. A vegades l'ordinador fa servir el del telèfon: que un adult triï el micròfon als ajustos de so.", en: "I cannot find the microphone. Sometimes the computer uses the phone's one: ask a grown-up to pick the microphone in the sound settings.", cs: "Nemůžu najít mikrofon. Počítač někdy používá ten z telefonu: ať dospělý vybere mikrofon v nastavení zvuku.", fr: "Je ne trouve pas le micro. Parfois l'ordinateur utilise celui du téléphone : demande à un adulte de choisir le micro dans les réglages du son." },
  micErrMsg: { es: "¡Vaya! No te he oído bien. ¿Probamos otra vez?", ca: "Vaja! No t'he sentit bé. Ho provem un altre cop?", en: "Oops! I did not hear you well. Shall we try again?", cs: "Jejda! Neslyšel jsem tě dobře. Zkusíme to znovu?", fr: "Oups ! Je ne t'ai pas bien entendu. On réessaie ?" },

  /* --- quiz y mates --- */
  quizGo: { es: "¡Empezar!", ca: "Comencem!", en: "Start!", cs: "Spustit!", fr: "On commence !" },
  quizRight: { es: "¡SÍÍÍ! ¡Muy bien, {name}! 🌟", ca: "SÍÍÍ! Molt bé, {name}! 🌟", en: "YES! Well done, {name}! 🌟", cs: "ANO! Výborně, {name}! 🌟", fr: "OUI ! Bravo, {name} ! 🌟" },
  quizWrong: { es: "¡Casi! La respuesta era...", ca: "Gairebé! La resposta era...", en: "Almost! The answer was...", cs: "Skoro! Správná odpověď byla...", fr: "Presque ! La réponse était..." },
  quizDone: { es: "¡Terminado!", ca: "Acabat!", en: "Finished!", cs: "Hotovo!", fr: "Terminé !" },
  quizScore: { es: "Has acertado {n} de {total}", ca: "Has encertat {n} de {total}", en: "You got {n} out of {total}", cs: "Máš {n} z {total} správně", fr: "Tu as trouvé {n} sur {total}" },
  again: { es: "Otra vez", ca: "Un altre cop", en: "Again", cs: "Ještě jednou", fr: "Encore" },
  next: { es: "Siguiente", ca: "Següent", en: "Next", cs: "Další", fr: "Suivant" },
  continueBtn: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" },

  /* --- historias --- */
  storyPick: { es: "Elige una historia", ca: "Tria un conte", en: "Pick a story", cs: "Vyber si příběh", fr: "Choisis une histoire" },
  theEnd: { es: "¡Fin!", ca: "Fi!", en: "The End!", cs: "Konec!", fr: "Fin !" },
  anotherStory: { es: "Otra historia", ca: "Un altre conte", en: "Another story", cs: "Další příběh", fr: "Une autre histoire" },
  whatDo: { es: "¿Qué hacemos?", ca: "Què fem?", en: "What shall we do?", cs: "Co uděláme?", fr: "Qu'est-ce qu'on fait ?" },

  /* --- traductor --- */
  transPick: { es: "Elige un idioma divertido", ca: "Tria un idioma divertit", en: "Pick a fun language", cs: "Vyber si zábavný jazyk", fr: "Choisis une langue amusante" },
  transTap: { es: "Toca una palabra para oírla", ca: "Toca una paraula per sentir-la", en: "Tap a word to hear it", cs: "Klepni na slovo a poslechni si ho", fr: "Touche un mot pour l'écouter" },

  /* --- explorar --- */
  exploreHint: { es: "Arrastra el mapa y toca lo que quieras descubrir", ca: "Arrossega el mapa i toca el que vulguis descobrir", en: "Drag the map and tap anything to discover it", cs: "Posouvej mapu a klepni na to, co chceš objevit", fr: "Fais glisser la carte et touche ce que tu veux découvrir" },

  /* --- karaoke --- */
  karaokeGo: { es: "¡Cantar!", ca: "Cantem!", en: "Sing!", cs: "Zpívat!", fr: "On chante !" },
  karaokeStop: { es: "Parar", ca: "Atura", en: "Stop", cs: "Stop", fr: "Stop" },

  /* --- alfabeto --- */
  abcHint: { es: "Toca una letra", ca: "Toca una lletra", en: "Tap a letter", cs: "Klepni na písmenko", fr: "Touche une lettre" },

  /* --- taller --- */
  buildName: { es: "Ponle un nombre", ca: "Posa-li un nom", en: "Give it a name", cs: "Dej tomu jméno", fr: "Donne-lui un nom" },
  buildSave: { es: "¡Guardar!", ca: "Desa-ho!", en: "Save!", cs: "Uložit!", fr: "Enregistrer !" },
  buildSaved: { es: "¡Guardado en tu colección!", ca: "Desat a la teva col·lecció!", en: "Saved to your collection!", cs: "Uloženo do tvé sbírky!", fr: "Enregistré dans ta collection !" },
  buildYours: { es: "Tus creaciones", ca: "Les teves creacions", en: "Your creations", cs: "Tvoje výtvory", fr: "Tes créations" },

  /* --- famosos --- */
  famousChildTitle: { es: "¡Y de mayor...!", ca: "I de gran...!", en: "And when you grow up...!", cs: "A až vyrosteš...!", fr: "Et quand tu seras grand..." },

  /* --- colección --- */
  noMedals: { es: "Aún no hay medallas. ¡Juega para conseguirlas!", ca: "Encara no hi ha medalles. Juga per aconseguir-les!", en: "No medals yet. Play to earn them!", cs: "Zatím žádné medaile. Hraj a získej je!", fr: "Pas encore de médailles. Joue pour les gagner !" },

  /* --- ajustes --- */
  timeLeft: { es: "Tiempo restante: {n} min", ca: "Temps restant: {n} min", en: "Time left: {n} min", cs: "Zbývající čas: {n} min", fr: "Temps restant : {n} min" },
  addTime: { es: "+10 min (adultos)", ca: "+10 min (adults)", en: "+10 min (grown-ups)", cs: "+10 min (pro dospělé)", fr: "+10 min (adultes)" },
  editProfile: { es: "Cambiar nombre, aspecto o idioma", ca: "Canviar nom, aspecte o idioma", en: "Change name, look or language", cs: "Změnit jméno, vzhled nebo jazyk", fr: "Changer le prénom, l'apparence ou la langue" },
  eraseAll: { es: "Borrar todo el progreso", ca: "Esborrar tot el progrés", en: "Erase all progress", cs: "Smazat všechen postup", fr: "Effacer toute la progression" },
  eraseConfirm: { es: "¿Seguro? Se borran las medallas y las creaciones.", ca: "Segur? S'esborraran les medalles i les creacions.", en: "Are you sure? Medals and creations will be erased.", cs: "Opravdu? Smažou se medaile i výtvory.", fr: "Tu es sûr ? Les médailles et les créations seront effacées." },
  yes: { es: "Sí", ca: "Sí", en: "Yes", cs: "Ano", fr: "Oui" },
  no: { es: "No", ca: "No", en: "No", cs: "Ne", fr: "Non" },

  /* --- acerca de --- */
  aboutTitle: { es: "Acerca de Ninobot", ca: "Sobre el Ninobot", en: "About Ninobot", cs: "O Ninobotovi", fr: "À propos de Ninobot" },
  aboutText: { es: "Ninobot es un juego para explorar y aprender con una familia de robots. Funciona sin internet y no guarda nada fuera de este dispositivo. Hecho con cariño para {name} y para todos los peques curiosos del mundo.", ca: "El Ninobot és un joc per explorar i aprendre amb una família de robots. Funciona sense internet i no desa res fora d'aquest dispositiu. Fet amb estima per a {name} i per a tots els menuts curiosos del món.", en: "Ninobot is a game for exploring and learning with a family of robots. It works without internet and keeps nothing outside this device. Made with love for {name} and for every curious kid in the world.", cs: "Ninobot je hra na objevování a učení s rodinou robotů. Funguje bez internetu a nic neukládá mimo toto zařízení. Vyrobeno s láskou pro {name} a pro všechny zvědavé děti světa.", fr: "Ninobot est un jeu pour explorer et apprendre avec une famille de robots. Il fonctionne sans internet et ne garde rien en dehors de cet appareil. Fait avec amour pour {name} et pour tous les enfants curieux du monde." },

  /* --- despedida --- */
  byeTitle: { es: "¡Hasta pronto!", ca: "Fins aviat!", en: "See you soon!", cs: "Brzy na viděnou!", fr: "À bientôt !" },
  byeSpeech: { es: "Ninobot y sus amigos se han ido a recargar las pilas. ¡Volverán pronto con nuevas aventuras! Recuerda: estudia, juega, ayuda en casa y sé feliz.", ca: "El Ninobot i els seus amics han anat a carregar les piles. Tornaran aviat amb noves aventures! Recorda: estudia, juga, ajuda a casa i sigues feliç.", en: "Ninobot and his friends went to recharge their batteries. They will be back soon with new adventures! Remember: study, play, help at home and be happy.", cs: "Ninobot a jeho kamarádi si šli dobít baterky. Brzy se vrátí s novými dobrodružstvími! Pamatuj: uč se, hraj si, pomáhej doma a měj se krásně.", fr: "Ninobot et ses amis sont partis recharger leurs batteries. Ils reviendront bientôt avec de nouvelles aventures ! N'oublie pas : étudie, joue, aide à la maison et sois heureux." },
  byeBack: { es: "Volver a jugar (adultos)", ca: "Tornar a jugar (adults)", en: "Play again (grown-ups)", cs: "Hrát znovu (pro dospělé)", fr: "Rejouer (adultes)" },

  noVoiceWarn: { es: "Este dispositivo no tiene instalada una voz en tu idioma: la lectura puede sonar rara.", ca: "Aquest dispositiu no té instal·lada una veu en el teu idioma: la lectura pot sonar estranya.", en: "This device has no voice installed for your language: reading aloud may sound odd.", cs: "Toto zařízení nemá nainstalovaný hlas pro tvůj jazyk: předčítání může znít divně.", fr: "Cet appareil n'a pas de voix installée pour ta langue : la lecture peut sonner bizarre." },

  /* --- historias: opción B cuando la escena solo tenía un camino --- */
  storyAltB1: { es: "Respirar hondo primero... ¡y adelante!", ca: "Respirar fondo primer... i endavant!", en: "Take a deep breath first... then onward!", cs: "Nejdřív se zhluboka nadechnout... a vpřed!", fr: "On respire un grand coup... et en avant !" },
  storyAltB2: { es: "Mirar bien alrededor... ¡y seguir!", ca: "Mirar bé al voltant... i continuar!", en: "Look around carefully... and keep going!", cs: "Pořádně se rozhlédnout... a jít dál!", fr: "Bien regarder autour... et continuer !" },
  storyAltSay: { es: "¡Buena idea, {name}! Ahora sí: ¡seguimos!", ca: "Bona idea, {name}! Ara sí: seguim!", en: "Good idea, {name}! Now onward we go!", cs: "Dobrý nápad, {name}! A teď vpřed!", fr: "Bonne idée, {name} ! Maintenant, en avant !" },

  /* --- mates: celebración y ánimo alargados --- */
  mathYes: { es: "¡Siiiiií!", ca: "Síiiiii!", en: "Yesssss!", cs: "Anoooo!", fr: "Ouiiiii !" },
  mathNo: { es: "Nooooo...", ca: "Nooooo...", en: "Nooooo...", cs: "Neeeee...", fr: "Nooon..." },

  /* --- taller: despegue del cohete --- */
  launchGo: { es: "¡Tres, dos, uno... despegue!", ca: "Tres, dos, un... enlairament!", en: "Three, two, one... liftoff!", cs: "Tři, dva, jedna... start!", fr: "Trois, deux, un... décollage !" },

  /* --- taller: viaje en el tiempo --- */
  travelGo: { es: "¡Tres, dos, uno... rumbo a la prehistoria!", ca: "Tres, dos, un... rumb a la prehistòria!", en: "Three, two, one... off to prehistory!", cs: "Tři, dva, jedna... vzhůru do pravěku!", fr: "Trois, deux, un... cap sur la préhistoire !" },

  /* --- taller: baile del droide --- */
  danceGo: { es: "¡Bip bip bup! ¡Droide terminado! ¡A bailar!", ca: "Bip bip bup! Droide acabat! A ballar!", en: "Beep beep boop! Droid complete! Dance time!", cs: "Píp píp púp! Droid hotov! Jde se tančit!", fr: "Bip bip boup ! Droïde terminé ! On danse !" },

  /* --- llamada a un robot --- */
  callBtn: { es: "Llamar a un robot", ca: "Trucar a un robot", en: "Call a robot", cs: "Zavolat robotovi", fr: "Appeler un robot" },
  callPick: { es: "¿A qué robot llamamos?", ca: "A quin robot truquem?", en: "Which robot shall we call?", cs: "Kterému robotovi zavoláme?", fr: "Quel robot appelle-t-on ?" },
  callWith: { es: "En llamada con", ca: "En trucada amb", en: "On a call with", cs: "Hovor s robotem", fr: "En appel avec" },
  hangUp: { es: "Colgar", ca: "Penjar", en: "Hang up", cs: "Zavěsit", fr: "Raccrocher" },
  callRing: { es: "Riiing riiing...", ca: "Riiing riiing...", en: "Riiing riiing...", cs: "Crrr crrr...", fr: "Dring dring..." },
  callAckPos: { es: "¡Eso es que sí! Me encanta. ¿Y qué más me cuentas, {name}?", ca: "Això és que sí! M'encanta. I què més m'expliques, {name}?", en: "That is a yes! I love it. What else can you tell me, {name}?", cs: "To znamená ano! To se mi líbí. A co dalšího mi povíš, {name}?", fr: "Ça, c'est un oui ! J'adore. Et quoi d'autre, {name} ?" },
  callAckNeg: { es: "Vale, no pasa nada. ¿Hablamos de otra cosa que te guste más?", ca: "Val, no passa res. Parlem d'una altra cosa que t'agradi més?", en: "Okay, no problem. Shall we talk about something you like better?", cs: "Dobře, nic se neděje. Popovídáme si o něčem, co máš radši?", fr: "D'accord, ce n'est pas grave. On parle d'autre chose que tu préfères ?" },

  /* --- chips de conversación (para peques que aún no escriben) --- */
  chip1: { es: "Cuéntame un chiste", ca: "Explica'm un acudit", en: "Tell me a joke", cs: "Řekni mi vtip", fr: "Raconte-moi une blague" },
  chip2: { es: "¿Cómo estás?", ca: "Com estàs?", en: "How are you?", cs: "Jak se máš?", fr: "Comment ça va ?" },
  chip3: { es: "Te quiero", ca: "T'estimo", en: "I love you", cs: "Mám tě rád", fr: "Je t'aime" },
  chip4: { es: "¿Qué sabes hacer?", ca: "Què saps fer?", en: "What can you do?", cs: "Co umíš?", fr: "Que sais-tu faire ?" },

  /* --- avisos y celebraciones --- */
  timeSoon: { es: "Nos quedan cinco minutitos. ¡Vamos a terminar lo que estamos haciendo!", ca: "Ens queden cinc minutets. Acabem el que estem fent!", en: "We have five little minutes left. Let us finish what we are doing!", cs: "Zbývá nám pět minutek. Dokončíme, co děláme!", fr: "Il nous reste cinq petites minutes. Finissons ce qu'on est en train de faire !" },
  medalMsg: { es: "¡Medalla conseguida! Has ganado la medalla de {theme}, {name}. ¡Eres increíble!", ca: "Medalla aconseguida! Has guanyat la medalla de {theme}, {name}. Ets increïble!", en: "Medal earned! You won the {theme} medal, {name}. You are amazing!", cs: "Medaile získána! Máš medaili za {theme}, {name}. Jsi hvězda!", fr: "Médaille gagnée ! Tu as remporté la médaille de {theme}, {name}. Tu es incroyable !" },
  eraseOne: { es: "Borrar esta creación", ca: "Esborra aquesta creació", en: "Delete this creation", cs: "Smazat tento výtvor", fr: "Supprimer cette création" },
  goSing: { es: "🎤 ¡Vamos a cantarla!", ca: "🎤 Anem a cantar-la!", en: "🎤 Let's sing it!", cs: "🎤 Jdeme si ji zazpívat!", fr: "🎤 Allons la chanter !" },

  /* --- tipo de voz --- */
  voiceKindLabel: { es: "Tipo de voz", ca: "Tipus de veu", en: "Voice type", cs: "Typ hlasu", fr: "Type de voix" },
  voiceRobot: { es: "Robótica", ca: "Robòtica", en: "Robotic", cs: "Robotický", fr: "Robotique" },
  voiceHuman: { es: "Humana", ca: "Humana", en: "Human", cs: "Lidský", fr: "Humaine" },

  /* --- comunes --- */
  close: { es: "Cerrar", ca: "Tanca", en: "Close", cs: "Zavřít", fr: "Fermer" },
  back: { es: "Atrás", ca: "Enrere", en: "Back", cs: "Zpět", fr: "Retour" },
  listen: { es: "Escuchar", ca: "Escoltar", en: "Listen", cs: "Poslechnout", fr: "Écouter" },

  /* --- escuela de lectura (portada) --- */
  leerTitle: { es: "Escuela de lectura", ca: "Escola de lectura", en: "Reading school", cs: "Škola čtení", fr: "École de lecture" },
  leerSub: { es: "Aprende a leer paso a paso", ca: "Aprèn a llegir pas a pas", en: "Learn to read step by step", cs: "Nauč se číst krok za krokem", fr: "Apprends à lire pas à pas" },
  leerGo: { es: "¡A leer!", ca: "A llegir!", en: "Let's read!", cs: "Jdeme číst!", fr: "On lit !" },
  leerL1: { es: "Las vocales", ca: "Les vocals", en: "The vowels", cs: "Samohlásky", fr: "Les voyelles" },
  leerL2: { es: "Las sílabas", ca: "Les síl·labes", en: "The syllables", cs: "Slabiky", fr: "Les syllabes" },
  leerL3: { es: "Mis primeras palabras", ca: "Les meves primeres paraules", en: "My first words", cs: "Moje první slova", fr: "Mes premiers mots" },
  leerL4: { es: "Palabras del mundo", ca: "Paraules del món", en: "Words of the world", cs: "Slova světa", fr: "Les mots du monde" },
  leerL5: { es: "Frases pequeñas", ca: "Frases petites", en: "Little sentences", cs: "Krátké věty", fr: "Petites phrases" },
  leerTapL: { es: "Escucha y toca la letra", ca: "Escolta i toca la lletra", en: "Listen and tap the letter", cs: "Poslouchej a ťukni na písmeno", fr: "Écoute et touche la lettre" },
  leerTapS: { es: "Escucha y toca la sílaba", ca: "Escolta i toca la síl·laba", en: "Listen and tap the syllable", cs: "Poslouchej a ťukni na slabiku", fr: "Écoute et touche la syllabe" },
  leerSlow: { es: "El robot la lee despacito. Toca su dibujo", ca: "El robot la llegeix a poc a poc. Toca el seu dibuix", en: "The robot reads it slowly. Tap its picture", cs: "Robot to čte pomalu. Ťukni na obrázek", fr: "Le robot le lit doucement. Touche son dessin" },
  leerGap: { es: "¿Qué palabra falta?", ca: "Quina paraula falta?", en: "Which word is missing?", cs: "Které slovo chybí?", fr: "Quel mot manque ?" },
  leerNext: { es: "Empieza aquí", ca: "Comença aquí", en: "Start here", cs: "Začni tady", fr: "Commence ici" },
  leerNextL: { es: "Siguiente lección", ca: "Lliçó següent", en: "Next lesson", cs: "Další lekce", fr: "Leçon suivante" },
  leerDe: { es: "de", ca: "de", en: "for", cs: "jako", fr: "comme" },
  leerMedalMsg: { es: "¡{name}, ya sabes leer con el robot! ¡Medalla de lectura!", ca: "{name}, ja saps llegir amb el robot! Medalla de lectura!", en: "{name}, you can read with the robot now! Reading medal!", cs: "{name}, už umíš číst s robotem! Medaile za čtení!", fr: "{name}, tu sais lire avec le robot ! Médaille de lecture !" },
  leerL6: { es: "Trazar letras", ca: "Resseguir lletres", en: "Tracing letters", cs: "Obtahování písmen", fr: "Tracer les lettres" },
  leerTapT: { es: "Repasa la letra con el dedo, trazo a trazo", ca: "Resegueix la lletra amb el dit, traç a traç", en: "Trace the letter with your finger, stroke by stroke", cs: "Obtáhni písmeno prstem, tah po tahu", fr: "Suis la lettre avec ton doigt, trait par trait" },
  leerErase: { es: "Borrar", ca: "Esborra", en: "Erase", cs: "Smazat", fr: "Effacer" },

  /* --- misión del día --- */
  mTitle: { es: "Misión de hoy", ca: "Missió d'avui", en: "Today's mission", cs: "Dnešní mise", fr: "Mission du jour" },
  mDone: { es: "¡Misión cumplida!", ca: "Missió complerta!", en: "Mission complete!", cs: "Mise splněna!", fr: "Mission accomplie !" },
  mDoneMsg: { es: "¡Misión cumplida, {name}! Te has ganado una pegatina nueva.", ca: "Missió complerta, {name}! T'has guanyat una enganxina nova.", en: "Mission complete, {name}! You earned a new sticker.", cs: "Mise splněna, {name}! Získáváš novou samolepku.", fr: "Mission accomplie, {name} ! Tu as gagné un nouvel autocollant." },
  mSticker: { es: "Pegatina nueva", ca: "Enganxina nova", en: "New sticker", cs: "Nová samolepka", fr: "Nouvel autocollant" },
  mAlbum: { es: "Álbum de pegatinas", ca: "Àlbum d'enganxines", en: "Sticker album", cs: "Album samolepek", fr: "Album d'autocollants" },
  mChStar: { es: "Gana {n} estrellas", ca: "Guanya {n} estrelles", en: "Win {n} stars", cs: "Získej {n} hvězdičky", fr: "Gagne {n} étoiles" },
  mChPoi: { es: "Descubre {n} lugares de los mapas", ca: "Descobreix {n} llocs dels mapes", en: "Discover {n} places on the maps", cs: "Objev {n} míst na mapách", fr: "Découvre {n} lieux sur les cartes" },
  mChSong: { es: "Canta una canción", ca: "Canta una cançó", en: "Sing a song", cs: "Zazpívej si písničku", fr: "Chante une chanson" },
  mChLeer: { es: "Haz una lección de lectura", ca: "Fes una lliçó de lectura", en: "Do a reading lesson", cs: "Udělej jednu lekci čtení", fr: "Fais une leçon de lecture" },
  mChQuiz: { es: "Termina un quiz", ca: "Acaba un quiz", en: "Finish a quiz", cs: "Dokonči jeden kvíz", fr: "Termine un quiz" },
  mChMath: { es: "Juega con los números", ca: "Juga amb els números", en: "Play with numbers", cs: "Hraj si s čísly", fr: "Joue avec les nombres" },
  mChBuild: { es: "Construye algo en el taller", ca: "Construeix una cosa al taller", en: "Build something in the workshop", cs: "Postav něco v dílně", fr: "Construis quelque chose à l'atelier" },
  mChCall: { es: "Cuéntale {n} cosas a un robot", ca: "Explica {n} coses a un robot", en: "Tell a robot {n} things", cs: "Řekni robotovi {n} věci", fr: "Raconte {n} choses à un robot" },
  mChAbc: { es: "Aprende {n} letras nuevas", ca: "Aprèn {n} lletres noves", en: "Learn {n} new letters", cs: "Nauč se {n} nová písmenka", fr: "Apprends {n} nouvelles lettres" },

  /* --- libro de cuentos --- */
  bookTitle: { es: "Libro de cuentos", ca: "Llibre de contes", en: "Storybook", cs: "Kniha pohádek", fr: "Livre de contes" },
  bookEmpty: { es: "Termina una historia para estrenar tu libro", ca: "Acaba una història per estrenar el teu llibre", en: "Finish a story to start your book", cs: "Dokonči příběh a začni svou knihu", fr: "Termine une histoire pour commencer ton livre" },
  bookLeft: { es: "Te quedan {n} finales por descubrir", ca: "Et queden {n} finals per descobrir", en: "You have {n} endings left to discover", cs: "Zbývající konce k objevení: {n}", fr: "Il te reste {n} fins à découvrir" },
  endsFound: { es: "Finales encontrados: {n} de {total}", ca: "Finals trobats: {n} de {total}", en: "Endings found: {n} of {total}", cs: "Nalezené konce: {n} z {total}", fr: "Fins trouvées : {n} sur {total}" },
  endNew: { es: "¡Final nuevo para tu libro!", ca: "Final nou per al teu llibre!", en: "New ending for your book!", cs: "Nový konec do tvé knihy!", fr: "Nouvelle fin pour ton livre !" },
  readAgain: { es: "Volver a leerla", ca: "Tornar a llegir-la", en: "Read it again", cs: "Číst znovu", fr: "La relire" },

  /* --- rincón de los padres --- */
  pTitle: { es: "Rincón de los padres", ca: "Racó dels pares", en: "Parents' corner", cs: "Koutek pro rodiče", fr: "Coin des parents" },
  pGate: { es: "Una pregunta de mayores para entrar:", ca: "Una pregunta per a adults per entrar:", en: "A grown-up question to enter:", cs: "Otázka pro dospělé:", fr: "Une question de grands pour entrer :" },
  pGateGo: { es: "Entrar", ca: "Entra", en: "Enter", cs: "Vstoupit", fr: "Entrer" },
  pToday: { es: "Tiempo jugado hoy", ca: "Temps jugat avui", en: "Time played today", cs: "Dnes odehráno", fr: "Temps joué aujourd'hui" },
  pTotal: { es: "Tiempo jugado en total", ca: "Temps jugat en total", en: "Total time played", cs: "Celkem odehráno", fr: "Temps joué au total" },
  pStars: { es: "Estrellas ganadas", ca: "Estrelles guanyades", en: "Stars earned", cs: "Získané hvězdičky", fr: "Étoiles gagnées" },
  pMedals: { es: "Medallas", ca: "Medalles", en: "Medals", cs: "Medaile", fr: "Médailles" },
  pMis: { es: "Misiones cumplidas", ca: "Missions complertes", en: "Missions completed", cs: "Splněné mise", fr: "Missions accomplies" },
  pStickers: { es: "Pegatinas", ca: "Enganxines", en: "Stickers", cs: "Samolepky", fr: "Autocollants" },
  pEnds: { es: "Finales de cuento", ca: "Finals de conte", en: "Story endings", cs: "Konce příběhů", fr: "Fins d'histoires" },
  pLeer: { es: "Escuela de lectura", ca: "Escola de lectura", en: "Reading school", cs: "Škola čtení", fr: "École de lecture" },
  pPractice: { es: "Qué practicar juntos", ca: "Què practicar junts", en: "What to practice together", cs: "Co procvičovat spolu", fr: "Quoi pratiquer ensemble" },
  pPracticeNone: { es: "Nada pendiente: todo va sobre ruedas", ca: "Res pendent: tot va sobre rodes", en: "Nothing pending: everything is on track", cs: "Nic nechybí: všechno jde skvěle", fr: "Rien en attente : tout roule" },
  pMin: { es: "min", ca: "min", en: "min", cs: "min", fr: "min" },
  aboutContact: { es: "Sugerencias, errores o ideas:", ca: "Suggeriments, errors o idees:", en: "Suggestions, bugs or ideas:", cs: "Návrhy, chyby nebo nápady:", fr: "Suggestions, erreurs ou idées :" },

  /* --- modo cuidar (vida práctica) --- */
  mCare: { es: "Cuidar", ca: "Cuidar", en: "Care", cs: "Péče", fr: "Prendre soin" },
  careFirst: { es: "Primero toca:", ca: "Primer toca:", en: "First it's time to:", cs: "Nejdřív je na řadě:", fr: "D'abord, c'est le moment de :" },
  mChCare: { es: "Cuida algo en una aventura", ca: "Cuida alguna cosa en una aventura", en: "Take care of something in an adventure", cs: "Postarej se o něco v dobrodružství", fr: "Prends soin de quelque chose dans une aventure" }
};
