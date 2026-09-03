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
    width: 2600, height: 1100, stars: false,
    bgCss: "radial-gradient(ellipse 40% 30% at 12% 10%, rgba(255,241,118,.55), transparent), linear-gradient(180deg,#aed9f7 0%,#cde9a8 30%,#8bc34a 55%,#5b8c3a 80%,#3f6428 100%)",
    cats: [
      { id: "huerto", emoji: "🥕", x: 120, name: { es: "El huerto", ca: "L'hort", en: "The garden", cs: "Zahrádka", fr: "Le potager" } },
      { id: "frutal", emoji: "🍎", x: 1000, name: { es: "Los árboles frutales", ca: "Els arbres fruiters", en: "The fruit trees", cs: "Ovocné stromy", fr: "Les arbres fruitiers" } },
      { id: "mercado", emoji: "🧺", x: 1900, name: { es: "El mercado", ca: "El mercat", en: "The market", cs: "Trh", fr: "Le marché" } }
    ],
    pois: [
      { cat: "huerto", emoji: "🥕", x: 210, y: 780, iw: 64, ih: 76,
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
      { cat: "huerto", emoji: "🍅", x: 390, y: 610, iw: 70, ih: 66,
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
      { cat: "huerto", emoji: "🥦", x: 560, y: 770, iw: 66, ih: 72,
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
      { cat: "huerto", emoji: "🎃", x: 750, y: 880, size: 2, iw: 120, ih: 92,
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
      { cat: "huerto", emoji: "🫛", x: 470, y: 545, iw: 66, ih: 60,
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
      { cat: "huerto", emoji: "🥬", x: 900, y: 745, iw: 68, ih: 60,
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
      { cat: "frutal", emoji: "🍎", x: 1120, y: 540, iw: 130, ih: 140,
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
      { cat: "frutal", emoji: "🍊", x: 1340, y: 690, iw: 120, ih: 130,
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
      { cat: "frutal", emoji: "🍓", x: 1210, y: 890, iw: 62, ih: 64,
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
      { cat: "frutal", emoji: "🍌", x: 1530, y: 490, iw: 78, ih: 74,
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
      { cat: "frutal", emoji: "🍉", x: 1650, y: 870, size: 2, iw: 120, ih: 82,
        svg: `<svg viewBox="0 0 140 96" width="100%" height="100%">
          <ellipse cx="58" cy="52" rx="52" ry="40" fill="#2e7d32"/>
          <path d="M22 24 Q30 52 22 82 M42 14 Q52 52 42 90 M64 12 Q74 52 64 92 M86 18 Q96 52 86 86 M102 30 Q108 52 102 76" stroke="#1b5e20" stroke-width="7" fill="none" opacity=".85"/>
          <path d="M58 14 Q56 6 62 4" stroke="#33691e" stroke-width="4" fill="none" stroke-linecap="round"/>
          <path d="M138 60 A26 26 0 0 0 112 34 L112 60 Z" fill="#66bb6a"/>
          <path d="M134 58 A21 21 0 0 0 114 38 L114 58 Z" fill="#ef5350"/>
          <circle cx="121" cy="50" r="1.8" fill="#37474f"/><circle cx="128" cy="54" r="1.8" fill="#37474f"/><circle cx="120" cy="56" r="1.8" fill="#37474f"/></svg>`,
        name: { es: "La sandía rayada", ca: "La síndria ratllada", en: "The stripy watermelon", cs: "Pruhovaný meloun", fr: "La pastèque rayée" },
        fact: { es: "La sandía es agua en un 92 por ciento: la fruta piscina del verano. En Japón las cultivan hasta cuadradas.", ca: "La síndria és aigua en un 92 per cent: la fruita piscina de l'estiu. Al Japó les cultiven fins i tot quadrades.", en: "A watermelon is 92 percent water: summer's swimming-pool fruit. In Japan they even grow square ones.", cs: "Meloun je z 92 procent voda: letní bazén mezi ovocem. V Japonsku je pěstují dokonce hranaté.", fr: "La pastèque, c'est 92 pour cent d'eau : le fruit piscine de l'été. Au Japon, on en cultive même des carrées." } },
      { cat: "frutal", emoji: "🍋", x: 1780, y: 590, iw: 110, ih: 120,
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
      { cat: "mercado", emoji: "🌈", x: 2080, y: 600, size: 2, iw: 170, ih: 130,
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
      { cat: "mercado", emoji: "⚖️", x: 2230, y: 780, iw: 76, ih: 78,
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
      { cat: "mercado", emoji: "🧺", x: 2430, y: 900, iw: 78, ih: 62,
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
      { cat: "mercado", emoji: "🥤", x: 2460, y: 620, iw: 60, ih: 74,
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
    deco: function () {
      let s = "";
      /* las cajas de los iconos: sirven para dejarles aire alrededor */
      const cajas = [[178, 742, 64, 76], [355, 577, 70, 66], [527, 734, 66, 72], [690, 834, 120, 92], [437, 515, 66, 60], [866, 715, 68, 60],
        [1055, 470, 130, 140], [1280, 625, 120, 130], [1179, 858, 62, 64], [1491, 453, 78, 74], [1590, 829, 120, 82], [1725, 530, 110, 120],
        [1995, 535, 170, 130], [2192, 741, 76, 78], [2391, 869, 78, 62], [2430, 583, 60, 74]];
      const libre = (x, y, w, h) => !cajas.some(c => x < c[0] + c[2] + 12 && x + w > c[0] - 12 && y < c[1] + c[3] + 12 && y + h > c[1] - 12);
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
      </defs>`;
      /* ---------- EL CIELO DEL CAMPO ---------- */
      s += `<g transform="translate(230 150)">
        <g><animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="70s" repeatCount="indefinite"/>
        ${[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(a => `<line x1="0" y1="0" x2="${(105 * Math.cos(a * Math.PI / 180)).toFixed(0)}" y2="${(105 * Math.sin(a * Math.PI / 180)).toFixed(0)}" stroke="rgba(255,213,79,.5)" stroke-width="7" stroke-linecap="round"/>`).join("")}</g>
        <circle r="72" fill="url(#frtXSol)"/></g>`;
      const nube = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})"><ellipse cx="0" cy="0" rx="92" ry="28" fill="rgba(255,255,255,.85)"/><ellipse cx="-56" cy="10" rx="46" ry="19" fill="rgba(255,255,255,.75)"/><ellipse cx="52" cy="11" rx="52" ry="21" fill="rgba(255,255,255,.75)"/><ellipse cx="-6" cy="-21" rx="48" ry="24" fill="#fff"/></g>`;
      [[830, 136, .95, 60, 54], [1640, 172, .8, -48, 62], [2340, 128, .85, 52, 48]].forEach(n => {
        s += `<g><animateTransform attributeName="transform" type="translate" values="0 0;${n[3]} 0;0 0" dur="${n[4]}s" repeatCount="indefinite"/>${nube(n[0], n[1], n[2])}</g>`;
      });
      [[1180, 210], [1320, 176], [2020, 214]].forEach(p => {
        s += `<path d="M${p[0]} ${p[1]} q-11 -10 -23 -6 M${p[0]} ${p[1]} q11 -10 23 -6" stroke="rgba(90,110,80,.45)" stroke-width="3.2" fill="none" stroke-linecap="round"/>`;
      });
      /* ---------- EL FONDO: lomas, setos y el campo abierto ---------- */
      s += `<path d="M-20 372 Q300 300 640 344 Q980 386 1320 330 Q1660 276 2000 336 Q2320 392 2620 340 L2620 460 L-20 460 Z" fill="#8fbc5c" opacity=".55"/>
        <path d="M-20 460 Q640 428 1300 456 Q1960 484 2620 452 L2620 1100 L-20 1100 Z" fill="url(#frtXCampo)"/>`;
      /* las franjas de siega del campo, para que no sea una alfombra lisa */
      s += `<g fill="rgba(255,255,255,.09)">${[[470, 26], [530, 32], [610, 38], [710, 46], [840, 56], [1000, 68]].map(f => `<path d="M-20 ${f[0]} Q1300 ${f[0] - 16} 2620 ${f[0]} L2620 ${f[0] + f[1]} Q1300 ${f[0] + f[1] - 16} -20 ${f[0] + f[1]} Z"/>`).join("")}</g>`;
      /* el camino de tierra del primer plano */
      s += `<path d="M-20 1006 Q640 984 1300 1010 Q1960 1036 2620 1004 L2620 1100 L-20 1100 Z" fill="#c4a878"/>
        <path d="M-20 1006 Q640 984 1300 1010 Q1960 1036 2620 1004 L2620 1024 Q1960 1056 1300 1030 Q640 1004 -20 1026 Z" fill="#d7bd90"/>
        <g stroke="rgba(140,112,68,.4)" stroke-width="7" fill="none"><path d="M-20 1052 Q640 1030 1300 1056 Q1960 1082 2620 1050"/></g>`;
      /* la hilera de cipreses que corta el viento */
      for (let x = 1180; x < 1960; x += 74) {
        s += `<path d="M${x} 404 q-15 -14 -15 -46 q0 -46 15 -62 q15 16 15 62 q0 32 -15 46 Z" fill="#3f6b32" opacity=".8"/>`;
      }
      /* la casita del hortelano, con su chimenea y su huerto de macetas */
      s += `<g><rect x="52" y="326" width="176" height="120" rx="6" fill="#f0e2c4"/>
        <path d="M36 330 L140 258 L244 330 Z" fill="url(#frtXTeja)"/>
        <rect x="186" y="266" width="24" height="50" rx="4" fill="#d9c8a4"/><ellipse cx="198" cy="258" rx="16" ry="8" fill="rgba(255,255,255,.55)"/>
        <rect x="76" y="352" width="46" height="42" rx="4" fill="#8ecae6"/><path d="M76 373 h46 M99 352 v42" stroke="#f0e2c4" stroke-width="4"/>
        <rect x="158" y="360" width="44" height="86" rx="4" fill="#a97f52"/><circle cx="194" cy="404" r="4" fill="#f5d76e"/>
        <g fill="#c8703d"><rect x="60" y="418" width="26" height="28" rx="4"/><rect x="98" y="424" width="22" height="22" rx="4"/></g>
        <circle cx="73" cy="410" r="11" fill="#66a72e"/><circle cx="109" cy="418" r="9" fill="#66a72e"/></g>`;
      /* el invernadero de cristal, con sus cuartos de luz */
      s += `<g><path d="M300 460 V352 L456 292 L612 352 V460 Z" fill="url(#frtXCristal)"/>
        <path d="M300 352 L456 292 L612 352" stroke="#cfd8dc" stroke-width="8" fill="none" stroke-linejoin="round"/>
        <g stroke="rgba(255,255,255,.85)" stroke-width="5">${[352, 388, 424].map(y => `<path d="M300 ${y} H612"/>`).join("")}${[352, 404, 456, 508, 560].map(x => `<path d="M${x} ${x < 456 ? (352 - (x - 300) * .385).toFixed(0) : (352 - (612 - x) * .385).toFixed(0)} V460"/>`).join("")}</g>
        <path d="M456 292 V460" stroke="#cfd8dc" stroke-width="6"/>
        <path d="M330 340 L380 316 L392 328 L342 352 Z" fill="rgba(255,255,255,.8)"><animate attributeName="opacity" values=".8;.35;.8" dur="7s" repeatCount="indefinite"/></path>
        <g fill="#66a72e" opacity=".55"><ellipse cx="352" cy="440" rx="26" ry="16"/><ellipse cx="424" cy="446" rx="28" ry="16"/><ellipse cx="512" cy="442" rx="26" ry="15"/><ellipse cx="576" cy="448" rx="24" ry="14"/></g></g>`;
      /* la hilera de frutales del fondo */
      [[700, .8], [820, 1], [960, .85], [1080, .7]].forEach(t => {
        const x = t[0], k = t[1];
        s += `<g opacity=".7"><rect x="${(x - 7 * k).toFixed(0)}" y="${(400 - 34 * k).toFixed(0)}" width="${(14 * k).toFixed(0)}" height="${(78 * k).toFixed(0)}" fill="#6d4c41"/>
          <circle cx="${x}" cy="${(374 - 34 * k).toFixed(0)}" r="${(52 * k).toFixed(0)}" fill="#4c8b3f"/>
          <circle cx="${(x - 22 * k).toFixed(0)}" cy="${(364 - 34 * k).toFixed(0)}" r="6" fill="#ef5350"/><circle cx="${(x + 20 * k).toFixed(0)}" cy="${(384 - 34 * k).toFixed(0)}" r="6" fill="#ffb300"/></g>`;
      });
      /* ---------- LOS BANCALES: caballones de tierra con sus surcos ---------- */
      const bancal = (x0, x1, y, alto) => {
        const mx = ((x0 + x1) / 2).toFixed(0), h = alto * 1.9, ab = (y + h).toFixed(0);
        let o = `<path d="M${x0 - 16} ${(y + h * .5).toFixed(0)} Q${mx} ${(y + h * .1).toFixed(0)} ${x1 + 16} ${(y + h * .5).toFixed(0)} Q${mx} ${(y + h * 1.25).toFixed(0)} ${x0 - 16} ${(y + h * .5).toFixed(0)} Z" fill="#5f8c33" opacity=".55"/>
          <path d="M${x0} ${y} Q${mx} ${(y - alto * .55).toFixed(0)} ${x1} ${y} L${x1} ${ab} Q${mx} ${(y + h * .72).toFixed(0)} ${x0} ${ab} Z" fill="url(#frtXTierra)"/>
          <path d="M${x0} ${y} Q${mx} ${(y - alto * .55).toFixed(0)} ${x1} ${y} L${x1} ${(y + alto * .5).toFixed(0)} Q${mx} ${(y - alto * .05).toFixed(0)} ${x0} ${(y + alto * .5).toFixed(0)} Z" fill="#b08957"/>`;
        for (let x = x0 + 40; x < x1 - 30; x += 88) o += `<path d="M${x} ${(y + alto * .95).toFixed(0)} q24 -10 48 0" stroke="rgba(60,36,22,.35)" stroke-width="5" fill="none" stroke-linecap="round"/>`;
        for (let x = x0 + 24; x < x1 - 20; x += 116) o += `<ellipse cx="${x}" cy="${(y + alto * .3).toFixed(0)}" rx="17" ry="7" fill="#8d6144" opacity=".7"/>`;
        return o;
      };
      /* cada bancal cae justo debajo de sus verduras, para que ninguna quede en el aire */
      s += bancal(1400, 1900, 528, 34) + bancal(300, 620, 576, 30) + bancal(940, 1300, 612, 36)
        + bancal(1640, 1920, 648, 34) + bancal(820, 1000, 758, 36) + bancal(1220, 1480, 758, 38)
        + bancal(60, 700, 810, 42) + bancal(620, 900, 924, 46) + bancal(1100, 1320, 920, 44) + bancal(1520, 1800, 908, 46);
      /* brotecitos verdes asomando por los caballones */
      for (let i = 0; i < 26; i++) {
        const x = 70 + az() * 1840, y = [536, 584, 620, 656, 766, 818, 930][Math.floor(az() * 7)];
        if (!libre(x - 12, y - 26, 24, 28)) continue;
        s += `<path d="M${x.toFixed(0)} ${y} q-7 -15 -14 -19 M${x.toFixed(0)} ${y} q0 -19 3 -25 M${x.toFixed(0)} ${y} q8 -14 15 -18" stroke="#7cb342" stroke-width="4" fill="none" stroke-linecap="round"/>`;
      }
      /* ---------- EL RIEGO POR GOTEO: mangueras y gotas ---------- */
      [[60, 700, 806, 8], [940, 1300, 608, 10], [1640, 1920, 644, 9]].forEach((g, i) => {
        s += `<path d="M${g[0]} ${g[2]} H${g[1]}" stroke="#37474f" stroke-width="6" stroke-linecap="round" opacity=".8"/>`;
        for (let x = g[0] + 60; x < g[1] - 40; x += 150) {
          if (!libre(x - 6, g[2], 12, 26)) continue;
          s += `<path d="M${x} ${g[2] + 8} q-4 9 0 13 q5 -3 0 -13 Z" fill="#4fc3f7"><animate attributeName="opacity" values="1;.15;1" dur="${(1.6 + (x % 5) * .2).toFixed(1)}s" repeatCount="indefinite"/></path>`;
        }
      });
      /* ---------- LAS ALAMBRADAS DE LAS TOMATERAS ---------- */
      [[318, 462], [1660, 1900]].forEach(a => {
        s += `<g><rect x="${a[0]}" y="${a[0] < 500 ? 508 : 560}" width="9" height="${a[0] < 500 ? 150 : 100}" rx="4" fill="#a97f52"/>
          <rect x="${a[1]}" y="${a[0] < 500 ? 508 : 560}" width="9" height="${a[0] < 500 ? 150 : 100}" rx="4" fill="#a97f52"/>
          <g stroke="#8d9aa6" stroke-width="3">${[0, 1, 2].map(i => `<path d="M${a[0]} ${(a[0] < 500 ? 528 : 578) + i * 34} H${a[1] + 9}"/>`).join("")}</g>
          <g stroke="#7cb342" stroke-width="4" fill="none">${[0, 1, 2, 3].map(i => `<path d="M${a[0] + 26 + i * ((a[1] - a[0]) / 4)} ${a[0] < 500 ? 654 : 656} q-9 -40 4 -80 q10 -30 2 -56"/>`).join("")}</g></g>`;
      });
      /* ---------- EL ESPANTAPÁJAROS, QUE SALUDA ---------- */
      s += `<g><rect x="990" y="700" width="12" height="200" rx="5" fill="#a97f52"/>
        <rect x="944" y="736" width="106" height="10" rx="5" fill="#a97f52"/>
        <g><animateTransform attributeName="transform" type="rotate" values="-2 996 700;2 996 700;-2 996 700" dur="6s" repeatCount="indefinite"/>
        <path d="M962 742 h70 l12 84 h-94 Z" fill="#e57373"/>
        <path d="M962 742 h70 l3 20 h-76 Z" fill="#ef9a9a"/>
        <circle cx="996" cy="700" r="30" fill="#f5d76e"/>
        <path d="M964 692 q32 -26 64 0 q-4 -16 -32 -18 q-28 2 -32 18 Z" fill="#c8a24a"/>
        <path d="M960 694 h72 v9 h-72 Z" fill="#c8a24a"/>
        <g fill="#5d4037"><circle cx="986" cy="700" r="3.4"/><circle cx="1006" cy="700" r="3.4"/></g>
        <path d="M986 712 q10 8 20 0" stroke="#5d4037" stroke-width="3" fill="none" stroke-linecap="round"/>
        <g stroke="#c8a24a" stroke-width="4" stroke-linecap="round"><path d="M948 746 l-12 12 M948 752 l-14 4 M1046 746 l12 12 M1046 752 l14 4"/></g></g></g>`;
      /* ---------- EL MERCADO: paradas, mostradores y el carro de cajas ---------- */
      s += `<path d="M1940 796 H2620 V1100 H1940 Z" fill="#cdbb96"/>
        <g stroke="rgba(255,255,255,.35)" stroke-width="3">${[856, 926, 996, 1066].map(y => `<path d="M1940 ${y} H2620"/>`).join("")}${[2060, 2190, 2320, 2450, 2580].map(x => `<path d="M${x} 800 V1100"/>`).join("")}</g>`;
      [[1952, "#ef5350", 430], [2200, "#43a047", 448], [2416, "#fb8c00", 424]].forEach(tp => {
        const x = tp[0], c = tp[1], y = tp[2];
        s += `<g><rect x="${x + 12}" y="${y}" width="10" height="${796 - y}" fill="#8d6e63"/><rect x="${x + 178}" y="${y}" width="10" height="${796 - y}" fill="#8d6e63"/>
          <path d="M${x - 8} ${y} L${x + 14} ${y - 58} L${x + 176} ${y - 58} L${x + 198} ${y} Z" fill="${c}"/>
          ${[0, 1, 2].map(i => `<path d="M${x + 18 + i * 52} ${y} L${x + 30 + i * 50} ${y - 58} L${x + 54 + i * 50} ${y - 58} L${x + 44 + i * 52} ${y} Z" fill="#fff" opacity=".92"/>`).join("")}
          <path d="M${x - 8} ${y} Q${x + 92} ${y + 22} ${x + 198} ${y} L${x + 198} ${y + 10} Q${x + 92} ${y + 32} ${x - 8} ${y + 10} Z" fill="${c}"/></g>`;
      });
      /* los mostradores donde se apoyan la balanza, el zumo y la parada del arcoíris */
      [[1948, 668, 252], [2150, 822, 176], [2372, 660, 216]].forEach(m => {
        s += `<g><rect x="${m[0]}" y="${m[1]}" width="${m[2]}" height="18" rx="6" fill="#c8a24a"/>
          <rect x="${m[0] + 8}" y="${m[1] + 18}" width="${m[2] - 16}" height="${m[1] < 700 ? 96 : 74}" rx="4" fill="#a97f52"/>
          <g stroke="rgba(255,255,255,.28)" stroke-width="3">${[0, 1, 2].map(i => `<path d="M${m[0] + 8} ${m[1] + 40 + i * 22} h${m[2] - 16}"/>`).join("")}</g></g>`;
      });
      /* las cajas de fruta apiladas y el carro del hortelano */
      const caja = (x, y, w, h, c) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="#c8a24a"/><rect x="${x + 5}" y="${y + 5}" width="${w - 10}" height="${(h - 10).toFixed(0)}" rx="3" fill="${c}"/>`;
      s += caja(1962, 786, 74, 44, "#ef5350") + caja(2044, 786, 74, 44, "#66bb6a") + caja(2004, 742, 74, 44, "#ffb300");
      s += `<g><rect x="2300" y="800" width="182" height="20" rx="7" fill="#8d6e63"/>
        <path d="M2312 820 h158 l-12 46 h-134 Z" fill="#a97f52"/>
        <circle cx="2338" cy="878" r="26" fill="#6d4c41"/><circle cx="2338" cy="878" r="10" fill="#a97f52"/>
        <circle cx="2450" cy="878" r="26" fill="#6d4c41"/><circle cx="2450" cy="878" r="10" fill="#a97f52"/>
        <path d="M2300 810 q-34 -8 -52 -32" stroke="#8d6e63" stroke-width="9" fill="none" stroke-linecap="round"/>
        ${caja(2318, 756, 66, 44, "#ab47bc")}${caja(2396, 756, 66, 44, "#ffee58")}</g>`;
      /* ---------- LA REGADERA Y LOS BICHITOS AMIGOS ---------- */
      s += `<g transform="translate(96 596)">
        <path d="M18 22 L74 22 L70 66 Q46 74 22 66 Z" fill="#78909c"/>
        <path d="M26 22 Q46 2 66 22" stroke="#607d8b" stroke-width="7" fill="none"/>
        <path d="M18 30 L-6 12 L-2 6 L22 24 Z" fill="#78909c"/><circle cx="-6" cy="9" r="7" fill="#90a4ae"/>
        ${[[-16, 26], [-24, 40], [-10, 44]].map(g => `<path d="M${g[0]} ${g[1]} q-2 8 2 10 q5 -2 2 -10 Z" fill="#4fc3f7"><animate attributeName="opacity" values="1;.2;1" dur="1.6s" repeatCount="indefinite"/></path>`).join("")}</g>`;
      const abeja = `<ellipse rx="10" ry="7" fill="#fdd835"/><path d="M-6 -3 L6 -3 M-7 1 L7 1 M-5 5 L5 5" stroke="#3e2723" stroke-width="2.4"/><ellipse cx="0" cy="-9" rx="7" ry="5" fill="rgba(255,255,255,.75)"/><circle cx="9" cy="-2" r="3" fill="#3e2723"/>`;
      s += `<g>${abeja}<animateMotion dur="48s" repeatCount="indefinite" rotate="auto" path="M 300 500 Q 700 400 1100 486 Q 1500 566 1880 470 Q 2200 396 2480 486 Q 2260 616 1800 566 Q 1200 508 700 604 Q 450 640 300 500"/></g>`;
      [[660, 692], [1460, 604]].forEach(b => s += `<g transform="translate(${b[0]} ${b[1]})">${abeja}</g>`);
      [[1240, 780, "M 1250 762 Q 1400 686 1548 744 Q 1646 794 1498 824 Q 1330 842 1250 762", 32],
        [2100, 350, "M 2100 350 Q 2230 300 2340 356 Q 2400 392 2300 412 Q 2160 424 2100 350", 26]].forEach(m => {
        s += `<g opacity=".92"><path d="M0 0 Q-13 -15 -21 -4 Q-25 5 -12 7 Z" fill="#ab47bc"/><path d="M0 0 Q13 -15 21 -4 Q25 5 12 7 Z" fill="#ce93d8"/>
          <rect x="-1.6" y="-6" width="3.2" height="15" rx="1.6" fill="#4e342e"/>
          <animateMotion dur="${m[3]}s" repeatCount="indefinite" path="${m[2]}"/></g>`;
      });
      /* unas piedras y la hierba del primer plano */
      for (let i = 0; i < 9; i++) {
        const x = 120 + az() * 1700, y = 1010 + az() * 60;
        s += `<ellipse cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" rx="${(9 + az() * 9).toFixed(0)}" ry="${(6 + az() * 5).toFixed(0)}" fill="#8d8378" opacity=".6"/>`;
      }
      for (let x = 40; x < 1940; x += 96) {
        s += `<path d="M${x} 1082 q-7 -20 -14 -25 M${x} 1082 q0 -24 3 -31 M${x} 1082 q9 -19 17 -23" stroke="#5f9b30" stroke-width="4.5" fill="none" stroke-linecap="round"/>`;
      }
      return decoSvg(s, 2600);
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
