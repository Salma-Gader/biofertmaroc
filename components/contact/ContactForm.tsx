"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-ink/10 bg-cream p-6 text-sm">
        <p className="font-medium text-ink">Merci, votre message a bien été envoyé !</p>
        <p className="mt-1 text-ink/60">Notre équipe vous répondra sous 24 à 48h.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-name" className="text-sm font-medium text-ink">
            Nom
          </label>
          <input
            id="contact-name"
            type="text"
            required
            placeholder="Votre nom"
            className="rounded-xl border border-ink/20 bg-transparent px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 focus-visible:outline-2 focus-visible:outline-lime"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-email" className="text-sm font-medium text-ink">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            required
            placeholder="vous@exemple.com"
            className="rounded-xl border border-ink/20 bg-transparent px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 focus-visible:outline-2 focus-visible:outline-lime"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-message" className="text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          placeholder="Comment pouvons-nous vous aider ?"
          className="resize-none rounded-xl border border-ink/20 bg-transparent px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 focus-visible:outline-2 focus-visible:outline-lime"
        />
      </div>
      <Button type="submit" variant="primary" size="md" className="self-start">
        Envoyer le message
      </Button>
    </form>
  );
}
