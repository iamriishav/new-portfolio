import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import BentoSection from "@/components/bento-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased">
      <Navigation />
      <main>
        <HeroSection />
        <BentoSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
