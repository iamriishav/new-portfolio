import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-[10px] z-50 border-b border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 ${isScrolled ? 'left-1/2 transform -translate-x-1/2 w-auto rounded-full mt-4' : ''}`}>
      <div className={`${isScrolled ? 'px-8' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}`}>
        <div className="flex items-center justify-between h-16">
          {!isScrolled && (
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-gradient">Portfolio</span>
            </div>
          )}
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className={`${isScrolled ? 'flex items-center space-x-2' : 'ml-10 flex items-baseline space-x-4'}`}>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-sky-50 dark:hover:bg-sky-900/30 hover:scale-105 hover:shadow-lg relative overflow-hidden group"
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full"></div>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-[10px] shadow-lg border-b border-gray-200/50 dark:border-gray-700/50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 font-medium w-full text-left"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
