import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function ExperienceSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true }
  };

  const experiences = [
    {
      title: "Senior Quality Engineer",
      company: "Persistent Systems – (Client – Cisco)",
      period: "Nov 2024 - Present",
      status: "current",
      description: "Automated GUI test cases for Configuration Template and Configuration Backup & Restore features. Performed regression testing on daily builds, identified 40+ defects including critical bugs. Developed 200+ automation scripts reducing manual testing time by 40% and increasing coverage by 60%.",
      skills: ["GUI Automation", "Regression Testing", "Python", "Test Coverage", "Defect Management"]
    },
    {
      title: "Software Engineer Trainee",
      company: "Cisco",
      period: "Nov 2023 - Nov 2024",
      status: "previous",
      description: "Worked on Performance Monitoring, Faults, Grouping, and Inventory features. Developed 150+ automation scripts, setup and maintained CelVM regression environment. Managed backups of golden configurations and upgraded device build images.",
      skills: ["Performance Monitoring", "Automation Scripts", "Environment Setup", "Configuration Management"]
    },
    {
      title: "B.Tech Graduate",
      company: "Birsa Institute of Technology, Sindri",
      period: "Aug 2019 - May 2023",
      status: "education",
      description: "Completed Bachelor of Technology in Information Technology with GPA 8.06/10. Developed strong foundation in computer science principles and programming concepts.",
      skills: ["Information Technology", "Software Engineering", "Data Structures", "Algorithms"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "current": return "bg-blue-600";
      case "previous": return "bg-gray-400";
      case "education": return "bg-green-600";
      default: return "bg-gray-400";
    }
  };

  const getBadgeVariant = (status: string) => {
    switch (status) {
      case "current": return "default";
      case "previous": return "secondary";
      case "education": return "outline";
      default: return "secondary";
    }
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Experience</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My professional journey in software quality engineering
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-600"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-12"
              >
                <div className={`absolute left-6 w-4 h-4 ${getStatusColor(exp.status)} rounded-full border-4 border-white shadow-lg`}></div>
                <div className="ml-20 modern-card rotating-border p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{exp.title}</h3>
                    <span className={`text-sm font-bold px-3 py-1 rounded-full ${
                      exp.status === 'current' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' : 
                      exp.status === 'education' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                    }`}>
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 font-semibold mb-4 text-lg">{exp.company}</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant={getBadgeVariant(exp.status)} className="text-sm px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
