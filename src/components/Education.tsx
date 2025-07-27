import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const educationData = [
  {
    institution: "Vellore Institute of Technology, Chennai",
    degree: "B.Tech Computer Science and Engineering",
    cgpa: "9.03/10",
    duration: "2023 - 2027",
    status: "Current",
    color: "bg-primary/20 text-primary"
  },
  {
    institution: "Indian Institute of Technology Madras",
    degree: "Foundations of Data Science and Applications",
    cgpa: "3.2/4",
    duration: "2023 - 202",
    status: "Completed",
    color: "bg-accent/20 text-accent"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
            Education
          </h2>
          <div className="w-24 h-1 mx-auto mb-4 bg-gradient-to-r from-primary via-accent to-primary rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Strong academic foundation in Computer Science and Data Science from premier institutions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <Card
              key={index}
              className="glass-card p-8 tilt-effect animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="glass-card p-3 rounded-lg">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={edu.color}>{edu.status}</Badge>
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">
                      {edu.institution}
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      {edu.degree}
                    </p>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award size={16} />
                        <span className="font-semibold text-primary">CGPA: {edu.cgpa}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 