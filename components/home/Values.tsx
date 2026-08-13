import { Container } from "@/components/ui/Container";

const values = [
  {
    title: "Formules propres",
    description: "Sans charges, ni colorants artificiels.",
    icon: <CleanIcon />,
  },
  {
    title: "Testé par un tiers",
    description: "Chaque lot est vérifié pour sa pureté.",
    icon: <TestedIcon />,
  },
  {
    title: "Fabriqué de façon responsable",
    description: "Petits lots, sourcing traçable.",
    icon: <LeafIcon />,
  },
  {
    title: "Formulé par des experts",
    description: "Développé avec des gynécologues et sages-femmes.",
    icon: <ExpertIcon />,
  },
  {
    title: "Approuvé par les mamans",
    description: "Façonné par les retours réels de notre communauté.",
    icon: <ApprovedIcon />,
  },
];

function CleanIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M14 4c3.5 4.2 6 7.7 6 11a6 6 0 1 1-12 0c0-3.3 2.5-6.8 6-11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M22 6l.9 2.1L25 9l-2.1.9L22 12l-.9-2.1L19 9l2.1-.9L22 6Z" fill="currentColor" />
    </svg>
  );
}

function TestedIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M11 3.5h6M12 4v7.2L7.6 19a2.5 2.5 0 0 0 2.2 3.7h8.4a2.5 2.5 0 0 0 2.2-3.7L16 11.2V4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9.5 16.5h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M6 21C5 12 11 5 21 5c1 8-6 16-15 16Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M6 21c3-4.5 6.5-8 12.5-12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ExpertIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M14 9.5v9M9.5 14h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ApprovedIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M14 22s-8-4.6-8-10.8A4.7 4.7 0 0 1 14 8.3a4.7 4.7 0 0 1 8 2.9C22 17.4 14 22 14 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M11 13.2l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Values() {
  return (
    <section className="bg-cream-dark py-16 sm:py-20">
      <Container>
        <h2 className="text-center font-display text-2xl text-ink sm:text-3xl">Nos valeurs</h2>
        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-5">
          {values.map((value) => (
            <div key={value.title} className="flex flex-col items-center gap-3 text-center">
              <div className="text-brown">{value.icon}</div>
              <h3 className="font-display text-sm font-semibold text-ink sm:text-base">{value.title}</h3>
              <p className="text-xs text-ink/60">{value.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
