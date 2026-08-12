import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";

export function QuizCta() {
  return (
    <section className="bg-ink py-14 sm:py-16">
      <Container className="flex flex-col items-center gap-5 text-center text-cream">
        <Heading as="h2" size="sub" className="text-cream">
          Not sure where to start?
        </Heading>
        <p className="max-w-md text-sm text-cream/70">
          Take our 2-minute quiz for a personalized routine based on your
          season of motherhood.
        </p>
        <Button href="/quiz" variant="accent" size="lg">
          Take the Quiz
        </Button>
      </Container>
    </section>
  );
}
