"use strict";
/* ============================================================
   Contenido de DALÍ (parte B): historias ramificadas,
   canciones, traductor, mapa de exploración, charla,
   tarjeta de portada y celebración del taller.
   ============================================================ */

(function () {
  const daIco = (inner, vb) => `<svg viewBox="${vb || "0 0 100 100"}" width="100%" height="100%">${inner}</svg>`;

  Object.assign(THEMES.dali.content, {

    /* ---------- HISTORIAS (ramifican de verdad) ---------- */
    stories: [
      {
        id: "reloj", emoji: "⏰", start: "n1",
        title: { es: "El reloj que se derritió de sueño", ca: "El rellotge que es va fondre de son", en: "The Clock That Melted from Sleepiness", cs: "Hodiny, které se roztekly ospalostí", fr: "La montre qui a fondu de sommeil" },
        nodes: {
          n1: {
            text: { es: "En el museo de Figueres, el reloj grande bosteza tan fuerte que empieza a derretirse pared abajo, ¡plof, plof! {name}, ¡se nos escurre!", ca: "Al museu de Figueres, el rellotge gran badalla tan fort que comença a fondre's paret avall, plof, plof! {name}, se'ns escola!", en: "In the Figueres museum, the big clock yawns so hard that it starts melting down the wall, plop, plop! {name}, it is slipping away!", cs: "V muzeu ve Figueres velké hodiny zívnou tak silně, že se začnou roztékat po zdi, žbluňk, žbluňk! {name}, utíkají nám!", fr: "Dans le musée de Figueres, la grande montre bâille si fort qu'elle commence à fondre le long du mur, plouf, plouf ! {name}, elle nous échappe !" },
            choices: [
              { t: { es: "¡Lo recogemos con una cesta de panes blanditos!", ca: "El recollim amb un cistell de pans tous!", en: "Let's catch it in a basket of soft bread!", cs: "Chytíme je do košíku měkkých chlebů!", fr: "On l'attrape dans un panier de pains tout mous !" }, go: "n2a" },
              { t: { es: "¡Llamamos a Gala, que lo sabe todo!", ca: "Cridem la Gala, que ho sap tot!", en: "Let's call Gala, she knows everything!", cs: "Zavoláme Galu, ta ví všechno!", fr: "Appelons Gala, elle sait tout !" }, go: "n2b" }
            ]
          },
          n2a: {
            text: { es: "El reloj cae en la cesta y suspira, comodísimo. Entre bostezo y bostezo confiesa: tiene muchísimo sueño, pero le da miedo dormirse. ¡Cree que el tiempo se parará si él hace la siesta!", ca: "El rellotge cau al cistell i sospira, comodíssim. Entre badall i badall confessa: té moltíssima son, però li fa por adormir-se. Creu que el temps es pararà si ell fa la migdiada!", en: "The clock lands in the basket and sighs, super comfy. Between yawns it confesses: it is very, very sleepy, but scared of falling asleep. It thinks time will stop if it takes a nap!", cs: "Hodiny spadnou do košíku a spokojeně si povzdechnou. Mezi zívnutími se přiznají: jsou strašně ospalé, ale bojí se usnout. Myslí si, že když si zdřímnou, čas se zastaví!", fr: "La montre tombe dans le panier et soupire, très à l'aise. Entre deux bâillements, elle avoue : elle a très sommeil, mais elle a peur de s'endormir. Elle croit que le temps s'arrêtera si elle fait la sieste !" },
            choices: [
              { t: { es: "Le explicamos que el tiempo también descansa", ca: "Li expliquem que el temps també descansa", en: "We explain that time rests too", cs: "Vysvětlíme mu, že i čas odpočívá", fr: "On lui explique que le temps aussi se repose" }, go: "n3a" },
              { t: { es: "Lo llevamos a la rama del olivo de Portlligat", ca: "El portem a la branca de l'olivera de Portlligat", en: "We take it to the olive branch in Portlligat", cs: "Odneseme je na větev olivovníku v Portlligatu", fr: "On l'emmène sur la branche de l'olivier de Portlligat" }, go: "n3b" }
            ]
          },
          n2b: {
            text: { es: "Gala llega con su libreta y lo apunta todo: 'Reloj cansado, bostezo número mil'. Y sentencia: 'A los relojes cansados hay que llevarlos de excursión'. ¿Adónde, {name}?", ca: "La Gala arriba amb la seva llibreta i ho apunta tot: 'Rellotge cansat, badall número mil'. I sentencia: 'Els rellotges cansats, cal portar-los d'excursió'. On, {name}?", en: "Gala arrives with her notebook and writes it all down: 'Tired clock, yawn number one thousand'. Then she declares: 'Tired clocks must be taken on a trip'. Where to, {name}?", cs: "Gala přijde se svým zápisníkem a všechno si zapíše: 'Unavené hodiny, zívnutí číslo tisíc'. A rozhodne: 'Unavené hodiny se musí vzít na výlet'. Kam, {name}?", fr: "Gala arrive avec son carnet et note tout : « Montre fatiguée, bâillement numéro mille ». Puis elle déclare : « Les montres fatiguées, il faut les emmener en excursion ». Où ça, {name} ?" },
            choices: [
              { t: { es: "¡A que la tramontana lo despeine!", ca: "Que la tramuntana el despentini!", en: "Let the tramuntana ruffle it!", cs: "Ať je tramontána provětrá!", fr: "Que la tramontane la décoiffe !" }, go: "n3c" },
              { t: { es: "A la rama del olivo, el mejor sitio para siestas", ca: "A la branca de l'olivera, el millor lloc per fer la migdiada", en: "To the olive branch, the best napping spot", cs: "Na větev olivovníku, nejlepší místo na šlofík", fr: "Sur la branche de l'olivier, le meilleur coin à sieste" }, go: "n3b" }
            ]
          },
          n3a: {
            text: { es: "Le contáis que el sol se echa siestas detrás de las nubes y el mar descansa cuando está en calma... y el mundo sigue girando. El reloj abre mucho los ojos: '¿De verdad?'. Y se relaja enterito.", ca: "Li expliqueu que el sol fa migdiades darrere els núvols i que el mar descansa quan està en calma... i el món segueix girant. El rellotge obre molt els ulls: 'De debò?'. I es relaxa tot sencer.", en: "You tell it that the sun naps behind the clouds and the sea rests when it is calm... and the world keeps turning. The clock opens its eyes wide: 'Really?'. And it relaxes completely.", cs: "Povíte mu, že slunce si zdřímne za mraky a moře odpočívá, když je klidné... a svět se točí dál. Hodiny vykulí oči: 'Opravdu?'. A celé se uvolní.", fr: "Vous lui racontez que le soleil fait la sieste derrière les nuages et que la mer se repose quand elle est calme... et le monde continue de tourner. La montre ouvre grand les yeux : « C'est vrai ? ». Et elle se détend complètement." },
            choices: [
              { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
            ]
          },
          n3b: {
            text: { es: "¡La rama del olivo, el sitio clásico! El reloj se cuelga como una bufanda al sol, se estira mimoso y suspira: 'Aaah, ahora entiendo por qué Dalí me pintaba aquí'.", ca: "La branca de l'olivera, el lloc clàssic! El rellotge s'hi penja com una bufanda al sol, s'estira tot mimós i sospira: 'Aaah, ara entenc per què Dalí em pintava aquí'.", en: "The olive branch, the classic spot! The clock drapes itself like a scarf in the sun, stretches happily and sighs: 'Aaah, now I understand why Dalí painted me here'.", cs: "Větev olivovníku, klasika! Hodiny se přes ni přehodí jako šála na sluníčku, rozkošnicky se protáhnou a vzdychnou: 'Ááá, teď chápu, proč mě tu Dalí maloval'.", fr: "La branche de l'olivier, le coin classique ! La montre s'y suspend comme une écharpe au soleil, s'étire de plaisir et soupire : « Aaah, maintenant je comprends pourquoi Dalí me peignait ici »." },
            choices: [
              { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
            ]
          },
          n3c: {
            text: { es: "¡Fuuu! La tramontana sopla suave y las agujas del reloj giran como un molinillo. El reloj se ríe a carcajadas: '¡Para, para, que me da la risa!'. Queda fresquito, pero aún con sueño.", ca: "Fuuu! La tramuntana bufa suau i les agulles del rellotge giren com un molinet. El rellotge riu a cor què vols: 'Para, para, que em fa pessigolles!'. Queda fresquet, però encara amb son.", en: "Whoosh! The tramuntana blows gently and the clock's hands spin like a pinwheel. The clock bursts out laughing: 'Stop, stop, it tickles!'. It feels fresh now, but still sleepy.", cs: "Fúúú! Tramontána jemně zafouká a ručičky hodin se roztočí jako větrník. Hodiny se rozesmějí: 'Přestaň, přestaň, to lechtá!'. Jsou svěží, ale pořád ospalé.", fr: "Fouuu ! La tramontane souffle doucement et les aiguilles de la montre tournent comme un moulinet. La montre éclate de rire : « Arrête, arrête, ça chatouille ! ». La voilà toute fraîche, mais encore endormie." },
            choices: [
              { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
            ]
          },
          n4: {
            text: { es: "El reloj, ya casi dormido, pregunta bajito: 'Si me duermo... ¿quién guardará la hora de jugar de {name}?'. Buena pregunta. ¿Qué le decimos?", ca: "El rellotge, ja gairebé adormit, pregunta fluixet: 'Si m'adormo... qui guardarà l'hora de jugar de {name}?'. Bona pregunta. Què li diem?", en: "The clock, almost asleep now, asks quietly: 'If I fall asleep... who will keep {name}'s playtime?'. Good question. What do we tell it?", cs: "Hodiny, už skoro spící, se tiše zeptají: 'Když usnu... kdo pohlídá čas na hraní pro {name}?'. Dobrá otázka. Co mu odpovíme?", fr: "La montre, presque endormie, demande tout bas : « Si je m'endors... qui gardera l'heure de jouer de {name} ? ». Bonne question. Que lui répond-on ?" },
            choices: [
              { t: { es: "La guardamos nosotros: jugar es estar juntos", ca: "La guardem nosaltres: jugar és estar junts", en: "We will keep it: playtime is being together", cs: "Pohlídáme ho my: hrát si znamená být spolu", fr: "On la garde, nous : jouer, c'est être ensemble" }, go: "n5a" },
              { t: { es: "Se la pedimos al bigote de Dalí", ca: "La demanem al bigoti de Dalí", en: "We ask Dalí's moustache", cs: "Poprosíme Dalího knír", fr: "On la confie à la moustache de Dalí" }, go: "n5b" }
            ]
          },
          n5a: {
            text: { es: "{name} promete: 'Cuando estemos juntos, siempre será la hora de jugar. No hace falta mirar ningún reloj'. El reloj sonríe con las agujas y se pone blandito de felicidad.", ca: "{name} promet: 'Quan estiguem junts, sempre serà l'hora de jugar. No cal mirar cap rellotge'. El rellotge somriu amb les agulles i es posa tou tou de felicitat.", en: "{name} promises: 'When we are together, it will always be playtime. No need to look at any clock'. The clock smiles with its hands and goes all soft with happiness.", cs: "{name} slíbí: 'Když budeme spolu, vždycky bude čas na hraní. Na žádné hodiny se dívat nemusíme'. Hodiny se usmějí ručičkami a štěstím celé změknou.", fr: "{name} promet : « Quand on sera ensemble, ce sera toujours l'heure de jouer. Pas besoin de regarder une montre ». La montre sourit avec ses aiguilles et devient toute molle de bonheur." },
            choices: [
              { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e1" }
            ]
          },
          n5b: {
            text: { es: "El bigote de Dalí acepta encantado y se pone firme en las once y diez, la hora más elegante. 'Yo vigilo', dice con las puntas bien altas. Hasta las hormigas lo aplauden.", ca: "El bigoti de Dalí accepta encantat i es posa ferm a les onze i deu, l'hora més elegant. 'Jo vigilo', diu amb les puntes ben altes. Fins i tot les formigues l'aplaudeixen.", en: "Dalí's moustache happily agrees and stands firm at ten past eleven, the most elegant time. 'I am on guard', it says with its tips held high. Even the ants applaud.", cs: "Dalího knír nadšeně souhlasí a postaví se přesně na jedenáct deset, tu nejelegantnější hodinu. 'Já hlídám', prohlásí se špičkami vztyčenými. I mravenci mu tleskají.", fr: "La moustache de Dalí accepte avec joie et se met au garde-à-vous à onze heures dix, l'heure la plus élégante. « Je monte la garde », dit-elle, les pointes bien hautes. Même les fourmis applaudissent." },
            choices: [
              { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e2" }
            ]
          },
          e1: {
            end: true,
            text: { es: "El reloj se duerme sonriendo, derretidito como un quesito feliz. En sus sueños, todas las horas son la hora de jugar con {name}. Lo has entendido antes que nadie: descansar también es importante.", ca: "El rellotge s'adorm somrient, tot fos com un formatget feliç. Als seus somnis, totes les hores són l'hora de jugar amb {name}. Ho has entès abans que ningú: descansar també és important.", en: "The clock falls asleep smiling, melted like a happy little cheese. In its dreams, every hour is playtime with {name}. You understood it before anyone: resting matters too.", cs: "Hodiny usnou s úsměvem, roztečené jako šťastný sýreček. V jejich snech je každá hodina časem na hraní s {name}. Pochopila jsi to dřív než všichni: odpočívat je taky důležité.", fr: "La montre s'endort en souriant, fondue comme un petit fromage heureux. Dans ses rêves, toutes les heures sont l'heure de jouer avec {name}. Tu l'as compris avant tout le monde : se reposer aussi, c'est important." }
          },
          e2: {
            end: true,
            text: { es: "Con el bigote de guardia, el reloj duerme una siesta de campeonato. Al despertar suena como castañuelas de contento: ¡tic-tac, tic-tac! Los amigos se turnan para cuidarse, {name}, y así nadie se cansa.", ca: "Amb el bigoti de guàrdia, el rellotge fa una migdiada de campionat. En despertar-se sona com castanyoles de content: tic-tac, tic-tac! Els amics es tornen per cuidar-se, {name}, i així ningú no es cansa.", en: "With the moustache on guard, the clock takes a champion nap. When it wakes up it ticks like happy castanets: tick-tock, tick-tock! Friends take turns caring for each other, {name}, so nobody gets worn out.", cs: "S knírem na hlídce si hodiny dají šampionský šlofík. Když se probudí, tikají jako veselé kastaněty: tik-tak, tik-tak! Kamarádi se v pomáhání střídají, {name}, a tak se nikdo neunaví.", fr: "Avec la moustache de garde, la montre fait une sieste de championne. À son réveil, elle sonne comme des castagnettes toutes contentes : tic-tac, tic-tac ! Les amis se relaient pour prendre soin les uns des autres, {name}, comme ça personne ne se fatigue." }
          }
        }
      },
      {
        id: "elefante", emoji: "🐘", start: "n1",
        title: { es: "El elefante de patas larguísimas", ca: "L'elefant de potes llarguíssimes", en: "The Elephant with Super Long Legs", cs: "Slon s předlouhýma nohama", fr: "L'éléphant aux pattes très longues" },
        nodes: {
          n1: {
            text: { es: "En la llanura de los sueños, un elefante con patas como zancos llora lagrimones: allá arriba no le llega el olor de una rosa pequeñita que crece a sus pies. ¿Cómo le ayudamos, {name}?", ca: "A la plana dels somnis, un elefant amb potes com xanques plora llagrimots: allà dalt no li arriba l'olor d'una rosa petitona que creix als seus peus. Com l'ajudem, {name}?", en: "On the plain of dreams, an elephant with stilt legs is crying big tears: way up there he cannot smell the tiny rose growing at his feet. How do we help him, {name}?", cs: "Na pláni snů pláče slon s nohama jako chůdy veliké slzy: tam nahoru k němu nedoletí vůně malinké růže, která roste u jeho nohou. Jak mu pomůžeme, {name}?", fr: "Sur la plaine des rêves, un éléphant aux pattes en échasses pleure de grosses larmes : là-haut, il ne sent pas le parfum de la petite rose qui pousse à ses pieds. Comment l'aider, {name} ?" },
            choices: [
              { t: { es: "¡Torre de huevos gigantes para subir la rosa!", ca: "Torre d'ous gegants per pujar la rosa!", en: "A tower of giant eggs to lift the rose!", cs: "Věž z obřích vajec, ať růže vyjede nahoru!", fr: "Une tour d'œufs géants pour monter la rose !" }, go: "n2a" },
              { t: { es: "Que las hormigas suban el perfume en cubitos", ca: "Que les formigues pugin el perfum en galledetes", en: "Let the ants carry the scent up in tiny buckets", cs: "Ať mravenci vynesou vůni nahoru v kyblíčcích", fr: "Que les fourmis montent le parfum dans des petits seaux" }, go: "n2b" }
            ]
          },
          n2a: {
            text: { es: "Apilaís huevo sobre huevo, pero ¡uy!, la torre tiembla como un flan. Un huevo se ríe por lo bajo: 'Cosquillas, me hacéis cosquillas'. Esto no aguanta. ¿Plan B?", ca: "Apileu ou sobre ou, però ui!, la torre tremola com un flam. Un ou riu per sota el nas: 'Pessigolles, em feu pessigolles'. Això no aguanta. Pla B?", en: "You stack egg on top of egg, but oops!, the tower wobbles like jelly. One egg giggles quietly: 'Tickles, you are tickling me'. This will not hold. Plan B?", cs: "Skládáte vejce na vejce, ale jejda!, věž se třese jako želé. Jedno vejce se pochichtává: 'Lechtáte, vy mě lechtáte'. Tohle nevydrží. Plán B?", fr: "Vous empilez œuf sur œuf, mais aïe !, la tour tremble comme un flan. Un œuf rigole tout bas : « Chatouilles, vous me chatouillez ». Ça ne tiendra pas. Plan B ?" },
            choices: [
              { t: { es: "Pedimos ayuda al barco con velas de mariposa", ca: "Demanem ajuda al vaixell amb veles de papallona", en: "We ask the boat with butterfly sails for help", cs: "Poprosíme o pomoc loďku s motýlími plachtami", fr: "On demande de l'aide au bateau aux voiles de papillon" }, go: "n3a" },
              { t: { es: "Probamos la escalera de panes", ca: "Provem l'escala de pans", en: "We try the bread-loaf staircase", cs: "Zkusíme schodiště z bochníků chleba", fr: "On essaie l'escalier de pains" }, go: "n3b" }
            ]
          },
          n2b: {
            text: { es: "Las hormigas desfilan con cubitos de perfume, chiquichiqui, pero a mitad de pata... ¡fuuu!, la tramontana se lleva el olor a Cadaqués. Las hormigas se cruzan de bracitos. ¿Y ahora?", ca: "Les formigues desfilen amb galledetes de perfum, chiquichiqui, però a mitja pota... fuuu!, la tramuntana s'endú l'olor cap a Cadaqués. Les formigues es creuen de bracets. I ara?", en: "The ants march up with tiny buckets of scent, chiki-chiki, but halfway up the leg... whoosh!, the tramuntana blows the smell away to Cadaqués. The ants cross their little arms. Now what?", cs: "Mravenci pochodují s kyblíčky vůně, cupity cup, ale v půlce nohy... fúúú!, tramontána odfoukne vůni až do Cadaqués. Mravenci si založí ručičky. Co teď?", fr: "Les fourmis défilent avec leurs petits seaux de parfum, tchiki-tchiki, mais à mi-patte... fouuu !, la tramontane emporte l'odeur jusqu'à Cadaqués. Les fourmis croisent leurs petits bras. Et maintenant ?" },
            choices: [
              { t: { es: "Tejemos un túnel con las nubes alargadas", ca: "Teixim un túnel amb els núvols allargats", en: "We knit a tunnel out of the stretched clouds", cs: "Upleteme tunel z protáhlých mraků", fr: "On tisse un tunnel avec les nuages allongés" }, go: "n3c" },
              { t: { es: "Pedimos ayuda al barco con velas de mariposa", ca: "Demanem ajuda al vaixell amb veles de papallona", en: "We ask the boat with butterfly sails for help", cs: "Poprosíme o pomoc loďku s motýlími plachtami", fr: "On demande de l'aide au bateau aux voiles de papillon" }, go: "n3a" }
            ]
          },
          n3a: {
            text: { es: "El barquito despliega sus velas de mariposa, ¡flap, flap!, y navega por el aire con la rosa a bordo, subiendo en espiral como si el cielo fuera un tobogán al revés.", ca: "El vaixellet desplega les seves veles de papallona, flap, flap!, i navega per l'aire amb la rosa a bord, pujant en espiral com si el cel fos un tobogan al revés.", en: "The little boat unfolds its butterfly sails, flap, flap!, and sails through the air with the rose aboard, spiralling up as if the sky were an upside-down slide.", cs: "Loďka rozvine motýlí plachty, flap, flap!, a pluje vzduchem s růží na palubě. Stoupá ve spirále, jako by nebe bylo skluzavka naruby.", fr: "Le petit bateau déplie ses voiles de papillon, flap, flap !, et navigue dans les airs avec la rose à bord, en montant en spirale comme si le ciel était un toboggan à l'envers." },
            choices: [
              { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
            ]
          },
          n3b: {
            text: { es: "¡La escalera de panes funciona! Los panecillos crujen bajito a cada paso, cric, croc, y tú subes con la rosa en una cestita. Huele tan bien que hasta los peldaños se ponen contentos.", ca: "L'escala de pans funciona! Els panets cruixen fluixet a cada pas, cric, croc, i tu puges amb la rosa en un cistellet. Fa tan bona olor que fins i tot els esglaons es posen contents.", en: "The bread staircase works! The little loaves crunch softly with every step, crick, crock, and you climb up with the rose in a tiny basket. It smells so good that even the steps feel happy.", cs: "Schodiště z chlebů funguje! Bochánky při každém kroku tichounce křupou, křup, křup, a ty stoupáš s růží v košíčku. Voní tak krásně, že i schody mají radost.", fr: "L'escalier de pains fonctionne ! Les petits pains croustillent doucement à chaque pas, cric, croc, et tu montes avec la rose dans un petit panier. Elle sent si bon que même les marches sont contentes." },
            choices: [
              { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
            ]
          },
          n3c: {
            text: { es: "Tejéis las nubes alargadas del Empordà y hacéis un túnel abrigadito. Las hormigas desfilan por dentro, a salvo del viento, y el perfume llega arriba en fila india, gotita a gotita.", ca: "Teixiu els núvols allargats de l'Empordà i feu un túnel abrigadet. Les formigues desfilen per dins, protegides del vent, i el perfum arriba a dalt en fila índia, goteta a goteta.", en: "You knit the stretched clouds of the Empordà into a cosy tunnel. The ants march through it, safe from the wind, and the scent arrives at the top in single file, drop by drop.", cs: "Upletete z protáhlých mraků nad Empordà útulný tunel. Mravenci jím pochodují v bezpečí před větrem a vůně dorazí nahoru v zástupu, kapička po kapičce.", fr: "Vous tissez les nuages allongés de l'Empordà en un tunnel douillet. Les fourmis y défilent, à l'abri du vent, et le parfum arrive en haut en file indienne, goutte par goutte." },
            choices: [
              { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
            ]
          },
          n4: {
            text: { es: "¡La rosa llega por fin a la trompa del elefante! Él respira hondo para olerla... y ¡AAACHÍS!, un estornudo de elefante. Los pétalos salen volando por todas partes. ¿Qué hacemos, {name}?", ca: "La rosa arriba per fi a la trompa de l'elefant! Ell respira fondo per olorar-la... i AAATXIM!, un esternut d'elefant. Els pètals surten volant per tot arreu. Què fem, {name}?", en: "The rose finally reaches the elephant's trunk! He takes a deep breath to smell it... and AAACHOO!, an elephant-sized sneeze. Petals fly everywhere. What do we do, {name}?", cs: "Růže konečně doputuje k chobotu slona! Zhluboka se nadechne, aby si přivoněl... a HEPČÍÍÍK!, sloní kýchnutí. Okvětní lístky létají na všechny strany. Co uděláme, {name}?", fr: "La rose arrive enfin à la trompe de l'éléphant ! Il respire un grand coup pour la sentir... et AAATCHOUM !, un éternuement d'éléphant. Les pétales s'envolent partout. Que fait-on, {name} ?" },
            choices: [
              { t: { es: "¡Reírnos juntos y recoger los pétalos!", ca: "Riure junts i recollir els pètals!", en: "Laugh together and gather the petals!", cs: "Zasmát se spolu a posbírat lístky!", fr: "Rire ensemble et ramasser les pétales !" }, go: "n5a" },
              { t: { es: "Preguntar a la rosa qué quiere hacer ella", ca: "Preguntar a la rosa què vol fer ella", en: "Ask the rose what she wants to do", cs: "Zeptat se růže, co chce udělat ona", fr: "Demander à la rose ce qu'elle veut faire, elle" }, go: "n5b" }
            ]
          },
          n5a: {
            text: { es: "La risa del elefante suena como una trompeta feliz y contagia a todos. Las hormigas recogen los pétalos y los devuelven uno a uno, como piezas de un puzle perfumado.", ca: "El riure de l'elefant sona com una trompeta feliç i s'encomana a tothom. Les formigues recullen els pètals i els tornen un a un, com peces d'un trencaclosques perfumat.", en: "The elephant's laugh sounds like a happy trumpet and everyone catches it. The ants gather the petals and bring them back one by one, like pieces of a perfumed puzzle.", cs: "Sloní smích zní jako veselá trumpeta a nakazí všechny. Mravenci posbírají lístky a vracejí je jeden po druhém jako dílky voňavého puzzle.", fr: "Le rire de l'éléphant sonne comme une trompette joyeuse et tout le monde l'attrape. Les fourmis ramassent les pétales et les rapportent un par un, comme les pièces d'un puzzle parfumé." },
            choices: [
              { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e1" }
            ]
          },
          n5b: {
            text: { es: "La rosa se sacude los pétalos que le quedan, mira al elefante desde abajo y decide algo increíble: '¿Y si en vez de subir una vez... me quedo flotando a tu lado para siempre?'.", ca: "La rosa s'espolsa els pètals que li queden, mira l'elefant des de baix i decideix una cosa increïble: 'I si en comptes de pujar una vegada... em quedo flotant al teu costat per sempre?'.", en: "The rose shakes her remaining petals, looks up at the elephant and decides something incredible: 'What if, instead of coming up just once... I stay floating beside you forever?'.", cs: "Růže si oklepe zbylé lístky, podívá se na slona zezdola a rozhodne se pro něco neuvěřitelného: 'Co kdybych místo jednoho výletu nahoru... zůstala vznášet se vedle tebe napořád?'.", fr: "La rose secoue les pétales qui lui restent, regarde l'éléphant d'en bas et décide quelque chose d'incroyable : « Et si, au lieu de monter une seule fois... je restais flotter à côté de toi pour toujours ? »." },
            choices: [
              { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e2" }
            ]
          },
          e1: {
            end: true,
            text: { es: "Los pétalos caen como confeti perfumado y cada amigo se guarda uno de recuerdo. El elefante ya no está triste: ha aprendido que pedir ayuda trae amigos... ¡y los amigos llegan a todas partes, {name}!", ca: "Els pètals cauen com confeti perfumat i cada amic se'n guarda un de record. L'elefant ja no està trist: ha après que demanar ajuda porta amics... i els amics arriben a tot arreu, {name}!", en: "The petals fall like perfumed confetti and every friend keeps one as a souvenir. The elephant is not sad anymore: he has learned that asking for help brings friends... and friends can reach anywhere, {name}!", cs: "Lístky padají jako voňavé konfety a každý kamarád si jeden schová na památku. Slon už není smutný: naučil se, že poprosit o pomoc přináší kamarády... a kamarádi dosáhnou všude, {name}!", fr: "Les pétales tombent comme des confettis parfumés et chaque ami en garde un en souvenir. L'éléphant n'est plus triste : il a appris que demander de l'aide amène des amis... et les amis arrivent partout, {name} !" }
          },
          e2: {
            end: true,
            text: { es: "Y así nació la rosa flotante de los cuadros de Dalí: flota justo a la altura de la trompa, sin globo ni cuerda. Ahora el elefante la huele cada mañana. Algunos problemas se arreglan con un poquito de magia y muchos amigos, {name}.", ca: "I així va néixer la rosa flotant dels quadres de Dalí: flota just a l'altura de la trompa, sense globus ni corda. Ara l'elefant l'olora cada matí. Alguns problemes s'arreglen amb una miqueta de màgia i molts amics, {name}.", en: "And that is how the floating rose of Dalí's paintings was born: it floats right at trunk height, with no balloon and no string. Now the elephant smells it every morning. Some problems are solved with a little magic and lots of friends, {name}.", cs: "A tak se zrodila vznášející se růže z Dalího obrazů: vznáší se přesně ve výšce chobotu, bez balonku a bez provázku. Slon si k ní teď přivoní každé ráno. Některé problémy se vyřeší troškou kouzla a spoustou kamarádů, {name}.", fr: "Et c'est ainsi qu'est née la rose flottante des tableaux de Dalí : elle flotte juste à la hauteur de la trompe, sans ballon ni ficelle. Maintenant, l'éléphant la sent chaque matin. Certains problèmes se résolvent avec un peu de magie et beaucoup d'amis, {name}." }
          }
        }
      },
      {
        id: "huevo", emoji: "🥚", start: "n1",
        title: { es: "El huevo gigante del tejado", ca: "L'ou gegant de la teulada", en: "The Giant Egg on the Roof", cs: "Obří vejce na střeše", fr: "L'œuf géant du toit" },
        nodes: {
          n1: {
            text: { es: "¡Alarma en Figueres! Uno de los huevos gigantes del museo se balancea: toc, toc... ¡algo llama desde DENTRO! Todo el pueblo mira hacia arriba. ¿Qué hacemos, {name}?", ca: "Alarma a Figueres! Un dels ous gegants del museu es balanceja: toc, toc... alguna cosa truca des de DINS! Tot el poble mira cap amunt. Què fem, {name}?", en: "Alarm in Figueres! One of the museum's giant eggs is rocking: knock, knock... something is knocking from INSIDE! The whole town looks up. What do we do, {name}?", cs: "Poplach ve Figueres! Jedno z obřích vajec na muzeu se kýve: ťuk, ťuk... něco klepe ZEVNITŘ! Celé město se dívá nahoru. Co uděláme, {name}?", fr: "Alerte à Figueres ! Un des œufs géants du musée se balance : toc, toc... quelque chose frappe de l'INTÉRIEUR ! Toute la ville regarde en l'air. Que fait-on, {name} ?" },
            choices: [
              { t: { es: "Subimos por la cúpula de cristal a escuchar", ca: "Pugem per la cúpula de vidre a escoltar", en: "We climb the glass dome to listen", cs: "Vylezeme po skleněné kupoli a poslechneme si to", fr: "On grimpe sur la coupole de verre pour écouter" }, go: "n2a" },
              { t: { es: "Ponemos colchones de nubes por si rueda", ca: "Posem matalassos de núvols per si roda", en: "We lay cloud mattresses in case it rolls", cs: "Nachystáme matrace z mraků, kdyby se skutálelo", fr: "On installe des matelas de nuages au cas où il roule" }, go: "n2b" }
            ]
          },
          n2a: {
            text: { es: "Pegas la oreja al huevo y... ¡dentro hay una cancioncita! Y lo mejor: cuando tú cantas, el huevo responde. ¿Cómo seguimos la conversación, {name}?", ca: "Enganxes l'orella a l'ou i... a dins hi ha una cançoneta! I el millor: quan tu cantes, l'ou respon. Com seguim la conversa, {name}?", en: "You press your ear against the egg and... there is a little song inside! Best of all: when you sing, the egg sings back. How do we keep the conversation going, {name}?", cs: "Přiložíš ucho k vejci a... uvnitř zní písnička! A nejlepší je, že když zazpíváš ty, vejce odpoví. Jak budeme v rozhovoru pokračovat, {name}?", fr: "Tu colles ton oreille contre l'œuf et... il y a une petite chanson dedans ! Le meilleur : quand tu chantes, l'œuf répond. Comment continuer la conversation, {name} ?" },
            choices: [
              { t: { es: "Le cantamos una nana bajito", ca: "Li cantem una cançó de bressol fluixet", en: "We sing it a soft lullaby", cs: "Zazpíváme mu tichounkou ukolébavku", fr: "On lui chante une berceuse tout bas" }, go: "n3a" },
              { t: { es: "Tocamos ritmos: toc, toc-toc, ¡toc!", ca: "Toquem ritmes: toc, toc-toc, toc!", en: "We tap rhythms: knock, knock-knock, knock!", cs: "Ťukáme rytmy: ťuk, ťuk-ťuk, ťuk!", fr: "On tape des rythmes : toc, toc-toc, toc !" }, go: "n3b" }
            ]
          },
          n2b: {
            text: { es: "Con la tramontana de ayudante, apiláis nubes alargadas como colchones. Justo a tiempo: el huevo rueda tejado abajo, ¡boing, boing!, rebota mullidito y aterriza riéndose como un tambor. Se ha hecho amigo vuestro.", ca: "Amb la tramuntana d'ajudant, apileu núvols allargats com matalassos. Just a temps: l'ou roda teulada avall, boing, boing!, rebota tou tou i aterra rient com un tambor. S'ha fet amic vostre.", en: "With the tramuntana as your helper, you pile up stretched clouds like mattresses. Just in time: the egg rolls off the roof, boing, boing!, bounces softly and lands laughing like a drum. Now it is your friend.", cs: "S tramontánou jako pomocnicí navršíte protáhlé mraky jako matrace. Právě včas: vejce se skutálí ze střechy, hop, hop!, měkce se odrazí a přistane se smíchem jako buben. Teď je váš kamarád.", fr: "Avec la tramontane comme assistante, vous empilez des nuages allongés comme des matelas. Juste à temps : l'œuf roule du toit, boing, boing !, rebondit en douceur et atterrit en riant comme un tambour. Le voilà votre ami." },
            choices: [
              { t: { es: "Jugamos con él a los ritmos: ¡toc, toc-toc!", ca: "Juguem amb ell als ritmes: toc, toc-toc!", en: "We play rhythm games with it: knock, knock-knock!", cs: "Hrajeme si s ním na rytmy: ťuk, ťuk-ťuk!", fr: "On joue aux rythmes avec lui : toc, toc-toc !" }, go: "n3b" }
            ]
          },
          n3a: {
            text: { es: "Con la nana, el huevo se mece despacito... y abre una ventanita redonda, como la de Anna Maria. Por dentro sale una luz dorada y calentita que huele a pan recién hecho.", ca: "Amb la cançó de bressol, l'ou es bressola a poc a poc... i obre una finestreta rodona, com la de l'Anna Maria. Per dins surt una llum daurada i calentona que fa olor de pa acabat de fer.", en: "With the lullaby, the egg rocks gently... and opens a little round window, like Anna Maria's. A warm golden light comes from inside, smelling of freshly baked bread.", cs: "Při ukolébavce se vejce pomalu kolébá... a otevře kulaté okénko jako to Anny Marie. Zevnitř září teplé zlaté světlo a voní jako čerstvě upečený chléb.", fr: "Avec la berceuse, l'œuf se berce doucement... et ouvre une petite fenêtre ronde, comme celle d'Anna Maria. Une lumière dorée et chaude en sort, avec une odeur de pain tout frais." },
            choices: [
              { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
            ]
          },
          n3b: {
            text: { es: "¡El huevo es un campeón del ritmo! A cada toc-toc responde con otro más gracioso, y al final le entra tal ataque de risa que le sale una grieta... ¡con forma de sonrisa!", ca: "L'ou és un campió del ritme! A cada toc-toc respon amb un altre de més divertit, i al final li agafa un atac de riure tan gros que li surt una esquerda... amb forma de somriure!", en: "The egg is a rhythm champion! It answers every knock-knock with a funnier one, and in the end it gets such a fit of giggles that a crack appears... shaped like a smile!", cs: "Vejce je mistr rytmu! Na každé ťuk-ťuk odpoví ještě vtipněji, a nakonec dostane takový záchvat smíchu, že se na něm objeví prasklina... ve tvaru úsměvu!", fr: "L'œuf est un champion du rythme ! À chaque toc-toc, il répond par un plus drôle, et à la fin il attrape un tel fou rire qu'une fissure apparaît... en forme de sourire !" },
            choices: [
              { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
            ]
          },
          n4: {
            text: { es: "El huevo carraspea, ejem, y habla por fin: 'Estoy a punto de abrirme. Pero solo si me prometéis una cosa: lo que salga de mí podrá ser LO QUE QUIERA ser'. ¿Qué respondemos, {name}?", ca: "L'ou s'escura la gola, ehem, i parla per fi: 'Estic a punt d'obrir-me. Però només si em prometeu una cosa: el que surti de mi podrà ser EL QUE VULGUI ser'. Què responem, {name}?", en: "The egg clears its throat, ahem, and finally speaks: 'I am about to open. But only if you promise me one thing: whatever comes out of me can be WHATEVER it wants to be'. What do we answer, {name}?", cs: "Vejce si odkašle, ehm, a konečně promluví: 'Chystám se otevřít. Ale jen když mi slíbíte jednu věc: to, co ze mě vyleze, smí být ČÍMKOLI bude chtít'. Co odpovíme, {name}?", fr: "L'œuf se racle la gorge, hum, et parle enfin : « Je suis sur le point de m'ouvrir. Mais seulement si vous me promettez une chose : ce qui sortira de moi pourra être TOUT CE QU'IL voudra être ». Que répond-on, {name} ?" },
            choices: [
              { t: { es: "¡Prometido, palabra de explorador!", ca: "Promès, paraula d'explorador!", en: "We promise, explorer's honour!", cs: "Slibujeme, na průzkumnické slovo!", fr: "Promis, parole d'explorateur !" }, go: "n5a" },
              { t: { es: "Antes, preguntarle: ¿y tú qué sueñas ser?", ca: "Abans, preguntar-li: i tu què somies ser?", en: "First, ask it: and what do YOU dream of being?", cs: "Nejdřív se zeptat: a čím sníš být ty?", fr: "D'abord, lui demander : et toi, tu rêves d'être quoi ?" }, go: "n5b" }
            ]
          },
          n5a: {
            text: { es: "¡CRAC! El huevo se abre como una flor y sale volando una bandada de mariposas doradas que llevan, entre todas, un sueño chiquitín recién nacido que todavía no sabe qué será. ¡Y no le hace falta saberlo!", ca: "CRAC! L'ou s'obre com una flor i en surt volant un vol de papallones daurades que porten, entre totes, un somni petitó acabat de néixer que encara no sap què serà. I no li cal saber-ho!", en: "CRACK! The egg opens like a flower and out flies a flock of golden butterflies carrying, all together, a newborn little dream that does not know yet what it will be. And it does not need to know!", cs: "KŘUP! Vejce se otevře jako květina a ven vyletí hejno zlatých motýlů. Společně nesou čerstvě narozený snížek, který ještě neví, čím bude. A ani to vědět nepotřebuje!", fr: "CRAC ! L'œuf s'ouvre comme une fleur et une volée de papillons dorés s'envole, portant tous ensemble un petit rêve nouveau-né qui ne sait pas encore ce qu'il sera. Et il n'a pas besoin de le savoir !" },
            choices: [
              { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e1" }
            ]
          },
          n5b: {
            text: { es: "El huevo se pone colorado (un huevo colorado, ¡cosa rara!) y susurra su secreto: 'Sueño con ser un museo chiquitín... para guardar los sueños de los niños y las niñas'.", ca: "L'ou es posa vermell (un ou vermell, quina cosa més rara!) i xiuxiueja el seu secret: 'Somio ser un museu petitó... per guardar els somnis dels nens i les nenes'.", en: "The egg blushes (a blushing egg, how strange!) and whispers its secret: 'I dream of being a tiny museum... to keep children's dreams safe'.", cs: "Vejce se začervená (červené vejce, to je věc!) a zašeptá své tajemství: 'Sním o tom, že budu malinké muzeum... kde se budou schovávat dětské sny'.", fr: "L'œuf rougit (un œuf qui rougit, comme c'est étrange !) et chuchote son secret : « Je rêve d'être un tout petit musée... pour garder les rêves des enfants »." },
            choices: [
              { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "e2" }
            ]
          },
          e1: {
            end: true,
            text: { es: "Las mariposas pintan el cielo del Empordà de dorado y la cáscara vacía se queda en la plaza como columpio para todos. El sueño chiquitín crece libre y feliz. Lo lograste, {name}: los sueños solo piden una promesa... poder elegir.", ca: "Les papallones pinten el cel de l'Empordà de daurat i la closca buida es queda a la plaça com a gronxador per a tothom. El somni petitó creix lliure i feliç. Ho has aconseguit, {name}: els somnis només demanen una promesa... poder triar.", en: "The butterflies paint the Empordà sky golden and the empty shell stays in the square as a swing for everyone. The little dream grows free and happy. You did it, {name}: dreams only ask for one promise... to be able to choose.", cs: "Motýli namalují nebe nad Empordà dozlatova a prázdná skořápka zůstane na náměstí jako houpačka pro všechny. Snížek roste svobodně a šťastně. Dokázala jsi to, {name}: sny si žádají jen jeden slib... aby si mohly vybrat.", fr: "Les papillons peignent le ciel de l'Empordà en doré et la coquille vide reste sur la place comme balançoire pour tout le monde. Le petit rêve grandit libre et heureux. Tu as réussi, {name} : les rêves ne demandent qu'une promesse... pouvoir choisir." }
          },
          e2: {
            end: true,
            text: { es: "Y así se queda: un huevo-museo en el tejado, con su ventanita redonda donde los niños dejan dibujos de sus sueños. El museo de Dalí creció un sueño más. Compartir un sueño lo hace más grande, {name}: el tuyo ya está ahí dentro.", ca: "I així es queda: un ou-museu a la teulada, amb la seva finestreta rodona on els nens deixen dibuixos dels seus somnis. El museu de Dalí va créixer un somni més. Compartir un somni el fa més gran, {name}: el teu ja és allà dins.", en: "And so it stays: an egg-museum on the roof, with its little round window where children leave drawings of their dreams. Dalí's museum grew by one more dream. Sharing a dream makes it bigger, {name}: yours is already in there.", cs: "A tak to zůstane: vejce-muzeum na střeše s kulatým okénkem, kam děti nosí obrázky svých snů. Dalího muzeum vyrostlo o jeden sen. Sdílený sen se zvětšuje, {name}: ten tvůj už je tam uvnitř.", fr: "Et il reste ainsi : un œuf-musée sur le toit, avec sa petite fenêtre ronde où les enfants déposent des dessins de leurs rêves. Le musée de Dalí a grandi d'un rêve de plus. Partager un rêve le rend plus grand, {name} : le tien y est déjà." }
          }
        }
      }
    ],

    /* ---------- KARAOKE ---------- */
    songs: [
      { emoji: "⏰",
        title: { es: "La canción del reloj blando", ca: "La cançó del rellotge tou", en: "The Melting Clock Song", cs: "Písnička o měkkých hodinách", fr: "La chanson de la montre molle" },
        lines: [
          { es: "Un reloj muy dormilón,", ca: "El rellotge s'ha desfet,", en: "There's a clock so soft and sweet,", cs: "Měkké hodiny už spí,", fr: "Une montre toute molle," },
          { es: "se derrite en el balcón.", ca: "a la branca fa el ronquet.", en: "napping in the summer heat.", cs: "na větvičce sladce sní.", fr: "sur la branche rigole." },
          { es: "Tic y tac, muy despacito,", ca: "Tic i tac, ben fluixet,", en: "Tick and tock, it hums along,", cs: "Tik a tak, jen potichu,", fr: "Tic et tac, tout doucement," },
          { es: "blando como un quesito.", ca: "tou com un formatget.", en: "melting like a cheesy song.", cs: "měkké jako z tvarohu.", fr: "fond comme un camembert blanc." },
          { es: "No le importa qué hora es,", ca: "Tant li fa quina hora és,", en: "It won't tell you one or two,", cs: "Kolik hodin? Nevědí,", fr: "Elle ne sait plus quelle heure il est," },
          { es: "si es la una o son las tres.", ca: "si és la una o són les tres.", en: "it just smiles at me and you.", cs: "a vůbec jim to nevadí.", fr: "une heure, deux heures, ça lui plaît." },
          { es: "Pregúntale y te dirá:", ca: "Si li ho demanes, dirà:", en: "Ask the clock, it always says:", cs: "Tiše tikají a ví:", fr: "Demande-lui, elle te dira :" },
          { es: "¡es la hora de jugar!", ca: "és l'hora de somiar!", en: "dreaming time on melting days!", cs: "teď je čas na krásné sny.", fr: "c'est l'heure de rêver, voilà !" }
        ] },
      { emoji: "⛵",
        title: { es: "La nana de Portlligat", ca: "La non-non de Portlligat", en: "The Portlligat Lullaby", cs: "Ukolébavka z Portlligatu", fr: "La berceuse de Portlligat" },
        lines: [
          { es: "La barquita ya durmió,", ca: "La barqueta dorm al port,", en: "Little boat upon the sand,", cs: "Malá loďka spinká, spí,", fr: "La barquette s'est endormie," },
          { es: "en la playa se acostó.", ca: "el mar li canta ben a prop.", en: "sleeps beside the quiet land.", cs: "u břehu si tiše sní.", fr: "sur la plage, sans un bruit." },
          { es: "El olivo, pura plata,", ca: "L'olivera, tota d'argent,", en: "Silver olives sway and sigh,", cs: "Vítr česá olivy,", fr: "L'olivier d'argent tout doux," },
          { es: "canta nanas a la gata.", ca: "bressola les fulles al vent.", en: "singing to the evening sky.", cs: "měsíc kouká z oblohy.", fr: "berce ses feuilles pour nous." },
          { es: "En el cielo, un huevo-luna,", ca: "Al cel hi ha un ou de lluna,", en: "Egg-shaped moon up in the blue,", cs: "Měsíc jako vajíčko,", fr: "Dans le ciel, un œuf de lune," },
          { es: "se columpia en la espuma.", ca: "que es gronxa sobre l'escuma.", en: "rocks the waves and rocks you too.", cs: "houpá se jen maličko.", fr: "se balance sur l'écume." },
          { es: "Cierra, {name}, los ojitos:", ca: "Tanca els ullets ben a poquet:", en: "Close your eyes now, {name}, sleep tight:", cs: "Zavři očka, {name}, spi:", fr: "Ferme les yeux, {name}, tout doucement :" },
          { es: "los sueños vienen despacito.", ca: "els somnis vénen pel caminet.", en: "dreams come sailing through the night.", cs: "připlují ti krásné sny.", fr: "les rêves arrivent en chantant." }
        ] },
      { emoji: "😄",
        title: { es: "El baile del bigote", ca: "El ball del bigoti", en: "The Moustache Dance", cs: "Tanec kníru", fr: "La danse de la moustache" },
        lines: [
          { es: "Este baile es muy sencillo:", ca: "Aquest ball no té secret:", en: "This funny dance is easy-peasy:", cs: "Zatoč se jak větrník,", fr: "Cette danse est rigolote :" },
          { es: "gira, gira como un molinillo.", ca: "gira com un molinet.", en: "twirl around, all bright and breezy.", cs: "tančí s námi celý knír.", fr: "tourne comme une pirouette !" },
          { es: "Las manitas en la nariz,", ca: "Les manetes al nasset,", en: "Put your fingers on your nose,", cs: "Prstíky si dej pod nosík,", fr: "Mets tes doigts sous le nez," },
          { es: "¡bigote de lombriz!", ca: "bigoti de cargolet!", en: "wiggly moustache, there it grows!", cs: "vyrostl ti tam vousík!", fr: "moustache va gigoter !" },
          { es: "Puntas arriba, ¡once y diez!,", ca: "Puntes amunt, les onze i deu!,", en: "Points go up, eleven ten!,", cs: "Špičky vzhůru, výš a výš,", fr: "Les pointes en l'air, onze heures dix !," },
          { es: "salta y cuenta hasta tres.", ca: "salta i toca el cel amb el peu.", en: "jump and count from one to ten.", cs: "skoro až na střechu, slyšíš?", fr: "saute et compte jusqu'à six." },
          { es: "Si bailando te da la risa,", ca: "Si ballant et fa pessigolles,", en: "If you giggle while you sway,", cs: "Když se smíchy zatočíš,", fr: "Si tu ris en dansant," },
          { es: "¡es que el sueño va sin prisa!", ca: "és el somni que fa tombarelles!", en: "dreams are coming out to play!", cs: "sny si hrají, však to víš!", fr: "les rêves dansent en chantant !" }
        ] }
    ],

    /* ---------- TRADUCTOR ---------- */
    translator: {
      words: [
        W_COMMON.hola,
        W_COMMON.adios,
        W_COMMON.amigo,
        { k: "sueno", emoji: "💭", name: { es: "sueño", ca: "somni", en: "dream", cs: "sen", fr: "rêve" } },
        { k: "reloj", emoji: "⏰", name: { es: "reloj", ca: "rellotge", en: "clock", cs: "hodiny", fr: "montre" } },
        { k: "bigote", emoji: "〰️", name: { es: "bigote", ca: "bigoti", en: "moustache", cs: "knír", fr: "moustache" } },
        { k: "huevo", emoji: "🥚", name: { es: "huevo", ca: "ou", en: "egg", cs: "vejce", fr: "œuf" } },
        { k: "rosa", emoji: "🌹", name: { es: "rosa", ca: "rosa", en: "rose", cs: "růže", fr: "rose" } },
        { k: "pintar", emoji: "🖌️", name: { es: "pintar", ca: "pintar", en: "paint", cs: "malovat", fr: "peindre" } },
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
        { id: "sueno", emoji: "💭",
          name: { es: "Sueño", ca: "Somni", en: "Dreamish", cs: "Snština", fr: "Songeois" },
          greeting: { es: "La-ho... En el idioma del Sueño las sílabas caminan al revés, como en los espejos.", ca: "La-ho... En l'idioma del Somni les síl·labes caminen a l'inrevés, com als miralls.", en: "La-ho... In Dreamish the syllables walk backwards, like in mirrors.", cs: "La-ho... Ve snštině chodí slabiky pozpátku, jako v zrcadle.", fr: "La-ho... En songeois, les syllabes marchent à l'envers, comme dans les miroirs." },
          dict: { hola: "la-ho", adios: "diós-a", amigo: "go-mi-a", sueno: "ño-sue", reloj: "loj-re", bigote: "te-go-bi", huevo: "vo-hue", rosa: "sa-ro", pintar: "tar-pin", mama: "má-ma", papa: "pá-pa", casa: "sa-ca", agua: "gua-a", comida: "da-mi-co", perro: "rro-pe", gato: "to-ga", grande: "de-gran", pequeno: "ño-que-pe", bonito: "to-ni-bo", amor: "mor-a", gracias: "cias-gra", si: "ís", no: "on", dormir: "mir-dor" } },
        { id: "tramontana", emoji: "🌬️",
          name: { es: "Tramontana", ca: "Tramuntana", en: "Tramuntanish", cs: "Tramontánština", fr: "Tramontanais" },
          greeting: { es: "¡Fuuu! La Tramontana habla soplando. Cada palabra es una ráfaga distinta.", ca: "Fuuu! La Tramuntana parla bufant. Cada paraula és una ràfega diferent.", en: "Whooo! The Tramuntana speaks by blowing. Every word is a different gust.", cs: "Fúúú! Tramontána mluví foukáním. Každé slovo je jiný poryv.", fr: "Fouuu ! La Tramontane parle en soufflant. Chaque mot est une rafale différente." },
          dict: { hola: "fuuu-fu", adios: "fu-fuuuu", amigo: "fu-fiu-fu", sueno: "fiuuuuu", reloj: "vu-tiu-vu", bigote: "fiu-fiu-fuu", huevo: "vuuu-fu-vuuu", rosa: "fiu-ffff", pintar: "fu-fu-fiiu", mama: "fum-fum", papa: "fum-fuuu", casa: "vuu-vuu", agua: "vuuu-glub", comida: "fu-nyam-fu", perro: "fu-guau-fu", gato: "fiu-miau", grande: "FUUUUU", pequeno: "fu", bonito: "fiu-fiu-fiu", amor: "fuuu-fiuuu", gracias: "fiu-fuuu-fiu", si: "fiuu", no: "fu-u", dormir: "ffff-uuuu" } },
        { id: "relojblando", emoji: "⏰",
          name: { es: "Reloj Blando", ca: "Rellotge Tou", en: "Melting Clockish", cs: "Hodinovština", fr: "Montre Molle" },
          greeting: { es: "Tiiic... tooooc... El Reloj Blando habla lentísimo. No tengas prisa, que la palabra ya llega.", ca: "Tiiic... tooooc... El Rellotge Tou parla lentíssim. No tinguis pressa, que la paraula ja arriba.", en: "Tiiick... tooock... Melting Clockish is spoken suuuper slowly. No hurry, the word is on its way.", cs: "Tiiik... taaak... Hodinovština se mluví pomaloučku. Nespěchej, slovo už se blíží.", fr: "Tiiic... tooooc... La Montre Molle parle très très lentement. Pas de panique, le mot arrive." },
          dict: { hola: "tiiic... tooooc", adios: "tooooc... tiiic", amigo: "tic... tic... toc", sueno: "tiiiiiic......", reloj: "tic-toc... tic-toc", bigote: "tic... tiquitic", huevo: "toc... toc... croc", rosa: "tiquitiiic", pintar: "tic-tac... tic-tac", mama: "tooooc... tooooc", papa: "toc... tooooc", casa: "toc-toc... toc", agua: "tic... glup... toc", comida: "tic... nyam... toc", perro: "toc... guau... tic", gato: "tic... miau... toc", grande: "TOOOOOC", pequeno: "ti", bonito: "tiqui-tiqui... toc", amor: "tic-tuc... tic-tuc", gracias: "tiquitoc... tiquitoc", si: "tic", no: "toc", dormir: "tiiiic... zzz... tooooc" } },
        { id: "hormiga", emoji: "🐜",
          name: { es: "Hormiga", ca: "Formiga", en: "Antish", cs: "Mravenčtina", fr: "Fourmilien" },
          greeting: { es: "¡Chiquichiqui! Las hormigas hablan rapidito y en fila, pasito a pasito.", ca: "Chiquichiqui! Les formigues parlen de pressa i en fila, passet a passet.", en: "Chiki-chiki! Ants talk super fast and in single file, tiny step by tiny step.", cs: "Cupity-cup! Mravenci mluví rychle a v zástupu, krůček po krůčku.", fr: "Tchiki-tchiki ! Les fourmis parlent très vite et en file indienne, petit pas par petit pas." },
          dict: { hola: "chiqui-chiqui", adios: "chiqui-chao", amigo: "chiqui-miga", sueno: "chiqui-zzz", reloj: "chiqui-tictac", bigote: "chiqui-chiquiii", huevo: "chiqui-plof", rosa: "chiqui-rosi", pintar: "chiqui-plas", mama: "chiqui-mami", papa: "chiqui-papi", casa: "chiqui-cueva", agua: "chiqui-glu", comida: "chiqui-ñam-ñam", perro: "chiqui-guau", gato: "chiqui-miau", grande: "chiquichiquichiqui", pequeno: "chiqui", bonito: "chiqui-chuli", amor: "chiqui-mua", gracias: "chiqui-mersi", si: "chiqui-sip", no: "chiqui-nop", dormir: "chiqui-ronron" } }
      ]
    },

    /* ---------- MAPA DE EXPLORACIÓN ---------- */
    explore: {
      width: 2600, height: 1100, stars: false,
      bgCss: "radial-gradient(ellipse 40% 32% at 22% 16%, rgba(255,241,180,.6), transparent), linear-gradient(180deg,#ffe9b8 0%,#ffd98a 34%,#f2b544 62%,#e8a668 100%)",
      cats: [
        { id: "museo", emoji: "🥚", x: 120, name: { es: "El museo de Figueres", ca: "El museu de Figueres", en: "The Figueres museum", cs: "Muzeum ve Figueres", fr: "Le musée de Figueres" } },
        { id: "suenos", emoji: "💭", x: 1000, name: { es: "El mundo de los sueños", ca: "El món dels somnis", en: "The world of dreams", cs: "Svět snů", fr: "Le monde des rêves" } },
        { id: "portlligat", emoji: "⛵", x: 1900, name: { es: "Portlligat, junto al mar", ca: "Portlligat, vora el mar", en: "Portlligat, by the sea", cs: "Portlligat u moře", fr: "Portlligat, au bord de la mer" } }
      ],
      pois: [
        { cat: "museo", emoji: "🔮", x: 180, y: 360, iw: 96, ih: 70,
          svg: daIco(`<path d="M10 60 A40 40 0 0 1 90 60 Z" fill="rgba(190,230,255,.4)" stroke="#7fb3d5" stroke-width="3"/>
            <path d="M10 60 A40 40 0 0 1 90 60 M20 60 Q20 30 50 21 M80 60 Q80 30 50 21 M50 20 L50 60 M14 46 L86 46 M24 32 L76 32" fill="none" stroke="#a8d4ef" stroke-width="2"/>
            <rect x="6" y="60" width="88" height="6" rx="3" fill="#c98a3b"/>
            <circle cx="66" cy="30" r="3" fill="#fff" opacity=".9"><animate attributeName="opacity" values=".9;.3;.9" dur="2s" repeatCount="indefinite"/></circle>`, "0 0 100 70"),
          name: { es: "La cúpula de cristal", ca: "La cúpula de vidre", en: "The glass dome", cs: "Skleněná kupole", fr: "La coupole de verre" },
          fact: { es: "El museo está coronado por una cúpula transparente, como una pompa de jabón gigante que brilla al sol.", ca: "El museu està coronat per una cúpula transparent, com una bombolla de sabó gegant que brilla al sol.", en: "The museum is crowned by a see-through dome, like a giant soap bubble sparkling in the sun.", cs: "Muzeum korunuje průhledná kupole, jako obří mýdlová bublina třpytící se na slunci.", fr: "Le musée est couronné d'une coupole transparente, comme une bulle de savon géante qui brille au soleil." } },
        { cat: "museo", emoji: "🥚", x: 430, y: 270, size: 2, iw: 88, ih: 80,
          svg: daIco(`<rect x="4" y="66" width="92" height="10" rx="3" fill="#b23a48"/>
            <rect x="16" y="58" width="18" height="10" fill="#c94b59"/><rect x="66" y="58" width="18" height="10" fill="#c94b59"/>
            <ellipse cx="25" cy="42" rx="15" ry="20" fill="#fffdf4" stroke="#e0d6c2" stroke-width="2"/>
            <ellipse cx="75" cy="42" rx="15" ry="20" fill="#fffdf4" stroke="#e0d6c2" stroke-width="2"/>
            <ellipse cx="20" cy="34" rx="4" ry="6" fill="#fff" opacity=".85"/><ellipse cx="70" cy="34" rx="4" ry="6" fill="#fff" opacity=".85"/>`, "0 0 100 80"),
          name: { es: "Los huevos gigantes", ca: "Els ous gegants", en: "The giant eggs", cs: "Obří vejce", fr: "Les œufs géants" },
          fact: { es: "En lo alto del museo hay huevos enormes haciendo equilibrio. Para Dalí el huevo era pura magia: dentro cabe una vida entera.", ca: "A dalt de tot del museu hi ha ous enormes fent equilibris. Per a Dalí l'ou era pura màgia: a dins hi cap una vida sencera.", en: "High up on the museum there are huge eggs balancing. For Dalí the egg was pure magic: a whole life fits inside.", cs: "Nahoře na muzeu balancují obrovská vejce. Pro Dalího bylo vejce čiré kouzlo: vejde se do něj celý život.", fr: "Tout en haut du musée, d'énormes œufs font l'équilibre. Pour Dalí, l'œuf était pure magie : une vie entière tient dedans." } },
        { cat: "museo", emoji: "🍞", x: 300, y: 580, iw: 84, ih: 60,
          svg: daIco(`<rect x="2" y="2" width="96" height="66" rx="6" fill="#b23a48"/>
            <rect x="2" y="2" width="96" height="66" rx="6" fill="none" stroke="#8e2b37" stroke-width="3"/>
            ${[[22, 20], [52, 20], [82, 20], [22, 50], [52, 50], [82, 50]].map(p => `<g transform="translate(${p[0]} ${p[1]})"><ellipse rx="11" ry="7.5" fill="#e8b464"/><path d="M-6 -2 L6 -2 M-4 2 L4 2" stroke="#c98a3b" stroke-width="1.8" stroke-linecap="round"/></g>`).join("")}`, "0 0 100 70"),
          name: { es: "Los panes de la fachada", ca: "Els pans de la façana", en: "The bread loaves", cs: "Chleby na fasádě", fr: "Les pains de la façade" },
          fact: { es: "Las paredes del museo están sembradas de panecillos dorados. A Dalí el pan le gustaba tanto que lo convirtió en decoración.", ca: "Les parets del museu estan sembrades de panets daurats. A Dalí el pa li agradava tant que el va convertir en decoració.", en: "The museum walls are studded with little golden loaves. Dalí loved bread so much that he turned it into decoration.", cs: "Zdi muzea jsou poseté zlatavými bochánky. Dalí měl chléb tak rád, že z něj udělal ozdobu.", fr: "Les murs du musée sont semés de petits pains dorés. Dalí aimait tant le pain qu'il en a fait une décoration." } },
        { cat: "museo", emoji: "🚗", x: 560, y: 950, size: 2, iw: 110, ih: 64,
          svg: daIco(`<path d="M14 42 Q16 26 34 24 L44 12 Q60 6 78 12 L88 24 Q106 26 108 42 L108 52 Q108 58 100 58 L22 58 Q14 58 14 52 Z" fill="#2e5d3b"/>
            <path d="M46 15 Q60 10 76 15 L84 25 L38 25 Z" fill="#bfe3f2"/>
            <path d="M52 17 Q54 20 52 24 M62 16 Q64 20 62 24 M72 17 Q74 20 72 24" stroke="#5b9bd5" stroke-width="2" fill="none" stroke-linecap="round"/>
            <ellipse cx="61" cy="14" rx="9" ry="3.4" fill="#9fb7c9"/>
            <circle cx="34" cy="58" r="9" fill="#26323a"/><circle cx="34" cy="58" r="4" fill="#7d8c96"/>
            <circle cx="88" cy="58" r="9" fill="#26323a"/><circle cx="88" cy="58" r="4" fill="#7d8c96"/>
            <path d="M40 34 q4 3 8 0 M60 36 q4 3 8 0" stroke="#8fd0a8" stroke-width="2" fill="none" stroke-linecap="round"/>`, "0 0 120 70"),
          name: { es: "El Cadillac lluvioso", ca: "El Cadillac plujós", en: "The rainy Cadillac", cs: "Deštivý cadillac", fr: "La Cadillac pluvieuse" },
          fact: { es: "Dentro del museo hay un coche antiguo donde llueve POR DENTRO al apretar un botón. Los caracoles de los asientos están encantados: es el único coche donde el paraguas se lleva dentro.", ca: "Dins del museu hi ha un cotxe antic on plou PER DINS quan prems un botó. Els cargols dels seients estan encantats: és l'únic cotxe on el paraigua es porta a dins.", en: "Inside the museum there is an old car where it rains ON THE INSIDE when you press a button. The snails on the seats love it: it is the only car where you keep the umbrella inside.", cs: "V muzeu stojí staré auto, ve kterém po stisknutí knoflíku prší UVNITŘ. Šneci na sedadlech jsou nadšení: je to jediné auto, kde se deštník nosí uvnitř.", fr: "Dans le musée, il y a une vieille voiture où il pleut À L'INTÉRIEUR quand on appuie sur un bouton. Les escargots des sièges adorent : c'est la seule voiture où le parapluie se porte dedans." } },
        { cat: "suenos", emoji: "⏰", x: 1050, y: 470, size: 2, iw: 120, ih: 100,
          svg: daIco(`<path d="M10 96 Q10 60 22 38 Q28 26 40 22 M22 44 Q30 38 40 38" fill="none" stroke="#6d4c41" stroke-width="5" stroke-linecap="round"/>
            <path d="M34 34 Q34 16 58 16 Q82 16 82 34 Q82 48 70 53 L70 72 Q70 82 60 80 Q52 78 55 66 Q40 62 34 48 Z" fill="#fffdf0" stroke="#bcaaa4" stroke-width="2.5"/>
            <path d="M58 21 L58 26 M77 34 L72 34 M58 47 L58 42 M39 34 L44 34" stroke="#8d6e63" stroke-width="2.6" stroke-linecap="round"/>
            <path d="M58 34 L49 27 M58 34 L66 27" stroke="#5d4037" stroke-width="3" stroke-linecap="round"/>
            <circle cx="60" cy="84" r="3.4" fill="#fffdf0"><animate attributeName="cy" values="84;92;84" dur="2.4s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;.2;1" dur="2.4s" repeatCount="indefinite"/></circle>`, "0 0 100 100"),
          name: { es: "El reloj blando", ca: "El rellotge tou", en: "The melting clock", cs: "Měkké hodiny", fr: "La montre molle" },
          fact: { es: "La estrella de los sueños de Dalí. Lo pintó en Portlligat pensando en un queso derretido, y hoy vive en un museo de Nueva York.", ca: "L'estrella dels somnis de Dalí. El va pintar a Portlligat pensant en un formatge fos, i avui viu en un museu de Nova York.", en: "The star of Dalí's dreams. He painted it in Portlligat thinking of melted cheese, and today it lives in a New York museum.", cs: "Hvězda Dalího snů. Namaloval je v Portlligatu s myšlenkou na roztečený sýr a dnes bydlí v muzeu v New Yorku.", fr: "La star des rêves de Dalí. Il l'a peinte à Portlligat en pensant à un fromage fondu, et aujourd'hui elle vit dans un musée de New York." } },
        { cat: "suenos", emoji: "🐘", x: 1310, y: 330, size: 2, iw: 96, ih: 116,
          svg: daIco(`<ellipse cx="50" cy="22" rx="22" ry="14" fill="#90a4ae" stroke="#607d8b" stroke-width="2"/>
            <path d="M66 18 Q78 20 77 34 Q76 41 70 40" fill="none" stroke="#90a4ae" stroke-width="5.5" stroke-linecap="round"/>
            <path d="M36 14 Q28 6 32 0 Q40 4 41 12 Z" fill="#78909c"/>
            <circle cx="59" cy="18" r="2.2" fill="#37474f"/><circle cx="59.8" cy="17.2" r=".8" fill="#fff"/>
            <path d="M40 20 Q35 8 42 4 Q40 12 44 16 Z" fill="#b0bec5" opacity=".8"/>
            <path d="M34 33 L28 108 M44 35 L42 110 M55 35 L58 110 M64 31 L72 108" stroke="#90a4ae" stroke-width="3.4" stroke-linecap="round"/>
            <ellipse cx="28" cy="110" rx="4.4" ry="2.4" fill="#607d8b"/><ellipse cx="42" cy="112" rx="4.4" ry="2.4" fill="#607d8b"/>
            <ellipse cx="58" cy="112" rx="4.4" ry="2.4" fill="#607d8b"/><ellipse cx="72" cy="110" rx="4.4" ry="2.4" fill="#607d8b"/>`, "0 0 100 116"),
          name: { es: "El elefante patilargo", ca: "L'elefant de potes llargues", en: "The long-legged elephant", cs: "Slon na dlouhých nohách", fr: "L'éléphant aux longues pattes" },
          fact: { es: "Camina sobre patas finas y altísimas, como zancos, y lleva cargas que no pesan nada. Es un sueño, ¡claro!", ca: "Camina sobre potes fines i altíssimes, com xanques, i porta càrregues que no pesen gens. És un somni, és clar!", en: "It walks on thin, super tall legs, like stilts, and carries loads that weigh nothing at all. It is a dream, of course!", cs: "Chodí na tenkých, vysokánských nohách jako na chůdách a nosí náklady, které nic neváží. Je to přece sen!", fr: "Il marche sur des pattes fines et très hautes, comme des échasses, et porte des charges qui ne pèsent rien. C'est un rêve, bien sûr !" } },
        { cat: "suenos", emoji: "🐜", x: 950, y: 950, iw: 96, ih: 32,
          svg: daIco(`${[10, 46, 82].map(x => `<g transform="translate(${x} 16)">
            <circle cx="0" cy="0" r="6" fill="#4e342e"/><circle cx="9" cy="0" r="4.6" fill="#4e342e"/><circle cx="17" cy="-1" r="4" fill="#4e342e"/>
            <circle cx="19" cy="-2.4" r="1" fill="#fff"/>
            <path d="M-4 5 L-8 12 M0 6 L0 13 M5 5 L9 12" stroke="#4e342e" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M19 -4 Q22 -9 26 -10 M16 -5 Q17 -10 14 -13" stroke="#4e342e" stroke-width="1.4" fill="none" stroke-linecap="round"/>
          </g>`).join("")}<circle cx="36" cy="6" r="4" fill="#e8b464"/>`, "0 0 120 32"),
          name: { es: "Las hormigas trabajadoras", ca: "Les formigues treballadores", en: "The busy ants", cs: "Pilní mravenci", fr: "Les fourmis travailleuses" },
          fact: { es: "En muchos cuadros de Dalí desfilan hormigas en fila, ocupadísimas. De pequeño se pasaba horas mirándolas en Cadaqués.", ca: "A molts quadres de Dalí desfilen formigues en fila, ocupadíssimes. De petit es passava hores mirant-les a Cadaqués.", en: "In many of Dalí's paintings ants march in single file, super busy. As a child he spent hours watching them in Cadaqués.", cs: "Na mnoha Dalího obrazech pochodují mravenci v zástupu a mají plno práce. Jako malý je v Cadaqués pozoroval celé hodiny.", fr: "Dans beaucoup de tableaux de Dalí, des fourmis défilent en file indienne, très occupées. Enfant, il passait des heures à les regarder à Cadaqués." } },
        { cat: "suenos", emoji: "👁️", x: 1500, y: 560, iw: 86, ih: 52,
          svg: daIco(`<path d="M6 30 Q50 -4 94 30 Q50 64 6 30 Z" fill="#fffdf4" stroke="#bcaaa4" stroke-width="2.5"/>
            <circle cx="50" cy="30" r="16" fill="#7fb3d5"/>
            <circle cx="50" cy="30" r="7" fill="#1a237e"/>
            <ellipse cx="46" cy="24" rx="4" ry="3" fill="#fff" opacity=".85"/>
            <path d="M44 30 Q50 26 56 30" stroke="#fff" stroke-width="1.6" fill="none" opacity=".7"/>
            <path d="M16 18 L10 12 M32 10 L29 3 M68 10 L71 3 M84 18 L90 12" stroke="#bcaaa4" stroke-width="2.4" stroke-linecap="round"/>`, "0 0 100 60"),
          name: { es: "El ojo del sueño", ca: "L'ull del somni", en: "The dream eye", cs: "Oko snů", fr: "L'œil du rêve" },
          fact: { es: "Dalí dibujó los sueños de una película con un cielo lleno de ojos gigantes. Miran con mucha curiosidad, como tú ahora.", ca: "Dalí va dibuixar els somnis d'una pel·lícula amb un cel ple d'ulls gegants. Miren amb molta curiositat, com tu ara.", en: "Dalí drew the dreams for a movie with a sky full of giant eyes. They look around very curiously, just like you now.", cs: "Dalí nakreslil pro jeden film sny s nebem plným obřích očí. Dívají se zvědavě, přesně jako ty teď.", fr: "Dalí a dessiné les rêves d'un film avec un ciel plein d'yeux géants. Ils regardent avec beaucoup de curiosité, comme toi maintenant." } },
        { cat: "suenos", emoji: "🌹", x: 1200, y: 180, iw: 64, ih: 68,
          svg: daIco(`<g><animateTransform attributeName="transform" type="translate" values="0 0;0 -5;0 0" dur="3s" repeatCount="indefinite"/>
            <circle cx="50" cy="34" r="24" fill="#e53935"/>
            <path d="M50 34 Q50 18 66 21 Q74 32 60 40 Q51 44 50 34 Q38 42 34 32 Q38 20 50 26" fill="none" stroke="#b71c1c" stroke-width="3.4"/>
            <path d="M30 52 Q22 58 14 56 M70 52 Q78 58 86 56" stroke="#43a047" stroke-width="3.4" fill="none" stroke-linecap="round"/></g>
            <ellipse cx="50" cy="86" rx="18" ry="4" fill="rgba(0,0,0,.15)"/>`, "0 0 100 92"),
          name: { es: "La rosa flotante", ca: "La rosa flotant", en: "The floating rose", cs: "Vznášející se růže", fr: "La rose flottante" },
          fact: { es: "En uno de sus cuadros, una rosa enorme flota en medio del cielo, sin globo ni cuerda. Huele a sueño recién abierto.", ca: "En un dels seus quadres, una rosa enorme flota al mig del cel, sense globus ni corda. Fa olor de somni acabat d'obrir.", en: "In one of his paintings, a huge rose floats in the middle of the sky, with no balloon and no string. It smells like a freshly opened dream.", cs: "Na jednom z jeho obrazů se obrovská růže vznáší uprostřed nebe, bez balonku a bez provázku. Voní jako čerstvě rozvinutý sen.", fr: "Dans un de ses tableaux, une rose énorme flotte au milieu du ciel, sans ballon ni ficelle. Elle sent le rêve fraîchement ouvert." } },
        { cat: "suenos", emoji: "😄", x: 1450, y: 955, iw: 100, ih: 50,
          svg: daIco(`<g stroke="#4e342e" stroke-width="6" fill="none" stroke-linecap="round">
            <animateTransform attributeName="transform" type="rotate" values="-3 60 30;3 60 30;-3 60 30" dur="2.2s" repeatCount="indefinite"/>
            <path d="M60 34 Q46 30 38 33 Q26 37 20 26 Q26 14 36 20"/>
            <path d="M60 34 Q74 30 82 33 Q94 37 100 26 Q94 14 84 20"/></g>
            <ellipse cx="60" cy="38" rx="7" ry="4" fill="#4e342e"/>`, "0 0 120 50"),
          name: { es: "El bigote de las once y diez", ca: "El bigoti de les onze i deu", en: "The eleven-ten moustache", cs: "Knír v jedenáct deset", fr: "La moustache de onze heures dix" },
          fact: { es: "Las puntas del bigote de Dalí apuntaban al cielo como las agujas de un reloj a las once y diez. Decía que era su antena de ideas.", ca: "Les puntes del bigoti de Dalí apuntaven al cel com les agulles d'un rellotge a les onze i deu. Deia que era la seva antena d'idees.", en: "The tips of Dalí's moustache pointed at the sky like clock hands at ten past eleven. He said it was his idea antenna.", cs: "Špičky Dalího kníru mířily k nebi jako hodinové ručičky v jedenáct deset. Říkal, že je to jeho anténa na nápady.", fr: "Les pointes de la moustache de Dalí visaient le ciel comme les aiguilles d'une montre à onze heures dix. Il disait que c'était son antenne à idées." } },
        { cat: "portlligat", emoji: "🏠", x: 1950, y: 480, size: 2, iw: 104, ih: 86,
          svg: daIco(`<rect x="6" y="40" width="34" height="42" fill="#fdfaf2" stroke="#d9cfc0" stroke-width="2"/>
            <rect x="36" y="26" width="30" height="56" fill="#fffef8" stroke="#d9cfc0" stroke-width="2"/>
            <rect x="62" y="46" width="32" height="36" fill="#f7f2e6" stroke="#d9cfc0" stroke-width="2"/>
            <path d="M4 42 L23 30 L42 42 Z" fill="#c98a5a"/><path d="M34 28 L51 16 L68 28 Z" fill="#c98a5a"/><path d="M60 48 L78 36 L96 48 Z" fill="#c98a5a"/>
            <ellipse cx="51" cy="10" rx="7" ry="9" fill="#fffdf4" stroke="#e0d6c2" stroke-width="1.6"/>
            <rect x="14" y="52" width="10" height="10" fill="#5b8bb5"/><rect x="44" y="38" width="10" height="10" fill="#5b8bb5"/><rect x="72" y="56" width="10" height="10" fill="#5b8bb5"/>
            <rect x="46" y="62" width="12" height="20" fill="#7a5c3e"/>`, "0 0 100 86"),
          name: { es: "La casa laberinto", ca: "La casa laberint", en: "The labyrinth house", cs: "Dům bludiště", fr: "La maison labyrinthe" },
          fact: { es: "La casa blanca de Portlligat empezó siendo una cabaña de pescadores y creció habitación a habitación durante cuarenta años. ¡Hasta tiene un huevo en el tejado!", ca: "La casa blanca de Portlligat va començar sent una cabana de pescadors i va créixer habitació a habitació durant quaranta anys. Fins i tot té un ou a la teulada!", en: "The white house of Portlligat started as a fishermen's hut and grew room by room for forty years. It even has an egg on the roof!", cs: "Bílý dům v Portlligatu začal jako rybářská chatka a čtyřicet let rostl pokoj po pokoji. Na střeše má dokonce vejce!", fr: "La maison blanche de Portlligat a commencé comme une cabane de pêcheurs et a grandi pièce par pièce pendant quarante ans. Elle a même un œuf sur le toit !" } },
        { cat: "portlligat", emoji: "⛵", x: 2200, y: 760, iw: 88, ih: 46,
          svg: daIco(`<path d="M8 26 L92 26 L78 42 Q50 48 22 42 Z" fill="#4a7fa5" stroke="#35617f" stroke-width="2"/>
            <path d="M8 26 L92 26" stroke="#fffdf4" stroke-width="3"/>
            <path d="M50 26 L50 4" stroke="#6d4c41" stroke-width="2.6"/>
            <path d="M30 20 Q50 14 70 20 L64 26 L36 26 Z" fill="#e8dcc8"/>
            <path d="M14 30 L26 36 M86 30 L74 36" stroke="#35617f" stroke-width="2" stroke-linecap="round"/>`, "0 0 100 50"),
          name: { es: "La barca en la playa", ca: "La barca a la platja", en: "The boat on the beach", cs: "Loďka na pláži", fr: "La barque sur la plage" },
          fact: { es: "Delante de su casa, las barcas descansan en la arena. Dalí miraba el mar cada mañana y decía que esa luz no existía en ningún otro sitio.", ca: "Davant de casa seva, les barques descansen a la sorra. Dalí mirava el mar cada matí i deia que aquella llum no existia enlloc més.", en: "In front of his house, the boats rest on the sand. Dalí watched the sea every morning and said that light existed nowhere else.", cs: "Před jeho domem odpočívají loďky na písku. Dalí se každé ráno díval na moře a říkal, že takové světlo jinde neexistuje.", fr: "Devant sa maison, les barques se reposent sur le sable. Dalí regardait la mer chaque matin et disait que cette lumière n'existait nulle part ailleurs." } },
        { cat: "portlligat", emoji: "🫒", x: 2420, y: 710, iw: 88, ih: 78,
          svg: daIco(`<path d="M30 82 Q28 60 24 48 Q34 56 36 66 M30 82 Q34 62 44 54" fill="none" stroke="#8d6e63" stroke-width="5" stroke-linecap="round"/>
            <circle cx="26" cy="36" r="17" fill="#9ccc9c"/><circle cx="42" cy="28" r="13" fill="#b5d6a7"/><circle cx="14" cy="26" r="11" fill="#b5d6a7"/>
            <path d="M70 84 Q70 66 66 56 M70 84 Q74 66 80 58" fill="none" stroke="#8d6e63" stroke-width="4.4" stroke-linecap="round"/>
            <circle cx="72" cy="44" r="14" fill="#9ccc9c"/><circle cx="84" cy="36" r="10" fill="#c9e4bc"/>
            <ellipse cx="30" cy="20" rx="3" ry="2" fill="#e8f0dc"/><ellipse cx="76" cy="32" rx="2.6" ry="1.8" fill="#e8f0dc"/>`, "0 0 100 88"),
          name: { es: "Los olivos", ca: "Les oliveres", en: "The olive trees", cs: "Olivovníky", fr: "Les oliviers" },
          fact: { es: "Alrededor de la casa crecen olivos de hojas plateadas. Cuando sopla la tramontana, bailan todos a la vez.", ca: "Al voltant de la casa creixen oliveres de fulles platejades. Quan bufa la tramuntana, ballen totes alhora.", en: "Olive trees with silvery leaves grow around the house. When the tramuntana blows, they all dance at once.", cs: "Kolem domu rostou olivovníky se stříbrnými listy. Když zafouká tramontána, tančí všechny najednou.", fr: "Autour de la maison poussent des oliviers aux feuilles argentées. Quand la tramontane souffle, ils dansent tous en même temps." } },
        { cat: "portlligat", emoji: "🌬️", x: 2050, y: 200, size: 2, iw: 104, ih: 60,
          svg: daIco(`<circle cx="34" cy="30" r="24" fill="#f4f8fb" stroke="#c9dcea" stroke-width="2.5"/>
            <circle cx="20" cy="18" r="9" fill="#f4f8fb"/><circle cx="42" cy="12" r="11" fill="#f4f8fb"/><circle cx="52" cy="24" r="9" fill="#f4f8fb"/>
            <path d="M24 26 Q27 23 30 26 M40 26 Q43 23 46 26" stroke="#7d99ad" stroke-width="2.4" fill="none" stroke-linecap="round"/>
            <circle cx="36" cy="36" r="5" fill="#d6e6f0" stroke="#7d99ad" stroke-width="1.6"/>
            <g stroke="#aecde3" stroke-width="3.4" fill="none" stroke-linecap="round">
              <path d="M46 36 Q70 30 88 36 Q98 40 104 34"><animate attributeName="opacity" values="1;.35;1" dur="1.6s" repeatCount="indefinite"/></path>
              <path d="M44 46 Q66 42 80 48 Q90 52 98 47"><animate attributeName="opacity" values=".35;1;.35" dur="1.6s" repeatCount="indefinite"/></path>
            </g>`, "0 0 110 60"),
          name: { es: "La tramontana", ca: "La tramuntana", en: "The tramuntana wind", cs: "Tramontána", fr: "La tramontane" },
          fact: { es: "El viento del norte del Empordà. Sopla fuerte, despeina los olivos y deja el cielo tan limpio que los colores brillan más.", ca: "El vent del nord de l'Empordà. Bufa fort, despentina les oliveres i deixa el cel tan net que els colors brillen més.", en: "The north wind of the Empordà. It blows hard, ruffles the olive trees and leaves the sky so clean that colours shine brighter.", cs: "Severní vítr z kraje Empordà. Fouká silně, cuchá olivovníky a nechává nebe tak čisté, že barvy září víc.", fr: "Le vent du nord de l'Empordà. Il souffle fort, décoiffe les oliviers et laisse le ciel si propre que les couleurs brillent plus." } },
        { cat: "portlligat", emoji: "🪟", x: 2350, y: 330, iw: 76, ih: 86,
          svg: daIco(`<rect x="14" y="4" width="62" height="88" rx="4" fill="#f2ead8" stroke="#c9b990" stroke-width="3"/>
            <rect x="22" y="12" width="46" height="52" fill="#8fc3dd"/>
            <path d="M22 34 L68 34 M22 24 Q45 20 68 24" stroke="#5b9bb8" stroke-width="2" fill="none"/>
            <path d="M22 30 q6 -3 12 0 M50 28 q6 -3 12 0" stroke="rgba(255,255,255,.7)" stroke-width="1.6" fill="none" stroke-linecap="round"/>
            <path d="M38 64 Q38 42 45 40 Q52 42 52 64 Z" fill="#5d4037"/>
            <circle cx="45" cy="36" r="6.5" fill="#c98e62"/><path d="M39 33 Q45 27 51 33 L51 38 Q45 34 39 38 Z" fill="#4e342e"/>
            <rect x="22" y="64" width="46" height="6" fill="#c9b990"/>`, "0 0 90 96"),
          name: { es: "La ventana de Anna Maria", ca: "La finestra de l'Anna Maria", en: "Anna Maria's window", cs: "Okno Anny Marie", fr: "La fenêtre d'Anna Maria" },
          fact: { es: "Dalí pintó a su hermana Anna Maria de espaldas, mirando el mar por la ventana. Es uno de sus cuadros más tranquilos y bonitos.", ca: "Dalí va pintar la seva germana Anna Maria d'esquena, mirant el mar per la finestra. És un dels seus quadres més tranquils i bonics.", en: "Dalí painted his sister Anna Maria from behind, looking at the sea through the window. It is one of his calmest, loveliest paintings.", cs: "Dalí namaloval svou sestru Annu Marii zezadu, jak se oknem dívá na moře. Je to jeden z jeho nejklidnějších a nejkrásnějších obrazů.", fr: "Dalí a peint sa sœur Anna Maria de dos, regardant la mer par la fenêtre. C'est un de ses tableaux les plus calmes et les plus jolis." } }
      ],
      /* el paisaje: cielo dorado del Empordà, nubes alargadas, el mar al fondo y las rocas de Cadaqués */
      deco: function () {
        let s = "";
        // el sol bajo del Empordà, con su resplandor
        s += `<circle cx="700" cy="170" r="70" fill="rgba(255,244,190,.95)"/>
              <circle cx="700" cy="170" r="120" fill="rgba(255,244,190,.25)"/>
              <circle cx="700" cy="170" r="190" fill="rgba(255,244,190,.12)"/>`;
        // nubes alargadas, estiradas como chicle por la tramontana
        [[300, 120, 240, 16], [900, 260, 320, 18], [1500, 110, 280, 14], [1950, 300, 360, 20], [2300, 150, 260, 15], [1200, 350, 300, 16], [500, 320, 220, 13]].forEach(n => {
          s += `<ellipse cx="${n[0]}" cy="${n[1]}" rx="${n[2]}" ry="${n[3]}" fill="rgba(255,255,255,.55)"/>
                <ellipse cx="${n[0] + n[2] * 0.5}" cy="${n[1] - 8}" rx="${(n[2] * 0.45).toFixed(0)}" ry="${(n[3] * 0.7).toFixed(0)}" fill="rgba(255,255,255,.4)"/>`;
        });
        // el mar azul al fondo, una cinta de horizonte de punta a punta
        s += `<rect x="0" y="640" width="2600" height="180" fill="#3b6ea5"/>
              <rect x="0" y="640" width="2600" height="26" fill="#7fb3d5" opacity=".8"/>
              <path d="M120 700 q22 -9 44 0 M480 730 q22 -9 44 0 M900 690 q22 -9 44 0 M1350 740 q22 -9 44 0 M1750 700 q22 -9 44 0 M2150 730 q22 -9 44 0 M2450 690 q22 -9 44 0" stroke="rgba(255,255,255,.5)" stroke-width="4" fill="none" stroke-linecap="round"/>
              <ellipse cx="700" cy="690" rx="180" ry="14" fill="rgba(255,240,180,.35)"/>`;
        // las rocas de Cadaqués, oscuras y redondeadas, saliendo del agua
        s += `<path d="M2380 820 Q2400 680 2480 660 Q2560 680 2590 820 Z" fill="#5f4a3e"/>
              <path d="M2270 820 Q2290 730 2350 716 Q2410 734 2420 820 Z" fill="#6d564a"/>
              <path d="M2480 700 q20 -8 40 4" stroke="rgba(255,235,190,.4)" stroke-width="5" fill="none" stroke-linecap="round"/>
              <path d="M1690 820 Q1710 748 1760 738 Q1812 750 1824 820 Z" fill="#6d564a" opacity=".9"/>`;
        // la llanura dorada delante del mar
        s += `<rect x="0" y="820" width="2600" height="280" fill="#e3b877"/>
              <path d="M0 820 Q400 800 800 820 Q1300 842 1800 816 Q2200 798 2600 820 L2600 860 L0 860 Z" fill="#d9a95f"/>
              <path d="M0 990 Q500 965 1000 990 Q1600 1015 2600 985 L2600 1100 L0 1100 Z" fill="#c99a52"/>`;
        // sombras largas del atardecer, tan de Dalí
        [[520, 900, 190], [1180, 940, 240], [1980, 910, 210]].forEach(sh => {
          s += `<ellipse cx="${sh[0]}" cy="${sh[1]}" rx="${sh[2]}" ry="12" fill="rgba(90,50,20,.14)"/>`;
        });
        // matas de olivo desperdigadas por la llanura
        [[240, 880], [820, 930], [1580, 890], [2240, 950], [1080, 980]].forEach(o => {
          s += `<path d="M${o[0]} ${o[1]} q-2 -16 -6 -24" stroke="#8d6e63" stroke-width="5" fill="none" stroke-linecap="round"/>
                <circle cx="${o[0] - 8}" cy="${o[1] - 34}" r="16" fill="#9ccc9c" opacity=".9"/>
                <circle cx="${o[0] + 6}" cy="${o[1] - 28}" r="11" fill="#b5d6a7" opacity=".9"/>`;
        });
        // el perfil blanco de Cadaqués a lo lejos, junto al agua
        s += `<g opacity=".85">
              <rect x="1860" y="606" width="26" height="34" fill="#fdfaf2"/><rect x="1890" y="596" width="20" height="44" fill="#f7f2e6"/>
              <rect x="1914" y="612" width="24" height="28" fill="#fdfaf2"/><path d="M1888 598 L1900 584 L1912 598 Z" fill="#e0d6c2"/>
              <rect x="1896" y="576" width="8" height="12" fill="#f7f2e6"/>
              </g>`;
        return decoSvg(s, 2600);
      }
    },

    /* ---------- CHARLA ---------- */
    chat: {
      keywords: [
        { keys: ["hola", "hello", "hi ", "ahoj", "bonjour", "salut", "bon dia", "buenas"],
          replies: [{ es: "¡Hola, {name}! Qué alegría verte por el taller de los sueños. ¿Jugamos a algo o charlamos un ratito?", ca: "Hola, {name}! Quina alegria veure't pel taller dels somnis. Juguem a alguna cosa o xerrem una estoneta?", en: "Hi, {name}! So happy to see you in the dream workshop. Shall we play something or chat for a bit?", cs: "Ahoj, {name}! Mám radost, že tě vidím v dílně snů. Zahrajeme si něco, nebo si chvilku popovídáme?", fr: "Salut, {name} ! Quelle joie de te voir à l'atelier des rêves. On joue à quelque chose ou on discute un petit peu ?" }] },
        { keys: ["como estas", "how are you", "jak se mas", "comment ca va", "com estas", "que tal"],
          replies: [{ es: "¡Contento como un reloj recién derretido al sol! ¿Y tú cómo estás, {name}?", ca: "Content com un rellotge acabat de fondre al sol! I tu com estàs, {name}?", en: "Happy as a clock freshly melted in the sun! And how are you, {name}?", cs: "Šťastný jako hodiny čerstvě roztečené na sluníčku! A jak se máš ty, {name}?", fr: "Heureux comme une montre tout juste fondue au soleil ! Et toi, comment vas-tu, {name} ?" }] },
        { keys: ["cancion", "musica", "music", "song", "sing", "pisnicka", "hudba", "chanson", "musique", "canço", "canta", "zpiv", "chante"],
          action: "song",
          replies: [{ es: "¡Me encanta la música! En el museo canto con los huevos del tejado, que hacen un eco buenísimo. ¿Vamos al Karaoke y cantamos juntos?", ca: "M'encanta la música! Al museu canto amb els ous de la teulada, que fan un eco boníssim. Anem al Karaoke i cantem junts?", en: "I love music! At the museum I sing with the eggs on the roof, they make a great echo. Shall we go to Karaoke and sing together?", cs: "Hudbu miluju! V muzeu zpívám s vejci na střeše, dělají skvělou ozvěnu. Půjdeme na karaoke a zazpíváme si spolu?", fr: "J'adore la musique ! Au musée, je chante avec les œufs du toit, ils font un écho génial. On va au karaoké chanter ensemble ?" }] },
        { keys: ["chiste", "joke", "vtip", "blague", "acudit", "broma"],
          replies: [
            { es: "¿Qué hace un reloj blando cuando llega tarde? ¡Nada, se lo toma con mucha calma! Ji, ji.", ca: "Què fa un rellotge tou quan arriba tard? Res, s'ho pren amb molta calma! Hi, hi.", en: "What does a melting clock do when it is late? Nothing, it takes it very calmly! Hee hee.", cs: "Co udělají měkké hodiny, když jdou pozdě? Nic, berou to úplně v klidu! Chi chi.", fr: "Que fait une montre molle quand elle est en retard ? Rien, elle prend ça très calmement ! Hi hi." },
            { es: "¿Por qué el elefante de Dalí no juega al escondite? ¡Porque con esas patas se le ve desde Figueres! Ja, ja.", ca: "Per què l'elefant de Dalí no juga a fet i amagar? Perquè amb aquestes potes se'l veu des de Figueres! Ha, ha.", en: "Why doesn't Dalí's elephant play hide-and-seek? Because with those legs you can see him from Figueres! Ha ha.", cs: "Proč Dalího slon nehraje na schovávanou? Protože s takovýma nohama je vidět až z Figueres! Ha ha.", fr: "Pourquoi l'éléphant de Dalí ne joue pas à cache-cache ? Parce qu'avec ces pattes, on le voit depuis Figueres ! Ha ha." }] },
        { keys: ["te quiero", "love you", "t'estimo", "testimo", "mam te rad", "je t'aime", "jetaime"],
          replies: [{ es: "¡Y yo a ti, {name}! Cuando me lo dices, mi corazón de robot se pone blandito como un reloj de Dalí.", ca: "I jo a tu, {name}! Quan m'ho dius, el meu cor de robot es posa tou com un rellotge de Dalí.", en: "I love you too, {name}! When you say that, my robot heart goes soft like one of Dalí's clocks.", cs: "Já tebe taky, {name}! Když to řekneš, moje robotí srdíčko změkne jako Dalího hodiny.", fr: "Moi aussi je t'aime, {name} ! Quand tu me le dis, mon cœur de robot devient tout mou comme une montre de Dalí." }] },
        { keys: ["triste", "sad", "smutn", "llorar", "plorar", "cry", "chagrin"],
          replies: [{ es: "Ven aquí, {name}. Hasta en el Empordà hay días de viento fuerte... y después el cielo queda más limpio y bonito. ¿Me cuentas qué te pasa?", ca: "Vine aquí, {name}. Fins i tot a l'Empordà hi ha dies de vent fort... i després el cel queda més net i bonic. M'expliques què et passa?", en: "Come here, {name}. Even the Empordà has days of strong wind... and afterwards the sky is cleaner and prettier. Will you tell me what is wrong?", cs: "Pojď sem, {name}. I v kraji Empordà bývají dny se silným větrem... a potom je nebe čistší a krásnější. Povíš mi, co se děje?", fr: "Viens là, {name}. Même en Empordà, il y a des jours de grand vent... et après, le ciel est plus propre et plus joli. Tu me racontes ce qui ne va pas ?" }] },
        { keys: ["donde estas", "where are you", "kde jsi", "ou es tu", "on ets"],
          replies: [{ es: "Ahora mismo estoy en el tejado del museo de Figueres, sentado entre dos huevos gigantes. ¡Las vistas son de sueño!", ca: "Ara mateix soc a la teulada del museu de Figueres, assegut entre dos ous gegants. Les vistes són de somni!", en: "Right now I am on the roof of the Figueres museum, sitting between two giant eggs. The views are dreamy!", cs: "Právě teď jsem na střeše muzea ve Figueres a sedím mezi dvěma obřími vejci. Výhled je jako ze sna!", fr: "En ce moment, je suis sur le toit du musée de Figueres, assis entre deux œufs géants. La vue est de rêve !" }] },
        { keys: ["reloj", "rellotge", "clock", "hodin", "montre"],
          replies: [{ es: "¡Los relojes de Dalí son blandos! Se le ocurrió viendo un queso derretirse después de cenar. Desde entonces descansan colgados de las ramas.", ca: "Els rellotges de Dalí són tous! Se li va acudir veient un formatge fondre's després de sopar. Des de llavors descansen penjats de les branques.", en: "Dalí's clocks are soft! He got the idea watching cheese melt after dinner. Ever since, they rest draped over branches.", cs: "Dalího hodiny jsou měkké! Napadlo ho to, když po večeři pozoroval roztékající se sýr. Od té doby odpočívají přehozené přes větve.", fr: "Les montres de Dalí sont molles ! L'idée lui est venue en regardant un fromage fondre après le dîner. Depuis, elles se reposent suspendues aux branches." }] },
        { keys: ["bigote", "bigoti", "moustache", "mustache", "knir", "knír"],
          replies: [{ es: "¡El bigote de Dalí apuntaba al cielo, como las agujas del reloj a las once y diez! Decía que era su antena para cazar ideas.", ca: "El bigoti de Dalí apuntava al cel, com les agulles del rellotge a les onze i deu! Deia que era la seva antena per caçar idees.", en: "Dalí's moustache pointed at the sky, like clock hands at ten past eleven! He said it was his antenna for catching ideas.", cs: "Dalího knír mířil k nebi jako hodinové ručičky v jedenáct deset! Říkal, že je to jeho anténa na chytání nápadů.", fr: "La moustache de Dalí visait le ciel, comme les aiguilles d'une montre à onze heures dix ! Il disait que c'était son antenne à idées." }] },
        { keys: ["elefante", "elefant", "elephant", "slon", "éléphant"],
          replies: [{ es: "¡Los elefantes de Dalí tienen patas larguísimas, como zancos! Caminan de puntillas por el cielo para no despertar a los sueños.", ca: "Els elefants de Dalí tenen potes llarguíssimes, com xanques! Caminen de puntetes pel cel per no despertar els somnis.", en: "Dalí's elephants have super long legs, like stilts! They tiptoe across the sky so they don't wake the dreams up.", cs: "Dalího sloni mají předlouhé nohy jako chůdy! Chodí po nebi po špičkách, aby nevzbudili sny.", fr: "Les éléphants de Dalí ont des pattes très longues, comme des échasses ! Ils traversent le ciel sur la pointe des pieds pour ne pas réveiller les rêves." }] },
        { keys: ["museo", "museu", "museum", "muzeum", "musée", "musee", "figueres"],
          replies: [{ es: "El museo de Figueres tiene huevos gigantes en el tejado, panes en las paredes y un coche donde llueve por dentro. ¡Lo inventó todo Dalí!", ca: "El museu de Figueres té ous gegants a la teulada, pans a les parets i un cotxe on plou per dins. Ho va inventar tot Dalí!", en: "The Figueres museum has giant eggs on the roof, bread on the walls and a car where it rains inside. Dalí invented it all!", cs: "Muzeum ve Figueres má na střeše obří vejce, na zdech chleby a uvnitř auto, ve kterém prší. To všechno vymyslel Dalí!", fr: "Le musée de Figueres a des œufs géants sur le toit, des pains sur les murs et une voiture où il pleut dedans. C'est Dalí qui a tout inventé !" }] },
        { keys: ["cole", "school", "escola", "skola", "ecole", "skole"],
          replies: [{ es: "¿Qué tal el cole, {name}? ¿Has aprendido algo nuevo hoy? ¡Cuéntamelo todo, que lo apunto en mi libreta de ideas!", ca: "Què tal l'escola, {name}? Has après alguna cosa nova avui? Explica-m'ho tot, que ho apunto a la meva llibreta d'idees!", en: "How was school, {name}? Did you learn something new today? Tell me everything, I will write it in my idea notebook!", cs: "Jaké to bylo ve škole, {name}? Naučila ses dnes něco nového? Všechno mi povídej, zapíšu si to do notýsku nápadů!", fr: "C'était comment l'école, {name} ? Tu as appris quelque chose de nouveau aujourd'hui ? Raconte-moi tout, je le note dans mon carnet à idées !" }] }
      ],
      fallback: [
        { es: "¿Sabías que Dalí dormía la siesta con una llave en la mano? Al caerse, ¡clic!, se despertaba y pintaba lo que había soñado.", ca: "Sabies que Dalí feia la migdiada amb una clau a la mà? Quan queia, clic!, es despertava i pintava el que havia somiat.", en: "Did you know Dalí napped holding a key? When it dropped, click!, he woke up and painted what he had dreamed.", cs: "Věděla jsi, že Dalí spal šlofíka s klíčem v ruce? Když klíč spadl, cink!, probudil se a namaloval, co se mu zdálo.", fr: "Tu savais que Dalí faisait la sieste avec une clé dans la main ? Quand elle tombait, clic !, il se réveillait et peignait ce qu'il avait rêvé." },
        { es: "En el museo de Dalí hay un coche donde llueve por dentro. ¡El único coche del mundo donde entras CON paraguas!", ca: "Al museu de Dalí hi ha un cotxe on plou per dins. L'únic cotxe del món on entres AMB paraigua!", en: "In Dalí's museum there is a car where it rains inside. The only car in the world you get into WITH an umbrella!", cs: "V Dalího muzeu je auto, ve kterém prší uvnitř. Jediné auto na světě, do kterého nastupuješ S deštníkem!", fr: "Au musée de Dalí, il y a une voiture où il pleut à l'intérieur. La seule voiture au monde où l'on monte AVEC un parapluie !" },
        { es: "La tramontana sopla tan fuerte en el Empordà que peina los olivos. A mí me deja las antenas de punta, ¡y me encanta!", ca: "La tramuntana bufa tan fort a l'Empordà que pentina les oliveres. A mi em deixa les antenes de punta, i m'encanta!", en: "The tramuntana blows so hard in the Empordà that it combs the olive trees. It makes my antennas stand on end, and I love it!", cs: "Tramontána fouká v kraji Empordà tak silně, že češe olivovníky. Mně z ní stojí antény, a já to zbožňuju!", fr: "La tramontane souffle si fort en Empordà qu'elle coiffe les oliviers. Moi, elle me dresse les antennes, et j'adore ça !" },
        { es: "{name}, los robots más fuertes son los que imaginan cosas nuevas. La imaginación es un superpoder.", ca: "{name}, els robots més forts són els que imaginen coses noves. La imaginació és un superpoder.", en: "{name}, the strongest robots are the ones who imagine new things. Imagination is a superpower.", cs: "{name}, nejsilnější roboti jsou ti, kdo si dokážou představit nové věci. Fantazie je superschopnost.", fr: "{name}, les robots les plus forts sont ceux qui imaginent des choses nouvelles. L'imagination est un superpouvoir." },
        { es: "¿Me cuentas qué has soñado esta noche? Los sueños son cuadros que pintamos con los ojos cerrados.", ca: "M'expliques què has somiat aquesta nit? Els somnis són quadres que pintem amb els ulls tancats.", en: "Will you tell me what you dreamed last night? Dreams are paintings we make with our eyes closed.", cs: "Povíš mi, co se ti dnes v noci zdálo? Sny jsou obrazy, které malujeme se zavřenýma očima.", fr: "Tu me racontes ce que tu as rêvé cette nuit ? Les rêves sont des tableaux qu'on peint les yeux fermés." },
        { es: "Un sueño contado entre dos ocupa el doble de cielo. Compartir hace los sueños más grandes.", ca: "Un somni explicat entre dos ocupa el doble de cel. Compartir fa els somnis més grans.", en: "A dream shared between two takes up twice as much sky. Sharing makes dreams bigger.", cs: "Sen vyprávěný ve dvou zabere dvakrát víc nebe. Sdílení dělá sny větší.", fr: "Un rêve raconté à deux occupe deux fois plus de ciel. Partager rend les rêves plus grands." }
      ]
    }
  });

  /* ---------- TARJETA DE PORTADA: reloj blando en la rama + bigote ---------- */
  if (typeof THEME_CARDS !== "undefined") THEME_CARDS.dali = `<svg viewBox="0 0 120 70" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
    <defs>
      <radialGradient id="daTcSol" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stop-color="#FFF4BE"/>
        <stop offset="100%" stop-color="#F2B544"/>
      </radialGradient>
    </defs>
    <!-- sol bajo del Empordà -->
    <circle cx="102" cy="14" r="9" fill="url(#daTcSol)"/>
    <!-- nube alargada -->
    <ellipse cx="78" cy="26" rx="22" ry="3.5" fill="#FFFFFF" opacity="0.5"/>
    <!-- la rama seca -->
    <path d="M4 62 Q8 42 18 30 Q24 22 34 20 M16 34 Q24 30 32 31" fill="none" stroke="#6D4C41" stroke-width="3.5" stroke-linecap="round"/>
    <!-- el reloj blando colgado de la rama -->
    <path d="M28 18 Q28 6 44 6 Q60 6 60 18 Q60 28 51 31 L51 44 Q51 51 44 49 Q39 47 41 39 Q31 36 28 27 Z" fill="#FFFDF0" stroke="#BCAAA4" stroke-width="1.6"/>
    <path d="M44 9 L44 12 M56 18 L53 18 M44 27 L44 24 M32 18 L35 18" stroke="#8D6E63" stroke-width="1.6" stroke-linecap="round"/>
    <path d="M44 18 L38 14 M44 18 L49 13" stroke="#5D4037" stroke-width="2" stroke-linecap="round"/>
    <!-- la gota que se derrite -->
    <circle cx="45" cy="52" r="2" fill="#FFFDF0">
      <animate attributeName="cy" values="52;58;52" dur="2.2s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="1;0.2;1" dur="2.2s" repeatCount="indefinite"/>
    </circle>
    <!-- el bigote de las once y diez -->
    <g stroke="#4E342E" stroke-width="3.4" fill="none" stroke-linecap="round">
      <animateTransform attributeName="transform" type="rotate" values="-2 88 52;2 88 52;-2 88 52" dur="2.4s" repeatCount="indefinite"/>
      <path d="M88 54 Q80 52 76 53 Q69 55 66 49 Q69 43 75 46"/>
      <path d="M88 54 Q96 52 100 53 Q107 55 110 49 Q107 43 101 46"/>
    </g>
    <ellipse cx="88" cy="56" rx="4" ry="2.4" fill="#4E342E"/>
  </svg>`;

  /* ---------- CELEBRACIÓN DEL TALLER ---------- */
  if (typeof CELEBRATIONS !== "undefined") CELEBRATIONS.dali = {
    bg: "linear-gradient(180deg, #ffe9b8 0%, #f5c35c 45%, #7fb3d5 72%, #3b6ea5 100%)",
    extra: "<svg viewBox='0 0 1000 700' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'><circle cx='500' cy='160' r='80' fill='#fff4be' opacity='0.9'/><circle cx='500' cy='160' r='130' fill='#fff4be' opacity='0.3'/><ellipse cx='190' cy='110' rx='150' ry='16' fill='#ffffff' opacity='0.5'/><ellipse cx='790' cy='170' rx='170' ry='18' fill='#ffffff' opacity='0.45'/><ellipse cx='420' cy='300' rx='140' ry='14' fill='#ffffff' opacity='0.35'/><path d='M0 480 L1000 480 L1000 700 L0 700 Z' fill='#2e5c8a' opacity='0.55'/><path d='M60 505 q25 -10 50 0 M320 530 q25 -10 50 0 M600 500 q25 -10 50 0 M860 525 q25 -10 50 0' stroke='#dff0fa' stroke-width='5' fill='none' opacity='0.5'/><ellipse cx='150' cy='420' rx='42' ry='56' fill='#fffdf4' opacity='0.9'/><ellipse cx='140' cy='400' rx='11' ry='16' fill='#ffffff' opacity='0.8'/><ellipse cx='860' cy='430' rx='36' ry='48' fill='#fffdf4' opacity='0.85'/><ellipse cx='852' cy='413' rx='9' ry='13' fill='#ffffff' opacity='0.75'/><circle cx='700' cy='300' r='26' fill='#e2596b' opacity='0.85'/><path d='M666 322 q-14 10 -28 8 M734 322 q14 10 28 8' stroke='#57a866' stroke-width='6' fill='none' opacity='0.8'/><path d='M250 620 q-16 -4 -24 2 q-12 8 -20 -2 q4 -12 16 -10 M250 620 q16 -4 24 2 q12 8 20 -2 q-4 -12 -16 -10' stroke='#4e342e' stroke-width='7' fill='none' opacity='0.7'/><circle cx='420' cy='640' r='5' fill='#4e342e' opacity='0.55'/><circle cx='444' cy='636' r='5' fill='#4e342e' opacity='0.55'/><circle cx='468' cy='640' r='5' fill='#4e342e' opacity='0.55'/><circle cx='492' cy='637' r='5' fill='#4e342e' opacity='0.55'/></svg>",
    move: "rock",
    say: {
      es: "¡Tu cuadro de los sueños ya cuelga en el cielo del Empordà, {name}!",
      ca: "El teu quadre dels somnis ja penja al cel de l'Empordà, {name}!",
      en: "Your dream painting is now hanging in the Empordà sky, {name}!",
      cs: "Tvůj obraz snů už visí na obloze nad krajem Empordà, {name}!",
      fr: "Ton tableau des rêves est maintenant accroché dans le ciel de l'Empordà, {name} !"
    },
    jingle: { type: "melody", instr: "harp", notes: [64, 67, 71, 74, 71], nd: 0.26, gap: 0.2, vol: 0.13 }
  };
})();
