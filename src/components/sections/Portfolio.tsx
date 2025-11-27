import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, Eye, ExternalLink } from "lucide-react";
import { Badge } from "../ui/badge";

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filters = [
    "All Projects",
    "Web Design",
    "Mobile Apps",
    "Branding",
    "UI/UX",
    "AI Solutions",
  ];

  const projects = [
    {
      title: "Digital Innovation Platform",
      category: "Web Design",
      rating: 4.8,
      tech: ["React", "Node.js", "AWS"],
      description: "Modern and responsive web platform with cutting-edge design and functionality.",
      image: "/portfolio/portfolio_images01.png",
    },
    {
      title: "AI-Powered Productivity App",
      category: "AI Solutions",
      rating: 4.9,
      tech: ["Machine Learning", "Data Annotation", "AI Analytics"],
      description: "Intelligent productivity assistant with AI-driven task management, data annotation features, and automated workflow optimization for enhanced business efficiency.",
      image: "/portfolio/portfolio_images02.png",
    },
    {
      title: "Modern Brand Identity",
      category: "Branding",
      rating: 5.0,
      tech: ["Illustrator", "Figma", "Brand"],
      description: "Complete brand identity package with logo, color palette, typography, and brand guidelines.",
      image: "/portfolio/portfolio_images03.png",
    },
    {
      title: "SaaS Dashboard Design",
      category: "UI/UX",
      rating: 4.7,
      tech: ["Figma", "Prototyping", "UX"],
      description: "Intuitive dashboard interface for SaaS platform with data visualization and user management.",
      image: "/portfolio/portfolio_images04.png",
    },
    {
      title: "E-commerce Platform",
      category: "Web Design",
      rating: 4.6,
      tech: ["Shopify", "React", "API"],
      description: "Full-featured e-commerce solution with payment integration and inventory management.",
      image: "/portfolio/portfolio_images05.png",
    },
    {
      title: "AI Data Annotation Platform",
      category: "AI Solutions",
      rating: 5.0,
      tech: ["TensorFlow", "Computer Vision", "Python"],
      description: "Advanced AI annotation platform for machine learning datasets with automated tagging and quality control.",
      image: "/portfolio/portfolio_images06.png",
    },
  ];

  const filteredProjects =
    activeFilter === "All Projects"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Portfolio</h2>
          <p className="text-lg text-muted-foreground">Explore our recent work and success stories</p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-soft"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              className="group relative bg-card rounded-xl overflow-hidden border border-border hover-lift"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              layout
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-primary/90 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ y: 20 }}
                  whileHover={{ y: 0 }}
                >
                  <button className="p-3 bg-white rounded-full hover:scale-110 transition-transform">
                    <Eye className="w-5 h-5 text-primary" />
                  </button>
                  <button className="p-3 bg-white rounded-full hover:scale-110 transition-transform">
                    <ExternalLink className="w-5 h-5 text-primary" />
                  </button>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-heading font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-sm font-semibold text-primary">
                    <Star className="w-4 h-4 fill-current" />
                    {project.rating}
                  </div>
                </div>

                <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20">
                  {project.category}
                </Badge>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
