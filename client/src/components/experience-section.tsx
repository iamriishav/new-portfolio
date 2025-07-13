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
      company: "Persistent Systems",
      period: "Current",
      status: "current",
      description: "Leading quality assurance initiatives and implementing comprehensive testing strategies for enterprise-level software applications. Responsible for automation framework development and continuous improvement processes.",
      skills: ["Test Automation", "Quality Assurance", "Team Leadership", "Process Improvement"]
    },
    {
      title: "Trainee",
      company: "Cisco Systems",
      period: "1 Year",
      status: "previous",
      description: "Gained hands-on experience in software development and quality assurance processes. Worked on various projects to understand enterprise-level software architecture and testing methodologies.",
      skills: ["Software Testing", "Bug Tracking", "Documentation", "Agile Methodology"]
    },
    {
      title: "B.Tech Graduate",
      company: "Birsa Institute of Technology, Sindri",
      period: "2023",
      status: "education",
      description: "Completed Bachelor of Technology with a strong foundation in computer science and engineering principles. Developed core technical skills and problem-solving capabilities.",
      skills: ["Computer Science", "Software Engineering", "Data Structures", "Algorithms"]
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
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                <div className="ml-20 bg-white p-6 rounded-lg shadow-md">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                    <span className={`text-sm font-medium ${
                      exp.status === 'current' ? 'text-blue-600' : 
                      exp.status === 'education' ? 'text-green-600' : 'text-gray-600'
                    }`}>
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-600 font-medium mb-2">{exp.company}</p>
                  <p className="text-gray-700 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant={getBadgeVariant(exp.status)}>
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
