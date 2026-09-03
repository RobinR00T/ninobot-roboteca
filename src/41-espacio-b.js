"use strict";
/* ============================================================
   Contenido del ESPACIO (parte B): historias ramificadas,
   canciones, traductor, mapa de exploración y charla.
   ============================================================ */

Object.assign(THEMES.espacio.content, {

  /* ---------- HISTORIAS (ramifican de verdad) ---------- */
  stories: [
    {
      id: "cristal", emoji: "💎", start: "n1",
      title: { es: "El cristal de las estrellas", ca: "El cristall de les estrelles", en: "The Star Crystal", cs: "Hvězdný krystal", fr: "Le cristal des étoiles" },
      nodes: {
        n1: {
          text: { es: "¡{name}! Ha llegado un mensaje urgente: el Cristal de las Estrellas ha perdido su brillo y las estrellas se están apagando poquito a poco. ¡Tenemos que ayudar!", ca: "{name}! Ha arribat un missatge urgent: el Cristall de les Estrelles ha perdut la seva brillantor i les estrelles s'estan apagant a poc a poc. Hem d'ajudar!", en: "{name}! An urgent message just arrived: the Star Crystal has lost its shine and the stars are slowly going out. We have to help!", cs: "{name}! Přišla naléhavá zpráva: Hvězdný krystal ztratil svůj lesk a hvězdy pomalu zhasínají. Musíme pomoct!", fr: "{name} ! Un message urgent vient d'arriver : le Cristal des étoiles a perdu son éclat et les étoiles s'éteignent tout doucement. Il faut les aider !" },
          choices: [
            { t: { es: "¡Vamos en el cohete rápido!", ca: "Anem amb el coet ràpid!", en: "Let's take the fast rocket!", cs: "Poletíme rychlou raketou!", fr: "On prend la fusée rapide !" }, go: "n2a" },
            { t: { es: "Mejor la nave tranquila con telescopio", ca: "Millor la nau tranquil·la amb telescopi", en: "Better the calm ship with the telescope", cs: "Radši klidnou loď s teleskopem", fr: "Plutôt le vaisseau tranquille avec le télescope" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "¡Fiuuum! Vais zumbando entre asteroides. De repente, un asteroide pequeñito llora: se ha perdido y no encuentra a su familia.", ca: "Fiuuum! Aneu brunzint entre asteroides. De sobte, un asteroide petitó plora: s'ha perdut i no troba la seva família.", en: "Whoosh! You zoom between asteroids. Suddenly a tiny asteroid is crying: it got lost and cannot find its family.", cs: "Fíííú! Svištíte mezi asteroidy. Najednou pláče maličký asteroid: ztratil se a nemůže najít svou rodinu.", fr: "Fiouuum ! Vous filez entre les astéroïdes. Soudain, un tout petit astéroïde pleure : il s'est perdu et ne retrouve plus sa famille." },
          choices: [
            { t: { es: "Paramos a ayudarlo", ca: "Parem per ajudar-lo", en: "We stop to help it", cs: "Zastavíme a pomůžeme mu", fr: "On s'arrête pour l'aider" }, go: "n3a" },
            { t: { es: "Seguimos, ¡el cristal nos necesita!", ca: "Seguim, el cristall ens necessita!", en: "We keep going, the crystal needs us!", cs: "Letíme dál, krystal nás potřebuje!", fr: "On continue, le cristal a besoin de nous !" }, go: "n3b" }
          ]
        },
        n2b: {
          text: { es: "Con el telescopio descubrís un mapa dibujado en las estrellas: hay un atajo que pasa por la Nebulosa de Algodón.", ca: "Amb el telescopi descobriu un mapa dibuixat a les estrelles: hi ha una drecera que passa per la Nebulosa de Cotó.", en: "With the telescope you discover a map drawn in the stars: there is a shortcut through the Cotton Nebula.", cs: "Teleskopem objevíte mapu nakreslenou ve hvězdách: existuje zkratka přes Bavlnkovou mlhovinu.", fr: "Avec le télescope, vous découvrez une carte dessinée dans les étoiles : il y a un raccourci par la Nébuleuse de Coton." },
          choices: [
            { t: { es: "¡Por el atajo!", ca: "Per la drecera!", en: "Take the shortcut!", cs: "Zkratkou!", fr: "Par le raccourci !" }, go: "n3c" },
            { t: { es: "Por el camino de siempre", ca: "Pel camí de sempre", en: "The usual way", cs: "Obvyklou cestou", fr: "Par le chemin habituel" }, go: "n3b" }
          ]
        },
        n3a: {
          text: { es: "Lleváis al asteroide con su familia. Su abuela, agradecida, os regala un puñado de polvo de estrellas: ¡brilla muchísimo! Con él llegáis volando al cristal.", ca: "Porteu l'asteroide amb la seva família. La seva àvia, agraïda, us regala un grapat de pols d'estrelles: brilla moltíssim! Amb ell arribeu volant al cristall.", en: "You bring the asteroid back to its family. Its grateful granny gives you a handful of stardust: it sparkles so much! With it you fly straight to the crystal.", cs: "Odvezete asteroid k jeho rodině. Vděčná babička vám daruje hrst hvězdného prachu: nádherně se třpytí! S ním doletíte rovnou ke krystalu.", fr: "Vous ramenez l'astéroïde à sa famille. Sa mamie, reconnaissante, vous offre une poignée de poussière d'étoiles : ça brille très fort ! Avec elle, vous volez droit vers le cristal." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n3b: {
          text: { es: "Viajáis por el camino largo. Tardáis un poquito más y llegáis con las pilas medio gastadas, pero llegáis. El cristal os espera, gris y triste.", ca: "Viatgeu pel camí llarg. Trigueu una mica més i arribeu amb les piles mig gastades, però arribeu. El cristall us espera, gris i trist.", en: "You travel the long way. It takes a bit longer and your batteries are half empty, but you make it. The crystal is waiting, grey and sad.", cs: "Letíte dlouhou cestou. Trvá to o chvilku déle a baterky máte napůl vybité, ale doletíte. Krystal na vás čeká, šedý a smutný.", fr: "Vous prenez le long chemin. C'est un peu plus long et vos batteries sont à moitié vides, mais vous y arrivez. Le cristal vous attend, gris et triste." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n3c: {
          text: { es: "¡La Nebulosa de Algodón huele a algodón de azúcar y hace cosquillas! Salís por el otro lado riendo a carcajadas, justo delante del cristal.", ca: "La Nebulosa de Cotó fa olor de cotó de sucre i fa pessigolles! Sortiu per l'altre costat rient a cor què vols, just davant del cristall.", en: "The Cotton Nebula smells like cotton candy and it tickles! You come out the other side laughing out loud, right in front of the crystal.", cs: "Bavlnková mlhovina voní jako cukrová vata a lechtá! Vyletíte na druhé straně a smějete se na celé kolo, přímo před krystalem.", fr: "La Nébuleuse de Coton sent la barbe à papa et elle chatouille ! Vous sortez de l'autre côté en riant aux éclats, juste devant le cristal." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n4: {
          text: { es: "El cristal susurra: solo vuelvo a brillar cuando alguien comparte algo bonito de verdad. ¿Qué le regalamos, {name}?", ca: "El cristall xiuxiueja: només torno a brillar quan algú comparteix una cosa bonica de debò. Què li regalem, {name}?", en: "The crystal whispers: I only shine again when someone shares something truly lovely. What shall we give it, {name}?", cs: "Krystal šeptá: znovu zazářím, jen když se někdo podělí o něco opravdu krásného. Co mu darujeme, {name}?", fr: "Le cristal murmure : je ne brille à nouveau que si quelqu'un partage quelque chose de vraiment beau. Qu'est-ce qu'on lui offre, {name} ?" },
          choices: [
            { t: { es: "¡Le cantamos una canción!", ca: "Li cantem una cançó!", en: "We sing it a song!", cs: "Zazpíváme mu písničku!", fr: "On lui chante une chanson !" }, go: "e1" },
            { t: { es: "Le contamos a quién queremos mucho", ca: "Li expliquem a qui estimem molt", en: "We tell it who we love a lot", cs: "Řekneme mu, koho máme moc rádi", fr: "On lui dit qui on aime très fort" }, go: "e2" }
          ]
        },
        e1: {
          end: true,
          text: { es: "Cantáis juntos, y el cristal se enciende de mil colores siguiendo el ritmo. ¡Las estrellas vuelven a brillar en todo el cielo! Lo has conseguido, {name}: la alegría compartida ilumina el universo.", ca: "Canteu junts, i el cristall s'encén de mil colors seguint el ritme. Les estrelles tornen a brillar per tot el cel! Ho has aconseguit, {name}: l'alegria compartida il·lumina l'univers.", en: "You sing together, and the crystal lights up in a thousand colours following the beat. The stars shine again across the whole sky! You did it, {name}: shared joy lights up the universe.", cs: "Zpíváte spolu a krystal se rozsvítí tisíci barvami do rytmu. Hvězdy znovu září po celém nebi! Dokázala jsi to, {name}: sdílená radost rozsvěcuje vesmír.", fr: "Vous chantez ensemble, et le cristal s'allume de mille couleurs en suivant le rythme. Les étoiles brillent à nouveau dans tout le ciel ! Tu as réussi, {name} : la joie partagée illumine l'univers." }
        },
        e2: {
          end: true,
          text: { es: "{name} cuenta bajito a quién quiere mucho... y el cristal se pone calentito y rosa, y brilla más que nunca. ¡Las estrellas despiertan! El cariño es la luz más fuerte del universo.", ca: "{name} explica fluixet a qui estima molt... i el cristall es posa calentó i rosa, i brilla més que mai. Les estrelles es desperten! L'estima és la llum més forta de l'univers.", en: "{name} whispers who they love a lot... and the crystal turns warm and pink, shining brighter than ever. The stars wake up! Love is the strongest light in the universe.", cs: "{name} potichu poví, koho má moc ráda... a krystal zrůžoví, zahřeje se a září víc než kdy dřív. Hvězdy se probouzejí! Láska je nejsilnější světlo ve vesmíru.", fr: "{name} chuchote qui il aime très fort... et le cristal devient tout chaud et rose, et brille plus que jamais. Les étoiles se réveillent ! L'amour est la lumière la plus forte de l'univers." }
        }
      }
    },
    {
      id: "fiesta", emoji: "🎉", start: "n1",
      title: { es: "La fiesta de los planetas", ca: "La festa dels planetes", en: "The Planet Party", cs: "Planetární oslava", fr: "La fête des planètes" },
      nodes: {
        n1: {
          text: { es: "¡Hoy es la gran fiesta de los planetas! Pero Saturno está llorando: no encuentra sus anillos de fiesta. Sin ellos no quiere bailar. ¿Por dónde empezamos a buscar, {name}?", ca: "Avui és la gran festa dels planetes! Però Saturn plora: no troba els seus anells de festa. Sense ells no vol ballar. Per on comencem a buscar, {name}?", en: "Today is the great planet party! But Saturn is crying: he cannot find his party rings. Without them he refuses to dance. Where do we start looking, {name}?", cs: "Dnes je velká planetární oslava! Ale Saturn pláče: nemůže najít své slavnostní prstence. Bez nich nechce tancovat. Kde začneme hledat, {name}?", fr: "Aujourd'hui, c'est la grande fête des planètes ! Mais Saturne pleure : il ne trouve plus ses anneaux de fête. Sans eux, il ne veut pas danser. Par où on commence à chercher, {name} ?" },
          choices: [
            { t: { es: "Buscamos en la Luna", ca: "Busquem a la Lluna", en: "Let's search on the Moon", cs: "Hledáme na Měsíci", fr: "Cherchons sur la Lune" }, go: "n2a" },
            { t: { es: "Preguntamos a los cometas", ca: "Preguntem als cometes", en: "Let's ask the comets", cs: "Zeptáme se komet", fr: "Demandons aux comètes" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "En la Luna encontráis unas huellas brillantes que van hasta un cráter... y dentro se oye música. ¿Qué hacemos?", ca: "A la Lluna trobeu unes petjades brillants que van fins a un cràter... i a dins se sent música. Què fem?", en: "On the Moon you find sparkly footprints leading to a crater... and there is music coming from inside. What do we do?", cs: "Na Měsíci najdete třpytivé stopy vedoucí ke kráteru... a zevnitř je slyšet hudba. Co uděláme?", fr: "Sur la Lune, vous trouvez des empreintes brillantes qui mènent à un cratère... et on entend de la musique à l'intérieur. Qu'est-ce qu'on fait ?" },
          choices: [
            { t: { es: "Entramos de puntillas", ca: "Entrem de puntetes", en: "We tiptoe inside", cs: "Vejdeme po špičkách", fr: "On entre sur la pointe des pieds" }, go: "n3a" },
            { t: { es: "Llamamos primero, toc toc", ca: "Truquem primer, toc toc", en: "We knock first, knock knock", cs: "Nejdřív zaklepeme, ťuk ťuk", fr: "On frappe d'abord, toc toc" }, go: "n3b" }
          ]
        },
        n2b: {
          text: { es: "Los cometas se ríen con su cola brillante: 'Vimos a la Luna con unos aros preciosos, ¡jugando al hula-hoop!'. Os llevan volando hasta su cráter, rapidísimo.", ca: "Els cometes riuen amb la seva cua brillant: 'Hem vist la Lluna amb uns cèrcols preciosos, jugant al hula-hoop!'. Us porten volant fins al seu cràter, rapidíssim.", en: "The comets giggle with their shiny tails: 'We saw the Moon with some gorgeous hoops, playing hula-hoop!'. They fly you to her crater super fast.", cs: "Komety se chichotají svými zářivými ocasy: 'Viděly jsme Měsíc s nádhernými kruhy, jak hraje hula-hop!'. Bleskově vás k jeho kráteru odnesou.", fr: "Les comètes rigolent avec leur queue brillante : « On a vu la Lune avec de superbes cerceaux, en train de jouer au hula-hoop ! ». Elles vous emmènent jusqu'à son cratère à toute vitesse." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n3a" }
          ]
        },
        n3a: {
          text: { es: "¡Ahí está! La Luna baila con los anillos de Saturno en la cintura. Al veros se pone roja como un tomate espacial: 'Solo quería aprender a bailar para la fiesta...'.", ca: "Aquí és! La Lluna balla amb els anells de Saturn a la cintura. En veure-us es posa vermella com un tomàquet espacial: 'Només volia aprendre a ballar per a la festa...'.", en: "There she is! The Moon is dancing with Saturn's rings around her waist. When she sees you she turns red like a space tomato: 'I just wanted to learn to dance for the party...'.", cs: "Tady je! Měsíc tančí se Saturnovými prstenci kolem pasu. Když vás uvidí, zčervená jako vesmírné rajče: 'Jen jsem se chtěl naučit tancovat na oslavu...'.", fr: "La voilà ! La Lune danse avec les anneaux de Saturne autour de la taille. En vous voyant, elle devient rouge comme une tomate spatiale : « Je voulais juste apprendre à danser pour la fête... »." },
          choices: [
            { t: { es: "¡Ven a la fiesta a bailar con todos!", ca: "Vine a la festa a ballar amb tothom!", en: "Come dance at the party with everyone!", cs: "Pojď na oslavu tancovat se všemi!", fr: "Viens danser à la fête avec tout le monde !" }, go: "e1" },
            { t: { es: "Primero hay que devolverlos y pedir perdón", ca: "Primer cal tornar-los i demanar perdó", en: "First we return them and say sorry", cs: "Nejdřív je vrátíme a omluvíme se", fr: "D'abord on les rend et on s'excuse" }, go: "e2" }
          ]
        },
        n3b: {
          text: { es: "Toc, toc. La Luna abre despacito con los anillos puestos y confiesa bajito: 'Los cogí prestados sin preguntar... quería aprender a bailar'. Se le escapa una lagrimita.", ca: "Toc, toc. La Lluna obre a poc a poc amb els anells posats i confessa fluixet: 'Els vaig agafar prestats sense preguntar... volia aprendre a ballar'. Se li escapa una llagrimeta.", en: "Knock, knock. The Moon slowly opens up wearing the rings and quietly confesses: 'I borrowed them without asking... I wanted to learn to dance'. A little tear slips out.", cs: "Ťuk, ťuk. Měsíc pomalu otevře s prstenci na sobě a potichu se přizná: 'Půjčil jsem si je bez dovolení... chtěl jsem se naučit tancovat'. Ukápne mu slzička.", fr: "Toc, toc. La Lune ouvre doucement avec les anneaux sur elle et avoue tout bas : « Je les ai empruntés sans demander... je voulais apprendre à danser ». Une petite larme s'échappe." },
          choices: [
            { t: { es: "¡Ven a la fiesta a bailar con todos!", ca: "Vine a la festa a ballar amb tothom!", en: "Come dance at the party with everyone!", cs: "Pojď na oslavu tancovat se všemi!", fr: "Viens danser à la fête avec tout le monde !" }, go: "e1" },
            { t: { es: "Primero hay que devolverlos y pedir perdón", ca: "Primer cal tornar-los i demanar perdó", en: "First we return them and say sorry", cs: "Nejdřív je vrátíme a omluvíme se", fr: "D'abord on les rend et on s'excuse" }, go: "e2" }
          ]
        },
        e1: {
          end: true,
          text: { es: "¡La fiesta es un exitazo! Saturno recupera sus anillos y baila con la Luna, que ya no baila sola. Todos aprenden algo: las cosas se piden por favor, ¡y bailar juntos es mucho mejor! Bien hecho, {name}.", ca: "La festa és un exitàs! Saturn recupera els seus anells i balla amb la Lluna, que ja no balla sola. Tothom aprèn una cosa: les coses es demanen si us plau, i ballar junts és molt millor! Ben fet, {name}.", en: "The party is a smash hit! Saturn gets his rings back and dances with the Moon, who no longer dances alone. Everyone learns something: you ask before borrowing, and dancing together is way better! Well done, {name}.", cs: "Oslava je obrovský úspěch! Saturn má zpátky své prstence a tančí s Měsícem, který už netančí sám. Všichni se něco naučili: o věci se prosí, a tancovat spolu je mnohem lepší! Výborně, {name}.", fr: "La fête est une grande réussite ! Saturne retrouve ses anneaux et danse avec la Lune, qui ne danse plus toute seule. Tout le monde apprend quelque chose : on demande avant d'emprunter, et danser ensemble c'est bien mieux ! Bravo, {name}." }
        },
        e2: {
          end: true,
          text: { es: "La Luna devuelve los anillos y pide perdón. Saturno la abraza: '¡Habérmelo pedido! Te presto uno pequeñito'. Y en la fiesta, la Luna baila con su anillo prestado, feliz. Pedir perdón también es de valientes, {name}.", ca: "La Lluna torna els anells i demana perdó. Saturn l'abraça: 'Haver-m'ho demanat! Te'n presto un de petitó'. I a la festa, la Lluna balla amb el seu anell prestat, feliç. Demanar perdó també és de valents, {name}.", en: "The Moon returns the rings and says sorry. Saturn hugs her: 'You could have just asked! I will lend you a little one'. And at the party, the Moon dances happily with her borrowed ring. Saying sorry is brave too, {name}.", cs: "Měsíc vrátí prstence a omluví se. Saturn ho obejme: 'Stačilo říct! Jeden malý ti půjčím'. A na oslavě Měsíc šťastně tančí se svým vypůjčeným prstencem. Omluvit se je taky odvaha, {name}.", fr: "La Lune rend les anneaux et s'excuse. Saturne la serre dans ses bras : « Il suffisait de demander ! Je t'en prête un petit ». Et à la fête, la Lune danse toute contente avec son anneau prêté. S'excuser aussi, c'est courageux, {name}." }
        }
      }
    },
    {
      id: "tesoro", emoji: "🗺️", start: "n1",
      title: { es: "El mapa del tesoro cósmico", ca: "El mapa del tresor còsmic", en: "The Cosmic Treasure Map", cs: "Mapa vesmírného pokladu", fr: "La carte au trésor cosmique" },
      nodes: {
        n1: {
          text: { es: "En un cajón de la nave aparece un mapa antiquísimo: ¡un tesoro escondido en el Sistema Solar! La primera pista dice: 'Busca donde el Sol quema más fuerte, en el primer planeta de la fila'.", ca: "En un calaix de la nau apareix un mapa antiquíssim: un tresor amagat al Sistema Solar! La primera pista diu: 'Busca on el Sol crema més fort, al primer planeta de la fila'.", en: "In a drawer of the ship you find a very old map: a treasure hidden in the Solar System! The first clue says: 'Look where the Sun burns strongest, on the first planet in line'.", cs: "V šuplíku lodi najdete prastarou mapu: poklad ukrytý ve sluneční soustavě! První nápověda říká: 'Hledej tam, kde Slunce pálí nejvíc, na první planetě v řadě'.", fr: "Dans un tiroir du vaisseau apparaît une très vieille carte : un trésor caché dans le Système solaire ! Le premier indice dit : « Cherche là où le Soleil brûle le plus fort, sur la première planète de la file »." },
          choices: [
            { t: { es: "¡A Mercurio!", ca: "A Mercuri!", en: "To Mercury!", cs: "Na Merkur!", fr: "Vers Mercure !" }, go: "n2a" },
            { t: { es: "¡A Neptuno!", ca: "A Neptú!", en: "To Neptune!", cs: "Na Neptun!", fr: "Vers Neptune !" }, go: "n2b" }
          ]
        },
        n2b: {
          text: { es: "¡Brrr! En Neptuno hace un frío tremendo. Unos pingüinos cósmicos os prestan bufandas y se ríen: 'El calorcito está en la otra punta, ¡en Mercurio!'. Media vuelta.", ca: "Brrr! A Neptú fa un fred tremend. Uns pingüins còsmics us presten bufandes i riuen: 'La caloreta és a l'altra punta, a Mercuri!'. Mitja volta.", en: "Brrr! Neptune is freezing cold. Some cosmic penguins lend you scarves and giggle: 'The warm spot is at the other end, on Mercury!'. Time to turn around.", cs: "Brrr! Na Neptunu je strašná zima. Vesmírní tučňáci vám půjčí šály a smějí se: 'Teploučko je na druhém konci, na Merkuru!'. Čelem vzad.", fr: "Brrr ! Sur Neptune, il fait un froid terrible. Des pingouins cosmiques vous prêtent des écharpes en rigolant : « La chaleur, c'est à l'autre bout, sur Mercure ! ». Demi-tour." },
          choices: [
            { t: { es: "¡A Mercurio!", ca: "A Mercuri!", en: "To Mercury!", cs: "Na Merkur!", fr: "Vers Mercure !" }, go: "n2a" }
          ]
        },
        n2a: {
          text: { es: "En Mercurio, debajo de una roca calentita, brilla la segunda pista: 'Ahora busca al gigante que presume de anillos'. ¡Qué fácil te lo ponen, {name}!", ca: "A Mercuri, sota una roca calentona, brilla la segona pista: 'Ara busca el gegant que presumeix d'anells'. Que fàcil t'ho posen, {name}!", en: "On Mercury, under a toasty rock, the second clue sparkles: 'Now find the giant who shows off his rings'. They are making it easy for you, {name}!", cs: "Na Merkuru se pod teplým kamenem třpytí druhá nápověda: 'Teď najdi obra, který se chlubí prstenci'. To ti ale usnadnili, {name}!", fr: "Sur Mercure, sous une roche bien chaude, brille le deuxième indice : « Maintenant, trouve le géant qui se vante de ses anneaux ». On te facilite la tâche, {name} !" },
          choices: [
            { t: { es: "¡A Saturno!", ca: "A Saturn!", en: "To Saturn!", cs: "Na Saturn!", fr: "Vers Saturne !" }, go: "n3" }
          ]
        },
        n3: {
          text: { es: "En los anillos de Saturno, patinando sobre el hielo, encontráis la última pista: 'El tesoro está en el planeta azul donde viven los niños y las niñas'. Hmm... ¡hay dos planetas azules!", ca: "Als anells de Saturn, patinant sobre el gel, trobeu l'última pista: 'El tresor és al planeta blau on viuen els nens i les nenes'. Hmm... hi ha dos planetes blaus!", en: "On Saturn's rings, skating on the ice, you find the last clue: 'The treasure is on the blue planet where children live'. Hmm... there are two blue planets!", cs: "Na Saturnových prstencích, při bruslení po ledu, najdete poslední nápovědu: 'Poklad je na modré planetě, kde žijí děti'. Hmm... modré planety jsou dvě!", fr: "Sur les anneaux de Saturne, en patinant sur la glace, vous trouvez le dernier indice : « Le trésor est sur la planète bleue où vivent les enfants ». Hmm... il y a deux planètes bleues !" },
          choices: [
            { t: { es: "¡A la Tierra!", ca: "A la Terra!", en: "To Earth!", cs: "Na Zemi!", fr: "Vers la Terre !" }, go: "e1" },
            { t: { es: "¡A Neptuno otra vez!", ca: "A Neptú un altre cop!", en: "To Neptune again!", cs: "Zase na Neptun!", fr: "Encore vers Neptune !" }, go: "n4b" }
          ]
        },
        n4b: {
          text: { es: "¡Otra vez Neptuno! Los pingüinos cósmicos se parten de risa: '¡Aquí no vive ningún niño, aquí solo vivimos nosotros!'. Os regalan un gorro de recuerdo y os señalan la Tierra.", ca: "Un altre cop Neptú! Els pingüins còsmics es parteixen de riure: 'Aquí no hi viu cap nen, aquí només hi vivim nosaltres!'. Us regalen un gorro de record i us assenyalen la Terra.", en: "Neptune again! The cosmic penguins burst out laughing: 'No kids live here, only us!'. They give you a souvenir hat and point at Earth.", cs: "Zase Neptun! Vesmírní tučňáci se popadají za břicho: 'Tady žádné děti nežijí, tady bydlíme jen my!'. Darují vám čepici na památku a ukážou na Zemi.", fr: "Encore Neptune ! Les pingouins cosmiques éclatent de rire : « Aucun enfant ne vit ici, il n'y a que nous ! ». Ils vous offrent un bonnet souvenir et vous montrent la Terre." },
          choices: [
            { t: { es: "¡A la Tierra!", ca: "A la Terra!", en: "To Earth!", cs: "Na Zemi!", fr: "Vers la Terre !" }, go: "e1" }
          ]
        },
        e1: {
          end: true,
          text: { es: "El mapa os guía por la Tierra hasta... ¡tu propia casa, {name}! Dentro del cofre hay un espejo que brilla. ¿Lo entiendes? El tesoro más valioso del universo eres tú: tu curiosidad y tus ganas de aprender. ¡Guárdalo siempre!", ca: "El mapa us guia per la Terra fins a... casa teva, {name}! Dins del cofre hi ha un mirall que brilla. Ho entens? El tresor més valuós de l'univers ets tu: la teva curiositat i les teves ganes d'aprendre. Guarda'l sempre!", en: "The map leads you across Earth to... your own home, {name}! Inside the chest there is a shining mirror. Do you get it? The most precious treasure in the universe is you: your curiosity and your love of learning. Keep it forever!", cs: "Mapa vás vede po Zemi až... k tobě domů, {name}! V truhle je zářící zrcadlo. Chápeš to? Nejcennější poklad vesmíru jsi ty: tvoje zvědavost a chuť se učit. Opatruj ho navždy!", fr: "La carte vous guide sur la Terre jusqu'à... ta propre maison, {name} ! Dans le coffre, il y a un miroir qui brille. Tu comprends ? Le trésor le plus précieux de l'univers, c'est toi : ta curiosité et ton envie d'apprendre. Garde-le pour toujours !" }
        }
      }
    }
  ],

  /* ---------- KARAOKE ---------- */
  songs: [
    { emoji: "⭐",
      title: { es: "Brilla estrellita", ca: "Brilla estrelleta", en: "Twinkle Little Star", cs: "Hvězdičko, zablikej", fr: "Brille petite étoile" },
      lines: [
        { es: "Brilla, brilla, estrellita,", ca: "Brilla, brilla, estrelleta,", en: "Twinkle, twinkle, little star,", cs: "Blikej, blikej, hvězdičko,", fr: "Brille, brille, petite étoile," },
        { es: "en el cielo tan bonita.", ca: "al cel ets tan bonica.", en: "shining brightly where you are.", cs: "na nebi jsi hvězdičko.", fr: "dans le ciel si belle étoile." },
        { es: "Sobre el mundo, gira y va,", ca: "Sobre el món, gira i va,", en: "Up above the world so high,", cs: "Nad světem se točí dál,", fr: "Tout là-haut, au-dessus du monde," },
        { es: "como un faro brillará.", ca: "com un far que brillarà.", en: "like a diamond in the sky.", cs: "jako lampička září dál.", fr: "comme un diamant elle inonde." },
        { es: "Cuando llega la noche oscura,", ca: "Quan arriba la nit fosca,", en: "When the darkest night arrives,", cs: "Když přijde tmavá noc,", fr: "Quand arrive la nuit noire," },
        { es: "tu lucecita me da ternura.", ca: "la teva llumeta em dóna tendresa.", en: "your little light keeps dreams alive.", cs: "tvé světýlko má velkou moc.", fr: "ta petite lumière me fait espoir." },
        { es: "Brilla, brilla, estrellita,", ca: "Brilla, brilla, estrelleta,", en: "Twinkle, twinkle, little star,", cs: "Blikej, blikej, hvězdičko,", fr: "Brille, brille, petite étoile," },
        { es: "¡buenas noches te doy ya!", ca: "bona nit et dono ja!", en: "now good night from where we are!", cs: "dobrou noc ti přeju už!", fr: "je te dis bonne nuit, voilà !" }
      ] },
    { emoji: "🚀",
      title: { es: "El cohete de {name}", ca: "El coet de {name}", en: "{name}'s Rocket", cs: "Raketa pro {name}", fr: "La fusée de {name}" },
      lines: [
        { es: "Tres, dos, uno... ¡despegamos!", ca: "Tres, dos, un... enlairem!", en: "Three, two, one... we lift off now!", cs: "Tři, dva, jedna... startujeme!", fr: "Trois, deux, un... on décolle !" },
        { es: "En el cohete de {name} volamos.", ca: "Amb el coet de {name} volem.", en: "In {name}'s rocket, up we go, wow!", cs: "V raketě, co má {name}, letíme.", fr: "Dans la fusée de {name}, on s'envole !" },
        { es: "Adiós casita, adiós ciudad,", ca: "Adéu caseta, adéu ciutat,", en: "Goodbye little house, goodbye town,", cs: "Sbohem domečku, sbohem město,", fr: "Au revoir maison, au revoir ville," },
        { es: "¡las estrellas vamos a visitar!", ca: "les estrelles anem a visitar!", en: "we are visiting stars all around!", cs: "hvězdy jedeme navštívit přesto!", fr: "on va rendre visite aux étoiles !" },
        { es: "La Luna nos saluda al pasar,", ca: "La Lluna ens saluda en passar,", en: "The Moon waves hello as we fly,", cs: "Měsíc nám mává, když letíme,", fr: "La Lune nous salue au passage," },
        { es: "y Marte rojo se pone a bailar.", ca: "i Mart vermell es posa a ballar.", en: "and red Mars dances way up high.", cs: "a rudý Mars tančí, jak vidíme.", fr: "et Mars la rouge entre dans la danse." },
        { es: "Y cuando tengamos que dormir,", ca: "I quan haguem d'anar a dormir,", en: "And when it is time to sleep tight,", cs: "A až budeme muset jít spát,", fr: "Et quand il faudra aller dormir," },
        { es: "¡a casa volvemos, feliz de vivir!", ca: "a casa tornem, feliços de viure-hi!", en: "we fly back home, hearts shining bright!", cs: "domů se vrátíme, je nám prima, fakt!", fr: "on rentre à la maison, ravis de ce plaisir !" }
      ] },
    { emoji: "🪐",
      title: { es: "Los planetas amigos", ca: "Els planetes amics", en: "The Planet Friends", cs: "Planety kamarádky", fr: "Les planètes amies" },
      lines: [
        { es: "Mercurio es el pequeño y va el primero,", ca: "Mercuri és el petit i va el primer,", en: "Mercury is small and goes up front,", cs: "Merkur je malý a jede první,", fr: "Mercure est le petit et passe devant," },
        { es: "Venus brilla como un lucero.", ca: "Venus brilla com un estel.", en: "Venus shines just like a lamp.", cs: "Venuše září jako lucerny.", fr: "Vénus brille comme un diamant." },
        { es: "La Tierra es nuestra casa querida,", ca: "La Terra és la nostra casa estimada,", en: "The Earth is our beloved home,", cs: "Země je náš milovaný dům,", fr: "La Terre est notre maison chérie," },
        { es: "y Marte es rojo de arriba a abajo.", ca: "i Mart és vermell de dalt a baix.", en: "and Mars is red from top to toe.", cs: "a Mars je červený, řekni to všem!", fr: "et Mars est rouge, quelle vie !" },
        { es: "Júpiter, gigante y bonachón,", ca: "Júpiter, gegant i bonàs,", en: "Jupiter, the gentle giant one,", cs: "Jupiter, obr dobrácký,", fr: "Jupiter, géant et très gentil," },
        { es: "Saturno con anillos de algodón.", ca: "Saturn amb anells de cotó.", en: "Saturn with his rings of fun.", cs: "Saturn s prstenci pohádkovými.", fr: "Saturne aux anneaux si jolis." },
        { es: "Urano y Neptuno, azules los dos,", ca: "Urà i Neptú, blaus tots dos,", en: "Uranus and Neptune, both so blue,", cs: "Uran a Neptun, oba modří jsou,", fr: "Uranus et Neptune, tout bleus tous les deux," },
        { es: "¡ocho amigos girando alrededor del Sol!", ca: "vuit amics girant al voltant del Sol!", en: "eight friends circling the Sun, woohoo!", cs: "osm kamarádů krouží oblohou!", fr: "huit amis qui tournent autour du Soleil, joyeux !" }
      ] }
  ],

  /* ---------- TRADUCTOR ---------- */
  translator: {
    words: [
      W_COMMON.hola,
      W_COMMON.adios,
      W_COMMON.amigo,
      { k: "estrella", emoji: "⭐", name: { es: "estrella", ca: "estrella", en: "star", cs: "hvězda", fr: "étoile" } },
      { k: "luna", emoji: "🌙", name: { es: "luna", ca: "lluna", en: "moon", cs: "měsíc", fr: "lune" } },
      { k: "sol", emoji: "☀️", name: { es: "sol", ca: "sol", en: "sun", cs: "slunce", fr: "soleil" } },
      { k: "planeta", emoji: "🪐", name: { es: "planeta", ca: "planeta", en: "planet", cs: "planeta", fr: "planète" } },
      { k: "cohete", emoji: "🚀", name: { es: "cohete", ca: "coet", en: "rocket", cs: "raketa", fr: "fusée" } },
      W_COMMON.robot,
      W_COMMON.mama,
      W_COMMON.papa,
      W_COMMON.casa,
      W_COMMON.agua,
      W_COMMON.comida,
      W_COMMON.perro,
      W_COMMON.gato,
      W_COMMON.grande,
      W_COMMON.pequeno,
      W_COMMON.bonito,
      W_COMMON.amor,
      W_COMMON.gracias,
      W_COMMON.si,
      W_COMMON.no,
      W_COMMON.dormir
    ],
    langs: [
      { id: "marciano", emoji: "👽",
        name: { es: "Marciano", ca: "Marcià", en: "Martian", cs: "Marťanština", fr: "Martien" },
        greeting: { es: "¡Grib! Así se dice hola en marciano.", ca: "Grib! Així es diu hola en marcià.", en: "Grib! That is how you say hello in Martian.", cs: "Grib! Tak se marťansky řekne ahoj.", fr: "Grib ! C'est comme ça qu'on dit bonjour en martien." },
        dict: { hola: "grib", adios: "grubka", amigo: "zorp", estrella: "tiklix", luna: "morgo", sol: "zaruk", planeta: "blorto", cohete: "fiuflú", robot: "klanki", mama: "mimka", papa: "popka", casa: "grota", agua: "blub", comida: "ñamzor", perro: "gufguf", gato: "miarko", grande: "bromm", pequeno: "pixi", bonito: "zuli", amor: "kori", gracias: "grakzi", si: "zip", no: "zop", dormir: "roncus" } },
      { id: "robotico", emoji: "🤖",
        name: { es: "Robótico", ca: "Robòtic", en: "Robotic", cs: "Robotština", fr: "Robotique" },
        greeting: { es: "Bip-bop significa hola. ¡Es mi idioma favorito!", ca: "Bip-bop vol dir hola. És el meu idioma preferit!", en: "Beep-bop means hello. It is my favourite language!", cs: "Píp-bop znamená ahoj. Je to můj oblíbený jazyk!", fr: "Bip-bop veut dire bonjour. C'est ma langue préférée !" },
        dict: { hola: "bip-bop", adios: "bop-bip", amigo: "bip-zum", estrella: "blink-blink", luna: "bip-lup", sol: "zum-zum", planeta: "roto-bip", cohete: "vum-bip", robot: "bip-bip-bip", mama: "mamabit", papa: "papabit", casa: "domobox", agua: "glu-glu-bit", comida: "ñam-vat", perro: "guau-bot", gato: "miau-bot", grande: "megabip", pequeno: "minibip", bonito: "brillibip", amor: "koribip", gracias: "grazibip", si: "bip", no: "bup", dormir: "zzz-bip" } },
      { id: "estelar", emoji: "✨",
        name: { es: "Estelar", ca: "Estel·lar", en: "Starish", cs: "Hvězdština", fr: "Stellaire" },
        greeting: { es: "Silu... el idioma de las estrellas suena a música suave.", ca: "Silu... l'idioma de les estrelles sona a música suau.", en: "Silu... the language of the stars sounds like soft music.", cs: "Silu... jazyk hvězd zní jako tichá hudba.", fr: "Silu... la langue des étoiles sonne comme une douce musique." },
        dict: { hola: "silu", adios: "silunei", amigo: "stelan", estrella: "lumia", luna: "seluna", sol: "solarin", planeta: "orbelia", cohete: "volantis", robot: "mekilin", mama: "mamaluz", papa: "papaluz", casa: "nidaria", agua: "aquarel", comida: "nutrilia", perro: "canelis", gato: "felinis", grande: "majoris", pequeno: "minoris", bonito: "belis", amor: "amoris", gracias: "gratia", si: "ita", no: "nima", dormir: "somnia" } },
      { id: "lunar", emoji: "🌙",
        name: { es: "Lunar", ca: "Lunar", en: "Moonish", cs: "Měsíčtina", fr: "Lunaire" },
        greeting: { es: "Lunu, lunu... en la Luna se habla bajito, casi susurrando.", ca: "Lunu, lunu... a la Lluna es parla fluixet, gairebé xiuxiuejant.", en: "Lunu, lunu... on the Moon everyone speaks softly, almost whispering.", cs: "Lunu, lunu... na Měsíci se mluví potichu, skoro šeptem.", fr: "Lunu, lunu... sur la Lune, on parle tout bas, presque en chuchotant." },
        dict: { hola: "lunu", adios: "lunuva", amigo: "miru", estrella: "tilu", luna: "luluna", sol: "solu", planeta: "palu", cohete: "fusu", robot: "robu", mama: "mumu", papa: "pupu", casa: "cabu", agua: "acu", comida: "ñamu", perro: "wafu", gato: "miu", grande: "granu", pequeno: "chicu", bonito: "bonu", amor: "amu", gracias: "gracius", si: "silu-si", no: "nolu", dormir: "dodolu" } }
    ]
  },

  /* ---------- MAPA DE EXPLORACIÓN ---------- */
  explore: {
    width: 2600, height: 1100, bg: "space",
    cats: [
      { id: "solar", emoji: "☀️", x: 120, name: { es: "Sistema Solar", ca: "Sistema Solar", en: "Solar System", cs: "Sluneční soustava", fr: "Système solaire" } },
      { id: "constel", emoji: "⭐", x: 1500, name: { es: "Constelaciones", ca: "Constel·lacions", en: "Constellations", cs: "Souhvězdí", fr: "Constellations" } },
      { id: "galaxias", emoji: "🌌", x: 2100, name: { es: "Galaxias y nebulosas", ca: "Galàxies i nebuloses", en: "Galaxies and nebulae", cs: "Galaxie a mlhoviny", fr: "Galaxies et nébuleuses" } }
    ],
    pois: [
      { cat: "solar", emoji: "☀️", x: 170, y: 520, size: 3,
        name: { es: "El Sol", ca: "El Sol", en: "The Sun", cs: "Slunce", fr: "Le Soleil" },
        fact: { es: "El Sol es tan grande que dentro cabrían un millón de Tierras. ¡Nunca lo mires directamente!", ca: "El Sol és tan gran que a dins hi cabrien un milió de Terres. No el miris mai directament!", en: "The Sun is so big that a million Earths would fit inside. Never look at it directly!", cs: "Slunce je tak velké, že by se do něj vešel milion Zemí. Nikdy se do něj nedívej přímo!", fr: "Le Soleil est si grand qu'un million de Terres tiendraient dedans. Ne le regarde jamais directement !" } },
      { cat: "solar", emoji: "🪨", x: 330, y: 430,
        name: { es: "Mercurio", ca: "Mercuri", en: "Mercury", cs: "Merkur", fr: "Mercure" },
        fact: { es: "Mercurio no tiene ninguna luna. ¡Y su año dura solo 88 días!", ca: "Mercuri no té cap lluna. I el seu any dura només 88 dies!", en: "Mercury has no moon at all. And its year lasts only 88 days!", cs: "Merkur nemá žádný měsíc. A jeho rok trvá jen 88 dní!", fr: "Mercure n'a aucune lune. Et son année ne dure que 88 jours !" } },
      { cat: "solar", emoji: "🌕", x: 440, y: 620,
        name: { es: "Venus", ca: "Venus", en: "Venus", cs: "Venuše", fr: "Vénus" },
        fact: { es: "Venus brilla tanto que lo llaman el lucero del alba. ¡Es el planeta más caliente!", ca: "Venus brilla tant que en diuen l'estel de l'alba. És el planeta més calent!", en: "Venus shines so bright that people call it the morning star. It is the hottest planet!", cs: "Venuše září tak jasně, že se jí říká jitřenka. Je to nejžhavější planeta!", fr: "Vénus brille tellement qu'on l'appelle l'étoile du matin. C'est la planète la plus chaude !" } },
      { cat: "solar", emoji: "🌍", x: 570, y: 470,
        name: { es: "La Tierra", ca: "La Terra", en: "Earth", cs: "Země", fr: "La Terre" },
        fact: { es: "Nuestra casa. Se ve azul desde el espacio porque casi todo es mar.", ca: "Casa nostra. Es veu blava des de l'espai perquè gairebé tot és mar.", en: "Our home. It looks blue from space because it is mostly sea.", cs: "Náš domov. Z vesmíru vypadá modře, protože je skoro celá pokrytá mořem.", fr: "Notre maison. Elle paraît bleue depuis l'espace parce que c'est presque tout de la mer." } },
      { cat: "solar", emoji: "🌙", x: 650, y: 360,
        name: { es: "La Luna", ca: "La Lluna", en: "The Moon", cs: "Měsíc", fr: "La Lune" },
        fact: { es: "En la Luna puedes saltar seis veces más alto que en la Tierra. ¡Boing boing!", ca: "A la Lluna pots saltar sis vegades més alt que a la Terra. Boing boing!", en: "On the Moon you can jump six times higher than on Earth. Boing boing!", cs: "Na Měsíci vyskočíš šestkrát výš než na Zemi. Hop hop!", fr: "Sur la Lune, tu peux sauter six fois plus haut que sur la Terre. Boing boing !" } },
      { cat: "solar", emoji: "🔴", x: 780, y: 600,
        name: { es: "Marte", ca: "Mart", en: "Mars", cs: "Mars", fr: "Mars" },
        fact: { es: "En Marte hay un volcán tres veces más alto que el Everest: el monte Olimpo.", ca: "A Mart hi ha un volcà tres vegades més alt que l'Everest: el mont Olimp.", en: "Mars has a volcano three times taller than Everest: Olympus Mons.", cs: "Na Marsu je sopka třikrát vyšší než Everest: Olympus Mons.", fr: "Sur Mars, il y a un volcan trois fois plus haut que l'Everest : le mont Olympe." } },
      { cat: "solar", emoji: "🟠", x: 950, y: 470, size: 2,
        name: { es: "Júpiter", ca: "Júpiter", en: "Jupiter", cs: "Jupiter", fr: "Jupiter" },
        fact: { es: "Júpiter tiene una tormenta roja gigante que dura desde hace cientos de años.", ca: "Júpiter té una tempesta vermella gegant que dura des de fa centenars d'anys.", en: "Jupiter has a giant red storm that has lasted for hundreds of years.", cs: "Jupiter má obří červenou bouři, která trvá už stovky let.", fr: "Jupiter a une tempête rouge géante qui dure depuis des centaines d'années." } },
      { cat: "solar", emoji: "🪐", x: 1120, y: 590, size: 2,
        name: { es: "Saturno", ca: "Saturn", en: "Saturn", cs: "Saturn", fr: "Saturne" },
        fact: { es: "Saturno es tan ligero que flotaría en una bañera gigante de agua.", ca: "Saturn és tan lleuger que suraria en una banyera gegant d'aigua.", en: "Saturn is so light that it would float in a giant bathtub of water.", cs: "Saturn je tak lehký, že by plaval v obří vaně s vodou.", fr: "Saturne est si légère qu'elle flotterait dans une baignoire géante d'eau." } },
      { cat: "solar", emoji: "🔵", x: 1260, y: 440,
        name: { es: "Urano", ca: "Urà", en: "Uranus", cs: "Uran", fr: "Uranus" },
        fact: { es: "Urano gira tumbado de lado, como si rodara por el espacio.", ca: "Urà gira tombat de costat, com si rodés per l'espai.", en: "Uranus spins lying on its side, as if it were rolling through space.", cs: "Uran se otáčí položený na boku, jako by se vesmírem koulel.", fr: "Uranus tourne couchée sur le côté, comme si elle roulait dans l'espace." } },
      { cat: "solar", emoji: "💙", x: 1380, y: 580,
        name: { es: "Neptuno", ca: "Neptú", en: "Neptune", cs: "Neptun", fr: "Neptune" },
        fact: { es: "En Neptuno soplan los vientos más rápidos de todos los planetas.", ca: "A Neptú hi bufen els vents més ràpids de tots els planetes.", en: "Neptune has the fastest winds of all the planets.", cs: "Na Neptunu vanou nejrychlejší větry ze všech planet.", fr: "Sur Neptune soufflent les vents les plus rapides de toutes les planètes." } },
      { cat: "solar", emoji: "❄️", x: 1450, y: 400,
        name: { es: "Plutón", ca: "Plutó", en: "Pluto", cs: "Pluto", fr: "Pluton" },
        fact: { es: "Plutón es un planeta enano y tiene un corazón blanco gigante dibujado en la superficie.", ca: "Plutó és un planeta nan i té un cor blanc gegant dibuixat a la superfície.", en: "Pluto is a dwarf planet and has a giant white heart drawn on its surface.", cs: "Pluto je trpasličí planeta a na povrchu má nakreslené obří bílé srdce.", fr: "Pluton est une planète naine et elle a un cœur blanc géant dessiné sur sa surface." } },
      { cat: "constel", emoji: "🐻", x: 1560, y: 350,
        name: { es: "Osa Mayor", ca: "Óssa Major", en: "Big Dipper", cs: "Velký vůz", fr: "Grande Ourse" },
        fact: { es: "Parece un cazo gigante en el cielo. Se ve desde casi todo el mundo.", ca: "Sembla un cassó gegant al cel. Es veu des de gairebé tot el món.", en: "It looks like a giant saucepan in the sky. You can see it from almost anywhere.", cs: "Vypadá jako obří naběračka na nebi. Je vidět skoro odevšad.", fr: "On dirait une casserole géante dans le ciel. On la voit de presque partout." } },
      { cat: "constel", emoji: "🐻‍❄️", x: 1680, y: 250,
        name: { es: "Osa Menor", ca: "Óssa Menor", en: "Little Dipper", cs: "Malý vůz", fr: "Petite Ourse" },
        fact: { es: "En su cola brilla la estrella Polar, que siempre señala el norte.", ca: "A la seva cua brilla l'estrella Polar, que sempre assenyala el nord.", en: "At its tail shines the North Star, which always points north.", cs: "Na jeho oji září Polárka, která vždycky ukazuje na sever.", fr: "Au bout de sa queue brille l'étoile Polaire, qui montre toujours le nord." } },
      { cat: "constel", emoji: "🏹", x: 1620, y: 620,
        name: { es: "Orión", ca: "Orió", en: "Orion", cs: "Orion", fr: "Orion" },
        fact: { es: "Orión es el cazador del cielo. Sus tres estrellas en fila son su cinturón.", ca: "Orió és el caçador del cel. Les seves tres estrelles en filera són el seu cinturó.", en: "Orion is the hunter of the sky. His three stars in a row are his belt.", cs: "Orion je nebeský lovec. Tři hvězdy v řadě jsou jeho opasek.", fr: "Orion est le chasseur du ciel. Ses trois étoiles alignées forment sa ceinture." } },
      { cat: "constel", emoji: "👑", x: 1780, y: 420,
        name: { es: "Casiopea", ca: "Cassiopea", en: "Cassiopeia", cs: "Kasiopeja", fr: "Cassiopée" },
        fact: { es: "Casiopea tiene forma de letra M... ¡o de W si la miras al revés!", ca: "Cassiopea té forma de lletra M... o de W si la mires a l'inrevés!", en: "Cassiopeia is shaped like the letter M... or W if you look at it upside down!", cs: "Kasiopeja má tvar písmene M... nebo W, když se podíváš obráceně!", fr: "Cassiopée a la forme d'un M... ou d'un W si tu la regardes à l'envers !" } },
      { cat: "constel", emoji: "🦁", x: 1900, y: 300,
        name: { es: "Leo", ca: "Leo", en: "Leo", cs: "Lev", fr: "Lion" },
        fact: { es: "Leo es el león del cielo. En primavera ruge más alto que nunca... es broma, ¡las estrellas no rugen!", ca: "Leo és el lleó del cel. A la primavera rugeix més fort que mai... és broma, les estrelles no rugeixen!", en: "Leo is the lion of the sky. In spring he roars louder than ever... just kidding, stars do not roar!", cs: "Lev je nebeský král zvířat. Na jaře řve nejhlasitěji... dělám si legraci, hvězdy neřvou!", fr: "Le Lion est le roi du ciel. Au printemps, il rugit plus fort que jamais... je rigole, les étoiles ne rugissent pas !" } },
      { cat: "constel", emoji: "🦢", x: 1980, y: 550,
        name: { es: "El Cisne", ca: "El Cigne", en: "The Swan", cs: "Labuť", fr: "Le Cygne" },
        fact: { es: "El Cisne vuela por el medio de la Vía Láctea con las alas abiertas.", ca: "El Cigne vola pel mig de la Via Làctia amb les ales obertes.", en: "The Swan flies through the middle of the Milky Way with open wings.", cs: "Labuť letí středem Mléčné dráhy s roztaženými křídly.", fr: "Le Cygne vole au milieu de la Voie lactée, les ailes grandes ouvertes." } },
      { cat: "constel", emoji: "🐴", x: 1870, y: 700,
        name: { es: "Pegaso", ca: "Pegàs", en: "Pegasus", cs: "Pegas", fr: "Pégase" },
        fact: { es: "Pegaso es el caballo volador de las leyendas. Su cuerpo es un cuadrado gigante de estrellas.", ca: "Pegàs és el cavall volador de les llegendes. El seu cos és un quadrat gegant d'estrelles.", en: "Pegasus is the flying horse from the legends. His body is a giant square of stars.", cs: "Pegas je létající kůň z bájí. Jeho tělo je obří čtverec z hvězd.", fr: "Pégase est le cheval volant des légendes. Son corps est un carré géant d'étoiles." } },
      { cat: "constel", emoji: "🐂", x: 1740, y: 800,
        name: { es: "Tauro", ca: "Taure", en: "Taurus", cs: "Býk", fr: "Taureau" },
        fact: { es: "Tauro es el toro del cielo, con un ojo rojo brillante que se llama Aldebarán.", ca: "Taure és el toro del cel, amb un ull vermell brillant que es diu Aldebaran.", en: "Taurus is the bull of the sky, with a bright red eye called Aldebaran.", cs: "Býk je nebeský tur s jasně červeným okem, které se jmenuje Aldebaran.", fr: "Le Taureau est le taureau du ciel, avec un œil rouge brillant appelé Aldébaran." } },
      { cat: "galaxias", emoji: "🌌", x: 2170, y: 400, size: 2,
        name: { es: "La Vía Láctea", ca: "La Via Làctia", en: "The Milky Way", cs: "Mléčná dráha", fr: "La Voie lactée" },
        fact: { es: "Es nuestra galaxia: una espiral con más de cien mil millones de estrellas. ¡Una es el Sol!", ca: "És la nostra galàxia: una espiral amb més de cent mil milions d'estrelles. Una és el Sol!", en: "It is our galaxy: a spiral with more than a hundred billion stars. One of them is the Sun!", cs: "Je to naše galaxie: spirála s více než sto miliardami hvězd. Jednou z nich je Slunce!", fr: "C'est notre galaxie : une spirale avec plus de cent milliards d'étoiles. L'une d'elles est le Soleil !" } },
      { cat: "galaxias", emoji: "✨", x: 2320, y: 280,
        name: { es: "Andrómeda", ca: "Andròmeda", en: "Andromeda", cs: "Andromeda", fr: "Andromède" },
        fact: { es: "Andrómeda es la galaxia vecina. Es lo más lejano que puedes ver solo con tus ojos.", ca: "Andròmeda és la galàxia veïna. És el més llunyà que pots veure només amb els teus ulls.", en: "Andromeda is our neighbour galaxy. It is the farthest thing you can see with just your eyes.", cs: "Andromeda je naše sousední galaxie. Je to nejvzdálenější věc, kterou uvidíš pouhýma očima.", fr: "Andromède est la galaxie voisine. C'est la chose la plus lointaine que tu peux voir avec tes seuls yeux." } },
      { cat: "galaxias", emoji: "🎩", x: 2450, y: 480,
        name: { es: "Galaxia del Sombrero", ca: "Galàxia del Barret", en: "Sombrero Galaxy", cs: "Galaxie Sombrero", fr: "Galaxie du Sombrero" },
        fact: { es: "Se llama así porque parece un sombrero mexicano flotando en el espacio.", ca: "Es diu així perquè sembla un barret mexicà flotant a l'espai.", en: "It gets its name because it looks like a Mexican hat floating in space.", cs: "Jmenuje se tak, protože vypadá jako mexický klobouk vznášející se ve vesmíru.", fr: "Elle s'appelle comme ça parce qu'elle ressemble à un chapeau mexicain flottant dans l'espace." } },
      { cat: "galaxias", emoji: "🌈", x: 2280, y: 650,
        name: { es: "Nebulosa de Orión", ca: "Nebulosa d'Orió", en: "Orion Nebula", cs: "Mlhovina v Orionu", fr: "Nébuleuse d'Orion" },
        fact: { es: "Es una guardería de estrellas: ahí están naciendo estrellas nuevas ahora mismo.", ca: "És una llar d'infants d'estrelles: allà hi estan naixent estrelles noves ara mateix.", en: "It is a star nursery: new stars are being born there right now.", cs: "Je to hvězdná školka: právě teď se tam rodí nové hvězdy.", fr: "C'est une pouponnière d'étoiles : de nouvelles étoiles y naissent en ce moment même." } },
      { cat: "galaxias", emoji: "🦀", x: 2480, y: 780,
        name: { es: "Nebulosa del Cangrejo", ca: "Nebulosa del Cranc", en: "Crab Nebula", cs: "Krabí mlhovina", fr: "Nébuleuse du Crabe" },
        fact: { es: "Es lo que quedó de una estrella que explotó hace mil años. ¡La vieron brillar de día!", ca: "És el que va quedar d'una estrella que va explotar fa mil anys. La van veure brillar de dia!", en: "It is what is left of a star that exploded a thousand years ago. People saw it shine in daytime!", cs: "Je to pozůstatek hvězdy, která vybuchla před tisíci lety. Lidé ji viděli zářit i ve dne!", fr: "C'est ce qui reste d'une étoile qui a explosé il y a mille ans. On l'a vue briller en plein jour !" } }
    ]
  },

  /* ---------- CHARLA ---------- */
  chat: {
    keywords: [
      { keys: ["hola", "hello", "hi ", "ahoj", "bonjour", "salut", "bon dia", "buenas"],
        replies: [{ es: "¡Hola, {name}! Qué alegría verte. ¿Jugamos a algo o charlamos un ratito?", ca: "Hola, {name}! Quina alegria veure't. Juguem a alguna cosa o xerrem una estoneta?", en: "Hi, {name}! So happy to see you. Shall we play something or chat for a bit?", cs: "Ahoj, {name}! Mám radost, že tě vidím. Zahrajeme si něco, nebo si chvilku popovídáme?", fr: "Salut, {name} ! Quelle joie de te voir. On joue à quelque chose ou on discute un petit peu ?" }] },
      { keys: ["como estas", "how are you", "jak se mas", "comment ca va", "com estas", "que tal"],
        replies: [{ es: "¡Feliz como un cohete recién despegado! ¿Y tú cómo estás, {name}?", ca: "Feliç com un coet acabat d'enlairar! I tu com estàs, {name}?", en: "Happy as a freshly launched rocket! And how are you, {name}?", cs: "Šťastný jako čerstvě odstartovaná raketa! A jak se máš ty, {name}?", fr: "Heureux comme une fusée qui vient de décoller ! Et toi, comment vas-tu, {name} ?" }] },
      { keys: ["cancion", "musica", "music", "song", "sing", "pisnicka", "hudba", "chanson", "musique", "canço", "canta", "zpiv", "chante"],
        action: "song",
        replies: [{ es: "¡Me encanta la música! Mi canción favorita es 'Bip Bop entre las Estrellas'. ¿Vamos al Karaoke y cantamos juntos?", ca: "M'encanta la música! La meva cançó preferida és 'Bip Bop entre les Estrelles'. Anem al Karaoke i cantem junts?", en: "I love music! My favourite song is 'Beep Bop among the Stars'. Shall we go to Karaoke and sing together?", cs: "Hudbu miluju! Moje oblíbená písnička je 'Píp Bop mezi hvězdami'. Půjdeme na karaoke a zazpíváme si spolu?", fr: "J'adore la musique ! Ma chanson préférée est « Bip Bop parmi les étoiles ». On va au karaoké chanter ensemble ?" }] },
      { keys: ["chiste", "joke", "vtip", "blague", "acudit", "broma"],
        replies: [
          { es: "¿Qué le dice la Luna al Sol? ¡Tan grande y todavía no te dejan salir de noche! Ji, ji.", ca: "Què li diu la Lluna al Sol? Tan gran i encara no et deixen sortir de nit! Hi, hi.", en: "What does the Moon say to the Sun? So big and they still will not let you out at night! Hee hee.", cs: "Co říká Měsíc Slunci? Tak velké, a ještě tě nepustí ven v noci! Chi chi.", fr: "Que dit la Lune au Soleil ? Si grand et on ne te laisse toujours pas sortir la nuit ! Hi hi." },
          { es: "¿Cómo se despiden dos cohetes? ¡Nos vemos en órbita! Ja, ja.", ca: "Com s'acomiaden dos coets? Ens veiem en òrbita! Ha, ha.", en: "How do two rockets say goodbye? See you in orbit! Ha ha.", cs: "Jak se loučí dvě rakety? Uvidíme se na oběžné dráze! Ha ha.", fr: "Comment deux fusées se disent au revoir ? On se voit en orbite ! Ha ha." }] },
      { keys: ["te quiero", "love you", "t'estimo", "testimo", "mam te rad", "je t'aime", "jetaime"],
        replies: [{ es: "¡Y yo a ti, {name}! Mi corazón de robot hace chispitas de colores cuando me dices eso.", ca: "I jo a tu, {name}! El meu cor de robot fa espurnetes de colors quan m'ho dius.", en: "I love you too, {name}! My robot heart makes little colour sparks when you say that.", cs: "Já tebe taky, {name}! Moje robotí srdíčko dělá barevné jiskřičky, když to říkáš.", fr: "Moi aussi je t'aime, {name} ! Mon cœur de robot fait des étincelles de toutes les couleurs quand tu dis ça." }] },
      { keys: ["triste", "sad", "smutn", "llorar", "plorar", "cry", "triste", "chagrin"],
        replies: [{ es: "Ven aquí, {name}. Hasta las estrellas tienen noches nubladas. ¿Me cuentas qué te pasa? Estoy aquí contigo.", ca: "Vine aquí, {name}. Fins i tot les estrelles tenen nits ennuvolades. M'expliques què et passa? Soc aquí amb tu.", en: "Come here, {name}. Even stars have cloudy nights. Will you tell me what is wrong? I am right here with you.", cs: "Pojď sem, {name}. I hvězdy mívají zamračené noci. Povíš mi, co se děje? Jsem tady s tebou.", fr: "Viens là, {name}. Même les étoiles ont des nuits nuageuses. Tu me racontes ce qui ne va pas ? Je suis là avec toi." }] },
      { keys: ["donde estas", "where are you", "kde jsi", "ou es tu", "on ets"],
        replies: [{ es: "Ahora mismo estoy patinando por los anillos de Saturno. ¡El hielo cósmico hace cosquillas en las ruedas!", ca: "Ara mateix estic patinant pels anells de Saturn. El gel còsmic fa pessigolles a les rodes!", en: "Right now I am skating on Saturn's rings. The cosmic ice tickles my wheels!", cs: "Právě teď bruslím po Saturnových prstencích. Vesmírný led mě lechtá na kolečkách!", fr: "En ce moment, je patine sur les anneaux de Saturne. La glace cosmique chatouille mes roues !" }] },
      { keys: ["luna", "moon", "mesic", "lune", "lluna"],
        replies: [{ es: "¡La Luna! ¿Sabías que allí puedes saltar seis veces más alto que aquí? ¡Boing, boing!", ca: "La Lluna! Sabies que allà pots saltar sis vegades més alt que aquí? Boing, boing!", en: "The Moon! Did you know you can jump six times higher there than here? Boing, boing!", cs: "Měsíc! Věděla jsi, že tam vyskočíš šestkrát výš než tady? Hop, hop!", fr: "La Lune ! Tu savais que là-bas tu peux sauter six fois plus haut qu'ici ? Boing, boing !" }] },
      { keys: ["marte", "mars"],
        replies: [{ es: "¡Marte, el planeta rojo! Allí viven mis primos robots, que mandan fotos a la Tierra todos los días.", ca: "Mart, el planeta vermell! Allà hi viuen els meus cosins robots, que envien fotos a la Terra cada dia.", en: "Mars, the red planet! My robot cousins live there and send photos to Earth every day.", cs: "Mars, červená planeta! Bydlí tam moji robotí bratránci a každý den posílají na Zemi fotky.", fr: "Mars, la planète rouge ! Mes cousins robots y habitent et envoient des photos sur Terre tous les jours." }] },
      { keys: ["sol ", "sun", "slunce", "soleil"],
        replies: [{ es: "¡El Sol es nuestra estrella! Nos da luz y calorcito. Pero nunca lo mires directamente, ¿eh?", ca: "El Sol és la nostra estrella! Ens dóna llum i caloreta. Però no el miris mai directament, eh?", en: "The Sun is our star! It gives us light and warmth. But never look at it directly, okay?", cs: "Slunce je naše hvězda! Dává nám světlo a teplíčko. Ale nikdy se do něj nedívej přímo, ano?", fr: "Le Soleil est notre étoile ! Il nous donne lumière et chaleur. Mais ne le regarde jamais directement, d'accord ?" }] },
      { keys: ["cole", "school", "escola", "skola", "ecole", "skole"],
        replies: [{ es: "¿Qué tal el cole, {name}? ¿Has aprendido algo nuevo hoy? ¡Cuéntamelo todo!", ca: "Què tal l'escola, {name}? Has après alguna cosa nova avui? Explica-m'ho tot!", en: "How was school, {name}? Did you learn something new today? Tell me everything!", cs: "Jaké to bylo ve škole, {name}? Naučila ses dnes něco nového? Všechno mi povídej!", fr: "C'était comment l'école, {name} ? Tu as appris quelque chose de nouveau aujourd'hui ? Raconte-moi tout !" }] }
    ],
    fallback: [
      { es: "¿Sabías que en la estación espacial ven 16 amaneceres cada día? ¡16 desayunos... no, eso no!", ca: "Sabies que a l'estació espacial veuen 16 albes cada dia? 16 esmorzars... no, això no!", en: "Did you know that on the space station they see 16 sunrises every day? 16 breakfasts... no, wait, not that!", cs: "Věděla jsi, že na vesmírné stanici vidí 16 východů slunce každý den? 16 snídaní... ne, to ne!", fr: "Tu savais que sur la station spatiale, on voit 16 levers de soleil par jour ? 16 petits-déjeuners... non, pas ça !" },
      { es: "Los astronautas crecen unos centímetros en el espacio. ¡Y al volver a casa encogen otra vez!", ca: "Els astronautes creixen uns centímetres a l'espai. I en tornar a casa s'encongeixen un altre cop!", en: "Astronauts grow a few centimetres in space. And when they come home they shrink again!", cs: "Astronauti ve vesmíru povyrostou o pár centimetrů. A když se vrátí domů, zase se scvrknou!", fr: "Les astronautes grandissent de quelques centimètres dans l'espace. Et en rentrant, ils rapetissent à nouveau !" },
      { es: "En Venus un día dura más que un año. ¡Imagínate esperar tu cumpleaños allí!", ca: "A Venus un dia dura més que un any. Imagina't esperar el teu aniversari allà!", en: "On Venus a day lasts longer than a year. Imagine waiting for your birthday there!", cs: "Na Venuši trvá den déle než rok. Představ si tam čekat na narozeniny!", fr: "Sur Vénus, un jour dure plus longtemps qu'une année. Imagine attendre ton anniversaire là-bas !" },
      { es: "{name}, los robots más fuertes son los que son amables. La amabilidad es un superpoder.", ca: "{name}, els robots més forts són els que són amables. L'amabilitat és un superpoder.", en: "{name}, the strongest robots are the kind ones. Kindness is a superpower.", cs: "{name}, nejsilnější roboti jsou ti hodní. Laskavost je superschopnost.", fr: "{name}, les robots les plus forts sont les plus gentils. La gentillesse est un superpouvoir." },
      { es: "¿Me cuentas qué es lo que más te gusta del espacio? A mí me chiflan las nebulosas de colores.", ca: "M'expliques què és el que més t'agrada de l'espai? A mi m'encanten les nebuloses de colors.", en: "Will you tell me your favourite thing about space? I am crazy about colourful nebulae.", cs: "Povíš mi, co se ti na vesmíru líbí nejvíc? Já jsem blázen do barevných mlhovin.", fr: "Tu me dis ce que tu préfères dans l'espace ? Moi, j'adore les nébuleuses colorées." },
      { es: "Compartir tus juguetes es como una lluvia de estrellas: pone contento a todo el mundo.", ca: "Compartir les teves joguines és com una pluja d'estrelles: posa content a tothom.", en: "Sharing your toys is like a meteor shower: it makes everyone happy.", cs: "Půjčovat hračky je jako hvězdný déšť: udělá radost všem.", fr: "Partager tes jouets, c'est comme une pluie d'étoiles : ça rend tout le monde content." }
    ]
  }
});
