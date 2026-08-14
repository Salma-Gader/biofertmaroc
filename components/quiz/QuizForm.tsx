"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CheckIcon, ArrowIcon } from "@/components/ui/Icons";
import { quizQuestions, getQuizRecommendation } from "@/lib/quiz-data";

export function QuizForm() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [stepIndex, setStepIndex] = useState(0);

  const visibleQuestions = useMemo(
    () => quizQuestions.filter((q) => !q.showIf || q.showIf(answers)),
    [answers]
  );

  const finished = stepIndex >= visibleQuestions.length;
  const currentQuestion = visibleQuestions[stepIndex];
  const progress = finished
    ? 100
    : Math.round((stepIndex / visibleQuestions.length) * 100);

  function selectOption(questionId: string, option: string) {
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
    setStepIndex((i) => i + 1);
  }

  function goBack() {
    setStepIndex((i) => Math.max(0, i - 1));
  }

  function restart() {
    setAnswers({});
    setStepIndex(0);
  }

  if (finished) {
    const recommendation = getQuizRecommendation(answers);
    return (
      <div className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-wide text-ink/50">
          Votre bilan est prêt
        </span>
        <h2 className="font-display text-2xl font-medium text-ink sm:text-3xl">
          Nous vous recommandons {recommendation.title}
        </h2>
        <p className="max-w-md text-sm leading-relaxed text-ink/70">
          {recommendation.description}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={recommendation.href} variant="primary" size="lg">
            Découvrir {recommendation.title}
          </Button>
          <Button href="/collections/best-sellers" variant="outline" size="lg">
            Voir tous nos produits
          </Button>
        </div>
        <button
          type="button"
          onClick={restart}
          className="text-sm text-ink/50 underline underline-offset-4 hover:text-ink"
        >
          Recommencer le questionnaire
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto flex max-w-xl flex-col gap-8">
      <div>
        <div className="mb-2 flex items-center justify-between text-xs font-medium text-ink/50">
          <span>
            Question {stepIndex + 1} sur {visibleQuestions.length}
          </span>
          <span>{progress}%</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-cream" aria-hidden="true">
          <div
            className="h-full rounded-full bg-ink transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <h2 className="font-display text-xl font-medium text-ink sm:text-2xl">
        {currentQuestion.question}
      </h2>

      <div role="radiogroup" aria-label={currentQuestion.question} className="flex flex-col gap-3">
        {currentQuestion.options.map((option) => {
          const selected = answers[currentQuestion.id] === option;
          return (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => selectOption(currentQuestion.id, option)}
              className={`flex w-full items-center justify-between gap-3 rounded-xl border px-5 py-4 text-left text-sm transition-colors ${
                selected
                  ? "border-ink bg-ink text-cream"
                  : "border-ink/15 bg-white text-ink hover:border-ink/40 hover:bg-cream"
              }`}
            >
              {option}
              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                  selected ? "border-cream bg-cream text-ink" : "border-ink/20"
                }`}
                aria-hidden="true"
              >
                {selected && <CheckIcon size={12} />}
              </span>
            </button>
          );
        })}
      </div>

      <div className="flex items-center justify-between">
        {stepIndex > 0 ? (
          <button
            type="button"
            onClick={goBack}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink/60 hover:text-ink"
          >
            <ArrowIcon direction="left" size={14} />
            Précédent
          </button>
        ) : (
          <span />
        )}
        <Link href="/faq" className="text-xs text-ink/40 underline underline-offset-4 hover:text-ink/70">
          Besoin d&apos;aide ?
        </Link>
      </div>
    </div>
  );
}
