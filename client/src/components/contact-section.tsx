import { motion } from "framer-motion";
import { useState, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Loader2,
  Send,
  CheckCircle2,
  Github,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/reveal";

const CONTACT_ENDPOINT =
  "https://getform.io/f/b62f13c8-b83c-471f-9e18-40359e5186f2";

const DIRECT_CONTACTS = [
  {
    icon: Mail,
    label: "Email",
    value: "rajakrishav395@gmail.com",
    href: "mailto:rajakrishav395@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 94727 42873",
    href: "tel:+919472742873",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bengaluru, India",
    href: null as string | null,
  },
] as const;

const SOCIAL = [
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/iamriishav" },
  { icon: Github, label: "GitHub", href: "https://github.com/iamriishav" },
] as const;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const body = new FormData(form);

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        body,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Form submission failed");
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      form.reset();
      setTimeout(() => setSubmitted(false), 3500);
    } catch (err) {
      alert("There was an error submitting the form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] spotlight opacity-70" aria-hidden />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">
            Contact
          </span>
          <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Let&apos;s build something solid together.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Whether it&apos;s test automation, quality engineering, or an
            interesting product opportunity — my inbox is always open.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-4 lg:grid-cols-5">
          {/* Direct contact */}
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="tile tile-glow flex flex-col gap-6 p-7 lg:col-span-2"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Reach out directly
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Fastest channels — I usually respond within 24 hours.
              </p>
            </div>

            <ul className="flex flex-col gap-3">
              {DIRECT_CONTACTS.map((c) => {
                const inner = (
                  <>
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-border bg-secondary text-foreground">
                      <c.icon className="h-4 w-4" />
                    </span>
                    <div className="flex-1">
                      <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {c.label}
                      </div>
                      <div className="text-sm font-semibold text-foreground">
                        {c.value}
                      </div>
                    </div>
                    {c.href && (
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                    )}
                  </>
                );

                return (
                  <li key={c.label}>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 rounded-2xl border border-transparent bg-secondary/40 p-3 transition hover:border-border hover:bg-secondary/80"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="flex items-center gap-3 rounded-2xl bg-secondary/40 p-3">
                        {inner}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-auto">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Or find me online
              </p>
              <div className="flex gap-2">
                {SOCIAL.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:-translate-y-0.5 hover:border-foreground/40"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.aside>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="tile tile-glow relative overflow-hidden p-7 lg:col-span-3 lg:p-10"
          >
            {submitted ? (
              <div className="flex min-h-[460px] flex-col items-center justify-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-500/30">
                  <CheckCircle2 className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Message sent.
                </h3>
                <p className="mt-2 max-w-md text-sm text-muted-foreground">
                  Thanks for reaching out — I&apos;ll get back to you within 24
                  hours.
                </p>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                autoComplete="off"
                className="flex flex-col gap-5"
              >
                <input type="hidden" name="_gotcha" />

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Drop a message
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-foreground">
                    Tell me what you&apos;re working on.
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      Full name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                      minLength={2}
                      className="h-11 rounded-xl border-border bg-secondary/40 px-4"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@example.com"
                      required
                      className="h-11 rounded-xl border-border bg-secondary/40 px-4"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="subject"
                    className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    minLength={5}
                    className="h-11 rounded-xl border-border bg-secondary/40 px-4"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, role, or idea..."
                    className="min-h-[140px] rounded-xl border-border bg-secondary/40 px-4 py-3"
                    required
                    minLength={10}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-12 rounded-xl bg-foreground text-base font-semibold text-background hover:bg-foreground/90 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send message
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
