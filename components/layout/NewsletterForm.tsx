"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="text-sm font-medium text-lime-dark">
        Merci pour votre inscription ! Surveillez votre boîte mail.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm gap-2">
      <label htmlFor="newsletter-email" className="sr-only">
        Adresse email
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="Votre adresse email"
        className="w-full flex-1 rounded-full border border-ink/10 bg-white px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 focus-visible:outline-2 focus-visible:outline-pink"
      />
      <Button type="submit" variant="primary" size="sm" className="bg-pink text-white hover:bg-pink-dark">
        S&apos;inscrire
      </Button>
    </form>
  );
}
