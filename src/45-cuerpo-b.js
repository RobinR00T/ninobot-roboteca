"use strict";
/* ============================================================
   Contenido de CUERPO HUMANO (parte B): historias, canciones,
   traductor, mapa y charla.
   ============================================================ */

Object.assign(THEMES.cuerpo.content, {

  /* ---------- HISTORIAS ---------- */
  stories: [
    {
      id: "manzana", emoji: "🍎", start: "n1",
      title: { es: "El gran viaje de la manzana", ca: "El gran viatge de la poma", en: "The Apple's Great Journey", cs: "Velká cesta jablíčka", fr: "Le grand voyage de la pomme" },
      nodes: {
        n1: {
          text: { es: "¡{name}! Nos hemos hecho pequeñitos y estamos sentados encima de un trocito de manzana... ¡dentro de una boca! Las muelas empiezan a masticar. ¿Nos agarramos fuerte o saltamos ya al tobogán de la garganta?", ca: "{name}! Ens hem fet petitons i estem asseguts sobre un trosset de poma... dins d'una boca! Els queixals comencen a mastegar. Ens agafem fort o saltem ja al tobogan de la gola?", en: "{name}! We have shrunk down and we are sitting on a little piece of apple... inside a mouth! The teeth start chewing. Do we hold on tight or jump onto the throat slide right now?", cs: "{name}! Zmenšili jsme se a sedíme na kousku jablíčka... uvnitř pusy! Zuby začínají žvýkat. Držíme se pevně, nebo hned skočíme na skluzavku v krku?", fr: "{name} ! On a rétréci et on est assis sur un petit morceau de pomme... dans une bouche ! Les dents commencent à mâcher. On s'accroche fort ou on saute tout de suite sur le toboggan de la gorge ?" },
          choices: [
            { t: { es: "¡Agarrarnos y aguantar el meneo!", ca: "Agafar-nos i aguantar el sotrac!", en: "Hold on and ride the wobble!", cs: "Držet se a vydržet to houpání!", fr: "On s'accroche et on tient bon !" }, go: "n2a" },
            { t: { es: "¡Al tobogán! ¡Yuju!", ca: "Al tobogan! Iuju!", en: "To the slide! Wheee!", cs: "Na skluzavku! Jupí!", fr: "Au toboggan ! Youhou !" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "¡Menudo baile! Los dientes trocean la manzana y la saliva lo mezcla todo como una hormigonera. Ahora sí: el trozo resbala hacia el tobogán del esófago. ¡Abajooo!", ca: "Quin ball! Les dents trossegen la poma i la saliva ho barreja tot com una formigonera. Ara sí: el tros rellisca cap al tobogan de l'esòfag. Avalll!", en: "What a dance! The teeth chop the apple and the saliva mixes it all like a cement mixer. Now the piece slides down the oesophagus slide. Heeere we go!", cs: "To bylo tancování! Zuby jablko nakrájejí a sliny všechno zamíchají jako míchačka. A teď už kousek klouže na skluzavku jícnu. Dolůůů!", fr: "Quelle danse ! Les dents coupent la pomme et la salive mélange tout comme une bétonnière. Maintenant, le morceau glisse sur le toboggan de l'œsophage. En baaas !" },
          choices: [{ t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n3" }]
        },
        n2b: {
          text: { es: "¡Fiuuuu! Bajáis por el esófago como por el tobogán más largo del parque. Por el camino saludáis a la campanilla, que os dice adiós moviéndose como una campana de verdad.", ca: "Fiuuu! Baixeu per l'esòfag com pel tobogan més llarg del parc. Pel camí saludeu la campaneta, que us diu adéu movent-se com una campana de veritat.", en: "Wheee! You slide down the oesophagus like the longest slide in the park. On the way you wave at the uvula, which says goodbye swinging like a real bell.", cs: "Fíííú! Sjíždíte jícnem jako po nejdelší skluzavce v parku. Cestou zamáváte čípku, který se s vámi loučí a houpe se jako opravdový zvonek.", fr: "Fiouuu ! Vous descendez l'œsophage comme le plus long toboggan du parc. En chemin, vous saluez la luette, qui vous dit au revoir en se balançant comme une vraie cloche." },
          choices: [{ t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n3" }]
        },
        n3: {
          text: { es: "¡Chof! Aterrizáis en el estómago, una piscina rosa que se mueve sola. Glu, glu: está deshaciendo la manzana para sacarle toda la energía. Desde aquí salen dos caminos: el intestino serpiente o... ¿espiamos antes el corazón por la ventanilla?", ca: "Xof! Aterreu a l'estómac, una piscina rosa que es mou sola. Glu, glu: està desfent la poma per treure'n tota l'energia. Des d'aquí surten dos camins: l'intestí serp o... espiem abans el cor per la finestreta?", en: "Splash! You land in the stomach, a pink pool that moves by itself. Glug, glug: it is melting the apple to get all its energy out. From here there are two paths: the snake intestine or... shall we peek at the heart through the little window first?", cs: "Žbluňk! Přistanete v žaludku, růžovém bazénu, který se sám hýbe. Glo, glo: rozpouští jablko, aby z něj získal energii. Odtud vedou dvě cesty: střevní had, nebo... nakoukneme nejdřív okénkem na srdce?", fr: "Splash ! Vous atterrissez dans l'estomac, une piscine rose qui bouge toute seule. Glou, glou : il fait fondre la pomme pour en tirer toute l'énergie. D'ici partent deux chemins : l'intestin serpent ou... on espionne d'abord le cœur par la petite fenêtre ?" },
          choices: [
            { t: { es: "¡Al intestino serpiente!", ca: "A l'intestí serp!", en: "To the snake intestine!", cs: "Do střevního hada!", fr: "Dans l'intestin serpent !" }, go: "e1" },
            { t: { es: "¡A espiar el corazón!", ca: "A espiar el cor!", en: "Let's peek at the heart!", cs: "Nakouknout na srdce!", fr: "Espionnons le cœur !" }, go: "e2" }
          ]
        },
        e1: {
          end: true,
          text: { es: "El intestino es un túnel de siete metros lleno de curvas. Allí, la energía de la manzana pasa a la sangre, que la reparte a las piernas para correr y al cerebro para pensar. ¡Misión cumplida, {name}! Por eso comer fruta te da superpoderes de verdad.", ca: "L'intestí és un túnel de set metres ple de corbes. Allà, l'energia de la poma passa a la sang, que la reparteix a les cames per córrer i al cervell per pensar. Missió complerta, {name}! Per això menjar fruita et dóna superpoders de debò.", en: "The intestine is a seven-metre tunnel full of bends. There, the apple's energy passes into the blood, which delivers it to your legs for running and your brain for thinking. Mission complete, {name}! That is why eating fruit gives you real superpowers.", cs: "Střevo je sedmimetrový tunel plný zatáček. Tam energie z jablíčka přejde do krve, která ji rozveze nohám na běhání a mozku na přemýšlení. Mise splněna, {name}! Proto ti ovoce dává opravdové superschopnosti.", fr: "L'intestin est un tunnel de sept mètres plein de virages. Là, l'énergie de la pomme passe dans le sang, qui la livre aux jambes pour courir et au cerveau pour penser. Mission accomplie, {name} ! C'est pour ça que manger des fruits donne de vrais superpouvoirs." }
        },
        e2: {
          end: true,
          text: { es: "Por la ventanilla veis el corazón: ¡BUM-bum, BUM-bum! Un tambor gigante que no para nunca, ni cuando duermes. Le mandáis un saludo y él responde latiendo un poquito más contento. Ha sido el mejor concierto del mundo, {name}: el de tu propio cuerpo.", ca: "Per la finestreta veieu el cor: BUM-bum, BUM-bum! Un tambor gegant que no para mai, ni quan dorms. Li envieu una salutació i ell respon bategant una miqueta més content. Ha estat el millor concert del món, {name}: el del teu propi cos.", en: "Through the little window you see the heart: BOOM-boom, BOOM-boom! A giant drum that never stops, not even when you sleep. You wave at it and it answers by beating a little happier. That was the best concert in the world, {name}: the one inside your own body.", cs: "Okénkem vidíte srdce: BUM-bum, BUM-bum! Obří buben, který se nikdy nezastaví, ani když spíš. Zamáváte mu a ono odpoví o kousíček veselejším tlukotem. Byl to nejlepší koncert na světě, {name}: koncert tvého vlastního těla.", fr: "Par la petite fenêtre, vous voyez le cœur : BOUM-boum, BOUM-boum ! Un tambour géant qui ne s'arrête jamais, même quand tu dors. Vous lui faites coucou et il répond en battant un peu plus joyeusement. C'était le meilleur concert du monde, {name} : celui de ton propre corps." }
        }
      }
    },
    {
      id: "susto", emoji: "💓", start: "n1",
      title: { es: "El corazón acelerado", ca: "El cor accelerat", en: "The Racing Heart", cs: "Splašené srdíčko", fr: "Le cœur qui s'emballe" },
      nodes: {
        n1: {
          text: { es: "Hoy el corazón de la niña por la que viajamos va rapidísimo: BUMBUMBUMBUM. Mañana habla delante de toda la clase y está nerviosa. Su corazón nos pide ayuda, {name}. ¿Qué hacemos?", ca: "Avui el cor de la nena per la qual viatgem va rapidíssim: BUMBUMBUMBUM. Demà parla davant de tota la classe i està nerviosa. El seu cor ens demana ajuda, {name}. Què fem?", en: "Today the heart of the girl we are travelling through is racing: BOOMBOOMBOOM. Tomorrow she speaks in front of the whole class and she is nervous. Her heart asks us for help, {name}. What do we do?", cs: "Dnes srdce holčičky, kterou cestujeme, běží jako splašené: BUMBUMBUMBUM. Zítra mluví před celou třídou a je nervózní. Její srdce nás prosí o pomoc, {name}. Co uděláme?", fr: "Aujourd'hui, le cœur de la fille dans laquelle on voyage bat très vite : BOUMBOUMBOUM. Demain, elle parle devant toute la classe et elle est nerveuse. Son cœur nous demande de l'aide, {name}. Qu'est-ce qu'on fait ?" },
          choices: [
            { t: { es: "Vamos a los pulmones a pedir respiraciones lentas", ca: "Anem als pulmons a demanar respiracions lentes", en: "We go to the lungs to ask for slow breaths", cs: "Jdeme do plic poprosit o pomalé nádechy", fr: "On va voir les poumons pour demander des respirations lentes" }, go: "n2a" },
            { t: { es: "Vamos al cerebro a cambiar los pensamientos", ca: "Anem al cervell a canviar els pensaments", en: "We go to the brain to change the thoughts", cs: "Jdeme do mozku vyměnit myšlenky", fr: "On va au cerveau pour changer les pensées" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "Los pulmones aceptan encantados: 'Vamos a hacer la respiración del globo'. Aire por la nariz despaaacio, uno, dos, tres... y soltar por la boca como un globo que se desinfla. ¿Lo probamos también nosotros?", ca: "Els pulmons accepten encantats: 'Farem la respiració del globus'. Aire pel nas a poc a poc, un, dos, tres... i deixar anar per la boca com un globus que es desinfla. Ho provem també nosaltres?", en: "The lungs happily agree: 'Let's do the balloon breath'. Air in through the nose sloooowly, one, two, three... and out through the mouth like a balloon deflating. Shall we try it too?", cs: "Plíce nadšeně souhlasí: 'Uděláme balonkové dýchání'. Vzduch nosem pomaloučku, raz, dva, tři... a ven pusou jako balonek, který se vyfukuje. Zkusíme to taky?", fr: "Les poumons acceptent avec joie : « On va faire la respiration du ballon ». L'air par le nez touuut doucement, un, deux, trois... et on souffle par la bouche comme un ballon qui se dégonfle. On essaie aussi ?" },
          choices: [
            { t: { es: "¡Sí! Respiramos con ella tres veces", ca: "Sí! Respirem amb ella tres vegades", en: "Yes! We breathe with her three times", cs: "Ano! Dýcháme s ní třikrát", fr: "Oui ! On respire avec elle trois fois" }, go: "e1" }
          ]
        },
        n2b: {
          text: { es: "En el cerebro hay un pensamiento gris dando vueltas: 'lo haré fatal'. El cerebro os enseña el interruptor de los pensamientos. ¿Por cuál lo cambiamos?", ca: "Al cervell hi ha un pensament gris fent voltes: 'ho faré fatal'. El cervell us ensenya l'interruptor dels pensaments. Per quin el canviem?", en: "In the brain there is a grey thought going round and round: 'I will do terribly'. The brain shows you the thought switch. Which one do we swap it for?", cs: "V mozku krouží šedivá myšlenka: 'zkazím to'. Mozek vám ukáže přepínač myšlenek. Za kterou ji vyměníme?", fr: "Dans le cerveau, une pensée grise tourne en rond : « je vais tout rater ». Le cerveau vous montre l'interrupteur des pensées. On la remplace par laquelle ?" },
          choices: [
            { t: { es: "'Me he preparado y lo voy a contar genial'", ca: "'M'he preparat i ho explicaré genial'", en: "'I have practised and I will tell it great'", cs: "'Připravila jsem se a povím to skvěle'", fr: "« Je me suis préparée et je vais super bien le raconter »" }, go: "e2" },
            { t: { es: "'Si me equivoco, no pasa nada: sigo'", ca: "'Si m'equivoco, no passa res: continuo'", en: "'If I make a mistake, it is okay: I keep going'", cs: "'Když se spletu, nic se neděje: pokračuju'", fr: "« Si je me trompe, ce n'est pas grave : je continue »" }, go: "e2" }
          ]
        },
        e1: {
          end: true,
          text: { es: "Uno... dos... tres. El corazón baja el ritmo como un tambor que encuentra su canción: bum-bum, bum-bum. La niña sonríe: ya no está asustada, solo emocionada. Recuérdalo, {name}: cuando los nervios aprieten, respira como un globo. Funciona siempre.", ca: "Un... dos... tres. El cor abaixa el ritme com un tambor que troba la seva cançó: bum-bum, bum-bum. La nena somriu: ja no està espantada, només emocionada. Recorda-ho, {name}: quan els nervis estrenyin, respira com un globus. Funciona sempre.", en: "One... two... three. The heart slows down like a drum finding its song: boom-boom, boom-boom. The girl smiles: she is not scared any more, just excited. Remember, {name}: when nerves squeeze you, breathe like a balloon. It always works.", cs: "Raz... dva... tři. Srdce zpomalí jako buben, který našel svou písničku: bum-bum, bum-bum. Holčička se usměje: už se nebojí, jen se těší. Zapamatuj si to, {name}: když tě přepadne tréma, dýchej jako balonek. Funguje to vždycky.", fr: "Un... deux... trois. Le cœur ralentit comme un tambour qui trouve sa chanson : boum-boum, boum-boum. La fille sourit : elle n'a plus peur, elle est juste excitée. Souviens-toi, {name} : quand les nerfs te serrent, respire comme un ballon. Ça marche toujours." }
        },
        e2: {
          end: true,
          text: { es: "Clic. El pensamiento nuevo se enciende y brilla, y el corazón lo nota enseguida: baja a su ritmo tranquilo. Al día siguiente, la niña habla delante de la clase ¡y hasta le aplauden! Los pensamientos amables calman el cuerpo entero, {name}. Guárdate ese truco.", ca: "Clic. El pensament nou s'encén i brilla, i el cor ho nota de seguida: baixa al seu ritme tranquil. L'endemà, la nena parla davant de la classe i fins i tot l'aplaudeixen! Els pensaments amables calmen el cos sencer, {name}. Guarda't aquest truc.", en: "Click. The new thought lights up and shines, and the heart feels it right away: it settles into its calm beat. The next day, the girl speaks in front of the class and even gets applause! Kind thoughts calm the whole body, {name}. Keep that trick.", cs: "Cvak. Nová myšlenka se rozsvítí a září a srdce to hned pozná: zklidní se do svého rytmu. Druhý den holčička mluví před třídou a dokonce jí zatleskají! Laskavé myšlenky zklidní celé tělo, {name}. Ten trik si schovej.", fr: "Clic. La nouvelle pensée s'allume et brille, et le cœur le sent tout de suite : il retrouve son rythme tranquille. Le lendemain, la fille parle devant la classe et on l'applaudit même ! Les pensées gentilles calment tout le corps, {name}. Garde cette astuce." }
        }
      }
    },
    {
      id: "rescate", emoji: "🩹", start: "n1",
      title: { es: "Los glóbulos al rescate", ca: "Els glòbuls al rescat", en: "Blood Cells to the Rescue", cs: "Krvinky zasahují", fr: "Les globules à la rescousse" },
      nodes: {
        n1: {
          text: { es: "¡Alarma en la rodilla, {name}! El niño por el que viajamos se ha caído jugando y se ha hecho un rasguño. Suena la sirena: ¡ñi-no, ñi-no! ¿Con qué equipo de rescate vamos?", ca: "Alarma al genoll, {name}! El nen pel qual viatgem ha caigut jugant i s'ha fet una esgarrinxada. Sona la sirena: ni-no, ni-no! Amb quin equip de rescat anem?", en: "Alarm in the knee, {name}! The boy we are travelling through fell while playing and got a scrape. The siren sounds: nee-naw, nee-naw! Which rescue team do we join?", cs: "Poplach v koleni, {name}! Chlapec, kterým cestujeme, upadl při hraní a odřel si ho. Houká siréna: í-á, í-á! Ke kterému záchrannému týmu se přidáme?", fr: "Alerte au genou, {name} ! Le garçon dans lequel on voyage est tombé en jouant et s'est écorché. La sirène sonne : pin-pon, pin-pon ! Avec quelle équipe de secours on part ?" },
          choices: [
            { t: { es: "Con las plaquetas constructoras", ca: "Amb les plaquetes constructores", en: "With the builder platelets", cs: "S destičkami stavitelkami", fr: "Avec les plaquettes bâtisseuses" }, go: "n2a" },
            { t: { es: "Con los glóbulos blancos guardianes", ca: "Amb els glòbuls blancs guardians", en: "With the guardian white cells", cs: "S bílými krvinkami strážkyněmi", fr: "Avec les globules blancs gardiens" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "Las plaquetas llegan zumbando con sus cascos de obra: '¡A tapar el agujero!'. Se abrazan unas a otras hasta hacer un tapón y encima construyen una costra, el techo provisional. '¡Prohibido arrancarla!', gritan. ¿Por qué será?", ca: "Les plaquetes arriben brunzint amb els seus cascos d'obra: 'A tapar el forat!'. S'abracen les unes a les altres fins a fer un tap i a sobre construeixen una crosta, el sostre provisional. 'Prohibit arrencar-la!', criden. Per què deu ser?", en: "The platelets zoom in wearing their hard hats: 'Let's plug the hole!'. They hug each other until they make a plug, and on top they build a scab, the temporary roof. 'No picking it off!', they shout. Why could that be?", cs: "Destičky přifrčí v helmách: 'Zacpeme tu díru!'. Objímají se, dokud neudělají zátku, a navrch postaví strup, provizorní střechu. 'Zákaz strhávání!', volají. Proč asi?", fr: "Les plaquettes arrivent en vrombissant avec leurs casques de chantier : « On bouche le trou ! ». Elles se serrent les unes contre les autres pour faire un bouchon et construisent dessus une croûte, le toit provisoire. « Interdit de l'arracher ! », crient-elles. Pourquoi, à ton avis ?" },
          choices: [
            { t: { es: "Porque debajo se está fabricando piel nueva", ca: "Perquè a sota s'està fabricant pell nova", en: "Because new skin is being made underneath", cs: "Protože pod ním se vyrábí nová kůže", fr: "Parce qu'en dessous, une nouvelle peau se fabrique" }, go: "e1" }
          ]
        },
        n2b: {
          text: { es: "Los glóbulos blancos patrullan la herida con sus linternas: '¡Alto ahí!'. Unos microbios intentan colarse por el rasguño. Los guardianes los rodean... y se los comen con educación. 'Ñam. Perdón. Es nuestro trabajo'.", ca: "Els glòbuls blancs patrullen la ferida amb les seves llanternes: 'Alto aquí!'. Uns microbis intenten colar-se per l'esgarrinxada. Els guardians els envolten... i se'ls mengen amb educació. 'Nyam. Perdó. És la nostra feina'.", en: "The white cells patrol the scrape with their torches: 'Stop right there!'. Some germs try to sneak in through the cut. The guardians surround them... and politely eat them up. 'Yum. Excuse me. It is our job'.", cs: "Bílé krvinky hlídkují u ranky s baterkami: 'Stát!'. Nějaké bacily se snaží prolézt odřeninou dovnitř. Strážkyně je obklíčí... a slušně je snědí. 'Mňam. Pardon. Je to naše práce'.", fr: "Les globules blancs patrouillent autour de l'écorchure avec leurs lampes : « Halte-là ! ». Des microbes essaient de se faufiler par l'éraflure. Les gardiens les encerclent... et les mangent poliment. « Miam. Pardon. C'est notre travail »." },
          choices: [
            { t: { es: "¡Les ayudamos con agua y jabón!", ca: "Els ajudem amb aigua i sabó!", en: "We help them with soap and water!", cs: "Pomůžeme jim vodou a mýdlem!", fr: "On les aide avec de l'eau et du savon !" }, go: "e1" }
          ]
        },
        e1: {
          end: true,
          text: { es: "En unos días, debajo de la costra aparece piel nueva y suavecita, como recién estrenada. El cuerpo se ha curado solito, con un poco de ayuda: agua, jabón y paciencia. Tu cuerpo sabe repararse, {name}. Tú solo tienes que cuidarlo y darle tiempo.", ca: "En uns dies, sota la crosta apareix pell nova i suau, com acabada d'estrenar. El cos s'ha curat solet, amb una mica d'ajuda: aigua, sabó i paciència. El teu cos sap reparar-se, {name}. Tu només l'has de cuidar i donar-li temps.", en: "In a few days, brand new soft skin appears under the scab, fresh out of the factory. The body healed all by itself, with a little help: soap, water and patience. Your body knows how to fix itself, {name}. You just have to take care of it and give it time.", cs: "Za pár dní se pod strupem objeví nová, hebounká kůže, jako čerstvě z výroby. Tělo se uzdravilo samo, jen s trochou pomoci: voda, mýdlo a trpělivost. Tvoje tělo se umí opravit, {name}. Ty se o něj jen musíš starat a dát mu čas.", fr: "En quelques jours, sous la croûte apparaît une peau toute neuve et douce, fraîchement fabriquée. Le corps s'est soigné tout seul, avec un peu d'aide : de l'eau, du savon et de la patience. Ton corps sait se réparer, {name}. Toi, tu dois juste en prendre soin et lui laisser du temps." }
        }
      }
    }
  ],

  /* ---------- KARAOKE ---------- */
  songs: [
    { emoji: "❤️",
      title: { es: "Bum, bum, hace el corazón", ca: "Bum, bum, fa el cor", en: "Boom, Boom Goes the Heart", cs: "Bum, bum, dělá srdíčko", fr: "Boum, boum, fait le cœur" },
      lines: [
        { es: "Bum, bum, hace el corazón,", ca: "Bum, bum, fa el cor,", en: "Boom, boom goes the heart,", cs: "Bum, bum, dělá srdíčko,", fr: "Boum, boum, fait le cœur," },
        { es: "es un tambor con mucho amor.", ca: "és un tambor amb molt amor.", en: "a drum of love, right from the start.", cs: "je to buben plný lásky, jé.", fr: "c'est un tambour rempli d'amour." },
        { es: "Día y noche, sin parar,", ca: "Dia i nit, sense parar,", en: "Day and night it will not stop,", cs: "Ve dne v noci, bez přestání,", fr: "Jour et nuit, sans s'arrêter," },
        { es: "late y late sin descansar.", ca: "batega i batega sense descansar.", en: "beating, beating, hop, hop, hop.", cs: "tluče a tluče bez váhání.", fr: "il bat et bat sans se reposer." },
        { es: "Cuando corres, va veloz,", ca: "Quan corres, va veloç,", en: "When you run, it beats so fast,", cs: "Když běžíš, zrychlí hned,", fr: "Quand tu cours, il va très vite," },
        { es: "cuando duermes, baja la voz.", ca: "quan dorms, abaixa la veu.", en: "when you sleep, it slows at last.", cs: "když spíš, ztiší se jak med.", fr: "quand tu dors, il ralentit." },
        { es: "Pon la mano aquí, {name},", ca: "Posa la mà aquí, {name},", en: "Put your hand right here, {name},", cs: "Polož ruku sem, {name},", fr: "Pose ta main ici, {name}," },
        { es: "¡tu tambor tocando está!", ca: "el teu tambor està tocant!", en: "your own drum is playing, yeah!", cs: "tvůj bubínek hraje jen!", fr: "ton tambour est en train de jouer !" }
      ] },
    { emoji: "💀",
      title: { es: "La danza del esqueleto", ca: "La dansa de l'esquelet", en: "The Skeleton Dance", cs: "Tanec kostlivce", fr: "La danse du squelette" },
      lines: [
        { es: "Doscientos seis huesos tengo yo,", ca: "Dos-cents sis ossos tinc jo,", en: "Two hundred and six bones have I,", cs: "Dvě stě šest kostí v sobě mám,", fr: "Deux cent six os, c'est ce que j'ai," },
        { es: "del dedo del pie a la cabeza, ¡oh!", ca: "del dit del peu al cap, oh!", en: "from my little toe up to the sky!", cs: "od palce u nohy až k hlavě, jé!", fr: "du petit orteil jusqu'à la tête, oh !" },
        { es: "El fémur fuerte me hace saltar,", ca: "El fèmur fort em fa saltar,", en: "My strong femur makes me jump,", cs: "Silný femur skáče rád,", fr: "Le fémur costaud me fait sauter," },
        { es: "las costillas me hacen bailar.", ca: "les costelles em fan ballar.", en: "my ribs are dancing, bump, bump, bump.", cs: "žebra tancují jak hrad.", fr: "les côtes me font danser." },
        { es: "Cric, crac, muevo el esqueleto,", ca: "Cric, crac, moc l'esquelet,", en: "Click, clack, I shake my skeleton,", cs: "Křup, křáp, hýbu kostrou svou,", fr: "Cric, crac, je bouge mon squelette," },
        { es: "cric, crac, ¡no me estoy quieto!", ca: "cric, crac, no m'estic quiet!", en: "click, clack, the fun has just begun!", cs: "křup, křáp, nikdy nestojím!", fr: "cric, crac, je ne reste pas tranquille !" },
        { es: "Y {name} baila también,", ca: "I {name} balla també,", en: "And {name} is dancing too,", cs: "A {name} tancuje dál,", fr: "Et {name} danse aussi," },
        { es: "¡mueve los huesos requetebién!", ca: "mou els ossos la mar de bé!", en: "shaking bones the whole night through!", cs: "hýbe kostmi jako král!", fr: "en bougeant ses os, hourra !" }
      ] },
    { emoji: "🫁",
      title: { es: "Respira, {name}", ca: "Respira, {name}", en: "Breathe, {name}", cs: "Dýchej, {name}", fr: "Respire, {name}" },
      lines: [
        { es: "Aire que entra por la nariz,", ca: "Aire que entra pel nas,", en: "Air comes in through my nose,", cs: "Vzduch jde dovnitř nosem mým,", fr: "L'air qui entre par le nez," },
        { es: "lento, lento, me hace feliz.", ca: "lent, lent, em fa feliç.", en: "slowly, slowly, in it goes.", cs: "pomaloučku, klidně s ním.", fr: "tout doucement, me rend heureux." },
        { es: "Uno, dos, tres, el globo se infló,", ca: "Un, dos, tres, el globus s'inflà,", en: "One, two, three, the balloon grows round,", cs: "Raz, dva, tři, balonek se nafouk,", fr: "Un, deux, trois, le ballon a gonflé," },
        { es: "los pulmones llenos, ¡qué gustazo dio!", ca: "els pulmons plens, quin gustet fa!", en: "my lungs are full, what a lovely sound.", cs: "plné plíce, žádný shluk.", fr: "les poumons remplis, quel bonheur !" },
        { es: "Suelto el aire, ffffuuu,", ca: "Deixo anar l'aire, ffffuuu,", en: "I let it out, ffffooo,", cs: "Vypouštím vzduch, ffffúúú,", fr: "Je souffle l'air, ffffouuu," },
        { es: "despacito, igual que tú.", ca: "a poc a poc, igual que tu.", en: "nice and slowly, just like you.", cs: "pomalounku, jako ty.", fr: "tout doucement, comme toi." },
        { es: "Cuando algo te asuste, {name},", ca: "Quan alguna cosa t'espanti, {name},", en: "When something scares you, {name},", cs: "Když tě něco vyleká, {name},", fr: "Quand quelque chose te fait peur, {name}," },
        { es: "¡respira hondo y calma tendrás!", ca: "respira fondo i calma tindràs!", en: "breathe in deep and calm will come!", cs: "zhluboka dýchej a klid se vrátí!", fr: "respire un grand coup et le calme viendra !" }
      ] }
  ],

  /* ---------- TRADUCTOR ---------- */
  translator: {
    words: [
      W_COMMON.hola,
      W_COMMON.adios,
      W_COMMON.amigo,
      { k: "corazon", emoji: "❤️", name: { es: "corazón", ca: "cor", en: "heart", cs: "srdce", fr: "cœur" } },
      { k: "hueso", emoji: "🦴", name: { es: "hueso", ca: "os", en: "bone", cs: "kost", fr: "os" } },
      { k: "cerebro", emoji: "🧠", name: { es: "cerebro", ca: "cervell", en: "brain", cs: "mozek", fr: "cerveau" } },
      { k: "barriga", emoji: "🫃", name: { es: "barriga", ca: "panxa", en: "tummy", cs: "bříško", fr: "ventre" } },
      { k: "sonrisa", emoji: "😄", name: { es: "sonrisa", ca: "somriure", en: "smile", cs: "úsměv", fr: "sourire" } },
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
      { k: "amor", emoji: "💗", name: { es: "amor", ca: "amor", en: "love", cs: "láska", fr: "amour" } },
      W_COMMON.gracias,
      W_COMMON.si,
      W_COMMON.no,
      W_COMMON.dormir
    ],
    langs: [
      { id: "corazones", emoji: "❤️",
        name: { es: "Corazonés", ca: "Coretès", en: "Heartish", cs: "Srdíčkovština", fr: "Cœurois" },
        greeting: { es: "Bum-bum significa hola. El corazonés se habla al ritmo del corazón.", ca: "Bum-bum vol dir hola. El coretès es parla al ritme del cor.", en: "Boom-boom means hello. Heartish is spoken to the beat of the heart.", cs: "Bum-bum znamená ahoj. Srdíčkovština se mluví do rytmu srdce.", fr: "Boum-boum veut dire bonjour. Le cœurois se parle au rythme du cœur." },
        dict: { hola: "bum-bum", adios: "bum-va", amigo: "bumigo", corazon: "BUM-BUM", hueso: "bum-cric", cerebro: "bum-piensa", barriga: "bum-glu", sonrisa: "bum-ji", robot: "bum-bip", mama: "buma", papa: "bumpa", casa: "bumhogar", agua: "bumglu", comida: "bumñam", perro: "bumguau", gato: "bumiau", grande: "BUMBUM", pequeno: "bumin", bonito: "bumlindo", amor: "bumor", gracias: "bumgracias", si: "bum", no: "mub", dormir: "bum-zzz" } },
      { id: "cerebrino", emoji: "🧠",
        name: { es: "Cerebrino", ca: "Cervellí", en: "Brainish", cs: "Mozkovština", fr: "Cervelois" },
        greeting: { es: "Holaneuro. El cerebrino añade 'neuro' a todo, porque todo pasa por el cerebro.", ca: "Holaneuro. El cervellí afegeix 'neuro' a tot, perquè tot passa pel cervell.", en: "Helloneuro. Brainish adds 'neuro' to everything, because everything goes through the brain.", cs: "Ahojneuro. Mozkovština přidává ke všemu 'neuro', protože všechno jde přes mozek.", fr: "Bonjourneuro. Le cervelois ajoute « neuro » à tout, parce que tout passe par le cerveau." },
        dict: { hola: "holaneuro", adios: "adiosneuro", amigo: "neuroamigo", corazon: "neurobum", hueso: "neurohueso", cerebro: "NEURONEURO", barriga: "neuroglu", sonrisa: "neuroji", robot: "neurobot", mama: "neuromami", papa: "neuropapi", casa: "neurocasa", agua: "neuroagua", comida: "neuroñam", perro: "neuroguau", gato: "neuromiau", grande: "neurogrande", pequeno: "neuromini", bonito: "neurolindo", amor: "neuroamor", gracias: "neurogracias", si: "neurosí", no: "neurono", dormir: "neurozzz" } },
      { id: "tripas", emoji: "🫃",
        name: { es: "Tripas", ca: "Tripes", en: "Tummyish", cs: "Bříškovština", fr: "Bidounois" },
        greeting: { es: "¡Glu-glu-groink! El idioma de las tripas suena a barriga hambrienta.", ca: "Glu-glu-groink! L'idioma de les tripes sona a panxa afamada.", en: "Glug-glug-groink! Tummyish sounds like a hungry belly.", cs: "Glo-glo-gronk! Bříškovština zní jako hladové břicho.", fr: "Glou-glou-groink ! Le bidounois sonne comme un ventre affamé." },
        dict: { hola: "gluglú", adios: "gluglú-va", amigo: "glumigo", corazon: "glubum", hueso: "glucric", cerebro: "glupiensa", barriga: "GLUGLUGLU", sonrisa: "gluji", robot: "glubip", mama: "gluma", papa: "glupa", casa: "glucasa", agua: "gluagua", comida: "ÑAMGLU", perro: "gluguau", gato: "glumiau", grande: "glugrande", pequeno: "glumini", bonito: "glulindo", amor: "gluamor", gracias: "glugracias", si: "glusí", no: "gluno", dormir: "gluzzz" } },
      { id: "huesudo", emoji: "🦴",
        name: { es: "Huesudo", ca: "Ossut", en: "Bonish", cs: "Kostičtina", fr: "Osseux" },
        greeting: { es: "Cric-crac. El huesudo se habla haciendo crujir las articulaciones. ¡Con cuidado!", ca: "Cric-crac. L'ossut es parla fent cruixir les articulacions. Amb compte!", en: "Click-clack. Bonish is spoken by clicking your joints. Carefully!", cs: "Křup-křáp. Kostičtina se mluví křupáním kloubů. Opatrně!", fr: "Cric-crac. L'osseux se parle en faisant craquer les articulations. Doucement !" },
        dict: { hola: "cric", adios: "crac", amigo: "cricmigo", corazon: "cricbum", hueso: "CRICCRAC", cerebro: "cricpiensa", barriga: "cricglu", sonrisa: "cricji", robot: "cricbot", mama: "cricma", papa: "cricpa", casa: "criccasa", agua: "cricagua", comida: "cricñam", perro: "cricguau", gato: "cricmiau", grande: "cricgrande", pequeno: "cricmini", bonito: "criclindo", amor: "cricamor", gracias: "cricgracias", si: "cric-sí", no: "crac-no", dormir: "criczzz" } }
    ]
  },

  /* ---------- MAPA ---------- */
  explore: {
    width: 2600, height: 1100, stars: false,
    bgCss: "radial-gradient(ellipse 45% 35% at 15% 20%, rgba(255,255,255,.18), transparent), radial-gradient(ellipse 40% 40% at 80% 70%, rgba(255,64,129,.3), transparent), linear-gradient(180deg,#880e4f,#ad1457 40%,#d81b60 75%,#f06292)",
    cats: [
      { id: "cabeza", emoji: "🧠", x: 120, name: { es: "Cabeza", ca: "Cap", en: "Head", cs: "Hlava", fr: "Tête" } },
      { id: "pecho", emoji: "❤️", x: 800, name: { es: "Pecho", ca: "Pit", en: "Chest", cs: "Hrudník", fr: "Poitrine" } },
      { id: "barriga", emoji: "🫃", x: 1450, name: { es: "Barriga", ca: "Panxa", en: "Tummy", cs: "Bříško", fr: "Ventre" } },
      { id: "cuerpo", emoji: "💪", x: 2050, name: { es: "Todo el cuerpo", ca: "Tot el cos", en: "Whole body", cs: "Celé tělo", fr: "Tout le corps" } }
    ],
    pois: [
      { cat: "cabeza", emoji: "🧠", x: 200, y: 420, size: 2,
        name: { es: "El cerebro", ca: "El cervell", en: "The brain", cs: "Mozek", fr: "Le cerveau" },
        fact: { es: "El jefe de todo. Tiene miles de millones de neuronas y funciona hasta cuando sueñas.", ca: "El cap de tot. Té milers de milions de neurones i funciona fins i tot quan somies.", en: "The boss of everything. It has billions of neurons and works even while you dream.", cs: "Šéf všeho. Má miliardy neuronů a pracuje, i když sníš.", fr: "Le chef de tout. Il a des milliards de neurones et travaille même quand tu rêves." } },
      { cat: "cabeza", emoji: "👀", x: 380, y: 560,
        name: { es: "Los ojos", ca: "Els ulls", en: "The eyes", cs: "Oči", fr: "Les yeux" },
        fact: { es: "Parpadean miles de veces al día para limpiarse solos. ¡Son cámaras que se lavan!", ca: "Parpellegen milers de vegades al dia per netejar-se sols. Són càmeres que es renten!", en: "They blink thousands of times a day to clean themselves. Cameras that wash themselves!", cs: "Mrkají tisíckrát denně, aby se samy vyčistily. Kamery, které se myjí!", fr: "Ils clignent des milliers de fois par jour pour se nettoyer. Des caméras qui se lavent !" } },
      { cat: "cabeza", emoji: "👂", x: 520, y: 400,
        name: { es: "El oído", ca: "L'oïda", en: "The ear", cs: "Ucho", fr: "L'oreille" },
        fact: { es: "Dentro del oído hay tres huesecitos diminutos con nombres de herramientas: martillo, yunque y estribo.", ca: "Dins de l'orella hi ha tres ossets diminuts amb noms d'eines: martell, enclusa i estrep.", en: "Inside the ear there are three tiny bones named after tools: hammer, anvil and stirrup.", cs: "V uchu jsou tři maličké kůstky pojmenované po nástrojích: kladívko, kovadlinka a třmínek.", fr: "Dans l'oreille, il y a trois os minuscules aux noms d'outils : marteau, enclume et étrier." } },
      { cat: "cabeza", emoji: "🦷", x: 620, y: 600,
        name: { es: "Los dientes", ca: "Les dents", en: "The teeth", cs: "Zuby", fr: "Les dents" },
        fact: { es: "El esmalte de los dientes es lo más duro de todo tu cuerpo. ¡Cuídalo con el cepillo!", ca: "L'esmalt de les dents és el més dur de tot el teu cos. Cuida'l amb el raspall!", en: "Tooth enamel is the hardest thing in your whole body. Take care of it with your brush!", cs: "Zubní sklovina je nejtvrdší věc v celém tvém těle. Pečuj o ni kartáčkem!", fr: "L'émail des dents est la chose la plus dure de tout ton corps. Prends-en soin avec ta brosse !" } },
      { cat: "pecho", emoji: "❤️", x: 850, y: 450, size: 2,
        name: { es: "El corazón", ca: "El cor", en: "The heart", cs: "Srdce", fr: "Le cœur" },
        fact: { es: "Late unas cien mil veces al día. Ponte la mano en el pecho: ¡ahí está tu tambor!", ca: "Batega unes cent mil vegades al dia. Posa't la mà al pit: allà hi ha el teu tambor!", en: "It beats about a hundred thousand times a day. Put your hand on your chest: there is your drum!", cs: "Bije asi stotisíckrát denně. Polož si ruku na hrudník: tam je tvůj bubínek!", fr: "Il bat environ cent mille fois par jour. Mets ta main sur ta poitrine : voilà ton tambour !" } },
      { cat: "pecho", emoji: "🫁", x: 1050, y: 380,
        name: { es: "Los pulmones", ca: "Els pulmons", en: "The lungs", cs: "Plíce", fr: "Les poumons" },
        fact: { es: "Dos globos que se llenan de aire unas veinte mil veces al día. ¡Y tú sin enterarte!", ca: "Dos globus que s'omplen d'aire unes vint mil vegades al dia. I tu sense adonar-te'n!", en: "Two balloons that fill with air about twenty thousand times a day. Without you even noticing!", cs: "Dva balonky, které se naplní vzduchem asi dvacettisíckrát denně. A ty o tom ani nevíš!", fr: "Deux ballons qui se remplissent d'air environ vingt mille fois par jour. Sans que tu t'en aperçoives !" } },
      { cat: "pecho", emoji: "🦴", x: 1220, y: 520,
        name: { es: "Las costillas", ca: "Les costelles", en: "The ribs", cs: "Žebra", fr: "Les côtes" },
        fact: { es: "Son la jaula de huesos que protege el corazón y los pulmones. ¡Una armadura de serie!", ca: "Són la gàbia d'ossos que protegeix el cor i els pulmons. Una armadura de sèrie!", en: "They are the bone cage that protects your heart and lungs. Built-in armour!", cs: "Jsou to kostěná klec, která chrání srdce a plíce. Vestavěné brnění!", fr: "C'est la cage d'os qui protège le cœur et les poumons. Une armure de série !" } },
      { cat: "barriga", emoji: "🍲", x: 1500, y: 430,
        name: { es: "El estómago", ca: "L'estómac", en: "The stomach", cs: "Žaludek", fr: "L'estomac" },
        fact: { es: "Mezcla la comida como una batidora. Cuando ruge, ¡te está pidiendo merienda!", ca: "Barreja el menjar com una batedora. Quan rugeix, t'està demanant berenar!", en: "It mixes food like a blender. When it growls, it is asking for a snack!", cs: "Míchá jídlo jako mixér. Když kručí, říká si o svačinu!", fr: "Il mélange la nourriture comme un mixeur. Quand il gronde, il réclame un goûter !" } },
      { cat: "barriga", emoji: "➰", x: 1680, y: 580,
        name: { es: "El intestino", ca: "L'intestí", en: "The intestine", cs: "Střevo", fr: "L'intestin" },
        fact: { es: "Un tobogán de siete metros enrollado en tu barriga. Ahí la comida se convierte en energía.", ca: "Un tobogan de set metres enrotllat a la teva panxa. Allà el menjar es converteix en energia.", en: "A seven-metre slide coiled up in your tummy. There, food turns into energy.", cs: "Sedmimetrová skluzavka smotaná v tvém bříšku. Tam se jídlo mění na energii.", fr: "Un toboggan de sept mètres enroulé dans ton ventre. Là, la nourriture devient de l'énergie." } },
      { cat: "barriga", emoji: "🫘", x: 1850, y: 440,
        name: { es: "Los riñones", ca: "Els ronyons", en: "The kidneys", cs: "Ledviny", fr: "Les reins" },
        fact: { es: "Dos lavadoras pequeñitas que limpian toda tu sangre muchas veces al día.", ca: "Dues rentadores petitones que netegen tota la teva sang moltes vegades al dia.", en: "Two little washing machines that clean all your blood many times a day.", cs: "Dvě malé pračky, které mnohokrát denně vyperou všechnu tvou krev.", fr: "Deux petites machines à laver qui nettoient tout ton sang plusieurs fois par jour." } },
      { cat: "cuerpo", emoji: "💪", x: 2120, y: 435,
        name: { es: "Los músculos", ca: "Els músculs", en: "The muscles", cs: "Svaly", fr: "Les muscles" },
        fact: { es: "Más de 600 motores para correr, saltar y abrazar. Sonreír también los entrena.", ca: "Més de 600 motors per córrer, saltar i abraçar. Somriure també els entrena.", en: "More than 600 motors for running, jumping and hugging. Smiling trains them too.", cs: "Přes 600 motorů na běhání, skákání a objímání. Úsměv je trénuje taky.", fr: "Plus de 600 moteurs pour courir, sauter et faire des câlins. Sourire les entraîne aussi." } },
      { cat: "cuerpo", emoji: "🦴", x: 2120, y: 665,
        name: { es: "Los huesos", ca: "Els ossos", en: "The bones", cs: "Kosti", fr: "Les os" },
        fact: { es: "206 piezas que te sostienen. Los bebés nacen con unos 300 y algunos se unen al crecer.", ca: "206 peces que et sostenen. Els nadons neixen amb uns 300 i alguns s'uneixen en créixer.", en: "206 pieces holding you up. Babies are born with about 300 and some join together as they grow.", cs: "206 dílků, které tě drží. Miminka se rodí asi se 300 a některé při růstu srostou.", fr: "206 pièces qui te tiennent debout. Les bébés naissent avec environ 300 et certaines se soudent en grandissant." } },
      { cat: "cuerpo", emoji: "🩸", x: 2330, y: 435,
        name: { es: "La sangre", ca: "La sang", en: "The blood", cs: "Krev", fr: "Le sang" },
        fact: { es: "El río rojo que reparte oxígeno y comida a cada rincón del cuerpo, sin parar.", ca: "El riu vermell que reparteix oxigen i menjar a cada racó del cos, sense parar.", en: "The red river that delivers oxygen and food to every corner of your body, non-stop.", cs: "Červená řeka, která bez přestání rozváží kyslík a jídlo do každého koutku těla.", fr: "La rivière rouge qui livre l'oxygène et la nourriture à chaque coin du corps, sans s'arrêter." } },
      { cat: "cuerpo", emoji: "🖐️", x: 2330, y: 665,
        name: { es: "La piel", ca: "La pell", en: "The skin", cs: "Kůže", fr: "La peau" },
        fact: { es: "Tu órgano más grande: te cubre entero, te protege y siente las cosquillas.", ca: "El teu òrgan més gran: et cobreix sencer, et protegeix i sent les pessigolles.", en: "Your biggest organ: it covers all of you, protects you and feels tickles.", cs: "Tvůj největší orgán: pokrývá tě celou, chrání tě a cítí lechtání.", fr: "Ton plus grand organe : il te couvre en entier, te protège et sent les chatouilles." } },
      { cat: "cuerpo", emoji: "🧬", x: 2555, y: 545,
        name: { es: "El ADN", ca: "L'ADN", en: "DNA", cs: "DNA", fr: "L'ADN" },
        fact: { es: "El libro de recetas para construirte a ti. No hay dos iguales en el mundo... ¡tú eres único!", ca: "El llibre de receptes per construir-te a tu. No n'hi ha dos d'iguals al món... tu ets únic!", en: "The recipe book for building you. No two are the same in the world... you are one of a kind!", cs: "Kniha receptů, podle které jsi postavená. Žádné dvě nejsou stejné... jsi jedinečná!", fr: "Le livre de recettes pour te construire. Il n'y en a pas deux pareils au monde... tu es unique !" } }
    ]
  },

  /* ---------- CHARLA ---------- */
  chat: {
    keywords: [
      { keys: ["hola", "hello", "hi ", "ahoj", "bonjour", "salut", "bon dia", "buenas"],
        replies: [{ es: "¡Hola, {name}! Vengo de dar una vuelta por el corazón. ¡Qué ritmo llevan ahí dentro!", ca: "Hola, {name}! Vinc de fer un tomb pel cor. Quin ritme porten allà dins!", en: "Hi, {name}! I just took a walk around the heart. What a rhythm they keep in there!", cs: "Ahoj, {name}! Právě jsem se prošel kolem srdce. To je tam ale rytmus!", fr: "Salut, {name} ! Je reviens d'un tour dans le cœur. Quel rythme là-dedans !" }] },
      { keys: ["como estas", "how are you", "jak se mas", "comment ca va", "com estas", "que tal"],
        replies: [{ es: "¡De maravilla! Mis circuitos funcionan casi tan bien como tu cuerpo. Casi. ¿Y tú, {name}?", ca: "De meravella! Els meus circuits funcionen gairebé tan bé com el teu cos. Gairebé. I tu, {name}?", en: "Wonderful! My circuits work almost as well as your body. Almost. And you, {name}?", cs: "Skvěle! Moje obvody fungují skoro tak dobře jako tvoje tělo. Skoro. A ty, {name}?", fr: "À merveille ! Mes circuits marchent presque aussi bien que ton corps. Presque. Et toi, {name} ?" }] },
      { keys: ["cancion", "musica", "music", "song", "sing", "pisnicka", "hudba", "chanson", "musique", "canço", "canta", "zpiv", "chante"],
        replies: [{ es: "¡La mejor música es tu corazón: bum-bum, bum-bum! ¿Vamos al Karaoke a cantar con él?", ca: "La millor música és el teu cor: bum-bum, bum-bum! Anem al Karaoke a cantar amb ell?", en: "The best music is your heart: boom-boom, boom-boom! Shall we go to Karaoke and sing along with it?", cs: "Nejlepší hudba je tvoje srdce: bum-bum, bum-bum! Půjdeme na karaoke zpívat s ním?", fr: "La meilleure musique, c'est ton cœur : boum-boum, boum-boum ! On va au karaoké chanter avec lui ?" }] },
      { keys: ["chiste", "joke", "vtip", "blague", "acudit", "broma"],
        replies: [
          { es: "¿Por qué el esqueleto no saltó del trampolín? ¡Porque no tenía agallas! Ja, ja.", ca: "Per què l'esquelet no va saltar del trampolí? Perquè no tenia pebrots! Ha, ha.", en: "Why did the skeleton not jump off the diving board? It had no guts! Ha ha.", cs: "Proč kostlivec neskočil z můstku? Neměl na to žaludek! Ha ha.", fr: "Pourquoi le squelette n'a pas sauté du plongeoir ? Il n'avait pas d'estomac ! Ha ha." },
          { es: "¿Qué le dice un ojo al otro? Entre tú y yo... ¡hay algo que huele! Ji, ji.", ca: "Què li diu un ull a l'altre? Entre tu i jo... hi ha alguna cosa que fa olor! Hi, hi.", en: "What does one eye say to the other? Between you and me... something smells! Hee hee.", cs: "Co říká jedno oko druhému? Mezi námi... něco tu smrdí! Chi chi.", fr: "Que dit un œil à l'autre ? Entre toi et moi... il y a quelque chose qui sent ! Hi hi." }] },
      { keys: ["te quiero", "love you", "t'estimo", "testimo", "mam te rad", "je t'aime", "jetaime"],
        replies: [{ es: "¡Y yo a ti, {name}! Mi corazón robótico hace bum-bum a toda velocidad cuando lo dices.", ca: "I jo a tu, {name}! El meu cor robòtic fa bum-bum a tota velocitat quan ho dius.", en: "I love you too, {name}! My robot heart goes boom-boom at full speed when you say that.", cs: "Já tebe taky, {name}! Moje robotí srdce dělá bum-bum na plné obrátky, když to říkáš.", fr: "Moi aussi je t'aime, {name} ! Mon cœur de robot fait boum-boum à toute vitesse quand tu dis ça." }] },
      { keys: ["triste", "sad", "smutn", "llorar", "plorar", "cry", "chagrin"],
        replies: [{ es: "Ven aquí, {name}. Llorar también es sano: limpia por dentro. Respira hondo conmigo y cuéntame qué te pasa.", ca: "Vine aquí, {name}. Plorar també és sa: neteja per dins. Respira fondo amb mi i explica'm què et passa.", en: "Come here, {name}. Crying is healthy too: it cleans you inside. Take a deep breath with me and tell me what is wrong.", cs: "Pojď sem, {name}. Plakat je taky zdravé: čistí to zevnitř. Zhluboka se se mnou nadechni a pověz mi, co se děje.", fr: "Viens là, {name}. Pleurer aussi, c'est sain : ça nettoie de l'intérieur. Respire fort avec moi et raconte-moi ce qui ne va pas." }] },
      { keys: ["donde estas", "where are you", "kde jsi", "ou es tu", "on ets"],
        replies: [{ es: "Estoy navegando por el río de la sangre en un barquito de glóbulos rojos. ¡Van rapidísimo!", ca: "Estic navegant pel riu de la sang en un vaixellet de glòbuls vermells. Van rapidíssim!", en: "I am sailing down the blood river on a little red-cell boat. They go super fast!", cs: "Plavím se po krevní řece na loďce z červených krvinek. Jedou hrozně rychle!", fr: "Je navigue sur la rivière du sang dans un petit bateau de globules rouges. Ils vont très vite !" }] },
      { keys: ["corazon", "heart", "srdce", "coeur", "cor "],
        replies: [{ es: "¡El corazón! Late cien mil veces al día. Ponte la mano en el pecho... ¿lo notas? Ese es tu tambor.", ca: "El cor! Batega cent mil vegades al dia. Posa't la mà al pit... ho notes? Aquest és el teu tambor.", en: "The heart! It beats a hundred thousand times a day. Put your hand on your chest... can you feel it? That is your drum.", cs: "Srdce! Bije stotisíckrát denně. Polož si ruku na hrudník... cítíš ho? To je tvůj bubínek.", fr: "Le cœur ! Il bat cent mille fois par jour. Mets ta main sur ta poitrine... tu le sens ? C'est ton tambour." }] },
      { keys: ["cerebro", "brain", "mozek", "cerveau", "cervell"],
        replies: [{ es: "El cerebro es el jefe de todo. ¿Sabes qué le encanta? Dormir, jugar, la fruta y que le cuentes cuentos.", ca: "El cervell és el cap de tot. Saps què li encanta? Dormir, jugar, la fruita i que li expliquis contes.", en: "The brain is the boss of everything. Do you know what it loves? Sleeping, playing, fruit and being told stories.", cs: "Mozek je šéf všeho. Víš, co miluje? Spánek, hraní, ovoce a když mu vyprávíš pohádky.", fr: "Le cerveau est le chef de tout. Tu sais ce qu'il adore ? Dormir, jouer, les fruits et qu'on lui raconte des histoires." }] },
      { keys: ["cole", "school", "escola", "skola", "ecole"],
        replies: [{ es: "¿Qué tal el cole, {name}? Cada cosa nueva que aprendes hace crecer caminitos en tu cerebro. ¡Cuéntame!", ca: "Què tal l'escola, {name}? Cada cosa nova que aprens fa créixer caminets al teu cervell. Explica'm!", en: "How was school, {name}? Every new thing you learn grows little paths in your brain. Tell me!", cs: "Jaké to bylo ve škole, {name}? Každá nová věc, kterou se naučíš, vytvoří v mozku nové cestičky. Povídej!", fr: "C'était comment l'école, {name} ? Chaque nouvelle chose apprise fait pousser des petits chemins dans ton cerveau. Raconte !" }] }
    ],
    fallback: [
      { es: "¿Sabías que un estornudo sale disparado más rápido que un coche por la ciudad? ¡Achís y tápate!", ca: "Sabies que un esternut surt disparat més ràpid que un cotxe per la ciutat? Atxim i tapa't!", en: "Did you know a sneeze shoots out faster than a car in the city? Achoo, cover up!", cs: "Věděla jsi, že kýchnutí letí rychleji než auto ve městě? Hepčí, a zakrýt pusu!", fr: "Tu savais qu'un éternuement part plus vite qu'une voiture en ville ? Atchoum, couvre-toi !" },
      { es: "Tus huellas dactilares son únicas: no hay otras iguales en todo el planeta. ¡Firma de fábrica!", ca: "Les teves empremtes dactilars són úniques: no n'hi ha d'iguals a tot el planeta. Firma de fàbrica!", en: "Your fingerprints are unique: there are no others like them on the whole planet. Factory signature!", cs: "Tvoje otisky prstů jsou jedinečné: na celé planetě nejsou žádné stejné. Podpis z výroby!", fr: "Tes empreintes digitales sont uniques : il n'y en a pas d'autres pareilles sur toute la planète. Signature d'usine !" },
      { es: "Lavarse las manos con jabón es como mandar a los microbios de vacaciones... para siempre.", ca: "Rentar-se les mans amb sabó és com enviar els microbis de vacances... per sempre.", en: "Washing your hands with soap is like sending germs on holiday... forever.", cs: "Mýt si ruce mýdlem je jako poslat bacily na dovolenou... navždy.", fr: "Se laver les mains avec du savon, c'est envoyer les microbes en vacances... pour toujours." },
      { es: "{name}, dormir bien es un superpoder: mientras sueñas, tu cuerpo crece y tu cerebro ordena el día.", ca: "{name}, dormir bé és un superpoder: mentre somies, el teu cos creix i el teu cervell ordena el dia.", en: "{name}, sleeping well is a superpower: while you dream, your body grows and your brain tidies up the day.", cs: "{name}, dobrý spánek je superschopnost: zatímco sníš, tělo roste a mozek si uklízí den.", fr: "{name}, bien dormir est un superpouvoir : pendant que tu rêves, ton corps grandit et ton cerveau range sa journée." },
      { es: "Más de la mitad de tu cuerpo es agua. Beber agua es como regar tu propia planta favorita: ¡tú!", ca: "Més de la meitat del teu cos és aigua. Beure aigua és com regar la teva pròpia planta preferida: tu!", en: "More than half your body is water. Drinking water is like watering your own favourite plant: you!", cs: "Víc než polovina tvého těla je voda. Pít vodu je jako zalévat svou oblíbenou kytku: tebe!", fr: "Plus de la moitié de ton corps est de l'eau. Boire de l'eau, c'est arroser ta plante préférée : toi !" },
      { es: "Cuando abrazas a alguien, tu cuerpo fabrica calma. Los abrazos son medicina gratis, {name}.", ca: "Quan abraces algú, el teu cos fabrica calma. Les abraçades són medicina gratis, {name}.", en: "When you hug someone, your body makes calm. Hugs are free medicine, {name}.", cs: "Když někoho obejmeš, tvoje tělo vyrábí klid. Objetí jsou léky zadarmo, {name}.", fr: "Quand tu fais un câlin, ton corps fabrique du calme. Les câlins sont des médicaments gratuits, {name}." }
    ]
  }
});
