import Hero from "../components/sections/Hero";
import ProfileSection from "../components/sections/ProfileSection";
import SkillsSection from "../components/sections/SkillsSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ContactSection from "../components/sections/ContactSection";
import Footer from "../components/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <ProfileSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
