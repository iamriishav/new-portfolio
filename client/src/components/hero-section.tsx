import { motion } from "framer-motion";
import { Mail, Download, Github, Linkedin, MapPin, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@assets/profile_1752401362177.webp";

const RESUME_URL = "/Rishav_Kumar_Rajak_Resume.pdf";
const RESUME_FILE_NAME = "Rishav_Kumar_Rajak_Resume.pdf";

const SOCIAL_LINKS = [
  {
    icon: Github,
    href: "https://github.com/iamriishav",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/iamriishav",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:rajakrishav395@gmail.com",
    label: "Email",
  },
] as const;

export default function HeroSection() {
  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

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
      id="home"
      className="relative min-h-screen overflow-hidden pt-32 pb-20"
    >
      <div
        className="absolute inset-0 grid-pattern opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
        aria-hidden
      />
      <div
        className="aurora pointer-events-none absolute -top-40 left-1/2 h-[640px] w-[640px] -translate-x-1/2 opacity-90"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <div className="lg:col-span-7 lg:pt-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to new opportunities
            <span className="text-border">·</span>
            <MapPin className="h-3 w-3" />
            Bengaluru, IN
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-5xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m Rishav.
            <span className="block text-gradient">
              I build quality into software.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            Senior Quality Engineer at{" "}
            <span className="font-semibold text-foreground">
              Persistent Systems
            </span>
            , currently embedded with the Cisco team. I design test frameworks
            and automation that catch problems before users do.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button
              onClick={scrollToContact}
              className="h-11 rounded-full bg-foreground px-6 text-sm font-semibold text-background hover:bg-foreground/90"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get in touch
            </Button>
            <Button
              onClick={handleDownloadResume}
              variant="outline"
              className="h-11 rounded-full border-border bg-background/60 px-6 text-sm font-semibold text-foreground backdrop-blur hover:bg-secondary"
            >
              <Download className="mr-2 h-4 w-4" />
              Download resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex items-center gap-3"
          >
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/60 text-muted-foreground backdrop-blur transition hover:-translate-y-0.5 hover:border-foreground/30 hover:text-foreground"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
            <div className="ml-2 h-px w-12 bg-border" aria-hidden />
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              say hi
            </span>
          </motion.div>
        </div>

        <div className="relative flex justify-center lg:col-span-5 lg:items-start lg:justify-end lg:pt-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative w-full max-w-md"
          >
            <div className="tile tile-glow relative aspect-[4/5] overflow-hidden p-0">
              <img
                src={profileImage}
                alt="Rishav Kumar Rajak"
                className="h-full w-full object-cover"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/70 to-transparent p-6">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Currently
                    </p>
                    <p className="mt-1 font-semibold text-foreground">
                      Senior QE · Persistent Systems
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 ring-1 ring-emerald-500/30 dark:text-emerald-400">
                    Hiring me?
                  </span>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-20 -left-6 hidden h-24 w-24 rounded-full border border-border bg-background shadow-lg md:flex md:items-center md:justify-center">
              <div className="text-center">
                <div className="text-xl font-bold text-foreground">2+</div>
                <div className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  Years
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -right-10 top-3 hidden rounded-2xl border border-border bg-background px-3 py-2 shadow-lg md:block">
              <div className="text-xs text-muted-foreground">Latest</div>
              <div className="text-sm font-semibold text-foreground">
                300+ scripts shipped
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <button
        type="button"
        onClick={scrollToAbout}
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground transition hover:text-foreground md:flex"
      >
        Scroll
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </button>
    </section>
  );
}
