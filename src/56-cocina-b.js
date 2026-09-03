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
    width: 4200, height: 1100, stars: false,
    bgCss: "radial-gradient(ellipse 26% 24% at 16% 8%, rgba(255,236,179,.55), transparent), radial-gradient(ellipse 24% 26% at 92% 12%, rgba(179,229,252,.45), transparent), linear-gradient(180deg,#fff3e0 0%,#ffe4be 34%,#f4c99a 62%,#d8ab80 82%,#b08561 100%)",
    cats: [
      { id: "cocina", emoji: "🍳", x: 140, name: { es: "La gran cocina", ca: "La gran cuina", en: "The big kitchen", cs: "Velká kuchyně", fr: "La grande cuisine" } },
      { id: "rincon", emoji: "👵", x: 2080, name: { es: "El rincón de la abuela", ca: "El racó de l'àvia", en: "Grandma's corner", cs: "Babiččin koutek", fr: "Le coin de mamie" } },
      { id: "mercado", emoji: "🧺", x: 3100, name: { es: "El mercado", ca: "El mercat", en: "The market", cs: "Trh", fr: "Le marché" } }
    ],
    pois: [
      { cat: "cocina", emoji: "🧊", x: 240, y: 500, iw: 86, ih: 116,
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
      { cat: "cocina", emoji: "🔥", x: 700, y: 700, size: 2, iw: 104, ih: 96,
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
      { cat: "cocina", emoji: "🍲", x: 1160, y: 480, iw: 92, ih: 86,
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
      { cat: "cocina", emoji: "🧂", x: 1850, y: 300, iw: 104, ih: 74,
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
      { cat: "cocina", emoji: "🥣", x: 1620, y: 620, iw: 80, ih: 92,
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
      { cat: "cocina", emoji: "🌿", x: 930, y: 250, size: 2, iw: 118, ih: 92,
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
      { cat: "cocina", emoji: "🧑‍🍳", x: 470, y: 860, iw: 72, ih: 92,
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
      { cat: "cocina", emoji: "🫧", x: 1390, y: 870, iw: 100, ih: 78,
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
      { cat: "rincon", emoji: "📖", x: 2140, y: 420, size: 2, iw: 110, ih: 84,
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
      { cat: "rincon", emoji: "⚖️", x: 2620, y: 590, iw: 84, ih: 86,
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
      { cat: "rincon", emoji: "🍪", x: 2380, y: 790, iw: 74, ih: 86,
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
      { cat: "rincon", emoji: "🍽️", x: 2860, y: 880, size: 2, iw: 132, ih: 92,
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
      { cat: "mercado", emoji: "🍎", x: 3160, y: 440, size: 2, iw: 150, ih: 118,
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
      { cat: "mercado", emoji: "🥐", x: 3720, y: 640, size: 2, iw: 140, ih: 116,
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
      { cat: "mercado", emoji: "🧀", x: 3440, y: 880, iw: 108, ih: 78,
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
      { cat: "mercado", emoji: "🧺", x: 4020, y: 420, iw: 92, ih: 80,
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
    /* el decorado de teatro: la gran cocina, el rincón de la abuela y el mercado al aire libre */
    deco: function () {
      let s = "";
      /* una cajita de fruta, que se repite mucho por el mercado */
      const caja = (x, y, w, h, c) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="${c}"/>
        <rect x="${x + 5}" y="${y + 5}" width="${w - 10}" height="${h - 10}" rx="4" fill="rgba(255,255,255,.22)"/>
        <path d="M${x + 5} ${y + h / 2} h${w - 10}" stroke="rgba(90,60,30,.22)" stroke-width="3"/>`;

      /* ---------- gradientes y patrones, con prefijo cocX para no chocar con otros mapas ---------- */
      s += `<defs>
        <linearGradient id="cocXPared" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff5e6"/><stop offset="100%" stop-color="#efd8ba"/></linearGradient>
        <linearGradient id="cocXMadera" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#cd9059"/><stop offset="100%" stop-color="#9d6635"/></linearGradient>
        <linearGradient id="cocXPuerta" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e8bb8b"/><stop offset="100%" stop-color="#cd9059"/></linearGradient>
        <linearGradient id="cocXPiedra" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fbf4ea"/><stop offset="60%" stop-color="#e7dac8"/><stop offset="100%" stop-color="#c3b09a"/></linearGradient>
        <linearGradient id="cocXJardin" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#cbe9fb"/><stop offset="58%" stop-color="#eaf6e0"/><stop offset="100%" stop-color="#8ec26a"/></linearGradient>
        <linearGradient id="cocXCielo" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#b6e1f5"/><stop offset="60%" stop-color="#e9f4f6"/><stop offset="100%" stop-color="#fdeacb"/></linearGradient>
        <linearGradient id="cocXPapel" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fdeddb"/><stop offset="100%" stop-color="#f1d5b6"/></linearGradient>
        <linearGradient id="cocXAdoquin" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#dcc4a3"/><stop offset="100%" stop-color="#b18f6c"/></linearGradient>
        <linearGradient id="cocXTarima" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#c48f57"/><stop offset="100%" stop-color="#a3743f"/></linearGradient>
        <radialGradient id="cocXLuz" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="rgba(255,214,130,.5)"/><stop offset="100%" stop-color="rgba(255,214,130,0)"/></radialGradient>
        <linearGradient id="cocXCalle" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="rgba(255,236,179,0)"/><stop offset="60%" stop-color="rgba(255,236,179,.55)"/><stop offset="100%" stop-color="rgba(255,236,179,.1)"/></linearGradient>
        <linearGradient id="cocXHierba" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="rgba(169,207,140,.9)"/><stop offset="45%" stop-color="rgba(186,196,150,.45)"/><stop offset="100%" stop-color="rgba(205,179,145,0)"/></linearGradient>
        <linearGradient id="cocXPlaza" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="rgba(138,104,68,.26)"/><stop offset="34%" stop-color="rgba(138,104,68,0)"/><stop offset="100%" stop-color="rgba(255,236,179,.22)"/></linearGradient>
        <pattern id="cocXAzulejo" width="144" height="144" patternUnits="userSpaceOnUse">
          <rect x="3" y="3" width="66" height="66" rx="9" fill="rgba(255,255,255,.34)"/>
          <rect x="75" y="3" width="66" height="66" rx="9" fill="rgba(255,255,255,.18)"/>
          <rect x="3" y="75" width="66" height="66" rx="9" fill="rgba(255,255,255,.18)"/>
          <rect x="75" y="75" width="66" height="66" rx="9" fill="rgba(255,255,255,.34)"/>
          <path d="M108 26 q9 12 0 22 q-9 -10 0 -22 Z" fill="rgba(120,190,205,.3)"/>
          <path d="M36 98 q9 12 0 22 q-9 -10 0 -22 Z" fill="rgba(120,190,205,.3)"/>
          <circle cx="36" cy="36" r="5" fill="rgba(238,150,140,.26)"/>
          <circle cx="108" cy="108" r="5" fill="rgba(238,150,140,.26)"/>
        </pattern>
        <pattern id="cocXFlorcita" width="112" height="112" patternUnits="userSpaceOnUse">
          <g fill="rgba(212,124,110,.26)">${[0, 72, 144, 216, 288].map(a => `<ellipse cx="30" cy="30" rx="5" ry="11" transform="rotate(${a} 30 30)"/>`).join("")}</g>
          <circle cx="30" cy="30" r="4" fill="rgba(240,186,90,.45)"/>
          <g fill="rgba(146,176,120,.28)">${[0, 72, 144, 216, 288].map(a => `<ellipse cx="86" cy="84" rx="4" ry="9" transform="rotate(${a} 86 84)"/>`).join("")}</g>
          <circle cx="86" cy="84" r="3.4" fill="rgba(240,186,90,.4)"/>
        </pattern>
      </defs>`;

      /* ================== 1. LA GRAN COCINA (x 0 a 2020) ================== */
      /* la pared alicatada y la moldura de arriba */
      s += `<rect x="0" y="0" width="2020" height="968" fill="url(#cocXPared)"/>
        <rect x="0" y="88" width="2020" height="712" fill="url(#cocXAzulejo)"/>
        <rect x="0" y="0" width="2020" height="90" fill="#e9c9a2"/>
        <rect x="0" y="78" width="2020" height="14" rx="5" fill="#c9985f"/>`;

      /* la estantería estrecha del borde izquierdo: llena la franja que quedaba desnuda */
      s += `<rect x="8" y="112" width="112" height="854" rx="8" fill="url(#cocXMadera)"/>
        <rect x="18" y="124" width="92" height="830" rx="5" fill="#8c5b30"/>
        <rect x="2" y="96" width="118" height="22" rx="8" fill="#8a5527"/>`;
      [280, 448, 616, 784].forEach(by => {
        s += `<rect x="10" y="${by}" width="108" height="15" rx="6" fill="#c08a55"/>`;
      });
      /* los cacharritos de cada balda, cada uno apoyado en su tabla */
      s += `<rect x="24" y="234" width="30" height="46" rx="6" fill="#ffcc80" opacity=".95"/><rect x="21" y="226" width="36" height="11" rx="5" fill="#a1887f"/>
        <rect x="66" y="248" width="28" height="32" rx="6" fill="#c5e1a5" opacity=".95"/><rect x="63" y="240" width="34" height="10" rx="5" fill="#a1887f"/>
        <path d="M24 448 q4 -34 26 -34 q22 0 26 34 Z" fill="#f8bbd0"/><rect x="42" y="406" width="16" height="9" rx="4" fill="#a1887f"/>
        <ellipse cx="88" cy="440" rx="20" ry="9" fill="#fdf3e6"/><ellipse cx="88" cy="432" rx="20" ry="9" fill="#ffe0b2"/>
        <rect x="22" y="572" width="32" height="44" rx="6" fill="#b3e5fc" opacity=".95"/><rect x="19" y="564" width="38" height="11" rx="5" fill="#a1887f"/>
        <path d="M68 616 q0 -30 12 -30 q12 0 12 30 Z" fill="#ffab91"/>
        <rect x="20" y="742" width="80" height="42" rx="7" fill="#e8bb8b"/>
        <path d="M28 742 h64" stroke="#a1887f" stroke-width="5"/>
        <ellipse cx="62" cy="770" rx="16" ry="7" fill="rgba(120,80,40,.18)"/>`;

      /* la columna alta de la izquierda: puertas arriba, el hueco de la nevera y los cajones */
      s += `<rect x="130" y="100" width="250" height="866" rx="10" fill="url(#cocXMadera)"/>
        <rect x="120" y="86" width="270" height="26" rx="9" fill="#8a5527"/>
        <rect x="146" y="132" width="104" height="266" rx="7" fill="url(#cocXPuerta)"/>
        <rect x="258" y="132" width="104" height="266" rx="7" fill="url(#cocXPuerta)"/>
        <rect x="146" y="420" width="216" height="176" rx="8" fill="#b58755"/>
        <rect x="152" y="556" width="204" height="16" rx="6" fill="#c08a55"/>
        <ellipse cx="254" cy="556" rx="62" ry="9" fill="rgba(90,55,20,.22)"/>
        <rect x="142" y="588" width="224" height="16" rx="6" fill="#8a5527"/>
        <rect x="146" y="620" width="104" height="164" rx="7" fill="url(#cocXPuerta)"/>
        <rect x="258" y="620" width="104" height="164" rx="7" fill="url(#cocXPuerta)"/>
        <rect x="146" y="806" width="216" height="150" rx="8" fill="url(#cocXPuerta)"/>
        <rect x="160" y="812" width="188" height="8" rx="4" fill="#8d6e63"/>
        <circle cx="172" cy="822" r="5" fill="#6d4c41"/><circle cx="336" cy="822" r="5" fill="#6d4c41"/>
        ${[360, 748].map(hy => `<rect x="184" y="${hy}" width="30" height="8" rx="4" fill="#7a4a24"/><rect x="286" y="${hy}" width="30" height="8" rx="4" fill="#7a4a24"/>`).join("")}`;

      /* el armario del delantal: su puerta y el colgador donde cuelga */
      s += `<rect x="392" y="792" width="156" height="174" rx="9" fill="url(#cocXMadera)"/>
        <rect x="400" y="800" width="140" height="158" rx="7" fill="url(#cocXPuerta)"/>
        <rect x="418" y="806" width="104" height="9" rx="4" fill="#8a5527"/>
        <circle cx="438" cy="812" r="6" fill="#7a4a24"/><circle cx="502" cy="812" r="6" fill="#7a4a24"/>
        <rect x="426" y="924" width="88" height="9" rx="4" fill="#8a5527" opacity=".7"/>`;

      /* el reloj de la cocina y la baldita de las plantas: la pared entre los dos armarios ya no está pelada */
      s += `<circle cx="496" cy="248" r="58" fill="#e8bb8b"/>
        <circle cx="496" cy="248" r="48" fill="#fdf3e6"/>
        ${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(i => `<rect x="494" y="206" width="4" height="${i % 3 === 0 ? 10 : 6}" rx="2" fill="#a1887f" transform="rotate(${i * 30} 496 248)"/>`).join("")}
        <path d="M496 248 L496 216" stroke="#5d4037" stroke-width="5" stroke-linecap="round"/>
        <path d="M496 248 L522 262" stroke="#5d4037" stroke-width="5" stroke-linecap="round"/>
        <circle cx="496" cy="248" r="5" fill="#c62828"/>`;
      s += `<rect x="404" y="560" width="184" height="16" rx="6" fill="#c08a55"/>
        <path d="M420 576 l12 22 M572 576 l-12 22" stroke="#8a5527" stroke-width="7" stroke-linecap="round"/>
        <path d="M424 560 q2 -26 22 -26 q20 0 22 26 Z" fill="#d0704f"/>
        <path d="M436 534 q-10 -26 4 -40 M446 534 q6 -30 22 -34 M441 534 q0 -22 -14 -32" stroke="#4f9a4a" stroke-width="6" fill="none" stroke-linecap="round"/>
        <rect x="486" y="516" width="30" height="44" rx="6" fill="#ffe082" opacity=".95"/><rect x="483" y="508" width="36" height="11" rx="5" fill="#a1887f"/>
        <rect x="528" y="528" width="26" height="32" rx="6" fill="#ce93d8" opacity=".95"/><rect x="525" y="520" width="32" height="10" rx="5" fill="#a1887f"/>`;

      /* el armario del horno, de suelo a techo, con su hueco caliente */
      s += `<rect x="600" y="100" width="212" height="866" rx="10" fill="url(#cocXMadera)"/>
        <rect x="590" y="86" width="232" height="26" rx="9" fill="#8a5527"/>
        <rect x="616" y="132" width="180" height="230" rx="7" fill="url(#cocXPuerta)"/>
        <rect x="616" y="380" width="180" height="216" rx="7" fill="#b58755"/>
        <rect x="616" y="620" width="180" height="176" rx="8" fill="#3f2a1c"/>
        <rect x="628" y="632" width="156" height="152" rx="6" fill="rgba(255,183,77,.28)"/>
        <ellipse cx="706" cy="712" rx="128" ry="76" fill="url(#cocXLuz)"/>
        <rect x="624" y="744" width="164" height="16" rx="6" fill="#5d4033"/>
        <ellipse cx="706" cy="746" rx="58" ry="8" fill="rgba(40,20,10,.35)"/>
        <rect x="612" y="600" width="188" height="16" rx="6" fill="#8a5527"/>
        <rect x="616" y="812" width="180" height="144" rx="8" fill="url(#cocXPuerta)"/>
        <rect x="648" y="818" width="116" height="8" rx="4" fill="#7a4a24"/>`;

      /* la ventana de verdad, con el jardín al fondo, justo detrás del huerto */
      s += `<rect x="838" y="164" width="196" height="152" rx="9" fill="#8a5527"/>
        <rect x="852" y="178" width="168" height="124" rx="5" fill="url(#cocXJardin)"/>
        <circle cx="990" cy="204" r="18" fill="rgba(255,244,170,.95)"/>
        <ellipse cx="890" cy="288" rx="70" ry="22" fill="#7cb342" opacity=".7"/>
        <ellipse cx="994" cy="292" rx="54" ry="18" fill="#8bc34a" opacity=".55"/>
        <path d="M900 274 q6 -32 2 -48" stroke="#8d6e63" stroke-width="8" fill="none" stroke-linecap="round"/>
        <circle cx="900" cy="222" r="28" fill="#6aa84a"/><circle cx="926" cy="238" r="17" fill="#82ba5c"/><circle cx="876" cy="240" r="15" fill="#82ba5c"/>
        <circle cx="890" cy="212" r="5" fill="#ef5350"/><circle cx="918" cy="232" r="5" fill="#ef5350"/>
        <rect x="932" y="178" width="9" height="124" fill="#8a5527" opacity=".75"/>
        <rect x="852" y="238" width="168" height="8" fill="#8a5527" opacity=".4"/>
        <path d="M852 178 L1020 178 L1020 206 q-21 15 -42 0 q-21 15 -42 0 q-21 15 -42 0 q-21 15 -42 0 Z" fill="#ef9a9a" opacity=".85"/>
        <rect x="820" y="300" width="232" height="24" rx="8" fill="#efdcc0"/>
        <rect x="820" y="318" width="232" height="12" rx="5" fill="#c9a678"/>`;

      /* la campana extractora, bien alta: recoge el vapor de la olla que hay debajo */
      s += `<rect x="1148" y="92" width="44" height="156" rx="8" fill="#cfd8dc"/>
        <path d="M1074 348 L1122 244 L1218 244 L1268 348 Z" fill="#e6ebed"/>
        <path d="M1116 246 L1224 246" stroke="#b0bec5" stroke-width="6" stroke-linecap="round"/>
        <rect x="1066" y="338" width="212" height="18" rx="9" fill="#b0bec5"/>
        <rect x="1098" y="342" width="148" height="9" rx="4.5" fill="rgba(255,240,180,.9)"/>`;
      /* EL HOGAR DE OBRA, debajo de la campana: dos jambas que suben hasta el borde de la
         campana, el fondo alicatado, la poyata de piedra donde se apoya la olla del punto
         y el cuerpo que baja hasta la encimera. Antes la olla se sostenía en una balda
         suelta a media pared y los fogones quedaban huérfanos abajo, en la encimera: así
         la campana, la olla y el fuego se leen como una sola escena de cocinar */
      s += `<rect x="1088" y="356" width="170" height="442" fill="#dcc4a3"/>
        <rect x="1058" y="356" width="30" height="442" fill="#efdcc0"/>
        <rect x="1258" y="356" width="30" height="442" fill="#dfc7ab"/>
        <rect x="1058" y="356" width="230" height="12" fill="#c9a678"/>`;
      /* el alicatado del fondo, para que el hueco no quede como una mancha lisa */
      for (let f = 0; f < 10; f++) {
        for (let c = 0; c < 4; c++) {
          const tx0 = 1092 + c * 42, ty0 = 372 + f * 42;
          s += `<rect x="${tx0}" y="${ty0}" width="38" height="38" rx="5" fill="${(f + c) % 2 ? "#edd9ba" : "#e0c8a4"}"/>`;
          if ((f + c) % 4 === 1) s += `<path d="M${tx0 + 19} ${ty0 + 9} q9 10 0 20 q-9 -10 0 -20 Z" fill="rgba(120,190,205,.4)"/>`;
          if ((f + c) % 4 === 3) s += `<circle cx="${tx0 + 19}" cy="${ty0 + 19}" r="5" fill="rgba(238,150,140,.35)"/>`;
        }
      }
      /* la penumbra de dentro del hueco: las jambas dejan de leerse como dos rayas */
      s += `<rect x="1088" y="356" width="16" height="442" fill="rgba(120,86,48,.22)"/>
        <rect x="1242" y="356" width="16" height="442" fill="rgba(120,86,48,.16)"/>
        <rect x="1088" y="356" width="170" height="20" fill="rgba(120,86,48,.24)"/>`;
      /* la poyata de piedra con sus dos fuegos: la olla del punto se asienta encima */
      s += `<rect x="1042" y="504" width="262" height="28" rx="8" fill="url(#cocXPiedra)"/>
        <rect x="1042" y="528" width="262" height="28" rx="7" fill="#c9b7a0"/>
        <rect x="1042" y="528" width="262" height="7" rx="3" fill="#a89684"/>
        <ellipse cx="1072" cy="516" rx="21" ry="7" fill="rgba(60,50,40,.32)"/>
        <ellipse cx="1072" cy="515" rx="12" ry="4" fill="rgba(60,50,40,.4)"/>
        <ellipse cx="1274" cy="516" rx="21" ry="7" fill="rgba(60,50,40,.32)"/>
        <ellipse cx="1274" cy="515" rx="12" ry="4" fill="rgba(60,50,40,.4)"/>`;
      /* la barra de los paños, colgada del canto de la poyata */
      s += `<rect x="1070" y="558" width="206" height="10" rx="5" fill="#b0bec5"/>
        <circle cx="1074" cy="563" r="7" fill="#90a4ae"/><circle cx="1272" cy="563" r="7" fill="#90a4ae"/>`;
      /* dentro del hogar, una baldita con dos cazuelas de barro */
      s += `<rect x="1112" y="702" width="124" height="12" rx="5" fill="#b5794a"/>
        <ellipse cx="1146" cy="694" rx="24" ry="13" fill="#c1694a"/>
        <ellipse cx="1146" cy="686" rx="24" ry="10" fill="#d0704f"/>
        <ellipse cx="1146" cy="682" rx="9" ry="4" fill="#e6a08c"/>
        <ellipse cx="1204" cy="696" rx="18" ry="10" fill="#c1694a"/>
        <ellipse cx="1204" cy="690" rx="18" ry="8" fill="#d0704f"/>`;
      /* la balda de tarros de al lado */
      s += `<rect x="1296" y="470" width="212" height="16" rx="6" fill="#b5794a"/>
        <path d="M1314 486 l14 22 M1490 486 l-14 22" stroke="#8a5527" stroke-width="7" stroke-linecap="round"/>`;
      [[1306, 470, 32, 46, "#ffe082"], [1348, 470, 26, 38, "#ce93d8"], [1420, 470, 36, 52, "#ffab91"], [1464, 470, 28, 40, "#a5d6a7"]].forEach(j => {
        s += `<rect x="${j[0]}" y="${j[1] - j[3]}" width="${j[2]}" height="${j[3]}" rx="6" fill="${j[4]}" opacity=".92"/>
          <rect x="${j[0] - 3}" y="${j[1] - j[3] - 10}" width="${j[2] + 6}" height="12" rx="5" fill="#a1887f"/>`;
      });
      /* la balda de la batidora y el estante de las especias, cada uno bajo su punto */
      s += `<rect x="1556" y="668" width="148" height="18" rx="7" fill="#b5794a"/>
        <path d="M1574 686 l14 24 M1686 686 l-14 24" stroke="#8a5527" stroke-width="8" stroke-linecap="round"/>
        <rect x="1766" y="338" width="176" height="18" rx="7" fill="#b5794a"/>
        <path d="M1784 356 l14 24 M1924 356 l-14 24" stroke="#8a5527" stroke-width="8" stroke-linecap="round"/>
        <rect x="1766" y="196" width="176" height="16" rx="6" fill="#b5794a"/>
        <path d="M1784 212 l14 22 M1924 212 l-14 22" stroke="#8a5527" stroke-width="7" stroke-linecap="round"/>`;
      [[1776, 196, 34, 50, "#ffcc80"], [1820, 196, 30, 44, "#c5e1a5"], [1862, 196, 34, 48, "#f8bbd0"], [1904, 196, 26, 36, "#b3e5fc"]].forEach(j => {
        s += `<rect x="${j[0]}" y="${j[1] - j[3]}" width="${j[2]}" height="${j[3]}" rx="6" fill="${j[4]}" opacity=".92"/>
          <rect x="${j[0] - 3}" y="${j[1] - j[3] - 10}" width="${j[2] + 6}" height="12" rx="5" fill="#a1887f"/>`;
      });
      /* el armarito de las tazas, colgado junto a la campana */
      s += `<rect x="1290" y="138" width="220" height="18" rx="7" fill="#8a5527"/>
        <rect x="1298" y="152" width="204" height="244" rx="9" fill="url(#cocXMadera)"/>
        <rect x="1308" y="162" width="184" height="224" rx="6" fill="#f3e3ca"/>
        <rect x="1314" y="168" width="84" height="212" rx="5" fill="rgba(179,229,252,.3)"/>
        <rect x="1402" y="168" width="84" height="212" rx="5" fill="rgba(179,229,252,.22)"/>
        <rect x="1312" y="268" width="180" height="9" rx="4" fill="#c08a55"/>
        ${[[1340, 258, "#fdf3e6"], [1372, 258, "#f8c8b0"], [1428, 258, "#bcd9ee"], [1462, 258, "#fdf3e6"]].map(c => `<circle cx="${c[0]}" cy="${c[1]}" r="16" fill="${c[2]}"/><circle cx="${c[0]}" cy="${c[1]}" r="9" fill="rgba(255,255,255,.7)"/>`).join("")}
        <rect x="1312" y="352" width="180" height="9" rx="4" fill="#c08a55"/>
        ${[[1342, 356], [1378, 356], [1430, 356], [1466, 356]].map(c => `<path d="M${c[0] - 13} ${c[1] - 24} h26 q-2 24 -13 24 q-11 0 -13 -24 Z" fill="#fff8e1"/><path d="M${c[0] + 12} ${c[1] - 19} q11 4 -1 14" stroke="#dcc9ab" stroke-width="4" fill="none"/>`).join("")}
        <rect x="1394" y="168" width="12" height="212" fill="url(#cocXMadera)"/>
        <circle cx="1388" cy="290" r="5" fill="#7a4a24"/><circle cx="1412" cy="290" r="5" fill="#7a4a24"/>
        <path d="M1318 174 L1352 174" stroke="rgba(255,255,255,.6)" stroke-width="5" stroke-linecap="round"/>`;

      /* el escurreplatos sobre el fregadero: los platos de canto en su balda */
      s += `<rect x="1310" y="602" width="200" height="16" rx="6" fill="#c08a55"/>
        <path d="M1326 618 l12 22 M1494 618 l-12 22" stroke="#8a5527" stroke-width="7" stroke-linecap="round"/>
        <rect x="1318" y="560" width="184" height="8" rx="4" fill="#b0bec5"/>
        ${[1352, 1400, 1448].map((px, i) => `<ellipse cx="${px}" cy="${580 - i % 2 * 4}" rx="9" ry="30" fill="#fdf3e6"/><ellipse cx="${px}" cy="${580 - i % 2 * 4}" rx="4" ry="24" fill="#e0d6c6"/>`).join("")}
        <path d="M1472 602 q-2 -26 12 -26 q14 0 12 26 Z" fill="#a5d6a7"/>`;

      /* la barra de las sartenes y la ristra de ajos: la pared alta ya tiene vida */
      s += `<rect x="1560" y="278" width="204" height="12" rx="6" fill="#a1887f"/>
        <circle cx="1566" cy="284" r="7" fill="#8a5527"/><circle cx="1758" cy="284" r="7" fill="#8a5527"/>
        <path d="M1604 292 v22" stroke="#546e7a" stroke-width="6" stroke-linecap="round"/>
        <circle cx="1604" cy="348" r="34" fill="#607d8b"/><circle cx="1604" cy="348" r="26" fill="#78909c"/>
        <path d="M1682 292 v20" stroke="#546e7a" stroke-width="6" stroke-linecap="round"/>
        <circle cx="1682" cy="340" r="28" fill="#78909c"/><circle cx="1682" cy="340" r="21" fill="#90a4ae"/>
        <path d="M1736 292 v20" stroke="#8a5527" stroke-width="6" stroke-linecap="round"/>
        ${[0, 1, 2, 3, 4, 5].map(i => `<path d="M${1722 + (i % 2) * 26} ${312 + i * 22} q-9 30 4 44 q13 -14 5 -44 Z" fill="#d33f34"/><path d="M${1722 + (i % 2) * 26} ${312 + i * 22} q-4 -8 4 -10" stroke="#4f9a4a" stroke-width="4" fill="none" stroke-linecap="round"/>`).join("")}`;

      /* el manojo de hierbas secas del rincón derecho, colgado de su gancho */
      s += `<path d="M1978 168 q-10 8 0 16" stroke="#8a5527" stroke-width="6" fill="none" stroke-linecap="round"/>
        <rect x="1968" y="182" width="22" height="14" rx="6" fill="#a1887f"/>
        ${[-22, -8, 6, 20].map((dx, i) => `<path d="M1979 196 q${dx} ${60 + i * 12} ${dx * 1.4} ${118 + i * 10}" stroke="#7aa860" stroke-width="7" fill="none" stroke-linecap="round"/>`).join("")}
        ${[[1948, 320], [1966, 336], [1990, 330], [2000, 312]].map(p => `<ellipse cx="${p[0]}" cy="${p[1]}" rx="9" ry="14" fill="#9ccb8e" opacity=".9"/>`).join("")}`;

      /* el claro de pared entre la balda de la batidora y la jamba de la puerta:
         la tabla de cortar colgada de su clavo y la ristra de ajos */
      s += `<circle cx="1762" cy="448" r="7" fill="#8a5527"/>
        <path d="M1762 454 q-9 12 0 22" stroke="#a1887f" stroke-width="5" fill="none"/>
        <rect x="1716" y="474" width="92" height="128" rx="18" fill="#c9925c"/>
        <rect x="1724" y="482" width="76" height="112" rx="13" fill="#e0b177"/>
        <circle cx="1762" cy="494" r="8" fill="#b07f42"/>
        <path d="M1732 524 h60 M1732 552 h60 M1732 580 h42" stroke="#c9a069" stroke-width="4" stroke-linecap="round" opacity=".75"/>`;
      s += `<path d="M1926 434 q-10 8 0 16" stroke="#8a5527" stroke-width="6" fill="none" stroke-linecap="round"/>
        <rect x="1914" y="448" width="24" height="14" rx="6" fill="#a1887f"/>
        <path d="M1926 462 q-20 36 0 64 q20 34 8 62" stroke="#c2ab8a" stroke-width="8" fill="none"/>
        ${[0, 1, 2, 3].map(i => {
        const ax = 1926 + (i % 2 ? 16 : -16), ay = 490 + i * 32;
        return `<ellipse cx="${ax}" cy="${ay}" rx="19" ry="23" fill="#f0dfc6" stroke="#c9ac86" stroke-width="3"/>
          <path d="M${ax - 10} ${ay + 8} q10 -24 0 -30 M${ax + 10} ${ay + 8} q-10 -24 0 -30" stroke="#d6bd99" stroke-width="3" fill="none"/>
          <path d="M${ax - 12} ${ay - 12} q6 -6 12 -6 q6 0 12 6" stroke="#cbb08b" stroke-width="3" fill="none"/>
          <path d="M${ax} ${ay - 22} q-5 -12 5 -17" stroke="#a8916f" stroke-width="4" fill="none" stroke-linecap="round"/>`;
      }).join("")}`;
      /* y en la encimera de debajo, la panera y el bote de las cucharas de palo */
      s += `<path d="M1712 792 v-52 q0 -34 34 -34 h32 q34 0 34 34 v52 Z" fill="#e8bb8b"/>
        <path d="M1714 748 h96" stroke="#c9985f" stroke-width="5"/>
        <rect x="1748" y="722" width="28" height="10" rx="5" fill="#a1887f"/>
        <path d="M1728 792 v-38 M1796 792 v-38" stroke="rgba(160,110,60,.3)" stroke-width="4"/>`;
      s += `<path d="M1830 700 h68 l-7 92 h-54 Z" fill="#cfe3ea"/>
        <rect x="1824" y="690" width="80" height="16" rx="7" fill="#aecdd9"/>
        <path d="M1846 692 q-8 -44 0 -62" stroke="#c9925c" stroke-width="7" fill="none" stroke-linecap="round"/>
        <ellipse cx="1845" cy="620" rx="11" ry="15" fill="#d8a15c" transform="rotate(-10 1845 620)"/>
        <path d="M1884 692 q8 -38 16 -54" stroke="#c9925c" stroke-width="7" fill="none" stroke-linecap="round"/>
        <ellipse cx="1902" cy="630" rx="10" ry="14" fill="#e0b177" transform="rotate(16 1902 630)"/>
        <path d="M1866 692 q-2 -34 4 -50" stroke="#b0bec5" stroke-width="6" fill="none" stroke-linecap="round"/>
        <path d="M1870 644 q6 -14 16 -16" stroke="#b0bec5" stroke-width="6" fill="none" stroke-linecap="round"/>`;

      /* dos paños colgados de la barra del hogar */
      s += `<path d="M1084 562 q-8 46 2 92 q24 8 48 0 q10 -46 2 -92 Z" fill="#ef9a9a" opacity=".9"/>
        <path d="M1088 598 h44 M1086 628 h48" stroke="rgba(255,255,255,.55)" stroke-width="5"/>
        <path d="M1216 562 q-6 46 2 92 q22 8 44 0 q8 -46 2 -92 Z" fill="#90caf9" opacity=".85"/>
        <path d="M1220 598 h40 M1218 628 h44" stroke="rgba(255,255,255,.55)" stroke-width="5"/>`;

      /* la gran encimera de piedra y los muebles bajos, de la ventana al final de la cocina */
      s += `<rect x="828" y="792" width="1192" height="30" rx="7" fill="url(#cocXPiedra)"/>
        <rect x="828" y="814" width="1192" height="10" rx="4" fill="#b9a78e"/>
        <rect x="834" y="824" width="1186" height="142" fill="#a86f3c"/>
        ${[[842, 150], [1000, 150], [1150, 128], [1560, 150], [1720, 150], [1876, 140]].map(d => `<rect x="${d[0]}" y="834" width="${d[1]}" height="124" rx="8" fill="url(#cocXPuerta)"/><rect x="${d[0] + d[1] / 2 - 14}" y="874" width="28" height="9" rx="4.5" fill="#7a4a24"/>`).join("")}`;

      /* la tabla de cortar con verduras, en la encimera libre bajo la ventana */
      s += `<path d="M872 790 L1000 790 L994 768 L878 768 Z" fill="#d8a15c"/>
        <path d="M878 772 L992 772" stroke="#c08a55" stroke-width="4"/>
        <circle cx="900" cy="760" r="14" fill="#ef5350"/><path d="M900 748 q-2 -8 6 -10" stroke="#4f9a4a" stroke-width="4" fill="none" stroke-linecap="round"/>
        <path d="M928 766 q14 -22 30 -6 q-12 12 -30 6 Z" fill="#7cb342"/>
        <ellipse cx="972" cy="762" rx="15" ry="9" fill="#ffb74d"/><path d="M972 753 q0 -8 6 -9" stroke="#4f9a4a" stroke-width="4" fill="none" stroke-linecap="round"/>`;

      /* el mueble del fregadero, con la pila de porcelana y el grifo, bajo su punto */
      s += `<rect x="1290" y="824" width="234" height="142" fill="#8f5c30"/>
        <rect x="1296" y="830" width="222" height="130" rx="8" fill="#a06a3a"/>
        <path d="M1306 820 h202 v90 q0 32 -32 32 h-138 q-32 0 -32 -32 Z" fill="#f5f2ec"/>
        <path d="M1306 820 h202 v18 h-202 Z" fill="#ded7ca"/>
        <path d="M1330 862 v56 M1382 862 v62 M1436 862 v58 M1484 862 v50" stroke="rgba(160,150,135,.35)" stroke-width="4" stroke-linecap="round"/>
        <rect x="1300" y="792" width="214" height="30" rx="8" fill="#cec5b4"/>
        <path d="M1392 790 L1392 748 q0 -18 20 -18 q22 0 22 22 v18" stroke="#b0bec5" stroke-width="9" fill="none" stroke-linecap="round"/>
        <circle cx="1392" cy="788" r="9" fill="#90a4ae"/>`;

      /* el suelo de baldosas a cuadros, con un poquito de perspectiva */
      s += `<rect x="0" y="966" width="2020" height="134" fill="#eadecb"/>
        <rect x="0" y="958" width="2020" height="16" rx="5" fill="#c69a6a"/>`;
      [[974, 32, 62, 0], [1006, 42, 82, 1], [1048, 56, 106, 0]].forEach((f, r) => {
        for (let i = 0; i < 40; i++) {
          const x = -f[3] * f[2] / 2 + i * f[2];
          if (x > 2020) break;
          if ((i + r) % 2 === 0) s += `<rect x="${Math.max(0, x).toFixed(0)}" y="${f[0]}" width="${Math.min(f[2], 2020 - Math.max(0, x)).toFixed(0)}" height="${f[1]}" fill="rgba(122,76,42,.2)"/>`;
        }
      });

      /* ================== TRANSICIÓN: EL PASO DE LA PUERTA ================== */
      /* la jamba de madera que separa las dos habitaciones */
      s += `<rect x="2004" y="0" width="78" height="62" fill="#a06a3a"/>
        <rect x="2004" y="0" width="78" height="12" rx="5" fill="#8a5527"/>
        <rect x="2020" y="60" width="42" height="908" fill="#a06a3a"/>
        <rect x="2012" y="60" width="10" height="908" fill="#8a5527"/>
        <rect x="2012" y="52" width="58" height="18" rx="7" fill="#8a5527"/>
        <rect x="2054" y="60" width="10" height="908" fill="#c08a55" opacity=".7"/>`;
      /* el umbral: aquí la baldosa se acaba y empieza la tarima */
      s += `<rect x="2008" y="958" width="72" height="20" rx="6" fill="#b5794a"/>
        <rect x="2008" y="966" width="72" height="134" fill="#9d6635"/>
        <path d="M2016 976 H2072 M2016 1020 H2072 M2016 1064 H2072" stroke="rgba(80,45,15,.28)" stroke-width="4"/>`;

      /* ================== 2. EL RINCÓN DE LA ABUELA (x 2062 a 2960) ================== */
      /* el papel de pared con florecitas y el zócalo */
      s += `<rect x="2062" y="0" width="898" height="968" fill="url(#cocXPapel)"/>
        <rect x="2062" y="60" width="898" height="908" fill="url(#cocXFlorcita)"/>
        <rect x="2062" y="0" width="898" height="62" fill="#e6c8a6"/>
        <rect x="2062" y="52" width="898" height="12" rx="5" fill="#c99a68"/>
        <rect x="2062" y="852" width="898" height="116" fill="#eccfab" opacity=".75"/>
        <rect x="2062" y="846" width="898" height="14" rx="5" fill="#c99a68"/>`;

      /* la alacena de madera: la balda del libro de recetas y la repisa del tarro */
      s += `<rect x="2064" y="286" width="248" height="28" rx="9" fill="#8a5527"/>
        <rect x="2076" y="310" width="224" height="656" rx="8" fill="url(#cocXMadera)"/>
        <rect x="2092" y="322" width="192" height="524" rx="6" fill="#8c5b30"/>
        <rect x="2080" y="464" width="200" height="18" rx="7" fill="#c08a55"/>
        <rect x="2088" y="606" width="192" height="16" rx="6" fill="#c08a55"/>
        <rect x="2080" y="838" width="216" height="20" rx="7" fill="#dcb182"/>
        <rect x="2092" y="866" width="92" height="92" rx="7" fill="url(#cocXPuerta)"/>
        <rect x="2192" y="866" width="92" height="92" rx="7" fill="url(#cocXPuerta)"/>
        <circle cx="2172" cy="912" r="6" fill="#7a4a24"/><circle cx="2206" cy="912" r="6" fill="#7a4a24"/>
        ${[[2118, 25, "#f8c8b0"], [2170, 24, "#bcd9ee"], [2220, 24, "#f8c8b0"], [2262, 19, "#d6c8ea"]].map(p => `<circle cx="${p[0]}" cy="${606 - p[1]}" r="${p[1]}" fill="#fdf3e6"/><circle cx="${p[0]}" cy="${606 - p[1]}" r="${p[1] - 6}" fill="${p[2]}"/><circle cx="${p[0]}" cy="${606 - p[1]}" r="${p[1] - 11}" fill="#fdf3e6" opacity=".75"/>`).join("")}
        ${[[2126, "#fff8e1"], [2170, "#ffe0b2"], [2214, "#f6c9b4"]].map(c => `<path d="M${c[0] - 16} 660 h32 q-2 30 -16 30 q-14 0 -16 -30 Z" fill="${c[1]}"/><path d="M${c[0] + 15} 666 q13 5 -1 17" stroke="#dcc9ab" stroke-width="5" fill="none"/><rect x="${c[0] - 2}" y="622" width="4" height="38" fill="#8a5527"/>`).join("")}`;

      /* el aparador donde descansa el tarro de las galletas */
      s += `<rect x="2312" y="836" width="140" height="20" rx="7" fill="#b5794a"/>
        <rect x="2320" y="856" width="124" height="102" rx="8" fill="url(#cocXMadera)"/>
        <rect x="2330" y="866" width="104" height="84" rx="6" fill="url(#cocXPuerta)"/>
        <circle cx="2382" cy="908" r="6" fill="#7a4a24"/>
        <rect x="2334" y="822" width="96" height="14" rx="6" fill="#dcb182"/>`;

      /* los retratitos y la baldita de la planta, sobre el aparador */
      s += `<rect x="2326" y="352" width="72" height="86" rx="6" fill="#a06a3a"/>
        <rect x="2334" y="360" width="56" height="70" rx="4" fill="#fdf3e2"/>
        <circle cx="2362" cy="386" r="14" fill="#f6d5b8"/><path d="M2346 430 q16 -26 32 0 Z" fill="#bcd9ee"/>
        <rect x="2404" y="404" width="58" height="70" rx="6" fill="#8a5527"/>
        <rect x="2411" y="411" width="44" height="56" rx="4" fill="#fdf3e2"/>
        <circle cx="2433" cy="430" r="11" fill="#f6d5b8"/><path d="M2419 467 q14 -22 28 0 Z" fill="#e6a08c"/>
        <rect x="2318" y="628" width="150" height="15" rx="6" fill="#c08a55"/>
        <path d="M2332 643 l10 20 M2454 643 l-10 20" stroke="#8a5527" stroke-width="6" stroke-linecap="round"/>
        <path d="M2340 628 q2 -24 20 -24 q18 0 20 24 Z" fill="#7fb3c8"/>
        <path d="M2350 604 q-8 -24 4 -36 M2360 604 q6 -28 20 -32 M2355 604 q0 -20 -12 -30" stroke="#4f9a4a" stroke-width="6" fill="none" stroke-linecap="round"/>
        <ellipse cx="2420" cy="614" rx="22" ry="14" fill="#fdf3e6"/><ellipse cx="2420" cy="608" rx="22" ry="12" fill="#f8c8b0"/>`;

      /* el cuadro pequeño de la pared */
      s += `<rect x="2456" y="316" width="102" height="112" rx="7" fill="#a06a3a"/>
        <rect x="2466" y="326" width="82" height="92" rx="4" fill="#fdf3e2"/>
        <path d="M2466 388 q22 -22 42 -6 q18 14 40 -8 L2548 418 L2466 418 Z" fill="#a5d6a7"/>
        <circle cx="2492" cy="352" r="12" fill="#ffe082"/>
        <circle cx="2524" cy="368" r="9" fill="#ef9a9a"/>`;

      /* la lámpara colgante, con su parpadeo muy suave */
      s += `<g>
        <ellipse cx="2620" cy="340" rx="176" ry="156" fill="url(#cocXLuz)"><animate attributeName="opacity" values=".8;1;.85;1;.8" dur="7s" repeatCount="indefinite"/></ellipse>
        <rect x="2616" y="60" width="8" height="180" fill="#8d6e63"/>
        <path d="M2560 308 L2586 238 L2654 238 L2680 308 Z" fill="#e08a72"/>
        <path d="M2560 308 L2680 308 L2680 318 L2560 318 Z" fill="#c1705c"/>
        <circle cx="2620" cy="330" r="15" fill="#fff3c4"><animate attributeName="opacity" values=".85;1;.9;1;.85" dur="7s" repeatCount="indefinite"/></circle>
      </g>`;

      /* la mesita donde se apoya la balanza, con su balda de tarros */
      s += `<rect x="2544" y="636" width="164" height="18" rx="7" fill="#b5794a"/>
        <rect x="2558" y="654" width="14" height="312" fill="#a06a3a"/>
        <rect x="2680" y="654" width="14" height="312" fill="#a06a3a"/>
        <ellipse cx="2626" cy="966" rx="92" ry="10" fill="rgba(80,45,15,.16)"/>
        <rect x="2550" y="796" width="152" height="12" rx="5" fill="#b5794a"/>
        ${[[2578, 30, 44, "#ffcc80"], [2618, 26, 36, "#c5e1a5"], [2652, 22, 30, "#f8bbd0"]].map(j => `<rect x="${j[0]}" y="${796 - j[2]}" width="${j[1]}" height="${j[2]}" rx="5" fill="${j[3]}" opacity=".9"/>`).join("")}`;

      /* la ventanita con cortinas y la mecedora del rincón */
      s += `<rect x="2760" y="172" width="162" height="286" rx="8" fill="#a06a3a"/>
        <rect x="2772" y="184" width="138" height="262" rx="5" fill="url(#cocXJardin)"/>
        <circle cx="2804" cy="230" r="26" fill="#82ba5c"/><circle cx="2878" cy="252" r="20" fill="#6aa84a"/>
        <rect x="2836" y="184" width="8" height="262" fill="#a06a3a" opacity=".7"/>
        <rect x="2748" y="158" width="188" height="12" rx="6" fill="#8a5527"/>
        <path d="M2756 164 q34 90 22 190 q-24 22 -46 6 q10 -100 -8 -196 Z" fill="#e6a08c" opacity=".92"/>
        <path d="M2928 164 q-34 90 -22 190 q24 22 46 6 q-10 -100 8 -196 Z" fill="#e6a08c" opacity=".92"/>`;
      s += `<g transform="translate(2500 946) scale(.8)">
        <path d="M-70 0 q70 26 138 -8" stroke="#a06a3a" stroke-width="11" fill="none" stroke-linecap="round"/>
        <path d="M-52 -12 L-42 -104 M56 -22 L46 -104" stroke="#a06a3a" stroke-width="10" stroke-linecap="round"/>
        <rect x="-58" y="-120" width="116" height="18" rx="8" fill="#b5794a"/>
        <path d="M-48 -120 L-60 -282 M22 -120 L14 -282" stroke="#a06a3a" stroke-width="11" stroke-linecap="round"/>
        <path d="M-60 -282 q24 -18 74 0" stroke="#a06a3a" stroke-width="12" fill="none" stroke-linecap="round"/>
        ${[0, 1, 2].map(i => `<path d="M${-36 + i * 22} -128 L${-44 + i * 22} -274" stroke="#c08a55" stroke-width="6" stroke-linecap="round"/>`).join("")}
        <path d="M-52 -128 q56 -22 110 -6 q6 26 -6 32 q-54 8 -100 -6 Z" fill="#e6a08c" opacity=".9"/>
        <ellipse cx="-6" cy="-160" rx="42" ry="20" fill="#f6cfc0" opacity=".85" transform="rotate(-8 -6 -160)"/>
      </g>`;

      /* el suelo de tarima y la alfombrita del rincón */
      s += `<rect x="2062" y="966" width="898" height="134" fill="url(#cocXTarima)"/>
        ${[0, 1, 2, 3, 4, 5, 6, 7].map(i => `<line x1="${2100 + i * 112}" y1="968" x2="${2076 + i * 112}" y2="1100" stroke="rgba(80,45,15,.22)" stroke-width="5"/>`).join("")}
        <line x1="2062" y1="1024" x2="2960" y2="1024" stroke="rgba(80,45,15,.16)" stroke-width="5"/>
        <ellipse cx="2320" cy="1034" rx="164" ry="48" fill="#dfa08a" opacity=".8"/>
        <ellipse cx="2320" cy="1034" rx="122" ry="34" fill="#f2c8a8" opacity=".85"/>
        <ellipse cx="2320" cy="1034" rx="76" ry="19" fill="#dfa08a" opacity=".7"/>`;

      /* EL RINCÓN DE COMER: la tarima dobla la esquina y sube hasta el fondo, así la
         mesa del punto y sus dos sillas pisan madera de verdad. Antes el suelo se
         acababa en la misma raya que el resto del rincón y todo el grupo (alfombra
         incluida) quedaba pintado sobre el papel de la pared */
      s += `<path d="M2700 968 Q2748 950 2812 924 Q2880 916 2954 916 L2954 968 Z" fill="#b9834e"/>
        <path d="M2700 968 Q2748 950 2812 924 Q2880 916 2954 916" stroke="#8a5527" stroke-width="11" fill="none"/>
        <path d="M2700 962 Q2748 944 2812 918 Q2880 910 2954 910" stroke="#c99a68" stroke-width="7" fill="none"/>
        <path d="M2762 960 L2748 1006 M2848 926 L2830 1004 M2926 920 L2912 1002" stroke="rgba(80,45,15,.2)" stroke-width="5" stroke-linecap="round"/>`;

      /* la maceta alta del rincón, entre la mesita y la cortina */
      s += `<path d="M2700 890 L2762 890 L2754 964 L2708 964 Z" fill="#d0704f"/>
        <rect x="2694" y="878" width="74" height="18" rx="7" fill="#e08a72"/>
        <path d="M2731 884 q-34 -46 -22 -96 M2731 884 q30 -50 24 -104 M2731 884 q-6 -60 4 -104 M2731 884 q-24 -30 -40 -40 M2731 884 q26 -34 44 -40" stroke="#4f9a4a" stroke-width="9" fill="none" stroke-linecap="round"/>
        ${[[2705, 782], [2757, 776], [2735, 738], [2694, 838], [2772, 840]].map(h => `<ellipse cx="${h[0]}" cy="${h[1]}" rx="14" ry="20" fill="#7cb342" transform="rotate(${h[0] > 2731 ? 22 : -22} ${h[0]} ${h[1]})"/>`).join("")}`;

      /* la alfombra ovalada del rincón de comer, ya entera sobre la tarima de la esquina.
         La mesa la pone el propio punto, que apoya sus patas en la alfombra: ya no hay
         un mantel de otra mesa debajo (queda bien tanto a --poik 1 como a 1.5) */
      s += `<ellipse cx="2856" cy="962" rx="104" ry="38" fill="#dfa08a" opacity=".85"/>
        <ellipse cx="2856" cy="962" rx="85" ry="29" fill="#f2c8a8" opacity=".9"/>
        <ellipse cx="2856" cy="962" rx="54" ry="17" fill="#dfa08a" opacity=".5"/>
        <path d="M2770 952 q86 -19 172 0" stroke="rgba(255,255,255,.4)" stroke-width="5" fill="none"/>`;
      s += `<rect x="2762" y="812" width="46" height="92" rx="12" fill="#b5794a"/>
        <rect x="2771" y="824" width="28" height="68" rx="9" fill="#e6a08c" opacity=".85"/>
        <rect x="2752" y="898" width="66" height="15" rx="6" fill="#a06a3a"/>
        <rect x="2760" y="911" width="11" height="46" rx="4" fill="#a06a3a"/>
        <rect x="2799" y="911" width="11" height="46" rx="4" fill="#a06a3a"/>`;
      s += `<rect x="2884" y="818" width="44" height="88" rx="12" fill="#a06a3a"/>
        <rect x="2892" y="830" width="28" height="64" rx="9" fill="#e6a08c" opacity=".8"/>
        <rect x="2874" y="900" width="64" height="15" rx="6" fill="#8f5c30"/>
        <rect x="2882" y="913" width="11" height="44" rx="4" fill="#8f5c30"/>
        <rect x="2919" y="913" width="11" height="44" rx="4" fill="#8f5c30"/>`;

      /* ================== TRANSICIÓN: LA SALIDA AL EXTERIOR ================== */
      /* el pilar de la puerta, el cielo de fuera y la luz de la calle que entra */
      s += `<rect x="2960" y="0" width="1240" height="968" fill="url(#cocXCielo)"/>
        <rect x="2954" y="0" width="60" height="990" fill="#d9c3a4"/>
        <rect x="2954" y="0" width="14" height="990" fill="#bfa585"/>
        <rect x="2946" y="0" width="76" height="60" rx="8" fill="#c9b090"/>
        <rect x="3014" y="0" width="12" height="990" fill="#efdcc0" opacity=".7"/>`;
      /* la luz de la calle se derrama sobre la tarima del rincón */
      s += `<path d="M2952 620 L2952 966 L2660 1100 L2952 1100 Z" fill="url(#cocXCalle)" opacity=".55"/>
        <path d="M2952 966 L2720 1100 L2952 1100 Z" fill="rgba(255,236,179,.42)"/>
        <ellipse cx="2890" cy="1020" rx="140" ry="44" fill="rgba(255,236,179,.24)"/>`;
      /* el escalón de la puerta: la tarima se acaba y empiezan los adoquines */
      s += `<rect x="2944" y="952" width="86" height="22" rx="7" fill="#cbb18d"/>
        <rect x="2944" y="966" width="86" height="134" fill="#bfa585"/>
        <path d="M2952 1000 H3024 M2952 1044 H3024" stroke="rgba(120,90,55,.3)" stroke-width="5"/>`;

      /* ================== 3. EL MERCADO AL AIRE LIBRE (x 3030 a 4200) ================== */
      /* sol suave, nubes y colinas del fondo */
      s += `<circle cx="4020" cy="130" r="56" fill="rgba(255,241,160,.75)"/>
        <circle cx="4020" cy="130" r="92" fill="rgba(255,241,160,.22)"/>
        <ellipse cx="3260" cy="150" rx="96" ry="30" fill="rgba(255,255,255,.72)"/>
        <ellipse cx="3336" cy="132" rx="62" ry="24" fill="rgba(255,255,255,.62)"/>
        <ellipse cx="3700" cy="196" rx="82" ry="26" fill="rgba(255,255,255,.6)"/>
        <ellipse cx="3980" cy="238" rx="70" ry="22" fill="rgba(255,255,255,.55)"/>
        <path d="M3014 646 Q3260 548 3540 596 Q3820 644 4200 552 L4200 752 L3014 752 Z" fill="#c7e2b0" opacity=".55"/>
        <path d="M3014 700 Q3320 596 3620 664 Q3920 726 4200 636 L4200 752 L3014 752 Z" fill="#a9cf8c" opacity=".7"/>`;
      /* casitas del pueblo detrás del mercado */
      [[3300, 560, 130, "#e5cdb0"], [3468, 596, 100, "#dcc0a4"], [3616, 546, 150, "#eddac0"],
        [3812, 592, 110, "#e0c8ac"], [3956, 566, 124, "#e5cdb0"]].forEach(h => {
        s += `<rect x="${h[0]}" y="${h[1]}" width="${h[2]}" height="${700 - h[1]}" rx="6" fill="${h[3]}" opacity=".85"/>
          <path d="M${h[0] - 12} ${h[1]} L${h[0] + h[2] / 2} ${h[1] - 40} L${h[0] + h[2] + 12} ${h[1]} Z" fill="#c98d6a" opacity=".85"/>
          <rect x="${h[0] + 22}" y="${h[1] + 34}" width="26" height="34" rx="4" fill="rgba(255,255,255,.6)"/>
          <rect x="${h[0] + h[2] - 48}" y="${h[1] + 34}" width="26" height="34" rx="4" fill="rgba(255,255,255,.6)"/>`;
      });
      /* tres arbolitos */
      [[3070, 700, 1], [3782, 700, .9], [4170, 706, 1.15]].forEach(t => {
        s += `<g transform="translate(${t[0]} ${t[1]}) scale(${t[2]})" opacity=".8">
          <rect x="-8" y="-70" width="16" height="70" rx="5" fill="#8d6e63"/>
          <circle cx="0" cy="-96" r="46" fill="#6aa84a"/><circle cx="-32" cy="-76" r="30" fill="#82ba5c"/><circle cx="32" cy="-78" r="28" fill="#82ba5c"/>
        </g>`;
      });
      /* EL SUELO DE ADOQUINES. El borde de arriba entra y sale de la hierba en vez de
         cortar recto, y cada adoquín es un trapecio que mira al punto de fuga: así el
         empedrado se tumba y deja de leerse como un muro de ladrillo visto de frente */
      const vaiven = [12, -10, 6, -14, 10, -6, 14, -8, 4, -12, 10, -6, 12, -10];
      let borde = "M3014 704";
      for (let i = 1; i <= 14; i++) {
        const bx = 3014 + i * 84.7;
        borde += ` Q${(bx - 42).toFixed(0)} ${(706 - vaiven[i - 1] * 1.4).toFixed(0)} ${bx.toFixed(0)} ${(706 + vaiven[i - 1]).toFixed(0)}`;
      }
      borde += " L4200 1100 L3014 1100 Z";
      s += `<defs><clipPath id="cocXSueloPlaza"><path d="${borde}"/></clipPath></defs>
        <path d="${borde}" fill="url(#cocXAdoquin)"/>
        <g clip-path="url(#cocXSueloPlaza)">`;
      const fugaX = 3620, fugaY = 420;
      let filaY = 688, filaH = 18;
      for (let r = 0; r < 10 && filaY < 1100; r++) {
        const filaY2 = Math.min(1100, filaY + filaH);
        const k1 = (filaY - fugaY) / (706 - fugaY), k2 = (filaY2 - fugaY) / (706 - fugaY);
        const paso = 34, desf = (r % 2) * 0.5, j1 = 2.2 * k1, j2 = 2.2 * k2;
        /* la junta también se abre a lo alto: sin ella las hiladas se pegan y el suelo
           se leería como un entarimado de tablas largas */
        const y1 = filaY + 1.6 * k1, y2 = filaY2 - 1.6 * k2;
        for (let i = -30; i <= 30; i++) {
          const a1 = fugaX + (i + desf) * paso * k1 + j1, a2 = fugaX + (i + 1 + desf) * paso * k1 - j1;
          const b1 = fugaX + (i + desf) * paso * k2 + j2, b2 = fugaX + (i + 1 + desf) * paso * k2 - j2;
          if ((a2 < 3010 && b2 < 3010) || (a1 > 4204 && b1 > 4204)) continue;
          /* cada piedra con su tono: las de lejos más claras, y un salteado que rompe
             las hiladas para que no se lean como tablas */
          const prof = Math.min(1, (filaY - 690) / 400), jit = (Math.abs(i * 5 + r * 3) % 4) * 7 - 9;
          const cr = Math.round(226 - 40 * prof) + jit, cg = Math.round(205 - 53 * prof) + jit, cb = Math.round(176 - 58 * prof) + jit;
          s += `<path d="M${a1.toFixed(0)} ${y1.toFixed(0)} L${a2.toFixed(0)} ${y1.toFixed(0)} L${b2.toFixed(0)} ${y2.toFixed(0)} L${b1.toFixed(0)} ${y2.toFixed(0)} Z" fill="rgb(${cr},${cg},${cb})" stroke="rgba(120,94,66,.3)" stroke-width="${(1.1 * k1).toFixed(1)}"/>`;
        }
        filaY = filaY2; filaH *= 1.24;
      }
      s += `</g>`;
      /* la plaza gana fondo y primer plano: sombra lejana y luz cerca de los pies */
      s += `<path d="${borde}" fill="url(#cocXPlaza)"/>`;
      /* la hierba se va comiendo los primeros adoquines: así no hay raya dura entre prado y plaza */
      s += `<rect x="3014" y="684" width="1186" height="78" fill="url(#cocXHierba)"/>`;
      /* lengüetas de hierba derramadas sobre los primeros adoquines... */
      [[3086, 716], [3252, 706], [3430, 722], [3604, 710], [3782, 718], [3960, 704], [4118, 720]].forEach((l, i) => {
        const rx = 34 + (i % 3) * 13;
        s += `<ellipse cx="${l[0]}" cy="${l[1]}" rx="${rx}" ry="13" fill="#a9cf8c" opacity=".8"/>
          <ellipse cx="${l[0] + rx * 0.45}" cy="${l[1] - 7}" rx="${(rx * 0.5).toFixed(0)}" ry="10" fill="#b7d79a" opacity=".7"/>
          <path d="M${l[0] - 12} ${l[1] + 6} q-4 -16 -10 -22 M${l[0] + 6} ${l[1] + 8} q1 -18 6 -25" stroke="#8fbe6e" stroke-width="5" fill="none" stroke-linecap="round"/>`;
      });
      /* ...y algún adoquín suelto que asoma ya dentro del prado, cruzando al revés */
      [[3160, 672], [3346, 680], [3520, 666], [3700, 678], [3868, 670], [4056, 664]].forEach(a => {
        s += `<path d="M${a[0] - 26} ${a[1] + 6} q4 -12 26 -12 q22 0 26 12 q-6 9 -26 9 q-20 0 -26 -9 Z" fill="#cdb195"/>
          <path d="M${a[0] - 20} ${a[1] + 12} q20 7 40 0" stroke="rgba(120,94,66,.28)" stroke-width="4" fill="none" stroke-linecap="round"/>`;
      });
      [3040, 3128, 3226, 3318, 3402, 3496, 3588, 3676, 3768, 3854, 3944, 4032, 4118, 4184].forEach((gx, i) => {
        const gy = 700 + (i % 3) * 7;
        s += `<path d="M${gx} ${gy + 16} q-4 -18 -12 -24 M${gx} ${gy + 16} q0 -20 2 -28 M${gx} ${gy + 16} q6 -16 14 -22" stroke="#8fbe6e" stroke-width="5" fill="none" stroke-linecap="round" opacity=".85"/>`;
      });
      [[3182, 726], [3462, 736], [3742, 724], [4066, 738]].forEach(p => {
        s += `<ellipse cx="${p[0]}" cy="${p[1]}" rx="16" ry="7" fill="#c9ad8a" opacity=".7"/>`;
      });

      /* el puesto de frutas, al fondo: armazón de postes con su travesaño, tabla de fondo,
         mostrador y cajas. El tejado lo pone el toldo verde del propio punto: aquí no se
         dibuja ningún otro toldo, para que no se lean dos tejados apilados */
      s += `<rect x="3080" y="336" width="164" height="186" rx="6" fill="#e8d3b4"/>
        <rect x="3074" y="330" width="176" height="14" rx="6" fill="#d3b48c"/>
        <path d="M3086 384 h152 M3086 432 h152 M3086 480 h152" stroke="#d3b48c" stroke-width="5"/>`;
      s += `<rect x="3072" y="300" width="12" height="404" rx="5" fill="#8d6e63"/>
        <rect x="3240" y="300" width="12" height="404" rx="5" fill="#8d6e63"/>
        <rect x="3046" y="282" width="232" height="22" rx="9" fill="#a1714a"/>
        <rect x="3046" y="298" width="232" height="10" rx="5" fill="#8d6e63"/>
        <rect x="3058" y="504" width="208" height="20" rx="7" fill="#c08a55"/>
        <path d="M3062 524 L3074 700 L3250 700 L3262 524 Z" fill="#f0d3b0"/>
        ${[0, 1, 2, 3].map(i => `<path d="M${3082 + i * 46} 524 L${3088 + i * 46} 700 L${3108 + i * 46} 700 L${3106 + i * 46} 524 Z" fill="#9ccb8e" opacity=".55"/>`).join("")}`;
      s += caja(3050, 742, 118, 60, "#c98d5c") + caja(3062, 802, 118, 60, "#d29b6a") + caja(3046, 862, 122, 62, "#c98d5c");
      s += `${[[3080, 758], [3112, 754], [3142, 760], [3094, 818], [3130, 814], [3162, 820]].map((f, i) => `<circle cx="${f[0]}" cy="${f[1]}" r="13" fill="${["#ef5350", "#ffb74d", "#fdd835", "#ab47bc", "#ef5350", "#7cb342"][i]}"/>`).join("")}`;

      /* la panadería: toldo verde, mostrador y panes, bajo su punto */
      /* el fondo de la caseta, para que el punto no quede recortado contra el cielo */
      s += `<rect x="3612" y="496" width="226" height="212" rx="8" fill="#e8d3b4"/>
        <rect x="3612" y="496" width="226" height="16" rx="7" fill="#d3b48c"/>
        <rect x="3620" y="560" width="210" height="12" rx="5" fill="#c08a55"/>
        <ellipse cx="3640" cy="550" rx="18" ry="10" fill="#d9a05b"/><path d="M3630 546 l6 -6 M3640 548 l6 -6" stroke="#b57b3c" stroke-width="3" stroke-linecap="round"/>
        <ellipse cx="3812" cy="548" rx="17" ry="11" fill="#e6b877"/><path d="M3800 546 q12 -6 24 0" stroke="#c08c4a" stroke-width="3" fill="none"/>
        <path d="M3620 578 h34 M3796 578 h34" stroke="#d3b48c" stroke-width="6" stroke-linecap="round"/>`;
      /* la sombra de contacto y las patas: el puesto ya no acaba en un corte recto
         colgado sobre los adoquines, sino que se apoya en el suelo como los otros dos */
      s += `<ellipse cx="3732" cy="898" rx="156" ry="16" fill="rgba(90,60,30,.22)"/>
        <rect x="3608" y="498" width="12" height="404" rx="5" fill="#8d6e63"/>
        <rect x="3830" y="498" width="12" height="404" rx="5" fill="#8d6e63"/>
        <rect x="3598" y="892" width="32" height="12" rx="5" fill="#7a5a4e"/>
        <rect x="3820" y="892" width="32" height="12" rx="5" fill="#7a5a4e"/>
        <path d="M3590 502 L3614 436 L3842 436 L3866 502 Z" fill="#4e9d63"/>
        ${[0, 1, 2, 3].map(i => `<path d="M${3616 + i * 52} 502 L${3632 + i * 52} 436 L${3656 + i * 52} 436 L${3642 + i * 52} 502 Z" fill="#fff3e0" opacity=".92"/>`).join("")}
        <path d="M3590 502 Q3728 530 3866 502 L3866 516 Q3728 544 3590 516 Z" fill="#3f8452"/>
        <rect x="3592" y="702" width="280" height="22" rx="8" fill="#c08a55"/>
        <path d="M3598 724 L3607 862 q24 14 50 6 q26 -10 52 2 q24 12 48 -2 q26 -8 52 6 q22 8 47 -6 L3866 724 Z" fill="#e9d0ae"/>
        ${[0, 1, 2].map(i => `<path d="M${3634 + i * 80} 724 L${3640 + i * 80} 868 q17 6 34 -2 L${3670 + i * 80} 724 Z" fill="#c19a70" opacity=".45"/>`).join("")}
        <path d="M3607 862 q24 14 50 6 q26 -10 52 2 q24 12 48 -2 q26 -8 52 6 q22 8 47 -6" stroke="rgba(120,86,48,.3)" stroke-width="6" fill="none"/>`;
      /* una cesta de panes en el pie izquierdo y una caja en el derecho: las dos cruzan
         el bajo del mantel y lo dejan cosido al empedrado */
      s += `<ellipse cx="3660" cy="898" rx="52" ry="10" fill="rgba(90,60,30,.2)"/>
        <path d="M3622 860 h78 l-10 38 h-58 Z" fill="#c9925c"/>
        <path d="M3630 872 h62 M3634 886 h54" stroke="rgba(255,255,255,.3)" stroke-width="5"/>
        <rect x="3614" y="852" width="94" height="13" rx="6" fill="#b57b3c"/>
        <ellipse cx="3642" cy="852" rx="17" ry="11" fill="#e6b877"/>
        <ellipse cx="3676" cy="849" rx="16" ry="11" fill="#d9a05b"/>
        <path d="M3634 848 l6 -6 M3670 845 l6 -6" stroke="#b57b3c" stroke-width="3" stroke-linecap="round"/>`;
      s += `<ellipse cx="3794" cy="900" rx="56" ry="10" fill="rgba(90,60,30,.2)"/>` + caja(3746, 850, 96, 48, "#d29b6a");
      s += `${[[3770, 864], [3800, 860], [3826, 866]].map(p => `<ellipse cx="${p[0]}" cy="${p[1]}" rx="16" ry="10" fill="#d9a05b"/><path d="M${p[0] - 9} ${p[1] - 3} l6 -5 M${p[0] + 1} ${p[1] - 4} l6 -5" stroke="#b57b3c" stroke-width="3" stroke-linecap="round"/>`).join("")}`;

      /* el puesto de quesos, en primer plano: toldo azul y mostrador con mantel, bajo su punto */
      s += `<rect x="3336" y="788" width="14" height="184" rx="6" fill="#8d6e63"/>
        <rect x="3536" y="788" width="14" height="184" rx="6" fill="#8d6e63"/>
        <path d="M3314 794 L3340 726 L3546 726 L3572 794 Z" fill="#4aa3c8"/>
        ${[0, 1, 2, 3].map(i => `<path d="M${3342 + i * 52} 794 L${3358 + i * 52} 726 L${3382 + i * 52} 726 L${3368 + i * 52} 794 Z" fill="#fff3e0" opacity=".92"/>`).join("")}
        <path d="M3314 794 Q3443 822 3572 794 L3572 808 Q3443 836 3314 808 Z" fill="#3d8caf"/>
        <rect x="3318" y="922" width="250" height="24" rx="8" fill="#c08a55"/>
        <path d="M3324 946 L3332 1052 L3556 1052 L3564 946 Z" fill="#fdf1e2"/>
        ${[0, 1, 2, 3, 4].map(i => `<path d="M${3342 + i * 46} 946 L${3348 + i * 46} 1052 L${3370 + i * 46} 1052 L${3366 + i * 46} 946 Z" fill="#e2574c" opacity=".35"/>`).join("")}`;

      /* la cesta descansa sobre unas cajas apiladas, bajo su punto */
      s += caja(3946, 462, 150, 62, "#d29b6a") + caja(3960, 524, 132, 60, "#c98d5c") + caja(3938, 584, 154, 62, "#d29b6a")
        + caja(3956, 646, 132, 58, "#c98d5c");
      s += `${[[3982, 676, "#ef5350"], [4016, 672, "#7cb342"], [4050, 678, "#ffb74d"]].map(f => `<circle cx="${f[0]}" cy="${f[1]}" r="13" fill="${f[2]}"/>`).join("")}`;

      /* la farola, plantada en el pasillo libre de la calle entre el puesto de quesos y la
         panadería: ya no sale de dentro del puesto de frutas, el foco queda contra el cielo
         y su resplandor se ve. Lleva un pajarito posado que da saltitos */
      s += `<g>
        <ellipse cx="3584" cy="1000" rx="24" ry="9" fill="rgba(90,60,30,.3)"/>
        <rect x="3576" y="584" width="16" height="412" rx="7" fill="#546e7a"/>
        <rect x="3564" y="966" width="40" height="30" rx="8" fill="#546e7a"/>
        <path d="M3560 584 L3584 540 L3608 584 Z" fill="#455a64"/>
        <rect x="3560" y="584" width="48" height="44" rx="6" fill="rgba(255,236,160,.85)"/>
        <circle cx="3584" cy="606" r="66" fill="url(#cocXLuz)"/>
        <circle cx="3584" cy="606" r="34" fill="rgba(255,232,150,.4)"/>
        <g transform="translate(3540 574)">
          <ellipse rx="15" ry="11" fill="#7986cb"/><circle cx="12" cy="-7" r="8" fill="#7986cb"/>
          <path d="M19 -7 l10 3 l-10 4 Z" fill="#ffb74d"/><circle cx="14" cy="-9" r="2" fill="#263238"/>
          <path d="M-14 2 q-14 4 -18 -2 q10 -2 18 -6 Z" fill="#5c6bc0"/>
          <animateTransform attributeName="transform" type="translate" values="3540 574;3540 566;3540 574" dur="3.6s" repeatCount="indefinite"/>
        </g>
      </g>`;

      /* el carrito de la compra, aparcado entre puestos */
      s += `<g>
        <path d="M3654 962 L3778 962 L3760 1050 L3672 1050 Z" fill="#cfd8dc"/>
        <path d="M3662 990 h108 M3668 1018 h96" stroke="#90a4ae" stroke-width="5"/>
        <path d="M3702 962 v88 M3732 962 v88" stroke="#90a4ae" stroke-width="5"/>
        <path d="M3778 962 L3794 932 q10 -18 -8 -20" stroke="#78909c" stroke-width="8" fill="none" stroke-linecap="round"/>
        <circle cx="3682" cy="1062" r="13" fill="#546e7a"/><circle cx="3754" cy="1062" r="13" fill="#546e7a"/>
        <circle cx="3690" cy="948" r="14" fill="#ef5350"/><circle cx="3720" cy="944" r="12" fill="#7cb342"/><circle cx="3748" cy="950" r="13" fill="#ffb74d"/>
      </g>`;

      /* el cubo de las flores, entre las cajas y el puesto de quesos */
      s += `<path d="M3250 942 L3310 942 L3302 1012 L3258 1012 Z" fill="#7fb3c8"/>
        <rect x="3244" y="932" width="72" height="16" rx="7" fill="#9ac6d8"/>
        <path d="M3280 936 q-26 -32 -30 -62 M3280 936 q22 -36 30 -66 M3280 936 q-4 -44 2 -70 M3280 936 q-18 -22 -34 -28 M3280 936 q20 -26 36 -30" stroke="#6aa84a" stroke-width="6" fill="none" stroke-linecap="round"/>
        ${[[3248, 870, "#ef9a9a"], [3312, 866, "#fdd835"], [3282, 862, "#ce93d8"], [3244, 906, "#ffb74d"], [3318, 904, "#ef9a9a"]].map(f => `<circle cx="${f[0]}" cy="${f[1]}" r="12" fill="${f[2]}"/><circle cx="${f[0]}" cy="${f[1]}" r="5" fill="#fff59d"/>`).join("")}`;

      /* los sacos de harina de la panadería y las cajas del final de la plaza */
      s += `<ellipse cx="3910" cy="1066" rx="60" ry="12" fill="rgba(90,60,30,.2)"/>
        <path d="M3866 1064 q-14 -62 16 -84 l30 0 q30 22 16 84 Z" fill="#d8bb92"/>
        <rect x="3872" y="1008" width="56" height="12" rx="6" fill="#b99a71"/>
        <path d="M3882 980 q4 -16 -8 -22 q18 -4 22 8 q6 -14 22 -8 q-12 8 -8 22 Z" fill="#c9ab82"/>
        <path d="M3916 1066 q-12 -52 14 -70 l24 0 q26 18 14 70 Z" fill="#c9ab82"/>
        <rect x="3922" y="1020" width="46" height="10" rx="5" fill="#ab8c65"/>
        <path d="M3930 996 q3 -13 -6 -18 q15 -3 18 7 q5 -12 18 -7 q-10 7 -6 18 Z" fill="#d8bb92"/>`;
      s += caja(4106, 986, 92, 48, "#c98d5c");
      s += `<ellipse cx="4152" cy="972" rx="30" ry="22" fill="#7cb342"/>
        <path d="M4128 968 q24 -12 48 0" stroke="#5f9b36" stroke-width="4" fill="none"/>
        <path d="M4152 950 q-2 -12 8 -14" stroke="#4f7f2a" stroke-width="5" fill="none" stroke-linecap="round"/>
        <ellipse cx="4148" cy="1070" rx="52" ry="10" fill="rgba(90,60,30,.18)"/>
        <circle cx="4114" cy="1054" r="14" fill="#ef5350"/><circle cx="4146" cy="1058" r="13" fill="#ffb74d"/><circle cx="4176" cy="1054" r="13" fill="#fdd835"/>`;

      /* la guirnalda de banderines, atada por un extremo al travesaño del puesto de frutas
         y por el otro a la esquina del toldo de la panadería: cuelga al aire, sin pisar
         ningún tejado y sin morir detrás de ningún punto */
      const ga = [3274, 296], gc = [3450, 442], gb = [3590, 502];
      let gs = `<path d="M${ga[0]} ${ga[1]} Q${gc[0]} ${gc[1]} ${gb[0]} ${gb[1]}" stroke="#8d6e63" stroke-width="5" fill="none"/>
        <circle cx="${ga[0]}" cy="${ga[1]}" r="8" fill="#8d6e63"/>
        <circle cx="${gb[0]}" cy="${gb[1]}" r="8" fill="#8d6e63"/>`;
      const gcol = ["#ef5350", "#ffd54f", "#66bb6a", "#4fc3f7", "#ce93d8", "#ffb74d", "#ef5350", "#66bb6a"];
      for (let i = 0; i < 8; i++) {
        const tt = 0.09 + i * 0.111, u = 1 - tt;
        const gx = u * u * ga[0] + 2 * u * tt * gc[0] + tt * tt * gb[0];
        const gy = u * u * ga[1] + 2 * u * tt * gc[1] + tt * tt * gb[1];
        gs += `<path d="M${(gx - 14).toFixed(0)} ${(gy - 1).toFixed(0)} L${(gx + 14).toFixed(0)} ${(gy + 4).toFixed(0)} L${gx.toFixed(0)} ${(gy + 38).toFixed(0)} Z" fill="${gcol[i]}" opacity=".92"/>`;
      }
      s += `<g>${gs}<animateTransform attributeName="transform" type="rotate" values="-0.5 ${ga[0]} ${ga[1]};0.6 ${ga[0]} ${ga[1]};-0.5 ${ga[0]} ${ga[1]}" dur="7s" repeatCount="indefinite"/></g>`;

      /* ================== DETALLES CON VIDA ================== */
      /* el vaporcito de la olla */
      [[1132, 426, 0], [1168, 418, 1.2], [1196, 430, 2.4]].forEach(v => {
        s += `<path d="M${v[0]} ${v[1]} q-13 -26 5 -44 q16 -18 6 -40" stroke="rgba(255,255,255,.55)" stroke-width="8" fill="none" stroke-linecap="round">
          <animate attributeName="opacity" values=".55;.14;.55" dur="3.6s" begin="${v[2]}s" repeatCount="indefinite"/></path>`;
      });
      /* el vaporcito del pan recién hecho */
      [[3688, 572, 0], [3726, 566, 1.4], [3762, 574, 2.6]].forEach(v => {
        s += `<path d="M${v[0]} ${v[1]} q-12 -18 4 -32 q14 -14 5 -28" stroke="rgba(255,255,255,.6)" stroke-width="7" fill="none" stroke-linecap="round">
          <animate attributeName="opacity" values=".6;.15;.6" dur="4s" begin="${v[2]}s" repeatCount="indefinite"/></path>`;
      });
      /* un pájaro que cruza el cielo del mercado sin prisa */
      s += `<g opacity=".7"><path d="M0 0 q-13 -11 -25 -5 M0 0 q13 -11 25 -5" stroke="rgba(70,90,110,.75)" stroke-width="4" fill="none" stroke-linecap="round"/>
        <animateMotion dur="40s" repeatCount="indefinite" path="M 3120 220 Q 3520 140 3920 208 Q 4140 250 4180 186 Q 3800 264 3420 240 Q 3200 226 3120 220"/></g>`;
      /* el olorcito rico que viaja de la cocina al mercado, cosiendo las tres zonas */
      s += `<g opacity=".8"><path d="M0 0 q13 -10 26 0 q13 10 26 0" stroke="rgba(255,236,179,.85)" stroke-width="5" fill="none" stroke-linecap="round"/>
        <animateMotion dur="34s" repeatCount="indefinite" path="M 700 400 Q 1400 330 2100 420 Q 2700 490 3300 400 Q 3800 330 4080 400 Q 3400 500 2500 450 Q 1500 400 700 400"/></g>`;
      /* migas y chispitas por el suelo */
      [[352, 1012], [806, 1034], [1252, 1046], [1666, 1026], [2148, 1040], [2402, 1010], [2820, 1046], [3320, 1032], [3860, 1044]].forEach(m => {
        s += `<circle cx="${m[0]}" cy="${m[1]}" r="4" fill="rgba(255,224,130,.45)"/><circle cx="${m[0] + 15}" cy="${m[1] + 9}" r="3" fill="rgba(255,224,130,.35)"/>`;
      });
      return decoSvg(s, 4200);
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
