import { motion } from "framer-motion";
import { Linkedin, Github, Twitter } from "lucide-react";

export default function Footer() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Professional Portfolio</h3>
            <p className="text-gray-400 dark:text-gray-300">
              Senior Quality Engineer passionate about software excellence and continuous improvement.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/iamriishav" className="text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors">
                <Linkedin className="w-8 h-8" />
              </a>
              <a href="https://github.com/iamriishav" className="text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors">
                <Github className="w-8 h-8" />
              </a>
              <a href="https://x.com/iamriishav" className="text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors">
                <Twitter className="w-8 h-8" />
              </a>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          {...fadeInUp}
          className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400 dark:text-gray-300">
            Created with ❤️ by Rishav
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
