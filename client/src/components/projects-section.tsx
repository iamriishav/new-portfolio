import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useMemo } from "react";
import cabImage from "@assets/pro-cab_1752402845053.webp";
import lawyericImage from "@assets/pro-lawyeric_1752402845054.webp";
import quoteImage from "@assets/pro-quote_1752402845055.webp";
import weatherImage from "@assets/pro-weather_1752402863492.webp";

// Animation constants for better performance
const FADE_IN_UP = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

const PROJECT_CARD_HOVER = {
  scale: 1.02,
  transition: { duration: 0.2, ease: "easeOut" },
};

export default function ProjectsSection() {
  // Memoized projects data for better performance
  const projects = useMemo(
    () => [
      {
        name: "Cab Rental",
        description:
          "A car rental website is an online platform that allows users to rent cars for personal or business use.",
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Tailwind"],
        image: cabImage,
        github: "https://github.com/iamriishav/RideWithMe-CabService",
        live: "https://ridewithmecabservice.000webhostapp.com/",
      },
      {
        name: "Lawyeric",
        description:
          "Lawyeric is a web application that provides legal services such as legal document preparation and document delivery.",
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        image: lawyericImage,
        github: "https://github.com/iamriishav/lawyeric",
        live: "https://lawyeric.000webhostapp.com/",
      },
      {
        name: "Daily Quotes",
        description:
          "A daily inspiration app that delivers motivational quotes from famous personalities and thinkers.",
        technologies: ["HTML", "CSS", "JavaScript", "Quote API"],
        image: quoteImage,
        github: "https://github.com/iamriishav/yourdailyquotes",
        live: "https://yourdailyquotes.netlify.app/",
      },
      {
        name: "Skyline Weather App",
        description:
          "Real-time weather web app with city-specific search functionality.",
        technologies: [
          "React.js",
          "CSS",
          "OpenWeatherMap API",
          "Responsive Design",
        ],
        image: weatherImage,
        github: "https://github.com/iamriishav/skyline",
        live: "https://skylineweather.vercel.app/",
      },
    ],
    []
  );

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...FADE_IN_UP} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Showcase of my work and contributions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              {...FADE_IN_UP}
              whileHover={PROJECT_CARD_HOVER}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-2xl will-change-transform"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105 will-change-transform"
                  loading="lazy"
                />

                {/* Optimized Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                    <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                    <p className="text-gray-200 mb-4 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-lg hover:bg-white/30 transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm font-medium">GitHub</span>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-500/80 backdrop-blur-sm border border-blue-400/50 text-white rounded-lg hover:bg-blue-500/90 transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm font-medium">Live</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {project.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium"
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
}
