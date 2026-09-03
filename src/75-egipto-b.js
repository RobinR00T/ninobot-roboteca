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
    width: 4200, height: 1100, stars: false,
    bgCss: "radial-gradient(ellipse 40% 30% at 85% 12%, rgba(255,241,118,.6), transparent), linear-gradient(180deg,#9fd8f2 0%,#ffe3a0 34%,#f6c35c 58%,#e6a817 80%,#c98a3b 100%)",
    cats: [
      { id: "piramides", emoji: "🔺", x: 120, name: { es: "Las pirámides", ca: "Les piràmides", en: "The pyramids", cs: "Pyramidy", fr: "Les pyramides" } },
      { id: "nilo", emoji: "🌊", x: 1580, name: { es: "El Nilo", ca: "El Nil", en: "The Nile", cs: "Nil", fr: "Le Nil" } },
      { id: "templo", emoji: "🏛️", x: 2850, name: { es: "El templo", ca: "El temple", en: "The temple", cs: "Chrám", fr: "Le temple" } }
    ],
    pois: [
      { cat: "piramides", emoji: "🔺", x: 240, y: 480, size: 3,
        name: { es: "La Gran Pirámide", ca: "La Gran Piràmide", en: "The Great Pyramid", cs: "Velká pyramida", fr: "La Grande Pyramide" },
        fact: { es: "La Gran Pirámide de Keops tiene 4500 años y fue el edificio más alto del mundo durante muchísimo tiempo.", ca: "La Gran Piràmide de Kheops té 4500 anys i va ser l'edifici més alt del món durant moltíssim temps.", en: "The Great Pyramid of Khufu is 4,500 years old and was the tallest building in the world for a very long time.", cs: "Velká pyramida faraona Cheopse je stará 4500 let a dlouho byla nejvyšší stavbou na světě.", fr: "La Grande Pyramide de Khéops a 4 500 ans et a longtemps été le plus haut bâtiment du monde." } },
      { cat: "piramides", emoji: "🦁", x: 620, y: 740, size: 2,
        name: { es: "La esfinge", ca: "L'esfinx", en: "The sphinx", cs: "Sfinga", fr: "Le sphinx" },
        fact: { es: "La esfinge tiene cuerpo de león y cabeza de persona. Lleva milenios vigilando las pirámides sin pestañear.", ca: "L'esfinx té cos de lleó i cap de persona. Porta mil·lennis vigilant les piràmides sense parpellejar.", en: "The sphinx has a lion's body and a person's head. It has guarded the pyramids for millennia without blinking.", cs: "Sfinga má tělo lva a hlavu člověka. Už tisíce let hlídá pyramidy a ani nemrkne.", fr: "Le sphinx a un corps de lion et une tête de personne. Il garde les pyramides depuis des millénaires sans cligner des yeux." } },
      { cat: "piramides", emoji: "💎", x: 900, y: 320,
        name: { es: "La cámara del tesoro", ca: "La cambra del tresor", en: "The treasure chamber", cs: "Pokladnice", fr: "La chambre au trésor" },
        fact: { es: "Dentro de las pirámides hay pasillos secretos y cámaras escondidas con tesoros para el faraón.", ca: "Dins de les piràmides hi ha passadissos secrets i cambres amagades amb tresors per al faraó.", en: "Inside the pyramids there are secret corridors and hidden chambers with treasures for the pharaoh.", cs: "Uvnitř pyramid jsou tajné chodby a skryté komory s poklady pro faraona.", fr: "À l'intérieur des pyramides, il y a des couloirs secrets et des chambres cachées avec des trésors pour le pharaon." } },
      { cat: "piramides", emoji: "🗼", x: 1150, y: 470,
        name: { es: "El obelisco", ca: "L'obelisc", en: "The obelisk", cs: "Obelisk", fr: "L'obélisque" },
        fact: { es: "El obelisco es una aguja gigante de piedra llena de jeroglíficos. Su punta saluda al sol.", ca: "L'obelisc és una agulla gegant de pedra plena de jeroglífics. La seva punta saluda el sol.", en: "The obelisk is a giant stone needle covered in hieroglyphs. Its tip says hello to the sun.", cs: "Obelisk je obří kamenná jehla plná hieroglyfů. Její špička zdraví slunce.", fr: "L'obélisque est une aiguille géante de pierre couverte de hiéroglyphes. Sa pointe salue le soleil." } },
      { cat: "piramides", emoji: "🐫", x: 1400, y: 700,
        name: { es: "El camello", ca: "El camell", en: "The camel", cs: "Velbloud", fr: "Le chameau" },
        fact: { es: "Al camello lo llaman el barco del desierto: aguanta días sin beber y sus jorobas guardan reservas de energía.", ca: "Al camell li diuen el vaixell del desert: aguanta dies sense beure i els seus geps guarden reserves d'energia.", en: "The camel is called the ship of the desert: it can go days without drinking and its humps store energy.", cs: "Velbloudovi se říká loď pouště: vydrží celé dny bez pití a v hrbech má zásoby energie.", fr: "On appelle le chameau le bateau du désert : il tient des jours sans boire et ses bosses gardent des réserves d'énergie." } },
      { cat: "nilo", emoji: "🛶", x: 1680, y: 560,
        name: { es: "La barca de papiro", ca: "La barca de papir", en: "The papyrus boat", cs: "Papyrová loďka", fr: "La barque de papyrus" },
        fact: { es: "Los egipcios ataban manojos de papiro y hacían barcas ligeras para pescar y viajar por el Nilo.", ca: "Els egipcis lligaven manats de papir i feien barques lleugeres per pescar i viatjar pel Nil.", en: "The Egyptians tied bundles of papyrus together to make light boats for fishing and travelling on the Nile.", cs: "Egypťané svazovali otépky papyru a stavěli z nich lehké loďky na rybaření a cesty po Nilu.", fr: "Les Égyptiens attachaient des bottes de papyrus pour faire des barques légères, pour pêcher et voyager sur le Nil." } },
      { cat: "nilo", emoji: "🐊", x: 1940, y: 800,
        name: { es: "El cocodrilo", ca: "El cocodril", en: "The crocodile", cs: "Krokodýl", fr: "Le crocodile" },
        fact: { es: "La mamá cocodrilo lleva a sus crías dentro de la boca, con muchísimo cuidado, como en un taxi blandito.", ca: "La mare cocodril porta les seves cries dins de la boca, amb moltíssim de compte, com en un taxi tou.", en: "The crocodile mum carries her babies inside her mouth, ever so gently, like a soft little taxi.", cs: "Krokodýlí maminka nosí svá mláďata v tlamě, hrozně opatrně, jako v měkkém taxíku.", fr: "La maman crocodile porte ses bébés dans sa gueule, tout doucement, comme dans un petit taxi moelleux." } },
      { cat: "nilo", emoji: "🦛", x: 2200, y: 640,
        name: { es: "El hipopótamo", ca: "L'hipopòtam", en: "The hippopotamus", cs: "Hroch", fr: "L'hippopotame" },
        fact: { es: "El hipopótamo pasa el día en el agua, pero casi no sabe nadar: ¡va trotando por el fondo del río!", ca: "L'hipopòtam passa el dia a l'aigua, però gairebé no sap nedar: va trotant pel fons del riu!", en: "The hippo spends all day in the water, but it can hardly swim: it trots along the bottom of the river!", cs: "Hroch tráví celý den ve vodě, ale skoro neumí plavat: po dně řeky si to cupitá!", fr: "L'hippopotame passe la journée dans l'eau, mais il sait à peine nager : il trotte au fond du fleuve !" } },
      { cat: "nilo", emoji: "🌿", x: 1770, y: 900,
        name: { es: "Los papiros", ca: "Els papirs", en: "The papyrus reeds", cs: "Papyrus", fr: "Les papyrus" },
        fact: { es: "Con el papiro los egipcios hacían papel, barcas, cestas y hasta sandalias. ¡Una planta para todo!", ca: "Amb el papir els egipcis feien paper, barques, cistelles i fins i tot sandàlies. Una planta per a tot!", en: "With papyrus the Egyptians made paper, boats, baskets and even sandals. One plant for everything!", cs: "Z papyru dělali Egypťané papír, loďky, košíky a dokonce sandály. Jedna rostlina na všechno!", fr: "Avec le papyrus, les Égyptiens faisaient du papier, des barques, des paniers et même des sandales. Une plante pour tout !" } },
      { cat: "nilo", emoji: "🐦", x: 2460, y: 440,
        name: { es: "El ibis", ca: "L'ibis", en: "The ibis", cs: "Ibis", fr: "L'ibis" },
        fact: { es: "El ibis pasea elegante por la orilla con su pico curvado. Los egipcios lo tenían por un pájaro muy sabio.", ca: "L'ibis passeja elegant per la riba amb el seu bec corbat. Els egipcis el consideraven un ocell molt savi.", en: "The ibis struts elegantly along the bank with its curved beak. The Egyptians thought it was a very wise bird.", cs: "Ibis se elegantně prochází po břehu se zahnutým zobákem. Egypťané ho měli za velmi moudrého ptáka.", fr: "L'ibis se promène élégamment sur la rive avec son bec courbé. Les Égyptiens le voyaient comme un oiseau très sage." } },
      { cat: "templo", emoji: "📜", x: 2950, y: 380,
        name: { es: "Los jeroglíficos", ca: "Els jeroglífics", en: "The hieroglyphs", cs: "Hieroglyfy", fr: "Les hiéroglyphes" },
        fact: { es: "Los jeroglíficos son dibujos que hablan: pájaros, ojos, olas... Hay más de 700 signos distintos.", ca: "Els jeroglífics són dibuixos que parlen: ocells, ulls, ones... Hi ha més de 700 signes diferents.", en: "Hieroglyphs are drawings that talk: birds, eyes, waves... There are more than 700 different signs.", cs: "Hieroglyfy jsou obrázky, které mluví: ptáčci, oči, vlnky... Existuje jich přes 700 různých.", fr: "Les hiéroglyphes sont des dessins qui parlent : oiseaux, yeux, vagues... Il y a plus de 700 signes différents." } },
      { cat: "templo", emoji: "👑", x: 3220, y: 600, size: 2,
        name: { es: "El faraón", ca: "El faraó", en: "The pharaoh", cs: "Faraon", fr: "Le pharaon" },
        fact: { es: "El faraón mandaba en todo Egipto y llevaba una corona doble. También hubo mujeres faraón, como Hatshepsut.", ca: "El faraó manava a tot Egipte i portava una corona doble. També hi va haver dones faraó, com Hatshepsut.", en: "The pharaoh ruled all of Egypt and wore a double crown. There were women pharaohs too, like Hatshepsut.", cs: "Faraon vládl celému Egyptu a nosil dvojitou korunu. Vládly i ženy, třeba Hatšepsut.", fr: "Le pharaon commandait toute l'Égypte et portait une double couronne. Il y a eu aussi des femmes pharaons, comme Hatchepsout." } },
      { cat: "templo", emoji: "✍️", x: 3480, y: 400,
        name: { es: "El escriba", ca: "L'escriba", en: "The scribe", cs: "Písař", fr: "Le scribe" },
        fact: { es: "Muy poca gente sabía escribir. Los escribas iban a la escuela muchos años para aprender todos los signos.", ca: "Molt poca gent sabia escriure. Els escribes anaven a l'escola molts anys per aprendre tots els signes.", en: "Very few people could write. Scribes went to school for many years to learn all the signs.", cs: "Psát umělo jen málo lidí. Písaři chodili do školy mnoho let, aby se naučili všechny znaky.", fr: "Très peu de gens savaient écrire. Les scribes allaient à l'école pendant des années pour apprendre tous les signes." } },
      { cat: "templo", emoji: "🐈", x: 2980, y: 800,
        name: { es: "El gato sagrado", ca: "El gat sagrat", en: "The sacred cat", cs: "Posvátná kočka", fr: "Le chat sacré" },
        fact: { es: "Los gatos eran sagrados: protegían el grano de los ratones y las familias los mimaban como a reyes.", ca: "Els gats eren sagrats: protegien el gra dels ratolins i les famílies els mimaven com a reis.", en: "Cats were sacred: they kept the mice away from the grain and families pampered them like kings.", cs: "Kočky byly posvátné: chránily obilí před myšmi a rodiny je rozmazlovaly jako krále.", fr: "Les chats étaient sacrés : ils protégeaient le grain des souris et les familles les chouchoutaient comme des rois." } },
      { cat: "templo", emoji: "🪲", x: 3720, y: 720,
        name: { es: "El escarabajo", ca: "L'escarabat", en: "The scarab", cs: "Skarab", fr: "Le scarabée" },
        fact: { es: "El escarabajo era el símbolo del sol que sale cada mañana. La gente llevaba escarabajos de la suerte.", ca: "L'escarabat era el símbol del sol que surt cada matí. La gent portava escarabats de la sort.", en: "The scarab was the symbol of the sun rising every morning. People carried lucky scarabs.", cs: "Skarab byl symbolem slunce, které každé ráno vychází. Lidé nosili brouky pro štěstí.", fr: "Le scarabée était le symbole du soleil qui se lève chaque matin. Les gens portaient des scarabées porte-bonheur." } },
      { cat: "templo", emoji: "😴", x: 4030, y: 480,
        name: { es: "La momia dormilona", ca: "La mòmia dormilega", en: "The sleepy mummy", cs: "Ospalá mumie", fr: "La momie dormeuse" },
        fact: { es: "Las momias llevan miles de años durmiendo la siesta envueltas en vendas suaves. Habla bajito, ¡shhh!", ca: "Les mòmies porten milers d'anys fent la migdiada embolicades amb benes suaus. Parla fluixet, xxt!", en: "Mummies have been napping for thousands of years wrapped in soft bandages. Speak softly, shhh!", cs: "Mumie už tisíce let podřimují zabalené v měkkých obvazech. Mluv potichu, pšš!", fr: "Les momies font la sieste depuis des milliers d'années, enveloppées de bandelettes douces. Parle tout bas, chut !" } }
    ],
    /* El paisaje, de izquierda a derecha y encadenado: la meseta de Giza con
       sus pirámides y el patio de la esfinge, el desierto de dunas donde baja
       la meseta, el embarcadero de piedra con sus escalones al agua, la ribera
       del Nilo con los campos de cultivo de la otra orilla, el verde que se va
       volviendo arena y, por el camino procesional, el recinto del templo con
       su pilono, sus columnatas de capitel de papiro y su lago sagrado.
       Todo el repertorio es egipcio: pilonos, gola, obeliscos, mastabas,
       estelas y grecas geométricas. Nada prestado de otras culturas. */
    deco: function () {
      let s = "";
      /* las cajas de los iconos: el decorado se aparta de ellas */
      const cajas = [[114, 390, 252, 180], [550, 696, 140, 88], [864, 280, 72, 80], [1126, 415, 48, 110], [1352, 657, 96, 86],
        [1630, 518, 100, 84], [1884, 777, 112, 46], [2155, 608, 90, 64], [1736, 863, 68, 74], [2430, 408, 60, 64],
        [2911, 348, 78, 64], [3183, 546, 74, 108], [3441, 365, 78, 70], [2959, 771, 42, 58], [3693, 700, 54, 40],
        [3997, 434, 66, 92], [1984, 340, 52, 80], [3222, 159, 56, 82]];
      const libre = (x, y, w, h) => !cajas.some(c => {
        const mx = c[2] * .4 + 16, my = c[3] * .4 + 16;
        return x < c[0] + c[2] + mx && x + w > c[0] - mx && y < c[1] + c[3] + my && y + h > c[1] - my;
      });
      /* una pirámide con su cara iluminada y su cara en sombra */
      const piramide = (cx, cima, base, medio, o) => `<g opacity="${o}">
        <path d="M${cx - medio} ${base} L${cx} ${cima} L${cx + medio} ${base} Z" fill="#b98a41"/>
        <path d="M${cx} ${cima} L${cx + medio} ${base} L${cx} ${base} Z" fill="#e6bd6e"/>
        <path d="M${cx} ${cima} L${cx + medio * .16} ${base} L${cx - medio * .16} ${base} Z" fill="rgba(255,238,190,.28)"/></g>`;
      /* una columna con capitel de papiro, la propia del templo egipcio */
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
      /* la greca de triángulos del zócalo, un motivo egipcio de siempre */
      const greca = (x1, x2, y, paso, alto, o) => {
        let g = `<g fill="rgba(150,112,58,${o})">`;
        for (let x = x1; x < x2; x += paso) g += `<path d="M${x} ${y} l${paso * .5} -${alto} l${paso * .5} ${alto} Z"/>`;
        return g + `</g>`;
      };
      /* LA ORILLA DE ENFRENTE, en un solo sitio: el agua, la vega, la franja
         de barro y el reflejo la comparten, así nunca se descuadran entre
         ellos. Y ondula de verdad, con entrantes y salientes de veinte y pico
         píxeles, para que la frontera verde-agua no se lea como un renglón
         tirado a regla de punta a punta. orilla(dy) la devuelve bajada dy
         píxeles; con inv, recorrida de derecha a izquierda */
      const ORI = [[1560, 486], [1650, 504, 1740, 518], [1820, 530, 1900, 514], [1990, 496, 2088, 506],
        [2180, 516, 2262, 534], [2350, 552, 2452, 524], [2560, 494, 2680, 502], [2780, 510, 2864, 500]];
      const orilla = (dy, inv) => {
        const d = dy || 0;
        if (!inv) return ORI.slice(1).map(p => `Q${p[0]} ${p[1] + d} ${p[2]} ${p[3] + d}`).join(" ");
        let r = "";
        for (let i = ORI.length - 1; i > 0; i--) {
          const a = ORI[i], b = ORI[i - 1];
          r += `Q${a[0]} ${a[1] + d} ${b.length > 2 ? b[2] : b[0]} ${(b.length > 2 ? b[3] : b[1]) + d} `;
        }
        return r.trim();
      };
      /* degradados propios, con prefijo egpX para no chocar con los iconos */
      s += `<defs>
        <linearGradient id="egpXcielo" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#8fd3f0"/><stop offset="34%" stop-color="#c8e6ef"/><stop offset="62%" stop-color="#ffe3ac"/><stop offset="100%" stop-color="#ffcf85"/></linearGradient>
        <radialGradient id="egpXsol" cx="42%" cy="38%" r="60%"><stop offset="0%" stop-color="#fffdf0"/><stop offset="100%" stop-color="#ffca4a"/></radialGradient>
        <radialGradient id="egpXaura" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffca4a" stop-opacity=".38"/><stop offset="52%" stop-color="#ffca4a" stop-opacity=".16"/><stop offset="100%" stop-color="#ffca4a" stop-opacity="0"/></radialGradient>
        <linearGradient id="egpXduna" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f2cf8b"/><stop offset="100%" stop-color="#d5a355"/></linearGradient>
        <linearGradient id="egpXduna2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e0b269"/><stop offset="100%" stop-color="#bd8940"/></linearGradient>
        <linearGradient id="egpXcampo" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8cc45f"/><stop offset="100%" stop-color="#498b3d"/></linearGradient>
        <linearGradient id="egpXsiega" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#8cc45f" stop-opacity="0"/><stop offset="45%" stop-color="#cbc471" stop-opacity=".7"/><stop offset="100%" stop-color="#e0b269" stop-opacity="1"/></linearGradient>
        <linearGradient id="egpXnilo" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#6fc9ea"/><stop offset="55%" stop-color="#2f9fd2"/><stop offset="100%" stop-color="#166f9f"/></linearGradient>
        <linearGradient id="egpXvado" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#a9e6f4"/><stop offset="100%" stop-color="#5cbfdf"/></linearGradient>
        <linearGradient id="egpXpiedra" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#e9d3a2"/><stop offset="48%" stop-color="#f3e2ba"/><stop offset="100%" stop-color="#d0ac70"/></linearGradient>
        <linearGradient id="egpXcaliza" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f0dcae"/><stop offset="100%" stop-color="#cfae73"/></linearGradient>
        <linearGradient id="egpXpatio" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e5cd9a"/><stop offset="100%" stop-color="#c6a267"/></linearGradient>
        <linearGradient id="egpXgranito" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#9c6f5c"/><stop offset="100%" stop-color="#5e4036"/></linearGradient>
        <linearGradient id="egpXcalina" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#ffe3ac" stop-opacity="0"/><stop offset="50%" stop-color="#ffe3ac" stop-opacity=".34"/><stop offset="100%" stop-color="#ffe3ac" stop-opacity="0"/></linearGradient>
        <linearGradient id="egpXlejano" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#e8c88f"/><stop offset="100%" stop-color="#f4dcae"/></linearGradient>
        <linearGradient id="egpXsiegaizq" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#e0b269" stop-opacity="1"/><stop offset="55%" stop-color="#cbc471" stop-opacity=".7"/><stop offset="100%" stop-color="#8cc45f" stop-opacity="0"/></linearGradient>
        <linearGradient id="egpXmojada" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#d9ab5e" stop-opacity="0"/><stop offset="62%" stop-color="#c79a55" stop-opacity=".85"/><stop offset="100%" stop-color="#a8813f" stop-opacity=".95"/></linearGradient>
        <linearGradient id="egpXmojada2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#a8813f" stop-opacity=".9"/><stop offset="100%" stop-color="#d9ab5e" stop-opacity="0"/></linearGradient>
        <linearGradient id="egpXcerca" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#e6b76b"/><stop offset="100%" stop-color="#c08e46"/></linearGradient>
        <linearGradient id="egpXcalinaV" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fff" stop-opacity="0"/><stop offset="20%" stop-color="#fff" stop-opacity="1"/></linearGradient>
        <mask id="egpXcalinaM"><rect x="0" y="240" width="4200" height="860" fill="url(#egpXcalinaV)"/></mask>
      </defs>`;
      /* ---------- CIELO: el sol grande sobre el templo, nubes finas y aves ---------- */
      s += `<rect x="0" y="0" width="4200" height="1100" fill="url(#egpXcielo)"/>
        <g transform="translate(3800 170)"><circle r="210" fill="url(#egpXaura)"><animate attributeName="r" values="210;228;210" dur="11s" repeatCount="indefinite"/></circle>
        <circle r="104" fill="url(#egpXsol)"/><circle cx="-32" cy="-30" r="24" fill="rgba(255,255,255,.5)"/></g>`;
      [[700, 176, 1.1, .7], [1500, 132, .9, .6], [2300, 196, 1.2, .55], [280, 250, .7, .5], [3060, 150, 1, .5]].forEach(n => {
        s += `<g opacity="${n[3]}" transform="translate(${n[0]} ${n[1]}) scale(${n[2]})" fill="#fff">
          <ellipse cx="0" cy="0" rx="112" ry="16"/><ellipse cx="-64" cy="14" rx="70" ry="11"/><ellipse cx="72" cy="12" rx="58" ry="10"/></g>`;
      });
      /* velos de nube altos y finos: el cielo se quedaba muy vacío entre las
         nubes gordas, y en Egipto lo que hay casi siempre son cirros */
      [[1080, 88, .8, .38], [1900, 250, .7, .3], [2540, 110, 1.05, .34], [3400, 238, .8, .28],
        [520, 150, .95, .32], [4090, 330, .75, .26], [2860, 176, .6, .3]].forEach(n => {
        s += `<g opacity="${n[3]}" transform="translate(${n[0]} ${n[1]}) scale(${n[2]})" fill="#fff">
          <ellipse cx="0" cy="0" rx="126" ry="9"/><ellipse cx="-78" cy="10" rx="64" ry="6"/><ellipse cx="86" cy="8" rx="52" ry="6"/></g>`;
      });
      s += `<g stroke="rgba(120,86,44,.42)" stroke-width="4" fill="none" stroke-linecap="round">
        <path d="M1120 268 q14 -12 28 0 q14 -12 28 0 M1280 316 q12 -10 24 0 q12 -10 24 0 M2560 258 q13 -11 26 0 q13 -11 26 0 M2700 306 q11 -9 22 0 q11 -9 22 0 M3560 300 q12 -10 24 0 q12 -10 24 0"/></g>
        <g stroke="rgba(120,86,44,.34)" stroke-width="3.4" fill="none" stroke-linecap="round">
        <path d="M420 210 q10 -9 20 0 q10 -9 20 0 M470 232 q9 -8 18 0 q9 -8 18 0
          M1660 200 q11 -10 22 0 q11 -10 22 0 M1720 226 q9 -8 18 0 q9 -8 18 0
          M2140 138 q10 -9 20 0 q10 -9 20 0 M3266 340 q11 -10 22 0 q11 -10 22 0
          M3326 366 q9 -8 18 0 q9 -8 18 0 M4020 240 q10 -9 20 0 q10 -9 20 0"/></g>
        <g><path d="M-26 0 q13 -14 26 0 q13 -14 26 0" stroke="rgba(120,86,44,.5)" stroke-width="4.4" fill="none" stroke-linecap="round">
        <animate attributeName="d" values="M-26 0 q13 -14 26 0 q13 -14 26 0;M-26 0 q13 7 26 0 q13 7 26 0;M-26 0 q13 -14 26 0 q13 -14 26 0" dur="1.7s" repeatCount="indefinite"/></path>
        <animateMotion dur="54s" repeatCount="indefinite" path="M -120 234 Q 1100 172 2200 238 Q 3300 300 4340 214"/></g>`;
      /* ---------- EL FONDO LEJANO: EL GEBEL, LOS ACANTILADOS DEL VALLE ----------
         el Nilo corre encajonado entre dos mesetas de piedra. Aquí queda el
         de la orilla de enfrente, muy claro por la calina, y se va hundiendo
         hacia la derecha para que el templo se lea contra el cielo. */
      s += `<path d="M1240 548 Q1400 404 1620 332 Q1840 294 2080 310 Q2320 328 2540 304 Q2760 282 2930 320 Q3140 368 3340 488 Q3540 598 3780 650 Q3990 688 4200 678 L4200 836 L2900 830 L2870 566 L2300 540 L1700 546 Z" fill="url(#egpXlejano)"/>
        <path d="M1240 548 Q1400 404 1620 332 Q1840 294 2080 310 Q2320 328 2540 304 Q2760 282 2930 320 Q3140 368 3340 488 Q3540 598 3780 650 Q3990 688 4200 678 L4200 700 Q3980 710 3770 672 Q3530 620 3330 510 Q3130 390 2926 342 Q2758 304 2542 326 Q2320 350 2078 332 Q1840 316 1624 354 Q1408 426 1250 566 Z" fill="rgba(255,255,255,.3)"/>`;
      /* las quebradas del acantilado, apenas insinuadas: solo donde la pared
         de piedra se ve de verdad. Pasado x 3400 el gebel ya queda tapado por
         las dunas y por el recinto, y allí una grieta se lee como un arañazo
         flotando en la arena, así que no se dibuja ninguna */
      s += `<g stroke="rgba(176,134,74,.22)" stroke-width="5" fill="none" stroke-linecap="round">
        <path d="M1720 356 q26 44 30 96 M1980 322 q18 40 20 88 M2260 336 q24 42 26 92 M2660 300 q20 44 22 94
          M3060 358 q30 50 34 104 M3420 522 q26 46 28 96"/></g>`;
      /* el pueblo de adobe y su palmeral, chiquitines por la distancia */
      [[1712, 330], [1766, 332], [1830, 328], [2244, 334], [2296, 332], [2620, 314], [2668, 316]].forEach(c => {
        s += `<g fill="#d8b482"><rect x="${c[0]}" y="${c[1] - 22}" width="34" height="22"/>
          <rect x="${c[0] + 4}" y="${c[1] - 28}" width="26" height="7" rx="2" fill="#c39c62"/></g>`;
      });
      s += `<g stroke="#7fa771" stroke-width="4" fill="none" stroke-linecap="round" opacity=".8">
        <path d="M1880 330 v-20 M1874 312 q6 -8 12 0 M1868 316 q12 -12 24 0"/>
        <path d="M2130 334 v-18 M2124 318 q6 -8 12 0 M2118 322 q12 -12 24 0"/>
        <path d="M2420 326 v-20 M2414 308 q6 -8 12 0 M2408 312 q12 -12 24 0"/>
        <path d="M2760 318 v-18 M2754 302 q6 -8 12 0 M2748 306 q12 -12 24 0"/></g>`;
      /* las dunas hundidas detrás del recinto del templo */
      s += `<g fill="#e9c791" opacity=".75"><ellipse cx="3120" cy="700" rx="220" ry="52"/><ellipse cx="3520" cy="742" rx="260" ry="56"/>
        <ellipse cx="3950" cy="766" rx="240" ry="50"/><ellipse cx="3300" cy="782" rx="200" ry="44"/></g>
        <g stroke="rgba(176,134,74,.2)" stroke-width="5" fill="none" stroke-linecap="round">
        <path d="M3060 716 q24 -10 48 0 M3460 758 q24 -10 48 0 M3880 780 q24 -10 48 0"/></g>`;
      /* dos datileras del recinto, altas como las de verdad: asoman por los
         huecos que dejan las capillas y su copa queda por encima de los
         tejados, así se leen como palmeras y no como matojos. El tronco lleva
         sus anillos y la copa cinco hojas arqueadas con los dátiles */
      const datilera = (x, base, alto, k, giro) => {
        const h = (alto / k).toFixed(1);
        let d = `<path d="M0 0 q-16 ${(-h * .55).toFixed(1)} 7 ${-h}" stroke="#a2814f" stroke-width="13" fill="none" stroke-linecap="round"/>`;
        for (let i = 1; i <= 6; i++) {              /* los anillos del tronco */
          const t = i / 7, cx = (-32 * t * (1 - t) + 7 * t * t).toFixed(1);
          d += `<path d="M${(cx - 6).toFixed(1)} ${(-h * t).toFixed(1)} h12" stroke="#87663a" stroke-width="3.2" opacity=".55"/>`;
        }
        d += `<g stroke="#6f9c6b" stroke-width="11" fill="none" stroke-linecap="round">
          <path d="M7 ${-h} q-44 -14 -80 8"/><path d="M7 ${-h} q-40 -40 -56 -72"/>
          <path d="M7 ${-h} q4 -54 36 -74"/><path d="M7 ${-h} q46 -34 80 -18"/>
          <path d="M7 ${-h} q42 -2 66 26"/></g>
          <g stroke="#8bb884" stroke-width="4" fill="none" stroke-linecap="round" opacity=".8">
          <path d="M7 ${-h} q-38 -24 -62 -34"/><path d="M7 ${-h} q26 -46 52 -58"/><path d="M7 ${-h} q48 -12 74 6"/></g>
          <circle cx="-6" cy="${(-h + 10)}" r="7" fill="#c8862f"/><circle cx="14" cy="${(-h + 13)}" r="7" fill="#c8862f"/>
          <circle cx="3" cy="${(-h + 20)}" r="6" fill="#b3742a"/>`;
        return `<g transform="translate(${x} ${base}) scale(${giro * k} ${k})" opacity=".92">${d}</g>`;
      };
      s += datilera(3646, 812, 236, .84, 1) + datilera(3864, 812, 404, .78, -1);
      /* ---------- EL DESIERTO DEL FONDO Y LAS PIRÁMIDES DE GIZA ---------- */
      s += `<path d="M0 470 Q300 424 620 462 Q940 500 1260 456 Q1520 424 1720 452 L1720 700 L0 700 Z" fill="url(#egpXduna)" opacity=".62"/>`;
      /* Giza escalonada: la que lleva el punto es la Gran Pirámide y es la
         mayor de la escena, así que las decorativas van menguando hacia el
         fondo y ninguna la eclipsa. La pequeña de la izquierda le hace de
         respaldo sin taparla */
      s += piramide(1186, 486, 600, 88, ".4") + piramide(1016, 452, 620, 118, ".54") +
        piramide(846, 424, 632, 146, ".68") + piramide(596, 414, 630, 172, ".78") +
        piramide(56, 452, 566, 122, ".62");
      s += `<path d="M0 566 Q280 518 600 558 Q900 596 1180 556 Q1420 520 1620 552 Q1700 566 1740 580 L1740 800 L0 800 Z" fill="url(#egpXduna)"/>
        <path d="M0 566 Q280 518 600 558 Q900 596 1180 556 Q1420 520 1620 552 Q1700 566 1740 580 L1740 612 Q1660 594 1600 584 Q1420 552 1180 588 Q900 628 600 590 Q280 550 0 600 Z" fill="rgba(255,255,255,.22)"/>`;
      s += `<g stroke="rgba(150,102,44,.24)" stroke-width="5" fill="none" stroke-linecap="round">`;
      for (let i = 0; i < 22; i++) {
        const x = 30 + i * 78, y = 628 + ((i * 53) % 96);
        if (libre(x - 6, y - 8, 76, 16)) s += `<path d="M${x} ${y} q22 -10 44 0"/>`;
      }
      s += `</g>`;
      /* ---------- LA MESETA DE GIZA: terraza, mastaba, patio y obelisco ---------- */
      s += `<path d="M-40 542 L960 538 L1000 620 L1048 780 L-40 780 Z" fill="url(#egpXcaliza)"/>
        <path d="M-40 542 L960 538 L964 562 L-40 566 Z" fill="#f6e6bf"/>`;
      s += `<g stroke="rgba(150,112,58,.3)" stroke-width="4" fill="none">`;
      for (let y = 590; y < 772; y += 44) s += `<path d="M-40 ${y} L${998 + (y - 590) * .08} ${y}"/>`;
      for (let x = 20; x < 990; x += 78) s += `<path d="M${x} 566 L${x + 2} 772"/>`;
      s += `</g>`;
      /* la fila de mastabas: las tumbas bajas que rodean a las pirámides,
         cada una con su puerta y su estela, así la terraza no queda vacía */
      [[22, 758, .9], [340, 762, .84], [508, 624, .92], [630, 628, .88], [724, 604, .96], [872, 610, .88]].forEach(m => {
        const w = 104 * m[2], h = 52 * m[2];
        if (!libre(m[0] - 8, m[1] - h - 10, w + 16, h + 20)) return;
        s += `<g><path d="M${m[0]} ${m[1]} L${m[0] + 8} ${m[1] - h} L${m[0] + w - 8} ${m[1] - h} L${m[0] + w} ${m[1]} Z" fill="url(#egpXcaliza)"/>
          <path d="M${m[0] + 8} ${m[1] - h} L${m[0] + w - 8} ${m[1] - h} L${m[0] + w - 8} ${m[1] - h + 9} L${m[0] + 8} ${m[1] - h + 9} Z" fill="#f6e6bf"/>
          <path d="M${m[0] + w * .46} ${m[1]} L${m[0] + w * .48} ${m[1] - h * .58} L${m[0] + w * .64} ${m[1] - h * .58} L${m[0] + w * .66} ${m[1]} Z" fill="#8a6a3c"/>
          <path d="M${m[0] + w * .16} ${m[1] - h * .3} L${m[0] + w * .3} ${m[1] - h * .3}" stroke="rgba(150,112,58,.4)" stroke-width="4"/></g>`;
      });
      /* la calzada procesional, que baja de la meseta al patio de la esfinge */
      s += `<path d="M1002 566 L1042 566 L836 758 L788 758 Z" fill="url(#egpXpatio)"/>
        <path d="M994 566 L1010 566 L806 758 L788 758 Z" fill="#e0c08a"/>
        <path d="M1034 566 L1050 568 L852 758 L834 758 Z" fill="#e0c08a"/>`;
      s += `<g stroke="rgba(150,112,58,.3)" stroke-width="4" fill="none">
        <path d="M986 610 L1030 610 M950 654 L996 654 M912 698 L960 698 M876 742 L924 742"/></g>`;
      /* sillares de caliza esperando en el trineo de madera, como se movían */
      s += `<g><path d="M150 742 L266 738 L268 700 L152 704 Z" fill="url(#egpXcaliza)"/>
        <path d="M150 742 L266 738 L266 748 L150 752 Z" fill="#c39c62"/>
        <path d="M152 704 L268 700 L268 710 L152 714 Z" fill="#f6e6bf"/>
        <path d="M140 752 L280 748 L282 762 L140 766 Z" fill="#8a6136"/>
        <path d="M144 766 q-14 8 -4 16 M276 762 q14 8 4 16" stroke="#8a6136" stroke-width="7" fill="none" stroke-linecap="round"/></g>
        <g><path d="M330 700 L406 698 L408 664 L332 666 Z" fill="url(#egpXcaliza)"/>
        <path d="M332 666 L408 664 L408 674 L332 676 Z" fill="#f6e6bf"/>
        <path d="M330 700 L406 698 L406 708 L330 710 Z" fill="#c39c62"/></g>`;
      /* dos estelas con su remate redondeado, plantadas en la terraza */
      [[478, 690, 1], [962, 692, .8]].forEach(t => {
        const w = 30 * t[2], h = 86 * t[2];
        s += `<g><path d="M${t[0] - w / 2} ${t[1]} L${t[0] - w / 2} ${t[1] - h + w / 2} Q${t[0]} ${t[1] - h - w * .3} ${t[0] + w / 2} ${t[1] - h + w / 2} L${t[0] + w / 2} ${t[1]} Z" fill="url(#egpXcaliza)"/>
          <path d="M${t[0] - w * .3} ${t[1] - h * .66} h${w * .6} M${t[0] - w * .3} ${t[1] - h * .48} h${w * .6} M${t[0] - w * .3} ${t[1] - h * .3} h${w * .6}" stroke="rgba(150,112,58,.4)" stroke-width="3.4"/>
          <path d="M${t[0] - w * .8} ${t[1]} L${t[0] + w * .8} ${t[1]} L${t[0] + w * .7} ${t[1] + 12} L${t[0] - w * .7} ${t[1] + 12} Z" fill="#d3ae6f"/></g>`;
      });
      /* la mastaba escalonada donde se abre la cámara del tesoro */
      s += `<path d="M828 538 L846 296 L960 296 L1000 538 Z" fill="url(#egpXcaliza)"/>
        <path d="M846 296 L960 296 L1000 538 L928 538 L920 336 Z" fill="#d8b87e"/>
        <path d="M840 348 L968 348 M834 404 L980 404 M830 462 L990 462" stroke="rgba(150,112,58,.35)" stroke-width="5"/>
        <path d="M838 296 L968 296 L968 314 L838 314 Z" fill="#f6e6bf"/>
        <path d="M862 538 L866 400 L936 400 L944 538 Z" fill="url(#egpXgranito)" opacity=".55"/>`;
      /* el patio empedrado de la esfinge, con su murete */
      s += `<path d="M470 748 L900 745 L928 862 L448 866 Z" fill="url(#egpXpatio)"/>
        <path d="M470 748 L900 745 L902 762 L470 765 Z" fill="#f2ddaa"/>`;
      s += `<g stroke="rgba(150,112,58,.28)" stroke-width="4" fill="none">
        <path d="M462 790 L916 787 M456 828 L924 825 M560 765 L566 862 M672 765 L678 862 M784 765 L792 862"/></g>
        <path d="M860 745 L900 743 L906 696 L864 698 Z" fill="url(#egpXcaliza)"/>
        <path d="M414 866 L960 861 L970 894 L404 898 Z" fill="#d3ae6f"/>`;
      /* ---------- PRIMER PLANO DE LA MESETA: la duna de delante ----------
         una cresta de arena cercana cierra el escenario por abajo y da fondo,
         plano medio y primer plano bien separados */
      s += `<path d="M-40 986 Q180 918 420 950 Q660 982 900 940 Q1120 906 1300 952 Q1420 984 1520 1034 L1520 1100 L-40 1100 Z" fill="url(#egpXcerca)"/>
        <path d="M-40 986 Q180 918 420 950 Q660 982 900 940 Q1120 906 1300 952 Q1420 984 1520 1034 L1512 1058 Q1408 1006 1292 976 Q1116 932 900 964 Q660 1006 420 974 Q180 942 -40 1010 Z" fill="rgba(255,255,255,.22)"/>`;
      s += `<g stroke="rgba(150,102,44,.26)" stroke-width="5" fill="none" stroke-linecap="round">
        <path d="M60 1040 q24 -10 48 0 M300 1012 q24 -10 48 0 M540 1046 q24 -10 48 0 M760 1010 q24 -10 48 0 M980 1042 q24 -10 48 0"/></g>
        <g fill="url(#egpXduna2)" opacity=".7"><ellipse cx="196" cy="1074" rx="54" ry="18"/><ellipse cx="640" cy="1082" rx="46" ry="15"/>
        <ellipse cx="1030" cy="1078" rx="40" ry="14"/></g>
        <g stroke="#a8a05a" stroke-width="4" fill="none" stroke-linecap="round" opacity=".6">
        <path d="M410 1064 q-8 -26 -18 -36 M420 1064 q0 -30 6 -42 M430 1064 q10 -24 20 -32"/>
        <path d="M868 1036 q-8 -24 -18 -34 M878 1036 q0 -28 6 -40"/></g>`;
      /* la franja de abajo se quedaba lisa: se le echan más rizos de viento,
         guijarros, matas secas y el rastro de un camello que pasó por delante */
      s += `<g fill="url(#egpXduna2)" opacity=".6"><ellipse cx="430" cy="1096" rx="60" ry="20"/><ellipse cx="836" cy="1054" rx="44" ry="15"/>
        <ellipse cx="1250" cy="1092" rx="52" ry="17"/><ellipse cx="70" cy="1026" rx="38" ry="13"/></g>`;
      s += `<g stroke="rgba(150,102,44,.32)" stroke-width="5" fill="none" stroke-linecap="round">`;
      for (let i = 0; i < 22; i++) {
        const x = 26 + i * 58, y = 996 + ((i * 61) % 96);
        if (libre(x - 6, y - 8, 62, 16)) s += `<path d="M${x} ${y} q19 -9 38 0"/>`;
      }
      s += `</g>`;
      s += `<g fill="#a8763a" opacity=".45"><ellipse cx="150" cy="1058" rx="11" ry="5"/><ellipse cx="352" cy="1088" rx="9" ry="4"/>
        <ellipse cx="516" cy="1030" rx="13" ry="5"/><ellipse cx="742" cy="1070" rx="10" ry="4"/><ellipse cx="906" cy="1042" rx="12" ry="5"/>
        <ellipse cx="1108" cy="1084" rx="9" ry="4"/><ellipse cx="1246" cy="1050" rx="11" ry="5"/>
        <ellipse cx="268" cy="1014" rx="10" ry="4"/><ellipse cx="620" cy="1096" rx="12" ry="5"/>
        <ellipse cx="1010" cy="1008" rx="9" ry="4"/><ellipse cx="1330" cy="1024" rx="11" ry="5"/></g>`;
      s += `<g fill="rgba(150,102,44,.26)">`;
      for (let i = 0; i < 9; i++) {
        const x = 96 + i * 128, y = 1094 - i * 9;
        s += `<ellipse cx="${x}" cy="${y}" rx="15" ry="8"/><ellipse cx="${x + 34}" cy="${y - 18}" rx="13" ry="7"/>`;
      }
      s += `</g>`;
      s += `<g stroke="#a8a05a" stroke-width="4" fill="none" stroke-linecap="round" opacity=".55">
        <path d="M232 1078 q-8 -24 -18 -34 M242 1078 q0 -28 6 -40 M252 1078 q10 -22 20 -30"/>
        <path d="M646 1046 q-8 -24 -18 -34 M656 1046 q0 -28 6 -40"/>
        <path d="M1160 1064 q-8 -24 -18 -34 M1170 1064 q0 -28 6 -40 M1180 1064 q10 -22 20 -30"/></g>`;
      /* la arena que se amontona contra el zócalo de la terraza: así el borde
         no queda como una raya tirada a regla */
      s += `<g fill="url(#egpXduna)" opacity=".9"><ellipse cx="90" cy="786" rx="130" ry="26"/><ellipse cx="330" cy="790" rx="112" ry="22"/>
        <ellipse cx="1006" cy="800" rx="110" ry="22"/><ellipse cx="1190" cy="810" rx="104" ry="22"/></g>
        <g stroke="rgba(150,102,44,.22)" stroke-width="5" fill="none" stroke-linecap="round">
        <path d="M120 842 q24 -10 48 0 M380 866 q24 -10 48 0 M700 852 q24 -10 48 0 M240 916 q24 -10 48 0 M560 930 q24 -10 48 0 M60 890 q24 -10 48 0"/></g>
        <g fill="url(#egpXduna2)" opacity=".5"><ellipse cx="300" cy="872" rx="34" ry="12"/><ellipse cx="760" cy="908" rx="28" ry="10"/></g>`;
      /* el obelisco de la meseta: su podio, con la greca en el zócalo */
      s += `<path d="M1060 542 L1246 540 L1258 700 L1050 702 Z" fill="url(#egpXcaliza)"/>
        <path d="M1060 542 L1246 540 L1248 560 L1060 562 Z" fill="#f6e6bf"/>
        <path d="M1074 604 L1236 602 M1070 646 L1242 644" stroke="rgba(150,112,58,.35)" stroke-width="5"/>
        <path d="M1040 700 L1266 698 L1274 736 L1032 740 Z" fill="#d3ae6f"/>`;
      s += greca(1064, 1250, 686, 22, 15, ".35");
      s += `<path d="M1044 740 L1272 737 L1286 800 L1030 804 Z" fill="url(#egpXpatio)"/>`;
      /* el pedestal de granito del obelisco, para que no se apoye en el aire */
      s += `<path d="M1114 544 L1186 543 L1182 519 L1118 520 Z" fill="url(#egpXgranito)"/>
        <path d="M1108 546 L1192 545 L1194 556 L1106 557 Z" fill="#d3b077"/>
        <path d="M1114 520 L1186 519 L1186 527 L1114 528 Z" fill="#b08a6e" opacity=".7"/>`;
      /* la duna donde camina el camello, al pie de la meseta */
      s += `<path d="M1240 838 Q1312 720 1374 690 L1478 692 Q1560 728 1614 834 L1614 876 L1240 876 Z" fill="url(#egpXduna)"/>
        <path d="M1282 796 q24 -10 48 0 M1520 806 q24 -10 48 0" stroke="rgba(150,102,44,.28)" stroke-width="5" fill="none" stroke-linecap="round"/>
        <g fill="url(#egpXduna2)"><ellipse cx="1212" cy="890" rx="46" ry="18"/><ellipse cx="1626" cy="900" rx="38" ry="15"/></g>`;
      /* ---------- TRANSICIÓN 1: LA MESETA BAJA AL DESIERTO DE DUNAS ---------- */
      /* la caliza labrada se acaba y empieza la arena suelta, cada vez más */
      s += `<path d="M980 780 Q1120 726 1290 750 Q1450 772 1600 738 Q1680 720 1740 744 L1740 940 L980 940 Z" fill="url(#egpXduna)"/>
        <path d="M980 780 Q1120 726 1290 750 Q1450 772 1600 738 Q1680 720 1740 744 L1740 768 Q1676 748 1600 764 Q1450 798 1290 776 Q1120 752 990 806 Z" fill="rgba(255,255,255,.2)"/>`;
      s += `<g stroke="rgba(150,102,44,.26)" stroke-width="5" fill="none" stroke-linecap="round">`;
      for (let i = 0; i < 24; i++) {
        const x = 1000 + i * 32, y = 864 + ((i * 67) % 200);
        if (libre(x - 6, y - 8, 76, 16)) s += `<path d="M${x} ${y} q22 -10 44 0"/>`;
      }
      s += `</g>`;
      s += `<g fill="url(#egpXduna2)"><ellipse cx="1074" cy="960" rx="52" ry="20"/><ellipse cx="1350" cy="1010" rx="44" ry="17"/>
        <ellipse cx="1560" cy="962" rx="38" ry="15"/><ellipse cx="1180" cy="1060" rx="56" ry="21"/></g>
        <g stroke="#a8a05a" stroke-width="4" fill="none" stroke-linecap="round" opacity=".6">
        <path d="M1266 950 q-8 -24 -18 -34 M1276 950 q0 -28 6 -40 M1286 950 q10 -22 20 -30"/>
        <path d="M1508 1040 q-8 -24 -18 -34 M1518 1040 q0 -28 6 -40"/></g>`;
      /* ---------- TRANSICIÓN 2: LA RIBERA OESTE, DE LA ARENA AL AGUA ----------
         la orilla baja en diagonal, no en línea recta: primero arena seca,
         luego arena mojada más oscura, cañas, guijarros y el embarcadero
         con sus escalones metiéndose en el río */
      /* la lengua de arena de la ribera, que empalma con las dunas de la meseta */
      s += `<path d="M1380 646 Q1500 590 1600 636 Q1640 700 1672 762 Q1760 890 1888 986 L1920 1100 L1300 1100 Q1310 880 1380 646 Z" fill="url(#egpXcerca)" opacity=".72"/>
        <path d="M1380 646 Q1500 590 1600 636 Q1640 700 1672 762 L1650 776 Q1612 706 1586 660 Q1496 620 1394 672 Z" fill="rgba(255,255,255,.2)"/>`;
      /* la franja de arena mojada, pegada al agua */
      s += `<path d="M1560 486 Q1596 640 1672 762 Q1760 890 1888 986 L1848 1002 Q1716 902 1626 768 Q1550 644 1516 494 Z" fill="url(#egpXmojada)"/>`;
      s += `<g stroke="rgba(150,102,44,.26)" stroke-width="5" fill="none" stroke-linecap="round">
        <path d="M1470 700 q22 -10 44 0 M1420 800 q22 -10 44 0 M1540 880 q22 -10 44 0 M1640 960 q22 -10 44 0 M1370 918 q22 -10 44 0"/></g>
        <g fill="#c08e46" opacity=".55"><ellipse cx="1512" cy="742" rx="16" ry="7"/><ellipse cx="1596" cy="854" rx="20" ry="8"/>
        <ellipse cx="1700" cy="946" rx="17" ry="7"/><ellipse cx="1466" cy="990" rx="22" ry="9"/></g>`;
      /* y el mismo remate de arena para el tramo de ribera del primer plano */
      s += `<g fill="url(#egpXduna2)" opacity=".5"><ellipse cx="1470" cy="1094" rx="54" ry="18"/><ellipse cx="1780" cy="1062" rx="42" ry="14"/></g>
        <g stroke="rgba(150,102,44,.3)" stroke-width="5" fill="none" stroke-linecap="round">
        <path d="M1320 1042 q19 -9 38 0 M1412 1078 q19 -9 38 0 M1500 1016 q19 -9 38 0 M1588 1064 q19 -9 38 0
          M1666 1024 q19 -9 38 0 M1748 1084 q19 -9 38 0 M1830 1040 q19 -9 38 0
          M1360 1004 q19 -9 38 0 M1620 1096 q19 -9 38 0 M1786 1010 q19 -9 38 0"/></g>
        <g fill="#a8763a" opacity=".42"><ellipse cx="1368" cy="1058" rx="11" ry="5"/><ellipse cx="1552" cy="1090" rx="9" ry="4"/>
        <ellipse cx="1700" cy="1058" rx="12" ry="5"/><ellipse cx="1866" cy="1076" rx="10" ry="4"/>
        <ellipse cx="1440" cy="1030" rx="10" ry="4"/><ellipse cx="1650" cy="1006" rx="9" ry="4"/></g>
        <g stroke="#a8a05a" stroke-width="4" fill="none" stroke-linecap="round" opacity=".5">
        <path d="M1462 1052 q-8 -24 -18 -34 M1472 1052 q0 -28 6 -40"/></g>`;
      /* el embarcadero de piedra, con sus escalones bajando al río: los
         últimos peldaños se meten en el agua y quedan tapados por ella */
      s += `<path d="M1478 692 L1642 684 L1654 748 L1488 756 Z" fill="url(#egpXcaliza)"/>
        <path d="M1478 692 L1642 684 L1644 704 L1479 712 Z" fill="#f6e6bf"/>`;
      s += `<g stroke="rgba(150,112,58,.3)" stroke-width="4" fill="none">
        <path d="M1534 688 L1540 752 M1596 685 L1602 749"/></g>`;
      s += greca(1486, 1636, 742, 22, 13, ".3");
      s += `<g fill="url(#egpXcaliza)"><path d="M1500 756 L1740 744 L1748 786 L1510 796 Z"/>
        <path d="M1520 796 L1770 784 L1780 826 L1532 836 Z"/><path d="M1540 836 L1800 824 L1812 866 L1554 876 Z"/></g>
        <g fill="#f6e6bf" opacity=".7"><path d="M1500 756 L1740 744 L1741 754 L1501 766 Z"/><path d="M1520 796 L1770 784 L1771 794 L1521 806 Z"/>
        <path d="M1540 836 L1800 824 L1801 834 L1541 846 Z"/></g>`;
      /* los norays de piedra y el cabo amarrado */
      s += `<g fill="url(#egpXgranito)"><rect x="1494" y="642" width="24" height="46" rx="10"/><rect x="1602" y="636" width="24" height="46" rx="10"/></g>
        <path d="M1506 640 Q1560 612 1614 634" stroke="#c9a870" stroke-width="6" fill="none"/>`;
      /* ---------- EL NILO: el agua, los reflejos y las ondas ---------- */
      s += `<path d="M1560 486 Q1596 640 1672 762 Q1760 890 1888 986 Q2060 940 2300 950 Q2600 962 2900 944 L2864 500 ${orilla(0, 1)} Z" fill="url(#egpXnilo)"/>
        <path d="M1560 486 ${orilla(0)} L2872 556 ${orilla(56, 1)} Z" fill="#8ad8f2" opacity=".5"/>
        <path d="M1560 486 Q1596 640 1672 762 Q1760 890 1888 986 L1918 978 Q1786 878 1700 748 Q1626 626 1592 482 Z" fill="#8ad8f2" opacity=".45"/>`;
      s += `<g stroke="rgba(255,255,255,.55)" stroke-width="5" fill="none" stroke-linecap="round">
        <path d="M1780 620 q26 -12 52 0 M2020 596 q26 -12 52 0 M2320 606 q26 -12 52 0 M2620 592 q26 -12 52 0 M2780 640 q26 -12 52 0
          M1860 720 q30 -13 60 0 M2140 730 q30 -13 60 0 M2420 706 q30 -13 60 0 M2700 736 q30 -13 60 0
          M1760 836 q34 -14 68 0 M2080 862 q34 -14 68 0 M2400 840 q34 -14 68 0 M2680 866 q34 -14 68 0 M2520 916 q34 -14 68 0"><animate attributeName="opacity" values=".8;.34;.8" dur="5.4s" repeatCount="indefinite"/></path></g>`;
      /* el sol reflejado en el agua, en trazos anchos, del lado del templo */
      s += `<g fill="#fff" opacity=".2"><ellipse cx="2830" cy="580" rx="70" ry="7"/><ellipse cx="2800" cy="648" rx="100" ry="8"/>
        <ellipse cx="2760" cy="726" rx="130" ry="9"/><ellipse cx="2716" cy="810" rx="160" ry="11"/></g>`;
      /* la estela de agua del hipopótamo, para que no flote en el vacío */
      s += `<g fill="#fff" opacity=".22"><ellipse cx="2200" cy="684" rx="86" ry="16"/></g>
        <g stroke="rgba(255,255,255,.55)" stroke-width="5" fill="none" stroke-linecap="round">
        <path d="M2136 700 q30 -12 60 0 M2216 706 q30 -12 60 0"><animate attributeName="opacity" values=".75;.3;.75" dur="4.6s" repeatCount="indefinite"/></path></g>`;
      /* flores de loto flotando, la flor del Alto Egipto */
      [[1900, 660], [2270, 700], [2560, 660], [2060, 880], [2700, 900]].forEach((f, i) => {
        if (!libre(f[0] - 24, f[1] - 20, 48, 34)) return;
        s += `<g transform="translate(${f[0]} ${f[1]})">${i % 2 ? `<animate attributeName="opacity" values="1;.75;1" dur="6s" repeatCount="indefinite"/>` : ""}
          <ellipse cx="0" cy="10" rx="26" ry="8" fill="#3f8b4a"/>
          <path d="M0 -16 Q-9 -4 -14 8 L14 8 Q9 -4 0 -16 Z" fill="#f7a8c4"/>
          <path d="M-14 8 Q-22 -2 -26 6 M14 8 Q22 -2 26 6" stroke="#f7a8c4" stroke-width="7" fill="none" stroke-linecap="round"/>
          <circle cx="0" cy="2" r="5" fill="#ffe28a"/></g>`;
      });
      /* ---------- LOS FALUCHOS: las barcas de vela del Nilo ---------- */
      const falucho = (x, y, k, o) => `<g transform="translate(${x} ${y}) scale(${k})" opacity="${o}">
        <path d="M-56 0 L56 0 L40 22 Q0 32 -40 22 Z" fill="#8a6136"/>
        <path d="M-58 -4 L58 -4 L58 4 L-58 4 Z" fill="#c4a06a"/>
        <rect x="-4" y="-108" width="8" height="108" rx="4" fill="#8a6136"/>
        <path d="M2 -104 L2 -8 L74 -12 Z" fill="#fdf6e4"/>
        <path d="M-2 -96 L-2 -20 L-54 -22 Z" fill="#f2e7cd"/>
        <path d="M6 -92 L60 -22 M6 -70 L52 -20" stroke="rgba(160,132,86,.4)" stroke-width="3"/>
        <path d="M-64 12 q30 -12 60 0 t60 0" stroke="rgba(255,255,255,.5)" stroke-width="4" fill="none" stroke-linecap="round"/></g>`;
      s += `<g><animateTransform attributeName="transform" type="translate" values="0 0;-52 18;0 0" dur="46s" repeatCount="indefinite"/>${falucho(2480, 760, .9, ".95")}</g>`;
      s += `<g><animateTransform attributeName="transform" type="translate" values="0 0;44 -14;0 0" dur="58s" repeatCount="indefinite"/>${falucho(2010, 880, 1, ".95")}</g>`;
      s += falucho(2740, 600, .52, ".55") + falucho(2160, 560, .46, ".5");
      /* ---------- LOS CAMPOS DE CULTIVO DE LA OTRA ORILLA ----------
         río arriba el valle se cierra: la vega se estrecha y muere en punta
         justo donde el agua se pierde, así no queda una losa de campo con el
         canto recortado contra el cielo. Su borde de arriba baja siempre por
         debajo de la cresta del gebel, que le hace de fondo. */
      s += `<path d="M1556 480 Q1600 420 1660 384 Q1720 344 1790 322 Q2020 310 2340 328 Q2600 336 2820 322 L2864 500 ${orilla(0, 1)} Z" fill="url(#egpXcampo)"/>
        <path d="M1556 480 Q1600 420 1660 384 Q1720 344 1790 322 Q2020 310 2340 328 Q2600 336 2820 322 L2826 352 Q2600 366 2340 358 Q2040 340 1806 352 Q1726 374 1668 416 Q1616 452 1584 486 Z" fill="#a5d47a" opacity=".7"/>`;
      s += `<g stroke="rgba(40,90,36,.35)" stroke-width="4" fill="none">
        <path d="M1670 372 Q2000 356 2360 368 M1676 412 Q2020 396 2400 408 M1682 452 Q2040 436 2440 448 M1688 492 Q2060 476 2480 488"/></g>
        <g fill="#3f7f36" opacity=".7"><ellipse cx="1820" cy="392" rx="34" ry="10"/><ellipse cx="2180" cy="430" rx="36" ry="11"/>
        <ellipse cx="2360" cy="474" rx="32" ry="10"/><ellipse cx="1740" cy="470" rx="30" ry="9"/></g>`;
      /* el mismo verde, secándose hacia la punta hasta volverse arena */
      s += `<path d="M1556 480 Q1600 420 1660 384 Q1720 344 1790 322 Q1880 316 1980 322 L2010 508 Q1950 500 1900 514 Q1820 530 1740 518 Q1650 504 1560 486 Z" fill="url(#egpXsiegaizq)"/>`;
      s += `<g fill="url(#egpXduna)" opacity=".85"><ellipse cx="1620" cy="466" rx="42" ry="13"/><ellipse cx="1700" cy="452" rx="52" ry="15"/>
        <ellipse cx="1790" cy="432" rx="58" ry="17"/><ellipse cx="1888" cy="408" rx="54" ry="16"/><ellipse cx="1980" cy="392" rx="46" ry="14"/></g>
        <g stroke="rgba(150,102,44,.24)" stroke-width="4" fill="none" stroke-linecap="round">
        <path d="M1636 480 q18 -8 36 0 M1734 466 q18 -8 36 0 M1846 442 q18 -8 36 0"/></g>
        <g stroke="#a8a05a" stroke-width="4" fill="none" stroke-linecap="round" opacity=".65">
        <path d="M1682 476 q-7 -20 -16 -28 M1692 476 q0 -24 5 -34"/>
        <path d="M1852 466 q-7 -20 -16 -28 M1862 466 q0 -24 5 -34"/></g>`;
      /* lengüetas de arena a caballo del filo de la vega: el desierto y el
         campo se mezclan en vez de tocarse con un solo trazo limpio */
      s += `<g fill="url(#egpXduna)" opacity=".7"><ellipse cx="1666" cy="392" rx="46" ry="15" transform="rotate(-32 1666 392)"/>
        <ellipse cx="1748" cy="344" rx="52" ry="14" transform="rotate(-20 1748 344)"/>
        <ellipse cx="1958" cy="322" rx="44" ry="12"/></g>
        <g stroke="#a8a05a" stroke-width="4" fill="none" stroke-linecap="round" opacity=".55">
        <path d="M1638 428 q-7 -20 -16 -28 M1648 428 q0 -24 5 -34"/>
        <path d="M1712 372 q-6 -18 -14 -25 M1721 372 q0 -22 5 -31"/></g>`;
      /* la orilla de enfrente no corta en seco: barro, juncos y la lámina
         del agua se van mezclando a lo largo de todo el borde */
      s += `<path d="M1560 486 ${orilla(0)} L2866 524 ${orilla(24, 1)} Z" fill="#a9863f" opacity=".55"/>
        <path d="M1560 498 ${orilla(12)}" stroke="rgba(255,240,200,.3)" stroke-width="5" fill="none"/>`;
      /* donde el barro se mete más adentro, dos bajíos de fango y una punta de
         arena: la orilla no solo ondula, además tiene fondo */
      s += `<path d="M1876 516 Q1902 556 1938 562 Q1972 554 1984 498 Z" fill="#a9863f" opacity=".6"/>
        <path d="M2276 544 Q2306 578 2352 580 Q2398 572 2424 540 Z" fill="#a9863f" opacity=".45"/>`;
      s += `<path d="M2586 504 Q2610 548 2664 554 Q2702 548 2702 504 Z" fill="url(#egpXduna)"/>
        <path d="M2590 518 Q2614 552 2664 558 Q2698 552 2700 520" stroke="#a9863f" stroke-width="6" fill="none" opacity=".7"/>
        <path d="M2612 532 q18 -8 36 0" stroke="rgba(150,102,44,.3)" stroke-width="4" fill="none" stroke-linecap="round"/>`;
      /* los juncos siguen la orilla nueva, cada mata a su altura */
      s += `<g stroke="#4c9a4a" stroke-width="4.6" fill="none" stroke-linecap="round">
        <path d="M1930 560 q-7 -28 -17 -40 M1941 560 q0 -32 6 -46 M1952 560 q9 -26 19 -36"/>
        <path d="M2156 522 q-6 -24 -15 -34 M2166 522 q0 -28 5 -40"/>
        <path d="M2646 554 q-7 -28 -17 -40 M2657 554 q0 -32 6 -46 M2668 554 q9 -26 19 -36"/>
        <path d="M2344 578 q-6 -24 -15 -34 M2354 578 q0 -28 5 -40"/></g>`;
      s += `<g stroke="#4c9a4a" stroke-width="4.6" fill="none" stroke-linecap="round">
        <path d="M1806 542 q-7 -30 -17 -42 M1817 542 q0 -34 6 -48 M1828 542 q9 -28 19 -38"/>
        <path d="M2058 524 q-7 -30 -17 -42 M2069 524 q0 -34 6 -48 M2080 524 q9 -28 19 -38"/>
        <path d="M2306 560 q-7 -30 -17 -42 M2317 560 q0 -34 6 -48 M2328 560 q9 -28 19 -38"/>
        <path d="M2556 524 q-7 -30 -17 -42 M2567 524 q0 -34 6 -48 M2578 524 q9 -28 19 -38"/>
        <path d="M2760 528 q-7 -30 -17 -42 M2771 528 q0 -34 6 -48 M2782 528 q9 -28 19 -38"/></g>`;
      /* la laguna somera de la otra orilla, donde vadea el flamenco */
      s += `<path d="M1900 400 Q2010 380 2126 400 Q2170 416 2124 432 Q2010 452 1912 432 Q1868 416 1900 400 Z" fill="url(#egpXvado)"/>
        <g stroke="rgba(255,255,255,.55)" stroke-width="4" fill="none" stroke-linecap="round"><path d="M1918 424 q22 -10 44 0 M2050 428 q22 -10 44 0"/></g>`;
      /* el banco de arena donde se posa el ibis */
      s += `<path d="M2374 452 Q2440 434 2510 452 Q2546 466 2506 478 Q2438 494 2384 478 Q2350 466 2374 452 Z" fill="url(#egpXduna)"/>
        <g stroke="rgba(255,255,255,.5)" stroke-width="4" fill="none" stroke-linecap="round"><path d="M2364 486 q22 -10 44 0"/></g>`;
      /* el barrizal donde descansa el cocodrilo */
      s += `<path d="M1852 806 Q1940 776 2036 802 Q2076 816 2034 832 Q1936 856 1862 836 Q1824 820 1852 806 Z" fill="#a9863f"/>
        <path d="M1870 812 Q1942 794 2018 810" stroke="rgba(255,240,200,.34)" stroke-width="6" fill="none"/>`;
      /* la orilla de acá: arena mojada, guijarros y el barro donde crece el papiro */
      s += `<path d="M1888 986 Q2060 940 2300 950 Q2600 962 2900 944 L2906 992 Q2600 1010 2300 998 Q2060 988 1902 1030 Z" fill="url(#egpXmojada2)"/>`;
      s += `<g fill="#c08e46" opacity=".5"><ellipse cx="2010" cy="1002" rx="24" ry="9"/><ellipse cx="2246" cy="990" rx="19" ry="7"/>
        <ellipse cx="2470" cy="998" rx="26" ry="10"/><ellipse cx="2712" cy="1000" rx="21" ry="8"/></g>`;
      s += `<path d="M1704 946 Q1790 918 1878 948 Q1918 962 1876 978 Q1782 1000 1714 976 Q1676 960 1704 946 Z" fill="#a9863f"/>
        <path d="M1722 952 Q1792 936 1862 952" stroke="rgba(255,240,200,.34)" stroke-width="6" fill="none"/>`;
      /* cañas justo en la lámina del agua, que cosen la arena con el río */
      s += `<g stroke="#4c9a4a" stroke-width="5" fill="none" stroke-linecap="round">
        <path d="M1660 700 q-8 -34 -18 -48 M1672 700 q0 -40 7 -54 M1684 700 q9 -32 20 -44"/>
        <path d="M1746 820 q-8 -38 -20 -54 M1758 820 q0 -44 8 -60 M1770 820 q10 -36 22 -48"/>
        <path d="M1856 924 q-8 -38 -20 -54 M1868 924 q0 -44 8 -60 M1880 924 q10 -36 22 -48"/></g>`;
      /* juncos y papiros de las dos orillas */
      const papiro = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})" stroke="#3f8b4a" stroke-width="7" fill="none" stroke-linecap="round">
        <path d="M0 0 L-8 -76"/><path d="M0 0 L12 -86"/><path d="M0 0 L26 -68"/>
        <path d="M-8 -76 l-16 -12 M-8 -76 l-2 -20 M-8 -76 l14 -16"/>
        <path d="M12 -86 l-14 -16 M12 -86 l4 -20 M12 -86 l18 -12"/>
        <path d="M26 -68 l-6 -20 M26 -68 l16 -14 M26 -68 l18 2"/></g>`;
      s += papiro(1846, 968, 1.05) + papiro(1774, 992, .95) + papiro(2360, 986, .95) + papiro(2660, 980, .8) +
        papiro(1832, 486, .62) + papiro(2620, 462, .58) + papiro(2140, 1032, 1.1);
      s += `<g stroke="#4c9a4a" stroke-width="5" fill="none" stroke-linecap="round">
        <path d="M1930 978 q-8 -42 -22 -60 M1944 978 q0 -48 8 -66 M1958 978 q10 -40 24 -52"/>
        <path d="M2500 980 q-8 -38 -20 -54 M2512 980 q0 -44 8 -60 M2524 980 q10 -36 22 -48"/>
        <path d="M2790 950 q-8 -38 -20 -54 M2802 950 q0 -44 8 -60 M2814 950 q10 -36 22 -48"/></g>`;
      /* palmeras datileras, meciéndose muy despacio */
      const palmera = (x, y, k, giro) => `<g transform="translate(${x} ${y}) scale(${giro * k} ${k})">
        <path d="M0 0 Q-10 -66 4 -122" stroke="#8a6136" stroke-width="15" fill="none" stroke-linecap="round"/>
        <path d="M-6 -20 h14 M-7 -50 h15 M-5 -82 h14" stroke="#6f4c28" stroke-width="4"/>
        <g stroke="#3f8b4a" stroke-width="10" fill="none" stroke-linecap="round">
        <path d="M4 -122 Q-46 -142 -84 -122"/><path d="M4 -122 Q-30 -166 -62 -170"/>
        <path d="M4 -122 Q10 -176 42 -180"/><path d="M4 -122 Q48 -160 82 -140"/><path d="M4 -122 Q42 -110 66 -84"/></g>
        <circle cx="-8" cy="-112" r="8" fill="#c8862f"/><circle cx="12" cy="-108" r="8" fill="#c8862f"/><circle cx="2" cy="-100" r="7" fill="#c8862f"/></g>`;
      s += `<g><animateTransform attributeName="transform" type="rotate" values="0 1876 1044;1.6 1876 1044;0 1876 1044;-1.6 1876 1044;0 1876 1044" dur="9s" repeatCount="indefinite"/>${palmera(1876, 1044, 1, 1)}</g>`;
      s += `<g><animateTransform attributeName="transform" type="rotate" values="0 2300 1026;-1.6 2300 1026;0 2300 1026;1.6 2300 1026;0 2300 1026" dur="11s" repeatCount="indefinite"/>${palmera(2300, 1026, .95, -1)}</g>`;
      s += palmera(1750, 466, .5, 1) + palmera(2570, 476, .46, -1) + palmera(2020, 486, .42, 1) +
        palmera(2560, 1058, .9, 1) + palmera(2790, 1010, .78, -1);
      /* ---------- TRANSICIÓN 3: EL VERDE DEL CULTIVO SE VUELVE ARENA ---------- */
      /* los bancales se secan, los surcos se pierden y la orilla acaba en arena */
      s += `<path d="M2400 322 Q2600 314 2820 322 L2900 520 L2880 500 Q2700 500 2500 514 L2400 322 Z" fill="url(#egpXsiega)"/>`;
      s += `<g fill="url(#egpXduna)" opacity=".85"><ellipse cx="2660" cy="374" rx="72" ry="20"/><ellipse cx="2780" cy="424" rx="86" ry="24"/>
        <ellipse cx="2712" cy="468" rx="64" ry="18"/><ellipse cx="2842" cy="360" rx="58" ry="16"/><ellipse cx="2856" cy="470" rx="50" ry="14"/></g>
        <g stroke="rgba(150,102,44,.24)" stroke-width="4" fill="none" stroke-linecap="round">
        <path d="M2640 392 q18 -8 36 0 M2760 442 q18 -8 36 0 M2700 486 q18 -8 36 0"/></g>
        <g stroke="#a8a05a" stroke-width="4" fill="none" stroke-linecap="round" opacity=".65">
        <path d="M2600 348 q-7 -20 -16 -28 M2610 348 q0 -24 5 -34"/>
        <path d="M2730 396 q-7 -20 -16 -28 M2740 396 q0 -24 5 -34"/></g>`;
      /* la orilla derecha del río: arena mojada y luego el recinto seco */
      s += `<path d="M2830 500 Q2900 700 2900 944 L3020 1040 Q3000 740 2930 496 Z" fill="url(#egpXduna)"/>
        <path d="M2864 560 q22 32 34 78 M2884 700 q20 40 24 92" stroke="rgba(255,255,255,.28)" stroke-width="6" fill="none" stroke-linecap="round"/>`;
      /* ---------- TRANSICIÓN 4: EL CAMINO PROCESIONAL HACIA EL TEMPLO ---------- */
      /* del río sube una avenida empedrada, con muretes y mástiles de estandarte,
         y muere justo en la puerta del pilono */
      s += `<path d="M2666 1076 L2960 1060 L2940 812 L2790 820 Z" fill="url(#egpXpatio)"/>
        <path d="M2666 1076 L2960 1060 L2958 1044 L2672 1060 Z" fill="#f2ddaa"/>`;
      s += `<g stroke="rgba(150,112,58,.3)" stroke-width="4" fill="none">`;
      for (let i = 1; i < 7; i++) {
        const t = i / 7, y = 1064 - t * 244, x1 = 2666 + t * 124, x2 = 2960 - t * 20;
        s += `<path d="M${x1.toFixed(0)} ${y.toFixed(0)} L${x2.toFixed(0)} ${(y - 12).toFixed(0)}"/>`;
      }
      s += `<path d="M2740 1070 L2864 816 M2830 1066 L2906 814"/></g>`;
      s += `<path d="M2636 1080 L2676 1076 L2800 818 L2778 816 Z" fill="url(#egpXcaliza)"/>
        <path d="M2954 1060 L2990 1058 L2966 810 L2944 812 Z" fill="url(#egpXcaliza)"/>`;
      /* los mástiles de estandarte que flanqueaban las avenidas y los pilonos */
      [[2732, 866, 1], [2812, 866, .92]].forEach(m => {
        s += `<g><rect x="${m[0]}" y="${(1030 - 164 * m[2]).toFixed(0)}" width="14" height="${(164 * m[2]).toFixed(0)}" rx="6" fill="url(#egpXgranito)"/>
          <rect x="${m[0] - 10}" y="${(1030 - 176 * m[2]).toFixed(0)}" width="34" height="16" rx="4" fill="#d3b077"/>
          <path d="M${m[0] + 14} ${(1024 - 164 * m[2]).toFixed(0)} q34 8 34 30 q-34 6 -34 -6 Z" fill="#c8862f">
          <animate attributeName="opacity" values="1;.72;1" dur="6s" repeatCount="indefinite"/></path></g>`;
      });
      /* ---------- EL RECINTO DEL TEMPLO: patio, pilono, capillas y lago ---------- */
      s += `<path d="M2900 806 L4200 800 L4200 1100 L2880 1100 Z" fill="url(#egpXpatio)"/>
        <path d="M2900 806 L4200 800 L4200 824 L2898 828 Z" fill="#f2ddaa"/>`;
      s += `<g stroke="rgba(150,112,58,.26)" stroke-width="4" fill="none">`;
      for (let y = 852; y < 1096; y += 46) s += `<path d="M2886 ${y} L4200 ${y}"/>`;
      for (let x = 2930; x < 4200; x += 88) s += `<path d="M${x} 828 L${x - 14} 1096"/>`;
      s += `</g>`;
      /* el pilono: muro macizo con gola egipcia, cenefas y su puerta */
      s += `<path d="M2884 810 L2906 306 L3268 306 L3292 810 Z" fill="url(#egpXpiedra)"/>
        <path d="M3090 306 L3268 306 L3292 810 L3096 810 Z" fill="#dcbc85"/>
        <path d="M2892 306 Q2886 258 2910 246 L3264 246 Q3288 258 3282 306 Z" fill="url(#egpXcaliza)"/>
        <path d="M2884 306 L3292 306 L3292 326 L2884 326 Z" fill="#c39c62"/>`;
      s += `<g stroke="rgba(150,112,58,.4)" stroke-width="4" fill="none">`;
      for (let i = 0; i < 19; i++) s += `<path d="M${2904 + i * 20} 306 L${2906 + i * 19.6} 252"/>`;
      s += `</g>`;
      s += `<path d="M2876 618 L3300 614 L3302 640 L2874 644 Z" fill="url(#egpXcaliza)"/>
        <path d="M2876 618 L3300 614 L3300 626 L2876 630 Z" fill="#f6e6bf"/>`;
      s += greca(2898, 3278, 700, 22, 18, ".3");
      s += `<g fill="rgba(150,112,58,.3)">`;
      /* la cenefa de dados se interrumpe donde está el cartucho, para no
         amontonarse justo detrás de su icono */
      for (let i = 0; i < 16; i++) if (libre(2900 + i * 24, 392, 12, 14)) s += `<rect x="${2900 + i * 24}" y="392" width="12" height="14"/>`;
      s += `</g>`;
      /* la puerta del pilono, donde muere el camino procesional */
      s += `<path d="M3096 810 L3100 706 L3200 706 L3206 810 Z" fill="#8a6a3c"/>
        <path d="M3092 706 L3212 706 L3212 690 L3092 690 Z" fill="#c39c62"/>
        <path d="M3114 810 L3118 724 L3186 724 L3190 810 Z" fill="#6b4f2a"/>`;
      /* el plinto de granito del faraón, delante del pilono */
      s += `<path d="M3168 810 L3172 660 L3272 658 L3276 810 Z" fill="url(#egpXgranito)"/>
        <path d="M3164 660 L3280 658 L3280 644 L3164 646 Z" fill="#d3b077"/>
        <path d="M3222 660 L3222 810" stroke="rgba(255,255,255,.12)" stroke-width="6"/>`;
      /* el plinto alto sobre la gola, donde se posa el halcón */
      s += `<path d="M3222 306 L3278 306 L3274 244 L3226 244 Z" fill="url(#egpXgranito)"/>
        <path d="M3218 246 L3282 246 L3282 232 L3218 232 Z" fill="#d3b077"/>`;
      /* la capilla del escriba, con su gola y su hornacina */
      s += `<path d="M3316 810 L3320 340 L3612 338 L3618 810 Z" fill="url(#egpXpiedra)"/>
        <path d="M3480 339 L3612 338 L3618 810 L3486 810 Z" fill="#dcbc85"/>
        <path d="M3312 340 Q3306 300 3328 290 L3606 288 Q3628 298 3622 338 Z" fill="url(#egpXcaliza)"/>
        <path d="M3310 340 L3622 338 L3622 356 L3310 358 Z" fill="#c39c62"/>
        <path d="M3410 592 L3414 356 L3552 354 L3556 592 Z" fill="#8a6a3c"/>
        <path d="M3406 356 L3560 354 L3560 340 L3406 342 Z" fill="#c39c62"/>
        <path d="M3424 574 L3428 372 L3538 370 L3542 574 Z" fill="#6b4f2a" opacity=".7"/>`;
      /* la banqueta de piedra de la hornacina: aquí se sienta el escriba */
      s += `<path d="M3412 448 L3556 446 L3558 464 L3412 466 Z" fill="url(#egpXpiedra)"/>
        <path d="M3412 434 L3556 432 L3556 450 L3412 452 Z" fill="#e9d3a2"/>
        <path d="M3426 466 L3542 464 L3538 512 L3430 514 Z" fill="#b08a52" opacity=".9"/>`;
      s += `<g stroke="rgba(150,112,58,.34)" stroke-width="4" fill="none">
        <path d="M3324 640 L3612 638 M3326 700 L3614 698"/></g>`;
      s += greca(3330, 3606, 762, 23, 16, ".3");
      /* la estela donde se posa el escarabajo */
      s += `<path d="M3672 810 L3676 746 Q3720 712 3764 746 L3768 810 Z" fill="url(#egpXcaliza)"/>
        <path d="M3678 724 Q3720 698 3762 724 L3764 746 Q3720 716 3676 746 Z" fill="#f2ddaa"/>
        <path d="M3684 790 L3758 790" stroke="rgba(150,112,58,.34)" stroke-width="5"/>`;
      /* la columnata de capitel de papiro que cierra el patio */
      s += columna(3822, 486, 810, 20) + columna(3902, 486, 810, 20);
      s += `<path d="M3782 444 L3942 444 L3942 486 L3782 486 Z" fill="url(#egpXpiedra)"/>
        <path d="M3776 428 L3948 428 L3948 446 L3776 446 Z" fill="#f2ddaa"/>`;
      s += `<g fill="rgba(150,112,58,.3)">`;
      for (let i = 0; i < 7; i++) s += `<rect x="${3790 + i * 21}" y="466" width="11" height="12"/>`;
      s += `</g>`;
      /* la capilla del sarcófago, con su cornisa de gola */
      s += `<path d="M3958 810 L3962 430 L4136 428 L4142 810 Z" fill="url(#egpXpiedra)"/>
        <path d="M4056 429 L4136 428 L4142 810 L4062 810 Z" fill="#dcbc85"/>
        <path d="M3954 430 Q3948 402 3970 394 L4130 392 Q4152 400 4146 428 Z" fill="url(#egpXcaliza)"/>
        <path d="M3948 396 L4152 394 L4152 410 L3948 412 Z" fill="#f6e6bf"/>
        <path d="M3990 810 L3992 542 L4070 540 L4074 810 Z" fill="#8a6a3c"/>
        <path d="M3986 542 L4078 540 L4078 526 L3986 528 Z" fill="#c39c62"/>
        <path d="M4004 800 L4006 562 L4058 560 L4060 800 Z" fill="#6b4f2a" opacity=".7"/>`;
      s += `<g fill="rgba(150,112,58,.3)">`;
      for (let i = 0; i < 8; i++) s += `<rect x="${3970 + i * 21}" y="466" width="11" height="12"/>`;
      s += `</g>`;
      s += greca(3966, 4134, 762, 24, 16, ".3");
      /* el lago sagrado del templo, con su brocal escalonado */
      s += `<path d="M3340 906 L3900 898 L3924 1030 L3320 1040 Z" fill="#c39c62"/>
        <path d="M3364 922 L3878 914 L3898 1012 L3344 1022 Z" fill="url(#egpXnilo)"/>
        <path d="M3364 922 L3878 914 L3880 932 L3364 940 Z" fill="#8ad8f2" opacity=".6"/>
        <g stroke="rgba(255,255,255,.45)" stroke-width="4" fill="none" stroke-linecap="round">
        <path d="M3410 958 q26 -11 52 0 M3580 988 q26 -11 52 0 M3760 950 q26 -11 52 0 M3660 926 q26 -11 52 0"/></g>
        <path d="M3320 1040 L3924 1030 L3930 1056 L3316 1066 Z" fill="#d8b87e"/>`;
      /* el murete bajo del recinto, con su greca */
      s += `<path d="M2900 1068 L4200 1058 L4200 1092 L2896 1100 Z" fill="url(#egpXcaliza)"/>
        <path d="M2900 1068 L4200 1058 L4200 1070 L2900 1080 Z" fill="#f6e6bf"/>`;
      s += greca(2920, 4190, 1094, 46, 17, ".3");
      /* dos macetones con palmas, en el patio */
      [[3286, 900, .5], [4166, 950, .46]].forEach(m => {
        s += `<g transform="translate(${m[0]} ${m[1]}) scale(${m[2]})">
          <path d="M-44 0 L44 0 L32 74 L-32 74 Z" fill="#c08a4a"/><path d="M-50 -10 L50 -10 L50 6 L-50 6 Z" fill="#d8ad6e"/>
          <g stroke="#3f8b4a" stroke-width="12" fill="none" stroke-linecap="round">
          <path d="M0 -10 Q-46 -50 -70 -96"/><path d="M0 -10 Q-16 -66 -4 -116"/><path d="M0 -10 Q40 -54 72 -92"/></g></g>`;
      });
      /* la mesa de ofrendas y las tinajas del patio, para que el suelo del
         recinto no quede como una plaza vacía */
      const tinaja = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})">
        <path d="M-26 -34 Q-34 0 -18 22 L18 22 Q34 0 26 -34 Z" fill="#b5763c"/>
        <path d="M-26 -34 Q-34 0 -18 22 L-4 22 Q-18 0 -12 -34 Z" fill="#c98d52"/>
        <path d="M-16 -34 L16 -34 L20 -44 L-20 -44 Z" fill="#a26732"/>
        <path d="M-22 -8 Q0 2 22 -8" stroke="rgba(255,236,200,.35)" stroke-width="5" fill="none"/></g>`;
      s += `<g><path d="M2952 986 L3068 982 L3070 996 L2952 1000 Z" fill="url(#egpXcaliza)"/>
        <path d="M2966 1000 L2970 1030 L2988 1030 L2984 1000 Z" fill="#c39c62"/>
        <path d="M3036 998 L3040 1028 L3058 1028 L3054 998 Z" fill="#c39c62"/>
        <path d="M2984 982 q10 -18 26 -18 q16 0 26 18 Z" fill="#e8c07a"/>
        <circle cx="3010" cy="966" r="9" fill="#f2d79a"/></g>`;
      s += tinaja(3120, 1000, .82) + tinaja(3170, 1006, .7) + tinaja(3986, 996, .78) + tinaja(4032, 1004, .66);
      s += `<g><path d="M4076 1000 L4166 996 L4168 1010 L4076 1014 Z" fill="url(#egpXcaliza)"/>
        <path d="M4090 1014 L4094 1038 L4108 1038 L4104 1014 Z" fill="#c39c62"/>
        <path d="M4140 1012 L4144 1036 L4158 1036 L4154 1012 Z" fill="#c39c62"/>
        <path d="M4102 996 q8 -16 20 -16 q12 0 20 16 Z" fill="#e8c07a"/></g>`;
      /* ---------- COSTURAS DE CALINA ENTRE ETAPAS ---------- */
      [1000, 1740, 2820].forEach(x => {
        s += `<rect x="${x - 100}" y="240" width="200" height="860" fill="url(#egpXcalina)" mask="url(#egpXcalinaM)"/>`;
      });
      return decoSvg(s, 4200);
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
