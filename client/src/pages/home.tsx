import { useEffect } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { CVEsSection } from "@/components/sections/cves";
import { CertificationsSection } from "@/components/sections/certifications";
import { GallerySection } from "@/components/sections/gallery";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  useEffect(() => {
    document.title = "MD. TAREQ AHAMED JONY | Security Researcher & Bug Bounty Hunter";
    // Load FontAwesome script
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js";
    script.crossOrigin = "anonymous";
    script.referrerPolicy = "no-referrer";
    document.body.appendChild(script);
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-gray-200 font-sans">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <CertificationsSection />
      <ProjectsSection />
      <CVEsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
}
