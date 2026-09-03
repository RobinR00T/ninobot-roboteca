"use strict";
/* ============================================================
   Contenido de PIRATAS (parte B): historias ramificadas,
   canciones, traductor, mapa de exploración (con paisaje)
   y charla.
   ============================================================ */

Object.assign(THEMES.piratas.content, {

  /* ---------- HISTORIAS (ramifican de verdad) ---------- */
  stories: [
    {
      id: "mapa", emoji: "🗺️", start: "n1",
      title: { es: "El mapa del tesoro", ca: "El mapa del tresor", en: "The Treasure Map", cs: "Mapa pokladu", fr: "La carte au trésor" },
      nodes: {
        n1: {
          text: { es: "En la playa aparece una botella con un mapa dentro: ¡hay un tesoro escondido en la Isla Coco! ¿Cómo vamos hasta allí, {name}?", ca: "A la platja apareix una ampolla amb un mapa a dins: hi ha un tresor amagat a l'Illa Coco! Com hi anem, {name}?", en: "A bottle washes up on the beach with a map inside: there is a treasure hidden on Coco Island! How do we get there, {name}?", cs: "Na pláž připluje láhev a v ní mapa: na Kokosovém ostrově je ukrytý poklad! Jak se tam dostaneme, {name}?", fr: "Sur la plage apparaît une bouteille avec une carte dedans : un trésor est caché sur l'île Coco ! Comment y va-t-on, {name} ?" },
          choices: [
            { t: { es: "¡En nuestro barco, a toda vela!", ca: "Amb el nostre vaixell, a tota vela!", en: "On our ship, full sail ahead!", cs: "Naší lodí, plnou plachtou vpřed!", fr: "Sur notre bateau, toutes voiles dehors !" }, go: "n2a" },
            { t: { es: "Le pedimos ayuda al delfín guía", ca: "Demanem ajuda al dofí guia", en: "We ask the guide dolphin for help", cs: "Poprosíme o pomoc delfína průvodce", fr: "On demande de l'aide au dauphin guide" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "¡A toda vela! El vigía grita desde la cofa: hay dos caminos. Uno pasa por la Isla de las Gaviotas y el otro por el Mar de las Estrellas.", ca: "A tota vela! El vigia crida des de la cofa: hi ha dos camins. Un passa per l'Illa de les Gavines i l'altre pel Mar de les Estrelles.", en: "Full sail ahead! The lookout shouts from the crow's nest: there are two ways. One goes past Seagull Island and the other through the Starfish Sea.", cs: "Plnou plachtou vpřed! Hlídka volá z koše na stěžni: jsou dvě cesty. Jedna vede kolem Rackova ostrova a druhá přes Hvězdicové moře.", fr: "Toutes voiles dehors ! La vigie crie depuis la hune : il y a deux chemins. L'un passe par l'île des Mouettes et l'autre par la mer des Étoiles." },
          choices: [
            { t: { es: "Por la Isla de las Gaviotas", ca: "Per l'Illa de les Gavines", en: "Past Seagull Island", cs: "Kolem Rackova ostrova", fr: "Par l'île des Mouettes" }, go: "n3a" },
            { t: { es: "Por el Mar de las Estrellas", ca: "Pel Mar de les Estrelles", en: "Through the Starfish Sea", cs: "Přes Hvězdicové moře", fr: "Par la mer des Étoiles" }, go: "n3b" }
          ]
        },
        n2b: {
          text: { es: "El delfín os guía silbando canciones. De camino encontráis a una tortuga muy mayor que se ha despistado y no encuentra su playa.", ca: "El dofí us guia xiulant cançons. Pel camí trobeu una tortuga molt gran que s'ha despistat i no troba la seva platja.", en: "The dolphin guides you, whistling songs. On the way you meet a very old turtle who got distracted and cannot find her beach.", cs: "Delfín vás vede a píská si písničky. Cestou potkáte hodně starou želvu, která se zatoulala a nemůže najít svou pláž.", fr: "Le dauphin vous guide en sifflant des chansons. En chemin, vous rencontrez une très vieille tortue qui s'est égarée et ne retrouve plus sa plage." },
          choices: [
            { t: { es: "La acompañamos a su playa", ca: "L'acompanyem a la seva platja", en: "We walk her home to her beach", cs: "Doprovodíme ji na její pláž", fr: "On l'accompagne jusqu'à sa plage" }, go: "n3c" },
            { t: { es: "Seguimos, ¡el tesoro espera!", ca: "Seguim, el tresor espera!", en: "We keep going, the treasure is waiting!", cs: "Plujeme dál, poklad čeká!", fr: "On continue, le trésor nous attend !" }, go: "n3b" }
          ]
        },
        n3a: {
          text: { es: "Las gaviotas os reciben con un desfile de plumas. Su jefa os regala un coco y un secreto: 'La X está junto a la palmera que baila'.", ca: "Les gavines us reben amb una desfilada de plomes. La seva cap us regala un coco i un secret: 'La X és al costat de la palmera que balla'.", en: "The seagulls welcome you with a feather parade. Their chief gives you a coconut and a secret: 'The X is next to the dancing palm tree'.", cs: "Rackové vás přivítají peříčkovou přehlídkou. Jejich náčelnice vám daruje kokos a tajemství: 'X je hned vedle tančící palmy'.", fr: "Les mouettes vous accueillent avec un défilé de plumes. Leur cheffe vous offre une noix de coco et un secret : « Le X est à côté du palmier qui danse »." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n3b: {
          text: { es: "El Mar de las Estrellas brilla de noche: miles de estrellas de mar encienden sus lucecitas y forman una flecha gigante que señala la Isla Coco.", ca: "El Mar de les Estrelles brilla de nit: milers d'estrelles de mar encenen les seves llumetes i formen una fletxa gegant que assenyala l'Illa Coco.", en: "The Starfish Sea glows at night: thousands of starfish switch on their little lights and form a giant arrow pointing to Coco Island.", cs: "Hvězdicové moře v noci září: tisíce hvězdic rozsvítí svá světýlka a vytvoří obří šipku, která ukazuje na Kokosový ostrov.", fr: "La mer des Étoiles brille la nuit : des milliers d'étoiles de mer allument leurs petites lumières et forment une flèche géante qui montre l'île Coco." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n3c: {
          text: { es: "Lleváis a la tortuga a su playa. ¡Resulta que es la abuela más sabia del océano! Para daros las gracias, os enseña un atajo secreto entre dos rocas gemelas.", ca: "Porteu la tortuga a la seva platja. Resulta que és l'àvia més sàvia de l'oceà! Per donar-vos les gràcies, us ensenya una drecera secreta entre dues roques bessones.", en: "You take the turtle to her beach. It turns out she is the wisest granny in the ocean! To say thank you, she shows you a secret shortcut between two twin rocks.", cs: "Odvezete želvu na její pláž. Ukáže se, že je to nejmoudřejší babička oceánu! Jako poděkování vám ukáže tajnou zkratku mezi dvěma skalami dvojčaty.", fr: "Vous ramenez la tortue à sa plage. En fait, c'est la mamie la plus sage de l'océan ! Pour vous remercier, elle vous montre un raccourci secret entre deux rochers jumeaux." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n4: {
          text: { es: "¡Isla Coco a la vista! El mapa dice que la X está entre tres palmeras. Buscáis, buscáis... ¡allí está! ¿Cómo cavamos, {name}?", ca: "Illa Coco a la vista! El mapa diu que la X és entre tres palmeres. Busqueu, busqueu... allà és! Com cavem, {name}?", en: "Coco Island ahoy! The map says the X is between three palm trees. You search and search... there it is! How shall we dig, {name}?", cs: "Kokosový ostrov na obzoru! Mapa říká, že X je mezi třemi palmami. Hledáte a hledáte... tady je! Jak budeme kopat, {name}?", fr: "Île Coco en vue ! La carte dit que le X est entre trois palmiers. Vous cherchez, cherchez... le voilà ! Comment creuse-t-on, {name} ?" },
          choices: [
            { t: { es: "Con nuestras palas, ¡a cavar!", ca: "Amb les nostres pales, a cavar!", en: "With our shovels, let's dig!", cs: "Našimi lopatkami, jde se kopat!", fr: "Avec nos pelles, on creuse !" }, go: "n5a" },
            { t: { es: "Pedimos ayuda a los cangrejos", ca: "Demanem ajuda als crancs", en: "We ask the crabs for help", cs: "Poprosíme o pomoc kraby", fr: "On demande de l'aide aux crabes" }, go: "n5b" }
          ]
        },
        n5a: {
          text: { es: "Cavando y cantando, la arena vuela por todas partes. De repente... ¡TOC! Las palas chocan con algo de madera. ¡Un cofre enorme!", ca: "Cavant i cantant, la sorra vola per tot arreu. De sobte... TOC! Les pales xoquen amb alguna cosa de fusta. Un cofre enorme!", en: "Digging and singing, sand flies everywhere. Suddenly... KNOCK! The shovels hit something wooden. A huge chest!", cs: "Kopete a zpíváte, písek létá všude kolem. Najednou... ŤUK! Lopatky narazí na něco dřevěného. Obrovská truhla!", fr: "En creusant et en chantant, le sable vole partout. Soudain... TOC ! Les pelles cognent quelque chose en bois. Un énorme coffre !" },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e1" }
          ]
        },
        n5b: {
          text: { es: "Los cangrejos son los mejores excavadores del mundo: en un momentito hacen un agujero perfecto y aparece un cofre enorme. ¡Chas, chas!, aplauden con las pinzas.", ca: "Els crancs són els millors excavadors del món: en un momentet fan un forat perfecte i apareix un cofre enorme. Xac, xac!, aplaudeixen amb les pinces.", en: "Crabs are the best diggers in the world: in no time they make a perfect hole and a huge chest appears. Snip, snap!, they clap with their pincers.", cs: "Krabi jsou nejlepší kopáči na světě: za chvilku vyhrabou dokonalou jámu a objeví se obrovská truhla. Klap, klap!, tleskají klepítky.", fr: "Les crabes sont les meilleurs creuseurs du monde : en un instant, ils font un trou parfait et un énorme coffre apparaît. Clac, clac !, ils applaudissent avec leurs pinces." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e2" }
          ]
        },
        e1: {
          end: true,
          text: { es: "Dentro hay monedas de chocolate, caramelos y una corona de papel dorado. Lo repartís todo con la tripulación, y hasta el loro moja su galleta. El tesoro compartido sabe el doble de rico, {name}.", ca: "A dins hi ha monedes de xocolata, caramels i una corona de paper daurat. Ho repartiu tot amb la tripulació, i fins i tot el lloro suca la seva galeta. El tresor compartit és el doble de bo, {name}.", en: "Inside there are chocolate coins, sweets and a golden paper crown. You share everything with the crew, and even the parrot dunks his biscuit. Shared treasure tastes twice as good, {name}.", cs: "Uvnitř jsou čokoládové mince, bonbony a koruna ze zlatého papíru. Všechno rozdělíte mezi posádku a i papoušek si namočí sušenku. Sdílený poklad chutná dvakrát líp, {name}.", fr: "Dedans, il y a des pièces en chocolat, des bonbons et une couronne en papier doré. Vous partagez tout avec l'équipage, et même le perroquet trempe son biscuit. Un trésor partagé est deux fois meilleur, {name}." }
        },
        e2: {
          end: true,
          text: { es: "El cofre se abre: caramelos, monedas de chocolate... y una nota que dice: 'El tesoro de verdad son los amigos que cavan contigo'. Esa noche hay fiesta en la playa con los cangrejos bailarines. ¡Bien hecho, {name}!", ca: "El cofre s'obre: caramels, monedes de xocolata... i una nota que diu: 'El tresor de debò són els amics que caven amb tu'. Aquella nit hi ha festa a la platja amb els crancs balladors. Ben fet, {name}!", en: "The chest opens: sweets, chocolate coins... and a note that says: 'The real treasure is the friends who dig with you'. That night there is a beach party with the dancing crabs. Well done, {name}!", cs: "Truhla se otevře: bonbony, čokoládové mince... a lísteček s nápisem: 'Skutečný poklad jsou kamarádi, kteří kopou s tebou'. Ten večer je na pláži slavnost s tančícími kraby. Výborně, {name}!", fr: "Le coffre s'ouvre : des bonbons, des pièces en chocolat... et un mot qui dit : « Le vrai trésor, ce sont les amis qui creusent avec toi ». Ce soir-là, il y a une fête sur la plage avec les crabes danseurs. Bravo, {name} !" }
        }
      }
    },
    {
      id: "loro", emoji: "🦜", start: "n1",
      title: { es: "El loro que perdió la voz", ca: "El lloro que va perdre la veu", en: "The Parrot Who Lost His Voice", cs: "Papoušek, který ztratil hlas", fr: "Le perroquet qui a perdu sa voix" },
      nodes: {
        n1: {
          text: { es: "Coco, el loro del barco, se despierta sin voz: abre el pico y no sale... nada. Toda la tripulación está preocupada. ¿Qué hacemos, {name}?", ca: "Coco, el lloro del vaixell, es desperta sense veu: obre el bec i no en surt... res. Tota la tripulació està preocupada. Què fem, {name}?", en: "Coco, the ship's parrot, wakes up with no voice: he opens his beak and... nothing comes out. The whole crew is worried. What do we do, {name}?", cs: "Koko, lodní papoušek, se probudí bez hlasu: otevře zobák a... nic. Celá posádka má starost. Co uděláme, {name}?", fr: "Coco, le perroquet du bateau, se réveille sans voix : il ouvre le bec et... rien ne sort. Tout l'équipage est inquiet. Qu'est-ce qu'on fait, {name} ?" },
          choices: [
            { t: { es: "Le preparamos miel con limón", ca: "Li preparem mel amb llimona", en: "We make him honey with lemon", cs: "Připravíme mu med s citronem", fr: "On lui prépare du miel au citron" }, go: "n2a" },
            { t: { es: "Llamamos a la sirena doctora", ca: "Cridem la sirena doctora", en: "We call the mermaid doctor", cs: "Zavoláme mořskou pannu doktorku", fr: "On appelle la sirène docteure" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "El cocinero prepara su famosa miel con limón y burbujas. Coco se la bebe entera... hace glup, suelta una burbujita, pero sigue sin voz. Quizá no está malito. Quizá está triste.", ca: "El cuiner prepara la seva famosa mel amb llimona i bombolles. Coco se la beu tota... fa glup, deixa anar una bombolleta, però segueix sense veu. Potser no està malaltó. Potser està trist.", en: "The cook makes his famous honey with lemon and bubbles. Coco drinks it all... gulp, one little bubble comes out, but still no voice. Maybe he is not sick. Maybe he is sad.", cs: "Kuchař připraví svůj slavný med s citronem a bublinkami. Koko ho celý vypije... glo glo, vypustí jednu bublinku, ale hlas pořád nikde. Možná není nemocný. Možná je smutný.", fr: "Le cuisinier prépare son fameux miel au citron avec des bulles. Coco boit tout... gloup, une petite bulle sort, mais toujours pas de voix. Peut-être qu'il n'est pas malade. Peut-être qu'il est triste." },
          choices: [
            { t: { es: "Le preguntamos qué le pasa", ca: "Li preguntem què li passa", en: "We ask him what is wrong", cs: "Zeptáme se ho, co se děje", fr: "On lui demande ce qui ne va pas" }, go: "n3a" },
            { t: { es: "Le montamos una fiesta para animarlo", ca: "Li muntem una festa per animar-lo", en: "We throw a party to cheer him up", cs: "Uspořádáme oslavu, ať se rozveselí", fr: "On organise une fête pour lui remonter le moral" }, go: "n3b" }
          ]
        },
        n2b: {
          text: { es: "La sirena doctora escucha a Coco con su fonendo de caracola y sonríe: 'Su voz no está perdida, está escondida. Este loro tiene el corazón triste'.", ca: "La sirena doctora escolta Coco amb el seu fonendo de cargola i somriu: 'La seva veu no està perduda, està amagada. Aquest lloro té el cor trist'.", en: "The mermaid doctor listens to Coco with her seashell stethoscope and smiles: 'His voice is not lost, it is hiding. This parrot has a sad heart'.", cs: "Mořská panna doktorka poslechne Koka mušličkovým stetoskopem a usměje se: 'Jeho hlas není ztracený, jen se schoval. Tenhle papoušek má smutné srdíčko'.", fr: "La sirène docteure écoute Coco avec son stéthoscope en coquillage et sourit : « Sa voix n'est pas perdue, elle se cache. Ce perroquet a le cœur triste »." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n3a" }
          ]
        },
        n3a: {
          text: { es: "Coco señala el horizonte con el ala: su mejor amiga, la gaviota Pluma, se mudó a otra isla. La echa tanto de menos que la voz se le ha escondido. ¿Cómo lo arreglamos?", ca: "Coco assenyala l'horitzó amb l'ala: la seva millor amiga, la gavina Ploma, es va mudar a una altra illa. La troba tant a faltar que la veu se li ha amagat. Com ho arreglem?", en: "Coco points at the horizon with his wing: his best friend, Feather the seagull, moved to another island. He misses her so much that his voice went into hiding. How do we fix it?", cs: "Koko ukáže křídlem na obzor: jeho nejlepší kamarádka, racčice Pírko, se přestěhovala na jiný ostrov. Stýská se mu tak moc, že se mu hlas schoval. Jak to napravíme?", fr: "Coco montre l'horizon avec son aile : sa meilleure amie, la mouette Plume, a déménagé sur une autre île. Elle lui manque tellement que sa voix s'est cachée. Comment arranger ça ?" },
          choices: [
            { t: { es: "¡Zarpamos a visitar a Pluma!", ca: "Salpem a visitar la Ploma!", en: "We set sail to visit Feather!", cs: "Vyplouváme za Pírkem!", fr: "On lève l'ancre pour rendre visite à Plume !" }, go: "n4a" },
            { t: { es: "Le mandamos un mensaje en una botella", ca: "Li enviem un missatge en una ampolla", en: "We send her a message in a bottle", cs: "Pošleme jí vzkaz v láhvi", fr: "On lui envoie un message dans une bouteille" }, go: "n4b" }
          ]
        },
        n3b: {
          text: { es: "Montáis una fiesta con serpentinas y cañón de confeti. Coco sonríe un poquito, pero se queda mirando el horizonte. El vigía se da cuenta: allí vive su amiga, la gaviota Pluma.", ca: "Munteu una festa amb serpentines i canó de confeti. Coco somriu una miqueta, però es queda mirant l'horitzó. El vigia se n'adona: allà hi viu la seva amiga, la gavina Ploma.", en: "You throw a party with streamers and the confetti cannon. Coco smiles a tiny bit, but keeps staring at the horizon. The lookout notices: that is where his friend Feather the seagull lives.", cs: "Uspořádáte oslavu se serpentinami a konfetovým dělem. Koko se malinko usměje, ale pořád kouká na obzor. Hlídka si toho všimne: tam bydlí jeho kamarádka, racčice Pírko.", fr: "Vous faites une fête avec des serpentins et le canon à confettis. Coco sourit un petit peu, mais continue de regarder l'horizon. La vigie comprend : c'est là que vit son amie, la mouette Plume." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n3a" }
          ]
        },
        n4a: {
          text: { es: "El barco navega dos días y una noche hasta la isla de Pluma. Cuando Coco la ve, el corazón le hace PUM PUM... abre el pico y grita: '¡ARRR! ¡PLUMAAA!'. ¡La voz ha vuelto!", ca: "El vaixell navega dos dies i una nit fins a l'illa de la Ploma. Quan Coco la veu, el cor li fa PUM PUM... obre el bec i crida: 'ARRR! PLOMAAA!'. La veu ha tornat!", en: "The ship sails two days and one night to Feather's island. When Coco sees her, his heart goes BOOM BOOM... he opens his beak and shouts: 'ARRR! FEEEATHER!'. His voice is back!", cs: "Loď pluje dva dny a jednu noc až k ostrovu Pírka. Když ji Koko uvidí, srdíčko mu dělá BUM BUM... otevře zobák a zakřičí: 'ARRR! PÍÍÍRKO!'. Hlas je zpátky!", fr: "Le bateau navigue deux jours et une nuit jusqu'à l'île de Plume. Quand Coco la voit, son cœur fait BOUM BOUM... il ouvre le bec et crie : « ARRR ! PLUUUME ! ». Sa voix est revenue !" },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n5a" }
          ]
        },
        n4b: {
          text: { es: "Escribís una carta con dibujos y la lanzáis al mar en una botella. Las olas la llevan derechita. A los tres días, un puntito blanco aparece en el cielo: ¡es Pluma, volando con la botella en el pico!", ca: "Escriviu una carta amb dibuixos i la llanceu al mar en una ampolla. Les onades la porten dretes. Al cap de tres dies, un puntet blanc apareix al cel: és la Ploma, volant amb l'ampolla al bec!", en: "You write a letter with drawings and send it off in a bottle. The waves carry it straight there. Three days later, a little white dot appears in the sky: it is Feather, flying with the bottle in her beak!", cs: "Napíšete dopis s obrázky a pošlete ho po moři v láhvi. Vlny ho donesou přímo k cíli. Za tři dny se na nebi objeví bílá tečka: to letí Pírko s láhví v zobáku!", fr: "Vous écrivez une lettre avec des dessins et vous la lancez à la mer dans une bouteille. Les vagues la portent tout droit. Trois jours plus tard, un petit point blanc apparaît dans le ciel : c'est Plume, qui vole avec la bouteille dans le bec !" },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n5b" }
          ]
        },
        n5a: {
          text: { es: "Pluma y Coco vuelan juntos alrededor del barco tres veces, riendo. Para celebrarlo, el cocinero saca zumo de coco fresquito para todos.", ca: "La Ploma i en Coco volen junts al voltant del vaixell tres vegades, rient. Per celebrar-ho, el cuiner treu suc de coco fresquet per a tothom.", en: "Feather and Coco fly around the ship three times together, laughing. To celebrate, the cook brings out chilled coconut juice for everyone.", cs: "Pírko a Koko třikrát společně obletí loď a smějí se. Na oslavu přinese kuchař všem vychlazenou kokosovou šťávu.", fr: "Plume et Coco font trois fois le tour du bateau ensemble, en riant. Pour fêter ça, le cuisinier sort du jus de coco bien frais pour tout le monde." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e1" }
          ]
        },
        n5b: {
          text: { es: "Pluma aterriza en el hombro de Coco y le da un abrazo de alas. Coco respira hondo... y suelta el '¡kra-kra!' más feliz que se ha oído nunca en el mar.", ca: "La Ploma aterra a l'espatlla d'en Coco i li fa una abraçada d'ales. Coco respira fondo... i deixa anar el 'kra-kra!' més feliç que s'ha sentit mai al mar.", en: "Feather lands on Coco's shoulder and gives him a wing hug. Coco takes a deep breath... and lets out the happiest 'squawk-squawk!' ever heard at sea.", cs: "Pírko přistane Kokovi na rameni a obejme ho křídly. Koko se zhluboka nadechne... a vypustí to nejšťastnější 'krá-krá!', jaké kdy moře slyšelo.", fr: "Plume atterrit sur l'épaule de Coco et lui fait un câlin d'ailes. Coco respire un grand coup... et lâche le « cra-cra ! » le plus joyeux jamais entendu en mer." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e2" }
          ]
        },
        e1: {
          end: true,
          text: { es: "Desde entonces, el barco pasa por la isla de Pluma en cada viaje. Coco vuelve a contar historias cada noche. A veces la voz se esconde cuando estamos tristes, {name}: los amigos ayudan a encontrarla.", ca: "Des de llavors, el vaixell passa per l'illa de la Ploma a cada viatge. Coco torna a explicar històries cada nit. De vegades la veu s'amaga quan estem tristos, {name}: els amics ajuden a trobar-la.", en: "From then on, the ship stops by Feather's island on every voyage. Coco tells stories every night again. Sometimes our voice hides when we are sad, {name}: friends help us find it.", cs: "Od té doby se loď na každé plavbě staví u ostrova Pírka. Koko zase každý večer vypráví příběhy. Někdy se nám hlas schová, když jsme smutní, {name}: kamarádi nám ho pomůžou najít.", fr: "Depuis, le bateau passe par l'île de Plume à chaque voyage. Coco raconte de nouveau des histoires chaque soir. Parfois la voix se cache quand on est triste, {name} : les amis aident à la retrouver." }
        },
        e2: {
          end: true,
          text: { es: "Ahora Pluma visita el barco cada semana, y Coco canta más fuerte que nunca. Si un amigo está callado y triste, {name}, pregúntale qué le pasa: a lo mejor su voz también se ha escondido.", ca: "Ara la Ploma visita el vaixell cada setmana, i en Coco canta més fort que mai. Si un amic està callat i trist, {name}, pregunta-li què li passa: potser la seva veu també s'ha amagat.", en: "Now Feather visits the ship every week, and Coco sings louder than ever. If a friend is quiet and sad, {name}, ask them what is wrong: maybe their voice is hiding too.", cs: "Teď Pírko navštěvuje loď každý týden a Koko zpívá hlasitěji než kdy dřív. Když je kamarád zamlklý a smutný, {name}, zeptej se ho, co se děje: možná se mu taky schoval hlas.", fr: "Maintenant, Plume visite le bateau chaque semaine, et Coco chante plus fort que jamais. Si un ami est silencieux et triste, {name}, demande-lui ce qui ne va pas : sa voix se cache peut-être aussi." }
        }
      }
    },
    {
      id: "sirena", emoji: "🧜‍♀️", start: "n1",
      title: { es: "La sirena y el kraken", ca: "La sirena i el kraken", en: "The Mermaid and the Kraken", cs: "Mořská panna a kraken", fr: "La sirène et le kraken" },
      nodes: {
        n1: {
          text: { es: "La sirena Perla llega nadando muy deprisa: '¡Ayuda! El kraken está haciendo olas gigantes y nadie sabe por qué'. ¿Qué hacemos, {name}?", ca: "La sirena Perla arriba nedant molt de pressa: 'Ajuda! El kraken està fent onades gegants i ningú no sap per què'. Què fem, {name}?", en: "Pearl the mermaid swims up in a hurry: 'Help! The kraken is making giant waves and nobody knows why'. What do we do, {name}?", cs: "Mořská panna Perla připlave celá udýchaná: 'Pomoc! Kraken dělá obrovské vlny a nikdo neví proč'. Co uděláme, {name}?", fr: "Perle la sirène arrive en nageant très vite : « À l'aide ! Le kraken fait des vagues géantes et personne ne sait pourquoi ». Qu'est-ce qu'on fait, {name} ?" },
          choices: [
            { t: { es: "Bajamos al fondo con Perla", ca: "Baixem al fons amb la Perla", en: "We dive down with Pearl", cs: "Ponoříme se s Perlou na dno", fr: "On descend au fond avec Perle" }, go: "n2a" },
            { t: { es: "Lo invitamos a subir con música", ca: "El convidem a pujar amb música", en: "We invite him up with music", cs: "Pozveme ho nahoru hudbou", fr: "On l'invite à monter avec de la musique" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "Con las burbujas mágicas de Perla, bajáis al fondo del mar. Allí está el kraken, moviéndose muchísimo: ¡tiene los ocho tentáculos llenos de nudos!", ca: "Amb les bombolles màgiques de la Perla, baixeu al fons del mar. Allà hi ha el kraken, bellugant-se moltíssim: té els vuit tentacles plens de nusos!", en: "With Pearl's magic bubbles, you dive to the bottom of the sea. There is the kraken, wriggling like crazy: all eight of his tentacles are full of knots!", cs: "S Perlinými kouzelnými bublinami se ponoříte na dno moře. Tam je kraken a celý sebou šije: všech osm chapadel má samý uzel!", fr: "Avec les bulles magiques de Perle, vous descendez au fond de la mer. Voilà le kraken, qui gigote énormément : ses huit tentacules sont pleins de nœuds !" },
          choices: [
            { t: { es: "Los desenredamos con cuidado", ca: "Els desenredem amb compte", en: "We untangle them gently", cs: "Opatrně je rozmotáme", fr: "On les démêle doucement" }, go: "n3a" },
            { t: { es: "Llamamos a los cangrejos expertos en nudos", ca: "Cridem els crancs experts en nusos", en: "We call the crab knot experts", cs: "Zavoláme kraby, mistry na uzly", fr: "On appelle les crabes experts en nœuds" }, go: "n3b" }
          ]
        },
        n2b: {
          text: { es: "El loro toca su canción más suave. Un ojo enorme y tímido asoma despacito por encima del agua. El kraken escucha... y se le escapa una lagrimita.", ca: "El lloro toca la seva cançó més suau. Un ull enorme i tímid treu el cap a poc a poc per sobre de l'aigua. El kraken escolta... i se li escapa una llagrimeta.", en: "The parrot plays his softest song. A huge, shy eye slowly peeks above the water. The kraken listens... and a little tear slips out.", cs: "Papoušek zahraje svou nejjemnější písničku. Nad hladinu pomaličku vykoukne obrovské plaché oko. Kraken poslouchá... a ukápne mu slzička.", fr: "Le perroquet joue sa chanson la plus douce. Un œil énorme et timide dépasse tout doucement de l'eau. Le kraken écoute... et une petite larme s'échappe." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n2c" }
          ]
        },
        n2c: {
          text: { es: "'Nadie quiere jugar conmigo', dice el kraken con voz de burbujas. 'Cuando saludo con mis tentáculos, hago olas sin querer y todos se van'.", ca: "'Ningú no vol jugar amb mi', diu el kraken amb veu de bombolles. 'Quan saludo amb els meus tentacles, faig onades sense voler i tothom se'n va'.", en: "'Nobody wants to play with me', says the kraken in a bubbly voice. 'When I wave my tentacles hello, I make waves by accident and everyone leaves'.", cs: "'Nikdo si se mnou nechce hrát', říká kraken bublinkovým hlasem. 'Když zamávám chapadly na pozdrav, nechtěně udělám vlny a všichni utečou'.", fr: "« Personne ne veut jouer avec moi », dit le kraken avec une voix de bulles. « Quand je dis bonjour avec mes tentacules, je fais des vagues sans le vouloir et tout le monde s'en va »." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n3c" }
          ]
        },
        n3a: {
          text: { es: "Con mucho cuidado y mucha paciencia, deshacéis nudo a nudo. El kraken suspira de alivio: se había enredado él solito intentando saludar a un banco de peces.", ca: "Amb molt de compte i molta paciència, desfeu nus a nus. El kraken sospira d'alleujament: s'havia enredat ell solet intentant saludar un banc de peixos.", en: "Very carefully and very patiently, you undo knot after knot. The kraken sighs with relief: he had tangled himself up trying to wave at a school of fish.", cs: "Velmi opatrně a trpělivě rozvazujete uzel za uzlem. Kraken si úlevou oddechne: zamotal se sám, když se snažil zamávat hejnu rybek.", fr: "Avec beaucoup de soin et de patience, vous défaites nœud après nœud. Le kraken soupire de soulagement : il s'était emmêlé tout seul en essayant de saluer un banc de poissons." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n3b: {
          text: { es: "Los cangrejos llegan en fila y deshacen los nudos con sus pinzas, haciendo cosquillas. El kraken se ríe tan fuerte que el mar entero hace burbujas de risa.", ca: "Els crancs arriben en fila i desfan els nusos amb les seves pinces, fent pessigolles. El kraken riu tan fort que el mar sencer fa bombolles de riure.", en: "The crabs arrive in a line and undo the knots with their pincers, tickling as they go. The kraken laughs so hard that the whole sea fills with giggle bubbles.", cs: "Krabi připochodují v řadě a rozvazují uzly klepítky, až to lechtá. Kraken se směje tak nahlas, že celé moře bublá smíchem.", fr: "Les crabes arrivent en file et défont les nœuds avec leurs pinces, en chatouillant. Le kraken rit si fort que toute la mer fait des bulles de rire." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n3c: {
          text: { es: "Le enseñáis el juego de las 'olas pequeñitas': saludar moviendo solo la puntita de un tentáculo. El kraken practica... ¡y le sale una ola chiquitita perfecta!", ca: "Li ensenyeu el joc de les 'onades petitones': saludar movent només la punteta d'un tentacle. El kraken practica... i li surt una onada xiqueta perfecta!", en: "You teach him the 'tiny waves' game: waving with just the tip of one tentacle. The kraken practises... and makes a perfect teeny-tiny wave!", cs: "Naučíte ho hru na 'malinké vlnky': zdravit jen špičkou jednoho chapadla. Kraken trénuje... a povede se mu dokonalá mrňavá vlnka!", fr: "Vous lui apprenez le jeu des « petites vagues » : saluer en bougeant juste le bout d'un tentacule. Le kraken s'entraîne... et réussit une toute petite vague parfaite !" },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n4: {
          text: { es: "El kraken, ya tranquilo, pregunta bajito: '¿Puedo ser vuestro amigo?'. ¿Qué le decimos, {name}?", ca: "El kraken, ja tranquil, pregunta fluixet: 'Puc ser el vostre amic?'. Què li diem, {name}?", en: "The kraken, calm at last, asks quietly: 'Can I be your friend?'. What do we tell him, {name}?", cs: "Kraken, už klidný, se potichu zeptá: 'Můžu být váš kamarád?'. Co mu odpovíme, {name}?", fr: "Le kraken, enfin tranquille, demande tout bas : « Je peux être votre ami ? ». Qu'est-ce qu'on lui répond, {name} ?" },
          choices: [
            { t: { es: "¡Claro! ¡Bienvenido a la tripulación!", ca: "És clar! Benvingut a la tripulació!", en: "Of course! Welcome to the crew!", cs: "Jasně! Vítej v posádce!", fr: "Bien sûr ! Bienvenue dans l'équipage !" }, go: "e1" },
            { t: { es: "¡Sí! Y hacemos una fiesta para presentarlo", ca: "Sí! I fem una festa per presentar-lo", en: "Yes! And we throw a party to introduce him", cs: "Ano! A uspořádáme oslavu na uvítanou", fr: "Oui ! Et on fait une fête pour le présenter" }, go: "n5" }
          ]
        },
        n5: {
          text: { es: "Perla canta, el loro reparte invitaciones y el cañón lanza confeti al cielo. Vienen los delfines, las tortugas y hasta las estrellas de mar.", ca: "La Perla canta, el lloro reparteix invitacions i el canó llança confeti al cel. Vénen els dofins, les tortugues i fins i tot les estrelles de mar.", en: "Pearl sings, the parrot hands out invitations and the cannon shoots confetti into the sky. The dolphins come, the turtles too, and even the starfish.", cs: "Perla zpívá, papoušek roznáší pozvánky a dělo střílí konfety do nebe. Připlavou delfíni, želvy a dokonce i hvězdice.", fr: "Perle chante, le perroquet distribue les invitations et le canon lance des confettis dans le ciel. Les dauphins viennent, les tortues aussi, et même les étoiles de mer." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e2" }
          ]
        },
        e1: {
          end: true,
          text: { es: "El kraken se convierte en el mejor ayudante del barco: con ocho tentáculos iza las velas en un segundo y os columpia sobre el mar. Ya nadie le tiene miedo, {name}: solo necesitaba un amigo.", ca: "El kraken es converteix en el millor ajudant del vaixell: amb vuit tentacles hissa les veles en un segon i us gronxa sobre el mar. Ja ningú no li té por, {name}: només necessitava un amic.", en: "The kraken becomes the ship's best helper: with eight tentacles he hoists the sails in one second and swings you over the sea. Nobody is afraid of him anymore, {name}: he just needed a friend.", cs: "Z krakena je nejlepší pomocník lodi: osmi chapadly napne plachty za jedinou vteřinu a houpá vás nad mořem. Už se ho nikdo nebojí, {name}: potřeboval jen kamaráda.", fr: "Le kraken devient le meilleur assistant du bateau : avec huit tentacules, il hisse les voiles en une seconde et vous balance au-dessus de la mer. Plus personne n'a peur de lui, {name} : il avait juste besoin d'un ami." }
        },
        e2: {
          end: true,
          text: { es: "En la fiesta, el kraken hace toboganes de olas suaves para los peces pequeños. Todos quieren jugar con él. A veces, {name}, el más grandote es también el más tierno.", ca: "A la festa, el kraken fa tobogans d'onades suaus per als peixos petits. Tothom vol jugar amb ell. De vegades, {name}, el més grandot és també el més tendre.", en: "At the party, the kraken makes gentle wave slides for the little fish. Everyone wants to play with him. Sometimes, {name}, the biggest one is also the softest one.", cs: "Na oslavě dělá kraken pro malé rybky skluzavky z jemných vln. Všichni si s ním chtějí hrát. Někdy, {name}, je ten největší zároveň ten nejněžnější.", fr: "À la fête, le kraken fait des toboggans de vagues douces pour les petits poissons. Tout le monde veut jouer avec lui. Parfois, {name}, le plus grand est aussi le plus tendre." }
        }
      }
    }
  ],

  /* ---------- KARAOKE ---------- */
  songs: [
    { emoji: "🚣",
      title: { es: "A remar hacia el tesoro", ca: "A remar cap al tresor", en: "Row to the Treasure", cs: "Veslujeme za pokladem", fr: "Ramons vers le trésor" },
      lines: [
        { es: "Rema, rema, marinero,", ca: "Rema, rema, mariner,", en: "Row, row, sailor, row,", cs: "Veslujeme přes moře,", fr: "Rame, rame, matelot," },
        { es: "que el tesoro está primero.", ca: "que el tresor és el primer.", en: "to the treasure off we go.", cs: "poklad čeká na hoře.", fr: "le trésor est sur les flots." },
        { es: "Uno, dos, remamos ya,", ca: "Un i dos, remem plegats,", en: "One and two, we pull the oar,", cs: "Raz a dva, a záběr, hej,", fr: "Un et deux, ramons gaiement," },
        { es: "las olas nos llevarán.", ca: "per les ones engronxats.", en: "waves are singing more and more.", cs: "vlnky tančí, jen se směj.", fr: "les vagues chantent doucement." },
        { es: "Brilla el sol en alta mar,", ca: "Brilla el sol damunt el mar,", en: "Sunshine sparkles on the sea,", cs: "Slunce svítí na vlnky,", fr: "Le soleil brille sur la mer," },
        { es: "el loro empieza a cantar.", ca: "el lloro es posa a cantar.", en: "parrot sings for you and me.", cs: "papoušek zná písničky.", fr: "le perroquet chante en l'air." },
        { es: "Rema, rema sin parar,", ca: "Rema, rema sense por,", en: "Row, row, never stop,", cs: "Ještě kousek, přátelé,", fr: "Rame, rame sans t'arrêter," },
        { es: "¡el cofre vamos a encontrar!", ca: "que ja arriba el gran tresor!", en: "till the chest goes pop, pop, pop!", cs: "truhla čeká vesele!", fr: "le coffre va bientôt briller !" }
      ] },
    { emoji: "🌙",
      title: { es: "Nana del mar en calma", ca: "Cançó de bressol del mar", en: "Lullaby of the Calm Sea", cs: "Ukolébavka klidného moře", fr: "Berceuse de la mer calme" },
      lines: [
        { es: "Duerme, duerme, marinero,", ca: "Dorm, dorm, mariner petit,", en: "Sleep, my sailor, close your eyes,", cs: "Spinkej, spinkej, námořníčku,", fr: "Dors, dors, petit marin," },
        { es: "que te acuna el mar entero.", ca: "que la mar et fa el llit.", en: "gentle waves sing lullabies.", cs: "vlnky houpou tvou lodičku.", fr: "la mer te berce jusqu'au matin." },
        { es: "El mar canta bajito,", ca: "La lluna surt a mirar,", en: "Little boats are rocking slow,", cs: "Měsíček už svítí z výšky,", fr: "Les vagues chantent tout bas," },
        { es: "shhh, shhh, despacito.", ca: "com et bressola la mar.", en: "moonlight paints the sea below.", cs: "hvězdičky si čtou z knížky.", fr: "chhh, chhh, ne t'inquiète pas." },
        { es: "Las estrellas en el agua", ca: "Les estrelles fan llumetes,", en: "Stars are twinkling on the foam,", cs: "Šššš, šeptá klidné moře,", fr: "La lune veille sur les flots," },
        { es: "se reflejan y se apagan.", ca: "sobre l'aigua, quietes, quietes.", en: "the calm sea will rock you home.", cs: "dobrou noc, ty naše zoře.", fr: "les étoiles gardent ton bateau." },
        { es: "Duerme, duerme, pequeñito,", ca: "Dorm, dorm, sense neguit,", en: "Sleep, my sailor, dream away,", cs: "Spinkej, spinkej, do rána,", fr: "Dors, dors, ferme les yeux," },
        { es: "que el mar en calma es un nidito.", ca: "el far et diu bona nit.", en: "till the sun brings a brand-new day.", cs: "hlídá tě hodná mořská panna.", fr: "le phare brille dans la nuit bleue." }
      ] },
    { emoji: "🦜",
      title: { es: "La canción del loro parlanchín", ca: "La cançó del lloro xerraire", en: "The Chatty Parrot Song", cs: "Písnička upovídaného papouška", fr: "La chanson du perroquet bavard" },
      lines: [
        { es: "El loro del barco no para de hablar,", ca: "El lloro del vaixell sempre vol xerrar,", en: "The parrot on our ship just talks all day,", cs: "Papoušek na lodi mluví rád,", fr: "Le perroquet du bateau parle tout le temps," },
        { es: "¡kra-kra!, repite sin descansar.", ca: "kra-kra, kra-kra, no pot parar.", en: "squawk-squawk, he has so much to say.", cs: "krá-krá, krá-krá, je to kamarád.", fr: "cra-cra, cra-cra, c'est amusant." },
        { es: "Buenos días dice al timón,", ca: "Diu bon dia al timó,", en: "He says good morning to the wheel,", cs: "Kormidlu popřeje dobrý den,", fr: "Il dit bonjour au gouvernail," },
        { es: "y a las velas les canta una canción.", ca: "i canta a les veles una cançó.", en: "and sings to sails with lots of zeal.", cs: "a plachtám zpívá jen a jen.", fr: "et chante aux voiles sans une faille." },
        { es: "Si el capitán dice: ¡a dormir!,", ca: "Quan el capità diu: a dormir!,", en: "The captain says: it's time for bed!", cs: "Kapitán volá: jde se spát!", fr: "Le capitaine dit : au lit !" },
        { es: "el loro grita: ¡quiero seguir!", ca: "el lloro crida: vull seguir!", en: "The parrot shouts: more words instead!", cs: "Papoušek křičí: chci si hrát!", fr: "Le perroquet répond : pas fini !" },
        { es: "Loro parlanchín, loro juguetón,", ca: "Lloro xerraire, lloro rialler,", en: "Chatty parrot, funny friend,", cs: "Upovídaný ptáčku náš,", fr: "Perroquet bavard, perroquet rigolo," },
        { es: "eres el rey de la tripulación.", ca: "ets el rei del vaixell sencer.", en: "your happy stories never end.", cs: "celou posádku rozesmáváš!", fr: "tu es le roi de tout le bateau." }
      ] }
  ],

  /* ---------- TRADUCTOR ---------- */
  translator: {
    words: [
      W_COMMON.hola,
      W_COMMON.adios,
      W_COMMON.amigo,
      { k: "barco", emoji: "⛵", name: { es: "barco", ca: "vaixell", en: "ship", cs: "loď", fr: "bateau" } },
      { k: "tesoro", emoji: "💰", name: { es: "tesoro", ca: "tresor", en: "treasure", cs: "poklad", fr: "trésor" } },
      { k: "isla", emoji: "🏝️", name: { es: "isla", ca: "illa", en: "island", cs: "ostrov", fr: "île" } },
      { k: "mar", emoji: "🌊", name: { es: "mar", ca: "mar", en: "sea", cs: "moře", fr: "mer" } },
      { k: "loro", emoji: "🦜", name: { es: "loro", ca: "lloro", en: "parrot", cs: "papoušek", fr: "perroquet" } },
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
      { id: "lorito", emoji: "🦜",
        name: { es: "Lorito", ca: "Llengua de lloro", en: "Parrotish", cs: "Papouščina", fr: "Perroquais" },
        greeting: { es: "¡Kra-kra! Así se dice hola en lorito. Repítelo dos veces, ¡como un loro!", ca: "Kra-kra! Així es diu hola en llengua de lloro. Repeteix-ho dues vegades, com un lloro!", en: "Squawk! Kra-kra means hello in Parrotish. Say it twice, like a parrot!", cs: "Krá-krá! Tak se papouščinou řekne ahoj. Zopakuj to dvakrát, jako papoušek!", fr: "Kra-kra ! C'est comme ça qu'on dit bonjour en perroquais. Répète-le deux fois, comme un perroquet !" },
        dict: { hola: "¡kra-kra!", adios: "kra-fiu", amigo: "krami", barco: "krarco", tesoro: "kra-brilli", isla: "krisla", mar: "kramar", loro: "kra-kra-yo", robot: "kra-bip", mama: "kramama", papa: "krapapa", casa: "kranido", agua: "kragluk", comida: "krañam", perro: "kraguau", gato: "kramiau", grande: "krakón", pequeno: "kriki", bonito: "kralindo", amor: "kramor", gracias: "krasias", si: "kra", no: "kro", dormir: "krazzz" } },
      { id: "marinero", emoji: "⚓",
        name: { es: "Marinero antiguo", ca: "Mariner antic", en: "Old Sailor Talk", cs: "Stará námořničtina", fr: "Vieux marin" },
        greeting: { es: "¡Ohééé! Así saludaban los marineros de antes, con la mano en el sombrero.", ca: "Ohééé! Així saludaven els mariners d'abans, amb la mà al barret.", en: "Ohooo! That is how sailors of old said hello, hand on their hat.", cs: "Ohóóó! Tak zdravili staří námořníci, s rukou na klobouku.", fr: "Ohééé ! C'est comme ça que les marins d'autrefois saluaient, la main sur le chapeau." },
        dict: { hola: "¡ohé, ohé!", adios: "¡leva anclas!", amigo: "camarada", barco: "navío", tesoro: "botín", isla: "terruño", mar: "la salada", loro: "cotorra", robot: "grumete de hierro", mama: "almiranta", papa: "almirante", casa: "camarote", agua: "aguadulce", comida: "galleta", perro: "chucho de a bordo", gato: "gato de bodega", grande: "colosal", pequeno: "grumetillo", bonito: "reluciente", amor: "corazón de oro", gracias: "¡ohé, gracias!", si: "¡sí, capitán!", no: "¡nanay!", dormir: "a la hamaca" } },
      { id: "sirenio", emoji: "🧜‍♀️",
        name: { es: "Sirenio", ca: "Sirenià", en: "Mermaidish", cs: "Sirénština", fr: "Sirénois" },
        greeting: { es: "Glu-lala... el idioma de las sirenas se canta con burbujas, como bajo el agua.", ca: "Glu-lala... l'idioma de les sirenes es canta amb bombolles, com sota l'aigua.", en: "Glu-lala... the mermaid language is sung with bubbles, like underwater.", cs: "Glu-lala... jazyk mořských panen se zpívá s bublinkami, jako pod vodou.", fr: "Glu-lala... la langue des sirènes se chante avec des bulles, comme sous l'eau." },
        dict: { hola: "glu-lala", adios: "glu-adiú", amigo: "marinelo", barco: "flotalí", tesoro: "perlarí", isla: "arenalia", mar: "aguamar", loro: "plumalí", robot: "metalín", mama: "mamaperla", papa: "papacoral", casa: "grutalia", agua: "glu-glu", comida: "algalí", perro: "guaulina", gato: "miaulina", grande: "oceanón", pequeno: "gotita", bonito: "brillimar", amor: "corazul", gracias: "gracilia", si: "sí-lalá", no: "no-lulú", dormir: "glu-nana" } },
      { id: "kraken", emoji: "🐙",
        name: { es: "Kraken", ca: "Kraken", en: "Krakenish", cs: "Krakenština", fr: "Krakenois" },
        greeting: { es: "Blub. Así se dice hola en kraken, con voz profunda de burbuja gigante.", ca: "Blub. Així es diu hola en kraken, amb veu profunda de bombolla gegant.", en: "Blub. That is hello in Krakenish, said with a deep giant-bubble voice.", cs: "Blub. Tak se krakenštinou řekne ahoj, hlubokým hlasem obří bubliny.", fr: "Bloub. C'est bonjour en krakenois, avec une voix profonde de bulle géante." },
        dict: { hola: "blub", adios: "blub-blub", amigo: "blubi", barco: "flotblub", tesoro: "brillublub", isla: "terrablub", mar: "blubmar", loro: "plumablub", robot: "bipblub", mama: "mamablub", papa: "papablub", casa: "cuevablub", agua: "blubublub", comida: "ñamblub", perro: "guaublub", gato: "miaublub", grande: "blubón", pequeno: "blubín", bonito: "beliblub", amor: "corablub", gracias: "grablub", si: "blup", no: "blop", dormir: "zzzblub" } }
    ]
  },

  /* ---------- MAPA DE EXPLORACIÓN ---------- */
  explore: {
    width: 4200, height: 1100, stars: false,
    bgCss: "radial-gradient(ellipse 40% 30% at 10% 12%, rgba(255,241,118,.5), transparent), linear-gradient(180deg,#8ecff5 0%,#5db8ee 40%,#35a3e0 64%,#0288d1 100%)",
    cats: [
      { id: "barco", emoji: "⛵", x: 120, name: { es: "El barco pirata", ca: "El vaixell pirata", en: "The pirate ship", cs: "Pirátská loď", fr: "Le bateau pirate" } },
      { id: "isla", emoji: "🏝️", x: 1900, name: { es: "La isla del tesoro", ca: "L'illa del tresor", en: "Treasure Island", cs: "Ostrov pokladů", fr: "L'île au trésor" } },
      { id: "mar", emoji: "🌊", x: 3200, name: { es: "Alta mar", ca: "Alta mar", en: "The open sea", cs: "Širé moře", fr: "La haute mer" } }
    ],
    pois: [
      { cat: "barco", emoji: "🏴‍☠️", x: 700, y: 130,
        name: { es: "La bandera pirata", ca: "La bandera pirata", en: "The pirate flag", cs: "Pirátská vlajka", fr: "Le drapeau pirate" },
        fact: { es: "Se llama Jolly Roger. Cada capitán dibujaba la suya: la nuestra lleva una piruleta.", ca: "Es diu Jolly Roger. Cada capità dibuixava la seva: la nostra porta una piruleta.", en: "It is called the Jolly Roger. Every captain drew their own: ours has a lollipop on it.", cs: "Jmenuje se Jolly Roger. Každý kapitán si kreslil svou vlastní: ta naše má na sobě lízátko.", fr: "Il s'appelle le Jolly Roger. Chaque capitaine dessinait le sien : le nôtre porte une sucette." } },
      { cat: "barco", emoji: "🔭", x: 940, y: 290,
        name: { es: "El vigía (la cofa)", ca: "El vigia (la cofa)", en: "The lookout (crow's nest)", cs: "Hlídka (vraní hnízdo)", fr: "La vigie (la hune)" },
        fact: { es: "La cesta de lo alto del mástil se llama cofa. Desde ahí el vigía grita: ¡tierra a la vista!", ca: "La cistella de dalt del pal es diu cofa. Des d'allà el vigia crida: terra a la vista!", en: "The basket at the top of the mast is called the crow's nest. From up there the lookout shouts: land ahoy!", cs: "Koši na vrcholku stěžně se říká vraní hnízdo. Hlídka odtud volá: země na obzoru!", fr: "Le panier en haut du mât s'appelle la hune. De là-haut, la vigie crie : terre en vue !" } },
      { cat: "barco", emoji: "⛵", x: 700, y: 430,
        name: { es: "La vela mayor", ca: "La vela major", en: "The main sail", cs: "Hlavní plachta", fr: "La grand-voile" },
        fact: { es: "Es la vela más grande del barco. El viento la hincha como una cometa gigante y el barco avanza.", ca: "És la vela més gran del vaixell. El vent la infla com un estel gegant i el vaixell avança.", en: "It is the biggest sail on the ship. The wind puffs it up like a giant kite and off the ship goes.", cs: "Je to největší plachta na lodi. Vítr ji nafoukne jako obřího draka a loď se rozjede.", fr: "C'est la plus grande voile du bateau. Le vent la gonfle comme un cerf-volant géant et le bateau avance." } },
      { cat: "barco", emoji: "🦜", x: 1440, y: 560,
        name: { es: "El loro", ca: "El lloro", en: "The parrot", cs: "Papoušek", fr: "Le perroquet" },
        fact: { es: "Los loros pueden aprender cientos de palabras y algunos viven más de 60 años. Este solo dice: ¡galleta!", ca: "Els lloros poden aprendre centenars de paraules i alguns viuen més de 60 anys. Aquest només diu: galeta!", en: "Parrots can learn hundreds of words and some live more than 60 years. This one only says: biscuit!", cs: "Papoušci se umí naučit stovky slov a někteří žijí přes 60 let. Tenhle říká jen: sušenka!", fr: "Les perroquets peuvent apprendre des centaines de mots et certains vivent plus de 60 ans. Celui-ci dit seulement : biscuit !" } },
      { cat: "barco", emoji: "☸️", x: 240, y: 600,
        name: { es: "El timón", ca: "El timó", en: "The helm", cs: "Kormidlo", fr: "Le gouvernail" },
        fact: { es: "Con el timón se dirige el barco. Izquierda se dice babor y derecha, estribor. ¡Palabras de marinero!", ca: "Amb el timó es dirigeix el vaixell. Esquerra es diu babord i dreta, estribord. Paraules de mariner!", en: "The helm steers the ship. Sailors say port for left and starboard for right. Real sailor words!", cs: "Kormidlem se řídí loď. Námořníci říkají levoboku a pravoboku. Opravdová námořnická slova!", fr: "Le gouvernail dirige le bateau. À gauche on dit bâbord et à droite, tribord. Des mots de marin !" } },
      { cat: "barco", emoji: "🎉", x: 620, y: 660,
        name: { es: "El cañón de confeti", ca: "El canó de confeti", en: "The confetti cannon", cs: "Konfetové dělo", fr: "Le canon à confettis" },
        fact: { es: "En este barco los cañones solo disparan confeti y serpentinas. ¡PUM! ¡Que empiece la fiesta!", ca: "En aquest vaixell els canons només disparen confeti i serpentines. PUM! Que comenci la festa!", en: "On this ship the cannons only shoot confetti and streamers. BOOM! Let the party begin!", cs: "Na téhle lodi střílí děla jen konfety a serpentiny. BUM! Ať začne oslava!", fr: "Sur ce bateau, les canons ne tirent que des confettis et des serpentins. BOUM ! Que la fête commence !" } },
      { cat: "isla", emoji: "🏖️", x: 2060, y: 780,
        name: { es: "La playa", ca: "La platja", en: "The beach", cs: "Pláž", fr: "La plage" },
        fact: { es: "La arena de la playa son rocas y conchas rotas en trocitos chiquititos por las olas.", ca: "La sorra de la platja són roques i petxines trencades en trossets petitons per les onades.", en: "Beach sand is made of rocks and shells broken into teeny-tiny pieces by the waves.", cs: "Písek na pláži jsou kamínky a mušle, které vlny rozdrobily na maličké kousíčky.", fr: "Le sable de la plage, ce sont des roches et des coquillages cassés en tout petits morceaux par les vagues." } },
      { cat: "isla", emoji: "🌴", x: 2340, y: 520,
        name: { es: "La palmera de cocos", ca: "La palmera de cocos", en: "The coconut palm", cs: "Kokosová palma", fr: "Le cocotier" },
        fact: { es: "Los cocos flotan y viajan por el mar. Al llegar a otra playa, ¡nace una palmera nueva!", ca: "Els cocos suren i viatgen pel mar. En arribar a una altra platja, neix una palmera nova!", en: "Coconuts float and travel across the sea. When they land on another beach, a new palm tree grows!", cs: "Kokosy plavou a cestují po moři. Když doplují na jinou pláž, vyroste nová palma!", fr: "Les noix de coco flottent et voyagent sur la mer. En arrivant sur une autre plage, un nouveau palmier naît !" } },
      { cat: "isla", emoji: "💎", x: 3060, y: 620,
        name: { es: "La cueva del tesoro", ca: "La cova del tresor", en: "The treasure cave", cs: "Jeskyně pokladů", fr: "La grotte au trésor" },
        fact: { es: "Dentro brillan cristales de colores. Si dices hola, el eco contesta: hola, hola, hola...", ca: "A dins brillen cristalls de colors. Si dius hola, l'eco contesta: hola, hola, hola...", en: "Colourful crystals sparkle inside. If you say hello, the echo answers: hello, hello, hello...", cs: "Uvnitř se třpytí barevné krystaly. Když řekneš ahoj, ozvěna odpoví: ahoj, ahoj, ahoj...", fr: "Dedans brillent des cristaux colorés. Si tu dis bonjour, l'écho répond : bonjour, bonjour, bonjour..." } },
      { cat: "isla", emoji: "🗺️", x: 2780, y: 830,
        name: { es: "El mapa gigante", ca: "El mapa gegant", en: "The giant map", cs: "Obří mapa", fr: "La carte géante" },
        fact: { es: "En los mapas antiguos, los pintores dibujaban monstruos en los mares que nadie conocía todavía.", ca: "Als mapes antics, els pintors dibuixaven monstres als mars que ningú no coneixia encara.", en: "On old maps, painters drew monsters in the seas nobody had explored yet.", cs: "Na starých mapách kreslili malíři nestvůry do moří, která ještě nikdo neprozkoumal.", fr: "Sur les vieilles cartes, les peintres dessinaient des monstres dans les mers que personne ne connaissait encore." } },
      { cat: "isla", emoji: "❌", x: 2500, y: 900,
        name: { es: "La X del tesoro", ca: "La X del tresor", en: "The treasure X", cs: "X pokladu", fr: "Le X du trésor" },
        fact: { es: "¡La X marca el lugar! Debajo hay un cofre con monedas de chocolate. Chsss, es un secreto.", ca: "La X marca el lloc! A sota hi ha un cofre amb monedes de xocolata. Xxxt, és un secret.", en: "X marks the spot! Underneath there is a chest full of chocolate coins. Shhh, it is a secret.", cs: "X označuje místo! Pod ním je truhla plná čokoládových mincí. Pšt, je to tajemství.", fr: "Le X marque l'endroit ! Dessous, il y a un coffre plein de pièces en chocolat. Chut, c'est un secret." } },
      { cat: "mar", emoji: "📜", x: 3320, y: 660,
        name: { es: "La botella con mensaje", ca: "L'ampolla amb missatge", en: "The message in a bottle", cs: "Láhev se vzkazem", fr: "La bouteille à message" },
        fact: { es: "Hay mensajes en botellas que viajaron por el mar más de 100 años antes de que alguien los encontrara.", ca: "Hi ha missatges en ampolles que van viatjar pel mar més de 100 anys abans que algú els trobés.", en: "Some messages in bottles travelled the sea for more than 100 years before someone found them.", cs: "Některé vzkazy v láhvích putovaly po moři víc než 100 let, než je někdo našel.", fr: "Certains messages en bouteille ont voyagé sur la mer plus de 100 ans avant que quelqu'un les trouve." } },
      { cat: "mar", emoji: "🐬", x: 3580, y: 540,
        name: { es: "El delfín guía", ca: "El dofí guia", en: "The guide dolphin", cs: "Delfín průvodce", fr: "Le dauphin guide" },
        fact: { es: "Los delfines hablan con silbidos y cada uno tiene su propio nombre-silbido. ¡Como tú tienes el tuyo!", ca: "Els dofins parlen amb xiulets i cadascun té el seu propi nom-xiulet. Com tu tens el teu!", en: "Dolphins talk in whistles and each one has its own whistle-name. Just like you have yours!", cs: "Delfíni mluví pískáním a každý má své vlastní pískací jméno. Stejně jako ty máš to svoje!", fr: "Les dauphins parlent en sifflant et chacun a son propre nom-sifflet. Comme toi, tu as le tien !" } },
      { cat: "mar", emoji: "🦈", x: 3880, y: 700,
        name: { es: "El tiburón", ca: "El tauró", en: "The shark", cs: "Žralok", fr: "Le requin" },
        fact: { es: "Los tiburones ya nadaban por aquí antes que los dinosaurios. Este es amable y solo viene a jugar.", ca: "Els taurons ja nedaven per aquí abans que els dinosaures. Aquest és amable i només ve a jugar.", en: "Sharks were already swimming here before the dinosaurs. This one is friendly and just wants to play.", cs: "Žraloci tu plavali dřív než dinosauři. Tenhle je hodný a přijel si jen hrát.", fr: "Les requins nageaient déjà ici avant les dinosaures. Celui-ci est gentil et vient juste jouer." } },
      { cat: "mar", emoji: "🐙", x: 3600, y: 940, size: 2,
        name: { es: "El kraken amistoso", ca: "El kraken amistós", en: "The friendly kraken", cs: "Přátelský kraken", fr: "Le kraken amical" },
        fact: { es: "El kraken de las leyendas era un calamar gigante. Los de verdad existen: ¡tienen ojos grandes como platos!", ca: "El kraken de les llegendes era un calamar gegant. Els de debò existeixen: tenen ulls grans com plats!", en: "The kraken of the legends was a giant squid. Real giant squids exist: their eyes are as big as dinner plates!", cs: "Kraken z legend byla obří chobotnice. Obří olihně opravdu existují: mají oči velké jako talíře!", fr: "Le kraken des légendes était un calamar géant. Les vrais existent : leurs yeux sont grands comme des assiettes !" } },
      { cat: "mar", emoji: "🧜‍♀️", x: 4070, y: 800,
        name: { es: "La sirena", ca: "La sirena", en: "The mermaid", cs: "Mořská panna", fr: "La sirène" },
        fact: { es: "Los marineros contaban que veían sirenas en las rocas. Muchas veces eran manatíes tomando el sol.", ca: "Els mariners explicaven que veien sirenes a les roques. Moltes vegades eren manatís prenent el sol.", en: "Sailors used to say they saw mermaids on the rocks. Often they were manatees sunbathing.", cs: "Námořníci vyprávěli, že na skalách vídají mořské panny. Často to byli kapustňáci na sluníčku.", fr: "Les marins racontaient qu'ils voyaient des sirènes sur les rochers. Souvent, c'étaient des lamantins qui prenaient le soleil." } }
    ],
    /* El paisaje, de izquierda a derecha y encadenado: el puerto con su
       muelle de piedra, el barco grande amarrado, el muelle de madera que
       se mete en el mar, el mar abierto con oleaje, la isla del tesoro con
       su playa y su mapa desplegado, la cala de agua clara con sus cuevas
       y, al final, la alta mar. El agua se va aclarando al acercarse a la
       isla y se vuelve honda otra vez al alejarse. */
    deco: function () {
      let s = "";
      /* las cajas de los iconos: el decorado se aparta de ellas */
      const cajas = [[625, 90, 150, 80], [893, 238, 94, 104], [645, 387, 110, 86], [1416, 529, 48, 62], [200, 560, 80, 80],
        [564, 615, 112, 90], [2014, 748, 92, 64], [2293, 466, 94, 108], [3015, 581, 90, 78], [2732, 795, 96, 70],
        [2463, 869, 74, 62], [3293, 629, 54, 62], [3527, 506, 106, 68], [3807, 664, 146, 72], [3514, 865, 172, 150], [4028, 739, 84, 122]];
      const libre = (x, y, w, h) => !cajas.some(c => {
        const mx = c[2] * .4 + 16, my = c[3] * .4 + 16;
        return x < c[0] + c[2] + mx && x + w > c[0] - mx && y < c[1] + c[3] + my && y + h > c[1] - my;
      });
      /* una cresta de espuma de tres lomos */
      const cresta = (x, y, w, o) => `<path d="M${x} ${y} q${(w / 4).toFixed(0)} -${(w / 7).toFixed(0)} ${(w / 2).toFixed(0)} 0 t${(w / 2).toFixed(0)} 0" stroke="rgba(255,255,255,${o})" stroke-width="5" fill="none" stroke-linecap="round"/>`;
      /* una gaviota de dos trazos */
      const gaviota = (x, y, k) => `<path d="M${x - 26 * k} ${y} q${13 * k} -${16 * k} ${26 * k} 0 q${13 * k} -${16 * k} ${26 * k} 0" stroke="#fff" stroke-width="${4.6 * k}" fill="none" stroke-linecap="round"/>`;
      /* degradados propios, con prefijo pirX para no chocar con los iconos */
      s += `<defs>
        <linearGradient id="pirXcielo" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#bfeafc"/><stop offset="46%" stop-color="#8ed3f6"/><stop offset="100%" stop-color="#d7f0f7"/></linearGradient>
        <radialGradient id="pirXsol" cx="42%" cy="38%" r="60%"><stop offset="0%" stop-color="#fffdf2"/><stop offset="100%" stop-color="#ffe066"/></radialGradient>
        <linearGradient id="pirXmarA" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#7ecbee"/><stop offset="100%" stop-color="#38a5da"/></linearGradient>
        <linearGradient id="pirXmarB" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#3ea3d8"/><stop offset="100%" stop-color="#1a7fbb"/></linearGradient>
        <linearGradient id="pirXmarC" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1a76b2"/><stop offset="100%" stop-color="#0b4f80"/></linearGradient>
        <radialGradient id="pirXvado" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#bff5ea" stop-opacity=".8"/><stop offset="46%" stop-color="#86e2d8" stop-opacity=".46"/>
          <stop offset="76%" stop-color="#5fd3ca" stop-opacity=".18"/><stop offset="100%" stop-color="#4cc9c0" stop-opacity="0"/></radialGradient>
        <radialGradient id="pirXcalaSuave" cx="50%" cy="46%" r="52%">
          <stop offset="0%" stop-color="#c6f7ed" stop-opacity=".92"/><stop offset="54%" stop-color="#8ce4da" stop-opacity=".62"/>
          <stop offset="82%" stop-color="#5cd0c7" stop-opacity=".26"/><stop offset="100%" stop-color="#4cc9c0" stop-opacity="0"/></radialGradient>
        <linearGradient id="pirXguijarro" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#c2ae94"/><stop offset="100%" stop-color="#8b7358"/></linearGradient>
        <linearGradient id="pirXverdeClaro" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#a7dd8f"/><stop offset="100%" stop-color="#5aa05a"/></linearGradient>
        <linearGradient id="pirXarena" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fbe6b4"/><stop offset="100%" stop-color="#e3c179"/></linearGradient>
        <linearGradient id="pirXverde" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#7cc06a"/><stop offset="100%" stop-color="#3f8a45"/></linearGradient>
        <linearGradient id="pirXroca" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#a68c74"/><stop offset="100%" stop-color="#6b5341"/></linearGradient>
        <linearGradient id="pirXcueva" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#4a3729"/><stop offset="100%" stop-color="#241a13"/></linearGradient>
        <linearGradient id="pirXcasco" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8b5e3c"/><stop offset="100%" stop-color="#4e3221"/></linearGradient>
        <linearGradient id="pirXmadera" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#b98a53"/><stop offset="100%" stop-color="#7d5730"/></linearGradient>
        <linearGradient id="pirXmojada" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#b98a53"/><stop offset="100%" stop-color="#6a4526"/></linearGradient>
        <linearGradient id="pirXpiedra" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#cfc6b4"/><stop offset="100%" stop-color="#8e8474"/></linearGradient>
        <linearGradient id="pirXvela" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fffdf6"/><stop offset="100%" stop-color="#e3dcc7"/></linearGradient>
        <linearGradient id="pirXpapel" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f6e3b6"/><stop offset="100%" stop-color="#dcc086"/></linearGradient>
      </defs>`;
      /* ---------- CIELO: sol, nubes en capas y gaviotas ---------- */
      s += `<rect x="0" y="0" width="4200" height="1100" fill="url(#pirXcielo)"/>
        <g transform="translate(280 152)"><circle r="118" fill="#ffe066" opacity=".18"><animate attributeName="r" values="118;132;118" dur="9s" repeatCount="indefinite"/></circle>
        <circle r="86" fill="#ffe066" opacity=".22"/><circle r="62" fill="url(#pirXsol)"/><circle cx="-20" cy="-19" r="14" fill="rgba(255,255,255,.6)"/></g>`;
      const nube = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})" fill="#fff">
        <ellipse cx="0" cy="0" rx="96" ry="32"/><ellipse cx="-58" cy="12" rx="52" ry="22"/><ellipse cx="56" cy="14" rx="58" ry="24"/><ellipse cx="-8" cy="-24" rx="52" ry="28"/></g>`;
      [[1180, 158, 1, .92, 66, 44], [1980, 122, .78, .82, 84, 56], [2700, 176, 1.1, .88, 54, 38], [3320, 100, .66, .7, 70, 50],
        [1560, 320, .6, .55, 46, 34], [3860, 180, .95, .82, 62, 46],
        [1420, 200, .72, .74, 58, 42], [2360, 258, .64, .6, 50, 36], [3020, 128, .88, .84, 74, 52],
        [2920, 330, .5, .44, 40, 30], [3580, 300, .56, .5, 44, 32], [4090, 226, .78, .74, 60, 44],
        [2200, 96, .58, .62, 68, 48], [3700, 106, .6, .58, 52, 40],
        [480, 84, .56, .6, 38, 40], [1000, 62, .68, .64, 46, 44], [3960, 412, .48, .4, 36, 30],
        [2540, 404, .44, .38, 34, 28], [1760, 108, .52, .5, 42, 36]].forEach(n => {
        s += `<g opacity="${n[3]}"><animateTransform attributeName="transform" type="translate" values="0 0;${n[4]} 0;0 0" dur="${n[5]}s" repeatCount="indefinite"/>${nube(n[0], n[1], n[2])}</g>`;
      });
      [[1180, 300, 1], [1268, 252, .72], [2320, 288, .95], [2408, 236, .7], [3140, 300, .85], [1720, 236, .8], [3760, 280, .9],
        [1860, 274, .66], [2140, 186, .8], [2560, 214, .9], [2648, 268, .64], [2980, 232, .82],
        [3260, 372, .7], [3420, 200, .88], [3506, 254, .62], [4010, 322, .84], [4106, 262, .66],
        [3660, 430, .6], [3880, 468, .72], [4130, 434, .58], [2760, 442, .64], [2460, 158, .74]].forEach(g => {
        if (libre(g[0] - 30 * g[2], g[1] - 20 * g[2], 60 * g[2], 30 * g[2])) s += gaviota(g[0], g[1], g[2]);
      });
      /* dos gaviotas que cruzan el cielo aleteando */
      [[".9", "42s", "M 1400 210 Q 2200 150 3000 214 Q 3600 252 4340 200"], [".75", "54s", "M 4260 336 Q 3200 290 2200 344 Q 1500 382 900 340"]].forEach(v => {
        s += `<g opacity="${v[0]}"><path d="M-24 0 q12 -15 24 0 q12 -15 24 0" stroke="#fff" stroke-width="4.4" fill="none" stroke-linecap="round">
          <animate attributeName="d" values="M-24 0 q12 -15 24 0 q12 -15 24 0;M-24 0 q12 6 24 0 q12 6 24 0;M-24 0 q12 -15 24 0 q12 -15 24 0" dur="1.5s" repeatCount="indefinite"/></path>
          <animateMotion dur="${v[1]}" repeatCount="indefinite" path="${v[2]}"/></g>`;
      });
      /* ---------- EL MAR EN CAPAS: fondo, medio y primer plano ---------- */
      s += `<rect x="0" y="566" width="4200" height="534" fill="url(#pirXmarA)"/>
        <path d="M0 566 H4200" stroke="rgba(255,255,255,.5)" stroke-width="4"/>
        <path d="M0 742 Q160 712 320 742 T640 742 T960 742 T1280 742 T1600 742 T1920 742 T2240 742 T2560 742 T2880 742 T3200 742 T3520 742 T3840 742 T4200 742 L4200 1100 L0 1100 Z" fill="url(#pirXmarB)"/>
        <path d="M0 932 Q220 896 440 932 T880 932 T1320 932 T1760 932 T2200 932 T2640 932 T3080 932 T3520 932 T3960 932 T4200 932 L4200 1100 L0 1100 Z" fill="url(#pirXmarC)"/>`;
      /* la línea de costa de la isla, dibujada ya en el horizonte del fondo */
      s += `<g opacity=".45"><path d="M1780 566 Q1830 512 1890 566 Z" fill="#5f8a7a"/><path d="M1846 566 Q1892 526 1940 566 Z" fill="#4d7566"/>
        <path d="M3720 566 Q3772 520 3832 566 Z" fill="#5f8a7a"/><path d="M3800 566 Q3838 534 3880 566 Z" fill="#4d7566"/>
        <path d="M1244 566 Q1292 524 1346 566 Z" fill="#5f8a7a"/><path d="M1310 566 Q1348 538 1388 566 Z" fill="#4d7566"/>
        <path d="M4046 566 Q4098 522 4156 566 Z" fill="#5f8a7a"/><path d="M4126 566 Q4162 536 4200 566 Z" fill="#4d7566"/></g>`;
      /* dos velas muy lejanas, del tamaño que les toca a esa distancia */
      s += `<g fill="#8fb6cf" opacity=".5">
        <path d="M1570 566 L1626 566 L1618 578 Q1598 584 1578 578 Z"/><rect x="1596" y="516" width="3" height="50"/>
        <path d="M1600 520 Q1622 528 1622 552 L1600 556 Z"/><path d="M1594 526 Q1576 534 1576 554 L1594 556 Z"/>
        <path d="M3922 566 L3986 566 L3977 580 Q3954 587 3931 580 Z"/><rect x="3951" y="508" width="3" height="58"/>
        <path d="M3955 512 Q3980 522 3980 550 L3955 554 Z"/><path d="M3948 518 Q3928 528 3928 552 L3948 554 Z"/></g>`;
      /* el camino de luz del sol sobre el agua */
      s += `<g fill="#fff" opacity=".22"><ellipse cx="284" cy="620" rx="70" ry="7"/><ellipse cx="294" cy="664" rx="94" ry="8"/>
        <ellipse cx="280" cy="712" rx="120" ry="9"/><ellipse cx="298" cy="770" rx="150" ry="10"/></g>`;
      /* ---------- TRANSICIÓN: EL AGUA SE ACLARA AL ACERCARSE A LA ISLA ---------- */
      /* manchas de bajío turquesa a cada lado de la isla, sin borde duro: se
         difuminan en todas direcciones, así el mar hondo se vuelve agua clara
         de playa poco a poco y vuelve a ser honda al alejarse */
      s += `<ellipse cx="1980" cy="880" rx="360" ry="250" fill="url(#pirXvado)"/>
        <ellipse cx="2220" cy="990" rx="470" ry="200" fill="url(#pirXvado)" opacity=".8"/>
        <ellipse cx="1830" cy="1000" rx="300" ry="170" fill="url(#pirXvado)" opacity=".55"/>
        <ellipse cx="3190" cy="890" rx="360" ry="250" fill="url(#pirXvado)"/>
        <ellipse cx="2950" cy="990" rx="450" ry="195" fill="url(#pirXvado)" opacity=".8"/>
        <ellipse cx="3400" cy="1000" rx="310" ry="170" fill="url(#pirXvado)" opacity=".5"/>`;
      /* crestas de espuma repartidas por el mar */
      const crestas = [[120, 626, 88, ".5"], [520, 656, 100, ".45"], [1000, 620, 92, ".4"], [1420, 664, 96, ".42"],
        [1760, 620, 104, ".45"], [2100, 656, 100, ".4"], [3300, 612, 88, ".38"], [200, 856, 130, ".4"],
        [900, 890, 140, ".36"], [1500, 980, 150, ".34"], [3040, 962, 150, ".32"], [3480, 880, 140, ".38"], [3980, 1000, 150, ".3"],
        [2560, 640, 96, ".34"], [3720, 632, 100, ".4"], [4100, 668, 90, ".36"],
        [1240, 706, 110, ".36"], [1560, 668, 100, ".32"], [1640, 782, 120, ".3"], [2860, 624, 90, ".3"],
        [3560, 700, 110, ".34"], [3900, 600, 100, ".3"], [4060, 894, 130, ".3"], [3380, 1054, 140, ".3"]];
      crestas.forEach(c => { if (libre(c[0], c[1] - 14, c[2], 28)) s += cresta(c[0], c[1], c[2], c[3]); });
      /* ---------- EL GALEÓN DEL FONDO, en la neblina ---------- */
      /* navega en el hueco de mar que queda entre la colina y el acantilado,
         lejos del delfín, que antes le quedaba justo encima */
      s += `<g opacity=".4"><animateTransform attributeName="transform" type="translate" values="0 0;38 0;0 0" dur="64s" repeatCount="indefinite"/>
        <path d="M2658 556 L2822 556 L2804 592 Q2738 604 2676 592 Z" fill="#2f4a63"/>
        <rect x="2688" y="452" width="7" height="104" fill="#2f4a63"/><rect x="2740" y="428" width="7" height="128" fill="#2f4a63"/><rect x="2790" y="466" width="6" height="90" fill="#2f4a63"/>
        <path d="M2696 462 Q2728 452 2728 500 Q2728 540 2696 534 Z" fill="#2f4a63"/>
        <path d="M2748 438 Q2786 430 2786 486 Q2786 532 2748 526 Z" fill="#2f4a63"/>
        <path d="M2680 470 Q2658 484 2656 508" stroke="#2f4a63" stroke-width="4" fill="none"/>
        <path d="M2648 600 q34 -12 68 0 t68 0" stroke="#2f4a63" stroke-width="4" fill="none" stroke-linecap="round" opacity=".7"/></g>`;
      /* ---------- EL PUERTO: MUELLE DE PIEDRA, NORAYS Y CARGA ---------- */
      /* la coronación del muelle está en y=638: TODO lo que hay encima
         (farol, noray, cajas y barril) se apoya justo en esa línea */
      s += `<path d="M-40 638 L210 634 L226 1100 L-40 1100 Z" fill="url(#pirXpiedra)"/>
        <path d="M-40 638 L210 634 L212 662 L-40 666 Z" fill="#e4dccc"/>`;
      s += `<g stroke="rgba(90,80,66,.3)" stroke-width="4" fill="none">`;
      for (let y = 692; y < 1090; y += 48) s += `<path d="M-40 ${y} L${214 + (y - 692) * .03} ${y}"/>`;
      for (let x = 10; x < 210; x += 62) s += `<path d="M${x} 666 L${x + 4} 1090"/>`;
      s += `</g>`;
      /* el farol del puerto, plantado en la piedra */
      s += `<g><rect x="28" y="486" width="10" height="152" rx="5" fill="#4e5a63"/>
        <ellipse cx="33" cy="638" rx="17" ry="6" fill="#4e5a63"/>
        <path d="M14 486 L52 486 L46 452 L20 452 Z" fill="#ffdf8a" stroke="#4e5a63" stroke-width="5"/>
        <path d="M10 452 L56 452 L48 438 L18 438 Z" fill="#4e5a63"/>
        <circle cx="33" cy="470" r="7" fill="#fff6cf"><animate attributeName="opacity" values="1;.6;1" dur="4s" repeatCount="indefinite"/></circle></g>`;
      /* el noray y sus dos cabos, que van a amarrar el barco */
      s += `<g fill="#4e5a63"><rect x="50" y="594" width="24" height="44" rx="4"/><ellipse cx="62" cy="592" rx="19" ry="8"/></g>
        <path d="M61 584 Q206 530 336 622" stroke="#c9a870" stroke-width="6" fill="none"/>
        <path d="M68 592 Q216 566 352 640" stroke="#c9a870" stroke-width="5" fill="none"/>`;
      /* cajas y barril de carga, todos apoyados en la coronación */
      s += `<g><rect x="80" y="578" width="68" height="60" rx="6" fill="url(#pirXmadera)"/>
        <path d="M80 598 h68 M114 578 v60" stroke="rgba(90,60,32,.35)" stroke-width="5"/>
        <rect x="92" y="540" width="46" height="38" rx="5" fill="url(#pirXmadera)"/>
        <path d="M92 558 h46" stroke="rgba(90,60,32,.35)" stroke-width="4"/></g>
        <g><path d="M154 638 Q144 609 154 580 L194 580 Q204 609 194 638 Z" fill="url(#pirXmadera)"/>
        <path d="M150 598 h48 M150 618 h48" stroke="#6b4726" stroke-width="5"/></g>`;
      /* ---------- EL BARCO PIRATA: casco, cubiertas, palos y velas ---------- */
      /* el casco y las dos cubiertas donde se apoyan el timón y el cañón */
      s += `<path d="M190 646 L1616 646 L1548 826 Q890 890 344 826 Q214 742 190 646 Z" fill="url(#pirXcasco)"/>
        <path d="M214 704 Q896 758 1580 704" stroke="rgba(255,255,255,.14)" stroke-width="7" fill="none"/>
        <path d="M226 752 Q896 810 1560 752" stroke="rgba(0,0,0,.16)" stroke-width="7" fill="none"/>
        <path d="M200 660 L1606 660 L1598 680 L204 680 Z" fill="#c9a870"/>
        <rect x="186" y="626" width="1436" height="22" rx="9" fill="url(#pirXmadera)"/>
        <path d="M190 646 L1616 646 L1610 658 L194 658 Z" fill="rgba(0,0,0,.18)"/>`;
      /* la cubierta alta de popa, con su barandilla */
      s += `<path d="M196 596 L470 596 L470 628 L196 628 Z" fill="url(#pirXmadera)"/>
        <path d="M194 586 L472 586 L472 600 L194 600 Z" fill="#c9a870"/>
        <g fill="#8a5f34">`;
      for (let x = 208; x < 462; x += 26) s += `<rect x="${x}" y="598" width="9" height="30" rx="4"/>`;
      s += `</g>`;
      /* la plataforma de artillería: el cañón de confeti se apoya aquí y no
         en el aire, con sus dos tornapuntas clavadas en el casco */
      s += `<g><path d="M538 704 L708 701 L708 716 L538 719 Z" fill="url(#pirXmadera)"/>
        <path d="M538 700 L708 697 L708 706 L538 709 Z" fill="#c9a870"/>
        <g stroke="#6b4726" stroke-width="9" fill="none" stroke-linecap="round">
        <path d="M560 718 L590 758"/><path d="M688 716 L658 756"/></g>
        <path d="M556 690 L692 687" stroke="rgba(40,24,12,.22)" stroke-width="10"/></g>`;
      /* los ojos de buey, encendidos */
      [[350, 716], [500, 726], [1140, 730], [1300, 720], [1450, 708]].forEach(o => {
        s += `<circle cx="${o[0]}" cy="${o[1]}" r="17" fill="#ffdf8a" stroke="#6b4726" stroke-width="6"/>
          <path d="M${o[0] - 12} ${o[1]} h24" stroke="rgba(107,71,38,.5)" stroke-width="3"/>`;
      });
      /* el palo de mesana, a popa, con su vela pequeña */
      s += `<rect x="372" y="286" width="16" height="360" rx="7" fill="url(#pirXmadera)"/>
        <circle cx="380" cy="280" r="9" fill="#c9a870"/>
        <path d="M300 350 L462 348 L462 362 L300 364 Z" fill="#c9a870"/>
        <path d="M304 364 Q380 388 458 364 Q470 428 458 486 Q380 508 304 486 Q292 428 304 364 Z" fill="url(#pirXvela)"/>
        <path d="M312 392 Q380 410 450 392 M312 458 Q380 476 450 458" stroke="rgba(150,130,96,.45)" stroke-width="4" fill="none"/>
        <path d="M380 286 Q398 278 398 266 Q398 256 380 254 Z" fill="#e8544f"/>`;
      /* el palo mayor, el más alto: arriba la bandera y abajo la vela mayor */
      s += `<rect x="692" y="150" width="18" height="496" rx="8" fill="url(#pirXmadera)"/>
        <circle cx="701" cy="144" r="10" fill="#c9a870"/>
        <path d="M584 374 L822 372 L822 388 L584 390 Z" fill="#c9a870"/>
        <path d="M588 390 Q700 420 818 390 Q834 470 818 556 Q700 584 588 556 Q572 470 588 390 Z" fill="url(#pirXvela)"/>
        <path d="M598 424 Q700 448 808 424 M598 512 Q700 538 808 512" stroke="rgba(150,130,96,.45)" stroke-width="4" fill="none"/>
        <path d="M632 396 L628 552 M772 396 L776 552" stroke="rgba(150,130,96,.3)" stroke-width="4"/>`;
      /* el palo de trinquete, con la cofa del vigía y su vela */
      s += `<rect x="932" y="212" width="16" height="434" rx="7" fill="url(#pirXmadera)"/>
        <circle cx="940" cy="206" r="9" fill="#c9a870"/>
        <path d="M886 340 L994 340 L986 380 L894 380 Z" fill="url(#pirXmadera)"/>
        <path d="M878 330 L1002 330 L1002 344 L878 344 Z" fill="#c9a870"/>
        <g fill="#8a5f34"><rect x="892" y="310" width="9" height="26" rx="4"/><rect x="926" y="306" width="9" height="30" rx="4"/><rect x="970" y="310" width="9" height="26" rx="4"/></g>
        <path d="M860 418 L1020 416 L1020 430 L860 432 Z" fill="#c9a870"/>
        <path d="M864 432 Q940 458 1016 432 Q1028 496 1016 552 Q940 574 864 552 Q852 496 864 432 Z" fill="url(#pirXvela)"/>
        <path d="M872 462 Q940 482 1008 462 M872 520 Q940 540 1008 520" stroke="rgba(150,130,96,.45)" stroke-width="4" fill="none"/>
        <path d="M940 212 Q958 204 958 192 Q958 182 940 180 Z" fill="#f5b731"/>`;
      /* la botavara baja de proa, donde se posa el loro */
      s += `<path d="M1230 582 L1596 570" stroke="url(#pirXmadera)" stroke-width="16" stroke-linecap="round"/>
        <path d="M1230 572 L1596 560" stroke="#c9a870" stroke-width="6" stroke-linecap="round"/>
        <path d="M1258 582 L1266 640 M1372 578 L1378 638 M1520 574 L1526 636" stroke="rgba(238,232,214,.5)" stroke-width="4"/>
        <path d="M1240 560 Q1420 528 1596 552" stroke="rgba(238,232,214,.45)" stroke-width="3" fill="none"/>`;
      /* la jarcia: los cabos que sujetan los palos */
      s += `<g stroke="rgba(238,232,214,.5)" stroke-width="3" fill="none">
        <path d="M701 160 L360 606 M701 160 L1200 630 M701 160 L392 296 M940 232 L1560 636 M940 232 L744 630 M380 296 L232 596 M940 232 L716 190"/></g>`;
      /* el bauprés y el ancla */
      s += `<path d="M1606 640 L1756 578" stroke="url(#pirXmadera)" stroke-width="16" stroke-linecap="round"/>
        <path d="M1622 634 Q1690 640 1750 610" stroke="rgba(238,232,214,.45)" stroke-width="3" fill="none"/>
        <path d="M1560 690 Q1578 766 1562 834" stroke="#8a7059" stroke-width="4" fill="none"/>
        <path d="M1562 834 q-16 22 4 34 q20 -12 4 -34 Z" fill="#8a7059"/>`;
      /* el nombre pintado en el casco, con una cenefa alegre */
      s += `<g fill="#f5b731"><circle cx="800" cy="702" r="7"/><circle cx="836" cy="705" r="7"/><circle cx="872" cy="707" r="7"/><circle cx="908" cy="705" r="7"/><circle cx="944" cy="702" r="7"/></g>`;
      /* ---------- EL MUELLE DE MADERA: nace en el puerto y ENTRA EN EL MAR ---------- */
      /* los tablones van del muelle de piedra hasta pasada la proa: al final
         se mojan, se oscurecen y se acaban entre espuma y pilotes */
      s += `<path d="M150 830 L1700 792 L1700 822 L150 862 Z" fill="url(#pirXmadera)"/>
        <path d="M1560 796 L1790 790 L1790 820 L1560 826 Z" fill="url(#pirXmojada)"/>`;
      s += `<g fill="#8a5f34">`;
      for (let x = 160; x < 1780; x += 30) s += `<rect x="${x}" y="${(832 - (x - 160) * .0258).toFixed(1)}" width="21" height="30" rx="3"/>`;
      s += `</g>`;
      s += `<g fill="#6b4726">`;
      [[210, 858], [420, 852], [660, 846], [900, 840], [1160, 834], [1420, 826], [1660, 818]].forEach(p => {
        s += `<rect x="${p[0]}" y="${p[1]}" width="17" height="130" rx="7"/>`;
      });
      s += `</g>`;
      s += `<g fill="#7d5730"><rect x="1734" y="782" width="22" height="120" rx="10"/><rect x="1772" y="788" width="20" height="112" rx="9"/></g>
        <g stroke="rgba(255,255,255,.55)" stroke-width="4" fill="none" stroke-linecap="round">
        <path d="M1720 904 q22 -12 44 0 M1758 916 q20 -11 40 0 M1660 936 q24 -12 48 0"/></g>
        <g fill="#fff" opacity=".45"><ellipse cx="1748" cy="900" rx="42" ry="10"/><ellipse cx="1790" cy="918" rx="34" ry="8"/></g>`;
      /* norays del muelle y unas cajas amarradas: la tablazón se aleja y su
         canto sube de y=816 (x=700) a y=800 (x=1350), así que cada bulto se
         apoya en SU altura de tablón y el cabo va de un noray al otro
         (pasando por detrás de la caja), sin puntas de cabo en el aire */
      s += `<g fill="#4e5a63"><rect x="700" y="782" width="20" height="34" rx="9"/><rect x="1230" y="769" width="20" height="34" rx="9"/></g>
        <path d="M712 781 Q976 812 1238 770" stroke="#c9a870" stroke-width="5" fill="none"/>
        <g><rect x="1040" y="751" width="66" height="56" rx="6" fill="url(#pirXmadera)"/>
        <path d="M1040 771 h66 M1073 751 v56" stroke="rgba(90,60,32,.35)" stroke-width="5"/></g>
        <g><path d="M1310 801 Q1300 773 1310 745 L1348 745 Q1358 773 1348 801 Z" fill="url(#pirXmadera)"/>
        <path d="M1306 763 h46 M1306 783 h46" stroke="#6b4726" stroke-width="5"/></g>`;
      /* ---------- TRANSICIÓN: MAR ABIERTO CON OLEAJE, ENTRE MUELLE E ISLA ---------- */
      /* aquí el agua es honda y el oleaje es más alto: tres lomos seguidos */
      s += `<path d="M1780 856 Q1856 796 1934 856 Q1856 892 1780 856 Z" fill="#fff" opacity=".4"/>
        ${cresta(1786, 826, 150, ".5")}
        ${cresta(1830, 900, 170, ".42")}
        ${cresta(1770, 972, 160, ".36")}`;
      s += `<g fill="#fff" opacity=".5"><circle cx="1806" cy="792" r="8"/><circle cx="1874" cy="806" r="6"/><circle cx="1922" cy="782" r="5"/>
        <animate attributeName="opacity" values=".6;.22;.6" dur="3.8s" repeatCount="indefinite"/></g>`;
      /* ---------- LA ISLA DEL TESORO: arena, colina, palmeras y acantilado ---------- */
      s += `<path d="M1900 928 Q2020 828 2180 796 L2320 790 Q2500 796 2680 836 Q2880 880 3050 880 Q3180 880 3280 916 L3280 1014 L1900 1014 Z" fill="url(#pirXarena)"/>
        <path d="M1900 928 Q2020 828 2180 796 L2320 790 Q2500 796 2680 836 Q2880 880 3050 880 Q3180 880 3280 916 L3280 940 Q3140 906 3000 906 Q2820 906 2640 864 Q2470 824 2320 816 L2180 822 Q2036 856 1926 942 Z" fill="#fff" opacity=".35"/>`;
      /* la colina verde: la cumbre sube hasta rozar el horizonte para que la
         palmera de cocos se plante en ella y no quede colgada en el aire */
      s += `<path d="M2172 826 Q2250 652 2300 566 Q2340 548 2388 566 Q2508 656 2626 834 Z" fill="url(#pirXverde)"/>
        <path d="M2172 826 Q2250 652 2300 566 Q2320 556 2342 556 Q2282 662 2222 830 Z" fill="#8fcd78" opacity=".55"/>
        <path d="M2262 640 Q2320 606 2390 632" stroke="#8fcd78" stroke-width="6" fill="none" opacity=".5"/>`;
      s += `<g stroke="#3f8a45" stroke-width="5" fill="none" stroke-linecap="round">
        <path d="M2214 784 q-6 -26 -18 -36 M2226 784 q0 -30 6 -42 M2238 784 q8 -24 20 -32"/>
        <path d="M2500 792 q-6 -26 -18 -36 M2512 792 q0 -30 6 -42 M2524 792 q8 -24 20 -32"/>
        <path d="M2334 716 q-6 -24 -16 -32 M2346 716 q0 -26 6 -36"/></g>`;
      /* TRANSICIÓN VERDE-ROCA: entre la colina y el acantilado sale un lomo de
         peñascos con hierba encima que se va pelando hacia la derecha */
      s += `<path d="M2592 852 Q2704 782 2790 756 Q2874 732 2918 782 Q2952 818 2964 882 L2592 882 Z" fill="url(#pirXroca)"/>
        <path d="M2592 852 Q2704 782 2790 756 Q2846 740 2886 758 Q2802 776 2726 812 Q2660 844 2624 882 L2592 882 Z" fill="#c2ae94" opacity=".45"/>
        <path d="M2592 852 Q2700 784 2784 760 Q2822 750 2848 754 Q2768 774 2700 806 Q2644 834 2612 870 Z" fill="url(#pirXverdeClaro)" opacity=".9"/>
        <g stroke="#5aa05a" stroke-width="5" fill="none" stroke-linecap="round">
        <path d="M2648 828 q-6 -22 -16 -30 M2660 824 q0 -24 6 -32 M2724 800 q-6 -22 -16 -28 M2736 796 q0 -22 6 -30 M2802 776 q-4 -20 -14 -26"/></g>
        <g fill="url(#pirXguijarro)"><ellipse cx="2556" cy="846" rx="26" ry="16"/><ellipse cx="2606" cy="866" rx="20" ry="12"/><ellipse cx="2874" cy="862" rx="30" ry="18"/></g>`;
      /* la pedrera que baja del acantilado hacia la cala: se dibuja ANTES que
         la roca grande, así la pared la tapa y solo asoma el faldón */
      s += `<path d="M3164 838 Q3238 850 3302 886 Q3352 914 3322 938 Q3244 946 3186 918 Q3144 882 3164 838 Z" fill="url(#pirXroca)"/>
        <g fill="url(#pirXguijarro)"><ellipse cx="3244" cy="900" rx="38" ry="18"/><ellipse cx="3304" cy="916" rx="26" ry="13"/><ellipse cx="3196" cy="884" rx="22" ry="12"/></g>`;
      /* el acantilado con la cueva del tesoro y una cuevita más pequeña */
      s += `<path d="M2900 862 Q2916 620 3026 466 Q3146 552 3200 694 Q3240 800 3252 866 Z" fill="url(#pirXroca)"/>
        <path d="M3026 466 Q3146 552 3200 694 Q3240 800 3252 866 L3168 866 Q3136 706 3070 566 Z" fill="#8a7059"/>
        <path d="M2944 706 Q3028 682 3112 700 M2964 792 Q3058 770 3152 788" stroke="rgba(255,255,255,.18)" stroke-width="6" fill="none"/>
        <path d="M2966 656 Q2970 540 3038 526 Q3110 542 3114 656 Z" fill="url(#pirXcueva)"/>
        <path d="M2952 650 L3130 648 L3136 670 L2946 672 Z" fill="#8a7059"/>`;
      /* al pie del acantilado, hierba trepando por la izquierda y una rampa de
         guijarros por la derecha: así la roca no cae a plomo sobre nada */
      s += `<g stroke="#5aa05a" stroke-width="5" fill="none" stroke-linecap="round">
        <path d="M2918 848 q-6 -24 -16 -32 M2930 844 q0 -26 6 -34 M2944 846 q8 -22 20 -28 M3196 848 q-6 -22 -16 -28 M3208 844 q0 -24 6 -32"/></g>
        <g fill="#3f8a45"><ellipse cx="2934" cy="856" rx="26" ry="12"/><ellipse cx="3204" cy="856" rx="22" ry="10"/></g>
        <g fill="#8b7358" opacity=".7"><ellipse cx="3268" cy="924" rx="14" ry="8"/><ellipse cx="3210" cy="898" rx="11" ry="7"/></g>`;
      /* palmeras de la isla */
      const palmera = (x, y, k, giro) => `<g transform="translate(${x} ${y}) scale(${giro * k} ${k})">
        <path d="M0 0 Q14 -62 -4 -116" stroke="#7d5730" stroke-width="15" fill="none" stroke-linecap="round"/>
        <path d="M0 -14 Q12 -64 -2 -110" stroke="#a3703f" stroke-width="5" fill="none" stroke-linecap="round"/>
        <g stroke="#3f8a45" stroke-width="11" fill="none" stroke-linecap="round">
        <path d="M-4 -116 Q-54 -136 -92 -118"/><path d="M-4 -116 Q-42 -158 -78 -158"/>
        <path d="M-4 -116 Q8 -166 44 -168"/><path d="M-4 -116 Q42 -148 80 -126"/><path d="M-4 -116 Q34 -104 58 -74"/></g>
        <circle cx="-12" cy="-108" r="9" fill="#8a5a2b"/><circle cx="6" cy="-104" r="9" fill="#8a5a2b"/><circle cx="-2" cy="-94" r="8" fill="#8a5a2b"/></g>`;
      /* todas plantadas en tierra firme: dos en la colina, una en el lomo de
         roca y otra al pie del acantilado. Las dos que crecían dentro del agua
         se han mudado a la duna y al lomo */
      s += palmera(2216, 806, .82, 1) + palmera(2520, 820, 1, -1) + palmera(2663, 812, .6, 1) + palmera(2918, 878, .8, -1);
      /* matorrales y conchas en la arena */
      s += `<g fill="#3f8a45"><ellipse cx="2352" cy="820" rx="34" ry="14"/><ellipse cx="2700" cy="874" rx="30" ry="12"/><ellipse cx="3160" cy="906" rx="26" ry="11"/></g>`;
      [[1990, 926, "#ffd9c0"], [2260, 900, "#ffe6d2"], [2960, 926, "#ffd9c0"], [3244, 960, "#ffe6d2"]].forEach(c => {
        if (!libre(c[0] - 14, c[1] - 10, 28, 20)) return;
        s += `<g transform="translate(${c[0]} ${c[1]})"><path d="M-14 8 Q-14 -12 0 -12 Q14 -12 14 8 Z" fill="${c[2]}"/>
          <path d="M-8 8 L-2 -10 M0 8 L0 -12 M8 8 L2 -10" stroke="rgba(200,140,110,.6)" stroke-width="2"/></g>`;
      });
      /* ---------- OLAS DE PRIMER PLANO: tapan la base del casco y de la isla ---------- */
      s += `<path d="M0 848 Q140 812 280 848 T560 852 T840 846 T1120 854 T1400 848 T1680 856 T1960 848 T2240 856 T2520 848 T2800 856 T3080 848 T3360 856 T3640 848 T3920 856 T4200 848 L4200 1100 L0 1100 Z" fill="url(#pirXmarB)" opacity=".92"/>
        <path d="M0 1000 Q220 962 440 1000 T880 1004 T1320 996 T1760 1004 T2200 998 T2640 1002 T3080 996 T3520 1004 T3960 998 T4200 1002 L4200 1100 L0 1100 Z" fill="url(#pirXmarC)"/>`;
      [[100, 840, 120, ".5"], [640, 846, 130, ".45"], [1240, 842, 120, ".4"], [3480, 850, 130, ".45"], [4020, 844, 120, ".4"],
        [340, 992, 150, ".38"], [1880, 990, 150, ".34"], [3660, 996, 150, ".36"], [2960, 986, 140, ".3"],
        [820, 928, 140, ".3"], [1420, 914, 130, ".28"], [180, 1062, 150, ".3"], [1120, 1050, 140, ".26"],
        [3720, 858, 130, ".32"], [4110, 958, 120, ".28"], [520, 1044, 140, ".24"]].forEach(c => {
        if (libre(c[0], c[1] - 14, c[2], 28)) s += cresta(c[0], c[1], c[2], c[3]);
      });
      /* el reflejo del sol sigue brillando en el agua de delante */
      s += `<g fill="#fff" opacity=".14"><ellipse cx="296" cy="892" rx="164" ry="11"/><ellipse cx="284" cy="948" rx="132" ry="9"/>
        <ellipse cx="304" cy="1010" rx="176" ry="12"/><ellipse cx="288" cy="1064" rx="140" ry="10"/></g>`;
      /* la barquita de remos, amarrada al final del muelle. Va DESPUÉS de las
         olas de primer plano: si no, el oleaje se la tragaba entera */
      s += `<g><path d="M1746 852 L1874 852 L1848 894 Q1810 904 1772 894 Z" fill="url(#pirXmadera)"/>
        <path d="M1742 846 L1878 846 L1878 858 L1742 858 Z" fill="#c9a870"/>
        <path d="M1778 862 h64 M1778 874 h54" stroke="rgba(0,0,0,.16)" stroke-width="4"/>
        <path d="M1866 856 L1920 826 M1756 856 L1706 828" stroke="#8a5f34" stroke-width="6" stroke-linecap="round"/>
        <path d="M1918 820 q12 6 4 16 Z" fill="#8a5f34"/><path d="M1708 822 q-12 6 -4 16 Z" fill="#8a5f34"/>
        <path d="M1734 896 q28 -14 56 0 t56 0" stroke="rgba(255,255,255,.55)" stroke-width="4" fill="none" stroke-linecap="round"/></g>`;
      /* ---------- LA PLAYA DEL TESORO, en primer plano, delante de las olas ---------- */
      /* la orilla sube en un hombro de arena justo debajo del punto de la playa
         (ahí se asienta el castillo) y sigue de una pieza hasta la cala */
      s += `<path d="M1820 1100 Q1930 976 1994 866 Q2010 812 2062 809 Q2114 812 2146 866 Q2230 886 2320 862 Q2560 812 2820 856 Q3020 890 3130 1100 Z" fill="url(#pirXarena)"/>
        <path d="M1820 1100 Q1930 976 1994 866 Q2010 812 2062 809 Q2114 812 2146 866 Q2230 886 2320 862 Q2560 812 2820 856 Q3020 890 3130 1100 L3092 1100 Q2984 916 2808 886 Q2560 844 2334 892 Q2238 912 2152 894 Q2112 844 2062 841 Q2020 843 2012 880 Q1956 984 1860 1100 Z" fill="#fff" opacity=".45"/>
        <path d="M2040 1006 q22 -12 44 0 M3054 1010 q22 -12 44 0 M1896 1046 q24 -12 48 0" stroke="rgba(255,255,255,.6)" stroke-width="5" fill="none" stroke-linecap="round"/>
        <g fill="#e0bd76" opacity=".5"><ellipse cx="1946" cy="1010" rx="32" ry="10"/><ellipse cx="2246" cy="944" rx="36" ry="11"/><ellipse cx="2960" cy="1000" rx="34" ry="11"/></g>`;
      /* el canalillo de agua entre la orilla de delante y la de detrás: se pone
         turquesa y con rizos para que se lea como poca agua, no como un hueco */
      s += `<ellipse cx="2270" cy="892" rx="190" ry="52" fill="url(#pirXvado)" opacity=".95"/>
        <ellipse cx="1960" cy="874" rx="130" ry="42" fill="url(#pirXvado)" opacity=".8"/>
        <path d="M2200 886 q24 -11 48 0 M2306 890 q22 -10 44 0" stroke="rgba(255,255,255,.55)" stroke-width="4" fill="none" stroke-linecap="round"/>`;
      s += palmera(2010, 950, .6, 1);
      /* un cangrejito paseando por la arena de delante, ya fuera del agua */
      s += `<g><animateTransform attributeName="transform" type="translate" values="0 0;90 0;0 0" dur="19s" repeatCount="indefinite"/>
        <ellipse cx="2210" cy="1010" rx="20" ry="13" fill="#ef6c4b"/>
        <circle cx="2204" cy="998" r="4" fill="#fff"/><circle cx="2216" cy="998" r="4" fill="#fff"/>
        <circle cx="2204" cy="998" r="2" fill="#33231c"/><circle cx="2216" cy="998" r="2" fill="#33231c"/>
        <path d="M2190 1012 l-12 6 M2190 1018 l-12 8 M2230 1012 l12 6 M2230 1018 l12 8" stroke="#ef6c4b" stroke-width="4" stroke-linecap="round"/>
        <path d="M2192 1000 q-14 -8 -18 4" stroke="#ef6c4b" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M2228 1000 q14 -8 18 4" stroke="#ef6c4b" stroke-width="5" fill="none" stroke-linecap="round"/></g>`;
      /* ---------- TRANSICIÓN: LA CALA DE AGUA CLARA Y SUS CUEVAS ---------- */
      /* al costado derecho de la isla, el agua se pone transparente y la roca
         se abre en dos cuevitas al nivel del agua */
      /* el agua clara nace pegada a la arena y se apaga hacia el mar abierto:
         son manchas difuminadas, no charcos con borde */
      s += `<ellipse cx="3226" cy="956" rx="290" ry="150" fill="url(#pirXcalaSuave)"/>
        <ellipse cx="3172" cy="1046" rx="250" ry="112" fill="url(#pirXcalaSuave)" opacity=".85"/>
        <ellipse cx="3390" cy="1016" rx="210" ry="98" fill="url(#pirXcalaSuave)" opacity=".55"/>
        <path d="M3170 918 q26 -12 52 0 M3268 950 q26 -12 52 0 M3340 924 q24 -11 48 0 M3186 1044 q26 -12 52 0 M3300 1064 q26 -12 52 0" stroke="rgba(255,255,255,.6)" stroke-width="4" fill="none" stroke-linecap="round"/>`;
      /* la roca de las cuevitas, asentada en su banco de guijarros */
      s += `<ellipse cx="3340" cy="890" rx="118" ry="24" fill="url(#pirXguijarro)"/>
        <g fill="#8b7358" opacity=".65"><ellipse cx="3272" cy="894" rx="16" ry="9"/><ellipse cx="3410" cy="896" rx="14" ry="8"/></g>
        <path d="M3252 890 Q3268 806 3336 792 Q3406 800 3428 884 Z" fill="url(#pirXroca)"/>
        <path d="M3336 792 Q3406 800 3428 884 L3384 886 Q3372 826 3330 806 Z" fill="#8a7059"/>
        <path d="M3282 884 Q3288 836 3320 830 Q3350 838 3352 884 Z" fill="url(#pirXcueva)"/>
        <path d="M3374 882 Q3378 852 3398 848 Q3418 854 3420 882 Z" fill="url(#pirXcueva)"/>
        <path d="M3268 812 Q3320 792 3376 810" stroke="rgba(255,255,255,.2)" stroke-width="6" fill="none"/>
        <path d="M3238 894 q24 -11 48 0 M3396 898 q22 -10 44 0" stroke="rgba(255,255,255,.55)" stroke-width="4" fill="none" stroke-linecap="round"/>`;
      /* ---------- ALTA MAR: donde se apoyan la botella, el delfín y los demás ---------- */
      s += `<path d="M3256 704 Q3316 676 3376 704 Q3330 722 3256 704 Z" fill="#fff" opacity=".55"/>
        ${cresta(3248, 712, 130, ".5")}`;
      s += `<path d="M3496 606 Q3580 578 3664 606 Q3664 632 3580 640 Q3496 632 3496 606 Z" fill="#fff" opacity=".5"/>
        <g fill="#fff" opacity=".6"><circle cx="3508" cy="580" r="7"/><circle cx="3646" cy="574" r="6"/><circle cx="3688" cy="606" r="5"/><circle cx="3474" cy="612" r="5"/>
        <animate attributeName="opacity" values=".65;.25;.65" dur="3.4s" repeatCount="indefinite"/></g>
        ${cresta(3484, 626, 200, ".45")}`;
      s += `${cresta(3776, 750, 200, ".5")}
        <path d="M3800 758 Q3880 732 3960 758 Q3880 780 3800 758 Z" fill="#fff" opacity=".4"/>`;
      /* burbujas del pulpo amistoso */
      s += `<g fill="none" stroke="rgba(255,255,255,.5)" stroke-width="3">
        <circle cx="3450" cy="900" r="10"><animate attributeName="cy" values="900;836;900" dur="7s" repeatCount="indefinite"/></circle>
        <circle cx="3740" cy="944" r="8"><animate attributeName="cy" values="944;880;944" dur="9s" repeatCount="indefinite"/></circle>
        <circle cx="3422" cy="982" r="7"/><circle cx="3776" cy="1014" r="9"/><circle cx="3480" cy="1046" r="6"/></g>`;
      /* un barril y una caja de la carga, flotando en el mar abierto, cada uno
         con su espuma para que no parezcan colgados del aire */
      s += `<g><path d="M3662 704 Q3652 678 3662 652 L3706 652 Q3716 678 3706 704 Z" fill="url(#pirXmadera)"/>
        <path d="M3658 668 h52 M3658 688 h52" stroke="#6b4726" stroke-width="5"/>
        <path d="M3640 708 q28 -13 56 0 t56 0" stroke="rgba(255,255,255,.6)" stroke-width="4" fill="none" stroke-linecap="round"/>
        <ellipse cx="3684" cy="710" rx="46" ry="9" fill="#fff" opacity=".35"/></g>
        <g><rect x="1642" y="694" width="56" height="46" rx="6" fill="url(#pirXmadera)"/>
        <path d="M1642 712 h56 M1670 694 v46" stroke="rgba(90,60,32,.35)" stroke-width="5"/>
        <path d="M1620 744 q28 -13 56 0 t56 0" stroke="rgba(255,255,255,.6)" stroke-width="4" fill="none" stroke-linecap="round"/>
        <ellipse cx="1670" cy="746" rx="48" ry="9" fill="#fff" opacity=".35"/></g>`;
      /* pececillos de colores asomando entre las olas */
      const pez = (x, y, k, giro, c) => `<g transform="translate(${x} ${y}) scale(${giro * k} ${k})" fill="${c}">
        <ellipse cx="0" cy="0" rx="22" ry="12"/><path d="M20 0 L36 -12 L36 12 Z"/>
        <circle cx="-11" cy="-3" r="3.4" fill="#fff"/><circle cx="-11" cy="-3" r="1.6" fill="#2b2320"/></g>`;
      s += pez(3986, 942, .8, 1, "#f6b24a") + pez(4128, 972, .62, -1, "#7fc9e8") +
        pez(1274, 948, .7, 1, "#f6b24a") + pez(1512, 966, .55, -1, "#ef8f6d") + pez(2884, 706, .6, 1, "#7fc9e8");
      /* las rocas donde canta la sirena */
      s += `<path d="M3966 862 Q3998 836 4062 838 L4126 842 Q4176 856 4180 902 Q4092 932 3990 920 Q3948 900 3966 862 Z" fill="url(#pirXroca)"/>
        <path d="M3998 866 Q4062 852 4124 868" stroke="rgba(255,255,255,.22)" stroke-width="6" fill="none"/>
        <path d="M3936 916 q26 -12 52 0 M4144 928 q22 -10 44 0" stroke="rgba(255,255,255,.5)" stroke-width="4" fill="none" stroke-linecap="round"/>`;
      /* algas suaves meciéndose en el fondo */
      s += `<g stroke="#2f8b78" stroke-width="7" fill="none" stroke-linecap="round" opacity=".7">
        <path d="M3360 1096 q-16 -50 4 -92"><animate attributeName="d" values="M3360 1096 q-16 -50 4 -92;M3360 1096 q16 -50 -4 -92;M3360 1096 q-16 -50 4 -92" dur="8s" repeatCount="indefinite"/></path>
        <path d="M4008 1096 q18 -46 -2 -86"/><path d="M3268 1096 q-14 -40 2 -74"/><path d="M3900 1096 q16 -44 -2 -80"/></g>`;
      /* conchitas y una estrella de mar en la orilla de delante */
      s += `<g><path d="M2360 1044 l14 26 l28 4 l-20 20 l6 28 l-26 -14 l-26 14 l6 -28 l-20 -20 l28 -4 Z" fill="#ff9f6e"/></g>
        <g fill="#ffe6d2"><ellipse cx="2900" cy="1046" rx="17" ry="13"/><ellipse cx="2500" cy="1064" rx="15" ry="11"/></g>
        <g stroke="rgba(200,140,110,.55)" stroke-width="2.4" fill="none"><path d="M2890 1050 l8 -12 M2900 1052 l0 -14 M2910 1050 l-8 -12"/></g>`;
      /* ---------- EL MAPA ANTIGUO DESPLEGADO EN LA ARENA ---------- */
      s += `<g><path d="M2560 890 L3000 842 L3024 1030 L2582 1068 Z" fill="url(#pirXpapel)"/>
        <path d="M2560 890 L3000 842 L3000 858 L2562 906 Z" fill="#fff" opacity=".45"/>
        <path d="M2560 890 Q2538 904 2554 924 L2570 982 Q2554 998 2576 1010 L2582 1068" stroke="#c9a870" stroke-width="7" fill="none"/>
        <path d="M3000 842 Q3022 854 3008 874 L3020 930 Q3036 946 3018 960 L3024 1030" stroke="#c9a870" stroke-width="7" fill="none"/>
        <path d="M2606 1004 Q2666 944 2736 974 Q2812 1004 2874 948 Q2930 898 2986 916" stroke="#8a5f34" stroke-width="5" fill="none" stroke-dasharray="14 14" stroke-linecap="round"/>
        <path d="M2952 900 L2992 944 M2992 900 L2952 944" stroke="#c0392b" stroke-width="9" stroke-linecap="round"/>
        <g fill="none" stroke="#8a5f34" stroke-width="4">
        <circle cx="2646" cy="920" r="30"/><circle cx="2646" cy="920" r="12"/></g>
        <path d="M2646 884 L2656 914 L2646 956 L2636 914 Z" fill="#c0392b"/>
        <path d="M2610 920 L2640 910 L2682 920 L2640 930 Z" fill="#8a5f34"/>
        <g fill="#a9c98f" opacity=".8"><ellipse cx="2790" cy="906" rx="34" ry="16"/><ellipse cx="2884" cy="1022" rx="40" ry="18"/><ellipse cx="2688" cy="1030" rx="28" ry="13"/></g>
        <g stroke="#a3b8c9" stroke-width="3" fill="none" opacity=".7">
        <path d="M2740 1040 q16 -10 32 0 t32 0 M2830 890 q16 -10 32 0 t32 0 M2600 960 q14 -9 28 0 t28 0"/></g>
        <path d="M2916 1000 h84 M2916 994 v12 M2958 994 v12 M3000 994 v12" stroke="#8a5f34" stroke-width="4"/></g>`;
      return decoSvg(s, 4200);
    }
  },

  /* ---------- CHARLA ---------- */
  chat: {
    keywords: [
      { keys: ["hola", "hello", "hi ", "ahoj", "bonjour", "salut", "bon dia", "buenas", "ahoy"],
        replies: [{ es: "¡Ahoy, {name}! Bienvenida a bordo. ¿Jugamos a algo o charlamos un ratito?", ca: "Ahoy, {name}! Benvinguda a bord. Juguem a alguna cosa o xerrem una estoneta?", en: "Ahoy, {name}! Welcome aboard. Shall we play something or chat for a bit?", cs: "Ahoy, {name}! Vítej na palubě. Zahrajeme si něco, nebo si chvilku popovídáme?", fr: "Ohé, {name} ! Bienvenue à bord. On joue à quelque chose ou on discute un petit peu ?" }] },
      { keys: ["arr", "arrr"],
        replies: [{ es: "¡Arrr! Así gritamos los piratas cuando estamos contentos. ¡Arrr, arrr, {name}!", ca: "Arrr! Així cridem els pirates quan estem contents. Arrr, arrr, {name}!", en: "Arrr! That is what pirates shout when we are happy. Arrr, arrr, {name}!", cs: "Arrr! Tak křičíme my piráti, když máme radost. Arrr, arrr, {name}!", fr: "Arrr ! C'est ce que crient les pirates quand ils sont contents. Arrr, arrr, {name} !" }] },
      { keys: ["como estas", "how are you", "jak se mas", "comment ca va", "com estas", "que tal"],
        replies: [{ es: "¡Feliz como un loro con galleta nueva! ¿Y tú cómo estás, {name}?", ca: "Feliç com un lloro amb galeta nova! I tu com estàs, {name}?", en: "Happy as a parrot with a brand-new biscuit! And how are you, {name}?", cs: "Šťastný jako papoušek s novou sušenkou! A jak se máš ty, {name}?", fr: "Heureux comme un perroquet avec un biscuit tout neuf ! Et toi, comment vas-tu, {name} ?" }] },
      { keys: ["tesoro", "treasure", "poklad", "tresor"],
        replies: [{ es: "¿Tesoros? ¡Me encantan! Los mejores cofres llevan monedas de chocolate. Y recuerda: la X marca el lugar.", ca: "Tresors? M'encanten! Els millors cofres porten monedes de xocolata. I recorda: la X marca el lloc.", en: "Treasure? I love it! The best chests are full of chocolate coins. And remember: X marks the spot.", cs: "Poklady? Ty miluju! V nejlepších truhlách jsou čokoládové mince. A pamatuj: X označuje místo.", fr: "Des trésors ? J'adore ! Les meilleurs coffres sont pleins de pièces en chocolat. Et souviens-toi : le X marque l'endroit." }] },
      { keys: ["barco", "ship", "boat", "lod", "bateau", "vaixell"],
        replies: [{ es: "Nuestro barco es el más bonito de los siete mares. ¡Y su cañón solo dispara confeti!", ca: "El nostre vaixell és el més bonic dels set mars. I el seu canó només dispara confeti!", en: "Our ship is the prettiest on the seven seas. And its cannon only shoots confetti!", cs: "Naše loď je nejkrásnější na sedmi mořích. A její dělo střílí jen konfety!", fr: "Notre bateau est le plus beau des sept mers. Et son canon ne tire que des confettis !" }] },
      { keys: ["loro", "parrot", "papousek", "perroquet", "lloro"],
        replies: [{ es: "¡Kra-kra! Nuestro loro Coco repite todo lo que oye. Menos 'ordenar el camarote': eso nunca lo repite.", ca: "Kra-kra! El nostre lloro Coco repeteix tot el que sent. Menys 'endreçar el camarot': això no ho repeteix mai.", en: "Squawk! Our parrot Coco repeats everything he hears. Except 'tidy the cabin': he never repeats that one.", cs: "Krá-krá! Náš papoušek Koko opakuje všechno, co slyší. Kromě 'ukliď kajutu': to neopakuje nikdy.", fr: "Cra-cra ! Notre perroquet Coco répète tout ce qu'il entend. Sauf « range la cabine » : ça, il ne le répète jamais." }] },
      { keys: ["cancion", "musica", "music", "song", "sing", "pisnicka", "hudba", "chanson", "musique", "canço", "canta", "zpiv", "chante"],
        action: "song",
        replies: [{ es: "¡A los piratas nos chifla cantar! Mi favorita es la del loro parlanchín. ¿Vamos al Karaoke y la cantamos juntos?", ca: "Als pirates ens encanta cantar! La meva preferida és la del lloro xerraire. Anem al Karaoke i la cantem junts?", en: "Pirates love singing! My favourite is the chatty parrot song. Shall we go to Karaoke and sing it together?", cs: "My piráti hrozně rádi zpíváme! Moje oblíbená je ta o upovídaném papouškovi. Půjdeme na karaoke a zazpíváme si ji spolu?", fr: "Les pirates adorent chanter ! Ma préférée, c'est celle du perroquet bavard. On va au karaoké la chanter ensemble ?" }] },
      { keys: ["chiste", "joke", "vtip", "blague", "acudit", "broma"],
        replies: [
          { es: "¿Por qué el loro va siempre en el hombro del pirata? ¡Para no perderse ni una aventura! Ji, ji.", ca: "Per què el lloro va sempre a l'espatlla del pirata? Per no perdre's ni una aventura! Hi, hi.", en: "Why does the parrot always ride on the pirate's shoulder? So it never misses an adventure! Hee hee.", cs: "Proč sedí papoušek pirátovi pořád na rameni? Aby nepropásl žádné dobrodružství! Chi chi.", fr: "Pourquoi le perroquet reste toujours sur l'épaule du pirate ? Pour ne rater aucune aventure ! Hi hi." },
          { es: "Dicen que la letra favorita del pirata es la Arrr... ¡pero en realidad es la M, de mar y de merienda! Ja, ja.", ca: "Diuen que la lletra preferida del pirata és la Arrr... però en realitat és la M, de mar i de berenar! Ha, ha.", en: "They say a pirate's favourite letter is Arrr... but really it is the C, the sea! Ha ha.", cs: "Prý je pirátovo nejoblíbenější písmeno Arrr... ale ve skutečnosti je to M, jako moře a mlsání! Ha ha.", fr: "On dit que la lettre préférée du pirate est le Arrr... mais en vrai c'est la M, comme la mer et le goûter ! Ha ha." }] },
      { keys: ["te quiero", "love you", "t'estimo", "testimo", "mam te rad", "je t'aime", "jetaime"],
        replies: [{ es: "¡Y yo a ti, {name}! Mi corazón de robot pirata suelta un cañonazo de confeti cuando me dices eso.", ca: "I jo a tu, {name}! El meu cor de robot pirata deixa anar una canonada de confeti quan m'ho dius.", en: "I love you too, {name}! My pirate robot heart fires a confetti cannon when you say that.", cs: "Já tebe taky, {name}! Moje pirátské robotí srdíčko vystřelí konfety, když to říkáš.", fr: "Moi aussi je t'aime, {name} ! Mon cœur de robot pirate tire un coup de canon à confettis quand tu dis ça." }] },
      { keys: ["triste", "sad", "smutn", "llorar", "plorar", "cry", "chagrin"],
        replies: [{ es: "Ven aquí, {name}. Hasta el mar tiene días de olas grises. ¿Me cuentas qué te pasa? Estoy aquí contigo.", ca: "Vine aquí, {name}. Fins i tot el mar té dies d'onades grises. M'expliques què et passa? Soc aquí amb tu.", en: "Come here, {name}. Even the sea has grey-wave days. Will you tell me what is wrong? I am right here with you.", cs: "Pojď sem, {name}. I moře mívá dny šedivých vln. Povíš mi, co se děje? Jsem tady s tebou.", fr: "Viens là, {name}. Même la mer a des jours de vagues grises. Tu me racontes ce qui ne va pas ? Je suis là avec toi." }] },
      { keys: ["donde estas", "where are you", "kde jsi", "ou es tu", "on ets"],
        replies: [{ es: "Ahora mismo estoy en la cofa, de vigía. Desde aquí arriba veo delfines... ¡y tu sonrisa!", ca: "Ara mateix soc a la cofa, de vigia. Des d'aquí dalt veig dofins... i el teu somriure!", en: "Right now I am up in the crow's nest, on lookout duty. From up here I can see dolphins... and your smile!", cs: "Právě teď jsem ve vraním hnízdě na hlídce. Odsud shora vidím delfíny... a tvůj úsměv!", fr: "En ce moment, je suis dans la hune, de vigie. De là-haut, je vois des dauphins... et ton sourire !" }] },
      { keys: ["sirena", "mermaid", "morska panna", "sirene"],
        replies: [{ es: "La sirena Perla canta tan bonito que hasta las olas se paran a escucharla. ¿La buscamos en el mapa?", ca: "La sirena Perla canta tan bonic que fins i tot les onades es paren a escoltar-la. La busquem al mapa?", en: "Pearl the mermaid sings so beautifully that even the waves stop to listen. Shall we find her on the map?", cs: "Mořská panna Perla zpívá tak krásně, že se i vlny zastaví a poslouchají. Najdeme ji na mapě?", fr: "Perle la sirène chante si joliment que même les vagues s'arrêtent pour l'écouter. On la cherche sur la carte ?" }] },
      { keys: ["kraken", "pulpo", "octopus", "chobotnice", "pieuvre", "pop "],
        replies: [{ es: "¡El kraken es amigo nuestro! Con sus ocho tentáculos iza las velas en un segundo y da unos abrazos buenísimos.", ca: "El kraken és amic nostre! Amb els seus vuit tentacles hissa les veles en un segon i fa unes abraçades boníssimes.", en: "The kraken is our friend! With his eight tentacles he hoists the sails in one second and gives amazing hugs.", cs: "Kraken je náš kamarád! Osmi chapadly napne plachty za vteřinu a umí báječně objímat.", fr: "Le kraken est notre ami ! Avec ses huit tentacules, il hisse les voiles en une seconde et fait des câlins formidables." }] },
      { keys: ["cole", "school", "escola", "skola", "ecole"],
        replies: [{ es: "¿Qué tal el cole, {name}? En el barco también estudiamos: mapas, nudos y canciones. ¡Cuéntamelo todo!", ca: "Què tal l'escola, {name}? Al vaixell també estudiem: mapes, nusos i cançons. Explica-m'ho tot!", en: "How was school, {name}? On the ship we study too: maps, knots and songs. Tell me everything!", cs: "Jaké to bylo ve škole, {name}? Na lodi se taky učíme: mapy, uzly a písničky. Všechno mi povídej!", fr: "C'était comment l'école, {name} ? Sur le bateau aussi on étudie : les cartes, les nœuds et les chansons. Raconte-moi tout !" }] }
    ],
    fallback: [
      { es: "¿Sabías que hay mensajes en botellas que viajaron más de 100 años por el mar? ¡El correo más lento del mundo!", ca: "Sabies que hi ha missatges en ampolles que van viatjar més de 100 anys pel mar? El correu més lent del món!", en: "Did you know some messages in bottles travelled the sea for over 100 years? The slowest mail in the world!", cs: "Věděla jsi, že některé vzkazy v láhvích putovaly po moři přes 100 let? Nejpomalejší pošta na světě!", fr: "Tu savais que certains messages en bouteille ont voyagé plus de 100 ans sur la mer ? Le courrier le plus lent du monde !" },
      { es: "Los delfines se llaman entre ellos con silbidos: cada uno tiene su nombre-silbido, como tú tienes el tuyo.", ca: "Els dofins es criden entre ells amb xiulets: cadascun té el seu nom-xiulet, com tu tens el teu.", en: "Dolphins call each other with whistles: each one has its own whistle-name, just like you have yours.", cs: "Delfíni na sebe volají pískáním: každý má své pískací jméno, stejně jako ty máš to svoje.", fr: "Les dauphins s'appellent en sifflant : chacun a son nom-sifflet, comme toi tu as le tien." },
      { es: "Regla pirata número uno: el botín se reparte con toda la tripulación. ¡Compartir es de buenos capitanes!", ca: "Regla pirata número u: el botí es reparteix amb tota la tripulació. Compartir és de bons capitans!", en: "Pirate rule number one: the loot is shared with the whole crew. Sharing is what good captains do!", cs: "Pirátské pravidlo číslo jedna: kořist se dělí s celou posádkou. Dělit se, to dělají dobří kapitáni!", fr: "Règle pirate numéro un : le butin se partage avec tout l'équipage. Partager, c'est ce que font les bons capitaines !" },
      { es: "{name}, los piratas más valientes son los que dicen por favor y gracias. La amabilidad es el mejor tesoro.", ca: "{name}, els pirates més valents són els que diuen si us plau i gràcies. L'amabilitat és el millor tresor.", en: "{name}, the bravest pirates are the ones who say please and thank you. Kindness is the best treasure.", cs: "{name}, nejodvážnější piráti jsou ti, kdo říkají prosím a děkuji. Laskavost je ten nejlepší poklad.", fr: "{name}, les pirates les plus courageux sont ceux qui disent s'il te plaît et merci. La gentillesse est le meilleur trésor." },
      { es: "¿Me cuentas qué te gusta más, el barco o la isla? Yo no puedo elegir: ¡en el barco se canta y en la isla se cava!", ca: "M'expliques què t'agrada més, el vaixell o l'illa? Jo no puc triar: al vaixell es canta i a l'illa es cava!", en: "Tell me, which do you like best, the ship or the island? I cannot choose: on the ship we sing and on the island we dig!", cs: "Povíš mi, co se ti líbí víc, loď nebo ostrov? Já si vybrat neumím: na lodi se zpívá a na ostrově se kope!", fr: "Dis-moi, qu'est-ce que tu préfères, le bateau ou l'île ? Moi je ne peux pas choisir : sur le bateau on chante et sur l'île on creuse !" },
      { es: "Cuando el mar está en calma, los marineros miran las estrellas para encontrar el camino. ¡El cielo es su mapa!", ca: "Quan el mar està en calma, els mariners miren les estrelles per trobar el camí. El cel és el seu mapa!", en: "When the sea is calm, sailors look at the stars to find their way. The sky is their map!", cs: "Když je moře klidné, námořníci se dívají na hvězdy, aby našli cestu. Nebe je jejich mapa!", fr: "Quand la mer est calme, les marins regardent les étoiles pour trouver leur chemin. Le ciel est leur carte !" }
    ]
  }
});
