"use strict";
/* ============================================================
   Contenido de OCÉANO (parte B): historias, canciones,
   traductor, mapa y charla.
   ============================================================ */

Object.assign(THEMES.oceano.content, {

  /* ---------- HISTORIAS ---------- */
  stories: [
    {
      id: "perla", emoji: "🦪", start: "n1",
      title: { es: "La perla perdida", ca: "La perla perduda", en: "The Lost Pearl", cs: "Ztracená perla", fr: "La perle perdue" },
      nodes: {
        n1: {
          text: { es: "Buceando por el arrecife, {name}, encontráis una perla blanca brillando en la arena. Un pececito os susurra: 'Es de la ostra Margarita... lleva días llorando'. ¿Qué hacemos?", ca: "Bussejant per l'escull, {name}, trobeu una perla blanca brillant a la sorra. Un peixet us xiuxiueja: 'És de l'ostra Margarida... fa dies que plora'. Què fem?", en: "Diving around the reef, {name}, you find a white pearl shining in the sand. A little fish whispers: 'It belongs to Margaret the oyster... she has been crying for days'. What do we do?", cs: "Při potápění u útesu, {name}, najdete v písku zářící bílou perlu. Rybička vám zašeptá: 'Patří ústřici Markétce... už několik dní pláče'. Co uděláme?", fr: "En plongeant autour du récif, {name}, vous trouvez une perle blanche qui brille dans le sable. Un petit poisson chuchote : « Elle est à Marguerite l'huître... elle pleure depuis des jours ». Qu'est-ce qu'on fait ?" },
          choices: [
            { t: { es: "Se la llevamos a Margarita ahora mismo", ca: "La portem a la Margarida ara mateix", en: "We take it to Margaret right now", cs: "Hned ji Markétce odneseme", fr: "On l'apporte à Marguerite tout de suite" }, go: "n2a" },
            { t: { es: "Preguntamos al pulpo detective primero", ca: "Preguntem al pop detectiu primer", en: "We ask the detective octopus first", cs: "Nejdřív se zeptáme chobotnice detektiva", fr: "On demande d'abord à la pieuvre détective" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "De camino, una corriente fuerte os empuja hacia el bosque de algas. Las algas cosquillean y entre ellas asoma un caballito de mar: 'Por aquí no, amigos, ¡seguidme por el atajo de los corales!'.", ca: "De camí, un corrent fort us empeny cap al bosc d'algues. Les algues fan pessigolles i entre elles treu el cap un cavallet de mar: 'Per aquí no, amics, seguiu-me per la drecera dels coralls!'.", en: "On the way, a strong current pushes you into the seaweed forest. The seaweed tickles, and a seahorse peeks out: 'Not this way, friends, follow me through the coral shortcut!'.", cs: "Cestou vás silný proud zatlačí do lesa řas. Řasy lechtají a mezi nimi vykoukne mořský koník: 'Tudy ne, kamarádi, za mnou korálovou zkratkou!'.", fr: "En chemin, un courant fort vous pousse dans la forêt d'algues. Les algues chatouillent et un hippocampe apparaît : « Pas par là, les amis, suivez-moi par le raccourci des coraux ! »." },
          choices: [{ t: { es: "¡Seguir al caballito!", ca: "Seguir el cavallet!", en: "Follow the seahorse!", cs: "Za koníkem!", fr: "Suivons l'hippocampe !" }, go: "n3" }]
        },
        n2b: {
          text: { es: "El pulpo detective mira la perla con su lupa: 'Ajá. Arenilla del banco norte, brillo de ostra llorona. ¡Es de Margarita, seguro! Os acompaño, que ocho brazos ayudan mucho'.", ca: "El pop detectiu mira la perla amb la seva lupa: 'Ajà. Sorreta del banc nord, brillantor d'ostra plorona. És de la Margarida, segur! Us acompanyo, que vuit braços ajuden molt'.", en: "The detective octopus examines the pearl with his magnifying glass: 'Aha. Sand from the north bank, shine of a weepy oyster. It is Margaret's for sure! I will come along, eight arms help a lot'.", cs: "Chobotnice detektiv si perlu prohlédne lupou: 'Aha. Písek ze severní mělčiny, lesk plačtivé ústřice. Určitě je Markétčina! Půjdu s vámi, osm ramen se hodí'.", fr: "La pieuvre détective examine la perle avec sa loupe : « Aha. Sable du banc nord, éclat d'huître pleureuse. C'est celle de Marguerite, c'est sûr ! Je vous accompagne, huit bras aident beaucoup »." },
          choices: [{ t: { es: "¡En marcha con el pulpo!", ca: "En marxa amb el pop!", en: "Off we go with the octopus!", cs: "Vyrážíme s chobotnicí!", fr: "En route avec la pieuvre !" }, go: "n3" }]
        },
        n3: {
          text: { es: "Encontráis a Margarita con la concha medio cerrada, moqueando burbujitas. Al ver la perla, se abre de golpe: '¡Mi perla! Llevo años puliéndola. ¿Cómo os lo puedo agradecer?'.", ca: "Trobeu la Margarida amb la petxina mig tancada, fent bombolletes de plors. En veure la perla, s'obre de cop: 'La meva perla! Fa anys que la poleixo. Com us ho puc agrair?'.", en: "You find Margaret with her shell half closed, sniffing little bubbles. When she sees the pearl she pops open: 'My pearl! I have been polishing it for years. How can I thank you?'.", cs: "Najdete Markétku s napůl zavřenou lasturou, jak posmrkává bublinky. Když uvidí perlu, otevře se dokořán: 'Moje perla! Leštím ji už roky. Jak vám můžu poděkovat?'.", fr: "Vous trouvez Marguerite avec sa coquille à moitié fermée, reniflant des petites bulles. En voyant la perle, elle s'ouvre d'un coup : « Ma perle ! Je la polis depuis des années. Comment vous remercier ? »." },
          choices: [
            { t: { es: "Con una fiesta de burbujas para todo el arrecife", ca: "Amb una festa de bombolles per a tot l'escull", en: "With a bubble party for the whole reef", cs: "Bublinkovou oslavou pro celý útes", fr: "Avec une fête de bulles pour tout le récif" }, go: "e1" },
            { t: { es: "No hace falta nada: verte contenta es el premio", ca: "No cal res: veure't contenta és el premi", en: "No need for anything: seeing you happy is the prize", cs: "Nic nepotřebujeme: vidět tě šťastnou je odměna", fr: "Pas besoin : te voir contente est la récompense" }, go: "e2" }
          ]
        },
        e1: {
          end: true,
          text: { es: "¡Fiesta en el arrecife! Los peces payaso hacen malabares, las medusas encienden sus lucecitas y el pulpo toca la batería con ocho baquetas. Margarita brilla en el centro con su perla. Devolver lo perdido, {name}, convierte a un desconocido en amigo.", ca: "Festa a l'escull! Els peixos pallasso fan malabars, les meduses encenen les seves llumetes i el pop toca la bateria amb vuit baquetes. La Margarida brilla al centre amb la seva perla. Tornar el que s'ha perdut, {name}, converteix un desconegut en amic.", en: "Party on the reef! The clownfish juggle, the jellyfish switch on their little lights and the octopus plays drums with eight drumsticks. Margaret shines in the middle with her pearl. Returning what is lost, {name}, turns a stranger into a friend.", cs: "Oslava na útesu! Klauni žonglují, medúzy rozsvítí svá světýlka a chobotnice bubnuje osmi paličkami. Markétka září uprostřed se svou perlou. Vrátit ztracené, {name}, promění cizího v kamaráda.", fr: "Fête sur le récif ! Les poissons-clowns jonglent, les méduses allument leurs petites lumières et la pieuvre joue de la batterie avec huit baguettes. Marguerite brille au centre avec sa perle. Rendre ce qui est perdu, {name}, transforme un inconnu en ami." }
        },
        e2: {
          end: true,
          text: { es: "Margarita sonríe y os cuenta un secreto: cada perla empieza siendo un granito de arena que molesta, y con paciencia se convierte en tesoro. 'Como los días difíciles', dice. Volvéis a casa con las manos vacías y el corazón llenísimo, {name}.", ca: "La Margarida somriu i us explica un secret: cada perla comença sent un granet de sorra que molesta, i amb paciència es converteix en tresor. 'Com els dies difícils', diu. Torneu a casa amb les mans buides i el cor pleníssim, {name}.", en: "Margaret smiles and tells you a secret: every pearl starts as an annoying little grain of sand, and with patience it becomes a treasure. 'Like hard days', she says. You go home with empty hands and a very full heart, {name}.", cs: "Markétka se usměje a prozradí vám tajemství: každá perla začíná jako otravné zrnko písku a s trpělivostí se promění v poklad. 'Jako těžké dny', říká. Vracíte se domů s prázdnýma rukama a plným srdcem, {name}.", fr: "Marguerite sourit et vous confie un secret : chaque perle commence comme un petit grain de sable gênant, et avec de la patience elle devient un trésor. « Comme les jours difficiles », dit-elle. Vous rentrez les mains vides et le cœur tout plein, {name}." }
        }
      }
    },
    {
      id: "pulpo", emoji: "🐙", start: "n1",
      title: { es: "El pulpo tímido", ca: "El pop tímid", en: "The Shy Octopus", cs: "Stydlivá chobotnice", fr: "La pieuvre timide" },
      nodes: {
        n1: {
          text: { es: "En la cueva del arrecife vive Octavio, un pulpo tan tímido que se vuelve del color de las rocas cuando alguien lo mira. Hoy es la fiesta del mar y no se atreve a ir. ¿Cómo lo animamos, {name}?", ca: "A la cova de l'escull hi viu l'Octavi, un pop tan tímid que es torna del color de les roques quan algú el mira. Avui és la festa del mar i no s'atreveix a anar-hi. Com l'animem, {name}?", en: "In the reef cave lives Octavio, an octopus so shy he turns rock-coloured when anyone looks at him. Today is the sea party and he does not dare to go. How do we cheer him on, {name}?", cs: "V jeskyni u útesu bydlí Oktávio, chobotnice tak stydlivá, že zbarví do barvy kamenů, když se na ni někdo podívá. Dnes je mořská oslava a ona se bojí jít. Jak ji povzbudíme, {name}?", fr: "Dans la grotte du récif vit Octave, une pieuvre si timide qu'elle prend la couleur des rochers quand on la regarde. Aujourd'hui, c'est la fête de la mer et elle n'ose pas y aller. Comment l'encourager, {name} ?" },
          choices: [
            { t: { es: "Vamos con él, de la mano (¡de las ocho!)", ca: "Anem amb ell, de la mà (de les vuit!)", en: "We go with him, holding hands (all eight!)", cs: "Půjdeme s ním, za ruku (za všech osm!)", fr: "On y va avec lui, main dans la main (les huit !)" }, go: "n2a" },
            { t: { es: "Le enseñamos que sus colores son geniales", ca: "Li ensenyem que els seus colors són genials", en: "We show him his colours are amazing", cs: "Ukážeme mu, že jeho barvy jsou úžasné", fr: "On lui montre que ses couleurs sont géniales" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "Octavio acepta si vais los tres juntos. Por el camino, practica saludos con cada brazo: 'Hola... hola... ¿hola?'. Al octavo saludo ya le sale una sonrisita.", ca: "L'Octavi accepta si aneu tots tres junts. Pel camí, practica salutacions amb cada braç: 'Hola... hola... hola?'. A la vuitena salutació ja li surt un somriure.", en: "Octavio agrees if you all go together. On the way, he practises waving with each arm: 'Hi... hi... hi?'. By the eighth wave a little smile appears.", cs: "Oktávio souhlasí, když půjdete všichni spolu. Cestou trénuje zdravení každým ramenem: 'Ahoj... ahoj... ahoj?'. U osmého pozdravu se už objeví úsměv.", fr: "Octave accepte si vous y allez tous ensemble. En chemin, il s'entraîne à saluer avec chaque bras : « Salut... salut... salut ? ». Au huitième salut, un petit sourire apparaît." },
          choices: [{ t: { es: "¡A la fiesta!", ca: "A la festa!", en: "To the party!", cs: "Na oslavu!", fr: "À la fête !" }, go: "n3" }]
        },
        n2b: {
          text: { es: "'¿Genial, yo?', duda Octavio. Le pedís que haga sus colores: rojo tomate, amarillo sol, ¡lunares turquesa! Los peces payaso se acercan aplaudiendo: '¡Es el mejor espectáculo del arrecife!'.", ca: "'Genial, jo?', dubta l'Octavi. Li demaneu que faci els seus colors: vermell tomàquet, groc sol, pics turquesa! Els peixos pallasso s'acosten aplaudint: 'És el millor espectacle de l'escull!'.", en: "'Amazing, me?', Octavio wonders. You ask him to show his colours: tomato red, sun yellow, turquoise polka dots! The clownfish gather round applauding: 'The best show on the reef!'.", cs: "'Úžasná, já?', pochybuje Oktávio. Poprosíte ho, ať předvede své barvy: rajčatově červenou, sluníčkově žlutou, tyrkysové puntíky! Klauni připlavou a tleskají: 'Nejlepší představení na útesu!'.", fr: "« Géniale, moi ? », doute Octave. Vous lui demandez de faire ses couleurs : rouge tomate, jaune soleil, pois turquoise ! Les poissons-clowns s'approchent en applaudissant : « Le meilleur spectacle du récif ! »." },
          choices: [{ t: { es: "¡A la fiesta, artista!", ca: "A la festa, artista!", en: "To the party, artist!", cs: "Na oslavu, umělkyně!", fr: "À la fête, artiste !" }, go: "n3" }]
        },
        n3: {
          text: { es: "En la fiesta, a Octavio le tiemblan los tentáculos... hasta que suena la música. Y resulta que con ocho brazos se baila ocho veces mejor. ¡Todo el mar quiere bailar con él! ¿Cuál es el broche final?", ca: "A la festa, a l'Octavi li tremolen els tentacles... fins que sona la música. I resulta que amb vuit braços es balla vuit vegades millor. Tot el mar vol ballar amb ell! Quin és el toc final?", en: "At the party, Octavio's tentacles tremble... until the music starts. And it turns out that with eight arms you dance eight times better. The whole sea wants to dance with him! What is the grand finale?", cs: "Na oslavě se Oktáviovi třesou chapadla... dokud nezačne hrát hudba. A ukáže se, že s osmi rameny se tančí osmkrát líp. Celé moře chce tančit s ním! Jaké bude velké finále?", fr: "À la fête, les tentacules d'Octave tremblent... jusqu'à ce que la musique commence. Et il se trouve qu'avec huit bras, on danse huit fois mieux. Toute la mer veut danser avec lui ! Quel est le bouquet final ?" },
          choices: [
            { t: { es: "¡El abrazo de ocho brazos para sus nuevos amigos!", ca: "L'abraçada de vuit braços per als seus nous amics!", en: "The eight-arm hug for his new friends!", cs: "Objetí osmi ramen pro nové kamarády!", fr: "Le câlin à huit bras pour ses nouveaux amis !" }, go: "e1" }
          ]
        },
        e1: {
          end: true,
          text: { es: "Octavio abraza a ocho amigos a la vez, rojo de felicidad (rojo de verdad: ¡se le ve!). Ser tímido no es malo, {name}: solo hace falta un amigo que te acompañe a la puerta. Lo demás lo hace la música.", ca: "L'Octavi abraça vuit amics alhora, vermell de felicitat (vermell de debò: se li veu!). Ser tímid no és dolent, {name}: només cal un amic que t'acompanyi a la porta. La resta la fa la música.", en: "Octavio hugs eight friends at once, red with happiness (actually red: you can see it!). Being shy is not bad, {name}: you just need a friend to walk you to the door. The music does the rest.", cs: "Oktávio obejme osm kamarádů najednou, celý červený štěstím (opravdu červený: je to vidět!). Být stydlivý není špatné, {name}: stačí kamarád, který tě doprovodí ke dveřím. O zbytek se postará hudba.", fr: "Octave embrasse huit amis à la fois, rouge de bonheur (vraiment rouge : ça se voit !). Être timide, ce n'est pas grave, {name} : il suffit d'un ami qui t'accompagne jusqu'à la porte. La musique fait le reste." }
        }
      }
    },
    {
      id: "tortuga", emoji: "🐢", start: "n1",
      title: { es: "El gran viaje de la tortuguita", ca: "El gran viatge de la tortugueta", en: "The Little Turtle's Great Journey", cs: "Velká cesta želvičky", fr: "Le grand voyage de la petite tortue" },
      nodes: {
        n1: {
          text: { es: "Una tortuguita recién nacida corre por la playa hacia el mar. '¡Espera!', grita. '¿Venís conmigo? Tengo que cruzar el océano y me da un poco de... mucho miedo'. ¡Pues claro, {name}! ¿Por dónde vamos?", ca: "Una tortugueta acabada de néixer corre per la platja cap al mar. 'Espera!', crida. 'Veniu amb mi? He de creuar l'oceà i em fa una mica de... molta por'. És clar que sí, {name}! Per on anem?", en: "A newborn little turtle runs down the beach towards the sea. 'Wait!', she calls. 'Will you come with me? I have to cross the ocean and I am a little... a lot scared'. Of course, {name}! Which way do we go?", cs: "Čerstvě narozená želvička běží po pláži k moři. 'Počkejte!', volá. 'Půjdete se mnou? Musím přeplavat oceán a trochu se... hodně se bojím'. No jasně, {name}! Kudy poplaveme?", fr: "Une petite tortue tout juste née court sur la plage vers la mer. « Attendez ! », crie-t-elle. « Vous venez avec moi ? Je dois traverser l'océan et j'ai un peu... très peur ». Bien sûr, {name} ! Par où on passe ?" },
          choices: [
            { t: { es: "Por la autopista de la corriente marina", ca: "Per l'autopista del corrent marí", en: "Along the ocean current highway", cs: "Po dálnici mořského proudu", fr: "Par l'autoroute du courant marin" }, go: "n2a" },
            { t: { es: "De arrecife en arrecife, parando a descansar", ca: "D'escull en escull, parant a descansar", en: "From reef to reef, stopping to rest", cs: "Od útesu k útesu, se zastávkami na odpočinek", fr: "De récif en récif, en s'arrêtant pour se reposer" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "¡La corriente es como un tobogán infinito! Viajáis rapidísimo junto a un banco de atunes. De pronto, la tortuguita ve una bolsa de plástico flotando: '¿Eso se come?'.", ca: "El corrent és com un tobogan infinit! Viatgeu rapidíssim al costat d'un banc de tonyines. De sobte, la tortugueta veu una bossa de plàstic flotant: 'Això es menja?'.", en: "The current is like an endless slide! You travel super fast next to a school of tuna. Suddenly the little turtle sees a plastic bag floating: 'Can I eat that?'.", cs: "Proud je jako nekonečná skluzavka! Cestujete rychlostí blesku vedle hejna tuňáků. Najednou želvička uvidí plavat igelitovou tašku: 'Dá se to jíst?'.", fr: "Le courant est comme un toboggan sans fin ! Vous voyagez très vite à côté d'un banc de thons. Soudain, la petite tortue voit un sac en plastique flotter : « Ça se mange ? »." },
          choices: [
            { t: { es: "¡NO! Eso es basura, la sacamos del mar", ca: "NO! Això és brossa, la traiem del mar", en: "NO! That is rubbish, we take it out of the sea", cs: "NE! To je odpadek, vytáhneme ho z moře", fr: "NON ! C'est un déchet, on le sort de la mer" }, go: "n3" }
          ]
        },
        n2b: {
          text: { es: "En cada arrecife os reciben amigos nuevos: un pez globo que se hincha para saludar, gambas limpiadoras que os hacen la manicura... La tortuguita ya casi no tiene miedo. Casi.", ca: "A cada escull us reben amics nous: un peix globus que s'infla per saludar, gambes netejadores que us fan la manicura... La tortugueta ja gairebé no té por. Gairebé.", en: "At every reef new friends welcome you: a pufferfish who puffs up to say hi, cleaner shrimp who give you a manicure... The little turtle is almost not scared anymore. Almost.", cs: "Na každém útesu vás vítají noví kamarádi: ryba fugu, která se nafoukne na pozdrav, krevetky čističky, které vám udělají manikúru... Želvička už se skoro nebojí. Skoro.", fr: "À chaque récif, de nouveaux amis vous accueillent : un poisson-globe qui se gonfle pour dire bonjour, des crevettes nettoyeuses qui vous font la manucure... La petite tortue n'a presque plus peur. Presque." },
          choices: [{ t: { es: "¡Último esfuerzo, tortuguita!", ca: "Últim esforç, tortugueta!", en: "One last push, little turtle!", cs: "Poslední kousek, želvičko!", fr: "Un dernier effort, petite tortue !" }, go: "n3" }]
        },
        n3: {
          text: { es: "Tras muchos días de nadar, aparece en el horizonte una playa dorada. La tortuguita frena: 'Es aquí. Lo noto en el corazón, como un imán'. Una ola suave os empuja a los tres hasta la orilla.", ca: "Després de molts dies de nedar, apareix a l'horitzó una platja daurada. La tortugueta frena: 'És aquí. Ho noto al cor, com un imant'. Una onada suau us empeny a tots tres fins a la vora.", en: "After many days of swimming, a golden beach appears on the horizon. The little turtle stops: 'This is it. I can feel it in my heart, like a magnet'. A gentle wave pushes the three of you to the shore.", cs: "Po mnoha dnech plavání se na obzoru objeví zlatá pláž. Želvička zabrzdí: 'Je to tady. Cítím to v srdíčku, jako magnet'. Jemná vlna vás všechny tři vynese na břeh.", fr: "Après de longs jours de nage, une plage dorée apparaît à l'horizon. La petite tortue s'arrête : « C'est ici. Je le sens dans mon cœur, comme un aimant ». Une douce vague vous pousse tous les trois jusqu'au rivage." },
          choices: [{ t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e1" }]
        },
        e1: {
          end: true,
          text: { es: "Es la misma playa donde nació. Algún día sus tortuguitas nacerán aquí también. 'Gracias por venir conmigo', dice. 'El miedo se hace pequeño cuando el viaje se hace acompañado'. Y eso, {name}, vale para todos los océanos, también los de la vida.", ca: "És la mateixa platja on va néixer. Algun dia les seves tortuguetes naixeran aquí també. 'Gràcies per venir amb mi', diu. 'La por es fa petita quan el viatge es fa acompanyat'. I això, {name}, val per a tots els oceans, també els de la vida.", en: "It is the very beach where she was born. Some day her own little turtles will be born here too. 'Thank you for coming with me', she says. 'Fear gets smaller when the journey is shared'. And that, {name}, is true for every ocean, including the oceans of life.", cs: "Je to ta samá pláž, kde se narodila. Jednou se tady narodí i její želvičky. 'Díky, že jste pluli se mnou', říká. 'Strach se zmenšuje, když se na cestu vydáš s někým'. A to, {name}, platí pro všechny oceány, i ty životní.", fr: "C'est la plage même où elle est née. Un jour, ses petites tortues naîtront ici aussi. « Merci d'être venus avec moi », dit-elle. « La peur devient petite quand le voyage est partagé ». Et ça, {name}, c'est vrai pour tous les océans, même ceux de la vie." }
        }
      }
    }
  ],

  /* ---------- KARAOKE ---------- */
  songs: [
    { emoji: "🤿",
      title: { es: "El submarino de {name}", ca: "El submarí de {name}", en: "{name}'s Submarine", cs: "Ponorka pro {name}", fr: "Le sous-marin de {name}" },
      lines: [
        { es: "Glu, glu, glu, bajamos ya,", ca: "Glu, glu, glu, baixem ja,", en: "Glug, glug, glug, down we go,", cs: "Glo, glo, glo, klesáme níž,", fr: "Glou, glou, glou, on descend," },
        { es: "en el submarino de {name} al mar.", ca: "amb el submarí de {name} al mar.", en: "in {name}'s submarine, nice and slow.", cs: "v ponorce, co řídí {name}, slyš.", fr: "dans le sous-marin de {name} en mer." },
        { es: "Un delfín nos dice adiós,", ca: "Un dofí ens diu adéu,", en: "A dolphin waves us on our way,", cs: "Delfín nám mává na pozdrav,", fr: "Un dauphin nous dit bonjour," },
        { es: "¡y una raya baila un vals con dos!", ca: "i una rajada balla un vals amb dos!", en: "and a manta dances in the spray!", cs: "a rejnok tančí, žádný strach!", fr: "et une raie danse tout autour !" },
        { es: "Burbujitas, mil colores,", ca: "Bombolletes, mil colors,", en: "Little bubbles, colours bright,", cs: "Bublinky a tisíc barev,", fr: "Petites bulles, mille couleurs," },
        { es: "el arrecife está de flores.", ca: "l'escull està ple de flors.", en: "the reef is blooming, what a sight.", cs: "útes kvete jako sad, jé.", fr: "le récif est tout en fleurs." },
        { es: "Y al fondo, oscuro y misterioso,", ca: "I al fons, fosc i misteriós,", en: "And deep below, dark and unknown,", cs: "A dole v hloubce tajemné,", fr: "Et tout au fond, sombre et mystérieux," },
        { es: "¡un pez linterna dice: hola, curiosos!", ca: "un peix llanterna diu: hola, curiosos!", en: "a lantern fish says: welcome home!", cs: "svítí rybka: pojďte ke mně!", fr: "un poisson-lanterne dit : bonjour, curieux !" }
      ] },
    { emoji: "🐋",
      title: { es: "La ballena cantarina", ca: "La balena cantaire", en: "The Singing Whale", cs: "Zpívající velryba", fr: "La baleine chanteuse" },
      lines: [
        { es: "Uuuuu, canta la ballena,", ca: "Uuuuu, canta la balena,", en: "Oooooh, the whale is singing,", cs: "Úúúúú, zpívá velryba,", fr: "Ouuuuh, chante la baleine," },
        { es: "su canción el mar la lleva.", ca: "la seva cançó el mar la porta.", en: "through the sea her song is ringing.", cs: "její píseň moře kolébá.", fr: "sa chanson que la mer emmène." },
        { es: "Viaja lejos, muy muy lejos,", ca: "Viatja lluny, molt molt lluny,", en: "It travels far, so far away,", cs: "Letí daleko, předaleko,", fr: "Elle voyage loin, très très loin," },
        { es: "hasta el mar de los cangrejos.", ca: "fins al mar dels crancs vermells.", en: "to where the little crabs all play.", cs: "až tam, kde je krabů deko.", fr: "jusqu'à la mer des pingouins." },
        { es: "¿Qué dirá su melodía?", ca: "Què dirà la seva melodia?", en: "What is her melody about?", cs: "Co asi ta píseň znamená?", fr: "Que raconte sa mélodie ?" },
        { es: "Dice: ¡buenos días, buenos días!", ca: "Diu: bon dia, bon dia!", en: "It says: good morning, sing and shout!", cs: "Říká: dobré ráno, kamarádi!", fr: "Elle dit : bonjour, bonjour mes amis !" },
        { es: "Y {name} le contesta: uuuu,", ca: "I {name} li contesta: uuuu,", en: "And {name} answers back: oooh,", cs: "A {name} jí odpoví: úúú,", fr: "Et {name} lui répond : ouuuh," },
        { es: "¡cantamos juntos, yo y tú!", ca: "cantem junts, jo i tu!", en: "we are singing, me and you!", cs: "zpíváme spolu, já i ty, jů!", fr: "on chante ensemble, moi et toi !" }
      ] },
    { emoji: "🦀",
      title: { es: "El baile del cangrejo", ca: "El ball del cranc", en: "The Crab Dance", cs: "Krabí tanec", fr: "La danse du crabe" },
      lines: [
        { es: "Para un lado, para el otro,", ca: "Cap a un costat, cap a l'altre,", en: "To one side, then to the other,", cs: "Na jednu stranu, na druhou,", fr: "D'un côté, puis de l'autre," },
        { es: "así baila el cangrejito loco.", ca: "així balla el cranquet boig.", en: "dances the crab with his crab brother.", cs: "tančí krab cestou bokovou.", fr: "danse le petit crabe à sa façon." },
        { es: "Nunca anda hacia adelante,", ca: "Mai no camina cap endavant,", en: "He never ever walks ahead,", cs: "Nikdy nechodí dopředu,", fr: "Il ne marche jamais tout droit," },
        { es: "¡y llega siempre en un instante!", ca: "i arriba sempre en un instant!", en: "he goes sideways there instead!", cs: "a stejně dojde k obědu!", fr: "et il arrive quand même à toi !" },
        { es: "Pinza arriba, pinza abajo,", ca: "Pinça amunt, pinça avall,", en: "Claw goes up and claw goes down,", cs: "Klepeto nahoru, klepeto dolů,", fr: "Pince en haut, pince en bas," },
        { es: "saluda al pez y al escarabajo.", ca: "saluda el peix i el cargol.", en: "he waves at every fish in town.", cs: "zdraví rybky vespolu.", fr: "il salue le poisson là-bas." },
        { es: "Y {name} baila de lado también,", ca: "I {name} balla de costat també,", en: "And {name} dances sideways too,", cs: "A {name} tančí bokem, hned,", fr: "Et {name} danse de côté aussi," },
        { es: "¡clic, clac, clic, requetebién!", ca: "clic, clac, clic, la mar de bé!", en: "click, clack, click, woo-hoo-hoo!", cs: "klik, klak, klik, celý svět!", fr: "clic, clac, clic, et voilà !" }
      ] }
  ],

  /* ---------- TRADUCTOR ---------- */
  translator: {
    words: [
      W_COMMON.hola,
      W_COMMON.adios,
      W_COMMON.amigo,
      { k: "pez", emoji: "🐟", name: { es: "pez", ca: "peix", en: "fish", cs: "ryba", fr: "poisson" } },
      { k: "ballena", emoji: "🐋", name: { es: "ballena", ca: "balena", en: "whale", cs: "velryba", fr: "baleine" } },
      { k: "ola", emoji: "🌊", name: { es: "ola", ca: "onada", en: "wave", cs: "vlna", fr: "vague" } },
      { k: "concha", emoji: "🐚", name: { es: "concha", ca: "petxina", en: "shell", cs: "mušle", fr: "coquillage" } },
      { k: "submarino", emoji: "🤿", name: { es: "submarino", ca: "submarí", en: "submarine", cs: "ponorka", fr: "sous-marin" } },
      W_COMMON.robot,
      W_COMMON.mama,
      W_COMMON.papa,
      W_COMMON.casa,
      W_COMMON.agua,
      W_COMMON.comida,
      W_COMMON.perro,
      W_COMMON.gato,
      { k: "grande", emoji: "🐋", name: { es: "grande", ca: "gran", en: "big", cs: "velký", fr: "grand" } },
      { k: "pequeno", emoji: "🦐", name: { es: "pequeño", ca: "petit", en: "small", cs: "malý", fr: "petit" } },
      W_COMMON.bonito,
      W_COMMON.amor,
      W_COMMON.gracias,
      W_COMMON.si,
      W_COMMON.no,
      W_COMMON.dormir
    ],
    langs: [
      { id: "delfinico", emoji: "🐬",
        name: { es: "Delfínico", ca: "Dofínic", en: "Dolphinish", cs: "Delfínština", fr: "Dauphinois" },
        greeting: { es: "¡Iiik-iik! El delfínico se habla con silbidos y saltos.", ca: "Iiik-iik! El dofínic es parla amb xiulets i salts.", en: "Eeek-eek! Dolphinish is spoken with whistles and jumps.", cs: "Íík-ík! Delfínština se mluví pískáním a skoky.", fr: "Iiik-iik ! Le dauphinois se parle avec des sifflements et des sauts." },
        dict: { hola: "iiik", adios: "iiik-plaf", amigo: "ikimi", pez: "ñami-ik", ballena: "IIIIIK", ola: "surf-ik", concha: "clic-ik", submarino: "brum-ik", robot: "bip-ik", mama: "mamik", papa: "papik", casa: "aguik", agua: "ik-ik", comida: "ñamik", perro: "guau-ik", gato: "miau-ik", grande: "IKMAX", pequeno: "ikini", bonito: "brillik", amor: "corazik", gracias: "gracik", si: "ik", no: "ok-no-ik", dormir: "medio-zzz-ik" } },
      { id: "balleno", emoji: "🐋",
        name: { es: "Balleno", ca: "Balenès", en: "Whaleish", cs: "Velrybština", fr: "Baleinois" },
        greeting: { es: "Uuuuuu... el balleno se canta despacio y llega lejísimos.", ca: "Uuuuuu... el balenès es canta a poc a poc i arriba lluníssim.", en: "Oooooo... Whaleish is sung slowly and travels very far.", cs: "Úúúúú... velrybština se zpívá pomalu a nese se předaleko.", fr: "Ouuuuu... le baleinois se chante lentement et porte très loin." },
        dict: { hola: "uuulaaa", adios: "uuuadiooos", amigo: "uuumiiigooo", pez: "peeezuuu", ballena: "UUUUUU", ola: "ooolaaauu", concha: "cooonchuuu", submarino: "suuubuuu", robot: "roooboootuuu", mama: "maaamuuu", papa: "paaapuuu", casa: "caaasuuu", agua: "aaaguuua", comida: "ñaaamuuu", perro: "guaaauuu", gato: "miaaauuu", grande: "graaandeee", pequeno: "peeequeeeñuuu", bonito: "booonituuu", amor: "aaamooor", gracias: "graaaciaaas", si: "siiiuuu", no: "nooouuu", dormir: "zzzuuu" } },
      { id: "cangrejil", emoji: "🦀",
        name: { es: "Cangrejil", ca: "Cranquenc", en: "Crabbish", cs: "Krabština", fr: "Crabien" },
        greeting: { es: "¡Clic-clac! El cangrejil se habla chasqueando las pinzas... y de lado.", ca: "Clic-clac! El cranquenc es parla fent espetegar les pinces... i de costat.", en: "Click-clack! Crabbish is spoken by snapping your claws... and sideways.", cs: "Klik-klak! Krabština se mluví cvakáním klepet... a bokem.", fr: "Clic-clac ! Le crabien se parle en claquant des pinces... et de côté." },
        dict: { hola: "clic-clac", adios: "clac-clic", amigo: "clicmigo", pez: "clic-pez", ballena: "CLAC-CLAC", ola: "clic-surf", concha: "cliconcha", submarino: "clacsub", robot: "clic-bot", mama: "clicmama", papa: "clicpapa", casa: "clac-casa", agua: "clic-glu", comida: "ñam-clac", perro: "clic-guau", gato: "clic-miau", grande: "CLACGRANDE", pequeno: "cliquito", bonito: "cliclindo", amor: "clicorazón", gracias: "clac-gracias", si: "clic", no: "clac", dormir: "clic-zzz" } },
      { id: "burbujeante", emoji: "🫧",
        name: { es: "Burbujeante", ca: "Bombollós", en: "Bubblish", cs: "Bublinkovština", fr: "Bullois" },
        greeting: { es: "Blub-blub. El burbujeante se habla soltando burbujitas. ¡Cada burbuja, una palabra!", ca: "Blub-blub. El bombollós es parla deixant anar bombolletes. Cada bombolla, una paraula!", en: "Blub-blub. Bubblish is spoken by letting out little bubbles. Each bubble, one word!", cs: "Blub-blub. Bublinkovština se mluví vypouštěním bublinek. Každá bublinka jedno slovo!", fr: "Bloub-bloub. Le bullois se parle en lâchant des petites bulles. Chaque bulle, un mot !" },
        dict: { hola: "blub", adios: "blub-blub-va", amigo: "blubmigo", pez: "blubez", ballena: "BLUBENA", ola: "blubola", concha: "blubconcha", submarino: "blubmarino", robot: "blubot", mama: "blubmama", papa: "blubpapa", casa: "blubcasa", agua: "blub-blub-blub", comida: "ñamblub", perro: "blubguau", gato: "blubmiau", grande: "blubgrande", pequeno: "blubito", bonito: "blublindo", amor: "blubamor", gracias: "blubgracias", si: "blub-sí", no: "blub-no", dormir: "blubzzz" } }
    ]
  },

  /* ---------- MAPA ---------- */
  explore: {
    width: 2600, height: 1100, stars: false,
    bgCss: "radial-gradient(ellipse 50% 30% at 20% 5%, rgba(255,255,255,.35), transparent), linear-gradient(180deg,#81d4fa 0%,#29b6f6 20%,#0288d1 45%,#01579b 72%,#0d2137 100%)",
    cats: [
      { id: "orilla", emoji: "🏖️", x: 120, name: { es: "La orilla", ca: "La vora", en: "The shore", cs: "Pobřeží", fr: "Le rivage" } },
      { id: "arrecife", emoji: "🪸", x: 800, name: { es: "El arrecife", ca: "L'escull", en: "The reef", cs: "Útes", fr: "Le récif" } },
      { id: "marabierto", emoji: "🌊", x: 1500, name: { es: "Mar abierto", ca: "Mar obert", en: "Open sea", cs: "Širé moře", fr: "Pleine mer" } },
      { id: "profundo", emoji: "🕳️", x: 2150, name: { es: "Profundidades", ca: "Profunditats", en: "The deep", cs: "Hlubiny", fr: "Les profondeurs" } }
    ],
    pois: [
      { cat: "orilla", emoji: "🐢", x: 200, y: 380,
        name: { es: "Tortugas marinas", ca: "Tortugues marines", en: "Sea turtles", cs: "Mořské želvy", fr: "Tortues marines" },
        fact: { es: "Nacen en la playa y corren al mar. De mayores vuelven a la misma playa a poner sus huevos.", ca: "Neixen a la platja i corren al mar. De grans tornen a la mateixa platja a pondre els seus ous.", en: "They hatch on the beach and run to the sea. As grown-ups they return to the same beach to lay their eggs.", cs: "Líhnou se na pláži a běží do moře. Jako dospělé se vracejí na stejnou pláž klást vajíčka.", fr: "Elles naissent sur la plage et courent vers la mer. Adultes, elles reviennent pondre sur la même plage." } },
      { cat: "orilla", emoji: "🦀", x: 360, y: 520,
        name: { es: "El cangrejo", ca: "El cranc", en: "The crab", cs: "Krab", fr: "Le crabe" },
        fact: { es: "Camina de lado y lleva su armadura puesta. Cuando crece, ¡se la cambia por una nueva!", ca: "Camina de costat i porta la seva armadura posada. Quan creix, se la canvia per una de nova!", en: "It walks sideways and wears its armour. When it grows, it swaps it for a new one!", cs: "Chodí bokem a nosí své brnění. Když vyroste, vymění ho za nové!", fr: "Il marche de côté et porte son armure. Quand il grandit, il en change pour une neuve !" } },
      { cat: "orilla", emoji: "🐚", x: 500, y: 400,
        name: { es: "La charca de marea", ca: "La bassa de marea", en: "The tide pool", cs: "Přílivová tůňka", fr: "La flaque de marée" },
        fact: { es: "Cuando el mar baja, deja piscinas pequeñitas llenas de estrellas de mar y caracolas.", ca: "Quan el mar baixa, deixa piscines petitones plenes d'estrelles de mar i cargoles.", en: "When the sea goes out, it leaves tiny pools full of starfish and shells.", cs: "Když moře ustoupí, nechá po sobě malé bazénky plné hvězdic a mušliček.", fr: "Quand la mer se retire, elle laisse de petites piscines pleines d'étoiles de mer et de coquillages." } },
      { cat: "arrecife", emoji: "🪸", x: 850, y: 480, size: 2,
        name: { es: "El arrecife de coral", ca: "L'escull de corall", en: "The coral reef", cs: "Korálový útes", fr: "Le récif de corail" },
        fact: { es: "La ciudad más colorida del mar, construida por animalitos diminutos durante siglos.", ca: "La ciutat més acolorida del mar, construïda per animalets diminuts durant segles.", en: "The most colourful city in the sea, built by tiny animals over centuries.", cs: "Nejbarevnější město v moři, stavěné drobnými zvířátky po staletí.", fr: "La ville la plus colorée de la mer, construite par de minuscules animaux pendant des siècles." } },
      { cat: "arrecife", emoji: "🐠", x: 1020, y: 380,
        name: { es: "El pez payaso", ca: "El peix pallasso", en: "The clownfish", cs: "Klaun očkatý", fr: "Le poisson-clown" },
        fact: { es: "Vive entre los brazos de la anémona, que pica a todos menos a él. ¡Casa con guardaespaldas!", ca: "Viu entre els braços de l'anemone, que pica a tothom menys a ell. Casa amb guardaespatlles!", en: "It lives in the anemone's arms, which sting everyone but him. A house with a bodyguard!", cs: "Bydlí v ramenou sasanky, která žahá všechny kromě něj. Dům s bodyguardem!", fr: "Il vit dans les bras de l'anémone, qui pique tout le monde sauf lui. Une maison avec garde du corps !" } },
      { cat: "arrecife", emoji: "🐙", x: 1180, y: 550,
        name: { es: "El pulpo", ca: "El pop", en: "The octopus", cs: "Chobotnice", fr: "La pieuvre" },
        fact: { es: "Ocho brazos, tres corazones y campeón mundial del disfraz: cambia de color en un segundo.", ca: "Vuit braços, tres cors i campió mundial de la disfressa: canvia de color en un segon.", en: "Eight arms, three hearts and world champion of disguise: it changes colour in a second.", cs: "Osm ramen, tři srdce a mistr světa v převlecích: barvu změní za vteřinu.", fr: "Huit bras, trois cœurs et champion du monde du déguisement : elle change de couleur en une seconde." } },
      { cat: "arrecife", emoji: "🐡", x: 1340, y: 420,
        name: { es: "El pez globo", ca: "El peix globus", en: "The pufferfish", cs: "Ryba fugu", fr: "Le poisson-globe" },
        fact: { es: "Cuando se asusta, traga agua y se hincha como un globo con pinchos. ¡Nadie se lo quiere comer así!", ca: "Quan s'espanta, empassa aigua i s'infla com un globus amb punxes. Ningú no se'l vol menjar així!", en: "When scared, it gulps water and puffs up like a spiky balloon. Nobody wants to eat it like that!", cs: "Když se lekne, nabere vodu a nafoukne se jako balon s bodlinami. Takhle ho nikdo nechce sníst!", fr: "Quand il a peur, il avale de l'eau et gonfle comme un ballon à piquants. Personne ne veut le manger comme ça !" } },
      { cat: "marabierto", emoji: "🐬", x: 1550, y: 380,
        name: { es: "Los delfines", ca: "Els dofins", en: "The dolphins", cs: "Delfíni", fr: "Les dauphins" },
        fact: { es: "Juegan, saltan y se llaman por su nombre con silbidos. Les encanta hacer surf en las olas.", ca: "Juguen, salten i es criden pel seu nom amb xiulets. Els encanta fer surf a les onades.", en: "They play, jump and call each other by name with whistles. They love surfing the waves.", cs: "Hrají si, skáčou a volají na sebe jménem pomocí pískání. Milují surfování na vlnách.", fr: "Ils jouent, sautent et s'appellent par leur nom avec des sifflements. Ils adorent surfer sur les vagues." } },
      { cat: "marabierto", emoji: "🐋", x: 1750, y: 520, size: 2,
        name: { es: "La ballena azul", ca: "La balena blava", en: "The blue whale", cs: "Plejtvák obrovský", fr: "La baleine bleue" },
        fact: { es: "El animal más grande de la historia. Su corazón late tan fuerte que se oye a kilómetros.", ca: "L'animal més gran de la història. El seu cor batega tan fort que se sent a quilòmetres.", en: "The biggest animal in history. Its heart beats so loud you can hear it kilometres away.", cs: "Největší zvíře v dějinách. Jeho srdce bije tak silně, že je slyšet na kilometry.", fr: "Le plus grand animal de l'histoire. Son cœur bat si fort qu'on l'entend à des kilomètres." } },
      { cat: "marabierto", emoji: "🦈", x: 1930, y: 400,
        name: { es: "El tiburón amable", ca: "El tauró amable", en: "The friendly shark", cs: "Hodný žralok", fr: "Le requin gentil" },
        fact: { es: "Los tiburones existen desde antes que los dinosaurios y casi todos son tímidos. Este se llama Braulio.", ca: "Els taurons existeixen des d'abans que els dinosaures i gairebé tots són tímids. Aquest es diu Brauli.", en: "Sharks have been around since before the dinosaurs and most are shy. This one is called Braulio.", cs: "Žraloci tu jsou déle než dinosauři a většina z nich je plachá. Tenhle se jmenuje Braulio.", fr: "Les requins existent depuis avant les dinosaures et presque tous sont timides. Celui-ci s'appelle Braulio." } },
      { cat: "marabierto", emoji: "🪼", x: 1850, y: 650,
        name: { es: "Las medusas", ca: "Les meduses", en: "The jellyfish", cs: "Medúzy", fr: "Les méduses" },
        fact: { es: "Bailan en el agua sin cerebro ni huesos. Mejor mirarlas de lejos: algunas hacen cosquillas que pican.", ca: "Ballen a l'aigua sense cervell ni ossos. Millor mirar-les de lluny: algunes fan pessigolles que piquen.", en: "They dance in the water with no brain or bones. Best watched from afar: some tickle with a sting.", cs: "Tančí ve vodě bez mozku a kostí. Radši je pozoruj z dálky: některé lechtají žahavě.", fr: "Elles dansent dans l'eau sans cerveau ni os. Mieux vaut les regarder de loin : certaines chatouillent en piquant." } },
      { cat: "profundo", emoji: "🔦", x: 2200, y: 500,
        name: { es: "El pez linterna", ca: "El peix llanterna", en: "The lantern fish", cs: "Rybka se světýlkem", fr: "Le poisson-lanterne" },
        fact: { es: "En la oscuridad total, lleva su propia lucecita encendida. ¡Como tú con una linterna bajo la manta!", ca: "En la foscor total, porta la seva pròpia llumeta encesa. Com tu amb una llanterna sota la manta!", en: "In total darkness, it carries its own little light. Like you with a torch under the blanket!", cs: "V úplné tmě si nese své vlastní rozsvícené světýlko. Jako ty s baterkou pod dekou!", fr: "Dans le noir total, il porte sa propre petite lumière allumée. Comme toi avec une lampe sous la couverture !" } },
      { cat: "profundo", emoji: "🦑", x: 2360, y: 380,
        name: { es: "El calamar gigante", ca: "El calamar gegant", en: "The giant squid", cs: "Krakatice obrovská", fr: "Le calmar géant" },
        fact: { es: "Tiene los ojos más grandes del reino animal: como platos de sopa. Casi nadie lo ha visto nunca.", ca: "Té els ulls més grans del regne animal: com plats de sopa. Gairebé ningú no l'ha vist mai.", en: "It has the biggest eyes in the animal kingdom: like soup plates. Almost nobody has ever seen one.", cs: "Má největší oči v celé zvířecí říši: jako polévkové talíře. Skoro nikdo ji nikdy neviděl.", fr: "Il a les plus grands yeux du règne animal : comme des assiettes à soupe. Presque personne ne l'a jamais vu." } },
      { cat: "profundo", emoji: "🌋", x: 2480, y: 620,
        name: { es: "Las chimeneas calientes", ca: "Les xemeneies calentes", en: "The hot vents", cs: "Horké komíny", fr: "Les cheminées chaudes" },
        fact: { es: "Volcancitos del fondo del mar que sueltan agua calentita. A su alrededor viven cangrejos yeti peludos.", ca: "Volcanets del fons del mar que deixen anar aigua calentona. Al seu voltant hi viuen crancs yeti peluts.", en: "Little sea-floor volcanoes letting out warm water. Furry yeti crabs live around them.", cs: "Malé sopečky na dně moře, ze kterých uniká teplá voda. Kolem nich žijí chlupatí yeti krabi.", fr: "De petits volcans du fond marin qui laissent échapper de l'eau chaude. Des crabes yétis poilus vivent autour." } },
      { cat: "profundo", emoji: "🕳️", x: 2520, y: 800,
        name: { es: "La fosa más profunda", ca: "La fossa més profunda", en: "The deepest trench", cs: "Nejhlubší příkop", fr: "La fosse la plus profonde" },
        fact: { es: "Baja 11 kilómetros: el Everest cabría entero. Y hasta ahí abajo encontraron vida saludando.", ca: "Baixa 11 quilòmetres: l'Everest hi cabria sencer. I fins allà baix hi van trobar vida saludant.", en: "It goes down 11 kilometres: Everest would fit inside. And even down there they found life waving hello.", cs: "Klesá 11 kilometrů: vešel by se do ní celý Everest. A i tam dole našli život, který mával.", fr: "Elle descend à 11 kilomètres : l'Everest y tiendrait en entier. Et même là, on a trouvé la vie qui saluait." } }
    ]
  },

  /* ---------- CHARLA ---------- */
  chat: {
    keywords: [
      { keys: ["hola", "hello", "hi ", "ahoj", "bonjour", "salut", "bon dia", "buenas"],
        replies: [{ es: "¡Hola, {name}! Glu, glu. Perdona las burbujas: acabo de subir del arrecife.", ca: "Hola, {name}! Glu, glu. Perdona les bombolles: acabo de pujar de l'escull.", en: "Hi, {name}! Glug, glug. Excuse the bubbles: I just came up from the reef.", cs: "Ahoj, {name}! Glo, glo. Promiň ty bublinky: právě jsem se vynořil od útesu.", fr: "Salut, {name} ! Glou, glou. Pardon pour les bulles : je remonte tout juste du récif." }] },
      { keys: ["como estas", "how are you", "jak se mas", "comment ca va", "com estas", "que tal"],
        replies: [{ es: "¡Fresquito y feliz! He echado una carrera con un delfín. Ha ganado él, pero por poco. ¿Y tú, {name}?", ca: "Fresquet i feliç! He fet una cursa amb un dofí. Ha guanyat ell, però per poc. I tu, {name}?", en: "Cool and happy! I raced a dolphin today. He won, but only just. And you, {name}?", cs: "Svěží a šťastný! Závodil jsem s delfínem. Vyhrál on, ale jen o kousek. A ty, {name}?", fr: "Tout frais et heureux ! J'ai fait la course avec un dauphin. Il a gagné, mais de peu. Et toi, {name} ?" }] },
      { keys: ["cancion", "musica", "music", "song", "sing", "pisnicka", "hudba", "chanson", "musique", "canço", "canta", "zpiv", "chante"],
        replies: [{ es: "¡Las ballenas son las mejores cantantes del planeta! ¿Vamos al Karaoke a cantar con ellas? Uuuuu...", ca: "Les balenes són les millors cantants del planeta! Anem al Karaoke a cantar amb elles? Uuuuu...", en: "Whales are the best singers on the planet! Shall we go to Karaoke and sing with them? Oooooh...", cs: "Velryby jsou nejlepší zpěvačky na planetě! Půjdeme na karaoke zpívat s nimi? Úúúú...", fr: "Les baleines sont les meilleures chanteuses de la planète ! On va au karaoké chanter avec elles ? Ouuuh..." }] },
      { keys: ["chiste", "joke", "vtip", "blague", "acudit", "broma"],
        replies: [
          { es: "¿Cómo se despiden los pulpos? Con un fuerte apretón de manos, de manos, de manos, de manos... Ja, ja.", ca: "Com s'acomiaden els pops? Amb una forta encaixada de mans, de mans, de mans, de mans... Ha, ha.", en: "How do octopuses say goodbye? With a firm handshake, handshake, handshake, handshake... Ha ha.", cs: "Jak se loučí chobotnice? Pevným podáním ruky, ruky, ruky, ruky... Ha ha.", fr: "Comment les pieuvres se disent au revoir ? Avec une bonne poignée de main, de main, de main, de main... Ha ha." },
          { es: "¿Qué hace un pez cuando se aburre? ¡Nada! Ji, ji.", ca: "Què fa un peix quan s'avorreix? Neda... res! Hi, hi.", en: "What does a fish do when it is bored? Nothing, it just swims around! Hee hee.", cs: "Co dělá ryba, když se nudí? Nic, jen tak plave! Chi chi.", fr: "Que fait un poisson quand il s'ennuie ? Rien, il nage ! Hi hi." }] },
      { keys: ["te quiero", "love you", "t'estimo", "testimo", "mam te rad", "je t'aime", "jetaime"],
        replies: [{ es: "¡Y yo a ti, {name}! Te quiero tan hondo como la fosa más profunda del mar: once kilómetros y bajando.", ca: "I jo a tu, {name}! T'estimo tan fondo com la fossa més profunda del mar: onze quilòmetres i baixant.", en: "I love you too, {name}! As deep as the deepest trench in the sea: eleven kilometres and counting.", cs: "Já tebe taky, {name}! Mám tě rád tak hluboko, jako je nejhlubší mořský příkop: jedenáct kilometrů a klesá.", fr: "Moi aussi je t'aime, {name} ! Aussi profond que la fosse la plus profonde de la mer : onze kilomètres et ça descend." }] },
      { keys: ["triste", "sad", "smutn", "llorar", "plorar", "cry", "chagrin"],
        replies: [{ es: "Ven, {name}. El mar también tiene días de tormenta, y después siempre vuelve la calma. Cuéntamelo despacito.", ca: "Vine, {name}. El mar també té dies de tempesta, i després sempre torna la calma. Explica-m'ho a poc a poc.", en: "Come here, {name}. The sea has stormy days too, and calm always comes back after. Tell me all about it, slowly.", cs: "Pojď sem, {name}. I moře má bouřkové dny, a pak se vždycky vrátí klid. Povídej mi to pomaloučku.", fr: "Viens, {name}. La mer aussi a des jours de tempête, et le calme revient toujours après. Raconte-moi doucement." }] },
      { keys: ["donde estas", "where are you", "kde jsi", "ou es tu", "on ets"],
        replies: [{ es: "Estoy en la charca de marea, jugando al escondite con una estrella de mar. Lleva ganando media hora: no se mueve.", ca: "Soc a la bassa de marea, jugant a fet i amagar amb una estrella de mar. Porta guanyant mitja hora: no es mou.", en: "I am at the tide pool, playing hide-and-seek with a starfish. She has been winning for half an hour: she does not move.", cs: "Jsem u přílivové tůňky a hraju schovávanou s hvězdicí. Vyhrává už půl hodiny: nehýbe se.", fr: "Je suis à la flaque de marée, je joue à cache-cache avec une étoile de mer. Elle gagne depuis une demi-heure : elle ne bouge pas." }] },
      { keys: ["ballena", "whale", "velryba", "baleine", "balena"],
        replies: [{ es: "¡La ballena azul es más grande que cualquier dinosaurio! Y canta canciones que cruzan el océano entero.", ca: "La balena blava és més gran que qualsevol dinosaure! I canta cançons que creuen l'oceà sencer.", en: "The blue whale is bigger than any dinosaur! And it sings songs that cross the whole ocean.", cs: "Plejtvák obrovský je větší než jakýkoli dinosaurus! A zpívá písně, které se nesou přes celý oceán.", fr: "La baleine bleue est plus grande que n'importe quel dinosaure ! Et elle chante des chansons qui traversent tout l'océan." }] },
      { keys: ["tiburon", "shark", "zralok", "requin", "tauro"],
        replies: [{ es: "Los tiburones dan menos miedo de cerca: casi todos son tímidos y muy importantes para el mar. Mi amigo Braulio colecciona dientes... los suyos, que se le caen mil.", ca: "Els taurons fan menys por de prop: gairebé tots són tímids i molt importants per al mar. El meu amic Brauli col·lecciona dents... les seves, que li'n cauen mil.", en: "Sharks are less scary up close: most are shy and very important for the sea. My friend Braulio collects teeth... his own, he loses thousands.", cs: "Žraloci jsou zblízka míň strašidelní: většina je plachá a pro moře moc důležitá. Můj kamarád Braulio sbírá zuby... svoje, padají mu po tisících.", fr: "Les requins font moins peur de près : presque tous sont timides et très importants pour la mer. Mon ami Braulio collectionne les dents... les siennes, il en perd mille." }] },
      { keys: ["cole", "school", "escola", "skola", "ecole"],
        replies: [{ es: "¿Qué tal el cole, {name}? Los peces también van en grupos que se llaman bancos... ¡pero sin pupitres! Cuéntame qué has aprendido.", ca: "Què tal l'escola, {name}? Els peixos també van en grups que es diuen bancs... però sense pupitres! Explica'm què has après.", en: "How was school, {name}? Fish travel in groups called schools too... but with no desks! Tell me what you learned.", cs: "Jaké to bylo ve škole, {name}? Ryby taky plavou ve skupinách, kterým se říká hejna... ale bez lavic! Pověz mi, co ses naučila.", fr: "C'était comment l'école, {name} ? Les poissons aussi vont en groupes qu'on appelle des bancs... mais sans pupitres ! Raconte-moi ce que tu as appris." }] }
    ],
    fallback: [
      { es: "¿Sabías que las nutrias marinas duermen de la mano para no separarse mientras flotan? ¡Achuchón acuático!", ca: "Sabies que les llúdries marines dormen agafades de la mà per no separar-se mentre suren? Abraçada aquàtica!", en: "Did you know sea otters sleep holding hands so they do not drift apart? Aquatic cuddle!", cs: "Věděla jsi, že mořské vydry spí držíce se za ruce, aby je proud nerozdělil? Vodní mazlení!", fr: "Tu savais que les loutres de mer dorment en se tenant la main pour ne pas dériver ? Câlin aquatique !" },
      { es: "El caballito de mar papá lleva a los bebés en su bolsita. ¡Es el canguro del mar!", ca: "El cavallet de mar papa porta els nadons a la seva bosseta. És el cangur del mar!", en: "The seahorse dad carries the babies in his pouch. The kangaroo of the sea!", cs: "Táta mořský koník nosí mláďata v kapsičce. Je to klokan moří!", fr: "Le papa hippocampe porte les bébés dans sa poche. C'est le kangourou de la mer !" },
      { es: "Más de la mitad del aire que respiras lo fabrican plantas diminutas del mar. ¡Gracias, océano!", ca: "Més de la meitat de l'aire que respires el fabriquen plantes diminutes del mar. Gràcies, oceà!", en: "More than half the air you breathe is made by tiny sea plants. Thank you, ocean!", cs: "Víc než polovinu vzduchu, který dýcháš, vyrábějí drobné mořské rostlinky. Díky, oceáne!", fr: "Plus de la moitié de l'air que tu respires est fabriquée par de minuscules plantes marines. Merci, océan !" },
      { es: "{name}, si ves basura en la playa y la recoges, eres héroe del mar. Las tortugas te lo agradecen.", ca: "{name}, si veus brossa a la platja i la reculls, ets heroi del mar. Les tortugues t'ho agraeixen.", en: "{name}, if you see rubbish on the beach and pick it up, you are a sea hero. The turtles thank you.", cs: "{name}, když uvidíš na pláži odpadek a sebereš ho, jsi hrdinka moře. Želvy ti děkují.", fr: "{name}, si tu vois un déchet sur la plage et que tu le ramasses, tu es un héros de la mer. Les tortues te remercient." },
      { es: "El pulpo tiene tres corazones. Yo solo tengo uno de robot, pero late fuerte por mis amigos.", ca: "El pop té tres cors. Jo només en tinc un de robot, però batega fort pels meus amics.", en: "The octopus has three hearts. I only have one robot heart, but it beats hard for my friends.", cs: "Chobotnice má tři srdce. Já mám jen jedno robotí, ale bije silně pro mé kamarády.", fr: "La pieuvre a trois cœurs. Moi je n'ai qu'un cœur de robot, mais il bat fort pour mes amis." },
      { es: "¿Cuál es tu animal del mar favorito? El mío es la estrella de mar: si pierde un brazo, ¡le crece otro!", ca: "Quin és el teu animal del mar preferit? El meu és l'estrella de mar: si perd un braç, li creix un altre!", en: "What is your favourite sea animal? Mine is the starfish: if it loses an arm, it grows a new one!", cs: "Které mořské zvíře máš nejradši? Já hvězdici: když přijde o rameno, naroste jí nové!", fr: "Quel est ton animal marin préféré ? Moi, c'est l'étoile de mer : si elle perd un bras, il repousse !" }
    ]
  }
});
