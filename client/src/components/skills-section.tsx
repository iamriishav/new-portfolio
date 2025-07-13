import { motion } from "framer-motion";
import { CheckCircle, Bot, Code, Wrench, GitBranch, Users, Award } from "lucide-react";

export default function SkillsSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true }
  };

  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      color: "text-sky-600",
      skills: ["Python", "HTML", "CSS", "PHP", "SQL"]
    },
    {
      icon: Bot,
      title: "Testing & Automation",
      color: "text-cyan-600",
      skills: ["Selenium", "pyATS", "GUI Automation", "Regression Testing", "Sanity Testing", "API Automation"]
    },
    {
      icon: Wrench,
      title: "Tools & Frameworks",
      color: "text-blue-600",
      skills: ["Jenkins", "Git", "GitHub", "Postman", "Jupyter Notebook", "Visual Studio Code"]
    },
    {
      icon: GitBranch,
      title: "DevOps & Environment",
      color: "text-teal-600",
      skills: ["Jenkins", "Git", "GitHub", "Linux", "Windows", "MacOS"]
    },
    {
      icon: Users,
      title: "AI & Productivity",
      color: "text-purple-600",
      skills: ["ChatGPT", "Github Copilot", "Google Gemini"]
    },
    {
      icon: Award,
      title: "Certifications",
      color: "text-green-600",
      skills: ["CCNA (Cisco)", "AWS Certified Cloud Practitioner (AWS)", "Python Developer (Persistent University)", "Automation Testing (Simplilearn)"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Technical Skills</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My expertise in quality engineering and software development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="modern-card p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <div className={`p-4 rounded-xl mr-4 bg-gradient-to-br from-sky-500 to-cyan-500`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{category.title}</h3>
              </div>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full mr-3"></div>
                    <span className="text-lg">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
