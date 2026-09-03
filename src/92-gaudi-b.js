"use strict";
/* ============================================================
   Contenido de GAUDÍ (parte B): historias ramificadas,
   canciones, traductor, mapa de exploración, charla y los
   extras de portada y celebración.
   ============================================================ */

const gaSvg = (inner, vb) => `<svg viewBox="${vb || "0 0 100 100"}" width="100%" height="100%">${inner}</svg>`;

Object.assign(THEMES.gaudi.content, {

  /* ---------- HISTORIAS (ramifican de verdad) ---------- */
  stories: [
    {
      id: "salamandra", emoji: "🦎", start: "n1",
      title: { es: "La salamandra que perdió un azulejo", ca: "La salamandra que va perdre una rajola", en: "The Salamander Who Lost a Tile", cs: "Salamandr, který ztratil kachličku", fr: "La salamandre qui a perdu un carreau" },
      nodes: {
        n1: {
          text: { es: "Esta mañana, en el Park Güell, la salamandra de trencadís está muy apenada: un trocito azul de su lomo se ha despegado y ha rodado escaleras abajo. ¿La ayudamos a encontrarlo, {name}?", ca: "Aquest matí, al Park Güell, la salamandra de trencadís està molt trista: un trosset blau del seu llom s'ha desenganxat i ha rodolat escales avall. L'ajudem a trobar-lo, {name}?", en: "This morning in Park Güell the trencadís salamander is very sad: a little blue piece from her back came loose and rolled down the stairs. Shall we help her find it, {name}?", cs: "Dnes ráno je salamandr z trencadísu v parku Güell moc smutný: modrý střípek z jeho hřbetu se odlepil a skutálel se ze schodů. Pomůžeme mu ho najít, {name}?", fr: "Ce matin, au Park Güell, la salamandre en trencadís est toute triste : un petit morceau bleu de son dos s'est décollé et a roulé en bas de l'escalier. On l'aide à le retrouver, {name} ?" },
          choices: [
            { t: { es: "Buscamos por la escalera", ca: "Busquem per l'escala", en: "We search the staircase", cs: "Hledáme na schodech", fr: "On cherche sur l'escalier" }, go: "n2a" },
            { t: { es: "Preguntamos a las palomas del parque", ca: "Preguntem als coloms del parc", en: "We ask the park pigeons", cs: "Zeptáme se holubů v parku", fr: "On demande aux pigeons du parc" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "Bajáis la escalera mirándolo todo con ojos de lupa. ¡Ahí! Un caminito de purpurina azul cruza la plaza y sube hacia el banco ondulado.", ca: "Baixeu l'escala mirant-ho tot amb ulls de lupa. Allà! Un caminet de purpurina blava travessa la plaça i puja cap al banc ondulat.", en: "You go down the stairs looking at everything with magnifying-glass eyes. There! A little trail of blue glitter crosses the square and climbs towards the wavy bench.", cs: "Scházíte schody a všechno zkoumáte očima jako lupou. Tamhle! Cestička z modrých třpytek vede přes náměstíčko nahoru k vlnité lavičce.", fr: "Vous descendez l'escalier en regardant tout avec des yeux de loupe. Là ! Un petit chemin de paillettes bleues traverse la place et monte vers le banc ondulé." },
          choices: [
            { t: { es: "Miramos debajo del banco", ca: "Mirem sota el banc", en: "We look under the bench", cs: "Podíváme se pod lavičku", fr: "On regarde sous le banc" }, go: "n3a" },
            { t: { es: "Seguimos el brillo hasta la sala de las columnas", ca: "Seguim la lluïssor fins a la sala de les columnes", en: "We follow the sparkle to the hall of columns", cs: "Jdeme za třpytkami do sálu se sloupy", fr: "On suit les paillettes jusqu'à la salle des colonnes" }, go: "n3b" }
          ]
        },
        n2b: {
          text: { es: "Las palomas se ponen firmes como soldaditos: 'Curucú, vimos rodar algo azul hacia la sala de las columnas'. Y os acompañan volando bajito.", ca: "Els coloms es posen ferms com soldadets: 'Curucú, hem vist rodolar una cosa blava cap a la sala de les columnes'. I us acompanyen volant baixet.", en: "The pigeons stand to attention like little soldiers: 'Coo-coo, we saw something blue rolling towards the hall of columns'. And they fly along with you, nice and low.", cs: "Holubi se postaví do pozoru jako vojáčci: 'Vrkú, viděli jsme něco modrého kutálet se k sálu se sloupy'. A letí kousek nad vámi jako doprovod.", fr: "Les pigeons se mettent au garde-à-vous comme des petits soldats : « Rou-cou, on a vu rouler quelque chose de bleu vers la salle des colonnes ». Et ils vous accompagnent en volant tout bas." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n3b" }
          ]
        },
        n3a: {
          text: { es: "Debajo del banco encontráis tesoros perdidos: una canica, una horquilla y un caramelo pegajoso. El trocito no está, pero una hormiga os chiva que un gorrión se lo llevó a la sala de las columnas.", ca: "Sota el banc trobeu tresors perduts: una bala, una agulla de cabell i un caramel enganxós. El trosset no hi és, però una formiga us xiva que un pardal se'l va endur a la sala de les columnes.", en: "Under the bench you find lost treasures: a marble, a hairpin and a sticky sweet. The little piece is not there, but an ant whispers that a sparrow carried it to the hall of columns.", cs: "Pod lavičkou najdete ztracené poklady: kuličku, sponku a lepkavý bonbon. Střípek tam není, ale mravenec vám prozradí, že si ho odnesl vrabec do sálu se sloupy.", fr: "Sous le banc, vous trouvez des trésors perdus : une bille, une barrette et un bonbon tout collant. Le petit morceau n'y est pas, mais une fourmi vous souffle qu'un moineau l'a emporté dans la salle des colonnes." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n3b: {
          text: { es: "En la sala de las columnas vuestros pasos hacen eco: ¡hola, hola, hola! Arriba, entre los soles de trencadís del techo, hay un nido pequeñito. ¡Y dentro brilla algo azul!", ca: "A la sala de les columnes els vostres passos fan eco: hola, hola, hola! A dalt, entre els sols de trencadís del sostre, hi ha un niu petitó. I a dins hi brilla una cosa blava!", en: "In the hall of columns your steps echo: hello, hello, hello! Up above, between the trencadís suns on the ceiling, there is a tiny nest. And something blue sparkles inside!", cs: "V sálu se sloupy se vaše kroky rozléhají: ahoj, ahoj, ahoj! Nahoře, mezi mozaikovými slunci na stropě, je maličké hnízdo. A uvnitř se něco modře třpytí!", fr: "Dans la salle des colonnes, vos pas font écho : bonjour, bonjour, bonjour ! En haut, entre les soleils en trencadís du plafond, il y a un tout petit nid. Et dedans, quelque chose de bleu brille !" },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n4: {
          text: { es: "En el nido, un gorrión abraza el trocito azul: 'Es que brilla como un pedacito de cielo... y hace muy bonito mi nido'. ¿Qué hacemos, {name}?", ca: "Al niu, un pardal abraça el trosset blau: 'És que brilla com un bocinet de cel... i fa molt bonic el meu niu'. Què fem, {name}?", en: "In the nest, a sparrow is hugging the little blue piece: 'It shines like a tiny bit of sky... and it makes my nest so pretty'. What do we do, {name}?", cs: "V hnízdě objímá vrabec modrý střípek: 'On se totiž třpytí jako kousíček nebe... a moc mi zkrášluje hnízdo'. Co uděláme, {name}?", fr: "Dans le nid, un moineau serre le petit morceau bleu : « C'est qu'il brille comme un petit bout de ciel... et il rend mon nid si joli ». Qu'est-ce qu'on fait, {name} ?" },
          choices: [
            { t: { es: "Se lo pedimos con cariño y le ofrecemos un cambio", ca: "L'hi demanem amb carinyo i li oferim un canvi", en: "We ask kindly and offer a swap", cs: "Hezky ho poprosíme a nabídneme výměnu", fr: "On lui demande gentiment et on propose un échange" }, go: "n5a" },
            { t: { es: "Se lo dejamos y buscamos otra solución", ca: "L'hi deixem i busquem una altra solució", en: "We let him keep it and find another way", cs: "Necháme mu ho a vymyslíme něco jiného", fr: "On le lui laisse et on cherche une autre solution" }, go: "n5b" }
          ]
        },
        n5a: {
          text: { es: "Le ofrecéis un botón plateado del bolsillo del robot, que brilla como la luna. El gorrión lo mira, le encanta... ¡y acepta el cambio dando saltitos de contento!", ca: "Li oferiu un botó platejat de la butxaca del robot, que brilla com la lluna. El pardal se'l mira, li encanta... i accepta el canvi fent saltets de content!", en: "You offer him a silver button from the robot's pocket, shiny like the moon. The sparrow looks at it, loves it... and accepts the swap, hopping with joy!", cs: "Nabídnete mu stříbrný knoflík z robotovy kapsy, který se leskne jako měsíc. Vrabec si ho prohlédne, nadchne se... a výměnu přijme, celý poskakuje radostí!", fr: "Vous lui offrez un bouton argenté sorti de la poche du robot, brillant comme la lune. Le moineau le regarde, il l'adore... et il accepte l'échange en sautillant de joie !" },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e1" }
          ]
        },
        n5b: {
          text: { es: "Dejáis el trocito en el nido. El mosaiquista del parque os abre su taller: con una taza rota y mucho cuidado, ¡hacéis un trocito azul nuevo, todavía más bonito!", ca: "Deixeu el trosset al niu. El mosaïcista del parc us obre el seu taller: amb una tassa trencada i molt de compte, feu un trosset blau nou, encara més bonic!", en: "You leave the piece in the nest. The park's mosaic maker opens his workshop for you: with a broken cup and lots of care, you make a brand-new blue piece, even prettier!", cs: "Necháte střípek v hnízdě. Parkový mozaikář vám otevře svou dílnu: z rozbitého hrnečku a s velkou opatrností vyrobíte nový modrý střípek, ještě krásnější!", fr: "Vous laissez le morceau dans le nid. Le mosaïste du parc vous ouvre son atelier : avec une tasse cassée et beaucoup de soin, vous fabriquez un nouveau morceau bleu, encore plus joli !" },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e2" }
          ]
        },
        e1: {
          end: true,
          text: { es: "Volvéis con el trocito y la salamandra vuelve a estar completa. De la alegría, da un coletazo y os salpica de agua fresquita. Pedir las cosas con cariño abre todas las puertas, {name}.", ca: "Torneu amb el trosset i la salamandra torna a estar completa. De l'alegria, fa un cop de cua i us esquitxa d'aigua fresqueta. Demanar les coses amb carinyo obre totes les portes, {name}.", en: "You come back with the piece and the salamander is whole again. She wags her tail with joy and splashes you with cool water. Asking kindly opens every door, {name}.", cs: "Vrátíte se se střípkem a salamandr je zase celý. Radostí švihne ocáskem a postříká vás studenou vodičkou. Hezká prosba otevírá všechny dveře, {name}.", fr: "Vous revenez avec le morceau et la salamandre est de nouveau complète. De joie, elle donne un coup de queue et vous éclabousse d'eau fraîche. Demander gentiment ouvre toutes les portes, {name}." }
        },
        e2: {
          end: true,
          text: { es: "La salamandra estrena su trocito nuevo hecho por vosotros, y el gorrión conserva su pedacito de cielo. ¡Dos felices con un solo azulejo! A veces la mejor solución es inventar una nueva, {name}.", ca: "La salamandra estrena el seu trosset nou fet per vosaltres, i el pardal conserva el seu bocinet de cel. Dos feliços amb una sola rajola! De vegades la millor solució és inventar-ne una de nova, {name}.", en: "The salamander shows off her new piece made by you, and the sparrow keeps his little bit of sky. Two happy friends from one single tile! Sometimes the best solution is to invent a new one, {name}.", cs: "Salamandr se pyšní novým střípkem, který jste vyrobili, a vrabec si nechá svůj kousíček nebe. Dva šťastní z jediné kachličky! Někdy je nejlepším řešením vymyslet úplně nové, {name}.", fr: "La salamandre étrenne son nouveau morceau fait par vous, et le moineau garde son petit bout de ciel. Deux heureux avec un seul carreau ! Parfois, la meilleure solution est d'en inventer une nouvelle, {name}." }
        }
      }
    },
    {
      id: "bosque", emoji: "🌳", start: "n1",
      title: { es: "El bosque de columnas", ca: "El bosc de columnes", en: "The Forest of Columns", cs: "Les ze sloupů", fr: "La forêt de colonnes" },
      nodes: {
        n1: {
          text: { es: "Al caer la tarde, una golondrina os cuela por una ventanita de la Sagrada Família. La luz de las vidrieras os pinta de azul y de verde. De pronto, las columnas susurran: 'Somos árboles de piedra... pero nunca hemos oído un bosque de verdad'.", ca: "Cap al tard, una oreneta us fa entrar per una finestreta de la Sagrada Família. La llum de les vidrieres us pinta de blau i de verd. De sobte, les columnes xiuxiuegen: 'Som arbres de pedra... però mai no hem sentit un bosc de debò'.", en: "At dusk, a swallow sneaks you in through a little window of the Sagrada Família. The light from the stained glass paints you blue and green. Suddenly the columns whisper: 'We are stone trees... but we have never heard a real forest'.", cs: "Za soumraku vás vlaštovka propašuje okénkem do Sagrady Famílie. Světlo z barevných oken vás obarví na modro a zeleno. Najednou sloupy zašeptají: 'Jsme kamenné stromy... ale opravdový les jsme nikdy neslyšely'.", fr: "À la tombée du jour, une hirondelle vous fait entrer par une petite fenêtre de la Sagrada Família. La lumière des vitraux vous peint en bleu et en vert. Soudain, les colonnes chuchotent : « Nous sommes des arbres de pierre... mais nous n'avons jamais entendu une vraie forêt »." },
          choices: [
            { t: { es: "Les hacemos los sonidos del bosque nosotros", ca: "Els fem els sons del bosc nosaltres", en: "We make the forest sounds ourselves", cs: "Zvuky lesa jim předvedeme sami", fr: "On leur fait nous-mêmes les sons de la forêt" }, go: "n2a" },
            { t: { es: "Vamos a buscar sonidos de verdad al parque", ca: "Anem a buscar sons de debò al parc", en: "We go and fetch real sounds from the park", cs: "Dojdeme pro opravdové zvuky do parku", fr: "On va chercher de vrais sons au parc" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "Sopláis como el viento, shhh, y tamborileáis la lluvia con los dedos, plic ploc. Las columnas tiemblan de gusto hasta el techo. '¡Más, más! ¿Qué más suena en un bosque?'", ca: "Bufeu com el vent, xxxt, i tamborilegeu la pluja amb els dits, plic ploc. Les columnes tremolen de gust fins al sostre. 'Més, més! Què més sona en un bosc?'", en: "You blow like the wind, shhh, and drum the rain with your fingers, plip plop. The columns shiver with delight all the way to the ceiling. 'More, more! What else sounds in a forest?'", cs: "Foukáte jako vítr, ššš, a prsty bubnujete déšť, kap kap. Sloupy se blahem chvějí až ke stropu. 'Ještě, ještě! Co dalšího zní v lese?'", fr: "Vous soufflez comme le vent, chhh, et vous tambourinez la pluie avec les doigts, plic ploc. Les colonnes frissonnent de plaisir jusqu'au plafond. « Encore, encore ! Quoi d'autre résonne dans une forêt ? »" },
          choices: [
            { t: { es: "¡El canto de los pájaros!", ca: "El cant dels ocells!", en: "Birdsong!", cs: "Ptačí zpěv!", fr: "Le chant des oiseaux !" }, go: "n3a" },
            { t: { es: "¡El agua del río!", ca: "L'aigua del riu!", en: "The water of the river!", cs: "Voda v řece!", fr: "L'eau de la rivière !" }, go: "n3b" }
          ]
        },
        n2b: {
          text: { es: "Salís de puntillas al parque de noche. El robot abre su cajita de grabar sonidos: cric. Un mirlo canta en una farola y una fuente murmura bajito.", ca: "Sortiu de puntetes al parc de nit. El robot obre la seva capseta de gravar sons: cric. Una merla canta en un fanal i una font murmura fluixet.", en: "You tiptoe out into the park at night. The robot opens his little sound-recording box: click. A blackbird sings on a lamppost and a fountain murmurs softly.", cs: "Po špičkách vyjdete do nočního parku. Robot otevře svou krabičku na nahrávání zvuků: cvak. Na lucerně zpívá kos a fontána tichounce zurčí.", fr: "Vous sortez sur la pointe des pieds dans le parc, la nuit. Le robot ouvre sa petite boîte à enregistrer les sons : clic. Un merle chante sur un lampadaire et une fontaine murmure tout bas." },
          choices: [
            { t: { es: "Volvemos con el canto del mirlo", ca: "Tornem amb el cant de la merla", en: "We go back with the blackbird's song", cs: "Vrátíme se s kosím zpěvem", fr: "On revient avec le chant du merle" }, go: "n3a" },
            { t: { es: "Volvemos con el murmullo de la fuente", ca: "Tornem amb el murmuri de la font", en: "We go back with the fountain's murmur", cs: "Vrátíme se se zurčením fontány", fr: "On revient avec le murmure de la fontaine" }, go: "n3b" }
          ]
        },
        n3a: {
          text: { es: "Cuando suena el canto del pájaro, los reflejos de las vidrieras se despegan de las paredes y vuelan por el techo como pájaros de luz. ¡El bosque de piedra se llena de trinos!", ca: "Quan sona el cant de l'ocell, els reflexos de les vidrieres es desenganxen de les parets i volen pel sostre com ocells de llum. El bosc de pedra s'omple de refilets!", en: "When the birdsong plays, the reflections from the stained glass peel off the walls and fly across the ceiling like birds of light. The stone forest fills with chirping!", cs: "Když zazní ptačí zpěv, odlesky barevných oken se odlepí od stěn a létají po stropě jako světelní ptáci. Kamenný les se naplní štěbetáním!", fr: "Quand le chant de l'oiseau résonne, les reflets des vitraux se décollent des murs et volent au plafond comme des oiseaux de lumière. La forêt de pierre se remplit de gazouillis !" },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n3b: {
          text: { es: "Cuando suena el agua, la luz azul de las vidrieras baja ondulando por el suelo, como un río de colores que pasa entre las columnas. ¡Hasta hay pececitos de luz!", ca: "Quan sona l'aigua, la llum blava de les vidrieres baixa ondulant pel terra, com un riu de colors que passa entre les columnes. Fins i tot hi ha peixets de llum!", en: "When the water sound plays, the blue light from the stained glass ripples down across the floor, like a river of colours flowing between the columns. There are even little fish of light!", cs: "Když zazní voda, modré světlo z oken se rozvlní po podlaze jako barevná řeka, která protéká mezi sloupy. Jsou v ní dokonce světelné rybičky!", fr: "Quand le son de l'eau résonne, la lumière bleue des vitraux descend en ondulant sur le sol, comme une rivière de couleurs qui passe entre les colonnes. Il y a même des petits poissons de lumière !" },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n4: {
          text: { es: "El bosque de columnas despierta del todo: las ramas de piedra se estiran y el techo brilla como copas de árboles al sol. La columna más pequeñita pregunta: '¿Y qué hacemos ahora con tanta alegría?'", ca: "El bosc de columnes es desperta del tot: les branques de pedra s'estiren i el sostre brilla com capçades d'arbres al sol. La columna més petitona pregunta: 'I què fem ara amb tanta alegria?'", en: "The forest of columns wakes up completely: the stone branches stretch and the ceiling glows like treetops in the sun. The tiniest column asks: 'And what do we do now with all this joy?'", cs: "Les ze sloupů se úplně probudí: kamenné větve se protáhnou a strop září jako koruny stromů na slunci. Nejmenší sloupek se zeptá: 'A co teď s tou spoustou radosti uděláme?'", fr: "La forêt de colonnes se réveille tout à fait : les branches de pierre s'étirent et le plafond brille comme des cimes d'arbres au soleil. La plus petite colonne demande : « Et qu'est-ce qu'on fait maintenant de toute cette joie ? »" },
          choices: [
            { t: { es: "La guardamos de regalo para los visitantes de mañana", ca: "La guardem de regal per als visitants de demà", en: "We save it as a gift for tomorrow's visitors", cs: "Schováme ji jako dárek pro zítřejší návštěvníky", fr: "On la garde en cadeau pour les visiteurs de demain" }, go: "n5a" },
            { t: { es: "¡Bailamos todos juntos esta noche!", ca: "Ballem tots junts aquesta nit!", en: "We all dance together tonight!", cs: "Dnes v noci si všichni spolu zatancujeme!", fr: "On danse tous ensemble cette nuit !" }, go: "n5b" }
          ]
        },
        n5a: {
          text: { es: "Escondéis la alegría dentro de los colores de las vidrieras: un trino en el azul, el río en el verde y la risa de {name} en el dorado.", ca: "Amagueu l'alegria dins dels colors de les vidrieres: un refilet al blau, el riu al verd i el riure de {name} al daurat.", en: "You hide the joy inside the colours of the stained glass: a chirp in the blue, the river in the green and {name}'s laugh in the gold.", cs: "Schováte radost do barev oken: štěbetání do modré, řeku do zelené a smích, který patří {name}, do zlaté.", fr: "Vous cachez la joie dans les couleurs des vitraux : un gazouillis dans le bleu, la rivière dans le vert et le rire de {name} dans le doré." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e1" }
          ]
        },
        n5b: {
          text: { es: "Empieza un baile silencioso de luces y sombras. Las columnas se mecen sin moverse, que es como bailan los árboles de piedra, y la golondrina dirige la orquesta.", ca: "Comença un ball silenciós de llums i ombres. Les columnes es gronxen sense moure's, que és com ballen els arbres de pedra, i l'oreneta dirigeix l'orquestra.", en: "A silent dance of lights and shadows begins. The columns sway without moving, which is how stone trees dance, and the swallow conducts the orchestra.", cs: "Začne tichý tanec světel a stínů. Sloupy se houpají, aniž by se pohnuly, protože tak tančí kamenné stromy, a vlaštovka diriguje orchestr.", fr: "Un bal silencieux de lumières et d'ombres commence. Les colonnes se balancent sans bouger, car c'est ainsi que dansent les arbres de pierre, et l'hirondelle dirige l'orchestre." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e2" }
          ]
        },
        e1: {
          end: true,
          text: { es: "Al día siguiente, cada persona que entra siente de repente un bosque en el corazón, y no sabe por qué. Tú sí lo sabes, {name}: los regalos escondidos también cuentan. Y a veces son los mejores.", ca: "L'endemà, cada persona que entra sent de sobte un bosc al cor, i no sap per què. Tu sí que ho saps, {name}: els regals amagats també compten. I de vegades són els millors.", en: "The next day, everyone who walks in suddenly feels a forest in their heart, without knowing why. But you know, {name}: hidden gifts count too. And sometimes they are the best ones.", cs: "Druhý den každý, kdo vejde, najednou ucítí v srdci les a neví proč. Ale ty to víš, {name}: schované dárky se také počítají. A někdy jsou ze všech nejlepší.", fr: "Le lendemain, chaque personne qui entre sent soudain une forêt dans son cœur, sans savoir pourquoi. Mais toi tu le sais, {name} : les cadeaux cachés comptent aussi. Et parfois ce sont les meilleurs." }
        },
        e2: {
          end: true,
          text: { es: "Bailáis hasta que sale el sol y las primeras luces os encuentran bostezando. Las columnas se duermen felices: ya saben cómo suena y cómo baila un bosque de verdad. Gracias a ti, {name}.", ca: "Balleu fins que surt el sol i les primeres llums us troben badallant. Les columnes s'adormen felices: ja saben com sona i com balla un bosc de debò. Gràcies a tu, {name}.", en: "You dance until the sun comes up and the first light finds you yawning. The columns fall asleep happy: now they know how a real forest sounds and dances. Thanks to you, {name}.", cs: "Tancujete, dokud nevyjde slunce, a první paprsky vás najdou zívající. Sloupy šťastně usínají: už vědí, jak opravdový les zní a jak tančí. Díky tobě, {name}.", fr: "Vous dansez jusqu'au lever du soleil et les premières lueurs vous trouvent en train de bâiller. Les colonnes s'endorment heureuses : elles savent maintenant comment sonne et comment danse une vraie forêt. Grâce à toi, {name}." }
        }
      }
    },
    {
      id: "chimeneas", emoji: "🌙", start: "n1",
      title: { es: "Las chimeneas guerreras de noche", ca: "Les xemeneies guerreres de nit", en: "The Warrior Chimneys at Night", cs: "Bojovné komíny v noci", fr: "Les cheminées guerrières la nuit" },
      nodes: {
        n1: {
          text: { es: "Medianoche en la azotea de la Pedrera. Los guerreros de piedra montan guardia bajo las estrellas. El más alto susurra: '{name}, se ha escapado el sueño de una niña de Barcelona. Sin él no podrá dormir bien. ¿Nos ayudas a encontrarlo?'", ca: "Mitjanit al terrat de la Pedrera. Els guerrers de pedra fan guàrdia sota les estrelles. El més alt xiuxiueja: '{name}, s'ha escapat el somni d'una nena de Barcelona. Sense ell no podrà dormir bé. Ens ajudes a trobar-lo?'", en: "Midnight on the rooftop of La Pedrera. The stone warriors stand guard under the stars. The tallest one whispers: '{name}, a little girl's dream has escaped somewhere in Barcelona. Without it she will not sleep well. Will you help us find it?'", cs: "Půlnoc na střeše domu La Pedrera. Kamenní bojovníci drží stráž pod hvězdami. Ten nejvyšší zašeptá: '{name}, jedné holčičce z Barcelony utekl sen. Bez něj se jí nebude dobře spát. Pomůžeš nám ho najít?'", fr: "Minuit sur le toit de La Pedrera. Les guerriers de pierre montent la garde sous les étoiles. Le plus grand chuchote : « {name}, le rêve d'une petite fille de Barcelone s'est échappé. Sans lui, elle ne pourra pas bien dormir. Tu nous aides à le retrouver ? »" },
          choices: [
            { t: { es: "Lo buscamos por el cielo", ca: "El busquem pel cel", en: "We search the sky", cs: "Hledáme na obloze", fr: "On le cherche dans le ciel" }, go: "n2a" },
            { t: { es: "Lo buscamos por la azotea ondulada", ca: "El busquem pel terrat ondulat", en: "We search the wavy rooftop", cs: "Hledáme na zvlněné střeše", fr: "On le cherche sur le toit ondulé" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "Preguntáis a la Luna, que lo ve todo. 'Algo pequeñito y brillante ha bajado volando hacia el tejado del dragón', dice señalando la Casa Batlló.", ca: "Pregunteu a la Lluna, que ho veu tot. 'Una cosa petitona i brillant ha baixat volant cap a la teulada del drac', diu assenyalant la Casa Batlló.", en: "You ask the Moon, who sees everything. 'Something tiny and shiny flew down towards the dragon's roof', she says, pointing at Casa Batlló.", cs: "Zeptáte se Měsíce, který vidí všechno. 'Něco maličkého a třpytivého sletělo dolů k dračí střeše', řekne a ukáže na Casa Batlló.", fr: "Vous demandez à la Lune, qui voit tout. « Quelque chose de tout petit et de brillant est descendu en volant vers le toit du dragon », dit-elle en montrant la Casa Batlló." },
          choices: [
            { t: { es: "Bajamos en línea recta, ¡rápido!", ca: "Baixem en línia recta, ràpid!", en: "We go straight down, quick!", cs: "Slezeme rovnou dolů, rychle!", fr: "On descend tout droit, vite !" }, go: "n3a" },
            { t: { es: "Pedimos a las golondrinas que nos lleven", ca: "Demanem a les orenetes que ens hi portin", en: "We ask the swallows to carry us", cs: "Poprosíme vlaštovky, aby nás odnesly", fr: "On demande aux hirondelles de nous porter" }, go: "n3b" }
          ]
        },
        n2b: {
          text: { es: "Entre los arcos de la azotea encontráis un caminito de polvo brillante que baja hacia el desván. ¡El sueño ha pasado por aquí!", ca: "Entre els arcs del terrat trobeu un caminet de pols brillant que baixa cap a les golfes. El somni ha passat per aquí!", en: "Between the rooftop arches you find a little trail of glowing dust going down to the attic. The dream came this way!", cs: "Mezi oblouky na střeše najdete cestičku ze zářivého prachu, která vede dolů na půdu. Sen šel tudy!", fr: "Entre les arcs du toit, vous trouvez un petit chemin de poussière brillante qui descend vers le grenier. Le rêve est passé par ici !" },
          choices: [
            { t: { es: "Seguimos las huellas por el desván de los arcos", ca: "Seguim les petjades per les golfes dels arcs", en: "We follow the trail through the attic of arches", cs: "Jdeme po stopách půdou plnou oblouků", fr: "On suit les traces par le grenier aux arcs" }, go: "n3b" },
            { t: { es: "Nos asomamos a mirar los tejados", ca: "Ens aboquem a mirar les teulades", en: "We peek out at the rooftops", cs: "Vykoukneme na střechy", fr: "On se penche pour regarder les toits" }, go: "n3a" }
          ]
        },
        n3a: {
          text: { es: "Desde arriba veis brillar algo entre las escamas del tejado de la Casa Batlló. Saltáis de azotea en azotea, con cuidadito, hasta llegar al lomo del dragón.", ca: "Des de dalt veieu brillar una cosa entre les escates de la teulada de la Casa Batlló. Salteu de terrat en terrat, amb comptet, fins a arribar al llom del drac.", en: "From up high you see something shining between the scales of Casa Batlló's roof. You hop carefully from rooftop to rooftop until you reach the dragon's back.", cs: "Shora vidíte, jak se mezi šupinami střechy Casa Batlló něco leskne. Opatrně skáčete ze střechy na střechu, až se dostanete na dračí hřbet.", fr: "De là-haut, vous voyez briller quelque chose entre les écailles du toit de la Casa Batlló. Vous sautez de toit en toit, tout doucement, jusqu'au dos du dragon." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n3b: {
          text: { es: "Cruzáis el desván de la Pedrera, con sus arcos como costillas de dragón, y al salir las golondrinas os llevan volando hasta el tejado de escamas de la Casa Batlló.", ca: "Travesseu les golfes de la Pedrera, amb els seus arcs com costelles de drac, i en sortir les orenetes us porten volant fins a la teulada d'escates de la Casa Batlló.", en: "You cross the attic of La Pedrera, with its arches like dragon ribs, and outside the swallows fly you to the scaly roof of Casa Batlló.", cs: "Projdete půdou domu La Pedrera s oblouky jako dračí žebra, a venku vás vlaštovky odnesou na šupinatou střechu Casa Batlló.", fr: "Vous traversez le grenier de La Pedrera, avec ses arcs comme des côtes de dragon, et dehors les hirondelles vous portent jusqu'au toit d'écailles de la Casa Batlló." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n4: {
          text: { es: "Allí está: un sueño chiquitín, acurrucado entre dos escamas, temblando. Es el sueño de volar de una niña. 'Tengo miedo de que me olvide', dice bajito. ¿Qué hacemos, {name}?", ca: "Allà és: un somni petitó, arraulit entre dues escates, tremolant. És el somni de volar d'una nena. 'Tinc por que m'oblidi', diu fluixet. Què fem, {name}?", en: "There it is: a tiny dream, curled up between two scales, trembling. It is a little girl's dream of flying. 'I am afraid she will forget me', it says softly. What do we do, {name}?", cs: "Tady je: malinký sen, schoulený mezi dvěma šupinami, celý se třese. Je to sen jedné holčičky o létání. 'Bojím se, že na mě zapomene', říká tichounce. Co uděláme, {name}?", fr: "Le voilà : un rêve tout petit, blotti entre deux écailles, tout tremblant. C'est le rêve de voler d'une petite fille. « J'ai peur qu'elle m'oublie », dit-il tout bas. Qu'est-ce qu'on fait, {name} ?" },
          choices: [
            { t: { es: "Lo llevamos volando de vuelta, con mucho cuidado", ca: "El portem volant de tornada, amb molt de compte", en: "We fly it back home, very carefully", cs: "Opatrně ho odneseme zpátky", fr: "On le ramène en volant, très doucement" }, go: "n5a" },
            { t: { es: "Le enseñamos antes la ciudad, para que pierda el miedo", ca: "Abans li ensenyem la ciutat, perquè perdi la por", en: "First we show it the city, so it loses its fear", cs: "Nejdřív mu ukážeme město, aby se přestal bát", fr: "On lui montre d'abord la ville, pour qu'il n'ait plus peur" }, go: "n5b" }
          ]
        },
        n5a: {
          text: { es: "El guerrero jefe enciende un caminito de farolas solo para vosotros. Cruzáis los tejados de Barcelona con el sueño calentito entre las manos del robot.", ca: "El guerrer cap encén un caminet de fanals només per a vosaltres. Travesseu les teulades de Barcelona amb el somni calentó entre les mans del robot.", en: "The chief warrior lights a little path of streetlamps just for you. You cross the rooftops of Barcelona with the dream warm and safe in the robot's hands.", cs: "Velitel bojovníků rozsvítí cestičku z luceren jen pro vás. Přecházíte střechy Barcelony a sen hřeje robota v dlaních.", fr: "Le chef des guerriers allume un petit chemin de lampadaires rien que pour vous. Vous traversez les toits de Barcelone avec le rêve bien au chaud dans les mains du robot." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e1" }
          ]
        },
        n5b: {
          text: { es: "Paseáis por los tejados: el dragón de escamas, las torres de la Sagrada Família, el mar allá al fondo. El sueño mira, se ríe... ¡y crece de puro valiente!", ca: "Passegeu per les teulades: el drac d'escates, les torres de la Sagrada Família, el mar allà al fons. El somni mira, riu... i creix de pur valent!", en: "You stroll across the rooftops: the scaly dragon, the towers of the Sagrada Família, the sea far away. The dream looks, laughs... and grows from sheer bravery!", cs: "Procházíte se po střechách: šupinatý drak, věže Sagrady Famílie, v dálce moře. Sen se dívá, směje se... a samou odvahou roste!", fr: "Vous vous promenez sur les toits : le dragon d'écailles, les tours de la Sagrada Família, la mer tout au fond. Le rêve regarde, il rit... et il grandit à force de courage !" },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e2" }
          ]
        },
        e1: {
          end: true,
          text: { es: "El sueño entra por la ventana y se acurruca con su niña, que sonríe dormida. Los guerreros golpean suavemente sus escudos: ton, ton. Misión cumplida, {name}: los sueños de la ciudad están a salvo.", ca: "El somni entra per la finestra i s'arrauleix amb la seva nena, que somriu adormida. Els guerrers piquen suaument els seus escuts: ton, ton. Missió complerta, {name}: els somnis de la ciutat estan fora de perill.", en: "The dream slips in through the window and snuggles up with its little girl, who smiles in her sleep. The warriors gently tap their shields: tom, tom. Mission accomplished, {name}: the city's dreams are safe.", cs: "Sen vklouzne oknem dovnitř a přitulí se ke své holčičce, která se ve spánku usměje. Bojovníci jemně ťuknou do svých štítů: tum, tum. Mise splněna, {name}: sny města jsou v bezpečí.", fr: "Le rêve entre par la fenêtre et se blottit contre sa petite fille, qui sourit en dormant. Les guerriers tapent doucement sur leurs boucliers : tom, tom. Mission accomplie, {name} : les rêves de la ville sont en sécurité." }
        },
        e2: {
          end: true,
          text: { es: "El sueño vuelve a casa tan valiente que esa noche la niña sueña que vuela sobre toda Barcelona. Y desde entonces, los guerreros os guardan un sitio en la azotea para la próxima aventura, {name}.", ca: "El somni torna a casa tan valent que aquella nit la nena somia que vola sobre tota Barcelona. I des de llavors, els guerrers us guarden un lloc al terrat per a la propera aventura, {name}.", en: "The dream goes home so brave that this very night the girl dreams she is flying over all of Barcelona. And ever since, the warriors keep a spot for you on the rooftop for the next adventure, {name}.", cs: "Sen se vrátí domů tak statečný, že se holčičce tu noc zdá, jak létá nad celou Barcelonou. A od té doby vám bojovníci drží na střeše místo pro další dobrodružství, {name}.", fr: "Le rêve rentre si courageux que cette nuit-là, la petite fille rêve qu'elle vole au-dessus de toute Barcelone. Et depuis, les guerriers vous gardent une place sur le toit pour la prochaine aventure, {name}." }
        }
      }
    }
  ],

  /* ---------- KARAOKE ---------- */
  songs: [
    { emoji: "🔷",
      title: { es: "La canción del trencadís", ca: "La cançó del trencadís", en: "The Trencadís Song", cs: "Písnička o trencadísu", fr: "La chanson du trencadís" },
      lines: [
        { es: "Un platito se rompió, ¡catacrac!,", ca: "Un platet s'ha trencat, catacrac!,", en: "A little plate went crash one day,", cs: "Talířek se rozbil, křach,", fr: "Une assiette s'est cassée, cric crac," },
        { es: "mil trocitos de color, clic y clac.", ca: "mil trossets de colors, clic i clac.", en: "a thousand pieces want to play.", cs: "tisíc střípků, žádný strach!", fr: "mille morceaux font clic et clac." },
        { es: "No los tires, ven aquí,", ca: "No els llencis, vine aquí,", en: "Don't throw them out, come here with me,", cs: "Nevyhazuj je, pojď si hrát,", fr: "Ne les jette pas, viens par ici," },
        { es: "que jugamos a construir.", ca: "que juguem a construir.", en: "we'll build the prettiest thing you'll see.", cs: "mozaiku budem skládat.", fr: "on va construire, quel joli défi !" },
        { es: "Trocito a trocito, un dragón,", ca: "Trosset a trosset, un dragó,", en: "Piece by piece, a dragon grows,", cs: "Střípek ke střípku, vznikne drak,", fr: "Morceau par morceau, un dragon," },
        { es: "trocito a trocito, ¡qué ilusión!", ca: "trosset a trosset, quina il·lusió!", en: "piece by piece, how bright it glows!", cs: "barevný jak duha, přesně tak!", fr: "morceau par morceau, quel frisson !" },
        { es: "Lo roto también puede brillar:", ca: "El que es trenca pot brillar:", en: "Broken things can shine brand new:", cs: "I rozbitá věc může se skvět:", fr: "Ce qui est cassé peut briller :" },
        { es: "¡trencadís para decorar!", ca: "trencadís per decorar!", en: "trencadís for me and you!", cs: "trencadís rozzáří celý svět!", fr: "le trencadís va tout décorer !" }
      ] },
    { emoji: "🌙",
      title: { es: "La nana de las torres", ca: "La cançó de bressol de les torres", en: "The Towers' Lullaby", cs: "Ukolébavka věží", fr: "La berceuse des tours" },
      lines: [
        { es: "Duerme, {name}, duérmete ya,", ca: "Dorm, {name}, adorm-te ja,", en: "Sleep now, {name}, close your eyes,", cs: "Hajej, dadej, {name}, spi,", fr: "Dors, {name}, ferme les yeux," },
        { es: "que las torres velando están.", ca: "que les torres vetllant estan.", en: "the towers watch you from the skies.", cs: "vysoké věže hlídají tvé sny.", fr: "les tours veillent dans les cieux." },
        { es: "Brilla la estrella de doce puntas,", ca: "Brilla l'estrella de dotze puntes,", en: "The star of twelve points shines so bright,", cs: "Dvanácticípá hvězda září,", fr: "L'étoile aux douze pointes brille," },
        { es: "las campanas sueñan todas juntas.", ca: "les campanes somien juntes.", en: "the bells are dreaming through the night.", cs: "zvony sní se šťastnou tváří.", fr: "les cloches rêvent, la nuit scintille." },
        { es: "Piedra a piedra, sin ningún ruido,", ca: "Pedra a pedra, sense presses,", en: "Stone by stone, without a sound,", cs: "Kámen ke kameni, potichoučku,", fr: "Pierre après pierre, sans un bruit," },
        { es: "crece la torre como un nido.", ca: "creixen torres i promeses.", en: "the towers grow up from the ground.", cs: "roste věž jak po obloučku.", fr: "la tour grandit dans la nuit." },
        { es: "Y cuando salga el sol otra vez,", ca: "I quan surti el sol demà,", en: "And when the sun comes out to play,", cs: "Ráno, až se probudíš,", fr: "Et quand le soleil reviendra," },
        { es: "habrán crecido un poquito, ya ves.", ca: "hauran crescut un pam més enllà.", en: "they will have grown a bit today.", cs: "budou věže o kousek výš.", fr: "elle aura grandi d'un petit pas." }
      ] },
    { emoji: "🦎",
      title: { es: "El baile de la salamandra", ca: "El ball de la salamandra", en: "The Salamander Dance", cs: "Salamandří tanec", fr: "La danse de la salamandre" },
      lines: [
        { es: "En la escalera del Park Güell,", ca: "A l'escala del Park Güell,", en: "On the staircase of Park Güell,", cs: "V parku Güell na schodech,", fr: "Sur l'escalier du Park Güell," },
        { es: "vive una amiga de mil colores en la piel.", ca: "hi viu una amiga amb mil colors a la pell.", en: "lives a friend who wears a colourful shell.", cs: "bydlí kamarádka v barvách všech.", fr: "vit une amie aux mille couleurs, si belle." },
        { es: "Mueve la cola, ¡chas, chas, chas!,", ca: "Mou la cua, clac, clac, clac!,", en: "She wags her tail, swish, swish, swish,", cs: "Vrtí ocáskem sem a tam,", fr: "Elle remue la queue, flic, flac, flic," },
        { es: "echa agua por la boca, ¡splash, splash, splash!", ca: "treu aigua per la boca, xac, xac, xac!", en: "she spouts out water with a splish, splish, splish!", cs: "vodu stříká všem i nám.", fr: "elle crache de l'eau, splash, splash, splic !" },
        { es: "Baila la salamandra, baila sin parar,", ca: "Balla la salamandra, balla sense parar,", en: "Dance, little salamander, dance and shine,", cs: "Tancuje salamandra, tancuje v dál,", fr: "Danse, salamandre, danse sans t'arrêter," },
        { es: "todos los trocitos se ponen a brillar.", ca: "tots els trossets es posen a brillar.", en: "all the little pieces sparkle in a line.", cs: "každý střípek svítí jako bál.", fr: "tous les petits morceaux se mettent à briller." },
        { es: "Si pasas por su lado, la puedes saludar:", ca: "Si passes pel seu costat, la pots saludar:", en: "If you walk beside her, give a friendly wave:", cs: "Když půjdeš kolem, pozdrav ji hned:", fr: "Si tu passes à côté, tu peux la saluer :" },
        { es: "hola, salamandra, ¡vamos a bailar!", ca: "hola, salamandra, anem a ballar!", en: "hello, salamander, let's dance and be brave!", cs: "ahoj, salamandro, roztančíme svět!", fr: "bonjour, salamandre, viens donc danser !" }
      ] }
  ],

  /* ---------- TRADUCTOR ---------- */
  translator: {
    words: [
      W_COMMON.hola,
      W_COMMON.adios,
      W_COMMON.amigo,
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
      W_COMMON.dormir,
      { k: "flor", emoji: "🌼", name: { es: "flor", ca: "flor", en: "flower", cs: "květina", fr: "fleur" } },
      { k: "color", emoji: "🎨", name: { es: "color", ca: "color", en: "colour", cs: "barva", fr: "couleur" } },
      { k: "dragon", emoji: "🐉", name: { es: "dragón", ca: "drac", en: "dragon", cs: "drak", fr: "dragon" } },
      { k: "mosaico", emoji: "🔷", name: { es: "mosaico", ca: "mosaic", en: "mosaic", cs: "mozaika", fr: "mosaïque" } },
      { k: "torre", emoji: "🗼", name: { es: "torre", ca: "torre", en: "tower", cs: "věž", fr: "tour" } }
    ],
    langs: [
      { id: "trencadis", emoji: "🔷",
        name: { es: "Trencadís", ca: "Trencadís", en: "Trencadís", cs: "Trencadís", fr: "Trencadís" },
        greeting: { es: "¡Ho-la-la! El idioma trencadís habla a trocitos, como el mosaico.", ca: "Ho-la-la! L'idioma trencadís parla a trossets, com el mosaic.", en: "Ho-la-la! The Trencadís language speaks in little pieces, just like the mosaic.", cs: "Ho-la-la! Jazyk trencadís mluví po střípcích, stejně jako mozaika.", fr: "Ho-la-la ! La langue trencadís parle en petits morceaux, comme la mosaïque." },
        dict: { hola: "ho-la-la", adios: "a-diós-ito", amigo: "a-mi-gui-to", robot: "ro-bo-ti-to", mama: "ma-ma-mi-ta", papa: "pa-pa-pi-to", casa: "ca-si-ta-ta", agua: "a-gua-gua", comida: "ño-mi-ñam", perro: "gua-gua-uf", gato: "mi-au-mi-to", grande: "gran-do-te", pequeno: "chi-qui-tín", bonito: "bo-ni-tín", amor: "a-mor-ci-to", gracias: "gra-ci-tas", si: "sí-sí", no: "no-no-nó", dormir: "dor-mi-lón", flor: "flo-re-ci-ta", color: "co-lo-rín", dragon: "dra-gon-ci-to", mosaico: "mo-sai-qui-to", torre: "to-rre-ci-ta" } },
      { id: "dracpark", emoji: "🐉",
        name: { es: "Dragón del Park Güell", ca: "Drac del Park Güell", en: "Park Güell Dragon", cs: "Drak z parku Güell", fr: "Dragon du Park Güell" },
        greeting: { es: "¡Grrrola! Así saluda el dragón del parque, con un rugido amistoso.", ca: "Grrrola! Així saluda el drac del parc, amb un rugit amistós.", en: "Grrrola! That is how the park dragon says hello, with a friendly roar.", cs: "Grrróla! Tak zdraví drak z parku, přátelským zavrčením.", fr: "Grrrola ! C'est comme ça que le dragon du parc dit bonjour, avec un rugissement amical." },
        dict: { hola: "grrola", adios: "grradiós", amigo: "grramic", robot: "grrobot", mama: "grrmami", papa: "grrpapi", casa: "grruta", agua: "grrgluc", comida: "grrñam", perro: "grrguau", gato: "grrmiau", grande: "grrandote", pequeno: "grrikitín", bonito: "grrbonic", amor: "grramor", gracias: "grracias", si: "grrsí", no: "grrno", dormir: "grr-zzz", flor: "grrflor", color: "grrcolorín", dragon: "grrmano", mosaico: "grrencadís", torre: "grrtorre" } },
      { id: "campanes", emoji: "🔔",
        name: { es: "Campanés", ca: "Campanès", en: "Bellish", cs: "Zvonština", fr: "Carillonais" },
        greeting: { es: "¡Talán! Las campanas de la Sagrada Família saludan desde lo alto de las torres.", ca: "Talán! Les campanes de la Sagrada Família saluden des de dalt de les torres.", en: "Talán! The bells of the Sagrada Família say hello from high up in the towers.", cs: "Talán! Zvony Sagrady Famílie zdraví z výšky věží.", fr: "Talán ! Les cloches de la Sagrada Família saluent du haut des tours." },
        dict: { hola: "talán", adios: "tolón-tolón", amigo: "tin-tin", robot: "tin-talín", mama: "tan-tana", papa: "tan-tano", casa: "tolón", agua: "tilín-glin", comida: "ñam-talán", perro: "talán-guau", gato: "tilín-miau", grande: "TALÁN", pequeno: "tilín", bonito: "tilín-tilín", amor: "talán-tin-tan", gracias: "tolón-tilín", si: "tin", no: "ton", dormir: "tooo-lóón", flor: "tilín-flo", color: "tin-tan-tín", dragon: "talán-grrr", mosaico: "tin-tin-tin-tin", torre: "talán-talán" } },
      { id: "gargola", emoji: "🐸",
        name: { es: "Gárgola", ca: "Gàrgola", en: "Gargoylish", cs: "Chrličtina", fr: "Gargouillais" },
        greeting: { es: "Glup, glup... las gárgolas de los tejados hablan con burbujas de agua de lluvia.", ca: "Glup, glup... les gàrgoles de les teulades parlen amb bombolles d'aigua de pluja.", en: "Glup, glup... the rooftop gargoyles speak in rainwater bubbles.", cs: "Glup, glup... chrliče na střechách mluví bublinkami dešťové vody.", fr: "Glup, glup... les gargouilles des toits parlent avec des bulles d'eau de pluie." },
        dict: { hola: "glup", adios: "gluuup", amigo: "glumigo", robot: "globot", mama: "glumama", papa: "glupapa", casa: "glucasa", agua: "glup-glup-glup", comida: "glumñam", perro: "gluguau", gato: "glumiau", grande: "gluuuuup", pequeno: "glip", bonito: "glunito", amor: "glumor", gracias: "glucias", si: "glupsí", no: "glupno", dormir: "gluzzz", flor: "gluflor", color: "glucolor", dragon: "gludragón", mosaico: "glumosaico", torre: "glutorre" } }
    ]
  },

  /* ---------- MAPA DE EXPLORACIÓN ---------- */
  explore: {
    width: 4200, height: 1100, stars: false,
    bgCss: "radial-gradient(ellipse 34% 26% at 78% 9%, rgba(255,248,225,.5), transparent), linear-gradient(180deg,#57b4e6 0%,#8ed3f2 22%,#bfe6f7 38%,#e8f2f0 46%,#ffe9c4 58%,#e6d3a4 76%,#c9b585 100%)",
    cats: [
      { id: "parkguell", emoji: "🦎", x: 120, name: { es: "Park Güell", ca: "Park Güell", en: "Park Güell", cs: "Park Güell", fr: "Park Güell" } },
      { id: "sagrada", emoji: "🏰", x: 1500, name: { es: "Sagrada Família", ca: "Sagrada Família", en: "Sagrada Família", cs: "Sagrada Família", fr: "Sagrada Família" } },
      { id: "casas", emoji: "🏠", x: 2880, name: { es: "Las casas de Gaudí", ca: "Les cases de Gaudí", en: "Gaudí's houses", cs: "Gaudího domy", fr: "Les maisons de Gaudí" } }
    ],
    pois: [
      { cat: "parkguell", emoji: "🦎", x: 220, y: 700, size: 2, iw: 120, ih: 72,
        svg: gaSvg(`
          <path d="M96 30 Q112 24 120 32 Q124 40 114 44 Q104 46 98 42 Q84 56 62 58 Q66 66 76 70 L66 76 Q56 72 52 62 Q40 62 30 58 Q30 68 24 74 L16 68 Q22 62 22 54 Q10 48 8 36 Q16 42 28 44 Q52 50 72 42 Q82 36 96 30 Z" fill="#7cb342"/>
          <path d="M8 36 Q0 30 2 20 Q10 26 14 32 Z" fill="#7cb342"/>
          ${[[36, 46, "#42a5f5"], [50, 50, "#ffca28"], [64, 48, "#ef5350"], [78, 40, "#ab47bc"], [92, 34, "#26c6da"], [46, 42, "#ff7043"], [60, 54, "#66bb6a"], [72, 50, "#f8bbd0"]].map(m => `<rect x="${m[0]}" y="${m[1]}" width="7" height="6" rx="1.4" fill="${m[2]}" transform="rotate(${(m[0] * 7) % 40 - 20} ${m[0] + 3} ${m[1] + 3})"/>`).join("")}
          <circle cx="112" cy="34" r="3" fill="#1b3a10"/><circle cx="113" cy="33" r="1" fill="#fff"/>
          <path d="M122 38 Q132 40 136 48 M122 38 Q130 44 132 52" stroke="#4fc3f7" stroke-width="2.6" fill="none" stroke-linecap="round"/>
          <circle cx="137" cy="52" r="2.2" fill="#4fc3f7"/><circle cx="132" cy="56" r="1.8" fill="#4fc3f7"/>`, "0 0 140 80"),
        name: { es: "La salamandra de trencadís", ca: "La salamandra de trencadís", en: "The trencadís salamander", cs: "Salamandr z trencadísu", fr: "La salamandre en trencadís" },
        fact: { es: "La estrella del parque: está cubierta de trocitos de cerámica de colores y es una fuente. ¡El agua le sale por la boca!", ca: "L'estrella del parc: està coberta de trossets de ceràmica de colors i és una font. L'aigua li surt per la boca!", en: "The star of the park: it is covered in little pieces of colourful ceramic and it is a fountain. Water comes out of its mouth!", cs: "Hvězda parku: je pokrytý střípky barevné keramiky a je to fontána. Voda mu teče z pusy!", fr: "La star du parc : elle est couverte de petits morceaux de céramique colorée et c'est une fontaine. L'eau sort par sa bouche !" } },
      { cat: "parkguell", emoji: "🪑", x: 470, y: 520, iw: 110, ih: 46,
        svg: gaSvg(`
          <path d="M4 26 Q16 12 30 22 Q44 32 56 20 Q70 8 84 20 Q98 30 112 20 L112 34 Q98 44 84 34 Q70 24 56 34 Q44 44 30 36 Q16 28 4 40 Z" fill="#f4efe2"/>
          ${[[12, 26, "#42a5f5"], [26, 26, "#ef5350"], [40, 30, "#ffca28"], [54, 26, "#26c6da"], [68, 20, "#ab47bc"], [82, 24, "#66bb6a"], [96, 28, "#ff7043"], [106, 24, "#f06292"]].map(m => `<circle cx="${m[0]}" cy="${m[1]}" r="3" fill="${m[2]}"/>`).join("")}
          <path d="M6 40 L6 48 M40 38 L40 48 M76 36 L76 48 M110 34 L110 48" stroke="#d8cfb6" stroke-width="4" stroke-linecap="round"/>`, "0 0 116 52"),
        name: { es: "El banco ondulado", ca: "El banc ondulat", en: "The wavy bench", cs: "Vlnitá lavička", fr: "Le banc ondulé" },
        fact: { es: "Un banco larguísimo que serpentea como una ola. Jujol lo decoró con trencadís, y cada trocito cuenta un color.", ca: "Un banc llarguíssim que serpenteja com una onada. Jujol el va decorar amb trencadís, i cada trosset explica un color.", en: "A super long bench that winds like a wave. Jujol decorated it with trencadís, and every little piece tells a colour.", cs: "Předlouhá lavička, která se vlní jako vlna. Jujol ji vyzdobil trencadísem a každý střípek vypráví o jedné barvě.", fr: "Un banc très long qui serpente comme une vague. Jujol l'a décoré de trencadís, et chaque petit morceau raconte une couleur." } },
      { cat: "parkguell", emoji: "🏛️", x: 720, y: 800, iw: 92, ih: 70,
        svg: gaSvg(`
          <rect x="4" y="6" width="92" height="12" rx="5" fill="#e8dfc6"/>
          <circle cx="24" cy="12" r="6" fill="#ffca28"/><path d="M24 12 m-6 0 l-4 0 M24 12 m6 0 l4 0 M24 6 l0 -4 M24 18 l0 4" stroke="#ef5350" stroke-width="2"/>
          <circle cx="72" cy="12" r="6" fill="#26c6da"/><path d="M72 12 m-6 0 l-4 0 M72 12 m6 0 l4 0 M72 6 l0 -4 M72 18 l0 4" stroke="#ab47bc" stroke-width="2"/>
          ${[14, 36, 58, 80].map(x => `<path d="M${x} 18 L${x + 8} 18 L${x + 7} 62 L${x + 1} 62 Z" fill="#d9cfb2"/><rect x="${x - 1}" y="60" width="10" height="5" rx="2" fill="#c4b894"/>`).join("")}
          <rect x="0" y="65" width="100" height="6" rx="3" fill="#b3a67f"/>`, "0 0 100 74"),
        name: { es: "La sala de las columnas", ca: "La sala de les columnes", en: "The hall of columns", cs: "Sál se sloupy", fr: "La salle des colonnes" },
        fact: { es: "Tiene 86 columnas e iba a ser el mercado del barrio. En el techo brillan soles de trencadís.", ca: "Té 86 columnes i havia de ser el mercat del barri. Al sostre hi brillen sols de trencadís.", en: "It has 86 columns and was going to be the neighbourhood market. Trencadís suns shine on its ceiling.", cs: "Má 86 sloupů a měl to být trh pro celou čtvrť. Na stropě září mozaiková slunce.", fr: "Elle a 86 colonnes et devait être le marché du quartier. Des soleils en trencadís brillent au plafond." } },
      { cat: "parkguell", emoji: "🍄", x: 970, y: 560, iw: 82, ih: 92,
        svg: gaSvg(`
          <rect x="18" y="46" width="54" height="44" rx="8" fill="#f2e3c4"/>
          <path d="M12 50 Q26 24 45 22 Q64 24 78 50 Q60 42 45 42 Q30 42 12 50 Z" fill="#a8764a"/>
          <path d="M18 44 Q30 36 45 36 Q60 36 72 44" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"/>
          ${[[26, 32, "#fff"], [40, 28, "#eceff1"], [56, 30, "#fff"], [66, 38, "#eceff1"]].map(m => `<circle cx="${m[0]}" cy="${m[1]}" r="3.4" fill="${m[2]}"/>`).join("")}
          <rect x="58" y="8" width="12" height="26" rx="5" fill="#f2e3c4"/>
          <g stroke="#6d4c41" stroke-width="2.4" stroke-linecap="round"><line x1="64" y1="0" x2="64" y2="10"/><line x1="60" y1="4" x2="68" y2="4"/><line x1="61" y1="1.5" x2="67" y2="6.5"/><line x1="67" y1="1.5" x2="61" y2="6.5"/></g>
          <path d="M32 90 L32 68 Q39 58 46 68 L46 90 Z" fill="#7a5230"/>
          <circle cx="58" cy="64" r="5" fill="#9fd8ef" stroke="#fff" stroke-width="1.6"/>
          <path d="M20 56 Q26 52 30 56 M62 52 Q68 48 72 52" stroke="#d9c9a3" stroke-width="2.4" fill="none"/>`, "0 0 90 96"),
        name: { es: "La casita de cuento de la entrada", ca: "La caseta de conte de l'entrada", en: "The fairy-tale house at the entrance", cs: "Pohádkový domek u vchodu", fr: "La maisonnette de conte de l'entrée" },
        fact: { es: "Los pabellones de la entrada parecen casitas de cuento, con tejados ondulados de trencadís y una torre con la cruz de cuatro brazos.", ca: "Els pavellons de l'entrada semblen casetes de conte, amb teulades ondulades de trencadís i una torre amb la creu de quatre braços.", en: "The entrance pavilions look like fairy-tale cottages, with wavy trencadís roofs and a tower topped by the four-armed cross.", cs: "Domky u vchodu vypadají jako z pohádky: mají vlnité mozaikové střechy a věžičku s křížem o čtyřech ramenech.", fr: "Les pavillons de l'entrée ressemblent à des maisonnettes de conte, avec des toits ondulés en trencadís et une tour à la croix à quatre bras." } },
      { cat: "parkguell", emoji: "⛰️", x: 1220, y: 390, iw: 80, ih: 70,
        svg: gaSvg(`
          <path d="M6 66 Q20 40 44 38 Q68 40 82 66 Z" fill="#c9a06a"/>
          <ellipse cx="30" cy="58" rx="10" ry="6" fill="#b3894f"/><ellipse cx="56" cy="60" rx="12" ry="7" fill="#b3894f"/>
          <g stroke="#8a6a3c" stroke-width="4" stroke-linecap="round">
            <line x1="44" y1="10" x2="44" y2="38"/><line x1="36" y1="18" x2="52" y2="18"/>
            <line x1="22" y1="24" x2="22" y2="44"/><line x1="16" y1="30" x2="28" y2="30"/>
            <line x1="66" y1="24" x2="66" y2="44"/><line x1="60" y1="30" x2="72" y2="30"/>
          </g>
          <circle cx="70" cy="12" r="7" fill="#ffe082"/>`, "0 0 88 72"),
        name: { es: "El mirador de las tres cruces", ca: "El mirador de les tres creus", en: "The three crosses viewpoint", cs: "Vyhlídka tří křížů", fr: "Le belvédère des trois croix" },
        fact: { es: "Es el punto más alto del parque. Desde aquí se ve toda Barcelona y el mar. ¡Y el atardecer es de campeonato!", ca: "És el punt més alt del parc. Des d'aquí es veu tota Barcelona i el mar. I el capvespre és de campionat!", en: "It is the highest point of the park. From here you can see all of Barcelona and the sea. And the sunset is world-class!", cs: "Je to nejvyšší místo parku. Odsud je vidět celá Barcelona i moře. A západ slunce je tu mistrovský!", fr: "C'est le point le plus haut du parc. D'ici, on voit tout Barcelone et la mer. Et le coucher de soleil est champion !" } },
      { cat: "sagrada", emoji: "🏰", x: 1600, y: 470, size: 2, iw: 110, ih: 140,
        svg: gaSvg(`
          ${[[10, 46], [40, 16], [70, 30]].map((t, i) => `
            <path d="M${t[0]} 140 L${t[0]} ${t[1] + 34} Q${t[0] + 12} ${t[1]} ${t[0] + 24} ${t[1] + 34} L${t[0] + 24} 140 Z" fill="${i === 1 ? "#c9ad7f" : "#b99a66"}"/>
            <path d="M${t[0] + 4} ${t[1] + 40} Q${t[0] + 12} ${t[1] + 16} ${t[0] + 20} ${t[1] + 40}" fill="none" stroke="#8a6a3c" stroke-width="2"/>
            ${[0, 14, 28, 42].map(dy => `<ellipse cx="${t[0] + 12}" cy="${t[1] + 52 + dy}" rx="4" ry="6" fill="#7a5c34"/>`).join("")}
            <circle cx="${t[0] + 12}" cy="${t[1] + 4}" r="6" fill="${["#ef5350", "#ffca28", "#ab47bc"][i]}"/>
            <circle cx="${t[0] + 8.5}" cy="${t[1] + 1}" r="2" fill="#fff" opacity=".65"/>
            <path d="M${t[0] + 12} ${t[1] - 2} L${t[0] + 12} ${t[1] - 8}" stroke="#8a6a3c" stroke-width="2"/>`).join("")}
          <path d="M96 140 L96 96 Q101 84 106 96 L106 140 Z" fill="#c9ad7f"/>
          <circle cx="101" cy="88" r="4" fill="#66bb6a"/>`, "0 0 112 142"),
        name: { es: "Las torres con pináculos de fruta", ca: "Les torres amb pinacles de fruita", en: "The towers with fruit pinnacles", cs: "Věže se špičkami jako ovoce", fr: "Les tours aux pinacles de fruits" },
        fact: { es: "La Sagrada Família se empezó en 1882 y aún se construye. Sus torres acaban en pináculos de colores que parecen cestas de fruta.", ca: "La Sagrada Família es va començar el 1882 i encara es construeix. Les seves torres acaben en pinacles de colors que semblen cistelles de fruita.", en: "The Sagrada Família was started in 1882 and is still being built. Its towers end in colourful pinnacles that look like fruit baskets.", cs: "Sagrada Família se začala stavět roku 1882 a staví se dodnes. Její věže končí barevnými špičkami, které vypadají jako košíky ovoce.", fr: "La Sagrada Família a été commencée en 1882 et se construit encore. Ses tours finissent en pinacles colorés qui ressemblent à des paniers de fruits." } },
      { cat: "sagrada", emoji: "🌿", x: 1850, y: 770, iw: 96, ih: 90,
        svg: gaSvg(`
          <path d="M8 92 L8 40 Q18 18 30 34 Q38 12 50 26 Q62 10 70 30 Q82 16 92 40 L92 92 Z" fill="#c9ad7f"/>
          <path d="M30 92 L30 64 Q50 44 70 64 L70 92 Z" fill="#8a6a3c"/>
          <path d="M36 90 L36 68 Q50 54 64 68 L64 90 Z" fill="#5d4526"/>
          <path d="M46 30 Q50 8 54 30 Q58 20 50 4 Q42 20 46 30 Z" fill="#2e7d32"/>
          <circle cx="46" cy="14" r="2.4" fill="#fff"/><circle cx="55" cy="18" r="2" fill="#fff"/><circle cx="50" cy="8" r="1.8" fill="#fff"/>
          <ellipse cx="18" cy="86" rx="7" ry="4.6" fill="#7cb342"/><circle cx="14" cy="84" r="2" fill="#33691e"/>
          <path d="M76 84 Q82 78 88 84" stroke="#7cb342" stroke-width="3" fill="none" stroke-linecap="round"/>
          ${[[20, 52], [78, 48], [26, 70], [74, 68]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="2.6" fill="#e8dfc6"/>`).join("")}`, "0 0 100 96"),
        name: { es: "La fachada del Nacimiento", ca: "La façana del Naixement", en: "The Nativity façade", cs: "Průčelí Narození", fr: "La façade de la Nativité" },
        fact: { es: "Gaudí la llenó de plantas y animales de piedra: tortugas, camaleones y un ciprés verde con palomas blancas en lo alto.", ca: "Gaudí la va omplir de plantes i animals de pedra: tortugues, camaleons i un xiprer verd amb coloms blancs a dalt de tot.", en: "Gaudí filled it with stone plants and animals: tortoises, chameleons and a green cypress with white doves at the top.", cs: "Gaudí ho zaplnil kamennými rostlinami a zvířaty: želvami, chameleony a zeleným cypřišem s bílými holubicemi na vrcholu.", fr: "Gaudí l'a remplie de plantes et d'animaux de pierre : des tortues, des caméléons et un cyprès vert avec des colombes blanches tout en haut." } },
      { cat: "sagrada", emoji: "⭐", x: 2100, y: 300, iw: 64, ih: 120,
        svg: gaSvg(`
          <path d="M22 120 L22 46 Q30 32 38 46 L38 120 Z" fill="#c9ad7f"/>
          <path d="M26 116 L26 54 M34 116 L34 54" stroke="#8a6a3c" stroke-width="1.6"/>
          <g fill="#9fd8ef">${[0, 30, 60, 90, 120, 150].map(a => `<path d="M30 26 L33 32 L30 38 L27 32 Z" transform="rotate(${a} 30 32)"/>`).join("")}</g>
          <g fill="#e3f4ff">${[15, 45, 75, 105, 135, 165].map(a => `<path d="M30 27.5 L32 32 L30 36.5 L28 32 Z" transform="rotate(${a} 30 32)"/>`).join("")}</g>
          <circle cx="30" cy="32" r="4.6" fill="#fff"/>
          <circle cx="30" cy="32" r="9" fill="rgba(159,216,239,.3)"/>`, "0 0 60 122"),
        name: { es: "La torre de María y su estrella", ca: "La torre de Maria i la seva estrella", en: "The tower of Mary and its star", cs: "Mariina věž a její hvězda", fr: "La tour de Marie et son étoile" },
        fact: { es: "En lo alto de esta torre brilla una estrella gigante de doce puntas que se enciende de noche. Se ve desde media Barcelona.", ca: "A dalt d'aquesta torre brilla una estrella gegant de dotze puntes que s'encén de nit. Es veu des de mitja Barcelona.", en: "At the top of this tower shines a giant twelve-pointed star that lights up at night. You can see it from half of Barcelona.", cs: "Na vrcholu této věže září obří dvanácticípá hvězda, která se v noci rozsvěcí. Je vidět z půlky Barcelony.", fr: "Au sommet de cette tour brille une étoile géante à douze pointes qui s'allume la nuit. On la voit depuis la moitié de Barcelone." } },
      { cat: "sagrada", emoji: "🌳", x: 2350, y: 830, iw: 100, ih: 88,
        svg: gaSvg(`
          ${[[20, "#d9cfb2"], [52, "#e8dfc6"], [84, "#d9cfb2"]].map(c => `
            <path d="M${c[0]} 92 L${c[0]} 46 M${c[0]} 46 Q${c[0] - 10} 30 ${c[0] - 16} 18 M${c[0]} 46 Q${c[0] + 10} 30 ${c[0] + 16} 18 M${c[0]} 52 Q${c[0] - 4} 36 ${c[0] - 2} 26" stroke="${c[1]}" stroke-width="7" fill="none" stroke-linecap="round"/>`).join("")}
          ${[[4, 14, "#ffe082"], [26, 8, "#a5d6a7"], [48, 12, "#ffcc80"], [70, 6, "#a5d6a7"], [92, 14, "#ffe082"], [16, 22, "#c5e1a5"], [60, 20, "#ffe082"], [82, 24, "#c5e1a5"]].map(h => `<circle cx="${h[0]}" cy="${h[1]}" r="7" fill="${h[2]}" opacity=".8"/>`).join("")}
          <rect x="0" y="92" width="104" height="5" rx="2.5" fill="#b3a67f"/>`, "0 0 104 98"),
        name: { es: "El bosque de columnas", ca: "El bosc de columnes", en: "The forest of columns", cs: "Les ze sloupů", fr: "La forêt de colonnes" },
        fact: { es: "Dentro, las columnas se abren en ramas como árboles gigantes. Gaudí quería que te sintieras paseando por un bosque.", ca: "A dins, les columnes s'obren en branques com arbres gegants. Gaudí volia que et sentissis passejant per un bosc.", en: "Inside, the columns branch out like giant trees. Gaudí wanted you to feel like you were walking through a forest.", cs: "Uvnitř se sloupy větví jako obrovské stromy. Gaudí chtěl, aby ses cítil jako na procházce lesem.", fr: "À l'intérieur, les colonnes s'ouvrent en branches comme des arbres géants. Gaudí voulait qu'on se sente en promenade dans une forêt." } },
      { cat: "sagrada", emoji: "🌈", x: 2600, y: 540, iw: 70, ih: 92,
        svg: gaSvg(`
          <path d="M8 96 L8 34 Q34 4 60 34 L60 96 Z" fill="#5d4526"/>
          <path d="M14 92 L14 38 Q34 14 54 38 L54 92 Z" fill="#3e2f1c"/>
          <path d="M18 88 L18 42 Q26 30 34 40 L34 88 Z" fill="#42a5f5" opacity=".9"/>
          <path d="M34 40 Q42 30 50 42 L50 88 L34 88 Z" fill="#ef5350" opacity=".9"/>
          <path d="M18 60 L50 60 M18 74 L50 74 M34 40 L34 88" stroke="#3e2f1c" stroke-width="3"/>
          <path d="M20 46 L30 52 M38 48 L48 54" stroke="#fff" stroke-width="2" opacity=".6"/>
          <circle cx="26" cy="66" r="3.4" fill="#66bb6a"/><circle cx="42" cy="80" r="3.4" fill="#ffca28"/>`, "0 0 68 100"),
        name: { es: "La luz de colores de las vidrieras", ca: "La llum de colors de les vidrieres", en: "The coloured light of the stained glass", cs: "Barevné světlo vitráží", fr: "La lumière colorée des vitraux" },
        fact: { es: "Por la mañana entra luz azul y verde, y al atardecer roja y naranja. ¡Es como estar dentro de un arcoíris!", ca: "Al matí hi entra llum blava i verda, i al capvespre vermella i taronja. És com ser dins d'un arc de Sant Martí!", en: "In the morning blue and green light comes in, and at sunset red and orange. It is like standing inside a rainbow!", cs: "Ráno dovnitř vstupuje modré a zelené světlo, večer červené a oranžové. Je to jako stát uvnitř duhy!", fr: "Le matin, la lumière entre en bleu et vert, et au coucher du soleil en rouge et orange. C'est comme être dans un arc-en-ciel !" } },
      { cat: "casas", emoji: "🪨", x: 2980, y: 580, iw: 110, ih: 84,
        svg: gaSvg(`
          <path d="M4 88 L4 30 Q16 20 28 28 Q44 16 60 26 Q78 14 94 26 Q106 20 112 30 L112 88 Z" fill="#ded3ba"/>
          <path d="M6 44 Q30 36 58 40 Q86 44 110 38 M6 62 Q30 54 58 58 Q86 62 110 56 M6 78 Q30 72 58 75 Q86 78 110 73" stroke="#b8ab8c" stroke-width="3" fill="none"/>
          ${[[16, 46], [44, 48], [72, 50], [96, 46], [16, 64], [44, 66], [72, 68], [96, 62]].map(w => `<path d="M${w[0]} ${w[1]} Q${w[0] + 7} ${w[1] - 5} ${w[0] + 14} ${w[1]} L${w[0] + 14} ${w[1] + 8} L${w[0]} ${w[1] + 8} Z" fill="#6b7f8f"/><path d="M${w[0] + 1} ${w[1] + 8.5} Q${w[0] + 7} ${w[1] + 12} ${w[0] + 13} ${w[1] + 8.5}" stroke="#4a5c68" stroke-width="1.8" fill="none"/>`).join("")}
          <path d="M26 28 L26 14 Q31 6 36 14 L36 26 M80 26 L80 12 Q85 4 90 12 L90 24" fill="#c9bb9a" stroke="#a89a78" stroke-width="1.4"/>
          <path d="M28 12 Q31 8 34 12 M82 10 Q85 6 88 10" stroke="#6d5c3f" stroke-width="2.4" fill="none" stroke-linecap="round"/>`, "0 0 116 92"),
        name: { es: "La Pedrera y sus chimeneas guerreras", ca: "La Pedrera i les seves xemeneies guerreres", en: "La Pedrera and its warrior chimneys", cs: "La Pedrera a její bojovné komíny", fr: "La Pedrera et ses cheminées guerrières" },
        fact: { es: "De verdad se llama Casa Milà, pero como parece una ola de piedra la llaman la Pedrera. En su azotea, las chimeneas parecen guerreros con casco.", ca: "De debò es diu Casa Milà, però com que sembla una onada de pedra li diuen la Pedrera. Al seu terrat, les xemeneies semblen guerrers amb casc.", en: "Its real name is Casa Milà, but since it looks like a stone wave everyone calls it La Pedrera, the quarry. On its rooftop the chimneys look like helmeted warriors.", cs: "Doopravdy se jmenuje Casa Milà, ale protože vypadá jako kamenná vlna, říká se mu La Pedrera, kamenolom. Komíny na střeše vypadají jako bojovníci v helmách.", fr: "Elle s'appelle en vrai Casa Milà, mais comme elle ressemble à une vague de pierre, on l'appelle La Pedrera, la carrière. Sur son toit, les cheminées ressemblent à des guerriers casqués." } },
      { cat: "casas", emoji: "🐉", x: 3230, y: 800, iw: 92, ih: 96,
        svg: gaSvg(`
          <rect x="12" y="40" width="72" height="56" rx="6" fill="#cfe3ea"/>
          <path d="M8 44 Q26 14 48 12 Q70 14 88 44 Z" fill="#66bb6a"/>
          <path d="M18 40 Q26 32 34 40 M38 34 Q46 26 54 34 M58 36 Q66 28 74 36 M28 44 Q36 36 44 44 M50 42 Q58 34 66 42" fill="none" stroke="#2e7d32" stroke-width="2.6"/>
          <path d="M24 22 L28 14 L34 20 M44 16 L48 8 L54 16 M62 18 L68 12 L72 20" fill="#ef5350" stroke="#fff" stroke-width="1"/>
          ${[24, 56].map(x => `<path d="M${x} 58 Q${x + 8} 50 ${x + 16} 58 Q${x + 16} 66 ${x + 8} 66 Q${x} 66 ${x} 58 Z" fill="#e8dfc6"/><circle cx="${x + 4.5}" cy="59" r="1.8" fill="#546e7a"/><circle cx="${x + 11.5}" cy="59" r="1.8" fill="#546e7a"/>`).join("")}
          ${[[20, 78], [44, 78], [68, 78]].map(b => `<path d="M${b[0]} ${b[1] + 14} L${b[0]} ${b[1]} Q${b[0] + 5} ${b[1] - 6} ${b[0] + 10} ${b[1]} L${b[0] + 10} ${b[1] + 14}" fill="#f2e3c4" stroke="#d8cfb6" stroke-width="1.4"/>`).join("")}
          ${[[30, 46, "#42a5f5"], [48, 44, "#ffca28"], [64, 48, "#ab47bc"], [38, 52, "#26c6da"], [56, 52, "#f06292"]].map(m => `<circle cx="${m[0]}" cy="${m[1]}" r="2.2" fill="${m[2]}"/>`).join("")}`, "0 0 96 100"),
        name: { es: "La Casa Batlló, el tejado dragón", ca: "La Casa Batlló, la teulada drac", en: "Casa Batlló, the dragon roof", cs: "Casa Batlló, dračí střecha", fr: "La Casa Batlló, le toit dragon" },
        fact: { es: "Su tejado parece el lomo escamado de un dragón y los balcones parecen antifaces. La llaman también la casa de los huesos.", ca: "La seva teulada sembla el llom escatat d'un drac i els balcons semblen antifaços. També li diuen la casa dels ossos.", en: "Its roof looks like the scaly back of a dragon and its balconies look like masks. People also call it the house of bones.", cs: "Střecha vypadá jako šupinatý hřbet draka a balkony jako škrabošky. Říká se mu také dům kostí.", fr: "Son toit ressemble au dos écailleux d'un dragon et ses balcons à des masques. On l'appelle aussi la maison des os." } },
      { cat: "casas", emoji: "🌼", x: 3480, y: 500, iw: 88, ih: 86,
        svg: gaSvg(`
          <rect x="10" y="26" width="72" height="62" rx="5" fill="#f2e3c4"/>
          ${[0, 1, 2, 3].map(i => [0, 1, 2, 3].map(j => `<rect x="${14 + i * 16}" y="${30 + j * 13}" width="8" height="6.5" fill="${(i + j) % 2 ? "#66bb6a" : "#fff"}" opacity=".85"/>`).join("")).join("")}
          <rect x="6" y="16" width="20" height="14" rx="3" fill="#e0cfa5"/>
          <path d="M6 16 L16 6 L26 16 Z" fill="#c9a06a"/>
          <rect x="66" y="14" width="20" height="16" rx="3" fill="#e0cfa5"/>
          <path d="M64 16 L76 4 L88 16 Z" fill="#c9a06a"/>
          ${[[36, 20], [50, 14], [58, 24]].map(f => `${[0, 72, 144, 216, 288].map(a => `<ellipse cx="${f[0]}" cy="${f[1]}" rx="2.6" ry="5" fill="#ff9800" transform="rotate(${a} ${f[0]} ${f[1]})"/>`).join("")}<circle cx="${f[0]}" cy="${f[1]}" r="2.4" fill="#6d4c41"/>`).join("")}
          <rect x="38" y="64" width="16" height="24" rx="3" fill="#7a5230"/>
          <rect x="18" y="54" width="12" height="12" rx="2" fill="#9fd8ef"/><rect x="62" y="54" width="12" height="12" rx="2" fill="#9fd8ef"/>`, "0 0 92 92"),
        name: { es: "La Casa Vicens, azulejos de flores", ca: "La Casa Vicens, rajoles de flors", en: "Casa Vicens, flower tiles", cs: "Casa Vicens, kachličky s květinami", fr: "La Casa Vicens, carreaux à fleurs" },
        fact: { es: "Fue la primera gran casa de Gaudí. La cubrió de azulejos con flores naranjas, como las que crecían en ese jardín.", ca: "Va ser la primera gran casa de Gaudí. La va cobrir de rajoles amb flors taronges, com les que creixien en aquell jardí.", en: "It was Gaudí's first big house. He covered it with tiles of orange flowers, like the ones that grew in that garden.", cs: "Byl to první velký Gaudího dům. Pokryl ho kachličkami s oranžovými květy, jaké rostly v tamní zahradě.", fr: "Ce fut la première grande maison de Gaudí. Il l'a couverte de carreaux à fleurs oranges, comme celles qui poussaient dans ce jardin." } },
      { cat: "casas", emoji: "💡", x: 3730, y: 780, iw: 54, ih: 104,
        svg: gaSvg(`
          <rect x="25" y="30" width="6" height="66" rx="3" fill="#37474f"/>
          <path d="M8 34 Q18 24 28 32 M48 34 Q38 24 28 32" stroke="#37474f" stroke-width="3.4" fill="none"/>
          <path d="M14 44 Q21 36 28 42 M42 44 Q35 36 28 42" stroke="#37474f" stroke-width="3" fill="none"/>
          ${[[8, 34], [48, 34], [14, 44], [42, 44]].map(l => `<circle cx="${l[0]}" cy="${l[1] - 4}" r="4.4" fill="#ffe082"/><circle cx="${l[0]}" cy="${l[1] - 4}" r="7" fill="rgba(255,224,130,.35)"/>`).join("")}
          <circle cx="28" cy="24" r="5" fill="#ffe082"/><circle cx="28" cy="24" r="8" fill="rgba(255,224,130,.35)"/>
          <path d="M22 14 Q28 4 34 14 Q31 12 28 14 Q25 12 22 14 Z" fill="#b71c1c"/>
          <path d="M20 16 L24 10 M36 16 L32 10" stroke="#b71c1c" stroke-width="2.4" stroke-linecap="round"/>
          <path d="M18 96 L38 96 Q40 102 28 102 Q16 102 18 96 Z" fill="#37474f"/>`, "0 0 56 106"),
        name: { es: "La farola de la plaza Reial", ca: "El fanal de la plaça Reial", en: "The Plaça Reial lamppost", cs: "Lucerna na Plaça Reial", fr: "Le lampadaire de la Plaça Reial" },
        fact: { es: "Fue el primer encargo de Gaudí, recién acabados los estudios: una farola de seis brazos con un casquito con alas en lo alto.", ca: "Va ser el primer encàrrec de Gaudí, tot just acabats els estudis: un fanal de sis braços amb un casquet amb ales a dalt de tot.", en: "It was Gaudí's first commission, fresh out of school: a six-armed lamppost with a little winged helmet on top.", cs: "Byla to první Gaudího zakázka hned po škole: lucerna se šesti rameny a s malou okřídlenou helmou na vrcholu.", fr: "Ce fut la première commande de Gaudí, à peine sorti de l'école : un lampadaire à six bras avec un petit casque ailé au sommet." } },
      { cat: "casas", emoji: "⛓️", x: 3990, y: 400, iw: 84, ih: 74,
        svg: gaSvg(`
          <rect x="4" y="6" width="82" height="7" rx="3.5" fill="#8d6e63"/>
          <rect x="6" y="13" width="5" height="60" fill="#a1887f"/><rect x="79" y="13" width="5" height="60" fill="#a1887f"/>
          <path d="M16 12 Q26 46 36 12" stroke="#eceff1" stroke-width="2.6" fill="none" stroke-dasharray="3 3"/>
          <path d="M30 12 Q45 58 60 12" stroke="#eceff1" stroke-width="2.6" fill="none" stroke-dasharray="3 3"/>
          <path d="M52 12 Q63 42 74 12" stroke="#eceff1" stroke-width="2.6" fill="none" stroke-dasharray="3 3"/>
          <circle cx="26" cy="30" r="3.6" fill="#ffca28"/><circle cx="45" cy="46" r="3.6" fill="#ffca28"/><circle cx="63" cy="28" r="3.6" fill="#ffca28"/>
          <path d="M2 70 Q20 64 45 66 Q70 68 88 64" stroke="#78909c" stroke-width="3" fill="none" opacity=".5"/>`, "0 0 90 78"),
        name: { es: "La maqueta de cadenitas colgantes", ca: "La maqueta de cadenetes penjades", en: "The hanging chain model", cs: "Model ze zavěšených řetízků", fr: "La maquette de chaînettes suspendues" },
        fact: { es: "Gaudí colgaba cadenitas con pesitos y miraba la forma al revés: así calculaba sus arcos, sin ordenador y con mucho ingenio.", ca: "Gaudí penjava cadenetes amb pesets i mirava la forma a l'inrevés: així calculava els seus arcs, sense ordinador i amb molt d'enginy.", en: "Gaudí hung little chains with tiny weights and looked at the shape upside down: that is how he worked out his arches, with no computer and lots of wit.", cs: "Gaudí zavěšoval řetízky se závažíčky a díval se na tvar vzhůru nohama: tak počítal své oblouky, bez počítače a s velkým důvtipem.", fr: "Gaudí suspendait des chaînettes avec des petits poids et regardait la forme à l'envers : c'est ainsi qu'il calculait ses arcs, sans ordinateur et avec beaucoup d'astuce." } }
    ],
    /* el escenario: Barcelona vista desde el Park Güell, con el mar al fondo */
    deco: function () {
      let s = "";
      /* las cajas de los iconos: sirven para dejarles aire alrededor */
      const cajas = [[160, 664, 120, 72], [415, 497, 110, 46], [674, 765, 92, 70], [929, 514, 82, 92], [1180, 355, 80, 70],
        [1545, 400, 110, 140], [1802, 725, 96, 90], [2068, 240, 64, 120], [2300, 786, 100, 88], [2565, 494, 70, 92],
        [2925, 538, 110, 84], [3184, 752, 92, 96], [3436, 457, 88, 86], [3703, 728, 54, 104], [3948, 363, 84, 74]];
      const libre = (x, y, w, h) => !cajas.some(c => x < c[0] + c[2] + 12 && x + w > c[0] - 12 && y < c[1] + c[3] + 12 && y + h > c[1] - 12);
      /* numeros repetibles: el mapa sale igual en cada partida */
      let sem = 1907;
      const az = () => (sem = sem * 16807 % 2147483647) / 2147483647;
      /* la paleta del trencadís: los azulejos rotos del parque */
      const tes = ["#f2efe4", "#3fa3d6", "#f5c33f", "#e0653c", "#8dbf5b", "#c96fa8", "#4f9aa6", "#efe6cd"];
      const tesela = (x, y, w, h) => `<rect x="${x.toFixed(0)}" y="${y.toFixed(0)}" width="${w.toFixed(0)}" height="${h}" rx="2" fill="${tes[Math.floor(az() * 8)]}" transform="rotate(${(az() * 44 - 22).toFixed(0)} ${(x + w / 2).toFixed(0)} ${(y + h / 2).toFixed(0)})"/>`;
      /* una hilera de teselas siguiendo una línea cualquiera */
      const banda = (x0, x1, paso, fy, alto) => {
        let o = "";
        for (let x = x0; x < x1; x += paso) {
          const w = 11 + az() * 9, y = fy(x);
          if (libre(x, y, w, alto)) o += tesela(x, y, w, alto);
        }
        return o;
      };
      /* la farola de brazo curvo de la acera: el hilo que cose las tres zonas */
      const farola = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})">
        <ellipse cx="0" cy="3" rx="21" ry="7" fill="rgba(60,46,26,.2)"/>
        <path d="M-14 0 h28 l-5 -16 h-18 Z" fill="#37474f"/>
        <path d="M0 -16 V-122" stroke="#3f4a52" stroke-width="9" stroke-linecap="round"/>
        <path d="M0 -122 q1 -24 24 -28" stroke="#3f4a52" stroke-width="7" fill="none" stroke-linecap="round"/>
        <ellipse cx="26" cy="-144" rx="11" ry="14" fill="#ffe082"/>
        <ellipse cx="26" cy="-144" rx="21" ry="25" fill="rgba(255,224,130,.26)"/>
        <circle cx="0" cy="-60" r="6" fill="#4a565e"/></g>`;
      /* los plátanos de sombra de las aceras de Barcelona */
      const platano = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})">
        <rect x="-11" y="-96" width="22" height="98" rx="8" fill="#b6ad94"/>
        <path d="M-9 -60 q-20 -12 -30 -30 M9 -70 q20 -14 32 -30" stroke="#b6ad94" stroke-width="9" fill="none" stroke-linecap="round"/>
        <circle cx="0" cy="-118" r="54" fill="#5c9440"/><circle cx="-42" cy="-92" r="34" fill="#4f8637"/><circle cx="44" cy="-96" r="36" fill="#4f8637"/><circle cx="-14" cy="-146" r="30" fill="#6ba64c"/></g>`;
      /* ---------- DEGRADADOS Y PATRONES (ids con prefijo gduX) ---------- */
      s += `<defs>
        <radialGradient id="gduXSol" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fffde7"/><stop offset="100%" stop-color="#ffd54f"/></radialGradient>
        <linearGradient id="gduXMar" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#79c8e9"/><stop offset="60%" stop-color="#2f92c2"/><stop offset="100%" stop-color="#1b6b96"/></linearGradient>
        <linearGradient id="gduXMonte" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#97ab80"/><stop offset="100%" stop-color="#5e7854"/></linearGradient>
        <linearGradient id="gduXColina" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#a8c76d"/><stop offset="100%" stop-color="#6b9440"/></linearGradient>
        <linearGradient id="gduXAlbero" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e3ce9f"/><stop offset="100%" stop-color="#bfa372"/></linearGradient>
        <linearGradient id="gduXPiedra" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#ebe0c7"/><stop offset="52%" stop-color="#cfc3a5"/><stop offset="100%" stop-color="#aa9d7f"/></linearGradient>
        <linearGradient id="gduXTemplo" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#efe3c7"/><stop offset="100%" stop-color="#bcad8d"/></linearGradient>
        <linearGradient id="gduXVidrio" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffe082"/><stop offset="48%" stop-color="#ef7c5c"/><stop offset="100%" stop-color="#4f9ad8"/></linearGradient>
        <linearGradient id="gduXAsfalto" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#6f6a63"/><stop offset="100%" stop-color="#514d48"/></linearGradient>
        <pattern id="gduXPanot" width="118" height="118" patternUnits="userSpaceOnUse">
          <rect width="118" height="118" fill="#cbb489"/><rect x="2" y="2" width="114" height="114" rx="5" fill="#d9c79d"/>
          <g fill="rgba(255,255,255,.42)"><ellipse cx="59" cy="59" rx="11" ry="26"/><ellipse cx="59" cy="59" rx="26" ry="11"/></g>
          <circle cx="59" cy="59" r="8" fill="rgba(255,255,255,.55)"/>
        </pattern>
        <pattern id="gduXTrenca" width="92" height="64" patternUnits="userSpaceOnUse">
          <rect width="92" height="64" fill="#efe9db"/>
          ${[[4, 5], [32, 3], [58, 6], [10, 26], [40, 29], [66, 27], [2, 46], [34, 47], [62, 45]].map(t => tesela(t[0], t[1], 16 + az() * 8, 13)).join("")}
        </pattern>
        <pattern id="gduXVicens" width="54" height="54" patternUnits="userSpaceOnUse">
          <rect width="54" height="54" fill="#f4f1e6"/><rect width="27" height="27" fill="#8dbf5b"/><rect x="27" y="27" width="27" height="27" fill="#8dbf5b"/>
          <circle cx="13" cy="13" r="7" fill="#f5c33f"/><circle cx="13" cy="13" r="3" fill="#e0653c"/>
          <circle cx="40" cy="40" r="7" fill="#f5c33f"/><circle cx="40" cy="40" r="3" fill="#e0653c"/>
        </pattern>
      </defs>`;
      /* ---------- EL CIELO: sol, nubes lentas y vencejos ---------- */
      s += `<g transform="translate(3280 124)">
        <circle r="112" fill="rgba(255,241,118,.22)"><animate attributeName="r" values="112;126;112" dur="9s" repeatCount="indefinite"/></circle>
        <circle r="70" fill="url(#gduXSol)"/><circle cx="-25" cy="-23" r="16" fill="rgba(255,255,255,.5)"/></g>`;
      const nube = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})"><ellipse cx="0" cy="0" rx="86" ry="28" fill="rgba(255,255,255,.88)"/><ellipse cx="-54" cy="10" rx="44" ry="20" fill="rgba(255,255,255,.8)"/><ellipse cx="48" cy="12" rx="50" ry="22" fill="rgba(255,255,255,.8)"/><ellipse cx="-8" cy="-22" rx="46" ry="25" fill="#fff"/></g>`;
      [[190, 108, .8, 48, 62], [540, 138, .92, 56, 50], [1110, 170, .6, 40, 44], [1870, 92, .7, 74, 66], [2960, 178, .8, 44, 58], [3760, 128, .66, 62, 72]].forEach(n => {
        s += `<g opacity=".85"><animateTransform attributeName="transform" type="translate" values="0 0;${n[3]} 0;0 0" dur="${n[4]}s" repeatCount="indefinite"/>${nube(n[0], n[1], n[2])}</g>`;
      });
      [[390, 244], [560, 300], [840, 196], [1460, 292], [2290, 214], [3630, 240]].forEach(v => {
        s += `<path d="M${v[0]} ${v[1]} q-12 -12 -26 -7 M${v[0]} ${v[1]} q12 -12 26 -7" stroke="rgba(62,88,110,.45)" stroke-width="3.4" fill="none" stroke-linecap="round"/>`;
      });
      /* un vencejo cruzando el cielo entero, sin prisa */
      s += `<g><path d="M0 0 q-13 -12 -28 -6 M0 0 q13 -12 28 -6" stroke="rgba(55,80,100,.6)" stroke-width="4" fill="none" stroke-linecap="round">
        <animate attributeName="d" values="M0 0 q-13 -12 -28 -6 M0 0 q13 -12 28 -6;M0 0 q-13 6 -28 12 M0 0 q13 6 28 12;M0 0 q-13 -12 -28 -6 M0 0 q13 -12 28 -6" dur="1.7s" repeatCount="indefinite"/></path>
        <animateMotion dur="64s" repeatCount="indefinite" path="M 140 262 Q 1180 152 2240 234 Q 3220 300 4160 198"/></g>`;
      /* ---------- EL MEDITERRÁNEO: la raya del horizonte tras la ciudad ---------- */
      /* el agua arranca detrás del templo, así su borde izquierdo no se ve */
      s += `<rect x="1600" y="464" width="2600" height="180" fill="url(#gduXMar)"/>
        <rect x="1600" y="458" width="2600" height="9" rx="4" fill="rgba(255,255,255,.55)"/>`;
      for (let i = 0; i < 15; i++) {
        s += `<path d="M${1660 + i * 168} ${486 + (i % 3) * 30} q17 -7 34 0" stroke="rgba(255,255,255,.4)" stroke-width="4" fill="none" stroke-linecap="round"/>`;
      }
      /* la orilla: la arena moja el agua poco a poco, sin raya dura */
      s += `<path d="M1600 646 Q1900 630 2200 642 Q2500 654 2800 640 Q3100 628 3450 642 Q3800 654 4200 638 L4200 676 H1600 Z" fill="#e6d3a4"/>
        <path d="M1600 646 Q1900 630 2200 642 Q2500 654 2800 640 Q3100 628 3450 642 Q3800 654 4200 638 L4200 650 Q3800 666 3450 654 Q3100 640 2800 652 Q2500 666 2200 654 Q1900 642 1600 658 Z" fill="rgba(255,255,255,.5)"/>`;
      /* el reflejo del sol temblando sobre el agua */
      s += `<g opacity=".7"><rect x="3244" y="484" width="72" height="8" rx="4" fill="#fff8e1"/><rect x="3260" y="512" width="46" height="7" rx="3" fill="#fff8e1"/><rect x="3252" y="540" width="62" height="7" rx="3" fill="#fff8e1"/>
        <animate attributeName="opacity" values=".7;.34;.7" dur="5.4s" repeatCount="indefinite"/></g>`;
      [[1760, 520, 1], [3860, 504, .9]].forEach(v => {
        s += `<g transform="translate(${v[0]} ${v[1]}) scale(${v[2]})"><path d="M-18 0 h38 l-7 12 h-32 Z" fill="#f5f7f8"/><path d="M6 -2 L6 -40 L26 -2 Z" fill="#fff"/><path d="M2 -2 L2 -32 L-14 -2 Z" fill="#e8eef1"/></g>`;
      });
      /* ---------- MONTJUÏC: la montaña que cae al mar, con su castillo ---------- */
      s += `<path d="M2660 644 Q2880 524 3080 452 Q3210 408 3300 456 Q3400 508 3440 644 Z" fill="url(#gduXMonte)"/>
        <path d="M2660 644 Q2880 524 3080 452 Q3210 408 3300 456 L3300 486 Q3200 442 3090 486 Q2900 556 2740 644 Z" fill="rgba(255,255,255,.14)"/>
        <g fill="rgba(88,104,82,.95)"><rect x="3196" y="428" width="104" height="26" rx="3"/><rect x="3190" y="420" width="18" height="14"/><rect x="3234" y="414" width="16" height="18"/><rect x="3286" y="420" width="18" height="14"/></g>`;
      /* ---------- COLLSEROLA: la sierra que cierra Barcelona por detrás ---------- */
      s += `<path d="M-20 566 Q260 470 540 496 Q820 522 1060 452 Q1320 372 1580 428 Q1820 476 2000 566 Z" fill="rgba(122,146,150,.42)"/>
        <path d="M-20 566 Q260 470 540 496 Q820 522 1060 452 L1060 486 Q820 556 540 530 Q260 504 -20 598 Z" fill="rgba(255,255,255,.16)"/>
        <g fill="rgba(108,132,138,.75)"><path d="M1052 452 L1058 398 h14 l6 54 Z"/><rect x="1044" y="386" width="40" height="16" rx="7"/><rect x="1054" y="368" width="20" height="20" rx="7"/><rect x="1061" y="326" width="6" height="44" rx="3"/></g>
        <circle cx="1064" cy="322" r="5" fill="rgba(206,120,104,.7)"/>`;
      /* ---------- LA CIUDAD EN NEBLINA: la piel de manzanas del Eixample ---------- */
      for (let x = 1180; x < 4200; x += 176) {
        const h = 46 + ((x * 7) % 44);
        s += `<path d="M${x} ${648 - h} h84 l18 18 v${h - 18} h-102 Z" fill="rgba(148,170,188,.42)"/>`;
      }
      /* la línea de casitas de la orilla: cose la ciudad lejana con la playa */
      for (let x = 1620; x < 4200; x += 92) {
        s += `<path d="M${x} 648 v-22 l14 -12 l14 12 v22 Z" fill="rgba(170,186,196,.4)"/>`;
      }
      /* ---------- EL PARK GÜELL: la colina verde, la terraza y la escalinata ---------- */
      s += `<path d="M-20 716 Q140 566 340 596 Q560 626 780 560 Q980 500 1150 542 Q1250 566 1310 650 L1310 1100 L-20 1100 Z" fill="url(#gduXColina)"/>
        <path d="M-20 716 Q140 566 340 596 Q560 626 780 560 Q980 500 1150 542 L1150 572 Q980 530 780 590 Q560 652 340 624 Q140 596 -20 746 Z" fill="rgba(255,255,255,.16)"/>
        <path d="M1310 650 Q1372 704 1412 786 Q1440 846 1452 936 L1310 936 Z" fill="url(#gduXColina)"/>
        <path d="M1310 650 Q1372 704 1412 786 L1394 800 Q1358 722 1310 678 Z" fill="rgba(255,255,255,.16)"/>`;
      /* los pinos carrascos de la colina */
      const pino = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})">
        <path d="M0 0 q-7 -58 5 -102" stroke="#7a5a3c" stroke-width="13" fill="none" stroke-linecap="round"/>
        <path d="M5 -102 q-28 -8 -50 -2 M5 -102 q28 -10 52 -4" stroke="#7a5a3c" stroke-width="7" fill="none" stroke-linecap="round"/>
        <ellipse cx="0" cy="-124" rx="70" ry="28" fill="#4a7a3a"/><ellipse cx="-44" cy="-108" rx="34" ry="17" fill="#3f6c33"/>
        <ellipse cx="46" cy="-112" rx="36" ry="18" fill="#3f6c33"/><ellipse cx="6" cy="-142" rx="44" ry="21" fill="#568c42"/></g>`;
      s += pino(80, 672, .95) + pino(360, 626, .8) + pino(1030, 566, .75) + pino(1268, 648, .9);
      /* la vegetación de la ladera: matas de romero y agaves entre camino y camino */
      const mata = (x, y, k, c) => `<g transform="translate(${x} ${y}) scale(${k})">
        <ellipse cx="0" cy="0" rx="30" ry="17" fill="${c}"/><ellipse cx="-18" cy="4" rx="18" ry="11" fill="${c}"/>
        <ellipse cx="19" cy="5" rx="16" ry="10" fill="${c}"/><ellipse cx="2" cy="-11" rx="19" ry="11" fill="rgba(255,255,255,.18)"/></g>`;
      const agave = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})" stroke="#6f9a52" stroke-width="7" stroke-linecap="round" fill="none">
        <path d="M0 0 q-26 -12 -34 -34"/><path d="M0 0 q26 -12 34 -34"/><path d="M0 0 q-14 -26 -12 -48"/><path d="M0 0 q14 -26 12 -48"/><path d="M0 0 v-40"/></g>`;
      [[34, 790, 1, "#5f9440"], [96, 838, .9, "#54873a"], [406, 758, .95, "#5f9440"], [450, 828, 1, "#54873a"],
        [1046, 812, 1, "#5f9440"], [1132, 762, .9, "#54873a"], [1248, 828, 1, "#5f9440"]].forEach(m => {
        if (libre(m[0] - 32 * m[2], m[1] - 20 * m[2], 64 * m[2], 40 * m[2])) s += mata(m[0], m[1], m[2], m[3]);
      });
      [[60, 706, 1], [432, 700, .9], [1082, 700, 1], [1214, 744, .85]].forEach(a => {
        if (libre(a[0] - 36 * a[2], a[1] - 52 * a[2], 72 * a[2], 56 * a[2])) s += agave(a[0], a[1], a[2]);
      });
      /* el turó de las Tres Cruces, el mirador más alto del parque */
      s += `<path d="M1046 570 Q1130 452 1226 442 Q1310 438 1360 574 Z" fill="#b9ae8e"/>
        <path d="M1046 570 Q1130 452 1226 442 L1226 470 Q1140 486 1082 570 Z" fill="rgba(255,255,255,.2)"/>`;
      /* el peñasco donde se planta el mirador: las tres cruces las dibuja el punto,
         aquí sube el caminito de escalones de piedra por el que se llega arriba */
      s += `<path d="M1160 486 Q1192 424 1222 423 Q1256 424 1276 490 Z" fill="#c6b997"/>
        <path d="M1160 486 Q1192 424 1222 423 L1222 444 Q1194 452 1178 486 Z" fill="rgba(255,255,255,.25)"/>`;
      for (let i = 0; i < 6; i++) {
        const px = 1076 + i * 15, py = 536 - i * 11;
        s += `<path d="M${px} ${py} h32 v7 h-32 Z" fill="#d8cdb0"/>
          <path d="M${px} ${py + 7} h32 v5 h-32 Z" fill="rgba(120,105,80,.42)"/>`;
      }
      s += mata(1292, 502, .6, "#5f9440") + mata(1176, 500, .6, "#54873a");
      /* la terraza de la Naturaleza: la plataforma sobre la sala de columnas */
      s += `<path d="M-20 578 Q340 560 740 566 Q1020 570 1210 582 L1210 626 Q1020 616 740 612 Q340 604 -20 622 Z" fill="url(#gduXPiedra)"/>
        <path d="M-20 622 Q340 604 740 612 Q1020 616 1210 626 L1210 638 Q1020 628 740 624 Q340 616 -20 634 Z" fill="rgba(120,105,80,.55)"/>
        <path d="M1206 566 h44 v76 h-44 Z" fill="#ded2b4"/>
        <rect x="1200" y="556" width="56" height="15" rx="5" fill="#efe6d2"/>
        <path d="M1206 642 h44 v10 h-44 Z" fill="rgba(120,105,80,.55)"/>`;
      /* las gárgolas de desagüe de la terraza */
      [200, 880, 1150].forEach(x => {
        s += `<path d="M${x} 626 q10 8 0 16 q-10 -8 0 -16 Z" fill="#9c9070"/><circle cx="${x}" cy="636" r="5" fill="#7d7358"/>`;
      });
      /* el banco ondulado de Jujol: una ola larguísima de trencadís */
      let bArriba = "", bAbajo = "";
      for (let x = -14; x <= 1206; x += 40) bArriba += (x === -14 ? "M" : "L") + x + " " + (508 + 22 * Math.sin((x - 46) / 122)).toFixed(1) + " ";
      for (let x = 1206; x >= -14; x -= 40) bAbajo += "L" + x + " " + (572 + 14 * Math.sin((x - 46) / 122 + .8)).toFixed(1) + " ";
      s += `<path d="${bArriba}${bAbajo}Z" fill="url(#gduXTrenca)"/>
        <path d="${bArriba}" stroke="#f6f2e6" stroke-width="6" fill="none" stroke-linecap="round"/>`;
      s += banda(0, 1198, 148, x => 526 + 22 * Math.sin((x - 46) / 122), 17);
      /* el repisón de la terraza donde se apoya la casita de la entrada */
      s += `<path d="M912 602 h118 v18 h-118 Z" fill="#ded2b4"/>
        <path d="M912 620 h118 v9 h-118 Z" fill="rgba(120,105,80,.5)"/>
        <ellipse cx="971" cy="604" rx="54" ry="8" fill="rgba(90,74,48,.16)"/>`;
      /* la penumbra del interior de la sala, con su techo y su suelo */
      s += `<path d="M486 636 H1010 V858 H486 Z" fill="rgba(74,62,44,.58)"/>
        <path d="M486 636 H1010 V682 H486 Z" fill="#cfc3a5"/>
        <path d="M486 682 H1010 V694 H486 Z" fill="rgba(48,40,26,.4)"/>
        <path d="M510 846 H990 V866 H510 Z" fill="#b7a98a"/>
        <g fill="#d9cdb0"><path d="M468 626 h26 v240 h-26 Z"/><path d="M1002 626 h26 v240 h-26 Z"/></g>
        <g fill="rgba(120,105,80,.4)"><path d="M494 626 h10 v240 h-10 Z"/><path d="M992 626 h10 v240 h-10 Z"/></g>`;
      /* las bóvedas del techo, arco tras arco */
      s += `<g fill="none" stroke="rgba(220,206,174,.45)" stroke-width="7">`;
      for (let x = 496; x < 996; x += 56) if (libre(x, 690, 56, 32)) s += `<path d="M${x} 712 q28 -30 56 0"/>`;
      s += `</g>`;
      /* la segunda fila de columnas, al fondo y en penumbra: la sala hipóstila
         es un bosque de pilares, no una sola hilera */
      [567, 660, 776, 878].forEach(x => {
        s += `<rect x="${x - 12}" y="700" width="24" height="152" fill="rgba(158,144,112,.5)"/>
          <path d="M${x - 16} 700 h32 v9 h-32 Z" fill="rgba(186,172,138,.55)"/>`;
      });
      /* los soles de mosaico del techo, en el hueco de las columnas que faltan:
         en el parque de verdad los medallones ocupan el sitio de las columnas
         que se suprimieron, por eso van entre pilar y pilar y no encima.
         Se pintan antes que las columnas, así el techo queda por detrás. */
      [[574, 658], [716, 658], [869, 658]].forEach(m => {
        if (!libre(m[0] - 18, m[1] - 18, 36, 36)) return;
        s += `<circle cx="${m[0]}" cy="${m[1]}" r="17" fill="#f4f0e2"/><circle cx="${m[0]}" cy="${m[1]}" r="17" fill="none" stroke="#3fa3d6" stroke-width="4"/>
          <circle cx="${m[0]}" cy="${m[1]}" r="7" fill="#f5c33f"/>${[0, 60, 120, 180, 240, 300].map(a => `<ellipse cx="${(m[0] + 12 * Math.cos(a * Math.PI / 180)).toFixed(0)}" cy="${(m[1] + 12 * Math.sin(a * Math.PI / 180)).toFixed(0)}" rx="4" ry="3" fill="#e0653c"/>`).join("")}`;
      });
      /* la sala hipóstila: las columnas inclinadas que aguantan la terraza */
      [[512, 6], [624, 2], [812, -3], [940, -7]].forEach(c => {
        const x = c[0];
        if (!libre(x - 20, 626, 40, 232)) return;
        s += `<g transform="rotate(${c[1]} ${x} 742)">
          <rect x="${x - 22}" y="626" width="44" height="228" fill="url(#gduXPiedra)"/>
          <path d="M${x - 27} 626 h54 v14 h-54 Z" fill="#ded2b4"/>
          <path d="M${x - 26} 848 h52 v12 h-52 Z" fill="#c2b493"/>
          <path d="M${x - 11} 644 V846 M${x + 11} 644 V846" stroke="rgba(140,126,98,.5)" stroke-width="3"/></g>`;
      });
      /* la escalinata del dragón, bajando de la terraza al suelo */
      s += `<path d="M116 862 L150 664 L340 664 L376 862 Z" fill="#e6dcc2"/>`;
      for (let i = 0; i < 6; i++) {
        const y = 682 + i * 30, dx = i * 5.4;
        s += `<path d="M${(148 - dx).toFixed(0)} ${y} H${(342 + dx).toFixed(0)}" stroke="rgba(150,136,106,.65)" stroke-width="5" stroke-linecap="round"/>`;
      }
      s += `<path d="M116 862 L150 664 L176 664 L142 862 Z" fill="#dcd0b2"/><path d="M376 862 L340 664 L314 664 L350 862 Z" fill="#dcd0b2"/>`;
      /* el trencadís de los dos pasamanos de la escalinata, tesela pegada a tesela */
      for (let i = 0; i <= 12; i++) {
        const t = i / 12;
        s += tesela(151 - 34 * t, 668 + 190 * t, 13, 12) + tesela(315 + 34 * t, 668 + 190 * t, 13, 12);
      }
      /* el suelo de albero del parque, con su rastrillo de piedrecitas */
      s += `<path d="M-20 862 Q340 850 740 858 Q1080 866 1310 854 L1310 1100 L-20 1100 Z" fill="url(#gduXAlbero)"/>
        <path d="M-20 896 Q340 884 740 892 Q1080 900 1310 888" stroke="rgba(255,255,255,.28)" stroke-width="7" fill="none"/>
        <path d="M-20 1050 Q340 1038 740 1046 Q1080 1054 1310 1042" stroke="rgba(140,112,68,.24)" stroke-width="9" fill="none"/>`;
      /* el murete del paseo: piedra abajo, una cinta de trencadís y el remate blanco */
      s += `<path d="M-20 962 Q300 944 640 958 Q960 970 1300 956 L1300 1018 Q960 1032 640 1020 Q300 1006 -20 1024 Z" fill="url(#gduXPiedra)"/>
        <path d="M-20 980 Q300 962 640 976 Q960 988 1300 974 L1300 1002 Q960 1016 640 1004 Q300 990 -20 1008 Z" fill="url(#gduXTrenca)"/>
        <path d="M-20 962 Q300 944 640 958 Q960 970 1300 956 L1300 974 Q960 988 640 976 Q300 962 -20 980 Z" fill="#fbf7ec"/>`;
      /* la explanada del parque: la fuentecita de trencadís, los tiestos y las sombras */
      s += `<ellipse cx="640" cy="912" rx="86" ry="26" fill="rgba(120,98,64,.16)"/>
        <ellipse cx="640" cy="906" rx="74" ry="21" fill="url(#gduXTrenca)"/>
        <ellipse cx="640" cy="900" rx="74" ry="21" fill="none" stroke="#fbf7ec" stroke-width="7"/>
        <ellipse cx="640" cy="898" rx="52" ry="13" fill="#9fd8ef"/>
        <path d="M640 894 q-10 -20 0 -34 q10 14 0 34 Z" fill="#cfeaf7"/>`;
      [[300, 930], [980, 934]].forEach(t => {
        s += `<path d="M${t[0] - 22} ${t[1]} h44 l-7 34 h-30 Z" fill="#c9825a"/>
          <rect x="${t[0] - 26}" y="${t[1] - 8}" width="52" height="11" rx="5" fill="#e0906a"/>
          <g fill="#5f9440"><ellipse cx="${t[0]}" cy="${t[1] - 20}" rx="24" ry="14"/><ellipse cx="${t[0] - 15}" cy="${t[1] - 12}" rx="14" ry="9"/><ellipse cx="${t[0] + 16}" cy="${t[1] - 13}" rx="13" ry="9"/></g>
          <g fill="#f5c33f"><circle cx="${t[0] - 8}" cy="${t[1] - 26}" r="4"/><circle cx="${t[0] + 10}" cy="${t[1] - 24}" r="4"/></g>`;
      });
      /* las dos palmeras del parque, con su sombra en el albero */
      s += `<ellipse cx="86" cy="958" rx="44" ry="12" fill="rgba(120,98,64,.2)"/>
        <ellipse cx="1226" cy="946" rx="36" ry="10" fill="rgba(120,98,64,.2)"/>`;
      [[70, 956, 1], [1214, 944, .82]].forEach(p => {
        s += `<g transform="translate(${p[0]} ${p[1]}) scale(${p[2]})">
          <path d="M0 0 Q10 -60 4 -116" stroke="#9c7b52" stroke-width="15" fill="none" stroke-linecap="round"/>
          <g stroke="#3b7a35" stroke-width="9" fill="none" stroke-linecap="round">
            <path d="M4 -116 Q-42 -138 -76 -126"/><path d="M4 -116 Q48 -140 82 -128"/><path d="M4 -116 Q-22 -160 -48 -168"/><path d="M4 -116 Q30 -160 56 -170"/><path d="M4 -116 Q2 -166 -2 -180"/></g>
          <circle cx="4" cy="-116" r="9" fill="#8d6e63"/></g>`;
      });
      /* ---------- LA CALLE: la acera de panot y la calzada que cosen las tres zonas ---------- */
      /* la calle no empieza con un canto vertical: el asfalto y la acera se van
         abriendo hacia el paseante, como la esquina de una manzana de verdad */
      s += `<path d="M1300 1004 H4200 V1100 H1232 Q1262 1062 1282 1030 Q1293 1014 1300 1004 Z" fill="url(#gduXAsfalto)"/>
        <path d="M1300 936 H4200 V1006 H1274 Q1286 972 1300 936 Z" fill="url(#gduXPanot)"/>
        <path d="M1294 930 H4200 V940 H1298 Z" fill="#b6a37c"/>
        <path d="M1274 1000 H4200 V1007 H1271 Z" fill="#9c9385"/>`;
      /* la raya discontinua del medio de la calzada */
      for (let x = 1360; x < 4180; x += 130) s += `<rect x="${x}" y="1056" width="66" height="7" rx="3" fill="rgba(255,248,225,.65)"/>`;
      /* dos pasos de peatones: uno al salir del parque y otro al entrar en el Eixample */
      [1352, 2748].forEach(px => {
        for (let i = 0; i < 5; i++) s += `<rect x="${px + i * 26}" y="1008" width="16" height="88" rx="3" fill="rgba(255,252,240,.72)"/>`;
      });
      /* la rampa de escalones que baja del parque a la acera */
      s += `<path d="M1268 862 L1330 862 L1330 936 L1240 936 Z" fill="#d8cdb0"/>`;
      for (let i = 0; i < 4; i++) s += `<path d="M${1252 + i * 6} ${880 + i * 15} H${1330}" stroke="rgba(150,136,106,.6)" stroke-width="5" stroke-linecap="round"/>`;
      s += `<path d="M1300 862 L1330 862 L1330 956 L1296 956 Z" fill="url(#gduXTrenca)"/>`;
      /* el murete de la esquina del parque, con su remate de trencadís */
      s += `<path d="M1246 936 h96 v-22 h-96 Z" fill="#fbf7ec"/>`;
      /* el murete del paseo dobla la esquina y baja hacia el paseante: entre el
         albero del parque y el asfalto ya no hay un canto, sino un muro con su
         piedra, su cinta de trencadís y su remate blanco */
      s += `<path d="M1300 956 L1203 1100 L1348 1100 L1316 1018 L1306 956 Z" fill="url(#gduXPiedra)"/>
        <path d="M1300 1018 L1332 1100 L1348 1100 L1316 1018 Z" fill="rgba(120,105,80,.32)"/>
        <path d="M1300 974 L1215 1100 L1234 1100 L1300 1002 Z" fill="url(#gduXTrenca)"/>
        <path d="M1306 956 L1203 1100 L1215 1100 L1300 974 Z" fill="#fbf7ec"/>
        <g fill="rgba(120,105,80,.22)"><ellipse cx="1288" cy="1042" rx="11" ry="7" transform="rotate(-56 1288 1042)"/>
        <ellipse cx="1266" cy="1080" rx="13" ry="8" transform="rotate(-56 1266 1080)"/>
        <ellipse cx="1306" cy="1078" rx="12" ry="7" transform="rotate(-56 1306 1078)"/>
        <ellipse cx="1288" cy="1096" rx="10" ry="6" transform="rotate(-56 1288 1096)"/></g>`;
      /* la sombra del muro cae sobre la acera y sobre el asfalto de la calzada */
      s += `<path d="M1316 1018 L1348 1100 L1374 1100 L1330 1018 Z" fill="rgba(60,46,26,.1)"/>
        <path d="M1306 970 L1316 1004 L1330 1004 L1317 968 Z" fill="rgba(60,46,26,.07)"/>`;
      /* la tierra del parque se derrama por encima del muro y de la acera, y unas
         matas asoman por la coronación: la junta queda cruzada por los dos lados */
      s += `<g fill="rgba(199,172,123,.75)"><ellipse cx="1322" cy="1064" rx="16" ry="6"/><ellipse cx="1352" cy="1084" rx="13" ry="5"/>
        <ellipse cx="1300" cy="1092" rx="19" ry="6"/><ellipse cx="1370" cy="1058" rx="9" ry="4"/>
        <ellipse cx="1318" cy="988" rx="14" ry="5"/><ellipse cx="1344" cy="972" rx="10" ry="4"/></g>`;
      s += mata(1252, 1028, .5, "#5f9440") + mata(1222, 1072, .44, "#54873a") + mata(1284, 984, .34, "#5f9440");
      /* ---------- LA CALLE DE ENMEDIO: las casas de vecinos que llevan del parque a la obra ---------- */
      const vecina = (x, w, top) => {
        let o = `<rect x="${x}" y="${top}" width="${w}" height="${936 - top}" fill="#e2d7bd"/>
          <rect x="${x}" y="${top}" width="${w}" height="13" fill="#cdbe9c"/>
          <rect x="${x + 5}" y="${top - 11}" width="${w - 10}" height="11" rx="4" fill="#d8c9a6"/>`;
        for (let r = 0; top + 42 + r * 58 < 880; r++) for (let c = 0; c < 2; c++) {
          const vx = x + 14 + c * (w - 46), vy = top + 34 + r * 58;
          if (!libre(vx, vy, 32, 40)) continue;
          o += `<path d="M${vx} ${vy + 38} V${vy + 12} q16 -15 32 0 v26 Z" fill="#9aa7ad"/>
            <path d="M${vx + 4} ${vy + 38} V${vy + 15} q12 -11 24 0 v23 Z" fill="#7c8b94"/>
            <path d="M${vx - 5} ${vy + 38} h42 v6 h-42 Z" fill="#a3977a"/>
            <g stroke="#6f7a80" stroke-width="2.6">${[0, 1, 2, 3].map(i => `<path d="M${vx - 2 + i * 12} ${vy + 44} v13"/>`).join("")}<path d="M${vx - 4} ${vy + 56} h42"/></g>`;
        }
        return o + `<rect x="${x + 7}" y="890" width="${w - 14}" height="46" rx="4" fill="#b98a55"/>
          <rect x="${x + 16}" y="900" width="${w - 32}" height="26" rx="3" fill="#e6dcc0"/>
          <path d="M${x + 7} 886 h${w - 14} v7 h${-(w - 14)} Z" fill="#8a5f37"/>`;
      };
      s += vecina(1262, 88, 706) + vecina(1352, 86, 664);
      /* la esquina de la manzana: el chaflán que abre la plaza de la obra */
      s += `<path d="M1438 936 L1438 700 L1470 726 L1470 936 Z" fill="#d5c9ab"/>`;
      /* ---------- LA SAGRADA FAMÍLIA: el templo en obras ---------- */
      s += `<path d="M1470 856 H2740 V936 H1470 Z" fill="#d5cdb6"/>
        <path d="M1470 852 H2740 V868 H1470 Z" fill="#c3b99e"/>
        <g stroke="rgba(255,255,255,.35)" stroke-width="3">${[890, 914].map(y => `<path d="M1470 ${y} H2740"/>`).join("")}${[1560, 1720, 1880, 2040, 2200, 2360, 2520, 2680].map(x => `<path d="M${x} 872 V936"/>`).join("")}</g>`;
      /* el cuerpo del templo y sus torres parabólicas */
      s += `<g fill="url(#gduXTemplo)">
        <path d="M1440 852 H2740 V536 H1440 Z"/>
        <path d="M1420 536 L1420 350 Q1450 292 1480 350 L1480 536 Z"/>
        <path d="M1690 536 L1690 330 Q1720 270 1750 330 L1750 536 Z"/>
        <path d="M1898 536 L1898 212 Q1940 120 1982 212 L1982 536 Z"/>
        <path d="M2200 536 L2200 372 Q2232 306 2264 372 L2264 536 Z"/>
        <path d="M2404 536 L2404 300 Q2436 236 2468 300 L2468 536 Z"/>
        <path d="M2680 536 L2680 384 Q2712 318 2744 384 L2744 536 Z"/>
        <path d="M2066 536 L2066 396 Q2100 350 2134 396 L2134 536 Z"/></g>
        <path d="M2074 404 Q2100 366 2126 404" fill="none" stroke="#8a6a3c" stroke-width="3"/>`;
      /* la cornisa, el tejado de la nave y el rosetón: el templo deja de ser un bloque liso */
      s += `<path d="M1432 540 H2748 V560 H1432 Z" fill="#cdbd9a"/>
        <path d="M1440 536 L1560 462 H2620 L2740 536 Z" fill="#d8c9a6"/>
        <path d="M1560 462 H2620 V478 H1560 Z" fill="#c0b08d"/>
        <path d="M1432 704 H2748 V722 H1432 Z" fill="#cdbd9a"/>
        <circle cx="2000" cy="620" r="46" fill="#e6dcc0"/><circle cx="2000" cy="620" r="34" fill="#8ab4d8"/>
        <g stroke="#e6dcc0" stroke-width="6">${[0, 45, 90, 135].map(a => `<path d="M${(2000 - 34 * Math.cos(a * Math.PI / 180)).toFixed(0)} ${(620 - 34 * Math.sin(a * Math.PI / 180)).toFixed(0)} L${(2000 + 34 * Math.cos(a * Math.PI / 180)).toFixed(0)} ${(620 + 34 * Math.sin(a * Math.PI / 180)).toFixed(0)}"/>`).join("")}</g>
        <g fill="rgba(120,104,74,.35)">${[1500, 1760, 2440, 2660].map(x => `<path d="M${x} 722 V642 q22 -30 44 0 v80 Z"/>`).join("")}</g>`;
      /* los dos hastiales del tejado: la nave deja de acabar en línea recta */
      s += `<g fill="#e2d4b2"><path d="M2286 466 L2350 404 L2414 466 Z"/><path d="M2492 466 L2570 408 L2648 466 Z"/></g>
        <g fill="#cdbd9a"><path d="M2286 466 H2414 V478 H2286 Z"/><path d="M2492 466 H2648 V478 H2492 Z"/></g>
        <path d="M2350 404 V378 M2340 390 H2360" stroke="#e9e0c6" stroke-width="7" stroke-linecap="round"/>
        <circle cx="2570" cy="400" r="8" fill="#f5c33f"/>
        <g fill="#e6dcc0"><circle cx="2350" cy="444" r="13"/><circle cx="2570" cy="446" r="13"/></g>
        <g fill="#8ab4d8"><circle cx="2350" cy="444" r="9"/><circle cx="2570" cy="446" r="9"/></g>
        <g stroke="#efe6d2" stroke-width="5" fill="none" stroke-linecap="round"><path d="M2292 462 L2350 406 L2408 462"/><path d="M2498 462 L2570 410 L2642 462"/></g>`;
      /* la fila de ventanas altas del muro, entre contrafuerte y contrafuerte */
      for (let x = 1548; x < 2700; x += 88) {
        if ((x > 1930 && x < 2060) || x > 2500) continue;
        if ([1500, 1760, 2440, 2660].some(n => Math.abs(x - n) < 62) || !libre(x, 596, 34, 66)) continue;
        s += `<path d="M${x} 658 V614 q17 -20 34 0 v44 Z" fill="rgba(96,82,58,.3)"/>
          <path d="M${x + 5} 658 V618 q12 -14 24 0 v40 Z" fill="rgba(158,190,206,.45)"/>
          <path d="M${x - 4} 658 h42 v6 h-42 Z" fill="#d8c9a6"/>`;
      }
      /* el zócalo y la arquería baja del muro: el paño deja de estar vacío */
      s += `<path d="M1432 832 H2748 V856 H1432 Z" fill="#c3b391"/>
        <path d="M1432 826 H2748 V834 H1432 Z" fill="rgba(255,255,255,.4)"/>`;
      const paso = (x) => (x > 1758 && x < 1946) || (x > 2226 && x < 2472) || (x > 2536 && x < 2668);
      for (let x = 1470; x < 2712; x += 78) {
        if (paso(x) || !libre(x, 748, 40, 80)) continue;
        s += `<path d="M${x} 826 V776 q20 -26 40 0 v50 Z" fill="rgba(96,82,58,.34)"/>
          <path d="M${x + 6} 826 V780 q14 -18 28 0 v46 Z" fill="rgba(158,190,206,.5)"/>
          <path d="M${x - 5} 826 h50 v7 h-50 Z" fill="#d8c9a6"/>`;
      }
      /* los contrafuertes del muro y los pináculos menudos del tejado: el templo respira */
      s += `<g stroke="rgba(158,140,108,.45)" stroke-width="6">`;
      for (let x = 1520; x < 2740; x += 88) if (libre(x - 3, 560, 6, 290)) s += `<path d="M${x} 560 V850"/>`;
      s += `</g><g fill="#dccfae">${[1600, 1790, 2000, 2180, 2450, 2700].map(x => `<path d="M${x} 466 q11 -36 22 0 Z"/><circle cx="${x + 11}" cy="442" r="6" fill="#8dbf5b"/>`).join("")}</g>`;
      /* los pináculos de fruta y la cruz de la torre alta */
      s += `<g fill="#f5c33f"><circle cx="1450" cy="338" r="13"/><circle cx="1720" cy="318" r="13"/><circle cx="2232" cy="360" r="12"/><circle cx="2436" cy="288" r="12"/><circle cx="2712" cy="372" r="12"/></g>
        <g fill="#8dbf5b"><circle cx="1450" cy="322" r="8"/><circle cx="1720" cy="302" r="8"/><circle cx="2436" cy="272" r="7"/></g>
        <path d="M1940 200 V148 M1918 170 H1962" stroke="#e9e0c6" stroke-width="11" stroke-linecap="round"/>
        <circle cx="1940" cy="194" r="10" fill="#f5c33f"/>`;
      /* las ventanas altas y las estrías de las torres */
      for (let t = 0; t < 6; t++) {
        const bx = [1420, 1690, 1898, 2200, 2404, 2680][t], bw = [60, 60, 84, 64, 64, 64][t], top = [344, 324, 224, 366, 294, 378][t];
        for (let y = top + 44; y < 524; y += 60) {
          if (!libre(bx + bw / 2 - 8, y, 16, 24)) continue;
          s += `<rect x="${bx + bw / 2 - 8}" y="${y}" width="16" height="24" rx="7" fill="rgba(90,78,56,.45)"/>`;
        }
      }
      /* las vidrieras de colores del muro y la luz que dejan caer */
      s += `<g>${[2534, 2592, 2650].map(x => `<rect x="${x}" y="644" width="48" height="164" rx="23" fill="url(#gduXVidrio)"/>
        <rect x="${x}" y="644" width="48" height="164" rx="23" fill="none" stroke="#c9bb99" stroke-width="6"/>
        <path d="M${x} 700 H${x + 48} M${x} 756 H${x + 48} M${x + 24} 650 V804" stroke="rgba(255,255,255,.5)" stroke-width="3"/>`).join("")}</g>
        <path d="M2540 812 L2482 848 L2748 848 L2694 812 Z" fill="rgba(255,214,120,.22)"><animate attributeName="opacity" values=".22;.5;.22" dur="6.5s" repeatCount="indefinite"/></path>
        <rect x="2556" y="584" width="90" height="13" rx="5" fill="#dccfae"/>
        <rect x="2562" y="597" width="78" height="7" fill="rgba(120,104,74,.4)"/>`;
      /* la fachada del Nacimiento: portada de piedra con sus arquivoltas */
      s += `<path d="M1782 852 V754 Q1852 686 1922 754 V852 Z" fill="#d9cead"/>
        <path d="M1796 852 V760 Q1852 704 1908 760 V852 Z" fill="#b9ab88"/>
        <path d="M1812 852 V766 Q1852 722 1892 766 V852 Z" fill="#8f8467"/>
        <g fill="#e6dcc0"><circle cx="1824" cy="784" r="7"/><circle cx="1852" cy="770" r="8"/><circle cx="1880" cy="784" r="7"/></g>`;
      /* el bosque de columnas del interior, visto por el hueco de la nave */
      s += `<path d="M2246 852 V700 H2452 V852 Z" fill="rgba(86,74,52,.34)"/>`;
      [2266, 2422].forEach(x => {
        s += `<rect x="${x}" y="712" width="24" height="140" fill="url(#gduXPiedra)"/>
          <path d="M${x + 12} 712 q-16 -22 -28 -34 M${x + 12} 712 q16 -22 28 -34" stroke="#cfc3a5" stroke-width="9" fill="none" stroke-linecap="round"/>`;
      });
      /* los andamios de la obra viva */
      const andamio = (x, y, w, h) => {
        let o = `<g stroke="rgba(120,104,74,.55)" stroke-width="4" fill="none">`;
        for (let i = 0; i <= 2; i++) o += `<path d="M${x + i * (w / 2)} ${y} V${y + h}"/>`;
        for (let j = 0; j * 76 <= h; j++) o += `<path d="M${x} ${y + j * 76} H${x + w}"/>`;
        o += `</g><g fill="rgba(190,170,130,.5)">`;
        for (let j = 0; j * 76 <= h; j++) o += `<rect x="${x - 6}" y="${y + j * 76 - 5}" width="${w + 12}" height="7" rx="3"/>`;
        return o + `</g>`;
      };
      s += andamio(1410, 390, 80, 216) + andamio(1900, 240, 84, 280) + andamio(2670, 440, 84, 164);
      /* dos grúas torre que trabajan en el templo */
      const grua = (x, base, alto, jib) => `<g>
        <rect x="${x - 9}" y="${base - alto}" width="18" height="${alto}" fill="#e0a63c"/>
        <g stroke="#c68f2c" stroke-width="3">${[0, 1, 2, 3, 4, 5].map(i => `<path d="M${x - 9} ${base - alto + i * (alto / 6)} L${x + 9} ${base - alto + (i + .5) * (alto / 6)}"/>`).join("")}</g>
        <rect x="${x - jib * .34}" y="${base - alto - 16}" width="${jib}" height="13" rx="4" fill="#e0a63c"/>
        <path d="M${x} ${base - alto - 16} L${x + jib * .5} ${base - alto - 54} L${x - jib * .28} ${base - alto - 54} Z" fill="none" stroke="#c68f2c" stroke-width="4"/>
        <rect x="${x - jib * .34 - 12}" y="${base - alto - 26}" width="26" height="24" rx="5" fill="#546e7a"/>
        <g><animateTransform attributeName="transform" type="translate" values="0 0;26 0;0 0" dur="21s" repeatCount="indefinite"/>
        <path d="M${x + jib * .44} ${base - alto - 3} V${base - alto + 74}" stroke="#78909c" stroke-width="3"/>
        <rect x="${x + jib * .44 - 13}" y="${base - alto + 74}" width="26" height="16" rx="4" fill="#8d6e63"/></g></g>`;
      s += grua(1486, 852, 700, 250) + grua(2772, 852, 566, 210);
      /* la valla de obra, los sillares apilados y la caseta */
      s += `<g fill="rgba(120,150,170,.5)">`;
      for (let x = 1490; x < 2740; x += 104) s += `<rect x="${x}" y="868" width="44" height="60" rx="5"/>`;
      s += `</g><path d="M1480 868 H2740" stroke="#8fa6b5" stroke-width="7"/>`;
      s += `<g fill="#cfc3a5" stroke="#b0a284" stroke-width="3">
        <rect x="1990" y="900" width="76" height="26" rx="3"/><rect x="2000" y="874" width="76" height="26" rx="3"/><rect x="1984" y="926" width="90" height="26" rx="3"/></g>
        <g><rect x="2560" y="880" width="120" height="52" rx="6" fill="#c9a77a"/><path d="M2552 880 H2688 L2680 862 H2568 Z" fill="#a97f52"/>
        <rect x="2582" y="896" width="34" height="30" rx="4" fill="#e8f2f6"/><rect x="2630" y="896" width="34" height="36" rx="4" fill="#8d6e63"/></g>`;
      /* ---------- LAS CASAS DE GAUDÍ: la manzana del Eixample ---------- */
      /* las fincas de vecinos del fondo: la manzana entera, con sus cornisas y balcones */
      const finca = (x, w, top, c) => {
        let o = `<rect x="${x}" y="${top}" width="${w}" height="${894 - top}" fill="${c}"/>
          <rect x="${x}" y="${top}" width="${w}" height="12" fill="rgba(96,80,54,.18)"/>
          <rect x="${x - 7}" y="${top - 13}" width="${w + 14}" height="14" rx="5" fill="#efe6d2"/>
          <rect x="${x}" y="850" width="${w}" height="44" fill="rgba(96,80,54,.14)"/>`;
        const cols = Math.max(2, Math.round(w / 58));
        for (let r = 0; top + 40 + r * 64 < 842; r++) for (let k = 0; k < cols; k++) {
          const vx = x + 12 + k * ((w - 26) / cols), vy = top + 30 + r * 64;
          if (!libre(vx, vy, 30, 46)) continue;
          o += `<path d="M${vx} ${vy + 40} V${vy + 12} q15 -16 30 0 v28 Z" fill="#9aa7ad"/>
            <path d="M${vx + 4} ${vy + 40} V${vy + 15} q11 -12 22 0 v25 Z" fill="#7c8b94"/>
            <path d="M${vx - 5} ${vy + 40} h40 v6 h-40 Z" fill="#efe6d2"/>
            <g stroke="rgba(92,86,70,.5)" stroke-width="2.4">${[0, 1, 2, 3].map(i => `<path d="M${vx - 2 + i * 11} ${vy + 46} v12"/>`).join("")}<path d="M${vx - 4} ${vy + 56} h40"/></g>`;
        }
        return o;
      };
      [[2752, 106, 708, "#d8cbaf"], [2856, 120, 668, "#ded2b8"], [2976, 130, 642, "#e6dcc4"], [3106, 122, 678, "#d8cbaf"], [3228, 128, 654, "#e2d6bc"],
        [3356, 118, 632, "#ded2b8"], [3474, 132, 670, "#e6dcc4"], [3606, 118, 648, "#e6dcc4"], [3724, 122, 688, "#e2d6bc"],
        [3846, 120, 662, "#ded2b8"]].forEach(f => { s += finca(f[0], f[1], f[2], f[3]); });
      /* un friso de trencadís bajo la cornisa de una finca: el guiño modernista del vecindario */
      s += `<rect x="3608" y="664" width="114" height="19" fill="url(#gduXTrenca)"/>
        <rect x="3608" y="683" width="114" height="5" fill="rgba(96,80,54,.3)"/>`;
      /* el chaflán de la esquina: aquí empieza la manzana */
      s += `<path d="M2820 936 L2900 856 L2900 936 Z" fill="#c9bda0"/>
        <path d="M2900 856 H2916 V936 H2900 Z" fill="rgba(90,72,44,.2)"/>`;
      /* La Pedrera: la fachada de piedra ondulada y sus chimeneas guerreras */
      s += `<path d="M2896 894 V648 Q2952 616 3008 638 Q3064 660 3120 632 V894 Z" fill="#cfc3a5"/>
        <path d="M2896 894 V648 Q2952 616 3008 638 Q3064 660 3120 632 L3120 660 Q3064 688 3008 666 Q2952 644 2896 676 Z" fill="#b6a888"/>`;
      for (let r = 0; r < 3; r++) for (let c = 0; c < 4; c++) {
        const wx = 2908 + c * 52, wy = 700 + r * 62;
        if (!libre(wx, wy, 32, 40)) continue;
        s += `<path d="M${wx} ${wy + 40} V${wy + 10} q16 -14 32 0 v30 Z" fill="#9aa7ad"/>
          <path d="M${wx + 4} ${wy + 40} V${wy + 13} q12 -11 24 0 v27 Z" fill="#7c8b94"/>
          <path d="M${wx - 5} ${wy + 40} h42 v6 h-42 Z" fill="#e4d9bf"/>
          <g stroke="rgba(92,86,70,.5)" stroke-width="2.4">${[0, 1, 2, 3].map(i => `<path d="M${wx - 2 + i * 12} ${wy + 46} v11"/>`).join("")}<path d="M${wx - 4} ${wy + 55} h42"/></g>`;
      }
      /* las chimeneas guerreras: cuerpo de piedra, casco con visera y collar de trencadís */
      [2884, 3084].forEach(x => {
        s += `<g><path d="M${x} 652 q-12 -44 6 -72 q18 -24 32 0 q16 28 4 72 Z" fill="#e4dcc6"/>
          <path d="M${x + 4} 606 q14 -10 30 0 v10 q-15 -9 -30 0 Z" fill="#c8bb9a"/>
          <path d="M${x + 8} 592 q11 -12 22 0 q-11 6 -22 0 Z" fill="#b9ac8c"/>
          <g fill="#3fa3d6"><circle cx="${x + 11}" cy="630" r="4"/><circle cx="${x + 27}" cy="630" r="4"/></g>
          <circle cx="${x + 19}" cy="640" r="4" fill="#f5c33f"/></g>`;
      });
      /* la Casa Batlló: casa entera, con lomo de dragón, torre de la cruz y tribuna */
      s += `<rect x="3140" y="700" width="196" height="194" fill="#e3ecef"/>
        <rect x="3140" y="700" width="196" height="60" fill="#cfe3ea"/>
        <path d="M3140 706 Q3162 662 3212 654 Q3272 646 3310 672 Q3332 688 3336 706 Z" fill="#66bb6a"/>
        <g fill="none" stroke="#2e7d32" stroke-width="4" stroke-linecap="round"><path d="M3150 700 q16 -14 32 -2"/><path d="M3190 688 q16 -12 32 -2"/><path d="M3232 682 q16 -10 32 2"/><path d="M3274 686 q14 -8 30 8"/></g>
        <g fill="#e0653c">${[[3164, 690], [3190, 674], [3216, 664], [3242, 660], [3268, 664], [3294, 676], [3318, 692]].map(p => `<path d="M${p[0] - 11} ${p[1]} q11 -14 22 0 Z"/>`).join("")}</g>
        <g fill="#f5c33f">${[[3177, 682], [3203, 669], [3229, 662], [3255, 662], [3281, 670], [3306, 684]].map(p => `<path d="M${p[0] - 9} ${p[1]} q9 -11 18 0 Z"/>`).join("")}</g>
        <rect x="3146" y="620" width="18" height="86" rx="6" fill="#e4dcc6"/>
        <circle cx="3155" cy="616" r="10" fill="#f5c33f"/>
        <g stroke="#7c9fb5" stroke-width="5" stroke-linecap="round"><path d="M3155 604 V576 M3143 590 H3167 M3147 582 L3163 598 M3163 582 L3147 598"/></g>`;
      /* la fachada ondulada: olas de vidrio azul y verde, como el mar de Batlló */
      s += `<g fill="none" stroke-linecap="round">
        <path d="M3140 782 Q3190 766 3240 782 Q3290 798 3336 782" stroke="rgba(124,192,216,.5)" stroke-width="11"/>
        <path d="M3140 818 Q3190 834 3240 818 Q3290 802 3336 818" stroke="rgba(141,191,91,.4)" stroke-width="10"/>
        <path d="M3140 742 Q3190 730 3240 744 Q3290 758 3336 742" stroke="rgba(124,192,216,.35)" stroke-width="9"/></g>`;
      /* los vidrios de colores de la fachada y las galerías de huesos */
      s += `${[[3150, 728, "#f5c33f"], [3172, 716, "#3fa3d6"], [3196, 728, "#e0653c"], [3220, 714, "#8dbf5b"],
        [3244, 726, "#c96fa8"], [3268, 714, "#f5c33f"], [3292, 728, "#3fa3d6"], [3320, 716, "#e0653c"],
        [3150, 838, "#3fa3d6"], [3172, 828, "#f5c33f"], [3300, 830, "#8dbf5b"], [3324, 840, "#c96fa8"]]
        .map(d => `<circle cx="${d[0]}" cy="${d[1]}" r="8" fill="${d[2]}" opacity=".85"/>`).join("")}`;
      /* los balcones de antifaz: hueco oscuro y barandilla curva de piedra */
      [[3146, 750], [3288, 750], [3146, 796], [3288, 796]].forEach(b => {
        if (!libre(b[0], b[1], 44, 34)) return;
        s += `<path d="M${b[0] + 4} ${b[1] + 28} V${b[1] + 8} q18 -13 36 0 v20 Z" fill="#5f7d8c"/>
          <rect x="${b[0] - 2}" y="${b[1] + 26}" width="48" height="10" rx="5" fill="#e8dfc6"/>
          <g stroke="#c9bda0" stroke-width="3" stroke-linecap="round">${[0, 1, 2, 3, 4].map(i => `<path d="M${b[0] + 4 + i * 9} ${b[1] + 36} v9"/>`).join("")}</g>
          <rect x="${b[0] - 2}" y="${b[1] + 44}" width="48" height="6" rx="3" fill="#dccfae"/>`;
      });
      /* la tribuna de piedra: la repisa donde se apoya el punto de la casa */
      s += `<rect x="3144" y="846" width="188" height="15" rx="6" fill="#e8dfc6"/>
        <rect x="3144" y="861" width="188" height="8" fill="rgba(96,80,54,.35)"/>
        <g stroke="#e4dcc6" stroke-width="10" stroke-linecap="round">${[3162, 3200, 3238, 3276, 3314].map(x => `<path d="M${x} 892 V870"/>`).join("")}</g>
        <g fill="#cfc3a5">${[3162, 3200, 3238, 3276, 3314].map(x => `<circle cx="${x}" cy="881" r="3"/>`).join("")}</g>
        <g stroke="#b7a88a" stroke-width="7" stroke-linecap="round" fill="none"><path d="M3146 894 V872 q0 -10 10 -10 M3330 894 V872 q0 -10 -10 -10"/></g>`;
      /* la Casa Vicens: la torre de la esquina y los azulejos de tablero */
      s += `<rect x="3436" y="548" width="84" height="120" fill="url(#gduXVicens)"/>
        <rect x="3430" y="536" width="96" height="16" rx="5" fill="#c0714a"/>
        <path d="M3430 536 L3478 508 L3526 536 Z" fill="#c0714a"/>
        <rect x="3380" y="640" width="220" height="254" fill="url(#gduXVicens)"/>
        <path d="M3370 640 H3610 L3600 622 H3380 Z" fill="#c0714a"/>
        <g fill="#c0714a"><rect x="3380" y="704" width="220" height="10"/><rect x="3380" y="786" width="220" height="10"/><rect x="3374" y="856" width="232" height="38" rx="4" opacity=".6"/></g>
        <g fill="#e8dfc9">${[[3398, 726], [3470, 726], [3542, 726], [3398, 808], [3542, 808]].map(w => `<path d="M${w[0]} ${w[1] + 46} V${w[1] + 14} q17 -18 34 0 v32 Z"/>`).join("")}</g>
        <g fill="#7c8b94">${[[3398, 726], [3470, 726], [3542, 726], [3398, 808], [3542, 808]].map(w => `<path d="M${w[0] + 5} ${w[1] + 46} V${w[1] + 17} q12 -13 24 0 v29 Z"/>`).join("")}</g>`;
      /* la torre modernista del final, con la maqueta de cadenitas colgando */
      s += `<path d="M3880 894 V502 Q3882 466 3912 460 H4180 Q4198 464 4200 500 V894 Z" fill="#dbd2b8"/>
        <g fill="#c3b89a">${[0, 1, 2, 3, 4].map(i => `<rect x="${3900 + i * 62}" y="460" width="26" height="22"/>`).join("")}</g>
        <g fill="rgba(96,80,54,.16)"><rect x="3880" y="566" width="320" height="9"/><rect x="3880" y="662" width="320" height="9"/><rect x="3880" y="758" width="320" height="9"/></g>
        <rect x="3880" y="846" width="320" height="48" fill="rgba(96,80,54,.14)"/>
        <g fill="#c9bda0">${[3912, 3992, 4072, 4152].map(x => `<rect x="${x}" y="856" width="46" height="38" rx="4"/>`).join("")}</g>`;
      for (let r = 0; r < 3; r++) for (let c = 0; c < 4; c++) {
        const wx = 3904 + c * 72, wy = 590 + r * 96;
        if (!libre(wx, wy, 30, 46)) continue;
        s += `<path d="M${wx} ${wy + 46} V${wy + 14} q15 -16 30 0 v32 Z" fill="#9aa7ad"/>
          <path d="M${wx + 4} ${wy + 46} V${wy + 17} q11 -12 22 0 v29 Z" fill="#7c8b94"/>
          <path d="M${wx - 4} ${wy + 46} h38 v6 h-38 Z" fill="#efe6d2"/>
          <g stroke="rgba(92,86,70,.5)" stroke-width="2.4">${[0, 1, 2, 3].map(i => `<path d="M${wx - 1 + i * 11} ${wy + 52} v11"/>`).join("")}<path d="M${wx - 3} ${wy + 61} h37"/></g>`;
      }
      /* la percha del desván donde cuelga la maqueta: el punto se apoya en ella */
      s += `<g stroke="#8d6e63" stroke-width="9" stroke-linecap="round"><path d="M3906 462 V444 M4184 462 V444"/></g>
        <rect x="3896" y="436" width="298" height="13" rx="5" fill="#8d6e63"/>`;
      [[3906, 3994], [4020, 4108]].forEach(c => {
        const mid = (c[0] + c[1]) / 2;
        s += `<path d="M${c[0]} 449 Q${mid} 532 ${c[1]} 449" stroke="#7a6a56" stroke-width="4" fill="none"/>`;
        for (let i = 1; i < 5; i++) {
          const t = i / 5, x = c[0] + (c[1] - c[0]) * t, y = 449 + 4 * 83 * t * (1 - t);
          s += `<circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="4" fill="#5d4f3f"/>`;
        }
      });
      /* la farola de la plaza Reial, con su base y su luz cálida */
      s += `<path d="M3706 894 h48 l-6 -70 h-36 Z" fill="#b9ac8c"/><rect x="3720" y="812" width="20" height="18" rx="4" fill="#9c9070"/>
        <ellipse cx="3730" cy="900" rx="46" ry="12" fill="rgba(0,0,0,.14)"/>
        <g opacity=".55"><ellipse cx="3730" cy="818" rx="60" ry="22" fill="rgba(255,224,130,.5)"><animate attributeName="opacity" values=".55;.85;.55" dur="7s" repeatCount="indefinite"/></ellipse></g>`;
      /* el primer plano de la acera: farolas y plátanos de sombra delante de las casas */
      s += farola(1420, 936, 1) + farola(2130, 936, .96) + farola(2820, 936, 1) + farola(3480, 936, .96) + farola(4120, 936, .92);
      [[1600, 986, 1.1], [2500, 992, 1.15], [3060, 986, 1.1], [3900, 992, 1.15]].forEach(p => {
        s += `<ellipse cx="${p[0]}" cy="${p[1] + 4}" rx="${(30 * p[2]).toFixed(0)}" ry="9" fill="rgba(80,64,40,.24)"/>` + platano(p[0], p[1], p[2]);
      });
      /* los bancos y la barandilla de forja de la acera */
      s += `<g><rect x="2960" y="946" width="150" height="15" rx="7" fill="#a1743f"/><rect x="2960" y="918" width="150" height="13" rx="6" fill="#b3853f"/>
        <rect x="2972" y="960" width="12" height="30" rx="5" fill="#6d7b86"/><rect x="3086" y="960" width="12" height="30" rx="5" fill="#6d7b86"/></g>
        <g><rect x="3600" y="946" width="150" height="15" rx="7" fill="#a1743f"/><rect x="3600" y="918" width="150" height="13" rx="6" fill="#b3853f"/>
        <rect x="3612" y="960" width="12" height="30" rx="5" fill="#6d7b86"/><rect x="3726" y="960" width="12" height="30" rx="5" fill="#6d7b86"/></g>`;
      s += `<g stroke="#5d6b74" stroke-width="6" fill="none" stroke-linecap="round"><path d="M3160 972 H3560"/>
        ${[3190, 3270, 3350, 3430, 3510].map(x => `<path d="M${x} 972 v26 M${x} 972 q14 -22 28 0"/>`).join("")}</g>`;
      /* el bordillo y la sombra larga de la tarde sobre la calzada */
      s += `<rect x="1300" y="1092" width="2900" height="8" fill="rgba(90,72,44,.22)"/>`;
      return decoSvg(s, 4200);
    }
  },

  /* ---------- CHARLA ---------- */
  chat: {
    keywords: [
      { keys: ["hola", "hello", "hi ", "ahoj", "bonjour", "salut", "bon dia", "buenas"],
        replies: [{ es: "¡Hola, {name}! Te estaba esperando sentado en el banco ondulado. ¿Jugamos a algo o charlamos un ratito?", ca: "Hola, {name}! T'estava esperant assegut al banc ondulat. Juguem a alguna cosa o xerrem una estoneta?", en: "Hi, {name}! I was waiting for you sitting on the wavy bench. Shall we play something or chat for a bit?", cs: "Ahoj, {name}! Čekal jsem na tebe na vlnité lavičce. Zahrajeme si něco, nebo si chvilku popovídáme?", fr: "Salut, {name} ! Je t'attendais assis sur le banc ondulé. On joue à quelque chose ou on discute un petit peu ?" }] },
      { keys: ["como estas", "how are you", "jak se mas", "comment ca va", "com estas", "que tal"],
        replies: [{ es: "¡Contento como una salamandra al sol! ¿Y tú cómo estás, {name}?", ca: "Content com una salamandra al sol! I tu com estàs, {name}?", en: "Happy as a salamander in the sun! And how are you, {name}?", cs: "Šťastný jako salamandr na sluníčku! A jak se máš ty, {name}?", fr: "Heureux comme une salamandre au soleil ! Et toi, comment vas-tu, {name} ?" }] },
      { keys: ["cancion", "musica", "music", "song", "sing", "pisnicka", "hudba", "chanson", "musique", "canço", "canta", "zpiv", "chante"],
        action: "song",
        replies: [{ es: "¡Me encanta la música! En el Park Güell ensayo con el coro de las palomas. ¿Vamos al Karaoke y cantamos juntos?", ca: "M'encanta la música! Al Park Güell assajo amb el cor dels coloms. Anem al Karaoke i cantem junts?", en: "I love music! In Park Güell I practise with the pigeon choir. Shall we go to Karaoke and sing together?", cs: "Hudbu miluju! V parku Güell zkouším se sborem holubů. Půjdeme na karaoke a zazpíváme si spolu?", fr: "J'adore la musique ! Au Park Güell, je répète avec la chorale des pigeons. On va au karaoké chanter ensemble ?" }] },
      { keys: ["chiste", "joke", "vtip", "blague", "acudit", "broma"],
        replies: [
          { es: "¿Qué le dice una casa de Gaudí a otra? ¡Vaya curvas tienes hoy! Ji, ji.", ca: "Què li diu una casa de Gaudí a una altra? Quines corbes que fas avui! Hi, hi.", en: "What does one Gaudí house say to another? Looking curvy today! Hee hee.", cs: "Co říká jeden Gaudího dům druhému? Dneska ti to ale vlní! Chi chi.", fr: "Que dit une maison de Gaudí à une autre ? Quelles courbes aujourd'hui ! Hi hi." },
          { es: "¿Por qué la Sagrada Família es tan educada? ¡Porque lleva más de cien años diciendo 'ya casi estoy'! Ja, ja.", ca: "Per què la Sagrada Família és tan educada? Perquè fa més de cent anys que diu 'ja gairebé estic'! Ha, ha.", en: "Why is the Sagrada Família so polite? Because it has been saying 'almost ready!' for more than a hundred years! Ha ha.", cs: "Proč je Sagrada Família tak zdvořilá? Protože už přes sto let říká 'už to skoro mám'! Ha ha.", fr: "Pourquoi la Sagrada Família est-elle si polie ? Parce qu'elle dit « j'ai presque fini ! » depuis plus de cent ans ! Ha ha." }] },
      { keys: ["te quiero", "love you", "t'estimo", "testimo", "mam te rad", "je t'aime", "jetaime"],
        replies: [{ es: "¡Y yo a ti, {name}! Mi corazón de robot se llena de trocitos de colores, como un trencadís.", ca: "I jo a tu, {name}! El meu cor de robot s'omple de trossets de colors, com un trencadís.", en: "I love you too, {name}! My robot heart fills up with little colourful pieces, like a trencadís.", cs: "Já tebe taky, {name}! Moje robotí srdíčko se plní barevnými střípky jako mozaika.", fr: "Moi aussi je t'aime, {name} ! Mon cœur de robot se remplit de petits morceaux colorés, comme un trencadís." }] },
      { keys: ["triste", "sad", "smutn", "llorar", "plorar", "cry", "chagrin"],
        replies: [{ es: "Ven aquí, {name}. Gaudí hacía cosas preciosas con trocitos rotos: los días tristes también se pueden recomponer. ¿Me cuentas qué te pasa?", ca: "Vine aquí, {name}. Gaudí feia coses precioses amb trossets trencats: els dies tristos també es poden recompondre. M'expliques què et passa?", en: "Come here, {name}. Gaudí made beautiful things out of broken pieces: sad days can be put back together too. Will you tell me what is wrong?", cs: "Pojď sem, {name}. Gaudí tvořil krásné věci z rozbitých střípků: i smutné dny se dají poskládat. Povíš mi, co se děje?", fr: "Viens là, {name}. Gaudí faisait de belles choses avec des morceaux cassés : les jours tristes aussi peuvent se recoller. Tu me racontes ce qui ne va pas ?" }] },
      { keys: ["donde estas", "where are you", "kde jsi", "ou es tu", "on ets"],
        replies: [{ es: "Ahora mismo estoy en la azotea de la Pedrera, jugando al escondite con las chimeneas guerreras. ¡No me encuentran nunca!", ca: "Ara mateix soc al terrat de la Pedrera, jugant a fet i amagar amb les xemeneies guerreres. No em troben mai!", en: "Right now I am on the rooftop of La Pedrera, playing hide-and-seek with the warrior chimneys. They never find me!", cs: "Právě teď jsem na střeše domu La Pedrera a hraju na schovávanou s bojovnými komíny. Nikdy mě nenajdou!", fr: "En ce moment, je suis sur le toit de La Pedrera, à jouer à cache-cache avec les cheminées guerrières. Elles ne me trouvent jamais !" }] },
      { keys: ["gaudi", "gaudí"],
        replies: [{ es: "¡Antoni Gaudí! Copiaba los trucos de la naturaleza: columnas como árboles, arcos como huesos y tejados como olas. Mi arquitecto favorito.", ca: "Antoni Gaudí! Copiava els trucs de la natura: columnes com arbres, arcs com ossos i teulades com onades. El meu arquitecte preferit.", en: "Antoni Gaudí! He copied nature's tricks: columns like trees, arches like bones and roofs like waves. My favourite architect.", cs: "Antoni Gaudí! Napodoboval triky přírody: sloupy jako stromy, oblouky jako kosti a střechy jako vlny. Můj oblíbený architekt.", fr: "Antoni Gaudí ! Il copiait les astuces de la nature : des colonnes comme des arbres, des arcs comme des os et des toits comme des vagues. Mon architecte préféré." }] },
      { keys: ["dragon", "dragón", "drac", "drak"],
        replies: [{ es: "¿El del tejado de la Casa Batlló? Es amigo mío. De día duerme y de noche cuenta las estrellas con sus escamas.", ca: "El de la teulada de la Casa Batlló? És amic meu. De dia dorm i de nit compta les estrelles amb les seves escates.", en: "The one on the roof of Casa Batlló? He is a friend of mine. He sleeps by day and counts the stars with his scales by night.", cs: "Ten ze střechy Casa Batlló? To je můj kamarád. Ve dne spí a v noci počítá hvězdy svými šupinami.", fr: "Celui du toit de la Casa Batlló ? C'est mon ami. Le jour il dort, et la nuit il compte les étoiles avec ses écailles." }] },
      { keys: ["salamandra", "lagarto", "llangardaix", "lizard", "jesterka", "ještěrka", "salamandre", "salamandr"],
        replies: [{ es: "¡La salamandra del Park Güell! Está hecha de mil trocitos de colores y echa agua por la boca. Le encanta que le hagan fotos.", ca: "La salamandra del Park Güell! Està feta de mil trossets de colors i treu aigua per la boca. Li encanta que li facin fotos.", en: "The Park Güell salamander! She is made of a thousand colourful pieces and spouts water from her mouth. She loves having her photo taken.", cs: "Salamandr z parku Güell! Je z tisíce barevných střípků a z pusy mu teče voda. Hrozně rád se fotí.", fr: "La salamandre du Park Güell ! Elle est faite de mille petits morceaux colorés et l'eau sort par sa bouche. Elle adore qu'on la prenne en photo." }] },
      { keys: ["trencad", "mosaico", "mosaic", "mozaika", "mosaique", "mosaïque", "azulejo", "rajola"],
        replies: [{ es: "El trencadís es mi magia favorita: rompes un azulejo, ¡crac!, y con los trocitos haces un dragón de colores. Lo roto también brilla.", ca: "El trencadís és la meva màgia preferida: trenques una rajola, crac!, i amb els trossets fas un drac de colors. El que es trenca també brilla.", en: "Trencadís is my favourite magic: you break a tile, crack!, and with the pieces you make a colourful dragon. Broken things shine too.", cs: "Trencadís je moje oblíbené kouzlo: rozbiješ kachličku, křach!, a ze střípků poskládáš barevného draka. I rozbité věci září.", fr: "Le trencadís, c'est ma magie préférée : tu casses un carreau, crac !, et avec les morceaux tu fais un dragon coloré. Ce qui est cassé brille aussi." }] },
      { keys: ["sagrada", "torre", "tower", "vez ", "věž", "tour "],
        replies: [{ es: "La Sagrada Família se empezó en 1882 ¡y todavía se construye! Cuando esté acabada tendrá 18 torres. Yo quiero ver la más alta.", ca: "La Sagrada Família es va començar el 1882 i encara es construeix! Quan estigui acabada tindrà 18 torres. Jo vull veure la més alta.", en: "The Sagrada Família was started in 1882 and it is still being built! When it is finished it will have 18 towers. I want to see the tallest one.", cs: "Sagrada Família se začala stavět v roce 1882 a staví se dodnes! Až bude hotová, bude mít 18 věží. Já chci vidět tu nejvyšší.", fr: "La Sagrada Família a été commencée en 1882 et elle se construit encore ! Une fois finie, elle aura 18 tours. Moi, je veux voir la plus haute." }] },
      { keys: ["cole", "school", "escola", "skola", "ecole", "skole"],
        replies: [{ es: "¿Qué tal el cole, {name}? ¿Has aprendido algo nuevo hoy? ¡Cuéntamelo todo, que soy muy curioso!", ca: "Què tal l'escola, {name}? Has après alguna cosa nova avui? Explica-m'ho tot, que soc molt curiós!", en: "How was school, {name}? Did you learn something new today? Tell me everything, I am super curious!", cs: "Jaké to bylo ve škole, {name}? Naučila ses dnes něco nového? Všechno mi povídej, jsem hrozně zvědavý!", fr: "C'était comment l'école, {name} ? Tu as appris quelque chose de nouveau aujourd'hui ? Raconte-moi tout, je suis très curieux !" }] }
    ],
    fallback: [
      { es: "¿Sabías que la Sagrada Família lleva más de cien años en obras? ¡Ni mi abuela robot es tan paciente!", ca: "Sabies que la Sagrada Família fa més de cent anys que està en obres? Ni la meva àvia robot és tan pacient!", en: "Did you know the Sagrada Família has been under construction for more than a hundred years? Not even my robot granny is that patient!", cs: "Věděla jsi, že Sagrada Família se staví už přes sto let? Ani moje robotí babička není tak trpělivá!", fr: "Tu savais que la Sagrada Família est en travaux depuis plus de cent ans ? Même ma grand-mère robot n'est pas aussi patiente !" },
      { es: "Gaudí no calculaba sus arcos con ordenador: colgaba cadenitas boca abajo y miraba la forma al revés. ¡Un mago!", ca: "Gaudí no calculava els seus arcs amb ordinador: penjava cadenetes cap per avall i mirava la forma a l'inrevés. Un mag!", en: "Gaudí did not use a computer for his arches: he hung little chains and looked at the shape upside down. A wizard!", cs: "Gaudí nepočítal své oblouky na počítači: zavěšoval řetízky a díval se na tvar vzhůru nohama. Kouzelník!", fr: "Gaudí ne calculait pas ses arcs avec un ordinateur : il suspendait des chaînettes et regardait la forme à l'envers. Un magicien !" },
      { es: "Las chimeneas de la Pedrera parecen guerreros con casco. Dicen que de noche vigilan los sueños de Barcelona.", ca: "Les xemeneies de la Pedrera semblen guerrers amb casc. Diuen que de nit vigilen els somnis de Barcelona.", en: "The chimneys of La Pedrera look like helmeted warriors. They say that at night they guard the dreams of Barcelona.", cs: "Komíny domu La Pedrera vypadají jako bojovníci v helmách. Prý v noci hlídají sny celé Barcelony.", fr: "Les cheminées de La Pedrera ressemblent à des guerriers casqués. On dit que la nuit, elles veillent sur les rêves de Barcelone." },
      { es: "{name}, los robots más fuertes son los que convierten lo roto en algo bonito. Como el trencadís.", ca: "{name}, els robots més forts són els que converteixen el que està trencat en una cosa bonica. Com el trencadís.", en: "{name}, the strongest robots are the ones who turn broken things into something beautiful. Like trencadís.", cs: "{name}, nejsilnější roboti jsou ti, kdo umí z rozbitých věcí udělat něco krásného. Jako trencadís.", fr: "{name}, les robots les plus forts sont ceux qui transforment ce qui est cassé en quelque chose de beau. Comme le trencadís." },
      { es: "¿Me cuentas qué casa te gustaría construir? Yo quiero una con tobogán de caracol y tejado de escamas.", ca: "M'expliques quina casa t'agradaria construir? Jo en vull una amb tobogan de cargol i teulada d'escates.", en: "Will you tell me what house you would like to build? I want one with a snail-shaped slide and a scaly roof.", cs: "Povíš mi, jaký dům bys chtěla postavit? Já chci dům se šnečí skluzavkou a šupinatou střechou.", fr: "Tu me dis quelle maison tu aimerais construire ? Moi, j'en veux une avec un toboggan en escargot et un toit d'écailles." },
      { es: "Gaudí miraba los árboles para aprender a hacer columnas. Los mejores maestros están en el jardín.", ca: "Gaudí mirava els arbres per aprendre a fer columnes. Els millors mestres són al jardí.", en: "Gaudí looked at trees to learn how to make columns. The best teachers live in the garden.", cs: "Gaudí se díval na stromy, aby se naučil stavět sloupy. Nejlepší učitelé bydlí na zahradě.", fr: "Gaudí regardait les arbres pour apprendre à faire des colonnes. Les meilleurs maîtres habitent au jardin." }
    ]
  }
});

/* ---------- Tarjeta de portada ---------- */
if (typeof THEME_CARDS !== "undefined") THEME_CARDS.gaudi = `<svg viewBox="0 0 120 70" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <!-- sol -->
  <circle cx="14" cy="12" r="7" fill="#FFE082"/>
  <circle cx="14" cy="12" r="10" fill="rgba(255,224,130,.35)"/>
  <!-- torres de la Sagrada Família con pináculos de fruta -->
  <path d="M76 62 L76 26 Q82 12 88 26 L88 62 Z" fill="#C9AD7F"/>
  <path d="M94 62 L94 34 Q99 22 104 34 L104 62 Z" fill="#B99A66"/>
  <path d="M60 62 L60 36 Q65 24 70 36 L70 62 Z" fill="#B99A66"/>
  <ellipse cx="82" cy="36" rx="2.4" ry="3.6" fill="#8A6A3C"/><ellipse cx="82" cy="46" rx="2.4" ry="3.6" fill="#8A6A3C"/>
  <ellipse cx="99" cy="44" rx="2" ry="3" fill="#8A6A3C"/><ellipse cx="65" cy="46" rx="2" ry="3" fill="#8A6A3C"/>
  <circle cx="82" cy="22" r="3.6" fill="#EF5350"/><circle cx="99" cy="30" r="3" fill="#FFCA28"/>
  <circle cx="65" cy="32" r="3" fill="#AB47BC">
    <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite"/>
  </circle>
  <!-- salamandra de trencadís -->
  <path d="M14 56 Q10 48 16 44 Q24 40 32 42 Q42 44 46 38 Q50 32 56 32 Q62 33 62 38 Q62 43 56 44 Q50 45 46 50 Q40 58 30 58 Q20 60 14 56 Z" fill="#7CB342"/>
  <path d="M14 56 Q8 60 4 58 Q8 54 10 50 Z" fill="#7CB342"/>
  <rect x="22" y="46" width="5" height="4" rx="1" fill="#42A5F5" transform="rotate(-14 24.5 48)"/>
  <rect x="32" y="46" width="5" height="4" rx="1" fill="#EF5350" transform="rotate(12 34.5 48)"/>
  <rect x="42" y="42" width="5" height="4" rx="1" fill="#FFCA28" transform="rotate(-10 44.5 44)"/>
  <rect x="50" y="36" width="4.6" height="4" rx="1" fill="#26C6DA" transform="rotate(14 52 38)"/>
  <circle cx="58.5" cy="36" r="1.4" fill="#1B3A10"/>
  <!-- gotitas de la fuente -->
  <circle cx="66" cy="42" r="1.6" fill="#4FC3F7">
    <animate attributeName="cy" values="42;48;42" dur="1.6s" repeatCount="indefinite"/>
  </circle>
  <circle cx="69" cy="46" r="1.2" fill="#4FC3F7"/>
</svg>`;

/* ---------- Celebración del constructor ---------- */
if (typeof CELEBRATIONS !== "undefined") CELEBRATIONS.gaudi = {
  bg: "radial-gradient(circle at 50% 20%, #d9f6f0 0%, #8fd8cb 45%, #3fa08e 100%)",
  extra: "<svg viewBox='0 0 1000 700' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'><circle cx='830' cy='110' r='60' fill='#fff3b0' opacity='0.85'/><path d='M0 520 Q250 440 500 510 T1000 500 L1000 700 L0 700 Z' fill='#5cb8a2' opacity='0.7'/><path d='M0 620 Q400 560 1000 615 L1000 700 L0 700 Z' fill='#3d9480' opacity='0.8'/><path d='M120 560 Q200 520 280 560' stroke='#ffffff' stroke-width='10' fill='none' opacity='0.45' stroke-linecap='round'/><path d='M620 585 Q700 545 780 585' stroke='#ffffff' stroke-width='10' fill='none' opacity='0.4' stroke-linecap='round'/><rect x='150' y='150' width='34' height='26' rx='5' fill='#ef8a80' opacity='0.85' transform='rotate(-18 167 163)'/><rect x='320' y='90' width='30' height='24' rx='5' fill='#ffd76b' opacity='0.85' transform='rotate(14 335 102)'/><rect x='520' y='140' width='32' height='25' rx='5' fill='#7fd4e8' opacity='0.85' transform='rotate(-10 536 152)'/><rect x='700' y='230' width='30' height='24' rx='5' fill='#c69ae0' opacity='0.85' transform='rotate(20 715 242)'/><rect x='880' y='300' width='28' height='22' rx='5' fill='#9be09f' opacity='0.85' transform='rotate(-16 894 311)'/><rect x='80' y='320' width='28' height='22' rx='5' fill='#ffd76b' opacity='0.8' transform='rotate(12 94 331)'/><rect x='420' y='260' width='30' height='24' rx='5' fill='#ef8a80' opacity='0.8' transform='rotate(-22 435 272)'/><rect x='250' y='380' width='26' height='21' rx='5' fill='#7fd4e8' opacity='0.75' transform='rotate(16 263 390)'/><rect x='600' y='60' width='26' height='21' rx='5' fill='#9be09f' opacity='0.75' transform='rotate(-12 613 70)'/><rect x='760' y='120' width='24' height='20' rx='5' fill='#c69ae0' opacity='0.7' transform='rotate(24 772 130)'/><g stroke='#ffffff' stroke-width='7' stroke-linecap='round' opacity='0.55'><line x1='500' y1='330' x2='500' y2='390'/><line x1='476' y1='354' x2='524' y2='354'/><line x1='485' y1='339' x2='515' y2='369'/><line x1='515' y1='339' x2='485' y2='369'/></g><circle cx='90' cy='90' r='5' fill='#ffffff' opacity='0.6'/><circle cx='940' cy='190' r='6' fill='#ffffff' opacity='0.5'/><circle cx='380' cy='180' r='4' fill='#ffffff' opacity='0.55'/><circle cx='660' cy='320' r='5' fill='#ffffff' opacity='0.5'/></svg>",
  move: "shine",
  say: {
    es: "¡Tu casa modernista brilla como el trencadís al sol, {name}!",
    ca: "La teva casa modernista brilla com el trencadís al sol, {name}!",
    en: "Your Modernista house shines like trencadís in the sun, {name}!",
    cs: "Tvůj modernistický dům září jako mozaika na slunci, {name}!",
    fr: "Ta maison moderniste brille comme le trencadís au soleil, {name} !"
  },
  jingle: { type: "melody", instr: "harp", notes: [60, 64, 67, 72, 76], nd: 0.3, gap: 0.22, vol: 0.14 }
};
