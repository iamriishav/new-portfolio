import { useTheme } from "@/components/theme-provider";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Moon, Sun } from "lucide-react";
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
  navButton:
    "px-3 py-2 rounded-full text-sm font-medium relative z-10 transform focus:outline-none",
  textColors:
    "text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400",
} as const;
// Optimized utility functions
const throttle = <T extends (...args: unknown[]) => void>(
  func: T,
  delay: number
): T => {
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
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

// Optimized theme color calculation
const getThemeColor = (theme: string, systemTheme: string): string => {
  if (theme === "dark") return "#fff";
  if (theme === "light") return "#000";
  return systemTheme === "dark" ? "#fff" : "#000";
};
export default function Navigation() {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [systemTheme, setSystemTheme] = useState(getSystemTheme);
  const [indicatorStyle, setIndicatorStyle] = useState<IndicatorStyle>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [activeSection, setActiveSection] = useState<string>("home");

  // Memoized scroll handler with throttling
  const handleScroll = useMemo(
    () =>
      throttle(
        () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD),
        SCROLL_THROTTLE_DELAY
      ),
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

    return () =>
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, [handleSystemThemeChange]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Optimized scroll function
  const scrollToSection = useCallback((sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Theme toggle function
  const toggleTheme = useCallback(() => {
    if (theme === "system") {
      // If currently on system theme, switch to the opposite of system preference
      setTheme(systemTheme === "dark" ? "light" : "dark");
    } else {
      // If already on explicit theme, toggle between light and dark
      setTheme(theme === "dark" ? "light" : "dark");
    }
  }, [theme, setTheme, systemTheme]);

  // Get effective theme (resolves "system" to actual theme)
  const effectiveTheme = useMemo(() => {
    return theme === "system" ? systemTheme : theme;
  }, [theme, systemTheme]);

  // Memoized theme color
  const bracketColor = useMemo(
    () => getThemeColor(effectiveTheme, systemTheme),
    [effectiveTheme, systemTheme]
  );

  // Memoized logo component
  const Logo = useMemo(
    () => (
      <a href="/" className="text-2xl font-bold" aria-label="Go to home">
        <span style={{ color: bracketColor }}>&lt;</span>
        <span className="text-gradient"> Rishav </span>
        <span style={{ color: bracketColor }}>/&gt;</span>
      </a>
    ),
    [bracketColor]
  );

  // Helper to move indicator to nav item by id
  const moveIndicatorToNavItem = useCallback(
    (itemId: string, show: boolean = true) => {
      const navButton = document.querySelector(
        `button[data-nav-id='${itemId}']`
      );
      const container = navButton?.parentElement;
      if (!navButton || !container) return;
      const containerRect = container.getBoundingClientRect();
      const buttonRect = navButton.getBoundingClientRect();
      setIndicatorStyle({
        left: buttonRect.left - containerRect.left,
        width: buttonRect.width,
        opacity: show ? 1 : 0,
      });
    },
    []
  );

  // Nav hover handler
  const handleNavHover = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const button = event.currentTarget;
      moveIndicatorToNavItem(
        button.getAttribute("data-nav-id") || "home",
        true
      );
    },
    [moveIndicatorToNavItem]
  );

  const handleNavLeave = useCallback(() => {
    // Only hide indicator if on home, else keep it on active section
    if (activeSection === "home") {
      setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
    } else {
      moveIndicatorToNavItem(activeSection, true);
    }
  }, [activeSection, moveIndicatorToNavItem]);
  // Track section in view
  useEffect(() => {
    const handleSectionScroll = () => {
      let found = "home";
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            found = item.id;
            break;
          }
        }
      }
      setActiveSection(found);
    };
    window.addEventListener("scroll", handleSectionScroll, { passive: true });
    handleSectionScroll();
    return () => window.removeEventListener("scroll", handleSectionScroll);
  }, []);

  // Move indicator to active section when it changes (except home)
  useEffect(() => {
    if (activeSection !== "home") {
      moveIndicatorToNavItem(activeSection, true);
    } else {
      setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [activeSection, moveIndicatorToNavItem]);

  // Optimized navigation styles with better performance
  const navStyles = useMemo(() => {
    const baseClasses =
      "fixed top-0 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 dark:bg-gray-900/80 backdrop-blur-[4px] border-b border-gray-300/60 dark:border-gray-700/50 shadow-lg dark:shadow-gray-900/20 transition-all duration-500 ease-in-out";

    // Expand to 90% width on home tab, shrink to current width otherwise
    const isHome = activeSection === "home";
    return {
      main: `${baseClasses} ${
        isHome ? "w-4/5 rounded-full mt-4" : "w-4/5 lg:w-3/5 rounded-full mt-4"
      }`,
      container: `${COMMON_CLASSES.transition} duration-500 ease-in-out ${
        isHome ? "w-5/5 mx-auto px-8" : "px-8"
      }`,
      desktop: `${COMMON_CLASSES.transition} flex items-center space-x-2`,
    };
  }, [activeSection]);
  // Optimized indicator style object
  const indicatorProps = useMemo(
    () => ({
      className:
        "absolute bg-gradient-to-r from-blue-500/30 to-blue-600/30 dark:from-blue-400/30 dark:to-blue-500/30 rounded-full transition-all duration-300 ease-out pointer-events-none",
      style: {
        left: `${indicatorStyle.left}px`,
        width: `${indicatorStyle.width}px`,
        height: "40px",
        top: "50%",
        transform: "translateY(-50%)",
        opacity: indicatorStyle.opacity,
      },
    }),
    [indicatorStyle]
  );

  return (
    <nav
      className={navStyles.main}
      style={{
        transitionProperty:
          "width, margin, border-radius, background-color, box-shadow",
      }}
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
            <div className="flex w-full items-center justify-between px-8">
              {/* Title aligned left */}
              <div className="flex-shrink-0">{Logo}</div>
              {/* Nav items and theme toggle aligned right */}
              <div className="flex items-center space-x-6">
                <nav role="navigation" aria-label="Desktop navigation">
                  <div
                    className={`${navStyles.desktop} relative`}
                    onMouseLeave={handleNavLeave}
                  >
                    {/* Sliding background indicator */}
                    <div {...indicatorProps} />
                    {NAV_ITEMS.map((item) => (
                      <button
                        key={item.id}
                        data-nav-id={item.id}
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
                {/* Theme Toggle Button - Desktop Only */}
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-gray-100/80 dark:bg-gray-800/80 hover:bg-gray-200/80 dark:hover:bg-gray-700/80 text-gray-800 dark:text-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-300/50 dark:border-gray-600/50"
                  aria-label={`Switch to ${
                    effectiveTheme === "dark" ? "light" : "dark"
                  } mode`}
                  type="button"
                >
                  {effectiveTheme === "dark" ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
