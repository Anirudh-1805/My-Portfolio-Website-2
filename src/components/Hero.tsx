import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from './ui/button'
import heroAvatar from '@/assets/hero-avatar.jpg'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="animate-slide-up">
          {/* Avatar */}
          <div className="relative mb-8 inline-block">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden glass-card glow-effect animate-float">
              <img 
                src={heroAvatar} 
                alt="Anirudhan Ramkumar" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-glow opacity-20 animate-pulse-glow"></div>
          </div>

          {/* Title */}
          <h1 className="font-playfair text-6xl md:text-8xl font-bold mb-6">
            <span className="text-gradient">Anirudhan</span>
            <br />
            <span className="text-foreground">Ramkumar</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
            Computer Science Student & AI Researcher
          </p>
          
          {/* Tagline */}
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about <span className="text-primary">Quantum Machine Learning</span>, 
            <span className="text-primary"> AI Innovation</span>, and building the future through code.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="glow-effect text-lg px-8 py-6">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="glass-card text-lg px-8 py-6">
              <a href="/Anirudh_Resume.pdf">
              Download Resume</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a 
              href="https://www.linkedin.com/in/anirudhan-r-930b8028a/"
              className="glass-card p-4 rounded-full tilt-effect hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/Anirudh-1805"
              className="glass-card p-4 rounded-full tilt-effect hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
            <a 
              href="mailto:anirudh2005.1805@gmail.com"
              className="glass-card p-4 rounded-full tilt-effect hover:text-primary transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-primary" size={32} />
        </div>
      </div>

      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </section>
  )
}

export default Hero