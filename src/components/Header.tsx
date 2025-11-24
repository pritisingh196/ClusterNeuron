import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import { Button } from "./ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeLink, setActiveLink] = useState("hero");
  
  // Sections with dark backgrounds where navbar should stay dark
  const darkSections = ["hero"];
  const isDarkSection = darkSections.includes(activeLink);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active link based on scroll position
      const sections = ["hero", "about", "services", "portfolio", "industries", "team", "contact"];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveLink(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { label: "Digital Marketing", href: "#services", icon: "📈" },
    { label: "Software Development", href: "#services", icon: "💻" },
    { label: "Website Development", href: "#services", icon: "🌐" },
    { label: "Video Editing", href: "#services", icon: "🎬" },
    { label: "AI Solutions", href: "#services", icon: "🤖" },
    { label: "BPO Services", href: "#services", icon: "📞" },
  ];

  const industries = [
    { label: "AgriTech", icon: "🌾" },
    { label: "Financial Services", icon: "💰" },
    { label: "Healthcare & MedTech", icon: "🏥" },
    { label: "Education & EdTech", icon: "📚" },
    { label: "E-commerce & Retail", icon: "🛒" },
    { label: "Automotive & Transportation", icon: "🚗" },
    { label: "Real Estate & PropTech", icon: "🏠" },
    { label: "Energy & Utilities", icon: "⚡" },
    { label: "Gaming & Entertainment", icon: "🎮" },
    { label: "Travel & Tourism", icon: "✈️" },
  ];

  const NavLink = ({ href, label, id }: { href: string; label: string; id: string }) => (
    <a
      href={href}
      className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full group whitespace-nowrap ${
        activeLink === id
          ? "text-white"
          : isDarkSection 
            ? "text-white/70 hover:text-white" 
            : "text-gray-700 hover:text-gray-900"
      }`}
    >
      {activeLink === id && (
        <motion.span
          layoutId="navPill"
          className="absolute inset-0 bg-gradient-to-r from-primary via-primary-light to-secondary rounded-full -z-10"
          transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
        />
      )}
      <span className="relative z-10">{label}</span>
      {activeLink !== id && (
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-3/4 rounded-full" />
      )}
    </a>
  );

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-2 md:py-3" : "py-3 md:py-5"
      }`}
    >
      <div className="container mx-auto px-3 md:px-4">
        {/* Centered Floating Navbar */}
        <motion.div
          className="relative mx-auto w-full xl:max-w-fit"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          {/* Animated border container */}
          <div className="relative p-[2px] md:p-[3px] rounded-2xl xl:rounded-full overflow-hidden">
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-2xl xl:rounded-full">
              <div 
                className="absolute inset-0 rounded-2xl xl:rounded-full animate-spin-slow"
                style={{
                  background: "conic-gradient(from 0deg, hsl(336, 63%, 50%), hsl(336, 56%, 60%), hsl(280, 60%, 50%), hsl(336, 63%, 30%), hsl(336, 63%, 50%))",
                }}
              />
              {/* Inner mask to create border effect - adaptive background */}
              <div 
                className={`absolute inset-[2px] md:inset-[3px] rounded-2xl xl:rounded-full backdrop-blur-2xl transition-colors duration-500 ${
                  isDarkSection 
                    ? "bg-[#0a0a12]/95" 
                    : "bg-white/90"
                }`} 
              />
            </div>
            
            {/* Glowing effect behind */}
            <div 
              className={`absolute inset-0 rounded-2xl xl:rounded-full blur-xl animate-pulse-slow transition-opacity duration-500 ${
                isDarkSection ? "opacity-50" : "opacity-30"
              }`}
              style={{
                background: "linear-gradient(90deg, hsl(336, 63%, 50%), hsl(336, 56%, 60%), hsl(280, 60%, 50%))",
              }}
            />

            {/* Main navbar content - Adaptive glass effect */}
            <div 
              className={`relative flex items-center justify-between gap-3 md:gap-4 px-4 md:px-6 py-3 md:py-4 rounded-2xl xl:rounded-full backdrop-blur-2xl transition-all duration-500 ${
                isDarkSection 
                  ? "bg-[#0a0a12]/80 border border-white/5" 
                  : "bg-white/80 border border-gray-200/50 shadow-lg shadow-primary/5"
              }`}
            >
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="flex-shrink-0"
              >
                <Logo isDark={isDarkSection} />
              </motion.div>

              {/* Desktop Navigation */}
              <nav className={`hidden xl:flex items-center gap-1 font-nav px-4 border-l border-r transition-colors duration-500 ${
                isDarkSection ? "border-white/10" : "border-gray-200"
              }`}>
                <NavLink href="#hero" label="Home" id="hero" />
                <NavLink href="#about" label="About" id="about" />

                {/* Services Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown("services")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full whitespace-nowrap ${
                      activeLink === "services"
                        ? "text-white bg-gradient-to-r from-primary via-primary-light to-secondary"
                        : isDarkSection
                          ? "text-white/70 hover:text-white hover:bg-white/5"
                          : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    Services
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === "services" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === "services" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 min-w-[260px] z-50"
                      >
                        {/* Dropdown with animated border */}
                        <div className="relative p-[1px] rounded-2xl overflow-hidden">
                          <div 
                            className="absolute inset-0 rounded-2xl animate-spin-slow"
                            style={{
                              background: "conic-gradient(from 0deg, hsl(336, 63%, 50%), hsl(336, 56%, 60%), hsl(280, 60%, 50%), hsl(336, 63%, 30%), hsl(336, 63%, 50%))",
                            }}
                          />
                          <div className={`relative backdrop-blur-2xl rounded-2xl shadow-[0_20px_60px_rgba(123,30,76,0.3)] overflow-hidden transition-colors duration-500 ${
                            isDarkSection 
                              ? "bg-[#0a0a12]/95 border border-white/10" 
                              : "bg-white/95 border border-gray-200"
                          }`}>
                            {/* Gradient header */}
                            <div className="px-4 py-3 bg-gradient-to-r from-primary/20 to-secondary/20 border-b border-primary/20">
                              <span className="text-xs font-semibold text-primary uppercase tracking-wider">Our Services</span>
                            </div>
                            <div className="p-2">
                              {services.map((service, idx) => (
                                <motion.a
                                  key={idx}
                                  href={service.href}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.05 }}
                                  className={`flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white transition-all duration-300 font-medium group ${
                                    isDarkSection ? "text-white/70 hover:text-white" : "text-gray-700 hover:text-white"
                                  }`}
                                >
                                  <span className="text-lg group-hover:scale-110 transition-transform">{service.icon}</span>
                                  <span className="text-sm">{service.label}</span>
                                </motion.a>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <NavLink href="#portfolio" label="Portfolio" id="portfolio" />

                {/* Industries Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown("industries")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full whitespace-nowrap ${
                      activeLink === "industries"
                        ? "text-white bg-gradient-to-r from-primary via-primary-light to-secondary"
                        : isDarkSection
                          ? "text-white/70 hover:text-white hover:bg-white/5"
                          : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    Industries
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === "industries" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === "industries" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 min-w-[280px] z-50"
                      >
                        {/* Dropdown with animated border */}
                        <div className="relative p-[1px] rounded-2xl overflow-hidden">
                          <div 
                            className="absolute inset-0 rounded-2xl animate-spin-slow"
                            style={{
                              background: "conic-gradient(from 0deg, hsl(336, 63%, 50%), hsl(336, 56%, 60%), hsl(280, 60%, 50%), hsl(336, 63%, 30%), hsl(336, 63%, 50%))",
                            }}
                          />
                          <div className={`relative backdrop-blur-2xl rounded-2xl shadow-[0_20px_60px_rgba(123,30,76,0.3)] overflow-hidden transition-colors duration-500 ${
                            isDarkSection 
                              ? "bg-[#0a0a12]/95 border border-white/10" 
                              : "bg-white/95 border border-gray-200"
                          }`}>
                            {/* Gradient header */}
                            <div className="px-4 py-3 bg-gradient-to-r from-primary/20 to-secondary/20 border-b border-primary/20">
                              <span className="text-xs font-semibold text-primary uppercase tracking-wider">Industries We Serve</span>
                            </div>
                            <div className="p-2 max-h-[320px] overflow-y-auto custom-scrollbar">
                              {industries.map((industry, idx) => (
                                <motion.a
                                  key={idx}
                                  href="#industries"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.03 }}
                                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white transition-all duration-300 font-medium group ${
                                    isDarkSection ? "text-white/70 hover:text-white" : "text-gray-700 hover:text-white"
                                  }`}
                                >
                                  <span className="text-base group-hover:scale-110 transition-transform">{industry.icon}</span>
                                  <span className="text-sm">{industry.label}</span>
                                </motion.a>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <NavLink href="#team" label="Team" id="team" />
                <NavLink href="#contact" label="Contact" id="contact" />
              </nav>

              {/* CTA Button - Desktop */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden xl:block flex-shrink-0"
              >
                <Button
                  className="relative overflow-hidden bg-gradient-to-r from-primary via-primary-light to-secondary text-white font-semibold px-5 py-2 rounded-full shadow-[0_4px_20px_rgba(123,30,76,0.4)] hover:shadow-[0_6px_30px_rgba(123,30,76,0.6)] transition-all duration-300 group"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  {/* Shine effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative flex items-center gap-2 text-sm">
                    <Sparkles className="w-4 h-4" />
                    Get Started
                  </span>
                </Button>
              </motion.div>

              {/* Mobile Menu Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`xl:hidden relative p-2.5 md:p-3 rounded-full flex-shrink-0 transition-colors duration-500 ${
                  isDarkSection 
                    ? "bg-white/10 text-white border border-white/10" 
                    : "bg-gray-100 text-gray-700 border border-gray-200"
                }`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5 md:w-6 md:h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5 md:w-6 md:h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="xl:hidden absolute top-full left-0 right-0 mt-2 md:mt-3 overflow-hidden"
              >
                {/* Mobile menu with animated border */}
                <div className="relative p-[2px] rounded-2xl md:rounded-3xl overflow-hidden">
                  <div 
                    className="absolute inset-0 rounded-2xl md:rounded-3xl animate-spin-slow"
                    style={{
                      background: "conic-gradient(from 0deg, hsl(336, 63%, 50%), hsl(336, 56%, 60%), hsl(280, 60%, 50%), hsl(336, 63%, 30%), hsl(336, 63%, 50%))",
                    }}
                  />
                  <div className={`relative backdrop-blur-2xl rounded-2xl md:rounded-3xl shadow-[0_20px_60px_rgba(123,30,76,0.3)] overflow-hidden transition-colors duration-500 ${
                    isDarkSection 
                      ? "bg-[#0a0a12]/95 border border-white/10" 
                      : "bg-white/95 border border-gray-200"
                  }`}>
                    <nav className="flex flex-col p-3 md:p-4 gap-1 font-nav max-h-[70vh] overflow-y-auto">
                      {[
                        { label: "Home", href: "#hero", id: "hero" },
                        { label: "About", href: "#about", id: "about" },
                        { label: "Services", href: "#services", id: "services" },
                        { label: "Portfolio", href: "#portfolio", id: "portfolio" },
                        { label: "Industries", href: "#industries", id: "industries" },
                        { label: "Team", href: "#team", id: "team" },
                        { label: "Contact", href: "#contact", id: "contact" },
                      ].map((link, idx) => (
                        <motion.a
                          key={link.id}
                          href={link.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`py-3 px-4 rounded-xl font-medium transition-all duration-300 text-sm md:text-base ${
                            activeLink === link.id
                              ? "bg-gradient-to-r from-primary to-secondary text-white"
                              : isDarkSection
                                ? "text-white/70 hover:text-white hover:bg-white/5"
                                : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                          }`}
                        >
                          {link.label}
                        </motion.a>
                      ))}
                      
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className={`pt-3 mt-2 border-t ${isDarkSection ? "border-white/10" : "border-gray-200"}`}
                      >
                        <Button
                          className="w-full bg-gradient-to-r from-primary via-primary-light to-secondary text-white font-semibold py-3 rounded-xl shadow-lg text-sm md:text-base"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                          }}
                        >
                          <Sparkles className="w-4 h-4 mr-2" />
                          Get Started
                        </Button>
                      </motion.div>
                    </nav>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
