import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Briefcase, GraduationCap, Sparkles, ArrowRight } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/reveal";

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
      "Owning automation for Configuration Template and Configuration Backup & Restore. I run regression on daily builds, triage critical defects, and ship internal tooling that keeps the team unblocked.",
    highlights: [
      "300+ automation scripts shipped, cutting manual effort by 20%",
      "60+ defects caught — including several P1 blockers",
      "Test coverage lifted by 40% across owned modules",
    ],
    skills: ["GUI Automation", "Regression", "Python", "API Testing", "Defect Management"],
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
    skills: ["Software Engineering", "DSA", "Databases", "IT"],
  },
];

const STATUS_META: Record<
  Status,
  { label: string; icon: typeof Briefcase; dot: string; text: string }
> = {
  current: {
    label: "Now",
    icon: Sparkles,
    dot: "bg-sky-500/15 text-sky-300 ring-sky-500/40",
    text: "text-sky-300",
  },
  previous: {
    label: "Previous",
    icon: Briefcase,
    dot: "bg-violet-500/15 text-violet-300 ring-violet-500/40",
    text: "text-violet-300",
  },
  education: {
    label: "Education",
    icon: GraduationCap,
    dot: "bg-emerald-500/15 text-emerald-300 ring-emerald-500/40",
    text: "text-emerald-300",
  },
};

export default function ExperienceSection() {
  const reduce = useReducedMotion();
  const railRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start center", "end center"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Journey"
          title="Where I've been."
          subtitle="The roles and learnings that shaped how I approach quality engineering today."
        />

        <div ref={railRef} className="relative mt-16">
          {/* Rail track + animated fill */}
          <div
            className="absolute bottom-2 left-4 top-2 w-px bg-border sm:left-5"
            aria-hidden
          />
          <motion.div
            style={{ scaleY: reduce ? 1 : scaleY }}
            className="absolute bottom-2 left-4 top-2 w-px origin-top bg-gradient-to-b from-sky-400 via-violet-400 to-emerald-400 sm:left-5"
            aria-hidden
          />

          <div className="space-y-14">
            {EXPERIENCES.map((exp, i) => {
              const meta = STATUS_META[exp.status];
              const Icon = meta.icon;
              return (
                <div key={exp.title} className="relative pl-14 sm:pl-20">
                  <span
                    className={`absolute left-4 top-0 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full ring-1 ring-inset sm:left-5 ${meta.dot}`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>

                  <Reveal delay={i * 0.05}>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span
                        className={`text-xs font-semibold uppercase tracking-[0.2em] ${meta.text}`}
                      >
                        {meta.label}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {exp.period}
                      </span>
                      {exp.duration && (
                        <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-muted-foreground">
                          {exp.duration}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
                      {exp.title}
                    </h3>
                    <p className="mt-1.5 text-base font-medium text-foreground/80">
                      {exp.company}
                      {exp.location ? (
                        <span className="text-muted-foreground">
                          {" "}
                          · {exp.location}
                        </span>
                      ) : null}
                    </p>

                    <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                      {exp.description}
                    </p>

                    {exp.highlights && (
                      <ul className="mt-5 grid max-w-2xl grid-cols-1 gap-2.5 sm:grid-cols-2">
                        {exp.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-2.5 rounded-2xl border border-border bg-card p-3.5"
                          >
                            <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                            <span className="text-sm leading-snug text-foreground/90">
                              {h}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {exp.skills.map((s) => (
                        <span key={s} className="chip text-xs">
                          {s}
                        </span>
                      ))}
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
