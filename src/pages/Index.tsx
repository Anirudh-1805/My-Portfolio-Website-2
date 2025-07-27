import Background3D from '@/components/Background3D'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Background3D />
      <Navigation />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-muted/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Anirudhan Ramkumar. Built with React, Three.js & lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
