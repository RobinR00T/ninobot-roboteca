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
    width: 2600, height: 1100, stars: false,
    bgCss: "radial-gradient(ellipse 40% 30% at 10% 12%, rgba(255,241,118,.5), transparent), linear-gradient(180deg,#8ecff5 0%,#5db8ee 40%,#35a3e0 64%,#0288d1 100%)",
    cats: [
      { id: "barco", emoji: "⛵", x: 120, name: { es: "El barco pirata", ca: "El vaixell pirata", en: "The pirate ship", cs: "Pirátská loď", fr: "Le bateau pirate" } },
      { id: "isla", emoji: "🏝️", x: 1100, name: { es: "La isla del tesoro", ca: "L'illa del tresor", en: "Treasure Island", cs: "Ostrov pokladů", fr: "L'île au trésor" } },
      { id: "mar", emoji: "🌊", x: 1900, name: { es: "Alta mar", ca: "Alta mar", en: "The open sea", cs: "Širé moře", fr: "La haute mer" } }
    ],
    pois: [
      { cat: "barco", emoji: "🏴‍☠️", x: 520, y: 150,
        name: { es: "La bandera pirata", ca: "La bandera pirata", en: "The pirate flag", cs: "Pirátská vlajka", fr: "Le drapeau pirate" },
        fact: { es: "Se llama Jolly Roger. Cada capitán dibujaba la suya: la nuestra lleva una piruleta.", ca: "Es diu Jolly Roger. Cada capità dibuixava la seva: la nostra porta una piruleta.", en: "It is called the Jolly Roger. Every captain drew their own: ours has a lollipop on it.", cs: "Jmenuje se Jolly Roger. Každý kapitán si kreslil svou vlastní: ta naše má na sobě lízátko.", fr: "Il s'appelle le Jolly Roger. Chaque capitaine dessinait le sien : le nôtre porte une sucette." } },
      { cat: "barco", emoji: "🔭", x: 520, y: 300,
        name: { es: "El vigía (la cofa)", ca: "El vigia (la cofa)", en: "The lookout (crow's nest)", cs: "Hlídka (vraní hnízdo)", fr: "La vigie (la hune)" },
        fact: { es: "La cesta de lo alto del mástil se llama cofa. Desde ahí el vigía grita: ¡tierra a la vista!", ca: "La cistella de dalt del pal es diu cofa. Des d'allà el vigia crida: terra a la vista!", en: "The basket at the top of the mast is called the crow's nest. From up there the lookout shouts: land ahoy!", cs: "Koši na vrcholku stěžně se říká vraní hnízdo. Hlídka odtud volá: země na obzoru!", fr: "Le panier en haut du mât s'appelle la hune. De là-haut, la vigie crie : terre en vue !" } },
      { cat: "barco", emoji: "⛵", x: 390, y: 360,
        name: { es: "La vela mayor", ca: "La vela major", en: "The main sail", cs: "Hlavní plachta", fr: "La grand-voile" },
        fact: { es: "Es la vela más grande del barco. El viento la hincha como una cometa gigante y el barco avanza.", ca: "És la vela més gran del vaixell. El vent la infla com un estel gegant i el vaixell avança.", en: "It is the biggest sail on the ship. The wind puffs it up like a giant kite and off the ship goes.", cs: "Je to největší plachta na lodi. Vítr ji nafoukne jako obřího draka a loď se rozjede.", fr: "C'est la plus grande voile du bateau. Le vent la gonfle comme un cerf-volant géant et le bateau avance." } },
      { cat: "barco", emoji: "🦜", x: 760, y: 330,
        name: { es: "El loro", ca: "El lloro", en: "The parrot", cs: "Papoušek", fr: "Le perroquet" },
        fact: { es: "Los loros pueden aprender cientos de palabras y algunos viven más de 60 años. Este solo dice: ¡galleta!", ca: "Els lloros poden aprendre centenars de paraules i alguns viuen més de 60 anys. Aquest només diu: galeta!", en: "Parrots can learn hundreds of words and some live more than 60 years. This one only says: biscuit!", cs: "Papoušci se umí naučit stovky slov a někteří žijí přes 60 let. Tenhle říká jen: sušenka!", fr: "Les perroquets peuvent apprendre des centaines de mots et certains vivent plus de 60 ans. Celui-ci dit seulement : biscuit !" } },
      { cat: "barco", emoji: "☸️", x: 230, y: 560,
        name: { es: "El timón", ca: "El timó", en: "The helm", cs: "Kormidlo", fr: "Le gouvernail" },
        fact: { es: "Con el timón se dirige el barco. Izquierda se dice babor y derecha, estribor. ¡Palabras de marinero!", ca: "Amb el timó es dirigeix el vaixell. Esquerra es diu babord i dreta, estribord. Paraules de mariner!", en: "The helm steers the ship. Sailors say port for left and starboard for right. Real sailor words!", cs: "Kormidlem se řídí loď. Námořníci říkají levoboku a pravoboku. Opravdová námořnická slova!", fr: "Le gouvernail dirige le bateau. À gauche on dit bâbord et à droite, tribord. Des mots de marin !" } },
      { cat: "barco", emoji: "🎉", x: 620, y: 580,
        name: { es: "El cañón de confeti", ca: "El canó de confeti", en: "The confetti cannon", cs: "Konfetové dělo", fr: "Le canon à confettis" },
        fact: { es: "En este barco los cañones solo disparan confeti y serpentinas. ¡PUM! ¡Que empiece la fiesta!", ca: "En aquest vaixell els canons només disparen confeti i serpentines. PUM! Que comenci la festa!", en: "On this ship the cannons only shoot confetti and streamers. BOOM! Let the party begin!", cs: "Na téhle lodi střílí děla jen konfety a serpentiny. BUM! Ať začne oslava!", fr: "Sur ce bateau, les canons ne tirent que des confettis et des serpentins. BOUM ! Que la fête commence !" } },
      { cat: "isla", emoji: "🏖️", x: 1120, y: 740,
        name: { es: "La playa", ca: "La platja", en: "The beach", cs: "Pláž", fr: "La plage" },
        fact: { es: "La arena de la playa son rocas y conchas rotas en trocitos chiquititos por las olas.", ca: "La sorra de la platja són roques i petxines trencades en trossets petitons per les onades.", en: "Beach sand is made of rocks and shells broken into teeny-tiny pieces by the waves.", cs: "Písek na pláži jsou kamínky a mušle, které vlny rozdrobily na maličké kousíčky.", fr: "Le sable de la plage, ce sont des roches et des coquillages cassés en tout petits morceaux par les vagues." } },
      { cat: "isla", emoji: "🌴", x: 1300, y: 540,
        name: { es: "La palmera de cocos", ca: "La palmera de cocos", en: "The coconut palm", cs: "Kokosová palma", fr: "Le cocotier" },
        fact: { es: "Los cocos flotan y viajan por el mar. Al llegar a otra playa, ¡nace una palmera nueva!", ca: "Els cocos suren i viatgen pel mar. En arribar a una altra platja, neix una palmera nova!", en: "Coconuts float and travel across the sea. When they land on another beach, a new palm tree grows!", cs: "Kokosy plavou a cestují po moři. Když doplují na jinou pláž, vyroste nová palma!", fr: "Les noix de coco flottent et voyagent sur la mer. En arrivant sur une autre plage, un nouveau palmier naît !" } },
      { cat: "isla", emoji: "💎", x: 1620, y: 600,
        name: { es: "La cueva del tesoro", ca: "La cova del tresor", en: "The treasure cave", cs: "Jeskyně pokladů", fr: "La grotte au trésor" },
        fact: { es: "Dentro brillan cristales de colores. Si dices hola, el eco contesta: hola, hola, hola...", ca: "A dins brillen cristalls de colors. Si dius hola, l'eco contesta: hola, hola, hola...", en: "Colourful crystals sparkle inside. If you say hello, the echo answers: hello, hello, hello...", cs: "Uvnitř se třpytí barevné krystaly. Když řekneš ahoj, ozvěna odpoví: ahoj, ahoj, ahoj...", fr: "Dedans brillent des cristaux colorés. Si tu dis bonjour, l'écho répond : bonjour, bonjour, bonjour..." } },
      { cat: "isla", emoji: "🗺️", x: 1500, y: 780,
        name: { es: "El mapa gigante", ca: "El mapa gegant", en: "The giant map", cs: "Obří mapa", fr: "La carte géante" },
        fact: { es: "En los mapas antiguos, los pintores dibujaban monstruos en los mares que nadie conocía todavía.", ca: "Als mapes antics, els pintors dibuixaven monstres als mars que ningú no coneixia encara.", en: "On old maps, painters drew monsters in the seas nobody had explored yet.", cs: "Na starých mapách kreslili malíři nestvůry do moří, která ještě nikdo neprozkoumal.", fr: "Sur les vieilles cartes, les peintres dessinaient des monstres dans les mers que personne ne connaissait encore." } },
      { cat: "isla", emoji: "❌", x: 1350, y: 850,
        name: { es: "La X del tesoro", ca: "La X del tresor", en: "The treasure X", cs: "X pokladu", fr: "Le X du trésor" },
        fact: { es: "¡La X marca el lugar! Debajo hay un cofre con monedas de chocolate. Chsss, es un secreto.", ca: "La X marca el lloc! A sota hi ha un cofre amb monedes de xocolata. Xxxt, és un secret.", en: "X marks the spot! Underneath there is a chest full of chocolate coins. Shhh, it is a secret.", cs: "X označuje místo! Pod ním je truhla plná čokoládových mincí. Pšt, je to tajemství.", fr: "Le X marque l'endroit ! Dessous, il y a un coffre plein de pièces en chocolat. Chut, c'est un secret." } },
      { cat: "mar", emoji: "📜", x: 1950, y: 660,
        name: { es: "La botella con mensaje", ca: "L'ampolla amb missatge", en: "The message in a bottle", cs: "Láhev se vzkazem", fr: "La bouteille à message" },
        fact: { es: "Hay mensajes en botellas que viajaron por el mar más de 100 años antes de que alguien los encontrara.", ca: "Hi ha missatges en ampolles que van viatjar pel mar més de 100 anys abans que algú els trobés.", en: "Some messages in bottles travelled the sea for more than 100 years before someone found them.", cs: "Některé vzkazy v láhvích putovaly po moři víc než 100 let, než je někdo našel.", fr: "Certains messages en bouteille ont voyagé sur la mer plus de 100 ans avant que quelqu'un les trouve." } },
      { cat: "mar", emoji: "🐬", x: 2150, y: 560,
        name: { es: "El delfín guía", ca: "El dofí guia", en: "The guide dolphin", cs: "Delfín průvodce", fr: "Le dauphin guide" },
        fact: { es: "Los delfines hablan con silbidos y cada uno tiene su propio nombre-silbido. ¡Como tú tienes el tuyo!", ca: "Els dofins parlen amb xiulets i cadascun té el seu propi nom-xiulet. Com tu tens el teu!", en: "Dolphins talk in whistles and each one has its own whistle-name. Just like you have yours!", cs: "Delfíni mluví pískáním a každý má své vlastní pískací jméno. Stejně jako ty máš to svoje!", fr: "Les dauphins parlent en sifflant et chacun a son propre nom-sifflet. Comme toi, tu as le tien !" } },
      { cat: "mar", emoji: "🦈", x: 2350, y: 680,
        name: { es: "El tiburón", ca: "El tauró", en: "The shark", cs: "Žralok", fr: "Le requin" },
        fact: { es: "Los tiburones ya nadaban por aquí antes que los dinosaurios. Este es amable y solo viene a jugar.", ca: "Els taurons ja nedaven per aquí abans que els dinosaures. Aquest és amable i només ve a jugar.", en: "Sharks were already swimming here before the dinosaurs. This one is friendly and just wants to play.", cs: "Žraloci tu plavali dřív než dinosauři. Tenhle je hodný a přijel si jen hrát.", fr: "Les requins nageaient déjà ici avant les dinosaures. Celui-ci est gentil et vient juste jouer." } },
      { cat: "mar", emoji: "🐙", x: 2200, y: 900, size: 2,
        name: { es: "El kraken amistoso", ca: "El kraken amistós", en: "The friendly kraken", cs: "Přátelský kraken", fr: "Le kraken amical" },
        fact: { es: "El kraken de las leyendas era un calamar gigante. Los de verdad existen: ¡tienen ojos grandes como platos!", ca: "El kraken de les llegendes era un calamar gegant. Els de debò existeixen: tenen ulls grans com plats!", en: "The kraken of the legends was a giant squid. Real giant squids exist: their eyes are as big as dinner plates!", cs: "Kraken z legend byla obří chobotnice. Obří olihně opravdu existují: mají oči velké jako talíře!", fr: "Le kraken des légendes était un calamar géant. Les vrais existent : leurs yeux sont grands comme des assiettes !" } },
      { cat: "mar", emoji: "🧜‍♀️", x: 2500, y: 780,
        name: { es: "La sirena", ca: "La sirena", en: "The mermaid", cs: "Mořská panna", fr: "La sirène" },
        fact: { es: "Los marineros contaban que veían sirenas en las rocas. Muchas veces eran manatíes tomando el sol.", ca: "Els mariners explicaven que veien sirenes a les roques. Moltes vegades eren manatís prenent el sol.", en: "Sailors used to say they saw mermaids on the rocks. Often they were manatees sunbathing.", cs: "Námořníci vyprávěli, že na skalách vídají mořské panny. Často to byli kapustňáci na sluníčku.", fr: "Les marins racontaient qu'ils voyaient des sirènes sur les rochers. Souvent, c'étaient des lamantins qui prenaient le soleil." } }
    ],
    /* El paisaje: mar con olas, barco pirata de madera, isla con
       playa, palmeras y montaña, y cielo con gaviotas y sol. */
    deco: function () {
      let s = "";
      // sol con resplandor
      s += `<circle cx="200" cy="160" r="70" fill="rgba(255,238,88,.9)"/>
            <circle cx="200" cy="160" r="115" fill="rgba(255,238,88,.22)"/>`;
      // nubes
      s += `<g fill="rgba(255,255,255,.85)">
            <ellipse cx="900" cy="150" rx="95" ry="32"/><ellipse cx="975" cy="128" rx="65" ry="26"/>
            <ellipse cx="2080" cy="170" rx="100" ry="34"/><ellipse cx="2160" cy="148" rx="66" ry="26"/>
            <ellipse cx="1560" cy="120" rx="80" ry="26"/></g>`;
      // gaviotas
      const gull = (x, y, k) => `<path d="M${x - 24 * k} ${y} Q${x - 12 * k} ${y - 15 * k} ${x} ${y} Q${x + 12 * k} ${y - 15 * k} ${x + 24 * k} ${y}" stroke="rgba(255,255,255,.95)" stroke-width="${4.5 * k}" fill="none" stroke-linecap="round"/>`;
      s += gull(820, 260, 1) + gull(920, 210, 0.75) + gull(1720, 240, 1) + gull(1810, 190, 0.7) + gull(2330, 250, 0.9);
      // mar de fondo con cresta clara
      s += `<rect x="0" y="700" width="2600" height="400" fill="#0288d1"/>
            <rect x="0" y="920" width="2600" height="180" fill="#01579b"/>
            <path d="M0 706 Q110 690 220 706 T440 706 T660 706 T880 706 T1100 706 T1320 706 T1540 706 T1760 706 T1980 706 T2200 706 T2420 706 T2600 706 L2600 748 L0 748 Z" fill="#4fc3f7" opacity=".8"/>`;
      // la isla: montaña, falda verde, arena, cueva y palmeras
      s += `<path d="M1310 780 L1490 300 L1690 780 Z" fill="#6d4c41"/>
            <path d="M1350 780 Q1420 640 1490 620 Q1570 640 1650 780 Z" fill="#66bb6a" opacity=".85"/>
            <path d="M1000 830 Q1080 690 1230 665 Q1420 640 1600 665 Q1760 695 1820 830 Q1832 875 1780 885 Q1410 925 1050 885 Q995 872 1000 830 Z" fill="#f2d68a"/>
            <ellipse cx="1620" cy="655" rx="72" ry="56" fill="#3e2723"/>
            <ellipse cx="1620" cy="663" rx="46" ry="38" fill="#1b0f0c"/>`;
      const palm = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})">
            <path d="M0 0 Q10 -60 -6 -110" stroke="#8d6e63" stroke-width="14" fill="none" stroke-linecap="round"/>
            <g stroke="#2e7d32" stroke-width="10" fill="none" stroke-linecap="round">
            <path d="M-6 -110 Q-50 -130 -85 -115"/><path d="M-6 -110 Q-40 -150 -75 -150"/>
            <path d="M-6 -110 Q10 -160 45 -160"/><path d="M-6 -110 Q40 -140 75 -120"/></g>
            <circle cx="-10" cy="-104" r="8" fill="#6d4c41"/><circle cx="4" cy="-100" r="8" fill="#6d4c41"/></g>`;
      s += palm(1105, 700, 1) + palm(1745, 715, 0.8);
      // el barco pirata de madera (mástiles, cofa, velas, casco)
      s += `<rect x="514" y="150" width="12" height="500" rx="5" fill="#4e342e"/>
            <rect x="754" y="300" width="10" height="350" rx="5" fill="#4e342e"/>
            <path d="M520 165 L925 628 M520 165 L195 605" stroke="rgba(236,239,241,.45)" stroke-width="3"/>
            <path d="M482 316 h76 l-12 36 h-52 Z" fill="#4e342e"/>
            <path d="M526 152 L648 168 L526 190 Z" fill="#263238"/>
            <path d="M380 355 Q520 322 660 355 Q682 450 660 545 Q520 578 380 545 Q358 450 380 355 Z" fill="#eceff1"/>
            <path d="M395 380 Q520 355 645 380 M395 520 Q520 545 645 520" stroke="rgba(120,144,156,.4)" stroke-width="4" fill="none"/>
            <path d="M692 342 Q760 324 828 342 Q842 412 828 482 Q760 500 692 482 Q678 412 692 342 Z" fill="#eceff1"/>
            <path d="M920 640 L1005 572" stroke="#4e342e" stroke-width="14" stroke-linecap="round"/>
            <rect x="185" y="540" width="150" height="92" rx="14" fill="#6d4c41"/>
            <rect x="170" y="616" width="780" height="26" rx="12" fill="#6d4c41"/>
            <path d="M170 640 L950 640 L898 802 Q560 852 242 802 Q182 722 170 640 Z" fill="#5d4037"/>
            <path d="M200 700 Q560 740 920 700" stroke="rgba(0,0,0,.2)" stroke-width="6" fill="none"/>`;
      // ojos de buey del casco
      [320, 470, 620, 770].forEach(x => {
        s += `<circle cx="${x}" cy="712" r="16" fill="#ffe082" stroke="#4e342e" stroke-width="5"/>`;
      });
      // olas de primer plano (tapan la base del casco y de la isla)
      s += `<path d="M0 812 Q130 782 260 812 T520 814 T780 808 T1040 814 T1300 810 T1560 814 T1820 808 T2080 814 T2340 810 T2600 812 L2600 1100 L0 1100 Z" fill="#0277bd" opacity=".88"/>
            <path d="M0 965 Q210 938 420 965 T840 967 T1260 961 T1680 967 T2100 961 T2520 967 L2600 963 L2600 1100 L0 1100 Z" fill="#014a7f"/>`;
      // crestas blancas
      [[150, 800], [630, 806], [980, 800], [1900, 802], [2260, 806], [2480, 798]].forEach(p => {
        s += `<path d="M${p[0]} ${p[1]} q22 -12 44 0 t44 0" stroke="rgba(255,255,255,.6)" stroke-width="5" fill="none" stroke-linecap="round"/>`;
      });
      // las rocas de la sirena
      s += `<ellipse cx="2505" cy="852" rx="92" ry="42" fill="#455a64"/>
            <ellipse cx="2565" cy="872" rx="58" ry="30" fill="#37474f"/>`;
      // burbujas del kraken
      [[2160, 830], [2205, 790], [2245, 840], [2185, 760]].forEach(p => {
        s += `<circle cx="${p[0]}" cy="${p[1]}" r="9" fill="none" stroke="rgba(255,255,255,.45)" stroke-width="2.5"/>`;
      });
      // circulitos alrededor de la botella
      s += `<circle cx="1950" cy="700" r="26" fill="none" stroke="rgba(255,255,255,.4)" stroke-width="3"/>
            <circle cx="1950" cy="700" r="44" fill="none" stroke="rgba(255,255,255,.25)" stroke-width="3"/>`;
      return decoSvg(s, 2600);
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
