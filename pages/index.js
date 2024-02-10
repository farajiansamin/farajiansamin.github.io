import HeroSection from "../src/app/components/HeroSection";
import Navbar from "../src/app/components/Navbar";
import AboutSection from "../src/app/components/AboutSection";
import ProjectsSection from "../src/app/components/ProjectsSection";
import EmailSection from "../src/app/components/EmailSection";
import Footer from "../src/app/components/Footer";
import AchievementsSection from "../src/app/components/AchievementsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
