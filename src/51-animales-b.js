"use strict";
/* ============================================================
   Contenido de ANIMALES DEL MUNDO (parte B): historias,
   canciones, traductor, mapa y charla.
   ============================================================ */

Object.assign(THEMES.animales.content, {

  /* ---------- HISTORIAS ---------- */
  stories: [
    {
      id: "rugido", emoji: "🦁", start: "n1",
      title: { es: "El león que no sabía rugir", ca: "El lleó que no sabia rugir", en: "The Lion Who Could Not Roar", cs: "Lev, který neuměl řvát", fr: "Le lion qui ne savait pas rugir" },
      nodes: {
        n1: {
          text: { es: "En la sabana vive Leo, un león pequeño con un problema grande: cuando intenta rugir, le sale un '¡miau!'. Los demás se ríen y Leo se esconde. ¿Cómo lo ayudamos, {name}?", ca: "A la sabana hi viu en Leo, un lleó petit amb un problema gran: quan intenta rugir, li surt un 'miau!'. Els altres riuen i en Leo s'amaga. Com l'ajudem, {name}?", en: "In the savannah lives Leo, a little lion with a big problem: when he tries to roar, out comes a 'meow!'. The others laugh and Leo hides. How do we help him, {name}?", cs: "Na savaně žije Leo, malý lev s velkým problémem: když zkusí zařvat, vyjde z něj 'mňau!'. Ostatní se smějí a Leo se schovává. Jak mu pomůžeme, {name}?", fr: "Dans la savane vit Léo, un petit lion avec un grand problème : quand il essaie de rugir, il sort un « miaou ! ». Les autres rient et Léo se cache. Comment l'aider, {name} ?" },
          choices: [
            { t: { es: "Buscamos a la abuela leona, que sabe de rugidos", ca: "Busquem l'àvia lleona, que sap de rugits", en: "We find granny lioness, the roar expert", cs: "Najdeme babičku lvici, expertku na řev", fr: "On cherche mamie lionne, l'experte en rugissements" }, go: "n2a" },
            { t: { es: "Le decimos que su miau también vale", ca: "Li diem que el seu miau també val", en: "We tell him his meow counts too", cs: "Řekneme mu, že jeho mňau se taky počítá", fr: "On lui dit que son miaou compte aussi" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "La abuela leona escucha el miau de Leo y sonríe: 'El rugido no sale de la garganta, pequeño. Sale de aquí', y le toca la barriga. 'Respira hondo, piensa en lo que más quieres proteger, y suelta el aire'.", ca: "L'àvia lleona escolta el miau d'en Leo i somriu: 'El rugit no surt de la gola, petit. Surt d'aquí', i li toca la panxa. 'Respira fondo, pensa en el que més vols protegir, i deixa anar l'aire'.", en: "Granny lioness listens to Leo's meow and smiles: 'The roar does not come from the throat, little one. It comes from here', and touches his belly. 'Breathe deep, think of what you most want to protect, and let the air go'.", cs: "Babička lvice si poslechne Leovo mňau a usměje se: 'Řev nevychází z krku, maličký. Vychází odsud', a dotkne se jeho bříška. 'Zhluboka se nadechni, pomysli na to, co chceš nejvíc chránit, a vypusť vzduch'.", fr: "Mamie lionne écoute le miaou de Léo et sourit : « Le rugissement ne vient pas de la gorge, petit. Il vient d'ici », et elle touche son ventre. « Respire fort, pense à ce que tu veux le plus protéger, et laisse sortir l'air »." },
          choices: [
            { t: { es: "Leo piensa en su familia y lo intenta", ca: "En Leo pensa en la seva família i ho intenta", en: "Leo thinks of his family and tries", cs: "Leo pomyslí na svou rodinu a zkusí to", fr: "Léo pense à sa famille et essaie" }, go: "n3" }
          ]
        },
        n2b: {
          text: { es: "'¿Mi miau... vale?', pregunta Leo. Y esa noche pasa algo: un ratoncito se pierde en la hierba alta y solo oye el miau suave de Leo. '¡Un sonido amable!', dice el ratón, y lo sigue hasta ponerse a salvo.", ca: "'El meu miau... val?', pregunta en Leo. I aquella nit passa una cosa: un ratolinet es perd a l'herba alta i només sent el miau suau d'en Leo. 'Un so amable!', diu el ratolí, i el segueix fins a posar-se fora de perill.", en: "'My meow... counts?', asks Leo. And that night something happens: a little mouse gets lost in the tall grass and only hears Leo's soft meow. 'A kind sound!', says the mouse, and follows it to safety.", cs: "'Moje mňau... se počítá?', ptá se Leo. A tu noc se něco stane: myška se ztratí ve vysoké trávě a slyší jen Leovo tiché mňau. 'Laskavý zvuk!', řekne myška a jde za ním do bezpečí.", fr: "« Mon miaou... compte ? », demande Léo. Et cette nuit-là, il se passe quelque chose : une petite souris se perd dans les hautes herbes et n'entend que le doux miaou de Léo. « Un son gentil ! », dit la souris, et elle le suit jusqu'à être en sécurité." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n3" }
          ]
        },
        n3: {
          text: { es: "Días después, una tormenta asusta a todos los cachorros de la sabana. Leo respira hondo, piensa en sus amigos... y le sale un sonido nuevo: no es el rugido más fuerte, pero es cálido y valiente, y todos se calman al oírlo.", ca: "Dies després, una tempesta espanta tots els cadells de la sabana. En Leo respira fondo, pensa en els seus amics... i li surt un so nou: no és el rugit més fort, però és càlid i valent, i tothom es calma en sentir-lo.", en: "Days later, a storm scares all the cubs of the savannah. Leo breathes deep, thinks of his friends... and a new sound comes out: not the loudest roar, but warm and brave, and everyone calms down hearing it.", cs: "O pár dní později bouřka vyděsí všechna mláďata na savaně. Leo se zhluboka nadechne, pomyslí na své kamarády... a vyjde z něj nový zvuk: není to nejhlasitější řev, ale je hřejivý a statečný, a všichni se při něm uklidní.", fr: "Quelques jours plus tard, un orage effraie tous les petits de la savane. Léo respire fort, pense à ses amis... et un nouveau son sort : pas le rugissement le plus fort, mais chaud et courageux, et tout le monde se calme en l'entendant." },
          choices: [{ t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e1" }]
        },
        e1: {
          end: true,
          text: { es: "Desde entonces, en la sabana dicen que hay rugidos de mil tamaños, y que el mejor es el que sale del corazón. Leo ya no se esconde, {name}: cada voz es distinta, y la tuya también es perfecta tal y como es.", ca: "Des d'aleshores, a la sabana diuen que hi ha rugits de mil mides, i que el millor és el que surt del cor. En Leo ja no s'amaga, {name}: cada veu és diferent, i la teva també és perfecta tal com és.", en: "Since then, they say in the savannah that roars come in a thousand sizes, and the best one comes from the heart. Leo does not hide anymore, {name}: every voice is different, and yours is perfect just as it is.", cs: "Od té doby se na savaně říká, že řev má tisíc velikostí a ten nejlepší vychází ze srdce. Leo se už neschovává, {name}: každý hlas je jiný a ten tvůj je dokonalý přesně takový, jaký je.", fr: "Depuis, dans la savane, on dit qu'il y a des rugissements de mille tailles, et que le meilleur vient du cœur. Léo ne se cache plus, {name} : chaque voix est différente, et la tienne aussi est parfaite comme elle est." }
        }
      }
    },
    {
      id: "carrera", emoji: "🏁", start: "n1",
      title: { es: "La gran carrera de la sabana", ca: "La gran cursa de la sabana", en: "The Great Savannah Race", cs: "Velký závod na savaně", fr: "La grande course de la savane" },
      nodes: {
        n1: {
          text: { es: "¡Hoy es la gran carrera de la sabana, {name}! El guepardo presume: 'Ganaré sin despeinarme'. La tortuga Petra levanta la pata: 'Yo también corro'. Todos se ríen... menos nosotros. ¿A quién ayudamos?", ca: "Avui és la gran cursa de la sabana, {name}! El guepard presumeix: 'Guanyaré sense despentinar-me'. La tortuga Petra aixeca la pota: 'Jo també corro'. Tothom riu... menys nosaltres. A qui ajudem?", en: "Today is the great savannah race, {name}! The cheetah brags: 'I will win without breaking a sweat'. Petra the tortoise raises her leg: 'I am racing too'. Everyone laughs... except us. Who do we help?", cs: "Dnes je velký závod na savaně, {name}! Gepard se chlubí: 'Vyhraju levou zadní'. Želva Petra zvedne nožku: 'Já závodím taky'. Všichni se smějí... kromě nás. Komu pomůžeme?", fr: "Aujourd'hui, c'est la grande course de la savane, {name} ! Le guépard se vante : « Je gagnerai sans me décoiffer ». Petra la tortue lève la patte : « Moi aussi je cours ». Tout le monde rit... sauf nous. Qui aide-t-on ?" },
          choices: [
            { t: { es: "¡Al equipo de Petra la tortuga!", ca: "A l'equip de la Petra la tortuga!", en: "Team Petra the tortoise!", cs: "Týmu želvy Petry!", fr: "L'équipe de Petra la tortue !" }, go: "n2a" },
            { t: { es: "Al guepardo, para que aprenda a ser humilde", ca: "Al guepard, perquè aprengui a ser humil", en: "The cheetah, so he learns to be humble", cs: "Gepardovi, ať se naučí pokoře", fr: "Le guépard, pour qu'il apprenne l'humilité" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "Petra tiene un plan: 'No puedo ser rápida, pero puedo no parar nunca'. Le preparáis agua para el camino y le marcáis la ruta con piedritas. La carrera empieza: ¡fiuuum! El guepardo desaparece en una nube de polvo.", ca: "La Petra té un pla: 'No puc ser ràpida, però puc no parar mai'. Li prepareu aigua per al camí i li marqueu la ruta amb pedretes. La cursa comença: fiuuum! El guepard desapareix en un núvol de pols.", en: "Petra has a plan: 'I cannot be fast, but I can never stop'. You prepare water for her journey and mark the route with little stones. The race starts: whoosh! The cheetah vanishes in a cloud of dust.", cs: "Petra má plán: 'Nemůžu být rychlá, ale můžu nikdy nezastavit'. Připravíte jí vodu na cestu a vyznačíte trasu kamínky. Závod začíná: fíííú! Gepard zmizí v oblaku prachu.", fr: "Petra a un plan : « Je ne peux pas être rapide, mais je peux ne jamais m'arrêter ». Vous lui préparez de l'eau pour la route et marquez le chemin avec des petits cailloux. La course commence : fiouuu ! Le guépard disparaît dans un nuage de poussière." },
          choices: [{ t: { es: "¡Paso a paso, Petra!", ca: "Pas a pas, Petra!", en: "Step by step, Petra!", cs: "Krok za krokem, Petro!", fr: "Pas à pas, Petra !" }, go: "n3" }]
        },
        n2b: {
          text: { es: "Le decís al guepardo: 'Eres el más rápido, pero la carrera es larga y hace calor'. Él bosteza: 'Bla, bla, bla'. Sale como un rayo, adelanta a todos... y a mitad de camino se tumba a la sombra: 'Una siestecita de campeón'.", ca: "Li dieu al guepard: 'Ets el més ràpid, però la cursa és llarga i fa calor'. Ell badalla: 'Bla, bla, bla'. Surt com un llamp, avança tothom... i a mig camí s'estira a l'ombra: 'Una migdiadeta de campió'.", en: "You tell the cheetah: 'You are the fastest, but the race is long and it is hot'. He yawns: 'Blah, blah, blah'. He shoots off like lightning, passes everyone... and halfway he lies down in the shade: 'A champion's little nap'.", cs: "Řeknete gepardovi: 'Jsi nejrychlejší, ale závod je dlouhý a je horko'. On zívne: 'Bla, bla, bla'. Vyrazí jako blesk, všechny předběhne... a v půlce si lehne do stínu: 'Šampionský šlofík'.", fr: "Vous dites au guépard : « Tu es le plus rapide, mais la course est longue et il fait chaud ». Il bâille : « Bla, bla, bla ». Il part comme l'éclair, dépasse tout le monde... et à mi-chemin il s'allonge à l'ombre : « Une petite sieste de champion »." },
          choices: [{ t: { es: "Mientras, Petra sigue andando...", ca: "Mentrestant, la Petra segueix caminant...", en: "Meanwhile, Petra keeps walking...", cs: "Petra mezitím jde dál...", fr: "Pendant ce temps, Petra continue de marcher..." }, go: "n3" }]
        },
        n3: {
          text: { es: "El sol baja y el guepardo sigue soñando con trofeos. Petra pasa a su lado sin hacer ruido, pasito a pasito, parando solo para beber. La meta ya se ve... ¡y la sabana entera empieza a corear su nombre: Pe-tra, Pe-tra!", ca: "El sol baixa i el guepard segueix somiant amb trofeus. La Petra passa pel seu costat sense fer soroll, passet a passet, parant només per beure. La meta ja es veu... i la sabana sencera comença a corejar el seu nom: Pe-tra, Pe-tra!", en: "The sun goes down and the cheetah is still dreaming of trophies. Petra passes him quietly, little step by little step, stopping only to drink. The finish line is in sight... and the whole savannah starts chanting her name: Pe-tra, Pe-tra!", cs: "Slunce zapadá a gepard pořád sní o trofejích. Petra kolem něj potichu projde, krůček za krůčkem, zastaví se jen na napití. Cíl už je vidět... a celá savana začne skandovat její jméno: Pe-tra, Pe-tra!", fr: "Le soleil descend et le guépard rêve encore de trophées. Petra passe à côté de lui sans bruit, petit pas par petit pas, ne s'arrêtant que pour boire. La ligne d'arrivée est en vue... et toute la savane commence à scander son nom : Pe-tra, Pe-tra !" },
          choices: [{ t: { es: "¡El final!", ca: "El final!", en: "The finish!", cs: "Finiš!", fr: "L'arrivée !" }, go: "e1" }]
        },
        e1: {
          end: true,
          text: { es: "¡Petra cruza la meta! El guepardo llega corriendo el último, rojo de vergüenza... y hace algo valiente: aplaudir. 'Me ganaste con la cabeza y el corazón'. Desde entonces entrenan juntos: ella le enseña constancia y él, a estirar antes de correr. Rápido está bien, {name}, pero constante llega lejos.", ca: "La Petra creua la meta! El guepard arriba corrent l'últim, vermell de vergonya... i fa una cosa valenta: aplaudir. 'M'has guanyat amb el cap i el cor'. Des d'aleshores entrenen junts: ella li ensenya constància i ell, a estirar abans de córrer. Ràpid està bé, {name}, però constant arriba lluny.", en: "Petra crosses the line! The cheetah runs in last, red with embarrassment... and does something brave: he claps. 'You beat me with your head and your heart'. Since then they train together: she teaches him persistence and he teaches her to stretch before running. Fast is fine, {name}, but steady goes far.", cs: "Petra protne cílovou pásku! Gepard doběhne poslední, rudý studem... a udělá něco statečného: zatleská. 'Porazila jsi mě hlavou a srdcem'. Od té doby trénují spolu: ona ho učí vytrvalosti a on ji protahování před během. Rychlost je fajn, {name}, ale vytrvalost dojde daleko.", fr: "Petra franchit la ligne ! Le guépard arrive dernier, rouge de honte... et fait quelque chose de courageux : il applaudit. « Tu m'as battu avec ta tête et ton cœur ». Depuis, ils s'entraînent ensemble : elle lui apprend la persévérance et lui, à s'étirer avant de courir. Rapide c'est bien, {name}, mais régulier va loin." }
        }
      }
    },
    {
      id: "pinguino", emoji: "🐧", start: "n1",
      title: { es: "El pingüino friolero", ca: "El pingüí fredolic", en: "The Chilly Penguin", cs: "Zimomřivý tučňák", fr: "Le manchot frileux" },
      nodes: {
        n1: {
          text: { es: "En el polo vive Pingu... y tiene un secreto rarísimo para un pingüino: ¡tiene frío! Los demás nadan felices entre icebergs y él tirita en la orilla. Hoy nos lo ha contado a nosotros, {name}. ¿Qué hacemos?", ca: "Al pol hi viu en Pingu... i té un secret raríssim per a un pingüí: té fred! Els altres neden feliços entre icebergs i ell tremola a la vora. Avui ens ho ha explicat a nosaltres, {name}. Què fem?", en: "At the pole lives Pingu... and he has a very strange secret for a penguin: he is cold! The others swim happily between icebergs while he shivers on the shore. Today he told us, {name}. What do we do?", cs: "Na pólu žije Pingu... a má na tučňáka prapodivné tajemství: je mu zima! Ostatní šťastně plavou mezi ledovci a on se třese na břehu. Dnes se nám svěřil, {name}. Co uděláme?", fr: "Au pôle vit Pingu... et il a un secret très bizarre pour un manchot : il a froid ! Les autres nagent joyeusement entre les icebergs et lui grelotte sur le rivage. Aujourd'hui, il nous l'a confié, {name}. Qu'est-ce qu'on fait ?" },
          choices: [
            { t: { es: "Le tejemos una bufanda de algas", ca: "Li teixim una bufanda d'algues", en: "We knit him a seaweed scarf", cs: "Upleteme mu šálu z řas", fr: "On lui tricote une écharpe en algues" }, go: "n2a" },
            { t: { es: "Le enseñamos el baile de entrar en calor", ca: "Li ensenyem el ball d'entrar en calor", en: "We teach him the warm-up dance", cs: "Naučíme ho zahřívací tanec", fr: "On lui apprend la danse pour se réchauffer" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "¡La bufanda de algas queda preciosa! Pero al meterse al agua flota como un flotador y Pingu da vueltas como una peonza. Todos ríen... y a Pingu, por primera vez, la risa le da calorcito por dentro.", ca: "La bufanda d'algues queda preciosa! Però en ficar-se a l'aigua sura com un flotador i en Pingu fa voltes com una baldufa. Tothom riu... i a en Pingu, per primera vegada, el riure li fa caloreta per dins.", en: "The seaweed scarf looks lovely! But in the water it floats like a rubber ring and Pingu spins like a top. Everyone laughs... and for the first time, laughing makes Pingu feel warm inside.", cs: "Šála z řas je nádherná! Ale ve vodě plave jako kruh a Pingu se točí jako káča. Všichni se smějí... a Pinguovi je poprvé ze smíchu teplo uvnitř.", fr: "L'écharpe en algues est magnifique ! Mais dans l'eau, elle flotte comme une bouée et Pingu tourne comme une toupie. Tout le monde rit... et pour la première fois, le rire réchauffe Pingu de l'intérieur." },
          choices: [{ t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n3" }]
        },
        n2b: {
          text: { es: "El baile funciona así: aleta arriba, aleta abajo, saltito, giro ¡y culete al hielo! Pingu lo baila... y descubre que moverse da calor de verdad. Pronto media colonia baila con vosotros. ¡Hasta las focas aplauden!", ca: "El ball funciona així: aleta amunt, aleta avall, saltet, gir i culet al gel! En Pingu el balla... i descobreix que moure's fa calor de debò. Aviat mitja colònia balla amb vosaltres. Fins i tot les foques aplaudeixen!", en: "The dance goes like this: flipper up, flipper down, little jump, spin, and bottom on the ice! Pingu dances it... and discovers that moving really does warm you up. Soon half the colony is dancing with you. Even the seals applaud!", cs: "Tanec jde takhle: ploutvička nahoru, ploutvička dolů, hopík, otočka a zadeček na led! Pingu tančí... a zjistí, že pohyb opravdu zahřívá. Za chvíli tančí půlka kolonie s vámi. I tuleni tleskají!", fr: "La danse marche comme ça : aileron en haut, aileron en bas, petit saut, tour, et derrière sur la glace ! Pingu la danse... et découvre que bouger réchauffe vraiment. Bientôt, la moitié de la colonie danse avec vous. Même les phoques applaudissent !" },
          choices: [{ t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n3" }]
        },
        n3: {
          text: { es: "Entonces llega la ventisca fuerte y todos los pingüinos hacen su truco ancestral: apretarse en una piña gigante, turnándose para estar en el centro calentito. '¡Ven, Pingu, hoy el centro es para ti!'.", ca: "Aleshores arriba la ventada forta i tots els pingüins fan el seu truc ancestral: estrènyer-se en una pinya gegant, tornant-se per estar al centre calentó. 'Vine, Pingu, avui el centre és per a tu!'.", en: "Then the big blizzard comes and all the penguins do their ancient trick: huddling in a giant group, taking turns in the warm middle. 'Come, Pingu, today the middle is for you!'.", cs: "Pak přijde silná vánice a všichni tučňáci udělají svůj prastarý trik: namačkají se do obřího chumlu a střídají se v teplém středu. 'Pojď, Pingu, dnes je střed pro tebe!'.", fr: "Puis arrive le grand blizzard et tous les manchots font leur truc ancestral : se serrer en un groupe géant, chacun son tour au milieu bien chaud. « Viens, Pingu, aujourd'hui le milieu est pour toi ! »." },
          choices: [{ t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e1" }]
        },
        e1: {
          end: true,
          text: { es: "Apretadito entre sus amigos, Pingu ya no tiembla. 'Qué tonto fui al esconder mi secreto', dice. 'El frío compartido es la mitad de frío'. Y eso vale para el frío y para las penas, {name}: contarlo es la primera manta.", ca: "Estretet entre els seus amics, en Pingu ja no tremola. 'Que ximple vaig ser en amagar el meu secret', diu. 'El fred compartit és la meitat de fred'. I això val per al fred i per a les penes, {name}: explicar-ho és la primera manta.", en: "Snuggled between his friends, Pingu is not shivering anymore. 'How silly I was to hide my secret', he says. 'Shared cold is half as cold'. And that goes for cold and for sorrows, {name}: telling someone is the first blanket.", cs: "Namačkaný mezi kamarády se Pingu už netřese. 'To jsem byl hloupý, že jsem své tajemství schovával', říká. 'Sdílená zima je poloviční zima'. A to platí pro zimu i pro trápení, {name}: svěřit se je první deka.", fr: "Blotti entre ses amis, Pingu ne tremble plus. « Que j'ai été bête de cacher mon secret », dit-il. « Le froid partagé est deux fois moins froid ». Et ça vaut pour le froid et pour les chagrins, {name} : le raconter, c'est la première couverture." }
        }
      }
    }
  ],

  /* ---------- KARAOKE ---------- */
  songs: [
    { emoji: "🌴",
      title: { es: "La fiesta de la selva", ca: "La festa de la selva", en: "The Jungle Party", cs: "Oslava v džungli", fr: "La fête de la jungle" },
      lines: [
        { es: "En la selva hay una fiesta,", ca: "A la selva hi ha una festa,", en: "In the jungle there is a party,", cs: "V džungli je dnes oslava,", fr: "Dans la jungle, c'est la fête," },
        { es: "el tucán toca la orquesta.", ca: "el tucà toca a l'orquestra.", en: "the toucan leads the band, so hearty.", cs: "tukan kapelu vede zvesela.", fr: "le toucan mène l'orchestre en tête." },
        { es: "El mono baila en la liana,", ca: "El mico balla a la liana,", en: "The monkey dances on the vine,", cs: "Opička tančí na liáně,", fr: "Le singe danse sur la liane," },
        { es: "¡y la rana toca la campana!", ca: "i la granota toca la campana!", en: "and the frog rings bells so fine!", cs: "a žabka zvoní na fanfáře!", fr: "et la grenouille sonne la cloche, olé !" },
        { es: "Uh, uh, ah, ah, canta con nosotros,", ca: "Uh, uh, ah, ah, canta amb nosaltres,", en: "Ooh, ooh, ah, ah, sing along now,", cs: "Ú, ú, á, á, zpívej s námi,", fr: "Ouh, ouh, ah, ah, chante avec nous," },
        { es: "el loro repite y aprende de todos.", ca: "el lloro repeteix i aprèn de tots.", en: "the parrot repeats and takes a bow.", cs: "papoušek opakuje za branami.", fr: "le perroquet répète après nous." },
        { es: "Y {name} llega y da palmadas,", ca: "I {name} arriba i pica de mans,", en: "And {name} arrives and starts to clap,", cs: "A {name} přijde, tleská hned,", fr: "Et {name} arrive et tape des mains," },
        { es: "¡la selva entera está encantada!", ca: "la selva sencera està encantada!", en: "the whole jungle loves that clap-clap-clap!", cs: "celá džungle zpívá s ním, jé!", fr: "toute la jungle est aux anges enfin !" }
      ] },
    { emoji: "🐘",
      title: { es: "El paseo del elefante", ca: "El passeig de l'elefant", en: "The Elephant Walk", cs: "Sloní procházka", fr: "La promenade de l'éléphant" },
      lines: [
        { es: "Pom, pom, pom, camina el elefante,", ca: "Pom, pom, pom, camina l'elefant,", en: "Boom, boom, boom, the elephant is walking,", cs: "Bum, bum, bum, slon si vykračuje,", fr: "Poum, poum, poum, l'éléphant se promène," },
        { es: "con su trompa va, tan elegante.", ca: "amb la seva trompa va, tan elegant.", en: "with his trunk he goes, no time for talking.", cs: "s chobotem si vyšlapuje.", fr: "avec sa trompe, si à l'aise." },
        { es: "Saluda a la jirafa alta,", ca: "Saluda la girafa alta,", en: "He waves to the giraffe so tall,", cs: "Zdraví žirafu vysokou,", fr: "Il salue la girafe là-haut," },
        { es: "y a la cebra que da saltos.", ca: "i la zebra que fa salts.", en: "and the zebra by the wall.", cs: "i zebru poskakující nohou.", fr: "et le zèbre qui fait des sauts." },
        { es: "Con la trompa se ducha, ¡splash!,", ca: "Amb la trompa es dutxa, splaix!,", en: "With his trunk he showers, splash!,", cs: "Chobotem se sprchuje, žbluňk!,", fr: "Avec sa trompe il se douche, splash !," },
        { es: "y abraza a su bebé, ¡qué flash!", ca: "i abraça el seu nadó, quin flaix!", en: "and hugs his baby in a flash!", cs: "a objímá slůně, žádný spěch!", fr: "et fait un câlin à son bébé, flash !" },
        { es: "Y si {name} quiere venir,", ca: "I si {name} vol venir,", en: "And if {name} wants to come along,", cs: "A když {name} chce jít s ním,", fr: "Et si {name} veut venir aussi," },
        { es: "¡en su lomo puede ir!", ca: "al seu llom pot anar-hi!", en: "ride on his back and sing this song!", cs: "sveze se na hřbetě, bim!", fr: "sur son dos c'est parti !" }
      ] },
    { emoji: "🐧",
      title: { es: "El twist del pingüino", ca: "El twist del pingüí", en: "The Penguin Twist", cs: "Tučňáčí twist", fr: "Le twist du manchot" },
      lines: [
        { es: "Aleta arriba, aleta abajo,", ca: "Aleta amunt, aleta avall,", en: "Flipper up and flipper down,", cs: "Ploutvička nahoru, ploutvička dolů,", fr: "Aileron en haut, aileron en bas," },
        { es: "baila el pingüino sin trabajo.", ca: "balla el pingüí sense treball.", en: "dances the penguin round and round.", cs: "tančí tučňák bez bolu.", fr: "danse le manchot, ne t'arrête pas." },
        { es: "Patina en su barriguita,", ca: "Patina amb la seva panxeta,", en: "He slides along on his little belly,", cs: "Klouže po svém bříšku rád,", fr: "Il glisse sur son petit ventre," },
        { es: "por el hielo, ¡qué risita!", ca: "pel gel, quina rialleta!", en: "wibbly-wobbly like a jelly!", cs: "po ledu jak akrobat!", fr: "sur la glace, quel numéro !" },
        { es: "Twist, twist, en el hielo,", ca: "Twist, twist, sobre el gel,", en: "Twist, twist, on the ice,", cs: "Twist, twist, na ledu,", fr: "Twist, twist, sur la glace," },
        { es: "con los amigos, ¡qué consuelo!", ca: "amb els amics, quin consol!", en: "with your friends it feels so nice!", cs: "s kamarády do předu!", fr: "avec les amis, quelle classe !" },
        { es: "Y {name} baila el twist también,", ca: "I {name} balla el twist també,", en: "And {name} does the twist as well,", cs: "A {name} tančí twist jak um,", fr: "Et {name} danse le twist aussi," },
        { es: "¡pingüino honorario, requetebién!", ca: "pingüí honorari, la mar de bé!", en: "an honorary penguin, ring the bell!", cs: "čestný tučňák, bum bum bum!", fr: "manchot d'honneur, c'est réussi !" }
      ] }
  ],

  /* ---------- TRADUCTOR ---------- */
  translator: {
    words: [
      W_COMMON.hola,
      W_COMMON.adios,
      W_COMMON.amigo,
      { k: "leon", emoji: "🦁", name: { es: "león", ca: "lleó", en: "lion", cs: "lev", fr: "lion" } },
      { k: "elefante", emoji: "🐘", name: { es: "elefante", ca: "elefant", en: "elephant", cs: "slon", fr: "éléphant" } },
      { k: "pajaro", emoji: "🐦", name: { es: "pájaro", ca: "ocell", en: "bird", cs: "pták", fr: "oiseau" } },
      { k: "selva", emoji: "🌴", name: { es: "selva", ca: "selva", en: "jungle", cs: "džungle", fr: "jungle" } },
      { k: "huella", emoji: "🐾", name: { es: "huella", ca: "petjada", en: "footprint", cs: "stopa", fr: "empreinte" } },
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
      { id: "monito", emoji: "🐒",
        name: { es: "Monito", ca: "Miconès", en: "Monkeyish", cs: "Opičtina", fr: "Singeois" },
        greeting: { es: "¡Uh-uh-ah-ah! El monito se habla saltando de rama en rama.", ca: "Uh-uh-ah-ah! El miconès es parla saltant de branca en branca.", en: "Ooh-ooh-ah-ah! Monkeyish is spoken swinging from branch to branch.", cs: "Ú-ú-á-á! Opičtina se mluví skákáním z větve na větev.", fr: "Ouh-ouh-ah-ah ! Le singeois se parle en sautant de branche en branche." },
        dict: { hola: "uh-uh", adios: "ah-ah-va", amigo: "uhmigo", leon: "uh-grr", elefante: "uh-pom", pajaro: "uh-pio", selva: "UH-AH-UH", huella: "uh-plaf", robot: "uh-bip", mama: "uhmama", papa: "uhpapa", casa: "uh-rama", agua: "uh-glu", comida: "ñam-uh", perro: "uh-guau", gato: "uh-miau", grande: "UH-UH-UH", pequeno: "uh-chiqui", bonito: "uh-lindo", amor: "uh-amor", gracias: "uh-gracias", si: "uh", no: "ah", dormir: "uh-zzz" } },
      { id: "pajaril", emoji: "🐦",
        name: { es: "Pajaril", ca: "Ocellès", en: "Birdish", cs: "Ptáčtina", fr: "Oiselois" },
        greeting: { es: "¡Pío-trino-pío! El pajaril se canta al amanecer, cuanto más alegre mejor.", ca: "Piu-refila-piu! L'ocellès es canta a l'alba, com més alegre millor.", en: "Tweet-trill-tweet! Birdish is sung at dawn, the merrier the better.", cs: "Píp-trylek-píp! Ptáčtina se zpívá za úsvitu, čím veselejší, tím lepší.", fr: "Cui-trille-cui ! L'oiselois se chante à l'aube, plus c'est joyeux, mieux c'est." },
        dict: { hola: "pío-pío", adios: "pío-va", amigo: "piomigo", leon: "pío-grr", elefante: "pío-pom", pajaro: "PÍO-PÍO", selva: "pío-verde", huella: "pío-plaf", robot: "pío-bip", mama: "píomama", papa: "píopapa", casa: "nido-pío", agua: "pío-glu", comida: "ñam-pío", perro: "pío-guau", gato: "pío-miau (¡cuidado!)", grande: "píograndote", pequeno: "piitín", bonito: "pío-lindo", amor: "pío-amor", gracias: "pío-gracias", si: "pí", no: "po", dormir: "pío-zzz" } },
      { id: "serpentino", emoji: "🐍",
        name: { es: "Serpentino", ca: "Serpentí", en: "Snakish", cs: "Hadština", fr: "Serpentois" },
        greeting: { es: "Sssaludosss. El serpentino se sssusurra alargando las esssesss.", ca: "Sssalutssss. El serpentí es xiuxiueja allargant les esssesss.", en: "Sssalutationsss. Snakish is whissspered by ssstretching the s.", cs: "Zdravíčko ssss. Hadština se šeptá prodlužováním sss.", fr: "Sssalutationsss. Le serpentois se chuchote en étirant les sss." },
        dict: { hola: "sssola", adios: "adiósss", amigo: "amigosss", leon: "leónsss", elefante: "elefantesss", pajaro: "pajarosss (ñam)", selva: "ssselva", huella: "huellasss", robot: "robotsss", mama: "mamásss", papa: "papásss", casa: "casassss", agua: "aguassss", comida: "ñamssss", perro: "perrosss", gato: "gatosss", grande: "grandessss", pequeno: "pequeñitosss", bonito: "bonitosss", amor: "amorssss", gracias: "graciasssss", si: "sssí", no: "nosss", dormir: "zzzsss" } },
      { id: "elefantico", emoji: "🐘",
        name: { es: "Elefántico", ca: "Elefàntic", en: "Elephantish", cs: "Slonovina (jazyk)", fr: "Éléphantesque" },
        greeting: { es: "¡PRRRUUU! El elefántico se habla con la trompa, como una trompeta gigante.", ca: "PRRRUUU! L'elefàntic es parla amb la trompa, com una trompeta gegant.", en: "PRRROOO! Elephantish is spoken through the trunk, like a giant trumpet.", cs: "PRRRÚÚÚ! Slonovina se mluví chobotem, jako obří trubka.", fr: "PRRROUU ! L'éléphantesque se parle avec la trompe, comme une trompette géante." },
        dict: { hola: "prru", adios: "prru-va", amigo: "prrumigo", leon: "prru-grr", elefante: "PRRRUUU", pajaro: "prru-pio", selva: "prruselva", huella: "PRRUM (pisada)", robot: "prru-bip", mama: "prrumama", papa: "prrupapa", casa: "prrucasa", agua: "prru-splash", comida: "ñamprru", perro: "prru-guau", gato: "prru-miau", grande: "PRRUGRANDE", pequeno: "prruchiqui", bonito: "prrulindo", amor: "prruamor", gracias: "prrugracias", si: "prru-sí", no: "prru-no", dormir: "prruzzz" } }
    ]
  },

  /* ---------- MAPA ---------- */
  explore: {
    width: 2600, height: 1100, stars: false,
    bgCss: "radial-gradient(ellipse 40% 25% at 12% 8%, rgba(255,241,118,.55), transparent), linear-gradient(180deg,#81d4fa 0%,#ffe082 22%,#dce775 45%,#8bc34a 65%,#8d6e63 100%)",
    cats: [
      { id: "selva", emoji: "🌴", x: 120, name: { es: "Selva", ca: "Selva", en: "Jungle", cs: "Džungle", fr: "Jungle" } },
      { id: "sabana", emoji: "🌾", x: 800, name: { es: "Sabana", ca: "Sabana", en: "Savannah", cs: "Savana", fr: "Savane" } },
      { id: "polo", emoji: "🧊", x: 1500, name: { es: "Montañas y polos", ca: "Muntanyes i pols", en: "Mountains and poles", cs: "Hory a póly", fr: "Montagnes et pôles" } },
      { id: "desierto", emoji: "🏜️", x: 2150, name: { es: "Desierto", ca: "Desert", en: "Desert", cs: "Poušť", fr: "Désert" } }
    ],
    pois: [
      { cat: "selva", emoji: "🐒", x: 200, y: 420,
        name: { es: "Los monos", ca: "Els micos", en: "The monkeys", cs: "Opice", fr: "Les singes" },
        fact: { es: "Saltan de rama en rama usando la cola como quinta mano. Y se peinan unos a otros por amistad.", ca: "Salten de branca en branca fent servir la cua com a cinquena mà. I es pentinen els uns als altres per amistat.", en: "They swing from branch to branch using their tail as a fifth hand. And they groom each other out of friendship.", cs: "Skáčou z větve na větev a ocas používají jako pátou ruku. A z přátelství se navzájem češou.", fr: "Ils sautent de branche en branche en utilisant leur queue comme cinquième main. Et ils se coiffent entre eux par amitié." } },
      { cat: "selva", emoji: "🦜", x: 380, y: 340,
        name: { es: "El tucán", ca: "El tucà", en: "The toucan", cs: "Tukan", fr: "Le toucan" },
        fact: { es: "Su pico gigante parece pesado, pero es ligero como una esponja. ¡Y de colores!", ca: "El seu bec gegant sembla pesat, però és lleuger com una esponja. I de colors!", en: "Its giant beak looks heavy, but it is light as a sponge. And so colourful!", cs: "Jeho obří zobák vypadá těžký, ale je lehký jako houbička. A barevný!", fr: "Son bec géant a l'air lourd, mais il est léger comme une éponge. Et tout coloré !" } },
      { cat: "selva", emoji: "🐆", x: 520, y: 500,
        name: { es: "El jaguar", ca: "El jaguar", en: "The jaguar", cs: "Jaguár", fr: "Le jaguar" },
        fact: { es: "El gato grande de América. Le encanta nadar, no como a los gatos de casa.", ca: "El gat gran d'Amèrica. Li encanta nedar, no com als gats de casa.", en: "The big cat of the Americas. It loves swimming, unlike house cats.", cs: "Velká kočka Ameriky. Miluje plavání, na rozdíl od domácích koček.", fr: "Le grand chat des Amériques. Il adore nager, pas comme les chats de maison." } },
      { cat: "selva", emoji: "🐸", x: 640, y: 380,
        name: { es: "La rana de colores", ca: "La granota de colors", en: "The colourful frog", cs: "Barevná žabka", fr: "La grenouille colorée" },
        fact: { es: "Cuanto más brillante es su color, más dice: mírame pero no me toques.", ca: "Com més brillant és el seu color, més diu: mira'm però no em toquis.", en: "The brighter its colour, the louder it says: look at me but do not touch me.", cs: "Čím zářivější barvu má, tím hlasitěji říká: dívej se, ale nesahej.", fr: "Plus sa couleur est vive, plus elle dit : regarde-moi mais ne me touche pas." } },
      { cat: "sabana", emoji: "🦁", x: 850, y: 460, size: 2,
        name: { es: "Los leones", ca: "Els lleons", en: "The lions", cs: "Lvi", fr: "Les lions" },
        fact: { es: "Duermen la siesta casi todo el día. Las leonas del equipo son las grandes cazadoras.", ca: "Fan la migdiada gairebé tot el dia. Les lleones de l'equip són les grans caçadores.", en: "They nap most of the day. The lionesses of the team are the great hunters.", cs: "Prospí skoro celý den. Velké lovkyně týmu jsou lvice.", fr: "Ils font la sieste presque toute la journée. Les lionnes de l'équipe sont les grandes chasseuses." } },
      { cat: "sabana", emoji: "🐘", x: 1040, y: 380,
        name: { es: "Los elefantes", ca: "Els elefants", en: "The elephants", cs: "Sloni", fr: "Les éléphants" },
        fact: { es: "La abuela elefanta guía a la familia hasta el agua. Y todos se abrazan con la trompa.", ca: "L'àvia elefanta guia la família fins a l'aigua. I tots s'abracen amb la trompa.", en: "The elephant granny leads the family to the water. And they all hug with their trunks.", cs: "Sloní babička vede rodinu k vodě. A všichni se objímají choboty.", fr: "La grand-mère éléphante guide la famille jusqu'à l'eau. Et tous se câlinent avec la trompe." } },
      { cat: "sabana", emoji: "🦒", x: 1200, y: 480,
        name: { es: "La jirafa", ca: "La girafa", en: "The giraffe", cs: "Žirafa", fr: "La girafe" },
        fact: { es: "Alta como una casa de dos pisos y con la lengua azul oscuro para no quemarse al sol.", ca: "Alta com una casa de dos pisos i amb la llengua blau fosc per no cremar-se al sol.", en: "Tall as a two-storey house, with a dark blue tongue so it does not get sunburnt.", cs: "Vysoká jako dvoupatrový dům, s tmavě modrým jazykem, aby se nespálila na slunci.", fr: "Haute comme une maison de deux étages, avec une langue bleu foncé pour ne pas prendre de coup de soleil." } },
      { cat: "sabana", emoji: "🐆", x: 1360, y: 400,
        name: { es: "El guepardo", ca: "El guepard", en: "The cheetah", cs: "Gepard", fr: "Le guépard" },
        fact: { es: "De cero a cien en tres segundos... y luego, siesta obligatoria a la sombra.", ca: "De zero a cent en tres segons... i després, migdiada obligatòria a l'ombra.", en: "Zero to a hundred in three seconds... and then, a compulsory nap in the shade.", cs: "Z nuly na sto za tři sekundy... a pak povinný šlofík ve stínu.", fr: "De zéro à cent en trois secondes... et ensuite, sieste obligatoire à l'ombre." } },
      { cat: "polo", emoji: "🐧", x: 1550, y: 520,
        name: { es: "Los pingüinos", ca: "Els pingüins", en: "The penguins", cs: "Tučňáci", fr: "Les manchots" },
        fact: { es: "Cuando hace mucho frío se apiñan todos juntos y se turnan el sitio calentito del centro.", ca: "Quan fa molt fred s'apinyen tots junts i es tornen el lloc calentó del centre.", en: "When it is freezing they huddle together and take turns in the warm middle spot.", cs: "Když je velká zima, namačkají se k sobě a střídají se na teplém místě uprostřed.", fr: "Quand il fait très froid, ils se serrent tous ensemble et se relaient à la place chaude du milieu." } },
      { cat: "polo", emoji: "🐻‍❄️", x: 1720, y: 400,
        name: { es: "El oso polar", ca: "L'ós polar", en: "The polar bear", cs: "Lední medvěd", fr: "L'ours polaire" },
        fact: { es: "Su pelo parece blanco pero es transparente, y debajo su piel es negra para guardar el calor.", ca: "El seu pèl sembla blanc però és transparent, i a sota la seva pell és negra per guardar la calor.", en: "Its fur looks white but is see-through, and underneath its skin is black to keep the heat.", cs: "Jeho srst vypadá bílá, ale je průhledná, a kůže pod ní je černá, aby držela teplo.", fr: "Son poil paraît blanc mais il est transparent, et dessous sa peau est noire pour garder la chaleur." } },
      { cat: "polo", emoji: "🦅", x: 1880, y: 320,
        name: { es: "El águila de montaña", ca: "L'àguila de muntanya", en: "The mountain eagle", cs: "Horský orel", fr: "L'aigle des montagnes" },
        fact: { es: "Desde lo alto ve un ratoncito a un kilómetro. ¡Los mejores ojos del cielo!", ca: "Des de dalt veu un ratolinet a un quilòmetre. Els millors ulls del cel!", en: "From high up it can spot a little mouse a kilometre away. The best eyes in the sky!", cs: "Z výšky uvidí myšku na kilometr daleko. Nejlepší oči na nebi!", fr: "De là-haut, il voit une petite souris à un kilomètre. Les meilleurs yeux du ciel !" } },
      { cat: "polo", emoji: "🐐", x: 1980, y: 550,
        name: { es: "La cabra montesa", ca: "La cabra salvatge", en: "The mountain goat", cs: "Kamzík", fr: "Le bouquetin" },
        fact: { es: "Escala paredes casi verticales con sus pezuñas de escaladora profesional.", ca: "Escala parets gairebé verticals amb les seves peülles d'escaladora professional.", en: "It climbs almost vertical walls with its professional climber hooves.", cs: "Šplhá po skoro svislých stěnách svými kopýtky profesionální horolezkyně.", fr: "Il escalade des parois presque verticales avec ses sabots d'alpiniste professionnel." } },
      { cat: "desierto", emoji: "🐫", x: 2200, y: 450, size: 2,
        name: { es: "El camello", ca: "El camell", en: "The camel", cs: "Velbloud", fr: "Le chameau" },
        fact: { es: "Sus jorobas guardan grasa, no agua. Y sus pestañas larguísimas paran la arena.", ca: "Les seves gepes guarden greix, no aigua. I les seves pestanyes llarguíssimes paren la sorra.", en: "Its humps store fat, not water. And its extra-long eyelashes keep out the sand.", cs: "Jeho hrby skladují tuk, ne vodu. A jeho predlouhé řasy zastavují písek.", fr: "Ses bosses gardent de la graisse, pas de l'eau. Et ses très longs cils arrêtent le sable." } },
      { cat: "desierto", emoji: "🦊", x: 2380, y: 380,
        name: { es: "El fénec", ca: "El fènec", en: "The fennec fox", cs: "Fenek", fr: "Le fennec" },
        fact: { es: "El zorrito del desierto tiene orejas gigantes que le sirven de abanico.", ca: "La guineueta del desert té orelles gegants que li serveixen de ventall.", en: "The little desert fox has giant ears that work as a fan.", cs: "Pouštní lištička má obrovské uši, které jí slouží jako vějíř.", fr: "Le petit renard du désert a des oreilles géantes qui lui servent d'éventail." } },
      { cat: "desierto", emoji: "🦎", x: 2480, y: 560,
        name: { es: "El lagarto del desierto", ca: "El llangardaix del desert", en: "The desert lizard", cs: "Pouštní ještěrka", fr: "Le lézard du désert" },
        fact: { es: "Cuando la arena quema, baila levantando las patitas por turnos. ¡El baile del calor!", ca: "Quan la sorra crema, balla aixecant les potetes per torns. El ball de la calor!", en: "When the sand burns, it dances lifting its feet in turns. The heat dance!", cs: "Když písek pálí, tancuje a střídavě zvedá nožičky. Tanec horka!", fr: "Quand le sable brûle, il danse en levant ses petites pattes chacune leur tour. La danse de la chaleur !" } }
    ]
  },

  /* ---------- CHARLA ---------- */
  chat: {
    keywords: [
      { keys: ["hola", "hello", "hi ", "ahoj", "bonjour", "salut", "bon dia", "buenas"],
        replies: [{ es: "¡Hola, {name}! Shhh... estoy observando una familia de elefantes. ¡Acaban de saludarnos con la trompa!", ca: "Hola, {name}! Xxxt... estic observant una família d'elefants. Acaben de saludar-nos amb la trompa!", en: "Hi, {name}! Shhh... I am watching a family of elephants. They just waved at us with their trunks!", cs: "Ahoj, {name}! Pššš... pozoruju sloní rodinu. Právě nám zamávali choboty!", fr: "Salut, {name} ! Chut... j'observe une famille d'éléphants. Ils viennent de nous saluer avec la trompe !" }] },
      { keys: ["como estas", "how are you", "jak se mas", "comment ca va", "com estas", "que tal"],
        replies: [{ es: "¡Feliz como un koala recién despertado de su siesta número tres! ¿Y tú, {name}?", ca: "Feliç com un coala acabat de despertar de la seva migdiada número tres! I tu, {name}?", en: "Happy as a koala fresh from nap number three! And you, {name}?", cs: "Šťastný jako koala po svém třetím šlofíku! A ty, {name}?", fr: "Heureux comme un koala qui sort de sa sieste numéro trois ! Et toi, {name} ?" }] },
      { keys: ["cancion", "musica", "music", "song", "sing", "pisnicka", "hudba", "chanson", "musique", "canço", "canta", "zpiv", "chante"],
        replies: [{ es: "¡La selva entera es una orquesta! ¿Vamos al Karaoke a cantar con el tucán y los monos? Uh-uh-ah-ah.", ca: "La selva sencera és una orquestra! Anem al Karaoke a cantar amb el tucà i els micos? Uh-uh-ah-ah.", en: "The whole jungle is an orchestra! Shall we go to Karaoke and sing with the toucan and the monkeys? Ooh-ooh-ah-ah.", cs: "Celá džungle je orchestr! Půjdeme na karaoke zpívat s tukanem a opicemi? Ú-ú-á-á.", fr: "Toute la jungle est un orchestre ! On va au karaoké chanter avec le toucan et les singes ? Ouh-ouh-ah-ah." }] },
      { keys: ["chiste", "joke", "vtip", "blague", "acudit", "broma"],
        replies: [
          { es: "¿Qué le dice un jaguar a otro jaguar? Jaguar you! Ja, ja. Perdón, ese me lo enseñó un loro.", ca: "Què li diu un jaguar a un altre jaguar? Jaguar you! Ha, ha. Perdó, aquest me'l va ensenyar un lloro.", en: "What does one jaguar say to another? Jaguar you doing! Ha ha. Sorry, a parrot taught me that one.", cs: "Co říká jeden jaguár druhému? Jak-uár se máš! Ha ha. Promiň, ten mě naučil papoušek.", fr: "Que dit un jaguar à un autre jaguar ? Ja-guar bien, merci ! Ha ha. Pardon, c'est un perroquet qui me l'a apprise." },
          { es: "¿Por qué el wombat hace las cacas cuadradas? ¡Para que no rueden cuesta abajo! Y es verdad, ¿eh? Ji, ji.", ca: "Per què el wombat fa les caques quadrades? Perquè no rodolin costa avall! I és veritat, eh? Hi, hi.", en: "Why does the wombat do cube-shaped poos? So they do not roll downhill! And it is true, you know. Hee hee.", cs: "Proč dělá wombat hranaté bobky? Aby se nekutálely z kopce! A je to pravda, víš? Chi chi.", fr: "Pourquoi le wombat fait des crottes carrées ? Pour qu'elles ne roulent pas en bas de la colline ! Et c'est vrai, hein ? Hi hi." }] },
      { keys: ["te quiero", "love you", "t'estimo", "testimo", "mam te rad", "je t'aime", "jetaime"],
        replies: [{ es: "¡Y yo a ti, {name}! Te quiero un abrazo de oso... de oso panda, que son los más blanditos.", ca: "I jo a tu, {name}! T'estimo una abraçada d'ós... d'ós panda, que són els més tovets.", en: "I love you too, {name}! A whole bear hug of love... a panda hug, the softest kind.", cs: "Já tebe taky, {name}! Mám tě rád jako medvědí objetí... pandí, ta jsou nejměkčí.", fr: "Moi aussi je t'aime, {name} ! Gros comme un câlin d'ours... de panda, ce sont les plus doux." }] },
      { keys: ["triste", "sad", "smutn", "llorar", "plorar", "cry", "chagrin"],
        replies: [{ es: "Ven aquí, {name}. ¿Sabes qué hacen los elefantes cuando uno está triste? Se quedan a su lado, tocándolo con la trompa. Yo me quedo contigo. Cuéntame.", ca: "Vine aquí, {name}. Saps què fan els elefants quan un està trist? Es queden al seu costat, tocant-lo amb la trompa. Jo em quedo amb tu. Explica'm.", en: "Come here, {name}. Do you know what elephants do when one is sad? They stay close, touching them with their trunk. I am staying with you. Tell me.", cs: "Pojď sem, {name}. Víš, co dělají sloni, když je jeden smutný? Zůstanou u něj a dotýkají se ho chobotem. Já zůstanu s tebou. Povídej.", fr: "Viens, {name}. Tu sais ce que font les éléphants quand l'un d'eux est triste ? Ils restent à côté, en le touchant avec la trompe. Je reste avec toi. Raconte-moi." }] },
      { keys: ["donde estas", "where are you", "kde jsi", "ou es tu", "on ets"],
        replies: [{ es: "Estoy en la charca de la sabana viendo beber a las jirafas. ¡Tienen que abrir las patas como un compás para llegar al agua!", ca: "Soc a la bassa de la sabana veient beure les girafes. Han d'obrir les potes com un compàs per arribar a l'aigua!", en: "I am at the savannah waterhole watching the giraffes drink. They have to spread their legs like a compass to reach the water!", cs: "Jsem u napajedla na savaně a koukám, jak pijí žirafy. Musí roztáhnout nohy jako kružítko, aby dosáhly na vodu!", fr: "Je suis au point d'eau de la savane à regarder boire les girafes. Elles doivent écarter les pattes comme un compas pour atteindre l'eau !" }] },
      { keys: ["leon", "lion", "lev ", "lleo"],
        replies: [{ es: "¡El león! Ruge tan fuerte que se oye a ocho kilómetros. Pero entre tú y yo: se pasa el día durmiendo la siesta.", ca: "El lleó! Rugeix tan fort que se sent a vuit quilòmetres. Però entre tu i jo: es passa el dia fent la migdiada.", en: "The lion! It roars so loud you can hear it eight kilometres away. But between you and me: it spends all day napping.", cs: "Lev! Řve tak silně, že je slyšet na osm kilometrů. Ale mezi námi: celý den prospí.", fr: "Le lion ! Il rugit si fort qu'on l'entend à huit kilomètres. Mais entre toi et moi : il passe la journée à faire la sieste." }] },
      { keys: ["dinosauri", "dinosaur"],
        replies: [{ es: "¿Sabes quiénes son los nietos de los dinosaurios? ¡Los pájaros! El gorrión de tu ventana es un pequeño T-Rex con plumas.", ca: "Saps qui són els néts dels dinosaures? Els ocells! El pardal de la teva finestra és un petit T-Rex amb plomes.", en: "Do you know who the dinosaurs' grandchildren are? Birds! The sparrow at your window is a little feathered T-Rex.", cs: "Víš, kdo jsou vnoučata dinosaurů? Ptáci! Vrabec za tvým oknem je malý opeřený T-Rex.", fr: "Tu sais qui sont les petits-enfants des dinosaures ? Les oiseaux ! Le moineau de ta fenêtre est un petit T-Rex à plumes." }] },
      { keys: ["cole", "school", "escola", "skola", "ecole"],
        replies: [{ es: "¿Qué tal el cole, {name}? Los suricatos también tienen escuela: los mayores enseñan a los pequeños a buscar comida. ¡Cuéntame qué aprendiste!", ca: "Què tal l'escola, {name}? Els suricates també tenen escola: els grans ensenyen els petits a buscar menjar. Explica'm què vas aprendre!", en: "How was school, {name}? Meerkats have school too: the grown-ups teach the little ones to find food. Tell me what you learned!", cs: "Jaké to bylo ve škole, {name}? Surikaty mají taky školu: dospělí učí malé hledat jídlo. Pověz mi, co ses naučila!", fr: "C'était comment l'école, {name} ? Les suricates aussi ont une école : les grands apprennent aux petits à trouver à manger. Raconte-moi ce que tu as appris !" }] }
    ],
    fallback: [
      { es: "¿Sabías que las vacas tienen mejores amigas y se ponen tristes si las separan? Los animales también tienen corazón.", ca: "Sabies que les vaques tenen millors amigues i es posen tristes si les separen? Els animals també tenen cor.", en: "Did you know cows have best friends and get sad if they are separated? Animals have hearts too.", cs: "Věděla jsi, že krávy mají nejlepší kamarádky a jsou smutné, když je rozdělí? Zvířata mají taky srdce.", fr: "Tu savais que les vaches ont des meilleures amies et sont tristes si on les sépare ? Les animaux aussi ont un cœur." },
      { es: "Los pulpos de tierra no existen, pero el camaleón lo compensa: mueve cada ojo por su cuenta.", ca: "Els pops de terra no existeixen, però el camaleó ho compensa: mou cada ull pel seu compte.", en: "There are no land octopuses, but the chameleon makes up for it: each eye moves on its own.", cs: "Suchozemské chobotnice neexistují, ale chameleon to vynahrazuje: každým okem hýbe zvlášť.", fr: "Les pieuvres terrestres n'existent pas, mais le caméléon compense : chaque œil bouge tout seul." },
      { es: "Las abejas bailan para contarse dónde están las mejores flores. ¡Un GPS bailarín!", ca: "Les abelles ballen per explicar-se on són les millors flors. Un GPS ballarí!", en: "Bees dance to tell each other where the best flowers are. A dancing GPS!", cs: "Včely tancují, aby si řekly, kde jsou nejlepší květiny. Tančící GPS!", fr: "Les abeilles dansent pour se dire où sont les meilleures fleurs. Un GPS danseur !" },
      { es: "{name}, cuidar a un animal es un superpoder: te enseña a pensar en alguien más que en ti.", ca: "{name}, cuidar un animal és un superpoder: t'ensenya a pensar en algú més que en tu.", en: "{name}, caring for an animal is a superpower: it teaches you to think of someone besides yourself.", cs: "{name}, starat se o zvíře je superschopnost: naučí tě myslet i na někoho jiného než na sebe.", fr: "{name}, prendre soin d'un animal est un superpouvoir : ça t'apprend à penser à quelqu'un d'autre que toi." },
      { es: "¿Cuál es tu animal favorito? El mío es el pulpo... espera, ese es del mar. En tierra: ¡el wombat de las cacas cuadradas!", ca: "Quin és el teu animal preferit? El meu és el pop... espera, aquest és del mar. A terra: el wombat de les caques quadrades!", en: "What is your favourite animal? Mine is the octopus... wait, that one is from the sea. On land: the cube-poo wombat!", cs: "Které zvíře máš nejradši? Já chobotnici... počkat, ta je z moře. Na souši: wombata s hranatými bobky!", fr: "Quel est ton animal préféré ? Moi, la pieuvre... attends, elle est de la mer. Sur terre : le wombat aux crottes carrées !" },
      { es: "Los flamencos nacen grises y se vuelven rosas por las gambitas que comen. ¡Eres lo que comes!", ca: "Els flamencs neixen grisos i es tornen roses per les gambetes que mengen. Ets el que menges!", en: "Flamingos are born grey and turn pink from the little shrimp they eat. You are what you eat!", cs: "Plameňáci se rodí šediví a zrůžoví z krevetek, které jedí. Jsi to, co jíš!", fr: "Les flamants naissent gris et deviennent roses grâce aux petites crevettes qu'ils mangent. Tu es ce que tu manges !" }
    ]
  }
});
