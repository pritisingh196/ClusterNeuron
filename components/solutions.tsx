"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  Cloud,
  Brain,
  Users,
  BarChart,
  Smartphone,
  Database,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  TrendingUp,
  Clock,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    title: "Digital Experience Platform",
    icon: Smartphone,
    category: "Customer Experience",
    description:
      "Comprehensive platform for creating seamless digital experiences across all touchpoints.",
    features: [
      "Omnichannel Customer Journey",
      "Personalization Engine",
      "Real-time Analytics",
      "AI-powered Recommendations",
      "Mobile-first Design",
    ],
    benefits: [
      "40% increase in customer engagement",
      "35% improvement in conversion rates",
      "50% reduction in customer service costs",
    ],
    color: "from-blue-500 to-cyan-500",
    complexity: "Enterprise",
    implementation: "3-6 months",
  },
  {
    title: "Intelligent Automation Suite",
    icon: Zap,
    category: "Process Optimization",
    description:
      "AI-powered automation platform that streamlines business processes and reduces manual intervention.",
    features: [
      "Process Mining & Discovery",
      "Robotic Process Automation",
      "Intelligent Document Processing",
      "Workflow Orchestration",
      "Predictive Analytics",
    ],
    benefits: [
      "70% reduction in processing time",
      "85% accuracy improvement",
      "60% cost savings on manual processes",
    ],
    color: "from-orange-500 to-red-500",
    complexity: "Enterprise",
    implementation: "4-8 months",
  },
  {
    title: "Cloud Transformation Platform",
    icon: Cloud,
    category: "Infrastructure",
    description:
      "End-to-end cloud migration and management platform for modern IT infrastructure.",
    features: [
      "Multi-cloud Management",
      "Infrastructure as Code",
      "Cost Optimization",
      "Security & Compliance",
      "Disaster Recovery",
    ],
    benefits: [
      "45% reduction in infrastructure costs",
      "99.99% uptime guarantee",
      "3x faster deployment cycles",
    ],
    color: "from-green-500 to-emerald-500",
    complexity: "Large Enterprise",
    implementation: "6-12 months",
  },
  {
    title: "Data & Analytics Hub",
    icon: BarChart,
    category: "Business Intelligence",
    description:
      "Unified analytics platform for data-driven decision making and business insights.",
    features: [
      "Real-time Data Processing",
      "Advanced Analytics",
      "Interactive Dashboards",
      "ML Model Deployment",
      "Data Governance",
    ],
    benefits: [
      "90% faster insights generation",
      "80% improvement in data accuracy",
      "3x better decision-making speed",
    ],
    color: "from-purple-500 to-pink-500",
    complexity: "Enterprise",
    implementation: "4-9 months",
  },
  {
    title: "Cybersecurity Command Center",
    icon: Shield,
    category: "Security",
    description:
      "Comprehensive security platform for threat detection, prevention, and response.",
    features: [
      "Threat Intelligence",
      "Security Analytics",
      "Incident Response",
      "Compliance Management",
      "Security Automation",
    ],
    benefits: [
      "95% faster threat detection",
      "80% reduction in security incidents",
      "100% regulatory compliance",
    ],
    color: "from-red-500 to-pink-500",
    complexity: "Enterprise",
    implementation: "3-6 months",
  },
  {
    title: "AI Innovation Lab",
    icon: Brain,
    category: "Artificial Intelligence",
    description:
      "Cutting-edge AI solutions for business transformation and competitive advantage.",
    features: [
      "Custom AI Model Development",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
      "AI Model Management",
    ],
    benefits: [
      "60% improvement in operational efficiency",
      "50% new revenue opportunities",
      "75% better customer understanding",
    ],
    color: "from-indigo-500 to-purple-500",
    complexity: "Advanced",
    implementation: "6-18 months",
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

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-900"
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Solution Offerings
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Tailored{" "}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Solutions
            </span>{" "}
            for Your Business
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our comprehensive suite of solutions addresses every aspect of your
            digital transformation journey, from strategy to implementation and
            beyond.
          </motion.p>
        </motion.div>

        {/* Solution Categories Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {[
            "All Solutions",
            "Customer Experience",
            "Process Optimization",
            "Infrastructure",
            "Security",
            "AI",
          ].map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {solutions.map((solution, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-2xl transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <motion.div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-r ${solution.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <solution.icon className="h-8 w-8 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full">
                            {solution.category}
                          </span>
                          <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full">
                            {solution.complexity}
                          </span>
                        </div>
                        <CardTitle className="text-xl mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {solution.title}
                        </CardTitle>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {solution.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Key Features
                    </h4>
                    <div className="space-y-2">
                      {solution.features
                        .slice(0, 3)
                        .map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                          >
                            <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      {solution.features.length > 3 && (
                        <div className="text-xs text-blue-600 dark:text-blue-400">
                          +{solution.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Business Benefits */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Business Impact
                    </h4>
                    <div className="space-y-2">
                      {solution.benefits
                        .slice(0, 2)
                        .map((benefit, benefitIndex) => (
                          <div
                            key={benefitIndex}
                            className="flex items-center gap-2 text-green-700 dark:text-green-400"
                          >
                            <TrendingUp className="h-3 w-3 flex-shrink-0" />
                            <span className="text-sm font-medium">
                              {benefit}
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Implementation Info */}
                  <div className="flex items-center justify-between mb-6 p-3 bg-gray-50 dark:bg-slate-800 rounded-lg">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Clock className="h-4 w-4" />
                      <span>{solution.implementation}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Users className="h-4 w-4" />
                      <span>Team Available</span>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 group w-full justify-start"
                  >
                    <Lightbulb className="mr-2 h-4 w-4" />
                    Explore {solution.title}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Solution Process */}
        <motion.div
          className="bg-white dark:bg-slate-800 rounded-2xl p-12 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Our Solution Implementation Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "Understanding your unique challenges and objectives",
              },
              {
                step: "02",
                title: "Design",
                description: "Creating tailored solution architecture",
              },
              {
                step: "03",
                title: "Develop",
                description: "Building and customizing the solution",
              },
              {
                step: "04",
                title: "Deploy",
                description: "Seamless implementation and integration",
              },
              {
                step: "05",
                title: "Optimize",
                description: "Continuous improvement and support",
              },
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {phase.step}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {phase.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {phase.description}
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
            Find Your Perfect Solution
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our experts help you identify and implement the right solutions
            for your business challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group text-lg px-8">
              Schedule Solution Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Download Solution Catalog
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
