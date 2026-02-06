import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { VisionSection } from "@/components/VisionSection";
import { RoleSection } from "@/components/RoleSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { RegistrationsSection } from "@/components/RegistrationsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-cosmic-dark text-cosmic-light overflow-x-hidden">
      <div className="cosmic-background">
        <Navigation />
        <HeroSection />
        <VisionSection />
        <RoleSection />
        <TestimonialsSection />
        <RegistrationsSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;