"use strict";
/* ============================================================
   Contenido de STAR WARS (parte B): historias ramificadas,
   canciones, traductor, mapa de exploración y charla.
   ============================================================ */

Object.assign(THEMES.starwars.content, {

  /* ---------- HISTORIAS (ramifican de verdad) ---------- */
  stories: [
    {
      id: "sable", emoji: "💚", start: "n1",
      title: { es: "El sable perdido de Yoda", ca: "El sabre perdut de Yoda", en: "Yoda's Lost Saber", cs: "Yodův ztracený meč", fr: "Le sabre perdu de Yoda" },
      nodes: {
        n1: {
          text: { es: "¡{name}! Yoda ha perdido su sable de luz en el pantano de Dagobah. Ha venido muy triste: sin él no puede alumbrar a las ranitas por la noche. ¿Le ayudamos a encontrarlo?", ca: "{name}! Yoda ha perdut el seu sabre de llum al pantà de Dagobah. Ha vingut molt trist: sense ell no pot fer llum a les granotetes de nit. L'ajudem a trobar-lo?", en: "{name}! Yoda has lost his lightsaber in the Dagobah swamp. He came to us very sad: without it he cannot light the way for the little frogs at night. Shall we help him find it?", cs: "{name}! Yoda ztratil svůj světelný meč v bažinách Dagobahu. Přišel celý smutný: bez něj nemůže večer svítit žabkám na cestu. Pomůžeme mu ho najít?", fr: "{name} ! Yoda a perdu son sabre laser dans le marais de Dagobah. Il est arrivé tout triste : sans lui, il ne peut plus éclairer les petites grenouilles la nuit. On l'aide à le retrouver ?" },
          choices: [
            { t: { es: "Buscamos en el barro del pantano", ca: "Busquem al fang del pantà", en: "Let's search the swamp mud", cs: "Hledáme v bahně bažiny", fr: "Cherchons dans la boue du marais" }, go: "n2a" },
            { t: { es: "Preguntamos a las ranas", ca: "Preguntem a les granotes", en: "Let's ask the frogs", cs: "Zeptáme se žab", fr: "Demandons aux grenouilles" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "El barro hace ploc-ploc bajo los pies. De pronto asoma una serpiente simpática: dice que vio una lucecita verde moviéndose hacia la cueva del fondo.", ca: "El fang fa ploc-ploc sota els peus. De sobte treu el cap una serp simpàtica: diu que va veure una llumeta verda movent-se cap a la cova del fons.", en: "The mud goes squish-squish under your feet. Suddenly a friendly snake pops up: she says she saw a little green light moving towards the cave at the back.", cs: "Bahno dělá mlask-mlask pod nohama. Najednou se vynoří přátelský had: prý viděl zelené světýlko, jak se stěhuje k jeskyni vzadu.", fr: "La boue fait floc-floc sous les pieds. Soudain, un gentil serpent sort la tête : il dit qu'il a vu une petite lumière verte se déplacer vers la grotte du fond." },
          choices: [
            { t: { es: "Seguimos a la serpiente hasta la cueva", ca: "Seguim la serp fins a la cova", en: "We follow the snake to the cave", cs: "Půjdeme za hadem k jeskyni", fr: "On suit le serpent jusqu'à la grotte" }, go: "n3a" },
            { t: { es: "Seguimos rebuscando en el barro", ca: "Seguim remenant el fang", en: "We keep digging in the mud", cs: "Hledáme dál v bahně", fr: "On continue de fouiller la boue" }, go: "n3b" }
          ]
        },
        n3b: {
          text: { es: "Encontráis una bota vieja, una tetera y tres caracoles dormidos. ¡Aquí no está! Pero a lo lejos, dentro de la cueva, algo brilla de color verde...", ca: "Trobeu una bota vella, una tetera i tres cargols adormits. Aquí no hi és! Però lluny, dins de la cova, alguna cosa brilla de color verd...", en: "You find an old boot, a teapot and three sleeping snails. It is not here! But far away, inside the cave, something is glowing green...", cs: "Najdete starou botu, čajovou konvici a tři spící šneky. Tady meč není! Ale v dálce, uvnitř jeskyně, něco zeleně září...", fr: "Vous trouvez une vieille botte, une théière et trois escargots endormis. Il n'est pas là ! Mais au loin, dans la grotte, quelque chose brille en vert..." },
          choices: [
            { t: { es: "¡A la cueva!", ca: "A la cova!", en: "To the cave!", cs: "Do jeskyně!", fr: "À la grotte !" }, go: "n3a" }
          ]
        },
        n3a: {
          text: { es: "Dentro de la cueva, un bichito tímido del pantano usa el sable encendido como lamparita de noche. Susurra: 'Es que me da miedo la oscuridad...'. ¿Qué hacemos, {name}?", ca: "Dins de la cova, una bestioleta tímida del pantà fa servir el sabre encès com a llumeta de nit. Xiuxiueja: 'És que em fa por la foscor...'. Què fem, {name}?", en: "Inside the cave, a shy little swamp critter is using the glowing saber as a night light. It whispers: 'The dark is just so scary...'. What do we do, {name}?", cs: "V jeskyni sedí malé plaché zvířátko z bažiny a používá rozsvícený meč jako noční lampičku. Šeptá: 'Já se totiž bojím tmy...'. Co uděláme, {name}?", fr: "Dans la grotte, une petite bête timide du marais utilise le sabre allumé comme veilleuse. Elle chuchote : « C'est que j'ai peur du noir... ». Qu'est-ce qu'on fait, {name} ?" },
          choices: [
            { t: { es: "Se lo pedimos con mucha amabilidad", ca: "L'hi demanem amb molta amabilitat", en: "We ask for it very kindly", cs: "Hezky ho poprosíme", fr: "On le lui demande très gentiment" }, go: "e1" },
            { t: { es: "Le ofrecemos un cambio: un farolillo de luciérnagas", ca: "Li oferim un canvi: un fanalet de cuques de llum", en: "We offer a trade: a firefly lantern", cs: "Nabídneme mu výměnu: lucerničku se světluškami", fr: "On lui propose un échange : une lanterne de lucioles" }, go: "e2" }
          ]
        },
        n2b: {
          text: { es: "Las ranas croan todas a la vez: una libélula curiosa se llevó el sable brillante a su nido, ¡en lo más alto de un árbol gigante!", ca: "Les granotes rauquen totes alhora: una libèl·lula curiosa es va endur el sabre brillant al seu niu, a dalt de tot d'un arbre gegant!", en: "The frogs all croak at once: a curious dragonfly carried the shiny saber to her nest, at the very top of a giant tree!", cs: "Žáby kvákají jedna přes druhou: zvědavá vážka odnesla ten zářivý meč do svého hnízda, až úplně nahoru na obří strom!", fr: "Les grenouilles coassent toutes en même temps : une libellule curieuse a emporté le sabre brillant dans son nid, tout en haut d'un arbre géant !" },
          choices: [
            { t: { es: "Trepamos despacito al árbol", ca: "Enfilem l'arbre a poc a poc", en: "We climb the tree slowly", cs: "Pomalu vylezeme na strom", fr: "On grimpe doucement à l'arbre" }, go: "n3c" },
            { t: { es: "Avisamos a Yoda para que use la Fuerza", ca: "Avisem Yoda perquè faci servir la Força", en: "We call Yoda to use the Force", cs: "Zavoláme Yodu, ať použije Sílu", fr: "On appelle Yoda pour qu'il utilise la Force" }, go: "n3d" }
          ]
        },
        n3c: {
          text: { es: "Trepáis con muchísimo cuidado. La libélula se asusta y abraza el sable con las alitas. {name} le canta bajito y le explica que es de Yoda, que lo necesita para alumbrar a las ranas.", ca: "Enfileu amb moltíssim de compte. La libèl·lula s'espanta i abraça el sabre amb les aletes. {name} li canta fluixet i li explica que és de Yoda, que el necessita per fer llum a les granotes.", en: "You climb up ever so carefully. The dragonfly gets scared and hugs the saber with her little wings. {name} sings to her softly and explains it belongs to Yoda, who needs it to light the way for the frogs.", cs: "Šplháte nahoru opatrně jako myšky. Vážka se lekne a obejme meč křidélky. {name} jí tiše zazpívá a vysvětlí, že meč patří Yodovi, který jím svítí žabkám na cestu.", fr: "Vous grimpez tout doucement. La libellule a peur et serre le sabre avec ses petites ailes. {name} lui chante une chanson tout bas et lui explique qu'il est à Yoda, qui en a besoin pour éclairer les grenouilles." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e3" }
          ]
        },
        n3d: {
          text: { es: "Yoda cierra los ojos, levanta la manita... y el nido entero baja flotando despacio, con toda la familia libélula dentro, ¡como en un ascensor mágico!", ca: "Yoda tanca els ulls, aixeca la maneta... i el niu sencer baixa flotant a poc a poc, amb tota la família libèl·lula a dins, com en un ascensor màgic!", en: "Yoda closes his eyes, lifts his little hand... and the whole nest floats gently down, with the entire dragonfly family inside, like a magic elevator!", cs: "Yoda zavře oči, zvedne ručičku... a celé hnízdo i s vážčí rodinkou pomaloučku slétne dolů, jako v kouzelném výtahu!", fr: "Yoda ferme les yeux, lève sa petite main... et le nid tout entier descend en flottant doucement, avec toute la famille libellule dedans, comme dans un ascenseur magique !" },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e3" }
          ]
        },
        e1: {
          end: true,
          text: { es: "Se lo pedís por favor, con voz suave... y el bichito lo devuelve enseguida. Yoda le regala un tarrito de luciérnagas para que nunca más tenga miedo. 'Pedir las cosas con cariño, la mejor magia es', sonríe Yoda. ¡Bien hecho, {name}!", ca: "L'hi demaneu si us plau, amb veu suau... i la bestioleta el torna de seguida. Yoda li regala un potet de cuques de llum perquè mai més tingui por. 'Demanar les coses amb estima, la millor màgia és', somriu Yoda. Ben fet, {name}!", en: "You ask nicely, with a soft voice... and the little critter gives it right back. Yoda gifts it a jar of fireflies so it never has to be scared again. 'Asking with kindness, the greatest magic it is', Yoda smiles. Well done, {name}!", cs: "Poprosíte hezky, tichým hláskem... a zvířátko meč hned vrátí. Yoda mu daruje sklenici se světluškami, aby se už nikdy nebálo tmy. 'Poprosit s láskou, ta největší magie to je,' usměje se Yoda. Výborně, {name}!", fr: "Vous le demandez gentiment, d'une voix douce... et la petite bête le rend tout de suite. Yoda lui offre un bocal de lucioles pour qu'elle n'ait plus jamais peur. « Demander avec gentillesse, la plus grande magie c'est », sourit Yoda. Bravo, {name} !" }
        },
        e2: {
          end: true,
          text: { es: "¡Trato hecho! El farolillo de luciérnagas por el sable. El bichito duerme feliz con su nueva lamparita, y Yoda vuelve a alumbrar el pantano. Desde esa noche brillan dos lucecitas en Dagobah. Una buena idea arregla casi todo, {name}.", ca: "Tracte fet! El fanalet de cuques de llum pel sabre. La bestioleta dorm feliç amb la seva nova llumeta, i Yoda torna a fer llum al pantà. Des d'aquella nit brillen dues llumetes a Dagobah. Una bona idea ho arregla gairebé tot, {name}.", en: "It is a deal! The firefly lantern for the saber. The little critter sleeps happily with its new night light, and Yoda lights up the swamp again. Since that night, two little lights shine on Dagobah. A good idea fixes almost anything, {name}.", cs: "Platí! Lucernička se světluškami za meč. Zvířátko šťastně spí se svou novou lampičkou a Yoda zase svítí bažinou. Od té noci září na Dagobahu dvě světýlka. Dobrý nápad spraví skoro všechno, {name}.", fr: "Marché conclu ! La lanterne de lucioles contre le sabre. La petite bête dort heureuse avec sa nouvelle veilleuse, et Yoda éclaire à nouveau le marais. Depuis cette nuit-là, deux petites lumières brillent sur Dagobah. Une bonne idée répare presque tout, {name} !" }
        },
        e3: {
          end: true,
          text: { es: "La libélula devuelve el sable, y Yoda le deja dar una vuelta de luz cada noche alrededor de su cabaña. 'Hazlo o no lo hagas, pero no lo intentes', ríe Yoda mientras el pantano entero brilla de verde. ¡Misión cumplida, {name}!", ca: "La libèl·lula torna el sabre, i Yoda li deixa fer una volta de llum cada nit al voltant de la seva cabana. 'Fes-ho o no ho facis, però no ho intentis', riu Yoda mentre el pantà sencer brilla de verd. Missió complerta, {name}!", en: "The dragonfly returns the saber, and Yoda lets her fly one glowing lap around his hut every night. 'Do or do not, there is no try', Yoda laughs while the whole swamp glows green. Mission accomplished, {name}!", cs: "Vážka meč vrátí a Yoda jí dovolí každý večer jednou zářivě obletět jeho chaloupku. 'Udělej to, nebo to nedělej. Žádné zkusím neexistuje,' směje se Yoda a celá bažina svítí zeleně. Mise splněna, {name}!", fr: "La libellule rend le sabre, et Yoda la laisse faire un tour lumineux chaque nuit autour de sa cabane. « Fais-le ou ne le fais pas, il n'y a pas d'essai », rit Yoda pendant que tout le marais brille en vert. Mission accomplie, {name} !" }
        }
      }
    },
    {
      id: "porg", emoji: "🐦", start: "n1",
      title: { es: "El porg que quería volar", ca: "El porg que volia volar", en: "The Porg Who Wanted to Fly", cs: "Porg, který chtěl létat", fr: "Le porg qui voulait voler" },
      nodes: {
        n1: {
          text: { es: "En una isla verde en medio del mar vive Pip, un porg pequeñito. Mira a las gaviotas volar lejos y suspira: él aletea, aletea... y ¡ploc!, se cae de pompas. ¿Cómo lo ayudamos, {name}?", ca: "En una illa verda al mig del mar hi viu Pip, un porg petitó. Mira les gavines volar lluny i sospira: ell aleteja, aleteja... i ploc!, cau de cul. Com l'ajudem, {name}?", en: "On a green island in the middle of the sea lives Pip, a tiny porg. He watches the seagulls fly far away and sighs: he flaps and flaps... and plop!, down he goes on his bottom. How do we help him, {name}?", cs: "Na zeleném ostrově uprostřed moře žije Pip, maličký porg. Kouká, jak racci létají do dálky, a vzdychá: on mává, mává křidélky... a žuch!, spadne na zadeček. Jak mu pomůžeme, {name}?", fr: "Sur une île verte au milieu de la mer vit Pip, un tout petit porg. Il regarde les mouettes voler au loin et soupire : il bat des ailes, encore et encore... et floc !, il tombe sur les fesses. Comment on l'aide, {name} ?" },
          choices: [
            { t: { es: "Le construimos un planeador", ca: "Li construïm un planador", en: "We build him a glider", cs: "Postavíme mu kluzáček", fr: "On lui construit un planeur" }, go: "n2a" },
            { t: { es: "Entrenamos juntos cada día", ca: "Entrenem junts cada dia", en: "We train together every day", cs: "Budeme spolu každý den trénovat", fr: "On s'entraîne ensemble chaque jour" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "Chewbacca ayuda encantado: con ramitas y hojas grandes montáis un planeador chiquitín, justo de la medida de Pip. ¡Hasta tiene sitio para sus patitas!", ca: "Chewbacca ajuda encantat: amb branquetes i fulles grans munteu un planador petitó, just de la mida de Pip. Fins i tot té lloc per a les seves potetes!", en: "Chewbacca is delighted to help: with twigs and big leaves you build a teeny glider, exactly Pip's size. It even has room for his little feet!", cs: "Chewbacca rád pomůže: z větviček a velkých listů postavíte maličký kluzák přesně na míru Pipovi. Má dokonce místo na jeho nožičky!", fr: "Chewbacca aide avec joie : avec des brindilles et de grandes feuilles, vous montez un minuscule planeur, juste à la taille de Pip. Il y a même de la place pour ses petites pattes !" },
          choices: [
            { t: { es: "Lo probamos desde una roca bajita", ca: "El provem des d'una roca baixeta", en: "We test it from a low rock", cs: "Vyzkoušíme ho z nízkého kamene", fr: "On l'essaie depuis un petit rocher" }, go: "n3a" },
            { t: { es: "Lo probamos desde el acantilado alto", ca: "El provem des del penya-segat alt", en: "We test it from the high cliff", cs: "Vyzkoušíme ho z vysokého útesu", fr: "On l'essaie depuis la haute falaise" }, go: "n3b" }
          ]
        },
        n3b: {
          text: { es: "¡Uy, demasiado alto! Chewbacca dice 'wrau' (que significa: mejor no). Los grandes vuelos empiezan con saltos pequeños. Mejor poquito a poco.", ca: "Ui, massa alt! Chewbacca diu 'wrau' (que vol dir: millor no). Els grans vols comencen amb salts petits. Millor a poc a poc.", en: "Oops, way too high! Chewbacca says 'wrau' (which means: better not). Big flights start with small jumps. Little by little is best.", cs: "Jejda, moc vysoko! Chewbacca řekne 'wrau' (to znamená: raději ne). Velké lety začínají malými skoky. Nejlepší je pěkně pomaloučku.", fr: "Oups, beaucoup trop haut ! Chewbacca dit « wrau » (ce qui veut dire : mieux vaut pas). Les grands vols commencent par des petits sauts. Mieux vaut y aller petit à petit." },
          choices: [
            { t: { es: "A la roca bajita", ca: "A la roca baixeta", en: "To the low rock", cs: "K nízkému kameni", fr: "Au petit rocher" }, go: "n3a" }
          ]
        },
        n3a: {
          text: { es: "Pip planea dos metros enteros y aterriza en la arena con los ojos brillantes de alegría. Justo entonces sopla un viento suave, perfecto para volar. ¿Y ahora?", ca: "Pip plana dos metres sencers i aterra a la sorra amb els ulls brillants d'alegria. Just llavors bufa un vent suau, perfecte per volar. I ara?", en: "Pip glides two whole metres and lands on the sand with his eyes shining with joy. Right then a gentle wind starts to blow, perfect for flying. What now?", cs: "Pip plachtí celé dva metry a přistane v písku s očima rozzářenýma radostí. Zrovna v tu chvíli zafouká jemný vítr, ideální na létání. Co teď?", fr: "Pip plane sur deux mètres entiers et atterrit sur le sable, les yeux brillants de joie. Juste à ce moment-là souffle un vent doux, parfait pour voler. Et maintenant ?" },
          choices: [
            { t: { es: "Dejamos que lo intente él solito", ca: "Deixem que ho intenti tot solet", en: "We let him try all by himself", cs: "Necháme ho, ať to zkusí sám", fr: "On le laisse essayer tout seul" }, go: "e1" },
            { t: { es: "Lo acompañamos volando con el Halcón", ca: "L'acompanyem volant amb el Falcó", en: "We fly alongside in the Falcon", cs: "Poletíme kousek vedle něj s Falconem", fr: "On l'accompagne en volant avec le Faucon" }, go: "n4" }
          ]
        },
        n4: {
          text: { es: "El Halcón Milenario vuela despacito a su lado, como un hermano mayor. Con sus amigos cerca, Pip se atreve más y más, y sube un poquito más alto en cada vuelta.", ca: "El Falcó Mil·lenari vola a poc a poc al seu costat, com un germà gran. Amb els amics a prop, Pip s'atreveix més i més, i puja una miqueta més amunt a cada volta.", en: "The Millennium Falcon flies slowly beside him, like a big brother. With his friends close by, Pip gets braver and braver, climbing a little higher with every lap.", cs: "Millennium Falcon letí pomaloučku vedle něj jako velký brácha. S kamarády nablízku si Pip troufá víc a víc a s každým kolečkem vyletí o kousek výš.", fr: "Le Faucon Millenium vole tout doucement à côté de lui, comme un grand frère. Avec ses amis tout près, Pip ose de plus en plus et monte un petit peu plus haut à chaque tour." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e3" }
          ]
        },
        n2b: {
          text: { es: "¡Entrenamiento porg! Uno, dos, ¡aleteo! Saltos sobre charcos, carreras contra el viento y muchas risas. Cada día, Pip salta un poquito más lejos.", ca: "Entrenament porg! Un, dos, aleteig! Salts sobre bassals, curses contra el vent i moltes rialles. Cada dia, Pip salta una miqueta més lluny.", en: "Porg training! One, two, flap! Jumping over puddles, racing the wind and lots of giggles. Every day, Pip jumps a little bit farther.", cs: "Porgový trénink! Raz, dva, mávat! Skoky přes louže, závody s větrem a spousta smíchu. Každý den skočí Pip o kousíček dál.", fr: "Entraînement de porg ! Un, deux, on bat des ailes ! Des sauts par-dessus les flaques, des courses contre le vent et plein de rires. Chaque jour, Pip saute un petit peu plus loin." },
          choices: [
            { t: { es: "Lo apuntamos al concurso de planeo de la isla", ca: "L'apuntem al concurs de planatge de l'illa", en: "We sign him up for the island gliding contest", cs: "Přihlásíme ho na ostrovní závody v plachtění", fr: "On l'inscrit au concours de vol plané de l'île" }, go: "n4b" },
            { t: { es: "Se lo enseñamos a mamá porg", ca: "Ho ensenyem a la mama porg", en: "We show mama porg", cs: "Ukážeme to mámě porgové", fr: "On montre ça à maman porg" }, go: "e2" }
          ]
        },
        n4b: {
          text: { es: "¡Día de concurso! Todos los porgs de la isla miran desde las rocas. Pip respira hondo, cierra los ojos un segundo y se concentra como un pequeño Jedi.", ca: "Dia de concurs! Tots els porgs de l'illa miren des de les roques. Pip respira fondo, tanca els ulls un segon i es concentra com un petit Jedi.", en: "Contest day! All the porgs on the island watch from the rocks. Pip takes a deep breath, closes his eyes for a second and focuses like a little Jedi.", cs: "Den závodů! Všichni porgové z ostrova se dívají ze skal. Pip se zhluboka nadechne, na vteřinku zavře oči a soustředí se jako malý Jedi.", fr: "Jour de concours ! Tous les porgs de l'île regardent depuis les rochers. Pip respire un grand coup, ferme les yeux une seconde et se concentre comme un petit Jedi." },
          choices: [
            { t: { es: "¡A volar, Pip!", ca: "A volar, Pip!", en: "Fly, Pip, fly!", cs: "Leť, Pipe, leť!", fr: "Vole, Pip, vole !" }, go: "e3" }
          ]
        },
        e1: {
          end: true,
          text: { es: "Pip corre, aletea... y hace el planeo más bonito jamás visto: bajito, cortito y perfecto. Descubre que los porgs no vuelan lejos: vuelan alegre. Y ser tal como eres ya es una forma de volar, {name}.", ca: "Pip corre, aleteja... i fa el planatge més bonic mai vist: baixet, curtet i perfecte. Descobreix que els porgs no volen lluny: volen alegre. I ser tal com ets ja és una manera de volar, {name}.", en: "Pip runs, flaps... and makes the loveliest glide ever seen: low, short and perfect. He discovers that porgs do not fly far: they fly happy. And being just the way you are is already a way of flying, {name}.", cs: "Pip se rozběhne, zamává křídly... a předvede nejkrásnější plachtění, jaké kdy kdo viděl: nízko, kousek a dokonale. Zjistí, že porgové nelétají daleko: létají vesele. A být sám sebou, to už je způsob létání, {name}.", fr: "Pip court, bat des ailes... et réussit le plus joli vol plané jamais vu : bas, court et parfait. Il découvre que les porgs ne volent pas loin : ils volent joyeux. Et être comme tu es, c'est déjà une façon de voler, {name}." }
        },
        e2: {
          end: true,
          text: { es: "Mamá porg lo mira saltar y lo abraza con las alas: 'Tú vuelas con el corazón, y ese vuelo es el más alto que existe'. Esa noche Pip se duerme calentito... ¡y sonriendo! Buen trabajo, {name}.", ca: "La mama porg el mira saltar i l'abraça amb les ales: 'Tu voles amb el cor, i aquest vol és el més alt que existeix'. Aquella nit Pip s'adorm calentó... i somrient! Bona feina, {name}.", en: "Mama porg watches him jump and hugs him with her wings: 'You fly with your heart, and that is the highest flight there is'. That night Pip falls asleep warm and cosy... and smiling! Good job, {name}.", cs: "Máma porgová ho pozoruje při skoku a obejme ho křídly: 'Ty létáš srdcem, a takový let je nejvyšší ze všech.' Tu noc Pip usíná v teploučku... a s úsměvem! Dobrá práce, {name}.", fr: "Maman porg le regarde sauter et le serre dans ses ailes : « Toi, tu voles avec le cœur, et ce vol-là est le plus haut qui existe ». Cette nuit-là, Pip s'endort bien au chaud... et en souriant ! Beau travail, {name}." }
        },
        e3: {
          end: true,
          text: { es: "Rodeado de amigos que lo animan, Pip planea más lejos que nunca y aterriza entre aplausos y gritos de '¡yub-yub!'. Con amigos al lado todo se vuela mejor. ¡Bravo, {name}!", ca: "Envoltat d'amics que l'animen, Pip plana més lluny que mai i aterra entre aplaudiments i crits de 'yub-yub!'. Amb amics al costat tot es vola millor. Bravo, {name}!", en: "Surrounded by friends cheering him on, Pip glides farther than ever and lands to applause and shouts of 'yub-yub!'. With friends by your side, everything flies better. Bravo, {name}!", cs: "Obklopený kamarády, kteří mu fandí, plachtí Pip dál než kdy dřív a přistane za potlesku a volání 'yub-yub!'. S přáteli po boku se létá nejlíp. Výborně, {name}!", fr: "Entouré d'amis qui l'encouragent, Pip plane plus loin que jamais et atterrit sous les applaudissements et les cris de « yub-yub ! ». Avec des amis à ses côtés, tout vole mieux. Bravo, {name} !" }
        }
      }
    },
    {
      id: "carrera", emoji: "🏁", start: "n1",
      title: { es: "La carrera del Halcón", ca: "La cursa del Falcó", en: "The Falcon's Race", cs: "Závod Falconu", fr: "La course du Faucon" },
      nodes: {
        n1: {
          text: { es: "¡Gran carrera amistosa de naves! El Halcón Milenario contra la Estrella Plateada, una nave nueva y relucientísima. Chewbacca te nombra copiloto, {name}. ¿Qué ruta tomamos?", ca: "Gran cursa amistosa de naus! El Falcó Mil·lenari contra l'Estrella Platejada, una nau nova i lluentíssima. Chewbacca et nomena copilot, {name}. Quina ruta agafem?", en: "The great friendly starship race! The Millennium Falcon against the Silver Star, a brand new super shiny ship. Chewbacca names you co-pilot, {name}. Which route do we take?", cs: "Velký přátelský závod lodí! Millennium Falcon proti Stříbrné hvězdě, nové a nablýskané lodi. Chewbacca tě jmenuje kopilotem, {name}. Kudy poletíme?", fr: "La grande course amicale de vaisseaux ! Le Faucon Millenium contre l'Étoile Argentée, un vaisseau tout neuf et très brillant. Chewbacca te nomme copilote, {name}. Quelle route on prend ?" },
          choices: [
            { t: { es: "El atajo por el campo de asteroides", ca: "La drecera pel camp d'asteroides", en: "The shortcut through the asteroid field", cs: "Zkratkou přes pole asteroidů", fr: "Le raccourci par le champ d'astéroïdes" }, go: "n2a" },
            { t: { es: "La ruta tranquila alrededor de la nebulosa", ca: "La ruta tranquil·la al voltant de la nebulosa", en: "The calm route around the nebula", cs: "Klidnou cestou kolem mlhoviny", fr: "La route tranquille autour de la nébuleuse" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "¡Asteroides por todas partes, girando como palomitas gigantes! ¿Cómo pasamos, {name}?", ca: "Asteroides per tot arreu, girant com crispetes gegants! Com passem, {name}?", en: "Asteroids everywhere, spinning like giant popcorn! How do we get through, {name}?", cs: "Asteroidy všude kolem, točí se jako obří popcorn! Jak proletíme, {name}?", fr: "Des astéroïdes partout, qui tournent comme du pop-corn géant ! Comment on passe, {name} ?" },
          choices: [
            { t: { es: "Los esquivamos bailando", ca: "Els esquivem ballant", en: "We dodge them dancing", cs: "Protančíme mezi nimi", fr: "On les esquive en dansant" }, go: "n3a" },
            { t: { es: "Les pedimos paso por favor", ca: "Els demanem pas si us plau", en: "We politely ask them to let us through", cs: "Hezky je poprosíme, ať nás nechají projet", fr: "On leur demande gentiment de nous laisser passer" }, go: "n3b" }
          ]
        },
        n3a: {
          text: { es: "El Halcón baila entre las rocas: ¡fiu, fiu, fiu! Qué mareo tan divertido. De la emoción, el motor suelta un hipo: ¡hip! Pero Chewbacca lo arregla con dos golpecitos.", ca: "El Falcó balla entre les roques: fiu, fiu, fiu! Quin mareig tan divertit. De l'emoció, el motor deixa anar un singlot: hip! Però Chewbacca ho arregla amb dos copets.", en: "The Falcon dances between the rocks: whoosh, whoosh, whoosh! What a fun dizzy ride. Out of excitement, the engine lets out a hiccup: hic! But Chewbacca fixes it with two little taps.", cs: "Falcon tančí mezi kameny: fíí, fíí, fíí! To je legrační motání. Motor z toho vzrušení dostane škytavku: škyt! Ale Chewbacca ho spraví dvěma ťuknutími.", fr: "Le Faucon danse entre les rochers : fiou, fiou, fiou ! Quel tourbillon amusant. Sous le coup de l'émotion, le moteur a le hoquet : hip ! Mais Chewbacca le répare avec deux petites tapes." },
          choices: [
            { t: { es: "¡A la recta final!", ca: "A la recta final!", en: "To the final stretch!", cs: "Do cílové rovinky!", fr: "Vers la dernière ligne droite !" }, go: "n4" }
          ]
        },
        n3b: {
          text: { es: "Los asteroides se quedan asombrados: ¡nunca nadie les había pedido paso por favor! Se apartan rodando y os saludan. El más viejito os regala un empujoncito de polvo de estrellas.", ca: "Els asteroides es queden bocabadats: mai ningú no els havia demanat pas si us plau! S'aparten rodant i us saluden. El més vellet us regala una empenteta de pols d'estrelles.", en: "The asteroids are amazed: nobody had ever said please to them before! They roll aside and wave at you. The oldest one gives you a little stardust push as a gift.", cs: "Asteroidy zůstanou koukat: ještě nikdy je nikdo nepoprosil o cestu! Odkutálejí se stranou a mávají vám. Ten nejstarší vám daruje postrčení z hvězdného prachu.", fr: "Les astéroïdes sont épatés : personne ne leur avait jamais demandé le passage si gentiment ! Ils s'écartent en roulant et vous saluent. Le plus vieux vous offre une petite poussée de poussière d'étoiles." },
          choices: [
            { t: { es: "¡A la recta final!", ca: "A la recta final!", en: "To the final stretch!", cs: "Do cílové rovinky!", fr: "Vers la dernière ligne droite !" }, go: "n4" }
          ]
        },
        n2b: {
          text: { es: "Rodeando la nebulosa veis algo: ¡la Estrella Plateada está parada, sin combustible, y su piloto está triste! ¿Qué hacemos, {name}?", ca: "Vorejant la nebulosa veieu una cosa: l'Estrella Platejada està parada, sense combustible, i el seu pilot està trist! Què fem, {name}?", en: "Going around the nebula you spot something: the Silver Star has stopped, out of fuel, and her pilot looks so sad! What do we do, {name}?", cs: "Cestou kolem mlhoviny něco uvidíte: Stříbrná hvězda stojí, došlo jí palivo a její pilot je smutný! Co uděláme, {name}?", fr: "En contournant la nébuleuse, vous voyez quelque chose : l'Étoile Argentée est arrêtée, sans carburant, et son pilote est tout triste ! Qu'est-ce qu'on fait, {name} ?" },
          choices: [
            { t: { es: "Paramos a ayudar", ca: "Parem per ajudar", en: "We stop to help", cs: "Zastavíme a pomůžeme", fr: "On s'arrête pour aider" }, go: "n3c" },
            { t: { es: "Seguimos la carrera", ca: "Seguim la cursa", en: "We keep racing", cs: "Pokračujeme v závodě", fr: "On continue la course" }, go: "n4" }
          ]
        },
        n3c: {
          text: { es: "Le dais la mitad de vuestro combustible. El piloto sonríe de oreja a oreja: '¡Nadie había parado nunca por mí!'.", ca: "Li doneu la meitat del vostre combustible. El pilot somriu d'orella a orella: 'Mai ningú no havia parat per mi!'.", en: "You give him half of your fuel. The pilot smiles from ear to ear: 'Nobody ever stopped for me before!'.", cs: "Dáte mu polovinu svého paliva. Pilot se usměje od ucha k uchu: 'Ještě nikdy pro mě nikdo nezastavil!'.", fr: "Vous lui donnez la moitié de votre carburant. Le pilote sourit jusqu'aux oreilles : « Personne ne s'était jamais arrêté pour moi ! »." },
          choices: [
            { t: { es: "Cruzamos la meta juntos", ca: "Creuem la meta junts", en: "We cross the finish line together", cs: "Proletíme cílem spolu", fr: "On franchit la ligne ensemble" }, go: "e2" },
            { t: { es: "Seguimos la carrera, ahora como amigos", ca: "Seguim la cursa, ara com a amics", en: "We race on, now as friends", cs: "Závodíme dál, teď už jako kamarádi", fr: "On continue la course, maintenant en amis" }, go: "n4" }
          ]
        },
        n4: {
          text: { es: "¡La recta final, con la meta brillando junto a la luna de Endor! Chewbacca ruge de emoción: ¡grrrau! ¿Cuál es tu plan, copiloto {name}?", ca: "La recta final, amb la meta brillant al costat de la lluna d'Endor! Chewbacca rugeix d'emoció: grrrau! Quin és el teu pla, copilot {name}?", en: "The final stretch, with the finish line shining next to the moon of Endor! Chewbacca roars with excitement: grrrau! What is your plan, co-pilot {name}?", cs: "Cílová rovinka a cíl září hned vedle měsíce Endor! Chewbacca vrčí nadšením: grrrau! Jaký je tvůj plán, kopilote {name}?", fr: "La dernière ligne droite, avec l'arrivée qui brille près de la lune d'Endor ! Chewbacca rugit d'émotion : grrrau ! C'est quoi ton plan, copilote {name} ?" },
          choices: [
            { t: { es: "Apretamos el botón rojo misterioso", ca: "Premem el botó vermell misteriós", en: "We press the mysterious red button", cs: "Zmáčkneme záhadné červené tlačítko", fr: "On appuie sur le mystérieux bouton rouge" }, go: "e1" },
            { t: { es: "Confiamos en el pilotaje tranquilo de Chewbacca", ca: "Confiem en el pilotatge tranquil de Chewbacca", en: "We trust Chewbacca's calm flying", cs: "Věříme Chewbaccovu klidnému pilotování", fr: "On fait confiance au pilotage tranquille de Chewbacca" }, go: "e3" }
          ]
        },
        e1: {
          end: true,
          text: { es: "¡El botón rojo era el MODO FIESTA! Confeti, luces de colores y música a todo volumen. Cruzáis la meta bailando, quizá no los primeros... ¡pero sí los más felices! A veces ganar es reírse mucho, {name}.", ca: "El botó vermell era el MODE FESTA! Confeti, llums de colors i música a tot volum. Creueu la meta ballant, potser no els primers... però sí els més feliços! De vegades guanyar és riure molt, {name}.", en: "The red button was PARTY MODE! Confetti, colourful lights and music at full blast. You cross the finish line dancing, maybe not first... but definitely the happiest! Sometimes winning means laughing a lot, {name}.", cs: "To červené tlačítko byl REŽIM OSLAVA! Konfety, barevná světla a hudba naplno. Proletíte cílem v rytmu tance, možná ne jako první... ale rozhodně jako ti nejšťastnější! Někdy vyhrává ten, kdo se nejvíc nasměje, {name}.", fr: "Le bouton rouge, c'était le MODE FÊTE ! Des confettis, des lumières de toutes les couleurs et de la musique à fond. Vous franchissez la ligne en dansant, peut-être pas les premiers... mais sûrement les plus heureux ! Parfois, gagner c'est beaucoup rire, {name}." }
        },
        e2: {
          end: true,
          text: { es: "Las dos naves cruzan la meta a la vez: ¡empate! El público lanza confeti de estrellas y los ewoks tocan los tambores. Ayudar a un amigo es la victoria más grande de todas, y hoy la has ganado tú, {name}.", ca: "Les dues naus creuen la meta alhora: empat! El públic llança confeti d'estrelles i els ewoks toquen els tambors. Ajudar un amic és la victòria més gran de totes, i avui l'has guanyada tu, {name}.", en: "Both ships cross the finish line at the same time: a tie! The crowd throws star confetti and the Ewoks play their drums. Helping a friend is the greatest victory of all, and today you won it, {name}.", cs: "Obě lodě proletí cílem naráz: remíza! Diváci házejí hvězdné konfety a ewokové bubnují. Pomoct kamarádovi je největší vítězství ze všech, a to se dnes povedlo právě tobě, {name}.", fr: "Les deux vaisseaux franchissent la ligne en même temps : égalité ! Le public lance des confettis d'étoiles et les Ewoks jouent du tambour. Aider un ami est la plus grande victoire de toutes, et aujourd'hui c'est toi qui l'as gagnée, {name}." }
        },
        e3: {
          end: true,
          text: { es: "Chewbacca pilota tranquilo y seguro, sin prisa pero sin pausa... ¡y el Halcón cruza la meta el primero! Esa noche hay fiesta ewok con tambores y baile. La paciencia también gana carreras, {name}.", ca: "Chewbacca pilota tranquil i segur, sense pressa però sense pausa... i el Falcó creua la meta el primer! Aquella nit hi ha festa ewok amb tambors i ball. La paciència també guanya curses, {name}.", en: "Chewbacca flies calm and steady, no rush but no stopping... and the Falcon crosses the finish line first! That night there is an Ewok party with drums and dancing. Patience wins races too, {name}.", cs: "Chewbacca pilotuje klidně a jistě, beze spěchu, ale bez zastávky... a Falcon proletí cílem první! Večer se koná ewokská oslava s bubny a tancem. Trpělivost vyhrává i závody, {name}.", fr: "Chewbacca pilote calme et sûr de lui, sans se presser mais sans s'arrêter... et le Faucon franchit la ligne le premier ! Ce soir-là, il y a une fête Ewok avec tambours et danse. La patience aussi gagne des courses, {name}." }
        }
      }
    }
  ],

  /* ---------- KARAOKE ---------- */
  songs: [
    { emoji: "✨",
      title: { es: "Nana de la Fuerza", ca: "Cançó de bressol de la Força", en: "Lullaby of the Force", cs: "Ukolébavka Síly", fr: "Berceuse de la Force" },
      lines: [
        { es: "Duerme, duerme, mi Jedi chiquitín,", ca: "Dorm, dorm, petit Jedi meu,", en: "Sleep now, sleep, my little Jedi bright,", cs: "Spinkej, spinkej, můj malý Jedi,", fr: "Dors, dors, mon petit Jedi doré," },
        { es: "la Fuerza te canta hasta el fin.", ca: "la Força et canta amb la seva veu.", en: "the Force sings softly through the night.", cs: "Síla ti zpívá, u postýlky sedí.", fr: "la Force chante à tes côtés." },
        { es: "Cierra los ojos, siente su calor,", ca: "Tanca els ullets, sent la calor,", en: "Close your eyes and feel its glow,", cs: "Zavři očka, ucítíš teplo hned,", fr: "Ferme les yeux, sens sa chaleur," },
        { es: "te abraza entero con mucho amor.", ca: "t'abraça sencer amb molt d'amor.", en: "it hugs you warmly, soft and slow.", cs: "objímá tě sladce jako med.", fr: "elle te serre tout contre son cœur." },
        { es: "Las naves duermen en su hangar,", ca: "Les naus ja dormen al seu hangar,", en: "The ships are resting in the bay,", cs: "Lodě už ve svém hangáru spí,", fr: "Les vaisseaux dorment dans le hangar," },
        { es: "y las estrellas salen a brillar.", ca: "i les estrelles surten a brillar.", en: "the stars come out to light the way.", cs: "hvězdičky nad tebou tiše bdí.", fr: "les étoiles brillent dans le soir." },
        { es: "Que la Fuerza te acompañe al soñar,", ca: "Que la Força t'acompanyi en somiar,", en: "May the Force be with your dreams,", cs: "Ať s tebou Síla jde, když jdeš spát,", fr: "Que la Force accompagne tes rêves," },
        { es: "mañana de nuevo vamos a jugar.", ca: "demà de nou tornarem a jugar.", en: "tomorrow we will chase moonbeams.", cs: "zítra si budeme zase hrát.", fr: "demain on jouera dès que le jour se lève." }
      ] },
    { emoji: "🤖",
      title: { es: "La marcha de los droides", ca: "La marxa dels droides", en: "The Droid March", cs: "Pochod droidů", fr: "La marche des droïdes" },
      lines: [
        { es: "Bip, bip, bop, los droides ya están,", ca: "Bip, bip, bop, els droides ja són aquí,", en: "Beep, beep, bop, the droids are here,", cs: "Píp, píp, bop, droidi už jdou,", fr: "Bip, bip, bop, les droïdes sont là," },
        { es: "con sus luces y ruedas vienen y van.", ca: "amb llums i rodetes van fent el seu camí.", en: "with lights and wheels they bring good cheer.", cs: "blikají světýlky nad hlavou.", fr: "avec lumières et roues, les voilà !" },
        { es: "R2 silba y gira sin parar,", ca: "R2 xiula i gira sense parar,", en: "R2 whistles and spins around,", cs: "R2 píská a točí se rád,", fr: "R2 siffle et tourne en rond," },
        { es: "BB rueda como pelota de mar.", ca: "BB roda com pilota de mar.", en: "BB rolls along the ground.", cs: "BB se koulí jako míč, je to kamarád.", fr: "BB roule comme un ballon." },
        { es: "C-3PO habla y habla sin fin,", ca: "C-3PO parla i parla sense fi,", en: "C-3PO talks and talks all day,", cs: "C-3PO mluví bez přestání,", fr: "C-3PO parle sans s'arrêter," },
        { es: "¡sabe seis millones de idiomas y un violín!", ca: "sap sis milions d'idiomes, quin veí!", en: "six million languages, hip hip hooray!", cs: "šest milionů řečí umí bez zaváhání!", fr: "six millions de langues, quelle idée !" },
        { es: "Marchan contentos, bip, bip, bop,", ca: "Marxen contents, bip, bip, bop,", en: "They march so happy, beep, beep, bop,", cs: "Vesele mašírují, píp, píp, bop,", fr: "Ils marchent contents, bip, bip, bop," },
        { es: "¡el desfile droide no tiene stop!", ca: "la desfilada droide no té stop!", en: "the droid parade will never stop!", cs: "droidí přehlídka nezná stop!", fr: "la parade des droïdes jamais ne stoppe !" }
      ] },
    { emoji: "🎉",
      title: { es: "La fiesta de los ewoks", ca: "La festa dels ewoks", en: "The Ewok Party", cs: "Oslava Ewoků", fr: "La fête des Ewoks" },
      lines: [
        { es: "Yub, yub, yub, en el bosque hay fiesta,", ca: "Yub, yub, yub, al bosc hi ha festa,", en: "Yub, yub, yub, there's a party in the trees,", cs: "Yub, yub, yub, oslava zní přes celý les,", fr: "Yub, yub, yub, dans la forêt c'est la fête," },
        { es: "los ewoks bailan, ¡nadie se acuesta!", ca: "els ewoks ballen, ningú no fa la sesta!", en: "the Ewoks dance in the forest breeze.", cs: "ewokové tančí, každý přišel dnes.", fr: "les Ewoks dansent, personne ne s'arrête !" },
        { es: "Tambores de tronco suenan: pum, pam,", ca: "Tambors de tronc sonen: pum, pam,", en: "Log drums beating: boom, boom, bam,", cs: "Bubny z kmenů duní: bum, bum, bam,", fr: "Les tambours résonnent : boum, boum, bam," },
        { es: "las hogueras brillan, todos vendrán.", ca: "les fogueres brillen i tots hi van.", en: "the bonfires glow, come join the jam!", cs: "ohníčky září, pojď tančit k nám!", fr: "les feux de joie brillent, quel programme !" },
        { es: "Bailan en círculo sin parar,", ca: "Ballen en cercle sense parar,", en: "They dance in circles round and round,", cs: "Tančí v kruhu celou noc,", fr: "Ils tournent en rond toute la nuit," },
        { es: "hasta las estrellas quieren bajar.", ca: "fins les estrelles volen baixar.", en: "even the stars come floating down.", cs: "hvězdy jim svítí na pomoc.", fr: "même les étoiles descendent sans bruit." },
        { es: "Yub, nub, palmas: una, dos, tres,", ca: "Yub, nub, piquem de mans: un, dos, tres,", en: "Yub, nub, clap your hands, one, two, three,", cs: "Yub, nub, zpíváme všichni spolu,", fr: "Yub, nub, tape des mains, un, deux, trois," },
        { es: "¡la fiesta ewok es del derecho y del revés!", ca: "la festa ewok és del dret i del revés!", en: "the Ewok party is the place to be!", cs: "a tančíme kolem starého topolu!", fr: "la fête des Ewoks, c'est la joie !" }
      ] }
  ],

  /* ---------- TRADUCTOR ---------- */
  translator: {
    words: [
      W_COMMON.hola,
      W_COMMON.adios,
      W_COMMON.amigo,
      { k: "droide", emoji: "🤖", name: { es: "droide", ca: "droide", en: "droid", cs: "droid", fr: "droïde" } },
      { k: "fuerza", emoji: "✨", name: { es: "fuerza", ca: "força", en: "force", cs: "síla", fr: "force" } },
      { k: "sable", emoji: "⚔️", name: { es: "sable", ca: "sabre", en: "saber", cs: "meč", fr: "sabre" } },
      { k: "nave", emoji: "🚀", name: { es: "nave", ca: "nau", en: "ship", cs: "loď", fr: "vaisseau" } },
      { k: "estrella", emoji: "⭐", name: { es: "estrella", ca: "estrella", en: "star", cs: "hvězda", fr: "étoile" } },
      { k: "robot", emoji: "🦾", name: { es: "robot", ca: "robot", en: "robot", cs: "robot", fr: "robot" } },
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
      { id: "droide", emoji: "🤖",
        name: { es: "Droide", ca: "Droide", en: "Droid", cs: "Droidština", fr: "Droïde" },
        greeting: { es: "¡Bip-bop-bip! Así se dice hola en droide. ¡Como R2-D2!", ca: "Bip-bop-bip! Així es diu hola en droide. Com R2-D2!", en: "Beep-bop-beep! That is how you say hello in droid. Just like R2-D2!", cs: "Bip-bop-bip! Tak se droidsky řekne ahoj. Jako R2-D2!", fr: "Bip-bop-bip ! C'est comme ça qu'on dit bonjour en droïde. Comme R2-D2 !" },
        dict: { hola: "bip-bop-bip", adios: "bop-bip-buuu", amigo: "bip-zum-bip", droide: "bip-bip-bip", fuerza: "vuum-bip", sable: "vzzum-vzzum", nave: "vrum-bop", estrella: "blink-bip", robot: "bop-bip-bop", mama: "bip-mimi", papa: "bip-popo", casa: "bop-boxi", agua: "glu-bip", comida: "ñam-bop", perro: "guau-bip", gato: "miau-bop", grande: "biiiip-bop", pequeno: "pip", bonito: "bli-bli", amor: "bip-bup-bip", gracias: "grabip", si: "bip", no: "bup", dormir: "zzz-bip" } },
      { id: "wookiee", emoji: "🐻",
        name: { es: "Wookiee", ca: "Wookiee", en: "Wookiee", cs: "Wookieeština", fr: "Wookiee" },
        greeting: { es: "¡Grrrau! Los wookiees hablan con rugidos suaves de oso gigante.", ca: "Grrrau! Els wookiees parlen amb rugits suaus d'ós gegant.", en: "Grrrau! Wookiees speak in soft giant-bear roars.", cs: "Grrrau! Wookieeové mluví jemným vrčením obřích medvědů.", fr: "Grrrau ! Les Wookiees parlent avec des doux rugissements d'ours géant." },
        dict: { hola: "grrrau", adios: "grrrau-uuu", amigo: "grru-wau", droide: "grr-piip", fuerza: "grrooom", sable: "wrr-zzau", nave: "grr-vruum", estrella: "rrau-grri", robot: "grr-clanc", mama: "grru-ma", papa: "grru-pa", casa: "wrr-grot", agua: "glu-rrau", comida: "grrum-ñam", perro: "rrau-guau", gato: "rrau-miu", grande: "grrrraaau", pequeno: "grri", bonito: "grru-lii", amor: "grru-rrú", gracias: "grrau-ki", si: "rrau", no: "wrau", dormir: "grr-zzz" } },
      { id: "ewok", emoji: "🧸",
        name: { es: "Ewok", ca: "Ewok", en: "Ewok", cs: "Ewokština", fr: "Ewok" },
        greeting: { es: "¡Yub-yub! Los ewoks hablan con palabritas saltarinas del bosque.", ca: "Yub-yub! Els ewoks parlen amb parauletes saltironants del bosc.", en: "Yub-yub! Ewoks speak in bouncy little forest words.", cs: "Yub-yub! Ewokové mluví poskakujícími slovíčky z lesa.", fr: "Yub-yub ! Les Ewoks parlent avec des petits mots sautillants de la forêt." },
        dict: { hola: "yub-yub", adios: "yub-nub", amigo: "chak-chak", droide: "tik-tiki", fuerza: "gunda-yub", sable: "tik-zap", nave: "wiki-vum", estrella: "yub-tila", robot: "tiki-tok", mama: "mama-nub", papa: "papa-nub", casa: "gunda-hut", agua: "glub-yub", comida: "ñam-nub", perro: "wof-yub", gato: "miu-nub", grande: "gunda-gunda", pequeno: "tiki", bonito: "yub-lila", amor: "yub-kori", gracias: "yub-graka", si: "yub", no: "nub", dormir: "zzz-yub" } },
      { id: "jawa", emoji: "🧙",
        name: { es: "Jawa", ca: "Jawa", en: "Jawa", cs: "Jawština", fr: "Jawa" },
        greeting: { es: "¡Utinni! Así gritan los jawas cuando encuentran un tesoro.", ca: "Utinni! Així criden els jawes quan troben un tresor.", en: "Utinni! That is what Jawas shout when they find a treasure.", cs: "Utinni! Tak křičí Jawové, když najdou poklad.", fr: "Utinni ! C'est ce que crient les Jawas quand ils trouvent un trésor !" },
        dict: { hola: "utinni", adios: "ooka-ba", amigo: "mombay", droide: "tinni-bot", fuerza: "m'buum", sable: "zapinni", nave: "vroomka", estrella: "tilinka", robot: "botinni", mama: "mamooka", papa: "papooka", casa: "kraulinka", agua: "glupinni", comida: "ñamooka", perro: "wafinni", gato: "miuka", grande: "bombai", pequeno: "tini", bonito: "linka", amor: "korinni", gracias: "grakooka", si: "ik", no: "nok", dormir: "zzzinni" } }
    ]
  },

  /* ---------- MAPA DE EXPLORACIÓN ---------- */
  explore: {
    width: 2600, height: 1100, bg: "space",
    cats: [
      { id: "planetas", emoji: "🪐", x: 120, name: { es: "Planetas", ca: "Planetes", en: "Planets", cs: "Planety", fr: "Planètes" } },
      { id: "naves", emoji: "🚀", x: 1150, name: { es: "Naves", ca: "Naus", en: "Ships", cs: "Vesmírné lodě", fr: "Vaisseaux" } },
      { id: "criaturas", emoji: "🐻", x: 1950, name: { es: "Criaturas", ca: "Criatures", en: "Creatures", cs: "Tvorové", fr: "Créatures" } }
    ],
    pois: [
      { cat: "planetas", emoji: "🏜️", x: 160, y: 420,
        name: { es: "Tatooine", ca: "Tatooine", en: "Tatooine", cs: "Tatooine", fr: "Tatooine" },
        fact: { es: "Tatooine tiene dos soles: por la tarde puedes ver dos puestas de sol a la vez. ¡Y tu sombra sale doble!", ca: "Tatooine té dos sols: a la tarda pots veure dues postes de sol alhora. I la teva ombra surt doble!", en: "Tatooine has two suns: in the evening you can watch two sunsets at once. And your shadow comes out double!", cs: "Tatooine má dvě slunce: večer můžeš vidět dva západy slunce najednou. A tvůj stín je tam dvojitý!", fr: "Tatooine a deux soleils : le soir, tu peux voir deux couchers de soleil en même temps. Et ton ombre est double !" } },
      { cat: "planetas", emoji: "❄️", x: 360, y: 640,
        name: { es: "Hoth", ca: "Hoth", en: "Hoth", cs: "Hoth", fr: "Hoth" },
        fact: { es: "Hoth es un planeta de nieve y hielo. Hace tanto frío que hasta las naves duermen tapaditas con mantas.", ca: "Hoth és un planeta de neu i gel. Hi fa tant de fred que fins i tot les naus dormen tapadetes amb mantes.", en: "Hoth is a planet of snow and ice. It is so cold that even the ships sleep tucked in under blankets.", cs: "Hoth je planeta sněhu a ledu. Je tam taková zima, že i lodě spí zachumlané v dekách.", fr: "Hoth est une planète de neige et de glace. Il y fait si froid que même les vaisseaux dorment sous des couvertures." } },
      { cat: "planetas", emoji: "🌲", x: 520, y: 320,
        name: { es: "Endor", ca: "Endor", en: "Endor", cs: "Endor", fr: "Endor" },
        fact: { es: "Endor es una luna de bosques gigantes. Los ewoks viven arriba, en casitas de madera con puentes de cuerda.", ca: "Endor és una lluna de boscos gegants. Els ewoks viuen a dalt, en casetes de fusta amb ponts de corda.", en: "Endor is a moon of giant forests. The Ewoks live up high, in little wooden houses with rope bridges.", cs: "Endor je měsíc obřích lesů. Ewokové bydlí nahoře v dřevěných domečcích s lanovými mosty.", fr: "Endor est une lune de forêts géantes. Les Ewoks vivent en haut, dans des petites maisons en bois avec des ponts de corde." } },
      { cat: "planetas", emoji: "🐸", x: 700, y: 560,
        name: { es: "Dagobah", ca: "Dagobah", en: "Dagobah", cs: "Dagobah", fr: "Dagobah" },
        fact: { es: "Dagobah es un pantano lleno de niebla y ranas. Yoda vivió allí escondido: ¡el campeón del escondite!", ca: "Dagobah és un pantà ple de boira i granotes. Yoda hi va viure amagat: el campió de fet i amagar!", en: "Dagobah is a swamp full of mist and frogs. Yoda lived there in hiding: the hide-and-seek champion!", cs: "Dagobah je bažina plná mlhy a žab. Yoda tam žil ve skrýši: mistr na schovávanou!", fr: "Dagobah est un marais plein de brume et de grenouilles. Yoda y a vécu caché : le champion de cache-cache !" } },
      { cat: "planetas", emoji: "🏞️", x: 880, y: 350,
        name: { es: "Naboo", ca: "Naboo", en: "Naboo", cs: "Naboo", fr: "Naboo" },
        fact: { es: "Naboo tiene cascadas enormes y una ciudad burbuja debajo del agua, donde viven los gungans.", ca: "Naboo té cascades enormes i una ciutat bombolla sota l'aigua, on viuen els gungans.", en: "Naboo has huge waterfalls and a bubble city under the water, where the Gungans live.", cs: "Naboo má obrovské vodopády a bublinové město pod vodou, kde bydlí Gungani.", fr: "Naboo a des cascades énormes et une ville bulle sous l'eau, où vivent les Gungans." } },
      { cat: "planetas", emoji: "🏙️", x: 1040, y: 620,
        name: { es: "Coruscant", ca: "Coruscant", en: "Coruscant", cs: "Coruscant", fr: "Coruscant" },
        fact: { es: "Coruscant es una ciudad tan grande que cubre el planeta entero. ¡Sus luces no se apagan nunca!", ca: "Coruscant és una ciutat tan gran que cobreix el planeta sencer. Els seus llums no s'apaguen mai!", en: "Coruscant is a city so big that it covers the whole planet. Its lights never ever go out!", cs: "Coruscant je město tak velké, že pokrývá celou planetu. Jeho světla nikdy nezhasínají!", fr: "Coruscant est une ville si grande qu'elle couvre toute la planète. Ses lumières ne s'éteignent jamais !" } },
      { cat: "naves", emoji: "🛸", x: 1250, y: 450, size: 2,
        name: { es: "Halcón Milenario", ca: "Falcó Mil·lenari", en: "Millennium Falcon", cs: "Millennium Falcon", fr: "Faucon Millenium" },
        fact: { es: "Parece un trasto viejo, pero es la nave más rápida de la galaxia. ¡A Chewbacca no le gusta nada que la llamen trasto!", ca: "Sembla un trasto vell, però és la nau més ràpida de la galàxia. A Chewbacca no li agrada gens que en diguin trasto!", en: "It looks like a piece of junk, but it is the fastest ship in the galaxy. Chewbacca really does not like it being called junk!", cs: "Vypadá jako stará kraksna, ale je to nejrychlejší loď v galaxii. Chewbacca vůbec nemá rád, když jí někdo říká kraksna!", fr: "Il ressemble à un vieux tas de ferraille, mais c'est le vaisseau le plus rapide de la galaxie. Chewbacca n'aime pas du tout qu'on l'appelle ferraille !" } },
      { cat: "naves", emoji: "✈️", x: 1420, y: 300,
        name: { es: "Ala-X", ca: "Ala-X", en: "X-wing", cs: "X-wing", fr: "X-wing" },
        fact: { es: "El Ala-X abre las alas en forma de X para volar rápido. Luke pilotaba una... ¡y R2-D2 iba detrás de copiloto!", ca: "L'Ala-X obre les ales en forma de X per volar ràpid. Luke en pilotava una... i R2-D2 anava darrere de copilot!", en: "The X-wing opens its wings into an X shape to fly fast. Luke flew one... with R2-D2 riding in the back as co-pilot!", cs: "X-wing roztáhne křídla do tvaru X, aby letěl rychle. Luke jeden pilotoval... a R2-D2 seděl vzadu jako kopilot!", fr: "Le X-wing ouvre ses ailes en forme de X pour voler vite. Luke en pilotait un... avec R2-D2 derrière comme copilote !" } },
      { cat: "naves", emoji: "🌑", x: 1600, y: 520, size: 2,
        name: { es: "Estrella de la Muerte", ca: "Estrella de la Mort", en: "Death Star", cs: "Hvězda smrti", fr: "Étoile de la Mort" },
        fact: { es: "Es tan grande que todos la confunden con una luna. Los rebeldes ganaron porque hasta lo gigante tiene un puntito débil.", ca: "És tan gran que tothom la confon amb una lluna. Els rebels van guanyar perquè fins i tot allò gegant té un puntet feble.", en: "It is so big that everyone mistakes it for a moon. The rebels won because even giant things have one tiny weak spot.", cs: "Je tak obrovská, že si ji všichni pletou s měsícem. Rebelové vyhráli, protože i obr má jedno malinké slabé místo.", fr: "Elle est si grande que tout le monde la prend pour une lune. Les rebelles ont gagné parce que même les géants ont un tout petit point faible." } },
      { cat: "naves", emoji: "🛩️", x: 1760, y: 300,
        name: { es: "Caza TIE", ca: "Caça TIE", en: "TIE fighter", cs: "Stíhačka TIE", fr: "Chasseur TIE" },
        fact: { es: "El caza TIE hace un ruido que se oye desde lejos: ¡iiiiuuuu! Sus alas parecen dos ventanas oscuras.", ca: "El caça TIE fa un soroll que se sent des de lluny: iiiiuuuu! Les seves ales semblen dues finestres fosques.", en: "The TIE fighter makes a sound you can hear from far away: eeeeoooo! Its wings look like two dark windows.", cs: "Stíhačka TIE dělá zvuk, který je slyšet už z dálky: ííííúúú! Její křídla vypadají jako dvě tmavá okna.", fr: "Le chasseur TIE fait un bruit qu'on entend de loin : iiiiouuu ! Ses ailes ressemblent à deux fenêtres sombres." } },
      { cat: "naves", emoji: "⚔️", x: 1880, y: 650,
        name: { es: "Sable de luz", ca: "Sabre de llum", en: "Lightsaber", cs: "Světelný meč", fr: "Sabre laser" },
        fact: { es: "El objeto legendario de los Jedi: una espada de luz que hace zum-zum. Cada Jedi construye la suya con sus propias manos.", ca: "L'objecte llegendari dels Jedi: una espasa de llum que fa zum-zum. Cada Jedi construeix la seva amb les seves pròpies mans.", en: "The legendary object of the Jedi: a sword of light that goes zoom-zoom. Every Jedi builds their own with their own hands.", cs: "Legendární předmět rytířů Jedi: meč ze světla, který dělá zum-zum. Každý Jedi si ten svůj staví vlastníma rukama.", fr: "L'objet légendaire des Jedi : une épée de lumière qui fait zoum-zoum. Chaque Jedi construit le sien de ses propres mains." } },
      { cat: "criaturas", emoji: "🧸", x: 2020, y: 380,
        name: { es: "Ewok", ca: "Ewok", en: "Ewok", cs: "Ewok", fr: "Ewok" },
        fact: { es: "Los ewoks parecen peluches, pero son valentísimos: vencieron a un ejército entero con palos, piedras y mucho ingenio.", ca: "Els ewoks semblen peluixos, però són valentíssims: van vèncer un exèrcit sencer amb pals, pedres i molt d'enginy.", en: "Ewoks look like plush toys, but they are super brave: they beat a whole army with sticks, stones and lots of clever ideas.", cs: "Ewokové vypadají jako plyšáci, ale jsou hrozně stateční: porazili celou armádu klacky, kameny a spoustou chytrých nápadů.", fr: "Les Ewoks ressemblent à des peluches, mais ils sont très courageux : ils ont battu toute une armée avec des bâtons, des pierres et plein d'astuce." } },
      { cat: "criaturas", emoji: "🐧", x: 2180, y: 550,
        name: { es: "Porg", ca: "Porg", en: "Porg", cs: "Porg", fr: "Porg" },
        fact: { es: "Los porgs son pajaritos redondos de ojos gigantes. Una vez llenaron el Halcón Milenario de nidos, ¡y Chewbacca no pudo enfadarse!", ca: "Els porgs són ocellets rodons d'ulls gegants. Un cop van omplir el Falcó Mil·lenari de nius, i Chewbacca no s'hi va poder enfadar!", en: "Porgs are round little birds with giant eyes. Once they filled the Millennium Falcon with nests, and Chewbacca just could not get angry!", cs: "Porgové jsou kulatí ptáčci s obrovskýma očima. Jednou zaplnili Millennium Falcon hnízdy a Chewbacca se na ně nedokázal zlobit!", fr: "Les porgs sont des petits oiseaux ronds aux yeux géants. Un jour, ils ont rempli le Faucon Millenium de nids, et Chewbacca n'a pas réussi à se fâcher !" } },
      { cat: "criaturas", emoji: "🐂", x: 2320, y: 350,
        name: { es: "Bantha", ca: "Bantha", en: "Bantha", cs: "Bantha", fr: "Bantha" },
        fact: { es: "El bantha es grande y lanudo, con cuernos en espiral. Camina despacito por el desierto de Tatooine, como un abuelo tranquilo.", ca: "El bantha és gran i llanut, amb banyes en espiral. Camina a poc a poc pel desert de Tatooine, com un avi tranquil.", en: "The bantha is big and woolly, with spiral horns. It walks slowly across the Tatooine desert, like a calm grandpa.", cs: "Bantha je velká a chundelatá, s rohy do spirály. Kráčí pomaloučku pouští na Tatooine jako klidný dědeček.", fr: "Le bantha est grand et laineux, avec des cornes en spirale. Il marche tout doucement dans le désert de Tatooine, comme un grand-père tranquille." } },
      { cat: "criaturas", emoji: "🧙", x: 2450, y: 600,
        name: { es: "Jawa", ca: "Jawa", en: "Jawa", cs: "Jawa", fr: "Jawa" },
        fact: { es: "Los jawas son pequeñitos y van con capucha: solo se les ven los ojos brillantes. Coleccionan droides y gritan: ¡utinni!", ca: "Els jawes són petitons i van amb caputxa: només se'ls veuen els ulls brillants. Col·leccionen droides i criden: utinni!", en: "Jawas are tiny and wear hoods: you can only see their glowing eyes. They collect droids and shout: utinni!", cs: "Jawové jsou malincí a nosí kapuce: vidět jsou jen jejich zářící oči. Sbírají droidy a křičí: utinni!", fr: "Les Jawas sont tout petits et portent une capuche : on ne voit que leurs yeux brillants. Ils collectionnent les droïdes et crient : utinni !" } },
      { cat: "criaturas", emoji: "🐻", x: 2150, y: 780,
        name: { es: "Wookiee", ca: "Wookiee", en: "Wookiee", cs: "Wookiee", fr: "Wookiee" },
        fact: { es: "Los wookiees son gigantes peludos del planeta Kashyyyk. Dan los abrazos más fuertes y calentitos de toda la galaxia.", ca: "Els wookiees són gegants peluts del planeta Kashyyyk. Fan les abraçades més fortes i calentones de tota la galàxia.", en: "Wookiees are furry giants from the planet Kashyyyk. They give the strongest, warmest hugs in the whole galaxy.", cs: "Wookieeové jsou chlupatí obři z planety Kashyyyk. Umí nejsilnější a nejhřejivější objetí v celé galaxii.", fr: "Les Wookiees sont des géants poilus de la planète Kashyyyk. Ils font les câlins les plus forts et les plus chauds de toute la galaxie." } }
    ],
    deco: function () {
      let s = "";
      // cielo estrellado de punta a punta
      [[120, 90], [340, 170], [560, 80], [820, 150], [1060, 100], [1300, 60], [1520, 160], [1740, 90], [1980, 140], [2220, 80], [2460, 160], [900, 270], [1650, 250], [2350, 270], [450, 310], [2050, 200]].forEach(p => {
        s += `<circle cx="${p[0]}" cy="${p[1]}" r="3" fill="rgba(255,255,255,.65)"/>`;
      });
      // la Estrella de la Muerte, lejísimos en el cielo (eso no es una luna...)
      s += `<circle cx="2280" cy="170" r="80" fill="rgba(176,190,197,.18)" stroke="rgba(255,255,255,.15)" stroke-width="2"/>
            <circle cx="2250" cy="140" r="18" fill="rgba(255,255,255,.12)"/>
            <path d="M2200 176 L2360 176" stroke="rgba(255,255,255,.12)" stroke-width="4"/>`;
      // los dos soles de Tatooine, a un lado
      s += `<circle cx="150" cy="190" r="58" fill="rgba(255,213,79,.9)"/><circle cx="150" cy="190" r="92" fill="rgba(255,213,79,.14)"/>
            <circle cx="268" cy="148" r="36" fill="rgba(255,167,38,.85)"/><circle cx="268" cy="148" r="60" fill="rgba(255,167,38,.14)"/>`;
      // dunas de Tatooine (zona izquierda)
      s += `<path d="M0 850 Q240 750 500 840 Q760 915 1020 845 L1060 1100 L0 1100 Z" fill="#d7a86e" opacity=".92"/>
            <path d="M0 950 Q300 885 620 950 Q860 995 1060 945 L1060 1100 L0 1100 Z" fill="#c68d4f"/>`;
      // la nieve de Hoth (zona central)
      s += `<path d="M980 910 Q1200 800 1450 890 Q1670 960 1900 900 L1900 1100 L980 1100 Z" fill="#e3f2fd" opacity=".95"/>
            <path d="M1130 905 L1215 765 L1300 905 Z" fill="#bbdefb"/>
            <path d="M1500 915 L1560 815 L1620 915 Z" fill="#bbdefb"/>`;
      // copos de nieve cayendo sobre Hoth
      [[1100, 700], [1250, 640], [1420, 720], [1580, 660], [1750, 730]].forEach(p => {
        s += `<circle cx="${p[0]}" cy="${p[1]}" r="4" fill="rgba(255,255,255,.75)"/>`;
      });
      // el bosque de Endor (zona derecha)
      s += `<path d="M1900 940 Q2150 880 2400 930 Q2520 950 2600 935 L2600 1100 L1900 1100 Z" fill="#2e7d32" opacity=".85"/>`;
      const pino = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})">
          <rect x="-7" y="-6" width="14" height="30" fill="#5d4037"/>
          <path d="M0 -130 L48 -46 L-48 -46 Z" fill="#2e7d32"/>
          <path d="M0 -92 L58 -4 L-58 -4 Z" fill="#388e3c"/></g>`;
      s += pino(1960, 1000, 1) + pino(2080, 1030, 0.8) + pino(2250, 1010, 1.15) + pino(2420, 1035, 0.9) + pino(2560, 1010, 0.7);
      // silueta del Halcón cruzando el cielo
      s += `<g opacity=".8">
          <path d="M-20 -8 Q0 -22 22 -8 L30 0 L22 8 Q0 20 -20 8 Z" fill="rgba(120,144,156,.55)"/>
          <circle cx="26" cy="0" r="3" fill="rgba(129,212,250,.9)"/>
          <animateMotion dur="30s" repeatCount="indefinite" rotate="auto" path="M -100 520 Q 700 420 1400 500 Q 2100 570 2750 430"/>
        </g>`;
      // silueta de un caza TIE volando en dirección contraria
      s += `<g opacity=".7">
          <rect x="-16" y="-14" width="6" height="28" rx="2" fill="rgba(96,125,139,.6)"/>
          <rect x="10" y="-14" width="6" height="28" rx="2" fill="rgba(96,125,139,.6)"/>
          <circle cx="0" cy="0" r="7" fill="rgba(96,125,139,.75)"/>
          <animateMotion dur="42s" repeatCount="indefinite" rotate="auto" path="M 2750 260 Q 1900 340 1100 280 Q 400 230 -150 320"/>
        </g>`;
      return decoSvg(s, 2600);
    }
  },

  /* ---------- CHARLA ---------- */
  chat: {
    keywords: [
      { keys: ["hola", "hello", "hi ", "ahoj", "bonjour", "salut", "bon dia", "buenas"],
        replies: [{ es: "¡Hola, {name}! Bip-bop, ¡qué alegría verte! ¿Jugamos o charlamos un ratito?", ca: "Hola, {name}! Bip-bop, quina alegria veure't! Juguem o xerrem una estoneta?", en: "Hi, {name}! Beep-bop, so happy to see you! Shall we play or chat for a bit?", cs: "Ahoj, {name}! Bip-bop, mám radost, že tě vidím! Zahrajeme si, nebo si chvilku popovídáme?", fr: "Salut, {name} ! Bip-bop, quelle joie de te voir ! On joue ou on discute un petit peu ?" }] },
      { keys: ["como estas", "how are you", "jak se mas", "comment ca va", "com estas", "que tal"],
        replies: [{ es: "¡Mejor que un porg en un nido calentito! ¿Y tú cómo estás, {name}?", ca: "Millor que un porg en un niu calentó! I tu com estàs, {name}?", en: "Better than a porg in a cosy nest! And how are you, {name}?", cs: "Líp než porg v teploučkém hnízdě! A jak se máš ty, {name}?", fr: "Mieux qu'un porg dans un nid bien chaud ! Et toi, comment vas-tu, {name} ?" }] },
      { keys: ["cancion", "musica", "music", "song", "sing", "pisnicka", "hudba", "chanson", "musique", "canço", "canta", "zpiv", "chante"],
        action: "song",
        replies: [{ es: "¡Me encanta la música! En la cantina de Tatooine tocan una que no puedo dejar de bailar. ¿Vamos al Karaoke y cantamos juntos?", ca: "M'encanta la música! A la cantina de Tatooine en toquen una que no puc deixar de ballar. Anem al Karaoke i cantem junts?", en: "I love music! At the Tatooine cantina they play a tune I just cannot stop dancing to. Shall we go to Karaoke and sing together?", cs: "Hudbu miluju! V kantýně na Tatooine hrají jednu, u které nedokážu přestat tancovat. Půjdeme na karaoke a zazpíváme si spolu?", fr: "J'adore la musique ! À la cantina de Tatooine, ils en jouent une qui me fait danser sans arrêt. On va au karaoké chanter ensemble ?" }] },
      { keys: ["chiste", "joke", "vtip", "blague", "acudit", "broma"],
        replies: [
          { es: "¿Quién ronca más fuerte de toda la galaxia? ¡Darth Vader... y eso que está despierto! Ja, ja.", ca: "Qui ronca més fort de tota la galàxia? Darth Vader... i això que està despert! Ha, ha.", en: "Who snores the loudest in the whole galaxy? Darth Vader... and he is not even asleep! Ha ha.", cs: "Kdo chrápe nejhlasitěji v celé galaxii? Darth Vader... a to je vzhůru! Ha ha.", fr: "Qui ronfle le plus fort de toute la galaxie ? Dark Vador... et pourtant il est réveillé ! Ha ha." },
          { es: "¿Por qué Chewbacca nunca tiene frío? ¡Porque lleva el abrigo puesto todo el año! Ji, ji.", ca: "Per què Chewbacca mai no té fred? Perquè porta l'abric posat tot l'any! Hi, hi.", en: "Why is Chewbacca never cold? Because he wears his fur coat all year long! Hee hee.", cs: "Proč Chewbaccovi nikdy není zima? Protože nosí kožich celý rok! Chi chi.", fr: "Pourquoi Chewbacca n'a jamais froid ? Parce qu'il porte son manteau toute l'année ! Hi hi." }] },
      { keys: ["te quiero", "love you", "t'estimo", "testimo", "mam te rad", "je t'aime", "jetaime"],
        replies: [{ es: "¡Y yo a ti, {name}! Mi corazón de robot hace zum-zum como un sable de luz cuando me lo dices.", ca: "I jo a tu, {name}! El meu cor de robot fa zum-zum com un sabre de llum quan m'ho dius.", en: "I love you too, {name}! My robot heart goes zoom-zoom like a lightsaber when you say that.", cs: "Já tebe taky, {name}! Moje robotí srdíčko dělá zum-zum jako světelný meč, když to říkáš.", fr: "Moi aussi je t'aime, {name} ! Mon cœur de robot fait zoum-zoum comme un sabre laser quand tu dis ça." }] },
      { keys: ["triste", "sad", "smutn", "llorar", "plorar", "cry", "chagrin"],
        replies: [{ es: "Ven aquí, {name}. Hasta los Jedi tienen días nublados, y Grogu también llora a veces (luego le dan sopita). ¿Me cuentas qué te pasa? Estoy contigo.", ca: "Vine aquí, {name}. Fins i tot els Jedi tenen dies ennuvolats, i Grogu també plora a vegades (després li fan sopeta). M'expliques què et passa? Soc amb tu.", en: "Come here, {name}. Even Jedi have cloudy days, and Grogu cries sometimes too (then he gets soup). Will you tell me what is wrong? I am right here with you.", cs: "Pojď sem, {name}. I rytíři Jedi mívají zamračené dny a Grogu taky někdy pláče (pak dostane polévku). Povíš mi, co se děje? Jsem tu s tebou.", fr: "Viens là, {name}. Même les Jedi ont des jours nuageux, et Grogu pleure parfois aussi (après, il a de la soupe). Tu me racontes ce qui ne va pas ? Je suis là avec toi." }] },
      { keys: ["donde estas", "where are you", "kde jsi", "ou es tu", "on ets"],
        replies: [{ es: "Ahora mismo estoy en el Halcón Milenario, espantando porgs del asiento del copiloto. ¡Han hecho un nido!", ca: "Ara mateix soc al Falcó Mil·lenari, espantant porgs del seient del copilot. Hi han fet un niu!", en: "Right now I am on the Millennium Falcon, shooing porgs off the co-pilot seat. They built a nest!", cs: "Právě teď jsem na Millennium Falconu a odháním porgy z kopilotního sedadla. Postavili si tam hnízdo!", fr: "En ce moment, je suis dans le Faucon Millenium, en train de chasser des porgs du siège du copilote. Ils y ont fait un nid !" }] },
      { keys: ["yoda"],
        replies: [{ es: "¡El maestro Yoda! Pequeño y verde es, pero el más sabio de todos también. ¡Y habla al revés, como yo ahora mismo!", ca: "El mestre Yoda! Petit i verd és, però el més savi de tots també. I parla al revés, com jo ara mateix!", en: "Master Yoda! Small and green he is, but the wisest of all too. And he talks backwards, like me right now!", cs: "Mistr Yoda! Malý a zelený je, ale nejmoudřejší ze všech také. A mluví pozpátku, jako já právě teď!", fr: "Maître Yoda ! Petit et vert il est, mais le plus sage de tous aussi. Et il parle à l'envers, comme moi en ce moment !" }] },
      { keys: ["chewbacca", "chewie", "wookiee", "wookie"],
        replies: [{ es: "¡Grrrau! Eso es hola en wookiee. Chewbacca me está enseñando: para rugir bien hay que poner cara de oso cariñoso.", ca: "Grrrau! Això és hola en wookiee. Chewbacca m'està ensenyant: per rugir bé cal posar cara d'ós afectuós.", en: "Grrrau! That is hello in Wookiee. Chewbacca is teaching me: to roar properly you need to make a cuddly-bear face.", cs: "Grrrau! To je ahoj po wookieesku. Chewbacca mě to učí: aby vrčení znělo správně, musíš se tvářit jako mazlivý medvěd.", fr: "Grrrau ! Ça veut dire bonjour en Wookiee. Chewbacca m'apprend : pour bien rugir, il faut faire une tête d'ours câlin." }] },
      { keys: ["sable", "laser", "lightsaber", "sabre", "svetelny mec", "svetelny"],
        replies: [{ es: "¡Zum-zum! Los sables de luz brillan de mil colores. Si yo tuviera uno, lo usaría de linterna para leer cuentos por la noche.", ca: "Zum-zum! Els sabres de llum brillen de mil colors. Si jo en tingués un, el faria servir de llanterna per llegir contes a la nit.", en: "Zoom-zoom! Lightsabers glow in a thousand colours. If I had one, I would use it as a torch to read bedtime stories.", cs: "Zum-zum! Světelné meče září tisíci barvami. Kdybych jeden měl, svítil bych si s ním večer na pohádky.", fr: "Zoum-zoum ! Les sabres laser brillent de mille couleurs. Si j'en avais un, je m'en servirais de lampe pour lire des histoires le soir." }] },
      { keys: ["fuerza", "force", "força", "forca", "sila"],
        replies: [{ es: "La Fuerza está en todas partes, {name}: en las estrellas, en los árboles y en tu corazón. Sobre todo cuando eres amable.", ca: "La Força és a tot arreu, {name}: a les estrelles, als arbres i al teu cor. Sobretot quan ets amable.", en: "The Force is everywhere, {name}: in the stars, in the trees and in your heart. Especially when you are kind.", cs: "Síla je všude, {name}: ve hvězdách, ve stromech i v tvém srdci. Hlavně když jsi laskavá.", fr: "La Force est partout, {name} : dans les étoiles, dans les arbres et dans ton cœur. Surtout quand tu es gentil." }] },
      { keys: ["droide", "droid", "robot", "r2", "bb-8", "bb8", "c-3po", "c3po"],
        replies: [{ es: "¡Los droides somos primos! R2-D2 me enseñó a decir bip-bop y BB-8 me enseñó a rodar... aunque yo me mareo un poquito.", ca: "Els droides som cosins! R2-D2 em va ensenyar a dir bip-bop i BB-8 em va ensenyar a rodar... tot i que jo em marejo una miqueta.", en: "Droids are my cousins! R2-D2 taught me to say beep-bop and BB-8 taught me to roll... though I do get a little dizzy.", cs: "S droidy jsme bratránci! R2-D2 mě naučil říkat bip-bop a BB-8 mě naučil koulet se... i když se mi z toho trošku točí hlava.", fr: "Les droïdes sont mes cousins ! R2-D2 m'a appris à dire bip-bop et BB-8 m'a appris à rouler... même si j'ai un petit peu le tournis." }] },
      { keys: ["grogu", "baby yoda", "bebe yoda"],
        replies: [{ es: "¡Grogu! Tiene 50 años y sigue siendo un bebé. Le encantan las galletas y mover cosas con la Fuerza sin pedir permiso... ¡pillín!", ca: "Grogu! Té 50 anys i encara és un nadó. Li encanten les galetes i moure coses amb la Força sense demanar permís... murri!", en: "Grogu! He is 50 years old and still a baby. He loves cookies and moving things with the Force without asking first... cheeky one!", cs: "Grogu! Je mu 50 let a pořád je to miminko. Miluje sušenky a přesouvání věcí Sílou bez dovolení... šikula jeden!", fr: "Grogu ! Il a 50 ans et c'est encore un bébé. Il adore les biscuits et déplacer des choses avec la Force sans demander... petit coquin !" }] },
      { keys: ["cole", "school", "escola", "skola", "ecole", "skole"],
        replies: [{ es: "¿Qué tal el cole, {name}? Los Jedi también van a la escuela, ¿sabes? Aprenden mates, volteretas y a ser amables.", ca: "Què tal l'escola, {name}? Els Jedi també van a l'escola, saps? Aprenen mates, tombarelles i a ser amables.", en: "How was school, {name}? Jedi go to school too, you know? They learn maths, somersaults and how to be kind.", cs: "Jaké to bylo ve škole, {name}? Rytíři Jedi taky chodí do školy, víš? Učí se počty, kotrmelce a laskavost.", fr: "C'était comment l'école, {name} ? Les Jedi aussi vont à l'école, tu sais ? Ils apprennent les maths, les galipettes et la gentillesse." }] }
    ],
    fallback: [
      { es: "¿Sabías que Tatooine tiene dos soles? Los helados allí se comen rapidísimo, antes de que se derritan dos veces.", ca: "Sabies que Tatooine té dos sols? Els gelats allà es mengen rapidíssim, abans que es fonguin dues vegades.", en: "Did you know Tatooine has two suns? Ice creams there get eaten super fast, before they melt twice.", cs: "Víš, že Tatooine má dvě slunce? Zmrzlina se tam musí sníst hodně rychle, než se rozpustí dvakrát.", fr: "Tu savais que Tatooine a deux soleils ? Là-bas, on mange les glaces très vite, avant qu'elles fondent deux fois." },
      { es: "Grogu una vez se comió una rana entera. ¡Glup! Mejor merendar galletas, ¿verdad?", ca: "Grogu un cop es va menjar una granota sencera. Glup! Millor berenar galetes, oi?", en: "Grogu once ate a whole frog. Gulp! Cookies make a better snack, right?", cs: "Grogu jednou snědl celou žábu. Glo! Sušenky jsou lepší svačina, viď?", fr: "Un jour, Grogu a mangé une grenouille entière. Gloups ! Les biscuits, c'est meilleur pour le goûter, non ?" },
      { es: "Los ewoks hacen una fiesta con tambores cada vez que alguien aprende algo nuevo. ¡Hoy seguro que tocan para ti!", ca: "Els ewoks fan una festa amb tambors cada cop que algú aprèn una cosa nova. Avui segur que toquen per a tu!", en: "The Ewoks throw a drum party every time someone learns something new. Today they are surely playing for you!", cs: "Ewokové pořádají oslavu s bubny pokaždé, když se někdo naučí něco nového. Dnes určitě bubnují pro tebe!", fr: "Les Ewoks font une fête avec des tambours chaque fois que quelqu'un apprend quelque chose de nouveau. Aujourd'hui, c'est sûr, ils jouent pour toi !" },
      { es: "{name}, los Jedi de verdad no presumen de sable: presumen de ayudar. Ser amable es tener la Fuerza.", ca: "{name}, els Jedi de debò no presumeixen de sabre: presumeixen d'ajudar. Ser amable és tenir la Força.", en: "{name}, real Jedi do not show off their sabers: they show off their helping. Being kind is having the Force.", cs: "{name}, opravdoví rytíři Jedi se nechlubí mečem: chlubí se tím, komu pomohli. Být laskavý znamená mít Sílu.", fr: "{name}, les vrais Jedi ne se vantent pas de leur sabre : ils se vantent d'aider. Être gentil, c'est avoir la Force." },
      { es: "¿Me cuentas qué es lo que más te gusta de la galaxia? A mí, los porgs. ¡Son tan redonditos!", ca: "M'expliques què és el que més t'agrada de la galàxia? A mi, els porgs. Són tan rodonets!", en: "Will you tell me your favourite thing in the galaxy? Mine is porgs. They are so perfectly round!", cs: "Povíš mi, co se ti v galaxii líbí nejvíc? Já mám nejradši porgy. Jsou tak krásně kulaťoučcí!", fr: "Tu me dis ce que tu préfères dans la galaxie ? Moi, ce sont les porgs. Ils sont si ronds !" },
      { es: "Dice Yoda: compartir tus juguetes debes, porque jugar juntos más divertido es.", ca: "Diu Yoda: compartir les teves joguines has de, perquè jugar junts més divertit és.", en: "Yoda says: share your toys you must, because playing together more fun it is.", cs: "Yoda říká: o hračky dělit se musíš, protože hrát si spolu zábavnější je.", fr: "Yoda dit : partager tes jouets tu dois, parce que jouer ensemble plus amusant c'est." }
    ]
  }
});
