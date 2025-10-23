"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Services from "@/components/services";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Simulate loading for smooth entrance
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted || isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        {/* Loading State with Animation */}
        <div className="text-center">
          {/* Logo Animation */}
          <motion.div
            className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-8"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-slate-900 rounded-xl shadow-lg" />
            <div className="absolute inset-1 bg-white rounded-lg flex items-center justify-center">
              <span className="text-slate-900 font-bold text-lg sm:text-xl">
                CN
              </span>
            </div>
            {/* Rotating Ring */}
            <motion.div
              className="absolute inset-0 border-2 border-slate-200 rounded-xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          {/* Loading Text */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h2 className="text-xl sm:text-2xl font-light text-slate-900">
              Cluster Neuron
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Loading amazing experiences...
            </p>
          </motion.div>

          {/* Progress Dots */}
          <motion.div
            className="flex justify-center gap-2 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-2 h-2 bg-slate-300 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-white" />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgb(226_232_240)_1px,transparent_1px)]
                            [background-size:40px_40px] opacity-20"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
