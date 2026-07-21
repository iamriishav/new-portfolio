import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useInView,
  animate,
  type MotionValue,
} from "framer-motion";
import { MapPin, Sparkles, Calendar, Building2 } from "lucide-react";
import profileImage from "@assets/profile_1752401362177.webp";
import { Reveal } from "@/components/reveal";

const STATEMENT =
  "Quality isn't a checkbox at the end. It's a mindset I build in from the first commit - resilient automation, fast feedback, and software that holds up in the real world.";

const FACTS = [
  { icon: Building2, label: "Persistent Systems" },
  { icon: MapPin, label: "Bengaluru, IN" },
  { icon: Calendar, label: "2+ years" },
  { icon: Sparkles, label: "Open to roles" },
] as const;

const STATS = [
  { number: 300, suffix: "+", label: "Automation scripts", caption: "shipped to date" },
  { number: 60, suffix: "+", label: "Defects caught", caption: "incl. P1 blockers" },
  { number: 40, suffix: "%", label: "Coverage uplift", caption: "on owned modules" },
  { number: 20, suffix: "%", label: "Manual effort saved", caption: "through automation" },
] as const;

/** A single word that brightens as the pinned statement scrolls past. */
function ScrubWord({
  progress,
  start,
  end,
  children,
}: {
  progress: MotionValue<number>;
  start: number;
  end: number;
  children: string;
}) {
  const opacity = useTransform(progress, [start, end], [0.18, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.28em] inline-block">
      {children}
    </motion.span>
  );
}

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const [value, setValue] = useState(reduce ? to : 0);

  useEffect(() => {
    if (reduce || !inView) return;
    const controls = animate(0, to, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, reduce]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

function PinnedStatement() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const words = STATEMENT.split(" ");

  if (reduce) {
    return (
      <div className="mx-auto max-w-5xl px-5 py-24 sm:px-6 lg:px-8">
        <p className="text-3xl font-semibold leading-snug tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {STATEMENT}
        </p>
      </div>
    );
  }

  return (
    <div ref={ref} className="relative h-[200vh]">
      <div className="sticky top-0 flex h-screen items-center">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <p className="text-3xl font-semibold leading-[1.18] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = (i + 1) / words.length;
              return (
                <ScrubWord
                  key={`${word}-${i}`}
                  progress={scrollYProgress}
                  start={start}
                  end={end}
                >
                  {word}
                </ScrubWord>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
}

function ProfileBlock() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <div
      ref={ref}
      className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8"
    >
      <Reveal className="lg:col-span-5">
        <div className="tile tile-glow relative aspect-[4/5] overflow-hidden">
          <motion.img
            src={profileImage}
            alt="Rishav Kumar Rajak"
            style={reduce ? undefined : { y: imageY }}
            className="absolute inset-0 h-[115%] w-full object-cover"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Currently
            </p>
            <p className="mt-1 text-lg font-semibold text-foreground">
              Senior QE · Persistent Systems
            </p>
          </div>
        </div>
      </Reveal>

      <div className="lg:col-span-7">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">
            About
          </span>
          <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
            The engineer behind the tests.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            I&apos;m a quality engineer with{" "}
            <span className="text-foreground">2+ years</span> of experience
            turning fragile, manual workflows into resilient automation. I care
            about test clarity, fast feedback loops, and shipping software that
            holds up under real-world conditions.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Right now I&apos;m embedded with the{" "}
            <span className="text-foreground">Cisco</span> team via Persistent
            Systems — owning automation for configuration templates and
            backup &amp; restore, running regression on daily builds, and
            building internal tooling that keeps the team unblocked.
          </p>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {FACTS.map((f) => (
              <span key={f.label} className="chip">
                <f.icon className="h-3.5 w-3.5" />
                {f.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-background py-24 sm:py-28">
      <PinnedStatement />

      <div className="mt-8 sm:mt-16">
        <ProfileBlock />
      </div>

      {/* Big-number stats */}
      <div className="mx-auto mt-24 max-w-7xl px-5 sm:mt-32 sm:px-6 lg:px-8">
        <Reveal className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">
            By the numbers
          </span>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Impact, measured.
          </h3>
        </Reveal>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className="bg-card p-7 sm:p-9"
            >
              <div className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
                <CountUp to={s.number} suffix={s.suffix} />
              </div>
              <div className="mt-4 text-sm font-semibold text-foreground">
                {s.label}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {s.caption}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
