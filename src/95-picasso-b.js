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
    width: 2600, height: 1100, stars: false,
    bgCss: "linear-gradient(180deg,#e9f0f8 0%,#f7e8ee 55%,#f6f2e9 100%)",
    cats: [
      { id: "periodos", emoji: "🎨", x: 120, name: { es: "Los colores de su vida", ca: "Els colors de la seva vida", en: "The colours of his life", cs: "Barvy jeho života", fr: "Les couleurs de sa vie" } },
      { id: "cubismo", emoji: "🔷", x: 1000, name: { es: "El cubismo", ca: "El cubisme", en: "Cubism", cs: "Kubismus", fr: "Le cubisme" } },
      { id: "paz", emoji: "🕊️", x: 1900, name: { es: "La paz", ca: "La pau", en: "Peace", cs: "Mír", fr: "La paix" } }
    ],
    pois: [
      { cat: "periodos", emoji: "🎸", x: 190, y: 420,
        name: { es: "El cuadro azul", ca: "El quadre blau", en: "The blue painting", cs: "Modrý obraz", fr: "Le tableau bleu" },
        fact: { es: "Cuando estaba triste lo pintaba todo azul. Este guitarrista azul es uno de sus cuadros más famosos.", ca: "Quan estava trist ho pintava tot de blau. Aquest guitarrista blau és un dels seus quadres més famosos.", en: "When he was sad he painted everything blue. This blue guitarist is one of his most famous paintings.", cs: "Když byl smutný, maloval všechno modře. Tenhle modrý kytarista je jeden z jeho nejslavnějších obrazů.", fr: "Quand il était triste, il peignait tout en bleu. Ce guitariste bleu est l'un de ses tableaux les plus célèbres." } },
      { cat: "periodos", emoji: "🤹", x: 430, y: 650,
        name: { es: "El cuadro rosa", ca: "El quadre rosa", en: "The rose painting", cs: "Růžový obraz", fr: "Le tableau rose" },
        fact: { es: "En el período rosa pintó a los saltimbanquis: la familia de acróbatas del circo.", ca: "Al període rosa va pintar els saltimbanquis: la família d'acròbates del circ.", en: "In his rose period he painted the saltimbanques: the circus family of acrobats.", cs: "V růžovém období maloval kejklíře: cirkusovou rodinu akrobatů.", fr: "Pendant sa période rose, il a peint les saltimbanques : la famille d'acrobates du cirque." } },
      { cat: "periodos", emoji: "🧒", x: 630, y: 370,
        name: { es: "El autorretrato de niño", ca: "L'autoretrat de nen", en: "The self-portrait as a boy", cs: "Autoportrét z dětství", fr: "L'autoportrait enfant" },
        fact: { es: "Picasso fue un niño prodigio: de pequeño ya dibujaba mejor que muchos mayores.", ca: "Picasso va ser un nen prodigi: de petit ja dibuixava millor que molts adults.", en: "Picasso was a child prodigy: as a little boy he already drew better than many grown-ups.", cs: "Picasso byl zázračné dítě: už jako malý kreslil líp než mnozí dospělí.", fr: "Picasso était un enfant prodige : tout petit, il dessinait déjà mieux que bien des adultes." } },
      { cat: "periodos", emoji: "🖌️", x: 340, y: 870,
        name: { es: "La primera paleta", ca: "La primera paleta", en: "The first palette", cs: "První paleta", fr: "La première palette" },
        fact: { es: "Su padre era pintor y profesor de dibujo. Un día le dejó sus pinceles... ¡y ya no los soltó!", ca: "El seu pare era pintor i professor de dibuix. Un dia li va deixar els seus pinzells... i ja no els va deixar anar!", en: "His father was a painter and drawing teacher. One day he lent him his brushes... and he never let go of them!", cs: "Jeho tatínek byl malíř a učitel kreslení. Jednou mu půjčil své štětce... a on už je nepustil z ruky!", fr: "Son père était peintre et professeur de dessin. Un jour, il lui a laissé ses pinceaux... et il ne les a plus lâchés !" } },
      { cat: "cubismo", emoji: "👀", x: 900, y: 400,
        name: { es: "El retrato de ojos bailones", ca: "El retrat d'ulls balladors", en: "The dancing-eyes portrait", cs: "Portrét s tančícíma očima", fr: "Le portrait aux yeux danseurs" },
        fact: { es: "En sus retratos cubistas los dos ojos pueden ir en el mismo lado: así ves la cara de frente y de perfil a la vez.", ca: "Als seus retrats cubistes els dos ulls poden anar al mateix costat: així veus la cara de front i de perfil alhora.", en: "In his cubist portraits both eyes can sit on the same side: you see the face from the front and in profile at once.", cs: "Na jeho kubistických portrétech mohou být obě oči na stejné straně: vidíš tvář zepředu i z profilu najednou.", fr: "Dans ses portraits cubistes, les deux yeux peuvent être du même côté : on voit le visage de face et de profil à la fois." } },
      { cat: "cubismo", emoji: "🪕", x: 1130, y: 640,
        name: { es: "La guitarra de trocitos", ca: "La guitarra de trossets", en: "The guitar of little pieces", cs: "Kytara z kousíčků", fr: "La guitare en petits morceaux" },
        fact: { es: "Hizo guitarras de cartón, papel y chapa: cuadros que salen de la pared, como esculturas.", ca: "Va fer guitarres de cartró, paper i llauna: quadres que surten de la paret, com escultures.", en: "He made guitars out of cardboard, paper and sheet metal: paintings that pop out of the wall, like sculptures.", cs: "Vyráběl kytary z kartonu, papíru a plechu: obrazy, které vystupují ze zdi jako sochy.", fr: "Il a fait des guitares en carton, en papier et en tôle : des tableaux qui sortent du mur, comme des sculptures." } },
      { cat: "cubismo", emoji: "🎻", x: 1330, y: 360,
        name: { es: "El violín desmontado", ca: "El violí desmuntat", en: "The taken-apart violin", cs: "Rozložené housle", fr: "Le violon démonté" },
        fact: { es: "Pintó el violín desmontado en piezas, para verlo todo a la vez: por delante, de lado y por dentro.", ca: "Va pintar el violí desmuntat en peces, per veure'l tot alhora: per davant, de costat i per dins.", en: "He painted the violin taken apart in pieces, to see it all at once: from the front, from the side and from inside.", cs: "Namaloval housle rozložené na kousky, aby je viděl celé najednou: zepředu, z boku i zevnitř.", fr: "Il a peint le violon démonté en morceaux, pour tout voir à la fois : de face, de côté et de l'intérieur." } },
      { cat: "cubismo", emoji: "📰", x: 1180, y: 890,
        name: { es: "El periódico pegado", ca: "El diari enganxat", en: "The glued newspaper", cs: "Nalepené noviny", fr: "Le journal collé" },
        fact: { es: "Con Braque pegó trozos de periódico y de hule en los cuadros: inventaron el collage.", ca: "Amb en Braque va enganxar trossos de diari i d'hule als quadres: van inventar el collage.", en: "With Braque he glued pieces of newspaper and oilcloth onto paintings: they invented collage.", cs: "S Braquem lepili na obrazy kousky novin a voskovaného plátna: vymysleli koláž.", fr: "Avec Braque, il a collé des morceaux de journal et de toile cirée sur les tableaux : ils ont inventé le collage." } },
      { cat: "cubismo", emoji: "🐂", x: 1520, y: 700,
        name: { es: "El toro de trocitos", ca: "El toro de trossets", en: "The bull of little pieces", cs: "Býk z kousíčků", fr: "Le taureau en petits morceaux" },
        fact: { es: "Dibujó el mismo toro muchas veces, quitando líneas cada vez, hasta dejarlo casi en una sola.", ca: "Va dibuixar el mateix toro moltes vegades, traient línies cada cop, fins a deixar-lo gairebé en una de sola.", en: "He drew the same bull many times, removing lines each time, until almost only one was left.", cs: "Kreslil stejného býka mnohokrát a pokaždé ubral pár čar, až zbyla skoro jen jediná.", fr: "Il a dessiné le même taureau plein de fois, en enlevant des traits à chaque fois, jusqu'à n'en garder presque qu'un seul." } },
      { cat: "paz", emoji: "🕊️", x: 1950, y: 330, size: 2,
        name: { es: "La paloma de la paz", ca: "La coloma de la pau", en: "The dove of peace", cs: "Holubice míru", fr: "La colombe de la paix" },
        fact: { es: "Su paloma blanca se convirtió en el símbolo de la paz en todo el mundo. Su padre ya pintaba palomas.", ca: "La seva coloma blanca es va convertir en el símbol de la pau a tot el món. El seu pare ja pintava colomes.", en: "His white dove became the symbol of peace all over the world. His father already used to paint doves.", cs: "Jeho bílá holubice se stala symbolem míru na celém světě. Holuby maloval už jeho tatínek.", fr: "Sa colombe blanche est devenue le symbole de la paix dans le monde entier. Son père peignait déjà des colombes." } },
      { cat: "paz", emoji: "💐", x: 1780, y: 620,
        name: { es: "El ramo de flores", ca: "El ram de flors", en: "The bouquet of flowers", cs: "Kytice květin", fr: "Le bouquet de fleurs" },
        fact: { es: "Dos manos que se regalan un ramo de flores de colores: así pintó Picasso la amistad y la paz.", ca: "Dues mans que es regalen un ram de flors de colors: així va pintar Picasso l'amistat i la pau.", en: "Two hands giving each other a bunch of colourful flowers: that is how Picasso painted friendship and peace.", cs: "Dvě ruce, které si darují kytici barevných květin: tak Picasso namaloval přátelství a mír.", fr: "Deux mains qui s'offrent un bouquet de fleurs colorées : c'est ainsi que Picasso a peint l'amitié et la paix." } },
      { cat: "paz", emoji: "🖼️", x: 2200, y: 520, size: 2,
        name: { es: "El mural gigante", ca: "El mural gegant", en: "The giant mural", cs: "Obří obraz", fr: "La toile géante" },
        fact: { es: "El Guernica: un cuadro gigante en blanco y negro que pide que nunca haya guerras. Tiene una bombilla que parece un ojo y un caballo asombrado.", ca: "El Guernica: un quadre gegant en blanc i negre que demana que mai hi hagi guerres. Té una bombeta que sembla un ull i un cavall sorprès.", en: "Guernica: a giant black and white painting that asks for there to be no wars, ever. It has a light bulb that looks like an eye and an astonished horse.", cs: "Guernica: obří černobílý obraz, který prosí, aby nikdy nebyly války. Je na něm žárovka, která vypadá jako oko, a užaslý kůň.", fr: "Guernica : un tableau géant en noir et blanc qui demande qu'il n'y ait jamais de guerres. Il y a une ampoule qui ressemble à un œil et un cheval étonné." } },
      { cat: "paz", emoji: "🏺", x: 2080, y: 860,
        name: { es: "La cerámica con caras", ca: "La ceràmica amb cares", en: "The pottery with faces", cs: "Keramika s obličeji", fr: "La céramique à visages" },
        fact: { es: "En Vallauris pintaba platos y jarrones con caras, soles y búhos. ¡La vajilla más alegre del mundo!", ca: "A Vallauris pintava plats i gerros amb cares, sols i mussols. La vaixella més alegre del món!", en: "In Vallauris he painted plates and vases with faces, suns and owls. The happiest crockery in the world!", cs: "Ve Vallauris maloval talíře a vázy s obličeji, sluníčky a sovami. Nejveselejší nádobí na světě!", fr: "À Vallauris, il peignait des assiettes et des vases avec des visages, des soleils et des hiboux. La vaisselle la plus joyeuse du monde !" } },
      { cat: "paz", emoji: "🤍", x: 2420, y: 320,
        name: { es: "El niño con la paloma", ca: "El nen amb la coloma", en: "The child with the dove", cs: "Dítě s holubicí", fr: "L'enfant à la colombe" },
        fact: { es: "De joven pintó a un niño abrazando una paloma blanca con muchísimo cuidado.", ca: "De jove va pintar un nen abraçant una coloma blanca amb moltíssima cura.", en: "As a young man he painted a child hugging a white dove ever so gently.", cs: "Jako mladý namaloval dítě, které opatrně objímá bílou holubici.", fr: "Jeune, il a peint un enfant serrant tout doucement une colombe blanche." } },
      { cat: "paz", emoji: "🐐", x: 2380, y: 820,
        name: { es: "La cabra de trastos", ca: "La cabra de trastos", en: "The junk goat", cs: "Koza z krámů", fr: "La chèvre de bric-à-brac" },
        fact: { es: "Hizo una cabra de escultura con una cesta vieja de barriga. En su casa vivía una cabra de verdad: Esmeralda.", ca: "Va fer una cabra d'escultura amb una cistella vella de panxa. A casa seva hi vivia una cabra de debò: l'Esmeralda.", en: "He made a goat sculpture with an old basket for a belly. A real goat lived at his house: Esmeralda.", cs: "Vytvořil sochu kozy se starým košíkem místo břicha. U něj doma žila i skutečná koza: Esmeralda.", fr: "Il a fait une chèvre en sculpture avec un vieux panier comme ventre. Une vraie chèvre vivait chez lui : Esmeralda." } }
    ],
    /* Tres franjas de fondo: azul, rosa y blanca con trocitos cubistas */
    deco() {
      let s = "";
      // franja azul (los años azules), con luna y una guitarra dormida
      s += `<path d="M0 0 H900 L830 1100 H0 Z" fill="#3f6fae" opacity=".30"/>
            <circle cx="620" cy="150" r="58" fill="#cfe0f2" opacity=".55"/>
            <circle cx="600" cy="140" r="46" fill="#b7cfea" opacity=".4"/>
            <path d="M120 640 Q150 590 210 600 Q260 610 250 660 Q240 700 180 700 Q120 695 120 640 Z" fill="#2c507e" opacity=".35"/>
            <rect x="240" y="606" width="150" height="18" rx="9" fill="#2c507e" opacity=".35" transform="rotate(-8 240 606)"/>`;
      // franja rosa (el circo), con carpa y banderines
      s += `<path d="M900 0 H1790 L1850 1100 H830 Z" fill="#f2a7bb" opacity=".32"/>
            <path d="M1150 260 L1330 260 L1240 130 Z" fill="#e88aa5" opacity=".5"/>
            <path d="M1240 130 L1240 100 L1275 112 L1240 122 Z" fill="#d9748f" opacity=".6"/>
            <rect x="1150" y="260" width="180" height="26" rx="8" fill="#e88aa5" opacity=".4"/>
            <path d="M950 180 Q1100 240 1250 180 M1350 200 Q1480 260 1620 200" stroke="#e88aa5" stroke-width="5" fill="none" opacity=".45"/>
            <path d="M1000 196 l12 22 l14 -20 M1120 212 l12 22 l14 -20 M1420 226 l12 22 l14 -20 M1530 222 l12 22 l14 -20" fill="none" stroke="#d9748f" stroke-width="5" opacity=".45"/>`;
      // franja blanca con trocitos cubistas de colores
      s += `<path d="M1790 0 H2600 V1100 H1850 Z" fill="#f8f4ea" opacity=".5"/>
            <path d="M1900 150 L1960 110 L1980 180 Z" fill="#42a5f5" opacity=".5"/>
            <path d="M2260 120 L2330 140 L2300 210 L2240 190 Z" fill="#ffca28" opacity=".5"/>
            <path d="M2480 170 L2540 150 L2560 220 Z" fill="#ef5350" opacity=".45"/>
            <path d="M1840 460 L1900 440 L1920 510 L1860 520 Z" fill="#ab47bc" opacity=".4"/>
            <path d="M2500 480 L2560 450 L2580 530 Z" fill="#66bb6a" opacity=".45"/>
            <path d="M2300 700 L2360 680 L2380 750 L2320 760 Z" fill="#42a5f5" opacity=".4"/>
            <path d="M1880 760 L1940 740 L1960 810 Z" fill="#ffca28" opacity=".45"/>
            <path d="M2180 240 Q2230 220 2280 240" stroke="#7cb342" stroke-width="6" fill="none" opacity=".55" stroke-linecap="round"/>
            <ellipse cx="2200" cy="232" rx="14" ry="6" fill="#7cb342" opacity=".55" transform="rotate(-20 2200 232)"/>
            <ellipse cx="2250" cy="224" rx="14" ry="6" fill="#7cb342" opacity=".55" transform="rotate(10 2250 224)"/>`;
      // el suelo del taller, con dos caballetes
      s += `<rect x="0" y="965" width="2600" height="135" fill="#8d6e63" opacity=".22"/>
            <path d="M480 965 L520 830 L560 965 M520 830 L520 965 M488 900 L552 900" stroke="#6d4c41" stroke-width="8" fill="none" opacity=".35" stroke-linecap="round"/>
            <rect x="472" y="828" width="96" height="66" rx="4" fill="#fff" opacity=".4"/>
            <path d="M1600 965 L1640 830 L1680 965 M1640 830 L1640 965 M1608 900 L1672 900" stroke="#6d4c41" stroke-width="8" fill="none" opacity=".35" stroke-linecap="round"/>
            <rect x="1592" y="828" width="96" height="66" rx="4" fill="#fff" opacity=".4"/>`;
      return decoSvg(s, 2600);
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
