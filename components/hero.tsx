"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const floatingElements = [
  {
    delay: 0,
    size: "w-20 h-20",
    color: "bg-blue-400/20",
    position: "top-20 left-10",
  },
  {
    delay: 2,
    size: "w-16 h-16",
    color: "bg-purple-400/20",
    position: "top-40 right-20",
  },
  {
    delay: 4,
    size: "w-24 h-24",
    color: "bg-pink-400/20",
    position: "bottom-20 left-1/4",
  },
  {
    delay: 1,
    size: "w-12 h-12",
    color: "bg-green-400/20",
    position: "top-32 right-1/3",
  },
];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-600/10 animate-gradient" />

      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.position} ${element.size} ${element.color} rounded-full animate-float`}
          style={{ animationDelay: `${element.delay}s` }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: index * 0.2 }}
        />
      ))}

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-black dark:bg-grid-white" />

      {/* Main Content */}
      <motion.div
        className="max-w-7xl mx-auto text-center relative z-10"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6"
          variants={fadeInUp}
        >
          <Sparkles className="h-4 w-4" />
          <span>Powered by Advanced AI Technology</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
          variants={fadeInUp}
        >
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Intelligent Solutions
          </span>
          <br />
          <span className="text-gray-900 dark:text-white">
            for Tomorrow's Challenges
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          variants={fadeInUp}
        >
          Harness the power of advanced AI and neural networks to transform your
          business. Cluster Neuron delivers cutting-edge technology that learns,
          adapts, and evolves.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          variants={fadeInUp}
        >
          <Button size="lg" className="group text-lg px-8">
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="group text-lg px-8">
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-600 dark:text-gray-400"
          variants={fadeInUp}
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-white dark:border-gray-900 flex items-center justify-center text-white text-xs font-bold"
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <span>Trusted by 10,000+ companies</span>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400">
                ★
              </span>
            ))}
            <span className="ml-1">4.9/5 rating</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        className="max-w-7xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-4 gap-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {[
          { value: "99.9%", label: "Uptime" },
          { value: "10M+", label: "API Calls" },
          { value: "150+", label: "Countries" },
          { value: "24/7", label: "Support" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {stat.value}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
