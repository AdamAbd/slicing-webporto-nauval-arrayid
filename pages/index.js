import Hero from "../components/Hero";
import ProfileSection from "../components/sections/ProfileSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import SkillsSection from "../components/sections/SkillsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProfileSection />
      <SkillsSection />
      <ProjectsSection />
    </>
  );
}
