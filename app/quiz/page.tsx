import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { QuizForm } from "@/components/quiz/QuizForm";

export const metadata: Metadata = {
  title: "Bilan personnalisé",
  description:
    "Répondez à quelques questions pour recevoir une recommandation adaptée à votre parcours de fertilité.",
};

export default function QuizPage() {
  return (
    <div className="bg-cream/40 py-12 sm:py-16">
      <Container className="flex flex-col items-center gap-3 pb-10 text-center sm:pb-14">
        <Heading as="h1" size="section">
          Bilan personnalisé
        </Heading>
        <p className="max-w-lg text-sm text-ink/70">
          Répondez à quelques questions pour recevoir une recommandation adaptée à votre
          situation. Vos réponses restent confidentielles.
        </p>
      </Container>

      <Container>
        <div className="mx-auto max-w-2xl rounded-3xl bg-white p-6 shadow-sm sm:p-10">
          <QuizForm />
        </div>
      </Container>
    </div>
  );
}
