export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  /** Only shown when this returns true for the answers collected so far. */
  showIf?: (answers: Record<string, string>) => boolean;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "age",
    question: "Quel est votre âge ?",
    options: ["Moins de 25 ans", "25–29 ans", "30–34 ans", "35–39 ans", "40 ans ou plus"],
  },
  {
    id: "who",
    question: "Chez qui le problème de fertilité a-t-il été identifié ou suspecté ?",
    options: ["La femme", "L'homme", "Les deux", "Nous ne savons pas encore"],
  },
  {
    id: "duration",
    question: "Depuis combien de temps essayez-vous d'avoir un enfant ?",
    options: ["Moins d'un an", "1–2 ans", "2–4 ans", "Plus de 4 ans"],
  },
  {
    id: "pregnancy",
    question: "Une grossesse a-t-elle déjà eu lieu ?",
    options: [
      "Oui, grossesse menée à terme",
      "Oui, avec une fausse couche",
      "Oui, avec plusieurs fausses couches",
      "Non, aucune grossesse à ce jour",
    ],
  },
  {
    id: "womanCause",
    question: "Si le problème concerne la femme, quelle situation correspond le mieux à votre cas ?",
    options: [
      "Syndrome des ovaires polykystiques (SOPK)",
      "Troubles ou faiblesse de l'ovulation",
      "Faible réserve ovarienne",
      "Trompes obstruées",
      "Endométriose",
      "Troubles hormonaux",
      "Cycles irréguliers ou absents",
      "Aucun diagnostic / examens non réalisés",
      "Autre",
    ],
    showIf: (answers) => answers.who === "La femme" || answers.who === "Les deux",
  },
  {
    id: "manCause",
    question: "Si le problème concerne l'homme, quelle situation correspond le mieux à votre cas ?",
    options: [
      "Faible nombre de spermatozoïdes",
      "Faible mobilité des spermatozoïdes",
      "Anomalies morphologiques des spermatozoïdes",
      "Absence de spermatozoïdes (azoospermie)",
      "Varicocèle",
      "Troubles hormonaux",
      "Troubles de l'érection ou de l'éjaculation",
      "Aucun diagnostic / examens non réalisés",
      "Autre",
    ],
    showIf: (answers) => answers.who === "L'homme" || answers.who === "Les deux",
  },
  {
    id: "exams",
    question: "Avez-vous déjà réalisé des examens ou consulté un médecin pour ce retard de grossesse ?",
    options: [
      "Oui, nous avons les examens et un diagnostic",
      "Nous avons réalisé certains examens seulement",
      "Nous avons déjà suivi un traitement",
      "Non, pas encore",
    ],
  },
  {
    id: "goal",
    question: "Quel est votre objectif principal aujourd'hui ?",
    options: [
      "Soutenir les chances de grossesse naturellement",
      "Améliorer l'ovulation et le cycle",
      "Soutenir la santé et la réserve ovarienne",
      "Améliorer le nombre et la mobilité des spermatozoïdes",
      "Soutenir la fertilité du couple",
      "Identifier l'accompagnement le plus adapté à notre situation",
    ],
  },
];

export interface QuizRecommendation {
  title: string;
  description: string;
  href: string;
}

export function getQuizRecommendation(answers: Record<string, string>): QuizRecommendation {
  switch (answers.who) {
    case "La femme":
      return {
        title: "BellaFert",
        description:
          "Notre formule pensée pour soutenir l'ovulation et l'équilibre hormonal féminin.",
        href: "/products/bellafert",
      };
    case "L'homme":
      return {
        title: "FertiMen",
        description:
          "Notre formule pensée pour soutenir la testostérone, l'énergie et la fertilité masculine.",
        href: "/products/fertimen",
      };
    default:
      return {
        title: "Pack Couple",
        description:
          "BellaFert + FertiMen : le duo complet pour accompagner votre fertilité à deux.",
        href: "/products/pack-couple",
      };
  }
}
