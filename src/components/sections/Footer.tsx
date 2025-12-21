import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Logo from "../Logo";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  const services = [
    "Digital Marketing",
    "Software Development",
    "Website Development",
    "Video Editing",
    "AI Solutions",
    "BPO Services",
  ];

  const usefulLinks = [
    { label: "Home", href: "#hero" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ];

  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Block */}
          <div>
            <div className="mb-4">
              <div className="flex items-center gap-1">
                <span className="text-2xl font-bold text-background">CLUSTER</span>
                <span className="text-2xl font-bold text-primary-glow">NEURON</span>
              </div>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Empowering Digital Transformation through technology, creativity, and innovation.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-glow flex-shrink-0 mt-0.5" />
                <p className="text-background/80">
                  New Ashok Nagar<br />
                  New Delhi – 110096, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-glow flex-shrink-0" />
                <a href="tel:+918745845339" className="text-background/80 hover:text-primary-glow transition-colors">
                  +91 8745845339
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-glow flex-shrink-0" />
                <a href="mailto:clusterNeuronai@gmail.com" className="text-background/80 hover:text-primary-glow transition-colors">
                  clusterNeuronai@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-6">Useful Links</h3>
            <ul className="space-y-3">
              {usefulLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-primary-glow transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, idx) => (
                <li key={idx}>
                  <a
                    href="#services"
                    className="text-background/80 hover:text-primary-glow transition-colors inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-6">Newsletter</h3>
            <p className="text-background/80 mb-4 text-sm">
              Subscribe to get the latest updates and news from ClusterNeuron.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <div className="flex justify-center gap-4">
            <a
              href="https://www.linkedin.com/company/clusterneuron/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-background/10 rounded-full hover:bg-primary-glow transition-colors"
            >
              <Linkedin className="w-5 h-5 text-background" />
            </a>
            <a
              href="#"
              className="p-3 bg-background/10 rounded-full hover:bg-primary-glow transition-colors"
            >
              <Twitter className="w-5 h-5 text-background" />
            </a>
            <a
              href="#"
              className="p-3 bg-background/10 rounded-full hover:bg-primary-glow transition-colors"
            >
              <Facebook className="w-5 h-5 text-background" />
            </a>
            <a
              href="#"
              className="p-3 bg-background/10 rounded-full hover:bg-primary-glow transition-colors"
            >
              <Instagram className="w-5 h-5 text-background" />
            </a>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
          <p>© ClusterNeuron LLP. All Rights Reserved</p>
          <p className="mt-2">Founded January 2024 by Priti Singh</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
