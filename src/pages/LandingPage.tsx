import { ContactSection } from "../sections/ContactSection";
import { HeroSection } from "../sections/HeroSection";
import { MethodologySection } from "../sections/MethodologySection";
import { ResourcesSection } from "../sections/ResourcesSection";
import { TeamSection } from "../sections/TeamSection";
import { TestimonialsSection } from "../sections/TestimonialsSection";
import { TimelineSection } from "../sections/TimelineSection";

export function LandingPage() {
  return (
    <>
      <HeroSection />
      <MethodologySection />
      <TimelineSection />
      <ResourcesSection />
      <TestimonialsSection />
      <TeamSection />
      <ContactSection />
    </>
  );
}
