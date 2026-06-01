import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { useMemo } from "react";
import cabImage from "@assets/pro-cab_1752402845053.webp";
import lawyericImage from "@assets/pro-lawyeric_1752402845054.webp";
import quoteImage from "@assets/pro-quote_1752402845055.webp";
import weatherImage from "@assets/pro-weather_1752402863492.webp";

interface Project {
  name: string;
  description: string;
  technologies: readonly string[];
  image: string;
  github: string;
  live: string;
  span: string;
  accent?: string;
}

const PROJECTS: readonly Project[] = [
  {
    name: "Skyline Weather",
    description:
      "Real-time weather web app with city-specific search built on React and the OpenWeatherMap API. Responsive UI with cleanly separated data and presentation layers.",
    technologies: ["React.js", "CSS", "OpenWeatherMap API", "Responsive"],
    image: weatherImage,
    github: "https://github.com/iamriishav/skyline",
    live: "https://skylineweather.vercel.app/",
    span: "lg:col-span-4",
    accent: "from-sky-500/20 to-cyan-500/0",
  },
  {
    name: "Daily Quotes",
    description:
      "A small daily-inspiration app that delivers a fresh quote from a public API on every load.",
    technologies: ["HTML", "CSS", "JS", "API"],
    image: quoteImage,
    github: "https://github.com/iamriishav/yourdailyquotes",
    live: "https://yourdailyquotes.netlify.app/",
    span: "lg:col-span-2",
    accent: "from-amber-500/20 to-orange-500/0",
  },
  {
    name: "Lawyeric",
    description:
      "A web platform for legal document preparation and delivery, built end-to-end with PHP + MySQL.",
    technologies: ["HTML", "CSS", "JS", "PHP", "MySQL"],
    image: lawyericImage,
    github: "https://github.com/iamriishav/lawyeric",
    live: "https://lawyeric.000webhostapp.com/",
    span: "lg:col-span-3",
    accent: "from-violet-500/20 to-fuchsia-500/0",
  },
  {
    name: "RideWithMe",
    description:
      "A car-rental web application supporting personal and business bookings with a full PHP/MySQL backend.",
    technologies: ["HTML", "CSS", "JS", "PHP", "MySQL", "Tailwind"],
    image: cabImage,
    github: "https://github.com/iamriishav/RideWithMe-CabService",
    live: "https://ridewithmecabservice.000webhostapp.com/",
    span: "lg:col-span-3",
    accent: "from-emerald-500/20 to-teal-500/0",
  },
];

const fadeUp = (delay = 0) =>
({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
} as const);

export default function ProjectsSection() {
  const projects = useMemo(() => PROJECTS, []);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp()} className="mb-12 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            Projects
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Things I&apos;ve shipped to learn, prototype, and explore.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              {...fadeUp(0.05 + i * 0.05)}
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={`tile tile-glow group relative col-span-1 flex flex-col overflow-hidden sm:col-span-2 ${project.span}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-tr ${project.accent}`}
                  aria-hidden
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/95 via-card/40 to-transparent" />

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`${project.name} GitHub repository`}
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur transition hover:bg-background"
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>

              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                    {project.name}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.map((t) => (
                    <span key={t} className="chip text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
