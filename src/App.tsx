import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import StickyNav from "./components/StickyNav";
import ExpertiseSection from "./components/ExpertiseSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import WorkHeader from "./components/WorkHeader";
import WorkPage from "./components/WorkPage";
import ContactHeader from "./components/ContactHeader";
import ContactPage from "./components/ContactPage";

function isWorkPath(pathname: string) {
  return pathname === "/work" || pathname === "/work/";
}

function isContactPath(pathname: string) {
  return pathname === "/contact" || pathname === "/contact/";
}

export default function App() {
  const [pathname, setPathname] = useState(() => window.location.pathname);
  const workPage = isWorkPath(pathname);
  const contactPage = isContactPath(pathname);

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  // Cross-page links such as /#about land on the home page with a hash.
  // Scroll once React has rendered the target section.
  useEffect(() => {
    if (workPage || contactPage || !window.location.hash) return;
    const id = window.location.hash.slice(1);
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView();
    }, 100);
    return () => window.clearTimeout(timer);
  }, [workPage, contactPage]);

  if (workPage) {
    return (
      <main className="bg-[#14161B]" style={{ overflowX: "clip" }}>
        <WorkHeader />
        <WorkPage />
        <Footer />
      </main>
    );
  }

  if (contactPage) {
    return (
      <main className="bg-[#14161B]" style={{ overflowX: "clip" }}>
        <ContactHeader />
        <ContactPage />
        <Footer hideCta />
      </main>
    );
  }

  return (
    <main className="bg-[#14161B]" style={{ overflowX: "clip" }}>
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
