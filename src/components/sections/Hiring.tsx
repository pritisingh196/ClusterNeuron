import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Rocket, Users, Briefcase, ArrowRight, Star } from "lucide-react";
import { Button } from "../ui/button";

const Hiring = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const openPositions = [
    { title: "Full Stack Developer", type: "Full-time", location: "Remote", hot: true },
    { title: "UI/UX Designer", type: "Full-time", location: "Hybrid", hot: true },
    { title: "Digital Marketing Specialist", type: "Full-time", location: "Remote", hot: false },
    { title: "AI/ML Engineer", type: "Full-time", location: "Remote", hot: true },
  ];

  const perks = [
    { icon: <Rocket className="w-5 h-5" />, text: "Career Growth" },
    { icon: <Users className="w-5 h-5" />, text: "Great Team" },
    { icon: <Briefcase className="w-5 h-5" />, text: "Exciting Projects" },
    { icon: <Star className="w-5 h-5" />, text: "Competitive Pay" },
  ];

  return (
    <section id="hiring" ref={ref} className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
              initial={{ scale: 0.9 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-semibold text-primary">We're Hiring!</span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-heading font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              Join Our{" "}
              <span className="bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent">
                Amazing Team
              </span>
            </motion.h2>

            <motion.p
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              Be part of ClusterNeuron's mission to transform businesses through technology, 
              creativity, and innovation. We're looking for talented individuals who are passionate 
              about making a difference.
            </motion.p>

            {/* Perks */}
            <motion.div
              className="flex flex-wrap gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              {perks.map((perk, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border"
                  whileHover={{ scale: 1.05, borderColor: "hsl(336, 63%, 50%)" }}
                >
                  <span className="text-primary">{perk.icon}</span>
                  <span className="text-sm font-medium">{perk.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary text-white px-8 shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 group"
                onClick={() => window.location.href = "/career"}
              >
                View All Positions
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - Open Positions */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-primary" />
              Open Positions
            </h3>

            {openPositions.map((position, idx) => (
              <motion.a
                key={idx}
                href="/career"
                className="block group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + idx * 0.1 }}
              >
                <div className="relative p-5 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group-hover:-translate-y-1">
                  {/* Hot Badge */}
                  {position.hot && (
                    <div className="absolute -top-2 -right-2">
                      <span className="px-2 py-1 text-[10px] font-bold bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full animate-pulse">
                        HOT 🔥
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-lg group-hover:text-primary transition-colors">
                        {position.title}
                      </h4>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                          {position.type}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          📍 {position.location}
                        </span>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}

            <motion.p
              className="text-center text-sm text-muted-foreground pt-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              Don't see your role?{" "}
              <a href="/career" className="text-primary hover:underline font-medium">
                Apply anyway →
              </a>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hiring;
