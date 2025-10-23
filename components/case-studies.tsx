"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  Clock,
  Award,
  ArrowRight,
  Building,
  Heart,
  ShoppingCart,
  Factory,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    title: "Global Bank Digital Transformation",
    client: "Leading International Bank",
    industry: "Banking & Finance",
    icon: Building,
    challenge: "Legacy systems and fragmented customer experiences across 50+ countries",
    solution: "Comprehensive digital transformation with cloud-native banking platform and unified customer experience",
    results: [
      { metric: "65%", description: "Reduction in operational costs" },
      { metric: "40%", description: "Increase in customer satisfaction" },
      { metric: "24/7", description: "Banking services availability" },
      { metric: "50M+", description: "Active digital customers" },
    ],
    duration: "24 months",
    technologies: ["Cloud Migration", "AI-powered Analytics", "Mobile Banking", "Blockchain"],
    testimonial: {
      quote: "Cluster Neuron transformed our entire banking infrastructure, enabling us to compete effectively in the digital age.",
      author: "CTO",
      company: "Leading International Bank",
    },
  },
  {
    title: "Healthcare Network Modernization",
    client: "Fortune 500 Healthcare Provider",
    industry: "Healthcare",
    icon: Heart,
    challenge: "Outdated EHR systems and disconnected patient data across 200+ facilities",
    solution: "Integrated healthcare platform with real-time data sharing and AI-powered diagnostics",
    results: [
      { metric: "45%", description: "Improvement in patient outcomes" },
      { metric: "60%", description: "Reduction in administrative overhead" },
      { metric: "30%", description: "Faster diagnosis times" },
      { metric: "99.9%", description: "System uptime" },
    ],
    duration: "18 months",
    technologies: ["EHR Integration", "Telemedicine", "AI Diagnostics", "Data Analytics"],
    testimonial: {
      quote: "The new system has revolutionized how we deliver care, putting patients at the center of everything we do.",
      author: "CEO",
      company: "Fortune 500 Healthcare Provider",
    },
  },
  {
    title: "Retail Supply Chain Optimization",
    client: "Global Retail Chain",
    industry: "Retail & E-commerce",
    icon: ShoppingCart,
    challenge: "Inefficient supply chain and inventory management across 5000+ stores",
    solution: "AI-driven supply chain optimization with real-time inventory tracking and predictive analytics",
    results: [
      { metric: "35%", description: "Reduction in inventory costs" },
      { metric: "50%", description: "Improvement in order fulfillment" },
      { metric: "25%", description: "Increase in sales through better availability" },
      { metric: "99.8%", description: "Order accuracy rate" },
    ],
    duration: "15 months",
    technologies: ["IoT Sensors", "Predictive Analytics", "Cloud Platform", "Mobile Apps"],
    testimonial: {
      quote: "Our supply chain is now a competitive advantage thanks to Cluster Neuron's innovative solutions.",
      author: "Supply Chain Director",
      company: "Global Retail Chain",
    },
  },
  {
    title: "Manufacturing Smart Factory Implementation",
    client: "Industrial Manufacturing Leader",
    industry: "Manufacturing",
    icon: Factory,
    challenge: "Traditional manufacturing processes with low efficiency and high operational costs",
    solution: "Industry 4.0 transformation with IoT, automation, and predictive maintenance systems",
    results: [
      { metric: "55%", description: "Increase in production efficiency" },
      { metric: "40%", description: "Reduction in downtime" },
      { metric: "30%", description: "Decrease in quality defects" },
      { metric: "20%", description: "Lower energy consumption" },
    ],
    duration: "20 months",
    technologies: ["IoT Platform", "Machine Learning", "Predictive Maintenance", "Digital Twin"],
    testimonial: {
      quote: "The smart factory implementation has positioned us as an industry leader in manufacturing innovation.",
      author: "Operations Director",
      company: "Industrial Manufacturing Leader",
    },
  },
];

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Success Stories
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Client{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Success Stories
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Discover how we've helped leading enterprises across industries achieve remarkable results through innovative technology solutions.
          </motion.p>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          className="space-y-12 mb-16"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {caseStudies.map((study, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 pb-8">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <study.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl mb-2">{study.title}</CardTitle>
                        <CardDescription className="text-gray-600 dark:text-gray-300">
                          <span className="font-semibold">{study.client}</span> • {study.industry}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                        <Clock className="h-4 w-4" />
                        <span>{study.duration}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Challenge & Solution */}
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Challenge</h4>
                        <p className="text-gray-600 dark:text-gray-300">{study.challenge}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Solution</h4>
                        <p className="text-gray-600 dark:text-gray-300">{study.solution}</p>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Results</h4>
                      <div className="space-y-3">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                            <div>
                              <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                                {result.metric}
                              </span>
                              <span className="text-gray-600 dark:text-gray-300 ml-2">
                                {result.description}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Testimonial */}
                      <div className="mt-6 p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
                        <blockquote className="text-gray-700 dark:text-gray-300 italic mb-3">
                          "{study.testimonial.quote}"
                        </blockquote>
                        <div className="text-sm">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            {study.testimonial.author}
                          </span>
                          <span className="text-gray-600 dark:text-gray-400 ml-2">
                            • {study.testimonial.company}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Overall Impact Stats */}
        <motion.div
          className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Our Impact Across Industries
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Successful Projects", icon: Award },
              { value: "98%", label: "Client Retention Rate", icon: Users },
              { value: "45%", label: "Average ROI Improvement", icon: TrendingUp },
              { value: "50M+", label: "End Users Impacted", icon: Users },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
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
            Ready for Your Success Story?
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our growing list of satisfied clients who have transformed their businesses with our solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group text-lg px-8">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              View All Case Studies
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
