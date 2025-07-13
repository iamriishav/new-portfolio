import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Building, Linkedin, Github, Twitter } from "lucide-react";

export default function AboutSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My journey from B.Tech graduate to Senior Quality Engineer
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp} className="space-y-6">
            <div className="modern-card rotating-border p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Education</h3>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 text-lg">B.Tech Graduate (2023)</p>
                  <p className="text-gray-600 dark:text-gray-300">Birsa Institute of Technology, Sindri</p>
                </div>
              </div>
            </div>

            <div className="modern-card rotating-border p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Current Role</h3>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 text-lg">Senior Quality Engineer</p>
                  <p className="text-gray-600 dark:text-gray-300">Persistent Systems</p>
                </div>
              </div>
            </div>

            <div className="modern-card rotating-border p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Previous Experience</h3>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 text-lg">Trainee (1 Year)</p>
                  <p className="text-gray-600 dark:text-gray-300">Cisco Systems</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="space-y-6">
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              As a dedicated Senior Quality Engineer at Persistent Systems, I bring a unique blend of technical expertise and quality assurance experience to every project I work on.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              My journey began at Birsa Institute of Technology, where I completed my B.Tech in 2023. This solid foundation led me to a trainee position at Cisco Systems, where I spent a year honing my technical skills and understanding enterprise-level software development.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Currently, I focus on ensuring software quality through comprehensive testing strategies, automation frameworks, and continuous improvement processes. My experience spans across multiple technologies and methodologies, always with a keen eye for detail and commitment to excellence.
            </p>
            <div className="flex space-x-4 mt-8">
              <a href="#" className="text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 transition-colors">
                <Linkedin className="w-8 h-8" />
              </a>
              <a href="#" className="text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 transition-colors">
                <Github className="w-8 h-8" />
              </a>
              <a href="#" className="text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 transition-colors">
                <Twitter className="w-8 h-8" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
