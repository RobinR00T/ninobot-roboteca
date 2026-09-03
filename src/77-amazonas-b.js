"use strict";
/* ============================================================
   Contenido del AMAZONAS (parte B): historias ramificadas,
   canciones, traductor, mapa de exploración y charla.
   ============================================================ */

Object.assign(THEMES.amazonas.content, {

  /* ---------- HISTORIAS (ramifican de verdad) ---------- */
  stories: [
    {
      id: "delfin", emoji: "🐬", start: "n1",
      title: { es: "El delfín rosado", ca: "El dofí rosat", en: "The Pink Dolphin", cs: "Růžový delfín", fr: "Le dauphin rose" },
      nodes: {
        n1: {
          text: { es: "Al amanecer, un delfín rosado asoma junto a vuestra canoa, {name}: 'La tormenta tiró un árbol y cerró el arroyo de mi laguna. ¡No puedo volver con mi familia!'", ca: "A l'alba, un dofí rosat treu el cap al costat de la vostra canoa, {name}: 'La tempesta va tombar un arbre i va tancar el rierol de la meva llacuna. No puc tornar amb la meva família!'", en: "At sunrise, a pink dolphin pops up next to your canoe, {name}: 'The storm knocked down a tree and blocked the stream to my lagoon. I cannot get back to my family!'", cs: "Za úsvitu se u vaší kánoe vynoří růžový delfín, {name}: 'Bouřka povalila strom a zatarasila potok k mé laguně. Nemůžu se vrátit ke své rodině!'", fr: "Au lever du soleil, un dauphin rose apparaît près de votre canoë, {name} : « La tempête a fait tomber un arbre et a fermé le ruisseau de mon lagon. Je ne peux plus retrouver ma famille ! »" },
          choices: [
            { t: { es: "¡Vamos en canoa hasta el árbol!", ca: "Anem amb canoa fins a l'arbre!", en: "Let's paddle to the tree!", cs: "Poplujeme kánoí ke stromu!", fr: "Allons en canoë jusqu'à l'arbre !" }, go: "n1b" },
            { t: { es: "Pedimos ayuda al caimán fuerte", ca: "Demanem ajuda al caiman fort", en: "Let's ask the strong caiman for help", cs: "Požádáme o pomoc silného kajmana", fr: "Demandons de l'aide au caïman costaud" }, go: "n2b" }
          ]
        },
        n1b: {
          text: { es: "Remáis río abajo. Un tucán os guía desde el aire moviendo su pico de colores: '¡Por aquí, por aquí!'", ca: "Remeu riu avall. Un tucà us guia des de l'aire movent el seu bec de colors: 'Per aquí, per aquí!'", en: "You paddle downstream. A toucan guides you from the air, waving its colourful beak: 'This way, this way!'", cs: "Pádlujete po řece. Tukan vás vede ze vzduchu a mává barevným zobákem: 'Tudy, tudy!'", fr: "Vous pagayez sur la rivière. Un toucan vous guide depuis le ciel en agitant son bec coloré : « Par ici, par ici ! »" },
          choices: [
            { t: { es: "Seguir al tucán", ca: "Seguir el tucà", en: "Follow the toucan", cs: "Letět za tukanem", fr: "Suivre le toucan" }, go: "n2a" }
          ]
        },
        n2a: {
          text: { es: "¡Ahí está el árbol caído! Es enorme y tiene orquídeas preciosas creciendo encima. No se puede empujar de cualquier manera.", ca: "Aquí hi ha l'arbre caigut! És enorme i té orquídies precioses creixent a sobre. No es pot empènyer de qualsevol manera.", en: "There is the fallen tree! It is huge and has beautiful orchids growing on top. You cannot just push it any old way.", cs: "Tady je ten spadlý strom! Je obrovský a nahoře na něm rostou nádherné orchideje. Nejde s ním jen tak pohnout.", fr: "Voilà l'arbre tombé ! Il est énorme et de jolies orchidées poussent dessus. On ne peut pas le pousser n'importe comment." },
          choices: [
            { t: { es: "Empujamos todos juntos, con cuidado", ca: "Empenyem tots junts, amb compte", en: "We all push together, carefully", cs: "Zatlačíme všichni spolu, opatrně", fr: "On pousse tous ensemble, doucement" }, go: "n3a" },
            { t: { es: "Buscamos un camino entre los nenúfares", ca: "Busquem un camí entre els nenúfars", en: "We look for a path through the water lilies", cs: "Hledáme cestu mezi lekníny", fr: "On cherche un chemin entre les nénuphars" }, go: "n3b" }
          ]
        },
        n2b: {
          text: { es: "El caimán dormita al sol en la orilla. Abre un ojo y bosteza: 'Os ayudo... si me cantáis algo bonito. Llevo cien años sin oír una canción'.", ca: "El caiman dormita al sol a la riba. Obre un ull i badalla: 'Us ajudo... si em canteu una cosa bonica. Fa cent anys que no sento una cançó'.", en: "The caiman is dozing in the sun on the bank. He opens one eye and yawns: 'I will help you... if you sing me something lovely. I have not heard a song in a hundred years'.", cs: "Kajman podřimuje na slunci na břehu. Otevře jedno oko a zívne: 'Pomůžu vám... když mi něco hezkého zazpíváte. Sto let jsem neslyšel písničku'.", fr: "Le caïman somnole au soleil sur la rive. Il ouvre un œil et bâille : « Je vous aide... si vous me chantez quelque chose de joli. Je n'ai pas entendu de chanson depuis cent ans »." },
          choices: [
            { t: { es: "Le cantamos la nana del río", ca: "Li cantem la cançó de bressol del riu", en: "We sing him the river lullaby", cs: "Zazpíváme mu říční ukolébavku", fr: "On lui chante la berceuse de la rivière" }, go: "n2b2" }
          ]
        },
        n2b2: {
          text: { es: "Al caimán se le cierran los ojos de gusto y suelta una lagrimita feliz: '¡Qué bonito! Venga, subíos a mi lomo, que os llevo al árbol caído'. ¡Zuuum, qué rápido nada!", ca: "Al caiman se li tanquen els ulls de gust i deixa anar una llagrimeta feliç: 'Que bonic! Vinga, pugeu al meu llom, que us porto a l'arbre caigut'. Zuuum, que ràpid neda!", en: "The caiman closes his eyes with delight and sheds one happy tear: 'How lovely! Come on, hop on my back and I will take you to the fallen tree'. Whoosh, he swims so fast!", cs: "Kajman blahem zavře oči a ukápne mu šťastná slzička: 'To bylo krásné! Tak pojďte, vylezte mi na hřbet, odvezu vás ke spadlému stromu'. Šššup, ten ale plave rychle!", fr: "Le caïman ferme les yeux de plaisir et laisse échapper une petite larme de joie : « Que c'est beau ! Allez, montez sur mon dos, je vous emmène à l'arbre tombé ». Zoum, qu'est-ce qu'il nage vite !" },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n3a" }
          ]
        },
        n3a: {
          text: { es: "Uno, dos y... ¡tres! Empujáis todos a la vez, con cuidado de no despeinar las orquídeas. El tronco gira despacito, se aparta... ¡y el agua vuelve a correr hacia la laguna!", ca: "Un, dos i... tres! Empenyeu tots alhora, amb compte de no despentinar les orquídies. El tronc gira a poc a poc, s'aparta... i l'aigua torna a córrer cap a la llacuna!", en: "One, two and... three! You all push at once, careful not to ruffle the orchids. The log turns slowly, moves aside... and the water flows to the lagoon again!", cs: "Raz, dva a... tři! Zatlačíte všichni najednou a dáváte pozor, abyste nepocuchali orchideje. Kmen se pomalu otočí, uhne... a voda zase teče do laguny!", fr: "Un, deux et... trois ! Vous poussez tous en même temps, en faisant attention aux orchidées. Le tronc tourne doucement, s'écarte... et l'eau coule à nouveau vers le lagon !" },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n3b: {
          text: { es: "Los nenúfares gigantes se apartan como puertas verdes y os enseñan un pasadizo secreto entre los juncos. El delfín pasa justito, moviendo la cola... ¡uf, por poco!", ca: "Els nenúfars gegants s'aparten com portes verdes i us ensenyen un passadís secret entre els joncs. El dofí hi passa justet, movent la cua... uf, per poc!", en: "The giant water lilies move aside like green doors and show you a secret passage through the reeds. The dolphin squeezes through, wiggling its tail... phew, just barely!", cs: "Obří lekníny se rozestoupí jako zelené dveře a ukážou vám tajnou cestičku mezi rákosím. Delfín tudy proklouzne, mrská ocáskem... uf, jen tak tak!", fr: "Les nénuphars géants s'écartent comme des portes vertes et vous montrent un passage secret entre les roseaux. Le dauphin passe tout juste, en remuant la queue... ouf, de justesse !" },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n4: {
          text: { es: "¡La laguna! La familia delfín salta de alegría haciendo piruetas rosas. Pero la tormenta dejó la laguna llena de ramas flotando. ¿Qué hacemos, {name}?", ca: "La llacuna! La família dofí salta d'alegria fent piruetes roses. Però la tempesta va deixar la llacuna plena de branques surant. Què fem, {name}?", en: "The lagoon! The dolphin family leaps for joy, doing pink somersaults. But the storm left the lagoon full of floating branches. What do we do, {name}?", cs: "Laguna! Delfíní rodina radostí skáče a dělá růžová salta. Jenže po bouřce zůstala laguna plná plovoucích větví. Co uděláme, {name}?", fr: "Le lagon ! La famille dauphin saute de joie en faisant des pirouettes roses. Mais la tempête a laissé le lagon plein de branches qui flottent. Qu'est-ce qu'on fait, {name} ?" },
          choices: [
            { t: { es: "La limpiamos entre todos", ca: "La netegem entre tots", en: "We clean it up together", cs: "Společně ji uklidíme", fr: "On le nettoie tous ensemble" }, go: "e1" },
            { t: { es: "Con las ramas hacemos una casita para los peces", ca: "Amb les branques fem una caseta per als peixos", en: "We build a little house for the fish with the branches", cs: "Z větví postavíme domeček pro rybky", fr: "Avec les branches, on fait une petite maison pour les poissons" }, go: "e2" }
          ]
        },
        e1: {
          end: true,
          text: { es: "Rama a rama, la laguna queda limpia y brillante como un espejo. Los delfines os nombran guardianes del río y os regalan un paseo a lomos de mamá delfín. Cuando cuidas el río, {name}, el río te cuida a ti.", ca: "Branca a branca, la llacuna queda neta i brillant com un mirall. Els dofins us nomenen guardians del riu i us regalen un passeig a l'esquena de la mama dofí. Quan cuides el riu, {name}, el riu et cuida a tu.", en: "Branch by branch, the lagoon ends up clean and shiny like a mirror. The dolphins name you guardians of the river and treat you to a ride on mama dolphin's back. When you care for the river, {name}, the river cares for you.", cs: "Větev po větvi je laguna čistá a lesklá jako zrcadlo. Delfíni vás jmenují strážci řeky a svezou vás na hřbetě maminky delfínice. Když se staráš o řeku, {name}, řeka se stará o tebe.", fr: "Branche après branche, le lagon devient propre et brillant comme un miroir. Les dauphins vous nomment gardiens de la rivière et vous offrent une promenade sur le dos de maman dauphin. Quand tu prends soin de la rivière, {name}, la rivière prend soin de toi." }
        },
        e2: {
          end: true,
          text: { es: "Con las ramas construís un refugio en el fondo, y enseguida llegan pececitos de colores a vivir en él. ¡El delfín tiene vecinos nuevos! En la selva nada se tira, {name}: todo puede convertirse en un hogar.", ca: "Amb les branques construïu un refugi al fons, i de seguida arriben peixets de colors a viure-hi. El dofí té veïns nous! A la selva res no es llença, {name}: tot pot convertir-se en una llar.", en: "With the branches you build a shelter on the bottom, and soon little colourful fish move in. The dolphin has new neighbours! Nothing goes to waste in the jungle, {name}: everything can become a home.", cs: "Z větví postavíte na dně úkryt a hned se do něj nastěhují barevné rybičky. Delfín má nové sousedy! V pralese se nic nevyhazuje, {name}: všechno se může stát domovem.", fr: "Avec les branches, vous construisez un abri au fond, et très vite des petits poissons colorés viennent y habiter. Le dauphin a de nouveaux voisins ! Dans la jungle, rien ne se jette, {name} : tout peut devenir une maison." }
        }
      }
    },
    {
      id: "ceiba", emoji: "🌳", start: "n1",
      title: { es: "La ceiba más alta de la selva", ca: "La ceiba més alta de la selva", en: "The Tallest Kapok in the Jungle", cs: "Nejvyšší strom pralesa", fr: "Le plus grand arbre de la jungle" },
      nodes: {
        n1: {
          text: { es: "Al pie de la ceiba más alta de la selva, un polluelo de águila harpía pía muy triste: se ha caído del nido, que está arriba del todo, ¡altísimo! Hay que devolverlo a casa, {name}.", ca: "Al peu de la ceiba més alta de la selva, un pollet d'àguila harpia piula molt trist: ha caigut del niu, que és a dalt de tot, altíssim! Cal tornar-lo a casa, {name}.", en: "At the foot of the tallest kapok in the jungle, a harpy eagle chick is cheeping sadly: it fell from its nest, way up at the very top! We have to get it home, {name}.", cs: "Pod nejvyšším stromem pralesa smutně pípá mládě harpyje: vypadlo z hnízda, které je úplně nahoře, strašně vysoko! Musíme ho dostat domů, {name}.", fr: "Au pied du plus grand arbre de la jungle, un bébé harpie piaille tout triste : il est tombé de son nid, tout là-haut, très très haut ! Il faut le ramener chez lui, {name}." },
          choices: [
            { t: { es: "Trepamos por las lianas", ca: "Enfilem-nos per les lianes", en: "We climb up the lianas", cs: "Vyšplháme po liánách", fr: "On grimpe par les lianes" }, go: "n2a" },
            { t: { es: "Pedimos ayuda a los amigos del dosel", ca: "Demanem ajuda als amics del dosser", en: "We ask the canopy friends for help", cs: "Požádáme o pomoc kamarády z korun stromů", fr: "On demande de l'aide aux amis de la canopée" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "Con el polluelo calentito en la mochila, trepáis liana arriba. A mitad de camino, una familia de monos aulladores os mira con curiosidad: '¿A dónde vais con tanto cuidado?'", ca: "Amb el pollet caldet a la motxilla, us enfileu liana amunt. A mig camí, una família de micos udoladors us mira amb curiositat: 'On aneu amb tant de compte?'", en: "With the chick snug in your backpack, you climb up the liana. Halfway there, a family of howler monkeys watches you curiously: 'Where are you going, so very carefully?'", cs: "S mládětem v teploučku batohu šplháte po liáně vzhůru. V půlce cesty vás zvědavě pozoruje rodina vřešťanů: 'Kampak jdete tak opatrně?'", fr: "Avec le poussin bien au chaud dans le sac, vous grimpez le long de la liane. À mi-chemin, une famille de singes hurleurs vous regarde avec curiosité : « Où allez-vous, si prudemment ? »" },
          choices: [
            { t: { es: "Les pedimos que nos enseñen el camino", ca: "Els demanem que ens ensenyin el camí", en: "We ask them to show us the way", cs: "Poprosíme je, ať nám ukážou cestu", fr: "On leur demande de nous montrer le chemin" }, go: "n3a" },
            { t: { es: "Seguimos solos, pasito a pasito", ca: "Seguim sols, a poc a poc", en: "We keep going alone, step by step", cs: "Pokračujeme sami, krůček po krůčku", fr: "On continue tout seuls, pas à pas" }, go: "n3b" }
          ]
        },
        n2b: {
          text: { es: "El tucán baja volando: 'Yo no puedo llevarlo, ¡pesa más que mi pico! Pero conozco a los mejores porteadores de la selva: los monos aulladores'. Y los llama con un silbido.", ca: "El tucà baixa volant: 'Jo no el puc portar, pesa més que el meu bec! Però conec els millors portadors de la selva: els micos udoladors'. I els crida amb un xiulet.", en: "The toucan flies down: 'I cannot carry it, it weighs more than my beak! But I know the best porters in the jungle: the howler monkeys'. And he calls them with a whistle.", cs: "Tukan slétne dolů: 'Já ho neunesu, váží víc než můj zobák! Ale znám nejlepší nosiče pralesa: vřešťany'. A zavolá je hvízdnutím.", fr: "Le toucan descend en volant : « Moi, je ne peux pas le porter, il pèse plus lourd que mon bec ! Mais je connais les meilleurs porteurs de la jungle : les singes hurleurs ». Et il les appelle d'un sifflement." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n3a" }
          ]
        },
        n3a: {
          text: { es: "Los monos forman una escalera de brazos y colas, del suelo hasta las ramas altas. El polluelo sube de mano en mano, ¡wiii!, como en un ascensor de la selva.", ca: "Els micos formen una escala de braços i cues, del terra fins a les branques altes. El pollet puja de mà en mà, wiii!, com en un ascensor de la selva.", en: "The monkeys make a ladder of arms and tails, from the ground to the high branches. The chick goes up hand by hand, wheee!, like a jungle elevator.", cs: "Opice utvoří žebřík z paží a ocasů, od země až k vysokým větvím. Mládě putuje z ruky do ruky, jupí!, jako v pralesním výtahu.", fr: "Les singes forment une échelle de bras et de queues, du sol jusqu'aux hautes branches. Le poussin monte de main en main, ouiii !, comme dans un ascenseur de la jungle." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n3b: {
          text: { es: "Subís despacito, agarrados fuerte a las lianas. A medio camino, una bromelia os invita a beber agua de lluvia de su vasito de hojas. ¡Qué fresquita!", ca: "Pugeu a poc a poc, agafats fort a les lianes. A mig camí, una bromèlia us convida a beure aigua de pluja del seu gotet de fulles. Que fresqueta!", en: "You climb slowly, holding tight to the lianas. Halfway up, a bromeliad invites you to drink rainwater from its little leaf cup. So refreshing!", cs: "Šplháte pomaloučku a pevně se držíte lián. V půlce cesty vás bromélie pozve, abyste se napili dešťové vody z jejího lístkového pohárku. Ta je ale osvěžující!", fr: "Vous montez doucement, bien accrochés aux lianes. À mi-chemin, une broméliacée vous invite à boire de l'eau de pluie dans son petit gobelet de feuilles. Quelle fraîcheur !" },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n4: {
          text: { es: "Cerca del nido, ¡fiuuu!, aparece mamá harpía con sus alas enormes abiertas. Os mira muy seria con sus ojos amarillos. ¿Qué hacemos?", ca: "A prop del niu, fiuuu!, apareix la mama harpia amb les seves ales enormes obertes. Us mira molt seriosa amb els seus ulls grocs. Què fem?", en: "Near the nest, whoosh!, mama harpy appears with her huge wings spread wide. She looks at you very seriously with her yellow eyes. What do we do?", cs: "Kousek od hnízda, fíííú!, se objeví máma harpyje s obrovskými roztaženými křídly. Vážně si vás prohlíží žlutýma očima. Co uděláme?", fr: "Près du nid, fiouuu !, maman harpie apparaît, ses ailes immenses grandes ouvertes. Elle vous regarde très sérieusement avec ses yeux jaunes. Qu'est-ce qu'on fait ?" },
          choices: [
            { t: { es: "Le contamos todo lo que ha pasado", ca: "Li expliquem tot el que ha passat", en: "We tell her everything that happened", cs: "Všechno jí povyprávíme", fr: "On lui raconte tout ce qui s'est passé" }, go: "n5a" },
            { t: { es: "Dejamos al polluelo en el nido, sin hacer ruido", ca: "Deixem el pollet al niu, sense fer soroll", en: "We put the chick in the nest, without a sound", cs: "Tiše položíme mládě do hnízda", fr: "On dépose le poussin dans le nid, sans faire de bruit" }, go: "n5b" }
          ]
        },
        n5a: {
          text: { es: "Mamá harpía escucha con la cabeza ladeada... y de repente os peina el pelo con el pico, suave suave: es su manera de dar las gracias. Luego os enseña su nido: ¡es grande como una cama!", ca: "La mama harpia escolta amb el cap tombat... i de sobte us pentina els cabells amb el bec, suau suau: és la seva manera de donar les gràcies. Després us ensenya el seu niu: és gran com un llit!", en: "Mama harpy listens with her head tilted... and suddenly she combs your hair with her beak, ever so gently: it is her way of saying thank you. Then she shows you her nest: it is as big as a bed!", cs: "Máma harpyje poslouchá s hlavou na stranu... a najednou vám zobákem jemňounce učeše vlasy: tak harpyje děkují. Potom vám ukáže své hnízdo: je velké jako postel!", fr: "Maman harpie écoute, la tête penchée... et soudain elle vous peigne les cheveux avec son bec, tout doucement : c'est sa façon de dire merci. Puis elle vous montre son nid : il est grand comme un lit !" },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e1" }
          ]
        },
        n5b: {
          text: { es: "Dejáis al polluelo calentito entre las ramas del nido y bajáis de puntillas. Mamá harpía os sigue con la mirada... y deja caer una pluma gris que baila en el aire hasta tus manos, {name}.", ca: "Deixeu el pollet caldet entre les branques del niu i baixeu de puntetes. La mama harpia us segueix amb la mirada... i deixa caure una ploma grisa que balla en l'aire fins a les teves mans, {name}.", en: "You tuck the chick snugly among the nest branches and tiptoe down. Mama harpy follows you with her eyes... and drops a grey feather that dances through the air into your hands, {name}.", cs: "Uložíte mládě do teploučka mezi větvičky hnízda a po špičkách slezete dolů. Máma harpyje vás sleduje pohledem... a upustí šedé pírko, které se snáší vzduchem až do tvých rukou, {name}.", fr: "Vous installez le poussin bien au chaud entre les branches du nid et vous redescendez sur la pointe des pieds. Maman harpie vous suit du regard... et laisse tomber une plume grise qui danse dans l'air jusqu'à tes mains, {name}." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e2" }
          ]
        },
        e1: {
          end: true,
          text: { es: "Desde lo alto de la ceiba veis la selva entera, verde hasta donde llega la vista, con el río brillando como una cinta. Ahora lo entiendes, {name}: la ceiba es la casa de cientos de animales. Por eso hay que cuidar los árboles grandes: son edificios llenos de vecinos.", ca: "Des de dalt de la ceiba veieu la selva sencera, verda fins on arriba la vista, amb el riu brillant com una cinta. Ara ho entens, {name}: la ceiba és la casa de centenars d'animals. Per això cal cuidar els arbres grans: són edificis plens de veïns.", en: "From the top of the kapok you see the whole jungle, green as far as the eye can see, with the river shining like a ribbon. Now you understand, {name}: the kapok is home to hundreds of animals. That is why we care for the big trees: they are buildings full of neighbours.", cs: "Z vrcholku stromu vidíte celý prales, zelený, kam až oko dohlédne, a řeku, která se leskne jako stužka. Teď už to chápeš, {name}: tenhle strom je domovem stovek zvířat. Proto se o velké stromy staráme: jsou to domy plné sousedů.", fr: "Du sommet de l'arbre, vous voyez toute la jungle, verte à perte de vue, avec le fleuve qui brille comme un ruban. Maintenant tu comprends, {name} : le grand arbre est la maison de centaines d'animaux. Voilà pourquoi on prend soin des grands arbres : ce sont des immeubles pleins de voisins." }
        },
        e2: {
          end: true,
          text: { es: "Guardáis la pluma en la canoa como un tesoro y prometéis volver a visitar al polluelo. Al marcharos, la ceiba entera susurra con sus hojas... ¿Lo oyes, {name}? Está diciendo gracias. Los buenos amigos de la selva no necesitan hacer ruido.", ca: "Guardeu la ploma a la canoa com un tresor i prometeu tornar a visitar el pollet. En marxar, la ceiba sencera xiuxiueja amb les seves fulles... Ho sents, {name}? Està dient gràcies. Els bons amics de la selva no necessiten fer soroll.", en: "You keep the feather in the canoe like a treasure and promise to visit the chick again. As you leave, the whole kapok whispers with its leaves... Can you hear it, {name}? It is saying thank you. Good jungle friends do not need to make noise.", cs: "Pírko si schováte v kánoi jako poklad a slíbíte, že se za mládětem zase přijedete podívat. Když odplouváte, celý strom šumí listím... Slyšíš to, {name}? Říká děkuji. Dobří kamarádi z pralesa nepotřebují dělat hluk.", fr: "Vous gardez la plume dans le canoë comme un trésor et vous promettez de revenir voir le poussin. En partant, tout l'arbre murmure avec ses feuilles... Tu l'entends, {name} ? Il dit merci. Les bons amis de la jungle n'ont pas besoin de faire du bruit." }
        }
      }
    },
    {
      id: "tesoroverde", emoji: "💚", start: "n1",
      title: { es: "El tesoro verde", ca: "El tresor verd", en: "The Green Treasure", cs: "Zelený poklad", fr: "Le trésor vert" },
      nodes: {
        n1: {
          text: { es: "Dentro de la canoa aparece un mapa dibujado en una corteza: 'El tesoro verde espera a quien sabe escuchar la selva'. La primera pista dice: 'Empieza donde el río abraza a las flores flotantes'.", ca: "Dins de la canoa apareix un mapa dibuixat en una escorça: 'El tresor verd espera qui sap escoltar la selva'. La primera pista diu: 'Comença on el riu abraça les flors flotants'.", en: "Inside the canoe you find a map drawn on a piece of bark: 'The green treasure waits for those who know how to listen to the jungle'. The first clue says: 'Start where the river hugs the floating flowers'.", cs: "V kánoi se objeví mapa nakreslená na kůře: 'Zelený poklad čeká na toho, kdo umí naslouchat pralesu'. První nápověda říká: 'Začni tam, kde řeka objímá plovoucí květiny'.", fr: "Dans le canoë apparaît une carte dessinée sur une écorce : « Le trésor vert attend celui qui sait écouter la jungle ». Le premier indice dit : « Commence là où la rivière embrasse les fleurs qui flottent »." },
          choices: [
            { t: { es: "¡A los nenúfares gigantes!", ca: "Als nenúfars gegants!", en: "To the giant water lilies!", cs: "K obřím leknínům!", fr: "Vers les nénuphars géants !" }, go: "n2a" },
            { t: { es: "Preguntamos al guacamayo sabelotodo", ca: "Preguntem al guacamai que ho sap tot", en: "We ask the know-it-all macaw", cs: "Zeptáme se vševědoucího papouška", fr: "On demande à l'ara qui sait tout" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "Entre los nenúfares gigantes, una ranita verde os espera sentada en una hoja: '¡Croac! Lo sabía. La segunda pista es: buscad donde la selva toca el cielo'.", ca: "Entre els nenúfars gegants, una granoteta verda us espera asseguda en una fulla: 'Croac! Ho sabia. La segona pista és: busqueu on la selva toca el cel'.", en: "Among the giant water lilies, a little green frog is waiting on a leaf: 'Croak! I knew it. The second clue is: look where the jungle touches the sky'.", cs: "Mezi obřími lekníny na vás na listu čeká zelená žabka: 'Kvák! Já to věděla. Druhá nápověda zní: hledejte tam, kde se prales dotýká nebe'.", fr: "Parmi les nénuphars géants, une petite grenouille verte vous attend, assise sur une feuille : « Croac ! Je le savais. Le deuxième indice, c'est : cherchez là où la jungle touche le ciel »." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n3" }
          ]
        },
        n2b: {
          text: { es: "El guacamayo se estira las plumas, presumido: '¡Kra! Yo me sé todos los caminos. ¡Seguidme!'. Y os guía volando bajito hasta los nenúfares gigantes, donde la ranita verde os da la segunda pista: 'Buscad donde la selva toca el cielo'.", ca: "El guacamai s'estira les plomes, presumit: 'Kra! Jo em sé tots els camins. Seguiu-me!'. I us guia volant baixet fins als nenúfars gegants, on la granoteta verda us dóna la segona pista: 'Busqueu on la selva toca el cel'.", en: "The macaw smooths his feathers, showing off: 'Kra! I know all the paths. Follow me!'. And he guides you, flying low, to the giant water lilies, where the little green frog gives you the second clue: 'Look where the jungle touches the sky'.", cs: "Papoušek si pyšně uhladí peří: 'Kra! Já znám všechny cesty. Za mnou!'. A vede vás nízkým letem až k obřím leknínům, kde vám zelená žabka dá druhou nápovědu: 'Hledejte tam, kde se prales dotýká nebe'.", fr: "L'ara lisse ses plumes, tout fier : « Kra ! Moi, je connais tous les chemins. Suivez-moi ! ». Et il vous guide en volant tout bas jusqu'aux nénuphars géants, où la petite grenouille verte vous donne le deuxième indice : « Cherchez là où la jungle touche le ciel »." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n3" }
          ]
        },
        n3: {
          text: { es: "¿Donde la selva toca el cielo? ¡El dosel! Subís al árbol mirador. Allí, un colibrí guarda la última pista escrita en un pétalo: 'El tesoro está en la semilla que duerme'. Hmm... ¿dónde duerme una semilla?", ca: "On la selva toca el cel? El dosser! Pugeu a l'arbre mirador. Allà, un colibrí guarda l'última pista escrita en un pètal: 'El tresor és a la llavor que dorm'. Hmm... on dorm una llavor?", en: "Where the jungle touches the sky? The canopy! You climb the lookout tree. There, a hummingbird keeps the last clue written on a petal: 'The treasure is in the sleeping seed'. Hmm... where does a seed sleep?", cs: "Kde se prales dotýká nebe? V korunách stromů! Vylezete na vyhlídkový strom. Tam kolibřík hlídá poslední nápovědu napsanou na okvětním lístku: 'Poklad je v semínku, které spí'. Hmm... kde spí semínko?", fr: "Là où la jungle touche le ciel ? La canopée ! Vous montez à l'arbre-belvédère. Là, un colibri garde le dernier indice écrit sur un pétale : « Le trésor est dans la graine qui dort ». Hmm... où dort une graine ?" },
          choices: [
            { t: { es: "Buscamos en el claro del bosque", ca: "Busquem a la clariana del bosc", en: "We search the forest clearing", cs: "Hledáme na pasece", fr: "On cherche dans la clairière" }, go: "n4a" },
            { t: { es: "Preguntamos a la abuela sabia del poblado", ca: "Preguntem a l'àvia sàvia del poblat", en: "We ask the wise grandmother of the village", cs: "Zeptáme se moudré babičky z vesnice", fr: "On demande à la grand-mère sage du village" }, go: "n4b" }
          ]
        },
        n4a: {
          text: { es: "En el claro del bosque, justo donde el sol dibuja un círculo de luz, encontráis un cofrecito de madera escondido bajo una raíz. ¡Pesa poquísimo!", ca: "A la clariana del bosc, just on el sol dibuixa un cercle de llum, trobeu un cofret de fusta amagat sota una arrel. Pesa poquíssim!", en: "In the forest clearing, right where the sun draws a circle of light, you find a little wooden chest hidden under a root. It weighs almost nothing!", cs: "Na pasece, přesně tam, kde slunce kreslí kruh světla, najdete dřevěnou truhličku schovanou pod kořenem. Skoro nic neváží!", fr: "Dans la clairière, juste là où le soleil dessine un cercle de lumière, vous trouvez un petit coffre en bois caché sous une racine. Il ne pèse presque rien !" },
          choices: [
            { t: { es: "Cogerlo con mucho cuidado", ca: "Agafar-lo amb molt de compte", en: "Pick it up very carefully", cs: "Velmi opatrně ji zvednout", fr: "Le prendre avec beaucoup de précaution" }, go: "n5" }
          ]
        },
        n4b: {
          text: { es: "La abuela sabia sonríe con los ojos: 'Conozco ese cofre desde que era niña'. Os acompaña hasta el claro contando historias de la selva, y señala una raíz: 'Mirad debajo'. ¡Ahí está el cofrecito!", ca: "L'àvia sàvia somriu amb els ulls: 'Conec aquest cofre des que era petita'. Us acompanya fins a la clariana explicant històries de la selva, i assenyala una arrel: 'Mireu a sota'. Aquí hi ha el cofret!", en: "The wise grandmother smiles with her eyes: 'I have known that chest since I was a little girl'. She walks you to the clearing telling jungle stories, and points at a root: 'Look underneath'. There is the little chest!", cs: "Moudrá babička se usměje očima: 'Tu truhličku znám od dětství'. Doprovodí vás na paseku a cestou vypráví příběhy pralesa, pak ukáže na kořen: 'Podívejte se pod něj'. Tady je truhlička!", fr: "La grand-mère sage sourit avec les yeux : « Je connais ce coffre depuis que je suis petite ». Elle vous accompagne jusqu'à la clairière en racontant des histoires de la jungle, puis montre une racine : « Regardez dessous ». Voilà le petit coffre !" },
          choices: [
            { t: { es: "Cogerlo con mucho cuidado", ca: "Agafar-lo amb molt de compte", en: "Pick it up very carefully", cs: "Velmi opatrně ji zvednout", fr: "Le prendre avec beaucoup de précaution" }, go: "n5" }
          ]
        },
        n5: {
          text: { es: "Sacudís el cofre con la oreja pegada: dentro suena chas, chas, chas, como si bailaran cosas pequeñitas. El colibrí, que os ha seguido, da vueltas de emoción.", ca: "Sacsegeu el cofre amb l'orella enganxada: a dins sona xas, xas, xas, com si ballessin coses petitones. El colibrí, que us ha seguit, fa voltes d'emoció.", en: "You shake the chest with your ear pressed against it: inside it goes shh, shh, shh, as if tiny little things were dancing. The hummingbird, who followed you, spins around with excitement.", cs: "Zatřesete truhličkou s uchem přitisknutým k víku: uvnitř to dělá šš, šš, šš, jako by tam tančily malinkaté věci. Kolibřík, který letěl za vámi, se točí nadšením.", fr: "Vous secouez le coffre, l'oreille collée dessus : dedans, ça fait chss, chss, chss, comme si de toutes petites choses dansaient. Le colibri, qui vous a suivis, tourne sur lui-même d'excitation." },
          choices: [
            { t: { es: "Abrirlo despacito", ca: "Obrir-lo a poc a poc", en: "Open it slowly", cs: "Pomaloučku ji otevřít", fr: "L'ouvrir tout doucement" }, go: "n6" }
          ]
        },
        n6: {
          text: { es: "Dentro del cofre hay semillas de ceiba que brillan como esmeraldas, y una nota: 'El tesoro verde es la selva que todavía no ha nacido'. ¡Claro! ¿Qué hacemos con ellas, {name}?", ca: "Dins del cofre hi ha llavors de ceiba que brillen com maragdes, i una nota: 'El tresor verd és la selva que encara no ha nascut'. És clar! Què en fem, {name}?", en: "Inside the chest there are kapok seeds shining like emeralds, and a note: 'The green treasure is the jungle that has not been born yet'. Of course! What shall we do with them, {name}?", cs: "V truhličce jsou semínka stromu kapok, která se třpytí jako smaragdy, a vzkaz: 'Zelený poklad je prales, který se ještě nenarodil'. No jasně! Co s nimi uděláme, {name}?", fr: "Dans le coffre, il y a des graines de kapokier qui brillent comme des émeraudes, et un mot : « Le trésor vert, c'est la jungle qui n'est pas encore née ». Bien sûr ! Qu'est-ce qu'on en fait, {name} ?" },
          choices: [
            { t: { es: "Las plantamos en el claro", ca: "Les plantem a la clariana", en: "We plant them in the clearing", cs: "Zasadíme je na pasece", fr: "On les plante dans la clairière" }, go: "e1" },
            { t: { es: "Las repartimos en el poblado para plantar muchas", ca: "Les repartim al poblat per plantar-ne moltes", en: "We share them in the village so everyone plants one", cs: "Rozdáme je ve vesnici, ať jich zasadíme spoustu", fr: "On les partage au village pour en planter plein" }, go: "e2" }
          ]
        },
        e1: {
          end: true,
          text: { es: "Plantáis las semillas en el claro y las regáis con agua del río. Algún día serán ceibas gigantes donde vivirán harpías, monos y orquídeas. Has encontrado el tesoro de verdad, {name}: un tesoro que crece.", ca: "Planteu les llavors a la clariana i les regueu amb aigua del riu. Algun dia seran ceibes gegants on viuran harpies, micos i orquídies. Has trobat el tresor de debò, {name}: un tresor que creix.", en: "You plant the seeds in the clearing and water them with river water. One day they will be giant kapoks where harpies, monkeys and orchids will live. You found the real treasure, {name}: a treasure that grows.", cs: "Zasadíte semínka na pasece a zalijete je vodou z řeky. Jednou z nich budou obří stromy, kde budou bydlet harpyje, opice a orchideje. To je ten pravý poklad, {name}: poklad, který roste.", fr: "Vous plantez les graines dans la clairière et vous les arrosez avec l'eau de la rivière. Un jour, elles deviendront des kapokiers géants où vivront des harpies, des singes et des orchidées. Tu as trouvé le vrai trésor, {name} : un trésor qui grandit." }
        },
        e2: {
          end: true,
          text: { es: "En el poblado, cada persona planta su semilla y le pone un nombre. La abuela sabia planta la última y guiña un ojo: 'Ahora la selva tiene una familia nueva de árboles... y vosotros también'. Compartir el tesoro, {name}, es hacerlo más grande.", ca: "Al poblat, cada persona planta la seva llavor i li posa un nom. L'àvia sàvia planta l'última i fa l'ullet: 'Ara la selva té una família nova d'arbres... i vosaltres també'. Compartir el tresor, {name}, és fer-lo més gran.", en: "In the village, each person plants their seed and gives it a name. The wise grandmother plants the last one and winks: 'Now the jungle has a new family of trees... and so do you'. Sharing the treasure, {name}, makes it bigger.", cs: "Ve vesnici si každý zasadí své semínko a dá mu jméno. Moudrá babička zasadí to poslední a mrkne: 'Teď má prales novou rodinu stromů... a vy taky'. Když se o poklad podělíš, {name}, poklad se zvětší.", fr: "Au village, chaque personne plante sa graine et lui donne un nom. La grand-mère sage plante la dernière et fait un clin d'œil : « Maintenant, la jungle a une nouvelle famille d'arbres... et vous aussi ». Partager le trésor, {name}, c'est le faire grandir." }
        }
      }
    }
  ],

  /* ---------- KARAOKE ---------- */
  songs: [
    { emoji: "🌅",
      title: { es: "La selva que despierta", ca: "La selva que es desperta", en: "The Jungle Wakes Up", cs: "Prales se probouzí", fr: "La jungle qui se réveille" },
      lines: [
        { es: "El sol se asoma entre las hojas,", ca: "El sol s'aixeca entre les fulles,", en: "The sun climbs up above the trees,", cs: "Slunce vstává nad pralesem,", fr: "Le soleil se lève sur la jungle jolie," },
        { es: "y pinta el río de luces rojas.", ca: "i el riu s'omple de bombolles.", en: "good morning, birds and morning breeze!", cs: "dobré ráno letí lesem.", fr: "la rivière scintille, la nuit est finie." },
        { es: "El tucán abre su gran pico,", ca: "El tucà obre el seu bec gros,", en: "The toucan opens up his beak,", cs: "Tukan zívá, zobák zvedá,", fr: "Le toucan chante à son réveil," },
        { es: "¡buenos días!, grita un mono chico.", ca: "bon dia canta, tot gojós.", en: "the little monkeys start to speak.", cs: "opička už banán hledá.", fr: "les petits singes saluent le soleil." },
        { es: "La selva entera se despereza,", ca: "La selva sencera s'estira,", en: "The jungle stretches, big and small,", cs: "Celý prales se protahuje,", fr: "La jungle s'étire tout doucement," },
        { es: "cada flor levanta la cabeza.", ca: "cada flor el sol ja mira.", en: "the flowers wake up, one and all.", cs: "každá kytka pozdravuje.", fr: "chaque fleur sourit gentiment." },
        { es: "Despierta, selva, ponte a cantar,", ca: "Desperta, selva, vine a cantar,", en: "Wake up, wake up, it's time to sing,", cs: "Probuď se a zpívej s námi,", fr: "Réveille-toi, jungle, viens chanter," },
        { es: "¡que un día nuevo va a empezar!", ca: "que un dia nou acaba d'arribar!", en: "a brand new day for everything!", cs: "nový den je mezi námi!", fr: "un jour tout neuf vient de commencer !" }
      ] },
    { emoji: "🐬",
      title: { es: "La nana del río", ca: "La cançó de bressol del riu", en: "The River Lullaby", cs: "Říční ukolébavka", fr: "La berceuse de la rivière" },
      lines: [
        { es: "El río canta bajito, bajito,", ca: "El riu canta fluixet, fluixet,", en: "The river sings a soft, soft tune,", cs: "Tiše, tiše, řeka zpívá,", fr: "La rivière chante tout doucement," },
        { es: "meciendo en sus olas a cada pececito.", ca: "bressola a poc a poc cada peixet.", en: "and rocks the fish beneath the moon.", cs: "malá rybka očka zavírá.", fr: "elle berce les poissons tendrement." },
        { es: "El delfín rosado viene a soñar,", ca: "El dofí rosat ve a somiar,", en: "The pink dolphin comes swimming near,", cs: "Růžový delfín tiše pluje,", fr: "Le dauphin rose vient te border," },
        { es: "y con su aleta te viene a arropar.", ca: "i amb la seva cua et vol tapar.", en: "to whisper sweet dreams in your ear.", cs: "vlnkami tě pokolébuje.", fr: "avec sa nageoire pour te câliner." },
        { es: "Duermen las flores, duerme el jaguar,", ca: "Dormen les flors, dorm el jaguar,", en: "The flowers sleep, the jaguar too,", cs: "Usnul motýl, usnul i květ,", fr: "Les fleurs s'endorment, le jaguar aussi," },
        { es: "hasta las olas se van a acostar.", ca: "fins les onades se'n van a descansar.", en: "the sleepy waves say good night to you.", cs: "usíná celý pralesní svět.", fr: "même les vagues disent bonne nuit." },
        { es: "Cierra los ojos, susurra el río,", ca: "Tanca els ullets, que ve la son,", en: "Close your eyes, the river sighs,", cs: "Zavři očka, šeptá řeka,", fr: "Ferme tes yeux, murmure l'eau," },
        { es: "que yo te canto, dulce amor mío.", ca: "el riu et canta la cançó més dolça del món.", en: "I'll sing to you till the morning skies.", cs: "sladký sen už na tebe čeká.", fr: "dors mon trésor, tout est calme et beau." }
      ] },
    { emoji: "🦜",
      title: { es: "El baile del guacamayo", ca: "El ball del guacamai", en: "The Macaw Dance", cs: "Tanec papouška", fr: "La danse de l'ara" },
      lines: [
        { es: "El guacamayo rojo se pone a bailar,", ca: "El guacamai vermell es posa a ballar,", en: "The red macaw begins to dance,", cs: "Červený papoušek do tance se dává,", fr: "L'ara tout rouge se met à danser," },
        { es: "y sus plumas de colores empiezan a volar.", ca: "i les plomes de colors comencen a volar.", en: "his rainbow feathers hop and prance.", cs: "peříčka barevná ve vzduchu mává.", fr: "ses plumes de couleurs se mettent à voler." },
        { es: "Da un saltito al frente, otro para atrás,", ca: "Un saltiró endavant, un altre endarrere,", en: "A little jump ahead, a little jump behind,", cs: "Skok doleva, skok doprava,", fr: "Un petit saut devant, un petit saut derrière," },
        { es: "¡kra, kra, kra!, ¿bailas tú quizás?", ca: "kra, kra, kra, balla d'aquesta manera!", en: "kra, kra, kra, the best dance you will find!", cs: "kra, kra, kra, to je zábava!", fr: "kra, kra, kra, quelle danse, quelle manière !" },
        { es: "El tucán marca el ritmo con el pico,", ca: "El tucà marca el ritme amb el bec,", en: "The toucan taps the rhythm, tap, tap, tap,", cs: "Tukan ťuká zobákem: ťuky ťuk,", fr: "Le toucan tape le rythme avec son bec," },
        { es: "y el monito toca un tambor chiquitico.", ca: "i el mico fa percussió amb un tronquet sec.", en: "the monkey plays the drum and claps, clap, clap.", cs: "opička bubnuje: buch, buch, buch.", fr: "le petit singe joue du tambour avec." },
        { es: "Baila, baila, {name}, sin parar,", ca: "Balla, balla, {name}, sense parar,", en: "Dance, dance, {name}, round and round,", cs: "Tancuj, tancuj, {name}, dokola,", fr: "Danse, danse, {name}, encore et encore," },
        { es: "¡que la selva entera se pone a bailar!", ca: "que la selva sencera es posa a ballar!", en: "the whole green jungle shakes the ground!", cs: "celý prales tančí, hola hola!", fr: "toute la jungle danse jusqu'à l'aurore !" }
      ] }
  ],

  /* ---------- TRADUCTOR ---------- */
  translator: {
    words: [
      W_COMMON.hola,
      W_COMMON.adios,
      W_COMMON.amigo,
      { k: "selva", emoji: "🌴", name: { es: "selva", ca: "selva", en: "jungle", cs: "prales", fr: "jungle" } },
      { k: "rio", emoji: "🌊", name: { es: "río", ca: "riu", en: "river", cs: "řeka", fr: "rivière" } },
      { k: "jaguar", emoji: "🐆", name: { es: "jaguar", ca: "jaguar", en: "jaguar", cs: "jaguár", fr: "jaguar" } },
      { k: "loro", emoji: "🦜", name: { es: "loro", ca: "lloro", en: "parrot", cs: "papoušek", fr: "perroquet" } },
      { k: "arbol", emoji: "🌳", name: { es: "árbol", ca: "arbre", en: "tree", cs: "strom", fr: "arbre" } },
      { k: "flor", emoji: "🌺", name: { es: "flor", ca: "flor", en: "flower", cs: "květina", fr: "fleur" } },
      { k: "mariposa", emoji: "🦋", name: { es: "mariposa", ca: "papallona", en: "butterfly", cs: "motýl", fr: "papillon" } },
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
      { id: "guacamayo", emoji: "🦜",
        name: { es: "Guacamayo", ca: "Guacamai", en: "Macaw", cs: "Papouščtina", fr: "Ara" },
        greeting: { es: "¡Kra-kra! Así saluda el guacamayo desde lo alto del dosel.", ca: "Kra-kra! Així saluda el guacamai des de dalt del dosser.", en: "Kra-kra! That is how the macaw says hello from the top of the canopy.", cs: "Kra-kra! Tak zdraví papoušek z vrcholku koruny stromů.", fr: "Kra-kra ! C'est comme ça que l'ara dit bonjour du haut de la canopée." },
        dict: { hola: "kra-kra", adios: "kruu-kruu", amigo: "krami", selva: "krak-krak", rio: "kraglú", jaguar: "kragrrr", loro: "krakiki", arbol: "krup", flor: "krif", mariposa: "kraflap", robot: "krabip", mama: "kramama", papa: "krapapa", casa: "kranido", agua: "kraglu", comida: "krañam", perro: "kraguau", gato: "kramiau", grande: "krakraaa", pequeno: "kri", bonito: "krali", amor: "krakor", gracias: "krazi", si: "kra", no: "kru", dormir: "krazzz" } },
      { id: "aullador", emoji: "🐒",
        name: { es: "Mono aullador", ca: "Mico udolador", en: "Howler monkey", cs: "Vřešťanština", fr: "Singe hurleur" },
        greeting: { es: "¡U-u-ua! El mono aullador saluda tan fuerte que se oye a cinco kilómetros.", ca: "U-u-ua! El mico udolador saluda tan fort que se sent a cinc quilòmetres.", en: "Oo-oo-wah! The howler monkey says hello so loudly you can hear it five kilometres away.", cs: "U-u-ua! Vřešťan zdraví tak nahlas, že je to slyšet na pět kilometrů.", fr: "Ou-ou-oua ! Le singe hurleur dit bonjour si fort qu'on l'entend à cinq kilomètres." },
        dict: { hola: "u-u-ua", adios: "ua-ua-uh", amigo: "u-ami", selva: "uauaua", rio: "u-glu-ua", jaguar: "uh-grr", loro: "u-kiki", arbol: "u-rama", flor: "u-fifi", mariposa: "u-flap", robot: "u-bip-ua", mama: "u-mama", papa: "u-papa", casa: "u-nido", agua: "u-glu", comida: "u-ñam-ua", perro: "u-guau", gato: "u-miau", grande: "UUUUA", pequeno: "u", bonito: "u-uli", amor: "u-kor-ua", gracias: "u-grasi", si: "ua", no: "uh-uh", dormir: "u-zzz-ua" } },
      { id: "delfinrio", emoji: "🐬",
        name: { es: "Delfín de río", ca: "Dofí de riu", en: "River dolphin", cs: "Delfínština", fr: "Dauphin de rivière" },
        greeting: { es: "Clic-clic-siii... el delfín rosado habla con clics y silbidos bajo el agua.", ca: "Clic-clic-siii... el dofí rosat parla amb clics i xiulets sota l'aigua.", en: "Click-click-seee... the pink dolphin talks with clicks and whistles underwater.", cs: "Klik-klik-sííí... růžový delfín mluví pod vodou klikáním a pískáním.", fr: "Clic-clic-siii... le dauphin rose parle avec des clics et des sifflements sous l'eau." },
        dict: { hola: "clic-siii", adios: "siii-clic", amigo: "clicli-si", selva: "si-si-clic", rio: "siiglu", jaguar: "clic-grr-si", loro: "clic-kiki", arbol: "si-clac", flor: "si-fli", mariposa: "si-flap", robot: "clic-bip-si", mama: "si-mama", papa: "si-papa", casa: "clic-nido", agua: "siii-glu", comida: "clic-ñam", perro: "clic-guau", gato: "clic-miau", grande: "SIII-CLIC", pequeno: "cli", bonito: "sili", amor: "si-kor", gracias: "clic-grasi", si: "si-si", no: "cli-cla", dormir: "siii-zzz" } },
      { id: "rana", emoji: "🐸",
        name: { es: "Rana de la lluvia", ca: "Granota de la pluja", en: "Rain frog", cs: "Žabština", fr: "Grenouille de pluie" },
        greeting: { es: "¡Croac-croac! Cuando llega la lluvia, las ranas de la selva cantan todas a la vez.", ca: "Croac-croac! Quan arriba la pluja, les granotes de la selva canten totes alhora.", en: "Croak-croak! When the rain comes, all the jungle frogs sing at the same time.", cs: "Kvák-kvák! Když přijde déšť, všechny pralesní žáby zpívají najednou.", fr: "Croac-croac ! Quand la pluie arrive, toutes les grenouilles de la jungle chantent en même temps." },
        dict: { hola: "croac-croac", adios: "croooac", amigo: "croami", selva: "croac-crac", rio: "crogluglu", jaguar: "croacgrr", loro: "croakiki", arbol: "crorama", flor: "crofli", mariposa: "croflap", robot: "croacbip", mama: "cromama", papa: "cropapa", casa: "cronido", agua: "croglu", comida: "croñam", perro: "croguau", gato: "cromiau", grande: "CROOOAC", pequeno: "croqui", bonito: "croli", amor: "crokor", gracias: "crograsi", si: "croac", no: "crouc", dormir: "crozzz" } }
    ]
  },

  /* ---------- MAPA DE EXPLORACIÓN ---------- */
  explore: {
    width: 4200, height: 1100, stars: false,
    bgCss: "radial-gradient(ellipse 42% 26% at 34% 10%, rgba(255,251,214,.45), transparent), linear-gradient(180deg,#cfeadb 0%,#a7d9b8 10%,#5aa86a 28%,#2f7a3f 50%,#1b5e20 76%,#123f16 100%)",
    cats: [
      { id: "selva", emoji: "🌳", x: 140, name: { es: "La selva", ca: "La selva", en: "The jungle", cs: "Prales", fr: "La jungle" } },
      { id: "rio", emoji: "🌊", x: 1800, name: { es: "El gran río", ca: "El gran riu", en: "The great river", cs: "Velká řeka", fr: "Le grand fleuve" } },
      { id: "dosel", emoji: "🦜", x: 3080, name: { es: "El dosel", ca: "El dosser", en: "The canopy", cs: "Koruny stromů", fr: "La canopée" } }
    ],
    pois: [
      { cat: "selva", emoji: "🐆", x: 250, y: 810,
        name: { es: "El jaguar", ca: "El jaguar", en: "The jaguar", cs: "Jaguár", fr: "Le jaguar" },
        fact: { es: "El jaguar es el felino más grande de América. Camina en silencio... ¡y nada de maravilla!", ca: "El jaguar és el felí més gran d'Amèrica. Camina en silenci... i neda de meravella!", en: "The jaguar is the biggest cat in the Americas. It walks in silence... and swims wonderfully!", cs: "Jaguár je největší kočkovitá šelma Ameriky. Chodí úplně potichu... a výborně plave!", fr: "Le jaguar est le plus grand félin d'Amérique. Il marche en silence... et il nage à merveille !" } },
      { cat: "selva", emoji: "🦥", x: 500, y: 520,
        name: { es: "El perezoso", ca: "El peresós", en: "The sloth", cs: "Lenochod", fr: "Le paresseux" },
        fact: { es: "El perezoso baja de su árbol una vez por semana. En su pelo crecen algas verdes que lo camuflan.", ca: "El peresós baixa del seu arbre un cop per setmana. Al seu pèl hi creixen algues verdes que el camuflen.", en: "The sloth comes down from its tree once a week. Green algae grow on its fur and camouflage it.", cs: "Lenochod slézá ze svého stromu jednou za týden. V srsti mu rostou zelené řasy, které ho maskují.", fr: "Le paresseux descend de son arbre une fois par semaine. Des algues vertes poussent sur son pelage et le camouflent." } },
      { cat: "selva", emoji: "🐒", x: 760, y: 780,
        name: { es: "El mono aullador", ca: "El mico udolador", en: "The howler monkey", cs: "Vřešťan", fr: "Le singe hurleur" },
        fact: { es: "Su aullido se oye a cinco kilómetros: es uno de los animales más ruidosos del mundo.", ca: "El seu udol se sent a cinc quilòmetres: és un dels animals més sorollosos del món.", en: "Its howl can be heard five kilometres away: it is one of the loudest animals in the world.", cs: "Jeho volání je slyšet na pět kilometrů: je to jedno z nejhlučnějších zvířat na světě.", fr: "Son cri s'entend à cinq kilomètres : c'est l'un des animaux les plus bruyants du monde." } },
      { cat: "selva", emoji: "🌳", x: 1060, y: 480, size: 3,
        name: { es: "La ceiba gigante", ca: "La ceiba gegant", en: "The giant kapok", cs: "Obří kapok", fr: "Le kapokier géant" },
        fact: { es: "La ceiba puede ser tan alta como veinte casas. En un solo árbol viven cientos de animales.", ca: "La ceiba pot ser tan alta com vint cases. En un sol arbre hi viuen centenars d'animals.", en: "The kapok can grow as tall as twenty houses. Hundreds of animals live in a single tree.", cs: "Kapok může být vysoký jako dvacet domů. Na jediném stromě žijí stovky zvířat.", fr: "Le kapokier peut être aussi haut que vingt maisons. Des centaines d'animaux vivent dans un seul arbre." } },
      { cat: "selva", emoji: "🌸", x: 1330, y: 700,
        name: { es: "La orquídea", ca: "L'orquídia", en: "The orchid", cs: "Orchidej", fr: "L'orchidée" },
        fact: { es: "En la selva hay miles de orquídeas distintas. Muchas viven sobre los árboles, sin tocar el suelo.", ca: "A la selva hi ha milers d'orquídies diferents. Moltes viuen sobre els arbres, sense tocar el terra.", en: "There are thousands of different orchids in the jungle. Many live up on the trees, never touching the ground.", cs: "V pralese rostou tisíce různých orchidejí. Mnohé žijí na stromech a nikdy se nedotknou země.", fr: "Il y a des milliers d'orchidées différentes dans la jungle. Beaucoup vivent sur les arbres, sans toucher le sol." } },
      { cat: "selva", emoji: "🐜", x: 1570, y: 900,
        name: { es: "La hormiga cortadora", ca: "La formiga talladora", en: "The leafcutter ant", cs: "Mravenec střihač", fr: "La fourmi coupeuse" },
        fact: { es: "Corta trocitos de hoja y los lleva a casa... ¡para cultivar su propio jardín de hongos!", ca: "Talla trossets de fulla i els porta a casa... per cultivar el seu propi jardí de bolets!", en: "It cuts little pieces of leaf and carries them home... to grow its very own mushroom garden!", cs: "Stříhá kousíčky listů a nosí je domů... aby si vypěstoval vlastní zahrádku hub!", fr: "Elle coupe des petits bouts de feuille et les porte chez elle... pour cultiver son propre jardin de champignons !" } },
      { cat: "rio", emoji: "🐬", x: 1880, y: 730,
        name: { es: "El delfín rosado", ca: "El dofí rosat", en: "The pink dolphin", cs: "Růžový delfín", fr: "Le dauphin rose" },
        fact: { es: "El boto es un delfín de río de color rosa. Cuanto más mayor se hace, más rosa se pone.", ca: "El boto és un dofí de riu de color rosa. Com més gran es fa, més rosa es torna.", en: "The boto is a pink river dolphin. The older it gets, the pinker it turns.", cs: "Boto je růžový říční delfín. Čím je starší, tím víc růžoví.", fr: "Le boto est un dauphin de rivière tout rose. Plus il grandit, plus il devient rose." } },
      { cat: "rio", emoji: "🐟", x: 2140, y: 920,
        name: { es: "La piraña sonriente", ca: "La piranya somrient", en: "The smiling piranha", cs: "Usměvavá piraňa", fr: "Le piranha souriant" },
        fact: { es: "Las pirañas tienen fama de fieras, pero muchas también comen frutas y semillas. Y siempre nadan con sus amigas.", ca: "Les piranyes tenen fama de feres, però moltes també mengen fruites i llavors. I sempre neden amb les seves amigues.", en: "Piranhas sound scary, but many of them also eat fruits and seeds. And they always swim with their friends.", cs: "Piraně mají pověst dravců, ale mnohé jedí i ovoce a semínka. A vždycky plavou se svými kamarádkami.", fr: "Les piranhas ont l'air féroces, mais beaucoup mangent aussi des fruits et des graines. Et ils nagent toujours avec leurs amis." } },
      { cat: "rio", emoji: "🐍", x: 2380, y: 700,
        name: { es: "La anaconda tímida", ca: "L'anaconda tímida", en: "The shy anaconda", cs: "Plachá anakonda", fr: "L'anaconda timide" },
        fact: { es: "Es una de las serpientes más grandes del mundo, pero es tímida: prefiere esconderse entre las plantas del agua.", ca: "És una de les serps més grans del món, però és tímida: prefereix amagar-se entre les plantes de l'aigua.", en: "It is one of the biggest snakes in the world, but it is shy: it prefers hiding among the water plants.", cs: "Je to jeden z největších hadů na světě, ale je plachá: nejraději se schovává mezi vodními rostlinami.", fr: "C'est l'un des plus grands serpents du monde, mais il est timide : il préfère se cacher parmi les plantes de l'eau." } },
      { cat: "rio", emoji: "🪷", x: 2620, y: 940,
        name: { es: "El nenúfar gigante Victoria", ca: "El nenúfar gegant Victòria", en: "The giant Victoria water lily", cs: "Obří leknín viktorie", fr: "Le nénuphar géant Victoria" },
        fact: { es: "Sus hojas miden hasta tres metros y aguantan el peso de un niño pequeño, como barquitas verdes.", ca: "Les seves fulles fan fins a tres metres i aguanten el pes d'un nen petit, com barquetes verdes.", en: "Its leaves grow up to three metres and can hold a small child, like little green boats.", cs: "Jeho listy měří až tři metry a unesou malé dítě, jako zelené loďky.", fr: "Ses feuilles mesurent jusqu'à trois mètres et portent un petit enfant, comme des petits bateaux verts." } },
      { cat: "rio", emoji: "🐊", x: 2860, y: 640,
        name: { es: "El caimán", ca: "El caiman", en: "The caiman", cs: "Kajman", fr: "Le caïman" },
        fact: { es: "El caimán toma el sol en la orilla para calentarse. De noche, sus ojos brillan como linternas.", ca: "El caiman pren el sol a la riba per escalfar-se. De nit, els seus ulls brillen com llanternes.", en: "The caiman sunbathes on the riverbank to warm up. At night, its eyes shine like little lanterns.", cs: "Kajman se vyhřívá na břehu, aby se zahřál. V noci mu oči svítí jako lucerničky.", fr: "Le caïman prend le soleil sur la rive pour se réchauffer. La nuit, ses yeux brillent comme des lanternes." } },
      { cat: "dosel", emoji: "🦜", x: 3150, y: 320,
        name: { es: "El guacamayo", ca: "El guacamai", en: "The macaw", cs: "Papoušek ara", fr: "L'ara" },
        fact: { es: "Los guacamayos eligen una pareja para toda la vida y vuelan siempre juntos por el dosel.", ca: "Els guacamais trien una parella per a tota la vida i volen sempre junts pel dosser.", en: "Macaws choose one partner for life and always fly together through the canopy.", cs: "Papoušci ara si vybírají partnera na celý život a korunami stromů létají vždycky spolu.", fr: "Les aras choisissent un partenaire pour la vie et volent toujours ensemble dans la canopée." } },
      { cat: "dosel", emoji: "🐦", x: 3400, y: 200,
        name: { es: "El tucán", ca: "El tucà", en: "The toucan", cs: "Tukan", fr: "Le toucan" },
        fact: { es: "Su pico gigante es ligerísimo, casi hueco por dentro. Lanza las frutas al aire y ¡ñam!, las caza al vuelo.", ca: "El seu bec gegant és lleugeríssim, gairebé buit per dins. Llança les fruites a l'aire i nyam!, les caça al vol.", en: "Its giant beak is super light, almost hollow inside. It tosses fruit in the air and, yum!, catches it mid-flight.", cs: "Jeho obří zobák je lehoučký, uvnitř skoro dutý. Vyhazuje ovoce do vzduchu a mňam!, chytá ho v letu.", fr: "Son bec géant est très léger, presque creux à l'intérieur. Il lance les fruits en l'air et, miam !, les attrape au vol." } },
      { cat: "dosel", emoji: "🪶", x: 3640, y: 380,
        name: { es: "El colibrí", ca: "El colibrí", en: "The hummingbird", cs: "Kolibřík", fr: "Le colibri" },
        fact: { es: "Bate las alas tan rápido que puede quedarse quieto en el aire... ¡y hasta volar hacia atrás!", ca: "Bat les ales tan ràpid que pot quedar-se quiet en l'aire... i fins i tot volar cap enrere!", en: "It beats its wings so fast that it can hover in the air... and even fly backwards!", cs: "Mává křídly tak rychle, že umí stát ve vzduchu... a dokonce létat pozpátku!", fr: "Il bat des ailes si vite qu'il peut rester immobile dans l'air... et même voler en arrière !" } },
      { cat: "dosel", emoji: "🦋", x: 3880, y: 220,
        name: { es: "La mariposa azul morfo", ca: "La papallona blava morfo", en: "The blue morpho butterfly", cs: "Motýl morfo", fr: "Le morpho bleu" },
        fact: { es: "Sus alas no tienen pintura azul: son escamas diminutas que reflejan la luz, como espejitos.", ca: "Les seves ales no tenen pintura blava: són escates diminutes que reflecteixen la llum, com mirallets.", en: "Its wings have no blue paint: they are tiny scales that reflect the light, like little mirrors.", cs: "Jeho křídla nemají modrou barvu: jsou to droboučké šupinky, které odrážejí světlo jako zrcátka.", fr: "Ses ailes n'ont pas de peinture bleue : ce sont de minuscules écailles qui reflètent la lumière, comme des petits miroirs." } },
      { cat: "dosel", emoji: "🦅", x: 4100, y: 500,
        name: { es: "El águila harpía", ca: "L'àguila harpia", en: "The harpy eagle", cs: "Harpyje", fr: "La harpie féroce" },
        fact: { es: "Es una de las águilas más fuertes del mundo. Vive en lo más alto del dosel y peina una cresta como una corona.", ca: "És una de les àguiles més fortes del món. Viu a dalt de tot del dosser i pentina una cresta com una corona.", en: "It is one of the strongest eagles in the world. It lives at the very top of the canopy and wears a crest like a crown.", cs: "Je to jeden z nejsilnějších orlů světa. Žije úplně nahoře v korunách stromů a nosí chocholku jako korunu.", fr: "C'est l'un des aigles les plus forts du monde. Elle vit tout en haut de la canopée et porte une crête comme une couronne." } }
    ],
    /* el escenario: la selva por capas, del dosel al río */
    deco: function () {
      let s = "";
      /* las cajas de los iconos: sirven para dejarles aire alrededor */
      const cajas = [[208, 768, 84, 84], [458, 478, 84, 84], [718, 738, 84, 84], [925, 380, 270, 200], [1288, 658, 84, 84], [1528, 858, 84, 84],
        [1838, 688, 84, 84], [2098, 878, 84, 84], [2338, 658, 84, 84], [2578, 898, 84, 84], [2818, 598, 84, 84],
        [3108, 278, 84, 84], [3358, 158, 84, 84], [3598, 338, 84, 84], [3838, 178, 84, 84], [4058, 458, 84, 84]];
      const libre = (x, y, w, h) => !cajas.some(c => x < c[0] + c[2] + 12 && x + w > c[0] - 12 && y < c[1] + c[3] + 12 && y + h > c[1] - 12);
      /* numeros repetibles: la selva sale igual en cada partida */
      let sem = 3313;
      const az = () => (sem = sem * 16807 % 2147483647) / 2147483647;
      /* ---------- DEGRADADOS Y PATRONES (ids con prefijo amzX) ---------- */
      s += `<defs>
        <linearGradient id="amzXDosel" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#14401a"/><stop offset="100%" stop-color="#2e7d32"/></linearGradient>
        <linearGradient id="amzXTronco" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#6b5140"/><stop offset="42%" stop-color="#4e3a2c"/><stop offset="100%" stop-color="#33251c"/></linearGradient>
        <linearGradient id="amzXAgua" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#7cbcb4"/><stop offset="45%" stop-color="#3f8b93"/><stop offset="100%" stop-color="#1f5b6b"/></linearGradient>
        <linearGradient id="amzXBarro" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#a3855c"/><stop offset="100%" stop-color="#6d5537"/></linearGradient>
        <linearGradient id="amzXLuz" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="rgba(255,251,214,.45)"/><stop offset="100%" stop-color="rgba(255,251,214,0)"/></linearGradient>
        <linearGradient id="amzXSuelo" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#3f5c25"/><stop offset="100%" stop-color="#22370f"/></linearGradient>
        <linearGradient id="amzXOrilla" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8d7a4e"/><stop offset="52%" stop-color="#a3855c"/><stop offset="100%" stop-color="#6d5537"/></linearGradient>
        <linearGradient id="amzXCeiba" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7e8767"/><stop offset="38%" stop-color="#606848"/><stop offset="100%" stop-color="#39402a"/></linearGradient>
        <radialGradient id="amzXCielo" cx="50%" cy="50%"><stop offset="0%" stop-color="rgba(240,250,222,.5)"/><stop offset="60%" stop-color="rgba(226,244,214,.22)"/><stop offset="100%" stop-color="rgba(226,244,214,0)"/></radialGradient>
        <linearGradient id="amzXLejano" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#7ba982"/><stop offset="100%" stop-color="#4d8a58"/></linearGradient>
        <pattern id="amzXLluvia" width="72" height="160" patternUnits="userSpaceOnUse">
          <g stroke="rgba(255,255,255,.55)" stroke-width="2.4" stroke-linecap="round"><path d="M12 0 v26"/><path d="M44 58 v22"/><path d="M62 112 v18"/><path d="M26 96 v16"/></g>
          <animateTransform attributeName="patternTransform" type="translate" from="0 0" to="0 160" dur="2.8s" repeatCount="indefinite"/>
        </pattern>
      </defs>`;
      /* seis haces de luz que bajan entre las copas, uno por tramo.
         van ANTES del dosel: asi la copa les tapa el arranque y no se ve
         el borde recto del rectangulo por encima de las hojas */
      [[420, 520, 900], [1140, 1230, 940], [1760, 1850, 880], [2420, 2510, 760], [3120, 3210, 860], [3820, 3910, 820]].forEach((r, i) => {
        s += `<path d="M${r[0]} 150 L${r[1]} 150 L${r[1] + 130} ${r[2]} L${r[0] + 70} ${r[2]} Z" fill="url(#amzXLuz)" opacity=".5"><animate attributeName="opacity" values=".5;.2;.5" dur="${10 + i * 2}s" repeatCount="indefinite"/></path>`;
      });
      /* ---------- EL DOSEL ALTO: tres capas de copas de punta a punta ---------- */
      s += `<path d="M0 0 H4200 V196 Q3550 250 2900 200 Q2250 152 1600 208 Q950 258 0 194 Z" fill="url(#amzXDosel)"/>`;
      for (let i = 0; i <= 32; i++) {
        s += `<circle cx="${i * 132}" cy="${44 + (i % 2) * 34}" r="${84 + (i % 3) * 18}" fill="${["#1b5e20", "#2e7d32", "#388e3c"][i % 3]}"/>`;
      }
      for (let i = 0; i <= 23; i++) {
        s += `<circle cx="${i * 182 + 70}" cy="162" r="${56 + (i % 2) * 12}" fill="#43a047" opacity=".55"/>`;
      }
      /* las hojas grandes que asoman del dosel, tipo filodendro */
      for (let i = 0; i < 15; i++) {
        const x = 130 + i * 282, y = 210 + (i % 3) * 26;
        if (!libre(x - 46, y - 20, 92, 60)) continue;
        s += `<g transform="translate(${x} ${y})"><path d="M0 0 q-46 -6 -60 26 q42 24 60 -4 q18 28 60 4 q-14 -32 -60 -26 Z" fill="#2e7d32"/>
          <path d="M-58 24 H58 M-30 8 L-40 24 M0 4 V26 M30 8 L40 24" stroke="#1b5e20" stroke-width="3" fill="none"/></g>`;
      }
      /* la niebla alta, la costura entre el dosel y la capa de los troncos */
      s += `<ellipse cx="520" cy="288" rx="460" ry="58" fill="rgba(255,255,255,.14)"><animate attributeName="rx" values="460;500;460" dur="17s" repeatCount="indefinite"/></ellipse>
        <ellipse cx="1420" cy="266" rx="520" ry="52" fill="rgba(255,255,255,.11)"/>
        <ellipse cx="2300" cy="286" rx="560" ry="60" fill="rgba(255,255,255,.13)"><animate attributeName="rx" values="560;606;560" dur="21s" repeatCount="indefinite"/></ellipse>
        <ellipse cx="3260" cy="270" rx="480" ry="54" fill="rgba(255,255,255,.11)"/>
        <ellipse cx="3960" cy="296" rx="380" ry="62" fill="rgba(255,255,255,.13)"><animate attributeName="ry" values="62;76;62" dur="23s" repeatCount="indefinite"/></ellipse>`;
      /* ---------- LOS TRONCOS ENORMES, CON SUS CONTRAFUERTES ---------- */
      const tronco = (x, k, base) => {
        const w = 54 * k;
        let o = `<g><path d="M${(x - w / 2).toFixed(0)} ${base} q${(w * .12).toFixed(0)} -${((base - 170) / 2).toFixed(0)} 0 -${(base - 170).toFixed(0)} h${w.toFixed(0)} q${(-w * .12).toFixed(0)} ${((base - 170) / 2).toFixed(0)} 0 ${(base - 170).toFixed(0)} Z" fill="url(#amzXTronco)"/>
          <path d="M${(x - w / 2).toFixed(0)} ${base} Q${(x - w * 1.5).toFixed(0)} ${(base - 78).toFixed(0)} ${(x - w * 2).toFixed(0)} ${base} Z" fill="#4e3a2c"/>
          <path d="M${(x + w / 2).toFixed(0)} ${base} Q${(x + w * 1.5).toFixed(0)} ${(base - 78).toFixed(0)} ${(x + w * 2).toFixed(0)} ${base} Z" fill="#4e3a2c"/>
          <path d="M${(x - w * .2).toFixed(0)} 230 Q${(x - w * .42).toFixed(0)} ${(base * .55).toFixed(0)} ${(x - w * .16).toFixed(0)} ${(base - 60).toFixed(0)}" stroke="rgba(0,0,0,.22)" stroke-width="${(w * .16).toFixed(0)}" fill="none"/>`;
        /* bromelias y musgo agarrados a la corteza */
        for (let j = 0; j < 3; j++) {
          const by = 300 + j * 190;
          if (!libre(x - 30, by - 20, 60, 40)) continue;
          o += `<g transform="translate(${(x + (j % 2 ? w * .45 : -w * .45)).toFixed(0)} ${by})"><path d="M0 0 q-26 -6 -30 -26 q22 -4 30 12 q8 -20 30 -14 q-6 22 -30 28 Z" fill="#4c9a3f"/>
            <path d="M0 -4 q-14 -18 -6 -34 q14 10 12 30 q10 -18 24 -20 q-4 20 -22 30 Z" fill="#66bb6a"/>
            <circle cx="0" cy="-8" r="5" fill="#ef5350"/></g>`;
        }
        return o + `</g>`;
      };
      /* el fuste de la ceiba gigante se dibuja aparte, ya sobre el suelo */
      s += tronco(130, .9, 990) + tronco(400, 1.1, 1000) + tronco(680, .8, 975)
        + tronco(1400, .95, 965) + tronco(1650, .68, 945)
        + tronco(3300, .8, 900) + tronco(4160, 1.1, 890);
      /* dos troncos lejanos, mas finos y desvaidos: dan fondo al hueco */
      s += `<g opacity=".55">${tronco(1210, .5, 926)}</g><g opacity=".45">${tronco(880, .42, 918)}</g>`;
      /* ---------- LAS LIANAS QUE CUELGAN DEL DOSEL ---------- */
      [[300, 430, 1], [620, 520, 0], [900, 400, 1], [1230, 470, 0], [1520, 430, 1], [1820, 380, 0],
        [2260, 486, 1], [2500, 512, 0], [2740, 524, 0], [3060, 470, 1], [3480, 430, 0], [3960, 400, 1]].forEach((l, i) => {
        s += `<g>${i % 3 === 0 ? `<animateTransform attributeName="transform" type="rotate" values="-1.4 ${l[0]} 150;1.4 ${l[0]} 150;-1.4 ${l[0]} 150" dur="${11 + i}s" repeatCount="indefinite"/>` : ""}
          <path d="M${l[0]} 150 Q${l[0] - 44} ${(l[1] / 2 + 150).toFixed(0)} ${l[0] + 18} ${l[1]}" stroke="#33691e" stroke-width="9" fill="none" stroke-linecap="round"/>
          <path d="M${l[0] + 18} ${l[1]} q30 26 60 8" stroke="#33691e" stroke-width="7" fill="none" stroke-linecap="round"/>
          <ellipse cx="${l[0] - 16}" cy="${(l[1] * .55 + 90).toFixed(0)}" rx="17" ry="8" fill="#4c9a3f" transform="rotate(${l[2] ? 24 : -24} ${l[0] - 16} ${(l[1] * .55 + 90).toFixed(0)})"/>
          <ellipse cx="${l[0] + 40}" cy="${(l[1] + 12).toFixed(0)}" rx="16" ry="7" fill="#66bb6a"/></g>`;
      });
      /* ---------- EL SUELO DE LA SELVA, HASTA DONDE EMPIEZA EL BARRO ---------- */
      s += `<path d="M-20 936 Q320 906 700 928 Q1080 950 1420 912 Q1620 892 1760 906 L1760 1100 L-20 1100 Z" fill="url(#amzXSuelo)"/>
        <path d="M-20 936 Q320 906 700 928 Q1080 950 1420 912 Q1620 892 1760 906 L1760 938 Q1620 924 1420 944 Q1080 982 700 960 Q320 938 -20 966 Z" fill="#4a6b2b"/>`;
      /* LA CEIBA GIGANTE: su fuste palido arranca bajo la copa del punto y
         se planta en el suelo con contrafuertes enormes, como el arbol de verdad */
      s += `<g>
        <ellipse cx="1064" cy="946" rx="142" ry="24" fill="rgba(0,0,0,.2)"/>
        <path d="M1020 950 Q1032 780 1042 496 L1078 496 Q1088 780 1100 950 Z" fill="url(#amzXCeiba)"/>
        <path d="M1022 872 Q998 906 940 954 L1022 954 Z" fill="#5a6144"/>
        <path d="M1098 872 Q1122 906 1180 954 L1098 954 Z" fill="#5a6144"/>
        <path d="M1026 906 Q1014 924 976 956 L1026 956 Z" fill="#454c31"/>
        <path d="M1094 906 Q1106 924 1144 956 L1094 956 Z" fill="#454c31"/>
        <path d="M1046 916 Q1044 936 1028 956 L1050 956 Z" fill="#4e5638"/>
        <path d="M1074 916 Q1076 936 1092 956 L1070 956 Z" fill="#4e5638"/>
        <path d="M1040 580 Q1032 770 1026 930" stroke="rgba(0,0,0,.16)" stroke-width="9" fill="none"/>
        <path d="M1058 600 Q1052 780 1046 930" stroke="rgba(0,0,0,.1)" stroke-width="6" fill="none"/>
        <path d="M1084 580 Q1090 770 1094 930" stroke="rgba(255,255,255,.13)" stroke-width="7" fill="none"/>
        <g transform="translate(1014 690)"><path d="M0 0 q-26 -6 -30 -26 q22 -4 30 12 q8 -20 30 -14 q-6 22 -30 28 Z" fill="#4c9a3f"/>
          <path d="M0 -4 q-14 -18 -6 -34 q14 10 12 30 q10 -18 24 -20 q-4 20 -22 30 Z" fill="#66bb6a"/>
          <circle cx="0" cy="-8" r="5" fill="#ef5350"/></g>
        <g transform="translate(1112 848)"><path d="M0 0 q-26 -6 -30 -26 q22 -4 30 12 q8 -20 30 -14 q-6 22 -30 28 Z" fill="#4c9a3f"/>
          <path d="M0 -4 q-14 -18 -6 -34 q14 10 12 30 q10 -18 24 -20 q-4 20 -22 30 Z" fill="#66bb6a"/>
          <circle cx="0" cy="-8" r="5" fill="#ef5350"/></g></g>`;
      /* el monticulo de tierra y hojarasca donde se asienta el tronco caido:
         sin el, el tronco (y el jaguar encima) flotaban sobre el suelo */
      s += `<g><ellipse cx="266" cy="906" rx="248" ry="34" fill="rgba(0,0,0,.2)"/>
        <path d="M-20 948 Q60 906 168 886 Q286 866 392 878 Q470 888 512 918 Q536 936 534 952 L-20 954 Z" fill="#375420"/>
        <path d="M20 940 Q110 902 210 890 Q320 876 400 892 Q456 904 490 930" stroke="#48682a" stroke-width="11" fill="none" stroke-linecap="round" opacity=".85"/>
        <g fill="#4a6b2b"><ellipse cx="96" cy="912" rx="34" ry="12"/><ellipse cx="300" cy="898" rx="28" ry="10"/><ellipse cx="450" cy="920" rx="24" ry="9"/></g>
        <g fill="#6d4c41" opacity=".7"><ellipse cx="150" cy="928" rx="16" ry="6" transform="rotate(-12 150 928)"/><ellipse cx="368" cy="912" rx="14" ry="5" transform="rotate(9 368 912)"/></g></g>`;
      /* el tronco caido donde descansa el jaguar */
      s += `<g><path d="M70 858 Q260 834 452 850 L452 882 Q260 866 70 890 Z" fill="#6b5140"/>
        <ellipse cx="452" cy="866" rx="12" ry="16" fill="#8d6e63"/><ellipse cx="452" cy="866" rx="5" ry="9" fill="#5d4037"/>
        <g stroke="#4e3a2c" stroke-width="3" fill="none"><path d="M120 862 Q260 842 410 856 M120 880 Q260 860 410 874"/></g>
        <g fill="#4c9a3f"><ellipse cx="160" cy="850" rx="21" ry="8"/><ellipse cx="320" cy="844" rx="18" ry="7"/></g></g>`;
      /* helechos, hojarasca y la fila de hormigas cortadoras */
      const helecho = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})" stroke="#2e7d32" stroke-width="10" fill="none" stroke-linecap="round">
        <path d="M0 0 Q-45 -60 -95 -75"/><path d="M0 0 Q0 -80 -15 -125"/><path d="M0 0 Q45 -60 95 -75"/><path d="M0 0 Q28 -75 60 -110"/><path d="M0 0 Q-28 -75 -60 -110"/></g>`;
      s += helecho(240, 986, .85) + helecho(600, 1000, .7) + helecho(880, 966, .95) + helecho(1180, 1010, .8)
        + helecho(1420, 976, .72) + helecho(1660, 1030, .62);
      for (let i = 0; i < 20; i++) {
        const x = 40 + az() * 1660, y = 950 + az() * 130;
        s += `<ellipse cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" rx="${(12 + az() * 9).toFixed(0)}" ry="6" fill="${["#6d4c41", "#7a5a3c", "#4c6b28"][i % 3]}" opacity=".75" transform="rotate(${(az() * 70 - 35).toFixed(0)} ${x.toFixed(0)} ${y.toFixed(0)})"/>`;
      }
      /* el reguero de hojas que llevan las hormigas hasta su hormiguero */
      s += `<path d="M1180 962 Q1300 944 1400 950 Q1470 954 1512 944" stroke="#c8a24a" stroke-width="7" fill="none" opacity=".55" stroke-dasharray="4 12"/>
        <ellipse cx="1524" cy="944" rx="44" ry="16" fill="#7a5a3c" opacity=".75"/>
        <ellipse cx="1524" cy="936" rx="28" ry="9" fill="#8a6a44" opacity=".7"/>
        <ellipse cx="1572" cy="916" rx="30" ry="10" fill="#4a6b2b"/>
        <g fill="#4c9a3f"><ellipse cx="1552" cy="910" rx="13" ry="6" transform="rotate(-16 1552 910)"/><ellipse cx="1592" cy="912" rx="11" ry="5" transform="rotate(14 1592 912)"/></g>`;
      /* ramas de apoyo: el perezoso, el mono y la orquidea se sostienen en ellas */
      s += `<path d="M1034 552 Q760 500 412 492" stroke="#5a4433" stroke-width="20" fill="none" stroke-linecap="round"/>
        <path d="M1004 822 Q890 806 704 824" stroke="#5a4433" stroke-width="18" fill="none" stroke-linecap="round"/>
        <path d="M1092 744 Q1220 722 1372 738" stroke="#5a4433" stroke-width="16" fill="none" stroke-linecap="round"/>
        <g fill="#4c9a3f"><ellipse cx="574" cy="496" rx="23" ry="9" transform="rotate(-14 574 496)"/><ellipse cx="680" cy="502" rx="19" ry="8" transform="rotate(-9 680 502)"/>
        <ellipse cx="722" cy="822" rx="21" ry="9" transform="rotate(12 722 822)"/><ellipse cx="880" cy="812" rx="18" ry="8" transform="rotate(8 880 812)"/>
        <ellipse cx="1360" cy="736" rx="20" ry="9" transform="rotate(10 1360 736)"/><ellipse cx="1240" cy="726" rx="17" ry="8" transform="rotate(-8 1240 726)"/></g>`;
      /* ---------- TRANSICION: LA SELVA SE ABRE Y APARECE LA ORILLA DE BARRO ---------- */
      /* el sotobosque se aclara y baja de altura camino del agua */
      /* el sotobosque se encoge siguiendo la bajada de la orilla, sin meterse en el agua */
      [[1150, 858, 1], [1280, 876, .9], [1400, 890, .8], [1500, 902, .7], [1590, 914, .58], [1668, 926, .46]].forEach((m, i) => {
        s += `<g transform="translate(${m[0]} ${m[1]}) scale(${m[2]})" opacity="${(0.95 - i * 0.11).toFixed(2)}">
          <ellipse cx="0" cy="-14" rx="62" ry="30" fill="${["#2e7d32", "#37833a", "#3f8c40"][i % 3]}"/>
          <ellipse cx="-38" cy="2" rx="34" ry="19" fill="#256b28"/><ellipse cx="40" cy="0" rx="30" ry="17" fill="#33823a"/></g>`;
      });
      /* la niebla que cose la selva con el rio */
      s += `<ellipse cx="1700" cy="820" rx="300" ry="52" fill="rgba(255,255,255,.13)"><animate attributeName="rx" values="300;350;300" dur="18s" repeatCount="indefinite"/></ellipse>`;
      /* ---------- LA OTRA ORILLA VISTA DE LEJOS: el aire abierto sobre el rio ---------- */
      /* el claro luminoso: sobre el agua la selva se abre y entra la luz */
      s += `<ellipse cx="2480" cy="466" rx="900" ry="216" fill="url(#amzXCielo)" opacity=".62"/>
        <ellipse cx="3620" cy="486" rx="660" ry="180" fill="url(#amzXCielo)" opacity=".55"/>
        <ellipse cx="1980" cy="510" rx="400" ry="150" fill="url(#amzXCielo)" opacity=".45"/>`;
      /* tres hileras de copas cada vez menos desvaidas: la selva de enfrente.
         cada hilera es una sola silueta ondulada, asi se lee como bosque y no como bolas */
      const hilera = (base, rMin, rVar, x0, x1, fill, op) => {
        let d = `M${x0} ${base}`, x = x0, i = 0;
        while (x < x1) {
          const r = rMin + ((i * 37) % 5) * rVar;
          d += ` a${r} ${r} 0 0 1 ${r * 2} 0`;
          x += r * 2; i++;
        }
        return `<path d="${d} L${x} ${base + 90} L${x0} ${base + 90} Z" fill="${fill}" opacity="${op}"/>`;
      };
      /* el cordal lejanisimo del fondo: la selva sigue y sigue hasta el horizonte.
         va debajo de todo lo demas, para que el claro tenga profundidad */
      s += `<path d="M1760 620 Q1900 528 2060 546 Q2180 560 2280 512 Q2420 452 2560 494 Q2680 530 2800 500
        Q2960 460 3100 502 Q3240 542 3380 508 Q3540 470 3700 506 Q3900 552 4060 512 Q4160 486 4240 500 L4240 640 L1760 640 Z"
        fill="#93bd9b" opacity=".4"/>`;
      /* arboles emergentes del fondo: los gigantes que sobresalen del dosel */
      [[1962, 452, 62, .5], [2352, 424, 74, .46], [2882, 438, 68, .48], [3062, 466, 58, .52]].forEach(t => {
        s += `<g opacity="${t[3]}" fill="#7fb08a"><path d="M${t[0] - 5} ${t[1] + 170} L${t[0] - 3} ${t[1] + 6} L${t[0] + 3} ${t[1] + 6} L${t[0] + 5} ${t[1] + 170} Z"/>
          <ellipse cx="${t[0]}" cy="${t[1]}" rx="${t[2]}" ry="${(t[2] * .5).toFixed(0)}"/>
          <ellipse cx="${t[0] - t[2] * .6}" cy="${t[1] + 20}" rx="${(t[2] * .5).toFixed(0)}" ry="${(t[2] * .3).toFixed(0)}"/>
          <ellipse cx="${t[0] + t[2] * .6}" cy="${t[1] + 22}" rx="${(t[2] * .46).toFixed(0)}" ry="${(t[2] * .28).toFixed(0)}"/></g>`;
      });
      /* cuatro ceibas lejanas que asoman por encima de la linea de arboles.
         antes iban tan desvaidas que no se veian: ahora tienen su tono propio */
      [[2120, 476, 96, .8], [2690, 452, 108, .74], [3268, 490, 86, .82], [3906, 466, 92, .78]].forEach(c => {
        s += `<g opacity="${c[3]}"><path d="M${c[0] - 9} ${c[1] + 150} L${c[0] - 5} ${c[1]} L${c[0] + 5} ${c[1]} L${c[0] + 9} ${c[1] + 150} Z" fill="#4f8a62"/>
          <ellipse cx="${c[0]}" cy="${c[1] + 8}" rx="${c[2]}" ry="${(c[2] * .38).toFixed(0)}" fill="#3f7b55"/>
          <ellipse cx="${c[0]}" cy="${c[1] - 4}" rx="${(c[2] * .94).toFixed(0)}" ry="${(c[2] * .36).toFixed(0)}" fill="#5d9d70"/>
          <ellipse cx="${c[0] - c[2] * .5}" cy="${c[1] + 14}" rx="${(c[2] * .48).toFixed(0)}" ry="${(c[2] * .24).toFixed(0)}" fill="#54936a"/>
          <ellipse cx="${c[0] + c[2] * .52}" cy="${c[1] + 16}" rx="${(c[2] * .44).toFixed(0)}" ry="${(c[2] * .22).toFixed(0)}" fill="#54936a"/>
          <ellipse cx="${c[0] - c[2] * .18}" cy="${c[1] - 16}" rx="${(c[2] * .4).toFixed(0)}" ry="${(c[2] * .2).toFixed(0)}" fill="#6cae7e"/></g>`;
      });
      s += hilera(566, 32, 9, 1830, 4240, "#6ba377", .62)
        + `<ellipse cx="2500" cy="566" rx="700" ry="30" fill="rgba(255,255,255,.12)"/><ellipse cx="3700" cy="574" rx="520" ry="26" fill="rgba(255,255,255,.1)"/>`
        + hilera(608, 28, 8, 1850, 4240, "url(#amzXLejano)", .7)
        + `<ellipse cx="2700" cy="608" rx="760" ry="24" fill="rgba(255,255,255,.1)"/>`
        + hilera(648, 22, 7, 1870, 4240, "#3f8c46", .82);
      /* guacamayos cruzando el claro. antes eran dos rayitas y se leian como
         garabatos: ahora tienen cuerpo, alas y la cola larga de un guacamayo */
      const ave = (x, y, k, cuerpo, ala, op) => `<g transform="translate(${x} ${y}) scale(${k})" opacity="${op}">
        <path d="M-3 0 q-26 -20 -52 -12 q18 18 44 16 Z" fill="${ala}"/>
        <path d="M3 0 q26 -20 52 -12 q-18 18 -44 16 Z" fill="${ala}"/>
        <path d="M-8 3 q-26 10 -44 22 q22 -2 42 -12 Z" fill="${cuerpo}"/>
        <ellipse cx="0" cy="2" rx="14" ry="8" fill="${cuerpo}"/>
        <circle cx="12" cy="-2" r="6" fill="${cuerpo}"/>
        <path d="M17 -3 l9 3 l-9 3 Z" fill="#4a3a2c"/></g>`;
      s += `<g><animateTransform attributeName="transform" type="translate" values="0 0;46 -14;0 0" dur="34s" repeatCount="indefinite"/>
        ${ave(2140, 428, .72, "#c94b3f", "#3f6fae", .9)}${ave(2268, 392, .62, "#c94b3f", "#3f6fae", .88)}${ave(2402, 446, .54, "#3f6fae", "#dda42e", .85)}</g>`;
      /* y mas lejos, la bandada pequenita: solo siluetas, dan la escala del claro */
      s += `<g><animateTransform attributeName="transform" type="translate" values="0 0;-30 10;0 0" dur="41s" repeatCount="indefinite"/>
        ${ave(1898, 356, .36, "#4a7a63", "#4a7a63", .55)}${ave(1982, 336, .3, "#4a7a63", "#4a7a63", .5)}${ave(2612, 348, .34, "#4a7a63", "#4a7a63", .52)}
        ${ave(2748, 372, .28, "#4a7a63", "#4a7a63", .48)}${ave(3004, 408, .38, "#4a7a63", "#4a7a63", .55)}
        ${ave(2486, 462, .34, "#4a7a63", "#4a7a63", .5)}${ave(2566, 442, .28, "#4a7a63", "#4a7a63", .46)}${ave(2932, 470, .32, "#4a7a63", "#4a7a63", .5)}</g>`;
      /* tres morfos azules revoloteando sobre el agua, la nota de color del claro */
      [[2214, 520, .5, 9], [2566, 496, .42, 12], [2864, 542, .46, 15]].forEach(m => {
        s += `<g transform="translate(${m[0]} ${m[1]}) scale(${m[2]})" opacity=".85">
          <animateTransform attributeName="transform" type="translate" values="0 0;14 -18;0 0" dur="${m[3]}s" repeatCount="indefinite" additive="sum"/>
          <path d="M0 0 q-30 -26 -46 -8 q-6 20 18 26 q18 4 28 -8 Z" fill="#5f96dd"/>
          <path d="M0 0 q30 -26 46 -8 q6 20 -18 26 q-18 4 -28 -8 Z" fill="#5f96dd"/>
          <path d="M-2 6 q-18 14 -12 26 q14 6 20 -10 Z" fill="#4a80cc"/><path d="M2 6 q18 14 12 26 q-14 6 -20 -10 Z" fill="#4a80cc"/>
          <ellipse cx="0" cy="8" rx="5" ry="16" fill="#2a3a52"/></g>`;
      });
      /* nubes blandas: sin ellas el claro se quedaba en verde liso */
      s += `<ellipse cx="2330" cy="360" rx="520" ry="66" fill="rgba(255,255,255,.11)"/>
        <ellipse cx="2900" cy="332" rx="380" ry="52" fill="rgba(255,255,255,.1)"/>
        <ellipse cx="2010" cy="418" rx="300" ry="42" fill="rgba(255,255,255,.09)"/>`;
      /* un velo de bruma sobre el islote para que el caiman no se pierda en el verde */
      s += `<ellipse cx="2860" cy="636" rx="150" ry="58" fill="rgba(255,255,255,.16)"/>`;
      /* la playa de la orilla de enfrente, una lengua de arena antes del agua */
      s += `<path d="M1880 700 Q1946 656 2032 672 Q2210 694 2460 690 Q2740 696 2960 680 Q3120 664 3306 626 L3308 614 Q3110 634 2960 646 Q2740 662 2460 656 Q2210 660 2034 636 Q1948 620 1892 664 Z" fill="url(#amzXOrilla)" opacity=".9"/>
        <path d="M1960 664 Q2300 686 2700 678 Q2980 670 3200 630" stroke="rgba(255,255,255,.2)" stroke-width="7" fill="none" stroke-linecap="round"/>`;
      /* matas bajas al borde del agua, del lado de enfrente */
      for (let x = 1930; x <= 3260; x += 78) {
        const cy = 664 - (x - 1930) * 0.022, r = 22 + (x % 4) * 5;
        if (!libre(x - r, cy - r, r * 2, r * 2)) continue;
        s += `<g opacity=".9"><ellipse cx="${x}" cy="${cy.toFixed(0)}" rx="${r}" ry="${(r * .6).toFixed(0)}" fill="${["#2e7d32", "#37833a", "#43a047"][x % 3]}"/>
          <ellipse cx="${x - r * .7}" cy="${(cy + 6).toFixed(0)}" rx="${(r * .55).toFixed(0)}" ry="${(r * .38).toFixed(0)}" fill="#256b28"/></g>`;
      }
      /* ---------- EL RIO AMAZONAS, ANCHO ---------- */
      const orilla = "M1560 1100 Q1652 928 1748 826 Q1802 764 1878 704 Q1934 664 2030 678 Q2210 700 2460 696 Q2740 702 2960 686 Q3060 678 3140 650";
      s += `<path d="${orilla} L3260 1100 L1560 1100 Z" fill="url(#amzXAgua)"/>
        <path d="${orilla}" stroke="url(#amzXBarro)" stroke-width="34" fill="none"/>
        <path d="${orilla}" stroke="rgba(255,255,255,.22)" stroke-width="9" fill="none"/>`;
      /* la orilla de enfrente tampoco es una regla: bancos de arena que se
         meten en el agua y calas que se comen la arena, cruzandose */
      [[2072, 686, 60, 19, -6], [2286, 708, 52, 16, 4], [2520, 702, 66, 18, -3], [2712, 708, 46, 15, 5]].forEach(b => {
        s += `<ellipse cx="${b[0]}" cy="${b[1]}" rx="${b[2]}" ry="${b[3]}" fill="#9c8158" transform="rotate(${b[4]} ${b[0]} ${b[1]})"/>
          <ellipse cx="${b[0] + 8}" cy="${b[1] + 9}" rx="${(b[2] * .68).toFixed(0)}" ry="${(b[3] * .6).toFixed(0)}" fill="rgba(150,124,84,.45)" transform="rotate(${b[4]} ${b[0] + 8} ${b[1] + 9})"/>`;
      });
      [[2178, 689, 42, 22, 5], [2400, 695, 46, 21, -4], [2626, 695, 40, 21, 3], [2856, 689, 44, 21, -5]].forEach(c => {
        s += `<ellipse cx="${c[0]}" cy="${c[1]}" rx="${c[2]}" ry="${c[3]}" fill="#6fb0ac" transform="rotate(${c[4]} ${c[0]} ${c[1]})"/>
          <path d="M${c[0] - c[2] * .6} ${c[1] + 4} q${(c[2] * .5).toFixed(0)} 8 ${c[2]} 0" stroke="rgba(255,255,255,.3)" stroke-width="4" fill="none" stroke-linecap="round"/>`;
      });
      /* un par de troncos varados y unos cantos en esa playa */
      s += `<g><path d="M2320 668 Q2394 658 2466 668 L2466 680 Q2394 690 2320 680 Z" fill="#6b5140"/>
        <path d="M2336 672 Q2394 665 2452 672" stroke="#4e3a2c" stroke-width="2.6" fill="none"/></g>
        <g fill="#8a7a62" opacity=".9"><ellipse cx="2148" cy="694" rx="13" ry="7"/><ellipse cx="2600" cy="690" rx="11" ry="6" fill="#a3917a"/>
        <ellipse cx="2960" cy="678" rx="10" ry="5"/></g>`;
      /* la corriente y los reflejos del cielo sobre el agua.
         las dos vetas ocres son el limo que arrastra el Amazonas de verdad:
         el agua sigue leyendose como agua, pero no como una piscina */
      s += `<path d="M1700 1046 Q1810 906 1930 826 Q2100 758 2380 762 Q2660 766 2900 796 Q3040 812 3150 782" stroke="rgba(196,168,110,.26)" stroke-width="46" fill="none" stroke-linecap="round"/>
        <path d="M1786 1092 Q1900 964 2020 892 Q2200 812 2470 838 Q2740 862 3000 886" stroke="rgba(178,150,96,.2)" stroke-width="30" fill="none" stroke-linecap="round"/>
        <path d="M1640 1060 Q1740 900 1850 810 Q1950 748 2200 724 Q2480 702 2760 730 Q2980 750 3120 712" stroke="rgba(174,213,129,.3)" stroke-width="28" fill="none" stroke-linecap="round"/>
        <path d="M1700 1080 Q1820 930 1960 852 Q2160 772 2480 800 Q2800 828 3110 780" stroke="rgba(255,255,255,.16)" stroke-width="16" fill="none" stroke-linecap="round" stroke-dasharray="70 120">
        <animate attributeName="stroke-dashoffset" values="0;-380" dur="26s" repeatCount="indefinite"/></path>`;
      for (let i = 0; i < 16; i++) {
        const x = 1830 + i * 84, y = 838 + (i % 4) * 58;
        if (!libre(x - 30, y - 10, 60, 20)) continue;
        s += `<path d="M${x} ${y} q26 -12 52 0" stroke="rgba(255,255,255,.3)" stroke-width="5" fill="none" stroke-linecap="round"/>`;
      }
      s += `<g fill="rgba(255,255,255,.1)"><ellipse cx="2000" cy="870" rx="160" ry="16"/><ellipse cx="2460" cy="800" rx="210" ry="14"/><ellipse cx="2900" cy="860" rx="200" ry="18"/><ellipse cx="1780" cy="1010" rx="140" ry="14"/></g>
        <g fill="rgba(30,60,26,.16)"><ellipse cx="2260" cy="790" rx="150" ry="26"/><ellipse cx="2700" cy="768" rx="160" ry="22"/><ellipse cx="3050" cy="790" rx="120" ry="20"/></g>`;
      /* el tronco flotante donde se enrosca la anaconda */
      s += `<g><ellipse cx="2382" cy="754" rx="150" ry="16" fill="rgba(255,255,255,.14)"/>
        <path d="M2250 728 Q2380 714 2512 728 L2512 750 Q2380 766 2250 750 Z" fill="#5a4433"/>
        <ellipse cx="2512" cy="739" rx="9" ry="11" fill="#7a5a3c"/>
        <path d="M2272 734 Q2380 724 2492 734" stroke="#4e3a2c" stroke-width="3" fill="none"/></g>`;
      /* el banco de barro donde toma el sol el caiman: sale de la playa de
         enfrente y se mete en el agua. va mas oscuro y mojado que la arena para
         que se lea como otra cosa y no como un trozo mas de playa */
      s += `<ellipse cx="2864" cy="784" rx="132" ry="18" fill="rgba(26,84,100,.4)"/>
        <path d="M2726 664 Q2820 636 2946 664 Q3002 680 2992 714 Q2962 750 2872 764 Q2776 774 2732 746 Q2698 724 2706 700 Q2710 678 2726 664 Z" fill="#7b6539"/>
        <path d="M2742 676 Q2830 652 2938 676 Q2978 688 2970 708" stroke="rgba(255,255,255,.24)" stroke-width="8" fill="none" stroke-linecap="round"/>
        <path d="M2740 744 Q2802 766 2884 760 Q2950 752 2984 724" stroke="#5c4a2a" stroke-width="13" fill="none" stroke-linecap="round" opacity=".75"/>
        <g fill="#96814f"><ellipse cx="2766" cy="704" rx="17" ry="8"/><ellipse cx="2922" cy="696" rx="12" ry="6"/><ellipse cx="2848" cy="728" rx="19" ry="7"/></g>
        <g stroke="#5a4433" stroke-width="5" fill="none" stroke-linecap="round"><path d="M2724 732 q-30 10 -46 28 M2970 710 q28 10 42 28"/></g>`;
      /* los nenufares gigantes Victoria, con su borde levantado */
      [[2620, 990, 66], [2420, 1006, 48], [2820, 976, 54], [2200, 1002, 42], [2760, 896, 40], [1980, 1030, 38]].forEach(n => {
        s += `<ellipse cx="${n[0]}" cy="${n[1] + 8}" rx="${n[2]}" ry="${(n[2] * .34).toFixed(0)}" fill="rgba(0,0,0,.14)"/>
          <circle cx="${n[0]}" cy="${n[1]}" r="${n[2]}" fill="#66bb6a"/>
          <circle cx="${n[0]}" cy="${n[1]}" r="${n[2]}" fill="none" stroke="#a5d6a7" stroke-width="6"/>
          <path d="M${n[0]} ${n[1]} L${n[0] + n[2]} ${n[1] - 5} L${n[0] + n[2]} ${n[1] + 7} Z" fill="#388e3c"/>
          <g stroke="#4c9a3f" stroke-width="2.4">${[0, 60, 120].map(a => `<path d="M${n[0]} ${n[1]} L${(n[0] + n[2] * Math.cos(a * Math.PI / 180)).toFixed(0)} ${(n[1] + n[2] * Math.sin(a * Math.PI / 180)).toFixed(0)}"/>`).join("")}</g>`;
      });
      s += `<circle cx="2528" cy="978" r="13" fill="#f8bbd0"/><circle cx="2528" cy="978" r="6" fill="#fff"/>
        <circle cx="2724" cy="868" r="10" fill="#f8bbd0"/><circle cx="2724" cy="868" r="5" fill="#fff"/>`;
      /* el chapoteo bajo el delfin rosado y las ondas de la pirana */
      s += `<g fill="none" stroke="rgba(255,255,255,.5)" stroke-width="5" stroke-linecap="round">
        <path d="M1822 762 q30 -16 62 -4 M1898 772 q28 -14 56 -2"><animate attributeName="opacity" values=".9;.35;.9" dur="4.5s" repeatCount="indefinite"/></path>
        <path d="M2088 972 q34 -14 68 0 M2106 990 q26 -10 52 0"><animate attributeName="opacity" values=".4;.9;.4" dur="5.5s" repeatCount="indefinite"/></path></g>`;
      /* ---------- LA ORILLA DE AQUI: el suelo de selva se vuelve limo y luego agua ---------- */
      const orillaCerca = "M1548 1100 Q1616 1000 1660 936 Q1704 874 1752 822 Q1806 762 1880 702 Q1938 662 2032 676";
      s += `<path d="${orillaCerca}" stroke="url(#amzXOrilla)" stroke-width="52" fill="none" stroke-linecap="round" opacity=".92"/>
        <path d="M1566 1064 Q1640 962 1700 890 Q1770 806 1876 726" stroke="rgba(255,255,255,.16)" stroke-width="10" fill="none" stroke-linecap="round"/>
        <path d="M1600 1090 Q1668 990 1730 918 Q1800 836 1900 764" stroke="rgba(109,85,55,.4)" stroke-width="8" fill="none" stroke-linecap="round"/>`;
      /* juncos y raicillas asomando del limo, ya con los pies en la arena */
      [[1596, 1016, 1], [1652, 940, .95], [1716, 866, .88], [1788, 786, .8], [1858, 716, .72], [1936, 678, .62]].forEach((j, i) => {
        s += `<g transform="translate(${j[0]} ${j[1]}) scale(${j[2]})" stroke="#3f7f33" stroke-width="6" fill="none" stroke-linecap="round" opacity="${(0.92 - i * 0.06).toFixed(2)}">
          <path d="M0 0 q-10 -40 -22 -58 M0 0 q0 -46 4 -66 M0 0 q12 -38 24 -52"/></g>`;
      });
      /* la orilla de aqui tampoco es una cinta de ancho fijo: tres lenguas de
         limo entran en el agua y tres de tierra se comen el limo */
      [[1632, 1026, 38, 14], [1720, 890, 32, 12], [1786, 800, 26, 10]].forEach(l => {
        s += `<ellipse cx="${l[0]}" cy="${l[1]}" rx="${l[2]}" ry="${l[3]}" fill="#9c8158" transform="rotate(-54 ${l[0]} ${l[1]})"/>`;
      });
      [[1578, 992, 34, 13], [1668, 866, 28, 11], [1742, 776, 23, 9]].forEach(v => {
        s += `<ellipse cx="${v[0]}" cy="${v[1]}" rx="${v[2]}" ry="${v[3]}" fill="#2b4216" transform="rotate(-54 ${v[0]} ${v[1]})"/>
          <ellipse cx="${v[0] - 10}" cy="${v[1] - 12}" rx="${(v[2] * .5).toFixed(0)}" ry="${(v[3] * .6).toFixed(0)}" fill="#35521c" transform="rotate(-54 ${v[0] - 10} ${v[1] - 12})"/>`;
      });
      /* una caleta justo debajo del delfin: el agua entra en la orilla y el
         bicho queda nadando y no encallado en el limo */
      s += `<path d="M1820 774 Q1852 736 1900 712 Q1950 690 2014 686 L2020 706 Q1956 712 1906 740 Q1856 768 1824 800 Z" fill="#6fb0ac"/>
        <path d="M1846 764 q28 -22 58 -36 M1884 782 q26 -18 54 -30" stroke="rgba(255,255,255,.32)" stroke-width="5" fill="none" stroke-linecap="round"/>`;
      /* manchas de hierba y hojarasca a caballo entre la tierra y el limo */
      [[1560, 990, 26], [1620, 918, 22], [1690, 848, 20], [1764, 776, 17], [1846, 706, 15]].forEach((m, i) => {
        s += `<ellipse cx="${m[0]}" cy="${m[1]}" rx="${m[2]}" ry="${(m[2] * .42).toFixed(0)}" fill="#4a6b2b" opacity="${(0.85 - i * 0.1).toFixed(2)}"/>`;
      });
      /* ---------- TRANSICION: LA OTRA ORILLA, EL AGUA VUELVE A SER TIERRA ---------- */
      /* la costa entra en diagonal: el agua se va estrechando hacia la esquina */
      const costa = "M2870 1100 Q2980 966 3068 834 Q3122 752 3212 704 Q3330 664 3470 660 Q3770 688 4030 666 Q4130 656 4220 662";
      s += `<path d="${costa} L4220 1100 Z" fill="url(#amzXSuelo)"/>`;
      /* el bajio: el agua se hace poca y deja ver el fondo de arena antes de
         la playa, asi no hay salto seco de azul a ocre */
      [[2856, 1064, 96, 30], [2924, 986, 84, 26], [2986, 906, 72, 23], [3050, 836, 60, 20], [3118, 772, 52, 17], [3196, 724, 44, 15]].forEach(b => {
        s += `<ellipse cx="${b[0]}" cy="${b[1]}" rx="${b[2]}" ry="${b[3]}" fill="rgba(168,140,96,.34)" transform="rotate(-54 ${b[0]} ${b[1]})"/>`;
      });
      /* LA PLAYA: solo vive donde hay agua (el rio muere hacia x=3280) y sus dos
         bordes son distintos, asi que el ancho cambia todo el rato */
      s += `<path d="M2826 1100 Q2914 1002 2948 940 Q2988 870 3040 826 Q3084 774 3140 742 Q3200 708 3272 688 Q3300 680 3326 674
        L3336 716 Q3266 726 3196 756 Q3130 788 3084 844 Q3032 906 2998 976 Q2962 1040 2936 1100 Z" fill="url(#amzXOrilla)"/>
        <path d="M2902 1040 q34 -46 58 -74 M3006 902 q28 -38 52 -60 M3116 796 q30 -22 56 -34" stroke="rgba(255,255,255,.17)" stroke-width="13" fill="none" stroke-linecap="round"/>`;
      /* la orilla deja de ser una linea: lenguas de arena que se meten en el
         agua y lenguas de tierra que se comen la arena, cruzandose en los dos
         sentidos y con hierba plantada justo encima del filo */
      [[2872, 1048, 44, 15], [2986, 878, 34, 12], [3086, 780, 27, 10], [3200, 712, 22, 9]].forEach(l => {
        s += `<ellipse cx="${l[0]}" cy="${l[1]}" rx="${l[2]}" ry="${l[3]}" fill="#9c8158" transform="rotate(-50 ${l[0]} ${l[1]})"/>
          <ellipse cx="${l[0] - 14}" cy="${l[1] + 12}" rx="${(l[2] * .6).toFixed(0)}" ry="${(l[3] * .7).toFixed(0)}" fill="rgba(156,129,88,.5)" transform="rotate(-50 ${l[0] - 14} ${l[1] + 12})"/>`;
      });
      [[2966, 1040, 40, 15], [3036, 910, 34, 13], [3136, 796, 28, 11], [3252, 736, 23, 9]].forEach(v => {
        s += `<ellipse cx="${v[0]}" cy="${v[1]}" rx="${v[2]}" ry="${v[3]}" fill="#2b4216" transform="rotate(-50 ${v[0]} ${v[1]})"/>
          <ellipse cx="${v[0] - 12}" cy="${v[1] - 14}" rx="${(v[2] * .5).toFixed(0)}" ry="${(v[3] * .6).toFixed(0)}" fill="#35521c" transform="rotate(-50 ${v[0] - 12} ${v[1] - 14})"/>`;
      });
      /* cantos rodados y un palo varado, para que la playa tenga cosas */
      s += `<g fill="#8a7a62" opacity=".9"><ellipse cx="2914" cy="1032" rx="15" ry="9"/><ellipse cx="2938" cy="1044" rx="9" ry="6" fill="#a3917a"/>
        <ellipse cx="3002" cy="932" rx="12" ry="7"/><ellipse cx="3088" cy="836" rx="10" ry="6" fill="#a3917a"/><ellipse cx="3160" cy="768" rx="8" ry="5"/></g>
        <g><path d="M2962 1006 Q3006 986 3054 984 L3056 996 Q3008 1000 2966 1018 Z" fill="#7a5a3c"/>
        <path d="M2976 1004 Q3010 992 3046 991" stroke="#5a4433" stroke-width="2.6" fill="none"/></g>`;
      /* donde se acaba el agua se acaba la playa: de x 3280 en adelante la
         orilla se cose con maleza y hojarasca, no con arena */
      s += `<path d="M3268 700 Q3420 674 3580 680 Q3760 698 3960 680 Q4100 668 4220 676" stroke="#416127" stroke-width="52" fill="none" stroke-linecap="round" opacity=".9"/>
        <path d="M3300 682 Q3450 662 3600 668 Q3780 686 3980 668 Q4110 658 4220 664" stroke="#4d7130" stroke-width="22" fill="none" stroke-linecap="round" opacity=".7"/>`;
      /* espuma menuda donde el agua lame la arena (solo donde hay agua) */
      [[2892, 1052], [2952, 1010], [3006, 928], [3062, 850], [3128, 772], [3208, 720]].forEach((f, i) => {
        s += `<path d="M${f[0]} ${f[1]} q22 -12 44 -2" stroke="rgba(255,255,255,.35)" stroke-width="5" fill="none" stroke-linecap="round"><animate attributeName="opacity" values=".8;.35;.8" dur="${6 + i}s" repeatCount="indefinite"/></path>`;
      });
      /* hierbecitas a caballo entre la arena y la tierra, para que no se note el filo */
      [[2948, 1050, .95], [2988, 984, .9], [3030, 916, .85], [3078, 852, .8], [3134, 796, .75], [3196, 752, .72], [3258, 724, .68],
        [3340, 704, .65], [3440, 688, .6], [3560, 692, .62], [3620, 700, .6], [3740, 698, .58], [3840, 706, .55], [3940, 690, .6], [4060, 690, .55], [4160, 680, .5]].forEach(g => {
        s += `<g transform="translate(${g[0]} ${g[1]}) scale(${g[2]})" stroke="#4c9a3f" stroke-width="6" fill="none" stroke-linecap="round" opacity=".8">
          <path d="M0 0 q-14 -22 -30 -32 M0 0 q-4 -26 -2 -40 M0 0 q16 -20 32 -30"/></g>`;
      });
      /* la vegetacion de la otra orilla, que va cerrandose otra vez */
      [[3110, 810], [3170, 742], [3246, 700], [3340, 678], [3450, 666], [3580, 668],
        [3700, 680], [3830, 682], [3960, 672], [4090, 664], [4200, 662]].forEach((v, i) => {
        s += `<g transform="translate(${v[0]} ${v[1]})"><ellipse cx="0" cy="-16" rx="${52 + (i % 3) * 12}" ry="${26 + (i % 2) * 8}" fill="${["#2e7d32", "#1b5e20", "#388e3c"][i % 3]}"/>
          <ellipse cx="${-30 - (i % 2) * 8}" cy="-4" rx="30" ry="17" fill="#256b28"/><ellipse cx="34" cy="-6" rx="28" ry="16" fill="#33823a"/></g>`;
      });
      /* las palmeras de zancos de la orilla, con sus raices al aire */
      [[3186, 816, 1.35], [3846, 728, 1.25], [4112, 714, 1.15]].forEach(r => {
        s += `<g transform="translate(${r[0]} ${r[1]}) scale(${r[2]})" stroke="#5a4433" stroke-width="8" fill="none" stroke-linecap="round">
          <path d="M0 -150 V-52 M0 -52 q-34 18 -50 52 M0 -52 q34 18 50 52 M0 -52 q-10 28 -8 52 M0 -52 q16 26 22 52"/>
          <g stroke="#3f7f33" stroke-width="10"><path d="M0 -152 q-52 -18 -78 -52 M0 -152 q52 -20 80 -52 M0 -152 q-20 -48 -36 -66 M0 -152 q24 -46 44 -64"/></g></g>`;
      });
      [[3300, 744, 1.3], [3648, 704, 1.15], [3968, 692, 1.2]].forEach(pa => {
        s += `<g transform="translate(${pa[0]} ${pa[1]}) scale(${pa[2]})"><path d="M0 0 Q8 -60 2 -112" stroke="#5a4433" stroke-width="11" fill="none" stroke-linecap="round"/>
          <g stroke="#2e7d32" stroke-width="9" fill="none" stroke-linecap="round"><path d="M2 -112 Q-38 -132 -66 -122"/><path d="M2 -112 Q42 -134 72 -124"/><path d="M2 -112 Q-20 -152 -40 -160"/><path d="M2 -112 Q26 -152 48 -162"/><path d="M2 -112 Q0 -158 -4 -170"/></g></g>`;
      });
      /* ---------- EL SUELO DE LA OTRA ORILLA, QUE ANTES ESTABA PELADO ---------- */
      /* las manchas de sol que se cuelan entre las hojas: rompen el verde liso */
      [[3220, 940, 130, 40], [3520, 1040, 150, 46], [3860, 880, 120, 36], [4090, 1010, 110, 34], [3660, 800, 96, 28]].forEach(l => {
        s += `<ellipse cx="${l[0]}" cy="${l[1]}" rx="${l[2]}" ry="${l[3]}" fill="rgba(214,240,160,.12)" transform="rotate(-14 ${l[0]} ${l[1]})"/>`;
      });
      /* una charca de agua de lluvia, con su barrillo alrededor */
      s += `<ellipse cx="3452" cy="1046" rx="118" ry="34" fill="#6b5b38" opacity=".85"/>
        <ellipse cx="3452" cy="1044" rx="100" ry="26" fill="#3f7d84"/>
        <ellipse cx="3452" cy="1040" rx="86" ry="19" fill="#54959a"/>
        <path d="M3400 1036 q28 -8 56 -2 M3428 1052 q22 -6 44 0" stroke="rgba(255,255,255,.35)" stroke-width="4" fill="none" stroke-linecap="round"/>
        <g fill="#4a6b2b"><ellipse cx="3346" cy="1052" rx="26" ry="10"/><ellipse cx="3562" cy="1054" rx="22" ry="9"/></g>`;
      /* hojas anchas de sotobosque: las que de verdad tapan el suelo de la selva */
      const hojaAncha = (x, y, k, gi) => `<g transform="translate(${x} ${y}) scale(${k})">
        <path d="M0 0 Q-16 -44 -6 -92 Q4 -122 22 -128 Q46 -118 50 -84 Q54 -40 30 -4 Z" fill="${gi ? "#2f7a34" : "#3c8b3f"}"/>
        <path d="M12 -8 Q10 -60 22 -122" stroke="#1e5f22" stroke-width="3.4" fill="none"/>
        <path d="M14 -30 L-2 -46 M16 -54 L0 -70 M18 -74 L6 -92 M12 -22 L28 -36 M14 -48 L34 -62 M18 -70 L34 -84" stroke="#1e5f22" stroke-width="2.4" fill="none" opacity=".7"/></g>`;
      s += hojaAncha(3126, 968, 1.1, 0) + hojaAncha(3172, 986, .95, 1) + hojaAncha(3308, 902, .85, 1)
        + hojaAncha(3596, 1006, 1.2, 0) + hojaAncha(3648, 1030, 1, 1) + hojaAncha(3906, 946, 1.05, 1)
        + hojaAncha(3952, 964, .9, 0) + hojaAncha(4118, 1064, 1.25, 0) + hojaAncha(3406, 1004, .8, 1)
        + hojaAncha(4022, 1082, 1.1, 1);
      /* dos bromelias de suelo con su flor, y un par de palmitos jovenes */
      [[3268, 858, 1], [3822, 1002, 1.2], [4152, 892, .9]].forEach(b => {
        s += `<g transform="translate(${b[0]} ${b[1]}) scale(${b[2]})">
          <path d="M0 0 q-38 -10 -46 -40 q34 -6 46 18 q12 -30 46 -22 q-10 34 -46 44 Z" fill="#4c9a3f"/>
          <path d="M0 -6 q-20 -28 -8 -52 q20 16 18 46 q14 -28 36 -30 q-6 30 -32 44 Z" fill="#66bb6a"/>
          <circle cx="0" cy="-14" r="7" fill="#ef5350"/><circle cx="-9" cy="-8" r="4" fill="#fb8c00"/></g>`;
      });
      [[3760, 862, .62], [4062, 1046, .8]].forEach(pj => {
        s += `<g transform="translate(${pj[0]} ${pj[1]}) scale(${pj[2]})" stroke="#3f7f33" stroke-width="9" fill="none" stroke-linecap="round">
          <path d="M0 0 V-46 M0 -40 q-40 -14 -58 -44 M0 -40 q40 -16 60 -44 M0 -44 q-18 -34 -30 -50 M0 -44 q20 -32 34 -48"/></g>`;
      });
      /* helechos, setas en el tronco con musgo y el reguero de hormigas */
      s += helecho(3160, 872, .8) + helecho(3400, 900, .9) + helecho(3700, 950, .75) + helecho(4020, 912, .85)
        + helecho(3252, 1064, .95) + helecho(3872, 1078, .85) + helecho(4162, 962, .7);
      s += `<g><path d="M3110 1042 Q3260 1012 3410 1026 Q3560 1040 3700 1016" stroke="#c8a24a" stroke-width="6" fill="none" opacity=".45" stroke-dasharray="4 12"/>
        <ellipse cx="3086" cy="1050" rx="34" ry="13" fill="#7a5a3c" opacity=".8"/><ellipse cx="3086" cy="1044" rx="21" ry="8" fill="#8a6a44" opacity=".75"/></g>`;
      /* cantos, ramitas caidas y hojarasca de colores */
      s += `<g fill="#7f7462" opacity=".85"><ellipse cx="3340" cy="962" rx="17" ry="9"/><ellipse cx="3362" cy="972" rx="10" ry="6" fill="#948976"/>
        <ellipse cx="3990" cy="1024" rx="14" ry="8"/><ellipse cx="4184" cy="944" rx="12" ry="7" fill="#948976"/></g>
        <g stroke="#5d4433" stroke-width="6" fill="none" stroke-linecap="round" opacity=".9">
        <path d="M3216 1004 q46 14 92 6"/><path d="M3806 1052 q40 -12 78 -6"/><path d="M4076 892 q34 12 62 4"/></g>
        <g><ellipse cx="3742" cy="926" rx="16" ry="8" fill="#e8dcc0"/><ellipse cx="3742" cy="922" rx="16" ry="6" fill="#f4ecd8"/>
        <rect x="3739" y="926" width="6" height="11" rx="3" fill="#e8dcc0"/>
        <ellipse cx="3778" cy="936" rx="11" ry="6" fill="#e8dcc0"/><ellipse cx="3778" cy="933" rx="11" ry="4.4" fill="#f4ecd8"/>
        <rect x="3775.5" y="936" width="5" height="9" rx="2.5" fill="#e8dcc0"/></g>`;
      for (let i = 0; i < 26; i++) {
        const x = 3080 + az() * 1110, y = 780 + az() * 300;
        s += `<ellipse cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" rx="${(11 + az() * 9).toFixed(0)}" ry="6" fill="${["#6d4c41", "#7a5a3c", "#4c6b28", "#b5651d", "#c98a2e"][i % 5]}" opacity=".7" transform="rotate(${(az() * 70 - 35).toFixed(0)} ${x.toFixed(0)} ${y.toFixed(0)})"/>`;
      }
      /* ---------- EL ARBOL EMERGENTE: las ramas donde se posan las aves ---------- */
      s += `<ellipse cx="3542" cy="904" rx="140" ry="26" fill="rgba(0,0,0,.22)"/>
        <path d="M3500 900 q30 -350 -8 -680 h86 q34 330 6 680 Z" fill="url(#amzXTronco)"/>
        <g fill="#4e3a2c"><path d="M3500 824 Q3466 872 3392 908 L3506 908 Z"/><path d="M3584 824 Q3618 872 3692 908 L3578 908 Z"/>
          <path d="M3516 860 Q3500 888 3470 908 L3530 908 Z"/><path d="M3568 860 Q3584 888 3614 908 L3554 908 Z"/></g>
        <path d="M3512 320 Q3498 600 3514 878" stroke="rgba(0,0,0,.18)" stroke-width="12" fill="none"/>`;
      /* una rama de verdad: sale gruesa del tronco, se comba con su propio peso
         y se afina hacia la punta. antes eran palos rectos del mismo grosor de
         punta a punta y las tres largas se leian como peldanos de una escalera */
      const rama = (x0, y0, x1, y1, gr, comba) => {
        const dx = x1 - x0, dy = y1 - y0, L = Math.hypot(dx, dy) || 1;
        const nx = -dy / L, ny = dx / L;
        const mx = (x0 + x1) / 2, my = (y0 + y1) / 2 + (comba === undefined ? L * .07 : comba);
        const g0 = gr / 2, g1 = gr * .2, gm = (g0 + g1) / 2;
        const p = (x, y, sg, g) => `${(x + sg * nx * g).toFixed(0)} ${(y + sg * ny * g).toFixed(0)}`;
        return `<path d="M${p(x0, y0, 1, g0)} Q${p(mx, my, 1, gm)} ${p(x1, y1, 1, g1)} L${p(x1, y1, -1, g1)} Q${p(mx, my, -1, gm)} ${p(x0, y0, -1, g0)} Z" fill="#5a4433"/>`;
      };
      s += rama(3512, 446, 3138, 366, 22, 34) + rama(3506, 300, 3260, 356, 14, 16)
        + rama(3520, 262, 3372, 246, 16, 14) + rama(3540, 232, 3768, 214, 15, 26)
        + rama(3762, 216, 3902, 266, 11, 10) + rama(3546, 372, 3688, 402, 13, 12)
        + rama(3556, 552, 4150, 542, 24, 54) + rama(3956, 552, 4062, 498, 9, -12)
        + rama(3336, 396, 3244, 434, 7, 8);
      /* de la rama larga cuelgan una liana y dos bromelias: asi deja de leerse
         como un peldano y se lee como la rama de un arbol vivo */
      s += `<path d="M3700 578 Q3676 640 3706 706 Q3730 758 3702 800" stroke="#33691e" stroke-width="7" fill="none" stroke-linecap="round"/>
        <ellipse cx="3690" cy="646" rx="15" ry="7" fill="#4c9a3f" transform="rotate(-22 3690 646)"/>
        <ellipse cx="3716" cy="742" rx="13" ry="6" fill="#66bb6a" transform="rotate(18 3716 742)"/>
        <g transform="translate(3818 572)"><path d="M0 0 q-26 -6 -30 -26 q22 -4 30 12 q8 -20 30 -14 q-6 22 -30 28 Z" fill="#4c9a3f"/>
          <path d="M0 -4 q-14 -18 -6 -34 q14 10 12 30 q10 -18 24 -20 q-4 20 -22 30 Z" fill="#66bb6a"/><circle cx="0" cy="-8" r="5" fill="#ef5350"/></g>
        <g transform="translate(3606 566)"><path d="M0 0 q-24 -6 -28 -24 q20 -4 28 11 q7 -18 28 -13 q-6 20 -28 26 Z" fill="#4c9a3f"/>
          <path d="M0 -4 q-13 -16 -6 -31 q13 9 11 27 q9 -16 22 -18 q-4 18 -20 27 Z" fill="#66bb6a"/><circle cx="0" cy="-7" r="4.4" fill="#fb8c00"/></g>`;
      /* las hojas de esas ramas y una heliconia para el colibri */
      [[3172, 366], [3272, 352], [3406, 246], [3768, 212], [3892, 264], [3684, 396], [3980, 546], [4106, 548],
        [3690, 566], [3852, 566], [4032, 546], [3600, 556], [3268, 428]].forEach(h => {
        s += `<g transform="translate(${h[0]} ${h[1]})"><ellipse cx="-24" cy="10" rx="26" ry="11" fill="#388e3c" transform="rotate(-16 -24 10)"/>
          <ellipse cx="18" cy="12" rx="24" ry="10" fill="#43a047" transform="rotate(14 18 12)"/></g>`;
      });
      /* el tallo sube hasta la rama de 3546-3676 (y=391 en x=3648): sin esto la
         heliconia quedaba colgada del aire, sin nacer de ninguna parte */
      s += `<g transform="translate(3648 426)"><path d="M0 -34 v104" stroke="#4c9a3f" stroke-width="7" stroke-linecap="round"/>
        ${[0, 1, 2, 3].map(i => `<path d="M${i % 2 ? 2 : -2} ${8 + i * 17} q${i % 2 ? 30 : -30} 2 ${i % 2 ? 34 : -34} 16 q${i % 2 ? -30 : 30} 2 ${i % 2 ? -34 : 34} -16 Z" fill="${i % 2 ? "#ef5350" : "#fb8c00"}"/>`).join("")}</g>`;
      /* ---------- EL PRIMER PLANO: hojas grandes y un tronco con musgo ---------- */
      s += `<g><path d="M3648 984 Q3860 958 4076 982 L4076 1022 Q3860 1048 3648 1024 Z" fill="#6b5140"/>
        <ellipse cx="4076" cy="1002" rx="14" ry="20" fill="#8d6e63"/><ellipse cx="4076" cy="1002" rx="6" ry="11" fill="#5d4037"/>
        <g stroke="#4e3a2c" stroke-width="3" fill="none"><path d="M3700 990 Q3870 968 4040 990 M3700 1014 Q3870 994 4040 1014"/></g>
        <g fill="#4c9a3f"><ellipse cx="3740" cy="978" rx="24" ry="9"/><ellipse cx="3900" cy="970" rx="20" ry="8"/><ellipse cx="4020" cy="976" rx="17" ry="7"/></g></g>`;
      [[3268, 1060, 1.5], [3960, 1082, 1.7], [4176, 1006, 1.3], [286, 1076, 1.6], [1176, 1064, 1.4], [2020, 1086, 1.2]].forEach(h => {
        s += `<g transform="translate(${h[0]} ${h[1]}) scale(${h[2]})"><path d="M0 0 q-46 -6 -60 26 q42 24 60 -4 q18 28 60 4 q-14 -32 -60 -26 Z" fill="#2b7530"/>
          <path d="M-58 24 H58 M-30 8 L-40 24 M0 4 V26 M30 8 L40 24" stroke="#1b5e20" stroke-width="3" fill="none"/></g>`;
      });
      /* ---------- LA LLUVIA MUY SUAVE SOBRE LA SELVA ---------- */
      /* tres ovalos encajados: la cortina de agua se apaga en los bordes, sin corte */
      s += `<ellipse cx="600" cy="560" rx="640" ry="410" fill="url(#amzXLluvia)" opacity=".15"/>
        <ellipse cx="600" cy="550" rx="470" ry="310" fill="url(#amzXLluvia)" opacity=".15"/>
        <ellipse cx="590" cy="540" rx="320" ry="215" fill="url(#amzXLluvia)" opacity=".16"/>
        <ellipse cx="560" cy="240" rx="400" ry="52" fill="rgba(255,255,255,.1)"/>`;
      /* ---------- LA NIEBLA BAJA, CAPA A CAPA ---------- */
      s += `<ellipse cx="380" cy="660" rx="340" ry="46" fill="rgba(255,255,255,.09)"/>
        <ellipse cx="1240" cy="620" rx="320" ry="40" fill="rgba(255,255,255,.08)"/>
        <ellipse cx="2400" cy="600" rx="420" ry="36" fill="rgba(255,255,255,.07)"><animate attributeName="ry" values="36;50;36" dur="19s" repeatCount="indefinite"/></ellipse>
        <ellipse cx="3400" cy="640" rx="360" ry="42" fill="rgba(255,255,255,.09)"/>
        <ellipse cx="4060" cy="672" rx="260" ry="40" fill="rgba(255,255,255,.08)"><animate attributeName="rx" values="260;296;260" dur="22s" repeatCount="indefinite"/></ellipse>`;
      return decoSvg(s, 4200);
    }
  },

  /* ---------- CHARLA ---------- */
  chat: {
    keywords: [
      { keys: ["hola", "hello", "hi ", "ahoj", "bonjour", "salut", "bon dia", "buenas"],
        replies: [{ es: "¡Hola, {name}! Qué alegría verte por la selva. ¿Jugamos a algo o charlamos un ratito?", ca: "Hola, {name}! Quina alegria veure't per la selva. Juguem a alguna cosa o xerrem una estoneta?", en: "Hi, {name}! So happy to see you in the jungle. Shall we play something or chat for a bit?", cs: "Ahoj, {name}! Mám radost, že tě vidím v pralese. Zahrajeme si něco, nebo si chvilku popovídáme?", fr: "Salut, {name} ! Quelle joie de te voir dans la jungle. On joue à quelque chose ou on discute un petit peu ?" }] },
      { keys: ["como estas", "how are you", "jak se mas", "comment ca va", "com estas", "que tal"],
        replies: [{ es: "¡Contento como un guacamayo con papaya nueva! ¿Y tú cómo estás, {name}?", ca: "Content com un guacamai amb papaia nova! I tu com estàs, {name}?", en: "Happy as a macaw with a fresh papaya! And how are you, {name}?", cs: "Šťastný jako papoušek s čerstvou papájou! A jak se máš ty, {name}?", fr: "Heureux comme un ara avec une papaye toute fraîche ! Et toi, comment vas-tu, {name} ?" }] },
      { keys: ["cancion", "musica", "music", "song", "sing", "pisnicka", "hudba", "chanson", "musique", "canço", "canta", "zpiv", "chante"],
        action: "song",
        replies: [{ es: "¡Me encanta la música! En la selva ensayo con el coro de las ranas. ¿Vamos al Karaoke y cantamos juntos?", ca: "M'encanta la música! A la selva assajo amb el cor de les granotes. Anem al Karaoke i cantem junts?", en: "I love music! In the jungle I practise with the frog choir. Shall we go to Karaoke and sing together?", cs: "Hudbu miluju! V pralese zkouším se sborem žab. Půjdeme na karaoke a zazpíváme si spolu?", fr: "J'adore la musique ! Dans la jungle, je répète avec la chorale des grenouilles. On va au karaoké chanter ensemble ?" }] },
      { keys: ["chiste", "joke", "vtip", "blague", "acudit", "broma"],
        replies: [
          { es: "¿Por qué el perezoso no cuenta chistes? ¡Porque todos se duermen antes del final! Ji, ji.", ca: "Per què el peresós no explica acudits? Perquè tothom s'adorm abans del final! Hi, hi.", en: "Why doesn't the sloth tell jokes? Because everyone falls asleep before the ending! Hee hee.", cs: "Proč lenochod nevypráví vtipy? Protože všichni usnou dřív, než dojde k pointě! Chi chi.", fr: "Pourquoi le paresseux ne raconte pas de blagues ? Parce que tout le monde s'endort avant la fin ! Hi hi." },
          { es: "¿Qué le dice un guacamayo a otro? ¡Kra-kra... qué guapo te veo hoy! Ja, ja.", ca: "Què li diu un guacamai a un altre? Kra-kra... que guapo et veig avui! Ha, ha.", en: "What does one macaw say to another? Kra-kra... you look great today! Ha ha.", cs: "Co říká jeden papoušek druhému? Kra-kra... dneska ti to ale sluší! Ha ha.", fr: "Que dit un ara à un autre ara ? Kra-kra... que tu es beau aujourd'hui ! Ha ha." }] },
      { keys: ["te quiero", "love you", "t'estimo", "testimo", "mam te rad", "je t'aime", "jetaime"],
        replies: [{ es: "¡Y yo a ti, {name}! Mi corazón de robot florece como una orquídea cuando me lo dices.", ca: "I jo a tu, {name}! El meu cor de robot floreix com una orquídia quan m'ho dius.", en: "I love you too, {name}! My robot heart blooms like an orchid when you say that.", cs: "Já tebe taky, {name}! Moje robotí srdíčko rozkvete jako orchidej, když to říkáš.", fr: "Moi aussi je t'aime, {name} ! Mon cœur de robot fleurit comme une orchidée quand tu dis ça." }] },
      { keys: ["triste", "sad", "smutn", "llorar", "plorar", "cry", "chagrin"],
        replies: [{ es: "Ven aquí, {name}. En la selva también hay días de lluvia... y después de la lluvia todo crece más bonito. ¿Me cuentas qué te pasa?", ca: "Vine aquí, {name}. A la selva també hi ha dies de pluja... i després de la pluja tot creix més bonic. M'expliques què et passa?", en: "Come here, {name}. The jungle has rainy days too... and after the rain everything grows prettier. Will you tell me what is wrong?", cs: "Pojď sem, {name}. I v pralese jsou deštivé dny... a po dešti všechno roste krásněji. Povíš mi, co se děje?", fr: "Viens là, {name}. Dans la jungle aussi, il y a des jours de pluie... et après la pluie, tout pousse plus joliment. Tu me racontes ce qui ne va pas ?" }] },
      { keys: ["donde estas", "where are you", "kde jsi", "ou es tu", "on ets"],
        replies: [{ es: "Ahora mismo estoy sentado en una hoja de nenúfar gigante, como en un barquito. ¡Aguanta mi peso y todo!", ca: "Ara mateix estic assegut en una fulla de nenúfar gegant, com en un barquet. Aguanta el meu pes i tot!", en: "Right now I am sitting on a giant water lily leaf, like a little boat. It even holds my weight!", cs: "Právě teď sedím na listu obřího leknínu jako v loďce. Dokonce mě unese!", fr: "En ce moment, je suis assis sur une feuille de nénuphar géant, comme dans un petit bateau. Elle tient même mon poids !" }] },
      { keys: ["jaguar", "jaguár"],
        replies: [{ es: "¡El jaguar! Camina tan en silencio que ni las hojas lo oyen. A mí me está enseñando a jugar al escondite.", ca: "El jaguar! Camina tan en silenci que ni les fulles el senten. A mi m'està ensenyant a jugar a fet i amagar.", en: "The jaguar! He walks so quietly that not even the leaves hear him. He is teaching me to play hide-and-seek.", cs: "Jaguár! Chodí tak potichu, že ho neslyší ani listí. Zrovna mě učí hrát na schovávanou.", fr: "Le jaguar ! Il marche si silencieusement que même les feuilles ne l'entendent pas. Il m'apprend à jouer à cache-cache." }] },
      { keys: ["delfin", "delfín", "dolphin", "dofi", "dauphin"],
        replies: [{ es: "¡El delfín rosado! Ayer jugamos a hacer burbujas. Cuanto más feliz está, más rosa se pone. ¡Como tú cuando te ríes!", ca: "El dofí rosat! Ahir vam jugar a fer bombolles. Com més feliç està, més rosa es torna. Com tu quan rius!", en: "The pink dolphin! Yesterday we played at blowing bubbles. The happier he is, the pinker he gets. Just like you when you laugh!", cs: "Růžový delfín! Včera jsme si hráli na bubliny. Čím je šťastnější, tím víc růžoví. Jako ty, když se směješ!", fr: "Le dauphin rose ! Hier, on a joué à faire des bulles. Plus il est heureux, plus il devient rose. Comme toi quand tu ris !" }] },
      { keys: ["selva", "jungle", "prales", "bosque", "bosc", "forest"],
        replies: [{ es: "La selva es mágica: es tan grande que fabrica sus propias nubes de lluvia. ¡Un bosque que se riega solo!", ca: "La selva és màgica: és tan gran que fabrica els seus propis núvols de pluja. Un bosc que es rega sol!", en: "The jungle is magical: it is so big that it makes its own rain clouds. A forest that waters itself!", cs: "Prales je kouzelný: je tak velký, že si vyrábí vlastní dešťové mraky. Les, který se sám zalévá!", fr: "La jungle est magique : elle est si grande qu'elle fabrique ses propres nuages de pluie. Une forêt qui s'arrose toute seule !" }] },
      { keys: ["rio ", "río", "river", "reka", "riviere", "rivière", "riu"],
        replies: [{ es: "El gran río es como una carretera de agua: por él viajan canoas, delfines y hojas que hacen de barquitos.", ca: "El gran riu és com una carretera d'aigua: hi viatgen canoes, dofins i fulles que fan de barquets.", en: "The great river is like a road made of water: canoes, dolphins and little leaf-boats all travel along it.", cs: "Velká řeka je jako silnice z vody: plují po ní kánoe, delfíni i lístky, které dělají loďky.", fr: "Le grand fleuve est comme une route d'eau : des canoës, des dauphins et des feuilles-bateaux y voyagent." }] },
      { keys: ["cole", "school", "escola", "skola", "ecole", "skole"],
        replies: [{ es: "¿Qué tal el cole, {name}? ¿Has aprendido algo nuevo hoy? ¡Cuéntamelo todo, que soy muy curioso!", ca: "Què tal l'escola, {name}? Has après alguna cosa nova avui? Explica-m'ho tot, que soc molt curiós!", en: "How was school, {name}? Did you learn something new today? Tell me everything, I am super curious!", cs: "Jaké to bylo ve škole, {name}? Naučila ses dnes něco nového? Všechno mi povídej, jsem hrozně zvědavý!", fr: "C'était comment l'école, {name} ? Tu as appris quelque chose de nouveau aujourd'hui ? Raconte-moi tout, je suis très curieux !" }] }
    ],
    fallback: [
      { es: "¿Sabías que en el Amazonas viven más de mil tipos de pájaros? ¡Y yo todavía no sé volar!", ca: "Sabies que a l'Amazones hi viuen més de mil tipus d'ocells? I jo encara no sé volar!", en: "Did you know more than a thousand kinds of birds live in the Amazon? And I still cannot fly!", cs: "Věděla jsi, že v Amazonii žije přes tisíc druhů ptáků? A já pořád neumím létat!", fr: "Tu savais que plus de mille sortes d'oiseaux vivent en Amazonie ? Et moi, je ne sais toujours pas voler !" },
      { es: "El perezoso tarda un montón en dar un paso. ¡Y siempre llega a tiempo, porque nadie le mete prisa!", ca: "El peresós triga un munt a fer un pas. I sempre arriba a temps, perquè ningú no li fa pressa!", en: "The sloth takes ages to take one step. And it is always on time, because nobody rushes it!", cs: "Lenochodovi trvá jeden krok celou věčnost. A stejně přijde vždycky včas, protože ho nikdo nehoní!", fr: "Le paresseux met très longtemps à faire un pas. Et il arrive toujours à l'heure, parce que personne ne le presse !" },
      { es: "Cuando llueve en la selva, las hojas gigantes hacen de paraguas. Plic, ploc, plic.", ca: "Quan plou a la selva, les fulles gegants fan de paraigua. Plic, ploc, plic.", en: "When it rains in the jungle, the giant leaves work as umbrellas. Plip, plop, plip.", cs: "Když v pralese prší, obří listy dělají deštníky. Kap, kap, kap.", fr: "Quand il pleut dans la jungle, les feuilles géantes servent de parapluies. Plic, ploc, plic." },
      { es: "{name}, los robots más fuertes son los que cuidan de los demás. Cuidar es un superpoder.", ca: "{name}, els robots més forts són els que cuiden els altres. Cuidar és un superpoder.", en: "{name}, the strongest robots are the ones who look after others. Caring is a superpower.", cs: "{name}, nejsilnější roboti jsou ti, kdo se starají o druhé. Starat se je superschopnost.", fr: "{name}, les robots les plus forts sont ceux qui prennent soin des autres. Prendre soin, c'est un superpouvoir." },
      { es: "¿Me cuentas qué animal de la selva te gusta más? Yo no sé elegir entre el tucán y el delfín rosado.", ca: "M'expliques quin animal de la selva t'agrada més? Jo no sé triar entre el tucà i el dofí rosat.", en: "Will you tell me your favourite jungle animal? I cannot choose between the toucan and the pink dolphin.", cs: "Povíš mi, které zvíře z pralesa máš nejraději? Já se nemůžu rozhodnout mezi tukanem a růžovým delfínem.", fr: "Tu me dis quel animal de la jungle tu préfères ? Moi, je n'arrive pas à choisir entre le toucan et le dauphin rose." },
      { es: "Plantar una semilla es como mandar un regalo al futuro. ¡Algún día será un árbol gigante!", ca: "Plantar una llavor és com enviar un regal al futur. Algun dia serà un arbre gegant!", en: "Planting a seed is like sending a present to the future. One day it will be a giant tree!", cs: "Zasadit semínko je jako poslat dárek do budoucnosti. Jednou z něj bude obrovský strom!", fr: "Planter une graine, c'est comme envoyer un cadeau au futur. Un jour, ce sera un arbre géant !" }
    ]
  }
});
