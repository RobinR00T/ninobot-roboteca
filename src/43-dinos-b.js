"use strict";
/* ============================================================
   Contenido de DINOSAURIOS (parte B): historias, canciones,
   traductor, mapa y charla.
   ============================================================ */

Object.assign(THEMES.dinos.content, {

  /* ---------- HISTORIAS ---------- */
  stories: [
    {
      id: "huevo", emoji: "🥚", start: "n1",
      title: { es: "El huevo perdido", ca: "L'ou perdut", en: "The Lost Egg", cs: "Ztracené vejce", fr: "L'œuf perdu" },
      nodes: {
        n1: {
          text: { es: "¡{name}! Junto al río hay un huevo enorme, solito y temblando de frío. Su familia no está por ninguna parte. ¿Qué hacemos?", ca: "{name}! Vora el riu hi ha un ou enorme, solet i tremolant de fred. La seva família no és enlloc. Què fem?", en: "{name}! By the river there is a huge egg, all alone and shivering with cold. Its family is nowhere to be seen. What do we do?", cs: "{name}! U řeky leží obrovské vejce, úplně samotné a třese se zimou. Jeho rodina nikde. Co uděláme?", fr: "{name} ! Près de la rivière, il y a un œuf énorme, tout seul et qui tremble de froid. Sa famille n'est nulle part. Qu'est-ce qu'on fait ?" },
          choices: [
            { t: { es: "Lo abrigamos con hojas", ca: "L'abriguem amb fulles", en: "We wrap it in leaves", cs: "Zabalíme ho do listí", fr: "On le couvre de feuilles" }, go: "n2a" },
            { t: { es: "Buscamos huellas de su familia", ca: "Busquem petjades de la seva família", en: "We look for its family's footprints", cs: "Hledáme stopy jeho rodiny", fr: "On cherche les empreintes de sa famille" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "Lo tapáis con hojas calentitas y el huevo deja de temblar... ¡y empieza a moverse! Crac, crac. ¡Está a punto de abrirse!", ca: "El tapeu amb fulles calentones i l'ou deixa de tremolar... i comença a moure's! Crac, crac. Està a punt d'obrir-se!", en: "You cover it with warm leaves and the egg stops shivering... and starts to wiggle! Crack, crack. It is about to open!", cs: "Přikryjete ho teplým listím a vejce se přestane třást... a začne se hýbat! Křup, křup. Za chvíli se otevře!", fr: "Vous le couvrez de feuilles bien chaudes et l'œuf arrête de trembler... et commence à bouger ! Crac, crac. Il va s'ouvrir !" },
          choices: [
            { t: { es: "¡Miramos de cerquita!", ca: "Mirem de propet!", en: "We watch up close!", cs: "Podíváme se zblízka!", fr: "On regarde de tout près !" }, go: "n3a" },
            { t: { es: "Le cantamos para darle ánimo", ca: "Li cantem per donar-li ànims", en: "We sing to cheer it on", cs: "Zazpíváme mu pro odvahu", fr: "On chante pour l'encourager" }, go: "n3b" }
          ]
        },
        n2b: {
          text: { es: "Seguís unas huellas grandes como bañeras. De pronto, el suelo tiembla: BUM, BUM. Algo gigante se acerca entre los árboles...", ca: "Seguiu unes petjades grans com banyeres. De sobte, el terra tremola: BUM, BUM. Alguna cosa gegant s'acosta entre els arbres...", en: "You follow footprints as big as bathtubs. Suddenly the ground shakes: BOOM, BOOM. Something giant is coming through the trees...", cs: "Jdete po stopách velkých jako vany. Najednou se země třese: BUM, BUM. Mezi stromy se blíží něco obrovského...", fr: "Vous suivez des empreintes grandes comme des baignoires. Soudain, le sol tremble : BOUM, BOUM. Quelque chose de géant approche entre les arbres..." },
          choices: [
            { t: { es: "Saludamos con la mano", ca: "Saludem amb la mà", en: "We wave hello", cs: "Zamáváme na pozdrav", fr: "On fait coucou de la main" }, go: "n3c" },
            { t: { es: "Nos escondemos detrás de un helecho", ca: "Ens amaguem darrere d'una falguera", en: "We hide behind a fern", cs: "Schováme se za kapradinu", fr: "On se cache derrière une fougère" }, go: "n3d" }
          ]
        },
        n3a: {
          text: { es: "¡Crac! Del huevo sale un bebé Triceratops con un cuernecito torcido y ojos de sueño. Os mira... ¡y os da un lametón de agradecimiento!", ca: "Crac! De l'ou surt un nadó Triceratops amb una banyeta torta i ulls de son. Us mira... i us fa una llepada d'agraïment!", en: "Crack! Out of the egg comes a baby Triceratops with a crooked little horn and sleepy eyes. It looks at you... and gives you a big thank-you lick!", cs: "Křup! Z vejce se vyklube mládě triceratopse s křivým růžkem a ospalýma očima. Podívá se na vás... a vděčně vás olízne!", fr: "Crac ! De l'œuf sort un bébé Tricératops avec une petite corne tordue et des yeux endormis. Il vous regarde... et vous fait une grosse léchouille de remerciement !" },
          choices: [{ t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }]
        },
        n3b: {
          text: { es: "Cantáis bajito y del huevo sale un bebé Triceratops... ¡bailando! Nace moviendo la colita al ritmo de vuestra canción.", ca: "Canteu fluixet i de l'ou surt un nadó Triceratops... ballant! Neix bellugant la cueta al ritme de la vostra cançó.", en: "You sing softly and out comes a baby Triceratops... dancing! It is born wiggling its tail to your song.", cs: "Tiše zpíváte a z vejce vyleze mládě triceratopse... a tancuje! Narodí se a hned vrtí ocáskem do rytmu vaší písničky.", fr: "Vous chantez doucement et un bébé Tricératops sort... en dansant ! Il naît en remuant sa petite queue au rythme de votre chanson." },
          choices: [{ t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }]
        },
        n3c: {
          text: { es: "¡Es una mamá Triceratops! Al ver que no tenéis miedo, baja la cabeza despacito y os enseña su nido: le falta un huevo. ¡El vuestro!", ca: "És una mama Triceratops! En veure que no teniu por, abaixa el cap a poc a poc i us ensenya el seu niu: li falta un ou. El vostre!", en: "It is a mummy Triceratops! Seeing you are not afraid, she slowly lowers her head and shows you her nest: one egg is missing. Yours!", cs: "Je to máma triceratopsice! Když vidí, že se nebojíte, pomalu skloní hlavu a ukáže vám své hnízdo: chybí v něm jedno vejce. To vaše!", fr: "C'est une maman Tricératops ! Voyant que vous n'avez pas peur, elle baisse la tête tout doucement et vous montre son nid : il manque un œuf. Le vôtre !" },
          choices: [{ t: { es: "¡Llevémosle el huevo!", ca: "Portem-li l'ou!", en: "Let's bring her the egg!", cs: "Doneseme jí vejce!", fr: "Apportons-lui l'œuf !" }, go: "e2" }]
        },
        n3d: {
          text: { es: "Desde el helecho veis pasar a una mamá Triceratops olisqueando el suelo. Busca algo... ¡busca su huevo! Y parece muy triste.", ca: "Des de la falguera veieu passar una mama Triceratops ensumant el terra. Busca alguna cosa... busca el seu ou! I sembla molt trista.", en: "From behind the fern you see a mummy Triceratops sniffing the ground. She is looking for something... her egg! And she looks very sad.", cs: "Zpoza kapradiny vidíte mámu triceratopsici, jak čenichá po zemi. Něco hledá... hledá své vejce! A vypadá moc smutně.", fr: "Derrière la fougère, vous voyez passer une maman Tricératops qui renifle le sol. Elle cherche quelque chose... son œuf ! Et elle a l'air très triste." },
          choices: [{ t: { es: "¡Salimos a ayudarla!", ca: "Sortim a ajudar-la!", en: "We come out to help her!", cs: "Vylezeme a pomůžeme jí!", fr: "On sort pour l'aider !" }, go: "e2" }]
        },
        n4: {
          text: { es: "El bebé tiene hambre y llama a su mamá: ¡miiiii! A lo lejos responde un BUM, BUM que hace temblar los charcos. ¡Su familia viene corriendo!", ca: "El nadó té gana i crida la seva mama: miiiii! De lluny respon un BUM, BUM que fa tremolar els bassals. La seva família ve corrents!", en: "The baby is hungry and calls its mummy: meeee! From far away a BOOM, BOOM answers, shaking the puddles. Its family is running over!", cs: "Mládě má hlad a volá mámu: míííí! Z dálky odpoví BUM, BUM, až se třesou louže. Jeho rodina už běží!", fr: "Le bébé a faim et appelle sa maman : miiii ! Au loin répond un BOUM, BOUM qui fait trembler les flaques. Sa famille arrive en courant !" },
          choices: [{ t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e1" }]
        },
        e1: {
          end: true,
          text: { es: "La mamá Triceratops abraza a su bebé con el hocico y a vosotros os regala una hoja gigante como medalla. Lo cuidaste genial, {name}: ayudar a los pequeños es cosa de valientes.", ca: "La mama Triceratops abraça el seu nadó amb el musell i a vosaltres us regala una fulla gegant com a medalla. El vas cuidar genial, {name}: ajudar els petits és cosa de valents.", en: "The mummy Triceratops nuzzles her baby and gives you a giant leaf as a medal. You took great care of it, {name}: helping little ones is a brave thing to do.", cs: "Máma triceratopsice se s mládětem pomazlí čumákem a vám dá jako medaili obrovský list. Postarala ses o něj skvěle, {name}: pomáhat malým je věc statečných.", fr: "La maman Tricératops câline son bébé avec son museau et vous offre une feuille géante comme médaille. Tu t'en es super bien occupé, {name} : aider les petits, c'est un truc de courageux." }
        },
        e2: {
          end: true,
          text: { es: "Cuando la mamá ve su huevo, da saltos de alegría (¡y tiembla toda la selva!). Lo coloca en el nido con los demás y esa noche, crac, crac: nace el bebé rodeado de su familia. Gracias a ti, {name}.", ca: "Quan la mama veu el seu ou, fa salts d'alegria (i tremola tota la selva!). El col·loca al niu amb els altres i aquella nit, crac, crac: neix el nadó envoltat de la seva família. Gràcies a tu, {name}.", en: "When the mummy sees her egg, she jumps for joy (and the whole jungle shakes!). She puts it in the nest with the others, and that night, crack, crack: the baby is born surrounded by its family. Thanks to you, {name}.", cs: "Když máma uvidí své vejce, skáče radostí (a celá džungle se třese!). Uloží ho do hnízda k ostatním a tu noc, křup, křup: mládě se narodí obklopené svou rodinou. Díky tobě, {name}.", fr: "Quand la maman voit son œuf, elle saute de joie (et toute la jungle tremble !). Elle le pose dans le nid avec les autres et cette nuit-là, crac, crac : le bébé naît entouré de sa famille. Grâce à toi, {name}." }
        }
      }
    },
    {
      id: "miedo", emoji: "⛈️", start: "n1",
      title: { es: "El T-Rex que tenía miedo", ca: "El T-Rex que tenia por", en: "The Scared T-Rex", cs: "T-Rex, který se bál", fr: "Le T-Rex qui avait peur" },
      nodes: {
        n1: {
          text: { es: "Se acerca una tormenta y se oye un llanto enorme: ¡BUAAA! Es Reginaldo, el T-Rex más grande del valle... y le dan miedo los truenos. ¿Cómo lo ayudamos, {name}?", ca: "S'acosta una tempesta i se sent un plor enorme: BUAAA! És en Reginald, el T-Rex més gran de la vall... i li fan por els trons. Com l'ajudem, {name}?", en: "A storm is coming and you hear a giant cry: WAAAH! It is Reginald, the biggest T-Rex in the valley... and he is scared of thunder. How do we help him, {name}?", cs: "Blíží se bouřka a je slyšet obrovský pláč: BÚÚÚ! To je Reginald, největší T-Rex v údolí... a bojí se hromů. Jak mu pomůžeme, {name}?", fr: "Un orage approche et on entend un pleur énorme : OUIIIN ! C'est Réginald, le plus grand T-Rex de la vallée... et il a peur du tonnerre. Comment on l'aide, {name} ?" },
          choices: [
            { t: { es: "Le enseñamos a rugir más fuerte que el trueno", ca: "Li ensenyem a rugir més fort que el tro", en: "We teach him to roar louder than the thunder", cs: "Naučíme ho řvát hlasitěji než hrom", fr: "On lui apprend à rugir plus fort que le tonnerre" }, go: "n2a" },
            { t: { es: "Construimos un refugio para todos", ca: "Construïm un refugi per a tothom", en: "We build a shelter for everyone", cs: "Postavíme úkryt pro všechny", fr: "On construit un abri pour tout le monde" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "Reginaldo lo intenta: 'grr... ¿grr?'. Le sale un rugidito de ratón. Los demás dinos se acercan a mirar. ¿Y ahora?", ca: "En Reginald ho intenta: 'grr... grr?'. Li surt un rugit de ratolí. Els altres dinos s'acosten a mirar. I ara?", en: "Reginald tries: 'grr... grr?'. Out comes a tiny mouse roar. The other dinos come closer to watch. Now what?", cs: "Reginald to zkouší: 'vrr... vrr?'. Vyjde z něj myší zavrčení. Ostatní dinosauři se přicházejí podívat. Co teď?", fr: "Réginald essaie : « grr... grr ? ». Il sort un petit rugissement de souris. Les autres dinos s'approchent pour regarder. Et maintenant ?" },
          choices: [
            { t: { es: "¡Rugimos todos juntos a la vez!", ca: "Ruguim tots junts alhora!", en: "We all roar together at once!", cs: "Zařveme všichni najednou!", fr: "On rugit tous ensemble en même temps !" }, go: "e1" },
            { t: { es: "Le decimos que no pasa nada por tener miedo", ca: "Li diem que no passa res per tenir por", en: "We tell him it is okay to be scared", cs: "Řekneme mu, že bát se je v pořádku", fr: "On lui dit que ce n'est pas grave d'avoir peur" }, go: "e2" }
          ]
        },
        n2b: {
          text: { es: "Entre todos apiláis troncos y hojas gigantes. El Anquilosaurio aplasta el techo para dejarlo firme y el Braquiosaurio coloca la última rama. ¡Menudo equipo!", ca: "Entre tots apileu troncs i fulles gegants. L'Anquilosaure aixafa el sostre per deixar-lo ferm i el Braquiosaure col·loca l'última branca. Quin equip!", en: "Together you pile up logs and giant leaves. The Ankylosaurus stomps the roof to make it firm and the Brachiosaurus places the last branch. What a team!", cs: "Společně navršíte klády a obří listy. Ankylosaurus udusá střechu, aby držela, a brachiosaurus položí poslední větev. To je tým!", fr: "Tous ensemble, vous empilez des troncs et des feuilles géantes. L'Ankylosaure tasse le toit pour le rendre solide et le Brachiosaure pose la dernière branche. Quelle équipe !" },
          choices: [
            { t: { es: "Invitamos a Reginaldo a entrar el primero", ca: "Convidem en Reginald a entrar el primer", en: "We invite Reginald to go in first", cs: "Pozveme Reginalda, ať jde dovnitř první", fr: "On invite Réginald à entrer le premier" }, go: "e2" },
            { t: { es: "Hacemos una fiesta dentro con todos", ca: "Fem una festa a dins amb tothom", en: "We throw a party inside with everyone", cs: "Uspořádáme uvnitř oslavu pro všechny", fr: "On fait une fête dedans avec tout le monde" }, go: "e1" }
          ]
        },
        e1: {
          end: true,
          text: { es: "Cuando llega el trueno, el valle entero ruge a la vez: ¡GRAAAAAR! El trueno suena pequeñito al lado. Reginaldo ríe por primera vez en una tormenta. Juntos, hasta el miedo se hace pequeño, {name}.", ca: "Quan arriba el tro, la vall sencera rugeix alhora: GRAAAAAR! El tro sona petitó al costat. En Reginald riu per primera vegada en una tempesta. Junts, fins i tot la por es fa petita, {name}.", en: "When the thunder comes, the whole valley roars at once: ROAAAAR! The thunder sounds tiny next to it. Reginald laughs for the first time ever in a storm. Together, even fear becomes small, {name}.", cs: "Když přijde hrom, celé údolí zařve najednou: GRÓÓÓÓÓ! Hrom vedle toho zní docela malinko. Reginald se poprvé v životě za bouřky směje. Společně se i strach zmenší, {name}.", fr: "Quand le tonnerre arrive, toute la vallée rugit en même temps : GRAAAAAR ! Le tonnerre paraît tout petit à côté. Réginald rit pour la première fois pendant un orage. Ensemble, même la peur devient petite, {name}." }
        },
        e2: {
          end: true,
          text: { es: "Reginaldo confiesa bajito: 'Creía que los grandes no podían tener miedo'. Y tú le cuentas el secreto, {name}: todos tenemos miedo a veces, hasta los T-Rex. Lo valiente es contarlo. Esa noche duerme calentito, rodeado de amigos.", ca: "En Reginald confessa fluixet: 'Em pensava que els grans no podien tenir por'. I tu li expliques el secret, {name}: tots tenim por de vegades, fins i tot els T-Rex. El que és valent és explicar-ho. Aquella nit dorm calentó, envoltat d'amics.", en: "Reginald quietly confesses: 'I thought big ones were not allowed to be scared'. And you tell him the secret, {name}: everyone is scared sometimes, even T-Rexes. The brave thing is to say it out loud. That night he sleeps warm, surrounded by friends.", cs: "Reginald potichu přizná: 'Myslel jsem, že velcí se bát nesmějí'. A ty mu prozradíš tajemství, {name}: každý se někdy bojí, i T-Rex. Statečné je o tom mluvit. Tu noc spí v teple, obklopený kamarády.", fr: "Réginald avoue tout bas : « Je croyais que les grands n'avaient pas le droit d'avoir peur ». Et tu lui racontes le secret, {name} : tout le monde a peur parfois, même les T-Rex. Le courage, c'est de le dire. Cette nuit-là, il dort bien au chaud, entouré d'amis." }
        }
      }
    },
    {
      id: "viaje", emoji: "⏰", start: "n1",
      title: { es: "El gran viaje en el tiempo", ca: "El gran viatge en el temps", en: "The Great Time Journey", cs: "Velká cesta časem", fr: "Le grand voyage dans le temps" },
      nodes: {
        n1: {
          text: { es: "¡La máquina del tiempo está lista, {name}! El reloj tiene tres botones: Triásico, Jurásico y Cretácico. ¿Dónde vamos primero?", ca: "La màquina del temps està a punt, {name}! El rellotge té tres botons: Triàsic, Juràssic i Cretaci. On anem primer?", en: "The time machine is ready, {name}! The clock has three buttons: Triassic, Jurassic and Cretaceous. Where shall we go first?", cs: "Stroj času je připraven, {name}! Hodiny mají tři tlačítka: trias, jura a křída. Kam poletíme nejdřív?", fr: "La machine à voyager dans le temps est prête, {name} ! L'horloge a trois boutons : Trias, Jurassique et Crétacé. Où va-t-on d'abord ?" },
          choices: [
            { t: { es: "¡Al Jurásico, con los gigantes!", ca: "Al Juràssic, amb els gegants!", en: "To the Jurassic, with the giants!", cs: "Do jury, za obry!", fr: "Au Jurassique, avec les géants !" }, go: "n2a" },
            { t: { es: "¡Al Cretácico, a ver al T-Rex!", ca: "Al Cretaci, a veure el T-Rex!", en: "To the Cretaceous, to see the T-Rex!", cs: "Do křídy, za T-Rexem!", fr: "Au Crétacé, voir le T-Rex !" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "¡Zas! Aparecéis entre helechos gigantes. Un Braquiosaurio os mira desde arriba, mastica una hoja y... ¡ACHÍS! Su estornudo os despeina. Ofrece llevaros en su cuello, como un ascensor.", ca: "Zas! Apareixeu entre falgueres gegants. Un Braquiosaure us mira des de dalt, mastega una fulla i... ATXIM! El seu esternut us despentina. Us ofereix portar-vos al seu coll, com un ascensor.", en: "Zap! You appear among giant ferns. A Brachiosaurus looks down at you, chews a leaf and... ACHOO! Its sneeze messes up your hair. It offers you a ride on its neck, like an elevator.", cs: "Šup! Objevíte se mezi obřími kapradinami. Brachiosaurus se na vás dívá shora, žvýká list a... HEPČÍ! Jeho kýchnutí vám rozcuchá vlasy. Nabídne vám svezení na krku, jako výtah.", fr: "Zou ! Vous apparaissez entre des fougères géantes. Un Brachiosaure vous regarde d'en haut, mâche une feuille et... ATCHOUM ! Son éternuement vous décoiffe. Il propose de vous porter sur son cou, comme un ascenseur." },
          choices: [
            { t: { es: "¡Subimos al cuello-ascensor!", ca: "Pugem al coll-ascensor!", en: "We ride the neck-elevator!", cs: "Jedeme krčním výtahem!", fr: "On monte dans le cou-ascenseur !" }, go: "n3" },
            { t: { es: "Mejor seguimos a pie, explorando", ca: "Millor seguim a peu, explorant", en: "We keep exploring on foot", cs: "Radši jdeme dál pěšky a objevujeme", fr: "On continue à pied, en explorant" }, go: "n3b" }
          ]
        },
        n2b: {
          text: { es: "¡Zas! Llegáis al Cretácico. Detrás de una roca asoma... ¡un T-Rex bebé! Quiere jugar al escondite, ¡pero su cola larguísima siempre asoma!", ca: "Zas! Arribeu al Cretaci. Darrere d'una roca treu el cap... un T-Rex nadó! Vol jugar a fet i amagar, però la seva cua llarguíssima sempre es veu!", en: "Zap! You arrive in the Cretaceous. From behind a rock peeks... a baby T-Rex! It wants to play hide-and-seek, but its very long tail always sticks out!", cs: "Šup! Přistanete v křídě. Zpoza kamene vykukuje... malý T-Rex! Chce si hrát na schovávanou, ale jeho dlouhatánský ocas vždycky kouká ven!", fr: "Zou ! Vous arrivez au Crétacé. Derrière un rocher apparaît... un bébé T-Rex ! Il veut jouer à cache-cache, mais sa très longue queue dépasse toujours !" },
          choices: [
            { t: { es: "Jugamos al escondite con él", ca: "Juguem a fet i amagar amb ell", en: "We play hide-and-seek with him", cs: "Zahrajeme si s ním na schovávanou", fr: "On joue à cache-cache avec lui" }, go: "n3" },
            { t: { es: "Le enseñamos a esconderse mejor", ca: "Li ensenyem a amagar-se millor", en: "We teach him to hide better", cs: "Naučíme ho líp se schovávat", fr: "On lui apprend à mieux se cacher" }, go: "n3b" }
          ]
        },
        n3: {
          text: { es: "¡Qué risa! De repente, el cielo se pone naranja: un volcán lejano se despierta y toca volver. La máquina pita: 'quedan 10 segundos de viaje'.", ca: "Quin riure! De sobte, el cel es posa taronja: un volcà llunyà es desperta i toca tornar. La màquina xiula: 'queden 10 segons de viatge'.", en: "So much fun! Suddenly the sky turns orange: a faraway volcano is waking up and it is time to go back. The machine beeps: '10 seconds of travel left'.", cs: "To byla legrace! Najednou nebe zoranžoví: vzdálená sopka se probouzí a je čas se vrátit. Stroj pípá: 'zbývá 10 sekund cesty'.", fr: "Quel fou rire ! Soudain, le ciel devient orange : un volcan lointain se réveille et il faut rentrer. La machine bipe : « il reste 10 secondes de voyage »." },
          choices: [
            { t: { es: "¡Despedida rápida y a casa!", ca: "Comiat ràpid i cap a casa!", en: "Quick goodbye and home we go!", cs: "Rychlé rozloučení a domů!", fr: "Au revoir rapide et à la maison !" }, go: "e1" }
          ]
        },
        n3b: {
          text: { es: "Explorando encontráis un nido con crías recién nacidas que os miran con ojos curiosos. Les dejáis de regalo una flor del futuro. De pronto, la máquina pita: ¡hora de volver!", ca: "Explorant trobeu un niu amb cries acabades de néixer que us miren amb ulls curiosos. Els deixeu de regal una flor del futur. De sobte, la màquina xiula: hora de tornar!", en: "While exploring you find a nest of newborn babies looking at you with curious eyes. You leave them a flower from the future as a gift. Suddenly the machine beeps: time to go back!", cs: "Při objevování najdete hnízdo s čerstvě narozenými mláďaty, která se na vás zvědavě dívají. Necháte jim jako dárek květinu z budoucnosti. Najednou stroj zapípá: čas na návrat!", fr: "En explorant, vous trouvez un nid avec des bébés tout juste nés qui vous regardent avec des yeux curieux. Vous leur laissez en cadeau une fleur du futur. Soudain, la machine bipe : il faut rentrer !" },
          choices: [
            { t: { es: "¡A la máquina, rápido!", ca: "A la màquina, ràpid!", en: "To the machine, quick!", cs: "Ke stroji, rychle!", fr: "À la machine, vite !" }, go: "e1" }
          ]
        },
        e1: {
          end: true,
          text: { es: "Tres, dos, uno... ¡zas! Ya estáis en casa, con arena jurásica en los zapatos y una historia increíble que contar. Los dinosaurios ya no están, {name}, pero sus huesos, sus huellas y sus nietos, los pájaros, siguen aquí. ¡Mira por la ventana: ahí vuela un dinosaurio pequeñito!", ca: "Tres, dos, un... zas! Ja sou a casa, amb sorra juràssica a les sabates i una història increïble per explicar. Els dinosaures ja no hi són, {name}, però els seus ossos, les seves petjades i els seus néts, els ocells, segueixen aquí. Mira per la finestra: allà vola un dinosaure petitó!", en: "Three, two, one... zap! You are back home, with Jurassic sand in your shoes and an amazing story to tell. The dinosaurs are gone, {name}, but their bones, their footprints and their grandchildren, the birds, are still here. Look out the window: there flies a tiny dinosaur!", cs: "Tři, dva, jedna... šup! Jste zpátky doma, s jurským pískem v botách a neuvěřitelným příběhem k vyprávění. Dinosauři už tu nejsou, {name}, ale jejich kosti, stopy a jejich vnoučata, ptáci, tu jsou pořád. Podívej se z okna: támhle letí malinký dinosaurus!", fr: "Trois, deux, un... zou ! Vous voilà à la maison, avec du sable jurassique dans les chaussures et une histoire incroyable à raconter. Les dinosaures ne sont plus là, {name}, mais leurs os, leurs empreintes et leurs petits-enfants, les oiseaux, sont toujours là. Regarde par la fenêtre : un tout petit dinosaure est en train de voler !" }
        }
      }
    }
  ],

  /* ---------- KARAOKE ---------- */
  songs: [
    { emoji: "🦖",
      title: { es: "El baile del T-Rex", ca: "El ball del T-Rex", en: "The T-Rex Dance", cs: "Tanec T-Rexe", fr: "La danse du T-Rex" },
      lines: [
        { es: "El T-Rex quiere bailar,", ca: "El T-Rex vol ballar,", en: "The T-Rex wants to dance,", cs: "T-Rex chce tancovat,", fr: "Le T-Rex veut danser," },
        { es: "con sus brazos no puede aplaudir.", ca: "amb els seus braços no pot aplaudir.", en: "but his arms cannot clap, no chance.", cs: "ale ručičkama nemůže tleskat.", fr: "mais ses bras ne peuvent pas applaudir." },
        { es: "¡No importa!, dice al saltar,", ca: "No hi fa res!, diu en saltar,", en: "No problem!, he says with a jump,", cs: "Nevadí!, říká a skáče,", fr: "Pas grave !, dit-il en sautant," },
        { es: "¡con la cola voy a batir!", ca: "amb la cua vaig a batre!", en: "I will drum with my tail, thump thump!", cs: "budu bubnovat ocasem!", fr: "je vais battre avec ma queue !" },
        { es: "Bum, bum, tiembla el volcán,", ca: "Bum, bum, tremola el volcà,", en: "Boom, boom, the volcano shakes,", cs: "Bum, bum, sopka se třese,", fr: "Boum, boum, le volcan tremble," },
        { es: "los dinos bailando están.", ca: "els dinos estan ballant.", en: "all the dinos dance till it quakes.", cs: "dinosauři tancují vesele.", fr: "tous les dinos sont en train de danser." },
        { es: "Y {name} baila también,", ca: "I {name} balla també,", en: "And {name} is dancing too,", cs: "A {name} tancuje s nimi,", fr: "Et {name} danse aussi," },
        { es: "¡rugiendo fuerte, requetebién!", ca: "rugint fort, la mar de bé!", en: "roaring loud, woo-hoo-hoo!", cs: "a řve nahlas, jé jé jé!", fr: "en rugissant fort, youpi !" }
      ] },
    { emoji: "🦴",
      title: { es: "Los fósiles cuentan cuentos", ca: "Els fòssils expliquen contes", en: "Fossils Tell Stories", cs: "Fosilie vyprávějí", fr: "Les fossiles racontent" },
      lines: [
        { es: "Bajo la tierra, escondido está,", ca: "Sota la terra, amagat està,", en: "Under the ground, hidden away,", cs: "Hluboko v zemi, schovaný spí,", fr: "Sous la terre, bien caché," },
        { es: "un hueso antiguo que quiere hablar.", ca: "un os antic que vol parlar.", en: "an ancient bone has things to say.", cs: "prastarý kostík, co mluvit chce.", fr: "un os ancien qui veut parler." },
        { es: "Con un pincel, despacio, con amor,", ca: "Amb un pinzell, a poc a poc, amb amor,", en: "With a soft brush, slowly, with care,", cs: "Štětečkem jemně, s láskou a klidem,", fr: "Avec un pinceau, doucement, avec amour," },
        { es: "lo desenterramos, ¡qué emoción!", ca: "el desenterrem, quina emoció!", en: "we dig it up, treasure so rare!", cs: "vykopeme ho, to je den!", fr: "on le déterre, quelle émotion !" },
        { es: "Cuéntame, fósil, ¿cómo era ayer?", ca: "Explica'm, fòssil, com era ahir?", en: "Tell me, fossil, how was the past?", cs: "Pověz mi, zkamenělino, jaké to bylo dřív?", fr: "Raconte-moi, fossile, c'était comment avant ?" },
        { es: "Selvas gigantes y mucho que aprender.", ca: "Selves gegants i molt per aprendre.", en: "Giant green jungles, stories so vast.", cs: "Obří pralesy a spousta divů.", fr: "Des jungles géantes et tant à apprendre." },
        { es: "La tierra guarda, para {name},", ca: "La terra guarda, per a {name},", en: "The earth is keeping, for {name},", cs: "Země si schovává pro {name}", fr: "La terre garde, pour {name}," },
        { es: "¡mil historias por descubrir!", ca: "mil històries per descobrir!", en: "a thousand stories yet to find!", cs: "tisíc příběhů k objevení!", fr: "mille histoires à découvrir !" }
      ] },
    { emoji: "🥚",
      title: { es: "Cinco huevos", ca: "Cinc ous", en: "Five Little Eggs", cs: "Pět vajíček", fr: "Cinq petits œufs" },
      lines: [
        { es: "Cinco huevos en el nido están,", ca: "Cinc ous al niu estan,", en: "Five little eggs in the nest so round,", cs: "Pět vajíček v hnízdě je,", fr: "Cinq petits œufs dans le nid," },
        { es: "la mamá dino los viene a cuidar.", ca: "la mama dino els ve a cuidar.", en: "the dino mummy watches without a sound.", cs: "máma dinosauřice je hlídá, jé.", fr: "la maman dino vient les garder." },
        { es: "Crac, crac, ¿quién asoma ya?", ca: "Crac, crac, qui treu el cap ja?", en: "Crack, crack, who is peeking out?", cs: "Křup, křup, kdo to kouká ven?", fr: "Crac, crac, qui montre son nez ?" },
        { es: "¡Una colita empieza a bailar!", ca: "Una cueta comença a ballar!", en: "A tiny tail starts wiggling about!", cs: "Malý ocásek tancuje celý den!", fr: "Une petite queue commence à danser !" },
        { es: "Uno, dos, tres, cuatro y cinco son,", ca: "Un, dos, tres, quatre i cinc són,", en: "One, two, three, four, five babies new,", cs: "Jedna, dva, tři, čtyři, pět jich máme,", fr: "Un, deux, trois, quatre et cinq bébés," },
        { es: "bebés dinos cantando esta canción.", ca: "nadons dinos cantant aquesta cançó.", en: "baby dinos singing just for you.", cs: "malí dinosauři zpívají s námi.", fr: "des bébés dinos qui chantent avec moi." },
        { es: "Y {name} los cuenta otra vez,", ca: "I {name} els compta un altre cop,", en: "And {name} counts them one more time,", cs: "A {name} je počítá znovu hned,", fr: "Et {name} les compte encore une fois," },
        { es: "¡del uno al cinco y del cinco al diez!", ca: "de l'u al cinc i del cinc al deu!", en: "from one to five, a counting rhyme!", cs: "od jedné do pěti a pak do deseti zpět!", fr: "de un à cinq et de cinq à dix !" }
      ] }
  ],

  /* ---------- TRADUCTOR ---------- */
  translator: {
    words: [
      W_COMMON.hola,
      W_COMMON.adios,
      W_COMMON.amigo,
      { k: "dinosaurio", emoji: "🦖", name: { es: "dinosaurio", ca: "dinosaure", en: "dinosaur", cs: "dinosaurus", fr: "dinosaure" } },
      { k: "fosil", emoji: "🦴", name: { es: "fósil", ca: "fòssil", en: "fossil", cs: "fosilie", fr: "fossile" } },
      { k: "volcan", emoji: "🌋", name: { es: "volcán", ca: "volcà", en: "volcano", cs: "sopka", fr: "volcan" } },
      { k: "huevo", emoji: "🥚", name: { es: "huevo", ca: "ou", en: "egg", cs: "vejce", fr: "œuf" } },
      { k: "huella", emoji: "🐾", name: { es: "huella", ca: "petjada", en: "footprint", cs: "stopa", fr: "empreinte" } },
      W_COMMON.robot,
      W_COMMON.mama,
      W_COMMON.papa,
      W_COMMON.casa,
      W_COMMON.agua,
      W_COMMON.comida,
      W_COMMON.perro,
      W_COMMON.gato,
      { k: "grande", emoji: "🦕", name: { es: "grande", ca: "gran", en: "big", cs: "velký", fr: "grand" } },
      W_COMMON.pequeno,
      W_COMMON.bonito,
      W_COMMON.amor,
      W_COMMON.gracias,
      W_COMMON.si,
      W_COMMON.no,
      W_COMMON.dormir
    ],
    langs: [
      { id: "rugidoso", emoji: "🦖",
        name: { es: "Rugidoso", ca: "Rugidós", en: "Roarish", cs: "Řvounština", fr: "Rugissant" },
        greeting: { es: "¡GRAR! Así saluda un T-Rex educado.", ca: "GRAR! Així saluda un T-Rex educat.", en: "ROAR! That is how a polite T-Rex says hi.", cs: "GRÓÓ! Tak zdraví slušný T-Rex.", fr: "GRAAR ! C'est comme ça qu'un T-Rex poli dit bonjour." },
        dict: { hola: "grar", adios: "grar-fu", amigo: "grumi", dinosaurio: "GRAAAR", fosil: "gronk", volcan: "brum-grar", huevo: "grovo", huella: "grap-grap", robot: "gri-gri", mama: "gramama", papa: "grapapa", casa: "grota-gra", agua: "gluglu-gra", comida: "ñamgrar", perro: "grau-grau", gato: "griau", grande: "GROM", pequeno: "grini", bonito: "gruli", amor: "gramor", gracias: "grark-tu", si: "gra", no: "gru", dormir: "grrr-zzz" } },
      { id: "aleteo", emoji: "🪽",
        name: { es: "Aleteo", ca: "Aleteig", en: "Flapish", cs: "Křídlanština", fr: "Battement" },
        greeting: { es: "¡Fliu-fliu! El idioma de los reptiles voladores se silba.", ca: "Fliu-fliu! L'idioma dels rèptils voladors es xiula.", en: "Flee-floo! The language of the flying reptiles is whistled.", cs: "Fíí-fjú! Jazyk létajících ještěrů se píská.", fr: "Fiou-fiou ! La langue des reptiles volants se siffle." },
        dict: { hola: "fliu", adios: "fliu-va", amigo: "flimi", dinosaurio: "flisaurio", fosil: "flonk", volcan: "flum", huevo: "flovo", huella: "flapla", robot: "flibot", mama: "flimama", papa: "flipapa", casa: "flido", agua: "fliagua", comida: "fliñam", perro: "fliguau", gato: "flimiau", grande: "fluuum", pequeno: "flip", bonito: "flili", amor: "flimor", gracias: "fligra", si: "fli", no: "flo", dormir: "flizzz" } },
      { id: "fosiles", emoji: "🦴",
        name: { es: "Fosilés", ca: "Fossilès", en: "Fossilish", cs: "Fosilština", fr: "Fossilois" },
        greeting: { es: "Ho...la...us. El fosilés se habla muy, muy despacio: ¡tiene millones de años!", ca: "Ho...la...us. El fossilès es parla molt, molt a poc a poc: té milions d'anys!", en: "He...llo...us. Fossilish is spoken very, very slowly: it is millions of years old!", cs: "A...ho...jus. Fosilština se mluví hodně, hodně pomalu: je stará miliony let!", fr: "Bon...jour...us. Le fossilois se parle très, très lentement : il a des millions d'années !" },
        dict: { hola: "holaus", adios: "adiosus", amigo: "amicus", dinosaurio: "dinosaurus", fosil: "fossilus", volcan: "volcanus", huevo: "ovum", huella: "pisadus", robot: "robotus", mama: "mamus", papa: "papus", casa: "cavernus", agua: "aquarius", comida: "ñamñamus", perro: "perrus", gato: "gatus", grande: "gigantus", pequeno: "minimus", bonito: "bellus", amor: "amorus", gracias: "gratius", si: "situs", no: "nonus", dormir: "roncus-maximus" } },
      { id: "bebesaurio", emoji: "🐣",
        name: { es: "Bebesaurio", ca: "Bebesaure", en: "Babysaur", cs: "Miminkosaurus", fr: "Bébésaure" },
        greeting: { es: "¡Pío-pío-rar! Así hablan los dinos recién salidos del huevo.", ca: "Piu-piu-rar! Així parlen els dinos acabats de sortir de l'ou.", en: "Peep-peep-rawr! That is how dinos fresh out of the egg talk.", cs: "Píp-píp-rá! Tak mluví dinosauříci čerstvě z vajíčka.", fr: "Cui-cui-rar ! C'est comme ça que parlent les dinos tout juste sortis de l'œuf." },
        dict: { hola: "piolita", adios: "piolita-ta", amigo: "migui", dinosaurio: "dino-pío", fosil: "fofi", volcan: "bum-bum", huevo: "mi-casita", huella: "patica", robot: "bo-bo", mama: "mamita", papa: "papito", casa: "nidito", agua: "gluglui", comida: "ñami-ñami", perro: "guaguau", gato: "miaumiau", grande: "grandote", pequeno: "chiqui", bonito: "boni", amor: "achuchón", gracias: "grasi", si: "sipi", no: "nopo", dormir: "mimir" } }
    ]
  },

  /* ---------- MAPA ---------- */
  explore: {
    width: 2600, height: 1100, stars: false,
    bgCss: "radial-gradient(ellipse 40% 30% at 12% 10%, rgba(255,235,59,.5), transparent), linear-gradient(180deg,#ffe0b2 0%,#ffab91 14%,#aed581 36%,#558b2f 70%,#4e342e 100%)",
    cats: [
      { id: "selva", emoji: "🌿", x: 120, name: { es: "Selva", ca: "Selva", en: "Jungle", cs: "Džungle", fr: "Jungle" } },
      { id: "volcan", emoji: "🌋", x: 900, name: { es: "Volcán", ca: "Volcà", en: "Volcano", cs: "Sopka", fr: "Volcan" } },
      { id: "lago", emoji: "💧", x: 1600, name: { es: "Lago", ca: "Llac", en: "Lake", cs: "Jezero", fr: "Lac" } },
      { id: "cuevas", emoji: "🪨", x: 2150, name: { es: "Cuevas", ca: "Coves", en: "Caves", cs: "Jeskyně", fr: "Grottes" } }
    ],
    pois: [
      { cat: "selva", emoji: "🦖", x: 200, y: 560, size: 2,
        name: { es: "T-Rex", ca: "T-Rex", en: "T-Rex", cs: "T-Rex", fr: "T-Rex" },
        fact: { es: "El rey de los dinosaurios. Sus dientes eran tan grandes como plátanos.", ca: "El rei dels dinosaures. Les seves dents eren tan grans com plàtans.", en: "The king of the dinosaurs. Its teeth were as big as bananas.", cs: "Král dinosaurů. Zuby měl velké jako banány.", fr: "Le roi des dinosaures. Ses dents étaient aussi grandes que des bananes." } },
      { cat: "selva", emoji: "🦕", x: 400, y: 380, size: 2,
        name: { es: "Braquiosaurio", ca: "Braquiosaure", en: "Brachiosaurus", cs: "Brachiosaurus", fr: "Brachiosaure" },
        fact: { es: "Con su cuello llegaba a las copas de los árboles, como una grúa.", ca: "Amb el seu coll arribava a les copes dels arbres, com una grua.", en: "Its neck reached the treetops, like a crane.", cs: "Krkem dosáhl až do korun stromů, jako jeřáb.", fr: "Avec son cou, il atteignait la cime des arbres, comme une grue." } },
      { cat: "selva", emoji: "🪶", x: 330, y: 660,
        name: { es: "Velocirráptor", ca: "Velociraptor", en: "Velociraptor", cs: "Velociraptor", fr: "Vélociraptor" },
        fact: { es: "Pequeño, rapidísimo y con plumas. Cazaba en equipo, como los lobos.", ca: "Petit, rapidíssim i amb plomes. Caçava en equip, com els llops.", en: "Small, super fast and feathered. It hunted in teams, like wolves.", cs: "Malý, hrozně rychlý a opeřený. Lovil v týmu, jako vlci.", fr: "Petit, très rapide et à plumes. Il chassait en équipe, comme les loups." } },
      { cat: "selva", emoji: "🥚", x: 550, y: 580,
        name: { es: "Nido con huevos", ca: "Niu amb ous", en: "Nest with eggs", cs: "Hnízdo s vejci", fr: "Nid avec des œufs" },
        fact: { es: "Muchos dinos cuidaban sus nidos con mimo, como los pájaros de hoy.", ca: "Molts dinos cuidaven els seus nius amb cura, com els ocells d'avui.", en: "Many dinos cared for their nests, just like today's birds.", cs: "Mnoho dinosaurů se o svá hnízda pečlivě staralo, jako dnešní ptáci.", fr: "Beaucoup de dinos prenaient soin de leur nid, comme les oiseaux d'aujourd'hui." } },
      { cat: "selva", emoji: "🍃", x: 680, y: 420,
        name: { es: "Helechos gigantes", ca: "Falgueres gegants", en: "Giant ferns", cs: "Obří kapradiny", fr: "Fougères géantes" },
        fact: { es: "En la era de los dinos no había hierba: ¡había helechos gigantes!", ca: "A l'era dels dinos no hi havia herba: hi havia falgueres gegants!", en: "In the dino age there was no grass: there were giant ferns!", cs: "V době dinosaurů nebyla tráva: byly obří kapradiny!", fr: "À l'époque des dinos, il n'y avait pas d'herbe : il y avait des fougères géantes !" } },
      { cat: "volcan", emoji: "🌋", x: 950, y: 350, size: 2,
        name: { es: "El gran volcán", ca: "El gran volcà", en: "The great volcano", cs: "Velká sopka", fr: "Le grand volcan" },
        fact: { es: "Los volcanes de entonces eran enormes y cambiaban el clima del planeta.", ca: "Els volcans d'aleshores eren enormes i canviaven el clima del planeta.", en: "The volcanoes back then were huge and could change the planet's weather.", cs: "Tehdejší sopky byly obrovské a měnily podnebí celé planety.", fr: "Les volcans de l'époque étaient énormes et changeaient le climat de la planète." } },
      { cat: "volcan", emoji: "🛡️", x: 1100, y: 600,
        name: { es: "Anquilosaurio", ca: "Anquilosaure", en: "Ankylosaurus", cs: "Ankylosaurus", fr: "Ankylosaure" },
        fact: { es: "Blindado como un tanque y con un mazo en la cola. ¡Nadie lo molestaba!", ca: "Blindat com un tanc i amb una maça a la cua. Ningú no el molestava!", en: "Armoured like a tank with a club on its tail. Nobody bothered it!", cs: "Obrněný jako tank a s kyjem na ocase. Nikdo si na něj netroufl!", fr: "Blindé comme un char avec une massue sur la queue. Personne ne l'embêtait !" } },
      { cat: "volcan", emoji: "🦏", x: 1280, y: 480,
        name: { es: "Triceratops", ca: "Triceratops", en: "Triceratops", cs: "Triceratops", fr: "Tricératops" },
        fact: { es: "Tres cuernos y un escudo en la cabeza. Comía plantas y era muy tranquilo.", ca: "Tres banyes i un escut al cap. Menjava plantes i era molt tranquil.", en: "Three horns and a head shield. It ate plants and was very calm.", cs: "Tři rohy a štít na hlavě. Jedl rostliny a byl velmi klidný.", fr: "Trois cornes et un bouclier sur la tête. Il mangeait des plantes et était très calme." } },
      { cat: "volcan", emoji: "🐾", x: 1420, y: 640,
        name: { es: "Huella gigante", ca: "Petjada gegant", en: "Giant footprint", cs: "Obří stopa", fr: "Empreinte géante" },
        fact: { es: "¡Cabrías entera dentro de esta huella! La dejó un saurópodo al pasar.", ca: "Hi cabries sencer dins d'aquesta petjada! La va deixar un sauròpode en passar.", en: "You could fit inside this footprint! A sauropod left it walking by.", cs: "Do téhle stopy by ses vešla celá! Nechal ji tu sauropod.", fr: "Tu tiendrais tout entier dans cette empreinte ! Un sauropode l'a laissée en passant." } },
      { cat: "lago", emoji: "🐊", x: 1620, y: 520, size: 2,
        name: { es: "Espinosaurio", ca: "Espinosaure", en: "Spinosaurus", cs: "Spinosaurus", fr: "Spinosaure" },
        fact: { es: "Tenía una vela en la espalda y le encantaba pescar. ¡Nadaba genial!", ca: "Tenia una vela a l'esquena i li encantava pescar. Nedava genial!", en: "It had a sail on its back and loved fishing. It was a great swimmer!", cs: "Na zádech měl plachtu a miloval rybaření. Skvěle plaval!", fr: "Il avait une voile sur le dos et adorait pêcher. Il nageait super bien !" } },
      { cat: "lago", emoji: "🪽", x: 1800, y: 330,
        name: { es: "Pteranodón", ca: "Pteranodont", en: "Pteranodon", cs: "Pteranodon", fr: "Ptéranodon" },
        fact: { es: "Planeaba sobre el agua con alas más grandes que un coche.", ca: "Planava sobre l'aigua amb ales més grans que un cotxe.", en: "It glided over the water with wings bigger than a car.", cs: "Plachtil nad vodou na křídlech větších než auto.", fr: "Il planait au-dessus de l'eau avec des ailes plus grandes qu'une voiture." } },
      { cat: "lago", emoji: "🔶", x: 1950, y: 600,
        name: { es: "Estegosaurio", ca: "Estegosaure", en: "Stegosaurus", cs: "Stegosaurus", fr: "Stégosaure" },
        fact: { es: "Placas en el lomo y pinchos en la cola. Su cerebro era como una nuez.", ca: "Plaques a l'esquena i punxes a la cua. El seu cervell era com una nou.", en: "Plates on its back and spikes on its tail. Its brain was the size of a walnut.", cs: "Desky na hřbetě a bodce na ocase. Mozek měl velký jako vlašský ořech.", fr: "Des plaques sur le dos et des piquants sur la queue. Son cerveau était comme une noix." } },
      { cat: "lago", emoji: "🐟", x: 1740, y: 700,
        name: { es: "Peces antiguos", ca: "Peixos antics", en: "Ancient fish", cs: "Pravěké ryby", fr: "Poissons anciens" },
        fact: { es: "Algunos peces de entonces siguen igualitos hoy. ¡Son fósiles vivientes!", ca: "Alguns peixos d'aleshores continuen igualets avui. Són fòssils vivents!", en: "Some fish from back then look exactly the same today. Living fossils!", cs: "Některé tehdejší ryby vypadají dodnes úplně stejně. Živoucí fosilie!", fr: "Certains poissons de l'époque sont restés pareils aujourd'hui. Des fossiles vivants !" } },
      { cat: "cuevas", emoji: "🦴", x: 2200, y: 560, size: 2,
        name: { es: "El gran fósil", ca: "El gran fòssil", en: "The great fossil", cs: "Velká fosilie", fr: "Le grand fossile" },
        fact: { es: "Un esqueleto entero dormido en la roca, esperando a que alguien lo despierte con un pincel.", ca: "Un esquelet sencer adormit a la roca, esperant que algú el desperti amb un pinzell.", en: "A whole skeleton asleep in the rock, waiting for someone to wake it with a brush.", cs: "Celá kostra spící ve skále a čekající, až ji někdo probudí štětečkem.", fr: "Un squelette entier endormi dans la roche, attendant qu'on le réveille avec un pinceau." } },
      { cat: "cuevas", emoji: "🟠", x: 2360, y: 420,
        name: { es: "Ámbar", ca: "Ambre", en: "Amber", cs: "Jantar", fr: "Ambre" },
        fact: { es: "Resina de árbol convertida en piedra dorada. A veces guarda un mosquito de hace millones de años.", ca: "Resina d'arbre convertida en pedra daurada. De vegades guarda un mosquit de fa milions d'anys.", en: "Tree sap turned into golden stone. Sometimes it keeps a mosquito from millions of years ago.", cs: "Stromová pryskyřice proměněná ve zlatý kámen. Někdy v ní je komár starý miliony let.", fr: "De la résine d'arbre devenue pierre dorée. Parfois, elle garde un moustique d'il y a des millions d'années." } },
      { cat: "cuevas", emoji: "💎", x: 2480, y: 650,
        name: { es: "Cristales brillantes", ca: "Cristalls brillants", en: "Shiny crystals", cs: "Třpytivé krystaly", fr: "Cristaux brillants" },
        fact: { es: "Las cuevas guardan cristales que tardaron miles de años en crecer.", ca: "Les coves guarden cristalls que van trigar milers d'anys a créixer.", en: "Caves keep crystals that took thousands of years to grow.", cs: "Jeskyně ukrývají krystaly, které rostly tisíce let.", fr: "Les grottes gardent des cristaux qui ont mis des milliers d'années à grandir." } }
    ]
  },

  /* ---------- CHARLA ---------- */
  chat: {
    keywords: [
      { keys: ["hola", "hello", "hi ", "ahoj", "bonjour", "salut", "bon dia", "buenas"],
        replies: [{ es: "¡Hola, {name}! Acabo de volver del Jurásico. ¡Aún tengo arena prehistórica en las ruedas!", ca: "Hola, {name}! Acabo de tornar del Juràssic. Encara tinc sorra prehistòrica a les rodes!", en: "Hi, {name}! I just got back from the Jurassic. I still have prehistoric sand in my wheels!", cs: "Ahoj, {name}! Právě jsem se vrátil z jury. Ještě mám v kolečkách pravěký písek!", fr: "Salut, {name} ! Je reviens tout juste du Jurassique. J'ai encore du sable préhistorique dans les roues !" }] },
      { keys: ["como estas", "how are you", "jak se mas", "comment ca va", "com estas", "que tal"],
        replies: [{ es: "¡Contentísimo! Hoy un T-Rex me ha sonreído. Creo. También puede que quisiera merendarme. ¿Y tú qué tal, {name}?", ca: "Contentíssim! Avui un T-Rex m'ha somrigut. Crec. També pot ser que em volgués berenar. I tu què tal, {name}?", en: "Super happy! A T-Rex smiled at me today. I think. It may also have wanted me for a snack. How about you, {name}?", cs: "Mám ohromnou radost! Dnes se na mě usmál T-Rex. Myslím. Možná mě taky chtěl ke svačině. A jak se máš ty, {name}?", fr: "Très content ! Aujourd'hui, un T-Rex m'a souri. Je crois. Il voulait peut-être aussi me goûter. Et toi, {name} ?" }] },
      { keys: ["cancion", "musica", "music", "song", "sing", "pisnicka", "hudba", "chanson", "musique", "canço", "canta", "zpiv", "chante"],
        replies: [{ es: "¡Me encanta cantar! Mi favorita es 'Bip Bop entre los Dinosaurios'. ¿Vamos al Karaoke y hacemos el baile del T-Rex?", ca: "M'encanta cantar! La meva preferida és 'Bip Bop entre els Dinosaures'. Anem al Karaoke i fem el ball del T-Rex?", en: "I love singing! My favourite is 'Beep Bop among the Dinosaurs'. Shall we go to Karaoke and do the T-Rex dance?", cs: "Zpívání miluju! Moje oblíbená je 'Píp Bop mezi dinosaury'. Půjdeme na karaoke a zatancujeme si tanec T-Rexe?", fr: "J'adore chanter ! Ma préférée, c'est « Bip Bop parmi les dinosaures ». On va au karaoké faire la danse du T-Rex ?" }] },
      { keys: ["chiste", "joke", "vtip", "blague", "acudit", "broma"],
        replies: [
          { es: "¿Qué hace un T-Rex cuando pierde al escondite? ¡Nada, si con esos brazos no puede ni taparse los ojos! Ja, ja.", ca: "Què fa un T-Rex quan perd a fet i amagar? Res, si amb aquests braços no pot ni tapar-se els ulls! Ha, ha.", en: "Why is the T-Rex terrible at hide-and-seek? With those arms he cannot even cover his eyes! Ha ha.", cs: "Proč je T-Rex příšerný na schovávanou? S těma ručičkama si nezakryje ani oči! Ha ha.", fr: "Pourquoi le T-Rex est nul à cache-cache ? Avec ses petits bras, il ne peut même pas se cacher les yeux ! Ha ha." },
          { es: "¿Cómo se llama un dinosaurio que nunca se rinde? ¡Sí-se-puede-saurio! Ji, ji.", ca: "Com es diu un dinosaure que mai no es rendeix? Sí-que-puc-saure! Hi, hi.", en: "What do you call a dinosaur that never gives up? A try-try-again-osaurus! Hee hee.", cs: "Jak se jmenuje dinosaurus, který se nikdy nevzdává? Jánikdynevzdávosaurus! Chi chi.", fr: "Comment s'appelle un dinosaure qui n'abandonne jamais ? Un jamais-je-ne-lâche-osaure ! Hi hi." }] },
      { keys: ["te quiero", "love you", "t'estimo", "testimo", "mam te rad", "je t'aime", "jetaime"],
        replies: [{ es: "¡Y yo a ti, {name}! Te quiero tamaño Braquiosaurio: ¡de la cabeza a la punta de la cola!", ca: "I jo a tu, {name}! T'estimo mida Braquiosaure: del cap a la punta de la cua!", en: "I love you too, {name}! Brachiosaurus-sized: from head to tail tip!", cs: "Já tebe taky, {name}! Mám tě rád jako brachiosaurus: od hlavy až po špičku ocasu!", fr: "Moi aussi je t'aime, {name} ! Taille Brachiosaure : de la tête au bout de la queue !" }] },
      { keys: ["triste", "sad", "smutn", "llorar", "plorar", "cry", "chagrin"],
        replies: [{ es: "Ven, {name}. Hasta el T-Rex más grande tiene días grises. Cuéntamelo todo, que para escuchar no hacen falta brazos largos.", ca: "Vine, {name}. Fins i tot el T-Rex més gran té dies grisos. Explica-m'ho tot, que per escoltar no calen braços llargs.", en: "Come here, {name}. Even the biggest T-Rex has grey days. Tell me everything, you do not need long arms to listen.", cs: "Pojď sem, {name}. I ten největší T-Rex má šedivé dny. Všechno mi povídej, na poslouchání nejsou potřeba dlouhé ruce.", fr: "Viens, {name}. Même le plus grand T-Rex a des jours gris. Raconte-moi tout, pas besoin de longs bras pour écouter." }] },
      { keys: ["donde estas", "where are you", "kde jsi", "ou es tu", "on ets"],
        replies: [{ es: "Estoy tomando un baño de barro con un Anquilosaurio. Dice que es buenísimo para la coraza.", ca: "M'estic banyant al fang amb un Anquilosaure. Diu que és boníssim per a la cuirassa.", en: "I am taking a mud bath with an Ankylosaurus. He says it is great for the armour.", cs: "Koupu se v bahně s ankylosaurem. Prý je to skvělé na krunýř.", fr: "Je prends un bain de boue avec un Ankylosaure. Il dit que c'est excellent pour la carapace." }] },
      { keys: ["trex", "t-rex", "rex", "tiranosaurio", "tyrannosaur"],
        replies: [{ es: "¡El T-Rex! Dientes como plátanos y bracitos que no llegan a nada. Pero oye, olfato de campeón: olía la merienda a kilómetros.", ca: "El T-Rex! Dents com plàtans i bracets que no arriben a res. Però escolta, olfacte de campió: olorava el berenar a quilòmetres.", en: "The T-Rex! Teeth like bananas and little arms that reach nothing. But what a nose: it could smell a snack from kilometres away.", cs: "T-Rex! Zuby jako banány a ručičky, co nikam nedosáhnou. Ale zato čich šampiona: svačinu ucítil na kilometry.", fr: "Le T-Rex ! Des dents comme des bananes et des petits bras qui n'attrapent rien. Mais quel flair : il sentait le goûter à des kilomètres." }] },
      { keys: ["fosil", "fossil", "fosilie", "fossile"],
        replies: [{ es: "Los fósiles son historias que la tierra quiere contarte. ¡Ve al modo Explorar y busca el gran fósil de las cuevas!", ca: "Els fòssils són històries que la terra et vol explicar. Vés al mode Explorar i busca el gran fòssil de les coves!", en: "Fossils are stories the earth wants to tell you. Go to Explore mode and find the great fossil in the caves!", cs: "Fosilie jsou příběhy, které ti země chce vyprávět. Jdi do režimu Objevuj a najdi velkou fosilii v jeskyních!", fr: "Les fossiles sont des histoires que la terre veut te raconter. Va dans le mode Explorer et trouve le grand fossile des grottes !" }] },
      { keys: ["cole", "school", "escola", "skola", "ecole"],
        replies: [{ es: "¿Qué tal el cole, {name}? ¿Sabes que los velocirráptores también aprendían en equipo? ¡Cuéntame qué has aprendido hoy!", ca: "Què tal l'escola, {name}? Saps que els velociraptors també aprenien en equip? Explica'm què has après avui!", en: "How was school, {name}? Did you know velociraptors learned in teams too? Tell me what you learned today!", cs: "Jaké to bylo ve škole, {name}? Víš, že velociraptoři se taky učili v týmu? Pověz mi, co ses dnes naučila!", fr: "C'était comment l'école, {name} ? Tu sais que les vélociraptors apprenaient aussi en équipe ? Raconte-moi ce que tu as appris aujourd'hui !" }] }
    ],
    fallback: [
      { es: "¿Sabías que los pájaros son los nietos de los dinosaurios? ¡El gorrión de tu ventana es un dino pequeñito!", ca: "Sabies que els ocells són els néts dels dinosaures? El pardal de la teva finestra és un dino petitó!", en: "Did you know birds are the grandchildren of dinosaurs? The sparrow at your window is a tiny dino!", cs: "Věděla jsi, že ptáci jsou vnoučata dinosaurů? Vrabec za tvým oknem je malinký dinosaurus!", fr: "Tu savais que les oiseaux sont les petits-enfants des dinosaures ? Le moineau de ta fenêtre est un mini dino !" },
      { es: "Algunos dinosaurios tragaban piedras para triturar la comida en la barriga. ¡Su estómago era una batidora!", ca: "Alguns dinosaures s'empassaven pedres per triturar el menjar a la panxa. El seu estómac era una batedora!", en: "Some dinosaurs swallowed stones to grind food in their tummy. Their stomach was a blender!", cs: "Někteří dinosauři polykali kameny, aby si v břiše rozdrtili jídlo. Jejich žaludek byl mixér!", fr: "Certains dinosaures avalaient des pierres pour broyer la nourriture dans leur ventre. Leur estomac était un mixeur !" },
      { es: "El cuello del Braquiosaurio medía como cuatro jirafas puestas en fila. ¡Imagínate su bufanda!", ca: "El coll del Braquiosaure feia com quatre girafes posades en filera. Imagina't la seva bufanda!", en: "The Brachiosaurus's neck was as long as four giraffes in a row. Imagine its scarf!", cs: "Krk brachiosaura měřil jako čtyři žirafy za sebou. Představ si jeho šálu!", fr: "Le cou du Brachiosaure mesurait comme quatre girafes alignées. Imagine son écharpe !" },
      { es: "{name}, los raptores ganaban porque jugaban en equipo. Compartir y ayudar: ese es el superpoder de verdad.", ca: "{name}, els raptors guanyaven perquè jugaven en equip. Compartir i ajudar: aquest és el superpoder de debò.", en: "{name}, raptors won because they worked as a team. Sharing and helping: that is the real superpower.", cs: "{name}, raptoři vyhrávali, protože hráli v týmu. Dělit se a pomáhat: to je ta pravá superschopnost.", fr: "{name}, les raptors gagnaient parce qu'ils jouaient en équipe. Partager et aider : c'est ça, le vrai superpouvoir." },
      { es: "¿Cuál es tu dinosaurio favorito? El mío es el Estegosaurio, porque va con su tejado a todas partes.", ca: "Quin és el teu dinosaure preferit? El meu és l'Estegosaure, perquè va amb la seva teulada a tot arreu.", en: "Which is your favourite dinosaur? Mine is the Stegosaurus, because it carries its roof everywhere.", cs: "Kterého dinosaura máš nejradši? Já stegosaura, protože všude chodí se svou střechou.", fr: "Quel est ton dinosaure préféré ? Le mien, c'est le Stégosaure, parce qu'il emporte son toit partout." },
      { es: "Un mosquito dormido en ámbar puede tener 100 millones de años. ¡La siesta más larga de la historia!", ca: "Un mosquit adormit en ambre pot tenir 100 milions d'anys. La migdiada més llarga de la història!", en: "A mosquito asleep in amber can be 100 million years old. The longest nap in history!", cs: "Komár spící v jantaru může být starý 100 milionů let. Nejdelší šlofík v dějinách!", fr: "Un moustique endormi dans l'ambre peut avoir 100 millions d'années. La plus longue sieste de l'histoire !" }
    ]
  }
});
