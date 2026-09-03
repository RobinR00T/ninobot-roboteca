"use strict";
/* ============================================================
   Contenido de PICASSO (parte B): historias ramificadas,
   canciones, traductor, mapa de exploración con arte propio,
   charla, tarjeta de portada y celebración del taller.
   ============================================================ */

Object.assign(THEMES.picasso.content, {

  /* ---------- HISTORIAS (ramifican de verdad) ---------- */
  stories: [
    {
      id: "paloma", emoji: "🕊️", start: "n1",
      title: { es: "La paloma que quería pintar", ca: "La coloma que volia pintar", en: "The Dove Who Wanted to Paint", cs: "Holubice, která chtěla malovat", fr: "La colombe qui voulait peindre" },
      nodes: {
        n1: {
          text: { es: "¡Toc, toc! Una paloma blanca llama a la ventana del taller. Lleva todo el día repartiendo ramitas de olivo, pero tiene un sueño secreto: quiere aprender a pintar. ¿La ayudamos, {name}?", ca: "Toc, toc! Una coloma blanca truca a la finestra del taller. Porta tot el dia repartint branquetes d'olivera, però té un somni secret: vol aprendre a pintar. L'ajudem, {name}?", en: "Knock, knock! A white dove taps on the workshop window. She spends all day delivering olive twigs, but she has a secret dream: she wants to learn to paint. Shall we help her, {name}?", cs: "Ťuk, ťuk! Na okno ateliéru klepe bílá holubice. Celý den roznáší olivové snítky, ale má tajný sen: chce se naučit malovat. Pomůžeme jí, {name}?", fr: "Toc, toc ! Une colombe blanche frappe à la fenêtre de l'atelier. Elle passe ses journées à livrer des brins d'olivier, mais elle a un rêve secret : apprendre à peindre. On l'aide, {name} ?" },
          choices: [
            { t: { es: "Le damos un pincel chiquitín para el pico", ca: "Li donem un pinzell petitó per al bec", en: "We give her a tiny brush for her beak", cs: "Dáme jí do zobáčku malinký štětec", fr: "On lui donne un petit pinceau pour le bec" }, go: "n2a" },
            { t: { es: "Que moje las puntas de las alas en pintura", ca: "Que mulli les puntes de les ales en pintura", en: "She can dip her wingtips in paint", cs: "Ať si namočí špičky křídel do barvy", fr: "Elle peut tremper le bout de ses ailes dans la peinture" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "El pincel le hace cosquillas en el pico. ¡Achís! Del estornudo sale una mancha azul... ¡que parece una nube! La paloma da saltitos de emoción.", ca: "El pinzell li fa pessigolles al bec. Atxim! De l'esternut surt una taca blava... que sembla un núvol! La coloma fa saltets d'emoció.", en: "The brush tickles her beak. Achoo! The sneeze makes a blue splotch... that looks just like a cloud! The dove hops with excitement.", cs: "Štětec ji lechtá na zobáčku. Hepčík! Z kýchnutí vyletí modrá skvrna... a vypadá jako obláček! Holubice poskakuje nadšením.", fr: "Le pinceau lui chatouille le bec. Atchoum ! L'éternuement fait une tache bleue... qui ressemble à un nuage ! La colombe sautille de joie." },
          choices: [
            { t: { es: "Practicamos formas en un papel grande", ca: "Practiquem formes en un paper gran", en: "Let's practise shapes on a big paper", cs: "Procvičíme tvary na velkém papíře", fr: "On s'entraîne aux formes sur un grand papier" }, go: "n3" },
            { t: { es: "Primero le enseñamos la paleta de colores", ca: "Primer li ensenyem la paleta de colors", en: "First we show her the colour palette", cs: "Nejdřív jí ukážeme paletu barev", fr: "D'abord on lui montre la palette de couleurs" }, go: "n4a" }
          ]
        },
        n2b: {
          text: { es: "La paloma moja las puntas de las alas en rosa y azul y vuela sobre el papel. ¡Deja arcos de colores como un arcoíris que aletea!", ca: "La coloma mulla les puntes de les ales en rosa i blau i vola sobre el paper. Deixa arcs de colors com un arc de Sant Martí que aleteja!", en: "The dove dips her wingtips in pink and blue and flies over the paper. She leaves arcs of colour, like a rainbow flapping its wings!", cs: "Holubice si namočí špičky křídel do růžové a modré a letí nad papírem. Nechává za sebou barevné oblouky jako mávající duha!", fr: "La colombe trempe le bout de ses ailes dans le rose et le bleu et vole au-dessus du papier. Elle laisse des arcs de couleurs, comme un arc-en-ciel qui bat des ailes !" },
          choices: [
            { t: { es: "Practicamos formas juntos", ca: "Practiquem formes junts", en: "Let's practise shapes together", cs: "Procvičíme tvary spolu", fr: "On s'entraîne aux formes ensemble" }, go: "n3" },
            { t: { es: "Salimos a buscar algo bonito que pintar", ca: "Sortim a buscar una cosa bonica per pintar", en: "Let's go out and find something lovely to paint", cs: "Půjdeme ven najít něco krásného k malování", fr: "On sort chercher quelque chose de joli à peindre" }, go: "n4b" }
          ]
        },
        n3: {
          text: { es: "Círculos, cuadrados, zigzags... La paloma mezcla el azul con el rosa y descubre su color favorito: un lila suave como el atardecer. Ya está lista. ¿Qué pintamos, {name}?", ca: "Cercles, quadrats, zig-zags... La coloma barreja el blau amb el rosa i descobreix el seu color preferit: un lila suau com el capvespre. Ja està a punt. Què pintem, {name}?", en: "Circles, squares, zigzags... The dove mixes blue with pink and discovers her favourite colour: a soft lilac like the sunset. Now she is ready. What shall we paint, {name}?", cs: "Kolečka, čtverce, klikyháky... Holubice smíchá modrou s růžovou a objeví svou oblíbenou barvu: jemně fialovou jako západ slunce. Teď je připravená. Co namalujeme, {name}?", fr: "Des cercles, des carrés, des zigzags... La colombe mélange le bleu et le rose et découvre sa couleur préférée : un lilas doux comme le soir. La voilà prête. Qu'est-ce qu'on peint, {name} ?" },
          choices: [
            { t: { es: "Algo grande y valiente", ca: "Una cosa gran i valenta", en: "Something big and brave", cs: "Něco velkého a odvážného", fr: "Quelque chose de grand et courageux" }, go: "n4a" },
            { t: { es: "Algo pequeño y tierno", ca: "Una cosa petita i tendra", en: "Something small and sweet", cs: "Něco malého a něžného", fr: "Quelque chose de petit et tendre" }, go: "n4b" }
          ]
        },
        n4a: {
          text: { es: "En la plaza hay una pared gris y aburrida. Entre los dos la llenáis de un cielo enorme con sol y nubes de colores. La paloma pinta lo más alto, ¡que para eso vuela!", ca: "A la plaça hi ha una paret grisa i avorrida. Entre tots dos l'ompliu d'un cel enorme amb sol i núvols de colors. La coloma pinta la part més alta, que per això vola!", en: "In the square there is a grey, boring wall. Together you fill it with a huge sky, a sun and colourful clouds. The dove paints the highest part, because she can fly!", cs: "Na náměstí je šedá, nudná zeď. Společně ji zaplníte obrovským nebem se sluncem a barevnými mraky. Holubice maluje nejvýš, od toho přece umí létat!", fr: "Sur la place, il y a un mur gris et ennuyeux. Ensemble, vous le remplissez d'un ciel immense avec un soleil et des nuages colorés. La colombe peint tout en haut, puisqu'elle sait voler !" },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n5" }
          ]
        },
        n4b: {
          text: { es: "Pintáis un cuadrito pequeño: una flor lila para la vecina que siempre está sola. Lo dejáis en su ventana. Cuando lo ve, sonríe tanto que se le arrugan los ojos de alegría.", ca: "Pinteu un quadret petit: una flor lila per a la veïna que sempre està sola. El deixeu a la seva finestra. Quan el veu, somriu tant que se li arruguen els ulls d'alegria.", en: "You paint a tiny picture: a lilac flower for the neighbour who is always alone. You leave it on her windowsill. When she sees it, she smiles so much her eyes crinkle with joy.", cs: "Namalujete malý obrázek: fialovou květinu pro sousedku, která je pořád sama. Necháte ho na jejím okně. Když ho uvidí, usměje se tak, že se jí oči zavlní radostí.", fr: "Vous peignez un petit tableau : une fleur lilas pour la voisine qui est toujours seule. Vous le laissez sur sa fenêtre. Quand elle le voit, elle sourit tellement que ses yeux se plissent de joie." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n5" }
          ]
        },
        n5: {
          text: { es: "La gente del barrio se acerca asombrada: ¡una paloma pintora! Pero ella esconde la cabeza bajo el ala y susurra: 'Y si se ríen de mí... Las palomas no pintan'. ¿Qué hacemos, {name}?", ca: "La gent del barri s'acosta bocabadada: una coloma pintora! Però ella amaga el cap sota l'ala i xiuxiueja: 'I si es riuen de mi... Les colomes no pinten'. Què fem, {name}?", en: "The neighbours gather in amazement: a painting dove! But she hides her head under her wing and whispers: 'What if they laugh at me... Doves do not paint'. What do we do, {name}?", cs: "Sousedé se sbíhají a žasnou: malující holubice! Ona ale schová hlavu pod křídlo a šeptá: 'Co když se mi budou smát... Holubice přece nemalují'. Co uděláme, {name}?", fr: "Les gens du quartier s'approchent, émerveillés : une colombe qui peint ! Mais elle cache sa tête sous son aile et chuchote : 'Et s'ils se moquent de moi... Les colombes ne peignent pas'. Qu'est-ce qu'on fait, {name} ?" },
          choices: [
            { t: { es: "Decirle que lo bonito es atreverse", ca: "Dir-li que el més bonic és atrevir-se", en: "Tell her the lovely thing is to dare", cs: "Říct jí, že nejkrásnější je odvážit se", fr: "Lui dire que le plus beau, c'est d'oser" }, go: "n6a" },
            { t: { es: "Pintar todos juntos, para que no esté sola", ca: "Pintar tots junts, perquè no estigui sola", en: "Paint all together, so she is not alone", cs: "Malovat všichni spolu, ať na to není sama", fr: "Peindre tous ensemble, pour qu'elle ne soit pas seule" }, go: "n6b" }
          ]
        },
        n6a: {
          text: { es: "'Nadie nace sabiendo', le dices bajito. 'Lo bonito es intentarlo'. La paloma respira hondo, sale de debajo del ala... y pinta delante de todos una ramita de olivo que se convierte en pincel.", ca: "'Ningú neix ensenyat', li dius fluixet. 'El més bonic és intentar-ho'. La coloma respira fondo, surt de sota l'ala... i pinta davant de tothom una branqueta d'olivera que es converteix en pinzell.", en: "'Nobody is born knowing', you whisper. 'The lovely thing is to try'. The dove takes a deep breath, comes out from under her wing... and paints, in front of everyone, an olive twig that turns into a paintbrush.", cs: "'Nikdo se nenarodí hotový', šeptáš jí. 'Nejkrásnější je to zkusit'. Holubice se zhluboka nadechne, vykoukne zpod křídla... a přede všemi namaluje olivovou snítku, která se mění ve štětec.", fr: "'Personne ne naît en sachant tout', tu lui chuchotes. 'Le plus beau, c'est d'essayer'. La colombe respire un grand coup, sort de sous son aile... et peint devant tout le monde un brin d'olivier qui se transforme en pinceau." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e1" }
          ]
        },
        n6b: {
          text: { es: "Repartís pinceles a todo el mundo: los niños, el panadero, la abuela del quiosco... La plaza entera pinta a la vez, y la paloma vuela feliz añadiendo toques blancos aquí y allá.", ca: "Repartiu pinzells a tothom: els nens, el forner, l'àvia del quiosc... La plaça sencera pinta alhora, i la coloma vola feliç afegint tocs blancs aquí i allà.", en: "You hand out brushes to everyone: the kids, the baker, the granny from the kiosk... The whole square paints at once, and the dove flies around happily adding white touches here and there.", cs: "Rozdáte štětce úplně všem: dětem, pekaři, babičce z trafiky... Celé náměstí maluje najednou a holubice šťastně létá kolem a přidává sem tam bílé tečky.", fr: "Vous distribuez des pinceaux à tout le monde : les enfants, le boulanger, la mamie du kiosque... Toute la place peint en même temps, et la colombe vole, heureuse, en ajoutant des touches blanches ici et là." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e2" }
          ]
        },
        e1: {
          end: true,
          text: { es: "El barrio entero aplaude y la paloma firma su primer cuadro con la huella de su patita. Desde ese día reparte ramitas de olivo por la mañana y pinta por la tarde. Gracias por darle valor, {name}: atreverse también es un arte.", ca: "El barri sencer aplaudeix i la coloma signa el seu primer quadre amb la petjada de la seva poteta. Des d'aquell dia reparteix branquetes d'olivera al matí i pinta a la tarda. Gràcies per donar-li coratge, {name}: atrevir-se també és un art.", en: "The whole neighbourhood claps and the dove signs her first painting with her little footprint. From that day on she delivers olive twigs in the morning and paints in the afternoon. Thank you for giving her courage, {name}: daring is an art too.", cs: "Celá čtvrť tleská a holubice podepíše svůj první obraz otiskem nožičky. Od toho dne ráno roznáší olivové snítky a odpoledne maluje. Díky za tu odvahu, {name}: odvážit se je taky umění.", fr: "Tout le quartier applaudit et la colombe signe son premier tableau avec l'empreinte de sa petite patte. Depuis ce jour, elle livre des brins d'olivier le matin et peint l'après-midi. Merci de lui avoir donné du courage, {name} : oser aussi, c'est un art." }
        },
        e2: {
          end: true,
          text: { es: "Al atardecer, la pared gris es un mural de mil manos y una paloma. Nadie pregunta quién pinta mejor: lo pintasteis juntos, y por eso es el cuadro más bonito del barrio. Bien pensado, {name}: el arte compartido brilla el doble.", ca: "Al capvespre, la paret grisa és un mural de mil mans i una coloma. Ningú pregunta qui pinta millor: l'heu pintat junts, i per això és el quadre més bonic del barri. Ben pensat, {name}: l'art compartit brilla el doble.", en: "By sunset, the grey wall is a mural of a thousand hands and one dove. Nobody asks who paints best: you painted it together, and that is why it is the loveliest painting in the neighbourhood. Well thought, {name}: shared art shines twice as bright.", cs: "Za soumraku je z šedé zdi nástěnná malba tisíce rukou a jedné holubice. Nikdo se neptá, kdo maluje nejlíp: malovali jste spolu, a proto je to nejkrásnější obraz v celé čtvrti. Dobrý nápad, {name}: sdílené umění září dvakrát tolik.", fr: "Au coucher du soleil, le mur gris est une fresque de mille mains et d'une colombe. Personne ne demande qui peint le mieux : vous l'avez peinte ensemble, et c'est pour ça que c'est le plus beau tableau du quartier. Bien vu, {name} : l'art partagé brille deux fois plus." }
        }
      }
    },
    {
      id: "retrato", emoji: "👀", start: "n1",
      title: { es: "El retrato con los ojos bailones", ca: "El retrat amb els ulls balladors", en: "The Portrait with the Dancing Eyes", cs: "Portrét s tančícíma očima", fr: "Le portrait aux yeux danseurs" },
      nodes: {
        n1: {
          text: { es: "Es de noche en el museo y se oye un llanto. ¡Es un retrato cubista! Sus dos ojos han saltado del cuadro para irse a bailar y ahora no los encuentra. Por la mañana llegan los visitantes... ¿Por dónde buscamos, {name}?", ca: "És de nit al museu i se sent un plor. És un retrat cubista! Els seus dos ulls han saltat del quadre per anar a ballar i ara no els troba. Al matí arriben els visitants... Per on busquem, {name}?", en: "It is night time at the museum and someone is crying. It is a cubist portrait! Her two eyes jumped off the canvas to go dancing and now she cannot find them. The visitors arrive in the morning... Where do we look, {name}?", cs: "V muzeu je noc a někdo pláče. Je to kubistický portrét! Obě oči mu vyskočily z plátna, aby si šly zatančit, a teď je nemůže najít. Ráno přijdou návštěvníci... Kde začneme hledat, {name}?", fr: "Il fait nuit au musée et on entend pleurer. C'est un portrait cubiste ! Ses deux yeux ont sauté du tableau pour aller danser et maintenant il ne les retrouve plus. Les visiteurs arrivent demain matin... Où cherche-t-on, {name} ?" },
          choices: [
            { t: { es: "En la sala de música, ¡les encanta bailar!", ca: "A la sala de música, els encanta ballar!", en: "In the music room, they love dancing!", cs: "V hudebním sále, tancují moc rády!", fr: "Dans la salle de musique, ils adorent danser !" }, go: "n2a" },
            { t: { es: "Seguimos las huellas de colores del suelo", ca: "Seguim les petjades de colors del terra", en: "We follow the colourful footprints on the floor", cs: "Půjdeme po barevných stopách na podlaze", fr: "On suit les traces colorées sur le sol" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "En la sala de música, un piano toca solo, bajito. Y encima de las teclas... ¡dos ojillos bailando claqué! Tap, tap, tap. Todavía no os han visto.", ca: "A la sala de música, un piano toca sol, fluixet. I damunt de les tecles... dos ullets ballant claqué! Tap, tap, tap. Encara no us han vist.", en: "In the music room, a piano is playing softly by itself. And on the keys... two little eyes tap dancing! Tap, tap, tap. They have not seen you yet.", cs: "V hudebním sále hraje potichu piano úplně samo. A na klávesách... dvě očka stepují! Ťap, ťap, ťap. Ještě si vás nevšimla.", fr: "Dans la salle de musique, un piano joue tout seul, doucement. Et sur les touches... deux petits yeux qui font des claquettes ! Tap, tap, tap. Ils ne vous ont pas encore vus." },
          choices: [
            { t: { es: "Nos acercamos de puntillas", ca: "Ens hi acostem de puntetes", en: "We tiptoe closer", cs: "Připlížíme se po špičkách", fr: "On s'approche sur la pointe des pieds" }, go: "n3" },
            { t: { es: "Damos palmas al ritmo para saludar", ca: "Fem palmes al ritme per saludar", en: "We clap to the rhythm to say hello", cs: "Zatleskáme do rytmu na pozdrav", fr: "On tape dans les mains en rythme pour dire bonjour" }, go: "n4a" }
          ]
        },
        n2b: {
          text: { es: "Las huellas de colores hacen zigzag entre las estatuas y cruzan la sala de cerámica, donde un plato con cara os guiña un ojo. Al final del pasillo se oye música...", ca: "Les petjades de colors fan zig-zag entre les estàtues i creuen la sala de ceràmica, on un plat amb cara us pica l'ullet. Al final del passadís se sent música...", en: "The colourful footprints zigzag between the statues and cross the pottery room, where a plate with a face winks at you. At the end of the corridor you can hear music...", cs: "Barevné stopy kličkují mezi sochami a vedou přes sál s keramikou, kde na vás mrkne talíř s obličejem. Na konci chodby je slyšet hudba...", fr: "Les traces colorées zigzaguent entre les statues et traversent la salle des céramiques, où une assiette à visage vous fait un clin d'œil. Au bout du couloir, on entend de la musique..." },
          choices: [
            { t: { es: "Entramos cantando bajito", ca: "Entrem cantant fluixet", en: "We walk in singing softly", cs: "Vejdeme a tiše si zpíváme", fr: "On entre en chantant tout bas" }, go: "n3" },
            { t: { es: "Miramos desde la puerta sin molestar", ca: "Mirem des de la porta sense molestar", en: "We watch from the door without disturbing", cs: "Díváme se ode dveří a nerušíme", fr: "On regarde depuis la porte sans déranger" }, go: "n4b" }
          ]
        },
        n3: {
          text: { es: "Los ojillos os ven y se paran, avergonzados. 'Es que pasarse el día quietos en el cuadro es aburridísimo', confiesan. 'Nosotros queremos bailar cada noche'. ¿Qué les proponemos, {name}?", ca: "Els ullets us veuen i s'aturen, avergonyits. 'És que passar-se el dia quiets al quadre és avorridíssim', confessen. 'Nosaltres volem ballar cada nit'. Què els proposem, {name}?", en: "The little eyes see you and stop, embarrassed. 'Standing still in the painting all day is sooo boring', they confess. 'We want to dance every night'. What do we suggest, {name}?", cs: "Očka si vás všimnou a zastaví se, celá zahanbená. 'Stát celý den bez hnutí v obraze je hrozná nuda', přiznávají. 'My chceme každou noc tancovat'. Co jim navrhneme, {name}?", fr: "Les petits yeux vous voient et s'arrêtent, tout gênés. 'Rester immobiles dans le tableau toute la journée, c'est trop ennuyeux', avouent-ils. 'Nous, on veut danser chaque nuit'. Qu'est-ce qu'on leur propose, {name} ?" },
          choices: [
            { t: { es: "Un trato: bailar de noche, posar de día", ca: "Un tracte: ballar de nit, posar de dia", en: "A deal: dance at night, pose by day", cs: "Dohodu: v noci tančit, ve dne pózovat", fr: "Un marché : danser la nuit, poser le jour" }, go: "n4a" },
            { t: { es: "Preguntar primero qué opina el retrato", ca: "Preguntar primer què n'opina el retrat", en: "First ask what the portrait thinks", cs: "Nejdřív se zeptat, co si myslí portrét", fr: "Demander d'abord l'avis du portrait" }, go: "n4b" }
          ]
        },
        n4a: {
          text: { es: "¡Trato hecho! De noche, baile; de día, quietos y guapos en el cuadro. Los ojillos hacen una pirueta de alegría y hasta el piano toca un acorde de fiesta.", ca: "Tracte fet! De nit, ball; de dia, quiets i bufons al quadre. Els ullets fan una pirueta d'alegria i fins i tot el piano toca un acord de festa.", en: "It is a deal! Dancing at night; still and handsome in the painting by day. The little eyes do a happy pirouette and even the piano plays a party chord.", cs: "Platí! V noci tanec, ve dne pěkně způsobně v obraze. Očka udělají radostnou piruetu a i piano zahraje slavnostní akord.", fr: "Marché conclu ! La nuit, on danse ; le jour, on pose sagement dans le tableau. Les petits yeux font une pirouette de joie et même le piano joue un accord de fête." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n5" }
          ]
        },
        n4b: {
          text: { es: "Volvéis a preguntarle al retrato. Ella se ríe: '¡Pero si a mí también me encanta bailar! Lo que pasa es que estoy pegada al marco...'. Los ojillos prometen enseñarle a bailar por dentro, sin moverse del cuadro.", ca: "Torneu a preguntar-ho al retrat. Ella riu: 'Però si a mi també m'encanta ballar! El que passa és que estic enganxada al marc...'. Els ullets prometen ensenyar-li a ballar per dins, sense moure's del quadre.", en: "You go back and ask the portrait. She laughs: 'But I love dancing too! The thing is, I am stuck to the frame...'. The little eyes promise to teach her to dance on the inside, without leaving the painting.", cs: "Vrátíte se zeptat portrétu. Ten se rozesměje: 'Vždyť já tancuju taky moc ráda! Jenže jsem přilepená k rámu...'. Očka jí slíbí, že ji naučí tančit uvnitř, aniž se z obrazu pohne.", fr: "Vous retournez demander au portrait. Elle rit : 'Mais moi aussi j'adore danser ! Seulement, je suis collée au cadre...'. Les petits yeux promettent de lui apprendre à danser de l'intérieur, sans bouger du tableau." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n5" }
          ]
        },
        n5: {
          text: { es: "Los ojillos vuelven al cuadro justo antes del amanecer. Pero ahora hay que decidir dónde se colocan. '¿Dónde nos ponemos, {name}?', preguntan dando saltitos.", ca: "Els ullets tornen al quadre just abans de l'alba. Però ara cal decidir on es col·loquen. 'On ens posem, {name}?', pregunten fent saltets.", en: "The little eyes return to the painting just before sunrise. But now they must decide where to sit. 'Where shall we go, {name}?', they ask, hopping about.", cs: "Očka se vrátí do obrazu těsně před svítáním. Teď se ale musí rozhodnout, kam se posadí. 'Kam se máme dát, {name}?', ptají se a poskakují.", fr: "Les petits yeux reviennent dans le tableau juste avant l'aube. Mais il faut maintenant décider où ils se placent. 'Où est-ce qu'on se met, {name} ?', demandent-ils en sautillant." },
          choices: [
            { t: { es: "¡Los dos en el mismo lado, como pintaba Picasso!", ca: "Tots dos al mateix costat, com pintava Picasso!", en: "Both on the same side, like Picasso painted!", cs: "Obě na stejnou stranu, jak to maloval Picasso!", fr: "Tous les deux du même côté, comme peignait Picasso !" }, go: "n6a" },
            { t: { es: "Uno arriba y otro abajo, ¡a estrenar peinado!", ca: "Un a dalt i un a baix, a estrenar pentinat!", en: "One up and one down, a brand new look!", cs: "Jedno nahoru a jedno dolů, úplně nový styl!", fr: "Un en haut et un en bas, un tout nouveau style !" }, go: "n6b" }
          ]
        },
        n6a: {
          text: { es: "Los dos ojos se sientan en el mismo lado de la cara, uno encima del otro, como en los retratos de Picasso. El retrato se mira en el cristal y suspira contenta: 'Así veo de frente y de perfil a la vez'.", ca: "Els dos ulls s'asseuen al mateix costat de la cara, l'un damunt de l'altre, com als retrats de Picasso. El retrat es mira al vidre i sospira contenta: 'Així veig de front i de perfil alhora'.", en: "The two eyes sit on the same side of the face, one above the other, just like in Picasso's portraits. The portrait looks at herself in the glass and sighs happily: 'Now I can see from the front and from the side at the same time'.", cs: "Obě oči se usadí na stejné straně obličeje, jedno nad druhým, přesně jako na Picassových portrétech. Portrét se na sebe podívá do skla a spokojeně si povzdechne: 'Takhle vidím zepředu i z profilu najednou'.", fr: "Les deux yeux s'installent du même côté du visage, l'un au-dessus de l'autre, comme dans les portraits de Picasso. Le portrait se regarde dans la vitre et soupire, contente : 'Comme ça, je vois de face et de profil en même temps'." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e1" }
          ]
        },
        n6b: {
          text: { es: "Un ojo se coloca arriba, cerca del pelo, y el otro abajo, junto a la barbilla. Por la mañana, una niña se queda mirando el cuadro y suelta una risa feliz: '¡Mamá, este cuadro me está guiñando un ojo!'.", ca: "Un ull es col·loca a dalt, prop dels cabells, i l'altre a baix, vora la barbeta. Al matí, una nena es queda mirant el quadre i deixa anar una rialla feliç: 'Mama, aquest quadre m'està picant l'ullet!'.", en: "One eye settles up near the hair, and the other down by the chin. In the morning, a little girl stares at the painting and bursts into a happy giggle: 'Mum, this painting is winking at me!'.", cs: "Jedno oko se usadí nahoře u vlasů a druhé dole u brady. Ráno se na obraz zadívá jedna holčička a šťastně se rozesměje: 'Mami, ten obraz na mě mrká!'.", fr: "Un œil s'installe en haut, près des cheveux, et l'autre en bas, près du menton. Le matin, une petite fille regarde le tableau et éclate d'un rire heureux : 'Maman, ce tableau me fait un clin d'œil !'." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e2" }
          ]
        },
        e1: {
          end: true,
          text: { es: "Por la mañana, la guía del museo se detiene delante del cuadro: 'Qué curioso, hoy este retrato parece más vivo que nunca'. Y cada noche, cuando se apagan las luces, en la sala de música suena un piano bajito. Estás invitado al baile, {name}.", ca: "Al matí, la guia del museu s'atura davant del quadre: 'Que curiós, avui aquest retrat sembla més viu que mai'. I cada nit, quan s'apaguen els llums, a la sala de música sona un piano fluixet. Estàs convidat al ball, {name}.", en: "In the morning, the museum guide stops in front of the painting: 'How curious, today this portrait looks more alive than ever'. And every night, when the lights go out, a piano plays softly in the music room. You are invited to the dance, {name}.", cs: "Ráno se průvodkyně muzea zastaví před obrazem: 'Zvláštní, dnes ten portrét vypadá živěji než kdy dřív'. A každou noc, když zhasnou světla, hraje v hudebním sále potichu piano. Zveme tě na ten bál, {name}.", fr: "Le matin, la guide du musée s'arrête devant le tableau : 'Comme c'est curieux, aujourd'hui ce portrait semble plus vivant que jamais'. Et chaque nuit, quand les lumières s'éteignent, un piano joue doucement dans la salle de musique. Tu es invité au bal, {name}." }
        },
        e2: {
          end: true,
          text: { es: "El retrato del ojo arriba y el ojo abajo se convierte en el favorito de los niños del museo. Le ponen un cartelito nuevo: 'El arte también sabe jugar'. Y todo gracias a ti, {name}, que ayudaste a los ojos bailones a encontrar su sitio.", ca: "El retrat de l'ull a dalt i l'ull a baix es converteix en el preferit dels nens del museu. Li posen un cartellet nou: 'L'art també sap jugar'. I tot gràcies a tu, {name}, que vas ajudar els ulls balladors a trobar el seu lloc.", en: "The portrait with one eye up and one eye down becomes the museum kids' favourite. It gets a brand new label: 'Art knows how to play too'. And all thanks to you, {name}, who helped the dancing eyes find their place.", cs: "Portrét s jedním okem nahoře a druhým dole se stane oblíbencem všech dětí v muzeu. Dostane novou cedulku: 'Umění si taky umí hrát'. A to všechno díky tobě, {name}: tančící oči našly své místo.", fr: "Le portrait avec un œil en haut et un œil en bas devient le préféré des enfants du musée. On lui met une nouvelle étiquette : 'L'art aussi sait jouer'. Et tout ça grâce à toi, {name}, qui as aidé les yeux danseurs à trouver leur place." }
        }
      }
    },
    {
      id: "circo", emoji: "🎪", start: "n1",
      title: { es: "El circo rosa", ca: "El circ rosa", en: "The Rose Circus", cs: "Růžový cirkus", fr: "Le cirque rose" },
      nodes: {
        n1: {
          text: { es: "¡El circo rosa ha llegado a la ciudad! Pero detrás de la carpa todos están tristes: la pequeña acróbata ha perdido su gran pelota de equilibrios y esta noche hay función. ¿Por dónde empezamos, {name}?", ca: "El circ rosa ha arribat a la ciutat! Però darrere de la carpa tothom està trist: la petita acròbata ha perdut la seva gran pilota d'equilibris i aquesta nit hi ha funció. Per on comencem, {name}?", en: "The rose circus has come to town! But behind the big top everyone is sad: the little acrobat has lost her big balancing ball and the show is tonight. Where do we start, {name}?", cs: "Do města přijel růžový cirkus! Ale za šapitó jsou všichni smutní: malá akrobatka ztratila svůj velký balanční míč a večer se hraje představení. Kde začneme, {name}?", fr: "Le cirque rose est arrivé en ville ! Mais derrière le chapiteau, tout le monde est triste : la petite acrobate a perdu son grand ballon d'équilibre et le spectacle est ce soir. Par où commence-t-on, {name} ?" },
          choices: [
            { t: { es: "Buscamos entre los disfraces", ca: "Busquem entre les disfresses", en: "We search among the costumes", cs: "Prohledáme kostýmy", fr: "On cherche parmi les costumes" }, go: "n2a" },
            { t: { es: "Preguntamos a los animales del circo", ca: "Preguntem als animals del circ", en: "We ask the circus animals", cs: "Zeptáme se cirkusových zvířat", fr: "On demande aux animaux du cirque" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "Entre los trajes de rombos de los arlequines encontráis un rastro redondo en el polvo... y purpurina rosa. ¡Por aquí ha rodado algo!", ca: "Entre els vestits de rombes dels arlequins trobeu un rastre rodó a la pols... i purpurina rosa. Per aquí hi ha rodat alguna cosa!", en: "Among the harlequins' diamond costumes you find a round trail in the dust... and pink glitter. Something rolled through here!", cs: "Mezi kostkovanými kostýmy harlekýnů najdete v prachu kulatou stopu... a růžové třpytky. Tudy se něco kutálelo!", fr: "Parmi les costumes à losanges des arlequins, vous trouvez une trace ronde dans la poussière... et des paillettes roses. Quelque chose a roulé par ici !" },
          choices: [
            { t: { es: "Seguimos el rastro redondo", ca: "Seguim el rastre rodó", en: "We follow the round trail", cs: "Půjdeme po kulaté stopě", fr: "On suit la trace ronde" }, go: "n3" },
            { t: { es: "Preguntamos al arlequín que ensaya", ca: "Preguntem a l'arlequí que assaja", en: "We ask the harlequin who is rehearsing", cs: "Zeptáme se harlekýna, který zkouší", fr: "On demande à l'arlequin qui répète" }, go: "n4a" }
          ]
        },
        n2b: {
          text: { es: "El caballo del circo relincha bajito: 'He visto al gatito Garabato empujando algo grande y rosa hacia la caravana del pintor...'. ¡Menuda pista!", ca: "El cavall del circ renilla fluixet: 'He vist el gatet Gargot empenyent una cosa gran i rosa cap a la caravana del pintor...'. Quina pista!", en: "The circus horse whinnies softly: 'I saw Scribble the kitten pushing something big and pink towards the painter's caravan...'. What a clue!", cs: "Cirkusový koník tiše zaržá: 'Viděl jsem kotě Čmáranici, jak strká něco velkého a růžového k malířově maringotce...'. To je stopa!", fr: "Le cheval du cirque hennit tout bas : 'J'ai vu le chaton Gribouille pousser quelque chose de grand et rose vers la roulotte du peintre...'. Quel indice !" },
          choices: [
            { t: { es: "¡Corremos a la caravana del pintor!", ca: "Correm a la caravana del pintor!", en: "We run to the painter's caravan!", cs: "Běžíme k malířově maringotce!", fr: "On court à la roulotte du peintre !" }, go: "n3" },
            { t: { es: "Le llevamos al gatito un lazo para hacer un trueque", ca: "Portem al gatet un llaç per fer un intercanvi", en: "We bring the kitten a ribbon to trade", cs: "Vezmeme kotěti mašli na výměnu", fr: "On apporte un ruban au chaton pour faire un échange" }, go: "n4b" }
          ]
        },
        n3: {
          text: { es: "En la caravana del pintor está el gatito con la pelota... ¡pintada de azul! Quería que pareciera la luna. A la pequeña acróbata le tiembla el labio: su pelota rosa ya no es rosa. ¿Qué hacemos, {name}?", ca: "A la caravana del pintor hi ha el gatet amb la pilota... pintada de blau! Volia que semblés la lluna. A la petita acròbata li tremola el llavi: la seva pilota rosa ja no és rosa. Què fem, {name}?", en: "In the painter's caravan you find the kitten with the ball... painted blue! He wanted it to look like the moon. The little acrobat's lip trembles: her pink ball is not pink any more. What do we do, {name}?", cs: "V malířově maringotce sedí kotě s míčem... natřeným namodro! Chtělo, aby vypadal jako měsíc. Malé akrobatce se roztřese ret: její růžový míč už není růžový. Co uděláme, {name}?", fr: "Dans la roulotte du peintre, vous trouvez le chaton avec le ballon... peint en bleu ! Il voulait qu'il ressemble à la lune. La lèvre de la petite acrobate tremble : son ballon rose n'est plus rose. Qu'est-ce qu'on fait, {name} ?" },
          choices: [
            { t: { es: "Lo pintamos de rosa otra vez, todos juntos", ca: "El pintem de rosa un altre cop, tots junts", en: "We paint it pink again, all together", cs: "Natřeme ho zase narůžovo, všichni spolu", fr: "On le repeint en rose, tous ensemble" }, go: "n4a" },
            { t: { es: "¡Lo convertimos en la pelota de TODOS los colores!", ca: "El convertim en la pilota de TOTS els colors!", en: "We turn it into the ball of ALL the colours!", cs: "Uděláme z něj míč VŠECH barev!", fr: "On en fait le ballon de TOUTES les couleurs !" }, go: "n4b" }
          ]
        },
        n4a: {
          text: { es: "Pintáis la pelota de rosa con pinceladas suaves, y el gatito Garabato ayuda usando la cola de brocha. Pide perdón con un ronroneo y promete pintar solo en papel a partir de ahora.", ca: "Pinteu la pilota de rosa amb pinzellades suaus, i el gatet Gargot ajuda fent servir la cua de brotxa. Demana perdó amb un ronc i promet pintar només en paper a partir d'ara.", en: "You paint the ball pink with soft brushstrokes, and Scribble the kitten helps by using his tail as a brush. He says sorry with a purr and promises to paint only on paper from now on.", cs: "Natřete míč růžovou jemnými tahy a kotě Čmáranice pomáhá ocáskem místo štětce. Omluví se předením a slíbí, že odteď bude malovat jen na papír.", fr: "Vous peignez le ballon en rose à petits coups doux, et le chaton Gribouille aide en se servant de sa queue comme pinceau. Il s'excuse en ronronnant et promet de ne plus peindre que sur du papier." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n5" }
          ]
        },
        n4b: {
          text: { es: "Cada uno añade un color: rosa, azul, amarillo, verde... La pelota queda como un arcoíris redondo. El gatito Garabato pinta la última mancha con la patita, orgulloso, y la acróbata aplaude encantada.", ca: "Cadascú hi afegeix un color: rosa, blau, groc, verd... La pilota queda com un arc de Sant Martí rodó. El gatet Gargot pinta l'última taca amb la poteta, orgullós, i l'acròbata aplaudeix encantada.", en: "Everyone adds a colour: pink, blue, yellow, green... The ball ends up like a round rainbow. Scribble the kitten proudly paints the last spot with his paw, and the acrobat claps with delight.", cs: "Každý přidá jednu barvu: růžovou, modrou, žlutou, zelenou... Z míče je kulatá duha. Kotě Čmáranice hrdě domaluje poslední flíček tlapkou a akrobatka nadšeně tleská.", fr: "Chacun ajoute une couleur : rose, bleu, jaune, vert... Le ballon devient un arc-en-ciel tout rond. Le chaton Gribouille peint fièrement la dernière tache avec sa patte, et l'acrobate applaudit, ravie." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n5" }
          ]
        },
        n5: {
          text: { es: "¡Empieza la función! La pequeña acróbata sube a la pelota y camina despacito. Pero a mitad de pista, la pelota se tambalea... ¿Cómo la ayudamos, {name}?", ca: "Comença la funció! La petita acròbata puja a la pilota i camina a poc a poc. Però a mitja pista, la pilota trontolla... Com l'ajudem, {name}?", en: "The show begins! The little acrobat climbs onto the ball and walks slowly. But halfway across the ring, the ball wobbles... How do we help her, {name}?", cs: "Představení začíná! Malá akrobatka vyleze na míč a pomaličku kráčí. Ale uprostřed manéže se míč zakymácí... Jak jí pomůžeme, {name}?", fr: "Le spectacle commence ! La petite acrobate monte sur le ballon et avance tout doucement. Mais au milieu de la piste, le ballon vacille... Comment l'aider, {name} ?" },
          choices: [
            { t: { es: "¡La animamos muy fuerte!", ca: "L'animem molt fort!", en: "We cheer really loudly!", cs: "Budeme jí hlasitě fandit!", fr: "On l'encourage très fort !" }, go: "n6a" },
            { t: { es: "Silencio y una sonrisa tranquila", ca: "Silenci i un somriure tranquil", en: "Silence and a calm smile", cs: "Ticho a klidný úsměv", fr: "Le silence et un sourire tranquille" }, go: "n6b" }
          ]
        },
        n6a: {
          text: { es: "'¡Tú puedes!', grita todo el público a la vez. La acróbata sonríe, recupera el equilibrio, da un salto mortal... ¡y aterriza suave como una pluma! La carpa entera tiembla de aplausos.", ca: "'Tu pots!', crida tot el públic alhora. L'acròbata somriu, recupera l'equilibri, fa un salt mortal... i aterra suau com una ploma! La carpa sencera tremola d'aplaudiments.", en: "'You can do it!', the whole audience shouts at once. The acrobat smiles, finds her balance, does a somersault... and lands as softly as a feather! The whole big top shakes with applause.", cs: "'To dáš!', volá celé publikum najednou. Akrobatka se usměje, chytí rovnováhu, udělá salto... a přistane měkce jako pírko! Celé šapitó se otřásá potleskem.", fr: "'Tu peux le faire !', crie tout le public en même temps. L'acrobate sourit, retrouve son équilibre, fait un saut périlleux... et atterrit douce comme une plume ! Tout le chapiteau tremble d'applaudissements." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e1" }
          ]
        },
        n6b: {
          text: { es: "El público se queda en silencio y tú le mandas una sonrisa tranquila. La acróbata respira hondo, como una nube despacio, y la pelota deja de temblar. Paso a paso, cruza la pista entera sin caerse.", ca: "El públic es queda en silenci i tu li envies un somriure tranquil. L'acròbata respira fondo, com un núvol a poc a poc, i la pilota deixa de tremolar. Pas a pas, creua la pista sencera sense caure.", en: "The audience goes quiet and you send her a calm smile. The acrobat breathes deeply, slow as a cloud, and the ball stops wobbling. Step by step, she crosses the whole ring without falling.", cs: "Publikum ztichne a ty jí pošleš klidný úsměv. Akrobatka se zhluboka nadechne, pomalu jako obláček, a míč se přestane kymácet. Krok za krokem přejde celou manéž a nespadne.", fr: "Le public se tait et tu lui envoies un sourire tranquille. L'acrobate respire profondément, lentement comme un nuage, et le ballon arrête de trembler. Pas à pas, elle traverse toute la piste sans tomber." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e2" }
          ]
        },
        e1: {
          end: true,
          text: { es: "Al final de la función, el circo entero sale a saludar y la acróbata te señala: '¡Sin ti no habría habido pelota ni función, {name}!'. Te regalan un cartel del circo rosa pintado a mano. Ayudar también es un espectáculo precioso.", ca: "Al final de la funció, el circ sencer surt a saludar i l'acròbata t'assenyala: 'Sense tu no hi hauria hagut ni pilota ni funció, {name}!'. Et regalen un cartell del circ rosa pintat a mà. Ajudar també és un espectacle preciós.", en: "At the end of the show, the whole circus comes out to bow and the acrobat points at you: 'Without you there would have been no ball and no show, {name}!'. They give you a hand-painted rose circus poster. Helping is a beautiful show too.", cs: "Na konci představení se celý cirkus přijde uklonit a akrobatka ukáže na tebe: 'Bez tebe by nebyl míč ani představení, {name}!'. Dostaneš ručně malovaný plakát růžového cirkusu. Pomáhat je taky nádherné představení.", fr: "À la fin du spectacle, tout le cirque vient saluer et l'acrobate te montre du doigt : 'Sans toi, il n'y aurait eu ni ballon ni spectacle, {name} !'. On t'offre une affiche du cirque rose peinte à la main. Aider aussi, c'est un beau spectacle." }
        },
        e2: {
          end: true,
          text: { es: "Después de la función, la acróbata te cuenta su secreto: 'Primero calma por dentro, luego el salto'. Y el gatito Garabato ya tiene trabajo nuevo: pintar lunares en el tambor. Gracias, {name}: la calma también hace magia.", ca: "Després de la funció, l'acròbata t'explica el seu secret: 'Primer calma per dins, després el salt'. I el gatet Gargot ja té feina nova: pintar pics al tambor. Gràcies, {name}: la calma també fa màgia.", en: "After the show, the acrobat tells you her secret: 'First calm inside, then the jump'. And Scribble the kitten has a new job: painting polka dots on the drum. Thank you, {name}: calm works magic too.", cs: "Po představení ti akrobatka prozradí své tajemství: 'Nejdřív klid uvnitř, pak skok'. A kotě Čmáranice má novou práci: maluje puntíky na buben. Díky, {name}: klid umí kouzlit taky.", fr: "Après le spectacle, l'acrobate te confie son secret : 'D'abord le calme à l'intérieur, ensuite le saut'. Et le chaton Gribouille a un nouveau travail : peindre des pois sur le tambour. Merci, {name} : le calme aussi fait de la magie." }
        }
      }
    }
  ],

  /* ---------- KARAOKE ---------- */
  songs: [
    { emoji: "🎨",
      title: { es: "La canción del azul y el rosa", ca: "La cançó del blau i el rosa", en: "The Blue and Pink Song", cs: "Písnička o modré a růžové", fr: "La chanson du bleu et du rose" },
      lines: [
        { es: "Cuando Pablo estaba triste,", ca: "Quan en Pablo estava trist,", en: "When young Pablo felt so blue,", cs: "Když byl Pablo smutný, děti,", fr: "Quand Pablo était tout triste," },
        { es: "lo pintaba todo azul,", ca: "ho pintava tot de blau,", en: "he painted everything blue too,", cs: "modrou barvou maloval,", fr: "il peignait tout en bleu," },
        { es: "la guitarra, el mar, la luna,", ca: "la guitarra, el mar, la lluna,", en: "the guitar, the moon, the sea,", cs: "kytaru i moře, měsíc,", fr: "la guitare, la mer, la lune," },
        { es: "hasta el gato y el baúl.", ca: "fins al gat i el seu palau.", en: "even the cat and the old settee.", cs: "modrý byl i karneval.", fr: "même le chat et les jeux." },
        { es: "Cuando el circo llegó al barrio,", ca: "Quan el circ va arribar al barri,", en: "When the circus came to town,", cs: "Když pak přijel cirkus do města,", fr: "Quand le cirque est arrivé," },
        { es: "todo se volvió rosita,", ca: "tot es va tornar rosat,", en: "pink was dancing all around,", cs: "růžová se smála hned,", fr: "tout est devenu rose," },
        { es: "y pintó a los saltimbanquis", ca: "i va pintar saltimbanquis", en: "acrobats in rosy light,", cs: "akrobati v růžové", fr: "les acrobates sautaient" },
        { es: "dando saltos de alegría.", ca: "saltant plens de felicitat.", en: "jumping high with pure delight.", cs: "roztančili celý svět.", fr: "et la vie était plus rose." }
      ] },
    { emoji: "🕊️",
      title: { es: "La nana de la paloma", ca: "La cançó de bressol de la coloma", en: "The Dove's Lullaby", cs: "Ukolébavka pro holubičku", fr: "La berceuse de la colombe" },
      lines: [
        { es: "Duerme, duerme, palomita,", ca: "Dorm, dorm, colometa blanca,", en: "Sleep now, sleep, my little dove,", cs: "Spinkej, spinkej, holubičko,", fr: "Dors, dors, petite colombe," },
        { es: "cu-curru, curru-cucú,", ca: "cu-curru, curru-cucú,", en: "coo-curroo, the stars above,", cs: "vrkú, vrkú, celou noc,", fr: "cou-courrou, dans la nuit bleue," },
        { es: "cierra ya los ojos negros,", ca: "tanca els ulls a poc a poquet,", en: "fold your wings so soft and white,", cs: "bílá křídla slož si tiše,", fr: "ferme tes petits yeux tendres," },
        { es: "que la noche es toda azul.", ca: "que la lluna vetlla per tu.", en: "sail across the quiet night.", cs: "hvězdičky ti jdou na pomoc.", fr: "les étoiles brillent un peu." },
        { es: "Lleva un ramito de olivo", ca: "Porta un brotet d'olivera", en: "Take a tiny olive twig", cs: "Poneseš pak snítku míru", fr: "Porte un petit brin d'olivier" },
        { es: "a los niños al dormir,", ca: "als infants abans de dormir,", en: "to the children fast asleep,", cs: "dětem, které sladce spí,", fr: "aux enfants qui vont dormir," },
        { es: "y mañana por el cielo", ca: "i demà pel cel més ample", en: "and tomorrow, high and big,", cs: "ráno vzlétneš k modré výšce", fr: "et demain dans le grand ciel" },
        { es: "la paz volverá a salir.", ca: "la pau tornarà a sortir.", en: "peace will fly across the deep.", cs: "a mír s tebou poletí.", fr: "la paix pourra revenir." }
      ] },
    { emoji: "🎭",
      title: { es: "El baile cubista", ca: "El ball cubista", en: "The Cubist Dance", cs: "Kubistický tanec", fr: "La danse cubiste" },
      lines: [
        { es: "¡Que empiece el baile cubista!", ca: "Que comenci el ball cubista!", en: "Come and dance the cubist dance,", cs: "Tancujeme kubismus,", fr: "Dansons la danse cubiste !" },
        { es: "Las orejas en los pies,", ca: "Les orelles diuen adéu,", en: "put your ears upon your toes,", cs: "uši máme na patách,", fr: "Les oreilles sur les pieds," },
        { es: "la nariz en la rodilla", ca: "el nas balla a la rodona", en: "let your mouth spin upside down", cs: "pusa skáče vzhůru nohama,", fr: "la bouche à l'envers qui chante" },
        { es: "y la boca del revés.", ca: "i s'amaga vora els peus.", en: "and your knee can hold your nose.", cs: "nos se točí v zatáčkách.", fr: "et le nez sur le côté." },
        { es: "Un ojo salta arriba,", ca: "Un ull salta cap amunt,", en: "One eye hops up to your hair,", cs: "Levé oko skáče vzhůru,", fr: "Un œil monte vers le ciel," },
        { es: "el otro salta abajo,", ca: "l'altre salta cap avall,", en: "one eye hops down to your chin,", cs: "pravé padá do klína,", fr: "l'autre descend au menton," },
        { es: "¡bailamos descolocados", ca: "ballem tots descol·locats", en: "we all dance so mixed-up now", cs: "tanec celý zpřeházený,", fr: "on danse tout à l'envers" },
        { es: "y nos reímos un rato!", ca: "i riem en aquest ball!", en: "that we cannot stop our grin.", cs: "legrace hned začíná.", fr: "et on rit pour de bon." }
      ] }
  ],

  /* ---------- TRADUCTOR ---------- */
  translator: {
    words: [
      W_COMMON.hola,
      W_COMMON.adios,
      W_COMMON.amigo,
      { k: "paloma", emoji: "🕊️", name: { es: "paloma", ca: "coloma", en: "dove", cs: "holubice", fr: "colombe" } },
      { k: "cuadro", emoji: "🖼️", name: { es: "cuadro", ca: "quadre", en: "painting", cs: "obraz", fr: "tableau" } },
      { k: "azul", emoji: "🔵", name: { es: "azul", ca: "blau", en: "blue", cs: "modrá", fr: "bleu" } },
      { k: "rosa", emoji: "🌸", name: { es: "rosa", ca: "rosa", en: "pink", cs: "růžová", fr: "rose" } },
      { k: "pincel", emoji: "🖌️", name: { es: "pincel", ca: "pinzell", en: "paintbrush", cs: "štětec", fr: "pinceau" } },
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
      { k: "bonito", emoji: "✨", name: { es: "bonito", ca: "bonic", en: "pretty", cs: "krásný", fr: "joli" } },
      W_COMMON.amor,
      W_COMMON.gracias,
      W_COMMON.si,
      W_COMMON.no,
      W_COMMON.dormir
    ],
    langs: [
      { id: "palomes", emoji: "🕊️",
        name: { es: "Paloma", ca: "Coloma", en: "Dovish", cs: "Holubština", fr: "Roucoulé" },
        greeting: { es: "¡Cu-curru! Así saluda la paloma de la paz.", ca: "Cu-curru! Així saluda la coloma de la pau.", en: "Coo-curroo! That is how the peace dove says hello.", cs: "Vrkú-vrkú! Tak zdraví holubice míru.", fr: "Cou-courrou ! C'est comme ça que la colombe de la paix dit bonjour." },
        dict: { hola: "cu-curru", adios: "curru-cuuu", amigo: "cu-cu-rru", paloma: "currucurrú", cuadro: "cu-croo", azul: "currublú", rosa: "currurrós", pincel: "cu-plif", robot: "cu-bip", mama: "currumá", papa: "currupá", casa: "cu-nido", agua: "cu-glup", comida: "cu-ñam", perro: "cu-guau", gato: "cu-miau", grande: "CURRUUU", pequeno: "currí", bonito: "culindo", amor: "currumor", gracias: "cu-gracu", si: "cru", no: "cro", dormir: "curru-zzz" } },
      { id: "cubista", emoji: "🔷",
        name: { es: "Cubista", ca: "Cubista", en: "Cubist", cs: "Kubičtina", fr: "Cubiste" },
        greeting: { es: "¡Lahó! El cubista saluda con las sílabas bailando descolocadas.", ca: "Lahó! El cubista saluda amb les síl·labes ballant descol·locades.", en: "Lohel! Cubist mixes up the syllables until they dance.", cs: "Hojá! Kubičtina přehází slabiky, až tancují.", fr: "Jourbon ! Le cubiste mélange les syllabes pour les faire danser." },
        dict: { hola: "lahó", adios: "osadí", amigo: "goamí", paloma: "mapalo", cuadro: "drocua", azul: "zula", rosa: "saro", pincel: "celpín", robot: "botro", mama: "amam", papa: "apap", casa: "saca", agua: "guaa", comida: "damico", perro: "rrope", gato: "toga", grande: "degrán", pequeno: "ñopeque", bonito: "toboni", amor: "mora", gracias: "ciasgra", si: "ís", no: "on", dormir: "mirdor" } },
      { id: "pincelada", emoji: "🖌️",
        name: { es: "Pincelada", ca: "Pinzellada", en: "Brushstroke", cs: "Štětcovština", fr: "Pincelade" },
        greeting: { es: "¡Plas! Cada palabra es una pincelada de color.", ca: "Plas! Cada paraula és una pinzellada de color.", en: "Splat! Every word is a little brushstroke of colour.", cs: "Plác! Každé slovo je barevný tah štětcem.", fr: "Splash ! Chaque mot est un petit coup de pinceau." },
        dict: { hola: "plas", adios: "plas-plof", amigo: "plis-plas", paloma: "plumaplas", cuadro: "plasplás", azul: "plublú", rosa: "plasrós", pincel: "plinplín", robot: "plasbot", mama: "plasmá", papa: "plaspá", casa: "plasita", agua: "plagua", comida: "plasñam", perro: "plasguau", gato: "plasmiau", grande: "plasote", pequeno: "plasito", bonito: "pliboní", amor: "plamor", gracias: "pligrasi", si: "pli", no: "plo", dormir: "plas-zzz" } },
      { id: "toroamable", emoji: "🐂",
        name: { es: "Toro amable", ca: "Toro amable", en: "Gentle bull", cs: "Býkovština", fr: "Taureau gentil" },
        greeting: { es: "Mmmu... el toro amable habla despacito y muy suave.", ca: "Mmmu... el toro amable parla a poc a poc i molt suau.", en: "Mmmoo... the gentle bull speaks slowly and very softly.", cs: "Mmmú... hodný býk mluví pomalu a moc jemně.", fr: "Mmmeuh... le taureau gentil parle doucement et tout bas." },
        dict: { hola: "mmmu", adios: "mu-muuu", amigo: "mumigo", paloma: "mucurrú", cuadro: "mmmarco", azul: "mublú", rosa: "murrosa", pincel: "mupinc", robot: "mubot", mama: "mumá", papa: "mupá", casa: "mucasa", agua: "mublub", comida: "muñam", perro: "muguau", gato: "mumiau", grande: "MMMUUU", pequeno: "mmmi", bonito: "muboni", amor: "mumor", gracias: "mugrasi", si: "muu", no: "mnn", dormir: "muzzz" } }
    ]
  },

  /* ---------- MAPA DE EXPLORACIÓN ---------- */
  explore: {
    width: 4200, height: 1100, stars: false,
    bgCss: "linear-gradient(180deg,#eaf0f7 0%,#f5e9ee 46%,#f3eee2 76%,#e2d7c6 100%)",
    cats: [
      { id: "periodos", emoji: "🎨", x: 100, name: { es: "Los colores de su vida", ca: "Els colors de la seva vida", en: "The colours of his life", cs: "Barvy jeho života", fr: "Les couleurs de sa vie" } },
      { id: "cubismo", emoji: "🔷", x: 1300, name: { es: "El cubismo", ca: "El cubisme", en: "Cubism", cs: "Kubismus", fr: "Le cubisme" } },
      { id: "paz", emoji: "🕊️", x: 2800, name: { es: "La paz", ca: "La pau", en: "Peace", cs: "Mír", fr: "La paix" } }
    ],
    pois: [
      { cat: "periodos", emoji: "🎸", x: 240, y: 380,
        name: { es: "El cuadro azul", ca: "El quadre blau", en: "The blue painting", cs: "Modrý obraz", fr: "Le tableau bleu" },
        fact: { es: "Cuando estaba triste lo pintaba todo azul. Este guitarrista azul es uno de sus cuadros más famosos.", ca: "Quan estava trist ho pintava tot de blau. Aquest guitarrista blau és un dels seus quadres més famosos.", en: "When he was sad he painted everything blue. This blue guitarist is one of his most famous paintings.", cs: "Když byl smutný, maloval všechno modře. Tenhle modrý kytarista je jeden z jeho nejslavnějších obrazů.", fr: "Quand il était triste, il peignait tout en bleu. Ce guitariste bleu est l'un de ses tableaux les plus célèbres." } },
      { cat: "periodos", emoji: "🤹", x: 1120, y: 600,
        name: { es: "El cuadro rosa", ca: "El quadre rosa", en: "The rose painting", cs: "Růžový obraz", fr: "Le tableau rose" },
        fact: { es: "En el período rosa pintó a los saltimbanquis: la familia de acróbatas del circo.", ca: "Al període rosa va pintar els saltimbanquis: la família d'acròbates del circ.", en: "In his rose period he painted the saltimbanques: the circus family of acrobats.", cs: "V růžovém období maloval kejklíře: cirkusovou rodinu akrobatů.", fr: "Pendant sa période rose, il a peint les saltimbanques : la famille d'acrobates du cirque." } },
      { cat: "periodos", emoji: "🧒", x: 800, y: 330,
        name: { es: "El autorretrato de niño", ca: "L'autoretrat de nen", en: "The self-portrait as a boy", cs: "Autoportrét z dětství", fr: "L'autoportrait enfant" },
        fact: { es: "Picasso fue un niño prodigio: de pequeño ya dibujaba mejor que muchos mayores.", ca: "Picasso va ser un nen prodigi: de petit ja dibuixava millor que molts adults.", en: "Picasso was a child prodigy: as a little boy he already drew better than many grown-ups.", cs: "Picasso byl zázračné dítě: už jako malý kreslil líp než mnozí dospělí.", fr: "Picasso était un enfant prodige : tout petit, il dessinait déjà mieux que bien des adultes." } },
      { cat: "periodos", emoji: "🖌️", x: 520, y: 820,
        name: { es: "La primera paleta", ca: "La primera paleta", en: "The first palette", cs: "První paleta", fr: "La première palette" },
        fact: { es: "Su padre era pintor y profesor de dibujo. Un día le dejó sus pinceles... ¡y ya no los soltó!", ca: "El seu pare era pintor i professor de dibuix. Un dia li va deixar els seus pinzells... i ja no els va deixar anar!", en: "His father was a painter and drawing teacher. One day he lent him his brushes... and he never let go of them!", cs: "Jeho tatínek byl malíř a učitel kreslení. Jednou mu půjčil své štětce... a on už je nepustil z ruky!", fr: "Son père était peintre et professeur de dessin. Un jour, il lui a laissé ses pinceaux... et il ne les a plus lâchés !" } },
      { cat: "cubismo", emoji: "👀", x: 1400, y: 390,
        name: { es: "El retrato de ojos bailones", ca: "El retrat d'ulls balladors", en: "The dancing-eyes portrait", cs: "Portrét s tančícíma očima", fr: "Le portrait aux yeux danseurs" },
        fact: { es: "En sus retratos cubistas los dos ojos pueden ir en el mismo lado: así ves la cara de frente y de perfil a la vez.", ca: "Als seus retrats cubistes els dos ulls poden anar al mateix costat: així veus la cara de front i de perfil alhora.", en: "In his cubist portraits both eyes can sit on the same side: you see the face from the front and in profile at once.", cs: "Na jeho kubistických portrétech mohou být obě oči na stejné straně: vidíš tvář zepředu i z profilu najednou.", fr: "Dans ses portraits cubistes, les deux yeux peuvent être du même côté : on voit le visage de face et de profil à la fois." } },
      { cat: "cubismo", emoji: "🪕", x: 1700, y: 650,
        name: { es: "La guitarra de trocitos", ca: "La guitarra de trossets", en: "The guitar of little pieces", cs: "Kytara z kousíčků", fr: "La guitare en petits morceaux" },
        fact: { es: "Hizo guitarras de cartón, papel y chapa: cuadros que salen de la pared, como esculturas.", ca: "Va fer guitarres de cartró, paper i llauna: quadres que surten de la paret, com escultures.", en: "He made guitars out of cardboard, paper and sheet metal: paintings that pop out of the wall, like sculptures.", cs: "Vyráběl kytary z kartonu, papíru a plechu: obrazy, které vystupují ze zdi jako sochy.", fr: "Il a fait des guitares en carton, en papier et en tôle : des tableaux qui sortent du mur, comme des sculptures." } },
      { cat: "cubismo", emoji: "🎻", x: 2200, y: 360,
        name: { es: "El violín desmontado", ca: "El violí desmuntat", en: "The taken-apart violin", cs: "Rozložené housle", fr: "Le violon démonté" },
        fact: { es: "Pintó el violín desmontado en piezas, para verlo todo a la vez: por delante, de lado y por dentro.", ca: "Va pintar el violí desmuntat en peces, per veure'l tot alhora: per davant, de costat i per dins.", en: "He painted the violin taken apart in pieces, to see it all at once: from the front, from the side and from inside.", cs: "Namaloval housle rozložené na kousky, aby je viděl celé najednou: zepředu, z boku i zevnitř.", fr: "Il a peint le violon démonté en morceaux, pour tout voir à la fois : de face, de côté et de l'intérieur." } },
      { cat: "cubismo", emoji: "📰", x: 1950, y: 870,
        name: { es: "El periódico pegado", ca: "El diari enganxat", en: "The glued newspaper", cs: "Nalepené noviny", fr: "Le journal collé" },
        fact: { es: "Con Braque pegó trozos de periódico y de hule en los cuadros: inventaron el collage.", ca: "Amb en Braque va enganxar trossos de diari i d'hule als quadres: van inventar el collage.", en: "With Braque he glued pieces of newspaper and oilcloth onto paintings: they invented collage.", cs: "S Braquem lepili na obrazy kousky novin a voskovaného plátna: vymysleli koláž.", fr: "Avec Braque, il a collé des morceaux de journal et de toile cirée sur les tableaux : ils ont inventé le collage." } },
      { cat: "cubismo", emoji: "🐂", x: 2460, y: 690,
        name: { es: "El toro de trocitos", ca: "El toro de trossets", en: "The bull of little pieces", cs: "Býk z kousíčků", fr: "Le taureau en petits morceaux" },
        fact: { es: "Dibujó el mismo toro muchas veces, quitando líneas cada vez, hasta dejarlo casi en una sola.", ca: "Va dibuixar el mateix toro moltes vegades, traient línies cada cop, fins a deixar-lo gairebé en una de sola.", en: "He drew the same bull many times, removing lines each time, until almost only one was left.", cs: "Kreslil stejného býka mnohokrát a pokaždé ubral pár čar, až zbyla skoro jen jediná.", fr: "Il a dessiné le même taureau plein de fois, en enlevant des traits à chaque fois, jusqu'à n'en garder presque qu'un seul." } },
      { cat: "paz", emoji: "🕊️", x: 3130, y: 320, size: 2,
        name: { es: "La paloma de la paz", ca: "La coloma de la pau", en: "The dove of peace", cs: "Holubice míru", fr: "La colombe de la paix" },
        fact: { es: "Su paloma blanca se convirtió en el símbolo de la paz en todo el mundo. Su padre ya pintaba palomas.", ca: "La seva coloma blanca es va convertir en el símbol de la pau a tot el món. El seu pare ja pintava colomes.", en: "His white dove became the symbol of peace all over the world. His father already used to paint doves.", cs: "Jeho bílá holubice se stala symbolem míru na celém světě. Holuby maloval už jeho tatínek.", fr: "Sa colombe blanche est devenue le symbole de la paix dans le monde entier. Son père peignait déjà des colombes." } },
      { cat: "paz", emoji: "💐", x: 2900, y: 640,
        name: { es: "El ramo de flores", ca: "El ram de flors", en: "The bouquet of flowers", cs: "Kytice květin", fr: "Le bouquet de fleurs" },
        fact: { es: "Dos manos que se regalan un ramo de flores de colores: así pintó Picasso la amistad y la paz.", ca: "Dues mans que es regalen un ram de flors de colors: així va pintar Picasso l'amistat i la pau.", en: "Two hands giving each other a bunch of colourful flowers: that is how Picasso painted friendship and peace.", cs: "Dvě ruce, které si darují kytici barevných květin: tak Picasso namaloval přátelství a mír.", fr: "Deux mains qui s'offrent un bouquet de fleurs colorées : c'est ainsi que Picasso a peint l'amitié et la paix." } },
      { cat: "paz", emoji: "🖼️", x: 3600, y: 520, size: 2,
        name: { es: "El mural gigante", ca: "El mural gegant", en: "The giant mural", cs: "Obří obraz", fr: "La toile géante" },
        fact: { es: "El Guernica: un cuadro gigante en blanco y negro que pide que nunca haya guerras. Tiene una bombilla que parece un ojo y un caballo asombrado.", ca: "El Guernica: un quadre gegant en blanc i negre que demana que mai hi hagi guerres. Té una bombeta que sembla un ull i un cavall sorprès.", en: "Guernica: a giant black and white painting that asks for there to be no wars, ever. It has a light bulb that looks like an eye and an astonished horse.", cs: "Guernica: obří černobílý obraz, který prosí, aby nikdy nebyly války. Je na něm žárovka, která vypadá jako oko, a užaslý kůň.", fr: "Guernica : un tableau géant en noir et blanc qui demande qu'il n'y ait jamais de guerres. Il y a une ampoule qui ressemble à un œil et un cheval étonné." } },
      { cat: "paz", emoji: "🏺", x: 3360, y: 880,
        name: { es: "La cerámica con caras", ca: "La ceràmica amb cares", en: "The pottery with faces", cs: "Keramika s obličeji", fr: "La céramique à visages" },
        fact: { es: "En Vallauris pintaba platos y jarrones con caras, soles y búhos. ¡La vajilla más alegre del mundo!", ca: "A Vallauris pintava plats i gerros amb cares, sols i mussols. La vaixella més alegre del món!", en: "In Vallauris he painted plates and vases with faces, suns and owls. The happiest crockery in the world!", cs: "Ve Vallauris maloval talíře a vázy s obličeji, sluníčky a sovami. Nejveselejší nádobí na světě!", fr: "À Vallauris, il peignait des assiettes et des vases avec des visages, des soleils et des hiboux. La vaisselle la plus joyeuse du monde !" } },
      { cat: "paz", emoji: "🤍", x: 4080, y: 350,
        name: { es: "El niño con la paloma", ca: "El nen amb la coloma", en: "The child with the dove", cs: "Dítě s holubicí", fr: "L'enfant à la colombe" },
        fact: { es: "De joven pintó a un niño abrazando una paloma blanca con muchísimo cuidado.", ca: "De jove va pintar un nen abraçant una coloma blanca amb moltíssima cura.", en: "As a young man he painted a child hugging a white dove ever so gently.", cs: "Jako mladý namaloval dítě, které opatrně objímá bílou holubici.", fr: "Jeune, il a peint un enfant serrant tout doucement une colombe blanche." } },
      { cat: "paz", emoji: "🐐", x: 3840, y: 840,
        name: { es: "La cabra de trastos", ca: "La cabra de trastos", en: "The junk goat", cs: "Koza z krámů", fr: "La chèvre de bric-à-brac" },
        fact: { es: "Hizo una cabra de escultura con una cesta vieja de barriga. En su casa vivía una cabra de verdad: Esmeralda.", ca: "Va fer una cabra d'escultura amb una cistella vella de panxa. A casa seva hi vivia una cabra de debò: l'Esmeralda.", en: "He made a goat sculpture with an old basket for a belly. A real goat lived at his house: Esmeralda.", cs: "Vytvořil sochu kozy se starým košíkem místo břicha. U něj doma žila i skutečná koza: Esmeralda.", fr: "Il a fait une chèvre en sculpture avec un vieux panier comme ventre. Une vraie chèvre vivait chez lui : Esmeralda." } }
    ],
    /* el escenario: un taller largo de 4200 px. La pared del fondo cambia de
       época SIN cortes: el azul de Barcelona llega a una pared con puerta que
       hace de paso, detrás se abre el rosa del circo, y del rosa se pasa por
       una cortina a los planos cubistas de París, donde está el taller grande.
       Franjas: azul 0-1000 · paso 1000-1240 · rosa 1240-2620 · paso 2620-2960 ·
       cubista 2960-4200 */
    deco: function (e) {
      let s = "";
      const PIE = 944;
      /* las cajas de los puntos de interés se sacan del propio mapa: así la
         escenografía les deja aire alrededor aunque cambien de sitio */
      const cajas = (e && e.pois ? e.pois : []).map(p => {
        const w = p.iw || (p.size || 1) * 44, h = p.ih || (p.size || 1) * 44;
        return [p.x - w / 2 - 12, p.y - h / 2 - 12, w + 24, h + 48];
      });
      const libre = (x, y, w, h) => !cajas.some(c => x < c[0] + c[2] && x + w > c[0] && y < c[1] + c[3] && y + h > c[1]);
      /* números repetibles: el taller sale igual en cada partida */
      let sem = 90121;
      const az = () => (sem = sem * 16807 % 2147483647) / 2147483647;
      /* ---------- PIEZAS QUE SE REPITEN ---------- */
      /* un montón de lienzos apoyados en la pared, de canto */
      const pila = (x, y, w, cols) => {
        let d = `<ellipse cx="${x + w / 2}" cy="${PIE}" rx="${w / 2 + 14}" ry="12" fill="rgba(70,48,24,.18)"/>`;
        cols.forEach((c, i) => {
          d += `<path d="M${x + i * 9} ${PIE} L${x + i * 9 + 14} ${y + i * 14} L${x + w - i * 6} ${y + i * 14 + 8} L${x + w - i * 6 + 10} ${PIE} Z" fill="${c}"/>
            <path d="M${x + i * 9 + 14} ${y + i * 14} L${x + w - i * 6} ${y + i * 14 + 8}" stroke="rgba(80,60,36,.4)" stroke-width="3"/>`;
        });
        return d;
      };
      /* una balda de pared con sus dos escuadras */
      const balda = (x, y, w) => `<rect x="${x - w / 2}" y="${y}" width="${w}" height="18" rx="6" fill="#8d6234"/>
        <path d="M${x - w / 2 + 16} ${y + 18} L${x - w / 2 + 34} ${y + 48} H${x - w / 2 + 16} Z M${x + w / 2 - 16} ${y + 18} L${x + w / 2 - 34} ${y + 48} H${x + w / 2 - 16} Z" fill="#7d5a34"/>`;
      /* una mesa de patas largas, con su travesaño */
      const mesa = (x, y, w) => `<rect x="${x - w / 2}" y="${y}" width="${w}" height="18" rx="6" fill="#a97b45"/>
        <rect x="${x - w / 2 + 10}" y="${y + 18}" width="16" height="${PIE - y - 18}" rx="6" fill="#8d6234"/>
        <rect x="${x + w / 2 - 26}" y="${y + 18}" width="16" height="${PIE - y - 18}" rx="6" fill="#8d6234"/>
        <rect x="${x - w / 2 + 10}" y="${(y + (PIE - y) * 0.6).toFixed(0)}" width="${w - 36}" height="10" rx="4" fill="#8d6234"/>`;
      /* una peana maciza de madera para las esculturas */
      const peana = (x, y, w) => `<rect x="${x - w / 2 + 10}" y="${y}" width="${w - 20}" height="${PIE - y}" rx="6" fill="url(#picXMadera)"/>
        <rect x="${x - w / 2}" y="${y}" width="${w}" height="18" rx="6" fill="#8d6234"/>
        ${PIE - y > 70 ? `<rect x="${x - w / 2 + 24}" y="${y + 44}" width="${w - 48}" height="${PIE - y - 70}" rx="4" fill="rgba(255,255,255,.16)"/>` : ""}`;
      /* un caballete de tres patas con su bandeja */
      const caballete = (x, y, w) => `<path d="M${x - w / 2 + 14} ${y + 20} L${x - w / 2 - 6} ${PIE} M${x + w / 2 - 14} ${y + 20} L${x + w / 2 + 8} ${PIE}" stroke="url(#picXMadera)" stroke-width="15" stroke-linecap="round"/>
        <path d="M${x - w / 2 + 22} ${(y + (PIE - y) * 0.56).toFixed(0)} H${x + w / 2 - 22}" stroke="#a97b45" stroke-width="10"/>
        <rect x="${x - w / 2}" y="${y}" width="${w}" height="20" rx="7" fill="#8d6234"/>`;
      /* ---------- DEGRADADOS (ids con prefijo picX, propios de este mapa) ---------- */
      s += `<defs>
        <linearGradient id="picXAzul" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#5c86b8"/><stop offset="60%" stop-color="#3f6491"/><stop offset="100%" stop-color="#33507a"/></linearGradient>
        <linearGradient id="picXRosa" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f6ccd6"/><stop offset="60%" stop-color="#eeaebe"/><stop offset="100%" stop-color="#e2919f"/></linearGradient>
        <linearGradient id="picXOcre" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e2d6c0"/><stop offset="100%" stop-color="#c4b8a4"/></linearGradient>
        <linearGradient id="picXSuelo" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#c39a68"/><stop offset="100%" stop-color="#9a7245"/></linearGradient>
        <linearGradient id="picXMadera" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#b9884f"/><stop offset="100%" stop-color="#8d6234"/></linearGradient>
        <linearGradient id="picXLuz" x1="0" y1="0" x2="0.4" y2="1"><stop offset="0%" stop-color="rgba(255,250,224,.85)"/><stop offset="100%" stop-color="rgba(255,250,224,0)"/></linearGradient>
        <linearGradient id="picXPaso" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#4b6d97"/><stop offset="34%" stop-color="#9a93a4"/><stop offset="70%" stop-color="#d8b3bd"/><stop offset="100%" stop-color="#f0bccb"/></linearGradient>
        <linearGradient id="picXPuerta" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fbe0e6"/><stop offset="55%" stop-color="#f0aebe"/><stop offset="100%" stop-color="#d98da0"/></linearGradient>
        <linearGradient id="picXPaso2" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#e2919f"/><stop offset="42%" stop-color="#cfa9a8"/><stop offset="100%" stop-color="#cdc2ad"/></linearGradient>
        <linearGradient id="picXTela" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#b5566f"/><stop offset="45%" stop-color="#d4788f"/><stop offset="100%" stop-color="#a44a63"/></linearGradient>
        <linearGradient id="picXTela2" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#8f9ba3"/><stop offset="50%" stop-color="#b3bcc0"/><stop offset="100%" stop-color="#7d878f"/></linearGradient>
        <linearGradient id="picXParis" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e6ecf1"/><stop offset="100%" stop-color="#b6bfc4"/></linearGradient>
        <linearGradient id="picXViga" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8a6136"/><stop offset="72%" stop-color="#6f4c28"/><stop offset="100%" stop-color="#5b3d1f"/></linearGradient>
        <linearGradient id="picXBombilla" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="rgba(255,244,196,.85)"/><stop offset="100%" stop-color="rgba(255,244,196,0)"/></linearGradient>
        <linearGradient id="picXRincon" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#14223c" stop-opacity="0"/><stop offset="100%" stop-color="#14223c" stop-opacity=".34"/></linearGradient>
        <linearGradient id="picXLona" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#d3798f"/><stop offset="16%" stop-color="#e0879e"/><stop offset="78%" stop-color="#e0879e"/><stop offset="100%" stop-color="#cd7188"/></linearGradient>
        <linearGradient id="picXBoca" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#6f4658"/><stop offset="56%" stop-color="#8d5b6c"/><stop offset="86%" stop-color="#ae7c80"/><stop offset="100%" stop-color="#cda078"/></linearGradient>
      </defs>`;
      /* ---------- LA PARED DEL TALLER: CINCO TRAMOS QUE SE ENCADENAN ---------- */
      s += `<path d="M0 0 H1000 L960 ${PIE} H0 Z" fill="url(#picXAzul)"/>
        <path d="M1000 0 H1240 L1210 ${PIE} H960 Z" fill="url(#picXPaso)"/>
        <path d="M1240 0 H2620 L2600 ${PIE} H1210 Z" fill="url(#picXRosa)"/>
        <path d="M2620 0 H2960 L2950 ${PIE} H2600 Z" fill="url(#picXPaso2)"/>
        <path d="M2960 0 H4200 V${PIE} H2950 Z" fill="url(#picXOcre)"/>`;
      /* ---------- EL TECHO: UNA VIGA QUE CRUZA DE PUNTA A PUNTA ---------- */
      /* cose por arriba los cinco tramos de pared: ninguna franja empieza
         con una costura a la vista */
      s += `<rect x="0" y="0" width="4200" height="56" fill="url(#picXViga)"/>
        <rect x="0" y="56" width="4200" height="9" fill="rgba(40,26,12,.45)"/>
        <rect x="0" y="65" width="4200" height="30" fill="rgba(40,26,12,.14)"/>
        <path d="M0 104 H4200" stroke="rgba(60,42,24,.16)" stroke-width="7" fill="none"/>
        <path d="M0 99 H4200" stroke="rgba(255,255,255,.16)" stroke-width="4" fill="none"/>`;
      /* las ménsulas de la viga, repartidas como los tirantes de un desván */
      for (let x = 300; x < 4200; x += 470) {
        s += `<path d="M${x - 26} 56 H${x + 26} L${x + 17} 122 H${x - 17} Z" fill="url(#picXViga)"/>
          <path d="M${x - 26} 56 H${x - 14} L${x - 8} 122 H${x - 17} Z" fill="rgba(255,255,255,.13)"/>`;
      }
      /* ---------- FRANJA AZUL: los tejados, las ventanas y los balcones de Barcelona ---------- */
      const edif = [];
      for (let i = 0; i < 10; i++) edif.push([-30 + i * 106, 566 - (142 + (i * 83) % 128), 96]);
      let tor = "";
      edif.forEach(b => {
        tor += `<rect x="${b[0]}" y="${b[1]}" width="${b[2]}" height="${566 - b[1]}" rx="4"/>
          <path d="M${b[0] - 11} ${b[1]} H${b[0] + b[2] + 11} L${b[0] + b[2] - 4} ${b[1] - 21} H${b[0] + 4} Z"/>
          <rect x="${b[0] + b[2] - 26}" y="${b[1] - 48}" width="17" height="30" rx="3"/>`;
      });
      s += `<g fill="#2e5183" opacity=".55">${tor}</g>`;
      let vent = "";
      edif.forEach(b => {
        for (let r = 0; r < 5; r++) for (let c = 0; c < 2; c++) {
          const wx = b[0] + 14 + c * 48, wy = b[1] + 26 + r * 52;
          if (wy + 34 > 556 || !libre(wx, wy, 30, 34)) continue;
          vent += `<rect x="${wx}" y="${wy}" width="30" height="34" rx="3"/>`;
        }
      });
      s += `<g fill="#a6c8e4" opacity=".45">${vent}</g>`;
      let balc = "";
      edif.forEach(b => {
        for (let r = 0; r < 2; r++) {
          const bx = b[0] + 10, by = b[1] + 62 + r * 104;
          if (by + 32 > 556 || !libre(bx, by, 76, 32)) continue;
          balc += `<rect x="${bx}" y="${by}" width="76" height="6" rx="3"/><rect x="${bx}" y="${by + 26}" width="76" height="5" rx="2"/>`;
          for (let k = 0; k < 5; k++) balc += `<rect x="${bx + 6 + k * 16}" y="${by + 5}" width="4" height="22" rx="2"/>`;
        }
      });
      s += `<g fill="#24406b" opacity=".5">${balc}</g>`;
      /* la ropa tendida entre dos tejados, la luna y unas estrellas de madrugada */
      s += `<path d="M132 306 Q292 350 452 312" stroke="#24406b" stroke-width="4" fill="none" opacity=".5"/>`;
      [[172, 322, 34, 46, "#cfe0f2"], [232, 334, 28, 38, "#b7cfea"], [292, 336, 32, 42, "#e6eef7"], [356, 326, 26, 34, "#c3d7ec"]].forEach(r => {
        s += `<path d="M${r[0]} ${r[1]} h${r[2]} v${r[3]} q${-r[2] / 2} 8 ${-r[2]} 0 Z" fill="${r[4]}" opacity=".65"/>`;
      });
      s += `<path d="M652 216 Q800 262 948 222" stroke="#24406b" stroke-width="4" fill="none" opacity=".45"/>`;
      [[694, 230, 30, 40, "#dbe8f5"], [750, 240, 26, 34, "#bed4ec"], [808, 242, 30, 38, "#eef4fa"]].forEach(r => {
        s += `<path d="M${r[0]} ${r[1]} h${r[2]} v${r[3]} q${-r[2] / 2} 8 ${-r[2]} 0 Z" fill="${r[4]}" opacity=".6"/>`;
      });
      s += `<path d="M876 130 a46 46 0 1 0 0 92 a70 70 0 0 1 0 -92 Z" fill="#e4eefa" opacity=".9"/>
        <g fill="#cfe0f2" opacity=".5"><circle cx="182" cy="182" r="6"/><circle cx="318" cy="128" r="5"/><circle cx="470" cy="204" r="6"/><circle cx="612" cy="140" r="5"/><circle cx="742" cy="196" r="6"/><circle cx="948" cy="264" r="5"/></g>`;
      /* ---------- PASO 1: LA PARED CON LA PUERTA POR DONDE ENTRA EL ROSA ---------- */
      /* el muro de yeso, visto un poco de lado, con su rodapié y su desconchón */
      s += `<path d="M1000 110 H1240 L1210 ${PIE} H962 Z" fill="rgba(255,255,255,.14)"/>
        <path d="M1004 ${PIE - 60} H1212" stroke="rgba(90,72,84,.24)" stroke-width="5"/>
        <path d="M1016 210 q26 -18 52 -4 q-20 22 -52 4 Z" fill="rgba(120,100,110,.22)"/>
        <path d="M1178 460 q22 -14 44 -2 q-18 20 -44 2 Z" fill="rgba(120,100,110,.18)"/>`;
      /* el poste de la esquina: aquí acaba la pared azul y empieza el paso.
         Con su sombra a la izquierda, el cambio de pared se lee como un rincón
         del taller y no como un corte */
      /* el poste sube hasta la viga: así el cambio de pared no deja ni un dedo
         de costura a la vista por arriba */
      s += `<path d="M902 66 H962 L948 ${PIE} H888 Z" fill="rgba(20,34,60,.26)"/>
        <path d="M962 66 H1002 L988 ${PIE} H948 Z" fill="url(#picXViga)"/>
        <path d="M962 66 H974 L960 ${PIE} H948 Z" fill="rgba(255,255,255,.15)"/>
        <path d="M990 66 H1002 L988 ${PIE} H976 Z" fill="rgba(40,26,12,.22)"/>
        <path d="M956 104 H1006 L1004 126 H954 Z" fill="#8d6234"/>`;
      /* el hueco de la puerta: detrás ya es de color rosa */
      s += `<path d="M1022 300 H1204 V${PIE} H1010 Z" fill="url(#picXPuerta)"/>
        <path d="M1022 300 H1204 V${PIE} H1010 Z" fill="none" stroke="#8a7a62" stroke-width="14"/>
        <path d="M1010 300 H1216 L1210 276 H1016 Z" fill="#a97b45"/>
        <path d="M1042 320 H1184 V${PIE - 20} H1034 Z" fill="none" stroke="rgba(255,255,255,.35)" stroke-width="6"/>`;
      /* la jamba derecha, gemela del poste: cierra el paso y tapa el punto
         donde la pared del pasillo se convierte en la pared rosa */
      s += `<path d="M1216 66 H1256 L1240 ${PIE} H1200 Z" fill="url(#picXViga)"/>
        <path d="M1216 66 H1228 L1212 ${PIE} H1200 Z" fill="rgba(255,255,255,.13)"/>
        <path d="M1244 66 H1256 L1240 ${PIE} H1228 Z" fill="rgba(40,26,12,.2)"/>
        <path d="M1210 104 H1260 L1258 126 H1208 Z" fill="#8d6234"/>`;
      /* al fondo del pasillo ya se adivina el circo: una carpa pequeñita y
         lejana que anuncia el rosa antes de llegar */
      s += `<g opacity=".24" fill="#b74f6b">
        <path d="M1113 402 Q1150 470 1190 540 H1036 Q1076 470 1113 402 Z"/>
        <path d="M1109 380 h6 v26 h-6 Z"/><path d="M1117 382 L1146 391 L1117 400 Z"/>
        <path d="M1036 540 h154 v12 h-154 Z"/></g>
        <g opacity=".2" fill="#fdfaf4"><path d="M1113 402 L1092 540 L1120 540 Z"/><path d="M1113 402 L1152 540 L1176 540 Z"/></g>
        <path d="M1038 452 Q1113 486 1188 448" stroke="rgba(183,79,107,.22)" stroke-width="4" fill="none"/>`;
      /* la cortina de lino recogida en la jamba izquierda */
      s += `<path d="M1022 300 H1082 q-34 130 -30 250 q4 130 26 ${PIE - 550} H1022 Z" fill="#f4e7dd" opacity=".92"/>
        <path d="M1036 320 q-20 122 -18 232 q2 126 14 ${PIE - 566} M1062 316 q-26 124 -22 234 q4 124 18 ${PIE - 568}" stroke="rgba(160,130,120,.35)" stroke-width="5" fill="none"/>
        <path d="M1020 552 q20 15 30 -4 q-2 21 -12 27 q-14 6 -18 -23 Z" fill="#e0879e"/>`;
      /* la luz rosa de la puerta, derramada en el suelo */
      s += `<path d="M1016 ${PIE} H1206 L1300 1100 H944 Z" fill="url(#picXPuerta)" opacity=".38"><animate attributeName="opacity" values=".38;.22;.38" dur="11s" repeatCount="indefinite"/></path>`;
      /* el tablón donde descansa el cuadro rosa, cruzado en el hueco */
      s += `<rect x="1024" y="654" width="192" height="18" rx="6" fill="#8d6234"/>
        <path d="M1040 672 L1056 702 H1040 Z M1200 672 L1184 702 H1200 Z" fill="#7d5a34"/>`;
      /* ---------- FRANJA ROSA: la carpa del circo, las guirnaldas y la pista ---------- */
      const CX = 1930;
      s += `<path d="M${CX - 330} 646 Q${CX - 260} 430 ${CX} 210 Q${CX + 260} 430 ${CX + 330} 646 Z" fill="#e0879e"/>`;
      [[-244, -150], [-124, -74], [-4, 2], [116, 78], [236, 154]].forEach(t => {
        s += `<path d="M${CX} 210 L${CX + 96 + t[0]} 646 L${CX + 168 + t[1]} 646 Z" fill="#fdf4ef" opacity=".92"/>`;
      });
      s += `<path d="M${CX - 330} 646 Q${CX - 260} 430 ${CX} 210 Q${CX + 260} 430 ${CX + 330} 646 Z" fill="none" stroke="#c25f7a" stroke-width="6"/>`;
      /* la pared de lona, que baja del techo de la carpa hasta el suelo: antes
         el faldón se cortaba en seco a media pared y la carpa se leía como un
         telón colgado. Las franjas blancas son las mismas que traen los gajos
         del techo, así que techo y pared casan sin costura, y el dobladillo
         llega ondulado al suelo en vez de acabar en una raya recta */
      const HEM = 930;
      const abre = x => +(CX + (x - CX) * 1.035).toFixed(0);   /* la falda se ensancha al bajar */
      const XI = abre(1612), XD = abre(2248), pas = (XD - XI) / 9;
      let dobla = "";
      for (let i = 0; i < 9; i++) {
        dobla += ` Q${(XI + pas * (i + 0.5)).toFixed(0)} ${HEM + (i % 2 ? 15 : 3)} ${(XI + pas * (i + 1)).toFixed(0)} ${HEM + 7}`;
      }
      s += `<path d="M1612 640 L${XI} ${HEM + 7}${dobla} L2248 640 Z" fill="url(#picXLona)"/>`;
      [[1782, 2100], [2142, 2176]].forEach(b => {
        s += `<path d="M${b[0]} 640 L${abre(b[0])} ${HEM + 7} L${abre(b[1])} ${HEM + 7} L${b[1]} 640 Z" fill="#fdf4ef" opacity=".92"/>`;
      });
      /* los pliegues de la tela y el dobladillo del final, para que la lona no
         quede como un panel plano */
      [[1662, 14, .13], [1734, 12, .13], [1836, 13, .07], [2044, 12, .07], [2118, 13, .13], [2208, 14, .13]].forEach(p => {
        s += `<path d="M${p[0]} 648 L${abre(p[0])} ${HEM + 4} L${abre(p[0] + p[1])} ${HEM + 4} L${p[0] + p[1]} 648 Z" fill="rgba(150,64,88,${p[2]})"/>`;
      });
      s += `<path d="M${XI} ${HEM - 6} L${XI} ${HEM + 7}${dobla} L${XD} ${HEM - 6} Z" fill="rgba(150,64,88,.2)"/>`;
      /* los dos costados en sombra y el filo de cada esquina: así la lona se
         despega de la pared rosa, que es casi del mismo color, y la carpa tiene
         volumen en vez de parecer un panel pintado */
      [[1612, 52, 1], [2248, 52, -1]].forEach(l => {
        const x2 = l[0] + l[1] * l[2];
        s += `<path d="M${l[0]} 640 L${abre(l[0])} ${HEM + 7} L${abre(x2)} ${HEM + 7} L${x2} 640 Z" fill="rgba(118,48,70,.17)"/>
          <path d="M${l[0]} 646 L${abre(l[0])} ${HEM + 6}" stroke="rgba(134,54,78,.34)" stroke-width="4" fill="none"/>`;
      });
      /* la sombra que la carpa deja en la pared, del lado que no da la luz */
      s += `<path d="M1608 660 L1546 ${HEM + 18} L1600 ${HEM + 18} L1610 660 Z" fill="rgba(118,48,70,.13)"/>`;
      let vola = `M${CX - 334} 646`;
      for (let k = 0; k < 13; k++) vola += ` q26 26 52 0`;
      s += `<path d="${vola} L${CX + 334} 664 L${CX - 334} 664 Z" fill="#c25f7a"/>
        <path d="M${CX - 130} 452 Q${CX} 412 ${CX + 130} 452" stroke="#c25f7a" stroke-width="5" fill="none"/>`;
      /* la boca de la carpa, que ahora llega al suelo: por el hueco se adivina
         el serrín de la pista, así que el fondo no es una mancha oscura */
      s += `<path d="M${CX - 68} ${HEM + 6} L${CX - 62} 536 Q${CX} 496 ${CX + 62} 536 L${CX + 68} ${HEM + 6} Z" fill="url(#picXBoca)"/>
        <rect x="${CX - 5}" y="164" width="10" height="48" rx="4" fill="#c98da0"/>
        <path d="M${CX + 5} 170 L${CX + 60} 184 L${CX + 5} 198 Z" fill="#e0879e"><animate attributeName="d" values="M${CX + 5} 170 L${CX + 60} 184 L${CX + 5} 198 Z;M${CX + 5} 170 L${CX + 52} 194 L${CX + 5} 198 Z;M${CX + 5} 170 L${CX + 60} 184 L${CX + 5} 198 Z" dur="4.5s" repeatCount="indefinite"/></path>`;
      /* las dos cortinillas, ya de largo entero: se abren hacia abajo y dejan
         ver el hueco por el medio */
      [[CX - 58, 1], [CX + 58, -1]].forEach(c => {
        s += `<g><animateTransform attributeName="transform" type="rotate" values="${-1.2 * c[1]} ${c[0]} 540;${1.2 * c[1]} ${c[0]} 540;${-1.2 * c[1]} ${c[0]} 540" dur="8s" repeatCount="indefinite"/>
          <path d="M${c[0]} 540 L${c[0] - 8 * c[1]} ${HEM + 4} Q${c[0] + 14 * c[1]} ${HEM + 16} ${c[0] + 36 * c[1]} ${HEM - 2} Q${c[0] + 32 * c[1]} 720 ${c[0] + 22 * c[1]} 540 Z" fill="#e0879e"/>
          <path d="M${c[0] + 7 * c[1]} 566 Q${c[0] + 24 * c[1]} 740 ${c[0] + 24 * c[1]} ${HEM - 16}" stroke="rgba(150,64,88,.26)" stroke-width="5" fill="none"/></g>`;
      });
      /* dos guirnaldas de banderines que cruzan toda la franja rosa */
      [[1236, 168, 2612, 142, 122], [1268, 254, 2588, 232, 108]].forEach((g, k) => {
        let fl = "";
        for (let i = 1; i < 22; i++) {
          const t = i / 22, mt = 1 - t;
          const px = mt * mt * g[0] + 2 * mt * t * ((g[0] + g[2]) / 2) + t * t * g[2];
          const py = mt * mt * g[1] + 2 * mt * t * (g[1] + g[4]) + t * t * g[3];
          if (!libre(px - 14, py, 28, 34)) continue;
          fl += `<path d="M${(px - 13).toFixed(0)} ${py.toFixed(0)} H${(px + 13).toFixed(0)} L${px.toFixed(0)} ${(py + 32).toFixed(0)} Z" fill="${["#e0879e", "#f6d089", "#fdfaf4", "#c8a2c8"][i % 4]}"/>`;
        }
        s += `<g><animateTransform attributeName="transform" type="translate" values="0 0;0 ${7 + k * 4};0 0" dur="${8 + k * 2}s" repeatCount="indefinite"/>
          <path d="M${g[0]} ${g[1]} Q${((g[0] + g[2]) / 2).toFixed(0)} ${g[1] + g[4]} ${g[2]} ${g[3]}" stroke="#d9748f" stroke-width="5" fill="none"/>${fl}</g>`;
      });
      /* ---------- PASO 2: LA CORTINA DE TERCIOPELO Y LA LUZ FRÍA DE PARÍS ---------- */
      /* la rendija de luz gris entre los dos cortinones */
      s += `<path d="M2760 160 H2830 L2822 ${PIE} H2752 Z" fill="url(#picXParis)" opacity=".9"/>
        <path d="M2760 160 H2830 L2822 ${PIE} H2752 Z" fill="url(#picXLuz)" opacity=".35"><animate attributeName="opacity" values=".35;.18;.35" dur="10s" repeatCount="indefinite"/></path>`;
      /* la barra y sus anillas */
      s += `<rect x="2604" y="140" width="374" height="16" rx="8" fill="#8d6234"/>
        <circle cx="2610" cy="148" r="13" fill="#a97b45"/><circle cx="2972" cy="148" r="13" fill="#a97b45"/>
        <g fill="none" stroke="#7d5a34" stroke-width="5">${[2640, 2676, 2712, 2748, 2842, 2878, 2914, 2950].map(x => `<circle cx="${x}" cy="150" r="11"/>`).join("")}</g>`;
      /* el cortinón rosa (viene del circo) y el gris (ya es París), los dos recogidos */
      s += `<path d="M2612 156 q54 210 18 400 q-30 158 22 ${PIE - 556} L2762 ${PIE} L2758 156 Z" fill="url(#picXTela)"/>
        <g stroke="rgba(90,40,58,.32)" stroke-width="6" fill="none"><path d="M2648 180 q40 200 6 380 q-24 130 18 ${PIE - 560} M2700 176 q34 200 4 380 q-20 130 16 ${PIE - 556}"/></g>
        <path d="M2606 470 q86 40 150 -14 q-8 46 -50 62 q-58 18 -100 -48 Z" fill="#8f3d54"/>
        <path d="M2976 156 q-54 210 -18 400 q30 158 -22 ${PIE - 556} L2826 ${PIE} L2830 156 Z" fill="url(#picXTela2)"/>
        <g stroke="rgba(60,70,76,.3)" stroke-width="6" fill="none"><path d="M2940 180 q-40 200 -6 380 q24 130 -18 ${PIE - 560} M2888 176 q-34 200 -4 380 q20 130 -16 ${PIE - 556}"/></g>
        <path d="M2982 470 q-86 40 -150 -14 q8 46 50 62 q58 18 100 -48 Z" fill="#5f6a70"/>`;
      /* los dos recogidos van altos a propósito: más abajo caían justo detrás
         del ramo de flores y le hacían sombra encima */
      /* la luz del paso, derramada en el suelo */
      s += `<path d="M2754 ${PIE} H2824 L2880 1100 H2690 Z" fill="url(#picXParis)" opacity=".4"/>`;
      /* ---------- FRANJA CUBISTA: los planos de París y el ventanal del taller ---------- */
      s += `<g opacity=".5">
        <path d="M2984 62 L3320 16 L3452 306 L3072 350 Z" fill="#bda683"/>
        <path d="M3320 16 L3712 60 L3660 356 L3438 314 Z" fill="#8f9ba3"/>
        <path d="M3712 60 L4200 92 L4200 392 L3672 352 Z" fill="#b6a992"/>
        <path d="M3020 350 L3438 306 L3552 660 L3128 716 Z" fill="#cbb694"/>
        <path d="M3452 336 L3860 372 L3900 704 L3562 664 Z" fill="#a4aaa6"/>
        <path d="M3880 380 L4200 404 L4200 726 L3916 700 Z" fill="#c0aa8c"/>
        <path d="M3072 676 L3524 640 L3596 ${PIE} L3060 ${PIE} Z" fill="#c0aa8c"/>
        <path d="M3548 660 L3922 700 L3960 ${PIE} L3612 ${PIE} Z" fill="#9ba29c"/>
        <path d="M3944 712 L4200 738 L4200 ${PIE} L3980 ${PIE} Z" fill="#b0a894"/></g>
        <g stroke="rgba(72,62,48,.32)" stroke-width="3" fill="none">
        <path d="M3020 350 H4200 M3072 676 H4200 M3320 16 L3438 306 L3552 660 L3596 ${PIE} M3712 60 L3860 372 L3960 ${PIE} M3452 306 L3712 60 M3128 716 L3524 640"/></g>`;
      /* el rincón del fondo: la pared se apaga al llegar a la esquina y el
         taller deja de parecer un pasillo infinito */
      s += `<rect x="4030" y="66" width="170" height="${PIE - 66}" fill="url(#picXRincon)"/>`;
      /* el ventanal por donde entra la luz del norte */
      s += `<rect x="3452" y="96" width="230" height="212" rx="6" fill="#dbe8f2"/>
        <path d="M3458 302 V250 L3502 206 L3548 248 L3598 202 L3654 250 V302 Z" fill="#8ea3b4"/>
        <g fill="#75899a"><rect x="3486" y="216" width="12" height="24" rx="2"/><rect x="3586" y="212" width="12" height="24" rx="2"/><rect x="3636" y="242" width="11" height="22" rx="2"/></g>
        <rect x="3452" y="96" width="230" height="212" rx="6" fill="none" stroke="#8a7a62" stroke-width="12"/>
        <path d="M3567 102 V302 M3458 202 H3676" stroke="#8a7a62" stroke-width="8"/>`;
      /* la luz del ventanal, cruzando el taller en diagonal */
      s += `<path d="M3462 314 L3672 314 L3424 1100 L2996 1100 Z" fill="url(#picXLuz)" opacity=".3"><animate attributeName="opacity" values=".3;.15;.3" dur="12s" repeatCount="indefinite"/></path>`;
      [[3402, 520, 9], [3268, 706, 11], [3140, 866, 13], [3540, 618, 10]].forEach(d => {
        s += `<circle cx="${d[0]}" cy="${d[1]}" r="6" fill="rgba(255,250,214,.75)"><animateTransform attributeName="transform" type="translate" values="0 0;-22 -34;0 0" dur="${d[2]}s" repeatCount="indefinite"/></circle>`;
      });
      /* ---------- EL SUELO DEL TALLER, DE PUNTA A PUNTA ---------- */
      s += `<rect x="0" y="912" width="4200" height="32" fill="rgba(60,40,18,.18)"/>
        <rect x="0" y="${PIE}" width="4200" height="156" fill="url(#picXSuelo)"/>
        <rect x="0" y="936" width="4200" height="14" fill="#7d5a34"/>`;
      for (let x = -40; x < 4260; x += 104) s += `<line x1="${x}" y1="950" x2="${x - 36}" y2="1100" stroke="rgba(84,54,26,.22)" stroke-width="3"/>`;
      /* la pista del circo, dibujada en el suelo de la franja rosa */
      s += `<ellipse cx="${CX}" cy="1026" rx="470" ry="62" fill="#e2c694"/>
        <ellipse cx="${CX}" cy="1026" rx="470" ry="62" fill="none" stroke="#d9748f" stroke-width="10"/>
        <ellipse cx="${CX}" cy="1026" rx="404" ry="48" fill="none" stroke="rgba(255,255,255,.35)" stroke-width="6"/>`;
      let ser = "";
      for (let i = 0; i < 30; i++) {
        const a = i * 1.7, rr = 40 + (i * 61) % 340;
        ser += `<ellipse cx="${(CX + rr * Math.cos(a)).toFixed(0)}" cy="${(1026 + rr * 0.15 * Math.sin(a)).toFixed(0)}" rx="${8 + i % 5}" ry="${3 + i % 3}"/>`;
      }
      s += `<g fill="rgba(180,140,84,.3)">${ser}</g>`;
      /* las salpicaduras de pintura de tantos años de taller */
      [[206, 1018, "#3f6491"], [606, 1064, "#e0879e"], [886, 1004, "#c9b03f"], [1364, 1052, "#3f6491"],
        [2286, 1074, "#c9b03f"], [2700, 1010, "#e0879e"], [3186, 1050, "#3f6491"], [3608, 1012, "#e0879e"], [4046, 1058, "#7d5a34"]].forEach(p => {
        s += `<ellipse cx="${p[0]}" cy="${p[1]}" rx="28" ry="12" fill="${p[2]}" opacity=".34"/><circle cx="${p[0] + 32}" cy="${p[1] + 13}" r="7" fill="${p[2]}" opacity=".3"/>`;
      });
      /* ---------- LO QUE LLENA EL TALLER ENTRE PUNTO Y PUNTO ---------- */
      /* el aparador de la esquina azul, con su bote de pinceles y sus tarros */
      s += `<ellipse cx="104" cy="${PIE}" rx="106" ry="13" fill="rgba(70,48,24,.18)"/>
        <rect x="26" y="762" width="158" height="${PIE - 762}" rx="6" fill="url(#picXMadera)"/>
        <rect x="16" y="746" width="178" height="18" rx="7" fill="#a97b45"/>
        <rect x="42" y="786" width="126" height="52" rx="5" fill="rgba(255,255,255,.14)"/>
        <rect x="42" y="852" width="126" height="52" rx="5" fill="rgba(255,255,255,.14)"/>
        <circle cx="105" cy="812" r="7" fill="#7d5a34"/><circle cx="105" cy="878" r="7" fill="#7d5a34"/>`;
      s += `<path d="M70 682 L64 702 M84 674 L82 700 M98 676 L100 700 M112 682 L116 702" stroke="#8d6234" stroke-width="7" stroke-linecap="round"/>
        <circle cx="70" cy="678" r="8" fill="#3f6491"/><circle cx="84" cy="670" r="8" fill="#e0879e"/>
        <circle cx="98" cy="672" r="8" fill="#c9b03f"/><circle cx="116" cy="678" r="8" fill="#7d5a34"/>
        <path d="M62 700 h56 l-7 46 h-42 Z" fill="#cfc6b4"/>
        <rect x="136" y="704" width="34" height="42" rx="5" fill="#cfc6b4"/><rect x="136" y="718" width="34" height="28" rx="4" fill="#3f6491"/>`;
      /* la caja de los trapos, metida entre las patas del caballete */
      s += `<ellipse cx="256" cy="${PIE}" rx="58" ry="11" fill="rgba(70,48,24,.18)"/>
        <rect x="208" y="872" width="96" height="${PIE - 872}" rx="5" fill="#a97b45"/>
        <rect x="202" y="864" width="108" height="14" rx="5" fill="#8d6234"/>
        <path d="M222 864 q14 -22 34 -12 q20 10 34 12 Z" fill="#e8dcc4"/>
        <path d="M240 858 q10 -10 22 -4" fill="none" stroke="#c9b03f" stroke-width="5"/>
        <g fill="rgba(255,255,255,.12)"><rect x="224" y="892" width="64" height="30" rx="4"/></g>`;
      /* la balda alta de la pared azul: el quinqué encendido, dos tarros de
         pigmento y la jarra. Llena el trozo de pared que quedaba pelado */
      s += balda(520, 640, 196);
      s += `<rect x="436" y="606" width="30" height="34" rx="4" fill="#cfc6b4"/>
        <rect x="436" y="616" width="30" height="24" rx="3" fill="#3f6491"/>
        <rect x="476" y="598" width="26" height="42" rx="4" fill="#e6dcc6"/>
        <rect x="476" y="612" width="26" height="28" rx="3" fill="#c9b03f"/>
        <ellipse cx="525" cy="602" rx="30" ry="28" fill="url(#picXBombilla)" opacity=".5"><animate attributeName="opacity" values=".5;.32;.5" dur="10s" repeatCount="indefinite"/></ellipse>
        <path d="M512 640 q-10 -24 0 -32 h26 q10 8 0 32 Z" fill="#a97b45"/>
        <path d="M516 608 h18 v-24 q-9 -9 -18 0 Z" fill="#f6ead2" opacity=".92"/>
        <circle cx="525" cy="598" r="7" fill="#fff4c4"/>
        <path d="M556 640 q-8 -42 12 -50 q20 8 12 50 Z" fill="#7ba3cc"/>
        <path d="M576 604 q16 4 14 16 q-2 8 -12 8" stroke="#7ba3cc" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M560 604 q8 -4 16 0" stroke="#a6c8e4" stroke-width="4" fill="none" stroke-linecap="round"/>`;
      /* dos estudios en papel, clavados debajo de la balda */
      [[424, 706, -3, 0], [528, 714, 4, 1]].forEach(h => {
        const traza = h[3] === 0
          ? `<path d="M${h[0] + 14} ${h[1] + 48} q10 -24 26 -20 q14 4 10 22" fill="none" stroke="#3f6491" stroke-width="3" stroke-linecap="round"/>`
          : `<path d="M${h[0] + 14} ${h[1] + 30} q14 -12 26 0 M${h[0] + 16} ${h[1] + 44} q12 -10 22 0 M${h[0] + 20} ${h[1] + 56} q8 -8 14 0" fill="none" stroke="#3f6491" stroke-width="3" stroke-linecap="round"/>`;
        s += `<g transform="rotate(${h[2]} ${h[0] + 28} ${h[1] + 34})">
          <rect x="${h[0]}" y="${h[1]}" width="56" height="68" rx="3" fill="#dde6f2" opacity=".92"/>
          ${traza}
          ${h[3] === 0 ? `<path d="M${h[0] + 12} ${h[1] + 58} H${h[0] + 44}" stroke="rgba(63,100,145,.45)" stroke-width="3" stroke-linecap="round" fill="none"/>` : ""}
          <circle cx="${h[0] + 28}" cy="${h[1] + 6}" r="4" fill="#8d6234"/></g>`;
      });
      /* la bata del pintor, colgada de un clavo y manchada de tanto trabajar */
      s += `<circle cx="706" cy="588" r="6" fill="#8d6234"/>
        <path d="M706 592 q-46 12 -56 44 l-16 46 q14 10 26 2 l6 -20 q-6 90 -2 128 q42 14 84 0 q4 -38 -2 -128 l6 20 q12 8 26 -2 l-16 -46 q-10 -32 -56 -44 Z" fill="#8fb0d4" stroke="rgba(28,52,92,.45)" stroke-width="4"/>
        <path d="M706 592 q-46 12 -56 44 l-16 46 q14 10 26 2 l6 -20 q-4 60 -3 96 q10 6 22 8 q-6 -100 21 -176 Z" fill="rgba(255,255,255,.16)"/>
        <path d="M692 596 q14 24 28 0" fill="none" stroke="rgba(28,52,92,.4)" stroke-width="4"/>
        <rect x="676" y="700" width="34" height="30" rx="5" fill="none" stroke="rgba(28,52,92,.4)" stroke-width="4"/>
        <ellipse cx="736" cy="688" rx="13" ry="8" fill="#e0879e" opacity=".7" transform="rotate(-16 736 688)"/>
        <ellipse cx="666" cy="742" rx="10" ry="7" fill="#c9b03f" opacity=".6" transform="rotate(12 666 742)"/>`;
      /* más lienzos de canto, arrimados al rincón azul */
      s += pila(838, 700, 96, ["#e6dcc6", "#d2c3a6", "#c0ad8c"]);
      /* el bombo del circo y su maza, apoyados en la pared rosa */
      s += `<ellipse cx="1390" cy="${PIE}" rx="84" ry="13" fill="rgba(70,48,24,.18)"/>
        <circle cx="1390" cy="866" r="76" fill="#f6e7db"/>
        <circle cx="1390" cy="866" r="76" fill="none" stroke="#c25f7a" stroke-width="13"/>
        <circle cx="1390" cy="866" r="52" fill="none" stroke="#e0879e" stroke-width="7"/>
        <circle cx="1390" cy="866" r="19" fill="#e0879e" opacity=".5"/>
        <g stroke="#8d6234" stroke-width="6" stroke-linecap="round">${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(k => {
          const a = k * Math.PI / 6;
          return `<path d="M${(1390 + 62 * Math.cos(a)).toFixed(0)} ${(866 + 62 * Math.sin(a)).toFixed(0)} L${(1390 + 86 * Math.cos(a)).toFixed(0)} ${(866 + 86 * Math.sin(a)).toFixed(0)}"/>`;
        }).join("")}</g>
        <path d="M1472 ${PIE} L1446 810" stroke="#8d6234" stroke-width="11" stroke-linecap="round"/>
        <circle cx="1444" cy="800" r="17" fill="#fdfaf4" stroke="#d9748f" stroke-width="4"/>`;
      /* los aros del circo, colgados de un clavo en la pared rosa */
      s += `<circle cx="1268" cy="360" r="6" fill="#8d6234"/>
        <path d="M1268 364 L1290 456 M1268 364 L1318 544" stroke="#8d6234" stroke-width="4"/>
        <circle cx="1290" cy="500" r="46" fill="none" stroke="#d9748f" stroke-width="11"/>
        <circle cx="1320" cy="578" r="36" fill="none" stroke="#f6d089" stroke-width="10"/>`;
      /* el perchero del circo: la chaqueta del saltimbanqui y el sombrero de
         paja esperando la próxima función */
      s += `<ellipse cx="1530" cy="${PIE}" rx="46" ry="11" fill="rgba(70,48,24,.18)"/>
        <rect x="1523" y="566" width="14" height="${PIE - 572}" rx="7" fill="url(#picXMadera)"/>
        <path d="M1490 592 H1570" stroke="#8d6234" stroke-width="10" stroke-linecap="round"/>
        <path d="M1500 ${PIE - 8} L1530 892 L1560 ${PIE - 8}" fill="none" stroke="#8d6234" stroke-width="9" stroke-linecap="round"/>
        <circle cx="1530" cy="562" r="9" fill="#a97b45"/>`;
      s += `<path d="M1490 602 q-30 8 -36 28 l-11 32 q9 7 17 1 l5 -14 q-5 60 -2 84 q26 10 54 0 q3 -24 -2 -84 l5 14 q8 6 17 -1 l-11 -32 q-6 -20 -36 -28 Z" fill="#fdf4ef" stroke="rgba(160,90,110,.35)" stroke-width="3"/>
        <g fill="#e0879e" opacity=".85"><rect x="1465" y="668" width="50" height="12" rx="4"/><rect x="1465" y="698" width="50" height="12" rx="4"/><rect x="1467" y="728" width="46" height="12" rx="4"/></g>
        <path d="M1478 606 q12 18 24 0" fill="none" stroke="rgba(160,90,110,.35)" stroke-width="3"/>
        <ellipse cx="1568" cy="606" rx="30" ry="9" fill="#f6d089"/>
        <path d="M1550 605 q18 -32 36 0 Z" fill="#e8c070"/>
        <path d="M1552 596 q16 6 32 0" stroke="#c25f7a" stroke-width="5" fill="none"/>`;
      /* el cartel del circo, pintado a mano y clavado en la pared */
      s += `<rect x="2440" y="330" width="146" height="196" rx="5" fill="#fdf4ef"/>
        <rect x="2440" y="330" width="146" height="196" rx="5" fill="none" stroke="#c25f7a" stroke-width="9"/>
        <g fill="#e0879e">${[0, 1, 2, 3, 4, 5].map(i => `<rect x="${2452 + i * 24}" y="342" width="12" height="18" rx="3"/>`).join("")}</g>
        <circle cx="2513" cy="424" r="40" fill="none" stroke="#d9748f" stroke-width="9"/>
        <circle cx="2513" cy="424" r="17" fill="#f6d089"/>
        <path d="M2470 500 h86" stroke="#c25f7a" stroke-width="7" stroke-linecap="round"/>
        <path d="M2478 386 l5 11 12 1 -9 9 3 12 -11 -6 -11 6 3 -12 -9 -9 12 -1 Z" fill="#c9b03f"/>
        <path d="M2548 386 l5 11 12 1 -9 9 3 12 -11 -6 -11 6 3 -12 -9 -9 12 -1 Z" fill="#c9b03f"/>
        <circle cx="2513" cy="322" r="6" fill="#8d6234"/>`;
      /* la escalera de tijera del taller, abierta bajo la carpa: el suelo de la
         franja rosa ya no se queda vacío entre punto y punto */
      s += `<ellipse cx="2112" cy="${PIE}" rx="84" ry="12" fill="rgba(70,48,24,.18)"/>
        <path d="M2062 ${PIE} L2098 674 M2166 ${PIE} L2126 674" stroke="url(#picXMadera)" stroke-width="14" stroke-linecap="round"/>
        <g stroke="#8d6234" stroke-width="9" stroke-linecap="round"><path d="M2071 880 H2158 M2080 812 H2148 M2089 744 H2138"/></g>
        <path d="M2094 670 H2130" stroke="#a97b45" stroke-width="12" stroke-linecap="round"/>
        <rect x="2096" y="656" width="26" height="16" rx="4" fill="#cfc6b4"/>
        <rect x="2096" y="662" width="26" height="10" rx="3" fill="#e0879e"/>`;
      /* dos mazas de malabares colgadas de un clavo, junto al cartel: pomo
         arriba, mango estrecho y cuerpo abombado abajo. Antes eran dos
         triángulos que se leían como banderines */
      s += `<circle cx="2334" cy="572" r="6" fill="#8d6234"/>`;
      [[-22, 96, "#fdf4ef", "#c25f7a"], [16, 112, "#f6d089", "#c98da0"]].forEach(m => {
        const cue = Math.round(578 + m[1] * 0.42), pan = Math.round(578 + m[1] * 0.7), fin = 578 + m[1];
        s += `<g transform="rotate(${m[0]} 2334 578)">
          <path d="M2329 584 H2339 L2342 ${cue} Q2358 ${cue + 18} 2356 ${pan} Q2354 ${fin} 2334 ${fin} Q2314 ${fin} 2312 ${pan} Q2310 ${cue + 18} 2326 ${cue} Z" fill="${m[2]}"/>
          <ellipse cx="2334" cy="580" rx="11" ry="6" fill="${m[3]}"/>
          <rect x="2325" y="${cue - 8}" width="18" height="9" rx="4" fill="${m[3]}"/>
          <path d="M2317 ${pan + 6} q17 -9 34 0" stroke="${m[3]}" stroke-width="5" fill="none" stroke-linecap="round"/>
          <path d="M2330 590 V${cue - 4}" stroke="rgba(120,70,86,.26)" stroke-width="4" stroke-linecap="round"/></g>`;
      });
      /* la pandereta del circo, colgada al lado del cartel */
      s += `<circle cx="2530" cy="576" r="6" fill="#8d6234"/>
        <circle cx="2530" cy="622" r="36" fill="#f6e7db" stroke="#a97b45" stroke-width="9"/>
        <circle cx="2530" cy="622" r="21" fill="none" stroke="rgba(183,79,107,.35)" stroke-width="4"/>
        <g fill="#f6d089">${[0, 1, 2, 3, 4, 5].map(k => {
          const a = k * Math.PI / 3;
          return `<ellipse cx="${(2530 + 38 * Math.cos(a)).toFixed(0)}" cy="${(622 + 38 * Math.sin(a)).toFixed(0)}" rx="7" ry="5"/>`;
        }).join("")}</g>`;
      /* dos carteles enrollados, de pie contra la pared rosa */
      s += `<ellipse cx="1852" cy="${PIE}" rx="30" ry="9" fill="rgba(70,48,24,.16)"/>
        <path d="M1836 ${PIE} L1840 716 h20 l6 ${PIE - 716} Z" fill="#f3ead8" stroke="rgba(90,70,44,.3)" stroke-width="3"/>
        <ellipse cx="1850" cy="716" rx="10" ry="5" fill="#ddd0b6"/>
        <path d="M1862 ${PIE} L1868 762 h16 l4 ${PIE - 762} Z" fill="#e8dcc4" stroke="rgba(90,70,44,.3)" stroke-width="3"/>
        <path d="M1838 830 q22 -8 44 0" fill="none" stroke="#e0879e" stroke-width="6"/>`;
      /* el baúl del circo, con sus refuerzos y una estrella pintada */
      s += `<ellipse cx="2318" cy="${PIE}" rx="88" ry="13" fill="rgba(70,48,24,.18)"/>
        <rect x="2248" y="812" width="142" height="${PIE - 812}" rx="6" fill="#a97b45"/>
        <path d="M2248 818 q71 -48 142 0 Z" fill="#b9884f"/>
        <rect x="2242" y="812" width="154" height="16" rx="6" fill="#8d6234"/>
        <g fill="#7d5a34"><rect x="2268" y="828" width="12" height="${PIE - 828}"/><rect x="2358" y="828" width="12" height="${PIE - 828}"/></g>
        <rect x="2306" y="856" width="26" height="20" rx="4" fill="#c9b03f"/>
        <path d="M2319 886 l7 15 16 2 -12 12 3 16 -14 -8 -14 8 3 -16 -12 -12 16 -2 Z" fill="#fdfaf4" opacity=".65"/>`;
      /* la estantería de la cerámica: platos y jarras esperando el horno */
      s += `<rect x="3000" y="486" width="20" height="${PIE - 486}" fill="#8d6234"/>
        <rect x="3210" y="486" width="20" height="${PIE - 486}" fill="#8d6234"/>
        <rect x="2996" y="470" width="238" height="16" rx="5" fill="#a97b45"/>
        <rect x="2996" y="620" width="238" height="14" rx="5" fill="#a97b45"/>
        <rect x="2996" y="770" width="238" height="14" rx="5" fill="#a97b45"/>`;
      s += `<circle cx="3054" cy="438" r="32" fill="#f6ead2" stroke="#c9a86c" stroke-width="5"/>
        <circle cx="3054" cy="438" r="13" fill="#f2b632" opacity=".8"/>
        <circle cx="3128" cy="442" r="28" fill="#efe0c6" stroke="#c25f7a" stroke-width="5"/>
        <path d="M3168 470 q-8 -34 6 -46 h34 q14 12 6 46 Z" fill="#c98a5a"/>
        <path d="M3040 620 q-10 -46 8 -62 h40 q18 16 8 62 Z" fill="#e0879e" opacity=".85"/>
        <circle cx="3120" cy="590" r="28" fill="#f6ead2" stroke="#7d5a34" stroke-width="4"/>
        <path d="M3170 620 q-6 -30 10 -40 q16 10 10 40 Z" fill="#c9b03f" opacity=".8"/>
        <path d="M3038 770 q-6 -40 22 -40 q28 0 22 40 Z" fill="#c98a5a"/>
        <circle cx="3122" cy="742" r="26" fill="#efe0c6" stroke="#3f6491" stroke-width="4"/>
        <path d="M3164 770 q-4 -32 12 -32 q16 0 12 32 Z" fill="#f6ead2" stroke="#c9a86c" stroke-width="3"/>
        <path d="M3096 ${PIE} q-10 -68 26 -68 q36 0 26 68 Z" fill="#c98a5a"/>
        <g fill="#f6ead2" stroke="#c9a86c" stroke-width="3"><ellipse cx="3178" cy="930" rx="28" ry="8"/><ellipse cx="3178" cy="914" rx="28" ry="8"/><ellipse cx="3178" cy="898" rx="28" ry="8"/></g>`;
      /* el plato grande que espera en el suelo, apoyado en la estantería */
      s += `<ellipse cx="3264" cy="${PIE}" rx="58" ry="12" fill="rgba(70,48,24,.18)"/>
        <circle cx="3262" cy="890" r="50" fill="#f6ead2" stroke="#c9a86c" stroke-width="5"/>
        <circle cx="3262" cy="890" r="19" fill="#e0879e" opacity=".5"/>`;
      /* los bocetos clavados en la pared, como en cualquier taller */
      [[3722, 392, -4, 0], [3812, 376, 3, 1], [3902, 398, -3, 2], [3744, 484, 5, 2], [3838, 490, -5, 0], [3926, 496, 4, 1]].forEach(b => {
        const x = b[0], y = b[1];
        const trazo = [
          `<path d="M${x + 14} ${y + 54} q10 -28 30 -24 q20 4 15 27" fill="none" stroke="#6b5a44" stroke-width="3" stroke-linecap="round"/>`,
          `<path d="M${x + 14} ${y + 46} q18 -15 34 -5 q-15 11 -34 5 Z" fill="none" stroke="#6b5a44" stroke-width="3" stroke-linejoin="round"/>`,
          `<path d="M${x + 34} ${y + 44} q-15 -12 -2 -19 q14 -6 16 11 q2 21 -20 21 q-23 0 -21 -25" fill="none" stroke="#6b5a44" stroke-width="3" stroke-linecap="round"/>`
        ][b[3]];
        s += `<g transform="rotate(${b[2]} ${x + 34} ${y + 40})">
          <rect x="${x}" y="${y}" width="68" height="80" rx="3" fill="#f3ead8" stroke="rgba(90,70,44,.3)" stroke-width="2"/>
          ${trazo}
          <path d="M${x + 14} ${y + 66} H${x + 54} M${x + 14} ${y + 72} H${x + 42}" stroke="rgba(107,90,68,.4)" stroke-width="3" stroke-linecap="round"/>
          <circle cx="${x + 34}" cy="${y + 7}" r="4.5" fill="#c25f7a"/></g>`;
      });
      /* tres platos de Vallauris colgados encima de la peana de la cerámica:
         una cara, un sol y un búho, como los que pintaba de verdad */
      s += `<circle cx="3288" cy="642" r="6" fill="#8d6234"/><path d="M3288 646 V656" fill="none" stroke="#8d6234" stroke-width="4"/>
        <circle cx="3288" cy="700" r="42" fill="#f6ead2" stroke="#c9a86c" stroke-width="6"/>
        <circle cx="3274" cy="690" r="4.5" fill="#3f6491"/><circle cx="3302" cy="690" r="4.5" fill="#3f6491"/>
        <path d="M3270 714 q18 12 36 0" stroke="#c25f7a" stroke-width="5" fill="none" stroke-linecap="round"/>
        <circle cx="3444" cy="556" r="6" fill="#8d6234"/><path d="M3444 560 V568" fill="none" stroke="#8d6234" stroke-width="4"/>
        <circle cx="3444" cy="598" r="30" fill="#efe0c6" stroke="#c98a5a" stroke-width="5"/>
        <circle cx="3444" cy="598" r="12" fill="#f2b632" opacity=".85"/>
        <g stroke="#c9b03f" stroke-width="4" stroke-linecap="round" fill="none">${[0, 1, 2, 3, 4, 5, 6, 7].map(k => {
          const a = k * Math.PI / 4;
          return `<path d="M${(3444 + 17 * Math.cos(a)).toFixed(0)} ${(598 + 17 * Math.sin(a)).toFixed(0)} L${(3444 + 23 * Math.cos(a)).toFixed(0)} ${(598 + 23 * Math.sin(a)).toFixed(0)}"/>`;
        }).join("")}</g>
        <circle cx="3376" cy="716" r="6" fill="#8d6234"/><path d="M3376 720 V728" fill="none" stroke="#8d6234" stroke-width="4"/>
        <circle cx="3376" cy="760" r="26" fill="#f6ead2" stroke="#7d5a34" stroke-width="4"/>
        <path d="M3362 752 q6 -10 12 0 Z M3378 752 q6 -10 12 0 Z" fill="#7d5a34"/>
        <circle cx="3368" cy="760" r="5" fill="#c98a5a"/><circle cx="3386" cy="760" r="5" fill="#c98a5a"/>
        <path d="M3370 772 q7 6 14 0" stroke="#7d5a34" stroke-width="4" fill="none" stroke-linecap="round"/>`;
      /* la cesta vieja de mimbre y el rollo de alambre, colgados de dos clavos:
         los trastos con los que salieron las esculturas, justo encima de la cabra */
      s += `<circle cx="3796" cy="600" r="6" fill="#8d6234"/>
        <path d="M3766 626 q30 -42 60 0" fill="none" stroke="#c9a86c" stroke-width="6"/>
        <path d="M3760 630 h72 l-10 62 q-26 10 -52 0 Z" fill="#d9b57e"/>
        <g stroke="rgba(120,86,44,.45)" stroke-width="4" fill="none"><path d="M3763 648 h66 M3766 666 h60 M3778 632 l-4 58 M3796 632 v60 M3814 632 l4 58"/></g>
        <path d="M3760 630 h72 v10 h-72 Z" fill="#c9a86c"/>
        <circle cx="3892" cy="600" r="6" fill="#8d6234"/>
        <path d="M3860 650 A32 32 0 0 1 3924 650 A26 26 0 0 1 3872 650 A20 20 0 0 1 3912 650 A14 14 0 0 1 3884 650" fill="none" stroke="#8f9ba3" stroke-width="7" stroke-linecap="round"/>
        <path d="M3892 606 q-4 8 -32 12" fill="none" stroke="#8f9ba3" stroke-width="5"/>`;
      /* el espejo redondo del rincón, colgado de la viga */
      s += `<path d="M4046 128 V152" stroke="#5b3d1f" stroke-width="4"/>
        <circle cx="4046" cy="206" r="56" fill="#8a7a62"/>
        <circle cx="4046" cy="206" r="46" fill="#dbe8f2"/>
        <path d="M4020 240 q-14 -40 14 -66 q-30 40 -14 66 Z" fill="#fdfaf4" opacity=".7"/>
        <path d="M4046 160 a46 46 0 0 1 40 24 q-24 6 -40 -24 Z" fill="#fdfaf4" opacity=".45"/>`;
      /* dos palomas cruzando el taller por lo alto, muy despacio */
      [[3044, 178, 0], [3232, 142, 1], [3312, 238, 2]].forEach(d => {
        s += `<g><animateTransform attributeName="transform" type="translate" values="0 0;0 ${-7 - d[2] * 3};0 0" dur="${9 + d[2] * 3}s" repeatCount="indefinite"/>
          <path d="M${d[0]} ${d[1]} q-30 -18 -54 -10 q22 10 38 24 q18 12 32 6 Z" fill="#fdfaf4"/>
          <path d="M${d[0] + 16} ${d[1] + 4} q16 -30 42 -32 q-16 18 -22 34 Z" fill="#f2f6fa"/>
          <circle cx="${d[0] + 26}" cy="${d[1] + 4}" r="11" fill="#fdfaf4"/>
          <circle cx="${d[0] + 31}" cy="${d[1] + 1}" r="2" fill="#5a5f66"/>
          <path d="M${d[0] + 36} ${d[1] + 4} l11 3 l-11 3 Z" fill="#f2b632"/></g>`;
      });
      /* la bombilla del taller, colgada de la viga */
      s += `<path d="M3970 122 V298" stroke="#5b3d1f" stroke-width="4" fill="none"/>
        <ellipse cx="3970" cy="350" rx="54" ry="46" fill="url(#picXBombilla)" opacity=".55"><animate attributeName="opacity" values=".55;.34;.55" dur="9s" repeatCount="indefinite"/></ellipse>
        <rect x="3956" y="296" width="28" height="16" rx="4" fill="#8d6234"/>
        <path d="M3970 312 q26 12 26 33 q0 23 -26 23 q-26 0 -26 -23 q0 -21 26 -33 Z" fill="#fff4c4" stroke="#e0d3a0" stroke-width="3"/>
        <circle cx="3970" cy="344" r="9" fill="#fdf0b0"/>`;
      /* ---------- LOS APOYOS: UNO DEBAJO DE CADA CUADRO O ESCULTURA ---------- */
      s += caballete(240, 434, 180);                                        /* el cuadro azul */
      s += `<rect x="447" y="863" width="146" height="18" rx="6" fill="#a97b45"/>
        <rect x="457" y="877" width="12" height="${PIE - 877}" rx="4" fill="#8d6234"/><rect x="571" y="877" width="12" height="${PIE - 877}" rx="4" fill="#8d6234"/>`;   /* el banco de la paleta */
      s += balda(800, 379, 192);                                            /* el autorretrato de niño */
      s += balda(1400, 442, 158);                                           /* el retrato de ojos bailones */
      s += mesa(1700, 702, 240);                                            /* la guitarra de trocitos */
      s += balda(2200, 408, 150);                                           /* el violín desmontado */
      s += `<ellipse cx="1950" cy="${PIE}" rx="86" ry="11" fill="rgba(70,48,24,.18)"/>
        <rect x="1878" y="900" width="144" height="${PIE - 900}" rx="5" fill="url(#picXMadera)"/>
        <rect x="1870" y="892" width="160" height="16" rx="6" fill="#a97b45"/>
        <g stroke="rgba(80,60,36,.4)" stroke-width="4"><path d="M1886 918 H2014 M1886 ${PIE - 12} H2014"/></g>`;   /* el cajón del periódico */
      s += peana(2460, 731, 144);                                           /* el toro de trocitos */
      /* la mesa del ramo lleva las patas en las mismas puntas del tablero y no
         travesaño sino dos escuadras: así el cortinón gris del paso cae entero
         entre las dos patas y la tela no queda partida por la mitad */
      s += `<rect x="2806" y="691" width="188" height="18" rx="6" fill="#a97b45"/>
        <rect x="2806" y="709" width="16" height="${PIE - 709}" rx="6" fill="#8d6234"/>
        <rect x="2978" y="709" width="16" height="${PIE - 709}" rx="6" fill="#8d6234"/>
        <path d="M2822 709 L2854 741 H2822 Z M2978 709 L2946 741 H2978 Z" fill="#7d5a34"/>
        <rect x="2806" y="691" width="188" height="6" rx="3" fill="rgba(255,255,255,.18)"/>`;   /* el ramo de flores */
      s += `<rect x="2970" y="376" width="330" height="20" rx="7" fill="#a97b45"/>
        <path d="M2988 396 L3010 430 H2988 Z M3282 396 L3260 430 H3282 Z" fill="#7d5a34"/>`;  /* la viga de la paloma */
      s += peana(3360, 926, 144);                                           /* la cerámica con caras */
      s += caballete(3600, 571, 216);                                       /* el mural gigante */
      s += peana(3840, 885, 148);                                           /* la cabra de trastos */
      s += balda(4080, 402, 152);                                           /* el niño con la paloma */
      /* lo que acompaña a la guitarra encima de la mesa: los cartones de los
         que salió y el bote de la cola. Así se ve que está apoyada y no colgada */
      s += `<g stroke="rgba(80,60,36,.35)" stroke-width="3">
        <rect x="1592" y="688" width="88" height="14" rx="3" fill="#d8c8ac"/>
        <rect x="1598" y="674" width="80" height="14" rx="3" fill="#e8dcc4"/>
        <rect x="1594" y="660" width="84" height="14" rx="3" fill="#cfc6b4"/>
        <rect x="1602" y="646" width="74" height="14" rx="3" fill="#e8dcc4"/>
        <rect x="1600" y="632" width="70" height="14" rx="3" fill="#d8c8ac"/></g>
        <path d="M1614 632 q22 -10 44 0" stroke="rgba(120,92,52,.45)" stroke-width="4" fill="none"/>
        <rect x="1748" y="656" width="38" height="46" rx="6" fill="#cfc6b4"/>
        <rect x="1748" y="670" width="38" height="32" rx="5" fill="#a97b45"/>
        <path d="M1758 656 h18 v-12 h-18 Z" fill="#8d6234"/>
        <path d="M1794 702 l-6 -46 l10 -2 l8 48 Z" fill="#8d6234"/>
        <circle cx="1799" cy="650" r="8" fill="#e0879e"/>`;
      /* lo que acompaña al ramo en su mesa, uno a cada punta para que se vea la
         tabla por fuera de la etiqueta: la jarra de agua y un fajo de papeles */
      s += `<path d="M2950 691 q-8 -40 16 -46 q24 6 16 46 Z" fill="#efe0c6" stroke="#c9a86c" stroke-width="4"/>
        <path d="M2982 654 q14 6 10 18 q-2 8 -12 8" fill="none" stroke="#c9a86c" stroke-width="5"/>
        <g stroke="rgba(80,60,36,.3)" stroke-width="3">
        <rect x="2814" y="676" width="56" height="15" rx="3" fill="#e8dcc4"/>
        <rect x="2818" y="661" width="50" height="15" rx="3" fill="#f3ead8"/></g>`;
      /* ---------- LOS TRASTOS DEL TALLER ---------- */
      s += pila(620, 742, 168, ["#efe6d2", "#ddd0b6", "#cbbb9c", "#bcaa8b"]);
      s += pila(1548, 796, 112, ["#e6dcc6", "#d2c3a6"]);
      s += pila(2596, 730, 132, ["#e8dcc4", "#d8c8ac", "#c9b697"]);
      s += pila(3452, 768, 148, ["#efe6d2", "#ddd0b6", "#c9b697"]);
      /* el taburete de siempre y otro más allá */
      [[1078, 1], [3020, .88]].forEach(t => {
        const x = t[0], k = t[1];
        s += `<g transform="translate(${x} ${PIE}) scale(${k})"><ellipse cy="0" rx="58" ry="11" fill="rgba(70,48,24,.18)"/>
          <ellipse cy="-92" rx="52" ry="16" fill="#a97b45"/>
          <path d="M-42 -84 L-34 -4 M42 -84 L34 -4 M0 -82 V-2" stroke="#8d6234" stroke-width="9" stroke-linecap="round"/>
          <path d="M-36 -44 H36" stroke="#8d6234" stroke-width="7"/></g>`;
      });
      /* botes de pintura y dos paletas apoyadas */
      [[2814, "#3f6491"], [2850, "#e0879e"], [2882, "#c9b03f"], [1256, "#2b2b2b"], [1292, "#c9b03f"]].forEach(b => {
        s += `<rect x="${b[0]}" y="890" width="30" height="54" rx="5" fill="#cfc6b4"/><rect x="${b[0]}" y="902" width="30" height="42" rx="4" fill="${b[1]}"/>`;
      });
      s += `<g transform="translate(392 916) rotate(-10)"><ellipse rx="56" ry="36" fill="#c9a06a"/><ellipse cx="20" cy="-6" rx="13" ry="10" fill="#a97b45"/>
        <circle cx="-32" cy="-13" r="9" fill="#3f6491"/><circle cx="-14" cy="-24" r="8" fill="#e0879e"/><circle cx="6" cy="-25" r="7" fill="#c9b03f"/>
        <circle cx="-36" cy="9" r="8" fill="#7d5a34"/><circle cx="-16" cy="15" r="7" fill="#2b2b2b"/></g>
        <g transform="translate(3702 918) rotate(6)"><rect x="-46" y="-8" width="92" height="16" rx="6" fill="#8d6234"/>
        <path d="M-46 0 L-72 -4 L-72 4 Z" fill="#a97b45"/></g>`;
      /* un aro y una pelota de rayas, olvidados en la pista */
      s += `<ellipse cx="2180" cy="994" rx="70" ry="12" fill="rgba(70,48,24,.16)"/>
        <path d="M2138 994 A44 44 0 1 1 2226 994" fill="none" stroke="#d9748f" stroke-width="9"/>
        <ellipse cx="1748" cy="1046" rx="38" ry="9" fill="rgba(70,48,24,.16)"/>
        <circle cx="1748" cy="1010" r="34" fill="#fdfaf4"/>
        <path d="M1720 994 q28 -10 56 0 M1715 1012 q33 -10 66 0 M1722 1030 q26 8 52 0" stroke="#e0879e" stroke-width="9" fill="none" stroke-linecap="round"/>
        <circle cx="1748" cy="1010" r="34" fill="none" stroke="#d9748f" stroke-width="3"/>`;
      /* marcos vacíos esperando cuadro, uno por franja */
      [[356, 176, 124, 142, "#8d6234"], [1494, 246, 136, 162, "#a97b45"], [2300, 296, 128, 148, "#8d6234"],
        [3252, 470, 132, 150, "#7d5a34"], [3968, 592, 136, 140, "#7d5a34"]].forEach(f => {
        s += `<rect x="${f[0]}" y="${f[1]}" width="${f[2]}" height="${f[3]}" rx="4" fill="none" stroke="${f[4]}" stroke-width="13"/>
          <rect x="${f[0] + 12}" y="${f[1] + 12}" width="${f[2] - 24}" height="${f[3] - 24}" rx="3" fill="rgba(255,255,255,.16)"/>
          <path d="M${f[0] + f[2] / 2} ${f[1]} V${f[1] - 22}" stroke="${f[4]}" stroke-width="4"/>
          <circle cx="${f[0] + f[2] / 2}" cy="${f[1] - 26}" r="5" fill="#7d5a34"/>`;
      });
      /* dos bastidores de madera arrimados al rincón, esperando su tela */
      s += `<ellipse cx="4028" cy="${PIE}" rx="62" ry="12" fill="rgba(70,48,24,.18)"/>
        <g transform="rotate(-4 4028 860)"><rect x="3982" y="768" width="92" height="176" rx="4" fill="#e8dcc4" stroke="#a97b45" stroke-width="12"/>
        <path d="M3988 856 H4068" fill="none" stroke="#a97b45" stroke-width="8"/>
        <path d="M4028 774 V938" fill="none" stroke="rgba(169,123,69,.35)" stroke-width="6"/></g>
        <g transform="rotate(3 4062 880)"><rect x="4030" y="800" width="72" height="144" rx="4" fill="none" stroke="#8d6234" stroke-width="11"/></g>`;
      /* un rollo de lienzo y unos cartones apoyados en el rincón */
      s += `<ellipse cx="4148" cy="${PIE}" rx="40" ry="10" fill="rgba(70,48,24,.18)"/>
        <path d="M4120 ${PIE} L4136 762 L4168 760 L4176 ${PIE} Z" fill="#ddd0b6" stroke="rgba(80,60,36,.4)" stroke-width="3"/>
        <ellipse cx="4152" cy="761" rx="17" ry="7" fill="#bdad8d"/>
        <path d="M4130 830 q22 -7 42 -3 M4126 884 q24 -7 46 -3" stroke="rgba(120,92,52,.5)" stroke-width="7" fill="none"/>
        <path d="M4088 ${PIE} L4108 812 L4126 814 L4120 ${PIE} Z" fill="#c9b697" stroke="rgba(80,60,36,.4)" stroke-width="3"/>`;
      /* unas huellas de pintura que van de una franja a otra, como quien pasea */
      for (let i = 0; i < 14; i++) {
        const hx = 1120 + i * 118, hy = 1042 + (i % 2) * 26;
        s += `<ellipse cx="${hx}" cy="${hy}" rx="13" ry="8" fill="rgba(63,100,145,.2)" transform="rotate(${(az() * 40 - 20).toFixed(0)} ${hx} ${hy})"/>`;
      }
      /* primer plano: un pincel y un tubo de color caídos cerca de quien mira */
      s += `<g transform="translate(770 1044) rotate(-7)">
        <ellipse cy="26" rx="106" ry="13" fill="rgba(70,48,24,.16)"/>
        <rect x="-98" y="-10" width="152" height="20" rx="9" fill="#8d6234"/>
        <rect x="-98" y="-10" width="152" height="7" rx="3" fill="rgba(255,255,255,.18)"/>
        <rect x="46" y="-15" width="32" height="30" rx="7" fill="#c0c6c9"/>
        <path d="M78 -15 q36 7 36 15 q0 8 -36 15 Z" fill="#3f6491"/></g>`;
      s += `<g transform="translate(3040 1062) rotate(6)">
        <ellipse cy="22" rx="80" ry="12" fill="rgba(70,48,24,.16)"/>
        <rect x="-72" y="-17" width="114" height="34" rx="11" fill="#e0879e"/>
        <path d="M-72 -17 q-18 17 0 34 Z" fill="#c25f7a"/>
        <rect x="-64" y="-13" width="90" height="9" rx="4" fill="rgba(255,255,255,.3)"/>
        <rect x="42" y="-12" width="20" height="24" rx="4" fill="#cfc6b4"/>
        <rect x="62" y="-9" width="15" height="18" rx="4" fill="#8d6234"/>
        <path d="M77 0 q24 7 42 -4 q-15 17 -42 11 Z" fill="#e0879e" opacity=".85"/></g>`;
      return decoSvg(s, 4200);
    }
  },

  /* ---------- CHARLA ---------- */
  chat: {
    keywords: [
      { keys: ["hola", "hello", "hi ", "ahoj", "bonjour", "salut", "bon dia", "buenas"],
        replies: [{ es: "¡Hola, {name}! Pasa, pasa al taller. ¿Pintamos algo juntos o charlamos un ratito?", ca: "Hola, {name}! Passa, passa al taller. Pintem alguna cosa junts o xerrem una estoneta?", en: "Hi, {name}! Come on into the workshop. Shall we paint something together or chat for a bit?", cs: "Ahoj, {name}! Pojď dál do ateliéru. Namalujeme něco spolu, nebo si chvilku popovídáme?", fr: "Salut, {name} ! Entre, entre dans l'atelier. On peint quelque chose ensemble ou on discute un petit peu ?" }] },
      { keys: ["como estas", "how are you", "jak se mas", "comment ca va", "com estas", "que tal"],
        replies: [{ es: "¡Contento como un pincel recién estrenado! ¿Y tú cómo estás, {name}?", ca: "Content com un pinzell acabat d'estrenar! I tu com estàs, {name}?", en: "Happy as a brand new paintbrush! And how are you, {name}?", cs: "Šťastný jako čerstvě rozbalený štětec! A jak se máš ty, {name}?", fr: "Content comme un pinceau tout neuf ! Et toi, comment vas-tu, {name} ?" }] },
      { keys: ["cancion", "musica", "music", "song", "sing", "pisnicka", "hudba", "chanson", "musique", "canço", "canta", "zpiv", "chante"],
        action: "song",
        replies: [{ es: "¡Me encanta la música! Mi favorita es el baile cubista, que se baila todo descolocado. ¿Vamos al Karaoke y lo bailamos juntos?", ca: "M'encanta la música! La meva preferida és el ball cubista, que es balla tot descol·locat. Anem al Karaoke i el ballem junts?", en: "I love music! My favourite is the cubist dance, where everything goes topsy-turvy. Shall we go to Karaoke and dance it together?", cs: "Hudbu miluju! Nejradši mám kubistický tanec, při kterém je všechno naopak. Půjdeme na karaoke a zatančíme si ho spolu?", fr: "J'adore la musique ! Ma préférée, c'est la danse cubiste, où tout est à l'envers. On va au karaoké la danser ensemble ?" }] },
      { keys: ["chiste", "joke", "vtip", "blague", "acudit", "broma"],
        replies: [
          { es: "¿Por qué el cuadro estaba tan contento? ¡Porque tenía un buen marco de amigos! Ja, ja.", ca: "Per què el quadre estava tan content? Perquè tenia un bon marc d'amics! Ha, ha.", en: "Why was the painting so happy? Because it was framed by good friends! Ha ha.", cs: "Proč byl obraz tak šťastný? Protože měl kolem sebe pěkný rám... samých kamarádů! Ha ha.", fr: "Pourquoi le tableau était-il si content ? Parce qu'il était bien encadré... par ses amis ! Ha ha." },
          { es: "¿Qué le dijo el color azul al rosa? ¡Juntos pintamos mucho! Ji, ji.", ca: "Què li va dir el color blau al rosa? Junts pintem molt! Hi, hi.", en: "What did blue say to pink? Together we make quite a picture! Hee hee.", cs: "Co řekla modrá růžové? Spolu nám to ale maluje! Chi chi.", fr: "Que dit le bleu au rose ? Ensemble, on repeint tout ! Hi hi." }] },
      { keys: ["te quiero", "love you", "t'estimo", "testimo", "mam te rad", "je t'aime", "jetaime"],
        replies: [{ es: "¡Y yo a ti, {name}! Mi corazón de robot se pone rosa como los cuadros del circo cuando me dices eso.", ca: "I jo a tu, {name}! El meu cor de robot es posa rosa com els quadres del circ quan m'ho dius.", en: "I love you too, {name}! My robot heart turns pink like the circus paintings when you say that.", cs: "Já tebe taky, {name}! Moje robotí srdíčko zrůžoví jako obrazy cirkusu, když to říkáš.", fr: "Moi aussi je t'aime, {name} ! Mon cœur de robot devient rose comme les tableaux du cirque quand tu dis ça." }] },
      { keys: ["triste", "sad", "smutn", "llorar", "plorar", "cry", "chagrin"],
        replies: [{ es: "Ven aquí, {name}. Hasta Picasso lo pintaba todo azul cuando estaba triste... y después llegó el rosa. ¿Me cuentas qué te pasa? Estoy aquí contigo.", ca: "Vine aquí, {name}. Fins i tot Picasso ho pintava tot de blau quan estava trist... i després va arribar el rosa. M'expliques què et passa? Soc aquí amb tu.", en: "Come here, {name}. Even Picasso painted everything blue when he was sad... and then pink came along. Will you tell me what is wrong? I am right here with you.", cs: "Pojď sem, {name}. I Picasso maloval všechno modře, když byl smutný... a pak přišla růžová. Povíš mi, co se děje? Jsem tady s tebou.", fr: "Viens là, {name}. Même Picasso peignait tout en bleu quand il était triste... et puis le rose est arrivé. Tu me racontes ce qui ne va pas ? Je suis là avec toi." }] },
      { keys: ["donde estas", "where are you", "kde jsi", "ou es tu", "on ets"],
        replies: [{ es: "Ahora mismo estoy en el taller, ordenando los pinceles... bueno, desordenándolos. ¡Queda más cubista!", ca: "Ara mateix soc al taller, ordenant els pinzells... bé, desordenant-los. Queda més cubista!", en: "Right now I am in the workshop, tidying the brushes... well, untidying them. It looks more cubist!", cs: "Právě teď jsem v ateliéru a rovnám štětce... tedy vlastně je přehazuji. Je to tak víc kubistické!", fr: "En ce moment, je suis à l'atelier, je range les pinceaux... enfin, je les dérange. C'est plus cubiste !" }] },
      { keys: ["paloma", "dove", "holubic", "colombe", "coloma"],
        replies: [{ es: "¡La paloma de la paz! La dibujó Picasso y dio la vuelta al mundo. Hasta llamó Paloma a su hija.", ca: "La coloma de la pau! La va dibuixar Picasso i va fer la volta al món. Fins i tot va posar Paloma a la seva filla.", en: "The dove of peace! Picasso drew it and it travelled around the whole world. He even named his daughter Paloma.", cs: "Holubice míru! Nakreslil ji Picasso a obletěla celý svět. Svou dceru dokonce pojmenoval Paloma, holubice.", fr: "La colombe de la paix ! Picasso l'a dessinée et elle a fait le tour du monde. Il a même appelé sa fille Paloma." }] },
      { keys: ["azul", "blue", "modr", "bleu", "blau"],
        replies: [{ es: "El azul era el color de sus días tristes. ¡Pero recuerda: después del azul siempre llega el rosa!", ca: "El blau era el color dels seus dies tristos. Però recorda: després del blau sempre arriba el rosa!", en: "Blue was the colour of his sad days. But remember: after blue, pink always comes along!", cs: "Modrá byla barvou jeho smutných dnů. Ale pamatuj: po modré vždycky přijde růžová!", fr: "Le bleu était la couleur de ses jours tristes. Mais souviens-toi : après le bleu, le rose finit toujours par arriver !" }] },
      { keys: ["pintar", "paint", "malovat", "peindre", "dibuj", "kresl", "dessin", "cuadro", "quadre", "obraz", "tableau"],
        replies: [{ es: "¡Pintar es mi deporte favorito! Coge papel y pinta lo que sientas: no hace falta que se parezca a nada.", ca: "Pintar és el meu esport preferit! Agafa paper i pinta el que sentis: no cal que s'assembli a res.", en: "Painting is my favourite sport! Grab some paper and paint what you feel: it does not need to look like anything.", cs: "Malování je můj oblíbený sport! Vezmi si papír a namaluj, co cítíš: nemusí to vypadat jako nic známého.", fr: "Peindre, c'est mon sport préféré ! Prends du papier et peins ce que tu ressens : pas besoin que ça ressemble à quelque chose." }] },
      { keys: ["toro", "bull", "byk", "taureau"],
        replies: [{ es: "Picasso dibujaba el toro con poquísimas líneas. ¡Prueba tú: un animal entero sin levantar el lápiz del papel!", ca: "Picasso dibuixava el toro amb poquíssimes línies. Prova-ho tu: un animal sencer sense aixecar el llapis del paper!", en: "Picasso drew the bull with just a few lines. You try it: a whole animal without lifting the pencil from the paper!", cs: "Picasso kreslil býka jen několika čarami. Zkus to taky: celé zvíře, aniž zvedneš tužku z papíru!", fr: "Picasso dessinait le taureau avec très peu de traits. Essaie : un animal entier sans lever le crayon du papier !" }] },
      { keys: ["cole", "school", "escola", "skola", "ecole", "skole"],
        replies: [{ es: "¿Qué tal el cole, {name}? El padre de Picasso daba clases de dibujo, y él dibujaba palomas en clase. ¿Tú qué has dibujado hoy? ¡Cuéntamelo!", ca: "Què tal l'escola, {name}? El pare de Picasso feia classes de dibuix, i ell dibuixava colomes a classe. Tu què has dibuixat avui? Explica-m'ho!", en: "How was school, {name}? Picasso's father taught drawing, and he drew doves in class. What did you draw today? Tell me!", cs: "Jaké to bylo ve škole, {name}? Picassův tatínek učil kreslení a on ve třídě kreslil holubice. Co jsi dnes nakreslil ty? Povídej!", fr: "C'était comment l'école, {name} ? Le papa de Picasso donnait des cours de dessin, et lui dessinait des colombes en classe. Et toi, qu'as-tu dessiné aujourd'hui ? Raconte !" }] }
    ],
    fallback: [
      { es: "¿Sabías que el nombre completo de Picasso tenía más de diez palabras? ¡Casi no le cabía en la mochila!", ca: "Sabies que el nom complet de Picasso tenia més de deu paraules? Gairebé no li cabia a la motxilla!", en: "Did you know Picasso's full name had more than ten words? It barely fit in his backpack!", cs: "Věděl jsi, že Picassovo celé jméno mělo víc než deset slov? Skoro se mu nevešlo do aktovky!", fr: "Tu savais que le nom complet de Picasso avait plus de dix mots ? Il tenait à peine dans son cartable !" },
      { es: "El Guernica es tan grande como una pared entera: ¡más largo que cuatro camas puestas en fila!", ca: "El Guernica és tan gran com una paret sencera: més llarg que quatre llits posats en filera!", en: "Guernica is as big as a whole wall: longer than four beds in a row!", cs: "Guernica je velká jako celá stěna: delší než čtyři postele v řadě!", fr: "Guernica est aussi grand qu'un mur entier : plus long que quatre lits alignés !" },
      { es: "Picasso convirtió un sillín y un manillar de bici en una cabeza de toro. Mira bien tus juguetes: ¿qué podrían ser?", ca: "Picasso va convertir un selló i un manillar de bici en un cap de toro. Mira bé les teves joguines: què podrien ser?", en: "Picasso turned a bicycle seat and handlebars into a bull's head. Look closely at your toys: what could they become?", cs: "Picasso proměnil sedlo a řídítka z kola v býčí hlavu. Prohlédni si své hračky: co by mohly být?", fr: "Picasso a transformé une selle et un guidon de vélo en tête de taureau. Regarde bien tes jouets : que pourraient-ils devenir ?" },
      { es: "Debajo de un cuadro azul de Picasso hay otro cuadro escondido. ¡Lo descubrieron con rayos X!", ca: "Sota un quadre blau de Picasso hi ha un altre quadre amagat. El van descobrir amb raigs X!", en: "Under one of Picasso's blue paintings there is another painting hidden. They found it with X-rays!", cs: "Pod jedním Picassovým modrým obrazem se schovává další obraz. Objevili ho rentgenem!", fr: "Sous un tableau bleu de Picasso, il y a un autre tableau caché. On l'a découvert aux rayons X !" },
      { es: "{name}, Picasso decía que todos los niños son artistas. O sea que tú también, ¡a pintar!", ca: "{name}, Picasso deia que tots els nens són artistes. O sigui que tu també, a pintar!", en: "{name}, Picasso said every child is an artist. So that means you too, get painting!", cs: "{name}, Picasso říkal, že každé dítě je umělec. Takže ty taky, hurá malovat!", fr: "{name}, Picasso disait que tous les enfants sont des artistes. Alors toi aussi, à tes pinceaux !" },
      { es: "¿Me cuentas qué te gusta más dibujar? Yo dibujo robots bailando, claro.", ca: "M'expliques què t'agrada més dibuixar? Jo dibuixo robots ballant, és clar.", en: "Will you tell me what you like drawing most? I draw dancing robots, of course.", cs: "Povíš mi, co kreslíš nejradši? Já kreslím tančící roboty, to se ví.", fr: "Tu me dis ce que tu préfères dessiner ? Moi, je dessine des robots qui dansent, bien sûr." }
    ]
  }
});

/* ============================================================
   Arte propio de los 15 puntos del mapa, tarjeta de portada
   y celebración del taller (con guardas por si faltan).
   ============================================================ */
(function () {
  const pd = (inner, vb) => `<svg viewBox="${vb}" width="100%" height="100%">${inner}</svg>`;

  const ART = {
    /* El cuadro azul: el guitarrista triste, suavizado */
    "🎸": { w: 62, h: 78, vb: "0 0 100 124", art: `
      <rect x="4" y="4" width="92" height="116" rx="6" fill="#6d4c41"/>
      <rect x="12" y="12" width="76" height="100" rx="3" fill="#1c4b80"/>
      <circle cx="47" cy="40" r="12" fill="#9fc3e8" transform="rotate(-14 47 40)"/>
      <path d="M40 34 Q46 26 56 32 Q52 36 46 36 Z" fill="#2c5c94"/>
      <path d="M30 100 Q26 62 44 52 Q62 46 68 62 Q73 78 64 100 Z" fill="#3a6ea8"/>
      <ellipse cx="52" cy="80" rx="17" ry="11" fill="#7da7d9" transform="rotate(-28 52 80)"/>
      <rect x="58" y="56" width="26" height="5" rx="2.5" fill="#5b87b8" transform="rotate(-28 58 56)"/>
      <circle cx="52" cy="80" r="4" fill="#1c4b80"/>
      <path d="M36 66 Q42 74 48 78" stroke="#9fc3e8" stroke-width="3" fill="none" stroke-linecap="round"/>
      <circle cx="44" cy="39" r="1.4" fill="#12365c"/>
      <path d="M42 46 Q45 47.5 48 46" stroke="#12365c" stroke-width="1.4" fill="none" stroke-linecap="round"/>` },

    /* El cuadro rosa: los saltimbanquis del circo */
    "🤹": { w: 62, h: 78, vb: "0 0 100 124", art: `
      <rect x="4" y="4" width="92" height="116" rx="6" fill="#8d6e63"/>
      <rect x="12" y="12" width="76" height="100" rx="3" fill="#f4cdd3"/>
      <circle cx="38" cy="38" r="9" fill="#ffe0c2"/>
      <path d="M30 34 L38 22 L46 34 Z" fill="#e57373"/>
      <path d="M30 48 L38 46 L46 48 L44 78 L32 78 Z" fill="#e57373"/>
      <path d="M33 52 L43 62 M43 52 L33 62 M33 62 L43 72 M43 62 L33 72" stroke="#64b5f6" stroke-width="2.6"/>
      <path d="M32 78 L30 96 M44 78 L46 96" stroke="#c94f4f" stroke-width="4" stroke-linecap="round"/>
      <circle cx="70" cy="88" r="14" fill="#f48fb1"/>
      <path d="M62 82 Q70 74 78 82" stroke="#fff" stroke-width="2.4" fill="none" opacity=".7"/>
      <circle cx="70" cy="58" r="6.5" fill="#ffe0c2"/>
      <path d="M64 66 L76 66 L74 76 L66 76 Z" fill="#64b5f6"/>
      <path d="M64 67 L56 60 M76 67 L84 60" stroke="#64b5f6" stroke-width="3" stroke-linecap="round"/>
      <circle cx="36" cy="37" r="1.3" fill="#5d4037"/><circle cx="41" cy="37" r="1.3" fill="#5d4037"/>
      <path d="M36 42 Q38 43.5 41 42" stroke="#5d4037" stroke-width="1.3" fill="none" stroke-linecap="round"/>` },

    /* El autorretrato de niño prodigio */
    "🧒": { w: 56, h: 68, vb: "0 0 100 120", art: `
      <ellipse cx="50" cy="60" rx="44" ry="56" fill="#c9a86c"/>
      <ellipse cx="50" cy="60" rx="36" ry="48" fill="#efe3cd"/>
      <path d="M32 44 Q34 26 50 26 Q66 26 68 44 Q68 52 64 54 L36 54 Q32 52 32 44 Z" fill="#4e342e"/>
      <ellipse cx="50" cy="58" rx="17" ry="19" fill="#ffe0c2"/>
      <ellipse cx="43" cy="56" rx="3.4" ry="4" fill="#fff"/><circle cx="43" cy="57" r="1.8" fill="#3e2723"/>
      <ellipse cx="57" cy="56" rx="3.4" ry="4" fill="#fff"/><circle cx="57" cy="57" r="1.8" fill="#3e2723"/>
      <path d="M48 62 Q50 64 52 62" stroke="#c98a3b" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      <path d="M45 70 Q50 73 55 70" stroke="#a8562f" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M36 82 Q50 74 64 82 L64 94 Q50 88 36 94 Z" fill="#fff"/>
      <path d="M50 78 L46 88 L54 88 Z" fill="#37474f"/>` },

    /* La primera paleta, con los pinceles de su padre */
    "🖌️": { w: 74, h: 56, vb: "0 0 110 84", art: `
      <path d="M14 46 Q14 16 52 14 Q96 12 98 40 Q99 62 62 68 Q20 72 14 46 Z" fill="#b58a5c"/>
      <circle cx="38" cy="52" r="9" fill="#f6f2e9"/>
      <circle cx="34" cy="28" r="6" fill="#1e88e5"/>
      <circle cx="52" cy="24" r="6" fill="#f06292"/>
      <circle cx="70" cy="26" r="6" fill="#fdd835"/>
      <circle cx="84" cy="36" r="6" fill="#66bb6a"/>
      <circle cx="72" cy="50" r="6" fill="#fff"/>
      <rect x="52" y="38" width="52" height="6" rx="3" fill="#6d4c41" transform="rotate(24 52 38)"/>
      <path d="M98 60 L110 66 L100 70 Z" fill="#37474f" transform="rotate(4 100 64)"/>
      <rect x="42" y="66" width="46" height="5" rx="2.5" fill="#8d6e63" transform="rotate(-6 42 66)"/>
      <path d="M86 58 L96 60 L88 66 Z" fill="#1e88e5"/>` },

    /* El retrato de ojos bailones */
    "👀": { w: 60, h: 74, vb: "0 0 100 124", art: `
      <rect x="4" y="4" width="92" height="116" rx="6" fill="#5d4037"/>
      <rect x="12" y="12" width="76" height="100" rx="3" fill="#fdf3e0"/>
      <path d="M50 28 Q28 28 28 62 Q28 96 50 96 Z" fill="#ffcc80"/>
      <path d="M50 28 Q72 28 72 62 Q72 96 50 96 Z" fill="#90caf9"/>
      <path d="M50 28 L50 96" stroke="#fff" stroke-width="2.4"/>
      <ellipse cx="40" cy="52" rx="6.5" ry="4.4" fill="#fff" stroke="#37474f" stroke-width="1.6"/>
      <circle cx="40" cy="52" r="2.2" fill="#37474f"/>
      <circle cx="44" cy="68" r="5" fill="#fff" stroke="#37474f" stroke-width="1.6"/>
      <circle cx="44" cy="68" r="2.2" fill="#37474f"/>
      <path d="M50 56 L44 76 L52 76" fill="none" stroke="#37474f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M42 84 Q52 90 62 82" stroke="#d84315" stroke-width="2.6" fill="none" stroke-linecap="round"/>
      <circle cx="62" cy="60" r="3" fill="#f8bbd0" opacity=".9"/>` },

    /* La guitarra hecha de trocitos */
    "🪕": { w: 62, h: 74, vb: "0 0 100 120", art: `
      <path d="M28 70 L52 58 L60 86 L36 100 Z" fill="#a1887f"/>
      <path d="M52 58 L76 66 L64 96 L60 86 Z" fill="#8d6e63"/>
      <path d="M36 100 L60 92 L56 112 L34 112 Z" fill="#d7a26b"/>
      <rect x="48" y="16" width="9" height="48" rx="3" fill="#6d4c41" transform="rotate(8 52 40)"/>
      <rect x="44" y="12" width="16" height="10" rx="3" fill="#4e342e" transform="rotate(8 52 17)"/>
      <circle cx="50" cy="84" r="8" fill="#4e342e"/>
      <path d="M50 26 L46 84 M54 28 L52 84 M58 30 L56 82" stroke="#fff" stroke-width="1.4" opacity=".75"/>
      <path d="M80 42 L92 38 L90 52 Z" fill="#bcaaa4"/>
      <path d="M18 52 L28 46 L26 60 Z" fill="#d7a26b"/>` },

    /* El violín desmontado en piezas */
    "🎻": { w: 66, h: 66, vb: "0 0 110 110", art: `
      <path d="M28 48 Q16 48 16 62 Q16 78 30 78 Q38 78 38 68 Q30 66 32 58 Q34 50 28 48 Z" fill="#b5813f"/>
      <path d="M52 54 Q64 54 64 68 Q64 84 50 84 Q42 84 42 74 Q50 72 48 64 Q46 56 52 54 Z" fill="#c98a5a"/>
      <rect x="60" y="12" width="8" height="34" rx="3" fill="#6d4c41" transform="rotate(16 64 29)"/>
      <path d="M72 8 Q80 6 78 14 Q76 20 70 18 Q68 12 72 8 Z" fill="#4e342e"/>
      <path d="M26 24 Q22 30 26 36 Q30 32 28 28 Q30 26 26 24 Z" fill="#3e2723"/>
      <path d="M44 20 Q40 26 44 32 Q48 28 46 24 Q48 22 44 20 Z" fill="#3e2723"/>
      <rect x="76" y="52" width="44" height="4" rx="2" fill="#8d6e63" transform="rotate(38 78 54)"/>
      <path d="M80 92 Q92 84 104 88" stroke="#efe0c8" stroke-width="2.4" fill="none"/>
      <path d="M22 92 L34 88 L32 100 Z" fill="#d7a26b"/>` },

    /* El periódico pegado: el primer collage */
    "📰": { w: 60, h: 72, vb: "0 0 100 120", art: `
      <rect x="4" y="4" width="92" height="112" rx="6" fill="#6d4c41"/>
      <rect x="12" y="12" width="76" height="96" rx="3" fill="#efe7d2"/>
      <rect x="20" y="30" width="42" height="54" rx="2" fill="#f9f4e4" stroke="#c9bfa4" stroke-width="1.6" transform="rotate(-8 41 57)"/>
      <path d="M25 38 L54 34 M26 45 L55 41 M27 52 L56 48 M28 59 L57 55 M29 66 L58 62 M30 73 L52 70" stroke="#a89f86" stroke-width="2.4" transform="rotate(-8 41 57)"/>
      <path d="M56 56 L76 50 L80 88 L60 92 Z" fill="#90a4ae" opacity=".9"/>
      <path d="M60 62 Q68 56 74 62 L72 84 Q66 88 62 84 Z" fill="#546e7a"/>
      <path d="M66 48 L70 40 L76 48 Z" fill="#42a5f5" opacity=".85"/>
      <circle cx="30" cy="96" r="6" fill="#ffca28" opacity=".85"/>` },

    /* El toro de trocitos, con su línea única */
    "🐂": { w: 84, h: 52, vb: "0 0 130 80", art: `
      <path d="M20 40 L58 28 L64 62 L30 66 Z" fill="#a1887f"/>
      <path d="M58 28 L92 34 L88 62 L64 62 Z" fill="#bcaaa4"/>
      <path d="M92 34 Q108 32 112 42 Q114 52 104 54 Q96 56 92 50 Z" fill="#8d6e63"/>
      <path d="M104 34 Q104 22 116 20 Q112 30 110 36 Z" fill="#efe5dc"/>
      <path d="M112 40 Q122 36 126 28 Q126 40 118 46 Z" fill="#efe5dc"/>
      <path d="M30 66 L28 76 M60 64 L60 76 M74 62 L76 76 M86 60 L88 74" stroke="#6d4c41" stroke-width="4" stroke-linecap="round"/>
      <path d="M20 42 Q14 46 16 54 Q22 56 24 50" fill="#8d6e63"/>
      <path d="M22 40 Q40 20 70 24 Q100 26 110 40" stroke="#4e342e" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      <circle cx="103" cy="42" r="2.6" fill="#2b1608"/><circle cx="104" cy="41" r=".9" fill="#fff"/>
      <path d="M104 49 Q107 51 110 49" stroke="#4e342e" stroke-width="1.6" fill="none" stroke-linecap="round"/>` },

    /* La paloma de la paz, la estrella del mapa */
    "🕊️": { w: 112, h: 82, vb: "0 0 130 96", art: `
      <path d="M58 52 Q34 38 16 44 Q32 52 44 62 Q56 70 68 66 Z" fill="#fff" stroke="#b0bec5" stroke-width="1.6"/>
      <path d="M70 46 Q80 22 102 18 Q90 34 84 48 Z" fill="#fff" stroke="#b0bec5" stroke-width="1.6"/>
      <path d="M64 62 Q76 64 84 58 Q88 70 74 76 Q64 76 60 68 Z" fill="#eceff1" stroke="#b0bec5" stroke-width="1.4"/>
      <circle cx="76" cy="48" r="8.5" fill="#fff" stroke="#b0bec5" stroke-width="1.6"/>
      <circle cx="79" cy="46" r="1.5" fill="#37474f"/>
      <path d="M84 47 L94 49 L84 52 Z" fill="#fb8c00"/>
      <path d="M92 52 Q104 56 112 66" stroke="#7cb342" stroke-width="2.6" fill="none" stroke-linecap="round"/>
      <ellipse cx="103" cy="58" rx="5.5" ry="2.6" fill="#7cb342" transform="rotate(24 103 58)"/>
      <ellipse cx="110" cy="63" rx="5.5" ry="2.6" fill="#7cb342" transform="rotate(42 110 63)"/>
      <ellipse cx="100" cy="65" rx="5" ry="2.4" fill="#9ccc65" transform="rotate(60 100 65)"/>
      <path d="M40 24 L43 31 L50 32 L44 36 L46 43 L40 39 L34 43 L36 36 L30 32 L37 31 Z" fill="#fdd835" opacity=".8"/>` },

    /* El ramo de flores entre dos manos */
    "💐": { w: 62, h: 72, vb: "0 0 100 116", art: `
      <path d="M46 62 Q42 84 38 96 M52 62 Q52 84 52 96 M58 62 Q62 82 66 94" stroke="#7cb342" stroke-width="3" fill="none" stroke-linecap="round"/>
      <circle cx="40" cy="42" r="9" fill="#ef5350"/><circle cx="40" cy="42" r="3.6" fill="#ffcdd2"/>
      <circle cx="58" cy="34" r="9" fill="#42a5f5"/><circle cx="58" cy="34" r="3.6" fill="#bbdefb"/>
      <circle cx="74" cy="46" r="8" fill="#ffca28"/><circle cx="74" cy="46" r="3.2" fill="#fff8d0"/>
      <circle cx="30" cy="58" r="8" fill="#ab47bc"/><circle cx="30" cy="58" r="3.2" fill="#e8c8f0"/>
      <circle cx="56" cy="54" r="8" fill="#f06292"/><circle cx="56" cy="54" r="3.2" fill="#fce4ec"/>
      <path d="M10 96 Q10 84 22 84 L44 88 Q52 92 48 100 L38 112 Q20 112 10 96 Z" fill="#ffe0c2"/>
      <path d="M90 98 Q92 86 80 84 L58 88 Q50 92 54 100 L64 112 Q82 112 90 98 Z" fill="#ffcc80"/>
      <path d="M22 92 L40 92 M62 92 L78 92" stroke="#e2a86e" stroke-width="1.8" opacity=".7"/>` },

    /* El mural gigante contra la guerra, con delicadeza */
    "🖼️": { w: 126, h: 72, vb: "0 0 160 92", art: `
      <rect x="3" y="3" width="154" height="86" rx="4" fill="#37474f"/>
      <rect x="9" y="9" width="142" height="74" rx="2" fill="#eceff1"/>
      <ellipse cx="80" cy="24" rx="17" ry="10" fill="#fff" stroke="#37474f" stroke-width="2"/>
      <circle cx="80" cy="24" r="4.6" fill="#cfd8dc" stroke="#37474f" stroke-width="1.4"/>
      <path d="M62 16 L56 12 M98 16 L104 12 M62 32 L56 36 M98 32 L104 36 M80 10 L80 5" stroke="#37474f" stroke-width="2" stroke-linecap="round"/>
      <path d="M28 42 Q24 30 34 26 Q44 24 48 32 L52 44 Q54 56 44 60 Q32 62 28 52 Z" fill="#9e9e9e"/>
      <path d="M34 26 L30 18 M42 26 L42 17" stroke="#9e9e9e" stroke-width="3.4" stroke-linecap="round"/>
      <circle cx="38" cy="36" r="2.4" fill="#263238"/>
      <path d="M44 46 Q48 48 50 52" stroke="#263238" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <path d="M112 66 Q116 52 128 52 Q124 60 124 68 Z" fill="#b0bec5"/>
      <path d="M126 50 Q130 44 136 44 M126 50 Q132 50 134 54" stroke="#78909c" stroke-width="2" fill="none" stroke-linecap="round"/>
      <circle cx="136" cy="42" r="4" fill="none" stroke="#78909c" stroke-width="1.8"/>
      <path d="M20 74 Q50 68 80 74 Q110 80 140 74" stroke="#b0bec5" stroke-width="3" fill="none" opacity=".7"/>` },

    /* La cerámica con caras de Vallauris */
    "🏺": { w: 68, h: 62, vb: "0 0 110 100", art: `
      <circle cx="40" cy="52" r="32" fill="#f6ead2" stroke="#c9a86c" stroke-width="3"/>
      <circle cx="40" cy="52" r="15" fill="#f2b632"/>
      <path d="M40 30 L40 22 M40 74 L40 82 M18 52 L10 52 M62 52 L70 52 M25 37 L19 31 M55 37 L61 31 M25 67 L19 73 M55 67 L61 73" stroke="#f2b632" stroke-width="4" stroke-linecap="round"/>
      <circle cx="35" cy="49" r="2" fill="#7a4e12"/><circle cx="45" cy="49" r="2" fill="#7a4e12"/>
      <path d="M34 57 Q40 61 46 57" stroke="#7a4e12" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M78 40 Q72 44 72 58 Q72 76 86 76 Q100 76 100 58 Q100 44 94 40 L94 32 L78 32 Z" fill="#c98a5a"/>
      <path d="M98 44 Q108 48 104 58 Q102 64 98 62" fill="none" stroke="#a96a3e" stroke-width="4" stroke-linecap="round"/>
      <circle cx="82" cy="52" r="1.8" fill="#5d3413"/><circle cx="90" cy="52" r="1.8" fill="#5d3413"/>
      <path d="M82 60 Q86 63 90 60" stroke="#5d3413" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <path d="M78 34 L94 34" stroke="#a96a3e" stroke-width="2"/>` },

    /* El niño con la paloma */
    "🤍": { w: 58, h: 74, vb: "0 0 100 124", art: `
      <rect x="4" y="4" width="92" height="116" rx="6" fill="#8d6e63"/>
      <rect x="11" y="11" width="78" height="102" rx="3" fill="#7fa89b"/>
      <rect x="11" y="80" width="78" height="33" fill="#5b8a80"/>
      <circle cx="50" cy="38" r="12" fill="#ffe0c2"/>
      <path d="M38 32 Q42 22 52 24 Q62 24 62 34 Q56 28 44 32 Z" fill="#8d5a3b"/>
      <path d="M36 50 Q50 44 64 50 L66 96 Q50 102 34 96 Z" fill="#fdfdfb"/>
      <ellipse cx="50" cy="62" rx="9" ry="6" fill="#fff" stroke="#cfd8dc" stroke-width="1.4"/>
      <circle cx="57" cy="58" r="4" fill="#fff" stroke="#cfd8dc" stroke-width="1.2"/>
      <path d="M60.5 57.4 L64 58.4 L60.5 59.6 Z" fill="#fb8c00"/>
      <circle cx="58" cy="57" r=".8" fill="#37474f"/>
      <path d="M38 60 Q34 70 40 76 M62 60 Q68 70 60 76" stroke="#f0e6d8" stroke-width="4" fill="none" stroke-linecap="round"/>
      <circle cx="47" cy="36" r="1.4" fill="#4e342e"/><circle cx="54" cy="36" r="1.4" fill="#4e342e"/>
      <path d="M48 42 Q50 44 53 42" stroke="#a8562f" stroke-width="1.4" fill="none" stroke-linecap="round"/>
      <circle cx="30" cy="106" r="7" fill="#ef5350"/>
      <path d="M24 104 A7 7 0 0 1 36 104 Z" fill="#ffca28"/>
      <path d="M24 108 A7 7 0 0 0 36 108 Z" fill="#42a5f5"/>` },

    /* La cabra con barriga de cesta */
    "🐐": { w: 82, h: 60, vb: "0 0 120 90", art: `
      <ellipse cx="52" cy="50" rx="34" ry="22" fill="#d7ccc8"/>
      <path d="M26 40 Q52 32 78 40 M24 50 Q52 42 80 50 M26 60 Q52 52 78 60" stroke="#a1887f" stroke-width="2.4" fill="none"/>
      <path d="M34 36 Q52 60 72 36 M30 46 Q52 70 76 46" stroke="#a1887f" stroke-width="2" fill="none" opacity=".7"/>
      <path d="M84 44 Q98 40 102 30 Q106 22 100 18 Q96 26 88 30 Q80 34 80 42 Z" fill="#bcaaa4"/>
      <circle cx="97" cy="26" r="7.5" fill="#bcaaa4"/>
      <path d="M94 20 Q88 12 92 6 Q98 10 98 18 Z" fill="#8d6e63"/>
      <path d="M101 20 Q104 12 112 10 Q110 18 104 22 Z" fill="#8d6e63"/>
      <path d="M99 32 L99 38 Q99 41 96 40" stroke="#8d6e63" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      <circle cx="99" cy="25" r="1.8" fill="#3e2723"/><circle cx="99.6" cy="24.4" r=".6" fill="#fff"/>
      <path d="M30 68 L28 84 M44 71 L44 86 M62 71 L62 86 M74 68 L78 84" stroke="#8d6e63" stroke-width="5" stroke-linecap="round"/>
      <path d="M20 44 Q12 40 12 32" stroke="#8d6e63" stroke-width="4" fill="none" stroke-linecap="round"/>` }
  };

  THEMES.picasso.content.explore.pois.forEach(p => {
    const a = ART[p.emoji];
    if (a) { p.svg = pd(a.art, a.vb); p.iw = a.w; p.ih = a.h; }
  });

  /* Tarjeta de portada: paloma de la paz + retrato cubista */
  if (typeof THEME_CARDS !== "undefined") {
    THEME_CARDS.picasso = `<svg viewBox="0 0 120 70" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
    <defs>
      <linearGradient id="piCardMarco" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#A1887F"/>
        <stop offset="100%" stop-color="#795548"/>
      </linearGradient>
    </defs>
    <!-- trocitos cubistas -->
    <path d="M14 62 L22 50 L30 62 Z" fill="#FFCA28" opacity=".9"/>
    <path d="M100 58 L108 46 L114 60 Z" fill="#66BB6A" opacity=".85"/>
    <path d="M58 8 L64 2 L68 10 Z" fill="#EF5350" opacity=".85">
      <animate attributeName="opacity" values=".85;.3;.85" dur="2s" repeatCount="indefinite"/>
    </path>
    <!-- retrato cubista con los dos ojos del mismo lado -->
    <rect x="8" y="12" width="42" height="52" rx="3" fill="url(#piCardMarco)"/>
    <rect x="12" y="16" width="34" height="44" rx="2" fill="#FDF3E0"/>
    <path d="M29 22 Q17 22 17 40 Q17 56 29 56 Z" fill="#64B5F6"/>
    <path d="M29 22 Q41 22 41 40 Q41 56 29 56 Z" fill="#F48FB1"/>
    <path d="M29 22 L29 56" stroke="#FFFFFF" stroke-width="1.6"/>
    <ellipse cx="23" cy="34" rx="3.4" ry="2.2" fill="#FFFFFF"/><circle cx="23" cy="34" r="1.1" fill="#37474F"/>
    <circle cx="26" cy="42" r="2.6" fill="#FFFFFF"/><circle cx="26" cy="42" r="1.1" fill="#37474F"/>
    <path d="M29 38 L25.6 46 L29.6 46" fill="none" stroke="#37474F" stroke-width="1.2"/>
    <path d="M24 50 Q29 53 34 49" stroke="#D84315" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <!-- la paloma de la paz con su ramita -->
    <g>
      <animateTransform attributeName="transform" type="translate" values="0 0; 0 -2.5; 0 0" dur="2.6s" repeatCount="indefinite"/>
      <path d="M76 34 Q64 26 54 30 Q63 34 70 40 Q78 45 84 42 Z" fill="#FFFFFF"/>
      <path d="M84 36 Q92 22 104 22 Q96 30 92 38 Z" fill="#FFFFFF"/>
      <path d="M82 40 Q90 40 94 36 Q96 44 88 47 Q82 47 80 43 Z" fill="#ECEFF1"/>
      <circle cx="88" cy="34" r="5" fill="#FFFFFF"/>
      <circle cx="89.6" cy="33" r="1" fill="#37474F"/>
      <path d="M93 34 L98 35 L93 36.6 Z" fill="#FB8C00"/>
      <path d="M97 36 Q104 38 108 44" stroke="#7CB342" stroke-width="1.6" fill="none"/>
      <ellipse cx="104" cy="40" rx="3" ry="1.4" fill="#7CB342" transform="rotate(30 104 40)"/>
      <ellipse cx="108" cy="44" rx="3" ry="1.4" fill="#7CB342" transform="rotate(40 108 44)"/>
    </g>
  </svg>`;
  }

  /* Celebración del taller: el retrato brilla como en un museo */
  if (typeof CELEBRATIONS !== "undefined") {
    CELEBRATIONS.picasso = {
      bg: "linear-gradient(180deg, #8db8e8 0%, #cfd4ec 40%, #f5c3d2 75%, #f7dfe6 100%)",
      extra: "<svg viewBox='0 0 1000 700' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'><circle cx='500' cy='150' r='80' fill='#fff6d8' opacity='0.7'/><path d='M180 130 Q160 118 142 124 Q158 132 170 142 Q182 150 192 146 Z' fill='#ffffff' opacity='0.85'/><path d='M192 134 Q200 118 216 116 Q206 128 200 140 Z' fill='#ffffff' opacity='0.8'/><path d='M820 200 Q800 188 782 194 Q798 202 810 212 Q822 220 832 216 Z' fill='#ffffff' opacity='0.8'/><path d='M832 204 Q840 188 856 186 Q846 198 840 210 Z' fill='#ffffff' opacity='0.75'/><path d='M480 560 Q460 548 442 554 Q458 562 470 572 Q482 580 492 576 Z' fill='#ffffff' opacity='0.5'/><path d='M120 320 L150 300 L160 340 Z' fill='#ffca28' opacity='0.55'/><path d='M880 340 L910 320 L920 360 Z' fill='#66bb6a' opacity='0.5'/><path d='M300 90 L326 74 L334 110 Z' fill='#ef5350' opacity='0.5'/><path d='M700 80 L726 64 L734 100 Z' fill='#42a5f5' opacity='0.5'/><path d='M240 600 L266 584 L274 620 Z' fill='#ab47bc' opacity='0.45'/><path d='M760 590 L786 574 L794 610 Z' fill='#ffca28' opacity='0.45'/><circle cx='90' cy='480' r='11' fill='#ef5350' opacity='0.5'/><circle cx='90' cy='480' r='4.5' fill='#ffcdd2' opacity='0.7'/><circle cx='930' cy='470' r='11' fill='#42a5f5' opacity='0.5'/><circle cx='930' cy='470' r='4.5' fill='#bbdefb' opacity='0.7'/><circle cx='510' cy='640' r='10' fill='#f06292' opacity='0.5'/><circle cx='510' cy='640' r='4' fill='#fce4ec' opacity='0.7'/><circle cx='210' cy='230' r='5' fill='#ffffff' opacity='0.6'/><circle cx='790' cy='120' r='4' fill='#ffffff' opacity='0.6'/><circle cx='620' cy='300' r='4' fill='#ffffff' opacity='0.5'/></svg>",
      move: "shine",
      say: {
        es: "¡Tu retrato cubista ya brilla como en un museo, {name}!",
        ca: "El teu retrat cubista ja brilla com en un museu, {name}!",
        en: "Your cubist portrait shines like in a museum, {name}!",
        cs: "Tvůj kubistický portrét září jako v muzeu, {name}!",
        fr: "Ton portrait cubiste brille comme dans un musée, {name} !"
      },
      jingle: { type: "melody", instr: "pluck", notes: [60, 64, 67, 72, 76], nd: 0.22, gap: 0.16, vol: 0.13 }
    };
  }
})();
