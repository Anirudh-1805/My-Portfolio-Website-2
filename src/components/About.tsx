import { GraduationCap, Briefcase, Award, Zap } from 'lucide-react'
import { Card } from './ui/card'

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Computer Science Student",
      description: "Passionate about data science, predictive modeling, and intelligent systems"
    },
    {
      icon: Briefcase,
      title: "Research Experience",
      description: "Currently working on quantum-enhanced ML models for time series analysis at VIT Chennai"
    },
    {
      icon: Award,
      title: "Hackathon Champion",
      description: "Distinguished performer in FedEx SMART Hackathons and Flipkart GRID challenges"
    },
    {
      icon: Zap,
      title: "Innovation Focus",
      description: "Building impactful solutions at the intersection of AI, automation, and optimization"
    }
  ]

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A Computer Science undergraduate with hands-on experience in machine learning, 
            full-stack development, and quantum computing. I thrive on solving real-world 
            problems through data and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {highlights.map((item, index) => (
            <Card 
              key={index} 
              className="glass-card p-8 tilt-effect animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="glass-card p-3 rounded-lg">
                  <item.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About