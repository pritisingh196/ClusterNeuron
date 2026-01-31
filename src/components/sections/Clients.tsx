import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Handshake } from "lucide-react";

const Clients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Client data with available images
  const clients = [
    { name: "Physics Wallah", image: "/client_images/pw.jpeg" },
    { name: "NEXTGENAI", image: "/client_images/nextgenai.jpeg" },
    { name: "Dataplus Company", image: "/client_images/data-pulse.jpeg" },
    { name: "Consultbae", image: "/client_images/consultbae.jpeg" },
    { name: "byteproc", image: "/client_images/byteproc.jpeg" },
    { name: "experticesolution", image: "/client_images/experticesolution.jpeg" },
    { name: "quickannote", image: "/client_images/quickannote.jpeg" },
    { name: "swoc", image: "/client_images/swoc.jpeg" },
    { name: "truetext", image: "/client_images/truetext.jpeg" },
    { name: "xyntriq", image: "/client_images/xyntriq.jpeg" },
  ];

  // Duplicate for seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section id="clients" className="py-20 bg-gradient-to-b from-background to-muted/30 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-6"
          >
            <Handshake className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Trusted Partners</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent">
              Valued Clients
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            We're proud to partner with innovative companies and visionaries across the globe
          </p>
        </motion.div>

        {/* Infinite Scrolling Logo Carousel */}
        <div className="relative">
          {/* Gradient Overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* First Row - Moving Left */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <motion.div
              className="flex gap-8 md:gap-12"
              animate={{
                x: [0, -50 * clients.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {duplicatedClients.map((client, idx) => (
                <div
                  key={`row1-${idx}`}
                  className="flex-shrink-0 group"
                >
                  <div className="relative w-40 h-24 md:w-48 md:h-28 rounded-2xl bg-card border border-border/50 flex items-center justify-center p-4 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:scale-105">
                    {client.image ? (
                      <img
                        src={client.image}
                        alt={client.name}
                        className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    ) : (
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                          <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            {client.name.charAt(0)}
                          </span>
                        </div>
                        <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors line-clamp-1">
                          {client.name}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Second Row - Moving Right */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.div
              className="flex gap-8 md:gap-12"
              animate={{
                x: [-50 * clients.length, 0],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 35,
                  ease: "linear",
                },
              }}
            >
              {[...duplicatedClients].reverse().map((client, idx) => (
                <div
                  key={`row2-${idx}`}
                  className="flex-shrink-0 group"
                >
                  <div className="relative w-40 h-24 md:w-48 md:h-28 rounded-2xl bg-card border border-border/50 flex items-center justify-center p-4 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:scale-105">
                    {client.image ? (
                      <img
                        src={client.image}
                        alt={client.name}
                        className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    ) : (
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                          <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            {client.name.charAt(0)}
                          </span>
                        </div>
                        <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors line-clamp-1">
                          {client.name}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {[
            { number: "4+", label: "Happy Clients" },
            { number: "50+", label: "Projects Delivered" },
            { number: "5+", label: "Countries" },
            { number: "100%", label: "Satisfaction" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="text-center p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
