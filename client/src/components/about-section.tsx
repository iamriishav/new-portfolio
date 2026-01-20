import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Building,
  Linkedin,
  Github,
  Twitter,
  MapPin,
  Calendar,
  Award,
  Quote,
} from "lucide-react";
import profileImage from "@assets/profile_1752401362177.webp";
import { useMemo } from "react";

export default function AboutSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true },
  };

  const cardHover = {
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeOut" },
  };

  // Coding quotes that change on refresh
  const codingQuotes = [
    "Code is like humor. When you have to explain it, it's bad.",
    "First, solve the problem. Then, write the code.",
    "Experience is the name everyone gives to their mistakes.",
    "In order to be irreplaceable, one must always be different.",
    "Java is to JavaScript what car is to Carpet.",
    "Talk is cheap. Show me the code.",
    "The best error message is the one that never shows up.",
    "Code never lies, comments sometimes do.",
    "Programming isn't about what you know; it's about what you can figure out.",
    "The only way to learn a new programming language is by writing programs in it.",
    "Simplicity is the ultimate sophistication.",
    "Make it work, make it right, make it fast.",
    "Programs must be written for people to read, and only incidentally for machines to execute.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Before software can be reusable it first has to be usable.",
    "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.",
    "Testing leads to failure, and failure leads to understanding.",
    "Deleted code is debugged code.",
    "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
    "Walking on water and developing software from a specification are easy if both are frozen.",
    "It's not a bug - it's an undocumented feature.",
    "The most disastrous thing that you can ever learn is your first programming language.",
    "A good programmer is someone who always looks both ways before crossing a one-way street.",
    "Software undergoes beta testing shortly before it's released. Beta is Latin for 'still doesn't work.'",
    "If at first you don't succeed, call it version 1.0.",
    "Weeks of programming can save you hours of planning.",
    "There are only two kinds of programming languages: those people always bitch about and those nobody uses.",
    "Computers are fast; programmers keep it slow.",
    "To iterate is human, to recurse divine.",
    "Real programmers count from 0.",
    "A user interface is like a joke. If you have to explain it, it's not that good.",
    "If you think your users are idiots, only idiots will use it.",
    "The best thing about a boolean is even if you are wrong, you are only off by a bit."
  ];

  // Select a random quote on component mount
  const randomQuote = useMemo(() => {
    return codingQuotes[Math.floor(Math.random() * codingQuotes.length)];
  }, []);

  const achievements = [
    {
      icon: Award,
      title: "400+ Automation Scripts",
      description: "Reduced manual testing by 20%",
    },
    {
      icon: Calendar,
      title: "2+ Years Experience",
      description: "In quality engineering",
    },
    {
      icon: MapPin,
      title: "Test Coverage",
      description: "Increased by 40%",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div {...fadeInUp} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate about software quality and continuous improvement
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Profile Card */}
          <motion.div
            {...fadeInUp}
            whileHover={cardHover}
            className="lg:col-span-1 h-full"
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm p-8 text-center h-full flex flex-col">
              <div className="flex-1 flex flex-col">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <img
                    src={profileImage}
                    alt="Rishav Kumar"
                    className="w-full h-full rounded-full object-cover border-4 border-gray-100 dark:border-gray-700"
                    draggable={false}
                    onContextMenu={e => e.preventDefault()}
                    onDragStart={e => e.preventDefault()}
                  />
                  <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-3 border-white dark:border-gray-800" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  Rishav Kumar
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Senior Quality Engineer
                </p>

                {/* Dynamic Coding Quote - Expanded */}
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-6 mb-6 relative flex-1 flex items-center">
                  <Quote className="w-5 h-5 text-gray-400 dark:text-gray-500 absolute top-4 left-4" />
                  <p className="text-base text-gray-600 dark:text-gray-400 italic font-medium text-center px-8 leading-relaxed">
                    "{randomQuote}"
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                <a
                  href="https://linkedin.com/in/iamriishav"
                  className="p-3 bg-gray-100 dark:bg-gray-700 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href="https://github.com/iamriishav"
                  className="p-3 bg-gray-100 dark:bg-gray-700 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href="https://x.com/iamriishav"
                  className="p-3 bg-gray-100 dark:bg-gray-700 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  <Twitter className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Content & Story */}
          <motion.div {...fadeInUp} className="lg:col-span-2 space-y-8">
            {/* Story */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                My Story
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  As a dedicated Senior Quality Engineer at Persistent Systems,
                  I bring 2+ years of experience specializing in GUI and API
                  automation, build validation, and test environments. I excel
                  in Python best practices, always seeking to contribute to
                  fast-paced, quality-focused engineering teams.
                </p>
                <p>
                  My journey began at Birsa Institute of Technology, where I
                  completed my B.Tech in Information Technology in 2023 with a
                  GPA of 8.06/10. This solid foundation led me to a trainee
                  position at Cisco Systems, where I spent a year developing
                  automation skills and understanding enterprise-level software
                  development.
                </p>
                <p>
                  Currently, I focus on GUI and API test automation, regression testing,
                  and have developed over 400 automation scripts that reduced
                  manual testing time by 20% and increased test coverage by 40%.
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid md:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm p-6 text-center"
                >
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div {...fadeInUp} className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 text-center mb-12">
            Career Journey
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Education */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center mr-4">
                  <GraduationCap className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                    Education
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    2019 - 2023
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                B.Tech in Information Technology from Birsa Institute of
                Technology, Sindri with GPA 8.06/10
              </p>
            </div>

            {/* Cisco */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mr-4">
                  <Building className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                    Cisco Systems
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    2023 - 2024
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Software Engineer Trainee - Developed automation skills and
                enterprise software understanding
              </p>
            </div>

            {/* Current Role */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center mr-4">
                  <Briefcase className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                    Persistent Systems
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    2024 - Present
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Senior Quality Engineer - Leading automation initiatives and
                quality assurance processes
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
