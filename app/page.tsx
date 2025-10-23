"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Technology from "@/components/technology";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-16 h-16 mx-auto mb-4">
            <div className="absolute inset-0 bg-blue-600 rounded-full animate-pulse" />
            <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full animate-ping" />
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 font-medium">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Technology />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
