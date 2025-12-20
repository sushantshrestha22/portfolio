import {
  Mail,
  MapPinHouse,
  Phone,
  Send,
  Github,
  Linkedin,
  MessageSquare,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Particles from "@/components/Particles";

const Contact = () => {
  const contactInfo = [
    {
      title: "Phone",
      icon: Phone,
      description: "+977 9840967031",
      link: "tel:+9779840967031",
      color: "text-green-500",
    },
    {
      title: "Email",
      icon: Mail,
      description: "newasushant.ns16@gmail.com",
      link: "mailto:newasushant.ns16@gmail.com",
      color: "text-blue-500",
    },
    {
      title: "Location",
      icon: MapPinHouse,
      description: "Butwal-11, Rupandehi, Nepal",
      link: "https://maps.google.com/?q=Butwal,Nepal",
      color: "text-red-500",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/sushantshrestha22",
      color: "hover:text-purple-500",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/sushant-shrestha-880911279/",
      color: "hover:text-blue-500",
    },
  ];

  return (
    <section id="contact" className="min-h-screen py-10 lg:py-20 relative">
      <div className="absolute inset-0 ">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={500}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <Badge variant="outline" className="mb-4 px-4 py-1.5">
            <MessageSquare className="w-3 h-3 mr-1.5" />
            Get In Touch
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to discuss opportunities? I'd love to
            hear from you. Let's create something amazing together.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-card ">
              <CardHeader>
                <h3 className="text-xl sm:text-2xl font-semibold">
                  Contact Information
                </h3>
                <p className="text-sm text-muted-foreground">
                  Feel free to reach out through any of these channels
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                  >
                    <div
                      className={`p-3 bg-primary/10 rounded-lg ${info.color} group-hover:scale-110 transition-transform`}
                    >
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-foreground mb-1">
                        {info.title}
                      </h4>
                      <p className="text-sm text-muted-foreground break-words">
                        {info.description}
                      </p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-card border-secondary/50">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-lg bg-card border border-border ${social.color} hover:border-primary/50 transition-all group`}
                    >
                      <social.icon className="h-4 w-4" />
                      <span className="text-sm font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action Card */}
          <Card className="bg-card border-border h-fit">
            <CardContent className="p-8 space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold">Ready to Start?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm currently available for freelance projects and full-time
                  opportunities. Let's discuss how I can help bring your ideas
                  to life.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Available for Work
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Currently accepting new projects starting immediately.
                  </p>
                </div>

                <div className="space-y-3">
                  <Button
                    variant="secondary"
                    className="w-full py-6 text-base font-medium"
                    size="lg"
                    onClick={() =>
                      (window.location.href =
                        "mailto:newasushant.ns16@gmail.com")
                    }
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Me an Email
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full py-6 text-base font-medium hover:text-blue-500"
                    size="lg"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/sushant-shrestha-880911279/",
                        "_blank"
                      )
                    }
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect on LinkedIn
                  </Button>
                </div>
              </div>

              <div className="pt-4 border-t border-secondary/50">
                <p className="text-xs text-muted-foreground text-center">
                  I typically respond within 24 hours
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2025 Sushant Shrestha. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
