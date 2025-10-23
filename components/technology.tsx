"use client";

import { motion, Variants } from "framer-motion";
import {
  Code,
  Database,
  Cloud,
  Cpu,
  Zap,
  Shield,
  GitBranch,
  Server,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const technologies = [
  {
    name: "TensorFlow",
    icon: Cpu,
    description: "Industry-standard ML framework",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "PyTorch",
    icon: Zap,
    description: "Dynamic neural networks",
    color: "from-blue-500 to-purple-500",
  },
  {
    name: "CUDA",
    icon: Database,
    description: "GPU acceleration",
    color: "from-green-500 to-teal-500",
  },
  {
    name: "Kubernetes",
    icon: Cloud,
    description: "Container orchestration",
    color: "from-blue-600 to-cyan-500",
  },
  {
    name: "GraphQL",
    icon: Code,
    description: "Flexible API queries",
    color: "from-pink-500 to-purple-500",
  },
  {
    name: "Docker",
    icon: Shield,
    description: "Container security",
    color: "from-blue-500 to-indigo-500",
  },
  {
    name: "GitOps",
    icon: GitBranch,
    description: "Version-controlled deployment",
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "Microservices",
    icon: Server,
    description: "Scalable architecture",
    color: "from-purple-500 to-pink-500",
  },
];

const containerVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  initial: { opacity: 0, scale: 0.8, y: 20 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Technology() {
  return (
    <section
      id="technology"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-900 dark:to-slate-800"
    >
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
            Technology Stack
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Powered by{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Modern Technology
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Built with the latest tools and frameworks to ensure performance,
            scalability, and reliability.
          </motion.p>
        </motion.div>

        {/* Technology Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {technologies.map((tech, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${tech.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <tech.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {tech.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Architecture Overview */}
        <motion.div
          className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Architecture Overview
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Secure & Compliant
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                SOC 2 Type II certified with GDPR compliance
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                High Performance
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Sub-millisecond response times with 99.9% uptime
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Cloud className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Cloud Native
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Built for multi-cloud and hybrid deployments
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
