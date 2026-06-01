import { motion, useReducedMotion } from "framer-motion";
import {
  Bot,
  Code,
  Wrench,
  GitBranch,
  Sparkles,
  Award,
  Mail,
  Linkedin,
  Github,
  Calendar,
  MapPin,
  Quote,
  ArrowUpRight,
  Bug,
  Cpu,
  Zap,
  Target,
} from "lucide-react";
import profileImage from "@assets/profile_1752401362177.webp";

const SKILL_GROUPS = [
  {
    icon: Code,
    title: "Languages",
    skills: ["Python", "HTML", "CSS", "PHP", "SQL"],
  },
  {
    icon: Bot,
    title: "Testing & Automation",
    skills: [
      "Selenium",
      "pyATS",
      "GUI Automation",
      "Regression",
      "Sanity",
      "API Automation",
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["Jenkins", "Git", "GitHub", "Postman", "Jupyter", "VS Code"],
  },
  {
    icon: GitBranch,
    title: "DevOps",
    skills: ["Jenkins", "Git", "Linux", "Windows", "macOS"],
  },
  {
    icon: Sparkles,
    title: "AI & Productivity",
    skills: ["ChatGPT", "Copilot", "Gemini", "Cursor", "Claude"],
  },
  {
    icon: Award,
    title: "Certifications",
    skills: ["CCNA", "AWS CCP", "Python Dev", "Automation Testing"],
  },
] as const;

const STATS = [
  { icon: Cpu, label: "Automation scripts", value: "300+" },
  { icon: Bug, label: "Defects identified", value: "60+" },
  { icon: Target, label: "Coverage uplift", value: "40%" },
  { icon: Zap, label: "Time saved", value: "20%" },
] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

export default function BentoSection() {
  const prefersReducedMotion = useReducedMotion();

  const motionWrap = (delay = 0) =>
    prefersReducedMotion
      ? { initial: false, animate: false }
      : fadeUp(delay);

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          {...motionWrap()}
          className="mb-12 max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            About
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            A snapshot of who I am, what I do, and how I work.
          </h2>
        </motion.div>

        <div className="grid auto-rows-[minmax(0,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* About bio tile */}
          <motion.article
            {...motionWrap(0.05)}
            className="tile tile-glow group relative col-span-1 row-span-2 flex flex-col gap-6 p-7 sm:col-span-2 lg:row-span-2"
          >
            <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-border md:h-56">
              <img
                src={profileImage}
                alt="Rishav Kumar Rajak"
                className="absolute inset-0 h-full w-full object-cover"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
              <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-background/80 px-3 py-1 text-[11px] font-medium text-foreground backdrop-blur">
                <Calendar className="h-3 w-3" />
                Since 2023
              </span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">
                Rishav Kumar Rajak
              </h3>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                Senior Quality Engineer · Bengaluru, IN
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                Quality engineer with 2+ years of experience turning fragile
                manual workflows into resilient automation. I care about test
                clarity, fast feedback loops, and shipping software that holds
                up under real‑world conditions.
              </p>
            </div>
          </motion.article>

          {/* Stats tile */}
          <motion.article
            {...motionWrap(0.1)}
            className="tile tile-glow col-span-1 p-7 sm:col-span-2"
          >
            <div className="mb-5 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                By the numbers
              </p>
              <span className="text-xs text-muted-foreground">2023 – now</span>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-border bg-secondary/60 p-4"
                >
                  <s.icon className="mb-3 h-5 w-5 text-foreground/70" />
                  <div className="text-2xl font-bold text-foreground">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs font-medium text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.article>

          {/* Quick facts tile */}
          <motion.article
            {...motionWrap(0.15)}
            className="tile tile-glow col-span-1 flex flex-col justify-between p-7"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Currently
              </p>
              <p className="mt-3 text-xl font-semibold leading-snug text-foreground">
                Embedded with the Cisco team via Persistent Systems
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="chip">
                <MapPin className="h-3 w-3" />
                Bengaluru, IN
              </span>
              <span className="chip">
                <Sparkles className="h-3 w-3" />
                Open to roles
              </span>
            </div>
          </motion.article>

          {/* Quote tile */}
          <motion.article
            {...motionWrap(0.2)}
            className="tile tile-glow relative col-span-1 overflow-hidden p-7"
          >
            <Quote
              aria-hidden
              className="absolute -right-2 -top-2 h-20 w-24 text-foreground/5"
            />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Motto
            </p>
            <p className="mt-3 text-lg font-medium leading-snug text-foreground">
              “The best error message is the one that never shows up.”
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              — Thomas Fuchs
            </p>
          </motion.article>

          {/* Skills tile */}
          <motion.article
            id="skills"
            {...motionWrap(0.25)}
            className="tile tile-glow col-span-1 p-7 sm:col-span-2 lg:col-span-4"
          >
            <div className="mb-6 flex flex-wrap items-end justify-between gap-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Toolbox
                </p>
                <h3 className="mt-1 text-2xl font-bold text-foreground">
                  Technical skills
                </h3>
              </div>
              <p className="max-w-md text-sm text-muted-foreground">
                The stack I reach for when designing test frameworks and
                shipping reliable releases.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SKILL_GROUPS.map((group) => (
                <div
                  key={group.title}
                  className="rounded-2xl border border-border bg-secondary/40 p-5"
                >
                  <div className="mb-3 flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-background text-foreground/80 ring-1 ring-border">
                      <group.icon className="h-4 w-4" />
                    </span>
                    <h4 className="text-sm font-semibold text-foreground">
                      {group.title}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((s) => (
                      <span key={s} className="chip text-xs">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.article>

          {/* Featured project teaser tile */}
          <motion.a
            {...motionWrap(0.3)}
            href="#projects"
            className="tile tile-glow group relative col-span-1 flex flex-col gap-5 overflow-hidden p-6 sm:col-span-2 sm:p-7 lg:col-span-3"
          >
            <div className="flex items-start justify-between gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Featured work
              </p>
              <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </div>

            <h3 className="text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-primary sm:text-2xl">
              Side projects, prototypes & web experiments — built to learn
              new corners of the stack.
            </h3>

            <div className="flex flex-wrap gap-1.5">
              {["Skyline Weather", "Daily Quotes", "Lawyeric", "RideWithMe"].map(
                (name) => (
                  <span
                    key={name}
                    className="chip text-[11px] tracking-normal"
                  >
                    {name}
                  </span>
                )
              )}
            </div>

            <div className="mt-auto flex items-center justify-between gap-3 border-t border-border/60 pt-4">
              <span className="text-xs text-muted-foreground">
                4 projects
              </span>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-foreground transition-transform group-hover:translate-x-1">
                See all
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </motion.a>

          {/* Contact CTA tile */}
          <motion.a
            {...motionWrap(0.35)}
            href="#contact"
            className="tile tile-glow group col-span-1 flex flex-col justify-between p-7"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Let&apos;s talk
              </p>
              <p className="mt-3 text-xl font-semibold leading-snug text-foreground">
                Got an idea or a role I&apos;d be a fit for?
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2">
              <span
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-secondary text-foreground"
              >
                <Mail className="h-4 w-4" />
              </span>
              <span
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-secondary text-foreground"
              >
                <Linkedin className="h-4 w-4" />
              </span>
              <span
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-secondary text-foreground"
              >
                <Github className="h-4 w-4" />
              </span>
              <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
