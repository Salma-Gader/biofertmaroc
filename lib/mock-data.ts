import type { BlogPost, Collection, Product, Review } from "./types";

const dh = (amount: number): { amount: number; currencyCode: string } => ({
  amount,
  currencyCode: "MAD",
});

function img(id: string, src: string, alt: string, size = 800): Product["featuredImage"] {
  return { id, src, alt, width: size, height: size };
}

export const products: Product[] = [
  {
    id: "prod-bellafert",
    handle: "bellafert",
    title: "BellaFert",
    subtitle: "Soutien Naturel à la Fertilité Féminine",
    productLine: "BellaFert",
    shortDescription:
      "Complément alimentaire 100% naturel pour soutenir l'ovulation, l'équilibre hormonal et la préparation à la conception.",
    descriptionHtml:
      "<p>BellaFert est un complément alimentaire formulé pour soutenir la fertilité féminine : qualité de l'ovulation, équilibre hormonal et préparation à la conception. À base de collagène marin, extrait de pépins de raisin, ail, sauge et placenta.</p>",
    featuredImage: img("img-bellafert", "/products/bellafert.png", "Flacon BellaFert"),
    images: [
      img("img-bellafert-a", "/products/bellafert.png", "BellaFert, flacon"),
      img("img-bellafert-b", "/products/pack-couple.png", "BellaFert, avec FertiMen"),
    ],
    priceRange: { minVariantPrice: dh(300), maxVariantPrice: dh(300) },
    compareAtPriceRange: { minVariantPrice: dh(400), maxVariantPrice: dh(400) },
    variants: [
      { id: "var-bellafert-1", title: "1 flacon (60 gélules)", price: dh(300), compareAtPrice: dh(400), available: true, selectedOptions: [{ name: "Format", value: "1 flacon" }] },
    ],
    tags: ["femme", "fertilite", "populaire"],
    useCases: ["Fertilité féminine"],
    badges: ["best-seller"],
    rating: 4.8,
    reviewCount: 1247,
    features: ["Soutien de l'ovulation", "Équilibre hormonal naturel"],
    benefits: ["Soutient la qualité de l'ovulation", "Favorise l'équilibre hormonal", "Prépare le corps à la conception"],
    ingredients: ["Extrait de collagène marin", "Extrait de pépins de raisin", "Extrait d'ail", "Extrait de sauge", "Extrait de placenta"],
    usage: "Prendre 1 à 2 gélules par jour au cours d'un repas avec un grand verre d'eau. Protocole recommandé : 3 mois consécutifs.",
    precautions: "Ne pas dépasser la dose journalière recommandée. Demandez conseil à votre médecin en cas de grossesse ou d'allaitement.",
    claims: ["100% naturel", "Fabrication certifiée GMP", "Sans additifs artificiels"],
  },
  {
    id: "prod-fertimen",
    handle: "fertimen",
    title: "FertiMen",
    subtitle: "Soutien Naturel à la Fertilité Masculine",
    productLine: "FertiMen",
    shortDescription:
      "Complément alimentaire 100% naturel pour soutenir la testostérone, l'énergie et la fertilité masculine.",
    descriptionHtml:
      "<p>FertiMen est un complément alimentaire formulé pour soutenir la fertilité masculine : niveaux de testostérone normaux, énergie et santé reproductive. À base de ginseng, maca, fenugrec, zinc et L-arginine.</p>",
    featuredImage: img("img-fertimen", "/products/fertimen.png", "Flacon FertiMen"),
    images: [
      img("img-fertimen-a", "/products/fertimen.png", "FertiMen, flacon"),
      img("img-fertimen-b", "/products/pack-couple.png", "FertiMen, avec BellaFert"),
    ],
    priceRange: { minVariantPrice: dh(300), maxVariantPrice: dh(300) },
    compareAtPriceRange: { minVariantPrice: dh(400), maxVariantPrice: dh(400) },
    variants: [
      { id: "var-fertimen-1", title: "1 flacon (60 gélules)", price: dh(300), compareAtPrice: dh(400), available: true, selectedOptions: [{ name: "Format", value: "1 flacon" }] },
    ],
    tags: ["homme", "fertilite", "populaire"],
    useCases: ["Fertilité masculine"],
    badges: [],
    rating: 4.7,
    reviewCount: 863,
    features: ["Soutient la testostérone", "Énergie & santé reproductive"],
    benefits: ["Soutient des niveaux de testostérone normaux", "Favorise l'énergie au quotidien", "Soutient la santé reproductive"],
    ingredients: ["Extrait de ginseng", "Extrait de maca", "Extrait de fenugrec", "Sulfate de glucosamine", "Vitamine E", "Pollen d'abeille", "Oxyde de zinc", "Taurine", "Magnésium", "L-arginine"],
    usage: "Prendre 1 à 2 gélules par jour au cours d'un repas avec un grand verre d'eau. Protocole recommandé : 3 mois (la maturation des spermatozoïdes prend environ 74 jours).",
    precautions: "Ne pas dépasser la dose journalière recommandée. Demandez conseil à votre médecin en cas de traitement en cours.",
    claims: ["100% naturel", "Fabrication certifiée GMP", "Sans additifs artificiels"],
  },
  {
    id: "prod-pack-couple",
    handle: "pack-couple",
    title: "Pack Couple",
    subtitle: "BellaFert + FertiMen — Le Duo Fertilité",
    productLine: "Pack Couple",
    shortDescription:
      "Le duo complet pour accompagner la fertilité des deux partenaires : un flacon BellaFert + un flacon FertiMen, livraison gratuite.",
    descriptionHtml:
      "<p>Le Pack Couple réunit BellaFert et FertiMen pour soutenir la fertilité des deux partenaires en même temps, avec la livraison offerte.</p>",
    featuredImage: img("img-pack", "/products/pack-couple.png", "Pack Couple BellaFert et FertiMen"),
    images: [
      img("img-pack-a", "/products/pack-couple.png", "Pack Couple, les deux flacons"),
      img("img-pack-b", "/products/bellafert.png", "Pack Couple, BellaFert"),
      img("img-pack-c", "/products/fertimen.png", "Pack Couple, FertiMen"),
    ],
    priceRange: { minVariantPrice: dh(500), maxVariantPrice: dh(500) },
    compareAtPriceRange: { minVariantPrice: dh(600), maxVariantPrice: dh(600) },
    variants: [
      { id: "var-pack-1", title: "1 flacon BellaFert + 1 flacon FertiMen", price: dh(500), compareAtPrice: dh(600), available: true, selectedOptions: [{ name: "Format", value: "Pack Couple" }] },
    ],
    tags: ["duo", "fertilite", "femme", "homme", "populaire"],
    useCases: ["Duo fertilité"],
    badges: ["best-seller"],
    rating: 4.9,
    reviewCount: 987,
    features: ["Pour les deux partenaires", "Livraison gratuite"],
    benefits: ["Soutient la fertilité des deux partenaires", "Économisez 100 DH par rapport à l'achat séparé", "Livraison gratuite incluse"],
    ingredients: ["Tous les actifs de BellaFert", "Tous les actifs de FertiMen"],
    usage: "2 gélules par jour et par partenaire, au cours d'un repas. Protocole recommandé : 3 mois.",
    precautions: "Ne pas dépasser la dose journalière recommandée par personne. Demandez conseil à votre médecin en cas de grossesse, d'allaitement ou de traitement en cours.",
    claims: ["100% naturel", "Fabrication certifiée GMP", "Livraison gratuite", "Économisez 100 DH"],
  },
  {
    id: "prod-ferti-power",
    handle: "ferti-power",
    title: "Ferti Power",
    subtitle: "Vitalité Sexuelle & Fertilité Masculine",
    productLine: "Ferti Power",
    shortDescription: "Formule masculine haute concentration pour la vitalité sexuelle et la fertilité.",
    descriptionHtml: "<p>Ferti Power est une formule haute concentration pensée pour soutenir la vitalité sexuelle et la fertilité masculine au quotidien.</p>",
    featuredImage: img("img-ferti-power", "/products/fertipower.png", "Flacon Ferti Power"),
    images: [img("img-ferti-power-a", "/products/fertipower.png", "Ferti Power, flacon")],
    priceRange: { minVariantPrice: dh(220), maxVariantPrice: dh(220) },
    variants: [
      { id: "var-ferti-power-1", title: "1 flacon (60 gélules)", price: dh(220), available: true, selectedOptions: [{ name: "Format", value: "1 flacon" }] },
    ],
    tags: ["homme", "fertilite", "essentiels"],
    useCases: ["Fertilité masculine"],
    badges: [],
    rating: 4.5,
    reviewCount: 76,
    features: ["Vitalité sexuelle", "Haute concentration"],
    benefits: ["Soutient la vitalité sexuelle", "Soutient la fertilité masculine", "Énergie au quotidien"],
    ingredients: ["Extrait de maca", "Extrait de ginseng", "Zinc", "L-arginine"],
    usage: "Prendre 2 gélules par jour au cours d'un repas.",
    precautions: "Ne pas dépasser la dose journalière recommandée.",
    claims: ["100% naturel", "Fabrication certifiée GMP"],
  },
  {
    id: "prod-powermen",
    handle: "powermen",
    title: "PowerMen",
    subtitle: "Énergie & Vitalité pour Homme",
    productLine: "PowerMen",
    shortDescription: "Complément énergie et vitalité pour homme.",
    descriptionHtml: "<p>PowerMen est formulé pour soutenir l'énergie, la performance et la vitalité masculine au quotidien.</p>",
    featuredImage: img("img-powermen", "/products/powermen.png", "Flacon PowerMen"),
    images: [img("img-powermen-a", "/products/powermen.png", "PowerMen, flacon")],
    priceRange: { minVariantPrice: dh(229), maxVariantPrice: dh(229) },
    compareAtPriceRange: { minVariantPrice: dh(499), maxVariantPrice: dh(499) },
    variants: [
      { id: "var-powermen-1", title: "1 flacon (30 gélules)", price: dh(229), compareAtPrice: dh(499), available: true, selectedOptions: [{ name: "Format", value: "1 flacon" }] },
    ],
    tags: ["homme", "essentiels"],
    useCases: ["Énergie & vitalité"],
    badges: [],
    rating: 4.6,
    reviewCount: 58,
    features: ["Énergie & performance", "Vitalité au quotidien"],
    benefits: ["Soutient l'énergie", "Soutient la performance", "Soutient la vitalité"],
    ingredients: ["Extrait de ginseng", "Taurine", "Vitamines du groupe B"],
    usage: "Prendre 1 gélule par jour.",
    precautions: "Ne pas dépasser la dose journalière recommandée.",
    claims: ["100% naturel", "Fabrication certifiée GMP"],
  },
  {
    id: "prod-smokeclean-men",
    handle: "smokeclean-men",
    title: "SmokeClean Men",
    subtitle: "Détox Poumons pour Fumeurs",
    productLine: "SmokeClean Men",
    shortDescription: "Complément détox pour soutenir le nettoyage des poumons chez les fumeurs.",
    descriptionHtml: "<p>SmokeClean Men aide à soutenir le nettoyage naturel des poumons et à mieux respirer au quotidien.</p>",
    featuredImage: img("img-smokeclean", "/products/smokeclean-men.png", "Flacon SmokeClean Men"),
    images: [img("img-smokeclean-a", "/products/smokeclean-men.png", "SmokeClean Men, flacon")],
    priceRange: { minVariantPrice: dh(249), maxVariantPrice: dh(249) },
    compareAtPriceRange: { minVariantPrice: dh(349), maxVariantPrice: dh(349) },
    variants: [
      { id: "var-smokeclean-1", title: "1 flacon (30 gélules)", price: dh(249), compareAtPrice: dh(349), available: true, selectedOptions: [{ name: "Format", value: "1 flacon" }] },
    ],
    tags: ["homme", "essentiels"],
    useCases: ["Détox"],
    badges: [],
    rating: 4.4,
    reviewCount: 41,
    features: ["Détox pulmonaire", "Mieux respirer"],
    benefits: ["Soutient le nettoyage des poumons", "Favorise une meilleure respiration", "Formule douce"],
    ingredients: ["Extrait de thym", "Extrait de plantain lancéolé", "N-acétylcystéine"],
    usage: "Prendre 2 gélules par jour.",
    precautions: "Ne remplace pas l'arrêt du tabac. Demandez conseil à votre médecin.",
    claims: ["100% naturel", "Fabrication certifiée GMP"],
  },
  {
    id: "prod-relaxeswoman",
    handle: "relaxes-woman",
    title: "Relaxes Woman",
    subtitle: "Sérénité & Équilibre Hormonal Féminin",
    productLine: "Relaxes Woman",
    shortDescription: "Complément anti-stress et relaxation pour femme.",
    descriptionHtml: "<p>Relaxes Woman aide à réduire le stress et à améliorer le bien-être, pour un esprit paisible et une vie plus harmonieuse.</p>",
    featuredImage: img("img-relaxeswoman", "/products/relaxeswoman.png", "Flacon Relaxes Woman"),
    images: [img("img-relaxeswoman-a", "/products/relaxeswoman.png", "Relaxes Woman, flacon")],
    priceRange: { minVariantPrice: dh(199), maxVariantPrice: dh(199) },
    variants: [
      { id: "var-relaxeswoman-1", title: "1 flacon (60 gélules)", price: dh(199), available: true, selectedOptions: [{ name: "Format", value: "1 flacon" }] },
    ],
    tags: ["femme", "essentiels"],
    useCases: ["Sérénité & équilibre hormonal"],
    badges: [],
    rating: 4.6,
    reviewCount: 64,
    features: ["Réduit le stress", "Équilibre hormonal"],
    benefits: ["Réduit le stress", "Améliore le bien-être", "Favorise un sommeil paisible"],
    ingredients: ["Extrait de fleur de lotus", "Magnésium", "Extrait de camomille"],
    usage: "Prendre 2 gélules par jour, de préférence le soir.",
    precautions: "Ne pas dépasser la dose journalière recommandée.",
    claims: ["100% naturel", "Fabrication certifiée GMP"],
  },
  {
    id: "prod-cyclecare",
    handle: "cyclecare",
    title: "CycleCare",
    subtitle: "Équilibre & Confort Menstruel",
    productLine: "CycleCare",
    shortDescription: "Complément pour le confort du cycle menstruel.",
    descriptionHtml: "<p>CycleCare aide à réguler le cycle et à soulager les inconforts menstruels, pour des jours plus sereins.</p>",
    featuredImage: img("img-cyclecare", "/products/cyclecare.png", "Flacon CycleCare"),
    images: [img("img-cyclecare-a", "/products/cyclecare.png", "CycleCare, flacon")],
    priceRange: { minVariantPrice: dh(299), maxVariantPrice: dh(299) },
    variants: [
      { id: "var-cyclecare-1", title: "1 flacon (30 gélules)", price: dh(299), available: true, selectedOptions: [{ name: "Format", value: "1 flacon" }] },
    ],
    tags: ["femme", "essentiels"],
    useCases: ["Confort menstruel"],
    badges: [],
    rating: 4.5,
    reviewCount: 53,
    features: ["Régule le cycle", "Soulage les inconforts"],
    benefits: ["Régule le cycle", "Soulage les inconforts menstruels", "Favorise le confort féminin"],
    ingredients: ["Extrait de gattilier", "Magnésium", "Vitamine B6"],
    usage: "Prendre 1 gélule par jour.",
    precautions: "Ne pas dépasser la dose journalière recommandée.",
    claims: ["100% naturel", "Fabrication certifiée GMP"],
  },
];

export const collections: Collection[] = [
  { id: "col-elle", handle: "elle", title: "Elle", description: "Soutien naturel à la fertilité féminine.", productIds: ["prod-bellafert", "prod-relaxeswoman", "prod-cyclecare"] },
  { id: "col-lui", handle: "lui", title: "Lui", description: "Soutien naturel à la fertilité masculine.", productIds: ["prod-fertimen", "prod-ferti-power", "prod-powermen", "prod-smokeclean-men"] },
  { id: "col-duo", handle: "duo", title: "Duo", description: "Le pack couple, pour les deux partenaires.", productIds: ["prod-pack-couple"] },
  { id: "col-essentiels", handle: "essentiels", title: "Nos essentiels", description: "Le reste de la gamme BioFert.", productIds: ["prod-ferti-power", "prod-powermen", "prod-smokeclean-men", "prod-relaxeswoman", "prod-cyclecare"] },
  { id: "col-best-sellers", handle: "best-sellers", title: "Best Sellers", description: "Nos formules les plus populaires.", productIds: ["prod-bellafert", "prod-fertimen", "prod-pack-couple"] },
];

export const reviews: Review[] = [
  { id: "rev-1", author: "Zinab L.", initials: "ZL", avatarColor: "var(--pink)", rating: 5, title: "Un vrai soulagement", body: "Je souffrais de règles irrégulières à cause du SOPK. Depuis que j'ai commencé BellaFert, tout est beaucoup plus régulier. Merci !", date: "2026-05-20", productHandle: "bellafert", source: "Avis vérifié" },
  { id: "rev-2", author: "Imane B.", initials: "IB", avatarColor: "var(--blue)", rating: 5, title: "Ça a aidé mon mari", body: "Mon mari avait un souci de fertilité depuis un moment. Avec FertiMen, la situation s'est enfin résolue. On est très reconnaissants.", date: "2026-05-08", productHandle: "fertimen", source: "Avis vérifié" },
  { id: "rev-3", author: "Yadjiss O.", initials: "YO", avatarColor: "var(--pink)", rating: 5, title: "Enceinte après deux semaines", body: "Je n'y croyais pas trop au début, mais après deux semaines seulement avec BellaFert, on a eu la bonne nouvelle.", date: "2026-04-22", productHandle: "bellafert", source: "Avis vérifié" },
  { id: "rev-4", author: "Rahma A.", initials: "RA", avatarColor: "var(--pink)", rating: 5, title: "M'a beaucoup aidée avec mon kyste", body: "J'avais un kyste ovarien et beaucoup d'inquiétudes. BellaFert m'a vraiment aidée à retrouver un cycle plus stable.", date: "2026-04-03", productHandle: "bellafert", source: "Avis vérifié" },
  { id: "rev-5", author: "Mehdia R.", initials: "MR", avatarColor: "var(--pink)", rating: 4, title: "Efficace, mais il faut de la patience", body: "Le produit fonctionne vraiment, mais il ne faut pas s'attendre à des résultats du jour au lendemain. Sur la durée, ça vaut le coup.", date: "2026-03-11", productHandle: "bellafert", source: "Avis vérifié" },
  { id: "rev-6", author: "Khadija E.", initials: "KE", avatarColor: "var(--blue)", rating: 5, title: "Beaucoup de femmes ont vu une amélioration", body: "On a suivi le programme en couple avec le Pack Couple. Beaucoup de femmes autour de moi qui ont essayé ont vu une vraie amélioration.", date: "2026-02-19", productHandle: "pack-couple", source: "Avis vérifié" },
];

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    handle: "10-conseils-naturels-fertilite",
    title: "10 Conseils Naturels pour Booster Votre Fertilité",
    excerpt: "Des conseils pratiques et naturels pour soutenir votre fertilité au quotidien.",
    category: "Fertilité Naturelle",
    readingTime: "5 min",
    image: img("blog-img-1", "/placeholders/blog-1.svg", "Conseils naturels pour la fertilité"),
    date: "2026-04-12",
    author: "Équipe BioFertMaroc",
    content: [
      "La fertilité ne dépend pas d'un seul facteur, mais d'un ensemble d'habitudes qui, mises bout à bout, font une vraie différence. Avant de penser compléments ou traitements, il est utile de revenir aux fondamentaux : sommeil, alimentation, gestion du stress et activité physique modérée.",
      "1. Priorisez un sommeil régulier — viser 7 à 9 heures par nuit aide à stabiliser les hormones reproductives. 2. Réduisez le sucre raffiné et les aliments ultra-transformés, qui favorisent l'inflammation. 3. Intégrez des graisses saines (huile d'olive, avocat, oléagineux). 4. Limitez l'alcool et le tabac. 5. Bougez modérément : 30 minutes de marche par jour suffisent, l'excès d'exercice intense peut au contraire perturber le cycle.",
      "6. Hydratez-vous suffisamment. 7. Gérez votre stress avec des routines simples (respiration, journaling, temps sans écran). 8. Suivez votre cycle pour mieux connaître votre fenêtre de fertilité. 9. Faites le point sur vos apports en micronutriments clés (zinc, vitamine D, acide folique). 10. Consultez un professionnel de santé si vous essayez de concevoir depuis plus de 12 mois (ou 6 mois après 35 ans).",
      "Ces gestes simples ne remplacent pas un avis médical, mais ils créent un terrain favorable. Chez BioFertMaroc, nos formules sont pensées comme un complément à ces habitudes, pas comme un raccourci.",
    ],
  },
  {
    id: "blog-2",
    handle: "comprendre-cycle-ovulation",
    title: "Comprendre le Cycle d'Ovulation : Guide Complet",
    excerpt: "Tout ce qu'il faut savoir pour suivre son cycle et repérer les signaux de son corps.",
    category: "Santé Féminine",
    readingTime: "7 min",
    image: img("blog-img-2", "/placeholders/blog-2.svg", "Comprendre le cycle d'ovulation"),
    date: "2026-03-28",
    author: "Équipe BioFertMaroc",
    content: [
      "Le cycle menstruel dure en moyenne 28 jours, mais peut varier entre 21 et 35 jours selon les personnes — les deux sont considérés comme normaux. Il se divise en deux grandes phases séparées par l'ovulation : la phase folliculaire et la phase lutéale.",
      "Pendant la phase folliculaire, les ovaires préparent un ou plusieurs follicules sous l'effet de la FSH (hormone folliculo-stimulante). Le taux d'œstrogènes augmente progressivement, épaississant la muqueuse utérine. Vers le milieu du cycle, un pic de LH (hormone lutéinisante) déclenche l'ovulation : la libération de l'ovule.",
      "L'ovule reste fécondable pendant environ 12 à 24 heures, mais les spermatozoïdes peuvent survivre jusqu'à 5 jours dans les voies génitales — ce qui porte la fenêtre de fertilité réelle à environ 6 jours par cycle. Repérer cette fenêtre passe par plusieurs signaux : glaire cervicale plus fluide et transparente, légère hausse de la température basale après l'ovulation, parfois une douleur ovulatoire discrète.",
      "Des outils simples (calendrier, courbe de température, tests d'ovulation en pharmacie) aident à mieux connaître son cycle. Si vos cycles sont très irréguliers ou absents, un avis médical permet d'écarter une cause sous-jacente (SOPK, troubles thyroïdiens, etc.) et d'adapter l'accompagnement.",
    ],
  },
  {
    id: "blog-3",
    handle: "fertilite-masculine-guide",
    title: "Fertilité Masculine : Ce Que Chaque Homme Devrait Savoir",
    excerpt: "Les facteurs clés qui influencent la fertilité masculine et comment les soutenir.",
    category: "Santé Masculine",
    readingTime: "6 min",
    image: img("blog-img-3", "/placeholders/blog-3.svg", "Fertilité masculine"),
    date: "2026-03-10",
    author: "Équipe BioFertMaroc",
    content: [
      "La fertilité masculine est encore trop souvent laissée de côté dans les conversations sur la conception, alors qu'elle est impliquée dans près d'un cas d'infertilité sur deux au sein d'un couple. Trois paramètres sont généralement évalués : la concentration, la mobilité et la morphologie des spermatozoïdes.",
      "La production de spermatozoïdes (spermatogenèse) dure environ 74 jours, ce qui veut dire que les habitudes des deux à trois derniers mois ont un impact direct et mesurable. La chaleur excessive (bains chauds prolongés, ordinateur portable sur les genoux, vêtements très serrés), le tabac, l'alcool et le stress chronique figurent parmi les facteurs les plus documentés.",
      "Côté nutrition, le zinc, la vitamine C, la vitamine E et le sélénium jouent un rôle dans la protection des spermatozoïdes contre le stress oxydatif. Une activité physique régulière et modérée, un poids stable et un sommeil de qualité complètent une base solide.",
      "Comme pour la fertilité féminine, ces leviers du quotidien s'inscrivent dans la durée : mieux vaut voir cela comme un entretien continu plutôt qu'une solution ponctuelle avant une tentative de conception.",
    ],
  },
  {
    id: "blog-4",
    handle: "sopk-fertilite-solutions",
    title: "SOPK et Fertilité : Solutions Naturelles",
    excerpt: "Comprendre le SOPK et les approches naturelles pour soutenir la fertilité.",
    category: "SOPK",
    readingTime: "8 min",
    image: img("blog-img-4", "/placeholders/blog-4.svg", "SOPK et fertilité"),
    date: "2026-02-19",
    author: "Équipe BioFertMaroc",
    content: [
      "Le syndrome des ovaires polykystiques (SOPK) touche environ une femme sur dix en âge de procréer. Il se caractérise par un déséquilibre hormonal qui peut perturber l'ovulation, provoquer des cycles irréguliers et, dans certains cas, compliquer la conception.",
      "Le SOPK est souvent associé à une résistance à l'insuline. C'est pourquoi une alimentation à index glycémique modéré (limitant les pics de sucre dans le sang) est fréquemment recommandée : privilégier les fibres, les protéines à chaque repas, et réduire les sucres rapides.",
      "L'activité physique régulière améliore la sensibilité à l'insuline et peut, chez certaines femmes, favoriser un retour de cycles plus réguliers. Le stress chronique aggrave souvent les symptômes hormonaux du SOPK — des routines de gestion du stress ne sont donc pas un simple confort, mais un vrai levier.",
      "Le SOPK se manifeste différemment d'une personne à l'autre : il n'existe pas de protocole universel. Un suivi gynécologique permet d'adapter l'accompagnement (alimentation, activité, compléments, traitement si besoin) à votre profil hormonal spécifique.",
    ],
  },
  {
    id: "blog-5",
    handle: "complements-preconception",
    title: "L'Importance des Compléments Alimentaires en Préconception",
    excerpt: "Pourquoi bien préparer son corps avant la conception fait toute la différence.",
    category: "Nutrition",
    readingTime: "5 min",
    image: img("blog-img-5", "/placeholders/blog-1.svg", "Compléments en préconception"),
    date: "2026-01-22",
    author: "Équipe BioFertMaroc",
    content: [
      "La période de préconception — les quelques mois avant d'essayer de concevoir — est souvent sous-estimée. C'est pourtant à ce moment que se posent les bases nutritionnelles qui accompagneront la fécondation, puis les premières semaines de grossesse.",
      "L'acide folique (vitamine B9) est le plus documenté : une supplémentation avant la conception réduit le risque d'anomalies du tube neural chez le futur bébé. D'autres nutriments comme la vitamine D, le fer, l'iode et les oméga-3 sont également associés à un meilleur terrain hormonal et reproductif.",
      "Une alimentation variée reste la base, mais elle ne couvre pas toujours l'ensemble des besoins — notamment en cas de régime restrictif, de cycles irréguliers ou de carences déjà identifiées. C'est là qu'un complément ciblé, formulé spécifiquement pour la période de préconception, peut faire la différence.",
      "L'idéal est de commencer trois mois avant l'arrêt de la contraception, le temps que les nutriments s'accumulent et que le corps se prépare pleinement.",
    ],
  },
  {
    id: "blog-6",
    handle: "protocole-3-mois",
    title: "Le Protocole 3 Mois : Pourquoi la Patience Paie",
    excerpt: "Pourquoi les cures de fertilité sont pensées sur 3 mois et comment rester motivé(e).",
    category: "Protocole",
    readingTime: "4 min",
    image: img("blog-img-6", "/placeholders/blog-2.svg", "Le protocole 3 mois"),
    date: "2026-01-05",
    author: "Équipe BioFertMaroc",
    content: [
      "Une question revient souvent : « Pourquoi vos formules sont-elles pensées sur 3 mois et pas 3 semaines ? » La réponse tient en un chiffre biologique : un cycle complet de maturation des cellules reproductives — ovules comme spermatozoïdes — dure environ 90 jours.",
      "Chez la femme, les follicules qui seront recrutés pour l'ovulation commencent leur développement plusieurs mois à l'avance. Chez l'homme, la spermatogenèse suit un cycle d'environ 74 jours. Dans les deux cas, les apports nutritionnels d'aujourd'hui influencent surtout la qualité des cellules qui seront libérées dans deux à trois mois.",
      "C'est pour cette raison que les résultats d'une cure de fertilité s'évaluent rarement avant la fin du premier cycle de trois mois. Arrêter après quelques semaines, c'est souvent arrêter juste avant que les effets ne deviennent visibles.",
      "Rester régulier, même sans changement immédiat perceptible, est la clé. C'est aussi pour cela que nos formules sont conçues pour s'intégrer facilement dans une routine quotidienne, sur la durée.",
    ],
  },
];

export function getProductByHandle(handle: string): Product | undefined {
  return products.find((p) => p.handle === handle);
}

export function getCollectionByHandle(handle: string): Collection | undefined {
  return collections.find((c) => c.handle === handle);
}

export function getBlogPostByHandle(handle: string): BlogPost | undefined {
  return blogPosts.find((p) => p.handle === handle);
}

export function getProductsForCollection(handle: string): Product[] {
  const collection = getCollectionByHandle(handle);
  if (!collection) return [];
  return collection.productIds
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is Product => Boolean(p));
}

export function getReviewsForProduct(handle: string): Review[] {
  return reviews.filter((r) => r.productHandle === handle);
}
