import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Card } from './ui/card'
import emailjs from 'emailjs-com'
import { useRef, useState } from 'react'

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "anirudh2005.1805@gmail.com",
      href: "mailto:anirudh2005.1805@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8122769325",
      href: "tel:+918122769325"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, India",
      href: "#"
    }
  ]

  const form = useRef(null)
  const [sending, setSending] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.current) return
    setSending(true)
    emailjs.sendForm(
      'service_csvhx4g',
      'template_ockpx64',
      form.current,
      'v6r4QLgFVwn4wBFTX'
    ).then(
      (result) => {
        alert('Message sent!')
        form.current.reset()
        setSending(false)
      },
      (error) => {
        alert('Failed to send message.')
        setSending(false)
      }
    )
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's connect and explore opportunities in AI, quantum computing, or innovative tech solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass-card p-8 animate-slide-up">
            <h3 className="font-playfair text-3xl font-bold mb-6">Send Message</h3>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <Input 
                    className="glass-card border-muted" 
                    placeholder="Your first name"
                    name="first_name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <Input 
                    className="glass-card border-muted" 
                    placeholder="Your last name"
                    name="last_name"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input 
                  type="email" 
                  className="glass-card border-muted" 
                  placeholder="your.email@example.com"
                  name="email"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input 
                  className="glass-card border-muted" 
                  placeholder="What's this about?"
                  name="subject"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  className="glass-card border-muted min-h-[120px]" 
                  placeholder="Tell me about your project or opportunity..."
                  name="message"
                  required
                />
              </div>
              
              <Button className="w-full glow-effect text-lg py-6" type="submit" disabled={sending}>
                <Send size={20} className="mr-2" />
                {sending ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="font-playfair text-3xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, collaborate on innovative projects, 
                or simply chat about the latest in AI and quantum computing. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="glass-card p-6 tilt-effect">
                  <div className="flex items-center space-x-4">
                    <div className="glass-card p-3 rounded-lg">
                      <item.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-muted-foreground">{item.label}</p>
                      <a 
                        href={item.href}
                        className="text-foreground hover:text-primary transition-colors animated-underline"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Availability Status */}
            <Card className="glass-card p-6">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div>
                  <p className="font-medium">Available for Opportunities</p>
                  <p className="text-sm text-muted-foreground">
                    Open to internships, research collaborations, and freelance projects
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact