import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const response = await fetch("https://getform.io/f/b62f13c8-b83c-471f-9e18-40359e5186f2", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      if (response.ok) {
        setSubmitted(true);
        form.reset();
        setTimeout(() => {
          setSubmitted(false);
        }, 2000);
      } else {
        alert("There was an error submitting the form. Please try again later.");
      }
    } catch (error) {
      alert("There was an error submitting the form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "rajakrishav395@gmail.com",
      color: "bg-blue-600"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 94727 42873",
      color: "bg-blue-600"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "India",
      color: "bg-blue-600"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      content: "linkedin.com/in/iamriishav",
      color: "bg-blue-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Let's connect and discuss opportunities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div {...fadeInUp} className="space-y-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{info.title}</h3>
                  {info.title === "Email" ? (
                    <a
                      href={`mailto:${info.content}`}
                      className="text-gray-600 dark:text-gray-300 text-lg hover:text-blue-600"
                      target="_blank" rel="noopener noreferrer"
                    >
                      {info.content}
                    </a>
                  ) : info.title === "Phone" ? (
                    <a
                      href={`tel:${info.content.replace(/\s+/g, '')}`}
                      className="text-gray-600 dark:text-gray-300 text-lg hover:text-blue-600"
                      target="_blank" rel="noopener noreferrer"
                    >
                      {info.content}
                    </a>
                  ) : info.title === "LinkedIn" ? (
                    <a
                      href={`https://${info.content}`.replace('https://https://', 'https://')}
                      className="text-gray-600 dark:text-gray-300 text-lg hover:text-blue-600"
                      target="_blank" rel="noopener noreferrer"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-600 dark:text-gray-300 text-lg">{info.content}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div {...fadeInUp} className="modern-card p-8 rounded-2xl shadow-lg">
            {submitted ? (
              <motion.div
                className="text-center py-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
                <p>Your message has been sent successfully.</p>
              </motion.div>
            ) : (
              <form
                autoComplete="off"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="_gotcha" id="honeypot" />
                <div>
                  <label className="block font-semibold mb-1" htmlFor="name">Name</label>
                  <Input id="name" name="name" placeholder="Your name" required minLength={2} />
                </div>
                <div>
                  <label className="block font-semibold mb-1" htmlFor="email">Email</label>
                  <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
                </div>
                <div>
                  <label className="block font-semibold mb-1" htmlFor="subject">Subject</label>
                  <Input id="subject" name="subject" placeholder="Message subject" required minLength={5} />
                </div>
                <div>
                  <label className="block font-semibold mb-1" htmlFor="message">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    className="min-h-[120px] max-h-[200px] resize-none"
                    required
                    minLength={10}
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 text-white py-3 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
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
