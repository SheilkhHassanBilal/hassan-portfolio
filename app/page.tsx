// app/page.tsx
import Navbar from '@/components/Navbar';
import Banner from '@/app/_components/Banner';
import AboutMe from '@/app/_components/AboutMe';
import Skills from '@/app/_components/Skills';
import Project from '@/app/_components/Project';
import Experiences from '@/app/_components/Experiences';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0c] overflow-hidden">
      {/* Background ambient glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] pointer-events-none" />
      
      <Navbar />
      <Banner />
      <AboutMe />
      <Skills />
      <Project />
      <Experiences />
      <Footer />
    </main>
  );
}