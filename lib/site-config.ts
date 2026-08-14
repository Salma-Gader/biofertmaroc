import type { NavCategory, NavLink, MomentTile } from "./types";

export const siteConfig = {
  name: "BioFertMaroc",
  tagline: "Des compléments naturels pour votre fertilité",
  description:
    "Compléments alimentaires 100% naturels pour soutenir la fertilité féminine, masculine et de couple, formulés au Maroc.",
};

export const productMegaMenu: NavCategory[] = [
  {
    label: "Elle",
    href: "/collections/elle",
    links: [
      { label: "BellaFert", href: "/products/bellafert" },
      { label: "Relaxes Woman", href: "/products/relaxes-woman" },
      { label: "CycleCare", href: "/products/cyclecare" },
    ],
    images: ["/products/bellafert.png", "/products/cyclecare.png"],
  },
  {
    label: "Lui",
    href: "/collections/lui",
    links: [
      { label: "FertiMen", href: "/products/fertimen" },
      { label: "Ferti Power", href: "/products/ferti-power" },
      { label: "PowerMen", href: "/products/powermen" },
      { label: "SmokeClean Men", href: "/products/smokeclean-men" },
    ],
    images: ["/products/fertimen.png", "/products/powermen.png"],
  },
  {
    label: "Duo",
    href: "/collections/duo",
    links: [{ label: "Pack Couple", href: "/products/pack-couple" }],
    images: ["/products/pack-couple.png", "/products/bellafert.png"],
  },
  {
    label: "Nos Essentiels",
    href: "/collections/essentiels",
    links: [
      { label: "Ferti Power", href: "/products/ferti-power" },
      { label: "PowerMen", href: "/products/powermen" },
      { label: "SmokeClean Men", href: "/products/smokeclean-men" },
      { label: "Relaxes Woman", href: "/products/relaxes-woman" },
      { label: "CycleCare", href: "/products/cyclecare" },
    ],
    images: ["/products/fertipower.png", "/products/relaxeswoman.png"],
  },
  {
    label: "Best Sellers",
    href: "/collections/best-sellers",
    links: [
      { label: "BellaFert", href: "/products/bellafert" },
      { label: "FertiMen", href: "/products/fertimen" },
      { label: "Pack Couple", href: "/products/pack-couple" },
    ],
    images: ["/products/bellafert.png", "/products/fertimen.png"],
  },
];

export const resourcesMenu: NavLink[] = [
  { label: "Blog", href: "/blog" },
  { label: "Guides", href: "/guides" },
  { label: "FAQ", href: "/faq" },
  { label: "À propos", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const momentTiles: MomentTile[] = [
  { label: "Fertilité Elle", href: "/products/bellafert", image: "/placeholders/Katie-19.webp" },
  { label: "Fertilité Lui", href: "/products/fertimen", image: "/placeholders/acc6681798d84408f49df7075930f68d.jpg" },
  { label: "Duo Fertilité", href: "/products/pack-couple", image: "/placeholders/JM_SHOOTING_CELINE-0620.webp" },
  { label: "Vitalité Lui", href: "/products/ferti-power", image: "/placeholders/11271a6c6c5659120631072b7da58036.jpg" },
  { label: "Performance", href: "/products/powermen", image: "/placeholders/da4159e3377b9b7552fb4ef9e35a3da6.jpg" },
  { label: "Détox", href: "/products/smokeclean-men", image: "/placeholders/893ad68020bb0ac7f38673363d0a7d9e.jpg" },
  { label: "Sérénité Elle", href: "/products/relaxes-woman", image: "/placeholders/pexels-aliona-zueva-42707571-11554690.jpg" },
  { label: "Confort Cycle", href: "/products/cyclecare", image: "/placeholders/143d96aee1fec0c6151129078e6d985e.jpg" },
];

export const footerNav = {
  shop: [
    { label: "Elle", href: "/collections/elle" },
    { label: "Lui", href: "/collections/lui" },
    { label: "Duo", href: "/collections/duo" },
    { label: "Nos Essentiels", href: "/collections/essentiels" },
    { label: "Best Sellers", href: "/collections/best-sellers" },
  ],
  company: [
    { label: "À propos", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Avis clients", href: "/#avis" },
    { label: "Contact", href: "/contact" },
  ],
  help: [
    { label: "FAQ", href: "/faq" },
    { label: "Livraison & Retours", href: "/faq" },
    { label: "Suivi de commande", href: "/contact" },
  ],
  legal: [
    { label: "Conditions Générales de Vente", href: "/terms" },
    { label: "Politique de Confidentialité", href: "/privacy" },
  ],
};
