import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/ui/Icons";

const avatars = [
  { initials: "ZL", color: "var(--pink)" },
  { initials: "IB", color: "var(--blue)" },
  { initials: "YO", color: "var(--pink-dark)" },
  { initials: "RA", color: "var(--blue-dark)" },
];

function PercentIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M17 7L7 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function BoxIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3.5 8l8.5-4 8.5 4-8.5 4-8.5-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M3.5 8v8l8.5 4 8.5-4V8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 12v8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3.5 10h17M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="9" width="17" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3.5 9h17v4h-17z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 9v11" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 9c0-2.5-1.8-4-3.5-4S6 6.3 6 7.5 7.2 9 8.5 9H12zM12 9c0-2.5 1.8-4 3.5-4S18 6.3 18 7.5 16.8 9 15.5 9H12z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 3h8l5 5v13a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M14 3v5h5M8 13h8M8 17h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const tiles = [
  { title: "-15% sur tous les produits", body: "Votre routine à prix doux", icon: <PercentIcon /> },
  { title: "Livraison offerte", body: "Dès 400 DH tous les 30 jours", icon: <BoxIcon /> },
  { title: "Abonnement modifiable", body: "Changez de produits à tout moment", icon: <CalendarIcon /> },
  { title: "Cadeaux et surprises", body: "Glissés régulièrement dans vos commandes", icon: <GiftIcon /> },
  { title: "Des contenus exclusifs", body: "Accès à nos fiches et conseils", icon: <DocumentIcon /> },
];

export function Subscription() {
  return (
    <section className="bg-white">
      <div className="grid lg:min-h-screen lg:grid-cols-2">
        <div className="flex flex-col justify-center gap-6 bg-[#efe8e6] px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
          <div className="flex flex-col items-start gap-2">
            <div className="flex -space-x-2">
              {avatars.map((a) => (
                <span
                  key={a.initials}
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#efe8e6] text-xs font-semibold text-white"
                  style={{ backgroundColor: a.color }}
                >
                  {a.initials}
                </span>
              ))}
            </div>
            <span className="text-[#D6336C]" aria-hidden="true">★★★★★</span>
            <p className="text-sm font-medium text-ink/70">
              + de 2 000 clients nous font confiance !
            </p>
          </div>

          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Votre abonnement : votre routine livrée tous les mois
          </h2>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {tiles.map((tile) => (
              <div key={tile.title} className="flex flex-col gap-2 rounded-2xl bg-white p-4">
                <span className="text-[#D6336C]">{tile.icon}</span>
                <h3 className="font-display text-sm font-semibold text-ink">{tile.title}</h3>
                <p className="text-xs text-ink/60">{tile.body}</p>
              </div>
            ))}
            <Link
              href="/subscriptions"
              className="flex flex-col justify-between gap-2 rounded-2xl bg-[#e0f2fe] p-4 transition-colors hover:bg-[#c9e7fb]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-white">
                <ArrowIcon size={14} />
              </span>
              <span className="font-display text-sm font-semibold text-ink">Je m&apos;abonne</span>
            </Link>
          </div>
        </div>

        <div className="relative min-h-[420px] w-full overflow-hidden lg:min-h-full">
          <Image
            src="https://images.unsplash.com/photo-1651663303138-4dc283e15992?w=1000&q=80&fit=crop"
            alt="Femme enceinte tenant un flacon BioFert"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
