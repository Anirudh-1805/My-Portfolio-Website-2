import { ExternalLink, Github, Calendar } from 'lucide-react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

const Projects = () => {
  const projects = [
    {
      title: "Hybrid Quantum LSTM for Weather Forecasting",
      description: "Developed a hybrid Quantum LSTM model combining classical LSTMs with quantum neural networks to forecast temperature trends, achieving 92% forecasting accuracy.",
      technologies: ["Python", "PennyLane", "TensorFlow", "Quantum ML"],
      date: "October 2024",
      features: [
        "Optuna-based hyperparameter tuning",
        "PyTorch and quantum feature maps integration",
        "High-precision temperature predictions"
      ],
      type: "Research Project"
    },
    {
      title: "Freshness & OCR Detection System",
      description: "Engineered a real-time brand recognition system for bulk shipment detection with sub-1000ms response time and 95%+ accuracy.",
      technologies: ["Computer Vision", "OCR", "React", "Flask"],
      date: "December 2024",
      features: [
        "Regex-based expiry date extraction with 98% precision",
        "Multi-factor freshness evaluation model",
        "Mobile and external camera device integration"
      ],
      type: "Hackathon Project"
    },
    {
      title: "Intelligent Logistics Optimization System",
      description: "Developed an intelligent system for road and air operations that reduced costs by 85-90% while improving resource utilization by 35%.",
      technologies: ["Python", "Optimization", "APIs", "Data Analytics"],
      date: "March 2025",
      features: [
        "Open-source APIs for real-time routing",
        "Automated warehouse management",
        "Enhanced sales forecasting accuracy by 31%"
      ],
      type: "Industry Solution"
    },
    {
      title: "3D-U-Net for Brain Tumor Segmentation",
      description: "Tackled a 3D image-segmentation challenge using multi-modal MRI data and a custom 3D U-Net architecture for brain tumor segmentation.",
      technologies: ["Python", "Keras", "Deep Learning", "Medical Imaging", "NiBabel"],
      date: "April 2025",
      features: [
        "Multi-modal MRI data loading and visualization",
        "Patch sampling for tumor-enriched sub-volumes",
        "Per-slice normalization for stable training",
        "Custom 3D U-Net with skip connections and dropout"
      ],
      type: "AI for Medical Diagnosis",
      github: "https://github.com/Anirudh-1805/3D-U-Net-for-Brain-Tumor-Segmentation"
    }
  ]

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative solutions spanning quantum computing, AI, and automation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="glass-card p-8 h-full flex flex-col tilt-effect animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <Badge variant="secondary" className="glass-card">
                  {project.type}
                </Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar size={16} className="mr-1" />
                  {project.date}
                </div>
              </div>

              <h3 className="font-playfair text-2xl font-bold mb-4 animated-underline">
                {project.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-primary">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="glass-card px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4 mt-auto">
                <Button size="sm" className="flex-1 glow-effect" asChild>
                  <a href={project.github || '#'} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} className="mr-2" />
                    View Details
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="glass-card" asChild>
                  <a href={project.github || '#'} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects