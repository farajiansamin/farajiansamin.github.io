import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col">
     
        <Navbar className=" w-full"/>
        <div className="container mx-auto mt-24 px-12 py-4">
          <HeroSection />
          <ProjectsSection />
          <EmailSection />
        </div>
        <Footer />
      
    </main>
  );
}
