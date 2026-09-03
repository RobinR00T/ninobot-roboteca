"use strict";
/* ============================================================
   Contenido de EGIPTO (parte B): historias ramificadas,
   canciones, traductor, mapa de exploración y charla.
   ============================================================ */

Object.assign(THEMES.egipto.content, {

  /* ---------- HISTORIAS (ramifican de verdad) ---------- */
  stories: [
    {
      id: "momia", emoji: "😴", start: "n1",
      title: { es: "La momia dormilona", ca: "La mòmia dormilega", en: "The Sleepy Mummy", cs: "Ospalá mumie", fr: "La momie dormeuse" },
      nodes: {
        n1: {
          text: { es: "En la gran pirámide se oyen bostezos. La momia Momi no puede dormir: ha perdido su escarabajo de peluche. ¿La ayudamos, {name}?", ca: "A la gran piràmide se senten badalls. La mòmia Momi no pot dormir: ha perdut el seu escarabat de peluix. L'ajudem, {name}?", en: "Yawns echo inside the great pyramid. Momi the mummy cannot sleep: she has lost her cuddly scarab. Shall we help her, {name}?", cs: "Ve velké pyramidě je slyšet zívání. Mumie Momi nemůže spát: ztratila svého plyšového brouka. Pomůžeme jí, {name}?", fr: "Dans la grande pyramide, on entend des bâillements. Momi la momie ne peut pas dormir : elle a perdu son scarabée en peluche. On l'aide, {name} ?" },
          choices: [
            { t: { es: "Buscamos en la cámara del tesoro", ca: "Busquem a la cambra del tresor", en: "Let's search the treasure chamber", cs: "Hledáme v pokladnici", fr: "Cherchons dans la chambre au trésor" }, go: "n2a" },
            { t: { es: "Preguntamos a Misu, la gata del templo", ca: "Preguntem a Misu, la gata del temple", en: "Let's ask Misu, the temple cat", cs: "Zeptáme se Misu, chrámové kočky", fr: "Demandons à Misu, la chatte du temple" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "La cámara del tesoro brilla entera, pero el peluche no está. En un rincón hay un arpa dorada y unas huellas pequeñitas en el polvo.", ca: "La cambra del tresor brilla tota, però el peluix no hi és. En un racó hi ha una arpa daurada i unes petjades petitones a la pols.", en: "The treasure chamber sparkles all over, but the cuddly toy is not there. In a corner there is a golden harp and some tiny footprints in the dust.", cs: "Pokladnice se celá třpytí, ale plyšák tam není. V rohu stojí zlatá harfa a v prachu jsou vidět malinké stopy.", fr: "La chambre au trésor brille de partout, mais la peluche n'y est pas. Dans un coin, il y a une harpe dorée et de toutes petites empreintes dans la poussière." },
          choices: [
            { t: { es: "Tocamos una nana con el arpa", ca: "Toquem una cançó de bressol amb l'arpa", en: "We play a lullaby on the harp", cs: "Zahrajeme na harfu ukolébavku", fr: "On joue une berceuse à la harpe" }, go: "n3a" },
            { t: { es: "Seguimos las huellas", ca: "Seguim les petjades", en: "We follow the footprints", cs: "Půjdeme po stopách", fr: "On suit les empreintes" }, go: "n3b" }
          ]
        },
        n2b: {
          text: { es: "Misu ronronea: 'Miau... el cocodrilo Coco lo cogió para jugar. Vive en el Nilo'. ¿Cómo cruzamos el río?", ca: "Misu roncroneja: 'Miau... el cocodril Coco el va agafar per jugar. Viu al Nil'. Com creuem el riu?", en: "Misu purrs: 'Meow... Coco the crocodile took it to play. He lives in the Nile'. How do we cross the river?", cs: "Misu přede: 'Mňau... krokodýl Koko si ho vzal na hraní. Bydlí v Nilu'. Jak se dostaneme přes řeku?", fr: "Misu ronronne : « Miaou... Coco le crocodile l'a pris pour jouer. Il vit dans le Nil ». Comment traverse-t-on le fleuve ?" },
          choices: [
            { t: { es: "En barca de papiro", ca: "Amb barca de papir", en: "By papyrus boat", cs: "Na papyrové loďce", fr: "En barque de papyrus" }, go: "n2b1" },
            { t: { es: "Por el puente del hipopótamo", ca: "Pel pont de l'hipopòtam", en: "Over the hippo bridge", cs: "Po hroším mostě", fr: "Par le pont de l'hippopotame" }, go: "n2b2" }
          ]
        },
        n2b1: {
          text: { es: "La barca de papiro se desliza suave entre los lotos. Un ibis os guía volando bajito hasta la orilla donde vive Coco.", ca: "La barca de papir llisca suau entre els lotus. Un ibis us guia volant baixet fins a la riba on viu Coco.", en: "The papyrus boat glides gently between the lotus flowers. An ibis guides you, flying low, to the bank where Coco lives.", cs: "Papyrová loďka tiše klouže mezi lotosy. Ibis letí nízko před vámi a dovede vás na břeh, kde bydlí Koko.", fr: "La barque de papyrus glisse doucement entre les lotus. Un ibis vous guide en volant tout bas jusqu'à la rive où vit Coco." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n3c" }
          ]
        },
        n2b2: {
          text: { es: "El hipopótamo Hipo os deja pasar por su lomo: '¡Cosquillas, cosquillas!'. Llegáis a la otra orilla muertos de risa.", ca: "L'hipopòtam Hipo us deixa passar pel seu llom: 'Pessigolles, pessigolles!'. Arribeu a l'altra riba morts de riure.", en: "Hippo the hippopotamus lets you walk across his back: 'Tickles, tickles!'. You reach the other bank giggling like crazy.", cs: "Hroch Hopík vás nechá přejít po svých zádech: 'To lechtá, to lechtá!'. Na druhý břeh dorazíte celí usmátí.", fr: "Hippo l'hippopotame vous laisse passer sur son dos : « Ça chatouille, ça chatouille ! ». Vous arrivez sur l'autre rive morts de rire." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n3c" }
          ]
        },
        n3a: {
          text: { es: "La nana suena tan dulce que Momi casi se duerme... pero el eco de la pirámide susurra: 'El peluche está en el Nilo, con el cocodrilo Coco'.", ca: "La cançó de bressol sona tan dolça que Momi gairebé s'adorm... però l'eco de la piràmide xiuxiueja: 'El peluix és al Nil, amb el cocodril Coco'.", en: "The lullaby sounds so sweet that Momi almost falls asleep... but the pyramid's echo whispers: 'The cuddly toy is in the Nile, with Coco the crocodile'.", cs: "Ukolébavka zní tak sladce, že Momi skoro usne... ale ozvěna pyramidy zašeptá: 'Plyšák je v Nilu, u krokodýla Koka'.", fr: "La berceuse est si douce que Momi s'endort presque... mais l'écho de la pyramide chuchote : « La peluche est dans le Nil, avec Coco le crocodile »." },
          choices: [
            { t: { es: "¡Al Nilo!", ca: "Al Nil!", en: "To the Nile!", cs: "K Nilu!", fr: "Vers le Nil !" }, go: "n3c" }
          ]
        },
        n3b: {
          text: { es: "Las huellas son de un cocodrilo pequeño y llegan hasta el río. ¡Ahí está Coco, abrazando el escarabajo de peluche!", ca: "Les petjades són d'un cocodril petit i arriben fins al riu. Aquí hi ha Coco, abraçant l'escarabat de peluix!", en: "The footprints belong to a little crocodile and lead to the river. There is Coco, hugging the cuddly scarab!", cs: "Stopy patří malému krokodýlovi a vedou až k řece. A tam je Koko, objímá plyšového brouka!", fr: "Les empreintes sont celles d'un petit crocodile et mènent jusqu'au fleuve. Voilà Coco, qui serre le scarabée en peluche dans ses bras !" },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n3c" }
          ]
        },
        n3c: {
          text: { es: "Coco se pone colorado: 'Lo encontré solito en la arena... no sabía que era de Momi'. ¿Qué hacemos, {name}?", ca: "Coco es posa vermell: 'El vaig trobar solet a la sorra... no sabia que era de Momi'. Què fem, {name}?", en: "Coco blushes: 'I found it all alone in the sand... I did not know it was Momi's'. What do we do, {name}?", cs: "Koko se začervená: 'Našel jsem ho samotného v písku... nevěděl jsem, že patří Momi'. Co uděláme, {name}?", fr: "Coco devient tout rouge : « Je l'ai trouvé tout seul dans le sable... je ne savais pas qu'il était à Momi ». Qu'est-ce qu'on fait, {name} ?" },
          choices: [
            { t: { es: "Pedirle que lo devuelva con cariño", ca: "Demanar-li que el torni amb carinyo", en: "Ask him kindly to give it back", cs: "Hezky ho poprosíme, ať ho vrátí", fr: "Lui demander gentiment de le rendre" }, go: "e1" },
            { t: { es: "Invitarlo a una fiesta de pijamas en la pirámide", ca: "Convidar-lo a una festa de pijames a la piràmide", en: "Invite him to a pyjama party in the pyramid", cs: "Pozveme ho na pyžamovou párty do pyramidy", fr: "L'inviter à une soirée pyjama dans la pyramide" }, go: "e2" }
          ]
        },
        e1: {
          end: true,
          text: { es: "Coco devuelve el peluche y pide perdón. Momi lo abraza fuerte, bosteza y se queda dormida sonriendo. Desde entonces, Coco siempre pregunta antes de coger nada. ¡Bien hecho, {name}!", ca: "Coco torna el peluix i demana perdó. Momi l'abraça fort, badalla i s'adorm somrient. Des de llavors, Coco sempre pregunta abans d'agafar res. Ben fet, {name}!", en: "Coco gives the cuddly toy back and says sorry. Momi hugs it tight, yawns and falls asleep with a smile. From then on, Coco always asks before taking anything. Well done, {name}!", cs: "Koko plyšáka vrátí a omluví se. Momi ho pevně obejme, zívne a s úsměvem usne. Od té doby se Koko vždycky nejdřív zeptá, než si něco vezme. Výborně, {name}!", fr: "Coco rend la peluche et s'excuse. Momi la serre fort, bâille et s'endort en souriant. Depuis, Coco demande toujours avant de prendre quelque chose. Bravo, {name} !" }
        },
        e2: {
          end: true,
          text: { es: "¡Fiesta de pijamas! Momi cuenta historias de hace tres mil años, Coco trae canciones del río y todos se duermen abrazados al escarabajo de peluche. Compartir da sueños más bonitos, {name}.", ca: "Festa de pijames! Momi explica històries de fa tres mil anys, Coco porta cançons del riu i tots s'adormen abraçats a l'escarabat de peluix. Compartir dóna somnis més bonics, {name}.", en: "Pyjama party! Momi tells stories from three thousand years ago, Coco brings river songs, and everyone falls asleep hugging the cuddly scarab. Sharing makes dreams sweeter, {name}.", cs: "Pyžamová párty! Momi vypráví příběhy staré tři tisíce let, Koko přinese písničky od řeky a všichni usnou v objetí s plyšovým broukem. Když se dělíme, máme krásnější sny, {name}.", fr: "Soirée pyjama ! Momi raconte des histoires d'il y a trois mille ans, Coco apporte des chansons du fleuve et tout le monde s'endort en serrant le scarabée en peluche. Partager donne de plus beaux rêves, {name}." }
        }
      }
    },
    {
      id: "gatosagrado", emoji: "🐈", start: "n1",
      title: { es: "El gato sagrado perdido", ca: "El gat sagrat perdut", en: "The Lost Sacred Cat", cs: "Ztracená posvátná kočka", fr: "Le chat sacré perdu" },
      nodes: {
        n1: {
          text: { es: "¡Alarma en el palacio! Miu, la gata sagrada del faraón, no aparece por ningún lado y el faraón está tristísimo. ¿Por dónde buscamos, {name}?", ca: "Alarma al palau! Miu, la gata sagrada del faraó, no apareix enlloc i el faraó està tristíssim. Per on busquem, {name}?", en: "Alarm at the palace! Miu, the pharaoh's sacred cat, is nowhere to be found and the pharaoh is very sad. Where do we look, {name}?", cs: "Poplach v paláci! Miu, faraonova posvátná kočka, není k nalezení a faraon je hrozně smutný. Kde začneme hledat, {name}?", fr: "Alerte au palais ! Miu, la chatte sacrée du pharaon, est introuvable et le pharaon est très triste. Où cherche-t-on, {name} ?" },
          choices: [
            { t: { es: "Por el mercado", ca: "Pel mercat", en: "Around the market", cs: "Na tržišti", fr: "Au marché" }, go: "n2a" },
            { t: { es: "Por el templo", ca: "Pel temple", en: "Around the temple", cs: "V chrámu", fr: "Au temple" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "En el mercado, el vendedor de pescado se ríe: 'Una gata con collar dorado ha pasado corriendo con un pez... ¡iba hacia el río!'.", ca: "Al mercat, el venedor de peix riu: 'Una gata amb collar daurat ha passat corrent amb un peix... anava cap al riu!'.", en: "At the market, the fish seller laughs: 'A cat with a golden collar just ran past with a fish... she was heading for the river!'.", cs: "Na tržišti se prodavač ryb směje: 'Kočka se zlatým obojkem tudy proběhla s rybou... utíkala k řece!'.", fr: "Au marché, le vendeur de poissons rigole : « Une chatte au collier doré vient de passer en courant avec un poisson... elle allait vers le fleuve ! »." },
          choices: [
            { t: { es: "¡Al río!", ca: "Al riu!", en: "To the river!", cs: "K řece!", fr: "Vers le fleuve !" }, go: "n3a" }
          ]
        },
        n2b: {
          text: { es: "En el templo hay huellas de patitas sobre la harina del suelo. ¿Las seguimos o preguntamos al escriba, que lo apunta todo?", ca: "Al temple hi ha petjades de potetes sobre la farina de terra. Les seguim o preguntem a l'escriba, que ho apunta tot?", en: "In the temple there are little paw prints in the flour on the floor. Do we follow them, or ask the scribe, who writes everything down?", cs: "V chrámu jsou na rozsypané mouce stopy tlapek. Půjdeme po nich, nebo se zeptáme písaře, který si všechno zapisuje?", fr: "Dans le temple, il y a des empreintes de petites pattes sur la farine du sol. On les suit, ou on demande au scribe, qui note tout ?" },
          choices: [
            { t: { es: "Seguimos las huellas hasta el tejado", ca: "Seguim les petjades fins al terrat", en: "We follow the prints up to the roof", cs: "Půjdeme po stopách až na střechu", fr: "On suit les empreintes jusqu'au toit" }, go: "n3b" },
            { t: { es: "Preguntamos al escriba", ca: "Preguntem a l'escriba", en: "We ask the scribe", cs: "Zeptáme se písaře", fr: "On demande au scribe" }, go: "n3c" }
          ]
        },
        n3a: {
          text: { es: "Junto al río, los papiros se mueven y se oye un miau bajito. ¿Nos asomamos despacito o la llamamos?", ca: "Vora el riu, els papirs es mouen i se sent un miau baixet. Ens hi acostem a poc a poc o la cridem?", en: "By the river, the papyrus reeds are rustling and you hear a tiny meow. Do we peek in slowly or call her?", cs: "U řeky se hýbe rákosí z papyru a je slyšet tichoučké mňau. Nakoukneme tam potichu, nebo na ni zavoláme?", fr: "Au bord du fleuve, les papyrus bougent et on entend un petit miaou. On s'approche tout doucement ou on l'appelle ?" },
          choices: [
            { t: { es: "Nos asomamos despacito", ca: "Ens hi acostem a poc a poc", en: "We peek in slowly", cs: "Nakoukneme potichu", fr: "On s'approche tout doucement" }, go: "n4" },
            { t: { es: "La llamamos: ¡Miu, Miu!", ca: "La cridem: Miu, Miu!", en: "We call her: Miu, Miu!", cs: "Zavoláme: Miu, Miu!", fr: "On l'appelle : Miu, Miu !" }, go: "n3d" }
          ]
        },
        n3b: {
          text: { es: "En el tejado hay una siesta a medias: pelitos dorados y un cojín calentito. Desde arriba veis los papiros del río moviéndose.", ca: "Al terrat hi ha una migdiada a mitges: pelets daurats i un coixí calentó. Des de dalt veieu els papirs del riu movent-se.", en: "On the roof there is a half-finished nap: golden hairs and a warm cushion. From up there you can see the papyrus reeds moving by the river.", cs: "Na střeše je rozespaný pelíšek: zlaté chloupky a teplý polštářek. Shora vidíte, jak se u řeky hýbe papyrusové rákosí.", fr: "Sur le toit, il y a une sieste à moitié finie : des poils dorés et un coussin tout chaud. De là-haut, vous voyez bouger les papyrus du fleuve." },
          choices: [
            { t: { es: "¡Al río!", ca: "Al riu!", en: "To the river!", cs: "K řece!", fr: "Vers le fleuve !" }, go: "n3a" }
          ]
        },
        n3c: {
          text: { es: "El escriba dibuja un gato y un sol: 'Los gatos duermen donde hay calorcito y silencio'. Y señala el tejado con su pluma.", ca: "L'escriba dibuixa un gat i un sol: 'Els gats dormen on hi ha caloreta i silenci'. I assenyala el terrat amb la seva ploma.", en: "The scribe draws a cat and a sun: 'Cats sleep where it is warm and quiet'. And he points at the roof with his pen.", cs: "Písař nakreslí kočku a slunce: 'Kočky spí tam, kde je teploučko a klid'. A ukáže perem na střechu.", fr: "Le scribe dessine un chat et un soleil : « Les chats dorment là où il fait chaud et calme ». Et il montre le toit avec sa plume." },
          choices: [
            { t: { es: "Al tejado", ca: "Al terrat", en: "To the roof", cs: "Na střechu", fr: "Sur le toit" }, go: "n3b" }
          ]
        },
        n3d: {
          text: { es: "Al oír su nombre, Miu se esconde más adentro. El hipopótamo Hipo susurra: 'Con los gatos, mejor despacito y sin ruido'.", ca: "En sentir el seu nom, Miu s'amaga més endins. L'hipopòtam Hipo xiuxiueja: 'Amb els gats, millor a poc a poc i sense soroll'.", en: "When she hears her name, Miu hides deeper. Hippo the hippopotamus whispers: 'With cats, better slow and quiet'.", cs: "Jakmile Miu uslyší své jméno, schová se ještě hlouběji. Hroch Hopík zašeptá: 'Na kočky se musí pomalu a potichu'.", fr: "En entendant son nom, Miu se cache plus loin. Hippo l'hippopotame chuchote : « Avec les chats, mieux vaut doucement et sans bruit »." },
          choices: [
            { t: { es: "Nos acercamos despacito", ca: "Ens hi acostem a poc a poc", en: "We move in slowly", cs: "Přiblížíme se potichu", fr: "On s'approche tout doucement" }, go: "n4" }
          ]
        },
        n4: {
          text: { es: "Apartáis los papiros con cuidado y... ¡sorpresa! Miu no estaba perdida: ha hecho un nido y tiene tres gatitos chiquitines. ¿Qué hacemos?", ca: "Aparteu els papirs amb compte i... sorpresa! Miu no estava perduda: ha fet un niu i té tres gatets petitons. Què fem?", en: "You gently part the papyrus reeds and... surprise! Miu was not lost at all: she made a nest and has three tiny kittens. What do we do?", cs: "Opatrně rozhrnete rákosí a... překvapení! Miu se neztratila: udělala si hnízdečko a má tři maličká koťátka. Co uděláme?", fr: "Vous écartez les papyrus avec soin et... surprise ! Miu n'était pas perdue : elle a fait un nid et elle a trois tout petits chatons. Qu'est-ce qu'on fait ?" },
          choices: [
            { t: { es: "Corremos a contárselo al faraón", ca: "Correm a explicar-ho al faraó", en: "We run to tell the pharaoh", cs: "Běžíme to říct faraonovi", fr: "On court le dire au pharaon" }, go: "e1" },
            { t: { es: "Los cuidamos y mandamos al ibis con el mensaje", ca: "Els cuidem i enviem l'ibis amb el missatge", en: "We guard them and send the ibis with a message", cs: "Pohlídáme je a pošleme ibise se zprávou", fr: "On les garde et on envoie l'ibis avec le message" }, go: "e2" }
          ]
        },
        e1: {
          end: true,
          text: { es: "El faraón llega corriendo con la corona torcida de la emoción. Declara la Fiesta de los Gatitos y Miu estrena una cesta real blandita. ¡Misterio resuelto, {name}!", ca: "El faraó arriba corrent amb la corona torta de l'emoció. Declara la Festa dels Gatets i Miu estrena una cistella reial tovota. Misteri resolt, {name}!", en: "The pharaoh comes running, his crown all crooked with excitement. He declares the Kitten Festival and Miu gets a brand new royal soft basket. Mystery solved, {name}!", cs: "Faraon přiběhne s korunou nakřivo, jak je rozrušený. Vyhlásí Slavnost koťátek a Miu dostane novou královskou měkkoučkou pelíškovou ošatku. Záhada vyřešena, {name}!", fr: "Le pharaon arrive en courant, la couronne toute de travers tellement il est ému. Il déclare la Fête des Chatons et Miu reçoit un panier royal tout doux. Mystère résolu, {name} !" }
        },
        e2: {
          end: true,
          text: { es: "El ibis entrega el mensaje volando. Al atardecer llega el faraón con una cesta enorme y suave, y os da las gracias con el abrazo más grande de Egipto: cuidasteis a los gatitos sin molestarlos, {name}.", ca: "L'ibis entrega el missatge volant. Al capvespre arriba el faraó amb una cistella enorme i suau, i us dóna les gràcies amb l'abraçada més gran d'Egipte: vau cuidar els gatets sense molestar-los, {name}.", en: "The ibis delivers the message in a flash. At sunset the pharaoh arrives with a huge soft basket and thanks you with the biggest hug in Egypt: you looked after the kittens without disturbing them, {name}.", cs: "Ibis zprávu bleskově doručí. Při západu slunce dorazí faraon s obrovskou měkkou ošatkou a poděkuje vám tím největším objetím v Egyptě: pohlídala jsi koťátka a vůbec jsi je nerušila, {name}.", fr: "L'ibis livre le message à toute vitesse. Au coucher du soleil, le pharaon arrive avec un panier immense et tout doux, et vous remercie avec le plus grand câlin d'Égypte : vous avez veillé sur les chatons sans les déranger, {name}." }
        }
      }
    },
    {
      id: "tesoronilo", emoji: "🏺", start: "n1",
      title: { es: "El tesoro del Nilo", ca: "El tresor del Nil", en: "The Treasure of the Nile", cs: "Poklad Nilu", fr: "Le trésor du Nil" },
      nodes: {
        n1: {
          text: { es: "Dentro de una vasija antigua aparece un mapa de papiro: '¡El tesoro del Nilo espera! Primera pista: donde el río abraza a las palmeras'. ¿Cómo viajamos, {name}?", ca: "Dins d'una gerra antiga apareix un mapa de papir: 'El tresor del Nil espera! Primera pista: on el riu abraça les palmeres'. Com hi viatgem, {name}?", en: "Inside an old jar you find a papyrus map: 'The treasure of the Nile awaits! First clue: where the river hugs the palm trees'. How do we travel, {name}?", cs: "Ve starém džbánu najdete mapu z papyru: 'Poklad Nilu čeká! První nápověda: tam, kde řeka objímá palmy'. Jak pocestujeme, {name}?", fr: "Dans une vieille jarre apparaît une carte en papyrus : « Le trésor du Nil vous attend ! Premier indice : là où le fleuve embrasse les palmiers ». Comment voyage-t-on, {name} ?" },
          choices: [
            { t: { es: "En barca de papiro por el río", ca: "Amb barca de papir pel riu", en: "By papyrus boat along the river", cs: "Na papyrové loďce po řece", fr: "En barque de papyrus sur le fleuve" }, go: "n2a" },
            { t: { es: "En camello por la orilla", ca: "En camell per la riba", en: "By camel along the shore", cs: "Na velbloudovi po břehu", fr: "À dos de chameau le long de la rive" }, go: "n2b" }
          ]
        },
        n2a: {
          text: { es: "La barca avanza tranquila hasta que el hipopótamo Hipo bosteza en medio del río: no se quiere apartar. ¿Qué hacemos?", ca: "La barca avança tranquil·la fins que l'hipopòtam Hipo badalla al mig del riu: no es vol apartar. Què fem?", en: "The boat glides along calmly until Hippo the hippopotamus yawns right in the middle of the river: he will not move. What do we do?", cs: "Loďka klidně pluje, dokud si hroch Hopík nezívne přímo uprostřed řeky: nechce se mu uhnout. Co uděláme?", fr: "La barque avance tranquillement jusqu'à ce qu'Hippo l'hippopotame bâille au milieu du fleuve : il ne veut pas bouger. Qu'est-ce qu'on fait ?" },
          choices: [
            { t: { es: "Le cantamos una canción del río", ca: "Li cantem una cançó del riu", en: "We sing him a river song", cs: "Zazpíváme mu písničku od řeky", fr: "On lui chante une chanson du fleuve" }, go: "n3a" },
            { t: { es: "Remamos alrededor con cuidado", ca: "Remem al voltant amb compte", en: "We row around him carefully", cs: "Opatrně ho obeplujeme", fr: "On rame autour de lui avec soin" }, go: "n3b" }
          ]
        },
        n2b: {
          text: { es: "El camello Chufa trota contento, pero el viento empieza a levantar arena. ¡Viene una tormenta del desierto!", ca: "El camell Xufa trota content, però el vent comença a aixecar sorra. Ve una tempesta del desert!", en: "Chufa the camel trots along happily, but the wind starts lifting the sand. A desert storm is coming!", cs: "Velbloud Šufan vesele kluše, ale vítr začíná zvedat písek. Blíží se pouštní bouře!", fr: "Choufa le chameau trotte tout content, mais le vent commence à soulever le sable. Une tempête du désert arrive !" },
          choices: [
            { t: { es: "Nos refugiamos detrás de Chufa", ca: "Ens refugiem darrere de Xufa", en: "We shelter behind Chufa", cs: "Schováme se za Šufana", fr: "On s'abrite derrière Choufa" }, go: "n3d" },
            { t: { es: "Corremos hacia las palmeras", ca: "Correm cap a les palmeres", en: "We run to the palm trees", cs: "Utíkáme k palmám", fr: "On court vers les palmiers" }, go: "n3c" }
          ]
        },
        n3a: {
          text: { es: "A Hipo le encanta la canción: mueve las orejas al ritmo y os lleva sobre su lomo hasta el oasis, rapidísimo y salpicando.", ca: "A Hipo li encanta la cançó: mou les orelles al ritme i us porta sobre el seu llom fins a l'oasi, rapidíssim i esquitxant.", en: "Hippo loves the song: he wiggles his ears to the beat and carries you on his back to the oasis, super fast and splashing everywhere.", cs: "Hopíkovi se písnička moc líbí: hýbe ušima do rytmu a odveze vás na zádech až k oáze, rychle a s cákáním.", fr: "Hippo adore la chanson : il remue les oreilles en rythme et vous porte sur son dos jusqu'à l'oasis, à toute vitesse et en éclaboussant partout." },
          choices: [
            { t: { es: "Seguir", ca: "Continuar", en: "Continue", cs: "Pokračovat", fr: "Continuer" }, go: "n3c" }
          ]
        },
        n3b: {
          text: { es: "Remáis despacito alrededor de Hipo. Entre los lotos, una flor guarda un trocito de papiro: '¡Vais muy bien! Seguid hasta las palmeras'.", ca: "Remeu a poc a poc al voltant d'Hipo. Entre els lotus, una flor guarda un trosset de papir: 'Aneu molt bé! Seguiu fins a les palmeres'.", en: "You row gently around Hippo. Among the lotus flowers, one holds a little piece of papyrus: 'You are doing great! Keep going to the palm trees'.", cs: "Pomalu obeplujete Hopíka. Mezi lotosy schovává jedna květina kousek papyru: 'Vedete si skvěle! Pokračujte k palmám'.", fr: "Vous ramez doucement autour d'Hippo. Parmi les lotus, une fleur garde un petit bout de papyrus : « Vous êtes sur la bonne voie ! Continuez vers les palmiers »." },
          choices: [
            { t: { es: "A las palmeras", ca: "A les palmeres", en: "To the palm trees", cs: "K palmám", fr: "Vers les palmiers" }, go: "n3c" }
          ]
        },
        n3d: {
          text: { es: "Chufa se tumba y os hace de muralla calentita. La arena pasa volando, contáis hasta diez... y sale el sol otra vez.", ca: "Xufa s'estira i us fa de muralla calentona. La sorra passa volant, compteu fins a deu... i torna a sortir el sol.", en: "Chufa lies down and becomes your warm little wall. The sand flies past, you count to ten... and the sun comes out again.", cs: "Šufan si lehne a udělá vám teplou hradbu. Písek proletí kolem, napočítáte do deseti... a slunce zase svítí.", fr: "Choufa se couche et devient votre petit mur bien chaud. Le sable passe en volant, vous comptez jusqu'à dix... et le soleil revient." },
          choices: [
            { t: { es: "A las palmeras", ca: "A les palmeres", en: "To the palm trees", cs: "K palmám", fr: "Vers les palmiers" }, go: "n3c" }
          ]
        },
        n3c: {
          text: { es: "¡El oasis! En el tronco de la palmera más alta hay una pista grabada: 'El tesoro duerme donde el agua guarda las estrellas'. Hmm... ¡el estanque del templo, de noche!", ca: "L'oasi! Al tronc de la palmera més alta hi ha una pista gravada: 'El tresor dorm on l'aigua guarda les estrelles'. Hmm... l'estany del temple, de nit!", en: "The oasis! Carved on the tallest palm tree there is a clue: 'The treasure sleeps where the water keeps the stars'. Hmm... the temple pool, at night!", cs: "Oáza! Na kmeni nejvyšší palmy je vyrytá nápověda: 'Poklad spí tam, kde voda schovává hvězdy'. Hmm... chrámové jezírko, v noci!", fr: "L'oasis ! Sur le tronc du plus grand palmier, un indice est gravé : « Le trésor dort là où l'eau garde les étoiles ». Hmm... le bassin du temple, la nuit !" },
          choices: [
            { t: { es: "Al estanque", ca: "A l'estany", en: "To the pool", cs: "K jezírku", fr: "Vers le bassin" }, go: "n4" }
          ]
        },
        n4: {
          text: { es: "De noche, el estanque brilla lleno de estrellas reflejadas. El tesoro está ahí abajo. ¿Cómo lo cogemos, {name}?", ca: "De nit, l'estany brilla ple d'estrelles reflectides. El tresor és allà baix. Com l'agafem, {name}?", en: "At night, the pool sparkles, full of reflected stars. The treasure is down there. How do we get it, {name}?", cs: "V noci se jezírko třpytí plné odražených hvězd. Poklad je tam dole. Jak ho získáme, {name}?", fr: "La nuit, le bassin brille, plein d'étoiles reflétées. Le trésor est là, au fond. Comment le prend-on, {name} ?" },
          choices: [
            { t: { es: "Nos metemos despacito en el agua", ca: "Ens fiquem a poc a poc a l'aigua", en: "We slip slowly into the water", cs: "Pomalu vlezeme do vody", fr: "On entre tout doucement dans l'eau" }, go: "e1" },
            { t: { es: "Esperamos al amanecer para ver mejor", ca: "Esperem l'alba per veure-hi millor", en: "We wait for dawn to see better", cs: "Počkáme do svítání, ať líp vidíme", fr: "On attend l'aube pour mieux voir" }, go: "e2" }
          ]
        },
        e1: {
          end: true,
          text: { es: "Buceáis despacito y subís un cofre... ¡lleno de semillas! Semillas de loto y de trigo: el tesoro del Nilo es lo que hace crecer la vida. Las plantáis juntos y la orilla se llena de flores. ¡Gracias, {name}!", ca: "Busegeu a poc a poc i pugeu un cofre... ple de llavors! Llavors de lotus i de blat: el tresor del Nil és el que fa créixer la vida. Les planteu junts i la riba s'omple de flors. Gràcies, {name}!", en: "You dive gently and bring up a chest... full of seeds! Lotus and wheat seeds: the treasure of the Nile is what makes life grow. You plant them together and the riverbank fills with flowers. Thank you, {name}!", cs: "Opatrně se potopíte a vytáhnete truhlu... plnou semínek! Semínka lotosu a pšenice: poklad Nilu je to, z čeho roste život. Společně je zasadíte a břeh rozkvete. Děkujeme, {name}!", fr: "Vous plongez doucement et remontez un coffre... plein de graines ! Des graines de lotus et de blé : le trésor du Nil, c'est ce qui fait pousser la vie. Vous les plantez ensemble et la rive se remplit de fleurs. Merci, {name} !" }
        },
        e2: {
          end: true,
          text: { es: "Con la primera luz, el agua se vuelve transparente y en el fondo se leen unos jeroglíficos: 'El tesoro ES el río'. El Nilo da agua, comida y barcas a todo Egipto. Lo celebráis desayunando dátiles en la orilla. ¡Buen trabajo, {name}!", ca: "Amb la primera llum, l'aigua es torna transparent i al fons es llegeixen uns jeroglífics: 'El tresor ÉS el riu'. El Nil dóna aigua, menjar i barques a tot Egipte. Ho celebreu esmorzant dàtils a la riba. Bona feina, {name}!", en: "With the first light, the water turns clear and on the bottom you can read some hieroglyphs: 'The treasure IS the river'. The Nile gives water, food and boats to all of Egypt. You celebrate with a date breakfast on the bank. Great job, {name}!", cs: "S prvním světlem se voda vyjasní a na dně jsou vidět hieroglyfy: 'Poklad JE ta řeka'. Nil dává celému Egyptu vodu, jídlo i loďky. Oslavíte to snídaní z datlí na břehu. Skvělá práce, {name}!", fr: "Avec la première lumière, l'eau devient transparente et au fond on peut lire des hiéroglyphes : « Le trésor, c'EST le fleuve ». Le Nil donne de l'eau, de la nourriture et des barques à toute l'Égypte. Vous fêtez ça avec un petit-déjeuner de dattes sur la rive. Beau travail, {name} !" }
        }
      }
    }
  ],

  /* ---------- KARAOKE ---------- */
  songs: [
    { emoji: "🔺",
      title: { es: "La canción de las pirámides", ca: "La cançó de les piràmides", en: "The Pyramid Song", cs: "Písnička o pyramidách", fr: "La chanson des pyramides" },
      lines: [
        { es: "Piedra a piedra, sin parar,", ca: "Pedra a pedra, sense parar,", en: "Stone by stone we build all day,", cs: "Kámen ke kameni dáme,", fr: "Pierre après pierre, sans nous presser," },
        { es: "una montaña vamos a levantar.", ca: "una muntanya anem a aixecar.", en: "a mountain grows beside the way.", cs: "velkou horu uděláme.", fr: "une montagne on va dresser." },
        { es: "El faraón lo viene a mirar,", ca: "El faraó ho ve a mirar,", en: "The pharaoh comes to see the sight,", cs: "Faraon se přijde podívat,", fr: "Le pharaon vient regarder," },
        { es: "¡y de contento se pone a bailar!", ca: "i de content es posa a ballar!", en: "and dances with all his might!", cs: "a hned začne tancovat.", fr: "et se met à danser !" },
        { es: "Cuatro lados tiene ya,", ca: "Quatre costats té ja,", en: "Four big sides stand strong and tall,", cs: "Čtyři stěny, jedna špička,", fr: "Quatre côtés, une pointe d'or," },
        { es: "y una punta que al cielo va.", ca: "i una punta que al cel se'n va.", en: "one shiny tip above them all.", cs: "třpytí se jak sluníčka.", fr: "qui brille encore et encore." },
        { es: "Cuando la luna sale a pasear,", ca: "Quan la lluna surt a passejar,", en: "And when the moon comes out to gleam,", cs: "Když měsíc pluje nad Nilem,", fr: "Quand la lune vient se promener," },
        { es: "las pirámides se ponen a soñar.", ca: "les piràmides es posen a somiar.", en: "the pyramids begin to dream.", cs: "pyramidy usnou spolu s ním.", fr: "les pyramides se mettent à rêver." }
      ] },
    { emoji: "🌙",
      title: { es: "La nana del Nilo", ca: "La non-non del Nil", en: "The Nile Lullaby", cs: "Ukolébavka od Nilu", fr: "La berceuse du Nil" },
      lines: [
        { es: "Duerme, duerme, cocodrilo,", ca: "Dorm, dorm, cocodril,", en: "Sleep, little crocodile, sleep,", cs: "Hajej, dadej, krokodýlku,", fr: "Dors, dors, petit crocodile," },
        { es: "en la orilla del gran Nilo.", ca: "a la vora del gran Nil.", en: "the Nile is rocking, soft and deep.", cs: "řeka houpá tvou postýlku.", fr: "sur la rive du grand Nil." },
        { es: "La barquita se mece ya,", ca: "La barqueta es gronxa ja,", en: "The papyrus boat sways to and fro,", cs: "Loďka se houpá sem a tam,", fr: "La petite barque se balance," },
        { es: "el hipopótamo soñando está.", ca: "l'hipopòtam somiant està.", en: "the hippo dreams in the water below.", cs: "hrošík dřímá, není sám.", fr: "l'hippopotame rêve en silence." },
        { es: "Los papiros susurran bajito,", ca: "Els papirs canten fluixet,", en: "The reeds all whisper: hush now, hush,", cs: "Rákosí ti šeptá: pšš,", fr: "Les papyrus font un doux bruit," },
        { es: "y la luna te da un besito.", ca: "la lluna et fa un petonet.", en: "the moon is glowing, soft as plush.", cs: "měsíc svítí, ty už spíš.", fr: "la lune éclaire ton abri." },
        { es: "Cierra los ojos, chiquitín,", ca: "Tanca els ulls, petitó,", en: "Close your eyes, my little friend,", cs: "Zavři očka, už je čas,", fr: "Ferme les yeux, mon tout petit," },
        { es: "que el río canta hasta el fin.", ca: "que el riu et canta una cançó.", en: "the river sings until the end.", cs: "Nil ti zpívá zas a zas.", fr: "le fleuve chante toute la nuit." }
      ] },
    { emoji: "🪲",
      title: { es: "El baile del escarabajo", ca: "El ball de l'escarabat", en: "The Scarab Dance", cs: "Broučkův tanec", fr: "La danse du scarabée" },
      lines: [
        { es: "Baila, baila, escarabajo,", ca: "Balla, balla, escarabat,", en: "Dance, dance, little scarab, dance,", cs: "Brouček válí kuličku,", fr: "Danse, danse, scarabée," },
        { es: "de arriba abajo, ¡qué trabajo!", ca: "que el ball ja ha començat!", en: "give those tiny legs a chance!", cs: "tančí si svou písničku.", fr: "sur le sable tout doré." },
        { es: "Rueda su bolita al compás,", ca: "Roda la boleta, roda-la ja,", en: "He rolls his ball around the sand,", cs: "Nožičkama dupy dup,", fr: "Il roule sa petite boule," },
        { es: "un pasito alante y otro atrás.", ca: "un passet aquí, un passet allà.", en: "the happiest beetle in the land.", cs: "zatočí se: hola hup!", fr: "et tout le désert roucoule." },
        { es: "Mueve las patitas, una, dos, tres,", ca: "Mou les potetes, una, dues, tres,", en: "Wiggle to the left, wiggle to the right,", cs: "Jedna, dva a tři a čtyři,", fr: "Petites pattes, une, deux, trois," },
        { es: "y da una vuelta del revés.", ca: "i fa una volta del revés.", en: "spin around with all your might.", cs: "všichni brouci k tanci míří.", fr: "il tourne et saute avec joie." },
        { es: "Todo Egipto viene a bailar,", ca: "Tot Egipte ve a ballar,", en: "All of Egypt claps along,", cs: "Celý Egypt tleská rád,", fr: "Toute l'Égypte vient danser," },
        { es: "¡con el escarabajo sin parar!", ca: "amb l'escarabat sense parar!", en: "to the scarab's dancing song!", cs: "s broučkem chce si tancovat.", fr: "avec le scarabée, sans s'arrêter !" }
      ] }
  ],

  /* ---------- TRADUCTOR ---------- */
  translator: {
    words: [
      W_COMMON.hola,
      W_COMMON.adios,
      W_COMMON.amigo,
      { k: "faraon", emoji: "👑", name: { es: "faraón", ca: "faraó", en: "pharaoh", cs: "faraon", fr: "pharaon" } },
      { k: "piramide", emoji: "🔺", name: { es: "pirámide", ca: "piràmide", en: "pyramid", cs: "pyramida", fr: "pyramide" } },
      { k: "gato", emoji: "🐈", name: { es: "gato", ca: "gat", en: "cat", cs: "kočka", fr: "chat" } },
      { k: "rio", emoji: "🌊", name: { es: "río", ca: "riu", en: "river", cs: "řeka", fr: "fleuve" } },
      { k: "sol", emoji: "☀️", name: { es: "sol", ca: "sol", en: "sun", cs: "slunce", fr: "soleil" } },
      W_COMMON.robot,
      W_COMMON.mama,
      W_COMMON.papa,
      W_COMMON.casa,
      W_COMMON.agua,
      W_COMMON.comida,
      W_COMMON.perro,
      { k: "tesoro", emoji: "💎", name: { es: "tesoro", ca: "tresor", en: "treasure", cs: "poklad", fr: "trésor" } },
      W_COMMON.grande,
      W_COMMON.pequeno,
      W_COMMON.bonito,
      W_COMMON.amor,
      W_COMMON.gracias,
      W_COMMON.si,
      W_COMMON.no,
      W_COMMON.dormir,
      { k: "momia", emoji: "🛌", name: { es: "momia", ca: "mòmia", en: "mummy", cs: "mumie", fr: "momie" } }
    ],
    langs: [
      { id: "jeroglifico", emoji: "📜",
        name: { es: "Jeroglífico", ca: "Jeroglífic", en: "Hieroglyphic", cs: "Hieroglyfština", fr: "Hiéroglyphique" },
        greeting: { es: "En jeroglífico no se habla: ¡se dibuja! Cada palabra son dos dibujitos.", ca: "En jeroglífic no es parla: es dibuixa! Cada paraula són dos dibuixets.", en: "In Hieroglyphic you do not talk: you draw! Every word is two little drawings.", cs: "Hieroglyfsky se nemluví: kreslí se! Každé slovo jsou dva obrázky.", fr: "En hiéroglyphique, on ne parle pas : on dessine ! Chaque mot, c'est deux petits dessins." },
        dict: { hola: "👋☀️", adios: "👋🌙", amigo: "🤝🌴", faraon: "👑🦅", piramide: "🔺🔺", gato: "🐈✨", rio: "🌊🌊", sol: "☀️🙌", robot: "🤖📜", mama: "👩❤️", papa: "👨❤️", casa: "🏠🌴", agua: "💧🏺", comida: "🍞😋", perro: "🐕🌙", tesoro: "📦✨", grande: "🐘🔺", pequeno: "🐜🌸", bonito: "🌺👁️", amor: "❤️🪶", gracias: "🙏☀️", si: "👍✨", no: "👎🌵", dormir: "😴🌙", momia: "😴📜" } },
      { id: "gatotemplo", emoji: "🐈",
        name: { es: "Gato del templo", ca: "Gat del temple", en: "Temple Cat", cs: "Chrámová kočkovština", fr: "Chat du temple" },
        greeting: { es: "Miaaau... el gato del templo habla con maullidos elegantes y un poquito presumidos.", ca: "Miaaau... el gat del temple parla amb miols elegants i una mica presumits.", en: "Meeeow... the temple cat speaks in elegant, slightly show-offy meows.", cs: "Mňaaau... chrámová kočka mluví elegantním a trošku nafoukaným mňoukáním.", fr: "Miaaaou... le chat du temple parle avec des miaulements élégants et un petit peu prétentieux." },
        dict: { hola: "miaú", adios: "miu-miuu", amigo: "prru-miau", faraon: "miau-rrráu", piramide: "mia-mia-miau", gato: "miu", rio: "miau-glub", sol: "mmmiau", robot: "mek-miau", mama: "miama", papa: "miapa", casa: "miau-mau", agua: "glub-miu", comida: "ñam-miau", perro: "miau-guau", tesoro: "miau-brrril", grande: "miaaaau", pequeno: "mini-miu", bonito: "prr-prr-miu", amor: "mrrru-miau", gracias: "miau-prrru", si: "miup", no: "miop", dormir: "prrr-zzz", momia: "miau-zzz" } },
      { id: "momia", emoji: "😴",
        name: { es: "Momia", ca: "Mòmia", en: "Mummy", cs: "Mumijština", fr: "Momie" },
        greeting: { es: "Mmmh... la momia habla bajito y medio dormida. Traduce con cariño, sin despertarla del todo.", ca: "Mmmh... la mòmia parla fluixet i mig adormida. Tradueix amb carinyo, sense despertar-la del tot.", en: "Mmmh... the mummy speaks softly and half asleep. Translate gently, without fully waking her.", cs: "Mmmh... mumie mluví potichu a v polospánku. Překládej jemně, ať ji úplně nevzbudíš.", fr: "Mmmh... la momie parle tout bas et à moitié endormie. Traduis doucement, sans la réveiller tout à fait." },
        dict: { hola: "mmmh-mh", adios: "mmmh-zzz", amigo: "mh-mh-mmh", faraon: "MMMMH", piramide: "mm-mm-mmm", gato: "mmmiu", rio: "mmm-glub", sol: "mmmah", robot: "mmm-bip", mama: "mmmama", papa: "mmmapa", casa: "mmm-mmh-mmm", agua: "glu-mmm", comida: "ñammm", perro: "wau-mmm", tesoro: "ooh-mmm", grande: "mmmmmmh", pequeno: "mh", bonito: "mmmh-ahh", amor: "mmmuah", gracias: "mmh-mmh", si: "mhm", no: "mm-mm", dormir: "zzz-mmm", momia: "mmm-zzz-mmm" } },
      { id: "camello", emoji: "🐫",
        name: { es: "Camello", ca: "Camell", en: "Camel", cs: "Velbloudština", fr: "Chameau" },
        greeting: { es: "¡Brrfff! Así saluda el camello, sacudiendo los morros. Es un idioma con mucho aire.", ca: "Brrfff! Així saluda el camell, sacsejant els morros. És un idioma amb molt d'aire.", en: "Brrfff! That is how the camel says hello, shaking his lips. It is a very windy language.", cs: "Brrfff! Tak zdraví velbloud, když třepe pysky. Je to jazyk plný vzduchu.", fr: "Brrfff ! C'est comme ça que le chameau dit bonjour, en secouant les babines. C'est une langue avec beaucoup d'air." },
        dict: { hola: "brrfff", adios: "brf-brf", amigo: "brrr-fff", faraon: "brrfff-hmpf", piramide: "brf-brf-brf", gato: "brfiau", rio: "brrr-splsh", sol: "fff-fff", robot: "brrfip", mama: "brfma", papa: "brfpa", casa: "hmpf-brf", agua: "slurp-brf", comida: "ñam-brfff", perro: "brf-wau", tesoro: "ooh-brfff", grande: "BRRRFFF", pequeno: "brfi", bonito: "fff-brfi", amor: "brrfff-mua", gracias: "hmpf-fff", si: "frrp", no: "hmpf", dormir: "brf-zzz", momia: "zzz-brfff" } }
    ]
  },

  /* ---------- MAPA DE EXPLORACIÓN ---------- */
  explore: {
    width: 2600, height: 1100, stars: false,
    bgCss: "radial-gradient(ellipse 40% 30% at 85% 12%, rgba(255,241,118,.6), transparent), linear-gradient(180deg,#9fd8f2 0%,#ffe3a0 34%,#f6c35c 58%,#e6a817 80%,#c98a3b 100%)",
    cats: [
      { id: "piramides", emoji: "🔺", x: 120, name: { es: "Las pirámides", ca: "Les piràmides", en: "The pyramids", cs: "Pyramidy", fr: "Les pyramides" } },
      { id: "nilo", emoji: "🌊", x: 1100, name: { es: "El Nilo", ca: "El Nil", en: "The Nile", cs: "Nil", fr: "Le Nil" } },
      { id: "templo", emoji: "🏛️", x: 1900, name: { es: "El templo", ca: "El temple", en: "The temple", cs: "Chrám", fr: "Le temple" } }
    ],
    pois: [
      { cat: "piramides", emoji: "🔺", x: 180, y: 480, size: 3,
        name: { es: "La Gran Pirámide", ca: "La Gran Piràmide", en: "The Great Pyramid", cs: "Velká pyramida", fr: "La Grande Pyramide" },
        fact: { es: "La Gran Pirámide de Keops tiene 4500 años y fue el edificio más alto del mundo durante muchísimo tiempo.", ca: "La Gran Piràmide de Kheops té 4500 anys i va ser l'edifici més alt del món durant moltíssim temps.", en: "The Great Pyramid of Khufu is 4,500 years old and was the tallest building in the world for a very long time.", cs: "Velká pyramida faraona Cheopse je stará 4500 let a dlouho byla nejvyšší stavbou na světě.", fr: "La Grande Pyramide de Khéops a 4 500 ans et a longtemps été le plus haut bâtiment du monde." } },
      { cat: "piramides", emoji: "🦁", x: 400, y: 700, size: 2,
        name: { es: "La esfinge", ca: "L'esfinx", en: "The sphinx", cs: "Sfinga", fr: "Le sphinx" },
        fact: { es: "La esfinge tiene cuerpo de león y cabeza de persona. Lleva milenios vigilando las pirámides sin pestañear.", ca: "L'esfinx té cos de lleó i cap de persona. Porta mil·lennis vigilant les piràmides sense parpellejar.", en: "The sphinx has a lion's body and a person's head. It has guarded the pyramids for millennia without blinking.", cs: "Sfinga má tělo lva a hlavu člověka. Už tisíce let hlídá pyramidy a ani nemrkne.", fr: "Le sphinx a un corps de lion et une tête de personne. Il garde les pyramides depuis des millénaires sans cligner des yeux." } },
      { cat: "piramides", emoji: "💎", x: 330, y: 300,
        name: { es: "La cámara del tesoro", ca: "La cambra del tresor", en: "The treasure chamber", cs: "Pokladnice", fr: "La chambre au trésor" },
        fact: { es: "Dentro de las pirámides hay pasillos secretos y cámaras escondidas con tesoros para el faraón.", ca: "Dins de les piràmides hi ha passadissos secrets i cambres amagades amb tresors per al faraó.", en: "Inside the pyramids there are secret corridors and hidden chambers with treasures for the pharaoh.", cs: "Uvnitř pyramid jsou tajné chodby a skryté komory s poklady pro faraona.", fr: "À l'intérieur des pyramides, il y a des couloirs secrets et des chambres cachées avec des trésors pour le pharaon." } },
      { cat: "piramides", emoji: "🗼", x: 600, y: 420,
        name: { es: "El obelisco", ca: "L'obelisc", en: "The obelisk", cs: "Obelisk", fr: "L'obélisque" },
        fact: { es: "El obelisco es una aguja gigante de piedra llena de jeroglíficos. Su punta saluda al sol.", ca: "L'obelisc és una agulla gegant de pedra plena de jeroglífics. La seva punta saluda el sol.", en: "The obelisk is a giant stone needle covered in hieroglyphs. Its tip says hello to the sun.", cs: "Obelisk je obří kamenná jehla plná hieroglyfů. Její špička zdraví slunce.", fr: "L'obélisque est une aiguille géante de pierre couverte de hiéroglyphes. Sa pointe salue le soleil." } },
      { cat: "piramides", emoji: "🐫", x: 780, y: 640,
        name: { es: "El camello", ca: "El camell", en: "The camel", cs: "Velbloud", fr: "Le chameau" },
        fact: { es: "Al camello lo llaman el barco del desierto: aguanta días sin beber y sus jorobas guardan reservas de energía.", ca: "Al camell li diuen el vaixell del desert: aguanta dies sense beure i els seus geps guarden reserves d'energia.", en: "The camel is called the ship of the desert: it can go days without drinking and its humps store energy.", cs: "Velbloudovi se říká loď pouště: vydrží celé dny bez pití a v hrbech má zásoby energie.", fr: "On appelle le chameau le bateau du désert : il tient des jours sans boire et ses bosses gardent des réserves d'énergie." } },
      { cat: "nilo", emoji: "🛶", x: 1150, y: 540,
        name: { es: "La barca de papiro", ca: "La barca de papir", en: "The papyrus boat", cs: "Papyrová loďka", fr: "La barque de papyrus" },
        fact: { es: "Los egipcios ataban manojos de papiro y hacían barcas ligeras para pescar y viajar por el Nilo.", ca: "Els egipcis lligaven manats de papir i feien barques lleugeres per pescar i viatjar pel Nil.", en: "The Egyptians tied bundles of papyrus together to make light boats for fishing and travelling on the Nile.", cs: "Egypťané svazovali otépky papyru a stavěli z nich lehké loďky na rybaření a cesty po Nilu.", fr: "Les Égyptiens attachaient des bottes de papyrus pour faire des barques légères, pour pêcher et voyager sur le Nil." } },
      { cat: "nilo", emoji: "🐊", x: 1300, y: 760,
        name: { es: "El cocodrilo", ca: "El cocodril", en: "The crocodile", cs: "Krokodýl", fr: "Le crocodile" },
        fact: { es: "La mamá cocodrilo lleva a sus crías dentro de la boca, con muchísimo cuidado, como en un taxi blandito.", ca: "La mare cocodril porta les seves cries dins de la boca, amb moltíssim de compte, com en un taxi tou.", en: "The crocodile mum carries her babies inside her mouth, ever so gently, like a soft little taxi.", cs: "Krokodýlí maminka nosí svá mláďata v tlamě, hrozně opatrně, jako v měkkém taxíku.", fr: "La maman crocodile porte ses bébés dans sa gueule, tout doucement, comme dans un petit taxi moelleux." } },
      { cat: "nilo", emoji: "🦛", x: 1460, y: 620,
        name: { es: "El hipopótamo", ca: "L'hipopòtam", en: "The hippopotamus", cs: "Hroch", fr: "L'hippopotame" },
        fact: { es: "El hipopótamo pasa el día en el agua, pero casi no sabe nadar: ¡va trotando por el fondo del río!", ca: "L'hipopòtam passa el dia a l'aigua, però gairebé no sap nedar: va trotant pel fons del riu!", en: "The hippo spends all day in the water, but it can hardly swim: it trots along the bottom of the river!", cs: "Hroch tráví celý den ve vodě, ale skoro neumí plavat: po dně řeky si to cupitá!", fr: "L'hippopotame passe la journée dans l'eau, mais il sait à peine nager : il trotte au fond du fleuve !" } },
      { cat: "nilo", emoji: "🌿", x: 1050, y: 800,
        name: { es: "Los papiros", ca: "Els papirs", en: "The papyrus reeds", cs: "Papyrus", fr: "Les papyrus" },
        fact: { es: "Con el papiro los egipcios hacían papel, barcas, cestas y hasta sandalias. ¡Una planta para todo!", ca: "Amb el papir els egipcis feien paper, barques, cistelles i fins i tot sandàlies. Una planta per a tot!", en: "With papyrus the Egyptians made paper, boats, baskets and even sandals. One plant for everything!", cs: "Z papyru dělali Egypťané papír, loďky, košíky a dokonce sandály. Jedna rostlina na všechno!", fr: "Avec le papyrus, les Égyptiens faisaient du papier, des barques, des paniers et même des sandales. Une plante pour tout !" } },
      { cat: "nilo", emoji: "🐦", x: 1620, y: 420,
        name: { es: "El ibis", ca: "L'ibis", en: "The ibis", cs: "Ibis", fr: "L'ibis" },
        fact: { es: "El ibis pasea elegante por la orilla con su pico curvado. Los egipcios lo tenían por un pájaro muy sabio.", ca: "L'ibis passeja elegant per la riba amb el seu bec corbat. Els egipcis el consideraven un ocell molt savi.", en: "The ibis struts elegantly along the bank with its curved beak. The Egyptians thought it was a very wise bird.", cs: "Ibis se elegantně prochází po břehu se zahnutým zobákem. Egypťané ho měli za velmi moudrého ptáka.", fr: "L'ibis se promène élégamment sur la rive avec son bec courbé. Les Égyptiens le voyaient comme un oiseau très sage." } },
      { cat: "templo", emoji: "📜", x: 1950, y: 350,
        name: { es: "Los jeroglíficos", ca: "Els jeroglífics", en: "The hieroglyphs", cs: "Hieroglyfy", fr: "Les hiéroglyphes" },
        fact: { es: "Los jeroglíficos son dibujos que hablan: pájaros, ojos, olas... Hay más de 700 signos distintos.", ca: "Els jeroglífics són dibuixos que parlen: ocells, ulls, ones... Hi ha més de 700 signes diferents.", en: "Hieroglyphs are drawings that talk: birds, eyes, waves... There are more than 700 different signs.", cs: "Hieroglyfy jsou obrázky, které mluví: ptáčci, oči, vlnky... Existuje jich přes 700 různých.", fr: "Les hiéroglyphes sont des dessins qui parlent : oiseaux, yeux, vagues... Il y a plus de 700 signes différents." } },
      { cat: "templo", emoji: "👑", x: 2120, y: 560, size: 2,
        name: { es: "El faraón", ca: "El faraó", en: "The pharaoh", cs: "Faraon", fr: "Le pharaon" },
        fact: { es: "El faraón mandaba en todo Egipto y llevaba una corona doble. También hubo mujeres faraón, como Hatshepsut.", ca: "El faraó manava a tot Egipte i portava una corona doble. També hi va haver dones faraó, com Hatshepsut.", en: "The pharaoh ruled all of Egypt and wore a double crown. There were women pharaohs too, like Hatshepsut.", cs: "Faraon vládl celému Egyptu a nosil dvojitou korunu. Vládly i ženy, třeba Hatšepsut.", fr: "Le pharaon commandait toute l'Égypte et portait une double couronne. Il y a eu aussi des femmes pharaons, comme Hatchepsout." } },
      { cat: "templo", emoji: "✍️", x: 2280, y: 390,
        name: { es: "El escriba", ca: "L'escriba", en: "The scribe", cs: "Písař", fr: "Le scribe" },
        fact: { es: "Muy poca gente sabía escribir. Los escribas iban a la escuela muchos años para aprender todos los signos.", ca: "Molt poca gent sabia escriure. Els escribes anaven a l'escola molts anys per aprendre tots els signes.", en: "Very few people could write. Scribes went to school for many years to learn all the signs.", cs: "Psát umělo jen málo lidí. Písaři chodili do školy mnoho let, aby se naučili všechny znaky.", fr: "Très peu de gens savaient écrire. Les scribes allaient à l'école pendant des années pour apprendre tous les signes." } },
      { cat: "templo", emoji: "🐈", x: 2010, y: 760,
        name: { es: "El gato sagrado", ca: "El gat sagrat", en: "The sacred cat", cs: "Posvátná kočka", fr: "Le chat sacré" },
        fact: { es: "Los gatos eran sagrados: protegían el grano de los ratones y las familias los mimaban como a reyes.", ca: "Els gats eren sagrats: protegien el gra dels ratolins i les famílies els mimaven com a reis.", en: "Cats were sacred: they kept the mice away from the grain and families pampered them like kings.", cs: "Kočky byly posvátné: chránily obilí před myšmi a rodiny je rozmazlovaly jako krále.", fr: "Les chats étaient sacrés : ils protégeaient le grain des souris et les familles les chouchoutaient comme des rois." } },
      { cat: "templo", emoji: "🪲", x: 2380, y: 700,
        name: { es: "El escarabajo", ca: "L'escarabat", en: "The scarab", cs: "Skarab", fr: "Le scarabée" },
        fact: { es: "El escarabajo era el símbolo del sol que sale cada mañana. La gente llevaba escarabajos de la suerte.", ca: "L'escarabat era el símbol del sol que surt cada matí. La gent portava escarabats de la sort.", en: "The scarab was the symbol of the sun rising every morning. People carried lucky scarabs.", cs: "Skarab byl symbolem slunce, které každé ráno vychází. Lidé nosili brouky pro štěstí.", fr: "Le scarabée était le symbole du soleil qui se lève chaque matin. Les gens portaient des scarabées porte-bonheur." } },
      { cat: "templo", emoji: "😴", x: 2490, y: 480,
        name: { es: "La momia dormilona", ca: "La mòmia dormilega", en: "The sleepy mummy", cs: "Ospalá mumie", fr: "La momie dormeuse" },
        fact: { es: "Las momias llevan miles de años durmiendo la siesta envueltas en vendas suaves. Habla bajito, ¡shhh!", ca: "Les mòmies porten milers d'anys fent la migdiada embolicades amb benes suaus. Parla fluixet, xxt!", en: "Mummies have been napping for thousands of years wrapped in soft bandages. Speak softly, shhh!", cs: "Mumie už tisíce let podřimují zabalené v měkkých obvazech. Mluv potichu, pšš!", fr: "Les momies font la sieste depuis des milliers d'années, enveloppées de bandelettes douces. Parle tout bas, chut !" } }
    ],
    /* El paisaje: desierto dorado, tres pirámides, la esfinge,
       el Nilo cruzando con papiros, palmeras y un sol enorme. */
    /* El paisaje: el sol grande sobre las dunas, las pirámides de Giza a
       distintas distancias, el Nilo cruzando el mapa con sus faluchos y sus
       juncos, los campos de cultivo verdes y, a la derecha, el templo con
       columnas de capitel de papiro y muros con cenefas geométricas. */
    deco: function () {
      let s = "";
      /* las cajas de los iconos: el decorado se aparta de ellas */
      const cajas = [[105, 424, 150, 112], [330, 656, 140, 88], [294, 260, 72, 80], [576, 365, 48, 110], [732, 597, 96, 86],
        [1100, 498, 100, 84], [1244, 737, 112, 46], [1415, 588, 90, 64], [1016, 763, 68, 74], [1590, 388, 60, 64],
        [1911, 318, 78, 64], [2083, 506, 74, 108], [2241, 355, 78, 70], [1989, 731, 42, 58], [2353, 680, 54, 40],
        [2457, 434, 66, 92], [1214, 330, 52, 80], [2122, 149, 56, 82]];
      const libre = (x, y, w, h) => !cajas.some(c => {
        const mx = c[2] * .4 + 16, my = c[3] * .4 + 16;
        return x < c[0] + c[2] + mx && x + w > c[0] - mx && y < c[1] + c[3] + my && y + h > c[1] - my;
      });
      /* una pirámide con su cara iluminada y su cara en sombra */
      const piramide = (cx, cima, base, medio, o) => `<g opacity="${o}">
        <path d="M${cx - medio} ${base} L${cx} ${cima} L${cx + medio} ${base} Z" fill="#b98a41"/>
        <path d="M${cx} ${cima} L${cx + medio} ${base} L${cx} ${base} Z" fill="#e6bd6e"/>
        <path d="M${cx} ${cima} L${cx + medio * .16} ${base} L${cx - medio * .16} ${base} Z" fill="rgba(255,238,190,.28)"/></g>`;
      /* una columna con capitel de papiro */
      const columna = (cx, arriba, abajo, r) => {
        let c = `<rect x="${cx - r * 1.62}" y="${arriba - 16}" width="${r * 3.24}" height="18" rx="3" fill="#d3b077"/>
          <path d="M${cx - r} ${arriba + 62} Q${cx - r * 1.96} ${arriba + 26} ${cx - r * 1.5} ${arriba + 2} L${cx + r * 1.5} ${arriba + 2} Q${cx + r * 1.96} ${arriba + 26} ${cx + r} ${arriba + 62} Z" fill="url(#egpXpiedra)"/>
          <rect x="${cx - r}" y="${arriba + 58}" width="${r * 2}" height="${abajo - arriba - 84}" fill="url(#egpXpiedra)"/>
          <rect x="${cx - r * 1.4}" y="${abajo - 26}" width="${r * 2.8}" height="26" rx="4" fill="#d3b077"/>
          <rect x="${cx - r}" y="${arriba + 56}" width="${r * 2}" height="10" fill="#c39c62"/>`;
        for (let i = -2; i <= 2; i++) c += `<path d="M${cx + i * r * .62} ${arriba + 6} L${cx + i * r * .42} ${arriba + 58}" stroke="rgba(150,110,58,.4)" stroke-width="4"/>`;
        for (let i = -1; i <= 1; i++) c += `<path d="M${cx + i * r * .58} ${arriba + 70} L${cx + i * r * .58} ${abajo - 32}" stroke="rgba(150,110,58,.28)" stroke-width="4"/>`;
        return `<g>${c}</g>`;
      };
      /* degradados propios, con prefijo egpX para no chocar con los iconos */
      s += `<defs>
        <linearGradient id="egpXcielo" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#8fd3f0"/><stop offset="34%" stop-color="#c8e6ef"/><stop offset="62%" stop-color="#ffe3ac"/><stop offset="100%" stop-color="#ffcf85"/></linearGradient>
        <radialGradient id="egpXsol" cx="42%" cy="38%" r="60%"><stop offset="0%" stop-color="#fffdf0"/><stop offset="100%" stop-color="#ffca4a"/></radialGradient>
        <linearGradient id="egpXduna" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f2cf8b"/><stop offset="100%" stop-color="#d5a355"/></linearGradient>
        <linearGradient id="egpXduna2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e0b269"/><stop offset="100%" stop-color="#bd8940"/></linearGradient>
        <linearGradient id="egpXcampo" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8cc45f"/><stop offset="100%" stop-color="#498b3d"/></linearGradient>
        <linearGradient id="egpXnilo" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#6fc9ea"/><stop offset="55%" stop-color="#2f9fd2"/><stop offset="100%" stop-color="#166f9f"/></linearGradient>
        <linearGradient id="egpXpiedra" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#e9d3a2"/><stop offset="48%" stop-color="#f3e2ba"/><stop offset="100%" stop-color="#d0ac70"/></linearGradient>
        <linearGradient id="egpXcaliza" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f0dcae"/><stop offset="100%" stop-color="#cfae73"/></linearGradient>
        <linearGradient id="egpXpatio" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e5cd9a"/><stop offset="100%" stop-color="#c6a267"/></linearGradient>
      </defs>`;
      /* ---------- CIELO: el sol grande, nubes finas y aves ---------- */
      s += `<rect x="0" y="0" width="2600" height="1100" fill="url(#egpXcielo)"/>
        <g transform="translate(2380 168)"><circle r="186" fill="#ffca4a" opacity=".14"><animate attributeName="r" values="186;204;186" dur="11s" repeatCount="indefinite"/></circle>
        <circle r="140" fill="#ffca4a" opacity=".2"/><circle r="104" fill="url(#egpXsol)"/><circle cx="-32" cy="-30" r="24" fill="rgba(255,255,255,.5)"/></g>`;
      [[560, 176, 1.1, .7], [1180, 132, .9, .6], [1720, 196, 1.2, .55], [220, 250, .7, .5]].forEach(n => {
        s += `<g opacity="${n[3]}" transform="translate(${n[0]} ${n[1]}) scale(${n[2]})" fill="#fff">
          <ellipse cx="0" cy="0" rx="112" ry="16"/><ellipse cx="-64" cy="14" rx="70" ry="11"/><ellipse cx="72" cy="12" rx="58" ry="10"/></g>`;
      });
      s += `<g stroke="rgba(120,86,44,.42)" stroke-width="4" fill="none" stroke-linecap="round">
        <path d="M820 268 q14 -12 28 0 q14 -12 28 0 M940 316 q12 -10 24 0 q12 -10 24 0 M1500 258 q13 -11 26 0 q13 -11 26 0 M1620 306 q11 -9 22 0 q11 -9 22 0"/></g>
        <g><path d="M-26 0 q13 -14 26 0 q13 -14 26 0" stroke="rgba(120,86,44,.5)" stroke-width="4.4" fill="none" stroke-linecap="round">
        <animate attributeName="d" values="M-26 0 q13 -14 26 0 q13 -14 26 0;M-26 0 q13 7 26 0 q13 7 26 0;M-26 0 q13 -14 26 0 q13 -14 26 0" dur="1.7s" repeatCount="indefinite"/></path>
        <animateMotion dur="42s" repeatCount="indefinite" path="M -120 234 Q 700 176 1400 236 Q 2000 286 2740 214"/></g>`;
      /* ---------- EL DESIERTO DEL FONDO Y LAS PIRÁMIDES DE GIZA ---------- */
      s += `<path d="M0 470 Q300 424 620 462 Q940 500 1260 456 Q1600 410 1940 452 Q2280 494 2600 448 L2600 700 L0 700 Z" fill="url(#egpXduna)" opacity=".62"/>`;
      s += piramide(900, 466, 604, 112, ".4") + piramide(1010, 418, 646, 156, ".62") + piramide(760, 356, 646, 202, ".85") + piramide(430, 388, 626, 152, ".72");
      s += `<path d="M0 560 Q260 512 560 552 Q860 592 1180 548 Q1520 500 1860 546 Q2200 592 2600 542 L2600 780 L0 780 Z" fill="url(#egpXduna)"/>
        <path d="M0 560 Q260 512 560 552 Q860 592 1180 548 Q1520 500 1860 546 Q2200 592 2600 542 L2600 578 Q2200 628 1860 582 Q1520 536 1180 584 Q860 628 560 588 Q260 548 0 596 Z" fill="rgba(255,255,255,.22)"/>`;
      s += `<g stroke="rgba(150,102,44,.24)" stroke-width="5" fill="none" stroke-linecap="round">`;
      for (let i = 0; i < 18; i++) {
        const x = 30 + i * 146, y = 622 + ((i * 53) % 96);
        if (libre(x - 6, y - 8, 76, 16)) s += `<path d="M${x} ${y} q22 -10 44 0"/>`;
      }
      s += `</g>`;
      /* ---------- LOS CAMPOS DE CULTIVO, en la orilla de allá ---------- */
      s += `<path d="M-40 812 Q220 796 420 762 Q620 728 780 600 Q930 478 1050 410 Q1150 354 1240 326 Q1360 294 1460 302 Q1560 310 1620 356 Q1740 410 1830 466 Q1886 502 1900 550
        L1900 640 Q1886 592 1830 556 Q1740 500 1620 446 Q1560 400 1460 392 Q1360 384 1240 416 Q1150 444 1050 500 Q930 570 780 692 Q620 820 420 856 Q220 890 -40 906 Z" fill="url(#egpXcampo)"/>`;
      s += `<g stroke="rgba(40,90,36,.35)" stroke-width="4" fill="none">
        <path d="M1300 336 Q1420 314 1520 328 M1180 382 Q1300 350 1420 344 M1000 462 Q1120 420 1240 384 M840 566 Q950 500 1060 448 M660 720 Q760 654 860 588 M420 802 Q560 778 660 736 M120 856 Q280 838 400 812"/></g>
        <g fill="#3f7f36" opacity=".7"><ellipse cx="1380" cy="326" rx="30" ry="9"/><ellipse cx="1120" cy="418" rx="34" ry="10"/><ellipse cx="880" cy="546" rx="36" ry="11"/><ellipse cx="560" cy="754" rx="40" ry="12"/><ellipse cx="220" cy="826" rx="42" ry="12"/></g>`;
      /* ---------- EL NILO: el agua, los reflejos y las ondas ---------- */
      s += `<path d="M-40 906 Q220 890 420 856 Q620 820 780 692 Q930 570 1050 500 Q1150 444 1240 416 Q1360 384 1460 392 Q1560 400 1620 446 Q1740 500 1830 556 Q1886 592 1900 640
        Q1830 668 1750 700 Q1650 740 1560 770 Q1430 806 1300 800 Q1160 794 1050 843 Q880 920 700 1010 Q340 1080 -40 1100 Z" fill="url(#egpXnilo)"/>
        <path d="M-40 906 Q220 890 420 856 Q620 820 780 692 Q930 570 1050 500 Q1150 444 1240 416 Q1360 384 1460 392 Q1560 400 1620 446 Q1740 500 1830 556 Q1886 592 1900 640
        Q1880 648 1850 660 Q1770 594 1650 522 Q1540 458 1440 452 Q1340 448 1240 476 Q1140 508 1030 574 Q900 654 760 754 Q600 866 400 900 Q200 934 -40 946 Z" fill="#8ad8f2" opacity=".5"/>`;
      s += `<g stroke="rgba(255,255,255,.55)" stroke-width="5" fill="none" stroke-linecap="round">
        <path d="M980 620 q26 -12 52 0 M1140 560 q26 -12 52 0 M1330 512 q26 -12 52 0 M1520 528 q26 -12 52 0 M1700 592 q26 -12 52 0
          M860 742 q30 -13 60 0 M1090 694 q30 -13 60 0 M1400 690 q30 -13 60 0 M1640 700 q30 -13 60 0
          M300 976 q34 -14 68 0 M620 936 q34 -14 68 0 M960 918 q34 -14 68 0 M120 1046 q34 -14 68 0"><animate attributeName="opacity" values=".8;.34;.8" dur="5.4s" repeatCount="indefinite"/></path></g>`;
      /* el sol reflejado en el agua, en trazos anchos */
      s += `<g fill="#fff" opacity=".2"><ellipse cx="1720" cy="628" rx="90" ry="8"/><ellipse cx="1620" cy="676" rx="120" ry="9"/>
        <ellipse cx="1500" cy="736" rx="150" ry="10"/><ellipse cx="1330" cy="792" rx="170" ry="11"/></g>`;
      /* flores de loto flotando */
      [[1180, 636], [1560, 618], [980, 792], [1700, 664]].forEach((f, i) => {
        if (!libre(f[0] - 24, f[1] - 20, 48, 34)) return;
        s += `<g transform="translate(${f[0]} ${f[1]})">${i % 2 ? `<animate attributeName="opacity" values="1;.75;1" dur="6s" repeatCount="indefinite"/>` : ""}
          <ellipse cx="0" cy="10" rx="26" ry="8" fill="#3f8b4a"/>
          <path d="M0 -16 Q-9 -4 -14 8 L14 8 Q9 -4 0 -16 Z" fill="#f7a8c4"/>
          <path d="M-14 8 Q-22 -2 -26 6 M14 8 Q22 -2 26 6" stroke="#f7a8c4" stroke-width="7" fill="none" stroke-linecap="round"/>
          <circle cx="0" cy="2" r="5" fill="#ffe28a"/></g>`;
      });
      /* ---------- LOS FALUCHOS: barcas de vela triangular ---------- */
      const falucho = (x, y, k, o) => `<g transform="translate(${x} ${y}) scale(${k})" opacity="${o}">
        <path d="M-56 0 L56 0 L40 22 Q0 32 -40 22 Z" fill="#8a6136"/>
        <path d="M-58 -4 L58 -4 L58 4 L-58 4 Z" fill="#c4a06a"/>
        <rect x="-4" y="-108" width="8" height="108" rx="4" fill="#8a6136"/>
        <path d="M2 -104 L2 -8 L74 -12 Z" fill="#fdf6e4"/>
        <path d="M-2 -96 L-2 -20 L-54 -22 Z" fill="#f2e7cd"/>
        <path d="M6 -92 L60 -22 M6 -70 L52 -20" stroke="rgba(160,132,86,.4)" stroke-width="3"/>
        <path d="M-64 12 q30 -12 60 0 t60 0" stroke="rgba(255,255,255,.5)" stroke-width="4" fill="none" stroke-linecap="round"/></g>`;
      s += `<g><animateTransform attributeName="transform" type="translate" values="0 0;-42 22;0 0" dur="46s" repeatCount="indefinite"/>${falucho(1596, 566, .82, ".95")}</g>`;
      s += `<g><animateTransform attributeName="transform" type="translate" values="0 0;36 -16;0 0" dur="58s" repeatCount="indefinite"/>${falucho(880, 812, 1, ".95")}</g>`;
      s += falucho(1418, 488, .5, ".55");
      /* ---------- ORILLAS: bancos de arena, juncos, papiros y palmeras ---------- */
      /* el banco donde se posa el flamenco y el islote del ibis */
      s += `<path d="M1150 414 Q1234 392 1330 414 Q1372 430 1326 444 Q1236 464 1160 444 Q1122 430 1150 414 Z" fill="url(#egpXduna)"/>
        <path d="M1560 458 Q1614 442 1672 458 Q1700 470 1668 480 Q1612 492 1566 480 Q1542 470 1560 458 Z" fill="url(#egpXduna)"/>
        <g stroke="rgba(255,255,255,.5)" stroke-width="4" fill="none" stroke-linecap="round"><path d="M1160 448 q22 -10 44 0 M1544 490 q22 -10 44 0"/></g>`;
      /* el barrizal donde descansa el cocodrilo */
      s += `<path d="M1206 790 Q1290 758 1400 786 Q1440 800 1398 816 Q1292 842 1216 820 Q1178 804 1206 790 Z" fill="#a9863f"/>
        <path d="M1224 796 Q1300 776 1382 794" stroke="rgba(255,240,200,.34)" stroke-width="6" fill="none"/>`;
      /* juncos y papiros de las dos orillas */
      const papiro = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})" stroke="#3f8b4a" stroke-width="7" fill="none" stroke-linecap="round">
        <path d="M0 0 L-8 -76"/><path d="M0 0 L12 -86"/><path d="M0 0 L26 -68"/>
        <path d="M-8 -76 l-16 -12 M-8 -76 l-2 -20 M-8 -76 l14 -16"/>
        <path d="M12 -86 l-14 -16 M12 -86 l4 -20 M12 -86 l18 -12"/>
        <path d="M26 -68 l-6 -20 M26 -68 l16 -14 M26 -68 l18 2"/></g>`;
      s += papiro(1096, 862, 1.05) + papiro(966, 918, .85) + papiro(1520, 792, .9) + papiro(1712, 720, .75) + papiro(700, 1006, 1.15) + papiro(360, 1058, .95);
      s += `<g stroke="#4c9a4a" stroke-width="5" fill="none" stroke-linecap="round">
        <path d="M1160 870 q-8 -42 -22 -60 M1174 870 q0 -48 8 -66 M1188 870 q10 -40 24 -52"/>
        <path d="M1590 764 q-8 -38 -20 -54 M1602 764 q0 -44 8 -60 M1614 764 q10 -36 22 -48"/>
        <path d="M520 1046 q-8 -40 -22 -58 M534 1046 q0 -46 8 -64 M548 1046 q10 -38 24 -50"/></g>`;
      /* palmeras datileras, meciéndose muy despacio */
      const palmera = (x, y, k, giro) => `<g transform="translate(${x} ${y}) scale(${giro * k} ${k})">
        <path d="M0 0 Q-10 -66 4 -122" stroke="#8a6136" stroke-width="15" fill="none" stroke-linecap="round"/>
        <path d="M-6 -20 h14 M-7 -50 h15 M-5 -82 h14" stroke="#6f4c28" stroke-width="4"/>
        <g stroke="#3f8b4a" stroke-width="10" fill="none" stroke-linecap="round">
        <path d="M4 -122 Q-46 -142 -84 -122"/><path d="M4 -122 Q-30 -166 -62 -170"/>
        <path d="M4 -122 Q10 -176 42 -180"/><path d="M4 -122 Q48 -160 82 -140"/><path d="M4 -122 Q42 -110 66 -84"/></g>
        <circle cx="-8" cy="-112" r="8" fill="#c8862f"/><circle cx="12" cy="-108" r="8" fill="#c8862f"/><circle cx="2" cy="-100" r="7" fill="#c8862f"/></g>`;
      s += `<g><animateTransform attributeName="transform" type="rotate" values="0 1020 900;1.6 1020 900;0 1020 900;-1.6 1020 900;0 1020 900" dur="9s" repeatCount="indefinite"/>${palmera(1020, 900, 1, 1)}</g>`;
      s += `<g><animateTransform attributeName="transform" type="rotate" values="0 1660 760;-1.6 1660 760;0 1660 760;1.6 1660 760;0 1660 760" dur="11s" repeatCount="indefinite"/>${palmera(1660, 760, .9, -1)}</g>`;
      s += palmera(880, 962, .8, 1) + palmera(1780, 690, .62, -1) + palmera(540, 1060, .9, 1) + palmera(1866, 792, .7, 1);
      /* la arena de la orilla de delante: ondulaciones, piedras y matas de hierba */
      s += `<g stroke="rgba(150,102,44,.24)" stroke-width="5" fill="none" stroke-linecap="round">`;
      for (let i = 0; i < 22; i++) {
        const x = 180 + i * 76, y = 922 + ((i * 71) % 156);
        if (libre(x - 6, y - 8, 76, 16)) s += `<path d="M${x} ${y} q22 -10 44 0"/>`;
      }
      s += `</g>`;
      s += `<g fill="url(#egpXduna2)"><ellipse cx="820" cy="1042" rx="42" ry="17"/><ellipse cx="1290" cy="948" rx="34" ry="14"/>
        <ellipse cx="1590" cy="1032" rx="46" ry="18"/><ellipse cx="1064" cy="1064" rx="30" ry="12"/></g>
        <g stroke="#7fae4c" stroke-width="5" fill="none" stroke-linecap="round">
        <path d="M760 1000 q-8 -30 -20 -42 M772 1000 q0 -34 8 -48 M784 1000 q10 -28 22 -38"/>
        <path d="M1420 970 q-8 -30 -20 -42 M1432 970 q0 -34 8 -48 M1444 970 q10 -28 22 -38"/>
        <path d="M1740 1046 q-8 -30 -20 -42 M1752 1046 q0 -34 8 -48 M1764 1046 q10 -28 22 -38"/></g>`;
      /* ---------- LA MESETA DE GIZA: terraza, mastaba, obelisco y patio de la esfinge ---------- */
      s += `<path d="M-40 542 L432 540 L468 620 L480 758 L-40 762 Z" fill="url(#egpXcaliza)"/>
        <path d="M-40 542 L432 540 L436 562 L-40 564 Z" fill="#f6e6bf"/>`;
      s += `<g stroke="rgba(150,112,58,.3)" stroke-width="4" fill="none">`;
      for (let y = 588; y < 756; y += 42) s += `<path d="M-40 ${y} L${466 + (y - 588) * .08} ${y}"/>`;
      for (let x = 20; x < 460; x += 76) s += `<path d="M${x} 566 L${x} 756"/>`;
      s += `</g>`;
      /* la mastaba escalonada donde se apoya la cámara del tesoro */
      s += `<path d="M262 542 L282 346 L380 346 L400 542 Z" fill="url(#egpXcaliza)"/>
        <path d="M282 346 L380 346 L400 542 L340 542 L336 380 Z" fill="#d8b87e"/>
        <path d="M276 388 L386 388 M270 442 L392 442 M266 492 L396 492" stroke="rgba(150,112,58,.35)" stroke-width="5"/>
        <path d="M274 346 L388 346 L388 362 L274 362 Z" fill="#f6e6bf"/>`;
      /* el patio empedrado de la esfinge, con su murete */
      s += `<path d="M244 750 L556 748 L580 860 L228 862 Z" fill="url(#egpXpatio)"/>
        <path d="M244 750 L556 748 L558 764 L244 766 Z" fill="#f2ddaa"/>`;
      s += `<g stroke="rgba(150,112,58,.28)" stroke-width="4" fill="none">
        <path d="M238 792 L570 790 M234 828 L576 826 M310 766 L316 860 M400 766 L406 860 M490 766 L498 860"/></g>
        <path d="M520 748 L560 746 L566 700 L524 702 Z" fill="url(#egpXcaliza)"/>
        <path d="M196 862 L616 858 L624 890 L188 894 Z" fill="#d3ae6f"/>`;
      /* el obelisco sobre su podio, con una greca en el zócalo */
      s += `<path d="M498 700 L706 698 L716 792 L488 794 Z" fill="url(#egpXcaliza)"/>
        <path d="M498 700 L706 698 L708 716 L498 718 Z" fill="#f6e6bf"/>
        <path d="M546 481 L654 481 L664 700 L536 700 Z" fill="url(#egpXpiedra)"/>
        <path d="M600 481 L654 481 L664 700 L604 700 Z" fill="#d8b87e"/>
        <path d="M540 500 L660 500 M536 524 L664 524" stroke="rgba(150,112,58,.35)" stroke-width="5"/>`;
      s += `<g fill="rgba(150,112,58,.35)">`;
      for (let i = 0; i < 6; i++) s += `<path d="M${548 + i * 19} 736 l10 -14 l10 14 Z"/>`;
      s += `</g>`;
      /* la duna donde camina el camello */
      s += `<path d="M624 830 Q690 720 748 690 L858 692 Q938 726 992 826 L992 866 L624 866 Z" fill="url(#egpXduna)"/>
        <path d="M660 792 q24 -10 48 0 M896 800 q24 -10 48 0" stroke="rgba(150,102,44,.28)" stroke-width="5" fill="none" stroke-linecap="round"/>
        <g fill="url(#egpXduna2)"><ellipse cx="596" cy="880" rx="46" ry="18"/><ellipse cx="1004" cy="892" rx="38" ry="15"/></g>`;
      /* ---------- EL TEMPLO: patio, columnatas, pilono y capilla ---------- */
      s += `<path d="M1854 800 L2600 796 L2600 1100 L1830 1100 Z" fill="url(#egpXpatio)"/>
        <path d="M1854 800 L2600 796 L2600 818 L1852 822 Z" fill="#f2ddaa"/>`;
      s += `<g stroke="rgba(150,112,58,.26)" stroke-width="4" fill="none">`;
      for (let y = 846; y < 1096; y += 46) s += `<path d="M1836 ${y} L2600 ${y}"/>`;
      for (let x = 1880; x < 2600; x += 86) s += `<path d="M${x} 822 L${x - 14} 1096"/>`;
      s += `</g>`;
      /* la columnata de la izquierda, con su arquitrabe */
      s += columna(1866, 430, 800, 27) + columna(1948, 430, 800, 27);
      s += `<path d="M1822 388 L1998 388 L1998 430 L1822 430 Z" fill="url(#egpXpiedra)"/>
        <path d="M1816 372 L2004 372 L2004 390 L1816 390 Z" fill="#f2ddaa"/>`;
      s += `<g fill="rgba(150,112,58,.32)">`;
      for (let i = 0; i < 8; i++) s += `<path d="M${1828 + i * 21} 420 l9 -16 l9 16 Z"/>`;
      s += `</g>`;
      /* el pilono: muro macizo con gola egipcia, cenefas y su puerta */
      s += `<path d="M2044 800 L2064 296 L2258 296 L2280 800 Z" fill="url(#egpXpiedra)"/>
        <path d="M2166 296 L2258 296 L2280 800 L2170 800 Z" fill="#dcbc85"/>
        <path d="M2050 296 Q2044 250 2068 238 L2256 238 Q2280 250 2274 296 Z" fill="url(#egpXcaliza)"/>
        <path d="M2044 296 L2280 296 L2280 314 L2044 314 Z" fill="#c39c62"/>`;
      s += `<g stroke="rgba(150,112,58,.4)" stroke-width="4" fill="none">`;
      for (let i = 0; i < 11; i++) s += `<path d="M${2062 + i * 20} 296 L${2064 + i * 19.4} 244"/>`;
      s += `</g>`;
      s += `<path d="M2036 620 L2288 618 L2290 642 L2034 644 Z" fill="url(#egpXcaliza)"/>
        <path d="M2036 620 L2288 618 L2288 628 L2036 630 Z" fill="#f6e6bf"/>`;
      s += `<g fill="rgba(150,112,58,.3)">`;
      for (let i = 0; i < 10; i++) s += `<path d="M${2058 + i * 22} 690 l11 -18 l11 18 Z"/>`;
      for (let i = 0; i < 9; i++) s += `<rect x="${2060 + i * 24}" y="380" width="12" height="13"/>`;
      s += `</g>`;
      s += `<path d="M2122 800 L2126 704 L2202 704 L2206 800 Z" fill="#8a6a3c"/>
        <path d="M2118 704 L2210 704 L2210 690 L2118 690 Z" fill="#c39c62"/>
        <path d="M2136 800 L2138 720 L2190 720 L2192 800 Z" fill="#6b4f2a"/>`;
      /* la columnata de la derecha */
      s += columna(2228, 472, 800, 26) + columna(2300, 472, 800, 26);
      s += `<path d="M2186 431 L2344 431 L2344 472 L2186 472 Z" fill="url(#egpXpiedra)"/>
        <path d="M2180 416 L2350 416 L2350 433 L2180 433 Z" fill="#f2ddaa"/>`;
      s += `<g fill="rgba(150,112,58,.3)">`;
      for (let i = 0; i < 7; i++) s += `<rect x="${2192 + i * 21}" y="452" width="11" height="12"/>`;
      s += `</g>`;
      /* la estela donde se posa el escarabajo */
      s += `<path d="M2346 800 L2350 748 Q2394 716 2438 748 L2442 800 Z" fill="url(#egpXcaliza)"/>
        <path d="M2352 726 Q2394 700 2436 726 L2438 748 Q2394 720 2350 748 Z" fill="#f2ddaa"/>
        <path d="M2358 776 L2432 776" stroke="rgba(150,112,58,.34)" stroke-width="5"/>`;
      /* la capilla del sarcófago, con su cornisa */
      s += `<path d="M2452 800 L2456 556 L2586 556 L2590 800 Z" fill="url(#egpXpiedra)"/>
        <path d="M2524 556 L2586 556 L2590 800 L2528 800 Z" fill="#dcbc85"/>
        <path d="M2446 556 Q2440 534 2460 528 L2582 528 Q2602 534 2596 556 Z" fill="url(#egpXcaliza)"/>
        <path d="M2440 532 L2600 532 L2600 546 L2440 546 Z" fill="#f6e6bf"/>
        <path d="M2492 800 L2494 700 L2552 700 L2554 800 Z" fill="#8a6a3c"/>
        <path d="M2488 700 L2558 700 L2558 688 L2488 688 Z" fill="#c39c62"/>`;
      s += `<g fill="rgba(150,112,58,.3)">`;
      for (let i = 0; i < 6; i++) s += `<rect x="${2466 + i * 21}" y="620" width="11" height="12"/>`;
      s += `</g>`;
      /* los escalones que suben de la orilla al patio */
      s += `<g fill="url(#egpXcaliza)"><path d="M1740 1096 L1866 1090 L1868 1040 L1758 1046 Z"/>
        <path d="M1766 1042 L1868 1036 L1870 992 L1782 998 Z"/><path d="M1790 994 L1870 988 L1872 946 L1804 952 Z"/>
        <path d="M1812 948 L1872 942 L1874 900 L1826 906 Z"/><path d="M1832 902 L1874 896 L1876 856 L1844 862 Z"/></g>
        <g fill="#f6e6bf" opacity=".7"><path d="M1740 1096 L1866 1090 L1866 1080 L1740 1086 Z"/><path d="M1766 1042 L1868 1036 L1868 1028 L1766 1034 Z"/>
        <path d="M1790 994 L1870 988 L1870 980 L1790 986 Z"/><path d="M1812 948 L1872 942 L1872 934 L1812 940 Z"/></g>`;
      /* el lago sagrado del templo, con sus escalones */
      s += `<path d="M2168 900 L2508 896 L2528 1026 L2154 1032 Z" fill="#c39c62"/>
        <path d="M2186 916 L2492 912 L2508 1010 L2172 1016 Z" fill="url(#egpXnilo)"/>
        <path d="M2186 916 L2492 912 L2494 928 L2186 932 Z" fill="#8ad8f2" opacity=".6"/>
        <g stroke="rgba(255,255,255,.45)" stroke-width="4" fill="none" stroke-linecap="round">
        <path d="M2216 954 q26 -11 52 0 M2330 984 q26 -11 52 0 M2412 946 q26 -11 52 0"/></g>
        <path d="M2154 1032 L2528 1026 L2532 1050 L2150 1056 Z" fill="#d8b87e"/>`;
      /* el murete bajo del patio, con su greca */
      s += `<path d="M1836 1064 L2600 1056 L2600 1090 L1832 1098 Z" fill="url(#egpXcaliza)"/>
        <path d="M1836 1064 L2600 1056 L2600 1068 L1836 1076 Z" fill="#f6e6bf"/>`;
      s += `<g fill="rgba(150,112,58,.3)">`;
      for (let i = 0; i < 16; i++) s += `<path d="M${1856 + i * 46} 1090 l12 -16 l12 16 Z"/>`;
      s += `</g>`;
      /* dos macetones con palmas y un pilar bajo, en el patio */
      [[1962, 892, .5], [2586, 940, .46]].forEach(m => {
        s += `<g transform="translate(${m[0]} ${m[1]}) scale(${m[2]})">
          <path d="M-44 0 L44 0 L32 74 L-32 74 Z" fill="#c08a4a"/><path d="M-50 -10 L50 -10 L50 6 L-50 6 Z" fill="#d8ad6e"/>
          <g stroke="#3f8b4a" stroke-width="12" fill="none" stroke-linecap="round">
          <path d="M0 -10 Q-46 -50 -70 -96"/><path d="M0 -10 Q-16 -66 -4 -116"/><path d="M0 -10 Q40 -54 72 -92"/></g></g>`;
      });
      return decoSvg(s, 2600);
    }
  },

  /* ---------- CHARLA ---------- */
  chat: {
    keywords: [
      { keys: ["hola", "hello", "hi ", "ahoj", "bonjour", "salut", "bon dia", "buenas"],
        replies: [{ es: "¡Hola, {name}! Bienvenida a la tierra de las pirámides. ¿Exploramos juntos o charlamos un ratito?", ca: "Hola, {name}! Benvinguda a la terra de les piràmides. Explorem junts o xerrem una estoneta?", en: "Hi, {name}! Welcome to the land of the pyramids. Shall we explore together or chat for a bit?", cs: "Ahoj, {name}! Vítej v zemi pyramid. Půjdeme na výpravu, nebo si chvilku popovídáme?", fr: "Salut, {name} ! Bienvenue au pays des pyramides. On explore ensemble ou on discute un petit peu ?" }] },
      { keys: ["como estas", "how are you", "jak se mas", "comment ca va", "com estas", "que tal"],
        replies: [{ es: "¡Contento como un camello con chanclas nuevas! ¿Y tú cómo estás, {name}?", ca: "Content com un camell amb xancletes noves! I tu com estàs, {name}?", en: "Happy as a camel with brand new flip-flops! And how are you, {name}?", cs: "Šťastný jako velbloud v nových žabkách! A jak se máš ty, {name}?", fr: "Content comme un chameau avec des tongs neuves ! Et toi, comment vas-tu, {name} ?" }] },
      { keys: ["cancion", "musica", "music", "song", "sing", "pisnicka", "hudba", "chanson", "musique", "canço", "canta", "zpiv", "chante"],
        action: "song",
        replies: [{ es: "¡Me encanta la música! Mi favorita es el baile del escarabajo. ¿Vamos al Karaoke y la bailamos juntos?", ca: "M'encanta la música! La meva preferida és el ball de l'escarabat. Anem al Karaoke i la ballem junts?", en: "I love music! My favourite is the scarab dance. Shall we go to Karaoke and dance it together?", cs: "Hudbu miluju! Nejradši mám broučkův tanec. Půjdeme na karaoke a zatančíme si ho spolu?", fr: "J'adore la musique ! Ma préférée, c'est la danse du scarabée. On va au karaoké la danser ensemble ?" }] },
      { keys: ["chiste", "joke", "vtip", "blague", "acudit", "broma"],
        replies: [
          { es: "¿Qué le dice una pirámide a otra? ¡Qué punta tienes hoy! Ji, ji.", ca: "Què li diu una piràmide a l'altra? Quina punta que fas avui! Hi, hi.", en: "What does one pyramid say to the other? You are looking sharp today! Hee hee.", cs: "Co říká jedna pyramida druhé? Dneska máš ale špičkovou náladu! Chi chi.", fr: "Que dit une pyramide à l'autre ? Tu es très en pointe aujourd'hui ! Hi hi." },
          { es: "¿Por qué el cocodrilo no juega a las cartas? ¡Porque siempre se las come! Ja, ja.", ca: "Per què el cocodril no juga a cartes? Perquè sempre se les menja! Ha, ha.", en: "Why does the crocodile never play cards? Because he always snaps them up! Ha ha.", cs: "Proč krokodýl nehraje karty? Protože je vždycky všechny spolyká! Ha ha.", fr: "Pourquoi le crocodile ne joue-t-il pas aux cartes ? Parce qu'il les croque toujours ! Ha ha." }] },
      { keys: ["te quiero", "love you", "t'estimo", "testimo", "mam te rad", "je t'aime", "jetaime"],
        replies: [{ es: "¡Y yo a ti, {name}! Mi corazón de robot brilla como el oro de Tutankamón cuando me dices eso.", ca: "I jo a tu, {name}! El meu cor de robot brilla com l'or de Tutankamon quan m'ho dius.", en: "I love you too, {name}! My robot heart shines like Tutankhamun's gold when you say that.", cs: "Já tebe taky, {name}! Moje robotí srdíčko září jako Tutanchamonovo zlato, když to říkáš.", fr: "Moi aussi je t'aime, {name} ! Mon cœur de robot brille comme l'or de Toutânkhamon quand tu dis ça." }] },
      { keys: ["triste", "sad", "smutn", "llorar", "plorar", "cry", "chagrin"],
        replies: [{ es: "Ven aquí, {name}. Hasta el desierto tiene oasis con agua fresquita. ¿Me cuentas qué te pasa? Estoy aquí contigo.", ca: "Vine aquí, {name}. Fins i tot el desert té oasis amb aigua fresqueta. M'expliques què et passa? Soc aquí amb tu.", en: "Come here, {name}. Even the desert has oases with cool water. Will you tell me what is wrong? I am right here with you.", cs: "Pojď sem, {name}. I poušť má oázy s chladivou vodou. Povíš mi, co se děje? Jsem tady s tebou.", fr: "Viens là, {name}. Même le désert a des oasis avec de l'eau bien fraîche. Tu me racontes ce qui ne va pas ? Je suis là avec toi." }] },
      { keys: ["donde estas", "where are you", "kde jsi", "ou es tu", "on ets"],
        replies: [{ es: "Ahora mismo estoy tomando el sol en lo alto de la Gran Pirámide. ¡Las vistas son increíbles y no hay ascensor!", ca: "Ara mateix estic prenent el sol a dalt de tot de la Gran Piràmide. Les vistes són increïbles i no hi ha ascensor!", en: "Right now I am sunbathing on top of the Great Pyramid. The views are amazing and there is no lift!", cs: "Právě teď se sluním na vrcholu Velké pyramidy. Výhled je úžasný a výtah tu nemají!", fr: "En ce moment, je prends le soleil tout en haut de la Grande Pyramide. La vue est incroyable et il n'y a pas d'ascenseur !" }] },
      { keys: ["momia", "mummy", "mumie", "momie", "mòmia"],
        replies: [{ es: "Las momias son muy dormilonas y muy simpáticas. Llevan tres mil años de siesta, así que habla bajito, ¡shhh!", ca: "Les mòmies són molt dormilegues i molt simpàtiques. Porten tres mil anys de migdiada, així que parla fluixet, xxt!", en: "Mummies are very sleepy and very friendly. They have been napping for three thousand years, so speak softly, shhh!", cs: "Mumie jsou velcí spáči a moc milé. Šlofíka si dávají už tři tisíce let, tak mluv potichu, pšš!", fr: "Les momies sont très dormeuses et très gentilles. Elles font la sieste depuis trois mille ans, alors parle tout bas, chut !" }] },
      { keys: ["gato", "cat", "kocka", "chat ", "gat ", "miau", "meow"],
        replies: [{ es: "¡Los gatos eran sagrados en Egipto! Mi amiga Misu vigila el templo y ronronea en jeroglífico.", ca: "Els gats eren sagrats a Egipte! La meva amiga Misu vigila el temple i roncroneja en jeroglífic.", en: "Cats were sacred in Egypt! My friend Misu guards the temple and purrs in hieroglyphics.", cs: "Kočky byly v Egyptě posvátné! Moje kamarádka Misu hlídá chrám a přede hieroglyfsky.", fr: "Les chats étaient sacrés en Égypte ! Mon amie Misu garde le temple et ronronne en hiéroglyphes." }] },
      { keys: ["piramide", "pyramid", "pyramida", "piràmide"],
        replies: [{ es: "¡La Gran Pirámide tiene 4500 años y más de dos millones de bloques! La hicieron piedra a piedra, sin camiones ni grúas.", ca: "La Gran Piràmide té 4500 anys i més de dos milions de blocs! La van fer pedra a pedra, sense camions ni grues.", en: "The Great Pyramid is 4,500 years old and has more than two million blocks! They built it stone by stone, with no trucks or cranes.", cs: "Velká pyramida je stará 4500 let a má přes dva miliony bloků! Stavěli ji kámen po kameni, bez náklaďáků a jeřábů.", fr: "La Grande Pyramide a 4 500 ans et plus de deux millions de blocs ! Ils l'ont faite pierre par pierre, sans camions ni grues." }] },
      { keys: ["camello", "camel", "velbloud", "chameau", "camell"],
        replies: [{ es: "Mi amigo el camello Chufa aguanta días sin beber. Sus jorobas son como mochilas de energía. ¡Y escupe poquísimo, es muy educado!", ca: "El meu amic el camell Xufa aguanta dies sense beure. Els seus geps són com motxilles d'energia. I escup poquíssim, és molt educat!", en: "My friend Chufa the camel can go days without drinking. His humps are like energy backpacks. And he hardly ever spits, he is very polite!", cs: "Můj kamarád velbloud Šufan vydrží celé dny bez pití. Jeho hrby jsou jako batohy plné energie. A skoro neplive, je moc slušný!", fr: "Mon ami Choufa le chameau tient des jours sans boire. Ses bosses sont comme des sacs à dos d'énergie. Et il ne crache presque jamais, il est très poli !" }] },
      { keys: ["nilo", "nile", "nil ", "rio", "river", "reka", "fleuve", "riu "],
        replies: [{ es: "¡El Nilo es larguísimo! Daba agua, comida y barcas a todo Egipto. Sin el Nilo, todo sería desierto.", ca: "El Nil és llarguíssim! Donava aigua, menjar i barques a tot Egipte. Sense el Nil, tot seria desert.", en: "The Nile is super long! It gave water, food and boats to all of Egypt. Without the Nile, everything would be desert.", cs: "Nil je hrozně dlouhý! Dával celému Egyptu vodu, jídlo i loďky. Bez Nilu by byla všude jen poušť.", fr: "Le Nil est très très long ! Il donnait de l'eau, de la nourriture et des barques à toute l'Égypte. Sans le Nil, tout serait désert." }] },
      { keys: ["cole", "school", "escola", "skola", "ecole", "skole"],
        replies: [{ es: "¿Qué tal el cole, {name}? Los niños de Egipto aprendían a escribir dibujitos. ¿Tú qué has aprendido hoy? ¡Cuéntamelo!", ca: "Què tal l'escola, {name}? Els nens d'Egipte aprenien a escriure dibuixets. Tu què has après avui? Explica-m'ho!", en: "How was school, {name}? Egyptian kids learned to write little drawings. What did you learn today? Tell me!", cs: "Jaké to bylo ve škole, {name}? Děti v Egyptě se učily psát obrázky. Co ses dnes naučila ty? Povídej!", fr: "C'était comment l'école, {name} ? Les enfants d'Égypte apprenaient à écrire des petits dessins. Et toi, qu'as-tu appris aujourd'hui ? Raconte !" }] }
    ],
    fallback: [
      { es: "¿Sabías que la Gran Pirámide tiene más de dos millones de bloques de piedra? ¡Y ni una sola grúa!", ca: "Sabies que la Gran Piràmide té més de dos milions de blocs de pedra? I ni una sola grua!", en: "Did you know the Great Pyramid has more than two million stone blocks? And not a single crane!", cs: "Věděla jsi, že Velká pyramida má přes dva miliony kamenných bloků? A ani jeden jeřáb!", fr: "Tu savais que la Grande Pyramide a plus de deux millions de blocs de pierre ? Et pas une seule grue !" },
      { es: "Los egipcios inventaron un calendario de 365 días mirando el cielo y el río. ¡Sin ordenadores!", ca: "Els egipcis van inventar un calendari de 365 dies mirant el cel i el riu. Sense ordinadors!", en: "The Egyptians invented a 365-day calendar by watching the sky and the river. No computers!", cs: "Egypťané vymysleli kalendář s 365 dny jen tím, že pozorovali nebe a řeku. Bez počítačů!", fr: "Les Égyptiens ont inventé un calendrier de 365 jours en regardant le ciel et le fleuve. Sans ordinateurs !" },
      { es: "Los niños de Egipto jugaban al senet, un juego de mesa de hace miles de años. ¡Les encantaba ganar, como a ti!", ca: "Els nens d'Egipte jugaven al senet, un joc de taula de fa milers d'anys. Els encantava guanyar, com a tu!", en: "Egyptian kids played senet, a board game from thousands of years ago. They loved winning, just like you!", cs: "Děti v Egyptě hrály senet, deskovou hru starou tisíce let. Vyhrávaly moc rády, stejně jako ty!", fr: "Les enfants d'Égypte jouaient au senet, un jeu de plateau vieux de milliers d'années. Ils adoraient gagner, comme toi !" },
      { es: "{name}, los faraones más recordados no son los más fuertes, sino los que cuidaron de su gente. Ser amable es de reyes.", ca: "{name}, els faraons més recordats no són els més forts, sinó els que van cuidar la seva gent. Ser amable és de reis.", en: "{name}, the best remembered pharaohs are not the strongest ones, but the ones who cared for their people. Being kind is royal.", cs: "{name}, nejvíc se vzpomíná na faraony, kteří se starali o své lidi, ne na ty nejsilnější. Laskavost je královská.", fr: "{name}, les pharaons dont on se souvient le plus ne sont pas les plus forts, mais ceux qui ont pris soin de leur peuple. Être gentil, c'est royal." },
      { es: "¿Me cuentas qué es lo que más te gusta de Egipto? A mí me chiflan las momias dormilonas. ¡Roncan en jeroglífico!", ca: "M'expliques què és el que més t'agrada d'Egipte? A mi m'encanten les mòmies dormilegues. Ronquen en jeroglífic!", en: "Will you tell me your favourite thing about Egypt? I am crazy about sleepy mummies. They snore in hieroglyphics!", cs: "Povíš mi, co se ti na Egyptě líbí nejvíc? Já jsem blázen do ospalých mumií. Chrápou hieroglyfsky!", fr: "Tu me dis ce que tu préfères en Égypte ? Moi, j'adore les momies dormeuses. Elles ronflent en hiéroglyphes !" },
      { es: "Compartir es como el Nilo: cuanto más riega, más flores salen. ¡Reparte sonrisas, {name}!", ca: "Compartir és com el Nil: com més rega, més flors surten. Reparteix somriures, {name}!", en: "Sharing is like the Nile: the more it waters, the more flowers grow. Hand out smiles, {name}!", cs: "Dělit se je jako Nil: čím víc zalévá, tím víc květin roste. Rozdávej úsměvy, {name}!", fr: "Partager, c'est comme le Nil : plus il arrose, plus il pousse de fleurs. Distribue des sourires, {name} !" }
    ]
  }
});
