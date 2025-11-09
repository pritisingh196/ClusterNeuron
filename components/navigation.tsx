"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#solutions", label: "Solutions" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const mobileQuickActions = [
  {
    icon: Phone,
    label: "Call",
    href: "tel:+15551234567",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:clusterneuronai@gmail.com",
  },
  {
    icon: Calendar,
    label: "Schedule",
    href: "#contact",
  },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200"
            : "bg-white/80 backdrop-blur-sm border-b border-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-lg">CN</span>
              </div>
              <span className="text-xl font-light text-slate-900 tracking-tight hidden sm:block">
                Cluster Neuron
              </span>
              <span className="text-lg font-light text-slate-900 tracking-tight sm:hidden">
                CN
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="relative text-slate-600 hover:text-slate-900 transition-colors font-medium text-sm group py-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200">
                  Get Started
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2.5 rounded-xl hover:bg-slate-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5 text-slate-700" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5 text-slate-700" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsMenuOpen(false)}
              />

              {/* Menu Panel */}
              <motion.div
                className="fixed top-0 right-0 bottom-0 w-80 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
              >
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">CN</span>
                    </div>
                    <span className="text-lg font-light text-slate-900">
                      Cluster Neuron
                    </span>
                  </div>
                  <button
                    className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <X className="h-5 w-5 text-slate-700" />
                  </button>
                </div>

                {/* Mobile Navigation Items */}
                <div className="p-6">
                  <div className="space-y-1 mb-8">
                    {navItems.map((item, index) => (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all font-medium text-base"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={handleNavClick}
                      >
                        {item.label}
                      </motion.a>
                    ))}
                  </div>

                  {/* Mobile Quick Actions */}
                  <div className="border-t border-slate-200 pt-6">
                    <h3 className="text-sm font-medium text-slate-500 mb-4">
                      Quick Contact
                    </h3>
                    <div className="space-y-2">
                      {mobileQuickActions.map((action, index) => (
                        <motion.a
                          key={index}
                          href={action.href}
                          className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.05 }}
                          onClick={handleNavClick}
                        >
                          <action.icon className="h-5 w-5 text-slate-500" />
                          <span className="font-medium">{action.label}</span>
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  {/* Mobile CTA */}
                  <motion.div
                    className="mt-8 pt-6 border-t border-slate-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-lg font-medium">
                      Schedule Consultation
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Bottom Bar - Quick Actions */}
      {isMobile && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-40 lg:hidden"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <div className="grid grid-cols-3 gap-0">
            {mobileQuickActions.map((action, index) => (
              <a
                key={index}
                href={action.href}
                className="flex flex-col items-center gap-1 py-3 px-2 hover:bg-slate-50 transition-colors group"
              >
                <action.icon className="h-5 w-5 text-slate-600 group-hover:text-slate-900 transition-colors" />
                <span className="text-xs font-medium text-slate-700 group-hover:text-slate-900">
                  {action.label}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}
