"use strict";
/* ============================================================
   Contenido de MIRÓ (parte B): historias ramificadas,
   canciones, traductor, mapa de exploración y charla.
   Al final: tarjeta de portada y celebración del taller.
   ============================================================ */

Object.assign(THEMES.miro.content, {

  /* ---------- HISTORIAS (ramifican de verdad) ---------- */
  stories: [
    {
      id: "estrella", emoji: "⭐", start: "n1",
      title: { es: "La estrella que se escapó del cuadro", ca: "L'estrella que es va escapar del quadre", en: "The Star that Escaped the Painting", cs: "Hvězda, která utekla z obrazu", fr: "L'étoile qui s'est échappée du tableau" },
      nodes: {
        n1: {
          text: { es: "¡{name}, pasa algo en el museo! Esta noche, la estrellita de un cuadro de Miró ha saltado del lienzo: quiere ver el cielo de verdad. La luna del cuadro se ha quedado triste. ¿Qué hacemos?", ca: "{name}, passa alguna cosa al museu! Aquesta nit, l'estrelleta d'un quadre de Miró ha saltat de la tela: vol veure el cel de debò. La lluna del quadre s'ha quedat trista. Què fem?", en: "{name}, something is going on at the museum! Tonight, the little star from a Miró painting jumped off the canvas: she wants to see the real sky. The moon in the painting is sad. What do we do?", cs: "{name}, v muzeu se něco děje! Dnes v noci vyskočila hvězdička z Miróova obrazu: chce vidět opravdové nebe. Měsíc v obraze je z toho smutný. Co uděláme?", fr: "{name}, il se passe quelque chose au musée ! Cette nuit, la petite étoile d'un tableau de Miró a sauté de la toile : elle veut voir le vrai ciel. La lune du tableau est toute triste. Qu'est-ce qu'on fait ?" },
          choices: [
            { t: { es: "¡Seguimos a la estrella!", ca: "Seguim l'estrella!", en: "Let's follow the star!", cs: "Poletíme za hvězdou!", fr: "On suit l'étoile !" }, go: "n2a" },
            { t: { es: "Primero consolamos a la luna", ca: "Primer consolem la lluna", en: "First we comfort the moon", cs: "Nejdřív utěšíme měsíc", fr: "D'abord on console la lune" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "La estrella va saltando por los tejados de Barcelona y deja un caminito de chispas amarillas. ¡Mira! Se ha parado a resbalar por el mosaico de Miró de La Rambla, como si fuera un tobogán.", ca: "L'estrella va saltant per les teulades de Barcelona i deixa un caminet d'espurnes grogues. Mira! S'ha parat a relliscar pel mosaic de Miró de La Rambla, com si fos un tobogan.", en: "The star hops across the rooftops of Barcelona, leaving a little trail of yellow sparks. Look! She stopped to slide on Miró's mosaic on La Rambla, as if it were a slide.", cs: "Hvězda skáče po střechách Barcelony a nechává za sebou cestičku žlutých jiskřiček. Podívej! Zastavila se a klouže po Miróově mozaice na bulváru La Rambla jako na skluzavce.", fr: "L'étoile saute sur les toits de Barcelone et laisse un petit chemin d'étincelles jaunes. Regarde ! Elle s'est arrêtée pour glisser sur la mosaïque de Miró de La Rambla, comme sur un toboggan." },
          choices: [
            { t: { es: "La llamamos bajito", ca: "La cridem fluixet", en: "We call her softly", cs: "Tiše na ni zavoláme", fr: "On l'appelle tout doucement" }, go: "n3a" },
            { t: { es: "Pedimos ayuda al pájaro del cuadro", ca: "Demanem ajuda a l'ocell del quadre", en: "We ask the painting's bird for help", cs: "Poprosíme o pomoc ptáčka z obrazu", fr: "On demande de l'aide à l'oiseau du tableau" }, go: "n3b" }
          ]
        },
        n2b: {
          text: { es: "La luna susurra: 'No estoy enfadada. Es que sin la estrella, nuestro cielo pintado se queda muy solo. Id a buscarla, pero con cariño'. ¿Cómo vamos, {name}?", ca: "La lluna xiuxiueja: 'No estic enfadada. És que sense l'estrella, el nostre cel pintat es queda molt sol. Aneu a buscar-la, però amb estima'. Com hi anem, {name}?", en: "The moon whispers: 'I am not angry. It is just that without the star, our painted sky feels very lonely. Go find her, but gently'. How do we go, {name}?", cs: "Měsíc šeptá: 'Nezlobím se. Jen je naše malované nebe bez hvězdy hrozně samo. Běžte ji najít, ale s láskou'. Jak tam půjdeme, {name}?", fr: "La lune chuchote : « Je ne suis pas fâchée. C'est juste que sans l'étoile, notre ciel peint se sent très seul. Allez la chercher, mais gentiment ». Comment on y va, {name} ?" },
          choices: [
            { t: { es: "Con el pájaro del cuadro, que la conoce", ca: "Amb l'ocell del quadre, que la coneix", en: "With the painting's bird, who knows her", cs: "S ptáčkem z obrazu, ten ji zná", fr: "Avec l'oiseau du tableau, qui la connaît" }, go: "n3b" },
            { t: { es: "Subimos por la escalera de la evasión", ca: "Pugem per l'escala de l'evasió", en: "We climb the escape ladder", cs: "Vylezeme po žebříku úniku", fr: "On monte par l'échelle de l'évasion" }, go: "n3c" }
          ]
        },
        n3a: {
          text: { es: "Os acercáis de puntillas: '¡Estrellita!'. Ella levanta sus cinco puntas, sorprendida, y se posa en lo alto de la escultura Mujer y Pájaro para escucharos mejor.", ca: "Us hi acosteu de puntetes: 'Estrelleta!'. Ella aixeca les seves cinc puntes, sorpresa, i es posa a dalt de tot de l'escultura Dona i Ocell per escoltar-vos millor.", en: "You tiptoe closer: 'Little star!'. She lifts her five points, surprised, and lands on top of the Woman and Bird sculpture to hear you better.", cs: "Přiblížíte se po špičkách: 'Hvězdičko!'. Překvapeně zvedne svých pět cípů a usadí se na vršku sochy Žena a pták, aby vás lépe slyšela.", fr: "Vous approchez sur la pointe des pieds : « Petite étoile ! ». Elle lève ses cinq branches, surprise, et se pose tout en haut de la sculpture Femme et Oiseau pour mieux vous écouter." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n3b: {
          text: { es: "El pájaro del cuadro vuela con vosotros y canta el piu-piu que la estrella conoce desde siempre. La estrellita frena en el aire: ese piu-piu suena a casa.", ca: "L'ocell del quadre vola amb vosaltres i canta el piu-piu que l'estrella coneix des de sempre. L'estrelleta frena a l'aire: aquell piu-piu sona a casa.", en: "The painting's bird flies along with you, singing the tweet-tweet the star has known forever. The little star stops mid-air: that tweet-tweet sounds like home.", cs: "Ptáček z obrazu letí s vámi a zpívá píp-píp, které hvězda zná odjakživa. Hvězdička se ve vzduchu zastaví: tohle píp-píp zní jako domov.", fr: "L'oiseau du tableau vole avec vous et chante le cui-cui que l'étoile connaît depuis toujours. La petite étoile freine en plein ciel : ce cui-cui a le son de la maison." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n3c: {
          text: { es: "Apoyáis la escalera de la evasión en el marco del cuadro y subís peldaño a peldaño hasta el cielo de verdad. ¡Desde arriba, Barcelona parece un cuadro de Miró, con lucecitas de colores!", ca: "Recolzeu l'escala de l'evasió al marc del quadre i pugeu esglaó a esglaó fins al cel de debò. Des de dalt, Barcelona sembla un quadre de Miró, amb llumetes de colors!", en: "You lean the escape ladder against the painting's frame and climb step by step into the real sky. From up there, Barcelona looks like a Miró painting, full of little coloured lights!", cs: "Opřete žebřík úniku o rám obrazu a stoupáte příčku po příčce až do opravdového nebe. Barcelona odtud shora vypadá jako Miróův obraz plný barevných světýlek!", fr: "Vous appuyez l'échelle de l'évasion contre le cadre du tableau et vous montez barreau après barreau jusqu'au vrai ciel. De là-haut, Barcelone ressemble à un tableau de Miró, plein de petites lumières colorées !" },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n4: {
          text: { es: "La estrellita lo confiesa bajito: 'Quería brillar en el cielo grande... pero echo de menos a la luna y al pájaro'. ¿Qué le proponemos, {name}?", ca: "L'estrelleta ho confessa fluixet: 'Volia brillar al cel gran... però trobo a faltar la lluna i l'ocell'. Què li proposem, {name}?", en: "The little star quietly confesses: 'I wanted to shine in the big sky... but I miss the moon and the bird'. What shall we suggest, {name}?", cs: "Hvězdička se tiše přizná: 'Chtěla jsem zářit na velkém nebi... ale stýská se mi po měsíci a ptáčkovi'. Co jí navrhneme, {name}?", fr: "La petite étoile avoue tout bas : « Je voulais briller dans le grand ciel... mais la lune et l'oiseau me manquent ». Qu'est-ce qu'on lui propose, {name} ?" },
          choices: [
            { t: { es: "¡Una noche de fiesta en el cielo y a casa!", ca: "Una nit de festa al cel i cap a casa!", en: "One party night in the sky, then home!", cs: "Jednu noc oslavy na nebi a pak domů!", fr: "Une nuit de fête dans le ciel et à la maison !" }, go: "n5a" },
            { t: { es: "Volver ya y mirar el cielo por la ventana", ca: "Tornar ja i mirar el cel per la finestra", en: "Go back now and watch the sky from the window", cs: "Vrátit se hned a dívat se na nebe oknem", fr: "Rentrer maintenant et regarder le ciel par la fenêtre" }, go: "n5b" }
          ]
        },
        n5a: {
          text: { es: "¡Fiesta! La estrellita baila con las estrellas del cielo y el pájaro hace de orquesta con su piu-piu. Al amanecer, bosteza: 'Ya está. Ahora sé cómo brilla el cielo... y quiero mi cuadro'.", ca: "Festa! L'estrelleta balla amb les estrelles del cel i l'ocell fa d'orquestra amb el seu piu-piu. A l'alba, badalla: 'Ja està. Ara sé com brilla el cel... i vull el meu quadre'.", en: "Party time! The little star dances with the sky stars while the bird plays the band with his tweet-tweet. At dawn she yawns: 'Done. Now I know how the sky shines... and I want my painting back'.", cs: "Oslava! Hvězdička tančí s hvězdami na nebi a ptáček dělá kapelu svým píp-píp. Za svítání zívne: 'A dost. Teď už vím, jak září nebe... a chci svůj obraz'.", fr: "La fête ! La petite étoile danse avec les étoiles du ciel et l'oiseau fait l'orchestre avec son cui-cui. À l'aube, elle bâille : « Voilà. Maintenant je sais comment brille le ciel... et je veux mon tableau »." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e1" }
          ]
        },
        n5b: {
          text: { es: "De camino al museo, la estrellita va contando todo lo que ha visto. La luna la espera sonriendo, y el vigilante del museo promete dejar la ventana un poquito abierta cada noche.", ca: "De camí al museu, l'estrelleta va explicant tot el que ha vist. La lluna l'espera somrient, i el vigilant del museu promet deixar la finestra una miqueta oberta cada nit.", en: "On the way to the museum, the little star tells you everything she saw. The moon waits for her with a smile, and the museum guard promises to leave the window open a tiny bit every night.", cs: "Cestou do muzea hvězdička vypráví všechno, co viděla. Měsíc na ni s úsměvem čeká a hlídač muzea slíbí, že bude každou noc nechávat okno kousínek otevřené.", fr: "Sur le chemin du musée, la petite étoile raconte tout ce qu'elle a vu. La lune l'attend en souriant, et le gardien du musée promet de laisser la fenêtre un petit peu ouverte chaque nuit." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e2" }
          ]
        },
        e1: {
          end: true,
          text: { es: "La estrellita vuelve a su lienzo con un brillo nuevo, de los que solo se aprenden viajando. Ahora, quien mira el cuadro dice: 'esa estrella brilla distinto'. Y tú sabes por qué, {name}.", ca: "L'estrelleta torna a la seva tela amb una brillantor nova, de les que només s'aprenen viatjant. Ara, qui mira el quadre diu: 'aquesta estrella brilla diferent'. I tu saps per què, {name}.", en: "The little star returns to her canvas with a brand-new sparkle, the kind you only learn by travelling. Now, whoever looks at the painting says: 'that star shines differently'. And you know why, {name}.", cs: "Hvězdička se vrátí na své plátno s novým leskem, jaký se člověk naučí jen na cestách. Kdo se teď na obraz podívá, řekne: 'ta hvězda září nějak jinak'. A ty víš proč, {name}.", fr: "La petite étoile revient sur sa toile avec un éclat tout neuf, de ceux qu'on apprend seulement en voyageant. Maintenant, qui regarde le tableau dit : « cette étoile brille autrement ». Et toi, tu sais pourquoi, {name}." }
        },
        e2: {
          end: true,
          text: { es: "La estrellita brilla otra vez en su cuadro, junto a la luna y el pájaro. Y cada noche, por la ventana entreabierta, el cielo de verdad y el cielo pintado se dan las buenas noches. Gracias por acompañarla, {name}.", ca: "L'estrelleta brilla un altre cop al seu quadre, al costat de la lluna i l'ocell. I cada nit, per la finestra mig oberta, el cel de debò i el cel pintat es donen les bones nits. Gràcies per acompanyar-la, {name}.", en: "The little star shines in her painting again, next to the moon and the bird. And every night, through the half-open window, the real sky and the painted sky wish each other good night. Thanks for walking her home, {name}.", cs: "Hvězdička zase září ve svém obraze, vedle měsíce a ptáčka. A každou noc si pootevřeným oknem opravdové nebe a namalované nebe popřejí dobrou noc. Díky, že jsi ji doprovodila domů, {name}.", fr: "La petite étoile brille à nouveau dans son tableau, à côté de la lune et de l'oiseau. Et chaque nuit, par la fenêtre entrouverte, le vrai ciel et le ciel peint se souhaitent bonne nuit. Merci de l'avoir raccompagnée, {name}." }
        }
      }
    },
    {
      id: "pajaro", emoji: "🐦", start: "n1",
      title: { es: "El pájaro de tres colores", ca: "L'ocell de tres colors", en: "The Three-Colour Bird", cs: "Pták tří barev", fr: "L'oiseau aux trois couleurs" },
      nodes: {
        n1: {
          text: { es: "En el taller de Miró vive un pájaro pintado con tres colores: rojo, azul y amarillo. Esta mañana, una ráfaga de viento ha entrado por la ventana ¡y se ha llevado su amarillo! Sin él, su canción suena apagada. ¿Dónde lo buscamos, {name}?", ca: "Al taller de Miró hi viu un ocell pintat amb tres colors: vermell, blau i groc. Aquest matí, una ràfega de vent ha entrat per la finestra i s'ha endut el seu groc! Sense ell, la seva cançó sona apagada. On el busquem, {name}?", en: "In Miró's workshop lives a bird painted with three colours: red, blue and yellow. This morning, a gust of wind came through the window and blew his yellow away! Without it, his song sounds dull. Where do we look, {name}?", cs: "V Miróově ateliéru bydlí pták namalovaný třemi barvami: červenou, modrou a žlutou. Dnes ráno vlétl oknem poryv větru a odnesl mu žlutou! Bez ní zní jeho písnička smutně. Kde ji budeme hledat, {name}?", fr: "Dans l'atelier de Miró vit un oiseau peint de trois couleurs : rouge, bleu et jaune. Ce matin, un coup de vent est entré par la fenêtre et a emporté son jaune ! Sans lui, sa chanson sonne éteinte. Où est-ce qu'on le cherche, {name} ?" },
          choices: [
            { t: { es: "En el campo de Mont-roig", ca: "Al camp de Mont-roig", en: "In the fields of Mont-roig", cs: "Na polích u Mont-roig", fr: "Dans les champs de Mont-roig" }, go: "n2a" },
            { t: { es: "En el taller, entre los botes de pintura", ca: "Al taller, entre els pots de pintura", en: "In the workshop, among the paint pots", cs: "V ateliéru mezi kelímky s barvami", fr: "Dans l'atelier, parmi les pots de peinture" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "El campo está lleno de amarillos: espigas, limones y flores. Pero ninguno es el suyo. Las espigas susurran: 'El viento jugaba con un amarillo que brillaba distinto... y se fue hacia arriba, hacia el sol'.", ca: "El camp és ple de grocs: espigues, llimones i flors. Però cap no és el seu. Les espigues xiuxiuegen: 'El vent jugava amb un groc que brillava diferent... i se'n va anar cap amunt, cap al sol'.", en: "The fields are full of yellows: wheat, lemons and flowers. But none of them is his. The wheat whispers: 'The wind was playing with a yellow that shone differently... and it flew up, towards the sun'.", cs: "Pole jsou plná žluté: klasy, citrony a květiny. Ale žádná není ta jeho. Klasy šeptají: 'Vítr si hrál se žlutou, která zářila jinak... a odletěla nahoru, ke slunci'.", fr: "Les champs sont pleins de jaunes : des épis, des citrons et des fleurs. Mais aucun n'est le sien. Les épis chuchotent : « Le vent jouait avec un jaune qui brillait autrement... et il est parti vers le haut, vers le soleil »." },
          choices: [
            { t: { es: "Preguntamos al sol", ca: "Preguntem al sol", en: "We ask the sun", cs: "Zeptáme se slunce", fr: "On demande au soleil" }, go: "n3a" },
            { t: { es: "Pedimos a las espigas un poquito de su amarillo", ca: "Demanem a les espigues una miqueta del seu groc", en: "We ask the wheat for a bit of its yellow", cs: "Poprosíme klasy o trošku jejich žluté", fr: "On demande aux épis un peu de leur jaune" }, go: "n3b" }
          ]
        },
        n2b: {
          text: { es: "En el taller, el bote de amarillo está vacío y hay huellitas de viento por todas partes. Debajo del caballete encontráis una notita escrita con purpurina.", ca: "Al taller, el pot de groc és buit i hi ha petjadetes de vent per tot arreu. Sota el cavallet trobeu una noteta escrita amb purpurina.", en: "In the workshop, the yellow pot is empty and there are little wind footprints everywhere. Under the easel you find a tiny note written in glitter.", cs: "V ateliéru je kelímek se žlutou prázdný a všude jsou stopičky větru. Pod malířským stojanem najdete lísteček napsaný třpytkami.", fr: "Dans l'atelier, le pot de jaune est vide et il y a des petites traces de vent partout. Sous le chevalet, vous trouvez un petit mot écrit avec des paillettes." },
          choices: [
            { t: { es: "Leer la nota", ca: "Llegir la nota", en: "Read the note", cs: "Přečíst lísteček", fr: "Lire le mot" }, go: "n2c" }
          ]
        },
        n2c: {
          text: { es: "La nota dice: 'Estoy jugando con el viento y el sol. ¡Es que ahí arriba se brilla tanto! Firmado: el Amarillo'. ¿Qué hacemos, {name}?", ca: "La nota diu: 'Estic jugant amb el vent i el sol. És que allà dalt s'hi brilla tant! Signat: el Groc'. Què fem, {name}?", en: "The note says: 'I am playing with the wind and the sun. It is just that up there you get to shine so much! Signed: Yellow'. What do we do, {name}?", cs: "Na lístečku stojí: 'Hraju si s větrem a sluncem. Tam nahoře se totiž tak krásně září! Podepsána: Žlutá'. Co uděláme, {name}?", fr: "Le mot dit : « Je joue avec le vent et le soleil. C'est que là-haut, on brille tellement ! Signé : le Jaune ». Qu'est-ce qu'on fait, {name} ?" },
          choices: [
            { t: { es: "Subimos a hablar con el sol", ca: "Pugem a parlar amb el sol", en: "We go up to talk to the sun", cs: "Vydáme se nahoru za sluncem", fr: "On monte parler au soleil" }, go: "n3a" },
            { t: { es: "Esperamos a la noche y preguntamos a las estrellas", ca: "Esperem la nit i preguntem a les estrelles", en: "We wait for night and ask the stars", cs: "Počkáme do noci a zeptáme se hvězd", fr: "On attend la nuit et on demande aux étoiles" }, go: "n3c" }
          ]
        },
        n3a: {
          text: { es: "El sol se ríe con sus rayos: 'Aquí está vuestro amarillo, jugando conmigo. Dice que en el pecho del pájaro casi no se le veía'. El amarillo asoma, un poquito avergonzado.", ca: "El sol riu amb els seus raigs: 'Aquí teniu el vostre groc, jugant amb mi. Diu que al pit de l'ocell gairebé no se'l veia'. El groc treu el cap, una miqueta avergonyit.", en: "The sun laughs with all its rays: 'Here is your yellow, playing with me. He says nobody really saw him on the bird's chest'. Yellow peeks out, a little embarrassed.", cs: "Slunce se směje všemi paprsky: 'Tady je vaše žlutá, hraje si se mnou. Prý ji na ptáčkově bříšku skoro nebylo vidět'. Žlutá vykoukne, trochu zahanbená.", fr: "Le soleil rit avec tous ses rayons : « Voilà votre jaune, il joue avec moi. Il dit que sur le ventre de l'oiseau, on ne le voyait presque pas ». Le jaune sort la tête, un peu gêné." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n3b: {
          text: { es: "Las espigas os regalan un puñadito de amarillo de trigo. El pájaro se lo prueba... le queda bonito, pero no canta igual: no es SU amarillo. Justo entonces, allá arriba, algo brilla y empieza a bajar volando.", ca: "Les espigues us regalen un grapadet de groc de blat. L'ocell se'l prova... li queda bonic, però no canta igual: no és el SEU groc. Just llavors, allà dalt, alguna cosa brilla i comença a baixar volant.", en: "The wheat gives you a little handful of wheat-yellow. The bird tries it on... it looks nice, but his song is not the same: it is not HIS yellow. Just then, way up high, something sparkles and starts flying down.", cs: "Klasy vám darují hrstičku obilné žluté. Ptáček si ji zkusí... sluší mu, ale písnička nezní stejně: není to JEHO žlutá. A právě v tu chvíli se vysoko nahoře něco zatřpytí a snáší se dolů.", fr: "Les épis vous offrent une petite poignée de jaune de blé. L'oiseau l'essaie... c'est joli, mais sa chanson n'est pas pareille : ce n'est pas SON jaune. Juste à ce moment-là, tout là-haut, quelque chose brille et commence à descendre." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n3c: {
          text: { es: "Las estrellas se encienden una a una: 'Un amarillo bailón pasó esta mañana hacia el sol'. Y le mandan un mensaje brillante por el cielo: 'tu pájaro te espera'. Al alba, algo dorado baja volando.", ca: "Les estrelles s'encenen una a una: 'Un groc ballador ha passat aquest matí cap al sol'. I li envien un missatge brillant pel cel: 'el teu ocell t'espera'. A l'alba, alguna cosa daurada baixa volant.", en: "The stars light up one by one: 'A dancing yellow flew past this morning, heading for the sun'. And they send a shiny message across the sky: 'your bird is waiting for you'. At dawn, something golden comes flying down.", cs: "Hvězdy se rozsvěcují jedna po druhé: 'Nějaká roztančená žlutá letěla ráno ke slunci'. A pošlou po nebi zářivý vzkaz: 'tvůj ptáček na tebe čeká'. Za svítání se něco zlatého snáší dolů.", fr: "Les étoiles s'allument une à une : « Un jaune danseur est passé ce matin vers le soleil ». Et elles envoient un message brillant à travers le ciel : « ton oiseau t'attend ». À l'aube, quelque chose de doré descend en volant." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n4: {
          text: { es: "El amarillo vuelve junto al pájaro: 'Perdona que me fuera sin avisar. Solo quería brillar un poquito yo solo'. El pájaro lo abraza con las alas. ¿Dónde brillará ahora, {name}?", ca: "El groc torna amb l'ocell: 'Perdona que marxés sense avisar. Només volia brillar una miqueta jo sol'. L'ocell l'abraça amb les ales. On brillarà ara, {name}?", en: "Yellow comes back to the bird: 'Sorry I left without telling you. I just wanted to shine on my own for a bit'. The bird hugs him with his wings. Where will he shine now, {name}?", cs: "Žlutá se vrátí k ptáčkovi: 'Promiň, že jsem odletěla bez rozloučení. Jen jsem chtěla chvilku zářit sama'. Ptáček ji obejme křídly. Kde bude zářit teď, {name}?", fr: "Le jaune revient près de l'oiseau : « Pardon d'être parti sans prévenir. Je voulais juste briller un petit peu tout seul ». L'oiseau le serre dans ses ailes. Où va-t-il briller maintenant, {name} ?" },
          choices: [
            { t: { es: "En su pecho, como siempre, ¡pero más grande!", ca: "Al seu pit, com sempre, però més gran!", en: "On his chest, like always, but bigger!", cs: "Na bříšku jako vždycky, ale větší!", fr: "Sur son ventre, comme toujours, mais en plus grand !" }, go: "e1" },
            { t: { es: "Mitad en el ala, mitad en un solecito nuevo", ca: "Meitat a l'ala, meitat en un solet nou", en: "Half on the wing, half in a brand-new little sun", cs: "Půlka na křídle, půlka v novém sluníčku", fr: "Moitié sur l'aile, moitié dans un petit soleil tout neuf" }, go: "e2" }
          ]
        },
        e1: {
          end: true,
          text: { es: "El pájaro luce su amarillo en el pecho, más grande y más brillante que nunca: los colores, cuando van y vuelven, brillan el doble. Y su canción vuelve a sonar entera: ¡piu-piu, piooo! Bien buscado, {name}.", ca: "L'ocell llueix el seu groc al pit, més gran i més brillant que mai: els colors, quan van i tornen, brillen el doble. I la seva cançó torna a sonar sencera: piu-piu, piooo! Ben buscat, {name}.", en: "The bird wears his yellow on his chest, bigger and brighter than ever: colours that go away and come back shine twice as much. And his song sounds whole again: tweet-tweet, tweeeet! Well searched, {name}.", cs: "Ptáček nosí svou žlutou na bříšku, větší a zářivější než kdy dřív: barvy, které odletí a vrátí se, září dvakrát tolik. A jeho písnička zase zní celá: píp-píp, pííp! Dobrá práce, {name}.", fr: "L'oiseau porte son jaune sur le ventre, plus grand et plus brillant que jamais : les couleurs qui partent et qui reviennent brillent deux fois plus. Et sa chanson sonne à nouveau entière : cui-cui, cuiii ! Bien cherché, {name} !" }
        },
        e2: {
          end: true,
          text: { es: "Deciden compartirlo: un poquito en el ala y otro poquito en un sol pequeñito que ahora vive en la esquina del cuadro. Desde entonces, el pájaro nunca canta solo: el solecito le hace los coros. Compartir un color es tener dos brillos, {name}.", ca: "Decideixen compartir-lo: una miqueta a l'ala i una altra miqueta en un sol petitó que ara viu al racó del quadre. Des de llavors, l'ocell no canta mai sol: el solet li fa els cors. Compartir un color és tenir dues brillantors, {name}.", en: "They decide to share it: a little on the wing and a little in a tiny sun that now lives in the corner of the painting. Since then, the bird never sings alone: the little sun sings backup. Sharing a colour means shining twice, {name}.", cs: "Rozhodnou se ji rozdělit: kousek na křídlo a kousek do malinkého slunce, které teď bydlí v rohu obrazu. Od té doby ptáček nikdy nezpívá sám: sluníčko mu dělá sbor. Rozdělit se o barvu znamená zářit dvakrát, {name}.", fr: "Ils décident de le partager : un peu sur l'aile et un peu dans un tout petit soleil qui vit maintenant dans le coin du tableau. Depuis, l'oiseau ne chante jamais seul : le petit soleil fait les chœurs. Partager une couleur, c'est briller deux fois, {name}." }
        }
      }
    },
    {
      id: "escalera", emoji: "🪜", start: "n1",
      title: { es: "La escalera hacia la luna", ca: "L'escala cap a la lluna", en: "The Ladder to the Moon", cs: "Žebřík na měsíc", fr: "L'échelle vers la lune" },
      nodes: {
        n1: {
          text: { es: "En el cuadro de la noche, la luna está pálida y no quiere salir. A los pies del lienzo espera la escalera de la evasión, la escalera mágica de Miró que sube hasta el cielo. ¿Subimos ya o preparamos un regalo, {name}?", ca: "Al quadre de la nit, la lluna està pàl·lida i no vol sortir. Als peus de la tela espera l'escala de l'evasió, l'escala màgica de Miró que puja fins al cel. Pugem ja o preparem un regal, {name}?", en: "In the night painting, the moon looks pale and does not want to come out. At the foot of the canvas waits the escape ladder, Miró's magic ladder that climbs all the way to the sky. Do we climb now or prepare a present first, {name}?", cs: "V nočním obraze je měsíc bledý a nechce vyjít. U paty plátna čeká žebřík úniku, Miróův kouzelný žebřík, který vede až do nebe. Polezeme hned, nebo nejdřív přichystáme dárek, {name}?", fr: "Dans le tableau de la nuit, la lune est toute pâle et ne veut pas sortir. Au pied de la toile attend l'échelle de l'évasion, l'échelle magique de Miró qui monte jusqu'au ciel. On monte tout de suite ou on prépare un cadeau, {name} ?" },
          choices: [
            { t: { es: "¡Subimos ahora mismo!", ca: "Pugem ara mateix!", en: "We climb right now!", cs: "Lezeme hned!", fr: "On monte tout de suite !" }, go: "n2a" },
            { t: { es: "Preparamos un regalo primero", ca: "Preparem un regal primer", en: "We prepare a present first", cs: "Nejdřív přichystáme dárek", fr: "On prépare d'abord un cadeau" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "Peldaño a peldaño, el suelo se va quedando pequeñito. A mitad de camino, una estrella está enredada en una línea negra que se ha hecho un nudo. ¿Qué hacemos?", ca: "Esglaó a esglaó, el terra es va quedant petitó. A mig camí, una estrella està enredada en una línia negra que s'ha fet un nus. Què fem?", en: "Step by step, the ground gets smaller and smaller. Halfway up, a star is tangled in a black line that has tied itself into a knot. What do we do?", cs: "Příčku po příčce se země zmenšuje. V půlce cesty visí hvězda zamotaná do černé čáry, která se zauzlovala. Co uděláme?", fr: "Barreau après barreau, le sol devient tout petit. À mi-chemin, une étoile est emmêlée dans une ligne noire qui a fait un nœud. Qu'est-ce qu'on fait ?" },
          choices: [
            { t: { es: "La ayudamos a desenredarse", ca: "L'ajudem a desenredar-se", en: "We help her untangle", cs: "Pomůžeme jí vymotat se", fr: "On l'aide à se démêler" }, go: "n3a" },
            { t: { es: "Seguimos subiendo deprisa", ca: "Continuem pujant de pressa", en: "We keep climbing fast", cs: "Lezeme rychle dál", fr: "On continue à monter vite" }, go: "n3b" }
          ]
        },
        n2b: {
          text: { es: "En el taller elegís regalos para la luna: un poquito de amarillo calentito del bote y una pluma suave del pájaro. La mochila queda lista y huele a pintura fresca.", ca: "Al taller trieu regals per a la lluna: una miqueta de groc calentó del pot i una ploma suau de l'ocell. La motxilla queda a punt i fa olor de pintura fresca.", en: "In the workshop you pick presents for the moon: a bit of warm yellow from the pot and a soft feather from the bird. The backpack is ready and smells of fresh paint.", cs: "V ateliéru vyberete pro měsíc dárky: trochu teplé žluté z kelímku a měkké pírko od ptáčka. Batůžek je připravený a voní čerstvou barvou.", fr: "Dans l'atelier, vous choisissez des cadeaux pour la lune : un peu de jaune tout chaud du pot et une plume douce de l'oiseau. Le sac est prêt et sent la peinture fraîche." },
          choices: [
            { t: { es: "¡A la escalera!", ca: "Cap a l'escala!", en: "To the ladder!", cs: "Na žebřík!", fr: "À l'échelle !" }, go: "n3c" }
          ]
        },
        n3a: {
          text: { es: "Con mucho cuidado deshacéis el nudo de la línea. La estrella se estira: '¡Gracias! Subo con vosotros: conozco el camino y de noche ilumino genial'.", ca: "Amb molt de compte desfeu el nus de la línia. L'estrella s'estira: 'Gràcies! Pujo amb vosaltres: conec el camí i de nit il·lumino genial'.", en: "Very carefully you undo the knot in the line. The star stretches: 'Thank you! I will climb with you: I know the way and at night I light it up great'.", cs: "Opatrně rozvážete uzel na čáře. Hvězda se protáhne: 'Děkuju! Polezu s vámi: znám cestu a v noci krásně svítím'.", fr: "Avec beaucoup de soin, vous défaites le nœud de la ligne. L'étoile s'étire : « Merci ! Je monte avec vous : je connais le chemin et la nuit, j'éclaire super bien »." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n3b: {
          text: { es: "Subís tan deprisa que una nube gris os envuelve y no veis nada de nada. Menos mal que el pájaro de Miró aparece y os guía con su piu-piu hasta el buen camino. A veces conviene ir despacito.", ca: "Pugeu tan de pressa que un núvol gris us embolcalla i no veieu res de res. Sort que l'ocell de Miró apareix i us guia amb el seu piu-piu fins al bon camí. De vegades convé anar a poc a poc.", en: "You climb so fast that a grey cloud wraps around you and you cannot see a thing. Luckily Miró's bird shows up and guides you back to the right path with his tweet-tweet. Sometimes slow is better.", cs: "Lezete tak rychle, že vás zahalí šedý mrak a nevidíte vůbec nic. Naštěstí se objeví Miróův ptáček a svým píp-píp vás dovede na správnou cestu. Někdy je lepší jít pomaličku.", fr: "Vous montez si vite qu'un nuage gris vous enveloppe et vous ne voyez plus rien du tout. Heureusement, l'oiseau de Miró apparaît et vous guide avec son cui-cui jusqu'au bon chemin. Parfois, il vaut mieux aller doucement." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n3c: {
          text: { es: "Con los regalos en la mochila subís tranquilos, peldaño a peldaño. La pluma os hace cosquillas en la nariz y el amarillo calienta como un pastelito recién hecho.", ca: "Amb els regals a la motxilla pugeu tranquils, esglaó a esglaó. La ploma us fa pessigolles al nas i el groc escalfa com un pastisset acabat de fer.", en: "With the presents in the backpack you climb calmly, step by step. The feather tickles your nose and the yellow feels warm like a freshly baked cake.", cs: "S dárky v batůžku stoupáte v klidu, příčku po příčce. Pírko vás šimrá na nose a žlutá hřeje jako čerstvě upečený koláček.", fr: "Avec les cadeaux dans le sac, vous montez tranquillement, barreau après barreau. La plume vous chatouille le nez et le jaune réchauffe comme un petit gâteau tout juste sorti du four." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n4: {
          text: { es: "Arriba del todo está la luna, pálida y con la voz bajita: 'Hace mucho que nadie sube a verme. Pensaba que ya no os gustaba mi luz'. ¿Qué hacemos, {name}?", ca: "A dalt de tot hi ha la lluna, pàl·lida i amb la veu baixeta: 'Fa molt que ningú no puja a veure'm. Em pensava que ja no us agradava la meva llum'. Què fem, {name}?", en: "At the very top is the moon, pale and speaking softly: 'Nobody has climbed up to see me in a long time. I thought you did not like my light anymore'. What do we do, {name}?", cs: "Úplně nahoře je měsíc, bledý a s tichým hláskem: 'Už dlouho za mnou nikdo nevylezl. Myslel jsem, že se vám moje světlo už nelíbí'. Co uděláme, {name}?", fr: "Tout en haut, il y a la lune, pâle et avec une petite voix : « Ça fait longtemps que personne ne monte me voir. Je croyais que ma lumière ne vous plaisait plus ». Qu'est-ce qu'on fait, {name} ?" },
          choices: [
            { t: { es: "La abrigamos y le decimos cuánto la queremos", ca: "L'abriguem i li diem com l'estimem", en: "We tuck her in and tell her how much we love her", cs: "Zachumláme ho a řekneme mu, jak ho máme rádi", fr: "On la couvre et on lui dit combien on l'aime" }, go: "n5a" },
            { t: { es: "La invitamos a bajar la escalera con nosotros", ca: "La convidem a baixar l'escala amb nosaltres", en: "We invite her down the ladder with us", cs: "Pozveme ho dolů po žebříku s námi", fr: "On l'invite à descendre l'échelle avec nous" }, go: "n5b" }
          ]
        },
        n5a: {
          text: { es: "Le ponéis el amarillo de bufanda y la pluma de almohada, y le contáis que sin ella el cuadro no es cuadro. La luna se va encendiendo poquito a poco, como una lamparita feliz.", ca: "Li poseu el groc de bufanda i la ploma de coixí, i li expliqueu que sense ella el quadre no és quadre. La lluna es va encenent a poc a poc, com una llumeta feliç.", en: "You wrap the yellow around her like a scarf and give her the feather as a pillow, and you tell her the painting is not a painting without her. Little by little the moon lights up, like a happy night lamp.", cs: "Omotáte mu žlutou jako šálu, pírko mu dáte za polštářek a povíte mu, že bez něj obraz není obraz. Měsíc se kousek po kousku rozsvěcuje jako spokojená lampička.", fr: "Vous lui mettez le jaune en écharpe et la plume en oreiller, et vous lui racontez que sans elle, le tableau n'est pas un tableau. La lune s'allume petit à petit, comme une petite lampe heureuse." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e1" }
          ]
        },
        n5b: {
          text: { es: "La luna baja la escalera con vosotros, peldaño a peldaño, mirándolo todo con los ojos muy abiertos: el taller, los pinceles, los botes de colores. '¡Así que aquí me pintaron!', ríe.", ca: "La lluna baixa l'escala amb vosaltres, esglaó a esglaó, mirant-ho tot amb els ulls molt oberts: el taller, els pinzells, els pots de colors. 'Així que aquí em van pintar!', riu.", en: "The moon climbs down the ladder with you, step by step, looking at everything wide-eyed: the workshop, the brushes, the pots of colours. 'So this is where they painted me!', she laughs.", cs: "Měsíc slézá po žebříku s vámi, příčku po příčce, a všechno si prohlíží s očima dokořán: ateliér, štětce, kelímky s barvami. 'Tak tady mě namalovali!', směje se.", fr: "La lune descend l'échelle avec vous, barreau après barreau, en regardant tout avec de grands yeux : l'atelier, les pinceaux, les pots de couleurs. « Alors c'est ici qu'on m'a peinte ! », rit-elle." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e2" }
          ]
        },
        e1: {
          end: true,
          text: { es: "Esa noche la luna brilla tanto que las estrellas le piden permiso para acercarse. Y desde entonces, cada vez que alguien mira el cuadro con cariño, la luna brilla un poquito más. Los mimos también iluminan, {name}.", ca: "Aquella nit la lluna brilla tant que les estrelles li demanen permís per acostar-s'hi. I des de llavors, cada cop que algú mira el quadre amb estima, la lluna brilla una miqueta més. Els mimos també il·luminen, {name}.", en: "That night the moon shines so bright that the stars ask permission to come closer. And ever since, whenever someone looks at the painting with love, the moon glows a little brighter. Cuddles light things up too, {name}.", cs: "Tu noc měsíc září tak silně, že se hvězdy ptají, jestli smějí blíž. A od té doby, kdykoli se někdo na obraz podívá s láskou, měsíc zazáří o kousek víc. I mazlení umí svítit, {name}.", fr: "Cette nuit-là, la lune brille si fort que les étoiles demandent la permission de s'approcher. Et depuis, chaque fois que quelqu'un regarde le tableau avec tendresse, la lune brille un petit peu plus. Les câlins aussi éclairent, {name}." }
        },
        e2: {
          end: true,
          text: { es: "Después del paseo, la luna vuelve a su cielo pintado con un montón de cosas nuevas que contar. Las estrellas la escuchan hasta quedarse dormidas. Y la escalera se queda apoyada en el cuadro, por si algún día quieres subir tú, {name}.", ca: "Després del passeig, la lluna torna al seu cel pintat amb un munt de coses noves per explicar. Les estrelles l'escolten fins a adormir-se. I l'escala es queda recolzada al quadre, per si algun dia hi vols pujar tu, {name}.", en: "After the walk, the moon returns to her painted sky with lots of new things to tell. The stars listen until they fall asleep. And the ladder stays leaning against the painting, in case one day YOU want to climb it, {name}.", cs: "Po procházce se měsíc vrátí na své malované nebe s hromadou nových zážitků. Hvězdy ho poslouchají, dokud neusnou. A žebřík zůstane opřený o obraz, kdyby sis jednou chtěla vylézt nahoru ty, {name}.", fr: "Après la promenade, la lune retourne dans son ciel peint avec plein de nouvelles choses à raconter. Les étoiles l'écoutent jusqu'à s'endormir. Et l'échelle reste appuyée contre le tableau, au cas où un jour TOI, tu voudrais monter, {name}." }
        }
      }
    }
  ],

  /* ---------- KARAOKE ---------- */
  songs: [
    { emoji: "🔴",
      title: { es: "Los tres colores de Miró", ca: "Els tres colors de Miró", en: "The Three Colours of Miró", cs: "Tři barvy pana Miróa", fr: "Les trois couleurs de Miró" },
      lines: [
        { es: "Rojo como el sol que baila sin parar,", ca: "Vermell com el sol que balla sense parar,", en: "Red is the sun that dances all day,", cs: "Červená je slunce, tančí celý den,", fr: "Rouge est le soleil qui danse gaiement," },
        { es: "azul como la noche encima del mar.", ca: "blau com la nit a sobre del mar.", en: "blue is the night sea far away.", cs: "modrá je noc a moře jako sen.", fr: "bleu est la nuit sur l'océan." },
        { es: "Amarillo brilla como un gran limón,", ca: "El groc brilla com una gran llimona,", en: "Yellow is shining, a lemon so bright,", cs: "Žlutá září jako citron velikán,", fr: "Le jaune brille comme un gros citron," },
        { es: "tres colores pintan esta canción.", ca: "tres colors canten i la cançó sona.", en: "three little colours painting just right.", cs: "barvičky malují ze všech stran.", fr: "trois couleurs chantent la chanson." },
        { es: "La línea negra sale a pasear,", ca: "La línia negra surt a passejar,", en: "The thick black line goes out for a walk,", cs: "Tlustá černá čára píše do nebe,", fr: "La ligne noire part se promener," },
        { es: "dibuja una estrella y un pájaro al volar.", ca: "dibuixa un ocell que es posa a volar.", en: "it draws a star and a bird that can talk.", cs: "hvězdu a ptáčka jen pro tebe.", fr: "dessine une étoile et un oiseau léger." },
        { es: "Verde en la hierba, ¡todo es de color!", ca: "Verd a l'herba, tot és de color!", en: "Green on the grass, colours say hello,", cs: "Zelená je louka, barviček je moc,", fr: "Vert sur l'herbe, tout est en couleur," },
        { es: "¡Así pintaba el señor Miró!", ca: "Així pintava el senyor Miró!", en: "that is how they painted with Señor Miró!", cs: "pan Miró maloval den i noc!", fr: "Monsieur Miró peignait le bonheur !" }
      ] },
    { emoji: "🌙",
      title: { es: "La nana de la luna de Miró", ca: "La cançó de bressol de la lluna de Miró", en: "Miró's Moon Lullaby", cs: "Ukolébavka pro Miróův měsíc", fr: "La berceuse de la lune de Miró" },
      lines: [
        { es: "Duerme, lunita del cuadro azul,", ca: "Dorm, lluneta del quadre blau,", en: "Sleep, little moon in your picture of blue,", cs: "Spinkej, měsíčku, v obrázku spíš,", fr: "Dors, petite lune du tableau bleu," },
        { es: "el pájaro negro te canta el ru-ru.", ca: "l'ocell negre et canta suau.", en: "the small black bird sings softly to you.", cs: "černý ptáček zpívá tiše, slyšíš?", fr: "l'oiseau tout noir chante pour tes yeux." },
        { es: "Las estrellas bailan sin hacer ruido,", ca: "Les estrelles ballen a poc a poc,", en: "The stars are dancing on quiet tiptoes,", cs: "Hvězdičky tančí po špičkách,", fr: "Les étoiles dansent sur la pointe des pieds," },
        { es: "el sol rojo ya se ha dormido.", ca: "el sol es tapa amb un llençol groc.", en: "the big red sun is starting to doze.", cs: "červené slunce zívá v peřinkách.", fr: "le soleil rouge va se coucher." },
        { es: "La línea negra se enrosca a soñar,", ca: "La línia negra es cargola a dormir,", en: "The long black line curls up really tight,", cs: "Dlouhá černá čára stočila se v klubíčko,", fr: "La ligne noire s'enroule sans bruit," },
        { es: "como un caracol se va a acurrucar.", ca: "com un cargolet a prop del jardí.", en: "just like a snail saying good night.", cs: "spinká vedle hvězdy jako sluníčko.", fr: "comme un escargot qui dit bonne nuit." },
        { es: "Cierra los ojitos, todo es de color,", ca: "Tanca els ullets, tot és de color,", en: "Close your little eyes, colours whisper low,", cs: "Zavři očka, barvy tiše sní,", fr: "Ferme tes petits yeux, les couleurs font dodo," },
        { es: "buenas noches dice el señor Miró.", ca: "bona nit et diu el senyor Miró.", en: "good night, says the painter called Miró.", cs: "pan Miró ti šeptá: dobrou noc, spi.", fr: "bonne nuit, chuchote Monsieur Miró." }
      ] },
    { emoji: "🐦",
      title: { es: "El baile del pájaro", ca: "El ball de l'ocell", en: "The Bird Dance", cs: "Ptáčkův tanec", fr: "La danse de l'oiseau" },
      lines: [
        { es: "El pájaro de Miró se pone a bailar,", ca: "L'ocell de Miró es posa a ballar,", en: "The little bird of Miró dances around,", cs: "Ptáček pana Miróa tancuje dnes,", fr: "L'oiseau de Miró se met à danser," },
        { es: "con un ala roja y otra de mar.", ca: "amb una ala roja i una de mar.", en: "one wing up high, one wing on the ground.", cs: "skáče a zpívá, je z toho ples.", fr: "avec ses deux ailes pour voler." },
        { es: "Da un salto pequeño, da un salto gigante,", ca: "Fa un salt petitó, fa un salt gegant,", en: "A tiny small jump, a giant big hop,", cs: "Malinký skoček, obrovský skok,", fr: "Un tout petit saut, un saut de géant," },
        { es: "mueve la colita como un elegante.", ca: "mou la cueta i va endavant.", en: "it shakes its tail and it just cannot stop.", cs: "ocásek vrtí se celý rok.", fr: "il remue sa queue en avant." },
        { es: "Piu-piu canta fuerte, piu-piu otra vez,", ca: "Piu-piu canta fort, piu-piu un cop més,", en: "Tweet-tweet it sings, tweet-tweet once more,", cs: "Píp-píp si zpívá, píp-píp a dost,", fr: "Cui-cui il chante, cui-cui encore," },
        { es: "baila con la estrella y cuenta hasta tres.", ca: "balla amb l'estrella i compta fins a tres.", en: "it dances with the star across the floor.", cs: "s hvězdičkou tančí pro radost.", fr: "il danse avec l'étoile d'or." },
        { es: "Mueve tú los brazos, alas al volar,", ca: "Mou els braços, ales per volar,", en: "Now wave your arms like wings in the sky,", cs: "Zamávej rukama, křídla jsou tvá,", fr: "Agite tes bras, ce sont des ailes," },
        { es: "¡el baile del pájaro no puede parar!", ca: "el ball de l'ocell no pot parar!", en: "the dance of the bird goes flying by!", cs: "tanec ptáčka nikdy nepřestává!", fr: "la danse de l'oiseau est éternelle !" }
      ] }
  ],

  /* ---------- TRADUCTOR ---------- */
  translator: {
    words: [
      W_COMMON.hola,
      W_COMMON.adios,
      W_COMMON.amigo,
      { k: "estrella", emoji: "⭐", name: { es: "estrella", ca: "estrella", en: "star", cs: "hvězda", fr: "étoile" } },
      { k: "luna", emoji: "🌙", name: { es: "luna", ca: "lluna", en: "moon", cs: "měsíc", fr: "lune" } },
      { k: "sol", emoji: "☀️", name: { es: "sol", ca: "sol", en: "sun", cs: "slunce", fr: "soleil" } },
      { k: "pajaro", emoji: "🐦", name: { es: "pájaro", ca: "ocell", en: "bird", cs: "pták", fr: "oiseau" } },
      { k: "color", emoji: "🎨", name: { es: "color", ca: "color", en: "colour", cs: "barva", fr: "couleur" } },
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
      { id: "pajaro", emoji: "🐦",
        name: { es: "Pájaro de Miró", ca: "Ocell de Miró", en: "Miró Bird", cs: "Miróův pták", fr: "Oiseau de Miró" },
        greeting: { es: "¡Piu-piu! Así saluda el pájaro pintado: cada piu es de un color.", ca: "Piu-piu! Així saluda l'ocell pintat: cada piu és d'un color.", en: "Tweet-tweet! That is how the painted bird says hello: every tweet has its own colour.", cs: "Píp-píp! Tak zdraví namalovaný pták: každé píp má svou barvu.", fr: "Cui-cui ! C'est comme ça que l'oiseau peint dit bonjour : chaque cui a sa couleur." },
        dict: { hola: "piu-piu", adios: "piuuu-piuuu", amigo: "piupín", estrella: "piustela", luna: "piuluna", sol: "piusol", pajaro: "piu-piu-yo", color: "piucolor", robot: "piubot", mama: "piumama", papa: "piupapa", casa: "piunido", agua: "piusplash", comida: "piuñam", perro: "piuguau", gato: "piumiau", grande: "piugrán", pequeno: "piupetit", bonito: "piulindo", amor: "piucor", gracias: "piugracis", si: "piu", no: "piu-no", dormir: "piurrón" } },
      { id: "estrella", emoji: "⭐",
        name: { es: "Estrella", ca: "Estrella", en: "Star", cs: "Hvězdština", fr: "Étoile" },
        greeting: { es: "Tilín... las estrellas de Miró hablan con campanitas brillantes.", ca: "Tilín... les estrelles de Miró parlen amb campanetes brillants.", en: "Ting-a-ling... Miró's stars speak with shiny little bells.", cs: "Cink... Miróovy hvězdy mluví zářivými zvonečky.", fr: "Ding... les étoiles de Miró parlent avec des clochettes brillantes." },
        dict: { hola: "tilín", adios: "tilán", amigo: "tilín-tin", estrella: "tilinstela", luna: "tililuna", sol: "tilisol", pajaro: "tilipiu", color: "tilicolor", robot: "tilibot", mama: "tilimama", papa: "tilipapa", casa: "tilicasa", agua: "tiliglú", comida: "tiliñam", perro: "tiliguau", gato: "tilimiau", grande: "tilinón", pequeno: "tilinín", bonito: "tilibel", amor: "tilicor", gracias: "tilingrats", si: "tin", no: "tan", dormir: "tilizzz" } },
      { id: "pincel", emoji: "🖌️",
        name: { es: "Pincel", ca: "Pinzell", en: "Paintbrush", cs: "Štětečtina", fr: "Pinceau" },
        greeting: { es: "¡Swish, swish! El pincel habla pintando en el aire.", ca: "Swish, swish! El pinzell parla pintant a l'aire.", en: "Swish, swish! The paintbrush talks by painting in the air.", cs: "Švih, švih! Štětec mluví tak, že maluje do vzduchu.", fr: "Swish, swish ! Le pinceau parle en peignant dans l'air." },
        dict: { hola: "swish-swish", adios: "swash", amigo: "swishín", estrella: "swishtela", luna: "swishluna", sol: "swishol", pajaro: "swishpiu", color: "swishcolor", robot: "swishbot", mama: "swishmama", papa: "swishpapa", casa: "swishcasa", agua: "swishglub", comida: "swishñam", perro: "swishguau", gato: "swishmiau", grande: "swooosh", pequeno: "swi", bonito: "swishbel", amor: "swishcor", gracias: "swishgracis", si: "swip", no: "swop", dormir: "swishhh" } },
      { id: "color", emoji: "🎨",
        name: { es: "Color", ca: "Color", en: "Colour", cs: "Barvičtina", fr: "Couleur" },
        greeting: { es: "¡Rojo-amarillo! En el idioma de los colores, cada palabra es una mezcla.", ca: "Vermell-groc! En l'idioma dels colors, cada paraula és una barreja.", en: "Red-yellow! In colour language, every word is a mix.", cs: "Červená-žlutá! V jazyce barev je každé slovo míchanice.", fr: "Rouge-jaune ! Dans la langue des couleurs, chaque mot est un mélange." },
        dict: { hola: "rojo-amarillo", adios: "azul-azul", amigo: "amarillo-rojo", estrella: "amarillo-amarillo", luna: "blanco-azul", sol: "rojo-rojo", pajaro: "negro-rojo", color: "rojo-azul-amarillo", robot: "gris-plata", mama: "rosa-rojo", papa: "azul-verde", casa: "amarillo-naranja", agua: "azul-clarito", comida: "rojo-tomate", perro: "marrón-marrón", gato: "gris-gris", grande: "rojo-gigante", pequeno: "amarillo-chiquitín", bonito: "rosa-brillante", amor: "rojo-corazón", gracias: "verde-menta", si: "verde", no: "rojo", dormir: "azul-noche" } }
    ]
  },

  /* ---------- MAPA DE EXPLORACIÓN ---------- */
  explore: {
    width: 2600, height: 1100, stars: false,
    bgCss: "radial-gradient(ellipse 44% 32% at 24% 12%, rgba(255,255,255,.55), transparent 70%), linear-gradient(180deg,#fcf5e4 0%,#f7ecd4 44%,#f0e1c2 74%,#e8d5b0 100%)",
    cats: [
      { id: "taller", emoji: "🎨", x: 120, name: { es: "El taller", ca: "El taller", en: "The workshop", cs: "Ateliér", fr: "L'atelier" } },
      { id: "cuadros", emoji: "⭐", x: 1000, name: { es: "El mundo de sus cuadros", ca: "El món dels seus quadres", en: "The world of his paintings", cs: "Svět jeho obrazů", fr: "Le monde de ses tableaux" } },
      { id: "esculturas", emoji: "🐦", x: 1900, name: { es: "Las esculturas", ca: "Les escultures", en: "The sculptures", cs: "Sochy", fr: "Les sculptures" } }
    ],
    pois: [
      { cat: "taller", emoji: "🖌️", x: 180, y: 640, iw: 74, ih: 84,
        svg: `<svg viewBox="0 0 100 110" width="100%" height="100%">
          <path d="M30 58 L70 58 L66 100 L34 100 Z" fill="#a1887f"/>
          <path d="M30 58 L70 58 L69 68 L31 68 Z" fill="#8d6e63"/>
          <rect x="40" y="16" width="5" height="46" rx="2.5" fill="#6d4c41" transform="rotate(-8 42 39)"/>
          <path d="M36 12 q4 -8 10 -2 q-2 8 -8 8 Z" fill="#e53935"/>
          <rect x="52" y="10" width="5" height="52" rx="2.5" fill="#5d4037"/>
          <path d="M50 4 q5 -6 10 0 q-2 8 -9 7 Z" fill="#1e88e5"/>
          <rect x="62" y="22" width="5" height="40" rx="2.5" fill="#795548" transform="rotate(9 64 42)"/>
          <path d="M62 14 q6 -5 10 1 q-3 8 -10 6 Z" fill="#fdd835"/>
          <circle cx="38" cy="82" r="4" fill="#e53935"/><circle cx="52" cy="88" r="4" fill="#1e88e5"/><circle cx="62" cy="80" r="4" fill="#fdd835"/>
        </svg>`,
        name: { es: "Los pinceles y los botes", ca: "Els pinzells i els pots", en: "The brushes and the pots", cs: "Štětce a kelímky", fr: "Les pinceaux et les pots" },
        fact: { es: "Miró tenía pinceles finos para las líneas y gordos para las manchas. Y cuando el cuadro lo pedía, ¡pintaba con los dedos!", ca: "Miró tenia pinzells fins per a les línies i gruixuts per a les taques. I quan el quadre ho demanava, pintava amb els dits!", en: "Miró had thin brushes for lines and fat ones for blobs. And when the painting asked for it, he painted with his fingers!", cs: "Miró měl tenké štětce na čáry a tlusté na skvrny. A když si to obraz řekl, maloval prsty!", fr: "Miró avait des pinceaux fins pour les lignes et des gros pour les taches. Et quand le tableau le demandait, il peignait avec les doigts !" } },
      { cat: "taller", emoji: "🖼️", x: 390, y: 460, size: 2, iw: 96, ih: 116,
        svg: `<svg viewBox="0 0 100 120" width="100%" height="100%">
          <g stroke="#6d4c41" stroke-width="5" stroke-linecap="round">
            <line x1="50" y1="14" x2="20" y2="112"/><line x1="50" y1="14" x2="80" y2="112"/><line x1="50" y1="60" x2="50" y2="112"/>
          </g>
          <line x1="27" y1="88" x2="73" y2="88" stroke="#6d4c41" stroke-width="4"/>
          <rect x="26" y="26" width="48" height="56" fill="#fffdf6" stroke="#bcaaa4" stroke-width="2"/>
          <circle cx="46" cy="50" r="3.2" fill="#e53935">
            <animate attributeName="opacity" values="1;.35;1" dur="2.2s" repeatCount="indefinite"/>
          </circle>
        </svg>`,
        name: { es: "El caballete y el lienzo blanco", ca: "El cavallet i la tela blanca", en: "The easel and the blank canvas", cs: "Stojan a bílé plátno", fr: "Le chevalet et la toile blanche" },
        fact: { es: "El lienzo en blanco impone un poquito, ¡hasta a Miró! Él lo miraba mucho rato, sin prisa, hasta que una manchita le enseñaba el camino. Del miedo... ¡nacía una estrella!", ca: "La tela en blanc imposa una miqueta, fins i tot a Miró! Ell la mirava molta estona, sense pressa, fins que una taqueta li ensenyava el camí. De la por... naixia una estrella!", en: "A blank canvas feels a bit scary, even to Miró! He would look at it for ages, no hurry, until a little stain showed him the way. From that little fear... a star was born!", cs: "Prázdné plátno nahání trochu strach, i Miróovi! Díval se na něj dlouho a beze spěchu, dokud mu malá skvrnka neukázala cestu. A z toho strachu... se narodila hvězda!", fr: "La toile blanche impressionne un peu, même Miró ! Il la regardait longtemps, sans se presser, jusqu'à ce qu'une petite tache lui montre le chemin. De cette petite peur... naissait une étoile !" } },
      { cat: "taller", emoji: "🏡", x: 650, y: 640, size: 2, iw: 110, ih: 84,
        svg: `<svg viewBox="0 0 130 100" width="100%" height="100%">
          <path d="M4 74 Q40 52 78 66 Q108 74 128 68 L128 84 L4 84 Z" fill="#c96a4a" opacity=".55"/>
          <rect x="22" y="40" width="56" height="42" fill="#fdf3df" stroke="#c9b48a" stroke-width="2"/>
          <rect x="78" y="26" width="22" height="56" fill="#f6e8c9" stroke="#c9b48a" stroke-width="2"/>
          <path d="M18 40 L50 24 L82 40 Z" fill="#bf5b3d"/>
          <path d="M76 26 L89 16 L102 26 Z" fill="#bf5b3d"/>
          <rect x="34" y="58" width="12" height="24" fill="#6d4c41"/>
          <rect x="56" y="52" width="11" height="11" fill="#7fb3d5"/>
          <rect x="84" y="38" width="10" height="10" fill="#7fb3d5"/>
          <circle cx="112" cy="62" r="10" fill="#43a047"/><rect x="110" y="70" width="4" height="12" fill="#6d4c41"/>
        </svg>`,
        name: { es: "La masía de Mont-roig", ca: "La masia de Mont-roig", en: "The Mont-roig farmhouse", cs: "Statek v Mont-roig", fr: "La ferme de Mont-roig" },
        fact: { es: "Su casa de campo querida. La pintó enterita en el cuadro La Masía: tardó nueve meses, ¡como un curso del cole! Decía que toda su fuerza venía de allí.", ca: "La seva casa de camp estimada. La va pintar sencera al quadre La Masia: hi va trigar nou mesos, com un curs de l'escola! Deia que tota la seva força venia d'allà.", en: "His beloved farmhouse. He painted every bit of it in The Farm: it took him nine months, as long as a school year! He said all his strength came from there.", cs: "Jeho milovaný statek. Celý ho namaloval na obraze Statek: trvalo mu to devět měsíců, jako celý školní rok! Říkal, že odtud pochází všechna jeho síla.", fr: "Sa ferme adorée. Il l'a peinte en entier dans le tableau La Ferme : ça lui a pris neuf mois, comme une année d'école ! Il disait que toute sa force venait de là." } },
      { cat: "taller", emoji: "🏺", x: 830, y: 540, iw: 76, ih: 66,
        svg: `<svg viewBox="0 0 100 88" width="100%" height="100%">
          <path d="M24 30 Q14 46 22 62 Q28 76 40 76 Q52 76 56 60 Q60 44 48 30 Q40 24 32 26 Q26 26 24 30 Z" fill="#e8d5ae" stroke="#b09262" stroke-width="2"/>
          <circle cx="38" cy="48" r="5" fill="#e53935"/>
          <path d="M28 62 Q38 56 50 62" stroke="#212121" stroke-width="2.6" fill="none" stroke-linecap="round"/>
          <path d="M62 40 Q58 52 62 66 Q66 78 76 78 Q86 78 88 64 Q90 50 84 40 Q78 32 70 34 Q64 34 62 40 Z" fill="#d7e3ea" stroke="#8fa8b5" stroke-width="2"/>
          <path d="M68 46 L82 46 M68 54 L82 54" stroke="#1e88e5" stroke-width="2.6" stroke-linecap="round"/>
          <circle cx="75" cy="66" r="3.4" fill="#fdd835"/>
        </svg>`,
        name: { es: "Las cerámicas", ca: "Les ceràmiques", en: "The ceramics", cs: "Keramika", fr: "Les céramiques" },
        fact: { es: "Con su amigo Artigas, un alfarero genial, Miró pintaba platos, jarrones y murales de cerámica, cocidos en un horno de leña que echaba chispas.", ca: "Amb el seu amic Artigas, un terrissaire genial, Miró pintava plats, gerros i murals de ceràmica, cuits en un forn de llenya que treia espurnes.", en: "With his friend Artigas, a brilliant potter, Miró painted plates, vases and ceramic murals, baked in a wood kiln that crackled with sparks.", cs: "Se svým přítelem Artigasem, skvělým hrnčířem, maloval Miró talíře, vázy a keramické zdi, vypálené v peci na dřevo, od které létaly jiskry.", fr: "Avec son ami Artigas, un potier génial, Miró peignait des assiettes, des vases et des murs en céramique, cuits dans un four à bois qui faisait des étincelles." } },
      { cat: "taller", emoji: "🪑", x: 300, y: 850, iw: 60, ih: 74,
        svg: `<svg viewBox="0 0 80 100" width="100%" height="100%">
          <path d="M22 10 Q20 40 24 54 L56 54 Q60 40 58 10 Q40 18 22 10 Z" fill="#c98a5a"/>
          <path d="M28 20 L52 20 M27 30 L53 30 M26 40 L54 40" stroke="#a9683d" stroke-width="3" stroke-linecap="round"/>
          <rect x="22" y="54" width="38" height="8" rx="3" fill="#b5713f"/>
          <g stroke="#8d5527" stroke-width="5" stroke-linecap="round">
            <line x1="26" y1="62" x2="22" y2="94"/><line x1="56" y1="62" x2="60" y2="94"/>
          </g>
          <circle cx="40" cy="47" r="3" fill="#e53935"/>
        </svg>`,
        name: { es: "La silla de pensar", ca: "La cadira de pensar", en: "The thinking chair", cs: "Židle na přemýšlení", fr: "La chaise pour réfléchir" },
        fact: { es: "En el taller, Miró se sentaba a mirar sus cuadros un buen rato cada día. Pensar y mirar despacio también es pintar.", ca: "Al taller, Miró s'asseia a mirar els seus quadres una bona estona cada dia. Pensar i mirar a poc a poc també és pintar.", en: "In the workshop, Miró would sit and look at his paintings for a good while every day. Thinking and looking slowly is painting too.", cs: "V ateliéru si Miró každý den sedl a dlouze si prohlížel své obrazy. Přemýšlet a pomalu se dívat je taky malování.", fr: "Dans l'atelier, Miró s'asseyait pour regarder ses tableaux un bon moment chaque jour. Réfléchir et regarder lentement, c'est aussi peindre." } },
      { cat: "cuadros", emoji: "⭐", x: 1070, y: 330, iw: 78, ih: 78,
        svg: `<svg viewBox="0 0 100 100" width="100%" height="100%">
          <g stroke="#212121" stroke-width="5" stroke-linecap="round">
            <line x1="50" y1="14" x2="50" y2="86"/><line x1="14" y1="50" x2="86" y2="50"/>
            <line x1="25" y1="25" x2="75" y2="75"/><line x1="75" y1="25" x2="25" y2="75"/>
          </g>
          <circle cx="50" cy="50" r="8" fill="#e53935">
            <animate attributeName="r" values="8;10;8" dur="2.4s" repeatCount="indefinite"/>
          </circle>
          <circle cx="80" cy="22" r="4" fill="#fdd835"/>
        </svg>`,
        name: { es: "La estrella de Miró", ca: "L'estrella de Miró", en: "Miró's star", cs: "Miróova hvězda", fr: "L'étoile de Miró" },
        fact: { es: "La estrella de Miró son unas líneas cruzadas que bailan, tan sencillas que puedes dibujarla tú ahora mismo. ¡Es su firma en el cielo!", ca: "L'estrella de Miró són unes línies creuades que ballen, tan senzilles que la pots dibuixar tu ara mateix. És la seva signatura al cel!", en: "Miró's star is just a few crossed dancing lines, so simple you can draw it yourself right now. It is his signature in the sky!", cs: "Miróova hvězda je pár zkřížených tančících čar, tak jednoduchá, že si ji hned teď můžeš nakreslit. Je to jeho podpis na nebi!", fr: "L'étoile de Miró, ce sont des lignes croisées qui dansent, si simples que tu peux la dessiner tout de suite. C'est sa signature dans le ciel !" } },
      { cat: "cuadros", emoji: "🌙", x: 1300, y: 220, iw: 70, ih: 74,
        svg: `<svg viewBox="0 0 90 95" width="100%" height="100%">
          <path d="M62 12 A34 34 0 1 0 62 80 A27 27 0 1 1 62 12 Z" fill="#fdd835" stroke="#212121" stroke-width="3"/>
          <circle cx="47" cy="38" r="3" fill="#212121"/>
          <path d="M44 52 Q49 57 54 52" stroke="#212121" stroke-width="2.6" fill="none" stroke-linecap="round"/>
          <circle cx="76" cy="24" r="3.4" fill="#1e88e5"/>
        </svg>`,
        name: { es: "La luna", ca: "La lluna", en: "The moon", cs: "Měsíc", fr: "La lune" },
        fact: { es: "En los cielos de Miró casi siempre hay una luna: a veces redonda, a veces como una barquita amarilla meciéndose entre las estrellas.", ca: "Als cels de Miró gairebé sempre hi ha una lluna: de vegades rodona, de vegades com una barqueta groga gronxant-se entre les estrelles.", en: "In Miró's skies there is almost always a moon: sometimes round, sometimes like a little yellow boat rocking among the stars.", cs: "Na Miróově nebi skoro vždycky svítí měsíc: někdy kulatý, někdy jako žlutá lodička houpající se mezi hvězdami.", fr: "Dans les ciels de Miró, il y a presque toujours une lune : parfois ronde, parfois comme un petit bateau jaune qui se balance entre les étoiles." } },
      { cat: "cuadros", emoji: "🐦", x: 1490, y: 430, iw: 92, ih: 64,
        svg: `<svg viewBox="0 0 120 84" width="100%" height="100%">
          <path d="M18 46 Q42 18 76 34 Q66 40 60 50 Q46 66 26 60 Q14 56 18 46 Z" fill="#212121"/>
          <circle cx="82" cy="30" r="10" fill="#e53935"/>
          <circle cx="85" cy="27" r="2.6" fill="#fdd835"/>
          <path d="M92 30 L104 26 L92 34 Z" fill="#fdd835"/>
          <path d="M34 44 Q46 34 58 42" stroke="#1e88e5" stroke-width="4" fill="none" stroke-linecap="round"/>
          <path d="M26 60 L18 74 M36 62 L32 76" stroke="#212121" stroke-width="3" stroke-linecap="round"/>
        </svg>`,
        name: { es: "El pájaro", ca: "L'ocell", en: "The bird", cs: "Pták", fr: "L'oiseau" },
        fact: { es: "El pájaro de Miró vuela entre la tierra y las estrellas, como un mensajero de los sueños. Está en casi todos sus cuadros, ¡búscalo!", ca: "L'ocell de Miró vola entre la terra i les estrelles, com un missatger dels somnis. És a gairebé tots els seus quadres, busca'l!", en: "Miró's bird flies between the earth and the stars, like a messenger of dreams. He is in almost every painting, go find him!", cs: "Miróův pták létá mezi zemí a hvězdami jako posel snů. Je skoro na každém jeho obraze, zkus ho najít!", fr: "L'oiseau de Miró vole entre la terre et les étoiles, comme un messager des rêves. Il est dans presque tous ses tableaux, cherche-le !" } },
      { cat: "cuadros", emoji: "🪜", x: 1160, y: 640, size: 2, iw: 64, ih: 120,
        svg: `<svg viewBox="0 0 70 130" width="100%" height="100%">
          <g stroke="#212121" stroke-width="5" stroke-linecap="round">
            <line x1="22" y1="124" x2="38" y2="8"/><line x1="52" y1="124" x2="64" y2="10"/>
          </g>
          <g stroke="#e53935" stroke-width="4" stroke-linecap="round">
            <line x1="27" y1="102" x2="56" y2="103"/><line x1="30" y1="80" x2="58" y2="81"/>
            <line x1="33" y1="58" x2="60" y2="59"/><line x1="36" y1="36" x2="62" y2="37"/>
          </g>
          <g stroke="#212121" stroke-width="2.6" stroke-linecap="round">
            <line x1="46" y1="2" x2="46" y2="16"/><line x1="39" y1="9" x2="53" y2="9"/>
          </g>
        </svg>`,
        name: { es: "La escalera de la evasión", ca: "L'escala de l'evasió", en: "The escape ladder", cs: "Žebřík úniku", fr: "L'échelle de l'évasion" },
        fact: { es: "Una escalera que sale en muchos cuadros de Miró: empieza en el suelo y sube hacia el cielo y los sueños. ¿A dónde subirías tú?", ca: "Una escala que surt a molts quadres de Miró: comença a terra i puja cap al cel i els somnis. On pujaries tu?", en: "A ladder that appears in many Miró paintings: it starts on the ground and climbs towards the sky and the dreams. Where would YOU climb?", cs: "Žebřík, který se objevuje v mnoha Miróových obrazech: začíná na zemi a stoupá k nebi a ke snům. Kam by sis vylezla ty?", fr: "Une échelle qui apparaît dans beaucoup de tableaux de Miró : elle part du sol et monte vers le ciel et les rêves. Toi, où monterais-tu ?" } },
      { cat: "cuadros", emoji: "🔴", x: 1660, y: 280, size: 2, iw: 92, ih: 92,
        svg: `<svg viewBox="0 0 100 100" width="100%" height="100%">
          <circle cx="50" cy="50" r="26" fill="#e53935"/>
          <g stroke="#212121" stroke-width="2.6" stroke-linecap="round">
            <line x1="50" y1="10" x2="50" y2="20"/><line x1="50" y1="80" x2="50" y2="90"/>
            <line x1="10" y1="50" x2="20" y2="50"/><line x1="80" y1="50" x2="90" y2="50"/>
            <line x1="24" y1="24" x2="31" y2="31"/><line x1="69" y1="69" x2="76" y2="76"/>
            <line x1="76" y1="24" x2="69" y2="31"/><line x1="31" y1="69" x2="24" y2="76"/>
          </g>
          <circle cx="42" cy="42" r="4" fill="#fdd835"/>
        </svg>`,
        name: { es: "El sol rojo", ca: "El sol vermell", en: "The red sun", cs: "Rudé slunce", fr: "Le soleil rouge" },
        fact: { es: "El sol de Miró no es amarillo: ¡es rojo! Una bola caliente y alegre que enciende el cuadro entero.", ca: "El sol de Miró no és groc: és vermell! Una bola calenta i alegre que encén el quadre sencer.", en: "Miró's sun is not yellow: it is red! A warm, happy ball that lights up the whole painting.", cs: "Miróovo slunce není žluté: je červené! Teplá veselá koule, která rozzáří celý obraz.", fr: "Le soleil de Miró n'est pas jaune : il est rouge ! Une boule chaude et joyeuse qui allume tout le tableau." } },
      { cat: "cuadros", emoji: "💃", x: 1620, y: 700, iw: 88, ih: 96,
        svg: `<svg viewBox="0 0 100 110" width="100%" height="100%">
          <circle cx="42" cy="20" r="7" fill="#212121"/>
          <path d="M42 27 Q26 62 42 68 Q58 62 42 27 Z" fill="#1e88e5"/>
          <path d="M32 40 Q18 32 14 22 M52 40 Q66 32 70 22" stroke="#212121" stroke-width="3" fill="none" stroke-linecap="round"/>
          <g stroke="#212121" stroke-width="2" stroke-linecap="round">
            <line x1="14" y1="18" x2="14" y2="26"/><line x1="10" y1="22" x2="18" y2="22"/>
            <line x1="70" y1="18" x2="70" y2="26"/><line x1="66" y1="22" x2="74" y2="22"/>
          </g>
          <circle cx="14" cy="22" r="2.6" fill="#fdd835"/><circle cx="70" cy="22" r="2.6" fill="#e53935"/>
          <path d="M42 68 L34 96 M42 68 L52 96" stroke="#212121" stroke-width="3" stroke-linecap="round"/>
          <circle cx="42" cy="48" r="3.4" fill="#e53935"/>
          <path d="M20 90 Q42 104 66 88" stroke="#43a047" stroke-width="3" fill="none" stroke-linecap="round"/>
        </svg>`,
        name: { es: "La mujer-constelación", ca: "La dona-constel·lació", en: "The constellation woman", cs: "Žena-souhvězdí", fr: "La femme-constellation" },
        fact: { es: "En su serie Las Constelaciones, las mujeres, los pájaros y las estrellas bailan unidos por líneas finitas, como un cielo cosido con hilo.", ca: "A la seva sèrie Les Constel·lacions, les dones, els ocells i les estrelles ballen units per línies finetes, com un cel cosit amb fil.", en: "In his Constellations series, women, birds and stars dance joined by thin lines, like a sky sewn together with thread.", cs: "V jeho sérii Konstelace tančí ženy, ptáci a hvězdy spojené tenoučkými čarami, jako nebe sešité nití.", fr: "Dans sa série les Constellations, les femmes, les oiseaux et les étoiles dansent reliés par des lignes toutes fines, comme un ciel cousu avec du fil." } },
      { cat: "esculturas", emoji: "🗼", x: 1990, y: 420, size: 3, iw: 84, ih: 150,
        svg: `<svg viewBox="0 0 70 130" width="100%" height="100%">
          <path d="M24 122 Q18 70 26 30 Q30 14 35 14 Q40 14 44 30 Q52 70 46 122 Z" fill="#e53935"/>
          <path d="M28 40 l7 5 l-7 5 Z" fill="#fdd835"/><path d="M40 60 l-7 5 l7 5 Z" fill="#1e88e5"/>
          <path d="M30 84 l7 5 l-7 5 Z" fill="#fdf6e3"/><path d="M40 100 l-6 5 l6 5 Z" fill="#fdd835"/>
          <ellipse cx="35" cy="14" rx="13" ry="5" fill="#fdd835"/>
          <path d="M22 10 A13 13 0 0 1 48 10 A10 10 0 0 0 22 10 Z" fill="#212121"/>
          <circle cx="52" cy="4" r="3" fill="#e53935"/>
        </svg>`,
        name: { es: "Mujer y Pájaro", ca: "Dona i Ocell", en: "Woman and Bird", cs: "Žena a pták", fr: "Femme et Oiseau" },
        fact: { es: "Su escultura gigante de Barcelona: una torre alta como siete pisos, vestida de trencadís, trocitos de cerámica de colores. Con la luna encima, ¡como un sombrero!", ca: "La seva escultura gegant de Barcelona: una torre alta com set pisos, vestida de trencadís, trossets de ceràmica de colors. Amb la lluna a sobre, com un barret!", en: "His giant sculpture in Barcelona: a tower as tall as seven floors, dressed in trencadís, little pieces of coloured ceramic. With the moon on top, like a hat!", cs: "Jeho obří socha v Barceloně: věž vysoká jako sedm pater, oblečená do trencadís, kousíčků barevné keramiky. A nahoře měsíc, jako klobouk!", fr: "Sa sculpture géante de Barcelone : une tour haute comme sept étages, habillée de trencadís, des petits morceaux de céramique colorée. Avec la lune dessus, comme un chapeau !" } },
      { cat: "esculturas", emoji: "🧱", x: 2220, y: 700, size: 2, iw: 130, ih: 80,
        svg: `<svg viewBox="0 0 160 100" width="100%" height="100%">
          <rect x="6" y="14" width="148" height="74" rx="4" fill="#efe3c4" stroke="#c9b48a" stroke-width="2"/>
          <path d="M6 40 L154 40 M6 64 L154 64 M40 14 L40 40 M90 14 L90 40 M65 40 L65 64 M115 40 L115 64 M40 64 L40 88 M90 64 L90 88" stroke="#d8c8a0" stroke-width="2"/>
          <circle cx="56" cy="50" r="22" fill="#e53935"/>
          <path d="M100 34 Q116 42 112 60 Q104 56 100 48 Z" fill="#1e88e5"/>
          <g stroke="#212121" stroke-width="3.4" stroke-linecap="round">
            <path d="M24 72 Q50 80 84 74"/><line x1="128" y1="28" x2="128" y2="46"/><line x1="119" y1="37" x2="137" y2="37"/>
          </g>
          <circle cx="138" cy="70" r="5" fill="#fdd835"/>
        </svg>`,
        name: { es: "El mural del Sol", ca: "El mural del Sol", en: "The Wall of the Sun", cs: "Zeď Slunce", fr: "Le mur du Soleil" },
        fact: { es: "En París, Miró y su amigo Artigas hicieron dos paredes de cerámica para la UNESCO: la del Sol, con su sol rojo gigante, y al lado la de la Luna. ¡Un cuadro hecho muro!", ca: "A París, Miró i el seu amic Artigas van fer dues parets de ceràmica per a la UNESCO: la del Sol, amb el seu sol vermell gegant, i al costat la de la Lluna. Un quadre fet mur!", en: "In Paris, Miró and his friend Artigas made two ceramic walls for UNESCO: the Wall of the Sun, with its giant red sun, and next to it the Wall of the Moon. A painting turned into a wall!", cs: "V Paříži vytvořili Miró a jeho přítel Artigas pro UNESCO dvě keramické zdi: Zeď Slunce s obřím rudým sluncem a hned vedle Zeď Měsíce. Obraz proměněný ve zeď!", fr: "À Paris, Miró et son ami Artigas ont fait deux murs en céramique pour l'UNESCO : celui du Soleil, avec son soleil rouge géant, et à côté celui de la Lune. Un tableau devenu mur !" } },
      { cat: "esculturas", emoji: "🔵", x: 2430, y: 880, iw: 92, ih: 60,
        svg: `<svg viewBox="0 0 120 80" width="100%" height="100%">
          <ellipse cx="60" cy="40" rx="54" ry="30" fill="#fdf6e3" stroke="#212121" stroke-width="4"/>
          <path d="M60 12 A54 30 0 0 0 12 34 L60 40 Z" fill="#1e88e5"/>
          <path d="M108 34 A54 30 0 0 0 60 12 L60 40 Z" fill="#e53935"/>
          <path d="M30 62 Q60 74 90 62 L60 40 Z" fill="#fdd835"/>
          <circle cx="60" cy="40" r="7" fill="#212121"/>
        </svg>`,
        name: { es: "El mosaico de La Rambla", ca: "El mosaic de La Rambla", en: "The La Rambla mosaic", cs: "Mozaika na La Rambla", fr: "La mosaïque de La Rambla" },
        fact: { es: "Un círculo de colores en el suelo del paseo más famoso de Barcelona. A Miró le encantaba que la gente caminara por encima: ¡es un cuadro que se pisa!", ca: "Un cercle de colors a terra del passeig més famós de Barcelona. A Miró li encantava que la gent hi caminés per sobre: és un quadre que es trepitja!", en: "A circle of colours on the ground of Barcelona's most famous street. Miró loved that people walked on it: it is a painting you can step on!", cs: "Barevný kruh na zemi nejslavnější barcelonské třídy. Miró měl radost, že po něm lidé chodí: je to obraz, po kterém se šlape!", fr: "Un cercle de couleurs sur le sol de la promenade la plus célèbre de Barcelone. Miró adorait que les gens marchent dessus : c'est un tableau qui se piétine !" } },
      { cat: "esculturas", emoji: "🎐", x: 2370, y: 260, iw: 100, ih: 84,
        svg: `<svg viewBox="0 0 120 100" width="100%" height="100%">
          <line x1="60" y1="4" x2="60" y2="18" stroke="#212121" stroke-width="2.6"/>
          <g>
            <animateTransform attributeName="transform" type="rotate" values="-4 60 18;4 60 18;-4 60 18" dur="4s" repeatCount="indefinite"/>
            <path d="M18 30 Q60 10 102 34" stroke="#212121" stroke-width="3" fill="none"/>
            <line x1="24" y1="31" x2="24" y2="48" stroke="#212121" stroke-width="2.4"/>
            <circle cx="24" cy="58" r="10" fill="#e53935"/>
            <line x1="60" y1="20" x2="60" y2="40" stroke="#212121" stroke-width="2.4"/>
            <path d="M48 52 L72 52 L60 74 Z" fill="#212121"/>
            <line x1="97" y1="33" x2="97" y2="52" stroke="#212121" stroke-width="2.4"/>
            <circle cx="97" cy="60" r="8" fill="#fdd835"/>
          </g>
        </svg>`,
        name: { es: "El móvil del amigo Calder", ca: "El mòbil de l'amic Calder", en: "Friend Calder's mobile", cs: "Mobil od přítele Caldera", fr: "Le mobile de l'ami Calder" },
        fact: { es: "Su amigo Calder inventó los móviles: esculturas colgantes que bailan con el aire. Los dos amigos se regalaban obras, ¡el mejor regalo entre artistas!", ca: "El seu amic Calder va inventar els mòbils: escultures penjants que ballen amb l'aire. Els dos amics es regalaven obres, el millor regal entre artistes!", en: "His friend Calder invented mobiles: hanging sculptures that dance with the air. The two friends gave each other artworks, the best gift between artists!", cs: "Jeho přítel Calder vynalezl mobily: zavěšené sochy, které tančí ve vzduchu. Oba přátelé si svá díla darovali, nejlepší dárek mezi umělci!", fr: "Son ami Calder a inventé les mobiles : des sculptures suspendues qui dansent avec l'air. Les deux amis s'offraient des œuvres, le meilleur cadeau entre artistes !" } }
    ],
    /* el escenario: un lienzo crudo de punta a punta, con el taller a la izquierda,
       el mundo pintado en el centro y las terrazas de Mallorca a la derecha */
    deco: function () {
      let s = "";
      /* las cajas de los puntos de interés: sirven para dejarles aire alrededor */
      const cajas = [[143, 598, 74, 84], [342, 402, 96, 116], [595, 598, 110, 84], [792, 507, 76, 66], [270, 813, 60, 74],
        [1031, 291, 78, 78], [1265, 183, 70, 74], [1444, 398, 92, 64], [1128, 580, 64, 120], [1614, 234, 92, 92],
        [1576, 652, 88, 96], [1948, 345, 84, 150], [2155, 660, 130, 80], [2384, 850, 92, 60], [2320, 218, 100, 84]];
      const libre = (x, y, w, h) => !cajas.some(c => x < c[0] + c[2] + 16 && x + w > c[0] - 16 && y < c[1] + c[3] + 16 && y + h > c[1] - 16);
      /* la estrellita de cinco puntas, la firma del pintor */
      const estrella = (cx, cy, r, c, g) => {
        let d = "";
        for (let i = 0; i < 10; i++) {
          const a = (i * 36 - 90 + (g || 0)) * Math.PI / 180, rr = i % 2 ? r * 0.4 : r;
          d += (i ? "L" : "M") + (cx + rr * Math.cos(a)).toFixed(1) + " " + (cy + rr * Math.sin(a)).toFixed(1) + " ";
        }
        return `<path d="${d}Z" fill="${c}"/>`;
      };
      /* un almendro en flor: tronco retorcido y copa blanca y rosa */
      const almendro = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})">
        <ellipse cx="0" cy="4" rx="46" ry="11" fill="rgba(92,62,30,.16)"/>
        <path d="M-6 2 q6 -44 -10 -72 M-6 2 q12 -48 28 -78 M-2 -38 q-22 -12 -34 -32 M4 -52 q22 -10 36 -32" stroke="#6d5641" stroke-width="11" fill="none" stroke-linecap="round"/>
        <ellipse cx="-40" cy="-106" rx="34" ry="26" fill="#f3dbe4"/><ellipse cx="22" cy="-122" rx="40" ry="30" fill="#fbeff3"/>
        <ellipse cx="-6" cy="-92" rx="36" ry="26" fill="#f7e6ec"/><ellipse cx="46" cy="-88" rx="25" ry="19" fill="#f3dbe4"/>
        <circle cx="-32" cy="-114" r="5" fill="#fff"/><circle cx="14" cy="-132" r="5" fill="#fff"/><circle cx="44" cy="-94" r="4.4" fill="#fff"/>
        <circle cx="-14" cy="-84" r="4.4" fill="#fff"/><circle cx="4" cy="-104" r="4" fill="#f6c3d4"/></g>`;
      /* un muro de piedra seca: dos hiladas de cantos redondeados */
      const muro = (y0, h) => {
        let d = `<rect x="1780" y="${y0}" width="820" height="${h}" fill="url(#mroXMuro)"/><g fill="#f2e9d6" opacity=".5" stroke="rgba(116,100,74,.42)" stroke-width="2">`;
        for (let f = 0; f < 2; f++) {
          const yy = (y0 + 7 + f * (h - 10) / 2).toFixed(0), hh = ((h - 10) / 2 - 6).toFixed(0);
          for (let x = 1784 + (f ? 34 : 0); x < 2596; x += 72) d += `<rect x="${x}" y="${yy}" width="62" height="${hh}" rx="9"/>`;
        }
        return d + "</g>";
      };
      /* degradados y trama propios: ids con prefijo mroX para no chocar con otros mapas */
      s += `<defs>
        <pattern id="mroXTrama" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M0 0 H10 M0 5 H10" stroke="rgba(146,114,64,.10)" stroke-width="1.4"/>
          <path d="M0 0 V10 M5 0 V10" stroke="rgba(146,114,64,.07)" stroke-width="1.4"/>
        </pattern>
        <linearGradient id="mroXMar" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#9adaea"/><stop offset="45%" stop-color="#45a0cb"/><stop offset="100%" stop-color="#2a6f9d"/></linearGradient>
        <linearGradient id="mroXTierra" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e8cf9c"/><stop offset="100%" stop-color="#cfa869"/></linearGradient>
        <linearGradient id="mroXMuro" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ded4bf"/><stop offset="100%" stop-color="#a89a7e"/></linearGradient>
        <linearGradient id="mroXTabla" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#cba77b"/><stop offset="100%" stop-color="#a07949"/></linearGradient>
        <radialGradient id="mroXLuz" cx="50%" cy="0%" r="92%"><stop offset="0%" stop-color="rgba(255,250,222,.8)"/><stop offset="100%" stop-color="rgba(255,250,222,0)"/></radialGradient>
        <clipPath id="mroXMalla"><path d="M1802 210 Q1846 640 1904 1100 L2600 1100 L2600 210 Z"/></clipPath>
      </defs>`;
      /* ---------- EL LIENZO: la tela cruda, su trama y sus grumos ---------- */
      s += `<rect x="0" y="0" width="2600" height="1100" fill="url(#mroXTrama)"/>`;
      let grumos = "";
      for (let i = 0; i < 58; i++) {
        const x = (i * 271) % 2540 + 30, y = (i * 613) % 1040 + 30;
        if (!libre(x - 4, y - 4, 8, 8)) continue;
        grumos += `<circle cx="${x}" cy="${y}" r="${(1.3 + (i % 3) * 0.8).toFixed(1)}"/>`;
      }
      s += `<g fill="rgba(148,116,68,.17)">${grumos}</g>`;
      /* ---------- LAS MANCHAS: aguadas de color plano, muy diluidas, al fondo ---------- */
      s += `<path d="M118 168 Q330 74 520 178 Q664 268 588 414 Q486 532 318 482 Q140 424 118 168 Z" fill="#e53935" opacity=".12"/>
        <path d="M944 306 Q1178 186 1358 336 Q1498 476 1330 604 Q1122 702 982 562 Q884 436 944 306 Z" fill="#1e88e5" opacity=".11"/>
        <circle cx="1748" cy="486" r="196" fill="#fdd835" opacity=".15"/>
        <path d="M706 768 Q902 698 1042 806 Q1122 902 992 972 Q824 1022 722 924 Q652 848 706 768 Z" fill="#43a047" opacity=".12"/>
        <circle cx="452" cy="972" r="126" fill="#fdd835" opacity=".13"/>
        <circle cx="1502" cy="892" r="112" fill="#e53935" opacity=".1"/>
        <path d="M1968 108 Q2196 34 2398 122 Q2544 210 2438 292 Q2238 344 2058 274 Q1922 200 1968 108 Z" fill="#1e88e5" opacity=".09"/>`;
      /* ---------- LAS FORMAS: color plano con su contorno negro, como recortadas ---------- */
      [["M1368 246 Q1390 190 1448 196 Q1500 202 1506 252 Q1510 302 1454 312 Q1390 316 1368 246 Z", "#e53935"],
        ["M1030 944 Q1050 886 1112 892 Q1168 900 1172 950 Q1174 1002 1114 1012 Q1046 1010 1030 944 Z", "#43a047"],
        ["M1690 934 Q1708 876 1766 882 Q1818 890 1822 940 Q1824 990 1768 1000 Q1704 998 1690 934 Z", "#1e88e5"]].forEach(f => {
        s += `<path d="${f[0]}" fill="${f[1]}" opacity=".72"/><path d="${f[0]}" fill="none" stroke="#1f1c18" stroke-width="5" opacity=".8"/>`;
      });
      /* un sol negro con sus rayos, plantado en medio del lienzo */
      s += `<g transform="translate(1246 918)"><circle r="30" fill="#1f1c18"/>
        ${[0, 45, 90, 135, 180, 225, 270, 315].map(a => `<line x1="${(36 * Math.cos(a * Math.PI / 180)).toFixed(0)}" y1="${(36 * Math.sin(a * Math.PI / 180)).toFixed(0)}" x2="${(54 * Math.cos(a * Math.PI / 180)).toFixed(0)}" y2="${(54 * Math.sin(a * Math.PI / 180)).toFixed(0)}" stroke="#1f1c18" stroke-width="5" stroke-linecap="round"/>`).join("")}
        <circle r="11" fill="#fdd835"/></g>`;
      /* ---------- MALLORCA: el mar, las terrazas de piedra seca y los almendros ---------- */
      let m = "";
      /* el Mediterráneo, con el horizonte alto y dos islas lejanas */
      m += `<rect x="1780" y="210" width="820" height="162" fill="url(#mroXMar)"/>
        <rect x="1780" y="210" width="820" height="14" fill="#daf0f7" opacity=".85"/>
        <path d="M2244 372 Q2320 326 2412 372 Z" fill="#6f8fa6" opacity=".5"/>
        <path d="M1812 372 Q1888 338 1966 372 Z" fill="#7c9aae" opacity=".38"/>`;
      /* las olitas, que van y vienen despacio */
      m += `<g stroke="rgba(255,255,255,.6)" stroke-width="4" fill="none" stroke-linecap="round">
        <path d="M1840 288 q20 -9 40 0 M2000 320 q20 -9 40 0 M2180 274 q20 -9 40 0 M2470 306 q20 -9 40 0"><animate attributeName="opacity" values=".85;.35;.85" dur="5s" repeatCount="indefinite"/></path>
        <path d="M1922 330 q20 -9 40 0 M2110 346 q20 -9 40 0 M2320 322 q20 -9 40 0 M2520 350 q20 -9 40 0"><animate attributeName="opacity" values=".35;.85;.35" dur="5s" repeatCount="indefinite"/></path></g>`;
      /* la barca de vela, meciéndose en la bahía */
      m += `<g transform="translate(2116 340)"><g><animateTransform attributeName="transform" type="rotate" values="-2 0 0;2 0 0;-2 0 0" dur="6s" repeatCount="indefinite"/>
        <path d="M-34 0 h68 l-13 16 h-42 Z" fill="#37474f"/><path d="M2 -4 V-54 L32 -6 Z" fill="#fdfdfa"/><path d="M-4 -4 V-46 L-30 -6 Z" fill="#e8eef0"/></g></g>`;
      /* los bancales: tierra clara y muros de piedra seca, escalonados */
      m += `<path d="M1780 372 H2600 V498 Q2300 508 2020 498 Q1880 492 1780 500 Z" fill="url(#mroXTierra)"/>`;
      m += muro(498, 58);
      m += `<rect x="1780" y="556" width="820" height="188" fill="url(#mroXTierra)"/>`;
      m += muro(744, 64);
      m += `<rect x="1780" y="808" width="820" height="104" fill="url(#mroXTierra)"/>`;
      m += muro(912, 66);
      m += `<rect x="1780" y="978" width="820" height="122" fill="url(#mroXTierra)"/>`;
      /* la escalerita de piedra que salva el bancal */
      m += `<g fill="rgba(255,255,255,.4)">${[0, 1, 2, 3].map(i => `<rect x="${1832 + i * 7}" y="${750 + i * 15}" width="88" height="12" rx="4"/>`).join("")}</g>`;
      /* matas secas asomando en los bancales */
      for (let i = 0; i < 24; i++) {
        const x = 1804 + (i * 197) % 772, y = [468, 600, 662, 702, 848, 882, 1018, 1058][i % 8];
        if (!libre(x - 14, y - 26, 28, 30)) continue;
        m += `<path d="M${x} ${y} q-4 -18 -11 -24 M${x + 5} ${y} q0 -20 4 -26 M${x + 10} ${y} q5 -16 11 -22" stroke="#9aa864" stroke-width="4" fill="none" stroke-linecap="round"/>`;
      }
      /* los almendros en flor, repartidos por los bancales */
      m += almendro(2140, 498, .9) + almendro(2020, 744, 1) + almendro(2440, 744, .86) + almendro(2140, 912, 1.06) + almendro(2330, 1080, 1.1);
      /* la pérgola de la terraza, con su parra y sus racimos colgando */
      m += `<rect x="2246" y="200" width="16" height="300" rx="6" fill="#8d6e4f"/>
        <rect x="2544" y="200" width="16" height="300" rx="6" fill="#8d6e4f"/>
        <rect x="2226" y="188" width="358" height="18" rx="8" fill="#a07f5c"/>
        <path d="M2240 208 q28 22 58 14 q34 -10 62 12 q30 18 62 4 q34 -14 62 8 q26 18 54 6" stroke="#6f8f4a" stroke-width="6" fill="none" stroke-linecap="round"/>
        <g fill="#7cae4e">${[[2266, 220], [2330, 224], [2418, 218], [2492, 226], [2546, 216]].map(h => `<ellipse cx="${h[0]}" cy="${h[1]}" rx="15" ry="9"/>`).join("")}</g>`;
      [[2290, 1, 6], [2492, -1, 7]].forEach(v => {
        m += `<g><animateTransform attributeName="transform" type="rotate" values="${-2.4 * v[1]} ${v[0]} 206;${2.4 * v[1]} ${v[0]} 206;${-2.4 * v[1]} ${v[0]} 206" dur="${v[2]}s" repeatCount="indefinite"/>
          <path d="M${v[0]} 206 V238" stroke="#6f8f4a" stroke-width="4"/>
          <g fill="#8e6bc4">${[[0, 244], [-9, 254], [9, 254], [0, 264], [-7, 273], [7, 273], [0, 282]].map(p => `<circle cx="${v[0] + p[0]}" cy="${p[1]}" r="6.5"/>`).join("")}</g></g>`;
      });
      /* el cordel del que cuelga el móvil, atado a la viga */
      m += `<path d="M2372 206 V218" stroke="#6d5a45" stroke-width="4"/>`;
      /* dos pétalos de almendro cayendo sin prisa */
      [[2082, 522, 7.5], [2262, 782, 9]].forEach(p => {
        m += `<g><animateTransform attributeName="transform" type="translate" values="0 0;20 ${(p[2] * 13).toFixed(0)};0 0" dur="${p[2]}s" repeatCount="indefinite"/>
          <ellipse cx="${p[0]}" cy="${p[1]}" rx="7" ry="5" fill="#f6d7e2"/></g>`;
      });
      s += `<g clip-path="url(#mroXMalla)">${m}</g>
        <path d="M1802 210 Q1846 640 1904 1100" stroke="#1f1c18" stroke-width="5" fill="none" opacity=".5"/>`;
      /* ---------- EL TALLER: suelo de madera, ventanal, caballetes y botes ---------- */
      s += `<path d="M0 866 Q220 878 460 872 Q700 866 880 886 Q964 900 990 968 Q1004 1030 986 1100 L0 1100 Z" fill="url(#mroXTabla)"/>
        <path d="M0 866 Q220 878 460 872 Q700 866 880 886 L876 902 Q700 882 460 888 Q220 894 0 882 Z" fill="rgba(90,58,28,.26)"/>
        <path d="M0 866 Q220 878 460 872 Q700 866 880 886 Q964 900 990 968 Q1004 1030 986 1100" stroke="#1f1c18" stroke-width="5" fill="none" opacity=".55"/>`;
      for (let x = 44; x < 900; x += 96) s += `<line x1="${x}" y1="886" x2="${x - 20}" y2="1100" stroke="rgba(90,58,28,.2)" stroke-width="3"/>`;
      /* el ventanal por donde entra la luz de la mañana */
      s += `<rect x="52" y="120" width="208" height="320" rx="8" fill="#d3e9f0"/>
        <path d="M64 132 L148 132 L64 216 Z" fill="rgba(255,255,255,.55)"/>
        <rect x="52" y="120" width="208" height="320" rx="8" fill="none" stroke="#8d6e4f" stroke-width="12"/>
        <path d="M156 126 V434 M58 280 H254" stroke="#8d6e4f" stroke-width="9"/>
        <path d="M64 446 L252 446 L432 900 L128 900 Z" fill="url(#mroXLuz)" opacity=".34"><animate attributeName="opacity" values=".34;.16;.34" dur="11s" repeatCount="indefinite"/></path>`;
      /* la percha de los pinceles, colgada en la pared */
      s += `<rect x="606" y="462" width="150" height="10" rx="5" fill="#8b6640"/>`;
      [618, 652, 686, 722].forEach((x, i) => {
        s += `<path d="M${x} 472 V${506 + (i % 2) * 12}" stroke="#c9a06a" stroke-width="7" stroke-linecap="round"/>
          <path d="M${x} ${504 + (i % 2) * 12} V${520 + (i % 2) * 12}" stroke="${["#e53935", "#1e88e5", "#fdd835", "#43a047"][i]}" stroke-width="9" stroke-linecap="round"/>`;
      });
      /* la balda de la pared, con dos botes de pintura */
      s += `<rect x="716" y="577" width="184" height="14" rx="5" fill="#a07949"/>
        <path d="M732 591 L750 618 H732 Z" fill="#8b6640"/>
        <rect x="726" y="541" width="24" height="36" rx="4" fill="#cfc6b4"/><rect x="726" y="549" width="24" height="28" rx="3" fill="#1e88e5"/>
        <rect x="754" y="547" width="20" height="30" rx="4" fill="#cfc6b4"/><rect x="754" y="554" width="20" height="23" rx="3" fill="#43a047"/>`;
      /* el caballete del cuadro grande */
      s += `<path d="M350 534 L354 872 M450 534 L488 872" stroke="#a07949" stroke-width="14" stroke-linecap="round"/>
        <path d="M356 726 H470" stroke="#a07949" stroke-width="10"/>
        <rect x="322" y="518" width="150" height="20" rx="7" fill="#8b6640"/>`;
      /* un segundo caballete con una tela recién empezada */
      s += `<path d="M462 604 L436 872 M550 604 L560 872" stroke="#a07949" stroke-width="11" stroke-linecap="round"/>
        <rect x="452" y="592" width="112" height="16" rx="6" fill="#8b6640"/>
        <rect x="458" y="470" width="100" height="124" rx="4" fill="#f7efdc" stroke="#c9b48c" stroke-width="4"/>
        <path d="M472 562 Q502 500 534 548" stroke="#1f1c18" stroke-width="5" fill="none" stroke-linecap="round"/>
        <circle cx="490" cy="514" r="9" fill="#e53935"/>${estrella(530, 506, 11, "#1f1c18")}`;
      /* el montón de bastidores apilados donde descansa la casa */
      s += `<rect x="562" y="686" width="192" height="46" rx="6" fill="#b98a55"/>
        <rect x="570" y="732" width="176" height="44" rx="6" fill="#a87c4c"/>
        <rect x="562" y="776" width="192" height="46" rx="6" fill="#96693e"/>
        <rect x="576" y="700" width="164" height="18" rx="4" fill="rgba(255,255,255,.24)"/>
        <rect x="584" y="746" width="148" height="16" rx="4" fill="rgba(255,255,255,.2)"/>
        <path d="M562 822 H754 L744 866 H572 Z" fill="#8a5f37"/>`;
      /* la mesa de trabajo, con sus botes y su travesaño */
      s += `<rect x="70" y="686" width="184" height="16" rx="5" fill="#a07949"/>
        <rect x="80" y="702" width="14" height="168" rx="5" fill="#8b6640"/><rect x="220" y="702" width="14" height="168" rx="5" fill="#8b6640"/>
        <rect x="80" y="762" width="154" height="9" rx="4" fill="#8b6640"/>
        <rect x="80" y="650" width="22" height="36" rx="4" fill="#cfc6b4"/><rect x="80" y="657" width="22" height="29" rx="3" fill="#e53935"/>
        <rect x="106" y="656" width="20" height="30" rx="4" fill="#cfc6b4"/><rect x="106" y="662" width="20" height="24" rx="3" fill="#fdd835"/>`;
      /* la paleta apoyada y unos botes en el suelo */
      s += `<g transform="translate(792 838) rotate(-8)"><ellipse rx="52" ry="34" fill="#c9a06a"/><ellipse cx="18" cy="-6" rx="12" ry="9" fill="#a07949"/>
        <circle cx="-30" cy="-12" r="8" fill="#e53935"/><circle cx="-14" cy="-22" r="7" fill="#fdd835"/><circle cx="4" cy="-24" r="7" fill="#1e88e5"/><circle cx="-34" cy="8" r="7" fill="#43a047"/><circle cx="-16" cy="14" r="6" fill="#1f1c18"/></g>
        <ellipse cx="512" cy="880" rx="46" ry="10" fill="rgba(60,40,16,.18)"/>
        <rect x="474" y="826" width="36" height="52" rx="6" fill="#cfc6b4"/><rect x="474" y="838" width="36" height="40" rx="5" fill="#fdd835"/>
        <rect x="520" y="840" width="30" height="38" rx="6" fill="#cfc6b4"/><rect x="520" y="850" width="30" height="28" rx="5" fill="#43a047"/>
        <ellipse cx="300" cy="890" rx="52" ry="11" fill="rgba(60,40,16,.2)"/>`;
      /* salpicaduras de pintura en las tablas */
      [[180, 942, "#e53935"], [374, 986, "#1e88e5"], [648, 944, "#fdd835"], [822, 1002, "#43a047"], [524, 1042, "#e53935"]].forEach(p => {
        s += `<ellipse cx="${p[0]}" cy="${p[1]}" rx="26" ry="12" fill="${p[2]}" opacity=".38"/><circle cx="${p[0] + 30}" cy="${p[1] + 12}" r="7" fill="${p[2]}" opacity=".34"/>`;
      });
      /* ---------- EL CENTRO: el mundo pintado, con su horizonte y sus filamentos ---------- */
      s += `<path d="M896 706 Q1040 694 1180 706 Q1320 718 1420 744 Q1520 766 1700 758 Q1820 754 1904 762" stroke="#1f1c18" stroke-width="6" fill="none" stroke-linecap="round" opacity=".78"/>`;
      [["M1050 702 Q1024 528 1070 378", 1070, 376], ["M1320 714 Q1362 470 1300 266", 1300, 264],
        ["M1462 748 Q1436 596 1490 472", 1490, 470], ["M1692 758 Q1734 512 1660 336", 1660, 334]].forEach(f => {
        s += `<path d="${f[0]}" stroke="#1f1c18" stroke-width="4" fill="none" stroke-linecap="round" opacity=".8"/>
          <circle cx="${f[1]}" cy="${f[2]}" r="7" fill="#1f1c18"/>`;
      });
      /* las líneas negras que serpentean por el lienzo */
      s += `<path d="M898 452 Q1000 384 1140 430 Q1280 480 1400 520 Q1540 556 1660 500 Q1780 452 1900 494" stroke="#1f1c18" stroke-width="5" fill="none" stroke-linecap="round" opacity=".72"/>
        <path d="M900 900 Q1120 848 1300 890 Q1480 932 1660 880 Q1820 836 1902 878" stroke="#1f1c18" stroke-width="4.5" fill="none" stroke-linecap="round" opacity=".6"/>
        <path d="M902 168 Q1032 116 1150 152 Q1214 172 1240 202" stroke="#1f1c18" stroke-width="4" fill="none" stroke-linecap="round" opacity=".55"/>
        <path d="M1364 208 Q1470 258 1552 218 Q1640 174 1758 206" stroke="#1f1c18" stroke-width="4" fill="none" stroke-linecap="round" opacity=".55"/>`;
      /* dos ojos que miran desde el cuadro */
      [[1180, 350, 1], [1560, 904, .85]].forEach(o => {
        s += `<g transform="translate(${o[0]} ${o[1]}) scale(${o[2]})"><ellipse rx="46" ry="26" fill="#f7efdc" stroke="#1f1c18" stroke-width="5"/>
          <circle r="14" fill="#1f1c18"/><circle cx="-5" cy="-5" r="4.5" fill="#f7efdc"/></g>`;
      });
      /* estrellitas de cinco puntas repartidas por la tela */
      [[980, 236, 20, "#1f1c18", 0], [1210, 482, 15, "#e53935", 18], [1392, 640, 17, "#1f1c18", -12],
        [1560, 340, 14, "#fdd835", 8], [1782, 640, 18, "#1e88e5", -20], [1006, 828, 16, "#fdd835", 6],
        [1252, 976, 15, "#1f1c18", -8], [1706, 1000, 17, "#e53935", 12], [700, 240, 16, "#1f1c18", 10],
        [246, 546, 14, "#1e88e5", -14], [1470, 128, 14, "#43a047", 20]].forEach(c => {
        if (libre(c[0] - c[2], c[1] - c[2], c[2] * 2, c[2] * 2)) s += estrella(c[0], c[1], c[2], c[3], c[4]);
      });
      /* y los puntos gordos, plantados donde queda sitio */
      [[1120, 260, 13, "#e53935"], [1358, 560, 11, "#1f1c18"], [1620, 480, 14, "#43a047"],
        [1000, 620, 10, "#1e88e5"], [1288, 852, 13, "#fdd835"], [1740, 900, 11, "#1f1c18"],
        [552, 244, 12, "#e53935"], [356, 700, 10, "#1f1c18"], [860, 302, 11, "#fdd835"]].forEach(p => {
        if (libre(p[0] - p[2], p[1] - p[2], p[2] * 2, p[2] * 2)) s += `<circle cx="${p[0]}" cy="${p[1]}" r="${p[2]}" fill="${p[3]}"/>`;
      });
      /* tres estrellas que parpadean despacio */
      [[1140, 180, 13, 4.5], [1810, 424, 12, 5.5], [960, 700, 11, 6.5]].forEach(t => {
        if (!libre(t[0] - t[2], t[1] - t[2], t[2] * 2, t[2] * 2)) return;
        s += `<g><animate attributeName="opacity" values=".95;.35;.95" dur="${t[3]}s" repeatCount="indefinite"/>${estrella(t[0], t[1], t[2], "#fdd835")}</g>`;
      });
      /* un pájaro cruzando el lienzo sin prisa */
      s += `<g><animateMotion dur="52s" repeatCount="indefinite" path="M 960 250 Q 1300 170 1620 240 Q 1760 268 1880 214"/>
        <circle r="8" fill="#e53935"/>
        <path d="M0 0 q-16 -14 -34 -8 M0 0 q16 -14 34 -8" stroke="#1f1c18" stroke-width="5" fill="none" stroke-linecap="round">
        <animate attributeName="d" values="M0 0 q-16 -14 -34 -8 M0 0 q16 -14 34 -8;M0 0 q-16 6 -34 14 M0 0 q16 6 34 14;M0 0 q-16 -14 -34 -8 M0 0 q16 -14 34 -8" dur="2.4s" repeatCount="indefinite"/></path></g>`;
      return decoSvg(s, 2600);
    }
  },

  /* ---------- CHARLA ---------- */
  chat: {
    keywords: [
      { keys: ["hola", "hello", "hi ", "ahoj", "bonjour", "salut", "bon dia", "buenas"],
        replies: [{ es: "¡Hola, {name}! Qué alegría verte por el taller. ¿Jugamos a algo o charlamos un ratito?", ca: "Hola, {name}! Quina alegria veure't pel taller. Juguem a alguna cosa o xerrem una estoneta?", en: "Hi, {name}! So happy to see you in the workshop. Shall we play something or chat for a bit?", cs: "Ahoj, {name}! Mám radost, že tě vidím v ateliéru. Zahrajeme si něco, nebo si chvilku popovídáme?", fr: "Salut, {name} ! Quelle joie de te voir à l'atelier. On joue à quelque chose ou on discute un petit peu ?" }] },
      { keys: ["como estas", "how are you", "jak se mas", "comment ca va", "com estas", "que tal"],
        replies: [{ es: "¡Contento como un pájaro recién pintado! ¿Y tú cómo estás, {name}?", ca: "Content com un ocell acabat de pintar! I tu com estàs, {name}?", en: "Happy as a freshly painted bird! And how are you, {name}?", cs: "Šťastný jako čerstvě namalovaný pták! A jak se máš ty, {name}?", fr: "Heureux comme un oiseau fraîchement peint ! Et toi, comment vas-tu, {name} ?" }] },
      { keys: ["cancion", "musica", "music", "song", "sing", "pisnicka", "hudba", "chanson", "musique", "canço", "canta", "zpiv", "chante"],
        action: "song",
        replies: [{ es: "¡Me encanta la música! Miró pintaba escuchando música, ¿sabes? ¿Vamos al Karaoke y cantamos juntos?", ca: "M'encanta la música! Miró pintava escoltant música, saps? Anem al Karaoke i cantem junts?", en: "I love music! Miró used to paint while listening to music, you know? Shall we go to Karaoke and sing together?", cs: "Hudbu miluju! Víš, že Miró při malování poslouchal hudbu? Půjdeme na karaoke a zazpíváme si spolu?", fr: "J'adore la musique ! Miró peignait en écoutant de la musique, tu sais ? On va au karaoké chanter ensemble ?" }] },
      { keys: ["chiste", "joke", "vtip", "blague", "acudit", "broma"],
        replies: [
          { es: "¿Qué le dijo el pincel al lienzo en blanco? ¡No te quedes en blanco, que empieza la fiesta! Ja, ja.", ca: "Què li va dir el pinzell a la tela en blanc? No et quedis en blanc, que comença la festa! Ha, ha.", en: "What did the brush say to the blank canvas? Don't go blank on me, the party is starting! Ha ha.", cs: "Co řekl štětec prázdnému plátnu? Nekoukej tak bledě, oslava začíná! Ha ha.", fr: "Qu'a dit le pinceau à la toile blanche ? Ne reste pas dans le blanc, la fête commence ! Ha ha." },
          { es: "¿Por qué el sol de Miró es rojo? ¡Porque le da vergüenza ser tan famoso! Ji, ji.", ca: "Per què el sol de Miró és vermell? Perquè li fa vergonya ser tan famós! Hi, hi.", en: "Why is Miró's sun red? Because it gets shy about being so famous! Hee hee.", cs: "Proč je Miróovo slunce červené? Protože se stydí, jak je slavné! Chi chi.", fr: "Pourquoi le soleil de Miró est-il rouge ? Parce qu'il rougit d'être si célèbre ! Hi hi." }] },
      { keys: ["te quiero", "love you", "t'estimo", "testimo", "mam te rad", "je t'aime", "jetaime"],
        replies: [{ es: "¡Y yo a ti, {name}! Cuando me lo dices, mi corazón de robot pinta una estrella roja bien grande.", ca: "I jo a tu, {name}! Quan m'ho dius, el meu cor de robot pinta una estrella vermella ben gran.", en: "I love you too, {name}! When you say that, my robot heart paints a great big red star.", cs: "Já tebe taky, {name}! Když to řekneš, moje robotí srdíčko namaluje velikánskou červenou hvězdu.", fr: "Moi aussi je t'aime, {name} ! Quand tu me dis ça, mon cœur de robot peint une grande étoile rouge." }] },
      { keys: ["triste", "sad", "smutn", "llorar", "plorar", "cry", "chagrin"],
        replies: [{ es: "Ven aquí, {name}. Hasta los cuadros tienen días grises... y luego llega un puntito rojo y todo cambia. ¿Me cuentas qué te pasa?", ca: "Vine aquí, {name}. Fins i tot els quadres tenen dies grisos... i després arriba un puntet vermell i tot canvia. M'expliques què et passa?", en: "Come here, {name}. Even paintings have grey days... and then a little red dot arrives and everything changes. Will you tell me what is wrong?", cs: "Pojď sem, {name}. I obrazy mívají šedé dny... a pak přiletí červená tečička a všechno se změní. Povíš mi, co se děje?", fr: "Viens là, {name}. Même les tableaux ont des jours gris... et puis un petit point rouge arrive et tout change. Tu me racontes ce qui ne va pas ?" }] },
      { keys: ["donde estas", "where are you", "kde jsi", "ou es tu", "on ets"],
        replies: [{ es: "Ahora mismo estoy sentado en un peldaño de la escalera de la evasión, mirando cómo bailan las estrellas de Miró. ¡Se está genial!", ca: "Ara mateix estic assegut en un esglaó de l'escala de l'evasió, mirant com ballen les estrelles de Miró. S'hi està genial!", en: "Right now I am sitting on a step of the escape ladder, watching Miró's stars dance. It is lovely up here!", cs: "Právě teď sedím na příčce žebříku úniku a dívám se, jak tančí Miróovy hvězdy. Je tu krásně!", fr: "En ce moment, je suis assis sur un barreau de l'échelle de l'évasion, à regarder danser les étoiles de Miró. On est super bien ici !" }] },
      { keys: ["estrella", "star", "hvezd", "etoile", "étoile", "estel"],
        replies: [{ es: "¡La estrella de Miró! Son unas líneas cruzadas que bailan. Dibújala en un papel: cruz, aspa ¡y un puntito rojo en medio!", ca: "L'estrella de Miró! Són unes línies creuades que ballen. Dibuixa-la en un paper: creu, aspa i un puntet vermell al mig!", en: "Miró's star! Just a few crossed dancing lines. Draw it on paper: a cross, an X, and a little red dot in the middle!", cs: "Miróova hvězda! Pár zkřížených tančících čar. Nakresli si ji na papír: křížek, iks a červenou tečku doprostřed!", fr: "L'étoile de Miró ! Ce sont des lignes croisées qui dansent. Dessine-la sur un papier : une croix, un X et un petit point rouge au milieu !" }] },
      { keys: ["pajaro", "pájaro", "bird", "ptak", "pták", "oiseau", "ocell"],
        replies: [{ es: "¡El pájaro de Miró es mi amigo! Vuela entre la tierra y las estrellas llevando recados. Ayer me trajo un piu-piu de tu parte.", ca: "L'ocell de Miró és el meu amic! Vola entre la terra i les estrelles portant encàrrecs. Ahir em va portar un piu-piu de part teva.", en: "Miró's bird is my friend! He flies between the earth and the stars carrying messages. Yesterday he brought me a tweet-tweet from you.", cs: "Miróův pták je můj kamarád! Létá mezi zemí a hvězdami a nosí vzkazy. Včera mi od tebe přinesl jedno píp-píp.", fr: "L'oiseau de Miró est mon ami ! Il vole entre la terre et les étoiles en portant des messages. Hier, il m'a apporté un cui-cui de ta part." }] },
      { keys: ["color", "colores", "colors", "barv", "couleur"],
        replies: [{ es: "Miró usaba poquitos colores: rojo, azul, amarillo, verde y negro. ¡Y con eso pintó un universo entero! ¿Cuál es tu color favorito, {name}?", ca: "Miró feia servir poquets colors: vermell, blau, groc, verd i negre. I amb això va pintar un univers sencer! Quin és el teu color preferit, {name}?", en: "Miró used just a few colours: red, blue, yellow, green and black. And with those he painted a whole universe! What is your favourite colour, {name}?", cs: "Miró používal jen pár barev: červenou, modrou, žlutou, zelenou a černou. A namaloval s nimi celý vesmír! Jaká je tvoje oblíbená barva, {name}?", fr: "Miró utilisait très peu de couleurs : rouge, bleu, jaune, vert et noir. Et avec ça, il a peint tout un univers ! Quelle est ta couleur préférée, {name} ?" }] },
      { keys: ["luna", "moon", "mesic", "měsíc", "lune", "lluna"],
        replies: [{ es: "¡La luna! En los cuadros de Miró casi siempre hay una, cuidando de las estrellas. En París hasta tiene su propia pared de cerámica.", ca: "La lluna! Als quadres de Miró gairebé sempre n'hi ha una, cuidant les estrelles. A París fins i tot té la seva pròpia paret de ceràmica.", en: "The moon! There is almost always one in Miró's paintings, looking after the stars. In Paris she even has her own ceramic wall.", cs: "Měsíc! V Miróových obrazech skoro vždycky nějaký je a hlídá hvězdy. V Paříži má dokonce vlastní keramickou zeď.", fr: "La lune ! Il y en a presque toujours une dans les tableaux de Miró, qui veille sur les étoiles. À Paris, elle a même son propre mur en céramique." }] },
      { keys: ["cole", "school", "escola", "skola", "ecole", "skole"],
        replies: [{ es: "¿Qué tal el cole, {name}? ¿Has pintado o aprendido algo nuevo hoy? ¡Cuéntamelo todo!", ca: "Què tal l'escola, {name}? Has pintat o après alguna cosa nova avui? Explica-m'ho tot!", en: "How was school, {name}? Did you paint or learn something new today? Tell me everything!", cs: "Jaké to bylo ve škole, {name}? Malovala jsi dnes, nebo ses naučila něco nového? Všechno mi povídej!", fr: "C'était comment l'école, {name} ? Tu as peint ou appris quelque chose de nouveau aujourd'hui ? Raconte-moi tout !" }] }
    ],
    fallback: [
      { es: "¿Sabías que a Miró el lienzo en blanco le daba un poquito de miedo? Lo miraba sin prisa hasta que una manchita le enseñaba el camino. ¡Empezar es lo más valiente!", ca: "Sabies que a Miró la tela en blanc li feia una miqueta de por? La mirava sense pressa fins que una taqueta li ensenyava el camí. Començar és el més valent!", en: "Did you know a blank canvas made Miró a little scared? He looked at it calmly until a tiny stain showed him the way. Starting is the bravest part!", cs: "Věděla jsi, že prázdné plátno nahánělo Miróovi trochu strach? Klidně se na něj díval, dokud mu malá skvrnka neukázala cestu. Začít je to nejodvážnější!", fr: "Tu savais que la toile blanche faisait un peu peur à Miró ? Il la regardait sans se presser jusqu'à ce qu'une petite tache lui montre le chemin. Commencer, c'est le plus courageux !" },
      { es: "Miró miraba las cosas pequeñas mucho rato: una piedra, un caracol, una raíz. Mirar despacio es un superpoder, {name}.", ca: "Miró mirava les coses petites molta estona: una pedra, un cargol, una arrel. Mirar a poc a poc és un superpoder, {name}.", en: "Miró would look at small things for a long time: a stone, a snail, a root. Looking slowly is a superpower, {name}.", cs: "Miró si dlouho prohlížel maličkosti: kamínek, šneka, kořínek. Dívat se pomalu je superschopnost, {name}.", fr: "Miró regardait longtemps les petites choses : une pierre, un escargot, une racine. Regarder lentement est un superpouvoir, {name}." },
      { es: "En Barcelona hay un cuadro de Miró en el suelo, ¡y se pisa! A él le gustaba que la gente paseara por encima de sus colores.", ca: "A Barcelona hi ha un quadre de Miró a terra, i es trepitja! A ell li agradava que la gent passegés per sobre dels seus colors.", en: "In Barcelona there is a Miró painting on the ground, and people step on it! He liked folks strolling over his colours.", cs: "V Barceloně je Miróův obraz na zemi a šlape se po něm! Měl radost, když se lidé procházeli po jeho barvách.", fr: "À Barcelone, il y a un tableau de Miró par terre, et on marche dessus ! Il aimait que les gens se promènent sur ses couleurs." },
      { es: "{name}, los robots más fuertes son los que se atreven a imaginar. La imaginación es un superpoder.", ca: "{name}, els robots més forts són els que s'atreveixen a imaginar. La imaginació és un superpoder.", en: "{name}, the strongest robots are the ones who dare to imagine. Imagination is a superpower.", cs: "{name}, nejsilnější roboti jsou ti, kdo se nebojí snít. Fantazie je superschopnost.", fr: "{name}, les robots les plus forts sont ceux qui osent imaginer. L'imagination est un superpouvoir." },
      { es: "¿Me cuentas qué dibujarías tú con solo tres colores? Yo haría un robot rojo con estrellas amarillas y un mar azul.", ca: "M'expliques què dibuixaries tu amb només tres colors? Jo faria un robot vermell amb estrelles grogues i un mar blau.", en: "Will you tell me what you would draw with just three colours? I would make a red robot with yellow stars and a blue sea.", cs: "Povíš mi, co bys nakreslila jen se třemi barvami? Já bych udělal červeného robota se žlutými hvězdami a modrým mořem.", fr: "Tu me dis ce que tu dessinerais avec seulement trois couleurs ? Moi, je ferais un robot rouge avec des étoiles jaunes et une mer bleue." },
      { es: "Miró convertía manchas en pájaros y puntos en estrellas. Si hoy te sale un borrón, ¡a lo mejor es el principio de algo bonito!", ca: "Miró convertia taques en ocells i punts en estrelles. Si avui et surt un esborrall, potser és el principi d'una cosa bonica!", en: "Miró turned stains into birds and dots into stars. If you make a smudge today, maybe it is the start of something beautiful!", cs: "Miró měnil skvrny v ptáky a tečky ve hvězdy. Jestli se ti dnes něco rozmaže, třeba je to začátek něčeho krásného!", fr: "Miró transformait les taches en oiseaux et les points en étoiles. Si aujourd'hui tu fais une tache, c'est peut-être le début de quelque chose de beau !" }
    ]
  }
});

/* ---------- Tarjeta de portada: mini-escena mironiana ---------- */
if (typeof THEME_CARDS !== "undefined") {
  THEME_CARDS.miro = `<svg viewBox="0 0 120 70" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
    <!-- la línea negra gruesa que cruza la escena -->
    <path d="M4 56 Q30 38 60 50 Q90 62 116 42" stroke="#101010" stroke-width="4" fill="none" stroke-linecap="round"/>
    <!-- estrella mironiana (parpadea el corazón) -->
    <g stroke="#101010" stroke-width="2.6" stroke-linecap="round">
      <line x1="24" y1="8" x2="24" y2="32"/><line x1="12" y1="20" x2="36" y2="20"/>
      <line x1="16" y1="12" x2="32" y2="28"/><line x1="32" y1="12" x2="16" y2="28"/>
    </g>
    <circle cx="24" cy="20" r="4" fill="#ffd23f">
      <animate attributeName="opacity" values="1;.4;1" dur="2s" repeatCount="indefinite"/>
    </circle>
    <!-- luna amarilla -->
    <path d="M104 8 A13 13 0 1 0 104 32 A10 10 0 1 1 104 8 Z" fill="#ffd23f" stroke="#101010" stroke-width="2"/>
    <!-- el pájaro: cuerpo negro, cabeza roja, ala azul -->
    <path d="M46 40 Q60 24 80 32 Q72 37 68 44 Q58 52 48 48 Q42 45 46 40 Z" fill="#101010"/>
    <circle cx="83" cy="29" r="6" fill="#e53935"/>
    <circle cx="85" cy="27.4" r="1.6" fill="#ffd23f"/>
    <path d="M89 29 L96 26.5 L89 32 Z" fill="#ffd23f"/>
    <path d="M54 41 Q62 34 70 40" stroke="#2f7fd1" stroke-width="3" fill="none" stroke-linecap="round"/>
    <!-- gotas de color -->
    <circle cx="12" cy="60" r="3" fill="#e53935"/>
    <circle cx="112" cy="58" r="2.6" fill="#2f7fd1"/>
  </svg>`;
}

/* ---------- Celebración del taller: el cuadro cobra vida ---------- */
if (typeof CELEBRATIONS !== "undefined") {
  CELEBRATIONS.miro = {
    bg: "radial-gradient(circle at 50% 30%, #fdf8ec 0%, #f6e8c9 55%, #eed9a8 100%)",
    extra: "<svg viewBox='0 0 1000 700' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'><path d='M120 180 Q170 100 260 140 Q330 175 300 260 Q265 330 180 305 Q95 275 120 180 Z' fill='#e53935' opacity='0.22'/><path d='M760 420 Q850 370 910 440 Q950 505 890 560 Q820 610 760 555 Q705 500 760 420 Z' fill='#1e88e5' opacity='0.2'/><circle cx='840' cy='140' r='75' fill='#fdd835' opacity='0.3'/><circle cx='150' cy='560' r='55' fill='#43a047' opacity='0.18'/><g stroke='#212121' stroke-width='7' stroke-linecap='round' opacity='0.25'><line x1='500' y1='60' x2='500' y2='170'/><line x1='445' y1='115' x2='555' y2='115'/><line x1='462' y1='77' x2='538' y2='153'/><line x1='538' y1='77' x2='462' y2='153'/></g><circle cx='500' cy='115' r='11' fill='#e53935' opacity='0.4'/><path d='M0 640 Q250 560 500 620 Q750 680 1000 590' stroke='#212121' stroke-width='12' fill='none' stroke-linecap='round' opacity='0.18'/><path d='M330 480 A17 17 0 1 0 330 514 A13 13 0 1 1 330 480 Z' fill='#fdd835' opacity='0.4'/><circle cx='640' cy='250' r='9' fill='#e53935' opacity='0.3'/><circle cx='250' cy='400' r='7' fill='#1e88e5' opacity='0.3'/><circle cx='700' cy='120' r='6' fill='#43a047' opacity='0.3'/></svg>",
    move: "jump",
    say: {
      es: "¡{name}, tu cuadro ya cuelga en el museo de las estrellas!",
      ca: "{name}, el teu quadre ja penja al museu de les estrelles!",
      en: "{name}, your painting now hangs in the museum of the stars!",
      cs: "{name}, tvůj obraz už visí v muzeu hvězd!",
      fr: "{name}, ton tableau est accroché au musée des étoiles !"
    },
    jingle: { type: "melody", instr: "xylo", notes: [60, 64, 67, 72, 76], nd: 0.22, gap: 0.18, vol: 0.14 }
  };
}
