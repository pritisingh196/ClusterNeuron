import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "../ui/button";
import ParticleBackground from "../ParticleBackground";
import { TrendingUp, Users } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-24 md:pt-28 lg:pt-32">
      <ParticleBackground />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <TypeAnimation
                sequence={[
                  "Empower Your Business in the Digital Era",
                  3000,
                  "Transform Your Digital Presence",
                  3000,
                  "Innovation Meets Technology",
                  3000,
                  "Future-Ready Digital Solutions",
                  3000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={false}
                className="gradient-typing-text"
              />
              <span className="typing-cursor">|</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              ClusterNeuron LLP delivers end-to-end digital solutions that drive growth, efficiency, and measurable impact. Built on technology, creativity, and innovation, we provide future-ready, client-focused solutions across multiple industries.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-8 shadow-glow"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary font-semibold"
                onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              >
                Our Work
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="w-6 h-6 text-primary-glow mr-2" />
                  <span className="text-3xl font-bold">15+</span>
                </div>
                <p className="text-sm text-gray-400">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="w-6 h-6 text-primary-glow mr-2" />
                  <span className="text-3xl font-bold">95%</span>
                </div>
                <p className="text-sm text-gray-400">Client Satisfaction</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-primary-glow mr-2" />
                  <span className="text-3xl font-bold">15</span>
                </div>
                <p className="text-sm text-gray-400">Team Members</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden animate-float shadow-glow">
              {/* Hero Image */}
              <img 
                src="/hero-section-image.png" 
                alt="ClusterNeuron Digital Solutions"
                className="w-full h-auto object-cover"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
