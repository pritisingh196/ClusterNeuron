import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Code, Globe, Video, Cpu, Briefcase } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Search,
      title: "Digital Marketing",
      description: "Complete digital marketing solutions including SEO, SMM, PPC, Content Marketing, Email Marketing, and Online Reputation Management.",
      badge: "Most Popular",
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Custom applications, mobile apps, enterprise solutions, API integration, cloud development, and DevOps implementation.",
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "Static & dynamic websites, e-commerce solutions, CMS development, responsive design, and web applications.",
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Corporate videos, social media content, motion graphics, product demos, training videos, and VFX services.",
    },
    {
      icon: Cpu,
      title: "AI Solutions",
      description: "Data annotation, AI dataset services, 3D model collection, image tagging, video annotation, and transcription services.",
    },
    {
      icon: Briefcase,
      title: "BPO Services",
      description: "Business process outsourcing, data entry, academic writing, resume writing, and comprehensive support services.",
    },
  ];

  return (
    <section id="services" ref={ref} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital and technical solutions across multiple domains to empower your business
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="group relative bg-background rounded-2xl p-8 border border-border hover-lift hover:border-primary/50 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              {service.badge && (
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground animate-pulse">
                  {service.badge}
                </Badge>
              )}

              <motion.div
                className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <service.icon className="w-8 h-8 text-primary" />
              </motion.div>

              <h3 className="text-2xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* CTA Block */}
        <motion.div
          className="text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Transform Your Digital Presence?
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Let's discuss your project and create something amazing together
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get Started Today
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
