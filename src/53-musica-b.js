"use strict";
/* ============================================================
   Contenido de MÚSICA (parte B): historias, canciones,
   traductor, mapa y charla.
   ============================================================ */

Object.assign(THEMES.musica.content, {

  /* ---------- HISTORIAS ---------- */
  stories: [
    {
      id: "violin", emoji: "🎻", start: "n1",
      title: { es: "El violín tímido", ca: "El violí tímid", en: "The Shy Violin", cs: "Stydlivé housličky", fr: "Le violon timide" },
      nodes: {
        n1: {
          text: { es: "En el auditorio, {name}, hay un violín pequeño que nunca ha salido al escenario. Se llama Vito y cree que desafina. Esta noche hay concierto y falta un violín... ¿Cómo lo convencemos?", ca: "A l'auditori, {name}, hi ha un violí petit que mai no ha sortit a l'escenari. Es diu Vito i creu que desafina. Aquesta nit hi ha concert i falta un violí... Com el convencem?", en: "In the concert hall, {name}, there is a little violin that has never been on stage. His name is Vito and he thinks he plays out of tune. Tonight there is a concert and a violin is missing... How do we convince him?", cs: "V koncertní síni, {name}, jsou malé housličky, které nikdy nebyly na jevišti. Jmenují se Vito a myslí si, že hrají falešně. Dnes večer je koncert a jedny housle chybí... Jak ho přesvědčíme?", fr: "Dans l'auditorium, {name}, il y a un petit violon qui n'est jamais monté sur scène. Il s'appelle Vito et il croit qu'il joue faux. Ce soir, il y a un concert et il manque un violon... Comment le convaincre ?" },
          choices: [
            { t: { es: "Ensayamos con él en secreto", ca: "Assagem amb ell en secret", en: "We rehearse with him in secret", cs: "Tajně s ním zkoušíme", fr: "On répète avec lui en secret" }, go: "n2a" },
            { t: { es: "Le presentamos a la señora Arpa, la más sabia", ca: "Li presentem la senyora Arpa, la més sàvia", en: "We introduce him to Lady Harp, the wisest", cs: "Představíme ho paní Harfě, nejmoudřejší", fr: "On lui présente Madame Harpe, la plus sage" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "En el almacén, entre cajas, Vito toca bajito. Una nota... ¡preciosa! Otra... ¡mejor aún! 'Es que aquí nadie me mira', susurra. Entonces se abre la puerta: ¡la orquesta entera estaba escuchando! Y aplaude.", ca: "Al magatzem, entre caixes, en Vito toca fluixet. Una nota... preciosa! Una altra... millor encara! 'És que aquí ningú no em mira', xiuxiueja. Aleshores s'obre la porta: l'orquestra sencera estava escoltant! I aplaudeix.", en: "In the storeroom, between boxes, Vito plays softly. One note... beautiful! Another... even better! 'It is just that nobody watches me here', he whispers. Then the door opens: the whole orchestra was listening! And they applaud.", cs: "Ve skladu mezi krabicemi hraje Vito potichoučku. Jedna nota... nádherná! Další... ještě lepší! 'Tady se na mě totiž nikdo nedívá', šeptá. Vtom se otevřou dveře: celý orchestr poslouchal! A tleská.", fr: "Dans la réserve, entre les caisses, Vito joue tout doucement. Une note... magnifique ! Une autre... encore mieux ! « C'est que personne ne me regarde ici », chuchote-t-il. Alors la porte s'ouvre : tout l'orchestre écoutait ! Et il applaudit." },
          choices: [{ t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n3" }]
        },
        n2b: {
          text: { es: "La señora Arpa acaricia sus 47 cuerdas y le cuenta un secreto: 'Yo desafiné en mi primer concierto. ¿Y sabes qué pasó? Nada. Seguí tocando, y la música me perdonó al segundo compás'.", ca: "La senyora Arpa acarona les seves 47 cordes i li explica un secret: 'Jo vaig desafinar al meu primer concert. I saps què va passar? Res. Vaig seguir tocant, i la música em va perdonar al segon compàs'.", en: "Lady Harp strokes her 47 strings and tells him a secret: 'I played out of tune at my first concert. And do you know what happened? Nothing. I kept playing, and the music forgave me by the second bar'.", cs: "Paní Harfa pohladí svých 47 strun a prozradí mu tajemství: 'Já jsem na svém prvním koncertě hrála falešně. A víš, co se stalo? Nic. Hrála jsem dál a hudba mi to u druhého taktu odpustila'.", fr: "Madame Harpe caresse ses 47 cordes et lui confie un secret : « J'ai joué faux à mon premier concert. Et tu sais ce qui s'est passé ? Rien. J'ai continué à jouer, et la musique m'a pardonné à la deuxième mesure »." },
          choices: [{ t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n3" }]
        },
        n3: {
          text: { es: "Llega la noche del concierto. Vito sube al escenario con las cuerdas temblando. Las luces se encienden... ¿Qué le decimos desde la primera fila, {name}?", ca: "Arriba la nit del concert. En Vito puja a l'escenari amb les cordes tremolant. Els llums s'encenen... Què li diem des de la primera fila, {name}?", en: "Concert night arrives. Vito walks on stage with trembling strings. The lights come on... What do we tell him from the front row, {name}?", cs: "Přijde večer koncertu. Vito jde na jeviště s třesoucími se strunami. Světla se rozsvítí... Co mu řekneme z první řady, {name}?", fr: "Le soir du concert arrive. Vito monte sur scène, les cordes tremblantes. Les lumières s'allument... Que lui dit-on depuis le premier rang, {name} ?" },
          choices: [
            { t: { es: "'¡Toca para tus amigos, no para el miedo!'", ca: "'Toca per als teus amics, no per a la por!'", en: "'Play for your friends, not for the fear!'", cs: "'Hraj pro své kamarády, ne pro strach!'", fr: "« Joue pour tes amis, pas pour la peur ! »" }, go: "e1" },
            { t: { es: "'¡Respira hondo y disfruta!'", ca: "'Respira fondo i gaudeix!'", en: "'Breathe deep and enjoy it!'", cs: "'Zhluboka dýchej a užij si to!'", fr: "« Respire fort et profite ! »" }, go: "e1" }
          ]
        },
        e1: {
          end: true,
          text: { es: "Vito cierra los ojos, piensa en vosotros y toca. La primera nota tiembla un poquito... y las demás vuelan como pájaros. El público se levanta: ¡bravo, bravo! Esa noche Vito aprende algo que ya nunca olvida, {name}: el escenario no quita el miedo, pero los amigos lo hacen pequeñito.", ca: "En Vito tanca els ulls, pensa en vosaltres i toca. La primera nota tremola una miqueta... i les altres volen com ocells. El públic s'aixeca: bravo, bravo! Aquella nit en Vito aprèn una cosa que ja mai no oblida, {name}: l'escenari no treu la por, però els amics la fan petitona.", en: "Vito closes his eyes, thinks of you and plays. The first note trembles a tiny bit... and the rest fly like birds. The audience stands up: bravo, bravo! That night Vito learns something he never forgets, {name}: the stage does not take fear away, but friends make it tiny.", cs: "Vito zavře oči, pomyslí na vás a hraje. První nota se trošku zachvěje... a ostatní letí jako ptáci. Publikum vstává: bravo, bravo! Ten večer se Vito naučí něco, na co už nikdy nezapomene, {name}: jeviště strach nesebere, ale kamarádi ho udělají malinkým.", fr: "Vito ferme les yeux, pense à vous et joue. La première note tremble un tout petit peu... et les autres volent comme des oiseaux. Le public se lève : bravo, bravo ! Ce soir-là, Vito apprend quelque chose qu'il n'oubliera jamais, {name} : la scène n'enlève pas la peur, mais les amis la rendent toute petite." }
        }
      }
    },
    {
      id: "nota", emoji: "🎵", start: "n1",
      title: { es: "La nota perdida", ca: "La nota perduda", en: "The Lost Note", cs: "Ztracená nota", fr: "La note perdue" },
      nodes: {
        n1: {
          text: { es: "¡Emergencia en el auditorio, {name}! La nota Si se ha escapado de la canción de esta noche. Sin ella, la melodía suena coja: do, re, mi, fa, sol, la... ¡y agujero! ¿Dónde la buscamos?", ca: "Emergència a l'auditori, {name}! La nota Si s'ha escapat de la cançó d'aquesta nit. Sense ella, la melodia sona coixa: do, re, mi, fa, sol, la... i forat! On la busquem?", en: "Emergency at the concert hall, {name}! The note Ti has run away from tonight's song. Without it the melody sounds wobbly: do, re, mi, fa, sol, la... and a hole! Where do we look?", cs: "Pohotovost v koncertní síni, {name}! Nota Si utekla z dnešní písničky. Bez ní melodie kulhá: do, re, mi, fa, sol, la... a díra! Kde ji budeme hledat?", fr: "Urgence à l'auditorium, {name} ! La note Si s'est échappée de la chanson de ce soir. Sans elle, la mélodie boite : do, ré, mi, fa, sol, la... et un trou ! Où la cherche-t-on ?" },
          choices: [
            { t: { es: "En el piano, entre las teclas", ca: "Al piano, entre les tecles", en: "In the piano, between the keys", cs: "V klavíru, mezi klávesami", fr: "Dans le piano, entre les touches" }, go: "n2a" },
            { t: { es: "En la calle, siguiendo el sonido", ca: "Al carrer, seguint el so", en: "In the street, following the sound", cs: "Na ulici, po zvuku", fr: "Dans la rue, en suivant le son" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "Levantáis la tapa del piano: dentro hay un bosque de cuerdas doradas. Las notas vecinas os cuentan que Si se fue 'a buscar una canción donde ser importante'. Dejó una pista: una escalera de notas que sube hacia el tejado.", ca: "Aixequeu la tapa del piano: a dins hi ha un bosc de cordes daurades. Les notes veïnes us expliquen que Si se'n va anar 'a buscar una cançó on ser important'. Va deixar una pista: una escala de notes que puja cap a la teulada.", en: "You lift the piano lid: inside there is a forest of golden strings. The neighbour notes tell you Ti left 'to find a song where she matters'. She left a clue: a ladder of notes going up to the roof.", cs: "Zvednete víko klavíru: uvnitř je les zlatých strun. Sousední noty vám řeknou, že Si odešla 'najít písničku, kde bude důležitá'. Nechala stopu: žebřík z not vedoucí na střechu.", fr: "Vous soulevez le couvercle du piano : dedans, une forêt de cordes dorées. Les notes voisines racontent que Si est partie « chercher une chanson où être importante ». Elle a laissé un indice : une échelle de notes qui monte vers le toit." },
          choices: [{ t: { es: "¡Al tejado!", ca: "A la teulada!", en: "To the roof!", cs: "Na střechu!", fr: "Sur le toit !" }, go: "n3" }]
        },
        n2b: {
          text: { es: "Por la calle oís un 'siiii' finito y triste. Viene de un parque, donde un músico callejero toca una guitarra vieja. En su melodía descubrís a Si, sentada en una cuerda, columpiándose bajito.", ca: "Pel carrer sentiu un 'siiii' finet i trist. Ve d'un parc, on un músic de carrer toca una guitarra vella. En la seva melodia descobriu la Si, asseguda en una corda, gronxant-se fluixet.", en: "In the street you hear a thin, sad 'tiiii'. It comes from a park, where a street musician plays an old guitar. In his melody you spot Ti, sitting on a string, swinging quietly.", cs: "Na ulici uslyšíte tenounké smutné 'siiii'. Ozývá se z parku, kde pouliční muzikant hraje na starou kytaru. V jeho melodii objevíte Si, jak sedí na struně a tiše se houpe.", fr: "Dans la rue, vous entendez un « siiii » tout fin et triste. Ça vient d'un parc, où un musicien de rue joue d'une vieille guitare. Dans sa mélodie, vous découvrez Si, assise sur une corde, se balançant doucement." },
          choices: [{ t: { es: "Hablar con ella", ca: "Parlar amb ella", en: "Talk to her", cs: "Promluvit s ní", fr: "Lui parler" }, go: "n3" }]
        },
        n3: {
          text: { es: "'Es que en la canción solo salgo dos veces', suspira Si. 'Do y Sol salen un montón'. ¿Qué le contestamos, {name}?", ca: "'És que a la cançó només surto dues vegades', sospira la Si. 'Do i Sol surten un munt'. Què li contestem, {name}?", en: "'I only appear twice in the song', sighs Ti. 'Do and Sol appear loads'. What do we answer, {name}?", cs: "'V té písničce jsem jen dvakrát', povzdechne si Si. 'Do a Sol jsou tam pořád'. Co jí odpovíme, {name}?", fr: "« Dans la chanson, je n'apparais que deux fois », soupire Si. « Do et Sol sortent plein de fois ». Que lui répond-on, {name} ?" },
          choices: [
            { t: { es: "'Sin tus dos notas, la canción está rota'", ca: "'Sense les teves dues notes, la cançó està trencada'", en: "'Without your two notes, the song is broken'", cs: "'Bez tvých dvou not je písnička rozbitá'", fr: "« Sans tes deux notes, la chanson est cassée »" }, go: "e1" },
            { t: { es: "'Las notas que salen poco son las que más se esperan'", ca: "'Les notes que surten poc són les que més s'esperen'", en: "'The rarest notes are the most awaited'", cs: "'Noty, které zazní málokdy, se nejvíc očekávají'", fr: "« Les notes rares sont les plus attendues »" }, go: "e1" }
          ]
        },
        e1: {
          end: true,
          text: { es: "Si se lo piensa... y sonríe: '¿De verdad me esperan?'. Volvéis justo a tiempo. Y cuando en el concierto llega SU momento, la nota Si suena tan clara que el público contiene la respiración. Dos veces, sí. Pero perfectas. No importa cuántas veces salgas, {name}: importa cómo brillas cuando te toca.", ca: "La Si s'ho pensa... i somriu: 'De debò m'esperen?'. Torneu just a temps. I quan al concert arriba el SEU moment, la nota Si sona tan clara que el públic aguanta la respiració. Dues vegades, sí. Però perfectes. No importa quantes vegades surtis, {name}: importa com brilles quan et toca.", en: "Ti thinks about it... and smiles: 'They really wait for me?'. You return just in time. And when HER moment comes in the concert, the note Ti rings so clear the audience holds its breath. Twice, yes. But perfect. It does not matter how often you appear, {name}: what matters is how you shine when it is your turn.", cs: "Si se zamyslí... a usměje se: 'Opravdu na mě čekají?'. Vrátíte se právě včas. A když na koncertě přijde JEJÍ chvíle, nota Si zazní tak čistě, že publikum zatají dech. Dvakrát, ano. Ale dokonale. Nezáleží na tom, kolikrát zazníš, {name}: záleží na tom, jak záříš, když jsi na řadě.", fr: "Si réfléchit... et sourit : « On m'attend vraiment ? ». Vous revenez juste à temps. Et quand SON moment arrive au concert, la note Si sonne si claire que le public retient son souffle. Deux fois, oui. Mais parfaites. Peu importe combien de fois tu apparais, {name} : ce qui compte, c'est comme tu brilles quand c'est ton tour." }
        }
      }
    },
    {
      id: "concierto", emoji: "🐸", start: "n1",
      title: { es: "El concierto de los animales", ca: "El concert dels animals", en: "The Animal Concert", cs: "Zvířecí koncert", fr: "Le concert des animaux" },
      nodes: {
        n1: {
          text: { es: "El bosque prepara su primer concierto, {name}, ¡y nos han nombrado directores! Tenemos al grillo violinista, la rana cantante, el pájaro carpintero percusionista y un oso que... quiere participar pero no sabe cómo. ¿Qué hacemos primero?", ca: "El bosc prepara el seu primer concert, {name}, i ens han nomenat directors! Tenim el grill violinista, la granota cantant, el picot percussionista i un ós que... vol participar però no sap com. Què fem primer?", en: "The forest is preparing its first concert, {name}, and we have been named conductors! We have the cricket violinist, the frog singer, the woodpecker drummer and a bear who... wants to join but does not know how. What do we do first?", cs: "Les chystá svůj první koncert, {name}, a nás jmenovali dirigenty! Máme cvrčka houslistu, žábu zpěvačku, datla bubeníka a medvěda, který... chce hrát, ale neví jak. Co uděláme nejdřív?", fr: "La forêt prépare son premier concert, {name}, et on nous a nommés chefs d'orchestre ! On a le grillon violoniste, la grenouille chanteuse, le pic percussionniste et un ours qui... veut participer mais ne sait pas comment. Que fait-on d'abord ?" },
          choices: [
            { t: { es: "Buscarle un instrumento al oso", ca: "Buscar-li un instrument a l'ós", en: "Find the bear an instrument", cs: "Najít medvědovi nástroj", fr: "Trouver un instrument à l'ours" }, go: "n2a" },
            { t: { es: "Ensayar todos juntos ya", ca: "Assajar tots junts ja", en: "Rehearse all together right away", cs: "Hned zkoušet všichni spolu", fr: "Répéter tous ensemble tout de suite" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "Probáis de todo: la flauta (se le atasca en la zarpa), el triángulo (lo dobla sin querer)... hasta que el oso bosteza: ¡BOOOOM! El bosque entero tiembla. ¡Eso es! El oso tiene el mejor tambor del mundo: ¡su vozarrón!", ca: "Proveu de tot: la flauta (se li encalla a la grapa), el triangle (el doblega sense voler)... fins que l'ós badalla: BOOOOM! El bosc sencer tremola. Això és! L'ós té el millor tambor del món: el seu veuarra!", en: "You try everything: the flute (it gets stuck in his paw), the triangle (he bends it by accident)... until the bear yawns: BOOOOM! The whole forest shakes. That is it! The bear has the best drum in the world: his mighty voice!", cs: "Zkoušíte všechno: flétnu (zasekne se mu v tlapě), triangl (nechtěně ho ohne)... až medvěd zívne: BUUUUM! Celý les se zatřese. To je ono! Medvěd má nejlepší buben na světě: svůj hromový hlas!", fr: "Vous essayez tout : la flûte (coincée dans sa patte), le triangle (il le plie sans faire exprès)... jusqu'à ce que l'ours bâille : BOOOOM ! Toute la forêt tremble. C'est ça ! L'ours a le meilleur tambour du monde : sa grosse voix !" },
          choices: [{ t: { es: "¡A ensayar con el oso barítono!", ca: "A assajar amb l'ós baríton!", en: "Rehearse with the baritone bear!", cs: "Zkoušet s medvědem barytonem!", fr: "Répétons avec l'ours baryton !" }, go: "n3" }]
        },
        n2b: {
          text: { es: "El primer ensayo es un desastre divertidísimo: el grillo va rapidísimo, la rana canta otra canción y el pájaro carpintero toca en un árbol equivocado. Todos os miran: '¿Y ahora, directores?'. Respiráis hondo y levantáis la batuta: 'Uno... dos... ¡y tres!'.", ca: "El primer assaig és un desastre divertidíssim: el grill va rapidíssim, la granota canta una altra cançó i el picot toca en un arbre equivocat. Tots us miren: 'I ara, directors?'. Respireu fondo i aixequeu la batuta: 'Un... dos... i tres!'.", en: "The first rehearsal is a hilarious disaster: the cricket rushes, the frog sings a different song and the woodpecker drums on the wrong tree. Everyone looks at you: 'Now what, conductors?'. You breathe deep and raise the baton: 'One... two... and three!'.", cs: "První zkouška je k popukání: cvrček pospíchá, žába zpívá jinou písničku a datel bubnuje na špatný strom. Všichni se na vás dívají: 'Co teď, dirigenti?'. Zhluboka se nadechnete a zvednete taktovku: 'Raz... dva... a tři!'.", fr: "La première répétition est un désastre très drôle : le grillon va trop vite, la grenouille chante une autre chanson et le pic tape sur le mauvais arbre. Tous vous regardent : « Et maintenant, chefs ? ». Vous respirez fort et levez la baguette : « Un... deux... et trois ! »." },
          choices: [{ t: { es: "¡Poco a poco suena mejor!", ca: "A poc a poc sona millor!", en: "Little by little it sounds better!", cs: "Kousek po kousku to zní líp!", fr: "Petit à petit, ça sonne mieux !" }, go: "n3" }]
        },
        n3: {
          text: { es: "Noche del concierto: luciérnagas de focos, setas de asientos y todo el bosque esperando. El grillo afina, la rana hace gárgaras, el oso carraspea (tiembla una nube)... y todos os miran a vosotros. ¡La batuta arriba, {name}!", ca: "Nit del concert: cuques de llum de focus, bolets de seients i tot el bosc esperant. El grill afina, la granota fa gàrgares, l'ós s'escura el coll (tremola un núvol)... i tots us miren a vosaltres. La batuta amunt, {name}!", en: "Concert night: fireflies for spotlights, mushrooms for seats and the whole forest waiting. The cricket tunes, the frog gargles, the bear clears his throat (a cloud trembles)... and everyone looks at you. Baton up, {name}!", cs: "Večer koncertu: světlušky jako reflektory, houby jako sedadla a celý les čeká. Cvrček ladí, žába kloktá, medvěd si odkašle (zachvěje se mrak)... a všichni se dívají na vás. Taktovku vzhůru, {name}!", fr: "Le soir du concert : des lucioles en projecteurs, des champignons en sièges et toute la forêt qui attend. Le grillon s'accorde, la grenouille fait des gargarismes, l'ours se racle la gorge (un nuage tremble)... et tous vous regardent. Baguette levée, {name} !" },
          choices: [{ t: { es: "¡Que empiece la música!", ca: "Que comenci la música!", en: "Let the music begin!", cs: "Ať začne hudba!", fr: "Que la musique commence !" }, go: "e1" }]
        },
        e1: {
          end: true,
          text: { es: "El grillo teje la melodía, la rana le pone la letra, el carpintero marca el ritmo y el oso hace BUM en el momento justo. Suena tan bonito que hasta la luna se asoma entre las nubes a escuchar. Dirigir no es mandar, {name}: es ayudar a que cada uno brille en su momento. ¡Bravooo!", ca: "El grill teixeix la melodia, la granota hi posa la lletra, el picot marca el ritme i l'ós fa BUM al moment just. Sona tan bonic que fins i tot la lluna treu el cap entre els núvols per escoltar. Dirigir no és manar, {name}: és ajudar que cadascú brilli al seu moment. Bravooo!", en: "The cricket weaves the melody, the frog adds the words, the woodpecker keeps the beat and the bear goes BOOM at just the right moment. It sounds so lovely that even the moon peeks through the clouds to listen. Conducting is not bossing around, {name}: it is helping everyone shine at their moment. Bravooo!", cs: "Cvrček splétá melodii, žába dodá slova, datel drží rytmus a medvěd udělá BUM přesně ve správnou chvíli. Zní to tak krásně, že i měsíc vykoukne z mraků, aby poslouchal. Dirigovat neznamená poroučet, {name}: znamená to pomáhat, aby každý zazářil ve své chvíli. Bravóóó!", fr: "Le grillon tisse la mélodie, la grenouille met les paroles, le pic marque le rythme et l'ours fait BOUM au bon moment. C'est si beau que même la lune se penche entre les nuages pour écouter. Diriger, ce n'est pas commander, {name} : c'est aider chacun à briller à son moment. Bravooo !" }
        }
      }
    }
  ],

  /* ---------- KARAOKE ---------- */
  songs: [
    { emoji: "🎵",
      title: { es: "Do, re, mi, ¡a jugar!", ca: "Do, re, mi, a jugar!", en: "Do, Re, Mi, Let's Play!", cs: "Do, re, mi, jdeme hrát!", fr: "Do, ré, mi, on joue !" },
      lines: [
        { es: "Do, un dado que rodó,", ca: "Do, un dau que va rodar,", en: "Do, a doughnut on a plate,", cs: "Do, domeček náš malý,", fr: "Do, un dodo tout doux," },
        { es: "Re, un regalo que llegó,", ca: "Re, un regal que va arribar,", en: "Re, a rainbow, is that not great?,", cs: "Re, rebarbora v dáli,", fr: "Ré, un rayon de soleil roux," },
        { es: "Mi, un mimo para ti,", ca: "Mi, un mim per a tu,", en: "Mi, a mirror shows my face,", cs: "Mi, miminko se směje,", fr: "Mi, un miroir pour moi," },
        { es: "Fa, farolito que se ve allá,", ca: "Fa, fanalet que es veu allà,", en: "Fa, a faraway fun place,", cs: "Fa, fanfára už zněje,", fr: "Fa, une fanfare avec toi," },
        { es: "Sol, calentito como un sol,", ca: "Sol, calentó com un sol,", en: "Sol, the sun up in the sky,", cs: "Sol, sluníčko nás hřeje,", fr: "Sol, le soleil est là-haut," },
        { es: "La, cantamos la-la-la,", ca: "La, cantem la-la-la,", en: "La, we sing it loud and high,", cs: "La, la-la-la se pěje,", fr: "La, on chante la-la-lo," },
        { es: "Si, un sí gigante para ti,", ca: "Si, un sí gegant per a tu,", en: "Ti, a tiny cup of tea,", cs: "Si, silák jsi ty přeci,", fr: "Si, un si géant pour toi," },
        { es: "¡y volvemos a empezar con Do!", ca: "i tornem a començar amb Do!", en: "and we start again with Do!", cs: "a začínáme znovu, Do!", fr: "et on recommence avec Do !" }
      ] },
    { emoji: "🎼",
      title: { es: "La orquesta de {name}", ca: "L'orquestra de {name}", en: "{name}'s Orchestra", cs: "Orchestr, co řídí {name}", fr: "L'orchestre de {name}" },
      lines: [
        { es: "{name} levanta la batuta,", ca: "{name} aixeca la batuta,", en: "{name} lifts the baton high,", cs: "{name} zvedá taktovku,", fr: "{name} lève la baguette," },
        { es: "y el silencio se hace ya.", ca: "i el silenci es fa ja.", en: "and silence fills the hall.", cs: "a ticho padne hned.", fr: "et le silence se fait déjà." },
        { es: "Los violines, suavecito,", ca: "Els violins, suaument,", en: "The violins come in softly,", cs: "Housličky hrají tiše,", fr: "Les violons, tout doucement," },
        { es: "¡empiezan a cantar!", ca: "comencen a cantar!", en: "answering the call.", cs: "jak z pohádkové říše.", fr: "commencent à chanter, voilà !" },
        { es: "Ahora entran las trompetas,", ca: "Ara entren les trompetes,", en: "Now the trumpets join the party,", cs: "Teď nastoupí trubky zlaté,", fr: "Maintenant entrent les trompettes," },
        { es: "¡ta-ta-tá!, con emoción,", ca: "ta-ta-tà!, amb emoció,", en: "ta-ta-taa!, with all their might,", cs: "ta-ta-tá!, jak hrom zní,", fr: "ta-ta-ta !, avec émotion," },
        { es: "y el tambor con su pom-pom", ca: "i el tambor amb el seu pom-pom", en: "and the drum goes boom-boom-boom,", cs: "a buben s bum-bum svým", fr: "et le tambour avec son poum-poum" },
        { es: "¡pone a bailar el corazón!", ca: "posa a ballar el cor!", en: "till every heart takes flight!", cs: "roztančí srdce v ní!", fr: "fait danser tous les cœurs !" }
      ] },
    { emoji: "🥁",
      title: { es: "El desfile del tambor", ca: "La desfilada del tambor", en: "The Drum Parade", cs: "Bubnová přehlídka", fr: "Le défilé du tambour" },
      lines: [
        { es: "Pom, pom, pom, ya viene el desfile,", ca: "Pom, pom, pom, ja ve la desfilada,", en: "Boom, boom, boom, here comes the parade,", cs: "Bum, bum, bum, průvod už jde k nám,", fr: "Poum, poum, poum, voici le défilé," },
        { es: "el tambor delante va.", ca: "el tambor davant va.", en: "the drum is marching first.", cs: "buben jde v čele sám.", fr: "le tambour marche devant." },
        { es: "Los platillos, ¡chin-chin-chin!,", ca: "Els platerets, xin-xin-xin!,", en: "The cymbals crash, ching-ching-ching!,", cs: "Činely dělají cink-cink-cink!,", fr: "Les cymbales, tchin-tchin-tchin !," },
        { es: "brillan como el sol de mayo.", ca: "brillen com el sol de maig.", en: "shining till the sky could burst.", cs: "září jako sluneční blik.", fr: "brillent comme un soleil de mai." },
        { es: "La flauta silba una sonrisa,", ca: "La flauta xiula un somriure,", en: "The flute whistles out a smile,", cs: "Flétna píská úsměv malý,", fr: "La flûte siffle un sourire," },
        { es: "el trombón responde: ¡buá!,", ca: "el trombó respon: buà!,", en: "the trombone answers: waah!,", cs: "pozoun odpoví: bumtarata!,", fr: "le trombone répond : boua !," },
        { es: "y {name} con sus palmas", ca: "i {name} amb els seus aplaudiments", en: "and {name} with clapping hands", cs: "a {name} tleská dlaněmi,", fr: "et {name} avec ses mains" },
        { es: "¡dirige el desfile hasta el final!", ca: "dirigeix la desfilada fins al final!", en: "leads the parade across the land!", cs: "vede průvod celou zemí!", fr: "dirige le défilé jusqu'au bout !" }
      ] }
  ],

  /* ---------- TRADUCTOR ---------- */
  translator: {
    words: [
      W_COMMON.hola,
      W_COMMON.adios,
      W_COMMON.amigo,
      { k: "cancion", emoji: "🎵", name: { es: "canción", ca: "cançó", en: "song", cs: "písnička", fr: "chanson" } },
      { k: "tambor", emoji: "🥁", name: { es: "tambor", ca: "tambor", en: "drum", cs: "buben", fr: "tambour" } },
      { k: "violin", emoji: "🎻", name: { es: "violín", ca: "violí", en: "violin", cs: "housle", fr: "violon" } },
      { k: "piano", emoji: "🎹", name: { es: "piano", ca: "piano", en: "piano", cs: "klavír", fr: "piano" } },
      { k: "trompeta", emoji: "🎺", name: { es: "trompeta", ca: "trompeta", en: "trumpet", cs: "trubka", fr: "trompette" } },
      W_COMMON.robot,
      W_COMMON.mama,
      W_COMMON.papa,
      W_COMMON.casa,
      W_COMMON.agua,
      W_COMMON.comida,
      W_COMMON.perro,
      W_COMMON.gato,
      { k: "grande", emoji: "🎺", name: { es: "grande", ca: "gran", en: "big", cs: "velký", fr: "grand" } },
      { k: "pequeno", emoji: "🎵", name: { es: "pequeño", ca: "petit", en: "small", cs: "malý", fr: "petit" } },
      W_COMMON.bonito,
      W_COMMON.amor,
      W_COMMON.gracias,
      W_COMMON.si,
      W_COMMON.no,
      W_COMMON.dormir
    ],
    langs: [
      { id: "tarareo", emoji: "🎵",
        name: { es: "Tarareo", ca: "Taral·leig", en: "Hummish", cs: "Broukánština", fr: "Fredonnois" },
        greeting: { es: "La-la-laaa. El tarareo es el idioma de las canciones sin letra.", ca: "La-la-laaa. El taral·leig és l'idioma de les cançons sense lletra.", en: "La-la-laaa. Hummish is the language of songs without words.", cs: "La-la-lááá. Broukánština je jazyk písniček beze slov.", fr: "La-la-laaa. Le fredonnois est la langue des chansons sans paroles." },
        dict: { hola: "la-lá", adios: "la-la-váaa", amigo: "lalamigo", cancion: "LA-LA-LA", tambor: "la-pom", violin: "la-liiin", piano: "la-plín", trompeta: "la-tatá", robot: "la-bip", mama: "lamama", papa: "lapapa", casa: "lacasa", agua: "la-glu", comida: "ñam-la", perro: "la-guau", gato: "la-miau", grande: "LAAAA", pequeno: "lala-ita", bonito: "lalindo", amor: "lamor", gracias: "lagracias", si: "la-sí", no: "la-no", dormir: "la-la-zzz" } },
      { id: "percusivo", emoji: "🥁",
        name: { es: "Percusivo", ca: "Percussiu", en: "Drummish", cs: "Bubnovština", fr: "Percussois" },
        greeting: { es: "¡Pom-tak! El percusivo se habla dando palmadas y golpecitos en las rodillas.", ca: "Pom-tac! El percussiu es parla picant de mans i fent copets als genolls.", en: "Boom-tak! Drummish is spoken by clapping and tapping your knees.", cs: "Bum-tak! Bubnovština se mluví tleskáním a ťukáním do kolen.", fr: "Poum-tac ! Le percussois se parle en tapant des mains et sur les genoux." },
        dict: { hola: "pom-tak", adios: "tak-pom", amigo: "pommigo", cancion: "pom-tak-pom", tambor: "POM-POM", violin: "pom-liin", piano: "pom-plin", trompeta: "pom-tatá", robot: "pom-bip", mama: "pommama", papa: "pompapa", casa: "pomcasa", agua: "pom-glu", comida: "ñampom", perro: "pom-guau", gato: "pom-miau", grande: "POMPOMPOM", pequeno: "pomtin", bonito: "pomlindo", amor: "pomamor", gracias: "pomgracias", si: "pom", no: "tak", dormir: "pom-zzz" } },
      { id: "silbidito", emoji: "🎶",
        name: { es: "Silbidito", ca: "Xiuladissa", en: "Whistlish", cs: "Pískánština", fr: "Sifflotois" },
        greeting: { es: "Fiu-fiu. El silbidito se habla frunciendo los labios. ¡Hay pueblos que silban de monte a monte!", ca: "Fiu-fiu. La xiuladissa es parla arrufant els llavis. Hi ha pobles que xiulen de muntanya a muntanya!", en: "Fee-few. Whistlish is spoken with puckered lips. Some villages whistle from hill to hill!", cs: "Fjú-fjú. Pískánština se mluví našpulenými rty. Některé vesnice na sebe pískají z kopce na kopec!", fr: "Fiou-fiou. Le sifflotois se parle en fronçant les lèvres. Il y a des villages qui sifflent de montagne en montagne !" },
        dict: { hola: "fiu-fiu", adios: "fiuuu-va", amigo: "fiumigo", cancion: "fiu-la-fiu", tambor: "fiu-pom", violin: "fiuliiin", piano: "fiuplin", trompeta: "fiutatá", robot: "fiubip", mama: "fiumama", papa: "fiupapa", casa: "fiucasa", agua: "fiuglu", comida: "ñamfiu", perro: "fiuguau", gato: "fiumiau", grande: "FIUUUU", pequeno: "fiutín", bonito: "fiulindo", amor: "fiuamor", gracias: "fiugracias", si: "fiu-sí", no: "fiu-no", dormir: "fiuzzz" } },
      { id: "operistico", emoji: "🎭",
        name: { es: "Operístico", ca: "Operístic", en: "Operatic", cs: "Opeřština", fr: "Opératique" },
        greeting: { es: "¡HoolaaaAAAA! En operístico todo se canta a lo grande, con los brazos abiertos.", ca: "HoolaaaAAAA! En operístic tot es canta a l'engròs, amb els braços oberts.", en: "HeellooooOOOO! In Operatic everything is sung grandly, with open arms.", cs: "AhoooojÓÓÓ! V opeřštině se všechno zpívá velkolepě, s rozpaženýma rukama.", fr: "BonjoouuurRRR ! En opératique, tout se chante en grand, les bras ouverts." },
        dict: { hola: "hoolaaaa", adios: "addiooooos", amigo: "amiiiigooo", cancion: "caaanciooon", tambor: "tambooooor", violin: "violiiiiin", piano: "piaaaanooo", trompeta: "trompeeetaaa", robot: "robooooot", mama: "maaamaaaa", papa: "paaapaaaa", casa: "caaasaaaa", agua: "aaaguaaaa", comida: "comiiiidaaaa", perro: "guaaaauuu", gato: "miaaaauuuu", grande: "GRANDIOOOSO", pequeno: "pequeñiiiito", bonito: "belliiiisimo", amor: "amooooore", gracias: "graaaciaaaas", si: "siiiiii", no: "nooooo", dormir: "zzzziiiii" } }
    ]
  },

  /* ---------- MAPA: el gran auditorio ---------- */
  explore: {
    width: 2600, height: 1100, stars: false,
    bgCss: "radial-gradient(ellipse 30% 40% at 20% 10%, rgba(255,235,59,.3), transparent), radial-gradient(ellipse 30% 40% at 60% 8%, rgba(255,64,129,.25), transparent), radial-gradient(ellipse 30% 40% at 90% 12%, rgba(64,196,255,.25), transparent), linear-gradient(180deg,#311b92 0%,#4527a0 40%,#22163e 100%)",
    cats: [
      { id: "cuerdas", emoji: "🎻", x: 120, name: { es: "Cuerdas", ca: "Cordes", en: "Strings", cs: "Smyčce a struny", fr: "Cordes" } },
      { id: "vientos", emoji: "🎺", x: 800, name: { es: "Vientos", ca: "Vents", en: "Winds", cs: "Dechy", fr: "Vents" } },
      { id: "percusion", emoji: "🥁", x: 1500, name: { es: "Percusión", ca: "Percussió", en: "Percussion", cs: "Bicí", fr: "Percussions" } },
      { id: "escenario", emoji: "🎤", x: 2150, name: { es: "El escenario", ca: "L'escenari", en: "The stage", cs: "Jeviště", fr: "La scène" } }
    ],
    pois: [
      { cat: "cuerdas", emoji: "🎻", x: 200, y: 420,
        name: { es: "El violín", ca: "El violí", en: "The violin", cs: "Housle", fr: "Le violon" },
        fact: { es: "Cuatro cuerdas y voz de pájaro. Los mejores tienen 300 años y suenan cada vez mejor.", ca: "Quatre cordes i veu d'ocell. Els millors tenen 300 anys i sonen cada cop millor.", en: "Four strings and a bird's voice. The best ones are 300 years old and sound better every year.", cs: "Čtyři struny a ptačí hlas. Ty nejlepší jsou 300 let staré a zní čím dál líp.", fr: "Quatre cordes et une voix d'oiseau. Les meilleurs ont 300 ans et sonnent de mieux en mieux." } },
      { cat: "cuerdas", emoji: "🎻", x: 380, y: 540, size: 2,
        name: { es: "El violonchelo", ca: "El violoncel", en: "The cello", cs: "Violoncello", fr: "Le violoncelle" },
        fact: { es: "Como un violín gigante que se sienta contigo. Su voz es profunda y calentita.", ca: "Com un violí gegant que s'asseu amb tu. La seva veu és profunda i calentona.", en: "Like a giant violin that sits down with you. Its voice is deep and warm.", cs: "Jako obří housle, které si s tebou sednou. Jejich hlas je hluboký a hřejivý.", fr: "Comme un violon géant qui s'assoit avec toi. Sa voix est profonde et chaleureuse." } },
      { cat: "cuerdas", emoji: "🪕", x: 540, y: 400,
        name: { es: "El arpa", ca: "L'arpa", en: "The harp", cs: "Harfa", fr: "La harpe" },
        fact: { es: "47 cuerdas como una cascada dorada. Suena a cuento de hadas.", ca: "47 cordes com una cascada daurada. Sona a conte de fades.", en: "47 strings like a golden waterfall. It sounds like a fairy tale.", cs: "47 strun jako zlatý vodopád. Zní jako pohádka.", fr: "47 cordes comme une cascade dorée. Ça sonne comme un conte de fées." } },
      { cat: "cuerdas", emoji: "🎸", x: 660, y: 560,
        name: { es: "La guitarra", ca: "La guitarra", en: "The guitar", cs: "Kytara", fr: "La guitare" },
        fact: { es: "Nació en España y conquistó el mundo. Sirve para el flamenco, el rock y las nanas.", ca: "Va néixer a Espanya i va conquerir el món. Serveix per al flamenc, el rock i les cançons de bressol.", en: "Born in Spain, it conquered the world. Good for flamenco, rock and lullabies.", cs: "Narodila se ve Španělsku a dobyla svět. Hodí se na flamenco, rock i ukolébavky.", fr: "Née en Espagne, elle a conquis le monde. Bonne pour le flamenco, le rock et les berceuses." } },
      { cat: "vientos", emoji: "🪈", x: 850, y: 400,
        name: { es: "La flauta", ca: "La flauta", en: "The flute", cs: "Flétna", fr: "La flûte" },
        fact: { es: "El instrumento más antiguo después de la voz: hay flautas de hace 40.000 años.", ca: "L'instrument més antic després de la veu: hi ha flautes de fa 40.000 anys.", en: "The oldest instrument after the voice: there are flutes from 40,000 years ago.", cs: "Nejstarší nástroj po hlasu: existují flétny staré 40 000 let.", fr: "Le plus ancien instrument après la voix : il y a des flûtes d'il y a 40 000 ans." } },
      { cat: "vientos", emoji: "🎺", x: 1020, y: 520,
        name: { es: "La trompeta", ca: "La trompeta", en: "The trumpet", cs: "Trubka", fr: "La trompette" },
        fact: { es: "Brilla como el oro y despierta a cualquiera: ¡ta-ta-ta-táaa!", ca: "Brilla com l'or i desperta qualsevol: ta-ta-ta-tàaa!", en: "It shines like gold and wakes anyone up: ta-ta-ta-taaa!", cs: "Leskne se jako zlato a probudí každého: ta-ta-ta-tááá!", fr: "Elle brille comme l'or et réveille n'importe qui : ta-ta-ta-taaa !" } },
      { cat: "vientos", emoji: "🎷", x: 1190, y: 420,
        name: { es: "El saxofón", ca: "El saxofon", en: "The saxophone", cs: "Saxofon", fr: "Le saxophone" },
        fact: { es: "Lo inventó un señor llamado Sax. Es la voz elegante y juguetona del jazz.", ca: "El va inventar un senyor anomenat Sax. És la veu elegant i juganera del jazz.", en: "It was invented by a man called Sax. The elegant, playful voice of jazz.", cs: "Vynalezl ho pán jménem Sax. Elegantní a hravý hlas jazzu.", fr: "Il a été inventé par un monsieur appelé Sax. La voix élégante et joueuse du jazz." } },
      { cat: "vientos", emoji: "📯", x: 1350, y: 550,
        name: { es: "La tuba", ca: "La tuba", en: "The tuba", cs: "Tuba", fr: "Le tuba" },
        fact: { es: "La abuela grandota de los vientos: hace bum-bum-buuum bien abajo.", ca: "L'àvia grandota dels vents: fa bum-bum-buuum ben avall.", en: "The big granny of the winds: it goes boom-boom-booom way down low.", cs: "Velká babička dechů: dělá bum-bum-búúúm pěkně zhluboka.", fr: "La grande mamie des vents : elle fait boum-boum-bouuum tout en bas." } },
      { cat: "percusion", emoji: "🥁", x: 1550, y: 480, size: 2,
        name: { es: "Los timbales", ca: "Les timbales", en: "The timpani", cs: "Tympány", fr: "Les timbales" },
        fact: { es: "Los tambores gigantes de la orquesta. Cuando truenan, tiembla todo el auditorio.", ca: "Els tambors gegants de l'orquestra. Quan tronen, tremola tot l'auditori.", en: "The giant drums of the orchestra. When they thunder, the whole hall trembles.", cs: "Obří bubny orchestru. Když zahřmí, třese se celá síň.", fr: "Les tambours géants de l'orchestre. Quand ils tonnent, toute la salle tremble." } },
      { cat: "percusion", emoji: "🎼", x: 1720, y: 380,
        name: { es: "El xilófono", ca: "El xilòfon", en: "The xylophone", cs: "Xylofon", fr: "Le xylophone" },
        fact: { es: "Láminas de madera que suenan a gotas de colores. Se toca con baquetas de bolita.", ca: "Làmines de fusta que sonen a gotes de colors. Es toca amb baquetes de boleta.", en: "Wooden bars that sound like colourful drops. Played with little ball mallets.", cs: "Dřevěné destičky znějící jako barevné kapky. Hraje se paličkami s kuličkou.", fr: "Des lames de bois qui sonnent comme des gouttes colorées. On joue avec des baguettes à boule." } },
      { cat: "percusion", emoji: "🔔", x: 1880, y: 520,
        name: { es: "Los platillos", ca: "Els platerets", en: "The cymbals", cs: "Činely", fr: "Les cymbales" },
        fact: { es: "Dos platos dorados que chocan: ¡CHAS! Es el momento favorito de quien los toca.", ca: "Dos plats daurats que xoquen: XAS! És el moment preferit de qui els toca.", en: "Two golden plates crashing: CRASH! The favourite moment of whoever plays them.", cs: "Dva zlaté talíře, které do sebe narazí: ČING! Oblíbená chvíle každého hráče.", fr: "Deux assiettes dorées qui se cognent : TCHAC ! Le moment préféré de celui qui en joue." } },
      { cat: "escenario", emoji: "🪄", x: 2180, y: 420, size: 2,
        name: { es: "El podio de dirección", ca: "El podi de direcció", en: "The conductor's podium", cs: "Dirigentský stupínek", fr: "Le podium du chef" },
        fact: { es: "Desde aquí, la directora pone de acuerdo a cien músicos con una batuta y dos cejas expresivas.", ca: "Des d'aquí, la directora posa d'acord cent músics amb una batuta i dues celles expressives.", en: "From here, the conductor gets a hundred musicians to agree with a baton and two expressive eyebrows.", cs: "Odsud dirigentka sladí sto muzikantů taktovkou a dvěma výmluvnými obočími.", fr: "D'ici, la cheffe met d'accord cent musiciens avec une baguette et deux sourcils expressifs." } },
      { cat: "escenario", emoji: "🎹", x: 2350, y: 550,
        name: { es: "El piano de cola", ca: "El piano de cua", en: "The grand piano", cs: "Koncertní křídlo", fr: "Le piano à queue" },
        fact: { es: "88 teclas y un ala negra brillante. Por dentro es un arpa tumbada con martillitos.", ca: "88 tecles i una ala negra brillant. Per dins és una arpa estirada amb martellets.", en: "88 keys and a shiny black wing. Inside it is a lying-down harp with little hammers.", cs: "88 kláves a lesklé černé křídlo. Uvnitř je to ležící harfa s kladívky.", fr: "88 touches et une aile noire brillante. Dedans, c'est une harpe couchée avec des petits marteaux." } },
      { cat: "escenario", emoji: "🎤", x: 2480, y: 400,
        name: { es: "El micrófono", ca: "El micròfon", en: "The microphone", cs: "Mikrofon", fr: "Le micro" },
        fact: { es: "Hace grande la voz más pequeña. Cántale bajito y te oirá todo el teatro.", ca: "Fa gran la veu més petita. Canta-li fluixet i et sentirà tot el teatre.", en: "It makes the smallest voice big. Sing to it softly and the whole theatre hears you.", cs: "Udělá z nejmenšího hlasu velký. Zazpívej mu potichu a uslyší tě celé divadlo.", fr: "Il rend grande la plus petite voix. Chante-lui doucement et tout le théâtre t'entendra." } },
      { cat: "escenario", emoji: "👏", x: 2520, y: 650,
        name: { es: "El público", ca: "El públic", en: "The audience", cs: "Publikum", fr: "Le public" },
        fact: { es: "La otra mitad del concierto. Escucha, sueña... y al final, ¡explota en aplausos!", ca: "L'altra meitat del concert. Escolta, somia... i al final, esclata en aplaudiments!", en: "The other half of the concert. It listens, dreams... and at the end, bursts into applause!", cs: "Druhá polovina koncertu. Poslouchá, sní... a nakonec vybuchne v potlesk!", fr: "L'autre moitié du concert. Il écoute, rêve... et à la fin, explose en applaudissements !" } }
    ]
  },

  /* ---------- CHARLA ---------- */
  chat: {
    keywords: [
      { keys: ["hola", "hello", "hi ", "ahoj", "bonjour", "salut", "bon dia", "buenas"],
        replies: [{ es: "¡Hola, {name}! Justo estaba afinando mis circuitos: do, re, mi... ¡bip! Esa última nota es mía.", ca: "Hola, {name}! Just estava afinant els meus circuits: do, re, mi... bip! Aquesta última nota és meva.", en: "Hi, {name}! I was just tuning my circuits: do, re, mi... beep! That last note is mine.", cs: "Ahoj, {name}! Zrovna jsem si ladil obvody: do, re, mi... píp! Ta poslední nota je moje.", fr: "Salut, {name} ! J'accordais justement mes circuits : do, ré, mi... bip ! Cette dernière note est à moi." }] },
      { keys: ["como estas", "how are you", "jak se mas", "comment ca va", "com estas", "que tal"],
        replies: [{ es: "¡En perfecta armonía! Hoy mi corazón late en compás de tres por cuatro, como un vals. ¿Y tú, {name}?", ca: "En perfecta harmonia! Avui el meu cor batega en compàs de tres per quatre, com un vals. I tu, {name}?", en: "In perfect harmony! Today my heart beats in three-four time, like a waltz. And you, {name}?", cs: "V dokonalé harmonii! Dnes mi srdce bije ve tříčtvrtečním taktu, jako valčík. A ty, {name}?", fr: "En parfaite harmonie ! Aujourd'hui, mon cœur bat à trois temps, comme une valse. Et toi, {name} ?" }] },
      { keys: ["cancion", "musica", "music", "song", "sing", "pisnicka", "hudba", "chanson", "musique", "canço", "canta", "zpiv", "chante"],
        replies: [{ es: "¡Has venido al lugar perfecto! Aquí TODO es música. ¿Vamos al Karaoke y montamos nuestro propio concierto?", ca: "Has vingut al lloc perfecte! Aquí TOT és música. Anem al Karaoke i muntem el nostre propi concert?", en: "You came to the perfect place! EVERYTHING here is music. Shall we go to Karaoke and put on our own concert?", cs: "Přišla jsi na to pravé místo! Tady je VŠECHNO hudba. Půjdeme na karaoke a uspořádáme vlastní koncert?", fr: "Tu es venue au bon endroit ! Ici, TOUT est musique. On va au karaoké monter notre propre concert ?" }] },
      { keys: ["chiste", "joke", "vtip", "blague", "acudit", "broma"],
        replies: [
          { es: "¿Qué le dice el tambor a la batería? ¡Cómo has crecido, hijo! Ja, ja.", ca: "Què li diu el tambor a la bateria? Com has crescut, fill! Ha, ha.", en: "What does the drum say to the drum kit? My, how you have grown, son! Ha ha.", cs: "Co říká bubínek bicí soupravě? Ty jsi ale vyrostl, synku! Ha ha.", fr: "Que dit le tambour à la batterie ? Comme tu as grandi, fiston ! Ha ha." },
          { es: "¿Por qué el piano no puede abrir la puerta? ¡Porque tiene las llaves dentro! Ji, ji.", ca: "Per què el piano no pot obrir la porta? Perquè té les claus a dins! Hi, hi.", en: "Why can the piano not get into its house? Because it left its keys inside! Hee hee.", cs: "Proč se klavír nedostane domů? Protože má klíče uvnitř! Chi chi.", fr: "Pourquoi le piano ne peut pas ouvrir la porte ? Parce que ses touches (clés !) sont dedans ! Hi hi." }] },
      { keys: ["te quiero", "love you", "t'estimo", "testimo", "mam te rad", "je t'aime", "jetaime"],
        replies: [{ es: "¡Y yo a ti, {name}! Si mi cariño fuera una orquesta, ahora mismo estarían tocando los cien músicos a la vez.", ca: "I jo a tu, {name}! Si la meva estima fos una orquestra, ara mateix estarien tocant els cent músics alhora.", en: "I love you too, {name}! If my love were an orchestra, all hundred musicians would be playing right now.", cs: "Já tebe taky, {name}! Kdyby moje láska byla orchestr, právě teď by hrálo všech sto muzikantů najednou.", fr: "Moi aussi je t'aime, {name} ! Si mon affection était un orchestre, les cent musiciens joueraient tous en ce moment." }] },
      { keys: ["triste", "sad", "smutn", "llorar", "plorar", "cry", "chagrin"],
        replies: [{ es: "Ven, {name}. ¿Sabes que hay canciones para llorar y está bien usarlas? La música abraza. Cuéntame qué te pasa y luego, si quieres, cantamos bajito.", ca: "Vine, {name}. Saps que hi ha cançons per plorar i està bé fer-les servir? La música abraça. Explica'm què et passa i després, si vols, cantem fluixet.", en: "Come here, {name}. Did you know there are songs for crying, and it is okay to use them? Music hugs. Tell me what is wrong and then, if you want, we sing softly.", cs: "Pojď sem, {name}. Víš, že existují písničky na plakání a je v pořádku je použít? Hudba objímá. Pověz mi, co se děje, a pak si, jestli chceš, tiše zazpíváme.", fr: "Viens, {name}. Tu sais qu'il existe des chansons pour pleurer et qu'on a le droit de s'en servir ? La musique fait des câlins. Raconte-moi ce qui ne va pas et après, si tu veux, on chante doucement." }] },
      { keys: ["donde estas", "where are you", "kde jsi", "ou es tu", "on ets"],
        replies: [{ es: "Estoy dentro del piano de cola, ordenando los martillitos. ¡Aquí dentro suena todo el doble de bonito!", ca: "Soc dins del piano de cua, ordenant els martellets. Aquí dins sona tot el doble de bonic!", en: "I am inside the grand piano, tidying the little hammers. Everything sounds twice as lovely in here!", cs: "Jsem uvnitř koncertního křídla a rovnám kladívka. Tady uvnitř zní všechno dvakrát krásněji!", fr: "Je suis dans le piano à queue, en train de ranger les petits marteaux. Ici dedans, tout sonne deux fois plus beau !" }] },
      { keys: ["piano", "klavir"],
        replies: [{ es: "¡El piano tiene 88 teclas! Con las blancas y las negras se pueden tocar todas las canciones del mundo. Todas.", ca: "El piano té 88 tecles! Amb les blanques i les negres es poden tocar totes les cançons del món. Totes.", en: "The piano has 88 keys! With the white and black ones you can play every song in the world. Every single one.", cs: "Klavír má 88 kláves! S bílými a černými se dají zahrát všechny písničky světa. Všechny.", fr: "Le piano a 88 touches ! Avec les blanches et les noires, on peut jouer toutes les chansons du monde. Toutes." }] },
      { keys: ["bailar", "dance", "tancit", "danser", "ballar", "tanec"],
        replies: [{ es: "¡Bailar es dejar que la música mueva tu esqueleto! No hay pasos malos, {name}: si te ríes mientras bailas, lo estás haciendo perfecto.", ca: "Ballar és deixar que la música mogui el teu esquelet! No hi ha passos dolents, {name}: si rius mentre balles, ho estàs fent perfecte.", en: "Dancing is letting the music move your skeleton! There are no wrong steps, {name}: if you laugh while dancing, you are doing it perfectly.", cs: "Tancovat znamená nechat hudbu hýbat tvou kostrou! Neexistují špatné kroky, {name}: když se u tance směješ, děláš to dokonale.", fr: "Danser, c'est laisser la musique bouger ton squelette ! Il n'y a pas de mauvais pas, {name} : si tu ris en dansant, tu le fais parfaitement." }] },
      { keys: ["cole", "school", "escola", "skola", "ecole"],
        replies: [{ es: "¿Qué tal el cole, {name}? ¿Sabías que estudiar música hace crecer el cerebro? ¡Cada canción que aprendes es gimnasia mental!", ca: "Què tal l'escola, {name}? Sabies que estudiar música fa créixer el cervell? Cada cançó que aprens és gimnàstica mental!", en: "How was school, {name}? Did you know studying music makes your brain grow? Every song you learn is mental gymnastics!", cs: "Jaké to bylo ve škole, {name}? Věděla jsi, že studium hudby rozvíjí mozek? Každá písnička je rozcvička pro hlavu!", fr: "C'était comment l'école, {name} ? Tu savais qu'étudier la musique fait grandir le cerveau ? Chaque chanson apprise est de la gymnastique mentale !" }] }
    ],
    fallback: [
      { es: "¿Sabías que las vacas dan más leche escuchando música tranquila? ¡A todo el mundo le gusta un buen concierto!", ca: "Sabies que les vaques donen més llet escoltant música tranquil·la? A tothom li agrada un bon concert!", en: "Did you know cows give more milk listening to calm music? Everyone loves a good concert!", cs: "Věděla jsi, že krávy dávají víc mléka při klidné hudbě? Dobrý koncert má rád každý!", fr: "Tu savais que les vaches donnent plus de lait en écoutant de la musique calme ? Tout le monde aime un bon concert !" },
      { es: "Tu corazón es tu primer tambor: llevas el ritmo dentro desde antes de nacer.", ca: "El teu cor és el teu primer tambor: portes el ritme a dins des d'abans de néixer.", en: "Your heart is your first drum: you have carried the beat inside since before you were born.", cs: "Tvé srdce je tvůj první buben: rytmus v sobě nosíš už od doby před narozením.", fr: "Ton cœur est ton premier tambour : tu portes le rythme en toi depuis avant ta naissance." },
      { es: "Beethoven componía sinfonías enteras estando sordo: las oía dentro de su cabeza. El cerebro es mágico.", ca: "Beethoven componia simfonies senceres estant sord: les sentia dins del seu cap. El cervell és màgic.", en: "Beethoven composed whole symphonies while deaf: he heard them inside his head. The brain is magical.", cs: "Beethoven skládal celé symfonie, i když byl hluchý: slyšel je ve své hlavě. Mozek je kouzelný.", fr: "Beethoven composait des symphonies entières en étant sourd : il les entendait dans sa tête. Le cerveau est magique." },
      { es: "{name}, equivocarse tocando no es fallar: es ensayar. Todos los grandes músicos fallaron mil notas primero.", ca: "{name}, equivocar-se tocant no és fallar: és assajar. Tots els grans músics van fallar mil notes primer.", en: "{name}, playing a wrong note is not failing: it is rehearsing. Every great musician missed a thousand notes first.", cs: "{name}, splést se při hraní není selhání: je to zkoušení. Každý velký muzikant nejdřív zkazil tisíc not.", fr: "{name}, se tromper en jouant, ce n'est pas échouer : c'est répéter. Tous les grands musiciens ont raté mille notes d'abord." },
      { es: "¿Cuál es tu canción favorita? Yo tengo una para cada humor: una para saltar, una para pensar y una para los abrazos.", ca: "Quina és la teva cançó preferida? Jo en tinc una per a cada humor: una per saltar, una per pensar i una per a les abraçades.", en: "What is your favourite song? I have one for every mood: one for jumping, one for thinking and one for hugs.", cs: "Kterou písničku máš nejradši? Já mám jednu pro každou náladu: jednu na skákání, jednu na přemýšlení a jednu na objímání.", fr: "Quelle est ta chanson préférée ? J'en ai une pour chaque humeur : une pour sauter, une pour réfléchir et une pour les câlins." },
      { es: "El silencio también es música: es la pausa donde la canción respira. Shhh... ¿lo oyes?", ca: "El silenci també és música: és la pausa on la cançó respira. Xxxt... ho sents?", en: "Silence is music too: it is the pause where the song breathes. Shhh... can you hear it?", cs: "Ticho je taky hudba: je to pauza, ve které písnička dýchá. Pšš... slyšíš ho?", fr: "Le silence aussi est de la musique : c'est la pause où la chanson respire. Chut... tu l'entends ?" }
    ]
  }
});
