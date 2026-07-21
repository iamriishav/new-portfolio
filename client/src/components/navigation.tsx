import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Work" },
  { id: "contact", label: "Contact" },
] as const;

const RESUME_URL = "/Rishav_Kumar_Rajak_Resume.pdf";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);
  const navigationTargetRef = useRef<string | null>(null);
  const scrollEndTimerRef = useRef<number | null>(null);

  useEffect(() => {
    let raf = 0;

    const getVisibleSection = () => {
      let found: string = "home";
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom > 140) {
          found = item.id;
          break;
        }
      }
      return found;
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);

        if (navigationTargetRef.current) {
          if (scrollEndTimerRef.current !== null) {
            window.clearTimeout(scrollEndTimerRef.current);
          }
          scrollEndTimerRef.current = window.setTimeout(() => {
            navigationTargetRef.current = null;
            scrollEndTimerRef.current = null;
            setActiveSection(getVisibleSection());
          }, 150);
        } else {
          setActiveSection(getVisibleSection());
        }

        raf = 0;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
      if (scrollEndTimerRef.current !== null) {
        window.clearTimeout(scrollEndTimerRef.current);
      }
    };
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    navigationTargetRef.current = id;
    setActiveSection(id);

    if (scrollEndTimerRef.current !== null) {
      window.clearTimeout(scrollEndTimerRef.current);
    }
    scrollEndTimerRef.current = window.setTimeout(() => {
      navigationTargetRef.current = null;
      scrollEndTimerRef.current = null;
    }, 1200);

    section.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "glass" : "border-b border-transparent bg-transparent"
        }`}
      role="banner"
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8"
      >
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="text-lg font-semibold tracking-tight text-foreground"
          aria-label="Go to top"
        >
          rishav<span className="text-gradient">.dev</span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.slice(1).map((item) => {
            const active = activeSection === item.id;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {active && (
                    <motion.span
                      layoutId="active-nav-item"
                      aria-hidden
                      className="absolute inset-0 rounded-full bg-foreground/10 ring-1 ring-inset ring-foreground/10"
                      transition={{ type: "spring", stiffness: 500, damping: 38 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={RESUME_URL}
            download
            className="hidden rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground md:inline-block"
          >
            Resume
          </a>
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="group inline-flex items-center gap-1 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
        </div>
      </nav>
    </header>
  );
}
