import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Leaf,
  DollarSign,
  Heart,
  GraduationCap,
  ShoppingCart,
  Car,
  Building,
  Zap,
  Gamepad2,
  Plane,
} from "lucide-react";

const Industries = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const industries = [
    {
      icon: Leaf,
      title: "AgriTech",
      description: "Digital solutions for agriculture: data-driven marketing, tailored software, and automation for smart farming.",
    },
    {
      icon: DollarSign,
      title: "Financial Services",
      description: "Secure fintech solutions with compliance, automation, and customer experience optimization.",
    },
    {
      icon: Heart,
      title: "Healthcare & MedTech",
      description: "HIPAA-compliant platforms, telemedicine solutions, and patient management systems.",
    },
    {
      icon: GraduationCap,
      title: "Education & EdTech",
      description: "E-learning platforms, LMS solutions, and interactive educational content management.",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce & Retail",
      description: "Full-stack e-commerce solutions with inventory, payments, and customer analytics.",
    },
    {
      icon: Car,
      title: "Automotive & Transportation",
      description: "Fleet management, tracking systems, and digital transformation for mobility.",
    },
    {
      icon: Building,
      title: "Real Estate & PropTech",
      description: "Property management platforms, listing portals, and virtual tour solutions.",
    },
    {
      icon: Zap,
      title: "Energy & Utilities",
      description: "Smart grid solutions, energy management, and sustainability tracking systems.",
    },
    {
      icon: Gamepad2,
      title: "Gaming & Entertainment",
      description: "Game development, streaming platforms, and entertainment content management.",
    },
    {
      icon: Plane,
      title: "Travel & Tourism",
      description: "Booking platforms, itinerary management, and customer experience solutions.",
    },
  ];

  return (
    <section id="industries" ref={ref} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Industries We Serve</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Delivering specialized solutions across diverse sectors with deep industry expertise
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              className="group bg-background rounded-xl p-6 border border-border hover-lift hover:border-primary/50 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
            >
              <motion.div
                className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 5 }}
              >
                <industry.icon className="w-7 h-7 text-primary" />
              </motion.div>

              <h3 className="text-lg font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                {industry.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {industry.description}
              </p>

              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
