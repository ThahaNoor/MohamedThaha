import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CareerJourney from "@/components/CareerJourney";
import ImpactMetrics from "@/components/ImpactMetrics";
import LeadershipCapabilities from "@/components/LeadershipCapabilities";
import Experience from "@/components/Experience";
import AITransformation from "@/components/AITransformation";
import TechnologyLandscape from "@/components/TechnologyLandscape";
import ResumeCTA from "@/components/ResumeCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <CareerJourney />
        <ImpactMetrics />
        <LeadershipCapabilities />
        <AITransformation />
        <Experience />
        <TechnologyLandscape />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
