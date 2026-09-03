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
    width: 4200, height: 1100, stars: false,
    bgCss: "radial-gradient(ellipse 22% 26% at 10% 14%, rgba(255,209,102,.55), transparent 70%), linear-gradient(180deg,#131a3f 0%,#2b3468 24%,#584f83 44%,#9c6c8a 60%,#e0925e 74%,#f9d093 100%)",
    cats: [
      { id: "planetas", emoji: "🪐", x: 120, name: { es: "Planetas", ca: "Planetes", en: "Planets", cs: "Planety", fr: "Planètes" } },
      { id: "naves", emoji: "🚀", x: 2060, name: { es: "Naves", ca: "Naus", en: "Ships", cs: "Vesmírné lodě", fr: "Vaisseaux" } },
      { id: "criaturas", emoji: "🐻", x: 3300, name: { es: "Criaturas", ca: "Criatures", en: "Creatures", cs: "Tvorové", fr: "Créatures" } }
    ],
    pois: [
      { cat: "planetas", emoji: "🏜️", x: 200, y: 470,
        name: { es: "Tatooine", ca: "Tatooine", en: "Tatooine", cs: "Tatooine", fr: "Tatooine" },
        fact: { es: "Tatooine tiene dos soles: por la tarde puedes ver dos puestas de sol a la vez. ¡Y tu sombra sale doble!", ca: "Tatooine té dos sols: a la tarda pots veure dues postes de sol alhora. I la teva ombra surt doble!", en: "Tatooine has two suns: in the evening you can watch two sunsets at once. And your shadow comes out double!", cs: "Tatooine má dvě slunce: večer můžeš vidět dva západy slunce najednou. A tvůj stín je tam dvojitý!", fr: "Tatooine a deux soleils : le soir, tu peux voir deux couchers de soleil en même temps. Et ton ombre est double !" } },
      { cat: "planetas", emoji: "❄️", x: 470, y: 700,
        name: { es: "Hoth", ca: "Hoth", en: "Hoth", cs: "Hoth", fr: "Hoth" },
        fact: { es: "Hoth es un planeta de nieve y hielo. Hace tanto frío que hasta las naves duermen tapaditas con mantas.", ca: "Hoth és un planeta de neu i gel. Hi fa tant de fred que fins i tot les naus dormen tapadetes amb mantes.", en: "Hoth is a planet of snow and ice. It is so cold that even the ships sleep tucked in under blankets.", cs: "Hoth je planeta sněhu a ledu. Je tam taková zima, že i lodě spí zachumlané v dekách.", fr: "Hoth est une planète de neige et de glace. Il y fait si froid que même les vaisseaux dorment sous des couvertures." } },
      { cat: "planetas", emoji: "🌲", x: 900, y: 330,
        name: { es: "Endor", ca: "Endor", en: "Endor", cs: "Endor", fr: "Endor" },
        fact: { es: "Endor es una luna de bosques gigantes. Los ewoks viven arriba, en casitas de madera con puentes de cuerda.", ca: "Endor és una lluna de boscos gegants. Els ewoks viuen a dalt, en casetes de fusta amb ponts de corda.", en: "Endor is a moon of giant forests. The Ewoks live up high, in little wooden houses with rope bridges.", cs: "Endor je měsíc obřích lesů. Ewokové bydlí nahoře v dřevěných domečcích s lanovými mosty.", fr: "Endor est une lune de forêts géantes. Les Ewoks vivent en haut, dans des petites maisons en bois avec des ponts de corde." } },
      { cat: "planetas", emoji: "🐸", x: 1170, y: 620,
        name: { es: "Dagobah", ca: "Dagobah", en: "Dagobah", cs: "Dagobah", fr: "Dagobah" },
        fact: { es: "Dagobah es un pantano lleno de niebla y ranas. Yoda vivió allí escondido: ¡el campeón del escondite!", ca: "Dagobah és un pantà ple de boira i granotes. Yoda hi va viure amagat: el campió de fet i amagar!", en: "Dagobah is a swamp full of mist and frogs. Yoda lived there in hiding: the hide-and-seek champion!", cs: "Dagobah je bažina plná mlhy a žab. Yoda tam žil ve skrýši: mistr na schovávanou!", fr: "Dagobah est un marais plein de brume et de grenouilles. Yoda y a vécu caché : le champion de cache-cache !" } },
      { cat: "planetas", emoji: "🏞️", x: 1450, y: 400,
        name: { es: "Naboo", ca: "Naboo", en: "Naboo", cs: "Naboo", fr: "Naboo" },
        fact: { es: "Naboo tiene cascadas enormes y una ciudad burbuja debajo del agua, donde viven los gungans.", ca: "Naboo té cascades enormes i una ciutat bombolla sota l'aigua, on viuen els gungans.", en: "Naboo has huge waterfalls and a bubble city under the water, where the Gungans live.", cs: "Naboo má obrovské vodopády a bublinové město pod vodou, kde bydlí Gungani.", fr: "Naboo a des cascades énormes et une ville bulle sous l'eau, où vivent les Gungans." } },
      { cat: "planetas", emoji: "🏙️", x: 1760, y: 660,
        name: { es: "Coruscant", ca: "Coruscant", en: "Coruscant", cs: "Coruscant", fr: "Coruscant" },
        fact: { es: "Coruscant es una ciudad tan grande que cubre el planeta entero. ¡Sus luces no se apagan nunca!", ca: "Coruscant és una ciutat tan gran que cobreix el planeta sencer. Els seus llums no s'apaguen mai!", en: "Coruscant is a city so big that it covers the whole planet. Its lights never ever go out!", cs: "Coruscant je město tak velké, že pokrývá celou planetu. Jeho světla nikdy nezhasínají!", fr: "Coruscant est une ville si grande qu'elle couvre toute la planète. Ses lumières ne s'éteignent jamais !" } },
      { cat: "naves", emoji: "🛸", x: 2200, y: 480, size: 2,
        name: { es: "Halcón Milenario", ca: "Falcó Mil·lenari", en: "Millennium Falcon", cs: "Millennium Falcon", fr: "Faucon Millenium" },
        fact: { es: "Parece un trasto viejo, pero es la nave más rápida de la galaxia. ¡A Chewbacca no le gusta nada que la llamen trasto!", ca: "Sembla un trasto vell, però és la nau més ràpida de la galàxia. A Chewbacca no li agrada gens que en diguin trasto!", en: "It looks like a piece of junk, but it is the fastest ship in the galaxy. Chewbacca really does not like it being called junk!", cs: "Vypadá jako stará kraksna, ale je to nejrychlejší loď v galaxii. Chewbacca vůbec nemá rád, když jí někdo říká kraksna!", fr: "Il ressemble à un vieux tas de ferraille, mais c'est le vaisseau le plus rapide de la galaxie. Chewbacca n'aime pas du tout qu'on l'appelle ferraille !" } },
      { cat: "naves", emoji: "✈️", x: 2450, y: 300,
        name: { es: "Ala-X", ca: "Ala-X", en: "X-wing", cs: "X-wing", fr: "X-wing" },
        fact: { es: "El Ala-X abre las alas en forma de X para volar rápido. Luke pilotaba una... ¡y R2-D2 iba detrás de copiloto!", ca: "L'Ala-X obre les ales en forma de X per volar ràpid. Luke en pilotava una... i R2-D2 anava darrere de copilot!", en: "The X-wing opens its wings into an X shape to fly fast. Luke flew one... with R2-D2 riding in the back as co-pilot!", cs: "X-wing roztáhne křídla do tvaru X, aby letěl rychle. Luke jeden pilotoval... a R2-D2 seděl vzadu jako kopilot!", fr: "Le X-wing ouvre ses ailes en forme de X pour voler vite. Luke en pilotait un... avec R2-D2 derrière comme copilote !" } },
      { cat: "naves", emoji: "🌑", x: 2700, y: 560, size: 2,
        name: { es: "Estrella de la Muerte", ca: "Estrella de la Mort", en: "Death Star", cs: "Hvězda smrti", fr: "Étoile de la Mort" },
        fact: { es: "Es tan grande que todos la confunden con una luna. Los rebeldes ganaron porque hasta lo gigante tiene un puntito débil.", ca: "És tan gran que tothom la confon amb una lluna. Els rebels van guanyar perquè fins i tot allò gegant té un puntet feble.", en: "It is so big that everyone mistakes it for a moon. The rebels won because even giant things have one tiny weak spot.", cs: "Je tak obrovská, že si ji všichni pletou s měsícem. Rebelové vyhráli, protože i obr má jedno malinké slabé místo.", fr: "Elle est si grande que tout le monde la prend pour une lune. Les rebelles ont gagné parce que même les géants ont un tout petit point faible." } },
      { cat: "naves", emoji: "🛩️", x: 2950, y: 300,
        name: { es: "Caza TIE", ca: "Caça TIE", en: "TIE fighter", cs: "Stíhačka TIE", fr: "Chasseur TIE" },
        fact: { es: "El caza TIE hace un ruido que se oye desde lejos: ¡iiiiuuuu! Sus alas parecen dos ventanas oscuras.", ca: "El caça TIE fa un soroll que se sent des de lluny: iiiiuuuu! Les seves ales semblen dues finestres fosques.", en: "The TIE fighter makes a sound you can hear from far away: eeeeoooo! Its wings look like two dark windows.", cs: "Stíhačka TIE dělá zvuk, který je slyšet už z dálky: ííííúúú! Její křídla vypadají jako dvě tmavá okna.", fr: "Le chasseur TIE fait un bruit qu'on entend de loin : iiiiouuu ! Ses ailes ressemblent à deux fenêtres sombres." } },
      { cat: "naves", emoji: "⚔️", x: 3170, y: 700,
        name: { es: "Sable de luz", ca: "Sabre de llum", en: "Lightsaber", cs: "Světelný meč", fr: "Sabre laser" },
        fact: { es: "El objeto legendario de los Jedi: una espada de luz que hace zum-zum. Cada Jedi construye la suya con sus propias manos.", ca: "L'objecte llegendari dels Jedi: una espasa de llum que fa zum-zum. Cada Jedi construeix la seva amb les seves pròpies mans.", en: "The legendary object of the Jedi: a sword of light that goes zoom-zoom. Every Jedi builds their own with their own hands.", cs: "Legendární předmět rytířů Jedi: meč ze světla, který dělá zum-zum. Každý Jedi si ten svůj staví vlastníma rukama.", fr: "L'objet légendaire des Jedi : une épée de lumière qui fait zoum-zoum. Chaque Jedi construit le sien de ses propres mains." } },
      { cat: "criaturas", emoji: "🧸", x: 3400, y: 390,
        name: { es: "Ewok", ca: "Ewok", en: "Ewok", cs: "Ewok", fr: "Ewok" },
        fact: { es: "Los ewoks parecen peluches, pero son valentísimos: vencieron a un ejército entero con palos, piedras y mucho ingenio.", ca: "Els ewoks semblen peluixos, però són valentíssims: van vèncer un exèrcit sencer amb pals, pedres i molt d'enginy.", en: "Ewoks look like plush toys, but they are super brave: they beat a whole army with sticks, stones and lots of clever ideas.", cs: "Ewokové vypadají jako plyšáci, ale jsou hrozně stateční: porazili celou armádu klacky, kameny a spoustou chytrých nápadů.", fr: "Les Ewoks ressemblent à des peluches, mais ils sont très courageux : ils ont battu toute une armée avec des bâtons, des pierres et plein d'astuce." } },
      { cat: "criaturas", emoji: "🐧", x: 3640, y: 560,
        name: { es: "Porg", ca: "Porg", en: "Porg", cs: "Porg", fr: "Porg" },
        fact: { es: "Los porgs son pajaritos redondos de ojos gigantes. Una vez llenaron el Halcón Milenario de nidos, ¡y Chewbacca no pudo enfadarse!", ca: "Els porgs són ocellets rodons d'ulls gegants. Un cop van omplir el Falcó Mil·lenari de nius, i Chewbacca no s'hi va poder enfadar!", en: "Porgs are round little birds with giant eyes. Once they filled the Millennium Falcon with nests, and Chewbacca just could not get angry!", cs: "Porgové jsou kulatí ptáčci s obrovskýma očima. Jednou zaplnili Millennium Falcon hnízdy a Chewbacca se na ně nedokázal zlobit!", fr: "Les porgs sont des petits oiseaux ronds aux yeux géants. Un jour, ils ont rempli le Faucon Millenium de nids, et Chewbacca n'a pas réussi à se fâcher !" } },
      { cat: "criaturas", emoji: "🐂", x: 3880, y: 350,
        name: { es: "Bantha", ca: "Bantha", en: "Bantha", cs: "Bantha", fr: "Bantha" },
        fact: { es: "El bantha es grande y lanudo, con cuernos en espiral. Camina despacito por el desierto de Tatooine, como un abuelo tranquilo.", ca: "El bantha és gran i llanut, amb banyes en espiral. Camina a poc a poc pel desert de Tatooine, com un avi tranquil.", en: "The bantha is big and woolly, with spiral horns. It walks slowly across the Tatooine desert, like a calm grandpa.", cs: "Bantha je velká a chundelatá, s rohy do spirály. Kráčí pomaloučku pouští na Tatooine jako klidný dědeček.", fr: "Le bantha est grand et laineux, avec des cornes en spirale. Il marche tout doucement dans le désert de Tatooine, comme un grand-père tranquille." } },
      { cat: "criaturas", emoji: "🧙", x: 4090, y: 620,
        name: { es: "Jawa", ca: "Jawa", en: "Jawa", cs: "Jawa", fr: "Jawa" },
        fact: { es: "Los jawas son pequeñitos y van con capucha: solo se les ven los ojos brillantes. Coleccionan droides y gritan: ¡utinni!", ca: "Els jawes són petitons i van amb caputxa: només se'ls veuen els ulls brillants. Col·leccionen droides i criden: utinni!", en: "Jawas are tiny and wear hoods: you can only see their glowing eyes. They collect droids and shout: utinni!", cs: "Jawové jsou malincí a nosí kapuce: vidět jsou jen jejich zářící oči. Sbírají droidy a křičí: utinni!", fr: "Les Jawas sont tout petits et portent une capuche : on ne voit que leurs yeux brillants. Ils collectionnent les droïdes et crient : utinni !" } },
      { cat: "criaturas", emoji: "🐻", x: 3760, y: 880,
        name: { es: "Wookiee", ca: "Wookiee", en: "Wookiee", cs: "Wookiee", fr: "Wookiee" },
        fact: { es: "Los wookiees son gigantes peludos del planeta Kashyyyk. Dan los abrazos más fuertes y calentitos de toda la galaxia.", ca: "Els wookiees són gegants peluts del planeta Kashyyyk. Fan les abraçades més fortes i calentones de tota la galàxia.", en: "Wookiees are furry giants from the planet Kashyyyk. They give the strongest, warmest hugs in the whole galaxy.", cs: "Wookieeové jsou chlupatí obři z planety Kashyyyk. Umí nejsilnější a nejhřejivější objetí v celé galaxii.", fr: "Les Wookiees sont des géants poilus de la planète Kashyyyk. Ils font les câlins les plus forts et les plus chauds de toute la galaxie." } }
    ],
    /* El escenario, de izquierda a derecha, con las etapas encadenadas:
       el desierto de Tatooine, el cañón rocoso que hace de paso, el bosque
       gigante de Endor, el pantano de Dagobah, las nieblas con el acantilado
       de Naboo, las torres de Coruscant, la plataforma de atraque, el hangar
       por dentro y, tras la compuerta, el bosque y la meseta de las criaturas.
       El horizonte del fondo va cambiando de carácter en cada paso: dunas,
       crestas, colinas, bruma, rascacielos y casco de metal. */
    deco: function () {
      let s = "";
      /* Las cajas de los iconos: el decorado se aparta de ellas para no taparlos.
         Cada punto queda apoyado en algo (duna, pasarela, plataforma, tejado). */
      const cajas = [[159, 429, 82, 82], [433, 663, 74, 74], [862, 292, 76, 76], [1135, 585, 70, 70], [1411, 361, 78, 78],
        [1720, 620, 80, 80], [2129, 427, 142, 106], [2402, 263, 96, 74], [2636, 496, 128, 128], [2908, 265, 84, 70],
        [3153, 654, 34, 92], [3372, 357, 56, 66], [3621, 539, 38, 42], [3832, 309, 96, 82], [4067, 589, 46, 62], [3731, 830, 58, 100]];
      const libre = (x, y, w, h) => !cajas.some(c => {
        const mx = c[2] * .4 + 16, my = c[3] * .4 + 16;
        return x < c[0] + c[2] + mx && x + w > c[0] - mx && y < c[1] + c[3] + my && y + h > c[1] - my;
      });
      /* una chispa de cuatro puntas para las estrellas grandes */
      const chispa = (x, y, r, o) => `<path d="M${x} ${y - r} Q${x + r * .2} ${y - r * .2} ${x + r} ${y} Q${x + r * .2} ${y + r * .2} ${x} ${y + r} Q${x - r * .2} ${y + r * .2} ${x - r} ${y} Q${x - r * .2} ${y - r * .2} ${x} ${y - r} Z" fill="rgba(255,255,255,${o})"/>`;
      /* degradados propios, con prefijo swX para no chocar con los de los iconos */
      s += `<defs>
        <linearGradient id="swXcielo" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#131a3f"/><stop offset="24%" stop-color="#2b3468"/><stop offset="44%" stop-color="#584f83"/>
          <stop offset="60%" stop-color="#9c6c8a"/><stop offset="74%" stop-color="#e0925e"/><stop offset="100%" stop-color="#f9d093"/></linearGradient>
        <radialGradient id="swXsolA" cx="42%" cy="36%" r="62%"><stop offset="0%" stop-color="#fffdf0"/><stop offset="100%" stop-color="#ffc258"/></radialGradient>
        <radialGradient id="swXsolB" cx="42%" cy="36%" r="62%"><stop offset="0%" stop-color="#fff3e0"/><stop offset="100%" stop-color="#ff9846"/></radialGradient>
        <linearGradient id="swXduna" x1="0" y1="440" x2="0" y2="1100" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#f4d192"/><stop offset="100%" stop-color="#d2a25c"/></linearGradient>
        <linearGradient id="swXduna2" x1="0" y1="820" x2="0" y2="1100" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#e2b56f"/><stop offset="100%" stop-color="#b57f3d"/></linearGradient>
        <linearGradient id="swXroca" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#dda86c"/><stop offset="100%" stop-color="#9a6a37"/></linearGradient>
        <linearGradient id="swXcanon" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#c98f5c"/><stop offset="55%" stop-color="#8d5f37"/><stop offset="100%" stop-color="#5c4028"/></linearGradient>
        <linearGradient id="swXhielo" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f8fdff"/><stop offset="100%" stop-color="#b6d6e8"/></linearGradient>
        <radialGradient id="swXcopa" cx="40%" cy="32%" r="68%"><stop offset="0%" stop-color="#63ac52"/><stop offset="100%" stop-color="#215330"/></radialGradient>
        <linearGradient id="swXtronco" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#6d4b32"/><stop offset="45%" stop-color="#966844"/><stop offset="100%" stop-color="#553b27"/></linearGradient>
        <linearGradient id="swXagua" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#eafaff"/><stop offset="100%" stop-color="#6cbfe4"/></linearGradient>
        <linearGradient id="swXtorre" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#7787b0"/><stop offset="100%" stop-color="#2a3157"/></linearGradient>
        <linearGradient id="swXmetal" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#9aa8b9"/><stop offset="100%" stop-color="#495465"/></linearGradient>
        <linearGradient id="swXsuelo" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#657182"/><stop offset="100%" stop-color="#323a46"/></linearGradient>
        <linearGradient id="swXpuerta" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#8795a6"/><stop offset="50%" stop-color="#c3d0de"/><stop offset="100%" stop-color="#6f7c8c"/></linearGradient>
        <radialGradient id="swXhaloA" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffd166" stop-opacity=".5"/><stop offset="42%" stop-color="#ffd166" stop-opacity=".22"/><stop offset="100%" stop-color="#ffd166" stop-opacity="0"/></radialGradient>
        <radialGradient id="swXhaloB" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ff9846" stop-opacity=".42"/><stop offset="44%" stop-color="#ff9846" stop-opacity=".18"/><stop offset="100%" stop-color="#ff9846" stop-opacity="0"/></radialGradient>
        <radialGradient id="swXvaho" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffd7a4" stop-opacity=".26"/><stop offset="55%" stop-color="#ffd7a4" stop-opacity=".13"/><stop offset="100%" stop-color="#ffd7a4" stop-opacity="0"/></radialGradient>
        <radialGradient id="swXvahofrio" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#e8dcf0" stop-opacity=".5"/><stop offset="52%" stop-color="#e8dcf0" stop-opacity=".26"/><stop offset="100%" stop-color="#e8dcf0" stop-opacity="0"/></radialGradient>
        <linearGradient id="swXpilon" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#8b99ab"/><stop offset="34%" stop-color="#6e7c8d"/><stop offset="100%" stop-color="#48525f"/></linearGradient>
        <linearGradient id="swXfuera" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#5c5e91"/><stop offset="38%" stop-color="#b4779a"/><stop offset="66%" stop-color="#e8a56a"/><stop offset="100%" stop-color="#f6cf9a"/></linearGradient>
        <linearGradient id="swXbahia" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#2c3a50"/><stop offset="55%" stop-color="#1b2534"/><stop offset="100%" stop-color="#101823"/></linearGradient>
        <linearGradient id="swXciudadbaja" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#3b4477"/><stop offset="100%" stop-color="#1a2040"/></linearGradient>
        <clipPath id="swXsueloClip"><rect x="2160" y="890" width="1240" height="210"/></clipPath>
      </defs>`;
      /* ---------- CIELO: el fondo, las estrellas y los dos soles ---------- */
      s += `<rect x="0" y="0" width="4200" height="1100" fill="url(#swXcielo)"/>`;
      const estrellas = ["", "", ""];
      for (let i = 0; i < 74; i++) {
        const x = (i * 437 + 37) % 4180, y = 22 + (i * 113) % 486;
        if (!libre(x - 5, y - 5, 10, 10)) continue;
        estrellas[i % 3] += `<circle cx="${x}" cy="${y}" r="${i % 7 ? 2.2 : 3.4}"/>`;
      }
      [".34", ".56", ".82"].forEach((o, i) => { s += `<g fill="#fff" opacity="${o}">${estrellas[i]}</g>`; });
      [[1140, 96, 11], [2360, 74, 9], [3290, 132, 10], [1920, 168, 8], [3860, 108, 9]].forEach((e, i) => {
        s += `<g>${chispa(e[0], e[1], e[2], .9)}<animate attributeName="opacity" values="1;.35;1" dur="${(3.4 + i).toFixed(1)}s" repeatCount="indefinite"/></g>`;
      });
      /* los dos soles de Tatooine, uno grande y otro pequeño */
      s += `<g transform="translate(300 176)">
        <circle r="168" fill="url(#swXhaloA)"><animate attributeName="r" values="168;184;168" dur="10s" repeatCount="indefinite"/></circle>
        <circle r="66" fill="url(#swXsolA)"/><circle cx="-20" cy="-20" r="15" fill="rgba(255,255,255,.55)"/></g>
        <g transform="translate(500 118)">
        <circle r="104" fill="url(#swXhaloB)"><animate attributeName="r" values="104;116;104" dur="8s" repeatCount="indefinite"/></circle>
        <circle r="38" fill="url(#swXsolB)"/><circle cx="-12" cy="-11" r="8" fill="rgba(255,255,255,.5)"/></g>`;
      /* nubecillas altas y planas, de atardecer */
      [[1000, 236, 1.1, .34], [1640, 200, .9, .28], [2500, 258, 1.2, .3], [700, 268, .8, .26],
        [3160, 214, 1, .26], [3900, 248, .9, .24]].forEach(n => {
        s += `<g opacity="${n[3]}" transform="translate(${n[0]} ${n[1]}) scale(${n[2]})" fill="#ffd8b0">
          <ellipse cx="0" cy="0" rx="120" ry="15"/><ellipse cx="-70" cy="14" rx="76" ry="11"/><ellipse cx="80" cy="12" rx="64" ry="10"/></g>`;
      });
      /* ---------- HORIZONTE LEJANO: cambia de carácter en cada etapa ---------- */
      /* mesetas de arena, luego crestas del cañón, colinas de bosque, la bruma,
         la línea de rascacielos y por fin el casco liso del hangar */
      s += `<path d="M0 652 L120 566 L214 598 L306 540 L430 612 L540 578 L660 646 L660 740 L0 740 Z" fill="rgba(120,90,110,.34)"/>
        <path d="M640 646 L720 498 L790 556 L860 480 L940 552 L1010 610 L1080 648 L1080 740 L640 740 Z" fill="rgba(96,72,92,.42)"/>
        <path d="M1060 640 Q1180 552 1300 592 Q1420 632 1520 580 Q1600 538 1660 574 L1660 906 L1060 906 Z" fill="rgba(56,88,84,.36)"/>
        <path d="M1640 578 Q1720 556 1800 580 Q1880 604 1960 584 L1960 740 L1640 740 Z" fill="rgba(120,110,140,.3)"/>`;
      s += `<g fill="rgba(72,80,120,.44)">`;
      [[1700, 540, 34], [1748, 480, 28], [1800, 516, 30], [1848, 442, 26], [1900, 500, 32], [1952, 458, 24], [2000, 528, 30], [2052, 488, 26]].forEach(t => {
        s += `<rect x="${t[0]}" y="${t[1]}" width="${t[2]}" height="${740 - t[1]}" rx="5"/>`;
      });
      s += `</g>`;
      s += `<path d="M2060 520 Q2660 480 3400 512 L3400 740 L2060 740 Z" fill="rgba(86,96,116,.4)"/>
        <path d="M3380 620 Q3560 552 3740 594 Q3900 630 4200 588 L4200 740 L3380 740 Z" fill="rgba(56,88,84,.36)"/>`;
      /* ---------- TATOOINE: dunas, ondulaciones y rocas ---------- */
      s += `<path d="M-40 846 Q70 596 190 466 L266 470 Q340 546 396 700 Q456 776 520 720 Q586 668 640 696 Q700 730 760 768 L820 806 L820 1100 L-40 1100 Z" fill="url(#swXduna)"/>
        <path d="M-40 846 Q70 596 190 466 L266 470 Q340 546 396 700 L396 754 Q312 800 236 754 Q140 694 60 656 Q10 634 -40 910 Z" fill="rgba(255,255,255,.16)"/>
        <path d="M-40 956 Q170 866 396 912 Q620 956 812 902 Q900 878 966 896 L966 1100 L-40 1100 Z" fill="url(#swXduna2)"/>`;
      /* el promontorio helado de Hoth, apoyado en la duna */
      s += `<path d="M348 860 Q394 758 440 738 L500 738 Q552 768 570 856 Q590 892 534 898 Q456 912 384 898 Q336 888 348 860 Z" fill="url(#swXhielo)"/>
        <path d="M390 796 L420 750 L450 796 Z" fill="#ffffff" opacity=".8"/><path d="M482 810 L508 768 L534 814 Z" fill="#ffffff" opacity=".7"/>
        <path d="M374 866 Q424 850 472 866 M402 884 Q450 870 500 884" stroke="rgba(120,164,192,.5)" stroke-width="4" fill="none" stroke-linecap="round"/>
        <path d="M330 900 Q420 880 552 902" stroke="rgba(214,240,252,.55)" stroke-width="7" fill="none" stroke-linecap="round"/>`;
      /* ondulaciones de la arena */
      s += `<g stroke="rgba(150,102,44,.26)" stroke-width="5" fill="none" stroke-linecap="round">`;
      for (let i = 0; i < 28; i++) {
        const x = 10 + i * 34, y = 858 + ((i * 61) % 210);
        if (libre(x - 6, y - 8, 76, 16)) s += `<path d="M${x} ${y} q22 -10 44 0"/>`;
      }
      s += `</g>`;
      /* rocas y un arco de piedra tallado por el viento */
      [[96, 916, 1.05], [246, 986, .8], [56, 1050, .9], [340, 1026, 1.15], [178, 1074, .7]].forEach(r => {
        s += `<g transform="translate(${r[0]} ${r[1]}) scale(${r[2]})"><ellipse cx="0" cy="6" rx="58" ry="26" fill="rgba(120,80,40,.2)"/>
          <path d="M-52 6 Q-44 -34 -8 -40 Q30 -46 46 -14 Q56 4 46 8 Z" fill="url(#swXroca)"/>
          <path d="M-30 -12 Q-14 -30 8 -26" stroke="rgba(255,232,190,.4)" stroke-width="5" fill="none" stroke-linecap="round"/></g>`;
      });
      s += `<g transform="translate(272 940)"><path d="M-70 60 L-70 -30 Q-70 -78 -14 -80 Q46 -82 52 -26 L52 60 L26 60 L26 -20 Q22 -54 -12 -52 Q-44 -50 -44 -18 L-44 60 Z" fill="url(#swXroca)"/>
        <path d="M-64 -34 Q-40 -66 -6 -68" stroke="rgba(255,236,198,.35)" stroke-width="6" fill="none" stroke-linecap="round"/></g>`;
      /* vaporadores de humedad, los molinillos del desierto */
      [[68, 828, .9], [212, 900, .7], [366, 980, .8]].forEach(v => {
        s += `<g transform="translate(${v[0]} ${v[1]}) scale(${v[2]})"><ellipse cx="0" cy="4" rx="26" ry="9" fill="rgba(110,72,36,.25)"/>
          <rect x="-13" y="-88" width="26" height="92" rx="10" fill="#b9a68c"/><rect x="-13" y="-64" width="26" height="8" fill="#8d7c66"/>
          <ellipse cx="0" cy="-90" rx="21" ry="12" fill="#d6c7ad"/><rect x="-3" y="-116" width="6" height="26" rx="3" fill="#8d7c66"/>
          <circle cx="0" cy="-120" r="6" fill="#ffd166"/></g>`;
      });
      /* ---------- TRANSICIÓN 1: EL CAÑÓN ROCOSO DE PASO ---------- */
      /* dos paredes de roca que se estrechan y, entre ellas, la vereda de
         arena que se va cubriendo de musgo antes de entrar en el bosque */
      s += `<path d="M640 700 L692 468 L744 402 L800 366 L866 380 L912 448 L946 546 L972 656 L980 806 L640 812 Z" fill="url(#swXcanon)"/>
        <path d="M744 402 L800 366 L866 380 L912 448 L946 546 L972 656 L980 806 L900 810 Q884 620 838 486 Z" fill="rgba(38,26,16,.28)"/>
        <path d="M664 706 L1000 700 M676 604 L960 598 M700 512 L920 508" stroke="rgba(90,60,32,.3)" stroke-width="7" fill="none"/>
        <path d="M708 458 Q766 428 826 442" stroke="rgba(255,232,190,.34)" stroke-width="7" fill="none" stroke-linecap="round"/>`;
      s += `<path d="M980 640 L1030 470 L1082 418 L1140 456 L1176 560 L1196 700 L1200 830 L972 836 Z" fill="url(#swXcanon)" opacity=".82"/>
        <path d="M1082 418 L1140 456 L1176 560 L1196 700 L1200 830 L1128 832 Q1120 610 1076 480 Z" fill="rgba(38,26,16,.24)"/>`;
      /* el arco de roca que cruza el cañón por encima de la vereda */
      s += `<path d="M834 404 Q940 330 1058 400 Q1042 442 1000 428 Q930 392 872 442 Q848 442 834 404 Z" fill="url(#swXcanon)"/>
        <path d="M852 408 Q940 356 1040 404" stroke="rgba(255,232,190,.3)" stroke-width="6" fill="none" stroke-linecap="round"/>`;
      /* la arena se amontona al pie de las paredes: la roca no acaba en línea recta */
      s += `<path d="M586 862 Q650 796 716 806 Q788 818 848 786 Q912 756 972 792 Q1040 830 1104 806 Q1166 784 1216 826 L1216 884 L586 890 Z" fill="url(#swXduna)"/>
        <path d="M614 852 Q676 812 736 820 M1030 836 Q1096 818 1156 838" stroke="rgba(255,240,206,.4)" stroke-width="6" fill="none" stroke-linecap="round"/>
        <g fill="url(#swXroca)"><ellipse cx="700" cy="856" rx="34" ry="14"/><ellipse cx="936" cy="828" rx="26" ry="11"/><ellipse cx="1128" cy="856" rx="30" ry="12"/></g>`;
      /* la vereda: arena a la izquierda, musgo y hierba al salir */
      s += `<path d="M628 858 Q760 802 900 806 Q1040 810 1180 862 L1180 1100 L628 1100 Z" fill="url(#swXduna2)"/>
        <g fill="#4a7c46"><ellipse cx="806" cy="884" rx="48" ry="15" opacity=".3"/><ellipse cx="866" cy="936" rx="36" ry="12" opacity=".38"/>
          <ellipse cx="760" cy="936" rx="26" ry="9" opacity=".22"/><ellipse cx="920" cy="888" rx="52" ry="17" opacity=".5"/></g>
        <path d="M876 812 Q1010 810 1180 862 L1180 1000 Q1030 946 890 940 Q846 872 876 812 Z" fill="#4a7c46" opacity=".7"/>
        <path d="M1010 830 Q1110 844 1186 878" stroke="rgba(90,150,84,.65)" stroke-width="9" fill="none" stroke-linecap="round"/>
        <g stroke="#5f9a52" stroke-width="5" fill="none" stroke-linecap="round" opacity=".75">
          <path d="M820 896 q-8 -22 -18 -30 M830 896 q0 -26 5 -36 M896 962 q-8 -22 -18 -30 M906 962 q0 -26 5 -36"/></g>`;
      s += `<g stroke="rgba(120,84,44,.3)" stroke-width="5" fill="none" stroke-linecap="round">
        <path d="M690 906 q24 -10 48 0 M770 950 q24 -10 48 0 M666 1008 q24 -10 48 0 M840 1004 q24 -10 48 0 M726 1062 q24 -10 48 0"/></g>
      <g fill="url(#swXroca)"><ellipse cx="646" cy="946" rx="44" ry="18"/><ellipse cx="1116" cy="984" rx="38" ry="16"/><ellipse cx="960" cy="1064" rx="52" ry="20"/></g>`;
      /* ---------- BOSQUE DE ENDOR: árboles gigantes y pasarelas ---------- */
      s += `<path d="M1120 1100 Q1200 900 1330 842 Q1500 786 1650 792 Q1780 796 1880 782 L1880 1100 Z" fill="#2f6b39"/>
        <path d="M1120 1100 Q1200 900 1330 842 Q1500 786 1650 792 Q1780 796 1880 782 L1880 822 Q1740 844 1600 844 Q1400 844 1240 918 Q1180 976 1166 1100 Z" fill="rgba(20,60,30,.35)"/>`;
      /* la costura de abajo entre la vereda de arena y el suelo del bosque:
         antes bajaba recta hasta el pie del mapa. Ahora la arena entra en el
         verde a lengüetas, el musgo sale a la arena y unas matas y guijarros
         cruzan el borde en los dos sentidos */
      s += `<g fill="url(#swXduna2)"><path d="M1130 994 Q1188 984 1236 1006 Q1212 1024 1174 1026 Q1146 1026 1126 1016 Z"/>
        <path d="M1100 1040 Q1158 1028 1216 1052 Q1190 1072 1146 1072 Q1116 1070 1096 1058 Z"/>
        <path d="M1084 1084 Q1148 1070 1208 1090 L1208 1100 L1080 1100 Z"/>
        <ellipse cx="1258" cy="1040" rx="26" ry="10" opacity=".8"/><ellipse cx="1236" cy="1078" rx="20" ry="8" opacity=".7"/></g>
        <g fill="#4a7c46"><ellipse cx="1104" cy="1006" rx="38" ry="13" opacity=".45"/>
        <ellipse cx="1070" cy="1054" rx="30" ry="11" opacity=".38"/>
        <ellipse cx="1126" cy="1076" rx="42" ry="14" opacity=".5"/>
        <ellipse cx="1060" cy="1096" rx="26" ry="9" opacity=".3"/></g>
        <g fill="url(#swXroca)"><ellipse cx="1164" cy="1030" rx="21" ry="9"/><ellipse cx="1126" cy="1086" rx="17" ry="7"/><ellipse cx="1192" cy="998" rx="14" ry="6"/></g>
        <g fill="#a87c4a" opacity=".3"><ellipse cx="1216" cy="1036" rx="17" ry="6"/><ellipse cx="1248" cy="1074" rx="14" ry="5"/><ellipse cx="1180" cy="1068" rx="12" ry="5"/></g>
        <g stroke="#5f9a52" stroke-width="6" fill="none" stroke-linecap="round" opacity=".85">
        <path d="M1146 1012 q-10 -26 -22 -36 M1158 1012 q0 -30 6 -42 M1170 1012 q12 -24 26 -32"/>
        <path d="M1116 1064 q-10 -24 -22 -34 M1128 1064 q0 -28 6 -38"/>
        <path d="M1178 1058 q-10 -24 -22 -32 M1190 1058 q0 -26 6 -36"/>
        <path d="M1102 1100 q-8 -24 -20 -34 M1114 1100 q0 -28 6 -38"/></g>`;
      const arbolote = (x, base, cima, ancho, k) => `<g>
        <path d="M${x - ancho} ${base} Q${x - ancho * .5} ${base - 60} ${x - ancho * .42} ${cima + 40} L${x + ancho * .42} ${cima + 40} Q${x + ancho * .5} ${base - 60} ${x + ancho} ${base} Z" fill="url(#swXtronco)"/>
        <path d="M${x - ancho * .2} ${base - 30} L${x - ancho * .2} ${cima + 60} M${x + ancho * .16} ${base - 60} L${x + ancho * .16} ${cima + 70}" stroke="rgba(60,38,22,.4)" stroke-width="5"/>
        <circle cx="${x}" cy="${cima}" r="${72 * k}" fill="url(#swXcopa)"/>
        <circle cx="${x - 58 * k}" cy="${cima + 34 * k}" r="${48 * k}" fill="url(#swXcopa)"/>
        <circle cx="${x + 60 * k}" cy="${cima + 30 * k}" r="${50 * k}" fill="url(#swXcopa)"/>
        <circle cx="${x - 20 * k}" cy="${cima - 40 * k}" r="${38 * k}" fill="#5aa54c" opacity=".7"/></g>`;
      s += arbolote(1196, 872, 200, 30, 1) + arbolote(1010, 850, 168, 28, .9) + arbolote(1330, 860, 250, 26, .85);
      /* sotobosque: helechos, matas y un tronco caido */
      s += `<g fill="#3d7f46"><ellipse cx="1268" cy="920" rx="70" ry="26"/><ellipse cx="1440" cy="892" rx="62" ry="22"/><ellipse cx="1104" cy="946" rx="54" ry="20"/></g>
        <g stroke="#4d8a4a" stroke-width="6" fill="none" stroke-linecap="round">
        <path d="M1226 960 q-14 -40 -34 -56 M1238 960 q0 -46 8 -64 M1250 960 q14 -38 32 -50"/>
        <path d="M1494 926 q-14 -38 -32 -52 M1506 926 q0 -44 8 -60 M1518 926 q14 -36 30 -46"/>
        <path d="M1060 992 q-12 -34 -28 -46 M1070 992 q0 -40 6 -54"/></g>
        <g><rect x="1372" y="978" width="216" height="30" rx="15" fill="#6d4b32"/><ellipse cx="1372" cy="993" rx="13" ry="15" fill="#8f6543"/>
        <ellipse cx="1416" cy="970" rx="24" ry="10" fill="#4d8a4a"/><ellipse cx="1496" cy="968" rx="20" ry="9" fill="#4d8a4a"/></g>`;
      /* la pasarela de madera colgada entre los árboles, donde se apoya Endor */
      s += `<g><path d="M776 384 L1046 376" stroke="#8a6238" stroke-width="16" stroke-linecap="round"/>
        <path d="M776 372 L1046 364" stroke="#a87c4a" stroke-width="7" stroke-linecap="round"/>`;
      s += `<g fill="#7a5630">`;
      for (let x = 786; x < 1042; x += 22) s += `<rect x="${x}" y="${(378 - (x - 786) * .03).toFixed(1)}" width="14" height="14" rx="3"/>`;
      s += `</g>`;
      s += `<path d="M782 360 Q912 328 1042 352" stroke="rgba(160,120,74,.8)" stroke-width="4" fill="none"/>
        <path d="M794 360 L794 376 M852 352 L852 374 M916 346 L916 370 M980 350 L980 368 M1032 356 L1032 366" stroke="rgba(160,120,74,.75)" stroke-width="4"/>
        <path d="M800 392 L806 620 M1024 384 L1016 640" stroke="#6d4b32" stroke-width="9"/></g>`;
      /* ---------- DAGOBAH: la rama gruesa, las lianas y la charca ---------- */
      s += `<path d="M1076 646 Q1170 680 1290 692" stroke="#6d4b32" stroke-width="26" fill="none" stroke-linecap="round"/>
        <path d="M1076 640 Q1170 672 1288 684" stroke="#8f6543" stroke-width="9" fill="none" stroke-linecap="round"/>
        <g stroke="#3f7a3c" stroke-width="6" fill="none" stroke-linecap="round">
          <path d="M1252 690 q-8 44 6 82"><animate attributeName="d" values="M1252 690 q-8 44 6 82;M1252 690 q10 44 -4 82;M1252 690 q-8 44 6 82" dur="7s" repeatCount="indefinite"/></path>
          <path d="M1292 692 q10 38 -4 70"/><path d="M1046 654 q-12 40 2 72"/></g>
        <ellipse cx="1176" cy="700" rx="34" ry="12" fill="#3f7a3c" opacity=".5"/>`;
      s += `<ellipse cx="1252" cy="948" rx="180" ry="54" fill="#3d6b4a"/>
        <ellipse cx="1252" cy="942" rx="154" ry="42" fill="#4f8c62" opacity=".85"/>
        <path d="M1130 940 q30 -12 60 0 M1300 956 q30 -12 60 0" stroke="rgba(210,240,220,.5)" stroke-width="4" fill="none" stroke-linecap="round"/>
        <ellipse cx="1196" cy="922" rx="24" ry="8" fill="#6fae7e" opacity=".7"/><ellipse cx="1322" cy="936" rx="20" ry="7" fill="#6fae7e" opacity=".7"/>
        <g opacity=".4"><ellipse cx="1266" cy="904" rx="164" ry="20" fill="#dff2e6"><animate attributeName="rx" values="164;188;164" dur="9s" repeatCount="indefinite"/></ellipse></g>`;
      [[1104, 946], [1160, 974], [1362, 958], [1400, 928]].forEach(j => {
        s += `<path d="M${j[0]} ${j[1]} q-4 -36 -14 -50 M${j[0] + 8} ${j[1]} q2 -40 12 -54 M${j[0] + 16} ${j[1]} q8 -32 18 -42" stroke="#4d8a4a" stroke-width="5" fill="none" stroke-linecap="round"/>`;
      });
      /* ---------- TRANSICIÓN 2: LAS NIEBLAS ---------- */
      /* el bosque se apaga en bandas de niebla y de ellas emerge el acantilado */
      s += `<ellipse cx="1466" cy="732" rx="196" ry="384" fill="url(#swXvahofrio)"/>`;
      [[1330, 700, 190, 26, ".5"], [1392, 782, 230, 30, ".44"], [1348, 866, 200, 26, ".4"],
        [1420, 946, 240, 30, ".34"], [1370, 1024, 210, 26, ".3"], [1440, 618, 170, 22, ".38"]].forEach((n, i) => {
        s += `<ellipse cx="${n[0]}" cy="${n[1]}" rx="${n[2]}" ry="${n[3]}" fill="#e8dcf0" opacity="${n[4]}">
          <animate attributeName="rx" values="${n[2]};${n[2] + 34};${n[2]}" dur="${(11 + i * 2)}s" repeatCount="indefinite"/></ellipse>`;
      });
      /* ---------- NABOO: el acantilado con sus cascadas, saliendo de la niebla ---------- */
      s += `<path d="M1340 440 L1560 438 L1596 856 L1310 862 Z" fill="url(#swXroca)"/>
        <path d="M1340 440 L1560 438 L1560 462 L1340 464 Z" fill="#f0c489"/>
        <path d="M1350 516 L1554 512 M1334 610 L1576 606 M1322 710 L1588 706" stroke="rgba(120,80,40,.28)" stroke-width="6"/>
        <path d="M1356 446 Q1370 426 1392 438 Q1376 448 1356 446 Z" fill="#4f9c4a"/><path d="M1510 442 Q1530 422 1552 436 Q1532 446 1510 442 Z" fill="#4f9c4a"/>`;
      s += `<g><rect x="1348" y="462" width="36" height="392" rx="16" fill="url(#swXagua)" opacity=".92">
          <animate attributeName="opacity" values=".92;.66;.92" dur="3.6s" repeatCount="indefinite"/></rect>
        <rect x="1508" y="460" width="44" height="396" rx="18" fill="url(#swXagua)" opacity=".85">
          <animate attributeName="opacity" values=".7;.95;.7" dur="4.4s" repeatCount="indefinite"/></rect>
        <ellipse cx="1450" cy="868" rx="160" ry="34" fill="url(#swXagua)" opacity=".9"/>
        <ellipse cx="1450" cy="862" rx="120" ry="22" fill="#ffffff" opacity=".45"/>
        <ellipse cx="1376" cy="854" rx="30" ry="12" fill="#ffffff" opacity=".55"/><ellipse cx="1526" cy="858" rx="26" ry="11" fill="#ffffff" opacity=".5"/></g>`;
      /* ---------- CORUSCANT: torres, ventanas y carriles de tráfico ---------- */
      s += `<g opacity=".3">`;
      [[1596, 486, 30], [1642, 546, 26], [1856, 512, 28], [1912, 570, 24], [1966, 618, 22], [2016, 566, 26]].forEach(t => {
        s += `<rect x="${t[0]}" y="${t[1]}" width="${t[2]}" height="${1100 - t[1]}" rx="6" fill="url(#swXtorre)"/>`;
      });
      s += `</g><g opacity=".55">`;
      [[1626, 726, 44], [1852, 690, 38], [1922, 762, 52], [2010, 716, 40]].forEach(t => {
        s += `<rect x="${t[0]}" y="${t[1]}" width="${t[2]}" height="${1100 - t[1]}" rx="8" fill="url(#swXtorre)"/>`;
      });
      s += `</g>`;
      s += `<rect x="1722" y="700" width="76" height="400" rx="9" fill="url(#swXtorre)"/>
        <rect x="1704" y="688" width="112" height="16" rx="7" fill="#8b9cc4"/>
        <rect x="1752" y="646" width="8" height="44" rx="4" fill="#8b9cc4"/>
        <circle cx="1756" cy="640" r="7" fill="#ff8a65"><animate attributeName="opacity" values="1;.2;1" dur="2.2s" repeatCount="indefinite"/></circle>
        <rect x="1648" y="752" width="62" height="348" rx="8" fill="url(#swXtorre)"/>
        <rect x="1810" y="730" width="68" height="370" rx="8" fill="url(#swXtorre)"/>
        <rect x="1888" y="812" width="54" height="288" rx="8" fill="url(#swXtorre)"/>`;
      const ventanas = ["", "", ""];
      for (let i = 0; i < 60; i++) {
        const col = i % 6, fila = Math.floor(i / 6);
        const x = [1656, 1682, 1730, 1766, 1820, 1896][col] + (fila % 2 ? 4 : 0), y = 740 + fila * 26;
        if (y > 1074 || !libre(x, y, 16, 12)) continue;
        ventanas[i % 3] += `<rect x="${x}" y="${y}" width="16" height="12" rx="3"/>`;
      }
      [".38", ".6", ".85"].forEach((o, i) => { s += `<g fill="#ffe0a3" opacity="${o}">${ventanas[i]}</g>`; });
      [512, 556, 600].forEach((y, i) => {
        s += `<path d="M1620 ${y} H2010" stroke="rgba(255,224,163,.28)" stroke-width="3" stroke-dasharray="18 22"/>
          <g><rect x="1620" y="${y - 4}" width="16" height="7" rx="3.5" fill="#ffe0a3" opacity=".85"/>
          <animateTransform attributeName="transform" type="translate" values="${i % 2 ? "374 0;0 0" : "0 0;374 0"}" dur="${(9 + i * 3)}s" repeatCount="indefinite"/></g>`;
      });
      /* ---------- LA BASE DE CORUSCANT: la ciudad se apoya en algo ---------- */
      /* antes las torres se deshacían en bruma hasta el borde de abajo. Ahora,
         de arriba abajo: el vial elevado con sus farolas, la gran plataforma
         donde se plantan los edificios y, debajo, la ciudad baja en sombra */
      s += `<path d="M1488 1100 Q1536 1032 1626 1006 Q1730 986 1830 1000 Q1962 1010 2100 994 L2100 1100 Z" fill="#232a52"/>`;
      s += `<g fill="url(#swXciudadbaja)">`;
      [[1612, 1030, 62, 70], [1680, 1010, 46, 90], [1734, 1042, 70, 58], [1810, 1016, 52, 84],
        [1870, 1038, 76, 62], [1954, 1012, 48, 88], [2012, 1034, 66, 66]].forEach(b => {
        s += `<rect x="${b[0]}" y="${b[1]}" width="${b[2]}" height="${b[3]}" rx="8"/>`;
      });
      s += `</g>`;
      /* las ventanitas de la ciudad baja, muy pequeñas y muy juntas */
      let bajas = "";
      for (let i = 0; i < 42; i++) bajas += `<rect x="${1618 + (i * 71) % 452}" y="${1032 + (i * 37) % 56}" width="10" height="8" rx="2"/>`;
      s += `<g fill="#ffd9a0" opacity=".45">${bajas}</g>`;
      /* la gran plataforma: la losa donde apoyan las torres. Por la izquierda
         baja en rampa hasta perderse, para no cortarse en seco contra el bosque */
      s += `<path d="M1604 984 L2100 972 L2100 1006 L1604 1018 Z" fill="#454e82"/>
        <path d="M1604 984 L2100 972 L2100 980 L1604 992 Z" fill="#98a3d8"/>
        <path d="M1604 1012 L2100 998 L2100 1008 L1604 1022 Z" fill="rgba(16,20,42,.5)"/>
        <path d="M1604 984 L1604 1018 L1502 1082 L1494 1046 Z" fill="#3b4472"/>
        <path d="M1604 984 L1610 990 L1508 1054 L1494 1046 Z" fill="#7d88bd"/>`;
      /* los pilares que sujetan la losa y se pierden en la ciudad baja */
      s += `<g fill="#2b3260">`;
      [1652, 1740, 1828, 1916, 2004, 2072].forEach(x => {
        const y = 1014 - (x - 1604) * 14 / 496;
        s += `<rect x="${x - 15}" y="${y.toFixed(1)}" width="30" height="${(1100 - y).toFixed(1)}" rx="5"/>`;
      });
      s += `</g>`;
      /* la barandilla del paseo, con sus barrotes */
      s += `<path d="M1608 972 L2098 960" stroke="#8b96c8" stroke-width="4" fill="none" stroke-linecap="round"/>
        <g stroke="#6e79ae" stroke-width="3" stroke-linecap="round">`;
      for (let x = 1618; x < 2098; x += 42) {
        const y = 984 - (x - 1604) * 14 / 496;
        s += `<path d="M${x} ${y.toFixed(1)} L${x} ${(y - 13).toFixed(1)}"/>`;
      }
      s += `</g>`;
      /* farolas de la calle, bajitas, con su resplandor calentito */
      [1662, 1764, 1866, 1968, 2058].forEach(x => {
        const y = 984 - (x - 1604) * 14 / 496;
        s += `<g><ellipse cx="${x}" cy="${(y - 18).toFixed(1)}" rx="22" ry="26" fill="#ffe0a3" opacity=".12"/>
          <rect x="${x - 3}" y="${(y - 26).toFixed(1)}" width="6" height="26" rx="3" fill="#7c86bb"/>
          <circle cx="${x}" cy="${(y - 30).toFixed(1)}" r="6.5" fill="#ffe0a3"/></g>`;
      });
      /* el vial elevado que cruza por delante de las torres y se va en la bruma */
      s += `<path d="M1596 918 L2100 902 L2100 928 L1596 944 Z" fill="#4a5385"/>
        <path d="M1596 918 L2100 902 L2100 910 L1596 926 Z" fill="#98a3d8"/>
        <path d="M1596 936 L2100 920 L2100 930 L1596 946 Z" fill="rgba(16,20,42,.45)"/>
        <path d="M1596 918 Q1548 926 1544 932 Q1548 940 1596 944 Z" fill="#3f4879"/>`;
      [1680, 1848, 2014].forEach(x => {
        const yv = 944 - (x - 1596) * 16 / 504, yp = 990 - (x - 1604) * 14 / 496;
        s += `<rect x="${x - 9}" y="${yv.toFixed(1)}" width="18" height="${(yp - yv).toFixed(1)}" rx="6" fill="#3d4573"/>`;
      });
      s += `<g fill="#ffe0a3" opacity=".8">`;
      for (let i = 0; i < 14; i++) {
        const x = 1620 + i * 34;
        s += `<circle cx="${x}" cy="${(914 - (x - 1596) * 16 / 504).toFixed(1)}" r="3.2"/>`;
      }
      s += `</g>`;
      /* dos coches aparcados en el arcén del vial, quietecitos */
      [[1730, "#a7b0dd"], [1930, "#8b96c8"]].forEach(c => {
        const y = 918 - (c[0] - 1596) * 16 / 504;
        s += `<g><path d="M${c[0] - 24} ${y.toFixed(1)} q4 -16 24 -16 q20 0 24 16 Z" fill="${c[1]}"/>
          <rect x="${c[0] - 11}" y="${(y - 13).toFixed(1)}" width="22" height="7" rx="3" fill="#ffe0a3" opacity=".85"/></g>`;
      });
      /* la bruma tapa el arranque del vial y el pie de la rampa: la ciudad
         sigue más allá, no se corta contra el bosque */
      s += `<ellipse cx="1578" cy="944" rx="102" ry="118" fill="url(#swXvahofrio)"/>
        <ellipse cx="1516" cy="1046" rx="112" ry="86" fill="url(#swXvahofrio)"/>`;
      /* ---------- LA ESQUINA DEL HANGAR: el contrafuerte de la fachada ---------- */
      /* antes el metal empezaba de golpe contra el cielo; ahora la pared llega
         apoyada en un pilón que se ve por fuera, con su portón de entrada */
      s += `<path d="M2112 340 L2178 326 L2178 1100 L2086 1100 Z" fill="url(#swXpilon)"/>
        <path d="M2114 354 L2090 1100" stroke="rgba(255,255,255,.2)" stroke-width="8"/>`;
      s += `<g fill="rgba(28,38,52,.2)">`;
      for (let y = 404; y < 1080; y += 94) {
        const xl = 2112 - 26 * (y - 340) / 760;
        s += `<rect x="${xl.toFixed(1)}" y="${y}" width="${(2172 - xl).toFixed(1)}" height="9" rx="4"/>`;
      }
      s += `</g>`;
      s += `<path d="M2100 636 L2170 626 L2170 748 L2096 758 Z" fill="#2b3440"/>
        <path d="M2100 636 L2170 626 L2170 644 L2100 654 Z" fill="rgba(255,224,163,.4)"/>
        <path d="M2102 790 L2166 784 L2166 826 L2102 832 Z" fill="rgba(28,38,52,.28)"/>
        <path d="M2108 798 L2160 792 M2108 809 L2160 803 M2108 820 L2160 814" stroke="rgba(190,206,222,.35)" stroke-width="4"/>
        <circle cx="2124" cy="880" r="7" fill="#ff8a65"><animate attributeName="opacity" values="1;.25;1" dur="3.2s" repeatCount="indefinite"/></circle>`;
      /* ---------- TRANSICIÓN 3: LA PLATAFORMA DE ATRAQUE Y SU RAMPA ---------- */
      /* de los tejados de la ciudad sale una plataforma que sube en rampa
         hasta la boca del hangar: se ve cómo se pasa de fuera a dentro */
      s += `<path d="M1940 704 L2166 660 L2170 690 L1944 734 Z" fill="#8e9cad"/>
        <path d="M1940 730 L2170 686 L2172 704 L1942 748 Z" fill="#5f6b79"/>
        <path d="M1972 748 L1984 1100 M2096 716 L2108 1100" stroke="#6b7887" stroke-width="14" stroke-linecap="round"/>
        <path d="M1988 856 L2100 838 M1994 962 L2104 944" stroke="#6b7887" stroke-width="8"/>`;
      s += `<g fill="#ffd166">`;
      for (let i = 0; i < 7; i++) s += `<circle cx="${1962 + i * 32}" cy="${706 - i * 6.2}" r="5"><animate attributeName="opacity" values="1;.25;1" dur="1.8s" begin="${(i * .22).toFixed(2)}s" repeatCount="indefinite"/></circle>`;
      s += `</g>`;
      s += `<path d="M2062 604 L2172 596 L2172 660 L2062 668 Z" fill="#7f8d9e" opacity=".7"/>
        <path d="M2062 604 L2172 596 L2172 612 L2062 620 Z" fill="#b9c6d6"/>
        <path d="M2104 620 L2106 660 M2140 616 L2142 656" stroke="rgba(30,40,54,.24)" stroke-width="7"/>`;
      /* ---------- EL HANGAR POR DENTRO: paneles, tuberías y luces ---------- */
      s += `<path d="M2160 316 Q2790 268 3400 316 L3400 1100 L2160 1100 Z" fill="url(#swXmetal)"/>
        <path d="M2160 316 Q2790 268 3400 316 L3400 352 Q2790 304 2160 352 Z" fill="#b9c6d6"/>
        <rect x="2160" y="890" width="1240" height="210" fill="url(#swXsuelo)"/>
        <rect x="2160" y="882" width="1240" height="14" fill="#8f9dae"/>
        <rect x="2156" y="328" width="34" height="772" fill="#7f8d9e"/><rect x="3372" y="326" width="36" height="774" fill="#7f8d9e"/>
        <rect x="2164" y="328" width="8" height="772" fill="rgba(255,255,255,.18)"/><rect x="3380" y="326" width="9" height="774" fill="rgba(255,255,255,.18)"/>`;
      /* el alero: el tejado vuela un poco por fuera y remata la esquina */
      s += `<path d="M2058 334 L2186 316 L2186 342 L2058 360 Z" fill="#b9c6d6"/>
        <path d="M2058 356 L2186 338 L2186 350 L2058 368 Z" fill="#6e7c8d"/>
        <circle cx="2072" cy="352" r="6" fill="#ffd166"/>`;
      s += `<g fill="#5f6b79">`;
      for (let y = 372; y < 1080; y += 82) s += `<circle cx="2173" cy="${y}" r="5"/><circle cx="3390" cy="${y}" r="5"/>`;
      s += `</g>`;
      s += `<g fill="none" stroke="rgba(216,230,244,.15)" stroke-width="3">`;
      for (let x = 2184; x < 3380; x += 98) for (let y = 364; y < 876; y += 88) {
        if (libre(x, y, 88, 78)) s += `<rect x="${x}" y="${y}" width="88" height="78" rx="8"/>`;
      }
      s += `</g><g fill="rgba(30,40,54,.2)">`;
      for (let x = 2200; x < 3382; x += 152) {
        if (libre(x, 366, 10, 508)) s += `<rect x="${x}" y="366" width="10" height="508" rx="5"/>`;
      }
      s += `</g>`;
      /* ---------- LA MITAD ALTA DE LA PARED DEL HANGAR ---------- */
      /* era la mancha de un solo tono más grande del mapa: gris liso con la
         retícula y poco más. Ahora lleva chapas de distinto tono con remaches,
         la garita de control acristalada con su pasarela y su escalera, un
         extractor girando, depósitos, conductos y una estantería de taller */
      /* chapas del casco: rompen el tono plano sin tapar nada */
      [[2200, 392, 168, 128, ".05"], [2384, 640, 152, 118, ".04"], [2596, 372, 168, 44, ".05"],
        [2848, 392, 176, 130, ".04"], [3056, 560, 160, 124, ".05"], [3216, 386, 96, 100, ".04"],
        [2384, 388, 158, 44, ".03"], [3060, 700, 156, 116, ".03"]].forEach(c => {
        if (!libre(c[0], c[1], c[2], c[3])) return;
        s += `<g><rect x="${c[0]}" y="${c[1]}" width="${c[2]}" height="${c[3]}" rx="10" fill="rgba(216,230,244,${c[4]})"/>
          <rect x="${c[0]}" y="${c[1]}" width="${c[2]}" height="5" rx="2.5" fill="rgba(216,230,244,.08)"/>
          <rect x="${c[0]}" y="${c[1] + c[3] - 5}" width="${c[2]}" height="5" rx="2.5" fill="rgba(20,28,38,.12)"/>
          <g fill="rgba(20,28,38,.22)"><circle cx="${c[0] + 12}" cy="${c[1] + 12}" r="3.4"/><circle cx="${c[0] + c[2] - 12}" cy="${c[1] + 12}" r="3.4"/>
          <circle cx="${c[0] + 12}" cy="${c[1] + c[3] - 12}" r="3.4"/><circle cx="${c[0] + c[2] - 12}" cy="${c[1] + c[3] - 12}" r="3.4"/></g></g>`;
      });
      /* la garita de control, con sus cristales encendidos y un droide dentro */
      s += `<g><rect x="2368" y="440" width="188" height="132" rx="10" fill="#3a4552"/>
        <rect x="2368" y="440" width="188" height="16" rx="8" fill="#8e9cad"/>
        <rect x="2372" y="440" width="180" height="6" rx="3" fill="rgba(255,255,255,.28)"/>
        <rect x="2382" y="464" width="160" height="82" rx="7" fill="#2f4a63"/>
        <rect x="2388" y="470" width="148" height="70" rx="5" fill="#ffe9b8" opacity=".5"/>
        <path d="M2404 470 L2388 540 M2452 470 L2436 540" stroke="rgba(255,255,255,.32)" stroke-width="9"/>
        <path d="M2436 470 L2436 540 M2488 470 L2488 540" stroke="#3a4552" stroke-width="6"/>
        <rect x="2396" y="508" width="46" height="30" rx="5" fill="#4f6478" opacity=".8"/>
        <rect x="2500" y="504" width="30" height="34" rx="6" fill="#dde6ef"/>
        <path d="M2500 514 h30" stroke="#9fb0c2" stroke-width="4"/><circle cx="2515" cy="500" r="6" fill="#8ad6ff"/>
        <rect x="2368" y="560" width="188" height="12" rx="6" fill="#7f8d9e"/>
        <rect x="2360" y="570" width="204" height="14" rx="6" fill="#5f6b79"/>
        <path d="M2368 570 L2368 552 M2416 570 L2416 552 M2464 570 L2464 552 M2512 570 L2512 552 M2556 570 L2556 552" stroke="#8e9cad" stroke-width="5" stroke-linecap="round"/>
        <path d="M2360 552 L2556 552" stroke="#8e9cad" stroke-width="5" stroke-linecap="round"/>
        <path d="M2392 584 L2396 662 M2528 584 L2524 662" stroke="#6b7887" stroke-width="9" stroke-linecap="round"/>
        <circle cx="2378" cy="450" r="5" fill="#ffd166"/><circle cx="2546" cy="450" r="5" fill="#7fd6a0"/></g>`;
      /* la escalera de gato de la garita, con su jaula de aros */
      s += `<g stroke="#6b7887" stroke-width="6" fill="none" stroke-linecap="round">
        <path d="M2390 584 L2390 812 M2418 584 L2418 812"/>`;
      for (let y = 606; y < 812; y += 28) s += `<path d="M2390 ${y} L2418 ${y}"/>`;
      s += `</g><g stroke="rgba(216,230,244,.2)" stroke-width="4" fill="none">`;
      for (let y = 620; y < 800; y += 44) s += `<path d="M2386 ${y} q18 -14 36 0"/>`;
      s += `</g>`;
      /* rejilla grande de ventilación empotrada, debajo de la garita */
      s += `<g><rect x="2444" y="618" width="118" height="86" rx="8" fill="#2b3440"/>
        <rect x="2444" y="618" width="118" height="86" rx="8" fill="none" stroke="#7f8d9e" stroke-width="5"/>`;
      for (let y = 634; y < 700; y += 14) s += `<path d="M2452 ${y} L2554 ${y}" stroke="#5a6672" stroke-width="6" stroke-linecap="round"/>`;
      s += `</g>`;
      /* el extractor del hangar: sus aspas giran despacito */
      s += `<g><circle cx="2950" cy="504" r="58" fill="#2b3440"/>
        <circle cx="2950" cy="504" r="58" fill="none" stroke="#8e9cad" stroke-width="9"/>
        <circle cx="2950" cy="504" r="47" fill="none" stroke="rgba(216,230,244,.12)" stroke-width="4"/>
        <g fill="#7f8d9e"><path d="M2950 504 Q2916 468 2940 448 Q2962 462 2950 504 Z"/>
          <path d="M2950 504 Q2986 470 3006 494 Q2992 516 2950 504 Z"/>
          <path d="M2950 504 Q2984 540 2960 560 Q2938 546 2950 504 Z"/>
          <path d="M2950 504 Q2914 538 2894 514 Q2908 492 2950 504 Z"/>
          <animateTransform attributeName="transform" type="rotate" values="0 2950 504;360 2950 504" dur="14s" repeatCount="indefinite"/></g>
        <circle cx="2950" cy="504" r="11" fill="#5f6b79"/>
        <g fill="#5f6b79"><circle cx="2898" cy="452" r="5"/><circle cx="3002" cy="452" r="5"/><circle cx="2898" cy="556" r="5"/><circle cx="3002" cy="556" r="5"/></g></g>`;
      /* dos depósitos tumbados en su soporte, con la válvula y el nivel */
      s += `<g><rect x="2856" y="624" width="164" height="40" rx="20" fill="#7c8794"/>
        <ellipse cx="2856" cy="644" rx="12" ry="20" fill="#a6b1bd"/>
        <path d="M2880 634 h116" stroke="rgba(216,230,244,.24)" stroke-width="6" stroke-linecap="round"/>
        <rect x="2872" y="674" width="140" height="34" rx="17" fill="#6d7783"/>
        <ellipse cx="2872" cy="691" rx="10" ry="17" fill="#96a2ae"/>
        <path d="M2880 664 L2876 678 M3000 664 L3004 678" stroke="#5f6b79" stroke-width="7" stroke-linecap="round"/>
        <path d="M2890 708 L2890 724 M2994 708 L2994 724" stroke="#5f6b79" stroke-width="8" stroke-linecap="round"/>
        <path d="M2874 724 L3010 724" stroke="#6b7887" stroke-width="8" stroke-linecap="round"/>
        <circle cx="3014" cy="644" r="9" fill="#ffd166"/><circle cx="3012" cy="691" r="7" fill="#7fd6a0"/></g>`;
      /* el conducto que baja del techo hasta la tubería gorda, con sus bridas */
      [[2846, 372, 840]].forEach(t => {
        s += `<g><rect x="${t[0] - 13}" y="${t[1]}" width="26" height="${t[2] - t[1]}" rx="12" fill="#7f8d9e"/>
          <rect x="${t[0] - 8}" y="${t[1]}" width="7" height="${t[2] - t[1]}" rx="3" fill="rgba(255,255,255,.16)"/>`;
        for (let y = t[1] + 66; y < t[2]; y += 108) s += `<rect x="${t[0] - 18}" y="${y}" width="36" height="14" rx="5" fill="#5f6b79"/>`;
        s += `</g>`;
      });
      /* la polea del taller, colgada del techo con su gancho */
      s += `<g><path d="M3082 372 L3082 452" stroke="#6b7887" stroke-width="6"/>
        <circle cx="3082" cy="466" r="16" fill="#8e9cad"/><circle cx="3082" cy="466" r="6" fill="#5f6b79"/>
        <path d="M3082 482 L3082 536" stroke="#b3c0cf" stroke-width="4"/>
        <path d="M3082 536 q-16 12 -2 24 q12 10 20 -2" stroke="#8e9cad" stroke-width="7" fill="none" stroke-linecap="round"/></g>`;
      /* el cartel luminoso de la bahía, sin letras: tres franjas de luz */
      s += `<g><rect x="3218" y="428" width="94" height="70" rx="9" fill="#2b3440"/>
        <rect x="3218" y="428" width="94" height="70" rx="9" fill="none" stroke="#7f8d9e" stroke-width="5"/>
        <rect x="3230" y="444" width="70" height="12" rx="6" fill="#ffd166" opacity=".9"/>
        <rect x="3230" y="464" width="50" height="10" rx="5" fill="#ffe9b8" opacity=".7"/>
        <rect x="3230" y="480" width="60" height="8" rx="4" fill="#8ad6ff" opacity=".7">
          <animate attributeName="opacity" values=".7;.25;.7" dur="4.2s" repeatCount="indefinite"/></rect></g>`;
      /* el armario eléctrico de la pared y la manguera enrollada en su soporte */
      s += `<g><rect x="3218" y="518" width="94" height="88" rx="8" fill="#5f6b79"/>
        <rect x="3218" y="518" width="94" height="10" rx="5" fill="#8e9cad"/>
        <rect x="3226" y="534" width="38" height="64" rx="5" fill="#4b5663"/>
        <rect x="3270" y="534" width="34" height="64" rx="5" fill="#4b5663"/>
        <path d="M3262 550 L3262 582 M3278 550 L3278 582" stroke="#8e9cad" stroke-width="5" stroke-linecap="round"/>
        <g fill="#ffd166"><circle cx="3236" cy="546" r="5"/><circle cx="3252" cy="546" r="5"/></g>
        <circle cx="3294" cy="546" r="6" fill="#7fd6a0"/>
        <path d="M3228 566 L3258 566 M3228 580 L3248 580" stroke="rgba(216,230,244,.25)" stroke-width="5" stroke-linecap="round"/></g>
        <g><path d="M3132 444 L3190 444" stroke="#7f8d9e" stroke-width="7" stroke-linecap="round"/>
        <path d="M3138 444 L3138 428 M3184 444 L3184 428" stroke="#7f8d9e" stroke-width="5" stroke-linecap="round"/>
        <path d="M3134 468 q4 -22 28 -22 q26 0 28 24 q2 24 -26 24 q-24 0 -22 -20 q2 -14 18 -12" stroke="#3f4a56" stroke-width="9" fill="none" stroke-linecap="round"/>
        <path d="M3160 494 q-8 24 8 38" stroke="#3f4a56" stroke-width="7" fill="none" stroke-linecap="round"/></g>`;
      /* la estantería del taller, con sus cajas y su lamparita */
      s += `<g><rect x="3216" y="664" width="98" height="12" rx="5" fill="#8e9cad"/>
        <rect x="3216" y="742" width="98" height="12" rx="5" fill="#8e9cad"/>
        <path d="M3222 664 L3222 754 M3308 664 L3308 754" stroke="#6b7887" stroke-width="7"/>
        <rect x="3228" y="624" width="46" height="40" rx="6" fill="#6b7358"/>
        <rect x="3228" y="624" width="46" height="9" rx="4" fill="#8b9472"/>
        <rect x="3278" y="634" width="34" height="30" rx="5" fill="#7d6a4e"/>
        <rect x="3278" y="634" width="34" height="8" rx="4" fill="#9c8763"/>
        <rect x="3226" y="708" width="42" height="34" rx="6" fill="#5d6b74"/>
        <rect x="3226" y="708" width="42" height="8" rx="4" fill="#7d8c96"/>
        <rect x="3272" y="700" width="40" height="42" rx="6" fill="#6b7358"/>
        <rect x="3272" y="700" width="40" height="9" rx="4" fill="#8b9472"/>
        <circle cx="3312" cy="694" r="7" fill="#ffe9b8"/></g>`;
      /* manchas de uso y soldaduras: la chapa nunca es de un solo gris */
      s += `<g fill="rgba(20,28,38,.07)"><ellipse cx="2320" cy="700" rx="86" ry="48"/><ellipse cx="2700" cy="790" rx="120" ry="40"/>
        <ellipse cx="3140" cy="470" rx="70" ry="42"/><ellipse cx="2540" cy="726" rx="64" ry="34"/></g>
        <g stroke="rgba(216,230,244,.1)" stroke-width="4" fill="none" stroke-linecap="round">
        <path d="M2620 452 q28 -10 56 0 M3160 636 q26 -10 52 0 M2258 560 q26 -10 52 0 M2712 830 q30 -10 60 0"/></g>`;
      /* ---------- LA BAHÍA ABIERTA DETRÁS DEL HALCÓN ---------- */
      /* la nave quedaba gris sobre gris, justo encima del pilón de la esquina:
         detrás se abre ahora un portón oscuro con su banda de luz arriba, para
         que el casco claro se recorte y se lea de lejos */
      s += `<path d="M2130 372 L2324 372 L2324 600 L2130 600 Z" fill="#1a2432"/>`;
      /* el fondo de la bahía: techo, paredes y suelo en fuga, para que se vea
         un cuarto de verdad y no un agujero negro, con su pasarela al fondo */
      s += `<path d="M2130 372 L2324 372 L2296 400 L2158 400 Z" fill="#16202c"/>
        <path d="M2130 372 L2158 400 L2158 560 L2130 600 Z" fill="#202b3a"/>
        <path d="M2324 372 L2296 400 L2296 560 L2324 600 Z" fill="#1c2634"/>
        <path d="M2130 600 L2158 560 L2296 560 L2324 600 Z" fill="#2b3746"/>
        <path d="M2158 400 L2296 400 L2296 560 L2158 560 Z" fill="url(#swXbahia)"/>
        <path d="M2130 372 L2158 400 M2324 372 L2296 400 M2130 600 L2158 560 M2324 600 L2296 560" stroke="rgba(154,176,200,.2)" stroke-width="3"/>
        <path d="M2158 506 L2296 506" stroke="rgba(154,176,200,.26)" stroke-width="5"/>
        <path d="M2174 506 L2174 560 M2280 506 L2280 560" stroke="rgba(154,176,200,.16)" stroke-width="4"/>`;
      /* la banda de luz del dintel y el haz que baja por dentro */
      s += `<rect x="2134" y="378" width="186" height="10" rx="5" fill="#ffe9b8"/>
        <path d="M2134 388 L2320 388 L2288 600 L2166 600 Z" fill="#ffe9b8" opacity=".13"/>
        <g fill="#ffd166"><circle cx="2168" cy="428" r="4"/><circle cx="2288" cy="428" r="4"/><circle cx="2227" cy="552" r="4"/></g>`;
      /* el marco del portón: dintel, jambas y umbral, apoyados en el pilón */
      s += `<g fill="#8e9cad"><rect x="2116" y="360" width="222" height="14" rx="5"/>
        <rect x="2116" y="596" width="222" height="14" rx="5"/>
        <rect x="2116" y="360" width="16" height="250"/><rect x="2322" y="360" width="16" height="250"/></g>
        <g fill="rgba(255,255,255,.22)"><rect x="2116" y="360" width="222" height="5" rx="2"/><rect x="2118" y="374" width="6" height="222"/></g>
        <g fill="#ffd166"><circle cx="2124" cy="392" r="5"/><circle cx="2330" cy="392" r="5"/></g>`;
      /* tuberías con sus bridas */
      s += `<path d="M2172 418 H3392" stroke="#7f8d9e" stroke-width="18" stroke-linecap="round"/>
        <path d="M2172 412 H3392" stroke="#b3c0cf" stroke-width="5" stroke-linecap="round"/>
        <path d="M2172 856 H3392" stroke="#7f8d9e" stroke-width="22" stroke-linecap="round"/>
        <path d="M2172 848 H3392" stroke="#b3c0cf" stroke-width="6" stroke-linecap="round"/>`;
      for (let x = 2232; x < 3384; x += 118) {
        if (libre(x - 8, 402, 16, 32)) s += `<rect x="${x - 8}" y="404" width="16" height="28" rx="4" fill="#66727f"/>`;
        s += `<rect x="${x - 9}" y="842" width="18" height="30" rx="4" fill="#66727f"/>`;
      }
      /* lámparas del techo */
      [2260, 2420, 2580, 2760, 2940, 3110, 3280].forEach((x, i) => {
        s += `<g><rect x="${x - 30}" y="332" width="60" height="14" rx="6" fill="#5f6b79"/>
          <ellipse cx="${x}" cy="352" rx="26" ry="10" fill="#ffe9b8"/>
          <path d="M${x - 34} 362 L${x + 34} 362 L${x + 62} 484 L${x - 62} 484 Z" fill="#ffe9b8" opacity="${i % 2 ? ".1" : ".14"}"/>${i < 3 ? `<animate attributeName="opacity" values="1;.55;1" dur="${(3 + i).toFixed(1)}s" repeatCount="indefinite"/>` : ""}</g>`;
      });
      /* plataforma del Halcón, en la boca del hangar */
      s += `<path d="M2098 546 L2318 546 L2306 570 L2110 570 Z" fill="#8e9cad"/>
        <rect x="2098" y="568" width="220" height="10" rx="5" fill="#5f6b79"/>
        <path d="M2134 578 L2160 890 M2284 578 L2258 890" stroke="#6b7887" stroke-width="12" stroke-linecap="round"/>
        <path d="M2146 664 L2272 664 M2152 776 L2266 776" stroke="#6b7887" stroke-width="7"/>
        <rect x="2112" y="550" width="14" height="8" rx="3" fill="#7fd6a0"/><rect x="2288" y="550" width="14" height="8" rx="3" fill="#7fd6a0"/>`;
      /* viga alta del Ala-X, colgada del techo */
      s += `<path d="M2352 344 L2552 344 L2552 366 L2352 366 Z" fill="#8e9cad"/>
        <rect x="2352" y="364" width="200" height="8" rx="4" fill="#5f6b79"/>
        <path d="M2376 344 L2376 300 M2528 344 L2528 300" stroke="#6b7887" stroke-width="9"/>
        <circle cx="2362" cy="354" r="5" fill="#ffd166"/><circle cx="2542" cy="354" r="5" fill="#ffd166"/>`;
      /* cuna circular de la nave grande */
      s += `<path d="M2596 640 Q2700 712 2804 640" stroke="#8e9cad" stroke-width="20" fill="none" stroke-linecap="round"/>
        <path d="M2596 640 Q2700 704 2804 640" stroke="#b3c0cf" stroke-width="6" fill="none" stroke-linecap="round"/>
        <path d="M2612 656 L2634 890 M2788 656 L2766 890" stroke="#6b7887" stroke-width="13" stroke-linecap="round"/>
        <path d="M2626 772 L2774 772" stroke="#6b7887" stroke-width="8"/>
        <ellipse cx="2700" cy="894" rx="130" ry="18" fill="rgba(0,0,0,.18)"/>`;
      /* raíl alto del caza */
      s += `<path d="M2850 344 L3050 344 L3050 364 L2850 364 Z" fill="#8e9cad"/>
        <rect x="2850" y="362" width="200" height="8" rx="4" fill="#5f6b79"/>
        <path d="M2872 344 L2872 302 M3028 344 L3028 302" stroke="#6b7887" stroke-width="9"/>
        <circle cx="2950" cy="354" r="6" fill="#8ad6ff"><animate attributeName="opacity" values="1;.3;1" dur="2.8s" repeatCount="indefinite"/></circle>`;
      /* peana del sable, en su vitrina */
      s += `<path d="M3128 748 L3212 748 L3204 772 L3138 772 Z" fill="#b3c0cf"/>
        <rect x="3152" y="770" width="36" height="112" rx="8" fill="#7f8d9e"/>
        <path d="M3120 882 L3220 882 L3228 898 L3112 898 Z" fill="#5f6b79"/>
        <rect x="3156" y="782" width="8" height="90" rx="4" fill="rgba(255,255,255,.2)"/>`;
      /* panel de control con sus botoncitos */
      s += `<g><rect x="2460" y="772" width="150" height="100" rx="10" fill="#5f6b79"/>
        <rect x="2472" y="784" width="126" height="44" rx="6" fill="#2f4a63"/>
        <path d="M2480 816 L2504 796 L2530 810 L2556 786 L2588 804" stroke="#8ad6ff" stroke-width="4" fill="none" stroke-linecap="round"/>`;
      for (let i = 0; i < 6; i++) s += `<circle cx="${2484 + i * 22}" cy="848" r="7" fill="${["#ff8a65", "#ffd166", "#7fd6a0", "#8ad6ff", "#c58af9", "#ffd166"][i]}"/>`;
      s += `</g>`;
      /* el taller del hangar: cajas, bidones y un banco de trabajo, para que
         el suelo no quede vacío entre nave y nave */
      s += `<g><rect x="2252" y="792" width="112" height="104" rx="8" fill="#6b7358"/>
        <rect x="2252" y="792" width="112" height="14" rx="7" fill="#8b9472"/>
        <path d="M2270 806 L2270 896 M2346 806 L2346 896" stroke="rgba(28,34,22,.3)" stroke-width="8"/>
        <rect x="2268" y="714" width="82" height="80" rx="7" fill="#7d6a4e"/>
        <rect x="2268" y="714" width="82" height="12" rx="6" fill="#9c8763"/>
        <path d="M2286 726 L2286 794" stroke="rgba(38,28,16,.3)" stroke-width="7"/>
        <rect x="2374" y="826" width="72" height="70" rx="7" fill="#5d6b74"/>
        <rect x="2374" y="826" width="72" height="11" rx="5" fill="#7d8c96"/>
        <circle cx="2410" cy="866" r="9" fill="#42505a"/></g>`;
      s += `<g><ellipse cx="3036" cy="898" rx="74" ry="12" fill="rgba(0,0,0,.16)"/>`;
      [2988, 3032, 3076].forEach((x, i) => {
        s += `<rect x="${x - 19}" y="${824 - i % 2 * 8}" width="38" height="${72 + i % 2 * 8}" rx="10" fill="#7c8794"/>
          <ellipse cx="${x}" cy="${824 - i % 2 * 8}" rx="19" ry="7" fill="#a6b1bd"/>
          <path d="M${x - 17} ${850 - i % 2 * 8} h34" stroke="rgba(30,40,54,.24)" stroke-width="6"/>`;
      });
      s += `</g>`;
      s += `<g><rect x="3222" y="820" width="82" height="16" rx="6" fill="#8e9cad"/>
        <path d="M3234 836 L3234 896 M3292 836 L3292 896" stroke="#6b7887" stroke-width="9"/>
        <rect x="3238" y="800" width="26" height="20" rx="5" fill="#5f6b79"/>
        <circle cx="3282" cy="810" r="8" fill="#7fd6a0"/>
        <path d="M3232 862 L3294 862" stroke="#6b7887" stroke-width="6"/></g>`;
      s += `<g stroke="#6b7887" stroke-width="7" fill="none" stroke-linecap="round">
        <path d="M2202 600 L2202 886 M2228 600 L2228 886"/>`;
      for (let y = 618; y < 886; y += 34) s += `<path d="M2202 ${y} L2228 ${y}"/>`;
      s += `</g>`;
      /* ---------- EL SUELO DEL HANGAR: placas, rejillas y trastos bajos ---------- */
      /* era la mancha lisa más grande del mapa. Ahora lleva juntas de placa en
         fuga, rejillas de ventilación, manchas de aceite, pintura de seguridad,
         cables recogidos, tornillos y las sombras de lo que hay aparcado.
         Todo va recortado al suelo para no salpicar el resto del decorado. */
      const fuga = (x, y) => 2780 + (x - 2780) * (1 + (y - 896) * 0.0017);
      /* una rejilla empotrada, con su marco y sus lamas, abriéndose en fuga */
      const rejilla = (x, y, w, h) => {
        const d = h * .3;
        let r = `<g><path d="M${x} ${y} L${x + w} ${y} L${x + w + d} ${y + h} L${x - d} ${y + h} Z" fill="#26303b"/>`;
        for (let i = 1; i < 5; i++) {
          const k = i / 5;
          r += `<path d="M${(x - d * k).toFixed(1)} ${(y + h * k).toFixed(1)} L${(x + w + d * k).toFixed(1)} ${(y + h * k).toFixed(1)}" stroke="#5a6672" stroke-width="4"/>`;
        }
        return r + `<path d="M${x} ${y} L${x + w} ${y} L${x + w + d} ${y + h} L${x - d} ${y + h} Z" fill="none" stroke="#6c7883" stroke-width="4"/></g>`;
      };
      s += `<g clip-path="url(#swXsueloClip)">`;
      /* las sombras de lo aparcado arriba, muy suaves */
      s += `<g fill="rgba(10,14,20,.2)"><ellipse cx="2214" cy="920" rx="148" ry="26"/>
        <ellipse cx="2700" cy="944" rx="234" ry="42"/><ellipse cx="2452" cy="910" rx="102" ry="20"/>
        <ellipse cx="3170" cy="928" rx="84" ry="18"/></g>`;
      /* las juntas de las placas: en fuga hacia el fondo y en travesaños */
      s += `<g stroke="rgba(18,24,32,.4)" stroke-width="3" fill="none">`;
      for (let x = 2144; x <= 3420; x += 106) s += `<path d="M${x} 896 L${fuga(x, 1100).toFixed(1)} 1100"/>`;
      s += `</g><g stroke="rgba(216,230,244,.07)" stroke-width="3" fill="none">`;
      for (let x = 2150; x <= 3420; x += 106) s += `<path d="M${x} 896 L${fuga(x, 1100).toFixed(1)} 1100"/>`;
      s += `</g>`;
      [928, 972, 1026, 1090].forEach(y => {
        s += `<path d="M2156 ${y - 4} H3404" stroke="rgba(216,230,244,.06)" stroke-width="3"/>
          <path d="M2156 ${y} H3404" stroke="rgba(18,24,32,.34)" stroke-width="3"/>`;
      });
      /* tornillos y remaches sobre las juntas */
      s += `<g>`;
      for (let i = 0; i < 33; i++) {
        const y = [928, 972, 1026][i % 3] - 9, x = 2184 + (i * 173) % 1196;
        s += `<circle cx="${x}" cy="${y}" r="3.6" fill="rgba(216,230,244,.16)"/><circle cx="${x}" cy="${y}" r="1.6" fill="rgba(16,22,30,.5)"/>`;
      }
      s += `</g>`;
      /* rejillas de ventilación */
      s += rejilla(2580, 1056, 150, 40) + rejilla(2880, 940, 118, 32) + rejilla(3180, 1044, 110, 34);
      /* manchas de aceite, con su brillito encima */
      [[2860, 1078, .85], [3126, 992, .7], [2338, 1082, .6]].forEach(m => {
        s += `<g transform="translate(${m[0]} ${m[1]}) scale(${m[2]})" fill="rgba(12,16,22,.34)">
          <path d="M-58 0 Q-46 -20 -12 -18 Q18 -16 40 -22 Q64 -10 52 6 Q28 20 -8 16 Q-44 14 -58 0 Z"/>
          <ellipse cx="-72" cy="10" rx="12" ry="5"/><ellipse cx="64" cy="-14" rx="9" ry="4"/></g>
        <ellipse cx="${(m[0] - 16 * m[2]).toFixed(1)}" cy="${(m[1] - 8 * m[2]).toFixed(1)}" rx="${(18 * m[2]).toFixed(1)}" ry="${(6 * m[2]).toFixed(1)}" fill="rgba(172,198,222,.1)"/>`;
      });
      /* pintura de seguridad: rayado al pie de la pared y escuadras del círculo */
      s += `<g stroke="rgba(255,224,163,.28)" stroke-width="9" stroke-linecap="round">`;
      for (let x = 2196; x < 2392; x += 26) s += `<path d="M${x} 926 L${x + 18} 900"/>`;
      for (let x = 3020; x < 3300; x += 26) s += `<path d="M${x} 926 L${x + 18} 900"/>`;
      s += `</g>`;
      s += `<g stroke="rgba(255,224,163,.32)" stroke-width="8" fill="none">
        <path d="M2404 968 L2404 930 L2450 930"/><path d="M2998 930 L3044 930 L3044 968"/>
        <path d="M2404 1028 L2404 1064 L2450 1064"/><path d="M2998 1064 L3044 1064 L3044 1028"/></g>`;
      /* cables recogidos en rollo y una manguera cruzando el suelo */
      [[2420, 1076, 1], [3268, 966, .8]].forEach(c => {
        s += `<g transform="translate(${c[0]} ${c[1]}) scale(${c[2]})" fill="none" stroke="#3f4a56" stroke-width="7">
          <ellipse cx="0" cy="0" rx="46" ry="17"/><ellipse cx="0" cy="0" rx="31" ry="11"/><ellipse cx="0" cy="0" rx="16" ry="6"/></g>`;
      });
      s += `<path d="M2166 932 Q2246 958 2312 940 Q2366 926 2414 942" stroke="#3f4a56" stroke-width="7" fill="none" stroke-linecap="round"/>
        <path d="M2166 932 Q2246 958 2312 940" stroke="rgba(216,230,244,.1)" stroke-width="3" fill="none"/>`;
      /* cajas bajas y bidones apoyados, fuera de la zona de aterrizaje */
      s += `<g><ellipse cx="2242" cy="1042" rx="80" ry="14" fill="rgba(10,14,20,.22)"/>
        <rect x="2180" y="994" width="122" height="46" rx="8" fill="#6b7358"/>
        <rect x="2180" y="994" width="122" height="11" rx="5" fill="#8b9472"/>
        <path d="M2210 1005 L2210 1040 M2272 1005 L2272 1040" stroke="rgba(28,34,22,.3)" stroke-width="7"/>
        <rect x="2196" y="956" width="86" height="38" rx="7" fill="#7d6a4e"/>
        <rect x="2196" y="956" width="86" height="10" rx="5" fill="#9c8763"/>
        <path d="M2224 966 L2224 994" stroke="rgba(38,28,16,.3)" stroke-width="6"/></g>`;
      s += `<g><ellipse cx="3140" cy="1006" rx="76" ry="13" fill="rgba(10,14,20,.2)"/>`;
      [3100, 3140, 3180].forEach((x, i) => {
        s += `<rect x="${x - 20}" y="${966 + i % 2 * 6}" width="40" height="${36 - i % 2 * 6}" rx="12" fill="#7c8794"/>
          <ellipse cx="${x}" cy="${966 + i % 2 * 6}" rx="20" ry="7" fill="#a6b1bd"/>
          <path d="M${x - 17} ${986 + i % 2 * 6} h34" stroke="rgba(30,40,54,.24)" stroke-width="5"/>`;
      });
      s += `</g></g>`;
      /* pintura del suelo y un droide rodando despacio */
      s += `<ellipse cx="2700" cy="996" rx="250" ry="56" fill="none" stroke="rgba(255,224,163,.3)" stroke-width="8" stroke-dasharray="30 26"/>
        <path d="M2240 1054 H3340" stroke="rgba(255,224,163,.22)" stroke-width="7" stroke-dasharray="46 34"/>`;
      s += `<g><animateTransform attributeName="transform" type="translate" values="0 0;220 0;0 0" dur="28s" repeatCount="indefinite"/>
        <ellipse cx="2330" cy="1012" rx="30" ry="9" fill="rgba(0,0,0,.2)"/>
        <rect x="2306" y="950" width="48" height="56" rx="12" fill="#dde6ef"/>
        <path d="M2306 968 h48 M2306 986 h48" stroke="#9fb0c2" stroke-width="4"/>
        <path d="M2304 950 q26 -30 52 0 Z" fill="#8ad6ff"/><circle cx="2330" cy="942" r="7" fill="#4f6478"/>
        <circle cx="2318" cy="978" r="5" fill="#ff8a65"/><circle cx="2344" cy="978" r="5" fill="#7fd6a0"/></g>`;
      /* ---------- TRANSICIÓN 4: LA COMPUERTA DEL HANGAR, ABIERTA ---------- */
      /* el portón corrido deja ver el bosque de fuera: se pasa de dentro a fuera */
      s += `<path d="M3336 330 L3488 330 L3488 1100 L3336 1100 Z" fill="#3d4652"/>
        <rect x="3352" y="356" width="120" height="718" fill="url(#swXfuera)"/>
        <path d="M3352 812 Q3412 776 3472 804 L3472 1074 L3352 1074 Z" fill="#2f6b39"/>
        <circle cx="3384" cy="790" r="28" fill="#3d7f46"/><circle cx="3432" cy="772" r="32" fill="#458c4e"/><circle cx="3456" cy="800" r="16" fill="#3d7f46"/>
        <path d="M3390 902 q-10 -26 -22 -36 M3400 902 q0 -30 6 -42 M3440 926 q10 -26 22 -34" stroke="#4d8a4a" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M3352 356 L3472 356 L3472 1074 L3352 1074 Z" fill="none" stroke="rgba(216,230,244,.3)" stroke-width="4"/>`;
      s += `<g fill="url(#swXpuerta)"><path d="M3316 322 L3352 322 L3352 1100 L3316 1100 Z"/><path d="M3472 322 L3508 322 L3508 1100 L3472 1100 Z"/></g>
        <g fill="rgba(30,40,54,.24)">`;
      for (let y = 366; y < 1080; y += 62) s += `<rect x="3318" y="${y}" width="32" height="10" rx="4"/><rect x="3474" y="${y}" width="32" height="10" rx="4"/>`;
      s += `</g>`;
      s += `<path d="M3306 320 L3518 320 L3518 356 L3306 356 Z" fill="#7f8d9e"/>
        <path d="M3306 320 L3518 320 L3518 332 L3306 332 Z" fill="#b9c6d6"/>
        <g fill="#ffd166"><circle cx="3334" cy="342" r="6"><animate attributeName="opacity" values="1;.2;1" dur="2.4s" repeatCount="indefinite"/></circle>
        <circle cx="3490" cy="342" r="6"><animate attributeName="opacity" values=".2;1;.2" dur="2.4s" repeatCount="indefinite"/></circle></g>
        <g fill="rgba(255,224,163,.18)"><path d="M3352 1074 L3472 1074 L3540 1100 L3284 1100 Z"/></g>`;
      /* ---------- BOSQUE Y MESETA DE LAS CRIATURAS ---------- */
      s += `<path d="M3506 846 Q3660 790 3830 826 Q3990 858 4200 818 L4200 1100 L3506 1100 Z" fill="#2f6b39"/>
        <path d="M3560 870 Q3660 844 3770 872 Q3830 886 3880 880 L3880 936 L3560 936 Z" fill="#3d7f46"/>`;
      s += arbolote(3560, 880, 286, 26, .8) + arbolote(4136, 866, 320, 22, .68);
      s += `<g fill="#3d7f46"><ellipse cx="3520" cy="942" rx="58" ry="22"/><ellipse cx="3690" cy="962" rx="50" ry="20"/><ellipse cx="3960" cy="930" rx="54" ry="21"/></g>
        <g stroke="#4d8a4a" stroke-width="6" fill="none" stroke-linecap="round">
        <path d="M3586 986 q-14 -38 -32 -52 M3598 986 q0 -44 8 -60 M3610 986 q14 -36 30 -46"/>
        <path d="M3696 1026 q-12 -34 -28 -46 M3706 1026 q0 -40 6 -54"/>
        <path d="M4014 968 q-14 -38 -32 -52 M4026 968 q0 -44 8 -60 M4038 968 q14 -36 30 -46"/></g>`;
      /* la rampa de salida: del suelo de metal a la tierra del bosque, por delante */
      s += `<path d="M3496 1046 L3624 1006 Q3702 986 3764 994 L3764 1100 L3496 1100 Z" fill="#5b6470"/>
        <path d="M3496 1046 L3624 1006 Q3702 986 3764 994 L3764 1012 Q3694 1006 3628 1024 L3498 1062 Z" fill="#8f9dae"/>
        <path d="M3556 1040 L3562 1100 M3660 1010 L3664 1100" stroke="rgba(30,40,54,.18)" stroke-width="7"/>
        <g fill="#3d7f46" opacity=".9"><ellipse cx="3742" cy="1010" rx="40" ry="12"/><ellipse cx="3520" cy="1068" rx="34" ry="11"/></g>`;
      /* la plataforma de madera del poblado, con su casita */
      s += `<g><path d="M3324 434 L3474 430 L3474 452 L3324 456 Z" fill="#8a6238"/>
        <path d="M3324 426 L3474 422" stroke="#a87c4a" stroke-width="7" stroke-linecap="round"/>
        <path d="M3348 456 L3362 846 M3452 452 L3438 852" stroke="#6d4b32" stroke-width="9"/>
        <path d="M3474 438 Q3546 448 3608 434" stroke="#a87c4a" stroke-width="5" fill="none"/>`;
      s += `<g fill="#7a5630">`;
      for (let x = 3332; x < 3468; x += 20) s += `<rect x="${x}" y="432" width="12" height="18" rx="3"/>`;
      s += `</g>`;
      s += `<g transform="translate(3552 386)"><path d="M-46 48 L-46 4 L0 -30 L46 4 L46 48 Z" fill="#8a6238"/>
        <path d="M-58 8 L0 -40 L58 8 Z" fill="#6d4b32"/><path d="M-52 12 L0 -28 L52 12" stroke="#a87c4a" stroke-width="5" fill="none"/>
        <rect x="-16" y="12" width="32" height="36" rx="5" fill="#c8a26c"/><circle cx="8" cy="32" r="3" fill="#6d4b32"/>
        <path d="M-46 48 L46 48 L40 62 L-40 62 Z" fill="#6d4b32"/></g>`;
      s += `<path d="M3552 448 L3544 846 M3566 448 L3576 852" stroke="#6d4b32" stroke-width="8"/></g>`;
      /* la aguja de roca donde descansa el pajarito: sube desde el suelo del bosque */
      s += `<path d="M3606 890 Q3618 762 3628 630 L3676 630 Q3690 764 3702 892 Z" fill="#7a8794"/>
        <path d="M3628 630 Q3618 762 3606 890 L3648 890 Q3650 762 3652 630 Z" fill="#8b98a8"/>
        <path d="M3620 726 Q3654 718 3688 728 M3614 806 Q3652 798 3692 808" stroke="rgba(40,52,66,.22)" stroke-width="6" fill="none" stroke-linecap="round"/>
        <path d="M3660 744 Q3706 738 3726 760 Q3702 774 3664 766 Z" fill="#8b98a8"/>
        <ellipse cx="3588" cy="886" rx="30" ry="13" fill="#7a8794"/>
        <path d="M3584 590 Q3642 574 3702 594 Q3720 614 3698 626 Q3642 640 3592 622 Q3570 608 3584 590 Z" fill="#96a3b2"/>
        <path d="M3596 600 Q3642 592 3686 602" stroke="rgba(255,255,255,.35)" stroke-width="4" fill="none" stroke-linecap="round"/>
        <g fill="#3d7f46"><ellipse cx="3616" cy="892" rx="46" ry="16"/><ellipse cx="3696" cy="898" rx="36" ry="13"/></g>
        <g stroke="#4d8a4a" stroke-width="5" fill="none" stroke-linecap="round">
        <path d="M3592 894 q-8 -24 -18 -32 M3602 894 q0 -28 5 -38 M3716 900 q10 -24 20 -32"/></g>`;
      /* la meseta del desierto, al fondo derecha: el bosque vuelve a arena.
         La cima sube en el tramo central (el del bantha) y llega ondulada, para
         que el animal se plante en el borde y no quede colgado sobre el cielo */
      const cima = "M3760 412 Q3794 404 3828 400 L3906 396 Q3960 396 4010 410";
      s += `<path d="${cima} L4056 706 L4120 744 L4200 776 L4200 956 L3790 956 L3794 706 Z" fill="url(#swXroca)" opacity=".95"/>
        <path d="${cima} L4014 438 Q3958 424 3906 424 L3828 428 Q3792 432 3758 440 Z" fill="#eec085"/>
        <path d="M3798 514 L4028 510 M3794 610 L4046 606 M3790 706 L4060 704" stroke="rgba(120,80,40,.26)" stroke-width="7"/>
        <path d="M3832 454 L3828 702 M3900 450 L3904 704 M3974 448 L3982 704" stroke="rgba(120,80,40,.16)" stroke-width="6"/>
        <path d="M4060 486 L4126 484 L4146 656 L4068 658 Z" fill="url(#swXroca)" opacity=".55"/>`;
      /* el lomo de arena de la cima: la pisada del bantha, con su sombra de
         contacto y cuatro piedras para que el borde no quede pelado */
      s += `<path d="M3782 420 Q3820 392 3878 385 Q3940 383 3974 418 Q3892 402 3782 420 Z" fill="url(#swXduna)"/>
        <ellipse cx="3880" cy="393" rx="54" ry="10" fill="rgba(120,80,40,.24)"/>
        <path d="M3826 410 q26 -9 52 -4 M3908 404 q22 -6 42 2" stroke="rgba(255,240,206,.45)" stroke-width="5" fill="none" stroke-linecap="round"/>
        <g fill="#d9a45c"><ellipse cx="3800" cy="420" rx="13" ry="6"/><ellipse cx="3958" cy="416" rx="11" ry="5"/><ellipse cx="3934" cy="426" rx="7" ry="3.4"/></g>
        <g fill="rgba(255,240,206,.42)"><ellipse cx="3795" cy="417" rx="6" ry="2.2"/><ellipse cx="3954" cy="413.5" rx="5" ry="1.8"/></g>`;
      /* la arena trepa por el pie de la meseta: la pared no cae a plomo sobre el bosque */
      s += `<path d="M3676 1020 Q3728 950 3800 884 Q3828 860 3852 856 Q3892 916 3924 1022 Z" fill="url(#swXduna)"/>
        <path d="M3760 962 Q3806 916 3846 878" stroke="rgba(255,240,206,.35)" stroke-width="6" fill="none" stroke-linecap="round"/>
        <g fill="url(#swXroca)" opacity=".8"><ellipse cx="3736" cy="1000" rx="32" ry="13"/><ellipse cx="3888" cy="1010" rx="26" ry="11"/></g>`;
      /* la duna baja donde se apoya el jawa, delante de la meseta */
      s += `<path d="M3900 822 Q3956 676 4000 650 L4062 652 Q4128 682 4162 780 Q4192 818 4200 850 L4200 908 Q4060 876 3968 894 Q3912 904 3888 844 Z" fill="url(#swXduna)"/>
        <path d="M3932 780 q26 -12 52 0 M4076 802 q26 -12 52 0" stroke="rgba(150,102,44,.25)" stroke-width="5" fill="none" stroke-linecap="round"/>
        <g fill="url(#swXroca)"><ellipse cx="3846" cy="918" rx="52" ry="22"/><ellipse cx="4170" cy="896" rx="40" ry="18"/></g>`;
      /* la arena entra en el bosque a lengüetas, nunca de un tajo */
      s += `<path d="M3592 1100 Q3648 1046 3736 1008 Q3856 958 3964 934 Q4084 908 4200 930 L4200 1100 Z" fill="url(#swXduna2)"/>
        <g fill="url(#swXduna2)" opacity=".85"><ellipse cx="3562" cy="1082" rx="70" ry="24"/><ellipse cx="3676" cy="1052" rx="58" ry="20"/><ellipse cx="3806" cy="988" rx="52" ry="18"/></g>
        <g fill="#3d7f46" opacity=".75"><ellipse cx="3862" cy="1006" rx="46" ry="15"/><ellipse cx="3972" cy="972" rx="34" ry="12"/><ellipse cx="4078" cy="952" rx="26" ry="9"/></g>`;
      /* la costura de tierra entre el bosque y la arena: matas cada vez más ralas */
      s += `<g stroke="#4d8a4a" stroke-width="5" fill="none" stroke-linecap="round" opacity=".7">
        <path d="M3702 1044 q-10 -26 -22 -36 M3712 1044 q0 -30 6 -42 M3818 998 q-10 -26 -22 -36 M3828 998 q0 -30 6 -42"/></g>
        <g stroke="#7f9a52" stroke-width="4" fill="none" stroke-linecap="round" opacity=".55">
        <path d="M3958 966 q-8 -22 -18 -30 M3966 966 q0 -26 5 -36 M4084 942 q-7 -20 -16 -28 M4092 942 q0 -24 4 -32"/></g>
        <g stroke="rgba(150,102,44,.26)" stroke-width="5" fill="none" stroke-linecap="round">
        <path d="M3924 1052 q22 -10 44 0 M4046 1010 q22 -10 44 0 M4128 1074 q22 -10 44 0 M3848 1090 q22 -10 44 0 M4012 1090 q22 -10 44 0"/></g>`;
      /* ---------- COSTURAS DE BRUMA CÁLIDA ENTRE ETAPAS ---------- */
      /* manchas ovaladas, no bandas: se deshilachan por los cuatro lados y
         no dejan ningún borde recto en el cielo */
      /* sobre Coruscant la bruma se queda a media altura: si baja hasta el
         borde se traga la plataforma y la ciudad vuelve a flotar */
      [[660, 716, 392], [1080, 716, 392], [1600, 660, 292], [2060, 660, 292], [3400, 716, 392]].forEach(v => {
        s += `<ellipse cx="${v[0]}" cy="${v[1]}" rx="128" ry="${v[2]}" fill="url(#swXvaho)"/>`;
      });
      /* ---------- UNA NAVECITA CRUZANDO EL CIELO, SIN PRISA ---------- */
      s += `<g opacity=".7"><path d="M-22 -7 Q0 -20 24 -7 L34 0 L24 7 Q0 20 -22 7 Z" fill="rgba(214,228,242,.7)"/>
        <circle cx="30" cy="0" r="4" fill="#8ad6ff"/>
        <animateMotion dur="58s" repeatCount="indefinite" rotate="auto" path="M -120 244 Q 1100 158 2200 226 Q 3300 296 4340 196"/></g>`;
      return decoSvg(s, 4200);
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
