import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Calendar } from "lucide-react";
import { Button } from "../ui/button";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    "End-to-End Digital Solutions covering every stage of development",
    "Custom Solutions tailored to client and industry needs",
    "Multi-Industry Expertise with Strong Technical Foundation",
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-primary font-semibold mb-2 flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <Calendar className="w-5 h-5" />
              Founded January 2024
            </motion.p>

            <motion.h2
              className="text-4xl md:text-5xl font-heading font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              Built on Technology, Creativity, and Innovation
            </motion.h2>

            <motion.p
              className="text-lg text-muted-foreground mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              ClusterNeuron LLP was founded by <strong className="text-primary">Priti Singh</strong> with a clear vision: "To empower businesses in the digital era through technology, creativity, and innovation." We deliver comprehensive digital and technical solutions across multiple domains, serving industries from AgriTech to Financial Services.
            </motion.p>

            <motion.div
              className="space-y-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground">{feature}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                Discover More
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - Images */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main Image */}
              <motion.div
                className="rounded-2xl overflow-hidden shadow-elegant"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="/ABOUT_MAIN_IMAGE_PLACEHOLDER.png" 
                  alt="ClusterNeuron Team Working"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </motion.div>

              {/* Secondary Floating Image */}
              <motion.div
                className="absolute -bottom-10 -left-10 w-48 h-48 rounded-xl overflow-hidden shadow-glow animate-float"
                style={{ animationDelay: "1s" }}
              >
                <img 
                  src="/ABOUT_SECONDARY_IMAGE.png" 
                  alt="Team Collaboration"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Stats Card */}
              <motion.div
                className="absolute -top-6 -right-6 bg-background border border-border rounded-xl shadow-elegant p-6 animate-float"
                style={{ animationDelay: "0.5s",marginRight:"8px" }}
              >
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-3xl font-bold text-primary">2024</p>
                    <p className="text-xs text-muted-foreground">Founded Year</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary">10+</p>
                    <p className="text-xs text-muted-foreground">Industry Sectors</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
