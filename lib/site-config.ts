import type { NavCategory, NavLink, MomentTile } from "./types";

export const siteConfig = {
  name: "BioFertMaroc",
  tagline: "Nutrition for every season of motherhood",
  description:
    "Fertility, pregnancy, postpartum, breastfeeding and menopause supplements formulated with mamas in mind.",
};

export const productMegaMenu: NavCategory[] = [
  {
    label: "Fertility",
    href: "/collections/fertility",
    links: [
      { label: "Prenatal Vitamins", href: "/collections/fertility/prenatal-vitamins" },
      { label: "Ovulation Support", href: "/collections/fertility/ovulation-support" },
      { label: "For Partners", href: "/collections/fertility/for-partners" },
    ],
  },
  {
    label: "Pregnancy",
    href: "/collections/pregnancy",
    links: [
      { label: "Prenatal Multivitamin", href: "/collections/pregnancy/multivitamin" },
      { label: "Nausea Relief", href: "/collections/pregnancy/nausea-relief" },
      { label: "Third Trimester", href: "/collections/pregnancy/third-trimester" },
    ],
  },
  {
    label: "Postpartum",
    href: "/collections/postpartum",
    links: [
      { label: "Recovery Support", href: "/collections/postpartum/recovery" },
      { label: "Mood & Energy", href: "/collections/postpartum/mood-energy" },
    ],
  },
  {
    label: "Breastfeeding",
    href: "/collections/breastfeeding",
    links: [
      { label: "Milk Supply Support", href: "/collections/breastfeeding/milk-supply" },
      { label: "Lactation Snacks", href: "/collections/breastfeeding/snacks" },
    ],
  },
  {
    label: "Menopause",
    href: "/collections/menopause",
    links: [
      { label: "Hormone Balance", href: "/collections/menopause/hormone-balance" },
      { label: "Sleep & Calm", href: "/collections/menopause/sleep-calm" },
    ],
  },
  {
    label: "Bundles",
    href: "/collections/bundles",
    links: [
      { label: "Starter Bundles", href: "/collections/bundles/starter" },
      { label: "Best Seller Bundles", href: "/collections/bundles/best-sellers" },
    ],
  },
];

export const resourcesMenu: NavLink[] = [
  { label: "Blog", href: "/blog" },
  { label: "Guides", href: "/guides" },
  { label: "FAQ", href: "/faq" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const momentTiles: MomentTile[] = [
  { label: "Fertility", href: "/collections/fertility", image: "/placeholders/moment-1.svg" },
  { label: "Pregnancy", href: "/collections/pregnancy", image: "/placeholders/moment-2.svg" },
  { label: "Birth", href: "/collections/birth", image: "/placeholders/moment-3.svg" },
  { label: "Postpartum", href: "/collections/postpartum", image: "/placeholders/moment-4.svg" },
  { label: "Breastfeeding", href: "/collections/breastfeeding", image: "/placeholders/moment-5.svg" },
  { label: "Menopause", href: "/collections/menopause", image: "/placeholders/moment-6.svg" },
  { label: "Pregnancy Loss", href: "/collections/pregnancy-loss", image: "/placeholders/moment-7.svg" },
  { label: "General Wellness", href: "/collections/wellness", image: "/placeholders/moment-8.svg" },
];

export const footerNav = {
  shop: [
    { label: "Fertility", href: "/collections/fertility" },
    { label: "Pregnancy", href: "/collections/pregnancy" },
    { label: "Postpartum", href: "/collections/postpartum" },
    { label: "Breastfeeding", href: "/collections/breastfeeding" },
    { label: "Menopause", href: "/collections/menopause" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact" },
  ],
  help: [
    { label: "FAQ", href: "/faq" },
    { label: "Shipping & Returns", href: "/shipping-returns" },
    { label: "Subscriptions", href: "/subscriptions" },
    { label: "Track Order", href: "/track-order" },
  ],
  legal: [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};
