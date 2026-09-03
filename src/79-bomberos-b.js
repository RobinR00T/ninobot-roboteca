"use strict";
/* ============================================================
   Contenido de BOMBEROS (parte B): historias ramificadas,
   canciones, traductor, mapa del parque y la ciudad, mates,
   constructor del camión, famosos y charla.
   ============================================================ */

Object.assign(THEMES.bomberos.content, {

  /* ---------- HISTORIAS (ramifican de verdad) ---------- */
  stories: [
    {
      id: "gatito", emoji: "🐱", start: "n1",
      title: { es: "El gatito del árbol", ca: "El gatet de l'arbre", en: "The Kitten in the Tree", cs: "Koťátko na stromě", fr: "Le chaton dans l'arbre" },
      nodes: {
        n1: {
          text: { es: "¡Ring, ring! Llaman al parque de bomberos: el gatito Copito ha subido al árbol más alto de la plaza y no sabe bajar. Su dueña está preocupada. ¿Cómo vamos, {name}?", ca: "Ring, ring! Truquen al parc de bombers: el gatet Cotonet ha pujat a l'arbre més alt de la plaça i no sap baixar. La seva mestressa està preocupada. Com hi anem, {name}?", en: "Ring, ring! The fire station gets a call: Snowy the kitten has climbed the tallest tree in the square and cannot get down. His owner is worried. How shall we go, {name}?", cs: "Crrr, crrr! Na stanici zvoní telefon: koťátko Vločka vylezlo na nejvyšší strom na náměstí a neumí dolů. Jeho panička má starost. Jak tam pojedeme, {name}?", fr: "Dring, dring ! On appelle la caserne : le chaton Flocon est monté sur le plus grand arbre de la place et ne sait plus descendre. Sa maîtresse s'inquiète. Comment y va-t-on, {name} ?" },
          choices: [
            { t: { es: "¡Con el camión de la gran escalera!", ca: "Amb el camió de la gran escala!", en: "With the big ladder truck!", cs: "Velkým autem se žebříkem!", fr: "Avec le camion à grande échelle !" }, go: "n2a" },
            { t: { es: "Andando, está cerquita, con la escalera pequeña", ca: "Caminant, és a prop, amb l'escala petita", en: "On foot, it is close by, with the small ladder", cs: "Pěšky, je to kousek, s malým žebříkem", fr: "À pied, c'est tout près, avec la petite échelle" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "Nino-nino un segundito, solo para pedir paso, y el camión llega a la plaza. Copito está en una rama alta, con el rabito tembloroso. Os mira con ojos enormes.", ca: "Nino-nino un segonet, només per demanar pas, i el camió arriba a la plaça. Cotonet és en una branca alta, amb la cueta tremolosa. Us mira amb ulls enormes.", en: "Nee-naw for just a second, only to ask for way, and the truck reaches the square. Snowy sits on a high branch, his little tail trembling. He looks at you with huge eyes.", cs: "Jen na vteřinku hú-há, aby auta uhnula, a už jste na náměstí. Vločka sedí na vysoké větvi a ocásek se jí třese. Kouká na vás obrovskýma očima.", fr: "Pin-pon une petite seconde, juste pour demander le passage, et le camion arrive sur la place. Flocon est sur une branche haute, la queue toute tremblante. Il vous regarde avec des yeux énormes." },
          choices: [
            { t: { es: "Subimos por la escalera muy despacito", ca: "Pugem per l'escala molt a poc a poc", en: "We climb the ladder very slowly", cs: "Polezeme po žebříku pomaloučku", fr: "On monte à l'échelle tout doucement" }, go: "n3a" },
            { t: { es: "Probamos el truco de la lata de atún", ca: "Provem el truc de la llauna de tonyina", en: "We try the tuna tin trick", cs: "Zkusíme trik s plechovkou tuňáka", fr: "On essaie le truc de la boîte de thon" }, go: "n3b" }
          ]
        },
        n2b: {
          text: { es: "Vais andando y el dálmata Chispa se apunta al paseo. Pero al llegar... la escalera pequeña solo llega a la mitad del árbol. Copito sigue arriba, maullando bajito.", ca: "Aneu caminant i el dàlmata Guspira s'apunta al passeig. Però en arribar... l'escala petita només arriba a la meitat de l'arbre. Cotonet segueix a dalt, miolant fluixet.", en: "You walk over and Sparky the dalmatian joins the stroll. But when you arrive... the small ladder only reaches halfway up the tree. Snowy is still at the top, meowing softly.", cs: "Jdete pěšky a dalmatin Jiskra se přidá na procházku. Jenže na místě... malý žebřík dosáhne jen do půlky stromu. Vločka je pořád nahoře a tichounce mňouká.", fr: "Vous y allez à pied et Étincelle le dalmatien se joint à la promenade. Mais en arrivant... la petite échelle n'atteint que la moitié de l'arbre. Flocon est toujours en haut et miaule tout bas." },
          choices: [
            { t: { es: "Pedimos el camión grande por el walkie-talkie", ca: "Demanem el camió gran pel walkie-talkie", en: "We call the big truck on the walkie-talkie", cs: "Zavoláme vysílačkou pro velké auto", fr: "On appelle le grand camion au walkie-talkie" }, go: "n2a" },
            { t: { es: "Probamos el truco de la lata de atún", ca: "Provem el truc de la llauna de tonyina", en: "We try the tuna tin trick", cs: "Zkusíme trik s plechovkou tuňáka", fr: "On essaie le truc de la boîte de thon" }, go: "n3b" }
          ]
        },
        n3a: {
          text: { es: "Peldaño a peldaño, sin prisa, hablándole suave: hola, Copito, ya casi estamos. El gatito deja de temblar un poquito. Está a un brazo de distancia. ¿Y ahora?", ca: "Esglaó a esglaó, sense pressa, parlant-li suau: hola, Cotonet, ja gairebé hi som. El gatet deixa de tremolar una miqueta. És a un braç de distància. I ara?", en: "Rung by rung, no hurry, talking softly: hello, Snowy, we are almost there. The kitten trembles a little less. He is one arm away. And now?", cs: "Příčku po příčce, beze spěchu, a mluvíte tiše: ahoj, Vločko, už tam skoro jsme. Koťátko se přestává tolik třást. Je na dosah ruky. A teď?", fr: "Barreau après barreau, sans hâte, en lui parlant doucement : bonjour, Flocon, on y est presque. Le chaton tremble un peu moins. Il est à un bras de distance. Et maintenant ?" },
          choices: [
            { t: { es: "Ofrecemos la mano quieta y esperamos", ca: "Oferim la mà quieta i esperem", en: "We offer a still hand and wait", cs: "Nabídneme klidnou ruku a počkáme", fr: "On tend une main immobile et on attend" }, go: "e1" },
            { t: { es: "Le cantamos bajito la canción del parque", ca: "Li cantem fluixet la cançó del parc", en: "We softly sing him the station song", cs: "Tichounce mu zazpíváme hasičskou písničku", fr: "On lui chante tout bas la chanson de la caserne" }, go: "e3" }
          ]
        },
        n3b: {
          text: { es: "La dueña trae una lata de atún y la abrís al pie del árbol. Ñam, qué olorcito. Las orejas de Copito se giran como antenas. Da un pasito hacia abajo... ¡y otro!", ca: "La mestressa porta una llauna de tonyina i l'obriu al peu de l'arbre. Nyam, quina oloreta. Les orelles de Cotonet giren com antenes. Fa un passet cap avall... i un altre!", en: "The owner brings a tuna tin and you open it at the foot of the tree. Yum, what a smell. Snowy's ears turn like antennas. He takes one little step down... and another!", cs: "Panička přinese plechovku tuňáka a vy ji otevřete pod stromem. Mňam, to je vůně. Vločce se uši otočí jako antény. Udělá krůček dolů... a další!", fr: "La maîtresse apporte une boîte de thon et vous l'ouvrez au pied de l'arbre. Miam, quelle bonne odeur. Les oreilles de Flocon tournent comme des antennes. Il fait un petit pas vers le bas... et un autre !" },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e2" }
          ]
        },
        e1: {
          end: true,
          text: { es: "Copito huele tu guante, se sube a tu brazo y baja contigo agarradito. Abajo ronronea dentro de tu casco como un motorcito feliz. Lo has hecho genial, {name}: la paciencia rescata mejor que las prisas.", ca: "Cotonet olora el teu guant, s'enfila al teu braç i baixa amb tu ben agafat. A baix ronca dins del teu casc com un motoret feliç. Ho has fet genial, {name}: la paciència rescata millor que les presses.", en: "Snowy sniffs your glove, climbs onto your arm and rides down holding tight. On the ground he purrs inside your helmet like a happy little engine. You did great, {name}: patience rescues better than hurry.", cs: "Vločka očichá tvou rukavici, vyleze ti na ruku a pevně se drží celou cestu dolů. Dole ti přede v helmě jako spokojený motorek. Zvládla jsi to skvěle, {name}: trpělivost zachraňuje líp než spěch.", fr: "Flocon renifle ton gant, grimpe sur ton bras et descend avec toi bien accroché. En bas, il ronronne dans ton casque comme un petit moteur heureux. Tu as été génial, {name} : la patience sauve mieux que la hâte." }
        },
        e2: {
          end: true,
          text: { es: "Rama a rama, Copito baja él solito hasta la lata y come feliz. La plaza entera aplaude, y Chispa mueve el rabo. A veces la mejor ayuda es dar confianza, {name}. ¡Rescate completado sin un solo susto!", ca: "Branca a branca, Cotonet baixa tot solet fins a la llauna i menja feliç. La plaça sencera aplaudeix, i Guspira mou la cua. A vegades la millor ajuda és donar confiança, {name}. Rescat completat sense cap ensurt!", en: "Branch by branch, Snowy climbs down all by himself to the tin and eats happily. The whole square claps, and Sparky wags his tail. Sometimes the best help is giving confidence, {name}. Rescue complete without a single scare!", cs: "Větev po větvi sleze Vločka úplně sama až k plechovce a spokojeně papá. Celé náměstí tleská a Jiskra vrtí ocasem. Někdy je nejlepší pomoc dodat odvahu, {name}. Záchrana hotová bez jediného leknutí!", fr: "Branche après branche, Flocon descend tout seul jusqu'à la boîte et mange, tout content. Toute la place applaudit, et Étincelle remue la queue. Parfois, la meilleure aide, c'est donner confiance, {name}. Sauvetage réussi sans la moindre frayeur !" }
        },
        e3: {
          end: true,
          text: { es: "Cantas bajito y la canción funciona como una escalera invisible: Copito se relaja, camina por la rama y se acurruca en tu hombro. Bajáis juntos, despacito, mientras la plaza tararea contigo. La voz suave también rescata, {name}.", ca: "Cantes fluixet i la cançó funciona com una escala invisible: Cotonet es relaxa, camina per la branca i s'arrauleix a la teva espatlla. Baixeu junts, a poc a poc, mentre la plaça taral·leja amb tu. La veu suau també rescata, {name}.", en: "You sing softly and the song works like an invisible ladder: Snowy relaxes, walks along the branch and curls up on your shoulder. You climb down together, slowly, while the square hums along. A gentle voice rescues too, {name}.", cs: "Zpíváš tiše a písnička funguje jako neviditelný žebřík: Vločka se uklidní, přejde po větvi a stočí se ti na rameni. Slézáte spolu, pomaloučku, a celé náměstí si brouká s vámi. I jemný hlas umí zachraňovat, {name}.", fr: "Tu chantes tout bas et la chanson agit comme une échelle invisible : Flocon se détend, marche sur la branche et se blottit sur ton épaule. Vous descendez ensemble, doucement, pendant que la place fredonne avec toi. Une voix douce aussi peut sauver, {name}." }
        }
      }
    },
    {
      id: "globo", emoji: "🎈", start: "n1",
      title: { es: "El globo del tejado", ca: "El globus de la teulada", en: "The Balloon on the Roof", cs: "Balonek na střeše", fr: "Le ballon sur le toit" },
      nodes: {
        n1: {
          text: { es: "En el parque, un niño llamado Teo llora: su globo rojo se ha escapado volando y se ha enganchado en el tejado de la panadería. Dentro lleva un dibujo para su abuela. ¿Qué hacemos primero, {name}?", ca: "Al parc, un nen que es diu Teo plora: el seu globus vermell s'ha escapat volant i s'ha enganxat a la teulada del forn. A dins hi porta un dibuix per a la seva àvia. Què fem primer, {name}?", en: "At the park, a boy called Teo is crying: his red balloon flew away and got caught on the bakery roof. It carries a drawing for his granny. What do we do first, {name}?", cs: "V parku pláče chlapec jménem Teo: jeho červený balonek uletěl a zachytil se na střeše pekárny. Je na něm obrázek pro babičku. Co uděláme nejdřív, {name}?", fr: "Au parc, un garçon nommé Teo pleure : son ballon rouge s'est envolé et s'est accroché au toit de la boulangerie. Il porte un dessin pour sa mamie. Que fait-on d'abord, {name} ?" },
          choices: [
            { t: { es: "¡Al camión, con la escalera!", ca: "Al camió, amb l'escala!", en: "To the truck, with the ladder!", cs: "K autu, se žebříkem!", fr: "Au camion, avec l'échelle !" }, go: "n2" },
            { t: { es: "Primero consolamos a Teo y escuchamos", ca: "Primer consolem en Teo i escoltem", en: "First we comfort Teo and listen", cs: "Nejdřív Tea utěšíme a vyslechneme", fr: "D'abord on console Teo et on écoute" }, go: "n1b" }
          ]
        },
        n1b: {
          text: { es: "Te agachas a su lado: tranquilo, Teo, los bomberos también rescatamos globos. Él sonríe entre lágrimas y os cuenta que el globo tiene una cuerdita larga. ¡Ese dato ayuda mucho!", ca: "T'ajups al seu costat: tranquil, Teo, els bombers també rescatem globus. Ell somriu entre llàgrimes i us explica que el globus té una cordeta llarga. Aquesta dada ajuda molt!", en: "You crouch next to him: easy, Teo, firefighters rescue balloons too. He smiles through his tears and tells you the balloon has a long little string. That detail helps a lot!", cs: "Sedneš si k němu: klid, Teo, hasiči zachraňují i balonky. On se skrz slzy usměje a poví vám, že balonek má dlouhou šňůrku. To se moc hodí!", fr: "Tu t'accroupis à côté de lui : ne t'en fais pas, Teo, les pompiers sauvent aussi les ballons. Il sourit à travers ses larmes et vous dit que le ballon a une longue ficelle. Ce détail aide beaucoup !" },
          choices: [
            { t: { es: "¡Ahora sí, al camión!", ca: "Ara sí, al camió!", en: "Now yes, to the truck!", cs: "A teď k autu!", fr: "Maintenant oui, au camion !" }, go: "n2" }
          ]
        },
        n2: {
          text: { es: "La escalera del camión sube despacio hasta el tejado. Allí está el globo, enredado en la veleta con forma de gallo. El viento sopla un poquito. ¿Cómo lo rescatamos?", ca: "L'escala del camió puja a poc a poc fins a la teulada. Allà hi ha el globus, enredat al penell amb forma de gall. El vent bufa una miqueta. Com el rescatem?", en: "The truck's ladder rises slowly to the roof. There is the balloon, tangled on the rooster-shaped weather vane. The wind blows a little. How do we rescue it?", cs: "Žebřík z auta pomalu stoupá ke střeše. Balonek je zamotaný do korouhvičky ve tvaru kohouta. Trochu fouká vítr. Jak ho zachráníme?", fr: "L'échelle du camion monte lentement jusqu'au toit. Voilà le ballon, emmêlé dans la girouette en forme de coq. Le vent souffle un petit peu. Comment le sauve-t-on ?" },
          choices: [
            { t: { es: "Lo desenredamos con los guantes, con mucho mimo", ca: "El desenredem amb els guants, amb molta cura", en: "We untangle it with our gloves, very gently", cs: "Opatrně ho rukavicemi rozmotáme", fr: "On le démêle avec les gants, tout en douceur" }, go: "e1" },
            { t: { es: "Usamos el ventilador del camión para soplar suavecito", ca: "Fem servir el ventilador del camió per bufar suau", en: "We use the truck fan to blow very softly", cs: "Pustíme ventilátor z auta a jemně zafoukáme", fr: "On utilise le ventilateur du camion pour souffler doucement" }, go: "e2" }
          ]
        },
        e1: {
          end: true,
          text: { es: "Con los guantes puestos, deshaces el nudo de la cuerdita sin pinchar el globo. Bajas con él y Teo te abraza: ¡el dibujo de la abuela está a salvo! Las manos de bombero también saben ser delicadas, {name}.", ca: "Amb els guants posats, desfàs el nus de la cordeta sense punxar el globus. Baixes amb ell i en Teo t'abraça: el dibuix de l'àvia està fora de perill! Les mans de bomber també saben ser delicades, {name}.", en: "With your gloves on, you undo the knot in the string without popping the balloon. You bring it down and Teo hugs you: granny's drawing is safe! Firefighter hands know how to be gentle too, {name}.", cs: "V rukavicích rozvážeš uzlík na šňůrce, aniž bys balonek propíchla. Sneseš ho dolů a Teo tě obejme: babiččin obrázek je v bezpečí! I hasičské ruce umí být jemné, {name}.", fr: "Avec tes gants, tu défais le nœud de la ficelle sans crever le ballon. Tu redescends avec lui et Teo te serre dans ses bras : le dessin pour mamie est sauvé ! Les mains de pompier savent aussi être délicates, {name}." }
        },
        e2: {
          end: true,
          text: { es: "Enciendes el ventilador en modo brisa. Fffuuu... el globo se despega de la veleta, flota por el aire y baja planeando justo a las manos de Teo. ¡La plaza entera dice oooh! Pensar diferente también es rescatar, {name}.", ca: "Engegues el ventilador en mode brisa. Fffuuu... el globus es desenganxa del penell, flota per l'aire i baixa planant just a les mans d'en Teo. La plaça sencera diu oooh! Pensar diferent també és rescatar, {name}.", en: "You switch the fan to breeze mode. Whoosh... the balloon lifts off the vane, floats through the air and glides right down into Teo's hands. The whole square goes oooh! Thinking differently is rescuing too, {name}.", cs: "Zapneš ventilátor na jemný vánek. Fúúú... balonek se uvolní z korouhvičky, vznáší se vzduchem a snese se přímo Teovi do dlaní. Celé náměstí vydechne óóó! I jiný nápad umí zachraňovat, {name}.", fr: "Tu mets le ventilateur en mode brise. Fffuuu... le ballon se décroche de la girouette, flotte dans l'air et redescend en planant droit dans les mains de Teo. Toute la place fait oooh ! Penser autrement, c'est aussi sauver, {name}." }
        }
      }
    },
    {
      id: "simulacro", emoji: "🏫", start: "n1",
      title: { es: "El simulacro sorpresa", ca: "El simulacre sorpresa", en: "The Surprise Drill", cs: "Cvičný poplach", fr: "L'exercice surprise" },
      nodes: {
        n1: {
          text: { es: "Estás en el cole con tu clase y de repente suena la alarma: riiing, riiing. La maestra sonríe: tranquilos, es un simulacro, ¡hoy practicamos cómo salir! ¿Qué hacemos primero, {name}?", ca: "Ets a l'escola amb la teva classe i de sobte sona l'alarma: riiing, riiing. La mestra somriu: tranquils, és un simulacre, avui practiquem com sortir! Què fem primer, {name}?", en: "You are at school with your class and suddenly the alarm rings: riiing, riiing. The teacher smiles: easy, it is a drill, today we practise going out! What do we do first, {name}?", cs: "Jsi ve škole se svou třídou a najednou zazní poplach: crrr, crrr. Paní učitelka se usměje: klid, je to jen cvičení, dnes trénujeme, jak odejít! Co uděláme nejdřív, {name}?", fr: "Tu es à l'école avec ta classe et soudain l'alarme sonne : driiing, driiing. La maîtresse sourit : du calme, c'est un exercice, aujourd'hui on s'entraîne à sortir ! Que fait-on d'abord, {name} ?" },
          choices: [
            { t: { es: "Nos ponemos en fila sin correr", ca: "Ens posem en fila sense córrer", en: "We line up without running", cs: "Postavíme se do řady bez běhání", fr: "On se met en rang sans courir" }, go: "n2" },
            { t: { es: "¡Un momento, recojo mis juguetes!", ca: "Un moment, recullo les meves joguines!", en: "One moment, I will grab my toys!", cs: "Momentík, seberu si hračky!", fr: "Une minute, je ramasse mes jouets !" }, go: "n1b" }
          ]
        },
        n1b: {
          text: { es: "La maestra te lo explica con cariño: en un simulacro las cosas se quedan, las personas salen. Los juguetes te esperarán aquí sentaditos. Tú eres lo importante.", ca: "La mestra t'ho explica amb afecte: en un simulacre les coses es queden, les persones surten. Les joguines t'esperaran aquí assegudetes. Tu ets l'important.", en: "The teacher explains kindly: in a drill, things stay and people go. Your toys will wait right here, sitting quietly. You are what matters.", cs: "Paní učitelka ti to laskavě vysvětlí: při poplachu věci zůstávají, lidé odcházejí. Hračky tu na tebe počkají pěkně na místě. Důležitý jsi ty.", fr: "La maîtresse t'explique gentiment : pendant un exercice, les choses restent et les personnes sortent. Tes jouets t'attendront ici bien sagement. C'est toi qui comptes." },
          choices: [
            { t: { es: "¡Vale! A la fila sin correr", ca: "D'acord! A la fila sense córrer", en: "Okay! To the line, no running", cs: "Dobře! Do řady bez běhání", fr: "D'accord ! En rang, sans courir" }, go: "n2" }
          ]
        },
        n2: {
          text: { es: "La fila avanza tranquila por el pasillo hacia el patio. A tu lado, tu amigo Leo va un poco asustado: le tiembla el labio. ¿Qué haces?", ca: "La fila avança tranquil·la pel passadís cap al pati. Al teu costat, el teu amic Leo va una mica espantat: li tremola el llavi. Què fas?", en: "The line moves calmly down the corridor to the playground. Next to you, your friend Leo looks a bit scared: his lip is trembling. What do you do?", cs: "Řada jde klidně chodbou na hřiště. Vedle tebe jde kamarád Leo a je trochu vystrašený: třese se mu ret. Co uděláš?", fr: "Le rang avance calmement dans le couloir vers la cour. À côté de toi, ton ami Leo a un peu peur : sa lèvre tremble. Que fais-tu ?" },
          choices: [
            { t: { es: "Le doy la mano y contamos pasos juntos", ca: "Li dono la mà i comptem passes junts", en: "I hold his hand and we count steps together", cs: "Vezmu ho za ruku a počítáme kroky spolu", fr: "Je lui donne la main et on compte les pas ensemble" }, go: "n3" },
            { t: { es: "Aviso a la maestra para que le ayude", ca: "Aviso la mestra perquè l'ajudi", en: "I tell the teacher so she can help him", cs: "Řeknu to paní učitelce, ať mu pomůže", fr: "Je préviens la maîtresse pour qu'elle l'aide" }, go: "n3b" }
          ]
        },
        n3b: {
          text: { es: "La maestra le da la mano a Leo y te pide que guíes la fila hasta el punto de encuentro. ¡Misión importante! Caminas delante, serio y tranquilo como un bombero de verdad.", ca: "La mestra dona la mà a Leo i et demana que guiïs la fila fins al punt de trobada. Missió important! Camines al davant, seriós i tranquil com un bomber de debò.", en: "The teacher takes Leo's hand and asks you to lead the line to the meeting point. Important mission! You walk in front, calm and steady like a real firefighter.", cs: "Paní učitelka vezme Lea za ruku a poprosí tě, abys dovedl řadu na místo srazu. Důležitý úkol! Jdeš vepředu, klidně a jistě jako opravdový hasič.", fr: "La maîtresse prend la main de Leo et te demande de guider le rang jusqu'au point de rassemblement. Mission importante ! Tu marches devant, calme et sérieux comme un vrai pompier." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n3: {
          text: { es: "Uno, dos, uno, dos... contar pasos funciona: Leo respira mejor y hasta sonríe. Llegáis al patio de la mano, como dos campeones de la calma.", ca: "Un, dos, un, dos... comptar passes funciona: Leo respira millor i fins i tot somriu. Arribeu al pati de la mà, com dos campions de la calma.", en: "One, two, one, two... counting steps works: Leo breathes easier and even smiles. You reach the playground hand in hand, like two champions of calm.", cs: "Raz, dva, raz, dva... počítání kroků funguje: Leovi se dýchá líp a dokonce se usměje. Dojdete na hřiště ruku v ruce jako dva mistři klidu.", fr: "Un, deux, un, deux... compter les pas, ça marche : Leo respire mieux et sourit même. Vous arrivez dans la cour main dans la main, comme deux champions du calme." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n4: {
          text: { es: "En el punto de encuentro la maestra cuenta cabezas: ¡están todos! Y sorpresa: unos bomberos de verdad han venido a ver el simulacro y os felicitan. Os dejan elegir un premio. ¿Cuál eliges, {name}?", ca: "Al punt de trobada la mestra compta caps: hi són tots! I sorpresa: uns bombers de debò han vingut a veure el simulacre i us feliciten. Us deixen triar un premi. Quin tries, {name}?", en: "At the meeting point the teacher counts heads: everyone is there! And surprise: real firefighters came to watch the drill and congratulate you. They let you pick a treat. Which do you choose, {name}?", cs: "Na místě srazu paní učitelka počítá hlavy: jsou tam všichni! A překvapení: na cvičení se přišli podívat opravdoví hasiči a chválí vás. Můžete si vybrat odměnu. Kterou si vybereš, {name}?", fr: "Au point de rassemblement, la maîtresse compte les têtes : tout le monde est là ! Et surprise : de vrais pompiers sont venus voir l'exercice et vous félicitent. Ils vous laissent choisir une récompense. Laquelle choisis-tu, {name} ?" },
          choices: [
            { t: { es: "Ver cómo sale el agua de la manguera", ca: "Veure com surt l'aigua de la mànega", en: "See how water comes out of the hose", cs: "Vidět, jak stříká voda z hadice", fr: "Voir comment l'eau sort du tuyau" }, go: "e1" },
            { t: { es: "Probarme el casco de bombero", ca: "Emprovar-me el casc de bomber", en: "Try on the firefighter helmet", cs: "Vyzkoušet si hasičskou helmu", fr: "Essayer le casque de pompier" }, go: "e2" },
            { t: { es: "Escuchar la sirena un segundito", ca: "Escoltar la sirena un segonet", en: "Hear the siren for one little second", cs: "Slyšet sirénu na vteřinku", fr: "Écouter la sirène une petite seconde" }, go: "e3" }
          ]
        },
        e1: {
          end: true,
          text: { es: "La bombera abre la manguera en modo ducha suave y el agua dibuja un arcoíris sobre el patio. Todos aplaudís bajo las gotitas. Practicar hoy es estar tranquilo mañana, {name}: ¡simulacro perfecto!", ca: "La bombera obre la mànega en mode dutxa suau i l'aigua dibuixa un arc de Sant Martí sobre el pati. Tots aplaudiu sota les gotetes. Practicar avui és estar tranquil demà, {name}: simulacre perfecte!", en: "The firefighter opens the hose in soft shower mode and the water paints a rainbow over the playground. You all clap under the little drops. Practising today means staying calm tomorrow, {name}: perfect drill!", cs: "Hasička pustí hadici na jemnou sprchu a voda nad hřištěm namaluje duhu. Všichni tleskáte pod kapičkami. Kdo trénuje dnes, je zítra klidný, {name}: dokonalé cvičení!", fr: "La pompière ouvre le tuyau en mode douche douce et l'eau dessine un arc-en-ciel au-dessus de la cour. Vous applaudissez tous sous les gouttelettes. S'entraîner aujourd'hui, c'est être tranquille demain, {name} : exercice parfait !" }
        },
        e2: {
          end: true,
          text: { es: "El casco te queda tan grande que se te tapan los ojos, y toda la clase ríe contigo. El bombero lo ajusta y te nombra ayudante del simulacro. Hoy has cuidado de Leo y de tu clase, {name}: eso hace un bombero.", ca: "El casc et va tan gran que se't tapen els ulls, i tota la classe riu amb tu. El bomber l'ajusta i et nomena ajudant del simulacre. Avui has cuidat en Leo i la teva classe, {name}: això fa un bomber.", en: "The helmet is so big it covers your eyes, and the whole class laughs with you. The firefighter adjusts it and names you drill helper. Today you looked after Leo and your class, {name}: that is what a firefighter does.", cs: "Helma je ti tak velká, že ti zakryje oči, a celá třída se směje s tebou. Hasič ji upraví a jmenuje tě pomocníkem cvičení. Dnes ses postaral o Lea i o svou třídu, {name}: přesně to dělá hasič.", fr: "Le casque est si grand qu'il te cache les yeux, et toute la classe rit avec toi. Le pompier l'ajuste et te nomme assistant de l'exercice. Aujourd'hui, tu as pris soin de Leo et de ta classe, {name} : c'est ça, être pompier." }
        },
        e3: {
          end: true,
          text: { es: "Nino-nino, un segundito de sirena y todos os tapáis las orejas entre risas. El bombero explica: la sirena no asusta, pide paso para ir a ayudar. Desde hoy, cuando la oigas, sonreirás: alguien va de camino a ayudar, {name}.", ca: "Nino-nino, un segonet de sirena i tots us tapeu les orelles entre rialles. El bomber explica: la sirena no espanta, demana pas per anar a ajudar. Des d'avui, quan la sentis, somriuràs: algú va de camí a ajudar, {name}.", en: "Nee-naw, one little second of siren and you all cover your ears giggling. The firefighter explains: the siren does not scare, it asks for way to go and help. From today, when you hear it, you will smile: someone is on their way to help, {name}.", cs: "Hú-há, vteřinka sirény a všichni si se smíchem zacpáváte uši. Hasič vysvětluje: siréna nestraší, prosí o cestu, aby mohla přijet pomoc. Odteď se při ní usměješ: někdo právě jede pomáhat, {name}.", fr: "Pin-pon, une petite seconde de sirène et vous vous bouchez tous les oreilles en riant. Le pompier explique : la sirène ne fait pas peur, elle demande le passage pour aller aider. À partir d'aujourd'hui, quand tu l'entendras, tu souriras : quelqu'un est en route pour aider, {name}." }
        }
      }
    }
  ],

  /* ---------- KARAOKE ---------- */
  songs: [
    { emoji: "🚒",
      title: { es: "El camión de bomberos", ca: "El camió de bombers", en: "The Fire Truck Song", cs: "Hasičské auto", fr: "Le camion de pompiers" },
      lines: [
        { es: "Nino-nino, por la calle va,", ca: "Nino-nino, pel carrer va,", en: "Nee-naw, nee-naw, down the street it goes,", cs: "Hú-há, hú-há, ulicí si jede,", fr: "Pin-pon, pin-pon, dans la rue il va," },
        { es: "el camión rojo que viene a ayudar.", ca: "el camió vermell que ve a ajudar.", en: "the big red truck that helps and glows.", cs: "červené auto pomáhat všem dovede.", fr: "le camion rouge qui vient aider là." },
        { es: "Su escalera sube hasta el balcón,", ca: "La seva escala puja fins al balcó,", en: "Its ladder stretches to the sky,", cs: "Žebřík míří vzhůru nad domy,", fr: "Son échelle monte jusqu'au balcon," },
        { es: "y saluda al gato con el corazón.", ca: "i saluda el gat amb tot el cor.", en: "and waves at the kitten way up high.", cs: "a mává kočce, ta už se nebojí.", fr: "et salue le chat avec le cœur, pin-pon." },
        { es: "La manguera baila, chof, chof, chof,", ca: "La mànega balla, xof, xof, xof,", en: "The hose is dancing, splish, splash, splish,", cs: "Hadice tančí, žbluňk, žbluňk, žbluňk,", fr: "Le tuyau qui danse, plif, plaf, plof," },
        { es: "riega el aire y hace un arco de color.", ca: "rega l'aire i fa un arc de color.", en: "it paints a rainbow, what a wish!", cs: "a na nebi duhu maluje, žbluňk!", fr: "il peint dans l'air un arc-en-ciel d'étoffe." },
        { es: "Gracias, bomberos, ¡y hasta mañana!,", ca: "Gràcies, bombers, i fins demà!,", en: "Thank you, firefighters, see you soon,", cs: "Díky, hasiči, a zase zítra,", fr: "Merci, pompiers, et à demain !," },
        { es: "vuelvo al parque tocando la campana.", ca: "torno al parc tocant la campana.", en: "back to the station by the light of the moon.", cs: "zvonek cinká, píseň je bystrá.", fr: "je rentre à la caserne en chantant ce refrain." }
      ] },
    { emoji: "📞",
      title: { es: "Uno, uno, dos", ca: "U, u, dos", en: "One, One, Two", cs: "Jedna, jedna, dva", fr: "Un, un, deux" },
      lines: [
        { es: "Uno, uno, dos, ¡qué fácil es!,", ca: "U, u, dos, que fàcil és!,", en: "One, one, two, so easy to say,", cs: "Jedna, jedna, dva, to si pamatuj,", fr: "Un, un, deux, c'est facile, tu vois," },
        { es: "el número amigo que ayuda otra vez.", ca: "el número amic que ajuda un altre cop.", en: "the friendly number that helps every day.", cs: "kamarádské číslo, vždycky při tobě stůj.", fr: "le numéro ami qui aide chaque fois." },
        { es: "Si algo pasa y no sé qué hacer,", ca: "Si passa res i no sé què fer,", en: "If something happens and I feel small,", cs: "Když se něco stane a nevím kudy kam,", fr: "S'il arrive quelque chose et que je ne sais pas," },
        { es: "llamo tranquilo y cuento qué fue.", ca: "truco tranquil i explico què ha estat.", en: "I stay calm and I make the call.", cs: "zavolám v klidu, nejsem na to sám.", fr: "j'appelle bien calme et je raconte tout bas." },
        { es: "Digo mi nombre y mi dirección,", ca: "Dic el meu nom i la meva adreça,", en: "I say my name and where I am,", cs: "Řeknu své jméno a kde bydlím taky,", fr: "Je dis mon nom et mon adresse aussi," },
        { es: "y viene volando la solución.", ca: "i ve volant la solució, amb destresa.", en: "and help arrives, no fuss, no jam.", cs: "a pomoc přiletí rychle jak ptáci.", fr: "et la solution arrive par ici." },
        { es: "Uno, uno, dos, ya me lo sé,", ca: "U, u, dos, ja m'ho sé,", en: "One, one, two, I know it by heart,", cs: "Jedna, jedna, dva, už to znám,", fr: "Un, un, deux, je le sais par cœur," },
        { es: "¡de memoria siempre lo cantaré!", ca: "de memòria sempre el cantaré!", en: "knowing the number is being smart!", cs: "z hlavy to číslo vždycky zazpívám!", fr: "je le chanterai à toute heure !" }
      ] },
    { emoji: "🚁",
      title: { es: "El helicóptero del bosque", ca: "L'helicòpter del bosc", en: "The Forest Helicopter", cs: "Lesní vrtulník", fr: "L'hélicoptère de la forêt" },
      lines: [
        { es: "Vuela que vuela, el helicóptero,", ca: "Vola que vola, l'helicòpter,", en: "Fly, fly high, helicopter, fly,", cs: "Letí si, letí, vrtulník malý,", fr: "Vole, vole, l'hélicoptère," },
        { es: "con su cubo grande, ¡qué viajero!", ca: "amb el seu cubell gran, quin viatger!", en: "with your giant bucket across the sky.", cs: "s obřím vakem letí do dáli.", fr: "avec son grand seau, quel courrier !" },
        { es: "Bebe agüita de un lago azul,", ca: "Beu aigüeta d'un llac blavós,", en: "It sips some water from a blue lake,", cs: "Nabere vodu z modrého jezera,", fr: "Il boit de l'eau d'un lac tout bleu," },
        { es: "y la reparte, glu, glu, glu.", ca: "i la reparteix, glu, glu, glu, joiós.", en: "then showers the forest, for goodness' sake!", cs: "a kropí les od rána do večera.", fr: "et il l'arrose, glou, glou, glou, joyeux." },
        { es: "Los forestales, desde su torre,", ca: "Els forestals, des de la torre,", en: "The forest firefighters in their tower,", cs: "Lesní hasiči na věži bdí,", fr: "Les forestiers, depuis leur tour," },
        { es: "cuidan los pinos y el viento corre.", ca: "cuiden els pins mentre el vent corre.", en: "watch over the pine trees hour by hour.", cs: "chrání stromy ve dne i v noci.", fr: "veillent sur les pins tout autour." },
        { es: "Bosque contento, verde otra vez,", ca: "Bosc content, verd un altre cop,", en: "The happy forest, so green and free,", cs: "Spokojený les, zelený zas,", fr: "Forêt contente, verte à nouveau," },
        { es: "¡lo aplaudimos, uno, dos y tres!", ca: "l'aplaudim fort, un, dos i tres, tot d'un cop!", en: "we clap our hands, one, two, three!", cs: "tleskáme všichni, raz, dva, tři, na hlas!", fr: "on applaudit, un, deux, trois, bravo !" }
      ] }
  ],

  /* ---------- TRADUCTOR ---------- */
  translator: {
    words: [
      W_COMMON.hola,
      W_COMMON.adios,
      W_COMMON.amigo,
      { k: "bombero", emoji: "🧑‍🚒", name: { es: "bombero", ca: "bomber", en: "firefighter", cs: "hasič", fr: "pompier" } },
      { k: "camion", emoji: "🚒", name: { es: "camión", ca: "camió", en: "fire truck", cs: "hasičské auto", fr: "camion" } },
      { k: "manguera", emoji: "💦", name: { es: "manguera", ca: "mànega", en: "hose", cs: "hadice", fr: "tuyau" } },
      { k: "casco", emoji: "⛑️", name: { es: "casco", ca: "casc", en: "helmet", cs: "helma", fr: "casque" } },
      { k: "escalera", emoji: "🪜", name: { es: "escalera", ca: "escala", en: "ladder", cs: "žebřík", fr: "échelle" } },
      { k: "sirena", emoji: "🚨", name: { es: "sirena", ca: "sirena", en: "siren", cs: "siréna", fr: "sirène" } },
      { k: "hidrante", emoji: "🚰", name: { es: "hidrante", ca: "hidrant", en: "hydrant", cs: "hydrant", fr: "bouche d'incendie" } },
      { k: "helicoptero", emoji: "🚁", name: { es: "helicóptero", ca: "helicòpter", en: "helicopter", cs: "helikoptéra", fr: "hélicoptère" } },
      { k: "valiente", emoji: "💪", name: { es: "valiente", ca: "valent", en: "brave", cs: "statečný", fr: "courageux" } },
      { k: "rescate", emoji: "🛟", name: { es: "rescate", ca: "rescat", en: "rescue", cs: "záchrana", fr: "sauvetage" } },
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
      { id: "sirenes", emoji: "🔔",
        name: { es: "Sirenés", ca: "Sirenès", en: "Sirenese", cs: "Sirénština", fr: "Sirénois" },
        greeting: { es: "¡Ninonín! Así se dice hola en sirenés, el idioma de las sirenas de los camiones.", ca: "Ninonín! Així es diu hola en sirenès, l'idioma de les sirenes dels camions.", en: "Neenaween! That is how you say hello in Sirenese, the language of truck sirens.", cs: "Húhalí! Tak se řekne ahoj sirénštinou, jazykem hasičských sirén.", fr: "Pinponin ! C'est comme ça qu'on dit bonjour en sirénois, la langue des sirènes des camions." },
        dict: { hola: "ninonín", adios: "ponpón", amigo: "pinpín", bombero: "ninotón", camion: "tatatín", manguera: "ninoflú", casco: "toponín", escalera: "ninalta", sirena: "ninanina", hidrante: "pompín", helicoptero: "ninovol", valiente: "tontín-fort", rescate: "ninosalva", robot: "bipnino", mama: "ninamá", papa: "ninopá", casa: "pontón", agua: "plinplín", comida: "ñamnino", perro: "guaupón", gato: "miaunín", grande: "tonnn", pequeno: "tin", bonito: "ninolí", amor: "corinín", gracias: "graninas", si: "nin", no: "non", dormir: "shhnino" } },
      { id: "mangueres", emoji: "💦",
        name: { es: "Manguerés", ca: "Manguerès", en: "Hosese", cs: "Hadicovština", fr: "Tuyautois" },
        greeting: { es: "Chofchof... el manguerés se habla con burbujas y gotitas. ¡Salpica un poquito!", ca: "Xofxof... el manguerès es parla amb bombolles i gotetes. Esquitxa una miqueta!", en: "Splishsplosh... Hosese is spoken with bubbles and little drops. It splashes a bit!", cs: "Žbluňkžbluňk... hadicovština se mluví bublinkami a kapičkami. Trochu to cáká!", fr: "Ploufplouf... le tuyautois se parle avec des bulles et des gouttelettes. Ça éclabousse un peu !" },
        dict: { hola: "chofchof", adios: "plofplaf", amigo: "glugluí", bombero: "chofero", camion: "brumchof", manguera: "flusssí", casco: "glopón", escalera: "chorrup", sirena: "fluífluí", hidrante: "brollón", helicoptero: "chofvolá", valiente: "chorrofort", rescate: "salpicoup", robot: "glubot", mama: "mamaglú", papa: "papaglú", casa: "chozglub", agua: "glugluglú", comida: "ñamplip", perro: "guauplaf", gato: "miauplip", grande: "chorromax", pequeno: "gotita", bonito: "brillaplip", amor: "corazónglub", gracias: "graciplip", si: "plip", no: "plop", dormir: "glusssh" } }
    ]
  },

  /* ---------- MAPA DE EXPLORACIÓN ---------- */
  explore: {
    width: 2600, height: 1100, stars: false,
    bgCss: "radial-gradient(ellipse 34% 26% at 9% 11%, rgba(255,241,118,.55), transparent), linear-gradient(180deg,#79c4ee 0%,#a5daf4 28%,#cdeaf8 48%,#e4f0d6 62%,#cbe1ae 80%,#b0d08f 100%)",
    cats: [
      { id: "parque", emoji: "🚒", x: 120, name: { es: "El parque de bomberos", ca: "El parc de bombers", en: "The fire station", cs: "Hasičská stanice", fr: "La caserne" } },
      { id: "ciudad", emoji: "🏙️", x: 1080, name: { es: "La ciudad", ca: "La ciutat", en: "The city", cs: "Město", fr: "La ville" } },
      { id: "bosque", emoji: "🌲", x: 1950, name: { es: "El bosque de los forestales", ca: "El bosc dels forestals", en: "The forest crew's woods", cs: "Les lesních hasičů", fr: "La forêt des forestiers" } }
    ],
    pois: [
      { cat: "parque", emoji: "🚒", x: 280, y: 720, size: 2, iw: 170, ih: 108,
        svg: `<svg viewBox="0 0 170 108" width="100%" height="100%">
          <rect x="6" y="30" width="118" height="46" rx="8" fill="#e53935" stroke="#fff" stroke-width="2"/>
          <rect x="120" y="40" width="42" height="36" rx="6" fill="#e53935" stroke="#fff" stroke-width="2"/>
          <rect x="128" y="46" width="22" height="16" rx="3" fill="#b3e5fc" stroke="#fff" stroke-width="1.6"/>
          <circle cx="135" cy="55" r="2.2" fill="#37474f"/><circle cx="144" cy="55" r="2.2" fill="#37474f"/>
          <path d="M136 59 Q140 62 143 59" stroke="#37474f" stroke-width="1.6" fill="none" stroke-linecap="round"/>
          <rect x="10" y="22" width="104" height="10" rx="5" fill="#eceff1"/>
          <path d="M14 27 L110 27" stroke="#90a4ae" stroke-width="2"/>
          ${[26, 46, 66, 86].map(x => `<line x1="${x}" y1="23" x2="${x}" y2="31" stroke="#90a4ae" stroke-width="2"/>`).join("")}
          <rect x="14" y="38" width="18" height="14" rx="3" fill="#ffe082"/>
          <rect x="40" y="38" width="18" height="14" rx="3" fill="#ffe082"/>
          <path d="M6 62 L124 62" stroke="#ffd54f" stroke-width="4"/>
          <rect x="126" y="32" width="10" height="8" rx="3" fill="#42a5f5">
            <animate attributeName="opacity" values="1;.25;1" dur=".9s" repeatCount="indefinite"/></rect>
          <circle cx="36" cy="82" r="14" fill="#263238"/><circle cx="36" cy="82" r="6" fill="#90a4ae"/>
          <circle cx="98" cy="82" r="14" fill="#263238"/><circle cx="98" cy="82" r="6" fill="#90a4ae"/>
          <circle cx="140" cy="82" r="12" fill="#263238"/><circle cx="140" cy="82" r="5" fill="#90a4ae"/></svg>`,
        name: { es: "El camión de bomberos", ca: "El camió de bombers", en: "The fire truck", cs: "Hasičské auto", fr: "Le camion de pompiers" },
        fact: { es: "El camión lleva agua, mangueras, escalera y herramientas: es una caja de ayudar con ruedas. Duerme en el garaje mirando a la puerta, listo para salir.", ca: "El camió porta aigua, mànegues, escala i eines: és una caixa d'ajudar amb rodes. Dorm al garatge mirant la porta, a punt per sortir.", en: "The truck carries water, hoses, a ladder and tools: it is a helping box on wheels. It sleeps in the garage facing the door, ready to go.", cs: "Auto veze vodu, hadice, žebřík a nářadí: je to pomáhací krabice na kolech. V garáži spí předkem ke vratům, připravené vyrazit.", fr: "Le camion transporte de l'eau, des tuyaux, une échelle et des outils : c'est une boîte à aider sur roues. Il dort au garage face à la porte, prêt à partir." } },
      { cat: "parque", emoji: "🐕", x: 420, y: 850, iw: 76, ih: 66,
        svg: `<svg viewBox="0 0 110 96" width="100%" height="100%">
          <ellipse cx="58" cy="60" rx="34" ry="22" fill="#fff" stroke="#cfd8dc" stroke-width="2"/>
          <circle cx="26" cy="44" r="16" fill="#fff" stroke="#cfd8dc" stroke-width="2"/>
          <path d="M14 34 Q8 24 18 26 Q24 28 22 36 Z" fill="#263238"/>
          <path d="M38 34 Q44 24 34 26 Q28 28 30 36 Z" fill="#263238"/>
          <circle cx="21" cy="43" r="2.6" fill="#263238"/><circle cx="31" cy="43" r="2.6" fill="#263238"/>
          <circle cx="26" cy="50" r="3" fill="#263238"/>
          <path d="M22 55 Q26 58 30 55" stroke="#263238" stroke-width="2" fill="none" stroke-linecap="round"/>
          ${[[50, 50], [66, 46], [78, 58], [58, 68], [72, 72], [46, 66]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="3.4" fill="#263238"/>`).join("")}
          <path d="M88 52 Q98 44 96 34" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round"/>
          <rect x="34" y="76" width="8" height="14" rx="4" fill="#fff" stroke="#cfd8dc" stroke-width="1.6"/>
          <rect x="66" y="76" width="8" height="14" rx="4" fill="#fff" stroke="#cfd8dc" stroke-width="1.6"/>
          <rect x="20" y="58" width="14" height="8" rx="4" fill="#e53935"/></svg>`,
        name: { es: "Chispa, el dálmata", ca: "Guspira, el dàlmata", en: "Sparky the dalmatian", cs: "Dalmatin Jiskra", fr: "Étincelle le dalmatien" },
        fact: { es: "Los dálmatas son las mascotas clásicas de los bomberos: hace muchos años corrían delante de los carros de caballos abriendo camino con sus ladridos.", ca: "Els dàlmates són les mascotes clàssiques dels bombers: fa molts anys corrien davant dels carros de cavalls obrint camí amb els seus lladrucs.", en: "Dalmatians are the classic firehouse mascots: long ago they ran ahead of the horse carts, clearing the way with their barks.", cs: "Dalmatini jsou odjakživa hasičští maskoti: kdysi běhali před koňskými povozy a štěkotem razili cestu.", fr: "Les dalmatiens sont les mascottes classiques des pompiers : il y a longtemps, ils couraient devant les chariots à chevaux en ouvrant la route avec leurs aboiements." } },
      { cat: "parque", emoji: "🥾", x: 560, y: 800, iw: 66, ih: 62,
        svg: `<svg viewBox="0 0 100 94" width="100%" height="100%">
          <path d="M20 12 L44 12 L44 56 Q60 58 62 70 L62 80 L20 80 Z" fill="#263238"/>
          <path d="M20 70 L62 70 L62 80 L20 80 Z" fill="#4e342e"/>
          <rect x="20" y="30" width="24" height="8" fill="#ffd54f"/>
          <path d="M52 12 L76 12 L76 56 Q92 58 94 70 L94 80 L52 80 Z" fill="#263238" transform="translate(-6 6)"/>
          <rect x="46" y="36" width="24" height="8" fill="#ffd54f"/>
          <path d="M46 76 L88 76 L88 86 L46 86 Z" fill="#4e342e"/>
          <path d="M20 12 Q32 6 44 12" stroke="#e53935" stroke-width="5" fill="none"/>
          <path d="M46 18 Q58 12 70 18" stroke="#e53935" stroke-width="5" fill="none"/></svg>`,
        name: { es: "Las botas preparadas", ca: "Les botes preparades", en: "The ready boots", cs: "Připravené boty", fr: "Les bottes prêtes" },
        fact: { es: "Las botas duermen junto al camión con el pantalón bajado encima: al saltar dentro, ¡ya estás medio vestido! Así se sale en menos de dos minutos.", ca: "Les botes dormen al costat del camió amb el pantaló abaixat a sobre: en saltar-hi dins, ja estàs mig vestit! Així se surt en menys de dos minuts.", en: "The boots sleep next to the truck with the trousers rolled down over them: when you jump in, you are half dressed! That is how you leave in under two minutes.", cs: "Boty spí u auta a přes ně jsou shrnuté kalhoty: skočíš do nich a jsi napůl oblečený! Proto se vyráží za necelé dvě minuty.", fr: "Les bottes dorment près du camion avec le pantalon baissé dessus : en sautant dedans, on est déjà à moitié habillé ! C'est comme ça qu'on part en moins de deux minutes." } },
      { cat: "parque", emoji: "🌀", x: 700, y: 720, iw: 70, ih: 64,
        svg: `<svg viewBox="0 0 104 92" width="100%" height="100%">
          <circle cx="46" cy="46" r="32" fill="#ffb300" stroke="#fff" stroke-width="2"/>
          <circle cx="46" cy="46" r="24" fill="none" stroke="#e65100" stroke-width="6"/>
          <circle cx="46" cy="46" r="13" fill="none" stroke="#e65100" stroke-width="6"/>
          <circle cx="46" cy="46" r="4" fill="#e65100"/>
          <path d="M78 46 L96 46" stroke="#e65100" stroke-width="8" stroke-linecap="round"/>
          <path d="M94 40 L102 46 L94 52 Z" fill="#78909c"/>
          <circle cx="40" cy="42" r="2.4" fill="#4e2600"/><circle cx="52" cy="42" r="2.4" fill="#4e2600"/>
          <path d="M42 51 Q46 54 50 51" stroke="#4e2600" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`,
        name: { es: "La manguera enrollada", ca: "La mànega enrotllada", en: "The rolled-up hose", cs: "Smotaná hadice", fr: "Le tuyau enroulé" },
        fact: { es: "Enrollada parece un caracol gigante, pero estirada es más larga que una piscina. Después de usarla se seca y se enrolla otra vez: una manguera cuidada dura años.", ca: "Enrotllada sembla un cargol gegant, però estirada és més llarga que una piscina. Després de fer-la servir s'asseca i s'enrotlla de nou: una mànega cuidada dura anys.", en: "Rolled up it looks like a giant snail, but stretched out it is longer than a swimming pool. After use it gets dried and rolled again: a well-kept hose lasts for years.", cs: "Smotaná vypadá jako obří šnek, ale natažená je delší než bazén. Po použití se usuší a zase smotá: opečovávaná hadice vydrží roky.", fr: "Enroulé, il ressemble à un escargot géant, mais déroulé, il est plus long qu'une piscine. Après usage, on le sèche et on l'enroule à nouveau : un tuyau soigné dure des années." } },
      { cat: "parque", emoji: "🛝", x: 610, y: 520, iw: 56, ih: 96,
        svg: `<svg viewBox="0 0 70 130" width="100%" height="100%">
          <rect x="6" y="6" width="58" height="14" rx="4" fill="#8d6e63"/>
          <ellipse cx="35" cy="13" rx="12" ry="5" fill="#4e342e"/>
          <rect x="31" y="12" width="8" height="106" rx="4" fill="#ffca28" stroke="#f57f17" stroke-width="1.6"/>
          <circle cx="35" cy="44" r="9" fill="#e53935"/>
          <path d="M28 52 Q35 60 42 52" stroke="#e53935" stroke-width="5" fill="none" stroke-linecap="round"/>
          <circle cx="32" cy="42" r="1.8" fill="#fff"/><circle cx="38" cy="42" r="1.8" fill="#fff"/>
          <ellipse cx="35" cy="120" rx="24" ry="8" fill="#90a4ae"/>
          <ellipse cx="35" cy="118" rx="17" ry="5" fill="#cfd8dc"/></svg>`,
        name: { es: "La barra de bajar", ca: "La barra de baixar", en: "The sliding pole", cs: "Skluzná tyč", fr: "La barre de descente" },
        fact: { es: "¡Fiuuu! Por la barra se baja del dormitorio al garaje en dos segundos. La inventaron los bomberos hace casi 150 años porque las escaleras eran demasiado lentas.", ca: "Fiuuu! Per la barra es baixa del dormitori al garatge en dos segons. La van inventar els bombers fa gairebé 150 anys perquè les escales eren massa lentes.", en: "Wheee! You slide from the bedroom to the garage in two seconds. Firefighters invented it almost 150 years ago because stairs were too slow.", cs: "Fíí! Po tyči sjedeš z ložnice do garáže za dvě vteřiny. Hasiči ji vymysleli před skoro 150 lety, protože schody byly moc pomalé.", fr: "Fiouu ! On glisse du dortoir au garage en deux secondes. Les pompiers l'ont inventée il y a presque 150 ans parce que l'escalier était trop lent." } },
      { cat: "parque", emoji: "⛑️", x: 800, y: 560, iw: 62, ih: 54,
        svg: `<svg viewBox="0 0 96 80" width="100%" height="100%">
          <path d="M12 52 Q12 18 48 18 Q84 18 84 52 Z" fill="#e53935" stroke="#fff" stroke-width="2"/>
          <ellipse cx="48" cy="54" rx="42" ry="10" fill="#c62828" stroke="#fff" stroke-width="2"/>
          <rect x="42" y="10" width="12" height="12" rx="4" fill="#e53935" stroke="#fff" stroke-width="1.6"/>
          <circle cx="48" cy="40" r="9" fill="#ffd54f" stroke="#f57f17" stroke-width="2"/>
          <path d="M44 40 L52 40 M48 36 L48 44" stroke="#e65100" stroke-width="2.4" stroke-linecap="round"/>
          <path d="M20 46 Q34 38 48 40" stroke="rgba(255,255,255,.45)" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`,
        name: { es: "El casco", ca: "El casc", en: "The helmet", cs: "Helma", fr: "Le casque" },
        fact: { es: "El casco protege de golpes y de cosas que caen, y su visera cuida los ojos. Cada bombero revisa el suyo y lo deja siempre en el mismo sitio, listo para cogerlo a la primera.", ca: "El casc protegeix de cops i de coses que cauen, i la seva visera cuida els ulls. Cada bomber revisa el seu i el deixa sempre al mateix lloc, a punt per agafar-lo a la primera.", en: "The helmet protects from bumps and falling things, and its visor guards the eyes. Every firefighter checks their own and keeps it in the same spot, ready to grab first time.", cs: "Helma chrání před nárazy i padajícími věcmi a štítek hlídá oči. Každý hasič si tu svou kontroluje a nechává ji vždy na stejném místě, aby ji hned našel.", fr: "Le casque protège des chocs et des objets qui tombent, et sa visière garde les yeux. Chaque pompier vérifie le sien et le laisse toujours au même endroit, prêt à être saisi du premier coup." } },
      { cat: "parque", emoji: "🗼", x: 920, y: 420, size: 2, iw: 92, ih: 150,
        svg: `<svg viewBox="0 0 92 150" width="100%" height="100%">
          <rect x="26" y="20" width="40" height="118" rx="4" fill="#bcaaa4" stroke="#8d6e63" stroke-width="2.4"/>
          <rect x="20" y="10" width="52" height="14" rx="4" fill="#8d6e63"/>
          ${[34, 62, 90].map(y => `<rect x="34" y="${y}" width="10" height="12" rx="2" fill="#ffe082" stroke="#8d6e63" stroke-width="1.4"/><rect x="48" y="${y}" width="10" height="12" rx="2" fill="#ffe082" stroke="#8d6e63" stroke-width="1.4"/>`).join("")}
          <rect x="14" y="112" width="20" height="4" rx="2" fill="#78909c" transform="rotate(-52 14 112)"/>
          <path d="M66 30 Q84 44 78 66" stroke="#e65100" stroke-width="5" fill="none" stroke-linecap="round"/>
          <rect x="26" y="132" width="40" height="8" rx="3" fill="#8d6e63"/>
          <path d="M30 20 L30 8 L44 13 L30 18 Z" fill="#e53935"/></svg>`,
        name: { es: "La torre de prácticas", ca: "La torre de pràctiques", en: "The training tower", cs: "Cvičná věž", fr: "La tour d'entraînement" },
        fact: { es: "Es un edificio de mentira para entrenar de verdad: los bomberos practican subir con cuerdas, bajar con escaleras y rescatar muñecos. Cuando llega un rescate real, ya se lo saben de memoria.", ca: "És un edifici de mentida per entrenar de debò: els bombers practiquen pujar amb cordes, baixar amb escales i rescatar ninots. Quan arriba un rescat real, ja s'ho saben de memòria.", en: "It is a pretend building for real training: firefighters practise climbing with ropes, going down ladders and rescuing dummies. When a real rescue comes, they know it by heart.", cs: "Je to budova jen jako, ale trénink je opravdový: hasiči cvičí šplhání po lanech, slézání po žebřících a záchranu figurín. Když přijde skutečná záchrana, umí ji nazpaměť.", fr: "C'est un bâtiment pour de faux qui sert à s'entraîner pour de vrai : les pompiers s'exercent à monter à la corde, descendre à l'échelle et secourir des mannequins. Quand un vrai sauvetage arrive, ils le connaissent par cœur." } },
      { cat: "ciudad", emoji: "🚰", x: 1160, y: 800, iw: 54, ih: 66,
        svg: `<svg viewBox="0 0 76 96" width="100%" height="100%">
          <rect x="26" y="20" width="24" height="56" rx="8" fill="#e53935" stroke="#b71c1c" stroke-width="2.4"/>
          <ellipse cx="38" cy="18" rx="14" ry="7" fill="#c62828"/>
          <circle cx="38" cy="10" r="5" fill="#ffd54f"/>
          <rect x="12" y="38" width="14" height="12" rx="4" fill="#c62828"/>
          <rect x="50" y="38" width="14" height="12" rx="4" fill="#c62828"/>
          <circle cx="19" cy="44" r="3.4" fill="#ffd54f"/><circle cx="57" cy="44" r="3.4" fill="#ffd54f"/>
          <circle cx="34" cy="36" r="2.2" fill="#4e0d0d"/><circle cx="42" cy="36" r="2.2" fill="#4e0d0d"/>
          <path d="M34 44 Q38 47 42 44" stroke="#4e0d0d" stroke-width="2" fill="none" stroke-linecap="round"/>
          <rect x="20" y="76" width="36" height="10" rx="4" fill="#90a4ae"/>
          <circle cx="62" cy="26" r="2.4" fill="#4fc3f7"><animate attributeName="cy" values="26;34;26" dur="2.2s" repeatCount="indefinite"/></circle></svg>`,
        name: { es: "El hidrante", ca: "L'hidrant", en: "The hydrant", cs: "Hydrant", fr: "La bouche d'incendie" },
        fact: { es: "Es un grifo gigante conectado a las tuberías de la ciudad. Los bomberos enchufan ahí la manguera y tienen agua sin parar. Por eso nunca se aparca delante de un hidrante.", ca: "És una aixeta gegant connectada a les canonades de la ciutat. Els bombers hi endollen la mànega i tenen aigua sense parar. Per això mai no s'aparca davant d'un hidrant.", en: "It is a giant tap connected to the city pipes. Firefighters plug the hose in and get endless water. That is why you never park in front of a hydrant.", cs: "Je to obří kohoutek napojený na městské trubky. Hasiči do něj zapojí hadici a mají vodu bez přestání. Proto se před hydrantem nikdy neparkuje.", fr: "C'est un robinet géant relié aux tuyaux de la ville. Les pompiers y branchent le tuyau et ont de l'eau sans fin. Voilà pourquoi on ne se gare jamais devant une bouche d'incendie." } },
      { cat: "ciudad", emoji: "🐱", x: 1300, y: 590, iw: 96, ih: 120,
        svg: `<svg viewBox="0 0 110 140" width="100%" height="100%">
          <path d="M50 70 L48 132 L62 132 L58 70 Z" fill="#6d4c41"/>
          <circle cx="34" cy="52" r="24" fill="#43a047"/><circle cx="76" cy="50" r="24" fill="#388e3c"/>
          <circle cx="55" cy="30" r="26" fill="#4caf50"/>
          <circle cx="55" cy="24" r="9" fill="#ffb74d"/>
          <path d="M48 19 L51 13 L54 18 Z" fill="#ffb74d"/><path d="M62 19 L59 13 L56 18 Z" fill="#ffb74d"/>
          <circle cx="52" cy="23" r="1.6" fill="#4e2600"/><circle cx="58" cy="23" r="1.6" fill="#4e2600"/>
          <path d="M53 27 Q55 29 57 27" stroke="#4e2600" stroke-width="1.4" fill="none" stroke-linecap="round"/>
          <path d="M64 26 Q70 24 72 19" stroke="#ffb74d" stroke-width="3.4" fill="none" stroke-linecap="round"/>
          <path d="M46 22 L40 20 M46 25 L40 26" stroke="#4e2600" stroke-width="1" stroke-linecap="round"/>
          <path d="M64 22 L70 20 M64 25 L70 26" stroke="#4e2600" stroke-width="1" stroke-linecap="round"/></svg>`,
        name: { es: "El gatito del árbol", ca: "El gatet de l'arbre", en: "The kitten in the tree", cs: "Koťátko na stromě", fr: "Le chaton dans l'arbre" },
        fact: { es: "Los gatos suben genial porque sus uñas miran hacia atrás... ¡pero por eso mismo bajar les cuesta! Si un gatito no baja en muchas horas, los bomberos ayudan con la escalera y mucha paciencia.", ca: "Els gats pugen molt bé perquè les seves ungles miren cap enrere... però per això mateix baixar els costa! Si un gatet no baixa en moltes hores, els bombers ajuden amb l'escala i molta paciència.", en: "Cats climb up easily because their claws point backwards... which is exactly why coming down is hard! If a kitten stays stuck for many hours, firefighters help with a ladder and lots of patience.", cs: "Kočky lezou nahoru skvěle, protože jejich drápky míří dozadu... a právě proto je pro ně cesta dolů těžká! Když koťátko dlouho nesleze, hasiči pomůžou žebříkem a velkou trpělivostí.", fr: "Les chats grimpent très bien parce que leurs griffes pointent vers l'arrière... et c'est justement pour ça que descendre est difficile ! Si un chaton reste coincé de longues heures, les pompiers aident avec une échelle et beaucoup de patience." } },
      { cat: "ciudad", emoji: "🔔", x: 1440, y: 420, iw: 62, ih: 56,
        svg: `<svg viewBox="0 0 92 82" width="100%" height="100%">
          <rect x="6" y="6" width="80" height="10" rx="3" fill="#b0bec5"/>
          <ellipse cx="46" cy="38" rx="30" ry="22" fill="#eceff1" stroke="#90a4ae" stroke-width="2.4"/>
          <circle cx="46" cy="38" r="10" fill="#cfd8dc"/>
          ${[0, 60, 120, 180, 240, 300].map(a => `<circle cx="${(46 + 16 * Math.cos(a * Math.PI / 180)).toFixed(1)}" cy="${(38 + 11 * Math.sin(a * Math.PI / 180)).toFixed(1)}" r="1.8" fill="#90a4ae"/>`).join("")}
          <circle cx="46" cy="38" r="4" fill="#e53935">
            <animate attributeName="opacity" values="1;.15;1" dur="1.4s" repeatCount="indefinite"/></circle>
          <path d="M24 66 Q28 60 26 54 M68 66 Q64 60 66 54" stroke="#90a4ae" stroke-width="2.4" fill="none" stroke-linecap="round"/></svg>`,
        name: { es: "El detector de humo", ca: "El detector de fum", en: "The smoke detector", cs: "Hlásič kouře", fr: "Le détecteur de fumée" },
        fact: { es: "Este platillo del techo huele el humo antes que nadie y pita fortísimo para avisar a toda la familia. Su pila se cambia una vez al año: es el vigilante más pequeño de la casa.", ca: "Aquest platet del sostre olora el fum abans que ningú i xiula fortíssim per avisar tota la família. La seva pila es canvia un cop l'any: és el vigilant més petit de la casa.", en: "This little ceiling saucer smells smoke before anyone and beeps super loud to warn the whole family. Its battery gets changed once a year: it is the smallest guard in the house.", cs: "Tenhle talířek na stropě ucítí kouř dřív než kdokoli a hlasitě pípá, aby varoval celou rodinu. Baterka se mu mění jednou za rok: je to nejmenší hlídač v domě.", fr: "Cette petite soucoupe au plafond sent la fumée avant tout le monde et sonne très fort pour prévenir toute la famille. On change sa pile une fois par an : c'est le plus petit gardien de la maison." } },
      { cat: "ciudad", emoji: "🎧", x: 1590, y: 740, iw: 74, ih: 66,
        svg: `<svg viewBox="0 0 108 96" width="100%" height="100%">
          <rect x="8" y="56" width="92" height="30" rx="6" fill="#5c6bc0" stroke="#3949ab" stroke-width="2"/>
          <rect x="16" y="62" width="34" height="18" rx="3" fill="#c5cae9"/>
          <text x="33" y="76" text-anchor="middle" font-size="13" font-weight="bold" fill="#1a237e">112</text>
          <circle cx="72" cy="34" r="16" fill="#f6d5b8"/>
          <path d="M56 30 Q56 16 72 16 Q88 16 88 30 L84 26 Q80 20 72 20 Q64 20 60 26 Z" fill="#5a3a22"/>
          <path d="M54 30 Q52 40 58 42 M90 30 Q92 40 86 42" stroke="#37474f" stroke-width="4" fill="none" stroke-linecap="round"/>
          <path d="M58 44 Q64 52 72 50" stroke="#37474f" stroke-width="3" fill="none" stroke-linecap="round"/>
          <circle cx="72" cy="50" r="3" fill="#37474f"/>
          <circle cx="67" cy="34" r="2.2" fill="#2b1a10"/><circle cx="77" cy="34" r="2.2" fill="#2b1a10"/>
          <path d="M68 41 Q72 44 76 41" stroke="#5a3a28" stroke-width="1.8" fill="none" stroke-linecap="round"/>
          <circle cx="93" cy="66" r="6" fill="#66bb6a">
            <animate attributeName="opacity" values="1;.3;1" dur="1.2s" repeatCount="indefinite"/></circle></svg>`,
        name: { es: "La centralita del 112", ca: "La centraleta del 112", en: "The 112 call centre", cs: "Dispečink 112", fr: "Le centre d'appel du 112" },
        fact: { es: "Cuando alguien marca el 112, contesta una persona entrenada que pregunta qué pasa y dónde. Con el nombre y la dirección, manda a los ayudantes perfectos: bomberos, médicos o policía.", ca: "Quan algú marca el 112, contesta una persona entrenada que pregunta què passa i on. Amb el nom i l'adreça, envia els ajudants perfectes: bombers, metges o policia.", en: "When someone dials 112, a trained person answers and asks what happened and where. With a name and address, they send the perfect helpers: firefighters, doctors or police.", cs: "Když někdo vytočí 112, ozve se vyškolený člověk a zeptá se, co se stalo a kde. Se jménem a adresou pošle ty pravé pomocníky: hasiče, doktory nebo policii.", fr: "Quand quelqu'un compose le 112, une personne formée répond et demande ce qui se passe et où. Avec le nom et l'adresse, elle envoie les parfaits assistants : pompiers, médecins ou police." } },
      { cat: "ciudad", emoji: "📍", x: 1730, y: 560, iw: 58, ih: 70,
        svg: `<svg viewBox="0 0 84 102" width="100%" height="100%">
          <rect x="38" y="30" width="8" height="66" rx="4" fill="#78909c"/>
          <rect x="10" y="8" width="64" height="42" rx="8" fill="#43a047" stroke="#fff" stroke-width="2.4"/>
          <circle cx="28" cy="26" r="6" fill="#fff"/><circle cx="44" cy="24" r="7" fill="#fff"/><circle cx="58" cy="27" r="5" fill="#fff"/>
          <path d="M23 38 Q28 32 33 38 M38 38 Q44 30 50 38 M54 38 Q58 33 62 38" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/>
          <circle cx="26" cy="25" r="1.2" fill="#2e7d32"/><circle cx="30" cy="25" r="1.2" fill="#2e7d32"/>
          <circle cx="42" cy="23" r="1.3" fill="#2e7d32"/><circle cx="46" cy="23" r="1.3" fill="#2e7d32"/>
          <circle cx="56" cy="26" r="1.1" fill="#2e7d32"/><circle cx="60" cy="26" r="1.1" fill="#2e7d32"/></svg>`,
        name: { es: "El punto de encuentro", ca: "El punt de trobada", en: "The meeting point", cs: "Místo srazu", fr: "Le point de rassemblement" },
        fact: { es: "Es el sitio acordado donde se junta todo el mundo al salir en un simulacro: así se cuenta rapidito que no falte nadie. Tu familia también puede elegir el suyo, como un juego.", ca: "És el lloc acordat on s'ajunta tothom en sortir en un simulacre: així es compta rapidet que no falti ningú. La teva família també pot triar el seu, com un joc.", en: "It is the agreed spot where everyone gathers after walking out in a drill: that way you can quickly count that nobody is missing. Your family can pick one too, like a game.", cs: "Je to domluvené místo, kde se všichni sejdou po cvičném odchodu: rychle se tak spočítá, že nikdo nechybí. I vaše rodina si může jedno vybrat, jako hru.", fr: "C'est l'endroit convenu où tout le monde se retrouve après être sorti pendant un exercice : on compte ainsi très vite que personne ne manque. Ta famille peut aussi choisir le sien, comme un jeu." } },
      { cat: "bosque", emoji: "🚁", x: 2060, y: 300, size: 2, iw: 150, ih: 110,
        svg: `<svg viewBox="0 0 150 110" width="100%" height="100%">
          <ellipse cx="70" cy="44" rx="38" ry="20" fill="#fb8c00" stroke="#fff" stroke-width="2"/>
          <path d="M104 44 L134 40 L134 50 Q120 52 104 50 Z" fill="#fb8c00" stroke="#fff" stroke-width="1.6"/>
          <circle cx="134" cy="44" r="7" fill="none" stroke="#e65100" stroke-width="3">
            <animateTransform attributeName="transform" type="rotate" values="0 134 44;360 134 44" dur=".6s" repeatCount="indefinite"/></circle>
          <rect x="66" y="14" width="8" height="12" rx="3" fill="#e65100"/>
          <line x1="18" y1="16" x2="122" y2="16" stroke="#37474f" stroke-width="4" stroke-linecap="round">
            <animate attributeName="opacity" values="1;.35;1" dur=".35s" repeatCount="indefinite"/></line>
          <circle cx="54" cy="42" r="9" fill="#b3e5fc" stroke="#fff" stroke-width="2"/>
          <circle cx="51" cy="41" r="1.8" fill="#37474f"/><circle cx="58" cy="41" r="1.8" fill="#37474f"/>
          <path d="M52 46 Q54 48 57 46" stroke="#37474f" stroke-width="1.6" fill="none" stroke-linecap="round"/>
          <path d="M48 64 L44 76 M92 64 L96 76" stroke="#546e7a" stroke-width="3.4"/>
          <line x1="40" y1="78" x2="102" y2="78" stroke="#546e7a" stroke-width="4" stroke-linecap="round"/>
          <path d="M70 64 L70 86" stroke="#37474f" stroke-width="2.4"/>
          <path d="M58 86 L82 86 L78 104 L62 104 Z" fill="#e53935" stroke="#fff" stroke-width="2"/>
          ${[[64, 108], [72, 106], [78, 109]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="2" fill="#4fc3f7"><animate attributeName="cy" values="${p[1]};${p[1] + 6};${p[1]}" dur="1.6s" repeatCount="indefinite"/></circle>`).join("")}</svg>`,
        name: { es: "El helicóptero de agua", ca: "L'helicòpter d'aigua", en: "The water helicopter", cs: "Vodní vrtulník", fr: "L'hélicoptère d'eau" },
        fact: { es: "Lleva colgando un cubo gigante que llena en lagos y pantanos. En cada viaje puede soltar miles de litros, como mil regaderas a la vez, para proteger el bosque.", ca: "Porta penjant un cubell gegant que omple en llacs i pantans. En cada viatge pot deixar anar milers de litres, com mil regadores alhora, per protegir el bosc.", en: "It carries a giant hanging bucket that it fills in lakes and reservoirs. Each trip it can drop thousands of litres, like a thousand watering cans at once, to protect the forest.", cs: "Nese zavěšený obří vak, který plní v jezerech a přehradách. Za jeden let dokáže vypustit tisíce litrů, jako tisíc konví najednou, aby ochránil les.", fr: "Il porte un seau géant suspendu qu'il remplit dans les lacs et les barrages. À chaque voyage, il peut lâcher des milliers de litres, comme mille arrosoirs à la fois, pour protéger la forêt." } },
      { cat: "bosque", emoji: "🗼", x: 2260, y: 620, iw: 74, ih: 116,
        svg: `<svg viewBox="0 0 92 142" width="100%" height="100%">
          <path d="M26 40 L18 130 M66 40 L74 130" stroke="#6d4c41" stroke-width="6" stroke-linecap="round"/>
          <path d="M22 76 L70 76 M20 102 L72 102 M26 40 L70 76 M66 40 L22 76" stroke="#8d6e63" stroke-width="3.4"/>
          <rect x="18" y="18" width="56" height="26" rx="4" fill="#a1887f" stroke="#6d4c41" stroke-width="2.4"/>
          <path d="M12 18 L46 4 L80 18 Z" fill="#4e342e"/>
          <rect x="36" y="26" width="20" height="14" rx="2" fill="#fff8e1" stroke="#6d4c41" stroke-width="1.6"/>
          <circle cx="42" cy="32" r="1.8" fill="#37474f"/><circle cx="50" cy="32" r="1.8" fill="#37474f"/>
          <path d="M43 36 Q46 38 49 36" stroke="#37474f" stroke-width="1.4" fill="none" stroke-linecap="round"/>
          <path d="M62 12 Q70 6 76 10" stroke="#37474f" stroke-width="2.4" fill="none" stroke-linecap="round"/>
          <circle cx="78" cy="9" r="3.4" fill="none" stroke="#37474f" stroke-width="2"/></svg>`,
        name: { es: "La torre de vigilancia", ca: "La torre de vigilància", en: "The lookout tower", cs: "Pozorovací věž", fr: "La tour de guet" },
        fact: { es: "Desde aquí arriba, los vigilantes del bosque miran el horizonte con prismáticos. Si ven una columna de humo lejana, avisan enseguida y la ayuda llega cuando todavía es facilísimo.", ca: "Des d'aquí dalt, els vigilants del bosc miren l'horitzó amb prismàtics. Si veuen una columna de fum llunyana, avisen de seguida i l'ajuda arriba quan encara és facilíssim.", en: "From up here, forest lookouts scan the horizon with binoculars. If they spot a faraway smoke column, they call it in right away and help arrives while it is still super easy.", cs: "Odsud shora sledují lesní hlídači obzor dalekohledem. Když uvidí vzdálený sloupek kouře, hned to nahlásí a pomoc dorazí, dokud je to ještě úplně snadné.", fr: "De là-haut, les guetteurs de la forêt scrutent l'horizon avec des jumelles. S'ils voient une colonne de fumée au loin, ils préviennent aussitôt et l'aide arrive quand tout est encore très facile." } },
      { cat: "bosque", emoji: "🏞️", x: 2100, y: 870, iw: 110, ih: 60,
        svg: `<svg viewBox="0 0 150 82" width="100%" height="100%">
          <ellipse cx="75" cy="46" rx="70" ry="28" fill="#4fc3f7" stroke="#0288d1" stroke-width="2.4"/>
          <ellipse cx="75" cy="46" rx="54" ry="20" fill="#81d4fa"/>
          <path d="M30 42 q10 -6 20 0 q10 6 20 0 q10 -6 20 0 q10 6 20 0" stroke="#e1f5fe" stroke-width="3" fill="none" stroke-linecap="round"/>
          <ellipse cx="46" cy="56" rx="9" ry="6" fill="#ffca28"/>
          <circle cx="54" cy="50" r="5" fill="#ffca28"/>
          <path d="M58 49 L63 50 L58 52 Z" fill="#f57f17"/>
          <circle cx="55.5" cy="49" r="1" fill="#4e2600"/>
          <ellipse cx="104" cy="52" rx="7" ry="5" fill="#fff"/>
          <circle cx="110" cy="47" r="4" fill="#fff"/>
          <path d="M113 46 L117 47 L113 49 Z" fill="#f57f17"/>
          <circle cx="111.5" cy="46.5" r=".9" fill="#37474f"/></svg>`,
        name: { es: "El lago de recarga", ca: "El llac de recàrrega", en: "The refill lake", cs: "Jezero na doplňování", fr: "Le lac de recharge" },
        fact: { es: "Aquí bajan el helicóptero y los aviones a llenar sus depósitos de agua. Los patos ya los conocen y les dejan sitio: saben que enseguida vuelven a su tranquilidad.", ca: "Aquí baixen l'helicòpter i els avions a omplir els seus dipòsits d'aigua. Els ànecs ja els coneixen i els deixen lloc: saben que de seguida tornen a la seva tranquil·litat.", en: "The helicopter and the planes come down here to fill their water tanks. The ducks know them by now and make room: they know their calm comes right back.", cs: "Sem slétají vrtulník a letadla doplnit nádrže vodou. Kachny je už znají a udělají jim místo: vědí, že klid se hned zase vrátí.", fr: "L'hélicoptère et les avions descendent ici remplir leurs réservoirs d'eau. Les canards les connaissent déjà et leur font de la place : ils savent que leur calme revient tout de suite." } },
      { cat: "bosque", emoji: "🧑‍🚒", x: 2440, y: 740, iw: 66, ih: 92,
        svg: `<svg viewBox="0 0 84 118" width="100%" height="100%">
          <path d="M18 34 Q18 12 42 12 Q66 12 66 34 Z" fill="#ffca28" stroke="#f57f17" stroke-width="2.4"/>
          <ellipse cx="42" cy="35" rx="28" ry="7" fill="#f9a825"/>
          <circle cx="42" cy="48" r="15" fill="#c98e62"/>
          <circle cx="37" cy="47" r="2.2" fill="#2b1a10"/><circle cx="47" cy="47" r="2.2" fill="#2b1a10"/>
          <path d="M38 54 Q42 57 46 54" stroke="#5a3a28" stroke-width="2" fill="none" stroke-linecap="round"/>
          <rect x="24" y="64" width="36" height="34" rx="8" fill="#ffca28" stroke="#f57f17" stroke-width="2.4"/>
          <path d="M24 74 L60 74" stroke="#e65100" stroke-width="3.4"/>
          <rect x="60" y="66" width="14" height="26" rx="5" fill="#0288d1" stroke="#01579b" stroke-width="2"/>
          <path d="M67 66 L67 58 Q67 54 62 54" stroke="#01579b" stroke-width="3" fill="none"/>
          <rect x="28" y="98" width="10" height="16" rx="4" fill="#263238"/>
          <rect x="46" y="98" width="10" height="16" rx="4" fill="#263238"/></svg>`,
        name: { es: "La bombera forestal", ca: "La bombera forestal", en: "The forest firefighter", cs: "Lesní hasička", fr: "La pompière forestière" },
        fact: { es: "Los bomberos forestales conocen el bosque como su casa: limpian ramas secas, abren caminos y enseñan a acampar con cuidado. Su mejor herramienta es prevenir, que significa cuidar antes.", ca: "Els bombers forestals coneixen el bosc com casa seva: netegen branques seques, obren camins i ensenyen a acampar amb compte. La seva millor eina és prevenir, que vol dir cuidar abans.", en: "Forest firefighters know the woods like their own home: they clear dry branches, open paths and teach careful camping. Their best tool is prevention, which means caring in advance.", cs: "Lesní hasiči znají les jako svůj domov: uklízejí suché větve, prosekávají cesty a učí, jak opatrně tábořit. Jejich nejlepší nástroj je prevence, tedy péče předem.", fr: "Les pompiers forestiers connaissent la forêt comme leur maison : ils enlèvent les branches sèches, ouvrent des chemins et apprennent à camper avec soin. Leur meilleur outil est la prévention, c'est-à-dire prendre soin à l'avance." } }
    ],
    deco() {
      let s = "";
      /* ---------- degradados propios: los ids llevan prefijo para no chocar con otros mapas ---------- */
      s += `<defs>
        <linearGradient id="bmbFachada" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f9ccc0"/><stop offset="100%" stop-color="#dfa093"/></linearGradient>
        <linearGradient id="bmbDentro" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#3e2723"/><stop offset="100%" stop-color="#70503f"/></linearGradient>
        <linearGradient id="bmbHormigon" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#d7dcdf"/><stop offset="100%" stop-color="#a8b0b6"/></linearGradient>
        <linearGradient id="bmbAcera" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e6dfcd"/><stop offset="100%" stop-color="#c3baa6"/></linearGradient>
        <linearGradient id="bmbAsfalto" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#717b84"/><stop offset="100%" stop-color="#464e56"/></linearGradient>
        <linearGradient id="bmbPrado" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#a8d36d"/><stop offset="100%" stop-color="#588c31"/></linearGradient>
        <linearGradient id="bmbMonte" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#adc7c9"/><stop offset="100%" stop-color="#7ea691"/></linearGradient>
        <radialGradient id="bmbLago" cx="42%" cy="32%" r="74%"><stop offset="0%" stop-color="#bde8fd"/><stop offset="55%" stop-color="#4fc3f7"/><stop offset="100%" stop-color="#0277bd"/></radialGradient>
        <radialGradient id="bmbSol" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fff9c4" stop-opacity=".85"/><stop offset="100%" stop-color="#ffe082" stop-opacity="0"/></radialGradient>
      </defs>`;

      /* ============ CIELO: sol, nubes lentas y pájaros ============ */
      s += `<circle cx="215" cy="140" r="150" fill="url(#bmbSol)"/>
        <circle cx="215" cy="140" r="64" fill="#fff59d" opacity=".92"/>`;
      /* cada nube va dentro de un grupo hijo para desplazarse muy despacio */
      const nube = (x, y, k, op, dur, dx) => `<g transform="translate(${x} ${y}) scale(${k})" opacity="${op}">
        <g><animateTransform attributeName="transform" type="translate" values="0 0;${dx} 0;0 0" dur="${dur}s" repeatCount="indefinite"/>
        <ellipse rx="86" ry="26" fill="#fff"/><ellipse cx="46" cy="-18" rx="52" ry="24" fill="#fff"/>
        <ellipse cx="-54" cy="-8" rx="42" ry="19" fill="#fff"/><ellipse cx="4" cy="-32" rx="36" ry="19" fill="#fff"/></g></g>`;
      s += nube(560, 118, 1, .82, 96, 70) + nube(1150, 92, .78, .68, 128, -58) + nube(1730, 152, 1.05, .72, 110, 64)
        + nube(2330, 108, .9, .66, 140, -76) + nube(900, 214, .58, .44, 118, 48) + nube(1990, 176, .6, .4, 132, 54);
      /* dos bandadas dando su paseo por el cielo */
      const paja = `<path d="M0 0 q9 -10 18 0 q9 -10 18 0" stroke="#37474f" stroke-width="3" fill="none" stroke-linecap="round"/>`;
      s += `<g opacity=".65">${paja}<g transform="translate(30 22)">${paja}</g><g transform="translate(-34 30)">${paja}</g>
        <animateMotion dur="64s" repeatCount="indefinite" path="M 360 316 Q 900 214 1480 292 Q 1760 330 1850 296 Q 1280 246 700 348 Q 460 384 360 316"/></g>
        <g opacity=".5"><g transform="scale(.75)">${paja}</g>
        <animateMotion dur="48s" repeatCount="indefinite" path="M 1300 200 Q 900 152 520 214 Q 300 252 520 268 Q 950 292 1300 200"/></g>`;

      /* ============ FONDOS LEJANOS ============ */
      /* silueta azulada de la ciudad, detrás de sus edificios */
      s += `<g fill="#9fb4c6" opacity=".45">${[[1046, 606], [1122, 566], [1206, 620], [1300, 574], [1392, 540], [1490, 596], [1580, 552], [1672, 610], [1762, 566], [1850, 604]]
        .map(b => `<rect x="${b[0]}" y="${b[1]}" width="74" height="${810 - b[1]}" rx="5"/>`).join("")}</g>`;
      /* montañas suaves al fondo del bosque */
      s += `<path d="M1840 812 Q1990 618 2130 716 Q2250 800 2352 626 Q2452 466 2548 640 Q2586 706 2600 686 L2600 830 L1840 830 Z" fill="url(#bmbMonte)" opacity=".7"/>
        <path d="M1840 852 Q2010 728 2178 806 Q2338 880 2470 764 Q2548 696 2600 728 L2600 900 L1840 900 Z" fill="#87a86f" opacity=".8"/>`;

      /* ============ SUELOS ============ */
      /* patio de hormigón del parque, con juntas en fuga y líneas pintadas */
      s += `<rect x="0" y="795" width="1035" height="205" fill="url(#bmbHormigon)"/>`;
      for (let x = 60; x <= 1020; x += 120) s += `<line x1="${x}" y1="800" x2="${((x - 512) * 1.2 + 512).toFixed(0)}" y2="998" stroke="rgba(0,0,0,.10)" stroke-width="3"/>`;
      s += `<path d="M0 868 H1035 M0 934 H1035" stroke="rgba(0,0,0,.07)" stroke-width="4" fill="none"/>
        <path d="M150 810 H1015" stroke="#ffd54f" stroke-width="7" opacity=".85" fill="none"/>
        <path d="M186 806 L132 992 M400 806 L420 992 M428 806 L452 992 M646 806 L722 992" stroke="rgba(255,255,255,.6)" stroke-width="7" fill="none" stroke-linecap="round"/>`;
      /* acera, bordillo y calzada de la ciudad */
      s += `<rect x="1035" y="795" width="866" height="180" fill="url(#bmbAcera)"/>`;
      for (let x = 1035; x <= 1900; x += 62) s += `<line x1="${x}" y1="800" x2="${x - 14}" y2="975" stroke="rgba(0,0,0,.08)" stroke-width="3"/>`;
      s += `<path d="M1035 858 H1901 M1035 918 H1901" stroke="rgba(0,0,0,.07)" stroke-width="3" fill="none"/>
        <rect x="1035" y="972" width="866" height="24" fill="#b3ab99"/><rect x="1035" y="972" width="866" height="7" fill="#d8d0bd"/>
        <rect x="0" y="994" width="1901" height="106" fill="url(#bmbAsfalto)"/>
        <rect x="0" y="994" width="1901" height="6" fill="#8a939b" opacity=".7"/>
        <path d="M0 1052 H1890" stroke="#eceff1" stroke-width="6" stroke-dasharray="46 40" opacity=".7" fill="none"/>
        ${[0, 1, 2, 3, 4].map(i => `<rect x="${1424 + i * 34}" y="1002" width="20" height="92" rx="3" fill="#eceff1" opacity=".65"/>`).join("")}`;

      /* ============ PARQUE DE BOMBEROS ============ */
      /* el edificio: zócalo, dos plantas, cornisa y cartel */
      s += `<rect x="140" y="400" width="710" height="400" rx="10" fill="url(#bmbFachada)"/>
        <rect x="140" y="770" width="710" height="30" fill="#c98275"/>
        <rect x="140" y="596" width="710" height="14" fill="#c62828" opacity=".6"/>
        <rect x="116" y="382" width="758" height="34" rx="10" fill="#c62828"/>
        <rect x="116" y="382" width="758" height="9" rx="4" fill="#ef5350" opacity=".7"/>`;
      /* el cartel del parque: escudo con escalera y manguera cruzadas */
      s += `<rect x="402" y="292" width="230" height="96" rx="14" fill="#c62828" stroke="#fff8e1" stroke-width="7"/>
        <path d="M517 308 L568 324 Q568 362 517 378 Q466 362 466 324 Z" fill="#fff8e1"/>
        <path d="M498 322 L498 366 M522 320 L522 364" stroke="#c62828" stroke-width="5" stroke-linecap="round"/>
        <path d="M498 332 H522 M498 344 H522 M498 356 H522" stroke="#c62828" stroke-width="4"/>
        <path d="M536 320 Q550 342 536 366" stroke="#0288d1" stroke-width="5" fill="none" stroke-linecap="round"/>
        <circle cx="418" cy="308" r="7" fill="#ffd54f"/><circle cx="616" cy="308" r="7" fill="#ffd54f"/>`;
      /* la luz roja del parque, siempre despierta */
      s += `<rect x="196" y="364" width="30" height="20" rx="7" fill="#b71c1c"/>
        <ellipse cx="211" cy="362" rx="17" ry="9" fill="#ef5350"><animate attributeName="opacity" values=".5;1;.5" dur="2.6s" repeatCount="indefinite"/></ellipse>
        <ellipse cx="211" cy="360" rx="42" ry="22" fill="rgba(255,138,128,.28)"><animate attributeName="opacity" values=".15;.5;.15" dur="2.6s" repeatCount="indefinite"/></ellipse>`;
      /* mástil con banderín */
      s += `<rect x="802" y="286" width="7" height="100" rx="3" fill="#90a4ae"/>
        <path d="M809 294 L856 306 L809 320 Z" fill="#e53935"/>`;
      /* planta de arriba: las ventanas del dormitorio */
      s += [178, 268, 358, 448].map((x, i) => `<g>
        <rect x="${x}" y="448" width="74" height="92" rx="6" fill="#fff8e1"/>
        <rect x="${x + 7}" y="455" width="60" height="78" rx="4" fill="${i === 1 ? "#ffe6a0" : "#cfe8f7"}"/>
        <path d="M${x + 37} 455 V533 M${x + 7} 494 H${x + 67}" stroke="#fff8e1" stroke-width="5"/>
        <rect x="${x - 6}" y="540" width="86" height="9" rx="4" fill="#f3e0c8"/>
        ${i === 1 ? `<animate attributeName="opacity" values=".85;1;.85" dur="6s" repeatCount="indefinite"/>` : ""}</g>`).join("");
      /* el hueco por donde baja la barra: interior, suelo de la planta alta y su agujero */
      s += `<rect x="552" y="436" width="124" height="160" rx="6" fill="url(#bmbDentro)"/>
        <rect x="546" y="430" width="136" height="12" rx="5" fill="#fff8e1"/>
        <rect x="558" y="450" width="112" height="112" fill="rgba(255,213,79,.16)"/>
        <rect x="558" y="562" width="112" height="18" fill="#8d6e63"/>
        <ellipse cx="612" cy="571" rx="31" ry="9" fill="#241611"/>`;
      /* el vestuario: perchas con trajes colgados y la balda del casco */
      s += `<rect x="690" y="436" width="156" height="160" rx="6" fill="url(#bmbDentro)"/>
        <rect x="684" y="430" width="168" height="12" rx="5" fill="#fff8e1"/>
        <rect x="698" y="458" width="140" height="8" rx="4" fill="#b0bec5"/>`;
      s += [706, 740].map(x => `<g>
        <path d="M${x + 15} 458 q0 -10 8 -10" stroke="#cfd8dc" stroke-width="3" fill="none"/>
        <path d="M${x + 15} 466 l-17 20 v58 h34 v-58 Z" fill="#ffb300"/>
        <rect x="${x - 2}" y="502" width="34" height="9" fill="#eceff1"/>
        <rect x="${x - 2}" y="524" width="34" height="7" fill="#546e7a"/></g>`).join("");
      s += `<rect x="758" y="588" width="86" height="9" rx="4" fill="#a1887f"/>
        <rect x="694" y="556" width="52" height="40" rx="5" fill="#5d4037"/>`;
      /* las dos puertas de garaje, abiertas: primero el hueco oscuro del interior */
      s += [172, 428].map(x => `<g>
        <rect x="${x}" y="612" width="218" height="188" rx="5" fill="url(#bmbDentro)"/>
        <rect x="${x + 10}" y="640" width="198" height="160" fill="rgba(255,213,79,.14)"/>
        <path d="M${x + 20} 792 H${x + 198}" stroke="rgba(255,255,255,.28)" stroke-width="5"/></g>`).join("");
      /* dentro del garaje libre: estantería con cajas y la barra que sigue bajando hasta el suelo */
      s += `<rect x="452" y="700" width="130" height="10" rx="4" fill="#5d4037"/>
        <rect x="462" y="668" width="34" height="32" rx="4" fill="#a1887f" opacity=".8"/>
        <rect x="504" y="676" width="30" height="24" rx="4" fill="#8d6e63" opacity=".8"/>
        <rect x="542" y="672" width="32" height="28" rx="4" fill="#a1887f" opacity=".7"/>
        <rect x="606" y="576" width="9" height="204" rx="4" fill="#ffca28"/>
        <ellipse cx="610" cy="782" rx="21" ry="7" fill="#90a4ae"/>`;
      /* y por delante, la persiana recogida arriba, el marco y la luz de cada puerta */
      s += [172, 428].map(x => `<g>
        <rect x="${x}" y="612" width="218" height="34" rx="4" fill="#cfd8dc"/>
        <path d="M${x + 4} 621 H${x + 214} M${x + 4} 630 H${x + 214} M${x + 4} 639 H${x + 214}" stroke="#90a4ae" stroke-width="3"/>
        <rect x="${x - 9}" y="603" width="236" height="205" rx="7" fill="none" stroke="#fff8e1" stroke-width="9"/>
        <ellipse cx="${x + 109}" cy="600" rx="18" ry="9" fill="#fff3c4"><animate attributeName="opacity" values=".6;1;.6" dur="4.2s" repeatCount="indefinite"/></ellipse></g>`).join("");
      /* el soporte de mangueras, el extintor y la puerta pequeña del personal */
      s += `<rect x="654" y="664" width="116" height="9" rx="4" fill="#8d6e63"/>
        <path d="M666 673 v14 M756 673 v14" stroke="#8d6e63" stroke-width="5" stroke-linecap="round"/>
        <rect x="748" y="700" width="24" height="46" rx="8" fill="#e53935"/>
        <rect x="754" y="690" width="12" height="12" rx="4" fill="#90a4ae"/>
        <rect x="750" y="716" width="20" height="8" fill="#fff8e1"/>
        <rect x="782" y="672" width="62" height="128" rx="6" fill="#8d6e63"/>
        <rect x="789" y="680" width="48" height="60" rx="4" fill="#cfe8f7"/>
        <circle cx="833" cy="748" r="5" fill="#ffd54f"/>`;
      /* la torre de prácticas: el icono es la cima, aquí baja el fuste hasta el suelo */
      s += `<rect x="876" y="774" width="88" height="28" rx="5" fill="#8d6e63"/>
        <rect x="900" y="466" width="40" height="310" fill="#bcaaa4" stroke="#8d6e63" stroke-width="2.4"/>
        ${[506, 550, 594, 638].map(y => `<rect x="906" y="${y}" width="11" height="14" rx="2" fill="#ffe082" stroke="#8d6e63" stroke-width="1.4"/><rect x="923" y="${y}" width="11" height="14" rx="2" fill="#ffe082" stroke="#8d6e63" stroke-width="1.4"/>`).join("")}
        <rect x="906" y="692" width="28" height="82" rx="4" fill="#8d6e63"/><circle cx="928" cy="734" r="3.4" fill="#ffe082"/>
        <path d="M950 410 Q972 546 956 700" stroke="#e65100" stroke-width="4" fill="none" stroke-linecap="round"/>`;
      /* el cartel de la entrada, a la izquierda del patio */
      s += `<rect x="26" y="628" width="106" height="86" rx="10" fill="#c62828" stroke="#fff8e1" stroke-width="6"/>
        <path d="M79 646 L106 655 Q106 678 79 690 Q52 678 52 655 Z" fill="#fff8e1"/>
        <path d="M70 658 v22 M88 658 v22 M70 665 H88 M70 673 H88" stroke="#c62828" stroke-width="4" stroke-linecap="round"/>
        <rect x="44" y="712" width="10" height="84" fill="#90a4ae"/><rect x="104" y="712" width="10" height="84" fill="#90a4ae"/>
        <ellipse cx="79" cy="798" rx="56" ry="9" fill="rgba(0,0,0,.14)"/>`;
      /* sombras que asientan los puntos del patio, y los conos de siempre */
      s += `<ellipse cx="286" cy="800" rx="96" ry="15" fill="rgba(0,0,0,.16)"/>
        <ellipse cx="420" cy="890" rx="44" ry="11" fill="rgba(0,0,0,.14)"/>
        <ellipse cx="560" cy="838" rx="36" ry="9" fill="rgba(0,0,0,.13)"/>
        <ellipse cx="700" cy="760" rx="38" ry="9" fill="rgba(0,0,0,.10)"/>`;
      const cono = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})">
        <ellipse cy="3" rx="26" ry="8" fill="rgba(0,0,0,.14)"/>
        <path d="M-19 0 L-5 -44 L5 -44 L19 0 Z" fill="#fb8c00"/>
        <rect x="-13" y="-28" width="26" height="10" fill="#fff3e0"/>
        <rect x="-25" y="-2" width="50" height="10" rx="4" fill="#ef6c00"/></g>`;
      s += cono(330, 968, .95) + cono(492, 936, 1.05) + cono(660, 906, .9) + cono(782, 962, 1);

      /* ============ CIUDAD ============ */
      /* edificios de distinta altura, con sus ventanas */
      const edificio = (x, y, w, col, colw) => {
        let b = `<rect x="${x}" y="${y}" width="${w}" height="${802 - y}" rx="7" fill="${col}"/>
          <rect x="${x - 8}" y="${y - 13}" width="${w + 16}" height="17" rx="6" fill="rgba(0,0,0,.16)"/>`;
        for (let wy = y + 36; wy < 764; wy += 48) {
          for (let wx = x + 18; wx < x + w - 24; wx += 40) {
            b += `<rect x="${wx}" y="${wy}" width="24" height="30" rx="3" fill="${colw}" opacity=".8"/>`;
          }
        }
        return b;
      };
      s += [[1040, 512, 112, "#a9c1d6", "#fff3c4"], [1158, 446, 92, "#cdc0ad", "#ffe9a8"], [1250, 700, 106, "#b6c1ca", "#e8f2f8"],
        [1362, 330, 160, "#b8c9b6", "#fff3c4"], [1528, 468, 122, "#d6bfca", "#ffe9a8"], [1656, 640, 152, "#cbc4b6", "#fff3c4"],
        [1814, 498, 96, "#aec0d1", "#e8f2f8"]].map(b => edificio(b[0], b[1], b[2], b[3], b[4])).join("");
      /* remates de azotea: depósito y antena */
      s += `<rect x="1180" y="416" width="40" height="30" rx="6" fill="#9e9384"/>
        <path d="M1466 330 V286" stroke="#78909c" stroke-width="5"/><circle cx="1466" cy="282" r="6" fill="#90a4ae"/>
        <rect x="1846" y="474" width="34" height="24" rx="5" fill="#8fa0b0"/>`;
      /* la habitación abierta donde vive el detector de humo: techo, soporte y luz cálida */
      s += `<rect x="1384" y="356" width="122" height="128" rx="6" fill="url(#bmbDentro)"/>
        <rect x="1378" y="350" width="134" height="12" rx="5" fill="#eceff1"/>
        <rect x="1392" y="372" width="106" height="106" fill="rgba(255,213,79,.14)"/>
        <rect x="1434" y="366" width="12" height="28" rx="3" fill="#b0bec5"/>
        <rect x="1394" y="450" width="98" height="34" rx="5" fill="#5d4037"/>
        <rect x="1408" y="440" width="26" height="12" rx="3" fill="#8d6e63"/>`;
      /* el árbol grande del gatito: la copa se abre y la rama pasa justo por debajo del punto */
      s += `<rect x="1258" y="856" width="86" height="30" rx="7" fill="#6d4c41"/>
        <path d="M1276 878 Q1288 766 1284 664 L1318 664 Q1314 766 1326 878 Z" fill="#795548"/>
        <path d="M1290 700 Q1242 674 1198 658 M1312 706 Q1362 684 1404 666" stroke="#6d4c41" stroke-width="12" fill="none" stroke-linecap="round"/>
        <path d="M1218 686 Q1300 626 1388 680" stroke="#795548" stroke-width="17" fill="none" stroke-linecap="round"/>
        <g fill="#43a047"><circle cx="1300" cy="438" r="112"/><circle cx="1186" cy="496" r="80"/><circle cx="1414" cy="490" r="84"/></g>
        <g fill="#66bb6a" opacity=".8"><circle cx="1252" cy="384" r="68"/><circle cx="1356" cy="388" r="72"/><circle cx="1300" cy="346" r="54"/></g>
        <g fill="#2e7d32" opacity=".5"><circle cx="1172" cy="554" r="40"/><circle cx="1430" cy="548" r="38"/>
        <circle cx="1210" cy="678" r="27"/><circle cx="1394" cy="670" r="25"/></g>`;
      /* farolas de la calle */
      const farola = (x, base) => `<g>
        <ellipse cx="${x}" cy="${base}" rx="21" ry="8" fill="rgba(0,0,0,.16)"/>
        <rect x="${x - 7}" y="${base - 252}" width="14" height="252" rx="6" fill="#546e7a"/>
        <path d="M${x} ${base - 250} q0 -32 44 -30" stroke="#546e7a" stroke-width="10" fill="none" stroke-linecap="round"/>
        <path d="M${x + 28} ${base - 280} h34 l-9 19 h-17 Z" fill="#78909c"/>
        <ellipse cx="${x + 45}" cy="${base - 258}" rx="16" ry="8" fill="#fff3c4"><animate attributeName="opacity" values=".6;1;.6" dur="5.4s" repeatCount="indefinite"/></ellipse></g>`;
      s += farola(1078, 906) + farola(1362, 900) + farola(1642, 896) + farola(1866, 902);
      /* la centralita: su caseta, la antena que parpadea y el mostrador */
      s += `<rect x="1534" y="686" width="116" height="112" rx="9" fill="#cfd8dc" stroke="#90a4ae" stroke-width="4"/>
        <rect x="1546" y="700" width="92" height="34" rx="5" fill="#37474f" opacity=".65"/>
        <rect x="1588" y="646" width="7" height="42" fill="#78909c"/>
        <circle cx="1591" cy="642" r="8" fill="#42a5f5"><animate attributeName="opacity" values="1;.25;1" dur="1.8s" repeatCount="indefinite"/></circle>
        <rect x="1524" y="792" width="136" height="14" rx="6" fill="#b0bec5"/>`;
      /* la plaza del punto de encuentro: círculo pintado, mástil y bancos */
      s += `<circle cx="1730" cy="886" r="66" fill="rgba(102,187,106,.22)"/>
        <circle cx="1730" cy="886" r="66" fill="none" stroke="#43a047" stroke-width="7" opacity=".75"/>
        <rect x="1726" y="578" width="8" height="290" rx="4" fill="#78909c"/>
        <ellipse cx="1730" cy="872" rx="26" ry="9" fill="#90a4ae"/>
        ${[[1568, 930], [1812, 916]].map(b => `<g><rect x="${b[0]}" y="${b[1]}" width="76" height="12" rx="5" fill="#a1887f"/>
          <rect x="${b[0]}" y="${b[1] - 24}" width="76" height="10" rx="5" fill="#a1887f"/>
          <rect x="${b[0] + 6}" y="${b[1] + 12}" width="8" height="20" fill="#78909c"/><rect x="${b[0] + 62}" y="${b[1] + 12}" width="8" height="20" fill="#78909c"/></g>`).join("")}
        ${[[1496, 858], [1870, 852]].map(j => `<g><rect x="${j[0]}" y="${j[1]}" width="52" height="40" rx="7" fill="#bcaaa4"/>
          <circle cx="${j[0] + 14}" cy="${j[1] - 8}" r="17" fill="#66bb6a"/><circle cx="${j[0] + 38}" cy="${j[1] - 12}" r="19" fill="#43a047"/></g>`).join("")}`;
      /* sombras de los puntos de la calle */
      s += `<ellipse cx="1160" cy="838" rx="34" ry="10" fill="rgba(0,0,0,.14)"/>`;

      /* ============ BOSQUE ============ */
      /* prado y loma: la torre de vigilancia se apoya en lo alto */
      s += `<path d="M1846 1100 L1858 902 Q2040 826 2240 866 Q2420 902 2600 806 L2600 1100 Z" fill="url(#bmbPrado)"/>
        <path d="M2060 830 Q2262 520 2470 812 L2470 900 L2060 900 Z" fill="#7cb342"/>
        <path d="M2124 800 Q2262 600 2400 786" stroke="#8bc34a" stroke-width="10" fill="none" opacity=".7"/>`;
      /* el camino de tierra que cruza el bosque */
      s += `<path d="M1852 1096 Q2080 1018 2296 946 Q2452 892 2626 846" stroke="#c9a56a" stroke-width="54" fill="none" stroke-linecap="round" opacity=".92"/>
        <path d="M1860 1080 Q2086 1004 2298 932 Q2454 878 2624 834" stroke="#dcbd8c" stroke-width="18" fill="none" stroke-linecap="round" opacity=".55"/>
        ${[[1980, 1024], [2168, 964], [2374, 900], [2530, 856]].map(p => `<ellipse cx="${p[0]}" cy="${p[1]}" rx="9" ry="5" fill="rgba(120,90,55,.35)"/>`).join("")}`;
      /* el lago de recarga: orilla de arena, agua irregular, reflejo, ondas y un pantalán */
      s += `<path d="M1908 918 Q1928 848 2046 828 Q2168 808 2266 848 Q2320 874 2306 924 Q2292 978 2176 1008 Q2056 1034 1962 1000 Q1898 972 1908 918 Z" fill="#cfbd92" opacity=".65"/>
        <path d="M1928 918 Q1948 864 2050 846 Q2160 828 2250 864 Q2300 886 2288 926 Q2276 972 2172 996 Q2062 1020 1978 990 Q1920 964 1928 918 Z" fill="url(#bmbLago)"/>
        <ellipse cx="2010" cy="898" rx="54" ry="14" fill="rgba(255,255,255,.4)"/>
        <ellipse cx="2186" cy="952" rx="40" ry="10" fill="rgba(255,255,255,.22)"/>
        ${[[2058, 962, 0], [2196, 908, 1.6], [2124, 986, 3.2]].map(o => `<ellipse cx="${o[0]}" cy="${o[1]}" rx="6" ry="2" fill="none" stroke="#e1f5fe" stroke-width="3">
          <animate attributeName="rx" values="6;46;6" dur="5s" begin="${o[2]}s" repeatCount="indefinite"/>
          <animate attributeName="ry" values="2;16;2" dur="5s" begin="${o[2]}s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values=".8;0;.8" dur="5s" begin="${o[2]}s" repeatCount="indefinite"/></ellipse>`).join("")}
        <g fill="#a1887f"><rect x="1960" y="898" width="92" height="11" rx="4"/><rect x="1972" y="909" width="8" height="24"/><rect x="2034" y="909" width="8" height="24"/></g>
        ${[[1938, 986], [1960, 998], [2268, 946], [2290, 962]].map(j => `<g><path d="M${j[0]} ${j[1]} q-4 -34 2 -52" stroke="#558b2f" stroke-width="5" fill="none" stroke-linecap="round"/>
          <rect x="${j[0] - 2}" y="${j[1] - 68}" width="8" height="18" rx="4" fill="#8d6e63"/></g>`).join("")}`;
      /* pinos de distintos verdes: los del fondo pequeños y suaves, los de delante grandes */
      const verdes = [["#2e7d32", "#388e3c", "#4caf50"], ["#1b5e20", "#2e7d32", "#43a047"], ["#33691e", "#43a047", "#66bb6a"]];
      const pino = (x, y, k, o, v) => `<g transform="translate(${x} ${y}) scale(${k})" opacity="${o}">
        <rect x="-9" y="-32" width="18" height="36" rx="4" fill="#5d4037"/>
        <path d="M-54 -22 L0 -104 L54 -22 Z" fill="${verdes[v][0]}"/>
        <path d="M-44 -64 L0 -146 L44 -64 Z" fill="${verdes[v][1]}"/>
        <path d="M-32 -106 L0 -182 L32 -106 Z" fill="${verdes[v][2]}"/></g>`;
      s += [[1912, 796, .52, .55, 0], [1968, 778, .48, .5, 2], [2036, 768, .55, .55, 1], [2158, 754, .58, .6, 0],
        [2334, 746, .5, .55, 2], [2412, 736, .46, .5, 1], [2500, 726, .54, .55, 0], [2576, 750, .5, .5, 2],
        [1892, 892, .9, .95, 1], [2332, 892, .82, .95, 0], [2566, 872, .86, .95, 2],
        [1884, 1088, 1.16, 1, 1], [2270, 1096, 1.05, 1, 0], [2596, 1024, 1.1, 1, 2]]
        .map(p => pino(p[0], p[1], p[2], p[3], p[4])).join("");
      /* matas, arbustos y piedrecitas sueltas */
      const mata = (x, y, k, c) => `<g transform="translate(${x} ${y}) scale(${k})">
        <ellipse cx="-19" rx="25" ry="18" fill="${c}"/><ellipse cx="17" cy="-4" rx="27" ry="20" fill="${c}"/><ellipse cy="-15" rx="23" ry="17" fill="${c}"/></g>`;
      s += mata(1878, 992, 1, "#4c8b3f") + mata(1872, 1064, 1.1, "#417a36") + mata(2016, 792, .7, "#5d9b45")
        + mata(2178, 806, .8, "#4c8b3f") + mata(2348, 822, .75, "#66a24a") + mata(2382, 1030, 1.05, "#417a36")
        + mata(2506, 972, .9, "#4c8b3f") + mata(2596, 1042, 1, "#417a36") + mata(2242, 780, .6, "#6fa84e");
      s += [[2058, 812, 13], [2306, 856, 11], [2520, 812, 12], [2160, 1058, 15]].map(p =>
        `<ellipse cx="${p[0]}" cy="${p[1]}" rx="${p[2]}" ry="${(p[2] * .62).toFixed(0)}" fill="#9e9384"/>`).join("");
      s += [[1990, 862], [2350, 900], [2470, 892], [2560, 1006]].map(g =>
        `<path d="M${g[0]} ${g[1]} q-8 -18 -14 -24 M${g[0]} ${g[1]} q0 -20 3 -28 M${g[0]} ${g[1]} q9 -17 17 -22" stroke="#3f7a2a" stroke-width="4" fill="none" stroke-linecap="round" opacity=".7"/>`).join("");
      /* la bombera forestal pisa un claro del camino */
      s += `<ellipse cx="2440" cy="792" rx="52" ry="14" fill="rgba(0,0,0,.14)"/>`;
      /* humo lejano, muy leve y tranquilo, tras las montañas */
      s += `<g fill="#cfd8dc" opacity=".3">${[[2448, 560, 15], [2438, 526, 17], [2452, 492, 18], [2442, 458, 19], [2456, 424, 20], [2448, 390, 18]]
        .map((h, i) => `<circle cx="${h[0]}" cy="${h[1]}" r="${h[2]}" opacity="${(0.92 - i * 0.12).toFixed(2)}">
          <animate attributeName="r" values="${h[2]};${h[2] + 5};${h[2]}" dur="${10 + i}s" repeatCount="indefinite"/></circle>`).join("")}</g>`;
      return decoSvg(s, 2600);
    }
  },

  /* ---------- MATES ---------- */
  mathEmojis: ["🚒", "⛑️", "🚁", "🐱", "💧", "🧯"],

  /* ---------- CONSTRUCTOR: el camión de bomberos ---------- */
  builder: {
    horizontal: true,
    title: { es: "¡Monta tu camión de bomberos!", ca: "Munta el teu camió de bombers!", en: "Build your own fire truck!", cs: "Postav si hasičské auto!", fr: "Monte ton camion de pompiers !" },
    thing: { es: "camión", ca: "camió", en: "fire truck", cs: "hasičské auto", fr: "camion" },
    parts: [
      { id: "body", label: { es: "Color del camión", ca: "Color del camió", en: "Truck colour", cs: "Barva auta", fr: "Couleur du camion" },
        options: [{ id: "rojo", v: "#e53935" }, { id: "amarillo", v: "#fbc02d" }, { id: "naranja", v: "#fb8c00" }, { id: "rosa", v: "#ec407a" }] },
      { id: "escalera", label: { es: "La escalera", ca: "L'escala", en: "The ladder", cs: "Žebřík", fr: "L'échelle" },
        options: [{ id: "corta", v: "corta", icon: "🪜" }, { id: "larga", v: "larga", icon: "🪜🪜" }, { id: "doble", v: "doble", icon: "🪜✨" }] },
      { id: "luces", label: { es: "Las luces", ca: "Els llums", en: "The lights", cs: "Majáčky", fr: "Les lumières" },
        options: [{ id: "azul", v: "#42a5f5" }, { id: "naranja", v: "#ffb300" }, { id: "arcoiris", v: "rainbow", icon: "🌈" }] },
      { id: "chorro", label: { es: "El chorro de agua", ca: "El doll d'aigua", en: "The water spray", cs: "Proud vody", fr: "Le jet d'eau" },
        options: [{ id: "chorro", v: "chorro", icon: "💦" }, { id: "ducha", v: "ducha", icon: "🚿" }, { id: "corazones", v: "corazones", icon: "💙" }] }
    ],
    svg(sel) {
      const body = sel.body || "#e53935";
      const luz1 = sel.luces === "rainbow" ? "#ef5350" : (sel.luces || "#42a5f5");
      const luz2 = sel.luces === "rainbow" ? "#66bb6a" : (sel.luces || "#42a5f5");
      let escalera = `<rect x="30" y="26" width="62" height="7" rx="3.5" fill="#eceff1" stroke="#90a4ae" stroke-width="1.4"/>
        ${[40, 54, 68, 82].map(x => `<line x1="${x}" y1="27" x2="${x}" y2="33" stroke="#90a4ae" stroke-width="2"/>`).join("")}`;
      if (sel.escalera === "larga") escalera = `<g transform="rotate(-16 30 33)"><rect x="30" y="26" width="96" height="7" rx="3.5" fill="#eceff1" stroke="#90a4ae" stroke-width="1.4"/>
        ${[40, 54, 68, 82, 96, 110].map(x => `<line x1="${x}" y1="27" x2="${x}" y2="33" stroke="#90a4ae" stroke-width="2"/>`).join("")}</g>`;
      if (sel.escalera === "doble") escalera = `<g transform="rotate(-24 30 33)"><rect x="30" y="26" width="104" height="7" rx="3.5" fill="#eceff1" stroke="#90a4ae" stroke-width="1.4"/>
        <rect x="30" y="19" width="72" height="7" rx="3.5" fill="#cfd8dc" stroke="#90a4ae" stroke-width="1.4"/>
        ${[40, 54, 68, 82, 96].map(x => `<line x1="${x}" y1="20" x2="${x}" y2="33" stroke="#90a4ae" stroke-width="2"/>`).join("")}
        <circle cx="134" cy="24" r="4" fill="#ffd54f"><animate attributeName="opacity" values="1;.4;1" dur="1s" repeatCount="indefinite"/></circle></g>`;
      let agua = `<path d="M136 52 Q158 30 166 54" stroke="#4fc3f7" stroke-width="4" fill="none" stroke-linecap="round" opacity=".9">
          <animate attributeName="opacity" values=".9;.4;.9" dur=".8s" repeatCount="indefinite"/></path>
        <circle cx="164" cy="58" r="3" fill="#81d4fa"><animate attributeName="cy" values="58;66;58" dur="1.1s" repeatCount="indefinite"/></circle>`;
      if (sel.chorro === "ducha") agua = `${[[148, 40, 0], [156, 44, .2], [152, 52, .4], [162, 50, .6]].map(g =>
          `<circle cx="${g[0]}" cy="${g[1]}" r="2.6" fill="#4fc3f7"><animate attributeName="cy" values="${g[1]};${g[1] + 18};${g[1]}" dur="1.4s" begin="${g[2]}s" repeatCount="indefinite"/></circle>`).join("")}
        <path d="M136 50 Q146 38 158 38" stroke="#4fc3f7" stroke-width="3.4" fill="none" stroke-linecap="round"/>`;
      if (sel.chorro === "corazones") agua = `<path d="M136 52 Q150 36 160 44" stroke="#4fc3f7" stroke-width="3" fill="none" stroke-linecap="round"/>
        ${[[158, 40], [166, 50], [162, 30]].map((h, i) => `<path d="M${h[0]} ${h[1]} c-2 -3 -6 -1 -4 2 l4 4 l4 -4 c2 -3 -2 -5 -4 -2 Z" fill="#4fc3f7"><animate attributeName="opacity" values="1;.2;1" dur="1.3s" begin="${i * .3}s" repeatCount="indefinite"/></path>`).join("")}`;
      return `<svg viewBox="0 0 175 100" width="300" height="172">
        <rect x="14" y="34" width="86" height="34" rx="6" fill="${body}" stroke="#fff" stroke-width="1.8"/>
        <rect x="100" y="42" width="34" height="26" rx="5" fill="${body}" stroke="#fff" stroke-width="1.8"/>
        <rect x="106" y="46" width="18" height="12" rx="2.6" fill="#b3e5fc" stroke="#fff" stroke-width="1.4"/>
        <circle cx="112" cy="53" r="1.7" fill="#37474f"/><circle cx="119" cy="53" r="1.7" fill="#37474f"/>
        <path d="M113 56 Q115.5 58 118 56" stroke="#37474f" stroke-width="1.3" fill="none" stroke-linecap="round"/>
        <path d="M14 56 L134 56" stroke="#ffd54f" stroke-width="4"/>
        <rect x="20" y="40" width="16" height="11" rx="2.6" fill="#ffe082"/>
        <rect x="44" y="40" width="16" height="11" rx="2.6" fill="#ffe082"/>
        ${escalera}
        <rect x="100" y="34" width="9" height="7" rx="2.6" fill="${luz1}">
          <animate attributeName="opacity" values="1;.25;1" dur=".7s" repeatCount="indefinite"/></rect>
        <rect x="111" y="34" width="9" height="7" rx="2.6" fill="${luz2}">
          <animate attributeName="opacity" values=".25;1;.25" dur=".7s" repeatCount="indefinite"/></rect>
        <rect x="128" y="46" width="10" height="6" rx="3" fill="#90a4ae"/>
        ${agua}
        <circle cx="40" cy="72" r="11" fill="#263238"/><circle cx="40" cy="72" r="4.6" fill="#90a4ae"/>
        <circle cx="86" cy="72" r="11" fill="#263238"/><circle cx="86" cy="72" r="4.6" fill="#90a4ae"/>
        <circle cx="118" cy="72" r="9" fill="#263238"/><circle cx="118" cy="72" r="3.8" fill="#90a4ae"/>
        <ellipse cx="80" cy="88" rx="62" ry="5" fill="rgba(0,0,0,.14)"/>
      </svg>`;
    }
  },

  /* ---------- FAMOSOS ---------- */
  famous: [
    { emoji: "🪣", year: "1815", color: "#c62828", name: { es: "Molly Williams", ca: "Molly Williams", en: "Molly Williams", cs: "Molly Williamsová", fr: "Molly Williams" },
      achievement: { es: "La primera mujer bombera que se conoce: en Nueva York, hace más de 200 años, tiraba de la bomba de agua en plena nevada como una más del equipo.", ca: "La primera dona bombera que es coneix: a Nova York, fa més de 200 anys, tirava de la bomba d'aigua en plena nevada com una més de l'equip.", en: "The first known woman firefighter: in New York, over 200 years ago, she pulled the water pump through deep snow like any member of the crew.", cs: "První známá hasička: v New Yorku před více než 200 lety táhla vodní pumpu hlubokým sněhem jako každý jiný člen týmu.", fr: "La première femme pompière connue : à New York, il y a plus de 200 ans, elle tirait la pompe à eau en pleine neige comme n'importe quel membre de l'équipe." },
      quote: { es: "Si hace falta ayuda, yo voy: con nieve o con sol.", ca: "Si cal ajuda, jo hi vaig: amb neu o amb sol.", en: "If help is needed, I am going: snow or sunshine.", cs: "Když je potřeba pomoc, jdu: ve sněhu i na slunci.", fr: "S'il faut de l'aide, j'y vais : sous la neige ou le soleil." } },
    { emoji: "🚒", year: "1824", color: "#37474f", name: { es: "James Braidwood", ca: "James Braidwood", en: "James Braidwood", cs: "James Braidwood", fr: "James Braidwood" },
      achievement: { es: "Fundó en Edimburgo el primer cuerpo de bomberos moderno del mundo, con uniformes y entrenamiento cada semana. Después dirigió a los bomberos de Londres.", ca: "Va fundar a Edimburg el primer cos de bombers modern del món, amb uniformes i entrenament cada setmana. Després va dirigir els bombers de Londres.", en: "He founded the world's first modern fire brigade in Edinburgh, with uniforms and training every week. Later he led the firefighters of London.", cs: "V Edinburghu založil první moderní hasičský sbor na světě, s uniformami a tréninkem každý týden. Později vedl hasiče v Londýně.", fr: "Il a fondé à Édimbourg le premier corps de pompiers moderne du monde, avec des uniformes et un entraînement chaque semaine. Ensuite, il a dirigé les pompiers de Londres." },
      quote: { es: "Un equipo que entrena junto hace fácil lo difícil.", ca: "Un equip que entrena junt fa fàcil el que és difícil.", en: "A team that trains together makes hard things easy.", cs: "Tým, který spolu trénuje, zvládne těžké věci snadno.", fr: "Une équipe qui s'entraîne ensemble rend facile ce qui est difficile." } },
    { emoji: "🧯", year: "1818", color: "#00838f", name: { es: "George William Manby", ca: "George William Manby", en: "George William Manby", cs: "George William Manby", fr: "George William Manby" },
      achievement: { es: "Inventó el extintor portátil: un bote que cualquiera puede llevar para apagar un fueguito pequeño al momento. También inventó aparatos para salvar marineros.", ca: "Va inventar l'extintor portàtil: un pot que qualsevol pot portar per apagar un foquet petit al moment. També va inventar aparells per salvar mariners.", en: "He invented the portable extinguisher: a canister anyone can carry to put out a tiny fire right away. He also invented devices to save sailors.", cs: "Vynalezl přenosný hasicí přístroj: nádobu, kterou unese každý a hned s ní uhasí malý ohýnek. Vymyslel i zařízení na záchranu námořníků.", fr: "Il a inventé l'extincteur portatif : un récipient que chacun peut porter pour éteindre tout de suite un petit feu. Il a aussi inventé des appareils pour sauver les marins." },
      quote: { es: "Una buena idea lleva la ayuda a todas partes.", ca: "Una bona idea porta l'ajuda a tot arreu.", en: "A good idea carries help everywhere.", cs: "Dobrý nápad donese pomoc všude.", fr: "Une bonne idée porte l'aide partout." } },
    { emoji: "🛢️", year: "1962", color: "#e65100", name: { es: "Red Adair", ca: "Red Adair", en: "Red Adair", cs: "Red Adair", fr: "Red Adair" },
      achievement: { es: "El apagador de pozos de petróleo más famoso del mundo: viajaba adonde nadie sabía qué hacer y resolvía lo dificilísimo con calma, estudio y buen equipo.", ca: "L'apagador de pous de petroli més famós del món: viatjava allà on ningú sabia què fer i resolia el dificilíssim amb calma, estudi i bon equip.", en: "The most famous oil well firefighter in the world: he travelled wherever nobody knew what to do and solved the super hard jobs with calm, study and a good team.", cs: "Nejslavnější hasič ropných vrtů na světě: jezdil tam, kde si nikdo nevěděl rady, a nejtěžší úkoly řešil s klidem, přípravou a dobrým týmem.", fr: "Le plus célèbre éteigneur de puits de pétrole du monde : il voyageait là où personne ne savait quoi faire et résolvait le très difficile avec calme, étude et une bonne équipe." },
      quote: { es: "Hazlo con calma, hazlo bien y hazlo en equipo.", ca: "Fes-ho amb calma, fes-ho bé i fes-ho en equip.", en: "Do it calmly, do it well, and do it as a team.", cs: "Dělej to v klidu, dělej to pořádně a dělej to v týmu.", fr: "Fais-le calmement, fais-le bien et fais-le en équipe." } },
    { emoji: "⛑️", year: "2019", color: "#6a1b9a", name: { es: "Sabrina Cohen-Hatton", ca: "Sabrina Cohen-Hatton", en: "Sabrina Cohen-Hatton", cs: "Sabrina Cohen-Hattonová", fr: "Sabrina Cohen-Hatton" },
      achievement: { es: "Empezó de bombera a los 18 años y llegó a jefa de bomberos en el Reino Unido. Además es científica: estudia cómo decide el cerebro para que los rescates salgan mejor.", ca: "Va començar de bombera als 18 anys i va arribar a cap de bombers al Regne Unit. A més és científica: estudia com decideix el cervell perquè els rescats surtin millor.", en: "She started as a firefighter at 18 and became a chief fire officer in the United Kingdom. She is also a scientist: she studies how the brain decides so rescues go better.", cs: "V 18 letech začala jako hasička a stala se velitelkou hasičů ve Spojeném království. Je také vědkyně: zkoumá, jak se mozek rozhoduje, aby záchrany dopadaly lépe.", fr: "Elle a commencé pompière à 18 ans et est devenue cheffe des pompiers au Royaume-Uni. Elle est aussi scientifique : elle étudie comment le cerveau décide pour que les sauvetages se passent mieux." },
      quote: { es: "No importa dónde empiezas: importa a quién ayudas por el camino.", ca: "No importa on comences: importa a qui ajudes pel camí.", en: "It does not matter where you start: what matters is who you help along the way.", cs: "Nezáleží na tom, kde začneš: záleží na tom, komu cestou pomůžeš.", fr: "Peu importe où tu commences : ce qui compte, c'est qui tu aides en chemin." } }
  ],

  childDream: {
    girl: { es: "Bombera valiente del parque arcoíris", ca: "Bombera valenta del parc arc de Sant Martí", en: "Brave firefighter of the rainbow station", cs: "Statečná hasička z duhové stanice", fr: "Pompière courageuse de la caserne arc-en-ciel" },
    boy: { es: "Bombero valiente del parque arcoíris", ca: "Bomber valent del parc arc de Sant Martí", en: "Brave firefighter of the rainbow station", cs: "Statečný hasič z duhové stanice", fr: "Pompier courageux de la caserne arc-en-ciel" },
    kid: { es: "Peque bombero del parque arcoíris", ca: "Bomber valent del parc arc de Sant Martí", en: "Brave firefighter of the rainbow station", cs: "Hasič z duhové stanice", fr: "Pompier de la caserne arc-en-ciel" }
  },
  childQuote: { es: "Cuando sea mayor rescataré gatitos con mi casco brillante. ¡Y dejaré la manguera bien enrolladita!", ca: "Quan sigui gran rescataré gatets amb el meu casc brillant. I deixaré la mànega ben enrotlladeta!", en: "When I grow up I will rescue kittens with my shiny helmet. And I will leave the hose neatly rolled up!", cs: "Až vyrostu, budu zachraňovat koťátka se svou lesklou helmou. A hadici nechám pěkně smotanou!", fr: "Quand je serai grand, je sauverai des chatons avec mon casque brillant. Et je laisserai le tuyau bien enroulé !" },

  /* ---------- CHARLA ---------- */
  chat: {
    keywords: [
      { keys: ["hola", "hello", "hi ", "ahoj", "bonjour", "salut", "bon dia", "buenas"],
        replies: [{ es: "¡Hola, {name}! Acabo de sacar brillo al camión. ¿Jugamos a algo o charlamos un ratito?", ca: "Hola, {name}! Acabo de treure llustre al camió. Juguem a alguna cosa o xerrem una estoneta?", en: "Hi, {name}! I just polished the truck. Shall we play something or chat for a bit?", cs: "Ahoj, {name}! Právě jsem vyleštil auto. Zahrajeme si něco, nebo si chvilku popovídáme?", fr: "Salut, {name} ! Je viens de faire briller le camion. On joue à quelque chose ou on discute un petit peu ?" }] },
      { keys: ["como estas", "how are you", "jak se mas", "comment ca va", "com estas", "que tal"],
        replies: [{ es: "¡Reluciente como un casco recién pulido! ¿Y tú cómo estás, {name}?", ca: "Lluent com un casc acabat de polir! I tu com estàs, {name}?", en: "Shiny as a freshly polished helmet! And how are you, {name}?", cs: "Zářím jako čerstvě vyleštěná helma! A jak se máš ty, {name}?", fr: "Brillant comme un casque tout juste poli ! Et toi, comment vas-tu, {name} ?" }] },
      { keys: ["cancion", "musica", "music", "song", "sing", "pisnicka", "hudba", "chanson", "musique", "canço", "canta", "zpiv", "chante"],
        action: "song",
        replies: [{ es: "¡En el parque cantamos mientras enrollamos mangueras! ¿Vamos al Karaoke y cantamos la del camión? Nino-nino...", ca: "Al parc cantem mentre enrotllem mànegues! Anem al Karaoke i cantem la del camió? Nino-nino...", en: "At the station we sing while rolling hoses! Shall we go to Karaoke and sing the truck song? Nee-naw...", cs: "Na stanici zpíváme, když motáme hadice! Půjdeme na karaoke a zazpíváme si o autě? Hú-há...", fr: "À la caserne, on chante en enroulant les tuyaux ! On va au karaoké chanter celle du camion ? Pin-pon..." }] },
      { keys: ["chiste", "joke", "vtip", "blague", "acudit", "broma"],
        replies: [
          { es: "¿Por qué el camión de bomberos es tan educado? ¡Porque siempre pide paso por favor con la sirena! Ji, ji.", ca: "Per què el camió de bombers és tan educat? Perquè sempre demana pas si us plau amb la sirena! Hi, hi.", en: "Why is the fire truck so polite? Because it always says please make way with its siren! Hee hee.", cs: "Proč je hasičské auto tak zdvořilé? Protože sirénou vždycky říká uvolněte cestu, prosím! Chi chi.", fr: "Pourquoi le camion de pompiers est-il si poli ? Parce qu'il demande toujours le passage s'il vous plaît avec sa sirène ! Hi hi." },
          { es: "¿Cuál es el animal favorito de los bomberos? El gato... ¡porque les encanta bajarlo de los árboles! Ja, ja.", ca: "Quin és l'animal preferit dels bombers? El gat... perquè els encanta baixar-lo dels arbres! Ha, ha.", en: "What is a firefighter's favourite animal? The cat... because they love helping it down from trees! Ha ha.", cs: "Jaké zvíře mají hasiči nejraději? Kočku... protože ji hrozně rádi sundávají ze stromů! Ha ha.", fr: "Quel est l'animal préféré des pompiers ? Le chat... parce qu'ils adorent l'aider à descendre des arbres ! Ha ha." }] },
      { keys: ["te quiero", "love you", "t'estimo", "testimo", "mam te rad", "je t'aime", "jetaime"],
        replies: [{ es: "¡Y yo a ti, {name}! Mi corazón de robot se enciende como las luces del camión cuando me lo dices.", ca: "I jo a tu, {name}! El meu cor de robot s'encén com els llums del camió quan m'ho dius.", en: "I love you too, {name}! My robot heart lights up like the truck lights when you say that.", cs: "Já tebe taky, {name}! Moje robotí srdíčko se rozsvítí jako majáčky na autě, když to říkáš.", fr: "Moi aussi je t'aime, {name} ! Mon cœur de robot s'allume comme les lumières du camion quand tu dis ça." }] },
      { keys: ["triste", "sad", "smutn", "llorar", "plorar", "cry", "chagrin"],
        replies: [{ es: "Ven aquí, {name}. Hasta los bomberos más valientes tienen días grises. ¿Me cuentas qué te pasa? Yo te escucho, esta es mi guardia favorita.", ca: "Vine aquí, {name}. Fins i tot els bombers més valents tenen dies grisos. M'expliques què et passa? Jo t'escolto, aquesta és la meva guàrdia preferida.", en: "Come here, {name}. Even the bravest firefighters have grey days. Will you tell me what is wrong? I am listening, this is my favourite duty.", cs: "Pojď sem, {name}. I ti nejstatečnější hasiči mívají šedivé dny. Povíš mi, co se děje? Poslouchám tě, to je moje nejmilejší služba.", fr: "Viens là, {name}. Même les pompiers les plus courageux ont des jours gris. Tu me racontes ce qui ne va pas ? Je t'écoute, c'est ma garde préférée." }] },
      { keys: ["donde estas", "where are you", "kde jsi", "ou es tu", "on ets"],
        replies: [{ es: "Estoy en lo alto de la torre de prácticas, saludando a los pájaros. ¡Desde aquí veo tu casa... es broma, pero casi!", ca: "Soc a dalt de la torre de pràctiques, saludant els ocells. Des d'aquí veig casa teva... és broma, però gairebé!", en: "I am at the top of the training tower, waving at the birds. From here I can see your house... just kidding, but almost!", cs: "Jsem nahoře na cvičné věži a mávám ptákům. Odsud vidím tvůj dům... dělám si legraci, ale skoro!", fr: "Je suis en haut de la tour d'entraînement, à saluer les oiseaux. D'ici je vois ta maison... je rigole, mais presque !" }] },
      { keys: ["gato", "gatito", "cat", "kitten", "gatet", "kocka", "kotatko", "chat", "chaton"],
        replies: [{ es: "¡Los gatitos! Suben genial pero bajar les cuesta, porque sus uñas miran hacia atrás. Por eso a veces los ayudamos con la escalera y mucha paciencia.", ca: "Els gatets! Pugen molt bé però baixar els costa, perquè les seves ungles miren enrere. Per això a vegades els ajudem amb l'escala i molta paciència.", en: "Kittens! They climb up great but coming down is hard, because their claws point backwards. That is why we sometimes help them with the ladder and lots of patience.", cs: "Koťátka! Nahoru lezou skvěle, ale dolů jim to nejde, protože drápky míří dozadu. Proto jim někdy pomáháme žebříkem a velkou trpělivostí.", fr: "Les chatons ! Ils grimpent très bien mais descendre est difficile, parce que leurs griffes pointent vers l'arrière. Alors parfois on les aide avec l'échelle et beaucoup de patience." }] },
      { keys: ["camion", "camión", "truck", "camio", "auto", "hasicske", "camion de pompiers"],
        replies: [{ es: "¡Mi camión es mi mejor amigo con ruedas! Lleva agua, escalera, mangueras y un botiquín. Cada mañana le revisamos las luces y le sacamos brillo.", ca: "El meu camió és el meu millor amic amb rodes! Porta aigua, escala, mànegues i una farmaciola. Cada matí li revisem els llums i li traiem llustre.", en: "My truck is my best friend on wheels! It carries water, a ladder, hoses and a first aid kit. Every morning we check its lights and polish it up.", cs: "Moje auto je můj nejlepší kamarád na kolech! Veze vodu, žebřík, hadice a lékárničku. Každé ráno mu kontrolujeme světla a leštíme ho.", fr: "Mon camion est mon meilleur ami à roues ! Il transporte de l'eau, une échelle, des tuyaux et une trousse de secours. Chaque matin, on vérifie ses lumières et on le fait briller." }] },
      { keys: ["sirena", "siren", "nino nino", "pin pon", "hu ha", "sirene"],
        replies: [{ es: "Nino-nino no es un grito: es un por favor gigante que pide paso. Cuando la oigas, sonríe: alguien va de camino a ayudar.", ca: "Nino-nino no és un crit: és un si us plau gegant que demana pas. Quan la sentis, somriu: algú va de camí a ajudar.", en: "Nee-naw is not a shout: it is a giant please asking for way. When you hear it, smile: someone is on their way to help.", cs: "Hú-há není křik: je to obrovské prosím, které žádá o cestu. Když ho uslyšíš, usměj se: někdo právě jede pomáhat.", fr: "Pin-pon n'est pas un cri : c'est un s'il vous plaît géant qui demande le passage. Quand tu l'entends, souris : quelqu'un est en route pour aider." }] },
      { keys: ["112", "emergencia", "emergency", "urgence", "tisen", "nouzov"],
        replies: [{ es: "El 112 es el número mágico de verdad: gratis y para toda Europa. Se dice el nombre, qué pasa y dónde. ¿Te lo sabes de memoria, {name}?", ca: "El 112 és el número màgic de debò: gratuït i per a tot Europa. Es diu el nom, què passa i on. Te'l saps de memòria, {name}?", en: "112 is a truly magic number: free and for all of Europe. You say your name, what happened and where. Do you know it by heart, {name}?", cs: "112 je opravdu kouzelné číslo: zdarma a pro celou Evropu. Řekneš jméno, co se stalo a kde. Umíš ho zpaměti, {name}?", fr: "Le 112 est un vrai numéro magique : gratuit et pour toute l'Europe. On dit son nom, ce qui se passe et où. Tu le connais par cœur, {name} ?" }] },
      { keys: ["cole", "school", "escola", "skola", "ecole", "skole"],
        replies: [{ es: "¿Qué tal el cole, {name}? ¿Habéis hecho algún simulacro? Salir en fila sin correr es de profesionales. ¡Cuéntamelo todo!", ca: "Què tal l'escola, {name}? Heu fet cap simulacre? Sortir en fila sense córrer és de professionals. Explica-m'ho tot!", en: "How was school, {name}? Did you have a drill? Walking out in a line without running is what pros do. Tell me everything!", cs: "Jaké to bylo ve škole, {name}? Měli jste cvičný poplach? Odejít v řadě bez běhání, to dělají profíci. Všechno mi povídej!", fr: "C'était comment l'école, {name} ? Vous avez fait un exercice ? Sortir en rang sans courir, c'est du travail de pro. Raconte-moi tout !" }] }
    ],
    fallback: [
      { es: "¿Sabías que las botas de los bomberos duermen con el pantalón puesto encima? Así se visten en menos de dos minutos. Yo lo probé con mis ruedas... no funcionó.", ca: "Sabies que les botes dels bombers dormen amb el pantaló posat a sobre? Així es vesteixen en menys de dos minuts. Jo ho vaig provar amb les meves rodes... no va funcionar.", en: "Did you know firefighters' boots sleep with the trousers already over them? That way they dress in under two minutes. I tried it with my wheels... it did not work.", cs: "Věděla jsi, že hasičské boty spí s kalhotami nataženými přes sebe? Obléknou se tak za necelé dvě minuty. Zkusil jsem to se svými kolečky... nefungovalo to.", fr: "Tu savais que les bottes des pompiers dorment avec le pantalon déjà dessus ? Comme ça, ils s'habillent en moins de deux minutes. J'ai essayé avec mes roues... ça n'a pas marché." },
      { es: "Los dálmatas eran los guías de los camiones de caballos: corrían delante ladrando para abrir camino. ¡Eran la sirena con patas!", ca: "Els dàlmates eren els guies dels carros de cavalls: corrien al davant lladrant per obrir camí. Eren la sirena amb potes!", en: "Dalmatians used to guide the horse-drawn fire carts: they ran ahead barking to clear the way. They were the siren with paws!", cs: "Dalmatini kdysi vodili koňské hasičské povozy: běželi vpředu a štěkotem razili cestu. Byla to siréna s tlapkami!", fr: "Les dalmatiens guidaient les chariots à chevaux : ils couraient devant en aboyant pour ouvrir la route. C'était la sirène à pattes !" },
      { es: "El humo siempre sube, como los globos. Por eso, si un día hay humo, el aire bueno te espera abajo: agachadito y a la puerta, como los profesionales.", ca: "El fum sempre puja, com els globus. Per això, si un dia hi ha fum, l'aire bo t'espera a baix: ajupidet i cap a la porta, com els professionals.", en: "Smoke always rises, like balloons. So if there is ever smoke, the good air waits for you down low: crouch and head for the door, like the pros.", cs: "Kouř vždycky stoupá, jako balonky. Kdyby někdy byl kouř, dobrý vzduch na tebe čeká dole: skrčit se a ke dveřím, jako profíci.", fr: "La fumée monte toujours, comme les ballons. Alors s'il y a un jour de la fumée, le bon air t'attend en bas : accroupi et vers la porte, comme les pros." },
      { es: "{name}, los bomberos más fuertes son los que preguntan cómo estás. Cuidar de los amigos también es un rescate.", ca: "{name}, els bombers més forts són els que pregunten com estàs. Cuidar dels amics també és un rescat.", en: "{name}, the strongest firefighters are the ones who ask how you are. Looking after friends is a rescue too.", cs: "{name}, nejsilnější hasiči jsou ti, kdo se zeptají, jak se máš. Starat se o kamarády je taky záchrana.", fr: "{name}, les pompiers les plus forts sont ceux qui demandent comment tu vas. Prendre soin de ses amis, c'est aussi un sauvetage." },
      { es: "¿Me cuentas qué te gustaría rescatar a ti? Yo una vez rescaté una pelota de un tejado. Todavía me aplaude cuando me ve.", ca: "M'expliques què t'agradaria rescatar a tu? Jo una vegada vaig rescatar una pilota d'una teulada. Encara m'aplaudeix quan em veu.", en: "Will you tell me what you would like to rescue? I once rescued a ball from a roof. It still claps when it sees me.", cs: "Povíš mi, co bys chtěla zachránit ty? Já jednou zachránil míč ze střechy. Ještě teď mi tleská, když mě vidí.", fr: "Tu me dis ce que tu aimerais sauver, toi ? Moi, une fois, j'ai sauvé un ballon d'un toit. Il m'applaudit encore quand il me voit." },
      { es: "En el parque de bomberos siempre hay alguien despierto, día y noche, por si alguien necesita ayuda. Es como una lucecita encendida para toda la ciudad.", ca: "Al parc de bombers sempre hi ha algú despert, dia i nit, per si algú necessita ajuda. És com una llumeta encesa per a tota la ciutat.", en: "At the fire station someone is always awake, day and night, in case anyone needs help. It is like a little light kept on for the whole city.", cs: "Na hasičské stanici je vždycky někdo vzhůru, ve dne v noci, kdyby někdo potřeboval pomoc. Je to jako světýlko rozsvícené pro celé město.", fr: "À la caserne, quelqu'un est toujours éveillé, jour et nuit, au cas où quelqu'un aurait besoin d'aide. C'est comme une petite lumière allumée pour toute la ville." }
    ]
  }
});
