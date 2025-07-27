import { Card, CardContent } from './ui/card';
import { Progress } from './ui/progress';
import { Code, Database, Brain, Server, Globe, Award } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code className="h-6 w-6" />,
    skills: [
      { name: "Python", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "C++", level: 85 },
      { name: "Java", level: 80 },
      { name: "C", level: 80 },
      { name: "R", level: 75 }
    ]
  },
  {
    title: "Web Technologies",
    icon: <Globe className="h-6 w-6" />,
    skills: [
      { name: "React JS", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "HTML & CSS", level: 90 },
      { name: "RESTful APIs", level: 85 },
      { name: "Frontend Frameworks", level: 88 }
    ]
  },
  {
    title: "Databases & Backend",
    icon: <Database className="h-6 w-6" />,
    skills: [
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "Database Design", level: 75 },
      { name: ".NET Framework", level: 75 },
      { name: "Backend Systems", level: 80 }
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: <Brain className="h-6 w-6" />,
    skills: [
      { name: "Machine Learning", level: 95 },
      { name: "Deep Learning", level: 90 },
      { name: "Algorithms", level: 90 },
      { name: "Natural Language Processing", level: 80 },
      { name: "Generative AI", level: 85 }
    ]
  },
  {
    title: "Tools & Platforms",
    icon: <Server className="h-6 w-6" />,
    skills: [
      { name: "GitHub", level: 90 },
      { name: "Git Version Control", level: 84 },
      { name: "Linux Systems", level: 82 },
      { name: "Development Tools", level: 80 },
      { name: "System Design", level: 75 }
    ]
  }
];

const certifications = [
  {
    title: "Hackathons & Competitions",
    items: [
      "FedEx SMART 2025 - Finalist",
      "Flipkart GRID 6.0 Robotics Challenge - Semifinalist", 
      "SCOPE Champ Expo - Winners"
    ]
  },
  {
    title: "Professional Certifications",
    items: [
      "IITM Data Science BS Degree Foundational Level - Issued by IIT Madras in 2024",
      "Quantum Machine Learning - Issued by KwantumG Research Labs Pvt Ltd., VIT Chennai in 2024",
      "The Complete Agentic AI Engineering Course  - Issued by Udemy in 2025",
      "AI for Medical Diagnosis, - Issued by Coursera in 2025",
      "Python - Issued by IIT Bombay Spoken Tutorial in 2024",
      "C and C++ - Issued by IIT Bombay Spoken Tutorial in 2024"
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
          <p className="text-text-secondary mt-4 text-lg max-w-2xl mx-auto">
            From pioneering quantum-enhanced AI models to deploying advanced deep learning solutions in medical imaging, my expertise spans the full spectrum of modern computer science. I architect intelligent systems, lead research-driven innovation, and deliver production-grade software that shapes the future of technology.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border hover:shadow-glow transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/20 rounded-lg text-primary">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-text-secondary font-medium">
                          {skill.name}
                        </span>
                        <span className="text-primary font-semibold text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications & Achievements */}
        <div>
          <h3 className="text-2xl font-semibold text-text-primary mb-8 text-center flex items-center justify-center gap-3">
            <Award className="h-6 w-6 text-primary" />
            Certifications & Achievements
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-border hover:shadow-glow transition-all duration-500 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-text-primary mb-4">
                    {cert.title}
                  </h4>
                  <div className="space-y-3">
                    {cert.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-text-secondary">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills; 