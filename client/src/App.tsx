import { useState, useEffect } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  return (
    <TooltipProvider>
      <div className="min-h-screen grid grid-rows-layout">
        <Header 
          isMenuOpen={mobileMenuOpen} 
          toggleMenu={toggleMobileMenu} 
          closeMenu={closeMobileMenu} 
        />
        <main className="flex-grow">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
