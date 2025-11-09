"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const trustIndicators = [
  { value: "15+", label: "Years Experience" },
  { value: "200+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
];

const quickActions = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91-8745845339",
    href: "tel:+918745845339",
    description: "Mon-Fri 9AM-6PM IST",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "clusterneuronai@gmail.com",
    href: "mailto:clusterneuronai@gmail.com",
    description: "We respond within 24 hours",
  },
  {
    icon: Calendar,
    label: "Book Meeting",
    value: "Schedule Call",
    href: "#contact",
    description: "30-minute consultation",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-slate-50 to-white">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgb(226_232_240)_1px,transparent_1px)]
                          [background-size:40px_40px] opacity-40"
      />

      {/* Main content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-16 md:pt-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            {/* Status badge */}
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full text-sm font-medium text-slate-700 mb-8 shadow-sm"
              variants={fadeInUp}
            >
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span>Available for Enterprise Projects</span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 mb-6 leading-tight tracking-tight mt-16 md:mt-24"
              variants={fadeInUp}
            >
              <span className="block font-semibold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                Enterprise Solutions
              </span>
              <span className="block text-slate-600 mt-2">
                That Drive Growth
              </span>
            </motion.h1>

            {/* Value proposition */}
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed px-6"
              variants={fadeInUp}
            >
              At ClusterNeuron, our mission is to build a dynamic and inclusive community where enthusiasts, students, and professionals can come together to learn, share knowledge, and innovate in the fields of Artificial Intelligence and Machine Learning.

            </motion.p>

            {/* Primary CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 px-4"
              variants={fadeInUp}
            >
              <Button
                size="lg"
                className="bg-slate-900 hover:bg-slate-800 text-white text-base sm:text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                asChild
              >
                <a href="#contact" className="flex items-center gap-3">
                  Schedule Consultation
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 text-base sm:text-lg px-8 py-4 rounded-xl transition-all duration-300 group"
                asChild
              >
                <a href="#services" className="flex items-center gap-3">
                  Explore Services
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="max-w-3xl mx-auto mb-16 px-4 sm:px-6"
              variants={fadeInUp}
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {trustIndicators.map((indicator, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-100"
                  >
                    <div className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
                      {indicator.value}
                    </div>
                    <div className="text-sm sm:text-base text-slate-600 leading-tight">
                      {indicator.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Quick contact bar - only visible on larger screens */}
      <motion.div
        className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl shadow-lg p-6">
          <div className="flex items-center gap-8">
            {quickActions.map((action, index) => (
              <a
                key={index}
                href={action.href}
                className="flex items-center gap-3 group hover:bg-slate-50 -mx-2 px-4 py-2 rounded-lg transition-all duration-200"
              >
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-slate-900 transition-colors duration-200">
                  <action.icon className="h-5 w-5 text-slate-600 group-hover:text-white transition-colors duration-200" />
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-900 group-hover:text-slate-700">
                    {action.label}
                  </div>
                  <div className="text-xs text-slate-500">
                    {action.description}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Mobile quick actions - visible only on mobile */}
      <motion.div
        className="lg:hidden absolute bottom-8 left-4 right-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl shadow-lg p-4">
          <div className="grid grid-cols-3 gap-2">
            {quickActions.map((action, index) => (
              <a
                key={index}
                href={action.href}
                className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-slate-50 transition-all duration-200"
              >
                <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                  <action.icon className="h-4 w-4 text-slate-600" />
                </div>
                <span className="text-xs font-medium text-slate-700">
                  {action.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-32 left-1/2 transform -translate-x-1/2 hidden sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}
