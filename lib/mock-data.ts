import type { BlogPost, Collection, Product, Review } from "./types";

const usd = (amount: number): { amount: number; currencyCode: string } => ({
  amount,
  currencyCode: "EUR",
});

function img(id: string, src: string, alt: string, size = 800): Product["featuredImage"] {
  return { id, src, alt, width: size, height: size };
}

export const products: Product[] = [
  {
    id: "prod-1",
    handle: "fertility-prenatal-blend",
    title: "OVO+",
    subtitle: "Complément fertilité coenzyme Q10",
    productLine: "OVO+",
    shortDescription:
      "A daily blend of folate, iodine and CoQ10 formulated to support reproductive health while you're trying to conceive.",
    descriptionHtml:
      "<p>A daily blend of folate, iodine and CoQ10 formulated to support reproductive health while you're trying to conceive. Made with traceable, third-party tested ingredients.</p>",
    featuredImage: img("img-1", "/placeholders/product-1.svg", "Fertility Prenatal Blend jar"),
    images: [
      img("img-1a", "/placeholders/product-1.svg", "Fertility Prenatal Blend, front"),
      img("img-1b", "/placeholders/product-5.svg", "Fertility Prenatal Blend, lifestyle"),
      img("img-1c", "/placeholders/lifestyle-1.svg", "Fertility Prenatal Blend, in use"),
    ],
    priceRange: { minVariantPrice: usd(25.5), maxVariantPrice: usd(25.5) },
    compareAtPriceRange: { minVariantPrice: usd(30), maxVariantPrice: usd(30) },
    variants: [
      { id: "var-1-1m", title: "1 month", price: usd(25.5), compareAtPrice: usd(30), available: true, selectedOptions: [{ name: "Duration", value: "1 month" }] },
      { id: "var-1-3m", title: "3 months", price: usd(69), compareAtPrice: usd(90), available: true, selectedOptions: [{ name: "Duration", value: "3 months" }] },
      { id: "var-1-sub", title: "Subscription", price: usd(21.68), compareAtPrice: usd(25.5), available: true, selectedOptions: [{ name: "Duration", value: "Subscription" }] },
    ],
    tags: ["fertility", "prenatal"],
    useCases: ["Projet bébé"],
    badges: ["best-seller", "sans-iode"],
    rating: 4.5,
    reviewCount: 104,
    features: ["Coenzyme Q10 et NAC hautement dosés", "Soutient la fertilité"],
    benefits: ["Supports reproductive health", "Fills common nutrient gaps", "Gentle on digestion"],
    ingredients: ["Folate (5-MTHF)", "CoQ10", "Vitamin D3", "Zinc"],
    usage: "Take 2 capsules daily with a meal.",
    precautions: "Consult your doctor before use if pregnant or nursing.",
    claims: ["Gluten-free", "Made in small batches", "Glass jar"],
  },
  {
    id: "prod-2",
    handle: "prenatal-multivitamin",
    title: "BABY BUMP",
    subtitle: "Multivitamines DHA grossesse & fertilité",
    productLine: "BABY BUMP",
    shortDescription:
      "A comprehensive multivitamin covering the nutrient needs of all three trimesters in one daily dose.",
    descriptionHtml:
      "<p>A comprehensive multivitamin covering the nutrient needs of all three trimesters in one daily dose, including choline and omega-3.</p>",
    featuredImage: img("img-2", "/placeholders/product-2.svg", "Prenatal Multivitamin jar"),
    images: [
      img("img-2a", "/placeholders/product-2.svg", "Prenatal Multivitamin, front"),
      img("img-2b", "/placeholders/product-6.svg", "Prenatal Multivitamin, lifestyle"),
    ],
    priceRange: { minVariantPrice: usd(39.1), maxVariantPrice: usd(39.1) },
    compareAtPriceRange: { minVariantPrice: usd(46), maxVariantPrice: usd(46) },
    variants: [
      { id: "var-2-1m", title: "1 month", price: usd(39.1), compareAtPrice: usd(46), available: true, selectedOptions: [{ name: "Duration", value: "1 month" }] },
      { id: "var-2-3m", title: "3 months", price: usd(105), compareAtPrice: usd(138), available: true, selectedOptions: [{ name: "Duration", value: "3 months" }] },
      { id: "var-2-sub", title: "Subscription", price: usd(33.24), compareAtPrice: usd(39.1), available: true, selectedOptions: [{ name: "Duration", value: "Subscription" }] },
    ],
    tags: ["fertility", "pregnancy", "multivitamin"],
    useCases: ["Projet bébé", "Grossesse"],
    badges: ["best-seller"],
    rating: 4.5,
    reviewCount: 364,
    features: ["14 nutriments essentiels + DHA + Choline", "Formule 3-en-1 ultra complète avec capsule duocaps™"],
    benefits: ["Supports baby's development", "Eases common deficiencies", "One dose a day"],
    ingredients: ["Choline", "Omega-3 DHA", "Iron", "Vitamin B6"],
    usage: "Take 2 capsules daily with food.",
    precautions: "Keep out of reach of children.",
    claims: ["Gluten-free", "Non-GMO", "Glass jar"],
  },
  {
    id: "prod-3",
    handle: "postpartum-recovery-support",
    title: "RECOVERY+",
    subtitle: "Complément récupération post-partum",
    productLine: "RECOVERY+",
    shortDescription:
      "Formulated to support energy, mood and recovery in the fourth trimester.",
    descriptionHtml:
      "<p>Formulated to support energy, mood and recovery in the fourth trimester with iron, B-vitamins and adaptogens.</p>",
    featuredImage: img("img-3", "/placeholders/product-3.svg", "Postpartum Recovery Support jar"),
    images: [
      img("img-3a", "/placeholders/product-3.svg", "Postpartum Recovery Support, front"),
      img("img-3b", "/placeholders/product-7.svg", "Postpartum Recovery Support, lifestyle"),
    ],
    priceRange: { minVariantPrice: usd(30), maxVariantPrice: usd(30) },
    compareAtPriceRange: { minVariantPrice: usd(35), maxVariantPrice: usd(35) },
    variants: [
      { id: "var-3-1m", title: "1 month", price: usd(30), compareAtPrice: usd(35), available: true, selectedOptions: [{ name: "Duration", value: "1 month" }] },
      { id: "var-3-sub", title: "Subscription", price: usd(25.5), compareAtPrice: usd(30), available: true, selectedOptions: [{ name: "Duration", value: "Subscription" }] },
    ],
    tags: ["postpartum", "recovery"],
    useCases: ["Post-partum"],
    badges: [],
    rating: 4.7,
    reviewCount: 348,
    features: ["Formule aux adaptogènes", "Sans iode"],
    benefits: ["Supports energy levels", "Supports mood balance", "Gentle formula"],
    ingredients: ["Iron bisglycinate", "Ashwagandha", "Vitamin B12"],
    usage: "Take 2 capsules daily.",
    precautions: "Consult your doctor if nursing.",
    claims: ["Gluten-free", "Made in small batches"],
  },
  {
    id: "prod-4",
    handle: "milk-supply-support",
    title: "LACTA+",
    subtitle: "Complément soutien lactation",
    productLine: "LACTA+",
    shortDescription:
      "A galactagogue blend of fenugreek-free herbs to support healthy milk supply.",
    descriptionHtml:
      "<p>A galactagogue blend of fenugreek-free herbs to support healthy milk supply, gentle enough for daily use.</p>",
    featuredImage: img("img-4", "/placeholders/product-4.svg", "Milk Supply Support jar"),
    images: [
      img("img-4a", "/placeholders/product-4.svg", "Milk Supply Support, front"),
      img("img-4b", "/placeholders/product-8.svg", "Milk Supply Support, lifestyle"),
    ],
    priceRange: { minVariantPrice: usd(27), maxVariantPrice: usd(27) },
    compareAtPriceRange: { minVariantPrice: usd(32), maxVariantPrice: usd(32) },
    variants: [
      { id: "var-4-1m", title: "1 month", price: usd(27), compareAtPrice: usd(32), available: true, selectedOptions: [{ name: "Duration", value: "1 month" }] },
      { id: "var-4-sub", title: "Subscription", price: usd(22.95), compareAtPrice: usd(27), available: true, selectedOptions: [{ name: "Duration", value: "Subscription" }] },
    ],
    tags: ["breastfeeding", "lactation"],
    useCases: ["Allaitement"],
    badges: ["new"],
    rating: 4.6,
    reviewCount: 204,
    features: ["Sans fenugrec", "Testé par un tiers indépendant"],
    benefits: ["Supports milk supply", "Supports hydration", "Gentle on baby"],
    ingredients: ["Fennel seed", "Blessed thistle", "Moringa"],
    usage: "Take 1 capsule 3x daily.",
    precautions: "Consult a lactation consultant before use.",
    claims: ["Gluten-free", "Non-GMO"],
  },
  {
    id: "prod-5",
    handle: "menopause-hormone-balance",
    title: "MENO+",
    subtitle: "Complément équilibre hormonal",
    productLine: "MENO+",
    shortDescription:
      "A phytoestrogen blend to help ease hot flashes and support hormonal balance.",
    descriptionHtml:
      "<p>A phytoestrogen blend to help ease hot flashes and support hormonal balance through perimenopause and beyond.</p>",
    featuredImage: img("img-5", "/placeholders/product-5.svg", "Hormone Balance Blend jar"),
    images: [
      img("img-5a", "/placeholders/product-5.svg", "Hormone Balance Blend, front"),
      img("img-5b", "/placeholders/lifestyle-4.svg", "Hormone Balance Blend, lifestyle"),
    ],
    priceRange: { minVariantPrice: usd(31), maxVariantPrice: usd(31) },
    compareAtPriceRange: { minVariantPrice: usd(36), maxVariantPrice: usd(36) },
    variants: [
      { id: "var-5-1m", title: "1 month", price: usd(31), compareAtPrice: usd(36), available: true, selectedOptions: [{ name: "Duration", value: "1 month" }] },
      { id: "var-5-sub", title: "Subscription", price: usd(26.35), compareAtPrice: usd(31), available: true, selectedOptions: [{ name: "Duration", value: "Subscription" }] },
    ],
    tags: ["menopause", "hormone"],
    useCases: ["Ménopause"],
    badges: [],
    rating: 4.7,
    reviewCount: 156,
    features: ["100% d'origine végétale", "Sans iode"],
    benefits: ["Eases hot flashes", "Supports restful sleep", "Supports mood balance"],
    ingredients: ["Black cohosh", "Sage extract", "Magnesium"],
    usage: "Take 2 capsules daily, evening preferred.",
    precautions: "Consult your doctor before use.",
    claims: ["Gluten-free", "Made in small batches"],
  },
  {
    id: "prod-6",
    handle: "ovulation-support",
    title: "COCOONING+",
    subtitle: "Complément fertilité pour la femme",
    productLine: "COCOONING+",
    shortDescription:
      "Myo-inositol and vitamin D to support regular ovulation and cycle balance.",
    descriptionHtml:
      "<p>Myo-inositol and vitamin D to support regular ovulation and cycle balance for those trying to conceive.</p>",
    featuredImage: img("img-6", "/placeholders/product-6.svg", "Ovulation Support jar"),
    images: [
      img("img-6a", "/placeholders/product-6.svg", "Ovulation Support, front"),
      img("img-6b", "/placeholders/lifestyle-2.svg", "Ovulation Support, lifestyle"),
    ],
    priceRange: { minVariantPrice: usd(30.6), maxVariantPrice: usd(30.6) },
    compareAtPriceRange: { minVariantPrice: usd(36), maxVariantPrice: usd(36) },
    variants: [
      { id: "var-6-1m", title: "1 month", price: usd(30.6), compareAtPrice: usd(36), available: true, selectedOptions: [{ name: "Duration", value: "1 month" }] },
      { id: "var-6-sub", title: "Subscription", price: usd(26.01), compareAtPrice: usd(30.6), available: true, selectedOptions: [{ name: "Duration", value: "Subscription" }] },
    ],
    tags: ["fertility", "ovulation"],
    useCases: ["Projet bébé"],
    badges: [],
    rating: 4.4,
    reviewCount: 235,
    features: ["+98% d'ingrédients d'origine naturelle", "Diminuer le stress qui perturbe la fertilité"],
    benefits: ["Supports cycle regularity", "Supports egg quality", "Easy to digest"],
    ingredients: ["Myo-inositol", "Vitamin D3", "Folate"],
    usage: "Take 2 capsules daily.",
    precautions: "Consult your doctor before use.",
    claims: ["Gluten-free", "Non-GMO"],
  },
  {
    id: "prod-7",
    handle: "nausea-relief-drops",
    title: "COCOONING+ MEN",
    subtitle: "Complément fertilité pour homme",
    productLine: "COCOONING+ MEN",
    shortDescription:
      "Ginger and vitamin B6 drops to help settle morning sickness.",
    descriptionHtml:
      "<p>Ginger and vitamin B6 drops to help settle morning sickness, in a travel-friendly glass bottle.</p>",
    featuredImage: img("img-7", "/placeholders/product-7.svg", "Nausea Relief Drops bottle"),
    images: [
      img("img-7a", "/placeholders/product-7.svg", "Nausea Relief Drops, front"),
      img("img-7b", "/placeholders/lifestyle-3.svg", "Nausea Relief Drops, lifestyle"),
    ],
    priceRange: { minVariantPrice: usd(39.1), maxVariantPrice: usd(39.1) },
    compareAtPriceRange: { minVariantPrice: usd(46), maxVariantPrice: usd(46) },
    variants: [
      { id: "var-7-1m", title: "1 month", price: usd(39.1), compareAtPrice: usd(46), available: true, selectedOptions: [{ name: "Duration", value: "1 month" }] },
      { id: "var-7-sub", title: "Subscription", price: usd(33.24), compareAtPrice: usd(39.1), available: true, selectedOptions: [{ name: "Duration", value: "Subscription" }] },
    ],
    tags: ["fertility"],
    useCases: ["Projet bébé"],
    badges: [],
    rating: 4.4,
    reviewCount: 49,
    features: ["Inclus l'homme dans le projet bébé", "Les bons actifs (CoQ10, NAC...)"],
    benefits: ["Settles morning sickness", "Fast-acting", "Gentle on the stomach"],
    ingredients: ["Ginger root extract", "Vitamin B6"],
    usage: "Take 10 drops as needed, up to 3x daily.",
    precautions: "Consult your doctor before use.",
    claims: ["Gluten-free", "Non-GMO"],
  },
  {
    id: "prod-8",
    handle: "lactation-snack-bites",
    title: "LACTA BITES",
    subtitle: "Bouchées gourmandes allaitement",
    productLine: "LACTA BITES",
    shortDescription:
      "Oat and flaxseed bites baked with lactation-supporting ingredients.",
    descriptionHtml:
      "<p>Oat and flaxseed bites baked with lactation-supporting ingredients — a snack that doubles as support.</p>",
    featuredImage: img("img-8", "/placeholders/product-8.svg", "Lactation Snack Bites box"),
    images: [
      img("img-8a", "/placeholders/product-8.svg", "Lactation Snack Bites, front"),
      img("img-8b", "/placeholders/lifestyle-5.svg", "Lactation Snack Bites, lifestyle"),
    ],
    priceRange: { minVariantPrice: usd(19), maxVariantPrice: usd(19) },
    compareAtPriceRange: { minVariantPrice: usd(22), maxVariantPrice: usd(22) },
    variants: [
      { id: "var-8-1m", title: "1 box", price: usd(19), compareAtPrice: usd(22), available: true, selectedOptions: [{ name: "Duration", value: "1 box" }] },
      { id: "var-8-sub", title: "Subscription", price: usd(16.15), compareAtPrice: usd(19), available: true, selectedOptions: [{ name: "Duration", value: "Subscription" }] },
    ],
    tags: ["breastfeeding", "snack"],
    useCases: ["Allaitement"],
    badges: [],
    rating: 4.6,
    reviewCount: 92,
    features: ["Avoine & graines de lin", "Sans sucres raffinés"],
    benefits: ["Supports milk supply", "Boosts energy", "Great on the go"],
    ingredients: ["Oats", "Flaxseed", "Brewer's yeast"],
    usage: "Enjoy 1–2 bites daily.",
    precautions: "Contains oats; check for allergies.",
    claims: ["Gluten-free oats", "No refined sugar"],
  },
];

export const collections: Collection[] = [
  { id: "col-1", handle: "fertility", title: "Fertility", description: "Support for your baby project, from cycle tracking to conception.", productIds: ["prod-1", "prod-2", "prod-6", "prod-7"] },
  { id: "col-2", handle: "pregnancy", title: "Pregnancy", description: "Trimester-by-trimester nutritional support.", productIds: ["prod-2"] },
  { id: "col-3", handle: "postpartum", title: "Postpartum", description: "Recovery support for the fourth trimester.", productIds: ["prod-3"] },
  { id: "col-4", handle: "breastfeeding", title: "Breastfeeding", description: "Nourishment to support a healthy milk supply.", productIds: ["prod-4", "prod-8"] },
  { id: "col-5", handle: "menopause", title: "Menopause", description: "Balance and calm through the transition.", productIds: ["prod-5"] },
  { id: "col-6", handle: "best-sellers", title: "Best Sellers", description: "Our most-loved formulas, chosen by mamas.", productIds: ["prod-1", "prod-2", "prod-6"] },
];

export const reviews: Review[] = [
  { id: "rev-1", author: "Marina L.", initials: "ML", avatarColor: "var(--terracotta)", rating: 5, title: "Finally, gentle on my stomach", body: "I've tried three prenatal brands and this is the only one that doesn't make me nauseous. Ordering my second bottle already.", date: "2026-06-02", productHandle: "prenatal-multivitamin", source: "Trustpilot" },
  { id: "rev-2", author: "Sofia B.", initials: "SB", avatarColor: "var(--navy)", rating: 5, title: "My midwife recommended it", body: "Clean ingredient list and my energy levels noticeably improved within two weeks postpartum.", date: "2026-05-14", productHandle: "postpartum-recovery-support", source: "Judge.me" },
  { id: "rev-3", author: "Amira K.", initials: "AK", avatarColor: "var(--lime-dark)", rating: 4, title: "Great taste, easy habit", body: "The snack bites are actually good, not just 'good for a supplement.' My supply has been steady since starting.", date: "2026-04-28", productHandle: "lactation-snack-bites", source: "Google" },
  { id: "rev-4", author: "Jade D.", initials: "JD", avatarColor: "var(--terracotta)", rating: 5, title: "Cycle finally feels predictable", body: "Three months in and my cycle length is far more consistent. Customer support was also lovely when I had questions.", date: "2026-03-19", productHandle: "ovulation-support", source: "Trustpilot" },
  { id: "rev-5", author: "Rania T.", initials: "RT", avatarColor: "var(--navy)", rating: 5, title: "Hot flashes are manageable now", body: "Started noticing a difference around week three. Wish I'd found this sooner.", date: "2026-02-27", productHandle: "menopause-hormone-balance", source: "Judge.me" },
  { id: "rev-6", author: "Chloé N.", initials: "CN", avatarColor: "var(--ink)", rating: 4, title: "Subtle ginger taste, works fast", body: "Kept these by my bed for the first trimester. A few drops and the nausea genuinely eases.", date: "2026-01-30", productHandle: "nausea-relief-drops", source: "Google" },
];

export const blogPosts: BlogPost[] = [
  { id: "blog-1", handle: "understanding-your-cycle", title: "Understanding Your Cycle Before Trying to Conceive", excerpt: "A practical guide to tracking ovulation and reading your body's signals.", category: "Fertility", readingTime: "6 min read", image: img("blog-img-1", "/placeholders/blog-1.svg", "Understanding your cycle") },
  { id: "blog-2", handle: "first-trimester-nutrition", title: "First Trimester Nutrition, Simplified", excerpt: "What to prioritize when appetite and nausea make eating well feel impossible.", category: "Pregnancy", readingTime: "5 min read", image: img("blog-img-2", "/placeholders/blog-2.svg", "First trimester nutrition") },
  { id: "blog-3", handle: "fourth-trimester-recovery", title: "The Fourth Trimester: What Recovery Actually Looks Like", excerpt: "Realistic expectations and gentle support for the weeks after birth.", category: "Postpartum", readingTime: "7 min read", image: img("blog-img-3", "/placeholders/blog-3.svg", "Fourth trimester recovery") },
  { id: "blog-4", handle: "navigating-perimenopause", title: "Navigating Perimenopause with Confidence", excerpt: "Common symptoms, when to see a doctor, and small daily habits that help.", category: "Menopause", readingTime: "8 min read", image: img("blog-img-4", "/placeholders/blog-4.svg", "Navigating perimenopause") },
];

export function getProductByHandle(handle: string): Product | undefined {
  return products.find((p) => p.handle === handle);
}

export function getCollectionByHandle(handle: string): Collection | undefined {
  return collections.find((c) => c.handle === handle);
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
