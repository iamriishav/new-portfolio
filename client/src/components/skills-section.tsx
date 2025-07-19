import { motion } from "framer-motion";
import {
  CheckCircle,
  Bot,
  Code,
  Wrench,
  GitBranch,
  Users,
  Award,
} from "lucide-react";

export default function SkillsSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true },
  };

  const cardHover = {
    scale: 1.02,
    y: -5,
    transition: { duration: 0.3, ease: "easeOut" },
  };

  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Python", "HTML", "CSS", "PHP", "SQL"],
    },
    {
      icon: Bot,
      title: "Testing & Automation",
      skills: [
        "Selenium",
        "pyATS",
        "GUI Automation",
        "Regression Testing",
        "Sanity Testing",
        "API Automation",
      ],
    },
    {
      icon: Wrench,
      title: "Tools & Frameworks",
      skills: [
        "Jenkins",
        "Git",
        "GitHub",
        "Postman",
        "Jupyter Notebook",
        "Visual Studio Code",
      ],
    },
    {
      icon: GitBranch,
      title: "DevOps & Environment",
      skills: ["Jenkins", "Git", "GitHub", "Linux", "Windows", "MacOS"],
    },
    {
      icon: Users,
      title: "AI & Productivity",
      skills: ["ChatGPT", "Github Copilot", "Google Gemini"],
    },
    {
      icon: Award,
      title: "Certifications",
      skills: [
        "CCNA (Cisco)",
        "AWS Certified Cloud Practitioner (AWS)",
        "Python Developer (Persistent University)",
        "Automation Testing (Simplilearn)",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My expertise in quality engineering and software development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={cardHover}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Card Content */}
              <div className="p-8">
                {/* Icon Section */}
                <div className="flex items-center justify-center mb-6">
                  <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-700 group-hover:bg-gray-900 dark:group-hover:bg-gray-600 transition-colors duration-300">
                    <category.icon className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 text-center mb-6">
                  {category.title}
                </h3>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1 + skillIndex * 0.05,
                      }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      {/* Enhanced Skill Indicator */}
                      <div className="flex-shrink-0 w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full mr-4" />

                      {/* Enhanced Skill Text */}
                      <span className="text-base text-gray-800 dark:text-gray-200 font-medium leading-relaxed">
                        {skill}
                      </span>
                    </motion.div>
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
