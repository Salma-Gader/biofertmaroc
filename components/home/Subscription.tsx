import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";

const tiles = [
  { title: "Save 15%", body: "On every subscription order, automatically applied." },
  { title: "Free shipping", body: "On all subscription orders, no minimum required." },
  { title: "Pause anytime", body: "Skip, delay or cancel in a couple of clicks." },
  { title: "Flexible schedule", body: "Choose delivery every 1, 2 or 3 months." },
  { title: "Priority support", body: "Subscribers get a dedicated care line." },
];

export function Subscription() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl lg:aspect-auto">
          <Image
            src="/placeholders/lifestyle-2.svg"
            alt=""
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <div className="col-span-2 flex flex-col justify-center gap-3 rounded-3xl bg-ink p-6 text-cream sm:col-span-3 sm:p-8">
            <Heading as="h2" size="sub" className="text-cream">
              Subscribe & Save
            </Heading>
            <p className="text-sm text-cream/70">
              Make your routine effortless — and save 15% while you&apos;re at it.
            </p>
            <Button href="/subscriptions" variant="accent" size="md" className="mt-2 w-fit">
              Learn More
            </Button>
          </div>

          {tiles.map((tile) => (
            <div
              key={tile.title}
              className="flex flex-col gap-2 rounded-3xl bg-cream p-5"
            >
              <CheckIcon className="text-lime-dark" size={18} />
              <h3 className="font-display text-base font-semibold">{tile.title}</h3>
              <p className="text-xs text-ink/60">{tile.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
