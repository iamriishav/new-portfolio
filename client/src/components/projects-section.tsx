import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import cabImage from "@assets/pro-cab_1752402845053.webp";
import lawyericImage from "@assets/pro-lawyeric_1752402845054.webp";
import quoteImage from "@assets/pro-quote_1752402845055.webp";
import weatherImage from "@assets/pro-weather_1752402863492.webp";

export default function ProjectsSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true }
  };

  const projects = [
    {
      name: "Cab Rental",
      description: "A car rental website is an online platform that allows users to rent cars for personal or business use.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Tailwind"],
      image: cabImage,
      github: "https://github.com/iamriishav/RideWithMe-CabService",
      live: "https://ridewithmecabservice.000webhostapp.com/"
    },
    {
      name: "Lawyeric",
      description: "Lawyeric is a web application that provides legal services such as legal document preparation and document delivery.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      image: lawyericImage,
      github: "https://github.com/iamriishav/lawyeric",
      live: "https://lawyeric.000webhostapp.com/"
    },
    {
      name: "Daily Quotes",
      description: "A daily inspiration app that delivers motivational quotes from famous personalities and thinkers to brighten your day.",
      technologies: ["HTML", "CSS", "JavaScript", "Quote API"],
      image: quoteImage,
      github: "https://github.com/iamriishav/yourdailyquotes",
      live: "https://yourdailyquotes.netlify.app/"
    },
    {
      name: "Skyline Weather App",
      description: "Real-time weather web app with city-specific search functionality using OpenWeatherMap API, built with React.js and styled with CSS.",
      technologies: ["React.js", "CSS", "OpenWeatherMap API", "Responsive Design"],
      image: weatherImage,
      github: "https://github.com/iamriishav/skyline",
      live: "https://skylineweather.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Showcase of my work and contributions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              className="modern-card project-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img 
                src={project.image} 
                alt={project.name}
                className="project-image rounded-t-2xl"
              />
              <div className="project-overlay">
                <h3 className="text-2xl font-bold text-white mb-3">{project.name}</h3>
                <p className="text-gray-200 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-sky-500 to-cyan-500 text-white text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">GitHub</span>
                  </a>
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white rounded-lg hover:from-sky-600 hover:to-cyan-600 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Live</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}