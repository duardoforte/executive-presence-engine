import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ValueSection from "@/components/ValueSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ExperienceSection from "@/components/ExperienceSection";
import ResultsSection from "@/components/ResultsSection";
import CompaniesSection from "@/components/CompaniesSection";
import InternationalSection from "@/components/InternationalSection";
import EventsSection from "@/components/EventsSection";
import EducationSection from "@/components/EducationSection";
import LanguagesSection from "@/components/LanguagesSection";
import OpportunitiesSection from "@/components/OpportunitiesSection";
import CVDownloadSection from "@/components/CVDownloadSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <ValueSection />
      <ExpertiseSection />
      <ExperienceSection />
      <ResultsSection />
      <CompaniesSection />
      <InternationalSection />
      <EventsSection />
      <EducationSection />
      <LanguagesSection />
      <OpportunitiesSection />
      <CVDownloadSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
