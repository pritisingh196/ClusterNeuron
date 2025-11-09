"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  CheckCircle,
  AlertCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const services = [
  "Cloud Solutions",
  "AI & Analytics",
  "Cybersecurity",
  "Enterprise Systems",
  "Digital Transformation",
  "Other / General Inquiry",
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please tell us about your project";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Here you would normally send data to your backend
      console.log("Form submitted:", formData);

      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Submit error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <motion.div
        className="text-center py-12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-10 w-10 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-semibold text-slate-900 mb-4">
          Thank You for Your Inquiry!
        </h3>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          We've received your message and will get back to you within 24 hours.
          Our team is excited to discuss how we can help transform your
          business.
        </p>
        <Button
          onClick={() => setSubmitStatus("idle")}
          className="bg-slate-900 hover:bg-slate-800 text-white"
        >
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        className="text-center mb-12"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-light text-slate-900 mb-4"
          variants={fadeInUp}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="text-lg text-slate-600 max-w-2xl mx-auto"
          variants={fadeInUp}
        >
          Ready to start your digital transformation journey? Fill out the form
          below and our expert team will contact you within 24 hours.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Information */}
        <motion.div
          className="lg:col-span-1 space-y-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-slate-600" />
                </div>
                <div>
                  <div className="font-medium text-slate-900">Phone</div>
                  <div className="text-slate-600">+91-8745845339</div>
                  <div className="text-sm text-slate-500">
                    Mon-Fri 9AM-6PM IST
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-slate-600" />
                </div>
                <div>
                  <div className="font-medium text-slate-900">Email</div>
                  <div className="text-slate-600">
                    clusterneuronai@gmail.com
                  </div>
                  <div className="text-sm text-slate-500">
                    We respond within 24 hours
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-slate-600" />
                </div>
                <div>
                  <div className="font-medium text-slate-900">Office</div>
                  <div className="text-slate-600">Delhi, India</div>
                  <div className="text-sm text-slate-500">
                    Available for virtual meetings
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-6">
            <h4 className="font-medium text-slate-900 mb-3">Why Choose Us?</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                15+ years of enterprise experience
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                200+ successful projects delivered
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                98% client satisfaction rate
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                Free initial consultation
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Input
                label="First Name"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                error={errors.firstName}
                placeholder="John"
                required
              />

              <Input
                label="Last Name"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                error={errors.lastName}
                placeholder="Doe"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Input
                type="email"
                label="Email Address"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                error={errors.email}
                placeholder="john@example.com"
                required
              />

              <Input
                type="tel"
                label="Phone Number"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                error={errors.phone}
                placeholder="+91-8745845339"
                required
              />
            </div>

            <Input
              label="Company Name"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              error={errors.company}
              placeholder="Acme Corporation"
              required
            />

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">
                Service Interest
              </label>
              <select
                value={formData.service}
                onChange={(e) => handleInputChange("service", e.target.value)}
                className={`flex h-10 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 hover:border-slate-400 ${
                  errors.service
                    ? "border-red-500 focus-visible:ring-red-500"
                    : ""
                }`}
                required
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="text-sm text-red-600">{errors.service}</p>
              )}
            </div>

            <Textarea
              label="Project Details"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              error={errors.message}
              placeholder="Tell us about your project, goals, and timeline..."
              rows={5}
              required
            />

            {submitStatus === "error" && (
              <motion.div
                className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <p className="text-sm text-red-700">
                  Something went wrong. Please try again or contact us directly.
                </p>
              </motion.div>
            )}

            <Button
              type="submit"
              loading={isSubmitting}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
            </Button>

            <p className="text-xs text-slate-500 text-center">
              By submitting this form, you agree to our privacy policy and terms
              of service. We'll never share your information with third parties.
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
