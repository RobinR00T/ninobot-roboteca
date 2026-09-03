"use strict";
/* ============================================================
   Contenido de CUERPO HUMANO (parte A): quiz, alfabeto,
   famosos, mates y constructor (crea tu personaje).
   ============================================================ */

THEMES.cuerpo.ready = true;
THEMES.cuerpo.content = {

  statusPlace: { es: "Conectado desde el Corazón", ca: "Connectat des del Cor", en: "Connected from the Heart", cs: "Připojeno ze Srdce", fr: "Connecté depuis le Cœur" },
  welcome: { es: "¡Nos hacemos pequeñitos, {name}! Hoy viajamos por dentro del cuerpo humano. ¡Agárrate, que el corazón va rápido!", ca: "Ens fem petitons, {name}! Avui viatgem per dins del cos humà. Agafa't, que el cor va ràpid!", en: "We are shrinking down, {name}! Today we travel inside the human body. Hold on, the heart beats fast!", cs: "Zmenšujeme se, {name}! Dnes cestujeme uvnitř lidského těla. Drž se, srdce bije rychle!", fr: "On rétrécit, {name} ! Aujourd'hui, on voyage à l'intérieur du corps humain. Accroche-toi, le cœur bat vite !" },

  /* ---------- QUIZ ---------- */
  quiz: [
    { emoji: "❤️",
      q: { es: "¿Qué órgano bombea la sangre por todo el cuerpo?", ca: "Quin òrgan bomba la sang per tot el cos?", en: "Which organ pumps blood around the body?", cs: "Který orgán pumpuje krev po celém těle?", fr: "Quel organe fait circuler le sang dans tout le corps ?" },
      options: [
        { es: "El cerebro", ca: "El cervell", en: "The brain", cs: "Mozek", fr: "Le cerveau" },
        { es: "El corazón", ca: "El cor", en: "The heart", cs: "Srdce", fr: "Le cœur" },
        { es: "El estómago", ca: "L'estómac", en: "The stomach", cs: "Žaludek", fr: "L'estomac" },
        { es: "La nariz", ca: "El nas", en: "The nose", cs: "Nos", fr: "Le nez" }],
      answer: 1,
      explanation: { es: "El corazón late unas cien mil veces al día. ¡Es la bomba más trabajadora del mundo!", ca: "El cor batega unes cent mil vegades al dia. És la bomba més treballadora del món!", en: "The heart beats about a hundred thousand times a day. The hardest-working pump in the world!", cs: "Srdce bije asi stotisíckrát za den. Je to nejpracovitější pumpa na světě!", fr: "Le cœur bat environ cent mille fois par jour. C'est la pompe la plus travailleuse du monde !" } },
    { emoji: "🫁",
      q: { es: "¿Con qué respiramos?", ca: "Amb què respirem?", en: "What do we breathe with?", cs: "Čím dýcháme?", fr: "Avec quoi respirons-nous ?" },
      options: [
        { es: "Con los pulmones", ca: "Amb els pulmons", en: "With the lungs", cs: "Plícemi", fr: "Avec les poumons" },
        { es: "Con las orejas", ca: "Amb les orelles", en: "With the ears", cs: "Ušima", fr: "Avec les oreilles" },
        { es: "Con los pies", ca: "Amb els peus", en: "With the feet", cs: "Nohama", fr: "Avec les pieds" },
        { es: "Con el pelo", ca: "Amb els cabells", en: "With the hair", cs: "Vlasy", fr: "Avec les cheveux" }],
      answer: 0,
      explanation: { es: "Los pulmones son como dos globos que se llenan de aire. ¡Respira hondo y nótalos!", ca: "Els pulmons són com dos globus que s'omplen d'aire. Respira fondo i nota'ls!", en: "Lungs are like two balloons that fill with air. Take a deep breath and feel them!", cs: "Plíce jsou jako dva balonky, které se plní vzduchem. Zhluboka se nadechni a ucítíš je!", fr: "Les poumons sont comme deux ballons qui se remplissent d'air. Respire fort et sens-les !" } },
    { emoji: "🧠",
      q: { es: "¿Quién manda en todo el cuerpo?", ca: "Qui mana a tot el cos?", en: "Who is the boss of the whole body?", cs: "Kdo velí celému tělu?", fr: "Qui commande tout le corps ?" },
      options: [
        { es: "Los pies", ca: "Els peus", en: "The feet", cs: "Nohy", fr: "Les pieds" },
        { es: "El cerebro", ca: "El cervell", en: "The brain", cs: "Mozek", fr: "Le cerveau" },
        { es: "Las uñas", ca: "Les ungles", en: "The nails", cs: "Nehty", fr: "Les ongles" },
        { es: "La barriga", ca: "La panxa", en: "The tummy", cs: "Bříško", fr: "Le ventre" }],
      answer: 1,
      explanation: { es: "El cerebro dirige todo: pensar, saltar, reír y hasta soñar. ¡Y funciona también de noche!", ca: "El cervell ho dirigeix tot: pensar, saltar, riure i fins i tot somiar. I funciona també de nit!", en: "The brain runs everything: thinking, jumping, laughing and even dreaming. It works at night too!", cs: "Mozek řídí všechno: myšlení, skákání, smích i snění. A pracuje i v noci!", fr: "Le cerveau dirige tout : penser, sauter, rire et même rêver. Et il travaille aussi la nuit !" } },
    { emoji: "🦷",
      q: { es: "¿Cuántos dientes de leche tiene un niño?", ca: "Quantes dents de llet té un nen?", en: "How many baby teeth does a child have?", cs: "Kolik mléčných zubů má dítě?", fr: "Combien de dents de lait a un enfant ?" },
      options: [
        { es: "2", ca: "2", en: "2", cs: "2", fr: "2" },
        { es: "20", ca: "20", en: "20", cs: "20", fr: "20" },
        { es: "100", ca: "100", en: "100", cs: "100", fr: "100" },
        { es: "1000", ca: "1000", en: "1000", cs: "1000", fr: "1000" }],
      answer: 1,
      explanation: { es: "Veinte dientes de leche. Luego se caen y salen 32 de mayor. ¡Cepíllalos todos los días!", ca: "Vint dents de llet. Després cauen i en surten 32 de gran. Raspalla-les cada dia!", en: "Twenty baby teeth. Later they fall out and 32 grown-up ones come in. Brush them every day!", cs: "Dvacet mléčných zubů. Pak vypadnou a naroste 32 dospělých. Čisti si je každý den!", fr: "Vingt dents de lait. Ensuite elles tombent et 32 dents d'adulte poussent. Brosse-les tous les jours !" } },
    { emoji: "⛑️",
      q: { es: "¿Qué protege el cráneo?", ca: "Què protegeix el crani?", en: "What does the skull protect?", cs: "Co chrání lebka?", fr: "Que protège le crâne ?" },
      options: [
        { es: "El cerebro", ca: "El cervell", en: "The brain", cs: "Mozek", fr: "Le cerveau" },
        { es: "Los pies", ca: "Els peus", en: "The feet", cs: "Nohy", fr: "Les pieds" },
        { es: "La merienda", ca: "El berenar", en: "The snack", cs: "Svačinu", fr: "Le goûter" },
        { es: "Los juguetes", ca: "Les joguines", en: "The toys", cs: "Hračky", fr: "Les jouets" }],
      answer: 0,
      explanation: { es: "El cráneo es el casco natural del cerebro. Por eso además usamos casco en la bici: ¡doble protección!", ca: "El crani és el casc natural del cervell. Per això a més fem servir casc a la bici: doble protecció!", en: "The skull is the brain's natural helmet. That is why we also wear a helmet on the bike: double protection!", cs: "Lebka je přirozená helma mozku. Proto na kole nosíme ještě helmu: dvojitá ochrana!", fr: "Le crâne est le casque naturel du cerveau. C'est pour ça qu'on met aussi un casque à vélo : double protection !" } },
    { emoji: "🖐️",
      q: { es: "¿Cuál es el órgano más grande del cuerpo?", ca: "Quin és l'òrgan més gran del cos?", en: "What is the biggest organ of the body?", cs: "Který orgán těla je největší?", fr: "Quel est le plus grand organe du corps ?" },
      options: [
        { es: "La piel", ca: "La pell", en: "The skin", cs: "Kůže", fr: "La peau" },
        { es: "El corazón", ca: "El cor", en: "The heart", cs: "Srdce", fr: "Le cœur" },
        { es: "La oreja", ca: "L'orella", en: "The ear", cs: "Ucho", fr: "L'oreille" },
        { es: "La lengua", ca: "La llengua", en: "The tongue", cs: "Jazyk", fr: "La langue" }],
      answer: 0,
      explanation: { es: "¡La piel! Te cubre entero, te protege y nota el frío, el calor y las cosquillas.", ca: "La pell! Et cobreix sencer, et protegeix i nota el fred, la calor i les pessigolles.", en: "The skin! It covers all of you, protects you and feels cold, heat and tickles.", cs: "Kůže! Pokrývá tě celou, chrání tě a cítí chlad, teplo i lechtání.", fr: "La peau ! Elle te couvre en entier, te protège et sent le froid, le chaud et les chatouilles." } },
    { emoji: "🍎",
      q: { es: "¿Adónde va la comida cuando la tragas?", ca: "On va el menjar quan te l'empasses?", en: "Where does food go when you swallow it?", cs: "Kam jde jídlo, když ho spolkneš?", fr: "Où va la nourriture quand tu l'avales ?" },
      options: [
        { es: "A los pulmones", ca: "Als pulmons", en: "To the lungs", cs: "Do plic", fr: "Dans les poumons" },
        { es: "Al estómago", ca: "A l'estómac", en: "To the stomach", cs: "Do žaludku", fr: "Dans l'estomac" },
        { es: "A la rodilla", ca: "Al genoll", en: "To the knee", cs: "Do kolena", fr: "Dans le genou" },
        { es: "Al cerebro", ca: "Al cervell", en: "To the brain", cs: "Do mozku", fr: "Dans le cerveau" }],
      answer: 1,
      explanation: { es: "Baja por un tobogán llamado esófago hasta el estómago, que la mezcla como una batidora.", ca: "Baixa per un tobogan anomenat esòfag fins a l'estómac, que la barreja com una batedora.", en: "It slides down a slide called the oesophagus to the stomach, which mixes it like a blender.", cs: "Sjede po skluzavce zvané jícen do žaludku, který ji zamíchá jako mixér.", fr: "Elle descend par un toboggan appelé œsophage jusqu'à l'estomac, qui la mélange comme un mixeur." } },
    { emoji: "🦴",
      q: { es: "¿Cuántos huesos tiene una persona mayor?", ca: "Quants ossos té una persona gran?", en: "How many bones does a grown-up have?", cs: "Kolik kostí má dospělý člověk?", fr: "Combien d'os a une grande personne ?" },
      options: [
        { es: "10", ca: "10", en: "10", cs: "10", fr: "10" },
        { es: "206", ca: "206", en: "206", cs: "206", fr: "206" },
        { es: "1000", ca: "1000", en: "1000", cs: "1000", fr: "1000" },
        { es: "5", ca: "5", en: "5", cs: "5", fr: "5" }],
      answer: 1,
      explanation: { es: "206 huesos. ¡Y los bebés nacen con unos 300! Algunos se van uniendo al crecer.", ca: "206 ossos. I els nadons neixen amb uns 300! Alguns es van unint en créixer.", en: "206 bones. And babies are born with about 300! Some join together as they grow.", cs: "206 kostí. A miminka se rodí asi se 300! Některé při růstu srostou.", fr: "206 os. Et les bébés naissent avec environ 300 ! Certains se soudent en grandissant." } },
    { emoji: "💪",
      q: { es: "¿Qué hacen los músculos?", ca: "Què fan els músculs?", en: "What do muscles do?", cs: "Co dělají svaly?", fr: "Que font les muscles ?" },
      options: [
        { es: "Mover el cuerpo", ca: "Moure el cos", en: "Move the body", cs: "Hýbou tělem", fr: "Bouger le corps" },
        { es: "Pensar", ca: "Pensar", en: "Think", cs: "Myslí", fr: "Penser" },
        { es: "Ver de noche", ca: "Veure de nit", en: "See at night", cs: "Vidí ve tmě", fr: "Voir la nuit" },
        { es: "Hacer la cena", ca: "Fer el sopar", en: "Make dinner", cs: "Vaří večeři", fr: "Faire le dîner" }],
      answer: 0,
      explanation: { es: "Tienes más de 600 músculos. Hasta sonreír usa un montón: ¡sonríe y ya estás entrenando!", ca: "Tens més de 600 músculs. Fins i tot somriure en fa servir un munt: somriu i ja estàs entrenant!", en: "You have more than 600 muscles. Even smiling uses lots of them: smile and you are training!", cs: "Máš přes 600 svalů. I úsměv jich používá spoustu: usměj se a už trénuješ!", fr: "Tu as plus de 600 muscles. Même sourire en utilise plein : souris et tu t'entraînes déjà !" } },
    { emoji: "😴",
      q: { es: "¿Para qué sirve dormir?", ca: "Per a què serveix dormir?", en: "What is sleeping for?", cs: "K čemu je spánek?", fr: "À quoi sert de dormir ?" },
      options: [
        { es: "Para nada", ca: "Per a res", en: "For nothing", cs: "K ničemu", fr: "À rien" },
        { es: "Para crecer y recargar energía", ca: "Per créixer i recarregar energia", en: "To grow and recharge energy", cs: "K růstu a dobití energie", fr: "Pour grandir et recharger l'énergie" },
        { es: "Para aburrirse", ca: "Per avorrir-se", en: "To get bored", cs: "K nudě", fr: "Pour s'ennuyer" },
        { es: "Para ver la tele", ca: "Per veure la tele", en: "To watch TV", cs: "Ke koukání na televizi", fr: "Pour regarder la télé" }],
      answer: 1,
      explanation: { es: "Mientras duermes, el cuerpo crece, se repara y el cerebro ordena lo aprendido. ¡Dormir es un superpoder!", ca: "Mentre dorms, el cos creix, es repara i el cervell ordena el que has après. Dormir és un superpoder!", en: "While you sleep, your body grows and repairs itself, and your brain tidies up what you learned. Sleeping is a superpower!", cs: "Když spíš, tělo roste a opravuje se a mozek si třídí, co ses naučila. Spánek je superschopnost!", fr: "Pendant que tu dors, ton corps grandit, se répare et ton cerveau range ce que tu as appris. Dormir est un superpouvoir !" } },
    { emoji: "👀",
      q: { es: "¿Con qué parte del cuerpo vemos?", ca: "Amb quina part del cos hi veiem?", en: "Which part of the body do we see with?", cs: "Kterou částí těla vidíme?", fr: "Avec quelle partie du corps voyons-nous ?" },
      options: [
        { es: "Con las manos", ca: "Amb les mans", en: "With the hands", cs: "Rukama", fr: "Avec les mains" },
        { es: "Con los codos", ca: "Amb els colzes", en: "With the elbows", cs: "Lokty", fr: "Avec les coudes" },
        { es: "Con los ojos", ca: "Amb els ulls", en: "With the eyes", cs: "Očima", fr: "Avec les yeux" },
        { es: "Con las rodillas", ca: "Amb els genolls", en: "With the knees", cs: "Koleny", fr: "Avec les genoux" }],
      answer: 2,
      explanation: { es: "Los ojos captan la luz y el cerebro forma la imagen. ¡Y parpadeas miles de veces al día sin darte cuenta!", ca: "Els ulls capten la llum i el cervell forma la imatge. I parpelleges milers de vegades al dia sense adonar-te'n!", en: "Your eyes catch the light and your brain makes the picture. And you blink thousands of times a day without noticing!", cs: "Oči zachytí světlo a mozek z něj složí obrázek. A za den mrkneš tisíckrát, ani o tom nevíš!", fr: "Tes yeux captent la lumière et ton cerveau fabrique l'image. Et tu clignes des yeux des milliers de fois par jour sans t'en rendre compte !" } },
    { emoji: "👅",
      q: { es: "¿Qué parte del cuerpo nos ayuda a notar los sabores?", ca: "Quina part del cos ens ajuda a notar els sabors?", en: "Which part of the body helps us taste flavours?", cs: "Která část těla nám pomáhá poznávat chutě?", fr: "Quelle partie du corps nous aide à sentir les goûts ?" },
      options: [
        { es: "La lengua", ca: "La llengua", en: "The tongue", cs: "Jazyk", fr: "La langue" },
        { es: "El pelo", ca: "Els cabells", en: "The hair", cs: "Vlasy", fr: "Les cheveux" },
        { es: "El codo", ca: "El colze", en: "The elbow", cs: "Loket", fr: "Le coude" },
        { es: "Las cejas", ca: "Les celles", en: "The eyebrows", cs: "Obočí", fr: "Les sourcils" }],
      answer: 0,
      explanation: { es: "La lengua tiene miles de papilas que notan lo dulce, lo salado, lo ácido y lo amargo. ¡Cada bocado es una fiesta!", ca: "La llengua té milers de papil·les que noten el dolç, el salat, l'àcid i l'amarg. Cada mos és una festa!", en: "Your tongue has thousands of taste buds that notice sweet, salty, sour and bitter. Every bite is a party!", cs: "Jazyk má tisíce chuťových pohárků, které poznají sladké, slané, kyselé i hořké. Každé sousto je oslava!", fr: "La langue a des milliers de papilles qui sentent le sucré, le salé, l'acide et l'amer. Chaque bouchée est une fête !" } },
    { emoji: "🩸",
      q: { es: "¿Qué reparte la sangre por todo el cuerpo?", ca: "Què reparteix la sang per tot el cos?", en: "What does blood deliver around the body?", cs: "Co krev rozváží po celém těle?", fr: "Que distribue le sang dans tout le corps ?" },
      options: [
        { es: "Caramelos", ca: "Caramels", en: "Sweets", cs: "Bonbony", fr: "Des bonbons" },
        { es: "Arena", ca: "Sorra", en: "Sand", cs: "Písek", fr: "Du sable" },
        { es: "Juguetes", ca: "Joguines", en: "Toys", cs: "Hračky", fr: "Des jouets" },
        { es: "Oxígeno y alimento", ca: "Oxigen i aliment", en: "Oxygen and food", cs: "Kyslík a živiny", fr: "De l'oxygène et de la nourriture" }],
      answer: 3,
      explanation: { es: "La sangre es como un tren de reparto: lleva oxígeno y alimento a cada rincón de tu cuerpo.", ca: "La sang és com un tren de repartiment: porta oxigen i aliment a cada racó del teu cos.", en: "Blood is like a delivery train: it carries oxygen and food to every corner of your body.", cs: "Krev je jako rozvážkový vláček: veze kyslík a živiny do každého koutku tvého těla.", fr: "Le sang est comme un train de livraison : il apporte de l'oxygène et de la nourriture à chaque coin de ton corps." } },
    { emoji: "💧",
      q: { es: "¿De qué está hecha más de la mitad de tu cuerpo?", ca: "De què està feta més de la meitat del teu cos?", en: "What is more than half of your body made of?", cs: "Z čeho je víc než polovina tvého těla?", fr: "De quoi est faite plus de la moitié de ton corps ?" },
      options: [
        { es: "De chocolate", ca: "De xocolata", en: "Of chocolate", cs: "Z čokolády", fr: "De chocolat" },
        { es: "De agua", ca: "D'aigua", en: "Of water", cs: "Z vody", fr: "D'eau" },
        { es: "De piedra", ca: "De pedra", en: "Of stone", cs: "Z kamene", fr: "De pierre" },
        { es: "De algodón", ca: "De cotó", en: "Of cotton", cs: "Z vaty", fr: "De coton" }],
      answer: 1,
      explanation: { es: "¡Más de la mitad de tu cuerpo es agua! Por eso beber agua cada día es tan importante como comer.", ca: "Més de la meitat del teu cos és aigua! Per això beure aigua cada dia és tan important com menjar.", en: "More than half of your body is water! That is why drinking water every day is as important as eating.", cs: "Víc než polovina tvého těla je voda! Proto je pití vody každý den stejně důležité jako jídlo.", fr: "Plus de la moitié de ton corps est de l'eau ! C'est pour ça que boire de l'eau chaque jour est aussi important que manger." } },
    { emoji: "👆",
      q: { es: "¿Qué dibujo tienes en la punta de los dedos que nadie más tiene igual?", ca: "Quin dibuix tens a la punta dels dits que ningú més té igual?", en: "What pattern do you have on your fingertips that nobody else has?", cs: "Jaký vzor máš na bříškách prstů, který nemá nikdo jiný?", fr: "Quel dessin as-tu au bout des doigts que personne d'autre n'a ?" },
      options: [
        { es: "Estrellitas", ca: "Estrelletes", en: "Little stars", cs: "Hvězdičky", fr: "Des petites étoiles" },
        { es: "Rayas de cebra", ca: "Ratlles de zebra", en: "Zebra stripes", cs: "Zebří pruhy", fr: "Des rayures de zèbre" },
        { es: "Las huellas dactilares", ca: "Les empremtes dactilars", en: "Fingerprints", cs: "Otisky prstů", fr: "Les empreintes digitales" },
        { es: "Lunares de colores", ca: "Pics de colors", en: "Colourful dots", cs: "Barevné puntíky", fr: "Des pois colorés" }],
      answer: 2,
      explanation: { es: "Tus huellas dactilares son únicas en el mundo: ni siquiera los gemelos las tienen iguales.", ca: "Les teves empremtes dactilars són úniques al món: ni tan sols els bessons les tenen iguals.", en: "Your fingerprints are unique in the world: not even twins have the same ones.", cs: "Tvoje otisky prstů jsou jediné na světě: stejné nemají ani jednovaječná dvojčata.", fr: "Tes empreintes digitales sont uniques au monde : même les jumeaux n'ont pas les mêmes." } }
  ],

  /* ---------- ALFABETO ---------- */
  alphabet: [
    { letter: "A", emoji: "🩸", item: { es: "Arteria", ca: "Artèria", en: "Artery", cs: "Artérie", fr: "Artère" },
      fact: { es: "Las arterias son tuberías que llevan la sangre desde el corazón.", ca: "Les artèries són canonades que porten la sang des del cor.", en: "Arteries are pipes that carry blood from the heart.", cs: "Artérie jsou trubky, které vedou krev ze srdce.", fr: "Les artères sont des tuyaux qui portent le sang depuis le cœur." } },
    { letter: "B", emoji: "👄", item: { es: "Boca", ca: "Boca", en: "Bones", cs: "Bříško", fr: "Bouche" },
      fact: { es: "En la boca empieza el viaje de la comida. ¡Y también las sonrisas!", ca: "A la boca comença el viatge del menjar. I també els somriures!", en: "You have 206 bones and each one has a name.", cs: "V bříšku se jídlo míchá jako v mixéru.", fr: "Dans la bouche commence le voyage de la nourriture. Et aussi les sourires !" } },
    { letter: "C", emoji: "❤️", item: { es: "Corazón", ca: "Cor", en: "Cells", cs: "Cévy", fr: "Cœur" },
      fact: { es: "Tu corazón es del tamaño de tu puño y late día y noche.", ca: "El teu cor és de la mida del teu puny i batega dia i nit.", en: "Your whole body is made of tiny cells, like bricks of life.", cs: "Cévy jsou trubičky, kterými proudí krev po celém těle.", fr: "Ton cœur est de la taille de ton poing et bat jour et nuit." } },
    { letter: "D", emoji: "🦷", item: { es: "Dientes", ca: "Dents", en: "Digestion", cs: "Dech", fr: "Dents" },
      fact: { es: "Los dientes trocean la comida. El esmalte es lo más duro del cuerpo.", ca: "Les dents trossegen el menjar. L'esmalt és el més dur del cos.", en: "Digestion turns your food into energy for playing and growing.", cs: "Dech přináší vzduch do plic. Zhluboka se nadechni!", fr: "Les dents coupent la nourriture. L'émail est la partie la plus dure du corps." } },
    { letter: "E", emoji: "💀", item: { es: "Esqueleto", ca: "Esquelet", en: "Ears", cs: "Energie", fr: "Estomac" },
      fact: { es: "El esqueleto es la percha que te mantiene de pie.", ca: "L'esquelet és el penjador que et manté dret.", en: "Your ears hear sounds and also help you keep your balance.", cs: "Energii získáváš z jídla, spánku a pohybu.", fr: "L'estomac mélange la nourriture comme un mixeur." } },
    { letter: "F", emoji: "🦴", item: { es: "Fémur", ca: "Fèmur", en: "Femur", cs: "Femur", fr: "Fémur" },
      fact: { es: "El fémur, en el muslo, es el hueso más largo y fuerte que tienes.", ca: "El fèmur, a la cuixa, és l'os més llarg i fort que tens.", en: "The femur, in your thigh, is your longest and strongest bone.", cs: "Femur, stehenní kost, je tvoje nejdelší a nejsilnější kost.", fr: "Le fémur, dans la cuisse, est ton os le plus long et le plus fort." } },
    { letter: "G", emoji: "🔴", item: { es: "Glóbulos", ca: "Glòbuls", en: "Germs", cs: "Geny", fr: "Globules" },
      fact: { es: "Los glóbulos rojos reparten oxígeno; los blancos te defienden.", ca: "Els glòbuls vermells reparteixen oxigen; els blancs et defensen.", en: "Germs are tiny invaders. Washing your hands sends them away!", cs: "Geny jsou recept, podle kterého je postavené tvoje tělo.", fr: "Les globules rouges livrent l'oxygène ; les blancs te défendent." } },
    { letter: "H", emoji: "🦴", item: { es: "Huesos", ca: "Hidratar-se", en: "Heart", cs: "Hlava", fr: "Humérus" },
      fact: { es: "Los huesos son duros por fuera y esponjosos por dentro.", ca: "Hidratar-se és beure aigua: el teu cos la necessita per funcionar.", en: "Your heart is a pump the size of your fist. It never takes a day off!", cs: "Hlava nese mozek, oči, uši, nos i pusu. Pěkný náklad!", fr: "L'humérus est l'os du bras. Quand tu te cognes, ça fait des fourmis !" } },
    { letter: "I", emoji: "➰", item: { es: "Intestino", ca: "Intestí", en: "Intestine", cs: "Imunita", fr: "Intestin" },
      fact: { es: "El intestino mide unos siete metros enrollados en tu barriga.", ca: "L'intestí fa uns set metres enrotllats a la teva panxa.", en: "Your intestine is about seven metres long, coiled up in your tummy.", cs: "Imunita je tvoje vnitřní armáda proti bacilům.", fr: "L'intestin mesure environ sept mètres, enroulé dans ton ventre." } },
    { letter: "J", emoji: "⚽", item: { es: "Jugar", ca: "Jugar", en: "Joints", cs: "Játra", fr: "Jambes" },
      fact: { es: "Jugar y moverse hace fuertes los huesos y los músculos.", ca: "Jugar i moure's fa forts els ossos i els músculs.", en: "Joints are the hinges of your body: knees, elbows, fingers.", cs: "Játra jsou čistička tvého těla. Pracují potichu a pořád.", fr: "Les jambes te portent partout : courir, sauter, danser !" } },
    { letter: "K", emoji: "🛣️", item: { es: "Kilómetros de venas", ca: "Kilòmetres de venes", en: "Kidneys", cs: "Kosti", fr: "Kilomètres de veines" },
      fact: { es: "Tus vasos sanguíneos, puestos en fila, darían dos vueltas al mundo.", ca: "Els teus vasos sanguinis, posats en filera, farien dues voltes al món.", en: "Your kidneys clean your blood, like two little washing machines.", cs: "Kosti jsou tvoje vnitřní lešení: drží tě rovně.", fr: "Tes vaisseaux sanguins, mis en ligne, feraient deux fois le tour du monde." } },
    { letter: "L", emoji: "👅", item: { es: "Lengua", ca: "Llengua", en: "Lungs", cs: "Lebka", fr: "Langue" },
      fact: { es: "La lengua nota lo dulce, lo salado, lo ácido y lo amargo.", ca: "La llengua nota el dolç, el salat, l'àcid i l'amarg.", en: "Your lungs are two balloons that fill with air when you breathe.", cs: "Lebka je přirozená helma tvého mozku.", fr: "La langue sent le sucré, le salé, l'acide et l'amer." } },
    { letter: "M", emoji: "💪", item: { es: "Músculos", ca: "Músculs", en: "Muscles", cs: "Mozek", fr: "Muscles" },
      fact: { es: "Tienes más de 600 músculos y hasta sonreír los entrena.", ca: "Tens més de 600 músculs i fins i tot somriure els entrena.", en: "You have over 600 muscles, and even smiling trains them.", cs: "Mozek řídí celé tělo. A pracuje i ve spánku!", fr: "Tu as plus de 600 muscles, et même sourire les entraîne." } },
    { letter: "N", emoji: "👃", item: { es: "Nariz", ca: "Nas", en: "Nose", cs: "Nos", fr: "Nez" },
      fact: { es: "La nariz huele, calienta el aire y avisa si algo huele raro.", ca: "El nas olora, escalfa l'aire i avisa si alguna cosa fa mala olor.", en: "Your nose smells, warms up the air and warns you if something smells funny.", cs: "Nos voní, ohřívá vzduch a varuje, když něco divně páchne.", fr: "Le nez sent, réchauffe l'air et prévient si quelque chose sent bizarre." } },
    { letter: "O", emoji: "👀", item: { es: "Ojos", ca: "Orelles", en: "Organs", cs: "Oči", fr: "Oreilles" },
      fact: { es: "Los ojos parpadean miles de veces al día para limpiarse solos.", ca: "Les orelles senten els sons i també t'ajuden a mantenir l'equilibri.", en: "Organs are your body's machines: heart, lungs, brain and more.", cs: "Oči mrkají tisíckrát denně, aby se samy čistily.", fr: "Les oreilles entendent les sons et t'aident aussi à garder l'équilibre." } },
    { letter: "P", emoji: "🫁", item: { es: "Pulmones", ca: "Pulmons", en: "Pulse", cs: "Plíce", fr: "Poumons" },
      fact: { es: "Respiramos unas veinte mil veces al día sin darnos cuenta.", ca: "Respirem unes vint mil vegades al dia sense adonar-nos-en.", en: "Your pulse is your heart knocking. Feel it on your wrist!", cs: "Plíce se nadechnou asi dvacettisíckrát za den, aniž si toho všimneš.", fr: "On respire environ vingt mille fois par jour sans s'en rendre compte." } },
    { letter: "Q", emoji: "💅", item: { es: "Queratina", ca: "Queratina", en: "Quadriceps", cs: "Quadriceps", fr: "Quadriceps" },
      fact: { es: "Las uñas y el pelo están hechos de queratina y no duelen al cortarlos.", ca: "Les ungles i els cabells estan fets de queratina i no fan mal en tallar-los.", en: "The quadriceps is the big muscle in your thigh: your jumping engine.", cs: "Quadriceps je velký sval na stehně: tvůj motor na skákání.", fr: "Le quadriceps est le grand muscle de la cuisse : ton moteur à sauter." } },
    { letter: "R", emoji: "🫘", item: { es: "Riñones", ca: "Ronyons", en: "Ribs", cs: "Ruce", fr: "Reins" },
      fact: { es: "Los riñones limpian la sangre como dos lavadoras pequeñitas.", ca: "Els ronyons netegen la sang com dues rentadores petitones.", en: "Your ribs are a cage of bones that protects your heart and lungs.", cs: "Ruce mají 27 kostí každá. Proto umějí tolik věcí!", fr: "Les reins nettoient le sang comme deux petites machines à laver." } },
    { letter: "S", emoji: "🩸", item: { es: "Sangre", ca: "Sang", en: "Skin", cs: "Srdce", fr: "Squelette" },
      fact: { es: "La sangre reparte comida y oxígeno a todo el cuerpo sin parar.", ca: "La sang reparteix menjar i oxigen a tot el cos sense parar.", en: "Your skin is your biggest organ. It feels heat, cold and tickles!", cs: "Srdce je pumpa velká jako tvoje pěst. Nikdy nemá volno!", fr: "Le squelette est le portemanteau qui te tient debout." } },
    { letter: "T", emoji: "🖐️", item: { es: "Tacto", ca: "Tacte", en: "Teeth", cs: "Tep", fr: "Toucher" },
      fact: { es: "Con el tacto notas lo suave, lo áspero, lo frío y lo caliente.", ca: "Amb el tacte notes el suau, l'aspre, el fred i el calent.", en: "Teeth chop your food. Enamel is the hardest thing in your body!", cs: "Tep je klepání tvého srdce. Nahmatej si ho na zápěstí!", fr: "Avec le toucher, tu sens le doux, le rugueux, le froid et le chaud." } },
    { letter: "U", emoji: "💅", item: { es: "Uñas", ca: "Ungles", en: "Uvula", cs: "Ucho", fr: "Urine" },
      fact: { es: "Las uñas crecen despacito: unos tres milímetros al mes.", ca: "Les ungles creixen a poc a poc: uns tres mil·límetres al mes.", en: "The uvula is the little bell hanging at the back of your throat.", cs: "Ucho slyší zvuky a pomáhá ti držet rovnováhu.", fr: "L'urine, c'est la façon dont tes reins nettoient ton corps." } },
    { letter: "V", emoji: "🔵", item: { es: "Venas", ca: "Venes", en: "Veins", cs: "Vlasy", fr: "Veines" },
      fact: { es: "Las venas devuelven la sangre al corazón para dar otra vuelta.", ca: "Les venes tornen la sang al cor per fer una altra volta.", en: "Veins bring the blood back to the heart for another lap.", cs: "Vlasy rostou asi centimetr za měsíc. A nebolí je stříhání!", fr: "Les veines ramènent le sang au cœur pour un autre tour." } },
    { letter: "W", emoji: "💧", item: { es: "Wow: eres agua", ca: "Wow: ets aigua", en: "Water", cs: "Wow: jsi voda", fr: "Waouh : tu es de l'eau" },
      fact: { es: "Más de la mitad de tu cuerpo es agua. ¡Por eso hay que beber!", ca: "Més de la meitat del teu cos és aigua. Per això cal beure!", en: "More than half of your body is water. That is why you must drink!", cs: "Víc než polovina tvého těla je voda. Proto musíš pít!", fr: "Plus de la moitié de ton corps est de l'eau. C'est pour ça qu'il faut boire !" } },
    { letter: "X", emoji: "🩻", item: { es: "Rayos X", ca: "Raigs X", en: "X-rays", cs: "Rentgen (X)", fr: "Rayons X" },
      fact: { es: "Con rayos X, los médicos ven tus huesos como en una foto mágica.", ca: "Amb raigs X, els metges veuen els teus ossos com en una foto màgica.", en: "With X-rays, doctors see your bones like in a magic photo.", cs: "Rentgenem lékaři vidí tvoje kosti jako na kouzelné fotce.", fr: "Avec les rayons X, les médecins voient tes os comme sur une photo magique." } },
    { letter: "Y", emoji: "👆", item: { es: "Yemas de los dedos", ca: "Ioga", en: "Yawn", cs: "Yoga", fr: "Yeux" },
      fact: { es: "Tus huellas de las yemas son únicas en el mundo entero.", ca: "El ioga estira els músculs i calma la respiració.", en: "Yawns are contagious: reading this might make you yawn!", cs: "Yoga protahuje svaly a zklidňuje dech.", fr: "Tes yeux clignent des milliers de fois par jour pour se nettoyer." } },
    { letter: "Z", emoji: "😴", item: { es: "Zurdos y diestros", ca: "Zzz, dormir", en: "Zzz, sleep", cs: "Zuby", fr: "Zzz, le sommeil" },
      fact: { es: "Hay manos zurdas y diestras, y las dos son geniales.", ca: "Dormint, el cos creix i el cervell ordena el que ha après.", en: "While you sleep, your body grows and your brain tidies up the day.", cs: "Zuby krájejí jídlo. Sklovina je nejtvrdší část těla!", fr: "En dormant, ton corps grandit et ton cerveau range sa journée." } }
  ],

  /* ---------- FAMOSOS ---------- */
  famous: [
    { emoji: "🏛️", year: "-400", color: "#00838f", name: { es: "Hipócrates", ca: "Hipòcrates", en: "Hippocrates", cs: "Hippokratés", fr: "Hippocrate" },
      achievement: { es: "El médico más famoso de la antigua Grecia.", ca: "El metge més famós de l'antiga Grècia.", en: "The most famous doctor of ancient Greece.", cs: "Nejslavnější lékař starého Řecka.", fr: "Le médecin le plus célèbre de la Grèce antique." },
      quote: { es: "Lo primero es no hacer daño.", ca: "El primer és no fer mal.", en: "First, do no harm.", cs: "Především neškodit.", fr: "D'abord, ne pas faire de mal." } },
    { emoji: "📚", year: "1543", color: "#5d4037", name: { es: "Andreas Vesalio", ca: "Andreas Vesal", en: "Andreas Vesalius", cs: "Andreas Vesalius", fr: "André Vésale" },
      achievement: { es: "Dibujó el primer gran mapa del cuerpo humano.", ca: "Va dibuixar el primer gran mapa del cos humà.", en: "He drew the first great map of the human body.", cs: "Nakreslil první velkou mapu lidského těla.", fr: "Il a dessiné la première grande carte du corps humain." },
      quote: { es: "Para entender el cuerpo, primero hay que mirarlo bien.", ca: "Per entendre el cos, primer cal mirar-lo bé.", en: "To understand the body, first you must look at it closely.", cs: "Abys tělu porozuměla, musíš se na něj nejdřív pořádně podívat.", fr: "Pour comprendre le corps, il faut d'abord bien le regarder." } },
    { emoji: "🧠", year: "1906", color: "#5e35b1", name: { es: "Santiago Ramón y Cajal", ca: "Santiago Ramón y Cajal", en: "Santiago Ramón y Cajal", cs: "Santiago Ramón y Cajal", fr: "Santiago Ramón y Cajal" },
      achievement: { es: "Descubrió que el cerebro está hecho de neuronas, como un bosque de arbolitos.", ca: "Va descobrir que el cervell està fet de neurones, com un bosc d'arbrets.", en: "He discovered the brain is made of neurons, like a forest of little trees.", cs: "Objevil, že mozek je z neuronů, jako les malých stromků.", fr: "Il a découvert que le cerveau est fait de neurones, comme une forêt de petits arbres." },
      quote: { es: "Todo niño puede ser, si quiere, escultor de su propio cerebro.", ca: "Tot nen pot ser, si vol, escultor del seu propi cervell.", en: "Every child can be, if they want, the sculptor of their own brain.", cs: "Každé dítě může být, když chce, sochařem svého vlastního mozku.", fr: "Chaque enfant peut être, s'il le veut, le sculpteur de son propre cerveau." } },
    { emoji: "⚗️", year: "1903", color: "#00695c", name: { es: "Marie Curie", ca: "Marie Curie", en: "Marie Curie", cs: "Marie Curie-Skłodowská", fr: "Marie Curie" },
      achievement: { es: "Sus descubrimientos ayudan a los médicos a ver dentro del cuerpo y curar.", ca: "Els seus descobriments ajuden els metges a veure dins del cos i curar.", en: "Her discoveries help doctors see inside the body and heal people.", cs: "Její objevy pomáhají lékařům vidět dovnitř těla a léčit.", fr: "Ses découvertes aident les médecins à voir dans le corps et à guérir." },
      quote: { es: "En la vida no hay nada que temer, solo cosas que comprender.", ca: "A la vida no hi ha res a témer, només coses a comprendre.", en: "Nothing in life is to be feared, only understood.", cs: "V životě se není čeho bát, jen je třeba všemu porozumět.", fr: "Dans la vie, rien n'est à craindre, tout est à comprendre." } },
    { emoji: "🧫", year: "1928", color: "#33691e", name: { es: "Alexander Fleming", ca: "Alexander Fleming", en: "Alexander Fleming", cs: "Alexander Fleming", fr: "Alexander Fleming" },
      achievement: { es: "Descubrió la penicilina por accidente, ¡en un plato olvidado!", ca: "Va descobrir la penicil·lina per accident, en un plat oblidat!", en: "He discovered penicillin by accident, in a forgotten dish!", cs: "Objevil penicilin náhodou, v zapomenuté misce!", fr: "Il a découvert la pénicilline par accident, dans une boîte oubliée !" },
      quote: { es: "A veces se encuentra lo que no se estaba buscando.", ca: "De vegades es troba el que no s'estava buscant.", en: "Sometimes you find what you were not looking for.", cs: "Někdy najdeš to, co jsi vůbec nehledala.", fr: "Parfois, on trouve ce qu'on ne cherchait pas." } },
    { emoji: "🎓", year: "1849", color: "#ad1457", name: { es: "Elizabeth Blackwell", ca: "Elizabeth Blackwell", en: "Elizabeth Blackwell", cs: "Elizabeth Blackwellová", fr: "Elizabeth Blackwell" },
      achievement: { es: "La primera mujer médica de la era moderna. Nadie creía que podría, y pudo.", ca: "La primera dona metgessa de l'era moderna. Ningú no creia que podria, i va poder.", en: "The first woman doctor of modern times. Nobody believed she could, and she did.", cs: "První lékařka moderní doby. Nikdo nevěřil, že to dokáže, a dokázala to.", fr: "La première femme médecin des temps modernes. Personne n'y croyait, et elle l'a fait." },
      quote: { es: "Si algo es imposible, razón de más para intentarlo.", ca: "Si una cosa és impossible, raó de més per intentar-ho.", en: "If something is impossible, all the more reason to try.", cs: "Když je něco nemožné, tím spíš to zkus.", fr: "Si c'est impossible, raison de plus pour essayer." } }
  ],

  childDream: {
    girl: { es: "Doctora que cuida personas y robots", ca: "Doctora que cuida persones i robots", en: "Doctor who cares for people and robots", cs: "Doktorka, která léčí lidi i roboty", fr: "Docteure qui soigne les gens et les robots" },
    boy: { es: "Doctor que cuida personas y robots", ca: "Doctor que cuida persones i robots", en: "Doctor who cares for people and robots", cs: "Doktor, který léčí lidi i roboty", fr: "Docteur qui soigne les gens et les robots" },
    kid: { es: "Peque que cuida personas y robots", ca: "Menut que cuida persones i robots", en: "Kid who cares for people and robots", cs: "Dítě, které léčí lidi i roboty", fr: "Enfant qui soigne les gens et les robots" }
  },
  childQuote: { es: "Cuando sea mayor curaré con ciencia y con sonrisas. ¡Las dos funcionan!", ca: "Quan sigui gran curaré amb ciència i amb somriures. Totes dues funcionen!", en: "When I grow up I will heal with science and with smiles. Both work!", cs: "Až vyrostu, budu léčit vědou a úsměvy. Obojí funguje!", fr: "Quand je serai grand, je soignerai avec la science et les sourires. Les deux marchent !" },

  /* ---------- MATES ---------- */
  mathEmojis: ["❤️", "🦴", "🧠", "💪", "🦷", "🩸"],

  /* ---------- CONSTRUCTOR: crea tu personaje ---------- */
  builder: {
    title: { es: "¡Hazte médico o enfermera!", ca: "Fes-te metge o infermera!", en: "Become a doctor or a nurse!", cs: "Staň se doktorem nebo sestřičkou!", fr: "Deviens médecin ou infirmière !" },
    thing: { es: "equipo médico", ca: "equip mèdic", en: "medical outfit", cs: "lékařská výbava", fr: "tenue médicale" },
    parts: [
      { id: "uniform", label: { es: "El uniforme", ca: "L'uniforme", en: "The uniform", cs: "Uniforma", fr: "L'uniforme" },
        options: [{ id: "bata", v: "bata", icon: "🥼" }, { id: "pijama", v: "pijama", icon: "👕" }, { id: "quirofano", v: "quirofano", icon: "😷" }] },
      { id: "ucolor", label: { es: "Color del uniforme", ca: "Color de l'uniforme", en: "Uniform colour", cs: "Barva uniformy", fr: "Couleur de l'uniforme" },
        options: [{ id: "blue", v: "#64b5f6" }, { id: "green", v: "#81c784" }, { id: "pink", v: "#f48fb1" }, { id: "lila", v: "#b39ddb" }] },
      { id: "head", label: { es: "En la cabeza", ca: "Al cap", en: "On the head", cs: "Na hlavě", fr: "Sur la tête" },
        options: [{ id: "gorro", v: "gorro", icon: "🧢" }, { id: "espejo", v: "espejo", icon: "🔦" }, { id: "nada", v: "nada", icon: "🙂" }] },
      { id: "tool", label: { es: "El instrumento", ca: "L'instrument", en: "The instrument", cs: "Nástroj", fr: "L'instrument" },
        options: [{ id: "fonendo", v: "fonendo", icon: "🩺" }, { id: "jeringa", v: "jeringa", icon: "💉" }, { id: "termometro", v: "termometro", icon: "🌡️" }, { id: "maletin", v: "maletin", icon: "🧰" }] }
    ],
    svg(sel) {
      const skin = (typeof SKIN_TONES !== "undefined" && SKIN_TONES[S.child.skin]) || "#f6d5b8";
      const hair = (typeof HAIR_COLORS !== "undefined" && HAIR_COLORS[S.child.hair]) || "#5d4037";
      const uc = sel.ucolor || "#64b5f6";
      const uni = sel.uniform || "bata";
      // torso según el uniforme
      let torso = "";
      if (uni === "bata") {
        torso = `<path d="M40 62 Q60 70 80 62 L84 112 L36 112 Z" fill="${uc}"/>
          <path d="M36 62 L48 60 L52 112 L34 112 Z" fill="#fff" stroke="#d5dbe2" stroke-width="1.4"/>
          <path d="M84 62 L72 60 L68 112 L86 112 Z" fill="#fff" stroke="#d5dbe2" stroke-width="1.4"/>
          <path d="M48 60 L54 70 L60 62 L66 70 L72 60" fill="none" stroke="#d5dbe2" stroke-width="1.4"/>
          <rect x="70" y="88" width="13" height="12" rx="2" fill="#fff" stroke="#d5dbe2" stroke-width="1.2"/>`;
      } else if (uni === "quirofano") {
        torso = `<path d="M38 62 L50 60 L60 70 L70 60 L82 62 L86 112 L34 112 Z" fill="${uc}"/>
          <path d="M50 60 L60 70 L70 60" fill="none" stroke="rgba(0,0,0,.25)" stroke-width="2"/>`;
      } else {
        torso = `<path d="M38 62 L50 60 L60 68 L70 60 L82 62 L86 112 L34 112 Z" fill="${uc}"/>
          <path d="M50 60 L60 68 L70 60" fill="none" stroke="rgba(0,0,0,.22)" stroke-width="2"/>
          <rect x="66" y="86" width="14" height="11" rx="2" fill="rgba(255,255,255,.55)"/>`;
      }
      // cruz sanitaria en el pecho
      const cruz = `<g transform="translate(46 84)"><rect x="-2" y="-7" width="5" height="15" rx="1.6" fill="#e53935"/><rect x="-7" y="-2" width="15" height="5" rx="1.6" fill="#e53935"/></g>`;
      // cabeza: pelo o gorro / espejo frontal
      let peloOGorro = `<path d="M40 32 Q40 12 60 12 Q80 12 80 32 L80 26 Q60 16 40 26 Z" fill="${hair}"/>`;
      if (sel.head === "gorro") peloOGorro = `<path d="M38 30 Q38 10 60 10 Q82 10 82 30 L82 34 L38 34 Z" fill="${uc}" stroke="rgba(0,0,0,.2)" stroke-width="1.6"/><circle cx="50" cy="20" r="1.8" fill="#fff"/><circle cx="62" cy="16" r="1.8" fill="#fff"/><circle cx="72" cy="22" r="1.8" fill="#fff"/>`;
      if (sel.head === "espejo") peloOGorro = `<path d="M40 32 Q40 12 60 12 Q80 12 80 32 L80 26 Q60 16 40 26 Z" fill="${hair}"/>
        <path d="M40 24 Q60 12 80 24" fill="none" stroke="#78909c" stroke-width="4"/>
        <circle cx="60" cy="14" r="7" fill="#cfd8dc" stroke="#78909c" stroke-width="2"/><circle cx="58" cy="12" r="2.4" fill="#fff"/>`;
      // cara: mascarilla en quirófano, sonrisa si no
      const cara = uni === "quirofano"
        ? `<path d="M46 42 Q60 38 74 42 L72 56 Q60 62 48 56 Z" fill="#fff" opacity=".92"/><path d="M46 42 L40 38 M74 42 L80 38" stroke="#fff" stroke-width="2"/>
           <circle cx="52" cy="36" r="3" fill="#37474f"/><circle cx="68" cy="36" r="3" fill="#37474f"/>`
        : `<circle cx="52" cy="38" r="3" fill="#37474f"/><circle cx="68" cy="38" r="3" fill="#37474f"/>
           <circle cx="47" cy="45" r="2.8" fill="#f48fb1" opacity=".7"/><circle cx="73" cy="45" r="2.8" fill="#f48fb1" opacity=".7"/>
           <path d="M52 48 Q60 55 68 48" stroke="#a1665e" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;
      // instrumento elegido
      let tool = "";
      if (sel.tool === "fonendo" || !sel.tool) {
        tool = `<path d="M50 62 Q50 80 60 84 Q70 80 70 62" fill="none" stroke="#37474f" stroke-width="3"/>
          <circle cx="60" cy="88" r="6.4" fill="#78909c" stroke="#37474f" stroke-width="2"/><circle cx="60" cy="88" r="3" fill="#b0bec5"/>`;
      } else if (sel.tool === "jeringa") {
        tool = `<g transform="translate(88 78) rotate(-30)"><rect x="0" y="0" width="22" height="8" rx="2" fill="#e3f2fd" stroke="#78909c" stroke-width="1.6"/><rect x="-6" y="2" width="6" height="4" fill="#78909c"/><line x1="22" y1="4" x2="32" y2="4" stroke="#78909c" stroke-width="2"/><rect x="3" y="-3" width="3" height="14" fill="#78909c"/></g>`;
      } else if (sel.tool === "termometro") {
        tool = `<g transform="translate(88 74) rotate(-24)"><rect x="0" y="0" width="26" height="7" rx="3.5" fill="#fff" stroke="#78909c" stroke-width="1.6"/><circle cx="3.5" cy="3.5" r="4.4" fill="#e53935"/><line x1="10" y1="3.5" x2="22" y2="3.5" stroke="#e53935" stroke-width="2.4"/></g>`;
      } else if (sel.tool === "maletin") {
        tool = `<g transform="translate(90 104)"><rect x="0" y="0" width="26" height="18" rx="4" fill="#fff" stroke="#b0bec5" stroke-width="2"/><rect x="9" y="-5" width="8" height="6" rx="2" fill="none" stroke="#b0bec5" stroke-width="2"/><rect x="11" y="4" width="4" height="10" rx="1.4" fill="#e53935"/><rect x="8" y="7" width="10" height="4" rx="1.4" fill="#e53935"/></g>`;
      }
      const pant = uni === "bata" ? "#546e7a" : uc;
      return `<svg viewBox="0 0 124 150" width="200" height="242">
        <rect x="42" y="112" width="14" height="26" rx="6" fill="${pant}"/>
        <rect x="64" y="112" width="14" height="26" rx="6" fill="${pant}"/>
        <path d="M40 136 Q38 146 48 146 L58 144 L58 137 Z" fill="#fff" stroke="#cfd8dc" stroke-width="1.4"/>
        <path d="M80 136 Q82 146 72 146 L62 144 L62 137 Z" fill="#fff" stroke="#cfd8dc" stroke-width="1.4"/>
        ${torso}
        <rect x="30" y="64" width="9" height="26" rx="4.5" fill="${uni === "bata" ? "#fff" : uc}"/>
        <rect x="81" y="64" width="9" height="26" rx="4.5" fill="${uni === "bata" ? "#fff" : uc}"/>
        <circle cx="34.5" cy="94" r="5" fill="${skin}"/>
        <circle cx="85.5" cy="94" r="5" fill="${skin}"/>
        <circle cx="60" cy="36" r="22" fill="${skin}"/>
        ${peloOGorro}
        ${cara}
        ${cruz}
        ${tool}
      </svg>`;
    }
  }
};
