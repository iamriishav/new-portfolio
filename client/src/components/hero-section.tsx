import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import {
  Mail,
  Download,
  Github,
  Linkedin,
  ArrowDown,
  ArrowUpRight,
} from "lucide-react";
import profileImage from "@assets/profile_1752401362177.webp";

const RESUME_URL = "/Rishav_Kumar_Rajak_Resume.pdf";
const RESUME_FILE_NAME = "Rishav_Kumar_Rajak_Resume.pdf";

const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com/iamriishav", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/iamriishav", label: "LinkedIn" },
  { icon: Mail, href: "mailto:rajakrishav395@gmail.com", label: "Email" },
] as const;

const METRICS = [
  { value: "300+", label: "automation scripts" },
  { value: "60+", label: "defects caught" },
  { value: "40%", label: "coverage uplift" },
] as const;

export default function HeroSection() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  const scrollToId = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = RESUME_URL;
    link.download = RESUME_FILE_NAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-5 pb-24 pt-28 sm:px-6"
    >
      {/* Cinematic backdrop */}
      <div className="absolute inset-0 grid-pattern opacity-70 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" aria-hidden />
      <motion.div
        style={reduce ? undefined : { y: glowY }}
        className="spotlight pointer-events-none absolute inset-0"
        aria-hidden
      />
      <motion.div
        style={reduce ? undefined : { y: glowY }}
        className="aurora pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 opacity-80"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent"
        aria-hidden
      />

      <motion.div
        style={
          reduce
            ? undefined
            : { y: contentY, opacity: contentOpacity, scale: contentScale }
        }
        className="relative z-10 flex flex-col items-center text-center"
      >
        {/* Portrait */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.8, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-8"
        >
          <div className="absolute -inset-4 rounded-full bg-primary/20 blur-2xl" aria-hidden />
          <div className="animate-floaty relative h-24 w-24 overflow-hidden rounded-full p-[2px] ring-1 ring-white/10 sm:h-28 sm:w-28">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/60 via-cyan-400/40 to-transparent" aria-hidden />
            <img
              src={profileImage}
              alt="Rishav Kumar Rajak"
              className="relative h-full w-full rounded-full object-cover"
              draggable={false}
            />
          </div>
        </motion.div>

        {/* Availability */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Available for new opportunities
          <span className="text-border">·</span>
          Bengaluru, IN
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance text-5xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-7xl lg:text-[5.5rem]"
        >
          Hi, I&apos;m Rishav.
          <span className="mt-2 block text-gradient">I engineer quality.</span>
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          Senior Quality Engineer at{" "}
          <span className="font-medium text-foreground">Persistent Systems</span>,
          embedded with the Cisco team — designing test frameworks and automation
          that catch problems before your users ever do.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <button
            type="button"
            onClick={() => scrollToId("contact")}
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-7 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
          >
            <Mail className="h-4 w-4" />
            Get in touch
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
          <button
            type="button"
            onClick={handleDownloadResume}
            className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-secondary/40 px-7 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-secondary"
          >
            <Download className="h-4 w-4" />
            Download resume
          </button>
        </motion.div>

        {/* Metrics strip */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex items-center gap-6 sm:gap-10"
        >
          {METRICS.map((m, i) => (
            <div key={m.label} className="flex items-center gap-6 sm:gap-10">
              {i > 0 && <span className="h-8 w-px bg-border" aria-hidden />}
              <div className="text-center">
                <div className="text-2xl font-semibold text-foreground sm:text-3xl">
                  {m.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {m.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-10 flex items-center gap-3"
        >
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary/40 text-muted-foreground backdrop-blur transition hover:-translate-y-0.5 hover:border-foreground/30 hover:text-foreground"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <button
        type="button"
        onClick={() => scrollToId("about")}
        aria-label="Scroll to about section"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground transition hover:text-foreground md:flex"
      >
        Scroll
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </button>
    </section>
  );
}
