"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUp, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaTelegram,
  FaWhatsapp,
  FaGlobe,
} from "react-icons/fa";

const footerLinks = {
  services: [
    { label: "Cloud Solutions", href: "#services" },
    { label: "AI & Analytics", href: "#services" },
    { label: "Cybersecurity", href: "#services" },
    { label: "Enterprise Systems", href: "#services" },
    { label: "Drone Services", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Industries", href: "#industries" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
  ],
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "clusterneuronai@gmail.com",
    href: "mailto:clusterneuronai@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8745845339",
    href: "tel:+918745845339",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Delhi, India", // Todo: update address
    href: "#",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-white relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {/* Brand Section */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-slate-900 font-bold text-lg">CN</span>
                </div>
                <span className="text-xl font-light">Cluster Neuron</span>
              </div>

              <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                We are committed to fostering a collaborative environment that
                empowers individuals, nurtures curiosity, and drives forward
                real-world innovation through collective growth.
              </p>

              {/* Contact Information */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                      <info.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">{info.label}</div>
                      <div className="text-sm text-slate-300">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(
              ([category, links], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </h3>
                  <ul className="space-y-3">
                    {links.map((link, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: categoryIndex * 0.1 + index * 0.05,
                          duration: 0.6,
                        }}
                        viewport={{ once: true }}
                      >
                        <a
                          href={link.href}
                          className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                        >
                          <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          {link.label}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )
            )}
          </div>

          {/* Newsletter Section */}
          <motion.div
            className="mt-16 pt-8 border-t border-slate-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="max-w-md mx-auto text-center lg:text-left lg:max-w-none">
              <h3 className="text-lg font-semibold mb-4">
                Stay Updated with Latest Trends
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                Get insights on digital transformation, AI trends, and
                enterprise technology delivered to your inbox.
              </p>

              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-slate-700 transition-colors"
                  aria-label="Email address"
                />
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <motion.div
                className="text-slate-400 text-sm text-center lg:text-left"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
              >
                © {new Date().getFullYear()} Cluster Neuron. All rights
                reserved.
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row items-center gap-4 text-slate-400 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span>Enterprise IT Solutions & Consulting</span>
                <div className="hidden sm:block w-px h-4 bg-slate-700" />
                <span>Built with expertise in San Francisco</span>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex items-center gap-4 flex-wrap"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <a
                  href="https://www.linkedin.com/company/clusterneuron/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/clusterneuron?igsh=MXoyM3pqeGlpMmli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.youtube.com/@clusterneuron"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                  aria-label="YouTube"
                >
                  <FaYoutube className="w-5 h-5" />
                </a>
                <a
                  href="https://t.me/+E_6z0c9azpI4ZWU1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                  aria-label="Telegram"
                >
                  <FaTelegram className="w-5 h-5" />
                </a>
                <a
                  href="https://whatsapp.com/channel/0029VbAfDvkFMqre8rdono1t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                  aria-label="WhatsApp Channel"
                >
                  <FaWhatsapp className="w-5 h-5" />
                </a>
                <a
                  href="nexfellow.com/community/pritisingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                  aria-label="Nexfellow"
                >
                  <FaGlobe className="w-5 h-5" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Button
          size="icon"
          className="bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 h-12 w-12"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </motion.div>
    </footer>
  );
}
