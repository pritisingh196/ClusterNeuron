import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Users } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 2-4 hours.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      value: "info@clusterneuron.com",
      subtitle: "Response in 2-4 hours",
      link: "mailto:info@clusterneuron.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 9798980968",
      subtitle: "Mon-Sat, 9AM-7PM IST",
      link: "tel:+919798980968",
    },
    {
      icon: Users,
      title: "Join Community",
      value: "nexfellow.com/community/pritisingh",
      subtitle: "Connect & Collaborate",
      link: "https://nexfellow.com/community/pritisingh",
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Contact</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get in touch with us for your digital transformation journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-background/80 backdrop-blur-lg rounded-2xl p-8 border border-border shadow-elegant">
              <h3 className="text-2xl font-heading font-bold mb-2">Let's Start a Conversation</h3>
              <p className="text-muted-foreground mb-6">
                Tell us about your project, challenges, or ideas. We'll get back to you with a tailored approach.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="bg-background resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white"
                  size="lg"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Right - Contact Methods & Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact Methods */}
            {contactMethods.map((method, idx) => (
              <motion.a
                key={idx}
                href={method.link}
                target={method.link.startsWith("http") ? "_blank" : undefined}
                rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block group bg-background rounded-xl p-6 border border-border hover-lift hover:border-primary/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg group-hover:scale-110 transition-transform">
                    <method.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-heading font-bold mb-1 group-hover:text-primary transition-colors">
                      {method.title}
                    </h4>
                    <p className="text-foreground font-medium mb-1">{method.value}</p>
                    <p className="text-sm text-muted-foreground">{method.subtitle}</p>
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Address Card */}
            <motion.div
              className="bg-background rounded-xl p-6 border border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-bold mb-1">Visit Us</h4>
                  <p className="text-muted-foreground">
                    Krishna Nagar East<br />
                    Delhi – 110051, India
                  </p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-sm text-muted-foreground">[GOOGLE_MAPS_EMBED_PLACEHOLDER]</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
