import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/reveal";
import cabImage from "@assets/pro-cab_1752402845053.webp";
import lawyericImage from "@assets/pro-lawyeric_1752402845054.webp";
import quoteImage from "@assets/pro-quote_1752402845055.webp";
import weatherImage from "@assets/pro-weather_1752402863492.webp";

interface Project {
  name: string;
  tagline: string;
  description: string;
  technologies: readonly string[];
  image: string;
  github: string;
  live: string;
  accentBar: string;
  accentText: string;
}

const PROJECTS: readonly Project[] = [
  {
    name: "Skyline Weather",
    tagline: "Real-time forecasts",
    description:
      "A real-time weather app with city-specific search, built on React and the OpenWeatherMap API — with a responsive UI and cleanly separated data and presentation layers.",
    technologies: ["React.js", "CSS", "OpenWeatherMap API", "Responsive"],
    image: weatherImage,
    github: "https://github.com/iamriishav/skyline",
    live: "https://skylineweather.vercel.app/",
    accentBar: "bg-sky-400",
    accentText: "text-sky-300",
  },
  {
    name: "Daily Quotes",
    tagline: "A dose of inspiration",
    description:
      "A small daily-inspiration app that pulls a fresh quote from a public API on every load — lightweight, fast, and made to brighten the morning.",
    technologies: ["HTML", "CSS", "JavaScript", "REST API"],
    image: quoteImage,
    github: "https://github.com/iamriishav/yourdailyquotes",
    live: "https://yourdailyquotes.netlify.app/",
    accentBar: "bg-amber-400",
    accentText: "text-amber-300",
  },
  {
    name: "Lawyeric",
    tagline: "Legal docs, simplified",
    description:
      "A web platform for legal document preparation and delivery, built end-to-end with PHP and MySQL — from auth and forms to document generation.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: lawyericImage,
    github: "https://github.com/iamriishav/lawyeric",
    live: "https://lawyeric.000webhostapp.com/",
    accentBar: "bg-violet-400",
    accentText: "text-violet-300",
  },
  {
    name: "RideWithMe",
    tagline: "Cars on demand",
    description:
      "A car-rental web application supporting both personal and business bookings, backed by a full PHP/MySQL stack and a responsive Tailwind front end.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Tailwind"],
    image: cabImage,
    github: "https://github.com/iamriishav/RideWithMe-CabService",
    live: "https://ridewithmecabservice.000webhostapp.com/",
    accentBar: "bg-emerald-400",
    accentText: "text-emerald-300",
  },
];

const EASE = "cubic-bezier(0.22,1,0.36,1)";

function Panel({
  project,
  index,
  isActive,
}: {
  project: Project;
  index: number;
  isActive: boolean;
}) {
  return (
    <div
      style={{ flexGrow: isActive ? 6 : 1, transition: `flex-grow 0.7s ${EASE}` }}
      className="group relative flex-1 basis-0 overflow-hidden rounded-[1.75rem] border border-border"
    >
      <img
        src={project.image}
        alt={project.name}
        loading="lazy"
        style={{ transition: `opacity 0.7s ${EASE}, transform 0.7s ${EASE}` }}
        className={`absolute inset-0 h-full w-full object-cover object-top ${isActive ? "scale-100 opacity-100" : "scale-105 opacity-30 grayscale"
          }`}
      />
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${isActive
            ? "bg-gradient-to-t from-background via-background/50 to-transparent"
            : "bg-background/40"
          }`}
        aria-hidden
      />
      <div className={`absolute left-0 top-0 h-full w-1 ${project.accentBar}`} aria-hidden />

      {/* Collapsed spine */}
      <div
        style={{ transition: `opacity 0.4s ${EASE}` }}
        className={`absolute inset-0 flex flex-col items-center justify-between py-7 ${isActive ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
      >
        <span className="text-sm font-semibold tabular-nums text-muted-foreground">
          0{index + 1}
        </span>
        <span className="whitespace-nowrap text-lg font-semibold tracking-tight text-foreground [writing-mode:vertical-rl] [text-orientation:mixed]">
          {project.name}
        </span>
        <span className={`h-2 w-2 rounded-full ${project.accentBar}`} />
      </div>

      {/* Expanded content */}
      <div
        style={{
          transition: `opacity 0.5s ${EASE} 0.1s, transform 0.5s ${EASE} 0.1s`,
        }}
        className={`absolute inset-x-0 bottom-0 p-7 lg:p-9 ${isActive
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-5 opacity-0"
          }`}
      >
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold tabular-nums text-muted-foreground">
            0{index + 1}
          </span>
          <span className="h-px w-8 bg-border" aria-hidden />
          <span className={`text-xs font-semibold uppercase tracking-[0.25em] ${project.accentText}`}>
            {project.tagline}
          </span>
        </div>

        <h3 className="mt-3 whitespace-nowrap text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
          {project.name}
        </h3>

        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.map((t) => (
            <span key={t} className="chip text-xs">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
          >
            Visit live
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} source`}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-secondary/50 text-foreground backdrop-blur transition-colors hover:bg-secondary"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

/** Desktop: pinned accordion whose active panel advances with scroll. */
function ScrollAccordion() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const n = PROJECTS.length;
    const idx = Math.min(n - 1, Math.max(0, Math.floor(v * n)));
    setActive(idx);
  });

  return (
    <div
      ref={wrapperRef}
      style={{ height: `${PROJECTS.length * 72}vh` }}
      className="relative hidden md:block"
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden pt-16">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="mb-7">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">
              Selected work
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Things I&apos;ve shipped.
            </h2>
          </div>

          <div className="flex h-[58vh] max-h-[600px] gap-3">
            {PROJECTS.map((project, i) => (
              <Panel
                key={project.name}
                project={project}
                index={i}
                isActive={i === active}
              />
            ))}
          </div>

          <div className="mt-7 flex items-center gap-2">
            {PROJECTS.map((project, i) => (
              <span
                key={project.name}
                style={{ transition: `all 0.5s ${EASE}` }}
                className={`h-1.5 rounded-full ${i === active ? `w-8 ${project.accentBar}` : "w-2 bg-border"
                  }`}
              />
            ))}
            <span className="ml-3 text-xs tabular-nums text-muted-foreground">
              0{active + 1} / 0{PROJECTS.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Mobile + reduced-motion: clean vertical stack. */
function MobileStack() {
  return (
    <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Selected work"
        title="Things I've shipped."
        subtitle="A few side projects, prototypes, and experiments — built to explore new corners of the stack."
      />
      <div className="mt-14 flex flex-col gap-6">
        {PROJECTS.map((project, i) => (
          <Reveal
            key={project.name}
            delay={i * 0.05}
            className="tile tile-glow group relative flex flex-col"
          >
            <div className={`absolute left-0 top-0 z-10 h-1 w-full ${project.accentBar}`} aria-hidden />
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block aspect-[16/10] overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            </a>
            <div className="p-6">
              <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${project.accentText}`}>
                {project.tagline}
              </span>
              <div className="mt-2 flex items-start justify-between gap-3">
                <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                  {project.name}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} source`}
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-border bg-secondary/50 text-muted-foreground"
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.technologies.map((t) => (
                  <span key={t} className="chip text-xs">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground"
              >
                Visit live
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const reduce = useReducedMotion();

  return (
    <section id="projects" className="relative bg-background py-24 sm:py-32">
      {reduce ? (
        <MobileStack />
      ) : (
        <>
          <ScrollAccordion />
          <div className="md:hidden">
            <MobileStack />
          </div>
        </>
      )}
    </section>
  );
}
