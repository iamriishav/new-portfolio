import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useMemo, useState, useRef } from "react";

// Types
interface Experience {
  title: string;
  company: string;
  period: string;
  status: "current" | "previous" | "education";
  description: string;
  skills: string[];
}

type StatusColors = {
  [K in Experience["status"]]: string;
};

type BadgeVariants = {
  [K in Experience["status"]]: "default" | "secondary" | "outline";
};

// Constants
const EXPERIENCES: readonly Experience[] = [
  {
    title: "Senior Quality Engineer",
    company: "Persistent Systems - (Client - Cisco)",
    period: "Nov 2024 - Present",
    status: "current",
    description: "Automated GUI test cases for Configuration Template and Configuration Backup & Restore features. Performed regression testing on daily builds, identified 40+ defects including critical bugs. Developed 200+ automation scripts reducing manual testing time by 40% and increasing coverage by 60%.",
    skills: ["GUI Automation", "Regression Testing", "Python", "API Testing", "Defect Management"]
  },
  {
    title: "Software Engineer Trainee",
    company: "Cisco",
    period: "Nov 2023 - Nov 2024",
    status: "previous",
    description: "Worked on Performance Monitoring, Faults, Grouping, and Inventory features. Developed 150+ automation scripts, setup and maintained CelVM regression environment. Managed backups of golden configurations and upgraded device build images.",
    skills: ["GUI Automation", "Git", "Python", "Linux"]
  },
  {
    title: "B.Tech Graduate",
    company: "Birsa Institute of Technology, Sindri",
    period: "Aug 2019 - May 2023",
    status: "education",
    description: "Completed Bachelor of Technology in Information Technology with GPA 8.06/10. Developed strong foundation in computer science principles and programming concepts.",
    skills: ["Information Technology", "Software Engineering", "Data Structures", "Algorithms"]
  }
] as const;

const STATUS_COLORS: StatusColors = {
  current: "bg-blue-600",
  previous: "bg-gray-400",
  education: "bg-green-600",
} as const;

const FLARE_COLORS = {
  current: "rgba(37, 99, 235, 0.8) 0%, rgba(37, 99, 235, 0.4) 30%, rgba(37, 99, 235, 0.1) 60%, transparent 100%", // Blue
  previous: "rgba(156, 163, 175, 0.8) 0%, rgba(156, 163, 175, 0.4) 30%, rgba(156, 163, 175, 0.1) 60%, transparent 100%", // Gray
  education: "rgba(34, 197, 94, 0.8) 0%, rgba(34, 197, 94, 0.4) 30%, rgba(34, 197, 94, 0.1) 60%, transparent 100%", // Green
} as const;

const BADGE_VARIANTS: BadgeVariants = {
  current: "default",
  previous: "secondary",
  education: "outline",
} as const;

const PERIOD_STYLES = {
  current: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  education: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  previous: "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300",
} as const;

// Animation variants
const FADE_IN_UP = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true }
} as const;

const MOBILE_CARD_ANIMATION = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: 0.1 },
  viewport: { once: true, margin: "-20%" }
} as const;

const DESKTOP_CARD_ANIMATION = (index: number) => ({
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.5, delay: index * 0.2 },
  viewport: { once: true }
} as const);

// Optimized components
const ExperienceCard = ({ exp, index, isMobile }: { exp: Experience; index: number; isMobile: boolean }) => {
  const cardAnimation = isMobile ? MOBILE_CARD_ANIMATION : DESKTOP_CARD_ANIMATION(index);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  return (
    <motion.div
      {...cardAnimation}
      className={isMobile ? "w-full" : "relative mb-16"}
    >
      {!isMobile && (
        <div className={`absolute left-6 w-3 h-3 ${STATUS_COLORS[exp.status]} rounded-full border-2 border-white shadow-md z-10`} />
      )}
      
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`group relative bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden ${
          isMobile ? "p-8" : "ml-16 p-10"
        }`}
      >
        {/* Status indicator line */}
        <div className={`absolute top-0 left-0 w-1 h-full ${STATUS_COLORS[exp.status]}`} />
        
        {/* Cursor-following background flare */}
        <div
          className="absolute pointer-events-none transition-opacity duration-300"
          style={{
            left: mousePosition.x - 150,
            top: mousePosition.y - 150,
            width: '300px',
            height: '300px',
            opacity: isHovered ? 0.4 : 0,
            background: `radial-gradient(circle, ${FLARE_COLORS[exp.status]})`,
            borderRadius: '50%',
            filter: 'blur(15px)',
            transform: 'translate3d(0, 0, 0)', // Hardware acceleration
          }}
        />
        
        {/* Header Section */}
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {exp.title}
              </h3>
              {isMobile && (
                <div className={`w-2.5 h-2.5 ${STATUS_COLORS[exp.status]} rounded-full`} />
              )}
            </div>
            <p className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-3">
              {exp.company}
            </p>
          </div>
          
          <div className="lg:ml-6 flex-shrink-0">
            <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${PERIOD_STYLES[exp.status]}`}>
              {exp.period}
            </span>
          </div>
        </div>
        
        {/* Description */}
        <div className="relative z-10 mb-8">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
            {exp.description}
          </p>
        </div>
        
        {/* Skills Section */}
        <div className="relative z-10">
          <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">
            Key Skills
          </h4>
          <div className="flex flex-wrap gap-2">
            {exp.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ExperienceSection() {
  // Memoized section header
  const sectionHeader = useMemo(() => (
    <motion.div {...FADE_IN_UP} className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Experience</h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
        My professional journey in software quality engineering
      </p>
    </motion.div>
  ), []);

  return (
    <section 
      id="experience" 
      className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {sectionHeader}

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line - hidden on mobile */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-600 hidden md:block" />
            
            {/* Mobile: Stack cards vertically */}
            <div className="md:hidden space-y-8">
              {EXPERIENCES.map((exp, index) => (
                <ExperienceCard key={exp.title} exp={exp} index={index} isMobile={true} />
              ))}
            </div>

            {/* Desktop: Timeline layout */}
            <div className="hidden md:block">
              {EXPERIENCES.map((exp, index) => (
                <ExperienceCard key={exp.title} exp={exp} index={index} isMobile={false} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
