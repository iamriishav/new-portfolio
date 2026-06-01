import { useTheme } from "@/components/theme-provider";
import { useState, useEffect, useCallback, useMemo } from "react";
import { Moon, Sun } from "lucide-react";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

const getSystemTheme = (): "dark" | "light" =>
  typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

export default function Navigation() {
  const { theme, setTheme } = useTheme();
  const [systemTheme, setSystemTheme] = useState(getSystemTheme);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) =>
      setSystemTheme(e.matches ? "dark" : "light");
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        let found: string = "home";
        for (const item of NAV_ITEMS) {
          const el = document.getElementById(item.id);
          if (!el) continue;
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            found = item.id;
            break;
          }
        }
        setActiveSection(found);
        raf = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const effectiveTheme = useMemo(
    () => (theme === "system" ? systemTheme : theme),
    [theme, systemTheme]
  );

  const toggleTheme = useCallback(() => {
    setTheme(effectiveTheme === "dark" ? "light" : "dark");
  }, [effectiveTheme, setTheme]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
      role="banner"
    >
      <nav
        aria-label="Primary"
        className={`flex items-center gap-2 rounded-full border px-2 py-2 backdrop-blur-xl transition-all duration-300 ${scrolled
            ? "border-border bg-background/80 shadow-lg shadow-black/5 dark:shadow-black/40"
            : "border-transparent bg-background/40"
          }`}
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
          className="px-3 py-1.5 text-sm font-semibold tracking-tight"
          aria-label="Go to home"
        >
          <span className="text-foreground">rishav</span>
          <span className="text-gradient">.dev</span>
        </a>

        <div className="mx-1 hidden h-6 w-px bg-border md:block" aria-hidden />

        <ul className="hidden items-center gap-0.5 md:flex">
          {NAV_ITEMS.slice(1).map((item) => {
            const active = activeSection === item.id;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {active && (
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-full bg-foreground/5 ring-1 ring-inset ring-foreground/10 dark:bg-foreground/10"
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${effectiveTheme === "dark" ? "light" : "dark"
            } mode`}
          className="ml-1 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-secondary text-foreground transition-colors hover:bg-muted"
        >
          {effectiveTheme === "dark" ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </button>
      </nav>
    </header>
  );
}
