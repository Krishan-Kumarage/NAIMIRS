import { CommercializationSection } from "../sections/CommercializationSection";
import { ContactSection } from "../sections/ContactSection";
import { HeroSection } from "../sections/HeroSection";
import { IntroductionSection } from "../sections/IntroductionSection";
import { MethodologySection } from "../sections/MethodologySection";
import { ProblemSection } from "../sections/ProblemSection";
import { ResourcesSection } from "../sections/ResourcesSection";
import { TeamSection } from "../sections/TeamSection";
import { TestimonialsSection } from "../sections/TestimonialsSection";
import { TimelineSection } from "../sections/TimelineSection";

export function LandingPage() {
  return (
    <>
      <HeroSection />
      <IntroductionSection />
      <ProblemSection />
      <MethodologySection />
      <CommercializationSection />
      <TimelineSection />
      <ResourcesSection />
      <TestimonialsSection />
      <TeamSection />
      <ContactSection />
    </>
  );
}
