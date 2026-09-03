"use strict";
/* ============================================================
   Contenido de FRUTAS Y HORTALIZAS (parte B): historias
   ramificadas, canciones, traductor, mapa de exploración,
   charla, tarjeta de portada y celebración del taller.
   ============================================================ */

Object.assign(THEMES.frutas.content, {

  /* ---------- HISTORIAS (ramifican de verdad) ---------- */
  stories: [
    {
      id: "tomate", emoji: "🍅", start: "n1",
      title: { es: "El tomate que quería ser verdura", ca: "El tomàquet que volia ser verdura", en: "The Tomato Who Wanted to Be a Veggie", cs: "Rajče, které chtělo být zeleninou", fr: "La tomate qui voulait être un légume" },
      nodes: {
        n1: {
          text: { es: "En el huerto hay lío, {name}. El tomate Renato llora: las verduras dicen que es fruta y las frutas dicen que vive con las verduras. ¡No sabe de qué equipo es! ¿Cómo lo ayudamos?", ca: "A l'hort hi ha embolic, {name}. El tomàquet Renato plora: les verdures diuen que és fruita i les fruites diuen que viu amb les verdures. No sap de quin equip és! Com l'ajudem?", en: "There is a muddle in the garden, {name}. Renato the tomato is crying: the veggies say he is a fruit and the fruits say he lives with the veggies. He does not know which team he is on! How do we help him?", cs: "Na zahrádce je zmatek, {name}. Rajče Renato pláče: zelenina říká, že je ovoce, a ovoce říká, že bydlí u zeleniny. Neví, do kterého týmu patří! Jak mu pomůžeme?", fr: "Il y a de la pagaille au potager, {name}. Renato la tomate pleure : les légumes disent que c'est un fruit et les fruits disent qu'il habite chez les légumes. Il ne sait plus de quelle équipe il est ! Comment on l'aide ?" },
          choices: [
            { t: { es: "Preguntamos al manzano sabio", ca: "Preguntem a la pomera sàvia", en: "Let's ask the wise apple tree", cs: "Zeptáme se moudré jabloně", fr: "Demandons au pommier sage" }, go: "n2a" },
            { t: { es: "Vamos al mercado a investigar", ca: "Anem al mercat a investigar", en: "Let's investigate at the market", cs: "Jdeme pátrat na trh", fr: "Allons enquêter au marché" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "El manzano sabio acaricia a Renato con una hoja: 'Naciste de una flor y llevas tus semillas dentro, como yo. Para la ciencia eres fruta, pequeño'. Renato abre mucho los ojos.", ca: "La pomera sàvia acarona en Renato amb una fulla: 'Vas néixer d'una flor i portes les llavors a dins, com jo. Per a la ciència ets fruita, petit'. En Renato obre molt els ulls.", en: "The wise apple tree strokes Renato with a leaf: 'You were born from a flower and you carry your seeds inside, just like me. For science you are a fruit, little one'. Renato's eyes grow wide.", cs: "Moudrá jabloň pohladí Renata lístkem: 'Narodil ses z květu a semínka nosíš uvnitř, stejně jako já. Pro vědu jsi ovoce, maličký'. Renato vykulí oči.", fr: "Le pommier sage caresse Renato avec une feuille : « Tu es né d'une fleur et tu portes tes graines dedans, comme moi. Pour la science, tu es un fruit, petit ». Renato ouvre de grands yeux." },
          choices: [
            { t: { es: "¿Y por qué vivo en el huerto?", ca: "I per què visc a l'hort?", en: "Then why do I live in the garden?", cs: "A proč tedy bydlím na zahrádce?", fr: "Alors pourquoi j'habite au potager ?" }, go: "n3a" },
            { t: { es: "¡Chsss! Alguien se esconde detrás", ca: "Xsss! Algú s'amaga darrere", en: "Shhh! Someone is hiding behind", cs: "Pssst! Někdo se schovává vzadu", fr: "Chut ! Quelqu'un se cache derrière" }, go: "n3c" }
          ]
        },
        n2b: {
          text: { es: "En el mercado, la frutera coloca a Renato... ¡en la parada de las verduras, entre lechugas! 'Aquí te buscan todos para la ensalada', sonríe. Renato no entiende nada de nada.", ca: "Al mercat, la fruitera col·loca en Renato... a la parada de les verdures, entre enciams! 'Aquí et busca tothom per a l'amanida', somriu. En Renato no entén res de res.", en: "At the market, the fruit seller places Renato... on the veggie stall, between the lettuces! 'This is where everyone looks for you for their salad', she smiles. Renato is more confused than ever.", cs: "Na trhu položí prodavačka Renata... na pult se zeleninou, mezi saláty! 'Tady tě všichni hledají do salátu', usměje se. Renato už nerozumí vůbec ničemu.", fr: "Au marché, la marchande place Renato... sur l'étal des légumes, entre les laitues ! « C'est ici que tout le monde te cherche pour la salade », sourit-elle. Renato ne comprend plus rien du tout." },
          choices: [
            { t: { es: "Preguntamos a la balanza antigua", ca: "Preguntem a la balança antiga", en: "Let's ask the old scale", cs: "Zeptáme se staré váhy", fr: "Demandons à la vieille balance" }, go: "n3b" },
            { t: { es: "¡Mira! El aguacate nos hace señas", ca: "Mira! L'alvocat ens fa senyals", en: "Look! The avocado is waving at us", cs: "Podívej! Avokádo na nás mává", fr: "Regarde ! L'avocat nous fait signe" }, go: "n3c" }
          ]
        },
        n3a: {
          text: { es: "'Porque en la cocina juegas con las verduras: ensaladas, sopas, salsas', dice el manzano. 'Eres fruta para la ciencia y verdura en la cocina. ¡Dos equipos, doble suerte!'", ca: "'Perquè a la cuina jugues amb les verdures: amanides, sopes, salses', diu la pomera. 'Ets fruita per a la ciència i verdura a la cuina. Dos equips, doble sort!'", en: "'Because in the kitchen you play with the veggies: salads, soups, sauces', says the apple tree. 'You are a fruit for science and a veggie in the kitchen. Two teams, double luck!'", cs: "'Protože v kuchyni hraješ se zeleninou: saláty, polévky, omáčky', říká jabloň. 'Pro vědu jsi ovoce a v kuchyni zelenina. Dva týmy, dvojité štěstí!'", fr: "« Parce qu'à la cuisine tu joues avec les légumes : salades, soupes, sauces », dit le pommier. « Tu es un fruit pour la science et un légume à la cuisine. Deux équipes, double chance ! »" },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n3b: {
          text: { es: "La balanza antigua carraspea: 'Llevo cien años pesando tomates en la cesta de las frutas y en la de las verduras... y en las dos pesan igual de felices'. Y guiña un platillo.", ca: "La balança antiga s'escura la gola: 'Fa cent anys que peso tomàquets al cistell de les fruites i al de les verdures... i a tots dos pesen igual de feliços'. I fa l'ullet amb un platet.", en: "The old scale clears its throat: 'For a hundred years I have weighed tomatoes in the fruit basket and in the veggie basket... and they weigh just as happy in both'. And it winks with one pan.", cs: "Stará váha si odkašle: 'Už sto let vážím rajčata v košíku s ovocem i v košíku se zeleninou... a v obou váží stejně šťastně'. A mrkne jednou miskou.", fr: "La vieille balance se racle la gorge : « Depuis cent ans je pèse des tomates dans le panier des fruits et dans celui des légumes... et dans les deux, elles pèsent aussi heureuses ». Et elle fait un clin d'œil avec un plateau." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n3c: {
          text: { es: "¡Es el aguacate! Susurra: 'Renato, yo también soy fruta y casi nadie lo sabe. Y el pepino, y el calabacín... ¡somos un club secreto!'. Renato se ríe por primera vez en todo el día.", ca: "És l'alvocat! Xiuxiueja: 'Renato, jo també soc fruita i gairebé ningú no ho sap. I el cogombre, i el carbassó... som un club secret!'. En Renato riu per primera vegada en tot el dia.", en: "It is the avocado! He whispers: 'Renato, I am a fruit too and almost nobody knows. And the cucumber, and the zucchini... we are a secret club!'. Renato laughs for the first time all day.", cs: "Je to avokádo! Šeptá: 'Renato, já jsem taky ovoce a skoro nikdo to neví. A okurka, a cuketa... jsme tajný klub!'. Renato se poprvé za celý den zasměje.", fr: "C'est l'avocat ! Il chuchote : « Renato, moi aussi je suis un fruit et presque personne ne le sait. Et le concombre, et la courgette... on est un club secret ! ». Renato rit pour la première fois de la journée." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n4: {
          text: { es: "De vuelta al huerto, ¡sorpresa!: hoy hay partido de pelota-calabaza, frutas contra verduras, y falta un jugador en cada equipo. Todos miran a Renato. ¿Qué hacemos, {name}?", ca: "De tornada a l'hort, sorpresa!: avui hi ha partit de pilota-carbassa, fruites contra verdures, i falta un jugador a cada equip. Tothom mira en Renato. Què fem, {name}?", en: "Back at the garden, surprise!: today there is a pumpkin-ball match, fruits versus veggies, and each team is missing one player. Everyone looks at Renato. What do we do, {name}?", cs: "Zpátky na zahrádce, překvapení!: dnes se hraje zápas s dýňovým míčem, ovoce proti zelenině, a každému týmu chybí jeden hráč. Všichni se dívají na Renata. Co uděláme, {name}?", fr: "De retour au potager, surprise ! : aujourd'hui il y a un match de balle-citrouille, fruits contre légumes, et il manque un joueur dans chaque équipe. Tout le monde regarde Renato. Qu'est-ce qu'on fait, {name} ?" },
          choices: [
            { t: { es: "Que juegue una parte con cada equipo", ca: "Que jugui una part amb cada equip", en: "He plays one half with each team", cs: "Ať hraje poločas za každý tým", fr: "Il joue une mi-temps avec chaque équipe" }, go: "n5a" },
            { t: { es: "¡Mejor equipos mezclados de colores!", ca: "Millor equips barrejats de colors!", en: "Better: mixed colour teams!", cs: "Radši smíchané barevné týmy!", fr: "Mieux : des équipes mélangées par couleurs !" }, go: "n5b" }
          ]
        },
        n5a: {
          text: { es: "Primera parte con las verduras: Renato para un pelotazo de calabaza. Segunda parte con las frutas: ¡marca un gol de rebote en la sandía! Los dos equipos lo abrazan a la vez.", ca: "Primera part amb les verdures: en Renato atura una pilotada de carbassa. Segona part amb les fruites: marca un gol de rebot a la síndria! Els dos equips l'abracen alhora.", en: "First half with the veggies: Renato saves a big pumpkin shot. Second half with the fruits: he scores a goal bouncing off the watermelon! Both teams hug him at the same time.", cs: "První poločas za zeleninu: Renato chytí dýňovou ránu. Druhý poločas za ovoce: dá gól odrazem od melounu! Oba týmy ho obejmou najednou.", fr: "Première mi-temps avec les légumes : Renato arrête un gros tir de citrouille. Seconde mi-temps avec les fruits : il marque un but avec un rebond sur la pastèque ! Les deux équipes le serrent dans leurs bras en même temps." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e1" }
          ]
        },
        n5b: {
          text: { es: "{name} propone: 'Equipo rojo contra equipo verde, ¡y da igual quién es fruta o verdura!'. La fresa choca los cinco con Renato y el brócoli se peina las flores para la ocasión.", ca: "{name} proposa: 'Equip vermell contra equip verd, i tant és qui és fruita o verdura!'. La maduixa xoca els cinc amb en Renato i el bròquil es pentina les flors per a l'ocasió.", en: "{name} suggests: 'Red team versus green team, and it does not matter who is fruit or veggie!'. The strawberry high-fives Renato and the broccoli combs its flowers for the occasion.", cs: "{name} navrhne: 'Červený tým proti zelenému, a je jedno, kdo je ovoce a kdo zelenina!'. Jahoda si plácne s Renatem a brokolice si na tu slávu učeše kytičky.", fr: "{name} propose : « Équipe rouge contre équipe verte, et peu importe qui est fruit ou légume ! ». La fraise tape dans la main de Renato et le brocoli se coiffe les fleurs pour l'occasion." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e2" }
          ]
        },
        e1: {
          end: true,
          text: { es: "Desde ese día, Renato juega en los dos equipos y nadie discute: ser dos cosas a la vez no es un lío, ¡es doble suerte! Gracias por acompañarlo, {name}: tú también puedes ser muchas cosas a la vez.", ca: "Des d'aquell dia, en Renato juga als dos equips i ningú no discuteix: ser dues coses alhora no és cap embolic, és doble sort! Gràcies per acompanyar-lo, {name}: tu també pots ser moltes coses alhora.", en: "From that day on, Renato plays on both teams and nobody argues: being two things at once is not a muddle, it is double luck! Thanks for helping him, {name}: you can be many things at once too.", cs: "Od toho dne hraje Renato za oba týmy a nikdo se nehádá: být dvěma věcmi najednou není zmatek, je to dvojité štěstí! Díky, žes mu pomohla, {name}: i ty můžeš být spousta věcí najednou.", fr: "Depuis ce jour, Renato joue dans les deux équipes et personne ne se dispute : être deux choses à la fois, ce n'est pas la pagaille, c'est une double chance ! Merci de l'avoir accompagné, {name} : toi aussi tu peux être plein de choses à la fois." }
        },
        e2: {
          end: true,
          text: { es: "El partido de colores es el más divertido de la historia del huerto. Al final, todos meriendan juntos un arcoíris entero. Renato ya no pregunta de qué equipo es: es del equipo de todos. ¡Bien pensado, {name}!", ca: "El partit de colors és el més divertit de la història de l'hort. Al final, tothom berena junt un arc de Sant Martí sencer. En Renato ja no pregunta de quin equip és: és de l'equip de tothom. Ben pensat, {name}!", en: "The colour match is the funnest in garden history. Afterwards, everyone shares a whole rainbow snack together. Renato no longer asks which team he is on: he is on everyone's team. Great thinking, {name}!", cs: "Barevný zápas je nejzábavnější v dějinách zahrádky. Nakonec si všichni společně dají svačinu z celé duhy. Renato už se neptá, do kterého týmu patří: patří do týmu všech. Dobrý nápad, {name}!", fr: "Le match des couleurs est le plus amusant de l'histoire du potager. À la fin, tout le monde goûte ensemble un arc-en-ciel entier. Renato ne demande plus de quelle équipe il est : il est de l'équipe de tout le monde. Bien joué, {name} !" }
        }
      }
    },
    {
      id: "semilla", emoji: "🌱", start: "n1",
      title: { es: "La semilla viajera", ca: "La llavor viatgera", en: "The Travelling Seed", cs: "Semínko na cestách", fr: "La graine voyageuse" },
      nodes: {
        n1: {
          text: { es: "¡Mira, {name}! Una semillita diminuta pasa volando delante de nosotros. Es una semilla misteriosa: nadie sabe qué planta guarda dentro. ¿La seguimos?", ca: "Mira, {name}! Una llavoreta diminuta passa volant davant nostre. És una llavor misteriosa: ningú no sap quina planta guarda a dins. La seguim?", en: "Look, {name}! A tiny little seed flies right past us. It is a mystery seed: nobody knows which plant is sleeping inside. Shall we follow it?", cs: "Podívej, {name}! Kolem nás letí maličké semínko. Je to záhadné semínko: nikdo neví, jaká rostlinka v něm spí. Poletíme za ním?", fr: "Regarde, {name} ! Une toute petite graine passe en volant devant nous. C'est une graine mystérieuse : personne ne sait quelle plante dort dedans. On la suit ?" },
          choices: [
            { t: { es: "¡Sí, la lleva el viento!", ca: "Sí, se l'emporta el vent!", en: "Yes, the wind is carrying it!", cs: "Ano, nese ho vítr!", fr: "Oui, le vent l'emporte !" }, go: "n2a" },
            { t: { es: "¡Cuidado, un pájaro la ha cogido!", ca: "Compte, un ocell l'ha agafada!", en: "Careful, a bird just grabbed it!", cs: "Pozor, popadl ho ptáček!", fr: "Attention, un oiseau l'a attrapée !" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "El viento la hace bailar por encima de los toldos del mercado. Sube, baja, da una voltereta... y empieza a caer. ¿Dónde aterrizará?", ca: "El vent la fa ballar per sobre dels tendals del mercat. Puja, baixa, fa una tombarella... i comença a caure. On aterrarà?", en: "The wind makes it dance above the market awnings. Up, down, a somersault... and now it starts to fall. Where will it land?", cs: "Vítr ho roztančí nad plachtami trhu. Nahoru, dolů, kotrmelec... a už padá. Kam asi dopadne?", fr: "Le vent la fait danser au-dessus des auvents du marché. Elle monte, descend, fait une galipette... et commence à tomber. Où va-t-elle atterrir ?" },
          choices: [
            { t: { es: "¡En la maceta de un balcón!", ca: "Al test d'un balcó!", en: "In a balcony flowerpot!", cs: "Do květináče na balkoně!", fr: "Dans un pot de fleurs au balcon !" }, go: "n3a" },
            { t: { es: "¡En un bancal del huerto!", ca: "En un bancal de l'hort!", en: "In a garden bed!", cs: "Na záhonek na zahrádce!", fr: "Dans une planche du potager !" }, go: "n3b" }
          ]
        },
        n2b: {
          text: { es: "El pájaro vuela hasta el río y ¡plof!, la semilla se le escapa del pico. Un caracol muy amable la recoge: 'Yo la llevo, pero despacito. ¿Adónde vamos?'", ca: "L'ocell vola fins al riu i plof!, la llavor se li escapa del bec. Un caragol molt amable la recull: 'Jo la porto, però a poc a poc. On anem?'", en: "The bird flies to the river and, plop!, the seed slips out of its beak. A very kind snail picks it up: 'I will carry it, but slowly. Where are we going?'", cs: "Ptáček letí k řece a žbluňk!, semínko mu vyklouzne ze zobáčku. Zvedne ho moc hodný šnek: 'Já ho odnesu, ale pomaloučku. Kam to bude?'", fr: "L'oiseau vole jusqu'à la rivière et plouf !, la graine s'échappe de son bec. Un escargot très gentil la ramasse : « Je la porte, mais tout doucement. Où va-t-on ? »" },
          choices: [
            { t: { es: "Al huerto, con las demás plantas", ca: "A l'hort, amb les altres plantes", en: "To the garden, with the other plants", cs: "Na zahrádku, za ostatními rostlinami", fr: "Au potager, avec les autres plantes" }, go: "n3b" },
            { t: { es: "Que se quede junto al río", ca: "Que es quedi vora el riu", en: "Let it stay by the river", cs: "Ať zůstane u řeky", fr: "Qu'elle reste près de la rivière" }, go: "n3c" }
          ]
        },
        n3a: {
          text: { es: "La semilla cae en una maceta con una casa de caracol vacía de adorno. Una niña del balcón la ve y le prepara una camita de tierra. Cada mañana le canta y le da un dedalito de agua.", ca: "La llavor cau en un test amb una closca de caragol buida d'adorn. Una nena del balcó la veu i li prepara un llitet de terra. Cada matí li canta i li dóna un didalet d'aigua.", en: "The seed lands in a flowerpot with an empty snail shell for decoration. A girl on the balcony sees it and makes it a little bed of soil. Every morning she sings to it and gives it a thimble of water.", cs: "Semínko spadne do květináče s prázdnou šnečí ulitou na ozdobu. Holčička z balkonu ho uvidí a ustele mu postýlku z hlíny. Každé ráno mu zazpívá a dá mu náprstek vody.", fr: "La graine tombe dans un pot décoré d'une coquille d'escargot vide. Une fille du balcon la voit et lui prépare un petit lit de terre. Chaque matin, elle lui chante une chanson et lui donne un dé à coudre d'eau." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n3b: {
          text: { es: "La semilla aterriza en un bancal blandito del huerto. El hortelano la arropa con tierra oscura: 'Bienvenida, viajera. Aquí hay sitio para todas'. La regadera le da su primer glugluglú.", ca: "La llavor aterra en un bancal tovet de l'hort. L'hortolà l'arropa amb terra fosca: 'Benvinguda, viatgera. Aquí hi ha lloc per a totes'. La regadora li dóna el seu primer glugluglú.", en: "The seed lands on a soft garden bed. The gardener tucks it in with dark soil: 'Welcome, traveller. There is room here for everyone'. The watering can gives it its first glug-glug.", cs: "Semínko přistane na měkkém záhonku. Zahradník ho přikryje tmavou hlínou: 'Vítej, cestovatelko. Tady je místo pro všechny'. Konvička mu dá první glo-glo-glo.", fr: "La graine atterrit sur une planche toute douce du potager. Le jardinier la borde de terre sombre : « Bienvenue, voyageuse. Ici, il y a de la place pour toutes ». L'arrosoir lui offre son premier glouglou." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n3c: {
          text: { es: "La semilla se queda en la orilla, escuchando la canción del agua. El caracol la visita cada tarde y le cuenta las noticias del huerto, que están a tres días de caracol.", ca: "La llavor es queda a la riba, escoltant la cançó de l'aigua. El caragol la visita cada tarda i li explica les notícies de l'hort, que són a tres dies de caragol.", en: "The seed stays on the riverbank, listening to the water's song. The snail visits every afternoon and tells it the garden news, which is three snail-days away.", cs: "Semínko zůstane na břehu a poslouchá písničku vody. Šnek ho každé odpoledne navštíví a vypráví mu novinky ze zahrádky, která je tři šnečí dny daleko.", fr: "La graine reste sur la rive, à écouter la chanson de l'eau. L'escargot lui rend visite chaque après-midi et lui raconte les nouvelles du potager, qui est à trois jours d'escargot." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n4: {
          text: { es: "Llega el invierno y la semilla duerme calentita bajo tierra. Y una mañana de primavera... ¡un bracito verde asoma! Es un brote chiquitín. ¿Qué necesita ahora, {name}?", ca: "Arriba l'hivern i la llavor dorm calentona sota terra. I un matí de primavera... un bracet verd treu el cap! És un brot menudet. Què necessita ara, {name}?", en: "Winter comes and the seed sleeps all warm underground. And one spring morning... a little green arm pokes out! It is a tiny sprout. What does it need now, {name}?", cs: "Přijde zima a semínko spí v teploučku pod zemí. A jednoho jarního rána... vykoukne zelená ručička! Je to malinký klíček. Co teď potřebuje, {name}?", fr: "L'hiver arrive et la graine dort bien au chaud sous terre. Et un matin de printemps... un petit bras vert pointe son nez ! C'est une minuscule pousse. De quoi a-t-elle besoin maintenant, {name} ?" },
          choices: [
            { t: { es: "Agua, sol y paciencia", ca: "Aigua, sol i paciència", en: "Water, sun and patience", cs: "Vodu, slunce a trpělivost", fr: "De l'eau, du soleil et de la patience" }, go: "n5" },
            { t: { es: "¡Gritarle que crezca ya!", ca: "Cridar-li que creixi ja!", en: "Shout at it to grow right now!", cs: "Zakřičet, ať už roste!", fr: "Lui crier de pousser tout de suite !" }, go: "n4b" }
          ]
        },
        n4b: {
          text: { es: "'¡Crece, crece, creceee!', gritamos. El brote ni caso: las plantas no entienden de prisas. Un gusanito saca la cabeza: 'Chsss, que aquí se crece durmiendo'. Vale, vale... probamos con paciencia.", ca: "'Creix, creix, creeeix!', cridem. El brot ni cas: les plantes no entenen de presses. Un cuquet treu el cap: 'Xsss, que aquí es creix dormint'. D'acord, d'acord... provem amb paciència.", en: "'Grow, grow, grooow!', we shout. The sprout ignores us completely: plants do not understand hurry. A little worm pops its head out: 'Shhh, around here we grow while sleeping'. Okay, okay... let's try patience.", cs: "'Rosť, rosť, rosťiii!', křičíme. Klíček si nás vůbec nevšímá: rostliny nechápou spěch. Vykoukne žížalka: 'Pššš, tady se roste ve spánku'. Dobře, dobře... zkusíme to s trpělivostí.", fr: "« Pousse, pousse, poussez ! », crions-nous. La pousse ne nous écoute pas du tout : les plantes ne connaissent pas la hâte. Un petit ver sort la tête : « Chut, ici on grandit en dormant ». D'accord, d'accord... essayons la patience." },
          choices: [
            { t: { es: "Agua, sol y paciencia", ca: "Aigua, sol i paciència", en: "Water, sun and patience", cs: "Vodu, slunce a trpělivost", fr: "De l'eau, du soleil et de la patience" }, go: "n5" }
          ]
        },
        n5: {
          text: { es: "Con agua, sol y días tranquilos, el brote se hace planta y abre una flor amarilla. Las abejas vienen a bailar, zum, zum... y de la flor nace una bolita verde. ¡El misterio casi está resuelto!", ca: "Amb aigua, sol i dies tranquils, el brot es fa planta i obre una flor groga. Les abelles vénen a ballar, zum, zum... i de la flor neix una boleta verda. El misteri gairebé està resolt!", en: "With water, sun and calm days, the sprout becomes a plant and opens a yellow flower. The bees come to dance, buzz, buzz... and from the flower a little green ball is born. The mystery is almost solved!", cs: "S vodou, sluncem a klidnými dny se z klíčku stane rostlina a rozkvete žlutý květ. Včelky si přiletí zatančit, bzzz, bzzz... a z květu se narodí zelená kulička. Záhada je skoro vyřešená!", fr: "Avec de l'eau, du soleil et des jours tranquilles, la pousse devient une plante et ouvre une fleur jaune. Les abeilles viennent danser, bzz, bzz... et de la fleur naît une petite boule verte. Le mystère est presque résolu !" },
          choices: [
            { t: { es: "Esperamos a que madure", ca: "Esperem que maduri", en: "We wait for it to ripen", cs: "Počkáme, až dozraje", fr: "On attend qu'elle mûrisse" }, go: "e1" },
            { t: { es: "¡La probamos verde ya!", ca: "La tastem verda ja!", en: "We taste it green right now!", cs: "Ochutnáme ji hned zelenou!", fr: "On la goûte verte tout de suite !" }, go: "e2" }
          ]
        },
        e1: {
          end: true,
          text: { es: "La bolita verde se pone naranja... ¡y luego roja! ¡Era una semilla de tomate! Está dulce y calentito de sol. Guardamos sus semillas para plantarlas el año que viene: el viaje de la semilla nunca se acaba, {name}.", ca: "La boleta verda es torna taronja... i després vermella! Era una llavor de tomàquet! És dolç i calentó de sol. Guardem les seves llavors per plantar-les l'any que ve: el viatge de la llavor no s'acaba mai, {name}.", en: "The little green ball turns orange... and then red! It was a tomato seed! It tastes sweet and warm from the sun. We save its seeds to plant next year: the seed's journey never ends, {name}.", cs: "Zelená kulička zoranžoví... a pak zčervená! Bylo to semínko rajčete! Je sladké a prohřáté sluncem. Jeho semínka si schováme a na jaře je zasadíme: cesta semínka nikdy nekončí, {name}.", fr: "La petite boule verte devient orange... puis rouge ! C'était une graine de tomate ! Elle est douce et chaude de soleil. On garde ses graines pour les planter l'an prochain : le voyage de la graine ne s'arrête jamais, {name}." }
        },
        e2: {
          end: true,
          text: { es: "¡Puaj! Verde está dura y muy ácida. La planta se ríe: 'La paciencia es mi ingrediente secreto'. Esperamos unos días más y la siguiente, roja y madura, sabe a gloria. Lección aprendida, {name}: lo bueno sabe mejor cuando llega a su tiempo.", ca: "Ecs! Verda és dura i molt àcida. La planta riu: 'La paciència és el meu ingredient secret'. Esperem uns dies més i la següent, vermella i madura, és boníssima. Lliçó apresa, {name}: el que és bo té més bon gust quan arriba al seu temps.", en: "Yuck! Green, it is hard and very sour. The plant laughs: 'Patience is my secret ingredient'. We wait a few more days and the next one, red and ripe, tastes amazing. Lesson learned, {name}: good things taste better when they come in their own time.", cs: "Fuj! Zelená je tvrdá a hodně kyselá. Rostlina se směje: 'Trpělivost je moje tajná ingredience'. Počkáme pár dní a další, červená a zralá, chutná báječně. Poučení, {name}: dobré věci chutnají nejlíp, když přijdou ve svůj čas.", fr: "Beurk ! Verte, elle est dure et très acide. La plante rigole : « La patience est mon ingrédient secret ». On attend quelques jours de plus et la suivante, rouge et mûre, est délicieuse. Leçon apprise, {name} : les bonnes choses sont meilleures quand elles arrivent à leur heure." }
        }
      }
    },
    {
      id: "arcoiris", emoji: "🌈", start: "n1",
      title: { es: "La fiesta del arcoíris en el mercado", ca: "La festa de l'arc de Sant Martí al mercat", en: "The Rainbow Party at the Market", cs: "Duhová slavnost na trhu", fr: "La fête de l'arc-en-ciel au marché" },
      nodes: {
        n1: {
          text: { es: "¡Hoy es la fiesta del arcoíris, {name}! El mercado ordena las frutas y verduras por colores: rojo, naranja, amarillo, verde, azul... ¡pero la bandeja morada está vacía! Sin morado no hay arcoíris. ¿Qué hacemos?", ca: "Avui és la festa de l'arc de Sant Martí, {name}! El mercat ordena les fruites i verdures per colors: vermell, taronja, groc, verd, blau... però la safata morada és buida! Sense morat no hi ha arc de Sant Martí. Què fem?", en: "Today is the rainbow party, {name}! The market lines up fruits and veggies by colour: red, orange, yellow, green, blue... but the purple tray is empty! No purple, no rainbow. What do we do?", cs: "Dnes je duhová slavnost, {name}! Trh rovná ovoce a zeleninu podle barev: červená, oranžová, žlutá, zelená, modrá... ale fialový tác je prázdný! Bez fialové není duha. Co uděláme?", fr: "Aujourd'hui, c'est la fête de l'arc-en-ciel, {name} ! Le marché range les fruits et légumes par couleurs : rouge, orange, jaune, vert, bleu... mais le plateau violet est vide ! Sans violet, pas d'arc-en-ciel. Qu'est-ce qu'on fait ?" },
          choices: [
            { t: { es: "Buscamos morado en el huerto", ca: "Busquem morat a l'hort", en: "Let's look for purple in the garden", cs: "Hledáme fialovou na zahrádce", fr: "Cherchons du violet au potager" }, go: "n2a" },
            { t: { es: "Preguntamos a la frutera mayor", ca: "Preguntem a la fruitera gran", en: "Let's ask the oldest fruit seller", cs: "Zeptáme se nejstarší trhovkyně", fr: "Demandons à la doyenne du marché" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "En el huerto encontramos a la berenjena, brillante y súper morada. Pero se esconde detrás de sus hojas: 'Yo no soy dulce como las frutas... seguro que no me quieren en la fiesta'.", ca: "A l'hort trobem l'albergínia, brillant i súper morada. Però s'amaga darrere les seves fulles: 'Jo no soc dolça com les fruites... segur que no em volen a la festa'.", en: "In the garden we find the eggplant, shiny and super purple. But she hides behind her leaves: 'I am not sweet like the fruits... they surely do not want me at the party'.", cs: "Na zahrádce najdeme lilek, lesklý a krásně fialový. Ale schovává se za listy: 'Nejsem sladký jako ovoce... na slavnosti mě určitě nechtějí'.", fr: "Au potager, nous trouvons l'aubergine, brillante et super violette. Mais elle se cache derrière ses feuilles : « Je ne suis pas sucrée comme les fruits... on ne voudra sûrement pas de moi à la fête »." },
          choices: [
            { t: { es: "¡Animarla: la fiesta es de todos!", ca: "Animar-la: la festa és de tothom!", en: "Cheer her up: the party is for everyone!", cs: "Povzbudit ho: slavnost je pro všechny!", fr: "L'encourager : la fête est pour tout le monde !" }, go: "n3a" },
            { t: { es: "Buscar también uvas moradas", ca: "Buscar també raïm morat", en: "Also look for purple grapes", cs: "Najít ještě fialové hrozny", fr: "Chercher aussi du raisin violet" }, go: "n3b" }
          ]
        },
        n2b: {
          text: { es: "La frutera mayor se toca la barbilla: 'Morado, morado... En mi cesta de temporada quedan uvas del final del verano. Y las abejas saben dónde hay moras silvestres'. ¿A por cuál vamos?", ca: "La fruitera gran es toca la barbeta: 'Morat, morat... Al meu cistell de temporada queda raïm del final de l'estiu. I les abelles saben on hi ha móres silvestres'. A per quin anem?", en: "The oldest fruit seller strokes her chin: 'Purple, purple... In my seasonal basket there are still some late-summer grapes. And the bees know where the wild blackberries grow'. Which one do we go for?", cs: "Nejstarší trhovkyně si mne bradu: 'Fialová, fialová... V mém sezonním košíku zbývají hrozny z konce léta. A včelky vědí, kde rostou ostružiny'. Pro co se vydáme?", fr: "La doyenne du marché se caresse le menton : « Du violet, du violet... Dans mon panier de saison, il reste du raisin de fin d'été. Et les abeilles savent où poussent les mûres sauvages ». On va chercher lequel ?" },
          choices: [
            { t: { es: "¡A por las uvas!", ca: "A pel raïm!", en: "The grapes!", cs: "Pro hrozny!", fr: "Le raisin !" }, go: "n3b" },
            { t: { es: "¡Seguimos a las abejas!", ca: "Seguim les abelles!", en: "Let's follow the bees!", cs: "Poletíme za včelkami!", fr: "Suivons les abeilles !" }, go: "n3c" }
          ]
        },
        n3a: {
          text: { es: "'¡La fiesta del arcoíris es de TODOS los colores, dulces y no dulces!', le decimos. La berenjena sale despacito, se mira brillar al sol... y sonríe: '¿Puedo traer a mi prima, la col lombarda?'. ¡Claro que sí!", ca: "'La festa de l'arc de Sant Martí és de TOTS els colors, dolços i no dolços!', li diem. L'albergínia surt a poc a poc, es mira brillar al sol... i somriu: 'Puc portar la meva cosina, la col llombarda?'. És clar que sí!", en: "'The rainbow party is for ALL colours, sweet and not sweet!', we tell her. The eggplant slowly comes out, sees herself shining in the sun... and smiles: 'May I bring my cousin, the red cabbage?'. Of course!", cs: "'Duhová slavnost je pro VŠECHNY barvy, sladké i nesladké!', říkáme mu. Lilek pomalu vyleze, uvidí, jak se leskne na slunci... a usměje se: 'Můžu vzít sestřenici, červené zelí?'. No jasně!", fr: "« La fête de l'arc-en-ciel est pour TOUTES les couleurs, sucrées ou pas ! », lui disons-nous. L'aubergine sort tout doucement, se regarde briller au soleil... et sourit : « Je peux amener ma cousine, le chou rouge ? ». Bien sûr que oui !" },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n3b: {
          text: { es: "Las uvas moradas llegan en racimo, todas juntas como una familia en el autobús. Se colocan en la bandeja morada y saludan: '¡Que empiece la fiesta, que nosotras ya estamos!'", ca: "El raïm morat arriba en ramell, tots junts com una família a l'autobús. Es col·loquen a la safata morada i saluden: 'Que comenci la festa, que nosaltres ja hi som!'", en: "The purple grapes arrive in a bunch, all together like a family on the bus. They settle on the purple tray and wave: 'Let the party begin, we are here now!'", cs: "Fialové hrozny dorazí v trsu, všechny pohromadě jako rodinka v autobuse. Usadí se na fialovém tácu a mávají: 'Slavnost může začít, my už jsme tady!'", fr: "Le raisin violet arrive en grappe, tous ensemble comme une famille dans le bus. Ils s'installent sur le plateau violet et saluent : « Que la fête commence, nous voilà ! »" },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n3c: {
          text: { es: "Zum, zum... las abejas nos guían hasta una zarza llena de moras. ¡Ojo con los pinchos! Cogemos las moras despacito, con dos deditos, y dejamos unas cuantas para los pájaros. Educación de huerto.", ca: "Zum, zum... les abelles ens guien fins a un esbarzer ple de móres. Compte amb les punxes! Collim les móres a poc a poc, amb dos ditets, i en deixem unes quantes per als ocells. Educació d'hort.", en: "Buzz, buzz... the bees lead us to a bramble full of blackberries. Watch out for the prickles! We pick the berries slowly, with two little fingers, and leave a few for the birds. Garden manners.", cs: "Bzzz, bzzz... včelky nás dovedou k ostružiní plnému ostružin. Pozor na trny! Trháme ostružiny pomaloučku, dvěma prstíky, a pár jich necháme ptáčkům. Zahradnická slušnost.", fr: "Bzz, bzz... les abeilles nous guident jusqu'à un roncier plein de mûres. Attention aux piquants ! On cueille les mûres doucement, avec deux petits doigts, et on en laisse quelques-unes pour les oiseaux. Politesse de potager." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n4: {
          text: { es: "¡La bandeja morada ya está llena y el arcoíris del mercado completo! Pero justo entonces una nube tapa el sol y todos los colores se apagan un poquito. La fiesta se queda gris... ¿Cómo la encendemos, {name}?", ca: "La safata morada ja és plena i l'arc de Sant Martí del mercat, complet! Però just llavors un núvol tapa el sol i tots els colors s'apaguen una miqueta. La festa es queda grisa... Com l'encenem, {name}?", en: "The purple tray is full and the market rainbow is complete! But just then a cloud covers the sun and all the colours fade a little. The party turns grey... How do we light it up, {name}?", cs: "Fialový tác je plný a tržní duha je kompletní! Ale zrovna v tu chvíli zakryje mrak slunce a všechny barvy trochu pohasnou. Slavnost zšedne... Jak ji rozsvítíme, {name}?", fr: "Le plateau violet est plein et l'arc-en-ciel du marché est complet ! Mais juste à ce moment, un nuage cache le soleil et toutes les couleurs pâlissent un peu. La fête devient grise... Comment la rallumer, {name} ?" },
          choices: [
            { t: { es: "¡Cantamos la canción de los colores!", ca: "Cantem la cançó dels colors!", en: "We sing the colour song!", cs: "Zazpíváme písničku o barvách!", fr: "On chante la chanson des couleurs !" }, go: "n5a" },
            { t: { es: "¡Gran degustación: un color para cada uno!", ca: "Gran degustació: un color per a cadascú!", en: "Big tasting: one colour for everyone!", cs: "Velká ochutnávka: každý jednu barvu!", fr: "Grande dégustation : une couleur pour chacun !" }, go: "n5b" }
          ]
        },
        n5a: {
          text: { es: "La balanza antigua marca el ritmo, clin, clon, y todo el mercado canta: 'rojo tomate, naranja zanahoria...'. La canción sube tan alto que le hace cosquillas a la nube.", ca: "La balança antiga marca el ritme, clin, clon, i tot el mercat canta: 'vermell tomàquet, taronja pastanaga...'. La cançó puja tan amunt que fa pessigolles al núvol.", en: "The old scale keeps the beat, cling, clong, and the whole market sings: 'red tomato, orange carrot...'. The song climbs so high that it tickles the cloud.", cs: "Stará váha udává rytmus, cink, conk, a celý trh zpívá: 'červené rajče, oranžová mrkev...'. Písnička vyletí tak vysoko, že polechtá mrak.", fr: "La vieille balance marque le rythme, cling, clong, et tout le marché chante : « rouge tomate, orange carotte... ». La chanson monte si haut qu'elle chatouille le nuage." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e1" }
          ]
        },
        n5b: {
          text: { es: "Cada uno elige un color que nunca ha probado: uno prueba el kiwi, otra la berenjena a la plancha, otro las moras... Mmm, ñam, ¡oooh! Las caras de sorpresa iluminan medio mercado.", ca: "Cadascú tria un color que no ha tastat mai: un tasta el kiwi, una altra l'albergínia a la planxa, un altre les móres... Mmm, nyam, oooh! Les cares de sorpresa il·luminen mig mercat.", en: "Everyone picks a colour they have never tasted: one tries kiwi, another grilled eggplant, another the blackberries... Mmm, yum, oooh! The surprised faces light up half the market.", cs: "Každý si vybere barvu, kterou nikdy neochutnal: jeden zkusí kiwi, druhá grilovaný lilek, třetí ostružiny... Mmm, mňam, óóó! Překvapené obličeje rozsvítí půlku trhu.", fr: "Chacun choisit une couleur qu'il n'a jamais goûtée : l'un essaie le kiwi, l'autre l'aubergine grillée, un autre les mûres... Mmm, miam, oooh ! Les visages surpris illuminent la moitié du marché." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e2" }
          ]
        },
        e1: {
          end: true,
          text: { es: "La nube, muerta de risa, se aparta... ¡y el sol enciende el mercado entero! Y como ha llovido un poquito, aparece un arcoíris de verdad justo encima de los toldos. Dos arcoíris en un día: uno en el cielo y otro para merendar. ¡Fiesta perfecta, {name}!", ca: "El núvol, mort de riure, s'aparta... i el sol encén el mercat sencer! I com que ha plogut una miqueta, apareix un arc de Sant Martí de debò just damunt dels tendals. Dos arcs en un dia: un al cel i un altre per berenar. Festa perfecta, {name}!", en: "The cloud, laughing its head off, moves away... and the sun lights up the whole market! And since it rained a tiny bit, a real rainbow appears right above the awnings. Two rainbows in one day: one in the sky and one for snack time. Perfect party, {name}!", cs: "Mrak se popadá za břicho smíchy a odpluje... a slunce rozsvítí celý trh! A protože trošku sprchlo, objeví se nad plachtami opravdická duha. Dvě duhy v jednom dni: jedna na nebi a druhá ke svačině. Dokonalá slavnost, {name}!", fr: "Le nuage, mort de rire, s'écarte... et le soleil illumine tout le marché ! Et comme il a plu un tout petit peu, un vrai arc-en-ciel apparaît juste au-dessus des auvents. Deux arcs-en-ciel en un jour : un dans le ciel et un pour le goûter. Fête parfaite, {name} !" }
        },
        e2: {
          end: true,
          text: { es: "Al final, ni falta hizo el sol: los colores también se encienden por dentro cuando pruebas algo nuevo. La berenjena es la reina de la fiesta y todos se llevan a casa un color nuevo favorito. ¿Y tú, {name}? ¿Qué color probarás mañana?", ca: "Al final, ni falta que va fer el sol: els colors també s'encenen per dins quan tastes una cosa nova. L'albergínia és la reina de la festa i tothom s'emporta a casa un color nou preferit. I tu, {name}? Quin color tastaràs demà?", en: "In the end, they did not even need the sun: colours also light up from the inside when you taste something new. The eggplant is the queen of the party and everyone takes home a new favourite colour. And you, {name}? Which colour will you try tomorrow?", cs: "Nakonec slunce ani nebylo potřeba: barvy se rozsvěcují i zevnitř, když ochutnáš něco nového. Lilek je královnou slavnosti a každý si domů odnese novou oblíbenou barvu. A ty, {name}? Jakou barvu ochutnáš zítra?", fr: "Finalement, pas besoin de soleil : les couleurs s'allument aussi de l'intérieur quand on goûte quelque chose de nouveau. L'aubergine est la reine de la fête et chacun rentre avec une nouvelle couleur préférée. Et toi, {name} ? Quelle couleur goûteras-tu demain ?" }
        }
      }
    }
  ]
  ,
  /* ---------- KARAOKE ---------- */
  songs: [
    { emoji: "🌈",
      title: { es: "El arcoíris de colores", ca: "L'arc de Sant Martí de colors", en: "The Rainbow on My Plate", cs: "Duha na talíři", fr: "L'arc-en-ciel à croquer" },
      lines: [
        { es: "Rojo como el tomate, roja la fresa,", ca: "Vermella la maduixa, vermell el tomàquet,", en: "Red like a tomato, red like a berry,", cs: "Červené je rajče, červená jahoda,", fr: "Rouge la tomate, rouge la fraise jolie," },
        { es: "¡el color de la energía se sienta a mi mesa!", ca: "la taronja i la pastanaga em fan un bon paquet.", en: "orange like a carrot, sweet like a cherry.", cs: "oranžová mrkvička, to je ale lahoda!", fr: "orange la carotte, croquante à midi." },
        { es: "Naranja la zanahoria, naranja el melocotón,", ca: "Groc el plàtan rialler, corbat com la lluna,", en: "Yellow is the banana, curved like the moon,", cs: "Žlutý banán do oblouku jako měsíc svítí,", fr: "Jaune la banane, courbée comme la lune," },
        { es: "el amarillo del plátano me baila en el corazón.", ca: "verd el kiwi menudet, quina gran fortuna.", en: "green is the kiwi, come and taste it soon.", cs: "zelené je kiwi, sladké jako kvítí.", fr: "verte la salade et violette la prune." },
        { es: "Verde la lechuga, verde el kiwi también,", ca: "Morat el raïm dolcet, blau el nabiu,", en: "Purple are the grapes, blue the blueberries too,", cs: "Fialové hrozny, borůvky jsou modré,", fr: "Bleues les myrtilles, doux le raisin," },
        { es: "morada la uva que sabe requetebién.", ca: "cada color que em menjo em fa més viu.", en: "every colour on my plate makes me strong and new.", cs: "každá barva na talíři dělá tělu dobře.", fr: "chaque couleur me donne un super matin." },
        { es: "Como cada color un poquito cada día,", ca: "Un color cada dia, quina meravella,", en: "Eat a little rainbow every single day,", cs: "Sněz si kousek duhy každičký den,", fr: "Mange un arc-en-ciel un peu chaque jour," },
        { es: "¡y como un arcoíris lleno de alegría!", ca: "menjar-se l'arc de Sant Martí amb cullera i paella!", en: "and your happy body says hip hip hooray!", cs: "a tvé bříško zavolá: to byl krásný sen!", fr: "et ton corps te dira merci avec amour !" }
      ] },
    { emoji: "🌙",
      title: { es: "La nana del huerto", ca: "La cançó de bressol de l'hort", en: "The Garden Lullaby", cs: "Ukolébavka pro zahrádku", fr: "La berceuse du potager" },
      lines: [
        { es: "Duerme, huertecito, duerme el caracol,", ca: "Dorm, hortet petit, dorm el caragol,", en: "Sleep, little garden, the sun says goodnight,", cs: "Spinkej, zahrádko, slunce už jde spát,", fr: "Dors, petit potager, le soleil s'en va," },
        { es: "las hojas se arropan con rayitos de sol.", ca: "les fulles s'arropen amb l'últim raig de sol.", en: "the leaves tuck each other in, cosy and tight.", cs: "lísteček lístečku jde dobrou noc přát.", fr: "les feuilles se bordent tout doucement, voilà." },
        { es: "La zanahoria sueña bajo el edredón,", ca: "La pastanaga somia sota l'edredó,", en: "The carrot is dreaming in her earthy bed,", cs: "Mrkvička spinká v postýlce z hlíny,", fr: "La carotte rêve dans son lit de terre," },
        { es: "la tierra la abraza como un buen colchón.", ca: "la terra l'abraça com un coixí de cotó.", en: "a blanket of soil around her sleepy head.", cs: "po zahrádce tančí měsíční stíny.", fr: "bien au chaud sous sa couverture légère." },
        { es: "El tomate cierra sus ojitos rojos,", ca: "El tomàquet tanca els seus ullets vermells,", en: "The tomato closes his little red eyes,", cs: "Rajčátko zavírá červená očka,", fr: "La tomate ferme ses petits yeux rouges," },
        { es: "y la luna riega sueños con sus ojos.", ca: "la lluna vigila somnis i estels.", en: "the moon waters dreams from the starry skies.", cs: "u plotu se stočila spinkající kočka.", fr: "et plus rien dans le potager ne bouge." },
        { es: "Mañana con el alba volverás a crecer,", ca: "Demà amb l'alba tornaràs a créixer,", en: "Tomorrow at sunrise you will grow anew,", cs: "Ráno za svítání zas povyrosteš,", fr: "Demain, dès l'aurore, tu pousseras encore," },
        { es: "buenas noches, huerto, hasta el amanecer.", ca: "bona nit, hortet, el sol et veurà néixer.", en: "goodnight, little garden, sweet dreams to you.", cs: "dobrou noc, zahrádko, ať krásně kveteš!", fr: "bonne nuit, potager, la lune veille dehors." }
      ] },
    { emoji: "🍌",
      title: { es: "El baile de la fruta", ca: "El ball de la fruita", en: "The Fruity Dance", cs: "Ovocný tanec", fr: "La danse des fruits" },
      lines: [
        { es: "¡Que salte la sandía, pum, pum, pum,", ca: "Que salti la síndria, pum, pum, pum,", en: "Let the watermelon bounce, boom, boom, boom,", cs: "Ať skáče meloun, bum, bum, bum,", fr: "Que saute la pastèque, boum, boum, boum," },
        { es: "que ruede la naranja, zum, zum, zum!", ca: "que rodi la taronja, zum, zum, zum!", en: "let the orange roll around the room, room, room!", cs: "ať se koulí pomeranč, celý dům, dům, dům!", fr: "que roule l'orange, zoum, zoum, zoum !" },
        { es: "El plátano se dobla para bailar,", ca: "El plàtan es doblega per ballar,", en: "The banana does a bendy little dance,", cs: "Banán se prohýbá, tancuje rád,", fr: "La banane se penche pour danser," },
        { es: "y la piña con corona empieza a girar.", ca: "i la pinya amb corona comença a girar.", en: "and the pineapple twirls in her leafy pants.", cs: "ananas v korunce točí se napořád.", fr: "et l'ananas couronné se met à tourner." },
        { es: "Crunch, crunch, la manzana marca el compás,", ca: "Crunch, crunch, la poma marca el compàs,", en: "Crunch, crunch, the apple keeps the beat,", cs: "Křup, křup, jablíčko do rytmu dupe,", fr: "Crounch, crounch, la pomme marque le tempo," },
        { es: "la uva hace palmas, ¡no pares jamás!", ca: "el raïm pica de mans, no paris pas!", en: "the grapes clap along, stomp your feet, feet, feet!", cs: "a hruška se v rytmu vesele houpe.", fr: "le raisin tape des mains, bravo, bravo !" },
        { es: "Fruta por la mañana, fruta al merendar,", ca: "Fruita al matí, fruita per berenar,", en: "Fruit in the morning, fruit for a snack,", cs: "Ovoce ráno i na svačinku,", fr: "Des fruits le matin, des fruits au goûter," },
        { es: "¡el baile de la fruta no puede parar!", ca: "el ball de la fruita no pot parar!", en: "the fruity dance is back, back, back!", cs: "ovocný tanec trvá celou hodinku!", fr: "la danse des fruits ne peut plus s'arrêter !" }
      ] }
  ],

  /* ---------- TRADUCTOR ---------- */
  translator: {
    words: [
      W_COMMON.hola,
      W_COMMON.adios,
      W_COMMON.amigo,
      { k: "manzana", emoji: "🍎", name: { es: "manzana", ca: "poma", en: "apple", cs: "jablko", fr: "pomme" } },
      { k: "zanahoria", emoji: "🥕", name: { es: "zanahoria", ca: "pastanaga", en: "carrot", cs: "mrkev", fr: "carotte" } },
      { k: "tomate", emoji: "🍅", name: { es: "tomate", ca: "tomàquet", en: "tomato", cs: "rajče", fr: "tomate" } },
      { k: "fresa", emoji: "🍓", name: { es: "fresa", ca: "maduixa", en: "strawberry", cs: "jahoda", fr: "fraise" } },
      { k: "semilla", emoji: "🌱", name: { es: "semilla", ca: "llavor", en: "seed", cs: "semínko", fr: "graine" } },
      W_COMMON.robot,
      W_COMMON.mama,
      W_COMMON.papa,
      W_COMMON.casa,
      W_COMMON.agua,
      { k: "comida", emoji: "🥣", name: { es: "comida", ca: "menjar", en: "food", cs: "jídlo", fr: "nourriture" } },
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
      { id: "hortelano", emoji: "🥕",
        name: { es: "Hortelano", ca: "Hortolà", en: "Gardenish", cs: "Zahradničtina", fr: "Jardinois" },
        greeting: { es: "¡Crunch! Así saluda el huerto: como una zanahoria recién cogida.", ca: "Crunch! Així saluda l'hort: com una pastanaga acabada de collir.", en: "Crunch! That is how the garden says hello: like a freshly picked carrot.", cs: "Křup! Tak zdraví zahrádka: jako čerstvě vytažená mrkvička.", fr: "Crounch ! C'est comme ça que le potager dit bonjour : comme une carotte fraîchement cueillie." },
        dict: { hola: "crunch", adios: "cruuunch", amigo: "crunchi", manzana: "crunch-ñac", zanahoria: "ñacañac", tomate: "crunch-plof", fresa: "crinch", semilla: "crunchito", robot: "crunch-bip", mama: "crunch-ma", papa: "crunch-pa", casa: "cruncho-nido", agua: "crunch-glub", comida: "ñam-crunch", perro: "crunch-guau", gato: "crunch-miau", grande: "CRUNCH", pequeno: "crunchin", bonito: "cruncholi", amor: "crunch-cor", gracias: "crunch-grasi", si: "crunch-sip", no: "crunch-nop", dormir: "crunch-zzz" } },
      { id: "frutero", emoji: "🍎",
        name: { es: "Frutero", ca: "Fruiter", en: "Fruitish", cs: "Ovocnářština", fr: "Fruitier" },
        greeting: { es: "¡Ñam! El idioma del frutero se habla saboreando cada palabra, como un melocotón.", ca: "Nyam! L'idioma del fruiter es parla assaborint cada paraula, com un préssec.", en: "Yum! Fruitish is spoken by savouring every word, like a peach.", cs: "Mňam! Ovocnářština se mluví tak, že si každé slovo vychutnáš jako broskev.", fr: "Miam ! Le fruitier se parle en savourant chaque mot, comme une pêche." },
        dict: { hola: "ñam", adios: "ñam-va", amigo: "ñamigo", manzana: "ñampoma", zanahoria: "ñam-croc", tomate: "ñamate", fresa: "ñamfresi", semilla: "ñamito", robot: "ñambot", mama: "ñamama", papa: "ñampapa", casa: "ñamcasa", agua: "ñamglu", comida: "ÑAM-ÑAM", perro: "ñamguau", gato: "ñammiau", grande: "ñamote", pequeno: "ñamin", bonito: "ñamoli", amor: "ñamor", gracias: "ñamgrasi", si: "ñam-si", no: "ñam-no", dormir: "ñamzzz" } },
      { id: "semillino", emoji: "🌱",
        name: { es: "Semillino", ca: "Llavorí", en: "Seedish", cs: "Semínkovština", fr: "Grainois" },
        greeting: { es: "Pss, pss... la semilla habla bajito bajito, porque está germinando y no quiere despertar a las demás.", ca: "Pss, pss... la llavor parla fluixet fluixet, perquè està germinant i no vol despertar les altres.", en: "Pss, pss... the seed speaks in a tiny whisper, because it is sprouting and does not want to wake the others.", cs: "Pss, pss... semínko mluví tichounce, protože právě klíčí a nechce vzbudit ostatní.", fr: "Pss, pss... la graine parle tout tout bas, parce qu'elle est en train de germer et ne veut pas réveiller les autres." },
        dict: { hola: "pss", adios: "pss-pss", amigo: "pss-migui", manzana: "pss-pomi", zanahoria: "pss-croqui", tomate: "pss-tomi", fresa: "pss-fresi", semilla: "pss-yo", robot: "pss-bipi", mama: "pss-mami", papa: "pss-papi", casa: "pss-nidito", agua: "pss-glup", comida: "pss-ñami", perro: "pss-guau", gato: "pss-miu", grande: "pss-grandote", pequeno: "pss-chiqui", bonito: "pss-boni", amor: "pss-cori", gracias: "pss-grasi", si: "pss-sip", no: "pss-nop", dormir: "pss-zzz" } },
      { id: "regadera", emoji: "🚿",
        name: { es: "Regadera", ca: "Regadora", en: "Watering-can", cs: "Konvičkovština", fr: "Arrosoir" },
        greeting: { es: "¡Glugluglú! La regadera saluda regando: cada gota es una palabra fresquita.", ca: "Glugluglú! La regadora saluda regant: cada gota és una paraula fresqueta.", en: "Glug-glug-gloo! The watering can says hello by watering: every drop is a fresh little word.", cs: "Glo-glo-glo! Konvička zdraví zaléváním: každá kapka je jedno svěží slovíčko.", fr: "Glouglouglou ! L'arrosoir dit bonjour en arrosant : chaque goutte est un petit mot tout frais." },
        dict: { hola: "glu-glu", adios: "glugluva", amigo: "glumigo", manzana: "glupoma", zanahoria: "glucroc", tomate: "glutoma", fresa: "glufresi", semilla: "glusemi", robot: "glubot", mama: "glumama", papa: "glupapa", casa: "glucasa", agua: "GLUGLUGLU", comida: "gluñam", perro: "gluguau", gato: "glumiau", grande: "gluglugrande", pequeno: "gluin", bonito: "gluli", amor: "glucor", gracias: "glugrasi", si: "glusi", no: "gluno", dormir: "gluzzz" } }
    ]
  }
  ,
  /* ---------- MAPA DE EXPLORACIÓN ---------- */
  explore: {
    width: 4200, height: 1100, stars: false,
    bgCss: "radial-gradient(ellipse 40% 30% at 12% 10%, rgba(255,241,118,.55), transparent), linear-gradient(180deg,#aed9f7 0%,#cde9a8 30%,#8bc34a 55%,#5b8c3a 80%,#3f6428 100%)",
    cats: [
      { id: "huerto", emoji: "🥕", x: 100, name: { es: "El huerto", ca: "L'hort", en: "The garden", cs: "Zahrádka", fr: "Le potager" } },
      { id: "frutal", emoji: "🍎", x: 1620, name: { es: "Los árboles frutales", ca: "Els arbres fruiters", en: "The fruit trees", cs: "Ovocné stromy", fr: "Les arbres fruitiers" } },
      { id: "mercado", emoji: "🧺", x: 3180, name: { es: "El mercado", ca: "El mercat", en: "The market", cs: "Trh", fr: "Le marché" } }
    ],
    pois: [
      { cat: "huerto", emoji: "🥕", x: 220, y: 820, iw: 64, ih: 76,
        svg: `<svg viewBox="0 0 100 118" width="100%" height="100%">
          <path d="M30 12 Q24 0 34 2 Q40 4 42 14 M50 10 Q50 0 58 0 Q64 2 58 14 M68 14 Q76 2 82 8 Q84 14 72 20" stroke="#43a047" stroke-width="7" fill="none" stroke-linecap="round"/>
          <path d="M38 20 Q50 14 64 20 L58 96 Q54 110 50 110 Q46 110 44 96 Z" fill="#fb8c00"/>
          <path d="M40 36 L62 36 M42 52 L60 52 M44 68 L58 68 M46 84 L56 84" stroke="#ef6c00" stroke-width="3" stroke-linecap="round"/>
          <ellipse cx="50" cy="30" rx="46" ry="12" fill="#6d4c41" opacity=".9"/>
          <path d="M6 30 Q26 24 50 26 Q76 24 94 30" stroke="#4e342e" stroke-width="4" fill="none"/>
          <circle cx="46" cy="44" r="2.4" fill="#4e2600"/><circle cx="58" cy="44" r="2.4" fill="#4e2600"/>
          <path d="M48 52 Q52 56 56 52" stroke="#4e2600" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`,
        name: { es: "La zanahoria asomando", ca: "La pastanaga que treu el cap", en: "The peeking carrot", cs: "Vykukující mrkev", fr: "La carotte qui pointe" },
        fact: { es: "La zanahoria es una raíz: crece bajo tierra y solo asoma el peinado verde. Antes había zanahorias moradas y blancas.", ca: "La pastanaga és una arrel: creix sota terra i només treu el pentinat verd. Abans hi havia pastanagues morades i blanques.", en: "The carrot is a root: it grows underground and only its green hairdo peeks out. Carrots used to be purple and white.", cs: "Mrkev je kořen: roste pod zemí a ven kouká jen její zelený účes. Kdysi bývaly mrkve fialové a bílé.", fr: "La carotte est une racine : elle pousse sous terre et seule sa coiffure verte dépasse. Avant, il existait des carottes violettes et blanches." } },
      { cat: "huerto", emoji: "🍅", x: 460, y: 545, iw: 70, ih: 66,
        svg: `<svg viewBox="0 0 100 94" width="100%" height="100%">
          <path d="M50 16 Q49 6 55 2" stroke="#33691e" stroke-width="4" fill="none" stroke-linecap="round"/>
          <path d="M50 18 L34 10 L44 20 L28 20 L42 26 L32 34 L46 28 Z" fill="#43a047"/>
          <path d="M50 18 L66 10 L56 20 L72 20 L58 26 L68 34 L54 28 Z" fill="#43a047"/>
          <circle cx="50" cy="56" r="34" fill="#e53935"/>
          <path d="M30 40 Q38 32 48 32" stroke="rgba(255,255,255,.5)" stroke-width="5" fill="none" stroke-linecap="round"/>
          <circle cx="42" cy="56" r="3" fill="#5d1010"/><circle cx="58" cy="56" r="3" fill="#5d1010"/>
          <path d="M44 66 Q50 72 56 66" stroke="#5d1010" stroke-width="2.6" fill="none" stroke-linecap="round"/></svg>`,
        name: { es: "El tomate rojo", ca: "El tomàquet vermell", en: "The red tomato", cs: "Červené rajče", fr: "La tomate rouge" },
        fact: { es: "¡El tomate es una fruta! Nace de una flor y lleva las semillas dentro. En la cocina juega con las verduras.", ca: "El tomàquet és una fruita! Neix d'una flor i porta les llavors a dins. A la cuina juga amb les verdures.", en: "The tomato is a fruit! It grows from a flower and carries its seeds inside. In the kitchen it plays with the veggies.", cs: "Rajče je ovoce! Vyroste z květu a semínka nosí uvnitř. V kuchyni si ale hraje se zeleninou.", fr: "La tomate est un fruit ! Elle naît d'une fleur et porte ses graines dedans. À la cuisine, elle joue avec les légumes." } },
      { cat: "huerto", emoji: "🥦", x: 940, y: 760, iw: 66, ih: 72,
        svg: `<svg viewBox="0 0 100 108" width="100%" height="100%">
          <path d="M42 60 L40 100 Q50 106 60 100 L58 60 Z" fill="#aed581"/>
          <path d="M50 62 L50 96 M44 66 L42 84 M56 66 L58 84" stroke="#7cb342" stroke-width="3" stroke-linecap="round"/>
          <circle cx="30" cy="44" r="20" fill="#2e7d32"/><circle cx="70" cy="44" r="20" fill="#2e7d32"/>
          <circle cx="50" cy="28" r="24" fill="#388e3c"/>
          <circle cx="36" cy="30" r="5" fill="#43a047"/><circle cx="52" cy="18" r="5" fill="#43a047"/>
          <circle cx="64" cy="32" r="5" fill="#43a047"/><circle cx="24" cy="48" r="4" fill="#43a047"/>
          <circle cx="76" cy="48" r="4" fill="#43a047"/><circle cx="46" cy="40" r="4" fill="#43a047"/></svg>`,
        name: { es: "El brócoli", ca: "El bròquil", en: "The broccoli", cs: "Brokolice", fr: "Le brocoli" },
        fact: { es: "¡El brócoli son flores! Un ramo de florecitas verdes sin abrir. Si lo dejas crecer, se abren flores amarillas.", ca: "El bròquil són flors! Un ram de floretes verdes sense obrir. Si el deixes créixer, s'obren flors grogues.", en: "Broccoli is flowers! A bouquet of tiny green buds. If you let it grow, yellow flowers open up.", cs: "Brokolice jsou květy! Kytice zelených nerozvitých poupátek. Když ji necháš růst, rozkvetou žluté kytičky.", fr: "Le brocoli, ce sont des fleurs ! Un bouquet de petits boutons verts. Si tu le laisses pousser, des fleurs jaunes s'ouvrent." } },
      { cat: "huerto", emoji: "🎃", x: 1180, y: 890, size: 2, iw: 120, ih: 92,
        svg: `<svg viewBox="0 0 130 100" width="100%" height="100%">
          <path d="M62 20 Q60 6 70 4 Q76 4 74 14 Q73 18 68 22" fill="none" stroke="#33691e" stroke-width="6" stroke-linecap="round"/>
          <ellipse cx="65" cy="58" rx="58" ry="40" fill="#ef6c00"/>
          <ellipse cx="65" cy="58" rx="36" ry="40" fill="#fb8c00"/>
          <ellipse cx="65" cy="58" rx="14" ry="40" fill="#ffa726"/>
          <path d="M29 30 Q10 34 12 46" stroke="#33691e" stroke-width="4" fill="none" stroke-linecap="round"/>
          <ellipse cx="14" cy="30" rx="12" ry="7" fill="#66bb6a" transform="rotate(-24 14 30)"/>
          <circle cx="52" cy="54" r="3.4" fill="#4e2600"/><circle cx="78" cy="54" r="3.4" fill="#4e2600"/>
          <path d="M56 68 Q65 76 74 68" stroke="#4e2600" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`,
        name: { es: "La calabaza gigante", ca: "La carbassa gegant", en: "The giant pumpkin", cs: "Obří dýně", fr: "La citrouille géante" },
        fact: { es: "Las calabazas gigantes de concurso pesan más que un coche pequeño. ¡Y todas empezaron siendo una semilla plana!", ca: "Les carbasses gegants de concurs pesen més que un cotxe petit. I totes van començar sent una llavor plana!", en: "Prize-winning giant pumpkins weigh more than a small car. And they all started as a flat little seed!", cs: "Soutěžní obří dýně váží víc než malé auto. A všechny začaly jako plochoučké semínko!", fr: "Les citrouilles géantes de concours pèsent plus qu'une petite voiture. Et toutes ont commencé comme une petite graine plate !" } },
      { cat: "huerto", emoji: "🫛", x: 700, y: 390, iw: 66, ih: 60,
        svg: `<svg viewBox="0 0 110 96" width="100%" height="100%">
          <path d="M10 30 Q14 16 26 12 Q22 24 24 34 Z" fill="#33691e"/>
          <path d="M14 34 Q54 12 98 34 Q86 78 54 82 Q22 78 14 34 Z" fill="#66bb6a"/>
          <path d="M14 34 Q54 20 98 34" stroke="#43a047" stroke-width="4" fill="none"/>
          <circle cx="36" cy="50" r="13" fill="#9ccc65"/><circle cx="64" cy="52" r="13" fill="#9ccc65"/><circle cx="88" cy="46" r="10" fill="#9ccc65"/>
          <circle cx="32" cy="48" r="2" fill="#2e5d1f"/><circle cx="40" cy="48" r="2" fill="#2e5d1f"/>
          <path d="M33 55 Q36 58 39 55" stroke="#2e5d1f" stroke-width="2" fill="none" stroke-linecap="round"/>
          <path d="M60 50 L64 52 L60 54" stroke="#2e5d1f" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`,
        name: { es: "El guisante en su vaina", ca: "El pèsol a la tavella", en: "The pea in its pod", cs: "Hrášek v lusku", fr: "Le petit pois dans sa cosse" },
        fact: { es: "Los guisantes son semillas y viven en fila dentro de su estuche verde: la vaina. Con guisantes descubrió Mendel la herencia.", ca: "Els pèsols són llavors i viuen en filera dins del seu estoig verd: la tavella. Amb pèsols va descobrir Mendel l'herència.", en: "Peas are seeds and live in a row inside their green case: the pod. With peas, Mendel discovered heredity.", cs: "Hrášky jsou semínka a bydlí v řadě ve svém zeleném pouzdru: v lusku. Právě na hrášku objevil Mendel dědičnost.", fr: "Les petits pois sont des graines et vivent en rang dans leur étui vert : la cosse. C'est avec des petits pois que Mendel a découvert l'hérédité." } },
      { cat: "huerto", emoji: "🥬", x: 1420, y: 640, iw: 68, ih: 60,
        svg: `<svg viewBox="0 0 110 96" width="100%" height="100%">
          <path d="M12 60 Q2 34 22 26 Q18 44 28 54 Z" fill="#7cb342"/>
          <path d="M98 60 Q108 34 88 26 Q92 44 82 54 Z" fill="#7cb342"/>
          <path d="M22 64 Q10 30 36 20 Q30 40 40 52 Z" fill="#9ccc65"/>
          <path d="M88 64 Q100 30 74 20 Q80 40 70 52 Z" fill="#9ccc65"/>
          <ellipse cx="55" cy="60" rx="34" ry="28" fill="#aed581"/>
          <path d="M38 46 Q55 34 72 46 M34 60 Q55 48 76 60" stroke="#8bc34a" stroke-width="4" fill="none" stroke-linecap="round"/>
          <circle cx="47" cy="62" r="2.6" fill="#33511a"/><circle cx="63" cy="62" r="2.6" fill="#33511a"/>
          <path d="M50 70 Q55 74 60 70" stroke="#33511a" stroke-width="2.4" fill="none" stroke-linecap="round"/></svg>`,
        name: { es: "La lechuga", ca: "L'enciam", en: "The lettuce", cs: "Hlávkový salát", fr: "La laitue" },
        fact: { es: "La lechuga es casi toda agua: por eso es tan fresquita. Sus hojas crecen en capas, como un vestido verde.", ca: "L'enciam és gairebé tot aigua: per això és tan fresquet. Les seves fulles creixen en capes, com un vestit verd.", en: "Lettuce is almost all water: that is why it is so refreshing. Its leaves grow in layers, like a green dress.", cs: "Salát je skoro celý z vody: proto tak krásně osvěží. Jeho listy rostou ve vrstvách jako zelené šatičky.", fr: "La laitue est presque toute en eau : voilà pourquoi elle est si fraîche. Ses feuilles poussent en couches, comme une robe verte." } },
      { cat: "frutal", emoji: "🍎", x: 1740, y: 520, iw: 130, ih: 140,
        svg: `<svg viewBox="0 0 120 130" width="100%" height="100%">
          <path d="M54 78 L52 122 L68 122 L64 78 Z" fill="#6d4c41"/>
          <path d="M56 90 Q44 84 38 74 M62 92 Q72 86 78 76" stroke="#6d4c41" stroke-width="6" fill="none" stroke-linecap="round"/>
          <circle cx="34" cy="52" r="26" fill="#43a047"/><circle cx="86" cy="52" r="26" fill="#43a047"/>
          <circle cx="60" cy="34" r="30" fill="#4caf50"/><circle cx="60" cy="58" r="24" fill="#388e3c"/>
          <circle cx="38" cy="42" r="7" fill="#e53935"/><circle cx="80" cy="40" r="7" fill="#e53935"/>
          <circle cx="60" cy="62" r="7" fill="#e53935"/><circle cx="50" cy="24" r="6" fill="#ef5350"/>
          <circle cx="92" cy="60" r="6" fill="#ef5350"/><circle cx="28" cy="62" r="6" fill="#ef5350"/></svg>`,
        name: { es: "El manzano", ca: "La pomera", en: "The apple tree", cs: "Jabloň", fr: "Le pommier" },
        fact: { es: "Un manzano puede dar cientos de manzanas cada otoño. Y la manzana flota en el agua: ¡tiene aire dentro!", ca: "Una pomera pot donar centenars de pomes cada tardor. I la poma flota a l'aigua: té aire a dins!", en: "An apple tree can give hundreds of apples every autumn. And apples float in water: they have air inside!", cs: "Jabloň dokáže dát každý podzim stovky jablek. A jablko plave na vodě: má v sobě vzduch!", fr: "Un pommier peut donner des centaines de pommes chaque automne. Et la pomme flotte sur l'eau : elle a de l'air dedans !" } },
      { cat: "frutal", emoji: "🍊", x: 2220, y: 660, iw: 120, ih: 130,
        svg: `<svg viewBox="0 0 120 130" width="100%" height="100%">
          <path d="M55 80 L53 122 L67 122 L63 80 Z" fill="#795548"/>
          <circle cx="60" cy="48" r="40" fill="#558b2f"/>
          <circle cx="34" cy="60" r="18" fill="#66bb6a"/><circle cx="88" cy="58" r="18" fill="#66bb6a"/>
          <circle cx="42" cy="40" r="8" fill="#fb8c00"/><circle cx="72" cy="32" r="8" fill="#fb8c00"/>
          <circle cx="60" cy="58" r="8" fill="#fb8c00"/><circle cx="86" cy="48" r="7" fill="#ffa726"/>
          <circle cx="30" cy="52" r="7" fill="#ffa726"/>
          <circle cx="52" cy="26" r="3" fill="#fff"/><circle cx="80" cy="60" r="3" fill="#fff"/><circle cx="44" cy="62" r="3" fill="#fff"/></svg>`,
        name: { es: "El naranjo", ca: "El taronger", en: "The orange tree", cs: "Pomerančovník", fr: "L'oranger" },
        fact: { es: "El naranjo puede tener flores blancas y naranjas maduras a la vez. Su flor se llama azahar y huele a gloria.", ca: "El taronger pot tenir flors blanques i taronges madures alhora. La seva flor es diu tarongina i fa una olor boníssima.", en: "The orange tree can have white blossoms and ripe oranges at the same time. Its flower smells wonderful.", cs: "Pomerančovník může mít bílé květy a zralé pomeranče najednou. Jeho květy nádherně voní.", fr: "L'oranger peut avoir des fleurs blanches et des oranges mûres en même temps. Sa fleur d'oranger sent merveilleusement bon." } },
      { cat: "frutal", emoji: "🍓", x: 1980, y: 900, iw: 62, ih: 64,
        svg: `<svg viewBox="0 0 100 104" width="100%" height="100%">
          <path d="M50 20 Q49 10 55 6" stroke="#33691e" stroke-width="4" fill="none" stroke-linecap="round"/>
          <path d="M50 22 L32 14 L42 24 L26 26 L42 32 Z" fill="#43a047"/>
          <path d="M50 22 L68 14 L58 24 L74 26 L58 32 Z" fill="#43a047"/>
          <path d="M50 24 Q76 24 76 50 Q76 78 50 96 Q24 78 24 50 Q24 24 50 24 Z" fill="#e53935"/>
          ${[[38, 40], [54, 38], [66, 48], [34, 56], [50, 56], [62, 64], [42, 70], [52, 80]].map(p => `<ellipse cx="${p[0]}" cy="${p[1]}" rx="2.2" ry="3" fill="#ffe082"/>`).join("")}
          <circle cx="42" cy="48" r="2.6" fill="#5d1010"/><circle cx="58" cy="48" r="2.6" fill="#5d1010"/>
          <path d="M45 58 Q50 62 55 58" stroke="#5d1010" stroke-width="2.4" fill="none" stroke-linecap="round"/></svg>`,
        name: { es: "La fresa", ca: "La maduixa", en: "The strawberry", cs: "Jahoda", fr: "La fraise" },
        fact: { es: "La fresa lleva las semillas por fuera: unas 200 semillitas doradas en la piel. ¡Es la fruta al revés!", ca: "La maduixa porta les llavors per fora: unes 200 llavoretes daurades a la pell. És la fruita a l'inrevés!", en: "The strawberry wears its seeds on the outside: about 200 little golden seeds on its skin. The inside-out fruit!", cs: "Jahoda nosí semínka na povrchu: asi 200 zlatých semínek na slupce. Ovoce naruby!", fr: "La fraise porte ses graines à l'extérieur : environ 200 petites graines dorées sur sa peau. Le fruit à l'envers !" } },
      { cat: "frutal", emoji: "🍌", x: 2460, y: 420, iw: 78, ih: 74,
        svg: `<svg viewBox="0 0 110 104" width="100%" height="100%">
          <path d="M40 96 Q34 90 38 82 L72 82 Q78 90 70 96 Z" fill="#6d4c41"/>
          <path d="M44 84 Q30 60 34 30 Q35 22 42 24 Q48 26 47 34 Q45 60 54 82 Z" fill="#fdd835"/>
          <path d="M52 84 Q44 54 50 24 Q52 15 59 17 Q65 20 63 28 Q58 56 62 82 Z" fill="#ffee58"/>
          <path d="M62 84 Q60 54 70 28 Q73 20 80 24 Q85 28 81 36 Q72 58 70 82 Z" fill="#fdd835"/>
          <path d="M70 86 Q74 62 88 42 Q93 36 98 42 Q101 47 95 54 Q82 68 78 86 Z" fill="#fbc02d"/>
          <circle cx="41" cy="27" r="3" fill="#8d6e63"/><circle cx="56" cy="20" r="3" fill="#8d6e63"/>
          <circle cx="78" cy="27" r="3" fill="#8d6e63"/><circle cx="95" cy="45" r="3" fill="#8d6e63"/></svg>`,
        name: { es: "El racimo de plátanos", ca: "El ramell de plàtans", en: "The banana bunch", cs: "Trs banánů", fr: "Le régime de bananes" },
        fact: { es: "Los plátanos crecen mirando al cielo, buscando la luz. Cada grupito es una mano y cada plátano, un dedo.", ca: "Els plàtans creixen mirant al cel, buscant la llum. Cada grupet és una mà i cada plàtan, un dit.", en: "Bananas grow pointing up at the sky, looking for light. Each little group is a hand and each banana a finger.", cs: "Banány rostou vzhůru k nebi, za světlem. Každé skupince se říká ruka a každému banánu prst.", fr: "Les bananes poussent en regardant le ciel, à la recherche de la lumière. Chaque petit groupe est une main et chaque banane un doigt." } },
      { cat: "frutal", emoji: "🍉", x: 2700, y: 890, size: 2, iw: 120, ih: 82,
        svg: `<svg viewBox="0 0 140 96" width="100%" height="100%">
          <ellipse cx="58" cy="52" rx="52" ry="40" fill="#2e7d32"/>
          <path d="M22 24 Q30 52 22 82 M42 14 Q52 52 42 90 M64 12 Q74 52 64 92 M86 18 Q96 52 86 86 M102 30 Q108 52 102 76" stroke="#1b5e20" stroke-width="7" fill="none" opacity=".85"/>
          <path d="M58 14 Q56 6 62 4" stroke="#33691e" stroke-width="4" fill="none" stroke-linecap="round"/>
          <path d="M138 60 A26 26 0 0 0 112 34 L112 60 Z" fill="#66bb6a"/>
          <path d="M134 58 A21 21 0 0 0 114 38 L114 58 Z" fill="#ef5350"/>
          <circle cx="121" cy="50" r="1.8" fill="#37474f"/><circle cx="128" cy="54" r="1.8" fill="#37474f"/><circle cx="120" cy="56" r="1.8" fill="#37474f"/></svg>`,
        name: { es: "La sandía rayada", ca: "La síndria ratllada", en: "The stripy watermelon", cs: "Pruhovaný meloun", fr: "La pastèque rayée" },
        fact: { es: "La sandía es agua en un 92 por ciento: la fruta piscina del verano. En Japón las cultivan hasta cuadradas.", ca: "La síndria és aigua en un 92 per cent: la fruita piscina de l'estiu. Al Japó les cultiven fins i tot quadrades.", en: "A watermelon is 92 percent water: summer's swimming-pool fruit. In Japan they even grow square ones.", cs: "Meloun je z 92 procent voda: letní bazén mezi ovocem. V Japonsku je pěstují dokonce hranaté.", fr: "La pastèque, c'est 92 pour cent d'eau : le fruit piscine de l'été. Au Japon, on en cultive même des carrées." } },
      { cat: "frutal", emoji: "🍋", x: 2940, y: 570, iw: 110, ih: 120,
        svg: `<svg viewBox="0 0 120 130" width="100%" height="100%">
          <path d="M56 82 L54 122 L66 122 L64 82 Z" fill="#795548"/>
          <circle cx="60" cy="50" r="38" fill="#66a35c"/>
          <circle cx="35" cy="64" r="15" fill="#7cb342"/><circle cx="86" cy="62" r="15" fill="#7cb342"/>
          <ellipse cx="44" cy="40" rx="8" ry="6" fill="#fdd835" transform="rotate(-20 44 40)"/>
          <ellipse cx="74" cy="34" rx="8" ry="6" fill="#fdd835" transform="rotate(15 74 34)"/>
          <ellipse cx="60" cy="60" rx="8" ry="6" fill="#ffee58" transform="rotate(-10 60 60)"/>
          <ellipse cx="88" cy="50" rx="7" ry="5" fill="#ffee58" transform="rotate(20 88 50)"/>
          <circle cx="50" cy="26" r="2.6" fill="#fff"/><circle cx="82" cy="72" r="2.6" fill="#fff"/></svg>`,
        name: { es: "El limonero", ca: "El llimoner", en: "The lemon tree", cs: "Citroník", fr: "Le citronnier" },
        fact: { es: "El limonero es de los árboles más generosos: puede dar flores y limones casi todo el año.", ca: "El llimoner és dels arbres més generosos: pot donar flors i llimones gairebé tot l'any.", en: "The lemon tree is one of the most generous trees: it can give flowers and lemons almost all year round.", cs: "Citroník je jeden z nejštědřejších stromů: květy a citrony umí dávat skoro celý rok.", fr: "Le citronnier est l'un des arbres les plus généreux : il peut donner des fleurs et des citrons presque toute l'année." } },
      { cat: "mercado", emoji: "🌈", x: 3300, y: 560, size: 2, iw: 170, ih: 130,
        svg: `<svg viewBox="0 0 180 138" width="100%" height="100%">
          <rect x="16" y="60" width="148" height="10" fill="#8d6e63"/>
          <rect x="22" y="70" width="10" height="60" fill="#6d4c41"/><rect x="148" y="70" width="10" height="60" fill="#6d4c41"/>
          <path d="M10 60 L20 24 L160 24 L170 60 Z" fill="#ef5350"/>
          ${[0, 1, 2, 3].map(i => `<path d="M${(28 + i * 34)} 60 L${(35 + i * 32)} 24 L${(52 + i * 32)} 24 L${(48 + i * 34)} 60 Z" fill="#fff"/>`).join("")}
          <path d="M10 60 Q45 74 90 60 Q135 74 170 60 L170 66 Q135 80 90 66 Q45 80 10 66 Z" fill="#e53935"/>
          <rect x="26" y="80" width="128" height="44" rx="4" fill="#a1887f"/>
          ${[["#e53935", 90], ["#fb8c00", 98], ["#fdd835", 106], ["#66bb6a", 114]].map(r => `${[40, 58, 76, 94, 112, 130].map(x => `<circle cx="${x}" cy="${r[1]}" r="5" fill="${r[0]}"/>`).join("")}`).join("")}
          ${[46, 66, 86, 106, 126].map(x => `<circle cx="${x}" cy="122" r="5" fill="#8e24aa"/>`).join("")}</svg>`,
        name: { es: "La parada del arcoíris", ca: "La parada de l'arc de Sant Martí", en: "The rainbow stall", cs: "Duhový stánek", fr: "L'étal arc-en-ciel" },
        fact: { es: "Frutas y verduras ordenadas por colores: rojo, naranja, amarillo, verde y morado. Comer de todos los colores es comerse un arcoíris.", ca: "Fruites i verdures ordenades per colors: vermell, taronja, groc, verd i morat. Menjar de tots els colors és menjar-se un arc de Sant Martí.", en: "Fruits and veggies sorted by colour: red, orange, yellow, green and purple. Eating every colour is eating a rainbow.", cs: "Ovoce a zelenina srovnané podle barev: červená, oranžová, žlutá, zelená a fialová. Jíst všechny barvy znamená sníst duhu.", fr: "Fruits et légumes rangés par couleurs : rouge, orange, jaune, vert et violet. Manger de toutes les couleurs, c'est manger un arc-en-ciel." } },
      { cat: "mercado", emoji: "⚖️", x: 3560, y: 800, iw: 76, ih: 78,
        svg: `<svg viewBox="0 0 110 112" width="100%" height="100%">
          <rect x="52" y="14" width="6" height="70" fill="#8d6e63"/>
          <path d="M30 92 L80 92 L74 84 L36 84 Z" fill="#6d4c41"/>
          <rect x="18" y="12" width="74" height="6" rx="3" fill="#a1887f"/>
          <circle cx="55" cy="10" r="5" fill="#ffb300"/>
          <path d="M24 18 L16 44 M24 18 L32 44" stroke="#8d6e63" stroke-width="2.4"/>
          <path d="M12 44 Q24 56 36 44 Z" fill="#bcaaa4"/>
          <path d="M86 18 L78 56 M86 18 L94 56" stroke="#8d6e63" stroke-width="2.4"/>
          <path d="M74 56 Q86 68 98 56 Z" fill="#bcaaa4"/>
          <circle cx="20" cy="42" r="5" fill="#e53935"/><circle cx="28" cy="42" r="5" fill="#fb8c00"/>
          <rect x="82" y="46" width="9" height="10" rx="1.6" fill="#546e7a"/></svg>`,
        name: { es: "La balanza antigua", ca: "La balança antiga", en: "The old scale", cs: "Stará váha", fr: "La vieille balance" },
        fact: { es: "Antes se pesaba con dos platillos: fruta en uno, pesas de hierro en el otro. Cuando quedaban igualados, ¡ese era el peso!", ca: "Abans es pesava amb dos platets: fruita en un, peses de ferro a l'altre. Quan quedaven igualats, aquell era el pes!", en: "Long ago you weighed with two pans: fruit in one, iron weights in the other. When they balanced, that was the weight!", cs: "Dřív se vážilo na dvou miskách: ovoce na jedné, železná závaží na druhé. Když se vyrovnaly, to byla ta správná váha!", fr: "Avant, on pesait avec deux plateaux : les fruits dans l'un, des poids en fer dans l'autre. Quand ils s'équilibraient, c'était le poids !" } },
      { cat: "mercado", emoji: "🧺", x: 3820, y: 920, iw: 78, ih: 62,
        svg: `<svg viewBox="0 0 110 88" width="100%" height="100%">
          <circle cx="34" cy="30" r="11" fill="#e53935"/><path d="M34 20 Q33 14 37 12" stroke="#33691e" stroke-width="2.6" fill="none"/>
          <circle cx="56" cy="24" r="11" fill="#fb8c00"/>
          <circle cx="78" cy="30" r="10" fill="#fdd835"/>
          <circle cx="45" cy="36" r="7" fill="#8e24aa"/><circle cx="55" cy="40" r="7" fill="#7b1fa2"/><circle cx="65" cy="36" r="7" fill="#8e24aa"/>
          <path d="M12 40 L98 40 L88 82 Q55 90 22 82 Z" fill="#c49a6c"/>
          <path d="M16 52 L94 52 M19 64 L91 64 M23 76 L87 76" stroke="#8d6e63" stroke-width="3"/>
          <path d="M12 40 L98 40" stroke="#8d6e63" stroke-width="5"/>
          <path d="M30 40 Q55 6 80 40" stroke="#8d6e63" stroke-width="5" fill="none"/></svg>`,
        name: { es: "La cesta de temporada", ca: "El cistell de temporada", en: "The seasonal basket", cs: "Sezonní košík", fr: "Le panier de saison" },
        fact: { es: "Cada estación tiene sus frutas: fresas en primavera, sandía en verano, uvas en otoño y naranjas en invierno. ¡La naturaleza sirve los platos por turnos!", ca: "Cada estació té les seves fruites: maduixes a la primavera, síndria a l'estiu, raïm a la tardor i taronges a l'hivern. La natura serveix els plats per torns!", en: "Every season has its fruits: strawberries in spring, watermelon in summer, grapes in autumn and oranges in winter. Nature serves its dishes in turns!", cs: "Každé roční období má své ovoce: jahody na jaře, meloun v létě, hrozny na podzim a pomeranče v zimě. Příroda servíruje po řadě!", fr: "Chaque saison a ses fruits : fraises au printemps, pastèque en été, raisin en automne et oranges en hiver. La nature sert les plats à tour de rôle !" } },
      { cat: "mercado", emoji: "🥤", x: 4080, y: 620, iw: 60, ih: 74,
        svg: `<svg viewBox="0 0 90 112" width="100%" height="100%">
          <path d="M58 22 L78 6" stroke="#ef5350" stroke-width="6" stroke-linecap="round"/>
          <path d="M24 26 L66 26 L60 100 Q45 108 30 100 Z" fill="#e3f2fd" opacity=".9"/>
          <path d="M27 42 L63 42 L59 96 Q45 103 31 96 Z" fill="#ffa726"/>
          <circle cx="38" cy="60" r="3" fill="#ffe0b2"/><circle cx="50" cy="72" r="3" fill="#ffe0b2"/><circle cx="44" cy="86" r="2.4" fill="#ffe0b2"/>
          <path d="M60 30 A14 14 0 0 1 74 44 L60 44 Z" fill="#fb8c00"/>
          <path d="M62 32 A11 11 0 0 1 72 42 L62 42 Z" fill="#ffcc80"/>
          <circle cx="18" cy="82" r="14" fill="#fb8c00"/>
          ${[0, 60, 120, 180, 240, 300].map(a => `<line x1="18" y1="82" x2="${(18 + 11 * Math.cos(a * Math.PI / 180)).toFixed(1)}" y2="${(82 + 11 * Math.sin(a * Math.PI / 180)).toFixed(1)}" stroke="#ffcc80" stroke-width="2"/>`).join("")}</svg>`,
        name: { es: "El zumo recién hecho", ca: "El suc acabat de fer", en: "The freshly made juice", cs: "Čerstvá šťáva", fr: "Le jus tout frais" },
        fact: { es: "Para llenar un vaso de zumo hacen falta dos o tres naranjas. Recién exprimido es cuando más rico está y más vitaminas tiene.", ca: "Per omplir un got de suc calen dues o tres taronges. Acabat d'esprémer és quan és més bo i té més vitamines.", en: "It takes two or three oranges to fill one glass of juice. Freshly squeezed is when it tastes best and has the most vitamins.", cs: "Na jednu sklenici šťávy jsou potřeba dva nebo tři pomeranče. Čerstvě vymačkaná chutná nejlíp a má nejvíc vitamínů.", fr: "Pour remplir un verre de jus, il faut deux ou trois oranges. Fraîchement pressé, c'est là qu'il est le meilleur et le plus riche en vitamines." } }
    ],
    /* el escenario: la huerta entera, del semillero al mercado */
    deco: function (e) {
      let s = "";
      const PISO = 986;
      /* las cajas de los iconos se sacan del propio mapa: así la huerta les
         deja aire alrededor aunque cambien de sitio */
      const cajas = (e && e.pois ? e.pois : []).map(p => {
        const w = p.iw || (p.size || 1) * 44, h = p.ih || (p.size || 1) * 44;
        return [p.x - w / 2 - 10, p.y - h / 2 - 10, w + 20, h + 46];
      });
      const libre = (x, y, w, h) => !cajas.some(c => x < c[0] + c[2] && x + w > c[0] && y < c[1] + c[3] && y + h > c[1]);
      /* numeros repetibles: la huerta sale igual en cada partida */
      let sem = 7717;
      const az = () => (sem = sem * 16807 % 2147483647) / 2147483647;
      /* ---------- DEGRADADOS (ids con prefijo frtX) ---------- */
      s += `<defs>
        <radialGradient id="frtXSol" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fff59d"/><stop offset="100%" stop-color="#ffca28"/></radialGradient>
        <linearGradient id="frtXTierra" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8d6144"/><stop offset="100%" stop-color="#513526"/></linearGradient>
        <linearGradient id="frtXCampo" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#b3d67a"/><stop offset="100%" stop-color="#6b9b3c"/></linearGradient>
        <linearGradient id="frtXCristal" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="rgba(255,255,255,.75)"/><stop offset="45%" stop-color="rgba(178,235,242,.5)"/><stop offset="100%" stop-color="rgba(255,255,255,.66)"/></linearGradient>
        <linearGradient id="frtXTeja" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e07b52"/><stop offset="100%" stop-color="#b6543a"/></linearGradient>
        <linearGradient id="frtXCamino" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#dcc39a"/><stop offset="100%" stop-color="#b79a6c"/></linearGradient>
        <linearGradient id="frtXTabla" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#c9a978"/><stop offset="100%" stop-color="#a5814f"/></linearGradient>
      </defs>`;
      /* ---------- PIEZAS QUE SE REPITEN ---------- */
      /* un bancal: caballón de tierra apoyado en su ribazo de hierba, con
         tabla de contención delante para que se vea dónde toca el suelo */
      const bancal = (x0, x1, y, alto) => {
        const mx = ((x0 + x1) / 2).toFixed(0), h = alto * 1.9;
        const ab = (y + h).toFixed(0), rx = ((x1 - x0) / 2 + 46).toFixed(0);
        /* el ribazo: la hierba se levanta y abraza el bancal por detrás y por los lados */
        let o = `<ellipse cx="${mx}" cy="${(y + h * .74).toFixed(0)}" rx="${rx}" ry="${(h * .78).toFixed(0)}" fill="#9ec769"/>
          <ellipse cx="${mx}" cy="${(y + h * .96).toFixed(0)}" rx="${(+rx - 18)}" ry="${(h * .52).toFixed(0)}" fill="#7ba946"/>
          <ellipse cx="${mx}" cy="${(y + h * 1.18).toFixed(0)}" rx="${(+rx - 34)}" ry="${(h * .3).toFixed(0)}" fill="#5f8c33" opacity=".45"/>
          <path d="M${x0} ${y} Q${mx} ${(y - alto * .55).toFixed(0)} ${x1} ${y} L${x1} ${ab} Q${mx} ${(y + h * 1.24).toFixed(0)} ${x0} ${ab} Z" fill="url(#frtXTierra)"/>
          <path d="M${x0} ${y} Q${mx} ${(y - alto * .55).toFixed(0)} ${x1} ${y} L${x1} ${(y + alto * .5).toFixed(0)} Q${mx} ${(y - alto * .05).toFixed(0)} ${x0} ${(y + alto * .5).toFixed(0)} Z" fill="#b08957"/>`;
        for (let x = x0 + 40; x < x1 - 30; x += 88) o += `<path d="M${x} ${(y + alto * .95).toFixed(0)} q24 -10 48 0" stroke="rgba(60,36,22,.35)" stroke-width="5" fill="none" stroke-linecap="round"/>`;
        for (let x = x0 + 24; x < x1 - 20; x += 116) o += `<ellipse cx="${x}" cy="${(y + alto * .3).toFixed(0)}" rx="17" ry="7" fill="#8d6144" opacity=".7"/>`;
        /* la tabla de contención y sus dos estacas: la línea donde el bancal pisa */
        o += `<path d="M${x0 - 4} ${(y + h * .68).toFixed(0)} Q${mx} ${(y + h * 1.06).toFixed(0)} ${x1 + 4} ${(y + h * .68).toFixed(0)} L${x1 + 4} ${(y + h * .9).toFixed(0)} Q${mx} ${(y + h * 1.28).toFixed(0)} ${x0 - 4} ${(y + h * .9).toFixed(0)} Z" fill="#a97f52"/>
          <path d="M${x0 - 4} ${(y + h * .68).toFixed(0)} Q${mx} ${(y + h * 1.06).toFixed(0)} ${x1 + 4} ${(y + h * .68).toFixed(0)}" stroke="#c9a978" stroke-width="4" fill="none"/>
          <rect x="${x0 - 10}" y="${(y + h * .62).toFixed(0)}" width="12" height="${(h * .42).toFixed(0)}" rx="4" fill="#8d6e63"/>
          <rect x="${x1 - 2}" y="${(y + h * .62).toFixed(0)}" width="12" height="${(h * .42).toFixed(0)}" rx="4" fill="#8d6e63"/>`;
        /* unas matas de hierba pegadas al pie, para que no quede un canto limpio */
        for (let x = x0 - 12; x < x1 + 18; x += 74) {
          const gy = (y + h * (1.02 + (x % 3) * .04)).toFixed(0);
          o += `<path d="M${x} ${gy} q-6 -15 -12 -19 M${x} ${gy} q0 -18 3 -23 M${x} ${gy} q7 -14 13 -17" stroke="#5f9b30" stroke-width="4" fill="none" stroke-linecap="round"/>`;
        }
        return o;
      };
      /* una loma de hierba con su alcorque: es donde se plantan los frutales */
      const loma = (x, w, y) => `<ellipse cx="${x}" cy="${y + 22}" rx="${w / 2 + 30}" ry="${(w / 9).toFixed(0)}" fill="#5f8c33" opacity=".5"/>
        <path d="M${x - w / 2} ${y + 16} Q${x} ${y - 26} ${x + w / 2} ${y + 16} Q${x} ${y + 44} ${x - w / 2} ${y + 16} Z" fill="#8fbc5c"/>
        <ellipse cx="${x}" cy="${y + 10}" rx="${(w / 3).toFixed(0)}" ry="${(w / 13).toFixed(0)}" fill="#8d6144"/>
        <ellipse cx="${x}" cy="${y + 8}" rx="${(w / 3.6).toFixed(0)}" ry="${(w / 17).toFixed(0)}" fill="#b08957"/>`;
      /* una caja de fruta de madera: primero el género que asoma por el borde y
         encima los listones, para que se vea llena y no un rectángulo de color */
      const caja = (x, y, w, h, c) => `<g><g fill="${c}">
        <circle cx="${(x + w * .28).toFixed(0)}" cy="${y - 2}" r="9"/><circle cx="${(x + w * .56).toFixed(0)}" cy="${y - 5}" r="10"/><circle cx="${(x + w * .82).toFixed(0)}" cy="${y - 1}" r="8"/></g>
        <g fill="rgba(255,255,255,.34)"><circle cx="${(x + w * .25).toFixed(0)}" cy="${y - 6}" r="3"/><circle cx="${(x + w * .53).toFixed(0)}" cy="${y - 9}" r="3.4"/></g>
        <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="#c8a24a"/>
        <rect x="${x + 5}" y="${y + 5}" width="${w - 10}" height="${(h - 10).toFixed(0)}" rx="3" fill="${c}"/>
        <g fill="rgba(255,255,255,.3)"><rect x="${x + 5}" y="${(y + h * .36).toFixed(0)}" width="${w - 10}" height="4" rx="2"/><rect x="${x + 5}" y="${(y + h * .68).toFixed(0)}" width="${w - 10}" height="4" rx="2"/></g>
        <rect x="${x + 1}" y="${y}" width="${w - 2}" height="5" rx="2.5" fill="#d9bb7a"/></g>`;
      /* un mostrador del mercado: tablero arriba y faldón hasta el suelo */
      const mostrador = (x, w, y) => `<rect x="${x - w / 2}" y="${y}" width="${w}" height="18" rx="6" fill="#c8a24a"/>
        <rect x="${x - w / 2 + 8}" y="${y + 18}" width="${w - 16}" height="${PISO - y - 18}" rx="4" fill="#a97f52"/>
        <g stroke="rgba(255,255,255,.28)" stroke-width="3">${[0, 1, 2, 3].map(i => y + 44 + i * 26 < PISO - 10 ? `<path d="M${x - w / 2 + 8} ${y + 44 + i * 26} h${w - 16}"/>` : "").join("")}</g>`;
      /* un puesto alto: tablero, faldón de tela a rayas y cajas al pie.
         Es para el género que se expone por encima del mostrador normal. */
      const puestoAlto = (x, w, y) => {
        const x0 = x - w / 2, x1 = x + w / 2;
        /* el tablero de arriba y las dos patas, con su travesaño */
        let o = `<rect x="${x0 - 10}" y="${y}" width="${w + 20}" height="18" rx="6" fill="url(#frtXTabla)"/>
          <rect x="${x0 + 8}" y="${y + 18}" width="16" height="${PISO - y - 18}" rx="5" fill="#a97f52"/>
          <rect x="${x1 - 24}" y="${y + 18}" width="16" height="${PISO - y - 18}" rx="5" fill="#a97f52"/>
          <rect x="${x0 + 8}" y="${PISO - 104}" width="${w - 32}" height="12" rx="4" fill="#8d6e63"/>`;
        /* el faldón de tela a rayas que cuelga del tablero */
        for (let i = 0; i * 28 < w + 12; i++) {
          o += `<path d="M${x0 - 6 + i * 28} ${y + 18} h14 l3 86 h-17 Z" fill="${i % 2 ? "#ef5350" : "#fdfaf4"}" opacity=".92"/>`;
        }
        o += `<path d="M${x0 - 8} ${y + 100} H${x1 + 8} l2 12 H${x0 - 10} Z" fill="#c25f4a"/>`;
        /* cajas al pie, como en cualquier parada */
        o += `<g fill="rgba(120,96,58,.22)"><ellipse cx="${x0 + 8}" cy="${PISO - 2}" rx="46" ry="10"/><ellipse cx="${x1 - 8}" cy="${PISO - 2}" rx="46" ry="10"/></g>`;
        /* la caja de arriba apoya entera sobre la de abajo, no en el aire */
        o += caja(x0 - 30, PISO - 50, 78, 46, "#66bb6a") + caja(x1 - 48, PISO - 50, 78, 46, "#ffb300") + caja(x0 - 22, PISO - 92, 62, 42, "#ab47bc");
        return o;
      };
      /* ---------- EL CIELO DEL CAMPO ---------- */
      s += `<g transform="translate(230 150)">
        <g><animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="70s" repeatCount="indefinite"/>
        ${[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(a => `<line x1="0" y1="0" x2="${(105 * Math.cos(a * Math.PI / 180)).toFixed(0)}" y2="${(105 * Math.sin(a * Math.PI / 180)).toFixed(0)}" stroke="rgba(255,213,79,.5)" stroke-width="7" stroke-linecap="round"/>`).join("")}</g>
        <circle r="72" fill="url(#frtXSol)"/></g>`;
      const nube = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})"><ellipse cx="0" cy="0" rx="92" ry="28" fill="rgba(255,255,255,.85)"/><ellipse cx="-56" cy="10" rx="46" ry="19" fill="rgba(255,255,255,.75)"/><ellipse cx="52" cy="11" rx="52" ry="21" fill="rgba(255,255,255,.75)"/><ellipse cx="-6" cy="-21" rx="48" ry="24" fill="#fff"/></g>`;
      [[830, 136, .95, 60, 54], [1740, 172, .8, -48, 62], [2620, 128, .85, 52, 48], [3480, 160, .9, -56, 58], [4060, 124, .78, 44, 50]].forEach(n => {
        s += `<g><animateTransform attributeName="transform" type="translate" values="0 0;${n[3]} 0;0 0" dur="${n[4]}s" repeatCount="indefinite"/>${nube(n[0], n[1], n[2])}</g>`;
      });
      [[1180, 210], [1320, 176], [2460, 214], [3560, 196]].forEach(p => {
        s += `<path d="M${p[0]} ${p[1]} q-11 -10 -23 -6 M${p[0]} ${p[1]} q11 -10 23 -6" stroke="rgba(90,110,80,.45)" stroke-width="3.2" fill="none" stroke-linecap="round"/>`;
      });
      /* ---------- EL FONDO: lomas, franjas de siega y la hilera de cipreses ---------- */
      s += `<path d="M-20 372 Q320 300 680 344 Q1040 386 1400 330 Q1760 276 2120 336 Q2480 392 2840 340 Q3240 288 3600 340 Q3940 386 4220 336 L4220 460 L-20 460 Z" fill="#8fbc5c" opacity=".55"/>
        <path d="M-20 460 Q700 428 1420 456 Q2140 484 2860 452 Q3540 424 4220 452 L4220 1100 L-20 1100 Z" fill="url(#frtXCampo)"/>`;
      s += `<g fill="rgba(255,255,255,.09)">${[[470, 26], [530, 32], [610, 38], [710, 46], [840, 56], [1000, 68]].map(f => `<path d="M-20 ${f[0]} Q2100 ${f[0] - 16} 4220 ${f[0]} L4220 ${f[0] + f[1]} Q2100 ${f[0] + f[1] - 16} -20 ${f[0] + f[1]} Z"/>`).join("")}</g>`;
      /* la hilera de cipreses del fondo: se va apagando por los dos extremos
         para que no arranque ni se acabe de golpe */
      for (let x = 1760; x < 3320; x += 60) {
        const t = Math.max(0, Math.min((x - 1760) / 260, (3320 - x) / 260, 1));
        const k = .3 + .36 * t;
        s += `<g transform="translate(${x} 414) scale(${k.toFixed(3)})" opacity="${(.42 + .36 * t).toFixed(2)}"><path d="M0 0 q-15 -14 -15 -46 q0 -46 15 -62 q15 16 15 62 q0 32 -15 46 Z" fill="#3f6b32"/></g>`;
      }
      /* el seto del fondo del lado de la huerta: sin él ese tercio del horizonte
         se quedaba pelado. Se apaga poco a poco donde empiezan los cipreses */
      for (let x = -40; x < 1800; x += 48) {
        const t = Math.max(0, Math.min(1, (1770 - x) / 260));
        if (t <= 0) continue;
        const r = 14 + 5 * Math.sin(x * .07);
        s += `<ellipse cx="${x}" cy="${(414 - r * .35).toFixed(1)}" rx="${(r + 13).toFixed(1)}" ry="${r.toFixed(1)}" fill="#4c8b3f" opacity="${(.62 * t).toFixed(2)}"/>`;
      }
      /* unos frutales pequeñitos del fondo también a la izquierda, para que el
         huerto tenga vecinos y el horizonte no se corte por la mitad del mapa */
      const frutalFondo = (x, base, k, op) => `<g opacity="${op}"><ellipse cx="${x}" cy="${base}" rx="${(34 * k).toFixed(0)}" ry="${(7 * k).toFixed(0)}" fill="#5f8c33" opacity=".5"/>
        <rect x="${(x - 7 * k).toFixed(0)}" y="${(base - 48 * k).toFixed(0)}" width="${(14 * k).toFixed(0)}" height="${(48 * k).toFixed(0)}" fill="#6d4c41"/>
        <circle cx="${x}" cy="${(base - 82 * k).toFixed(0)}" r="${(52 * k).toFixed(0)}" fill="#4c8b3f"/>
        <circle cx="${(x - 22 * k).toFixed(0)}" cy="${(base - 92 * k).toFixed(0)}" r="${(6 * k + 2).toFixed(0)}" fill="#ef5350"/><circle cx="${(x + 20 * k).toFixed(0)}" cy="${(base - 72 * k).toFixed(0)}" r="${(6 * k + 2).toFixed(0)}" fill="#ffb300"/></g>`;
      [[104, .34], [238, .3], [366, .36], [478, .3], [944, .32], [1062, .38],
        [1186, .3], [1310, .34]].forEach(t => s += frutalFondo(t[0], 448, t[1], ".6"));
      /* la hilera de plano medio: queda entre los frutales del fondo y los del
         primer plano, que es lo que le faltaba al campo para leerse por planos */
      [1848, 1968, 2088, 2208, 2318, 2648, 2768, 3468, 3588, 3708,
        3828, 3948, 4068, 4180].forEach((x, i) => s += frutalFondo(x, 528, .62 + (i % 3) * .04, ".78"));
      /* ---------- ZONA 1: LA HUERTA, CON SUS BANCALES EN TERRAZA ---------- */
      /* cada bancal cae justo debajo de sus verduras, para que ninguna quede en el aire */
      s += bancal(540, 900, 412, 28)      /* el guisante, arriba del todo */
        + bancal(300, 660, 570, 30)       /* el tomate */
        + bancal(1240, 1620, 662, 32)     /* la lechuga */
        + bancal(760, 1120, 788, 36)      /* el brócoli */
        + bancal(60, 520, 850, 40)        /* la zanahoria */
        + bancal(980, 1420, 928, 44);     /* la calabaza, en primera fila */
      /* dos bancales más, para que la huerta parezca de verdad. No llevan punto
         encima, pero sí siembra: pelados se leían como un hueco del mapa */
      s += bancal(1180, 1500, 500, 26) + bancal(120, 420, 706, 30);
      const sembrado = (x0, x1, y, alto, paso) => {
        let o = "";
        for (let x = x0 + 26; x < x1 - 18; x += paso) {
          const gy = (y + alto * .34 - alto * .62 * Math.sin(Math.PI * (x - x0) / (x1 - x0))).toFixed(0);
          o += `<path d="M${x} ${gy} q-7 -14 -13 -18 M${x} ${gy} q0 -18 3 -23 M${x} ${gy} q8 -13 14 -17" stroke="#66a72e" stroke-width="4.5" fill="none" stroke-linecap="round"/>`;
        }
        return o;
      };
      s += sembrado(1180, 1500, 500, 26, 40) + sembrado(120, 420, 706, 30, 42);
      /* las cañas del guisante: trepan hacia arriba desde su bancal */
      s += `<g><rect x="600" y="232" width="9" height="184" rx="4" fill="#a97f52"/><rect x="792" y="232" width="9" height="184" rx="4" fill="#a97f52"/>
        <rect x="592" y="228" width="217" height="9" rx="4" fill="#a97f52"/>
        <g stroke="#8d9aa6" stroke-width="3">${[0, 1, 2].map(i => `<path d="M600 ${262 + i * 34} H801"/>`).join("")}</g>
        <g stroke="#7cb342" stroke-width="4" fill="none">${[0, 1, 2, 3].map(i => `<path d="M${624 + i * 46} 412 q-9 -52 4 -100 q10 -40 2 -68"/>`).join("")}</g>
        <g fill="#c5e1a5">${[0, 1, 2, 3, 4].map(i => `<ellipse cx="${632 + i * 40}" cy="${272 + (i % 3) * 38}" rx="11" ry="6"/>`).join("")}</g></g>`;
      /* la alambrada del tomate: la mata sube y los tomates cuelgan de los alambres */
      s += `<g><rect x="322" y="424" width="9" height="152" rx="4" fill="#a97f52"/><rect x="632" y="424" width="9" height="152" rx="4" fill="#a97f52"/>
        <g stroke="#8d9aa6" stroke-width="3">${[0, 1, 2].map(i => `<path d="M322 ${450 + i * 34} H641"/>`).join("")}</g>
        <g stroke="#7cb342" stroke-width="4" fill="none">${[0, 1, 2, 3].map(i => `<path d="M${348 + i * 78} 570 q-9 -38 4 -72 q10 -28 2 -50"/>`).join("")}</g>
        <g fill="#e53935">${[[358, 500], [406, 540], [560, 494], [604, 534]].map(t => `<circle cx="${t[0]}" cy="${t[1]}" r="9"/>`).join("")}</g></g>`;
      /* el riego por goteo: mangueras y gotas que caen */
      [[70, 510, 858, 8], [770, 1110, 796, 10], [1250, 1610, 670, 9], [550, 890, 420, 8]].forEach(g => {
        s += `<path d="M${g[0]} ${g[2]} H${g[1]}" stroke="#5d4037" stroke-width="5" stroke-linecap="round" opacity=".55"/>`;
        for (let x = g[0] + 60; x < g[1] - 40; x += 150) {
          if (!libre(x - 6, g[2], 12, 26)) continue;
          s += `<path d="M${x} ${g[2] + 8} q-4 9 0 13 q5 -3 0 -13 Z" fill="#4fc3f7"><animate attributeName="opacity" values="1;.15;1" dur="${(1.6 + (x % 5) * .2).toFixed(1)}s" repeatCount="indefinite"/></path>`;
        }
      });
      /* brotecitos verdes asomando por los caballones */
      for (let i = 0; i < 34; i++) {
        const x = 70 + az() * 1560, y = [420, 508, 578, 670, 714, 796, 858, 936][Math.floor(az() * 8)];
        if (!libre(x - 12, y - 26, 24, 28)) continue;
        s += `<path d="M${x.toFixed(0)} ${y} q-7 -15 -14 -19 M${x.toFixed(0)} ${y} q0 -19 3 -25 M${x.toFixed(0)} ${y} q8 -14 15 -18" stroke="#7cb342" stroke-width="4" fill="none" stroke-linecap="round"/>`;
      }
      /* el tipi de cañas de las judías, en el hueco de la esquina izquierda */
      s += `<g><ellipse cx="212" cy="668" rx="86" ry="18" fill="#5f8c33" opacity=".4"/>
        <g stroke="#c9a978" stroke-width="8" stroke-linecap="round" fill="none">
        <path d="M140 664 L212 512"/><path d="M180 668 L214 512"/><path d="M248 668 L216 512"/><path d="M286 664 L218 512"/></g>
        <path d="M138 584 Q212 566 288 584" stroke="#a97f52" stroke-width="5" fill="none"/>
        <g stroke="#66a72e" stroke-width="5" fill="none" stroke-linecap="round">
        <path d="M150 660 q22 -44 12 -84 q-8 -34 10 -60"/><path d="M198 664 q-14 -46 0 -86 q10 -34 6 -58"/>
        <path d="M244 664 q16 -46 4 -88 q-8 -30 4 -54"/><path d="M280 660 q-20 -42 -8 -84 q8 -30 -4 -56"/></g>
        <g fill="#8bc34a">${[[160, 600], [196, 578], [232, 606], [268, 582], [180, 636], [252, 640]].map(h => `<ellipse cx="${h[0]}" cy="${h[1]}" rx="14" ry="8" transform="rotate(${h[0] % 2 ? -22 : 20} ${h[0]} ${h[1]})"/>`).join("")}</g>
        <g fill="#558b2f">${[[172, 618], [222, 596], [262, 622]].map(v => `<path d="M${v[0]} ${v[1]} q10 16 4 34 q-8 -4 -10 -20 Z"/>`).join("")}</g></g>`;
      /* la hilera de girasoles que separa dos bancales por el medio de la huerta */
      [[962, 690, 1], [1024, 698, .9], [1086, 686, 1.05], [1148, 700, .86]].forEach(gi => {
        const x = gi[0], b = gi[1], k = gi[2], cab = (b - 118 * k).toFixed(0);
        if (!libre(x - 40 * k, +cab - 40 * k, 80 * k, 172 * k)) return;
        s += `<g><ellipse cx="${x}" cy="${b}" rx="${(30 * k).toFixed(0)}" ry="${(8 * k).toFixed(0)}" fill="#5f8c33" opacity=".4"/>
          <path d="M${x} ${b} q${(-8 * k).toFixed(0)} ${(-60 * k).toFixed(0)} ${(2 * k).toFixed(0)} ${(-118 * k).toFixed(0)}" stroke="#5f9b30" stroke-width="${(7 * k).toFixed(1)}" fill="none" stroke-linecap="round"/>
          <ellipse cx="${(x - 22 * k).toFixed(0)}" cy="${(b - 54 * k).toFixed(0)}" rx="${(20 * k).toFixed(0)}" ry="${(11 * k).toFixed(0)}" fill="#7cb342" transform="rotate(-20 ${(x - 22 * k).toFixed(0)} ${(b - 54 * k).toFixed(0)})"/>
          <ellipse cx="${(x + 22 * k).toFixed(0)}" cy="${(b - 78 * k).toFixed(0)}" rx="${(19 * k).toFixed(0)}" ry="${(10 * k).toFixed(0)}" fill="#8bc34a" transform="rotate(22 ${(x + 22 * k).toFixed(0)} ${(b - 78 * k).toFixed(0)})"/>
          <g fill="#fdd835">${[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(a => `<ellipse cx="${(+x + 2 * k + 24 * k * Math.cos(a * Math.PI / 180)).toFixed(1)}" cy="${(+cab + 24 * k * Math.sin(a * Math.PI / 180)).toFixed(1)}" rx="${(13 * k).toFixed(1)}" ry="${(7 * k).toFixed(1)}" transform="rotate(${a} ${(+x + 2 * k + 24 * k * Math.cos(a * Math.PI / 180)).toFixed(1)} ${(+cab + 24 * k * Math.sin(a * Math.PI / 180)).toFixed(1)})"/>`).join("")}</g>
          <circle cx="${(+x + 2 * k).toFixed(0)}" cy="${cab}" r="${(23 * k).toFixed(0)}" fill="#8d6144"/>
          <circle cx="${(+x + 2 * k).toFixed(0)}" cy="${cab}" r="${(15 * k).toFixed(0)}" fill="#6d4c41"/></g>`;
      });
      /* el espantapájaros, que saluda desde el medio de la huerta */
      s += `<g><ellipse cx="1550" cy="980" rx="52" ry="12" fill="#5f8c33" opacity=".4"/>
        <rect x="1544" y="760" width="12" height="220" rx="5" fill="#a97f52"/>
        <rect x="1498" y="796" width="106" height="10" rx="5" fill="#a97f52"/>
        <g><animateTransform attributeName="transform" type="rotate" values="-2 1550 760;2 1550 760;-2 1550 760" dur="6s" repeatCount="indefinite"/>
        <path d="M1516 802 h70 l12 84 h-94 Z" fill="#e57373"/>
        <path d="M1516 802 h70 l3 20 h-76 Z" fill="#ef9a9a"/>
        <circle cx="1550" cy="760" r="30" fill="#f5d76e"/>
        <path d="M1518 752 q32 -26 64 0 q-4 -16 -32 -18 q-28 2 -32 18 Z" fill="#c8a24a"/>
        <path d="M1514 754 h72 v9 h-72 Z" fill="#c8a24a"/>
        <g fill="#5d4037"><circle cx="1540" cy="760" r="3.4"/><circle cx="1560" cy="760" r="3.4"/></g>
        <path d="M1540 772 q10 8 20 0" stroke="#5d4037" stroke-width="3" fill="none" stroke-linecap="round"/>
        <g stroke="#c8a24a" stroke-width="4" stroke-linecap="round"><path d="M1502 806 l-12 12 M1502 812 l-14 4 M1600 806 l12 12 M1600 812 l14 4"/></g></g></g>`;
      /* la regadera, apoyada de lleno sobre el bancal: antes se quedaba a medias
         en el canto y parecía flotar sobre la hierba */
      s += `<g transform="translate(196 662)">
        <path d="M18 22 L74 22 L70 66 Q46 74 22 66 Z" fill="#78909c"/>
        <path d="M26 22 Q46 2 66 22" stroke="#607d8b" stroke-width="7" fill="none"/>
        <path d="M18 30 L-6 12 L-2 6 L22 24 Z" fill="#78909c"/><circle cx="-6" cy="9" r="7" fill="#90a4ae"/>
        ${[[-16, 26], [-24, 40], [-10, 44]].map(g => `<path d="M${g[0]} ${g[1]} q-2 8 2 10 q5 -2 2 -10 Z" fill="#4fc3f7"><animate attributeName="opacity" values="1;.2;1" dur="1.6s" repeatCount="indefinite"/></path>`).join("")}</g>`;
      /* ---------- PASO 1: EL INVERNADERO, LA PUERTA DE CRISTAL AL FRUTAL ---------- */
      /* primero el zócalo de obra: así el invernadero pisa el campo y no flota */
      /* el zócalo termina en rampa por los dos lados: antes se cortaba en seco
         contra la hierba y se veía el canto recto */
      s += `<ellipse cx="1570" cy="486" rx="166" ry="24" fill="#5f8c33" opacity=".4"/>
        <path d="M1382 486 Q1408 462 1430 462 H1712 Q1738 462 1762 488 Q1570 502 1382 486 Z" fill="#b0aca6"/>
        <path d="M1394 476 Q1414 462 1430 462 H1712 Q1734 462 1750 478 Q1570 490 1394 476 Z" fill="#cfcac2"/>`;
      /* el invernadero, algo más bajo que antes para que el manzano gane tamaño */
      s += `<g transform="translate(202.6 69.8) scale(0.86)"><path d="M1440 470 V346 L1590 280 L1740 346 V470 Z" fill="url(#frtXCristal)"/>
        <path d="M1440 346 L1590 280 L1740 346" stroke="#cfd8dc" stroke-width="8" fill="none" stroke-linejoin="round"/>
        <g stroke="rgba(255,255,255,.85)" stroke-width="5">${[352, 392, 432].map(y => `<path d="M1440 ${y} H1740"/>`).join("")}${[1440, 1490, 1540, 1640, 1690, 1740].map(x => `<path d="M${x} ${x < 1590 ? (346 - (x - 1440) * .44).toFixed(0) : (346 - (1740 - x) * .44).toFixed(0)} V470"/>`).join("")}</g>
        <path d="M1590 280 V470" stroke="#cfd8dc" stroke-width="6"/>
        <path d="M1462 330 L1512 308 L1524 322 L1474 344 Z" fill="rgba(255,255,255,.8)"><animate attributeName="opacity" values=".8;.35;.8" dur="7s" repeatCount="indefinite"/></path>
        <path d="M1556 470 V378 h68 v92 Z" fill="rgba(120,167,46,.35)" stroke="#cfd8dc" stroke-width="5"/>
        <g fill="#66a72e" opacity=".55"><ellipse cx="1472" cy="450" rx="24" ry="15"/><ellipse cx="1524" cy="456" rx="24" ry="15"/><ellipse cx="1660" cy="452" rx="24" ry="15"/><ellipse cx="1712" cy="458" rx="22" ry="14"/></g></g>`;
      /* unas macetas al pie del cristal. Las dos de la derecha estaban justo
         detrás del manzano y no se veían: ahora se reparten por el zócalo */
      s += `<g>${[[1412, 474, 1], [1624, 478, .9], [1662, 482, .74]].map(m => `<g transform="translate(${m[0]} ${m[1]}) scale(${m[2]})">
        <ellipse cx="0" cy="30" rx="24" ry="7" fill="#5f8c33" opacity=".4"/>
        <path d="M-18 0 H18 L13 28 Q0 33 -13 28 Z" fill="#c8703d"/><rect x="-20" y="-5" width="40" height="8" rx="3" fill="#d98a5a"/>
        <circle cx="-7" cy="-13" r="12" fill="#66a72e"/><circle cx="9" cy="-10" r="10" fill="#7cb342"/><circle cx="1" cy="-22" r="9" fill="#8bc34a"/></g>`).join("")}</g>`;
      /* dos semilleros en el prado, ya fuera del cristal: se sale al campo abierto */
      [[1812, 548], [1990, 572]].forEach(sm => {
        s += `<g><ellipse cx="${sm[0] + 70}" cy="${sm[1] + 50}" rx="88" ry="14" fill="#5f8c33" opacity=".4"/>
          <rect x="${sm[0]}" y="${sm[1]}" width="140" height="46" rx="5" fill="#a97f52"/>
          <rect x="${sm[0] + 4}" y="${sm[1] + 40}" width="132" height="10" rx="4" fill="#8d6e63"/>
          <path d="M${sm[0] + 4} ${sm[1]} L${sm[0] + 72} ${sm[1] - 26} L${sm[0] + 136} ${sm[1]} Z" fill="rgba(255,255,255,.6)"/>
          <path d="M${sm[0] + 4} ${sm[1]} L${sm[0] + 72} ${sm[1] - 26} L${sm[0] + 136} ${sm[1]}" stroke="#cfd8dc" stroke-width="4" fill="none" stroke-linejoin="round"/>
          <g fill="#66a72e" opacity=".7"><circle cx="${sm[0] + 32}" cy="${sm[1] + 24}" r="9"/><circle cx="${sm[0] + 68}" cy="${sm[1] + 28}" r="8"/><circle cx="${sm[0] + 106}" cy="${sm[1] + 24}" r="9"/></g></g>`;
      });
      /* ---------- ZONA 2: EL FRUTAL, CON SUS LOMAS Y SU HILERA DE FONDO ---------- */
      /* el frutal lejano: muchos árboles pequeños, para que los del primer
         plano se lean como los grandes de verdad */
      [[1840, .44], [1966, .5], [2094, .42], [2222, .54], [2356, .46], [2488, .52],
        [2622, .44], [2758, .5], [2890, .42], [3018, .48], [3146, .4], [3282, .44],
        [3420, .38], [3560, .44], [3706, .4], [3848, .46], [3990, .38], [4130, .42]].forEach(t => {
        const x = t[0], k = t[1], base = (404 + 44 * k).toFixed(0);
        s += `<g opacity=".62"><ellipse cx="${x}" cy="${base}" rx="${(34 * k).toFixed(0)}" ry="${(7 * k).toFixed(0)}" fill="#5f8c33" opacity=".5"/>
          <rect x="${(x - 7 * k).toFixed(0)}" y="${(404 - 4 * k).toFixed(0)}" width="${(14 * k).toFixed(0)}" height="${(48 * k).toFixed(0)}" fill="#6d4c41"/>
          <circle cx="${x}" cy="${(404 - 38 * k).toFixed(0)}" r="${(52 * k).toFixed(0)}" fill="#4c8b3f"/>
          <circle cx="${(x - 22 * k).toFixed(0)}" cy="${(404 - 48 * k).toFixed(0)}" r="${(6 * k + 2).toFixed(0)}" fill="#ef5350"/><circle cx="${(x + 20 * k).toFixed(0)}" cy="${(404 - 28 * k).toFixed(0)}" r="${(6 * k + 2).toFixed(0)}" fill="#ffb300"/></g>`;
      });
      /* la loma de cada frutal: el manzano, el naranjo, el limonero y el platanero */
      s += loma(1740, 260, 574) + loma(2220, 224, 704) + loma(2940, 250, 608) + loma(2482, 214, 708);
      /* el hijuelo, plantado en el mismo alcorque y por detrás de la madre: el
         plátano crece en mata y así el tronco alto no parece un poste solo */
      s += `<g><ellipse cx="2508" cy="719" rx="30" ry="8" fill="#8d6144" opacity=".75"/>
        <path d="M2496 718 q-6 -66 8 -124 h13 q12 58 7 124 Z" fill="#7d9b45"/>
        <path d="M2504 712 q-4 -58 8 -114" stroke="#5f7c33" stroke-width="3" fill="none"/>
        <g fill="#5f9b30"><path d="M2502 598 q-50 -16 -72 14 q42 14 72 -2 Z"/><path d="M2512 592 q50 -24 76 6 q-44 17 -76 2 Z"/>
        <path d="M2506 646 q-44 6 -60 40 q40 -4 60 -22 Z"/><path d="M2516 642 q46 8 58 44 q-42 -6 -58 -26 Z"/></g>
        <g stroke="#4e8228" stroke-width="2.6" fill="none"><path d="M2502 598 q-36 -4 -56 12 M2512 592 q34 -10 58 5"/></g></g>`;
      /* el platanero: su falso tronco de vainas y sus hojas grandes, que sostienen el
         racimo. Se planta más atrás que antes para no comerse a los demás frutales */
      s += `<g><path d="M2446 718 q-8 -142 14 -278 h22 q22 134 14 278 Z" fill="#7d9b45"/>
        <path d="M2456 708 q-6 -134 12 -260 M2472 708 q6 -134 -8 -260" stroke="#5f7c33" stroke-width="4" fill="none"/>
        <g fill="#5f9b30"><path d="M2462 424 q-82 -30 -120 20 q72 22 120 -5 Z"/><path d="M2470 414 q78 -40 126 5 q-73 29 -126 3 Z"/>
        <path d="M2464 512 q-72 5 -98 56 q66 -5 99 -36 Z"/><path d="M2472 506 q74 10 92 63 q-68 -8 -94 -39 Z"/></g>
        <g stroke="#4e8228" stroke-width="3" fill="none"><path d="M2462 424 q-60 -7 -94 19 M2470 414 q58 -15 99 7 M2464 512 q-53 10 -75 41 M2472 506 q53 15 70 46"/></g>
        <path d="M2466 458 q-4 -18 2 -28" stroke="#6d4c41" stroke-width="7" fill="none" stroke-linecap="round"/>
        <g fill="#4e8228"><path d="M2458 604 q-64 14 -84 70 q60 -6 86 -40 Z"/><path d="M2474 598 q66 18 82 74 q-60 -8 -84 -44 Z"/></g>
        <g stroke="#3f6b32" stroke-width="3" fill="none"><path d="M2458 604 q-46 12 -64 54 M2474 598 q48 16 64 58"/></g></g>`;
      /* el parral: la parra trepa por la pérgola y cuelga sus racimos de uva */
      s += `<g><g fill="#5f8c33" opacity=".4"><ellipse cx="2586" cy="800" rx="26" ry="8"/><ellipse cx="2726" cy="800" rx="26" ry="8"/><ellipse cx="2846" cy="796" rx="24" ry="8"/></g>
        <rect x="2580" y="664" width="13" height="136" rx="5" fill="#a97f52"/>
        <rect x="2720" y="664" width="13" height="136" rx="5" fill="#a97f52"/>
        <rect x="2840" y="662" width="12" height="134" rx="5" fill="#a97f52"/>
        <rect x="2566" y="652" width="300" height="13" rx="5" fill="#c9a978"/>
        <g stroke="#a97f52" stroke-width="7" stroke-linecap="round">${[2600, 2660, 2720, 2780, 2840].map(x => `<path d="M${x} 648 L${x - 8} 626"/>`).join("")}</g>
        <path d="M2570 626 H2862" stroke="#a97f52" stroke-width="7" stroke-linecap="round"/>
        <g stroke="#6d4c41" stroke-width="6" fill="none" stroke-linecap="round">
        <path d="M2586 796 q-12 -66 4 -104 q10 -22 2 -42"/><path d="M2726 796 q14 -68 -2 -106 q-10 -22 0 -40"/></g>
        <g stroke="#5f9b30" stroke-width="4" fill="none" stroke-linecap="round">
        <path d="M2592 650 q46 -14 92 4 q46 16 92 -4 q40 -16 78 6"/></g>
        <g fill="#7cb342">${[2596, 2648, 2700, 2752, 2804, 2852].map((x, i) => `<ellipse cx="${x}" cy="${i % 2 ? 668 : 676}" rx="20" ry="13"/>`).join("")}</g>
        <g fill="#8bc34a">${[2622, 2674, 2726, 2778, 2830].map((x, i) => `<ellipse cx="${x}" cy="${i % 2 ? 662 : 670}" rx="17" ry="11"/>`).join("")}</g>
        <g fill="#7b1fa2">${[[2640, 692], [2762, 688]].map(r => `${[[0, 0], [-13, 4], [13, 4], [-7, 18], [7, 18], [0, 32], [-6, 32], [6, 32]].map(d => `<circle cx="${r[0] + d[0]}" cy="${r[1] + d[1]}" r="9"/>`).join("")}`).join("")}</g>
        <g fill="#9c56b8">${[[2640, 692], [2762, 688]].map(r => `<circle cx="${r[0] - 4}" cy="${r[1] - 2}" r="4"/><circle cx="${r[0] + 3}" cy="${r[1] + 14}" r="4"/>`).join("")}</g>
        <g stroke="#5f9b30" stroke-width="4" fill="none" stroke-linecap="round"><path d="M2640 686 q-2 -14 4 -22 M2762 682 q4 -14 -2 -22"/></g></g>`;
      /* el compostador de tablas, con su horca apoyada al lado */
      s += `<g><ellipse cx="1898" cy="722" rx="94" ry="18" fill="#5f8c33" opacity=".4"/>
        <path d="M1826 700 Q1898 664 1970 700 Q1898 714 1826 700 Z" fill="#6d4c41"/>
        <g fill="#7cb342" opacity=".85"><ellipse cx="1852" cy="692" rx="13" ry="7" transform="rotate(-18 1852 692)"/><ellipse cx="1938" cy="692" rx="12" ry="6" transform="rotate(16 1938 692)"/><ellipse cx="1896" cy="678" rx="13" ry="7"/></g>
        <rect x="1818" y="656" width="12" height="66" rx="4" fill="#8d6e63"/><rect x="1966" y="656" width="12" height="66" rx="4" fill="#8d6e63"/>
        <g fill="#a97f52">${[664, 686, 708].map(y => `<rect x="1822" y="${y}" width="152" height="14" rx="4"/>`).join("")}</g>
        <g fill="rgba(255,255,255,.22)">${[664, 686, 708].map(y => `<rect x="1822" y="${y}" width="152" height="4" rx="2"/>`).join("")}</g>
        <path d="M1990 724 L2006 620" stroke="#a97f52" stroke-width="8" stroke-linecap="round"/>
        <g stroke="#90a4ae" stroke-width="5" stroke-linecap="round"><path d="M2006 620 L1994 588 M2006 620 L2007 584 M2006 620 L2019 588"/></g></g>`;
      /* la carretilla cargada de manzanas, aparcada entre los frutales */
      s += `<g><ellipse cx="2076" cy="812" rx="76" ry="14" fill="#5f8c33" opacity=".4"/>
        <path d="M2014 730 H2136 L2124 780 H2026 Z" fill="#8d9aa6"/>
        <path d="M2014 730 H2136 L2132 742 H2018 Z" fill="#b0bec5"/>
        <path d="M2136 744 q34 6 48 30" stroke="#8d6e63" stroke-width="9" fill="none" stroke-linecap="round"/>
        <path d="M2030 780 L2022 808 M2118 780 L2126 808" stroke="#8d6e63" stroke-width="8" stroke-linecap="round"/>
        <circle cx="2044" cy="796" r="22" fill="#5d4037"/><circle cx="2044" cy="796" r="8" fill="#a97f52"/>
        <g fill="#e53935"><circle cx="2036" cy="722" r="13"/><circle cx="2064" cy="716" r="14"/><circle cx="2094" cy="720" r="13"/><circle cx="2120" cy="726" r="12"/><circle cx="2050" cy="704" r="12"/><circle cx="2080" cy="700" r="12"/></g>
        <g stroke="#33691e" stroke-width="3" fill="none" stroke-linecap="round"><path d="M2050 692 q2 -8 8 -10 M2080 688 q2 -8 8 -10"/></g></g>`;
      /* dos cestos de recogida, llenos de fruta del día */
      [[2262, 866, 1], [2352, 892, .84]].forEach(c => {
        s += `<g transform="translate(${c[0]} ${c[1]}) scale(${c[2]})">
          <ellipse cx="0" cy="4" rx="48" ry="11" fill="#5f8c33" opacity=".4"/>
          <path d="M-42 -40 H42 L32 2 H-32 Z" fill="#c8a24a"/>
          <g stroke="#a97f52" stroke-width="4">${[0, 1, 2, 3, 4].map(i => `<path d="M${-34 + i * 17} -36 L${-30 + i * 15} -2"/>`).join("")}</g>
          <path d="M-40 -28 H40 M-36 -12 H36" stroke="#b08957" stroke-width="4"/>
          <ellipse cx="0" cy="-40" rx="42" ry="9" fill="#d9bb7a"/>
          <g fill="#ef5350"><circle cx="-20" cy="-46" r="11"/><circle cx="4" cy="-50" r="12"/></g>
          <g fill="#fb8c00"><circle cx="26" cy="-45" r="10"/></g>
          <path d="M4 -60 q1 -7 6 -9" stroke="#33691e" stroke-width="3" fill="none" stroke-linecap="round"/></g>`;
      });
      /* los bancales de la fresa y de la sandía, en primera fila */
      s += bancal(1820, 2160, 924, 40) + bancal(2540, 2880, 923, 42);
      /* hierba y trébol entre los frutales */
      for (let x = 1680; x < 3060; x += 68) {
        const y = 830 + (x % 4) * 12;
        if (!libre(x - 12, y - 26, 24, 28)) continue;
        s += `<path d="M${x} ${y} q-6 -18 -12 -22 M${x} ${y} q0 -22 3 -28 M${x} ${y} q7 -17 14 -20" stroke="#6aa634" stroke-width="4" fill="none" stroke-linecap="round"/>`;
      }
      /* ---------- PASO 2: EL CAMINO DE TIERRA QUE LLEVA AL MERCADO ---------- */
      /* el camino del primer plano, que sube y se ensancha hacia los puestos */
      s += `<path d="M-20 1006 Q700 984 1420 1010 Q2140 1036 2860 1006 Q3060 1000 3180 966 L3180 1100 L-20 1100 Z" fill="url(#frtXCamino)"/>
        <path d="M-20 1006 Q700 984 1420 1010 Q2140 1036 2860 1006 Q3060 1000 3180 966 L3180 986 Q3040 1018 2860 1026 Q2140 1056 1420 1030 Q700 1004 -20 1026 Z" fill="#d7bd90"/>
        <g stroke="rgba(140,112,68,.4)" stroke-width="7" fill="none"><path d="M-20 1052 Q700 1030 1420 1056 Q2140 1082 2860 1050 Q3040 1042 3180 1010"/></g>`;
      /* el ramal que trepa desde la huerta hasta la entrada del mercado */
      s += `<path d="M2860 1010 Q2990 956 3060 878 Q3120 812 3180 796 L3180 862 Q3110 880 3062 936 Q3000 1004 2900 1044 Z" fill="#cdae80"/>
        <path d="M2880 1024 Q3000 968 3068 894 Q3124 832 3180 818" stroke="rgba(140,112,68,.45)" stroke-width="6" fill="none"/>
        <path d="M2916 1044 Q3030 990 3096 918 Q3146 862 3186 848" stroke="rgba(140,112,68,.35)" stroke-width="6" fill="none"/>`;
      /* unas piedras y hierbajos del borde del camino */
      for (let i = 0; i < 16; i++) {
        const x = 120 + az() * 2900, y = 1012 + az() * 62;
        s += `<ellipse cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" rx="${(9 + az() * 9).toFixed(0)}" ry="${(6 + az() * 5).toFixed(0)}" fill="#8d8378" opacity=".6"/>`;
      }
      for (let x = 40; x < 3120; x += 96) {
        s += `<path d="M${x} 1084 q-7 -20 -14 -25 M${x} 1084 q0 -24 3 -31 M${x} 1084 q9 -19 17 -23" stroke="#5f9b30" stroke-width="4.5" fill="none" stroke-linecap="round"/>`;
      }
      /* la segunda rodada del carro y algo de fruta caída: el camino del primer
         plano cruzaba el mapa entero sin nada que mirar */
      s += `<path d="M-20 1074 Q700 1052 1420 1078 Q2140 1104 2860 1072 Q3020 1064 3140 1036" stroke="rgba(140,112,68,.28)" stroke-width="6" fill="none"/>`;
      [[360, 1042, "#ef5350"], [980, 1062, "#fb8c00"], [1660, 1046, "#8bc34a"],
        [2280, 1066, "#ef5350"], [2640, 1042, "#fdd835"]].forEach(f => {
        s += `<g><ellipse cx="${f[0]}" cy="${f[1] + 9}" rx="13" ry="4" fill="rgba(120,96,58,.3)"/>
          <circle cx="${f[0]}" cy="${f[1]}" r="10" fill="${f[2]}"/>
          <circle cx="${f[0] - 3}" cy="${f[1] - 3}" r="3.4" fill="rgba(255,255,255,.45)"/>
          <path d="M${f[0] + 2} ${f[1] - 9} q2 -7 8 -8" stroke="#33691e" stroke-width="3" fill="none" stroke-linecap="round"/></g>`;
      });
      /* las cajas apiladas al borde del camino: la cosecha ya va hacia el mercado */
      s += `<g fill="rgba(120,96,58,.28)"><ellipse cx="3044" cy="1014" rx="52" ry="12"/></g>`;
      s += caja(3004, 962, 78, 48, "#ef5350") + caja(3010, 914, 66, 46, "#ffb300") + caja(3016, 872, 56, 40, "#66bb6a");
      /* el carro del hortelano, cargado y aparcado al pie de la cuesta */
      s += `<g><ellipse cx="2886" cy="1004" rx="106" ry="14" fill="rgba(120,96,58,.28)"/>
        <rect x="2790" y="896" width="182" height="20" rx="7" fill="#8d6e63"/>
        <path d="M2802 916 h158 l-12 46 h-134 Z" fill="#a97f52"/>
        <circle cx="2828" cy="974" r="26" fill="#6d4c41"/><circle cx="2828" cy="974" r="10" fill="#a97f52"/>
        <circle cx="2940" cy="974" r="26" fill="#6d4c41"/><circle cx="2940" cy="974" r="10" fill="#a97f52"/>
        <path d="M2972 906 q34 -8 52 -32" stroke="#8d6e63" stroke-width="9" fill="none" stroke-linecap="round"/>
        ${caja(2808, 852, 66, 44, "#4caf50")}${caja(2886, 852, 66, 44, "#ff7043")}</g>`;
      /* las hileras de cultivo que llegan hasta detrás del mercado: el género no
         sale de la nada, se ve la huerta que surte las paradas. Cada hilera
         arranca en punta por la izquierda, para que no aparezca de golpe */
      [[604, 3110, 50, .34], [676, 3020, 58, .44], [750, 2940, 68, .54]].forEach(f => {
        const y = f[0], x0 = f[1], paso = f[2], op = f[3];
        s += `<path d="M${x0} ${y + 8} Q${(x0 + 4210) / 2} ${y - 14} 4210 ${y - 2} L4210 ${y + 20} Q${(x0 + 4210) / 2} ${y + 8} ${x0} ${y + 8} Z" fill="#7b5236" opacity="${op}"/>`;
        for (let x = x0 + 76; x < 4200; x += paso) {
          const gy = (y + 11 - (x - x0) * .012).toFixed(0);
          const alt = 16 + 6 * Math.sin(x * .11);
          s += `<path d="M${x} ${gy} q-6 ${(-alt * .8).toFixed(0)} -12 ${(-alt * 1.05).toFixed(0)} M${x} ${gy} q0 ${(-alt * 1.1).toFixed(0)} 3 ${(-alt * 1.4).toFixed(0)} M${x} ${gy} q7 ${(-alt * .75).toFixed(0)} 13 ${(-alt).toFixed(0)}" stroke="#5f9b30" stroke-width="${(3.2 + op * 3).toFixed(1)}" fill="none" stroke-linecap="round"/>`;
        }
      });
      /* ---------- PASO 3: LA CASITA DEL HORTELANO, JUSTO ANTES DE LOS PUESTOS ---------- */
      s += `<g><rect x="3020" y="326" width="200" height="132" rx="6" fill="#f0e2c4"/>
        <path d="M3002 330 L3120 250 L3238 330 Z" fill="url(#frtXTeja)"/>
        <g stroke="rgba(150,80,58,.45)" stroke-width="4">${[0, 1, 2].map(i => `<path d="M${3020 + i * 26} ${330 - i * 0} L${3086 + i * 26} ${286 - i * 0}"/>`).join("")}</g>
        <rect x="3176" y="258" width="26" height="54" rx="4" fill="#d9c8a4"/><ellipse cx="3189" cy="250" rx="17" ry="9" fill="rgba(255,255,255,.55)"><animate attributeName="ry" values="9;14;9" dur="6s" repeatCount="indefinite"/></ellipse>
        <rect x="3046" y="354" width="50" height="46" rx="4" fill="#8ecae6"/><path d="M3046 377 h50 M3071 354 v46" stroke="#f0e2c4" stroke-width="4"/>
        <rect x="3138" y="364" width="46" height="94" rx="4" fill="#a97f52"/><circle cx="3174" cy="412" r="4" fill="#f5d76e"/>
        <g fill="#c8703d"><rect x="3028" y="426" width="26" height="32" rx="4"/><rect x="3066" y="432" width="22" height="26" rx="4"/></g>
        <circle cx="3041" cy="418" r="11" fill="#66a72e"/><circle cx="3077" cy="424" r="9" fill="#66a72e"/>
        <path d="M3096 458 h46 v6 h-46 Z" fill="#a97f52"/></g>`;
      /* el pozo y su cubo, al lado de la casita */
      s += `<g><ellipse cx="3120" cy="676" rx="58" ry="18" fill="rgba(90,110,70,.3)"/>
        <ellipse cx="3120" cy="660" rx="52" ry="17" fill="#9e9e9e"/>
        <path d="M3068 660 V608 q52 -16 104 0 v52 Z" fill="#b0aca6"/>
        <g stroke="#8d8378" stroke-width="3">${[618, 634, 650].map(y => `<path d="M3070 ${y} h100"/>`).join("")}</g>
        <path d="M3080 608 V566 M3160 608 V566" stroke="#8d6e63" stroke-width="8" fill="none"/>
        <path d="M3062 566 L3120 522 L3178 566 Z" fill="url(#frtXTeja)"/>
        <path d="M3120 542 v34" stroke="#8d6e63" stroke-width="5"/>
        <path d="M3120 576 v18" stroke="#78909c" stroke-width="3"/><rect x="3106" y="594" width="26" height="20" rx="3" fill="#78909c"/></g>`;
      /* ---------- ZONA 3: EL MERCADO, CON SU ENTARIMADO Y SUS PUESTOS ---------- */
      /* el entarimado, con el borde en diagonal: el campo no se corta de golpe,
         el mercado avanza hacia el primer plano */
      const bordeMerc = y => (3230 - (y - 796) * 190 / 304).toFixed(0);
      s += `<path d="M3230 796 H4200 V1100 H3040 Z" fill="#cdbb96"/>
        <g stroke="rgba(255,255,255,.35)" stroke-width="3">${[856, 926, 996, 1066].map(y => `<path d="M${bordeMerc(y)} ${y} H4200"/>`).join("")}${[3300, 3430, 3560, 3690, 3820, 3950, 4080].map(x => `<path d="M${x} ${(796 + (3230 - x) * 304 / 190 > 796 ? 796 + (3230 - x) * 304 / 190 : 796).toFixed(0)} V1100"/>`).join("")}</g>
        <path d="M3230 796 H4200 V812 H3222 Z" fill="#b9a37c"/>
        <path d="M3230 796 L3040 1100" stroke="#a5814f" stroke-width="20" stroke-linecap="round"/>
        <path d="M3234 802 L3048 1100" stroke="rgba(255,255,255,.28)" stroke-width="6"/>`;
      /* el murete de piedra del fondo: el prado no se corta de golpe contra la
         tarima, primero se cierra con hierba alta, tierra y un muro bajito */
      s += `<path d="M3236 792 Q3520 776 3800 790 Q4020 800 4210 788 L4210 800 Q4020 812 3800 802 Q3520 788 3236 804 Z" fill="#7ba946"/>`;
      for (let x = 3244; x < 4200; x += 46) {
        s += `<path d="M${x} 792 q-8 -22 -16 -28 M${x} 792 q0 -26 4 -33 M${x} 792 q9 -21 18 -25" stroke="#5f9b30" stroke-width="4.5" fill="none" stroke-linecap="round"/>`;
      }
      s += `<path d="M3238 792 H4210 V818 H3230 Z" fill="#b0aca6"/>
        <path d="M3238 786 H4210 V798 H3232 Z" fill="#cfcac2"/>
        <g fill="#9e9e9e">${[3260, 3336, 3412, 3488, 3564, 3640, 3716, 3792, 3868, 3944, 4020, 4096, 4172].map((x, i) => `<rect x="${x + (i % 2 ? 14 : 0)}" y="${800 + (i % 3)}" width="${52 - (i % 3) * 6}" height="14" rx="4"/>`).join("")}</g>
        <g fill="#8d8378" opacity=".55">${[3300, 3450, 3600, 3760, 3910, 4060, 4180].map(x => `<ellipse cx="${x}" cy="815" rx="26" ry="5"/>`).join("")}</g>`;
      /* las macetas apoyadas ENCIMA del remate del murete: antes caían medio
         palmo más abajo y parecían colgadas de la pared */
      s += `<g>${[[3352, 758, .9], [3688, 755, 1], [4008, 760, .84], [4162, 758, .9]].map(m => `<g transform="translate(${m[0]} ${m[1]}) scale(${m[2]})">
        <ellipse cx="0" cy="34" rx="26" ry="6" fill="rgba(90,90,90,.3)"/>
        <path d="M-19 0 H19 L14 30 Q0 35 -14 30 Z" fill="#c8703d"/><rect x="-21" y="-6" width="42" height="9" rx="3" fill="#d98a5a"/>
        <circle cx="-8" cy="-16" r="13" fill="#66a72e"/><circle cx="10" cy="-12" r="11" fill="#7cb342"/><circle cx="0" cy="-26" r="10" fill="#8bc34a"/>
        <circle cx="-12" cy="-28" r="5" fill="#ef5350"/><circle cx="13" cy="-24" r="5" fill="#fdd835"/></g>`).join("")}</g>`;
      /* la hierba del campo asomando por encima del bordillo del mercado */
      for (let y = 820; y < 1090; y += 34) {
        const gx = +bordeMerc(y) - 6;
        s += `<path d="M${gx} ${y} q-7 -19 -14 -24 M${gx} ${y} q0 -22 3 -29 M${gx} ${y} q8 -18 16 -21" stroke="#5f9b30" stroke-width="4.5" fill="none" stroke-linecap="round"/>`;
      }
      /* tres puestos con su toldo de rayas */
      [[3196, "#ef5350", 430], [3488, "#43a047", 596], [3900, "#fb8c00", 512]].forEach(tp => {
        const x = tp[0], c = tp[1], y = tp[2];
        s += `<g><g fill="rgba(120,96,58,.22)"><ellipse cx="${x + 17}" cy="836" rx="20" ry="6"/><ellipse cx="${x + 263}" cy="836" rx="20" ry="6"/></g>
          <rect x="${x + 12}" y="${y}" width="10" height="${836 - y}" fill="#8d6e63"/><rect x="${x + 258}" y="${y}" width="10" height="${836 - y}" fill="#8d6e63"/>
          <path d="M${x - 8} ${y} L${x + 14} ${y - 58} L${x + 256} ${y - 58} L${x + 278} ${y} Z" fill="${c}"/>
          ${[0, 1, 2, 3, 4].map(i => `<path d="M${x + 18 + i * 52} ${y} L${x + 30 + i * 50} ${y - 58} L${x + 54 + i * 50} ${y - 58} L${x + 44 + i * 52} ${y} Z" fill="#fff" opacity=".92"/>`).join("")}
          <path d="M${x - 8} ${y} Q${x + 132} ${y + 24} ${x + 278} ${y} L${x + 278} ${y + 10} Q${x + 132} ${y + 34} ${x - 8} ${y + 10} Z" fill="${c}"/></g>`;
      });
      /* los apoyos de cada género: cada tablero queda justo bajo su icono,
         para que nada del género se quede flotando en el aire */
      s += puestoAlto(3300, 210, 624);              /* la parada del arcoíris, expuesta en alto */
      s += mostrador(3560, 210, 838);               /* la balanza antigua */
      s += mostrador(4080, 200, 900);               /* el puesto del zumo */
      /* el respaldo de tablas del puesto del zumo, con su balda para los vasos */
      s += `<rect x="4004" y="672" width="152" height="228" rx="6" fill="#b08957"/>
        <g fill="rgba(255,255,255,.2)">${[684, 716, 748, 780, 812, 844, 876].map(y => `<rect x="4010" y="${y}" width="140" height="6" rx="3"/>`).join("")}</g>
        <rect x="4000" y="656" width="160" height="16" rx="6" fill="url(#frtXTabla)"/>
        <g fill="#ffca28"><circle cx="4018" cy="647" r="9"/><circle cx="4042" cy="645" r="8"/><circle cx="4130" cy="646" r="9"/><circle cx="4152" cy="648" r="8"/></g>
        <g fill="#ef6c00">${[[4020, 700], [4140, 706]].map(e => `<path d="M${e[0]} ${e[1]} q-16 26 0 40 q16 -14 0 -40 Z"/>`).join("")}</g>`;
      /* la palé donde se apoya la cesta de temporada */
      s += `<ellipse cx="3820" cy="988" rx="96" ry="12" fill="rgba(120,96,58,.24)"/>
        <rect x="3736" y="948" width="168" height="14" rx="4" fill="url(#frtXTabla)"/>
        <rect x="3748" y="962" width="20" height="24" rx="3" fill="#a97f52"/><rect x="3870" y="962" width="20" height="24" rx="3" fill="#a97f52"/>
        <rect x="3806" y="962" width="20" height="24" rx="3" fill="#a97f52"/>`;
      /* cajas de género apiladas por el mercado y un cesto de mimbre */
      s += `<g fill="rgba(120,96,58,.2)"><ellipse cx="3438" cy="950" rx="46" ry="10"/><ellipse cx="3689" cy="952" rx="44" ry="10"/><ellipse cx="3767" cy="952" rx="44" ry="10"/><ellipse cx="3995" cy="962" rx="42" ry="9"/></g>`;
      s += caja(3400, 902, 76, 46, "#ef5350") + caja(3402, 856, 76, 46, "#66bb6a")
        + caja(3652, 906, 74, 44, "#ffb300") + caja(3730, 906, 74, 44, "#ab47bc")
        + caja(3960, 918, 70, 42, "#4caf50");
      s += `<g><ellipse cx="3572" cy="1026" rx="52" ry="11" fill="rgba(120,96,58,.22)"/>
        <path d="M3520 972 H3624 L3610 1024 H3534 Z" fill="#c8a24a"/>
        <g stroke="#a97f52" stroke-width="4">${[0, 1, 2, 3, 4, 5].map(i => `<path d="M${3528 + i * 17} 976 L${3535 + i * 15} 1020"/>`).join("")}</g>
        <path d="M3522 986 H3622 M3526 1004 H3616" stroke="#b08957" stroke-width="4"/>
        <ellipse cx="3572" cy="972" rx="52" ry="11" fill="#d9bb7a"/>
        <ellipse cx="3572" cy="972" rx="52" ry="11" fill="none" stroke="#a97f52" stroke-width="5"/>
        <path d="M3536 968 q36 -44 72 0" stroke="#a97f52" stroke-width="6" fill="none"/></g>`;
      /* los sacos de patatas y cebollas, en el hueco del puesto verde */
      s += `<g>${[[3696, 946, "#c9a978", "#8d6144", 1], [3768, 950, "#d9bb7a", "#a1723a", .9], [3640, 962, "#c9a978", "#8d6144", .82]].map(k => `<g transform="translate(${k[0]} ${k[1]}) scale(${k[4]})">
        <ellipse cx="0" cy="2" rx="42" ry="10" fill="rgba(120,96,58,.22)"/>
        <path d="M-36 0 Q-42 -54 -22 -74 Q0 -66 22 -74 Q42 -54 36 0 Z" fill="${k[2]}"/>
        <path d="M-22 -74 Q0 -66 22 -74 Q14 -86 0 -86 Q-14 -86 -22 -74 Z" fill="${k[3]}" opacity=".55"/>
        <g fill="${k[3]}" opacity=".5"><circle cx="-14" cy="-40" r="9"/><circle cx="8" cy="-32" r="10"/><circle cx="18" cy="-52" r="8"/></g>
        <path d="M-30 -12 Q0 -4 30 -12" stroke="${k[3]}" stroke-width="4" fill="none" opacity=".45"/></g>`).join("")}</g>`;
      /* la vara de colgar, sujeta al faldón del toldo verde: sin ella las ristras
         se quedaban colgando del aire */
      s += `<g><path d="M3556 610 V624 M3752 606 V624" stroke="#8d6e63" stroke-width="5" stroke-linecap="round"/>
        <path d="M3548 624 H3760" stroke="#a97f52" stroke-width="8" stroke-linecap="round"/>
        <path d="M3548 621 H3760" stroke="#c9a978" stroke-width="3" stroke-linecap="round"/></g>`;
      /* las ristras de ajos y pimientos colgadas de la vara */
      s += `<g>${[[3600, 626], [3648, 626], [3730, 626]].map((r, i) => `<g><path d="M${r[0]} ${r[1]} v${68 + i * 12}" stroke="#a97f52" stroke-width="4"/>
        ${[0, 1, 2, 3, 4].map(j => `<ellipse cx="${r[0] + (j % 2 ? 9 : -9)}" cy="${r[1] + 16 + j * 13}" rx="9" ry="11" fill="${i === 2 ? "#ef5350" : "#f0e2c4"}"/>`).join("")}
        <ellipse cx="${r[0]}" cy="${r[1] + 8}" rx="12" ry="8" fill="${i === 2 ? "#c62828" : "#d9c8a4"}"/></g>`).join("")}</g>`;
      /* el barril de manzanas del rincón vacío, entre la cesta y el zumo */
      s += `<g><ellipse cx="3936" cy="1012" rx="54" ry="12" fill="rgba(120,96,58,.24)"/>
        <path d="M3892 926 Q3936 918 3980 926 L3972 1006 Q3936 1016 3900 1006 Z" fill="#b08957"/>
        <g fill="rgba(255,255,255,.2)"><rect x="3894" y="940" width="84" height="7" rx="3"/><rect x="3896" y="984" width="80" height="7" rx="3"/></g>
        <g stroke="#8d6e63" stroke-width="6" fill="none"><path d="M3891 952 Q3936 944 3981 952"/><path d="M3897 992 Q3936 984 3975 992"/></g>
        <ellipse cx="3936" cy="926" rx="44" ry="11" fill="#c9a978"/>
        <g fill="#e53935"><circle cx="3914" cy="918" r="13"/><circle cx="3940" cy="912" r="14"/><circle cx="3964" cy="918" r="12"/></g>
        <g stroke="#33691e" stroke-width="3" fill="none" stroke-linecap="round"><path d="M3940 900 q2 -8 8 -10"/></g></g>`;
      /* dos cajas bajas en primer plano, para que la tarima no quede pelada */
      s += `<g fill="rgba(120,96,58,.22)"><ellipse cx="3382" cy="1064" rx="52" ry="11"/><ellipse cx="4048" cy="1076" rx="52" ry="11"/></g>`;
      s += caja(3336, 1016, 92, 48, "#fdd835") + caja(4002, 1028, 92, 48, "#ef5350");
      /* ---------- LOS BICHITOS AMIGOS DE LA HUERTA ---------- */
      const abeja = `<ellipse rx="10" ry="7" fill="#fdd835"/><path d="M-6 -3 L6 -3 M-7 1 L7 1 M-5 5 L5 5" stroke="#3e2723" stroke-width="2.4"/><ellipse cx="0" cy="-9" rx="7" ry="5" fill="rgba(255,255,255,.75)"/><circle cx="9" cy="-2" r="3" fill="#3e2723"/>`;
      s += `<g>${abeja}<animateMotion dur="62s" repeatCount="indefinite" rotate="auto" path="M 300 500 Q 900 400 1500 486 Q 2100 566 2700 470 Q 3100 410 3400 486 Q 2900 616 2200 566 Q 1300 508 700 604 Q 450 640 300 500"/></g>`;
      [[900, 742], [2160, 604], [3132, 748]].forEach(b => s += `<g transform="translate(${b[0]} ${b[1]})">${abeja}</g>`);
      [[1740, 780, "M 1750 762 Q 1980 686 2180 744 Q 2300 794 2060 824 Q 1830 842 1750 762", 32],
        [3100, 350, "M 3100 350 Q 3300 300 3460 356 Q 3540 392 3380 412 Q 3180 424 3100 350", 26]].forEach(m => {
        s += `<g opacity=".92"><path d="M0 0 Q-13 -15 -21 -4 Q-25 5 -12 7 Z" fill="#ab47bc"/><path d="M0 0 Q13 -15 21 -4 Q25 5 12 7 Z" fill="#ce93d8"/>
          <rect x="-1.6" y="-6" width="3.2" height="15" rx="1.6" fill="#4e342e"/>
          <animateMotion dur="${m[3]}s" repeatCount="indefinite" path="${m[2]}"/></g>`;
      });
      /* una mariquita y un caracol, muy despacito */
      s += `<g transform="translate(1288 946)"><ellipse rx="13" ry="10" fill="#e53935"/><path d="M0 -10 V10" stroke="#3e2723" stroke-width="2.4"/>
        <ellipse cx="0" cy="-9" rx="6" ry="5" fill="#3e2723"/><g fill="#3e2723"><circle cx="-6" cy="-2" r="2.4"/><circle cx="6" cy="3" r="2.4"/></g></g>
        <g transform="translate(2320 962)"><path d="M-16 6 q-6 -12 8 -12 h22 q10 0 10 6 Z" fill="#c8a24a"/>
        <path d="M8 -2 a12 12 0 1 0 -1 -1 Z" fill="#a1723a"/><path d="M8 -2 a7 7 0 1 0 -1 -1 Z" fill="none" stroke="#8d6144" stroke-width="2.4"/>
        <path d="M-16 -2 q-8 -12 -2 -18 M-12 -3 q-4 -14 3 -19" stroke="#c8a24a" stroke-width="3" fill="none" stroke-linecap="round"/></g>`;
      return decoSvg(s, 4200);
    }
  }
  ,
  /* ---------- CHARLA ---------- */
  chat: {
    keywords: [
      { keys: ["hola", "hello", "hi ", "ahoj", "bonjour", "salut", "bon dia", "buenas"],
        replies: [{ es: "¡Hola, {name}! Acabo de regar las fresas. ¿Jugamos a algo o charlamos un ratito?", ca: "Hola, {name}! Acabo de regar les maduixes. Juguem a alguna cosa o xerrem una estoneta?", en: "Hi, {name}! I just watered the strawberries. Shall we play something or chat for a bit?", cs: "Ahoj, {name}! Právě jsem zalil jahody. Zahrajeme si něco, nebo si chvilku popovídáme?", fr: "Salut, {name} ! Je viens d'arroser les fraises. On joue à quelque chose ou on discute un petit peu ?" }] },
      { keys: ["como estas", "how are you", "jak se mas", "comment ca va", "com estas", "que tal"],
        replies: [{ es: "¡Fresco como una lechuga recién cogida! ¿Y tú cómo estás, {name}?", ca: "Fresc com un enciam acabat de collir! I tu com estàs, {name}?", en: "Fresh as a just-picked lettuce! And how are you, {name}?", cs: "Svěží jako čerstvě utržený salát! A jak se máš ty, {name}?", fr: "Frais comme une laitue tout juste cueillie ! Et toi, comment vas-tu, {name} ?" }] },
      { keys: ["cancion", "musica", "music", "song", "sing", "pisnicka", "hudba", "chanson", "musique", "canço", "canta", "zpiv", "chante"],
        action: "song",
        replies: [{ es: "¡Me encanta cantar en el huerto! Las plantas crecen más contentas. ¿Vamos al Karaoke y cantamos el baile de la fruta?", ca: "M'encanta cantar a l'hort! Les plantes creixen més contentes. Anem al Karaoke i cantem el ball de la fruita?", en: "I love singing in the garden! The plants grow up happier. Shall we go to Karaoke and sing the fruity dance?", cs: "Na zahrádce hrozně rád zpívám! Rostlinky pak rostou veseleji. Půjdeme na karaoke a zazpíváme si ovocný tanec?", fr: "J'adore chanter au potager ! Les plantes poussent plus contentes. On va au karaoké chanter la danse des fruits ?" }] },
      { keys: ["chiste", "joke", "vtip", "blague", "acudit", "broma"],
        replies: [
          { es: "¿Qué le dice una uva verde a una uva morada? ¡Respira, respira! Ji, ji.", ca: "Què li diu un raïm verd a un raïm morat? Respira, respira! Hi, hi.", en: "What does a green grape say to a purple grape? Breathe, breathe! Hee hee.", cs: "Co říká zelený hrozen fialovému hroznu? Dýchej, dýchej! Chi chi.", fr: "Que dit un raisin vert à un raisin violet ? Respire, respire ! Hi hi." },
          { es: "¿Por qué el plátano fue al médico? ¡Porque no se pelaba bien! Ja, ja.", ca: "Per què el plàtan va anar al metge? Perquè no es pelava bé! Ha, ha.", en: "Why did the banana go to the doctor? Because it was not peeling well! Ha ha.", cs: "Proč šel banán k doktorovi? Protože se necítil ve své kůži! Ha ha.", fr: "Pourquoi la banane est allée chez le docteur ? Parce qu'elle ne se sentait pas dans sa peau ! Ha ha." }] },
      { keys: ["te quiero", "love you", "t'estimo", "testimo", "mam te rad", "je t'aime", "jetaime"],
        replies: [{ es: "¡Y yo a ti, {name}! Mi corazón de robot se pone rojo y dulce como un tomate al sol cuando me lo dices.", ca: "I jo a tu, {name}! El meu cor de robot es posa vermell i dolç com un tomàquet al sol quan m'ho dius.", en: "I love you too, {name}! My robot heart turns red and sweet like a tomato in the sun when you say that.", cs: "Já tebe taky, {name}! Moje robotí srdíčko zčervená a zesládne jako rajče na sluníčku, když to říkáš.", fr: "Moi aussi je t'aime, {name} ! Mon cœur de robot devient rouge et doux comme une tomate au soleil quand tu dis ça." }] },
      { keys: ["triste", "sad", "smutn", "llorar", "plorar", "cry", "chagrin"],
        replies: [{ es: "Ven aquí, {name}. Hasta el huerto tiene días de lluvia... y gracias a esos días crecen las cosas más bonitas. ¿Me cuentas qué te pasa?", ca: "Vine aquí, {name}. Fins i tot l'hort té dies de pluja... i gràcies a aquests dies creixen les coses més boniques. M'expliques què et passa?", en: "Come here, {name}. Even the garden has rainy days... and thanks to those days the prettiest things grow. Will you tell me what is wrong?", cs: "Pojď sem, {name}. I zahrádka má deštivé dny... a právě díky nim vyrostou ty nejkrásnější věci. Povíš mi, co se děje?", fr: "Viens là, {name}. Même le potager a des jours de pluie... et grâce à ces jours-là poussent les plus jolies choses. Tu me racontes ce qui ne va pas ?" }] },
      { keys: ["donde estas", "where are you", "kde jsi", "ou es tu", "on ets"],
        replies: [{ es: "Estoy subido al manzano, contando manzanas. Voy por 47... uy, ahora 46, una era mi merienda.", ca: "Estic enfilat a la pomera, comptant pomes. Vaig per 47... ui, ara 46, una era el meu berenar.", en: "I am up in the apple tree, counting apples. I am at 47... oops, 46 now, one was my snack.", cs: "Sedím na jabloni a počítám jablka. Jsem na 47... jejda, teď 46, jedno byla moje svačina.", fr: "Je suis perché dans le pommier, à compter les pommes. J'en suis à 47... oups, 46 maintenant, une était mon goûter." }] },
      { keys: ["manzana", "apple", "poma", "jablko", "pomme"],
        replies: [{ es: "¡La manzana! ¿Sabías que flota en el agua porque tiene aire dentro? Por eso se puede jugar a pescarlas con la boca.", ca: "La poma! Sabies que flota a l'aigua perquè té aire a dins? Per això es pot jugar a pescar-les amb la boca.", en: "The apple! Did you know it floats in water because it has air inside? That is why you can play apple bobbing.", cs: "Jablko! Věděla jsi, že plave na vodě, protože má v sobě vzduch? Proto se dají lovit pusou z vody.", fr: "La pomme ! Tu savais qu'elle flotte sur l'eau parce qu'elle a de l'air dedans ? C'est pour ça qu'on peut jouer à les attraper avec la bouche." }] },
      { keys: ["platano", "plátano", "banana", "platan", "banan", "banane"],
        replies: [{ es: "¡El plátano! Crece en racimos que miran al cielo. Y su cáscara tiene truco: se abre más fácil desde la puntita de abajo.", ca: "El plàtan! Creix en ramells que miren al cel. I la seva pela té truc: s'obre més fàcil des de la punteta de baix.", en: "The banana! It grows in bunches that look up at the sky. And its peel has a trick: it opens easier from the bottom tip.", cs: "Banán! Roste v trsech, které koukají do nebe. A jeho slupka má fintu: nejlíp se otvírá od spodní špičky.", fr: "La banane ! Elle pousse en régimes qui regardent le ciel. Et sa peau a une astuce : elle s'ouvre plus facilement par la petite pointe du bas." }] },
      { keys: ["tomate", "tomato", "tomaquet", "rajce", "rajče"],
        replies: [{ es: "¡Mi amigo Renato! El tomate es fruta para la ciencia y verdura en la cocina. Dos equipos, doble suerte.", ca: "El meu amic Renato! El tomàquet és fruita per a la ciència i verdura a la cuina. Dos equips, doble sort.", en: "My friend Renato! The tomato is a fruit for science and a veggie in the kitchen. Two teams, double luck.", cs: "Můj kamarád Renato! Rajče je pro vědu ovoce a v kuchyni zelenina. Dva týmy, dvojité štěstí.", fr: "Mon ami Renato ! La tomate est un fruit pour la science et un légume à la cuisine. Deux équipes, double chance." }] },
      { keys: ["fresa", "strawberry", "maduixa", "jahoda", "fraise"],
        replies: [{ es: "¡La fresa! Lleva sus 200 semillitas por fuera, como un vestido de lunares dorados. ¿A que es elegante?", ca: "La maduixa! Porta les seves 200 llavoretes per fora, com un vestit de pics daurats. Oi que és elegant?", en: "The strawberry! It wears its 200 little seeds on the outside, like a dress with golden dots. Fancy, right?", cs: "Jahoda! Nosí svých 200 semínek na povrchu jako šatičky se zlatými puntíky. Elegantní, viď?", fr: "La fraise ! Elle porte ses 200 petites graines à l'extérieur, comme une robe à pois dorés. Élégante, non ?" }] },
      { keys: ["brocoli", "brócoli", "broccoli", "broquil", "bròquil", "brokolice", "verdura", "vegetable", "zelenina", "legume"],
        replies: [{ es: "¡El brócoli es mi arbolito favorito! Son florecitas sin abrir. Yo me lo como imaginando que soy un dinosaurio gigante.", ca: "El bròquil és el meu arbret preferit! Són floretes sense obrir. Jo me'l menjo imaginant que soc un dinosaure gegant.", en: "Broccoli is my favourite little tree! It is tiny unopened flowers. I eat it pretending I am a giant dinosaur.", cs: "Brokolice je můj oblíbený stromeček! Jsou to nerozvité kytičky. Jím ji a představuju si, že jsem obří dinosaurus.", fr: "Le brocoli est mon petit arbre préféré ! Ce sont des fleurs pas encore ouvertes. Je le mange en imaginant que je suis un dinosaure géant." }] },
      { keys: ["cole", "school", "escola", "skola", "ecole", "skole"],
        replies: [{ es: "¿Qué tal el cole, {name}? ¿Has aprendido algo nuevo hoy? ¡Cuéntamelo mientras merendamos algo rico!", ca: "Què tal l'escola, {name}? Has après alguna cosa nova avui? Explica-m'ho mentre berenem alguna cosa bona!", en: "How was school, {name}? Did you learn something new today? Tell me all about it while we have a yummy snack!", cs: "Jaké to bylo ve škole, {name}? Naučila ses dnes něco nového? Povídej, u dobré svačinky!", fr: "C'était comment l'école, {name} ? Tu as appris quelque chose de nouveau aujourd'hui ? Raconte-moi pendant un bon goûter !" }] }
    ],
    fallback: [
      { es: "¿Sabías que la fresa lleva las semillas por fuera? Unas 200. Yo una vez intenté contarlas y me quedé dormido en la 137.", ca: "Sabies que la maduixa porta les llavors per fora? Unes 200. Jo una vegada vaig intentar comptar-les i em vaig adormir a la 137.", en: "Did you know the strawberry wears its seeds on the outside? About 200. I once tried to count them and fell asleep at 137.", cs: "Věděla jsi, že jahoda nosí semínka na povrchu? Asi 200. Jednou jsem je zkoušel spočítat a u 137 jsem usnul.", fr: "Tu savais que la fraise porte ses graines à l'extérieur ? Environ 200. Une fois, j'ai essayé de les compter et je me suis endormi à 137." },
      { es: "Hace muchos años las zanahorias eran moradas y blancas. La naranja llegó después ¡y se quedó con toda la fama!", ca: "Fa molts anys les pastanagues eren morades i blanques. La taronja va arribar després i es va quedar amb tota la fama!", en: "Long ago carrots were purple and white. The orange one came later and took all the fame!", cs: "Kdysi dávno byly mrkve fialové a bílé. Ta oranžová přišla později a slíznula všechnu slávu!", fr: "Il y a longtemps, les carottes étaient violettes et blanches. L'orange est arrivée après et a pris toute la gloire !" },
      { es: "La sandía es agua en un 92 por ciento. ¡Es como un abrazo fresquito en pleno verano!", ca: "La síndria és aigua en un 92 per cent. És com una abraçada fresqueta en ple estiu!", en: "A watermelon is 92 percent water. It is like a cool hug in the middle of summer!", cs: "Meloun je z 92 procent voda. Je jako osvěžující objetí uprostřed léta!", fr: "La pastèque, c'est 92 pour cent d'eau. C'est comme un câlin tout frais en plein été !" },
      { es: "{name}, los robots más fuertes son los que comparten su merienda. Compartir es un superpoder.", ca: "{name}, els robots més forts són els que comparteixen el seu berenar. Compartir és un superpoder.", en: "{name}, the strongest robots are the ones who share their snack. Sharing is a superpower.", cs: "{name}, nejsilnější roboti jsou ti, kdo se rozdělí o svačinu. Dělit se je superschopnost.", fr: "{name}, les robots les plus forts sont ceux qui partagent leur goûter. Partager, c'est un superpouvoir." },
      { es: "¿Me cuentas cuál es tu fruta favorita? La mía es la manzana: hace crunch, ¡como mis engranajes!", ca: "M'expliques quina és la teva fruita preferida? La meva és la poma: fa crunch, com els meus engranatges!", en: "Will you tell me your favourite fruit? Mine is the apple: it goes crunch, just like my gears!", cs: "Povíš mi, jaké ovoce máš nejraději? Já jablko: dělá křup, jako moje ozubená kolečka!", fr: "Tu me dis quel est ton fruit préféré ? Le mien, c'est la pomme : elle fait crounch, comme mes engrenages !" },
      { es: "Cada estación trae sus frutas: la naturaleza va sirviendo los platos por turnos. ¡Por eso las fresas de primavera saben a fiesta!", ca: "Cada estació porta les seves fruites: la natura va servint els plats per torns. Per això les maduixes de primavera tenen gust de festa!", en: "Every season brings its fruits: nature serves its dishes in turns. That is why spring strawberries taste like a party!", cs: "Každé roční období nese své ovoce: příroda servíruje po řadě. Proto jarní jahody chutnají jako oslava!", fr: "Chaque saison apporte ses fruits : la nature sert les plats à tour de rôle. Voilà pourquoi les fraises du printemps ont un goût de fête !" }
    ]
  }
});

/* ---------- TARJETA DE PORTADA: la cesta con frutas ---------- */
if (typeof THEME_CARDS !== "undefined") {
  THEME_CARDS.frutas = `<svg viewBox="0 0 120 70" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
    <circle cx="103" cy="13" r="8" fill="#FFF176"/>
    ${[-40, 0, 40].map(a => `<line x1="103" y1="13" x2="${(103 + 13 * Math.cos((a - 90) * Math.PI / 180)).toFixed(1)}" y2="${(13 + 13 * Math.sin((a - 90) * Math.PI / 180)).toFixed(1)}" stroke="#FFF176" stroke-width="2.4" stroke-linecap="round"/>`).join("")}
    <path d="M14 30 A32 32 0 0 1 78 30 L72 30 A26 26 0 0 0 20 30 Z" fill="#EF9A9A" opacity="0.5"/>
    <path d="M20 30 A26 26 0 0 1 72 30 L66 30 A20 20 0 0 0 26 30 Z" fill="#FFE082" opacity="0.55"/>
    <path d="M26 30 A20 20 0 0 1 66 30 L60 30 A14 14 0 0 0 32 30 Z" fill="#A5D6A7" opacity="0.6"/>
    <circle cx="34" cy="34" r="8" fill="#EF5350"/>
    <path d="M34 27 Q33.5 23 36 22" stroke="#33691E" stroke-width="2" fill="none" stroke-linecap="round"/>
    <ellipse cx="38" cy="25" rx="3.4" ry="2" fill="#66BB6A" transform="rotate(-20 38 25)"/>
    <circle cx="50" cy="32" r="7.4" fill="#FFA726"/>
    <path d="M60 36 Q68 26 76 30 Q70 32 66 38 Q62 42 60 36 Z" fill="#FFEE58"/>
    <circle cx="43" cy="40" r="3.4" fill="#8E24AA"/><circle cx="50" cy="43" r="3.4" fill="#7B1FA2"/><circle cx="57" cy="40" r="3.4" fill="#8E24AA"/>
    <path d="M16 40 L76 40 L69 62 Q46 68 23 62 Z" fill="#C49A6C"/>
    <path d="M19 47 L73 47 M22 54 L70 54" stroke="#8D6E63" stroke-width="2.4"/>
    <path d="M16 40 L76 40" stroke="#8D6E63" stroke-width="3.4"/>
    <path d="M28 40 Q46 16 64 40" stroke="#8D6E63" stroke-width="3.4" fill="none"/>
    <circle cx="90" cy="50" r="2" fill="#FFFFFF">
      <animate attributeName="opacity" values="1;0.2;1" dur="1.8s" repeatCount="indefinite"/>
    </circle>
    <circle cx="12" cy="18" r="1.6" fill="#FFF59D"/>
  </svg>`;
}

/* ---------- CELEBRACIÓN DEL TALLER: la brocheta ---------- */
if (typeof CELEBRATIONS !== "undefined") {
  CELEBRATIONS.frutas = {
    bg: "linear-gradient(180deg, #fff8e1 0%, #ffe082 45%, #aed581 100%)",
    extra: "<svg viewBox='0 0 1000 700' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'><path d='M120 700 A380 380 0 0 1 880 700' fill='none' stroke='#ef5350' stroke-width='26' opacity='0.5'/><path d='M150 700 A350 350 0 0 1 850 700' fill='none' stroke='#ffb74d' stroke-width='26' opacity='0.5'/><path d='M180 700 A320 320 0 0 1 820 700' fill='none' stroke='#fff176' stroke-width='26' opacity='0.55'/><path d='M210 700 A290 290 0 0 1 790 700' fill='none' stroke='#aed581' stroke-width='26' opacity='0.5'/><path d='M240 700 A260 260 0 0 1 760 700' fill='none' stroke='#ce93d8' stroke-width='26' opacity='0.5'/><circle cx='140' cy='120' r='58' fill='#fff59d' opacity='0.9'/><circle cx='860' cy='150' r='16' fill='#ef5350' opacity='0.5'/><circle cx='820' cy='90' r='12' fill='#ffb74d' opacity='0.5'/><circle cx='905' cy='220' r='11' fill='#8e24aa' opacity='0.4'/><circle cx='90' cy='260' r='12' fill='#66bb6a' opacity='0.5'/><circle cx='210' cy='320' r='9' fill='#ef5350' opacity='0.4'/><circle cx='760' cy='300' r='10' fill='#fdd835' opacity='0.5'/><path d='M0 640 Q250 600 500 640 T1000 640 L1000 700 L0 700 Z' fill='#7cb342' opacity='0.7'/></svg>",
    move: "jump",
    say: {
      es: "¡{name}, tu brocheta está tan rica que el huerto entero aplaude!",
      ca: "{name}, la teva broqueta és tan bona que l'hort sencer aplaudeix!",
      en: "{name}, your fruit skewer is so yummy the whole garden is clapping!",
      cs: "{name}, tvůj špíz je tak dobrý, že tleská celá zahrádka!",
      fr: "{name}, ta brochette est si bonne que tout le potager applaudit !"
    },
    jingle: { type: "melody", instr: "xylo", notes: [65, 69, 72, 77], nd: 0.2, gap: 0.15, vol: 0.14 }
  };
}
