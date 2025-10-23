"use client";

import { motion } from "framer-motion";
import {
  Building,
  Heart,
  ShoppingCart,
  Plane,
  Factory,
  GraduationCap,
  Banknote,
  Smartphone,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const industries = [
  {
    title: "Banking & Financial Services",
    icon: Banknote,
    description: "Digital banking solutions, fintech innovations, and regulatory compliance for the financial sector.",
    solutions: [
      "Core Banking Modernization",
      "Digital Payment Solutions",
      "Risk Management & Compliance",
      "Wealth Management Platforms",
      "Blockchain & Crypto Services",
    ],
    color: "from-blue-500 to-indigo-500",
    stats: { clients: "50+", projects: "200+", experience: "15+ years" },
  },
  {
    title: "Healthcare & Life Sciences",
    icon: Heart,
    description: "Healthcare IT solutions, telemedicine platforms, and clinical research management systems.",
    solutions: [
      "Electronic Health Records",
      "Telemedicine Platforms",
      "Clinical Trial Management",
      "Medical Imaging Solutions",
      "Healthcare Analytics",
    ],
    color: "from-green-500 to-emerald-500",
    stats: { clients: "30+", projects: "150+", experience: "12+ years" },
  },
  {
    title: "Retail & E-commerce",
    icon: ShoppingCart,
    description: "Omnichannel retail solutions, supply chain optimization, and customer experience enhancement.",
    solutions: [
      "E-commerce Platforms",
      "Supply Chain Management",
      "Customer Analytics",
      "Inventory Optimization",
      "Digital Marketing Solutions",
    ],
    color: "from-purple-500 to-pink-500",
    stats: { clients: "100+", projects: "300+", experience: "10+ years" },
  },
  {
    title: "Manufacturing",
    icon: Factory,
    description: "Industry 4.0 solutions, smart manufacturing, and supply chain digitalization.",
    solutions: [
      "Smart Factory Solutions",
      "Predictive Maintenance",
      "Quality Management Systems",
      "Supply Chain Digitalization",
      "IoT Integration",
    ],
    color: "from-orange-500 to-red-500",
    stats: { clients: "40+", projects: "180+", experience: "8+ years" },
  },
  {
    title: "Travel & Hospitality",
    icon: Plane,
    description: "Travel booking platforms, hotel management systems, and customer loyalty programs.",
    solutions: [
      "Travel Booking Engines",
      "Hotel Management Systems",
      "Revenue Management",
      "Customer Loyalty Programs",
      "Travel Analytics",
    ],
    color: "from-cyan-500 to-blue-500",
    stats: { clients: "25+", projects: "120+", experience: "6+ years" },
  },
  {
    title: "Education",
    icon: GraduationCap,
    description: "Learning management systems, educational platforms, and digital classroom solutions.",
    solutions: [
      "Learning Management Systems",
      "Virtual Classroom Platforms",
      "Student Information Systems",
      "Educational Analytics",
      "Online Assessment Tools",
    ],
    color: "from-yellow-500 to-amber-500",
    stats: { clients: "35+", projects: "140+", experience: "9+ years" },
  },
  {
    title: "Telecommunications",
    icon: Smartphone,
    description: "Network optimization, customer management systems, and 5G implementation solutions.",
    solutions: [
      "Network Optimization",
      "Customer Management Systems",
      "5G Implementation",
      "IoT Connectivity",
      "Digital Service Platforms",
    ],
    color: "from-indigo-500 to-purple-500",
    stats: { clients: "20+", projects: "80+", experience: "7+ years" },
  },
  {
    title: "Government & Public Sector",
    icon: Building,
    description: "E-governance solutions, public service digitization, and smart city initiatives.",
    solutions: [
      "E-governance Platforms",
      "Public Service Digitization",
      "Smart City Solutions",
      "Citizen Engagement Systems",
      "Data Analytics for Policy Making",
    ],
    color: "from-gray-500 to-slate-500",
    stats: { clients: "15+", projects: "60+", experience: "10+ years" },
  },
];

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Industries() {
  return (
    <section id="industries" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Industry Expertise
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Serving{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Diverse Industries
            </span>{" "}
            Worldwide
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            With deep domain expertise across multiple industries, we deliver tailored
            solutions that address unique business challenges and drive sector-specific innovation.
          </motion.p>
        </motion.div>

        {/* Industry Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {industries.map((industry, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-2xl transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <motion.div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-r ${industry.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <industry.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {industry.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {industry.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  {/* Industry Stats */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="text-center p-2 bg-gray-50 dark:bg-slate-800 rounded-lg">
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                        {industry.stats.clients}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Clients</div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 dark:bg-slate-800 rounded-lg">
                      <div className="text-lg font-bold text-green-600 dark:text-green-400">
                        {industry.stats.projects}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Projects</div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 dark:bg-slate-800 rounded-lg">
                      <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                        {industry.stats.experience}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Experience</div>
                    </div>
                  </div>

                  {/* Solutions List */}
                  <div className="space-y-2 mb-6">
                    {industry.solutions.slice(0, 3).map((solution, solutionIndex) => (
                      <div
                        key={solutionIndex}
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                      >
                        <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{solution}</span>
                      </div>
                    ))}
                    {industry.solutions.length > 3 && (
                      <div className="text-sm text-blue-600 dark:text-blue-400">
                        +{industry.solutions.length - 3} more solutions
                      </div>
                    )}
                  </div>

                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 group"
                  >
                    Explore {industry.title} Solutions
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Global Presence Map */}
        <motion.div
          className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Global Industry Presence
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { region: "North America", coverage: "85%", focus: "Finance, Tech, Healthcare" },
              { region: "Europe", coverage: "70%", focus: "Manufacturing, Retail, Telecom" },
              { region: "Asia Pacific", coverage: "60%", focus: "Banking, Manufacturing, Education" },
              { region: "Middle East & Africa", coverage: "40%", focus: "Government, Energy, Telecom" },
            ].map((region, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {region.coverage}
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {region.region}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  Market Coverage
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Focus: {region.focus}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Transform Your Industry with Us
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover how our industry-specific solutions can help you overcome challenges and seize opportunities in your sector.
          </p>
          <Button size="lg" className="group text-lg px-8">
            Request Industry Consultation
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
