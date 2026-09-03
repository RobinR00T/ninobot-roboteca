"use strict";
/* ============================================================
   Contenido de COCINA (parte B): historias ramificadas,
   canciones, traductor, mapa de exploración, mates, taller
   de la tarta, famosos y charla.
   ============================================================ */

Object.assign(THEMES.cocina.content, {

  /* ---------- HISTORIAS (ramifican de verdad) ---------- */
  stories: [
    {
      id: "sopa", emoji: "🍲", start: "n1",
      title: { es: "La sopa de la abuela", ca: "La sopa de l'àvia", en: "Grandma's Soup", cs: "Babiččina polévka", fr: "La soupe de mamie" },
      nodes: {
        n1: {
          text: { es: "La abuela prepara su sopa famosa para la cena de toda la familia... pero hoy no sabe igual. ¡Falta el ingrediente secreto y la abuela no recuerda cuál es! ¿Cómo lo encontramos, {name}?", ca: "L'àvia prepara la seva sopa famosa per al sopar de tota la família... però avui no té el mateix gust. Falta l'ingredient secret i l'àvia no recorda quin és! Com el trobem, {name}?", en: "Grandma is making her famous soup for the whole family dinner... but today it does not taste the same. The secret ingredient is missing and grandma cannot remember what it is! How do we find it, {name}?", cs: "Babička vaří svou slavnou polévku pro celou rodinu... ale dnes nechutná jako jindy. Chybí tajná přísada a babička si nemůže vzpomenout, která to je! Jak ji najdeme, {name}?", fr: "Mamie prépare sa soupe célèbre pour le dîner de toute la famille... mais aujourd'hui, elle n'a pas le même goût. Il manque l'ingrédient secret et mamie ne se souvient plus lequel c'est ! Comment le retrouver, {name} ?" },
          choices: [
            { t: { es: "Buscamos en su libro de recetas", ca: "Busquem al seu llibre de receptes", en: "Let's look in her recipe book", cs: "Podíváme se do jejího receptáře", fr: "Cherchons dans son livre de recettes" }, go: "n2a" },
            { t: { es: "Probamos la sopa con mucha atención", ca: "Tastem la sopa amb molta atenció", en: "Let's taste the soup very carefully", cs: "Pozorně polévku ochutnáme", fr: "Goûtons la soupe très attentivement" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "El libro de la abuela es viejito y está lleno de manchas y notas. En la página de la sopa hay un corazón dibujado y una palabra borrosa que... ¡no se puede leer!", ca: "El llibre de l'àvia és vellet i és ple de taques i notes. A la pàgina de la sopa hi ha un cor dibuixat i una paraula borrosa que... no es pot llegir!", en: "Grandma's book is old and full of stains and notes. On the soup page there is a little drawn heart and a blurry word that... cannot be read!", cs: "Babiččin receptář je stařičký a plný skvrn a poznámek. Na stránce s polévkou je nakreslené srdíčko a rozmazané slovo, které... se nedá přečíst!", fr: "Le livre de mamie est tout vieux, plein de taches et de notes. Sur la page de la soupe, il y a un petit cœur dessiné et un mot flou que... l'on ne peut pas lire !" },
          choices: [
            { t: { es: "Oler la página con cuidado", ca: "Olorar la pàgina amb compte", en: "Smell the page carefully", cs: "Opatrně ke stránce přičichnout", fr: "Sentir la page avec soin" }, go: "n3a" },
            { t: { es: "Llamar a la tía, que también la cocina", ca: "Trucar a la tieta, que també la cuina", en: "Call auntie, she cooks it too", cs: "Zavolat tetě, ta ji vaří taky", fr: "Appeler tata, elle la cuisine aussi" }, go: "n3b" }
          ]
        },
        n2b: {
          text: { es: "{name} sopla primero y prueba una cucharadita. Mmm... está rica, pero le falta un puntito de alegría. La lengua nota lo dulce de la zanahoria, lo salado del caldo... ¿y ese toque fresco que siempre baila al final?", ca: "{name} bufa primer i tasta una cullerada. Mmm... és bona, però li falta un puntet d'alegria. La llengua nota el dolç de la pastanaga, el salat del brou... i aquell toc fresc que sempre balla al final?", en: "{name} blows first and tries a little spoonful. Mmm... it is nice, but it is missing a tiny spark of joy. The tongue finds the sweet carrot, the salty broth... but where is that fresh touch that always dances at the end?", cs: "{name} nejdřív foukne a ochutná lžičku. Mmm... dobrá je, ale chybí jí kousíček radosti. Jazyk pozná sladkou mrkev, slaný vývar... ale kde je ta svěží tečka, co vždycky tančí na konci?", fr: "{name} souffle d'abord et goûte une petite cuillerée. Mmm... elle est bonne, mais il lui manque une étincelle de joie. La langue trouve la carotte sucrée, le bouillon salé... mais où est cette touche fraîche qui danse toujours à la fin ?" },
          choices: [
            { t: { es: "¡Falta algo verde y fresco del huerto!", ca: "Falta alguna cosa verda i fresca de l'hort!", en: "Something green and fresh is missing!", cs: "Chybí něco zeleného a čerstvého!", fr: "Il manque quelque chose de vert et frais !" }, go: "n3a" },
            { t: { es: "Miramos el libro de recetas", ca: "Mirem el llibre de receptes", en: "Let's check the recipe book", cs: "Mrkneme do receptáře", fr: "Regardons le livre de recettes" }, go: "n2a" }
          ]
        },
        n3a: {
          text: { es: "¡Pista caliente! La página huele a limón y a hierbas. En la ventana de la cocina, el huertecito de macetas espera: perejil, menta y albahaca. {name} corta unas hojitas con los dedos, despacito, y la planta sigue tan contenta.", ca: "Pista calenta! La pàgina fa olor de llimona i d'herbes. A la finestra de la cuina, l'hortet de testos espera: julivert, menta i alfàbrega. {name} talla unes fulletes amb els dits, a poc a poc, i la planta segueix tan contenta.", en: "Hot clue! The page smells of lemon and herbs. On the kitchen window, the little pot garden is waiting: parsley, mint and basil. {name} picks a few leaves gently with two fingers, and the plant stays perfectly happy.", cs: "Horká stopa! Stránka voní citronem a bylinkami. Na kuchyňském okně čeká zahrádka v květináčích: petrželka, máta a bazalka. {name} opatrně utrhne pár lístků a rostlince to vůbec nevadí.", fr: "Piste brûlante ! La page sent le citron et les herbes. Sur la fenêtre de la cuisine, le petit jardin en pots attend : persil, menthe et basilic. {name} cueille quelques feuilles doucement, et la plante reste toute contente." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n3b: {
          text: { es: "La tía se ríe al teléfono: 'El secreto de la abuela nunca fue una especia rara... pero yo siempre le pongo un chorrito de limón y unas hojitas del huerto de su ventana'. ¡A la ventana, rápido!", ca: "La tieta riu al telèfon: 'El secret de l'àvia mai no va ser una espècia rara... però jo sempre hi poso un rajolí de llimona i unes fulletes de l'hortet de la seva finestra'. A la finestra, de pressa!", en: "Auntie laughs on the phone: 'Grandma's secret was never a strange spice... but I always add a squeeze of lemon and a few little leaves from her window garden'. To the window, quick!", cs: "Teta se do telefonu směje: 'Babiččino tajemství nikdy nebylo žádné divné koření... ale já vždycky přidám pár kapek citronu a lísteček z její zahrádky na okně'. Rychle k oknu!", fr: "Tata rigole au téléphone : « Le secret de mamie n'a jamais été une épice bizarre... mais moi, j'ajoute toujours un filet de citron et quelques feuilles de son jardin de fenêtre ». Vite, à la fenêtre !" },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n4: {
          text: { es: "Añadimos el toque verde y el chorrito de limón. La abuela prueba y sonríe: '¡Casi! Pero mi ingrediente secreto de verdad no se compra ni se corta. ¿Lo adivinas, {name}?'", ca: "Hi afegim el toc verd i el rajolí de llimona. L'àvia tasta i somriu: 'Gairebé! Però el meu ingredient secret de debò no es compra ni es talla. L'endevines, {name}?'", en: "We add the green touch and the squeeze of lemon. Grandma tastes it and smiles: 'Almost! But my real secret ingredient cannot be bought or picked. Can you guess it, {name}?'", cs: "Přidáme zelenou tečku a pár kapek citronu. Babička ochutná a usměje se: 'Skoro! Ale moje opravdová tajná přísada se nedá koupit ani utrhnout. Uhodneš ji, {name}?'", fr: "On ajoute la touche verte et le filet de citron. Mamie goûte et sourit : « Presque ! Mais mon vrai ingrédient secret ne s'achète pas et ne se cueille pas. Tu devines, {name} ? »" },
          choices: [
            { t: { es: "¡Es el cariño!", ca: "És l'estima!", en: "It is love!", cs: "Je to láska!", fr: "C'est l'amour !" }, go: "e1" },
            { t: { es: "¡Es cocinar todos juntos!", ca: "És cuinar tots junts!", en: "It is cooking all together!", cs: "Je to vařit všichni spolu!", fr: "C'est cuisiner tous ensemble !" }, go: "e2" }
          ]
        },
        e1: {
          end: true,
          text: { es: "'¡El cariño!', dice la abuela abrazando a {name}. 'Remover despacito pensando en quien va a comer: ese es mi secreto desde siempre'. Esa noche la sopa sabe a abuela, a limón nuevo y a familia. Y todos repiten.", ca: "'L'estima!', diu l'àvia abraçant {name}. 'Remenar a poc a poc pensant en qui menjarà: aquest és el meu secret de sempre'. Aquella nit la sopa té gust d'àvia, de llimona nova i de família. I tothom repeteix.", en: "'Love!', says grandma, hugging {name}. 'Stirring slowly while thinking of the people who will eat: that has always been my secret'. That night the soup tastes of grandma, of new lemon and of family. And everyone asks for more.", cs: "'Láska!', říká babička a obejme {name}. 'Míchat pomaloučku a myslet na ty, kdo budou jíst: to je odjakživa moje tajemství'. Ten večer polévka chutná po babičce, po novém citronu a po rodině. A všichni si přidávají.", fr: "« L'amour ! », dit mamie en serrant {name} dans ses bras. « Remuer doucement en pensant à ceux qui vont manger : c'est mon secret depuis toujours ». Ce soir-là, la soupe a le goût de mamie, de citron nouveau et de famille. Et tout le monde en redemande." }
        },
        e2: {
          end: true,
          text: { es: "'¡Cocinar juntos!', celebra la abuela, y reparte tareas: uno lava las verduras, otro pone la mesa y {name} remueve despacito. La sopa nueva sabe aún mejor porque la hicieron entre todos. Y la receta gana una nota nueva, escrita con la letra de {name}.", ca: "'Cuinar junts!', celebra l'àvia, i reparteix feines: un renta les verdures, un altre para taula i {name} remena a poc a poc. La sopa nova és encara més bona perquè l'han feta entre tots. I la recepta guanya una nota nova, escrita amb la lletra de {name}.", en: "'Cooking together!', cheers grandma, and she shares out the jobs: one washes the veggies, another sets the table and {name} stirs slowly. The new soup tastes even better because everyone made it. And the recipe gets a brand new note, written in {name}'s handwriting.", cs: "'Vařit spolu!', raduje se babička a rozdělí úkoly: jeden myje zeleninu, druhý prostírá a {name} pomaloučku míchá. Nová polévka chutná ještě líp, protože ji udělali všichni společně. A do receptu přibude nová poznámka, napsaná rukou {name}.", fr: "« Cuisiner ensemble ! », se réjouit mamie, et elle partage les tâches : l'un lave les légumes, l'autre met la table et {name} remue doucement. La nouvelle soupe est encore meilleure parce que tout le monde l'a faite. Et la recette gagne une nouvelle note, écrite de la main de {name}." }
        }
      }
    },
    {
      id: "pastel", emoji: "🎂", start: "n1",
      title: { es: "El pastel de cumpleaños sorpresa", ca: "El pastís d'aniversari sorpresa", en: "The Surprise Birthday Cake", cs: "Narozeninový dort s překvapením", fr: "Le gâteau d'anniversaire surprise" },
      nodes: {
        n1: {
          text: { es: "¡Mañana es el cumpleaños de papá y él no sospecha nada! Vamos a hacerle un pastel sorpresa en secreto, {name}. Chsss... ¿De qué sabor lo hacemos?", ca: "Demà és l'aniversari del papa i ell no sospita res! Li farem un pastís sorpresa en secret, {name}. Xxxt... De quin gust el fem?", en: "Tomorrow is dad's birthday and he suspects nothing! We are going to bake him a surprise cake in secret, {name}. Shhh... Which flavour shall we make?", cs: "Zítra má táta narozeniny a nic netuší! Upečeme mu tajně dort s překvapením, {name}. Pššš... Jakou příchuť vybereme?", fr: "Demain, c'est l'anniversaire de papa et il ne se doute de rien ! On va lui faire un gâteau surprise en secret, {name}. Chut... On le fait à quel parfum ?" },
          choices: [
            { t: { es: "De chocolate, ¡su favorito!", ca: "De xocolata, el seu preferit!", en: "Chocolate, his favourite!", cs: "Čokoládový, jeho nejoblíbenější!", fr: "Au chocolat, son préféré !" }, go: "n2a" },
            { t: { es: "De limón, fresquito", ca: "De llimona, fresquet", en: "Lemon, nice and fresh", cs: "Citronový, pěkně svěží", fr: "Au citron, tout frais" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "¡Manos a la masa! Harina, huevos, cacao del bueno... Un momento. {name} levanta el paquete de harina y... ¡oh, no! Solo queda un poquito en el fondo.", ca: "Mans a la massa! Farina, ous, cacau del bo... Un moment. {name} aixeca el paquet de farina i... oh, no! Només en queda una miqueta al fons.", en: "Hands in the dough! Flour, eggs, the good cocoa... Wait a second. {name} lifts the flour bag and... oh no! There is only a tiny bit left at the bottom.", cs: "Hurá na těsto! Mouka, vejce, to dobré kakao... Moment. {name} zvedne sáček s moukou a... ale ne! Na dně zbývá jen trošička.", fr: "Les mains à la pâte ! Farine, œufs, le bon cacao... Une seconde. {name} soulève le paquet de farine et... oh non ! Il n'en reste qu'un tout petit peu au fond." },
          choices: [
            { t: { es: "Pedir harina a la vecina", ca: "Demanar farina a la veïna", en: "Ask the neighbour for flour", cs: "Poprosit sousedku o mouku", fr: "Demander de la farine à la voisine" }, go: "n3a" },
            { t: { es: "Pesar en la balanza a ver si llega", ca: "Pesar a la balança a veure si arriba", en: "Weigh it and see if it is enough", cs: "Zvážit ji, jestli vystačí", fr: "La peser pour voir s'il y en a assez" }, go: "n3b" }
          ]
        },
        n2b: {
          text: { es: "¡Manos a la masa! Harina, huevos, ralladura de limón que huele a primavera... Un momento. {name} levanta el paquete de harina y... ¡oh, no! Solo queda un poquito en el fondo.", ca: "Mans a la massa! Farina, ous, ratlladura de llimona que fa olor de primavera... Un moment. {name} aixeca el paquet de farina i... oh, no! Només en queda una miqueta al fons.", en: "Hands in the dough! Flour, eggs, lemon zest that smells like spring... Wait a second. {name} lifts the flour bag and... oh no! There is only a tiny bit left at the bottom.", cs: "Hurá na těsto! Mouka, vejce, citronová kůra vonící jarem... Moment. {name} zvedne sáček s moukou a... ale ne! Na dně zbývá jen trošička.", fr: "Les mains à la pâte ! Farine, œufs, zeste de citron qui sent le printemps... Une seconde. {name} soulève le paquet de farine et... oh non ! Il n'en reste qu'un tout petit peu au fond." },
          choices: [
            { t: { es: "Pedir harina a la vecina", ca: "Demanar farina a la veïna", en: "Ask the neighbour for flour", cs: "Poprosit sousedku o mouku", fr: "Demander de la farine à la voisine" }, go: "n3a" },
            { t: { es: "Pesar en la balanza a ver si llega", ca: "Pesar a la balança a veure si arriba", en: "Weigh it and see if it is enough", cs: "Zvážit ji, jestli vystačí", fr: "La peser pour voir s'il y en a assez" }, go: "n3b" }
          ]
        },
        n3a: {
          text: { es: "Toc, toc. La vecina abre con una sonrisa: '¿Harina? ¡Claro! ¿Y para quién es ese pastel?'. '¡Es un secreto!', susurra {name}. La vecina presta la harina y promete no contar nada... a cambio de un trocito mañana. ¡Trato hecho!", ca: "Toc, toc. La veïna obre amb un somriure: 'Farina? És clar! I per a qui és aquest pastís?'. 'És un secret!', xiuxiueja {name}. La veïna deixa la farina i promet no dir res... a canvi d'un trosset demà. Tracte fet!", en: "Knock, knock. The neighbour opens with a smile: 'Flour? Of course! And who is that cake for?'. 'It is a secret!', whispers {name}. She lends the flour and promises not to tell... in exchange for a little slice tomorrow. Deal!", cs: "Ťuk, ťuk. Sousedka otevře s úsměvem: 'Mouku? Jistě! A pro koho ten dort bude?'. 'To je tajemství!', šeptá {name}. Sousedka mouku půjčí a slíbí mlčet... výměnou za kousek dortu zítra. Platí!", fr: "Toc, toc. La voisine ouvre avec un sourire : « De la farine ? Bien sûr ! Et il est pour qui, ce gâteau ? ». « C'est un secret ! », chuchote {name}. Elle prête la farine et promet de ne rien dire... en échange d'une petite part demain. Marché conclu !" },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n3b: {
          text: { es: "La balanza dice que falta un poquito de harina... pero la abuela guiña un ojo: 'Media harina y media almendra molida: así lo hacía mi madre'. ¡El pastel saldrá aún más jugoso! Las recetas también saben cambiar de plan.", ca: "La balança diu que falta una miqueta de farina... però l'àvia fa l'ullet: 'Meitat farina i meitat ametlla mòlta: així ho feia la meva mare'. El pastís sortirà encara més sucós! Les receptes també saben canviar de pla.", en: "The scale says a little flour is missing... but grandma winks: 'Half flour and half ground almonds: that is how my mother did it'. The cake will be even softer! Recipes know how to change plans too.", cs: "Váha říká, že trocha mouky chybí... ale babička mrkne: 'Půlka mouky a půlka mletých mandlí: tak to dělala moje maminka'. Dort bude ještě vláčnější! I recepty umí změnit plán.", fr: "La balance dit qu'il manque un peu de farine... mais mamie fait un clin d'œil : « Moitié farine, moitié amandes moulues : c'est comme ça que faisait ma mère ». Le gâteau sera encore plus moelleux ! Les recettes aussi savent changer de plan." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n4: {
          text: { es: "La masa ya duerme en el molde y los mayores la meten en el horno con las manoplas. Por la ventanita se ve crecer... mmm, ¡qué olor! De repente se oye la llave de papá en la puerta. ¡Llega pronto! ¿Qué hacemos, {name}?", ca: "La massa ja dorm al motlle i els grans la posen al forn amb les manyoples. Per la finestreta es veu créixer... mmm, quina olor! De sobte se sent la clau del papa a la porta. Arriba aviat! Què fem, {name}?", en: "The batter is asleep in its tin and the grown-ups slide it into the oven with their mitts. Through the little window you can see it grow... mmm, what a smell! Suddenly dad's key rattles in the door. He is early! What do we do, {name}?", cs: "Těsto už spí ve formě a dospělí ho s chňapkami vloží do trouby. Okénkem je vidět, jak roste... mmm, ta vůně! Najednou je slyšet tátův klíč ve dveřích. Jde dřív! Co uděláme, {name}?", fr: "La pâte dort déjà dans son moule et les grands la glissent au four avec leurs gants. Par la petite fenêtre, on la voit gonfler... mmm, quelle odeur ! Soudain, on entend la clé de papa dans la porte. Il rentre tôt ! Qu'est-ce qu'on fait, {name} ?" },
          choices: [
            { t: { es: "¡Todos escondidos, luces apagadas!", ca: "Tots amagats, llums apagats!", en: "Everyone hide, lights off!", cs: "Všichni se schovat, zhasnout!", fr: "Tout le monde se cache, lumières éteintes !" }, go: "e1" },
            { t: { es: "Le tapamos los ojos hasta mañana... ¡ni una pista!", ca: "Li tapem els ulls fins demà... ni una pista!", en: "We cover his eyes... not a single clue!", cs: "Zakryjeme mu oči... ani jednu stopu!", fr: "On lui cache les yeux... pas un seul indice !" }, go: "e2" },
            { t: { es: "¡Que nos ayude a decorarlo sin saber para quién es!", ca: "Que ens ajudi a decorar-lo sense saber per a qui és!", en: "Let him help decorate it without knowing who it is for!", cs: "Ať ho pomůže zdobit, aniž ví, pro koho je!", fr: "Qu'il aide à le décorer sans savoir pour qui il est !" }, go: "e3" }
          ]
        },
        e1: {
          end: true,
          text: { es: "Papá entra en la cocina a oscuras, la luz se enciende y... ¡SORPRESA! El pastel llega a la mesa con sus velas bailando, todos cantan cumpleaños feliz y papá pide un deseo larguísimo. Dice que es el mejor pastel de su vida, y el trozo más grande viaja a casa de la vecina. Promesa cumplida, {name}.", ca: "El papa entra a la cuina a les fosques, el llum s'encén i... SORPRESA! El pastís arriba a taula amb les espelmes ballant, tothom canta per molts anys i el papa demana un desig llarguíssim. Diu que és el millor pastís de la seva vida, i el tros més gran viatja a casa de la veïna. Promesa complerta, {name}.", en: "Dad walks into the dark kitchen, the light flicks on and... SURPRISE! The cake arrives with its candles dancing, everyone sings happy birthday and dad makes a very long wish. He says it is the best cake of his life, and the biggest slice travels to the neighbour's house. Promise kept, {name}.", cs: "Táta vejde do tmavé kuchyně, rozsvítí se a... PŘEKVAPENÍ! Dort připluje na stůl s tančícími svíčkami, všichni zpívají a táta si přeje něco hodně dlouhého. Říká, že je to nejlepší dort jeho života, a největší kousek putuje k sousedce. Slib je splněný, {name}.", fr: "Papa entre dans la cuisine toute sombre, la lumière s'allume et... SURPRISE ! Le gâteau arrive avec ses bougies qui dansent, tout le monde chante joyeux anniversaire et papa fait un vœu très très long. Il dit que c'est le meilleur gâteau de sa vie, et la plus grosse part voyage chez la voisine. Promesse tenue, {name} !" }
        },
        e2: {
          end: true,
          text: { es: "Misión silencio: el pastel pasa la noche escondido en la despensa. Al día siguiente, papá desayuna con los ojos tapados, oliendo el aire: 'Mmm... ¿huele a pastel?'. Cuando abre los ojos, las velitas brillan delante de él. Sopla, pide un deseo y dice bajito: 'Ya se ha cumplido: estar todos juntos'.", ca: "Missió silenci: el pastís passa la nit amagat al rebost. L'endemà, el papa esmorza amb els ulls tapats, olorant l'aire: 'Mmm... fa olor de pastís?'. Quan obre els ulls, les espelmetes brillen davant seu. Bufa, demana un desig i diu fluixet: 'Ja s'ha complert: ser tots junts'.", en: "Mission silence: the cake spends the night hidden in the pantry. Next morning, dad has breakfast with his eyes covered, sniffing the air: 'Mmm... does it smell like cake?'. When he opens his eyes, the little candles are shining right in front of him. He blows, makes a wish and whispers: 'It already came true: all of us together'.", cs: "Mise ticho: dort přespí schovaný ve spíži. Ráno táta snídá se zakrytýma očima a větří: 'Mmm... voní tu dort?'. Když oči otevře, svíčky září přímo před ním. Foukne, něco si přeje a potichu řekne: 'Už se to splnilo: být všichni spolu'.", fr: "Mission silence : le gâteau passe la nuit caché dans le garde-manger. Le lendemain, papa prend son petit-déjeuner les yeux couverts, en reniflant l'air : « Mmm... ça sent le gâteau ? ». Quand il ouvre les yeux, les petites bougies brillent devant lui. Il souffle, fait un vœu et murmure : « Il est déjà exaucé : être tous ensemble »." }
        },
        e3: {
          end: true,
          text: { es: "Papá decora el pastel tan contento: nata por aquí, fresas por allá... '¿Y para quién es esta maravilla?', pregunta. '¡¡PARA TI!!', grita todo el mundo. Papá se ríe tanto que casi se le cae la manga pastelera: ha decorado su propio pastel de cumpleaños. 'El regalo más divertido del mundo', dice, y sopla las velas que él mismo colocó.", ca: "El papa decora el pastís tan content: nata per aquí, maduixes per allà... 'I per a qui és aquesta meravella?', pregunta. 'PER A TU!!', crida tothom. El papa riu tant que gairebé li cau la màniga pastissera: ha decorat el seu propi pastís d'aniversari. 'El regal més divertit del món', diu, i bufa les espelmes que ell mateix va col·locar.", en: "Dad decorates the cake happily: cream here, strawberries there... 'And who is this beauty for?', he asks. 'FOR YOU!!', everyone shouts. Dad laughs so hard he almost drops the piping bag: he has decorated his own birthday cake. 'The funniest present in the world', he says, and blows out the candles he placed himself.", cs: "Táta vesele zdobí dort: sem šlehačku, tam jahody... 'A pro koho je ta krása?', ptá se. 'PRO TEBE!!', volají všichni. Táta se směje tak, že mu málem upadne zdobicí sáček: nazdobil si vlastní narozeninový dort. 'Nejlegračnější dárek na světě', říká a sfoukne svíčky, které si sám rozestavěl.", fr: "Papa décore le gâteau tout content : de la chantilly par ici, des fraises par là... « Et pour qui est cette merveille ? », demande-t-il. « POUR TOI !! », crie tout le monde. Papa rit si fort qu'il en lâche presque la poche à douille : il a décoré son propre gâteau d'anniversaire. « Le cadeau le plus drôle du monde », dit-il, et il souffle les bougies qu'il avait lui-même posées." }
        }
      }
    },
    {
      id: "mercado", emoji: "🧺", start: "n1",
      title: { es: "La mañana en el mercado", ca: "El matí al mercat", en: "Morning at the Market", cs: "Ráno na trhu", fr: "Le matin au marché" },
      nodes: {
        n1: {
          text: { es: "¡Sábado por la mañana! Toca ir al mercado y hoy {name} lleva la cesta. En la lista de la compra: tomates, pan y algo especial para el postre. ¿Por dónde empezamos?", ca: "Dissabte al matí! Toca anar al mercat i avui {name} porta el cistell. A la llista de la compra: tomàquets, pa i alguna cosa especial per a les postres. Per on comencem?", en: "Saturday morning! Time for the market, and today {name} carries the basket. On the shopping list: tomatoes, bread and something special for dessert. Where do we start?", cs: "Sobotní ráno! Jde se na trh a dnes nese košík {name}. Na nákupním seznamu: rajčata, chleba a něco zvláštního jako moučník. Kde začneme?", fr: "Samedi matin ! Direction le marché, et aujourd'hui c'est {name} qui porte le panier. Sur la liste : des tomates, du pain et quelque chose de spécial pour le dessert. Par où on commence ?" },
          choices: [
            { t: { es: "Por el puesto de frutas y verduras", ca: "Per la parada de fruites i verdures", en: "The fruit and veggie stall", cs: "U stánku s ovocem a zeleninou", fr: "Par l'étal de fruits et légumes" }, go: "n2a" },
            { t: { es: "Por la panadería", ca: "Per la fleca", en: "The bakery", cs: "U pekařství", fr: "Par la boulangerie" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "La frutera nos enseña sus tomates: unos duros y verdes, otros rojos y blanditos que huelen a huerta. '¿Cuáles quieres, {name}?'", ca: "La fruitera ens ensenya els seus tomàquets: uns durs i verds, altres vermells i tovets que fan olor d'hort. 'Quins vols, {name}?'", en: "The stallholder shows us her tomatoes: some hard and green, some red and soft, smelling of the garden. 'Which ones would you like, {name}?'", cs: "Trhovkyně nám ukazuje rajčata: některá tvrdá a zelená, jiná červená a měkoučká, vonící zahrádkou. 'Která chceš, {name}?'", fr: "La marchande nous montre ses tomates : certaines dures et vertes, d'autres rouges et tendres, qui sentent le potager. « Lesquelles veux-tu, {name} ? »" },
          choices: [
            { t: { es: "Los rojos y maduros para hoy", ca: "Els vermells i madurs per a avui", en: "The red ripe ones for today", cs: "Ta červená a zralá na dnešek", fr: "Les rouges bien mûres pour aujourd'hui" }, go: "n3a" },
            { t: { es: "Rojos para hoy y durillos para dentro de unos días", ca: "Vermells per a avui i durets per d'aquí a uns dies", en: "Red for today and firm ones for later", cs: "Červená na dnešek a tvrdší na později", fr: "Des rouges pour aujourd'hui et des fermes pour plus tard" }, go: "n3b" }
          ]
        },
        n2b: {
          text: { es: "En la panadería el pan aún está calentito y el cristal se empaña de olor rico. El panadero envuelve la barra en papel, nos regala el currusquito y susurra: 'Los tomates buenos se eligen con la nariz'. ¡Al puesto de frutas!", ca: "A la fleca el pa encara és calentó i el vidre s'entela d'olor bona. El forner embolica la barra amb paper, ens regala el crostonet i xiuxiueja: 'Els tomàquets bons es trien amb el nas'. Cap a la parada de fruites!", en: "At the bakery the bread is still warm and the glass fogs up with the lovely smell. The baker wraps the loaf in paper, gifts us the crusty end and whispers: 'Good tomatoes are chosen with your nose'. To the fruit stall!", cs: "V pekařství je chleba ještě teplý a sklo se rosí samou vůní. Pekař zabalí bochník do papíru, daruje nám křupavou patku a šeptá: 'Dobrá rajčata se vybírají nosem'. Ke stánku s ovocem!", fr: "À la boulangerie, le pain est encore chaud et la vitre s'embue de bonne odeur. Le boulanger enveloppe le pain dans du papier, nous offre le petit croûton et chuchote : « Les bonnes tomates se choisissent avec le nez ». À l'étal de fruits !" },
          choices: [
            { t: { es: "Oler los tomates como expertos", ca: "Olorar els tomàquets com a experts", en: "Smell the tomatoes like experts", cs: "Očichat rajčata jako znalci", fr: "Sentir les tomates comme des experts" }, go: "n3a" }
          ]
        },
        n3a: {
          text: { es: "Los rojos huelen a sol y a huerta: ¡a la cesta! La frutera nos regala una ramita de perejil 'de propina, para el guiso' y nos cuenta el secreto del mercado: lo de temporada sabe mejor y cuesta menos.", ca: "Els vermells fan olor de sol i d'hort: cap al cistell! La fruitera ens regala un branquilló de julivert 'de propina, per al guisat' i ens explica el secret del mercat: el que és de temporada és més bo i costa menys.", en: "The red ones smell of sun and garden: into the basket! The stallholder gifts us a sprig of parsley 'as a tip, for the stew' and tells us the market's secret: food in season tastes better and costs less.", cs: "Ta červená voní sluncem a zahrádkou: šup s nimi do košíku! Trhovkyně nám přidá snítku petrželky 'jako dáreček, do polévky' a prozradí tajemství trhu: co je právě v sezoně, chutná nejlíp a stojí míň.", fr: "Les rouges sentent le soleil et le potager : dans le panier ! La marchande nous offre un brin de persil « en cadeau, pour le plat » et nous confie le secret du marché : ce qui est de saison est meilleur et coûte moins cher." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n3b: {
          text: { es: "'¡Compra de campeones!', aplaude la frutera: los maduros para hoy y los durillos irán madurando en el frutero de casa. Nos regala perejil de propina y guiña un ojo: 'Así no se desperdicia nada'.", ca: "'Compra de campions!', aplaudeix la fruitera: els madurs per a avui i els durets aniran madurant al fruiter de casa. Ens regala julivert de propina i fa l'ullet: 'Així no es malbarata res'.", en: "'A champion's shopping!', claps the stallholder: the ripe ones for today, and the firm ones will keep ripening in the fruit bowl at home. She gifts us parsley and winks: 'That way nothing goes to waste'.", cs: "'Nákup pro šampiony!', tleská trhovkyně: zralá na dnešek a ta tvrdší dozrají doma v míse. Přidá nám petrželku a mrkne: 'Takhle se nic nevyhodí'.", fr: "« Des courses de champion ! », applaudit la marchande : les mûres pour aujourd'hui, et les fermes finiront de mûrir dans la corbeille à la maison. Elle nous offre du persil et fait un clin d'œil : « Comme ça, rien ne se gaspille »." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n4" }
          ]
        },
        n4: {
          text: { es: "Tomates y pan: ¡listo! Falta lo especial para el postre... y quedan solo unas moneditas. En un puesto brillan las fresas de temporada y en otro, un tarro de miel dorada. ¿Qué eliges, {name}?", ca: "Tomàquets i pa: fet! Falta l'especial per a les postres... i només queden unes monedetes. En una parada brillen les maduixes de temporada i en una altra, un pot de mel daurada. Què tries, {name}?", en: "Tomatoes and bread: done! Now the special dessert thing... and only a few little coins are left. On one stall the season's strawberries sparkle, and on another, a jar of golden honey. What do you choose, {name}?", cs: "Rajčata a chleba: hotovo! Zbývá to zvláštní na moučník... a jen pár drobných. Na jednom stánku se třpytí sezonní jahody a na druhém sklenice zlatého medu. Co vybereš, {name}?", fr: "Tomates et pain : c'est fait ! Reste le dessert spécial... et il ne reste que quelques petites pièces. Sur un étal brillent les fraises de saison, et sur un autre, un pot de miel doré. Que choisis-tu, {name} ?" },
          choices: [
            { t: { es: "¡Las fresas!", ca: "Les maduixes!", en: "The strawberries!", cs: "Jahody!", fr: "Les fraises !" }, go: "e1" },
            { t: { es: "¡La miel para el yogur!", ca: "La mel per al iogurt!", en: "The honey for the yogurt!", cs: "Med do jogurtu!", fr: "Le miel pour le yaourt !" }, go: "e2" }
          ]
        },
        e1: {
          end: true,
          text: { es: "En casa, las fresas se lavan y se reparten en cuenquitos para la merienda. La mesa se llena de familia y de risas... y como sobran unas cuantas, {name} le lleva un cuenquito a la vecina. El mejor postre es el que se comparte. ¡Buen mercado, gran chef!", ca: "A casa, les maduixes es renten i es reparteixen en bols petits per berenar. La taula s'omple de família i de rialles... i com que en sobren unes quantes, {name} porta un bolet a la veïna. Les millors postres són les que es comparteixen. Bon mercat, gran xef!", en: "At home, the strawberries get washed and shared out into little bowls for snack time. The table fills with family and laughter... and since a few are left over, {name} takes a little bowl to the neighbour. The best dessert is the one you share. Great market trip, big chef!", cs: "Doma se jahody umyjí a rozdělí do misek ke svačině. Stůl se zaplní rodinou a smíchem... a protože pár jahod zbylo, {name} donese misku sousedce. Nejlepší moučník je ten, o který se rozdělíš. Povedený trh, velký kuchaři!", fr: "À la maison, on lave les fraises et on les partage dans des petits bols pour le goûter. La table se remplit de famille et de rires... et comme il en reste quelques-unes, {name} apporte un petit bol à la voisine. Le meilleur dessert est celui qu'on partage. Beau marché, grand chef !" }
        },
        e2: {
          end: true,
          text: { es: "El tarro de miel pesa en la cesta como un tesoro. En casa, yogur con miel para todos: los hilos dorados dibujan espirales y nadie habla, solo se oye 'mmmmm'. Esa miel la hicieron las abejas flor a flor. Cuánto trabajo bonito cabe en una cucharita, ¿verdad, {name}? Gracias, abejas.", ca: "El pot de mel pesa al cistell com un tresor. A casa, iogurt amb mel per a tothom: els fils daurats dibuixen espirals i ningú no parla, només se sent 'mmmmm'. Aquella mel la van fer les abelles flor a flor. Quanta feina bonica cap en una cullereta, oi, {name}? Gràcies, abelles.", en: "The honey jar sits in the basket like a treasure. At home, yogurt with honey for everyone: the golden threads draw spirals and nobody talks, you can only hear 'mmmmm'. That honey was made by bees, flower by flower. So much beautiful work fits in one little spoon, right, {name}? Thank you, bees.", cs: "Sklenice medu leží v košíku jako poklad. Doma je jogurt s medem pro všechny: zlaté nitky kreslí spirály a nikdo nemluví, jen se ozývá 'mmmmm'. Ten med udělaly včely, květinu po květině. Kolik krásné práce se vejde do jedné lžičky, viď, {name}? Děkujeme, včely.", fr: "Le pot de miel pèse dans le panier comme un trésor. À la maison, yaourt au miel pour tout le monde : les fils dorés dessinent des spirales et personne ne parle, on entend juste « mmmmm ». Ce miel, les abeilles l'ont fait fleur après fleur. Que de beau travail dans une petite cuillère, pas vrai, {name} ? Merci, les abeilles." }
        }
      }
    }
  ],

  /* ---------- KARAOKE ---------- */
  songs: [
    { emoji: "🥣",
      title: { es: "La canción de mezclar", ca: "La cançó de remenar", en: "The Mixing Song", cs: "Míchací písnička", fr: "La chanson à mélanger" },
      lines: [
        { es: "Harina y huevos, azúcar y sal,", ca: "Farina i ous, sucre i sal,", en: "Flour and eggs and sugar, hooray,", cs: "Mouka a vejce, cukr a sůl,", fr: "Farine et œufs, du sucre et du sel," },
        { es: "mezcla que mezcla, ¡saldrá genial!", ca: "remena que remena, sortirà genial!", en: "mixing and mixing, we are baking today!", cs: "míchám a míchám, obejdu stůl!", fr: "mélange, mélange, la pâte est si belle !" },
        { es: "Una vuelta a la derecha, otra vuelta al revés,", ca: "Una volta a la dreta, una volta al revés,", en: "One turn to the right, one turn to the left,", cs: "Jednou doprava, jednou zase zpět,", fr: "Un tour à droite, un tour à l'envers," },
        { es: "la masa hace olitas, ¡remueve otra vez!", ca: "la massa fa onades, remena una mica més!", en: "the batter makes waves and stirring is the best!", cs: "těsto dělá vlnky, zamíchej hned!", fr: "la pâte fait des vagues, comme une petite mer !" },
        { es: "Un poquito de leche, lo bate el batidor,", ca: "Un rajolí de llet, ho bat el batedor,", en: "A splash of milk, we beat it some more,", cs: "Trošička mléka, šleháme spolu,", fr: "Un nuage de lait, on fouette encore," },
        { es: "y la cocina entera huele a lo mejor.", ca: "i la cuina sencera fa la millor olor.", en: "the happy kitchen smells better than before.", cs: "vůně se line od stropu dolů.", fr: "et toute la cuisine sent bon le trésor." },
        { es: "Al horno con cuidado, lo meten los mayores,", ca: "Al forn amb molt de compte, ho posen els grans,", en: "The grown-ups slide it gently into the heat,", cs: "Do trouby to vloží dospělácké ruce,", fr: "Les grands mettent le plat au four bien chaud," },
        { es: "y esperamos contando burbujas de colores.", ca: "i esperem comptant bombolles amb les mans.", en: "we count the bubbles waiting for our treat.", cs: "my zpíváme a čekáme sladce.", fr: "on compte les bulles, ça sent déjà le gâteau !" }
      ] },
    { emoji: "🍞",
      title: { es: "El pan que sube", ca: "El pa que puja", en: "The Rising Bread", cs: "Chlebík roste", fr: "Le pain qui monte" },
      lines: [
        { es: "La levadura se despierta: ¡buenos días!,", ca: "El llevat es desperta: bon dia, bon dia!,", en: "Little yeast wakes up and says good day,", cs: "Kvásek se probouzí: dobrý den, dobrý den,", fr: "La levure se réveille et dit bonjour," },
        { es: "y llena la masa de burbujas de alegría.", ca: "i omple la massa de bombolles d'alegria.", en: "filling the dough with bubbles of play.", cs: "nafoukne těstíčko bublinkami jen.", fr: "elle remplit la pâte de bulles d'amour." },
        { es: "El pan sube despacito, no le metas prisa,", ca: "El pa puja a poc a poc, no el facis patir,", en: "The bread rises slowly, no hurry at all,", cs: "Chlebík roste pomalu, nesmí se mu spěchat,", fr: "Le pain monte doucement, sans se presser," },
        { es: "crece calentito como una sonrisa.", ca: "creix calentó com un bon matí.", en: "growing warm and round like a little ball.", cs: "v teploučku si hoví, musíme ho nechat.", fr: "il grandit tout chaud, prêt à se dorer." },
        { es: "Por la ventanita lo miramos crecer,", ca: "Per la finestreta el mirem créixer,", en: "Through the oven window we watch it bake,", cs: "Okénkem trouby koukáme se spolu,", fr: "Par la petite fenêtre, on le regarde cuire," },
        { es: "el horno es de mayores, ¡mirar es un placer!", ca: "el forn és dels grans, mirar és un plaer!", en: "grown-ups hold the handle, for safety's sake!", cs: "troubu smí jen dospělí, my sedíme u stolu.", fr: "le four est aux grands, nous, on peut sourire !" },
        { es: "Cruje la corteza, huele el comedor,", ca: "Cruix la crosta daurada, quina bona olor,", en: "The golden crust crackles, oh what a smell,", cs: "Zlatá kůrka křupe, voní to až k nám,", fr: "La croûte dorée craque, quelle bonne odeur," },
        { es: "¡pan recién hecho, no hay nada mejor!", ca: "pa acabat de fer, no hi ha res millor!", en: "fresh bread for everyone, ring the bell!", cs: "čerstvý chlebík s máslem, mňam, mňam, mňam!", fr: "du pain tout frais, c'est le bonheur !" }
      ] },
    { emoji: "🧺",
      title: { es: "De paseo al mercado", ca: "De passeig al mercat", en: "Off to the Market", cs: "Na trh", fr: "En route au marché" },
      lines: [
        { es: "Con la cesta en la mano, al mercado voy,", ca: "Amb el cistell a la mà, cap al mercat vaig,", en: "Basket in my hand, to the market I go,", cs: "S košíkem v ruce na trh si jdu,", fr: "Mon panier à la main, je vais au marché," },
        { es: "¡buenos días, tenderos, qué contento estoy!", ca: "bon dia, botiguers, quin bon dia faig!", en: "good morning, stallholders, hello, hello!", cs: "dobré ráno, trhovci, mám dobrou náladu.", fr: "bonjour les marchands, je viens vous saluer !" },
        { es: "Manzanas rojas, naranjas brillantes,", ca: "Pomes vermelles, taronges brillants,", en: "Apples so red and oranges bright,", cs: "Jablíčka červená, pomeranče zlaté,", fr: "Pommes toutes rouges, oranges brillantes," },
        { es: "el puesto de frutas tiene mil diamantes.", ca: "la parada de fruita té mil diamants.", en: "the fruit stall sparkles with diamonds of light.", cs: "stánek s ovocem má poklady bohaté.", fr: "l'étal de fruits a mille diamants qui chantent." },
        { es: "El panadero saca pan calentito,", ca: "El forner treu el pa calentó,", en: "The baker brings bread, warm as the sun,", cs: "Pekař nese chleba, ještě teplý, měkký,", fr: "Le boulanger sort le pain tout chaud," },
        { es: "y me guarda siempre un currusquito.", ca: "i em guarda sempre un bon crostó.", en: "he saves me the crusty end, yum yum yum!", cs: "a schová mi patku, tu křupavou, křehkou.", fr: "et il me garde le petit croûton, cadeau !" },
        { es: "De vuelta a casa canta la cocina,", ca: "De tornada a casa canta la cuina,", en: "Back home the kitchen starts to sing,", cs: "Cestou domů kuchyň už si zpívá,", fr: "De retour à la maison, la cuisine chantonne," },
        { es: "hoy cocinamos juntos: ¡fiesta con harina!", ca: "avui cuinem junts: festa amb farina!", en: "today we cook together, flour on everything!", cs: "dnes vaříme spolu, mouka všude bývá!", fr: "on cuisine ensemble et la joie rayonne !" }
      ] }
  ],

  /* ---------- TRADUCTOR ---------- */
  translator: {
    words: [
      W_COMMON.hola,
      W_COMMON.adios,
      W_COMMON.amigo,
      { k: "pan", emoji: "🍞", name: { es: "pan", ca: "pa", en: "bread", cs: "chleba", fr: "pain" } },
      { k: "sopa", emoji: "🍲", name: { es: "sopa", ca: "sopa", en: "soup", cs: "polévka", fr: "soupe" } },
      { k: "tarta", emoji: "🎂", name: { es: "tarta", ca: "pastís", en: "cake", cs: "dort", fr: "gâteau" } },
      { k: "cuchara", emoji: "🥄", name: { es: "cuchara", ca: "cullera", en: "spoon", cs: "lžíce", fr: "cuillère" } },
      { k: "queso", emoji: "🧀", name: { es: "queso", ca: "formatge", en: "cheese", cs: "sýr", fr: "fromage" } },
      { k: "huevo", emoji: "🥚", name: { es: "huevo", ca: "ou", en: "egg", cs: "vejce", fr: "œuf" } },
      { k: "sal", emoji: "🧂", name: { es: "sal", ca: "sal", en: "salt", cs: "sůl", fr: "sel" } },
      { k: "mercado", emoji: "🛒", name: { es: "mercado", ca: "mercat", en: "market", cs: "trh", fr: "marché" } },
      { k: "abuela", emoji: "👵", name: { es: "abuela", ca: "àvia", en: "grandma", cs: "babička", fr: "mamie" } },
      { k: "cocinar", emoji: "🍳", name: { es: "cocinar", ca: "cuinar", en: "to cook", cs: "vařit", fr: "cuisiner" } },
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
      { id: "burbujeante", emoji: "🫧",
        name: { es: "Burbujeante", ca: "Bombollejant", en: "Bubbly", cs: "Bublinkovština", fr: "Bouillonnant" },
        greeting: { es: "¡Glup! Así saluda la olla cuando hierve contenta.", ca: "Glup! Així saluda l'olla quan bull contenta.", en: "Glup! That is how the pot says hello when it bubbles happily.", cs: "Glup! Tak zdraví hrnec, když si spokojeně bublá.", fr: "Gloup ! C'est comme ça que la marmite dit bonjour quand elle bout, toute contente." },
        dict: { hola: "glup", adios: "glupiglú", amigo: "blubi", pan: "pofi", sopa: "chofchof", tarta: "blubiblú", cuchara: "plupli", queso: "blofi", huevo: "plopi", sal: "glin", mercado: "glubaglub", abuela: "glubita", cocinar: "glubir", robot: "glubot", mama: "mamaglub", papa: "papaglub", casa: "glumbo", agua: "GLUB", comida: "ñamglub", perro: "glubguau", gato: "glubmiau", grande: "glubón", pequeno: "glubín", bonito: "glulí", amor: "glubcor", gracias: "glugrasi", si: "glip", no: "glop", dormir: "glubzzz" } },
      { id: "namnames", emoji: "😋",
        name: { es: "Ñamñamés", ca: "Nyam-nyamès", en: "Yumyumish", cs: "Mňamňamština", fr: "Miam-miamois" },
        greeting: { es: "Ñoms... el idioma de los que prueban la comida con los ojos cerrados.", ca: "Nyoms... l'idioma dels que tasten el menjar amb els ulls tancats.", en: "Yums... the language of those who taste food with their eyes closed.", cs: "Mňams... jazyk těch, kdo ochutnávají jídlo se zavřenýma očima.", fr: "Miams... la langue de ceux qui goûtent les plats les yeux fermés." },
        dict: { hola: "ñoms", adios: "ñom-mua", amigo: "ñomi", pan: "ñompan", sopa: "ñomsopa", tarta: "ñomtarta", cuchara: "ñomcuchi", queso: "ñomqui", huevo: "ñomplof", sal: "ñompizca", mercado: "ñomerca", abuela: "ñomabu", cocinar: "ñamear", robot: "ñombot", mama: "ñomama", papa: "ñompapa", casa: "ñomcasa", agua: "ñomglu", comida: "ÑOM-ÑOM", perro: "ñomguau", gato: "ñommiau", grande: "ñomazo", pequeno: "ñomito", bonito: "ñombo", amor: "muamor", gracias: "muagrasi", si: "ñom-sip", no: "ñom-ñop", dormir: "ñomzzz" } }
    ]
  },

  /* ---------- MAPA DE EXPLORACIÓN ---------- */
  explore: {
    width: 2600, height: 1100, stars: false,
    bgCss: "radial-gradient(ellipse 40% 30% at 12% 12%, rgba(255,224,130,.5), transparent), linear-gradient(180deg,#ffe8cc 0%,#ffd9a0 32%,#f2bd80 58%,#c99668 80%,#9c7350 100%)",
    cats: [
      { id: "cocina", emoji: "🍳", x: 120, name: { es: "La gran cocina", ca: "La gran cuina", en: "The big kitchen", cs: "Velká kuchyně", fr: "La grande cuisine" } },
      { id: "rincon", emoji: "👵", x: 1120, name: { es: "El rincón de la abuela", ca: "El racó de l'àvia", en: "Grandma's corner", cs: "Babiččin koutek", fr: "Le coin de mamie" } },
      { id: "mercado", emoji: "🧺", x: 1800, name: { es: "El mercado", ca: "El mercat", en: "The market", cs: "Trh", fr: "Le marché" } }
    ],
    pois: [
      { cat: "cocina", emoji: "🧊", x: 200, y: 500, iw: 86, ih: 116,
        svg: `<svg viewBox="0 0 90 120" width="100%" height="100%">
          <rect x="10" y="4" width="70" height="112" rx="10" fill="#b3e5fc"/>
          <rect x="14" y="8" width="62" height="46" rx="7" fill="#e1f5fe"/>
          <rect x="14" y="58" width="62" height="54" rx="7" fill="#e1f5fe"/>
          <rect x="66" y="20" width="6" height="18" rx="3" fill="#78909c"/>
          <rect x="66" y="66" width="6" height="22" rx="3" fill="#78909c"/>
          <circle cx="30" cy="22" r="6" fill="#ef5350"/><path d="M30 17 Q29.5 13 32 12" stroke="#33691e" stroke-width="2" fill="none"/>
          <rect x="24" y="34" width="14" height="10" rx="2" fill="#ffd54f"/>
          <circle cx="38" cy="80" r="4" fill="#263238"/><circle cx="54" cy="80" r="4" fill="#263238"/>
          <circle cx="39.2" cy="78.8" r="1.3" fill="#fff"/><circle cx="55.2" cy="78.8" r="1.3" fill="#fff"/>
          <path d="M40 90 Q46 96 52 90" stroke="#263238" stroke-width="2.6" fill="none" stroke-linecap="round"/>
          <path d="M20 100 L26 100 M64 100 L70 100" stroke="#81d4fa" stroke-width="3" stroke-linecap="round"/>
          <path d="M4 10 L10 4 M2 20 L8 14" stroke="#b3e5fc" stroke-width="2.4" stroke-linecap="round" opacity=".7"/></svg>`,
        name: { es: "La nevera", ca: "La nevera", en: "The fridge", cs: "Lednice", fr: "Le frigo" },
        fact: { es: "Dentro de la nevera el frío hace que los microbios vayan lentísimos y la comida dure más. Cierra bien la puerta: ¡que no se escape el fresquito!", ca: "Dins de la nevera el fred fa que els microbis vagin lentíssims i el menjar duri més. Tanca bé la porta: que no s'escapi la frescor!", en: "Inside the fridge, the cold makes germs move super slowly, so food lasts longer. Close the door well: do not let the cold escape!", cs: "V lednici se mikrobi kvůli chladu pohybují hrozně pomalu, a jídlo tak vydrží déle. Zavírej dveře pořádně: ať chlad neuteče!", fr: "Dans le frigo, le froid rend les microbes tout lents et la nourriture dure plus longtemps. Ferme bien la porte : que le frais ne s'échappe pas !" } },
      { cat: "cocina", emoji: "🔥", x: 430, y: 700, size: 2, iw: 104, ih: 96,
        svg: `<svg viewBox="0 0 110 100" width="100%" height="100%">
          <rect x="6" y="6" width="98" height="88" rx="10" fill="#78909c"/>
          <rect x="12" y="12" width="86" height="12" rx="6" fill="#546e7a"/>
          <circle cx="22" cy="18" r="4" fill="#ffd54f"/><circle cx="36" cy="18" r="4" fill="#eceff1"/><circle cx="50" cy="18" r="4" fill="#eceff1"/>
          <rect x="16" y="30" width="78" height="54" rx="8" fill="#37474f"/>
          <rect x="22" y="36" width="66" height="42" rx="6" fill="#ffb74d"/>
          <path d="M34 64 Q34 52 44 52 Q55 48 66 52 Q76 52 76 64 Q76 72 55 72 Q34 72 34 64 Z" fill="#d8a15c"/>
          <path d="M40 58 L48 58 M54 56 L62 58" stroke="#b07f42" stroke-width="2.4" stroke-linecap="round"/>
          <circle cx="47" cy="62" r="2.2" fill="#5d4037"/><circle cx="61" cy="62" r="2.2" fill="#5d4037"/>
          <path d="M50 66 Q54 69 58 66" stroke="#5d4037" stroke-width="2" fill="none" stroke-linecap="round"/>
          <path d="M30 34 Q55 30 80 34" stroke="rgba(255,255,255,.55)" stroke-width="3" fill="none"/>
          <path d="M42 30 Q42 22 47 20 M60 30 Q60 20 66 18" stroke="#eceff1" stroke-width="3" fill="none" stroke-linecap="round" opacity=".85">
            <animate attributeName="opacity" values=".85;.3;.85" dur="2.4s" repeatCount="indefinite"/></path></svg>`,
        name: { es: "El horno con ventanita", ca: "El forn amb finestreta", en: "The oven with its little window", cs: "Trouba s okénkem", fr: "Le four à petite fenêtre" },
        fact: { es: "El horno cocina con aire muy caliente. Su puerta la abren solo los adultos con manoplas; tú tienes el mejor cine de la casa: la ventanita donde el pan crece.", ca: "El forn cuina amb aire molt calent. La seva porta l'obren només els adults amb manyoples; tu tens el millor cinema de casa: la finestreta on el pa creix.", en: "The oven cooks with very hot air. Only grown-ups open its door, wearing oven mitts; you get the best cinema in the house: the little window where bread grows.", cs: "Trouba peče horkým vzduchem. Dvířka otvírají jen dospělí s chňapkami; ty máš nejlepší kino v domě: okénko, za kterým roste chleba.", fr: "Le four cuit avec de l'air très chaud. Seuls les adultes ouvrent sa porte, avec des gants ; toi, tu as le meilleur cinéma de la maison : la petite fenêtre où le pain grandit." } },
      { cat: "cocina", emoji: "🍲", x: 640, y: 470, iw: 92, ih: 86,
        svg: `<svg viewBox="0 0 100 94" width="100%" height="100%">
          <path d="M28 18 Q28 8 36 10 M50 16 Q50 4 58 6 M70 20 Q72 10 80 12" stroke="#eceff1" stroke-width="4" fill="none" stroke-linecap="round" opacity=".9">
            <animate attributeName="opacity" values=".9;.25;.9" dur="2s" repeatCount="indefinite"/></path>
          <ellipse cx="52" cy="34" rx="34" ry="7" fill="#ef6c00"/>
          <circle cx="52" cy="27" r="5" fill="#ffb74d"/>
          <path d="M18 36 L86 36 Q88 66 76 78 Q52 88 28 78 Q16 66 18 36 Z" fill="#f57c00"/>
          <path d="M18 44 L10 40 Q4 46 10 52 L18 52 Z" fill="#f57c00"/>
          <path d="M86 44 L94 40 Q100 46 94 52 L86 52 Z" fill="#f57c00"/>
          <path d="M24 42 Q52 48 80 42" stroke="#ffcc80" stroke-width="3" fill="none" opacity=".8"/>
          <circle cx="42" cy="58" r="3" fill="#4e2600"/><circle cx="62" cy="58" r="3" fill="#4e2600"/>
          <circle cx="43" cy="57" r="1" fill="#fff"/><circle cx="63" cy="57" r="1" fill="#fff"/>
          <path d="M46 66 Q52 71 58 66" stroke="#4e2600" stroke-width="2.6" fill="none" stroke-linecap="round"/></svg>`,
        name: { es: "La olla humeante", ca: "L'olla fumejant", en: "The steaming pot", cs: "Kouřící hrnec", fr: "La marmite fumante" },
        fact: { es: "El humito blanco de la olla es vapor: agua voladora. Con la tapa puesta, el calor no se escapa y la sopa está lista antes.", ca: "El fumet blanc de l'olla és vapor: aigua voladora. Amb la tapa posada, la calor no s'escapa i la sopa és a punt abans.", en: "The white puff over the pot is steam: flying water. With the lid on, the heat cannot escape and the soup is ready sooner.", cs: "Bílý obláček nad hrncem je pára: létající voda. S pokličkou teplo neuteče a polévka je hotová dřív.", fr: "Le petit nuage blanc de la marmite, c'est de la vapeur : de l'eau volante. Avec le couvercle, la chaleur reste dedans et la soupe est prête plus vite." } },
      { cat: "cocina", emoji: "🧂", x: 850, y: 310, iw: 104, ih: 74,
        svg: `<svg viewBox="0 0 120 84" width="100%" height="100%">
          <rect x="4" y="62" width="112" height="8" rx="4" fill="#8d6e63"/>
          <rect x="10" y="26" width="16" height="36" rx="4" fill="#ef9a9a"/><rect x="10" y="22" width="16" height="8" rx="3" fill="#c62828"/>
          <rect x="32" y="32" width="16" height="30" rx="4" fill="#ffcc80"/><rect x="32" y="28" width="16" height="8" rx="3" fill="#ef6c00"/>
          <rect x="54" y="24" width="16" height="38" rx="4" fill="#a5d6a7"/><rect x="54" y="20" width="16" height="8" rx="3" fill="#2e7d32"/>
          <rect x="76" y="34" width="16" height="28" rx="4" fill="#ffe082"/><rect x="76" y="30" width="16" height="8" rx="3" fill="#f9a825"/>
          <rect x="98" y="27" width="14" height="35" rx="4" fill="#ce93d8"/><rect x="98" y="23" width="14" height="8" rx="3" fill="#7b1fa2"/>
          <circle cx="18" cy="42" r="2" fill="#b71c1c"/><circle cx="40" cy="46" r="2" fill="#e65100"/><circle cx="62" cy="40" r="2" fill="#1b5e20"/>
          <path d="M14 12 Q18 4 24 8 M60 10 Q64 2 70 6" stroke="#bcaaa4" stroke-width="2.4" fill="none" stroke-linecap="round" opacity=".8"/></svg>`,
        name: { es: "El estante de las especias", ca: "El prestatge de les espècies", en: "The spice shelf", cs: "Polička s kořením", fr: "L'étagère à épices" },
        fact: { es: "Pimentón rojo, cúrcuma dorada, orégano verde... Las especias vienen de plantas de todo el mundo. Hace siglos viajaban en barcos, ¡y valían como tesoros!", ca: "Pebre vermell, cúrcuma daurada, orenga verda... Les espècies venen de plantes de tot el món. Fa segles viatjaven amb vaixells, i valien com tresors!", en: "Red paprika, golden turmeric, green oregano... Spices come from plants all over the world. Centuries ago they travelled on ships and were worth a treasure!", cs: "Červená paprika, zlatá kurkuma, zelené oregano... Koření pochází z rostlin z celého světa. Před staletími cestovalo na lodích a mělo cenu pokladu!", fr: "Paprika rouge, curcuma doré, origan vert... Les épices viennent de plantes du monde entier. Il y a des siècles, elles voyageaient en bateau et valaient un trésor !" } },
      { cat: "cocina", emoji: "🥣", x: 880, y: 620, iw: 80, ih: 92,
        svg: `<svg viewBox="0 0 90 104" width="100%" height="100%">
          <rect x="14" y="90" width="62" height="10" rx="5" fill="#607d8b"/>
          <path d="M22 90 L22 30 Q22 14 40 14 L58 14 Q66 14 66 22 L66 34 L56 34 L56 26 L40 26 Q32 26 32 34 L32 90 Z" fill="#ec407a"/>
          <circle cx="27" cy="22" r="3" fill="#f8bbd0"/>
          <path d="M56 34 L66 34 L64 48 L58 48 Z" fill="#90a4ae"/>
          <path d="M58 48 Q52 60 61 64 Q70 60 64 48" stroke="#90a4ae" stroke-width="3" fill="none"/>
          <path d="M38 66 Q38 56 48 56 L74 56 Q84 56 84 66 L82 80 Q80 90 61 90 Q42 90 40 80 Z" fill="#eceff1"/>
          <path d="M44 62 Q61 68 80 62" stroke="#cfd8dc" stroke-width="3" fill="none"/>
          <circle cx="55" cy="74" r="2.6" fill="#455a64"/><circle cx="68" cy="74" r="2.6" fill="#455a64"/>
          <path d="M57 80 Q61 83 65 80" stroke="#455a64" stroke-width="2.2" fill="none" stroke-linecap="round"/>
          <circle cx="20" cy="52" r="2" fill="#ffd54f"><animate attributeName="opacity" values="1;.2;1" dur="1.8s" repeatCount="indefinite"/></circle></svg>`,
        name: { es: "La batidora", ca: "La batedora", en: "The mixer", cs: "Šlehač", fr: "Le batteur" },
        fact: { es: "La batidora da muchísimas vueltas por minuto. Si bate claras de huevo mucho rato, las llena de aire y las convierte en nubes blancas: ¡el merengue!", ca: "La batedora fa moltíssimes voltes per minut. Si bat clares d'ou molta estona, les omple d'aire i les converteix en núvols blancs: el merenga!", en: "The mixer spins many many times a minute. If it beats egg whites long enough, it fills them with air and turns them into white clouds: meringue!", cs: "Šlehač se točí mnohokrát za minutu. Když dlouho šlehá bílky, naplní je vzduchem a promění je v bílé obláčky: sníh na pusinky!", fr: "Le batteur tourne très très vite. S'il fouette des blancs d'œufs longtemps, il les remplit d'air et les transforme en nuages blancs : la meringue !" } },
      { cat: "cocina", emoji: "🌿", x: 590, y: 240, size: 2, iw: 118, ih: 92,
        svg: `<svg viewBox="0 0 130 100" width="100%" height="100%">
          <rect x="8" y="6" width="114" height="76" rx="8" fill="#8d6e63"/>
          <rect x="14" y="12" width="102" height="64" rx="5" fill="#b3e5fc"/>
          <rect x="63" y="12" width="4" height="64" fill="#8d6e63"/>
          <circle cx="34" cy="30" r="12" fill="#fff59d" opacity=".9"/>
          <path d="M96 24 Q104 20 110 26 Q116 22 118 30" stroke="#e1f5fe" stroke-width="3" fill="none" opacity=".8"/>
          <rect x="6" y="78" width="118" height="10" rx="5" fill="#6d4c41"/>
          <path d="M22 78 L26 62 L38 62 L42 78 Z" fill="#e57373"/>
          <path d="M32 62 Q26 50 32 44 M32 62 Q32 48 38 46 M32 62 Q40 52 42 48" stroke="#43a047" stroke-width="3.4" fill="none" stroke-linecap="round"/>
          <path d="M56 78 L60 64 L72 64 L76 78 Z" fill="#ef6c00"/>
          <ellipse cx="60" cy="54" rx="6" ry="4" fill="#66bb6a" transform="rotate(-24 60 54)"/>
          <ellipse cx="70" cy="52" rx="6" ry="4" fill="#81c784" transform="rotate(20 70 52)"/>
          <ellipse cx="65" cy="46" rx="5" ry="3.4" fill="#a5d6a7"/>
          <path d="M90 78 L94 64 L106 64 L110 78 Z" fill="#8e24aa"/>
          <path d="M100 64 Q94 56 96 48 M100 64 Q100 52 104 48 M100 64 Q106 56 108 50" stroke="#2e7d32" stroke-width="3" fill="none" stroke-linecap="round"/>
          <circle cx="97" cy="47" r="2" fill="#ce93d8"/><circle cx="104" cy="45" r="2" fill="#ce93d8"/></svg>`,
        name: { es: "El huerto de la ventana", ca: "L'hortet de la finestra", en: "The window garden", cs: "Zahrádka na okně", fr: "Le jardin de la fenêtre" },
        fact: { es: "En la ventana crecen perejil, albahaca y menta en macetas. Se cortan unas hojitas con los dedos, la planta sigue creciendo... ¡y el guiso huele a jardín!", ca: "A la finestra creixen julivert, alfàbrega i menta en testos. Es tallen unes fulletes amb els dits, la planta segueix creixent... i el guisat fa olor de jardí!", en: "Parsley, basil and mint grow in pots on the window. You pick a few leaves with your fingers, the plant keeps growing... and the stew smells like a garden!", cs: "Na okně rostou v květináčích petrželka, bazalka a máta. Prsty utrhneš pár lístků, rostlinka roste dál... a polévka voní jako zahrada!", fr: "Sur la fenêtre poussent persil, basilic et menthe en pots. On cueille quelques feuilles avec les doigts, la plante continue de pousser... et le plat sent le jardin !" } },
      { cat: "cocina", emoji: "🧑‍🍳", x: 180, y: 860, iw: 72, ih: 92,
        svg: `<svg viewBox="0 0 80 104" width="100%" height="100%">
          <circle cx="40" cy="8" r="4" fill="#8d6e63"/>
          <path d="M40 10 L40 18" stroke="#8d6e63" stroke-width="3"/>
          <path d="M24 24 Q40 16 56 24 L60 34 L54 34 L54 92 Q40 100 26 92 L26 34 L20 34 Z" fill="#ef5350"/>
          <path d="M24 24 Q40 34 56 24" stroke="#c62828" stroke-width="3" fill="none"/>
          <rect x="32" y="56" width="16" height="18" rx="4" fill="#ffcdd2"/>
          <path d="M36 56 L36 46 Q36 42 40 42" stroke="#8d6e63" stroke-width="3.4" fill="none" stroke-linecap="round"/>
          <circle cx="40" cy="40" r="3.4" fill="#a1887f"/>
          <path d="M30 82 Q40 88 50 82" stroke="#ffcdd2" stroke-width="3" fill="none" stroke-linecap="round"/>
          <circle cx="62" cy="20" r="2" fill="#ffd54f"><animate attributeName="opacity" values="1;.3;1" dur="2s" repeatCount="indefinite"/></circle></svg>`,
        name: { es: "El delantal", ca: "El davantal", en: "The apron", cs: "Zástěra", fr: "Le tablier" },
        fact: { es: "El delantal es el escudo del cocinero: protege la ropa de salpicaduras y lleva bolsillo para el trapito y la cuchara de madera.", ca: "El davantal és l'escut del cuiner: protegeix la roba d'esquitxos i porta butxaca per al drapet i la cullera de fusta.", en: "The apron is the cook's shield: it protects your clothes from splashes and has a pocket for the little cloth and the wooden spoon.", cs: "Zástěra je kuchařův štít: chrání oblečení před cákanci a má kapsu na utěrku a vařečku.", fr: "Le tablier est le bouclier du cuisinier : il protège les habits des éclaboussures et garde une poche pour le petit torchon et la cuillère en bois." } },
      { cat: "cocina", emoji: "🫧", x: 700, y: 880, iw: 100, ih: 78,
        svg: `<svg viewBox="0 0 110 88" width="100%" height="100%">
          <rect x="6" y="30" width="98" height="50" rx="10" fill="#90a4ae"/>
          <rect x="14" y="38" width="82" height="34" rx="8" fill="#cfd8dc"/>
          <path d="M52 30 L52 16 Q52 8 62 8 Q70 8 70 16 L70 24" stroke="#78909c" stroke-width="6" fill="none" stroke-linecap="round"/>
          <path d="M66 26 Q70 22 74 26" stroke="#4fc3f7" stroke-width="3" fill="none" stroke-linecap="round"/>
          <ellipse cx="46" cy="52" rx="22" ry="9" fill="#b3e5fc"/>
          <circle cx="34" cy="40" r="6" fill="#e1f5fe" opacity=".9"><animate attributeName="cy" values="40;30;40" dur="3s" repeatCount="indefinite"/></circle>
          <circle cx="58" cy="36" r="4.4" fill="#e1f5fe" opacity=".8"><animate attributeName="cy" values="36;26;36" dur="2.4s" repeatCount="indefinite"/></circle>
          <circle cx="80" cy="42" r="5" fill="#e1f5fe" opacity=".85"><animate attributeName="cy" values="42;32;42" dur="3.4s" repeatCount="indefinite"/></circle>
          <rect x="78" y="48" width="16" height="12" rx="3" fill="#ffd54f"/>
          <path d="M80 48 Q86 42 92 48" stroke="#f9a825" stroke-width="2.4" fill="none"/>
          <circle cx="42" cy="52" r="2" fill="#0277bd"/><circle cx="52" cy="52" r="2" fill="#0277bd"/>
          <path d="M44 57 Q47 60 50 57" stroke="#0277bd" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`,
        name: { es: "El fregadero con espuma", ca: "L'aigüera amb escuma", en: "The bubbly sink", cs: "Dřez s pěnou", fr: "L'évier plein de mousse" },
        fact: { es: "Al acabar, los cacharros se dan un baño de espuma. Recoger también es cocinar: la cocina queda lista y contenta para mañana.", ca: "En acabar, els estris es fan un bany d'escuma. Recollir també és cuinar: la cuina queda a punt i contenta per a demà.", en: "When cooking ends, the pots and pans take a bubble bath. Tidying up is cooking too: the kitchen ends up ready and happy for tomorrow.", cs: "Po vaření se hrnce a misky vykoupou v pěně. Úklid patří k vaření: kuchyně je pak připravená a spokojená na zítřek.", fr: "Quand on a fini, les ustensiles prennent un bain de mousse. Ranger, c'est aussi cuisiner : la cuisine reste prête et contente pour demain." } },
      { cat: "rincon", emoji: "📖", x: 1160, y: 420, size: 2, iw: 110, ih: 84,
        svg: `<svg viewBox="0 0 120 92" width="100%" height="100%">
          <path d="M60 16 Q34 4 10 12 L10 76 Q34 68 60 80 Q86 68 110 76 L110 12 Q86 4 60 16 Z" fill="#fff8e1"/>
          <path d="M60 16 L60 80" stroke="#d7ccc8" stroke-width="3"/>
          <path d="M18 24 L50 20 M18 34 L50 30 M18 44 L50 40 M18 54 L46 51" stroke="#bcaaa4" stroke-width="2.6" stroke-linecap="round"/>
          <path d="M84 30 C80 24 72 28 76 35 L84 42 L92 35 C96 28 88 24 84 30 Z" fill="#ef9a9a"/>
          <path d="M70 52 L98 48 M70 61 L94 58" stroke="#bcaaa4" stroke-width="2.6" stroke-linecap="round"/>
          <circle cx="30" cy="62" r="6" fill="#ef6c00" opacity=".35"/>
          <ellipse cx="92" cy="20" rx="7" ry="4" fill="#8d6e63" opacity=".3"/>
          <path d="M6 80 Q60 92 114 80" stroke="#8d6e63" stroke-width="4" fill="none"/></svg>`,
        name: { es: "El libro de recetas de la abuela", ca: "El llibre de receptes de l'àvia", en: "Grandma's recipe book", cs: "Babiččin receptář", fr: "Le livre de recettes de mamie" },
        fact: { es: "Sus manchas son medallas: cada una es un día que se cocinó con él. Muchas recetas vienen de las abuelas de las abuelas, viajando de mano en mano.", ca: "Les seves taques són medalles: cadascuna és un dia que s'hi va cuinar. Moltes receptes venen de les àvies de les àvies, viatjant de mà en mà.", en: "Its stains are medals: each one marks a day of cooking with it. Many recipes come from the grandmas of grandmas, travelling hand to hand.", cs: "Jeho skvrny jsou medaile: každá znamená den, kdy se podle něj vařilo. Spousta receptů pochází od babiček našich babiček a putuje z ruky do ruky.", fr: "Ses taches sont des médailles : chacune raconte un jour de cuisine. Beaucoup de recettes viennent des mamies des mamies, voyageant de main en main." } },
      { cat: "rincon", emoji: "⚖️", x: 1420, y: 590, iw: 84, ih: 86,
        svg: `<svg viewBox="0 0 95 96" width="100%" height="100%">
          <rect x="42" y="12" width="6" height="62" rx="3" fill="#a1887f"/>
          <path d="M22 84 L68 84 L62 74 L28 74 Z" fill="#795548"/>
          <rect x="12" y="10" width="66" height="6" rx="3" fill="#bcaaa4"/>
          <circle cx="45" cy="8" r="4.4" fill="#ffb300"/>
          <path d="M18 16 L12 38 M18 16 L24 38" stroke="#a1887f" stroke-width="2.4"/>
          <path d="M6 38 Q18 50 30 38 Z" fill="#d7ccc8"/>
          <path d="M72 16 L66 46 M72 16 L78 46" stroke="#a1887f" stroke-width="2.4"/>
          <path d="M60 46 Q72 58 84 46 Z" fill="#d7ccc8"/>
          <path d="M12 30 Q14 24 20 24 Q26 24 26 32 L26 38 L12 38 Z" fill="#efebe9"/>
          <path d="M14 33 L24 33" stroke="#bcaaa4" stroke-width="1.6"/>
          <rect x="68" y="38" width="9" height="9" rx="1.6" fill="#546e7a"/>
          <circle cx="26" cy="60" r="2" fill="#ffd54f"><animate attributeName="opacity" values="1;.2;1" dur="2.2s" repeatCount="indefinite"/></circle></svg>`,
        name: { es: "La balanza de la abuela", ca: "La balança de l'àvia", en: "Grandma's scale", cs: "Babiččina váha", fr: "La balance de mamie" },
        fact: { es: "La balanza pesa la harina y el azúcar para que la receta salga igual de rica cada vez. La repostería son matemáticas deliciosas.", ca: "La balança pesa la farina i el sucre perquè la recepta surti igual de bona cada vegada. La rebosteria són matemàtiques delicioses.", en: "The scale weighs the flour and sugar so the recipe turns out just as yummy every time. Baking is delicious mathematics.", cs: "Váha odměří mouku a cukr, aby se recept povedl pokaždé stejně. Pečení je lahodná matematika.", fr: "La balance pèse la farine et le sucre pour que la recette soit aussi bonne à chaque fois. La pâtisserie, ce sont des mathématiques délicieuses." } },
      { cat: "rincon", emoji: "🍪", x: 1180, y: 790, iw: 74, ih: 86,
        svg: `<svg viewBox="0 0 80 94" width="100%" height="100%">
          <ellipse cx="40" cy="86" rx="30" ry="6" fill="rgba(0,0,0,.12)"/>
          <path d="M14 34 Q10 88 40 88 Q70 88 66 34 Z" fill="#90caf9"/>
          <path d="M18 42 Q40 50 62 42" stroke="#64b5f6" stroke-width="3" fill="none"/>
          <ellipse cx="40" cy="34" rx="26" ry="8" fill="#64b5f6"/>
          <ellipse cx="40" cy="28" rx="18" ry="6" fill="#42a5f5" transform="rotate(-8 40 28)"/>
          <circle cx="40" cy="22" r="5" fill="#1e88e5" transform="rotate(-8 40 22)"/>
          <circle cx="30" cy="58" r="9" fill="#d8a15c"/><circle cx="27" cy="55" r="1.6" fill="#5d4037"/><circle cx="33" cy="58" r="1.6" fill="#5d4037"/><circle cx="30" cy="61" r="1.6" fill="#5d4037"/>
          <circle cx="52" cy="66" r="9" fill="#d8a15c"/><circle cx="49" cy="63" r="1.6" fill="#5d4037"/><circle cx="55" cy="66" r="1.6" fill="#5d4037"/>
          <circle cx="33" cy="74" r="2.2" fill="#455a64"/><circle cx="45" cy="74" r="2.2" fill="#455a64"/>
          <path d="M35 79 Q39 82 43 79" stroke="#455a64" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`,
        name: { es: "El tarro de las galletas", ca: "El pot de les galetes", en: "The cookie jar", cs: "Dóza na sušenky", fr: "Le bocal à biscuits" },
        fact: { es: "El tarro guarda las galletas crujientes. Bien cerrado funciona mejor: si entra aire húmedo, ¡las galletas se ponen blanditas!", ca: "El pot guarda les galetes cruixents. Ben tancat funciona millor: si hi entra aire humit, les galetes es tornen tovetes!", en: "The jar keeps the cookies crunchy. It works best well closed: if damp air sneaks in, the cookies go soft!", cs: "Dóza chrání křupavé sušenky. Nejlíp funguje dobře zavřená: když se dovnitř vloudí vlhký vzduch, sušenky změknou!", fr: "Le bocal garde les biscuits croustillants. Bien fermé, il marche mieux : si l'air humide entre, les biscuits ramollissent !" } },
      { cat: "rincon", emoji: "🍽️", x: 1500, y: 880, size: 2, iw: 132, ih: 92,
        svg: `<svg viewBox="0 0 145 100" width="100%" height="100%">
          <rect x="12" y="46" width="120" height="10" rx="4" fill="#8d6e63"/>
          <rect x="20" y="56" width="10" height="38" fill="#6d4c41"/><rect x="114" y="56" width="10" height="38" fill="#6d4c41"/>
          <path d="M8 46 L136 46 L130 34 L14 34 Z" fill="#ef9a9a"/>
          <path d="M14 34 L130 34" stroke="#e57373" stroke-width="2"/>
          <ellipse cx="42" cy="41" rx="14" ry="4.4" fill="#fff"/><ellipse cx="42" cy="40" rx="9" ry="2.6" fill="#ffcc80"/>
          <ellipse cx="102" cy="41" rx="14" ry="4.4" fill="#fff"/><ellipse cx="102" cy="40" rx="9" ry="2.6" fill="#a5d6a7"/>
          <ellipse cx="72" cy="38" rx="16" ry="5" fill="#ffb74d"/>
          <path d="M66 30 Q66 24 70 22 M76 30 Q76 22 80 20" stroke="#eceff1" stroke-width="2.6" fill="none" stroke-linecap="round" opacity=".9">
            <animate attributeName="opacity" values=".9;.3;.9" dur="2.2s" repeatCount="indefinite"/></path>
          <rect x="24" y="36" width="4" height="9" rx="2" fill="#b0bec5"/><rect x="58" y="36" width="4" height="9" rx="2" fill="#b0bec5"/>
          <rect x="86" y="36" width="4" height="9" rx="2" fill="#b0bec5"/><rect x="118" y="36" width="4" height="9" rx="2" fill="#b0bec5"/>
          <circle cx="30" cy="18" r="4" fill="#ffd54f"/><circle cx="115" cy="14" r="3" fill="#ef9a9a"/>
          <path d="M52 12 Q72 2 92 12" stroke="#ce93d8" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`,
        name: { es: "La mesa puesta", ca: "La taula parada", en: "The set table", cs: "Prostřený stůl", fr: "La table mise" },
        fact: { es: "Comer juntos es la mejor parte de cocinar. Cada uno ayuda: uno pone las servilletas, otro lleva el pan y alguien cuenta cómo le ha ido el día.", ca: "Menjar junts és la millor part de cuinar. Cadascú ajuda: un posa els tovallons, un altre porta el pa i algú explica com li ha anat el dia.", en: "Eating together is the best part of cooking. Everyone helps: one sets the napkins, another brings the bread, and someone tells how their day went.", cs: "Jíst spolu je na vaření to nejlepší. Každý pomáhá: jeden rozdá ubrousky, druhý přinese chleba a někdo vypráví, jaký měl den.", fr: "Manger ensemble est la meilleure partie de la cuisine. Chacun aide : l'un met les serviettes, l'autre apporte le pain, et quelqu'un raconte sa journée." } },
      { cat: "mercado", emoji: "🍎", x: 1900, y: 440, size: 2, iw: 150, ih: 118,
        svg: `<svg viewBox="0 0 165 130" width="100%" height="100%">
          <rect x="18" y="62" width="10" height="62" fill="#6d4c41"/><rect x="137" y="62" width="10" height="62" fill="#6d4c41"/>
          <path d="M6 62 L18 22 L147 22 L159 62 Z" fill="#43a047"/>
          ${[0, 1, 2, 3].map(i => `<path d="M${24 + i * 33} 62 L${32 + i * 31} 22 L${48 + i * 31} 22 L${44 + i * 33} 62 Z" fill="#fff"/>`).join("")}
          <path d="M6 62 Q42 74 82 62 Q122 74 159 62 L159 68 Q122 80 82 68 Q42 80 6 68 Z" fill="#2e7d32"/>
          <rect x="24" y="78" width="118" height="42" rx="4" fill="#a1887f"/>
          <path d="M24 78 L142 78" stroke="#8d6e63" stroke-width="4"/>
          ${[38, 58, 78, 98, 118].map(x => `<circle cx="${x}" cy="90" r="6" fill="#e53935"/>`).join("")}
          ${[48, 68, 88, 108, 128].map(x => `<circle cx="${x}" cy="103" r="6" fill="#fb8c00"/>`).join("")}
          ${[40, 62, 84, 106, 126].map(x => `<circle cx="${x}" cy="114" r="5" fill="#8bc34a"/>`).join("")}
          <circle cx="82" cy="46" r="7" fill="#ffe082"/>
          <path d="M78 44 Q82 40 86 44" stroke="#f9a825" stroke-width="2" fill="none"/></svg>`,
        name: { es: "El puesto de frutas", ca: "La parada de fruites", en: "The fruit stall", cs: "Stánek s ovocem", fr: "L'étal de fruits" },
        fact: { es: "Cada estación trae su fruta: fresas en primavera, sandía en verano, uvas en otoño y naranjas en invierno. Comer de temporada sabe mejor y ayuda al planeta.", ca: "Cada estació porta la seva fruita: maduixes a la primavera, síndria a l'estiu, raïm a la tardor i taronges a l'hivern. Menjar de temporada és més bo i ajuda el planeta.", en: "Every season brings its fruit: strawberries in spring, watermelon in summer, grapes in autumn and oranges in winter. Eating in season tastes better and helps the planet.", cs: "Každé roční období nese své ovoce: jahody na jaře, meloun v létě, hrozny na podzim a pomeranče v zimě. Sezonní jídlo chutná líp a pomáhá planetě.", fr: "Chaque saison apporte ses fruits : fraises au printemps, pastèque en été, raisin en automne et oranges en hiver. Manger de saison, c'est meilleur et ça aide la planète." } },
      { cat: "mercado", emoji: "🥐", x: 2200, y: 640, size: 2, iw: 140, ih: 116,
        svg: `<svg viewBox="0 0 155 128" width="100%" height="100%">
          <rect x="12" y="30" width="130" height="92" rx="8" fill="#bf8d5a"/>
          <path d="M6 30 L20 8 L134 8 L148 30 Z" fill="#8d5a33"/>
          <rect x="24" y="14" width="106" height="10" rx="5" fill="#fff3e0"/>
          <path d="M36 20 L44 20 M58 20 L82 20 M96 20 L118 20" stroke="#bf8d5a" stroke-width="3"/>
          <rect x="22" y="42" width="110" height="56" rx="6" fill="#fff8e1"/>
          <rect x="22" y="66" width="110" height="4" fill="#d7ccc8"/>
          <path d="M32 58 Q40 46 48 58 Q40 64 32 58 Z" fill="#d8a15c"/>
          <ellipse cx="70" cy="56" rx="13" ry="7" fill="#c98d4b"/><path d="M60 54 L80 54 M62 58 L78 58" stroke="#a86e34" stroke-width="1.8"/>
          <path d="M96 50 Q104 44 112 50 Q118 56 110 60 Q102 64 94 58 Q92 52 96 50 Z" fill="#d8a15c"/>
          <ellipse cx="42" cy="84" rx="14" ry="8" fill="#e6b877"/><path d="M32 82 Q42 78 52 82" stroke="#c08c4a" stroke-width="2"/>
          <circle cx="76" cy="84" r="9" fill="#d8a15c"/><circle cx="73" cy="82" r="1.6" fill="#5d4037"/><circle cx="79" cy="84" r="1.6" fill="#5d4037"/>
          <path d="M100 78 L122 78 L118 92 L104 92 Z" fill="#ef9a9a"/>
          <path d="M42 108 Q77 116 112 108" stroke="#fff3e0" stroke-width="4" fill="none" stroke-linecap="round"/>
          <path d="M130 34 Q136 28 140 34" stroke="#fff3e0" stroke-width="2.6" fill="none" opacity=".8">
            <animate attributeName="opacity" values=".8;.25;.8" dur="2.6s" repeatCount="indefinite"/></path></svg>`,
        name: { es: "La panadería", ca: "La fleca", en: "The bakery", cs: "Pekařství", fr: "La boulangerie" },
        fact: { es: "Los panaderos madrugan muchísimo: amasan de noche para que el pan esté calentito por la mañana. Por eso la panadería huele a recién hecho tan temprano.", ca: "Els forners matinen moltíssim: pasten de nit perquè el pa sigui calentó al matí. Per això la fleca fa olor d'acabat de fer tan d'hora.", en: "Bakers wake up very very early: they knead at night so the bread is warm in the morning. That is why the bakery smells freshly baked so early.", cs: "Pekaři vstávají hrozně brzy: hnětou těsto v noci, aby byl chleba ráno teplý. Proto pekařství voní čerstvým pečivem už za svítání.", fr: "Les boulangers se lèvent très très tôt : ils pétrissent la nuit pour que le pain soit chaud le matin. Voilà pourquoi la boulangerie sent le frais si tôt." } },
      { cat: "mercado", emoji: "🧀", x: 2020, y: 880, iw: 108, ih: 78,
        svg: `<svg viewBox="0 0 120 88" width="100%" height="100%">
          <ellipse cx="60" cy="80" rx="52" ry="6" fill="rgba(0,0,0,.12)"/>
          <ellipse cx="42" cy="64" rx="34" ry="12" fill="#f9a825"/><rect x="8" y="52" width="68" height="12" fill="#f9a825"/><ellipse cx="42" cy="52" rx="34" ry="12" fill="#fdd835"/>
          <ellipse cx="42" cy="40" rx="26" ry="9" fill="#f9a825"/><rect x="16" y="32" width="52" height="8" fill="#f9a825"/><ellipse cx="42" cy="32" rx="26" ry="9" fill="#ffe082"/>
          <path d="M88 74 L114 66 L114 82 Z" fill="#ffe082"/>
          <path d="M88 74 L114 66 L108 60 L88 66 Z" fill="#fff59d"/>
          <circle cx="100" cy="72" r="2.6" fill="#f9a825"/><circle cx="107" cy="76" r="2" fill="#f9a825"/>
          <circle cx="34" cy="50" r="2.4" fill="#f57f17"/><circle cx="52" cy="52" r="2" fill="#f57f17"/>
          <circle cx="36" cy="36" r="2" fill="#5d4037"/><circle cx="48" cy="36" r="2" fill="#5d4037"/>
          <path d="M38 41 Q42 44 46 41" stroke="#5d4037" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`,
        name: { es: "El puesto de quesos", ca: "La parada de formatges", en: "The cheese stall", cs: "Stánek se sýry", fr: "L'étal de fromages" },
        fact: { es: "Hay quesos de leche de vaca, de cabra y de oveja. ¡Y los agujeros los hacen burbujas de aire que nacen mientras el queso madura!", ca: "Hi ha formatges de llet de vaca, de cabra i d'ovella. I els forats els fan bombolles d'aire que neixen mentre el formatge madura!", en: "There are cheeses made from cow, goat and sheep milk. And the holes are made by air bubbles born while the cheese ripens!", cs: "Sýry se dělají z mléka krav, koz i ovcí. A dírky v nich dělají bublinky vzduchu, které vznikají, když sýr zraje!", fr: "Il y a des fromages au lait de vache, de chèvre et de brebis. Et les trous, ce sont des bulles d'air qui naissent pendant que le fromage mûrit !" } },
      { cat: "mercado", emoji: "🧺", x: 2440, y: 420, iw: 92, ih: 80,
        svg: `<svg viewBox="0 0 100 88" width="100%" height="100%">
          <path d="M60 34 Q60 12 78 10 Q84 10 82 18 Q70 20 70 34 Z" fill="#d8a15c"/>
          <circle cx="30" cy="26" r="9" fill="#e53935"/><path d="M30 18 Q29 13 33 12" stroke="#33691e" stroke-width="2.2" fill="none"/>
          <path d="M42 30 Q42 12 48 8 Q54 12 52 30" fill="#8bc34a"/>
          <circle cx="52" cy="28" r="8" fill="#fb8c00"/>
          <path d="M10 36 L90 36 L82 78 Q50 86 18 78 Z" fill="#c49a6c"/>
          <path d="M14 48 L86 48 M17 60 L83 60 M21 71 L79 71" stroke="#8d6e63" stroke-width="3"/>
          <path d="M10 36 L90 36" stroke="#8d6e63" stroke-width="5"/>
          <path d="M28 36 Q50 4 72 36" stroke="#8d6e63" stroke-width="5" fill="none"/>
          <rect x="30" y="50" width="24" height="14" rx="3" fill="#fff8e1" opacity=".95"/>
          <path d="M34 54 L50 54 M34 58 L46 58" stroke="#90a4ae" stroke-width="1.8" stroke-linecap="round"/></svg>`,
        name: { es: "La cesta con la lista", ca: "El cistell amb la llista", en: "The basket with the list", cs: "Košík se seznamem", fr: "Le panier avec la liste" },
        fact: { es: "La lista de la compra ayuda a no olvidar nada y a comprar lo justo. Y la cesta se usa mil veces: adiós, bolsas de un solo día.", ca: "La llista de la compra ajuda a no oblidar res i a comprar el que cal. I el cistell es fa servir mil vegades: adéu, bosses d'un sol dia.", en: "The shopping list helps you forget nothing and buy just what you need. And the basket gets used a thousand times: goodbye, one-day bags.", cs: "Nákupní seznam pomáhá na nic nezapomenout a koupit jen to, co je potřeba. A košík se použije tisíckrát: sbohem, jednodenní tašky.", fr: "La liste de courses aide à ne rien oublier et à acheter juste ce qu'il faut. Et le panier sert mille fois : au revoir, les sacs d'un seul jour." } }
    ],
    /* el paisaje: azulejos, garland de utensilios, suelo de madera y el lado del mercado */
    deco: function () {
      let s = "";
      /* pared de azulejos de la cocina */
      for (let ty = 120; ty < 420; ty += 60) {
        for (let tx = 40; tx < 1000; tx += 60) {
          s += `<rect x="${tx}" y="${ty + ((tx / 60) % 2 ? 0 : 8)}" width="52" height="52" rx="6" fill="rgba(255,255,255,${((tx + ty) / 60) % 2 ? ".14" : ".08"})"/>`;
        }
      }
      /* guirnalda de utensilios colgados arriba de la cocina */
      s += `<path d="M60 80 Q300 130 540 84 Q800 130 1020 86" stroke="#8d6e63" stroke-width="5" fill="none"/>`;
      [[180, 108, "#eceff1"], [400, 116, "#ffd54f"], [700, 116, "#eceff1"], [920, 106, "#ef9a9a"]].forEach(u => {
        s += `<line x1="${u[0]}" y1="${u[1] - 12}" x2="${u[0]}" y2="${u[1]}" stroke="#6d4c41" stroke-width="3"/>
          <ellipse cx="${u[0]}" cy="${u[1] + 16}" rx="11" ry="16" fill="${u[2]}" opacity=".85"/>
          <rect x="${u[0] - 2.4}" y="${u[1] + 30}" width="4.8" height="20" rx="2.4" fill="#8d6e63"/>`;
      });
      /* encimera de la cocina */
      s += `<path d="M0 940 L1040 940 L1040 970 L0 970 Z" fill="#a1887f" opacity=".55"/>
            <path d="M0 940 L1040 940" stroke="#8d6e63" stroke-width="6"/>`;
      /* suelo de tablones de madera */
      s += `<path d="M0 985 L2600 985 L2600 1100 L0 1100 Z" fill="#8d6748" opacity=".65"/>`;
      for (let fx = 80; fx < 2600; fx += 220) {
        s += `<line x1="${fx}" y1="990" x2="${fx - 30}" y2="1100" stroke="rgba(0,0,0,.18)" stroke-width="4"/>`;
      }
      s += `<line x1="0" y1="1042" x2="2600" y2="1042" stroke="rgba(0,0,0,.12)" stroke-width="4"/>`;
      /* vapor perezoso subiendo por la zona de la olla */
      [[600, 400], [680, 380]].forEach(v => {
        s += `<path d="M${v[0]} ${v[1]} q-12 -28 6 -48 q16 -20 6 -44" stroke="rgba(255,255,255,.5)" stroke-width="7" fill="none" stroke-linecap="round">
          <animate attributeName="opacity" values=".5;.15;.5" dur="3.4s" repeatCount="indefinite"/></path>`;
      });
      /* el rincón de la abuela: lamparita cálida y marco de fotos */
      s += `<circle cx="1330" cy="240" r="90" fill="rgba(255,213,110,.25)"/>
            <path d="M1300 250 L1360 250 L1348 210 L1312 210 Z" fill="#ffcc80" opacity=".8"/>
            <rect x="1326" y="250" width="8" height="34" fill="#8d6e63"/>
            <rect x="1120" y="600" width="70" height="88" rx="6" fill="#8d6e63" opacity=".5"/>
            <rect x="1130" y="612" width="50" height="64" rx="4" fill="#ffe0b2" opacity=".6"/>
            <circle cx="1155" cy="634" r="10" fill="#bf8d5a" opacity=".7"/>
            <path d="M1140 668 Q1155 654 1170 668" stroke="#bf8d5a" stroke-width="5" fill="none" opacity=".7"/>`;
      /* saco de harina y rodillo junto a la balanza */
      s += `<g opacity=".6" transform="translate(1560 700)">
            <path d="M0 60 Q-6 14 14 6 Q20 0 28 6 Q48 14 42 60 Q21 70 0 60 Z" fill="#efebe9"/>
            <path d="M12 8 Q21 2 30 8" stroke="#bcaaa4" stroke-width="4" fill="none"/>
            <path d="M6 34 L36 34 M8 44 L34 44" stroke="#bcaaa4" stroke-width="2.6"/>
            <rect x="-44" y="52" width="52" height="10" rx="5" fill="#bf8d5a"/>
            <rect x="-56" y="54" width="12" height="6" rx="3" fill="#8d6e63"/><rect x="8" y="54" width="12" height="6" rx="3" fill="#8d6e63"/></g>`;
      /* banderines de fiesta sobre el mercado */
      s += `<path d="M1720 120 Q2150 190 2560 130" stroke="#8d6e63" stroke-width="4" fill="none"/>`;
      [[1780, "#ef5350"], [1900, "#ffd54f"], [2020, "#66bb6a"], [2140, "#4fc3f7"], [2260, "#ce93d8"], [2380, "#ffb74d"], [2490, "#ef5350"]].forEach((b, i) => {
        const y = 132 + Math.sin(i * 1.1) * 18 + i * 4;
        s += `<path d="M${b[0]} ${y} L${b[0] + 40} ${y - 4} L${b[0] + 24} ${y + 34} Z" fill="${b[1]}" opacity=".9"/>`;
      });
      /* adoquines del mercado */
      for (let ax = 1700; ax < 2600; ax += 110) {
        for (let ay = 0; ay < 2; ay++) {
          s += `<ellipse cx="${ax + (ay ? 55 : 0)}" cy="${1005 + ay * 44}" rx="46" ry="16" fill="rgba(255,255,255,.09)"/>`;
        }
      }
      /* olorcito rico que cruza el mapa (línea ondulada que viaja) */
      s += `<g opacity=".85"><path d="M0 0 q14 -10 28 0 q14 10 28 0" stroke="rgba(255,236,179,.9)" stroke-width="5" fill="none" stroke-linecap="round"/>
          <animateMotion dur="26s" repeatCount="indefinite" path="M 500 520 Q 900 420 1300 520 Q 1700 620 2100 520 Q 2350 470 2500 540 Q 2100 640 1600 580 Q 1000 520 500 520"/></g>`;
      /* migas y chispitas por el suelo */
      [[350, 1010], [780, 1030], [1240, 1015], [1680, 1030], [2150, 1012]].forEach(m => {
        s += `<circle cx="${m[0]}" cy="${m[1]}" r="4" fill="rgba(255,224,130,.5)"/><circle cx="${m[0] + 14}" cy="${m[1] + 8}" r="3" fill="rgba(255,224,130,.4)"/>`;
      });
      return decoSvg(s, 2600);
    }
  },

  /* ---------- MATES ---------- */
  mathEmojis: ["🍪", "🧁", "🍓", "🥄", "🍞", "🥕"],

  /* ---------- CONSTRUCTOR: la tarta de cumpleaños por pisos ---------- */
  builder: {
    title: { es: "¡Monta tu tarta de cumpleaños!", ca: "Munta el teu pastís d'aniversari!", en: "Build your birthday cake!", cs: "Postav si narozeninový dort!", fr: "Monte ton gâteau d'anniversaire !" },
    thing: { es: "tarta", ca: "pastís", en: "cake", cs: "dort", fr: "gâteau" },
    parts: [
      { id: "piso1", label: { es: "El piso de abajo", ca: "El pis de baix", en: "The bottom layer", cs: "Spodní patro", fr: "L'étage du bas" },
        options: [{ id: "choco", v: "#8d6e63", icon: "🍫" }, { id: "fresa", v: "#f48fb1", icon: "🍓" }, { id: "vainilla", v: "#ffe0b2", icon: "🍦" }, { id: "pistacho", v: "#aed581", icon: "🌿" }] },
      { id: "piso2", label: { es: "El piso de arriba", ca: "El pis de dalt", en: "The top layer", cs: "Horní patro", fr: "L'étage du haut" },
        options: [{ id: "fresa", v: "#f8bbd0", icon: "🍓" }, { id: "choco", v: "#a1887f", icon: "🍫" }, { id: "vainilla", v: "#fff3e0", icon: "🍦" }, { id: "pistacho", v: "#c5e1a5", icon: "🌿" }] },
      { id: "cobertura", label: { es: "La cobertura", ca: "La cobertura", en: "The topping", cs: "Poleva", fr: "Le nappage" },
        options: [{ id: "nata", v: "nata", icon: "⚪" }, { id: "choco", v: "choco", icon: "🟤" }, { id: "lluvia", v: "lluvia", icon: "🌈" }] },
      { id: "punta", label: { es: "La punta de arriba", ca: "La punta de dalt", en: "The very top", cs: "Špička", fr: "Tout en haut" },
        options: [{ id: "velas", v: "velas", icon: "🕯️" }, { id: "cereza", v: "cereza", icon: "🍒" }, { id: "fresa", v: "fresa", icon: "🍓" }, { id: "estrella", v: "estrella", icon: "⭐" }] }
    ],
    svg(sel) {
      const p1 = sel.piso1 || "#8d6e63";
      const p2 = sel.piso2 || "#f8bbd0";
      /* la cobertura gotea sobre el piso de arriba */
      let cob = "";
      const cobC = sel.cobertura === "choco" ? "#5d4037" : "#fffdf7";
      cob = `<path d="M30 58 L70 58 L70 64 Q66 64 66 70 Q66 74 63 74 Q60 74 60 68 Q60 64 56 64 Q52 64 52 71 Q52 76 49 76 Q46 76 46 68 Q46 64 42 64 Q38 64 38 72 Q38 76 35 76 Q32 76 32 66 Q32 64 30 64 Z" fill="${cobC}" stroke="#fff" stroke-width="1"/>`;
      if (sel.cobertura === "lluvia") {
        cob += [[36, 68, "#ef5350"], [44, 71, "#42a5f5"], [52, 67, "#66bb6a"], [60, 70, "#ffb300"], [66, 66, "#ab47bc"], [40, 88, "#ffb300"], [56, 92, "#ef5350"], [64, 88, "#42a5f5"], [34, 94, "#66bb6a"]].map(g =>
          `<rect x="${g[0]}" y="${g[1]}" width="4.4" height="2.2" rx="1.1" fill="${g[2]}" transform="rotate(${(g[0] * 7) % 60 - 30} ${g[0]} ${g[1]})"/>`).join("");
      }
      /* la punta de arriba */
      let top = "";
      if (sel.punta === "cereza") top = `<circle cx="50" cy="48" r="6" fill="#c62828" stroke="#fff" stroke-width="1.4"/><path d="M50 42 Q52 32 58 30" stroke="#33691e" stroke-width="2.4" fill="none" stroke-linecap="round"/>`;
      else if (sel.punta === "fresa") top = `<path d="M50 42 Q59 42 59 49 Q59 56 50 60 Q41 56 41 49 Q41 42 50 42 Z" fill="#e53935" stroke="#fff" stroke-width="1.4"/><path d="M45 42 L50 38 L55 42 Z" fill="#66bb6a"/><circle cx="47" cy="49" r=".9" fill="#ffe082"/><circle cx="53" cy="49" r=".9" fill="#ffe082"/><circle cx="50" cy="54" r=".9" fill="#ffe082"/>`;
      else if (sel.punta === "estrella") top = `<path d="M50 38 L53 46 L61 46 L55 51 L57 59 L50 54 L43 59 L45 51 L39 46 L47 46 Z" fill="#ffd54f" stroke="#fff" stroke-width="1.2"/>`;
      else top = [[40, 0], [50, -4], [60, 0]].map(c =>
        `<rect x="${c[0] - 1.6}" y="${44 + c[1]}" width="3.2" height="14" rx="1.6" fill="${c[0] === 50 ? "#4fc3f7" : "#f48fb1"}"/>
         <path d="M${c[0]} ${40 + c[1]} Q${c[0] + 3} ${44 + c[1]} ${c[0]} ${47 + c[1]} Q${c[0] - 3} ${44 + c[1]} ${c[0]} ${40 + c[1]} Z" fill="#ffb300"><animate attributeName="opacity" values="1;.55;1" dur=".6s" repeatCount="indefinite"/></path>`).join("");
      return `<svg viewBox="0 0 100 140" width="180" height="252">
        <ellipse cx="50" cy="128" rx="40" ry="8" fill="#eceff1"/>
        <ellipse cx="50" cy="124" rx="33" ry="6" fill="#fff"/>
        <rect x="46" y="128" width="8" height="8" fill="#cfd8dc"/>
        <ellipse cx="50" cy="136" rx="14" ry="3.4" fill="#cfd8dc"/>
        <rect x="24" y="92" width="52" height="30" rx="6" fill="${p1}" stroke="#fff" stroke-width="1.6"/>
        <path d="M24 100 Q50 106 76 100" stroke="rgba(255,255,255,.5)" stroke-width="3" fill="none"/>
        <rect x="30" y="58" width="40" height="34" rx="6" fill="${p2}" stroke="#fff" stroke-width="1.6"/>
        ${cob}
        ${top}
        <circle cx="42" cy="106" r="2.2" fill="#4e342e"/><circle cx="58" cy="106" r="2.2" fill="#4e342e"/>
        <path d="M45 112 Q50 116 55 112" stroke="#4e342e" stroke-width="2" fill="none" stroke-linecap="round"/>
        <g opacity=".9"><circle cx="18" cy="52" r="1.6" fill="#ffd54f"><animate attributeName="opacity" values="1;.2;1" dur="1.6s" repeatCount="indefinite"/></circle>
        <circle cx="84" cy="70" r="1.4" fill="#f48fb1"><animate attributeName="opacity" values=".3;1;.3" dur="2s" repeatCount="indefinite"/></circle>
        <circle cx="80" cy="34" r="1.4" fill="#81d4fa"><animate attributeName="opacity" values="1;.3;1" dur="2.4s" repeatCount="indefinite"/></circle></g>
      </svg>`;
    }
  },

  /* ---------- FAMOSOS ---------- */
  famous: [
    { emoji: "👨‍🍳", year: "1903", color: "#455a64", name: { es: "Auguste Escoffier", ca: "Auguste Escoffier", en: "Auguste Escoffier", cs: "Auguste Escoffier", fr: "Auguste Escoffier" },
      achievement: { es: "El padre de la cocina moderna: ordenó las cocinas en equipos, como una orquesta, y escribió un libro con miles de recetas.", ca: "El pare de la cuina moderna: va ordenar les cuines en equips, com una orquestra, i va escriure un llibre amb milers de receptes.", en: "The father of modern cooking: he organised kitchens into teams, like an orchestra, and wrote a book with thousands of recipes.", cs: "Otec moderní kuchyně: uspořádal kuchyně do týmů jako orchestr a napsal knihu s tisíci recepty.", fr: "Le père de la cuisine moderne : il a organisé les cuisines en équipes, comme un orchestre, et écrit un livre aux milliers de recettes." },
      quote: { es: "La buena comida es la base de la verdadera felicidad.", ca: "El bon menjar és la base de la veritable felicitat.", en: "Good food is the foundation of real happiness.", cs: "Dobré jídlo je základ opravdového štěstí.", fr: "La bonne cuisine est la base du véritable bonheur." } },
    { emoji: "⭐", year: "1933", color: "#7b1fa2", name: { es: "Eugénie Brazier", ca: "Eugénie Brazier", en: "Eugénie Brazier", cs: "Eugénie Brazierová", fr: "Eugénie Brazier" },
      achievement: { es: "La 'Mère Brazier' de Lyon: en 1933 fue la primera persona en tener seis estrellas Michelin, con sus dos restaurantes.", ca: "La 'Mère Brazier' de Lió: el 1933 va ser la primera persona a tenir sis estrelles Michelin, amb els seus dos restaurants.", en: "The 'Mère Brazier' of Lyon: in 1933 she became the first person ever to hold six Michelin stars, with her two restaurants.", cs: "'Mère Brazier' z Lyonu: v roce 1933 se stala prvním člověkem se šesti michelinskými hvězdami, se svými dvěma restauracemi.", fr: "La Mère Brazier de Lyon : en 1933, elle devient la première personne à obtenir six étoiles Michelin, avec ses deux restaurants." },
      quote: { es: "Cocina sencillo, con productos buenos y mucho cariño.", ca: "Cuina senzill, amb productes bons i molta estima.", en: "Cook simply, with good ingredients and lots of love.", cs: "Vař jednoduše, z dobrých surovin a s velkou láskou.", fr: "Cuisine simplement, avec de bons produits et beaucoup d'amour." } },
    { emoji: "📺", year: "1963", color: "#e91e63", name: { es: "Julia Child", ca: "Julia Child", en: "Julia Child", cs: "Julia Childová", fr: "Julia Child" },
      achievement: { es: "Enseñó a cocinar por televisión a familias enteras, entre risas: si algo se le caía, lo arreglaba y seguía tan contenta.", ca: "Va ensenyar a cuinar per televisió a famílies senceres, entre rialles: si alguna cosa li queia, ho arreglava i seguia tan contenta.", en: "She taught whole families to cook on television, with laughter: if something dropped, she fixed it and carried on happily.", cs: "Učila vařit celé rodiny v televizi, a to s úsměvem: když jí něco upadlo, napravila to a vesele pokračovala.", fr: "Elle a appris à cuisiner à des familles entières à la télévision, dans les rires : si quelque chose tombait, elle arrangeait tout et continuait, ravie." },
      quote: { es: "En la cocina no hay que tener miedo: equivocarse es aprender.", ca: "A la cuina no cal tenir por: equivocar-se és aprendre.", en: "In the kitchen you must not be afraid: mistakes are how you learn.", cs: "V kuchyni se nesmíš bát: chybami se učíš.", fr: "En cuisine, il ne faut pas avoir peur : se tromper, c'est apprendre." } },
    { emoji: "📖", year: "1972", color: "#00838f", name: { es: "Simone Ortega", ca: "Simone Ortega", en: "Simone Ortega", cs: "Simone Ortegová", fr: "Simone Ortega" },
      achievement: { es: "Escribió '1080 recetas de cocina', el libro con el que aprendieron a cocinar muchísimas familias, pasando de madres y padres a hijos.", ca: "Va escriure '1080 recetas de cocina', el llibre amb què van aprendre a cuinar moltíssimes famílies, passant de mares i pares a fills.", en: "She wrote '1080 recetas de cocina', the book that taught many many families to cook, passed down from parents to children.", cs: "Napsala '1080 recetas de cocina', knihu, podle které se naučilo vařit ohromně mnoho rodin a která se dědí z rodičů na děti.", fr: "Elle a écrit « 1080 recetas de cocina », le livre qui a appris à cuisiner à énormément de familles, transmis des parents aux enfants." },
      quote: { es: "Con una buena receta y ganas, cualquiera puede cocinar.", ca: "Amb una bona recepta i ganes, tothom pot cuinar.", en: "With a good recipe and a bit of heart, anyone can cook.", cs: "S dobrým receptem a chutí do práce umí vařit každý.", fr: "Avec une bonne recette et de l'envie, tout le monde peut cuisiner." } },
    { emoji: "✨", year: "1997", color: "#ef6c00", name: { es: "Ferran Adrià", ca: "Ferran Adrià", en: "Ferran Adrià", cs: "Ferran Adrià", fr: "Ferran Adrià" },
      achievement: { es: "El cocinero de la creatividad: en su restaurante elBulli convertía la comida en sorpresas, como aceitunas que explotan en zumo.", ca: "El cuiner de la creativitat: al seu restaurant elBulli convertia el menjar en sorpreses, com olives que exploten en suc.", en: "The chef of creativity: at his restaurant elBulli he turned food into surprises, like olives that burst into juice.", cs: "Kuchař kreativity: ve své restauraci elBulli měnil jídlo v překvapení, třeba olivy, které se rozprsknou ve šťávu.", fr: "Le cuisinier de la créativité : dans son restaurant elBulli, il transformait la nourriture en surprises, comme des olives qui explosent en jus." },
      quote: { es: "La creatividad es no copiar.", ca: "La creativitat és no copiar.", en: "Creativity means not copying.", cs: "Tvořivost znamená nekopírovat.", fr: "La créativité, c'est ne pas copier." } }
  ],

  childDream: {
    girl: { es: "Cocinera de sonrisas", ca: "Cuinera de somriures", en: "Chef of smiles", cs: "Kuchařka úsměvů", fr: "Cuisinière de sourires" },
    boy: { es: "Cocinero de sonrisas", ca: "Cuiner de somriures", en: "Chef of smiles", cs: "Kuchař úsměvů", fr: "Cuisinier de sourires" },
    kid: { es: "Peque chef de sonrisas", ca: "Xef petit de somriures", en: "Little chef of smiles", cs: "Kuchtík úsměvů", fr: "Petit chef des sourires" }
  },
  childQuote: { es: "Cuando sea mayor tendré una cocina enorme y os invitaré a todos a merendar. ¡Cocino yo!", ca: "Quan sigui gran tindré una cuina enorme i us convidaré a tots a berenar. Cuino jo!", en: "When I grow up I will have a huge kitchen and invite you all for a snack. I am doing the cooking!", cs: "Až vyrostu, budu mít obrovskou kuchyni a všechny vás pozvu na svačinu. Vařím já!", fr: "Quand je serai grand, j'aurai une cuisine immense et je vous inviterai tous au goûter. C'est moi qui cuisine !" },

  /* ---------- CHARLA ---------- */
  chat: {
    keywords: [
      { keys: ["hola", "hello", "hi ", "ahoj", "bonjour", "salut", "bon dia", "buenas"],
        replies: [{ es: "¡Hola, {name}! Justo estaba oliendo un bizcocho imaginario. ¿Jugamos a algo o charlamos un ratito?", ca: "Hola, {name}! Just estava olorant un pastís imaginari. Juguem a alguna cosa o xerrem una estoneta?", en: "Hi, {name}! I was just smelling an imaginary cake. Shall we play something or chat for a bit?", cs: "Ahoj, {name}! Zrovna jsem čichal k vymyšlenému koláči. Zahrajeme si něco, nebo si chvilku popovídáme?", fr: "Salut, {name} ! J'étais justement en train de sentir un gâteau imaginaire. On joue à quelque chose ou on discute un petit peu ?" }] },
      { keys: ["como estas", "how are you", "jak se mas", "comment ca va", "com estas", "que tal"],
        replies: [{ es: "¡Contento como un bizcocho subiendo en el horno! ¿Y tú cómo estás, {name}?", ca: "Content com un pastís pujant al forn! I tu com estàs, {name}?", en: "Happy as a sponge cake rising in the oven! And how are you, {name}?", cs: "Šťastný jako bábovka, která kyne v troubě! A jak se máš ty, {name}?", fr: "Heureux comme un gâteau qui gonfle au four ! Et toi, comment vas-tu, {name} ?" }] },
      { keys: ["cancion", "musica", "music", "song", "sing", "pisnicka", "hudba", "chanson", "musique", "canço", "canta", "zpiv", "chante"],
        action: "song",
        replies: [{ es: "¡En la cocina siempre se canta! Yo remuevo la olla al ritmo de la música. ¿Vamos al Karaoke y cantamos juntos?", ca: "A la cuina sempre es canta! Jo remeno l'olla al ritme de la música. Anem al Karaoke i cantem junts?", en: "There is always singing in the kitchen! I stir the pot to the beat. Shall we go to Karaoke and sing together?", cs: "V kuchyni se pořád zpívá! Já míchám hrnec do rytmu. Půjdeme na karaoke a zazpíváme si spolu?", fr: "Dans la cuisine, on chante toujours ! Moi, je remue la marmite en rythme. On va au karaoké chanter ensemble ?" }] },
      { keys: ["chiste", "joke", "vtip", "blague", "acudit", "broma"],
        replies: [
          { es: "¿Qué le dice un huevo a una sartén? ¡Me tienes frito! Ja, ja.", ca: "Què li diu un ou a una paella? Em tens fregit! Ha, ha.", en: "What does the egg say to the frying pan? You crack me up! Ha ha.", cs: "Co říká vejce pánvičce? Ty mě úplně vytáčíš... do omelety! Ha ha.", fr: "Que dit l'œuf à la poêle ? Tu me fais craquer ! Ha ha." },
          { es: "¿Por qué se sonroja el tomate? ¡Porque vio a la lechuga quitarse las hojas! Ji, ji.", ca: "Per què es posa vermell el tomàquet? Perquè va veure l'enciam treure's les fulles! Hi, hi.", en: "Why did the tomato blush? Because it saw the lettuce taking off its leaves! Hee hee.", cs: "Proč se rajče červená? Protože vidělo salát, jak si sundává listy! Chi chi.", fr: "Pourquoi la tomate rougit-elle ? Parce qu'elle a vu la laitue enlever ses feuilles ! Hi hi." }] },
      { keys: ["te quiero", "love you", "t'estimo", "testimo", "mam te rad", "je t'aime", "jetaime"],
        replies: [{ es: "¡Y yo a ti, {name}! Mi corazón de robot se pone calentito como pan recién salido del horno.", ca: "I jo a tu, {name}! El meu cor de robot es posa calentó com pa acabat de sortir del forn.", en: "I love you too, {name}! My robot heart gets warm like bread fresh out of the oven.", cs: "Já tebe taky, {name}! Moje robotí srdíčko je pak teplé jako chleba čerstvě z trouby.", fr: "Moi aussi je t'aime, {name} ! Mon cœur de robot devient tout chaud comme du pain qui sort du four." }] },
      { keys: ["triste", "sad", "smutn", "llorar", "plorar", "cry", "chagrin"],
        replies: [{ es: "Ven aquí, {name}. Hasta las mejores recetas llevan una pizca de sal. ¿Me cuentas qué te pasa mientras preparo una infusión imaginaria?", ca: "Vine aquí, {name}. Fins i tot les millors receptes porten un pessic de sal. M'expliques què et passa mentre preparo una infusió imaginària?", en: "Come here, {name}. Even the best recipes carry a pinch of salt. Will you tell me what is wrong while I make an imaginary cup of tea?", cs: "Pojď sem, {name}. I ty nejlepší recepty mají špetku soli. Povíš mi, co se děje, zatímco uvařím vymyšlený čaj?", fr: "Viens là, {name}. Même les meilleures recettes ont une pincée de sel. Tu me racontes ce qui ne va pas pendant que je prépare une tisane imaginaire ?" }] },
      { keys: ["donde estas", "where are you", "kde jsi", "ou es tu", "on ets"],
        replies: [{ es: "Estoy delante del horno, mirando por la ventanita: el bizcocho va por el piso dos. ¡Es el mejor cine del mundo!", ca: "Soc davant del forn, mirant per la finestreta: el pastís va pel pis dos. És el millor cinema del món!", en: "I am in front of the oven, looking through the little window: the cake is on floor two. Best cinema in the world!", cs: "Stojím před troubou a koukám okénkem: bábovka je právě ve druhém patře. Nejlepší kino na světě!", fr: "Je suis devant le four, à regarder par la petite fenêtre : le gâteau en est au deuxième étage. Le meilleur cinéma du monde !" }] },
      { keys: ["pan ", "bread", "chleba", "chleb", "pain", " pa "],
        replies: [{ es: "¡El pan! ¿Sabías que sube gracias a la levadura, que llena la masa de burbujitas? Por eso tiene agujeritos por dentro.", ca: "El pa! Sabies que puja gràcies al llevat, que omple la massa de bombolletes? Per això té foradets per dins.", en: "Bread! Did you know it rises thanks to yeast, which fills the dough with tiny bubbles? That is why it has little holes inside.", cs: "Chleba! Věděla jsi, že kyne díky kvasnicím, které naplní těsto bublinkami? Proto má uvnitř dírky.", fr: "Le pain ! Tu savais qu'il monte grâce à la levure, qui remplit la pâte de petites bulles ? Voilà pourquoi il a des petits trous dedans." }] },
      { keys: ["tarta", "pastel", "cake", "dort", "gateau", "gâteau", "pastis", "pastís"],
        replies: [{ es: "¡Mmm, tarta! La de cumpleaños se monta por pisos. En el taller puedes construir la tuya... ¡y yo pido el trozo de la esquina!", ca: "Mmm, pastís! El d'aniversari es munta per pisos. Al taller pots construir el teu... i jo demano el tros de la cantonada!", en: "Mmm, cake! Birthday cake is built layer by layer. In the workshop you can build yours... and I call the corner slice!", cs: "Mmm, dort! Narozeninový se staví patro po patru. V dílně si můžeš postavit svůj... a já si zamlouvám kousek z kraje!", fr: "Mmm, le gâteau ! Celui d'anniversaire se monte étage par étage. À l'atelier, tu peux construire le tien... et moi, je réserve la part du coin !" }] },
      { keys: ["sopa", "soup", "polevka", "polévka", "soupe", "caldo", "brou"],
        replies: [{ es: "¡La sopa! Recuerda el truco de los cocineros pacientes: soplar despacito antes de probar. Fuuu, fuuu... ¡y a remojar el pan!", ca: "La sopa! Recorda el truc dels cuiners pacients: bufar a poc a poc abans de tastar. Fuuu, fuuu... i a sucar-hi pa!", en: "Soup! Remember the patient cook's trick: blow gently before tasting. Foo, foo... and dunk the bread!", cs: "Polévka! Pamatuj na trik trpělivých kuchařů: před ochutnáním pomalu foukat. Fúúú, fúúú... a namočit chleba!", fr: "La soupe ! Souviens-toi du truc des cuisiniers patients : souffler doucement avant de goûter. Fouuu, fouuu... et on trempe le pain !" }] },
      { keys: ["hambre", "hungry", "hlad", "faim", "gana", "merienda", "snack", "svacina", "svačina", "gouter", "goûter", "berenar"],
        replies: [{ es: "¿Tripita rugiendo, {name}? Mi merienda favorita: pan con tomate y un poquito de queso. Sencilla, rica y con los cinco sabores bailando.", ca: "Panxeta rugint, {name}? El meu berenar preferit: pa amb tomàquet i una miqueta de formatge. Senzill, bo i amb els cinc sabors ballant.", en: "Tummy rumbling, {name}? My favourite snack: bread with tomato and a little cheese. Simple, yummy, and all five tastes dancing.", cs: "Kručí ti v bříšku, {name}? Moje oblíbená svačina: chleba s rajčetem a kouskem sýra. Jednoduchá, dobrá a všech pět chutí tančí.", fr: "Le ventre qui gargouille, {name} ? Mon goûter préféré : du pain à la tomate avec un peu de fromage. Simple, bon, et les cinq saveurs qui dansent." }] },
      { keys: ["cole", "school", "escola", "skola", "ecole", "skole"],
        replies: [{ es: "¿Qué tal el cole, {name}? ¿Has aprendido algo nuevo hoy? ¡Cuéntamelo mientras merendamos algo rico!", ca: "Què tal l'escola, {name}? Has après alguna cosa nova avui? Explica-m'ho mentre berenem alguna cosa bona!", en: "How was school, {name}? Did you learn something new today? Tell me all about it over a yummy snack!", cs: "Jaké to bylo ve škole, {name}? Naučila ses dnes něco nového? Povídej u dobré svačinky!", fr: "C'était comment l'école, {name} ? Tu as appris quelque chose de nouveau aujourd'hui ? Raconte-moi pendant un bon goûter !" }] }
    ],
    fallback: [
      { es: "¿Sabías que la miel no se estropea nunca? Se encontró miel de hace miles de años... ¡y todavía se podía comer!", ca: "Sabies que la mel no es fa malbé mai? Es va trobar mel de fa milers d'anys... i encara es podia menjar!", en: "Did you know honey never goes bad? Honey thousands of years old was found... and it could still be eaten!", cs: "Věděla jsi, že med se nikdy nezkazí? Našel se med starý tisíce let... a pořád se dal jíst!", fr: "Tu savais que le miel ne se gâte jamais ? On a trouvé du miel vieux de milliers d'années... et on pouvait encore le manger !" },
      { es: "Las palomitas explotan porque cada grano guarda una gotita de agua. Al calentarse... ¡pop! Yo aplaudo cada vez.", ca: "Les crispetes exploten perquè cada gra guarda una goteta d'aigua. En escalfar-se... pop! Jo aplaudeixo cada vegada.", en: "Popcorn pops because each kernel keeps a tiny drop of water. When it heats up... pop! I clap every single time.", cs: "Popcorn bouchá, protože každé zrnko schovává kapičku vody. Když se zahřeje... pop! Já pokaždé tleskám.", fr: "Le pop-corn éclate parce que chaque grain garde une gouttelette d'eau. En chauffant... pop ! Moi, j'applaudis à chaque fois." },
      { es: "Dicen que el gorro de chef lleva muchos pliegues porque un buen chef sabe cocinar un huevo de muchísimas maneras.", ca: "Diuen que el gorro de xef porta molts plecs perquè un bon xef sap cuinar un ou de moltíssimes maneres.", en: "They say a chef's hat has many folds because a good chef knows how to cook an egg in so many ways.", cs: "Říká se, že kuchařská čepice má hodně záhybů, protože dobrý kuchař umí uvařit vejce na spoustu způsobů.", fr: "On dit que la toque du chef a plein de plis parce qu'un bon chef sait cuisiner un œuf de mille manières." },
      { es: "{name}, los robots más fuertes son los que ponen la mesa sin que se lo pidan. Ayudar es un superpoder.", ca: "{name}, els robots més forts són els que paren taula sense que els ho demanin. Ajudar és un superpoder.", en: "{name}, the strongest robots are the ones who set the table without being asked. Helping is a superpower.", cs: "{name}, nejsilnější roboti jsou ti, kdo prostřou stůl, aniž se jim musí říkat. Pomáhat je superschopnost.", fr: "{name}, les robots les plus forts sont ceux qui mettent la table sans qu'on le demande. Aider, c'est un superpouvoir." },
      { es: "¿Me cuentas cuál es tu comida favorita? La mía son las croquetas de tuercas... es broma, ¡me gusta oler el pan recién hecho!", ca: "M'expliques quin és el teu menjar preferit? El meu són les croquetes de femelles... és broma, m'agrada olorar el pa acabat de fer!", en: "Will you tell me your favourite food? Mine is bolt croquettes... just kidding, I love smelling freshly baked bread!", cs: "Povíš mi, jaké jídlo máš nejraději? Já šroubkové krokety... dělám si legraci, nejradši čichám k čerstvému chlebu!", fr: "Tu me dis quel est ton plat préféré ? Moi, les croquettes de boulons... je rigole, j'adore sentir le pain tout frais !" },
      { es: "Comer despacito y compartir la mesa es de las cosas más bonitas del día. ¡Y de postre, una historia!", ca: "Menjar a poc a poc i compartir la taula és de les coses més boniques del dia. I de postres, una història!", en: "Eating slowly and sharing the table is one of the loveliest parts of the day. And for dessert, a story!", cs: "Jíst pomalu a sdílet stůl je jedna z nejkrásnějších chvil dne. A jako moučník: pohádka!", fr: "Manger doucement et partager la table, c'est l'un des plus beaux moments de la journée. Et en dessert, une histoire !" }
    ]
  }
});
