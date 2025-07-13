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
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey from B.Tech graduate to Senior Quality Engineer
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp} className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Education</h3>
              <div className="flex items-start space-x-3">
                <GraduationCap className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">B.Tech Graduate (2023)</p>
                  <p className="text-gray-600">Birsa Institute of Technology, Sindri</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Current Role</h3>
              <div className="flex items-start space-x-3">
                <Briefcase className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Senior Quality Engineer</p>
                  <p className="text-gray-600">Persistent Systems</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Previous Experience</h3>
              <div className="flex items-start space-x-3">
                <Building className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Trainee (1 Year)</p>
                  <p className="text-gray-600">Cisco Systems</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              As a dedicated Senior Quality Engineer at Persistent Systems, I bring a unique blend of technical expertise and quality assurance experience to every project I work on.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              My journey began at Birsa Institute of Technology, where I completed my B.Tech in 2023. This solid foundation led me to a trainee position at Cisco Systems, where I spent a year honing my technical skills and understanding enterprise-level software development.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Currently, I focus on ensuring software quality through comprehensive testing strategies, automation frameworks, and continuous improvement processes. My experience spans across multiple technologies and methodologies, always with a keen eye for detail and commitment to excellence.
            </p>
            <div className="flex space-x-4 mt-8">
              <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                <Linkedin className="w-8 h-8" />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                <Github className="w-8 h-8" />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                <Twitter className="w-8 h-8" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
