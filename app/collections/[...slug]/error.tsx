"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function CollectionError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="flex flex-col items-center gap-4 py-24 text-center sm:py-32">
      <h1 className="font-display text-2xl font-medium text-ink sm:text-3xl">
        Impossible de charger cette collection
      </h1>
      <p className="max-w-md text-sm text-ink/60">
        Une erreur est survenue en récupérant les produits depuis notre boutique. Réessayez
        dans un instant.
      </p>
      <Button onClick={reset} variant="primary" size="lg" className="mt-2">
        Réessayer
      </Button>
    </Container>
  );
}
