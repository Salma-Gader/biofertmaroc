import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";

const photos = [
  { src: "/placeholders/founder-1.svg", rotate: "-rotate-6", className: "left-0 top-4" },
  { src: "/placeholders/founder-2.svg", rotate: "rotate-3", className: "left-24 top-0" },
  { src: "/placeholders/founder-3.svg", rotate: "-rotate-2", className: "left-12 top-28" },
];

export function AboutFounder() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <Container className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <div className="relative mx-auto h-80 w-full max-w-sm sm:h-96">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className={`absolute h-48 w-40 rounded-sm bg-white p-2 shadow-card sm:h-56 sm:w-48 ${photo.rotate} ${photo.className}`}
            >
              <div className="relative h-full w-full overflow-hidden">
                <Image src={photo.src} alt="" fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>

        <div>
          <Heading size="section" className="mb-4">
            Two mamas, for all mamas
          </Heading>
          <p className="max-w-md text-sm leading-relaxed text-ink/70">
            BioFertMaroc was founded by two mothers who couldn&apos;t find
            supplements that respected both their bodies and their
            intelligence. What started as a single formula shared between
            friends has grown into a full routine trusted by thousands of
            mamas at every stage.
          </p>
        </div>
      </Container>
    </section>
  );
}
