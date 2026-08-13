import { Hero } from "@/components/home/Hero";
import { TrustpilotStrip } from "@/components/home/TrustpilotStrip";
import { VosMoments } from "@/components/home/VosMoments";
import { BestSellers } from "@/components/home/BestSellers";
import { Subscription } from "@/components/home/Subscription";
import { Values } from "@/components/home/Values";
import { BrandStoryFaq } from "@/components/home/BrandStoryFaq";
import { Reviews } from "@/components/home/Reviews";
import { QuizCta } from "@/components/home/QuizCta";
import { BlogGrid } from "@/components/home/BlogGrid";
import { TrustBadges } from "@/components/home/TrustBadges";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustpilotStrip />
      <VosMoments />
      <BestSellers />
      <Subscription />
      <Values />
      <BrandStoryFaq />
      <Reviews />
      <QuizCta />
      <BlogGrid />
      <TrustBadges />
    </>
  );
}
