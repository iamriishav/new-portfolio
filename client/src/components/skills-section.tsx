import { Code, Bot, Wrench, GitBranch, Sparkles, Award } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/reveal";

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
    title: "DevOps & Platforms",
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

const MARQUEE = [
  "Python",
  "Selenium",
  "pyATS",
  "Jenkins",
  "Git",
  "GitHub",
  "Postman",
  "Linux",
  "SQL",
  "PHP",
  "API Automation",
  "Regression",
  "Cursor",
  "Copilot",
  "VS Code",
  "Jupyter",
  "CCNA",
  "AWS",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 spotlight opacity-60" aria-hidden />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Capabilities"
          title="A toolbox built for reliability."
          subtitle="The stack I reach for when designing test frameworks, automating flows, and shipping releases I can stand behind."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal
              key={group.title}
              delay={(i % 3) * 0.08}
              className="tile tile-glow group flex flex-col gap-5 p-7"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-foreground ring-1 ring-inset ring-border transition-colors group-hover:bg-primary/15 group-hover:text-primary">
                  <group.icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-foreground">
                  {group.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((s) => (
                  <span key={s} className="chip text-xs">
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Tools marquee */}
      <div className="relative mt-16 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="animate-marquee pause-on-hover flex w-max gap-3">
          {[...MARQUEE, ...MARQUEE].map((tool, i) => (
            <span
              key={`${tool}-${i}`}
              className="whitespace-nowrap rounded-full border border-border bg-secondary/40 px-5 py-2.5 text-sm font-medium text-muted-foreground"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
