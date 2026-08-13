import { Container } from "@/components/ui/Container";

const badges = [
  { title: "Livraison 24–48h", body: "Partout au Maroc", icon: <DeliveryIcon className="h-full w-full" /> },
  { title: "Paiement flexible", body: "À la livraison ou par carte", icon: <PaymentIcon className="h-full w-full" /> },
  { title: "Satisfait ou remboursé", body: "Garantie de remboursement", icon: <RefundIcon className="h-full w-full" /> },
  { title: "4,8/5", body: "Plus de 2 000 avis vérifiés", icon: <StarIcon className="h-full w-full" /> },
  { title: "Certifié GMP", body: "Fabrication aux normes qualité", icon: <CertifiedIcon className="h-full w-full" /> },
];

function DeliveryIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M14 3.5l9 5v11l-9 5-9-5v-11l9-5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M5 8.5L14 13.5l9-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M14 13.5V24.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function PaymentIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="3" y="6.5" width="22" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 11.5h22" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 16.5h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function RefundIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M14 3.5l9 3.3v6.4c0 6-3.8 9.9-9 11.3-5.2-1.4-9-5.3-9-11.3V6.8l9-3.3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M10 14.2l2.8 2.8 5.2-5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M14 3.5l3.1 6.5 7.1.9-5.2 5 1.3 7.1-6.3-3.5-6.3 3.5 1.3-7.1-5.2-5 7.1-.9 3.1-6.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CertifiedIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="11" r="7.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 10.6l2 2 3.2-3.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 17.5l-2 7 6-3 6 3-2-7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function TrustBadges() {
  return (
    <section className="bg-blue-light py-14 sm:py-16">
      <Container className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-5">
        {badges.map((badge) => (
          <div key={badge.title} className="flex flex-col items-center gap-3 text-center">
            <div className="flex h-12 w-12 items-center justify-center text-blue sm:h-14 sm:w-14">
              {badge.icon}
            </div>
            <div>
              <p className="text-base font-semibold text-ink">{badge.title}</p>
              <p className="mt-1 text-sm text-ink/70">{badge.body}</p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
