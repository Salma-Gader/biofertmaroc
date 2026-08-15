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

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ExpertIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4.5 20c1.5-4 4.5-6 7.5-6s6 2 7.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M15.5 5.5l1 1 2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
  { title: "100% gratuit", body: "Sans engagement, aucun frais", icon: <PercentIcon /> },
  { title: "2 minutes chrono", body: "Un questionnaire rapide et simple", icon: <ClockIcon /> },
  { title: "Résultat immédiat", body: "Votre recommandation à la fin du bilan", icon: <BoxIcon /> },
  { title: "Conseils d'experts", body: "Basés sur votre profil de fertilité", icon: <ExpertIcon /> },
  { title: "100% confidentiel", body: "Vos réponses restent privées", icon: <DocumentIcon /> },
];

export function Subscription() {
  return (
    <section className="bg-white">
      <div className="grid lg:min-h-screen lg:grid-cols-2">
        <div className="flex flex-col justify-center gap-6 bg-[#efe8e6] px-6 py-10 sm:px-12 sm:py-20 lg:px-16">
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

          <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">
            Votre bilan personnalisé, gratuit en 2 minutes
          </h2>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {tiles.map((tile) => (
              <div key={tile.title} className="flex flex-col gap-2 rounded-2xl bg-white p-4">
                <span className="text-[#D6336C]">{tile.icon}</span>
                <h3 className="font-display text-sm font-medium text-ink">{tile.title}</h3>
                <p className="text-xs text-ink/60">{tile.body}</p>
              </div>
            ))}
            <Link
              href="/quiz"
              className="flex flex-col justify-between gap-2 rounded-2xl bg-[#e0f2fe] p-4 transition-colors hover:bg-[#c9e7fb]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-white">
                <ArrowIcon size={14} />
              </span>
              <span className="font-display text-sm font-semibold text-ink">Faire le bilan</span>
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
