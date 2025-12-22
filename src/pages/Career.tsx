import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Upload, 
  FileText, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Plus, 
  Trash2, 
  Calendar,
  Building2,
  Award,
  Sparkles,
  CheckCircle,
  ChevronDown,
  Rocket,
  Target,
  Users,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import { API_ENDPOINTS } from "@/config";

interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  grade: string;
}

interface Skill {
  id: string;
  name: string;
  level: string;
}

const Career = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Form States
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    portfolio: "",
  });
  
  const [experiences, setExperiences] = useState<Experience[]>([
    { id: "1", company: "", position: "", startDate: "", endDate: "", current: false, description: "" }
  ]);
  
  const [education, setEducation] = useState<Education[]>([
    { id: "1", institution: "", degree: "", field: "", startDate: "", endDate: "", grade: "" }
  ]);
  
  const [skills, setSkills] = useState<Skill[]>([
    { id: "1", name: "", level: "intermediate" }
  ]);
  
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [coverLetter, setCoverLetter] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("");
  
  const positions = [
    "Software Developer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "UI/UX Designer",
    "Digital Marketing Specialist",
    "Video Editor",
    "AI/ML Engineer",
    "Data Analyst",
    "BPO Executive",
    "Project Manager",
    "Business Analyst",
    "Other"
  ];

  const skillLevels = ["beginner", "intermediate", "advanced", "expert"];

  // Add/Remove handlers
  const addExperience = () => {
    setExperiences([...experiences, { 
      id: Date.now().toString(), 
      company: "", 
      position: "", 
      startDate: "", 
      endDate: "", 
      current: false, 
      description: "" 
    }]);
  };

  const removeExperience = (id: string) => {
    if (experiences.length > 1) {
      setExperiences(experiences.filter(exp => exp.id !== id));
    }
  };

  const addEducation = () => {
    setEducation([...education, { 
      id: Date.now().toString(), 
      institution: "", 
      degree: "", 
      field: "", 
      startDate: "", 
      endDate: "", 
      grade: "" 
    }]);
  };

  const removeEducation = (id: string) => {
    if (education.length > 1) {
      setEducation(education.filter(edu => edu.id !== id));
    }
  };

  const addSkill = () => {
    setSkills([...skills, { id: Date.now().toString(), name: "", level: "intermediate" }]);
  };

  const removeSkill = (id: string) => {
    if (skills.length > 1) {
      setSkills(skills.filter(skill => skill.id !== id));
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCvFile(file);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      
      // Personal info
      formData.append("first_name", personalInfo.firstName);
      formData.append("last_name", personalInfo.lastName);
      formData.append("email", personalInfo.email);
      formData.append("phone", personalInfo.phone);
      formData.append("location", personalInfo.location);
      formData.append("linkedin", personalInfo.linkedin);
      formData.append("portfolio", personalInfo.portfolio);
      formData.append("position", selectedPosition);
      
      // Package additional data as JSON
      const extras = {
        experiences,
        education,
        skills,
        coverLetter,
      };
      formData.append("extras", JSON.stringify(extras));
      
      // Attach CV file
      if (cvFile) {
        formData.append("cv", cvFile);
      }

      const response = await fetch(API_ENDPOINTS.career, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
      } else {
        alert(data.errors ? Object.values(data.errors).join("\n") : "Submission failed. Please check your information.");
        setIsSubmitting(false);
      }
    } catch (error) {
      alert("Network error. Please check your connection and try again.");
      setIsSubmitting(false);
    }
  };

  const benefits = [
    { icon: <Rocket className="w-6 h-6" />, title: "Growth Opportunities", desc: "Fast-track your career with us" },
    { icon: <Target className="w-6 h-6" />, title: "Challenging Projects", desc: "Work on cutting-edge technology" },
    { icon: <Users className="w-6 h-6" />, title: "Amazing Team", desc: "Collaborate with industry experts" },
    { icon: <Heart className="w-6 h-6" />, title: "Work-Life Balance", desc: "Flexible working hours" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24">
        <ParticleBackground />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">We're Hiring!</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 text-white">
              Join Our{" "}
              <span className="bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent">
                Amazing Team
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Be part of ClusterNeuron's journey to transform businesses through technology, creativity, and innovation.
            </p>
            
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary text-white px-8 shadow-glow"
                onClick={() => document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                Apply Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary"
              >
                View Open Positions
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Why Join ClusterNeuron?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We offer more than just a job – we offer a career filled with growth, learning, and innovation.
            </p>
          </motion.div>
          
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-20">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-2xl mx-auto text-center py-20"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                  className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle className="w-12 h-12 text-green-500" />
                </motion.div>
                <h2 className="text-3xl font-heading font-bold mb-4">Application Submitted!</h2>
                <p className="text-muted-foreground mb-8">
                  Thank you for applying to ClusterNeuron. We'll review your application and get back to you soon.
                </p>
                <Button
                  onClick={() => window.location.href = "/"}
                  className="bg-gradient-to-r from-primary to-secondary text-white"
                >
                  Back to Home
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {/* Form Header */}
                <motion.div
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Application Form</h2>
                  <p className="text-muted-foreground max-w-xl mx-auto">
                    Fill in your details and upload your CV to apply for a position at ClusterNeuron.
                  </p>
                </motion.div>

                {/* Progress Steps */}
                <div className="max-w-4xl mx-auto mb-12">
                  <div className="flex items-center justify-between relative">
                    <div className="absolute top-5 left-0 right-0 h-1 bg-muted">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-secondary"
                        initial={{ width: "0%" }}
                        animate={{ width: `${((step - 1) / 3) * 100}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    {[
                      { num: 1, label: "Personal Info", icon: <User className="w-5 h-5" /> },
                      { num: 2, label: "Experience", icon: <Briefcase className="w-5 h-5" /> },
                      { num: 3, label: "Education & Skills", icon: <GraduationCap className="w-5 h-5" /> },
                      { num: 4, label: "Upload CV", icon: <Upload className="w-5 h-5" /> },
                    ].map((s) => (
                      <motion.div
                        key={s.num}
                        className="relative z-10 flex flex-col items-center"
                        whileHover={{ scale: 1.05 }}
                      >
                        <motion.div
                          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                            step >= s.num
                              ? "bg-gradient-to-r from-primary to-secondary text-white"
                              : "bg-muted text-muted-foreground"
                          }`}
                          animate={{ scale: step === s.num ? 1.1 : 1 }}
                        >
                          {s.icon}
                        </motion.div>
                        <span className={`text-xs mt-2 font-medium hidden md:block ${
                          step >= s.num ? "text-primary" : "text-muted-foreground"
                        }`}>
                          {s.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Form Content */}
                <div className="max-w-4xl mx-auto">
                  <motion.div
                    className="bg-card rounded-3xl border border-border p-6 md:p-10 shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <AnimatePresence mode="wait">
                      {/* Step 1: Personal Information */}
                      {step === 1 && (
                        <motion.div
                          key="step1"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-6"
                        >
                          <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center">
                              <User className="w-5 h-5 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold">Personal Information</h3>
                          </div>

                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label className="text-sm font-medium">First Name *</label>
                              <Input
                                placeholder="Kunal"
                                value={personalInfo.firstName}
                                onChange={(e) => setPersonalInfo({...personalInfo, firstName: e.target.value})}
                                className="bg-background border-border focus:border-primary"
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium">Last Name *</label>
                              <Input
                                placeholder="Gupta"
                                value={personalInfo.lastName}
                                onChange={(e) => setPersonalInfo({...personalInfo, lastName: e.target.value})}
                                className="bg-background border-border focus:border-primary"
                              />
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label className="text-sm font-medium flex items-center gap-2">
                                <Mail className="w-4 h-4 text-muted-foreground" />
                                Email Address *
                              </label>
                              <Input
                                type="email"
                                placeholder="kunalwritescode@gmail.com"
                                value={personalInfo.email}
                                onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})}
                                className="bg-background border-border focus:border-primary"
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium flex items-center gap-2">
                                <Phone className="w-4 h-4 text-muted-foreground" />
                                Phone Number *
                              </label>
                              <Input
                                type="tel"
                                placeholder="+91 98765 43210"
                                value={personalInfo.phone}
                                onChange={(e) => setPersonalInfo({...personalInfo, phone: e.target.value})}
                                className="bg-background border-border focus:border-primary"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm font-medium flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-muted-foreground" />
                              Location *
                            </label>
                            <Input
                              placeholder="Delhi, India"
                              value={personalInfo.location}
                              onChange={(e) => setPersonalInfo({...personalInfo, location: e.target.value})}
                              className="bg-background border-border focus:border-primary"
                            />
                          </div>

                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label className="text-sm font-medium">LinkedIn Profile</label>
                              <Input
                                placeholder="linkedin.com/in/kunalgupta"
                                value={personalInfo.linkedin}
                                onChange={(e) => setPersonalInfo({...personalInfo, linkedin: e.target.value})}
                                className="bg-background border-border focus:border-primary"
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium">Portfolio Website</label>
                              <Input
                                placeholder="kunalgupta.dev"
                                value={personalInfo.portfolio}
                                onChange={(e) => setPersonalInfo({...personalInfo, portfolio: e.target.value})}
                                className="bg-background border-border focus:border-primary"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm font-medium flex items-center gap-2">
                              <Briefcase className="w-4 h-4 text-muted-foreground" />
                              Position Applying For *
                            </label>
                            <select
                              value={selectedPosition}
                              onChange={(e) => setSelectedPosition(e.target.value)}
                              className="w-full h-10 px-3 rounded-md bg-background border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            >
                              <option value="">Select a position</option>
                              {positions.map((pos) => (
                                <option key={pos} value={pos}>{pos}</option>
                              ))}
                            </select>
                          </div>
                        </motion.div>
                      )}

                      {/* Step 2: Work Experience */}
                      {step === 2 && (
                        <motion.div
                          key="step2"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-6"
                        >
                          <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center">
                                <Briefcase className="w-5 h-5 text-primary" />
                              </div>
                              <h3 className="text-xl font-bold">Work Experience</h3>
                            </div>
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={addExperience}
                              className="gap-2"
                            >
                              <Plus className="w-4 h-4" /> Add Experience
                            </Button>
                          </div>

                          {experiences.map((exp, idx) => (
                            <motion.div
                              key={exp.id}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              className="p-6 bg-muted/30 rounded-2xl border border-border space-y-4 relative"
                            >
                              {experiences.length > 1 && (
                                <button
                                  type="button"
                                  onClick={() => removeExperience(exp.id)}
                                  className="absolute top-4 right-4 p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              )}
                              
                              <div className="flex items-center gap-2 text-sm font-medium text-primary mb-4">
                                <Building2 className="w-4 h-4" />
                                Experience {idx + 1}
                              </div>

                              <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <label className="text-sm font-medium">Company Name *</label>
                                  <Input
                                    placeholder="Company Inc."
                                    value={exp.company}
                                    onChange={(e) => {
                                      const updated = [...experiences];
                                      updated[idx].company = e.target.value;
                                      setExperiences(updated);
                                    }}
                                    className="bg-background"
                                  />
                                </div>
                                <div className="space-y-2">
                                  <label className="text-sm font-medium">Job Title *</label>
                                  <Input
                                    placeholder="Software Developer"
                                    value={exp.position}
                                    onChange={(e) => {
                                      const updated = [...experiences];
                                      updated[idx].position = e.target.value;
                                      setExperiences(updated);
                                    }}
                                    className="bg-background"
                                  />
                                </div>
                              </div>

                              <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <label className="text-sm font-medium flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-muted-foreground" />
                                    Start Date *
                                  </label>
                                  <Input
                                    type="month"
                                    value={exp.startDate}
                                    onChange={(e) => {
                                      const updated = [...experiences];
                                      updated[idx].startDate = e.target.value;
                                      setExperiences(updated);
                                    }}
                                    className="bg-background"
                                  />
                                </div>
                                <div className="space-y-2">
                                  <label className="text-sm font-medium flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-muted-foreground" />
                                    End Date
                                  </label>
                                  <Input
                                    type="month"
                                    value={exp.endDate}
                                    onChange={(e) => {
                                      const updated = [...experiences];
                                      updated[idx].endDate = e.target.value;
                                      setExperiences(updated);
                                    }}
                                    disabled={exp.current}
                                    className="bg-background disabled:opacity-50"
                                  />
                                </div>
                              </div>

                              <div className="flex items-center gap-2">
                                <input
                                  type="checkbox"
                                  id={`current-${exp.id}`}
                                  checked={exp.current}
                                  onChange={(e) => {
                                    const updated = [...experiences];
                                    updated[idx].current = e.target.checked;
                                    if (e.target.checked) updated[idx].endDate = "";
                                    setExperiences(updated);
                                  }}
                                  className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                                />
                                <label htmlFor={`current-${exp.id}`} className="text-sm">
                                  I currently work here
                                </label>
                              </div>

                              <div className="space-y-2">
                                <label className="text-sm font-medium">Job Description</label>
                                <Textarea
                                  placeholder="Describe your responsibilities and achievements..."
                                  value={exp.description}
                                  onChange={(e) => {
                                    const updated = [...experiences];
                                    updated[idx].description = e.target.value;
                                    setExperiences(updated);
                                  }}
                                  className="bg-background min-h-[100px]"
                                />
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}

                      {/* Step 3: Education & Skills */}
                      {step === 3 && (
                        <motion.div
                          key="step3"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-8"
                        >
                          {/* Education */}
                          <div>
                            <div className="flex items-center justify-between mb-6">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center">
                                  <GraduationCap className="w-5 h-5 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold">Education</h3>
                              </div>
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={addEducation}
                                className="gap-2"
                              >
                                <Plus className="w-4 h-4" /> Add Education
                              </Button>
                            </div>

                            {education.map((edu, idx) => (
                              <motion.div
                                key={edu.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-6 bg-muted/30 rounded-2xl border border-border space-y-4 relative mb-4"
                              >
                                {education.length > 1 && (
                                  <button
                                    type="button"
                                    onClick={() => removeEducation(edu.id)}
                                    className="absolute top-4 right-4 p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                )}

                                <div className="flex items-center gap-2 text-sm font-medium text-primary mb-4">
                                  <Award className="w-4 h-4" />
                                  Education {idx + 1}
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                  <div className="space-y-2">
                                    <label className="text-sm font-medium">Institution *</label>
                                    <Input
                                      placeholder="University Name"
                                      value={edu.institution}
                                      onChange={(e) => {
                                        const updated = [...education];
                                        updated[idx].institution = e.target.value;
                                        setEducation(updated);
                                      }}
                                      className="bg-background"
                                    />
                                  </div>
                                  <div className="space-y-2">
                                    <label className="text-sm font-medium">Degree *</label>
                                    <Input
                                      placeholder="Bachelor's / Master's"
                                      value={edu.degree}
                                      onChange={(e) => {
                                        const updated = [...education];
                                        updated[idx].degree = e.target.value;
                                        setEducation(updated);
                                      }}
                                      className="bg-background"
                                    />
                                  </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                  <div className="space-y-2">
                                    <label className="text-sm font-medium">Field of Study *</label>
                                    <Input
                                      placeholder="Computer Science"
                                      value={edu.field}
                                      onChange={(e) => {
                                        const updated = [...education];
                                        updated[idx].field = e.target.value;
                                        setEducation(updated);
                                      }}
                                      className="bg-background"
                                    />
                                  </div>
                                  <div className="space-y-2">
                                    <label className="text-sm font-medium">Grade / CGPA</label>
                                    <Input
                                      placeholder="8.5 CGPA"
                                      value={edu.grade}
                                      onChange={(e) => {
                                        const updated = [...education];
                                        updated[idx].grade = e.target.value;
                                        setEducation(updated);
                                      }}
                                      className="bg-background"
                                    />
                                  </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                  <div className="space-y-2">
                                    <label className="text-sm font-medium">Start Year *</label>
                                    <Input
                                      type="number"
                                      placeholder="2018"
                                      value={edu.startDate}
                                      onChange={(e) => {
                                        const updated = [...education];
                                        updated[idx].startDate = e.target.value;
                                        setEducation(updated);
                                      }}
                                      className="bg-background"
                                    />
                                  </div>
                                  <div className="space-y-2">
                                    <label className="text-sm font-medium">End Year *</label>
                                    <Input
                                      type="number"
                                      placeholder="2022"
                                      value={edu.endDate}
                                      onChange={(e) => {
                                        const updated = [...education];
                                        updated[idx].endDate = e.target.value;
                                        setEducation(updated);
                                      }}
                                      className="bg-background"
                                    />
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>

                          {/* Skills */}
                          <div>
                            <div className="flex items-center justify-between mb-6">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center">
                                  <Award className="w-5 h-5 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold">Skills</h3>
                              </div>
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={addSkill}
                                className="gap-2"
                              >
                                <Plus className="w-4 h-4" /> Add Skill
                              </Button>
                            </div>

                            <div className="space-y-3">
                              {skills.map((skill, idx) => (
                                <motion.div
                                  key={skill.id}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  className="flex items-center gap-4 p-4 bg-muted/30 rounded-xl border border-border"
                                >
                                  <Input
                                    placeholder="Skill name (e.g., React, Python)"
                                    value={skill.name}
                                    onChange={(e) => {
                                      const updated = [...skills];
                                      updated[idx].name = e.target.value;
                                      setSkills(updated);
                                    }}
                                    className="bg-background flex-1"
                                  />
                                  <select
                                    value={skill.level}
                                    onChange={(e) => {
                                      const updated = [...skills];
                                      updated[idx].level = e.target.value;
                                      setSkills(updated);
                                    }}
                                    className="h-10 px-3 rounded-md bg-background border border-border focus:border-primary focus:outline-none capitalize"
                                  >
                                    {skillLevels.map((level) => (
                                      <option key={level} value={level} className="capitalize">
                                        {level}
                                      </option>
                                    ))}
                                  </select>
                                  {skills.length > 1 && (
                                    <button
                                      type="button"
                                      onClick={() => removeSkill(skill.id)}
                                      className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                                    >
                                      <Trash2 className="w-4 h-4" />
                                    </button>
                                  )}
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* Step 4: Upload CV */}
                      {step === 4 && (
                        <motion.div
                          key="step4"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-6"
                        >
                          <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center">
                              <Upload className="w-5 h-5 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold">Upload Documents</h3>
                          </div>

                          {/* CV Upload */}
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Resume / CV *</label>
                            <div
                              onClick={() => fileInputRef.current?.click()}
                              className={`relative border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition-all duration-300 ${
                                cvFile 
                                  ? "border-primary bg-primary/5" 
                                  : "border-border hover:border-primary hover:bg-primary/5"
                              }`}
                            >
                              <input
                                ref={fileInputRef}
                                type="file"
                                accept=".pdf,.doc,.docx"
                                onChange={handleFileUpload}
                                className="hidden"
                              />
                              {cvFile ? (
                                <motion.div
                                  initial={{ scale: 0.9 }}
                                  animate={{ scale: 1 }}
                                  className="flex flex-col items-center gap-3"
                                >
                                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                                    <FileText className="w-8 h-8 text-primary" />
                                  </div>
                                  <div>
                                    <p className="font-medium text-primary">{cvFile.name}</p>
                                    <p className="text-sm text-muted-foreground">
                                      {(cvFile.size / 1024 / 1024).toFixed(2)} MB
                                    </p>
                                  </div>
                                  <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setCvFile(null);
                                    }}
                                  >
                                    Remove File
                                  </Button>
                                </motion.div>
                              ) : (
                                <div className="flex flex-col items-center gap-3">
                                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                                    <Upload className="w-8 h-8 text-muted-foreground" />
                                  </div>
                                  <div>
                                    <p className="font-medium">Click to upload or drag and drop</p>
                                    <p className="text-sm text-muted-foreground">
                                      PDF, DOC, DOCX (Max 10MB)
                                    </p>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Cover Letter */}
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Cover Letter (Optional)</label>
                            <Textarea
                              placeholder="Write a brief cover letter explaining why you'd be a great fit for this role..."
                              value={coverLetter}
                              onChange={(e) => setCoverLetter(e.target.value)}
                              className="bg-background min-h-[200px]"
                            />
                          </div>

                          {/* Terms */}
                          <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-xl">
                            <input
                              type="checkbox"
                              id="terms"
                              className="w-4 h-4 mt-1 rounded border-border text-primary focus:ring-primary"
                            />
                            <label htmlFor="terms" className="text-sm text-muted-foreground">
                              I agree to the processing of my personal data for recruitment purposes and confirm that all information provided is accurate. I understand that providing false information may result in disqualification.
                            </label>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-between mt-10 pt-6 border-t border-border">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setStep(step - 1)}
                        disabled={step === 1}
                        className="gap-2"
                      >
                        Previous
                      </Button>
                      
                      {step < 4 ? (
                        <Button
                          type="button"
                          onClick={() => setStep(step + 1)}
                          className="gap-2 bg-gradient-to-r from-primary to-secondary text-white"
                        >
                          Next Step
                        </Button>
                      ) : (
                        <Button
                          type="button"
                          onClick={handleSubmit}
                          disabled={isSubmitting}
                          className="gap-2 bg-gradient-to-r from-primary to-secondary text-white min-w-[150px]"
                        >
                          {isSubmitting ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                            >
                              <Sparkles className="w-4 h-4" />
                            </motion.div>
                          ) : (
                            <>
                              <CheckCircle className="w-4 h-4" />
                              Submit Application
                            </>
                          )}
                        </Button>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;
