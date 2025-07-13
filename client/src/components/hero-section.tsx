import { motion } from "framer-motion";
import { Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@assets/profile_1752401362177.webp";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    window.open("/api/resume", "_blank");
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center hero-gradient relative overflow-hidden">
      {/* Modern background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="mb-8"
          >
            <div className="mx-auto w-52 h-52 mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full blur opacity-20 animate-pulse"></div>
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover rounded-full border-4 border-white/30 shadow-2xl relative z-10"
              />
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            Senior Quality Engineer
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Passionate about software quality and engineering excellence at Persistent Systems
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button
              onClick={scrollToContact}
              className="bg-white text-purple-600 hover:bg-gray-50 px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button
              onClick={handleDownloadResume}
              variant="outline"
              className="glass-effect text-white border-white/30 hover:bg-white/10 px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
