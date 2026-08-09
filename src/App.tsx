import HeroSection from "./components/HeroSection";
import StickyNav from "./components/StickyNav";
import ExpertiseSection from "./components/ExpertiseSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="bg-[#0C0C0C]" style={{ overflowX: "clip" }}>
      <StickyNav />
      <HeroSection />
      <ExpertiseSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <Footer />
    </main>
  );
}
