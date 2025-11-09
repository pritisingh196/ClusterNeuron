"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Brain,
  Shield,
  Database,
  Code,
  ArrowRight,
  CheckCircle2,
  Drone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and migration services designed for enterprise needs",
    features: ["Cloud Migration", "Multi-Cloud Management", "DevOps & CI/CD"],
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: Brain,
    title: "AI & Analytics",
    description:
      "Intelligent solutions powered by machine learning and advanced analytics",
    features: ["Machine Learning", "Data Analytics", "Predictive Modeling"],
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Comprehensive security framework to protect your digital assets",
    features: ["Security Audits", "Threat Protection", "Compliance Management"],
    color: "from-red-500 to-orange-600",
  },
  {
    icon: Database,
    title: "Enterprise Systems",
    description:
      "Robust systems integration and management for business operations",
    features: ["ERP Solutions", "Custom Development", "System Integration"],
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Code,
    title: "Digital Transformation",
    description:
      "Modernize your business processes with cutting-edge technology",
    features: ["Process Automation", "Digital Strategy", "Change Management"],
    color: "from-indigo-500 to-blue-600",
  },
  {
    icon: Drone,
    title: "Drone Services",
    description:
      "Innovative drone solutions for data collection and operational efficiency",
    features: ["Drone Management", "Data Analytics", "Remote Sensing"],
    color: "from-cyan-500 to-cyan-600",
  }
];

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span>Our Core Services</span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Services That Drive
            <span className="block font-semibold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
              Business Growth
            </span>
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            End-to-end technology solutions designed to transform your
            enterprise and accelerate your digital journey with measurable
            results.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="group"
            >
              <div className="h-full bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Service Header */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <motion.div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105`}
                      whileHover={{ rotate: 5 }}
                    >
                      <service.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Service Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-3 text-slate-600"
                      >
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                        <span className="text-sm sm:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-slate-700 hover:text-slate-900 font-medium group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
        <motion.div
          className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-light text-slate-900 mb-4">
              Our Service Delivery Process
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A structured approach to ensure successful project delivery and
              client satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "Understanding your business needs and current technology landscape",
                icon: "🔍",
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "Developing a comprehensive roadmap aligned with your goals",
                icon: "📋",
              },
              {
                step: "03",
                title: "Implementation",
                description: "Executing solutions with industry best practices",
                icon: "⚡",
              },
              {
                step: "04",
                title: "Optimization",
                description: "Continuous improvement and long-term support",
                icon: "🚀",
              },
            ].map((phase, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-100 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl mx-auto mb-4 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 group-hover:scale-105">
                    {phase.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center text-sm font-bold">
                    {phase.step}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">
                  {phase.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-slate-900 to-slate-700 rounded-3xl p-8 sm:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl font-light mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-base sm:text-lg">
              Let's discuss how our services can help you achieve your digital
              transformation goals. Schedule a free consultation with our
              experts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl font-medium transition-all duration-300"
              >
                View Case Studies
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
