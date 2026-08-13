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
        Thanks for subscribing! Check your inbox soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm gap-2">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="Your email address"
        className="w-full flex-1 rounded-full border border-ink/20 bg-transparent px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 focus-visible:outline-2 focus-visible:outline-lime"
      />
      <Button type="submit" variant="accent" size="sm">
        Subscribe
      </Button>
    </form>
  );
}
