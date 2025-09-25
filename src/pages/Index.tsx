import HeroSection from "@/components/map/HeroSection";
import ProblemsSection from "@/components/map/ProblemsSection";
import MethodologySection from "@/components/map/MethodologySection";
import TransformationSection from "@/components/map/TransformationSection";
import AboutRicardoSection from "@/components/map/AboutRicardoSection";
import EventDetailsSection from "@/components/map/EventDetailsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemsSection />
      <MethodologySection />
      <TransformationSection />
      <AboutRicardoSection />
      <EventDetailsSection />
    </div>
  );
};

export default Index;
