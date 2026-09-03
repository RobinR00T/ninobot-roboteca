"use strict";
/* ============================================================
   Contenido de TIERRA MEDIA (parte B): historias, canciones,
   traductor, mapa y charla.
   ============================================================ */

Object.assign(THEMES.tierramedia.content, {

  /* ---------- HISTORIAS ---------- */
  stories: [
    {
      id: "anillo", emoji: "💍", start: "n1",
      title: { es: "El anillo perdido", ca: "L'anell perdut", en: "The Lost Ring", cs: "Ztracený prsten", fr: "L'anneau perdu" },
      nodes: {
        n1: {
          text: { es: "Paseando por el bosque, {name}, algo brilla entre las hojas: ¡un anillo dorado precioso! Al cogerlo, notas un cosquilleo raro... y unas letras élficas se encienden en él. ¿Qué hacemos?", ca: "Passejant pel bosc, {name}, alguna cosa brilla entre les fulles: un anell daurat preciós! En agafar-lo, notes un pessigolleig estrany... i unes lletres èlfiques s'hi encenen. Què fem?", en: "Walking through the forest, {name}, something glitters among the leaves: a beautiful golden ring! When you pick it up you feel a strange tingle... and elvish letters light up on it. What do we do?", cs: "Při procházce lesem, {name}, se něco třpytí v listí: nádherný zlatý prsten! Když ho zvedneš, ucítíš zvláštní brnění... a rozsvítí se na něm elfská písmena. Co uděláme?", fr: "En te promenant dans la forêt, {name}, quelque chose brille entre les feuilles : un magnifique anneau doré ! En le prenant, tu sens un drôle de picotement... et des lettres elfiques s'allument dessus. Qu'est-ce qu'on fait ?" },
          choices: [
            { t: { es: "Nos lo quedamos, ¡es muy bonito!", ca: "Ens el quedem, és molt bonic!", en: "We keep it, it is so pretty!", cs: "Necháme si ho, je moc hezký!", fr: "On le garde, il est trop beau !" }, go: "n2a" },
            { t: { es: "Lo llevamos a los elfos de Rivendel", ca: "El portem als elfs de Rivendel", en: "We take it to the elves of Rivendell", cs: "Odneseme ho elfům do Roklinky", fr: "On l'apporte aux elfes de Fondcombe" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "Te lo guardas en el bolsillo... pero el anillo pesa cada vez más, y no dejas de pensar en él. Hasta le has puesto nombre. Un búho sabio os observa desde una rama: 'Uuuh... eso que lleváis no os deja jugar tranquilos, ¿verdad?'.", ca: "Te'l guardes a la butxaca... però l'anell pesa cada cop més, i no deixes de pensar-hi. Fins i tot li has posat nom. Un mussol savi us observa des d'una branca: 'Uuuh... això que porteu no us deixa jugar tranquils, oi?'.", en: "You keep it in your pocket... but the ring gets heavier and heavier, and you cannot stop thinking about it. You even gave it a name. A wise owl watches you from a branch: 'Hooo... that thing you carry does not let you play in peace, does it?'.", cs: "Schováš si ho do kapsy... ale prsten je čím dál těžší a nemůžeš na něj přestat myslet. Dokonce jsi mu dala jméno. Z větve vás pozoruje moudrá sova: 'Húúú... ta věc, co nesete, vám nedá klidně si hrát, viďte?'.", fr: "Tu le gardes dans ta poche... mais l'anneau devient de plus en plus lourd, et tu n'arrêtes pas d'y penser. Tu lui as même donné un nom. Un hibou sage vous observe depuis une branche : « Houuu... cette chose que vous portez ne vous laisse pas jouer tranquilles, pas vrai ? »." },
          choices: [
            { t: { es: "Tiene razón: lo llevamos a Rivendel", ca: "Té raó: el portem a Rivendel", en: "He is right: we take it to Rivendell", cs: "Má pravdu: odneseme ho do Roklinky", fr: "Il a raison : on l'apporte à Fondcombe" }, go: "n3" },
            { t: { es: "Un ratito más... solo un ratito", ca: "Una estoneta més... només una estoneta", en: "A little longer... just a little", cs: "Ještě chvilku... jen chvilinku", fr: "Encore un petit peu... juste un peu" }, go: "n2c" }
          ]
        },
        n2c: {
          text: { es: "Un ratito después, el anillo brilla tanto que ni te deja mirar las nubes ni escuchar los pájaros. Y entonces lo entiendes tú sola: hay cosas bonitas que no te hacen feliz. Se lo dices al búho, que asiente orgulloso.", ca: "Una estoneta després, l'anell brilla tant que ni et deixa mirar els núvols ni escoltar els ocells. I aleshores ho entens tu sola: hi ha coses boniques que no et fan feliç. Li ho dius al mussol, que assenteix orgullós.", en: "A little while later, the ring shines so much it will not even let you watch the clouds or hear the birds. And then you understand it all by yourself: some pretty things do not make you happy. You tell the owl, who nods proudly.", cs: "O chvilku později prsten září tolik, že tě nenechá dívat se na mraky ani poslouchat ptáky. A pak to pochopíš úplně sama: některé krásné věci tě nedělají šťastnou. Řekneš to sově a ta hrdě přikývne.", fr: "Un peu plus tard, l'anneau brille tellement qu'il ne te laisse ni regarder les nuages ni écouter les oiseaux. Et là, tu comprends toute seule : certaines jolies choses ne rendent pas heureux. Tu le dis au hibou, qui hoche la tête, fier de toi." },
          choices: [{ t: { es: "A Rivendel, sin dudarlo", ca: "A Rivendel, sense dubtar-ho", en: "To Rivendell, no doubt about it", cs: "Do Roklinky, bez váhání", fr: "À Fondcombe, sans hésiter" }, go: "n3" }]
        },
        n2b: {
          text: { es: "¡Buena decisión! El camino a Rivendel cruza un río de agua cantarina. En el puente, un poni gris os espera moviendo la cola: parece que quiere acompañaros.", ca: "Bona decisió! El camí a Rivendel creua un riu d'aigua cantaire. Al pont, un poni gris us espera bellugant la cua: sembla que us vol acompanyar.", en: "Good choice! The road to Rivendell crosses a river of singing water. On the bridge, a grey pony waits for you wagging its tail: it seems to want to come along.", cs: "Dobré rozhodnutí! Cesta do Roklinky vede přes řeku se zpívající vodou. Na mostě na vás čeká šedý poník a vrtí ocasem: vypadá, že chce jít s vámi.", fr: "Bonne décision ! Le chemin de Fondcombe traverse une rivière à l'eau chantante. Sur le pont, un poney gris vous attend en remuant la queue : on dirait qu'il veut venir avec vous." },
          choices: [
            { t: { es: "¡Claro que sí, poni! Ven con nosotros", ca: "És clar que sí, poni! Vine amb nosaltres", en: "Of course, pony! Come with us", cs: "Jasně, poníku! Pojď s námi", fr: "Bien sûr, poney ! Viens avec nous" }, go: "n3" }
          ]
        },
        n3: {
          text: { es: "En Rivendel, el señor elfo mira el anillo con una lupa de cristal de luna: 'Ah, ¡por fin! Es el anillo despistado de la abuela elfa Nimloth. Lleva cien años buscándolo'. La abuela llega volando en un cisne gigante, feliz.", ca: "A Rivendel, el senyor elf mira l'anell amb una lupa de cristall de lluna: 'Ah, per fi! És l'anell despistat de l'àvia elfa Nimloth. Fa cent anys que el busca'. L'àvia arriba volant en un cigne gegant, feliç.", en: "In Rivendell, the elf lord looks at the ring through a moon-crystal magnifying glass: 'Ah, at last! It is the absent-minded ring of elf granny Nimloth. She has been looking for it for a hundred years'. Granny arrives flying on a giant swan, overjoyed.", cs: "V Roklince si elfí pán prohlédne prsten lupou z měsíčního krystalu: 'Á, konečně! To je zatoulaný prsten elfí babičky Nimloth. Hledá ho už sto let'. Babička přiletí na obří labuti, celá šťastná.", fr: "À Fondcombe, le seigneur elfe regarde l'anneau avec une loupe en cristal de lune : « Ah, enfin ! C'est l'anneau étourdi de mamie elfe Nimloth. Elle le cherche depuis cent ans ». La mamie arrive en volant sur un cygne géant, ravie." },
          choices: [{ t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e1" }]
        },
        e1: {
          end: true,
          text: { es: "La abuela Nimloth os abraza y os regala a cambio algo mejor que el oro: una cena élfica con pastel de miel y una canción de estrellas solo para vosotros. Devolver lo que no es tuyo brilla más que cualquier anillo, {name}.", ca: "L'àvia Nimloth us abraça i us regala a canvi una cosa millor que l'or: un sopar èlfic amb pastís de mel i una cançó d'estrelles només per a vosaltres. Tornar el que no és teu brilla més que qualsevol anell, {name}.", en: "Granny Nimloth hugs you and gives you something better than gold in return: an elvish dinner with honey cake and a star song just for you. Giving back what is not yours shines brighter than any ring, {name}.", cs: "Babička Nimloth vás obejme a na oplátku vám dá něco lepšího než zlato: elfí večeři s medovým koláčem a hvězdnou písničku jen pro vás. Vrátit, co ti nepatří, září víc než jakýkoli prsten, {name}.", fr: "Mamie Nimloth vous serre dans ses bras et vous offre en échange mieux que de l'or : un dîner elfique avec un gâteau au miel et une chanson d'étoiles rien que pour vous. Rendre ce qui n'est pas à toi brille plus que n'importe quel anneau, {name}." }
        }
      }
    },
    {
      id: "fiesta", emoji: "🎆", start: "n1",
      title: { es: "La fiesta de los hobbits", ca: "La festa dels hòbbits", en: "The Hobbit Party", cs: "Hobití oslava", fr: "La fête des hobbits" },
      nodes: {
        n1: {
          text: { es: "¡Hoy es la gran fiesta de la Comarca, {name}! Nos han encargado una misión importantísima: ayudar a prepararlo todo. ¿Por dónde empezamos?", ca: "Avui és la gran festa de la Comarca, {name}! Ens han encarregat una missió importantíssima: ajudar a preparar-ho tot. Per on comencem?", en: "Today is the great Shire party, {name}! We have been given a super important mission: helping to get everything ready. Where do we start?", cs: "Dnes je velká oslava v Kraji, {name}! Dostali jsme moc důležitý úkol: pomoct všechno připravit. Kde začneme?", fr: "Aujourd'hui, c'est la grande fête de la Comté, {name} ! On nous a confié une mission très importante : aider à tout préparer. Par où on commence ?" },
          choices: [
            { t: { es: "¡Por la tarta gigante!", ca: "Pel pastís gegant!", en: "The giant cake!", cs: "Obřím dortem!", fr: "Par le gâteau géant !" }, go: "n2a" },
            { t: { es: "¡Por los fuegos artificiales de Gandalf!", ca: "Pels focs artificials de Gandalf!", en: "Gandalf's fireworks!", cs: "Gandalfovým ohňostrojem!", fr: "Par les feux d'artifice de Gandalf !" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "La tarta lleva siete pisos, uno por cada comida del día hobbit. Al poner las fresas, el cocinero os propone un acertijo: 'Tengo ciudades, pero sin casas. Bosques, pero sin árboles. Ríos, pero sin agua. ¿Qué soy?'.", ca: "El pastís té set pisos, un per cada àpat del dia hòbbit. En posar les maduixes, el cuiner us proposa una endevinalla: 'Tinc ciutats, però sense cases. Boscos, però sense arbres. Rius, però sense aigua. Què sóc?'.", en: "The cake has seven layers, one for each hobbit meal of the day. While placing the strawberries, the cook gives you a riddle: 'I have cities, but no houses. Forests, but no trees. Rivers, but no water. What am I?'.", cs: "Dort má sedm pater, jedno za každé hobití jídlo dne. Když pokládáte jahody, kuchař vám dá hádanku: 'Mám města, ale žádné domy. Lesy, ale žádné stromy. Řeky, ale žádnou vodu. Co jsem?'.", fr: "Le gâteau a sept étages, un pour chaque repas de la journée hobbit. En posant les fraises, le cuisinier vous pose une devinette : « J'ai des villes, mais sans maisons. Des forêts, mais sans arbres. Des rivières, mais sans eau. Que suis-je ? »." },
          choices: [
            { t: { es: "¡Un mapa!", ca: "Un mapa!", en: "A map!", cs: "Mapa!", fr: "Une carte !" }, go: "n3a" },
            { t: { es: "¡Un libro de cuentos!", ca: "Un llibre de contes!", en: "A storybook!", cs: "Kniha pohádek!", fr: "Un livre d'histoires !" }, go: "n3b" }
          ]
        },
        n2b: {
          text: { es: "Gandalf os deja elegir el fuego artificial final: 'Con cuidado, pequeños ayudantes'. Hay dos cohetes: uno con forma de dragón brillante y otro que llena el cielo de flores de luz.", ca: "Gandalf us deixa triar el foc artificial final: 'Amb compte, petits ajudants'. Hi ha dos coets: un amb forma de drac brillant i un altre que omple el cel de flors de llum.", en: "Gandalf lets you choose the final firework: 'Careful, little helpers'. There are two rockets: one shaped like a shining dragon and one that fills the sky with flowers of light.", cs: "Gandalf vás nechá vybrat závěrečný ohňostroj: 'Opatrně, malí pomocníci'. Jsou tu dvě rakety: jedna ve tvaru zářícího draka a druhá, která naplní nebe světelnými květy.", fr: "Gandalf vous laisse choisir le feu d'artifice final : « Attention, petits assistants ». Il y a deux fusées : une en forme de dragon brillant et une qui remplit le ciel de fleurs de lumière." },
          choices: [
            { t: { es: "¡El dragón brillante!", ca: "El drac brillant!", en: "The shining dragon!", cs: "Zářícího draka!", fr: "Le dragon brillant !" }, go: "n3c" },
            { t: { es: "¡Las flores de luz!", ca: "Les flors de llum!", en: "The flowers of light!", cs: "Světelné květy!", fr: "Les fleurs de lumière !" }, go: "n3c" }
          ]
        },
        n3a: {
          text: { es: "'¡Un mapa! ¡Exacto!', aplaude el cocinero, y de premio os deja lamer la cuchara de la crema. La tarta queda tan bonita que los hobbits le hacen una foto... bueno, un retrato pintado.", ca: "'Un mapa! Exacte!', aplaudeix el cuiner, i de premi us deixa llepar la cullera de la crema. El pastís queda tan bonic que els hòbbits li fan una foto... bé, un retrat pintat.", en: "'A map! Exactly!', claps the cook, and as a prize he lets you lick the cream spoon. The cake turns out so lovely that the hobbits take a photo of it... well, a painted portrait.", cs: "'Mapa! Přesně tak!', tleská kuchař a za odměnu vás nechá olíznout lžíci od krému. Dort je tak krásný, že si ho hobiti vyfotí... tedy, nechají namalovat.", fr: "« Une carte ! Exactement ! », applaudit le cuisinier, et comme récompense il vous laisse lécher la cuillère de crème. Le gâteau est si beau que les hobbits le prennent en photo... enfin, en portrait peint." },
          choices: [{ t: { es: "¡A la fiesta!", ca: "A la festa!", en: "To the party!", cs: "Na oslavu!", fr: "À la fête !" }, go: "e1" }]
        },
        n3b: {
          text: { es: "'Casi', sonríe el cocinero. 'Los libros tienen todo eso dentro, pero la respuesta era un mapa. ¡Otra fresa y otra oportunidad!'. A la segunda, la acertáis juntos: en la Comarca nadie se queda sin premio.", ca: "'Gairebé', somriu el cuiner. 'Els llibres tenen tot això a dins, però la resposta era un mapa. Una altra maduixa i una altra oportunitat!'. A la segona, l'encerteu junts: a la Comarca ningú no es queda sense premi.", en: "'Almost', smiles the cook. 'Books have all that inside, but the answer was a map. Another strawberry and another try!'. On the second go, you get it together: in the Shire nobody goes without a prize.", cs: "'Skoro', usměje se kuchař. 'Knihy to všechno mají uvnitř, ale odpověď byla mapa. Ještě jedna jahoda a ještě jeden pokus!'. Napodruhé to uhodnete spolu: v Kraji nikdo nezůstane bez odměny.", fr: "« Presque », sourit le cuisinier. « Les livres ont tout ça dedans, mais la réponse était une carte. Une autre fraise et un autre essai ! ». Au deuxième coup, vous trouvez ensemble : dans la Comté, personne ne reste sans récompense." },
          choices: [{ t: { es: "¡A la fiesta!", ca: "A la festa!", en: "To the party!", cs: "Na oslavu!", fr: "À la fête !" }, go: "e1" }]
        },
        n3c: {
          text: { es: "¡FIUUU... PUM! El cielo de la Comarca se llena de luz de colores y todos los hobbits gritan '¡ooooh!' a la vez. Gandalf os guiña un ojo: 'El mejor ayudante es el que disfruta ayudando'.", ca: "FIUUU... PUM! El cel de la Comarca s'omple de llum de colors i tots els hòbbits criden 'ooooh!' alhora. Gandalf us pica l'ullet: 'El millor ajudant és el que gaudeix ajudant'.", en: "WHEEE... BOOM! The Shire sky fills with coloured light and all the hobbits go 'ooooh!' at once. Gandalf winks at you: 'The best helper is the one who enjoys helping'.", cs: "FÍÍÍ... BUM! Nebe nad Krajem se naplní barevným světlem a všichni hobiti najednou vydechnou 'óóóó!'. Gandalf na vás mrkne: 'Nejlepší pomocník je ten, koho pomáhání baví'.", fr: "FIOUU... BOUM ! Le ciel de la Comté se remplit de lumières colorées et tous les hobbits crient « ooooh ! » en même temps. Gandalf vous fait un clin d'œil : « Le meilleur assistant est celui qui aime aider »." },
          choices: [{ t: { es: "¡A bailar!", ca: "A ballar!", en: "Let's dance!", cs: "Jdeme tancovat!", fr: "Allons danser !" }, go: "e1" }]
        },
        e1: {
          end: true,
          text: { es: "La fiesta dura hasta que salen las estrellas: tarta de siete pisos, bailes encima de las mesas y hobbits durmiéndose con la barriga llena y una sonrisa. Gracias por ayudar, {name}: las fiestas se disfrutan el doble cuando las has preparado tú.", ca: "La festa dura fins que surten les estrelles: pastís de set pisos, balls sobre les taules i hòbbits adormint-se amb la panxa plena i un somriure. Gràcies per ajudar, {name}: les festes es gaudeixen el doble quan les has preparat tu.", en: "The party lasts until the stars come out: seven-layer cake, dancing on the tables and hobbits falling asleep with full bellies and big smiles. Thanks for helping, {name}: parties are twice as fun when you helped make them.", cs: "Oslava trvá, dokud nevyjdou hvězdy: sedmipatrový dort, tancování na stolech a hobiti usínající s plným bříškem a úsměvem. Díky za pomoc, {name}: oslavy si užiješ dvakrát tolik, když jsi je pomohla připravit.", fr: "La fête dure jusqu'aux étoiles : gâteau à sept étages, danses sur les tables et hobbits qui s'endorment le ventre plein et le sourire aux lèvres. Merci d'avoir aidé, {name} : on profite deux fois plus des fêtes quand on les a préparées soi-même." }
        }
      }
    },
    {
      id: "moria", emoji: "⛰️", start: "n1",
      title: { es: "Las minas de Moria", ca: "Les mines de Mòria", en: "The Mines of Moria", cs: "Doly Morie", fr: "Les mines de la Moria" },
      nodes: {
        n1: {
          text: { es: "Frente a la montaña hay una puerta de piedra con letras brillantes: 'Habla, amigo, y entra'. Mmm... es una adivinanza, {name}. ¿Qué palabra la abre?", ca: "Davant de la muntanya hi ha una porta de pedra amb lletres brillants: 'Parla, amic, i entra'. Mmm... és una endevinalla, {name}. Quina paraula l'obre?", en: "In front of the mountain there is a stone door with glowing letters: 'Speak, friend, and enter'. Hmm... it is a riddle, {name}. Which word opens it?", cs: "Před horou jsou kamenné dveře se zářícími písmeny: 'Řekni, příteli, a vstup'. Hmm... je to hádanka, {name}. Které slovo je otevře?", fr: "Devant la montagne, il y a une porte de pierre aux lettres brillantes : « Parle, ami, et entre ». Hmm... c'est une devinette, {name}. Quel mot l'ouvre ?" },
          choices: [
            { t: { es: "Decir 'amigo'", ca: "Dir 'amic'", en: "Say 'friend'", cs: "Říct 'příteli'", fr: "Dire « ami »" }, go: "n2" },
            { t: { es: "Decir 'por favor'", ca: "Dir 'si us plau'", en: "Say 'please'", cs: "Říct 'prosím'", fr: "Dire « s'il te plaît »" }, go: "n2b" }
          ]
        },
        n2b: {
          text: { es: "La puerta tiembla un poquito, como si le hiciera gracia: 'Qué educación, pequeños. Pero leed otra vez: Habla, AMIGO, y entra'. ¡Ah, claro!", ca: "La porta tremola una miqueta, com si li fes gràcia: 'Quina educació, petits. Però llegiu un altre cop: Parla, AMIC, i entra'. Ah, és clar!", en: "The door trembles a little, as if giggling: 'How polite, little ones. But read again: Speak, FRIEND, and enter'. Oh, of course!", cs: "Dveře se trošku zachvějí, jako by se smály: 'Jak zdvořilé, drobečkové. Ale přečtěte si to znovu: Řekni, PŘÍTELI, a vstup'. No jasně!", fr: "La porte tremble un petit peu, comme si ça l'amusait : « Quelle politesse, petits. Mais relisez : Parle, AMI, et entre ». Ah, bien sûr !" },
          choices: [{ t: { es: "Decir 'amigo'", ca: "Dir 'amic'", en: "Say 'friend'", cs: "Říct 'příteli'", fr: "Dire « ami »" }, go: "n2" }]
        },
        n2: {
          text: { es: "¡La puerta se abre despacio! Dentro, las minas brillan con cristales azules. De pronto, vuestra lámpara se apaga. Se oye un eco lejano: pom... pom... ¿Cómo encontramos el camino?", ca: "La porta s'obre a poc a poc! A dins, les mines brillen amb cristalls blaus. De sobte, la vostra làmpada s'apaga. Se sent un eco llunyà: pom... pom... Com trobem el camí?", en: "The door slowly opens! Inside, the mines sparkle with blue crystals. Suddenly your lamp goes out. A distant echo sounds: pom... pom... How do we find the way?", cs: "Dveře se pomalu otevřou! Uvnitř se doly třpytí modrými krystaly. Najednou vaše lampa zhasne. Ozve se vzdálená ozvěna: pom... pom... Jak najdeme cestu?", fr: "La porte s'ouvre lentement ! À l'intérieur, les mines brillent de cristaux bleus. Soudain, votre lampe s'éteint. On entend un écho lointain : pom... pom... Comment trouver le chemin ?" },
          choices: [
            { t: { es: "Seguimos el eco del pom-pom", ca: "Seguim l'eco del pom-pom", en: "We follow the pom-pom echo", cs: "Jdeme za ozvěnou pom-pom", fr: "On suit l'écho du pom-pom" }, go: "n3a" },
            { t: { es: "Seguimos la brisa que huele a pino", ca: "Seguim la brisa que fa olor de pi", en: "We follow the breeze that smells of pine", cs: "Jdeme za vánkem, který voní borovicí", fr: "On suit la brise qui sent le pin" }, go: "n3b" }
          ]
        },
        n3a: {
          text: { es: "El pom-pom os lleva hasta... ¡una enana minera con un martillo! Se llama Dista y está tallando una estrella de cristal. 'Ah, viajeros perdidos. Mi abuela decía: quien pregunta, llega. ¡Seguidme!'.", ca: "El pom-pom us porta fins a... una nana minera amb un martell! Es diu Dista i està tallant una estrella de cristall. 'Ah, viatgers perduts. La meva àvia deia: qui pregunta, arriba. Seguiu-me!'.", en: "The pom-pom leads you to... a dwarf miner with a hammer! Her name is Dista and she is carving a crystal star. 'Ah, lost travellers. My granny used to say: those who ask, arrive. Follow me!'.", cs: "Pom-pom vás dovede až k... trpaslici s kladívkem! Jmenuje se Dista a právě teše hvězdu z krystalu. 'Á, ztracení poutníci. Moje babička říkala: kdo se ptá, ten dojde. Za mnou!'.", fr: "Le pom-pom vous mène jusqu'à... une naine mineuse avec un marteau ! Elle s'appelle Dista et sculpte une étoile de cristal. « Ah, des voyageurs perdus. Ma grand-mère disait : qui demande, arrive. Suivez-moi ! »." },
          choices: [{ t: { es: "Seguir a Dista", ca: "Seguir la Dista", en: "Follow Dista", cs: "Jít za Distou", fr: "Suivre Dista" }, go: "e1" }]
        },
        n3b: {
          text: { es: "La brisa con olor a pino os guía entre columnas gigantes. Por el camino, los cristales azules se van encendiendo a vuestro paso, como si os acompañaran. Al fondo se ve una lucecita: ¡la salida!... y junto a ella, una enana minera saludando.", ca: "La brisa amb olor de pi us guia entre columnes gegants. Pel camí, els cristalls blaus es van encenent al vostre pas, com si us acompanyessin. Al fons es veu una llumeta: la sortida!... i al costat, una nana minera saludant.", en: "The pine-scented breeze guides you between giant pillars. Along the way, the blue crystals light up as you pass, as if keeping you company. Far ahead there is a little light: the way out!... and next to it, a dwarf miner waving.", cs: "Vánek vonící borovicí vás vede mezi obřími sloupy. Cestou se modré krystaly rozsvěcují, jak procházíte, jako by vás doprovázely. V dálce je vidět světýlko: východ!... a vedle něj mává trpaslice.", fr: "La brise au parfum de pin vous guide entre des colonnes géantes. En chemin, les cristaux bleus s'allument à votre passage, comme pour vous accompagner. Au fond, une petite lumière : la sortie !... et à côté, une naine mineuse qui vous salue." },
          choices: [{ t: { es: "¡Hacia la luz!", ca: "Cap a la llum!", en: "Towards the light!", cs: "Za světlem!", fr: "Vers la lumière !" }, go: "e1" }]
        },
        e1: {
          end: true,
          text: { es: "Salís de la montaña al atardecer, con una estrella de cristal de regalo y una amiga enana nueva. Las minas ya no dan miedo, {name}: la oscuridad solo es un sitio donde aún no has encendido tu luz. Y tú la llevas dentro.", ca: "Sortiu de la muntanya al capvespre, amb una estrella de cristall de regal i una amiga nana nova. Les mines ja no fan por, {name}: la foscor només és un lloc on encara no has encès la teva llum. I tu la portes a dins.", en: "You leave the mountain at sunset, with a crystal star as a gift and a new dwarf friend. The mines are not scary anymore, {name}: darkness is just a place where you have not switched on your light yet. And you carry it inside you.", cs: "Vyjdete z hory za soumraku, s křišťálovou hvězdou jako dárkem a novou trpasličí kamarádkou. Doly už nejsou strašidelné, {name}: tma je jen místo, kde jsi ještě nerozsvítila své světlo. A to nosíš v sobě.", fr: "Vous sortez de la montagne au coucher du soleil, avec une étoile de cristal en cadeau et une nouvelle amie naine. Les mines ne font plus peur, {name} : l'obscurité n'est qu'un endroit où tu n'as pas encore allumé ta lumière. Et tu la portes en toi." }
        }
      }
    }
  ],

  /* ---------- KARAOKE ---------- */
  songs: [
    { emoji: "🥾",
      title: { es: "El camino sigue y sigue", ca: "El camí segueix i segueix", en: "The Road Goes On and On", cs: "Cesta vede dál a dál", fr: "La route continue encore" },
      lines: [
        { es: "El camino sigue y sigue,", ca: "El camí segueix i segueix,", en: "The road goes on and on,", cs: "Cesta vede dál a dál,", fr: "La route continue encore," },
        { es: "desde mi puerta hasta el sol.", ca: "des de la meva porta fins al sol.", en: "from my front door to the sun.", cs: "od mých dveří až ke slunci dál.", fr: "de ma porte jusqu'au soleil." },
        { es: "Con mis botas caminantes,", ca: "Amb les meves botes caminadores,", en: "With my little walking boots,", cs: "V mých toulavých botičkách,", fr: "Avec mes bottes de marcheur," },
        { es: "paso a paso, ¡qué emoción!", ca: "pas a pas, quina emoció!", en: "step by step, oh what fun!", cs: "krok za krokem, žádný strach!", fr: "pas à pas, quelle merveille !" },
        { es: "Cruzaré montañas altas,", ca: "Creuaré muntanyes altes,", en: "I will cross the mountains tall,", cs: "Přejdu hory vysoké,", fr: "Je passerai les hautes montagnes," },
        { es: "y algún río saltarín.", ca: "i algun riu saltador.", en: "and a jumpy river too.", cs: "i řeky poskočné.", fr: "et des rivières sautillantes." },
        { es: "Y si {name} viene conmigo,", ca: "I si {name} ve amb mi,", en: "And if {name} comes along with me,", cs: "A když {name} půjde se mnou,", fr: "Et si {name} vient avec moi," },
        { es: "¡el camino no tiene fin!", ca: "el camí no té fi!", en: "there is nothing we cannot do!", cs: "cesta nikdy neskončí, jé!", fr: "la route n'a pas de fin !" }
      ] },
    { emoji: "🎉",
      title: { es: "La fiesta de la Comarca", ca: "La festa de la Comarca", en: "The Shire Party", cs: "Oslava v Kraji", fr: "La fête de la Comté" },
      lines: [
        { es: "En la Comarca hay fiesta hoy,", ca: "A la Comarca hi ha festa avui,", en: "In the Shire there is a party today,", cs: "V Kraji je dnes oslava,", fr: "Dans la Comté, c'est la fête aujourd'hui," },
        { es: "¡siete comidas me como yo!", ca: "set àpats em menjo jo!", en: "seven meals I eat, hooray!", cs: "sedm jídel, to je zábava!", fr: "sept repas, c'est pour moi !" },
        { es: "Baila el hobbit, baila el enano,", ca: "Balla el hòbbit, balla el nan,", en: "The hobbit dances, the dwarf does too,", cs: "Tančí hobit, tančí trpaslík,", fr: "Le hobbit danse, le nain aussi," },
        { es: "y el elfo canta piano, piano.", ca: "i l'elf canta pla, pla.", en: "and the elf sings soft and true.", cs: "a elf zpívá jako slavík.", fr: "et l'elfe chante tout doucement." },
        { es: "Fuegos de mil colores ya,", ca: "Focs de mil colors ja,", en: "Fireworks of a thousand hues,", cs: "Ohňostroje tisíců barev,", fr: "Des feux de mille couleurs déjà," },
        { es: "Gandalf los hace estallar.", ca: "Gandalf els fa esclatar.", en: "Gandalf lights them, ooohs and woohoos.", cs: "Gandalf pouští je nahoru rád.", fr: "Gandalf les fait éclater." },
        { es: "Y {name} sopla las velas,", ca: "I {name} bufa les espelmes,", en: "And {name} blows the candles out,", cs: "A {name} sfoukne svíčky hned,", fr: "Et {name} souffle les bougies," },
        { es: "¡pide un deseo y a bailar!", ca: "demana un desig i a ballar!", en: "makes a wish and dances about!", cs: "přeje si přání, tancuje svět!", fr: "fait un vœu et danse la vie !" }
      ] },
    { emoji: "🦁",
      title: { es: "Valiente {name}", ca: "Valent {name}", en: "Brave {name}", cs: "Statečná {name}", fr: "Courageux {name}" },
      lines: [
        { es: "No soy grande como un ent,", ca: "No soc gran com un ent,", en: "I am not as tall as an ent,", cs: "Nejsem velká jako ent,", fr: "Je ne suis pas grand comme un ent," },
        { es: "ni tan fuerte como un rey.", ca: "ni tan fort com un rei.", en: "not as strong as any king.", cs: "ani silná jako král.", fr: "ni fort comme un roi." },
        { es: "Pero tengo un corazón,", ca: "Però tinc un cor,", en: "But I have a heart inside,", cs: "Ale srdíčko svoje mám,", fr: "Mais j'ai un cœur," },
        { es: "¡que se atreve con la ley... de la aventura!", ca: "que s'atreveix amb la llei... de l'aventura!", en: "that can dare to do anything!", cs: "co se nebojí jít dál.", fr: "qui ose tout, ma foi !" },
        { es: "Pasos cortos, pasos largos,", ca: "Passos curts, passos llargs,", en: "Little steps and great big strides,", cs: "Krůčky malé, kroky velké,", fr: "Petits pas et grands pas," },
        { es: "todos llevan a algún lugar.", ca: "tots porten a algun lloc.", en: "every one leads somewhere new.", cs: "všechny někam dovedou.", fr: "tous mènent quelque part." },
        { es: "Y si el miedo viene a verme,", ca: "I si la por em ve a veure,", en: "And if fear comes round to see me,", cs: "A když strach mě přijde navštívit,", fr: "Et si la peur vient me voir," },
        { es: "¡de mi mano va a temblar!", ca: "de la meva mà tremolarà!", en: "I will hold my friend's hand too!", cs: "za ruku ho vezmu, bude se divit!", fr: "c'est elle qui va trembler, crois-moi !" }
      ] }
  ],

  /* ---------- TRADUCTOR ---------- */
  translator: {
    words: [
      W_COMMON.hola,
      W_COMMON.adios,
      W_COMMON.amigo,
      { k: "estrella", emoji: "⭐", name: { es: "estrella", ca: "estrella", en: "star", cs: "hvězda", fr: "étoile" } },
      { k: "anillo", emoji: "💍", name: { es: "anillo", ca: "anell", en: "ring", cs: "prsten", fr: "anneau" } },
      { k: "dragon", emoji: "🐉", name: { es: "dragón", ca: "drac", en: "dragon", cs: "drak", fr: "dragon" } },
      { k: "bosque", emoji: "🌳", name: { es: "bosque", ca: "bosc", en: "forest", cs: "les", fr: "forêt" } },
      { k: "espada", emoji: "⚔️", name: { es: "espada", ca: "espasa", en: "sword", cs: "meč", fr: "épée" } },
      W_COMMON.robot,
      W_COMMON.mama,
      W_COMMON.papa,
      W_COMMON.casa,
      W_COMMON.agua,
      W_COMMON.comida,
      W_COMMON.perro,
      W_COMMON.gato,
      { k: "grande", emoji: "🏔️", name: { es: "grande", ca: "gran", en: "big", cs: "velký", fr: "grand" } },
      W_COMMON.pequeno,
      W_COMMON.bonito,
      W_COMMON.amor,
      W_COMMON.gracias,
      W_COMMON.si,
      W_COMMON.no,
      W_COMMON.dormir
    ],
    langs: [
      { id: "elfico", emoji: "🧝",
        name: { es: "Élfico", ca: "Èlfic", en: "Elvish", cs: "Elfština", fr: "Elfique" },
        greeting: { es: "Silmelie... el élfico suena a música de estrellas.", ca: "Silmelie... l'èlfic sona a música d'estrelles.", en: "Silmelie... Elvish sounds like star music.", cs: "Silmelie... elfština zní jako hudba hvězd.", fr: "Silmelie... l'elfique sonne comme une musique d'étoiles." },
        dict: { hola: "silmelie", adios: "namarie-lin", amigo: "meldion", estrella: "silmiel", anillo: "cormiel", dragon: "lokendil", bosque: "taurelin", espada: "megilion", robot: "mekildil", mama: "amilwen", papa: "atarion", casa: "mardelin", agua: "nenniel", comida: "matselie", perro: "huanion", gato: "miuriel", grande: "beleger", pequeno: "titta", bonito: "vanimelda", amor: "melmiel", gracias: "hantale", si: "nai", no: "ui", dormir: "lorelin" } },
      { id: "enano", emoji: "⛏️",
        name: { es: "Enano", ca: "Nan", en: "Dwarvish", cs: "Trpasličtina", fr: "Nain" },
        greeting: { es: "¡Barak-dum! El enano se habla con voz de cueva profunda.", ca: "Barak-dum! El nan es parla amb veu de cova profunda.", en: "Barak-dum! Dwarvish is spoken with a deep cave voice.", cs: "Barak-dum! Trpasličtina se mluví hlubokým jeskynním hlasem.", fr: "Barak-doum ! Le nain se parle avec une voix de grotte profonde." },
        dict: { hola: "barak", adios: "barak-dum", amigo: "khazum", estrella: "zirak", anillo: "gundik", dragon: "urkhas", bosque: "barukwood", espada: "zigilbar", robot: "mekhanum", mama: "mamuk", papa: "papuk", casa: "khazad-hol", agua: "nurul", comida: "ñamdum", perro: "guaruk", gato: "miarak", grande: "gundagrande", pequeno: "kibil", bonito: "zirakzul", amor: "amrak", gracias: "grakum", si: "duk", no: "nuk", dormir: "roncodum" } },
      { id: "hobbit", emoji: "🍄",
        name: { es: "Hobbit", ca: "Hòbbit", en: "Hobbitish", cs: "Hobitština", fr: "Hobbit" },
        greeting: { es: "¡Holañam! En hobbit, casi todas las palabras tienen algo de comida.", ca: "Holanyam! En hòbbit, gairebé totes les paraules tenen alguna cosa de menjar.", en: "Helloyum! In Hobbitish, almost every word has a bit of food in it.", cs: "Ahojmňam! V hobitštině má skoro každé slovo v sobě kousek jídla.", fr: "Bonjourmiam ! En hobbit, presque tous les mots ont un petit goût de nourriture." },
        dict: { hola: "holañam", adios: "adiosete", amigo: "compañam", estrella: "brillipan", anillo: "rosquilla", dragon: "chamuscapan", bosque: "setalandia", espada: "cortaquesos", robot: "cacharrete", mama: "mamipastel", papa: "papibizcocho", casa: "madriguera", agua: "sorbito", comida: "ÑAMÑAM", perro: "guaupán", gato: "miaunata", grande: "tartagrande", pequeno: "miguita", bonito: "dulcecito", amor: "mielecita", gracias: "graciañam", si: "sipastel", no: "nopastel", dormir: "siestuqui" } },
      { id: "entico", emoji: "🌳",
        name: { es: "Éntico", ca: "Èntic", en: "Entish", cs: "Entština", fr: "Entique" },
        greeting: { es: "Buuum... bruuum... el éntico se habla muy despacio, como crecen los árboles.", ca: "Buuum... bruuum... l'èntic es parla molt a poc a poc, com creixen els arbres.", en: "Booom... brooom... Entish is spoken very slowly, the way trees grow.", cs: "Búúúm... brúúúm... entština se mluví hodně pomalu, jako rostou stromy.", fr: "Bouuum... brouuum... l'entique se parle très lentement, comme poussent les arbres." },
        dict: { hola: "buum-baram", adios: "buum-baram-buum", amigo: "ramamiga", estrella: "lucecopa", anillo: "nudodorado", dragon: "quemarramas", bosque: "BUUUM-TAURUM", espada: "cortarrama-no", robot: "metalillo-rapidillo", mama: "raizmadre", papa: "troncopadre", casa: "coparaices", agua: "savia-savia", comida: "solycllluvia", perro: "ladra-ladra", gato: "trepacopas", grande: "buuumgrande", pequeno: "brotecito", bonito: "floooorido", amor: "raizhonda", gracias: "graciarbol", si: "buum-si", no: "buum-no", dormir: "invernar" } }
    ]
  },

  /* ---------- MAPA ---------- */
  explore: {
    width: 4200, height: 1100, stars: false,
    bgCss: "radial-gradient(ellipse 40% 30% at 15% 12%, rgba(255,241,118,.45), transparent), linear-gradient(180deg,#90caf9 0%,#a5d6a7 24%,#558b2f 55%,#4e342e 82%,#37474f 100%)",
    cats: [
      { id: "comarca", emoji: "🏡", x: 120, name: { es: "La Comarca", ca: "La Comarca", en: "The Shire", cs: "Kraj", fr: "La Comté" } },
      { id: "montanas", emoji: "🏔️", x: 1120, name: { es: "Montañas", ca: "Muntanyes", en: "Mountains", cs: "Hory", fr: "Montagnes" } },
      { id: "reinos", emoji: "🏰", x: 2430, name: { es: "Reinos", ca: "Regnes", en: "Kingdoms", cs: "Království", fr: "Royaumes" } },
      { id: "oscuras", emoji: "🌋", x: 3470, name: { es: "Tierras oscuras", ca: "Terres fosques", en: "Dark lands", cs: "Temné země", fr: "Terres sombres" } }
    ],
    pois: [
      { cat: "comarca", emoji: "🏡", x: 240, y: 600, size: 2,
        name: { es: "La Comarca", ca: "La Comarca", en: "The Shire", cs: "Kraj", fr: "La Comté" },
        fact: { es: "El hogar de los hobbits: casitas redondas, jardines y siete comidas al día.", ca: "La llar dels hòbbits: casetes rodones, jardins i set àpats al dia.", en: "The home of the hobbits: round little houses, gardens and seven meals a day.", cs: "Domov hobitů: kulaté domečky, zahrady a sedm jídel denně.", fr: "Le foyer des hobbits : petites maisons rondes, jardins et sept repas par jour." } },
      { cat: "comarca", emoji: "🐴", x: 740, y: 560,
        name: { es: "La posada del Poni", ca: "La posada del Poni", en: "The Pony Inn", cs: "Hostinec U Poníka", fr: "L'auberge du Poney" },
        fact: { es: "Una posada calentita donde los viajeros cuentan historias junto al fuego.", ca: "Una posada calentona on els viatgers expliquen històries vora el foc.", en: "A cosy inn where travellers tell stories by the fire.", cs: "Útulný hostinec, kde si poutníci vyprávějí příběhy u ohně.", fr: "Une auberge bien chaude où les voyageurs racontent des histoires près du feu." } },
      { cat: "comarca", emoji: "🌳", x: 990, y: 770,
        name: { es: "El Bosque Viejo", ca: "El Bosc Vell", en: "The Old Forest", cs: "Starý hvozd", fr: "La Vieille Forêt" },
        fact: { es: "Un bosque tan antiguo que los árboles susurran entre ellos. Saluda al pasar: les gusta.", ca: "Un bosc tan antic que els arbres xiuxiuegen entre ells. Saluda en passar: els agrada.", en: "A forest so old that the trees whisper to each other. Say hello as you pass: they like it.", cs: "Les tak starý, že si stromy mezi sebou šeptají. Pozdrav je, když jdeš kolem: mají to rády.", fr: "Une forêt si ancienne que les arbres chuchotent entre eux. Dis bonjour en passant : ils aiment ça." } },
      { cat: "montanas", emoji: "🏞️", x: 1500, y: 850, size: 2,
        name: { es: "Rivendel", ca: "Rivendel", en: "Rivendell", cs: "Roklinka", fr: "Fondcombe" },
        fact: { es: "La casa de los elfos entre cascadas. Quien llega cansado, aquí descansa y sana.", ca: "La casa dels elfs entre cascades. Qui arriba cansat, aquí descansa i es cura.", en: "The elves' home among waterfalls. Whoever arrives tired, rests and heals here.", cs: "Domov elfů mezi vodopády. Kdo dorazí unavený, tady si odpočine a uzdraví se.", fr: "La maison des elfes entre les cascades. Qui arrive fatigué s'y repose et guérit." } },
      { cat: "montanas", emoji: "⛰️", x: 1760, y: 620,
        name: { es: "Moria", ca: "Mòria", en: "Moria", cs: "Morie", fr: "La Moria" },
        fact: { es: "Las minas gigantes de los enanos. Su puerta se abre diciendo 'amigo' en élfico.", ca: "Les mines gegants dels nans. La seva porta s'obre dient 'amic' en èlfic.", en: "The giant mines of the dwarves. Their door opens when you say 'friend' in Elvish.", cs: "Obří doly trpaslíků. Jejich dveře se otevřou, když řekneš elfsky 'příteli'.", fr: "Les mines géantes des nains. Leur porte s'ouvre quand on dit « ami » en elfique." } },
      { cat: "montanas", emoji: "🦅", x: 2290, y: 250,
        name: { es: "Las Águilas", ca: "Les Àguiles", en: "The Eagles", cs: "Orli", fr: "Les Aigles" },
        fact: { es: "Águilas gigantes que rescatan héroes justo a tiempo. Siempre justo a tiempo.", ca: "Àguiles gegants que rescaten herois just a temps. Sempre just a temps.", en: "Giant eagles that rescue heroes just in time. Always just in time.", cs: "Obří orli, kteří zachraňují hrdiny přesně včas. Vždycky přesně včas.", fr: "Des aigles géants qui sauvent les héros juste à temps. Toujours juste à temps." } },
      { cat: "reinos", emoji: "🌟", x: 2810, y: 480, size: 2,
        name: { es: "Lothlórien", ca: "Lothlórien", en: "Lothlórien", cs: "Lothlórien", fr: "Lothlórien" },
        fact: { es: "El bosque dorado de Galadriel. Sus hojas brillan como si guardaran luz de estrellas.", ca: "El bosc daurat de Galadriel. Les seves fulles brillen com si guardessin llum d'estrelles.", en: "Galadriel's golden forest. Its leaves shine as if they kept starlight inside.", cs: "Zlatý les Galadriel. Jeho listy září, jako by v sobě uchovávaly světlo hvězd.", fr: "La forêt dorée de Galadriel. Ses feuilles brillent comme si elles gardaient la lumière des étoiles." } },
      { cat: "reinos", emoji: "🐎", x: 3070, y: 740,
        name: { es: "Rohan", ca: "Rohan", en: "Rohan", cs: "Rohan", fr: "Le Rohan" },
        fact: { es: "El reino de los jinetes. Sus caballos son los más rápidos y fieles de la Tierra Media.", ca: "El regne dels genets. Els seus cavalls són els més ràpids i fidels de la Terra Mitjana.", en: "The kingdom of the riders. Their horses are the fastest and most loyal in Middle-earth.", cs: "Království jezdců. Jejich koně jsou nejrychlejší a nejvěrnější ve Středozemi.", fr: "Le royaume des cavaliers. Leurs chevaux sont les plus rapides et fidèles de la Terre du Milieu." } },
      { cat: "reinos", emoji: "🏰", x: 3330, y: 500,
        name: { es: "Gondor", ca: "Gondor", en: "Gondor", cs: "Gondor", fr: "Le Gondor" },
        fact: { es: "La ciudad blanca de siete pisos, tallada en la montaña. Ahí vive el rey Aragorn.", ca: "La ciutat blanca de set pisos, tallada a la muntanya. Allà hi viu el rei Aragorn.", en: "The white city of seven levels, carved into the mountain. King Aragorn lives there.", cs: "Bílé město o sedmi patrech, vytesané do hory. Bydlí tam král Aragorn.", fr: "La cité blanche à sept étages, taillée dans la montagne. Le roi Aragorn y habite." } },
      { cat: "oscuras", emoji: "🗼", x: 3590, y: 730,
        name: { es: "Isengard", ca: "Isengard", en: "Isengard", cs: "Isengard", fr: "Isengard" },
        fact: { es: "La torre del mago que eligió mal. Los ents, pastores de árboles, la llenaron de jardines otra vez.", ca: "La torre del mag que va triar malament. Els ents, pastors d'arbres, la van omplir de jardins un altre cop.", en: "The tower of the wizard who chose badly. The ents, the tree shepherds, filled it with gardens again.", cs: "Věž čaroděje, který si vybral špatně. Enti, pastýři stromů, ji znovu naplnili zahradami.", fr: "La tour du magicien qui a mal choisi. Les ents, bergers des arbres, l'ont remplie de jardins à nouveau." } },
      { cat: "oscuras", emoji: "🌋", x: 3840, y: 460, size: 2,
        name: { es: "Mordor", ca: "Mordor", en: "Mordor", cs: "Mordor", fr: "Le Mordor" },
        fact: { es: "Un lugar oscuro que los héroes fueron a salvar. Hoy vuelven a crecer flores allí, despacito.", ca: "Un lloc fosc que els herois van anar a salvar. Avui hi tornen a créixer flors, a poc a poc.", en: "A dark place that the heroes went to save. Today flowers grow there again, slowly.", cs: "Temné místo, které se hrdinové vydali zachránit. Dnes tam znovu pomalu rostou květiny.", fr: "Un endroit sombre que les héros sont allés sauver. Aujourd'hui, les fleurs y repoussent, doucement." } },
      { cat: "oscuras", emoji: "🔥", x: 4080, y: 740,
        name: { es: "El Monte del Destino", ca: "El Mont del Destí", en: "Mount Doom", cs: "Hora osudu", fr: "La Montagne du Destin" },
        fact: { es: "El volcán donde acabó el anillo. Frodo llegó hasta aquí paso a paso, con Sam a su lado.", ca: "El volcà on va acabar l'anell. Frodo va arribar fins aquí pas a pas, amb Sam al seu costat.", en: "The volcano where the ring ended up. Frodo made it here step by step, with Sam by his side.", cs: "Sopka, kde skončil prsten. Frodo sem došel krok za krokem, se Samem po boku.", fr: "Le volcan où l'anneau a fini. Frodon est arrivé ici pas à pas, avec Sam à ses côtés." } }
    ]
  },

  /* ---------- CHARLA ---------- */
  chat: {
    keywords: [
      { keys: ["hola", "hello", "hi ", "ahoj", "bonjour", "salut", "bon dia", "buenas"],
        replies: [{ es: "¡Mae govannen, {name}! Así saludan los elfos. Significa: qué alegría encontrarte.", ca: "Mae govannen, {name}! Així saluden els elfs. Vol dir: quina alegria trobar-te.", en: "Mae govannen, {name}! That is how the elves say hello. It means: what a joy to meet you.", cs: "Mae govannen, {name}! Tak zdraví elfové. Znamená to: jaká radost tě potkat.", fr: "Mae govannen, {name} ! C'est comme ça que saluent les elfes. Ça veut dire : quelle joie de te rencontrer." }] },
      { keys: ["como estas", "how are you", "jak se mas", "comment ca va", "com estas", "que tal"],
        replies: [{ es: "¡Feliz como un hobbit en su segundo desayuno! ¿Y tú qué tal, {name}?", ca: "Feliç com un hòbbit al seu segon esmorzar! I tu què tal, {name}?", en: "Happy as a hobbit at second breakfast! And how are you, {name}?", cs: "Šťastný jako hobit u druhé snídaně! A jak se máš ty, {name}?", fr: "Heureux comme un hobbit à son deuxième petit-déjeuner ! Et toi, {name} ?" }] },
      { keys: ["cancion", "musica", "music", "song", "sing", "pisnicka", "hudba", "chanson", "musique", "canço", "canta", "zpiv", "chante"],
        replies: [{ es: "¡Los elfos me enseñaron a cantar! Mi favorita es 'El camino sigue y sigue'. ¿Vamos al Karaoke a cantarla juntos?", ca: "Els elfs em van ensenyar a cantar! La meva preferida és 'El camí segueix i segueix'. Anem al Karaoke a cantar-la junts?", en: "The elves taught me to sing! My favourite is 'The Road Goes On and On'. Shall we sing it together at Karaoke?", cs: "Elfové mě naučili zpívat! Moje oblíbená je 'Cesta vede dál a dál'. Zazpíváme si ji spolu na karaoke?", fr: "Les elfes m'ont appris à chanter ! Ma préférée, c'est « La route continue encore ». On va la chanter ensemble au karaoké ?" }] },
      { keys: ["chiste", "joke", "vtip", "blague", "acudit", "broma"],
        replies: [
          { es: "¿Por qué los hobbits comen siete veces al día? ¡Porque con los pies tan peludos no pueden correr a por más! Ja, ja.", ca: "Per què els hòbbits mengen set vegades al dia? Perquè amb els peus tan peluts no poden córrer a buscar-ne més! Ha, ha.", en: "Why do hobbits eat seven times a day? Because with those hairy feet they cannot run for more! Ha ha.", cs: "Proč hobiti jedí sedmkrát denně? Protože s těma chlupatýma nohama si nemůžou doběhnout pro víc! Ha ha.", fr: "Pourquoi les hobbits mangent sept fois par jour ? Parce qu'avec leurs pieds poilus, ils ne peuvent pas courir en chercher plus ! Ha ha." },
          { es: "¿Qué le dice un ent a otro ent? ...Espera, aún está pensando la primera palabra. Ji, ji.", ca: "Què li diu un ent a un altre ent? ...Espera, encara està pensant la primera paraula. Hi, hi.", en: "What does one ent say to another ent? ...Wait, he is still thinking of the first word. Hee hee.", cs: "Co říká jeden ent druhému? ...Počkej, ještě vymýšlí první slovo. Chi chi.", fr: "Que dit un ent à un autre ent ? ...Attends, il réfléchit encore au premier mot. Hi hi." }] },
      { keys: ["te quiero", "love you", "t'estimo", "testimo", "mam te rad", "je t'aime", "jetaime"],
        replies: [{ es: "¡Y yo a ti, {name}! Te quiero de aquí a Mordor... ida y vuelta, que es muchísimo más lejos.", ca: "I jo a tu, {name}! T'estimo d'aquí a Mordor... anada i tornada, que és moltíssim més lluny.", en: "I love you too, {name}! From here to Mordor... there and back again, which is much much farther.", cs: "Já tebe taky, {name}! Mám tě rád odsud až do Mordoru... tam a zase zpátky, což je mnohem dál.", fr: "Moi aussi je t'aime, {name} ! D'ici jusqu'au Mordor... aller-retour, ce qui est bien plus loin." }] },
      { keys: ["triste", "sad", "smutn", "llorar", "plorar", "cry", "chagrin"],
        replies: [{ es: "Ven aquí, {name}. Como dice Sam: siempre hay algo bueno en este mundo. Cuéntame qué te pasa y lo buscamos juntos.", ca: "Vine aquí, {name}. Com diu en Sam: sempre hi ha alguna cosa bona en aquest món. Explica'm què et passa i la busquem junts.", en: "Come here, {name}. Like Sam says: there is always some good in this world. Tell me what is wrong and we will find it together.", cs: "Pojď sem, {name}. Jak říká Sam: na světě je vždycky něco dobrého. Pověz mi, co se děje, a najdeme to spolu.", fr: "Viens là, {name}. Comme dit Sam : il y a toujours quelque chose de bon en ce monde. Raconte-moi ce qui ne va pas et on le cherchera ensemble." }] },
      { keys: ["donde estas", "where are you", "kde jsi", "ou es tu", "on ets"],
        replies: [{ es: "Estoy merendando en Rivendel con los elfos. Me han puesto una coronita de flores. No se lo digas a nadie.", ca: "Estic berenant a Rivendel amb els elfs. M'han posat una coroneta de flors. No ho diguis a ningú.", en: "I am having tea in Rivendell with the elves. They put a little flower crown on me. Do not tell anyone.", cs: "Svačím v Roklince s elfy. Nasadili mi korunku z kytiček. Nikomu to neříkej.", fr: "Je goûte à Fondcombe avec les elfes. Ils m'ont mis une petite couronne de fleurs. Ne le dis à personne." }] },
      { keys: ["gandalf", "mago", "wizard", "carodej", "magicien", "mag "],
        replies: [{ es: "¡Gandalf! Sus fuegos artificiales son los mejores de la Tierra Media. Y recuerda lo que dice: hasta la persona más pequeña puede cambiar el mundo.", ca: "Gandalf! Els seus focs artificials són els millors de la Terra Mitjana. I recorda el que diu: fins i tot la persona més petita pot canviar el món.", en: "Gandalf! His fireworks are the best in Middle-earth. And remember what he says: even the smallest person can change the world.", cs: "Gandalf! Jeho ohňostroje jsou nejlepší ve Středozemi. A pamatuj, co říká: i ten nejmenší může změnit svět.", fr: "Gandalf ! Ses feux d'artifice sont les meilleurs de la Terre du Milieu. Et souviens-toi de ce qu'il dit : même la plus petite personne peut changer le monde." }] },
      { keys: ["hobbit", "comarca", "shire", "kraj ", "comte"],
        replies: [{ es: "Los hobbits hacen siete comidas al día y aun así corren aventuras enormes. Mi tipo de héroes: valientes y bien merendados.", ca: "Els hòbbits fan set àpats al dia i tot i així corren aventures enormes. El meu tipus d'herois: valents i ben berenats.", en: "Hobbits eat seven meals a day and still go on enormous adventures. My kind of heroes: brave and well-snacked.", cs: "Hobiti jedí sedmkrát denně, a přesto zažívají obrovská dobrodružství. Moji oblíbení hrdinové: stateční a dobře nasvačení.", fr: "Les hobbits font sept repas par jour et vivent quand même d'énormes aventures. Mon genre de héros : courageux et bien goûtés." }] },
      { keys: ["cole", "school", "escola", "skola", "ecole"],
        replies: [{ es: "¿Qué tal el cole, {name}? Hasta Gandalf estudió siglos para ser mago. ¡Cuéntame qué has aprendido hoy!", ca: "Què tal l'escola, {name}? Fins i tot Gandalf va estudiar segles per ser mag. Explica'm què has après avui!", en: "How was school, {name}? Even Gandalf studied for centuries to become a wizard. Tell me what you learned today!", cs: "Jaké to bylo ve škole, {name}? I Gandalf studoval staletí, aby se stal čarodějem. Pověz mi, co ses dnes naučila!", fr: "C'était comment l'école, {name} ? Même Gandalf a étudié des siècles pour devenir magicien. Raconte-moi ce que tu as appris !" }] }
    ],
    fallback: [
      { es: "¿Sabías que los elfos no roncan? Duermen con los ojos medio abiertos, mirando las estrellas.", ca: "Sabies que els elfs no ronquen? Dormen amb els ulls mig oberts, mirant les estrelles.", en: "Did you know elves do not snore? They sleep with their eyes half open, watching the stars.", cs: "Věděla jsi, že elfové nechrápou? Spí s pootevřenýma očima a dívají se na hvězdy.", fr: "Tu savais que les elfes ne ronflent pas ? Ils dorment les yeux mi-ouverts, en regardant les étoiles." },
      { es: "Los ents tardan horas en decir buenos días. Para ellos, las cosas buenas merecen tiempo.", ca: "Els ents triguen hores a dir bon dia. Per a ells, les coses bones mereixen temps.", en: "Ents take hours to say good morning. To them, good things deserve time.", cs: "Entům trvá hodiny říct dobré ráno. Dobré věci si podle nich zaslouží čas.", fr: "Les ents mettent des heures à dire bonjour. Pour eux, les bonnes choses méritent du temps." },
      { es: "La luz siempre vence a la oscuridad, {name}. Nunca olvides eso.", ca: "La llum sempre venç la foscor, {name}. No ho oblidis mai.", en: "Light always wins over darkness, {name}. Never forget that.", cs: "Světlo vždycky zvítězí nad tmou, {name}. Nikdy na to nezapomeň.", fr: "La lumière gagne toujours sur l'obscurité, {name}. Ne l'oublie jamais." },
      { es: "Hasta los pasos pequeños pueden cambiar el mundo. Frodo era el más pequeño de todos.", ca: "Fins i tot els passos petits poden canviar el món. Frodo era el més petit de tots.", en: "Even little steps can change the world. Frodo was the smallest of them all.", cs: "I malé kroky mohou změnit svět. Frodo byl ze všech nejmenší.", fr: "Même les petits pas peuvent changer le monde. Frodon était le plus petit de tous." },
      { es: "El coraje, la amistad y la esperanza son más fuertes que cualquier miedo, {name}.", ca: "El coratge, l'amistat i l'esperança són més forts que qualsevol por, {name}.", en: "Courage, friendship and hope are stronger than any fear, {name}.", cs: "Odvaha, přátelství a naděje jsou silnější než jakýkoli strach, {name}.", fr: "Le courage, l'amitié et l'espoir sont plus forts que n'importe quelle peur, {name}." },
      { es: "¿Segundo desayuno? Los hobbits dicen que sí a casi todo si lleva mermelada.", ca: "Segon esmorzar? Els hòbbits diuen que sí a gairebé tot si porta melmelada.", en: "Second breakfast? Hobbits say yes to almost anything with jam on it.", cs: "Druhá snídaně? Hobiti řeknou ano skoro na všechno, co je s marmeládou.", fr: "Deuxième petit-déjeuner ? Les hobbits disent oui à presque tout ce qui a de la confiture." }
    ]
  }
});
