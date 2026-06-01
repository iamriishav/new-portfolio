import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Github, Mail, ArrowUp, Heart } from "lucide-react";
import { useState, useEffect } from "react";

const SOCIAL = [
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/iamriishav",
    label: "LinkedIn",
  },
  {
    icon: Github,
    href: "https://github.com/iamriishav",
    label: "GitHub",
  },
  {
    icon: Mail,
    href: "mailto:rajakrishav395@gmail.com",
    label: "Email",
  },
] as const;

const QUICK_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        const top = window.scrollY;
        const max =
          document.documentElement.scrollHeight - window.innerHeight;
        setShowScrollTop(top > 500);
        setProgress(max > 0 ? Math.min(1, Math.max(0, top / max)) : 0);
        raf = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const dashoffset = circumference * (1 - progress);

  return (
    <footer className="relative border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="text-xl font-semibold tracking-tight">
              <span className="text-foreground">rishav</span>
              <span className="text-gradient">.dev</span>
            </p>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Senior Quality Engineer building automation, test frameworks, and
              tooling that keeps shipping software easy.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Quick links
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.id)}
                    className="text-muted-foreground transition hover:text-foreground"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Online
            </p>
            <div className="mt-4 flex gap-2">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary text-foreground transition hover:-translate-y-0.5 hover:border-foreground/40"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              Bengaluru, IN · Open to new opportunities
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Rishav Kumar Rajak. All rights reserved.</p>
          <p className="inline-flex items-center gap-1.5">
            <span>Made with</span>
            <Heart
              className="h-3.5 w-3.5 fill-current text-red-500 animate-pulse"
              aria-hidden
            />
            <span>and lots of coffee &#9749;</span>
          </p>
        </div>
      </div>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            whileHover={{ y: -2 }}
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background shadow-xl backdrop-blur"
          >
            <svg
              viewBox="0 0 48 48"
              className="absolute inset-0 h-full w-full -rotate-90"
              aria-hidden
            >
              <circle
                cx="24"
                cy="24"
                r={radius}
                fill="none"
                className="stroke-border"
                strokeWidth="3"
              />
              <circle
                cx="24"
                cy="24"
                r={radius}
                fill="none"
                className="stroke-foreground"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={dashoffset}
                style={{ transition: "stroke-dashoffset 0.2s linear" }}
              />
            </svg>
            <ArrowUp className="relative h-4 w-4 text-foreground" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
