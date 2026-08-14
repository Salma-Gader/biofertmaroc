import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center gap-4 py-24 text-center sm:py-32">
      <span className="font-display text-6xl font-medium text-ink/20">404</span>
      <h1 className="font-display text-2xl font-medium text-ink sm:text-3xl">
        Cette page est introuvable
      </h1>
      <p className="max-w-md text-sm text-ink/60">
        La page que vous cherchez n&apos;existe pas ou a été déplacée.
      </p>
      <Button href="/" variant="primary" size="lg" className="mt-2">
        Retour à l&apos;accueil
      </Button>
    </Container>
  );
}
