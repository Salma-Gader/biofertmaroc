import { Container } from "@/components/ui/Container";

const badges = [
  { title: "Livraison 24–48h", body: "Partout au Maroc" },
  { title: "Paiement flexible", body: "À la livraison ou par carte" },
  { title: "Satisfait ou remboursé", body: "Garantie de remboursement" },
  { title: "4,8/5", body: "Plus de 2 000 avis vérifiés" },
  { title: "Certifié GMP", body: "Fabrication aux normes qualité" },
];

function BadgeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2.5" y="6" width="19" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2.5 10h19" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function TrustBadges() {
  return (
    <section className="bg-blue-light py-10">
      <Container className="grid grid-cols-2 gap-6 sm:grid-cols-5">
        {badges.map((badge) => (
          <div key={badge.title} className="flex items-center gap-3">
            <span className="text-blue">
              <BadgeIcon />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">{badge.title}</p>
              <p className="text-xs text-ink/70">{badge.body}</p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
