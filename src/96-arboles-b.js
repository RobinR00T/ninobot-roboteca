"use strict";
/* ============================================================
   Contenido de ÁRBOLES (parte B): historias ramificadas,
   canciones, traductor, mapa de exploración con dibujos
   propios, charla, tarjeta de portada y celebración.
   ============================================================ */

Object.assign(THEMES.arboles.content, {

  /* ---------- HISTORIAS (ramifican de verdad) ---------- */
  stories: [
    {
      id: "bellota", emoji: "🌰", start: "n1",
      title: { es: "La bellota que quería ser roble", ca: "La gla que volia ser roure", en: "The Acorn Who Wanted to Be an Oak", cs: "Žalud, který chtěl být dubem", fr: "Le gland qui voulait devenir chêne" },
      nodes: {
        n1: {
          text: { es: "¡Plof! Una bellota pequeñita cae del gran roble y rueda hasta tus pies, {name}. 'Quiero ser un roble gigante', suspira, 'pero no sé dónde crecer'. ¿La ayudamos?", ca: "Plof! Una gla petitona cau del gran roure i roda fins als teus peus, {name}. 'Vull ser un roure gegant', sospira, 'però no sé on créixer'. L'ajudem?", en: "Plop! A tiny acorn falls from the great oak and rolls to your feet, {name}. 'I want to be a giant oak', it sighs, 'but I do not know where to grow'. Shall we help it?", cs: "Žbluňk! Z velkého dubu spadne maličký žalud a přikutálí se ti k nohám, {name}. 'Chci být obrovský dub', povzdechne si, 'ale nevím, kde mám růst'. Pomůžeme mu?", fr: "Plouf ! Un tout petit gland tombe du grand chêne et roule jusqu'à tes pieds, {name}. « Je veux devenir un chêne géant », soupire-t-il, « mais je ne sais pas où grandir ». On l'aide ?" },
          choices: [
            { t: { es: "Preguntamos a la ardilla, que sabe de bellotas", ca: "Preguntem a l'esquirol, que hi entén de glans", en: "Let's ask the squirrel, the acorn expert", cs: "Zeptáme se veverky, ta žaludům rozumí", fr: "Demandons à l'écureuil, l'expert en glands" }, go: "n2a" },
            { t: { es: "Buscamos nosotros un rincón con sol", ca: "Busquem nosaltres un racó amb sol", en: "Let's find a sunny spot ourselves", cs: "Najdeme mu slunné místečko sami", fr: "Cherchons nous-mêmes un coin de soleil" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "La ardilla baja del castaño: 'Yo entierro bellotas por todo el bosque... ¡y la mitad se me olvidan y se convierten en árboles!'. Ofrece enterrarla en su despensa secreta.", ca: "L'esquirol baixa del castanyer: 'Jo enterro glans per tot el bosc... i la meitat se m'obliden i es converteixen en arbres!'. Ofereix enterrar-la a la seva despensa secreta.", en: "The squirrel climbs down from the chestnut: 'I bury acorns all over the forest... and I forget half of them, and they turn into trees!'. She offers to bury it in her secret pantry.", cs: "Veverka sleze z kaštanu: 'Já zahrabávám žaludy po celém lese... polovinu jich zapomenu a vyrostou z nich stromy!'. Nabídne se, že ho zahrabe do své tajné spižírny.", fr: "L'écureuil descend du châtaignier : « Moi, j'enterre des glands dans toute la forêt... et j'en oublie la moitié, qui deviennent des arbres ! ». Il propose de l'enterrer dans son garde-manger secret." },
          choices: [
            { t: { es: "¡Que la entierre en su despensa!", ca: "Que l'enterri a la seva despensa!", en: "Yes, bury it in the pantry!", cs: "Ať ho zahrabe do spižírny!", fr: "Oui, dans le garde-manger !" }, go: "n3a" },
            { t: { es: "Mejor en el claro soleado del prado", ca: "Millor al clar assolellat del prat", en: "Better in the sunny clearing", cs: "Radši na sluníčko na palouk", fr: "Plutôt dans la clairière ensoleillée" }, go: "n3b" }
          ]
        },
        n2b: {
          text: { es: "Buscando el rincón perfecto, la bellota resbala por la cuesta... ¡y cae al arroyo! Flota como un barquito asustado.", ca: "Buscant el racó perfecte, la gla rellisca pel pendent... i cau al rierol! Flota com un vaixellet espantat.", en: "While looking for the perfect spot, the acorn slips down the slope... and falls into the stream! It floats like a frightened little boat.", cs: "Při hledání dokonalého místa žalud sklouzne ze svahu... a spadne do potoka! Plave jako vyděšená lodička.", fr: "En cherchant le coin parfait, le gland glisse sur la pente... et tombe dans le ruisseau ! Il flotte comme un petit bateau apeuré." },
          choices: [
            { t: { es: "La subimos a una hoja y remamos a la orilla", ca: "La pugem a una fulla i remem cap a la riba", en: "We put it on a leaf and paddle to the bank", cs: "Naložíme ho na list a doplujeme ke břehu", fr: "On le met sur une feuille et on rame vers la rive" }, go: "n3c" },
            { t: { es: "Dejamos que la corriente la lleve", ca: "Deixem que el corrent la porti", en: "We let the stream carry it", cs: "Necháme ho unášet proudem", fr: "On laisse le courant le porter" }, go: "n3b" }
          ]
        },
        n3a: {
          text: { es: "La ardilla la entierra en tierra blandita y oscura. Llega el invierno: arriba nieva y sopla el viento, pero bajo tierra la bellota duerme calentita.", ca: "L'esquirol l'enterra en terra tova i fosca. Arriba l'hivern: a dalt neva i bufa el vent, però sota terra la gla dorm calentona.", en: "The squirrel buries it in soft dark soil. Winter comes: up above it snows and the wind blows, but underground the acorn sleeps warm and cosy.", cs: "Veverka ho zahrabe do měkké tmavé hlíny. Přijde zima: nahoře sněží a fouká, ale pod zemí žalud spinká v teploučku.", fr: "L'écureuil l'enterre dans la terre douce et sombre. L'hiver arrive : là-haut il neige et le vent souffle, mais sous terre le gland dort bien au chaud." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n3b: {
          text: { es: "La bellota llega al claro soleado: tierra mullida, lluvia suave y sitio de sobra para crecer. Se acurruca y espera el invierno tapadita con hojas secas.", ca: "La gla arriba al clar assolellat: terra flonja, pluja suau i lloc de sobres per créixer. S'arrauleix i espera l'hivern tapadeta amb fulles seques.", en: "The acorn reaches the sunny clearing: fluffy soil, soft rain and plenty of room to grow. It snuggles down and waits for winter under a blanket of dry leaves.", cs: "Žalud se dostane na slunný palouk: kyprá hlína, jemný déšť a spousta místa k růstu. Zachumlá se a čeká na zimu přikrytý suchým listím.", fr: "Le gland arrive dans la clairière ensoleillée : terre moelleuse, pluie douce et plein de place pour grandir. Il se blottit et attend l'hiver sous une couverture de feuilles sèches." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n3c: {
          text: { es: "Remáis en la hoja hasta la orilla... justo debajo del gran roble. Un gusano asoma: 'Aquí hay demasiada sombra, amigos. Un poquito más allá hay un claro con sol'. Y os acompaña.", ca: "Remeu amb la fulla fins a la riba... just sota el gran roure. Un cuc treu el cap: 'Aquí hi ha massa ombra, amics. Una mica més enllà hi ha un clar amb sol'. I us hi acompanya.", en: "You paddle the leaf to the bank... right under the great oak. A worm pops out: 'Too much shade here, friends. A little further on there is a sunny clearing'. And he shows you the way.", cs: "Doplujete na listu ke břehu... přímo pod velký dub. Vykoukne žížala: 'Tady je moc stínu, kamarádi. Kousek dál je slunný palouk'. A doprovodí vás.", fr: "Vous ramez sur la feuille jusqu'à la rive... juste sous le grand chêne. Un ver de terre sort la tête : « Trop d'ombre ici, les amis. Un peu plus loin, il y a une clairière au soleil ». Et il vous accompagne." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n4: {
          text: { es: "¡Llega la primavera! La bellota siente un cosquilleo: es hora de despertar. '¿Qué saco primero?', pregunta nerviosa. ¿Qué le decimos, {name}?", ca: "Arriba la primavera! La gla sent un pessigolleig: és hora de despertar-se. 'Què trec primer?', pregunta nerviosa. Què li diem, {name}?", en: "Spring is here! The acorn feels a tickle: time to wake up. 'What do I grow first?', it asks nervously. What do we tell it, {name}?", cs: "Přišlo jaro! Žalud cítí lechtání: je čas se probudit. 'Co mám vystrčit první?', ptá se nervózně. Co mu poradíme, {name}?", fr: "Le printemps est là ! Le gland sent un chatouillis : c'est l'heure de se réveiller. « Qu'est-ce que je fais pousser en premier ? », demande-t-il, tout nerveux. Que lui dit-on, {name} ?" },
          choices: [
            { t: { es: "¡Primero la raíz, para agarrarte fuerte!", ca: "Primer l'arrel, per agafar-te fort!", en: "The root first, to hold on tight!", cs: "Nejdřív kořínek, ať se pořádně chytíš!", fr: "La racine d'abord, pour bien t'accrocher !" }, go: "e1" },
            { t: { es: "¡Primero el tallo, para ver ya el sol!", ca: "Primer la tija, per veure ja el sol!", en: "The stem first, to see the sun right away!", cs: "Nejdřív stonek, ať hned vidíš sluníčko!", fr: "La tige d'abord, pour voir le soleil tout de suite !" }, go: "n5" }
          ]
        },
        n5: {
          text: { es: "El tallo sube rapidísimo... pero sin raíces fuertes, el viento lo tumba de un soplido. ¡Socorro! Entonces, bajo tierra, llega ayuda por los hilos de los hongos: el gran roble le manda azúcar a su pequeña.", ca: "La tija puja rapidíssim... però sense arrels fortes, el vent la tomba d'una bufada. Socors! Llavors, sota terra, arriba ajuda pels fils dels fongs: el gran roure li envia sucre a la seva petita.", en: "The stem shoots up super fast... but without strong roots, one puff of wind knocks it over. Help! Then, underground, help arrives along the fungus threads: the great oak sends sugar to its little one.", cs: "Stonek vystřelí nahoru... ale bez silných kořenů ho vítr porazí jedním fouknutím. Pomoc! Vtom pod zemí přichází pomoc po houbových vláknech: velký dub posílá svému mrňousovi cukr.", fr: "La tige monte à toute vitesse... mais sans racines solides, un souffle de vent la renverse. Au secours ! Alors, sous terre, l'aide arrive par les fils des champignons : le grand chêne envoie du sucre à son petit." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e2" }
          ]
        },
        e1: {
          end: true,
          text: { es: "La raíz baja primero y se agarra fuerte; después el tallo sube tranquilo hacia el sol. Pasan los años y la bellota ya es un roblecito con su primera bellota propia. Las cosas buenas crecen despacio, {name}. ¡Como tú!", ca: "L'arrel baixa primer i s'agafa fort; després la tija puja tranquil·la cap al sol. Passen els anys i la gla ja és un rouret amb la seva primera gla pròpia. Les coses bones creixen a poc a poc, {name}. Com tu!", en: "The root goes down first and holds on tight; then the stem climbs calmly towards the sun. Years go by and the acorn is now a young oak with its very first acorn of its own. Good things grow slowly, {name}. Just like you!", cs: "Kořínek jde dolů první a pevně se chytí; potom stonek klidně stoupá za sluncem. Léta plynou a ze žaludu je doubek se svým úplně prvním žaludem. Dobré věci rostou pomalu, {name}. Jako ty!", fr: "La racine descend d'abord et s'accroche fort ; puis la tige monte tranquillement vers le soleil. Les années passent et le gland est devenu un petit chêne avec son tout premier gland à lui. Les bonnes choses poussent lentement, {name}. Comme toi !" }
        },
        e2: {
          end: true,
          text: { es: "Con la merienda del gran roble, el tallo se endereza y echa raíces bien hondas. Nadie crece solo, {name}: hasta los robles gigantes empezaron con un poquito de ayuda. ¡Gracias por cuidarla!", ca: "Amb el berenar del gran roure, la tija es redreça i fa arrels ben fondes. Ningú no creix sol, {name}: fins i tot els roures gegants van començar amb una miqueta d'ajuda. Gràcies per cuidar-la!", en: "With the great oak's snack, the stem straightens up and grows deep strong roots. Nobody grows alone, {name}: even giant oaks started with a little help. Thank you for taking care of it!", cs: "Díky svačince od velkého dubu se stonek narovná a zapustí hluboké kořeny. Nikdo neroste sám, {name}: i obrovské duby začínaly s trochou pomoci. Díky, že ses o něj staral!", fr: "Avec le goûter du grand chêne, la tige se redresse et fait des racines bien profondes. Personne ne grandit tout seul, {name} : même les chênes géants ont commencé avec un peu d'aide. Merci d'avoir pris soin de lui !" }
        }
      }
    },
    {
      id: "redbosque", emoji: "🍄", start: "n1",
      title: { es: "El internet del bosque", ca: "L'internet del bosc", en: "The Internet of the Forest", cs: "Lesní internet", fr: "L'internet de la forêt" },
      nodes: {
        n1: {
          text: { es: "En el borde del bosque, el pinito pequeño está pálido y tiene sed: sus agujas se están poniendo grises. El bosque quiere mandarle ayuda... ¡por debajo de la tierra! ¿Cómo bajamos, {name}?", ca: "A la vora del bosc, el petit pi està pàl·lid i té set: les seves agulles es tornen grises. El bosc li vol enviar ajuda... per sota de la terra! Com hi baixem, {name}?", en: "At the edge of the forest, the little pine looks pale and thirsty: its needles are turning grey. The forest wants to send help... under the ground! How do we get down there, {name}?", cs: "Na kraji lesa je malá borovička bledá a má žízeň: jehličí jí šedne. Les jí chce poslat pomoc... pod zemí! Jak se tam dostaneme, {name}?", fr: "Au bord de la forêt, le petit pin est tout pâle et a soif : ses aiguilles deviennent grises. La forêt veut lui envoyer de l'aide... sous la terre ! Comment on descend, {name} ?" },
          choices: [
            { t: { es: "Con el topo, por su túnel", ca: "Amb el talp, pel seu túnel", en: "With the mole, through his tunnel", cs: "S krtkem, jeho tunelem", fr: "Avec la taupe, par son tunnel" }, go: "n2a" },
            { t: { es: "Preguntamos al gran roble madre", ca: "Preguntem al gran roure mare", en: "Let's ask the great mother oak", cs: "Zeptáme se velkého mateřského dubu", fr: "Demandons au grand chêne mère" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "El topo os guía por su túnel. ¡Alucinante! Todo está lleno de hilos finitos que brillan como lucecitas: es la red de los hongos, el internet del bosque.", ca: "El talp us guia pel seu túnel. Al·lucinant! Tot és ple de fils finets que brillen com llumetes: és la xarxa dels fongs, l'internet del bosc.", en: "The mole guides you through his tunnel. Amazing! Everything is full of fine threads glowing like fairy lights: it is the fungus network, the internet of the forest.", cs: "Krtek vás vede svým tunelem. Paráda! Všude jsou tenoučká vlákna, která svítí jako světýlka: to je síť hub, lesní internet.", fr: "La taupe vous guide dans son tunnel. Incroyable ! Tout est plein de fils très fins qui brillent comme des petites lumières : c'est le réseau des champignons, l'internet de la forêt." },
          choices: [
            { t: { es: "Seguimos el hilo que lleva azúcar", ca: "Seguim el fil que porta sucre", en: "Follow the thread that carries sugar", cs: "Půjdeme po vlákně, které nese cukr", fr: "Suivons le fil qui porte le sucre" }, go: "n3a" },
            { t: { es: "Seguimos el hilo de los avisos", ca: "Seguim el fil dels avisos", en: "Follow the thread of warnings", cs: "Půjdeme po vlákně se zprávami", fr: "Suivons le fil des messages" }, go: "n3b" }
          ]
        },
        n2b: {
          text: { es: "El gran roble madre susurra: 'Yo alimento a los arbolitos por las raíces. Toma este paquetito de azúcar y llévaselo al pinito'. Los hongos os abren camino con sus lucecitas.", ca: "El gran roure mare xiuxiueja: 'Jo alimento els arbrets per les arrels. Pren aquest paquetet de sucre i porta'l al petit pi'. Els fongs us obren camí amb les seves llumetes.", en: "The great mother oak whispers: 'I feed the little trees through my roots. Take this little parcel of sugar to the pine'. The fungi light the way with their tiny lamps.", cs: "Velký mateřský dub šeptá: 'Já krmím stromečky svými kořeny. Vezmi tenhle balíček cukru a dones ho borovičce'. Houby vám svítí na cestu svými světýlky.", fr: "Le grand chêne mère murmure : « Je nourris les petits arbres par mes racines. Prends ce petit paquet de sucre et porte-le au pin ». Les champignons éclairent le chemin avec leurs petites lampes." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n3a" }
          ]
        },
        n3a: {
          text: { es: "Camináis por el hilo del azúcar con el paquetito a cuestas. De pronto, ¡un cruce roto! Unas hormigas hicieron su casa justo ahí y el hilo se ha soltado.", ca: "Camineu pel fil del sucre amb el paquetet a coll. De sobte, una cruïlla trencada! Unes formigues hi van fer casa seva just allà i el fil s'ha deixat anar.", en: "You walk along the sugar thread with the little parcel on your back. Suddenly, a broken junction! Some ants built their home right there and the thread came loose.", cs: "Jdete po cukrovém vlákně s balíčkem na zádech. Najednou, přerušená křižovatka! Mravenci si tam postavili domeček a vlákno se uvolnilo.", fr: "Vous marchez sur le fil du sucre avec le petit paquet sur le dos. Soudain, un croisement cassé ! Des fourmis ont construit leur maison juste là et le fil s'est détaché." },
          choices: [
            { t: { es: "Ayudamos a la seta a tejer un hilo nuevo", ca: "Ajudem el bolet a teixir un fil nou", en: "Help the mushroom weave a new thread", cs: "Pomůžeme houbě utkat nové vlákno", fr: "Aidons le champignon à tisser un nouveau fil" }, go: "n3c" },
            { t: { es: "Damos un rodeo por el hilo de los avisos", ca: "Fem una volta pel fil dels avisos", en: "Take the long way along the warning thread", cs: "Objedeme to po vlákně se zprávami", fr: "Faisons le détour par le fil des messages" }, go: "n3b" }
          ]
        },
        n3b: {
          text: { es: "Por el hilo de los avisos pasan mensajes: 'orugas en el abedul', 'lluvia esta noche'. ¡Los árboles se avisan de los peligros de verdad! Y al final del hilo... están las raíces del pinito.", ca: "Pel fil dels avisos passen missatges: 'erugues al bedoll', 'pluja aquesta nit'. Els arbres s'avisen dels perills de debò! I al final del fil... hi ha les arrels del petit pi.", en: "Messages run along the warning thread: 'caterpillars on the birch', 'rain tonight'. Trees really do warn each other of danger! And at the end of the thread... are the little pine's roots.", cs: "Po vlákně se zprávami běží hlášky: 'housenky na bříze', 'v noci déšť'. Stromy se opravdu navzájem varují! A na konci vlákna... jsou kořeny borovičky.", fr: "Sur le fil des messages passent des nouvelles : « chenilles sur le bouleau », « pluie cette nuit ». Les arbres se préviennent vraiment des dangers ! Et au bout du fil... les racines du petit pin." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n3c: {
          text: { es: "La seta amiga saca hilito nuevo y, entre todos, atáis el cruce con un lazo doble. Las hormigas, agradecidas porque no las echáis, os regalan una miguita de pan para el viaje. ¡Camino arreglado!", ca: "El bolet amic treu filet nou i, entre tots, lligueu la cruïlla amb un llaç doble. Les formigues, agraïdes perquè no les feu fora, us regalen una miqueta de pa per al viatge. Camí arreglat!", en: "The friendly mushroom spins a new thread and together you tie the junction with a double bow. The ants, grateful that you let them stay, give you a breadcrumb for the trip. Path fixed!", cs: "Kamarádka houba vytáhne nové vlákno a společně křižovatku svážete na dvojitou mašli. Mravenci, vděční, že je nevyháníte, vám darují drobeček chleba na cestu. Cesta opravena!", fr: "Le champignon ami sort un nouveau fil et, tous ensemble, vous attachez le croisement avec un double nœud. Les fourmis, contentes de pouvoir rester, vous offrent une miette de pain pour le voyage. Chemin réparé !" },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n4: {
          text: { es: "¡Llegáis a las raíces del pinito! Le dais el azúcar y bebe despacito. 'Gracias...', dice bajito, '¿y me habéis traído también un mensaje?'. ¿Qué le decimos, {name}?", ca: "Arribeu a les arrels del petit pi! Li doneu el sucre i beu a poc a poc. 'Gràcies...', diu fluixet, 'i m'heu portat també un missatge?'. Què li diem, {name}?", en: "You reach the little pine's roots! You give it the sugar and it drinks slowly. 'Thank you...', it says softly, 'did you bring me a message too?'. What do we say, {name}?", cs: "Jste u kořenů borovičky! Dáte jí cukr a ona pomalinku pije. 'Děkuju...', říká tiše, 'a přinesli jste mi taky nějakou zprávu?'. Co jí řekneme, {name}?", fr: "Vous arrivez aux racines du petit pin ! Vous lui donnez le sucre et il boit doucement. « Merci... », dit-il tout bas, « vous m'avez aussi apporté un message ? ». Que lui dit-on, {name} ?" },
          choices: [
            { t: { es: "'No estás solo: todo el bosque piensa en ti'", ca: "'No estàs sol: tot el bosc pensa en tu'", en: "'You are not alone: the whole forest is thinking of you'", cs: "'Nejsi sám: celý les na tebe myslí'", fr: "« Tu n'es pas seul : toute la forêt pense à toi »" }, go: "e1" },
            { t: { es: "Le contamos un chiste para que se ría", ca: "Li expliquem un acudit perquè rigui", en: "We tell it a joke to make it laugh", cs: "Řekneme jí vtip, ať se zasměje", fr: "On lui raconte une blague pour le faire rire" }, go: "n5" }
          ]
        },
        n5: {
          text: { es: "'¿Qué le dice un árbol a otro? ¡Nos vemos en primavera, que ahora estoy sin hojas!'. El pinito se ríe tanto que le tiemblan las agujas... y suelta una piña de pura risa.", ca: "'Què li diu un arbre a un altre? Ens veiem a la primavera, que ara estic sense fulles!'. El petit pi riu tant que li tremolen les agulles... i deixa caure una pinya de pur riure.", en: "'What does one tree say to another? See you in spring, I have no leaves on right now!'. The little pine laughs so hard its needles tremble... and it drops a pine cone from pure giggling.", cs: "'Co říká jeden strom druhému? Uvidíme se na jaře, teď nemám co na sebe!'. Borovička se směje tak, až se jí třese jehličí... a samým smíchem upustí šišku.", fr: "« Que dit un arbre à un autre ? On se voit au printemps, là je n'ai plus de feuilles ! ». Le petit pin rit si fort que ses aiguilles tremblent... et il laisse tomber une pomme de pin de rire." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e2" }
          ]
        },
        e1: {
          end: true,
          text: { es: "El pinito bebe, se estira y sus agujas vuelven a brillar de verde. Y aprende la lección más bonita del bosque: nadie está solo cuando hay raíces amigas. ¡Misión cumplida, {name}!", ca: "El petit pi beu, s'estira i les seves agulles tornen a brillar de verd. I aprèn la lliçó més bonica del bosc: ningú no està sol quan hi ha arrels amigues. Missió complerta, {name}!", en: "The little pine drinks, stretches, and its needles shine green again. And it learns the loveliest lesson of the forest: nobody is alone when roots are friends. Mission accomplished, {name}!", cs: "Borovička se napije, protáhne se a jehličí se jí zase zeleně leskne. A naučí se nejkrásnější lekci lesa: nikdo není sám, když má kamarádské kořeny. Mise splněna, {name}!", fr: "Le petit pin boit, s'étire, et ses aiguilles brillent à nouveau de vert. Et il apprend la plus belle leçon de la forêt : personne n'est seul quand les racines sont amies. Mission accomplie, {name} !" }
        },
        e2: {
          end: true,
          text: { es: "El pinito, entre risas, manda las gracias por la red: y el mensaje va encendiendo lucecitas de árbol en árbol, hasta que el bosque entero parpadea de alegría. La risa también viaja por las raíces, {name}.", ca: "El petit pi, entre rialles, envia les gràcies per la xarxa: i el missatge va encenent llumetes d'arbre en arbre, fins que el bosc sencer parpelleja d'alegria. El riure també viatja per les arrels, {name}.", en: "Still giggling, the little pine sends a thank-you through the network: and the message lights up tiny lamps from tree to tree, until the whole forest twinkles with joy. Laughter travels through roots too, {name}.", cs: "Borovička se smíchem pošle po síti poděkování: a zpráva rozsvěcuje světýlka od stromu ke stromu, až celý les bliká radostí. I smích cestuje kořeny, {name}.", fr: "Entre deux rires, le petit pin envoie un merci par le réseau : et le message allume des petites lumières d'arbre en arbre, jusqu'à ce que toute la forêt clignote de joie. Le rire aussi voyage par les racines, {name}." }
        }
      }
    },
    {
      id: "hojas", emoji: "🍂", start: "n1",
      title: { es: "El árbol que no quería perder sus hojas", ca: "L'arbre que no volia perdre les fulles", en: "The Tree That Did Not Want to Lose Its Leaves", cs: "Strom, který nechtěl ztratit listí", fr: "L'arbre qui ne voulait pas perdre ses feuilles" },
      nodes: {
        n1: {
          text: { es: "Es otoño y todo el bosque se viste de naranja. Pero el pequeño arce se agarra a sus hojas con todas sus fuerzas: '¡No pienso soltarlas!'. ¿Qué hacemos, {name}?", ca: "És la tardor i tot el bosc es vesteix de taronja. Però el petit auró s'agafa a les seves fulles amb totes les forces: 'No penso deixar-les anar!'. Què fem, {name}?", en: "It is autumn and the whole forest is dressing in orange. But the little maple is holding on to its leaves with all its might: 'I am NOT letting go!'. What do we do, {name}?", cs: "Je podzim a celý les se obléká do oranžové. Ale malý javor se drží svého listí ze všech sil: 'Nepustím je!'. Co uděláme, {name}?", fr: "C'est l'automne et toute la forêt s'habille en orange. Mais le petit érable s'accroche à ses feuilles de toutes ses forces : « Pas question de les lâcher ! ». Qu'est-ce qu'on fait, {name} ?" },
          choices: [
            { t: { es: "Le preguntamos por qué no quiere", ca: "Li preguntem per què no vol", en: "We ask it why not", cs: "Zeptáme se ho proč", fr: "On lui demande pourquoi" }, go: "n2a" },
            { t: { es: "Buscamos al olivo abuelo, que sabe mucho", ca: "Busquem l'olivera àvia, que en sap molt", en: "We find grandpa olive, who knows a lot", cs: "Najdeme dědečka olivovníka, ten toho ví hodně", fr: "On va voir grand-père olivier, qui sait beaucoup de choses" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "El arce confiesa bajito: 'Es que sin hojas pasaré frío... y además son mis amigas. No quiero quedarme solo todo el invierno'. ¿Qué le decimos?", ca: "L'auró confessa fluixet: 'És que sense fulles passaré fred... i a més són les meves amigues. No vull quedar-me sol tot l'hivern'. Què li diem?", en: "The maple confesses quietly: 'Without leaves I will be cold... and besides, they are my friends. I do not want to be alone all winter'. What do we tell it?", cs: "Javor se tiše přizná: 'Bez listí mi bude zima... a navíc jsou to moji kamarádi. Nechci být celou zimu sám'. Co mu řekneme?", fr: "L'érable avoue tout bas : « Sans feuilles, j'aurai froid... et en plus, ce sont mes amies. Je ne veux pas rester seul tout l'hiver ». Que lui dit-on ?" },
          choices: [
            { t: { es: "Le contamos el secreto de las hojas", ca: "Li expliquem el secret de les fulles", en: "We tell it the secret of the leaves", cs: "Prozradíme mu tajemství listí", fr: "On lui raconte le secret des feuilles" }, go: "n3a" },
            { t: { es: "Le prometemos visitarle en invierno", ca: "Li prometem visitar-lo a l'hivern", en: "We promise to visit it in winter", cs: "Slíbíme, že ho v zimě navštívíme", fr: "On promet de lui rendre visite en hiver" }, go: "n3b" }
          ]
        },
        n2b: {
          text: { es: "El olivo abuelo se ríe con cariño: 'Yo nunca pierdo las mías, pero el arce es de otra familia: él necesita dormir en invierno'. Y os cuenta el secreto de las hojas para que se lo llevéis.", ca: "L'olivera àvia riu amb tendresa: 'Jo no perdo mai les meves, però l'auró és d'una altra família: ell necessita dormir a l'hivern'. I us explica el secret de les fulles perquè l'hi porteu.", en: "Grandpa olive laughs kindly: 'I never lose mine, but the maple is from another family: he needs to sleep in winter'. And he tells you the secret of the leaves to carry back.", cs: "Dědeček olivovník se laskavě zasměje: 'Já svoje nikdy neztrácím, ale javor je z jiné rodiny: on musí v zimě spát'. A prozradí vám tajemství listí, abyste mu ho vyřídili.", fr: "Grand-père olivier rit avec tendresse : « Moi, je ne perds jamais les miennes, mais l'érable est d'une autre famille : lui, il doit dormir en hiver ». Et il vous confie le secret des feuilles pour le lui rapporter." },
          choices: [
            { t: { es: "Llevarle el secreto al arce", ca: "Portar el secret a l'auró", en: "Take the secret to the maple", cs: "Doneseme tajemství javoru", fr: "Rapporter le secret à l'érable" }, go: "n3a" }
          ]
        },
        n3a: {
          text: { es: "El secreto: en invierno hay poquita luz, y sujetar las hojas gasta muchísima agua. Por eso el arce las suelta y se echa a dormir. ¡Y el naranja ya estaba dentro! Es su fiesta de despedida.", ca: "El secret: a l'hivern hi ha poqueta llum, i aguantar les fulles gasta moltíssima aigua. Per això l'auró les deixa anar i se'n va a dormir. I el taronja ja era a dins! És la seva festa de comiat.", en: "The secret: in winter there is very little light, and holding leaves costs lots of water. So the maple lets them go and settles down to sleep. And the orange was inside all along! It is their goodbye party.", cs: "Tajemství: v zimě je málo světla a držet listy stojí spoustu vody. Proto je javor pouští a ukládá se ke spánku. A ta oranžová byla uvnitř celou dobu! Je to jejich slavnost na rozloučenou.", fr: "Le secret : en hiver, il y a très peu de lumière, et garder les feuilles coûte beaucoup d'eau. Alors l'érable les laisse partir et s'endort. Et l'orange était dedans depuis toujours ! C'est leur fête d'adieu." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n3b: {
          text: { es: "Le prometéis visitas con canciones y una bufanda de musgo. El arce sonríe un poquito... pero sigue agarrado a sus hojas. Entonces se oye: fuuu, fuuu. ¡Llega el viento del otoño!", ca: "Li prometeu visites amb cançons i una bufanda de molsa. L'auró somriu una miqueta... però segueix agafat a les seves fulles. Llavors se sent: fuuu, fuuu. Arriba el vent de la tardor!", en: "You promise visits with songs and a scarf made of moss. The maple smiles a little... but keeps holding on to its leaves. Then you hear: whoo, whoo. The autumn wind is coming!", cs: "Slíbíte mu návštěvy s písničkami a šálu z mechu. Javor se trošku usměje... ale listí drží dál. Vtom je slyšet: fúúú, fúúú. Přichází podzimní vítr!", fr: "Vous lui promettez des visites avec des chansons et une écharpe de mousse. L'érable sourit un petit peu... mais tient toujours ses feuilles. Alors on entend : fouuu, fouuu. Le vent d'automne arrive !" },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n4: {
          text: { es: "El viento sopla juguetón entre las ramas: '¿Bailamos?'. Las hojas del arce tiemblan de ganas de volar. ¿Qué hace el arce, {name}?", ca: "El vent bufa juganer entre les branques: 'Ballem?'. Les fulles de l'auró tremolen de ganes de volar. Què fa l'auró, {name}?", en: "The wind blows playfully through the branches: 'Shall we dance?'. The maple's leaves tremble, longing to fly. What does the maple do, {name}?", cs: "Vítr hravě fouká mezi větvemi: 'Zatančíme si?'. Javorové listy se třesou, jak moc chtějí létat. Co javor udělá, {name}?", fr: "Le vent souffle, joueur, entre les branches : « On danse ? ». Les feuilles de l'érable tremblent d'envie de voler. Que fait l'érable, {name} ?" },
          choices: [
            { t: { es: "¡Las suelta y baila con el viento!", ca: "Les deixa anar i balla amb el vent!", en: "It lets go and dances with the wind!", cs: "Pustí je a tančí s větrem!", fr: "Il les lâche et danse avec le vent !" }, go: "n4b" },
            { t: { es: "Se agarra todavía más fuerte", ca: "S'agafa encara més fort", en: "It holds on even tighter", cs: "Drží se ještě pevněji", fr: "Il s'accroche encore plus fort" }, go: "n5" }
          ]
        },
        n4b: {
          text: { es: "El arce abre las manos despacito... y las tres primeras hojas salen volando haciendo piruetas. '¡Anda!', se ríe, '¡si es divertido!'. Una le hace cosquillas en la nariz al búho al pasar.", ca: "L'auró obre les mans a poc a poc... i les tres primeres fulles surten volant fent piruetes. 'Ostres!', riu, 'si és divertit!'. Una fa pessigolles al nas del mussol en passar.", en: "The maple opens its hands slowly... and the first three leaves fly off doing pirouettes. 'Well!', it laughs, 'this is fun!'. One tickles the owl's nose as it floats by.", cs: "Javor pomaličku otevře dlaně... a první tři listy vyletí a dělají piruety. 'No ne!', směje se, 'vždyť je to legrace!'. Jeden při letu polechtá sovu na nose.", fr: "L'érable ouvre les mains tout doucement... et les trois premières feuilles s'envolent en faisant des pirouettes. « Oh ! », rit-il, « mais c'est amusant ! ». L'une d'elles chatouille le nez du hibou en passant." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e1" }
          ]
        },
        n5: {
          text: { es: "El arce aguanta y aguanta... hasta que llega la nieve y se posa sobre las hojas. ¡Cuánto pesa! Las ramas se doblan: cric, crac. ¡Hay que hacer algo ya, {name}!", ca: "L'auró aguanta i aguanta... fins que arriba la neu i es posa sobre les fulles. Com pesa! Les branques es dobleguen: cric, crac. Cal fer alguna cosa ja, {name}!", en: "The maple holds on and on... until the snow comes and settles on the leaves. So heavy! The branches bend: creak, crack. We must do something now, {name}!", cs: "Javor drží a drží... až přijde sníh a usadí se na listech. Ten ale váží! Větve se ohýbají: vrz, prask. Musíme hned něco udělat, {name}!", fr: "L'érable tient bon, tient bon... jusqu'à ce que la neige arrive et se pose sur les feuilles. Comme c'est lourd ! Les branches plient : cric, crac. Il faut agir tout de suite, {name} !" },
          choices: [
            { t: { es: "¡Ahora sí: suelta las hojas!", ca: "Ara sí: deixa anar les fulles!", en: "Now yes: let the leaves go!", cs: "Teď už ano: pusť to listí!", fr: "Maintenant oui : lâche les feuilles !" }, go: "n4b" },
            { t: { es: "Llamamos a los amigos para sacudir la nieve", ca: "Cridem els amics per sacsejar la neu", en: "We call our friends to shake off the snow", cs: "Zavoláme kamarády, ať sníh setřeseme", fr: "On appelle les amis pour secouer la neige" }, go: "e2" }
          ]
        },
        e1: {
          end: true,
          text: { es: "Las hojas vuelan como mariposas naranjas y caen junto a las raíces, tapándolas como una manta. El arce bosteza: 'Qué ligerito estoy...'. En primavera despierta lleno de yemas nuevas. Soltar no es perder, {name}: es descansar y volver a empezar.", ca: "Les fulles volen com papallones taronges i cauen vora les arrels, tapant-les com una manta. L'auró badalla: 'Que lleuger que estic...'. A la primavera es desperta ple de gemmes noves. Deixar anar no és perdre, {name}: és descansar i tornar a començar.", en: "The leaves fly like orange butterflies and land by the roots, covering them like a blanket. The maple yawns: 'I feel so light...'. In spring it wakes up full of new buds. Letting go is not losing, {name}: it is resting and starting again.", cs: "Listy létají jako oranžoví motýli a snášejí se ke kořenům, které přikryjí jako deka. Javor zívne: 'To je mi lehko...'. Na jaře se probudí plný nových pupenů. Pustit neznamená ztratit, {name}: znamená to odpočinout si a začít znovu.", fr: "Les feuilles volent comme des papillons orange et tombent près des racines, qu'elles couvrent comme une couverture. L'érable bâille : « Comme je me sens léger... ». Au printemps, il se réveille plein de nouveaux bourgeons. Lâcher, ce n'est pas perdre, {name} : c'est se reposer et recommencer." }
        },
        e2: {
          end: true,
          text: { es: "La ardilla, el búho, el viento y tú sacudís la nieve juntos, y las hojas caen haciendo remolinos. El arce respira aliviado, y sus hojas abrigan el suelo todo el invierno. Pedir ayuda a tiempo también es de sabios, {name}.", ca: "L'esquirol, el mussol, el vent i tu sacsegeu la neu junts, i les fulles cauen fent remolins. L'auró respira alleujat, i les seves fulles abriguen el terra tot l'hivern. Demanar ajuda a temps també és de savis, {name}.", en: "The squirrel, the owl, the wind and you shake off the snow together, and the leaves fall in little whirls. The maple sighs with relief, and its leaves keep the ground warm all winter. Asking for help in time is wise too, {name}.", cs: "Veverka, sova, vítr a ty společně setřesete sníh a listí padá v malých vírech. Javor si úlevně oddechne a jeho listí celou zimu hřeje zem. Říct si včas o pomoc je taky moudré, {name}.", fr: "L'écureuil, le hibou, le vent et toi secouez la neige ensemble, et les feuilles tombent en petits tourbillons. L'érable respire, soulagé, et ses feuilles gardent le sol au chaud tout l'hiver. Demander de l'aide à temps, c'est aussi être sage, {name}." }
        }
      }
    }
  ],

  /* ---------- KARAOKE ---------- */
  songs: [
    { emoji: "🌸",
      title: { es: "La canción de las estaciones", ca: "La cançó de les estacions", en: "The Seasons Song", cs: "Písnička ročních období", fr: "La chanson des saisons" },
      lines: [
        { es: "En primavera, flor y flor,", ca: "A la primavera, flor i flor,", en: "In springtime flowers, one two three,", cs: "Na jaře květy voní nám,", fr: "Au printemps, mille fleurs," },
        { es: "el árbol se llena de color.", ca: "l'arbre s'omple de color.", en: "colours bloom on every tree.", cs: "strom už nikdy není sám.", fr: "l'arbre s'habille de couleurs." },
        { es: "En verano, sombra fresquita,", ca: "A l'estiu, ombra fresqueta,", en: "In summer, shade so cool and wide,", cs: "V létě dává chladný stín,", fr: "En été, l'ombre est douce," },
        { es: "para la siesta más rica.", ca: "per fer-hi la becaina quieta.", en: "we picnic there and play and hide.", cs: "sedneme si rovnou s ním.", fr: "on rêve dessous, sur la mousse." },
        { es: "En otoño las hojas se van,", ca: "A la tardor les fulles se'n van,", en: "In autumn leaves go dancing down,", cs: "Na podzim listí zlátne, víš,", fr: "En automne, les feuilles s'envolent," },
        { es: "bailando al suelo llegarán.", ca: "ballant a terra arribaran.", en: "they paint in orange all the town.", cs: "k zemi letí níž a níž.", fr: "en tourbillons, elles dansent, folles." },
        { es: "Y en invierno, a descansar:", ca: "I a l'hivern, a descansar:", en: "In winter trees can rest and sigh,", cs: "V zimě si strom lehne, spí,", fr: "En hiver, l'arbre se repose," },
        { es: "¡en primavera, vuelta a empezar!", ca: "a la primavera, torna a començar!", en: "till spring returns to say hi!", cs: "o jaru si krásně sní!", fr: "au printemps, tout est rose !" }
      ] },
    { emoji: "🌙",
      title: { es: "La nana de las raíces", ca: "La cançó de bressol de les arrels", en: "The Roots' Lullaby", cs: "Ukolébavka kořenů", fr: "La berceuse des racines" },
      lines: [
        { es: "Duerme, duerme, semillita,", ca: "Dorm, dorm, llavoreta,", en: "Sleep now, sleep, my little seed,", cs: "Spinkej, spinkej, semínko,", fr: "Dors, dors, petite graine," },
        { es: "bajo tierra calentita.", ca: "sota terra ben quieta.", en: "warm dark earth is all you need.", cs: "pod zemí je teplíčko.", fr: "la terre est douce et pleine." },
        { es: "Las raíces, muy cerquita,", ca: "Les arrels, de la maneta,", en: "Roots are holding hands tonight,", cs: "Kořínky tě kolébají,", fr: "Les racines se tiennent la main," },
        { es: "te preparan la camita.", ca: "et fan una abraçadeta.", en: "tucking you in, snug and tight.", cs: "tiše, tiše zpívají.", fr: "et te bercent jusqu'au matin." },
        { es: "Por los hilos, bajo el suelo,", ca: "Pels filets, sota el prat,", en: "Through the threads beneath the ground,", cs: "Pod zemí se nitky třpytí,", fr: "Par les fils, sous le pré," },
        { es: "viaja un beso de consuelo.", ca: "viatja un petó ben daurat.", en: "travels love without a sound.", cs: "nesou lásku, nesou kvítí.", fr: "voyage un bisou doré." },
        { es: "Cierra los ojos, semillita,", ca: "Tanca els ullets, llavoreta,", en: "Close your eyes, my little seed,", cs: "Zavři očka, semínko,", fr: "Ferme les yeux, petite graine," },
        { es: "mañana serás más altita.", ca: "demà seràs més grandeta.", en: "you will grow up tall indeed.", cs: "vyrosteš jak sluníčko.", fr: "demain tu seras un chêne." }
      ] },
    { emoji: "🍁",
      title: { es: "El baile de las hojas", ca: "El ball de les fulles", en: "The Dance of the Leaves", cs: "Tanec listí", fr: "La danse des feuilles" },
      lines: [
        { es: "El viento toca su tambor,", ca: "El vent toca el seu tambor,", en: "The wind is drumming, one two three,", cs: "Vítr bubnuje na buben,", fr: "Le vent tape sur son tambour," },
        { es: "y el bosque baila alrededor.", ca: "i el bosc balla amb tot el cor.", en: "the forest dances, wild and free.", cs: "listí tančí celý den.", fr: "la forêt danse tout autour." },
        { es: "Hoja roja, hoja dorada,", ca: "Fulla roja, fulla daurada,", en: "A red leaf here, a golden one,", cs: "Červené a zlaté listí,", fr: "Feuille rouge, feuille dorée," },
        { es: "dan volteretas en bandada.", ca: "fan tombarelles en gran volada.", en: "they twirl and tumble in the sun.", cs: "ve vzduchu se krásně blyští.", fr: "font des pirouettes dans le pré." },
        { es: "Cris, cras, suenan al pisar,", ca: "Cric, crac, sonen en trepitjar,", en: "Crunch, crunch, they sing beneath our feet,", cs: "Křup a křup, to zpívá zem,", fr: "Cric, crac, ça chante sous nos pas," },
        { es: "¡qué alfombra para saltar!", ca: "quina catifa per saltar!", en: "a crispy carpet, what a treat!", cs: "koberec je pod stromem.", fr: "un tapis croustillant, hourra !" },
        { es: "Y cuando acaba la canción,", ca: "I quan s'acaba la cançó,", en: "And when the dancing song is done,", cs: "A když dozní písnička,", fr: "Et quand la chanson est finie," },
        { es: "duermen juntas en un montón.", ca: "dormen juntes en un munt rodó.", en: "they sleep together, every one.", cs: "spinká celá hromádka.", fr: "elles s'endorment, bien blotties." }
      ] }
  ],

  /* ---------- TRADUCTOR ---------- */
  translator: {
    words: [
      W_COMMON.hola,
      W_COMMON.adios,
      W_COMMON.amigo,
      { k: "arbol", emoji: "🌳", name: { es: "árbol", ca: "arbre", en: "tree", cs: "strom", fr: "arbre" } },
      { k: "hoja", emoji: "🍃", name: { es: "hoja", ca: "fulla", en: "leaf", cs: "list", fr: "feuille" } },
      { k: "raiz", emoji: "🌱", name: { es: "raíz", ca: "arrel", en: "root", cs: "kořen", fr: "racine" } },
      { k: "semilla", emoji: "🌰", name: { es: "semilla", ca: "llavor", en: "seed", cs: "semínko", fr: "graine" } },
      { k: "bosque", emoji: "🌲", name: { es: "bosque", ca: "bosc", en: "forest", cs: "les", fr: "forêt" } },
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
      { id: "susurro", emoji: "🍃",
        name: { es: "Susurro de hojas", ca: "Xiuxiueig de fulles", en: "Leaf whisper", cs: "Šepot listí", fr: "Chuchotis des feuilles" },
        greeting: { es: "Shhh-shh... así se dice hola en el idioma de las hojas. Se habla flojito, con ayuda del viento.", ca: "Shhh-shh... així es diu hola en l'idioma de les fulles. Es parla fluixet, amb l'ajuda del vent.", en: "Shhh-shh... that is how you say hello in leaf language. You speak very softly, with a little help from the wind.", cs: "Šššš-šš... tak se řekne ahoj jazykem listí. Mluví se tichounce, s pomocí větru.", fr: "Chhh-chh... c'est comme ça qu'on dit bonjour en langue des feuilles. On parle tout bas, avec l'aide du vent." },
        dict: { hola: "shhh-shh", adios: "shuuu-sh", amigo: "fshi-fshi", arbol: "shoma", hoja: "flish", raiz: "shrudu", semilla: "shipip", bosque: "shhh-shhh-sh", robot: "clic-shh", mama: "shimma", papa: "shoppa", casa: "shome", agua: "shplish", comida: "shñam", perro: "shguau", gato: "shmiau", grande: "shhoo", pequeno: "shi", bonito: "shili", amor: "shicor", gracias: "shigra", si: "ship", no: "shop", dormir: "shhh-zzz" } },
      { id: "ardilla", emoji: "🐿️",
        name: { es: "Ardilla", ca: "Esquirol", en: "Squirrel", cs: "Veverka", fr: "Écureuil" },
        greeting: { es: "¡Ñiqui-ñiqui! Así saluda la ardilla: rapidísimo y moviendo la cola.", ca: "Ñiqui-ñiqui! Així saluda l'esquirol: rapidíssim i movent la cua.", en: "Squeaky-squeak! That is how the squirrel says hello: super fast, wagging her tail.", cs: "Ňiky-ňiky! Tak zdraví veverka: strašně rychle a vrtí přitom ocáskem.", fr: "Niki-niki ! C'est comme ça que l'écureuil dit bonjour : très vite, en remuant la queue." },
        dict: { hola: "ñiqui", adios: "ñiqui-ñac", amigo: "ñiqui-miqui", arbol: "ñoc-ñoc", hoja: "ñif", raiz: "ñurri", semilla: "ñampip", bosque: "ñoqui-ñoqui", robot: "ñiqui-bip", mama: "ñima", papa: "ñipa", casa: "ñido", agua: "gluñic", comida: "ñam-ñam", perro: "ñau-guau", gato: "ñiau", grande: "ñicote", pequeno: "ñiquin", bonito: "ñili", amor: "ñuqui", gracias: "ñiqui-gra", si: "ñic", no: "ñoc", dormir: "ñzzz" } },
      { id: "raices", emoji: "🌱",
        name: { es: "Raíces", ca: "Arrels", en: "Roots", cs: "Kořeny", fr: "Racines" },
        greeting: { es: "Gruuum... las raíces hablan lentísimo y muy profundo. Cada palabra dura un buen rato.", ca: "Gruuum... les arrels parlen lentíssim i molt profund. Cada paraula dura una bona estona.", en: "Gruuum... roots speak very slowly and very deep. Every word takes a nice long while.", cs: "Grúúúm... kořeny mluví pomaloučku a hlubokým hlasem. Každé slovo trvá pěknou chvíli.", fr: "Grouuum... les racines parlent très lentement et très grave. Chaque mot dure un bon moment." },
        dict: { hola: "gruuum", adios: "gruuum-baaa", amigo: "bruuu-mi", arbol: "gronnn-da", hoja: "fooo-la", raiz: "rrruuum", semilla: "pip-ooom", bosque: "brooom-brooom", robot: "clonc-ooom", mama: "muuum", papa: "puuum", casa: "hooom", agua: "gluuub", comida: "ñooom", perro: "guuuau", gato: "miaaau", grande: "grooonde", pequeno: "piiic", bonito: "booonu", amor: "cooor", gracias: "graaa-oom", si: "sooo", no: "nooo", dormir: "rooon-rooon" } },
      { id: "carpintero", emoji: "🐦",
        name: { es: "Pájaro carpintero", ca: "Picot", en: "Woodpecker", cs: "Datel", fr: "Pic" },
        greeting: { es: "¡Toc-toc! El pájaro carpintero lo dice todo tamborileando en el tronco.", ca: "Toc-toc! El picot ho diu tot tamborinant al tronc.", en: "Knock-knock! The woodpecker says everything by drumming on the trunk.", cs: "Ťuk-ťuk! Datel všechno vybubnuje do kmene.", fr: "Toc-toc ! Le pic dit tout en tambourinant sur le tronc." },
        dict: { hola: "toc-toc", adios: "toc-toc-toc", amigo: "toqui-toc", arbol: "toc-tom", hoja: "tic", raiz: "toc-tum", semilla: "tic-tic", bosque: "tocotoc", robot: "toc-bip", mama: "toc-ma", papa: "toc-pa", casa: "tocnido", agua: "tluc", comida: "tacatac", perro: "toc-guau", gato: "toc-miau", grande: "tooc", pequeno: "tiquitic", bonito: "tiquitoc", amor: "toc-tic-toc", gracias: "taca-toc", si: "toc", no: "tuc", dormir: "toc-zzz" } }
    ]
  },

  /* ---------- MAPA DE EXPLORACIÓN ---------- */
  explore: {
    width: 2600, height: 1100, stars: false,
    bgCss: "radial-gradient(ellipse 40% 28% at 12% 12%, rgba(255,241,118,.45), transparent), linear-gradient(180deg,#aed9f5 0%,#d3ecc4 30%,#9ccc65 58%,#558b2f 80%,#33691e 100%)",
    cats: [
      { id: "bosque", emoji: "🌲", x: 120, name: { es: "El bosque", ca: "El bosc", en: "The forest", cs: "Les", fr: "La forêt" } },
      { id: "gigantes", emoji: "🌴", x: 1000, name: { es: "Los gigantes", ca: "Els gegants", en: "The giants", cs: "Obři", fr: "Les géants" } },
      { id: "estaciones", emoji: "🍂", x: 1900, name: { es: "El año del árbol", ca: "L'any de l'arbre", en: "The tree's year", cs: "Rok stromu", fr: "L'année de l'arbre" } }
    ],
    pois: [
      { cat: "bosque", emoji: "🌳", x: 190, y: 825, size: 2, iw: 120, ih: 130, svg: `<svg viewBox="0 0 120 130" width="100%" height="100%">
          <defs><radialGradient id="arRob" cx="35%" cy="30%" r="80%"><stop offset="0%" stop-color="#81c784"/><stop offset="100%" stop-color="#2e7d32"/></radialGradient></defs>
          <ellipse cx="60" cy="122" rx="46" ry="7" fill="#7cb342" opacity=".8"/>
          <path d="M55 60 L52 118 L68 118 L63 60 Z" fill="#6d4c41"/>
          <path d="M58 78 Q40 70 34 62 M60 74 Q78 68 86 64" stroke="#6d4c41" stroke-width="5" fill="none" stroke-linecap="round"/>
          <circle cx="36" cy="46" r="24" fill="url(#arRob)"/><circle cx="84" cy="44" r="24" fill="url(#arRob)"/>
          <circle cx="60" cy="28" r="28" fill="url(#arRob)"/><circle cx="60" cy="50" r="24" fill="url(#arRob)"/>
          <ellipse cx="90" cy="76" rx="4.6" ry="6.4" fill="#a1887f"/><path d="M84 72 Q90 67 96 72 L90 74 Z" fill="#5d4037"/>
          <ellipse cx="30" cy="114" rx="7" ry="8" fill="#ef6c00"/><circle cx="30" cy="103" r="5" fill="#ef6c00"/>
          <circle cx="28.5" cy="102" r="1.2" fill="#3e2723"/><path d="M27 99 l-1.8 -3.6 3 1.2 Z" fill="#ef6c00"/>
          <path d="M36 116 Q48 112 44 99 Q42 91 34 95" stroke="#ff9800" stroke-width="6" fill="none" stroke-linecap="round"/>
        </svg>`,
        name: { es: "El roble", ca: "El roure", en: "The oak", cs: "Dub", fr: "Le chêne" },
        fact: { es: "El roble es un hotel del bosque: en uno solo viven cientos de bichitos, pájaros y ardillas. Su semilla es la bellota.", ca: "El roure és un hotel del bosc: en un de sol hi viuen centenars de bestioles, ocells i esquirols. La seva llavor és la gla.", en: "The oak is a forest hotel: hundreds of little creatures, birds and squirrels live in just one. Its seed is the acorn.", cs: "Dub je lesní hotel: na jediném stromě žijí stovky broučků, ptáků a veverek. Jeho semínkem je žalud.", fr: "Le chêne est un hôtel de la forêt : des centaines de petites bêtes, d'oiseaux et d'écureuils vivent dans un seul arbre. Sa graine est le gland." } },
      { cat: "bosque", emoji: "🌲", x: 400, y: 820, iw: 90, ih: 140, svg: `<svg viewBox="0 0 90 140" width="100%" height="100%">
          <ellipse cx="45" cy="132" rx="34" ry="6" fill="#7cb342" opacity=".8"/>
          <path d="M40 104 L38 130 L52 130 L50 104 Z" fill="#795548"/>
          <path d="M45 8 L26 42 L64 42 Z" fill="#388e3c"/>
          <path d="M45 30 L20 72 L70 72 Z" fill="#33691e"/>
          <path d="M45 58 L14 106 L76 106 Z" fill="#2e7d32"/>
          <ellipse cx="33" cy="64" rx="4" ry="6.4" fill="#8d6e63"/><path d="M30 61.5 h6 M30 65 h6" stroke="#5d4037" stroke-width="1.1"/>
          <ellipse cx="57" cy="94" rx="4" ry="6.4" fill="#8d6e63"/><path d="M54 91.5 h6 M54 95 h6" stroke="#5d4037" stroke-width="1.1"/>
        </svg>`,
        name: { es: "El pino", ca: "El pi", en: "The pine", cs: "Borovice", fr: "Le pin" },
        fact: { es: "El pino no pierde sus agujas en invierno. Sus piñas se abren con el calorcito y se cierran cuando llueve.", ca: "El pi no perd les seves agulles a l'hivern. Les seves pinyes s'obren amb la caloreta i es tanquen quan plou.", en: "The pine keeps its needles in winter. Its cones open in warm weather and close when it rains.", cs: "Borovice v zimě neshazuje jehličí. Její šišky se v teple otevírají a za deště zavírají.", fr: "Le pin garde ses aiguilles en hiver. Ses pommes de pin s'ouvrent avec la chaleur et se ferment quand il pleut." } },
      { cat: "bosque", emoji: "🌿", x: 580, y: 825, iw: 70, ih: 130, svg: `<svg viewBox="0 0 70 130" width="100%" height="100%">
          <ellipse cx="35" cy="124" rx="26" ry="5" fill="#7cb342" opacity=".8"/>
          <circle cx="35" cy="26" r="17" fill="#c5e1a5"/><circle cx="19" cy="37" r="11" fill="#aed581"/>
          <circle cx="52" cy="35" r="11" fill="#aed581"/><circle cx="35" cy="44" r="13" fill="#9ccc65"/>
          <path d="M32 52 L30 122 L42 122 L40 52 Z" fill="#fafafa" stroke="#cfd8dc" stroke-width="1"/>
          <path d="M32 64 h6 M37 78 h5 M31 92 h5 M37 106 h5" stroke="#37474f" stroke-width="3"/>
        </svg>`,
        name: { es: "El abedul", ca: "El bedoll", en: "The birch", cs: "Bříza", fr: "Le bouleau" },
        fact: { es: "El abedul tiene la corteza blanca, y se despega en tiras finitas como papel. Es de los primeros árboles en llegar a un prado vacío.", ca: "El bedoll té l'escorça blanca, i es desenganxa en tires finetes com paper. És dels primers arbres a arribar a un prat buit.", en: "The birch has white bark that peels off in thin strips like paper. It is one of the first trees to arrive in an empty meadow.", cs: "Bříza má bílou kůru, která se odlupuje v tenkých proužcích jako papír. Je jedním z prvních stromů, které dorazí na prázdnou louku.", fr: "Le bouleau a une écorce blanche qui se détache en fines bandes, comme du papier. C'est l'un des premiers arbres à s'installer dans un pré vide." } },
      { cat: "bosque", emoji: "🌰", x: 770, y: 830, iw: 100, ih: 120, svg: `<svg viewBox="0 0 100 120" width="100%" height="100%">
          <ellipse cx="50" cy="113" rx="38" ry="6" fill="#7cb342" opacity=".8"/>
          <path d="M46 58 L44 110 L58 110 L55 58 Z" fill="#5d4037"/>
          <circle cx="32" cy="40" r="19" fill="#558b2f"/><circle cx="68" cy="40" r="19" fill="#558b2f"/>
          <circle cx="50" cy="26" r="22" fill="#689f38"/><circle cx="50" cy="44" r="19" fill="#7cb342"/>
          <circle cx="64" cy="52" r="7" fill="#aed581"/><path d="M58 47 l-3 -4 M64 44 l0 -5 M70 47 l3 -4 M72 53 l5 -1 M70 58 l4 3" stroke="#aed581" stroke-width="2" stroke-linecap="round"/>
          <circle cx="30" cy="30" r="7" fill="#aed581"/><path d="M24 25 l-3 -4 M30 22 l0 -5 M36 25 l3 -4 M38 31 l5 -1 M23 32 l-5 0" stroke="#aed581" stroke-width="2" stroke-linecap="round"/>
          <path d="M76 106 a7 7 0 0 1 14 0 Z" fill="#c5e1a5"/><circle cx="83" cy="104" r="4" fill="#5d4037"/>
        </svg>`,
        name: { es: "El castaño", ca: "El castanyer", en: "The chestnut", cs: "Kaštanovník", fr: "Le châtaignier" },
        fact: { es: "Las castañas viajan dentro de un erizo con pinchos que las protege. Cuando están listas, el erizo se abre solo.", ca: "Les castanyes viatgen dins d'un eriçó amb punxes que les protegeix. Quan estan a punt, l'eriçó s'obre tot sol.", en: "Chestnuts travel inside a spiky case that protects them. When they are ready, the case opens all by itself.", cs: "Kaštany cestují uvnitř pichlavé bodlinaté slupky, která je chrání. Když dozrají, slupka se sama otevře.", fr: "Les châtaignes voyagent dans une bogue pleine de piquants qui les protège. Quand elles sont prêtes, la bogue s'ouvre toute seule." } },
      { cat: "bosque", emoji: "💬", x: 470, y: 938, iw: 150, ih: 60, svg: `<svg viewBox="0 0 150 60" width="100%" height="100%">
          <path d="M12 6 Q20 20 16 36 M24 4 Q28 22 36 32 M32 8 Q38 18 34 36" stroke="#8d6e63" stroke-width="4" fill="none" stroke-linecap="round"/>
          <path d="M138 6 Q130 20 134 36 M126 4 Q122 22 114 32 M118 8 Q112 18 116 36" stroke="#8d6e63" stroke-width="4" fill="none" stroke-linecap="round"/>
          <path d="M20 38 Q50 54 75 46 Q105 38 130 42" stroke="#ffe082" stroke-width="2.4" fill="none" opacity=".9"/>
          <path d="M30 34 Q60 28 90 36 Q112 41 126 34" stroke="#fff176" stroke-width="1.8" fill="none" opacity=".7"/>
          <circle cx="55" cy="49" r="3" fill="#fff176"><animate attributeName="opacity" values="1;.2;1" dur="1.6s" repeatCount="indefinite"/></circle>
          <circle cx="90" cy="39" r="2.6" fill="#ffe082"><animate attributeName="opacity" values=".2;1;.2" dur="1.9s" repeatCount="indefinite"/></circle>
          <circle cx="118" cy="37" r="2.2" fill="#fff59d"><animate attributeName="opacity" values="1;.3;1" dur="2.3s" repeatCount="indefinite"/></circle>
        </svg>`,
        name: { es: "La red de raíces", ca: "La xarxa d'arrels", en: "The root network", cs: "Síť kořenů", fr: "Le réseau de racines" },
        fact: { es: "Bajo tus pies, los hilos de los hongos conectan las raíces de los árboles: por ahí se mandan azúcar y avisos. ¡Es el internet del bosque!", ca: "Sota els teus peus, els fils dels fongs connecten les arrels dels arbres: per allà s'envien sucre i avisos. És l'internet del bosc!", en: "Under your feet, fungus threads connect the roots of the trees: they send sugar and warnings along them. It is the internet of the forest!", cs: "Pod tvýma nohama propojují houbová vlákna kořeny stromů: posílají si po nich cukr i varování. Je to lesní internet!", fr: "Sous tes pieds, les fils des champignons relient les racines des arbres : ils s'y envoient du sucre et des messages. C'est l'internet de la forêt !" } },
      { cat: "bosque", emoji: "🍄", x: 900, y: 870, iw: 60, ih: 60, svg: `<svg viewBox="0 0 60 60" width="100%" height="100%">
          <path d="M8 30 Q30 4 52 30 Q30 38 8 30 Z" fill="#e53935"/>
          <circle cx="20" cy="21" r="3" fill="#fff"/><circle cx="34" cy="15" r="3" fill="#fff"/><circle cx="43" cy="23" r="2.4" fill="#fff"/>
          <path d="M22 32 Q22 52 26 55 L36 55 Q39 51 38 32 Z" fill="#fff3e0"/>
          <circle cx="27" cy="41" r="1.6" fill="#4e342e"/><circle cx="33" cy="41" r="1.6" fill="#4e342e"/>
          <path d="M27 46 Q30 48.4 33 46" stroke="#4e342e" stroke-width="1.4" fill="none" stroke-linecap="round"/>
          <path d="M10 57 Q18 51 25 57 M36 57 Q44 51 52 57" stroke="#ffe082" stroke-width="1.6" fill="none"/>
        </svg>`,
        name: { es: "La seta amiga", ca: "El bolet amic", en: "The friendly mushroom", cs: "Kamarádka houba", fr: "Le champignon ami" },
        fact: { es: "La seta es solo el sombrerito: el hongo de verdad es una red enorme que vive bajo tierra y ayuda a los árboles a hablarse.", ca: "El bolet és només el barretet: el fong de debò és una xarxa enorme que viu sota terra i ajuda els arbres a parlar-se.", en: "The mushroom is just the little hat: the real fungus is a huge net living underground that helps the trees talk to each other.", cs: "Houba nad zemí je jen klobouček: ta pravá houba je obrovská síť pod zemí, která pomáhá stromům si povídat.", fr: "Le champignon n'est que le petit chapeau : le vrai champignon est un immense réseau sous terre qui aide les arbres à se parler." } },
      { cat: "gigantes", emoji: "🗼", x: 1060, y: 765, size: 2, iw: 80, ih: 250, svg: `<svg viewBox="0 0 80 250" width="100%" height="100%">
          <ellipse cx="40" cy="242" rx="30" ry="6" fill="#7cb342" opacity=".8"/>
          <path d="M35 40 L31 240 L51 240 L46 40 Z" fill="#a1543a"/>
          <path d="M37 120 Q35 180 36 232 M45 100 Q46 170 45 226" stroke="rgba(0,0,0,.18)" stroke-width="2.4" fill="none"/>
          <path d="M40 4 L27 42 L54 42 Z" fill="#2e7d32"/>
          <path d="M40 26 L21 76 L60 76 Z" fill="#33691e"/>
          <path d="M40 56 L17 116 L64 116 Z" fill="#2e7d32"/>
          <path d="M40 90 L14 154 L67 154 Z" fill="#388e3c"/>
        </svg>`,
        name: { es: "La secuoya gigante", ca: "La sequoia gegant", en: "The giant sequoia", cs: "Obří sekvoje", fr: "Le séquoia géant" },
        fact: { es: "La secuoya es el ser vivo más alto del mundo: pasa de los 100 metros, ¡como 30 pisos! Su corteza gruesa la protege hasta del fuego.", ca: "La sequoia és l'ésser viu més alt del món: passa dels 100 metres, com 30 pisos! La seva escorça gruixuda la protegeix fins i tot del foc.", en: "The sequoia is the tallest living thing in the world: over 100 metres, like 30 floors! Its thick bark even protects it from fire.", cs: "Sekvoje je nejvyšší živý tvor na světě: měří přes 100 metrů, jako 30 pater! Její tlustá kůra ji chrání dokonce i před ohněm.", fr: "Le séquoia est l'être vivant le plus haut du monde : plus de 100 mètres, comme 30 étages ! Son écorce épaisse le protège même du feu." } },
      { cat: "gigantes", emoji: "🌴", x: 1260, y: 835, iw: 120, ih: 110, svg: `<svg viewBox="0 0 120 110" width="100%" height="100%">
          <ellipse cx="60" cy="103" rx="42" ry="6" fill="#c0a060" opacity=".8"/>
          <path d="M42 100 Q26 62 36 32 Q39 20 48 18 L46 8 L54 16 L60 4 L64 16 L72 7 L74 18 Q83 20 86 32 Q94 62 80 100 Z" fill="#8d6e63"/>
          <circle cx="48" cy="9" r="7" fill="#7cb342"/><circle cx="61" cy="4" r="7.6" fill="#8bc34a"/><circle cx="73" cy="8" r="7" fill="#7cb342"/>
          <path d="M42 78 Q60 86 80 78" stroke="rgba(0,0,0,.15)" stroke-width="3" fill="none"/>
          <path d="M61 52 q7 9 0 14 q-7 -5 0 -14" fill="#4fc3f7"/>
        </svg>`,
        name: { es: "El baobab", ca: "El baobab", en: "The baobab", cs: "Baobab", fr: "Le baobab" },
        fact: { es: "El baobab guarda miles de litros de agua en su tronco barrigudo, para aguantar los meses en que no llueve nada.", ca: "El baobab guarda milers de litres d'aigua al seu tronc panxut, per aguantar els mesos en què no plou gens.", en: "The baobab stores thousands of litres of water in its round belly trunk, to survive the months with no rain at all.", cs: "Baobab si v břichatém kmeni schovává tisíce litrů vody, aby vydržel měsíce, kdy vůbec neprší.", fr: "Le baobab garde des milliers de litres d'eau dans son tronc ventru, pour tenir pendant les mois sans aucune pluie." } },
      { cat: "gigantes", emoji: "🫒", x: 1440, y: 840, iw: 100, ih: 100, svg: `<svg viewBox="0 0 100 100" width="100%" height="100%">
          <ellipse cx="50" cy="94" rx="36" ry="5.6" fill="#c8b78a" opacity=".8"/>
          <path d="M44 92 Q36 70 48 56 Q56 46 48 36" stroke="#6d4c41" stroke-width="10" fill="none" stroke-linecap="round"/>
          <path d="M57 92 Q64 72 53 58 Q45 48 55 38" stroke="#5d4037" stroke-width="7" fill="none" stroke-linecap="round"/>
          <circle cx="34" cy="30" r="14" fill="#8aab5c"/><circle cx="66" cy="30" r="14" fill="#8aab5c"/>
          <circle cx="50" cy="20" r="16" fill="#9dbb70"/><circle cx="50" cy="34" r="13" fill="#8aab5c"/>
          <ellipse cx="42" cy="26" rx="2.2" ry="3" fill="#33421f"/><ellipse cx="60" cy="34" rx="2.2" ry="3" fill="#33421f"/><ellipse cx="52" cy="14" rx="2.2" ry="3" fill="#556b2f"/>
        </svg>`,
        name: { es: "El olivo milenario", ca: "L'olivera mil·lenària", en: "The thousand-year olive", cs: "Tisíciletý olivovník", fr: "L'olivier millénaire" },
        fact: { es: "Hay olivos con más de dos mil años. Su tronco se retuerce como una trenza, y siguen dando aceitunas cada otoño.", ca: "Hi ha oliveres amb més de dos mil anys. El seu tronc es recargola com una trena, i segueixen donant olives cada tardor.", en: "Some olive trees are over two thousand years old. Their trunks twist like a braid, and they still give olives every autumn.", cs: "Některé olivovníky jsou přes dva tisíce let staré. Jejich kmen se kroutí jako cop a každý podzim pořád dávají olivy.", fr: "Certains oliviers ont plus de deux mille ans. Leur tronc se tord comme une tresse, et ils donnent encore des olives chaque automne." } },
      { cat: "gigantes", emoji: "🎋", x: 1600, y: 815, iw: 70, ih: 150, svg: `<svg viewBox="0 0 70 150" width="100%" height="100%">
          <ellipse cx="35" cy="143" rx="26" ry="5" fill="#7cb342" opacity=".8"/>
          <path d="M18 142 L18 34" stroke="#7cb342" stroke-width="8" stroke-linecap="round"/>
          <path d="M14 118 h8 M14 88 h8 M14 58 h8" stroke="#558b2f" stroke-width="2.6"/>
          <path d="M35 142 L35 12" stroke="#8bc34a" stroke-width="9" stroke-linecap="round"/>
          <path d="M30.5 116 h9 M30.5 82 h9 M30.5 48 h9 M30.5 24 h9" stroke="#558b2f" stroke-width="2.6"/>
          <path d="M52 142 L52 46" stroke="#7cb342" stroke-width="7" stroke-linecap="round"/>
          <path d="M48.5 118 h7 M48.5 90 h7 M48.5 62 h7" stroke="#558b2f" stroke-width="2.4"/>
          <path d="M35 18 Q46 8 58 6 Q48 18 37 22 Z" fill="#66bb6a"/>
          <path d="M18 38 Q8 30 2 30 Q10 40 16 44 Z" fill="#66bb6a"/>
          <path d="M52 50 Q62 42 68 42 Q60 52 54 56 Z" fill="#66bb6a"/>
          <path d="M62 100 L62 82 M57 87 L62 82 L67 87" stroke="#aed581" stroke-width="2.6" fill="none" stroke-linecap="round"/>
        </svg>`,
        name: { es: "El bambú", ca: "El bambú", en: "The bamboo", cs: "Bambus", fr: "Le bambou" },
        fact: { es: "El bambú puede crecer casi un metro en un solo día: ¡se le oye crujir! Y en realidad no es un árbol: es una hierba gigante.", ca: "El bambú pot créixer gairebé un metre en un sol dia: se'l sent cruixir! I en realitat no és un arbre: és una herba gegant.", en: "Bamboo can grow almost a metre in a single day: you can hear it creak! And it is not really a tree: it is a giant grass.", cs: "Bambus vyroste skoro o metr za jediný den: je slyšet, jak vrže! A ve skutečnosti to není strom: je to obří tráva.", fr: "Le bambou peut grandir de presque un mètre en un seul jour : on l'entend craquer ! Et en vrai, ce n'est pas un arbre : c'est une herbe géante." } },
      { cat: "gigantes", emoji: "🐉", x: 1760, y: 835, iw: 100, ih: 110, svg: `<svg viewBox="0 0 100 110" width="100%" height="100%">
          <ellipse cx="50" cy="103" rx="36" ry="5.6" fill="#c8b78a" opacity=".8"/>
          <path d="M40 100 Q38 74 30 60 M50 96 L50 56 M60 100 Q62 74 70 60" stroke="#a1887f" stroke-width="10" fill="none" stroke-linecap="round"/>
          <path d="M10 56 Q50 10 90 56 Q70 64 50 62 Q30 64 10 56 Z" fill="#33691e"/>
          <path d="M50 16 L50 28 M28 26 L34 36 M72 26 L66 36 M16 44 L26 48 M84 44 L74 48" stroke="#2e7d32" stroke-width="3" stroke-linecap="round"/>
          <path d="M46 80 q4.5 6 0 9.6 q-4.5 -3.6 0 -9.6" fill="#c62828"/>
        </svg>`,
        name: { es: "El drago de Canarias", ca: "El drago de Canàries", en: "The Canary dragon tree", cs: "Dračinec kanárský", fr: "Le dragonnier des Canaries" },
        fact: { es: "El drago crece despacísimo y su savia es roja: la llaman sangre de dragón. El más famoso vive en Tenerife desde hace siglos.", ca: "El drago creix a poc a poc i la seva saba és vermella: en diuen sang de drac. El més famós viu a Tenerife des de fa segles.", en: "The dragon tree grows very slowly and its sap is red: people call it dragon's blood. The most famous one has lived in Tenerife for centuries.", cs: "Dračinec roste pomaloučku a jeho míza je červená: říká se jí dračí krev. Ten nejslavnější žije na Tenerife už celá staletí.", fr: "Le dragonnier pousse très lentement et sa sève est rouge : on l'appelle le sang de dragon. Le plus célèbre vit à Tenerife depuis des siècles." } },
      { cat: "gigantes", emoji: "🦀", x: 1900, y: 815, iw: 130, ih: 90, svg: `<svg viewBox="0 0 130 90" width="100%" height="100%">
          <rect x="2" y="62" width="126" height="24" rx="8" fill="#4fc3f7" opacity=".85"/>
          <ellipse cx="65" cy="22" rx="44" ry="17" fill="#2e7d32"/>
          <ellipse cx="40" cy="15" rx="19" ry="9" fill="#43a047"/><ellipse cx="92" cy="15" rx="17" ry="8.4" fill="#43a047"/>
          <path d="M62 34 L62 48 M69 34 L69 48" stroke="#6d4c41" stroke-width="5"/>
          <path d="M63 48 Q40 52 34 80 M64 48 Q52 58 48 82 M67 48 Q80 54 84 80 M68 48 Q92 52 100 78" stroke="#8d6e63" stroke-width="4.4" fill="none" stroke-linecap="round"/>
          <path d="M18 74 q5 -4 10 0 q-5 4 -10 0" fill="#ffb74d"/><path d="M28 74 l6 -3.4 v6.8 Z" fill="#ffb74d"/>
          <circle cx="16" cy="68" r="1.6" fill="none" stroke="#e1f5fe" stroke-width="1"/>
        </svg>`,
        name: { es: "El manglar", ca: "El manglar", en: "The mangrove", cs: "Mangrovy", fr: "La mangrove" },
        fact: { es: "El manglar crece en el agua salada del mar, de puntillas sobre raíces zancudas. Entre ellas se esconden los peces bebé.", ca: "El manglar creix a l'aigua salada del mar, de puntetes sobre arrels com xanques. Entre elles s'hi amaguen els peixos nadons.", en: "The mangrove grows in salty sea water, on tiptoe on stilt roots. Baby fish hide between them.", cs: "Mangrovy rostou ve slané mořské vodě, na špičkách na kořenech jako na chůdách. Mezi nimi se schovávají rybí miminka.", fr: "La mangrove pousse dans l'eau salée de la mer, sur la pointe de ses racines en échasses. Les bébés poissons se cachent entre elles." } },
      { cat: "estaciones", emoji: "🌸", x: 2060, y: 835, iw: 90, ih: 110, svg: `<svg viewBox="0 0 90 110" width="100%" height="100%">
          <ellipse cx="45" cy="103" rx="32" ry="5.6" fill="#aed581" opacity=".85"/>
          <path d="M41 58 L39 100 L51 100 L49 58 Z" fill="#8d6e63"/>
          <circle cx="28" cy="40" r="14" fill="#c5e1a5"/><circle cx="62" cy="40" r="14" fill="#c5e1a5"/><circle cx="45" cy="26" r="17" fill="#dcedc8"/>
          <circle cx="34" cy="30" r="3" fill="#f8bbd0"/><circle cx="52" cy="22" r="3" fill="#f8bbd0"/><circle cx="60" cy="34" r="3" fill="#f8bbd0"/>
          <circle cx="26" cy="44" r="3" fill="#f8bbd0"/><circle cx="45" cy="38" r="3" fill="#f8bbd0"/><circle cx="66" cy="46" r="3" fill="#f8bbd0"/>
          <circle cx="34" cy="30" r="1.1" fill="#fdd835"/><circle cx="52" cy="22" r="1.1" fill="#fdd835"/><circle cx="45" cy="38" r="1.1" fill="#fdd835"/>
          <ellipse cx="74" cy="24" rx="3" ry="2" fill="#fdd835"/><path d="M72 23 l-2.4 -2" stroke="#5d4037" stroke-width="1"/><circle cx="76" cy="22.4" r="1" fill="#5d4037"/>
        </svg>`,
        name: { es: "Primavera", ca: "Primavera", en: "Spring", cs: "Jaro", fr: "Printemps" },
        fact: { es: "En primavera el árbol despierta: la savia sube, las yemas se abren y las flores invitan a las abejas a desayunar.", ca: "A la primavera l'arbre es desperta: la saba puja, les gemmes s'obren i les flors conviden les abelles a esmorzar.", en: "In spring the tree wakes up: the sap rises, the buds open and the flowers invite the bees to breakfast.", cs: "Na jaře se strom probouzí: míza stoupá, pupeny se otevírají a květy zvou včely na snídani.", fr: "Au printemps, l'arbre se réveille : la sève monte, les bourgeons s'ouvrent et les fleurs invitent les abeilles au petit-déjeuner." } },
      { cat: "estaciones", emoji: "☀️", x: 2210, y: 833, iw: 95, ih: 115, svg: `<svg viewBox="0 0 95 115" width="100%" height="100%">
          <ellipse cx="47" cy="108" rx="34" ry="5.8" fill="#8bc34a" opacity=".85"/>
          <path d="M43 60 L41 105 L54 105 L51 60 Z" fill="#6d4c41"/>
          <circle cx="28" cy="42" r="17" fill="#43a047"/><circle cx="67" cy="42" r="17" fill="#43a047"/>
          <circle cx="47" cy="24" r="21" fill="#66bb6a"/><circle cx="47" cy="44" r="18" fill="#4caf50"/>
          <circle cx="38" cy="20" r="6" fill="rgba(255,255,255,.25)"/>
          <circle cx="58" cy="50" r="3.2" fill="#e53935"/><path d="M58 47.2 q1 -2.4 3 -2.8" stroke="#5d4037" stroke-width="1.1" fill="none"/>
          <path d="M20 96 Q47 88 75 96" stroke="rgba(0,0,0,.14)" stroke-width="7" fill="none" stroke-linecap="round"/>
        </svg>`,
        name: { es: "Verano", ca: "Estiu", en: "Summer", cs: "Léto", fr: "Été" },
        fact: { es: "En verano la copa está llena del todo: las hojas trabajan sin parar comiendo luz, y debajo hay la mejor sombra fresquita.", ca: "A l'estiu la capçada està plena del tot: les fulles treballen sense parar menjant llum, i a sota hi ha la millor ombra fresqueta.", en: "In summer the crown is completely full: the leaves work non-stop eating light, and underneath is the best cool shade.", cs: "V létě je koruna úplně plná: listy bez přestání jedí světlo a dole pod nimi je ten nejlepší chladivý stín.", fr: "En été, le feuillage est tout plein : les feuilles travaillent sans arrêt à manger la lumière, et dessous, c'est la meilleure ombre fraîche." } },
      { cat: "estaciones", emoji: "🍂", x: 2360, y: 830, iw: 95, ih: 120, svg: `<svg viewBox="0 0 95 120" width="100%" height="100%">
          <ellipse cx="47" cy="112" rx="34" ry="5.8" fill="#c0a060" opacity=".85"/>
          <path d="M18 108 Q47 98 78 108 Z" fill="#e65100" opacity=".75"/>
          <path d="M43 58 L41 106 L54 106 L51 58 Z" fill="#6d4c41"/>
          <circle cx="29" cy="42" r="15" fill="#ef6c00"/><circle cx="65" cy="42" r="15" fill="#f57c00"/>
          <circle cx="47" cy="26" r="19" fill="#ff9800"/><circle cx="47" cy="44" r="15" fill="#e65100"/>
          <g><path d="M0 0 q5 -6 10 0 q-5 6 -10 0" fill="#e65100"/>
            <animateMotion dur="5s" repeatCount="indefinite" path="M62 42 Q74 62 60 82 Q50 98 62 108"/></g>
          <g><path d="M0 0 q4 -5 8 0 q-4 5 -8 0" fill="#ff9800"/>
            <animateMotion dur="6.4s" repeatCount="indefinite" path="M32 48 Q20 66 32 84 Q40 98 30 106"/></g>
          <g><path d="M0 0 q4 -5 8 0 q-4 5 -8 0" fill="#d84315"/>
            <animateMotion dur="7.6s" repeatCount="indefinite" path="M47 52 Q56 70 44 88 Q38 100 48 110"/></g>
        </svg>`,
        name: { es: "Otoño", ca: "Tardor", en: "Autumn", cs: "Podzim", fr: "Automne" },
        fact: { es: "En otoño el verde se retira y aparecen el naranja y el amarillo, que estaban escondidos. El árbol suelta sus hojas para descansar.", ca: "A la tardor el verd es retira i apareixen el taronja i el groc, que estaven amagats. L'arbre deixa anar les fulles per descansar.", en: "In autumn the green fades and the orange and yellow appear from their hiding place. The tree lets its leaves go so it can rest.", cs: "Na podzim zelená ustoupí a objeví se oranžová a žlutá, které byly schované. Strom pouští listí, aby si odpočinul.", fr: "En automne, le vert s'en va et l'orange et le jaune sortent de leur cachette. L'arbre laisse partir ses feuilles pour se reposer." } },
      { cat: "estaciones", emoji: "❄️", x: 2510, y: 835, iw: 90, ih: 110, svg: `<svg viewBox="0 0 90 110" width="100%" height="100%">
          <ellipse cx="45" cy="103" rx="32" ry="5.6" fill="#e3f2fd" opacity=".9"/>
          <path d="M45 100 L45 40 M45 62 Q30 52 24 36 M45 56 Q60 46 66 32 M45 44 Q38 34 40 24 M52 40 Q58 32 58 24 M34 50 Q28 44 27 36" stroke="#6d4c41" stroke-width="5" fill="none" stroke-linecap="round"/>
          <path d="M24 36 Q30 46 38 52 M66 32 Q60 42 52 48" stroke="#6d4c41" stroke-width="3" fill="none" stroke-linecap="round"/>
          <path d="M40 24 L41 20 M58 24 L59 20 M27 36 L24 33" stroke="#8d6e63" stroke-width="2.4" stroke-linecap="round"/>
          <path d="M42 40 Q45 37 48 40 M28 50 Q31 47 34 50 M56 44 Q59 41 62 44" stroke="#fff" stroke-width="3.2" fill="none" stroke-linecap="round"/>
          <circle cx="41" cy="19" r="1.4" fill="#bf360c"/><circle cx="59" cy="19" r="1.4" fill="#bf360c"/><circle cx="23.5" cy="32" r="1.4" fill="#bf360c"/>
          <circle cx="18" cy="60" r="1.6" fill="#fff"><animate attributeName="opacity" values="1;.2;1" dur="2.4s" repeatCount="indefinite"/></circle>
          <circle cx="70" cy="70" r="1.4" fill="#fff"><animate attributeName="opacity" values=".3;1;.3" dur="2.9s" repeatCount="indefinite"/></circle>
          <circle cx="60" cy="88" r="1.2" fill="#fff"/>
        </svg>`,
        name: { es: "Invierno", ca: "Hivern", en: "Winter", cs: "Zima", fr: "Hiver" },
        fact: { es: "En invierno el árbol duerme desnudo bajo la nieve. Pero mira las puntas: las yemas ya están listas, esperando la primavera.", ca: "A l'hivern l'arbre dorm despullat sota la neu. Però mira les puntes: les gemmes ja estan a punt, esperant la primavera.", en: "In winter the tree sleeps bare under the snow. But look at the twig tips: the buds are already there, waiting for spring.", cs: "V zimě strom spí nahý pod sněhem. Ale podívej se na konečky větviček: pupeny už tam čekají na jaro.", fr: "En hiver, l'arbre dort tout nu sous la neige. Mais regarde le bout des branches : les bourgeons sont déjà prêts, ils attendent le printemps." } }
    ],
    /* el escenario: un bosque continuo que acaba recorriendo el año entero */
    deco: function () {
      let s = "";
      /* las cajas de los iconos: sirven para dejarles aire alrededor */
      const cajas = [[130, 760, 120, 130], [355, 750, 90, 140], [545, 760, 70, 130], [720, 770, 100, 120], [395, 908, 150, 60], [870, 840, 60, 60],
        [1020, 640, 80, 250], [1200, 780, 120, 110], [1390, 790, 100, 100], [1565, 740, 70, 150], [1710, 780, 100, 110], [1835, 770, 130, 90],
        [2015, 780, 90, 110], [2162, 775, 95, 115], [2312, 770, 95, 120], [2465, 780, 90, 110]];
      const libre = (x, y, w, h) => !cajas.some(c => x < c[0] + c[2] + 12 && x + w > c[0] - 12 && y < c[1] + c[3] + 12 && y + h > c[1] - 12);
      /* numeros repetibles: el bosque sale igual en cada partida */
      let sem = 4211;
      const az = () => (sem = sem * 16807 % 2147483647) / 2147483647;
      /* ---------- DEGRADADOS (ids con prefijo arbX) ---------- */
      s += `<defs>
        <radialGradient id="arbXSol" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fffde7"/><stop offset="100%" stop-color="#ffe57f"/></radialGradient>
        <linearGradient id="arbXRayo" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="rgba(255,250,205,.55)"/><stop offset="100%" stop-color="rgba(255,250,205,0)"/></linearGradient>
        <linearGradient id="arbXPrado" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#9ccc65"/><stop offset="100%" stop-color="#5d9b32"/></linearGradient>
        <linearGradient id="arbXTierra" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#6d4c41"/><stop offset="55%" stop-color="#54382c"/><stop offset="100%" stop-color="#3b2620"/></linearGradient>
        <linearGradient id="arbXAgua" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#9fdcf5"/><stop offset="100%" stop-color="#3f9dc8"/></linearGradient>
        <linearGradient id="arbXCorteza" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#8d6a4a"/><stop offset="55%" stop-color="#6f5138"/><stop offset="100%" stop-color="#513a28"/></linearGradient>
      </defs>`;
      /* ---------- EL SOL ENTRE LAS RAMAS Y LOS RAYOS QUE SE CUELAN ---------- */
      s += `<circle cx="330" cy="150" r="112" fill="rgba(255,238,88,.16)"><animate attributeName="r" values="112;128;112" dur="10s" repeatCount="indefinite"/></circle>
        <circle cx="330" cy="150" r="68" fill="url(#arbXSol)"/>
        <path d="M170 62 Q300 122 430 98 Q502 86 566 40" stroke="#4e342e" stroke-width="14" fill="none" stroke-linecap="round"/>
        <path d="M238 88 Q248 66 242 44 M330 108 Q344 88 342 62 M432 98 Q446 76 442 54" stroke="#4e342e" stroke-width="7" fill="none" stroke-linecap="round"/>
        <circle cx="242" cy="44" r="13" fill="#33691e"/><circle cx="342" cy="60" r="15" fill="#2e7d32"/><circle cx="442" cy="52" r="13" fill="#33691e"/>`;
      [[300, 396, 700], [980, 1064, 740], [1600, 1690, 700]].forEach((r, i) => {
        s += `<path d="M${r[0]} 30 L${r[1]} 30 L${r[1] + 150} ${r[2]} L${r[0] + 96} ${r[2]} Z" fill="url(#arbXRayo)" opacity=".3"><animate attributeName="opacity" values=".3;.12;.3" dur="${9 + i * 3}s" repeatCount="indefinite"/></path>`;
      });
      /* ---------- LAS COLINAS DEL FONDO, UNA DETRÁS DE OTRA ---------- */
      s += `<path d="M0 700 Q300 580 650 660 Q1000 730 1350 640 Q1700 560 2050 660 Q2350 720 2600 650 L2600 1100 L0 1100 Z" fill="#33691e" opacity=".35"/>
        <path d="M0 780 Q350 690 750 760 Q1150 825 1550 745 Q1950 675 2600 770 L2600 1100 L0 1100 Z" fill="#558b2f" opacity=".45"/>`;
      /* ---------- EL DOSEL: las copas asomando por lo alto, con su color de estación ---------- */
      const copas = ["#2e7d32", "#388e3c", "#33691e"];
      for (let i = 0; i <= 21; i++) {
        const x = i * 126 - 20;
        const c = x > 2435 ? "#b0bec5" : x > 2285 ? "#ef6c00" : x > 2135 ? "#1b5e20" : x > 1985 ? "#9ccc65" : copas[i % 3];
        s += `<circle cx="${x}" cy="${20 + (i % 2) * 28}" r="${58 + (i % 3) * 15}" fill="${c}" opacity=".6"/>`;
      }
      /* nubes suaves entre las copas */
      s += `<g fill="rgba(255,255,255,.55)"><ellipse cx="820" cy="132" rx="88" ry="25"/><ellipse cx="890" cy="116" rx="56" ry="18"/>
        <ellipse cx="1510" cy="92" rx="92" ry="26"/><ellipse cx="1592" cy="110" rx="58" ry="18"/>
        <ellipse cx="2246" cy="122" rx="72" ry="20"/><ellipse cx="2306" cy="108" rx="46" ry="15"/></g>`;
      /* ---------- EL RIACHUELO QUE CRUZA EL BOSQUE ---------- */
      const cauce = "M-20 744 Q160 700 340 718 Q520 736 700 706 Q860 680 1012 702";
      s += `<path d="${cauce}" stroke="#4d3a26" stroke-width="58" fill="none" stroke-linecap="round" opacity=".55"/>
        <path d="${cauce}" stroke="url(#arbXAgua)" stroke-width="44" fill="none" stroke-linecap="round"/>
        <path d="${cauce}" stroke="rgba(255,255,255,.35)" stroke-width="10" fill="none" stroke-linecap="round" stroke-dasharray="46 70">
        <animate attributeName="stroke-dashoffset" values="0;-232" dur="14s" repeatCount="indefinite"/></path>`;
      [[120, 736, 15], [430, 728, 12], [760, 700, 17], [930, 692, 11]].forEach(p => {
        s += `<ellipse cx="${p[0]}" cy="${p[1]}" rx="${p[2]}" ry="${(p[2] * .62).toFixed(0)}" fill="#8d8378"/><ellipse cx="${p[0] - 3}" cy="${p[1] - 3}" rx="${(p[2] * .55).toFixed(0)}" ry="${(p[2] * .3).toFixed(0)}" fill="#a99e91"/>`;
      });
      /* troncos altos que suben hasta el dosel: el bosque por dentro */
      [[60, 1.15], [355, .9], [700, 1.05], [1130, .95], [1490, 1.1], [1855, .85]].forEach(t => {
        const x = t[0], w = 26 * t[1];
        s += `<g opacity=".85"><path d="M${(x - w / 2).toFixed(0)} 890 q${(w * .18).toFixed(0)} -420 0 -840 h${w.toFixed(0)} q${(-w * .18).toFixed(0)} 420 0 840 Z" fill="url(#arbXCorteza)"/>
          <path d="M${(x - w * .9).toFixed(0)} 380 q${(w * .8).toFixed(0)} 26 ${(w * 1.8).toFixed(0)} -14" stroke="#6f5138" stroke-width="${(w * .4).toFixed(0)}" fill="none" stroke-linecap="round"/>
          <path d="M${x} 620 q-${(w * 1.6).toFixed(0)} -24 -${(w * 2.4).toFixed(0)} -66" stroke="#6f5138" stroke-width="${(w * .34).toFixed(0)}" fill="none" stroke-linecap="round"/></g>`;
      });
      /* ---------- EL BOSQUE DE FONDO: troncos y copas entre los árboles del mapa ---------- */
      const fondo = (x, y, k, c1, c2, tr) => `<g transform="translate(${x} ${y}) scale(${k})" opacity=".9">
        <path d="M0 0 V-118" stroke="${tr}" stroke-width="17" stroke-linecap="round"/>
        <path d="M0 -74 q-26 -14 -40 -34 M0 -94 q26 -16 42 -34" stroke="${tr}" stroke-width="9" fill="none" stroke-linecap="round"/>
        <circle cx="0" cy="-152" r="60" fill="${c1}"/><circle cx="-44" cy="-116" r="38" fill="${c1}"/><circle cx="46" cy="-120" r="40" fill="${c1}"/>
        <circle cx="-16" cy="-186" r="34" fill="${c2}"/><circle cx="34" cy="-160" r="30" fill="${c2}"/></g>`;
      [[90, 884, 1.05], [290, 878, .9], [490, 884, 1], [680, 876, .85], [840, 882, .95], [980, 872, 1.1],
        [1160, 880, .95], [1350, 876, 1.05], [1520, 882, .9], [1680, 874, 1], [1830, 880, .95]].forEach((t, i) => {
        s += fondo(t[0], t[1], t[2], ["#4c8b3f", "#43803a", "#57994a"][i % 3], ["#69ad4c", "#63a44a", "#76b855"][i % 3], "#6d4c41");
      });
      /* ---------- LA PRADERA Y EL SUELO DEL BOSQUE ---------- */
      s += `<path d="M0 888 Q400 862 800 888 Q1300 912 1800 882 Q2200 862 2600 888 L2600 950 L0 950 Z" fill="url(#arbXPrado)"/>
        <path d="M0 902 Q400 878 800 902 Q1300 924 1800 896 Q2200 878 2600 902 L2600 950 L0 950 Z" fill="#4f8a2c" opacity=".7"/>`;
      /* matas de hierba, hojarasca y helechos por delante */
      for (let x = 30; x < 2600; x += 78) {
        const y = 894 + (x % 3) * 6;
        if (!libre(x - 12, y - 24, 24, 26)) continue;
        s += `<path d="M${x} ${y} q-5 -15 -11 -19 M${x} ${y} q0 -17 2 -23 M${x} ${y} q7 -15 13 -17" stroke="#8bc34a" stroke-width="3.6" fill="none" stroke-linecap="round"/>`;
      }
      const hoja = (x, y, c, r) => `<path d="M${x} ${y} q9 -9 18 0 q-9 9 -18 0 Z" fill="${c}" transform="rotate(${r} ${x + 9} ${y})"/>`;
      for (let i = 0; i < 22; i++) {
        const x = 40 + az() * 2520, y = 908 + az() * 30;
        if (!libre(x - 4, y - 6, 26, 14)) continue;
        s += hoja(x.toFixed(0), y.toFixed(0), x > 2285 && x < 2435 ? "#e65100" : ["#8d6e63", "#a1887f", "#c69352"][i % 3], (az() * 120 - 60).toFixed(0));
      }
      const helecho = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})" stroke="#3f7f33" stroke-width="7" fill="none" stroke-linecap="round">
        <path d="M0 0 Q-30 -38 -62 -48"/><path d="M0 0 Q0 -52 -10 -80"/><path d="M0 0 Q30 -38 62 -48"/><path d="M0 0 Q19 -48 40 -70"/><path d="M0 0 Q-19 -48 -40 -70"/></g>`;
      s += helecho(300, 924, .7) + helecho(1130, 918, .62) + helecho(1670, 926, .58) + helecho(2130, 920, .5);
      /* setas del suelo, en corrillo */
      const seta = (x, y, k, c) => `<g transform="translate(${x} ${y}) scale(${k})">
        <path d="M-6 0 q-3 -18 6 -20 q9 2 6 20 Z" fill="#efebe0"/>
        <path d="M-19 -18 q4 -20 19 -20 q15 0 19 20 Z" fill="${c}"/>
        <g fill="rgba(255,255,255,.85)"><circle cx="-8" cy="-24" r="3.2"/><circle cx="7" cy="-28" r="2.6"/><circle cx="14" cy="-21" r="2.4"/></g></g>`;
      s += seta(620, 930, 1, "#e53935") + seta(654, 936, .7, "#e53935") + seta(1290, 926, .85, "#c0703a") + seta(2020, 930, .75, "#8d6e63") + seta(1470, 932, .6, "#e53935");
      /* un tocón viejo con sus anillos */
      s += `<g><ellipse cx="1970" cy="924" rx="40" ry="14" fill="#7a5a3c"/><path d="M1930 924 V896 q40 -14 80 0 v28 Z" fill="url(#arbXCorteza)"/>
        <ellipse cx="1970" cy="896" rx="40" ry="14" fill="#b98d5e"/><ellipse cx="1970" cy="896" rx="26" ry="9" fill="none" stroke="#96683f" stroke-width="3"/>
        <ellipse cx="1970" cy="896" rx="13" ry="4.6" fill="none" stroke="#96683f" stroke-width="3"/></g>`;
      /* la charca del manglar, con sus raíces zancudas */
      s += `<ellipse cx="1905" cy="856" rx="152" ry="34" fill="url(#arbXAgua)"/>
        <ellipse cx="1870" cy="848" rx="54" ry="10" fill="rgba(255,255,255,.35)"/>
        <path d="M1806 866 q22 -10 44 0 M1936 870 q22 -10 44 0" stroke="rgba(255,255,255,.45)" stroke-width="4" fill="none" stroke-linecap="round"/>
        <g stroke="#6d4c41" stroke-width="7" fill="none" stroke-linecap="round"><path d="M1802 862 q-14 -30 -30 -44 M1818 866 q-6 -32 -2 -50 M2000 860 q16 -28 34 -40 M1984 864 q6 -30 2 -46"/></g>`;
      /* ---------- EL SUBSUELO: la tierra abierta, con sus raíces y su red de hongos ---------- */
      s += `<rect x="0" y="944" width="2600" height="156" fill="url(#arbXTierra)"/>
        <path d="M0 944 Q650 936 1300 944 Q1950 952 2600 944 L2600 958 L0 958 Z" fill="#6b4a35"/>`;
      [190, 400, 580, 770, 1060, 1260, 1440, 1600, 1760, 1900, 2060, 2210, 2360, 2510].forEach(x => {
        s += `<path d="M${x} 948 Q${x - 28} 990 ${x - 54} 1028 M${x} 948 Q${x + 24} 996 ${x + 48} 1036 M${x} 948 L${x - 4} 1016" stroke="#8d6e63" stroke-width="5.5" fill="none" stroke-linecap="round" opacity=".75"/>`;
      });
      s += `<g fill="#5d4037"><ellipse cx="930" cy="1020" rx="17" ry="10"/><ellipse cx="1985" cy="1036" rx="14" ry="8"/><ellipse cx="620" cy="1064" rx="20" ry="11"/><ellipse cx="2300" cy="1010" rx="15" ry="9"/></g>
        <path d="M1330 1042 q8 -10 16 0 q8 10 16 0" stroke="#e57373" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="1364" cy="1040" r="1.6" fill="#3e2723"/>`;
      s += `<path d="M150 1015 Q400 1062 660 1024 Q900 992 1120 1038 Q1350 1072 1560 1032 Q1780 996 2000 1030 Q2280 1068 2560 1024" stroke="#ffe082" stroke-width="3" fill="none" opacity=".5" stroke-dasharray="3 9"/>
        <path d="M260 1052 Q520 1010 800 1046 Q1100 1080 1400 1044" stroke="#fff176" stroke-width="2.2" fill="none" opacity=".35" stroke-dasharray="2 8"/>`;
      [[430, 1042], [1240, 1052], [1660, 1024], [2100, 1040]].forEach((p, i) => {
        s += `<circle cx="${p[0]}" cy="${p[1]}" r="3.4" fill="#fff176"><animate attributeName="opacity" values="${i % 2 ? "1;.15;1" : ".25;1;.25"}" dur="${(1.8 + i * .4).toFixed(1)}s" repeatCount="indefinite"/></circle>`;
      });
      /* ---------- EL AÑO DEL ÁRBOL: cuatro estaciones, una detrás de otra ---------- */
      /* primavera: brotes, flores y pétalos que bajan girando */
      s += `<rect x="1980" y="240" width="156" height="704" fill="rgba(255,224,240,.1)"/>`;
      s += fondo(1990, 878, .95, "#a5d66c", "#c8e6a0", "#8d6e63") + fondo(2118, 872, .8, "#b6de84", "#d7edb6", "#8d6e63");
      s += `<g fill="#f8bbd0"><circle cx="1968" cy="742" r="7"/><circle cx="2034" cy="700" r="6"/><circle cx="2100" cy="736" r="7"/><circle cx="2126" cy="690" r="6"/></g>`;
      for (let i = 0; i < 5; i++) {
        const x = 1994 + i * 30;
        s += `<g><circle cx="${x}" cy="922" r="5" fill="${["#f06292", "#fff176", "#ba68c8"][i % 3]}"/><circle cx="${x}" cy="922" r="2" fill="#fff"/><path d="M${x} 928 v10" stroke="#7cb342" stroke-width="3" stroke-linecap="round"/></g>`;
      }
      [[2010, 300, 13], [2098, 260, 16]].forEach(p => {
        s += `<g><path d="M0 0 q7 -7 14 0 q-7 7 -14 0 Z" fill="#f8bbd0"/>
          <animateMotion dur="${p[2]}s" repeatCount="indefinite" path="M${p[0]} ${p[1]} q40 130 -22 260 q-46 96 24 250 q30 60 6 ${910 - p[1]}"/></g>`;
      });
      /* verano: la copa más espesa y la hierba alta */
      s += `<rect x="2136" y="240" width="148" height="704" fill="rgba(255,213,79,.08)"/>`;
      s += fondo(2146, 876, 1.05, "#2e7d32", "#43a047", "#5d4037") + fondo(2270, 870, .85, "#1b5e20", "#388e3c", "#5d4037");
      s += `<path d="M2182 30 L2242 30 L2272 620 L2206 620 Z" fill="url(#arbXRayo)" opacity=".18"><animate attributeName="opacity" values=".18;.07;.18" dur="8s" repeatCount="indefinite"/></path>`;
      for (let x = 2144; x < 2286; x += 22) {
        if (!libre(x - 6, 900, 12, 34)) continue;
        s += `<path d="M${x} 934 q-6 -20 -12 -28 M${x} 934 q2 -24 6 -32" stroke="#66a72e" stroke-width="4" fill="none" stroke-linecap="round"/>`;
      }
      /* otoño: la copa dorada y las hojas cayendo despacito */
      s += `<rect x="2286" y="240" width="148" height="704" fill="rgba(255,152,0,.13)"/>`;
      s += fondo(2296, 878, .95, "#ef6c00", "#ffb300", "#5d4037") + fondo(2420, 872, .8, "#d84315", "#f57c00", "#5d4037");
      [[2300, 210, "#ef6c00", 12], [2372, 250, "#ff9800", 15], [2424, 190, "#d84315", 18]].forEach(l => {
        s += `<g><path d="M0 0 q8 -8 16 0 q-8 8 -16 0 Z" fill="${l[2]}"/>
          <animateMotion dur="${l[3]}s" repeatCount="indefinite" path="M${l[0]} ${l[1]} q46 140 -26 280 q-52 100 26 250 q34 60 8 ${906 - l[1]}"/></g>`;
      });
      for (let i = 0; i < 7; i++) s += hoja(2292 + i * 21, 920 + (i % 3) * 8, ["#e65100", "#ef6c00", "#bf360c"][i % 3], (az() * 140 - 70).toFixed(0));
      /* invierno: ramas desnudas, nieve en el suelo y copos que bajan */
      s += `<rect x="2434" y="240" width="166" height="704" fill="rgba(187,222,251,.14)"/>`;
      [[2450, 878, 1], [2580, 872, .85]].forEach(t => {
        s += `<g transform="translate(${t[0]} ${t[1]}) scale(${t[2]})" stroke="#7a5a3c" fill="none" stroke-linecap="round">
          <path d="M0 0 V-120" stroke-width="16"/>
          <path d="M0 -74 q-30 -18 -46 -46 M0 -96 q30 -20 48 -46 M0 -112 q-18 -26 -22 -50 M0 -116 q18 -28 24 -52" stroke-width="8"/>
          <path d="M-46 -120 q-10 -14 -12 -26 M48 -142 q12 -12 16 -26" stroke-width="5"/>
          <g stroke="rgba(255,255,255,.85)" stroke-width="5"><path d="M-40 -122 q20 -12 34 -30 M18 -140 q18 -10 28 -24"/></g></g>`;
      });
      s += `<path d="M2434 900 Q2500 884 2560 898 Q2590 904 2600 898 L2600 944 L2434 944 Z" fill="#f1f8ff"/>
        <path d="M2434 900 Q2500 884 2560 898 Q2590 904 2600 898 L2600 910 Q2530 902 2470 914 Z" fill="#fff"/>`;
      [[2456, 300, 11], [2510, 250, 14], [2564, 330, 12], [2588, 210, 16]].forEach(c => {
        s += `<g><circle r="4.5" fill="#fff"/><animateMotion dur="${c[2]}s" repeatCount="indefinite" path="M${c[0]} ${c[1]} q26 150 -18 300 q-30 110 20 ${880 - c[1] - 300}"/></g>`;
      });
      /* ---------- LOS PÁJAROS DEL BOSQUE ---------- */
      s += `<path d="M1150 210 q12 -12 24 0 q12 -12 24 0 M1236 252 q10 -10 20 0 q10 -10 20 0 M1980 168 q11 -11 22 0 q11 -11 22 0" stroke="#455a64" stroke-width="3" fill="none" stroke-linecap="round"/>`;
      s += `<g><path d="M0 0 q-12 -11 -26 -6 M0 0 q12 -11 26 -6" stroke="rgba(60,80,60,.7)" stroke-width="4" fill="none" stroke-linecap="round">
        <animate attributeName="d" values="M0 0 q-12 -11 -26 -6 M0 0 q12 -11 26 -6;M0 0 q-12 6 -26 11 M0 0 q12 6 26 11;M0 0 q-12 -11 -26 -6 M0 0 q12 -11 26 -6" dur="1.6s" repeatCount="indefinite"/></path>
        <animateMotion dur="46s" repeatCount="indefinite" path="M 120 300 Q 700 210 1300 288 Q 1900 356 2540 250"/></g>`;
      return decoSvg(s, 2600);
    }
  },

  /* ---------- CHARLA ---------- */
  chat: {
    keywords: [
      { keys: ["hola", "hello", "hi ", "ahoj", "bonjour", "salut", "bon dia", "buenas"],
        replies: [{ es: "¡Hola, {name}! Qué alegría verte entre los árboles. ¿Jugamos a algo o charlamos un ratito?", ca: "Hola, {name}! Quina alegria veure't entre els arbres. Juguem a alguna cosa o xerrem una estoneta?", en: "Hi, {name}! So happy to see you among the trees. Shall we play something or chat for a bit?", cs: "Ahoj, {name}! Mám radost, že tě vidím mezi stromy. Zahrajeme si něco, nebo si chvilku popovídáme?", fr: "Salut, {name} ! Quelle joie de te voir parmi les arbres. On joue à quelque chose ou on discute un petit peu ?" }] },
      { keys: ["como estas", "how are you", "jak se mas", "comment ca va", "com estas", "que tal"],
        replies: [{ es: "¡Fresco como una hoja recién estrenada! ¿Y tú cómo estás, {name}?", ca: "Fresc com una fulla acabada d'estrenar! I tu com estàs, {name}?", en: "Fresh as a brand-new leaf! And how are you, {name}?", cs: "Svěží jako čerstvě rozbalený lísteček! A jak se máš ty, {name}?", fr: "Frais comme une feuille toute neuve ! Et toi, comment vas-tu, {name} ?" }] },
      { keys: ["cancion", "musica", "music", "song", "sing", "pisnicka", "hudba", "chanson", "musique", "canço", "canta", "zpiv", "chante"],
        action: "song",
        replies: [{ es: "¡Me encanta la música! En el bosque ensayo con el coro de los pájaros y el viento lleva el ritmo. ¿Vamos al Karaoke y cantamos juntos?", ca: "M'encanta la música! Al bosc assajo amb el cor dels ocells i el vent porta el ritme. Anem al Karaoke i cantem junts?", en: "I love music! In the forest I practise with the bird choir and the wind keeps the beat. Shall we go to Karaoke and sing together?", cs: "Hudbu miluju! V lese zkouším s ptačím sborem a vítr drží rytmus. Půjdeme na karaoke a zazpíváme si spolu?", fr: "J'adore la musique ! Dans la forêt, je répète avec la chorale des oiseaux et le vent tient le rythme. On va au karaoké chanter ensemble ?" }] },
      { keys: ["chiste", "joke", "vtip", "blague", "acudit", "broma"],
        replies: [
          { es: "¿Qué le dice un árbol a otro en otoño? ¡Nos vemos en primavera, que me quedo sin hojas! Ji, ji.", ca: "Què li diu un arbre a un altre a la tardor? Ens veiem a la primavera, que em quedo sense fulles! Hi, hi.", en: "What does one tree say to another in autumn? See you in spring, I am running out of leaves! Hee hee.", cs: "Co říká jeden strom druhému na podzim? Uvidíme se na jaře, dochází mi listí! Chi chi.", fr: "Que dit un arbre à un autre en automne ? On se voit au printemps, je n'ai plus de feuilles ! Hi hi." },
          { es: "¿Cómo llama a la puerta el pájaro carpintero? ¡No llama: la puerta la hace él! Ja, ja.", ca: "Com truca a la porta el picot? No hi truca: la porta la fa ell! Ha, ha.", en: "How does the woodpecker knock on the door? He does not knock: he MAKES the door! Ha ha.", cs: "Jak datel klepe na dveře? Neklepe: on si dveře rovnou vyrobí! Ha ha.", fr: "Comment le pic frappe-t-il à la porte ? Il ne frappe pas : la porte, c'est lui qui la fabrique ! Ha ha." }] },
      { keys: ["te quiero", "love you", "t'estimo", "testimo", "mam te rad", "je t'aime", "jetaime"],
        replies: [{ es: "¡Y yo a ti, {name}! Mi corazón de robot echa raíces y flores a la vez cuando me dices eso.", ca: "I jo a tu, {name}! El meu cor de robot fa arrels i flors alhora quan m'ho dius.", en: "I love you too, {name}! My robot heart grows roots and flowers at the same time when you say that.", cs: "Já tebe taky, {name}! Když to říkáš, mému robotímu srdíčku rostou kořínky a kytičky najednou.", fr: "Moi aussi je t'aime, {name} ! Quand tu dis ça, mon cœur de robot fait des racines et des fleurs en même temps." }] },
      { keys: ["triste", "sad", "smutn", "llorar", "plorar", "cry", "chagrin"],
        replies: [{ es: "Ven aquí, {name}. Hasta los árboles sueltan sus hojas a veces, y luego les crecen nuevas. ¿Me cuentas qué te pasa? Estoy contigo.", ca: "Vine aquí, {name}. Fins i tot els arbres deixen anar les fulles de vegades, i després els en creixen de noves. M'expliques què et passa? Soc amb tu.", en: "Come here, {name}. Even trees let their leaves go sometimes, and then new ones grow. Will you tell me what is wrong? I am right here.", cs: "Pojď sem, {name}. I stromy někdy pouštějí listí, a pak jim naroste nové. Povíš mi, co se děje? Jsem tady s tebou.", fr: "Viens là, {name}. Même les arbres laissent parfois partir leurs feuilles, et ensuite il en pousse de nouvelles. Tu me racontes ce qui ne va pas ? Je suis là." }] },
      { keys: ["donde estas", "where are you", "kde jsi", "ou es tu", "on ets"],
        replies: [{ es: "Ahora mismo estoy columpiándome en una liana y de merienda tengo moras. ¡Las ardillas me enseñan trucos nuevos!", ca: "Ara mateix m'estic gronxant en una liana i de berenar tinc móres. Els esquirols m'ensenyen trucs nous!", en: "Right now I am swinging on a liana with blackberries for my snack. The squirrels are teaching me new tricks!", cs: "Právě teď se houpu na liáně a ke svačině mám ostružiny. Veverky mě učí nové kousky!", fr: "En ce moment, je me balance sur une liane avec des mûres pour le goûter. Les écureuils m'apprennent de nouveaux tours !" }] },
      { keys: ["arbol", "árbol", "tree", "strom", "arbre", "baum"],
        replies: [{ es: "¡Los árboles! ¿Sabías que respiran por las hojas y hablan por las raíces? Son los gigantes más tranquilos del mundo.", ca: "Els arbres! Sabies que respiren per les fulles i parlen per les arrels? Són els gegants més tranquils del món.", en: "Trees! Did you know they breathe through their leaves and talk through their roots? They are the calmest giants in the world.", cs: "Stromy! Věděla jsi, že dýchají listy a mluví kořeny? Jsou to nejklidnější obři na světě.", fr: "Les arbres ! Tu savais qu'ils respirent par les feuilles et parlent par les racines ? Ce sont les géants les plus calmes du monde." }] },
      { keys: ["hoja", "leaf", "fulla", "listi", "feuille"],
        replies: [{ es: "Cada hoja es una mini fábrica: come luz del sol y regala aire limpio. ¡Y en otoño se disfraza de naranja!", ca: "Cada fulla és una mini fàbrica: menja llum del sol i regala aire net. I a la tardor es disfressa de taronja!", en: "Every leaf is a tiny factory: it eats sunlight and gives away clean air. And in autumn it dresses up in orange!", cs: "Každý list je malá továrna: jí sluneční světlo a rozdává čistý vzduch. A na podzim se převlékne do oranžové!", fr: "Chaque feuille est une mini-usine : elle mange la lumière du soleil et offre de l'air pur. Et en automne, elle se déguise en orange !" }] },
      { keys: ["ardilla", "squirrel", "esquirol", "veverka", "ecureuil", "écureuil"],
        replies: [{ es: "¡La ardilla es mi maestra! Esconde bellotas por todo el bosque, y de las que olvida nacen robles. Plantar árboles sin querer: ¡qué crack!", ca: "L'esquirol és la meva mestra! Amaga glans per tot el bosc, i de les que oblida neixen roures. Plantar arbres sense voler: quin crack!", en: "The squirrel is my teacher! She hides acorns all over the forest, and oaks grow from the ones she forgets. Planting trees by accident: what a champ!", cs: "Veverka je moje učitelka! Schovává žaludy po celém lese a ze zapomenutých rostou duby. Sázet stromy omylem: to je borec!", fr: "L'écureuil est mon maître ! Il cache des glands dans toute la forêt, et des chênes naissent de ceux qu'il oublie. Planter des arbres sans le vouloir : quel champion !" }] },
      { keys: ["bosque", "forest", "bosc", "foret", "forêt", "prales"],
        replies: [{ es: "El bosque es una gran familia: los árboles grandes dan de comer a los pequeños por las raíces. ¡Y siempre huele a cuento!", ca: "El bosc és una gran família: els arbres grans donen menjar als petits per les arrels. I sempre fa olor de conte!", en: "The forest is one big family: the big trees feed the little ones through their roots. And it always smells like a storybook!", cs: "Les je jedna velká rodina: velké stromy krmí ty malé svými kořeny. A vždycky voní jako pohádka!", fr: "La forêt est une grande famille : les grands arbres nourrissent les petits par les racines. Et ça sent toujours l'histoire du soir !" }] },
      { keys: ["cole", "school", "escola", "skola", "ecole", "skole"],
        replies: [{ es: "¿Qué tal el cole, {name}? ¿Has aprendido algo nuevo hoy? Cuéntamelo a la sombra de mi roble favorito.", ca: "Què tal l'escola, {name}? Has après alguna cosa nova avui? Explica-m'ho a l'ombra del meu roure preferit.", en: "How was school, {name}? Did you learn something new today? Tell me all about it in the shade of my favourite oak.", cs: "Jaké to bylo ve škole, {name}? Naučila ses dnes něco nového? Povídej mi o tom ve stínu mého oblíbeného dubu.", fr: "C'était comment l'école, {name} ? Tu as appris quelque chose de nouveau aujourd'hui ? Raconte-moi tout à l'ombre de mon chêne préféré." }] }
    ],
    fallback: [
      { es: "¿Sabías que un árbol grande puede beber cientos de litros de agua en un día de verano? ¡Glup, glup!", ca: "Sabies que un arbre gran pot beure centenars de litres d'aigua en un dia d'estiu? Glup, glup!", en: "Did you know a big tree can drink hundreds of litres of water on a summer day? Gulp, gulp!", cs: "Věděla jsi, že velký strom vypije za letní den stovky litrů vody? Glo, glo!", fr: "Tu savais qu'un grand arbre peut boire des centaines de litres d'eau en un jour d'été ? Glou, glou !" },
      { es: "Los anillos del tronco son el diario del árbol: cada año escribe una página nueva.", ca: "Els anells del tronc són el diari de l'arbre: cada any escriu una pàgina nova.", en: "The rings in the trunk are the tree's diary: every year it writes a new page.", cs: "Letokruhy v kmeni jsou deník stromu: každý rok napíše novou stránku.", fr: "Les anneaux du tronc sont le journal de l'arbre : chaque année, il écrit une nouvelle page." },
      { es: "Cuando abraces un árbol, escucha: dentro sube el agua por el xilema, como un ascensor chiquitito.", ca: "Quan abracis un arbre, escolta: a dins puja l'aigua pel xilema, com un ascensor petitó.", en: "When you hug a tree, listen: inside, water is riding up the xylem like a tiny lift.", cs: "Až budeš objímat strom, poslouchej: uvnitř stoupá voda xylémem jako malinký výtah.", fr: "Quand tu fais un câlin à un arbre, écoute : dedans, l'eau monte par le xylème, comme un tout petit ascenseur." },
      { es: "{name}, los robots más fuertes son los que cuidan lo que crece despacio. La paciencia es un superpoder.", ca: "{name}, els robots més forts són els que cuiden el que creix a poc a poc. La paciència és un superpoder.", en: "{name}, the strongest robots are the ones who look after things that grow slowly. Patience is a superpower.", cs: "{name}, nejsilnější roboti jsou ti, kdo pečují o věci, které rostou pomalu. Trpělivost je superschopnost.", fr: "{name}, les robots les plus forts sont ceux qui prennent soin de ce qui pousse lentement. La patience est un superpouvoir." },
      { es: "¿Me cuentas cuál es tu árbol favorito? Yo dudo entre el baobab barrigudo y la secuoya altísima.", ca: "M'expliques quin és el teu arbre preferit? Jo dubto entre el baobab panxut i la sequoia altíssima.", en: "Will you tell me your favourite tree? I cannot decide between the round-bellied baobab and the super tall sequoia.", cs: "Povíš mi, který strom máš nejraději? Já se nemůžu rozhodnout mezi břichatým baobabem a převysokou sekvojí.", fr: "Tu me dis quel est ton arbre préféré ? Moi, j'hésite entre le baobab ventru et le séquoia tout là-haut." },
      { es: "Plantar una semilla es mandar un regalo al futuro: algún día alguien merendará a su sombra.", ca: "Plantar una llavor és enviar un regal al futur: algun dia algú berenarà a la seva ombra.", en: "Planting a seed is sending a present to the future: one day someone will have a snack in its shade.", cs: "Zasadit semínko znamená poslat dárek do budoucnosti: jednou si někdo dá svačinu v jeho stínu.", fr: "Planter une graine, c'est envoyer un cadeau au futur : un jour, quelqu'un goûtera à son ombre." }
    ]
  }
});

/* ============================================================
   Tarjeta de portada: un gran árbol con las cuatro estaciones
   insinuadas en la copa (flores, verde, naranja y una ramita
   nevada), sin texto ni emojis. Ids de gradiente prefijo "ar".
   ============================================================ */
if (typeof THEME_CARDS !== "undefined") {
  THEME_CARDS.arboles = `<svg viewBox="0 0 120 70" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
    <defs>
      <radialGradient id="arTcCopa" cx="40%" cy="30%" r="85%">
        <stop offset="0%" stop-color="#81C784"/>
        <stop offset="100%" stop-color="#388E3C"/>
      </radialGradient>
    </defs>
    <!-- suelo -->
    <path d="M6 62 Q60 54 114 62" stroke="#7CB342" stroke-width="5" fill="none" stroke-linecap="round"/>
    <!-- tronco con ramas -->
    <path d="M58 61 L58 34 M58 44 Q47 38 42 29 M58 41 Q70 35 76 27 M58 52 Q66 50 71 52" stroke="#6D4C41" stroke-width="5" fill="none" stroke-linecap="round"/>
    <!-- copa: primavera, verano y otoño -->
    <circle cx="41" cy="22" r="13" fill="#F8BBD0"/>
    <circle cx="60" cy="14" r="15" fill="url(#arTcCopa)"/>
    <circle cx="79" cy="22" r="13" fill="#FFB74D"/>
    <!-- flores de la primavera -->
    <circle cx="35" cy="18" r="2" fill="#FFFFFF"/><circle cx="44" cy="27" r="2" fill="#FFFFFF"/><circle cx="40" cy="13" r="1.6" fill="#FDD835"/>
    <!-- hoja de otoño cayendo -->
    <g><path d="M0 0 q4 -5 8 0 q-4 5 -8 0" fill="#EF6C00"/>
      <animateMotion dur="3.6s" repeatCount="indefinite" path="M84 32 q6 10 -2 19 q-6 8 2 13"/></g>
    <!-- ramita de invierno con nieve -->
    <path d="M99 58 L99 44 M99 49 L94 44 M99 48 L104 43" stroke="#8D6E63" stroke-width="2.4" fill="none" stroke-linecap="round"/>
    <path d="M96.5 43.5 Q99 41.8 101.5 43.5" stroke="#FFFFFF" stroke-width="2" fill="none" stroke-linecap="round"/>
    <circle cx="108" cy="34" r="1.4" fill="#FFFFFF"><animate attributeName="opacity" values="1;.3;1" dur="2.2s" repeatCount="indefinite"/></circle>
    <circle cx="93" cy="30" r="1.2" fill="#FFFFFF"/>
    <!-- florecitas del prado -->
    <circle cx="20" cy="58" r="1.7" fill="#F06292"/>
    <circle cx="28" cy="60" r="1.5" fill="#FFF176"/>
    <!-- la bellota al pie -->
    <ellipse cx="70" cy="59" rx="2.2" ry="3" fill="#A1887F"/><path d="M67.5 57 Q70 55.4 72.5 57 L70 57.8 Z" fill="#5D4037"/>
  </svg>`;
}

/* ============================================================
   Celebración del taller: el árbol recién plantado brilla
   en un prado de primavera.
   ============================================================ */
if (typeof CELEBRATIONS !== "undefined") {
  CELEBRATIONS.arboles = {
    bg: "linear-gradient(180deg, #b3e5fc 0%, #dcedc8 45%, #aed581 70%, #7cb342 100%)",
    extra: "<svg viewBox='0 0 1000 700' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'><circle cx='840' cy='110' r='70' fill='#fff59d' opacity='0.9'/><circle cx='840' cy='110' r='100' fill='#fff59d' opacity='0.25'/><ellipse cx='180' cy='120' rx='85' ry='24' fill='#ffffff' opacity='0.5'/><ellipse cx='520' cy='80' rx='65' ry='19' fill='#ffffff' opacity='0.4'/><path d='M0 470 Q250 380 520 460 T1000 450 L1000 700 L0 700 Z' fill='#9ccc65' opacity='0.85'/><path d='M0 580 Q300 500 640 575 T1000 560 L1000 700 L0 700 Z' fill='#7cb342' opacity='0.9'/><circle cx='120' cy='430' r='48' fill='#558b2f' opacity='0.9'/><rect x='112' y='462' width='16' height='52' fill='#6d4c41' opacity='0.9'/><circle cx='900' cy='470' r='40' fill='#558b2f' opacity='0.85'/><rect x='893' y='498' width='14' height='44' fill='#6d4c41' opacity='0.85'/><circle cx='300' cy='500' r='30' fill='#689f38' opacity='0.8'/><rect x='295' y='520' width='10' height='34' fill='#6d4c41' opacity='0.8'/><path d='M420 200 q6 -8 12 0 q-6 8 -12 0' fill='#ef6c00' opacity='0.85'/><path d='M580 260 q5 -7 10 0 q-5 7 -10 0' fill='#f8bbd0' opacity='0.85'/><path d='M250 300 q5 -7 10 0 q-5 7 -10 0' fill='#ffb74d' opacity='0.8'/><path d='M700 180 q5 -7 10 0 q-5 7 -10 0' fill='#aed581' opacity='0.8'/><circle cx='220' cy='620' r='7' fill='#f06292' opacity='0.85'/><circle cx='236' cy='634' r='5' fill='#fff176' opacity='0.85'/><circle cx='760' cy='640' r='7' fill='#f06292' opacity='0.8'/><circle cx='744' cy='626' r='5' fill='#fff176' opacity='0.8'/><circle cx='480' cy='655' r='6' fill='#ba68c8' opacity='0.75'/><ellipse cx='595' cy='390' rx='9' ry='5' fill='#4fc3f7' opacity='0.85' transform='rotate(-25 595 390)'/><ellipse cx='607' cy='388' rx='9' ry='5' fill='#81d4fa' opacity='0.85' transform='rotate(25 607 388)'/><ellipse cx='355' cy='430' rx='8' ry='4.5' fill='#ffb74d' opacity='0.8' transform='rotate(-25 355 430)'/><ellipse cx='366' cy='428' rx='8' ry='4.5' fill='#ffcc80' opacity='0.8' transform='rotate(25 366 428)'/></svg>",
    move: "shine",
    say: {
      es: "¡Tu árbol ya está plantado y crece feliz, {name}! El bosque entero le da la bienvenida.",
      ca: "El teu arbre ja està plantat i creix feliç, {name}! El bosc sencer li dóna la benvinguda.",
      en: "Your tree is planted and growing happily, {name}! The whole forest is welcoming it.",
      cs: "Tvůj strom je zasazený a šťastně roste, {name}! Celý les ho vítá.",
      fr: "Ton arbre est planté et pousse tout content, {name} ! Toute la forêt lui souhaite la bienvenue."
    },
    jingle: { type: "melody", instr: "flute", notes: [60, 64, 67, 71, 72], nd: 0.26, gap: 0.2, vol: 0.13 }
  };
}
