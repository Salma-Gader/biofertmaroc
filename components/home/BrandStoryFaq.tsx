import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Accordion } from "@/components/ui/Accordion";

const faqItems = [
  {
    question: "Are your formulas safe during pregnancy?",
    answer:
      "Every formula is developed with OB-GYNs and third-party tested for purity. Always check with your care provider before starting anything new.",
  },
  {
    question: "How is BioFertMaroc different from a standard prenatal?",
    answer:
      "We formulate for each specific season — fertility, pregnancy, postpartum, breastfeeding and menopause — rather than one catch-all multivitamin.",
  },
  {
    question: "Can I pause or cancel my subscription?",
    answer:
      "Yes, anytime from your account. Skip a delivery, change your schedule, or cancel with no fees.",
  },
  {
    question: "Where are your products made?",
    answer:
      "In small batches with fully traceable, responsibly sourced ingredients.",
  },
];

export function BrandStoryFaq() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <Heading size="section" className="mb-4">
            Why we started BioFertMaroc
          </Heading>
          <p className="mb-8 max-w-md text-sm leading-relaxed text-ink/70">
            We built the brand we wished existed — one that treats every stage
            of motherhood with the same care, from the first cycle you track
            to the years after your last period. No jargon, no shame, just
            formulas that work.
          </p>
          <Accordion items={faqItems} />
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
          <Image
            src="/placeholders/lifestyle-6.svg"
            alt=""
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
