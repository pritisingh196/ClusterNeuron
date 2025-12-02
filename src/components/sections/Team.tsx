import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Users, Briefcase, Building2, Linkedin, Github, Mail, ChevronLeft, ChevronRight } from "lucide-react";

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeLeader, setActiveLeader] = useState(0);

  const teamMembers = [
    { name: "Rahul Kumar", role: "Digital Marketing Lead" },
    { name: "Anjali Verma", role: "Software Architect" },
    { name: "Sanjay Mehta", role: "Video Production Head" },
    { name: "Priya Sharma", role: "AI Solutions Specialist" },
  ];

  const leaders = [
    {
      name: "Priti Singh",
      role: "Founder & CEO",
      bio: "Visionary founder with a mission to empower businesses through technology, creativity, and innovation. Leading ClusterNeuron's strategic direction and growth.",
      email: "clusterNeuronai@gmail.com",
      linkedin: "https://www.linkedin.com/company/clusterneuron/",
      image: "/people/priti.png",
    },
    {
      name: "Vikram Patel",
      role: "Technology Director",
      bio: "Leads technical strategy with 15+ years of experience in enterprise solutions, cloud infrastructure, and AI implementation.",
      email: "clusterNeuronai@gmail.com",
      linkedin: "#",
      image: null,
    },
    {
      name: "Neha Gupta",
      role: "Operations Manager",
      bio: "Ensures seamless project delivery and operational excellence, managing cross-functional teams and client relationships.",
      email: "clusterNeuronai@gmail.com",
      linkedin: "#",
      image: null,
    },
    {
      name: "Arjun Singh",
      role: "Business Development Head",
      bio: "Drives business growth through strategic partnerships, market expansion, and client acquisition across multiple industries.",
      email: "clusterNeuronai@gmail.com",
      linkedin: "#",
      image: null,
    },
  ];

  const nextLeader = () => {
    setActiveLeader((prev) => (prev + 1) % leaders.length);
  };

  const prevLeader = () => {
    setActiveLeader((prev) => (prev - 1 + leaders.length) % leaders.length);
  };

  return (
    <section id="team" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left - Intro */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Meet Our ClusterNeuron Team
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Founded by <strong className="text-primary">Priti Singh</strong> in January 2024, ClusterNeuron LLP brings together passionate professionals dedicated to transforming businesses through technology, creativity, and innovation. Our diverse team of experts delivers cutting-edge solutions across multiple domains.
            </p>

            {/* Mini Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold">15+</p>
                <p className="text-sm text-muted-foreground">Team Members</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Briefcase className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold">6+</p>
                <p className="text-sm text-muted-foreground">Service Areas</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Building2 className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold">10+</p>
                <p className="text-sm text-muted-foreground">Industry Sectors</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Team Grid */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                className="group relative aspect-square"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Hexagon Card */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 border border-border">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users className="w-16 h-16 text-primary/30" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-xs text-muted-foreground text-center px-4">
                      [TEAM_MEMBER_IMAGE_{idx + 1}]
                    </p>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center text-white">
                    <h4 className="font-bold mb-1">{member.name}</h4>
                    <p className="text-sm mb-4 opacity-90">{member.role}</p>
                    <div className="flex gap-3">
                      <a href="#" className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a href="#" className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Leadership Carousel */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-3xl font-heading font-bold text-center mb-12">Leadership Team</h3>

          <div className="relative max-w-4xl mx-auto">
            {/* Carousel */}
            <div className="relative bg-card rounded-2xl p-8 md:p-12 border border-border shadow-elegant overflow-hidden">
              <motion.div
                key={activeLeader}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-3 gap-8 items-center"
              >
                {/* Leader Image */}
                <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center border border-border">
                  {leaders[activeLeader].image ? (
                    <img 
                      src={leaders[activeLeader].image} 
                      alt={leaders[activeLeader].name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center p-4">
                      <Users className="w-16 h-16 text-primary/30 mx-auto mb-2" />
                      <p className="text-xs text-muted-foreground">[LEADER_IMAGE_{activeLeader + 1}]</p>
                    </div>
                  )}
                </div>

                {/* Leader Info */}
                <div className="md:col-span-2">
                  <h4 className="text-2xl font-heading font-bold mb-2">{leaders[activeLeader].name}</h4>
                  <p className="text-primary font-semibold mb-4">{leaders[activeLeader].role}</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">{leaders[activeLeader].bio}</p>

                  <div className="flex gap-3">
                    <a
                      href={`mailto:${leaders[activeLeader].email}`}
                      className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
                    >
                      <Mail className="w-5 h-5 text-primary" />
                    </a>
                    <a
                      href={leaders[activeLeader].linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-primary" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Navigation Buttons */}
              <button
                onClick={prevLeader}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-background rounded-full border border-border hover:bg-primary hover:text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextLeader}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-background rounded-full border border-border hover:bg-primary hover:text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {leaders.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveLeader(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === activeLeader ? "w-8 bg-primary" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
