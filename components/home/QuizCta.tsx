import Image from "next/image";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";

export function QuizCta() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-5 bg-cream px-6 py-8 text-center sm:px-12 sm:py-16 lg:px-16">
          <Heading as="h2" size="sub">
            Vous ne savez pas par où commencer ?
          </Heading>
          <p className="max-w-md text-sm text-ink/70">
            Faites notre bilan personnalisé en 2 minutes pour recevoir une recommandation
            adaptée à votre parcours de fertilité.
          </p>
          <Button href="/quiz" variant="primary" size="lg">
            Faire le bilan
          </Button>
        </div>

        <div className="flex items-center justify-center bg-cream">
          <Image
            src="/placeholders/Gemini_Generated_Image_axtykyaxtykyaxty.png"
            alt=""
            width={1341}
            height={784}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
