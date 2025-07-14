import { useTheme } from "@/components/theme-provider";
import React, { useState, useEffect, useCallback, useMemo } from "react";
// Types
interface IndicatorStyle {
  left: number;
  width: number;
  opacity: number;
}

// Constants
const NAV_ITEMS: Readonly<Array<{ id: string; label: string }>> = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

const SCROLL_THRESHOLD = 100;
const SCROLL_THROTTLE_DELAY = 16; // ~60fps

// CSS class constants
const COMMON_CLASSES = {
  transition: "transition-all duration-300",
  navButton: "px-3 py-2 rounded-full text-sm font-medium hover:scale-105 hover:shadow-lg relative z-10 transform focus:outline-none",
  textColors: "text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400",
} as const;
// Optimized utility functions
const throttle = <T extends (...args: unknown[]) => void>(func: T, delay: number): T => {
  let timeoutId: NodeJS.Timeout | null = null;
  let lastExecTime = 0;
  
  return ((...args: Parameters<T>) => {
    const currentTime = Date.now();
    
    if (currentTime - lastExecTime > delay) {
      func(...args);
      lastExecTime = currentTime;
    } else {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  }) as T;
};

const getSystemTheme = (): "dark" | "light" => 
  typeof window !== "undefined" && window.matchMedia?.("(prefers-color-scheme: dark)").matches 
    ? "dark" 
    : "light";

// Optimized theme color calculation
const getThemeColor = (theme: string, systemTheme: string): string => {
  if (theme === "dark") return "#fff";
  if (theme === "light") return "#000";
  return systemTheme === "dark" ? "#fff" : "#000";
};
export default function Navigation() {
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [systemTheme, setSystemTheme] = useState(getSystemTheme);
  const [indicatorStyle, setIndicatorStyle] = useState<IndicatorStyle>({ 
    left: 0, 
    width: 0, 
    opacity: 0 
  });

  // Memoized scroll handler with throttling
  const handleScroll = useMemo(
    () => throttle(() => setIsScrolled(window.scrollY > SCROLL_THRESHOLD), SCROLL_THROTTLE_DELAY),
    []
  );

  // Memoized system theme change handler
  const handleSystemThemeChange = useCallback((e: MediaQueryListEvent) => {
    setSystemTheme(e.matches ? "dark" : "light");
  }, []);

  // Effects
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleSystemThemeChange);
    
    return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, [handleSystemThemeChange]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Optimized scroll function
  const scrollToSection = useCallback((sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Memoized theme color
  const bracketColor = useMemo(() => getThemeColor(theme, systemTheme), [theme, systemTheme]);

  // Memoized logo component
  const Logo = useMemo(() => (
    <span className="text-2xl font-bold">
      <span style={{ color: bracketColor }}>&lt;</span>
      <span className="text-gradient"> Rishav </span>
      <span style={{ color: bracketColor }}>/&gt;</span>
    </span>
  ), [bracketColor]);

  // Optimized nav hover handler
  const handleNavHover = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const container = button.parentElement;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    
    setIndicatorStyle({
      left: buttonRect.left - containerRect.left,
      width: buttonRect.width,
      opacity: 1,
    });
  }, []);

  const handleNavLeave = useCallback(() => {
    setIndicatorStyle(prev => ({ ...prev, opacity: 0 }));
  }, []);

  // Optimized navigation styles with better performance
  const navStyles = useMemo(() => {
    const baseClasses = "fixed top-0 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 dark:bg-gray-900/80 backdrop-blur-[12px] border-b border-gray-300/60 dark:border-gray-700/50 shadow-lg dark:shadow-gray-900/20 transition-all duration-500 ease-in-out";
    
    return {
      main: `${baseClasses} ${isScrolled ? "w-4/5 lg:w-3/5 rounded-full mt-4" : "w-full rounded-none mt-0"}`,
      container: `${COMMON_CLASSES.transition} duration-500 ease-in-out ${isScrolled ? "px-8" : "w-4/5 lg:w-3/5 mx-auto px-4 sm:px-6 lg:px-8"}`,
      desktop: `${COMMON_CLASSES.transition} ${isScrolled ? "flex items-center space-x-2" : "ml-10 flex items-baseline space-x-4"}`,
    };
  }, [isScrolled]);
  // Optimized indicator style object
  const indicatorProps = useMemo(() => ({
    className: "absolute bg-gradient-to-r from-blue-500/15 to-blue-600/15 dark:from-blue-400/15 dark:to-blue-500/15 rounded-full transition-all duration-300 ease-out pointer-events-none",
    style: {
      left: `${indicatorStyle.left}px`,
      width: `${indicatorStyle.width}px`,
      height: '40px',
      top: '50%',
      transform: 'translateY(-50%)',
      opacity: indicatorStyle.opacity,
    }
  }), [indicatorStyle]);

  return (
    <nav
      className={navStyles.main}
      style={{ transitionProperty: "width, margin, border-radius, background-color, box-shadow" }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className={navStyles.container}>
        <div className="flex items-center justify-between h-16 transition-all duration-500 ease-in-out">
          {/* Mobile: Only show title centered */}
          <div className="flex w-full items-center justify-center md:hidden">
            {Logo}
          </div>
          
          {/* Desktop/Tablet: Show title and nav items */}
          <div className="hidden md:flex w-full items-center justify-between">
            <div className={`flex-shrink-0 transition-all duration-300 ${isScrolled ? "hidden md:block" : "block"}`}>
              {Logo}
            </div>
            
            <nav role="navigation" aria-label="Desktop navigation">
              <div className={`${navStyles.desktop} relative`} onMouseLeave={handleNavLeave}>
                {/* Sliding background indicator */}
                <div {...indicatorProps} />
                
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    onMouseEnter={handleNavHover}
                    className={`${COMMON_CLASSES.textColors} ${COMMON_CLASSES.navButton} ${COMMON_CLASSES.transition}`}
                    aria-label={`Navigate to ${item.label} section`}
                    type="button"
                  >
                    <span className="relative z-10">{item.label}</span>
                  </button>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
}
