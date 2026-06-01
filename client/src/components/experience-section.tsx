import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Sparkles, ArrowUpRight } from "lucide-react";

type Status = "current" | "previous" | "education";

interface Experience {
  title: string;
  company: string;
  location?: string;
  period: string;
  duration?: string;
  status: Status;
  description: string;
  highlights?: string[];
  skills: readonly string[];
}

const EXPERIENCES: readonly Experience[] = [
  {
    title: "Senior Quality Engineer",
    company: "Persistent Systems",
    location: "Client: Cisco · Bengaluru",
    period: "Nov 2024 — Present",
    duration: "Current role",
    status: "current",
    description:
      "Owning automation for Configuration Template and Configuration Backup & Restore. Run regression on daily builds, triage critical defects, and ship internal tooling that keeps the team unblocked.",
    highlights: [
      "300+ automation scripts shipped, cutting manual effort by 20%",
      "60+ defects caught — including several P1 blockers",
      "Test coverage lifted by 40% across owned modules",
    ],
    skills: [
      "GUI Automation",
      "Regression",
      "Python",
      "API Testing",
      "Defect Management",
    ],
  },
  {
    title: "Software Engineer Trainee",
    company: "Cisco",
    location: "Bengaluru",
    period: "Nov 2023 — Nov 2024",
    duration: "1 year",
    status: "previous",
    description:
      "Worked across Performance Monitoring, Faults, Grouping, and Inventory. Built and maintained the CelVM regression environment, automated 150+ flows, and managed golden-config backups & build image upgrades.",
    skills: ["GUI Automation", "Git", "Python", "Linux"],
  },
  {
    title: "B.Tech, Information Technology",
    company: "Birsa Institute of Technology, Sindri",
    location: "Dhanbad, Jharkhand",
    period: "Aug 2019 — May 2023",
    duration: "GPA 8.06 / 10",
    status: "education",
    description:
      "Built a strong CS foundation across data structures, algorithms, databases, and software engineering — the toolkit I rely on for systems thinking and test design today.",
    skills: ["IT", "Software Engineering", "DSA", "Databases"],
  },
];

const STATUS_META: Record<
  Status,
  {
    label: string;
    chip: string;
    stripe: string;
    icon: typeof Briefcase;
    iconBg: string;
  }
> = {
  current: {
    label: "Current",
    chip: "bg-sky-500/10 text-sky-700 ring-sky-500/30 dark:text-sky-300",
    stripe: "bg-sky-500",
    icon: Sparkles,
    iconBg: "bg-sky-500/15 text-sky-600 dark:text-sky-300",
  },
  previous: {
    label: "Previous",
    chip:
      "bg-violet-500/10 text-violet-700 ring-violet-500/30 dark:text-violet-300",
    stripe: "bg-violet-500",
    icon: Briefcase,
    iconBg: "bg-violet-500/15 text-violet-600 dark:text-violet-300",
  },
  education: {
    label: "Education",
    chip:
      "bg-emerald-500/10 text-emerald-700 ring-emerald-500/30 dark:text-emerald-300",
    stripe: "bg-emerald-500",
    icon: GraduationCap,
    iconBg: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-300",
  },
};

const fadeUp = (delay = 0) =>
({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
} as const);

const FeaturedTile = ({ exp, delay }: { exp: Experience; delay: number }) => {
  const meta = STATUS_META[exp.status];
  const Icon = meta.icon;

  return (
    <motion.article
      {...fadeUp(delay)}
      className="tile tile-glow relative col-span-1 row-span-2 flex flex-col gap-6 overflow-hidden p-7 md:p-9 sm:col-span-2 lg:col-span-4"
    >
      <div
        className={`absolute left-0 top-0 h-full w-1 ${meta.stripe}`}
        aria-hidden
      />

      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span
            className={`flex h-11 w-11 items-center justify-center rounded-xl ${meta.iconBg} ring-1 ring-inset ring-border`}
          >
            <Icon className="h-5 w-5" />
          </span>
          <div>
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ring-1 ring-inset ${meta.chip}`}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-current" />
              </span>
              {meta.label}
            </span>
            <p className="mt-1 text-xs text-muted-foreground">
              {exp.duration}
            </p>
          </div>
        </div>
        <span className="text-xs font-medium text-muted-foreground">
          {exp.period}
        </span>
      </div>

      <div>
        <h3 className="text-2xl font-bold leading-tight text-foreground md:text-3xl">
          {exp.title}
        </h3>
        <p className="mt-1.5 text-base font-semibold text-foreground/80">
          {exp.company}
        </p>
        {exp.location && (
          <p className="mt-0.5 text-sm text-muted-foreground">
            {exp.location}
          </p>
        )}
      </div>

      <p className="text-[15px] leading-relaxed text-muted-foreground">
        {exp.description}
      </p>

      {exp.highlights && (
        <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {exp.highlights.map((h) => (
            <li
              key={h}
              className="flex items-start gap-2.5 rounded-2xl border border-border bg-secondary/40 p-3.5"
            >
              <ArrowUpRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-foreground/70" />
              <span className="text-sm leading-snug text-foreground/90">
                {h}
              </span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Stack
        </p>
        <div className="flex flex-wrap gap-1.5">
          {exp.skills.map((s) => (
            <span key={s} className="chip text-xs">
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

const CompactTile = ({ exp, delay }: { exp: Experience; delay: number }) => {
  const meta = STATUS_META[exp.status];
  const Icon = meta.icon;

  return (
    <motion.article
      {...fadeUp(delay)}
      className="tile tile-glow relative col-span-1 flex flex-col gap-4 overflow-hidden p-6 sm:col-span-2 lg:col-span-2"
    >
      <div
        className={`absolute left-0 top-0 h-full w-1 ${meta.stripe}`}
        aria-hidden
      />

      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-xl ${meta.iconBg} ring-1 ring-inset ring-border`}
          >
            <Icon className="h-4 w-4" />
          </span>
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ring-1 ring-inset ${meta.chip}`}
          >
            {meta.label}
          </span>
        </div>
        <span className="text-[11px] font-medium text-muted-foreground">
          {exp.duration}
        </span>
      </div>

      <div>
        <h3 className="text-lg font-bold leading-tight text-foreground">
          {exp.title}
        </h3>
        <p className="mt-1 text-sm font-semibold text-foreground/80">
          {exp.company}
        </p>
        <p className="mt-0.5 text-xs text-muted-foreground">
          {exp.period}
          {exp.location ? ` · ${exp.location}` : ""}
        </p>
      </div>

      <p className="line-clamp-4 text-sm leading-relaxed text-muted-foreground">
        {exp.description}
      </p>

      <div className="mt-auto flex flex-wrap gap-1.5">
        {exp.skills.map((s) => (
          <span key={s} className="chip text-[11px]">
            {s}
          </span>
        ))}
      </div>
    </motion.article>
  );
};

export default function ExperienceSection() {
  const [featured, ...rest] = EXPERIENCES;

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp()} className="mb-12 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            Experience
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Where I&apos;ve been so far.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            A short timeline of the roles and learnings that shaped how I
            approach quality engineering today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          <FeaturedTile exp={featured} delay={0.05} />
          {rest.map((exp, i) => (
            <CompactTile
              key={exp.title}
              exp={exp}
              delay={0.1 + i * 0.05}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
