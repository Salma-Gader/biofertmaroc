import { Container } from "@/components/ui/Container";

const values = [
  { title: "Clean formulas", description: "No fillers, no artificial dyes." },
  { title: "Third-party tested", description: "Every batch verified for purity." },
  { title: "Made responsibly", description: "Small-batch, traceable sourcing." },
  { title: "Expert-formulated", description: "Developed with OB-GYNs and midwives." },
  { title: "Mama-approved", description: "Shaped by real feedback from our community." },
];

function ValueIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="12.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 14.5l3.2 3.2L19 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Values() {
  return (
    <section className="bg-pale-yellow py-16 sm:py-20">
      <Container className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-5">
        {values.map((value) => (
          <div key={value.title} className="flex flex-col items-center gap-3 text-center">
            <div className="text-ink">
              <ValueIcon />
            </div>
            <h3 className="font-display text-sm font-semibold sm:text-base">{value.title}</h3>
            <p className="text-xs text-ink/60">{value.description}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
