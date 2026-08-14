"use client";

import { useState } from "react";
import { SearchIcon } from "@/components/ui/Icons";

const suggestedQuestions = [
  "Est-ce sans danger en cas de grossesse ?",
  "Au bout de combien de temps voit-on des résultats ?",
  "Puis-je le prendre avec d'autres compléments ?",
];

export function AskAboutProduct({ productTitle }: { productTitle: string }) {
  const [question, setQuestion] = useState("");

  return (
    <div className="rounded-3xl bg-cream p-6 sm:p-8">
      <h2 className="font-display text-lg font-medium">
        Une question sur {productTitle} ?
      </h2>
      <p className="mt-1 text-sm text-ink/60">
        Obtenez rapidement une réponse à vos questions les plus fréquentes.
      </p>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="mt-4 flex items-center gap-2 rounded-full border border-ink/15 bg-white px-4 py-2.5"
      >
        <SearchIcon className="text-ink/40" />
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Tapez votre question…"
          className="flex-1 bg-transparent text-sm outline-none placeholder:text-ink/40"
        />
      </form>
      <div className="mt-3 flex flex-wrap gap-2">
        {suggestedQuestions.map((q) => (
          <button
            key={q}
            onClick={() => setQuestion(q)}
            className="rounded-full border border-ink/15 bg-white px-3 py-1.5 text-xs text-ink/70 hover:border-ink/40"
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
}
