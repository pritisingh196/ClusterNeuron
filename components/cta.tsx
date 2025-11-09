"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, Calendar, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/forms/contact-form";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+1 (555) 123-4567",
    description: "Mon-Fri 9AM-6PM IST",
    href: "tel:+15551234567",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@clusterneuron.com",
    description: "We respond within 24 hours",
    href: "mailto:hello@clusterneuron.com",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: Calendar,
    title: "Schedule Meeting",
    value: "Book a 30-min call",
    description: "Choose your preferred time",
    href: "#contact",
    color: "from-green-500 to-emerald-600",
  },
];

const benefits = [
  "Free initial consultation",
  "No obligation required",
  "Expert team guidance",
  "Customized solutions",
  "Quick response time",
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function CTA() {
  const [showForm, setShowForm] = useState(false);

  if (showForm) {
    return (
      <section
        id="contact"
        className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
          <div
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button
              variant="ghost"
              onClick={() => setShowForm(false)}
              className="mb-8 text-slate-600 hover:text-slate-900"
            >
              ← Back to Contact Options
            </Button>
          </motion.div>

          <ContactForm />
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 mb-6 shadow-sm"
            variants={fadeInUp}
          >
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span>Let's Work Together</span>
          </motion.div>

          {/* Main heading */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 mb-6 leading-tight"
            variants={fadeInUp}
          >
            Ready to Transform
            <span className="block font-semibold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
              Your Business?
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg sm:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Contact our expert team today for a complimentary consultation and
            discover how we can help you achieve your digital transformation
            goals.
          </motion.p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              className="group block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-full bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 hover:border-slate-300 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  <method.icon className="h-7 w-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                  {method.title}
                </h3>
                <p className="text-slate-600 font-medium mb-1">
                  {method.value}
                </p>
                <p className="text-sm text-slate-500">{method.description}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 mb-12 shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-light text-slate-900 mb-4">
              Why Choose Cluster Neuron?
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We deliver exceptional results with our proven methodology and
              client-centric approach
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 text-slate-700"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.05, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                <span className="text-sm sm:text-base">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="bg-gradient-to-r from-slate-900 to-slate-700 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-light mb-4">
                Start Your Transformation Journey
              </h3>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-base sm:text-lg">
                Take the first step towards digital excellence. Our team is
                ready to help you achieve your business objectives.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
                  onClick={() => setShowForm(true)}
                >
                  Start with Contact Form
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl font-medium transition-all duration-300"
                  asChild
                >
                  <a href="tel:+15551234567">Call Us Now</a>
                </Button>
              </div>

              <p className="text-slate-400 text-sm mt-6">
                No obligation • 100% confidential • Expert consultation
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quick contact for mobile */}
        <motion.div
          className="mt-12 text-center lg:hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex flex-col items-center gap-4 p-6 bg-slate-50 rounded-2xl">
            <p className="text-sm text-slate-600 font-medium">
              Need immediate assistance?
            </p>
            <div className="flex gap-4">
              <a
                href="tel:+15551234567"
                className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm font-medium">Call Now</span>
              </a>
              <a
                href="mailto:hello@clusterneuron.com"
                className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm font-medium">Email</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
