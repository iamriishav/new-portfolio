import { motion } from "framer-motion";
import { Linkedin, Github, Mail, MapPin, Phone, Heart, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true, margin: "-50px" }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "rajakrishav395@gmail.com",
      href: "mailto:rajakrishav395@gmail.com"
    },
    {
      icon: Phone,
      label: "+91 94727 42873",
      href: "tel:+919472742873"
    },
    {
      icon: MapPin,
      label: "Bangalore, India",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/iamriishav",
      label: "LinkedIn",
      color: "hover:bg-blue-600"
    },
    {
      icon: Github,
      href: "https://github.com/iamriishav",
      label: "GitHub", 
      color: "hover:bg-gray-800"
    },
    {
      icon: Mail,
      href: "mailto:rajakrishav395@gmail.com",
      label: "Email",
      color: "hover:bg-red-500"
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid lg:grid-cols-4 md:grid-cols-2 gap-12"
        >
          {/* Brand Section */}
          <motion.div variants={fadeInUp} className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-4">
                <span className="text-white">&lt;</span>
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Rishav </span>
                <span className="text-white">/&gt;</span>
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Senior Quality Engineer passionate about building robust test frameworks and ensuring software excellence. 
                Let's create amazing digital experiences together.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-12 h-12 bg-gray-700/50 border border-gray-600 rounded-xl flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp} className="lg:col-span-1">
            <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <motion.li key={link.id} whileHover={{ x: 5 }}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeInUp} className="lg:col-span-1">
            <h4 className="text-xl font-semibold mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-white" />
                  </div>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {info.label}
                    </a>
                  ) : (
                    <span className="text-gray-300">{info.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter/CTA */}
          <motion.div variants={fadeInUp} className="lg:col-span-1">
            <h4 className="text-xl font-semibold mb-6 text-white">Let's Connect</h4>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Ready to work together? Let's discuss your next project and bring your ideas to life.
            </p>
            <motion.button
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={fadeInUp}
          className="border-t border-gray-700/50 mt-12 pt-8"
        >
          <div className="flex justify-center items-center">
            <div className="flex items-center space-x-2 text-gray-300">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              <span>and lots of coffee ☕</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </footer>
  );
}
