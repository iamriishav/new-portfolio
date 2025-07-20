import { motion } from "framer-motion";
import {
  Mail,
  Download,
  Mouse,
  Github,
  Linkedin,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@assets/profile_1752401362177.webp";
import profileResume from "@assets/resume_1752404153091.pdf";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Intersection Observer to detect if home section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: "-100px 0px", // Account for navbar height
      }
    );

    const homeSection = document.getElementById("home");
    if (homeSection) {
      observer.observe(homeSection);
    }

    return () => {
      if (homeSection) {
        observer.unobserve(homeSection);
      }
    };
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = profileResume;
    link.download = "Rishav_Kumar_Rajak_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/iamriishav",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/iamriishav",
      label: "LinkedIn",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Main gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-cyan-600/20"></div>

        {/* Floating orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, 120, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl"
        />

        {/* Cursor-following glow */}
        <div
          className="absolute pointer-events-none opacity-30"
          style={{
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(147, 51, 234, 0.1) 30%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(40px)",
            transform: "translate3d(0, 0, 0)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <div className="flex items-center gap-2 text-blue-400 mb-4">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">India</span>
              </div>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 tracking-tight">
                Rishav Kumar
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Rajak
                </span>
              </h1>
              <div className="text-xl lg:text-2xl text-gray-300 mb-6 leading-relaxed">
                <span className="block mb-2">Senior Quality Engineer</span>
                <span className="text-blue-400 font-semibold">
                  @Persistent Systems
                </span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-400 mb-8 leading-relaxed max-w-xl"
            >
              Passionate automation engineer with 1.5+ years of experience in
              building robust test frameworks and ensuring software quality.
              Specialized in GUI automation and regression testing.
            </motion.p>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 border-0"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button
                onClick={handleDownloadResume}
                variant="outline"
                className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 px-8 py-3 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 bg-transparent"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex gap-4 justify-center md:justify-start"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-gray-800/50 border border-gray-700 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700/50 hover:border-gray-600 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right side - Profile image and stats */}
          <div className="order-1 lg:order-2 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
              className="relative mb-8"
            >
              {/* Profile image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Animated rings */}
                <div
                  className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-spin"
                  style={{ animationDuration: "10s" }}
                ></div>
                <div
                  className="absolute inset-4 rounded-full border border-purple-500/20 animate-spin"
                  style={{
                    animationDuration: "15s",
                    animationDirection: "reverse",
                  }}
                ></div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>

                {/* Profile image */}
                <img
                  src={profileImage}
                  alt="Rishav Kumar Rajak"
                  className="relative z-10 w-full h-full object-cover rounded-full border-4 border-gray-700 shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Stats cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-2 gap-4 w-full max-w-sm"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">
                  1.5+
                </div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">
                  350+
                </div>
                <div className="text-sm text-gray-400">Test Scripts</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - positioned at bottom center of viewport, hidden on mobile and when not in home section */}
      {isInView && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="hidden md:block fixed bottom-8 left-1/2 transform -translate-x-1/2 -translate-x-4 z-20"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <Mouse className="w-5 h-5" />
          </motion.button>
        </motion.div>
      )}
    </section>
  );
}
