import { motion } from "framer-motion";
import { PlusCircle } from "lucide-react";

export default function ProjectsSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true }
  };

  const projectPlaceholders = Array.from({ length: 3 }, (_, i) => i);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Showcase of my work and contributions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectPlaceholders.map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="modern-card p-8 rounded-2xl shadow-lg border-2 border-dashed border-purple-200 hover:border-purple-400 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-center py-8">
                <div className="p-4 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <PlusCircle className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Project Coming Soon</h3>
                <p className="text-gray-600 text-lg">
                  This section will showcase my professional projects and contributions.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
