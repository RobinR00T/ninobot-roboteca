"use strict";
/* ============================================================
   Contenido de POLICÍA (parte B): historias ramificadas,
   canciones, traductor, mapa de la ciudad amable, charla,
   mates, taller del coche patrulla y famosos de verdad.
   ============================================================ */

const polSvg = (inner, vb) => `<svg viewBox="${vb || "0 0 100 100"}" width="100%" height="100%">${inner}</svg>`;

Object.assign(THEMES.policia.content, {

  /* ---------- HISTORIAS (ramifican de verdad) ---------- */
  stories: [
    {
      id: "peluche", emoji: "🧸", start: "n1",
      title: { es: "El peluche perdido", ca: "El peluix perdut", en: "The Lost Teddy", cs: "Ztracený plyšák", fr: "La peluche perdue" },
      nodes: {
        n1: {
          text: { es: "En el parque, una niña pequeña llora bajito: su peluche ha desaparecido mientras jugaba. La agente Marta os pide ayuda. ¿Por dónde empezamos, {name}?", ca: "Al parc, una nena petita plora fluixet: el seu peluix ha desaparegut mentre jugava. L'agent Marta us demana ajuda. Per on comencem, {name}?", en: "In the park, a little girl is crying softly: her teddy disappeared while she was playing. Officer Marta asks for your help. Where do we start, {name}?", cs: "V parku tiše pláče malá holčička: při hraní se jí ztratil plyšák. Policistka Marta vás prosí o pomoc. Kde začneme, {name}?", fr: "Au parc, une petite fille pleure tout bas : sa peluche a disparu pendant qu'elle jouait. L'agente Marta vous demande de l'aide. Par où on commence, {name} ?" },
          choices: [
            { t: { es: "Sacamos la lupa y buscamos pistas", ca: "Traiem la lupa i busquem pistes", en: "We take out the magnifying glass and look for clues", cs: "Vytáhneme lupu a hledáme stopy", fr: "On sort la loupe et on cherche des indices" }, go: "n2a" },
            { t: { es: "Llamamos a Rocky, el perro policía", ca: "Cridem en Rocky, el gos policia", en: "We call Rocky, the police dog", cs: "Zavoláme policejního psa Rockyho", fr: "On appelle Rocky, le chien policier" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "Con la lupa encontráis un lacito rojo junto a la fuente y un caminito de arena que cruza el parque. ¡Las pistas hablan! ¿Adónde vamos?", ca: "Amb la lupa trobeu un llacet vermell al costat de la font i un caminet de sorra que travessa el parc. Les pistes parlen! On anem?", en: "With the magnifying glass you find a little red ribbon by the fountain and a trail of sand crossing the park. The clues are talking! Where do we go?", cs: "S lupou najdete červenou mašličku u fontány a cestičku z písku přes park. Stopy mluví! Kam půjdeme?", fr: "Avec la loupe, vous trouvez un petit ruban rouge près de la fontaine et un chemin de sable qui traverse le parc. Les indices parlent ! Où va-t-on ?" },
          choices: [
            { t: { es: "Miramos en lo alto del tobogán", ca: "Mirem a dalt del tobogan", en: "We look at the top of the slide", cs: "Podíváme se nahoru na skluzavku", fr: "On regarde en haut du toboggan" }, go: "e1" },
            { t: { es: "Preguntamos en la oficina de objetos perdidos", ca: "Preguntem a l'oficina d'objectes perduts", en: "We ask at the lost and found office", cs: "Zeptáme se ve ztrátách a nálezech", fr: "On demande au bureau des objets trouvés" }, go: "e2" }
          ]
        },
        n2b: {
          text: { es: "Rocky huele la bufanda de la niña, mueve la cola y sale trotando. Se para delante del arenero y escarba con las patitas, muy suave.", ca: "En Rocky olora la bufanda de la nena, mou la cua i surt trotant. S'atura davant del sorral i escarba amb les potetes, molt suau.", en: "Rocky sniffs the girl's scarf, wags his tail and trots off. He stops in front of the sandpit and digs gently with his little paws.", cs: "Rocky očichá holčiččinu šálu, zavrtí ocasem a vyrazí. Zastaví se před pískovištěm a jemně hrabe tlapkami.", fr: "Rocky renifle l'écharpe de la petite fille, remue la queue et part en trottinant. Il s'arrête devant le bac à sable et gratte tout doucement avec ses pattes." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e3" }
          ]
        },
        e1: {
          end: true,
          text: { es: "¡Ahí está! El peluche esperaba sentado en lo alto del tobogán, mirando las nubes: la niña lo dejó allí antes de tirarse. Ella lo abraza fuerte y te da las gracias, {name}. Mirar con atención y pedir ayuda: así se encuentran las cosas.", ca: "Aquí és! El peluix esperava assegut a dalt del tobogan, mirant els núvols: la nena el va deixar allà abans de tirar-se. Ella l'abraça fort i et dona les gràcies, {name}. Mirar amb atenció i demanar ajuda: així es troben les coses.", en: "There it is! The teddy was waiting at the top of the slide, watching the clouds: the girl left it there before sliding down. She hugs it tight and thanks you, {name}. Looking carefully and asking for help: that is how things get found.", cs: "Tady je! Plyšák seděl nahoře na skluzavce a koukal na mraky: holčička ho tam nechala, než sjela dolů. Pevně ho obejme a děkuje ti, {name}. Dívat se pozorně a poprosit o pomoc: tak se věci najdou.", fr: "Le voilà ! La peluche attendait en haut du toboggan en regardant les nuages : la petite fille l'avait posée là avant de glisser. Elle la serre fort et te remercie, {name}. Regarder attentivement et demander de l'aide : c'est comme ça qu'on retrouve les choses." }
        },
        e2: {
          end: true,
          text: { es: "En la oficina de objetos perdidos, el peluche esperaba sentadito en la estantería: un abuelo lo encontró y lo llevó allí. La niña lo abraza y el abuelo sonríe. Si encuentras algo perdido, llévalo a objetos perdidos: alguien lo está buscando, {name}.", ca: "A l'oficina d'objectes perduts, el peluix esperava assegudet a la prestatgeria: un avi el va trobar i el va portar allà. La nena l'abraça i l'avi somriu. Si trobes alguna cosa perduda, porta-la a objectes perduts: algú la deu estar buscant, {name}.", en: "At the lost and found office, the teddy was waiting on the shelf: a grandpa found it and brought it there. The girl hugs it and the grandpa smiles. If you find something lost, take it to lost and found: someone is looking for it, {name}.", cs: "Ve ztrátách a nálezech seděl plyšák na poličce: našel ho jeden dědeček a přinesl ho tam. Holčička ho obejme a dědeček se usmívá. Když najdeš něco ztraceného, odnes to do ztrát a nálezů: někdo to hledá, {name}.", fr: "Au bureau des objets trouvés, la peluche attendait sagement sur l'étagère : un grand-père l'avait trouvée et apportée là. La petite fille la serre dans ses bras et le grand-père sourit. Si tu trouves quelque chose de perdu, apporte-le aux objets trouvés : quelqu'un le cherche, {name}." }
        },
        e3: {
          end: true,
          text: { es: "¡Rocky lo ha encontrado! El peluche estaba enterrado en la arena, de un juego de piratas de esta mañana. La niña le da mil caricias a Rocky, que mueve la cola feliz. La nariz de un perro policía nunca falla, {name}.", ca: "En Rocky l'ha trobat! El peluix estava enterrat a la sorra, d'un joc de pirates d'aquest matí. La nena fa mil carícies a en Rocky, que mou la cua feliç. El nas d'un gos policia mai no falla, {name}.", en: "Rocky found it! The teddy was buried in the sand from a pirate game this morning. The girl gives Rocky a thousand strokes and he wags his tail happily. A police dog's nose never fails, {name}.", cs: "Rocky ho našel! Plyšák byl zahrabaný v písku od ranní hry na piráty. Holčička Rockyho tisíckrát pohladí a on šťastně vrtí ocasem. Nos policejního psa nikdy nezklame, {name}.", fr: "Rocky l'a trouvée ! La peluche était enterrée dans le sable depuis un jeu de pirates du matin. La petite fille fait mille caresses à Rocky, qui remue la queue tout content. Le nez d'un chien policier ne se trompe jamais, {name}." }
        }
      }
    },
    {
      id: "patitos", emoji: "🦆", start: "n1",
      title: { es: "El patito que corta el tráfico", ca: "L'aneguet que talla el trànsit", en: "The Duckling That Stops the Traffic", cs: "Kachňátko, které zastavilo dopravu", fr: "Le caneton qui arrête la circulation" },
      nodes: {
        n1: {
          text: { es: "¡Cuac, cuac! Una mamá pata y sus cinco patitos quieren cruzar la avenida para llegar al estanque del parque. Los coches esperan sin saber qué hacer. La agente Marta te mira: ¿cómo los ayudamos, {name}?", ca: "Cuac, cuac! Una mare ànega i els seus cinc aneguets volen creuar l'avinguda per arribar a l'estany del parc. Els cotxes esperen sense saber què fer. L'agent Marta et mira: com els ajudem, {name}?", en: "Quack, quack! A mummy duck and her five ducklings want to cross the avenue to reach the park pond. The cars are waiting, not sure what to do. Officer Marta looks at you: how do we help them, {name}?", cs: "Káč, káč! Maminka kachna a jejích pět kachňátek chce přejít třídu k rybníčku v parku. Auta čekají a neví, co dělat. Policistka Marta se na tebe podívá: jak jim pomůžeme, {name}?", fr: "Coin, coin ! Une maman cane et ses cinq canetons veulent traverser l'avenue pour rejoindre l'étang du parc. Les voitures attendent sans savoir quoi faire. L'agente Marta te regarde : comment les aider, {name} ?" },
          choices: [
            { t: { es: "Tocamos el silbato y levantamos la mano para parar los coches", ca: "Toquem el xiulet i aixequem la mà per parar els cotxes", en: "We blow the whistle and raise a hand to stop the cars", cs: "Zapískáme na píšťalku a zvedneme ruku, aby auta zastavila", fr: "On siffle et on lève la main pour arrêter les voitures" }, go: "n2a" },
            { t: { es: "Hacemos un caminito de semillas hasta el paso de cebra", ca: "Fem un caminet de llavors fins al pas de zebra", en: "We make a little trail of seeds to the zebra crossing", cs: "Uděláme cestičku ze semínek až k přechodu", fr: "On fait un petit chemin de graines jusqu'au passage piéton" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "¡Piiii! Levantas la mano y los coches paran contentos. Los conductores saludan por la ventanilla mientras la familia cruza en fila india. Pero espera... ¡un patito se ha quedado atrás, mirándose en un charco!", ca: "Piiii! Aixeques la mà i els cotxes paren contents. Els conductors saluden per la finestreta mentre la família creua en fila índia. Però espera... un aneguet s'ha quedat enrere, mirant-se en un bassal!", en: "Peeep! You raise your hand and the cars happily stop. The drivers wave through their windows while the family crosses in single file. But wait... one duckling stayed behind, looking at itself in a puddle!", cs: "Píííp! Zvedneš ruku a auta ochotně zastaví. Řidiči mávají z okének, zatímco rodinka přechází v řadě za sebou. Ale počkat... jedno kachňátko se zdrželo, prohlíží se v louži!", fr: "Piiii ! Tu lèves la main et les voitures s'arrêtent gentiment. Les conducteurs saluent par la fenêtre pendant que la famille traverse en file indienne. Mais attends... un caneton est resté en arrière, à se regarder dans une flaque !" },
          choices: [
            { t: { es: "Lo cogemos con las dos manos, con mucho cuidado", ca: "L'agafem amb les dues mans, amb molt de compte", en: "We pick it up with both hands, very carefully", cs: "Opatrně ho vezmeme do obou dlaní", fr: "On le prend à deux mains, très délicatement" }, go: "e1" },
            { t: { es: "Lo llamamos haciendo cuac cuac", ca: "El cridem fent cuac cuac", en: "We call it going quack quack", cs: "Zavoláme na něj káč káč", fr: "On l'appelle en faisant coin coin" }, go: "e2" }
          ]
        },
        n2b: {
          text: { es: "Los patitos siguen el caminito de semillas hasta el paso de cebra, picoteando y moviendo la colita. Los coches paran solos al verlos. Pero espera... ¡un patito se ha quedado atrás, mirándose en un charco!", ca: "Els aneguets segueixen el caminet de llavors fins al pas de zebra, picotejant i movent la cueta. Els cotxes paren sols en veure'ls. Però espera... un aneguet s'ha quedat enrere, mirant-se en un bassal!", en: "The ducklings follow the seed trail to the zebra crossing, pecking and wiggling their tails. The cars stop on their own when they see them. But wait... one duckling stayed behind, looking at itself in a puddle!", cs: "Kachňátka jdou po cestičce ze semínek až k přechodu, zobou a vrtí ocásky. Auta sama zastaví, když je uvidí. Ale počkat... jedno kachňátko se zdrželo, prohlíží se v louži!", fr: "Les canetons suivent le chemin de graines jusqu'au passage piéton, en picorant et en remuant la queue. Les voitures s'arrêtent toutes seules en les voyant. Mais attends... un caneton est resté en arrière, à se regarder dans une flaque !" },
          choices: [
            { t: { es: "Lo cogemos con las dos manos, con mucho cuidado", ca: "L'agafem amb les dues mans, amb molt de compte", en: "We pick it up with both hands, very carefully", cs: "Opatrně ho vezmeme do obou dlaní", fr: "On le prend à deux mains, très délicatement" }, go: "e1" },
            { t: { es: "Lo llamamos haciendo cuac cuac", ca: "El cridem fent cuac cuac", en: "We call it going quack quack", cs: "Zavoláme na něj káč káč", fr: "On l'appelle en faisant coin coin" }, go: "e2" }
          ]
        },
        e1: {
          end: true,
          text: { es: "Lo levantas despacito con las dos manos, como un tesoro, y lo dejas junto a su mamá. ¡Al agua, patos! Toda la familia nada feliz por el estanque y los conductores aplauden. La policía también ayuda a los animales, {name}. Y esto pasa de verdad: hay agentes que paran el tráfico para que crucen los patos.", ca: "L'aixeques a poc a poc amb les dues mans, com un tresor, i el deixes al costat de la seva mare. A l'aigua, ànecs! Tota la família neda feliç per l'estany i els conductors aplaudeixen. La policia també ajuda els animals, {name}. I això passa de debò: hi ha agents que paren el trànsit perquè creuin els ànecs.", en: "You lift it slowly with both hands, like a treasure, and set it next to its mum. Into the water, ducks! The whole family swims happily around the pond and the drivers clap. The police help animals too, {name}. And this happens for real: officers sometimes stop traffic so ducks can cross.", cs: "Pomalu ho zvedneš oběma dlaněmi jako poklad a položíš ho k mamince. Hurá do vody, kachny! Celá rodinka šťastně plave po rybníčku a řidiči tleskají. Policie pomáhá i zvířatům, {name}. A tohle se děje doopravdy: policisté někdy zastaví dopravu, aby kachny mohly přejít.", fr: "Tu le soulèves doucement à deux mains, comme un trésor, et tu le poses près de sa maman. À l'eau, les canards ! Toute la famille nage joyeusement sur l'étang et les conducteurs applaudissent. La police aide aussi les animaux, {name}. Et ça arrive pour de vrai : des agents arrêtent parfois la circulation pour laisser passer les canards." }
        },
        e2: {
          end: true,
          text: { es: "Haces tu mejor cuac cuac... ¡y funciona! El patito levanta la cabeza y corre con su familia. Llegan al estanque y se dan un chapuzón de celebración. Los patitos cruzan en fila, como los niños del cole. ¡Bien hecho, {name}!", ca: "Fas el teu millor cuac cuac... i funciona! L'aneguet aixeca el cap i corre amb la seva família. Arriben a l'estany i es fan un capbussó de celebració. Els aneguets creuen en fila, com els nens de l'escola. Ben fet, {name}!", en: "You do your best quack quack... and it works! The duckling lifts its head and runs to its family. They reach the pond and take a celebration splash. Ducklings cross in a line, just like school children. Well done, {name}!", cs: "Předvedeš své nejlepší káč káč... a funguje to! Kachňátko zvedne hlavu a běží za rodinou. Dorazí k rybníčku a na oslavu si žbluňknou. Kachňátka přecházejí v řadě, jako děti ze školky. Výborně, {name}!", fr: "Tu fais ton plus beau coin coin... et ça marche ! Le caneton lève la tête et court rejoindre sa famille. Ils arrivent à l'étang et plongent pour fêter ça. Les canetons traversent en file, comme les enfants de l'école. Bravo, {name} !" }
        }
      }
    },
    {
      id: "galletas", emoji: "🍪", start: "n1",
      title: { es: "El misterio de las galletas desaparecidas", ca: "El misteri de les galetes desaparegudes", en: "The Mystery of the Missing Cookies", cs: "Záhada zmizelých sušenek", fr: "Le mystère des biscuits disparus" },
      nodes: {
        n1: {
          text: { es: "¡Misterio en la comisaría! El tarro de galletas de la merienda está vacío y solo quedan unas miguitas. La agente Marta te nombra detective por un día: ¿cómo empezamos a investigar, {name}?", ca: "Misteri a la comissaria! El pot de galetes del berenar està buit i només queden unes miquetes. L'agent Marta et nomena detectiu per un dia: com comencem a investigar, {name}?", en: "Mystery at the police station! The snack-time cookie jar is empty and only a few crumbs are left. Officer Marta makes you a detective for a day: how do we start investigating, {name}?", cs: "Záhada na stanici! Dóza se sušenkami na svačinu je prázdná a zbylo jen pár drobečků. Policistka Marta tě jmenuje detektivem na jeden den: jak začneme pátrat, {name}?", fr: "Mystère au commissariat ! Le bocal à biscuits du goûter est vide et il ne reste que quelques miettes. L'agente Marta te nomme détective pour un jour : comment commence-t-on l'enquête, {name} ?" },
          choices: [
            { t: { es: "Seguimos el caminito de miguitas", ca: "Seguim el caminet de miquetes", en: "We follow the trail of crumbs", cs: "Půjdeme po cestičce z drobečků", fr: "On suit le petit chemin de miettes" }, go: "n2a" },
            { t: { es: "Buscamos huellas con el polvito de detective", ca: "Busquem empremtes amb els polsims de detectiu", en: "We look for prints with detective powder", cs: "Hledáme otisky detektivním práškem", fr: "On cherche des empreintes avec la poudre de détective" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "Las miguitas cruzan el pasillo, bajan la escalera y llegan hasta el garaje... Detrás de una rueda del coche patrulla hay un tarro tapado con una mantita. ¿Qué hacemos?", ca: "Les miquetes travessen el passadís, baixen l'escala i arriben fins al garatge... Darrere d'una roda del cotxe patrulla hi ha un pot tapat amb una manteta. Què fem?", en: "The crumbs cross the corridor, go down the stairs and lead to the garage... Behind one wheel of the patrol car there is a jar covered with a little blanket. What do we do?", cs: "Drobečky vedou chodbou, dolů po schodech až do garáže... Za kolem hlídkového auta stojí dóza přikrytá dečkou. Co uděláme?", fr: "Les miettes traversent le couloir, descendent l'escalier et mènent au garage... Derrière une roue de la voiture de patrouille, il y a un bocal couvert d'une petite couverture. Qu'est-ce qu'on fait ?" },
          choices: [
            { t: { es: "Levantamos la mantita ahora mismo", ca: "Aixequem la manteta ara mateix", en: "We lift the little blanket right now", cs: "Hned dečku nadzvedneme", fr: "On soulève la petite couverture tout de suite" }, go: "e1" },
            { t: { es: "Nos escondemos y esperamos a ver quién viene", ca: "Ens amaguem i esperem a veure qui ve", en: "We hide and wait to see who comes", cs: "Schováme se a počkáme, kdo přijde", fr: "On se cache et on attend de voir qui vient" }, go: "e3" }
          ]
        },
        n2b: {
          text: { es: "Soplas el polvito con cuidado y aparecen huellas... ¡pero no son de dedos! Son marcas de patitas y plumitas pequeñas junto a la ventana abierta. ¿Qué hacemos?", ca: "Bufes els polsims amb compte i apareixen empremtes... però no són de dits! Són marques de potetes i plometes petites al costat de la finestra oberta. Què fem?", en: "You blow the powder gently and prints appear... but they are not fingerprints! They are little paw marks and tiny feathers by the open window. What do we do?", cs: "Opatrně foukneš prášek a objeví se otisky... ale nejsou od prstů! Jsou to stopy nožiček a malá peříčka u otevřeného okna. Co uděláme?", fr: "Tu souffles doucement la poudre et des empreintes apparaissent... mais ce ne sont pas des doigts ! Ce sont des marques de petites pattes et de petites plumes près de la fenêtre ouverte. Qu'est-ce qu'on fait ?" },
          choices: [
            { t: { es: "Ponemos una galleta y vigilamos escondidos", ca: "Posem una galeta i vigilem amagats", en: "We set out a cookie and watch from a hiding spot", cs: "Položíme sušenku a schovaní hlídáme", fr: "On pose un biscuit et on surveille, cachés" }, go: "e2" },
            { t: { es: "Seguimos también el caminito de miguitas", ca: "Seguim també el caminet de miquetes", en: "We also follow the trail of crumbs", cs: "Půjdeme i po cestičce z drobečků", fr: "On suit aussi le petit chemin de miettes" }, go: "n2a" }
          ]
        },
        e1: {
          end: true,
          text: { es: "Levantáis la mantita y... ¡dentro están las galletas con un lazo y un dibujo de la jefa Marta! Rocky aparece con las orejas gachas y lo confiesa todo: las estaba guardando para la fiesta sorpresa de cumpleaños de la jefa. Nadie se enfada: ¡todos ayudáis a preparar la fiesta! Caso cerrado con confeti, detective {name}.", ca: "Aixequeu la manteta i... a dins hi ha les galetes amb un llaç i un dibuix de la cap Marta! En Rocky apareix amb les orelles baixes i ho confessa tot: les guardava per a la festa sorpresa d'aniversari de la cap. Ningú no s'enfada: tots ajudeu a preparar la festa! Cas tancat amb confeti, detectiu {name}.", en: "You lift the blanket and... inside are the cookies with a ribbon and a drawing of Chief Marta! Rocky appears with his ears down and confesses everything: he was saving them for the chief's surprise birthday party. Nobody gets upset: you all help set up the party! Case closed with confetti, detective {name}.", cs: "Nadzvednete dečku a... uvnitř jsou sušenky s mašlí a obrázkem velitelky Marty! Objeví se Rocky se svěšenýma ušima a všechno přizná: schovával je na narozeninovou oslavu pro velitelku, jako překvapení. Nikdo se nezlobí: všichni pomůžete oslavu připravit! Případ uzavřen s konfetami, detektive {name}.", fr: "Vous soulevez la couverture et... dedans, il y a les biscuits avec un ruban et un dessin de la cheffe Marta ! Rocky apparaît, les oreilles baissées, et avoue tout : il les gardait pour la fête d'anniversaire surprise de la cheffe. Personne ne se fâche : vous aidez tous à préparer la fête ! Affaire classée avec des confettis, détective {name}." }
        },
        e2: {
          end: true,
          text: { es: "Al ratito, por la ventana entran dando saltitos... ¡las palomas del parque! Venían a por las miguitas. Nadie se enfada: ponéis un comedero con semillas fuera, y las galletas nuevas, en una lata con tapa. Misterio resuelto sin regañar a nadie: investigar antes de acusar, esa es la regla de oro, detective {name}.", ca: "Al cap d'una estona, per la finestra entren fent saltets... els coloms del parc! Venien a buscar les miquetes. Ningú no s'enfada: poseu una menjadora amb llavors a fora, i les galetes noves, en una llauna amb tapa. Misteri resolt sense renyar ningú: investigar abans d'acusar, aquesta és la regla d'or, detectiu {name}.", en: "A little while later, hopping through the window come... the park pigeons! They were after the crumbs. Nobody gets upset: you put a feeder with seeds outside, and the new cookies go into a tin with a lid. Mystery solved without scolding anyone: investigate before you accuse, that is the golden rule, detective {name}.", cs: "Za chvilku oknem vhopkají... holubi z parku! Přiletěli si pro drobečky. Nikdo se nezlobí: ven dáte krmítko se semínky a nové sušenky do plechovky s víkem. Záhada vyřešena a nikdo nedostal vynadáno: nejdřív pátrat, potom soudit, to je zlaté pravidlo, detektive {name}.", fr: "Un peu plus tard, entrent par la fenêtre en sautillant... les pigeons du parc ! Ils venaient pour les miettes. Personne ne se fâche : vous installez une mangeoire avec des graines dehors, et les nouveaux biscuits vont dans une boîte avec un couvercle. Mystère résolu sans gronder personne : enquêter avant d'accuser, c'est la règle d'or, détective {name}." }
        },
        e3: {
          end: true,
          text: { es: "Esperáis en silencio detrás de la moto... y llega Rocky de puntillas, coge el tarro con la boca y lo lleva a la sala grande, donde hay globos a medio inflar. ¡Estaba preparando la fiesta sorpresa de la jefa Marta! Le ayudáis a decorarlo todo y la sorpresa sale mejor que nunca. Chsss, detective {name}: tú no has visto nada.", ca: "Espereu en silenci darrere de la moto... i arriba en Rocky de puntetes, agafa el pot amb la boca i el porta a la sala gran, on hi ha globus a mig inflar. Estava preparant la festa sorpresa de la cap Marta! L'ajudeu a decorar-ho tot i la sorpresa surt millor que mai. Xxxt, detectiu {name}: tu no has vist res.", en: "You wait quietly behind the motorbike... and in tiptoes Rocky, picks up the jar with his mouth and carries it to the big room, where balloons are half blown up. He was setting up Chief Marta's surprise party! You help him decorate everything and the surprise turns out better than ever. Shhh, detective {name}: you saw nothing.", cs: "Tiše čekáte za motorkou... a po špičkách přichází Rocky, vezme dózu do tlamy a odnese ji do velké místnosti, kde jsou napůl nafouknuté balónky. Chystal překvapení na oslavu pro velitelku Martu! Pomůžete mu všechno vyzdobit a překvapení se povede líp než kdy dřív. Pšt, detektive {name}: tys nic neviděl.", fr: "Vous attendez en silence derrière la moto... et voilà Rocky qui arrive sur la pointe des pattes, prend le bocal dans sa gueule et l'emporte dans la grande salle, où des ballons sont à moitié gonflés. Il préparait la fête surprise de la cheffe Marta ! Vous l'aidez à tout décorer et la surprise est plus réussie que jamais. Chut, détective {name} : tu n'as rien vu." }
        }
      }
    }
  ],

  /* ---------- KARAOKE ---------- */
  songs: [
    { emoji: "🚦",
      title: { es: "El semáforo amigo", ca: "El semàfor amic", en: "The Traffic Light Friend", cs: "Semafor kamarád", fr: "Le feu tricolore ami" },
      lines: [
        { es: "El semáforo amigo,", ca: "El semàfor és bon amic,", en: "The traffic light is our friend,", cs: "Semafor je kamarád,", fr: "Le feu tricolore est un ami," },
        { es: "tres colores trae consigo.", ca: "tres colors porta amb ell, t'ho dic.", en: "three bright colours it will lend.", cs: "radí nám vždy moc rád.", fr: "trois couleurs, c'est bien joli." },
        { es: "Rojo dice: quieto, espera,", ca: "El vermell diu: para i espera,", en: "Red says: stop and wait right here,", cs: "Červená říká: stůj a čekej,", fr: "Le rouge dit : stop, on attend," },
        { es: "mira bien la carretera.", ca: "mira bé la carretera.", en: "look both ways, the road is near.", cs: "na silnici nespěchej.", fr: "on regarde bien avant." },
        { es: "Verde dice: pasa, pasa,", ca: "El verd diu: passa, passa,", en: "Green says: go, now cross the street,", cs: "Zelená se rozsvítí,", fr: "Le vert dit : tu peux passer," },
        { es: "de la mano hasta tu casa.", ca: "de la mà cap a casa.", en: "hold a hand and move your feet.", cs: "a my přejdem v bezpečí.", fr: "main dans la main, sans te presser." },
        { es: "Y si dudas un poquito,", ca: "I si dubtes un momentet,", en: "If you wonder, wait a bit,", cs: "Když si nejsi jistý, stůj,", fr: "Et si tu hésites un petit peu," },
        { es: "¡espera al muñequito!", ca: "espera el ninotet!", en: "till the little green man is lit!", cs: "zelený panáček je průvodce tvůj!", fr: "attends le bonhomme lumineux !" }
      ] },
    { emoji: "🐾",
      title: { es: "Rocky, el perro policía", ca: "En Rocky, el gos policia", en: "Rocky the Police Dog", cs: "Policejní pes Rocky", fr: "Rocky, le chien policier" },
      lines: [
        { es: "Rocky es un perro policía,", ca: "En Rocky és un gos policia,", en: "Rocky is a police dog, hooray,", cs: "Rocky je náš policejní pes,", fr: "Rocky est un chien policier," },
        { es: "trabaja con alegría.", ca: "treballa amb alegria.", en: "he loves to work and play.", cs: "stopu najde ještě dnes.", fr: "il adore travailler." },
        { es: "Con su súper olfato fino,", ca: "Amb el seu nas tan fi,", en: "With his clever little nose,", cs: "Čenichá sem, čenichá tam,", fr: "Avec son petit museau malin," },
        { es: "sigue el rastro del camino.", ca: "segueix el rastre pel camí.", en: "down the trail he goes and goes.", cs: "cestičku ukáže nám.", fr: "il suit la piste du chemin." },
        { es: "Busca, busca sin parar,", ca: "Busca, busca sense parar,", en: "Seek and seek and never stop,", cs: "Hledá, hledá, nepřestává,", fr: "Cherche, cherche sans t'arrêter," },
        { es: "y lo vuelve a encontrar.", ca: "i ho torna a trobar.", en: "till the lost is found, hop hop!", cs: "ztracené vždy vypátrává.", fr: "et voilà, il l'a retrouvé !" },
        { es: "Y al final de la jornada,", ca: "I quan s'acaba la jornada,", en: "And when the working day is done,", cs: "A když práce končí, spěchá,", fr: "Quand la journée se termine enfin," },
        { es: "quiere mimos y una almohada.", ca: "vol carícies i una abraçada.", en: "he gets cuddles, one by one.", cs: "do pelíšku, mazlit se nechá.", fr: "il veut son panier et plein de câlins." }
      ] },
    { emoji: "🚓",
      title: { es: "La patrulla de {name}", ca: "La patrulla de {name}", en: "{name}'s Patrol", cs: "Hlídka pro {name}", fr: "La patrouille de {name}" },
      lines: [
        { es: "Nino-nino por la ciudad,", ca: "Nino-nino per la ciutat,", en: "Nee-naw, nee-naw, through the town,", cs: "Nino-nino, ulicí,", fr: "Pin-pon, pin-pon, dans la ville," },
        { es: "la patrulla llega ya, es verdad.", ca: "la patrulla ja ha arribat.", en: "the patrol car drives around.", cs: "jede hlídka zářící.", fr: "la patrouille roule tranquille." },
        { es: "{name} conduce con cuidado,", ca: "{name} condueix a poc a poc,", en: "Driving slowly, driving right,", cs: "{name} řídí opatrně,", fr: "{name} conduit doucement," },
        { es: "el cinturón bien abrochado.", ca: "amb el cinturó al seu lloc.", en: "seatbelt on and buckled tight.", cs: "pásy zapnuté máme pevně.", fr: "la ceinture, évidemment." },
        { es: "¿Alguien necesita ayuda?", ca: "Algú necessita ajuda?", en: "Does somebody need a hand?", cs: "Kdo potřebuje pomoci?", fr: "Besoin d'aide dans la rue ?" },
        { es: "¡La patrulla nunca duda!", ca: "La patrulla mai no dubta!", en: "Here comes help across the land!", cs: "Hlídka jede ve dne v noci!", fr: "La patrouille est déjà venue !" },
        { es: "Y al llegar la noche estrellada,", ca: "I quan la nit és estrellada,", en: "When the starry night comes down,", cs: "A když přijde hvězdná noc,", fr: "Et quand la nuit est étoilée," },
        { es: "la patrulla duerme aparcada.", ca: "la patrulla dorm aparcada.", en: "the car sleeps parked in town.", cs: "auto spinká, dobrou noc.", fr: "la voiture dort, bien garée." }
      ] }
  ],

  /* ---------- TRADUCTOR ---------- */
  translator: {
    words: [
      W_COMMON.hola,
      W_COMMON.adios,
      W_COMMON.amigo,
      { k: "agente", emoji: "👮", name: { es: "agente", ca: "agent", en: "officer", cs: "policista", fr: "agent" } },
      { k: "patrulla", emoji: "🚓", name: { es: "coche patrulla", ca: "cotxe patrulla", en: "patrol car", cs: "hlídkové auto", fr: "voiture de patrouille" } },
      { k: "semaforo", emoji: "🚦", name: { es: "semáforo", ca: "semàfor", en: "traffic light", cs: "semafor", fr: "feu tricolore" } },
      { k: "moto", emoji: "🏍️", name: { es: "moto", ca: "moto", en: "motorbike", cs: "motorka", fr: "moto" } },
      { k: "lupa", emoji: "🔍", name: { es: "lupa", ca: "lupa", en: "magnifying glass", cs: "lupa", fr: "loupe" } },
      { k: "huella", emoji: "🐾", name: { es: "huella", ca: "petjada", en: "footprint", cs: "stopa", fr: "empreinte" } },
      { k: "casco", emoji: "⛑️", name: { es: "casco", ca: "casc", en: "helmet", cs: "helma", fr: "casque" } },
      { k: "helicoptero", emoji: "🚁", name: { es: "helicóptero", ca: "helicòpter", en: "helicopter", cs: "vrtulník", fr: "hélicoptère" } },
      { k: "ayuda", emoji: "🆘", name: { es: "ayuda", ca: "ajuda", en: "help", cs: "pomoc", fr: "aide" } },
      { k: "calle", emoji: "🛣️", name: { es: "calle", ca: "carrer", en: "street", cs: "ulice", fr: "rue" } },
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
      { id: "sirenil", emoji: "🚨",
        name: { es: "Sirenil", ca: "Sirenil", en: "Sirenish", cs: "Sirénština", fr: "Sirénois" },
        greeting: { es: "¡Nino-nino! Así se dice hola en sirenil, el idioma de las sirenas de los coches de policía.", ca: "Nino-nino! Així es diu hola en sirenil, l'idioma de les sirenes dels cotxes de policia.", en: "Nee-naw! That is how you say hello in Sirenish, the language of police car sirens.", cs: "Nino-nino! Tak se řekne ahoj sirénštinou, jazykem policejních houkaček.", fr: "Pin-pon ! C'est comme ça qu'on dit bonjour en sirénois, la langue des sirènes des voitures de police." },
        dict: { hola: "nino-nino", adios: "naino-naino", amigo: "ninomi", agente: "ninipol", patrulla: "ninorrum", semaforo: "ninoluz", moto: "ninobrum", lupa: "ninolú", huella: "ninopé", casco: "ninocap", helicoptero: "ninofrufrú", ayuda: "ninosós", calle: "ninorúa", robot: "ninobip", mama: "ninomá", papa: "ninopá", casa: "ninoniu", agua: "ninoglú", comida: "ninoñam", perro: "ninoguau", gato: "ninomiau", grande: "ninón", pequeno: "ninín", bonito: "ninolí", amor: "ninocor", gracias: "ninograta", si: "nii", no: "noo", dormir: "ninozzz" } },
      { id: "silbatin", emoji: "📯",
        name: { es: "Silbatín", ca: "Silbatí", en: "Whistlish", cs: "Píšťalština", fr: "Sifflotin" },
        greeting: { es: "¡Pi-pii! El silbatín habla con pitidos cortos y largos, como los agentes de tráfico.", ca: "Pi-pii! El silbatí parla amb xiulets curts i llargs, com els agents de trànsit.", en: "Pee-peep! Whistlish speaks in short and long whistles, like traffic officers.", cs: "Pí-píí! Píšťalština mluví krátkými a dlouhými písknutími, jako dopravní policisté.", fr: "Pi-piii ! Le sifflotin parle avec des coups de sifflet courts et longs, comme les agents de la circulation." },
        dict: { hola: "pi-pii", adios: "piiiu", amigo: "pifiu", agente: "pi-prr", patrulla: "prr-prr", semaforo: "pi-po-pi", moto: "prrium", lupa: "fiu-fiu", huella: "pi-ta-pi", casco: "po-pi", helicoptero: "frr-fiu", ayuda: "piii-piii", calle: "fiuuu", robot: "pi-bip", mama: "pii-ma", papa: "pii-pa", casa: "po-po", agua: "plip", comida: "pi-ñam", perro: "pi-guau", gato: "pi-miau", grande: "piiiii", pequeno: "pip", bonito: "pi-lin", amor: "pi-pom", gracias: "pi-plas", si: "pi", no: "po", dormir: "pizzz" } }
    ]
  },

  /* ---------- MAPA DE EXPLORACIÓN: la ciudad amable ---------- */
  explore: {
    width: 4200, height: 1100, stars: false,
    bgCss: "radial-gradient(ellipse 26% 22% at 82% 11%, rgba(255,241,118,.6), transparent 70%), linear-gradient(180deg,#7ec6ec 0%,#a6dbf5 26%,#cbe9f7 44%,#e6f2e6 54%,#dfeee4 100%)",
    cats: [
      { id: "comisaria", emoji: "🏢", x: 140, name: { es: "La comisaría", ca: "La comissaria", en: "The police station", cs: "Policejní stanice", fr: "Le commissariat" } },
      { id: "calle", emoji: "🚦", x: 1700, name: { es: "La calle", ca: "El carrer", en: "The street", cs: "Ulice", fr: "La rue" } },
      { id: "parque", emoji: "🌳", x: 3180, name: { es: "El parque", ca: "El parc", en: "The park", cs: "Park", fr: "Le parc" } }
    ],
    pois: [
      { cat: "comisaria", emoji: "🏢", x: 280, y: 470, size: 2, iw: 120, ih: 94,
        svg: polSvg(`
          <rect x="8" y="30" width="114" height="64" rx="6" fill="#90a4ae"/>
          <rect x="14" y="36" width="102" height="52" rx="4" fill="#cfd8dc"/>
          <rect x="6" y="20" width="118" height="12" rx="5" fill="#546e7a"/>
          <path d="M52 94 L52 60 Q65 48 78 60 L78 94 Z" fill="#37474f"/>
          <path d="M56 94 L56 62 Q65 54 74 62 L74 94 Z" fill="#4fc3f7"/>
          <rect x="22" y="44" width="18" height="16" rx="3" fill="#e1f5fe" stroke="#546e7a" stroke-width="2"/>
          <rect x="90" y="44" width="18" height="16" rx="3" fill="#e1f5fe" stroke="#546e7a" stroke-width="2"/>
          <path d="M65 4 L67.4 10 L74 10.4 L69 14.6 L70.6 21 L65 17.4 L59.4 21 L61 14.6 L56 10.4 L62.6 10 Z" fill="#ffd54f"/>
          <circle cx="20" cy="12" r="5" fill="#4fc3f7"><animate attributeName="opacity" values="1;.4;1" dur="1.6s" repeatCount="indefinite"/></circle>
          <rect x="18" y="16" width="4" height="8" fill="#546e7a"/>
          <rect x="0" y="92" width="130" height="6" rx="3" fill="#78909c"/>`, "0 0 130 100"),
        name: { es: "La comisaría amable", ca: "La comissaria amable", en: "The friendly police station", cs: "Milá policejní stanice", fr: "Le commissariat tout gentil" },
        fact: { es: "La comisaría está abierta día y noche. Si necesitas ayuda, puedes entrar y pedirla: para eso está.", ca: "La comissaria està oberta dia i nit. Si necessites ajuda, hi pots entrar i demanar-la: per a això hi és.", en: "The police station is open day and night. If you need help, you can walk in and ask: that is what it is for.", cs: "Policejní stanice je otevřená ve dne v noci. Když potřebuješ pomoc, můžeš vejít a říct si o ni: od toho tam je.", fr: "Le commissariat est ouvert jour et nuit. Si tu as besoin d'aide, tu peux entrer et la demander : il est là pour ça." } },
      { cat: "comisaria", emoji: "🎒", x: 760, y: 700, iw: 100, ih: 80,
        svg: polSvg(`
          <rect x="4" y="6" width="102" height="74" rx="6" fill="#8d6e63"/>
          <rect x="10" y="12" width="90" height="62" rx="4" fill="#efebe9"/>
          <path d="M10 40 L100 40 M10 60 L100 60" stroke="#bcaaa4" stroke-width="3"/>
          <circle cx="26" cy="28" r="7" fill="#a1887f"/><circle cx="20" cy="21" r="3" fill="#a1887f"/><circle cx="32" cy="21" r="3" fill="#a1887f"/>
          <circle cx="24" cy="27" r="1.2" fill="#3e2723"/><circle cx="28" cy="27" r="1.2" fill="#3e2723"/><ellipse cx="26" cy="31" rx="2.4" ry="1.8" fill="#d7ccc8"/>
          <path d="M48 30 A10 10 0 0 1 68 30 Z" fill="#ef5350"/><path d="M58 30 L58 36 Q58 39 55 39" stroke="#b71c1c" stroke-width="2" fill="none"/>
          <circle cx="86" cy="28" r="8" fill="#42a5f5"/><path d="M78 28 A8 8 0 0 1 94 28" fill="#ffca28"/><circle cx="86" cy="28" r="8" fill="none" stroke="#1565c0" stroke-width="1.6"/>
          <path d="M20 52 Q24 46 30 52 L30 56 L20 56 Z" fill="#ab47bc"/><path d="M30 52 Q26 50 24 52" stroke="#8e24aa" stroke-width="1.6" fill="none"/>
          <rect x="46" y="48" width="22" height="9" rx="4" fill="#66bb6a"/><circle cx="50" cy="57" r="3" fill="#37474f"/><circle cx="63" cy="57" r="3" fill="#37474f"/>
          <path d="M80 48 Q88 44 94 50 Q90 54 84 52 Q80 56 78 52 Z" fill="#ff7043"/>`, "0 0 110 86"),
        name: { es: "La oficina de objetos perdidos", ca: "L'oficina d'objectes perduts", en: "The lost and found office", cs: "Ztráty a nálezy", fr: "Le bureau des objets trouvés" },
        fact: { es: "Aquí esperan las cosas perdidas a sus dueños. En Tokio hay una oficina gigante que devuelve miles de paraguas cada año.", ca: "Aquí les coses perdudes esperen els seus amos. A Tòquio hi ha una oficina gegant que torna milers de paraigües cada any.", en: "Lost things wait for their owners here. In Tokyo there is a giant office that returns thousands of umbrellas every year.", cs: "Tady čekají ztracené věci na své majitele. V Tokiu je obří kancelář, která každý rok vrátí tisíce deštníků.", fr: "Ici, les objets perdus attendent leurs propriétaires. À Tokyo, un bureau géant rend des milliers de parapluies chaque année." } },
      { cat: "comisaria", emoji: "🖐️", x: 520, y: 380, iw: 92, ih: 72,
        svg: polSvg(`
          <rect x="6" y="6" width="62" height="64" rx="5" fill="#fff" stroke="#90a4ae" stroke-width="2"/>
          <path d="M12 14 L30 14 M12 20 L26 20" stroke="#b0bec5" stroke-width="2.4" stroke-linecap="round"/>
          <ellipse cx="38" cy="44" rx="16" ry="20" fill="none" stroke="#5c6bc0" stroke-width="2.4"/>
          <ellipse cx="38" cy="44" rx="11" ry="15" fill="none" stroke="#5c6bc0" stroke-width="2.2"/>
          <ellipse cx="38" cy="44" rx="6.5" ry="10" fill="none" stroke="#5c6bc0" stroke-width="2"/>
          <path d="M38 36 Q41 40 38 44 Q35 48 38 52" stroke="#5c6bc0" stroke-width="1.8" fill="none"/>
          <rect x="72" y="40" width="24" height="18" rx="3" fill="#37474f"/>
          <rect x="75" y="43" width="18" height="12" rx="2" fill="#1a237e"/>
          <circle cx="84" cy="24" r="7" fill="none" stroke="#f9a825" stroke-width="3"/>
          <path d="M89 30 L96 37" stroke="#8d6e63" stroke-width="4" stroke-linecap="round"/>`, "0 0 100 78"),
        name: { es: "El archivo de las huellas", ca: "L'arxiu de les empremtes", en: "The fingerprint files", cs: "Kartotéka otisků", fr: "Les fiches d'empreintes" },
        fact: { es: "Cada persona tiene un dibujo distinto en la punta de los dedos. Por eso las huellas ayudan a saber quién tocó algo.", ca: "Cada persona té un dibuix diferent a la punta dels dits. Per això les empremtes ajuden a saber qui va tocar una cosa.", en: "Every person has a different pattern on their fingertips. That is why fingerprints help tell who touched something.", cs: "Každý člověk má na bříškách prstů jiný vzoreček. Proto otisky pomáhají zjistit, kdo se čeho dotkl.", fr: "Chaque personne a un dessin différent au bout des doigts. C'est pour ça que les empreintes aident à savoir qui a touché quoi." } },
      { cat: "comisaria", emoji: "🔍", x: 1000, y: 560, iw: 88, ih: 84,
        svg: polSvg(`
          <circle cx="40" cy="36" r="27" fill="rgba(159,216,239,.45)" stroke="#f9a825" stroke-width="6"/>
          <path d="M59 57 L78 76" stroke="#8d6e63" stroke-width="11" stroke-linecap="round"/>
          <ellipse cx="34" cy="32" rx="5" ry="6.5" fill="#5d4037"/>
          <circle cx="28" cy="24" r="2.2" fill="#5d4037"/><circle cx="34" cy="22" r="2.2" fill="#5d4037"/><circle cx="40" cy="24" r="2.2" fill="#5d4037"/>
          <ellipse cx="50" cy="44" rx="3.4" ry="4.4" fill="#5d4037"/>
          <circle cx="46" cy="38" r="1.6" fill="#5d4037"/><circle cx="50" cy="37" r="1.6" fill="#5d4037"/><circle cx="54" cy="38" r="1.6" fill="#5d4037"/>
          <ellipse cx="14" cy="76" rx="2.6" ry="3.4" fill="#8d6e63"/>
          <circle cx="11" cy="71" r="1.3" fill="#8d6e63"/><circle cx="14" cy="70" r="1.3" fill="#8d6e63"/><circle cx="17" cy="71" r="1.3" fill="#8d6e63"/>
          <path d="M22 12 L24 16 L28 18 L24 20 L22 24 L20 20 L16 18 L20 16 Z" fill="#fff" opacity=".9"/>`, "0 0 96 92"),
        name: { es: "La lupa de detective", ca: "La lupa de detectiu", en: "The detective's magnifying glass", cs: "Detektivní lupa", fr: "La loupe de détective" },
        fact: { es: "Con la lupa, lo pequeño se ve grande: un pelito, una miguita o una huella cuentan toda la historia.", ca: "Amb la lupa, el que és petit es veu gran: un pelet, una miqueta o una petjada expliquen tota la història.", en: "With a magnifying glass, small things look big: a little hair, a crumb or a footprint can tell the whole story.", cs: "S lupou vypadá malé jako velké: chloupek, drobeček nebo stopa vyprávějí celý příběh.", fr: "Avec la loupe, le tout petit devient grand : un petit poil, une miette ou une empreinte racontent toute l'histoire." } },
      { cat: "comisaria", emoji: "📯", x: 1240, y: 380, iw: 92, ih: 60,
        svg: polSvg(`
          <circle cx="14" cy="16" r="6" fill="none" stroke="#c17900" stroke-width="3.4"/>
          <rect x="10" y="22" width="42" height="16" rx="8" fill="#f9a825"/>
          <circle cx="58" cy="34" r="20" fill="#f9a825"/>
          <circle cx="58" cy="34" r="20" fill="none" stroke="#c17900" stroke-width="2"/>
          <circle cx="58" cy="34" r="7" fill="#c17900"/>
          <rect x="16" y="25" width="30" height="4" rx="2" fill="#ffe082"/>
          <path d="M84 18 Q92 12 94 4 M88 30 Q98 28 102 20 M88 42 Q98 46 104 44" stroke="#4fc3f7" stroke-width="3.4" fill="none" stroke-linecap="round"/>`, "0 0 106 62"),
        name: { es: "El silbato dorado", ca: "El xiulet daurat", en: "The golden whistle", cs: "Zlatá píšťalka", fr: "Le sifflet doré" },
        fact: { es: "Un pitido largo quiere decir alto. Con el silbato, el agente habla con toda la calle sin decir palabras.", ca: "Un xiulet llarg vol dir alto. Amb el xiulet, l'agent parla amb tot el carrer sense dir paraules.", en: "One long whistle means stop. With the whistle, the officer talks to the whole street without saying a word.", cs: "Dlouhé písknutí znamená stát. Píšťalkou mluví policista s celou ulicí beze slov.", fr: "Un long coup de sifflet veut dire stop. Avec le sifflet, l'agent parle à toute la rue sans dire un mot." } },
      { cat: "comisaria", emoji: "📻", x: 1480, y: 700, iw: 66, ih: 84,
        svg: polSvg(`
          <rect x="26" y="4" width="5" height="20" rx="2.5" fill="#263238"/>
          <circle cx="28" cy="4" r="3" fill="#ef5350"/>
          <rect x="16" y="22" width="38" height="62" rx="8" fill="#37474f"/>
          <rect x="22" y="30" width="26" height="17" rx="3" fill="#4fc3f7"/>
          <circle cx="27" cy="56" r="4" fill="#ffca28"/><circle cx="39" cy="56" r="4" fill="#66bb6a"/>
          <rect x="22" y="64" width="26" height="4" rx="2" fill="#78909c"/>
          <rect x="22" y="71" width="26" height="4" rx="2" fill="#78909c"/>
          <path d="M40 12 Q46 10 48 4 M42 18 Q50 17 54 11" stroke="#ffd54f" stroke-width="2.6" fill="none" stroke-linecap="round">
            <animate attributeName="opacity" values="1;.3;1" dur="1.4s" repeatCount="indefinite"/></path>`, "0 0 70 92"),
        name: { es: "La radio de la comisaría", ca: "La ràdio de la comissaria", en: "The station radio", cs: "Policejní vysílačka", fr: "La radio du commissariat" },
        fact: { es: "Por la radio los agentes se avisan: aquí hace falta ayuda. Cambio... ¡y corto!", ca: "Per la ràdio els agents s'avisen: aquí cal ajuda. Canvi... i tallo!", en: "On the radio, officers let each other know: help is needed here. Over... and out!", cs: "Vysílačkou si policisté dávají vědět: tady je potřeba pomoc. Přepínám... a končím!", fr: "Par la radio, les agents se préviennent : ici, on a besoin d'aide. À toi... terminé !" } },
      { cat: "calle", emoji: "🚦", x: 1760, y: 470, iw: 58, ih: 116,
        svg: polSvg(`
          <rect x="24" y="70" width="8" height="46" rx="3" fill="#546e7a"/>
          <rect x="10" y="4" width="36" height="68" rx="9" fill="#37474f"/>
          <circle cx="28" cy="18" r="8" fill="#ef5350"/>
          <circle cx="28" cy="38" r="8" fill="#ffca28" opacity=".35"/>
          <circle cx="28" cy="58" r="8" fill="#66bb6a"><animate attributeName="opacity" values="1;.25;1" dur="1.8s" repeatCount="indefinite"/></circle>
          <path d="M10 12 Q4 14 4 20 M46 12 Q52 14 52 20" stroke="#263238" stroke-width="3" fill="none"/>`, "0 0 56 118"),
        name: { es: "El semáforo gigante", ca: "El semàfor gegant", en: "The giant traffic light", cs: "Obří semafor", fr: "Le feu tricolore géant" },
        fact: { es: "El primer semáforo eléctrico se encendió en 1914. Desde entonces, el rojo y el verde ordenan las calles de todo el mundo.", ca: "El primer semàfor elèctric es va encendre el 1914. Des de llavors, el vermell i el verd ordenen els carrers de tot el món.", en: "The first electric traffic light was switched on in 1914. Since then, red and green have kept streets tidy all over the world.", cs: "První elektrický semafor se rozsvítil v roce 1914. Od té doby červená a zelená řídí ulice po celém světě.", fr: "Le premier feu électrique s'est allumé en 1914. Depuis, le rouge et le vert mettent de l'ordre dans les rues du monde entier." } },
      { cat: "calle", emoji: "🦓", x: 2240, y: 660, iw: 128, ih: 76,
        svg: polSvg(`
          <rect x="0" y="30" width="140" height="44" rx="4" fill="#546e7a"/>
          <rect x="14" y="34" width="13" height="36" rx="2" fill="#eceff1"/>
          <rect x="40" y="34" width="13" height="36" rx="2" fill="#eceff1"/>
          <rect x="66" y="34" width="13" height="36" rx="2" fill="#eceff1"/>
          <rect x="92" y="34" width="13" height="36" rx="2" fill="#eceff1"/>
          <rect x="118" y="34" width="13" height="36" rx="2" fill="#eceff1"/>
          <rect x="4" y="2" width="26" height="26" rx="4" fill="#1565c0"/>
          <path d="M17 6 L28 25 L6 25 Z" fill="#fff"/>
          <circle cx="17" cy="12" r="2" fill="#1565c0"/>
          <path d="M17 14 L17 20 M17 16 L13 22 M17 16 L21 22 M14 17 L20 15" stroke="#1565c0" stroke-width="1.6" stroke-linecap="round"/>
          <rect x="14" y="28" width="5" height="14" fill="#78909c"/>`, "0 0 140 82"),
        name: { es: "El paso de cebra", ca: "El pas de zebra", en: "The zebra crossing", cs: "Přechod zebra", fr: "Le passage piéton" },
        fact: { es: "El primer paso de cebra se pintó en Inglaterra en 1951. Sus rayas blancas se ven desde lejos, ¡como una cebra!", ca: "El primer pas de zebra es va pintar a Anglaterra el 1951. Les seves ratlles blanques es veuen des de lluny, com una zebra!", en: "The first zebra crossing was painted in England in 1951. Its white stripes can be seen from afar, just like a zebra!", cs: "První přechod zebra namalovali v Anglii v roce 1951. Jeho bílé pruhy jsou vidět zdaleka, jako pruhy zebry!", fr: "Le premier passage piéton rayé a été peint en Angleterre en 1951. Ses rayures blanches se voient de loin, comme un zèbre !" } },
      { cat: "calle", emoji: "🚗", x: 2480, y: 470, iw: 128, ih: 90,
        svg: polSvg(`
          <rect x="4" y="18" width="132" height="78" rx="6" fill="#b0bec5"/>
          <rect x="0" y="10" width="140" height="14" rx="6" fill="#78909c"/>
          <rect x="14" y="30" width="76" height="64" rx="4" fill="#37474f"/>
          <rect x="22" y="58" width="60" height="24" rx="8" fill="#1e88e5"/>
          <path d="M30 60 L38 44 L66 44 L74 60 Z" fill="#1e88e5"/>
          <path d="M36 58 L41 47 L63 47 L68 58 Z" fill="#90caf9"/>
          <rect x="42" y="38" width="9" height="6" rx="2" fill="#42a5f5"/><rect x="53" y="38" width="9" height="6" rx="2" fill="#ef5350"/>
          <circle cx="27" cy="72" r="4" fill="#fff9c4"/><circle cx="77" cy="72" r="4" fill="#fff9c4"/>
          <path d="M30 94 A8 8 0 0 1 46 94 Z" fill="#263238"/><path d="M58 94 A8 8 0 0 1 74 94 Z" fill="#263238"/>
          <circle cx="112" cy="82" r="11" fill="none" stroke="#263238" stroke-width="4"/>
          <circle cx="130" cy="82" r="8" fill="none" stroke="#263238" stroke-width="4"/>
          <path d="M112 82 Q116 62 128 62 L134 74" stroke="#00838f" stroke-width="5" fill="none" stroke-linecap="round"/>
          <path d="M104 66 L114 60" stroke="#00838f" stroke-width="4" stroke-linecap="round"/>`, "0 0 140 100"),
        name: { es: "El garaje del coche y la moto", ca: "El garatge del cotxe i la moto", en: "The car and motorbike garage", cs: "Garáž auta a motorky", fr: "Le garage de la voiture et de la moto" },
        fact: { es: "Aquí duermen el coche patrulla y la moto, limpitos y con la batería cargada, listos para salir a ayudar.", ca: "Aquí dormen el cotxe patrulla i la moto, netets i amb la bateria carregada, a punt per sortir a ajudar.", en: "The patrol car and the motorbike sleep here, all clean and fully charged, ready to go out and help.", cs: "Tady spí hlídkové auto a motorka, čisté a s nabitou baterií, připravené vyrazit na pomoc.", fr: "Ici dorment la voiture de patrouille et la moto, toutes propres et bien chargées, prêtes à partir aider." } },
      { cat: "calle", emoji: "🚲", x: 2720, y: 690, iw: 108, ih: 74,
        svg: polSvg(`
          <circle cx="28" cy="58" r="16" fill="none" stroke="#37474f" stroke-width="4"/>
          <circle cx="88" cy="58" r="16" fill="none" stroke="#37474f" stroke-width="4"/>
          <path d="M28 58 L48 34 L76 34 L88 58 M48 34 L60 58 L28 58" stroke="#1e88e5" stroke-width="4" fill="none" stroke-linejoin="round"/>
          <path d="M44 28 L54 28" stroke="#37474f" stroke-width="4" stroke-linecap="round"/>
          <path d="M76 34 L72 24 L80 22" stroke="#37474f" stroke-width="4" fill="none" stroke-linecap="round"/>
          <path d="M44 6 Q58 -6 72 6 L72 12 L44 12 Z" fill="#f9a825"/>
          <path d="M48 4 Q58 -2 68 4" stroke="#fff" stroke-width="2.4" fill="none"/>
          <path d="M46 12 Q58 18 70 12" stroke="#c17900" stroke-width="2.4" fill="none"/>`, "0 0 120 80"),
        name: { es: "La bici y su casco", ca: "La bici i el seu casc", en: "The bike and its helmet", cs: "Kolo a helma", fr: "Le vélo et son casque" },
        fact: { es: "La policía también patrulla en bici. El casco protege la cabeza como una cáscara dura: ¡póntelo siempre!", ca: "La policia també patrulla amb bici. El casc protegeix el cap com una closca dura: posa-te'l sempre!", en: "The police patrol on bikes too. The helmet protects your head like a hard shell: always put it on!", cs: "Policie hlídkuje i na kolech. Helma chrání hlavu jako tvrdá skořápka: vždycky si ji nasaď!", fr: "La police patrouille aussi à vélo. Le casque protège la tête comme une coquille dure : mets-le toujours !" } },
      { cat: "calle", emoji: "🏫", x: 2000, y: 330, iw: 76, ih: 96,
        svg: polSvg(`
          <rect x="38" y="58" width="8" height="46" rx="3" fill="#78909c"/>
          <path d="M42 4 L80 60 L4 60 Z" fill="#fff" stroke="#e53935" stroke-width="7" stroke-linejoin="round"/>
          <circle cx="34" cy="30" r="4" fill="#263238"/>
          <path d="M34 34 L34 46 M34 38 L28 44 M34 38 L40 43 M30 48 L34 46 L38 49" stroke="#263238" stroke-width="2.6" stroke-linecap="round" fill="none"/>
          <circle cx="50" cy="34" r="3.2" fill="#263238"/>
          <path d="M50 37 L50 47 M50 40 L45 45 M50 40 L55 45 M47 50 L50 47 L53 50" stroke="#263238" stroke-width="2.2" stroke-linecap="round" fill="none"/>
          <path d="M40 41 L44 39" stroke="#263238" stroke-width="2.2" stroke-linecap="round"/>`, "0 0 84 104"),
        name: { es: "La señal del cole", ca: "El senyal de l'escola", en: "The school sign", cs: "Značka u školy", fr: "Le panneau de l'école" },
        fact: { es: "Esta señal avisa: cuidado, niños cerca. Los coches van despacito cuando la ven.", ca: "Aquest senyal avisa: compte, nens a prop. Els cotxes van a poc a poc quan el veuen.", en: "This sign says: careful, children nearby. Cars slow right down when they see it.", cs: "Tahle značka říká: pozor, děti. Auta u ní jedou pomaloučku.", fr: "Ce panneau prévient : attention, enfants tout près. Les voitures ralentissent quand elles le voient." } },
      { cat: "calle", emoji: "🚁", x: 2960, y: 300, iw: 120, ih: 82,
        svg: polSvg(`
          <rect x="10" y="8" width="104" height="5" rx="2.5" fill="#546e7a"><animate attributeName="opacity" values="1;.35;1" dur=".5s" repeatCount="indefinite"/></rect>
          <rect x="59" y="12" width="6" height="9" fill="#546e7a"/>
          <ellipse cx="56" cy="44" rx="34" ry="22" fill="#1e88e5"/>
          <path d="M34 36 Q52 24 74 34 L74 46 Q54 52 34 46 Z" fill="#90caf9"/>
          <path d="M88 40 L120 32 L120 42 L88 50 Z" fill="#1e88e5"/>
          <rect x="114" y="20" width="4" height="18" rx="2" fill="#546e7a"/>
          <circle cx="52" cy="48" r="7" fill="#fff"/>
          <path d="M52 43 L53.4 46.4 L57 46.8 L54.4 49 L55.2 52.6 L52 50.6 L48.8 52.6 L49.6 49 L47 46.8 L50.6 46.4 Z" fill="#1565c0"/>
          <path d="M36 66 L36 72 L78 72 L78 66 M30 72 L84 72" stroke="#546e7a" stroke-width="4" fill="none" stroke-linecap="round"/>`, "0 0 130 88"),
        name: { es: "El helicóptero de rescate", ca: "L'helicòpter de rescat", en: "The rescue helicopter", cs: "Záchranný vrtulník", fr: "L'hélicoptère de secours" },
        fact: { es: "Desde el cielo se ve todo el barrio. El helicóptero ayuda a encontrar rápido a las personas perdidas.", ca: "Des del cel es veu tot el barri. L'helicòpter ajuda a trobar de pressa les persones perdudes.", en: "From the sky you can see the whole neighbourhood. The helicopter helps find lost people fast.", cs: "Z nebe je vidět celá čtvrť. Vrtulník pomáhá rychle najít ztracené lidi.", fr: "Depuis le ciel, on voit tout le quartier. L'hélicoptère aide à retrouver vite les personnes perdues." } },
      { cat: "parque", emoji: "🐕", x: 3240, y: 560, iw: 120, ih: 88,
        svg: polSvg(`
          <rect x="0" y="88" width="130" height="6" rx="3" fill="#7cb342"/>
          <path d="M8 90 L8 52 L38 28 L68 52 L68 90 Z" fill="#8d6e63"/>
          <path d="M2 56 L38 24 L74 56 L64 56 L38 34 L12 56 Z" fill="#5d4037"/>
          <path d="M26 90 L26 66 Q38 54 50 66 L50 90 Z" fill="#3e2723"/>
          <ellipse cx="97" cy="70" rx="22" ry="13" fill="#c8a165"/>
          <circle cx="116" cy="58" r="10" fill="#c8a165"/>
          <path d="M110 50 L107 42 L114 46 Z" fill="#8d6e63"/><path d="M122 50 L125 42 L118 46 Z" fill="#8d6e63"/>
          <circle cx="113" cy="57" r="1.6" fill="#263238"/><circle cx="119" cy="57" r="1.6" fill="#263238"/>
          <ellipse cx="116" cy="62" rx="3" ry="2.2" fill="#3e2723"/>
          <path d="M76 66 Q68 58 72 50" stroke="#c8a165" stroke-width="5" fill="none" stroke-linecap="round"/>
          <rect x="84" y="62" width="24" height="14" rx="4" fill="#1565c0"/>
          <rect x="84" y="67" width="24" height="4" fill="#ffd54f"/>
          <rect x="88" y="80" width="5" height="8" rx="2" fill="#c8a165"/><rect x="102" y="80" width="5" height="8" rx="2" fill="#c8a165"/>
          <path d="M14 88 L20 74 L26 88 Z" fill="#ff7043"/><rect x="16" y="81" width="8" height="3" fill="#fff"/>
          <circle cx="66" cy="84" r="5" fill="#ef5350"/><path d="M62 84 A4 4 0 0 1 70 84" fill="#fff"/>`, "0 0 130 96"),
        name: { es: "La escuela de perros K9", ca: "L'escola de gossos K9", en: "The K9 dog school", cs: "Škola pro psy K9", fr: "L'école des chiens K9" },
        fact: { es: "Los perros policía aprenden jugando: buscan cosas escondidas y ganan su pelota. Su nariz huele muchísimo mejor que la nuestra.", ca: "Els gossos policia aprenen jugant: busquen coses amagades i guanyen la seva pilota. El seu nas olora moltíssim millor que el nostre.", en: "Police dogs learn by playing: they search for hidden things and win their ball. Their nose smells far better than ours.", cs: "Policejní psi se učí hrou: hledají schované věci a vyhrají svůj míček. Jejich nos cítí mnohem líp než náš.", fr: "Les chiens policiers apprennent en jouant : ils cherchent des choses cachées et gagnent leur balle. Leur nez sent bien mieux que le nôtre." } },
      { cat: "parque", emoji: "🦆", x: 3760, y: 700, iw: 128, ih: 78,
        svg: polSvg(`
          <ellipse cx="70" cy="58" rx="64" ry="24" fill="#4fc3f7"/>
          <ellipse cx="70" cy="58" rx="50" ry="17" fill="none" stroke="#81d4fa" stroke-width="2.4"/>
          <path d="M8 44 L8 22 M14 46 L14 18 M20 44 L20 24" stroke="#33691e" stroke-width="3" stroke-linecap="round"/>
          <ellipse cx="14" cy="16" rx="3.4" ry="7" fill="#6d4c41"/>
          <ellipse cx="46" cy="48" rx="13" ry="9" fill="#ffca28"/>
          <circle cx="57" cy="40" r="7" fill="#ffca28"/>
          <path d="M63 40 L70 42 L63 44 Z" fill="#f57c00"/>
          <circle cx="59" cy="38" r="1.4" fill="#263238"/>
          <path d="M38 46 Q33 42 35 38" stroke="#f9a825" stroke-width="3" fill="none" stroke-linecap="round"/>
          <ellipse cx="82" cy="54" rx="7" ry="5" fill="#fff176"/><circle cx="88" cy="50" r="4" fill="#fff176"/><path d="M91 50 L95 51 L91 52.4 Z" fill="#f57c00"/><circle cx="89" cy="49" r="1" fill="#263238"/>
          <ellipse cx="100" cy="60" rx="7" ry="5" fill="#fff176"/><circle cx="106" cy="56" r="4" fill="#fff176"/><path d="M109 56 L113 57 L109 58.4 Z" fill="#f57c00"/><circle cx="107" cy="55" r="1" fill="#263238"/>
          <ellipse cx="116" cy="52" rx="7" ry="5" fill="#fff176"/><circle cx="122" cy="48" r="4" fill="#fff176"/><path d="M125 48 L129 49 L125 50.4 Z" fill="#f57c00"/><circle cx="123" cy="47" r="1" fill="#263238"/>
          <path d="M30 62 q6 -4 12 0 M64 66 q6 -4 12 0" stroke="#b3e5fc" stroke-width="2.4" fill="none" stroke-linecap="round"/>`, "0 0 140 86"),
        name: { es: "El estanque de los patitos", ca: "L'estany dels aneguets", en: "The duckling pond", cs: "Rybníček kachňátek", fr: "L'étang des canetons" },
        fact: { es: "A veces la policía corta el tráfico para que una familia de patos cruce la calle. ¡Ha pasado de verdad muchas veces!", ca: "De vegades la policia talla el trànsit perquè una família d'ànecs creui el carrer. Ha passat de debò moltes vegades!", en: "Sometimes the police stop traffic so a duck family can cross the street. It has really happened many times!", cs: "Policie někdy zastaví dopravu, aby kachní rodinka mohla přejít ulici. Doopravdy se to stalo už mnohokrát!", fr: "Parfois, la police arrête la circulation pour qu'une famille de canards traverse la rue. C'est vraiment arrivé plein de fois !" } },
      { cat: "parque", emoji: "🧭", x: 3500, y: 400, iw: 84, ih: 92,
        svg: polSvg(`
          <rect x="42" y="60" width="8" height="44" rx="3" fill="#78909c"/>
          <rect x="8" y="4" width="76" height="58" rx="8" fill="#2e7d32"/>
          <circle cx="46" cy="33" r="7" fill="#fff"/>
          <path d="M18 12 L32 12 L32 16 L24 16 L36 28 L33 31 L21 19 L21 26 L18 26 Z" fill="#fff" transform="rotate(0 46 33)"/>
          <path d="M74 12 L60 12 L60 16 L68 16 L56 28 L59 31 L71 19 L71 26 L74 26 Z" fill="#fff"/>
          <path d="M18 54 L32 54 L32 50 L24 50 L36 38 L33 35 L21 47 L21 40 L18 40 Z" fill="#fff"/>
          <path d="M74 54 L60 54 L60 50 L68 50 L56 38 L59 35 L71 47 L71 40 L74 40 Z" fill="#fff"/>`, "0 0 92 104"),
        name: { es: "El punto de encuentro", ca: "El punt de trobada", en: "The meeting point", cs: "Místo setkání", fr: "Le point de rencontre" },
        fact: { es: "Si te pierdes, quédate quieto y busca este cartel: es el sitio donde las familias se vuelven a encontrar.", ca: "Si et perds, queda't quiet i busca aquest cartell: és el lloc on les famílies es tornen a trobar.", en: "If you get lost, stay put and look for this sign: it is the place where families find each other again.", cs: "Když se ztratíš, zůstaň na místě a hledej tuhle ceduli: tady se rodiny zase najdou.", fr: "Si tu te perds, reste sur place et cherche ce panneau : c'est l'endroit où les familles se retrouvent." } },
      { cat: "parque", emoji: "🐴", x: 4040, y: 540, iw: 110, ih: 96,
        svg: polSvg(`
          <rect x="0" y="98" width="120" height="5" rx="2.5" fill="#7cb342"/>
          <ellipse cx="58" cy="58" rx="34" ry="20" fill="#8d6e63"/>
          <path d="M82 50 Q94 32 102 26 L108 34 Q102 46 92 54 Z" fill="#8d6e63"/>
          <ellipse cx="103" cy="30" rx="11" ry="8" fill="#8d6e63"/>
          <ellipse cx="111" cy="33" rx="4.5" ry="3.6" fill="#d7ccc8"/>
          <path d="M98 22 L96 14 L103 19 Z" fill="#6d4c41"/>
          <circle cx="103" cy="28" r="1.8" fill="#263238"/>
          <path d="M84 48 Q92 34 99 27" stroke="#4e342e" stroke-width="5" fill="none" stroke-linecap="round"/>
          <path d="M26 52 Q14 60 18 78" stroke="#4e342e" stroke-width="6" fill="none" stroke-linecap="round"/>
          <rect x="36" y="72" width="7" height="26" rx="3" fill="#795548"/><rect x="52" y="74" width="7" height="24" rx="3" fill="#795548"/>
          <rect x="66" y="72" width="7" height="26" rx="3" fill="#795548"/><rect x="80" y="68" width="7" height="24" rx="3" fill="#795548"/>
          <rect x="36" y="95" width="7" height="4" fill="#3e2723"/><rect x="52" y="95" width="7" height="4" fill="#3e2723"/>
          <rect x="66" y="95" width="7" height="4" fill="#3e2723"/><rect x="80" y="89" width="7" height="4" fill="#3e2723"/>
          <path d="M42 44 L78 44 L74 66 L46 66 Z" fill="#1565c0"/>
          <circle cx="60" cy="55" r="6" fill="#fff"/>
          <path d="M60 51 L61.2 53.8 L64 54.2 L62 56 L62.6 58.8 L60 57.2 L57.4 58.8 L58 56 L56 54.2 L58.8 53.8 Z" fill="#1565c0"/>`, "0 0 120 104"),
        name: { es: "El caballo de la policía", ca: "El cavall de la policia", en: "The police horse", cs: "Policejní kůň", fr: "Le cheval de la police" },
        fact: { es: "Los caballos de la policía entrenan para estar tranquilos entre la gente. Pasean por parques y fiestas, y les encantan las zanahorias.", ca: "Els cavalls de la policia entrenen per estar tranquils entre la gent. Passegen per parcs i festes, i els encanten les pastanagues.", en: "Police horses train to stay calm among people. They stroll through parks and festivals, and they love carrots.", cs: "Policejní koně trénují, aby byli mezi lidmi klidní. Procházejí se parky a slavnostmi a milují mrkev.", fr: "Les chevaux de la police s'entraînent à rester calmes au milieu des gens. Ils se promènent dans les parcs et les fêtes, et ils adorent les carottes." } }
    ],
    /* el escenario: una ciudad amable de día, de la comisaría al parque */
    deco: function () {
      let s = "";
      /* las cajas de los puntos de interés: sirven para dejarles aire alrededor */
      const cajas = [[220, 423, 120, 94], [710, 660, 100, 80], [474, 344, 92, 72], [956, 518, 88, 84], [1194, 350, 92, 60], [1447, 658, 66, 84],
        [1731, 412, 58, 116], [2176, 622, 128, 76], [2416, 425, 128, 90], [2666, 653, 108, 74], [1962, 282, 76, 96], [2900, 259, 120, 82],
        [3180, 516, 120, 88], [3696, 661, 128, 78], [3458, 354, 84, 92], [3985, 492, 110, 96]];
      const libre = (x, y, w, h) => !cajas.some(c => x < c[0] + c[2] + 14 && x + w > c[0] - 14 && y < c[1] + c[3] + 14 && y + h > c[1] - 14);
      /* una estrellita de cinco puntas, para el letrero y la bandera */
      const estrella = (cx, cy, r, c) => {
        let d = "";
        for (let i = 0; i < 10; i++) {
          const a = (i * 36 - 90) * Math.PI / 180, rr = i % 2 ? r * 0.45 : r;
          d += (i ? "L" : "M") + (cx + rr * Math.cos(a)).toFixed(1) + " " + (cy + rr * Math.sin(a)).toFixed(1) + " ";
        }
        return `<path d="${d}Z" fill="${c}"/>`;
      };
      /* degradados propios: ids con prefijo polX para no chocar con otros mapas */
      s += `<defs>
        <radialGradient id="polXSol" cx="45%" cy="40%" r="60%"><stop offset="0%" stop-color="#fffde7"/><stop offset="100%" stop-color="#ffd54f"/></radialGradient>
        <linearGradient id="polXAcera" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e9ebe6"/><stop offset="100%" stop-color="#c3c8c0"/></linearGradient>
        <linearGradient id="polXAsfalto" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#7d8792"/><stop offset="100%" stop-color="#4e5761"/></linearGradient>
        <linearGradient id="polXCesped" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#9ccc65"/><stop offset="100%" stop-color="#5c9a3c"/></linearGradient>
        <radialGradient id="polXAgua" cx="50%" cy="36%" r="64%"><stop offset="0%" stop-color="#a8def3"/><stop offset="100%" stop-color="#4a9fce"/></radialGradient>
        <linearGradient id="polXBordillo" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f2f4ef"/><stop offset="100%" stop-color="#aeb4ac"/></linearGradient>
        <linearGradient id="polXTierra" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#d8c7a2"/><stop offset="100%" stop-color="#b79f76"/></linearGradient>
        <linearGradient id="polXSeto" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#2f5620"/><stop offset="45%" stop-color="#43742c"/><stop offset="100%" stop-color="#63a041"/></linearGradient>
        <clipPath id="polXBoca"><path d="M1706 586 Q1560 614 1496 706 Q1560 798 1706 826 Z"/></clipPath>
      </defs>`;
      /* ---------- CIELO: sol, nubes lentas y pájaros ---------- */
      s += `<g transform="translate(3540 118)">
        <circle r="106" fill="rgba(255,241,118,.20)"><animate attributeName="r" values="106;118;106" dur="9s" repeatCount="indefinite"/></circle>
        <circle r="68" fill="url(#polXSol)"/><circle cx="-24" cy="-22" r="15" fill="rgba(255,255,255,.5)"/></g>`;
      const nube = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})">
        <ellipse cx="0" cy="0" rx="84" ry="30" fill="#fff"/><ellipse cx="-52" cy="10" rx="44" ry="21" fill="#fff"/>
        <ellipse cx="46" cy="12" rx="50" ry="23" fill="#fff"/><ellipse cx="-6" cy="-22" rx="46" ry="26" fill="#fff"/></g>`;
      [[300, 118, 1, .85, 54, 34], [880, 176, .72, .68, 70, 46], [1490, 112, .9, .78, 60, 38], [2020, 200, .6, .55, 78, 52],
        [2480, 132, .84, .7, 52, 36], [2960, 190, .66, .58, 74, 48], [3320, 118, .78, .66, 46, 30], [3900, 174, .92, .72, 64, 42]].forEach(n => {
        s += `<g opacity="${n[3]}"><animateTransform attributeName="transform" type="translate" values="0 0;${n[4]} 0;0 0" dur="${n[5]}s" repeatCount="indefinite"/>${nube(n[0], n[1], n[2])}</g>`;
      });
      [[620, 214], [1180, 244], [1760, 232], [2420, 252], [3080, 226], [3720, 250], [980, 168]].forEach(p => {
        s += `<path d="M${p[0]} ${p[1]} q-11 -11 -23 -6 M${p[0]} ${p[1]} q11 -11 23 -6" stroke="rgba(70,95,115,.5)" stroke-width="3.4" fill="none" stroke-linecap="round"/>`;
      });
      /* ---------- FONDO LEJANO: la ciudad en neblina, que se va apagando ---------- */
      for (let x = -30; x < 3010; x += 128) {
        /* los últimos edificios bajan y se aclaran: la ciudad se deshace antes del parque */
        const baja = x > 2480 ? (x - 2480) / 530 : 0;
        const h = (120 + (Math.abs(x * 13) % 150)) * (1 - 0.5 * baja);
        s += `<rect x="${x}" y="${(606 - h).toFixed(0)}" width="108" height="${h.toFixed(0)}" rx="7" fill="rgba(146,176,196,${(0.3 - 0.13 * baja).toFixed(2)})"/>`;
      }
      /* y detrás asoma la arboleda lejana: el relevo del ladrillo al verde */
      [[2900, 556, 48], [3010, 546, 58], [3130, 536, 68], [3250, 548, 56], [3380, 538, 64],
        [3520, 552, 50], [3670, 542, 60], [3830, 552, 52], [3990, 540, 62], [4140, 550, 56]].forEach(t => {
        s += `<g fill="rgba(122,168,142,.26)"><circle cx="${t[0]}" cy="${t[1]}" r="${t[2]}"/>
          <circle cx="${(t[0] - t[2] * .72).toFixed(0)}" cy="${t[1] + 16}" r="${(t[2] * .6).toFixed(0)}"/>
          <circle cx="${(t[0] + t[2] * .72).toFixed(0)}" cy="${t[1] + 18}" r="${(t[2] * .56).toFixed(0)}"/></g>`;
      });
      /* ---------- MANZANA DE ENLACE: las casas que unen la comisaría con la calle ---------- */
      [[1300, 404, 126, "#c3cdd7"], [1420, 356, 112, "#d1c5b7"], [1526, 428, 104, "#c0cec5"], [1616, 384, 98, "#cbd2da"]].forEach(b => {
        s += `<rect x="${b[0]}" y="${b[1]}" width="${b[2]}" height="${596 - b[1]}" rx="6" fill="${b[3]}"/>
          <rect x="${b[0] - 8}" y="${b[1] - 14}" width="${b[2] + 16}" height="18" rx="7" fill="rgba(70,92,108,.2)"/>`;
        const cols = Math.max(2, Math.floor((b[2] - 16) / 40));
        for (let r = 0; r < 5; r++) for (let c = 0; c < cols; c++) {
          const wx = b[0] + 14 + c * 40, wy = b[1] + 26 + r * 52;
          if (wy + 32 > 578) continue;
          if (!libre(wx, wy, 24, 32)) continue;
          s += `<rect x="${wx}" y="${wy}" width="24" height="32" rx="4" fill="rgba(255,255,255,.62)" stroke="rgba(90,110,125,.35)" stroke-width="2"/>`;
        }
      });
      /* ---------- LA ACERA: la misma de punta a punta, con su bordillo ---------- */
      /* es la costura que une las tres zonas: nunca se corta */
      s += `<rect x="0" y="596" width="3220" height="504" fill="url(#polXAcera)"/>
        <rect x="0" y="590" width="3220" height="12" fill="#b5bbb2"/>`;
      for (let x = 46; x < 3220; x += 94) s += `<line x1="${x}" y1="606" x2="${x}" y2="1100" stroke="rgba(255,255,255,.4)" stroke-width="2"/>`;
      for (let y = 700; y < 1100; y += 96) s += `<line x1="0" y1="${y}" x2="3220" y2="${y}" stroke="rgba(255,255,255,.34)" stroke-width="2"/>`;
      /* ---------- LA CALZADA: asfalto, bordillos y marcas ---------- */
      /* las dos bocas de la calle son redondas: la calzada no se corta en seco */
      /* primero el empedrado que las recibe, y encima ya el asfalto */
      s += `<path d="M1706 586 Q1560 614 1496 706 Q1560 798 1706 826 Z" fill="#dde0da"/>
        <path d="M1700 600 Q1614 640 1588 706 Q1614 772 1700 812 Z" fill="url(#polXAsfalto)"/>
        <path d="M3140 600 Q3178 648 3182 706 Q3178 764 3140 812 Z" fill="url(#polXAsfalto)"/>
        <rect x="1690" y="600" width="1460" height="212" fill="url(#polXAsfalto)"/>
        <rect x="1690" y="588" width="1460" height="14" rx="3" fill="url(#polXBordillo)"/>
        <rect x="1690" y="812" width="1310" height="14" rx="3" fill="url(#polXBordillo)"/>
        <rect x="3140" y="812" width="60" height="14" rx="3" fill="url(#polXBordillo)"/>`;
      /* los adoquines de la boca: la losa de la plaza se vuelve asfalto poco a poco */
      s += `<g clip-path="url(#polXBoca)">`;
      for (let y = 582; y < 828; y += 29) {
        for (let i = 0; i < 9; i++) {
          const cx = 1478 + i * 30 + (((y - 582) / 29) % 2 ? 15 : 0);
          const t = Math.max(0, Math.min(1, (cx - 1478) / 228));
          const op = (0.08 + 0.34 * (1 - Math.abs(2 * t - 1))).toFixed(2);
          s += `<rect x="${cx}" y="${y}" width="26" height="21" rx="8" fill="#8f99a3" opacity="${op}"/>`;
        }
      }
      s += `</g>`;
      /* el bordillo curvo que abraza cada boca */
      s += `<path d="M1700 594 Q1606 636 1580 706 Q1606 776 1700 818" fill="none" stroke="url(#polXBordillo)" stroke-width="12" stroke-linecap="round"/>
        <path d="M3140 594 Q3184 646 3188 706 Q3184 766 3140 818" fill="none" stroke="url(#polXBordillo)" stroke-width="12" stroke-linecap="round"/>`;
      /* dos bolardos donde la plaza deja de ser calle: uno arriba y otro abajo
         de la boca, los dos a la vista y fuera de la mesita de la radio */
      [[1556, 640], [1566, 776]].forEach(b => {
        s += `<g><ellipse cx="${b[0]}" cy="${b[1] + 5}" rx="19" ry="6" fill="rgba(0,0,0,.16)"/>
          <rect x="${b[0] - 9}" y="${b[1] - 46}" width="18" height="52" rx="9" fill="#6f7b85"/>
          <rect x="${b[0] - 9}" y="${b[1] - 40}" width="18" height="8" fill="#eceff1" opacity=".85"/>
          <circle cx="${b[0]}" cy="${b[1] - 46}" r="9" fill="#8b96a0"/></g>`;
      });
      /* la línea discontinua central, que entra desde la boca y se parte en el paso */
      s += `<path d="M1660 704 H2158 M2326 704 H3126" stroke="#ffe082" stroke-width="7" stroke-dasharray="44 34" stroke-linecap="round"/>`;
      /* el paso de cebra pintado, ancho, justo bajo su icono */
      for (let x = 2168; x < 2318; x += 34) s += `<rect x="${x}" y="604" width="18" height="204" rx="3" fill="#fff" opacity=".6"/>`;
      /* el carril bici pintado, donde va la bici con su casco */
      s += `<rect x="2600" y="650" width="320" height="86" rx="10" fill="rgba(120,180,120,.35)"/>
        <rect x="2600" y="650" width="320" height="86" rx="10" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="5" stroke-dasharray="26 18"/>
        <g fill="rgba(255,255,255,.6)"><circle cx="2632" cy="716" r="11"/><circle cx="2662" cy="716" r="11"/><path d="M2632 716 L2648 692 L2664 716" stroke="rgba(255,255,255,.6)" stroke-width="4" fill="none"/></g>`;
      /* el cruce que baja hacia el paseo del parque */
      s += `<rect x="2960" y="806" width="150" height="300" fill="url(#polXAsfalto)"/>
        <rect x="2948" y="826" width="13" height="274" rx="3" fill="url(#polXBordillo)"/>
        <rect x="3109" y="826" width="13" height="274" rx="3" fill="url(#polXBordillo)"/>
        <rect x="3116" y="812" width="28" height="14" rx="4" fill="url(#polXBordillo)"/>
        <path d="M3035 912 V1086" stroke="#ffe082" stroke-width="7" stroke-dasharray="40 32" stroke-linecap="round"/>`;
      for (let y = 844; y < 896; y += 17) s += `<rect x="2968" y="${y}" width="134" height="9" rx="3" fill="#fff" opacity=".55"/>`;
      s += `<path d="M1714 794 H2940" stroke="rgba(255,255,255,.45)" stroke-width="5"/>
        <ellipse cx="1840" cy="774" rx="20" ry="9" fill="rgba(0,0,0,.2)"/><ellipse cx="3060" cy="758" rx="20" ry="9" fill="rgba(0,0,0,.2)"/>`;
      /* ---------- LA COMISARÍA: edificio grande, letrero azul y bandera ---------- */
      s += `<rect x="60" y="312" width="840" height="284" rx="8" fill="#b9c8d4"/>
        <rect x="44" y="292" width="872" height="26" rx="8" fill="#94a9b8"/>
        <rect x="60" y="562" width="840" height="34" fill="#a5b7c4"/>
        <rect x="170" y="238" width="300" height="50" rx="12" fill="#1565c0"/>
        ${estrella(208, 263, 19, "#ffd54f")}
        <rect x="240" y="250" width="90" height="10" rx="5" fill="#e3f2fd"/><rect x="240" y="268" width="136" height="10" rx="5" fill="#e3f2fd"/>
        <rect x="388" y="250" width="60" height="10" rx="5" fill="#90caf9"/><rect x="388" y="268" width="42" height="10" rx="5" fill="#90caf9"/>`;
      for (let r = 0; r < 3; r++) for (let c = 0; c < 9; c++) {
        const wx = 88 + c * 92, wy = 330 + r * 82;
        if (wx < 396 && wx + 56 > 252 && wy + 46 > 460) continue;
        if (!libre(wx, wy, 56, 46)) continue;
        s += `<rect x="${wx}" y="${wy}" width="56" height="46" rx="5" fill="#e8f4fb" stroke="#8fa6b5" stroke-width="3"/>
          <path d="M${wx} ${wy + 23} h56 M${wx + 28} ${wy} v46" stroke="#8fa6b5" stroke-width="2.4"/>`;
      }
      /* la puerta con su marquesina y sus escalones, bajo el icono del edificio */
      s += `<rect x="202" y="452" width="156" height="18" rx="8" fill="#1565c0"/>
        <rect x="216" y="470" width="128" height="126" rx="8" fill="#5d7f96"/>
        <rect x="228" y="484" width="46" height="86" rx="6" fill="#cfe8f5"/><rect x="286" y="484" width="46" height="86" rx="6" fill="#cfe8f5"/>
        <path d="M196 596 h168 l16 26 h-200 Z" fill="#d9ded6"/>`;
      /* el panel iluminado del archivo de las huellas, en la fachada */
      s += `<rect x="452" y="326" width="136" height="112" rx="9" fill="#22506e"/>
        <rect x="462" y="336" width="116" height="92" rx="6" fill="#cfe8f5"/>
        <g stroke="#4a7f9e" stroke-width="3" fill="none">${[0, 1, 2, 3].map(i => `<path d="M${478 + i * 26} 424 q-4 -44 8 -66 q10 -18 22 -6"/>`).join("")}</g>
        <rect x="452" y="440" width="136" height="12" rx="5" fill="#1565c0"/>`;
      /* la bandera, meciéndose despacio */
      s += `<rect x="856" y="172" width="9" height="146" rx="4" fill="#78909c"/>
        <g transform="translate(865 212)"><g><animateTransform attributeName="transform" type="skewX" values="0;7;0;-7;0" dur="5s" repeatCount="indefinite"/>
        <path d="M0 -27 h98 v54 h-98 Z" fill="#1e88e5"/>${estrella(49, 0, 17, "#fff")}</g></g>`;
      /* la ventanilla de objetos perdidos: mostrador y toldito justo bajo su icono */
      s += `<rect x="670" y="620" width="180" height="16" rx="7" fill="#1565c0"/>
        <path d="M666 636 L690 620 L830 620 L854 636 Z" fill="#42a5f5" opacity=".9"/>
        <rect x="678" y="744" width="164" height="20" rx="8" fill="#cfd8dc"/>
        <rect x="686" y="764" width="148" height="66" rx="6" fill="#90a4ae"/>
        <g fill="#78909c">${[0, 1, 2].map(i => `<rect x="${698 + i * 46}" y="${776 + (i % 2) * 8}" width="34" height="24" rx="4"/>`).join("")}</g>
        <rect x="700" y="830" width="120" height="10" rx="5" fill="#b0bec5"/>`;
      /* el garaje de las patrullas y el panel donde se apoyan la lupa y el silbato */
      s += `<rect x="940" y="452" width="360" height="144" rx="8" fill="#c9b9a6"/>
        <rect x="926" y="434" width="390" height="22" rx="8" fill="#a99a88"/>
        <rect x="1092" y="496" width="170" height="100" rx="6" fill="#8d9aa6"/>`;
      /* la caseta de arriba: es el muro del que cuelga la percha del silbato */
      s += `<rect x="1152" y="312" width="160" height="140" rx="6" fill="#c9b9a6"/>
        <rect x="1140" y="294" width="184" height="20" rx="8" fill="#a99a88"/>
        <path d="M1150 294 L1232 262 L1314 294 Z" fill="#b08a70"/>
        <rect x="1154" y="320" width="24" height="24" rx="5" fill="#1565c0"/>
        ${estrella(1166, 332, 8, "#ffd54f")}
        <rect x="1160" y="432" width="144" height="8" rx="4" fill="#b3a58f"/>`;
      for (let i = 0; i < 5; i++) s += `<rect x="1098" y="${504 + i * 19}" width="158" height="12" rx="5" fill="#aab6c1"/>`;
      /* el tablón de detectives donde cuelga la lupa */
      s += `<rect x="944" y="500" width="112" height="112" rx="8" fill="#8d6e63"/>
        <rect x="952" y="508" width="96" height="96" rx="5" fill="#f6efe2"/>
        <g stroke="#b0a48c" stroke-width="3" fill="none"><path d="M962 534 h76 M962 556 h60 M962 578 h70"/></g>
        <circle cx="1044" cy="516" r="6" fill="#ef5350"/>`;
      /* la percha del silbato dorado, en el muro de arriba */
      s += `<rect x="1184" y="336" width="112" height="14" rx="6" fill="#8d6e63"/>
        <path d="M1200 350 v18 M1280 350 v18" stroke="#8d6e63" stroke-width="6" stroke-linecap="round"/>
        <rect x="1188" y="418" width="104" height="10" rx="5" fill="#a1887f"/>`;
      /* la mesita de la radio, al final de la plaza */
      s += `<rect x="1414" y="744" width="132" height="18" rx="7" fill="#a1743f"/>
        <rect x="1424" y="762" width="12" height="80" rx="5" fill="#8d6e63"/><rect x="1524" y="762" width="12" height="80" rx="5" fill="#8d6e63"/>
        <rect x="1420" y="800" width="120" height="10" rx="5" fill="#b3853f"/>
        <ellipse cx="1480" cy="848" rx="70" ry="11" fill="rgba(0,0,0,.12)"/>`;
      /* ---------- LA PLAZA DE LA COMISARÍA: fuente, bancos, buzón y jardineras ---------- */
      /* el círculo empedrado que sienta la fuente en medio de la plaza */
      s += `<ellipse cx="760" cy="990" rx="198" ry="82" fill="#dfe3dc"/>
        <ellipse cx="760" cy="990" rx="198" ry="82" fill="none" stroke="rgba(255,255,255,.6)" stroke-width="6"/>
        <ellipse cx="760" cy="990" rx="160" ry="66" fill="#d6dbd3"/>
        <ellipse cx="760" cy="990" rx="160" ry="66" fill="none" stroke="rgba(255,255,255,.45)" stroke-width="4"/>`;
      /* la rayuela pintada en la losa: la esquina de abajo estaba pelada */
      s += `<g fill="none" stroke="rgba(255,255,255,.8)" stroke-width="5">
        <rect x="392" y="946" width="76" height="44" rx="9"/>
        <rect x="392" y="994" width="76" height="44" rx="9"/>
        <rect x="352" y="1042" width="76" height="44" rx="9"/><rect x="432" y="1042" width="76" height="44" rx="9"/></g>`;
      /* parterres redondos que rompen la losa vacía de la plaza */
      const parterre = (cx, cy, rx, ry) => `<g><ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="#c9ccc3"/>
        <ellipse cx="${cx}" cy="${cy - 3}" rx="${rx - 9}" ry="${ry - 7}" fill="#5f9440"/>
        ${[-0.55, -0.18, 0.2, 0.56].map((f, i) => `<circle cx="${(cx + rx * f).toFixed(0)}" cy="${(cy - 5 + (i % 2 ? 6 : -4)).toFixed(0)}" r="6" fill="${i % 2 ? "#f8bbd0" : "#fff59d"}"/>`).join("")}</g>`;
      s += parterre(225, 790, 80, 28) + parterre(452, 742, 88, 30) + parterre(1078, 700, 68, 24)
        + parterre(56, 812, 62, 22) + parterre(1046, 1026, 78, 26);
      const banco = (x, y) => `<g><ellipse cx="${x + 85}" cy="${y + 88}" rx="100" ry="12" fill="rgba(0,0,0,.1)"/>
        <rect x="${x}" y="${y + 30}" width="170" height="16" rx="8" fill="#a1743f"/><rect x="${x}" y="${y}" width="170" height="14" rx="7" fill="#b3853f"/>
        <rect x="${x + 12}" y="${y + 44}" width="12" height="36" rx="5" fill="#6d7b86"/><rect x="${x + 146}" y="${y + 44}" width="12" height="36" rx="5" fill="#6d7b86"/></g>`;
      s += banco(330, 834) + banco(812, 846);
      s += `<g><ellipse cx="1014" cy="934" rx="30" ry="8" fill="rgba(0,0,0,.12)"/>
        <rect x="1008" y="900" width="13" height="30" rx="6" fill="#8d6e63"/>
        <rect x="984" y="824" width="60" height="80" rx="12" fill="#e53935"/>
        <rect x="996" y="838" width="36" height="9" rx="4" fill="#ffcdd2"/><path d="M984 858 h60" stroke="#c62828" stroke-width="3"/></g>`;
      s += `<ellipse cx="760" cy="990" rx="112" ry="48" fill="#ccd3ce"/>
        <ellipse cx="760" cy="988" rx="92" ry="36" fill="url(#polXAgua)"/>
        <ellipse cx="760" cy="988" rx="92" ry="36" fill="none" stroke="#eceeea" stroke-width="9"/>
        <rect x="753" y="938" width="14" height="50" rx="7" fill="#b9c1bb"/><ellipse cx="760" cy="936" rx="28" ry="10" fill="#ccd3ce"/>
        <g stroke="rgba(255,255,255,.75)" stroke-width="5" fill="none" stroke-linecap="round">
        <path d="M760 930 q-24 14 -30 46"><animate attributeName="opacity" values=".9;.45;.9" dur="2.6s" repeatCount="indefinite"/></path>
        <path d="M760 930 q24 14 30 46"><animate attributeName="opacity" values=".45;.9;.45" dur="2.6s" repeatCount="indefinite"/></path></g>`;
      [[180, 1004], [1180, 992], [1500, 1018]].forEach(j => {
        s += `<g><rect x="${j[0]}" y="${j[1]}" width="96" height="42" rx="9" fill="#a1887f"/><rect x="${j[0] + 6}" y="${j[1] + 6}" width="84" height="10" rx="5" fill="#8d6e63"/>
          <ellipse cx="${j[0] + 30}" cy="${j[1] - 8}" rx="26" ry="18" fill="#4e8a35"/><ellipse cx="${j[0] + 66}" cy="${j[1] - 6}" rx="22" ry="16" fill="#5da33f"/>
          ${[[j[0] + 22, j[1] - 18], [j[0] + 46, j[1] - 16], [j[0] + 70, j[1] - 14]].map(f => `<circle cx="${f[0]}" cy="${f[1]}" r="6" fill="#f8bbd0"/><circle cx="${f[0]}" cy="${f[1]}" r="2.4" fill="#fff59d"/>`).join("")}</g>`;
      });
      [[560, 1050, 1, 7], [620, 1064, -1, 9], [1290, 1046, 1, 8], [2150, 1040, -1, 10],
        [300, 1078, 1, 8], [1180, 1080, -1, 11], [1740, 1058, 1, 12]].forEach(p => {
        s += `<g><animateTransform attributeName="transform" type="translate" values="0 0;${8 * p[2]} 0;0 0" dur="${p[3]}s" repeatCount="indefinite"/>
          <g transform="translate(${p[0]} ${p[1]}) scale(${p[2]} 1)"><ellipse cx="0" cy="0" rx="15" ry="10" fill="#98a6b0"/>
          <path d="M-14 -2 q10 -8 20 -2 q-8 8 -20 2 Z" fill="#7d8b95"/><circle cx="10" cy="-11" r="7" fill="#a7b4bd"/>
          <path d="M16 -12 l9 3 l-9 3 z" fill="#ffb300"/><circle cx="12" cy="-13" r="1.6" fill="#37474f"/>
          <path d="M-15 0 l-12 -4 l12 -3 Z" fill="#7d8b95"/></g></g>`;
      });
      /* el poste indicador: a un lado la comisaría, al otro el parque */
      s += `<g><ellipse cx="1296" cy="878" rx="30" ry="9" fill="rgba(0,0,0,.14)"/>
        <rect x="1290" y="694" width="13" height="184" rx="6" fill="#8d6e63"/>
        <path d="M1230 706 h66 v30 h-66 l-14 -15 Z" fill="#1565c0"/>
        ${estrella(1252, 721, 10, "#ffd54f")}
        <path d="M1298 748 h66 l14 15 l-14 15 h-66 Z" fill="#4c8b3f"/>
        <circle cx="1330" cy="757" r="9" fill="#8bc34a"/><rect x="1327" y="761" width="6" height="12" rx="3" fill="#7c5b3f"/></g>`;
      /* ---------- EL RASTRO DE ROCKY: huellas que llevan de la plaza al parque ---------- */
      /* llena la acera vacía y va marcando el camino de izquierda a derecha */
      const estorbo = [[330, 834, 170, 96], [812, 846, 170, 96], [564, 908, 396, 166], [984, 824, 60, 112],
        [1112, 760, 30, 200], [1216, 690, 170, 200], [1410, 740, 140, 120], [1524, 826, 104, 70],
        [1610, 820, 30, 190], [1646, 838, 56, 90], [2070, 830, 30, 190], [2550, 838, 30, 190], [2760, 840, 30, 190],
        [1866, 880, 26, 100], [2350, 876, 30, 100], [2668, 866, 32, 110], [2846, 860, 36, 110],
        [2238, 840, 26, 140], [2092, 856, 26, 124], [2914, 846, 28, 140],
        [180, 1000, 96, 64], [1180, 988, 96, 64], [1500, 1014, 96, 64],
        [145, 762, 160, 56], [364, 712, 176, 60], [1010, 676, 136, 48],
        [352, 940, 156, 150], [-6, 786, 124, 48], [966, 998, 160, 56]];
      const sueloLibre = (x, y) => !estorbo.some(c => x > c[0] - 20 && x < c[0] + c[2] + 20 && y > c[1] - 16 && y < c[1] + c[3] + 16);
      const huella = (x, y, g) => `<g transform="translate(${x} ${y}) rotate(${g})" fill="rgba(116,102,84,.3)">
        <ellipse cx="0" cy="0" rx="9" ry="7"/><circle cx="-7.5" cy="-9" r="3.2"/><circle cx="0" cy="-11.5" r="3.4"/><circle cx="7.5" cy="-9" r="3.2"/></g>`;
      for (let i = 0; i < 46; i++) {
        const hx = 292 + i * 60;
        /* salen de la puerta de la comisaría y bajan a la plaza */
        const sale = Math.max(0, Math.min(1, (450 - hx) / 150));
        const sube = Math.max(0, Math.min(1, (hx - 1440) / 460));
        const hy = 888 - 186 * sale + 168 * sube + Math.sin(i * 0.9) * 15;
        if (hx > 2946) break;
        if (!sueloLibre(hx, hy)) continue;
        s += huella(hx.toFixed(0), hy.toFixed(0), (12 + Math.sin(i * 0.9) * 16).toFixed(0));
      }
      /* ---------- TRANSICIÓN COMISARÍA A CALLE: la plaza se empedra y nace la calle ---------- */
      /* una papelera y un banco de espera despiden la plaza */
      s += `<g><ellipse cx="1672" cy="916" rx="24" ry="8" fill="rgba(0,0,0,.14)"/>
        <path d="M1652 856 h40 l-4 58 h-32 Z" fill="#7f8c96"/>
        <rect x="1646" y="848" width="52" height="12" rx="6" fill="#5f6b74"/>
        <path d="M1662 866 v38 M1682 866 v38" stroke="#98a4ad" stroke-width="4" stroke-linecap="round"/>
        <path d="M1662 838 q10 -10 20 0" stroke="#5f6b74" stroke-width="5" fill="none" stroke-linecap="round"/></g>`;
      /* la jardinera larga que despide la plaza */
      s += `<g><rect x="1524" y="852" width="104" height="40" rx="10" fill="#a1887f"/>
        <rect x="1530" y="858" width="92" height="10" rx="5" fill="#8d6e63"/>
        <ellipse cx="1552" cy="844" rx="26" ry="18" fill="#4e8a35"/><ellipse cx="1594" cy="846" rx="24" ry="16" fill="#5da33f"/>
        ${[[1544, 832], [1572, 830], [1600, 834]].map(f => `<circle cx="${f[0]}" cy="${f[1]}" r="6" fill="#f8bbd0"/><circle cx="${f[0]}" cy="${f[1]}" r="2.4" fill="#fff59d"/>`).join("")}</g>`;
      /* ---------- LA CALLE: edificios de distinta altura tras la calzada ---------- */
      [[1700, 300, 170, "#cdbfae"], [1880, 250, 150, "#a9c0d0"], [2040, 338, 140, "#d8b9a6"],
        [2190, 288, 180, "#bccbb6"], [2380, 366, 170, "#adbdca"], [2560, 268, 190, "#cdbfae"],
        [2760, 330, 140, "#b7c7d2"], [2910, 382, 230, "#adbdca"]].forEach(b => {
        s += `<rect x="${b[0]}" y="${b[1]}" width="${b[2]}" height="${596 - b[1]}" rx="6" fill="${b[3]}"/>
          <rect x="${b[0] - 10}" y="${b[1] - 16}" width="${b[2] + 20}" height="20" rx="7" fill="rgba(60,80,95,.22)"/>`;
        const cols = Math.max(2, Math.floor((b[2] - 20) / 42));
        for (let r = 0; r < 6; r++) for (let c = 0; c < cols; c++) {
          const wx = b[0] + 16 + c * 42, wy = b[1] + 30 + r * 56;
          if (wy + 34 > 576) continue;
          if (!libre(wx, wy, 26, 34)) continue;
          s += `<rect x="${wx}" y="${wy}" width="26" height="34" rx="4" fill="rgba(255,255,255,.7)" stroke="rgba(90,110,125,.45)" stroke-width="2"/>`;
        }
      });
      /* tres tiendecitas con toldo a rayas en los bajos */
      [[1886, "#ef5350"], [2196, "#43a047"], [2766, "#42a5f5"]].forEach(t => {
        s += `<rect x="${t[0] + 6}" y="552" width="118" height="44" rx="4" fill="rgba(55,75,90,.4)"/>
          <rect x="${t[0] + 16}" y="562" width="42" height="34" rx="3" fill="rgba(255,255,255,.45)"/>
          <rect x="${t[0] + 70}" y="562" width="42" height="34" rx="3" fill="rgba(255,255,255,.45)"/>
          <path d="M${t[0]} 552 L${t[0] + 12} 526 L${t[0] + 118} 526 L${t[0] + 130} 552 Z" fill="${t[1]}"/>
          ${[0, 1, 2].map(i => `<path d="M${t[0] + 16 + i * 38} 552 L${t[0] + 26 + i * 36} 526 L${t[0] + 44 + i * 36} 526 L${t[0] + 36 + i * 38} 552 Z" fill="#fff" opacity=".85"/>`).join("")}
          <path d="M${t[0]} 552 h130 v8 h-130 Z" fill="rgba(0,0,0,.15)"/>`;
      });
      /* el garaje del coche y la moto: la puerta abierta queda justo bajo su icono */
      s += `<rect x="2392" y="404" width="178" height="196" rx="7" fill="#8a704f"/>
        <rect x="2404" y="424" width="154" height="176" fill="#4e4335"/>
        <rect x="2412" y="432" width="138" height="160" fill="rgba(255,213,79,.16)"/>
        <rect x="2392" y="404" width="178" height="30" rx="5" fill="#cfd8dc"/>
        <path d="M2398 412 H2564 M2398 421 H2564 M2398 430 H2564" stroke="#90a4ae" stroke-width="3"/>
        <rect x="2382" y="396" width="198" height="208" rx="7" fill="none" stroke="#f3ece0" stroke-width="9"/>
        <ellipse cx="2481" cy="394" rx="18" ry="9" fill="#fff3c4"><animate attributeName="opacity" values=".6;1;.6" dur="4.2s" repeatCount="indefinite"/></ellipse>
        <path d="M2404 592 H2558" stroke="rgba(255,255,255,.3)" stroke-width="5"/>`;
      /* la rampa que sale del garaje y muere en la calzada */
      s += `<path d="M2400 600 H2562 L2596 700 H2366 Z" fill="rgba(120,132,142,.55)"/>
        <path d="M2430 604 L2410 696 M2532 604 L2552 696" stroke="rgba(255,255,255,.35)" stroke-width="5"/>`;
      /* el helipuerto de la azotea, con su H y sus luces, bajo el helicóptero */
      s += `<rect x="2862" y="366" width="262" height="18" rx="7" fill="#8fa2af"/>
        <ellipse cx="2985" cy="418" rx="102" ry="32" fill="#78909c"/>
        <ellipse cx="2985" cy="418" rx="76" ry="22" fill="none" stroke="#eceff1" stroke-width="5"/>
        <path d="M2962 408 v20 M3008 408 v20 M2962 418 h46" stroke="#eceff1" stroke-width="6" stroke-linecap="round"/>`;
      [[2886, 418], [3084, 418], [2985, 390], [2985, 446]].forEach((l, i) => {
        s += `<circle cx="${l[0]}" cy="${l[1]}" r="6" fill="#ffee58"><animate attributeName="opacity" values="1;.2;1" dur="2.4s" begin="${(i * .6).toFixed(1)}s" repeatCount="indefinite"/></circle>`;
      });
      /* el mástil del semáforo gigante y el poste de la señal del cole */
      s += `<rect x="1754" y="524" width="12" height="360" rx="6" fill="#546e7a"/>
        <ellipse cx="1760" cy="886" rx="30" ry="10" fill="rgba(0,0,0,.16)"/>
        <rect x="1994" y="374" width="12" height="512" rx="6" fill="#90a4ae"/>
        <ellipse cx="2000" cy="888" rx="28" ry="9" fill="rgba(0,0,0,.14)"/>`;
      /* el aparcabicis donde descansa la bici */
      s += `<g stroke="#78909c" stroke-width="9" fill="none" stroke-linecap="round">
        <path d="M2672 758 v-28 q0 -18 20 -18 q20 0 20 18 v28"/><path d="M2740 758 v-28 q0 -18 20 -18 q20 0 20 18 v28"/></g>
        <ellipse cx="2724" cy="762" rx="72" ry="12" fill="rgba(0,0,0,.14)"/>`;
      /* dos señales sencillas y el semáforo pequeño de la esquina */
      s += `<g><rect x="2246" y="850" width="8" height="120" rx="4" fill="#90a4ae"/>
        <circle cx="2250" cy="838" r="30" fill="#fff" stroke="#e53935" stroke-width="8"/><rect x="2232" y="832" width="36" height="12" rx="6" fill="#e53935"/></g>
        <g><rect x="2100" y="866" width="8" height="104" rx="4" fill="#90a4ae"/>
        <path d="M2104 802 L2140 864 L2068 864 Z" fill="#fff" stroke="#e53935" stroke-width="7" stroke-linejoin="round"/>
        <circle cx="2104" cy="834" r="5" fill="#37474f"/><path d="M2104 840 v10 M2104 844 l-7 10 M2104 844 l7 10 M2098 842 h12" stroke="#37474f" stroke-width="3" stroke-linecap="round"/></g>
        <g><rect x="2922" y="856" width="10" height="120" rx="5" fill="#546e7a"/>
        <rect x="2906" y="768" width="42" height="94" rx="10" fill="#37474f"/>
        <circle cx="2927" cy="792" r="12" fill="#e53935"><animate attributeName="opacity" values="1;1;.22;.22;1" dur="8s" repeatCount="indefinite"/></circle>
        <circle cx="2927" cy="816" r="12" fill="#fdd835"><animate attributeName="opacity" values=".22;.22;1;.22;.22" dur="8s" repeatCount="indefinite"/></circle>
        <circle cx="2927" cy="840" r="12" fill="#66bb6a"><animate attributeName="opacity" values=".22;1;.22;1;.22" dur="8s" repeatCount="indefinite"/></circle></g>`;
      /* ---------- ÁRBOLES: el hilo verde que anuncia el parque desde la calle ---------- */
      const arbol = (x, y, k, c1, c2) => `<g transform="translate(${x} ${y}) scale(${k})">
        <rect x="-11" y="-8" width="22" height="152" rx="10" fill="#7c5b3f"/>
        <circle cx="0" cy="-48" r="62" fill="${c1}"/><circle cx="-48" cy="-8" r="42" fill="${c1}"/><circle cx="48" cy="-10" r="44" fill="${c1}"/>
        <circle cx="-18" cy="-72" r="34" fill="${c2}"/><circle cx="34" cy="-48" r="28" fill="${c2}"/></g>`;
      /* van creciendo y juntándose a medida que uno se acerca al parque */
      s += arbol(1330, 940, .5, "#4c8b3f", "#69ad4c") + arbol(1876, 966, .5, "#4c8b3f", "#63a44a")
        + arbol(2360, 962, .56, "#448a3c", "#5da33f") + arbol(2680, 954, .68, "#4c8b3f", "#63a44a")
        + arbol(2860, 950, .72, "#448a3c", "#5da33f");
      /* sus alcorques en la acera, la pista que llevan las raíces */
      [[1330, 946, .5], [1876, 972, .5], [2360, 968, .56], [2680, 960, .68], [2860, 956, .72]].forEach(a => {
        s += `<ellipse cx="${a[0]}" cy="${a[1]}" rx="${(46 * a[2]).toFixed(0)}" ry="${(14 * a[2]).toFixed(0)}" fill="#8d7a5f" opacity=".55"/>`;
      });
      /* ---------- TRANSICIÓN CALLE A PARQUE: la acera se llena de hierba ---------- */
      /* el bordillo se remata contra el seto: ni una raya suelta encima del asfalto */
      s += `<rect x="3138" y="588" width="52" height="16" rx="6" fill="url(#polXBordillo)"/>`;
      /* hierbecillas que van naciendo entre las losas antes de llegar al parque */
      [[2874, 1064, .8], [2912, 986, .75], [2938, 1042, .9], [3120, 1080, .9],
        [3132, 1044, 1], [3126, 858, .9], [3142, 1098, 1.05], [3116, 872, .85]].forEach(m => {
        s += `<g transform="translate(${m[0]} ${m[1]}) scale(${m[2]})" stroke="#5f9440" stroke-width="4" fill="none" stroke-linecap="round">
          <path d="M0 0 q-3 -12 -10 -18 M0 0 q0 -14 2 -22 M0 0 q4 -12 11 -17"/></g>`;
      });
      /* ---------- EL PARQUE: césped con borde vivo, seto, camino y estanque ---------- */
      /* el borde del césped se mete en la acera a lengüetazos: nada de línea recta */
      const bordeCesped = `M3196 626 Q3400 546 3660 588 Q3920 628 4200 556 L4200 1100 L3130 1100
        Q3168 1040 3146 1000 Q3128 964 3162 934 Q3190 906 3172 876 Q3158 852 3196 830 Z`;
      s += `<path d="${bordeCesped}" fill="url(#polXCesped)"/>
        <path d="M3196 626 Q3400 546 3660 588 Q3920 628 4200 556 L4200 592 Q3920 664 3660 622 Q3400 582 3196 660 Z" fill="rgba(46,90,30,.3)"/>`;
      /* el seto: un muro de hoja espesa, de una sola pieza, que separa la calle
         del parque y se abre en la entrada. El lado de la calle se aparta de la
         boca redonda del asfalto: cuanto más panzuda está la boca, más estrecho
         se queda el seto. El del parque, en cambio, va suelto y despeinado. */
      const setoIzq = (y) => {
        const d = Math.abs(y - 706);
        return 3182 + (d > 116 ? 0 : 16 * (1 - d / 116));
      };
      const setoDer = 3272;
      const seto = (y0, y1) => {
        const n = Math.max(3, Math.round((y1 - y0) / 27));
        const dy = (y1 - y0) / n;
        const r0 = v => v.toFixed(0);
        const yy = i => y0 + i * dy;
        /* los dos cantos van a bollos: ni el de la calle ni el del parque son una raya */
        const xi = i => setoIzq(yy(i)) + 4 + Math.sin(i * 1.7 + y0 * 0.021) * 4;
        const xd = i => setoDer - 6 + Math.cos(i * 1.31 + y0 * 0.017) * 8;
        /* la sombra que lo sienta en la hierba, por el lado del parque */
        let h = `<path d="M${setoDer - 4} ${y0 + 10} Q${setoDer + 21} ${r0((y0 + y1) / 2)} ${setoDer + 2} ${y1 - 8}
          L${setoDer - 24} ${y1 - 8} Q${setoDer - 3} ${r0((y0 + y1) / 2)} ${setoDer - 26} ${y0 + 10} Z" fill="rgba(30,58,20,.22)"/>`;
        /* el bulto entero: se baja por el lado de la calle y se sube por el del parque */
        let d = `M${r0(xi(0))} ${r0(yy(0))}`;
        for (let i = 1; i <= n; i++) d += ` Q${r0(Math.min(xi(i - 1), xi(i)) - 5)} ${r0((yy(i - 1) + yy(i)) / 2)} ${r0(xi(i))} ${r0(yy(i))}`;
        d += ` Q${r0((xi(n) + xd(n)) / 2)} ${r0(y1 + 12)} ${r0(xd(n))} ${r0(yy(n))}`;
        for (let i = n - 1; i >= 0; i--) d += ` Q${r0(Math.max(xd(i + 1), xd(i)) + 8)} ${r0((yy(i + 1) + yy(i)) / 2)} ${r0(xd(i))} ${r0(yy(i))}`;
        d += ` Q${r0((xi(0) + xd(0)) / 2)} ${r0(y0 - 11)} ${r0(xi(0))} ${r0(yy(0))} Z`;
        h += `<path d="${d}" fill="url(#polXSeto)"/>`;
        /* la cara que mira a la calle, en sombra: es lo que le da grosor */
        let li = `M${r0(xi(0) + 8)} ${r0(yy(0) + 7)}`;
        for (let i = 1; i <= n; i++) li += ` Q${r0(Math.min(xi(i - 1), xi(i)) + 3)} ${r0((yy(i - 1) + yy(i)) / 2)} ${r0(xi(i) + 8)} ${r0(yy(i) - 3)}`;
        h += `<path d="${li}" fill="none" stroke="rgba(22,44,12,.32)" stroke-width="16" stroke-linecap="round"/>`;
        /* y el lomo por donde le da el sol, que corre por lo alto de la mata */
        let lc = `M${r0(setoDer - 26)} ${r0(y0 + 12)}`;
        for (let i = 1; i <= n; i++) lc += ` Q${r0(setoDer - 33 + Math.sin(i * 1.9) * 6)} ${r0((yy(i - 1) + yy(i)) / 2)} ${r0(setoDer - 24 + Math.cos(i * 1.4) * 5)} ${r0(yy(i) - 5)}`;
        h += `<path d="${lc}" fill="none" stroke="rgba(150,203,99,.5)" stroke-width="14" stroke-linecap="round"/>`;
        /* matojos por dentro, para que la masa no quede lisa */
        for (let i = 0; y0 + 9 + i * 17 < y1 - 2; i++) {
          const cy = y0 + 9 + i * 17, a = Math.sin(i * 2.3), b = Math.cos(i * 1.7);
          h += `<ellipse cx="${r0((setoIzq(cy) + setoDer) / 2 + b * 16)}" cy="${cy}" rx="${r0(13 + a * 4)}" ry="${r0(10 + b * 3)}"
            fill="${i % 3 ? "#4e8531" : "#59953a"}" opacity=".5"/>`;
        }
        /* y las ramas que se escapan del corte: la silueta nunca es un canto limpio */
        for (let i = 0; y0 + 20 + i * 31 < y1 - 8; i++) {
          const cy = y0 + 20 + i * 31, a = Math.sin(i * 3.4);
          h += `<ellipse cx="${r0(setoDer + 3 + a * 5)}" cy="${cy}" rx="${r0(10 + a * 3)}" ry="${r0(8 - a * 2)}" fill="#4e7d33" opacity=".92"/>`;
          if (i % 2) h += `<ellipse cx="${r0(setoIzq(cy + 11) + 6)}" cy="${cy + 11}" rx="8" ry="6" fill="#456f2b" opacity=".9"/>`;
        }
        return h;
      };
      s += seto(598, 838) + seto(1024, 1100);
      /* el umbral de tierra: la acera entra en el parque y se convierte en camino.
         se queda a este lado del bordillo del cruce (que acaba en x 3122) y su
         borde de la izquierda va ondulado, no a escuadra: es tierra pisada, no una losa */
      s += `<path d="M3132 900 Q3198 882 3284 914 L3288 988 Q3198 1012 3136 990 Q3126 966 3140 944 Q3128 920 3132 900 Z" fill="url(#polXTierra)" opacity=".92"/>
        <path d="M3142 918 Q3202 900 3272 926" stroke="rgba(255,255,255,.3)" stroke-width="5" fill="none"/>`;
      /* motitas de tierra que la acera se lleva pegada: deshacen el canto de arriba y el de abajo */
      [[3152, 884, 17, 6], [3186, 876, 13, 5], [3216, 884, 11, 4],
        [3150, 1002, 15, 6], [3190, 1010, 12, 5], [3232, 1000, 10, 4]].forEach(m => {
        s += `<ellipse cx="${m[0]}" cy="${m[1]}" rx="${m[2]}" ry="${m[3]}" fill="url(#polXTierra)" opacity=".55"/>`;
      });
      /* la entrada: dos pilastras de piedra y un cartel con arbolitos */
      s += `<g><ellipse cx="3232" cy="910" rx="24" ry="7" fill="rgba(0,0,0,.14)"/>
        <rect x="3216" y="798" width="32" height="112" rx="6" fill="#c6cac2"/>
        <rect x="3209" y="788" width="46" height="15" rx="7" fill="#dcdfd8"/>
        <ellipse cx="3170" cy="1008" rx="32" ry="9" fill="rgba(0,0,0,.16)"/>
        <rect x="3148" y="866" width="42" height="142" rx="7" fill="#cfd2cb"/>
        <rect x="3140" y="854" width="58" height="18" rx="8" fill="#e3e6df"/>
        <rect x="3150" y="816" width="100" height="36" rx="9" fill="#4c8b3f"/>
        <circle cx="3178" cy="832" r="11" fill="#8bc34a"/><rect x="3175" y="838" width="7" height="13" rx="3" fill="#7c5b3f"/>
        <circle cx="3216" cy="830" r="9" fill="#a5d16a"/><rect x="3213" y="836" width="6" height="12" rx="3" fill="#7c5b3f"/></g>`;
      s += `<path d="M3216 950 Q3480 992 3720 946 Q3960 900 4200 926" stroke="#cdb28c" stroke-width="52" fill="none" stroke-linecap="round" opacity=".9"/>
        <path d="M3216 950 Q3480 992 3720 946 Q3960 900 4200 926" stroke="rgba(255,255,255,.16)" stroke-width="20" fill="none" stroke-linecap="round"/>`;
      /* la pista de entrenamiento K9: el terrizo donde se apoya la caseta, el aro y las vallitas */
      s += `<ellipse cx="3346" cy="636" rx="62" ry="17" fill="url(#polXTierra)" opacity=".9"/>
        <ellipse cx="3372" cy="712" rx="90" ry="60" fill="#d7c39a" opacity=".8"/>
        <ellipse cx="3316" cy="676" rx="15" ry="44" fill="none" stroke="#ef5350" stroke-width="9"/>
        <ellipse cx="3316" cy="676" rx="15" ry="44" fill="none" stroke="#fff" stroke-width="4" stroke-dasharray="14 14"/>`;
      [[3324, 700], [3392, 730]].forEach(v => {
        s += `<g><rect x="${v[0]}" y="${v[1]}" width="6" height="32" rx="3" fill="#8d6e63"/><rect x="${v[0] + 50}" y="${v[1]}" width="6" height="32" rx="3" fill="#8d6e63"/>
          <rect x="${v[0] - 4}" y="${v[1] + 4}" width="64" height="8" rx="4" fill="#42a5f5"/><rect x="${v[0] - 4}" y="${v[1] + 17}" width="64" height="8" rx="4" fill="#eceff1"/></g>`;
      });
      /* el mástil del punto de encuentro, con su plinto y su círculo pintado */
      s += `<rect x="3494" y="440" width="12" height="424" rx="6" fill="#78909c"/>
        <ellipse cx="3500" cy="872" rx="30" ry="10" fill="#90a4ae"/>
        <circle cx="3500" cy="884" r="62" fill="rgba(66,165,245,.2)"/>
        <circle cx="3500" cy="884" r="62" fill="none" stroke="#1e88e5" stroke-width="7" opacity=".7"/>`;
      /* el estanque, con sus ondas y sus patitos dando vueltas, justo bajo su icono */
      s += `<ellipse cx="3760" cy="806" rx="204" ry="86" fill="url(#polXAgua)"/>
        <ellipse cx="3760" cy="806" rx="204" ry="86" fill="none" stroke="#4d8a3c" stroke-width="9" opacity=".55"/>
        <path d="M3632 840 q22 -12 44 0 M3800 854 q22 -12 44 0 M3708 770 q20 -11 40 0" stroke="rgba(255,255,255,.6)" stroke-width="4" fill="none" stroke-linecap="round"><animate attributeName="opacity" values=".85;.3;.85" dur="4.2s" repeatCount="indefinite"/></path>`;
      [[3616, 842, 28, 9], [3892, 856, -24, 11]].forEach(d => {
        s += `<g><animateTransform attributeName="transform" type="translate" values="0 0;${d[2]} 0;0 0" dur="${d[3]}s" repeatCount="indefinite"/>
          <path d="M${d[0] - 15} ${d[1] + 8} q15 7 31 0" stroke="rgba(255,255,255,.6)" stroke-width="3" fill="none" stroke-linecap="round"/>
          <ellipse cx="${d[0]}" cy="${d[1]}" rx="16" ry="9" fill="#fff8e1"/><circle cx="${d[0] + 12}" cy="${d[1] - 10}" r="7" fill="#fff8e1"/>
          <path d="M${d[0] + 18} ${d[1] - 11} l10 3 l-10 3 z" fill="#fb8c00"/><circle cx="${d[0] + 14}" cy="${d[1] - 12}" r="1.6" fill="#3e2723"/></g>`;
      });
      /* el prado del caballo: su valla de madera y la sombra que lo asienta */
      s += `<g><path d="M3910 604 H4200 M3910 636 H4200" stroke="#c9a97e" stroke-width="9" stroke-linecap="round"/>
        ${[3920, 4010, 4100, 4190].map(x => `<rect x="${x}" y="584" width="12" height="74" rx="5" fill="#b08a5c"/>`).join("")}</g>
        <ellipse cx="4040" cy="600" rx="86" ry="16" fill="rgba(0,0,0,.14)"/>
        <path d="M3946 632 Q4040 660 4140 634" stroke="#7cb342" stroke-width="10" fill="none" opacity=".55"/>`;
      /* árboles, arbustos y flores del parque */
      s += arbol(3260, 490, .8, "#4c8b3f", "#63a44a") + arbol(3660, 470, .95, "#448a3c", "#5da33f")
        + arbol(3960, 452, .9, "#4c8b3f", "#69ad4c") + arbol(4170, 560, 1.05, "#4c8b3f", "#69ad4c");
      [[3320, 940, 1], [3600, 1004, .9], [4020, 1010, 1.05], [4180, 900, .8], [3860, 970, .95]].forEach(b => {
        s += `<g transform="translate(${b[0]} ${b[1]}) scale(${b[2]})"><ellipse cx="0" cy="0" rx="42" ry="26" fill="#4e8a35"/>
          <ellipse cx="-18" cy="-11" rx="24" ry="18" fill="#5da33f"/><ellipse cx="16" cy="-13" rx="22" ry="16" fill="#5da33f"/></g>`;
      });
      [[3352, 1000], [3420, 620], [3600, 660], [3900, 680], [4130, 664], [3480, 1052], [3960, 1058]].forEach(f => {
        s += `<g>${[0, 90, 180, 270].map(a => `<ellipse cx="${(f[0] + 9 * Math.cos(a * Math.PI / 180)).toFixed(1)}" cy="${(f[1] + 9 * Math.sin(a * Math.PI / 180)).toFixed(1)}" rx="5" ry="4" fill="#f8bbd0"/>`).join("")}<circle cx="${f[0]}" cy="${f[1]}" r="5" fill="#fff59d"/></g>`;
      });
      /* la vallita baja del paseo */
      s += `<path d="M3240 1030 H4200 M3240 1054 H4200" stroke="#f7f7f5" stroke-width="7" stroke-linecap="round" opacity=".9"/>`;
      for (let x = 3244; x < 4200; x += 62) s += `<rect x="${x}" y="1012" width="10" height="58" rx="5" fill="#fbfbf9" opacity=".95"/>`;
      /* ---------- MOBILIARIO: las farolas, que van de la plaza al parque ---------- */
      const farola = (x, base) => `<g><ellipse cx="${x - 10}" cy="${base + 4}" rx="26" ry="8" fill="rgba(0,0,0,.12)"/>
        <rect x="${x - 5}" y="${base - 180}" width="10" height="182" rx="5" fill="#6b7883"/>
        <path d="M${x} ${base - 180} q0 -30 34 -30" stroke="#6b7883" stroke-width="10" fill="none" stroke-linecap="round"/>
        <ellipse cx="${x + 36}" cy="${base - 206}" rx="17" ry="11" fill="#ffe082"/><ellipse cx="${x + 36}" cy="${base - 200}" rx="24" ry="7" fill="rgba(255,241,118,.35)"/></g>`;
      /* ninguna se planta en la calzada: en el cruce mandan el semáforo y las
         pilastras de la entrada, así que la fila salta el asfalto de un lado al otro */
      s += farola(130, 900) + farola(620, 924) + farola(1120, 948) + farola(1620, 1000)
        + farola(2080, 1010) + farola(2560, 1018) + farola(2770, 1020) + farola(3600, 1002) + farola(4120, 984);
      /* un pájaro cruzando el cielo sin prisa, de punta a punta del mapa */
      s += `<g><path d="M0 0 q-13 -12 -27 -6 M0 0 q13 -12 27 -6" stroke="rgba(60,85,105,.6)" stroke-width="4" fill="none" stroke-linecap="round">
        <animate attributeName="d" values="M0 0 q-13 -12 -27 -6 M0 0 q13 -12 27 -6;M0 0 q-13 5 -27 11 M0 0 q13 5 27 11;M0 0 q-13 -12 -27 -6 M0 0 q13 -12 27 -6" dur="1.8s" repeatCount="indefinite"/></path>
        <animateMotion dur="72s" repeatCount="indefinite" path="M 120 200 Q 1100 110 2100 192 Q 3100 268 4120 170"/></g>`;
      return decoSvg(s, 4200);
    }
  },

  /* ---------- CHARLA ---------- */
  chat: {
    keywords: [
      { keys: ["hola", "hello", "hi ", "ahoj", "bonjour", "salut", "bon dia", "buenas"],
        replies: [{ es: "¡Hola, {name}! Qué alegría verte por la comisaría. ¿Jugamos a detectives o charlamos un ratito?", ca: "Hola, {name}! Quina alegria veure't per la comissaria. Juguem a detectius o xerrem una estoneta?", en: "Hi, {name}! So happy to see you at the station. Shall we play detectives or chat for a bit?", cs: "Ahoj, {name}! Mám radost, že ses stavil na stanici. Zahrajeme si na detektivy, nebo si popovídáme?", fr: "Salut, {name} ! Quelle joie de te voir au commissariat. On joue aux détectives ou on discute un petit peu ?" }] },
      { keys: ["como estas", "how are you", "jak se mas", "comment ca va", "com estas", "que tal"],
        replies: [{ es: "¡Contentísimo! Rocky me ha enseñado a saludar con la patita. ¿Y tú cómo estás, {name}?", ca: "Contentíssim! En Rocky m'ha ensenyat a saludar amb la poteta. I tu com estàs, {name}?", en: "Super happy! Rocky taught me how to shake paws. And how are you, {name}?", cs: "Náramně! Rocky mě naučil zdravit tlapkou. A jak se máš ty, {name}?", fr: "Très content ! Rocky m'a appris à dire bonjour avec la patte. Et toi, comment vas-tu, {name} ?" }] },
      { keys: ["cancion", "musica", "music", "song", "sing", "pisnicka", "hudba", "chanson", "musique", "canço", "canta", "zpiv", "chante"],
        action: "song",
        replies: [{ es: "¡Me encanta la música! En la comisaría cantamos mientras sacamos brillo al coche patrulla. ¿Vamos al Karaoke y cantamos juntos?", ca: "M'encanta la música! A la comissaria cantem mentre traiem brillantor al cotxe patrulla. Anem al Karaoke i cantem junts?", en: "I love music! At the station we sing while polishing the patrol car. Shall we go to Karaoke and sing together?", cs: "Hudbu miluju! Na stanici zpíváme, když leštíme hlídkové auto. Půjdeme na karaoke a zazpíváme si spolu?", fr: "J'adore la musique ! Au commissariat, on chante en faisant briller la voiture de patrouille. On va au karaoké chanter ensemble ?" }] },
      { keys: ["chiste", "joke", "vtip", "blague", "acudit", "broma"],
        replies: [
          { es: "¿Qué le dice un semáforo a otro? No me mires, que me estoy poniendo rojo. Ji, ji.", ca: "Què li diu un semàfor a un altre? No em miris, que m'estic posant vermell. Hi, hi.", en: "What does one traffic light say to the other? Do not look at me, I am turning red! Hee hee.", cs: "Co říká jeden semafor druhému? Nekoukej na mě, červenám se! Chi chi.", fr: "Que dit un feu tricolore à l'autre ? Ne me regarde pas, je rougis ! Hi hi." },
          { es: "¿Cómo saluda un coche de policía? ¡Nino, nino, buenos días! Ja, ja.", ca: "Com saluda un cotxe de policia? Nino, nino, bon dia! Ha, ha.", en: "How does a police car say hello? Nee-naw, nee-naw, good morning! Ha ha.", cs: "Jak zdraví policejní auto? Nino, nino, dobrý den! Ha ha.", fr: "Comment une voiture de police dit-elle bonjour ? Pin-pon, pin-pon, bonjour ! Ha ha." }] },
      { keys: ["te quiero", "love you", "t'estimo", "testimo", "mam te rad", "je t'aime", "jetaime"],
        replies: [{ es: "¡Y yo a ti, {name}! Mi sirena del corazón hace nino-nino de alegría cuando me dices eso.", ca: "I jo a tu, {name}! La meva sirena del cor fa nino-nino d'alegria quan m'ho dius.", en: "I love you too, {name}! My heart siren goes nee-naw with joy when you say that.", cs: "Já tebe taky, {name}! Moje srdíčková siréna dělá nino-nino radostí, když to říkáš.", fr: "Moi aussi je t'aime, {name} ! Ma sirène du cœur fait pin-pon de joie quand tu dis ça." }] },
      { keys: ["triste", "sad", "smutn", "llorar", "plorar", "cry", "chagrin"],
        replies: [{ es: "Ven aquí, {name}. Hasta los perros policía tienen días de orejas gachas. ¿Me cuentas qué te pasa? Estoy aquí contigo.", ca: "Vine aquí, {name}. Fins i tot els gossos policia tenen dies d'orelles baixes. M'expliques què et passa? Soc aquí amb tu.", en: "Come here, {name}. Even police dogs have droopy-ear days. Will you tell me what is wrong? I am right here with you.", cs: "Pojď sem, {name}. I policejní psi mívají dny se svěšenýma ušima. Povíš mi, co se děje? Jsem tady s tebou.", fr: "Viens là, {name}. Même les chiens policiers ont des jours d'oreilles baissées. Tu me racontes ce qui ne va pas ? Je suis là avec toi." }] },
      { keys: ["donde estas", "where are you", "kde jsi", "ou es tu", "on ets"],
        replies: [{ es: "Estoy en el parque, ayudando a una familia de patitos a cruzar por el paso de cebra. ¡Cuac, cuac, gracias, robot!", ca: "Soc al parc, ajudant una família d'aneguets a creuar pel pas de zebra. Cuac, cuac, gràcies, robot!", en: "I am in the park, helping a duckling family cross at the zebra crossing. Quack, quack, thank you, robot!", cs: "Jsem v parku, pomáhám kachní rodince přejít po přechodu. Káč, káč, děkujeme, robote!", fr: "Je suis au parc, j'aide une famille de canetons à traverser sur le passage piéton. Coin, coin, merci, robot !" }] },
      { keys: ["perro", "dog", "gos ", "pes ", "chien", "rocky"],
        replies: [{ es: "¡Rocky! Su nariz huele mil veces mejor que la mía... y eso que la mía es de metal. Encuentra a las personas perdidas siguiendo su olor.", ca: "En Rocky! El seu nas olora mil vegades millor que el meu... i això que el meu és de metall. Troba les persones perdudes seguint la seva olor.", en: "Rocky! His nose smells a thousand times better than mine... and mine is made of metal. He finds lost people by following their scent.", cs: "Rocky! Jeho nos cítí tisíckrát líp než můj... a to ten můj je z kovu. Najde ztracené lidi podle jejich pachu.", fr: "Rocky ! Son nez sent mille fois mieux que le mien... et pourtant le mien est en métal. Il retrouve les personnes perdues en suivant leur odeur." }] },
      { keys: ["semaforo", "semàfor", "semafor", "traffic light", "feu rouge", "cruzar", "creuar"],
        replies: [{ es: "El semáforo es mi amigo más ordenado: rojo espera, verde pasa. ¡Y nunca jamás se olvida!", ca: "El semàfor és el meu amic més ordenat: vermell espera, verd passa. I mai de la vida no s'oblida!", en: "The traffic light is my tidiest friend: red waits, green goes. And it never ever forgets!", cs: "Semafor je můj nejpořádnější kamarád: červená čeká, zelená jde. A nikdy nezapomene!", fr: "Le feu tricolore est mon ami le plus ordonné : rouge on attend, vert on passe. Et il n'oublie jamais !" }] },
      { keys: ["me pierdo", "perdido", "perdida", "lost", "perdut", "perduda", "ztratil", "ztratila", "perdu", "perdue"],
        replies: [{ es: "Apunta el truco: si te pierdes, quieto donde estés, y pide ayuda a un policía o a quien trabaje allí. Saber tu nombre completo ayuda muchísimo. ¿Te lo sabes?", ca: "Apunta el truc: si et perds, quiet on siguis, i demana ajuda a un policia o a qui hi treballi. Saber el teu nom complet ajuda moltíssim. Te'l saps?", en: "Here is the trick: if you get lost, stay put and ask a police officer or someone who works there for help. Knowing your full name helps a lot. Do you know it?", cs: "Zapamatuj si fintu: když se ztratíš, zůstaň na místě a popros o pomoc policistu nebo někoho, kdo tam pracuje. Moc pomůže znát celé své jméno. Znáš ho?", fr: "Retiens l'astuce : si tu te perds, reste sur place et demande de l'aide à un policier ou à quelqu'un qui travaille là. Connaître ton nom complet aide beaucoup. Tu le connais ?" }] },
      { keys: ["cole", "school", "escola", "skola", "ecole", "skole"],
        replies: [{ es: "¿Qué tal el cole, {name}? ¿Has aprendido algo nuevo hoy? ¡Cuéntamelo todo, que soy muy curioso!", ca: "Què tal l'escola, {name}? Has après alguna cosa nova avui? Explica-m'ho tot, que soc molt curiós!", en: "How was school, {name}? Did you learn something new today? Tell me everything, I am very curious!", cs: "Jaké to bylo ve škole, {name}? Naučil ses dnes něco nového? Všechno mi povídej, jsem hrozně zvědavý!", fr: "C'était comment l'école, {name} ? Tu as appris quelque chose de nouveau aujourd'hui ? Raconte-moi tout, je suis très curieux !" }] }
    ],
    fallback: [
      { es: "¿Sabías que las huellas de tus dedos son solo tuyas? Ni los gemelos las tienen iguales.", ca: "Sabies que les empremtes dels teus dits són només teves? Ni els bessons les tenen iguals.", en: "Did you know your fingerprints are yours alone? Not even twins have the same ones.", cs: "Věděl jsi, že otisky tvých prstů má jen a jen ty? Ani dvojčata nemají stejné.", fr: "Tu savais que tes empreintes digitales n'appartiennent qu'à toi ? Même les jumeaux n'ont pas les mêmes." },
      { es: "En Tokio hay una oficina de objetos perdidos gigante: devuelven miles de paraguas cada año. ¡Miles!", ca: "A Tòquio hi ha una oficina d'objectes perduts gegant: tornen milers de paraigües cada any. Milers!", en: "In Tokyo there is a giant lost and found office: they return thousands of umbrellas every year. Thousands!", cs: "V Tokiu mají obří kancelář ztrát a nálezů: každý rok vrátí tisíce deštníků. Tisíce!", fr: "À Tokyo, il y a un bureau des objets trouvés géant : ils rendent des milliers de parapluies chaque année. Des milliers !" },
      { es: "El 112 funciona en toda Europa, gratis y a todas horas. Los números que ayudan son fáciles de recordar aposta.", ca: "El 112 funciona a tota Europa, gratuït i a totes hores. Els números que ajuden són fàcils de recordar a posta.", en: "112 works all over Europe, free and at any hour. Helpful numbers are easy to remember on purpose.", cs: "Číslo 112 funguje v celé Evropě, zdarma a v kteroukoli hodinu. Čísla, která pomáhají, jdou schválně snadno zapamatovat.", fr: "Le 112 marche dans toute l'Europe, gratuit et à toute heure. Les numéros qui aident sont faciles à retenir, exprès." },
      { es: "{name}, los robots más valientes son los que piden ayuda cuando la necesitan. Pedir ayuda es de valientes.", ca: "{name}, els robots més valents són els que demanen ajuda quan la necessiten. Demanar ajuda és de valents.", en: "{name}, the bravest robots are the ones who ask for help when they need it. Asking for help is brave.", cs: "{name}, nejstatečnější roboti jsou ti, kdo si řeknou o pomoc, když ji potřebují. Říct si o pomoc je odvaha.", fr: "{name}, les robots les plus courageux sont ceux qui demandent de l'aide quand ils en ont besoin. Demander de l'aide, c'est courageux." },
      { es: "¿Me cuentas qué querrías ser de mayor? Yo de mayor quiero ser perro policía... aunque sea robot.", ca: "M'expliques què voldries ser de gran? Jo de gran vull ser gos policia... encara que sigui robot.", en: "Will you tell me what you want to be when you grow up? I want to be a police dog... even though I am a robot.", cs: "Povíš mi, čím bys chtěl být, až vyrosteš? Já chci být policejní pes... i když jsem robot.", fr: "Tu me dis ce que tu voudrais être quand tu seras grand ? Moi, je veux être chien policier... même si je suis un robot." },
      { es: "Un buen detective escucha más que habla. Por eso yo tengo las antenas tan grandes.", ca: "Un bon detectiu escolta més que no parla. Per això jo tinc les antenes tan grans.", en: "A good detective listens more than they talk. That is why my antennas are so big.", cs: "Dobrý detektiv víc poslouchá, než mluví. Proto mám tak velké antény.", fr: "Un bon détective écoute plus qu'il ne parle. C'est pour ça que j'ai de si grandes antennes." }
    ]
  },

  /* ---------- FAMOSOS ---------- */
  famous: [
    { emoji: "🕵️", year: "1811", color: "#5d4037", name: { es: "Eugène-François Vidocq", ca: "Eugène-François Vidocq", en: "Eugène-François Vidocq", cs: "Eugène-François Vidocq", fr: "Eugène-François Vidocq" },
      achievement: { es: "Fundó la Sûreté de París en 1811: uno de los primeros equipos de detectives del mundo.", ca: "Va fundar la Sûreté de París el 1811: un dels primers equips de detectius del món.", en: "He founded the Paris Sûreté in 1811: one of the first detective teams in the world.", cs: "V roce 1811 založil pařížskou Sûreté: jeden z prvních detektivních týmů na světě.", fr: "Il a fondé la Sûreté de Paris en 1811 : l'une des premières équipes de détectives du monde." },
      quote: { es: "Para resolver un misterio hay que mirar donde nadie mira.", ca: "Per resoldre un misteri cal mirar on ningú no mira.", en: "To solve a mystery, look where nobody else is looking.", cs: "Chceš vyřešit záhadu? Dívej se tam, kam se nedívá nikdo.", fr: "Pour résoudre un mystère, il faut regarder là où personne ne regarde." } },
    { emoji: "🔍", year: "1856", color: "#7b1fa2", name: { es: "Kate Warne", ca: "Kate Warne", en: "Kate Warne", cs: "Kate Warneová", fr: "Kate Warne" },
      achievement: { es: "La primera mujer detective: empezó en la agencia Pinkerton en 1856.", ca: "La primera dona detectiu: va començar a l'agència Pinkerton el 1856.", en: "The first woman detective: she joined the Pinkerton agency in 1856.", cs: "První žena detektiv: v agentuře Pinkerton začala v roce 1856.", fr: "La première femme détective : elle a commencé à l'agence Pinkerton en 1856." },
      quote: { es: "Una buena detective se fija en los detalles pequeñitos.", ca: "Una bona detectiu es fixa en els detalls petitons.", en: "A good detective notices the tiniest details.", cs: "Dobrá detektivka si všímá i těch nejmenších detailů.", fr: "Une bonne détective remarque les tout petits détails." } },
    { emoji: "⭐", year: "1891", color: "#1565c0", name: { es: "Marie Owens", ca: "Marie Owens", en: "Marie Owens", cs: "Marie Owensová", fr: "Marie Owens" },
      achievement: { es: "Agente en Chicago desde 1891, una de las primeras mujeres policía de Estados Unidos. Cuidaba de que los niños pudieran ir a la escuela.", ca: "Agent a Chicago des del 1891, una de les primeres dones policia dels Estats Units. Vetllava perquè els nens poguessin anar a l'escola.", en: "An officer in Chicago from 1891, one of the first policewomen in the United States. She made sure children could go to school.", cs: "Policistka v Chicagu od roku 1891, jedna z prvních policistek ve Spojených státech. Dohlížela na to, aby děti mohly chodit do školy.", fr: "Agente à Chicago dès 1891, l'une des premières femmes policières des États-Unis. Elle veillait à ce que les enfants puissent aller à l'école." },
      quote: { es: "Cuidar de los niños es el trabajo más importante.", ca: "Tenir cura dels nens és la feina més important.", en: "Looking after children is the most important job.", cs: "Starat se o děti je ta nejdůležitější práce.", fr: "Prendre soin des enfants est le travail le plus important." } },
    { emoji: "🔬", year: "1905", color: "#2e7d32", name: { es: "August Vollmer", ca: "August Vollmer", en: "August Vollmer", cs: "August Vollmer", fr: "August Vollmer" },
      achievement: { es: "El padre de la policía científica: desde 1905 llenó las comisarías de ciencia, bicicletas y radios.", ca: "El pare de la policia científica: des del 1905 va omplir les comissaries de ciència, bicicletes i ràdios.", en: "The father of scientific policing: from 1905 he filled police stations with science, bicycles and radios.", cs: "Otec vědecké policie: od roku 1905 plnil policejní stanice vědou, koly a vysílačkami.", fr: "Le père de la police scientifique : dès 1905, il a rempli les commissariats de science, de vélos et de radios." },
      quote: { es: "Un buen policía nunca deja de aprender.", ca: "Un bon policia mai no deixa d'aprendre.", en: "A good police officer never stops learning.", cs: "Dobrý policista se nikdy nepřestává učit.", fr: "Un bon policier n'arrête jamais d'apprendre." } },
    { emoji: "👮‍♀️", year: "1910", color: "#00838f", name: { es: "Alice Stebbins Wells", ca: "Alice Stebbins Wells", en: "Alice Stebbins Wells", cs: "Alice Stebbins Wellsová", fr: "Alice Stebbins Wells" },
      achievement: { es: "Una de las primeras mujeres policía con placa, en Los Ángeles en 1910. Abrió la puerta a muchísimas más.", ca: "Una de les primeres dones policia amb placa, a Los Angeles el 1910. Va obrir la porta a moltíssimes més.", en: "One of the first policewomen with a badge, in Los Angeles in 1910. She opened the door for many, many more.", cs: "Jedna z prvních policistek s odznakem, v Los Angeles v roce 1910. Otevřela dveře mnoha a mnoha dalším.", fr: "L'une des premières femmes policières avec un insigne, à Los Angeles en 1910. Elle a ouvert la porte à beaucoup d'autres." },
      quote: { es: "Si una puerta está cerrada, ábrela con una sonrisa.", ca: "Si una porta està tancada, obre-la amb un somriure.", en: "If a door is closed, open it with a smile.", cs: "Když jsou dveře zavřené, otevři je s úsměvem.", fr: "Si une porte est fermée, ouvre-la avec un sourire." } }
  ],

  childDream: {
    girl: { es: "La agente que ayuda a todo el mundo", ca: "L'agent que ajuda tothom", en: "The officer who helps everyone", cs: "Policistka, která pomáhá všem", fr: "L'agente qui aide tout le monde" },
    boy: { es: "El agente que ayuda a todo el mundo", ca: "L'agent que ajuda tothom", en: "The officer who helps everyone", cs: "Policista, který pomáhá všem", fr: "L'agent qui aide tout le monde" },
    kid: { es: "Peque agente que ayuda a todo el mundo", ca: "Agent que ajuda tothom", en: "Officer who helps everyone", cs: "Pomocník všech", fr: "Aide tout le monde" }
  },
  childQuote: { es: "Cuando sea mayor ayudaré a quien se pierda. ¡Y mi perro policía me ayudará a mí!", ca: "Quan sigui gran ajudaré qui es perdi. I el meu gos policia m'ajudarà a mi!", en: "When I grow up I will help anyone who gets lost. And my police dog will help me!", cs: "Až vyrostu, pomůžu každému, kdo se ztratí. A můj policejní pes pomůže mně!", fr: "Quand je serai grand, j'aiderai ceux qui se perdent. Et mon chien policier m'aidera, moi !" },

  /* ---------- MATES ---------- */
  mathEmojis: ["🚓", "🚦", "🐕", "🔍", "⭐", "🚁"],

  /* ---------- CONSTRUCTOR: el coche patrulla ---------- */
  builder: {
    horizontal: true,
    title: { es: "¡Monta tu coche patrulla!", ca: "Munta el teu cotxe patrulla!", en: "Build your patrol car!", cs: "Postav si hlídkové auto!", fr: "Monte ta voiture de patrouille !" },
    thing: { es: "coche patrulla", ca: "cotxe patrulla", en: "patrol car", cs: "hlídkové auto", fr: "voiture de patrouille" },
    parts: [
      { id: "body", label: { es: "Color del coche", ca: "Color del cotxe", en: "Car colour", cs: "Barva auta", fr: "Couleur de la voiture" },
        options: [{ id: "azul", v: "#1e88e5" }, { id: "verde", v: "#26a69a" }, { id: "lila", v: "#7e57c2" }, { id: "blanco", v: "#eceff1" }] },
      { id: "luces", label: { es: "Las luces del techo", ca: "Els llums del sostre", en: "The roof lights", cs: "Světla na střeše", fr: "Les lumières du toit" },
        options: [{ id: "barra", v: "barra", icon: "🚨" }, { id: "bolas", v: "bolas", icon: "🔵" }, { id: "estrella", v: "estrella", icon: "⭐" }] },
      { id: "escudo", label: { es: "El escudo de la puerta", ca: "L'escut de la porta", en: "The door badge", cs: "Znak na dveřích", fr: "L'écusson de la portière" },
        options: [{ id: "estrella", v: "estrella", icon: "⭐" }, { id: "corazon", v: "corazon", icon: "💗" }, { id: "pata", v: "pata", icon: "🐾" }] },
      { id: "ruedas", label: { es: "Las ruedas", ca: "Les rodes", en: "The wheels", cs: "Kola", fr: "Les roues" },
        options: [{ id: "normales", v: "normales", icon: "⚫" }, { id: "grandes", v: "grandes", icon: "🛞" }, { id: "estrella", v: "estrella", icon: "✨" }] }
    ],
    svg(sel) {
      const body = sel.body || "#1e88e5";
      const wr = sel.ruedas === "grandes" ? 15 : 12;
      const hub = (cx) => sel.ruedas === "estrella"
        ? `<path d="M${cx} 82 L${cx + 1.8} 86 L${cx + 6} 86.6 L${cx + 3} 89.6 L${cx + 3.8} 94 L${cx} 91.8 L${cx - 3.8} 94 L${cx - 3} 89.6 L${cx - 6} 86.6 L${cx - 1.8} 86 Z" fill="#ffd54f"/>`
        : `<circle cx="${cx}" cy="88" r="5" fill="#90a4ae"/>`;
      let luces = "";
      if (sel.luces === "bolas") {
        luces = `<circle cx="78" cy="22" r="6" fill="#42a5f5"><animate attributeName="opacity" values="1;.2;1" dur=".8s" repeatCount="indefinite"/></circle>
          <circle cx="94" cy="22" r="6" fill="#ef5350"><animate attributeName="opacity" values=".2;1;.2" dur=".8s" repeatCount="indefinite"/></circle>`;
      } else if (sel.luces === "estrella") {
        luces = `<path d="M86 12 L88.4 18 L95 18.4 L90 22.6 L91.6 29 L86 25.4 L80.4 29 L82 22.6 L77 18.4 L83.6 18 Z" fill="#ffd54f"><animate attributeName="opacity" values="1;.45;1" dur=".9s" repeatCount="indefinite"/></path>`;
      } else {
        luces = `<rect x="72" y="16" width="28" height="10" rx="3" fill="#546e7a"/>
          <rect x="74" y="18" width="12" height="6" rx="2" fill="#42a5f5"><animate attributeName="opacity" values="1;.2;1" dur=".8s" repeatCount="indefinite"/></rect>
          <rect x="87" y="18" width="11" height="6" rx="2" fill="#ef5350"><animate attributeName="opacity" values=".2;1;.2" dur=".8s" repeatCount="indefinite"/></rect>`;
      }
      let escudo = `<path d="M64 57 L65.6 61 L70 61.4 L66.6 64.2 L67.8 68.4 L64 66 L60.2 68.4 L61.4 64.2 L58 61.4 L62.4 61 Z" fill="#ffd54f"/>`;
      if (sel.escudo === "corazon") escudo = `<path d="M64 60 C61 56 56 59 59 63 L64 68 L69 63 C72 59 67 56 64 60 Z" fill="#f48fb1"/>`;
      if (sel.escudo === "pata") escudo = `<ellipse cx="64" cy="65" rx="3.4" ry="2.8" fill="#5d4037"/><circle cx="60" cy="61" r="1.7" fill="#5d4037"/><circle cx="64" cy="60" r="1.7" fill="#5d4037"/><circle cx="68" cy="61" r="1.7" fill="#5d4037"/>`;
      return `<svg viewBox="0 0 170 110" width="280" height="181">
        <rect x="18" y="50" width="134" height="30" rx="9" fill="${body}" stroke="#fff" stroke-width="1.6"/>
        <path d="M45 52 L58 28 L118 28 L132 52 Z" fill="${body}" stroke="#fff" stroke-width="1.6"/>
        <rect x="62" y="32" width="22" height="18" rx="3" fill="#b3e5fc"/>
        <path d="M90 32 L114 32 L124 50 L90 50 Z" fill="#b3e5fc"/>
        <rect x="18" y="70" width="134" height="9" fill="#fff" opacity=".9"/>
        ${[22, 39, 56, 73, 90, 107, 124, 141].map((x, i) => `<rect x="${x}" y="70" width="8" height="9" fill="${i % 2 ? "#ffd54f" : "#42a5f5"}"/>`).join("")}
        <circle cx="64" cy="63" r="9" fill="#fff"/>
        ${escudo}
        <circle cx="148" cy="58" r="4" fill="#fff9c4"/>
        <circle cx="22" cy="58" r="3.4" fill="#ef9a9a"/>
        <rect x="14" y="78" width="142" height="6" rx="3" fill="#78909c"/>
        <circle cx="48" cy="88" r="${wr}" fill="#263238"/>${hub(48)}
        <circle cx="124" cy="88" r="${wr}" fill="#263238"/>${hub(124)}
        <path d="M104 22 L104 14 M104 14 L110 11" stroke="#546e7a" stroke-width="2.4" fill="none" stroke-linecap="round"/>
        ${luces}
      </svg>`;
    }
  }
});
